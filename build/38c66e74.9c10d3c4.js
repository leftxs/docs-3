(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{106:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(7),i=(t(0),t(198)),o={id:"python-api",title:"Query modules Python API",sidebar_label:"Python API"},c={unversionedId:"reference-guide/query-modules/python-api",id:"reference-guide/query-modules/python-api",isDocsHomePage:!1,title:"Query modules Python API",description:"This is the API documentation for mgp.py  which contains definitions of the public Python API provided by Memgraph.",source:"@site/docs/reference-guide/query-modules/python-api.md",slug:"/reference-guide/query-modules/python-api",permalink:"/docs/memgraph/reference-guide/query-modules/python-api",editUrl:"https://github.com/g-despot/docs/tree/main/docs/reference-guide/query-modules/python-api.md",version:"current",sidebar_label:"Python API",sidebar:"memgraph",previous:{title:"Query modules C API",permalink:"/docs/memgraph/reference-guide/query-modules/c-api"},next:{title:"NetworkX",permalink:"/docs/memgraph/reference-guide/networkx"}},l=[{value:"<code>mgp.read_proc(func)</code>",id:"mgpread_procfunc",children:[{value:"Examples",id:"examples",children:[]}]},{value:"<code>mgp._typing_to_cypher_type()</code>",id:"mgp_typing_to_cypher_type",children:[]},{value:"<code>class mgp.Properties(vertex_or_edge)</code>",id:"class-mgppropertiesvertex_or_edge",children:[{value:"<code>get(property_name, default)</code>",id:"getproperty_name-default",children:[]},{value:"<code>items()</code>",id:"items",children:[]},{value:"<code>keys()</code>",id:"keys",children:[]},{value:"<code>values()</code>",id:"values",children:[]}]},{value:"<code>class mgp.Label(name)</code>",id:"class-mgplabelname",children:[{value:"<code>name()</code>",id:"name",children:[]}]},{value:"<code>class mgp.EdgeType(name)</code>",id:"class-mgpedgetypename",children:[{value:"<code>name()</code>",id:"name-1",children:[]}]},{value:"<code>class mgp.Edge(edge)</code>",id:"class-mgpedgeedge",children:[{value:"<code>from_vertex()</code>",id:"from_vertex",children:[]},{value:"<code>id()</code>",id:"id",children:[]},{value:"<code>is_valid()</code>",id:"is_valid",children:[]},{value:"<code>properties()</code>",id:"properties",children:[]},{value:"<code>to_vertex()</code>",id:"to_vertex",children:[]},{value:"<code>type()</code>",id:"type",children:[]}]},{value:"<code>class mgp.Vertex(vertex)</code>",id:"class-mgpvertexvertex",children:[{value:"<code>id()</code>",id:"id-1",children:[]},{value:"<code>in_edges()</code>",id:"in_edges",children:[]},{value:"<code>is_valid()</code>",id:"is_valid-1",children:[]},{value:"<code>labels()</code>",id:"labels",children:[]},{value:"<code>out_edges()</code>",id:"out_edges",children:[]},{value:"<code>properties()</code>",id:"properties-1",children:[]}]},{value:"<code>class mgp.Path(starting_vertex_or_path: Union[&lt;sphinx.ext.autodoc.importer._MockObject object at 0x7f7fbd8d6700&gt;, mgp.Vertex])</code>",id:"class-mgppathstarting_vertex_or_path-unionsphinxextautodocimporter_mockobject-object-at-0x7f7fbd8d6700-mgpvertex",children:[{value:"<code>edges()</code>",id:"edges",children:[]},{value:"<code>expand(edge)</code>",id:"expandedge",children:[]},{value:"<code>is_valid()</code>",id:"is_valid-2",children:[]},{value:"<code>vertices()</code>",id:"vertices",children:[]}]},{value:"<code>class mgp.Record(**kwargs)</code>",id:"class-mgprecordkwargs",children:[{value:"<code>fields()</code>",id:"fields",children:[]}]},{value:"<code>class mgp.Vertices(graph)</code>",id:"class-mgpverticesgraph",children:[{value:"<code>is_valid()</code>",id:"is_valid-3",children:[]}]},{value:"<code>class mgp.Graph(graph)</code>",id:"class-mgpgraphgraph",children:[{value:"<code>get_vertex_by_id(vertex_id)</code>",id:"get_vertex_by_idvertex_id",children:[]},{value:"<code>is_valid()</code>",id:"is_valid-4",children:[]},{value:"<code>vertices()</code>",id:"vertices-1",children:[]}]},{value:"<code>class mgp.ProcCtx(graph)</code>",id:"class-mgpprocctxgraph",children:[{value:"<code>check_must_abort()</code>",id:"check_must_abort",children:[]},{value:"<code>graph()</code>",id:"graph",children:[]},{value:"<code>is_valid()</code>",id:"is_valid-5",children:[]},{value:"<code>must_abort()</code>",id:"must_abort",children:[]}]},{value:"<code>class mgp.Deprecated(type_)</code>",id:"class-mgpdeprecatedtype_",children:[{value:"<code>field_type()</code>",id:"field_type",children:[]}]},{value:"<code>class mgp.UnsupportedTypingError(type_)</code>",id:"class-mgpunsupportedtypingerrortype_",children:[]},{value:"<code>class mgp.AbortError()</code>",id:"class-mgpaborterror",children:[]},{value:"<code>class mgp.InvalidContextError()</code>",id:"class-mgpinvalidcontexterror",children:[]}],d={toc:l};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(i.a)("p",null,"This is the API documentation for ",Object(i.a)("inlineCode",{parentName:"p"},"mgp.py"),"  which contains definitions of the public Python API provided by Memgraph.\nIn essence, this is a wrapper around the ",Object(i.a)("strong",{parentName:"p"},Object(i.a)("a",{parentName:"strong",href:"/docs/memgraph/reference-guide/query-modules/c-api"},"C API")),". This source file can be found in the Memgraph installation directory,\nunder ",Object(i.a)("inlineCode",{parentName:"p"},"python_support"),". On the standard Debian installation, this will be under ",Object(i.a)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/python_support"),"."),Object(i.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.a)("div",{parentName:"div",className:"admonition-heading"},Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",{parentName:"h5",className:"admonition-icon"},Object(i.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.a)("div",{parentName:"div",className:"admonition-content"},Object(i.a)("p",{parentName:"div"},Object(i.a)("strong",{parentName:"p"},"NOTE:")," This part of the documentation is still under development. An updated version will soon be available."))),Object(i.a)("h2",{id:"mgpread_procfunc"},Object(i.a)("inlineCode",{parentName:"h2"},"mgp.read_proc(func)")),Object(i.a)("p",null,"Register func as a a read-only procedure of the current module."),Object(i.a)("p",null,"read_proc is meant to be used as a decorator function to register module\nprocedures. The registered func needs to be a callable which optionally\ntakes ProcCtx as the first argument. Other arguments of func will be\nbound to values passed in the cypherQuery. The full signature of func\nneeds to be annotated with types. The return type must be\nRecord(field_name=type, \u2026) and the procedure must produce either a\ncomplete Record or None. To mark a field as deprecated, use\nRecord(field_name=Deprecated(type), \u2026). Multiple records can be\nproduced by returning an iterable of them. Registering generator functions\nis currently not supported."),Object(i.a)("h3",{id:"examples"},"Examples"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-python"},"    import mgp\n\n    @mgp.read_proc\n    def procedure(context: mgp.ProcCtx,\n                required_arg: mgp.Nullable[mgp.Any],\n                optional_arg: mgp.Nullable[mgp.Any] = None\n                ) -> mgp.Record(result=str, args=list):\n        args = [required_arg, optional_arg]\n        # Multiple rows can be produced by returning an iterable of mgp.Record\n        return mgp.Record(args=args, result='Hello World!')\n")),Object(i.a)("p",null,"The example procedure above returns 2 fields: args and result."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"args is a copy of arguments passed to the procedure.")),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"result is the result of this procedure, a \u201cHello World!\u201d string.")),Object(i.a)("p",null,"Any errors can be reported by raising an Exception."),Object(i.a)("p",null,"The procedure can be invoked in openCypher using the following calls:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},"CALL example.procedure(1, 2) YIELD args, result;\nCALL example.procedure(1) YIELD args, result;\n")),Object(i.a)("p",null,"Naturally, you may pass in different arguments or yield less fields."),Object(i.a)("h2",{id:"mgp_typing_to_cypher_type"},Object(i.a)("inlineCode",{parentName:"h2"},"mgp._typing_to_cypher_type()")),Object(i.a)("p",null,"Convert typing annotation to a _mgp.CypherType instance."),Object(i.a)("h2",{id:"class-mgppropertiesvertex_or_edge"},Object(i.a)("inlineCode",{parentName:"h2"},"class mgp.Properties(vertex_or_edge)")),Object(i.a)("p",null,"Bases: ",Object(i.a)("inlineCode",{parentName:"p"},"object")),Object(i.a)("p",null,"A collection of properties either on a Vertex or an Edge."),Object(i.a)("h3",{id:"getproperty_name-default"},Object(i.a)("inlineCode",{parentName:"h3"},"get(property_name, default)")),Object(i.a)("p",null,"Get the value of a property with the given name or return default."),Object(i.a)("p",null,"Raise InvalidContextError."),Object(i.a)("h3",{id:"items"},Object(i.a)("inlineCode",{parentName:"h3"},"items()")),Object(i.a)("p",null,"Raise InvalidContextError."),Object(i.a)("h3",{id:"keys"},Object(i.a)("inlineCode",{parentName:"h3"},"keys()")),Object(i.a)("p",null,"Iterate over property names."),Object(i.a)("p",null,"Raise InvalidContextError."),Object(i.a)("h3",{id:"values"},Object(i.a)("inlineCode",{parentName:"h3"},"values()")),Object(i.a)("p",null,"Iterate over property values."),Object(i.a)("p",null,"Raise InvalidContextError."),Object(i.a)("h2",{id:"class-mgplabelname"},Object(i.a)("inlineCode",{parentName:"h2"},"class mgp.Label(name)")),Object(i.a)("p",null,"Bases: ",Object(i.a)("inlineCode",{parentName:"p"},"object")),Object(i.a)("p",null,"Label of a Vertex."),Object(i.a)("h3",{id:"name"},Object(i.a)("inlineCode",{parentName:"h3"},"name()")),Object(i.a)("h2",{id:"class-mgpedgetypename"},Object(i.a)("inlineCode",{parentName:"h2"},"class mgp.EdgeType(name)")),Object(i.a)("p",null,"Bases: ",Object(i.a)("inlineCode",{parentName:"p"},"object")),Object(i.a)("p",null,"Type of an Edge."),Object(i.a)("h3",{id:"name-1"},Object(i.a)("inlineCode",{parentName:"h3"},"name()")),Object(i.a)("h2",{id:"class-mgpedgeedge"},Object(i.a)("inlineCode",{parentName:"h2"},"class mgp.Edge(edge)")),Object(i.a)("p",null,"Bases: ",Object(i.a)("inlineCode",{parentName:"p"},"object")),Object(i.a)("p",null,"Edge in the graph database."),Object(i.a)("p",null,"Access to an Edge is only valid during a single execution of a procedure in\na query. You should not globally store an instance of an Edge. Using an\ninvalid Edge instance will raise InvalidContextError."),Object(i.a)("h3",{id:"from_vertex"},Object(i.a)("inlineCode",{parentName:"h3"},"from_vertex()")),Object(i.a)("p",null,"Raise InvalidContextError."),Object(i.a)("h3",{id:"id"},Object(i.a)("inlineCode",{parentName:"h3"},"id()")),Object(i.a)("p",null,"Raise InvalidContextError."),Object(i.a)("h3",{id:"is_valid"},Object(i.a)("inlineCode",{parentName:"h3"},"is_valid()")),Object(i.a)("p",null,"Return True if self is in valid context and may be used."),Object(i.a)("h3",{id:"properties"},Object(i.a)("inlineCode",{parentName:"h3"},"properties()")),Object(i.a)("p",null,"Raise InvalidContextError."),Object(i.a)("h3",{id:"to_vertex"},Object(i.a)("inlineCode",{parentName:"h3"},"to_vertex()")),Object(i.a)("p",null,"Raise InvalidContextError."),Object(i.a)("h3",{id:"type"},Object(i.a)("inlineCode",{parentName:"h3"},"type()")),Object(i.a)("p",null,"Raise InvalidContextError."),Object(i.a)("h2",{id:"class-mgpvertexvertex"},Object(i.a)("inlineCode",{parentName:"h2"},"class mgp.Vertex(vertex)")),Object(i.a)("p",null,"Bases: ",Object(i.a)("inlineCode",{parentName:"p"},"object")),Object(i.a)("p",null,"Vertex in the graph database."),Object(i.a)("p",null,"Access to a Vertex is only valid during a single execution of a procedure\nin a query. You should not globally store an instance of a Vertex. Using an\ninvalid Vertex instance will raise InvalidContextError."),Object(i.a)("h3",{id:"id-1"},Object(i.a)("inlineCode",{parentName:"h3"},"id()")),Object(i.a)("p",null,"Raise InvalidContextError."),Object(i.a)("h3",{id:"in_edges"},Object(i.a)("inlineCode",{parentName:"h3"},"in_edges()")),Object(i.a)("p",null,"Raise InvalidContextError."),Object(i.a)("h3",{id:"is_valid-1"},Object(i.a)("inlineCode",{parentName:"h3"},"is_valid()")),Object(i.a)("p",null,"Return True if self is in valid context and may be used"),Object(i.a)("h3",{id:"labels"},Object(i.a)("inlineCode",{parentName:"h3"},"labels()")),Object(i.a)("p",null,"Raise InvalidContextError."),Object(i.a)("h3",{id:"out_edges"},Object(i.a)("inlineCode",{parentName:"h3"},"out_edges()")),Object(i.a)("p",null,"Raise InvalidContextError."),Object(i.a)("h3",{id:"properties-1"},Object(i.a)("inlineCode",{parentName:"h3"},"properties()")),Object(i.a)("p",null,"Raise InvalidContextError."),Object(i.a)("h2",{id:"class-mgppathstarting_vertex_or_path-unionsphinxextautodocimporter_mockobject-object-at-0x7f7fbd8d6700-mgpvertex"},Object(i.a)("inlineCode",{parentName:"h2"},"class mgp.Path(starting_vertex_or_path: Union[<sphinx.ext.autodoc.importer._MockObject object at 0x7f7fbd8d6700>, mgp.Vertex])")),Object(i.a)("p",null,"Bases: ",Object(i.a)("inlineCode",{parentName:"p"},"object")),Object(i.a)("p",null,"Path containing Vertex and Edge instances."),Object(i.a)("h3",{id:"edges"},Object(i.a)("inlineCode",{parentName:"h3"},"edges()")),Object(i.a)("p",null,"Edges ordered from the start to the end of the path."),Object(i.a)("p",null,"Raise InvalidContextError if using an invalid Path instance."),Object(i.a)("h3",{id:"expandedge"},Object(i.a)("inlineCode",{parentName:"h3"},"expand(edge)")),Object(i.a)("p",null,"Append an edge continuing from the last vertex on the path."),Object(i.a)("p",null,"The last vertex on the path will become the other endpoint of the given\nedge, as continued from the current last vertex."),Object(i.a)("p",null,"Raise ValueError if the current last vertex in the path is not part of\nthe given edge.\nRaise InvalidContextError if using an invalid Path instance or if\npassed in edge is invalid."),Object(i.a)("h3",{id:"is_valid-2"},Object(i.a)("inlineCode",{parentName:"h3"},"is_valid()")),Object(i.a)("h3",{id:"vertices"},Object(i.a)("inlineCode",{parentName:"h3"},"vertices()")),Object(i.a)("p",null,"Vertices ordered from the start to the end of the path."),Object(i.a)("p",null,"Raise InvalidContextError if using an invalid Path instance."),Object(i.a)("h2",{id:"class-mgprecordkwargs"},Object(i.a)("inlineCode",{parentName:"h2"},"class mgp.Record(**kwargs)")),Object(i.a)("p",null,"Bases: ",Object(i.a)("inlineCode",{parentName:"p"},"object")),Object(i.a)("p",null,"Represents a record of resulting field values."),Object(i.a)("h3",{id:"fields"},Object(i.a)("inlineCode",{parentName:"h3"},"fields()")),Object(i.a)("h2",{id:"class-mgpverticesgraph"},Object(i.a)("inlineCode",{parentName:"h2"},"class mgp.Vertices(graph)")),Object(i.a)("p",null,"Bases: ",Object(i.a)("inlineCode",{parentName:"p"},"object")),Object(i.a)("p",null,"Iterable over vertices in a graph."),Object(i.a)("h3",{id:"is_valid-3"},Object(i.a)("inlineCode",{parentName:"h3"},"is_valid()")),Object(i.a)("p",null,"Return True if self is in valid context and may be used."),Object(i.a)("h2",{id:"class-mgpgraphgraph"},Object(i.a)("inlineCode",{parentName:"h2"},"class mgp.Graph(graph)")),Object(i.a)("p",null,"Bases: ",Object(i.a)("inlineCode",{parentName:"p"},"object")),Object(i.a)("p",null,"State of the graph database in current ProcCtx."),Object(i.a)("h3",{id:"get_vertex_by_idvertex_id"},Object(i.a)("inlineCode",{parentName:"h3"},"get_vertex_by_id(vertex_id)")),Object(i.a)("p",null,"Return the Vertex corresponding to given vertex_id from the graph."),Object(i.a)("p",null,"Access to a Vertex is only valid during a single execution of a\nprocedure in a query. You should not globally store the returned\nVertex."),Object(i.a)("p",null,"Raise IndexError if unable to find the given vertex_id.\nRaise InvalidContextError if context is invalid."),Object(i.a)("h3",{id:"is_valid-4"},Object(i.a)("inlineCode",{parentName:"h3"},"is_valid()")),Object(i.a)("p",null,"Return True if self is in valid context and may be used."),Object(i.a)("h3",{id:"vertices-1"},Object(i.a)("inlineCode",{parentName:"h3"},"vertices()")),Object(i.a)("p",null,"All vertices in the graph."),Object(i.a)("p",null,"Access to a Vertex is only valid during a single execution of a\nprocedure in a query. You should not globally store the returned Vertex\ninstances."),Object(i.a)("p",null,"Raise InvalidContextError if context is invalid."),Object(i.a)("h2",{id:"class-mgpprocctxgraph"},Object(i.a)("inlineCode",{parentName:"h2"},"class mgp.ProcCtx(graph)")),Object(i.a)("p",null,"Bases: ",Object(i.a)("inlineCode",{parentName:"p"},"object")),Object(i.a)("p",null,"Context of a procedure being executed."),Object(i.a)("p",null,"Access to a ProcCtx is only valid during a single execution of a procedure\nin a query. You should not globally store a ProcCtx instance."),Object(i.a)("h3",{id:"check_must_abort"},Object(i.a)("inlineCode",{parentName:"h3"},"check_must_abort()")),Object(i.a)("h3",{id:"graph"},Object(i.a)("inlineCode",{parentName:"h3"},"graph()")),Object(i.a)("p",null,"Raise InvalidContextError if context is invalid."),Object(i.a)("h3",{id:"is_valid-5"},Object(i.a)("inlineCode",{parentName:"h3"},"is_valid()")),Object(i.a)("h3",{id:"must_abort"},Object(i.a)("inlineCode",{parentName:"h3"},"must_abort()")),Object(i.a)("h2",{id:"class-mgpdeprecatedtype_"},Object(i.a)("inlineCode",{parentName:"h2"},"class mgp.Deprecated(type_)")),Object(i.a)("p",null,"Bases: ",Object(i.a)("inlineCode",{parentName:"p"},"object")),Object(i.a)("p",null,"Annotate a resulting Record\u2019s field as deprecated."),Object(i.a)("h3",{id:"field_type"},Object(i.a)("inlineCode",{parentName:"h3"},"field_type()")),Object(i.a)("h2",{id:"class-mgpunsupportedtypingerrortype_"},Object(i.a)("inlineCode",{parentName:"h2"},"class mgp.UnsupportedTypingError(type_)")),Object(i.a)("p",null,"Bases: ",Object(i.a)("inlineCode",{parentName:"p"},"Exception")),Object(i.a)("p",null,"Signals a typing annotation is not supported as a _mgp.CypherType."),Object(i.a)("h2",{id:"class-mgpaborterror"},Object(i.a)("inlineCode",{parentName:"h2"},"class mgp.AbortError()")),Object(i.a)("p",null,"Bases: ",Object(i.a)("inlineCode",{parentName:"p"},"Exception")),Object(i.a)("p",null,"Signals that the procedure was asked to abort its execution."),Object(i.a)("h2",{id:"class-mgpinvalidcontexterror"},Object(i.a)("inlineCode",{parentName:"h2"},"class mgp.InvalidContextError()")),Object(i.a)("p",null,"Bases: ",Object(i.a)("inlineCode",{parentName:"p"},"Exception")),Object(i.a)("p",null,"Signals using a graph element instance outside of the registered procedure."))}p.isMDXComponent=!0},198:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t(0),r=t.n(n);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),p=function(e){var a=r.a.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=n,h=u["".concat(o,".").concat(b)]||u[b]||s[b]||i;return t?r.a.createElement(h,c(c({ref:a},d),{},{components:t})):r.a.createElement(h,c({ref:a},d))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);