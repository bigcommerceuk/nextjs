(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogPage; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





var CatalogPage = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(CatalogPage, _PageManager);

  function CatalogPage() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = CatalogPage.prototype;

  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_2___default.a.format({
      pathname: url.pathname,
      search: _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(url.query)
    });
  };

  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");











var defaultOptions = {
  accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
  blockerSelector: '#facetedSearch .blocker',
  clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
  componentSelector: '#facetedSearch-navList',
  facetNavListSelector: '#facetedSearch .navList',
  priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
  priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
  priceRangeFormSelector: '#facet-range-form',
  priceRangeMaxPriceSelector: '#facet-range-form [name=max_price]',
  priceRangeMinPriceSelector: '#facet-range-form [name=min_price]',
  showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
  facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
  modal: Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["default"])('#modal')[0],
  modalOpen: false
};
/**
 * Faceted search view component
 */

var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;

    // Private properties
    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = []; // Init collapsibles

    Object(_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Init price validator

    this.initPriceValidator(); // Show limited items by default

    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    }); // Mark initially collapsed accordions

    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');

      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    }); // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped

    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    }); // Observe user events

    this.onStateChange = this.onStateChange.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();
  } // Public methods


  var _proto = FacetedSearch.prototype;

  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    } // Init collapsibles


    Object(_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])(); // Init price validator

    this.initPriceValidator(); // Restore view state

    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems(); // Bind events

    this.bindEvents();
  };

  _proto.updateView = function updateView() {
    var _this2 = this;

    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(_utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();

      if (err) {
        throw new Error(err);
      } // Refresh view with new content


      _this2.refreshView(content);
    });
  };

  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id'); // Remove

    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
  };

  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');

    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
    }
  };

  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id'); // Toggle depending on `collapsed` flag

    if (lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, id)) {
      this.getMoreFacetResults($navList);
      return true;
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;

    var facet = $navList.data('facet');
    var facetUrl = _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl();

    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }

        _this3.options.modal.open();

        _this3.options.modalOpen = true;

        _this3.options.modal.updateContent(response);
      });
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();

      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };

  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };

  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };

  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this4.collapseFacet($accordionToggle);
    });
  };

  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this5.expandFacet($accordionToggle);
    });
  } // Private methods
  ;

  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }

    var validator = Object(_nod__WEBPACK_IMPORTED_MODULE_10__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _utils_form_utils__WEBPACK_IMPORTED_MODULE_9__["Validators"].setMinMaxPriceValidation(validator, selectors, this.options.validationErrorMessages);
    this.priceRangeValidator = validator;
  };

  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;

    var $navLists = $(this.options.facetNavListSelector); // Restore collapsed state for each facet

    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this6.collapsedFacetItems, id);

      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };

  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this7.collapsedFacets, id);

      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };

  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents(); // DOM events

    $(window).on('statechange', this.onStateChange);
    $(window).on('popstate', this.onPopState);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(window).off('popstate', this.onPopState);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
  };

  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation(); // Update URL

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url);
  };

  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href')); // Prevent default

    event.preventDefault(); // Toggle visible items

    this.toggleFacetItems($navList);
  };

  _proto.onFacetClick = function onFacetClick(event, currentTarget) {
    var $link = $(currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected'); // Update URL

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url);

    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };

  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page; // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead

    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    event.preventDefault();
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(urlQueryParams)
    }));
  };

  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();

    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_10__["default"].constants.VALID)) {
      return;
    }

    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var queryParams = decodeURI($(currentTarget).serialize()).split('&');
    queryParams = _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].parseQueryParams(queryParams);

    for (var key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        url.query[key] = queryParams[key];
      }
    } // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead


    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(urlQueryParams)
    }));
  };

  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };

  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;

    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacets, id);
    }
  };

  _proto.onPopState = function onPopState() {
    var currentUrl = window.location.href;
    var searchParams = new URLSearchParams(currentUrl); // If searchParams does not contain a page value then modify url query string to have page=1

    if (!searchParams.has('page')) {
      var linkUrl = $('.pagination-link').attr('href');
      var re = /page=[0-9]+/i;
      var updatedLinkUrl = linkUrl.replace(re, 'page=1');
      window.history.replaceState({}, document.title, updatedLinkUrl);
    }

    $(window).trigger('statechange');
  };

  return FacetedSearch;
}();

/* harmony default export */ __webpack_exports__["default"] = (FacetedSearch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var forms = {
  email: function email(value) {
    var re = /^.+@.+\..+/;
    return re.test(value);
  },

  /**
   * Validates a password field
   * @param value
   * @returns {boolean}
   */
  password: function password(value) {
    return this.notEmpty(value);
  },

  /**
   * validates if a field is empty
   * @param value
   * @returns {boolean}
   *
   */
  notEmpty: function notEmpty(value) {
    return value.length > 0;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./assets/js/theme/common/utils/form-utils.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/common/utils/form-utils.js ***!
  \****************************************************/
/*! exports provided: createPasswordValidationErrorTextObject, classifyForm, Validators, insertStateHiddenField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPasswordValidationErrorTextObject", function() { return createPasswordValidationErrorTextObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classifyForm", function() { return classifyForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStateHiddenField", function() { return insertStateHiddenField; });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/forms */ "./assets/js/theme/common/models/forms.js");





var inputTagNames = ['input', 'select', 'textarea'];
/**
 * Set up Object with Error Messages on Password Validation. Please use messages in mentioned order
 * @param {string} empty defines error text for empty field
 * @param {string} confirm defines error text for empty confirmation field
 * @param {string} mismatch defines error text if confirm passford mismatches passford field
 * @param {string} invalid defines error text for invalid password charaters sequence
 * @return {object} messages or default texts if nothing is providing
 */

var createPasswordValidationErrorTextObject = function createPasswordValidationErrorTextObject(empty, confirm, mismatch, invalid) {
  return {
    onEmptyPasswordErrorText: empty,
    onConfirmPasswordErrorText: confirm,
    onMismatchPasswordErrorText: mismatch,
    onNotValidPasswordErrorText: invalid
  };
};
/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */

function classifyInput(input, formFieldClass) {
  var $input = $(input);
  var $formField = $input.parent("." + formFieldClass);
  var tagName = $input.prop('tagName').toLowerCase();
  var className = formFieldClass + "--" + tagName;
  var specificClassName; // Input can be text/checkbox/radio etc...

  if (tagName === 'input') {
    var inputType = $input.prop('type');

    if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(['radio', 'checkbox', 'submit'], inputType)) {
      // ie: .form-field--checkbox, .form-field--radio
      className = formFieldClass + "--" + lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(inputType);
    } else {
      // ie: .form-field--input .form-field--inputText
      specificClassName = "" + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(inputType);
    }
  } // Apply class modifier


  return $formField.addClass(className).addClass(specificClassName);
}
/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */


function classifyForm(formSelector, options) {
  if (options === void 0) {
    options = {};
  }

  var $form = $(formSelector);
  var $inputs = $form.find(inputTagNames.join(', ')); // Obtain options

  var _options = options,
      _options$formFieldCla = _options.formFieldClass,
      formFieldClass = _options$formFieldCla === void 0 ? 'form-field' : _options$formFieldCla; // Classify each input in a form

  $inputs.each(function (__, input) {
    classifyInput(input, formFieldClass);
  });
  return $form;
}
/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */

function getFieldId($field) {
  var fieldId = $field.prop('name').match(/(\[.*\])/);

  if (fieldId && fieldId.length !== 0) {
    return fieldId[0];
  }

  return '';
}
/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */


function insertStateHiddenField($stateField) {
  var fieldId = getFieldId($stateField);
  var stateFieldAttrs = {
    type: 'hidden',
    name: "FormFieldIsText" + fieldId,
    value: '1'
  };
  $stateField.after($('<input />', stateFieldAttrs));
}

var Validators = {
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   * @param {string} errorText describes errorMassage on email validation
   */
  setEmailValidation: function setEmailValidation(validator, field, errorText) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_4__["default"].email(val);
          cb(result);
        },
        errorMessage: errorText
      });
    }
  },

  /**
   * Validate password fields
   * @param validator
   * @param passwordSelector
   * @param password2Selector
   * @param requirements
   * @param {object} errorTextsObject
   * @param isOptional
   */
  setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, _ref, isOptional) {
    var onEmptyPasswordErrorText = _ref.onEmptyPasswordErrorText,
        onConfirmPasswordErrorText = _ref.onConfirmPasswordErrorText,
        onMismatchPasswordErrorText = _ref.onMismatchPasswordErrorText,
        onNotValidPasswordErrorText = _ref.onNotValidPasswordErrorText;
    var $password = $(passwordSelector);
    var passwordValidations = [{
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.length;

        if (isOptional) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: onEmptyPasswordErrorText
    }, {
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength; // If optional and nothing entered, it is valid

        if (isOptional && val.length === 0) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: onNotValidPasswordErrorText
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val.length;

        if (isOptional) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: onConfirmPasswordErrorText
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val === $password.val();
        cb(result);
      },
      errorMessage: onMismatchPasswordErrorText
    }];
    validator.add(passwordValidations);
  },

  /**
   * Validate password fields
   * @param {Nod} validator
   * @param {Object} selectors
   * @param {string} selectors.errorSelector
   * @param {string} selectors.fieldsetSelector
   * @param {string} selectors.formSelector
   * @param {string} selectors.maxPriceSelector
   * @param {string} selectors.minPriceSelector
   */
  setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors, priceValidationErrorTexts) {
    if (priceValidationErrorTexts === void 0) {
      priceValidationErrorTexts = {};
    }

    var errorSelector = selectors.errorSelector,
        fieldsetSelector = selectors.fieldsetSelector,
        formSelector = selectors.formSelector,
        maxPriceSelector = selectors.maxPriceSelector,
        minPriceSelector = selectors.minPriceSelector; // eslint-disable-next-line object-curly-newline

    var _priceValidationError = priceValidationErrorTexts,
        onMinPriceError = _priceValidationError.onMinPriceError,
        onMaxPriceError = _priceValidationError.onMaxPriceError,
        minPriceNotEntered = _priceValidationError.minPriceNotEntered,
        maxPriceNotEntered = _priceValidationError.maxPriceNotEntered,
        onInvalidPrice = _priceValidationError.onInvalidPrice;
    validator.configure({
      form: formSelector,
      preventSubmit: true,
      successClass: '_' // KLUDGE: Don't apply success class

    });
    validator.add({
      errorMessage: onMinPriceError,
      selector: minPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: onMaxPriceError,
      selector: maxPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: maxPriceNotEntered,
      selector: maxPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: minPriceNotEntered,
      selector: minPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: onInvalidPrice,
      selector: [minPriceSelector, maxPriceSelector],
      validate: 'min-number:0'
    });
    validator.setMessageOptions({
      selector: [minPriceSelector, maxPriceSelector],
      parent: fieldsetSelector,
      errorSpan: errorSelector
    });
  },

  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setStateCountryValidation: function setStateCountryValidation(validator, field, errorText) {
    if (field) {
      validator.add({
        selector: field,
        validate: 'presence',
        errorMessage: errorText
      });
    }
  },

  /**
   * Removes classes from dirty form if previously checked
   * @param field
   */
  cleanUpStateValidation: function cleanUpStateValidation(field) {
    var $fieldClassElement = $("[data-type=\"" + field.data('fieldType') + "\"]");
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes[value]);
      }
    });
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");


function decrementCounter(counter, item) {
  var index = counter.indexOf(item);

  if (index > -1) {
    counter.splice(index, 1);
  }
}

function incrementCounter(counter, item) {
  counter.push(item);
}

