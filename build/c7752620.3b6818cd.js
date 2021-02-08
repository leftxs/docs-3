(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{170:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return o})),a.d(n,"metadata",(function(){return l})),a.d(n,"toc",(function(){return s})),a.d(n,"default",(function(){return p}));var t=a(3),r=a(7),i=(a(0),a(198)),o={id:"security",title:"Security (Enterprise)",sidebar_label:"Security (Enterprise)"},l={unversionedId:"reference-guide/security",id:"reference-guide/security",isDocsHomePage:!1,title:"Security (Enterprise)",description:"Before reading this article we highly recommend going through a how-to guide",source:"@site/docs/reference-guide/security.md",slug:"/reference-guide/security",permalink:"/docs/memgraph/reference-guide/security",editUrl:"https://github.com/g-despot/docs/tree/main/docs/reference-guide/security.md",version:"current",sidebar_label:"Security (Enterprise)",sidebar:"memgraph",previous:{title:"Weakly Connected Components query module",permalink:"/docs/memgraph/reference-guide/networkx/wcc"},next:{title:"Auth module (Enterprise)",permalink:"/docs/memgraph/reference-guide/auth-module"}},s=[{value:"Users",id:"users",children:[]},{value:"User Roles",id:"user-roles",children:[]},{value:"Privileges",id:"privileges",children:[]}],c={toc:s};function p(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(t.a)({},c,a,{components:n,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Before reading this article we highly recommend going through a how-to guide\non ",Object(i.a)("a",{parentName:"p",href:"/docs/memgraph/database-functionalities/manage-user-privileges"},"managing user privileges"),"\nwhich contains more thorough explanations of the concepts behind ",Object(i.a)("inlineCode",{parentName:"p"},"openCypher"),"\ncommands listed in this article."),Object(i.a)("h2",{id:"users"},"Users"),Object(i.a)("p",null,"Creating a user can be done by executing the following command:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"  CREATE USER user_name [IDENTIFIED BY 'password'];\n")),Object(i.a)("p",null,"If the user should authenticate themself on each session, i.e. provide their\npassword on each session, the part within the brackets is mandatory. Otherwise,\nthe password is set to ",Object(i.a)("inlineCode",{parentName:"p"},"null")," and the user will be allowed to log-in using\nany password provided that they provide the correct username."),Object(i.a)("p",null,"You can also set or alter a user's password anytime by issuing the following\ncommand:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"  SET PASSWORD FOR user_name TO 'new_password';\n")),Object(i.a)("p",null,"Removing a user's password, i.e. allowing the user to log-in using any\npassword can be done by setting it to ",Object(i.a)("inlineCode",{parentName:"p"},"null")," as follows:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"  SET PASSWORD FOR user_name TO null;\n")),Object(i.a)("h2",{id:"user-roles"},"User Roles"),Object(i.a)("p",null,"Each user can be assigned at most one user role. One can think of user roles\nas abstractions which capture the privilege levels of a set of users. For\nexample, suppose that ",Object(i.a)("inlineCode",{parentName:"p"},"Dominik")," and ",Object(i.a)("inlineCode",{parentName:"p"},"Marko")," belong to upper management of\na certain company. It makes sense to grant them a set of privileges that other\nusers are not entitled to so, instead of granting those privileges to each\nof them, we can create a role with those privileges called ",Object(i.a)("inlineCode",{parentName:"p"},"manager"),"\nwhich we assign to ",Object(i.a)("inlineCode",{parentName:"p"},"Dominik")," and ",Object(i.a)("inlineCode",{parentName:"p"},"Marko"),"."),Object(i.a)("p",null,"In other words, Each privilege that is granted to a user role is automatically\ngranted to a user (unless it has been explicitly denied to that user).\nSimilarly, each privilege that is denied to a user role is automatically denied\nto a user (even if it has been explicitly granted to that user)."),Object(i.a)("p",null,"Creating a user role can be done by executing the following command:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"  CREATE ROLE role_name;\n")),Object(i.a)("p",null,"Assigning a user role to a certain user can be done by the following command:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"  SET ROLE FOR user_name TO role_name;\n")),Object(i.a)("p",null,"Removing the role from the user can be done by:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"  CLEAR ROLE FOR user_name;\n")),Object(i.a)("p",null,"Finally, showing all users that have a certain role can be done as:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"  SHOW USERS FOR role_name;\n")),Object(i.a)("p",null,"Similarly, querying which role a certain user has can be done as:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"  SHOW ROLE FOR user_name;\n")),Object(i.a)("h2",{id:"privileges"},"Privileges"),Object(i.a)("p",null,"At the moment, privileges are confined to users' abilities to perform certain\n",Object(i.a)("inlineCode",{parentName:"p"},"OpenCypher")," queries. Namely users can be given permission to execute a subset\nof the following commands: ",Object(i.a)("inlineCode",{parentName:"p"},"CREATE"),", ",Object(i.a)("inlineCode",{parentName:"p"},"DELETE"),", ",Object(i.a)("inlineCode",{parentName:"p"},"MATCH"),", ",Object(i.a)("inlineCode",{parentName:"p"},"MERGE"),", ",Object(i.a)("inlineCode",{parentName:"p"},"SET"),",\n",Object(i.a)("inlineCode",{parentName:"p"},"REMOVE"),", ",Object(i.a)("inlineCode",{parentName:"p"},"INDEX"),", ",Object(i.a)("inlineCode",{parentName:"p"},"AUTH"),", ",Object(i.a)("inlineCode",{parentName:"p"},"STREAM"),"."),Object(i.a)("p",null,"Granting a certain set of privileges to a specific user or user role can be\ndone by issuing the following command:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"  GRANT privilege_list TO user_or_role;\n")),Object(i.a)("p",null,"For example, granting ",Object(i.a)("inlineCode",{parentName:"p"},"AUTH")," and ",Object(i.a)("inlineCode",{parentName:"p"},"STREAM")," privileges to users with the role\n",Object(i.a)("inlineCode",{parentName:"p"},"moderator")," would be written as:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"  GRANT AUTH, STREAM TO moderator:\n")),Object(i.a)("p",null,"Similarly, denying privileges is done using the ",Object(i.a)("inlineCode",{parentName:"p"},"DENY")," keyword instead of\n",Object(i.a)("inlineCode",{parentName:"p"},"GRANT"),"."),Object(i.a)("p",null,"Both denied and granted privileges can be revoked, meaning that their status is\nnot defined for that user or role. Revoking is done using the ",Object(i.a)("inlineCode",{parentName:"p"},"REVOKE")," keyword.\nThe users should note that, although semantically unintuitive, the level of a\ncertain privilege can be raised by using ",Object(i.a)("inlineCode",{parentName:"p"},"REVOKE"),". For instance, suppose a user\nhas been denied a ",Object(i.a)("inlineCode",{parentName:"p"},"STREAM")," privilege, but the role it belongs to is granted\nthat privilege. Currently, the user is unable to use data streaming features,\nbut, after revoking the user's ",Object(i.a)("inlineCode",{parentName:"p"},"STREAM")," privilege, they will be able to do so."),Object(i.a)("p",null,"Finally, if you wish to grant, deny or revoke all privileges and find it tedious\nto explicitly list them, you can use the ",Object(i.a)("inlineCode",{parentName:"p"},"ALL PRIVILEGES")," construct instead.\nFor example, revoking all privileges from user ",Object(i.a)("inlineCode",{parentName:"p"},"jdoe")," can be done with the\nfollowing command:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"  REVOKE ALL PRIVILEGES FROM jdoe;\n")),Object(i.a)("p",null,"Finally, obtaining the status of each privilege for a certain user or role can be\ndone by issuing the following command:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"  SHOW PRIVILEGES FOR user_or_role;\n")))}p.isMDXComponent=!0},198:function(e,n,a){"use strict";a.d(n,"a",(function(){return m}));var t=a(0),r=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var n=r.a.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=t,g=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return a?r.a.createElement(g,l(l({ref:n},c),{},{components:a})):r.a.createElement(g,l({ref:n},c))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);