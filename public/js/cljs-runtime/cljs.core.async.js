goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30544 = arguments.length;
switch (G__30544) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30548 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30548 = (function (f,blockable,meta30549){
this.f = f;
this.blockable = blockable;
this.meta30549 = meta30549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30550,meta30549__$1){
var self__ = this;
var _30550__$1 = this;
return (new cljs.core.async.t_cljs$core$async30548(self__.f,self__.blockable,meta30549__$1));
});

cljs.core.async.t_cljs$core$async30548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30550){
var self__ = this;
var _30550__$1 = this;
return self__.meta30549;
});

cljs.core.async.t_cljs$core$async30548.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30548.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30548.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30548.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30549","meta30549",839719047,null)], null);
});

cljs.core.async.t_cljs$core$async30548.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30548";

cljs.core.async.t_cljs$core$async30548.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30548");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30548.
 */
cljs.core.async.__GT_t_cljs$core$async30548 = (function cljs$core$async$__GT_t_cljs$core$async30548(f__$1,blockable__$1,meta30549){
return (new cljs.core.async.t_cljs$core$async30548(f__$1,blockable__$1,meta30549));
});

}

return (new cljs.core.async.t_cljs$core$async30548(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30584 = arguments.length;
switch (G__30584) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30601 = arguments.length;
switch (G__30601) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30606 = arguments.length;
switch (G__30606) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32934 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32934) : fn1.call(null,val_32934));
} else {
cljs.core.async.impl.dispatch.run(((function (val_32934,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32934) : fn1.call(null,val_32934));
});})(val_32934,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30645 = arguments.length;
switch (G__30645) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___32952 = n;
var x_32953 = (0);
while(true){
if((x_32953 < n__4607__auto___32952)){
(a[x_32953] = (0));

var G__32954 = (x_32953 + (1));
x_32953 = G__32954;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__32957 = (i + (1));
i = G__32957;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30668 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30668 = (function (flag,meta30669){
this.flag = flag;
this.meta30669 = meta30669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30670,meta30669__$1){
var self__ = this;
var _30670__$1 = this;
return (new cljs.core.async.t_cljs$core$async30668(self__.flag,meta30669__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30668.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30670){
var self__ = this;
var _30670__$1 = this;
return self__.meta30669;
});})(flag))
;

cljs.core.async.t_cljs$core$async30668.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30668.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30668.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30668.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30668.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30669","meta30669",1974444293,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30668.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30668.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30668";

cljs.core.async.t_cljs$core$async30668.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30668");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30668.
 */
cljs.core.async.__GT_t_cljs$core$async30668 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30668(flag__$1,meta30669){
return (new cljs.core.async.t_cljs$core$async30668(flag__$1,meta30669));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30668(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30679 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30679 = (function (flag,cb,meta30680){
this.flag = flag;
this.cb = cb;
this.meta30680 = meta30680;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30681,meta30680__$1){
var self__ = this;
var _30681__$1 = this;
return (new cljs.core.async.t_cljs$core$async30679(self__.flag,self__.cb,meta30680__$1));
});

cljs.core.async.t_cljs$core$async30679.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30681){
var self__ = this;
var _30681__$1 = this;
return self__.meta30680;
});

cljs.core.async.t_cljs$core$async30679.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30679.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async30679.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30679.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30679.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30680","meta30680",1420399572,null)], null);
});

cljs.core.async.t_cljs$core$async30679.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30679.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30679";

cljs.core.async.t_cljs$core$async30679.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30679");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30679.
 */
cljs.core.async.__GT_t_cljs$core$async30679 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30679(flag__$1,cb__$1,meta30680){
return (new cljs.core.async.t_cljs$core$async30679(flag__$1,cb__$1,meta30680));
});

}

