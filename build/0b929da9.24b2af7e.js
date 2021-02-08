(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{198:function(e,n,a){"use strict";a.d(n,"a",(function(){return d}));var t=a(0),r=a.n(t);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var n=r.a.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),m=u(a),d=t,b=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return a?r.a.createElement(b,l(l({ref:n},i),{},{components:a})):r.a.createElement(b,l({ref:n},i))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,c=new Array(o);c[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:t,c[1]=l;for(var i=2;i<o;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},80:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return c})),a.d(n,"metadata",(function(){return l})),a.d(n,"toc",(function(){return p})),a.d(n,"default",(function(){return u}));var t=a(3),r=a(7),o=(a(0),a(198)),c={id:"remove",title:"REMOVE clause",sidebar_label:"REMOVE"},l={unversionedId:"clauses/remove",id:"clauses/remove",isDocsHomePage:!1,title:"REMOVE clause",description:"The REMOVE clause is used to remove labels and properties from nodes and edges.",source:"@site/cypher-manual/clauses/remove.md",slug:"/clauses/remove",permalink:"/docs/cypher-manual/clauses/remove",editUrl:"https://github.com/g-despot/docs/tree/main/cypher-manual/clauses/remove.md",version:"current",sidebar_label:"REMOVE",sidebar:"cypher_manual",previous:{title:"OPTIONAL MATCH clause",permalink:"/docs/cypher-manual/clauses/optional-match"},next:{title:"RETURN clause",permalink:"/docs/cypher-manual/clauses/return"}},p=[{value:"Data Set",id:"data-set",children:[]},{value:"1. Removing a property",id:"1-removing-a-property",children:[]},{value:"2. Removing a label",id:"2-removing-a-label",children:[]},{value:"Data set Queries",id:"data-set-queries",children:[]}],i={toc:p};function u(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(t.a)({},i,a,{components:n,mdxType:"MDXLayout"}),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"REMOVE")," clause is used to remove labels and properties from nodes and edges."),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},Object(o.a)("a",{parentName:"li",href:"#1-removing-a-property"},"Removing a property")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("a",{parentName:"li",href:"#2-removing-a-label"},"Removing a label"))),Object(o.a)("h2",{id:"data-set"},"Data Set"),Object(o.a)("p",null,"The following examples are executed with this data set. You can create this data set\nlocally by executing the queries at the end of the page: ",Object(o.a)("a",{parentName:"p",href:"#data-set-queries"},"Data Set"),"."),Object(o.a)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/data_set.png",alt:"Data set",style:{height:380}}),Object(o.a)("h2",{id:"1-removing-a-property"},"1. Removing a property"),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"REMOVE")," clause can be used to remove a property from a node or relationship."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Country { name: 'United Kingdom' })\nREMOVE n.name\nRETURN n;\n")),Object(o.a)("p",null,"Output:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre"},'+-----------------------------------------------------------------------------+\n| n                                                                           |\n+-----------------------------------------------------------------------------+\n| (:Country {continent: "Europe", language: "English", population: 66000000}) |\n+-----------------------------------------------------------------------------+\n')),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"REMOVE")," clause can't be used to remove all properties from a node or relationship. Instead, take a look at the ",Object(o.a)("inlineCode",{parentName:"p"},"SET")," clause."),Object(o.a)("h2",{id:"2-removing-a-label"},"2. Removing a label"),Object(o.a)("p",null,"The ",Object(o.a)("inlineCode",{parentName:"p"},"REMOVE")," clause can be used to remove a label from a node."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n:Country { name: 'United Kingdom' })\nREMOVE n:Country\nRETURN n;\n")),Object(o.a)("p",null,"Output:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre"},'+--------------------------------------------------------------------------------------------+\n| n                                                                                          |\n+--------------------------------------------------------------------------------------------+\n| ({continent: "Europe", language: "English", name: "United Kingdom", population: 66000000}) |\n+--------------------------------------------------------------------------------------------+\n')),Object(o.a)("p",null,"Let's add the label ",Object(o.a)("inlineCode",{parentName:"p"},"Country")," back to the node with the name ",Object(o.a)("inlineCode",{parentName:"p"},"United Kingdom")," and the additional label ",Object(o.a)("inlineCode",{parentName:"p"},"Kingdom"),"."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n { name: 'United Kingdom' })\nSET n:Country:Kingdom;\n")),Object(o.a)("p",null,"You can now remove multiple labels from a node at the same time. "),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-cypher"},'+--------------------------------------------------------------------------------------------+\n| n                                                                                          |\n+--------------------------------------------------------------------------------------------+\n| ({continent: "Europe", language: "English", name: "United Kingdom", population: 66000000}) |\n+--------------------------------------------------------------------------------------------+\n')),Object(o.a)("p",null,"Output:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre"},"+------+\n| c2   |\n+------+\n| Null |\n+------+\n")),Object(o.a)("h2",{id:"data-set-queries"},"Data set Queries"),Object(o.a)("p",null,"We encourage you to try out the examples by yourself.\nYou can get our data set locally by executing the following query block."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) DETACH DELETE n;\n\nCREATE (c1:Country { name: 'Germany', language: 'German', continent: 'Europe', population: 83000000 });\nCREATE (c2:Country { name: 'France', language: 'French', continent: 'Europe', population: 67000000 });\nCREATE (c3:Country { name: 'United Kingdom', language: 'English', continent: 'Europe', population: 66000000 });\n\nMATCH (c1),(c2)\nWHERE c1.name= 'Germany' AND c2.name = 'France'\nCREATE (c2)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'John' })-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (c)\nWHERE c.name= 'United Kingdom'\nCREATE (c)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'Harry' })-[:LIVING_IN { date_of_start: 2013 }]->(c);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)-[:FRIENDS_WITH { date_of_start: 2011 }]->(p2);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)<-[:FRIENDS_WITH { date_of_start: 2012 }]-(:Person { name: 'Anna' })-[:FRIENDS_WITH { date_of_start: 2014 }]->(p2);\n\nMATCH (p),(c1),(c2)\nWHERE p.name = 'Anna' AND c1.name = 'United Kingdom' AND c2.name = 'Germany'\nCREATE (c2)<-[:LIVING_IN { date_of_start: 2014 }]-(p)-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (n)-[r]->(m) RETURN n,r,m;\n")))}u.isMDXComponent=!0}}]);