(function(e){function t(t){for(var n,s,c=t[0],i=t[1],l=t[2],p=0,d=[];p<c.length;p++)s=c[p],o[s]&&d.push(o[s][0]),o[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/portfolio-crud-app-vue/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=r("498a"),a=r("a7e2"),s=r("88d4"),c=r("6e5c"),i=r("7049"),l=r("b1fc"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("b-container",[r("b-row",[r("b-col",[r("b-nav",[r("b-nav-item",{attrs:{to:{name:"Home"}}},[e._v("Home")]),r("b-nav-item",{attrs:{to:{name:"About"}}},[e._v("About")])],1)],1)],1)],1),r("router-view")],1)},p=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("b-container",[r("b-row",[r("b-col",[r("b-jumbotron",{attrs:{"header-level":"4"}},[r("template",{slot:"header"},[r("strong",[e._v("\n              My portfolio\n            ")])]),r("template",{slot:"lead"},[e._v("\n            Welcome to my site.\n          ")])],2)],1)],1)],1)],1)},m=[],f={name:"Header"},b=f,h=r("2877"),v=Object(h["a"])(b,d,m,!1,null,null,null),j=v.exports,y={name:"App",components:{Header:j}},g=y,_=Object(h["a"])(g,u,p,!1,null,null,null),w=_.exports,x=r("8c4f"),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"about-page",attrs:{tag:"main"}},[r("b-row",[r("b-col",[r("b-card",[r("b-card-text",[e._v("\n          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum\n          has been the industry's standard dummy text ever since the 1500s, when an unknown\n          printer took a galley of type and scrambled it to make a type specimen book.\n          It has survived not only five centuries, but also the leap into electronic typesetting,\n          remaining essentially unchanged. It was popularised in the 1960s with the release of\n          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop\n          publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n        ")])],1)],1)],1)],1)},O=[],P={name:"About"},C=P,A=Object(h["a"])(C,k,O,!1,null,null,null),I=A.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"home-page"},[r("b-container",{staticClass:"crud-action-panel"},[r("b-form-row",[r("b-col",{attrs:{md:"3"}},[r("b-input",{staticClass:"mb-2 mr-sm-2",attrs:{id:"inline-form-input-project-name",placeholder:"Project name"},model:{value:e.project.name,callback:function(t){e.$set(e.project,"name","string"===typeof t?t.trim():t)},expression:"project.name"}})],1),r("b-col",{attrs:{md:"3"}},[r("b-input",{staticClass:"mb-2",attrs:{id:"inline-form-input-project-description",placeholder:"Project description"},model:{value:e.project.description,callback:function(t){e.$set(e.project,"description",t)},expression:"project.description"}})],1),r("b-col",{attrs:{md:"3"}},[r("b-button",{staticClass:"mb-2",attrs:{variant:"primary"},on:{click:e.addProject}},[e._v("\n            Add project\n          ")])],1),r("b-col",{staticClass:"ml-auto",attrs:{md:"3"}},[r("b-input",{attrs:{id:"inline-form-input-search",placeholder:"Search project by name..."},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}})],1)],1)],1),r("b-container",{staticClass:"portfolio-list"},[e.projects.length?r("b-row",e._l(e.filteredProjects,function(t,n){return r("b-col",{key:t.name,attrs:{xl:"4",lg:"4",md:"6",sm:"6",cols:"12"}},[r("b-card",{attrs:{"header-tag":"header","footer-tag":"footer"}},[r("h6",{attrs:{slot:"header"},slot:"header"},[e._v(e._s(t.name))]),r("b-card-text",[e._v(e._s(t.description))]),r("span",{staticClass:"delete-btn",attrs:{slot:"footer"},on:{click:function(t){return e.rmvPortfolioItem(n)}},slot:"footer"},[e._v("\n              Delete Project\n            ")])],1)],1)}),1):e._e()],1)],1)},E=[],H=(r("7f7f"),r("bc3a")),S=r.n(H),$={name:"Home",data:function(){return{searchQuery:"",project:{name:"",description:""},projects:[]}},computed:{filteredProjects:function(){var e=this;return this.projects.filter(function(t){return t.name.toLowerCase().indexOf(e.searchQuery.toLowerCase())>-1})}},methods:{addProject:function(){(this.project.name||this.project.description)&&this.projects.unshift(this.project)},rmvPortfolioItem:function(e){this.projects.splice(e,1)}},created:function(){var e=this;console.log(Object({NODE_ENV:"production",BASE_URL:"/portfolio-crud-app-vue/"})),S.a.get("/portfolio-crud-app-vue/projects.json").then(function(t){e.projects=t.data})}},M=$,Q=Object(h["a"])(M,L,E,!1,null,null,null),T=Q.exports;n["a"].use(x["a"]);var D=[{path:"/",name:"Home",component:T},{path:"/about",name:"About",component:I},{path:"*",redirect:"/"}],J=new x["a"]({mode:"history",base:"/portfolio-crud-app-vue/",routes:D});r("c1c3");n["a"].use(o["a"]),n["a"].use(a["a"]),n["a"].use(s["a"]),n["a"].use(c["a"]),n["a"].use(i["a"]),n["a"].use(l["a"]),n["a"].config.productionTip=!1,new n["a"]({router:J,render:function(e){return e(w)}}).$mount("#app")},c1c3:function(e,t,r){}});
//# sourceMappingURL=app.34790670.js.map