goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33088 = coll;
var G__33089 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33088,G__33089) : shadow.dom.lazy_native_coll_seq.call(null,G__33088,G__33089));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33131 = arguments.length;
switch (G__33131) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33146 = arguments.length;
switch (G__33146) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33154 = arguments.length;
switch (G__33154) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33164 = arguments.length;
switch (G__33164) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33176 = arguments.length;
switch (G__33176) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__33180 = document;
var G__33181 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33180,G__33181);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__33182 = shadow.dom.dom_node(parent);
var G__33183 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33182,G__33183);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__33186 = shadow.dom.dom_node(el);
var G__33187 = cls;
return goog.dom.classlist.add(G__33186,G__33187);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__33189 = shadow.dom.dom_node(el);
var G__33190 = cls;
return goog.dom.classlist.remove(G__33189,G__33190);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33193 = arguments.length;
switch (G__33193) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__33196 = shadow.dom.dom_node(el);
var G__33197 = cls;
return goog.dom.classlist.toggle(G__33196,G__33197);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33199){if((e33199 instanceof Object)){
var e = e33199;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33199;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33206 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33207 = null;
var count__33208 = (0);
var i__33209 = (0);
while(true){
if((i__33209 < count__33208)){
var el = chunk__33207.cljs$core$IIndexed$_nth$arity$2(null,i__33209);
var handler_33831__$1 = ((function (seq__33206,chunk__33207,count__33208,i__33209,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33206,chunk__33207,count__33208,i__33209,el))
;
var G__33221_33832 = el;
var G__33222_33833 = cljs.core.name(ev);
var G__33223_33834 = handler_33831__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33221_33832,G__33222_33833,G__33223_33834) : shadow.dom.dom_listen.call(null,G__33221_33832,G__33222_33833,G__33223_33834));


var G__33835 = seq__33206;
var G__33836 = chunk__33207;
var G__33837 = count__33208;
var G__33838 = (i__33209 + (1));
seq__33206 = G__33835;
chunk__33207 = G__33836;
count__33208 = G__33837;
i__33209 = G__33838;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33206);
if(temp__5720__auto__){
var seq__33206__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33206__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33206__$1);
var G__33839 = cljs.core.chunk_rest(seq__33206__$1);
var G__33840 = c__4550__auto__;
var G__33841 = cljs.core.count(c__4550__auto__);
var G__33842 = (0);
seq__33206 = G__33839;
chunk__33207 = G__33840;
count__33208 = G__33841;
i__33209 = G__33842;
continue;
} else {
var el = cljs.core.first(seq__33206__$1);
var handler_33843__$1 = ((function (seq__33206,chunk__33207,count__33208,i__33209,el,seq__33206__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33206,chunk__33207,count__33208,i__33209,el,seq__33206__$1,temp__5720__auto__))
;
var G__33233_33844 = el;
var G__33234_33845 = cljs.core.name(ev);
var G__33235_33846 = handler_33843__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33233_33844,G__33234_33845,G__33235_33846) : shadow.dom.dom_listen.call(null,G__33233_33844,G__33234_33845,G__33235_33846));


var G__33847 = cljs.core.next(seq__33206__$1);
var G__33848 = null;
var G__33849 = (0);
var G__33850 = (0);
seq__33206 = G__33847;
chunk__33207 = G__33848;
count__33208 = G__33849;
i__33209 = G__33850;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33239 = arguments.length;
switch (G__33239) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__33243 = shadow.dom.dom_node(el);
var G__33244 = cljs.core.name(ev);
var G__33245 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33243,G__33244,G__33245) : shadow.dom.dom_listen.call(null,G__33243,G__33244,G__33245));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__33246 = shadow.dom.dom_node(el);
var G__33247 = cljs.core.name(ev);
var G__33248 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__33246,G__33247,G__33248) : shadow.dom.dom_listen_remove.call(null,G__33246,G__33247,G__33248));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33250 = cljs.core.seq(events);
var chunk__33251 = null;
var count__33252 = (0);
var i__33253 = (0);
while(true){
if((i__33253 < count__33252)){
var vec__33260 = chunk__33251.cljs$core$IIndexed$_nth$arity$2(null,i__33253);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33260,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33260,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33856 = seq__33250;
var G__33857 = chunk__33251;
var G__33858 = count__33252;
var G__33859 = (i__33253 + (1));
seq__33250 = G__33856;
chunk__33251 = G__33857;
count__33252 = G__33858;
i__33253 = G__33859;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33250);
if(temp__5720__auto__){
var seq__33250__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33250__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33250__$1);
var G__33860 = cljs.core.chunk_rest(seq__33250__$1);
var G__33861 = c__4550__auto__;
var G__33862 = cljs.core.count(c__4550__auto__);
var G__33863 = (0);
seq__33250 = G__33860;
chunk__33251 = G__33861;
count__33252 = G__33862;
i__33253 = G__33863;
continue;
} else {
var vec__33264 = cljs.core.first(seq__33250__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33264,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33264,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33864 = cljs.core.next(seq__33250__$1);
var G__33865 = null;
var G__33866 = (0);
var G__33867 = (0);
seq__33250 = G__33864;
chunk__33251 = G__33865;
count__33252 = G__33866;
i__33253 = G__33867;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33270 = cljs.core.seq(styles);
var chunk__33271 = null;
var count__33272 = (0);
var i__33273 = (0);
while(true){
if((i__33273 < count__33272)){
var vec__33292 = chunk__33271.cljs$core$IIndexed$_nth$arity$2(null,i__33273);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33292,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33292,(1),null);
var G__33295_33869 = dom;
var G__33296_33870 = cljs.core.name(k);
var G__33297_33871 = (((v == null))?"":v);
goog.style.setStyle(G__33295_33869,G__33296_33870,G__33297_33871);


var G__33872 = seq__33270;
var G__33873 = chunk__33271;
var G__33874 = count__33272;
var G__33875 = (i__33273 + (1));
seq__33270 = G__33872;
chunk__33271 = G__33873;
count__33272 = G__33874;
i__33273 = G__33875;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33270);
if(temp__5720__auto__){
var seq__33270__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33270__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33270__$1);
var G__33876 = cljs.core.chunk_rest(seq__33270__$1);
var G__33877 = c__4550__auto__;
var G__33878 = cljs.core.count(c__4550__auto__);
var G__33879 = (0);
seq__33270 = G__33876;
chunk__33271 = G__33877;
count__33272 = G__33878;
i__33273 = G__33879;
continue;
} else {
var vec__33299 = cljs.core.first(seq__33270__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33299,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33299,(1),null);
var G__33303_33881 = dom;
var G__33304_33882 = cljs.core.name(k);
var G__33305_33883 = (((v == null))?"":v);
goog.style.setStyle(G__33303_33881,G__33304_33882,G__33305_33883);


var G__33886 = cljs.core.next(seq__33270__$1);
var G__33887 = null;
var G__33888 = (0);
var G__33889 = (0);
seq__33270 = G__33886;
chunk__33271 = G__33887;
count__33272 = G__33888;
i__33273 = G__33889;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33311_33890 = key;
var G__33311_33891__$1 = (((G__33311_33890 instanceof cljs.core.Keyword))?G__33311_33890.fqn:null);
switch (G__33311_33891__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33899 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_33899,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_33899,"aria-");
}
})())){
el.setAttribute(ks_33899,value);
} else {
(el[ks_33899] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__33318 = shadow.dom.dom_node(el);
var G__33319 = cls;
return goog.dom.classlist.contains(G__33318,G__33319);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33327){
var map__33328 = p__33327;
var map__33328__$1 = (((((!((map__33328 == null))))?(((((map__33328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33328):map__33328);
var props = map__33328__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33328__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33331 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33331,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33331,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33331,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33334 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33334,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33334;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33336 = arguments.length;
switch (G__33336) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33340){
var vec__33341 = p__33340;
var seq__33342 = cljs.core.seq(vec__33341);
var first__33343 = cljs.core.first(seq__33342);
var seq__33342__$1 = cljs.core.next(seq__33342);
var nn = first__33343;
var first__33343__$1 = cljs.core.first(seq__33342__$1);
var seq__33342__$2 = cljs.core.next(seq__33342__$1);
var np = first__33343__$1;
var nc = seq__33342__$2;
var node = vec__33341;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33344 = nn;
var G__33345 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33344,G__33345) : create_fn.call(null,G__33344,G__33345));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33347 = nn;
var G__33348 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33347,G__33348) : create_fn.call(null,G__33347,G__33348));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33350 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33350,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33350,(1),null);
var seq__33353_33930 = cljs.core.seq(node_children);
var chunk__33354_33931 = null;
var count__33355_33932 = (0);
var i__33356_33933 = (0);
while(true){
if((i__33356_33933 < count__33355_33932)){
var child_struct_33934 = chunk__33354_33931.cljs$core$IIndexed$_nth$arity$2(null,i__33356_33933);
var children_33935 = shadow.dom.dom_node(child_struct_33934);
if(cljs.core.seq_QMARK_(children_33935)){
var seq__33383_33936 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33935));
var chunk__33385_33937 = null;
var count__33386_33938 = (0);
var i__33387_33939 = (0);
while(true){
if((i__33387_33939 < count__33386_33938)){
var child_33941 = chunk__33385_33937.cljs$core$IIndexed$_nth$arity$2(null,i__33387_33939);
if(cljs.core.truth_(child_33941)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33941);


var G__33942 = seq__33383_33936;
var G__33943 = chunk__33385_33937;
var G__33944 = count__33386_33938;
var G__33945 = (i__33387_33939 + (1));
seq__33383_33936 = G__33942;
chunk__33385_33937 = G__33943;
count__33386_33938 = G__33944;
i__33387_33939 = G__33945;
continue;
} else {
var G__33946 = seq__33383_33936;
var G__33947 = chunk__33385_33937;
var G__33948 = count__33386_33938;
var G__33949 = (i__33387_33939 + (1));
seq__33383_33936 = G__33946;
chunk__33385_33937 = G__33947;
count__33386_33938 = G__33948;
i__33387_33939 = G__33949;
continue;
}
} else {
var temp__5720__auto___33951 = cljs.core.seq(seq__33383_33936);
if(temp__5720__auto___33951){
var seq__33383_33952__$1 = temp__5720__auto___33951;
if(cljs.core.chunked_seq_QMARK_(seq__33383_33952__$1)){
var c__4550__auto___33953 = cljs.core.chunk_first(seq__33383_33952__$1);
var G__33954 = cljs.core.chunk_rest(seq__33383_33952__$1);
var G__33955 = c__4550__auto___33953;
var G__33956 = cljs.core.count(c__4550__auto___33953);
var G__33957 = (0);
seq__33383_33936 = G__33954;
chunk__33385_33937 = G__33955;
count__33386_33938 = G__33956;
i__33387_33939 = G__33957;
continue;
} else {
var child_33958 = cljs.core.first(seq__33383_33952__$1);
if(cljs.core.truth_(child_33958)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33958);


var G__33963 = cljs.core.next(seq__33383_33952__$1);
var G__33964 = null;
var G__33965 = (0);
var G__33966 = (0);
seq__33383_33936 = G__33963;
chunk__33385_33937 = G__33964;
count__33386_33938 = G__33965;
i__33387_33939 = G__33966;
continue;
} else {
var G__33968 = cljs.core.next(seq__33383_33952__$1);
var G__33969 = null;
var G__33970 = (0);
var G__33971 = (0);
seq__33383_33936 = G__33968;
chunk__33385_33937 = G__33969;
count__33386_33938 = G__33970;
i__33387_33939 = G__33971;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33935);
}


var G__33972 = seq__33353_33930;
var G__33973 = chunk__33354_33931;
var G__33974 = count__33355_33932;
var G__33975 = (i__33356_33933 + (1));
seq__33353_33930 = G__33972;
chunk__33354_33931 = G__33973;
count__33355_33932 = G__33974;
i__33356_33933 = G__33975;
continue;
} else {
var temp__5720__auto___33976 = cljs.core.seq(seq__33353_33930);
if(temp__5720__auto___33976){
var seq__33353_33977__$1 = temp__5720__auto___33976;
if(cljs.core.chunked_seq_QMARK_(seq__33353_33977__$1)){
var c__4550__auto___33978 = cljs.core.chunk_first(seq__33353_33977__$1);
var G__33979 = cljs.core.chunk_rest(seq__33353_33977__$1);
var G__33980 = c__4550__auto___33978;
var G__33981 = cljs.core.count(c__4550__auto___33978);
var G__33982 = (0);
seq__33353_33930 = G__33979;
chunk__33354_33931 = G__33980;
count__33355_33932 = G__33981;
i__33356_33933 = G__33982;
continue;
} else {
var child_struct_33983 = cljs.core.first(seq__33353_33977__$1);
var children_33985 = shadow.dom.dom_node(child_struct_33983);
if(cljs.core.seq_QMARK_(children_33985)){
var seq__33389_33986 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33985));
var chunk__33391_33987 = null;
var count__33392_33988 = (0);
var i__33393_33989 = (0);
while(true){
if((i__33393_33989 < count__33392_33988)){
var child_33991 = chunk__33391_33987.cljs$core$IIndexed$_nth$arity$2(null,i__33393_33989);
if(cljs.core.truth_(child_33991)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33991);


var G__33992 = seq__33389_33986;
var G__33993 = chunk__33391_33987;
var G__33994 = count__33392_33988;
var G__33995 = (i__33393_33989 + (1));
seq__33389_33986 = G__33992;
chunk__33391_33987 = G__33993;
count__33392_33988 = G__33994;
i__33393_33989 = G__33995;
continue;
} else {
var G__33997 = seq__33389_33986;
var G__33998 = chunk__33391_33987;
var G__33999 = count__33392_33988;
var G__34000 = (i__33393_33989 + (1));
seq__33389_33986 = G__33997;
chunk__33391_33987 = G__33998;
count__33392_33988 = G__33999;
i__33393_33989 = G__34000;
continue;
}
} else {
var temp__5720__auto___34002__$1 = cljs.core.seq(seq__33389_33986);
if(temp__5720__auto___34002__$1){
var seq__33389_34003__$1 = temp__5720__auto___34002__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33389_34003__$1)){
var c__4550__auto___34004 = cljs.core.chunk_first(seq__33389_34003__$1);
var G__34005 = cljs.core.chunk_rest(seq__33389_34003__$1);
var G__34006 = c__4550__auto___34004;
var G__34007 = cljs.core.count(c__4550__auto___34004);
var G__34008 = (0);
seq__33389_33986 = G__34005;
chunk__33391_33987 = G__34006;
count__33392_33988 = G__34007;
i__33393_33989 = G__34008;
continue;
} else {
var child_34012 = cljs.core.first(seq__33389_34003__$1);
if(cljs.core.truth_(child_34012)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34012);


var G__34014 = cljs.core.next(seq__33389_34003__$1);
var G__34015 = null;
var G__34016 = (0);
var G__34017 = (0);
seq__33389_33986 = G__34014;
chunk__33391_33987 = G__34015;
count__33392_33988 = G__34016;
i__33393_33989 = G__34017;
continue;
} else {
var G__34019 = cljs.core.next(seq__33389_34003__$1);
var G__34020 = null;
var G__34021 = (0);
var G__34022 = (0);
seq__33389_33986 = G__34019;
chunk__33391_33987 = G__34020;
count__33392_33988 = G__34021;
i__33393_33989 = G__34022;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33985);
}


var G__34023 = cljs.core.next(seq__33353_33977__$1);
var G__34024 = null;
var G__34025 = (0);
var G__34026 = (0);
seq__33353_33930 = G__34023;
chunk__33354_33931 = G__34024;
count__33355_33932 = G__34025;
i__33356_33933 = G__34026;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__33406 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__33406);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33408 = cljs.core.seq(node);
var chunk__33409 = null;
var count__33410 = (0);
var i__33411 = (0);
while(true){
if((i__33411 < count__33410)){
var n = chunk__33409.cljs$core$IIndexed$_nth$arity$2(null,i__33411);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34038 = seq__33408;
var G__34039 = chunk__33409;
var G__34040 = count__33410;
var G__34041 = (i__33411 + (1));
seq__33408 = G__34038;
chunk__33409 = G__34039;
count__33410 = G__34040;
i__33411 = G__34041;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33408);
if(temp__5720__auto__){
var seq__33408__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33408__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33408__$1);
var G__34044 = cljs.core.chunk_rest(seq__33408__$1);
var G__34045 = c__4550__auto__;
var G__34046 = cljs.core.count(c__4550__auto__);
var G__34047 = (0);
seq__33408 = G__34044;
chunk__33409 = G__34045;
count__33410 = G__34046;
i__33411 = G__34047;
continue;
} else {
var n = cljs.core.first(seq__33408__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34049 = cljs.core.next(seq__33408__$1);
var G__34050 = null;
var G__34051 = (0);
var G__34052 = (0);
seq__33408 = G__34049;
chunk__33409 = G__34050;
count__33410 = G__34051;
i__33411 = G__34052;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__33417 = shadow.dom.dom_node(new$);
var G__33418 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__33417,G__33418);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33424 = arguments.length;
switch (G__33424) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33428 = arguments.length;
switch (G__33428) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33441 = arguments.length;
switch (G__33441) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34068 = arguments.length;
var i__4731__auto___34069 = (0);
while(true){
if((i__4731__auto___34069 < len__4730__auto___34068)){
args__4736__auto__.push((arguments[i__4731__auto___34069]));

var G__34070 = (i__4731__auto___34069 + (1));
i__4731__auto___34069 = G__34070;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33456_34074 = cljs.core.seq(nodes);
var chunk__33457_34075 = null;
var count__33458_34076 = (0);
var i__33459_34077 = (0);
while(true){
if((i__33459_34077 < count__33458_34076)){
var node_34080 = chunk__33457_34075.cljs$core$IIndexed$_nth$arity$2(null,i__33459_34077);
fragment.appendChild(shadow.dom._to_dom(node_34080));


var G__34082 = seq__33456_34074;
var G__34083 = chunk__33457_34075;
var G__34084 = count__33458_34076;
var G__34085 = (i__33459_34077 + (1));
seq__33456_34074 = G__34082;
chunk__33457_34075 = G__34083;
count__33458_34076 = G__34084;
i__33459_34077 = G__34085;
continue;
} else {
var temp__5720__auto___34087 = cljs.core.seq(seq__33456_34074);
if(temp__5720__auto___34087){
var seq__33456_34089__$1 = temp__5720__auto___34087;
if(cljs.core.chunked_seq_QMARK_(seq__33456_34089__$1)){
var c__4550__auto___34090 = cljs.core.chunk_first(seq__33456_34089__$1);
var G__34091 = cljs.core.chunk_rest(seq__33456_34089__$1);
var G__34092 = c__4550__auto___34090;
var G__34093 = cljs.core.count(c__4550__auto___34090);
var G__34094 = (0);
seq__33456_34074 = G__34091;
chunk__33457_34075 = G__34092;
count__33458_34076 = G__34093;
i__33459_34077 = G__34094;
continue;
} else {
var node_34095 = cljs.core.first(seq__33456_34089__$1);
fragment.appendChild(shadow.dom._to_dom(node_34095));


var G__34096 = cljs.core.next(seq__33456_34089__$1);
var G__34097 = null;
var G__34098 = (0);
var G__34099 = (0);
seq__33456_34074 = G__34096;
chunk__33457_34075 = G__34097;
count__33458_34076 = G__34098;
i__33459_34077 = G__34099;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq33451){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33451));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33468_34102 = cljs.core.seq(scripts);
var chunk__33469_34103 = null;
var count__33470_34104 = (0);
var i__33471_34105 = (0);
while(true){
if((i__33471_34105 < count__33470_34104)){
var vec__33479_34106 = chunk__33469_34103.cljs$core$IIndexed$_nth$arity$2(null,i__33471_34105);
var script_tag_34107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33479_34106,(0),null);
var script_body_34108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33479_34106,(1),null);
eval(script_body_34108);


var G__34114 = seq__33468_34102;
var G__34115 = chunk__33469_34103;
var G__34116 = count__33470_34104;
var G__34117 = (i__33471_34105 + (1));
seq__33468_34102 = G__34114;
chunk__33469_34103 = G__34115;
count__33470_34104 = G__34116;
i__33471_34105 = G__34117;
continue;
} else {
var temp__5720__auto___34121 = cljs.core.seq(seq__33468_34102);
if(temp__5720__auto___34121){
var seq__33468_34122__$1 = temp__5720__auto___34121;
if(cljs.core.chunked_seq_QMARK_(seq__33468_34122__$1)){
var c__4550__auto___34123 = cljs.core.chunk_first(seq__33468_34122__$1);
var G__34124 = cljs.core.chunk_rest(seq__33468_34122__$1);
var G__34125 = c__4550__auto___34123;
var G__34126 = cljs.core.count(c__4550__auto___34123);
var G__34127 = (0);
seq__33468_34102 = G__34124;
chunk__33469_34103 = G__34125;
count__33470_34104 = G__34126;
i__33471_34105 = G__34127;
continue;
} else {
var vec__33483_34129 = cljs.core.first(seq__33468_34122__$1);
var script_tag_34130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33483_34129,(0),null);
var script_body_34131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33483_34129,(1),null);
eval(script_body_34131);


var G__34132 = cljs.core.next(seq__33468_34122__$1);
var G__34133 = null;
var G__34134 = (0);
var G__34135 = (0);
seq__33468_34102 = G__34132;
chunk__33469_34103 = G__34133;
count__33470_34104 = G__34134;
i__33471_34105 = G__34135;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__33487){
var vec__33488 = p__33487;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33488,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33488,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__33492 = shadow.dom.dom_node(el);
var G__33493 = cls;
return goog.dom.getAncestorByClass(G__33492,G__33493);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33495 = arguments.length;
switch (G__33495) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__33496 = shadow.dom.dom_node(el);
var G__33497 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__33496,G__33497);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__33498 = shadow.dom.dom_node(el);
var G__33499 = cljs.core.name(tag);
var G__33500 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__33498,G__33499,G__33500);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__33501 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__33501);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__33502 = shadow.dom.dom_node(dom);
var G__33503 = value;
return goog.dom.forms.setValue(G__33502,G__33503);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33507 = cljs.core.seq(style_keys);
var chunk__33508 = null;
var count__33509 = (0);
var i__33510 = (0);
while(true){
if((i__33510 < count__33509)){
var it = chunk__33508.cljs$core$IIndexed$_nth$arity$2(null,i__33510);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34154 = seq__33507;
var G__34155 = chunk__33508;
var G__34156 = count__33509;
var G__34157 = (i__33510 + (1));
seq__33507 = G__34154;
chunk__33508 = G__34155;
count__33509 = G__34156;
i__33510 = G__34157;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__33507);
if(temp__5720__auto__){
var seq__33507__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33507__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33507__$1);
var G__34159 = cljs.core.chunk_rest(seq__33507__$1);
var G__34160 = c__4550__auto__;
var G__34161 = cljs.core.count(c__4550__auto__);
var G__34162 = (0);
seq__33507 = G__34159;
chunk__33508 = G__34160;
count__33509 = G__34161;
i__33510 = G__34162;
continue;
} else {
var it = cljs.core.first(seq__33507__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34163 = cljs.core.next(seq__33507__$1);
var G__34164 = null;
var G__34165 = (0);
var G__34166 = (0);
seq__33507 = G__34163;
chunk__33508 = G__34164;
count__33509 = G__34165;
i__33510 = G__34166;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33515,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33519 = k33515;
var G__33519__$1 = (((G__33519 instanceof cljs.core.Keyword))?G__33519.fqn:null);
switch (G__33519__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33515,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33520){
var vec__33521 = p__33520;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33521,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33521,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33514){
var self__ = this;
var G__33514__$1 = this;
return (new cljs.core.RecordIter((0),G__33514__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33524 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33524(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33516,other33517){
var self__ = this;
var this33516__$1 = this;
return (((!((other33517 == null)))) && ((this33516__$1.constructor === other33517.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33516__$1.x,other33517.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33516__$1.y,other33517.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33516__$1.__extmap,other33517.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33514){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33526 = cljs.core.keyword_identical_QMARK_;
var expr__33527 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33530 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__33531 = expr__33527;
return (pred__33526.cljs$core$IFn$_invoke$arity$2 ? pred__33526.cljs$core$IFn$_invoke$arity$2(G__33530,G__33531) : pred__33526.call(null,G__33530,G__33531));
})())){
return (new shadow.dom.Coordinate(G__33514,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33532 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__33533 = expr__33527;
return (pred__33526.cljs$core$IFn$_invoke$arity$2 ? pred__33526.cljs$core$IFn$_invoke$arity$2(G__33532,G__33533) : pred__33526.call(null,G__33532,G__33533));
})())){
return (new shadow.dom.Coordinate(self__.x,G__33514,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33514),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33514){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33514,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33518){
var extmap__4424__auto__ = (function (){var G__33545 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33518,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33518)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33545);
} else {
return G__33545;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33518),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33518),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__33547 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__33547);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__33550 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__33550);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33552 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33552);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33556,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33567 = k33556;
var G__33567__$1 = (((G__33567 instanceof cljs.core.Keyword))?G__33567.fqn:null);
switch (G__33567__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33556,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33571){
var vec__33572 = p__33571;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33572,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33572,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33555){
var self__ = this;
var G__33555__$1 = this;
return (new cljs.core.RecordIter((0),G__33555__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33585 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33585(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33557,other33558){
var self__ = this;
var this33557__$1 = this;
return (((!((other33558 == null)))) && ((this33557__$1.constructor === other33558.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33557__$1.w,other33558.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33557__$1.h,other33558.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33557__$1.__extmap,other33558.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33555){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33622 = cljs.core.keyword_identical_QMARK_;
var expr__33623 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33625 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33626 = expr__33623;
return (pred__33622.cljs$core$IFn$_invoke$arity$2 ? pred__33622.cljs$core$IFn$_invoke$arity$2(G__33625,G__33626) : pred__33622.call(null,G__33625,G__33626));
})())){
return (new shadow.dom.Size(G__33555,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33632 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33633 = expr__33623;
return (pred__33622.cljs$core$IFn$_invoke$arity$2 ? pred__33622.cljs$core$IFn$_invoke$arity$2(G__33632,G__33633) : pred__33622.call(null,G__33632,G__33633));
})())){
return (new shadow.dom.Size(self__.w,G__33555,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33555),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33555){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33555,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33559){
var extmap__4424__auto__ = (function (){var G__33639 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33559,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33559)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33639);
} else {
return G__33639;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33559),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33559),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33644 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33644);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__34215 = (i + (1));
var G__34216 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34215;
ret = G__34216;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33652){
var vec__33653 = p__33652;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33653,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33653,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33657 = arguments.length;
switch (G__33657) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33659_34225 = new_node;
var G__33660_34226 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33659_34225,G__33660_34226);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33661_34227 = new_node;
var G__33662_34228 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33661_34227,G__33662_34228);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34229 = ps;
var G__34230 = (i + (1));
el__$1 = G__34229;
i = G__34230;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33664 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33664);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__33671 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33671);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33673 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33673);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33677 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33677,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33677,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33677,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33682_34233 = cljs.core.seq(props);
var chunk__33683_34234 = null;
var count__33684_34235 = (0);
var i__33685_34236 = (0);
while(true){
if((i__33685_34236 < count__33684_34235)){
var vec__33695_34237 = chunk__33683_34234.cljs$core$IIndexed$_nth$arity$2(null,i__33685_34236);
var k_34238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33695_34237,(0),null);
var v_34239 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33695_34237,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_34238);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34238),v_34239);


var G__34240 = seq__33682_34233;
var G__34241 = chunk__33683_34234;
var G__34242 = count__33684_34235;
var G__34243 = (i__33685_34236 + (1));
seq__33682_34233 = G__34240;
chunk__33683_34234 = G__34241;
count__33684_34235 = G__34242;
i__33685_34236 = G__34243;
continue;
} else {
var temp__5720__auto___34244 = cljs.core.seq(seq__33682_34233);
if(temp__5720__auto___34244){
var seq__33682_34245__$1 = temp__5720__auto___34244;
if(cljs.core.chunked_seq_QMARK_(seq__33682_34245__$1)){
var c__4550__auto___34246 = cljs.core.chunk_first(seq__33682_34245__$1);
var G__34247 = cljs.core.chunk_rest(seq__33682_34245__$1);
var G__34248 = c__4550__auto___34246;
var G__34249 = cljs.core.count(c__4550__auto___34246);
var G__34250 = (0);
seq__33682_34233 = G__34247;
chunk__33683_34234 = G__34248;
count__33684_34235 = G__34249;
i__33685_34236 = G__34250;
continue;
} else {
var vec__33699_34251 = cljs.core.first(seq__33682_34245__$1);
var k_34252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33699_34251,(0),null);
var v_34253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33699_34251,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_34252);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34252),v_34253);


