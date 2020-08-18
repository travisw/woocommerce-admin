(window["__wcAdmin_webpackJsonp"] = window["__wcAdmin_webpackJsonp"] || []).push([["analytics-report-taxes"],{

/***/ "./client/analytics/components/report-summary/index.js":
/*!*************************************************************!*\
  !*** ./client/analytics/components/report-summary/index.js ***!
  \*************************************************************/
/*! exports provided: ReportSummary, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportSummary", function() { return ReportSummary; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "./node_modules/@wordpress/compose/build-module/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lib_date__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/date */ "./client/lib/date.js");
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @woocommerce/navigation */ "@woocommerce/navigation");
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @woocommerce/components */ "@woocommerce/components");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @woocommerce/number */ "@woocommerce/number");
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @woocommerce/data */ "@woocommerce/data");
/* harmony import */ var _woocommerce_data__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_data__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var wc_api_reports_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! wc-api/reports/utils */ "./client/wc-api/reports/utils.js");
/* harmony import */ var analytics_components_report_error__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! analytics/components/report-error */ "./client/analytics/components/report-error/index.js");
/* harmony import */ var wc_api_with_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! wc-api/with-select */ "./client/wc-api/with-select.js");
/* harmony import */ var lib_tracks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lib/tracks */ "./client/lib/tracks.js");
/* harmony import */ var lib_currency_context__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lib/currency-context */ "./client/lib/currency-context.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */




/**
 * WooCommerce dependencies
 */






/**
 * Internal dependencies
 */






/**
 * Component to render summary numbers in reports.
 */

var ReportSummary = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ReportSummary, _Component);

  var _super = _createSuper(ReportSummary);

  function ReportSummary() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ReportSummary);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ReportSummary, [{
    key: "formatVal",
    value: function formatVal(val, type) {
      var _this$context = this.context,
          formatAmount = _this$context.formatAmount,
          getCurrencyConfig = _this$context.getCurrencyConfig;
      return type === 'currency' ? formatAmount(val) : Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_12__["formatValue"])(getCurrencyConfig(), type, val);
    }
  }, {
    key: "getValues",
    value: function getValues(key, type) {
      var _this$props = this.props,
          emptySearchResults = _this$props.emptySearchResults,
          summaryData = _this$props.summaryData;
      var totals = summaryData.totals;
      var primaryValue = emptySearchResults ? 0 : totals.primary[key];
      var secondaryValue = emptySearchResults ? 0 : totals.secondary[key];
      return {
        delta: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_12__["calculateDelta"])(primaryValue, secondaryValue),
        prevValue: this.formatVal(secondaryValue, type),
        value: this.formatVal(primaryValue, type)
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          charts = _this$props2.charts,
          query = _this$props2.query,
          selectedChart = _this$props2.selectedChart,
          summaryData = _this$props2.summaryData,
          endpoint = _this$props2.endpoint,
          report = _this$props2.report,
          defaultDateRange = _this$props2.defaultDateRange;
      var isError = summaryData.isError,
          isRequesting = summaryData.isRequesting;

      if (isError) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(analytics_components_report_error__WEBPACK_IMPORTED_MODULE_15__["default"], {
          isError: true
        });
      }

      if (isRequesting) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__["SummaryListPlaceholder"], {
          numberOfItems: charts.length
        });
      }

      var _getDateParamsFromQue = Object(lib_date__WEBPACK_IMPORTED_MODULE_9__["getDateParamsFromQuery"])(query, defaultDateRange),
          compare = _getDateParamsFromQue.compare;

      var renderSummaryNumbers = function renderSummaryNumbers(_ref) {
        var onToggle = _ref.onToggle;
        return charts.map(function (chart) {
          var key = chart.key,
              order = chart.order,
              orderby = chart.orderby,
              label = chart.label,
              type = chart.type;
          var newPath = {
            chart: key
          };

          if (orderby) {
            newPath.orderby = orderby;
          }

          if (order) {
            newPath.order = order;
          }

          var href = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__["getNewPath"])(newPath);
          var isSelected = selectedChart.key === key;

          var _this$getValues = _this.getValues(key, type),
              delta = _this$getValues.delta,
              prevValue = _this$getValues.prevValue,
              value = _this$getValues.value;

          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__["SummaryNumber"], {
            key: key,
            delta: delta,
            href: href,
            label: label,
            prevLabel: compare === 'previous_period' ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Previous Period:', 'woocommerce-admin') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Previous Year:', 'woocommerce-admin'),
            prevValue: prevValue,
            selected: isSelected,
            value: value,
            onLinkClickCallback: function onLinkClickCallback() {
              // Wider than a certain breakpoint, there is no dropdown so avoid calling onToggle.
              if (onToggle) {
                onToggle();
              }

              Object(lib_tracks__WEBPACK_IMPORTED_MODULE_17__["recordEvent"])('analytics_chart_tab_click', {
                report: report || endpoint,
                key: key
              });
            }
          });
        });
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_11__["SummaryList"], null, renderSummaryNumbers);
    }
  }]);

  return ReportSummary;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["Component"]);
