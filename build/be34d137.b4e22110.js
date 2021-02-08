(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{167:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return m}));var r=a(3),n=a(7),i=(a(0),a(198)),o={id:"movie-recommendation",title:"Movie recommendation system",sidebar_label:"Movie recommendation system"},s={unversionedId:"tutorials/movie-recommendation",id:"tutorials/movie-recommendation",isDocsHomePage:!1,title:"Movie recommendation system",description:"This article is a part of a series intended to show users how to use Memgraph",source:"@site/docs/tutorials/movie-recommendation.md",slug:"/tutorials/movie-recommendation",permalink:"/docs/memgraph/tutorials/movie-recommendation",editUrl:"https://github.com/g-despot/docs/tree/main/docs/tutorials/movie-recommendation.md",version:"current",sidebar_label:"Movie recommendation system",sidebar:"memgraph",previous:{title:"Marvel Comic Universe social network",permalink:"/docs/memgraph/tutorials/marvel-universe"},next:{title:"Social network analysis with NetworkX",permalink:"/docs/memgraph/tutorials/social-network-analysis"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Data model",id:"data-model",children:[{value:"Importing the snapshot",id:"importing-the-snapshot",children:[]},{value:"Example queries",id:"example-queries",children:[]}]}],c={toc:l};function m(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"This article is a part of a series intended to show users how to use Memgraph\non real-world data and, by doing so, retrieve some interesting and useful\ninformation."),Object(i.a)("p",null,"We highly recommend checking out the other articles from this series which\nare listed in our ",Object(i.a)("a",{parentName:"p",href:"/docs/memgraph/tutorials/tutorials"},"tutorial overview section"),"."),Object(i.a)("h2",{id:"introduction"},"Introduction"),Object(i.a)("p",null,"This example shows how to implement a simple recommendation system\nwith ",Object(i.a)("inlineCode",{parentName:"p"},"openCypher")," in Memgraph.\nFirst, we will show how to perform simple operations,\nand then we will implement a query for the movie recommendation."),Object(i.a)("h2",{id:"data-model"},"Data model"),Object(i.a)("p",null,"In this example, we will use reduced MovieLens dataset (less than 1000 movies).\nThere are three different types of data: ",Object(i.a)("inlineCode",{parentName:"p"},"Movie"),", ",Object(i.a)("inlineCode",{parentName:"p"},"User")," and ",Object(i.a)("inlineCode",{parentName:"p"},"Genre"),".\nMovies have properties: ",Object(i.a)("inlineCode",{parentName:"p"},"id")," and ",Object(i.a)("inlineCode",{parentName:"p"},"title"),"\nUsers have properties: ",Object(i.a)("inlineCode",{parentName:"p"},"id"),", ",Object(i.a)("inlineCode",{parentName:"p"},"name"),"\nGenres have a property: ",Object(i.a)("inlineCode",{parentName:"p"},"name")),Object(i.a)("p",null,"Each movie can be connected with ",Object(i.a)("inlineCode",{parentName:"p"},":ofGenre")," edge to different genres.\nA user can rate some movie. Rating is modeled with ",Object(i.a)("inlineCode",{parentName:"p"},":Rating")," edge\nand this edge has property ",Object(i.a)("inlineCode",{parentName:"p"},"score")," ","\u2014"," float number between 0 and 5."),Object(i.a)("p",null,Object(i.a)("img",{src:a(283).default})),Object(i.a)("h3",{id:"importing-the-snapshot"},"Importing the snapshot"),Object(i.a)("p",null,"We have prepared a database snapshot for this example, so the user can easily\nimport it when starting Memgraph using the ",Object(i.a)("inlineCode",{parentName:"p"},"--data-directory")," option."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-plaintext"},"sudo -u memgraph \\\n  /usr/lib/memgraph/memgraph --data-directory /usr/share/memgraph/examples/Movie \\\n    --storage-snapshot-interval-sec=0 --storage-wal-enabled=false \\\n    --storage-snapshot-on-exit=false --storage-properties-on-edges=true\n")),Object(i.a)("p",null,"When using Memgraph installed from DEB or RPM package, the currently running\nMemgraph server may need to be stopped before importing the example. The user\ncan do so using the following command:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-plaintext"},"systemctl stop memgraph\n")),Object(i.a)("p",null,"When using Docker, the example can be imported with the following command:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-plaintext"},"docker run -p 7687:7687 \\\n  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \\\n  memgraph --data-directory /usr/share/memgraph/examples/Movie \\\n  --storage-snapshot-interval-sec=0 --storage-wal-enabled=false \\\n  --storage-snapshot-on-exit=false --storage-properties-on-edges=true\n")),Object(i.a)("p",null,"The user should note that any modifications of the database state will persist\nonly during this run of Memgraph."),Object(i.a)("h3",{id:"example-queries"},"Example queries"),Object(i.a)("p",null,"1) List first 10 movies sorted by title"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (m :Movie) RETURN m ORDER BY m.title LIMIT 10;\n")),Object(i.a)("p",null,"2) List last 15 users sorted by name"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u: User) RETURN u ORDER BY u.name DESC LIMIT 15;\n")),Object(i.a)("p",null,"3) List 10 movies that have ",Object(i.a)("em",{parentName:"p"},"Comedy")," and ",Object(i.a)("em",{parentName:"p"},"Action")," genres and sort them by title"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},'MATCH (m :Movie)-[:ofGenre]->(:Genre {name:"Action"}), (m)-[:ofGenre]->(:Genre {name:"Comedy"})\nRETURN m.title ORDER BY m.title LIMIT 10;\n')),Object(i.a)("p",null,"4) Uniqueness constraint for genre:"),Object(i.a)("p",null,"Let's create a new unique constraint:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"CREATE CONSTRAINT ON (g:Genre) ASSERT g.name IS UNIQUE;\n")),Object(i.a)("p",null,"And now we can try to create new ",Object(i.a)("inlineCode",{parentName:"p"},"Genre"),' node with existing `name\': "Comedy":'),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},'CREATE (:Genre {name: "Comedy"});\n')),Object(i.a)("p",null,'This query returns an error because genre "Comedy" already exists.'),Object(i.a)("p",null,"5) Average score for ",Object(i.a)("em",{parentName:"p"},"Star Wars")," movie:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},'MATCH (u :User)-[r :Rating]->(m :Movie {title:"Star Wars"}) RETURN AVG(r.score);\n')),Object(i.a)("p",null,"6) Average scores for first 10 movies:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u :User)-[r :Rating]->(m:Movie) RETURN m.title, AVG(r.score) AS score ORDER BY score DESC LIMIT 10;\n")),Object(i.a)("p",null,"7) Create a new user and rate some movies:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},'CREATE (:User {id:1000, name:"Aladin"});\n')),Object(i.a)("p",null,"Check if new user is created:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},'MATCH (u:User{name:"Aladin"}) RETURN u;\n')),Object(i.a)("p",null,"Rate some movies:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},'MATCH (u:User{id:1000}), (m:Movie{title:"Trois couleurs : Rouge"})\nMERGE (u)-[:Rating{score:3.0}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"20,000 Leagues Under the Sea"})\nMERGE (u)-[:Rating{score:1.0}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"Star Trek: Generations"})\nMERGE (u)-[:Rating{score:0.5}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"Rebecca"})\nMERGE (u)-[:Rating{score:3.0}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"The 39 Steps"})\nMERGE (u)-[:Rating{score:4.5}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"Faster, Pussycat! Kill! Kill!"})\nMERGE (u)-[:Rating{score:3.5}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"Once Were Warriors"})\nMERGE (u)-[:Rating{score:3.5}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"Sleepless in Seattle"})\nMERGE (u)-[:Rating{score:4.0}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"Don Juan DeMarco"})\nMERGE (u)-[:Rating{score:4.0}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"Jack & Sarah"})\nMERGE (u)-[:Rating{score:1.5}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"Mr. Holland\'s Opus"})\nMERGE (u)-[:Rating{score:2.0}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"The Getaway"})\nMERGE (u)-[:Rating{score:3.0}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"Color of Night"})\nMERGE (u)-[:Rating{score:4.0}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"Reality Bites"})\nMERGE (u)-[:Rating{score:2.5}]-(m);\nMATCH (u:User{id:1000}), (m:Movie{title:"Notorious"})\nMERGE (u)-[:Rating{score:3.5}]-(m);\n')),Object(i.a)("p",null,"8) Recommendation system:"),Object(i.a)("p",null,"The idea is to implement simple ",Object(i.a)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Collaborative_filtering"},"memory based collaborative filtering"),"."),Object(i.a)("p",null,"Let's recommend some movies for user Aladin:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u:User{id:1000})-[r:Rating]-(m:Movie)-[other_r:Rating]-(other:User)\nWITH other.id AS other_id,\nAVG(ABS(r.score-other_r.score)) AS similarity, COUNT(*) AS similar_user_count\nWHERE similar_user_count > 2\nWITH other_id ORDER BY similarity LIMIT 10\nWITH COLLECT(other_id) AS similar_user_set\nMATCH (some_movie: Movie)-[fellow_rate:Rating]-(fellow_user:User)\nWHERE fellow_user.id in similar_user_set\nWITH some_movie, AVG(fellow_rate.score) AS prediction_score\nRETURN some_movie.title AS Title, prediction_score ORDER BY prediction_score DESC;\n")),Object(i.a)("p",null,"How does this query work?"),Object(i.a)("p",null,"This query has two parts:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Finding similar users"),Object(i.a)("li",{parentName:"ul"},"Predicting the score for some movie (recommendation)")),Object(i.a)("p",null,"In the first part, we are looking for similar users.\nFirst, we need to define similar users:\nTwo users are considered similar if they tend to give\nsimilar scores to the same movies.\nFor the target user (Aladin) and some other user we are searching\nfor the same movies:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (u:User{id:1000})-[r:Rating]-(m:Movie)-[other_r:Rating]-(other:User);\n")),Object(i.a)("p",null,"But this is not enough for finding similar users. We need to choose users\nwith the same movies and similar scores:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"WITH other.id AS other_id,\nAVG(ABS(r.score-other_r.score)) AS similarity, COUNT(*) AS similar_user_count\nWHERE similar_user_count > 2\nWITH other_id ORDER BY similarity LIMIT 10;\n")),Object(i.a)("p",null,"Here we calculate similarities as the average distance between\ntarget user score and some other user score on the same set of movies.\nThere are two parameters: similarUserCount limit (2)\nand similar user set size limit (10).\nSimilar user count limit is used for filtering users who have\nat least 2 movies in common with the target user.\nSimilar user set size is used to peek top 10 similar users (10 or less)."),Object(i.a)("p",null,"Now we have similar user set. We will use those users to\ncalculate the average score for all movies in the database."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (some_movie: Movie)-[fellow_rate:Rating]-(fellow_user:User)\nWHERE fellow_user.id in similar_user_set\nWITH some_movie, AVG(fellow_rate.score) AS prediction_score\nRETURN some_movie.title AS Title, prediction_score ORDER BY prediction_score DESC;\n")),Object(i.a)("p",null,"We encourage you to play with some parameters, like similar user count limit\nand similar user set size limit.\nYou can also try to use different similarity functions,\nfor example ",Object(i.a)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Euclidean_distance"},"Euclidean distance"),":"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"SQRT(REDUCE(a=0, x in COLLECT((r.score - other_r.score) * (r.score - other_r.score)) | a + x))\nAS similarity;\n")),Object(i.a)("p",null,"Here we use ",Object(i.a)("inlineCode",{parentName:"p"},"REDUCE")," function. Reduce function accumulate list elements\ninto a single result by applying an expression.\nIn our query, this function starts with 0 and sums up squared differences.\n",Object(i.a)("inlineCode",{parentName:"p"},"COLLECT")," function is used for putting squared differences into the list."))}m.isMDXComponent=!0},198:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),m=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=m(a),d=r,h=u["".concat(o,".").concat(d)]||u[d]||p[d]||i;return a?n.a.createElement(h,s(s({ref:t},c),{},{components:a})):n.a.createElement(h,s({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},283:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/movie_metagraph-3c8255437b14fe249a17b70d212785b4.png"}}]);