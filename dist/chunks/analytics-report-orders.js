(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[14],{486:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return x}));var n=r(12),a=r.n(n),o=r(13),c=r.n(o),u=r(14),i=r.n(u),s=r(15),l=r.n(s),m=r(7),d=r.n(m),f=r(0),b=r(1),p=r.n(b),y=r(531),_=r(501),v=r(9),h=r.n(v),O=r(2),j=r(3),g=r(46),w=r(142),R=r(25),k=r(21),q=r(29),S=r(504),C=r(496);r(575);function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d()(e);if(t){var a=d()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return l()(this,r)}}var D=function(e){i()(r,e);var t=E(r);function r(){var e;return a()(this,r),(e=t.call(this)).getHeadersContent=e.getHeadersContent.bind(h()(e)),e.getRowsContent=e.getRowsContent.bind(h()(e)),e.getSummary=e.getSummary.bind(h()(e)),e}return c()(r,[{key:"getHeadersContent",value:function(){return[{label:Object(O.__)("Date","woocommerce-admin"),key:"date",required:!0,defaultSort:!0,isLeftAligned:!0,isSortable:!0},{label:Object(O.__)("Order #","woocommerce-admin"),screenReaderLabel:Object(O.__)("Order Number","woocommerce-admin"),key:"order_number",required:!0},{label:Object(O.__)("Status","woocommerce-admin"),key:"status",required:!1,isSortable:!1},{label:Object(O.__)("Customer","woocommerce-admin"),key:"customer_id",required:!1,isSortable:!1},{label:Object(O.__)("Customer Type","woocommerce-admin"),key:"customer_type",required:!1,isSortable:!1},{label:Object(O.__)("Product(s)","woocommerce-admin"),screenReaderLabel:Object(O.__)("Products","woocommerce-admin"),key:"products",required:!1,isSortable:!1},{label:Object(O.__)("Items Sold","woocommerce-admin"),key:"num_items_sold",required:!1,isSortable:!0,isNumeric:!0},{label:Object(O.__)("Coupon(s)","woocommerce-admin"),screenReaderLabel:Object(O.__)("Coupons","woocommerce-admin"),key:"coupons",required:!1,isSortable:!1},{label:Object(O.__)("Net Sales","woocommerce-admin"),screenReaderLabel:Object(O.__)("Net Sales","woocommerce-admin"),key:"net_total",required:!0,isSortable:!0,isNumeric:!0}]}},{key:"getCustomerName",value:function(e){var t=e||{},r=t.first_name,n=t.last_name;return r||n?[r,n].join(" "):""}},{key:"getRowsContent",value:function(e){var t=this,r=this.props.query,n=Object(k.getPersistedQuery)(r),a=Object(R.g)("dateFormat",q.defaultTableDateFormat),o=this.context,c=o.render,u=o.getCurrencyConfig;return Object(j.map)(e,(function(e){var r,o=e.currency,i=e.date_created,s=e.net_total,l=e.num_items_sold,m=e.order_id,d=e.order_number,b=e.parent_id,p=e.status,y=e.customer_type,_=e.extended_info||{},v=_.coupons,h=_.customer,j=_.products.sort((function(e,t){return t.quantity-e.quantity})).map((function(e){return{label:e.name,quantity:e.quantity,href:Object(k.getNewPath)(n,"/analytics/products",{filter:"single_product",products:e.id})}})),q=v.map((function(e){return{label:e.code,href:Object(k.getNewPath)(n,"/analytics/coupons",{filter:"single_coupon",coupons:e.id})}}));return[{display:Object(f.createElement)(g.Date,{date:i,visibleFormat:a}),value:i},{display:Object(f.createElement)(g.Link,{href:"post.php?post="+(b||m)+"&action=edit"+(b?"#order_refunds":""),type:"wp-admin"},d),value:d},{display:Object(f.createElement)(g.OrderStatus,{className:"woocommerce-orders-table__status",order:{status:p},orderStatusMap:Object(R.g)("orderStatuses",{})}),value:p},{display:t.getCustomerName(h),value:t.getCustomerName(h)},{display:(r=y,r.charAt(0).toUpperCase()+r.slice(1)),value:y},{display:t.renderList(j.length?[j[0]]:[],j.map((function(e){return{label:Object(O.sprintf)(Object(O.__)("%s× %s","woocommerce-admin"),e.quantity,e.label),href:e.href}}))),value:j.map((function(e){var t=e.quantity,r=e.label;return Object(O.sprintf)(Object(O.__)("%s× %s","woocommerce-admin"),t,r)})).join(", ")},{display:Object(w.formatValue)(u(),"number",l),value:l},{display:t.renderList(q.length?[q[0]]:[],q),value:q.map((function(e){return e.label})).join(", ")},{display:c(s,o),value:s}]}))}},{key:"getSummary",value:function(e){var t=e.orders_count,r=void 0===t?0:t,n=e.total_customers,a=void 0===n?0:n,o=e.products,c=void 0===o?0:o,u=e.num_items_sold,i=void 0===u?0:u,s=e.coupons_count,l=void 0===s?0:s,m=e.net_revenue,d=void 0===m?0:m,f=this.context,b=f.formatAmount,p=(0,f.getCurrencyConfig)();return[{label:Object(O._n)("order","orders",r,"woocommerce-admin"),value:Object(w.formatValue)(p,"number",r)},{label:Object(O._n)(" customer"," customers",a,"woocommerce-admin"),value:Object(w.formatValue)(p,"number",a)},{label:Object(O._n)("product","products",c,"woocommerce-admin"),value:Object(w.formatValue)(p,"number",c)},{label:Object(O._n)("item sold","items sold",i,"woocommerce-admin"),value:Object(w.formatValue)(p,"number",i)},{label:Object(O._n)("coupon","coupons",l,"woocommerce-admin"),value:Object(w.formatValue)(p,"number",l)},{label:Object(O.__)("net sales","woocommerce-admin"),value:b(d)}]}},{key:"renderLinks",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e,t){return Object(f.createElement)(g.Link,{href:e.href,key:t,type:"wc-admin"},e.label)}))}},{key:"renderList",value:function(e,t){return Object(f.createElement)(f.Fragment,null,this.renderLinks(e),t.length>1&&Object(f.createElement)(g.ViewMoreList,{items:this.renderLinks(t)}))}},{key:"render",value:function(){var e=this.props,t=e.query,r=e.filters,n=e.advancedFilters;return Object(f.createElement)(S.a,{endpoint:"orders",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["orders_count","total_customers","products","num_items_sold","coupons_count","net_revenue"],query:t,tableQuery:{extended_info:!0},title:Object(O.__)("Orders","woocommerce-admin"),columnPrefsKey:"orders_report_columns",filters:r,advancedFilters:n})}}]),r}(f.Component);D.contextType=C.a;var L=D,P=r(500),N=r(502),V=r(503);function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d()(e);if(t){var a=d()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return l()(this,r)}}var x=function(e){i()(r,e);var t=F(r);function r(){return a()(this,r),t.apply(this,arguments)}return c()(r,[{key:"render",value:function(){var e=this.props,t=e.path,r=e.query;return Object(f.createElement)(f.Fragment,null,Object(f.createElement)(V.a,{query:r,path:t,filters:y.c,advancedFilters:y.a,report:"orders"}),Object(f.createElement)(N.a,{charts:y.b,endpoint:"orders",query:r,selectedChart:Object(_.a)(r.chart,y.b),filters:y.c,advancedFilters:y.a}),Object(f.createElement)(P.a,{charts:y.b,endpoint:"orders",path:t,query:r,selectedChart:Object(_.a)(r.chart,y.b),filters:y.c,advancedFilters:y.a}),Object(f.createElement)(L,{query:r,filters:y.c,advancedFilters:y.a}))}}]),r}(f.Component);x.propTypes={path:p.a.string.isRequired,query:p.a.object.isRequired}},501:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(3);function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object(n.find)(t,{key:e});return r||t[0]}},502:function(e,t,r){"use strict";var n=r(12),a=r.n(n),o=r(13),c=r.n(o),u=r(14),i=r.n(u),s=r(15),l=r.n(s),m=r(7),d=r.n(m),f=r(0),b=r(2),p=r(20),y=r(11),_=r(1),v=r.n(_),h=r(21),O=r(46),j=r(142),g=r(22),w=r(29),R=r(27),k=r(497),q=r(496);function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=d()(e);if(t){var a=d()(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return l()(this,r)}}var C=function(e){i()(r,e);var t=S(r);function r(){return a()(this,r),t.apply(this,arguments)}return c()(r,[{key:"formatVal",value:function(e,t){var r=this.context,n=r.formatAmount,a=r.getCurrencyConfig;return"currency"===t?n(e):Object(j.formatValue)(a(),t,e)}},{key:"getValues",value:function(e,t){var r=this.props,n=r.emptySearchResults,a=r.summaryData.totals,o=a.primary?a.primary[e]:0,c=a.secondary?a.secondary[e]:0,u=n?0:o,i=n?0:c;return{delta:Object(j.calculateDelta)(u,i),prevValue:this.formatVal(i,t),value:this.formatVal(u,t)}}},{key:"render",value:function(){var e=this,t=this.props,r=t.charts,n=t.query,a=t.selectedChart,o=t.summaryData,c=t.endpoint,u=t.report,i=t.defaultDateRange,s=o.isError,l=o.isRequesting;if(s)return Object(f.createElement)(k.a,{isError:!0});if(l)return Object(f.createElement)(O.SummaryListPlaceholder,{numberOfItems:r.length});var m=Object(w.getDateParamsFromQuery)(n,i).compare;return Object(f.createElement)(O.SummaryList,null,(function(t){var n=t.onToggle;return r.map((function(t){var r=t.key,o=t.order,i=t.orderby,s=t.label,l=t.type,d={chart:r};i&&(d.orderby=i),o&&(d.order=o);var p=Object(h.getNewPath)(d),y=a.key===r,_=e.getValues(r,l),v=_.delta,j=_.prevValue,g=_.value;return Object(f.createElement)(O.SummaryNumber,{key:r,delta:v,href:p,label:s,prevLabel:"previous_period"===m?Object(b.__)("Previous Period:","woocommerce-admin"):Object(b.__)("Previous Year:","woocommerce-admin"),prevValue:j,selected:y,value:g,onLinkClickCallback:function(){n&&n(),Object(R.recordEvent)("analytics_chart_tab_click",{report:u||c,key:r})}})}))}))}}]),r}(f.Component);C.propTypes={charts:v.a.array.isRequired,endpoint:v.a.string.isRequired,limitProperties:v.a.array,query:v.a.object.isRequired,selectedChart:v.a.shape({key:v.a.string.isRequired,label:v.a.string.isRequired,order:v.a.oneOf(["asc","desc"]),orderby:v.a.string,type:v.a.oneOf(["average","number","currency"]).isRequired}).isRequired,summaryData:v.a.object,report:v.a.string},C.defaultProps={summaryData:{totals:{primary:{},secondary:{}},isError:!1}},C.contextType=q.a,t.a=Object(p.compose)(Object(y.withSelect)((function(e,t){var r=t.charts,n=t.endpoint,a=t.limitProperties,o=t.query,c=t.filters,u=t.advancedFilters,i=a||[n],s=i.some((function(e){return o[e]&&o[e].length}));if(o.search&&!s)return{emptySearchResults:!0};var l=r&&r.map((function(e){return e.key})),m=e(g.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings").woocommerce_default_date_range;return{summaryData:Object(g.getSummaryNumbers)({endpoint:n,query:o,select:e,limitBy:i,filters:c,advancedFilters:u,defaultDateRange:m,fields:l}),defaultDateRange:m}})))(C)},575:function(e,t,r){}}]);