ReportSummary.propTypes = {
  /**
   * Properties of all the charts available for that report.
   */
  charts: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array.isRequired,

  /**
   * The endpoint to use in API calls to populate the Summary Numbers.
   * For example, if `taxes` is provided, data will be fetched from the report
   * `taxes` endpoint (ie: `/wc-analytics/reports/taxes/stats`). If the provided endpoint
   * doesn't exist, an error will be shown to the user with `ReportError`.
   */
  endpoint: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,

  /**
   * Allows specifying properties different from the `endpoint` that will be used
   * to limit the items when there is an active search.
   */
  limitProperties: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.array,

  /**
   * The query string represented in object form.
   */
  query: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,

  /**
   * Properties of the selected chart.
   */
  selectedChart: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.shape({
    /**
     * Key of the selected chart.
     */
    key: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,

    /**
     * Chart label.
     */
    label: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,

    /**
     * Order query argument.
     */
    order: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['asc', 'desc']),

    /**
     * Order by query argument.
     */
    orderby: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,

    /**
     * Number type for formatting.
     */
    type: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOf(['average', 'number', 'currency']).isRequired
  }).isRequired,

  /**
   * Data to display in the SummaryNumbers.
   */
  summaryData: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,

  /**
   * Report name, if different than the endpoint.
   */
  report: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
};
ReportSummary.defaultProps = {
  summaryData: {
    totals: {
      primary: {},
      secondary: {}
    },
    isError: false
  }
};
ReportSummary.contextType = lib_currency_context__WEBPACK_IMPORTED_MODULE_18__["CurrencyContext"];
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__["compose"])(Object(wc_api_with_select__WEBPACK_IMPORTED_MODULE_16__["default"])(function (select, props) {
  var charts = props.charts,
      endpoint = props.endpoint,
      limitProperties = props.limitProperties,
      query = props.query,
      filters = props.filters,
      advancedFilters = props.advancedFilters;
  var limitBy = limitProperties || [endpoint];
  var hasLimitByParam = limitBy.some(function (item) {
    return query[item] && query[item].length;
  });

  if (query.search && !hasLimitByParam) {
    return {
      emptySearchResults: true
    };
  }

  var fields = charts && charts.map(function (chart) {
    return chart.key;
  });

  var _select$getSetting = select(_woocommerce_data__WEBPACK_IMPORTED_MODULE_13__["SETTINGS_STORE_NAME"]).getSetting('wc_admin', 'wcAdminSettings'),
      defaultDateRange = _select$getSetting.woocommerce_default_date_range;

  var summaryData = Object(wc_api_reports_utils__WEBPACK_IMPORTED_MODULE_14__["getSummaryNumbers"])({
    endpoint: endpoint,
    query: query,
    select: select,
    limitBy: limitBy,
    filters: filters,
    advancedFilters: advancedFilters,
    defaultDateRange: defaultDateRange,
    fields: fields
  });
  return {
    summaryData: summaryData,
    defaultDateRange: defaultDateRange
  };
}))(ReportSummary));

/***/ }),

/***/ "./client/analytics/report/taxes/config.js":
/*!*************************************************!*\
  !*** ./client/analytics/report/taxes/config.js ***!
  \*************************************************/
/*! exports provided: charts, filters, advancedFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charts", function() { return charts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return filters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "advancedFilters", function() { return advancedFilters; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_async_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/async-requests */ "./client/lib/async-requests/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./client/analytics/report/taxes/utils.js");
/* harmony import */ var wc_api_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wc-api/constants */ "./client/wc-api/constants.js");
/**
 * External dependencies
 */


/**
 * Internal dependencies
 */




