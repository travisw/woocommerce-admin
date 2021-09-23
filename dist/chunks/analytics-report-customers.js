(window.__wcAdmin_webpackJsonp=window.__wcAdmin_webpackJsonp||[]).push([[9],{477:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return C}));var a=r(0),o=r(1),c=r.n(o),n=r(2),l=r(28),i=r(30),s=r(13),m=r(11),d=r(499);const{countries:u}=Object(s.f)("dataEndpoints",{countries:{}}),b=Object(i.applyFilters)("woocommerce_admin_customers_report_filters",[{label:Object(n.__)("Show","woocommerce-admin"),staticParams:["paged","per_page"],param:"filter",showFilters:()=>!0,filters:[{label:Object(n.__)("All Customers","woocommerce-admin"),value:"all"},{label:Object(n.__)("Single Customer","woocommerce-admin"),value:"select_customer",chartMode:"item-comparison",subFilters:[{component:"Search",value:"single_customer",chartMode:"item-comparison",path:["select_customer"],settings:{type:"customers",param:"customers",getLabels:d.c,labels:{placeholder:Object(n.__)("Type to search for a customer","woocommerce-admin"),button:Object(n.__)("Single Customer","woocommerce-admin")}}}]},{label:Object(n.__)("Advanced filters","woocommerce-admin"),value:"advanced"}]}]),_=Object(i.applyFilters)("woocommerce_admin_customers_report_advanced_filters",{title:Object(n._x)("Customers match {{select /}} filters","A sentence describing filters for Customers. See screen shot for context: https://cloudup.com/cCsm3GeXJbE","woocommerce-admin"),filters:{name:{labels:{add:Object(n.__)("Name","woocommerce-admin"),placeholder:Object(n.__)("Search","woocommerce-admin"),remove:Object(n.__)("Remove customer name filter","woocommerce-admin"),rule:Object(n.__)("Select a customer name filter match","woocommerce-admin"),title:Object(n.__)("{{title}}Name{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(n.__)("Select customer name","woocommerce-admin")},rules:[{value:"includes",label:Object(n._x)("Includes","customer names","woocommerce-admin")},{value:"excludes",label:Object(n._x)("Excludes","customer names","woocommerce-admin")}],input:{component:"Search",type:"customers",getLabels:Object(d.e)(m.NAMESPACE+"/customers",e=>({id:e.id,label:e.name}))}},country:{labels:{add:Object(n.__)("Country / Region","woocommerce-admin"),placeholder:Object(n.__)("Search","woocommerce-admin"),remove:Object(n.__)("Remove country / region filter","woocommerce-admin"),rule:Object(n.__)("Select a country / region filter match","woocommerce-admin"),title:Object(n.__)("{{title}}Country / Region{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(n.__)("Select country / region","woocommerce-admin")},rules:[{value:"includes",label:Object(n._x)("Includes","countries","woocommerce-admin")},{value:"excludes",label:Object(n._x)("Excludes","countries","woocommerce-admin")}],input:{component:"Search",type:"countries",getLabels:async e=>{const t=u.map(e=>({key:e.code,label:Object(l.decodeEntities)(e.name)})),r=e.split(",");return await t.filter(e=>r.includes(e.key))}}},username:{labels:{add:Object(n.__)("Username","woocommerce-admin"),placeholder:Object(n.__)("Search customer username","woocommerce-admin"),remove:Object(n.__)("Remove customer username filter","woocommerce-admin"),rule:Object(n.__)("Select a customer username filter match","woocommerce-admin"),title:Object(n.__)("{{title}}Username{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(n.__)("Select customer username","woocommerce-admin")},rules:[{value:"includes",label:Object(n._x)("Includes","customer usernames","woocommerce-admin")},{value:"excludes",label:Object(n._x)("Excludes","customer usernames","woocommerce-admin")}],input:{component:"Search",type:"usernames",getLabels:d.c}},email:{labels:{add:Object(n.__)("Email","woocommerce-admin"),placeholder:Object(n.__)("Search customer email","woocommerce-admin"),remove:Object(n.__)("Remove customer email filter","woocommerce-admin"),rule:Object(n.__)("Select a customer email filter match","woocommerce-admin"),title:Object(n.__)("{{title}}Email{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(n.__)("Select customer email","woocommerce-admin")},rules:[{value:"includes",label:Object(n._x)("Includes","customer emails","woocommerce-admin")},{value:"excludes",label:Object(n._x)("Excludes","customer emails","woocommerce-admin")}],input:{component:"Search",type:"emails",getLabels:Object(d.e)(m.NAMESPACE+"/customers",e=>({id:e.id,label:e.email}))}},orders_count:{labels:{add:Object(n.__)("No. of Orders","woocommerce-admin"),remove:Object(n.__)("Remove order filter","woocommerce-admin"),rule:Object(n.__)("Select an order count filter match","woocommerce-admin"),title:Object(n.__)("{{title}}No. of Orders{{/title}} {{rule /}} {{filter /}}","woocommerce-admin")},rules:[{value:"max",label:Object(n._x)("Less Than","number of orders","woocommerce-admin")},{value:"min",label:Object(n._x)("More Than","number of orders","woocommerce-admin")},{value:"between",label:Object(n._x)("Between","number of orders","woocommerce-admin")}],input:{component:"Number"}},total_spend:{labels:{add:Object(n.__)("Total Spend","woocommerce-admin"),remove:Object(n.__)("Remove total spend filter","woocommerce-admin"),rule:Object(n.__)("Select a total spend filter match","woocommerce-admin"),title:Object(n.__)("{{title}}Total Spend{{/title}} {{rule /}} {{filter /}}","woocommerce-admin")},rules:[{value:"max",label:Object(n._x)("Less Than","total spend by customer","woocommerce-admin")},{value:"min",label:Object(n._x)("More Than","total spend by customer","woocommerce-admin")},{value:"between",label:Object(n._x)("Between","total spend by customer","woocommerce-admin")}],input:{component:"Currency"}},avg_order_value:{labels:{add:Object(n.__)("AOV","woocommerce-admin"),remove:Object(n.__)("Remove average order value filter","woocommerce-admin"),rule:Object(n.__)("Select an average order value filter match","woocommerce-admin"),title:Object(n.__)("{{title}}AOV{{/title}} {{rule /}} {{filter /}}","woocommerce-admin")},rules:[{value:"max",label:Object(n._x)("Less Than","average order value of customer","woocommerce-admin")},{value:"min",label:Object(n._x)("More Than","average order value of customer","woocommerce-admin")},{value:"between",label:Object(n._x)("Between","average order value of customer","woocommerce-admin")}],input:{component:"Currency"}},registered:{labels:{add:Object(n.__)("Registered","woocommerce-admin"),remove:Object(n.__)("Remove registered filter","woocommerce-admin"),rule:Object(n.__)("Select a registered filter match","woocommerce-admin"),title:Object(n.__)("{{title}}Registered{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(n.__)("Select registered date","woocommerce-admin")},rules:[{value:"before",label:Object(n._x)("Before","date","woocommerce-admin")},{value:"after",label:Object(n._x)("After","date","woocommerce-admin")},{value:"between",label:Object(n._x)("Between","date","woocommerce-admin")}],input:{component:"Date"}},last_active:{labels:{add:Object(n.__)("Last active","woocommerce-admin"),remove:Object(n.__)("Remove last active filter","woocommerce-admin"),rule:Object(n.__)("Select a last active filter match","woocommerce-admin"),title:Object(n.__)("{{title}}Last active{{/title}} {{rule /}} {{filter /}}","woocommerce-admin"),filter:Object(n.__)("Select registered date","woocommerce-admin")},rules:[{value:"before",label:Object(n._x)("Before","date","woocommerce-admin")},{value:"after",label:Object(n._x)("After","date","woocommerce-admin")},{value:"between",label:Object(n._x)("Between","date","woocommerce-admin")}],input:{component:"Date"}}}});var p=r(4),O=r(21),j=r(120),y=r(19),g=r(503),f=r(498);const{countries:w}=Object(s.f)("dataEndpoints",{countries:{}});class h extends a.Component{constructor(){super(),this.getHeadersContent=this.getHeadersContent.bind(this),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:Object(n.__)("Name","woocommerce-admin"),key:"name",required:!0,isLeftAligned:!0,isSortable:!0},{label:Object(n.__)("Username","woocommerce-admin"),key:"username",hiddenByDefault:!0},{label:Object(n.__)("Last active","woocommerce-admin"),key:"date_last_active",defaultSort:!0,isSortable:!0},{label:Object(n.__)("Date registered","woocommerce-admin"),key:"date_registered",isSortable:!0},{label:Object(n.__)("Email","woocommerce-admin"),key:"email"},{label:Object(n.__)("Orders","woocommerce-admin"),key:"orders_count",isSortable:!0,isNumeric:!0},{label:Object(n.__)("Total spend","woocommerce-admin"),key:"total_spend",isSortable:!0,isNumeric:!0},{label:Object(n.__)("AOV","woocommerce-admin"),screenReaderLabel:Object(n.__)("Average order value","woocommerce-admin"),key:"avg_order_value",isNumeric:!0},{label:Object(n.__)("Country / Region","woocommerce-admin"),key:"country",isSortable:!0},{label:Object(n.__)("City","woocommerce-admin"),key:"city",hiddenByDefault:!0,isSortable:!0},{label:Object(n.__)("Region","woocommerce-admin"),key:"state",hiddenByDefault:!0,isSortable:!0},{label:Object(n.__)("Postal code","woocommerce-admin"),key:"postcode",hiddenByDefault:!0,isSortable:!0}]}getCountryName(e){return void 0!==w[e]?w[e]:null}getRowsContent(e){const t=Object(s.f)("dateFormat",y.defaultTableDateFormat),{formatAmount:r,formatDecimal:o,getCurrencyConfig:c}=this.context;return null==e?void 0:e.map(e=>{const{avg_order_value:n,date_last_active:l,date_registered:i,email:m,name:d,user_id:u,orders_count:b,username:_,total_spend:y,postcode:g,city:f,state:w,country:h}=e,v=this.getCountryName(h),S=u?Object(a.createElement)(O.Link,{href:Object(s.e)("user-edit.php?user_id="+u),type:"wp-admin"},d):d,C=l?Object(a.createElement)(O.Date,{date:l,visibleFormat:t}):"—",E=i?Object(a.createElement)(O.Date,{date:i,visibleFormat:t}):"—",x=Object(a.createElement)(a.Fragment,null,Object(a.createElement)(p.Tooltip,{text:v},Object(a.createElement)("span",{"aria-hidden":"true"},h)),Object(a.createElement)("span",{className:"screen-reader-text"},v));return[{display:S,value:d},{display:_,value:_},{display:C,value:l},{display:E,value:i},{display:Object(a.createElement)("a",{href:"mailto:"+m},m),value:m},{display:Object(j.formatValue)(c(),"number",b),value:b},{display:r(y),value:o(y)},{display:r(n),value:o(n)},{display:x,value:h},{display:f,value:f},{display:w,value:w},{display:g,value:g}]})}getSummary(e){const{customers_count:t=0,avg_orders_count:r=0,avg_total_spend:a=0,avg_avg_order_value:o=0}=e,{formatAmount:c,getCurrencyConfig:l}=this.context,i=l();return[{label:Object(n._n)("customer","customers",t,"woocommerce-admin"),value:Object(j.formatValue)(i,"number",t)},{label:Object(n._n)("Average order","Average orders",r,"woocommerce-admin"),value:Object(j.formatValue)(i,"number",r)},{label:Object(n.__)("Average lifetime spend","woocommerce-admin"),value:c(a)},{label:Object(n.__)("Average order value","woocommerce-admin"),value:c(o)}]}render(){const{isRequesting:e,query:t,filters:r,advancedFilters:o}=this.props;return Object(a.createElement)(g.a,{endpoint:"customers",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:["customers_count","avg_orders_count","avg_total_spend","avg_avg_order_value"],isRequesting:e,itemIdField:"id",query:t,labels:{placeholder:Object(n.__)("Search by customer name","woocommerce-admin")},searchBy:"customers",title:Object(n.__)("Customers","woocommerce-admin"),columnPrefsKey:"customers_report_columns",filters:r,advancedFilters:o})}}h.contextType=f.a;var v=h,S=r(502);class C extends a.Component{render(){const{isRequesting:e,query:t,path:r}=this.props,o={orderby:"date_last_active",order:"desc",...t};return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(S.a,{query:t,path:r,filters:b,showDatePicker:!1,advancedFilters:_,report:"customers"}),Object(a.createElement)(v,{isRequesting:e,query:o,filters:b,advancedFilters:_}))}}C.propTypes={query:c.a.object.isRequired}},498:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return m}));var a=r(0),o=r(30),c=r(88),n=r.n(c),l=r(13);const i=n()(l.a),s=e=>{const t=i.getCurrencyConfig(),r=Object(o.applyFilters)("woocommerce_admin_report_currency",t,e);return n()(r)},m=Object(a.createContext)(i)},499:function(e,t,r){"use strict";r.d(t,"e",(function(){return d})),r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b})),r.d(t,"c",(function(){return _})),r.d(t,"d",(function(){return p})),r.d(t,"f",(function(){return O})),r.d(t,"h",(function(){return j})),r.d(t,"g",(function(){return y}));var a=r(15),o=r(17),c=r.n(o),n=r(3),l=r(12),i=r(11),s=r(13),m=r(500);function d(e,t=n.identity){return function(r="",o){const n="function"==typeof e?e(o):e,i=Object(l.getIdsFromQuery)(r);if(i.length<1)return Promise.resolve([]);const s={include:i.join(","),per_page:i.length};return c()({path:Object(a.addQueryArgs)(n,s)}).then(e=>e.map(t))}}d(i.NAMESPACE+"/products/attributes",e=>({key:e.id,label:e.name}));const u=d(i.NAMESPACE+"/products/categories",e=>({key:e.id,label:e.name})),b=d(i.NAMESPACE+"/coupons",e=>({key:e.id,label:e.code})),_=d(i.NAMESPACE+"/customers",e=>({key:e.id,label:e.name})),p=d(i.NAMESPACE+"/products",e=>({key:e.id,label:e.name})),O=d(i.NAMESPACE+"/taxes",e=>({key:e.id,label:Object(m.a)(e)}));function j({attributes:e,name:t}){const r=Object(s.f)("variationTitleAttributesSeparator"," - ");if(t.indexOf(r)>-1)return t;const a=e.map(({option:e})=>e).join(", ");return a?t+r+a:t}const y=d(({products:e})=>e?i.NAMESPACE+`/products/${e}/variations`:i.NAMESPACE+"/variations",e=>({key:e.id,label:j(e)}))},500:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(2);function o(e){return[e.country,e.state,e.name||Object(a.__)("TAX","woocommerce-admin"),e.priority].map(e=>e.toString().toUpperCase().trim()).filter(Boolean).join("-")}},501:function(e,t,r){"use strict";var a=r(0),o=r(2),c=r(1),n=r.n(c),l=r(21);function i({className:e}){const t=Object(o.__)("There was an error getting your stats. Please try again.","woocommerce-admin"),r=Object(o.__)("Reload","woocommerce-admin");return Object(a.createElement)(l.EmptyContent,{className:e,title:t,actionLabel:r,actionCallback:()=>{window.location.reload()}})}i.propTypes={className:n.a.string},t.a=i},502:function(e,t,r){"use strict";var a=r(0),o=r(14),c=r(1),n=r.n(c),l=r(3),i=r(7),s=r(21),m=r(13),d=r(11),u=r(19),b=r(16),_=r(498),p=r(54);class O extends a.Component{constructor(){super(),this.onDateSelect=this.onDateSelect.bind(this),this.onFilterSelect=this.onFilterSelect.bind(this),this.onAdvancedFilterAction=this.onAdvancedFilterAction.bind(this)}onDateSelect(e){const{report:t,addCesSurveyForAnalytics:r}=this.props;r(),Object(b.recordEvent)("datepicker_update",{report:t,...Object(l.omitBy)(e,l.isUndefined)})}onFilterSelect(e){const{report:t,addCesSurveyForAnalytics:r}=this.props,a=e.filter||e["filter-variations"];["single_product","single_category","single_coupon","single_variation"].includes(a)&&r();const o={report:t,filter:e.filter||"all"};"single_product"===e.filter&&(o.filter_variation=e["filter-variations"]||"all"),Object(b.recordEvent)("analytics_filter",o)}onAdvancedFilterAction(e,t){const{report:r,addCesSurveyForAnalytics:a}=this.props;switch(e){case"add":Object(b.recordEvent)("analytics_filters_add",{report:r,filter:t.key});break;case"remove":Object(b.recordEvent)("analytics_filters_remove",{report:r,filter:t.key});break;case"filter":const e=Object.keys(t).reduce((e,r)=>(e[Object(l.snakeCase)(r)]=t[r],e),{});a(),Object(b.recordEvent)("analytics_filters_filter",{report:r,...e});break;case"clear_all":Object(b.recordEvent)("analytics_filters_clear_all",{report:r});break;case"match":Object(b.recordEvent)("analytics_filters_all_any",{report:r,value:t.match})}}render(){const{advancedFilters:e,filters:t,path:r,query:o,showDatePicker:c,defaultDateRange:n}=this.props,{period:l,compare:i,before:d,after:b}=Object(u.getDateParamsFromQuery)(o,n),{primary:_,secondary:p}=Object(u.getCurrentDates)(o,n),O={period:l,compare:i,before:d,after:b,primaryDate:_,secondaryDate:p},j=this.context;return Object(a.createElement)(s.ReportFilters,{query:o,siteLocale:m.b.siteLocale,currency:j.getCurrencyConfig(),path:r,filters:t,advancedFilters:e,showDatePicker:c,onDateSelect:this.onDateSelect,onFilterSelect:this.onFilterSelect,onAdvancedFilterAction:this.onAdvancedFilterAction,dateQuery:O,isoDateFormat:u.isoDateFormat})}}O.contextType=_.a,t.a=Object(o.compose)(Object(i.withSelect)(e=>{const{woocommerce_default_date_range:t}=e(d.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings");return{defaultDateRange:t}}),Object(i.withDispatch)(e=>{const{addCesSurveyForAnalytics:t}=e(p.c);return{addCesSurveyForAnalytics:t}}))(O),O.propTypes={advancedFilters:n.a.object,filters:n.a.array,path:n.a.string.isRequired,query:n.a.object,showDatePicker:n.a.bool,report:n.a.string.isRequired}},503:function(e,t,r){"use strict";var a=r(35),o=r.n(a),c=r(0),n=r(4),l=r(30),i=r(14),s=r(90),m=r(7),d=r(3),u=r(2),b=r(1),_=r.n(b),p=r(21),O=r(12),j=r(471),y=r(11),g=r(16),f=()=>Object(c.createElement)("svg",{role:"img","aria-hidden":"true",focusable:"false",version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",viewBox:"0 0 24 24"},Object(c.createElement)("path",{d:"M18,9c-0.009,0-0.017,0.002-0.025,0.003C17.72,5.646,14.922,3,11.5,3C7.91,3,5,5.91,5,9.5c0,0.524,0.069,1.031,0.186,1.519 C5.123,11.016,5.064,11,5,11c-2.209,0-4,1.791-4,4c0,1.202,0.541,2.267,1.38,3h18.593C22.196,17.089,23,15.643,23,14 C23,11.239,20.761,9,18,9z M12,16l-4-5h3V8h2v3h3L12,16z"})),w=r(501);var h=r(54);r(512);const v=e=>{const{getHeadersContent:t,getRowsContent:r,getSummary:a,isRequesting:i,primaryData:m,tableData:b,endpoint:_,itemIdField:h,tableQuery:v,compareBy:S,compareParam:C,searchBy:E,labels:x={},...A}=e,{query:R,columnPrefsKey:F}=e,{items:k,query:D}=b,N=R[C]?Object(O.getIdsFromQuery)(R[S]):[],[T,q]=Object(c.useState)(N),P=Object(c.useRef)(null),{updateUserPreferences:B,...M}=Object(y.useUserPreferences)();if(b.isError||m.isError)return Object(c.createElement)(w.a,null);let L=[];F&&(L=M&&M[F]?M[F]:L);const Q=(e,o,c)=>{const n=a?a(o,c):null;return Object(l.applyFilters)("woocommerce_admin_report_table",{endpoint:_,headers:t(),rows:r(e),totals:o,summary:n,items:k})},I=t=>{const{ids:r}=e;q(t?r:[])},V=(t,r)=>{const{ids:a}=e;if(r)q(Object(d.uniq)([a[t],...T]));else{const e=T.indexOf(a[t]);q([...T.slice(0,e),...T.slice(e+1)])}},U=t=>{const{ids:r=[]}=e,a=-1!==T.indexOf(r[t]);return{display:Object(c.createElement)(n.CheckboxControl,{onChange:Object(d.partial)(V,t),checked:a}),value:!1}},H=()=>{const{ids:t=[]}=e,r=t.length>0,a=r&&t.length===T.length;return{cellClassName:"is-checkbox-column",key:"compare",label:Object(c.createElement)(n.CheckboxControl,{onChange:I,"aria-label":Object(u.__)("Select All"),checked:a,disabled:!r}),required:!0}},z=i||b.isRequesting||m.isRequesting,G=Object(d.get)(m,["data","totals"],{}),J=k.totalResults||0,K=J>0,X=Object(O.getSearchWords)(R).map(e=>({key:e,label:e})),{data:Y}=k,W=Q(Y,G,J);let{headers:$,rows:Z}=W;const{summary:ee}=W;S&&(Z=Z.map((e,t)=>[U(t),...e]),$=[H(),...$]);const te=((e,t)=>t?e.map(e=>({...e,visible:e.required||!t.includes(e.key)})):e.map(e=>({...e,visible:e.required||!e.hiddenByDefault})))($,L);return Object(c.createElement)(c.Fragment,null,Object(c.createElement)("div",{className:"woocommerce-report-table__scroll-point",ref:P,"aria-hidden":!0}),Object(c.createElement)(p.TableCard,o()({className:"woocommerce-report-table",hasSearch:!!E,actions:[S&&Object(c.createElement)(p.CompareButton,{key:"compare",className:"woocommerce-table__compare",count:T.length,helpText:x.helpText||Object(u.__)("Check at least two items below to compare","woocommerce-admin"),onClick:()=>{S&&Object(O.onQueryChange)("compare")(S,C,T.join(","))},disabled:!K},x.compareButton||Object(u.__)("Compare","woocommerce-admin")),E&&Object(c.createElement)(p.Search,{allowFreeTextSearch:!0,inlineTags:!0,key:"search",onChange:t=>{const{baseSearchQuery:r,addCesSurveyForCustomerSearch:a}=e,o=t.map(e=>e.label.replace(",","%2C"));o.length?(Object(O.updateQueryString)({filter:void 0,[C]:void 0,[E]:void 0,...r,search:Object(d.uniq)(o).join(",")}),a()):Object(O.updateQueryString)({search:void 0}),Object(g.recordEvent)("analytics_table_filter",{report:_})},placeholder:x.placeholder||Object(u.__)("Search by item name","woocommerce-admin"),selected:X,showClearButton:!0,type:E,disabled:!K}),K&&Object(c.createElement)(n.Button,{key:"download",className:"woocommerce-table__download-button",disabled:z,onClick:()=>{const{createNotice:t,startExport:r,title:a}=e,o=Object.assign({},R),{data:c,totalResults:n}=k;let l="browser";if(delete o.extended_info,o.search&&delete o[E],c&&c.length===n){const{headers:e,rows:t}=Q(c,n);Object(j.downloadCSVFile)(Object(j.generateCSVFileName)(a,o),Object(j.generateCSVDataFromTable)(e,t))}else l="email",r(_,D).then(()=>t("success",Object(u.sprintf)(Object(u.__)("Your %s Report will be emailed to you.","woocommerce-admin"),a))).catch(e=>t("error",e.message||Object(u.sprintf)(Object(u.__)("There was a problem exporting your %s Report. Please try again.","woocommerce-admin"),a)));Object(g.recordEvent)("analytics_table_download",{report:_,rows:n,downloadType:l})}},Object(c.createElement)(f,null),Object(c.createElement)("span",{className:"woocommerce-table__download-button__label"},x.downloadButton||Object(u.__)("Download","woocommerce-admin")))],headers:te,isLoading:z,onQueryChange:O.onQueryChange,onColumnsChange:(e,t)=>{const r=$.map(e=>e.key).filter(t=>!e.includes(t));if(F){B({[F]:r})}if(t){const r={report:_,column:t,status:e.includes(t)?"on":"off"};Object(g.recordEvent)("analytics_table_header_toggle",r)}},onSort:(e,t)=>{Object(O.onQueryChange)("sort")(e,t);const r={report:_,column:e,direction:t};Object(g.recordEvent)("analytics_table_sort",r)},onPageChange:(e,t)=>{P.current.scrollIntoView();const r=P.current.nextSibling.querySelector(".woocommerce-table__table"),a=s.focus.focusable.find(r);a.length&&a[0].focus(),t&&("goto"===t?Object(g.recordEvent)("analytics_table_go_to_page",{report:_,page:e}):Object(g.recordEvent)("analytics_table_page_click",{report:_,direction:t}))},rows:Z,rowsPerPage:parseInt(D.per_page,10)||y.QUERY_DEFAULTS.pageSize,summary:ee,totalRows:J},A)))};v.propTypes={baseSearchQuery:_.a.object,compareBy:_.a.string,compareParam:_.a.string,columnPrefsKey:_.a.string,endpoint:_.a.string,extendItemsMethodNames:_.a.shape({getError:_.a.string,isRequesting:_.a.string,load:_.a.string}),extendedItemsStoreName:_.a.string,getHeadersContent:_.a.func.isRequired,getRowsContent:_.a.func.isRequired,getSummary:_.a.func,itemIdField:_.a.string,labels:_.a.shape({compareButton:_.a.string,downloadButton:_.a.string,helpText:_.a.string,placeholder:_.a.string}),primaryData:_.a.object,searchBy:_.a.string,summaryFields:_.a.arrayOf(_.a.string),tableData:_.a.object.isRequired,tableQuery:_.a.object,title:_.a.string.isRequired},v.defaultProps={primaryData:{},tableData:{items:{data:[],totalResults:0},query:{}},tableQuery:{},compareParam:"filter",downloadable:!1,onSearch:d.noop,baseSearchQuery:{}};const S=[],C={};t.a=Object(i.compose)(Object(m.withSelect)((e,t)=>{const{endpoint:r,getSummary:a,isRequesting:o,itemIdField:c,query:n,tableData:l,tableQuery:i,filters:s,advancedFilters:m,summaryFields:u,extendedItemsStoreName:b}=t,_=e(y.REPORTS_STORE_NAME),p=b?e(b):null,{woocommerce_default_date_range:O}=e(y.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings");if(o)return C;const j="categories"===r?"products":r,g=a?Object(y.getReportChartData)({endpoint:j,selector:_,dataType:"primary",query:n,filters:s,advancedFilters:m,defaultDateRange:O,fields:u}):C,f=l||Object(y.getReportTableData)({endpoint:r,query:n,selector:_,tableQuery:i,filters:s,advancedFilters:m,defaultDateRange:O}),w=p?function(e,t,r){const{extendItemsMethodNames:a,itemIdField:o}=t,c=r.items.data;if(!(Array.isArray(c)&&c.length&&a&&o))return r;const{[a.getError]:n,[a.isRequesting]:l,[a.load]:i}=e,s={include:c.map(e=>e[o]).join(","),per_page:c.length},m=i(s),u=!!l&&l(s),b=!!n&&n(s),_=c.map(e=>{const t=Object(d.first)(m.filter(t=>e.id===t.id));return{...e,...t}}),p=r.isRequesting||u,O=r.isError||b;return{...r,isRequesting:p,isError:O,items:{...r.items,data:_}}}(p,t,f):f;return{primaryData:g,ids:c&&w.items.data?w.items.data.map(e=>e[c]):S,tableData:w,query:n}}),Object(m.withDispatch)(e=>{const{startExport:t}=e(y.EXPORT_STORE_NAME),{createNotice:r}=e("core/notices"),{addCesSurveyForCustomerSearch:a}=e(h.c);return{createNotice:r,startExport:t,addCesSurveyForCustomerSearch:a}}))(v)},512:function(e,t,r){}}]);