function updateCounterNav(counter, $link, urlContext) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }

    $link.attr('href', urlContext.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (function (urlContext) {
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? $checked.map(function (index, element) {
      return element.value;
    }).get() : [];
    updateCounterNav(compareCounter, $compareLink, urlContext);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');

    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }

    updateCounterNav(compareCounter, $clickedCompareLink, urlContext);
  });
  $('body').on('submit', '[data-product-compare]', function (event) {
    var $this = $(event.currentTarget);
    var productsToCompare = $this.find('input[name="products\[\]"]:checked');

    if (productsToCompare.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showAlertModal"])('You must select at least two products to compare');
      event.preventDefault();
    }
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');

    if ($clickedCheckedInput.length <= 1) {
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["showAlertModal"])('You must select at least two products to compare');
      return false;
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2ZhY2V0ZWQtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vbW9kZWxzL2Zvcm1zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvZm9ybS11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiXSwibmFtZXMiOlsiQ2F0YWxvZ1BhZ2UiLCJvblNvcnRCeVN1Ym1pdCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsInVybCIsIlVybCIsInBhcnNlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicXVlcnlQYXJhbXMiLCIkIiwic2VyaWFsaXplIiwic3BsaXQiLCJxdWVyeSIsInBhZ2UiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1hdCIsInBhdGhuYW1lIiwic2VhcmNoIiwidXJsVXRpbHMiLCJidWlsZFF1ZXJ5U3RyaW5nIiwiUGFnZU1hbmFnZXIiLCJkZWZhdWx0T3B0aW9ucyIsImFjY29yZGlvblRvZ2dsZVNlbGVjdG9yIiwiYmxvY2tlclNlbGVjdG9yIiwiY2xlYXJGYWNldFNlbGVjdG9yIiwiY29tcG9uZW50U2VsZWN0b3IiLCJmYWNldE5hdkxpc3RTZWxlY3RvciIsInByaWNlUmFuZ2VFcnJvclNlbGVjdG9yIiwicHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3IiLCJwcmljZVJhbmdlRm9ybVNlbGVjdG9yIiwicHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3IiLCJwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvciIsInNob3dNb3JlVG9nZ2xlU2VsZWN0b3IiLCJmYWNldGVkU2VhcmNoRmlsdGVySXRlbXMiLCJtb2RhbCIsIm1vZGFsRmFjdG9yeSIsIm1vZGFsT3BlbiIsIkZhY2V0ZWRTZWFyY2giLCJyZXF1ZXN0T3B0aW9ucyIsImNhbGxiYWNrIiwib3B0aW9ucyIsImNvbGxhcHNlZEZhY2V0cyIsImNvbGxhcHNlZEZhY2V0SXRlbXMiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJpbml0UHJpY2VWYWxpZGF0b3IiLCJlYWNoIiwiaW5kZXgiLCJuYXZMaXN0IiwiY29sbGFwc2VGYWNldEl0ZW1zIiwiYWNjb3JkaW9uVG9nZ2xlIiwiJGFjY29yZGlvblRvZ2dsZSIsImNvbGxhcHNpYmxlIiwiZGF0YSIsImlzQ29sbGFwc2VkIiwicHVzaCIsInRhcmdldElkIiwic2V0VGltZW91dCIsImlzIiwiY29sbGFwc2VBbGxGYWNldHMiLCJvblN0YXRlQ2hhbmdlIiwiYmluZCIsIm9uVG9nZ2xlQ2xpY2siLCJvbkFjY29yZGlvblRvZ2dsZSIsIm9uQ2xlYXJGYWNldCIsIm9uRmFjZXRDbGljayIsIm9uUmFuZ2VTdWJtaXQiLCJmaWx0ZXJGYWNldEl0ZW1zIiwiYmluZEV2ZW50cyIsInJlZnJlc2hWaWV3IiwiY29udGVudCIsInJlc3RvcmVDb2xsYXBzZWRGYWNldHMiLCJyZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcyIsInVwZGF0ZVZpZXciLCJzaG93IiwiYXBpIiwiZ2V0UGFnZSIsImdldFVybCIsImVyciIsImhpZGUiLCJFcnJvciIsImV4cGFuZEZhY2V0SXRlbXMiLCIkbmF2TGlzdCIsImlkIiwiYXR0ciIsImhhc01vcmVSZXN1bHRzIiwidG9nZ2xlRmFjZXRJdGVtcyIsImdldE1vcmVGYWNldFJlc3VsdHMiLCJmYWNldCIsImZhY2V0VXJsIiwic2hvd01vcmUiLCJ0ZW1wbGF0ZSIsInBhcmFtcyIsImxpc3RfYWxsIiwicmVzcG9uc2UiLCJvcGVuIiwidXBkYXRlQ29udGVudCIsIiRpdGVtcyIsInZhbCIsInRvTG93ZXJDYXNlIiwiZWxlbWVudCIsInRleHQiLCJpbmRleE9mIiwiZXhwYW5kRmFjZXQiLCJjb2xsYXBzZUZhY2V0IiwiY2xvc2UiLCIkYWNjb3JkaW9uVG9nZ2xlcyIsImV4cGFuZEFsbEZhY2V0cyIsImxlbmd0aCIsInZhbGlkYXRvciIsIm5vZCIsInNlbGVjdG9ycyIsImVycm9yU2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwiZm9ybVNlbGVjdG9yIiwibWF4UHJpY2VTZWxlY3RvciIsIm1pblByaWNlU2VsZWN0b3IiLCJWYWxpZGF0b3JzIiwic2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uIiwidmFsaWRhdGlvbkVycm9yTWVzc2FnZXMiLCJwcmljZVJhbmdlVmFsaWRhdG9yIiwiJG5hdkxpc3RzIiwic2hvdWxkQ29sbGFwc2UiLCJ1bmJpbmRFdmVudHMiLCJvbiIsIm9uUG9wU3RhdGUiLCJkb2N1bWVudCIsImhvb2tzIiwib2ZmIiwiJGxpbmsiLCJzdG9wUHJvcGFnYXRpb24iLCJnb1RvVXJsIiwiJHRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwidXJsUXVlcnlQYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJhcmVBbGwiLCJjb25zdGFudHMiLCJWQUxJRCIsImRlY29kZVVSSSIsInBhcnNlUXVlcnlQYXJhbXMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImN1cnJlbnRVcmwiLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJoYXMiLCJsaW5rVXJsIiwicmUiLCJ1cGRhdGVkTGlua1VybCIsInJlcGxhY2UiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwidGl0bGUiLCJ0cmlnZ2VyIiwiZm9ybXMiLCJlbWFpbCIsInZhbHVlIiwidGVzdCIsInBhc3N3b3JkIiwibm90RW1wdHkiLCJpbnB1dFRhZ05hbWVzIiwiY3JlYXRlUGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JUZXh0T2JqZWN0IiwiZW1wdHkiLCJjb25maXJtIiwibWlzbWF0Y2giLCJpbnZhbGlkIiwib25FbXB0eVBhc3N3b3JkRXJyb3JUZXh0Iiwib25Db25maXJtUGFzc3dvcmRFcnJvclRleHQiLCJvbk1pc21hdGNoUGFzc3dvcmRFcnJvclRleHQiLCJvbk5vdFZhbGlkUGFzc3dvcmRFcnJvclRleHQiLCJjbGFzc2lmeUlucHV0IiwiaW5wdXQiLCJmb3JtRmllbGRDbGFzcyIsIiRpbnB1dCIsIiRmb3JtRmllbGQiLCJwYXJlbnQiLCJ0YWdOYW1lIiwicHJvcCIsImNsYXNzTmFtZSIsInNwZWNpZmljQ2xhc3NOYW1lIiwiaW5wdXRUeXBlIiwiYWRkQ2xhc3MiLCJjbGFzc2lmeUZvcm0iLCIkZm9ybSIsIiRpbnB1dHMiLCJmaW5kIiwiam9pbiIsIl9fIiwiZ2V0RmllbGRJZCIsIiRmaWVsZCIsImZpZWxkSWQiLCJtYXRjaCIsImluc2VydFN0YXRlSGlkZGVuRmllbGQiLCIkc3RhdGVGaWVsZCIsInN0YXRlRmllbGRBdHRycyIsInR5cGUiLCJuYW1lIiwiYWZ0ZXIiLCJzZXRFbWFpbFZhbGlkYXRpb24iLCJmaWVsZCIsImVycm9yVGV4dCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInJlc3VsdCIsImVycm9yTWVzc2FnZSIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsInBhc3N3b3JkU2VsZWN0b3IiLCJwYXNzd29yZDJTZWxlY3RvciIsInJlcXVpcmVtZW50cyIsImlzT3B0aW9uYWwiLCIkcGFzc3dvcmQiLCJwYXNzd29yZFZhbGlkYXRpb25zIiwiUmVnRXhwIiwiYWxwaGEiLCJudW1lcmljIiwibWlubGVuZ3RoIiwicHJpY2VWYWxpZGF0aW9uRXJyb3JUZXh0cyIsIm9uTWluUHJpY2VFcnJvciIsIm9uTWF4UHJpY2VFcnJvciIsIm1pblByaWNlTm90RW50ZXJlZCIsIm1heFByaWNlTm90RW50ZXJlZCIsIm9uSW52YWxpZFByaWNlIiwiY29uZmlndXJlIiwiZm9ybSIsInByZXZlbnRTdWJtaXQiLCJzdWNjZXNzQ2xhc3MiLCJzZXRNZXNzYWdlT3B0aW9ucyIsImVycm9yU3BhbiIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwiJGZpZWxkQ2xhc3NFbGVtZW50Iiwia2V5cyIsImNsYXNzZXMiLCJmb3JFYWNoIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImRlY3JlbWVudENvdW50ZXIiLCJjb3VudGVyIiwiaXRlbSIsInNwbGljZSIsImluY3JlbWVudENvdW50ZXIiLCJ1cGRhdGVDb3VudGVyTmF2IiwidXJsQ29udGV4dCIsImNvbXBhcmUiLCJodG1sIiwiY29tcGFyZUNvdW50ZXIiLCIkY29tcGFyZUxpbmsiLCIkY2hlY2tlZCIsIm1hcCIsImdldCIsInRyaWdnZXJIYW5kbGVyIiwicHJvZHVjdCIsIiRjbGlja2VkQ29tcGFyZUxpbmsiLCJjaGVja2VkIiwiJHRoaXMiLCJwcm9kdWN0c1RvQ29tcGFyZSIsInNob3dBbGVydE1vZGFsIiwiJGNsaWNrZWRDaGVja2VkSW5wdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFcUJBLFc7Ozs7Ozs7OztTQUNqQkMsYyxHQUFBLHdCQUFlQyxLQUFmLEVBQXNCQyxhQUF0QixFQUFxQztBQUNqQyxRQUFNQyxHQUFHLEdBQUdDLDBDQUFHLENBQUNDLEtBQUosQ0FBVUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUExQixFQUFnQyxJQUFoQyxDQUFaO0FBQ0EsUUFBTUMsV0FBVyxHQUFHQyxDQUFDLENBQUNSLGFBQUQsQ0FBRCxDQUFpQlMsU0FBakIsR0FBNkJDLEtBQTdCLENBQW1DLEdBQW5DLENBQXBCO0FBRUFULE9BQUcsQ0FBQ1UsS0FBSixDQUFVSixXQUFXLENBQUMsQ0FBRCxDQUFyQixJQUE0QkEsV0FBVyxDQUFDLENBQUQsQ0FBdkM7QUFDQSxXQUFPTixHQUFHLENBQUNVLEtBQUosQ0FBVUMsSUFBakI7QUFFQWIsU0FBSyxDQUFDYyxjQUFOO0FBQ0FULFVBQU0sQ0FBQ0MsUUFBUCxHQUFrQkgsMENBQUcsQ0FBQ1ksTUFBSixDQUFXO0FBQUVDLGNBQVEsRUFBRWQsR0FBRyxDQUFDYyxRQUFoQjtBQUEwQkMsWUFBTSxFQUFFQywrREFBUSxDQUFDQyxnQkFBVCxDQUEwQmpCLEdBQUcsQ0FBQ1UsS0FBOUI7QUFBbEMsS0FBWCxDQUFsQjtBQUNILEc7OztFQVZvQ1EscUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0p6QztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1DLGNBQWMsR0FBRztBQUNuQkMseUJBQXVCLEVBQUUsNEVBRE47QUFFbkJDLGlCQUFlLEVBQUUseUJBRkU7QUFHbkJDLG9CQUFrQixFQUFFLHlDQUhEO0FBSW5CQyxtQkFBaUIsRUFBRSx3QkFKQTtBQUtuQkMsc0JBQW9CLEVBQUUseUJBTEg7QUFNbkJDLHlCQUF1QixFQUFFLHVDQU5OO0FBT25CQyw0QkFBMEIsRUFBRSxrQ0FQVDtBQVFuQkMsd0JBQXNCLEVBQUUsbUJBUkw7QUFTbkJDLDRCQUEwQixFQUFFLG9DQVRUO0FBVW5CQyw0QkFBMEIsRUFBRSxvQ0FWVDtBQVduQkMsd0JBQXNCLEVBQUUsK0NBWEw7QUFZbkJDLDBCQUF3QixFQUFFLHdDQVpQO0FBYW5CQyxPQUFLLEVBQUVDLDZEQUFZLENBQUMsUUFBRCxDQUFaLENBQXVCLENBQXZCLENBYlk7QUFjbkJDLFdBQVMsRUFBRTtBQWRRLENBQXZCO0FBaUJBO0FBQ0E7QUFDQTs7SUFDTUMsYTtBQUNGO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSSx5QkFBWUMsY0FBWixFQUE0QkMsUUFBNUIsRUFBc0NDLE9BQXRDLEVBQStDO0FBQUE7O0FBQzNDO0FBQ0EsU0FBS0YsY0FBTCxHQUFzQkEsY0FBdEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxxREFBUyxFQUFULEVBQWFuQixjQUFiLEVBQTZCbUIsT0FBN0IsQ0FBZjtBQUNBLFNBQUtDLGVBQUwsR0FBdUIsRUFBdkI7QUFDQSxTQUFLQyxtQkFBTCxHQUEyQixFQUEzQixDQU4yQyxDQVEzQzs7QUFDQUMsZ0VBQWtCLEdBVHlCLENBVzNDOztBQUNBLFNBQUtDLGtCQUFMLEdBWjJDLENBYzNDOztBQUNBbkMsS0FBQyxDQUFDLEtBQUsrQixPQUFMLENBQWFkLG9CQUFkLENBQUQsQ0FBcUNtQixJQUFyQyxDQUEwQyxVQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFDMUQsV0FBSSxDQUFDQyxrQkFBTCxDQUF3QnZDLENBQUMsQ0FBQ3NDLE9BQUQsQ0FBekI7QUFDSCxLQUZELEVBZjJDLENBbUIzQzs7QUFDQXRDLEtBQUMsQ0FBQyxLQUFLK0IsT0FBTCxDQUFhbEIsdUJBQWQsQ0FBRCxDQUF3Q3VCLElBQXhDLENBQTZDLFVBQUNDLEtBQUQsRUFBUUcsZUFBUixFQUE0QjtBQUNyRSxVQUFNQyxnQkFBZ0IsR0FBR3pDLENBQUMsQ0FBQ3dDLGVBQUQsQ0FBMUI7QUFDQSxVQUFNRSxXQUFXLEdBQUdELGdCQUFnQixDQUFDRSxJQUFqQixDQUFzQixxQkFBdEIsQ0FBcEI7O0FBRUEsVUFBSUQsV0FBVyxDQUFDRSxXQUFoQixFQUE2QjtBQUN6QixhQUFJLENBQUNaLGVBQUwsQ0FBcUJhLElBQXJCLENBQTBCSCxXQUFXLENBQUNJLFFBQXRDO0FBQ0g7QUFDSixLQVBELEVBcEIyQyxDQTZCM0M7QUFDQTs7QUFDQUMsY0FBVSxDQUFDLFlBQU07QUFDYixVQUFJL0MsQ0FBQyxDQUFDLEtBQUksQ0FBQytCLE9BQUwsQ0FBYWYsaUJBQWQsQ0FBRCxDQUFrQ2dDLEVBQWxDLENBQXFDLFNBQXJDLENBQUosRUFBcUQ7QUFDakQsYUFBSSxDQUFDQyxpQkFBTDtBQUNIO0FBQ0osS0FKUyxDQUFWLENBL0IyQyxDQXFDM0M7O0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsS0FBS0EsYUFBTCxDQUFtQkQsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBckI7QUFDQSxTQUFLRSxpQkFBTCxHQUF5QixLQUFLQSxpQkFBTCxDQUF1QkYsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBekI7QUFDQSxTQUFLRyxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0JILElBQWxCLENBQXVCLElBQXZCLENBQXBCO0FBQ0EsU0FBS0ksWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCSixJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNBLFNBQUtLLGFBQUwsR0FBcUIsS0FBS0EsYUFBTCxDQUFtQkwsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBckI7QUFDQSxTQUFLN0QsY0FBTCxHQUFzQixLQUFLQSxjQUFMLENBQW9CNkQsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdEI7QUFDQSxTQUFLTSxnQkFBTCxHQUF3QixLQUFLQSxnQkFBTCxDQUFzQk4sSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBeEI7QUFFQSxTQUFLTyxVQUFMO0FBQ0gsRyxDQUVEOzs7OztTQUNBQyxXLEdBQUEscUJBQVlDLE9BQVosRUFBcUI7QUFDakIsUUFBSUEsT0FBSixFQUFhO0FBQ1QsV0FBSzlCLFFBQUwsQ0FBYzhCLE9BQWQ7QUFDSCxLQUhnQixDQUtqQjs7O0FBQ0ExQixnRUFBa0IsR0FORCxDQVFqQjs7QUFDQSxTQUFLQyxrQkFBTCxHQVRpQixDQVdqQjs7QUFDQSxTQUFLMEIsc0JBQUw7QUFDQSxTQUFLQywwQkFBTCxHQWJpQixDQWVqQjs7QUFDQSxTQUFLSixVQUFMO0FBQ0gsRzs7U0FFREssVSxHQUFBLHNCQUFhO0FBQUE7O0FBQ1QvRCxLQUFDLENBQUMsS0FBSytCLE9BQUwsQ0FBYWpCLGVBQWQsQ0FBRCxDQUFnQ2tELElBQWhDO0FBRUFDLGtFQUFHLENBQUNDLE9BQUosQ0FBWXpELHdEQUFRLENBQUMwRCxNQUFULEVBQVosRUFBK0IsS0FBS3RDLGNBQXBDLEVBQW9ELFVBQUN1QyxHQUFELEVBQU1SLE9BQU4sRUFBa0I7QUFDbEU1RCxPQUFDLENBQUMsTUFBSSxDQUFDK0IsT0FBTCxDQUFhakIsZUFBZCxDQUFELENBQWdDdUQsSUFBaEM7O0FBRUEsVUFBSUQsR0FBSixFQUFTO0FBQ0wsY0FBTSxJQUFJRSxLQUFKLENBQVVGLEdBQVYsQ0FBTjtBQUNILE9BTGlFLENBT2xFOzs7QUFDQSxZQUFJLENBQUNULFdBQUwsQ0FBaUJDLE9BQWpCO0FBQ0gsS0FURDtBQVVILEc7O1NBRURXLGdCLEdBQUEsMEJBQWlCQyxRQUFqQixFQUEyQjtBQUN2QixRQUFNQyxFQUFFLEdBQUdELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjLElBQWQsQ0FBWCxDQUR1QixDQUd2Qjs7QUFDQSxTQUFLekMsbUJBQUwsR0FBMkIsc0RBQVUsS0FBS0EsbUJBQWYsRUFBb0N3QyxFQUFwQyxDQUEzQjtBQUNILEc7O1NBRURsQyxrQixHQUFBLDRCQUFtQmlDLFFBQW5CLEVBQTZCO0FBQ3pCLFFBQU1DLEVBQUUsR0FBR0QsUUFBUSxDQUFDRSxJQUFULENBQWMsSUFBZCxDQUFYO0FBQ0EsUUFBTUMsY0FBYyxHQUFHSCxRQUFRLENBQUM3QixJQUFULENBQWMsZ0JBQWQsQ0FBdkI7O0FBRUEsUUFBSWdDLGNBQUosRUFBb0I7QUFDaEIsV0FBSzFDLG1CQUFMLEdBQTJCLG9EQUFRLEtBQUtBLG1CQUFiLEVBQWtDLENBQUN3QyxFQUFELENBQWxDLENBQTNCO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsV0FBS3hDLG1CQUFMLEdBQTJCLHNEQUFVLEtBQUtBLG1CQUFmLEVBQW9Dd0MsRUFBcEMsQ0FBM0I7QUFDSDtBQUNKLEc7O1NBRURHLGdCLEdBQUEsMEJBQWlCSixRQUFqQixFQUEyQjtBQUN2QixRQUFNQyxFQUFFLEdBQUdELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjLElBQWQsQ0FBWCxDQUR1QixDQUd2Qjs7QUFDQSxRQUFJLHVEQUFXLEtBQUt6QyxtQkFBaEIsRUFBcUN3QyxFQUFyQyxDQUFKLEVBQThDO0FBQzFDLFdBQUtJLG1CQUFMLENBQXlCTCxRQUF6QjtBQUVBLGFBQU8sSUFBUDtBQUNIOztBQUVELFNBQUtqQyxrQkFBTCxDQUF3QmlDLFFBQXhCO0FBRUEsV0FBTyxLQUFQO0FBQ0gsRzs7U0FFREssbUIsR0FBQSw2QkFBb0JMLFFBQXBCLEVBQThCO0FBQUE7O0FBQzFCLFFBQU1NLEtBQUssR0FBR04sUUFBUSxDQUFDN0IsSUFBVCxDQUFjLE9BQWQsQ0FBZDtBQUNBLFFBQU1vQyxRQUFRLEdBQUd0RSx3REFBUSxDQUFDMEQsTUFBVCxFQUFqQjs7QUFFQSxRQUFJLEtBQUt0QyxjQUFMLENBQW9CbUQsUUFBeEIsRUFBa0M7QUFDOUJmLG9FQUFHLENBQUNDLE9BQUosQ0FBWWEsUUFBWixFQUFzQjtBQUNsQkUsZ0JBQVEsRUFBRSxLQUFLcEQsY0FBTCxDQUFvQm1ELFFBRFo7QUFFbEJFLGNBQU0sRUFBRTtBQUNKQyxrQkFBUSxFQUFFTDtBQUROO0FBRlUsT0FBdEIsRUFLRyxVQUFDVixHQUFELEVBQU1nQixRQUFOLEVBQW1CO0FBQ2xCLFlBQUloQixHQUFKLEVBQVM7QUFDTCxnQkFBTSxJQUFJRSxLQUFKLENBQVVGLEdBQVYsQ0FBTjtBQUNIOztBQUVELGNBQUksQ0FBQ3JDLE9BQUwsQ0FBYU4sS0FBYixDQUFtQjRELElBQW5COztBQUNBLGNBQUksQ0FBQ3RELE9BQUwsQ0FBYUosU0FBYixHQUF5QixJQUF6Qjs7QUFDQSxjQUFJLENBQUNJLE9BQUwsQ0FBYU4sS0FBYixDQUFtQjZELGFBQW5CLENBQWlDRixRQUFqQztBQUNILE9BYkQ7QUFjSDs7QUFFRCxTQUFLN0Msa0JBQUwsQ0FBd0JpQyxRQUF4QjtBQUVBLFdBQU8sS0FBUDtBQUNILEc7O1NBRURmLGdCLEdBQUEsMEJBQWlCbEUsS0FBakIsRUFBd0I7QUFDcEIsUUFBTWdHLE1BQU0sR0FBR3ZGLENBQUMsQ0FBQyxlQUFELENBQWhCO0FBQ0EsUUFBTUcsS0FBSyxHQUFHSCxDQUFDLENBQUNULEtBQUssQ0FBQ0MsYUFBUCxDQUFELENBQXVCZ0csR0FBdkIsR0FBNkJDLFdBQTdCLEVBQWQ7QUFFQUYsVUFBTSxDQUFDbkQsSUFBUCxDQUFZLFVBQUNDLEtBQUQsRUFBUXFELE9BQVIsRUFBb0I7QUFDNUIsVUFBTUMsSUFBSSxHQUFHM0YsQ0FBQyxDQUFDMEYsT0FBRCxDQUFELENBQVdDLElBQVgsR0FBa0JGLFdBQWxCLEVBQWI7O0FBQ0EsVUFBSUUsSUFBSSxDQUFDQyxPQUFMLENBQWF6RixLQUFiLE1BQXdCLENBQUMsQ0FBN0IsRUFBZ0M7QUFDNUJILFNBQUMsQ0FBQzBGLE9BQUQsQ0FBRCxDQUFXMUIsSUFBWDtBQUNILE9BRkQsTUFFTztBQUNIaEUsU0FBQyxDQUFDMEYsT0FBRCxDQUFELENBQVdyQixJQUFYO0FBQ0g7QUFDSixLQVBEO0FBUUgsRzs7U0FFRHdCLFcsR0FBQSxxQkFBWXBELGdCQUFaLEVBQThCO0FBQzFCLFFBQU1DLFdBQVcsR0FBR0QsZ0JBQWdCLENBQUNFLElBQWpCLENBQXNCLHFCQUF0QixDQUFwQjtBQUVBRCxlQUFXLENBQUMyQyxJQUFaO0FBQ0gsRzs7U0FFRFMsYSxHQUFBLHVCQUFjckQsZ0JBQWQsRUFBZ0M7QUFDNUIsUUFBTUMsV0FBVyxHQUFHRCxnQkFBZ0IsQ0FBQ0UsSUFBakIsQ0FBc0IscUJBQXRCLENBQXBCO0FBRUFELGVBQVcsQ0FBQ3FELEtBQVo7QUFDSCxHOztTQUVEOUMsaUIsR0FBQSw2QkFBb0I7QUFBQTs7QUFDaEIsUUFBTStDLGlCQUFpQixHQUFHaEcsQ0FBQyxDQUFDLEtBQUsrQixPQUFMLENBQWFsQix1QkFBZCxDQUEzQjtBQUVBbUYscUJBQWlCLENBQUM1RCxJQUFsQixDQUF1QixVQUFDQyxLQUFELEVBQVFHLGVBQVIsRUFBNEI7QUFDL0MsVUFBTUMsZ0JBQWdCLEdBQUd6QyxDQUFDLENBQUN3QyxlQUFELENBQTFCOztBQUVBLFlBQUksQ0FBQ3NELGFBQUwsQ0FBbUJyRCxnQkFBbkI7QUFDSCxLQUpEO0FBS0gsRzs7U0FFRHdELGUsR0FBQSwyQkFBa0I7QUFBQTs7QUFDZCxRQUFNRCxpQkFBaUIsR0FBR2hHLENBQUMsQ0FBQyxLQUFLK0IsT0FBTCxDQUFhbEIsdUJBQWQsQ0FBM0I7QUFFQW1GLHFCQUFpQixDQUFDNUQsSUFBbEIsQ0FBdUIsVUFBQ0MsS0FBRCxFQUFRRyxlQUFSLEVBQTRCO0FBQy9DLFVBQU1DLGdCQUFnQixHQUFHekMsQ0FBQyxDQUFDd0MsZUFBRCxDQUExQjs7QUFFQSxZQUFJLENBQUNxRCxXQUFMLENBQWlCcEQsZ0JBQWpCO0FBQ0gsS0FKRDtBQUtILEcsQ0FFRDs7O1NBQ0FOLGtCLEdBQUEsOEJBQXFCO0FBQ2pCLFFBQUluQyxDQUFDLENBQUMsS0FBSytCLE9BQUwsQ0FBYVgsc0JBQWQsQ0FBRCxDQUF1QzhFLE1BQXZDLEtBQWtELENBQXRELEVBQXlEO0FBQ3JEO0FBQ0g7O0FBRUQsUUFBTUMsU0FBUyxHQUFHQyxxREFBRyxFQUFyQjtBQUNBLFFBQU1DLFNBQVMsR0FBRztBQUNkQyxtQkFBYSxFQUFFLEtBQUt2RSxPQUFMLENBQWFiLHVCQURkO0FBRWRxRixzQkFBZ0IsRUFBRSxLQUFLeEUsT0FBTCxDQUFhWiwwQkFGakI7QUFHZHFGLGtCQUFZLEVBQUUsS0FBS3pFLE9BQUwsQ0FBYVgsc0JBSGI7QUFJZHFGLHNCQUFnQixFQUFFLEtBQUsxRSxPQUFMLENBQWFWLDBCQUpqQjtBQUtkcUYsc0JBQWdCLEVBQUUsS0FBSzNFLE9BQUwsQ0FBYVQ7QUFMakIsS0FBbEI7QUFRQXFGLGdFQUFVLENBQUNDLHdCQUFYLENBQW9DVCxTQUFwQyxFQUErQ0UsU0FBL0MsRUFBMEQsS0FBS3RFLE9BQUwsQ0FBYThFLHVCQUF2RTtBQUVBLFNBQUtDLG1CQUFMLEdBQTJCWCxTQUEzQjtBQUNILEc7O1NBRURyQywwQixHQUFBLHNDQUE2QjtBQUFBOztBQUN6QixRQUFNaUQsU0FBUyxHQUFHL0csQ0FBQyxDQUFDLEtBQUsrQixPQUFMLENBQWFkLG9CQUFkLENBQW5CLENBRHlCLENBR3pCOztBQUNBOEYsYUFBUyxDQUFDM0UsSUFBVixDQUFlLFVBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUMvQixVQUFNa0MsUUFBUSxHQUFHeEUsQ0FBQyxDQUFDc0MsT0FBRCxDQUFsQjtBQUNBLFVBQU1tQyxFQUFFLEdBQUdELFFBQVEsQ0FBQ0UsSUFBVCxDQUFjLElBQWQsQ0FBWDs7QUFDQSxVQUFNc0MsY0FBYyxHQUFHLHVEQUFXLE1BQUksQ0FBQy9FLG1CQUFoQixFQUFxQ3dDLEVBQXJDLENBQXZCOztBQUVBLFVBQUl1QyxjQUFKLEVBQW9CO0FBQ2hCLGNBQUksQ0FBQ3pFLGtCQUFMLENBQXdCaUMsUUFBeEI7QUFDSCxPQUZELE1BRU87QUFDSCxjQUFJLENBQUNELGdCQUFMLENBQXNCQyxRQUF0QjtBQUNIO0FBQ0osS0FWRDtBQVdILEc7O1NBRURYLHNCLEdBQUEsa0NBQXlCO0FBQUE7O0FBQ3JCLFFBQU1tQyxpQkFBaUIsR0FBR2hHLENBQUMsQ0FBQyxLQUFLK0IsT0FBTCxDQUFhbEIsdUJBQWQsQ0FBM0I7QUFFQW1GLHFCQUFpQixDQUFDNUQsSUFBbEIsQ0FBdUIsVUFBQ0MsS0FBRCxFQUFRRyxlQUFSLEVBQTRCO0FBQy9DLFVBQU1DLGdCQUFnQixHQUFHekMsQ0FBQyxDQUFDd0MsZUFBRCxDQUExQjtBQUNBLFVBQU1FLFdBQVcsR0FBR0QsZ0JBQWdCLENBQUNFLElBQWpCLENBQXNCLHFCQUF0QixDQUFwQjtBQUNBLFVBQU04QixFQUFFLEdBQUcvQixXQUFXLENBQUNJLFFBQXZCOztBQUNBLFVBQU1rRSxjQUFjLEdBQUcsdURBQVcsTUFBSSxDQUFDaEYsZUFBaEIsRUFBaUN5QyxFQUFqQyxDQUF2Qjs7QUFFQSxVQUFJdUMsY0FBSixFQUFvQjtBQUNoQixjQUFJLENBQUNsQixhQUFMLENBQW1CckQsZ0JBQW5CO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsY0FBSSxDQUFDb0QsV0FBTCxDQUFpQnBELGdCQUFqQjtBQUNIO0FBQ0osS0FYRDtBQVlILEc7O1NBRURpQixVLEdBQUEsc0JBQWE7QUFDVDtBQUNBLFNBQUt1RCxZQUFMLEdBRlMsQ0FJVDs7QUFDQWpILEtBQUMsQ0FBQ0osTUFBRCxDQUFELENBQVVzSCxFQUFWLENBQWEsYUFBYixFQUE0QixLQUFLaEUsYUFBakM7QUFDQWxELEtBQUMsQ0FBQ0osTUFBRCxDQUFELENBQVVzSCxFQUFWLENBQWEsVUFBYixFQUF5QixLQUFLQyxVQUE5QjtBQUNBbkgsS0FBQyxDQUFDb0gsUUFBRCxDQUFELENBQVlGLEVBQVosQ0FBZSxPQUFmLEVBQXdCLEtBQUtuRixPQUFMLENBQWFSLHNCQUFyQyxFQUE2RCxLQUFLNkIsYUFBbEU7QUFDQXBELEtBQUMsQ0FBQ29ILFFBQUQsQ0FBRCxDQUFZRixFQUFaLENBQWUsb0JBQWYsRUFBcUMsS0FBS25GLE9BQUwsQ0FBYWxCLHVCQUFsRCxFQUEyRSxLQUFLd0MsaUJBQWhGO0FBQ0FyRCxLQUFDLENBQUNvSCxRQUFELENBQUQsQ0FBWUYsRUFBWixDQUFlLE9BQWYsRUFBd0IsS0FBS25GLE9BQUwsQ0FBYVAsd0JBQXJDLEVBQStELEtBQUtpQyxnQkFBcEU7QUFDQXpELEtBQUMsQ0FBQyxLQUFLK0IsT0FBTCxDQUFhaEIsa0JBQWQsQ0FBRCxDQUFtQ21HLEVBQW5DLENBQXNDLE9BQXRDLEVBQStDLEtBQUs1RCxZQUFwRCxFQVZTLENBWVQ7O0FBQ0ErRCxvRUFBSyxDQUFDSCxFQUFOLENBQVMsNkJBQVQsRUFBd0MsS0FBSzNELFlBQTdDO0FBQ0E4RCxvRUFBSyxDQUFDSCxFQUFOLENBQVMsK0JBQVQsRUFBMEMsS0FBSzFELGFBQS9DO0FBQ0E2RCxvRUFBSyxDQUFDSCxFQUFOLENBQVMsa0JBQVQsRUFBNkIsS0FBSzVILGNBQWxDO0FBQ0gsRzs7U0FFRDJILFksR0FBQSx3QkFBZTtBQUNYO0FBQ0FqSCxLQUFDLENBQUNKLE1BQUQsQ0FBRCxDQUFVMEgsR0FBVixDQUFjLGFBQWQsRUFBNkIsS0FBS3BFLGFBQWxDO0FBQ0FsRCxLQUFDLENBQUNKLE1BQUQsQ0FBRCxDQUFVMEgsR0FBVixDQUFjLFVBQWQsRUFBMEIsS0FBS0gsVUFBL0I7QUFDQW5ILEtBQUMsQ0FBQ29ILFFBQUQsQ0FBRCxDQUFZRSxHQUFaLENBQWdCLE9BQWhCLEVBQXlCLEtBQUt2RixPQUFMLENBQWFSLHNCQUF0QyxFQUE4RCxLQUFLNkIsYUFBbkU7QUFDQXBELEtBQUMsQ0FBQ29ILFFBQUQsQ0FBRCxDQUFZRSxHQUFaLENBQWdCLG9CQUFoQixFQUFzQyxLQUFLdkYsT0FBTCxDQUFhbEIsdUJBQW5ELEVBQTRFLEtBQUt3QyxpQkFBakY7QUFDQXJELEtBQUMsQ0FBQ29ILFFBQUQsQ0FBRCxDQUFZRSxHQUFaLENBQWdCLE9BQWhCLEVBQXlCLEtBQUt2RixPQUFMLENBQWFQLHdCQUF0QyxFQUFnRSxLQUFLaUMsZ0JBQXJFO0FBQ0F6RCxLQUFDLENBQUMsS0FBSytCLE9BQUwsQ0FBYWhCLGtCQUFkLENBQUQsQ0FBbUN1RyxHQUFuQyxDQUF1QyxPQUF2QyxFQUFnRCxLQUFLaEUsWUFBckQsRUFQVyxDQVNYOztBQUNBK0Qsb0VBQUssQ0FBQ0MsR0FBTixDQUFVLDZCQUFWLEVBQXlDLEtBQUsvRCxZQUE5QztBQUNBOEQsb0VBQUssQ0FBQ0MsR0FBTixDQUFVLCtCQUFWLEVBQTJDLEtBQUs5RCxhQUFoRDtBQUNBNkQsb0VBQUssQ0FBQ0MsR0FBTixDQUFVLGtCQUFWLEVBQThCLEtBQUtoSSxjQUFuQztBQUNILEc7O1NBRURnRSxZLEdBQUEsc0JBQWEvRCxLQUFiLEVBQW9CO0FBQ2hCLFFBQU1nSSxLQUFLLEdBQUd2SCxDQUFDLENBQUNULEtBQUssQ0FBQ0MsYUFBUCxDQUFmO0FBQ0EsUUFBTUMsR0FBRyxHQUFHOEgsS0FBSyxDQUFDN0MsSUFBTixDQUFXLE1BQVgsQ0FBWjtBQUVBbkYsU0FBSyxDQUFDYyxjQUFOO0FBQ0FkLFNBQUssQ0FBQ2lJLGVBQU4sR0FMZ0IsQ0FPaEI7O0FBQ0EvRyw0REFBUSxDQUFDZ0gsT0FBVCxDQUFpQmhJLEdBQWpCO0FBQ0gsRzs7U0FFRDJELGEsR0FBQSx1QkFBYzdELEtBQWQsRUFBcUI7QUFDakIsUUFBTW1JLE9BQU8sR0FBRzFILENBQUMsQ0FBQ1QsS0FBSyxDQUFDQyxhQUFQLENBQWpCO0FBQ0EsUUFBTWdGLFFBQVEsR0FBR3hFLENBQUMsQ0FBQzBILE9BQU8sQ0FBQ2hELElBQVIsQ0FBYSxNQUFiLENBQUQsQ0FBbEIsQ0FGaUIsQ0FJakI7O0FBQ0FuRixTQUFLLENBQUNjLGNBQU4sR0FMaUIsQ0FPakI7O0FBQ0EsU0FBS3VFLGdCQUFMLENBQXNCSixRQUF0QjtBQUNILEc7O1NBRURqQixZLEdBQUEsc0JBQWFoRSxLQUFiLEVBQW9CQyxhQUFwQixFQUFtQztBQUMvQixRQUFNK0gsS0FBSyxHQUFHdkgsQ0FBQyxDQUFDUixhQUFELENBQWY7QUFDQSxRQUFNQyxHQUFHLEdBQUc4SCxLQUFLLENBQUM3QyxJQUFOLENBQVcsTUFBWCxDQUFaO0FBRUFuRixTQUFLLENBQUNjLGNBQU47QUFFQWtILFNBQUssQ0FBQ0ksV0FBTixDQUFrQixhQUFsQixFQU4rQixDQVEvQjs7QUFDQWxILDREQUFRLENBQUNnSCxPQUFULENBQWlCaEksR0FBakI7O0FBRUEsUUFBSSxLQUFLc0MsT0FBTCxDQUFhSixTQUFqQixFQUE0QjtBQUN4QixXQUFLSSxPQUFMLENBQWFOLEtBQWIsQ0FBbUJzRSxLQUFuQjtBQUNIO0FBQ0osRzs7U0FFRHpHLGMsR0FBQSx3QkFBZUMsS0FBZixFQUFzQkMsYUFBdEIsRUFBcUM7QUFDakMsUUFBTUMsR0FBRyxHQUFHQywwQ0FBRyxDQUFDQyxLQUFKLENBQVVDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBMUIsRUFBZ0MsSUFBaEMsQ0FBWjtBQUNBLFFBQU1DLFdBQVcsR0FBR0MsQ0FBQyxDQUFDUixhQUFELENBQUQsQ0FBaUJTLFNBQWpCLEdBQTZCQyxLQUE3QixDQUFtQyxHQUFuQyxDQUFwQjtBQUVBVCxPQUFHLENBQUNVLEtBQUosQ0FBVUosV0FBVyxDQUFDLENBQUQsQ0FBckIsSUFBNEJBLFdBQVcsQ0FBQyxDQUFELENBQXZDO0FBQ0EsV0FBT04sR0FBRyxDQUFDVSxLQUFKLENBQVVDLElBQWpCLENBTGlDLENBT2pDOztBQUNBLFFBQU13SCxjQUFjLEdBQUcsRUFBdkI7QUFDQUMsVUFBTSxDQUFDQyxNQUFQLENBQWNGLGNBQWQsRUFBOEJuSSxHQUFHLENBQUNVLEtBQWxDO0FBRUFaLFNBQUssQ0FBQ2MsY0FBTjtBQUVBSSw0REFBUSxDQUFDZ0gsT0FBVCxDQUFpQi9ILDBDQUFHLENBQUNZLE1BQUosQ0FBVztBQUFFQyxjQUFRLEVBQUVkLEdBQUcsQ0FBQ2MsUUFBaEI7QUFBMEJDLFlBQU0sRUFBRUMsd0RBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEJrSCxjQUExQjtBQUFsQyxLQUFYLENBQWpCO0FBQ0gsRzs7U0FFRHBFLGEsR0FBQSx1QkFBY2pFLEtBQWQsRUFBcUJDLGFBQXJCLEVBQW9DO0FBQ2hDRCxTQUFLLENBQUNjLGNBQU47O0FBRUEsUUFBSSxDQUFDLEtBQUt5RyxtQkFBTCxDQUF5QmlCLE1BQXpCLENBQWdDM0IsNkNBQUcsQ0FBQzRCLFNBQUosQ0FBY0MsS0FBOUMsQ0FBTCxFQUEyRDtBQUN2RDtBQUNIOztBQUVELFFBQU14SSxHQUFHLEdBQUdDLDBDQUFHLENBQUNDLEtBQUosQ0FBVUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUExQixFQUFnQyxJQUFoQyxDQUFaO0FBQ0EsUUFBSUMsV0FBVyxHQUFHbUksU0FBUyxDQUFDbEksQ0FBQyxDQUFDUixhQUFELENBQUQsQ0FBaUJTLFNBQWpCLEVBQUQsQ0FBVCxDQUF3Q0MsS0FBeEMsQ0FBOEMsR0FBOUMsQ0FBbEI7QUFDQUgsZUFBVyxHQUFHVSx3REFBUSxDQUFDMEgsZ0JBQVQsQ0FBMEJwSSxXQUExQixDQUFkOztBQUVBLFNBQUssSUFBTXFJLEdBQVgsSUFBa0JySSxXQUFsQixFQUErQjtBQUMzQixVQUFJQSxXQUFXLENBQUNzSSxjQUFaLENBQTJCRCxHQUEzQixDQUFKLEVBQXFDO0FBQ2pDM0ksV0FBRyxDQUFDVSxLQUFKLENBQVVpSSxHQUFWLElBQWlCckksV0FBVyxDQUFDcUksR0FBRCxDQUE1QjtBQUNIO0FBQ0osS0FmK0IsQ0FpQmhDOzs7QUFDQSxRQUFNUixjQUFjLEdBQUcsRUFBdkI7QUFDQUMsVUFBTSxDQUFDQyxNQUFQLENBQWNGLGNBQWQsRUFBOEJuSSxHQUFHLENBQUNVLEtBQWxDO0FBRUFNLDREQUFRLENBQUNnSCxPQUFULENBQWlCL0gsMENBQUcsQ0FBQ1ksTUFBSixDQUFXO0FBQUVDLGNBQVEsRUFBRWQsR0FBRyxDQUFDYyxRQUFoQjtBQUEwQkMsWUFBTSxFQUFFQyx3REFBUSxDQUFDQyxnQkFBVCxDQUEwQmtILGNBQTFCO0FBQWxDLEtBQVgsQ0FBakI7QUFDSCxHOztTQUVEMUUsYSxHQUFBLHlCQUFnQjtBQUNaLFNBQUthLFVBQUw7QUFDSCxHOztTQUVEVixpQixHQUFBLDJCQUFrQjlELEtBQWxCLEVBQXlCO0FBQ3JCLFFBQU1rRCxnQkFBZ0IsR0FBR3pDLENBQUMsQ0FBQ1QsS0FBSyxDQUFDQyxhQUFQLENBQTFCO0FBQ0EsUUFBTWtELFdBQVcsR0FBR0QsZ0JBQWdCLENBQUNFLElBQWpCLENBQXNCLHFCQUF0QixDQUFwQjtBQUNBLFFBQU04QixFQUFFLEdBQUcvQixXQUFXLENBQUNJLFFBQXZCOztBQUVBLFFBQUlKLFdBQVcsQ0FBQ0UsV0FBaEIsRUFBNkI7QUFDekIsV0FBS1osZUFBTCxHQUF1QixvREFBUSxLQUFLQSxlQUFiLEVBQThCLENBQUN5QyxFQUFELENBQTlCLENBQXZCO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsV0FBS3pDLGVBQUwsR0FBdUIsc0RBQVUsS0FBS0EsZUFBZixFQUFnQ3lDLEVBQWhDLENBQXZCO0FBQ0g7QUFDSixHOztTQUVEMEMsVSxHQUFBLHNCQUFhO0FBQ1QsUUFBTW1CLFVBQVUsR0FBRzFJLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBbkM7QUFDQSxRQUFNeUksWUFBWSxHQUFHLElBQUlDLGVBQUosQ0FBb0JGLFVBQXBCLENBQXJCLENBRlMsQ0FHVDs7QUFDQSxRQUFJLENBQUNDLFlBQVksQ0FBQ0UsR0FBYixDQUFpQixNQUFqQixDQUFMLEVBQStCO0FBQzNCLFVBQU1DLE9BQU8sR0FBRzFJLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCMEUsSUFBdEIsQ0FBMkIsTUFBM0IsQ0FBaEI7QUFDQSxVQUFNaUUsRUFBRSxHQUFHLGNBQVg7QUFDQSxVQUFNQyxjQUFjLEdBQUdGLE9BQU8sQ0FBQ0csT0FBUixDQUFnQkYsRUFBaEIsRUFBb0IsUUFBcEIsQ0FBdkI7QUFDQS9JLFlBQU0sQ0FBQ2tKLE9BQVAsQ0FBZUMsWUFBZixDQUE0QixFQUE1QixFQUFnQzNCLFFBQVEsQ0FBQzRCLEtBQXpDLEVBQWdESixjQUFoRDtBQUNIOztBQUNENUksS0FBQyxDQUFDSixNQUFELENBQUQsQ0FBVXFKLE9BQVYsQ0FBa0IsYUFBbEI7QUFDSCxHOzs7OztBQUdVckgsNEVBQWYsRTs7Ozs7Ozs7Ozs7OztBQ25iQTtBQUFBLElBQU1zSCxLQUFLLEdBQUc7QUFDVkMsT0FEVSxpQkFDSkMsS0FESSxFQUNHO0FBQ1QsUUFBTVQsRUFBRSxHQUFHLFlBQVg7QUFDQSxXQUFPQSxFQUFFLENBQUNVLElBQUgsQ0FBUUQsS0FBUixDQUFQO0FBQ0gsR0FKUzs7QUFNVjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0lFLFVBWFUsb0JBV0RGLEtBWEMsRUFXTTtBQUNaLFdBQU8sS0FBS0csUUFBTCxDQUFjSCxLQUFkLENBQVA7QUFDSCxHQWJTOztBQWVWO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJRyxVQXJCVSxvQkFxQkRILEtBckJDLEVBcUJNO0FBQ1osV0FBT0EsS0FBSyxDQUFDbEQsTUFBTixHQUFlLENBQXRCO0FBQ0g7QUF2QlMsQ0FBZDtBQTBCZWdELG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUVBLElBQU1NLGFBQWEsR0FBRyxDQUNsQixPQURrQixFQUVsQixRQUZrQixFQUdsQixVQUhrQixDQUF0QjtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sSUFBTUMsdUNBQXVDLEdBQUcsU0FBMUNBLHVDQUEwQyxDQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBaUJDLFFBQWpCLEVBQTJCQyxPQUEzQjtBQUFBLFNBQXdDO0FBQzNGQyw0QkFBd0IsRUFBRUosS0FEaUU7QUFFM0ZLLDhCQUEwQixFQUFFSixPQUYrRDtBQUczRkssK0JBQTJCLEVBQUVKLFFBSDhEO0FBSTNGSywrQkFBMkIsRUFBRUo7QUFKOEQsR0FBeEM7QUFBQSxDQUFoRDtBQVFQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTSyxhQUFULENBQXVCQyxLQUF2QixFQUE4QkMsY0FBOUIsRUFBOEM7QUFDMUMsTUFBTUMsTUFBTSxHQUFHckssQ0FBQyxDQUFDbUssS0FBRCxDQUFoQjtBQUNBLE1BQU1HLFVBQVUsR0FBR0QsTUFBTSxDQUFDRSxNQUFQLE9BQWtCSCxjQUFsQixDQUFuQjtBQUNBLE1BQU1JLE9BQU8sR0FBR0gsTUFBTSxDQUFDSSxJQUFQLENBQVksU0FBWixFQUF1QmhGLFdBQXZCLEVBQWhCO0FBRUEsTUFBSWlGLFNBQVMsR0FBTU4sY0FBTixVQUF5QkksT0FBdEM7QUFDQSxNQUFJRyxpQkFBSixDQU4wQyxDQVExQzs7QUFDQSxNQUFJSCxPQUFPLEtBQUssT0FBaEIsRUFBeUI7QUFDckIsUUFBTUksU0FBUyxHQUFHUCxNQUFNLENBQUNJLElBQVAsQ0FBWSxNQUFaLENBQWxCOztBQUVBLFFBQUksdURBQVcsQ0FBQyxPQUFELEVBQVUsVUFBVixFQUFzQixRQUF0QixDQUFYLEVBQTRDRyxTQUE1QyxDQUFKLEVBQTREO0FBQ3hEO0FBQ0FGLGVBQVMsR0FBTU4sY0FBTixVQUF5Qix3REFBWVEsU0FBWixDQUFsQztBQUNILEtBSEQsTUFHTztBQUNIO0FBQ0FELHVCQUFpQixRQUFNRCxTQUFOLEdBQWtCLHlEQUFhRSxTQUFiLENBQW5DO0FBQ0g7QUFDSixHQW5CeUMsQ0FxQjFDOzs7QUFDQSxTQUFPTixVQUFVLENBQ1pPLFFBREUsQ0FDT0gsU0FEUCxFQUVGRyxRQUZFLENBRU9GLGlCQUZQLENBQVA7QUFHSDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNHLFlBQVQsQ0FBc0J0RSxZQUF0QixFQUFvQ3pFLE9BQXBDLEVBQWtEO0FBQUEsTUFBZEEsT0FBYztBQUFkQSxXQUFjLEdBQUosRUFBSTtBQUFBOztBQUNyRCxNQUFNZ0osS0FBSyxHQUFHL0ssQ0FBQyxDQUFDd0csWUFBRCxDQUFmO0FBQ0EsTUFBTXdFLE9BQU8sR0FBR0QsS0FBSyxDQUFDRSxJQUFOLENBQVd6QixhQUFhLENBQUMwQixJQUFkLENBQW1CLElBQW5CLENBQVgsQ0FBaEIsQ0FGcUQsQ0FJckQ7O0FBSnFELGlCQUtYbkosT0FMVztBQUFBLHVDQUs3Q3FJLGNBTDZDO0FBQUEsTUFLN0NBLGNBTDZDLHNDQUs1QixZQUw0QiwwQkFPckQ7O0FBQ0FZLFNBQU8sQ0FBQzVJLElBQVIsQ0FBYSxVQUFDK0ksRUFBRCxFQUFLaEIsS0FBTCxFQUFlO0FBQ3hCRCxpQkFBYSxDQUFDQyxLQUFELEVBQVFDLGNBQVIsQ0FBYjtBQUNILEdBRkQ7QUFJQSxTQUFPVyxLQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNLLFVBQVQsQ0FBb0JDLE1BQXBCLEVBQTRCO0FBQ3hCLE1BQU1DLE9BQU8sR0FBR0QsTUFBTSxDQUFDWixJQUFQLENBQVksTUFBWixFQUFvQmMsS0FBcEIsQ0FBMEIsVUFBMUIsQ0FBaEI7O0FBRUEsTUFBSUQsT0FBTyxJQUFJQSxPQUFPLENBQUNwRixNQUFSLEtBQW1CLENBQWxDLEVBQXFDO0FBQ2pDLFdBQU9vRixPQUFPLENBQUMsQ0FBRCxDQUFkO0FBQ0g7O0FBRUQsU0FBTyxFQUFQO0FBQ0g7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBU0Usc0JBQVQsQ0FBZ0NDLFdBQWhDLEVBQTZDO0FBQ3pDLE1BQU1ILE9BQU8sR0FBR0YsVUFBVSxDQUFDSyxXQUFELENBQTFCO0FBQ0EsTUFBTUMsZUFBZSxHQUFHO0FBQ3BCQyxRQUFJLEVBQUUsUUFEYztBQUVwQkMsUUFBSSxzQkFBb0JOLE9BRko7QUFHcEJsQyxTQUFLLEVBQUU7QUFIYSxHQUF4QjtBQU1BcUMsYUFBVyxDQUFDSSxLQUFaLENBQWtCN0wsQ0FBQyxDQUFDLFdBQUQsRUFBYzBMLGVBQWQsQ0FBbkI7QUFDSDs7QUFFRCxJQUFNL0UsVUFBVSxHQUFHO0FBQ2Y7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0ltRixvQkFBa0IsRUFBRSw0QkFBQzNGLFNBQUQsRUFBWTRGLEtBQVosRUFBbUJDLFNBQW5CLEVBQWlDO0FBQ2pELFFBQUlELEtBQUosRUFBVztBQUNQNUYsZUFBUyxDQUFDOEYsR0FBVixDQUFjO0FBQ1ZDLGdCQUFRLEVBQUVILEtBREE7QUFFVkksZ0JBQVEsRUFBRSxrQkFBQ0MsRUFBRCxFQUFLNUcsR0FBTCxFQUFhO0FBQ25CLGNBQU02RyxNQUFNLEdBQUduRCxxREFBSyxDQUFDQyxLQUFOLENBQVkzRCxHQUFaLENBQWY7QUFFQTRHLFlBQUUsQ0FBQ0MsTUFBRCxDQUFGO0FBQ0gsU0FOUztBQU9WQyxvQkFBWSxFQUFFTjtBQVBKLE9BQWQ7QUFTSDtBQUNKLEdBbkJjOztBQXFCZjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSU8sdUJBQXFCLEVBQUUsK0JBQUNwRyxTQUFELEVBQVlxRyxnQkFBWixFQUE4QkMsaUJBQTlCLEVBQWlEQyxZQUFqRCxRQUVwQkMsVUFGb0IsRUFFTDtBQUFBLFFBRGQ3Qyx3QkFDYyxRQURkQSx3QkFDYztBQUFBLFFBRFlDLDBCQUNaLFFBRFlBLDBCQUNaO0FBQUEsUUFEd0NDLDJCQUN4QyxRQUR3Q0EsMkJBQ3hDO0FBQUEsUUFEcUVDLDJCQUNyRSxRQURxRUEsMkJBQ3JFO0FBQ2QsUUFBTTJDLFNBQVMsR0FBRzVNLENBQUMsQ0FBQ3dNLGdCQUFELENBQW5CO0FBQ0EsUUFBTUssbUJBQW1CLEdBQUcsQ0FDeEI7QUFDSVgsY0FBUSxFQUFFTSxnQkFEZDtBQUVJTCxjQUFRLEVBQUUsa0JBQUNDLEVBQUQsRUFBSzVHLEdBQUwsRUFBYTtBQUNuQixZQUFNNkcsTUFBTSxHQUFHN0csR0FBRyxDQUFDVSxNQUFuQjs7QUFFQSxZQUFJeUcsVUFBSixFQUFnQjtBQUNaLGlCQUFPUCxFQUFFLENBQUMsSUFBRCxDQUFUO0FBQ0g7O0FBRURBLFVBQUUsQ0FBQ0MsTUFBRCxDQUFGO0FBQ0gsT0FWTDtBQVdJQyxrQkFBWSxFQUFFeEM7QUFYbEIsS0FEd0IsRUFjeEI7QUFDSW9DLGNBQVEsRUFBRU0sZ0JBRGQ7QUFFSUwsY0FBUSxFQUFFLGtCQUFDQyxFQUFELEVBQUs1RyxHQUFMLEVBQWE7QUFDbkIsWUFBTTZHLE1BQU0sR0FBRzdHLEdBQUcsQ0FBQytGLEtBQUosQ0FBVSxJQUFJdUIsTUFBSixDQUFXSixZQUFZLENBQUNLLEtBQXhCLENBQVYsS0FDUnZILEdBQUcsQ0FBQytGLEtBQUosQ0FBVSxJQUFJdUIsTUFBSixDQUFXSixZQUFZLENBQUNNLE9BQXhCLENBQVYsQ0FEUSxJQUVSeEgsR0FBRyxDQUFDVSxNQUFKLElBQWN3RyxZQUFZLENBQUNPLFNBRmxDLENBRG1CLENBS25COztBQUNBLFlBQUlOLFVBQVUsSUFBSW5ILEdBQUcsQ0FBQ1UsTUFBSixLQUFlLENBQWpDLEVBQW9DO0FBQ2hDLGlCQUFPa0csRUFBRSxDQUFDLElBQUQsQ0FBVDtBQUNIOztBQUVEQSxVQUFFLENBQUNDLE1BQUQsQ0FBRjtBQUNILE9BYkw7QUFjSUMsa0JBQVksRUFBRXJDO0FBZGxCLEtBZHdCLEVBOEJ4QjtBQUNJaUMsY0FBUSxFQUFFTyxpQkFEZDtBQUVJTixjQUFRLEVBQUUsa0JBQUNDLEVBQUQsRUFBSzVHLEdBQUwsRUFBYTtBQUNuQixZQUFNNkcsTUFBTSxHQUFHN0csR0FBRyxDQUFDVSxNQUFuQjs7QUFFQSxZQUFJeUcsVUFBSixFQUFnQjtBQUNaLGlCQUFPUCxFQUFFLENBQUMsSUFBRCxDQUFUO0FBQ0g7O0FBRURBLFVBQUUsQ0FBQ0MsTUFBRCxDQUFGO0FBQ0gsT0FWTDtBQVdJQyxrQkFBWSxFQUFFdkM7QUFYbEIsS0E5QndCLEVBMkN4QjtBQUNJbUMsY0FBUSxFQUFFTyxpQkFEZDtBQUVJTixjQUFRLEVBQUUsa0JBQUNDLEVBQUQsRUFBSzVHLEdBQUwsRUFBYTtBQUNuQixZQUFNNkcsTUFBTSxHQUFHN0csR0FBRyxLQUFLb0gsU0FBUyxDQUFDcEgsR0FBVixFQUF2QjtBQUVBNEcsVUFBRSxDQUFDQyxNQUFELENBQUY7QUFDSCxPQU5MO0FBT0lDLGtCQUFZLEVBQUV0QztBQVBsQixLQTNDd0IsQ0FBNUI7QUFzREE3RCxhQUFTLENBQUM4RixHQUFWLENBQWNZLG1CQUFkO0FBQ0gsR0F6RmM7O0FBMkZmO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0lqRywwQkFBd0IsRUFBRSxrQ0FBQ1QsU0FBRCxFQUFZRSxTQUFaLEVBQXVCNkcseUJBQXZCLEVBQTBEO0FBQUEsUUFBbkNBLHlCQUFtQztBQUFuQ0EsK0JBQW1DLEdBQVAsRUFBTztBQUFBOztBQUFBLFFBRTVFNUcsYUFGNEUsR0FPNUVELFNBUDRFLENBRTVFQyxhQUY0RTtBQUFBLFFBRzVFQyxnQkFINEUsR0FPNUVGLFNBUDRFLENBRzVFRSxnQkFINEU7QUFBQSxRQUk1RUMsWUFKNEUsR0FPNUVILFNBUDRFLENBSTVFRyxZQUo0RTtBQUFBLFFBSzVFQyxnQkFMNEUsR0FPNUVKLFNBUDRFLENBSzVFSSxnQkFMNEU7QUFBQSxRQU01RUMsZ0JBTjRFLEdBTzVFTCxTQVA0RSxDQU01RUssZ0JBTjRFLEVBU2hGOztBQVRnRixnQ0FVcUJ3Ryx5QkFWckI7QUFBQSxRQVV4RUMsZUFWd0UseUJBVXhFQSxlQVZ3RTtBQUFBLFFBVXZEQyxlQVZ1RCx5QkFVdkRBLGVBVnVEO0FBQUEsUUFVdENDLGtCQVZzQyx5QkFVdENBLGtCQVZzQztBQUFBLFFBVWxCQyxrQkFWa0IseUJBVWxCQSxrQkFWa0I7QUFBQSxRQVVFQyxjQVZGLHlCQVVFQSxjQVZGO0FBWWhGcEgsYUFBUyxDQUFDcUgsU0FBVixDQUFvQjtBQUNoQkMsVUFBSSxFQUFFakgsWUFEVTtBQUVoQmtILG1CQUFhLEVBQUUsSUFGQztBQUdoQkMsa0JBQVksRUFBRSxHQUhFLENBR0c7O0FBSEgsS0FBcEI7QUFNQXhILGFBQVMsQ0FBQzhGLEdBQVYsQ0FBYztBQUNWSyxrQkFBWSxFQUFFYSxlQURKO0FBRVZqQixjQUFRLEVBQUV4RixnQkFGQTtBQUdWeUYsY0FBUSxlQUFhekYsZ0JBQWIsU0FBaUNEO0FBSC9CLEtBQWQ7QUFNQU4sYUFBUyxDQUFDOEYsR0FBVixDQUFjO0FBQ1ZLLGtCQUFZLEVBQUVjLGVBREo7QUFFVmxCLGNBQVEsRUFBRXpGLGdCQUZBO0FBR1YwRixjQUFRLGVBQWF6RixnQkFBYixTQUFpQ0Q7QUFIL0IsS0FBZDtBQU1BTixhQUFTLENBQUM4RixHQUFWLENBQWM7QUFDVkssa0JBQVksRUFBRWdCLGtCQURKO0FBRVZwQixjQUFRLEVBQUV6RixnQkFGQTtBQUdWMEYsY0FBUSxFQUFFO0FBSEEsS0FBZDtBQU1BaEcsYUFBUyxDQUFDOEYsR0FBVixDQUFjO0FBQ1ZLLGtCQUFZLEVBQUVlLGtCQURKO0FBRVZuQixjQUFRLEVBQUV4RixnQkFGQTtBQUdWeUYsY0FBUSxFQUFFO0FBSEEsS0FBZDtBQU1BaEcsYUFBUyxDQUFDOEYsR0FBVixDQUFjO0FBQ1ZLLGtCQUFZLEVBQUVpQixjQURKO0FBRVZyQixjQUFRLEVBQUUsQ0FBQ3hGLGdCQUFELEVBQW1CRCxnQkFBbkIsQ0FGQTtBQUdWMEYsY0FBUSxFQUFFO0FBSEEsS0FBZDtBQU1BaEcsYUFBUyxDQUFDeUgsaUJBQVYsQ0FBNEI7QUFDeEIxQixjQUFRLEVBQUUsQ0FBQ3hGLGdCQUFELEVBQW1CRCxnQkFBbkIsQ0FEYztBQUV4QjhELFlBQU0sRUFBRWhFLGdCQUZnQjtBQUd4QnNILGVBQVMsRUFBRXZIO0FBSGEsS0FBNUI7QUFLSCxHQTFKYzs7QUE0SmY7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNJd0gsMkJBQXlCLEVBQUUsbUNBQUMzSCxTQUFELEVBQVk0RixLQUFaLEVBQW1CQyxTQUFuQixFQUFpQztBQUN4RCxRQUFJRCxLQUFKLEVBQVc7QUFDUDVGLGVBQVMsQ0FBQzhGLEdBQVYsQ0FBYztBQUNWQyxnQkFBUSxFQUFFSCxLQURBO0FBRVZJLGdCQUFRLEVBQUUsVUFGQTtBQUdWRyxvQkFBWSxFQUFFTjtBQUhKLE9BQWQ7QUFLSDtBQUNKLEdBektjOztBQTJLZjtBQUNKO0FBQ0E7QUFDQTtBQUNJK0Isd0JBQXNCLEVBQUUsZ0NBQUNoQyxLQUFELEVBQVc7QUFDL0IsUUFBTWlDLGtCQUFrQixHQUFHaE8sQ0FBQyxtQkFBaUIrTCxLQUFLLENBQUNwSixJQUFOLENBQVcsV0FBWCxDQUFqQixTQUE1QjtBQUVBa0YsVUFBTSxDQUFDb0csSUFBUCxDQUFZN0gsNENBQUcsQ0FBQzhILE9BQWhCLEVBQXlCQyxPQUF6QixDQUFpQyxVQUFDL0UsS0FBRCxFQUFXO0FBQ3hDLFVBQUk0RSxrQkFBa0IsQ0FBQ0ksUUFBbkIsQ0FBNEJoSSw0Q0FBRyxDQUFDOEgsT0FBSixDQUFZOUUsS0FBWixDQUE1QixDQUFKLEVBQXFEO0FBQ2pENEUsMEJBQWtCLENBQUNLLFdBQW5CLENBQStCakksNENBQUcsQ0FBQzhILE9BQUosQ0FBWTlFLEtBQVosQ0FBL0I7QUFDSDtBQUNKLEtBSkQ7QUFLSDtBQXZMYyxDQUFuQjs7Ozs7Ozs7Ozs7Ozs7QUM5SEE7QUFBQTtBQUFBOztBQUVBLFNBQVNrRixnQkFBVCxDQUEwQkMsT0FBMUIsRUFBbUNDLElBQW5DLEVBQXlDO0FBQ3JDLE1BQU1uTSxLQUFLLEdBQUdrTSxPQUFPLENBQUMzSSxPQUFSLENBQWdCNEksSUFBaEIsQ0FBZDs7QUFFQSxNQUFJbk0sS0FBSyxHQUFHLENBQUMsQ0FBYixFQUFnQjtBQUNaa00sV0FBTyxDQUFDRSxNQUFSLENBQWVwTSxLQUFmLEVBQXNCLENBQXRCO0FBQ0g7QUFDSjs7QUFFRCxTQUFTcU0sZ0JBQVQsQ0FBMEJILE9BQTFCLEVBQW1DQyxJQUFuQyxFQUF5QztBQUNyQ0QsU0FBTyxDQUFDMUwsSUFBUixDQUFhMkwsSUFBYjtBQUNIOztBQUVELFNBQVNHLGdCQUFULENBQTBCSixPQUExQixFQUFtQ2hILEtBQW5DLEVBQTBDcUgsVUFBMUMsRUFBc0Q7QUFDbEQsTUFBSUwsT0FBTyxDQUFDckksTUFBUixLQUFtQixDQUF2QixFQUEwQjtBQUN0QixRQUFJLENBQUNxQixLQUFLLENBQUN2RSxFQUFOLENBQVMsU0FBVCxDQUFMLEVBQTBCO0FBQ3RCdUUsV0FBSyxDQUFDc0QsUUFBTixDQUFlLE1BQWY7QUFDSDs7QUFDRHRELFNBQUssQ0FBQzdDLElBQU4sQ0FBVyxNQUFYLEVBQXNCa0ssVUFBVSxDQUFDQyxPQUFqQyxTQUE0Q04sT0FBTyxDQUFDckQsSUFBUixDQUFhLEdBQWIsQ0FBNUM7QUFDQTNELFNBQUssQ0FBQzBELElBQU4sQ0FBVyxnQkFBWCxFQUE2QjZELElBQTdCLENBQWtDUCxPQUFPLENBQUNySSxNQUExQztBQUNILEdBTkQsTUFNTztBQUNIcUIsU0FBSyxDQUFDOEcsV0FBTixDQUFrQixNQUFsQjtBQUNIO0FBQ0o7O0FBRWMseUVBQVVPLFVBQVYsRUFBc0I7QUFDakMsTUFBSUcsY0FBYyxHQUFHLEVBQXJCO0FBRUEsTUFBTUMsWUFBWSxHQUFHaFAsQ0FBQyxDQUFDLHFCQUFELENBQXRCO0FBRUFBLEdBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWtILEVBQVYsQ0FBYSxjQUFiLEVBQTZCLFlBQU07QUFDL0IsUUFBTStILFFBQVEsR0FBR2pQLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVWlMLElBQVYsQ0FBZSxvQ0FBZixDQUFqQjtBQUVBOEQsa0JBQWMsR0FBR0UsUUFBUSxDQUFDL0ksTUFBVCxHQUFrQitJLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhLFVBQUM3TSxLQUFELEVBQVFxRCxPQUFSO0FBQUEsYUFBb0JBLE9BQU8sQ0FBQzBELEtBQTVCO0FBQUEsS0FBYixFQUFnRCtGLEdBQWhELEVBQWxCLEdBQTBFLEVBQTNGO0FBQ0FSLG9CQUFnQixDQUFDSSxjQUFELEVBQWlCQyxZQUFqQixFQUErQkosVUFBL0IsQ0FBaEI7QUFDSCxHQUxEO0FBT0E1TyxHQUFDLENBQUMsTUFBRCxDQUFELENBQVVvUCxjQUFWLENBQXlCLGNBQXpCO0FBRUFwUCxHQUFDLENBQUMsTUFBRCxDQUFELENBQVVrSCxFQUFWLENBQWEsT0FBYixFQUFzQixtQkFBdEIsRUFBMkMsVUFBQTNILEtBQUssRUFBSTtBQUNoRCxRQUFNOFAsT0FBTyxHQUFHOVAsS0FBSyxDQUFDQyxhQUFOLENBQW9CNEosS0FBcEM7QUFDQSxRQUFNa0csbUJBQW1CLEdBQUd0UCxDQUFDLENBQUMscUJBQUQsQ0FBN0I7O0FBRUEsUUFBSVQsS0FBSyxDQUFDQyxhQUFOLENBQW9CK1AsT0FBeEIsRUFBaUM7QUFDN0JiLHNCQUFnQixDQUFDSyxjQUFELEVBQWlCTSxPQUFqQixDQUFoQjtBQUNILEtBRkQsTUFFTztBQUNIZixzQkFBZ0IsQ0FBQ1MsY0FBRCxFQUFpQk0sT0FBakIsQ0FBaEI7QUFDSDs7QUFFRFYsb0JBQWdCLENBQUNJLGNBQUQsRUFBaUJPLG1CQUFqQixFQUFzQ1YsVUFBdEMsQ0FBaEI7QUFDSCxHQVhEO0FBYUE1TyxHQUFDLENBQUMsTUFBRCxDQUFELENBQVVrSCxFQUFWLENBQWEsUUFBYixFQUF1Qix3QkFBdkIsRUFBaUQsVUFBQTNILEtBQUssRUFBSTtBQUN0RCxRQUFNaVEsS0FBSyxHQUFHeFAsQ0FBQyxDQUFDVCxLQUFLLENBQUNDLGFBQVAsQ0FBZjtBQUNBLFFBQU1pUSxpQkFBaUIsR0FBR0QsS0FBSyxDQUFDdkUsSUFBTixDQUFXLG9DQUFYLENBQTFCOztBQUVBLFFBQUl3RSxpQkFBaUIsQ0FBQ3ZKLE1BQWxCLElBQTRCLENBQWhDLEVBQW1DO0FBQy9Cd0osbUVBQWMsQ0FBQyxrREFBRCxDQUFkO0FBQ0FuUSxXQUFLLENBQUNjLGNBQU47QUFDSDtBQUNKLEdBUkQ7QUFVQUwsR0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVa0gsRUFBVixDQUFhLE9BQWIsRUFBc0IscUJBQXRCLEVBQTZDLFlBQU07QUFDL0MsUUFBTXlJLG9CQUFvQixHQUFHM1AsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVaUwsSUFBVixDQUFlLG9DQUFmLENBQTdCOztBQUVBLFFBQUkwRSxvQkFBb0IsQ0FBQ3pKLE1BQXJCLElBQStCLENBQW5DLEVBQXNDO0FBQ2xDd0osbUVBQWMsQ0FBQyxrREFBRCxDQUFkO0FBQ0EsYUFBTyxLQUFQO0FBQ0g7QUFDSixHQVBEO0FBUUgsQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXRpbHMvdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZ1BhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGhvb2tzLCBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vdXRpbHMvdXJsLXV0aWxzJztcbmltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnLi91dGlscy9mb3JtLXV0aWxzJztcbmltcG9ydCBub2QgZnJvbSAnLi9ub2QnO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBhY2NvcmRpb25Ub2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tbmF2aWdhdGlvbiwgI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtdG9nZ2xlJyxcbiAgICBibG9ja2VyU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYmxvY2tlcicsXG4gICAgY2xlYXJGYWNldFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtY2xlYXJMaW5rJyxcbiAgICBjb21wb25lbnRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoLW5hdkxpc3QnLFxuICAgIGZhY2V0TmF2TGlzdFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLm5hdkxpc3QnLFxuICAgIHByaWNlUmFuZ2VFcnJvclNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0taW5saW5lTWVzc2FnZScsXG4gICAgcHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1maWVsZHNldCcsXG4gICAgcHJpY2VSYW5nZUZvcm1TZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtJyxcbiAgICBwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1heF9wcmljZV0nLFxuICAgIHByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWluX3ByaWNlXScsXG4gICAgc2hvd01vcmVUb2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tY29udGVudCAudG9nZ2xlTGluaycsXG4gICAgZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zOiAnI2ZhY2V0ZWRTZWFyY2gtZmlsdGVySXRlbXMgLmZvcm0taW5wdXQnLFxuICAgIG1vZGFsOiBtb2RhbEZhY3RvcnkoJyNtb2RhbCcpWzBdLFxuICAgIG1vZGFsT3BlbjogZmFsc2UsXG59O1xuXG4vKipcbiAqIEZhY2V0ZWQgc2VhcmNoIHZpZXcgY29tcG9uZW50XG4gKi9cbmNsYXNzIEZhY2V0ZWRTZWFyY2gge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXF1ZXN0T3B0aW9ucyAtIE9iamVjdCB3aXRoIG9wdGlvbnMgZm9yIHRoZSBhamF4IHJlcXVlc3RzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIGZldGNoaW5nIHRlbXBsYXRlc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQ29uZmlndXJhYmxlIG9wdGlvbnNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqXG4gICAgICogbGV0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAqICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICogICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAqICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJ1xuICAgICAqICAgICB9XG4gICAgICogfTtcbiAgICAgKlxuICAgICAqIGxldCB0ZW1wbGF0ZXNEaWRMb2FkID0gZnVuY3Rpb24oY29udGVudCkge1xuICAgICAqICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgKiAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBsZXQgZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCB0ZW1wbGF0ZXNEaWRMb2FkKTtcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZXF1ZXN0T3B0aW9ucywgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICAgICAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMucmVxdWVzdE9wdGlvbnMgPSByZXF1ZXN0T3B0aW9ucztcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IFtdO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBbXTtcblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG4gICAgICAgIC8vIFNob3cgbGltaXRlZCBpdGVtcyBieSBkZWZhdWx0XG4gICAgICAgICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKS5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJChuYXZMaXN0KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1hcmsgaW5pdGlhbGx5IGNvbGxhcHNlZCBhY2NvcmRpb25zXG4gICAgICAgICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKS5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMucHVzaChjb2xsYXBzaWJsZS50YXJnZXRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENvbGxhcHNlIGFsbCBmYWNldHMgaWYgaW5pdGlhbGx5IGhpZGRlblxuICAgICAgICAvLyBOT1RFOiBOZWVkIHRvIGV4ZWN1dGUgYWZ0ZXIgQ29sbGFwc2libGUgZ2V0cyBib290c3RyYXBwZWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMuY29tcG9uZW50U2VsZWN0b3IpLmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlQWxsRmFjZXRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE9ic2VydmUgdXNlciBldmVudHNcbiAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlID0gdGhpcy5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Ub2dnbGVDbGljayA9IHRoaXMub25Ub2dnbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlID0gdGhpcy5vbkFjY29yZGlvblRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xlYXJGYWNldCA9IHRoaXMub25DbGVhckZhY2V0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25GYWNldENsaWNrID0gdGhpcy5vbkZhY2V0Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblJhbmdlU3VibWl0ID0gdGhpcy5vblJhbmdlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyA9IHRoaXMuZmlsdGVyRmFjZXRJdGVtcy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBtZXRob2RzXG4gICAgcmVmcmVzaFZpZXcoY29udGVudCkge1xuICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhjb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXG4gICAgICAgIHRoaXMuaW5pdFByaWNlVmFsaWRhdG9yKCk7XG5cbiAgICAgICAgLy8gUmVzdG9yZSB2aWV3IHN0YXRlXG4gICAgICAgIHRoaXMucmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpO1xuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCk7XG5cbiAgICAgICAgLy8gQmluZCBldmVudHNcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmlldygpIHtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5zaG93KCk7XG5cbiAgICAgICAgYXBpLmdldFBhZ2UodXJsVXRpbHMuZ2V0VXJsKCksIHRoaXMucmVxdWVzdE9wdGlvbnMsIChlcnIsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3RvcikuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlZnJlc2ggdmlldyB3aXRoIG5ldyBjb250ZW50XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hWaWV3KGNvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcblxuICAgICAgICAvLyBSZW1vdmVcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG4gICAgICAgIGNvbnN0IGhhc01vcmVSZXN1bHRzID0gJG5hdkxpc3QuZGF0YSgnaGFzTW9yZVJlc3VsdHMnKTtcblxuICAgICAgICBpZiAoaGFzTW9yZVJlc3VsdHMpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBkZXBlbmRpbmcgb24gYGNvbGxhcHNlZGAgZmxhZ1xuICAgICAgICBpZiAoXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKSkge1xuICAgICAgICAgICAgdGhpcy5nZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgZmFjZXQgPSAkbmF2TGlzdC5kYXRhKCdmYWNldCcpO1xuICAgICAgICBjb25zdCBmYWNldFVybCA9IHVybFV0aWxzLmdldFVybCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlKSB7XG4gICAgICAgICAgICBhcGkuZ2V0UGFnZShmYWNldFVybCwge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBsaXN0X2FsbDogZmFjZXQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwub3BlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmaWx0ZXJGYWNldEl0ZW1zKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRpdGVtcyA9ICQoJy5uYXZMaXN0LWl0ZW0nKTtcbiAgICAgICAgY29uc3QgcXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgJGl0ZW1zLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gJChlbGVtZW50KS50ZXh0KCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmICh0ZXh0LmluZGV4T2YocXVlcnkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgIGNvbGxhcHNpYmxlLm9wZW4oKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlQWxsRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gICAgaW5pdFByaWNlVmFsaWRhdG9yKCkge1xuICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBub2QoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0ge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VFcnJvclNlbGVjdG9yLFxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfTtcblxuICAgICAgICBWYWxpZGF0b3JzLnNldE1pbk1heFByaWNlVmFsaWRhdGlvbih2YWxpZGF0b3IsIHNlbGVjdG9ycywgdGhpcy5vcHRpb25zLnZhbGlkYXRpb25FcnJvck1lc3NhZ2VzKTtcblxuICAgICAgICB0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IgPSB2YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMoKSB7XG4gICAgICAgIGNvbnN0ICRuYXZMaXN0cyA9ICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKTtcblxuICAgICAgICAvLyBSZXN0b3JlIGNvbGxhcHNlZCBzdGF0ZSBmb3IgZWFjaCBmYWNldFxuICAgICAgICAkbmF2TGlzdHMuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJChuYXZMaXN0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICAvLyBDbGVhbi11cFxuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuXG4gICAgICAgIC8vIERPTSBldmVudHNcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQod2luZG93KS5vbigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub24oJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xuXG4gICAgICAgIC8vIEhvb2tzXG4gICAgICAgIGhvb2tzLm9uKCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCB0aGlzLm9uRmFjZXRDbGljayk7XG4gICAgICAgIGhvb2tzLm9uKCdmYWNldGVkU2VhcmNoLXJhbmdlLXN1Ym1pdHRlZCcsIHRoaXMub25SYW5nZVN1Ym1pdCk7XG4gICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICAvLyBET00gZXZlbnRzXG4gICAgICAgICQod2luZG93KS5vZmYoJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcbiAgICAgICAgJCh3aW5kb3cpLm9mZigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub2ZmKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcbiAgICAgICAgaG9va3Mub2ZmKCdmYWNldGVkU2VhcmNoLXJhbmdlLXN1Ym1pdHRlZCcsIHRoaXMub25SYW5nZVN1Ym1pdCk7XG4gICAgICAgIGhvb2tzLm9mZignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgIG9uQ2xlYXJGYWNldChldmVudCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBVcGRhdGUgVVJMXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBvblRvZ2dsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQoJHRvZ2dsZS5hdHRyKCdocmVmJykpO1xuXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSB2aXNpYmxlIGl0ZW1zXG4gICAgICAgIHRoaXMudG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgfVxuXG4gICAgb25GYWNldENsaWNrKGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChjdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJGxpbmsudG9nZ2xlQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFVSTFxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb2RhbE9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cbiAgICAgICAgLy8gVXJsIG9iamVjdCBgcXVlcnlgIGlzIG5vdCBhIHRyYWRpdGlvbmFsIEphdmFTY3JpcHQgT2JqZWN0IG9uIGFsbCBzeXN0ZW1zLCBjbG9uZSBpdCBpbnN0ZWFkXG4gICAgICAgIGNvbnN0IHVybFF1ZXJ5UGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24odXJsUXVlcnlQYXJhbXMsIHVybC5xdWVyeSk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsUXVlcnlQYXJhbXMpIH0pKTtcbiAgICB9XG5cbiAgICBvblJhbmdlU3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IuYXJlQWxsKG5vZC5jb25zdGFudHMuVkFMSUQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBsZXQgcXVlcnlQYXJhbXMgPSBkZWNvZGVVUkkoJChjdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKSkuc3BsaXQoJyYnKTtcbiAgICAgICAgcXVlcnlQYXJhbXMgPSB1cmxVdGlscy5wYXJzZVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBxdWVyeVBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB1cmwucXVlcnlba2V5XSA9IHF1ZXJ5UGFyYW1zW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcmwgb2JqZWN0IGBxdWVyeWAgaXMgbm90IGEgdHJhZGl0aW9uYWwgSmF2YVNjcmlwdCBPYmplY3Qgb24gYWxsIHN5c3RlbXMsIGNsb25lIGl0IGluc3RlYWRcbiAgICAgICAgY29uc3QgdXJsUXVlcnlQYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih1cmxRdWVyeVBhcmFtcywgdXJsLnF1ZXJ5KTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsUXVlcnlQYXJhbXMpIH0pKTtcbiAgICB9XG5cbiAgICBvblN0YXRlQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICB9XG5cbiAgICBvbkFjY29yZGlvblRvZ2dsZShldmVudCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcbiAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcblxuICAgICAgICBpZiAoY29sbGFwc2libGUuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0cywgW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0cywgaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Qb3BTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGN1cnJlbnRVcmwpO1xuICAgICAgICAvLyBJZiBzZWFyY2hQYXJhbXMgZG9lcyBub3QgY29udGFpbiBhIHBhZ2UgdmFsdWUgdGhlbiBtb2RpZnkgdXJsIHF1ZXJ5IHN0cmluZyB0byBoYXZlIHBhZ2U9MVxuICAgICAgICBpZiAoIXNlYXJjaFBhcmFtcy5oYXMoJ3BhZ2UnKSkge1xuICAgICAgICAgICAgY29uc3QgbGlua1VybCA9ICQoJy5wYWdpbmF0aW9uLWxpbmsnKS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICBjb25zdCByZSA9IC9wYWdlPVswLTldKy9pO1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZExpbmtVcmwgPSBsaW5rVXJsLnJlcGxhY2UocmUsICdwYWdlPTEnKTtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHVwZGF0ZWRMaW5rVXJsKTtcbiAgICAgICAgfVxuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignc3RhdGVjaGFuZ2UnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2V0ZWRTZWFyY2g7XG4iLCJjb25zdCBmb3JtcyA9IHtcbiAgICBlbWFpbCh2YWx1ZSkge1xuICAgICAgICBjb25zdCByZSA9IC9eLitALitcXC4uKy87XG4gICAgICAgIHJldHVybiByZS50ZXN0KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGVzIGEgcGFzc3dvcmQgZmllbGRcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwYXNzd29yZCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RFbXB0eSh2YWx1ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHZhbGlkYXRlcyBpZiBhIGZpZWxkIGlzIGVtcHR5XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICpcbiAgICAgKi9cbiAgICBub3RFbXB0eSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybXM7XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG5vZCBmcm9tICcuLi9ub2QnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4uL21vZGVscy9mb3Jtcyc7XG5cbmNvbnN0IGlucHV0VGFnTmFtZXMgPSBbXG4gICAgJ2lucHV0JyxcbiAgICAnc2VsZWN0JyxcbiAgICAndGV4dGFyZWEnLFxuXTtcbi8qKlxuICogU2V0IHVwIE9iamVjdCB3aXRoIEVycm9yIE1lc3NhZ2VzIG9uIFBhc3N3b3JkIFZhbGlkYXRpb24uIFBsZWFzZSB1c2UgbWVzc2FnZXMgaW4gbWVudGlvbmVkIG9yZGVyXG4gKiBAcGFyYW0ge3N0cmluZ30gZW1wdHkgZGVmaW5lcyBlcnJvciB0ZXh0IGZvciBlbXB0eSBmaWVsZFxuICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpcm0gZGVmaW5lcyBlcnJvciB0ZXh0IGZvciBlbXB0eSBjb25maXJtYXRpb24gZmllbGRcbiAqIEBwYXJhbSB7c3RyaW5nfSBtaXNtYXRjaCBkZWZpbmVzIGVycm9yIHRleHQgaWYgY29uZmlybSBwYXNzZm9yZCBtaXNtYXRjaGVzIHBhc3Nmb3JkIGZpZWxkXG4gKiBAcGFyYW0ge3N0cmluZ30gaW52YWxpZCBkZWZpbmVzIGVycm9yIHRleHQgZm9yIGludmFsaWQgcGFzc3dvcmQgY2hhcmF0ZXJzIHNlcXVlbmNlXG4gKiBAcmV0dXJuIHtvYmplY3R9IG1lc3NhZ2VzIG9yIGRlZmF1bHQgdGV4dHMgaWYgbm90aGluZyBpcyBwcm92aWRpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdCA9IChlbXB0eSwgY29uZmlybSwgbWlzbWF0Y2gsIGludmFsaWQpID0+ICh7XG4gICAgb25FbXB0eVBhc3N3b3JkRXJyb3JUZXh0OiBlbXB0eSxcbiAgICBvbkNvbmZpcm1QYXNzd29yZEVycm9yVGV4dDogY29uZmlybSxcbiAgICBvbk1pc21hdGNoUGFzc3dvcmRFcnJvclRleHQ6IG1pc21hdGNoLFxuICAgIG9uTm90VmFsaWRQYXNzd29yZEVycm9yVGV4dDogaW52YWxpZCxcbn0pO1xuXG5cbi8qKlxuICogQXBwbHkgY2xhc3MgbmFtZSB0byBhbiBpbnB1dCBlbGVtZW50IG9uIGl0cyB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gaW5wdXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBmb3JtRmllbGRDbGFzc1xuICogQHJldHVybiB7b2JqZWN0fSBFbGVtZW50IGl0c2VsZlxuICovXG5mdW5jdGlvbiBjbGFzc2lmeUlucHV0KGlucHV0LCBmb3JtRmllbGRDbGFzcykge1xuICAgIGNvbnN0ICRpbnB1dCA9ICQoaW5wdXQpO1xuICAgIGNvbnN0ICRmb3JtRmllbGQgPSAkaW5wdXQucGFyZW50KGAuJHtmb3JtRmllbGRDbGFzc31gKTtcbiAgICBjb25zdCB0YWdOYW1lID0gJGlucHV0LnByb3AoJ3RhZ05hbWUnKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgbGV0IGNsYXNzTmFtZSA9IGAke2Zvcm1GaWVsZENsYXNzfS0tJHt0YWdOYW1lfWA7XG4gICAgbGV0IHNwZWNpZmljQ2xhc3NOYW1lO1xuXG4gICAgLy8gSW5wdXQgY2FuIGJlIHRleHQvY2hlY2tib3gvcmFkaW8gZXRjLi4uXG4gICAgaWYgKHRhZ05hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgY29uc3QgaW5wdXRUeXBlID0gJGlucHV0LnByb3AoJ3R5cGUnKTtcblxuICAgICAgICBpZiAoXy5pbmNsdWRlcyhbJ3JhZGlvJywgJ2NoZWNrYm94JywgJ3N1Ym1pdCddLCBpbnB1dFR5cGUpKSB7XG4gICAgICAgICAgICAvLyBpZTogLmZvcm0tZmllbGQtLWNoZWNrYm94LCAuZm9ybS1maWVsZC0tcmFkaW9cbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IGAke2Zvcm1GaWVsZENsYXNzfS0tJHtfLmNhbWVsQ2FzZShpbnB1dFR5cGUpfWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBpZTogLmZvcm0tZmllbGQtLWlucHV0IC5mb3JtLWZpZWxkLS1pbnB1dFRleHRcbiAgICAgICAgICAgIHNwZWNpZmljQ2xhc3NOYW1lID0gYCR7Y2xhc3NOYW1lfSR7Xy5jYXBpdGFsaXplKGlucHV0VHlwZSl9YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFwcGx5IGNsYXNzIG1vZGlmaWVyXG4gICAgcmV0dXJuICRmb3JtRmllbGRcbiAgICAgICAgLmFkZENsYXNzKGNsYXNzTmFtZSlcbiAgICAgICAgLmFkZENsYXNzKHNwZWNpZmljQ2xhc3NOYW1lKTtcbn1cblxuLyoqXG4gKiBBcHBseSBjbGFzcyBuYW1lIHRvIGVhY2ggaW5wdXQgZWxlbWVudCBpbiBhIGZvcm0gYmFzZWQgb24gaXRzIHR5cGVcbiAqIEBleGFtcGxlXG4gKiAvLyBCZWZvcmVcbiAqIDxmb3JtIGlkPVwiZm9ybVwiPlxuICogICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XG4gKiAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiPlxuICogICAgIDwvZGl2PlxuICogICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XG4gKiAgICAgICAgIDxzZWxlY3Q+Li4uPC9zZWxlY3Q+XG4gKiAgICAgPC9kaXY+XG4gKiA8L2Zvcm0+XG4gKlxuICogY2xhc3NpZnlGb3JtKCcjZm9ybScsIHsgZm9ybUZpZWxkQ2xhc3M6ICdmb3JtLWZpZWxkJyB9KTtcbiAqXG4gKiAvLyBBZnRlclxuICogPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0taW5wdXQgZm9ybS1maWVsZC0taW5wdXRUZXh0XCI+Li4uPC9kaXY+XG4gKiA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1zZWxlY3RcIj4uLi48L2Rpdj5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IGZvcm1TZWxlY3RvciAtIHNlbGVjdG9yIG9yIGVsZW1lbnRcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtqUXVlcnl9IEVsZW1lbnQgaXRzZWxmXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeUZvcm0oZm9ybVNlbGVjdG9yLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCAkZm9ybSA9ICQoZm9ybVNlbGVjdG9yKTtcbiAgICBjb25zdCAkaW5wdXRzID0gJGZvcm0uZmluZChpbnB1dFRhZ05hbWVzLmpvaW4oJywgJykpO1xuXG4gICAgLy8gT2J0YWluIG9wdGlvbnNcbiAgICBjb25zdCB7IGZvcm1GaWVsZENsYXNzID0gJ2Zvcm0tZmllbGQnIH0gPSBvcHRpb25zO1xuXG4gICAgLy8gQ2xhc3NpZnkgZWFjaCBpbnB1dCBpbiBhIGZvcm1cbiAgICAkaW5wdXRzLmVhY2goKF9fLCBpbnB1dCkgPT4ge1xuICAgICAgICBjbGFzc2lmeUlucHV0KGlucHV0LCBmb3JtRmllbGRDbGFzcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gJGZvcm07XG59XG5cbi8qKlxuICogR2V0IGlkIGZyb20gZ2l2ZW4gZmllbGRcbiAqIEBwYXJhbSB7b2JqZWN0fSAkZmllbGQgSlF1ZXJ5IGZpZWxkIG9iamVjdFxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBnZXRGaWVsZElkKCRmaWVsZCkge1xuICAgIGNvbnN0IGZpZWxkSWQgPSAkZmllbGQucHJvcCgnbmFtZScpLm1hdGNoKC8oXFxbLipcXF0pLyk7XG5cbiAgICBpZiAoZmllbGRJZCAmJiBmaWVsZElkLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZXR1cm4gZmllbGRJZFswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogSW5zZXJ0IGhpZGRlbiBmaWVsZCBhZnRlciBTdGF0ZS9Qcm92aW5jZSBmaWVsZFxuICogQHBhcmFtIHtvYmplY3R9ICRzdGF0ZUZpZWxkIEpRdWVyeSBmaWVsZCBvYmplY3RcbiAqL1xuZnVuY3Rpb24gaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCgkc3RhdGVGaWVsZCkge1xuICAgIGNvbnN0IGZpZWxkSWQgPSBnZXRGaWVsZElkKCRzdGF0ZUZpZWxkKTtcbiAgICBjb25zdCBzdGF0ZUZpZWxkQXR0cnMgPSB7XG4gICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICBuYW1lOiBgRm9ybUZpZWxkSXNUZXh0JHtmaWVsZElkfWAsXG4gICAgICAgIHZhbHVlOiAnMScsXG4gICAgfTtcblxuICAgICRzdGF0ZUZpZWxkLmFmdGVyKCQoJzxpbnB1dCAvPicsIHN0YXRlRmllbGRBdHRycykpO1xufVxuXG5jb25zdCBWYWxpZGF0b3JzID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBuZXcgdmFsaWRhdGlvbiB3aGVuIHRoZSBmb3JtIGlzIGRpcnR5XG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlcnJvclRleHQgZGVzY3JpYmVzIGVycm9yTWFzc2FnZSBvbiBlbWFpbCB2YWxpZGF0aW9uXG4gICAgICovXG4gICAgc2V0RW1haWxWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JUZXh0KSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGVycm9yVGV4dCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIHBhc3N3b3JkIGZpZWxkc1xuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmRTZWxlY3RvclxuICAgICAqIEBwYXJhbSBwYXNzd29yZDJTZWxlY3RvclxuICAgICAqIEBwYXJhbSByZXF1aXJlbWVudHNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXJyb3JUZXh0c09iamVjdFxuICAgICAqIEBwYXJhbSBpc09wdGlvbmFsXG4gICAgICovXG4gICAgc2V0UGFzc3dvcmRWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBwYXNzd29yZFNlbGVjdG9yLCBwYXNzd29yZDJTZWxlY3RvciwgcmVxdWlyZW1lbnRzLCB7XG4gICAgICAgIG9uRW1wdHlQYXNzd29yZEVycm9yVGV4dCwgb25Db25maXJtUGFzc3dvcmRFcnJvclRleHQsIG9uTWlzbWF0Y2hQYXNzd29yZEVycm9yVGV4dCwgb25Ob3RWYWxpZFBhc3N3b3JkRXJyb3JUZXh0LFxuICAgIH0sIGlzT3B0aW9uYWwpID0+IHtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogb25FbXB0eVBhc3N3b3JkRXJyb3JUZXh0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLm1hdGNoKG5ldyBSZWdFeHAocmVxdWlyZW1lbnRzLmFscGhhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbC5tYXRjaChuZXcgUmVnRXhwKHJlcXVpcmVtZW50cy5udW1lcmljKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbC5sZW5ndGggPj0gcmVxdWlyZW1lbnRzLm1pbmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBvcHRpb25hbCBhbmQgbm90aGluZyBlbnRlcmVkLCBpdCBpcyB2YWxpZFxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCAmJiB2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBvbk5vdFZhbGlkUGFzc3dvcmRFcnJvclRleHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogb25Db25maXJtUGFzc3dvcmRFcnJvclRleHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsID09PSAkcGFzc3dvcmQudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogb25NaXNtYXRjaFBhc3N3b3JkRXJyb3JUZXh0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHBhc3N3b3JkVmFsaWRhdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0ge05vZH0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdG9yc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZXJyb3JTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZmllbGRzZXRTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZm9ybVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5tYXhQcmljZVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5taW5QcmljZVNlbGVjdG9yXG4gICAgICovXG4gICAgc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBzZWxlY3RvcnMsIHByaWNlVmFsaWRhdGlvbkVycm9yVGV4dHMgPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBlcnJvclNlbGVjdG9yLFxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICBtaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICB9ID0gc2VsZWN0b3JzO1xuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvYmplY3QtY3VybHktbmV3bGluZVxuICAgICAgICBjb25zdCB7IG9uTWluUHJpY2VFcnJvciwgb25NYXhQcmljZUVycm9yLCBtaW5QcmljZU5vdEVudGVyZWQsIG1heFByaWNlTm90RW50ZXJlZCwgb25JbnZhbGlkUHJpY2UgfSA9IHByaWNlVmFsaWRhdGlvbkVycm9yVGV4dHM7XG5cbiAgICAgICAgdmFsaWRhdG9yLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBmb3JtOiBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBwcmV2ZW50U3VibWl0OiB0cnVlLFxuICAgICAgICAgICAgc3VjY2Vzc0NsYXNzOiAnXycsIC8vIEtMVURHRTogRG9uJ3QgYXBwbHkgc3VjY2VzcyBjbGFzc1xuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogYG1pbi1tYXg6JHttaW5QcmljZVNlbGVjdG9yfToke21heFByaWNlU2VsZWN0b3J9YCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IG9uSW52YWxpZFByaWNlLFxuICAgICAgICAgICAgc2VsZWN0b3I6IFttaW5QcmljZVNlbGVjdG9yLCBtYXhQcmljZVNlbGVjdG9yXSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAnbWluLW51bWJlcjowJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLnNldE1lc3NhZ2VPcHRpb25zKHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBbbWluUHJpY2VTZWxlY3RvciwgbWF4UHJpY2VTZWxlY3Rvcl0sXG4gICAgICAgICAgICBwYXJlbnQ6IGZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBlcnJvclNwYW46IGVycm9yU2VsZWN0b3IsXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgbmV3IHZhbGlkYXRpb24gd2hlbiB0aGUgZm9ybSBpcyBkaXJ0eVxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JUZXh0KSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogZXJyb3JUZXh0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBjbGFzc2VzIGZyb20gZGlydHkgZm9ybSBpZiBwcmV2aW91c2x5IGNoZWNrZWRcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBjbGVhblVwU3RhdGVWYWxpZGF0aW9uOiAoZmllbGQpID0+IHtcbiAgICAgICAgY29uc3QgJGZpZWxkQ2xhc3NFbGVtZW50ID0gJCgoYFtkYXRhLXR5cGU9XCIke2ZpZWxkLmRhdGEoJ2ZpZWxkVHlwZScpfVwiXWApKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhub2QuY2xhc3NlcykuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICgkZmllbGRDbGFzc0VsZW1lbnQuaGFzQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKSkge1xuICAgICAgICAgICAgICAgICRmaWVsZENsYXNzRWxlbWVudC5yZW1vdmVDbGFzcyhub2QuY2xhc3Nlc1t2YWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IHsgVmFsaWRhdG9ycywgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9O1xuIiwiaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL21vZGFsJztcblxuZnVuY3Rpb24gZGVjcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY29uc3QgaW5kZXggPSBjb3VudGVyLmluZGV4T2YoaXRlbSk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBjb3VudGVyLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb3VudGVyLnB1c2goaXRlbSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXJOYXYoY291bnRlciwgJGxpbmssIHVybENvbnRleHQpIHtcbiAgICBpZiAoY291bnRlci5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaWYgKCEkbGluay5pcygndmlzaWJsZScpKSB7XG4gICAgICAgICAgICAkbGluay5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgICRsaW5rLmF0dHIoJ2hyZWYnLCBgJHt1cmxDb250ZXh0LmNvbXBhcmV9LyR7Y291bnRlci5qb2luKCcvJyl9YCk7XG4gICAgICAgICRsaW5rLmZpbmQoJ3NwYW4uY291bnRQaWxsJykuaHRtbChjb3VudGVyLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxpbmsucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh1cmxDb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVDb3VudGVyID0gW107XG5cbiAgICBjb25zdCAkY29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NvbXBhcmVSZXNldCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBjb21wYXJlQ291bnRlciA9ICRjaGVja2VkLmxlbmd0aCA/ICRjaGVja2VkLm1hcCgoaW5kZXgsIGVsZW1lbnQpID0+IGVsZW1lbnQudmFsdWUpLmdldCgpIDogW107XG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjb21wYXJlTGluaywgdXJsQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLWlkXScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWU7XG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ29tcGFyZUxpbmsgPSAkKCdhW2RhdGEtY29tcGFyZS1uYXZdJyk7XG5cbiAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgaW5jcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUNvdW50ZXJOYXYoY29tcGFyZUNvdW50ZXIsICRjbGlja2VkQ29tcGFyZUxpbmssIHVybENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnW2RhdGEtcHJvZHVjdC1jb21wYXJlXScsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgJHRoaXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1RvQ29tcGFyZSA9ICR0aGlzLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgaWYgKHByb2R1Y3RzVG9Db21wYXJlLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbCgnWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IHR3byBwcm9kdWN0cyB0byBjb21wYXJlJyk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2FbZGF0YS1jb21wYXJlLW5hdl0nLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ2hlY2tlZElucHV0ID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgaWYgKCRjbGlja2VkQ2hlY2tlZElucHV0Lmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbCgnWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IHR3byBwcm9kdWN0cyB0byBjb21wYXJlJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=