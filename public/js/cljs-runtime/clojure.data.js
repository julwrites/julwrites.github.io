goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__30379){
var vec__30381 = p__30379;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30381,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30381,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__30394 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30394,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30394,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30394,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__30426 = arguments.length;
switch (G__30426) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__30484_30607 = clojure.data.equality_partition;
var G__30485_30608 = "null";
var G__30486_30609 = ((function (G__30484_30607,G__30485_30608){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30484_30607,G__30485_30608))
;
goog.object.set(G__30484_30607,G__30485_30608,G__30486_30609);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__30494_30610 = clojure.data.equality_partition;
var G__30495_30611 = "string";
var G__30496_30612 = ((function (G__30494_30610,G__30495_30611){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30494_30610,G__30495_30611))
;
goog.object.set(G__30494_30610,G__30495_30611,G__30496_30612);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__30501_30614 = clojure.data.equality_partition;
var G__30502_30615 = "number";
var G__30503_30616 = ((function (G__30501_30614,G__30502_30615){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30501_30614,G__30502_30615))
;
goog.object.set(G__30501_30614,G__30502_30615,G__30503_30616);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__30506_30617 = clojure.data.equality_partition;
var G__30507_30618 = "array";
var G__30508_30619 = ((function (G__30506_30617,G__30507_30618){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__30506_30617,G__30507_30618))
;
goog.object.set(G__30506_30617,G__30507_30618,G__30508_30619);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__30511_30620 = clojure.data.equality_partition;
var G__30512_30621 = "function";
var G__30513_30622 = ((function (G__30511_30620,G__30512_30621){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30511_30620,G__30512_30621))
;
goog.object.set(G__30511_30620,G__30512_30621,G__30513_30622);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__30514_30623 = clojure.data.equality_partition;
var G__30515_30624 = "boolean";
var G__30516_30625 = ((function (G__30514_30623,G__30515_30624){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30514_30623,G__30515_30624))
;
goog.object.set(G__30514_30623,G__30515_30624,G__30516_30625);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__30518_30630 = clojure.data.equality_partition;
var G__30519_30631 = "_";
var G__30520_30632 = ((function (G__30518_30630,G__30519_30631){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__30518_30630,G__30519_30631))
;
goog.object.set(G__30518_30630,G__30519_30631,G__30520_30632);
goog.object.set(clojure.data.Diff,"null",true);

var G__30534_30642 = clojure.data.diff_similar;
var G__30535_30643 = "null";
var G__30536_30644 = ((function (G__30534_30642,G__30535_30643){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30534_30642,G__30535_30643))
;
goog.object.set(G__30534_30642,G__30535_30643,G__30536_30644);

goog.object.set(clojure.data.Diff,"string",true);

var G__30541_30646 = clojure.data.diff_similar;
var G__30542_30647 = "string";
var G__30543_30648 = ((function (G__30541_30646,G__30542_30647){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30541_30646,G__30542_30647))
;
goog.object.set(G__30541_30646,G__30542_30647,G__30543_30648);

goog.object.set(clojure.data.Diff,"number",true);

var G__30545_30651 = clojure.data.diff_similar;
var G__30546_30652 = "number";
var G__30547_30653 = ((function (G__30545_30651,G__30546_30652){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30545_30651,G__30546_30652))
;
goog.object.set(G__30545_30651,G__30546_30652,G__30547_30653);

goog.object.set(clojure.data.Diff,"array",true);

var G__30551_30654 = clojure.data.diff_similar;
var G__30552_30655 = "array";
var G__30553_30656 = ((function (G__30551_30654,G__30552_30655){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__30551_30654,G__30552_30655))
;
goog.object.set(G__30551_30654,G__30552_30655,G__30553_30656);

goog.object.set(clojure.data.Diff,"function",true);

var G__30554_30657 = clojure.data.diff_similar;
var G__30555_30658 = "function";
var G__30556_30659 = ((function (G__30554_30657,G__30555_30658){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30554_30657,G__30555_30658))
;
goog.object.set(G__30554_30657,G__30555_30658,G__30556_30659);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__30559_30660 = clojure.data.diff_similar;
var G__30560_30661 = "boolean";
var G__30561_30662 = ((function (G__30559_30660,G__30560_30661){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30559_30660,G__30560_30661))
;
goog.object.set(G__30559_30660,G__30560_30661,G__30561_30662);

goog.object.set(clojure.data.Diff,"_",true);

var G__30562_30663 = clojure.data.diff_similar;
var G__30563_30664 = "_";
var G__30564_30665 = ((function (G__30562_30663,G__30563_30664){
return (function (a,b){
var fexpr__30566 = (function (){var G__30567 = clojure.data.equality_partition(a);
var G__30567__$1 = (((G__30567 instanceof cljs.core.Keyword))?G__30567.fqn:null);
switch (G__30567__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30567__$1)].join('')));

}
})();
return (fexpr__30566.cljs$core$IFn$_invoke$arity$2 ? fexpr__30566.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__30566.call(null,a,b));
});})(G__30562_30663,G__30563_30664))
;
goog.object.set(G__30562_30663,G__30563_30664,G__30564_30665);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