var G__34254 = cljs.core.next(seq__33682_34245__$1);
var G__34255 = null;
var G__34256 = (0);
var G__34257 = (0);
seq__33682_34233 = G__34254;
chunk__33683_34234 = G__34255;
count__33684_34235 = G__34256;
i__33685_34236 = G__34257;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33706 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33706,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33706,(1),null);
var seq__33710_34258 = cljs.core.seq(node_children);
var chunk__33712_34259 = null;
var count__33713_34260 = (0);
var i__33714_34261 = (0);
while(true){
if((i__33714_34261 < count__33713_34260)){
var child_struct_34262 = chunk__33712_34259.cljs$core$IIndexed$_nth$arity$2(null,i__33714_34261);
if((!((child_struct_34262 == null)))){
if(typeof child_struct_34262 === 'string'){
var text_34263 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34263),child_struct_34262].join(''));
} else {
var children_34264 = shadow.dom.svg_node(child_struct_34262);
if(cljs.core.seq_QMARK_(children_34264)){
var seq__33738_34265 = cljs.core.seq(children_34264);
var chunk__33740_34266 = null;
var count__33741_34267 = (0);
var i__33742_34268 = (0);
while(true){
if((i__33742_34268 < count__33741_34267)){
var child_34269 = chunk__33740_34266.cljs$core$IIndexed$_nth$arity$2(null,i__33742_34268);
if(cljs.core.truth_(child_34269)){
node.appendChild(child_34269);


var G__34270 = seq__33738_34265;
var G__34271 = chunk__33740_34266;
var G__34272 = count__33741_34267;
var G__34273 = (i__33742_34268 + (1));
seq__33738_34265 = G__34270;
chunk__33740_34266 = G__34271;
count__33741_34267 = G__34272;
i__33742_34268 = G__34273;
continue;
} else {
var G__34274 = seq__33738_34265;
var G__34275 = chunk__33740_34266;
var G__34276 = count__33741_34267;
var G__34277 = (i__33742_34268 + (1));
seq__33738_34265 = G__34274;
chunk__33740_34266 = G__34275;
count__33741_34267 = G__34276;
i__33742_34268 = G__34277;
continue;
}
} else {
var temp__5720__auto___34278 = cljs.core.seq(seq__33738_34265);
if(temp__5720__auto___34278){
var seq__33738_34279__$1 = temp__5720__auto___34278;
if(cljs.core.chunked_seq_QMARK_(seq__33738_34279__$1)){
var c__4550__auto___34280 = cljs.core.chunk_first(seq__33738_34279__$1);
var G__34281 = cljs.core.chunk_rest(seq__33738_34279__$1);
var G__34282 = c__4550__auto___34280;
var G__34283 = cljs.core.count(c__4550__auto___34280);
var G__34284 = (0);
seq__33738_34265 = G__34281;
chunk__33740_34266 = G__34282;
count__33741_34267 = G__34283;
i__33742_34268 = G__34284;
continue;
} else {
var child_34285 = cljs.core.first(seq__33738_34279__$1);
if(cljs.core.truth_(child_34285)){
node.appendChild(child_34285);


var G__34286 = cljs.core.next(seq__33738_34279__$1);
var G__34287 = null;
var G__34288 = (0);
var G__34289 = (0);
seq__33738_34265 = G__34286;
chunk__33740_34266 = G__34287;
count__33741_34267 = G__34288;
i__33742_34268 = G__34289;
continue;
} else {
var G__34290 = cljs.core.next(seq__33738_34279__$1);
var G__34291 = null;
var G__34292 = (0);
var G__34293 = (0);
seq__33738_34265 = G__34290;
chunk__33740_34266 = G__34291;
count__33741_34267 = G__34292;
i__33742_34268 = G__34293;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34264);
}
}


var G__34298 = seq__33710_34258;
var G__34299 = chunk__33712_34259;
var G__34300 = count__33713_34260;
var G__34301 = (i__33714_34261 + (1));
seq__33710_34258 = G__34298;
chunk__33712_34259 = G__34299;
count__33713_34260 = G__34300;
i__33714_34261 = G__34301;
continue;
} else {
var G__34303 = seq__33710_34258;
var G__34304 = chunk__33712_34259;
var G__34305 = count__33713_34260;
var G__34306 = (i__33714_34261 + (1));
seq__33710_34258 = G__34303;
chunk__33712_34259 = G__34304;
count__33713_34260 = G__34305;
i__33714_34261 = G__34306;
continue;
}
} else {
var temp__5720__auto___34308 = cljs.core.seq(seq__33710_34258);
if(temp__5720__auto___34308){
var seq__33710_34309__$1 = temp__5720__auto___34308;
if(cljs.core.chunked_seq_QMARK_(seq__33710_34309__$1)){
var c__4550__auto___34310 = cljs.core.chunk_first(seq__33710_34309__$1);
var G__34311 = cljs.core.chunk_rest(seq__33710_34309__$1);
var G__34312 = c__4550__auto___34310;
var G__34313 = cljs.core.count(c__4550__auto___34310);
var G__34314 = (0);
seq__33710_34258 = G__34311;
chunk__33712_34259 = G__34312;
count__33713_34260 = G__34313;
i__33714_34261 = G__34314;
continue;
} else {
var child_struct_34315 = cljs.core.first(seq__33710_34309__$1);
if((!((child_struct_34315 == null)))){
if(typeof child_struct_34315 === 'string'){
var text_34316 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34316),child_struct_34315].join(''));
} else {
var children_34317 = shadow.dom.svg_node(child_struct_34315);
if(cljs.core.seq_QMARK_(children_34317)){
var seq__33747_34318 = cljs.core.seq(children_34317);
var chunk__33749_34319 = null;
var count__33750_34320 = (0);
var i__33751_34321 = (0);
while(true){
if((i__33751_34321 < count__33750_34320)){
var child_34322 = chunk__33749_34319.cljs$core$IIndexed$_nth$arity$2(null,i__33751_34321);
if(cljs.core.truth_(child_34322)){
node.appendChild(child_34322);


var G__34323 = seq__33747_34318;
var G__34324 = chunk__33749_34319;
var G__34325 = count__33750_34320;
var G__34326 = (i__33751_34321 + (1));
seq__33747_34318 = G__34323;
chunk__33749_34319 = G__34324;
count__33750_34320 = G__34325;
i__33751_34321 = G__34326;
continue;
} else {
var G__34328 = seq__33747_34318;
var G__34329 = chunk__33749_34319;
var G__34330 = count__33750_34320;
var G__34331 = (i__33751_34321 + (1));
seq__33747_34318 = G__34328;
chunk__33749_34319 = G__34329;
count__33750_34320 = G__34330;
i__33751_34321 = G__34331;
continue;
}
} else {
var temp__5720__auto___34333__$1 = cljs.core.seq(seq__33747_34318);
if(temp__5720__auto___34333__$1){
var seq__33747_34334__$1 = temp__5720__auto___34333__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33747_34334__$1)){
var c__4550__auto___34335 = cljs.core.chunk_first(seq__33747_34334__$1);
var G__34336 = cljs.core.chunk_rest(seq__33747_34334__$1);
var G__34337 = c__4550__auto___34335;
var G__34338 = cljs.core.count(c__4550__auto___34335);
var G__34339 = (0);
seq__33747_34318 = G__34336;
chunk__33749_34319 = G__34337;
count__33750_34320 = G__34338;
i__33751_34321 = G__34339;
continue;
} else {
var child_34340 = cljs.core.first(seq__33747_34334__$1);
if(cljs.core.truth_(child_34340)){
node.appendChild(child_34340);


var G__34341 = cljs.core.next(seq__33747_34334__$1);
var G__34342 = null;
var G__34343 = (0);
var G__34344 = (0);
seq__33747_34318 = G__34341;
chunk__33749_34319 = G__34342;
count__33750_34320 = G__34343;
i__33751_34321 = G__34344;
continue;
} else {
var G__34345 = cljs.core.next(seq__33747_34334__$1);
var G__34346 = null;
var G__34347 = (0);
var G__34348 = (0);
seq__33747_34318 = G__34345;
chunk__33749_34319 = G__34346;
count__33750_34320 = G__34347;
i__33751_34321 = G__34348;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34317);
}
}


var G__34349 = cljs.core.next(seq__33710_34309__$1);
var G__34350 = null;
var G__34351 = (0);
var G__34352 = (0);
seq__33710_34258 = G__34349;
chunk__33712_34259 = G__34350;
count__33713_34260 = G__34351;
i__33714_34261 = G__34352;
continue;
} else {
var G__34355 = cljs.core.next(seq__33710_34309__$1);
var G__34356 = null;
var G__34357 = (0);
var G__34358 = (0);
seq__33710_34258 = G__34355;
chunk__33712_34259 = G__34356;
count__33713_34260 = G__34357;
i__33714_34261 = G__34358;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__33760_34359 = shadow.dom._to_svg;
var G__33761_34360 = "string";
var G__33762_34361 = ((function (G__33760_34359,G__33761_34360){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__33760_34359,G__33761_34360))
;
goog.object.set(G__33760_34359,G__33761_34360,G__33762_34361);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__33767_34364 = shadow.dom._to_svg;
var G__33768_34365 = "null";
var G__33769_34366 = ((function (G__33767_34364,G__33768_34365){
return (function (_){
return null;
});})(G__33767_34364,G__33768_34365))
;
goog.object.set(G__33767_34364,G__33768_34365,G__33769_34366);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34367 = arguments.length;
var i__4731__auto___34368 = (0);
while(true){
if((i__4731__auto___34368 < len__4730__auto___34367)){
args__4736__auto__.push((arguments[i__4731__auto___34368]));

var G__34369 = (i__4731__auto___34368 + (1));
i__4731__auto___34368 = G__34369;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq33770){
var G__33771 = cljs.core.first(seq33770);
var seq33770__$1 = cljs.core.next(seq33770);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33771,seq33770__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33778 = arguments.length;
switch (G__33778) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__33783_34375 = shadow.dom.dom_node(el);
var G__33784_34376 = cljs.core.name(event);
var G__33785_34377 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33783_34375,G__33784_34376,G__33785_34377) : shadow.dom.dom_listen.call(null,G__33783_34375,G__33784_34376,G__33785_34377));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__30431__auto___34378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30431__auto___34378,buf,chan,event_fn){
return (function (){
var f__30432__auto__ = (function (){var switch__30211__auto__ = ((function (c__30431__auto___34378,buf,chan,event_fn){
return (function (state_33790){
var state_val_33791 = (state_33790[(1)]);
if((state_val_33791 === (1))){
var state_33790__$1 = state_33790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33790__$1,(2),once_or_cleanup);
} else {
if((state_val_33791 === (2))){
var inst_33787 = (state_33790[(2)]);
var inst_33788 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33790__$1 = (function (){var statearr_33794 = state_33790;
(statearr_33794[(7)] = inst_33787);

return statearr_33794;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33790__$1,inst_33788);
} else {
return null;
}
}
});})(c__30431__auto___34378,buf,chan,event_fn))
;
return ((function (switch__30211__auto__,c__30431__auto___34378,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__30212__auto__ = null;
var shadow$dom$state_machine__30212__auto____0 = (function (){
var statearr_33796 = [null,null,null,null,null,null,null,null];
(statearr_33796[(0)] = shadow$dom$state_machine__30212__auto__);

(statearr_33796[(1)] = (1));

return statearr_33796;
});
var shadow$dom$state_machine__30212__auto____1 = (function (state_33790){
while(true){
var ret_value__30213__auto__ = (function (){try{while(true){
var result__30214__auto__ = switch__30211__auto__(state_33790);
if(cljs.core.keyword_identical_QMARK_(result__30214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30214__auto__;
}
break;
}
}catch (e33798){if((e33798 instanceof Object)){
var ex__30215__auto__ = e33798;
var statearr_33799_34380 = state_33790;
(statearr_33799_34380[(5)] = ex__30215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33798;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34382 = state_33790;
state_33790 = G__34382;
continue;
} else {
return ret_value__30213__auto__;
}
break;
}
});
shadow$dom$state_machine__30212__auto__ = function(state_33790){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30212__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30212__auto____1.call(this,state_33790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30212__auto____0;
shadow$dom$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30212__auto____1;
return shadow$dom$state_machine__30212__auto__;
})()
;})(switch__30211__auto__,c__30431__auto___34378,buf,chan,event_fn))
})();
var state__30433__auto__ = (function (){var statearr_33801 = (f__30432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30432__auto__.cljs$core$IFn$_invoke$arity$0() : f__30432__auto__.call(null));
(statearr_33801[(6)] = c__30431__auto___34378);

return statearr_33801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30433__auto__);
});})(c__30431__auto___34378,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