var TAXES_REPORT_CHARTS_FILTER = 'woocommerce_admin_taxes_report_charts';
var TAXES_REPORT_FILTERS_FILTER = 'woocommerce_admin_taxes_report_filters';
var TAXES_REPORT_ADVANCED_FILTERS_FILTER = 'woocommerce_admin_taxes_report_advanced_filters';
var charts = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(TAXES_REPORT_CHARTS_FILTER, [{
  key: 'total_tax',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Total Tax', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'total_tax',
  type: 'currency'
}, {
  key: 'order_tax',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Order Tax', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'order_tax',
  type: 'currency'
}, {
  key: 'shipping_tax',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Shipping Tax', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'shipping_tax',
  type: 'currency'
}, {
  key: 'orders_count',
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Orders', 'woocommerce-admin'),
  order: 'desc',
  orderby: 'orders_count',
  type: 'number'
}]);
var filters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(TAXES_REPORT_FILTERS_FILTER, [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Show', 'woocommerce-admin'),
  staticParams: ['chartType', 'paged', 'per_page'],
  param: 'filter',
  showFilters: function showFilters() {
    return true;
  },
  filters: [{
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('All Taxes', 'woocommerce-admin'),
    value: 'all'
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Comparison', 'woocommerce-admin'),
    value: 'compare-taxes',
    chartMode: 'item-comparison',
    settings: {
      type: 'taxes',
      param: 'taxes',
      getLabels: Object(lib_async_requests__WEBPACK_IMPORTED_MODULE_2__["getRequestByIdString"])(wc_api_constants__WEBPACK_IMPORTED_MODULE_4__["NAMESPACE"] + '/taxes', function (tax) {
        return {
          id: tax.id,
          label: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getTaxCode"])(tax)
        };
      }),
      labels: {
        helpText: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Check at least two tax codes below to compare', 'woocommerce-admin'),
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Search for tax codes to compare', 'woocommerce-admin'),
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare Tax Codes', 'woocommerce-admin'),
        update: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Compare', 'woocommerce-admin')
      }
    }
  }]
}]);
var advancedFilters = Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__["applyFilters"])(TAXES_REPORT_ADVANCED_FILTERS_FILTER, {});

/***/ }),

/***/ "./client/analytics/report/taxes/index.js":
/*!************************************************!*\
  !*** ./client/analytics/report/taxes/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaxesReport; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config */ "./client/analytics/report/taxes/config.js");
/* harmony import */ var lib_get_selected_chart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/get-selected-chart */ "./client/lib/get-selected-chart/index.js");
/* harmony import */ var analytics_components_report_chart__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! analytics/components/report-chart */ "./client/analytics/components/report-chart/index.js");
/* harmony import */ var analytics_components_report_summary__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! analytics/components/report-summary */ "./client/analytics/components/report-summary/index.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./table */ "./client/analytics/report/taxes/table.js");
/* harmony import */ var analytics_components_report_filters__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! analytics/components/report-filters */ "./client/analytics/components/report-filters/index.js");








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */



/**
 * Internal dependencies
 */








