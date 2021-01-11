import scrapy
from scrapy.crawler import CrawlerProcess
from seleniumwire import webdriver
import time
import re
import json
import csv
from selenium.webdriver.firefox.options import Options as ff_options

csv_columns = ['Title', 'size', 'price', 'details', 'color', 'style', 'category', 'images', 'description']
csvfile = open('data.csv', 'w', newline='', encoding="utf-8")
writer = csv.DictWriter(csvfile, fieldnames=csv_columns)
writer.writeheader()
driver = webdriver.Firefox()


class Hurley(scrapy.Spider):
    text = ''
    name = 'hurley'
    start_urls = ['https://www.hurley.com']
    CONCURRENT_REQUESTS = 1

    def parse(self, response):
        for i in response.css('.nested li'):
            alLinks = i.css('a::attr(href)').get()
            cat = i.css('a::text').get()
            yield scrapy.Request(url='https://www.hurley.com' + alLinks, callback=self.semiFinale,
                                 meta={'cat': cat})

    def semiFinale(self, response):
        category = response.meta['cat']
        time.sleep(1)
        options = ff_options()
        options.add_argument('--headless')

        driver.get(response.url)

        response1 = scrapy.Selector(text=driver.page_source)
        while not [v for v in driver.requests if 'www.hurley.com/products' in v.url]:
            time.sleep(1)
        ab = [v for v in driver.requests if 'www.hurley.com/products' in v.url]
        for i in ab:
            dupUrl = i.url
            file = open('DuplicateURLS.txt', 'r')
            fread = file.read()
            if dupUrl not in fread:
                fw = open('DuplicateURLS.txt', 'a')
                fw.write(dupUrl + '\n')
                try:
                    jsonData = json.loads(i.response.body)
                except:
                    continue
                item = dict()
                item['images'] = [v['src'] for v in jsonData['images']]
                item['category'] = category

                tempTag = list(jsonData.get('productInfo').keys())[0]
                item['Title'] = jsonData.get('productInfo').get(tempTag).get('title')
                details = jsonData.get('productInfo').get(tempTag).get('details')
                details = details.replace('<li>', ',').replace('</li>', '').replace('<!-- split -->', '').replace(
                    '<h3>',
                    '').replace(
                    '</h3>', '').replace('<ul>', '').replace('</ul>', '').replace('<span>', '').replace('</span>', '')
                details = details.split('\n')
                item['details'] = ''.join(details)
                color = jsonData.get('option1Values')
                item['color'] = str(color).replace('[', '').replace(']', '').replace("'", '')
                size = jsonData.get('option2Values')
                size = str(size).replace('[', '').replace(']', '').replace("'", '')
                item['size'] = size
                style = jsonData.get('variants')[0].get('sku')
                style = style.split('-')
                item['style'] = style[0]
                item['price'] = float(jsonData.get('variants')[0].get('price')) / 100
                resp = scrapy.Selector(text=list(jsonData['productInfo'].values())[0]['description'])
                try:
                    item['description'] = resp.css('::text').extract()[-1]
                except:
                    pass
                resp = scrapy.Selector(text=list(jsonData['productInfo'].values())[0]['details'])
                try:
                    item['details'] = '\n'.join(resp.css('::text').extract())
                except:
                    pass
                writer.writerow(item)
                csvfile.flush()
        # This is for pagination
        if not response1.css('.bc-sf-filter-bottom-pagination-default ul li'):
            pass
        else:
            if not response1.css('.bc-sf-filter-bottom-pagination-default ul li')[-1].css('a svg'):
                pass

            else:
                url1 = response1.css('.bc-sf-filter-bottom-pagination-default ul li')[-1].css(
                    'a::attr(href)').extract_first()
                # driver.close()
                if 'https://www.hurley.com' in url1:
                    yield scrapy.Request(url=url1, callback=self.semiFinale, meta={'cat': category})
                else:
                    yield scrapy.Request(url='https://www.hurley.com' + url1, callback=self.semiFinale
                                         , meta={'cat': category})

    def close(spider, reason):
        driver.close()


process = CrawlerProcess({
    'USER_AGENT': "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.131 Safari/537.36"
})

process.crawl(Hurley)
process.start()
