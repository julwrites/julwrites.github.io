goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__6124__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__6124 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6125__i = 0, G__6125__a = new Array(arguments.length -  0);
while (G__6125__i < G__6125__a.length) {G__6125__a[G__6125__i] = arguments[G__6125__i + 0]; ++G__6125__i;}
  args = new cljs.core.IndexedSeq(G__6125__a,0,null);
} 
return G__6124__delegate.call(this,args);};
G__6124.cljs$lang$maxFixedArity = 0;
G__6124.cljs$lang$applyTo = (function (arglist__6126){
var args = cljs.core.seq(arglist__6126);
return G__6124__delegate(args);
});
G__6124.cljs$core$IFn$_invoke$arity$variadic = G__6124__delegate;
return G__6124;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__6127__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__6127 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6128__i = 0, G__6128__a = new Array(arguments.length -  0);
while (G__6128__i < G__6128__a.length) {G__6128__a[G__6128__i] = arguments[G__6128__i + 0]; ++G__6128__i;}
  args = new cljs.core.IndexedSeq(G__6128__a,0,null);
} 
return G__6127__delegate.call(this,args);};
G__6127.cljs$lang$maxFixedArity = 0;
G__6127.cljs$lang$applyTo = (function (arglist__6129){
var args = cljs.core.seq(arglist__6129);
return G__6127__delegate(args);
});
G__6127.cljs$core$IFn$_invoke$arity$variadic = G__6127__delegate;
return G__6127;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