var TaxesReport = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(TaxesReport, _Component);

  var _super = _createSuper(TaxesReport);

  function TaxesReport() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, TaxesReport);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(TaxesReport, [{
    key: "getChartMeta",
    value: function getChartMeta() {
      var query = this.props.query;
      var isCompareTaxView = query.filter === 'compare-taxes';
      var mode = isCompareTaxView ? 'item-comparison' : 'time-comparison';

      var itemsLabel = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__["__"])('%d taxes', 'woocommerce-admin');

      return {
        itemsLabel: itemsLabel,
        mode: mode
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isRequesting = _this$props.isRequesting,
          query = _this$props.query,
          path = _this$props.path;

      var _this$getChartMeta = this.getChartMeta(),
          mode = _this$getChartMeta.mode,
          itemsLabel = _this$getChartMeta.itemsLabel;

      var chartQuery = _objectSpread({}, query);

      if (mode === 'item-comparison') {
        chartQuery.segmentby = 'tax_rate_id';
      }

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(analytics_components_report_filters__WEBPACK_IMPORTED_MODULE_14__["default"], {
        query: query,
        path: path,
        filters: _config__WEBPACK_IMPORTED_MODULE_9__["filters"],
        advancedFilters: _config__WEBPACK_IMPORTED_MODULE_9__["advancedFilters"],
        report: "taxes"
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(analytics_components_report_summary__WEBPACK_IMPORTED_MODULE_12__["default"], {
        charts: _config__WEBPACK_IMPORTED_MODULE_9__["charts"],
        endpoint: "taxes",
        isRequesting: isRequesting,
        query: chartQuery,
        selectedChart: Object(lib_get_selected_chart__WEBPACK_IMPORTED_MODULE_10__["default"])(query.chart, _config__WEBPACK_IMPORTED_MODULE_9__["charts"]),
        filters: _config__WEBPACK_IMPORTED_MODULE_9__["filters"],
        advancedFilters: _config__WEBPACK_IMPORTED_MODULE_9__["advancedFilters"]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(analytics_components_report_chart__WEBPACK_IMPORTED_MODULE_11__["default"], {
        charts: _config__WEBPACK_IMPORTED_MODULE_9__["charts"],
        filters: _config__WEBPACK_IMPORTED_MODULE_9__["filters"],
        advancedFilters: _config__WEBPACK_IMPORTED_MODULE_9__["advancedFilters"],
        mode: mode,
        endpoint: "taxes",
        query: chartQuery,
        path: path,
        isRequesting: isRequesting,
        itemsLabel: itemsLabel,
        selectedChart: Object(lib_get_selected_chart__WEBPACK_IMPORTED_MODULE_10__["default"])(query.chart, _config__WEBPACK_IMPORTED_MODULE_9__["charts"])
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_table__WEBPACK_IMPORTED_MODULE_13__["default"], {
        isRequesting: isRequesting,
        query: query,
        filters: _config__WEBPACK_IMPORTED_MODULE_9__["filters"],
        advancedFilters: _config__WEBPACK_IMPORTED_MODULE_9__["advancedFilters"]
      }));
    }
  }]);

  return TaxesReport;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);


TaxesReport.propTypes = {
  query: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};

/***/ }),

/***/ "./client/analytics/report/taxes/table.js":
/*!************************************************!*\
  !*** ./client/analytics/report/taxes/table.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @woocommerce/components */ "@woocommerce/components");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @woocommerce/navigation */ "@woocommerce/navigation");
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./client/analytics/report/taxes/utils.js");
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @woocommerce/number */ "@woocommerce/number");
/* harmony import */ var _woocommerce_number__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_number__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var analytics_components_report_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! analytics/components/report-table */ "./client/analytics/components/report-table/index.js");
/* harmony import */ var lib_currency_context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lib/currency-context */ "./client/lib/currency-context.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * External dependencies
 */



/**
 * WooCommerce dependencies
 */





/**
 * Internal dependencies
 */




