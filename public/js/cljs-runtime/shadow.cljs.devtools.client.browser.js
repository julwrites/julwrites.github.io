goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35291 = arguments.length;
var i__4731__auto___35292 = (0);
while(true){
if((i__4731__auto___35292 < len__4730__auto___35291)){
args__4736__auto__.push((arguments[i__4731__auto___35292]));

var G__35293 = (i__4731__auto___35292 + (1));
i__4731__auto___35292 = G__35293;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35128){
var G__35129 = cljs.core.first(seq35128);
var seq35128__$1 = cljs.core.next(seq35128);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35129,seq35128__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__35139){
var map__35141 = p__35139;
var map__35141__$1 = (((((!((map__35141 == null))))?(((((map__35141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35141):map__35141);
var src = map__35141__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35141__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35141__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35146 = cljs.core.seq(sources);
var chunk__35147 = null;
var count__35148 = (0);
var i__35149 = (0);
while(true){
if((i__35149 < count__35148)){
var map__35154 = chunk__35147.cljs$core$IIndexed$_nth$arity$2(null,i__35149);
var map__35154__$1 = (((((!((map__35154 == null))))?(((((map__35154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35154):map__35154);
var src = map__35154__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35154__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35154__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35154__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35154__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35294 = seq__35146;
var G__35295 = chunk__35147;
var G__35296 = count__35148;
var G__35297 = (i__35149 + (1));
seq__35146 = G__35294;
chunk__35147 = G__35295;
count__35148 = G__35296;
i__35149 = G__35297;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35146);
if(temp__5720__auto__){
var seq__35146__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35146__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35146__$1);
var G__35298 = cljs.core.chunk_rest(seq__35146__$1);
var G__35299 = c__4550__auto__;
var G__35300 = cljs.core.count(c__4550__auto__);
var G__35301 = (0);
seq__35146 = G__35298;
chunk__35147 = G__35299;
count__35148 = G__35300;
i__35149 = G__35301;
continue;
} else {
var map__35156 = cljs.core.first(seq__35146__$1);
var map__35156__$1 = (((((!((map__35156 == null))))?(((((map__35156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35156):map__35156);
var src = map__35156__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35156__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35156__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35156__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35156__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__35302 = cljs.core.next(seq__35146__$1);
var G__35303 = null;
var G__35304 = (0);
var G__35305 = (0);
seq__35146 = G__35302;
chunk__35147 = G__35303;
count__35148 = G__35304;
i__35149 = G__35305;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35160 = cljs.core.seq(js_requires);
var chunk__35161 = null;
var count__35162 = (0);
var i__35163 = (0);
while(true){
if((i__35163 < count__35162)){
var js_ns = chunk__35161.cljs$core$IIndexed$_nth$arity$2(null,i__35163);
var require_str_35306 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35306);


var G__35307 = seq__35160;
var G__35308 = chunk__35161;
var G__35309 = count__35162;
var G__35310 = (i__35163 + (1));
seq__35160 = G__35307;
chunk__35161 = G__35308;
count__35162 = G__35309;
i__35163 = G__35310;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35160);
if(temp__5720__auto__){
var seq__35160__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35160__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35160__$1);
var G__35311 = cljs.core.chunk_rest(seq__35160__$1);
var G__35312 = c__4550__auto__;
var G__35313 = cljs.core.count(c__4550__auto__);
var G__35314 = (0);
seq__35160 = G__35311;
chunk__35161 = G__35312;
count__35162 = G__35313;
i__35163 = G__35314;
continue;
} else {
var js_ns = cljs.core.first(seq__35160__$1);
var require_str_35315 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35315);


var G__35316 = cljs.core.next(seq__35160__$1);
var G__35317 = null;
var G__35318 = (0);
var G__35319 = (0);
seq__35160 = G__35316;
chunk__35161 = G__35317;
count__35162 = G__35318;
i__35163 = G__35319;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35165 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35165) : callback.call(null,G__35165));
} else {
var G__35166 = shadow.cljs.devtools.client.env.files_url();
var G__35167 = ((function (G__35166){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__35166))
;
var G__35168 = "POST";
var G__35169 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__35170 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35166,G__35167,G__35168,G__35169,G__35170);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35173){
var map__35174 = p__35173;
var map__35174__$1 = (((((!((map__35174 == null))))?(((((map__35174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35174):map__35174);
var msg = map__35174__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35174__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35174__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35176 = info;
var map__35176__$1 = (((((!((map__35176 == null))))?(((((map__35176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35176):map__35176);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35176__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35176__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__35176,map__35176__$1,sources,compiled,map__35174,map__35174__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35178(s__35179){
return (new cljs.core.LazySeq(null,((function (map__35176,map__35176__$1,sources,compiled,map__35174,map__35174__$1,msg,info,reload_info){
return (function (){
var s__35179__$1 = s__35179;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__35179__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__35184 = cljs.core.first(xs__6277__auto__);
var map__35184__$1 = (((((!((map__35184 == null))))?(((((map__35184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35184):map__35184);
var src = map__35184__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35184__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35184__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__35179__$1,map__35184,map__35184__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35176,map__35176__$1,sources,compiled,map__35174,map__35174__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35178_$_iter__35180(s__35181){
return (new cljs.core.LazySeq(null,((function (s__35179__$1,map__35184,map__35184__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35176,map__35176__$1,sources,compiled,map__35174,map__35174__$1,msg,info,reload_info){
return (function (){
var s__35181__$1 = s__35181;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__35181__$1);
if(temp__5720__auto____$1){
var s__35181__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35181__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35181__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35183 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35182 = (0);
while(true){
if((i__35182 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35182);
cljs.core.chunk_append(b__35183,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35320 = (i__35182 + (1));
i__35182 = G__35320;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35183),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35178_$_iter__35180(cljs.core.chunk_rest(s__35181__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35183),null);
}
} else {
var warning = cljs.core.first(s__35181__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35178_$_iter__35180(cljs.core.rest(s__35181__$2)));
}
} else {
return null;
}
break;
}
});})(s__35179__$1,map__35184,map__35184__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35176,map__35176__$1,sources,compiled,map__35174,map__35174__$1,msg,info,reload_info))
,null,null));
});})(s__35179__$1,map__35184,map__35184__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__35176,map__35176__$1,sources,compiled,map__35174,map__35174__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35178(cljs.core.rest(s__35179__$1)));
} else {
var G__35321 = cljs.core.rest(s__35179__$1);
s__35179__$1 = G__35321;
continue;
}
} else {
var G__35322 = cljs.core.rest(s__35179__$1);
s__35179__$1 = G__35322;
continue;
}
} else {
return null;
}
break;
}
});})(map__35176,map__35176__$1,sources,compiled,map__35174,map__35174__$1,msg,info,reload_info))
,null,null));
});})(map__35176,map__35176__$1,sources,compiled,map__35174,map__35174__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__35186_35323 = cljs.core.seq(warnings);
var chunk__35187_35324 = null;
var count__35188_35325 = (0);
var i__35189_35326 = (0);
while(true){
if((i__35189_35326 < count__35188_35325)){
var map__35194_35327 = chunk__35187_35324.cljs$core$IIndexed$_nth$arity$2(null,i__35189_35326);
var map__35194_35328__$1 = (((((!((map__35194_35327 == null))))?(((((map__35194_35327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35194_35327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35194_35327):map__35194_35327);
var w_35329 = map__35194_35328__$1;
var msg_35330__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35194_35328__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35194_35328__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35194_35328__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35194_35328__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35333)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35331),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35332),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35330__$1)].join(''));


var G__35334 = seq__35186_35323;
var G__35335 = chunk__35187_35324;
var G__35336 = count__35188_35325;
var G__35337 = (i__35189_35326 + (1));
seq__35186_35323 = G__35334;
chunk__35187_35324 = G__35335;
count__35188_35325 = G__35336;
i__35189_35326 = G__35337;
continue;
} else {
var temp__5720__auto___35338 = cljs.core.seq(seq__35186_35323);
if(temp__5720__auto___35338){
var seq__35186_35339__$1 = temp__5720__auto___35338;
if(cljs.core.chunked_seq_QMARK_(seq__35186_35339__$1)){
var c__4550__auto___35340 = cljs.core.chunk_first(seq__35186_35339__$1);
var G__35341 = cljs.core.chunk_rest(seq__35186_35339__$1);
var G__35342 = c__4550__auto___35340;
var G__35343 = cljs.core.count(c__4550__auto___35340);
var G__35344 = (0);
seq__35186_35323 = G__35341;
chunk__35187_35324 = G__35342;
count__35188_35325 = G__35343;
i__35189_35326 = G__35344;
continue;
} else {
var map__35196_35345 = cljs.core.first(seq__35186_35339__$1);
var map__35196_35346__$1 = (((((!((map__35196_35345 == null))))?(((((map__35196_35345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35196_35345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35196_35345):map__35196_35345);
var w_35347 = map__35196_35346__$1;
var msg_35348__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35196_35346__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35196_35346__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35196_35346__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35196_35346__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35351)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35349),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35350),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35348__$1)].join(''));


var G__35352 = cljs.core.next(seq__35186_35339__$1);
var G__35353 = null;
var G__35354 = (0);
var G__35355 = (0);
seq__35186_35323 = G__35352;
chunk__35187_35324 = G__35353;
count__35188_35325 = G__35354;
i__35189_35326 = G__35355;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35176,map__35176__$1,sources,compiled,warnings,map__35174,map__35174__$1,msg,info,reload_info){
return (function (p__35198){
var map__35199 = p__35198;
var map__35199__$1 = (((((!((map__35199 == null))))?(((((map__35199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35199):map__35199);
var src = map__35199__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35199__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35199__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__35176,map__35176__$1,sources,compiled,warnings,map__35174,map__35174__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35176,map__35176__$1,sources,compiled,warnings,map__35174,map__35174__$1,msg,info,reload_info){
return (function (p__35202){
var map__35203 = p__35202;
var map__35203__$1 = (((((!((map__35203 == null))))?(((((map__35203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35203):map__35203);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35203__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__35176,map__35176__$1,sources,compiled,warnings,map__35174,map__35174__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35176,map__35176__$1,sources,compiled,warnings,map__35174,map__35174__$1,msg,info,reload_info){
return (function (p__35205){
var map__35206 = p__35205;
var map__35206__$1 = (((((!((map__35206 == null))))?(((((map__35206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35206):map__35206);
var rc = map__35206__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35206__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__35176,map__35176__$1,sources,compiled,warnings,map__35174,map__35174__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__35176,map__35176__$1,sources,compiled,warnings,map__35174,map__35174__$1,msg,info,reload_info){
return (function (p1__35172_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35172_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__35176,map__35176__$1,sources,compiled,warnings,map__35174,map__35174__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35209){
var map__35210 = p__35209;
var map__35210__$1 = (((((!((map__35210 == null))))?(((((map__35210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35210):map__35210);
var msg = map__35210__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35210__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35212 = cljs.core.seq(updates);
var chunk__35214 = null;
var count__35215 = (0);
var i__35216 = (0);
while(true){
if((i__35216 < count__35215)){
var path = chunk__35214.cljs$core$IIndexed$_nth$arity$2(null,i__35216);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35242_35356 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35245_35357 = null;
var count__35246_35358 = (0);
var i__35247_35359 = (0);
while(true){
if((i__35247_35359 < count__35246_35358)){
var node_35360 = chunk__35245_35357.cljs$core$IIndexed$_nth$arity$2(null,i__35247_35359);
var path_match_35361 = shadow.cljs.devtools.client.browser.match_paths(node_35360.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35361)){
var new_link_35362 = (function (){var G__35252 = node_35360.cloneNode(true);
G__35252.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35361),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35252;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35361], 0));

goog.dom.insertSiblingAfter(new_link_35362,node_35360);

goog.dom.removeNode(node_35360);


var G__35363 = seq__35242_35356;
var G__35364 = chunk__35245_35357;
var G__35365 = count__35246_35358;
var G__35366 = (i__35247_35359 + (1));
seq__35242_35356 = G__35363;
chunk__35245_35357 = G__35364;
count__35246_35358 = G__35365;
i__35247_35359 = G__35366;
continue;
} else {
var G__35367 = seq__35242_35356;
var G__35368 = chunk__35245_35357;
var G__35369 = count__35246_35358;
var G__35370 = (i__35247_35359 + (1));
seq__35242_35356 = G__35367;
chunk__35245_35357 = G__35368;
count__35246_35358 = G__35369;
i__35247_35359 = G__35370;
continue;
}
} else {
var temp__5720__auto___35371 = cljs.core.seq(seq__35242_35356);
if(temp__5720__auto___35371){
var seq__35242_35372__$1 = temp__5720__auto___35371;
if(cljs.core.chunked_seq_QMARK_(seq__35242_35372__$1)){
var c__4550__auto___35373 = cljs.core.chunk_first(seq__35242_35372__$1);
var G__35374 = cljs.core.chunk_rest(seq__35242_35372__$1);
var G__35375 = c__4550__auto___35373;
var G__35376 = cljs.core.count(c__4550__auto___35373);
var G__35377 = (0);
seq__35242_35356 = G__35374;
chunk__35245_35357 = G__35375;
count__35246_35358 = G__35376;
i__35247_35359 = G__35377;
continue;
} else {
var node_35378 = cljs.core.first(seq__35242_35372__$1);
var path_match_35379 = shadow.cljs.devtools.client.browser.match_paths(node_35378.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35379)){
var new_link_35380 = (function (){var G__35253 = node_35378.cloneNode(true);
G__35253.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35379),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35253;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35379], 0));

goog.dom.insertSiblingAfter(new_link_35380,node_35378);

goog.dom.removeNode(node_35378);


var G__35381 = cljs.core.next(seq__35242_35372__$1);
var G__35382 = null;
var G__35383 = (0);
var G__35384 = (0);
seq__35242_35356 = G__35381;
chunk__35245_35357 = G__35382;
count__35246_35358 = G__35383;
i__35247_35359 = G__35384;
continue;
} else {
var G__35385 = cljs.core.next(seq__35242_35372__$1);
var G__35386 = null;
var G__35387 = (0);
var G__35388 = (0);
seq__35242_35356 = G__35385;
chunk__35245_35357 = G__35386;
count__35246_35358 = G__35387;
i__35247_35359 = G__35388;
continue;
}
}
} else {
}
}
break;
}


var G__35389 = seq__35212;
var G__35390 = chunk__35214;
var G__35391 = count__35215;
var G__35392 = (i__35216 + (1));
seq__35212 = G__35389;
chunk__35214 = G__35390;
count__35215 = G__35391;
i__35216 = G__35392;
continue;
} else {
var G__35393 = seq__35212;
var G__35394 = chunk__35214;
var G__35395 = count__35215;
var G__35396 = (i__35216 + (1));
seq__35212 = G__35393;
chunk__35214 = G__35394;
count__35215 = G__35395;
i__35216 = G__35396;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35212);
if(temp__5720__auto__){
var seq__35212__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35212__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35212__$1);
var G__35397 = cljs.core.chunk_rest(seq__35212__$1);
var G__35398 = c__4550__auto__;
var G__35399 = cljs.core.count(c__4550__auto__);
var G__35400 = (0);
seq__35212 = G__35397;
chunk__35214 = G__35398;
count__35215 = G__35399;
i__35216 = G__35400;
continue;
} else {
var path = cljs.core.first(seq__35212__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35254_35401 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35257_35402 = null;
var count__35258_35403 = (0);
var i__35259_35404 = (0);
while(true){
if((i__35259_35404 < count__35258_35403)){
var node_35405 = chunk__35257_35402.cljs$core$IIndexed$_nth$arity$2(null,i__35259_35404);
var path_match_35406 = shadow.cljs.devtools.client.browser.match_paths(node_35405.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35406)){
var new_link_35407 = (function (){var G__35264 = node_35405.cloneNode(true);
G__35264.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35406),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35264;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35406], 0));

goog.dom.insertSiblingAfter(new_link_35407,node_35405);

goog.dom.removeNode(node_35405);


var G__35408 = seq__35254_35401;
var G__35409 = chunk__35257_35402;
var G__35410 = count__35258_35403;
var G__35411 = (i__35259_35404 + (1));
seq__35254_35401 = G__35408;
chunk__35257_35402 = G__35409;
count__35258_35403 = G__35410;
i__35259_35404 = G__35411;
continue;
} else {
var G__35412 = seq__35254_35401;
var G__35413 = chunk__35257_35402;
var G__35414 = count__35258_35403;
var G__35415 = (i__35259_35404 + (1));
seq__35254_35401 = G__35412;
chunk__35257_35402 = G__35413;
count__35258_35403 = G__35414;
i__35259_35404 = G__35415;
continue;
}
} else {
var temp__5720__auto___35416__$1 = cljs.core.seq(seq__35254_35401);
if(temp__5720__auto___35416__$1){
var seq__35254_35417__$1 = temp__5720__auto___35416__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35254_35417__$1)){
var c__4550__auto___35418 = cljs.core.chunk_first(seq__35254_35417__$1);
var G__35419 = cljs.core.chunk_rest(seq__35254_35417__$1);
var G__35420 = c__4550__auto___35418;
var G__35421 = cljs.core.count(c__4550__auto___35418);
var G__35422 = (0);
seq__35254_35401 = G__35419;
chunk__35257_35402 = G__35420;
count__35258_35403 = G__35421;
i__35259_35404 = G__35422;
continue;
} else {
var node_35423 = cljs.core.first(seq__35254_35417__$1);
var path_match_35424 = shadow.cljs.devtools.client.browser.match_paths(node_35423.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35424)){
var new_link_35425 = (function (){var G__35265 = node_35423.cloneNode(true);
G__35265.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35424),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35265;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35424], 0));

goog.dom.insertSiblingAfter(new_link_35425,node_35423);

goog.dom.removeNode(node_35423);


var G__35426 = cljs.core.next(seq__35254_35417__$1);
var G__35427 = null;
var G__35428 = (0);
var G__35429 = (0);
seq__35254_35401 = G__35426;
chunk__35257_35402 = G__35427;
count__35258_35403 = G__35428;
i__35259_35404 = G__35429;
continue;
} else {
var G__35430 = cljs.core.next(seq__35254_35417__$1);
var G__35431 = null;
var G__35432 = (0);
var G__35433 = (0);
seq__35254_35401 = G__35430;
chunk__35257_35402 = G__35431;
count__35258_35403 = G__35432;
i__35259_35404 = G__35433;
continue;
}
}
} else {
}
}
break;
}


var G__35434 = cljs.core.next(seq__35212__$1);
var G__35435 = null;
var G__35436 = (0);
var G__35437 = (0);
seq__35212 = G__35434;
chunk__35214 = G__35435;
count__35215 = G__35436;
i__35216 = G__35437;
continue;
} else {
var G__35438 = cljs.core.next(seq__35212__$1);
var G__35439 = null;
var G__35440 = (0);
var G__35441 = (0);
seq__35212 = G__35438;
chunk__35214 = G__35439;
count__35215 = G__35440;
i__35216 = G__35441;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35266){
var map__35267 = p__35266;
var map__35267__$1 = (((((!((map__35267 == null))))?(((((map__35267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35267):map__35267);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35267__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35267__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__35267,map__35267__$1,id,js){
return (function (){
return eval(js);
});})(map__35267,map__35267__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35269){
var map__35270 = p__35269;
var map__35270__$1 = (((((!((map__35270 == null))))?(((((map__35270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35270.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35270):map__35270);
var msg = map__35270__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35270__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35270__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35270__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35270__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35270,map__35270__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__35272){
var map__35273 = p__35272;
var map__35273__$1 = (((((!((map__35273 == null))))?(((((map__35273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35273):map__35273);
var src = map__35273__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35273__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__35270,map__35270__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__35270,map__35270__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__35270,map__35270__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35275){
var map__35276 = p__35275;
var map__35276__$1 = (((((!((map__35276 == null))))?(((((map__35276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35276):map__35276);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35276__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35276__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__35276,map__35276__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__35276,map__35276__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35278){
var map__35279 = p__35278;
var map__35279__$1 = (((((!((map__35279 == null))))?(((((map__35279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35279):map__35279);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35279__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35279__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35281){
var map__35282 = p__35281;
var map__35282__$1 = (((((!((map__35282 == null))))?(((((map__35282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35282):map__35282);
var msg = map__35282__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35282__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35284 = type;
var G__35284__$1 = (((G__35284 instanceof cljs.core.Keyword))?G__35284.fqn:null);
switch (G__35284__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__35285 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__35286 = ((function (G__35285){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__35285))
;
var G__35287 = "POST";
var G__35288 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__35289 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35285,G__35286,G__35287,G__35288,G__35289);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e35290){var e = e35290;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___35443 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___35443)){
var s_35444 = temp__5720__auto___35443;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_35444.onclose = ((function (s_35444,temp__5720__auto___35443){
return (function (e){
return null;
});})(s_35444,temp__5720__auto___35443))
;

s_35444.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
