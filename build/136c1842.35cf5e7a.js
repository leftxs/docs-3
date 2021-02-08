(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{198:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(n),f=r,d=m["".concat(a,".").concat(f)]||m[f]||u[f]||c;return n?o.a.createElement(d,i(i({ref:t},s),{},{components:n})):o.a.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),c=(n(0),n(198)),a={},i={unversionedId:"concepts/concepts-overview",id:"concepts/concepts-overview",isDocsHomePage:!1,title:"concepts-overview",description:"Concepts Overview",source:"@site/docs/concepts/concepts-overview.md",slug:"/concepts/concepts-overview",permalink:"/docs/memgraph/concepts/concepts-overview",editUrl:"https://github.com/g-despot/docs/tree/main/docs/concepts/concepts-overview.md",version:"current"},p=[{value:"Concepts Overview",id:"concepts-overview",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.a)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.a)("h2",{id:"concepts-overview"},"Concepts Overview"),Object(c.a)("p",null,"Articles within the concepts section serve as an in-depth introduction into\ninner workings of Memgraph. These tend to be quite technical in nature and\nare recommended for advanced users and other graph database enthusiasts."),Object(c.a)("p",null,"So far we have covered the following topics:"),Object(c.a)("ul",null,Object(c.a)("li",{parentName:"ul"},Object(c.a)("a",{parentName:"li",href:"/docs/memgraph/concepts/storage"},"Data Storage")),Object(c.a)("li",{parentName:"ul"},Object(c.a)("a",{parentName:"li",href:"/docs/memgraph/concepts/graph-algorithms"},"Graph Algorithms")),Object(c.a)("li",{parentName:"ul"},Object(c.a)("a",{parentName:"li",href:"/docs/memgraph/concepts/indexing"},"Indexing")),Object(c.a)("li",{parentName:"ul"},Object(c.a)("a",{parentName:"li",href:"/docs/memgraph/concepts/replication"},"Replication"))))}l.isMDXComponent=!0}}]);