var TaxesReportTable = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(TaxesReportTable, _Component);

  var _super = _createSuper(TaxesReportTable);

  function TaxesReportTable() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TaxesReportTable);

    _this = _super.call(this);
    _this.getHeadersContent = _this.getHeadersContent.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.getRowsContent = _this.getRowsContent.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    _this.getSummary = _this.getSummary.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TaxesReportTable, [{
    key: "getHeadersContent",
    value: function getHeadersContent() {
      return [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Tax Code', 'woocommerce-admin'),
        key: 'tax_code',
        required: true,
        isLeftAligned: true,
        isSortable: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Rate', 'woocommerce-admin'),
        key: 'rate',
        isSortable: true,
        isNumeric: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Total Tax', 'woocommerce-admin'),
        key: 'total_tax',
        isSortable: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Order Tax', 'woocommerce-admin'),
        key: 'order_tax',
        isSortable: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Shipping Tax', 'woocommerce-admin'),
        key: 'shipping_tax',
        isSortable: true
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Orders', 'woocommerce-admin'),
        key: 'orders_count',
        required: true,
        defaultSort: true,
        isSortable: true,
        isNumeric: true
      }];
    }
  }, {
    key: "getRowsContent",
    value: function getRowsContent(taxes) {
      var _this2 = this;

      var _this$context = this.context,
          renderCurrency = _this$context.render,
          getCurrencyFormatDecimal = _this$context.formatDecimal,
          getCurrencyConfig = _this$context.getCurrencyConfig;
      return Object(lodash__WEBPACK_IMPORTED_MODULE_8__["map"])(taxes, function (tax) {
        var query = _this2.props.query;
        var orderTax = tax.order_tax,
            ordersCount = tax.orders_count,
            taxRate = tax.tax_rate,
            taxRateId = tax.tax_rate_id,
            totalTax = tax.total_tax,
            shippingTax = tax.shipping_tax;
        var taxCode = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["getTaxCode"])(tax);
        var persistedQuery = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__["getPersistedQuery"])(query);
        var ordersTaxLink = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_10__["getNewPath"])(persistedQuery, '/analytics/orders', {
          filter: 'advanced',
          tax_rate_includes: taxRateId
        });
        var taxLink = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_woocommerce_components__WEBPACK_IMPORTED_MODULE_9__["Link"], {
          href: ordersTaxLink,
          type: "wc-admin"
        }, taxCode);
        return [{
          display: taxLink,
          value: taxCode
        }, {
          display: taxRate.toFixed(2) + '%',
          value: taxRate
        }, {
          display: renderCurrency(totalTax),
          value: getCurrencyFormatDecimal(totalTax)
        }, {
          display: renderCurrency(orderTax),
          value: getCurrencyFormatDecimal(orderTax)
        }, {
          display: renderCurrency(shippingTax),
          value: getCurrencyFormatDecimal(shippingTax)
        }, {
          display: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_12__["formatValue"])(getCurrencyConfig(), 'number', ordersCount),
          value: ordersCount
        }];
      });
    }
  }, {
    key: "getSummary",
    value: function getSummary(totals) {
      var _totals$tax_codes = totals.tax_codes,
          taxesCodes = _totals$tax_codes === void 0 ? 0 : _totals$tax_codes,
          _totals$total_tax = totals.total_tax,
          totalTax = _totals$total_tax === void 0 ? 0 : _totals$total_tax,
          _totals$order_tax = totals.order_tax,
          orderTax = _totals$order_tax === void 0 ? 0 : _totals$order_tax,
          _totals$shipping_tax = totals.shipping_tax,
          shippingTax = _totals$shipping_tax === void 0 ? 0 : _totals$shipping_tax,
          _totals$orders_count = totals.orders_count,
          ordersCount = _totals$orders_count === void 0 ? 0 : _totals$orders_count;
      var _this$context2 = this.context,
          formatAmount = _this$context2.formatAmount,
          getCurrencyConfig = _this$context2.getCurrencyConfig;
      var currency = getCurrencyConfig();
      return [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["_n"])('tax code', 'tax codes', taxesCodes, 'woocommerce-admin'),
        value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_12__["formatValue"])(currency, 'number', taxesCodes)
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('total tax', 'woocommerce-admin'),
        value: formatAmount(totalTax)
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('order tax', 'woocommerce-admin'),
        value: formatAmount(orderTax)
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('shipping tax', 'woocommerce-admin'),
        value: formatAmount(shippingTax)
      }, {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["_n"])('order', 'orders', ordersCount, 'woocommerce-admin'),
        value: Object(_woocommerce_number__WEBPACK_IMPORTED_MODULE_12__["formatValue"])(currency, 'number', ordersCount)
      }];
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          advancedFilters = _this$props.advancedFilters,
          filters = _this$props.filters,
          isRequesting = _this$props.isRequesting,
          query = _this$props.query;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(analytics_components_report_table__WEBPACK_IMPORTED_MODULE_13__["default"], {
        compareBy: "taxes",
        endpoint: "taxes",
        getHeadersContent: this.getHeadersContent,
        getRowsContent: this.getRowsContent,
        getSummary: this.getSummary,
        summaryFields: ['tax_codes', 'total_tax', 'order_tax', 'shipping_tax', 'orders_count'],
        isRequesting: isRequesting,
        itemIdField: "tax_rate_id",
        query: query,
        searchBy: "taxes",
        tableQuery: {
          orderby: query.orderby || 'tax_rate_id'
        },
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Taxes', 'woocommerce-admin'),
        columnPrefsKey: "taxes_report_columns",
        filters: filters,
        advancedFilters: advancedFilters
      });
    }
  }]);

  return TaxesReportTable;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);

TaxesReportTable.contextType = lib_currency_context__WEBPACK_IMPORTED_MODULE_14__["CurrencyContext"];
/* harmony default export */ __webpack_exports__["default"] = (TaxesReportTable);

/***/ }),

/***/ "./client/analytics/report/taxes/utils.js":
/*!************************************************!*\
  !*** ./client/analytics/report/taxes/utils.js ***!
  \************************************************/
/*! exports provided: getTaxCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaxCode", function() { return getTaxCode; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

function getTaxCode(tax) {
  return [tax.country, tax.state, tax.name || Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('TAX', 'woocommerce-admin'), tax.priority].map(function (item) {
    return item.toString().toUpperCase().trim();
  }).filter(Boolean).join('-');
}

/***/ }),

/***/ "./client/lib/async-requests/index.js":
/*!********************************************!*\
  !*** ./client/lib/async-requests/index.js ***!
  \********************************************/
