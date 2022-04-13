webpackJsonp([1],{151:function(e,t,a){"use strict";t.a={name:"app"}},152:function(e,t,a){"use strict";var n=a(333),r=a.n(n),o=a(161),s=a.n(o),i=a(162),u=a.n(i),c=a(374);t.a={data:function(){return{loading:!1,companies:[],model:{}}},created:function(){var e=this;return u()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.refreshCompanies();case 1:case"end":return t.stop()}},t,e)}))()},methods:{refreshCompanies:function(){var e=this;return u()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,c.a.getCompanies();case 3:e.companies=t.sent,e.loading=!1;case 5:case"end":return t.stop()}},t,e)}))()},populateCompanyToEdit:function(e){var t=this;return u()(s.a.mark(function a(){return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:alert("hello"),t.model=r()({},e);case 2:case"end":return a.stop()}},a,t)}))()},saveCompany:function(){var e=this;return u()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.model.id){t.next=5;break}return t.next=3,c.a.updateCompany(e.model.id,e.model);case 3:t.next=7;break;case 5:return t.next=7,c.a.createCompany(e.model);case 7:return e.model={},t.next=10,e.refreshCompanies();case 10:case"end":return t.stop()}},t,e)}))()},deleteCompany:function(e){var t=this;return u()(s.a.mark(function a(){return s.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!confirm("Are you sure you want to delete this company?")){a.next=6;break}return t.model.id===e&&(t.model={}),a.next=4,c.a.deleteCompany(e);case 4:return a.next=6,t.refreshCompanies();case 6:case"end":return a.stop()}},a,t)}))()}}}},323:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(58),r=a(326),o=a(330),s=a(394),i=a(432),u=(a.n(i),a(433));a.n(u);n.default.use(s.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:o.a,template:"<App/>",components:{App:r.a}})},326:function(e,t,a){"use strict";function n(e){a(327)}var r=a(151),o=a(329),s=a(150),i=n,u=s(r.a,o.a,!1,i,null,null);t.a=u.exports},327:function(e,t){},329:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[a("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),e._v(" "),a("b-navbar-brand",{attrs:{to:"/"}},[e._v("Companies")]),e._v(" "),a("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{to:"/"}},[e._v("Home")])],1)],1)],1),e._v(" "),a("router-view")],1)},r=[],o={render:n,staticRenderFns:r};t.a=o},330:function(e,t,a){"use strict";var n=a(58),r=a(331),o=a(332);n.default.use(r.a),t.a=new r.a({mode:"history",routes:[{path:"/",name:"ListCompanies",component:o.a}]})},332:function(e,t,a){"use strict";var n=a(152),r=a(393),o=a(150),s=o(n.a,r.a,!1,null,null,null);t.a=s.exports},374:function(e,t,a){"use strict";var n=a(161),r=a.n(n),o=a(162),s=a.n(o),i=a(375),u=a.n(i),c=u.a.create({baseURL:"http://104.197.0.21:8000/",json:!0});t.a={execute:function(e,t,a){var n=this;return s()(r.a.mark(function o(){return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c({method:e,url:t,data:a,headers:{}}).then(function(e){return e.data}));case 1:case"end":return n.stop()}},o,n)}))()},getCompanies:function(){return this.execute("get","api/companies")},getCompany:function(e){return this.execute("get","api/companies/"+e)},createCompany:function(e){return this.execute("post","api/companies/",e)},updateCompany:function(e,t){return this.execute("put","api/companies/"+e,t)},deleteCompany:function(e){return this.execute("delete","api/companies/"+e)}}},393:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid mt-4"},[a("h1",{staticClass:"h1"},[e._v("Posts Manager")]),e._v(" "),a("b-alert",{attrs:{show:e.loading,variant:"info"}},[e._v("Loading...")]),e._v(" "),a("b-row",[a("b-col",[a("table",{staticClass:"table table-striped"},[a("thead",[a("tr",[a("th",[e._v("ID")]),e._v(" "),a("th",[e._v("Name")]),e._v(" "),a("th",[e._v("Description")]),e._v(" "),a("th",[e._v("Symbol")]),e._v(" "),a("th",[e._v("Market Values")]),e._v(" "),a("th",[e._v(" ")])])]),e._v(" "),a("tbody",e._l(e.companies,function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(t.id))]),e._v(" "),a("td",[e._v(e._s(t.name))]),e._v(" "),a("td",[e._v(e._s(t.description))]),e._v(" "),a("td",[e._v(e._s(t.symbol))]),e._v(" "),a("td",[e._v(e._s(t.market_values))]),e._v(" "),a("td",{staticClass:"text-right"},[a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),e.populateCompanyToEdit(t)}}},[e._v("Edit")]),e._v(" -\n              "),a("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),e.deleteCompany(t.id)}}},[e._v("Delete")])])])}),0)])]),e._v(" "),a("b-col",{attrs:{lg:"3"}},[a("b-card",{attrs:{title:e.model.id?"Edit Company ID#"+e.model.id:"New Company"}},[a("form",{on:{submit:function(t){return t.preventDefault(),e.saveCompany.apply(null,arguments)}}},[a("b-form-group",{attrs:{label:"Name"}},[a("b-form-input",{attrs:{type:"text"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),e._v(" "),a("b-form-group",{attrs:{label:"Description"}},[a("b-form-textarea",{attrs:{rows:"4"},model:{value:e.model.description,callback:function(t){e.$set(e.model,"description",t)},expression:"model.description"}})],1),e._v(" "),a("b-form-group",{attrs:{label:"Symbol"}},[a("b-form-input",{attrs:{type:"text"},model:{value:e.model.symbol,callback:function(t){e.$set(e.model,"symbol",t)},expression:"model.symbol"}})],1),e._v(" "),a("b-form-group",{attrs:{label:"Market values"}},[a("b-form-input",{attrs:{type:"text"},model:{value:e.model.market_values,callback:function(t){e.$set(e.model,"market_values",t)},expression:"model.market_values"}})],1),e._v(" "),a("div",[a("b-btn",{attrs:{type:"submit",variant:"success"}},[e._v("Save Company!")])],1)],1)])],1)],1)],1)},r=[],o={render:n,staticRenderFns:r};t.a=o},432:function(e,t){},433:function(e,t){}},[323]);
//# sourceMappingURL=app.835c52af2db1dec32cb2.js.map