return (new cljs.core.async.t_cljs$core$async30679(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30697_SHARP_){
var G__30704 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30697_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30704) : fret.call(null,G__30704));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30698_SHARP_){
var G__30705 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30698_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30705) : fret.call(null,G__30705));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32981 = (i + (1));
i = G__32981;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32986 = arguments.length;
var i__4731__auto___32987 = (0);
while(true){
if((i__4731__auto___32987 < len__4730__auto___32986)){
args__4736__auto__.push((arguments[i__4731__auto___32987]));

var G__32990 = (i__4731__auto___32987 + (1));
i__4731__auto___32987 = G__32990;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30710){
var map__30711 = p__30710;
var map__30711__$1 = (((((!((map__30711 == null))))?(((((map__30711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30711):map__30711);
var opts = map__30711__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30708){
var G__30709 = cljs.core.first(seq30708);
var seq30708__$1 = cljs.core.next(seq30708);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30709,seq30708__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30723 = arguments.length;
switch (G__30723) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30431__auto___33004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30431__auto___33004){
return (function (){
var f__30432__auto__ = (function (){var switch__30211__auto__ = ((function (c__30431__auto___33004){
return (function (state_30770){
var state_val_30771 = (state_30770[(1)]);
if((state_val_30771 === (7))){
var inst_30759 = (state_30770[(2)]);
var state_30770__$1 = state_30770;
var statearr_30776_33006 = state_30770__$1;
(statearr_30776_33006[(2)] = inst_30759);

(statearr_30776_33006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (1))){
var state_30770__$1 = state_30770;
var statearr_30777_33007 = state_30770__$1;
(statearr_30777_33007[(2)] = null);

(statearr_30777_33007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (4))){
var inst_30733 = (state_30770[(7)]);
var inst_30733__$1 = (state_30770[(2)]);
var inst_30736 = (inst_30733__$1 == null);
var state_30770__$1 = (function (){var statearr_30778 = state_30770;
(statearr_30778[(7)] = inst_30733__$1);

return statearr_30778;
})();
if(cljs.core.truth_(inst_30736)){
var statearr_30779_33010 = state_30770__$1;
(statearr_30779_33010[(1)] = (5));

} else {
var statearr_30780_33012 = state_30770__$1;
(statearr_30780_33012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (13))){
var state_30770__$1 = state_30770;
var statearr_30781_33015 = state_30770__$1;
(statearr_30781_33015[(2)] = null);

(statearr_30781_33015[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (6))){
var inst_30733 = (state_30770[(7)]);
var state_30770__$1 = state_30770;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30770__$1,(11),to,inst_30733);
} else {
if((state_val_30771 === (3))){
var inst_30765 = (state_30770[(2)]);
var state_30770__$1 = state_30770;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30770__$1,inst_30765);
} else {
if((state_val_30771 === (12))){
var state_30770__$1 = state_30770;
var statearr_30782_33020 = state_30770__$1;
(statearr_30782_33020[(2)] = null);

(statearr_30782_33020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (2))){
var state_30770__$1 = state_30770;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30770__$1,(4),from);
} else {
if((state_val_30771 === (11))){
var inst_30746 = (state_30770[(2)]);
var state_30770__$1 = state_30770;
if(cljs.core.truth_(inst_30746)){
var statearr_30783_33036 = state_30770__$1;
(statearr_30783_33036[(1)] = (12));

} else {
var statearr_30784_33037 = state_30770__$1;
(statearr_30784_33037[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (9))){
var state_30770__$1 = state_30770;
var statearr_30785_33040 = state_30770__$1;
(statearr_30785_33040[(2)] = null);

(statearr_30785_33040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (5))){
var state_30770__$1 = state_30770;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30786_33041 = state_30770__$1;
(statearr_30786_33041[(1)] = (8));

} else {
var statearr_30787_33042 = state_30770__$1;
(statearr_30787_33042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (14))){
var inst_30757 = (state_30770[(2)]);
var state_30770__$1 = state_30770;
var statearr_30789_33043 = state_30770__$1;
(statearr_30789_33043[(2)] = inst_30757);

(statearr_30789_33043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (10))){
var inst_30743 = (state_30770[(2)]);
var state_30770__$1 = state_30770;
var statearr_30790_33044 = state_30770__$1;
(statearr_30790_33044[(2)] = inst_30743);

(statearr_30790_33044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30771 === (8))){
var inst_30739 = cljs.core.async.close_BANG_(to);
var state_30770__$1 = state_30770;
var statearr_30791_33049 = state_30770__$1;
(statearr_30791_33049[(2)] = inst_30739);

(statearr_30791_33049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30431__auto___33004))
;
return ((function (switch__30211__auto__,c__30431__auto___33004){
return (function() {
var cljs$core$async$state_machine__30212__auto__ = null;
var cljs$core$async$state_machine__30212__auto____0 = (function (){
var statearr_30797 = [null,null,null,null,null,null,null,null];
(statearr_30797[(0)] = cljs$core$async$state_machine__30212__auto__);

(statearr_30797[(1)] = (1));

return statearr_30797;
});
var cljs$core$async$state_machine__30212__auto____1 = (function (state_30770){
while(true){
var ret_value__30213__auto__ = (function (){try{while(true){
var result__30214__auto__ = switch__30211__auto__(state_30770);
if(cljs.core.keyword_identical_QMARK_(result__30214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30214__auto__;
}
break;
}
}catch (e30798){if((e30798 instanceof Object)){
var ex__30215__auto__ = e30798;
var statearr_30799_33063 = state_30770;
(statearr_30799_33063[(5)] = ex__30215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30798;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33071 = state_30770;
state_30770 = G__33071;
continue;
} else {
return ret_value__30213__auto__;
}
break;
}
});
cljs$core$async$state_machine__30212__auto__ = function(state_30770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30212__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30212__auto____1.call(this,state_30770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30212__auto____0;
cljs$core$async$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30212__auto____1;
return cljs$core$async$state_machine__30212__auto__;
})()
;})(switch__30211__auto__,c__30431__auto___33004))
})();
var state__30433__auto__ = (function (){var statearr_30802 = (f__30432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30432__auto__.cljs$core$IFn$_invoke$arity$0() : f__30432__auto__.call(null));
(statearr_30802[(6)] = c__30431__auto___33004);

return statearr_30802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30433__auto__);
});})(c__30431__auto___33004))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__30803){
var vec__30804 = p__30803;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30804,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30804,(1),null);
var job = vec__30804;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30431__auto___33102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30431__auto___33102,res,vec__30804,v,p,job,jobs,results){
return (function (){
var f__30432__auto__ = (function (){var switch__30211__auto__ = ((function (c__30431__auto___33102,res,vec__30804,v,p,job,jobs,results){
return (function (state_30812){
var state_val_30813 = (state_30812[(1)]);
if((state_val_30813 === (1))){
var state_30812__$1 = state_30812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30812__$1,(2),res,v);
} else {
if((state_val_30813 === (2))){
var inst_30809 = (state_30812[(2)]);
var inst_30810 = cljs.core.async.close_BANG_(res);
var state_30812__$1 = (function (){var statearr_30814 = state_30812;
(statearr_30814[(7)] = inst_30809);

return statearr_30814;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30812__$1,inst_30810);
} else {
return null;
}
}
});})(c__30431__auto___33102,res,vec__30804,v,p,job,jobs,results))
;
return ((function (switch__30211__auto__,c__30431__auto___33102,res,vec__30804,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____0 = (function (){
var statearr_30819 = [null,null,null,null,null,null,null,null];
(statearr_30819[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__);

(statearr_30819[(1)] = (1));

return statearr_30819;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____1 = (function (state_30812){
while(true){
var ret_value__30213__auto__ = (function (){try{while(true){
var result__30214__auto__ = switch__30211__auto__(state_30812);
if(cljs.core.keyword_identical_QMARK_(result__30214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30214__auto__;
}
break;
}
}catch (e30820){if((e30820 instanceof Object)){
var ex__30215__auto__ = e30820;
var statearr_30821_33111 = state_30812;
(statearr_30821_33111[(5)] = ex__30215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30820;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33113 = state_30812;
state_30812 = G__33113;
continue;
} else {
return ret_value__30213__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__ = function(state_30812){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____1.call(this,state_30812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__;
})()
;})(switch__30211__auto__,c__30431__auto___33102,res,vec__30804,v,p,job,jobs,results))
})();
var state__30433__auto__ = (function (){var statearr_30826 = (f__30432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30432__auto__.cljs$core$IFn$_invoke$arity$0() : f__30432__auto__.call(null));
(statearr_30826[(6)] = c__30431__auto___33102);

return statearr_30826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30433__auto__);
});})(c__30431__auto___33102,res,vec__30804,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30827){
var vec__30828 = p__30827;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30828,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30828,(1),null);
var job = vec__30828;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___33116 = n;
var __33117 = (0);
while(true){
if((__33117 < n__4607__auto___33116)){
var G__30835_33118 = type;
var G__30835_33119__$1 = (((G__30835_33118 instanceof cljs.core.Keyword))?G__30835_33118.fqn:null);
switch (G__30835_33119__$1) {
case "compute":
var c__30431__auto___33121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33117,c__30431__auto___33121,G__30835_33118,G__30835_33119__$1,n__4607__auto___33116,jobs,results,process,async){
return (function (){
var f__30432__auto__ = (function (){var switch__30211__auto__ = ((function (__33117,c__30431__auto___33121,G__30835_33118,G__30835_33119__$1,n__4607__auto___33116,jobs,results,process,async){
return (function (state_30849){
var state_val_30850 = (state_30849[(1)]);
if((state_val_30850 === (1))){
var state_30849__$1 = state_30849;
var statearr_30858_33123 = state_30849__$1;
(statearr_30858_33123[(2)] = null);

(statearr_30858_33123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (2))){
var state_30849__$1 = state_30849;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30849__$1,(4),jobs);
} else {
if((state_val_30850 === (3))){
var inst_30847 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30849__$1,inst_30847);
} else {
if((state_val_30850 === (4))){
var inst_30839 = (state_30849[(2)]);
var inst_30840 = process(inst_30839);
var state_30849__$1 = state_30849;
if(cljs.core.truth_(inst_30840)){
var statearr_30864_33129 = state_30849__$1;
(statearr_30864_33129[(1)] = (5));

} else {
var statearr_30865_33130 = state_30849__$1;
(statearr_30865_33130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (5))){
var state_30849__$1 = state_30849;
var statearr_30870_33132 = state_30849__$1;
(statearr_30870_33132[(2)] = null);

(statearr_30870_33132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (6))){
var state_30849__$1 = state_30849;
var statearr_30871_33136 = state_30849__$1;
(statearr_30871_33136[(2)] = null);

(statearr_30871_33136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30850 === (7))){
var inst_30845 = (state_30849[(2)]);
var state_30849__$1 = state_30849;
var statearr_30872_33138 = state_30849__$1;
(statearr_30872_33138[(2)] = inst_30845);

(statearr_30872_33138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33117,c__30431__auto___33121,G__30835_33118,G__30835_33119__$1,n__4607__auto___33116,jobs,results,process,async))
;
return ((function (__33117,switch__30211__auto__,c__30431__auto___33121,G__30835_33118,G__30835_33119__$1,n__4607__auto___33116,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____0 = (function (){
var statearr_30873 = [null,null,null,null,null,null,null];
(statearr_30873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__);

(statearr_30873[(1)] = (1));

return statearr_30873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____1 = (function (state_30849){
while(true){
var ret_value__30213__auto__ = (function (){try{while(true){
var result__30214__auto__ = switch__30211__auto__(state_30849);
if(cljs.core.keyword_identical_QMARK_(result__30214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30214__auto__;
}
break;
}
}catch (e30874){if((e30874 instanceof Object)){
var ex__30215__auto__ = e30874;
var statearr_30875_33148 = state_30849;
(statearr_30875_33148[(5)] = ex__30215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30874;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33149 = state_30849;
state_30849 = G__33149;
continue;
} else {
return ret_value__30213__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__ = function(state_30849){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____1.call(this,state_30849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__;
})()
;})(__33117,switch__30211__auto__,c__30431__auto___33121,G__30835_33118,G__30835_33119__$1,n__4607__auto___33116,jobs,results,process,async))
})();
var state__30433__auto__ = (function (){var statearr_30876 = (f__30432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30432__auto__.cljs$core$IFn$_invoke$arity$0() : f__30432__auto__.call(null));
(statearr_30876[(6)] = c__30431__auto___33121);

return statearr_30876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30433__auto__);
});})(__33117,c__30431__auto___33121,G__30835_33118,G__30835_33119__$1,n__4607__auto___33116,jobs,results,process,async))
);


break;
case "async":
var c__30431__auto___33151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33117,c__30431__auto___33151,G__30835_33118,G__30835_33119__$1,n__4607__auto___33116,jobs,results,process,async){
return (function (){
var f__30432__auto__ = (function (){var switch__30211__auto__ = ((function (__33117,c__30431__auto___33151,G__30835_33118,G__30835_33119__$1,n__4607__auto___33116,jobs,results,process,async){
return (function (state_30889){
var state_val_30890 = (state_30889[(1)]);
if((state_val_30890 === (1))){
var state_30889__$1 = state_30889;
var statearr_30891_33153 = state_30889__$1;
(statearr_30891_33153[(2)] = null);

(statearr_30891_33153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (2))){
var state_30889__$1 = state_30889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30889__$1,(4),jobs);
} else {
if((state_val_30890 === (3))){
var inst_30887 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30889__$1,inst_30887);
} else {
if((state_val_30890 === (4))){
var inst_30879 = (state_30889[(2)]);
var inst_30880 = async(inst_30879);
var state_30889__$1 = state_30889;
if(cljs.core.truth_(inst_30880)){
var statearr_30892_33155 = state_30889__$1;
(statearr_30892_33155[(1)] = (5));

} else {
var statearr_30893_33156 = state_30889__$1;
(statearr_30893_33156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (5))){
var state_30889__$1 = state_30889;
var statearr_30897_33157 = state_30889__$1;
(statearr_30897_33157[(2)] = null);

(statearr_30897_33157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (6))){
var state_30889__$1 = state_30889;
var statearr_30901_33160 = state_30889__$1;
(statearr_30901_33160[(2)] = null);

(statearr_30901_33160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30890 === (7))){
var inst_30885 = (state_30889[(2)]);
var state_30889__$1 = state_30889;
var statearr_30902_33162 = state_30889__$1;
(statearr_30902_33162[(2)] = inst_30885);

(statearr_30902_33162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33117,c__30431__auto___33151,G__30835_33118,G__30835_33119__$1,n__4607__auto___33116,jobs,results,process,async))
;
return ((function (__33117,switch__30211__auto__,c__30431__auto___33151,G__30835_33118,G__30835_33119__$1,n__4607__auto___33116,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____0 = (function (){
var statearr_30903 = [null,null,null,null,null,null,null];
(statearr_30903[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__);

(statearr_30903[(1)] = (1));

return statearr_30903;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____1 = (function (state_30889){
while(true){
var ret_value__30213__auto__ = (function (){try{while(true){
var result__30214__auto__ = switch__30211__auto__(state_30889);
if(cljs.core.keyword_identical_QMARK_(result__30214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30214__auto__;
}
break;
}
}catch (e30904){if((e30904 instanceof Object)){
var ex__30215__auto__ = e30904;
var statearr_30905_33166 = state_30889;
(statearr_30905_33166[(5)] = ex__30215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30904;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33167 = state_30889;
state_30889 = G__33167;
continue;
} else {
return ret_value__30213__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__ = function(state_30889){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____1.call(this,state_30889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__;
})()
;})(__33117,switch__30211__auto__,c__30431__auto___33151,G__30835_33118,G__30835_33119__$1,n__4607__auto___33116,jobs,results,process,async))
})();
var state__30433__auto__ = (function (){var statearr_30906 = (f__30432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30432__auto__.cljs$core$IFn$_invoke$arity$0() : f__30432__auto__.call(null));
(statearr_30906[(6)] = c__30431__auto___33151);

return statearr_30906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30433__auto__);
});})(__33117,c__30431__auto___33151,G__30835_33118,G__30835_33119__$1,n__4607__auto___33116,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30835_33119__$1)].join('')));

}

var G__33168 = (__33117 + (1));
__33117 = G__33168;
continue;
} else {
}
break;
}

var c__30431__auto___33169 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30431__auto___33169,jobs,results,process,async){
return (function (){
var f__30432__auto__ = (function (){var switch__30211__auto__ = ((function (c__30431__auto___33169,jobs,results,process,async){
return (function (state_30928){
var state_val_30929 = (state_30928[(1)]);
if((state_val_30929 === (7))){
var inst_30924 = (state_30928[(2)]);
var state_30928__$1 = state_30928;
var statearr_30935_33172 = state_30928__$1;
(statearr_30935_33172[(2)] = inst_30924);

(statearr_30935_33172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30929 === (1))){
var state_30928__$1 = state_30928;
var statearr_30938_33175 = state_30928__$1;
(statearr_30938_33175[(2)] = null);

(statearr_30938_33175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30929 === (4))){
var inst_30909 = (state_30928[(7)]);
var inst_30909__$1 = (state_30928[(2)]);
var inst_30910 = (inst_30909__$1 == null);
var state_30928__$1 = (function (){var statearr_30939 = state_30928;
(statearr_30939[(7)] = inst_30909__$1);

return statearr_30939;
})();
if(cljs.core.truth_(inst_30910)){
var statearr_30940_33177 = state_30928__$1;
(statearr_30940_33177[(1)] = (5));

} else {
var statearr_30941_33178 = state_30928__$1;
(statearr_30941_33178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30929 === (6))){
var inst_30914 = (state_30928[(8)]);
var inst_30909 = (state_30928[(7)]);
var inst_30914__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30915 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30916 = [inst_30909,inst_30914__$1];
var inst_30917 = (new cljs.core.PersistentVector(null,2,(5),inst_30915,inst_30916,null));
var state_30928__$1 = (function (){var statearr_30944 = state_30928;
(statearr_30944[(8)] = inst_30914__$1);

return statearr_30944;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30928__$1,(8),jobs,inst_30917);
} else {
if((state_val_30929 === (3))){
var inst_30926 = (state_30928[(2)]);
var state_30928__$1 = state_30928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30928__$1,inst_30926);
} else {
if((state_val_30929 === (2))){
var state_30928__$1 = state_30928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30928__$1,(4),from);
} else {
if((state_val_30929 === (9))){
var inst_30921 = (state_30928[(2)]);
var state_30928__$1 = (function (){var statearr_30948 = state_30928;
(statearr_30948[(9)] = inst_30921);

return statearr_30948;
})();
var statearr_30949_33185 = state_30928__$1;
(statearr_30949_33185[(2)] = null);

(statearr_30949_33185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30929 === (5))){
var inst_30912 = cljs.core.async.close_BANG_(jobs);
var state_30928__$1 = state_30928;
var statearr_30950_33188 = state_30928__$1;
(statearr_30950_33188[(2)] = inst_30912);

(statearr_30950_33188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30929 === (8))){
var inst_30914 = (state_30928[(8)]);
var inst_30919 = (state_30928[(2)]);
var state_30928__$1 = (function (){var statearr_30951 = state_30928;
(statearr_30951[(10)] = inst_30919);

return statearr_30951;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30928__$1,(9),results,inst_30914);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__30431__auto___33169,jobs,results,process,async))
;
return ((function (switch__30211__auto__,c__30431__auto___33169,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____0 = (function (){
var statearr_30952 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30952[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__);

(statearr_30952[(1)] = (1));

return statearr_30952;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____1 = (function (state_30928){
while(true){
var ret_value__30213__auto__ = (function (){try{while(true){
var result__30214__auto__ = switch__30211__auto__(state_30928);
if(cljs.core.keyword_identical_QMARK_(result__30214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30214__auto__;
}
break;
}
}catch (e30953){if((e30953 instanceof Object)){
var ex__30215__auto__ = e30953;
var statearr_30954_33194 = state_30928;
(statearr_30954_33194[(5)] = ex__30215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30953;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33195 = state_30928;
state_30928 = G__33195;
continue;
} else {
return ret_value__30213__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__ = function(state_30928){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____1.call(this,state_30928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__;
})()
;})(switch__30211__auto__,c__30431__auto___33169,jobs,results,process,async))
})();
var state__30433__auto__ = (function (){var statearr_30955 = (f__30432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30432__auto__.cljs$core$IFn$_invoke$arity$0() : f__30432__auto__.call(null));
(statearr_30955[(6)] = c__30431__auto___33169);

return statearr_30955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30433__auto__);
});})(c__30431__auto___33169,jobs,results,process,async))
);


var c__30431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30431__auto__,jobs,results,process,async){
return (function (){
var f__30432__auto__ = (function (){var switch__30211__auto__ = ((function (c__30431__auto__,jobs,results,process,async){
return (function (state_30993){
var state_val_30994 = (state_30993[(1)]);
if((state_val_30994 === (7))){
var inst_30989 = (state_30993[(2)]);
var state_30993__$1 = state_30993;
var statearr_30996_33198 = state_30993__$1;
(statearr_30996_33198[(2)] = inst_30989);

(statearr_30996_33198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (20))){
var state_30993__$1 = state_30993;
var statearr_30997_33200 = state_30993__$1;
(statearr_30997_33200[(2)] = null);

(statearr_30997_33200[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (1))){
var state_30993__$1 = state_30993;
var statearr_30998_33201 = state_30993__$1;
(statearr_30998_33201[(2)] = null);

(statearr_30998_33201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (4))){
var inst_30958 = (state_30993[(7)]);
var inst_30958__$1 = (state_30993[(2)]);
var inst_30959 = (inst_30958__$1 == null);
var state_30993__$1 = (function (){var statearr_30999 = state_30993;
(statearr_30999[(7)] = inst_30958__$1);

return statearr_30999;
})();
if(cljs.core.truth_(inst_30959)){
var statearr_31000_33202 = state_30993__$1;
(statearr_31000_33202[(1)] = (5));

} else {
var statearr_31001_33203 = state_30993__$1;
(statearr_31001_33203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (15))){
var inst_30971 = (state_30993[(8)]);
var state_30993__$1 = state_30993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30993__$1,(18),to,inst_30971);
} else {
if((state_val_30994 === (21))){
var inst_30984 = (state_30993[(2)]);
var state_30993__$1 = state_30993;
var statearr_31005_33205 = state_30993__$1;
(statearr_31005_33205[(2)] = inst_30984);

(statearr_31005_33205[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (13))){
var inst_30986 = (state_30993[(2)]);
var state_30993__$1 = (function (){var statearr_31006 = state_30993;
(statearr_31006[(9)] = inst_30986);

return statearr_31006;
})();
var statearr_31007_33210 = state_30993__$1;
(statearr_31007_33210[(2)] = null);

(statearr_31007_33210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (6))){
var inst_30958 = (state_30993[(7)]);
var state_30993__$1 = state_30993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30993__$1,(11),inst_30958);
} else {
if((state_val_30994 === (17))){
var inst_30979 = (state_30993[(2)]);
var state_30993__$1 = state_30993;
if(cljs.core.truth_(inst_30979)){
var statearr_31008_33214 = state_30993__$1;
(statearr_31008_33214[(1)] = (19));

} else {
var statearr_31009_33215 = state_30993__$1;
(statearr_31009_33215[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (3))){
var inst_30991 = (state_30993[(2)]);
var state_30993__$1 = state_30993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30993__$1,inst_30991);
} else {
if((state_val_30994 === (12))){
var inst_30968 = (state_30993[(10)]);
var state_30993__$1 = state_30993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30993__$1,(14),inst_30968);
} else {
if((state_val_30994 === (2))){
var state_30993__$1 = state_30993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30993__$1,(4),results);
} else {
if((state_val_30994 === (19))){
var state_30993__$1 = state_30993;
var statearr_31010_33219 = state_30993__$1;
(statearr_31010_33219[(2)] = null);

(statearr_31010_33219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (11))){
var inst_30968 = (state_30993[(2)]);
var state_30993__$1 = (function (){var statearr_31011 = state_30993;
(statearr_31011[(10)] = inst_30968);

return statearr_31011;
})();
var statearr_31012_33220 = state_30993__$1;
(statearr_31012_33220[(2)] = null);

(statearr_31012_33220[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (9))){
var state_30993__$1 = state_30993;
var statearr_31013_33224 = state_30993__$1;
(statearr_31013_33224[(2)] = null);

(statearr_31013_33224[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (5))){
var state_30993__$1 = state_30993;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31014_33225 = state_30993__$1;
(statearr_31014_33225[(1)] = (8));

} else {
var statearr_31018_33226 = state_30993__$1;
(statearr_31018_33226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (14))){
var inst_30973 = (state_30993[(11)]);
var inst_30971 = (state_30993[(8)]);
var inst_30971__$1 = (state_30993[(2)]);
var inst_30972 = (inst_30971__$1 == null);
var inst_30973__$1 = cljs.core.not(inst_30972);
var state_30993__$1 = (function (){var statearr_31023 = state_30993;
(statearr_31023[(11)] = inst_30973__$1);

(statearr_31023[(8)] = inst_30971__$1);

return statearr_31023;
})();
if(inst_30973__$1){
var statearr_31024_33228 = state_30993__$1;
(statearr_31024_33228[(1)] = (15));

} else {
var statearr_31025_33229 = state_30993__$1;
(statearr_31025_33229[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (16))){
var inst_30973 = (state_30993[(11)]);
var state_30993__$1 = state_30993;
var statearr_31026_33230 = state_30993__$1;
(statearr_31026_33230[(2)] = inst_30973);

(statearr_31026_33230[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (10))){
var inst_30965 = (state_30993[(2)]);
var state_30993__$1 = state_30993;
var statearr_31028_33232 = state_30993__$1;
(statearr_31028_33232[(2)] = inst_30965);

(statearr_31028_33232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (18))){
var inst_30976 = (state_30993[(2)]);
var state_30993__$1 = state_30993;
var statearr_31030_33236 = state_30993__$1;
(statearr_31030_33236[(2)] = inst_30976);

(statearr_31030_33236[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30994 === (8))){
var inst_30962 = cljs.core.async.close_BANG_(to);
var state_30993__$1 = state_30993;
var statearr_31031_33237 = state_30993__$1;
(statearr_31031_33237[(2)] = inst_30962);

(statearr_31031_33237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30431__auto__,jobs,results,process,async))
;
return ((function (switch__30211__auto__,c__30431__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____0 = (function (){
var statearr_31035 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31035[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__);

(statearr_31035[(1)] = (1));

return statearr_31035;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____1 = (function (state_30993){
while(true){
var ret_value__30213__auto__ = (function (){try{while(true){
var result__30214__auto__ = switch__30211__auto__(state_30993);
if(cljs.core.keyword_identical_QMARK_(result__30214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30214__auto__;
}
break;
}
}catch (e31036){if((e31036 instanceof Object)){
var ex__30215__auto__ = e31036;
var statearr_31037_33240 = state_30993;
(statearr_31037_33240[(5)] = ex__30215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31036;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33241 = state_30993;
state_30993 = G__33241;
continue;
} else {
return ret_value__30213__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__ = function(state_30993){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____1.call(this,state_30993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30212__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30212__auto__;
})()
;})(switch__30211__auto__,c__30431__auto__,jobs,results,process,async))
})();
var state__30433__auto__ = (function (){var statearr_31038 = (f__30432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30432__auto__.cljs$core$IFn$_invoke$arity$0() : f__30432__auto__.call(null));
(statearr_31038[(6)] = c__30431__auto__);

return statearr_31038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30433__auto__);
});})(c__30431__auto__,jobs,results,process,async))
);

return c__30431__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31040 = arguments.length;
switch (G__31040) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31045 = arguments.length;
switch (G__31045) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31055 = arguments.length;
switch (G__31055) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30431__auto___33267 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30431__auto___33267,tc,fc){
return (function (){
var f__30432__auto__ = (function (){var switch__30211__auto__ = ((function (c__30431__auto___33267,tc,fc){
return (function (state_31082){
var state_val_31083 = (state_31082[(1)]);
if((state_val_31083 === (7))){
var inst_31078 = (state_31082[(2)]);
var state_31082__$1 = state_31082;
var statearr_31084_33268 = state_31082__$1;
(statearr_31084_33268[(2)] = inst_31078);

(statearr_31084_33268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31083 === (1))){
var state_31082__$1 = state_31082;
var statearr_31085_33269 = state_31082__$1;
(statearr_31085_33269[(2)] = null);

(statearr_31085_33269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31083 === (4))){
var inst_31059 = (state_31082[(7)]);
var inst_31059__$1 = (state_31082[(2)]);
var inst_31060 = (inst_31059__$1 == null);
var state_31082__$1 = (function (){var statearr_31086 = state_31082;
(statearr_31086[(7)] = inst_31059__$1);

return statearr_31086;
})();
if(cljs.core.truth_(inst_31060)){
var statearr_31087_33274 = state_31082__$1;
(statearr_31087_33274[(1)] = (5));

} else {
var statearr_31088_33278 = state_31082__$1;
(statearr_31088_33278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31083 === (13))){
var state_31082__$1 = state_31082;
var statearr_31089_33282 = state_31082__$1;
(statearr_31089_33282[(2)] = null);

(statearr_31089_33282[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31083 === (6))){
var inst_31059 = (state_31082[(7)]);
var inst_31065 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31059) : p.call(null,inst_31059));
var state_31082__$1 = state_31082;
if(cljs.core.truth_(inst_31065)){
var statearr_31090_33283 = state_31082__$1;
(statearr_31090_33283[(1)] = (9));

} else {
var statearr_31094_33284 = state_31082__$1;
(statearr_31094_33284[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31083 === (3))){
var inst_31080 = (state_31082[(2)]);
var state_31082__$1 = state_31082;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31082__$1,inst_31080);
} else {
if((state_val_31083 === (12))){
var state_31082__$1 = state_31082;
var statearr_31096_33291 = state_31082__$1;
(statearr_31096_33291[(2)] = null);

(statearr_31096_33291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31083 === (2))){
var state_31082__$1 = state_31082;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31082__$1,(4),ch);
} else {
if((state_val_31083 === (11))){
var inst_31059 = (state_31082[(7)]);
var inst_31069 = (state_31082[(2)]);
var state_31082__$1 = state_31082;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31082__$1,(8),inst_31069,inst_31059);
} else {
if((state_val_31083 === (9))){
var state_31082__$1 = state_31082;
var statearr_31097_33298 = state_31082__$1;
(statearr_31097_33298[(2)] = tc);

(statearr_31097_33298[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31083 === (5))){
var inst_31062 = cljs.core.async.close_BANG_(tc);
var inst_31063 = cljs.core.async.close_BANG_(fc);
var state_31082__$1 = (function (){var statearr_31100 = state_31082;
(statearr_31100[(8)] = inst_31062);

return statearr_31100;
})();
var statearr_31101_33302 = state_31082__$1;
(statearr_31101_33302[(2)] = inst_31063);

(statearr_31101_33302[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31083 === (14))){
var inst_31076 = (state_31082[(2)]);
var state_31082__$1 = state_31082;
var statearr_31102_33306 = state_31082__$1;
(statearr_31102_33306[(2)] = inst_31076);

(statearr_31102_33306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31083 === (10))){
var state_31082__$1 = state_31082;
var statearr_31103_33307 = state_31082__$1;
(statearr_31103_33307[(2)] = fc);

(statearr_31103_33307[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31083 === (8))){
var inst_31071 = (state_31082[(2)]);
var state_31082__$1 = state_31082;
if(cljs.core.truth_(inst_31071)){
var statearr_31104_33309 = state_31082__$1;
(statearr_31104_33309[(1)] = (12));

} else {
var statearr_31105_33310 = state_31082__$1;
(statearr_31105_33310[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30431__auto___33267,tc,fc))
;
return ((function (switch__30211__auto__,c__30431__auto___33267,tc,fc){
return (function() {
var cljs$core$async$state_machine__30212__auto__ = null;
var cljs$core$async$state_machine__30212__auto____0 = (function (){
var statearr_31106 = [null,null,null,null,null,null,null,null,null];
(statearr_31106[(0)] = cljs$core$async$state_machine__30212__auto__);

(statearr_31106[(1)] = (1));

return statearr_31106;
});
var cljs$core$async$state_machine__30212__auto____1 = (function (state_31082){
while(true){
var ret_value__30213__auto__ = (function (){try{while(true){
var result__30214__auto__ = switch__30211__auto__(state_31082);
if(cljs.core.keyword_identical_QMARK_(result__30214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30214__auto__;
}
break;
}
}catch (e31107){if((e31107 instanceof Object)){
var ex__30215__auto__ = e31107;
var statearr_31108_33312 = state_31082;
(statearr_31108_33312[(5)] = ex__30215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31107;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33313 = state_31082;
state_31082 = G__33313;
continue;
} else {
return ret_value__30213__auto__;
}
break;
}
});
cljs$core$async$state_machine__30212__auto__ = function(state_31082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30212__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30212__auto____1.call(this,state_31082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30212__auto____0;
cljs$core$async$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30212__auto____1;
return cljs$core$async$state_machine__30212__auto__;
})()
;})(switch__30211__auto__,c__30431__auto___33267,tc,fc))
})();
var state__30433__auto__ = (function (){var statearr_31109 = (f__30432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30432__auto__.cljs$core$IFn$_invoke$arity$0() : f__30432__auto__.call(null));
(statearr_31109[(6)] = c__30431__auto___33267);

return statearr_31109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30433__auto__);
});})(c__30431__auto___33267,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30431__auto__){
return (function (){
var f__30432__auto__ = (function (){var switch__30211__auto__ = ((function (c__30431__auto__){
return (function (state_31131){
var state_val_31132 = (state_31131[(1)]);
if((state_val_31132 === (7))){
var inst_31127 = (state_31131[(2)]);
var state_31131__$1 = state_31131;
var statearr_31137_33314 = state_31131__$1;
(statearr_31137_33314[(2)] = inst_31127);

(statearr_31137_33314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (1))){
var inst_31111 = init;
var state_31131__$1 = (function (){var statearr_31142 = state_31131;
(statearr_31142[(7)] = inst_31111);

return statearr_31142;
})();
var statearr_31143_33315 = state_31131__$1;
(statearr_31143_33315[(2)] = null);

(statearr_31143_33315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (4))){
var inst_31114 = (state_31131[(8)]);
var inst_31114__$1 = (state_31131[(2)]);
var inst_31115 = (inst_31114__$1 == null);
var state_31131__$1 = (function (){var statearr_31148 = state_31131;
(statearr_31148[(8)] = inst_31114__$1);

return statearr_31148;
})();
if(cljs.core.truth_(inst_31115)){
var statearr_31149_33316 = state_31131__$1;
(statearr_31149_33316[(1)] = (5));

} else {
var statearr_31150_33317 = state_31131__$1;
(statearr_31150_33317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (6))){
var inst_31118 = (state_31131[(9)]);
var inst_31111 = (state_31131[(7)]);
var inst_31114 = (state_31131[(8)]);
var inst_31118__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31111,inst_31114) : f.call(null,inst_31111,inst_31114));
var inst_31119 = cljs.core.reduced_QMARK_(inst_31118__$1);
var state_31131__$1 = (function (){var statearr_31151 = state_31131;
(statearr_31151[(9)] = inst_31118__$1);

return statearr_31151;
})();
if(inst_31119){
var statearr_31152_33320 = state_31131__$1;
(statearr_31152_33320[(1)] = (8));

} else {
var statearr_31153_33321 = state_31131__$1;
(statearr_31153_33321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (3))){
var inst_31129 = (state_31131[(2)]);
var state_31131__$1 = state_31131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31131__$1,inst_31129);
} else {
if((state_val_31132 === (2))){
var state_31131__$1 = state_31131;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31131__$1,(4),ch);
} else {
if((state_val_31132 === (9))){
var inst_31118 = (state_31131[(9)]);
var inst_31111 = inst_31118;
var state_31131__$1 = (function (){var statearr_31154 = state_31131;
(statearr_31154[(7)] = inst_31111);

return statearr_31154;
})();
var statearr_31155_33322 = state_31131__$1;
(statearr_31155_33322[(2)] = null);

(statearr_31155_33322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (5))){
var inst_31111 = (state_31131[(7)]);
var state_31131__$1 = state_31131;
var statearr_31156_33323 = state_31131__$1;
(statearr_31156_33323[(2)] = inst_31111);

(statearr_31156_33323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (10))){
var inst_31125 = (state_31131[(2)]);
var state_31131__$1 = state_31131;
var statearr_31157_33324 = state_31131__$1;
(statearr_31157_33324[(2)] = inst_31125);

(statearr_31157_33324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31132 === (8))){
var inst_31118 = (state_31131[(9)]);
var inst_31121 = cljs.core.deref(inst_31118);
var state_31131__$1 = state_31131;
var statearr_31158_33325 = state_31131__$1;
(statearr_31158_33325[(2)] = inst_31121);

(statearr_31158_33325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__30431__auto__))
;
return ((function (switch__30211__auto__,c__30431__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30212__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30212__auto____0 = (function (){
var statearr_31159 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31159[(0)] = cljs$core$async$reduce_$_state_machine__30212__auto__);

(statearr_31159[(1)] = (1));

return statearr_31159;
});
var cljs$core$async$reduce_$_state_machine__30212__auto____1 = (function (state_31131){
while(true){
var ret_value__30213__auto__ = (function (){try{while(true){
var result__30214__auto__ = switch__30211__auto__(state_31131);
if(cljs.core.keyword_identical_QMARK_(result__30214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30214__auto__;
}
break;
}
}catch (e31160){if((e31160 instanceof Object)){
var ex__30215__auto__ = e31160;
var statearr_31161_33326 = state_31131;
(statearr_31161_33326[(5)] = ex__30215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31160;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33329 = state_31131;
state_31131 = G__33329;
continue;
} else {
return ret_value__30213__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30212__auto__ = function(state_31131){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30212__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30212__auto____1.call(this,state_31131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30212__auto____0;
cljs$core$async$reduce_$_state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30212__auto____1;
return cljs$core$async$reduce_$_state_machine__30212__auto__;
})()
;})(switch__30211__auto__,c__30431__auto__))
})();
var state__30433__auto__ = (function (){var statearr_31162 = (f__30432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30432__auto__.cljs$core$IFn$_invoke$arity$0() : f__30432__auto__.call(null));
(statearr_31162[(6)] = c__30431__auto__);

return statearr_31162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30433__auto__);
});})(c__30431__auto__))
);

return c__30431__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30431__auto__,f__$1){
return (function (){
var f__30432__auto__ = (function (){var switch__30211__auto__ = ((function (c__30431__auto__,f__$1){
return (function (state_31168){
var state_val_31169 = (state_31168[(1)]);
if((state_val_31169 === (1))){
var inst_31163 = cljs.core.async.reduce(f__$1,init,ch);
var state_31168__$1 = state_31168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31168__$1,(2),inst_31163);
} else {
if((state_val_31169 === (2))){
var inst_31165 = (state_31168[(2)]);
var inst_31166 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31165) : f__$1.call(null,inst_31165));
var state_31168__$1 = state_31168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31168__$1,inst_31166);
} else {
return null;
}
}
});})(c__30431__auto__,f__$1))
;
return ((function (switch__30211__auto__,c__30431__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30212__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30212__auto____0 = (function (){
var statearr_31170 = [null,null,null,null,null,null,null];
(statearr_31170[(0)] = cljs$core$async$transduce_$_state_machine__30212__auto__);

(statearr_31170[(1)] = (1));

return statearr_31170;
});
var cljs$core$async$transduce_$_state_machine__30212__auto____1 = (function (state_31168){
while(true){
var ret_value__30213__auto__ = (function (){try{while(true){
var result__30214__auto__ = switch__30211__auto__(state_31168);
if(cljs.core.keyword_identical_QMARK_(result__30214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30214__auto__;
}
break;
}
}catch (e31171){if((e31171 instanceof Object)){
var ex__30215__auto__ = e31171;
var statearr_31174_33337 = state_31168;
(statearr_31174_33337[(5)] = ex__30215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31171;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33338 = state_31168;
state_31168 = G__33338;
continue;
} else {
return ret_value__30213__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30212__auto__ = function(state_31168){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30212__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30212__auto____1.call(this,state_31168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30212__auto____0;
cljs$core$async$transduce_$_state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30212__auto____1;
return cljs$core$async$transduce_$_state_machine__30212__auto__;
})()
;})(switch__30211__auto__,c__30431__auto__,f__$1))
})();
var state__30433__auto__ = (function (){var statearr_31176 = (f__30432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30432__auto__.cljs$core$IFn$_invoke$arity$0() : f__30432__auto__.call(null));
(statearr_31176[(6)] = c__30431__auto__);

return statearr_31176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30433__auto__);
});})(c__30431__auto__,f__$1))
);

return c__30431__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31178 = arguments.length;
switch (G__31178) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30431__auto__){
return (function (){
var f__30432__auto__ = (function (){var switch__30211__auto__ = ((function (c__30431__auto__){
return (function (state_31203){
var state_val_31204 = (state_31203[(1)]);
if((state_val_31204 === (7))){
var inst_31185 = (state_31203[(2)]);
var state_31203__$1 = state_31203;
var statearr_31206_33346 = state_31203__$1;
(statearr_31206_33346[(2)] = inst_31185);

(statearr_31206_33346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (1))){
var inst_31179 = cljs.core.seq(coll);
var inst_31180 = inst_31179;
var state_31203__$1 = (function (){var statearr_31208 = state_31203;
(statearr_31208[(7)] = inst_31180);

return statearr_31208;
})();
var statearr_31209_33349 = state_31203__$1;
(statearr_31209_33349[(2)] = null);

(statearr_31209_33349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (4))){
var inst_31180 = (state_31203[(7)]);
var inst_31183 = cljs.core.first(inst_31180);
var state_31203__$1 = state_31203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31203__$1,(7),ch,inst_31183);
} else {
if((state_val_31204 === (13))){
var inst_31197 = (state_31203[(2)]);
var state_31203__$1 = state_31203;
var statearr_31213_33363 = state_31203__$1;
(statearr_31213_33363[(2)] = inst_31197);

(statearr_31213_33363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (6))){
var inst_31188 = (state_31203[(2)]);
var state_31203__$1 = state_31203;
if(cljs.core.truth_(inst_31188)){
var statearr_31218_33364 = state_31203__$1;
(statearr_31218_33364[(1)] = (8));

} else {
var statearr_31219_33365 = state_31203__$1;
(statearr_31219_33365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (3))){
var inst_31201 = (state_31203[(2)]);
var state_31203__$1 = state_31203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31203__$1,inst_31201);
} else {
if((state_val_31204 === (12))){
var state_31203__$1 = state_31203;
var statearr_31220_33366 = state_31203__$1;
(statearr_31220_33366[(2)] = null);

(statearr_31220_33366[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (2))){
var inst_31180 = (state_31203[(7)]);
var state_31203__$1 = state_31203;
if(cljs.core.truth_(inst_31180)){
var statearr_31223_33367 = state_31203__$1;
(statearr_31223_33367[(1)] = (4));

} else {
var statearr_31224_33368 = state_31203__$1;
(statearr_31224_33368[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (11))){
var inst_31194 = cljs.core.async.close_BANG_(ch);
var state_31203__$1 = state_31203;
var statearr_31225_33369 = state_31203__$1;
(statearr_31225_33369[(2)] = inst_31194);

(statearr_31225_33369[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (9))){
var state_31203__$1 = state_31203;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31232_33370 = state_31203__$1;
(statearr_31232_33370[(1)] = (11));

} else {
var statearr_31233_33371 = state_31203__$1;
(statearr_31233_33371[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (5))){
var inst_31180 = (state_31203[(7)]);
var state_31203__$1 = state_31203;
var statearr_31234_33372 = state_31203__$1;
(statearr_31234_33372[(2)] = inst_31180);

(statearr_31234_33372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (10))){
var inst_31199 = (state_31203[(2)]);
var state_31203__$1 = state_31203;
var statearr_31235_33373 = state_31203__$1;
(statearr_31235_33373[(2)] = inst_31199);

(statearr_31235_33373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31204 === (8))){
var inst_31180 = (state_31203[(7)]);
var inst_31190 = cljs.core.next(inst_31180);
var inst_31180__$1 = inst_31190;
var state_31203__$1 = (function (){var statearr_31236 = state_31203;
(statearr_31236[(7)] = inst_31180__$1);

return statearr_31236;
})();
var statearr_31237_33380 = state_31203__$1;
(statearr_31237_33380[(2)] = null);

(statearr_31237_33380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30431__auto__))
;
return ((function (switch__30211__auto__,c__30431__auto__){
return (function() {
var cljs$core$async$state_machine__30212__auto__ = null;
var cljs$core$async$state_machine__30212__auto____0 = (function (){
var statearr_31238 = [null,null,null,null,null,null,null,null];
(statearr_31238[(0)] = cljs$core$async$state_machine__30212__auto__);

(statearr_31238[(1)] = (1));

return statearr_31238;
});
var cljs$core$async$state_machine__30212__auto____1 = (function (state_31203){
while(true){
var ret_value__30213__auto__ = (function (){try{while(true){
var result__30214__auto__ = switch__30211__auto__(state_31203);
if(cljs.core.keyword_identical_QMARK_(result__30214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30214__auto__;
}
break;
}
}catch (e31239){if((e31239 instanceof Object)){
var ex__30215__auto__ = e31239;
var statearr_31240_33381 = state_31203;
(statearr_31240_33381[(5)] = ex__30215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31239;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33382 = state_31203;
state_31203 = G__33382;
continue;
} else {
return ret_value__30213__auto__;
}
break;
}
});
cljs$core$async$state_machine__30212__auto__ = function(state_31203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30212__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30212__auto____1.call(this,state_31203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30212__auto____0;
cljs$core$async$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30212__auto____1;
return cljs$core$async$state_machine__30212__auto__;
})()
;})(switch__30211__auto__,c__30431__auto__))
})();
var state__30433__auto__ = (function (){var statearr_31242 = (f__30432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30432__auto__.cljs$core$IFn$_invoke$arity$0() : f__30432__auto__.call(null));
(statearr_31242[(6)] = c__30431__auto__);

return statearr_31242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30433__auto__);
});})(c__30431__auto__))
);

return c__30431__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31255 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31255 = (function (ch,cs,meta31256){
this.ch = ch;
this.cs = cs;
this.meta31256 = meta31256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31257,meta31256__$1){
var self__ = this;
var _31257__$1 = this;
return (new cljs.core.async.t_cljs$core$async31255(self__.ch,self__.cs,meta31256__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31257){
var self__ = this;
var _31257__$1 = this;
return self__.meta31256;
});})(cs))
;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31255.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31255.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31256","meta31256",-38736745,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31255.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31255";

cljs.core.async.t_cljs$core$async31255.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31255");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31255.
 */
cljs.core.async.__GT_t_cljs$core$async31255 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31255(ch__$1,cs__$1,meta31256){
return (new cljs.core.async.t_cljs$core$async31255(ch__$1,cs__$1,meta31256));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31255(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30431__auto___33395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30431__auto___33395,cs,m,dchan,dctr,done){
return (function (){
var f__30432__auto__ = (function (){var switch__30211__auto__ = ((function (c__30431__auto___33395,cs,m,dchan,dctr,done){
return (function (state_31414){
var state_val_31416 = (state_31414[(1)]);
if((state_val_31416 === (7))){
var inst_31409 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31418_33396 = state_31414__$1;
(statearr_31418_33396[(2)] = inst_31409);

(statearr_31418_33396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (20))){
var inst_31310 = (state_31414[(7)]);
var inst_31322 = cljs.core.first(inst_31310);
var inst_31323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31322,(0),null);
var inst_31324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31322,(1),null);
var state_31414__$1 = (function (){var statearr_31419 = state_31414;
(statearr_31419[(8)] = inst_31323);

return statearr_31419;
})();
if(cljs.core.truth_(inst_31324)){
var statearr_31420_33397 = state_31414__$1;
(statearr_31420_33397[(1)] = (22));

} else {
var statearr_31421_33398 = state_31414__$1;
(statearr_31421_33398[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (27))){
var inst_31279 = (state_31414[(9)]);
var inst_31354 = (state_31414[(10)]);
var inst_31356 = (state_31414[(11)]);
var inst_31361 = (state_31414[(12)]);
var inst_31361__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31354,inst_31356);
var inst_31362 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31361__$1,inst_31279,done);
var state_31414__$1 = (function (){var statearr_31422 = state_31414;
(statearr_31422[(12)] = inst_31361__$1);

return statearr_31422;
})();
if(cljs.core.truth_(inst_31362)){
var statearr_31423_33399 = state_31414__$1;
(statearr_31423_33399[(1)] = (30));

} else {
var statearr_31425_33400 = state_31414__$1;
(statearr_31425_33400[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (1))){
var state_31414__$1 = state_31414;
var statearr_31426_33401 = state_31414__$1;
(statearr_31426_33401[(2)] = null);

(statearr_31426_33401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (24))){
var inst_31310 = (state_31414[(7)]);
var inst_31329 = (state_31414[(2)]);
var inst_31330 = cljs.core.next(inst_31310);
var inst_31288 = inst_31330;
var inst_31289 = null;
var inst_31290 = (0);
var inst_31291 = (0);
var state_31414__$1 = (function (){var statearr_31427 = state_31414;
(statearr_31427[(13)] = inst_31291);

(statearr_31427[(14)] = inst_31288);

(statearr_31427[(15)] = inst_31289);

(statearr_31427[(16)] = inst_31329);

(statearr_31427[(17)] = inst_31290);

return statearr_31427;
})();
var statearr_31428_33402 = state_31414__$1;
(statearr_31428_33402[(2)] = null);

(statearr_31428_33402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (39))){
var state_31414__$1 = state_31414;
var statearr_31432_33403 = state_31414__$1;
(statearr_31432_33403[(2)] = null);

(statearr_31432_33403[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (4))){
var inst_31279 = (state_31414[(9)]);
var inst_31279__$1 = (state_31414[(2)]);
var inst_31280 = (inst_31279__$1 == null);
var state_31414__$1 = (function (){var statearr_31433 = state_31414;
(statearr_31433[(9)] = inst_31279__$1);

return statearr_31433;
})();
if(cljs.core.truth_(inst_31280)){
var statearr_31434_33404 = state_31414__$1;
(statearr_31434_33404[(1)] = (5));

} else {
var statearr_31435_33405 = state_31414__$1;
(statearr_31435_33405[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (15))){
var inst_31291 = (state_31414[(13)]);
var inst_31288 = (state_31414[(14)]);
var inst_31289 = (state_31414[(15)]);
var inst_31290 = (state_31414[(17)]);
var inst_31306 = (state_31414[(2)]);
var inst_31307 = (inst_31291 + (1));
var tmp31429 = inst_31288;
var tmp31430 = inst_31289;
var tmp31431 = inst_31290;
var inst_31288__$1 = tmp31429;
var inst_31289__$1 = tmp31430;
var inst_31290__$1 = tmp31431;
var inst_31291__$1 = inst_31307;
var state_31414__$1 = (function (){var statearr_31436 = state_31414;
(statearr_31436[(18)] = inst_31306);

(statearr_31436[(13)] = inst_31291__$1);

(statearr_31436[(14)] = inst_31288__$1);

(statearr_31436[(15)] = inst_31289__$1);

(statearr_31436[(17)] = inst_31290__$1);

return statearr_31436;
})();
var statearr_31437_33412 = state_31414__$1;
(statearr_31437_33412[(2)] = null);

(statearr_31437_33412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (21))){
var inst_31333 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31441_33413 = state_31414__$1;
(statearr_31441_33413[(2)] = inst_31333);

(statearr_31441_33413[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (31))){
var inst_31361 = (state_31414[(12)]);
var inst_31365 = done(null);
var inst_31366 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31361);
var state_31414__$1 = (function (){var statearr_31442 = state_31414;
(statearr_31442[(19)] = inst_31365);

return statearr_31442;
})();
var statearr_31444_33414 = state_31414__$1;
(statearr_31444_33414[(2)] = inst_31366);

(statearr_31444_33414[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (32))){
var inst_31353 = (state_31414[(20)]);
var inst_31355 = (state_31414[(21)]);
var inst_31354 = (state_31414[(10)]);
var inst_31356 = (state_31414[(11)]);
var inst_31368 = (state_31414[(2)]);
var inst_31369 = (inst_31356 + (1));
var tmp31438 = inst_31353;
var tmp31439 = inst_31355;
var tmp31440 = inst_31354;
var inst_31353__$1 = tmp31438;
var inst_31354__$1 = tmp31440;
var inst_31355__$1 = tmp31439;
var inst_31356__$1 = inst_31369;
var state_31414__$1 = (function (){var statearr_31445 = state_31414;
(statearr_31445[(20)] = inst_31353__$1);

(statearr_31445[(21)] = inst_31355__$1);

(statearr_31445[(10)] = inst_31354__$1);

(statearr_31445[(11)] = inst_31356__$1);

(statearr_31445[(22)] = inst_31368);

return statearr_31445;
})();
var statearr_31446_33415 = state_31414__$1;
(statearr_31446_33415[(2)] = null);

(statearr_31446_33415[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (40))){
var inst_31381 = (state_31414[(23)]);
var inst_31385 = done(null);
var inst_31386 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31381);
var state_31414__$1 = (function (){var statearr_31447 = state_31414;
(statearr_31447[(24)] = inst_31385);

return statearr_31447;
})();
var statearr_31448_33416 = state_31414__$1;
(statearr_31448_33416[(2)] = inst_31386);

(statearr_31448_33416[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (33))){
var inst_31372 = (state_31414[(25)]);
var inst_31374 = cljs.core.chunked_seq_QMARK_(inst_31372);
var state_31414__$1 = state_31414;
if(inst_31374){
var statearr_31452_33419 = state_31414__$1;
(statearr_31452_33419[(1)] = (36));

} else {
var statearr_31453_33420 = state_31414__$1;
(statearr_31453_33420[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (13))){
var inst_31300 = (state_31414[(26)]);
var inst_31303 = cljs.core.async.close_BANG_(inst_31300);
var state_31414__$1 = state_31414;
var statearr_31454_33421 = state_31414__$1;
(statearr_31454_33421[(2)] = inst_31303);

(statearr_31454_33421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (22))){
var inst_31323 = (state_31414[(8)]);
var inst_31326 = cljs.core.async.close_BANG_(inst_31323);
var state_31414__$1 = state_31414;
var statearr_31456_33422 = state_31414__$1;
(statearr_31456_33422[(2)] = inst_31326);

(statearr_31456_33422[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (36))){
var inst_31372 = (state_31414[(25)]);
var inst_31376 = cljs.core.chunk_first(inst_31372);
var inst_31377 = cljs.core.chunk_rest(inst_31372);
var inst_31378 = cljs.core.count(inst_31376);
var inst_31353 = inst_31377;
var inst_31354 = inst_31376;
var inst_31355 = inst_31378;
var inst_31356 = (0);
var state_31414__$1 = (function (){var statearr_31458 = state_31414;
(statearr_31458[(20)] = inst_31353);

(statearr_31458[(21)] = inst_31355);

(statearr_31458[(10)] = inst_31354);

(statearr_31458[(11)] = inst_31356);

return statearr_31458;
})();
var statearr_31459_33425 = state_31414__$1;
(statearr_31459_33425[(2)] = null);

(statearr_31459_33425[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (41))){
var inst_31372 = (state_31414[(25)]);
var inst_31388 = (state_31414[(2)]);
var inst_31389 = cljs.core.next(inst_31372);
var inst_31353 = inst_31389;
var inst_31354 = null;
var inst_31355 = (0);
var inst_31356 = (0);
var state_31414__$1 = (function (){var statearr_31466 = state_31414;
(statearr_31466[(20)] = inst_31353);

(statearr_31466[(21)] = inst_31355);

(statearr_31466[(10)] = inst_31354);

(statearr_31466[(27)] = inst_31388);

(statearr_31466[(11)] = inst_31356);

return statearr_31466;
})();
var statearr_31467_33427 = state_31414__$1;
(statearr_31467_33427[(2)] = null);

(statearr_31467_33427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (43))){
var state_31414__$1 = state_31414;
var statearr_31468_33429 = state_31414__$1;
(statearr_31468_33429[(2)] = null);

(statearr_31468_33429[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (29))){
var inst_31397 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31469_33430 = state_31414__$1;
(statearr_31469_33430[(2)] = inst_31397);

(statearr_31469_33430[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (44))){
var inst_31406 = (state_31414[(2)]);
var state_31414__$1 = (function (){var statearr_31470 = state_31414;
(statearr_31470[(28)] = inst_31406);

return statearr_31470;
})();
var statearr_31471_33431 = state_31414__$1;
(statearr_31471_33431[(2)] = null);

(statearr_31471_33431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (6))){
var inst_31343 = (state_31414[(29)]);
var inst_31342 = cljs.core.deref(cs);
var inst_31343__$1 = cljs.core.keys(inst_31342);
var inst_31344 = cljs.core.count(inst_31343__$1);
var inst_31345 = cljs.core.reset_BANG_(dctr,inst_31344);
var inst_31350 = cljs.core.seq(inst_31343__$1);
var inst_31353 = inst_31350;
var inst_31354 = null;
var inst_31355 = (0);
var inst_31356 = (0);
var state_31414__$1 = (function (){var statearr_31476 = state_31414;
(statearr_31476[(30)] = inst_31345);

(statearr_31476[(20)] = inst_31353);

(statearr_31476[(21)] = inst_31355);

(statearr_31476[(10)] = inst_31354);

(statearr_31476[(11)] = inst_31356);

(statearr_31476[(29)] = inst_31343__$1);

return statearr_31476;
})();
var statearr_31481_33432 = state_31414__$1;
(statearr_31481_33432[(2)] = null);

(statearr_31481_33432[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (28))){
var inst_31353 = (state_31414[(20)]);
var inst_31372 = (state_31414[(25)]);
var inst_31372__$1 = cljs.core.seq(inst_31353);
var state_31414__$1 = (function (){var statearr_31502 = state_31414;
(statearr_31502[(25)] = inst_31372__$1);

return statearr_31502;
})();
if(inst_31372__$1){
var statearr_31503_33433 = state_31414__$1;
(statearr_31503_33433[(1)] = (33));

} else {
var statearr_31504_33434 = state_31414__$1;
(statearr_31504_33434[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (25))){
var inst_31355 = (state_31414[(21)]);
var inst_31356 = (state_31414[(11)]);
var inst_31358 = (inst_31356 < inst_31355);
var inst_31359 = inst_31358;
var state_31414__$1 = state_31414;
if(cljs.core.truth_(inst_31359)){
var statearr_31505_33435 = state_31414__$1;
(statearr_31505_33435[(1)] = (27));

} else {
var statearr_31506_33436 = state_31414__$1;
(statearr_31506_33436[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (34))){
var state_31414__$1 = state_31414;
var statearr_31507_33437 = state_31414__$1;
(statearr_31507_33437[(2)] = null);

(statearr_31507_33437[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (17))){
var state_31414__$1 = state_31414;
var statearr_31508_33438 = state_31414__$1;
(statearr_31508_33438[(2)] = null);

(statearr_31508_33438[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (3))){
var inst_31411 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31414__$1,inst_31411);
} else {
if((state_val_31416 === (12))){
var inst_31338 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31514_33440 = state_31414__$1;
(statearr_31514_33440[(2)] = inst_31338);

(statearr_31514_33440[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (2))){
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31414__$1,(4),ch);
} else {
if((state_val_31416 === (23))){
var state_31414__$1 = state_31414;
var statearr_31515_33442 = state_31414__$1;
(statearr_31515_33442[(2)] = null);

(statearr_31515_33442[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (35))){
var inst_31395 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31516_33443 = state_31414__$1;
(statearr_31516_33443[(2)] = inst_31395);

(statearr_31516_33443[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (19))){
var inst_31310 = (state_31414[(7)]);
var inst_31314 = cljs.core.chunk_first(inst_31310);
var inst_31315 = cljs.core.chunk_rest(inst_31310);
var inst_31316 = cljs.core.count(inst_31314);
var inst_31288 = inst_31315;
var inst_31289 = inst_31314;
var inst_31290 = inst_31316;
var inst_31291 = (0);
var state_31414__$1 = (function (){var statearr_31517 = state_31414;
(statearr_31517[(13)] = inst_31291);

(statearr_31517[(14)] = inst_31288);

(statearr_31517[(15)] = inst_31289);

(statearr_31517[(17)] = inst_31290);

return statearr_31517;
})();
var statearr_31518_33444 = state_31414__$1;
(statearr_31518_33444[(2)] = null);

(statearr_31518_33444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (11))){
var inst_31310 = (state_31414[(7)]);
var inst_31288 = (state_31414[(14)]);
var inst_31310__$1 = cljs.core.seq(inst_31288);
var state_31414__$1 = (function (){var statearr_31520 = state_31414;
(statearr_31520[(7)] = inst_31310__$1);

return statearr_31520;
})();
if(inst_31310__$1){
var statearr_31521_33445 = state_31414__$1;
(statearr_31521_33445[(1)] = (16));

} else {
var statearr_31522_33446 = state_31414__$1;
(statearr_31522_33446[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (9))){
var inst_31340 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31523_33447 = state_31414__$1;
(statearr_31523_33447[(2)] = inst_31340);

(statearr_31523_33447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (5))){
var inst_31286 = cljs.core.deref(cs);
var inst_31287 = cljs.core.seq(inst_31286);
var inst_31288 = inst_31287;
var inst_31289 = null;
var inst_31290 = (0);
var inst_31291 = (0);
var state_31414__$1 = (function (){var statearr_31524 = state_31414;
(statearr_31524[(13)] = inst_31291);

(statearr_31524[(14)] = inst_31288);

(statearr_31524[(15)] = inst_31289);

(statearr_31524[(17)] = inst_31290);

return statearr_31524;
})();
var statearr_31525_33448 = state_31414__$1;
(statearr_31525_33448[(2)] = null);

(statearr_31525_33448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (14))){
var state_31414__$1 = state_31414;
var statearr_31526_33449 = state_31414__$1;
(statearr_31526_33449[(2)] = null);

(statearr_31526_33449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (45))){
var inst_31403 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31528_33450 = state_31414__$1;
(statearr_31528_33450[(2)] = inst_31403);

(statearr_31528_33450[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (26))){
var inst_31343 = (state_31414[(29)]);
var inst_31399 = (state_31414[(2)]);
var inst_31400 = cljs.core.seq(inst_31343);
var state_31414__$1 = (function (){var statearr_31529 = state_31414;
(statearr_31529[(31)] = inst_31399);

return statearr_31529;
})();
if(inst_31400){
var statearr_31530_33452 = state_31414__$1;
(statearr_31530_33452[(1)] = (42));

} else {
var statearr_31531_33453 = state_31414__$1;
(statearr_31531_33453[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (16))){
var inst_31310 = (state_31414[(7)]);
var inst_31312 = cljs.core.chunked_seq_QMARK_(inst_31310);
var state_31414__$1 = state_31414;
if(inst_31312){
var statearr_31532_33454 = state_31414__$1;
(statearr_31532_33454[(1)] = (19));

} else {
var statearr_31533_33455 = state_31414__$1;
(statearr_31533_33455[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (38))){
var inst_31392 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31534_33460 = state_31414__$1;
(statearr_31534_33460[(2)] = inst_31392);

(statearr_31534_33460[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (30))){
var state_31414__$1 = state_31414;
var statearr_31538_33461 = state_31414__$1;
(statearr_31538_33461[(2)] = null);

(statearr_31538_33461[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (10))){
var inst_31291 = (state_31414[(13)]);
var inst_31289 = (state_31414[(15)]);
var inst_31299 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31289,inst_31291);
var inst_31300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31299,(0),null);
var inst_31301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31299,(1),null);
var state_31414__$1 = (function (){var statearr_31539 = state_31414;
(statearr_31539[(26)] = inst_31300);

return statearr_31539;
})();
if(cljs.core.truth_(inst_31301)){
var statearr_31540_33462 = state_31414__$1;
(statearr_31540_33462[(1)] = (13));

} else {
var statearr_31541_33463 = state_31414__$1;
(statearr_31541_33463[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (18))){
var inst_31336 = (state_31414[(2)]);
var state_31414__$1 = state_31414;
var statearr_31542_33464 = state_31414__$1;
(statearr_31542_33464[(2)] = inst_31336);

(statearr_31542_33464[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (42))){
var state_31414__$1 = state_31414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31414__$1,(45),dchan);
} else {
if((state_val_31416 === (37))){
var inst_31279 = (state_31414[(9)]);
var inst_31381 = (state_31414[(23)]);
var inst_31372 = (state_31414[(25)]);
var inst_31381__$1 = cljs.core.first(inst_31372);
var inst_31382 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31381__$1,inst_31279,done);
var state_31414__$1 = (function (){var statearr_31543 = state_31414;
(statearr_31543[(23)] = inst_31381__$1);

return statearr_31543;
})();
if(cljs.core.truth_(inst_31382)){
var statearr_31544_33465 = state_31414__$1;
(statearr_31544_33465[(1)] = (39));

} else {
var statearr_31545_33466 = state_31414__$1;
(statearr_31545_33466[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31416 === (8))){
var inst_31291 = (state_31414[(13)]);
var inst_31290 = (state_31414[(17)]);
var inst_31293 = (inst_31291 < inst_31290);
var inst_31294 = inst_31293;
var state_31414__$1 = state_31414;
if(cljs.core.truth_(inst_31294)){
var statearr_31546_33467 = state_31414__$1;
(statearr_31546_33467[(1)] = (10));

} else {
var statearr_31547_33472 = state_31414__$1;
(statearr_31547_33472[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30431__auto___33395,cs,m,dchan,dctr,done))
;
return ((function (switch__30211__auto__,c__30431__auto___33395,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30212__auto__ = null;
var cljs$core$async$mult_$_state_machine__30212__auto____0 = (function (){
var statearr_31548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31548[(0)] = cljs$core$async$mult_$_state_machine__30212__auto__);

(statearr_31548[(1)] = (1));

return statearr_31548;
});
var cljs$core$async$mult_$_state_machine__30212__auto____1 = (function (state_31414){
while(true){
var ret_value__30213__auto__ = (function (){try{while(true){
var result__30214__auto__ = switch__30211__auto__(state_31414);
if(cljs.core.keyword_identical_QMARK_(result__30214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30214__auto__;
}
break;
}
}catch (e31549){if((e31549 instanceof Object)){
var ex__30215__auto__ = e31549;
var statearr_31550_33482 = state_31414;
(statearr_31550_33482[(5)] = ex__30215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31549;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33486 = state_31414;
state_31414 = G__33486;
continue;
} else {
return ret_value__30213__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30212__auto__ = function(state_31414){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30212__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30212__auto____1.call(this,state_31414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30212__auto____0;
cljs$core$async$mult_$_state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30212__auto____1;
return cljs$core$async$mult_$_state_machine__30212__auto__;
})()
;})(switch__30211__auto__,c__30431__auto___33395,cs,m,dchan,dctr,done))
})();
var state__30433__auto__ = (function (){var statearr_31551 = (f__30432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30432__auto__.cljs$core$IFn$_invoke$arity$0() : f__30432__auto__.call(null));
(statearr_31551[(6)] = c__30431__auto___33395);

return statearr_31551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30433__auto__);
});})(c__30431__auto___33395,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31553 = arguments.length;
switch (G__31553) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33504 = arguments.length;
var i__4731__auto___33505 = (0);
while(true){
if((i__4731__auto___33505 < len__4730__auto___33504)){
args__4736__auto__.push((arguments[i__4731__auto___33505]));

var G__33506 = (i__4731__auto___33505 + (1));
i__4731__auto___33505 = G__33506;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31585){
var map__31586 = p__31585;
var map__31586__$1 = (((((!((map__31586 == null))))?(((((map__31586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31586):map__31586);
var opts = map__31586__$1;
var statearr_31588_33511 = state;
(statearr_31588_33511[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__31586,map__31586__$1,opts){
return (function (val){
var statearr_31589_33512 = state;
(statearr_31589_33512[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__31586,map__31586__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_31594_33513 = state;
(statearr_31594_33513[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31581){
var G__31582 = cljs.core.first(seq31581);
var seq31581__$1 = cljs.core.next(seq31581);
var G__31583 = cljs.core.first(seq31581__$1);
var seq31581__$2 = cljs.core.next(seq31581__$1);
var G__31584 = cljs.core.first(seq31581__$2);
var seq31581__$3 = cljs.core.next(seq31581__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31582,G__31583,G__31584,seq31581__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31601 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31601 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31602){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31602 = meta31602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31603,meta31602__$1){
var self__ = this;
var _31603__$1 = this;
return (new cljs.core.async.t_cljs$core$async31601(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31602__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31601.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31603){
var self__ = this;
var _31603__$1 = this;
return self__.meta31602;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31601.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31601.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31601.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31601.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31601.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31601.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31601.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31601.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31601.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31602","meta31602",-791392332,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31601.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31601";

cljs.core.async.t_cljs$core$async31601.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31601");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31601.
 */
cljs.core.async.__GT_t_cljs$core$async31601 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31601(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31602){
return (new cljs.core.async.t_cljs$core$async31601(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31602));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31601(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30431__auto___33529 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30431__auto___33529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30432__auto__ = (function (){var switch__30211__auto__ = ((function (c__30431__auto___33529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31727){
var state_val_31728 = (state_31727[(1)]);
if((state_val_31728 === (7))){
var inst_31635 = (state_31727[(2)]);
var state_31727__$1 = state_31727;
var statearr_31730_33534 = state_31727__$1;
(statearr_31730_33534[(2)] = inst_31635);

(statearr_31730_33534[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (20))){
var inst_31649 = (state_31727[(7)]);
var state_31727__$1 = state_31727;
var statearr_31731_33535 = state_31727__$1;
(statearr_31731_33535[(2)] = inst_31649);

(statearr_31731_33535[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (27))){
var state_31727__$1 = state_31727;
var statearr_31735_33536 = state_31727__$1;
(statearr_31735_33536[(2)] = null);

(statearr_31735_33536[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (1))){
var inst_31622 = (state_31727[(8)]);
var inst_31622__$1 = calc_state();
var inst_31624 = (inst_31622__$1 == null);
var inst_31625 = cljs.core.not(inst_31624);
var state_31727__$1 = (function (){var statearr_31737 = state_31727;
(statearr_31737[(8)] = inst_31622__$1);

return statearr_31737;
})();
if(inst_31625){
var statearr_31738_33537 = state_31727__$1;
(statearr_31738_33537[(1)] = (2));

} else {
var statearr_31739_33538 = state_31727__$1;
(statearr_31739_33538[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (24))){
var inst_31699 = (state_31727[(9)]);
var inst_31685 = (state_31727[(10)]);
var inst_31675 = (state_31727[(11)]);
var inst_31699__$1 = (inst_31675.cljs$core$IFn$_invoke$arity$1 ? inst_31675.cljs$core$IFn$_invoke$arity$1(inst_31685) : inst_31675.call(null,inst_31685));
var state_31727__$1 = (function (){var statearr_31742 = state_31727;
(statearr_31742[(9)] = inst_31699__$1);

return statearr_31742;
})();
if(cljs.core.truth_(inst_31699__$1)){
var statearr_31743_33539 = state_31727__$1;
(statearr_31743_33539[(1)] = (29));

} else {
var statearr_31744_33540 = state_31727__$1;
(statearr_31744_33540[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (4))){
var inst_31640 = (state_31727[(2)]);
var state_31727__$1 = state_31727;
if(cljs.core.truth_(inst_31640)){
var statearr_31746_33541 = state_31727__$1;
(statearr_31746_33541[(1)] = (8));

} else {
var statearr_31747_33542 = state_31727__$1;
(statearr_31747_33542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (15))){
var inst_31669 = (state_31727[(2)]);
var state_31727__$1 = state_31727;
if(cljs.core.truth_(inst_31669)){
var statearr_31748_33543 = state_31727__$1;
(statearr_31748_33543[(1)] = (19));

} else {
var statearr_31749_33544 = state_31727__$1;
(statearr_31749_33544[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (21))){
var inst_31674 = (state_31727[(12)]);
var inst_31674__$1 = (state_31727[(2)]);
var inst_31675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31674__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31674__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31674__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31727__$1 = (function (){var statearr_31752 = state_31727;
(statearr_31752[(12)] = inst_31674__$1);

(statearr_31752[(13)] = inst_31676);

(statearr_31752[(11)] = inst_31675);

return statearr_31752;
})();
return cljs.core.async.ioc_alts_BANG_(state_31727__$1,(22),inst_31678);
} else {
if((state_val_31728 === (31))){
var inst_31707 = (state_31727[(2)]);
var state_31727__$1 = state_31727;
if(cljs.core.truth_(inst_31707)){
var statearr_31753_33548 = state_31727__$1;
(statearr_31753_33548[(1)] = (32));

} else {
var statearr_31754_33549 = state_31727__$1;
(statearr_31754_33549[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (32))){
var inst_31684 = (state_31727[(14)]);
var state_31727__$1 = state_31727;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31727__$1,(35),out,inst_31684);
} else {
if((state_val_31728 === (33))){
var inst_31674 = (state_31727[(12)]);
var inst_31649 = inst_31674;
var state_31727__$1 = (function (){var statearr_31758 = state_31727;
(statearr_31758[(7)] = inst_31649);

return statearr_31758;
})();
var statearr_31759_33551 = state_31727__$1;
(statearr_31759_33551[(2)] = null);

(statearr_31759_33551[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (13))){
var inst_31649 = (state_31727[(7)]);
var inst_31657 = inst_31649.cljs$lang$protocol_mask$partition0$;
var inst_31658 = (inst_31657 & (64));
var inst_31660 = inst_31649.cljs$core$ISeq$;
var inst_31661 = (cljs.core.PROTOCOL_SENTINEL === inst_31660);
var inst_31662 = ((inst_31658) || (inst_31661));
var state_31727__$1 = state_31727;
if(cljs.core.truth_(inst_31662)){
var statearr_31762_33553 = state_31727__$1;
(statearr_31762_33553[(1)] = (16));

} else {
var statearr_31763_33554 = state_31727__$1;
(statearr_31763_33554[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (22))){
var inst_31685 = (state_31727[(10)]);
var inst_31684 = (state_31727[(14)]);
var inst_31683 = (state_31727[(2)]);
var inst_31684__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31683,(0),null);
var inst_31685__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31683,(1),null);
var inst_31686 = (inst_31684__$1 == null);
var inst_31687 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31685__$1,change);
var inst_31688 = ((inst_31686) || (inst_31687));
var state_31727__$1 = (function (){var statearr_31764 = state_31727;
(statearr_31764[(10)] = inst_31685__$1);

(statearr_31764[(14)] = inst_31684__$1);

return statearr_31764;
})();
if(cljs.core.truth_(inst_31688)){
var statearr_31766_33562 = state_31727__$1;
(statearr_31766_33562[(1)] = (23));

} else {
var statearr_31767_33563 = state_31727__$1;
(statearr_31767_33563[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (36))){
var inst_31674 = (state_31727[(12)]);
var inst_31649 = inst_31674;
var state_31727__$1 = (function (){var statearr_31768 = state_31727;
(statearr_31768[(7)] = inst_31649);

return statearr_31768;
})();
var statearr_31769_33568 = state_31727__$1;
(statearr_31769_33568[(2)] = null);

(statearr_31769_33568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (29))){
var inst_31699 = (state_31727[(9)]);
var state_31727__$1 = state_31727;
var statearr_31771_33570 = state_31727__$1;
(statearr_31771_33570[(2)] = inst_31699);

(statearr_31771_33570[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (6))){
var state_31727__$1 = state_31727;
var statearr_31772_33575 = state_31727__$1;
(statearr_31772_33575[(2)] = false);

(statearr_31772_33575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (28))){
var inst_31695 = (state_31727[(2)]);
var inst_31696 = calc_state();
var inst_31649 = inst_31696;
var state_31727__$1 = (function (){var statearr_31773 = state_31727;
(statearr_31773[(7)] = inst_31649);

(statearr_31773[(15)] = inst_31695);

return statearr_31773;
})();
var statearr_31774_33576 = state_31727__$1;
(statearr_31774_33576[(2)] = null);

(statearr_31774_33576[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (25))){
var inst_31721 = (state_31727[(2)]);
var state_31727__$1 = state_31727;
var statearr_31779_33577 = state_31727__$1;
(statearr_31779_33577[(2)] = inst_31721);

(statearr_31779_33577[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (34))){
var inst_31719 = (state_31727[(2)]);
var state_31727__$1 = state_31727;
var statearr_31780_33580 = state_31727__$1;
(statearr_31780_33580[(2)] = inst_31719);

(statearr_31780_33580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (17))){
var state_31727__$1 = state_31727;
var statearr_31781_33581 = state_31727__$1;
(statearr_31781_33581[(2)] = false);

(statearr_31781_33581[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (3))){
var state_31727__$1 = state_31727;
var statearr_31787_33582 = state_31727__$1;
(statearr_31787_33582[(2)] = false);

(statearr_31787_33582[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (12))){
var inst_31723 = (state_31727[(2)]);
var state_31727__$1 = state_31727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31727__$1,inst_31723);
} else {
if((state_val_31728 === (2))){
var inst_31622 = (state_31727[(8)]);
var inst_31627 = inst_31622.cljs$lang$protocol_mask$partition0$;
var inst_31628 = (inst_31627 & (64));
var inst_31629 = inst_31622.cljs$core$ISeq$;
var inst_31630 = (cljs.core.PROTOCOL_SENTINEL === inst_31629);
var inst_31631 = ((inst_31628) || (inst_31630));
var state_31727__$1 = state_31727;
if(cljs.core.truth_(inst_31631)){
var statearr_31788_33583 = state_31727__$1;
(statearr_31788_33583[(1)] = (5));

} else {
var statearr_31789_33584 = state_31727__$1;
(statearr_31789_33584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (23))){
var inst_31684 = (state_31727[(14)]);
var inst_31690 = (inst_31684 == null);
var state_31727__$1 = state_31727;
if(cljs.core.truth_(inst_31690)){
var statearr_31790_33586 = state_31727__$1;
(statearr_31790_33586[(1)] = (26));

} else {
var statearr_31791_33587 = state_31727__$1;
(statearr_31791_33587[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (35))){
var inst_31710 = (state_31727[(2)]);
var state_31727__$1 = state_31727;
if(cljs.core.truth_(inst_31710)){
var statearr_31792_33588 = state_31727__$1;
(statearr_31792_33588[(1)] = (36));

} else {
var statearr_31793_33594 = state_31727__$1;
(statearr_31793_33594[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (19))){
var inst_31649 = (state_31727[(7)]);
var inst_31671 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31649);
var state_31727__$1 = state_31727;
var statearr_31794_33595 = state_31727__$1;
(statearr_31794_33595[(2)] = inst_31671);

(statearr_31794_33595[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (11))){
var inst_31649 = (state_31727[(7)]);
var inst_31653 = (inst_31649 == null);
var inst_31654 = cljs.core.not(inst_31653);
var state_31727__$1 = state_31727;
if(inst_31654){
var statearr_31795_33600 = state_31727__$1;
(statearr_31795_33600[(1)] = (13));

} else {
var statearr_31798_33601 = state_31727__$1;
(statearr_31798_33601[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (9))){
var inst_31622 = (state_31727[(8)]);
var state_31727__$1 = state_31727;
var statearr_31801_33607 = state_31727__$1;
(statearr_31801_33607[(2)] = inst_31622);

(statearr_31801_33607[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (5))){
var state_31727__$1 = state_31727;
var statearr_31802_33608 = state_31727__$1;
(statearr_31802_33608[(2)] = true);

(statearr_31802_33608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (14))){
var state_31727__$1 = state_31727;
var statearr_31806_33609 = state_31727__$1;
(statearr_31806_33609[(2)] = false);

(statearr_31806_33609[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (26))){
var inst_31685 = (state_31727[(10)]);
var inst_31692 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31685);
var state_31727__$1 = state_31727;
var statearr_31807_33611 = state_31727__$1;
(statearr_31807_33611[(2)] = inst_31692);

(statearr_31807_33611[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (16))){
var state_31727__$1 = state_31727;
var statearr_31808_33616 = state_31727__$1;
(statearr_31808_33616[(2)] = true);

(statearr_31808_33616[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (38))){
var inst_31715 = (state_31727[(2)]);
var state_31727__$1 = state_31727;
var statearr_31809_33617 = state_31727__$1;
(statearr_31809_33617[(2)] = inst_31715);

(statearr_31809_33617[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (30))){
var inst_31676 = (state_31727[(13)]);
var inst_31685 = (state_31727[(10)]);
var inst_31675 = (state_31727[(11)]);
var inst_31702 = cljs.core.empty_QMARK_(inst_31675);
var inst_31703 = (inst_31676.cljs$core$IFn$_invoke$arity$1 ? inst_31676.cljs$core$IFn$_invoke$arity$1(inst_31685) : inst_31676.call(null,inst_31685));
var inst_31704 = cljs.core.not(inst_31703);
var inst_31705 = ((inst_31702) && (inst_31704));
var state_31727__$1 = state_31727;
var statearr_31810_33634 = state_31727__$1;
(statearr_31810_33634[(2)] = inst_31705);

(statearr_31810_33634[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (10))){
var inst_31622 = (state_31727[(8)]);
var inst_31645 = (state_31727[(2)]);
var inst_31646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31645,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31645,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31645,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31649 = inst_31622;
var state_31727__$1 = (function (){var statearr_31813 = state_31727;
(statearr_31813[(7)] = inst_31649);

(statearr_31813[(16)] = inst_31647);

(statearr_31813[(17)] = inst_31648);

(statearr_31813[(18)] = inst_31646);

return statearr_31813;
})();
var statearr_31814_33635 = state_31727__$1;
(statearr_31814_33635[(2)] = null);

(statearr_31814_33635[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (18))){
var inst_31666 = (state_31727[(2)]);
var state_31727__$1 = state_31727;
var statearr_31815_33636 = state_31727__$1;
(statearr_31815_33636[(2)] = inst_31666);

(statearr_31815_33636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (37))){
var state_31727__$1 = state_31727;
var statearr_31816_33637 = state_31727__$1;
(statearr_31816_33637[(2)] = null);

(statearr_31816_33637[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (8))){
var inst_31622 = (state_31727[(8)]);
var inst_31642 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31622);
var state_31727__$1 = state_31727;
var statearr_31817_33638 = state_31727__$1;
(statearr_31817_33638[(2)] = inst_31642);

(statearr_31817_33638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30431__auto___33529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30211__auto__,c__30431__auto___33529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30212__auto__ = null;
var cljs$core$async$mix_$_state_machine__30212__auto____0 = (function (){
var statearr_31818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31818[(0)] = cljs$core$async$mix_$_state_machine__30212__auto__);

(statearr_31818[(1)] = (1));

return statearr_31818;
});
var cljs$core$async$mix_$_state_machine__30212__auto____1 = (function (state_31727){
while(true){
var ret_value__30213__auto__ = (function (){try{while(true){
var result__30214__auto__ = switch__30211__auto__(state_31727);
if(cljs.core.keyword_identical_QMARK_(result__30214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30214__auto__;
}
break;
}
}catch (e31819){if((e31819 instanceof Object)){
var ex__30215__auto__ = e31819;
var statearr_31820_33640 = state_31727;
(statearr_31820_33640[(5)] = ex__30215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33643 = state_31727;
state_31727 = G__33643;
continue;
} else {
return ret_value__30213__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30212__auto__ = function(state_31727){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30212__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30212__auto____1.call(this,state_31727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30212__auto____0;
cljs$core$async$mix_$_state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30212__auto____1;
return cljs$core$async$mix_$_state_machine__30212__auto__;
})()
;})(switch__30211__auto__,c__30431__auto___33529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30433__auto__ = (function (){var statearr_31821 = (f__30432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30432__auto__.cljs$core$IFn$_invoke$arity$0() : f__30432__auto__.call(null));
(statearr_31821[(6)] = c__30431__auto___33529);

return statearr_31821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30433__auto__);
});})(c__30431__auto___33529,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31834 = arguments.length;
switch (G__31834) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31849 = arguments.length;
switch (G__31849) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__31839_SHARP_){
if(cljs.core.truth_((p1__31839_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31839_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31839_SHARP_.call(null,topic)))){
return p1__31839_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31839_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31860 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31860 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31861){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31861 = meta31861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31862,meta31861__$1){
var self__ = this;
var _31862__$1 = this;
return (new cljs.core.async.t_cljs$core$async31860(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31861__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31860.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31862){
var self__ = this;
var _31862__$1 = this;
return self__.meta31861;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31860.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31860.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31860.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31860.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31860.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31860.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31860.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31860.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31861","meta31861",-1970592009,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31860.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31860.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31860";

cljs.core.async.t_cljs$core$async31860.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31860");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31860.
 */
cljs.core.async.__GT_t_cljs$core$async31860 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31860(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31861){
return (new cljs.core.async.t_cljs$core$async31860(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31861));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31860(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30431__auto___33663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30431__auto___33663,mults,ensure_mult,p){
return (function (){
var f__30432__auto__ = (function (){var switch__30211__auto__ = ((function (c__30431__auto___33663,mults,ensure_mult,p){
return (function (state_31941){
var state_val_31942 = (state_31941[(1)]);
if((state_val_31942 === (7))){
var inst_31937 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
var statearr_31950_33665 = state_31941__$1;
(statearr_31950_33665[(2)] = inst_31937);

(statearr_31950_33665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (20))){
var state_31941__$1 = state_31941;
var statearr_31951_33666 = state_31941__$1;
(statearr_31951_33666[(2)] = null);

(statearr_31951_33666[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (1))){
var state_31941__$1 = state_31941;
var statearr_31952_33667 = state_31941__$1;
(statearr_31952_33667[(2)] = null);

(statearr_31952_33667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (24))){
var inst_31918 = (state_31941[(7)]);
var inst_31929 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31918);
var state_31941__$1 = state_31941;
var statearr_31953_33668 = state_31941__$1;
(statearr_31953_33668[(2)] = inst_31929);

(statearr_31953_33668[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (4))){
var inst_31866 = (state_31941[(8)]);
var inst_31866__$1 = (state_31941[(2)]);
var inst_31867 = (inst_31866__$1 == null);
var state_31941__$1 = (function (){var statearr_31954 = state_31941;
(statearr_31954[(8)] = inst_31866__$1);

return statearr_31954;
})();
if(cljs.core.truth_(inst_31867)){
var statearr_31955_33669 = state_31941__$1;
(statearr_31955_33669[(1)] = (5));

} else {
var statearr_31956_33670 = state_31941__$1;
(statearr_31956_33670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (15))){
var inst_31912 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
var statearr_31957_33672 = state_31941__$1;
(statearr_31957_33672[(2)] = inst_31912);

(statearr_31957_33672[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (21))){
var inst_31934 = (state_31941[(2)]);
var state_31941__$1 = (function (){var statearr_31959 = state_31941;
(statearr_31959[(9)] = inst_31934);

return statearr_31959;
})();
var statearr_31960_33674 = state_31941__$1;
(statearr_31960_33674[(2)] = null);

(statearr_31960_33674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (13))){
var inst_31892 = (state_31941[(10)]);
var inst_31894 = cljs.core.chunked_seq_QMARK_(inst_31892);
var state_31941__$1 = state_31941;
if(inst_31894){
var statearr_31961_33675 = state_31941__$1;
(statearr_31961_33675[(1)] = (16));

} else {
var statearr_31962_33676 = state_31941__$1;
(statearr_31962_33676[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (22))){
var inst_31926 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
if(cljs.core.truth_(inst_31926)){
var statearr_31963_33680 = state_31941__$1;
(statearr_31963_33680[(1)] = (23));

} else {
var statearr_31964_33681 = state_31941__$1;
(statearr_31964_33681[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (6))){
var inst_31866 = (state_31941[(8)]);
var inst_31920 = (state_31941[(11)]);
var inst_31918 = (state_31941[(7)]);
var inst_31918__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31866) : topic_fn.call(null,inst_31866));
var inst_31919 = cljs.core.deref(mults);
var inst_31920__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31919,inst_31918__$1);
var state_31941__$1 = (function (){var statearr_31965 = state_31941;
(statearr_31965[(11)] = inst_31920__$1);

(statearr_31965[(7)] = inst_31918__$1);

return statearr_31965;
})();
if(cljs.core.truth_(inst_31920__$1)){
var statearr_31966_33689 = state_31941__$1;
(statearr_31966_33689[(1)] = (19));

} else {
var statearr_31967_33690 = state_31941__$1;
(statearr_31967_33690[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (25))){
var inst_31931 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
var statearr_31968_33691 = state_31941__$1;
(statearr_31968_33691[(2)] = inst_31931);

(statearr_31968_33691[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (17))){
var inst_31892 = (state_31941[(10)]);
var inst_31903 = cljs.core.first(inst_31892);
var inst_31904 = cljs.core.async.muxch_STAR_(inst_31903);
var inst_31905 = cljs.core.async.close_BANG_(inst_31904);
var inst_31906 = cljs.core.next(inst_31892);
var inst_31876 = inst_31906;
var inst_31877 = null;
var inst_31878 = (0);
var inst_31879 = (0);
var state_31941__$1 = (function (){var statearr_31969 = state_31941;
(statearr_31969[(12)] = inst_31879);

(statearr_31969[(13)] = inst_31878);

(statearr_31969[(14)] = inst_31905);

(statearr_31969[(15)] = inst_31877);

(statearr_31969[(16)] = inst_31876);

return statearr_31969;
})();
var statearr_31970_33698 = state_31941__$1;
(statearr_31970_33698[(2)] = null);

(statearr_31970_33698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (3))){
var inst_31939 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31941__$1,inst_31939);
} else {
if((state_val_31942 === (12))){
var inst_31914 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
var statearr_31971_33702 = state_31941__$1;
(statearr_31971_33702[(2)] = inst_31914);

(statearr_31971_33702[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (2))){
var state_31941__$1 = state_31941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31941__$1,(4),ch);
} else {
if((state_val_31942 === (23))){
var state_31941__$1 = state_31941;
var statearr_31972_33704 = state_31941__$1;
(statearr_31972_33704[(2)] = null);

(statearr_31972_33704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (19))){
var inst_31866 = (state_31941[(8)]);
var inst_31920 = (state_31941[(11)]);
var inst_31924 = cljs.core.async.muxch_STAR_(inst_31920);
var state_31941__$1 = state_31941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31941__$1,(22),inst_31924,inst_31866);
} else {
if((state_val_31942 === (11))){
var inst_31876 = (state_31941[(16)]);
var inst_31892 = (state_31941[(10)]);
var inst_31892__$1 = cljs.core.seq(inst_31876);
var state_31941__$1 = (function (){var statearr_31977 = state_31941;
(statearr_31977[(10)] = inst_31892__$1);

return statearr_31977;
})();
if(inst_31892__$1){
var statearr_31978_33705 = state_31941__$1;
(statearr_31978_33705[(1)] = (13));

} else {
var statearr_31983_33709 = state_31941__$1;
(statearr_31983_33709[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (9))){
var inst_31916 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
var statearr_31984_33716 = state_31941__$1;
(statearr_31984_33716[(2)] = inst_31916);

(statearr_31984_33716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (5))){
var inst_31873 = cljs.core.deref(mults);
var inst_31874 = cljs.core.vals(inst_31873);
var inst_31875 = cljs.core.seq(inst_31874);
var inst_31876 = inst_31875;
var inst_31877 = null;
var inst_31878 = (0);
var inst_31879 = (0);
var state_31941__$1 = (function (){var statearr_31989 = state_31941;
(statearr_31989[(12)] = inst_31879);

(statearr_31989[(13)] = inst_31878);

(statearr_31989[(15)] = inst_31877);

(statearr_31989[(16)] = inst_31876);

return statearr_31989;
})();
var statearr_31990_33723 = state_31941__$1;
(statearr_31990_33723[(2)] = null);

(statearr_31990_33723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (14))){
var state_31941__$1 = state_31941;
var statearr_31994_33724 = state_31941__$1;
(statearr_31994_33724[(2)] = null);

(statearr_31994_33724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (16))){
var inst_31892 = (state_31941[(10)]);
var inst_31896 = cljs.core.chunk_first(inst_31892);
var inst_31899 = cljs.core.chunk_rest(inst_31892);
var inst_31900 = cljs.core.count(inst_31896);
var inst_31876 = inst_31899;
var inst_31877 = inst_31896;
var inst_31878 = inst_31900;
var inst_31879 = (0);
var state_31941__$1 = (function (){var statearr_31995 = state_31941;
(statearr_31995[(12)] = inst_31879);

(statearr_31995[(13)] = inst_31878);

(statearr_31995[(15)] = inst_31877);

(statearr_31995[(16)] = inst_31876);

return statearr_31995;
})();
var statearr_31996_33725 = state_31941__$1;
(statearr_31996_33725[(2)] = null);

(statearr_31996_33725[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (10))){
var inst_31879 = (state_31941[(12)]);
var inst_31878 = (state_31941[(13)]);
var inst_31877 = (state_31941[(15)]);
var inst_31876 = (state_31941[(16)]);
var inst_31884 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31877,inst_31879);
var inst_31887 = cljs.core.async.muxch_STAR_(inst_31884);
var inst_31888 = cljs.core.async.close_BANG_(inst_31887);
var inst_31889 = (inst_31879 + (1));
var tmp31991 = inst_31878;
var tmp31992 = inst_31877;
var tmp31993 = inst_31876;
var inst_31876__$1 = tmp31993;
var inst_31877__$1 = tmp31992;
var inst_31878__$1 = tmp31991;
var inst_31879__$1 = inst_31889;
var state_31941__$1 = (function (){var statearr_31997 = state_31941;
(statearr_31997[(17)] = inst_31888);

(statearr_31997[(12)] = inst_31879__$1);

(statearr_31997[(13)] = inst_31878__$1);

(statearr_31997[(15)] = inst_31877__$1);

(statearr_31997[(16)] = inst_31876__$1);

return statearr_31997;
})();
var statearr_31998_33726 = state_31941__$1;
(statearr_31998_33726[(2)] = null);

(statearr_31998_33726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (18))){
var inst_31909 = (state_31941[(2)]);
var state_31941__$1 = state_31941;
var statearr_31999_33733 = state_31941__$1;
(statearr_31999_33733[(2)] = inst_31909);

(statearr_31999_33733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31942 === (8))){
var inst_31879 = (state_31941[(12)]);
var inst_31878 = (state_31941[(13)]);
var inst_31881 = (inst_31879 < inst_31878);
var inst_31882 = inst_31881;
var state_31941__$1 = state_31941;
if(cljs.core.truth_(inst_31882)){
var statearr_32000_33734 = state_31941__$1;
(statearr_32000_33734[(1)] = (10));

} else {
var statearr_32001_33735 = state_31941__$1;
(statearr_32001_33735[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30431__auto___33663,mults,ensure_mult,p))
;
return ((function (switch__30211__auto__,c__30431__auto___33663,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30212__auto__ = null;
var cljs$core$async$state_machine__30212__auto____0 = (function (){
var statearr_32002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32002[(0)] = cljs$core$async$state_machine__30212__auto__);

(statearr_32002[(1)] = (1));

return statearr_32002;
});
var cljs$core$async$state_machine__30212__auto____1 = (function (state_31941){
while(true){
var ret_value__30213__auto__ = (function (){try{while(true){
var result__30214__auto__ = switch__30211__auto__(state_31941);
if(cljs.core.keyword_identical_QMARK_(result__30214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30214__auto__;
}
break;
}
}catch (e32004){if((e32004 instanceof Object)){
var ex__30215__auto__ = e32004;
var statearr_32005_33736 = state_31941;
(statearr_32005_33736[(5)] = ex__30215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32004;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33737 = state_31941;
state_31941 = G__33737;
continue;
} else {
return ret_value__30213__auto__;
}
break;
}
});
cljs$core$async$state_machine__30212__auto__ = function(state_31941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30212__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30212__auto____1.call(this,state_31941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30212__auto____0;
cljs$core$async$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30212__auto____1;
return cljs$core$async$state_machine__30212__auto__;
})()
;})(switch__30211__auto__,c__30431__auto___33663,mults,ensure_mult,p))
})();
var state__30433__auto__ = (function (){var statearr_32006 = (f__30432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30432__auto__.cljs$core$IFn$_invoke$arity$0() : f__30432__auto__.call(null));
(statearr_32006[(6)] = c__30431__auto___33663);

return statearr_32006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30433__auto__);
});})(c__30431__auto___33663,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32008 = arguments.length;
switch (G__32008) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32016 = arguments.length;
switch (G__32016) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32023 = arguments.length;
switch (G__32023) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30431__auto___33753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30431__auto___33753,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30432__auto__ = (function (){var switch__30211__auto__ = ((function (c__30431__auto___33753,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32070){
var state_val_32071 = (state_32070[(1)]);
if((state_val_32071 === (7))){
var state_32070__$1 = state_32070;
var statearr_32072_33754 = state_32070__$1;
(statearr_32072_33754[(2)] = null);

(statearr_32072_33754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (1))){
var state_32070__$1 = state_32070;
var statearr_32073_33755 = state_32070__$1;
(statearr_32073_33755[(2)] = null);

(statearr_32073_33755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (4))){
var inst_32030 = (state_32070[(7)]);
var inst_32034 = (inst_32030 < cnt);
var state_32070__$1 = state_32070;
if(cljs.core.truth_(inst_32034)){
var statearr_32074_33756 = state_32070__$1;
(statearr_32074_33756[(1)] = (6));

} else {
var statearr_32075_33757 = state_32070__$1;
(statearr_32075_33757[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (15))){
var inst_32066 = (state_32070[(2)]);
var state_32070__$1 = state_32070;
var statearr_32076_33758 = state_32070__$1;
(statearr_32076_33758[(2)] = inst_32066);

(statearr_32076_33758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (13))){
var inst_32059 = cljs.core.async.close_BANG_(out);
var state_32070__$1 = state_32070;
var statearr_32078_33759 = state_32070__$1;
(statearr_32078_33759[(2)] = inst_32059);

(statearr_32078_33759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (6))){
var state_32070__$1 = state_32070;
var statearr_32080_33763 = state_32070__$1;
(statearr_32080_33763[(2)] = null);

(statearr_32080_33763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (3))){
var inst_32068 = (state_32070[(2)]);
var state_32070__$1 = state_32070;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32070__$1,inst_32068);
} else {
if((state_val_32071 === (12))){
var inst_32056 = (state_32070[(8)]);
var inst_32056__$1 = (state_32070[(2)]);
var inst_32057 = cljs.core.some(cljs.core.nil_QMARK_,inst_32056__$1);
var state_32070__$1 = (function (){var statearr_32085 = state_32070;
(statearr_32085[(8)] = inst_32056__$1);

return statearr_32085;
})();
if(cljs.core.truth_(inst_32057)){
var statearr_32086_33764 = state_32070__$1;
(statearr_32086_33764[(1)] = (13));

} else {
var statearr_32087_33765 = state_32070__$1;
(statearr_32087_33765[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (2))){
var inst_32029 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32030 = (0);
var state_32070__$1 = (function (){var statearr_32088 = state_32070;
(statearr_32088[(7)] = inst_32030);

(statearr_32088[(9)] = inst_32029);

return statearr_32088;
})();
var statearr_32092_33766 = state_32070__$1;
(statearr_32092_33766[(2)] = null);

(statearr_32092_33766[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (11))){
var inst_32030 = (state_32070[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32070,(10),Object,null,(9));
var inst_32042 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32030) : chs__$1.call(null,inst_32030));
var inst_32043 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32030) : done.call(null,inst_32030));
var inst_32044 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32042,inst_32043);
var state_32070__$1 = state_32070;
var statearr_32094_33772 = state_32070__$1;
(statearr_32094_33772[(2)] = inst_32044);


cljs.core.async.impl.ioc_helpers.process_exception(state_32070__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (9))){
var inst_32030 = (state_32070[(7)]);
var inst_32046 = (state_32070[(2)]);
var inst_32047 = (inst_32030 + (1));
var inst_32030__$1 = inst_32047;
var state_32070__$1 = (function (){var statearr_32098 = state_32070;
(statearr_32098[(10)] = inst_32046);

(statearr_32098[(7)] = inst_32030__$1);

return statearr_32098;
})();
var statearr_32099_33773 = state_32070__$1;
(statearr_32099_33773[(2)] = null);

(statearr_32099_33773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (5))){
var inst_32053 = (state_32070[(2)]);
var state_32070__$1 = (function (){var statearr_32100 = state_32070;
(statearr_32100[(11)] = inst_32053);

return statearr_32100;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32070__$1,(12),dchan);
} else {
if((state_val_32071 === (14))){
var inst_32056 = (state_32070[(8)]);
var inst_32061 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32056);
var state_32070__$1 = state_32070;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32070__$1,(16),out,inst_32061);
} else {
if((state_val_32071 === (16))){
var inst_32063 = (state_32070[(2)]);
var state_32070__$1 = (function (){var statearr_32101 = state_32070;
(statearr_32101[(12)] = inst_32063);

return statearr_32101;
})();
var statearr_32102_33774 = state_32070__$1;
(statearr_32102_33774[(2)] = null);

(statearr_32102_33774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (10))){
var inst_32037 = (state_32070[(2)]);
var inst_32038 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32070__$1 = (function (){var statearr_32103 = state_32070;
(statearr_32103[(13)] = inst_32037);

return statearr_32103;
})();
var statearr_32105_33775 = state_32070__$1;
(statearr_32105_33775[(2)] = inst_32038);


cljs.core.async.impl.ioc_helpers.process_exception(state_32070__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32071 === (8))){
var inst_32051 = (state_32070[(2)]);
var state_32070__$1 = state_32070;
var statearr_32108_33776 = state_32070__$1;
(statearr_32108_33776[(2)] = inst_32051);

(statearr_32108_33776[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30431__auto___33753,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30211__auto__,c__30431__auto___33753,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30212__auto__ = null;
var cljs$core$async$state_machine__30212__auto____0 = (function (){
var statearr_32111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32111[(0)] = cljs$core$async$state_machine__30212__auto__);

(statearr_32111[(1)] = (1));

return statearr_32111;
});
var cljs$core$async$state_machine__30212__auto____1 = (function (state_32070){
while(true){
var ret_value__30213__auto__ = (function (){try{while(true){
var result__30214__auto__ = switch__30211__auto__(state_32070);
if(cljs.core.keyword_identical_QMARK_(result__30214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30214__auto__;
}
break;
}
}catch (e32113){if((e32113 instanceof Object)){
var ex__30215__auto__ = e32113;
var statearr_32114_33779 = state_32070;
(statearr_32114_33779[(5)] = ex__30215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32113;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33780 = state_32070;
state_32070 = G__33780;
continue;
} else {
return ret_value__30213__auto__;
}
break;
}
});
cljs$core$async$state_machine__30212__auto__ = function(state_32070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30212__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30212__auto____1.call(this,state_32070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30212__auto____0;
cljs$core$async$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30212__auto____1;
return cljs$core$async$state_machine__30212__auto__;
})()
;})(switch__30211__auto__,c__30431__auto___33753,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30433__auto__ = (function (){var statearr_32115 = (f__30432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30432__auto__.cljs$core$IFn$_invoke$arity$0() : f__30432__auto__.call(null));
(statearr_32115[(6)] = c__30431__auto___33753);

return statearr_32115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30433__auto__);
});})(c__30431__auto___33753,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32118 = arguments.length;
switch (G__32118) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30431__auto___33782 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30431__auto___33782,out){
return (function (){
var f__30432__auto__ = (function (){var switch__30211__auto__ = ((function (c__30431__auto___33782,out){
return (function (state_32160){
var state_val_32161 = (state_32160[(1)]);
if((state_val_32161 === (7))){
var inst_32130 = (state_32160[(7)]);
var inst_32129 = (state_32160[(8)]);
var inst_32129__$1 = (state_32160[(2)]);
var inst_32130__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32129__$1,(0),null);
var inst_32132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32129__$1,(1),null);
var inst_32137 = (inst_32130__$1 == null);
var state_32160__$1 = (function (){var statearr_32168 = state_32160;
(statearr_32168[(7)] = inst_32130__$1);

(statearr_32168[(8)] = inst_32129__$1);

(statearr_32168[(9)] = inst_32132);

return statearr_32168;
})();
if(cljs.core.truth_(inst_32137)){
var statearr_32169_33792 = state_32160__$1;
(statearr_32169_33792[(1)] = (8));

} else {
var statearr_32170_33793 = state_32160__$1;
(statearr_32170_33793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32161 === (1))){
var inst_32119 = cljs.core.vec(chs);
var inst_32120 = inst_32119;
var state_32160__$1 = (function (){var statearr_32173 = state_32160;
(statearr_32173[(10)] = inst_32120);

return statearr_32173;
})();
var statearr_32174_33795 = state_32160__$1;
(statearr_32174_33795[(2)] = null);

(statearr_32174_33795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32161 === (4))){
var inst_32120 = (state_32160[(10)]);
var state_32160__$1 = state_32160;
return cljs.core.async.ioc_alts_BANG_(state_32160__$1,(7),inst_32120);
} else {
if((state_val_32161 === (6))){
var inst_32153 = (state_32160[(2)]);
var state_32160__$1 = state_32160;
var statearr_32178_33797 = state_32160__$1;
(statearr_32178_33797[(2)] = inst_32153);

(statearr_32178_33797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32161 === (3))){
var inst_32155 = (state_32160[(2)]);
var state_32160__$1 = state_32160;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32160__$1,inst_32155);
} else {
if((state_val_32161 === (2))){
var inst_32120 = (state_32160[(10)]);
var inst_32122 = cljs.core.count(inst_32120);
var inst_32123 = (inst_32122 > (0));
var state_32160__$1 = state_32160;
if(cljs.core.truth_(inst_32123)){
var statearr_32182_33800 = state_32160__$1;
(statearr_32182_33800[(1)] = (4));

} else {
var statearr_32183_33802 = state_32160__$1;
(statearr_32183_33802[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32161 === (11))){
var inst_32120 = (state_32160[(10)]);
var inst_32146 = (state_32160[(2)]);
var tmp32181 = inst_32120;
var inst_32120__$1 = tmp32181;
var state_32160__$1 = (function (){var statearr_32184 = state_32160;
(statearr_32184[(11)] = inst_32146);

(statearr_32184[(10)] = inst_32120__$1);

return statearr_32184;
})();
var statearr_32185_33803 = state_32160__$1;
(statearr_32185_33803[(2)] = null);

(statearr_32185_33803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32161 === (9))){
var inst_32130 = (state_32160[(7)]);
var state_32160__$1 = state_32160;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32160__$1,(11),out,inst_32130);
} else {
if((state_val_32161 === (5))){
var inst_32151 = cljs.core.async.close_BANG_(out);
var state_32160__$1 = state_32160;
var statearr_32197_33804 = state_32160__$1;
(statearr_32197_33804[(2)] = inst_32151);

(statearr_32197_33804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32161 === (10))){
var inst_32149 = (state_32160[(2)]);
var state_32160__$1 = state_32160;
var statearr_32198_33805 = state_32160__$1;
(statearr_32198_33805[(2)] = inst_32149);

(statearr_32198_33805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32161 === (8))){
var inst_32130 = (state_32160[(7)]);
var inst_32129 = (state_32160[(8)]);
var inst_32132 = (state_32160[(9)]);
var inst_32120 = (state_32160[(10)]);
var inst_32139 = (function (){var cs = inst_32120;
var vec__32125 = inst_32129;
var v = inst_32130;
var c = inst_32132;
return ((function (cs,vec__32125,v,c,inst_32130,inst_32129,inst_32132,inst_32120,state_val_32161,c__30431__auto___33782,out){
return (function (p1__32116_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32116_SHARP_);
});
;})(cs,vec__32125,v,c,inst_32130,inst_32129,inst_32132,inst_32120,state_val_32161,c__30431__auto___33782,out))
})();
var inst_32140 = cljs.core.filterv(inst_32139,inst_32120);
var inst_32120__$1 = inst_32140;
var state_32160__$1 = (function (){var statearr_32201 = state_32160;
(statearr_32201[(10)] = inst_32120__$1);

return statearr_32201;
})();
var statearr_32202_33806 = state_32160__$1;
(statearr_32202_33806[(2)] = null);

(statearr_32202_33806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30431__auto___33782,out))
;
return ((function (switch__30211__auto__,c__30431__auto___33782,out){
return (function() {
var cljs$core$async$state_machine__30212__auto__ = null;
var cljs$core$async$state_machine__30212__auto____0 = (function (){
var statearr_32206 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32206[(0)] = cljs$core$async$state_machine__30212__auto__);

(statearr_32206[(1)] = (1));

return statearr_32206;
});
var cljs$core$async$state_machine__30212__auto____1 = (function (state_32160){
while(true){
var ret_value__30213__auto__ = (function (){try{while(true){
var result__30214__auto__ = switch__30211__auto__(state_32160);
if(cljs.core.keyword_identical_QMARK_(result__30214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30214__auto__;
}
break;
}
}catch (e32207){if((e32207 instanceof Object)){
var ex__30215__auto__ = e32207;
var statearr_32208_33807 = state_32160;
(statearr_32208_33807[(5)] = ex__30215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32207;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33808 = state_32160;
state_32160 = G__33808;
continue;
} else {
return ret_value__30213__auto__;
}
break;
}
});
cljs$core$async$state_machine__30212__auto__ = function(state_32160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30212__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30212__auto____1.call(this,state_32160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30212__auto____0;
cljs$core$async$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30212__auto____1;
return cljs$core$async$state_machine__30212__auto__;
})()
;})(switch__30211__auto__,c__30431__auto___33782,out))
})();
var state__30433__auto__ = (function (){var statearr_32214 = (f__30432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30432__auto__.cljs$core$IFn$_invoke$arity$0() : f__30432__auto__.call(null));
(statearr_32214[(6)] = c__30431__auto___33782);

return statearr_32214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30433__auto__);
});})(c__30431__auto___33782,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32219 = arguments.length;
switch (G__32219) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30431__auto___33810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30431__auto___33810,out){
return (function (){
var f__30432__auto__ = (function (){var switch__30211__auto__ = ((function (c__30431__auto___33810,out){
return (function (state_32243){
var state_val_32244 = (state_32243[(1)]);
if((state_val_32244 === (7))){
var inst_32225 = (state_32243[(7)]);
var inst_32225__$1 = (state_32243[(2)]);
var inst_32226 = (inst_32225__$1 == null);
var inst_32227 = cljs.core.not(inst_32226);
var state_32243__$1 = (function (){var statearr_32249 = state_32243;
(statearr_32249[(7)] = inst_32225__$1);

return statearr_32249;
})();
if(inst_32227){
var statearr_32250_33812 = state_32243__$1;
(statearr_32250_33812[(1)] = (8));

} else {
var statearr_32251_33813 = state_32243__$1;
(statearr_32251_33813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (1))){
var inst_32220 = (0);
var state_32243__$1 = (function (){var statearr_32253 = state_32243;
(statearr_32253[(8)] = inst_32220);

return statearr_32253;
})();
var statearr_32254_33815 = state_32243__$1;
(statearr_32254_33815[(2)] = null);

(statearr_32254_33815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (4))){
var state_32243__$1 = state_32243;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32243__$1,(7),ch);
} else {
if((state_val_32244 === (6))){
var inst_32238 = (state_32243[(2)]);
var state_32243__$1 = state_32243;
var statearr_32258_33816 = state_32243__$1;
(statearr_32258_33816[(2)] = inst_32238);

(statearr_32258_33816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (3))){
var inst_32240 = (state_32243[(2)]);
var inst_32241 = cljs.core.async.close_BANG_(out);
var state_32243__$1 = (function (){var statearr_32262 = state_32243;
(statearr_32262[(9)] = inst_32240);

return statearr_32262;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32243__$1,inst_32241);
} else {
if((state_val_32244 === (2))){
var inst_32220 = (state_32243[(8)]);
var inst_32222 = (inst_32220 < n);
var state_32243__$1 = state_32243;
if(cljs.core.truth_(inst_32222)){
var statearr_32266_33818 = state_32243__$1;
(statearr_32266_33818[(1)] = (4));

} else {
var statearr_32268_33820 = state_32243__$1;
(statearr_32268_33820[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (11))){
var inst_32220 = (state_32243[(8)]);
var inst_32230 = (state_32243[(2)]);
var inst_32231 = (inst_32220 + (1));
var inst_32220__$1 = inst_32231;
var state_32243__$1 = (function (){var statearr_32273 = state_32243;
(statearr_32273[(10)] = inst_32230);

(statearr_32273[(8)] = inst_32220__$1);

return statearr_32273;
})();
var statearr_32274_33821 = state_32243__$1;
(statearr_32274_33821[(2)] = null);

(statearr_32274_33821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (9))){
var state_32243__$1 = state_32243;
var statearr_32279_33822 = state_32243__$1;
(statearr_32279_33822[(2)] = null);

(statearr_32279_33822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (5))){
var state_32243__$1 = state_32243;
var statearr_32280_33823 = state_32243__$1;
(statearr_32280_33823[(2)] = null);

(statearr_32280_33823[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (10))){
var inst_32235 = (state_32243[(2)]);
var state_32243__$1 = state_32243;
var statearr_32285_33825 = state_32243__$1;
(statearr_32285_33825[(2)] = inst_32235);

(statearr_32285_33825[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32244 === (8))){
var inst_32225 = (state_32243[(7)]);
var state_32243__$1 = state_32243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32243__$1,(11),out,inst_32225);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30431__auto___33810,out))
;
return ((function (switch__30211__auto__,c__30431__auto___33810,out){
return (function() {
var cljs$core$async$state_machine__30212__auto__ = null;
var cljs$core$async$state_machine__30212__auto____0 = (function (){
var statearr_32287 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32287[(0)] = cljs$core$async$state_machine__30212__auto__);

(statearr_32287[(1)] = (1));

return statearr_32287;
});
var cljs$core$async$state_machine__30212__auto____1 = (function (state_32243){
while(true){
var ret_value__30213__auto__ = (function (){try{while(true){
var result__30214__auto__ = switch__30211__auto__(state_32243);
if(cljs.core.keyword_identical_QMARK_(result__30214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30214__auto__;
}
break;
}
}catch (e32289){if((e32289 instanceof Object)){
var ex__30215__auto__ = e32289;
var statearr_32290_33826 = state_32243;
(statearr_32290_33826[(5)] = ex__30215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32289;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33827 = state_32243;
state_32243 = G__33827;
continue;
} else {
return ret_value__30213__auto__;
}
break;
}
});
cljs$core$async$state_machine__30212__auto__ = function(state_32243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30212__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30212__auto____1.call(this,state_32243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30212__auto____0;
cljs$core$async$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30212__auto____1;
return cljs$core$async$state_machine__30212__auto__;
})()
;})(switch__30211__auto__,c__30431__auto___33810,out))
})();
var state__30433__auto__ = (function (){var statearr_32293 = (f__30432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30432__auto__.cljs$core$IFn$_invoke$arity$0() : f__30432__auto__.call(null));
(statearr_32293[(6)] = c__30431__auto___33810);

return statearr_32293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30433__auto__);
});})(c__30431__auto___33810,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32299 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32299 = (function (f,ch,meta32300){
this.f = f;
this.ch = ch;
this.meta32300 = meta32300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32301,meta32300__$1){
var self__ = this;
var _32301__$1 = this;
return (new cljs.core.async.t_cljs$core$async32299(self__.f,self__.ch,meta32300__$1));
});

cljs.core.async.t_cljs$core$async32299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32301){
var self__ = this;
var _32301__$1 = this;
return self__.meta32300;
});

cljs.core.async.t_cljs$core$async32299.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32299.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32299.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32299.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32299.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32313 = (function (f,ch,meta32300,_,fn1,meta32314){
this.f = f;
this.ch = ch;
this.meta32300 = meta32300;
this._ = _;
this.fn1 = fn1;
this.meta32314 = meta32314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32315,meta32314__$1){
var self__ = this;
var _32315__$1 = this;
return (new cljs.core.async.t_cljs$core$async32313(self__.f,self__.ch,self__.meta32300,self__._,self__.fn1,meta32314__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32313.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32315){
var self__ = this;
var _32315__$1 = this;
return self__.meta32314;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32313.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32313.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32313.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32313.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32297_SHARP_){
var G__32324 = (((p1__32297_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32297_SHARP_) : self__.f.call(null,p1__32297_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32324) : f1.call(null,G__32324));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32313.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32300","meta32300",1496193381,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32299","cljs.core.async/t_cljs$core$async32299",-902734649,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32314","meta32314",-1709701151,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32313.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32313";

cljs.core.async.t_cljs$core$async32313.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32313");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32313.
 */
cljs.core.async.__GT_t_cljs$core$async32313 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32313(f__$1,ch__$1,meta32300__$1,___$2,fn1__$1,meta32314){
return (new cljs.core.async.t_cljs$core$async32313(f__$1,ch__$1,meta32300__$1,___$2,fn1__$1,meta32314));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32313(self__.f,self__.ch,self__.meta32300,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32331 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32331) : self__.f.call(null,G__32331));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32299.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32299.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32300","meta32300",1496193381,null)], null);
});

cljs.core.async.t_cljs$core$async32299.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32299";

cljs.core.async.t_cljs$core$async32299.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32299");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32299.
 */
cljs.core.async.__GT_t_cljs$core$async32299 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32299(f__$1,ch__$1,meta32300){
return (new cljs.core.async.t_cljs$core$async32299(f__$1,ch__$1,meta32300));
});

}

return (new cljs.core.async.t_cljs$core$async32299(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32339 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32339 = (function (f,ch,meta32340){
this.f = f;
this.ch = ch;
this.meta32340 = meta32340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32341,meta32340__$1){
var self__ = this;
var _32341__$1 = this;
return (new cljs.core.async.t_cljs$core$async32339(self__.f,self__.ch,meta32340__$1));
});

cljs.core.async.t_cljs$core$async32339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32341){
var self__ = this;
var _32341__$1 = this;
return self__.meta32340;
});

cljs.core.async.t_cljs$core$async32339.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32339.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32339.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32339.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32339.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32339.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async32339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32340","meta32340",1402712864,null)], null);
});

cljs.core.async.t_cljs$core$async32339.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32339";

cljs.core.async.t_cljs$core$async32339.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32339");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32339.
 */
cljs.core.async.__GT_t_cljs$core$async32339 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32339(f__$1,ch__$1,meta32340){
return (new cljs.core.async.t_cljs$core$async32339(f__$1,ch__$1,meta32340));
});

}

return (new cljs.core.async.t_cljs$core$async32339(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32359 = (function (p,ch,meta32360){
this.p = p;
this.ch = ch;
this.meta32360 = meta32360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32361,meta32360__$1){
var self__ = this;
var _32361__$1 = this;
return (new cljs.core.async.t_cljs$core$async32359(self__.p,self__.ch,meta32360__$1));
});

cljs.core.async.t_cljs$core$async32359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32361){
var self__ = this;
var _32361__$1 = this;
return self__.meta32360;
});

cljs.core.async.t_cljs$core$async32359.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32359.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32359.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32359.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32359.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32359.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32359.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32359.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32360","meta32360",1287999730,null)], null);
});

cljs.core.async.t_cljs$core$async32359.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32359.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32359";

cljs.core.async.t_cljs$core$async32359.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32359");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32359.
 */
cljs.core.async.__GT_t_cljs$core$async32359 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32359(p__$1,ch__$1,meta32360){
return (new cljs.core.async.t_cljs$core$async32359(p__$1,ch__$1,meta32360));
});

}

return (new cljs.core.async.t_cljs$core$async32359(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32387 = arguments.length;
switch (G__32387) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30431__auto___33892 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30431__auto___33892,out){
return (function (){
var f__30432__auto__ = (function (){var switch__30211__auto__ = ((function (c__30431__auto___33892,out){
return (function (state_32417){
var state_val_32418 = (state_32417[(1)]);
if((state_val_32418 === (7))){
var inst_32411 = (state_32417[(2)]);
var state_32417__$1 = state_32417;
var statearr_32422_33894 = state_32417__$1;
(statearr_32422_33894[(2)] = inst_32411);

(statearr_32422_33894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (1))){
var state_32417__$1 = state_32417;
var statearr_32428_33896 = state_32417__$1;
(statearr_32428_33896[(2)] = null);

(statearr_32428_33896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (4))){
var inst_32395 = (state_32417[(7)]);
var inst_32395__$1 = (state_32417[(2)]);
var inst_32397 = (inst_32395__$1 == null);
var state_32417__$1 = (function (){var statearr_32430 = state_32417;
(statearr_32430[(7)] = inst_32395__$1);

return statearr_32430;
})();
if(cljs.core.truth_(inst_32397)){
var statearr_32432_33897 = state_32417__$1;
(statearr_32432_33897[(1)] = (5));

} else {
var statearr_32433_33898 = state_32417__$1;
(statearr_32433_33898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (6))){
var inst_32395 = (state_32417[(7)]);
var inst_32401 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32395) : p.call(null,inst_32395));
var state_32417__$1 = state_32417;
if(cljs.core.truth_(inst_32401)){
var statearr_32434_33900 = state_32417__$1;
(statearr_32434_33900[(1)] = (8));

} else {
var statearr_32435_33901 = state_32417__$1;
(statearr_32435_33901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (3))){
var inst_32414 = (state_32417[(2)]);
var state_32417__$1 = state_32417;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32417__$1,inst_32414);
} else {
if((state_val_32418 === (2))){
var state_32417__$1 = state_32417;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32417__$1,(4),ch);
} else {
if((state_val_32418 === (11))){
var inst_32404 = (state_32417[(2)]);
var state_32417__$1 = state_32417;
var statearr_32439_33905 = state_32417__$1;
(statearr_32439_33905[(2)] = inst_32404);

(statearr_32439_33905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (9))){
var state_32417__$1 = state_32417;
var statearr_32440_33907 = state_32417__$1;
(statearr_32440_33907[(2)] = null);

(statearr_32440_33907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (5))){
var inst_32399 = cljs.core.async.close_BANG_(out);
var state_32417__$1 = state_32417;
var statearr_32441_33909 = state_32417__$1;
(statearr_32441_33909[(2)] = inst_32399);

(statearr_32441_33909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (10))){
var inst_32407 = (state_32417[(2)]);
var state_32417__$1 = (function (){var statearr_32442 = state_32417;
(statearr_32442[(8)] = inst_32407);

return statearr_32442;
})();
var statearr_32443_33911 = state_32417__$1;
(statearr_32443_33911[(2)] = null);

(statearr_32443_33911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32418 === (8))){
var inst_32395 = (state_32417[(7)]);
var state_32417__$1 = state_32417;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32417__$1,(11),out,inst_32395);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30431__auto___33892,out))
;
return ((function (switch__30211__auto__,c__30431__auto___33892,out){
return (function() {
var cljs$core$async$state_machine__30212__auto__ = null;
var cljs$core$async$state_machine__30212__auto____0 = (function (){
var statearr_32449 = [null,null,null,null,null,null,null,null,null];
(statearr_32449[(0)] = cljs$core$async$state_machine__30212__auto__);

(statearr_32449[(1)] = (1));

return statearr_32449;
});
var cljs$core$async$state_machine__30212__auto____1 = (function (state_32417){
while(true){
var ret_value__30213__auto__ = (function (){try{while(true){
var result__30214__auto__ = switch__30211__auto__(state_32417);
if(cljs.core.keyword_identical_QMARK_(result__30214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30214__auto__;
}
break;
}
}catch (e32452){if((e32452 instanceof Object)){
var ex__30215__auto__ = e32452;
var statearr_32454_33912 = state_32417;
(statearr_32454_33912[(5)] = ex__30215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32452;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33913 = state_32417;
state_32417 = G__33913;
continue;
} else {
return ret_value__30213__auto__;
}
break;
}
});
cljs$core$async$state_machine__30212__auto__ = function(state_32417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30212__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30212__auto____1.call(this,state_32417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30212__auto____0;
cljs$core$async$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30212__auto____1;
return cljs$core$async$state_machine__30212__auto__;
})()
;})(switch__30211__auto__,c__30431__auto___33892,out))
})();
var state__30433__auto__ = (function (){var statearr_32460 = (f__30432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30432__auto__.cljs$core$IFn$_invoke$arity$0() : f__30432__auto__.call(null));
(statearr_32460[(6)] = c__30431__auto___33892);

return statearr_32460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30433__auto__);
});})(c__30431__auto___33892,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32464 = arguments.length;
switch (G__32464) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30431__auto__){
return (function (){
var f__30432__auto__ = (function (){var switch__30211__auto__ = ((function (c__30431__auto__){
return (function (state_32545){
var state_val_32546 = (state_32545[(1)]);
if((state_val_32546 === (7))){
var inst_32538 = (state_32545[(2)]);
var state_32545__$1 = state_32545;
var statearr_32550_33919 = state_32545__$1;
(statearr_32550_33919[(2)] = inst_32538);

(statearr_32550_33919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (20))){
var inst_32503 = (state_32545[(7)]);
var inst_32519 = (state_32545[(2)]);
var inst_32520 = cljs.core.next(inst_32503);
var inst_32487 = inst_32520;
var inst_32488 = null;
var inst_32489 = (0);
var inst_32490 = (0);
var state_32545__$1 = (function (){var statearr_32555 = state_32545;
(statearr_32555[(8)] = inst_32488);

(statearr_32555[(9)] = inst_32487);

(statearr_32555[(10)] = inst_32519);

(statearr_32555[(11)] = inst_32489);

(statearr_32555[(12)] = inst_32490);

return statearr_32555;
})();
var statearr_32562_33920 = state_32545__$1;
(statearr_32562_33920[(2)] = null);

(statearr_32562_33920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (1))){
var state_32545__$1 = state_32545;
var statearr_32564_33921 = state_32545__$1;
(statearr_32564_33921[(2)] = null);

(statearr_32564_33921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (4))){
var inst_32475 = (state_32545[(13)]);
var inst_32475__$1 = (state_32545[(2)]);
var inst_32477 = (inst_32475__$1 == null);
var state_32545__$1 = (function (){var statearr_32567 = state_32545;
(statearr_32567[(13)] = inst_32475__$1);

return statearr_32567;
})();
if(cljs.core.truth_(inst_32477)){
var statearr_32568_33926 = state_32545__$1;
(statearr_32568_33926[(1)] = (5));

} else {
var statearr_32573_33927 = state_32545__$1;
(statearr_32573_33927[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (15))){
var state_32545__$1 = state_32545;
var statearr_32577_33928 = state_32545__$1;
(statearr_32577_33928[(2)] = null);

(statearr_32577_33928[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (21))){
var state_32545__$1 = state_32545;
var statearr_32578_33929 = state_32545__$1;
(statearr_32578_33929[(2)] = null);

(statearr_32578_33929[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (13))){
var inst_32488 = (state_32545[(8)]);
var inst_32487 = (state_32545[(9)]);
var inst_32489 = (state_32545[(11)]);
var inst_32490 = (state_32545[(12)]);
var inst_32498 = (state_32545[(2)]);
var inst_32499 = (inst_32490 + (1));
var tmp32574 = inst_32488;
var tmp32575 = inst_32487;
var tmp32576 = inst_32489;
var inst_32487__$1 = tmp32575;
var inst_32488__$1 = tmp32574;
var inst_32489__$1 = tmp32576;
var inst_32490__$1 = inst_32499;
var state_32545__$1 = (function (){var statearr_32581 = state_32545;
(statearr_32581[(14)] = inst_32498);

(statearr_32581[(8)] = inst_32488__$1);

(statearr_32581[(9)] = inst_32487__$1);

(statearr_32581[(11)] = inst_32489__$1);

(statearr_32581[(12)] = inst_32490__$1);

return statearr_32581;
})();
var statearr_32586_33940 = state_32545__$1;
(statearr_32586_33940[(2)] = null);

(statearr_32586_33940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (22))){
var state_32545__$1 = state_32545;
var statearr_32587_33950 = state_32545__$1;
(statearr_32587_33950[(2)] = null);

(statearr_32587_33950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (6))){
var inst_32475 = (state_32545[(13)]);
var inst_32485 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32475) : f.call(null,inst_32475));
var inst_32486 = cljs.core.seq(inst_32485);
var inst_32487 = inst_32486;
var inst_32488 = null;
var inst_32489 = (0);
var inst_32490 = (0);
var state_32545__$1 = (function (){var statearr_32589 = state_32545;
(statearr_32589[(8)] = inst_32488);

(statearr_32589[(9)] = inst_32487);

(statearr_32589[(11)] = inst_32489);

(statearr_32589[(12)] = inst_32490);

return statearr_32589;
})();
var statearr_32592_33967 = state_32545__$1;
(statearr_32592_33967[(2)] = null);

(statearr_32592_33967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (17))){
var inst_32503 = (state_32545[(7)]);
var inst_32510 = cljs.core.chunk_first(inst_32503);
var inst_32511 = cljs.core.chunk_rest(inst_32503);
var inst_32512 = cljs.core.count(inst_32510);
var inst_32487 = inst_32511;
var inst_32488 = inst_32510;
var inst_32489 = inst_32512;
var inst_32490 = (0);
var state_32545__$1 = (function (){var statearr_32599 = state_32545;
(statearr_32599[(8)] = inst_32488);

(statearr_32599[(9)] = inst_32487);

(statearr_32599[(11)] = inst_32489);

(statearr_32599[(12)] = inst_32490);

return statearr_32599;
})();
var statearr_32600_33984 = state_32545__$1;
(statearr_32600_33984[(2)] = null);

(statearr_32600_33984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (3))){
var inst_32540 = (state_32545[(2)]);
var state_32545__$1 = state_32545;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32545__$1,inst_32540);
} else {
if((state_val_32546 === (12))){
var inst_32528 = (state_32545[(2)]);
var state_32545__$1 = state_32545;
var statearr_32604_33990 = state_32545__$1;
(statearr_32604_33990[(2)] = inst_32528);

(statearr_32604_33990[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (2))){
var state_32545__$1 = state_32545;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32545__$1,(4),in$);
} else {
if((state_val_32546 === (23))){
var inst_32536 = (state_32545[(2)]);
var state_32545__$1 = state_32545;
var statearr_32609_33996 = state_32545__$1;
(statearr_32609_33996[(2)] = inst_32536);

(statearr_32609_33996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (19))){
var inst_32523 = (state_32545[(2)]);
var state_32545__$1 = state_32545;
var statearr_32615_34001 = state_32545__$1;
(statearr_32615_34001[(2)] = inst_32523);

(statearr_32615_34001[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (11))){
var inst_32487 = (state_32545[(9)]);
var inst_32503 = (state_32545[(7)]);
var inst_32503__$1 = cljs.core.seq(inst_32487);
var state_32545__$1 = (function (){var statearr_32616 = state_32545;
(statearr_32616[(7)] = inst_32503__$1);

return statearr_32616;
})();
if(inst_32503__$1){
var statearr_32617_34013 = state_32545__$1;
(statearr_32617_34013[(1)] = (14));

} else {
var statearr_32620_34018 = state_32545__$1;
(statearr_32620_34018[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (9))){
var inst_32530 = (state_32545[(2)]);
var inst_32531 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32545__$1 = (function (){var statearr_32622 = state_32545;
(statearr_32622[(15)] = inst_32530);

return statearr_32622;
})();
if(cljs.core.truth_(inst_32531)){
var statearr_32623_34027 = state_32545__$1;
(statearr_32623_34027[(1)] = (21));

} else {
var statearr_32624_34028 = state_32545__$1;
(statearr_32624_34028[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (5))){
var inst_32479 = cljs.core.async.close_BANG_(out);
var state_32545__$1 = state_32545;
var statearr_32630_34029 = state_32545__$1;
(statearr_32630_34029[(2)] = inst_32479);

(statearr_32630_34029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (14))){
var inst_32503 = (state_32545[(7)]);
var inst_32507 = cljs.core.chunked_seq_QMARK_(inst_32503);
var state_32545__$1 = state_32545;
if(inst_32507){
var statearr_32637_34030 = state_32545__$1;
(statearr_32637_34030[(1)] = (17));

} else {
var statearr_32638_34031 = state_32545__$1;
(statearr_32638_34031[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (16))){
var inst_32526 = (state_32545[(2)]);
var state_32545__$1 = state_32545;
var statearr_32647_34032 = state_32545__$1;
(statearr_32647_34032[(2)] = inst_32526);

(statearr_32647_34032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32546 === (10))){
var inst_32488 = (state_32545[(8)]);
var inst_32490 = (state_32545[(12)]);
var inst_32496 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32488,inst_32490);
var state_32545__$1 = state_32545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32545__$1,(13),out,inst_32496);
} else {
if((state_val_32546 === (18))){
var inst_32503 = (state_32545[(7)]);
var inst_32515 = cljs.core.first(inst_32503);
var state_32545__$1 = state_32545;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32545__$1,(20),out,inst_32515);
} else {
if((state_val_32546 === (8))){
var inst_32489 = (state_32545[(11)]);
var inst_32490 = (state_32545[(12)]);
var inst_32492 = (inst_32490 < inst_32489);
var inst_32493 = inst_32492;
var state_32545__$1 = state_32545;
if(cljs.core.truth_(inst_32493)){
var statearr_32652_34036 = state_32545__$1;
(statearr_32652_34036[(1)] = (10));

} else {
var statearr_32653_34037 = state_32545__$1;
(statearr_32653_34037[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30431__auto__))
;
return ((function (switch__30211__auto__,c__30431__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30212__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30212__auto____0 = (function (){
var statearr_32654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32654[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30212__auto__);

(statearr_32654[(1)] = (1));

return statearr_32654;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30212__auto____1 = (function (state_32545){
while(true){
var ret_value__30213__auto__ = (function (){try{while(true){
var result__30214__auto__ = switch__30211__auto__(state_32545);
if(cljs.core.keyword_identical_QMARK_(result__30214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30214__auto__;
}
break;
}
}catch (e32659){if((e32659 instanceof Object)){
var ex__30215__auto__ = e32659;
var statearr_32660_34042 = state_32545;
(statearr_32660_34042[(5)] = ex__30215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32659;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34043 = state_32545;
state_32545 = G__34043;
continue;
} else {
return ret_value__30213__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30212__auto__ = function(state_32545){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30212__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30212__auto____1.call(this,state_32545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30212__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30212__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30212__auto__;
})()
;})(switch__30211__auto__,c__30431__auto__))
})();
var state__30433__auto__ = (function (){var statearr_32661 = (f__30432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30432__auto__.cljs$core$IFn$_invoke$arity$0() : f__30432__auto__.call(null));
(statearr_32661[(6)] = c__30431__auto__);

return statearr_32661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30433__auto__);
});})(c__30431__auto__))
);

return c__30431__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32663 = arguments.length;
switch (G__32663) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32666 = arguments.length;
switch (G__32666) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32668 = arguments.length;
switch (G__32668) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30431__auto___34060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30431__auto___34060,out){
return (function (){
var f__30432__auto__ = (function (){var switch__30211__auto__ = ((function (c__30431__auto___34060,out){
return (function (state_32697){
var state_val_32698 = (state_32697[(1)]);
if((state_val_32698 === (7))){
var inst_32692 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
var statearr_32707_34061 = state_32697__$1;
(statearr_32707_34061[(2)] = inst_32692);

(statearr_32707_34061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (1))){
var inst_32669 = null;
var state_32697__$1 = (function (){var statearr_32708 = state_32697;
(statearr_32708[(7)] = inst_32669);

return statearr_32708;
})();
var statearr_32709_34063 = state_32697__$1;
(statearr_32709_34063[(2)] = null);

(statearr_32709_34063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (4))){
var inst_32672 = (state_32697[(8)]);
var inst_32672__$1 = (state_32697[(2)]);
var inst_32673 = (inst_32672__$1 == null);
var inst_32674 = cljs.core.not(inst_32673);
var state_32697__$1 = (function (){var statearr_32710 = state_32697;
(statearr_32710[(8)] = inst_32672__$1);

return statearr_32710;
})();
if(inst_32674){
var statearr_32711_34064 = state_32697__$1;
(statearr_32711_34064[(1)] = (5));

} else {
var statearr_32712_34065 = state_32697__$1;
(statearr_32712_34065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (6))){
var state_32697__$1 = state_32697;
var statearr_32714_34066 = state_32697__$1;
(statearr_32714_34066[(2)] = null);

(statearr_32714_34066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (3))){
var inst_32694 = (state_32697[(2)]);
var inst_32695 = cljs.core.async.close_BANG_(out);
var state_32697__$1 = (function (){var statearr_32715 = state_32697;
(statearr_32715[(9)] = inst_32694);

return statearr_32715;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32697__$1,inst_32695);
} else {
if((state_val_32698 === (2))){
var state_32697__$1 = state_32697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32697__$1,(4),ch);
} else {
if((state_val_32698 === (11))){
var inst_32672 = (state_32697[(8)]);
var inst_32685 = (state_32697[(2)]);
var inst_32669 = inst_32672;
var state_32697__$1 = (function (){var statearr_32720 = state_32697;
(statearr_32720[(7)] = inst_32669);

(statearr_32720[(10)] = inst_32685);

return statearr_32720;
})();
var statearr_32721_34067 = state_32697__$1;
(statearr_32721_34067[(2)] = null);

(statearr_32721_34067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (9))){
var inst_32672 = (state_32697[(8)]);
var state_32697__$1 = state_32697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32697__$1,(11),out,inst_32672);
} else {
if((state_val_32698 === (5))){
var inst_32669 = (state_32697[(7)]);
var inst_32672 = (state_32697[(8)]);
var inst_32680 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32672,inst_32669);
var state_32697__$1 = state_32697;
if(inst_32680){
var statearr_32726_34071 = state_32697__$1;
(statearr_32726_34071[(1)] = (8));

} else {
var statearr_32727_34072 = state_32697__$1;
(statearr_32727_34072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (10))){
var inst_32688 = (state_32697[(2)]);
var state_32697__$1 = state_32697;
var statearr_32732_34073 = state_32697__$1;
(statearr_32732_34073[(2)] = inst_32688);

(statearr_32732_34073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32698 === (8))){
var inst_32669 = (state_32697[(7)]);
var tmp32725 = inst_32669;
var inst_32669__$1 = tmp32725;
var state_32697__$1 = (function (){var statearr_32740 = state_32697;
(statearr_32740[(7)] = inst_32669__$1);

return statearr_32740;
})();
var statearr_32741_34081 = state_32697__$1;
(statearr_32741_34081[(2)] = null);

(statearr_32741_34081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30431__auto___34060,out))
;
return ((function (switch__30211__auto__,c__30431__auto___34060,out){
return (function() {
var cljs$core$async$state_machine__30212__auto__ = null;
var cljs$core$async$state_machine__30212__auto____0 = (function (){
var statearr_32746 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32746[(0)] = cljs$core$async$state_machine__30212__auto__);

(statearr_32746[(1)] = (1));

return statearr_32746;
});
var cljs$core$async$state_machine__30212__auto____1 = (function (state_32697){
while(true){
var ret_value__30213__auto__ = (function (){try{while(true){
var result__30214__auto__ = switch__30211__auto__(state_32697);
if(cljs.core.keyword_identical_QMARK_(result__30214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30214__auto__;
}
break;
}
}catch (e32748){if((e32748 instanceof Object)){
var ex__30215__auto__ = e32748;
var statearr_32750_34100 = state_32697;
(statearr_32750_34100[(5)] = ex__30215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32748;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34101 = state_32697;
state_32697 = G__34101;
continue;
} else {
return ret_value__30213__auto__;
}
break;
}
});
cljs$core$async$state_machine__30212__auto__ = function(state_32697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30212__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30212__auto____1.call(this,state_32697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30212__auto____0;
cljs$core$async$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30212__auto____1;
return cljs$core$async$state_machine__30212__auto__;
})()
;})(switch__30211__auto__,c__30431__auto___34060,out))
})();
var state__30433__auto__ = (function (){var statearr_32754 = (f__30432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30432__auto__.cljs$core$IFn$_invoke$arity$0() : f__30432__auto__.call(null));
(statearr_32754[(6)] = c__30431__auto___34060);

return statearr_32754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30433__auto__);
});})(c__30431__auto___34060,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32759 = arguments.length;
switch (G__32759) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30431__auto___34128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30431__auto___34128,out){
return (function (){
var f__30432__auto__ = (function (){var switch__30211__auto__ = ((function (c__30431__auto___34128,out){
return (function (state_32803){
var state_val_32804 = (state_32803[(1)]);
if((state_val_32804 === (7))){
var inst_32799 = (state_32803[(2)]);
var state_32803__$1 = state_32803;
var statearr_32805_34136 = state_32803__$1;
(statearr_32805_34136[(2)] = inst_32799);

(statearr_32805_34136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (1))){
var inst_32764 = (new Array(n));
var inst_32766 = inst_32764;
var inst_32767 = (0);
var state_32803__$1 = (function (){var statearr_32806 = state_32803;
(statearr_32806[(7)] = inst_32767);

(statearr_32806[(8)] = inst_32766);

return statearr_32806;
})();
var statearr_32807_34140 = state_32803__$1;
(statearr_32807_34140[(2)] = null);

(statearr_32807_34140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (4))){
var inst_32771 = (state_32803[(9)]);
var inst_32771__$1 = (state_32803[(2)]);
var inst_32772 = (inst_32771__$1 == null);
var inst_32773 = cljs.core.not(inst_32772);
var state_32803__$1 = (function (){var statearr_32808 = state_32803;
(statearr_32808[(9)] = inst_32771__$1);

return statearr_32808;
})();
if(inst_32773){
var statearr_32812_34141 = state_32803__$1;
(statearr_32812_34141[(1)] = (5));

} else {
var statearr_32813_34143 = state_32803__$1;
(statearr_32813_34143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (15))){
var inst_32793 = (state_32803[(2)]);
var state_32803__$1 = state_32803;
var statearr_32817_34144 = state_32803__$1;
(statearr_32817_34144[(2)] = inst_32793);

(statearr_32817_34144[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (13))){
var state_32803__$1 = state_32803;
var statearr_32818_34148 = state_32803__$1;
(statearr_32818_34148[(2)] = null);

(statearr_32818_34148[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (6))){
var inst_32767 = (state_32803[(7)]);
var inst_32789 = (inst_32767 > (0));
var state_32803__$1 = state_32803;
if(cljs.core.truth_(inst_32789)){
var statearr_32822_34149 = state_32803__$1;
(statearr_32822_34149[(1)] = (12));

} else {
var statearr_32823_34150 = state_32803__$1;
(statearr_32823_34150[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (3))){
var inst_32801 = (state_32803[(2)]);
var state_32803__$1 = state_32803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32803__$1,inst_32801);
} else {
if((state_val_32804 === (12))){
var inst_32766 = (state_32803[(8)]);
var inst_32791 = cljs.core.vec(inst_32766);
var state_32803__$1 = state_32803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32803__$1,(15),out,inst_32791);
} else {
if((state_val_32804 === (2))){
var state_32803__$1 = state_32803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32803__$1,(4),ch);
} else {
if((state_val_32804 === (11))){
var inst_32783 = (state_32803[(2)]);
var inst_32784 = (new Array(n));
var inst_32766 = inst_32784;
var inst_32767 = (0);
var state_32803__$1 = (function (){var statearr_32824 = state_32803;
(statearr_32824[(7)] = inst_32767);

(statearr_32824[(10)] = inst_32783);

(statearr_32824[(8)] = inst_32766);

return statearr_32824;
})();
var statearr_32825_34158 = state_32803__$1;
(statearr_32825_34158[(2)] = null);

(statearr_32825_34158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (9))){
var inst_32766 = (state_32803[(8)]);
var inst_32781 = cljs.core.vec(inst_32766);
var state_32803__$1 = state_32803;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32803__$1,(11),out,inst_32781);
} else {
if((state_val_32804 === (5))){
var inst_32767 = (state_32803[(7)]);
var inst_32771 = (state_32803[(9)]);
var inst_32766 = (state_32803[(8)]);
var inst_32776 = (state_32803[(11)]);
var inst_32775 = (inst_32766[inst_32767] = inst_32771);
var inst_32776__$1 = (inst_32767 + (1));
var inst_32777 = (inst_32776__$1 < n);
var state_32803__$1 = (function (){var statearr_32826 = state_32803;
(statearr_32826[(11)] = inst_32776__$1);

(statearr_32826[(12)] = inst_32775);

return statearr_32826;
})();
if(cljs.core.truth_(inst_32777)){
var statearr_32827_34167 = state_32803__$1;
(statearr_32827_34167[(1)] = (8));

} else {
var statearr_32828_34168 = state_32803__$1;
(statearr_32828_34168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (14))){
var inst_32796 = (state_32803[(2)]);
var inst_32797 = cljs.core.async.close_BANG_(out);
var state_32803__$1 = (function (){var statearr_32830 = state_32803;
(statearr_32830[(13)] = inst_32796);

return statearr_32830;
})();
var statearr_32831_34170 = state_32803__$1;
(statearr_32831_34170[(2)] = inst_32797);

(statearr_32831_34170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (10))){
var inst_32787 = (state_32803[(2)]);
var state_32803__$1 = state_32803;
var statearr_32832_34175 = state_32803__$1;
(statearr_32832_34175[(2)] = inst_32787);

(statearr_32832_34175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32804 === (8))){
var inst_32766 = (state_32803[(8)]);
var inst_32776 = (state_32803[(11)]);
var tmp32829 = inst_32766;
var inst_32766__$1 = tmp32829;
var inst_32767 = inst_32776;
var state_32803__$1 = (function (){var statearr_32833 = state_32803;
(statearr_32833[(7)] = inst_32767);

(statearr_32833[(8)] = inst_32766__$1);

return statearr_32833;
})();
var statearr_32834_34176 = state_32803__$1;
(statearr_32834_34176[(2)] = null);

(statearr_32834_34176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30431__auto___34128,out))
;
return ((function (switch__30211__auto__,c__30431__auto___34128,out){
return (function() {
var cljs$core$async$state_machine__30212__auto__ = null;
var cljs$core$async$state_machine__30212__auto____0 = (function (){
var statearr_32835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32835[(0)] = cljs$core$async$state_machine__30212__auto__);

(statearr_32835[(1)] = (1));

return statearr_32835;
});
var cljs$core$async$state_machine__30212__auto____1 = (function (state_32803){
while(true){
var ret_value__30213__auto__ = (function (){try{while(true){
var result__30214__auto__ = switch__30211__auto__(state_32803);
if(cljs.core.keyword_identical_QMARK_(result__30214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30214__auto__;
}
break;
}
}catch (e32836){if((e32836 instanceof Object)){
var ex__30215__auto__ = e32836;
var statearr_32837_34177 = state_32803;
(statearr_32837_34177[(5)] = ex__30215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32836;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34178 = state_32803;
state_32803 = G__34178;
continue;
} else {
return ret_value__30213__auto__;
}
break;
}
});
cljs$core$async$state_machine__30212__auto__ = function(state_32803){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30212__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30212__auto____1.call(this,state_32803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30212__auto____0;
cljs$core$async$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30212__auto____1;
return cljs$core$async$state_machine__30212__auto__;
})()
;})(switch__30211__auto__,c__30431__auto___34128,out))
})();
var state__30433__auto__ = (function (){var statearr_32838 = (f__30432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30432__auto__.cljs$core$IFn$_invoke$arity$0() : f__30432__auto__.call(null));
(statearr_32838[(6)] = c__30431__auto___34128);

return statearr_32838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30433__auto__);
});})(c__30431__auto___34128,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32840 = arguments.length;
switch (G__32840) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30431__auto___34180 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30431__auto___34180,out){
return (function (){
var f__30432__auto__ = (function (){var switch__30211__auto__ = ((function (c__30431__auto___34180,out){
return (function (state_32882){
var state_val_32883 = (state_32882[(1)]);
if((state_val_32883 === (7))){
var inst_32878 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
var statearr_32884_34181 = state_32882__$1;
(statearr_32884_34181[(2)] = inst_32878);

(statearr_32884_34181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (1))){
var inst_32841 = [];
var inst_32842 = inst_32841;
var inst_32843 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32882__$1 = (function (){var statearr_32885 = state_32882;
(statearr_32885[(7)] = inst_32843);

(statearr_32885[(8)] = inst_32842);

return statearr_32885;
})();
var statearr_32886_34182 = state_32882__$1;
(statearr_32886_34182[(2)] = null);

(statearr_32886_34182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (4))){
var inst_32846 = (state_32882[(9)]);
var inst_32846__$1 = (state_32882[(2)]);
var inst_32847 = (inst_32846__$1 == null);
var inst_32848 = cljs.core.not(inst_32847);
var state_32882__$1 = (function (){var statearr_32887 = state_32882;
(statearr_32887[(9)] = inst_32846__$1);

return statearr_32887;
})();
if(inst_32848){
var statearr_32888_34185 = state_32882__$1;
(statearr_32888_34185[(1)] = (5));

} else {
var statearr_32889_34186 = state_32882__$1;
(statearr_32889_34186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (15))){
var inst_32872 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
var statearr_32890_34187 = state_32882__$1;
(statearr_32890_34187[(2)] = inst_32872);

(statearr_32890_34187[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (13))){
var state_32882__$1 = state_32882;
var statearr_32891_34188 = state_32882__$1;
(statearr_32891_34188[(2)] = null);

(statearr_32891_34188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (6))){
var inst_32842 = (state_32882[(8)]);
var inst_32867 = inst_32842.length;
var inst_32868 = (inst_32867 > (0));
var state_32882__$1 = state_32882;
if(cljs.core.truth_(inst_32868)){
var statearr_32892_34189 = state_32882__$1;
(statearr_32892_34189[(1)] = (12));

} else {
var statearr_32893_34190 = state_32882__$1;
(statearr_32893_34190[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (3))){
var inst_32880 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32882__$1,inst_32880);
} else {
if((state_val_32883 === (12))){
var inst_32842 = (state_32882[(8)]);
var inst_32870 = cljs.core.vec(inst_32842);
var state_32882__$1 = state_32882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32882__$1,(15),out,inst_32870);
} else {
if((state_val_32883 === (2))){
var state_32882__$1 = state_32882;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32882__$1,(4),ch);
} else {
if((state_val_32883 === (11))){
var inst_32846 = (state_32882[(9)]);
var inst_32850 = (state_32882[(10)]);
var inst_32860 = (state_32882[(2)]);
var inst_32861 = [];
var inst_32862 = inst_32861.push(inst_32846);
var inst_32842 = inst_32861;
var inst_32843 = inst_32850;
var state_32882__$1 = (function (){var statearr_32894 = state_32882;
(statearr_32894[(7)] = inst_32843);

(statearr_32894[(8)] = inst_32842);

(statearr_32894[(11)] = inst_32860);

(statearr_32894[(12)] = inst_32862);

return statearr_32894;
})();
var statearr_32895_34192 = state_32882__$1;
(statearr_32895_34192[(2)] = null);

(statearr_32895_34192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (9))){
var inst_32842 = (state_32882[(8)]);
var inst_32858 = cljs.core.vec(inst_32842);
var state_32882__$1 = state_32882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32882__$1,(11),out,inst_32858);
} else {
if((state_val_32883 === (5))){
var inst_32846 = (state_32882[(9)]);
var inst_32850 = (state_32882[(10)]);
var inst_32843 = (state_32882[(7)]);
var inst_32850__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32846) : f.call(null,inst_32846));
var inst_32851 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32850__$1,inst_32843);
var inst_32852 = cljs.core.keyword_identical_QMARK_(inst_32843,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32853 = ((inst_32851) || (inst_32852));
var state_32882__$1 = (function (){var statearr_32896 = state_32882;
(statearr_32896[(10)] = inst_32850__$1);

return statearr_32896;
})();
if(cljs.core.truth_(inst_32853)){
var statearr_32897_34193 = state_32882__$1;
(statearr_32897_34193[(1)] = (8));

} else {
var statearr_32898_34194 = state_32882__$1;
(statearr_32898_34194[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (14))){
var inst_32875 = (state_32882[(2)]);
var inst_32876 = cljs.core.async.close_BANG_(out);
var state_32882__$1 = (function (){var statearr_32900 = state_32882;
(statearr_32900[(13)] = inst_32875);

return statearr_32900;
})();
var statearr_32901_34195 = state_32882__$1;
(statearr_32901_34195[(2)] = inst_32876);

(statearr_32901_34195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (10))){
var inst_32865 = (state_32882[(2)]);
var state_32882__$1 = state_32882;
var statearr_32902_34196 = state_32882__$1;
(statearr_32902_34196[(2)] = inst_32865);

(statearr_32902_34196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32883 === (8))){
var inst_32846 = (state_32882[(9)]);
var inst_32850 = (state_32882[(10)]);
var inst_32842 = (state_32882[(8)]);
var inst_32855 = inst_32842.push(inst_32846);
var tmp32899 = inst_32842;
var inst_32842__$1 = tmp32899;
var inst_32843 = inst_32850;
var state_32882__$1 = (function (){var statearr_32903 = state_32882;
(statearr_32903[(7)] = inst_32843);

(statearr_32903[(8)] = inst_32842__$1);

(statearr_32903[(14)] = inst_32855);

return statearr_32903;
})();
var statearr_32904_34198 = state_32882__$1;
(statearr_32904_34198[(2)] = null);

(statearr_32904_34198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30431__auto___34180,out))
;
return ((function (switch__30211__auto__,c__30431__auto___34180,out){
return (function() {
var cljs$core$async$state_machine__30212__auto__ = null;
var cljs$core$async$state_machine__30212__auto____0 = (function (){
var statearr_32905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32905[(0)] = cljs$core$async$state_machine__30212__auto__);

(statearr_32905[(1)] = (1));

return statearr_32905;
});
var cljs$core$async$state_machine__30212__auto____1 = (function (state_32882){
while(true){
var ret_value__30213__auto__ = (function (){try{while(true){
var result__30214__auto__ = switch__30211__auto__(state_32882);
if(cljs.core.keyword_identical_QMARK_(result__30214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30214__auto__;
}
break;
}
}catch (e32906){if((e32906 instanceof Object)){
var ex__30215__auto__ = e32906;
var statearr_32907_34201 = state_32882;
(statearr_32907_34201[(5)] = ex__30215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32906;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34202 = state_32882;
state_32882 = G__34202;
continue;
} else {
return ret_value__30213__auto__;
}
break;
}
});
cljs$core$async$state_machine__30212__auto__ = function(state_32882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30212__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30212__auto____1.call(this,state_32882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30212__auto____0;
cljs$core$async$state_machine__30212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30212__auto____1;
return cljs$core$async$state_machine__30212__auto__;
})()
;})(switch__30211__auto__,c__30431__auto___34180,out))
})();
var state__30433__auto__ = (function (){var statearr_32908 = (f__30432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30432__auto__.cljs$core$IFn$_invoke$arity$0() : f__30432__auto__.call(null));
(statearr_32908[(6)] = c__30431__auto___34180);

return statearr_32908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30433__auto__);
});})(c__30431__auto___34180,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
