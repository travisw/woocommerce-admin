(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[19],{485:function(e,t,r){"use strict";r.r(t);var a=r(5),n=r.n(a),o=r(0),i=r(2),c=r(1),s=r.n(c),l=r(11),u=r(42),m=r(498),d=Object(u.applyFilters)("woocommerce_admin_variations_report_charts",[{key:"items_sold",label:Object(i.__)("Items Sold","woocommerce-admin"),order:"desc",orderby:"items_sold",type:"number"},{key:"net_revenue",label:Object(i.__)("Net Sales","woocommerce-admin"),order:"desc",orderby:"net_revenue",type:"currency"},{key:"orders_count",label:Object(i.__)("Orders","woocommerce-admin"),order:"desc",orderby:"orders_count",type:"number"}]),p=Object(u.applyFilters)("woocommerce_admin_variations_report_filters",[{label:Object(i.__)("Show","woocommerce-admin"),staticParams:["chartType","paged","per_page"],param:"filter-variations",showFilters:function(){return!0},filters:[{label:Object(i.__)("All Variations","woocommerce-admin"),chartMode:"item-comparison",value:"all"},{label:Object(i.__)("Single Variation","woocommerce-admin"),value:"select_variation",subFilters:[{component:"Search",value:"single_variation",path:["select_variation"],settings:{type:"variations",param:"variations",getLabels:m.g,labels:{placeholder:Object(i.__)("Type to search for a variation","woocommerce-admin"),button:Object(i.__)("Single Variation","woocommerce-admin")}}}]},{label:Object(i.__)("Comparison","woocommerce-admin"),chartMode:"item-comparison",value:"compare-variations",settings:{type:"variations",param:"variations",getLabels:m.g,labels:{helpText:Object(i.__)("Check at least two variations below to compare","woocommerce-admin"),placeholder:Object(i.__)("Search for variations to compare","woocommerce-admin"),title:Object(i.__)("Compare Variations","woocommerce-admin"),update:Object(i.__)("Compare","woocommerce-admin")}}},{label:Object(i.__)("Advanced Filters","woocommerce-admin"),value:"advanced"}]}]),b=Object(u.applyFilters)("woocommerce_admin_variations_report_advanced_filters",{title:Object(i._x)("Variations Match {{select /}} Filters","A sentence describing filters for Variations. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ","woocommerce-admin"),filters:{attribute:{allowMultiple:!0,labels:{add:Object(i.__)("Attribute","woocommerce-admin"),placeholder:Object(i.__)("Search attributes","woocommerce-admin"),remove:Object(i.__)("Remove attribute filter","woocommerce-admin"),rule:Object(i.__)("Select a product attribute filter match","woocommerce-admin"),title:Object(i.__)("{{title}}Attribute{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(i.__)("Select attributes","woocommerce-admin")},rules:[{value:"is",label:Object(i._x)("Is","product attribute","woocommerce-admin")},{value:"is_not",label:Object(i._x)("Is Not","product attribute","woocommerce-admin")}],input:{component:"ProductAttribute"}},category:{labels:{add:Object(i.__)("Categories","woocommerce-admin"),placeholder:Object(i.__)("Search categories","woocommerce-admin"),remove:Object(i.__)("Remove categories filter","woocommerce-admin"),rule:Object(i.__)("Select a category filter match","woocommerce-admin"),title:Object(i.__)("{{title}}Category{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(i.__)("Select categories","woocommerce-admin")},rules:[{value:"includes",label:Object(i._x)("Includes","categories","woocommerce-admin")},{value:"excludes",label:Object(i._x)("Excludes","categories","woocommerce-admin")}],input:{component:"Search",type:"categories",getLabels:m.a}},product:{labels:{add:Object(i.__)("Products","woocommerce-admin"),placeholder:Object(i.__)("Search products","woocommerce-admin"),remove:Object(i.__)("Remove products filter","woocommerce-admin"),rule:Object(i.__)("Select a product filter match","woocommerce-admin"),title:Object(i.__)("{{title}}Product{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(i.__)("Select products","woocommerce-admin")},rules:[{value:"includes",label:Object(i._x)("Includes","products","woocommerce-admin")},{value:"excludes",label:Object(i._x)("Excludes","products","woocommerce-admin")}],input:{component:"Search",type:"variableProducts",getLabels:m.d}}}}),f=r(501),y=r(500),v=r(497),_=r(502),g=r(521),h=r(503),O=r(74);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var w=function(e){var t=function(e){var t=e.query,r="compare-variations"===t["filter-variations"]&&t.variations&&t.variations.split(",").length>1;return{compareObject:"variations",itemsLabel:Object(i.__)("%d variations","woocommerce-admin"),mode:r?"item-comparison":"time-comparison"}}(e),r=t.itemsLabel,a=t.mode,c=e.path,s=e.query,l=e.isError,u=e.isRequesting,m=e.addCesSurveyForAnalytics;if(l)return Object(o.createElement)(v.a,{isError:!0});var O=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},s);return"item-comparison"===a&&(O.segmentby="variation"),p[0].filters.find((function(e){return"compare-variations"===e.value})).settings.onClick=m,Object(o.createElement)(o.Fragment,null,Object(o.createElement)(h.a,{query:s,path:c,filters:p,advancedFilters:b,report:"variations"}),Object(o.createElement)(_.a,{mode:a,charts:d,endpoint:"variations",isRequesting:u,query:O,selectedChart:Object(f.a)(s.chart,d),filters:p,advancedFilters:b}),Object(o.createElement)(y.a,{charts:d,mode:a,filters:p,advancedFilters:b,endpoint:"variations",isRequesting:u,itemsLabel:r,path:c,query:O,selectedChart:Object(f.a)(O.chart,d)}),Object(o.createElement)(g.a,{isRequesting:u,query:s,filters:p,advancedFilters:b}))};w.propTypes={path:s.a.string.isRequired,query:s.a.object.isRequired};t.default=Object(l.withDispatch)((function(e){return{addCesSurveyForAnalytics:e(O.c).addCesSurveyForAnalytics}}))(w)},498:function(e,t,r){"use strict";r.d(t,"e",(function(){return m})),r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return p})),r.d(t,"c",(function(){return b})),r.d(t,"d",(function(){return f})),r.d(t,"f",(function(){return y})),r.d(t,"h",(function(){return v})),r.d(t,"g",(function(){return _}));var a=r(23),n=r(26),o=r.n(n),i=r(3),c=r(21),s=r(22),l=r(25),u=r(499);function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.identity;return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,i="function"==typeof e?e(n):e,s=Object(c.getIdsFromQuery)(r);if(s.length<1)return Promise.resolve([]);var l={include:s.join(","),per_page:s.length};return o()({path:Object(a.addQueryArgs)(i,l)}).then((function(e){return e.map(t)}))}}m(s.NAMESPACE+"/products/attributes",(function(e){return{key:e.id,label:e.name}}));var d=m(s.NAMESPACE+"/products/categories",(function(e){return{key:e.id,label:e.name}})),p=m(s.NAMESPACE+"/coupons",(function(e){return{key:e.id,label:e.code}})),b=m(s.NAMESPACE+"/customers",(function(e){return{key:e.id,label:e.name}})),f=m(s.NAMESPACE+"/products",(function(e){return{key:e.id,label:e.name}})),y=m(s.NAMESPACE+"/taxes",(function(e){return{key:e.id,label:Object(u.a)(e)}}));function v(e){var t=e.attributes,r=e.name,a=Object(l.g)("variationTitleAttributesSeparator"," - ");if(r.indexOf(a)>-1)return r;var n=t.map((function(e){return e.option})).join(", ");return n?r+a+n:r}var _=m((function(e){var t=e.products;return t?s.NAMESPACE+"/products/".concat(t,"/variations"):s.NAMESPACE+"/variations"}),(function(e){return{key:e.id,label:v(e)}}))},499:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(2);function n(e){return[e.country,e.state,e.name||Object(a.__)("TAX","woocommerce-admin"),e.priority].map((function(e){return e.toString().toUpperCase().trim()})).filter(Boolean).join("-")}},500:function(e,t,r){"use strict";var a=r(5),n=r.n(a),o=r(12),i=r.n(o),c=r(13),s=r.n(c),l=r(14),u=r.n(l),m=r(15),d=r.n(m),p=r(7),b=r.n(p),f=r(0),y=r(2),v=r(20),_=r(73),g=r(11),h=r(3),O=r(1),j=r.n(O),w=r(46),S=r(22),R=r(29),C=r(496),k=r(497),q=r(21);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=b()(e);if(t){var n=b()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return d()(this,r)}}var F=function(e){u()(r,e);var t=P(r);function r(){return i()(this,r),t.apply(this,arguments)}return s()(r,[{key:"shouldComponentUpdate",value:function(e){return e.isRequesting!==this.props.isRequesting||e.primaryData.isRequesting!==this.props.primaryData.isRequesting||e.secondaryData.isRequesting!==this.props.secondaryData.isRequesting||!Object(h.isEqual)(e.query,this.props.query)}},{key:"getItemChartData",value:function(){var e=this.props,t=e.primaryData,r=e.selectedChart;return t.data.intervals.map((function(e){var t={};return e.subtotals.segments.forEach((function(e){if(e.segment_label){var a=t[e.segment_label]?e.segment_label+" (#"+e.segment_id+")":e.segment_label;t[e.segment_id]={label:a,value:e.subtotals[r.key]||0}}})),E({date:Object(_.format)("Y-m-d\\TH:i:s",e.date_start)},t)}))}},{key:"getTimeChartData",value:function(){var e=this.props,t=e.query,r=e.primaryData,a=e.secondaryData,n=e.selectedChart,o=e.defaultDateRange,i=Object(R.getIntervalForQuery)(t),c=Object(R.getCurrentDates)(t,o),s=c.primary,l=c.secondary;return r.data.intervals.map((function(e,r){var o=Object(R.getPreviousDate)(e.date_start,s.after,l.after,t.compare,i),c=a.data.intervals[r];return{date:Object(_.format)("Y-m-d\\TH:i:s",e.date_start),primary:{label:"".concat(s.label," (").concat(s.range,")"),labelDate:e.date_start,value:e.subtotals[n.key]||0},secondary:{label:"".concat(l.label," (").concat(l.range,")"),labelDate:o.format("YYYY-MM-DD HH:mm:ss"),value:c&&c.subtotals[n.key]||0}}}))}},{key:"getTimeChartTotals",value:function(){var e=this.props,t=e.primaryData,r=e.secondaryData,a=e.selectedChart;return{primary:Object(h.get)(t,["data","totals",a.key],null),secondary:Object(h.get)(r,["data","totals",a.key],null)}}},{key:"renderChart",value:function(e,t,r,a){var n=this.props,o=n.emptySearchResults,i=n.filterParam,c=n.interactiveLegend,s=n.itemsLabel,l=n.legendPosition,u=n.path,m=n.query,d=n.selectedChart,p=n.showHeaderControls,b=n.primaryData,v=Object(R.getIntervalForQuery)(m),_=Object(R.getAllowedIntervalsForQuery)(m),g=Object(R.getDateFormatsForInterval)(v,b.data.intervals.length),h=o?Object(y.__)("No data for the current search","woocommerce-admin"):Object(y.__)("No data for the selected date range","woocommerce-admin"),O=this.context,j=O.formatAmount,C=O.getCurrencyConfig;return Object(f.createElement)(w.Chart,{allowedIntervals:_,data:r,dateParser:"%Y-%m-%dT%H:%M:%S",emptyMessage:h,filterParam:i,interactiveLegend:c,interval:v,isRequesting:t,itemsLabel:s,legendPosition:l,legendTotals:a,mode:e,path:u,query:m,screenReaderFormat:g.screenReaderFormat,showHeaderControls:p,title:d.label,tooltipLabelFormat:g.tooltipLabelFormat,tooltipTitle:"time-comparison"===e&&d.label||null,tooltipValueFormat:Object(S.getTooltipValueFormat)(d.type,j),chartType:Object(R.getChartTypeForQuery)(m),valueType:d.type,xFormat:g.xFormat,x2Format:g.x2Format,currency:C()})}},{key:"renderItemComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData;if(r.isError)return Object(f.createElement)(k.a,{isError:!0});var a=t||r.isRequesting,n=this.getItemChartData();return this.renderChart("item-comparison",a,n)}},{key:"renderTimeComparison",value:function(){var e=this.props,t=e.isRequesting,r=e.primaryData,a=e.secondaryData;if(!r||r.isError||a.isError)return Object(f.createElement)(k.a,{isError:!0});var n=t||r.isRequesting||a.isRequesting,o=this.getTimeChartData(),i=this.getTimeChartTotals();return this.renderChart("time-comparison",n,o,i)}},{key:"render",value:function(){return"item-comparison"===this.props.mode?this.renderItemComparison():this.renderTimeComparison()}}]),r}(f.Component);F.contextType=C.a,F.propTypes={filters:j.a.array,isRequesting:j.a.bool,itemsLabel:j.a.string,limitProperties:j.a.array,mode:j.a.string,path:j.a.string.isRequired,primaryData:j.a.object,query:j.a.object.isRequired,secondaryData:j.a.object,selectedChart:j.a.shape({key:j.a.string.isRequired,label:j.a.string.isRequired,order:j.a.oneOf(["asc","desc"]),orderby:j.a.string,type:j.a.oneOf(["average","number","currency"]).isRequired}).isRequired},F.defaultProps={isRequesting:!1,primaryData:{data:{intervals:[]},isError:!1,isRequesting:!1},secondaryData:{data:{intervals:[]},isError:!1,isRequesting:!1}};t.a=Object(v.compose)(Object(g.withSelect)((function(e,t){var r=t.charts,a=t.endpoint,n=t.filters,o=t.isRequesting,i=t.limitProperties,c=t.query,s=t.advancedFilters,l=i||[a],u=function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||0===t.length)return null;var n=t.slice(0),o=n.pop();if(o.showFilters(r,a)){var i=Object(q.flattenFilters)(o.filters),c=r[o.param]||o.defaultValue||"all";return Object(h.find)(i,{value:c})}return e(n,r,a)}(n,c),m=Object(h.get)(u,["settings","param"]),d=t.mode||function(e,t){if(e&&t){var r=Object(h.get)(e,["settings","param"]);if(!r||Object.keys(t).includes(r))return Object(h.get)(e,["chartMode"])}return null}(u,c)||"time-comparison",p=e(S.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range,b={mode:d,filterParam:m,defaultDateRange:p};if(o)return b;var f=l.some((function(e){return c[e]&&c[e].length}));if(c.search&&!f)return E(E({},b),{},{emptySearchResults:!0});var y=r&&r.map((function(e){return e.key})),v=Object(S.getReportChartData)({endpoint:a,dataType:"primary",query:c,select:e,limitBy:l,filters:n,advancedFilters:s,defaultDateRange:p,fields:y});if("item-comparison"===d)return E(E({},b),{},{primaryData:v});var _=Object(S.getReportChartData)({endpoint:a,dataType:"secondary",query:c,select:e,limitBy:l,filters:n,advancedFilters:s,defaultDateRange:p,fields:y});return E(E({},b),{},{primaryData:v,secondaryData:_})})))(F)},501:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(3);function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object(a.find)(t,{key:e});return r||t[0]}},502:function(e,t,r){"use strict";var a=r(12),n=r.n(a),o=r(13),i=r.n(o),c=r(14),s=r.n(c),l=r(15),u=r.n(l),m=r(7),d=r.n(m),p=r(0),b=r(2),f=r(20),y=r(11),v=r(1),_=r.n(v),g=r(21),h=r(46),O=r(142),j=r(22),w=r(29),S=r(27),R=r(497),C=r(496);function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=d()(e);if(t){var n=d()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return u()(this,r)}}var q=function(e){s()(r,e);var t=k(r);function r(){return n()(this,r),t.apply(this,arguments)}return i()(r,[{key:"formatVal",value:function(e,t){var r=this.context,a=r.formatAmount,n=r.getCurrencyConfig;return"currency"===t?a(e):Object(O.formatValue)(n(),t,e)}},{key:"getValues",value:function(e,t){var r=this.props,a=r.emptySearchResults,n=r.summaryData.totals,o=n.primary?n.primary[e]:0,i=n.secondary?n.secondary[e]:0,c=a?0:o,s=a?0:i;return{delta:Object(O.calculateDelta)(c,s),prevValue:this.formatVal(s,t),value:this.formatVal(c,t)}}},{key:"render",value:function(){var e=this,t=this.props,r=t.charts,a=t.query,n=t.selectedChart,o=t.summaryData,i=t.endpoint,c=t.report,s=t.defaultDateRange,l=o.isError,u=o.isRequesting;if(l)return Object(p.createElement)(R.a,{isError:!0});if(u)return Object(p.createElement)(h.SummaryListPlaceholder,{numberOfItems:r.length});var m=Object(w.getDateParamsFromQuery)(a,s).compare;return Object(p.createElement)(h.SummaryList,null,(function(t){var a=t.onToggle;return r.map((function(t){var r=t.key,o=t.order,s=t.orderby,l=t.label,u=t.type,d={chart:r};s&&(d.orderby=s),o&&(d.order=o);var f=Object(g.getNewPath)(d),y=n.key===r,v=e.getValues(r,u),_=v.delta,O=v.prevValue,j=v.value;return Object(p.createElement)(h.SummaryNumber,{key:r,delta:_,href:f,label:l,prevLabel:"previous_period"===m?Object(b.__)("Previous Period:","woocommerce-admin"):Object(b.__)("Previous Year:","woocommerce-admin"),prevValue:O,selected:y,value:j,onLinkClickCallback:function(){a&&a(),Object(S.recordEvent)("analytics_chart_tab_click",{report:c||i,key:r})}})}))}))}}]),r}(p.Component);q.propTypes={charts:_.a.array.isRequired,endpoint:_.a.string.isRequired,limitProperties:_.a.array,query:_.a.object.isRequired,selectedChart:_.a.shape({key:_.a.string.isRequired,label:_.a.string.isRequired,order:_.a.oneOf(["asc","desc"]),orderby:_.a.string,type:_.a.oneOf(["average","number","currency"]).isRequired}).isRequired,summaryData:_.a.object,report:_.a.string},q.defaultProps={summaryData:{totals:{primary:{},secondary:{}},isError:!1}},q.contextType=C.a,t.a=Object(f.compose)(Object(y.withSelect)((function(e,t){var r=t.charts,a=t.endpoint,n=t.limitProperties,o=t.query,i=t.filters,c=t.advancedFilters,s=n||[a],l=s.some((function(e){return o[e]&&o[e].length}));if(o.search&&!l)return{emptySearchResults:!0};var u=r&&r.map((function(e){return e.key})),m=e(j.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range;return{summaryData:Object(j.getSummaryNumbers)({endpoint:a,query:o,select:e,limitBy:s,filters:i,advancedFilters:c,defaultDateRange:m,fields:u}),defaultDateRange:m}})))(q)},511:function(e,t,r){"use strict";function a(e,t,r){return!!t&&(e&&t<=r==="instock")}r.d(t,"a",(function(){return a}))},521:function(e,t,r){"use strict";var a=r(12),n=r.n(a),o=r(13),i=r.n(o),c=r(9),s=r.n(c),l=r(14),u=r.n(l),m=r(15),d=r.n(m),p=r(7),b=r.n(p),f=r(0),y=r(2),v=r(3),_=r(46),g=r(21),h=r(142),O=r(25),j=r(504),w=r(511),S=r(496),R=r(498);function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=b()(e);if(t){var n=b()(this).constructor;r=Reflect.construct(a,arguments,n)}else r=a.apply(this,arguments);return d()(this,r)}}var k=Object(O.g)("manageStock","no"),q=Object(O.g)("stockStatuses",{}),D=function(e){return Object(R.h)(e.extended_info||{})},E=function(e){u()(r,e);var t=C(r);function r(){var e;return n()(this,r),(e=t.call(this)).getHeadersContent=e.getHeadersContent.bind(s()(e)),e.getRowsContent=e.getRowsContent.bind(s()(e)),e.getSummary=e.getSummary.bind(s()(e)),e}return i()(r,[{key:"getHeadersContent",value:function(){return[{label:Object(y.__)("Product / Variation Title","woocommerce-admin"),key:"name",required:!0,isLeftAligned:!0},{label:Object(y.__)("SKU","woocommerce-admin"),key:"sku",hiddenByDefault:!0,isSortable:!0},{label:Object(y.__)("Items Sold","woocommerce-admin"),key:"items_sold",required:!0,defaultSort:!0,isSortable:!0,isNumeric:!0},{label:Object(y.__)("Net Sales","woocommerce-admin"),screenReaderLabel:Object(y.__)("Net Sales","woocommerce-admin"),key:"net_revenue",required:!0,isSortable:!0,isNumeric:!0},{label:Object(y.__)("Orders","woocommerce-admin"),key:"orders_count",isSortable:!0,isNumeric:!0},"yes"===k?{label:Object(y.__)("Status","woocommerce-admin"),key:"stock_status"}:null,"yes"===k?{label:Object(y.__)("Stock","woocommerce-admin"),key:"stock",isNumeric:!0}:null].filter(Boolean)}},{key:"getRowsContent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=this.props.query,r=Object(g.getPersistedQuery)(t),a=this.context,n=a.formatAmount,o=a.formatDecimal,i=a.getCurrencyConfig;return Object(v.map)(e,(function(e){var t=e.items_sold,a=e.net_revenue,c=e.orders_count,s=e.product_id,l=e.variation_id,u=e.extended_info||{},m=u.stock_status,d=u.stock_quantity,p=u.low_stock_amount,b=u.sku,v=D(e),j=Object(g.getNewPath)(r,"/analytics/orders",{filter:"advanced",variation_includes:l}),S=Object(O.f)("post.php?post=".concat(s,"&action=edit"));return[{display:Object(f.createElement)(_.Link,{href:S,type:"wp-admin"},v),value:v},{display:b,value:b},{display:Object(h.formatValue)(i(),"number",t),value:t},{display:n(a),value:o(a)},{display:Object(f.createElement)(_.Link,{href:j,type:"wc-admin"},c),value:c},"yes"===k?{display:Object(w.a)(m,d,p)?Object(f.createElement)(_.Link,{href:S,type:"wp-admin"},Object(y._x)("Low","Indication of a low quantity","woocommerce-admin")):q[m],value:q[m]}:null,"yes"===k?{display:d,value:d}:null].filter(Boolean)}))}},{key:"getSummary",value:function(e){var t=e.variations_count,r=void 0===t?0:t,a=e.items_sold,n=void 0===a?0:a,o=e.net_revenue,i=void 0===o?0:o,c=e.orders_count,s=void 0===c?0:c,l=this.context,u=l.formatAmount,m=(0,l.getCurrencyConfig)();return[{label:Object(y._n)("variation sold","variations sold",r,"woocommerce-admin"),value:Object(h.formatValue)(m,"number",r)},{label:Object(y._n)("item sold","items sold",n,"woocommerce-admin"),value:Object(h.formatValue)(m,"number",n)},{label:Object(y.__)("net sales","woocommerce-admin"),value:u(i)},{label:Object(y._n)("orders","orders",s,"woocommerce-admin"),value:Object(h.formatValue)(m,"number",s)}]}},{key:"render",value:function(){var e=this.props,t=e.advancedFilters,r=e.baseSearchQuery,a=e.filters,n=e.isRequesting,o=e.query,i={helpText:Object(y.__)("Check at least two variations below to compare","woocommerce-admin"),placeholder:Object(y.__)("Search by variation name or SKU","woocommerce-admin")};return Object(f.createElement)(j.a,{baseSearchQuery:r,compareBy:"variations",compareParam:"filter-variations",endpoint:"variations",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,isRequesting:n,itemIdField:"variation_id",labels:i,query:o,getSummary:this.getSummary,summaryFields:["variations_count","items_sold","net_revenue","orders_count"],tableQuery:{orderby:o.orderby||"items_sold",order:o.order||"desc",extended_info:!0,products:o.products,variations:o.variations},title:Object(y.__)("Variations","woocommerce-admin"),columnPrefsKey:"variations_report_columns",filters:a,advancedFilters:t})}}]),r}(f.Component);E.contextType=S.a,t.a=E}}]);