/*! exports provided: getRequestByIdString, getCategoryLabels, getCouponLabels, getCustomerLabels, getProductLabels, getTaxRateLabels, getVariationLabels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequestByIdString", function() { return getRequestByIdString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoryLabels", function() { return getCategoryLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCouponLabels", function() { return getCouponLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCustomerLabels", function() { return getCustomerLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductLabels", function() { return getProductLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaxRateLabels", function() { return getTaxRateLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVariationLabels", function() { return getVariationLabels; });
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @woocommerce/navigation */ "@woocommerce/navigation");
/* harmony import */ var _woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var analytics_report_taxes_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! analytics/report/taxes/utils */ "./client/analytics/report/taxes/utils.js");
/* harmony import */ var wc_api_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wc-api/constants */ "./client/wc-api/constants.js");
/**
 * External dependencies
 */



/**
 * WooCommerce dependencies
 */


/**
 * Internal dependencies
 */



/**
 * Get a function that accepts ids as they are found in url parameter and
 * returns a promise with an optional method applied to results
 *
 * @param {string|Function} path - api path string or a function of the query returning api path string
 * @param {Function} [handleData] - function applied to each iteration of data
 * @return {Function} - a function of ids returning a promise
 */

function getRequestByIdString(path) {
  var handleData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : lodash__WEBPACK_IMPORTED_MODULE_2__["identity"];
  return function () {
    var queryString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var query = arguments.length > 1 ? arguments[1] : undefined;
    var pathString = typeof path === 'function' ? path(query) : path;
    var idList = Object(_woocommerce_navigation__WEBPACK_IMPORTED_MODULE_3__["getIdsFromQuery"])(queryString);

    if (idList.length < 1) {
      return Promise.resolve([]);
    }

    var payload = {
      include: idList.join(','),
      per_page: idList.length
    };
    return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
      path: Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__["addQueryArgs"])(pathString, payload)
    }).then(function (data) {
      return data.map(handleData);
    });
  };
}
var getCategoryLabels = getRequestByIdString(wc_api_constants__WEBPACK_IMPORTED_MODULE_5__["NAMESPACE"] + '/products/categories', function (category) {
  return {
    key: category.id,
    label: category.name
  };
});
var getCouponLabels = getRequestByIdString(wc_api_constants__WEBPACK_IMPORTED_MODULE_5__["NAMESPACE"] + '/coupons', function (coupon) {
  return {
    key: coupon.id,
    label: coupon.code
  };
});
var getCustomerLabels = getRequestByIdString(wc_api_constants__WEBPACK_IMPORTED_MODULE_5__["NAMESPACE"] + '/customers', function (customer) {
  return {
    key: customer.id,
    label: customer.name
  };
});
var getProductLabels = getRequestByIdString(wc_api_constants__WEBPACK_IMPORTED_MODULE_5__["NAMESPACE"] + '/products', function (product) {
  return {
    key: product.id,
    label: product.name
  };
});
var getTaxRateLabels = getRequestByIdString(wc_api_constants__WEBPACK_IMPORTED_MODULE_5__["NAMESPACE"] + '/taxes', function (taxRate) {
  return {
    key: taxRate.id,
    label: Object(analytics_report_taxes_utils__WEBPACK_IMPORTED_MODULE_4__["getTaxCode"])(taxRate)
  };
});
var getVariationLabels = getRequestByIdString(function (query) {
  return wc_api_constants__WEBPACK_IMPORTED_MODULE_5__["NAMESPACE"] + "/products/".concat(query.products, "/variations");
}, function (variation) {
  return {
    key: variation.id,
    label: variation.attributes.reduce(function (desc, attribute, index, arr) {
      return desc + "".concat(attribute.option).concat(arr.length === index + 1 ? '' : ', ');
    }, '')
  };
});

/***/ }),

/***/ "./client/lib/get-selected-chart/index.js":
/*!************************************************!*\
  !*** ./client/lib/get-selected-chart/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getSelectedChart; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

/**
 * Takes a chart name returns the configuration for that chart from and array
 * of charts. If the chart is not found it will return the first chart.
 *
 * @param {string} chartName - the name of the chart to get configuration for
 * @param {Array} charts - list of charts for a particular report
 * @return {Object} - chart configuration object
 */

function getSelectedChart(chartName) {
  var charts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var chart = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["find"])(charts, {
    key: chartName
  });

  if (chart) {
    return chart;
  }

  return charts[0];
}

/***/ })

}]);
//# sourceMappingURL=analytics-report-taxes.d0b7eff2b08550495750.min.js.map