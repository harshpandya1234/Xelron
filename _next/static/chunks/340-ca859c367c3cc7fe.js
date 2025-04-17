! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "921d6cc2-a49c-4c74-9215-7f93d4dd5d97", e._sentryDebugIdIdentifier = "sentry-dbid-921d6cc2-a49c-4c74-9215-7f93d4dd5d97")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [340], {
        6480: (e, t, n) => {
            n.d(t, {
                c: () => i
            });
            async function i() {
                let {
                    FFmpeg: e
                } = await n.e(547).then(n.bind(n, 3547)), {
                    toBlobURL: t
                } = await n.e(573).then(n.bind(n, 573)), i = "/assets/ffmpeg-0.12.10", r = new e;
                return r.on("log", e => console.log("[FFmpeg]", e.message)), await r.load({
                    coreURL: await t("".concat(i, "/ffmpeg-core.js"), "text/javascript"),
                    wasmURL: await t("".concat(i, "/ffmpeg-core.wasm"), "application/wasm")
                }), r
            }
        },
        5761: (e, t, n) => {
            n.d(t, {
                A: () => mF
            });
            var i = Object.create,
                r = Object.defineProperty,
                a = Object.getOwnPropertyDescriptor,
                s = Object.getOwnPropertyNames,
                o = Object.getPrototypeOf,
                l = Object.prototype.hasOwnProperty,
                h = (e, t) => () => (e && (t = e(e = 0)), t),
                u = (e, t, n, i) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let o of s(t)) l.call(e, o) || o === n || r(e, o, {
                            get: () => t[o],
                            enumerable: !(i = a(t, o)) || i.enumerable
                        });
                    return e
                },
                c = (e, t, n) => (n = null != e ? i(o(e)) : {}, u(!t && e && e.__esModule ? n : r(n, "default", {
                    value: e,
                    enumerable: !0
                }), e)),
                d = e => u(r({}, "__esModule", {
                    value: !0
                }), e);

            function p() {
                p.init.call(this)
            }

            function f(e) {
                if ("function" != typeof e) throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
            }

            function m(e) {
                return void 0 === e._maxListeners ? p.defaultMaxListeners : e._maxListeners
            }

            function g(e, t, n, i) {
                var r, a, s;
                if (f(n), void 0 === (a = e._events) ? (a = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== a.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), a = e._events), s = a[t]), void 0 === s) s = a[t] = n, ++e._eventsCount;
                else if ("function" == typeof s ? s = a[t] = i ? [n, s] : [s, n] : i ? s.unshift(n) : s.push(n), (r = m(e)) > 0 && s.length > r && !s.warned) {
                    s.warned = !0;
                    var o = Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    o.name = "MaxListenersExceededWarning", o.emitter = e, o.type = t, o.count = s.length, console && console.warn && console.warn(o)
                }
                return e
            }

            function v() {
                if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 == arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function _(e, t, n) {
                var i = {
                        fired: !1,
                        wrapFn: void 0,
                        target: e,
                        type: t,
                        listener: n
                    },
                    r = v.bind(i);
                return r.listener = n, i.wrapFn = r, r
            }

            function x(e, t, n) {
                var i = e._events;
                if (void 0 === i) return [];
                var r = i[t];
                return void 0 === r ? [] : "function" == typeof r ? n ? [r.listener || r] : [r] : n ? function(e) {
                    for (var t = Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                    return t
                }(r) : y(r, r.length)
            }

            function M(e) {
                var t = this._events;
                if (void 0 !== t) {
                    var n = t[e];
                    if ("function" == typeof n) return 1;
                    if (void 0 !== n) return n.length
                }
                return 0
            }

            function y(e, t) {
                for (var n = Array(t), i = 0; i < t; ++i) n[i] = e[i];
                return n
            }
            var E, S, b, T, A, w, R, C, U, P = h(() => {
                    "use strict";
                    S = (E = "object" == typeof Reflect ? Reflect : null) && "function" == typeof E.apply ? E.apply : function(e, t, n) {
                        return Function.prototype.apply.call(e, t, n)
                    }, b = E && "function" == typeof E.ownKeys ? E.ownKeys : Object.getOwnPropertySymbols ? function(e) {
                        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
                    } : function(e) {
                        return Object.getOwnPropertyNames(e)
                    }, T = Number.isNaN || function(e) {
                        return e != e
                    }, p.EventEmitter = p, p.prototype._events = void 0, p.prototype._eventsCount = 0, p.prototype._maxListeners = void 0, A = 10, Object.defineProperty(p, "defaultMaxListeners", {
                        enumerable: !0,
                        get: function() {
                            return A
                        },
                        set: function(e) {
                            if ("number" != typeof e || e < 0 || T(e)) throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                            A = e
                        }
                    }), p.init = function() {
                        (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
                    }, p.prototype.setMaxListeners = function(e) {
                        if ("number" != typeof e || e < 0 || T(e)) throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                        return this._maxListeners = e, this
                    }, p.prototype.getMaxListeners = function() {
                        return m(this)
                    }, p.prototype.emit = function(e) {
                        if (!e) throw Error("Undefined event type");
                        for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
                        var i = "error" === e,
                            r = this._events;
                        if (void 0 !== r) i = i && void 0 === r.error;
                        else if (!i) return !1;
                        if (i) {
                            if (t.length > 0 && (a = t[0]), a instanceof Error) throw a;
                            var a, s = Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
                            throw s.context = a, s
                        }
                        var o = r[e];
                        if (void 0 === o) return !1;
                        if ("function" == typeof o) S(o, this, t);
                        else
                            for (var l = o.length, h = y(o, l), n = 0; n < l; ++n) S(h[n], this, t);
                        return !0
                    }, p.prototype.addListener = function(e, t) {
                        return g(this, e, t, !1)
                    }, p.prototype.on = p.prototype.addListener, p.prototype.prependListener = function(e, t) {
                        return g(this, e, t, !0)
                    }, p.prototype.once = function(e, t) {
                        return f(t), this.on(e, _(this, e, t)), this
                    }, p.prototype.prependOnceListener = function(e, t) {
                        return f(t), this.prependListener(e, _(this, e, t)), this
                    }, p.prototype.removeListener = function(e, t) {
                        var n, i, r, a, s;
                        if (f(t), void 0 === (i = this._events) || void 0 === (n = i[e])) return this;
                        if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || t));
                        else if ("function" != typeof n) {
                            for (r = -1, a = n.length - 1; a >= 0; a--)
                                if (n[a] === t || n[a].listener === t) {
                                    s = n[a].listener, r = a;
                                    break
                                }
                            if (r < 0) return this;
                            0 === r ? n.shift() : function(e, t) {
                                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                                e.pop()
                            }(n, r), 1 === n.length && (i[e] = n[0]), void 0 !== i.removeListener && this.emit("removeListener", e, s || t)
                        }
                        return this
                    }, p.prototype.off = p.prototype.removeListener, p.prototype.removeAllListeners = function(e) {
                        var t, n, i;
                        if (void 0 === (n = this._events)) return this;
                        if (void 0 === n.removeListener) return 0 == arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
                        if (0 == arguments.length) {
                            var r, a = Object.keys(n);
                            for (i = 0; i < a.length; ++i) "removeListener" !== (r = a[i]) && this.removeAllListeners(r);
                            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                        }
                        if ("function" == typeof(t = n[e])) this.removeListener(e, t);
                        else if (void 0 !== t)
                            for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
                        return this
                    }, p.prototype.listeners = function(e) {
                        return x(this, e, !0)
                    }, p.prototype.rawListeners = function(e) {
                        return x(this, e, !1)
                    }, p.listenerCount = function(e, t) {
                        return "function" == typeof e.listenerCount ? e.listenerCount(t) : M.call(e, t)
                    }, p.prototype.listenerCount = M, p.prototype.eventNames = function() {
                        return this._eventsCount > 0 ? b(this._events) : []
                    }
                }),
                L = h(() => {
                    P(), p.prototype.off = p.prototype.removeListener, (w = new p).on_prior = w.prependListener.bind(w), w.setMaxListeners(100), w.getEventCount = () => {
                        let e = Object.keys(w._events),
                            t = 0,
                            n = 0;
                        for (; n < e.length;) w._events[e[n]].length && (t += w._events[e[n]].length), n++;
                        return t
                    }, R = w
                }),
                D = h(() => {
                    C = {}; {
                        let e = new URLSearchParams(window.location.search);
                        C = {}, e.forEach((e, t) => {
                            C[t] = "true" === e || "false" !== e && e
                        })
                    }
                    U = C
                });

            function I(e, t, n) {
                return Math.max(0, Math.min(1, (n - e) / (t - e)))
            }
            var N, O, F, B, z, G, H, k, V, W, X, j, Y, q, K, Z, J, Q, $, ee, et, en, ei, er, ea, es, eo, el, eh, eu, ec, ed, ep, ef, em, eg, ev, e_, ex, eM, ey, eE, eS, eb, eT, eA, ew, eR, eC, eU, eP, eL, eD, eI, eN, eO, eF, eB, ez, eG, eH, ek, eV, eW, eX, ej, eY, eq, eK, eZ, eJ, eQ, e$, e0, e1, e2, e3, e4, e5, e6, e8, e9, e7, te, tt, tn, ti, tr, ta, ts, to, tl, th, tu, tc, td, tp, tf, tm, tg, tv, t_, tx, tM, ty, tE, tS, tb, tT, tA, tw, tR, tC, tU, tP, tL, tD, tI, tN, tO, tF, tB, tz, tG, tH, tk, tV, tW, tX, tj, tY, tq, tK, tZ, tJ, tQ, t$, t0, t1, t2, t3, t4, t5, t6, t8, t9, t7, ne, nt, nn, ni, nr, na, ns, no, nl, nh, nu, nc, nd, np, nf, nm, ng, nv, n_, nx, nM, ny, nE, nS, nb, nT, nA, nw, nR, nC, nU, nP, nL, nD, nI, nN, nO, nF, nB, nz, nG = h(() => {
                    D(), N = !1, O = !1, F = U.debugaudio, U.stats, U.mode && parseInt(U.mode), U.sam, B = Math.min(window.devicePixelRatio, 2), z = function(e) {}, G = {
                        w: 0,
                        h: 0
                    }, H = {
                        w: 0,
                        h: 0
                    }, k = (e, t) => {
                        G.w = e, G.h = t
                    }, V = (e, t) => {
                        H.w = e, H.h = t
                    }, W = "landscape", X = "portrait", j = function(e) {}, Y = null, q = function(e) {
                        Y = e
                    }, K = null, Z = function(e) {
                        K = e
                    }, J = null, Q = function(e) {
                        J = e
                    }, U.fps, Object.freeze({
                        VOID: "VOID",
                        IDLE: "IDLE",
                        AI_STATE: "AI_STATE"
                    }).VOID, $ = "IDLE", ee = function(e) {
                        $ = e
                    }, et = {
                        IDLE: "IDLE",
                        AI: "AI",
                        USER: "USER"
                    }, en = 0, ei = function(e) {
                        en = I(0, 2e3, e)
                    }, er = 0, ea = 0, es = 0, eo = function(e, t) {
                        es = I(0, t, ea = e)
                    }, el = 0, eh = function(e, t) {
                        el = I(0, t, e)
                    }, eu = 0, ec = function(e, t) {
                        eu = I(0, t, e)
                    }, ed = function(e) {
                        er = e, ei(e)
                    }, ep = function(e) {}
                }),
                nH = h(() => {
                    ef = {
                        BEFORE_RENDER: "before_render",
                        UPDATE: "update",
                        DAWN_UPDATE: "dawn_update",
                        PRE_UPDATE: "pre_update",
                        POST_UPDATE: "post_update",
                        PAUSE: "pause",
                        PLAY: "play",
                        RESIZE: "resize",
                        AUDIO_STATE_CHANGE: "audio_state_change",
                        CONNECTED: "audio_connected",
                        DISCONNECTED: "audio_disconnected"
                    }
                }),
                nk = h(() => {
                    L(), nG(), nH(), em = new class {
                        update() {
                            arguments.length > 0 && void 0 !== arguments[0] && arguments[0], arguments.length > 1 && void 0 !== arguments[1] && arguments[1], this._isPlaying && requestAnimationFrame(this.updateEvent);
                            let e = Date.now(),
                                t = (e - this.now) / 1e3;
                            this.now = e, this.absTimer += t, R.emit(ef.PRE_UPDATE, t, this.absTimer), R.emit(ef.UPDATE, t, this.absTimer), R.emit(ef.POST_UPDATE, t, this.absTimer)
                        }
                        resize(e) {
                            null != e && (e.w || e.h) || (e = {
                                w: this.lastW,
                                h: this.lastH,
                                ...e
                            }), this.w = e.w, this.h = e.h, this.fullFrameX = e.w, this.fullFrameY = e.h, k(this.w, this.h), V(this.fullFrameX, this.fullFrameY), j(window.matchMedia("(orientation: landscape)").matches ? W : X), R.emit(ef.RESIZE, this.w, this.h), null != Y && (Y.style.width = "".concat(this.fullFrameX, "px"), Y.style.height = "".concat(this.fullFrameY, "px")), z(parseFloat((this.w / this.fullFrameX * B).toFixed(3))), !1 == this._isPlaying && this.update(!0)
                        }
                        constructor() {
                            this.play = () => new Promise(async (e, t) => {
                                if (this._isPlaying) {
                                    console.warn("webgl already playing"), e();
                                    return
                                }
                                this._isPlaying = !0, this.updateEvent(), this.now = Date.now(), R.emit(ef.PLAY, null), e()
                            }), this.pause = () => new Promise((e, t) => {
                                if (!1 == this._isPlaying) {
                                    console.warn("webgl already paused"), e();
                                    return
                                }
                                this._isPlaying = !1, R.emit(ef.PAUSE, null), e()
                            }), this._lastPlaying = !1, this._isPlaying = !1, this.now = Date.now(), this.absTimer = 0, this.w = 0, this.h = 0, this.lastW = 0, this.lastH = 0, this.updateEvent = this.update.bind(this)
                        }
                    }
                }),
                nV = h(() => {
                    eg = {
                        camera: {
                            type: "folder",
                            value: {
                                position: {
                                    visible: !1,
                                    type: "vec3",
                                    min: -100,
                                    max: 100,
                                    step: .01,
                                    value: {
                                        x: 0,
                                        y: 0,
                                        z: 11.222349786030593
                                    }
                                },
                                zoom: {
                                    value: 65.88,
                                    min: .1,
                                    max: 1e3,
                                    step: .01
                                },
                                far: {
                                    visible: !1,
                                    value: 500,
                                    min: 0,
                                    max: 1e3,
                                    step: .01
                                },
                                target: {
                                    visible: !1,
                                    type: "vec3",
                                    min: -100,
                                    max: 100,
                                    step: .01,
                                    value: {
                                        x: 0,
                                        y: 0,
                                        z: 0
                                    }
                                }
                            }
                        },
                        background: {
                            type: "folder",
                            state: "closed",
                            value: {
                                backgroundcolor: {
                                    type: "color",
                                    value: 0xffffff
                                }
                            }
                        },
                        preset: {
                            type: "folder",
                            value: {
                                preset: {
                                    type: "select",
                                    value: "miles",
                                    values: ["maya", "miles"]
                                }
                            }
                        },
                        maya: {
                            type: "folder",
                            value: {
                                gradientBlurBase: {
                                    type: "color",
                                    value: 0xdbe0c3,
                                    name: "baseColor"
                                },
                                gradientBlurColor: {
                                    type: "color",
                                    value: 0x9dab5a
                                },
                                outerRingColor: {
                                    type: "color",
                                    value: 0xdbe0c3
                                },
                                outerRingOpacity: {
                                    value: .3,
                                    min: 0,
                                    max: 1,
                                    step: .01
                                },
                                rippleColor: {
                                    type: "color",
                                    value: 0xdbe0c3
                                }
                            }
                        },
                        miles: {
                            type: "folder",
                            value: {
                                gradientBlurBase: {
                                    type: "color",
                                    value: 0xc3cb9c,
                                    name: "baseColor"
                                },
                                gradientBlurColor: {
                                    type: "color",
                                    value: 7043619
                                },
                                outerRingColor: {
                                    type: "color",
                                    value: 0xdbe0c3
                                },
                                outerRingOpacity: {
                                    value: .3,
                                    min: 0,
                                    max: 1,
                                    step: .01
                                },
                                rippleColor: {
                                    type: "color",
                                    value: 0xdbe0c3
                                }
                            }
                        },
                        general: {
                            type: "folder",
                            value: {
                                audioInfluence: {
                                    value: 2,
                                    min: 0,
                                    max: 8,
                                    step: .01
                                },
                                borderRadius: {
                                    visible: !1,
                                    value: 92,
                                    min: 0,
                                    max: 1200,
                                    step: 1
                                },
                                size: {
                                    visible: !1,
                                    type: "vec2",
                                    min: 1,
                                    max: 2e3,
                                    step: 1,
                                    value: {
                                        x: 646,
                                        y: 575
                                    }
                                },
                                cumulativeMode: {
                                    value: !1
                                },
                                flipAiAndUser: {
                                    value: !1
                                },
                                userMaxScale: {
                                    value: .5,
                                    min: 0,
                                    max: 2,
                                    step: .01
                                },
                                userSmooth: {
                                    value: 16.75,
                                    min: 0,
                                    max: 20,
                                    step: .25
                                },
                                userNoiseThreshold: {
                                    value: .2,
                                    min: 0,
                                    max: 1,
                                    step: .01
                                },
                                aiMinScale: {
                                    value: 0,
                                    min: 0,
                                    max: 2,
                                    step: .01
                                },
                                aiMaxScale: {
                                    value: .5,
                                    min: 0,
                                    max: 2,
                                    step: .01
                                },
                                aiSmooth: {
                                    value: 20,
                                    min: 0,
                                    max: 20,
                                    step: .25
                                },
                                rippleSpawnRate: {
                                    value: 1,
                                    min: 0,
                                    max: 1,
                                    step: .01
                                },
                                rippleLineWidth: {
                                    value: 2,
                                    min: 0,
                                    max: 5,
                                    step: .01
                                },
                                rippleOpacity: {
                                    value: .3,
                                    min: 0,
                                    max: 1,
                                    step: .01
                                },
                                gradientDisplacement: {
                                    type: "vec2",
                                    min: -1,
                                    max: 1,
                                    step: .01,
                                    value: {
                                        x: -.27,
                                        y: .81
                                    }
                                },
                                uvDomainGradientNoise: {
                                    min: 0,
                                    max: 2,
                                    step: .01,
                                    value: .88
                                },
                                gradientMixer: {
                                    min: 0,
                                    max: 1,
                                    step: .01,
                                    value: .5
                                }
                            }
                        },
                        text: {
                            type: "folder",
                            state: "closed",
                            value: {
                                position: {
                                    type: "vec3",
                                    min: -500,
                                    max: 500,
                                    step: .01,
                                    value: {
                                        x: 0,
                                        y: 0,
                                        z: 0
                                    }
                                },
                                scale: {
                                    value: 50,
                                    min: 0,
                                    max: 200,
                                    step: .01
                                }
                            }
                        },
                        nameText: {
                            type: "folder",
                            state: "closed",
                            value: {
                                position: {
                                    type: "vec3",
                                    min: -500,
                                    max: 500,
                                    step: .01,
                                    value: {
                                        x: 0,
                                        y: 0,
                                        z: 0
                                    }
                                },
                                scale: {
                                    value: 50,
                                    min: 0,
                                    max: 200,
                                    step: .01
                                }
                            }
                        },
                        audio: {
                            type: "folder",
                            visible: !1,
                            value: {
                                userSumNoiseThreshold: {
                                    value: 699.74,
                                    min: 0,
                                    max: 1e3
                                },
                                soundStateSustainInSeconds: {
                                    value: .25,
                                    min: 0,
                                    max: 1
                                }
                            }
                        },
                        IDLE: {
                            visible: !1,
                            type: "folder",
                            state: "closed",
                            value: {}
                        },
                        USER: {
                            visible: !1,
                            type: "folder",
                            state: "closed",
                            value: {}
                        },
                        AI: {
                            visible: !1,
                            type: "folder",
                            state: "closed",
                            value: {}
                        }
                    }
                }),
                nW = h(() => {
                    nG(), nV(), ev = new class {
                        getAudioStateConfig() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            switch (e || $) {
                                case et.IDLE:
                                    return this.currentConfig.IDLE.value;
                                case et.AI:
                                    return this.currentConfig.AI.value;
                                case et.USER:
                                    return this.currentConfig.USER.value
                            }
                        }
                        constructor() {
                            this.currentConfig = null, this.listeners = [], this.currentConfig = eg
                        }
                    }
                }),
                nX = h(() => {
                    e_ = "173", ex = 0, eM = 1, ey = 2, eE = 1, eS = 2, eb = 3, eT = 0, eA = 1, ew = 2, eR = 0, eC = 1, eU = 2, eP = 3, eL = 4, eD = 5, eI = 100, eN = 101, eO = 102, eF = 103, eB = 104, ez = 200, eG = 201, eH = 202, ek = 203, eV = 204, eW = 205, eX = 206, ej = 207, eY = 208, eq = 209, eK = 210, eZ = 211, eJ = 212, eQ = 213, e$ = 214, e0 = 0, e1 = 1, e2 = 2, e3 = 3, e4 = 4, e5 = 5, e6 = 6, e8 = 7, e9 = 0, e7 = 1, te = 2, tt = 0, tn = 1, ti = 2, tr = 3, ta = 4, ts = 5, to = 6, tl = 7, th = 300, tu = 301, tc = 302, td = 303, tp = 304, tf = 306, tm = 1e3, tg = 1001, tv = 1002, t_ = 1003, tx = 1004, tM = 1005, ty = 1006, tE = 1007, tS = 1008, tb = 1009, tT = 1010, tA = 1011, tw = 1012, tR = 1013, tC = 1014, tU = 1015, tP = 1016, tL = 1017, tD = 1018, tI = 1020, tN = 35902, tO = 1021, tF = 1022, tB = 1023, tz = 1024, tG = 1025, tH = 1026, tk = 1027, tV = 1028, tW = 1029, tX = 1030, tj = 1031, tY = 1033, tq = 33776, tK = 33777, tZ = 33778, tJ = 33779, tQ = 35840, t$ = 35841, t0 = 35842, t1 = 35843, t2 = 36196, t3 = 37492, t4 = 37496, t5 = 37808, t6 = 37809, t8 = 37810, t9 = 37811, t7 = 37812, ne = 37813, nt = 37814, nn = 37815, ni = 37816, nr = 37817, na = 37818, ns = 37819, no = 37820, nl = 37821, nh = 36492, nu = 36494, nc = 36495, nd = 36283, np = 36284, nf = 36285, nm = 36286, ng = 3200, nv = 3201, n_ = 0, nx = 1, nM = "", ny = "srgb", nE = "srgb-linear", nS = "linear", nb = "srgb", nT = 7680, nA = 519, nw = 512, nR = 513, nC = 514, nU = 515, nP = 516, nL = 517, nD = 518, nI = 519, nN = 35044, nO = "300 es", nF = 2e3, nB = 2001
                }),
                nj = h(() => {
                    nz = class {
                        addEventListener(e, t) {
                            void 0 === this._listeners && (this._listeners = {});
                            let n = this._listeners;
                            void 0 === n[e] && (n[e] = []), -1 === n[e].indexOf(t) && n[e].push(t)
                        }
                        hasEventListener(e, t) {
                            let n = this._listeners;
                            return void 0 !== n && void 0 !== n[e] && -1 !== n[e].indexOf(t)
                        }
                        removeEventListener(e, t) {
                            let n = this._listeners;
                            if (void 0 === n) return;
                            let i = n[e];
                            if (void 0 !== i) {
                                let e = i.indexOf(t); - 1 !== e && i.splice(e, 1)
                            }
                        }
                        dispatchEvent(e) {
                            let t = this._listeners;
                            if (void 0 === t) return;
                            let n = t[e.type];
                            if (void 0 !== n) {
                                e.target = this;
                                let t = n.slice(0);
                                for (let n = 0, i = t.length; n < i; n++) t[n].call(this, e);
                                e.target = null
                            }
                        }
                    }
                });

            function nY() {
                let e = 0xffffffff * Math.random() | 0,
                    t = 0xffffffff * Math.random() | 0,
                    n = 0xffffffff * Math.random() | 0,
                    i = 0xffffffff * Math.random() | 0;
                return (is[255 & e] + is[e >> 8 & 255] + is[e >> 16 & 255] + is[e >> 24 & 255] + "-" + is[255 & t] + is[t >> 8 & 255] + "-" + is[t >> 16 & 15 | 64] + is[t >> 24 & 255] + "-" + is[63 & n | 128] + is[n >> 8 & 255] + "-" + is[n >> 16 & 255] + is[n >> 24 & 255] + is[255 & i] + is[i >> 8 & 255] + is[i >> 16 & 255] + is[i >> 24 & 255]).toLowerCase()
            }

            function nq(e, t, n) {
                return Math.max(t, Math.min(n, e))
            }

            function nK(e, t) {
                return (e % t + t) % t
            }

            function nZ(e, t, n, i, r) {
                return i + (e - t) * (r - i) / (n - t)
            }

            function nJ(e, t, n) {
                return e !== t ? (n - e) / (t - e) : 0
            }

            function nQ(e, t, n) {
                return (1 - n) * e + n * t
            }

            function n$(e, t, n, i) {
                return nQ(e, t, 1 - Math.exp(-n * i))
            }

            function n0(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return t - Math.abs(nK(e, 2 * t) - t)
            }

            function n1(e, t, n) {
                return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * (3 - 2 * e)
            }

            function n2(e, t, n) {
                return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t)) * e * e * (e * (6 * e - 15) + 10)
            }

            function n3(e, t) {
                return e + Math.floor(Math.random() * (t - e + 1))
            }

            function n4(e, t) {
                return e + Math.random() * (t - e)
            }

            function n5(e) {
                return e * (.5 - Math.random())
            }

            function n6(e) {
                void 0 !== e && (io = e);
                let t = io += 0x6d2b79f5;
                return t = Math.imul(t ^ t >>> 15, 1 | t), (((t ^= t + Math.imul(t ^ t >>> 7, 61 | t)) ^ t >>> 14) >>> 0) / 0x100000000
            }

            function n8(e) {
                return e * il
            }

            function n9(e) {
                return e * ih
            }

            function n7(e) {
                return (e & e - 1) == 0 && 0 !== e
            }

            function ie(e) {
                return Math.pow(2, Math.ceil(Math.log(e) / Math.LN2))
            }

            function it(e) {
                return Math.pow(2, Math.floor(Math.log(e) / Math.LN2))
            }

            function ii(e, t, n, i, r) {
                let a = Math.cos,
                    s = Math.sin,
                    o = a(n / 2),
                    l = s(n / 2),
                    h = a((t + i) / 2),
                    u = s((t + i) / 2),
                    c = a((t - i) / 2),
                    d = s((t - i) / 2),
                    p = a((i - t) / 2),
                    f = s((i - t) / 2);
                switch (r) {
                    case "XYX":
                        e.set(o * u, l * c, l * d, o * h);
                        break;
                    case "YZY":
                        e.set(l * d, o * u, l * c, o * h);
                        break;
                    case "ZXZ":
                        e.set(l * c, l * d, o * u, o * h);
                        break;
                    case "XZX":
                        e.set(o * u, l * f, l * p, o * h);
                        break;
                    case "YXY":
                        e.set(l * p, o * u, l * f, o * h);
                        break;
                    case "ZYZ":
                        e.set(l * f, l * p, o * u, o * h);
                        break;
                    default:
                        console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r)
                }
            }

            function ir(e, t) {
                switch (t.constructor) {
                    case Float32Array:
                        return e;
                    case Uint32Array:
                        return e / 0xffffffff;
                    case Uint16Array:
                        return e / 65535;
                    case Uint8Array:
                        return e / 255;
                    case Int32Array:
                        return Math.max(e / 0x7fffffff, -1);
                    case Int16Array:
                        return Math.max(e / 32767, -1);
                    case Int8Array:
                        return Math.max(e / 127, -1);
                    default:
                        throw Error("Invalid component type.")
                }
            }

            function ia(e, t) {
                switch (t.constructor) {
                    case Float32Array:
                        return e;
                    case Uint32Array:
                        return Math.round(0xffffffff * e);
                    case Uint16Array:
                        return Math.round(65535 * e);
                    case Uint8Array:
                        return Math.round(255 * e);
                    case Int32Array:
                        return Math.round(0x7fffffff * e);
                    case Int16Array:
                        return Math.round(32767 * e);
                    case Int8Array:
                        return Math.round(127 * e);
                    default:
                        throw Error("Invalid component type.")
                }
            }
            var is, io, il, ih, iu, ic, id, ip, im = h(() => {
                    is = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], io = 1234567, iu = {
                        DEG2RAD: il = Math.PI / 180,
                        RAD2DEG: ih = 180 / Math.PI,
                        generateUUID: nY,
                        clamp: nq,
                        euclideanModulo: nK,
                        mapLinear: nZ,
                        inverseLerp: nJ,
                        lerp: nQ,
                        damp: n$,
                        pingpong: n0,
                        smoothstep: n1,
                        smootherstep: n2,
                        randInt: n3,
                        randFloat: n4,
                        randFloatSpread: n5,
                        seededRandom: n6,
                        degToRad: n8,
                        radToDeg: n9,
                        isPowerOfTwo: n7,
                        ceilPowerOfTwo: ie,
                        floorPowerOfTwo: it,
                        setQuaternionFromProperEuler: ii,
                        normalize: ia,
                        denormalize: ir
                    }
                }),
                ig = h(() => {
                    im(), ic = class e {
                        get width() {
                            return this.x
                        }
                        set width(e) {
                            this.x = e
                        }
                        get height() {
                            return this.y
                        }
                        set height(e) {
                            this.y = e
                        }
                        set(e, t) {
                            return this.x = e, this.y = t, this
                        }
                        setScalar(e) {
                            return this.x = e, this.y = e, this
                        }
                        setX(e) {
                            return this.x = e, this
                        }
                        setY(e) {
                            return this.y = e, this
                        }
                        setComponent(e, t) {
                            switch (e) {
                                case 0:
                                    this.x = t;
                                    break;
                                case 1:
                                    this.y = t;
                                    break;
                                default:
                                    throw Error("index is out of range: " + e)
                            }
                            return this
                        }
                        getComponent(e) {
                            switch (e) {
                                case 0:
                                    return this.x;
                                case 1:
                                    return this.y;
                                default:
                                    throw Error("index is out of range: " + e)
                            }
                        }
                        clone() {
                            return new this.constructor(this.x, this.y)
                        }
                        copy(e) {
                            return this.x = e.x, this.y = e.y, this
                        }
                        add(e) {
                            return this.x += e.x, this.y += e.y, this
                        }
                        addScalar(e) {
                            return this.x += e, this.y += e, this
                        }
                        addVectors(e, t) {
                            return this.x = e.x + t.x, this.y = e.y + t.y, this
                        }
                        addScaledVector(e, t) {
                            return this.x += e.x * t, this.y += e.y * t, this
                        }
                        sub(e) {
                            return this.x -= e.x, this.y -= e.y, this
                        }
                        subScalar(e) {
                            return this.x -= e, this.y -= e, this
                        }
                        subVectors(e, t) {
                            return this.x = e.x - t.x, this.y = e.y - t.y, this
                        }
                        multiply(e) {
                            return this.x *= e.x, this.y *= e.y, this
                        }
                        multiplyScalar(e) {
                            return this.x *= e, this.y *= e, this
                        }
                        divide(e) {
                            return this.x /= e.x, this.y /= e.y, this
                        }
                        divideScalar(e) {
                            return this.multiplyScalar(1 / e)
                        }
                        applyMatrix3(e) {
                            let t = this.x,
                                n = this.y,
                                i = e.elements;
                            return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this
                        }
                        min(e) {
                            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this
                        }
                        max(e) {
                            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this
                        }
                        clamp(e, t) {
                            return this.x = nq(this.x, e.x, t.x), this.y = nq(this.y, e.y, t.y), this
                        }
                        clampScalar(e, t) {
                            return this.x = nq(this.x, e, t), this.y = nq(this.y, e, t), this
                        }
                        clampLength(e, t) {
                            let n = this.length();
                            return this.divideScalar(n || 1).multiplyScalar(nq(n, e, t))
                        }
                        floor() {
                            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
                        }
                        ceil() {
                            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
                        }
                        round() {
                            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
                        }
                        roundToZero() {
                            return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this
                        }
                        negate() {
                            return this.x = -this.x, this.y = -this.y, this
                        }
                        dot(e) {
                            return this.x * e.x + this.y * e.y
                        }
                        cross(e) {
                            return this.x * e.y - this.y * e.x
                        }
                        lengthSq() {
                            return this.x * this.x + this.y * this.y
                        }
                        length() {
                            return Math.sqrt(this.x * this.x + this.y * this.y)
                        }
                        manhattanLength() {
                            return Math.abs(this.x) + Math.abs(this.y)
                        }
                        normalize() {
                            return this.divideScalar(this.length() || 1)
                        }
                        angle() {
                            return Math.atan2(-this.y, -this.x) + Math.PI
                        }
                        angleTo(e) {
                            let t = Math.sqrt(this.lengthSq() * e.lengthSq());
                            return 0 === t ? Math.PI / 2 : Math.acos(nq(this.dot(e) / t, -1, 1))
                        }
                        distanceTo(e) {
                            return Math.sqrt(this.distanceToSquared(e))
                        }
                        distanceToSquared(e) {
                            let t = this.x - e.x,
                                n = this.y - e.y;
                            return t * t + n * n
                        }
                        manhattanDistanceTo(e) {
                            return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
                        }
                        setLength(e) {
                            return this.normalize().multiplyScalar(e)
                        }
                        lerp(e, t) {
                            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
                        }
                        lerpVectors(e, t, n) {
                            return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this
                        }
                        equals(e) {
                            return e.x === this.x && e.y === this.y
                        }
                        fromArray(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return this.x = e[t], this.y = e[t + 1], this
                        }
                        toArray() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return e[t] = this.x, e[t + 1] = this.y, e
                        }
                        fromBufferAttribute(e, t) {
                            return this.x = e.getX(t), this.y = e.getY(t), this
                        }
                        rotateAround(e, t) {
                            let n = Math.cos(t),
                                i = Math.sin(t),
                                r = this.x - e.x,
                                a = this.y - e.y;
                            return this.x = r * n - a * i + e.x, this.y = r * i + a * n + e.y, this
                        }
                        random() {
                            return this.x = Math.random(), this.y = Math.random(), this
                        }*[Symbol.iterator]() {
                            yield this.x, yield this.y
                        }
                        constructor(t = 0, n = 0) {
                            e.prototype.isVector2 = !0, this.x = t, this.y = n
                        }
                    }
                }),
                iv = h(() => {
                    ip = new(id = class e {
                        set(e, t, n, i, r, a, s, o, l) {
                            let h = this.elements;
                            return h[0] = e, h[1] = i, h[2] = s, h[3] = t, h[4] = r, h[5] = o, h[6] = n, h[7] = a, h[8] = l, this
                        }
                        identity() {
                            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
                        }
                        copy(e) {
                            let t = this.elements,
                                n = e.elements;
                            return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this
                        }
                        extractBasis(e, t, n) {
                            return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this
                        }
                        setFromMatrix4(e) {
                            let t = e.elements;
                            return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
                        }
                        multiply(e) {
                            return this.multiplyMatrices(this, e)
                        }
                        premultiply(e) {
                            return this.multiplyMatrices(e, this)
                        }
                        multiplyMatrices(e, t) {
                            let n = e.elements,
                                i = t.elements,
                                r = this.elements,
                                a = n[0],
                                s = n[3],
                                o = n[6],
                                l = n[1],
                                h = n[4],
                                u = n[7],
                                c = n[2],
                                d = n[5],
                                p = n[8],
                                f = i[0],
                                m = i[3],
                                g = i[6],
                                v = i[1],
                                _ = i[4],
                                x = i[7],
                                M = i[2],
                                y = i[5],
                                E = i[8];
                            return r[0] = a * f + s * v + o * M, r[3] = a * m + s * _ + o * y, r[6] = a * g + s * x + o * E, r[1] = l * f + h * v + u * M, r[4] = l * m + h * _ + u * y, r[7] = l * g + h * x + u * E, r[2] = c * f + d * v + p * M, r[5] = c * m + d * _ + p * y, r[8] = c * g + d * x + p * E, this
                        }
                        multiplyScalar(e) {
                            let t = this.elements;
                            return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
                        }
                        determinant() {
                            let e = this.elements,
                                t = e[0],
                                n = e[1],
                                i = e[2],
                                r = e[3],
                                a = e[4],
                                s = e[5],
                                o = e[6],
                                l = e[7],
                                h = e[8];
                            return t * a * h - t * s * l - n * r * h + n * s * o + i * r * l - i * a * o
                        }
                        invert() {
                            let e = this.elements,
                                t = e[0],
                                n = e[1],
                                i = e[2],
                                r = e[3],
                                a = e[4],
                                s = e[5],
                                o = e[6],
                                l = e[7],
                                h = e[8],
                                u = h * a - s * l,
                                c = s * o - h * r,
                                d = l * r - a * o,
                                p = t * u + n * c + i * d;
                            if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
                            let f = 1 / p;
                            return e[0] = u * f, e[1] = (i * l - h * n) * f, e[2] = (s * n - i * a) * f, e[3] = c * f, e[4] = (h * t - i * o) * f, e[5] = (i * r - s * t) * f, e[6] = d * f, e[7] = (n * o - l * t) * f, e[8] = (a * t - n * r) * f, this
                        }
                        transpose() {
                            let e, t = this.elements;
                            return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
                        }
                        getNormalMatrix(e) {
                            return this.setFromMatrix4(e).invert().transpose()
                        }
                        transposeIntoArray(e) {
                            let t = this.elements;
                            return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
                        }
                        setUvTransform(e, t, n, i, r, a, s) {
                            let o = Math.cos(r),
                                l = Math.sin(r);
                            return this.set(n * o, n * l, -n * (o * a + l * s) + a + e, -i * l, i * o, -i * (-l * a + o * s) + s + t, 0, 0, 1), this
                        }
                        scale(e, t) {
                            return this.premultiply(ip.makeScale(e, t)), this
                        }
                        rotate(e) {
                            return this.premultiply(ip.makeRotation(-e)), this
                        }
                        translate(e, t) {
                            return this.premultiply(ip.makeTranslation(e, t)), this
                        }
                        makeTranslation(e, t) {
                            return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this
                        }
                        makeRotation(e) {
                            let t = Math.cos(e),
                                n = Math.sin(e);
                            return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this
                        }
                        makeScale(e, t) {
                            return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this
                        }
                        equals(e) {
                            let t = this.elements,
                                n = e.elements;
                            for (let e = 0; e < 9; e++)
                                if (t[e] !== n[e]) return !1;
                            return !0
                        }
                        fromArray(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
                            return this
                        }
                        toArray() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                n = this.elements;
                            return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e
                        }
                        clone() {
                            return new this.constructor().fromArray(this.elements)
                        }
                        constructor(t, n, i, r, a, s, o, l, h) {
                            e.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], void 0 !== t && this.set(t, n, i, r, a, s, o, l, h)
                        }
                    })
                });

            function i_(e) {
                for (let t = e.length - 1; t >= 0; --t)
                    if (e[t] >= 65535) return !0;
                return !1
            }

            function ix(e) {
                return document.createElementNS("http://www.w3.org/1999/xhtml", e)
            }

            function iM(e) {
                e in iy || (iy[e] = !0, console.warn(e))
            }
            var iy, iE = h(() => {
                iy = {}
            });

            function iS(e) {
                return e < .04045 ? .0773993808 * e : Math.pow(.9478672986 * e + .0521327014, 2.4)
            }

            function ib(e) {
                return e < .0031308 ? 12.92 * e : 1.055 * Math.pow(e, .41666) - .055
            }
            var iT, iA, iw, iR, iC, iU = h(() => {
                    nX(), iv(), iT = new id().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), iA = new id().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715), iw = function() {
                        let e = {
                                enabled: !0,
                                workingColorSpace: nE,
                                spaces: {},
                                convert: function(e, t, n) {
                                    return !1 !== this.enabled && t !== n && t && n && (this.spaces[t].transfer === nb && (e.r = iS(e.r), e.g = iS(e.g), e.b = iS(e.b)), this.spaces[t].primaries !== this.spaces[n].primaries && (e.applyMatrix3(this.spaces[t].toXYZ), e.applyMatrix3(this.spaces[n].fromXYZ)), this.spaces[n].transfer === nb && (e.r = ib(e.r), e.g = ib(e.g), e.b = ib(e.b))), e
                                },
                                fromWorkingColorSpace: function(e, t) {
                                    return this.convert(e, this.workingColorSpace, t)
                                },
                                toWorkingColorSpace: function(e, t) {
                                    return this.convert(e, t, this.workingColorSpace)
                                },
                                getPrimaries: function(e) {
                                    return this.spaces[e].primaries
                                },
                                getTransfer: function(e) {
                                    return e === nM ? nS : this.spaces[e].transfer
                                },
                                getLuminanceCoefficients: function(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.workingColorSpace;
                                    return e.fromArray(this.spaces[t].luminanceCoefficients)
                                },
                                define: function(e) {
                                    Object.assign(this.spaces, e)
                                },
                                _getMatrix: function(e, t, n) {
                                    return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)
                                },
                                _getDrawingBufferColorSpace: function(e) {
                                    return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace
                                },
                                _getUnpackColorSpace: function() {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.workingColorSpace;
                                    return this.spaces[e].workingColorSpaceConfig.unpackColorSpace
                                }
                            },
                            t = [.64, .33, .3, .6, .15, .06],
                            n = [.2126, .7152, .0722],
                            i = [.3127, .329];
                        return e.define({
                            [nE]: {
                                primaries: t,
                                whitePoint: i,
                                transfer: nS,
                                toXYZ: iT,
                                fromXYZ: iA,
                                luminanceCoefficients: n,
                                workingColorSpaceConfig: {
                                    unpackColorSpace: ny
                                },
                                outputColorSpaceConfig: {
                                    drawingBufferColorSpace: ny
                                }
                            },
                            [ny]: {
                                primaries: t,
                                whitePoint: i,
                                transfer: nb,
                                toXYZ: iT,
                                fromXYZ: iA,
                                luminanceCoefficients: n,
                                outputColorSpaceConfig: {
                                    drawingBufferColorSpace: ny
                                }
                            }
                        }), e
                    }()
                }),
                iP = h(() => {
                    iE(), iU(), iC = class {
                        static getDataURL(e) {
                            let t;
                            if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
                            if (e instanceof HTMLCanvasElement) t = e;
                            else {
                                void 0 === iR && (iR = ix("canvas")), iR.width = e.width, iR.height = e.height;
                                let n = iR.getContext("2d");
                                e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = iR
                            }
                            return t.toDataURL("image/png")
                        }
                        static sRGBToLinear(e) {
                            if ("u" > typeof HTMLImageElement && e instanceof HTMLImageElement || "u" > typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "u" > typeof ImageBitmap && e instanceof ImageBitmap) {
                                let t = ix("canvas");
                                t.width = e.width, t.height = e.height;
                                let n = t.getContext("2d");
                                n.drawImage(e, 0, 0, e.width, e.height);
                                let i = n.getImageData(0, 0, e.width, e.height),
                                    r = i.data;
                                for (let e = 0; e < r.length; e++) r[e] = 255 * iS(r[e] / 255);
                                return n.putImageData(i, 0, 0), t
                            }
                            if (!e.data) return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e; {
                                let t = e.data.slice(0);
                                for (let e = 0; e < t.length; e++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[e] = Math.floor(255 * iS(t[e] / 255)) : t[e] = iS(t[e]);
                                return {
                                    data: t,
                                    width: e.width,
                                    height: e.height
                                }
                            }
                        }
                    }
                });

            function iL(e) {
                return "u" > typeof HTMLImageElement && e instanceof HTMLImageElement || "u" > typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "u" > typeof ImageBitmap && e instanceof ImageBitmap ? iC.getDataURL(e) : e.data ? {
                    data: Array.from(e.data),
                    width: e.width,
                    height: e.height,
                    type: e.data.constructor.name
                } : (console.warn("THREE.Texture: Unable to serialize Texture."), {})
            }
            var iD, iI, iN, iO, iF, iB, iz, iG, iH, ik, iV, iW, iX, ij = h(() => {
                    iP(), im(), iD = 0, iI = class {
                        set needsUpdate(e) {
                            !0 === e && this.version++
                        }
                        toJSON(e) {
                            let t = void 0 === e || "string" == typeof e;
                            if (!t && void 0 !== e.images[this.uuid]) return e.images[this.uuid];
                            let n = {
                                    uuid: this.uuid,
                                    url: ""
                                },
                                i = this.data;
                            if (null !== i) {
                                let e;
                                if (Array.isArray(i)) {
                                    e = [];
                                    for (let t = 0, n = i.length; t < n; t++) i[t].isDataTexture ? e.push(iL(i[t].image)) : e.push(iL(i[t]))
                                } else e = iL(i);
                                n.url = e
                            }
                            return t || (e.images[this.uuid] = n), n
                        }
                        constructor(e = null) {
                            this.isSource = !0, Object.defineProperty(this, "id", {
                                value: iD++
                            }), this.uuid = nY(), this.data = e, this.dataReady = !0, this.version = 0
                        }
                    }
                }),
                iY = h(() => {
                    nj(), nX(), im(), ig(), iv(), ij(), iN = 0, iO = class e extends nz {
                        get image() {
                            return this.source.data
                        }
                        set image(e) {
                            void 0 === e && (e = null), this.source.data = e
                        }
                        updateMatrix() {
                            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
                        }
                        clone() {
                            return new this.constructor().copy(this)
                        }
                        copy(e) {
                            return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this
                        }
                        toJSON(e) {
                            let t = void 0 === e || "string" == typeof e;
                            if (!t && void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
                            let n = {
                                metadata: {
                                    version: 4.6,
                                    type: "Texture",
                                    generator: "Texture.toJSON"
                                },
                                uuid: this.uuid,
                                name: this.name,
                                image: this.source.toJSON(e).uuid,
                                mapping: this.mapping,
                                channel: this.channel,
                                repeat: [this.repeat.x, this.repeat.y],
                                offset: [this.offset.x, this.offset.y],
                                center: [this.center.x, this.center.y],
                                rotation: this.rotation,
                                wrap: [this.wrapS, this.wrapT],
                                format: this.format,
                                internalFormat: this.internalFormat,
                                type: this.type,
                                colorSpace: this.colorSpace,
                                minFilter: this.minFilter,
                                magFilter: this.magFilter,
                                anisotropy: this.anisotropy,
                                flipY: this.flipY,
                                generateMipmaps: this.generateMipmaps,
                                premultiplyAlpha: this.premultiplyAlpha,
                                unpackAlignment: this.unpackAlignment
                            };
                            return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n
                        }
                        dispose() {
                            this.dispatchEvent({
                                type: "dispose"
                            })
                        }
                        transformUv(e) {
                            if (this.mapping !== th) return e;
                            if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
                                case tm:
                                    e.x = e.x - Math.floor(e.x);
                                    break;
                                case tg:
                                    e.x = e.x < 0 ? 0 : 1;
                                    break;
                                case tv:
                                    1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x)
                            }
                            if (e.y < 0 || e.y > 1) switch (this.wrapT) {
                                case tm:
                                    e.y = e.y - Math.floor(e.y);
                                    break;
                                case tg:
                                    e.y = e.y < 0 ? 0 : 1;
                                    break;
                                case tv:
                                    1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y)
                            }
                            return this.flipY && (e.y = 1 - e.y), e
                        }
                        set needsUpdate(e) {
                            !0 === e && (this.version++, this.source.needsUpdate = !0)
                        }
                        set needsPMREMUpdate(e) {
                            !0 === e && this.pmremVersion++
                        }
                        constructor(t = e.DEFAULT_IMAGE, n = e.DEFAULT_MAPPING, i = tg, r = tg, a = ty, s = tS, o = tB, l = tb, h = e.DEFAULT_ANISOTROPY, u = nM) {
                            super(), this.isTexture = !0, Object.defineProperty(this, "id", {
                                value: iN++
                            }), this.uuid = nY(), this.name = "", this.source = new iI(t), this.mipmaps = [], this.mapping = n, this.channel = 0, this.wrapS = i, this.wrapT = r, this.magFilter = a, this.minFilter = s, this.anisotropy = h, this.format = o, this.internalFormat = null, this.type = l, this.offset = new ic(0, 0), this.repeat = new ic(1, 1), this.center = new ic(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new id, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0
                        }
                    }, iO.DEFAULT_IMAGE = null, iO.DEFAULT_MAPPING = th, iO.DEFAULT_ANISOTROPY = 1
                }),
                iq = h(() => {
                    im(), iF = class e {
                        get width() {
                            return this.z
                        }
                        set width(e) {
                            this.z = e
                        }
                        get height() {
                            return this.w
                        }
                        set height(e) {
                            this.w = e
                        }
                        set(e, t, n, i) {
                            return this.x = e, this.y = t, this.z = n, this.w = i, this
                        }
                        setScalar(e) {
                            return this.x = e, this.y = e, this.z = e, this.w = e, this
                        }
                        setX(e) {
                            return this.x = e, this
                        }
                        setY(e) {
                            return this.y = e, this
                        }
                        setZ(e) {
                            return this.z = e, this
                        }
                        setW(e) {
                            return this.w = e, this
                        }
                        setComponent(e, t) {
                            switch (e) {
                                case 0:
                                    this.x = t;
                                    break;
                                case 1:
                                    this.y = t;
                                    break;
                                case 2:
                                    this.z = t;
                                    break;
                                case 3:
                                    this.w = t;
                                    break;
                                default:
                                    throw Error("index is out of range: " + e)
                            }
                            return this
                        }
                        getComponent(e) {
                            switch (e) {
                                case 0:
                                    return this.x;
                                case 1:
                                    return this.y;
                                case 2:
                                    return this.z;
                                case 3:
                                    return this.w;
                                default:
                                    throw Error("index is out of range: " + e)
                            }
                        }
                        clone() {
                            return new this.constructor(this.x, this.y, this.z, this.w)
                        }
                        copy(e) {
                            return this.x = e.x, this.y = e.y, this.z = e.z, this.w = void 0 !== e.w ? e.w : 1, this
                        }
                        add(e) {
                            return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this
                        }
                        addScalar(e) {
                            return this.x += e, this.y += e, this.z += e, this.w += e, this
                        }
                        addVectors(e, t) {
                            return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
                        }
                        addScaledVector(e, t) {
                            return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this
                        }
                        sub(e) {
                            return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this
                        }
                        subScalar(e) {
                            return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this
                        }
                        subVectors(e, t) {
                            return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
                        }
                        multiply(e) {
                            return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this
                        }
                        multiplyScalar(e) {
                            return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
                        }
                        applyMatrix4(e) {
                            let t = this.x,
                                n = this.y,
                                i = this.z,
                                r = this.w,
                                a = e.elements;
                            return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r, this
                        }
                        divide(e) {
                            return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this
                        }
                        divideScalar(e) {
                            return this.multiplyScalar(1 / e)
                        }
                        setAxisAngleFromQuaternion(e) {
                            this.w = 2 * Math.acos(e.w);
                            let t = Math.sqrt(1 - e.w * e.w);
                            return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
                        }
                        setAxisAngleFromRotationMatrix(e) {
                            let t, n, i, r, a = e.elements,
                                s = a[0],
                                o = a[4],
                                l = a[8],
                                h = a[1],
                                u = a[5],
                                c = a[9],
                                d = a[2],
                                p = a[6],
                                f = a[10];
                            if (.01 > Math.abs(o - h) && .01 > Math.abs(l - d) && .01 > Math.abs(c - p)) {
                                if (.1 > Math.abs(o + h) && .1 > Math.abs(l + d) && .1 > Math.abs(c + p) && .1 > Math.abs(s + u + f - 3)) return this.set(1, 0, 0, 0), this;
                                t = Math.PI;
                                let e = (s + 1) / 2,
                                    a = (u + 1) / 2,
                                    m = (f + 1) / 2,
                                    g = (o + h) / 4,
                                    v = (l + d) / 4,
                                    _ = (c + p) / 4;
                                return e > a && e > m ? e < .01 ? (n = 0, i = .707106781, r = .707106781) : (i = g / (n = Math.sqrt(e)), r = v / n) : a > m ? a < .01 ? (n = .707106781, i = 0, r = .707106781) : (n = g / (i = Math.sqrt(a)), r = _ / i) : m < .01 ? (n = .707106781, i = .707106781, r = 0) : (n = v / (r = Math.sqrt(m)), i = _ / r), this.set(n, i, r, t), this
                            }
                            let m = Math.sqrt((p - c) * (p - c) + (l - d) * (l - d) + (h - o) * (h - o));
                            return .001 > Math.abs(m) && (m = 1), this.x = (p - c) / m, this.y = (l - d) / m, this.z = (h - o) / m, this.w = Math.acos((s + u + f - 1) / 2), this
                        }
                        setFromMatrixPosition(e) {
                            let t = e.elements;
                            return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this
                        }
                        min(e) {
                            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this
                        }
                        max(e) {
                            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this
                        }
                        clamp(e, t) {
                            return this.x = nq(this.x, e.x, t.x), this.y = nq(this.y, e.y, t.y), this.z = nq(this.z, e.z, t.z), this.w = nq(this.w, e.w, t.w), this
                        }
                        clampScalar(e, t) {
                            return this.x = nq(this.x, e, t), this.y = nq(this.y, e, t), this.z = nq(this.z, e, t), this.w = nq(this.w, e, t), this
                        }
                        clampLength(e, t) {
                            let n = this.length();
                            return this.divideScalar(n || 1).multiplyScalar(nq(n, e, t))
                        }
                        floor() {
                            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
                        }
                        ceil() {
                            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
                        }
                        round() {
                            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
                        }
                        roundToZero() {
                            return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this
                        }
                        negate() {
                            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
                        }
                        dot(e) {
                            return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
                        }
                        lengthSq() {
                            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
                        }
                        length() {
                            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
                        }
                        manhattanLength() {
                            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
                        }
                        normalize() {
                            return this.divideScalar(this.length() || 1)
                        }
                        setLength(e) {
                            return this.normalize().multiplyScalar(e)
                        }
                        lerp(e, t) {
                            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
                        }
                        lerpVectors(e, t, n) {
                            return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this
                        }
                        equals(e) {
                            return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
                        }
                        fromArray(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this
                        }
                        toArray() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e
                        }
                        fromBufferAttribute(e, t) {
                            return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this
                        }
                        random() {
                            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this
                        }*[Symbol.iterator]() {
                            yield this.x, yield this.y, yield this.z, yield this.w
                        }
                        constructor(t = 0, n = 0, i = 0, r = 1) {
                            e.prototype.isVector4 = !0, this.x = t, this.y = n, this.z = i, this.w = r
                        }
                    }
                }),
                iK = h(() => {
                    nj(), iY(), nX(), iq(), ij(), iB = class extends nz {
                        get texture() {
                            return this.textures[0]
                        }
                        set texture(e) {
                            this.textures[0] = e
                        }
                        set depthTexture(e) {
                            null !== this._depthTexture && (this._depthTexture.renderTarget = null), null !== e && (e.renderTarget = this), this._depthTexture = e
                        }
                        get depthTexture() {
                            return this._depthTexture
                        }
                        setSize(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                            if (this.width !== e || this.height !== t || this.depth !== n) {
                                this.width = e, this.height = t, this.depth = n;
                                for (let i = 0, r = this.textures.length; i < r; i++) this.textures[i].image.width = e, this.textures[i].image.height = t, this.textures[i].image.depth = n;
                                this.dispose()
                            }
                            this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t)
                        }
                        clone() {
                            return new this.constructor().copy(this)
                        }
                        copy(e) {
                            this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
                            for (let t = 0, n = e.textures.length; t < n; t++) this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
                            let t = Object.assign({}, e.texture.image);
                            return this.texture.source = new iI(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, null !== e.depthTexture && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this
                        }
                        dispose() {
                            this.dispatchEvent({
                                type: "dispose"
                            })
                        }
                        constructor(e = 1, t = 1, n = {}) {
                            super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new iF(0, 0, e, t), this.scissorTest = !1, this.viewport = new iF(0, 0, e, t), n = Object.assign({
                                generateMipmaps: !1,
                                internalFormat: null,
                                minFilter: ty,
                                depthBuffer: !0,
                                stencilBuffer: !1,
                                resolveDepthBuffer: !0,
                                resolveStencilBuffer: !0,
                                depthTexture: null,
                                samples: 0,
                                count: 1
                            }, n);
                            let i = new iO({
                                width: e,
                                height: t,
                                depth: 1
                            }, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
                            i.flipY = !1, i.generateMipmaps = n.generateMipmaps, i.internalFormat = n.internalFormat, this.textures = [];
                            let r = n.count;
                            for (let e = 0; e < r; e++) this.textures[e] = i.clone(), this.textures[e].isRenderTargetTexture = !0, this.textures[e].renderTarget = this;
                            this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples
                        }
                    }
                }),
                iZ = h(() => {
                    iK(), iz = class extends iB {
                        constructor(e = 1, t = 1, n = {}) {
                            super(e, t, n), this.isWebGLRenderTarget = !0
                        }
                    }
                }),
                iJ = h(() => {
                    iY(), nX(), iG = class extends iO {
                        addLayerUpdate(e) {
                            this.layerUpdates.add(e)
                        }
                        clearLayerUpdates() {
                            this.layerUpdates.clear()
                        }
                        constructor(e = null, t = 1, n = 1, i = 1) {
                            super(null), this.isDataArrayTexture = !0, this.image = {
                                data: e,
                                width: t,
                                height: n,
                                depth: i
                            }, this.magFilter = t_, this.minFilter = t_, this.wrapR = tg, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = new Set
                        }
                    }
                }),
                iQ = h(() => {
                    iY(), nX(), iH = class extends iO {
                        constructor(e = null, t = 1, n = 1, i = 1) {
                            super(null), this.isData3DTexture = !0, this.image = {
                                data: e,
                                width: t,
                                height: n,
                                depth: i
                            }, this.magFilter = t_, this.minFilter = t_, this.wrapR = tg, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
                        }
                    }
                }),
                i$ = h(() => {
                    im(), ik = class {
                        static slerpFlat(e, t, n, i, r, a, s) {
                            let o = n[i + 0],
                                l = n[i + 1],
                                h = n[i + 2],
                                u = n[i + 3],
                                c = r[a + 0],
                                d = r[a + 1],
                                p = r[a + 2],
                                f = r[a + 3];
                            if (0 === s) {
                                e[t + 0] = o, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
                                return
                            }
                            if (1 === s) {
                                e[t + 0] = c, e[t + 1] = d, e[t + 2] = p, e[t + 3] = f;
                                return
                            }
                            if (u !== f || o !== c || l !== d || h !== p) {
                                let e = 1 - s,
                                    t = o * c + l * d + h * p + u * f,
                                    n = t >= 0 ? 1 : -1,
                                    i = 1 - t * t;
                                if (i > Number.EPSILON) {
                                    let r = Math.sqrt(i),
                                        a = Math.atan2(r, t * n);
                                    e = Math.sin(e * a) / r, s = Math.sin(s * a) / r
                                }
                                let r = s * n;
                                if (o = o * e + c * r, l = l * e + d * r, h = h * e + p * r, u = u * e + f * r, e === 1 - s) {
                                    let e = 1 / Math.sqrt(o * o + l * l + h * h + u * u);
                                    o *= e, l *= e, h *= e, u *= e
                                }
                            }
                            e[t] = o, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u
                        }
                        static multiplyQuaternionsFlat(e, t, n, i, r, a) {
                            let s = n[i],
                                o = n[i + 1],
                                l = n[i + 2],
                                h = n[i + 3],
                                u = r[a],
                                c = r[a + 1],
                                d = r[a + 2],
                                p = r[a + 3];
                            return e[t] = s * p + h * u + o * d - l * c, e[t + 1] = o * p + h * c + l * u - s * d, e[t + 2] = l * p + h * d + s * c - o * u, e[t + 3] = h * p - s * u - o * c - l * d, e
                        }
                        get x() {
                            return this._x
                        }
                        set x(e) {
                            this._x = e, this._onChangeCallback()
                        }
                        get y() {
                            return this._y
                        }
                        set y(e) {
                            this._y = e, this._onChangeCallback()
                        }
                        get z() {
                            return this._z
                        }
                        set z(e) {
                            this._z = e, this._onChangeCallback()
                        }
                        get w() {
                            return this._w
                        }
                        set w(e) {
                            this._w = e, this._onChangeCallback()
                        }
                        set(e, t, n, i) {
                            return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this
                        }
                        clone() {
                            return new this.constructor(this._x, this._y, this._z, this._w)
                        }
                        copy(e) {
                            return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this
                        }
                        setFromEuler(e) {
                            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                                n = e._x,
                                i = e._y,
                                r = e._z,
                                a = e._order,
                                s = Math.cos,
                                o = Math.sin,
                                l = s(n / 2),
                                h = s(i / 2),
                                u = s(r / 2),
                                c = o(n / 2),
                                d = o(i / 2),
                                p = o(r / 2);
                            switch (a) {
                                case "XYZ":
                                    this._x = c * h * u + l * d * p, this._y = l * d * u - c * h * p, this._z = l * h * p + c * d * u, this._w = l * h * u - c * d * p;
                                    break;
                                case "YXZ":
                                    this._x = c * h * u + l * d * p, this._y = l * d * u - c * h * p, this._z = l * h * p - c * d * u, this._w = l * h * u + c * d * p;
                                    break;
                                case "ZXY":
                                    this._x = c * h * u - l * d * p, this._y = l * d * u + c * h * p, this._z = l * h * p + c * d * u, this._w = l * h * u - c * d * p;
                                    break;
                                case "ZYX":
                                    this._x = c * h * u - l * d * p, this._y = l * d * u + c * h * p, this._z = l * h * p - c * d * u, this._w = l * h * u + c * d * p;
                                    break;
                                case "YZX":
                                    this._x = c * h * u + l * d * p, this._y = l * d * u + c * h * p, this._z = l * h * p - c * d * u, this._w = l * h * u - c * d * p;
                                    break;
                                case "XZY":
                                    this._x = c * h * u - l * d * p, this._y = l * d * u - c * h * p, this._z = l * h * p + c * d * u, this._w = l * h * u + c * d * p;
                                    break;
                                default:
                                    console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
                            }
                            return !0 === t && this._onChangeCallback(), this
                        }
                        setFromAxisAngle(e, t) {
                            let n = t / 2,
                                i = Math.sin(n);
                            return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this
                        }
                        setFromRotationMatrix(e) {
                            let t = e.elements,
                                n = t[0],
                                i = t[4],
                                r = t[8],
                                a = t[1],
                                s = t[5],
                                o = t[9],
                                l = t[2],
                                h = t[6],
                                u = t[10],
                                c = n + s + u;
                            if (c > 0) {
                                let e = .5 / Math.sqrt(c + 1);
                                this._w = .25 / e, this._x = (h - o) * e, this._y = (r - l) * e, this._z = (a - i) * e
                            } else if (n > s && n > u) {
                                let e = 2 * Math.sqrt(1 + n - s - u);
                                this._w = (h - o) / e, this._x = .25 * e, this._y = (i + a) / e, this._z = (r + l) / e
                            } else if (s > u) {
                                let e = 2 * Math.sqrt(1 + s - n - u);
                                this._w = (r - l) / e, this._x = (i + a) / e, this._y = .25 * e, this._z = (o + h) / e
                            } else {
                                let e = 2 * Math.sqrt(1 + u - n - s);
                                this._w = (a - i) / e, this._x = (r + l) / e, this._y = (o + h) / e, this._z = .25 * e
                            }
                            return this._onChangeCallback(), this
                        }
                        setFromUnitVectors(e, t) {
                            let n = e.dot(t) + 1;
                            return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0) : (this._x = 0, this._y = -e.z, this._z = e.y)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x), this._w = n, this.normalize()
                        }
                        angleTo(e) {
                            return 2 * Math.acos(Math.abs(nq(this.dot(e), -1, 1)))
                        }
                        rotateTowards(e, t) {
                            let n = this.angleTo(e);
                            if (0 === n) return this;
                            let i = Math.min(1, t / n);
                            return this.slerp(e, i), this
                        }
                        identity() {
                            return this.set(0, 0, 0, 1)
                        }
                        invert() {
                            return this.conjugate()
                        }
                        conjugate() {
                            return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this
                        }
                        dot(e) {
                            return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
                        }
                        lengthSq() {
                            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
                        }
                        length() {
                            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
                        }
                        normalize() {
                            let e = this.length();
                            return 0 === e ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this
                        }
                        multiply(e) {
                            return this.multiplyQuaternions(this, e)
                        }
                        premultiply(e) {
                            return this.multiplyQuaternions(e, this)
                        }
                        multiplyQuaternions(e, t) {
                            let n = e._x,
                                i = e._y,
                                r = e._z,
                                a = e._w,
                                s = t._x,
                                o = t._y,
                                l = t._z,
                                h = t._w;
                            return this._x = n * h + a * s + i * l - r * o, this._y = i * h + a * o + r * s - n * l, this._z = r * h + a * l + n * o - i * s, this._w = a * h - n * s - i * o - r * l, this._onChangeCallback(), this
                        }
                        slerp(e, t) {
                            if (0 === t) return this;
                            if (1 === t) return this.copy(e);
                            let n = this._x,
                                i = this._y,
                                r = this._z,
                                a = this._w,
                                s = a * e._w + n * e._x + i * e._y + r * e._z;
                            if (s < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, s = -s) : this.copy(e), s >= 1) return this._w = a, this._x = n, this._y = i, this._z = r, this;
                            let o = 1 - s * s;
                            if (o <= Number.EPSILON) {
                                let e = 1 - t;
                                return this._w = e * a + t * this._w, this._x = e * n + t * this._x, this._y = e * i + t * this._y, this._z = e * r + t * this._z, this.normalize(), this
                            }
                            let l = Math.sqrt(o),
                                h = Math.atan2(l, s),
                                u = Math.sin((1 - t) * h) / l,
                                c = Math.sin(t * h) / l;
                            return this._w = a * u + this._w * c, this._x = n * u + this._x * c, this._y = i * u + this._y * c, this._z = r * u + this._z * c, this._onChangeCallback(), this
                        }
                        slerpQuaternions(e, t, n) {
                            return this.copy(e).slerp(t, n)
                        }
                        random() {
                            let e = 2 * Math.PI * Math.random(),
                                t = 2 * Math.PI * Math.random(),
                                n = Math.random(),
                                i = Math.sqrt(1 - n),
                                r = Math.sqrt(n);
                            return this.set(i * Math.sin(e), i * Math.cos(e), r * Math.sin(t), r * Math.cos(t))
                        }
                        equals(e) {
                            return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
                        }
                        fromArray(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this
                        }
                        toArray() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e
                        }
                        fromBufferAttribute(e, t) {
                            return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this
                        }
                        toJSON() {
                            return this.toArray()
                        }
                        _onChange(e) {
                            return this._onChangeCallback = e, this
                        }
                        _onChangeCallback() {}*[Symbol.iterator]() {
                            yield this._x, yield this._y, yield this._z, yield this._w
                        }
                        constructor(e = 0, t = 0, n = 0, i = 1) {
                            this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i
                        }
                    }
                }),
                i0 = h(() => {
                    im(), i$(), iW = new(iV = class e {
                        set(e, t, n) {
                            return void 0 === n && (n = this.z), this.x = e, this.y = t, this.z = n, this
                        }
                        setScalar(e) {
                            return this.x = e, this.y = e, this.z = e, this
                        }
                        setX(e) {
                            return this.x = e, this
                        }
                        setY(e) {
                            return this.y = e, this
                        }
                        setZ(e) {
                            return this.z = e, this
                        }
                        setComponent(e, t) {
                            switch (e) {
                                case 0:
                                    this.x = t;
                                    break;
                                case 1:
                                    this.y = t;
                                    break;
                                case 2:
                                    this.z = t;
                                    break;
                                default:
                                    throw Error("index is out of range: " + e)
                            }
                            return this
                        }
                        getComponent(e) {
                            switch (e) {
                                case 0:
                                    return this.x;
                                case 1:
                                    return this.y;
                                case 2:
                                    return this.z;
                                default:
                                    throw Error("index is out of range: " + e)
                            }
                        }
                        clone() {
                            return new this.constructor(this.x, this.y, this.z)
                        }
                        copy(e) {
                            return this.x = e.x, this.y = e.y, this.z = e.z, this
                        }
                        add(e) {
                            return this.x += e.x, this.y += e.y, this.z += e.z, this
                        }
                        addScalar(e) {
                            return this.x += e, this.y += e, this.z += e, this
                        }
                        addVectors(e, t) {
                            return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
                        }
                        addScaledVector(e, t) {
                            return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this
                        }
                        sub(e) {
                            return this.x -= e.x, this.y -= e.y, this.z -= e.z, this
                        }
                        subScalar(e) {
                            return this.x -= e, this.y -= e, this.z -= e, this
                        }
                        subVectors(e, t) {
                            return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
                        }
                        multiply(e) {
                            return this.x *= e.x, this.y *= e.y, this.z *= e.z, this
                        }
                        multiplyScalar(e) {
                            return this.x *= e, this.y *= e, this.z *= e, this
                        }
                        multiplyVectors(e, t) {
                            return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
                        }
                        applyEuler(e) {
                            return this.applyQuaternion(iX.setFromEuler(e))
                        }
                        applyAxisAngle(e, t) {
                            return this.applyQuaternion(iX.setFromAxisAngle(e, t))
                        }
                        applyMatrix3(e) {
                            let t = this.x,
                                n = this.y,
                                i = this.z,
                                r = e.elements;
                            return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this
                        }
                        applyNormalMatrix(e) {
                            return this.applyMatrix3(e).normalize()
                        }
                        applyMatrix4(e) {
                            let t = this.x,
                                n = this.y,
                                i = this.z,
                                r = e.elements,
                                a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
                            return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a, this
                        }
                        applyQuaternion(e) {
                            let t = this.x,
                                n = this.y,
                                i = this.z,
                                r = e.x,
                                a = e.y,
                                s = e.z,
                                o = e.w,
                                l = 2 * (a * i - s * n),
                                h = 2 * (s * t - r * i),
                                u = 2 * (r * n - a * t);
                            return this.x = t + o * l + a * u - s * h, this.y = n + o * h + s * l - r * u, this.z = i + o * u + r * h - a * l, this
                        }
                        project(e) {
                            return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
                        }
                        unproject(e) {
                            return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
                        }
                        transformDirection(e) {
                            let t = this.x,
                                n = this.y,
                                i = this.z,
                                r = e.elements;
                            return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize()
                        }
                        divide(e) {
                            return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
                        }
                        divideScalar(e) {
                            return this.multiplyScalar(1 / e)
                        }
                        min(e) {
                            return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this
                        }
                        max(e) {
                            return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this
                        }
                        clamp(e, t) {
                            return this.x = nq(this.x, e.x, t.x), this.y = nq(this.y, e.y, t.y), this.z = nq(this.z, e.z, t.z), this
                        }
                        clampScalar(e, t) {
                            return this.x = nq(this.x, e, t), this.y = nq(this.y, e, t), this.z = nq(this.z, e, t), this
                        }
                        clampLength(e, t) {
                            let n = this.length();
                            return this.divideScalar(n || 1).multiplyScalar(nq(n, e, t))
                        }
                        floor() {
                            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
                        }
                        ceil() {
                            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
                        }
                        round() {
                            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
                        }
                        roundToZero() {
                            return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this
                        }
                        negate() {
                            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
                        }
                        dot(e) {
                            return this.x * e.x + this.y * e.y + this.z * e.z
                        }
                        lengthSq() {
                            return this.x * this.x + this.y * this.y + this.z * this.z
                        }
                        length() {
                            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
                        }
                        manhattanLength() {
                            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
                        }
                        normalize() {
                            return this.divideScalar(this.length() || 1)
                        }
                        setLength(e) {
                            return this.normalize().multiplyScalar(e)
                        }
                        lerp(e, t) {
                            return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
                        }
                        lerpVectors(e, t, n) {
                            return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this
                        }
                        cross(e) {
                            return this.crossVectors(this, e)
                        }
                        crossVectors(e, t) {
                            let n = e.x,
                                i = e.y,
                                r = e.z,
                                a = t.x,
                                s = t.y,
                                o = t.z;
                            return this.x = i * o - r * s, this.y = r * a - n * o, this.z = n * s - i * a, this
                        }
                        projectOnVector(e) {
                            let t = e.lengthSq();
                            if (0 === t) return this.set(0, 0, 0);
                            let n = e.dot(this) / t;
                            return this.copy(e).multiplyScalar(n)
                        }
                        projectOnPlane(e) {
                            return iW.copy(this).projectOnVector(e), this.sub(iW)
                        }
                        reflect(e) {
                            return this.sub(iW.copy(e).multiplyScalar(2 * this.dot(e)))
                        }
                        angleTo(e) {
                            let t = Math.sqrt(this.lengthSq() * e.lengthSq());
                            return 0 === t ? Math.PI / 2 : Math.acos(nq(this.dot(e) / t, -1, 1))
                        }
                        distanceTo(e) {
                            return Math.sqrt(this.distanceToSquared(e))
                        }
                        distanceToSquared(e) {
                            let t = this.x - e.x,
                                n = this.y - e.y,
                                i = this.z - e.z;
                            return t * t + n * n + i * i
                        }
                        manhattanDistanceTo(e) {
                            return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
                        }
                        setFromSpherical(e) {
                            return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
                        }
                        setFromSphericalCoords(e, t, n) {
                            let i = Math.sin(t) * e;
                            return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this
                        }
                        setFromCylindrical(e) {
                            return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
                        }
                        setFromCylindricalCoords(e, t, n) {
                            return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this
                        }
                        setFromMatrixPosition(e) {
                            let t = e.elements;
                            return this.x = t[12], this.y = t[13], this.z = t[14], this
                        }
                        setFromMatrixScale(e) {
                            let t = this.setFromMatrixColumn(e, 0).length(),
                                n = this.setFromMatrixColumn(e, 1).length(),
                                i = this.setFromMatrixColumn(e, 2).length();
                            return this.x = t, this.y = n, this.z = i, this
                        }
                        setFromMatrixColumn(e, t) {
                            return this.fromArray(e.elements, 4 * t)
                        }
                        setFromMatrix3Column(e, t) {
                            return this.fromArray(e.elements, 3 * t)
                        }
                        setFromEuler(e) {
                            return this.x = e._x, this.y = e._y, this.z = e._z, this
                        }
                        setFromColor(e) {
                            return this.x = e.r, this.y = e.g, this.z = e.b, this
                        }
                        equals(e) {
                            return e.x === this.x && e.y === this.y && e.z === this.z
                        }
                        fromArray(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this
                        }
                        toArray() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e
                        }
                        fromBufferAttribute(e, t) {
                            return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this
                        }
                        random() {
                            return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this
                        }
                        randomDirection() {
                            let e = Math.random() * Math.PI * 2,
                                t = 2 * Math.random() - 1,
                                n = Math.sqrt(1 - t * t);
                            return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this
                        }*[Symbol.iterator]() {
                            yield this.x, yield this.y, yield this.z
                        }
                        constructor(t = 0, n = 0, i = 0) {
                            e.prototype.isVector3 = !0, this.x = t, this.y = n, this.z = i
                        }
                    }), iX = new ik
                });

            function i1(e, t, n, i, r) {
                for (let a = 0, s = e.length - 3; a <= s; a += 3) {
                    ra.fromArray(e, a);
                    let s = r.x * Math.abs(ra.x) + r.y * Math.abs(ra.y) + r.z * Math.abs(ra.z),
                        o = t.dot(ra),
                        l = n.dot(ra),
                        h = i.dot(ra);
                    if (Math.max(-Math.max(o, l, h), Math.min(o, l, h)) > s) return !1
                }
                return !0
            }
            var i2, i3, i4, i5, i6, i8, i9, i7, re, rt, rn, ri, rr, ra, rs, ro, rl, rh, ru, rc, rd, rp, rf, rm, rg, rv, r_, rx, rM, ry, rE, rS, rb, rT, rA, rw, rR, rC, rU, rP, rL, rD, rI, rN, rO, rF, rB, rz, rG, rH, rk, rV, rW, rX, rj, rY, rq, rK, rZ, rJ, rQ, r$, r0, r1, r2, r3, r4, r5, r6 = h(() => {
                    i0(), i2 = class {
                        set(e, t) {
                            return this.min.copy(e), this.max.copy(t), this
                        }
                        setFromArray(e) {
                            this.makeEmpty();
                            for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(i4.fromArray(e, t));
                            return this
                        }
                        setFromBufferAttribute(e) {
                            this.makeEmpty();
                            for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(i4.fromBufferAttribute(e, t));
                            return this
                        }
                        setFromPoints(e) {
                            this.makeEmpty();
                            for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
                            return this
                        }
                        setFromCenterAndSize(e, t) {
                            let n = i4.copy(t).multiplyScalar(.5);
                            return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
                        }
                        setFromObject(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return this.makeEmpty(), this.expandByObject(e, t)
                        }
                        clone() {
                            return new this.constructor().copy(this)
                        }
                        copy(e) {
                            return this.min.copy(e.min), this.max.copy(e.max), this
                        }
                        makeEmpty() {
                            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
                        }
                        isEmpty() {
                            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
                        }
                        getCenter(e) {
                            return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
                        }
                        getSize(e) {
                            return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
                        }
                        expandByPoint(e) {
                            return this.min.min(e), this.max.max(e), this
                        }
                        expandByVector(e) {
                            return this.min.sub(e), this.max.add(e), this
                        }
                        expandByScalar(e) {
                            return this.min.addScalar(-e), this.max.addScalar(e), this
                        }
                        expandByObject(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            e.updateWorldMatrix(!1, !1);
                            let n = e.geometry;
                            if (void 0 !== n) {
                                let i = n.getAttribute("position");
                                if (!0 === t && void 0 !== i && !0 !== e.isInstancedMesh)
                                    for (let t = 0, n = i.count; t < n; t++) !0 === e.isMesh ? e.getVertexPosition(t, i4) : i4.fromBufferAttribute(i, t), i4.applyMatrix4(e.matrixWorld), this.expandByPoint(i4);
                                else void 0 !== e.boundingBox ? (null === e.boundingBox && e.computeBoundingBox(), i5.copy(e.boundingBox)) : (null === n.boundingBox && n.computeBoundingBox(), i5.copy(n.boundingBox)), i5.applyMatrix4(e.matrixWorld), this.union(i5)
                            }
                            let i = e.children;
                            for (let e = 0, n = i.length; e < n; e++) this.expandByObject(i[e], t);
                            return this
                        }
                        containsPoint(e) {
                            return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z
                        }
                        containsBox(e) {
                            return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
                        }
                        getParameter(e, t) {
                            return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
                        }
                        intersectsBox(e) {
                            return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z
                        }
                        intersectsSphere(e) {
                            return this.clampPoint(e.center, i4), i4.distanceToSquared(e.center) <= e.radius * e.radius
                        }
                        intersectsPlane(e) {
                            let t, n;
                            return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant
                        }
                        intersectsTriangle(e) {
                            if (this.isEmpty()) return !1;
                            this.getCenter(rn), ri.subVectors(this.max, rn), i6.subVectors(e.a, rn), i8.subVectors(e.b, rn), i9.subVectors(e.c, rn), i7.subVectors(i8, i6), re.subVectors(i9, i8), rt.subVectors(i6, i9);
                            let t = [0, -i7.z, i7.y, 0, -re.z, re.y, 0, -rt.z, rt.y, i7.z, 0, -i7.x, re.z, 0, -re.x, rt.z, 0, -rt.x, -i7.y, i7.x, 0, -re.y, re.x, 0, -rt.y, rt.x, 0];
                            return !!(i1(t, i6, i8, i9, ri) && i1(t = [1, 0, 0, 0, 1, 0, 0, 0, 1], i6, i8, i9, ri)) && (rr.crossVectors(i7, re), i1(t = [rr.x, rr.y, rr.z], i6, i8, i9, ri))
                        }
                        clampPoint(e, t) {
                            return t.copy(e).clamp(this.min, this.max)
                        }
                        distanceToPoint(e) {
                            return this.clampPoint(e, i4).distanceTo(e)
                        }
                        getBoundingSphere(e) {
                            return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = .5 * this.getSize(i4).length()), e
                        }
                        intersect(e) {
                            return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this
                        }
                        union(e) {
                            return this.min.min(e.min), this.max.max(e.max), this
                        }
                        applyMatrix4(e) {
                            return this.isEmpty() || (i3[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), i3[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), i3[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), i3[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), i3[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), i3[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), i3[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), i3[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(i3)), this
                        }
                        translate(e) {
                            return this.min.add(e), this.max.add(e), this
                        }
                        equals(e) {
                            return e.min.equals(this.min) && e.max.equals(this.max)
                        }
                        constructor(e = new iV(1 / 0, 1 / 0, 1 / 0), t = new iV(-1 / 0, -1 / 0, -1 / 0)) {
                            this.isBox3 = !0, this.min = e, this.max = t
                        }
                    }, i3 = [new iV, new iV, new iV, new iV, new iV, new iV, new iV, new iV], i4 = new iV, i5 = new i2, i6 = new iV, i8 = new iV, i9 = new iV, i7 = new iV, re = new iV, rt = new iV, rn = new iV, ri = new iV, rr = new iV, ra = new iV
                }),
                r8 = h(() => {
                    r6(), i0(), rs = new i2, ro = new iV, rl = new iV, rh = class {
                        set(e, t) {
                            return this.center.copy(e), this.radius = t, this
                        }
                        setFromPoints(e, t) {
                            let n = this.center;
                            void 0 !== t ? n.copy(t) : rs.setFromPoints(e).getCenter(n);
                            let i = 0;
                            for (let t = 0, r = e.length; t < r; t++) i = Math.max(i, n.distanceToSquared(e[t]));
                            return this.radius = Math.sqrt(i), this
                        }
                        copy(e) {
                            return this.center.copy(e.center), this.radius = e.radius, this
                        }
                        isEmpty() {
                            return this.radius < 0
                        }
                        makeEmpty() {
                            return this.center.set(0, 0, 0), this.radius = -1, this
                        }
                        containsPoint(e) {
                            return e.distanceToSquared(this.center) <= this.radius * this.radius
                        }
                        distanceToPoint(e) {
                            return e.distanceTo(this.center) - this.radius
                        }
                        intersectsSphere(e) {
                            let t = this.radius + e.radius;
                            return e.center.distanceToSquared(this.center) <= t * t
                        }
                        intersectsBox(e) {
                            return e.intersectsSphere(this)
                        }
                        intersectsPlane(e) {
                            return Math.abs(e.distanceToPoint(this.center)) <= this.radius
                        }
                        clampPoint(e, t) {
                            let n = this.center.distanceToSquared(e);
                            return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t
                        }
                        getBoundingBox(e) {
                            return this.isEmpty() ? e.makeEmpty() : (e.set(this.center, this.center), e.expandByScalar(this.radius)), e
                        }
                        applyMatrix4(e) {
                            return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
                        }
                        translate(e) {
                            return this.center.add(e), this
                        }
                        expandByPoint(e) {
                            if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
                            ro.subVectors(e, this.center);
                            let t = ro.lengthSq();
                            if (t > this.radius * this.radius) {
                                let e = Math.sqrt(t),
                                    n = (e - this.radius) * .5;
                                this.center.addScaledVector(ro, n / e), this.radius += n
                            }
                            return this
                        }
                        union(e) {
                            return e.isEmpty() || (this.isEmpty() ? this.copy(e) : !0 === this.center.equals(e.center) ? this.radius = Math.max(this.radius, e.radius) : (rl.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ro.copy(e.center).add(rl)), this.expandByPoint(ro.copy(e.center).sub(rl)))), this
                        }
                        equals(e) {
                            return e.center.equals(this.center) && e.radius === this.radius
                        }
                        clone() {
                            return new this.constructor().copy(this)
                        }
                        constructor(e = new iV, t = -1) {
                            this.isSphere = !0, this.center = e, this.radius = t
                        }
                    }
                }),
                r9 = h(() => {
                    i0(), ru = new iV, rc = new iV, rd = new iV, rp = new iV, rf = new iV, rm = new iV, rg = new iV, rv = class {
                        set(e, t) {
                            return this.origin.copy(e), this.direction.copy(t), this
                        }
                        copy(e) {
                            return this.origin.copy(e.origin), this.direction.copy(e.direction), this
                        }
                        at(e, t) {
                            return t.copy(this.origin).addScaledVector(this.direction, e)
                        }
                        lookAt(e) {
                            return this.direction.copy(e).sub(this.origin).normalize(), this
                        }
                        recast(e) {
                            return this.origin.copy(this.at(e, ru)), this
                        }
                        closestPointToPoint(e, t) {
                            t.subVectors(e, this.origin);
                            let n = t.dot(this.direction);
                            return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n)
                        }
                        distanceToPoint(e) {
                            return Math.sqrt(this.distanceSqToPoint(e))
                        }
                        distanceSqToPoint(e) {
                            let t = ru.subVectors(e, this.origin).dot(this.direction);
                            return t < 0 ? this.origin.distanceToSquared(e) : (ru.copy(this.origin).addScaledVector(this.direction, t), ru.distanceToSquared(e))
                        }
                        distanceSqToSegment(e, t, n, i) {
                            rc.copy(e).add(t).multiplyScalar(.5), rd.copy(t).sub(e).normalize(), rp.copy(this.origin).sub(rc);
                            let r = .5 * e.distanceTo(t),
                                a = -this.direction.dot(rd),
                                s = rp.dot(this.direction),
                                o = -rp.dot(rd),
                                l = rp.lengthSq(),
                                h = Math.abs(1 - a * a),
                                u, c, d, p;
                            if (h > 0) {
                                if (u = a * o - s, c = a * s - o, p = r * h, u >= 0) {
                                    if (c >= -p) {
                                        if (c <= p) {
                                            let e = 1 / h;
                                            u *= e, c *= e, d = u * (u + a * c + 2 * s) + c * (a * u + c + 2 * o) + l
                                        } else d = -(u = Math.max(0, -(a * (c = r) + s))) * u + c * (c + 2 * o) + l
                                    } else d = -(u = Math.max(0, -(a * (c = -r) + s))) * u + c * (c + 2 * o) + l
                                } else c <= -p ? (c = (u = Math.max(0, -(-a * r + s))) > 0 ? -r : Math.min(Math.max(-r, -o), r), d = -u * u + c * (c + 2 * o) + l) : c <= p ? (u = 0, d = (c = Math.min(Math.max(-r, -o), r)) * (c + 2 * o) + l) : (c = (u = Math.max(0, -(a * r + s))) > 0 ? r : Math.min(Math.max(-r, -o), r), d = -u * u + c * (c + 2 * o) + l)
                            } else c = a > 0 ? -r : r, d = -(u = Math.max(0, -(a * c + s))) * u + c * (c + 2 * o) + l;
                            return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(rc).addScaledVector(rd, c), d
                        }
                        intersectSphere(e, t) {
                            ru.subVectors(e.center, this.origin);
                            let n = ru.dot(this.direction),
                                i = ru.dot(ru) - n * n,
                                r = e.radius * e.radius;
                            if (i > r) return null;
                            let a = Math.sqrt(r - i),
                                s = n - a,
                                o = n + a;
                            return o < 0 ? null : s < 0 ? this.at(o, t) : this.at(s, t)
                        }
                        intersectsSphere(e) {
                            return this.distanceSqToPoint(e.center) <= e.radius * e.radius
                        }
                        distanceToPlane(e) {
                            let t = e.normal.dot(this.direction);
                            if (0 === t) return 0 === e.distanceToPoint(this.origin) ? 0 : null;
                            let n = -(this.origin.dot(e.normal) + e.constant) / t;
                            return n >= 0 ? n : null
                        }
                        intersectPlane(e, t) {
                            let n = this.distanceToPlane(e);
                            return null === n ? null : this.at(n, t)
                        }
                        intersectsPlane(e) {
                            let t = e.distanceToPoint(this.origin);
                            return 0 === t || e.normal.dot(this.direction) * t < 0
                        }
                        intersectBox(e, t) {
                            let n, i, r, a, s, o, l = 1 / this.direction.x,
                                h = 1 / this.direction.y,
                                u = 1 / this.direction.z,
                                c = this.origin;
                            return l >= 0 ? (n = (e.min.x - c.x) * l, i = (e.max.x - c.x) * l) : (n = (e.max.x - c.x) * l, i = (e.min.x - c.x) * l), h >= 0 ? (r = (e.min.y - c.y) * h, a = (e.max.y - c.y) * h) : (r = (e.max.y - c.y) * h, a = (e.min.y - c.y) * h), n > a || r > i || ((r > n || isNaN(n)) && (n = r), (a < i || isNaN(i)) && (i = a), u >= 0 ? (s = (e.min.z - c.z) * u, o = (e.max.z - c.z) * u) : (s = (e.max.z - c.z) * u, o = (e.min.z - c.z) * u), n > o || s > i) || ((s > n || n != n) && (n = s), (o < i || i != i) && (i = o), i < 0) ? null : this.at(n >= 0 ? n : i, t)
                        }
                        intersectsBox(e) {
                            return null !== this.intersectBox(e, ru)
                        }
                        intersectTriangle(e, t, n, i, r) {
                            rf.subVectors(t, e), rm.subVectors(n, e), rg.crossVectors(rf, rm);
                            let a = this.direction.dot(rg),
                                s;
                            if (a > 0) {
                                if (i) return null;
                                s = 1
                            } else {
                                if (!(a < 0)) return null;
                                s = -1, a = -a
                            }
                            rp.subVectors(this.origin, e);
                            let o = s * this.direction.dot(rm.crossVectors(rp, rm));
                            if (o < 0) return null;
                            let l = s * this.direction.dot(rf.cross(rp));
                            if (l < 0 || o + l > a) return null;
                            let h = -s * rp.dot(rg);
                            return h < 0 ? null : this.at(h / a, r)
                        }
                        applyMatrix4(e) {
                            return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
                        }
                        equals(e) {
                            return e.origin.equals(this.origin) && e.direction.equals(this.direction)
                        }
                        clone() {
                            return new this.constructor().copy(this)
                        }
                        constructor(e = new iV, t = new iV(0, 0, -1)) {
                            this.origin = e, this.direction = t
                        }
                    }
                }),
                r7 = h(() => {
                    nX(), i0(), r_ = class e {
                        set(e, t, n, i, r, a, s, o, l, h, u, c, d, p, f, m) {
                            let g = this.elements;
                            return g[0] = e, g[4] = t, g[8] = n, g[12] = i, g[1] = r, g[5] = a, g[9] = s, g[13] = o, g[2] = l, g[6] = h, g[10] = u, g[14] = c, g[3] = d, g[7] = p, g[11] = f, g[15] = m, this
                        }
                        identity() {
                            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
                        }
                        clone() {
                            return new e().fromArray(this.elements)
                        }
                        copy(e) {
                            let t = this.elements,
                                n = e.elements;
                            return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this
                        }
                        copyPosition(e) {
                            let t = this.elements,
                                n = e.elements;
                            return t[12] = n[12], t[13] = n[13], t[14] = n[14], this
                        }
                        setFromMatrix3(e) {
                            let t = e.elements;
                            return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this
                        }
                        extractBasis(e, t, n) {
                            return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this
                        }
                        makeBasis(e, t, n) {
                            return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this
                        }
                        extractRotation(e) {
                            let t = this.elements,
                                n = e.elements,
                                i = 1 / rx.setFromMatrixColumn(e, 0).length(),
                                r = 1 / rx.setFromMatrixColumn(e, 1).length(),
                                a = 1 / rx.setFromMatrixColumn(e, 2).length();
                            return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
                        }
                        makeRotationFromEuler(e) {
                            let t = this.elements,
                                n = e.x,
                                i = e.y,
                                r = e.z,
                                a = Math.cos(n),
                                s = Math.sin(n),
                                o = Math.cos(i),
                                l = Math.sin(i),
                                h = Math.cos(r),
                                u = Math.sin(r);
                            if ("XYZ" === e.order) {
                                let e = a * h,
                                    n = a * u,
                                    i = s * h,
                                    r = s * u;
                                t[0] = o * h, t[4] = -o * u, t[8] = l, t[1] = n + i * l, t[5] = e - r * l, t[9] = -s * o, t[2] = r - e * l, t[6] = i + n * l, t[10] = a * o
                            } else if ("YXZ" === e.order) {
                                let e = o * h,
                                    n = o * u,
                                    i = l * h,
                                    r = l * u;
                                t[0] = e + r * s, t[4] = i * s - n, t[8] = a * l, t[1] = a * u, t[5] = a * h, t[9] = -s, t[2] = n * s - i, t[6] = r + e * s, t[10] = a * o
                            } else if ("ZXY" === e.order) {
                                let e = o * h,
                                    n = o * u,
                                    i = l * h,
                                    r = l * u;
                                t[0] = e - r * s, t[4] = -a * u, t[8] = i + n * s, t[1] = n + i * s, t[5] = a * h, t[9] = r - e * s, t[2] = -a * l, t[6] = s, t[10] = a * o
                            } else if ("ZYX" === e.order) {
                                let e = a * h,
                                    n = a * u,
                                    i = s * h,
                                    r = s * u;
                                t[0] = o * h, t[4] = i * l - n, t[8] = e * l + r, t[1] = o * u, t[5] = r * l + e, t[9] = n * l - i, t[2] = -l, t[6] = s * o, t[10] = a * o
                            } else if ("YZX" === e.order) {
                                let e = a * o,
                                    n = a * l,
                                    i = s * o,
                                    r = s * l;
                                t[0] = o * h, t[4] = r - e * u, t[8] = i * u + n, t[1] = u, t[5] = a * h, t[9] = -s * h, t[2] = -l * h, t[6] = n * u + i, t[10] = e - r * u
                            } else if ("XZY" === e.order) {
                                let e = a * o,
                                    n = a * l,
                                    i = s * o,
                                    r = s * l;
                                t[0] = o * h, t[4] = -u, t[8] = l * h, t[1] = e * u + r, t[5] = a * h, t[9] = n * u - i, t[2] = i * u - n, t[6] = s * h, t[10] = r * u + e
                            }
                            return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
                        }
                        makeRotationFromQuaternion(e) {
                            return this.compose(ry, e, rE)
                        }
                        lookAt(e, t, n) {
                            let i = this.elements;
                            return rT.subVectors(e, t), 0 === rT.lengthSq() && (rT.z = 1), rT.normalize(), rS.crossVectors(n, rT), 0 === rS.lengthSq() && (1 === Math.abs(n.z) ? rT.x += 1e-4 : rT.z += 1e-4, rT.normalize(), rS.crossVectors(n, rT)), rS.normalize(), rb.crossVectors(rT, rS), i[0] = rS.x, i[4] = rb.x, i[8] = rT.x, i[1] = rS.y, i[5] = rb.y, i[9] = rT.y, i[2] = rS.z, i[6] = rb.z, i[10] = rT.z, this
                        }
                        multiply(e) {
                            return this.multiplyMatrices(this, e)
                        }
                        premultiply(e) {
                            return this.multiplyMatrices(e, this)
                        }
                        multiplyMatrices(e, t) {
                            let n = e.elements,
                                i = t.elements,
                                r = this.elements,
                                a = n[0],
                                s = n[4],
                                o = n[8],
                                l = n[12],
                                h = n[1],
                                u = n[5],
                                c = n[9],
                                d = n[13],
                                p = n[2],
                                f = n[6],
                                m = n[10],
                                g = n[14],
                                v = n[3],
                                _ = n[7],
                                x = n[11],
                                M = n[15],
                                y = i[0],
                                E = i[4],
                                S = i[8],
                                b = i[12],
                                T = i[1],
                                A = i[5],
                                w = i[9],
                                R = i[13],
                                C = i[2],
                                U = i[6],
                                P = i[10],
                                L = i[14],
                                D = i[3],
                                I = i[7],
                                N = i[11],
                                O = i[15];
                            return r[0] = a * y + s * T + o * C + l * D, r[4] = a * E + s * A + o * U + l * I, r[8] = a * S + s * w + o * P + l * N, r[12] = a * b + s * R + o * L + l * O, r[1] = h * y + u * T + c * C + d * D, r[5] = h * E + u * A + c * U + d * I, r[9] = h * S + u * w + c * P + d * N, r[13] = h * b + u * R + c * L + d * O, r[2] = p * y + f * T + m * C + g * D, r[6] = p * E + f * A + m * U + g * I, r[10] = p * S + f * w + m * P + g * N, r[14] = p * b + f * R + m * L + g * O, r[3] = v * y + _ * T + x * C + M * D, r[7] = v * E + _ * A + x * U + M * I, r[11] = v * S + _ * w + x * P + M * N, r[15] = v * b + _ * R + x * L + M * O, this
                        }
                        multiplyScalar(e) {
                            let t = this.elements;
                            return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
                        }
                        determinant() {
                            let e = this.elements,
                                t = e[0],
                                n = e[4],
                                i = e[8],
                                r = e[12],
                                a = e[1],
                                s = e[5],
                                o = e[9],
                                l = e[13],
                                h = e[2],
                                u = e[6],
                                c = e[10],
                                d = e[14];
                            return e[3] * (+r * o * u - i * l * u - r * s * c + n * l * c + i * s * d - n * o * d) + e[7] * (+t * o * d - t * l * c + r * a * c - i * a * d + i * l * h - r * o * h) + e[11] * (+t * l * u - t * s * d - r * a * u + n * a * d + r * s * h - n * l * h) + e[15] * (-i * s * h - t * o * u + t * s * c + i * a * u - n * a * c + n * o * h)
                        }
                        transpose() {
                            let e = this.elements,
                                t;
                            return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
                        }
                        setPosition(e, t, n) {
                            let i = this.elements;
                            return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this
                        }
                        invert() {
                            let e = this.elements,
                                t = e[0],
                                n = e[1],
                                i = e[2],
                                r = e[3],
                                a = e[4],
                                s = e[5],
                                o = e[6],
                                l = e[7],
                                h = e[8],
                                u = e[9],
                                c = e[10],
                                d = e[11],
                                p = e[12],
                                f = e[13],
                                m = e[14],
                                g = e[15],
                                v = u * m * l - f * c * l + f * o * d - s * m * d - u * o * g + s * c * g,
                                _ = p * c * l - h * m * l - p * o * d + a * m * d + h * o * g - a * c * g,
                                x = h * f * l - p * u * l + p * s * d - a * f * d - h * s * g + a * u * g,
                                M = p * u * o - h * f * o - p * s * c + a * f * c + h * s * m - a * u * m,
                                y = t * v + n * _ + i * x + r * M;
                            if (0 === y) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                            let E = 1 / y;
                            return e[0] = v * E, e[1] = (f * c * r - u * m * r - f * i * d + n * m * d + u * i * g - n * c * g) * E, e[2] = (s * m * r - f * o * r + f * i * l - n * m * l - s * i * g + n * o * g) * E, e[3] = (u * o * r - s * c * r - u * i * l + n * c * l + s * i * d - n * o * d) * E, e[4] = _ * E, e[5] = (h * m * r - p * c * r + p * i * d - t * m * d - h * i * g + t * c * g) * E, e[6] = (p * o * r - a * m * r - p * i * l + t * m * l + a * i * g - t * o * g) * E, e[7] = (a * c * r - h * o * r + h * i * l - t * c * l - a * i * d + t * o * d) * E, e[8] = x * E, e[9] = (p * u * r - h * f * r - p * n * d + t * f * d + h * n * g - t * u * g) * E, e[10] = (a * f * r - p * s * r + p * n * l - t * f * l - a * n * g + t * s * g) * E, e[11] = (h * s * r - a * u * r - h * n * l + t * u * l + a * n * d - t * s * d) * E, e[12] = M * E, e[13] = (h * f * i - p * u * i + p * n * c - t * f * c - h * n * m + t * u * m) * E, e[14] = (p * s * i - a * f * i - p * n * o + t * f * o + a * n * m - t * s * m) * E, e[15] = (a * u * i - h * s * i + h * n * o - t * u * o - a * n * c + t * s * c) * E, this
                        }
                        scale(e) {
                            let t = this.elements,
                                n = e.x,
                                i = e.y,
                                r = e.z;
                            return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this
                        }
                        getMaxScaleOnAxis() {
                            let e = this.elements;
                            return Math.sqrt(Math.max(e[0] * e[0] + e[1] * e[1] + e[2] * e[2], e[4] * e[4] + e[5] * e[5] + e[6] * e[6], e[8] * e[8] + e[9] * e[9] + e[10] * e[10]))
                        }
                        makeTranslation(e, t, n) {
                            return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this
                        }
                        makeRotationX(e) {
                            let t = Math.cos(e),
                                n = Math.sin(e);
                            return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this
                        }
                        makeRotationY(e) {
                            let t = Math.cos(e),
                                n = Math.sin(e);
                            return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this
                        }
                        makeRotationZ(e) {
                            let t = Math.cos(e),
                                n = Math.sin(e);
                            return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
                        }
                        makeRotationAxis(e, t) {
                            let n = Math.cos(t),
                                i = Math.sin(t),
                                r = 1 - n,
                                a = e.x,
                                s = e.y,
                                o = e.z,
                                l = r * a,
                                h = r * s;
                            return this.set(l * a + n, l * s - i * o, l * o + i * s, 0, l * s + i * o, h * s + n, h * o - i * a, 0, l * o - i * s, h * o + i * a, r * o * o + n, 0, 0, 0, 0, 1), this
                        }
                        makeScale(e, t, n) {
                            return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
                        }
                        makeShear(e, t, n, i, r, a) {
                            return this.set(1, n, r, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this
                        }
                        compose(e, t, n) {
                            let i = this.elements,
                                r = t._x,
                                a = t._y,
                                s = t._z,
                                o = t._w,
                                l = r + r,
                                h = a + a,
                                u = s + s,
                                c = r * l,
                                d = r * h,
                                p = r * u,
                                f = a * h,
                                m = a * u,
                                g = s * u,
                                v = o * l,
                                _ = o * h,
                                x = o * u,
                                M = n.x,
                                y = n.y,
                                E = n.z;
                            return i[0] = (1 - (f + g)) * M, i[1] = (d + x) * M, i[2] = (p - _) * M, i[3] = 0, i[4] = (d - x) * y, i[5] = (1 - (c + g)) * y, i[6] = (m + v) * y, i[7] = 0, i[8] = (p + _) * E, i[9] = (m - v) * E, i[10] = (1 - (c + f)) * E, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this
                        }
                        decompose(e, t, n) {
                            let i = this.elements,
                                r = rx.set(i[0], i[1], i[2]).length(),
                                a = rx.set(i[4], i[5], i[6]).length(),
                                s = rx.set(i[8], i[9], i[10]).length();
                            0 > this.determinant() && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], rM.copy(this);
                            let o = 1 / r,
                                l = 1 / a,
                                h = 1 / s;
                            return rM.elements[0] *= o, rM.elements[1] *= o, rM.elements[2] *= o, rM.elements[4] *= l, rM.elements[5] *= l, rM.elements[6] *= l, rM.elements[8] *= h, rM.elements[9] *= h, rM.elements[10] *= h, t.setFromRotationMatrix(rM), n.x = r, n.y = a, n.z = s, this
                        }
                        makePerspective(e, t, n, i, r, a) {
                            let s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : nF,
                                o = this.elements,
                                l, h;
                            if (s === nF) l = -(a + r) / (a - r), h = -2 * a * r / (a - r);
                            else if (s === nB) l = -a / (a - r), h = -a * r / (a - r);
                            else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + s);
                            return o[0] = 2 * r / (t - e), o[4] = 0, o[8] = (t + e) / (t - e), o[12] = 0, o[1] = 0, o[5] = 2 * r / (n - i), o[9] = (n + i) / (n - i), o[13] = 0, o[2] = 0, o[6] = 0, o[10] = l, o[14] = h, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
                        }
                        makeOrthographic(e, t, n, i, r, a) {
                            let s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : nF,
                                o = this.elements,
                                l = 1 / (t - e),
                                h = 1 / (n - i),
                                u = 1 / (a - r),
                                c, d;
                            if (s === nF) c = (a + r) * u, d = -2 * u;
                            else if (s === nB) c = r * u, d = -1 * u;
                            else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + s);
                            return o[0] = 2 * l, o[4] = 0, o[8] = 0, o[12] = -((t + e) * l), o[1] = 0, o[5] = 2 * h, o[9] = 0, o[13] = -((n + i) * h), o[2] = 0, o[6] = 0, o[10] = d, o[14] = -c, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
                        }
                        equals(e) {
                            let t = this.elements,
                                n = e.elements;
                            for (let e = 0; e < 16; e++)
                                if (t[e] !== n[e]) return !1;
                            return !0
                        }
                        fromArray(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
                            return this
                        }
                        toArray() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                n = this.elements;
                            return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e
                        }
                        constructor(t, n, i, r, a, s, o, l, h, u, c, d, p, f, m, g) {
                            e.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], void 0 !== t && this.set(t, n, i, r, a, s, o, l, h, u, c, d, p, f, m, g)
                        }
                    }, rx = new iV, rM = new r_, ry = new iV(0, 0, 0), rE = new iV(1, 1, 1), rS = new iV, rb = new iV, rT = new iV
                }),
                ae = h(() => {
                    i$(), r7(), im(), rA = new r_, rw = new ik, (rR = class e {
                        get x() {
                            return this._x
                        }
                        set x(e) {
                            this._x = e, this._onChangeCallback()
                        }
                        get y() {
                            return this._y
                        }
                        set y(e) {
                            this._y = e, this._onChangeCallback()
                        }
                        get z() {
                            return this._z
                        }
                        set z(e) {
                            this._z = e, this._onChangeCallback()
                        }
                        get order() {
                            return this._order
                        }
                        set order(e) {
                            this._order = e, this._onChangeCallback()
                        }
                        set(e, t, n) {
                            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this._order;
                            return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this
                        }
                        clone() {
                            return new this.constructor(this._x, this._y, this._z, this._order)
                        }
                        copy(e) {
                            return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this
                        }
                        setFromRotationMatrix(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._order,
                                n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                                i = e.elements,
                                r = i[0],
                                a = i[4],
                                s = i[8],
                                o = i[1],
                                l = i[5],
                                h = i[9],
                                u = i[2],
                                c = i[6],
                                d = i[10];
                            switch (t) {
                                case "XYZ":
                                    this._y = Math.asin(nq(s, -1, 1)), .9999999 > Math.abs(s) ? (this._x = Math.atan2(-h, d), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(c, l), this._z = 0);
                                    break;
                                case "YXZ":
                                    this._x = Math.asin(-nq(h, -1, 1)), .9999999 > Math.abs(h) ? (this._y = Math.atan2(s, d), this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-u, r), this._z = 0);
                                    break;
                                case "ZXY":
                                    this._x = Math.asin(nq(c, -1, 1)), .9999999 > Math.abs(c) ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(o, r));
                                    break;
                                case "ZYX":
                                    this._y = Math.asin(-nq(u, -1, 1)), .9999999 > Math.abs(u) ? (this._x = Math.atan2(c, d), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-a, l));
                                    break;
                                case "YZX":
                                    this._z = Math.asin(nq(o, -1, 1)), .9999999 > Math.abs(o) ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(s, d));
                                    break;
                                case "XZY":
                                    this._z = Math.asin(-nq(a, -1, 1)), .9999999 > Math.abs(a) ? (this._x = Math.atan2(c, l), this._y = Math.atan2(s, r)) : (this._x = Math.atan2(-h, d), this._y = 0);
                                    break;
                                default:
                                    console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
                            }
                            return this._order = t, !0 === n && this._onChangeCallback(), this
                        }
                        setFromQuaternion(e, t, n) {
                            return rA.makeRotationFromQuaternion(e), this.setFromRotationMatrix(rA, t, n)
                        }
                        setFromVector3(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._order;
                            return this.set(e.x, e.y, e.z, t)
                        }
                        reorder(e) {
                            return rw.setFromEuler(this), this.setFromQuaternion(rw, e)
                        }
                        equals(e) {
                            return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
                        }
                        fromArray(e) {
                            return this._x = e[0], this._y = e[1], this._z = e[2], void 0 !== e[3] && (this._order = e[3]), this._onChangeCallback(), this
                        }
                        toArray() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e
                        }
                        _onChange(e) {
                            return this._onChangeCallback = e, this
                        }
                        _onChangeCallback() {}*[Symbol.iterator]() {
                            yield this._x, yield this._y, yield this._z, yield this._order
                        }
                        constructor(t = 0, n = 0, i = 0, r = e.DEFAULT_ORDER) {
                            this.isEuler = !0, this._x = t, this._y = n, this._z = i, this._order = r
                        }
                    }).DEFAULT_ORDER = "XYZ"
                }),
                at = h(() => {
                    rC = class {
                        set(e) {
                            this.mask = (1 << e | 0) >>> 0
                        }
                        enable(e) {
                            this.mask |= 1 << e | 0
                        }
                        enableAll() {
                            this.mask = -1
                        }
                        toggle(e) {
                            this.mask ^= 1 << e | 0
                        }
                        disable(e) {
                            this.mask &= ~(1 << e | 0)
                        }
                        disableAll() {
                            this.mask = 0
                        }
                        test(e) {
                            return (this.mask & e.mask) != 0
                        }
                        isEnabled(e) {
                            return (this.mask & (1 << e | 0)) != 0
                        }
                        constructor() {
                            this.mask = 1
                        }
                    }
                }),
                an = h(() => {
                    i$(), i0(), r7(), nj(), ae(), at(), iv(), im(), rU = 0, rP = new iV, rL = new ik, rD = new r_, rI = new iV, rN = new iV, rO = new iV, rF = new ik, rB = new iV(1, 0, 0), rz = new iV(0, 1, 0), rG = new iV(0, 0, 1), rH = {
                        type: "added"
                    }, rk = {
                        type: "removed"
                    }, rV = {
                        type: "childadded",
                        child: null
                    }, rW = {
                        type: "childremoved",
                        child: null
                    }, rX = class e extends nz {
                        onBeforeShadow() {}
                        onAfterShadow() {}
                        onBeforeRender() {}
                        onAfterRender() {}
                        applyMatrix4(e) {
                            this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale)
                        }
                        applyQuaternion(e) {
                            return this.quaternion.premultiply(e), this
                        }
                        setRotationFromAxisAngle(e, t) {
                            this.quaternion.setFromAxisAngle(e, t)
                        }
                        setRotationFromEuler(e) {
                            this.quaternion.setFromEuler(e, !0)
                        }
                        setRotationFromMatrix(e) {
                            this.quaternion.setFromRotationMatrix(e)
                        }
                        setRotationFromQuaternion(e) {
                            this.quaternion.copy(e)
                        }
                        rotateOnAxis(e, t) {
                            return rL.setFromAxisAngle(e, t), this.quaternion.multiply(rL), this
                        }
                        rotateOnWorldAxis(e, t) {
                            return rL.setFromAxisAngle(e, t), this.quaternion.premultiply(rL), this
                        }
                        rotateX(e) {
                            return this.rotateOnAxis(rB, e)
                        }
                        rotateY(e) {
                            return this.rotateOnAxis(rz, e)
                        }
                        rotateZ(e) {
                            return this.rotateOnAxis(rG, e)
                        }
                        translateOnAxis(e, t) {
                            return rP.copy(e).applyQuaternion(this.quaternion), this.position.add(rP.multiplyScalar(t)), this
                        }
                        translateX(e) {
                            return this.translateOnAxis(rB, e)
                        }
                        translateY(e) {
                            return this.translateOnAxis(rz, e)
                        }
                        translateZ(e) {
                            return this.translateOnAxis(rG, e)
                        }
                        localToWorld(e) {
                            return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld)
                        }
                        worldToLocal(e) {
                            return this.updateWorldMatrix(!0, !1), e.applyMatrix4(rD.copy(this.matrixWorld).invert())
                        }
                        lookAt(e, t, n) {
                            e.isVector3 ? rI.copy(e) : rI.set(e, t, n);
                            let i = this.parent;
                            this.updateWorldMatrix(!0, !1), rN.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? rD.lookAt(rN, rI, this.up) : rD.lookAt(rI, rN, this.up), this.quaternion.setFromRotationMatrix(rD), i && (rD.extractRotation(i.matrixWorld), rL.setFromRotationMatrix(rD), this.quaternion.premultiply(rL.invert()))
                        }
                        add(e) {
                            if (arguments.length > 1) {
                                for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
                                return this
                            }
                            return e === this ? console.error("THREE.Object3D.add: object can't be added as a child of itself.", e) : e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(rH), rV.child = e, this.dispatchEvent(rV), rV.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this
                        }
                        remove(e) {
                            if (arguments.length > 1) {
                                for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
                                return this
                            }
                            let t = this.children.indexOf(e);
                            return -1 !== t && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(rk), rW.child = e, this.dispatchEvent(rW), rW.child = null), this
                        }
                        removeFromParent() {
                            let e = this.parent;
                            return null !== e && e.remove(this), this
                        }
                        clear() {
                            return this.remove(...this.children)
                        }
                        attach(e) {
                            return this.updateWorldMatrix(!0, !1), rD.copy(this.matrixWorld).invert(), null !== e.parent && (e.parent.updateWorldMatrix(!0, !1), rD.multiply(e.parent.matrixWorld)), e.applyMatrix4(rD), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(rH), rV.child = e, this.dispatchEvent(rV), rV.child = null, this
                        }
                        getObjectById(e) {
                            return this.getObjectByProperty("id", e)
                        }
                        getObjectByName(e) {
                            return this.getObjectByProperty("name", e)
                        }
                        getObjectByProperty(e, t) {
                            if (this[e] === t) return this;
                            for (let n = 0, i = this.children.length; n < i; n++) {
                                let i = this.children[n].getObjectByProperty(e, t);
                                if (void 0 !== i) return i
                            }
                        }
                        getObjectsByProperty(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                            this[e] === t && n.push(this);
                            let i = this.children;
                            for (let r = 0, a = i.length; r < a; r++) i[r].getObjectsByProperty(e, t, n);
                            return n
                        }
                        getWorldPosition(e) {
                            return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
                        }
                        getWorldQuaternion(e) {
                            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(rN, e, rO), e
                        }
                        getWorldScale(e) {
                            return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(rN, rF, e), e
                        }
                        getWorldDirection(e) {
                            this.updateWorldMatrix(!0, !1);
                            let t = this.matrixWorld.elements;
                            return e.set(t[8], t[9], t[10]).normalize()
                        }
                        raycast() {}
                        traverse(e) {
                            e(this);
                            let t = this.children;
                            for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e)
                        }
                        traverseVisible(e) {
                            if (!1 === this.visible) return;
                            e(this);
                            let t = this.children;
                            for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e)
                        }
                        traverseAncestors(e) {
                            let t = this.parent;
                            null !== t && (e(t), t.traverseAncestors(e))
                        }
                        updateMatrix() {
                            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
                        }
                        updateMatrixWorld(e) {
                            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (!0 === this.matrixWorldAutoUpdate && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
                            let t = this.children;
                            for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e)
                        }
                        updateWorldMatrix(e, t) {
                            let n = this.parent;
                            if (!0 === e && null !== n && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), !0 === this.matrixWorldAutoUpdate && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), !0 === t) {
                                let e = this.children;
                                for (let t = 0, n = e.length; t < n; t++) e[t].updateWorldMatrix(!1, !0)
                            }
                        }
                        toJSON(e) {
                            let t = void 0 === e || "string" == typeof e,
                                n = {};
                            t && (e = {
                                geometries: {},
                                materials: {},
                                textures: {},
                                images: {},
                                shapes: {},
                                skeletons: {},
                                animations: {},
                                nodes: {}
                            }, n.metadata = {
                                version: 4.6,
                                type: "Object",
                                generator: "Object3D.toJSON"
                            });
                            let i = {};

                            function r(t, n) {
                                return void 0 === t[n.uuid] && (t[n.uuid] = n.toJSON(e)), n.uuid
                            }
                            if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), !0 === this.castShadow && (i.castShadow = !0), !0 === this.receiveShadow && (i.receiveShadow = !0), !1 === this.visible && (i.visible = !1), !1 === this.frustumCulled && (i.frustumCulled = !1), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map(e => ({
                                    boxInitialized: e.boxInitialized,
                                    boxMin: e.box.min.toArray(),
                                    boxMax: e.box.max.toArray(),
                                    sphereInitialized: e.sphereInitialized,
                                    sphereRadius: e.sphere.radius,
                                    sphereCenter: e.sphere.center.toArray()
                                })), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), null !== this._colorsTexture && (i.colorsTexture = this._colorsTexture.toJSON(e)), null !== this.boundingSphere && (i.boundingSphere = {
                                    center: i.boundingSphere.center.toArray(),
                                    radius: i.boundingSphere.radius
                                }), null !== this.boundingBox && (i.boundingBox = {
                                    min: i.boundingBox.min.toArray(),
                                    max: i.boundingBox.max.toArray()
                                })), this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && !0 !== this.environment.isRenderTargetTexture && (i.environment = this.environment.toJSON(e).uuid);
                            else if (this.isMesh || this.isLine || this.isPoints) {
                                i.geometry = r(e.geometries, this.geometry);
                                let t = this.geometry.parameters;
                                if (void 0 !== t && void 0 !== t.shapes) {
                                    let n = t.shapes;
                                    if (Array.isArray(n))
                                        for (let t = 0, i = n.length; t < i; t++) {
                                            let i = n[t];
                                            r(e.shapes, i)
                                        } else r(e.shapes, n)
                                }
                            }
                            if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material) {
                                if (Array.isArray(this.material)) {
                                    let t = [];
                                    for (let n = 0, i = this.material.length; n < i; n++) t.push(r(e.materials, this.material[n]));
                                    i.material = t
                                } else i.material = r(e.materials, this.material)
                            }
                            if (this.children.length > 0) {
                                i.children = [];
                                for (let t = 0; t < this.children.length; t++) i.children.push(this.children[t].toJSON(e).object)
                            }
                            if (this.animations.length > 0) {
                                i.animations = [];
                                for (let t = 0; t < this.animations.length; t++) {
                                    let n = this.animations[t];
                                    i.animations.push(r(e.animations, n))
                                }
                            }
                            if (t) {
                                let t = a(e.geometries),
                                    i = a(e.materials),
                                    r = a(e.textures),
                                    s = a(e.images),
                                    o = a(e.shapes),
                                    l = a(e.skeletons),
                                    h = a(e.animations),
                                    u = a(e.nodes);
                                t.length > 0 && (n.geometries = t), i.length > 0 && (n.materials = i), r.length > 0 && (n.textures = r), s.length > 0 && (n.images = s), o.length > 0 && (n.shapes = o), l.length > 0 && (n.skeletons = l), h.length > 0 && (n.animations = h), u.length > 0 && (n.nodes = u)
                            }
                            return n.object = i, n;

                            function a(e) {
                                let t = [];
                                for (let n in e) {
                                    let i = e[n];
                                    delete i.metadata, t.push(i)
                                }
                                return t
                            }
                        }
                        clone(e) {
                            return new this.constructor().copy(this, e)
                        }
                        copy(e) {
                            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                            if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), !0 === t)
                                for (let t = 0; t < e.children.length; t++) {
                                    let n = e.children[t];
                                    this.add(n.clone())
                                }
                            return this
                        }
                        constructor() {
                            super(), this.isObject3D = !0, Object.defineProperty(this, "id", {
                                value: rU++
                            }), this.uuid = nY(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = e.DEFAULT_UP.clone();
                            let t = new iV,
                                n = new rR,
                                i = new ik,
                                r = new iV(1, 1, 1);
                            n._onChange(function() {
                                i.setFromEuler(n, !1)
                            }), i._onChange(function() {
                                n.setFromQuaternion(i, void 0, !1)
                            }), Object.defineProperties(this, {
                                position: {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: t
                                },
                                rotation: {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: n
                                },
                                quaternion: {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: i
                                },
                                scale: {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: r
                                },
                                modelViewMatrix: {
                                    value: new r_
                                },
                                normalMatrix: {
                                    value: new id
                                }
                            }), this.matrix = new r_, this.matrixWorld = new r_, this.matrixAutoUpdate = e.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new rC, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {}
                        }
                    }, rX.DEFAULT_UP = new iV(0, 1, 0), rX.DEFAULT_MATRIX_AUTO_UPDATE = !0, rX.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0
                }),
                ai = h(() => {
                    i0(), iq(), rj = new iV, rY = new iV, rq = new iV, rK = new iV, rZ = new iV, rJ = new iV, rQ = new iV, r$ = new iV, r0 = new iV, r1 = new iV, r2 = new iF, r3 = new iF, r4 = new iF, r5 = class e {
                        static getNormal(e, t, n, i) {
                            i.subVectors(n, t), rj.subVectors(e, t), i.cross(rj);
                            let r = i.lengthSq();
                            return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
                        }
                        static getBarycoord(e, t, n, i, r) {
                            rj.subVectors(i, t), rY.subVectors(n, t), rq.subVectors(e, t);
                            let a = rj.dot(rj),
                                s = rj.dot(rY),
                                o = rj.dot(rq),
                                l = rY.dot(rY),
                                h = rY.dot(rq),
                                u = a * l - s * s;
                            if (0 === u) return r.set(0, 0, 0), null;
                            let c = 1 / u,
                                d = (l * o - s * h) * c,
                                p = (a * h - s * o) * c;
                            return r.set(1 - d - p, p, d)
                        }
                        static containsPoint(e, t, n, i) {
                            return null !== this.getBarycoord(e, t, n, i, rK) && rK.x >= 0 && rK.y >= 0 && rK.x + rK.y <= 1
                        }
                        static getInterpolation(e, t, n, i, r, a, s, o) {
                            return null === this.getBarycoord(e, t, n, i, rK) ? (o.x = 0, o.y = 0, "z" in o && (o.z = 0), "w" in o && (o.w = 0), null) : (o.setScalar(0), o.addScaledVector(r, rK.x), o.addScaledVector(a, rK.y), o.addScaledVector(s, rK.z), o)
                        }
                        static getInterpolatedAttribute(e, t, n, i, r, a) {
                            return r2.setScalar(0), r3.setScalar(0), r4.setScalar(0), r2.fromBufferAttribute(e, t), r3.fromBufferAttribute(e, n), r4.fromBufferAttribute(e, i), a.setScalar(0), a.addScaledVector(r2, r.x), a.addScaledVector(r3, r.y), a.addScaledVector(r4, r.z), a
                        }
                        static isFrontFacing(e, t, n, i) {
                            return rj.subVectors(n, t), rY.subVectors(e, t), 0 > rj.cross(rY).dot(i)
                        }
                        set(e, t, n) {
                            return this.a.copy(e), this.b.copy(t), this.c.copy(n), this
                        }
                        setFromPointsAndIndices(e, t, n, i) {
                            return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this
                        }
                        setFromAttributeAndIndices(e, t, n, i) {
                            return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this
                        }
                        clone() {
                            return new this.constructor().copy(this)
                        }
                        copy(e) {
                            return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
                        }
                        getArea() {
                            return rj.subVectors(this.c, this.b), rY.subVectors(this.a, this.b), .5 * rj.cross(rY).length()
                        }
                        getMidpoint(e) {
                            return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
                        }
                        getNormal(t) {
                            return e.getNormal(this.a, this.b, this.c, t)
                        }
                        getPlane(e) {
                            return e.setFromCoplanarPoints(this.a, this.b, this.c)
                        }
                        getBarycoord(t, n) {
                            return e.getBarycoord(t, this.a, this.b, this.c, n)
                        }
                        getInterpolation(t, n, i, r, a) {
                            return e.getInterpolation(t, this.a, this.b, this.c, n, i, r, a)
                        }
                        containsPoint(t) {
                            return e.containsPoint(t, this.a, this.b, this.c)
                        }
                        isFrontFacing(t) {
                            return e.isFrontFacing(this.a, this.b, this.c, t)
                        }
                        intersectsBox(e) {
                            return e.intersectsTriangle(this)
                        }
                        closestPointToPoint(e, t) {
                            let n = this.a,
                                i = this.b,
                                r = this.c,
                                a, s;
                            rZ.subVectors(i, n), rJ.subVectors(r, n), r$.subVectors(e, n);
                            let o = rZ.dot(r$),
                                l = rJ.dot(r$);
                            if (o <= 0 && l <= 0) return t.copy(n);
                            r0.subVectors(e, i);
                            let h = rZ.dot(r0),
                                u = rJ.dot(r0);
                            if (h >= 0 && u <= h) return t.copy(i);
                            let c = o * u - h * l;
                            if (c <= 0 && o >= 0 && h <= 0) return a = o / (o - h), t.copy(n).addScaledVector(rZ, a);
                            r1.subVectors(e, r);
                            let d = rZ.dot(r1),
                                p = rJ.dot(r1);
                            if (p >= 0 && d <= p) return t.copy(r);
                            let f = d * l - o * p;
                            if (f <= 0 && l >= 0 && p <= 0) return s = l / (l - p), t.copy(n).addScaledVector(rJ, s);
                            let m = h * p - d * u;
                            if (m <= 0 && u - h >= 0 && d - p >= 0) return rQ.subVectors(r, i), s = (u - h) / (u - h + (d - p)), t.copy(i).addScaledVector(rQ, s);
                            let g = 1 / (m + f + c);
                            return a = f * g, s = c * g, t.copy(n).addScaledVector(rZ, a).addScaledVector(rJ, s)
                        }
                        equals(e) {
                            return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
                        }
                        constructor(e = new iV, t = new iV, n = new iV) {
                            this.a = e, this.b = t, this.c = n
                        }
                    }
                });

            function ar(e, t, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e
            }
            var aa, as, ao, al, ah, au, ac, ad, ap, af, am, ag, av, a_, ax, aM, ay, aE, aS, ab, aT, aA, aw, aR = h(() => {
                    im(), iU(), nX(), aa = {
                        aliceblue: 0xf0f8ff,
                        antiquewhite: 0xfaebd7,
                        aqua: 65535,
                        aquamarine: 8388564,
                        azure: 0xf0ffff,
                        beige: 0xf5f5dc,
                        bisque: 0xffe4c4,
                        black: 0,
                        blanchedalmond: 0xffebcd,
                        blue: 255,
                        blueviolet: 9055202,
                        brown: 0xa52a2a,
                        burlywood: 0xdeb887,
                        cadetblue: 6266528,
                        chartreuse: 8388352,
                        chocolate: 0xd2691e,
                        coral: 0xff7f50,
                        cornflowerblue: 6591981,
                        cornsilk: 0xfff8dc,
                        crimson: 0xdc143c,
                        cyan: 65535,
                        darkblue: 139,
                        darkcyan: 35723,
                        darkgoldenrod: 0xb8860b,
                        darkgray: 0xa9a9a9,
                        darkgreen: 25600,
                        darkgrey: 0xa9a9a9,
                        darkkhaki: 0xbdb76b,
                        darkmagenta: 9109643,
                        darkolivegreen: 5597999,
                        darkorange: 0xff8c00,
                        darkorchid: 0x9932cc,
                        darkred: 9109504,
                        darksalmon: 0xe9967a,
                        darkseagreen: 9419919,
                        darkslateblue: 4734347,
                        darkslategray: 3100495,
                        darkslategrey: 3100495,
                        darkturquoise: 52945,
                        darkviolet: 9699539,
                        deeppink: 0xff1493,
                        deepskyblue: 49151,
                        dimgray: 6908265,
                        dimgrey: 6908265,
                        dodgerblue: 2003199,
                        firebrick: 0xb22222,
                        floralwhite: 0xfffaf0,
                        forestgreen: 2263842,
                        fuchsia: 0xff00ff,
                        gainsboro: 0xdcdcdc,
                        ghostwhite: 0xf8f8ff,
                        gold: 0xffd700,
                        goldenrod: 0xdaa520,
                        gray: 8421504,
                        green: 32768,
                        greenyellow: 0xadff2f,
                        grey: 8421504,
                        honeydew: 0xf0fff0,
                        hotpink: 0xff69b4,
                        indianred: 0xcd5c5c,
                        indigo: 4915330,
                        ivory: 0xfffff0,
                        khaki: 0xf0e68c,
                        lavender: 0xe6e6fa,
                        lavenderblush: 0xfff0f5,
                        lawngreen: 8190976,
                        lemonchiffon: 0xfffacd,
                        lightblue: 0xadd8e6,
                        lightcoral: 0xf08080,
                        lightcyan: 0xe0ffff,
                        lightgoldenrodyellow: 0xfafad2,
                        lightgray: 0xd3d3d3,
                        lightgreen: 9498256,
                        lightgrey: 0xd3d3d3,
                        lightpink: 0xffb6c1,
                        lightsalmon: 0xffa07a,
                        lightseagreen: 2142890,
                        lightskyblue: 8900346,
                        lightslategray: 7833753,
                        lightslategrey: 7833753,
                        lightsteelblue: 0xb0c4de,
                        lightyellow: 0xffffe0,
                        lime: 65280,
                        limegreen: 3329330,
                        linen: 0xfaf0e6,
                        magenta: 0xff00ff,
                        maroon: 8388608,
                        mediumaquamarine: 6737322,
                        mediumblue: 205,
                        mediumorchid: 0xba55d3,
                        mediumpurple: 9662683,
                        mediumseagreen: 3978097,
                        mediumslateblue: 8087790,
                        mediumspringgreen: 64154,
                        mediumturquoise: 4772300,
                        mediumvioletred: 0xc71585,
                        midnightblue: 1644912,
                        mintcream: 0xf5fffa,
                        mistyrose: 0xffe4e1,
                        moccasin: 0xffe4b5,
                        navajowhite: 0xffdead,
                        navy: 128,
                        oldlace: 0xfdf5e6,
                        olive: 8421376,
                        olivedrab: 7048739,
                        orange: 0xffa500,
                        orangered: 0xff4500,
                        orchid: 0xda70d6,
                        palegoldenrod: 0xeee8aa,
                        palegreen: 0x98fb98,
                        paleturquoise: 0xafeeee,
                        palevioletred: 0xdb7093,
                        papayawhip: 0xffefd5,
                        peachpuff: 0xffdab9,
                        peru: 0xcd853f,
                        pink: 0xffc0cb,
                        plum: 0xdda0dd,
                        powderblue: 0xb0e0e6,
                        purple: 8388736,
                        rebeccapurple: 6697881,
                        red: 0xff0000,
                        rosybrown: 0xbc8f8f,
                        royalblue: 4286945,
                        saddlebrown: 9127187,
                        salmon: 0xfa8072,
                        sandybrown: 0xf4a460,
                        seagreen: 3050327,
                        seashell: 0xfff5ee,
                        sienna: 0xa0522d,
                        silver: 0xc0c0c0,
                        skyblue: 8900331,
                        slateblue: 6970061,
                        slategray: 7372944,
                        slategrey: 7372944,
                        snow: 0xfffafa,
                        springgreen: 65407,
                        steelblue: 4620980,
                        tan: 0xd2b48c,
                        teal: 32896,
                        thistle: 0xd8bfd8,
                        tomato: 0xff6347,
                        turquoise: 4251856,
                        violet: 0xee82ee,
                        wheat: 0xf5deb3,
                        white: 0xffffff,
                        whitesmoke: 0xf5f5f5,
                        yellow: 0xffff00,
                        yellowgreen: 0x9acd32
                    }, as = {
                        h: 0,
                        s: 0,
                        l: 0
                    }, ao = {
                        h: 0,
                        s: 0,
                        l: 0
                    }, ah = new(al = class {
                        set(e, t, n) {
                            return void 0 === t && void 0 === n ? e && e.isColor ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e) : this.setRGB(e, t, n), this
                        }
                        setScalar(e) {
                            return this.r = e, this.g = e, this.b = e, this
                        }
                        setHex(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ny;
                            return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (255 & e) / 255, iw.toWorkingColorSpace(this, t), this
                        }
                        setRGB(e, t, n) {
                            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iw.workingColorSpace;
                            return this.r = e, this.g = t, this.b = n, iw.toWorkingColorSpace(this, i), this
                        }
                        setHSL(e, t, n) {
                            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iw.workingColorSpace;
                            if (e = nK(e, 1), t = nq(t, 0, 1), n = nq(n, 0, 1), 0 === t) this.r = this.g = this.b = n;
                            else {
                                let i = n <= .5 ? n * (1 + t) : n + t - n * t,
                                    r = 2 * n - i;
                                this.r = ar(r, i, e + 1 / 3), this.g = ar(r, i, e), this.b = ar(r, i, e - 1 / 3)
                            }
                            return iw.toWorkingColorSpace(this, i), this
                        }
                        setStyle(e) {
                            let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ny;

                            function i(t) {
                                void 0 !== t && 1 > parseFloat(t) && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
                            }
                            if (t = /^(\w+)\(([^\)]*)\)/.exec(e)) {
                                let r, a = t[1],
                                    s = t[2];
                                switch (a) {
                                    case "rgb":
                                    case "rgba":
                                        if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return i(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, n);
                                        if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return i(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, n);
                                        break;
                                    case "hsl":
                                    case "hsla":
                                        if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return i(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, n);
                                        break;
                                    default:
                                        console.warn("THREE.Color: Unknown color model " + e)
                                }
                            } else if (t = /^\#([A-Fa-f\d]+)$/.exec(e)) {
                                let i = t[1],
                                    r = i.length;
                                if (3 === r) return this.setRGB(parseInt(i.charAt(0), 16) / 15, parseInt(i.charAt(1), 16) / 15, parseInt(i.charAt(2), 16) / 15, n);
                                if (6 === r) return this.setHex(parseInt(i, 16), n);
                                console.warn("THREE.Color: Invalid hex color " + e)
                            } else if (e && e.length > 0) return this.setColorName(e, n);
                            return this
                        }
                        setColorName(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ny,
                                n = aa[e.toLowerCase()];
                            return void 0 !== n ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this
                        }
                        clone() {
                            return new this.constructor(this.r, this.g, this.b)
                        }
                        copy(e) {
                            return this.r = e.r, this.g = e.g, this.b = e.b, this
                        }
                        copySRGBToLinear(e) {
                            return this.r = iS(e.r), this.g = iS(e.g), this.b = iS(e.b), this
                        }
                        copyLinearToSRGB(e) {
                            return this.r = ib(e.r), this.g = ib(e.g), this.b = ib(e.b), this
                        }
                        convertSRGBToLinear() {
                            return this.copySRGBToLinear(this), this
                        }
                        convertLinearToSRGB() {
                            return this.copyLinearToSRGB(this), this
                        }
                        getHex() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ny;
                            return iw.fromWorkingColorSpace(ah.copy(this), e), 65536 * Math.round(nq(255 * ah.r, 0, 255)) + 256 * Math.round(nq(255 * ah.g, 0, 255)) + Math.round(nq(255 * ah.b, 0, 255))
                        }
                        getHexString() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ny;
                            return ("000000" + this.getHex(e).toString(16)).slice(-6)
                        }
                        getHSL(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iw.workingColorSpace;
                            iw.fromWorkingColorSpace(ah.copy(this), t);
                            let n = ah.r,
                                i = ah.g,
                                r = ah.b,
                                a = Math.max(n, i, r),
                                s = Math.min(n, i, r),
                                o, l, h = (s + a) / 2;
                            if (s === a) o = 0, l = 0;
                            else {
                                let e = a - s;
                                switch (l = h <= .5 ? e / (a + s) : e / (2 - a - s), a) {
                                    case n:
                                        o = (i - r) / e + (i < r ? 6 : 0);
                                        break;
                                    case i:
                                        o = (r - n) / e + 2;
                                        break;
                                    case r:
                                        o = (n - i) / e + 4
                                }
                                o /= 6
                            }
                            return e.h = o, e.s = l, e.l = h, e
                        }
                        getRGB(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iw.workingColorSpace;
                            return iw.fromWorkingColorSpace(ah.copy(this), t), e.r = ah.r, e.g = ah.g, e.b = ah.b, e
                        }
                        getStyle() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ny;
                            iw.fromWorkingColorSpace(ah.copy(this), e);
                            let t = ah.r,
                                n = ah.g,
                                i = ah.b;
                            return e !== ny ? "color(".concat(e, " ").concat(t.toFixed(3), " ").concat(n.toFixed(3), " ").concat(i.toFixed(3), ")") : "rgb(".concat(Math.round(255 * t), ",").concat(Math.round(255 * n), ",").concat(Math.round(255 * i), ")")
                        }
                        offsetHSL(e, t, n) {
                            return this.getHSL(as), this.setHSL(as.h + e, as.s + t, as.l + n)
                        }
                        add(e) {
                            return this.r += e.r, this.g += e.g, this.b += e.b, this
                        }
                        addColors(e, t) {
                            return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
                        }
                        addScalar(e) {
                            return this.r += e, this.g += e, this.b += e, this
                        }
                        sub(e) {
                            return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this
                        }
                        multiply(e) {
                            return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
                        }
                        multiplyScalar(e) {
                            return this.r *= e, this.g *= e, this.b *= e, this
                        }
                        lerp(e, t) {
                            return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
                        }
                        lerpColors(e, t, n) {
                            return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this
                        }
                        lerpHSL(e, t) {
                            this.getHSL(as), e.getHSL(ao);
                            let n = nQ(as.h, ao.h, t),
                                i = nQ(as.s, ao.s, t),
                                r = nQ(as.l, ao.l, t);
                            return this.setHSL(n, i, r), this
                        }
                        setFromVector3(e) {
                            return this.r = e.x, this.g = e.y, this.b = e.z, this
                        }
                        applyMatrix3(e) {
                            let t = this.r,
                                n = this.g,
                                i = this.b,
                                r = e.elements;
                            return this.r = r[0] * t + r[3] * n + r[6] * i, this.g = r[1] * t + r[4] * n + r[7] * i, this.b = r[2] * t + r[5] * n + r[8] * i, this
                        }
                        equals(e) {
                            return e.r === this.r && e.g === this.g && e.b === this.b
                        }
                        fromArray(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this
                        }
                        toArray() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e
                        }
                        fromBufferAttribute(e, t) {
                            return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this
                        }
                        toJSON() {
                            return this.getHex()
                        }*[Symbol.iterator]() {
                            yield this.r, yield this.g, yield this.b
                        }
                        constructor(e, t, n) {
                            return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n)
                        }
                    }), al.NAMES = aa
                }),
                aC = h(() => {
                    aR(), nj(), nX(), im(), au = 0, ac = class extends nz {
                        get alphaTest() {
                            return this._alphaTest
                        }
                        set alphaTest(e) {
                            this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e
                        }
                        onBeforeRender() {}
                        onBeforeCompile() {}
                        customProgramCacheKey() {
                            return this.onBeforeCompile.toString()
                        }
                        setValues(e) {
                            if (void 0 !== e)
                                for (let t in e) {
                                    let n = e[t];
                                    if (void 0 === n) {
                                        console.warn("THREE.Material: parameter '".concat(t, "' has value of undefined."));
                                        continue
                                    }
                                    let i = this[t];
                                    if (void 0 === i) {
                                        console.warn("THREE.Material: '".concat(t, "' is not a property of THREE.").concat(this.type, "."));
                                        continue
                                    }
                                    i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n
                                }
                        }
                        toJSON(e) {
                            let t = void 0 === e || "string" == typeof e;
                            t && (e = {
                                textures: {},
                                images: {}
                            });
                            let n = {
                                metadata: {
                                    version: 4.6,
                                    type: "Material",
                                    generator: "Material.toJSON"
                                }
                            };

                            function i(e) {
                                let t = [];
                                for (let n in e) {
                                    let i = e[n];
                                    delete i.metadata, t.push(i)
                                }
                                return t
                            }
                            if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), void 0 !== this.sheen && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), void 0 !== this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), void 0 !== this.dispersion && (n.dispersion = this.dispersion), void 0 !== this.iridescence && (n.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (n.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), void 0 !== this.anisotropy && (n.anisotropy = this.anisotropy), void 0 !== this.anisotropyRotation && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, void 0 !== this.combine && (n.combine = this.combine)), void 0 !== this.envMapRotation && (n.envMapRotation = this.envMapRotation.toArray()), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), void 0 !== this.transmission && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), void 0 !== this.thickness && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), void 0 !== this.attenuationDistance && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (n.size = this.size), null !== this.shadowSide && (n.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== eC && (n.blending = this.blending), this.side !== eT && (n.side = this.side), !0 === this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = !0), this.blendSrc !== eV && (n.blendSrc = this.blendSrc), this.blendDst !== eW && (n.blendDst = this.blendDst), this.blendEquation !== eI && (n.blendEquation = this.blendEquation), null !== this.blendSrcAlpha && (n.blendSrcAlpha = this.blendSrcAlpha), null !== this.blendDstAlpha && (n.blendDstAlpha = this.blendDstAlpha), null !== this.blendEquationAlpha && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), 0 !== this.blendAlpha && (n.blendAlpha = this.blendAlpha), this.depthFunc !== e3 && (n.depthFunc = this.depthFunc), !1 === this.depthTest && (n.depthTest = this.depthTest), !1 === this.depthWrite && (n.depthWrite = this.depthWrite), !1 === this.colorWrite && (n.colorWrite = this.colorWrite), 255 !== this.stencilWriteMask && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== nA && (n.stencilFunc = this.stencilFunc), 0 !== this.stencilRef && (n.stencilRef = this.stencilRef), 255 !== this.stencilFuncMask && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== nT && (n.stencilFail = this.stencilFail), this.stencilZFail !== nT && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== nT && (n.stencilZPass = this.stencilZPass), !0 === this.stencilWrite && (n.stencilWrite = this.stencilWrite), void 0 !== this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), !0 === this.polygonOffset && (n.polygonOffset = !0), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), !0 === this.dithering && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.alphaHash && (n.alphaHash = !0), !0 === this.alphaToCoverage && (n.alphaToCoverage = !0), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = !0), !0 === this.forceSinglePass && (n.forceSinglePass = !0), !0 === this.wireframe && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.flatShading && (n.flatShading = !0), !1 === this.visible && (n.visible = !1), !1 === this.toneMapped && (n.toneMapped = !1), !1 === this.fog && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData), t) {
                                let t = i(e.textures),
                                    r = i(e.images);
                                t.length > 0 && (n.textures = t), r.length > 0 && (n.images = r)
                            }
                            return n
                        }
                        clone() {
                            return new this.constructor().copy(this)
                        }
                        copy(e) {
                            this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
                            let t = e.clippingPlanes,
                                n = null;
                            if (null !== t) {
                                let e = t.length;
                                n = Array(e);
                                for (let i = 0; i !== e; ++i) n[i] = t[i].clone()
                            }
                            return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this
                        }
                        dispose() {
                            this.dispatchEvent({
                                type: "dispose"
                            })
                        }
                        set needsUpdate(e) {
                            !0 === e && this.version++
                        }
                        onBuild() {
                            console.warn("Material: onBuild() has been removed.")
                        }
                        constructor() {
                            super(), this.isMaterial = !0, Object.defineProperty(this, "id", {
                                value: au++
                            }), this.uuid = nY(), this.name = "", this.type = "Material", this.blending = eC, this.side = eT, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = eV, this.blendDst = eW, this.blendEquation = eI, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new al(0, 0, 0), this.blendAlpha = 0, this.depthFunc = e3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = nA, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = nT, this.stencilZFail = nT, this.stencilZPass = nT, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0
                        }
                    }
                }),
                aU = h(() => {
                    aC(), nX(), aR(), ae(), ad = class extends ac {
                        copy(e) {
                            return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this
                        }
                        constructor(e) {
                            super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new al(0xffffff), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new rR, this.combine = e9, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e)
                        }
                    }
                }),
                aP = h(() => {
                    i0(), ig(), im(), nX(), ap = new iV, af = new ic, am = 0, ag = class {
                        onUploadCallback() {}
                        set needsUpdate(e) {
                            !0 === e && this.version++
                        }
                        setUsage(e) {
                            return this.usage = e, this
                        }
                        addUpdateRange(e, t) {
                            this.updateRanges.push({
                                start: e,
                                count: t
                            })
                        }
                        clearUpdateRanges() {
                            this.updateRanges.length = 0
                        }
                        copy(e) {
                            return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this
                        }
                        copyAt(e, t, n) {
                            e *= this.itemSize, n *= t.itemSize;
                            for (let i = 0, r = this.itemSize; i < r; i++) this.array[e + i] = t.array[n + i];
                            return this
                        }
                        copyArray(e) {
                            return this.array.set(e), this
                        }
                        applyMatrix3(e) {
                            if (2 === this.itemSize)
                                for (let t = 0, n = this.count; t < n; t++) af.fromBufferAttribute(this, t), af.applyMatrix3(e), this.setXY(t, af.x, af.y);
                            else if (3 === this.itemSize)
                                for (let t = 0, n = this.count; t < n; t++) ap.fromBufferAttribute(this, t), ap.applyMatrix3(e), this.setXYZ(t, ap.x, ap.y, ap.z);
                            return this
                        }
                        applyMatrix4(e) {
                            for (let t = 0, n = this.count; t < n; t++) ap.fromBufferAttribute(this, t), ap.applyMatrix4(e), this.setXYZ(t, ap.x, ap.y, ap.z);
                            return this
                        }
                        applyNormalMatrix(e) {
                            for (let t = 0, n = this.count; t < n; t++) ap.fromBufferAttribute(this, t), ap.applyNormalMatrix(e), this.setXYZ(t, ap.x, ap.y, ap.z);
                            return this
                        }
                        transformDirection(e) {
                            for (let t = 0, n = this.count; t < n; t++) ap.fromBufferAttribute(this, t), ap.transformDirection(e), this.setXYZ(t, ap.x, ap.y, ap.z);
                            return this
                        }
                        set(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return this.array.set(e, t), this
                        }
                        getComponent(e, t) {
                            let n = this.array[e * this.itemSize + t];
                            return this.normalized && (n = ir(n, this.array)), n
                        }
                        setComponent(e, t, n) {
                            return this.normalized && (n = ia(n, this.array)), this.array[e * this.itemSize + t] = n, this
                        }
                        getX(e) {
                            let t = this.array[e * this.itemSize];
                            return this.normalized && (t = ir(t, this.array)), t
                        }
                        setX(e, t) {
                            return this.normalized && (t = ia(t, this.array)), this.array[e * this.itemSize] = t, this
                        }
                        getY(e) {
                            let t = this.array[e * this.itemSize + 1];
                            return this.normalized && (t = ir(t, this.array)), t
                        }
                        setY(e, t) {
                            return this.normalized && (t = ia(t, this.array)), this.array[e * this.itemSize + 1] = t, this
                        }
                        getZ(e) {
                            let t = this.array[e * this.itemSize + 2];
                            return this.normalized && (t = ir(t, this.array)), t
                        }
                        setZ(e, t) {
                            return this.normalized && (t = ia(t, this.array)), this.array[e * this.itemSize + 2] = t, this
                        }
                        getW(e) {
                            let t = this.array[e * this.itemSize + 3];
                            return this.normalized && (t = ir(t, this.array)), t
                        }
                        setW(e, t) {
                            return this.normalized && (t = ia(t, this.array)), this.array[e * this.itemSize + 3] = t, this
                        }
                        setXY(e, t, n) {
                            return e *= this.itemSize, this.normalized && (t = ia(t, this.array), n = ia(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this
                        }
                        setXYZ(e, t, n, i) {
                            return e *= this.itemSize, this.normalized && (t = ia(t, this.array), n = ia(n, this.array), i = ia(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this
                        }
                        setXYZW(e, t, n, i, r) {
                            return e *= this.itemSize, this.normalized && (t = ia(t, this.array), n = ia(n, this.array), i = ia(i, this.array), r = ia(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this
                        }
                        onUpload(e) {
                            return this.onUploadCallback = e, this
                        }
                        clone() {
                            return new this.constructor(this.array, this.itemSize).copy(this)
                        }
                        toJSON() {
                            let e = {
                                itemSize: this.itemSize,
                                type: this.array.constructor.name,
                                array: Array.from(this.array),
                                normalized: this.normalized
                            };
                            return "" !== this.name && (e.name = this.name), this.usage !== nN && (e.usage = this.usage), e
                        }
                        constructor(e, t, n = !1) {
                            if (Array.isArray(e)) throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
                            this.isBufferAttribute = !0, Object.defineProperty(this, "id", {
                                value: am++
                            }), this.name = "", this.array = e, this.itemSize = t, this.count = void 0 !== e ? e.length / t : 0, this.normalized = n, this.usage = nN, this.updateRanges = [], this.gpuType = tU, this.version = 0
                        }
                    }, av = class extends ag {
                        constructor(e, t, n) {
                            super(new Uint16Array(e), t, n)
                        }
                    }, a_ = class extends ag {
                        constructor(e, t, n) {
                            super(new Uint32Array(e), t, n)
                        }
                    }, ax = class extends ag {
                        constructor(e, t, n) {
                            super(new Float32Array(e), t, n)
                        }
                    }
                }),
                aL = h(() => {
                    i0(), ig(), r6(), nj(), aP(), r8(), an(), r7(), iv(), im(), iE(), aM = 0, ay = new r_, aE = new rX, aS = new iV, ab = new i2, aT = new i2, aA = new iV, aw = class e extends nz {
                        getIndex() {
                            return this.index
                        }
                        setIndex(e) {
                            return Array.isArray(e) ? this.index = new(i_(e) ? a_ : av)(e, 1) : this.index = e, this
                        }
                        setIndirect(e) {
                            return this.indirect = e, this
                        }
                        getIndirect() {
                            return this.indirect
                        }
                        getAttribute(e) {
                            return this.attributes[e]
                        }
                        setAttribute(e, t) {
                            return this.attributes[e] = t, this
                        }
                        deleteAttribute(e) {
                            return delete this.attributes[e], this
                        }
                        hasAttribute(e) {
                            return void 0 !== this.attributes[e]
                        }
                        addGroup(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            this.groups.push({
                                start: e,
                                count: t,
                                materialIndex: n
                            })
                        }
                        clearGroups() {
                            this.groups = []
                        }
                        setDrawRange(e, t) {
                            this.drawRange.start = e, this.drawRange.count = t
                        }
                        applyMatrix4(e) {
                            let t = this.attributes.position;
                            void 0 !== t && (t.applyMatrix4(e), t.needsUpdate = !0);
                            let n = this.attributes.normal;
                            if (void 0 !== n) {
                                let t = new id().getNormalMatrix(e);
                                n.applyNormalMatrix(t), n.needsUpdate = !0
                            }
                            let i = this.attributes.tangent;
                            return void 0 !== i && (i.transformDirection(e), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
                        }
                        applyQuaternion(e) {
                            return ay.makeRotationFromQuaternion(e), this.applyMatrix4(ay), this
                        }
                        rotateX(e) {
                            return ay.makeRotationX(e), this.applyMatrix4(ay), this
                        }
                        rotateY(e) {
                            return ay.makeRotationY(e), this.applyMatrix4(ay), this
                        }
                        rotateZ(e) {
                            return ay.makeRotationZ(e), this.applyMatrix4(ay), this
                        }
                        translate(e, t, n) {
                            return ay.makeTranslation(e, t, n), this.applyMatrix4(ay), this
                        }
                        scale(e, t, n) {
                            return ay.makeScale(e, t, n), this.applyMatrix4(ay), this
                        }
                        lookAt(e) {
                            return aE.lookAt(e), aE.updateMatrix(), this.applyMatrix4(aE.matrix), this
                        }
                        center() {
                            return this.computeBoundingBox(), this.boundingBox.getCenter(aS).negate(), this.translate(aS.x, aS.y, aS.z), this
                        }
                        setFromPoints(e) {
                            let t = this.getAttribute("position");
                            if (void 0 === t) {
                                let t = [];
                                for (let n = 0, i = e.length; n < i; n++) {
                                    let i = e[n];
                                    t.push(i.x, i.y, i.z || 0)
                                }
                                this.setAttribute("position", new ax(t, 3))
                            } else {
                                let n = Math.min(e.length, t.count);
                                for (let i = 0; i < n; i++) {
                                    let n = e[i];
                                    t.setXYZ(i, n.x, n.y, n.z || 0)
                                }
                                e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0
                            }
                            return this
                        }
                        computeBoundingBox() {
                            null === this.boundingBox && (this.boundingBox = new i2);
                            let e = this.attributes.position,
                                t = this.morphAttributes.position;
                            if (e && e.isGLBufferAttribute) {
                                console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new iV(-1 / 0, -1 / 0, -1 / 0), new iV(1 / 0, 1 / 0, 1 / 0));
                                return
                            }
                            if (void 0 !== e) {
                                if (this.boundingBox.setFromBufferAttribute(e), t)
                                    for (let e = 0, n = t.length; e < n; e++) {
                                        let n = t[e];
                                        ab.setFromBufferAttribute(n), this.morphTargetsRelative ? (aA.addVectors(this.boundingBox.min, ab.min), this.boundingBox.expandByPoint(aA), aA.addVectors(this.boundingBox.max, ab.max), this.boundingBox.expandByPoint(aA)) : (this.boundingBox.expandByPoint(ab.min), this.boundingBox.expandByPoint(ab.max))
                                    }
                            } else this.boundingBox.makeEmpty();
                            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
                        }
                        computeBoundingSphere() {
                            null === this.boundingSphere && (this.boundingSphere = new rh);
                            let e = this.attributes.position,
                                t = this.morphAttributes.position;
                            if (e && e.isGLBufferAttribute) {
                                console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new iV, 1 / 0);
                                return
                            }
                            if (e) {
                                let n = this.boundingSphere.center;
                                if (ab.setFromBufferAttribute(e), t)
                                    for (let e = 0, n = t.length; e < n; e++) {
                                        let n = t[e];
                                        aT.setFromBufferAttribute(n), this.morphTargetsRelative ? (aA.addVectors(ab.min, aT.min), ab.expandByPoint(aA), aA.addVectors(ab.max, aT.max), ab.expandByPoint(aA)) : (ab.expandByPoint(aT.min), ab.expandByPoint(aT.max))
                                    }
                                ab.getCenter(n);
                                let i = 0;
                                for (let t = 0, r = e.count; t < r; t++) aA.fromBufferAttribute(e, t), i = Math.max(i, n.distanceToSquared(aA));
                                if (t)
                                    for (let r = 0, a = t.length; r < a; r++) {
                                        let a = t[r],
                                            s = this.morphTargetsRelative;
                                        for (let t = 0, r = a.count; t < r; t++) aA.fromBufferAttribute(a, t), s && (aS.fromBufferAttribute(e, t), aA.add(aS)), i = Math.max(i, n.distanceToSquared(aA))
                                    }
                                this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                            }
                        }
                        computeTangents() {
                            let e = this.index,
                                t = this.attributes;
                            if (null === e || void 0 === t.position || void 0 === t.normal || void 0 === t.uv) {
                                console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
                                return
                            }
                            let n = t.position,
                                i = t.normal,
                                r = t.uv;
                            !1 === this.hasAttribute("tangent") && this.setAttribute("tangent", new ag(new Float32Array(4 * n.count), 4));
                            let a = this.getAttribute("tangent"),
                                s = [],
                                o = [];
                            for (let e = 0; e < n.count; e++) s[e] = new iV, o[e] = new iV;
                            let l = new iV,
                                h = new iV,
                                u = new iV,
                                c = new ic,
                                d = new ic,
                                p = new ic,
                                f = new iV,
                                m = new iV,
                                g = this.groups;
                            0 === g.length && (g = [{
                                start: 0,
                                count: e.count
                            }]);
                            for (let t = 0, i = g.length; t < i; ++t) {
                                let i = g[t],
                                    a = i.start,
                                    v = i.count;
                                for (let t = a, i = a + v; t < i; t += 3)(function(e, t, i) {
                                    l.fromBufferAttribute(n, e), h.fromBufferAttribute(n, t), u.fromBufferAttribute(n, i), c.fromBufferAttribute(r, e), d.fromBufferAttribute(r, t), p.fromBufferAttribute(r, i), h.sub(l), u.sub(l), d.sub(c), p.sub(c);
                                    let a = 1 / (d.x * p.y - p.x * d.y);
                                    isFinite(a) && (f.copy(h).multiplyScalar(p.y).addScaledVector(u, -d.y).multiplyScalar(a), m.copy(u).multiplyScalar(d.x).addScaledVector(h, -p.x).multiplyScalar(a), s[e].add(f), s[t].add(f), s[i].add(f), o[e].add(m), o[t].add(m), o[i].add(m))
                                })(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2))
                            }
                            let v = new iV,
                                _ = new iV,
                                x = new iV,
                                M = new iV;

                            function y(e) {
                                x.fromBufferAttribute(i, e), M.copy(x);
                                let t = s[e];
                                v.copy(t), v.sub(x.multiplyScalar(x.dot(t))).normalize(), _.crossVectors(M, t);
                                let n = 0 > _.dot(o[e]) ? -1 : 1;
                                a.setXYZW(e, v.x, v.y, v.z, n)
                            }
                            for (let t = 0, n = g.length; t < n; ++t) {
                                let n = g[t],
                                    i = n.start,
                                    r = n.count;
                                for (let t = i, n = i + r; t < n; t += 3) y(e.getX(t + 0)), y(e.getX(t + 1)), y(e.getX(t + 2))
                            }
                        }
                        computeVertexNormals() {
                            let e = this.index,
                                t = this.getAttribute("position");
                            if (void 0 !== t) {
                                let n = this.getAttribute("normal");
                                if (void 0 === n) n = new ag(new Float32Array(3 * t.count), 3), this.setAttribute("normal", n);
                                else
                                    for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
                                let i = new iV,
                                    r = new iV,
                                    a = new iV,
                                    s = new iV,
                                    o = new iV,
                                    l = new iV,
                                    h = new iV,
                                    u = new iV;
                                if (e)
                                    for (let c = 0, d = e.count; c < d; c += 3) {
                                        let d = e.getX(c + 0),
                                            p = e.getX(c + 1),
                                            f = e.getX(c + 2);
                                        i.fromBufferAttribute(t, d), r.fromBufferAttribute(t, p), a.fromBufferAttribute(t, f), h.subVectors(a, r), u.subVectors(i, r), h.cross(u), s.fromBufferAttribute(n, d), o.fromBufferAttribute(n, p), l.fromBufferAttribute(n, f), s.add(h), o.add(h), l.add(h), n.setXYZ(d, s.x, s.y, s.z), n.setXYZ(p, o.x, o.y, o.z), n.setXYZ(f, l.x, l.y, l.z)
                                    } else
                                        for (let e = 0, s = t.count; e < s; e += 3) i.fromBufferAttribute(t, e + 0), r.fromBufferAttribute(t, e + 1), a.fromBufferAttribute(t, e + 2), h.subVectors(a, r), u.subVectors(i, r), h.cross(u), n.setXYZ(e + 0, h.x, h.y, h.z), n.setXYZ(e + 1, h.x, h.y, h.z), n.setXYZ(e + 2, h.x, h.y, h.z);
                                this.normalizeNormals(), n.needsUpdate = !0
                            }
                        }
                        normalizeNormals() {
                            let e = this.attributes.normal;
                            for (let t = 0, n = e.count; t < n; t++) aA.fromBufferAttribute(e, t), aA.normalize(), e.setXYZ(t, aA.x, aA.y, aA.z)
                        }
                        toNonIndexed() {
                            function t(e, t) {
                                let n = e.array,
                                    i = e.itemSize,
                                    r = e.normalized,
                                    a = new n.constructor(t.length * i),
                                    s = 0,
                                    o = 0;
                                for (let r = 0, l = t.length; r < l; r++) {
                                    s = e.isInterleavedBufferAttribute ? t[r] * e.data.stride + e.offset : t[r] * i;
                                    for (let e = 0; e < i; e++) a[o++] = n[s++]
                                }
                                return new ag(a, i, r)
                            }
                            if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
                            let n = new e,
                                i = this.index.array,
                                r = this.attributes;
                            for (let e in r) {
                                let a = t(r[e], i);
                                n.setAttribute(e, a)
                            }
                            let a = this.morphAttributes;
                            for (let e in a) {
                                let r = [],
                                    s = a[e];
                                for (let e = 0, n = s.length; e < n; e++) {
                                    let n = t(s[e], i);
                                    r.push(n)
                                }
                                n.morphAttributes[e] = r
                            }
                            n.morphTargetsRelative = this.morphTargetsRelative;
                            let s = this.groups;
                            for (let e = 0, t = s.length; e < t; e++) {
                                let t = s[e];
                                n.addGroup(t.start, t.count, t.materialIndex)
                            }
                            return n
                        }
                        toJSON() {
                            let e = {
                                metadata: {
                                    version: 4.6,
                                    type: "BufferGeometry",
                                    generator: "BufferGeometry.toJSON"
                                }
                            };
                            if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), void 0 !== this.parameters) {
                                let t = this.parameters;
                                for (let n in t) void 0 !== t[n] && (e[n] = t[n]);
                                return e
                            }
                            e.data = {
                                attributes: {}
                            };
                            let t = this.index;
                            null !== t && (e.data.index = {
                                type: t.array.constructor.name,
                                array: Array.prototype.slice.call(t.array)
                            });
                            let n = this.attributes;
                            for (let t in n) {
                                let i = n[t];
                                e.data.attributes[t] = i.toJSON(e.data)
                            }
                            let i = {},
                                r = !1;
                            for (let t in this.morphAttributes) {
                                let n = this.morphAttributes[t],
                                    a = [];
                                for (let t = 0, i = n.length; t < i; t++) {
                                    let i = n[t];
                                    a.push(i.toJSON(e.data))
                                }
                                a.length > 0 && (i[t] = a, r = !0)
                            }
                            r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
                            let a = this.groups;
                            a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
                            let s = this.boundingSphere;
                            return null !== s && (e.data.boundingSphere = {
                                center: s.center.toArray(),
                                radius: s.radius
                            }), e
                        }
                        clone() {
                            return new this.constructor().copy(this)
                        }
                        copy(e) {
                            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
                            let t = {};
                            this.name = e.name;
                            let n = e.index;
                            null !== n && this.setIndex(n.clone(t));
                            let i = e.attributes;
                            for (let e in i) {
                                let n = i[e];
                                this.setAttribute(e, n.clone(t))
                            }
                            let r = e.morphAttributes;
                            for (let e in r) {
                                let n = [],
                                    i = r[e];
                                for (let e = 0, r = i.length; e < r; e++) n.push(i[e].clone(t));
                                this.morphAttributes[e] = n
                            }
                            this.morphTargetsRelative = e.morphTargetsRelative;
                            let a = e.groups;
                            for (let e = 0, t = a.length; e < t; e++) {
                                let t = a[e];
                                this.addGroup(t.start, t.count, t.materialIndex)
                            }
                            let s = e.boundingBox;
                            null !== s && (this.boundingBox = s.clone());
                            let o = e.boundingSphere;
                            return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this
                        }
                        dispose() {
                            this.dispatchEvent({
                                type: "dispose"
                            })
                        }
                        constructor() {
                            super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", {
                                value: aM++
                            }), this.uuid = nY(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
                                start: 0,
                                count: 1 / 0
                            }, this.userData = {}
                        }
                    }
                });

            function aD(e, t, n, i, r, a, s, o, l, h) {
                e.getVertexPosition(o, aB), e.getVertexPosition(l, az), e.getVertexPosition(h, aG);
                let u = function(e, t, n, i, r, a, s, o) {
                    if (null === (t.side === eA ? i.intersectTriangle(s, a, r, !0, o) : i.intersectTriangle(r, a, s, t.side === eT, o))) return null;
                    aW.copy(o), aW.applyMatrix4(e.matrixWorld);
                    let l = n.ray.origin.distanceTo(aW);
                    return l < n.near || l > n.far ? null : {
                        distance: l,
                        point: aW.clone(),
                        object: e
                    }
                }(e, t, n, i, aB, az, aG, aV);
                if (u) {
                    let e = new iV;
                    r5.getBarycoord(aV, aB, az, aG, e), r && (u.uv = r5.getInterpolatedAttribute(r, o, l, h, e, new ic)), a && (u.uv1 = r5.getInterpolatedAttribute(a, o, l, h, e, new ic)), s && (u.normal = r5.getInterpolatedAttribute(s, o, l, h, e, new iV), u.normal.dot(i.direction) > 0 && u.normal.multiplyScalar(-1));
                    let t = {
                        a: o,
                        b: l,
                        c: h,
                        normal: new iV,
                        materialIndex: 0
                    };
                    r5.getNormal(aB, az, aG, t.normal), u.face = t, u.barycoord = e
                }
                return u
            }
            var aI, aN, aO, aF, aB, az, aG, aH, ak, aV, aW, aX, aj, aY = h(() => {
                    i0(), ig(), r8(), r9(), r7(), an(), ai(), nX(), aU(), aL(), aI = new r_, aN = new rv, aO = new rh, aF = new iV, aB = new iV, az = new iV, aG = new iV, aH = new iV, ak = new iV, aV = new iV, aW = new iV, aX = class extends rX {
                        copy(e, t) {
                            return super.copy(e, t), void 0 !== e.morphTargetInfluences && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), void 0 !== e.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this
                        }
                        updateMorphTargets() {
                            let e = this.geometry.morphAttributes,
                                t = Object.keys(e);
                            if (t.length > 0) {
                                let n = e[t[0]];
                                if (void 0 !== n) {
                                    this.morphTargetInfluences = [], this.morphTargetDictionary = {};
                                    for (let e = 0, t = n.length; e < t; e++) {
                                        let t = n[e].name || String(e);
                                        this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e
                                    }
                                }
                            }
                        }
                        getVertexPosition(e, t) {
                            let n = this.geometry,
                                i = n.attributes.position,
                                r = n.morphAttributes.position,
                                a = n.morphTargetsRelative;
                            t.fromBufferAttribute(i, e);
                            let s = this.morphTargetInfluences;
                            if (r && s) {
                                ak.set(0, 0, 0);
                                for (let n = 0, i = r.length; n < i; n++) {
                                    let i = s[n],
                                        o = r[n];
                                    0 !== i && (aH.fromBufferAttribute(o, e), a ? ak.addScaledVector(aH, i) : ak.addScaledVector(aH.sub(t), i))
                                }
                                t.add(ak)
                            }
                            return t
                        }
                        raycast(e, t) {
                            let n = this.geometry,
                                i = this.material,
                                r = this.matrixWorld;
                            void 0 === i || (null === n.boundingSphere && n.computeBoundingSphere(), aO.copy(n.boundingSphere), aO.applyMatrix4(r), aN.copy(e.ray).recast(e.near), !1 === aO.containsPoint(aN.origin) && (null === aN.intersectSphere(aO, aF) || aN.origin.distanceToSquared(aF) > (e.far - e.near) ** 2) || (aI.copy(r).invert(), aN.copy(e.ray).applyMatrix4(aI), null !== n.boundingBox && !1 === aN.intersectsBox(n.boundingBox) || this._computeIntersections(e, t, aN)))
                        }
                        _computeIntersections(e, t, n) {
                            let i, r = this.geometry,
                                a = this.material,
                                s = r.index,
                                o = r.attributes.position,
                                l = r.attributes.uv,
                                h = r.attributes.uv1,
                                u = r.attributes.normal,
                                c = r.groups,
                                d = r.drawRange;
                            if (null !== s) {
                                if (Array.isArray(a))
                                    for (let r = 0, o = c.length; r < o; r++) {
                                        let o = c[r],
                                            p = a[o.materialIndex],
                                            f = Math.max(o.start, d.start),
                                            m = Math.min(s.count, Math.min(o.start + o.count, d.start + d.count));
                                        for (let r = f; r < m; r += 3)(i = aD(this, p, e, n, l, h, u, s.getX(r), s.getX(r + 1), s.getX(r + 2))) && (i.faceIndex = Math.floor(r / 3), i.face.materialIndex = o.materialIndex, t.push(i))
                                    } else {
                                        let r = Math.max(0, d.start),
                                            o = Math.min(s.count, d.start + d.count);
                                        for (let c = r; c < o; c += 3)(i = aD(this, a, e, n, l, h, u, s.getX(c), s.getX(c + 1), s.getX(c + 2))) && (i.faceIndex = Math.floor(c / 3), t.push(i))
                                    }
                            } else if (void 0 !== o) {
                                if (Array.isArray(a))
                                    for (let r = 0, s = c.length; r < s; r++) {
                                        let s = c[r],
                                            p = a[s.materialIndex],
                                            f = Math.max(s.start, d.start),
                                            m = Math.min(o.count, Math.min(s.start + s.count, d.start + d.count));
                                        for (let r = f; r < m; r += 3)(i = aD(this, p, e, n, l, h, u, r, r + 1, r + 2)) && (i.faceIndex = Math.floor(r / 3), i.face.materialIndex = s.materialIndex, t.push(i))
                                    } else {
                                        let r = Math.max(0, d.start),
                                            s = Math.min(o.count, d.start + d.count);
                                        for (let o = r; o < s; o += 3)(i = aD(this, a, e, n, l, h, u, o, o + 1, o + 2)) && (i.faceIndex = Math.floor(o / 3), t.push(i))
                                    }
                            }
                        }
                        constructor(e = new aw, t = new ad) {
                            super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets()
                        }
                    }
                }),
                aq = h(() => {
                    aL(), aP(), i0(), aj = class e extends aw {
                        copy(e) {
                            return super.copy(e), this.parameters = Object.assign({}, e.parameters), this
                        }
                        static fromJSON(t) {
                            return new e(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments)
                        }
                        constructor(e = 1, t = 1, n = 1, i = 1, r = 1, a = 1) {
                            super(), this.type = "BoxGeometry", this.parameters = {
                                width: e,
                                height: t,
                                depth: n,
                                widthSegments: i,
                                heightSegments: r,
                                depthSegments: a
                            };
                            let s = this;
                            i = Math.floor(i), r = Math.floor(r);
                            let o = [],
                                l = [],
                                h = [],
                                u = [],
                                c = 0,
                                d = 0;

                            function p(e, t, n, i, r, a, p, f, m, g, v) {
                                let _ = a / m,
                                    x = p / g,
                                    M = a / 2,
                                    y = p / 2,
                                    E = f / 2,
                                    S = m + 1,
                                    b = g + 1,
                                    T = 0,
                                    A = 0,
                                    w = new iV;
                                for (let a = 0; a < b; a++) {
                                    let s = a * x - y;
                                    for (let o = 0; o < S; o++) {
                                        let c = o * _ - M;
                                        w[e] = c * i, w[t] = s * r, w[n] = E, l.push(w.x, w.y, w.z), w[e] = 0, w[t] = 0, w[n] = f > 0 ? 1 : -1, h.push(w.x, w.y, w.z), u.push(o / m), u.push(1 - a / g), T += 1
                                    }
                                }
                                for (let e = 0; e < g; e++)
                                    for (let t = 0; t < m; t++) {
                                        let n = c + t + S * e,
                                            i = c + t + S * (e + 1),
                                            r = c + (t + 1) + S * (e + 1),
                                            a = c + (t + 1) + S * e;
                                        o.push(n, i, a), o.push(i, r, a), A += 6
                                    }
                                s.addGroup(d, A, v), d += A, c += T
                            }
                            p("z", "y", "x", -1, -1, n, t, e, a = Math.floor(a), r, 0), p("z", "y", "x", 1, -1, n, t, -e, a, r, 1), p("x", "z", "y", 1, 1, e, n, t, i, a, 2), p("x", "z", "y", 1, -1, e, n, -t, i, a, 3), p("x", "y", "z", 1, -1, e, t, n, i, r, 4), p("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(o), this.setAttribute("position", new ax(l, 3)), this.setAttribute("normal", new ax(h, 3)), this.setAttribute("uv", new ax(u, 2))
                        }
                    }
                });

            function aK(e) {
                let t = {};
                for (let n in e)
                    for (let i in t[n] = {}, e[n]) {
                        let r = e[n][i];
                        r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[n][i] = null) : t[n][i] = r.clone() : Array.isArray(r) ? t[n][i] = r.slice() : t[n][i] = r
                    }
                return t
            }

            function aZ(e) {
                let t = {};
                for (let n = 0; n < e.length; n++) {
                    let i = aK(e[n]);
                    for (let e in i) t[e] = i[e]
                }
                return t
            }

            function aJ(e) {
                let t = e.getRenderTarget();
                return null === t ? e.outputColorSpace : !0 === t.isXRRenderTarget ? t.texture.colorSpace : iw.workingColorSpace
            }
            var aQ, a$, a0, a1, a2, a3, a4, a5, a6, a8, a9, a7, se, st, sn, si, sr, sa, ss, so, sl, sh, su, sc, sd, sp, sf, sm, sg, sv = h(() => {
                    iU(), aQ = {
                        clone: aK,
                        merge: aZ
                    }
                }),
                s_ = h(() => {
                    a$ = "\nvoid main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n"
                }),
                sx = h(() => {
                    a0 = "\nvoid main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}\n"
                }),
                sM = h(() => {
                    aC(), sv(), s_(), sx(), a1 = class extends ac {
                        copy(e) {
                            return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = aK(e.uniforms), this.uniformsGroups = function(e) {
                                let t = [];
                                for (let n = 0; n < e.length; n++) t.push(e[n].clone());
                                return t
                            }(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this
                        }
                        toJSON(e) {
                            let t = super.toJSON(e);
                            for (let n in t.glslVersion = this.glslVersion, t.uniforms = {}, this.uniforms) {
                                let i = this.uniforms[n].value;
                                i && i.isTexture ? t.uniforms[n] = {
                                    type: "t",
                                    value: i.toJSON(e).uuid
                                } : i && i.isColor ? t.uniforms[n] = {
                                    type: "c",
                                    value: i.getHex()
                                } : i && i.isVector2 ? t.uniforms[n] = {
                                    type: "v2",
                                    value: i.toArray()
                                } : i && i.isVector3 ? t.uniforms[n] = {
                                    type: "v3",
                                    value: i.toArray()
                                } : i && i.isVector4 ? t.uniforms[n] = {
                                    type: "v4",
                                    value: i.toArray()
                                } : i && i.isMatrix3 ? t.uniforms[n] = {
                                    type: "m3",
                                    value: i.toArray()
                                } : i && i.isMatrix4 ? t.uniforms[n] = {
                                    type: "m4",
                                    value: i.toArray()
                                } : t.uniforms[n] = {
                                    value: i
                                }
                            }
                            Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
                            let n = {};
                            for (let e in this.extensions) !0 === this.extensions[e] && (n[e] = !0);
                            return Object.keys(n).length > 0 && (t.extensions = n), t
                        }
                        constructor(e) {
                            super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = a$, this.fragmentShader = a0, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
                                clipCullDistance: !1,
                                multiDraw: !1
                            }, this.defaultAttributeValues = {
                                color: [1, 1, 1],
                                uv: [0, 0],
                                uv1: [0, 0]
                            }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, void 0 !== e && this.setValues(e)
                        }
                    }
                }),
                sy = h(() => {
                    nX(), r7(), an(), a2 = class extends rX {
                        copy(e, t) {
                            return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this
                        }
                        getWorldDirection(e) {
                            return super.getWorldDirection(e).negate()
                        }
                        updateMatrixWorld(e) {
                            super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert()
                        }
                        updateWorldMatrix(e, t) {
                            super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert()
                        }
                        clone() {
                            return new this.constructor().copy(this)
                        }
                        constructor() {
                            super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new r_, this.projectionMatrix = new r_, this.projectionMatrixInverse = new r_, this.coordinateSystem = nF
                        }
                    }
                }),
                sE = h(() => {
                    sy(), im(), ig(), i0(), a3 = new iV, a4 = new ic, a5 = new ic, a6 = class extends a2 {
                        copy(e, t) {
                            return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = null === e.view ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this
                        }
                        setFocalLength(e) {
                            let t = .5 * this.getFilmHeight() / e;
                            this.fov = 2 * ih * Math.atan(t), this.updateProjectionMatrix()
                        }
                        getFocalLength() {
                            let e = Math.tan(.5 * il * this.fov);
                            return .5 * this.getFilmHeight() / e
                        }
                        getEffectiveFOV() {
                            return 2 * ih * Math.atan(Math.tan(.5 * il * this.fov) / this.zoom)
                        }
                        getFilmWidth() {
                            return this.filmGauge * Math.min(this.aspect, 1)
                        }
                        getFilmHeight() {
                            return this.filmGauge / Math.max(this.aspect, 1)
                        }
                        getViewBounds(e, t, n) {
                            a3.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), t.set(a3.x, a3.y).multiplyScalar(-e / a3.z), a3.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(a3.x, a3.y).multiplyScalar(-e / a3.z)
                        }
                        getViewSize(e, t) {
                            return this.getViewBounds(e, a4, a5), t.subVectors(a5, a4)
                        }
                        setViewOffset(e, t, n, i, r, a) {
                            this.aspect = e / t, null === this.view && (this.view = {
                                enabled: !0,
                                fullWidth: 1,
                                fullHeight: 1,
                                offsetX: 0,
                                offsetY: 0,
                                width: 1,
                                height: 1
                            }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
                        }
                        clearViewOffset() {
                            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
                        }
                        updateProjectionMatrix() {
                            let e = this.near,
                                t = e * Math.tan(.5 * il * this.fov) / this.zoom,
                                n = 2 * t,
                                i = this.aspect * n,
                                r = -.5 * i,
                                a = this.view;
                            if (null !== this.view && this.view.enabled) {
                                let e = a.fullWidth,
                                    s = a.fullHeight;
                                r += a.offsetX * i / e, t -= a.offsetY * n / s, i *= a.width / e, n *= a.height / s
                            }
                            let s = this.filmOffset;
                            0 !== s && (r += e * s / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
                        }
                        toJSON(e) {
                            let t = super.toJSON(e);
                            return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, null !== this.view && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t
                        }
                        constructor(e = 50, t = 1, n = .1, i = 2e3) {
                            super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
                        }
                    }
                }),
                sS = h(() => {
                    nX(), an(), sE(), a8 = class extends rX {
                        updateCoordinateSystem() {
                            let e = this.coordinateSystem,
                                t = this.children.concat(),
                                [n, i, r, a, s, o] = t;
                            for (let e of t) this.remove(e);
                            if (e === nF) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), s.up.set(0, 1, 0), s.lookAt(0, 0, 1), o.up.set(0, 1, 0), o.lookAt(0, 0, -1);
                            else if (e === nB) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), s.up.set(0, -1, 0), s.lookAt(0, 0, 1), o.up.set(0, -1, 0), o.lookAt(0, 0, -1);
                            else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
                            for (let e of t) this.add(e), e.updateMatrixWorld()
                        }
                        update(e, t) {
                            null === this.parent && this.updateMatrixWorld();
                            let {
                                renderTarget: n,
                                activeMipmapLevel: i
                            } = this;
                            this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
                            let [r, a, s, o, l, h] = this.children, u = e.getRenderTarget(), c = e.getActiveCubeFace(), d = e.getActiveMipmapLevel(), p = e.xr.enabled;
                            e.xr.enabled = !1;
                            let f = n.texture.generateMipmaps;
                            n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, r), e.setRenderTarget(n, 1, i), e.render(t, a), e.setRenderTarget(n, 2, i), e.render(t, s), e.setRenderTarget(n, 3, i), e.render(t, o), e.setRenderTarget(n, 4, i), e.render(t, l), n.texture.generateMipmaps = f, e.setRenderTarget(n, 5, i), e.render(t, h), e.setRenderTarget(u, c, d), e.xr.enabled = p, n.texture.needsPMREMUpdate = !0
                        }
                        constructor(e, t, n) {
                            super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
                            let i = new a6(-90, 1, e, t);
                            i.layers = this.layers, this.add(i);
                            let r = new a6(-90, 1, e, t);
                            r.layers = this.layers, this.add(r);
                            let a = new a6(-90, 1, e, t);
                            a.layers = this.layers, this.add(a);
                            let s = new a6(-90, 1, e, t);
                            s.layers = this.layers, this.add(s);
                            let o = new a6(-90, 1, e, t);
                            o.layers = this.layers, this.add(o);
                            let l = new a6(-90, 1, e, t);
                            l.layers = this.layers, this.add(l)
                        }
                    }
                }),
                sb = h(() => {
                    iY(), nX(), a9 = class extends iO {
                        get images() {
                            return this.image
                        }
                        set images(e) {
                            this.image = e
                        }
                        constructor(e, t, n, i, r, a, s, o, l, h) {
                            super(e = void 0 !== e ? e : [], t = void 0 !== t ? t : tu, n, i, r, a, s, o, l, h), this.isCubeTexture = !0, this.flipY = !1
                        }
                    }
                }),
                sT = h(() => {
                    nX(), aY(), aq(), sM(), sv(), iZ(), sS(), sb(), a7 = class extends iz {
                        fromEquirectangularTexture(e, t) {
                            this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
                            let n = new aj(5, 5, 5),
                                i = new a1({
                                    name: "CubemapFromEquirect",
                                    uniforms: aK({
                                        tEquirect: {
                                            value: null
                                        }
                                    }),
                                    vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			",
                                    fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			",
                                    side: eA,
                                    blending: eR
                                });
                            i.uniforms.tEquirect.value = t;
                            let r = new aX(n, i),
                                a = t.minFilter;
                            return t.minFilter === tS && (t.minFilter = ty), new a8(1, 10, this).update(e, r), t.minFilter = a, r.geometry.dispose(), r.material.dispose(), this
                        }
                        clear(e, t, n, i) {
                            let r = e.getRenderTarget();
                            for (let r = 0; r < 6; r++) e.setRenderTarget(this, r), e.clear(t, n, i);
                            e.setRenderTarget(r)
                        }
                        constructor(e = 1, t = {}) {
                            super(e, e, t), this.isWebGLCubeRenderTarget = !0;
                            let n = {
                                width: e,
                                height: e,
                                depth: 1
                            };
                            this.texture = new a9([n, n, n, n, n, n], t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = void 0 !== t.generateMipmaps && t.generateMipmaps, this.texture.minFilter = void 0 !== t.minFilter ? t.minFilter : ty
                        }
                    }
                }),
                sA = h(() => {
                    an(), se = class extends rX {
                        constructor() {
                            super(), this.isGroup = !0, this.type = "Group"
                        }
                    }
                }),
                sw = h(() => {
                    i0(), sA(), st = {
                        type: "move"
                    }, sn = class {
                        getHandSpace() {
                            return null === this._hand && (this._hand = new se, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = {
                                pinching: !1
                            }), this._hand
                        }
                        getTargetRaySpace() {
                            return null === this._targetRay && (this._targetRay = new se, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new iV, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new iV), this._targetRay
                        }
                        getGripSpace() {
                            return null === this._grip && (this._grip = new se, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new iV, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new iV), this._grip
                        }
                        dispatchEvent(e) {
                            return null !== this._targetRay && this._targetRay.dispatchEvent(e), null !== this._grip && this._grip.dispatchEvent(e), null !== this._hand && this._hand.dispatchEvent(e), this
                        }
                        connect(e) {
                            if (e && e.hand) {
                                let t = this._hand;
                                if (t)
                                    for (let n of e.hand.values()) this._getHandJoint(t, n)
                            }
                            return this.dispatchEvent({
                                type: "connected",
                                data: e
                            }), this
                        }
                        disconnect(e) {
                            return this.dispatchEvent({
                                type: "disconnected",
                                data: e
                            }), null !== this._targetRay && (this._targetRay.visible = !1), null !== this._grip && (this._grip.visible = !1), null !== this._hand && (this._hand.visible = !1), this
                        }
                        update(e, t, n) {
                            let i = null,
                                r = null,
                                a = null,
                                s = this._targetRay,
                                o = this._grip,
                                l = this._hand;
                            if (e && "visible-blurred" !== t.session.visibilityState) {
                                if (l && e.hand) {
                                    for (let i of (a = !0, e.hand.values())) {
                                        let e = t.getJointPose(i, n),
                                            r = this._getHandJoint(l, i);
                                        null !== e && (r.matrix.fromArray(e.transform.matrix), r.matrix.decompose(r.position, r.rotation, r.scale), r.matrixWorldNeedsUpdate = !0, r.jointRadius = e.radius), r.visible = null !== e
                                    }
                                    let i = l.joints["index-finger-tip"],
                                        r = l.joints["thumb-tip"],
                                        s = i.position.distanceTo(r.position);
                                    l.inputState.pinching && s > .025 ? (l.inputState.pinching = !1, this.dispatchEvent({
                                        type: "pinchend",
                                        handedness: e.handedness,
                                        target: this
                                    })) : !l.inputState.pinching && s <= .015 && (l.inputState.pinching = !0, this.dispatchEvent({
                                        type: "pinchstart",
                                        handedness: e.handedness,
                                        target: this
                                    }))
                                } else null !== o && e.gripSpace && null !== (r = t.getPose(e.gripSpace, n)) && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (o.hasLinearVelocity = !0, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = !1, r.angularVelocity ? (o.hasAngularVelocity = !0, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = !1);
                                null !== s && (null === (i = t.getPose(e.targetRaySpace, n)) && null !== r && (i = r), null !== i && (s.matrix.fromArray(i.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), s.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(i.linearVelocity)) : s.hasLinearVelocity = !1, i.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(i.angularVelocity)) : s.hasAngularVelocity = !1, this.dispatchEvent(st)))
                            }
                            return null !== s && (s.visible = null !== i), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== a), this
                        }
                        _getHandJoint(e, t) {
                            if (void 0 === e.joints[t.jointName]) {
                                let n = new se;
                                n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n)
                            }
                            return e.joints[t.jointName]
                        }
                        constructor() {
                            this._targetRay = null, this._grip = null, this._hand = null
                        }
                    }
                }),
                sR = h(() => {
                    an(), ae(), si = class extends rX {
                        copy(e, t) {
                            return super.copy(e, t), null !== e.background && (this.background = e.background.clone()), null !== e.environment && (this.environment = e.environment.clone()), null !== e.fog && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this
                        }
                        toJSON(e) {
                            let t = super.toJSON(e);
                            return null !== this.fog && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), 1 !== this.backgroundIntensity && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), 1 !== this.environmentIntensity && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t
                        }
                        constructor() {
                            super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new rR, this.environmentIntensity = 1, this.environmentRotation = new rR, this.overrideMaterial = null, "u" > typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                                detail: this
                            }))
                        }
                    }
                }),
                sC = h(() => {
                    im(), nX(), sr = class {
                        onUploadCallback() {}
                        set needsUpdate(e) {
                            !0 === e && this.version++
                        }
                        setUsage(e) {
                            return this.usage = e, this
                        }
                        addUpdateRange(e, t) {
                            this.updateRanges.push({
                                start: e,
                                count: t
                            })
                        }
                        clearUpdateRanges() {
                            this.updateRanges.length = 0
                        }
                        copy(e) {
                            return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this
                        }
                        copyAt(e, t, n) {
                            e *= this.stride, n *= t.stride;
                            for (let i = 0, r = this.stride; i < r; i++) this.array[e + i] = t.array[n + i];
                            return this
                        }
                        set(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                            return this.array.set(e, t), this
                        }
                        clone(e) {
                            void 0 === e.arrayBuffers && (e.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = nY()), void 0 === e.arrayBuffers[this.array.buffer._uuid] && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
                            let t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),
                                n = new this.constructor(t, this.stride);
                            return n.setUsage(this.usage), n
                        }
                        onUpload(e) {
                            return this.onUploadCallback = e, this
                        }
                        toJSON(e) {
                            return void 0 === e.arrayBuffers && (e.arrayBuffers = {}), void 0 === this.array.buffer._uuid && (this.array.buffer._uuid = nY()), void 0 === e.arrayBuffers[this.array.buffer._uuid] && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), {
                                uuid: this.uuid,
                                buffer: this.array.buffer._uuid,
                                type: this.array.constructor.name,
                                stride: this.stride
                            }
                        }
                        constructor(e, t) {
                            this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = void 0 !== e ? e.length / t : 0, this.usage = nN, this.updateRanges = [], this.version = 0, this.uuid = nY()
                        }
                    }
                }),
                sU = h(() => {
                    i0(), aP(), im(), sa = new iV, ss = class e {
                        get count() {
                            return this.data.count
                        }
                        get array() {
                            return this.data.array
                        }
                        set needsUpdate(e) {
                            this.data.needsUpdate = e
                        }
                        applyMatrix4(e) {
                            for (let t = 0, n = this.data.count; t < n; t++) sa.fromBufferAttribute(this, t), sa.applyMatrix4(e), this.setXYZ(t, sa.x, sa.y, sa.z);
                            return this
                        }
                        applyNormalMatrix(e) {
                            for (let t = 0, n = this.count; t < n; t++) sa.fromBufferAttribute(this, t), sa.applyNormalMatrix(e), this.setXYZ(t, sa.x, sa.y, sa.z);
                            return this
                        }
                        transformDirection(e) {
                            for (let t = 0, n = this.count; t < n; t++) sa.fromBufferAttribute(this, t), sa.transformDirection(e), this.setXYZ(t, sa.x, sa.y, sa.z);
                            return this
                        }
                        getComponent(e, t) {
                            let n = this.array[e * this.data.stride + this.offset + t];
                            return this.normalized && (n = ir(n, this.array)), n
                        }
                        setComponent(e, t, n) {
                            return this.normalized && (n = ia(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this
                        }
                        setX(e, t) {
                            return this.normalized && (t = ia(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this
                        }
                        setY(e, t) {
                            return this.normalized && (t = ia(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this
                        }
                        setZ(e, t) {
                            return this.normalized && (t = ia(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this
                        }
                        setW(e, t) {
                            return this.normalized && (t = ia(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this
                        }
                        getX(e) {
                            let t = this.data.array[e * this.data.stride + this.offset];
                            return this.normalized && (t = ir(t, this.array)), t
                        }
                        getY(e) {
                            let t = this.data.array[e * this.data.stride + this.offset + 1];
                            return this.normalized && (t = ir(t, this.array)), t
                        }
                        getZ(e) {
                            let t = this.data.array[e * this.data.stride + this.offset + 2];
                            return this.normalized && (t = ir(t, this.array)), t
                        }
                        getW(e) {
                            let t = this.data.array[e * this.data.stride + this.offset + 3];
                            return this.normalized && (t = ir(t, this.array)), t
                        }
                        setXY(e, t, n) {
                            return e = e * this.data.stride + this.offset, this.normalized && (t = ia(t, this.array), n = ia(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this
                        }
                        setXYZ(e, t, n, i) {
                            return e = e * this.data.stride + this.offset, this.normalized && (t = ia(t, this.array), n = ia(n, this.array), i = ia(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this
                        }
                        setXYZW(e, t, n, i, r) {
                            return e = e * this.data.stride + this.offset, this.normalized && (t = ia(t, this.array), n = ia(n, this.array), i = ia(i, this.array), r = ia(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this
                        }
                        clone(t) {
                            if (void 0 !== t) return void 0 === t.interleavedBuffers && (t.interleavedBuffers = {}), void 0 === t.interleavedBuffers[this.data.uuid] && (t.interleavedBuffers[this.data.uuid] = this.data.clone(t)), new e(t.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized); {
                                console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
                                let e = [];
                                for (let t = 0; t < this.count; t++) {
                                    let n = t * this.data.stride + this.offset;
                                    for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[n + t])
                                }
                                return new ag(new this.array.constructor(e), this.itemSize, this.normalized)
                            }
                        }
                        toJSON(e) {
                            if (void 0 !== e) return void 0 === e.interleavedBuffers && (e.interleavedBuffers = {}), void 0 === e.interleavedBuffers[this.data.uuid] && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), {
                                isInterleavedBufferAttribute: !0,
                                itemSize: this.itemSize,
                                data: this.data.uuid,
                                offset: this.offset,
                                normalized: this.normalized
                            }; {
                                console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
                                let e = [];
                                for (let t = 0; t < this.count; t++) {
                                    let n = t * this.data.stride + this.offset;
                                    for (let t = 0; t < this.itemSize; t++) e.push(this.data.array[n + t])
                                }
                                return {
                                    itemSize: this.itemSize,
                                    type: this.array.constructor.name,
                                    array: e,
                                    normalized: this.normalized
                                }
                            }
                        }
                        constructor(e, t, n, i = !1) {
                            this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i
                        }
                    }
                }),
                sP = h(() => {
                    iv(), i0(), so = new iV, sl = new iV, sh = new id, su = class {
                        set(e, t) {
                            return this.normal.copy(e), this.constant = t, this
                        }
                        setComponents(e, t, n, i) {
                            return this.normal.set(e, t, n), this.constant = i, this
                        }
                        setFromNormalAndCoplanarPoint(e, t) {
                            return this.normal.copy(e), this.constant = -t.dot(this.normal), this
                        }
                        setFromCoplanarPoints(e, t, n) {
                            let i = so.subVectors(n, t).cross(sl.subVectors(e, t)).normalize();
                            return this.setFromNormalAndCoplanarPoint(i, e), this
                        }
                        copy(e) {
                            return this.normal.copy(e.normal), this.constant = e.constant, this
                        }
                        normalize() {
                            let e = 1 / this.normal.length();
                            return this.normal.multiplyScalar(e), this.constant *= e, this
                        }
                        negate() {
                            return this.constant *= -1, this.normal.negate(), this
                        }
                        distanceToPoint(e) {
                            return this.normal.dot(e) + this.constant
                        }
                        distanceToSphere(e) {
                            return this.distanceToPoint(e.center) - e.radius
                        }
                        projectPoint(e, t) {
                            return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e))
                        }
                        intersectLine(e, t) {
                            let n = e.delta(so),
                                i = this.normal.dot(n);
                            if (0 === i) return 0 === this.distanceToPoint(e.start) ? t.copy(e.start) : null;
                            let r = -(e.start.dot(this.normal) + this.constant) / i;
                            return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r)
                        }
                        intersectsLine(e) {
                            let t = this.distanceToPoint(e.start),
                                n = this.distanceToPoint(e.end);
                            return t < 0 && n > 0 || n < 0 && t > 0
                        }
                        intersectsBox(e) {
                            return e.intersectsPlane(this)
                        }
                        intersectsSphere(e) {
                            return e.intersectsPlane(this)
                        }
                        coplanarPoint(e) {
                            return e.copy(this.normal).multiplyScalar(-this.constant)
                        }
                        applyMatrix4(e, t) {
                            let n = t || sh.getNormalMatrix(e),
                                i = this.coplanarPoint(so).applyMatrix4(e),
                                r = this.normal.applyMatrix3(n).normalize();
                            return this.constant = -i.dot(r), this
                        }
                        translate(e) {
                            return this.constant -= e.dot(this.normal), this
                        }
                        equals(e) {
                            return e.normal.equals(this.normal) && e.constant === this.constant
                        }
                        clone() {
                            return new this.constructor().copy(this)
                        }
                        constructor(e = new iV(1, 0, 0), t = 0) {
                            this.isPlane = !0, this.normal = e, this.constant = t
                        }
                    }
                }),
                sL = h(() => {
                    nX(), i0(), r8(), sP(), sc = new rh, sd = new iV, sp = class {
                        set(e, t, n, i, r, a) {
                            let s = this.planes;
                            return s[0].copy(e), s[1].copy(t), s[2].copy(n), s[3].copy(i), s[4].copy(r), s[5].copy(a), this
                        }
                        copy(e) {
                            let t = this.planes;
                            for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
                            return this
                        }
                        setFromProjectionMatrix(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nF,
                                n = this.planes,
                                i = e.elements,
                                r = i[0],
                                a = i[1],
                                s = i[2],
                                o = i[3],
                                l = i[4],
                                h = i[5],
                                u = i[6],
                                c = i[7],
                                d = i[8],
                                p = i[9],
                                f = i[10],
                                m = i[11],
                                g = i[12],
                                v = i[13],
                                _ = i[14],
                                x = i[15];
                            if (n[0].setComponents(o - r, c - l, m - d, x - g).normalize(), n[1].setComponents(o + r, c + l, m + d, x + g).normalize(), n[2].setComponents(o + a, c + h, m + p, x + v).normalize(), n[3].setComponents(o - a, c - h, m - p, x - v).normalize(), n[4].setComponents(o - s, c - u, m - f, x - _).normalize(), t === nF) n[5].setComponents(o + s, c + u, m + f, x + _).normalize();
                            else if (t === nB) n[5].setComponents(s, u, f, _).normalize();
                            else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
                            return this
                        }
                        intersectsObject(e) {
                            if (void 0 !== e.boundingSphere) null === e.boundingSphere && e.computeBoundingSphere(), sc.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
                            else {
                                let t = e.geometry;
                                null === t.boundingSphere && t.computeBoundingSphere(), sc.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)
                            }
                            return this.intersectsSphere(sc)
                        }
                        intersectsSprite(e) {
                            return sc.center.set(0, 0, 0), sc.radius = .7071067811865476, sc.applyMatrix4(e.matrixWorld), this.intersectsSphere(sc)
                        }
                        intersectsSphere(e) {
                            let t = this.planes,
                                n = e.center,
                                i = -e.radius;
                            for (let e = 0; e < 6; e++)
                                if (t[e].distanceToPoint(n) < i) return !1;
                            return !0
                        }
                        intersectsBox(e) {
                            let t = this.planes;
                            for (let n = 0; n < 6; n++) {
                                let i = t[n];
                                if (sd.x = i.normal.x > 0 ? e.max.x : e.min.x, sd.y = i.normal.y > 0 ? e.max.y : e.min.y, sd.z = i.normal.z > 0 ? e.max.z : e.min.z, 0 > i.distanceToPoint(sd)) return !1
                            }
                            return !0
                        }
                        containsPoint(e) {
                            let t = this.planes;
                            for (let n = 0; n < 6; n++)
                                if (0 > t[n].distanceToPoint(e)) return !1;
                            return !0
                        }
                        clone() {
                            return new this.constructor().copy(this)
                        }
                        constructor(e = new su, t = new su, n = new su, i = new su, r = new su, a = new su) {
                            this.planes = [e, t, n, i, r, a]
                        }
                    }
                }),
                sD = h(() => {
                    iY(), nX(), sf = class extends iO {
                        copy(e) {
                            return super.copy(e), this.compareFunction = e.compareFunction, this
                        }
                        toJSON(e) {
                            let t = super.toJSON(e);
                            return null !== this.compareFunction && (t.compareFunction = this.compareFunction), t
                        }
                        constructor(e, t, n, i, r, a, s, o, l, h = tH) {
                            if (h !== tH && h !== tk) throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
                            void 0 === n && h === tH && (n = tC), void 0 === n && h === tk && (n = tI), super(null, i, r, a, s, o, h, n, l), this.isDepthTexture = !0, this.image = {
                                width: e,
                                height: t
                            }, this.magFilter = void 0 !== s ? s : t_, this.minFilter = void 0 !== o ? o : t_, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null
                        }
                    }
                }),
                sI = h(() => {}),
                sN = h(() => {}),
                sO = h(() => {}),
                sF = h(() => {
                    aL(), aP(), i0(), ig(), sm = class e extends aw {
                        copy(e) {
                            return super.copy(e), this.parameters = Object.assign({}, e.parameters), this
                        }
                        static fromJSON(t) {
                            return new e(t.radius, t.segments, t.thetaStart, t.thetaLength)
                        }
                        constructor(e = 1, t = 32, n = 0, i = 2 * Math.PI) {
                            super(), this.type = "CircleGeometry", this.parameters = {
                                radius: e,
                                segments: t,
                                thetaStart: n,
                                thetaLength: i
                            }, t = Math.max(3, t);
                            let r = [],
                                a = [],
                                s = [],
                                o = [],
                                l = new iV,
                                h = new ic;
                            a.push(0, 0, 0), s.push(0, 0, 1), o.push(.5, .5);
                            for (let r = 0, u = 3; r <= t; r++, u += 3) {
                                let c = n + r / t * i;
                                l.x = e * Math.cos(c), l.y = e * Math.sin(c), a.push(l.x, l.y, l.z), s.push(0, 0, 1), h.x = (a[u] / e + 1) / 2, h.y = (a[u + 1] / e + 1) / 2, o.push(h.x, h.y)
                            }
                            for (let e = 1; e <= t; e++) r.push(e, e + 1, 0);
                            this.setIndex(r), this.setAttribute("position", new ax(a, 3)), this.setAttribute("normal", new ax(s, 3)), this.setAttribute("uv", new ax(o, 2))
                        }
                    }
                }),
                sB = h(() => {}),
                sz = h(() => {}),
                sG = h(() => {}),
                sH = h(() => {}),
                sk = h(() => {}),
                sV = h(() => {}),
                sW = h(() => {}),
                sX = h(() => {}),
                sj = h(() => {
                    aL(), aP(), sg = class e extends aw {
                        copy(e) {
                            return super.copy(e), this.parameters = Object.assign({}, e.parameters), this
                        }
                        static fromJSON(t) {
                            return new e(t.width, t.height, t.widthSegments, t.heightSegments)
                        }
                        constructor(e = 1, t = 1, n = 1, i = 1) {
                            super(), this.type = "PlaneGeometry", this.parameters = {
                                width: e,
                                height: t,
                                widthSegments: n,
                                heightSegments: i
                            };
                            let r = e / 2,
                                a = t / 2,
                                s = Math.floor(n),
                                o = Math.floor(i),
                                l = s + 1,
                                h = o + 1,
                                u = e / s,
                                c = t / o,
                                d = [],
                                p = [],
                                f = [],
                                m = [];
                            for (let e = 0; e < h; e++) {
                                let t = e * c - a;
                                for (let n = 0; n < l; n++) {
                                    let i = n * u - r;
                                    p.push(i, -t, 0), f.push(0, 0, 1), m.push(n / s), m.push(1 - e / o)
                                }
                            }
                            for (let e = 0; e < o; e++)
                                for (let t = 0; t < s; t++) {
                                    let n = t + l * e,
                                        i = t + l * (e + 1),
                                        r = t + 1 + l * (e + 1),
                                        a = t + 1 + l * e;
                                    d.push(n, i, a), d.push(i, r, a)
                                }
                            this.setIndex(d), this.setAttribute("position", new ax(p, 3)), this.setAttribute("normal", new ax(f, 3)), this.setAttribute("uv", new ax(m, 2))
                        }
                    }
                }),
                sY = h(() => {}),
                sq = h(() => {}),
                sK = h(() => {}),
                sZ = h(() => {}),
                sJ = h(() => {}),
                sQ = h(() => {}),
                s$ = h(() => {});

            function s0(e, t, n) {
                let i = "".concat(e.x, ",").concat(e.y, ",").concat(e.z, "-").concat(t.x, ",").concat(t.y, ",").concat(t.z),
                    r = "".concat(t.x, ",").concat(t.y, ",").concat(t.z, "-").concat(e.x, ",").concat(e.y, ",").concat(e.z);
                return !0 !== n.has(i) && !0 !== n.has(r) && (n.add(i), n.add(r), !0)
            }
            var s1, s2, s3, s4, s5, s6, s8, s9, s7, oe, ot, on, oi, or, oa, os = h(() => {
                    aL(), aP(), i0(), s1 = class extends aw {
                        copy(e) {
                            return super.copy(e), this.parameters = Object.assign({}, e.parameters), this
                        }
                        constructor(e = null) {
                            if (super(), this.type = "WireframeGeometry", this.parameters = {
                                    geometry: e
                                }, null !== e) {
                                let t = [],
                                    n = new Set,
                                    i = new iV,
                                    r = new iV;
                                if (null !== e.index) {
                                    let a = e.attributes.position,
                                        s = e.index,
                                        o = e.groups;
                                    0 === o.length && (o = [{
                                        start: 0,
                                        count: s.count,
                                        materialIndex: 0
                                    }]);
                                    for (let e = 0, l = o.length; e < l; ++e) {
                                        let l = o[e],
                                            h = l.start,
                                            u = l.count;
                                        for (let e = h, o = h + u; e < o; e += 3)
                                            for (let o = 0; o < 3; o++) {
                                                let l = s.getX(e + o),
                                                    h = s.getX(e + (o + 1) % 3);
                                                i.fromBufferAttribute(a, l), r.fromBufferAttribute(a, h), !0 === s0(i, r, n) && (t.push(i.x, i.y, i.z), t.push(r.x, r.y, r.z))
                                            }
                                    }
                                } else {
                                    let a = e.attributes.position;
                                    for (let e = 0, s = a.count / 3; e < s; e++)
                                        for (let s = 0; s < 3; s++) {
                                            let o = 3 * e + s,
                                                l = 3 * e + (s + 1) % 3;
                                            i.fromBufferAttribute(a, o), r.fromBufferAttribute(a, l), !0 === s0(i, r, n) && (t.push(i.x, i.y, i.z), t.push(r.x, r.y, r.z))
                                        }
                                }
                                this.setAttribute("position", new ax(t, 3))
                            }
                        }
                    }
                }),
                oo = h(() => {
                    aq(), sO(), sF(), sz(), sB(), sH(), sk(), sV(), sW(), sN(), sX(), sj(), sG(), sY(), sq(), sK(), sZ(), sJ(), sQ(), s$(), os()
                }),
                ol = h(() => {
                    aC(), nX(), s2 = class extends ac {
                        copy(e) {
                            return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
                        }
                        constructor(e) {
                            super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = ng, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e)
                        }
                    }
                }),
                oh = h(() => {
                    aC(), s3 = class extends ac {
                        copy(e) {
                            return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this
                        }
                        constructor(e) {
                            super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e)
                        }
                    }
                }),
                ou = h(() => {
                    sM(), aU()
                }),
                oc = h(() => {
                    s4 = {
                        enabled: !1,
                        files: {},
                        add: function(e, t) {
                            !1 !== this.enabled && (this.files[e] = t)
                        },
                        get: function(e) {
                            if (!1 !== this.enabled) return this.files[e]
                        },
                        remove: function(e) {
                            delete this.files[e]
                        },
                        clear: function() {
                            this.files = {}
                        }
                    }
                }),
                od = h(() => {
                    s5 = new class {
                        constructor(e, t, n) {
                            let i = this,
                                r = !1,
                                a = 0,
                                s = 0,
                                o, l = [];
                            this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(e) {
                                s++, !1 === r && void 0 !== i.onStart && i.onStart(e, a, s), r = !0
                            }, this.itemEnd = function(e) {
                                a++, void 0 !== i.onProgress && i.onProgress(e, a, s), a === s && (r = !1, void 0 !== i.onLoad && i.onLoad())
                            }, this.itemError = function(e) {
                                void 0 !== i.onError && i.onError(e)
                            }, this.resolveURL = function(e) {
                                return o ? o(e) : e
                            }, this.setURLModifier = function(e) {
                                return o = e, this
                            }, this.addHandler = function(e, t) {
                                return l.push(e, t), this
                            }, this.removeHandler = function(e) {
                                let t = l.indexOf(e);
                                return -1 !== t && l.splice(t, 2), this
                            }, this.getHandler = function(e) {
                                for (let t = 0, n = l.length; t < n; t += 2) {
                                    let n = l[t],
                                        i = l[t + 1];
                                    if (n.global && (n.lastIndex = 0), n.test(e)) return i
                                }
                                return null
                            }
                        }
                    }
                }),
                op = h(() => {
                    od(), s6 = class {
                        load() {}
                        loadAsync(e, t) {
                            let n = this;
                            return new Promise(function(i, r) {
                                n.load(e, i, t, r)
                            })
                        }
                        parse() {}
                        setCrossOrigin(e) {
                            return this.crossOrigin = e, this
                        }
                        setWithCredentials(e) {
                            return this.withCredentials = e, this
                        }
                        setPath(e) {
                            return this.path = e, this
                        }
                        setResourcePath(e) {
                            return this.resourcePath = e, this
                        }
                        setRequestHeader(e) {
                            return this.requestHeader = e, this
                        }
                        constructor(e) {
                            this.manager = void 0 !== e ? e : s5, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}
                        }
                    }, s6.DEFAULT_MATERIAL_NAME = "__DEFAULT"
                }),
                of = h(() => {
                    oc(), op(), iE(), s8 = class extends s6 {
                        load(e, t, n, i) {
                            void 0 !== this.path && (e = this.path + e), e = this.manager.resolveURL(e);
                            let r = this,
                                a = s4.get(e);
                            if (void 0 !== a) return r.manager.itemStart(e), setTimeout(function() {
                                t && t(a), r.manager.itemEnd(e)
                            }, 0), a;
                            let s = ix("img");

                            function o() {
                                h(), s4.add(e, this), t && t(this), r.manager.itemEnd(e)
                            }

                            function l(t) {
                                h(), i && i(t), r.manager.itemError(e), r.manager.itemEnd(e)
                            }

                            function h() {
                                s.removeEventListener("load", o, !1), s.removeEventListener("error", l, !1)
                            }
                            return s.addEventListener("load", o, !1), s.addEventListener("error", l, !1), "data:" !== e.slice(0, 5) && void 0 !== this.crossOrigin && (s.crossOrigin = this.crossOrigin), r.manager.itemStart(e), s.src = e, s
                        }
                        constructor(e) {
                            super(e)
                        }
                    }
                }),
                om = h(() => { of (), iY(), op(), s9 = class extends s6 {
                        load(e, t, n, i) {
                            let r = new iO,
                                a = new s8(this.manager);
                            return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(e) {
                                r.image = e, r.needsUpdate = !0, void 0 !== t && t(r)
                            }, n, i), r
                        }
                        constructor(e) {
                            super(e)
                        }
                    }
                }),
                og = h(() => {
                    sy(), s7 = class extends a2 {
                        copy(e, t) {
                            return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = null === e.view ? null : Object.assign({}, e.view), this
                        }
                        setViewOffset(e, t, n, i, r, a) {
                            null === this.view && (this.view = {
                                enabled: !0,
                                fullWidth: 1,
                                fullHeight: 1,
                                offsetX: 0,
                                offsetY: 0,
                                width: 1,
                                height: 1
                            }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix()
                        }
                        clearViewOffset() {
                            null !== this.view && (this.view.enabled = !1), this.updateProjectionMatrix()
                        }
                        updateProjectionMatrix() {
                            let e = (this.right - this.left) / (2 * this.zoom),
                                t = (this.top - this.bottom) / (2 * this.zoom),
                                n = (this.right + this.left) / 2,
                                i = (this.top + this.bottom) / 2,
                                r = n - e,
                                a = n + e,
                                s = i + t,
                                o = i - t;
                            if (null !== this.view && this.view.enabled) {
                                let e = (this.right - this.left) / this.view.fullWidth / this.zoom,
                                    t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
                                r += e * this.view.offsetX, a = r + e * this.view.width, s -= t * this.view.offsetY, o = s - t * this.view.height
                            }
                            this.projectionMatrix.makeOrthographic(r, a, s, o, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
                        }
                        toJSON(e) {
                            let t = super.toJSON(e);
                            return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, null !== this.view && (t.object.view = Object.assign({}, this.view)), t
                        }
                        constructor(e = -1, t = 1, n = 1, i = -1, r = .1, a = 2e3) {
                            super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = a, this.updateProjectionMatrix()
                        }
                    }
                }),
                ov = h(() => {
                    aL(), oe = class extends aw {
                        copy(e) {
                            return super.copy(e), this.instanceCount = e.instanceCount, this
                        }
                        toJSON() {
                            let e = super.toJSON();
                            return e.instanceCount = this.instanceCount, e.isInstancedBufferGeometry = !0, e
                        }
                        constructor() {
                            super(), this.isInstancedBufferGeometry = !0, this.type = "InstancedBufferGeometry", this.instanceCount = 1 / 0
                        }
                    }
                }),
                o_ = h(() => {
                    sE(), ot = class extends a6 {
                        constructor(e = []) {
                            super(), this.isArrayCamera = !0, this.cameras = e, this.index = 0
                        }
                    }
                }),
                ox = h(() => {
                    sC(), on = class extends sr {
                        copy(e) {
                            return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this
                        }
                        clone(e) {
                            let t = super.clone(e);
                            return t.meshPerAttribute = this.meshPerAttribute, t
                        }
                        toJSON(e) {
                            let t = super.toJSON(e);
                            return t.isInstancedInterleavedBuffer = !0, t.meshPerAttribute = this.meshPerAttribute, t
                        }
                        constructor(e, t, n = 1) {
                            super(e, t), this.isInstancedInterleavedBuffer = !0, this.meshPerAttribute = n
                        }
                    }
                }),
                oM = h(() => {
                    i0(), im(), oi = new iV, or = new iV, oa = class {
                        set(e, t) {
                            return this.start.copy(e), this.end.copy(t), this
                        }
                        copy(e) {
                            return this.start.copy(e.start), this.end.copy(e.end), this
                        }
                        getCenter(e) {
                            return e.addVectors(this.start, this.end).multiplyScalar(.5)
                        }
                        delta(e) {
                            return e.subVectors(this.end, this.start)
                        }
                        distanceSq() {
                            return this.start.distanceToSquared(this.end)
                        }
                        distance() {
                            return this.start.distanceTo(this.end)
                        }
                        at(e, t) {
                            return this.delta(t).multiplyScalar(e).add(this.start)
                        }
                        closestPointToPointParameter(e, t) {
                            oi.subVectors(e, this.start), or.subVectors(this.end, this.start);
                            let n = or.dot(or),
                                i = or.dot(oi) / n;
                            return t && (i = nq(i, 0, 1)), i
                        }
                        closestPointToPoint(e, t, n) {
                            let i = this.closestPointToPointParameter(e, t);
                            return this.delta(n).multiplyScalar(i).add(this.start)
                        }
                        applyMatrix4(e) {
                            return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this
                        }
                        equals(e) {
                            return e.start.equals(this.start) && e.end.equals(this.end)
                        }
                        clone() {
                            return new this.constructor().copy(this)
                        }
                        constructor(e = new iV, t = new iV) {
                            this.start = e, this.end = t
                        }
                    }
                });

            function oy(e, t, n, i) {
                let r = function(e) {
                    switch (e) {
                        case tb:
                        case tT:
                            return {
                                byteLength: 1,
                                components: 1
                            };
                        case tw:
                        case tA:
                        case tP:
                            return {
                                byteLength: 2,
                                components: 1
                            };
                        case tL:
                        case tD:
                            return {
                                byteLength: 2,
                                components: 4
                            };
                        case tC:
                        case tR:
                        case tU:
                            return {
                                byteLength: 4,
                                components: 1
                            };
                        case tN:
                            return {
                                byteLength: 4,
                                components: 3
                            }
                    }
                    throw Error("Unknown texture type ".concat(e, "."))
                }(i);
                switch (n) {
                    case tO:
                    case tz:
                        return e * t;
                    case tG:
                        return e * t * 2;
                    case tV:
                    case tW:
                        return e * t / r.components * r.byteLength;
                    case tX:
                    case tj:
                        return e * t * 2 / r.components * r.byteLength;
                    case tF:
                        return e * t * 3 / r.components * r.byteLength;
                    case tB:
                    case tY:
                        return e * t * 4 / r.components * r.byteLength;
                    case tq:
                    case tK:
                        return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
                    case tZ:
                    case tJ:
                        return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
                    case t$:
                    case t1:
                        return Math.max(e, 16) * Math.max(t, 8) / 4;
                    case tQ:
                    case t0:
                        return Math.max(e, 8) * Math.max(t, 8) / 2;
                    case t2:
                    case t3:
                        return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
                    case t4:
                    case t5:
                        return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
                    case t6:
                        return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
                    case t8:
                        return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
                    case t9:
                        return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
                    case t7:
                        return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
                    case ne:
                        return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
                    case nt:
                        return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
                    case nn:
                        return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
                    case ni:
                        return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
                    case nr:
                        return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
                    case na:
                        return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
                    case ns:
                        return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
                    case no:
                        return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
                    case nl:
                        return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
                    case nh:
                    case nu:
                    case nc:
                        return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
                    case nd:
                    case np:
                        return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
                    case nf:
                    case nm:
                        return Math.ceil(e / 4) * Math.ceil(t / 4) * 16
                }
                throw Error("Unable to determine texture byte length for ".concat(n, " format."))
            }
            var oE = h(() => {
                    nX()
                }),
                oS = h(() => {}),
                ob = h(() => {
                    nX(), iZ(), sR(), aY(), sA(), oo(), ou(), om(), og(), sy(), ov(), aL(), sU(), ox(), aP(), im(), r8(), r7(), r6(), oM(), iq(), i0(), ig(), aR(), sI(), nX(), oS(), "u" > typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", {
                        detail: {
                            revision: e_
                        }
                    })), window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = e_
                });

            function oT() {
                let e = null,
                    t = !1,
                    n = null,
                    i = null;

                function r(t, a) {
                    n(t, a), i = e.requestAnimationFrame(r)
                }
                return {
                    start: function() {
                        !0 !== t && null !== n && (i = e.requestAnimationFrame(r), t = !0)
                    },
                    stop: function() {
                        e.cancelAnimationFrame(i), t = !1
                    },
                    setAnimationLoop: function(e) {
                        n = e
                    },
                    setContext: function(t) {
                        e = t
                    }
                }
            }
            var oA = h(() => {});

            function ow(e) {
                let t = new WeakMap;
                return {
                    get: function(e) {
                        return e.isInterleavedBufferAttribute && (e = e.data), t.get(e)
                    },
                    remove: function(n) {
                        n.isInterleavedBufferAttribute && (n = n.data);
                        let i = t.get(n);
                        i && (e.deleteBuffer(i.buffer), t.delete(n))
                    },
                    update: function(n, i) {
                        if (n.isInterleavedBufferAttribute && (n = n.data), n.isGLBufferAttribute) {
                            let e = t.get(n);
                            (!e || e.version < n.version) && t.set(n, {
                                buffer: n.buffer,
                                type: n.type,
                                bytesPerElement: n.elementSize,
                                version: n.version
                            });
                            return
                        }
                        let r = t.get(n);
                        if (void 0 === r) t.set(n, function(t, n) {
                            let i, r = t.array,
                                a = t.usage,
                                s = r.byteLength,
                                o = e.createBuffer();
                            if (e.bindBuffer(n, o), e.bufferData(n, r, a), t.onUploadCallback(), r instanceof Float32Array) i = e.FLOAT;
                            else if (r instanceof Uint16Array) i = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT;
                            else if (r instanceof Int16Array) i = e.SHORT;
                            else if (r instanceof Uint32Array) i = e.UNSIGNED_INT;
                            else if (r instanceof Int32Array) i = e.INT;
                            else if (r instanceof Int8Array) i = e.BYTE;
                            else if (r instanceof Uint8Array) i = e.UNSIGNED_BYTE;
                            else if (r instanceof Uint8ClampedArray) i = e.UNSIGNED_BYTE;
                            else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
                            return {
                                buffer: o,
                                type: i,
                                bytesPerElement: r.BYTES_PER_ELEMENT,
                                version: t.version,
                                size: s
                            }
                        }(n, i));
                        else if (r.version < n.version) {
                            if (r.size !== n.array.byteLength) throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
                            (function(t, n, i) {
                                let r = n.array,
                                    a = n.updateRanges;
                                if (e.bindBuffer(i, t), 0 === a.length) e.bufferSubData(i, 0, r);
                                else {
                                    a.sort((e, t) => e.start - t.start);
                                    let t = 0;
                                    for (let e = 1; e < a.length; e++) {
                                        let n = a[t],
                                            i = a[e];
                                        i.start <= n.start + n.count + 1 ? n.count = Math.max(n.count, i.start + i.count - n.start) : a[++t] = i
                                    }
                                    a.length = t + 1;
                                    for (let t = 0, n = a.length; t < n; t++) {
                                        let n = a[t];
                                        e.bufferSubData(i, n.start * r.BYTES_PER_ELEMENT, r, n.start, n.count)
                                    }
                                    n.clearUpdateRanges()
                                }
                                n.onUploadCallback()
                            })(r.buffer, n, i), r.version = n.version
                        }
                    }
                }
            }
            var oR, oC, oU, oP, oL, oD, oI, oN, oO, oF, oB, oz, oG, oH, ok, oV, oW, oX, oj, oY, oq, oK, oZ, oJ, oQ, o$, o0, o1, o2, o3, o4, o5, o6, o8, o9, o7, le, lt, ln, li, lr, la, ls, lo, ll, lh, lu, lc, ld, lp, lf, lm, lg, lv, l_, lx, lM, ly, lE, lS, lb, lT, lA, lw, lR, lC, lU, lP, lL, lD, lI, lN, lO, lF, lB, lz, lG, lH, lk, lV, lW, lX, lj, lY, lq, lK, lZ, lJ, lQ, l$, l0, l1, l2, l3, l4, l5, l6, l8, l9, l7, he, ht, hn, hi, hr, ha, hs, ho, hl, hh, hu, hc, hd, hp, hf, hm, hg, hv, h_, hx, hM, hy, hE, hS, hb, hT, hA, hw, hR, hC, hU, hP, hL, hD, hI, hN, hO, hF, hB, hz, hG, hH, hk, hV, hW = h(() => {}),
                hX = h(() => {
                    oR = "\n#ifdef USE_ALPHAHASH\n\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n\n#endif\n"
                }),
                hj = h(() => {
                    oC = "\n#ifdef USE_ALPHAHASH\n\n	/**\n	 * See: https://casual-effects.com/research/Wyman2017Hashed/index.html\n	 */\n\n	const float ALPHA_HASH_SCALE = 0.05; // Derived from trials only, and may be changed.\n\n	float hash2D( vec2 value ) {\n\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n\n	}\n\n	float hash3D( vec3 value ) {\n\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n\n	}\n\n	float getAlphaHashThreshold( vec3 position ) {\n\n		// Find the discretized derivatives of our coordinates\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n\n		// Find two nearest log-discretized noise scales\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n\n		// Compute alpha thresholds at our two noise scales\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n\n		// Factor to interpolate lerp with\n		float lerpFactor = fract( log2( pixScale ) );\n\n		// Interpolate alpha threshold from noise at two scales\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n\n		// Pass into CDF to compute uniformly distrib threshold\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n\n		// Find our final, uniformly distributed alpha threshold (ατ)\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n\n		// Avoids ατ == 0. Could also do ατ =1-ατ\n		return clamp( threshold , 1.0e-6, 1.0 );\n\n	}\n\n#endif\n"
                }),
                hY = h(() => {
                    oU = "\n#ifdef USE_ALPHAMAP\n\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n\n#endif\n"
                }),
                hq = h(() => {
                    oP = "\n#ifdef USE_ALPHAMAP\n\n	uniform sampler2D alphaMap;\n\n#endif\n"
                }),
                hK = h(() => {
                    oL = "\n#ifdef USE_ALPHATEST\n\n	#ifdef ALPHA_TO_COVERAGE\n\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n\n	#else\n\n	if ( diffuseColor.a < alphaTest ) discard;\n\n	#endif\n\n#endif\n"
                }),
                hZ = h(() => {
                    oD = "\n#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif\n"
                }),
                hJ = h(() => {
                    oI = "\n#ifdef USE_AOMAP\n\n	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n\n	#endif\n\n#endif\n"
                }),
                hQ = h(() => {
                    oN = "\n#ifdef USE_AOMAP\n\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n\n#endif\n"
                }),
                h$ = h(() => {
                    oO = "\n#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n\n	}\n\n	float getIndirectIndex( const in int i ) {\n\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n\n	}\n\n#endif\n\n#ifdef USE_BATCHING_COLOR\n\n	uniform sampler2D batchingColorTexture;\n	vec3 getBatchingColor( const in float i ) {\n\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;\n\n	}\n\n#endif\n"
                }),
                h0 = h(() => {
                    oF = "\n#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif\n"
                }),
                h1 = h(() => {
                    oB = "\nvec3 transformed = vec3( position );\n\n#ifdef USE_ALPHAHASH\n\n	vPosition = vec3( position );\n\n#endif\n"
                }),
                h2 = h(() => {
                    oz = "\nvec3 objectNormal = vec3( normal );\n\n#ifdef USE_TANGENT\n\n	vec3 objectTangent = vec3( tangent.xyz );\n\n#endif\n"
                }),
                h3 = h(() => {
                    oG = "\n\nfloat G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {\n\n	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)\n	return 0.25;\n\n}\n\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n\n}\n\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n\n	vec3 halfDir = normalize( lightDir + viewDir );\n\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n\n	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );\n\n	float D = D_BlinnPhong( shininess, dotNH );\n\n	return F * ( G * D );\n\n} // validated\n\n"
                }),
                h4 = h(() => {
                    oH = ""
                }),
                h5 = h(() => {
                    ok = "\n#ifdef USE_BUMPMAP\n\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n\n	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen\n	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf\n\n	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n	vec2 dHdxy_fwd() {\n\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n\n		return vec2( dBx, dBy );\n\n	}\n\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n\n		// normalize is done to ensure that the bump map looks the same regardless of the texture's scale\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm; // normalized\n\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n\n	}\n\n#endif\n"
                }),
                h6 = h(() => {
                    oV = ""
                }),
                h8 = h(() => {
                    oW = ""
                }),
                h9 = h(() => {
                    oX = "\n#if NUM_CLIPPING_PLANES > 0\n\n	varying vec3 vClipPosition;\n\n#endif\n"
                }),
                h7 = h(() => {
                    oj = "\n#if NUM_CLIPPING_PLANES > 0\n\n	vClipPosition = - mvPosition.xyz;\n\n#endif\n"
                }),
                ue = h(() => {
                    oY = "\n#if defined( USE_COLOR_ALPHA )\n\n	diffuseColor *= vColor;\n\n#elif defined( USE_COLOR )\n\n	diffuseColor.rgb *= vColor;\n\n#endif\n"
                }),
                ut = h(() => {
                    oq = "\n#if defined( USE_COLOR_ALPHA )\n\n	varying vec4 vColor;\n\n#elif defined( USE_COLOR )\n\n	varying vec3 vColor;\n\n#endif\n"
                }),
                un = h(() => {
                    oK = "\n#if defined( USE_COLOR_ALPHA )\n\n	varying vec4 vColor;\n\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n\n	varying vec3 vColor;\n\n#endif\n"
                }),
                ui = h(() => {
                    oZ = "\n#if defined( USE_COLOR_ALPHA )\n\n	vColor = vec4( 1.0 );\n\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n\n	vColor = vec3( 1.0 );\n\n#endif\n\n#ifdef USE_COLOR\n\n	vColor *= color;\n\n#endif\n\n#ifdef USE_INSTANCING_COLOR\n\n	vColor.xyz *= instanceColor.xyz;\n\n#endif\n\n#ifdef USE_BATCHING_COLOR\n\n	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );\n\n	vColor.xyz *= batchingColor.xyz;\n\n#endif\n"
                }),
                ur = h(() => {
                    oJ = "\n#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n\n#ifndef saturate\n// <tonemapping_pars_fragment> may have defined saturate() already\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\n\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\n\n// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.\n// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand( const in vec2 uv ) {\n\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\n	return fract( sin( sn ) * c );\n\n}\n\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\n\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\n\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n\n#ifdef USE_ALPHAHASH\n\n	varying vec3 vPosition;\n\n#endif\n\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n}\n\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\n	// dir can be either a direction vector or a normal vector\n	// upper-left 3x3 of matrix is assumed to be orthogonal\n\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n\n}\n\nmat3 transposeMat3( const in mat3 m ) {\n\n	mat3 tmp;\n\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\n	return tmp;\n\n}\n\nbool isPerspectiveMatrix( mat4 m ) {\n\n	return m[ 2 ][ 3 ] == - 1.0;\n\n}\n\nvec2 equirectUv( in vec3 dir ) {\n\n	// dir is assumed to be unit length\n\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\n	return vec2( u, v );\n\n}\n\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n\n	return RECIPROCAL_PI * diffuseColor;\n\n} // validated\n\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n\n	// Original approximation by Christophe Schlick '94\n	// float fresnel = pow( 1.0 - dotVH, 5.0 );\n\n	// Optimized variant (presented by Epic at SIGGRAPH '13)\n	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n\n} // validated\n\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n\n	// Original approximation by Christophe Schlick '94\n	// float fresnel = pow( 1.0 - dotVH, 5.0 );\n\n	// Optimized variant (presented by Epic at SIGGRAPH '13)\n	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n\n} // validated\n"
                }),
                ua = h(() => {
                    oQ = "\n#ifdef ENVMAP_TYPE_CUBE_UV\n\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n\n	// These shader functions convert between the UV coordinates of a single face of\n	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for\n	// sampling a textureCube (not generally normalized ).\n\n	float getFace( vec3 direction ) {\n\n		vec3 absDirection = abs( direction );\n\n		float face = - 1.0;\n\n		if ( absDirection.x > absDirection.z ) {\n\n			if ( absDirection.x > absDirection.y )\n\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n\n			else\n\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n\n		} else {\n\n			if ( absDirection.z > absDirection.y )\n\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n\n			else\n\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n\n		}\n\n		return face;\n\n	}\n\n	// RH coordinate system; PMREM face-indexing convention\n	vec2 getUV( vec3 direction, float face ) {\n\n		vec2 uv;\n\n		if ( face == 0.0 ) {\n\n			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x\n\n		} else if ( face == 1.0 ) {\n\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y\n\n		} else if ( face == 2.0 ) {\n\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z\n\n		} else if ( face == 3.0 ) {\n\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x\n\n		} else if ( face == 4.0 ) {\n\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y\n\n		} else {\n\n			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z\n\n		}\n\n		return 0.5 * ( uv + 1.0 );\n\n	}\n\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n\n		float face = getFace( direction );\n\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n\n		float faceSize = exp2( mipInt );\n\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0; // #25071\n\n		if ( face > 2.0 ) {\n\n			uv.y += faceSize;\n\n			face -= 3.0;\n\n		}\n\n		uv.x += face * faceSize;\n\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n\n		#ifdef texture2DGradEXT\n\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering\n\n		#else\n\n			return texture2D( envMap, uv ).rgb;\n\n		#endif\n\n	}\n\n	// These defines must match with PMREMGenerator\n\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n\n	float roughnessToMip( float roughness ) {\n\n		float mip = 0.0;\n\n		if ( roughness >= cubeUV_r1 ) {\n\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n\n		} else if ( roughness >= cubeUV_r4 ) {\n\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n\n		} else if ( roughness >= cubeUV_r5 ) {\n\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n\n		} else if ( roughness >= cubeUV_r6 ) {\n\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n\n		} else {\n\n			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25\n		}\n\n		return mip;\n\n	}\n\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n\n		float mipF = fract( mip );\n\n		float mipInt = floor( mip );\n\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n\n		if ( mipF == 0.0 ) {\n\n			return vec4( color0, 1.0 );\n\n		} else {\n\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n\n		}\n\n	}\n\n#endif\n"
                }),
                us = h(() => {
                    o$ = "\n\nvec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n\n	vec3 transformedTangent = objectTangent;\n\n#endif\n\n#ifdef USE_BATCHING\n\n	// this is in lieu of a per-instance normal-matrix\n	// shear transforms in the instance matrix are not supported\n\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n\n	#ifdef USE_TANGENT\n\n		transformedTangent = bm * transformedTangent;\n\n	#endif\n\n#endif\n\n#ifdef USE_INSTANCING\n\n	// this is in lieu of a per-instance normal-matrix\n	// shear transforms in the instance matrix are not supported\n\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n\n	#ifdef USE_TANGENT\n\n		transformedTangent = im * transformedTangent;\n\n	#endif\n\n#endif\n\ntransformedNormal = normalMatrix * transformedNormal;\n\n#ifdef FLIP_SIDED\n\n	transformedNormal = - transformedNormal;\n\n#endif\n\n#ifdef USE_TANGENT\n\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n\n	#ifdef FLIP_SIDED\n\n		transformedTangent = - transformedTangent;\n\n	#endif\n\n#endif\n"
                }),
                uo = h(() => {
                    o0 = "\n#ifdef USE_DISPLACEMENTMAP\n\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n\n#endif\n"
                }),
                ul = h(() => {
                    o1 = "\n#ifdef USE_DISPLACEMENTMAP\n\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n\n#endif\n"
                }),
                uh = h(() => {
                    o2 = "\n#ifdef USE_EMISSIVEMAP\n\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n\n		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)\n\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n\n	#endif\n\n	totalEmissiveRadiance *= emissiveColor.rgb;\n\n#endif\n"
                }),
                uu = h(() => {
                    o3 = "\n#ifdef USE_EMISSIVEMAP\n\n	uniform sampler2D emissiveMap;\n\n#endif\n"
                }),
                uc = h(() => {
                    o4 = "\ngl_FragColor = linearToOutputTexel( gl_FragColor );\n"
                }),
                ud = h(() => {
                    o5 = "\n\nvec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\n\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\n\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\n\n"
                }),
                up = h(() => {
                    o6 = "\n#ifdef USE_ENVMAP\n\n	#ifdef ENV_WORLDPOS\n\n		vec3 cameraToFrag;\n\n		if ( isOrthographic ) {\n\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\n		} else {\n\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n\n		}\n\n		// Transforming Normal Vectors with the Inverse Transformation\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n		#ifdef ENVMAP_MODE_REFLECTION\n\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\n		#else\n\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\n		#endif\n\n	#else\n\n		vec3 reflectVec = vReflect;\n\n	#endif\n\n	#ifdef ENVMAP_TYPE_CUBE\n\n		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n	#else\n\n		vec4 envColor = vec4( 0.0 );\n\n	#endif\n\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n	#elif defined( ENVMAP_BLENDING_MIX )\n\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n	#elif defined( ENVMAP_BLENDING_ADD )\n\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n	#endif\n\n#endif\n"
                }),
                uf = h(() => {
                    o8 = "\n#ifdef USE_ENVMAP\n\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	uniform mat3 envMapRotation;\n\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif\n"
                }),
                um = h(() => {
                    o9 = "\n#ifdef USE_ENVMAP\n\n	uniform float reflectivity;\n\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\n		#define ENV_WORLDPOS\n\n	#endif\n\n	#ifdef ENV_WORLDPOS\n\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n\n#endif\n"
                }),
                ug = h(() => {
                    o7 = "\n#ifdef USE_ENVMAP\n\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n\n		#define ENV_WORLDPOS\n\n	#endif\n\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n\n	#else\n\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n\n	#endif\n\n#endif\n"
                }),
                uv = h(() => {
                    le = ""
                }),
                u_ = h(() => {
                    lt = "\n#ifdef USE_FOG\n\n	vFogDepth = - mvPosition.z;\n\n#endif\n"
                }),
                ux = h(() => {
                    ln = "\n#ifdef USE_FOG\n\n	varying float vFogDepth;\n\n#endif\n"
                }),
                uM = h(() => {
                    li = "\n#ifdef USE_FOG\n\n	#ifdef FOG_EXP2\n\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n\n	#else\n\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n\n	#endif\n\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n\n#endif\n"
                }),
                uy = h(() => {
                    lr = "\n#ifdef USE_FOG\n\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n\n	#ifdef FOG_EXP2\n\n		uniform float fogDensity;\n\n	#else\n\n		uniform float fogNear;\n		uniform float fogFar;\n\n	#endif\n\n#endif\n"
                }),
                uE = h(() => {
                    la = "\n\n#ifdef USE_GRADIENTMAP\n\n	uniform sampler2D gradientMap;\n\n#endif\n\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\n	// dotNL will be from -1.0 to 1.0\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\n	#ifdef USE_GRADIENTMAP\n\n		return vec3( texture2D( gradientMap, coord ).r );\n\n	#else\n\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n\n	#endif\n\n}\n"
                }),
                uS = h(() => {
                    ls = "\n#ifdef USE_LIGHTMAP\n\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n\n#endif\n"
                }),
                ub = h(() => {
                    lo = "\nLambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;\n"
                }),
                uT = h(() => {
                    ll = "\nvarying vec3 vViewPosition;\n\nstruct LambertMaterial {\n\n	vec3 diffuseColor;\n	float specularStrength;\n\n};\n\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert\n"
                }),
                uA = h(() => {
                    lh = ""
                }),
                uw = h(() => {
                    lu = "\n#ifdef USE_ENVMAP\n\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n\n		#ifdef ENVMAP_TYPE_CUBE_UV\n\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n\n			return PI * envMapColor.rgb * envMapIntensity;\n\n		#else\n\n			return vec3( 0.0 );\n\n		#endif\n\n	}\n\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n\n		#ifdef ENVMAP_TYPE_CUBE_UV\n\n			vec3 reflectVec = reflect( - viewDir, normal );\n\n			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n\n			return envMapColor.rgb * envMapIntensity;\n\n		#else\n\n			return vec3( 0.0 );\n\n		#endif\n\n	}\n\n	#ifdef USE_ANISOTROPY\n\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n\n			#ifdef ENVMAP_TYPE_CUBE_UV\n\n			  // https://google.github.io/filament/Filament.md.html#lighting/imagebasedlights/anisotropy\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n\n			#else\n\n				return vec3( 0.0 );\n\n			#endif\n\n		}\n\n	#endif\n\n#endif\n"
                }),
                uR = h(() => {
                    lc = "\nToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\n"
                }),
                uC = h(() => {
                    ld = "\nvarying vec3 vViewPosition;\n\nstruct ToonMaterial {\n\n	vec3 diffuseColor;\n\n};\n\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n\n}\n\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon\n"
                }),
                uU = h(() => {
                    lp = "\nBlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n"
                }),
                uP = h(() => {
                    lf = ""
                }),
                uL = h(() => {
                    lm = "\nPhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\n\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\n\nmaterial.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.\nmaterial.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n\n#ifdef IOR\n\n	material.ior = ior;\n\n	#ifdef USE_SPECULAR\n\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n\n		#ifdef USE_SPECULAR_COLORMAP\n\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n\n		#endif\n\n		#ifdef USE_SPECULAR_INTENSITYMAP\n\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n\n		#endif\n\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n\n	#else\n\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n\n	#endif\n\n	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n\n#else\n\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n\n#endif\n\n#ifdef USE_CLEARCOAT\n\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n\n	#ifdef USE_CLEARCOATMAP\n\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n\n	#endif\n\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n\n	#endif\n\n	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model\n	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n\n#endif\n\n#ifdef USE_DISPERSION\n\n	material.dispersion = dispersion;\n\n#endif\n\n#ifdef USE_IRIDESCENCE\n\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n\n	#ifdef USE_IRIDESCENCEMAP\n\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n\n	#endif\n\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n\n	#else\n\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n\n	#endif\n\n#endif\n\n#ifdef USE_SHEEN\n\n	material.sheenColor = sheenColor;\n\n	#ifdef USE_SHEEN_COLORMAP\n\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n\n	#endif\n\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n\n	#endif\n\n#endif\n\n#ifdef USE_ANISOTROPY\n\n	#ifdef USE_ANISOTROPYMAP\n\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n\n	#else\n\n		vec2 anisotropyV = anisotropyVector;\n\n	#endif\n\n	material.anisotropy = length( anisotropyV );\n\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n\n	// Roughness along the anisotropy bitangent is the material roughness, while the tangent roughness increases with anisotropy.\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n\n#endif\n"
                }),
                uD = h(() => {
                    lg = ""
                }),
                uI = h(() => {
                    lv = ""
                }),
                uN = h(() => {
                    l_ = "\n#if defined( RE_IndirectDiffuse )\n\n	#ifdef USE_LIGHTMAP\n\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n\n		irradiance += lightMapIrradiance;\n\n	#endif\n\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\n		iblIrradiance += getIBLIrradiance( geometryNormal );\n\n	#endif\n\n#endif\n\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\n	#ifdef USE_ANISOTROPY\n\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n\n	#else\n\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n\n	#endif\n\n	#ifdef USE_CLEARCOAT\n\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n\n	#endif\n\n#endif\n"
                }),
                uO = h(() => {
                    lx = "\n#if defined( RE_IndirectDiffuse )\n\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\n#endif\n\n#if defined( RE_IndirectSpecular )\n\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n\n#endif\n"
                }),
                uF = h(() => {
                    lM = "\n#if defined( USE_LOGDEPTHBUF )\n\n	// Doing a strict comparison with == 1.0 can cause noise artifacts\n	// on some platforms. See issue #17623.\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n\n#endif\n"
                }),
                uB = h(() => {
                    ly = "\n#if defined( USE_LOGDEPTHBUF )\n\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n\n#endif\n"
                }),
                uz = h(() => {
                    lE = "\n#ifdef USE_LOGDEPTHBUF\n\n	varying float vFragDepth;\n	varying float vIsPerspective;\n\n#endif\n"
                }),
                uG = h(() => {
                    lS = "\n#ifdef USE_LOGDEPTHBUF\n\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\n#endif\n"
                }),
                uH = h(() => {
                    lb = "\n#ifdef USE_MAP\n\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n\n	#ifdef DECODE_VIDEO_TEXTURE\n\n		// use inline sRGB decode until browsers properly support SRGB8_ALPHA8 with video textures (#26516)\n\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n\n	#endif\n\n	diffuseColor *= sampledDiffuseColor;\n\n#endif\n"
                }),
                uk = h(() => {
                    lT = "\n#ifdef USE_MAP\n\n	uniform sampler2D map;\n\n#endif\n"
                }),
                uV = h(() => {
                    lA = "\n#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\n	#if defined( USE_POINTS_UV )\n\n		vec2 uv = vUv;\n\n	#else\n\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\n	#endif\n\n#endif\n\n#ifdef USE_MAP\n\n	diffuseColor *= texture2D( map, uv );\n\n#endif\n\n#ifdef USE_ALPHAMAP\n\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n\n#endif\n"
                }),
                uW = h(() => {
                    lw = "\n#if defined( USE_POINTS_UV )\n\n	varying vec2 vUv;\n\n#else\n\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\n		uniform mat3 uvTransform;\n\n	#endif\n\n#endif\n\n#ifdef USE_MAP\n\n	uniform sampler2D map;\n\n#endif\n\n#ifdef USE_ALPHAMAP\n\n	uniform sampler2D alphaMap;\n\n#endif\n"
                }),
                uX = h(() => {
                    lR = "\nfloat metalnessFactor = metalness;\n\n#ifdef USE_METALNESSMAP\n\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n\n	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n	metalnessFactor *= texelMetalness.b;\n\n#endif\n"
                }),
                uj = h(() => {
                    lC = "\n#ifdef USE_METALNESSMAP\n\n	uniform sampler2D metalnessMap;\n\n#endif\n"
                }),
                uY = h(() => {
                    lU = "\n#ifdef USE_INSTANCING_MORPH\n\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n\n	}\n#endif\n"
                }),
                uq = h(() => {
                    lP = "\n#if defined( USE_MORPHCOLORS )\n\n	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:\n	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)\n	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting\n	vColor *= morphTargetBaseInfluence;\n\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\n		#if defined( USE_COLOR_ALPHA )\n\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n\n		#elif defined( USE_COLOR )\n\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n\n		#endif\n\n	}\n\n#endif\n"
                }),
                uK = h(() => {
                    lL = "\n#ifdef USE_MORPHNORMALS\n\n	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:\n	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)\n	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting\n	objectNormal *= morphTargetBaseInfluence;\n\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n\n	}\n\n#endif\n"
                }),
                uZ = h(() => {
                    lD = "\n#ifdef USE_MORPHTARGETS\n\n	#ifndef USE_INSTANCING_MORPH\n\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n\n	#endif\n\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n\n	}\n\n#endif\n"
                }),
                uJ = h(() => {
                    lI = "\n#ifdef USE_MORPHTARGETS\n\n	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:\n	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)\n	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting\n	transformed *= morphTargetBaseInfluence;\n\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n\n	}\n\n#endif\n"
                }),
                uQ = h(() => {
                    lN = "\nfloat faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n\n#ifdef FLAT_SHADED\n\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n\n#else\n\n	vec3 normal = normalize( vNormal );\n\n	#ifdef DOUBLE_SIDED\n\n		normal *= faceDirection;\n\n	#endif\n\n#endif\n\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n\n	#ifdef USE_TANGENT\n\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\n	#else\n\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n\n	#endif\n\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n\n	#endif\n\n#endif\n\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n	#ifdef USE_TANGENT\n\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n\n	#else\n\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n\n	#endif\n\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n\n	#endif\n\n#endif\n\n// non perturbed normal for clearcoat among others\n\nvec3 nonPerturbedNormal = normal;\n\n"
                }),
                u$ = h(() => {
                    lO = "\n\n#ifdef USE_NORMALMAP_OBJECTSPACE\n\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals\n\n	#ifdef FLIP_SIDED\n\n		normal = - normal;\n\n	#endif\n\n	#ifdef DOUBLE_SIDED\n\n		normal = normal * faceDirection;\n\n	#endif\n\n	normal = normalize( normalMatrix * normal );\n\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n\n	normal = normalize( tbn * mapN );\n\n#elif defined( USE_BUMPMAP )\n\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n\n#endif\n"
                }),
                u0 = h(() => {
                    lF = "\n#ifndef FLAT_SHADED\n\n	varying vec3 vNormal;\n\n	#ifdef USE_TANGENT\n\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n\n	#endif\n\n#endif\n"
                }),
                u1 = h(() => {
                    lB = "\n#ifndef FLAT_SHADED\n\n	varying vec3 vNormal;\n\n	#ifdef USE_TANGENT\n\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n\n	#endif\n\n#endif\n"
                }),
                u2 = h(() => {
                    lz = "\n#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED\n\n	vNormal = normalize( transformedNormal );\n\n	#ifdef USE_TANGENT\n\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\n	#endif\n\n#endif\n"
                }),
                u3 = h(() => {
                    lG = ""
                }),
                u4 = h(() => {
                    lH = "\n#ifdef USE_CLEARCOAT\n\n	vec3 clearcoatNormal = nonPerturbedNormal;\n\n#endif\n"
                }),
                u5 = h(() => {
                    lk = "\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n\n#endif\n"
                }),
                u6 = h(() => {
                    lV = "\n\n#ifdef USE_CLEARCOATMAP\n\n	uniform sampler2D clearcoatMap;\n\n#endif\n\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n\n#endif\n\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\n	uniform sampler2D clearcoatRoughnessMap;\n\n#endif\n"
                }),
                u8 = h(() => {
                    lW = "\n\n#ifdef USE_IRIDESCENCEMAP\n\n	uniform sampler2D iridescenceMap;\n\n#endif\n\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\n	uniform sampler2D iridescenceThicknessMap;\n\n#endif\n"
                }),
                u9 = h(() => {
                    lX = "\n#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\n\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );\n"
                }),
                u7 = h(() => {
                    lj = ""
                }),
                ce = h(() => {
                    lY = "\n#ifdef PREMULTIPLIED_ALPHA\n\n	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.\n	gl_FragColor.rgb *= gl_FragColor.a;\n\n#endif\n"
                }),
                ct = h(() => {
                    lq = "\nvec4 mvPosition = vec4( transformed, 1.0 );\n\n#ifdef USE_BATCHING\n\n	mvPosition = batchingMatrix * mvPosition;\n\n#endif\n\n#ifdef USE_INSTANCING\n\n	mvPosition = instanceMatrix * mvPosition;\n\n#endif\n\nmvPosition = modelViewMatrix * mvPosition;\n\ngl_Position = projectionMatrix * mvPosition;\n"
                }),
                cn = h(() => {
                    lK = "\n#ifdef DITHERING\n\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n\n#endif\n"
                }),
                ci = h(() => {
                    lZ = "\n#ifdef DITHERING\n\n	// based on https://www.shadertoy.com/view/MslGR8\n	vec3 dithering( vec3 color ) {\n		//Calculate grid position\n		float grid_position = rand( gl_FragCoord.xy );\n\n		//Shift the individual colors differently, thus making it even harder to see the dithering pattern\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\n		//modify shift according to grid position.\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\n		//shift the color by dither_shift\n		return color + dither_shift_RGB;\n	}\n\n#endif\n"
                }),
                cr = h(() => {
                    lJ = "\nfloat roughnessFactor = roughness;\n\n#ifdef USE_ROUGHNESSMAP\n\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n\n	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n	roughnessFactor *= texelRoughness.g;\n\n#endif\n"
                }),
                ca = h(() => {
                    lQ = "\n#ifdef USE_ROUGHNESSMAP\n\n	uniform sampler2D roughnessMap;\n\n#endif\n"
                }),
                cs = h(() => {
                    l$ = ""
                }),
                co = h(() => {
                    l0 = ""
                }),
                cl = h(() => {
                    l1 = "\n\n#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n\n	// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.\n	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	vec4 shadowWorldPosition;\n\n#endif\n\n#if defined( USE_SHADOWMAP )\n\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n\n		}\n		#pragma unroll_loop_end\n\n	#endif\n\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n\n		}\n		#pragma unroll_loop_end\n\n	#endif\n\n	/*\n	#if NUM_RECT_AREA_LIGHTS > 0\n\n		// TODO (abelnation): update vAreaShadowCoord with area light info\n\n	#endif\n	*/\n\n#endif\n\n// spot lights can be evaluated without active shadow mapping (when SpotLight.map is used)\n\n#if NUM_SPOT_LIGHT_COORDS > 0\n\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n\n	}\n	#pragma unroll_loop_end\n\n#endif\n\n\n"
                }),
                ch = h(() => {
                    l2 = ""
                }),
                cu = h(() => {
                    l3 = "\n#ifdef USE_SKINNING\n\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif\n"
                }),
                cc = h(() => {
                    l4 = "\n#ifdef USE_SKINNING\n\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n\n	uniform highp sampler2D boneTexture;\n\n	mat4 getBoneMatrix( const in float i ) {\n\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n\n		return mat4( v1, v2, v3, v4 );\n\n	}\n\n#endif\n"
                }),
                cd = h(() => {
                    l5 = "\n#ifdef USE_SKINNING\n\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n\n#endif\n"
                }),
                cp = h(() => {
                    l6 = "\n#ifdef USE_SKINNING\n\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n	#ifdef USE_TANGENT\n\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\n	#endif\n\n#endif\n"
                }),
                cf = h(() => {
                    l8 = "\nfloat specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n\n#else\n\n	specularStrength = 1.0;\n\n#endif\n"
                }),
                cm = h(() => {
                    l9 = "\n#ifdef USE_SPECULARMAP\n\n	uniform sampler2D specularMap;\n\n#endif\n"
                }),
                cg = h(() => {
                    l7 = "\n#if defined( TONE_MAPPING )\n\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n\n#endif\n"
                }),
                cv = h(() => {
                    he = "\n#ifndef saturate\n// <common> may have defined saturate() already\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n\nuniform float toneMappingExposure;\n\n// exposure only\nvec3 LinearToneMapping( vec3 color ) {\n\n	return saturate( toneMappingExposure * color );\n\n}\n\n// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf\nvec3 ReinhardToneMapping( vec3 color ) {\n\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n\n}\n\n// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/\nvec3 CineonToneMapping( vec3 color ) {\n\n	// filmic operator by Jim Hejl and Richard Burgess-Dawson\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n\n}\n\n// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs\nvec3 RRTAndODTFit( vec3 v ) {\n\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n\n}\n\n// this implementation of ACES is modified to accommodate a brighter viewing environment.\n// the scale factor of 1/0.6 is subjective. see discussion in #19621.\n\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\n	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source\n		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n\n	// ODT_SAT => XYZ => D60_2_D65 => sRGB\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source\n		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n\n	color *= toneMappingExposure / 0.6;\n\n	color = ACESInputMat * color;\n\n	// Apply RRT and ODT\n	color = RRTAndODTFit( color );\n\n	color = ACESOutputMat * color;\n\n	// Clamp to [0, 1]\n	return saturate( color );\n\n}\n\n// Matrices for rec 2020 <> rec 709 color space conversion\n// matrix provided in row-major order so it has been transposed\n// https://www.itu.int/pub/R-REP-BT.2407-2017\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\n\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\n\n// https://iolite-engine.com/blog_posts/minimal_agx_implementation\n// Mean error^2: 3.6705141e-06\nvec3 agxDefaultContrastApprox( vec3 x ) {\n\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n\n}\n\n// AgX Tone Mapping implementation based on Filament, which in turn is based\n// on Blender's implementation using rec 2020 primaries\n// https://github.com/google/filament/pull/7236\n// Inputs and outputs are encoded as Linear-sRGB.\n\nvec3 AgXToneMapping( vec3 color ) {\n\n	// AgX constants\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n\n	// explicit AgXOutsetMatrix generated from Filaments AgXOutsetMatrixInv\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n\n	// LOG2_MIN      = -10.0\n	// LOG2_MAX      =  +6.5\n	// MIDDLE_GRAY   =  0.18\n	const float AgxMinEv = - 12.47393;  // log2( pow( 2, LOG2_MIN ) * MIDDLE_GRAY )\n	const float AgxMaxEv = 4.026069;    // log2( pow( 2, LOG2_MAX ) * MIDDLE_GRAY )\n\n	color *= toneMappingExposure;\n\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n\n	color = AgXInsetMatrix * color;\n\n	// Log2 encoding\n	color = max( color, 1e-10 ); // avoid 0 or negative numbers for log2\n	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n\n	color = clamp( color, 0.0, 1.0 );\n\n	// Apply sigmoid\n	color = agxDefaultContrastApprox( color );\n\n	// Apply AgX look\n	// v = agxLook(v, look);\n\n	color = AgXOutsetMatrix * color;\n\n	// Linearize\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n\n	// Gamut mapping. Simple clamp for now.\n	color = clamp( color, 0.0, 1.0 );\n\n	return color;\n\n}\n\n// https://modelviewer.dev/examples/tone-mapping\n\nvec3 NeutralToneMapping( vec3 color ) {\n\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n\n	color *= toneMappingExposure;\n\n	float x = min( color.r, min( color.g, color.b ) );\n\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n\n	color -= offset;\n\n	float peak = max( color.r, max( color.g, color.b ) );\n\n	if ( peak < StartCompression ) return color;\n\n	float d = 1. - StartCompression;\n\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n\n	color *= newPeak / peak;\n\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n\n	return mix( color, vec3( newPeak ), g );\n\n}\n\nvec3 CustomToneMapping( vec3 color ) { return color; }\n"
                }),
                c_ = h(() => {
                    ht = "\n#ifdef USE_TRANSMISSION\n\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n\n	#ifdef USE_TRANSMISSIONMAP\n\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n\n	#endif\n\n	#ifdef USE_THICKNESSMAP\n\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n\n	#endif\n\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n\n#endif\n"
                }),
                cx = h(() => {
                    hn = "\n#ifdef USE_TRANSMISSION\n\n	// Transmission code is based on glTF-Sampler-Viewer\n	// https://github.com/KhronosGroup/glTF-Sample-Viewer\n\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n\n	#ifdef USE_TRANSMISSIONMAP\n\n		uniform sampler2D transmissionMap;\n\n	#endif\n\n	#ifdef USE_THICKNESSMAP\n\n		uniform sampler2D thicknessMap;\n\n	#endif\n\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n\n	varying vec3 vWorldPosition;\n\n	// Mipped Bicubic Texture Filtering by N8\n	// https://www.shadertoy.com/view/Dl2SDW\n\n	float w0( float a ) {\n\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n\n	}\n\n	float w1( float a ) {\n\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n\n	}\n\n	float w2( float a ){\n\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n\n	}\n\n	float w3( float a ) {\n\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n\n	}\n\n	// g0 and g1 are the two amplitude functions\n	float g0( float a ) {\n\n		return w0( a ) + w1( a );\n\n	}\n\n	float g1( float a ) {\n\n		return w2( a ) + w3( a );\n\n	}\n\n	// h0 and h1 are the two offset functions\n	float h0( float a ) {\n\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n\n	}\n\n	float h1( float a ) {\n\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n\n	}\n\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n\n		uv = uv * texelSize.zw + 0.5;\n\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n\n	}\n\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n\n	}\n\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n\n		// Direction of refracted light.\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n\n		// Compute rotation-independent scaling of the model matrix.\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n\n		// The thickness is specified in local space.\n		return normalize( refractionVector ) * thickness * modelScale;\n\n	}\n\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n\n		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and\n		// an IOR of 1.5 results in the default amount of microfacet refraction.\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n\n	}\n\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n\n	}\n\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n\n		if ( isinf( attenuationDistance ) ) {\n\n			// Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.\n			return vec3( 1.0 );\n\n		} else {\n\n			// Compute light attenuation using Beer's law.\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law\n			return transmittance;\n\n		}\n\n	}\n\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n\n		vec4 transmittedLight;\n		vec3 transmittance;\n\n		#ifdef USE_DISPERSION\n\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n\n			for ( int i = 0; i < 3; i ++ ) {\n\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n\n				// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n\n				// Sample framebuffer to get pixel the refracted ray hits.\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n\n			}\n\n			transmittedLight.a /= 3.0;\n\n		#else\n\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n\n			// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n\n			// Sample framebuffer to get pixel the refracted ray hits.\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n\n		#endif\n\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n\n		// Get the specular component.\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n\n		// As less light is transmitted, the opacity should be increased. This simple approximation does a decent job\n		// of modulating a CSS background, and has no effect when the buffer is opaque, due to a solid object or clear color.\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n\n	}\n#endif\n"
                }),
                cM = h(() => {
                    hi = "\n#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\n	varying vec2 vUv;\n\n#endif\n#ifdef USE_MAP\n\n	varying vec2 vMapUv;\n\n#endif\n#ifdef USE_ALPHAMAP\n\n	varying vec2 vAlphaMapUv;\n\n#endif\n#ifdef USE_LIGHTMAP\n\n	varying vec2 vLightMapUv;\n\n#endif\n#ifdef USE_AOMAP\n\n	varying vec2 vAoMapUv;\n\n#endif\n#ifdef USE_BUMPMAP\n\n	varying vec2 vBumpMapUv;\n\n#endif\n#ifdef USE_NORMALMAP\n\n	varying vec2 vNormalMapUv;\n\n#endif\n#ifdef USE_EMISSIVEMAP\n\n	varying vec2 vEmissiveMapUv;\n\n#endif\n#ifdef USE_METALNESSMAP\n\n	varying vec2 vMetalnessMapUv;\n\n#endif\n#ifdef USE_ROUGHNESSMAP\n\n	varying vec2 vRoughnessMapUv;\n\n#endif\n#ifdef USE_ANISOTROPYMAP\n\n	varying vec2 vAnisotropyMapUv;\n\n#endif\n#ifdef USE_CLEARCOATMAP\n\n	varying vec2 vClearcoatMapUv;\n\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n	varying vec2 vClearcoatNormalMapUv;\n\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\n	varying vec2 vClearcoatRoughnessMapUv;\n\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\n	varying vec2 vIridescenceMapUv;\n\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\n	varying vec2 vIridescenceThicknessMapUv;\n\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\n	varying vec2 vSheenColorMapUv;\n\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\n	varying vec2 vSheenRoughnessMapUv;\n\n#endif\n#ifdef USE_SPECULARMAP\n\n	varying vec2 vSpecularMapUv;\n\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\n	varying vec2 vSpecularColorMapUv;\n\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\n	varying vec2 vSpecularIntensityMapUv;\n\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n\n#endif\n#ifdef USE_THICKNESSMAP\n\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n\n#endif\n"
                }),
                cy = h(() => {
                    hr = "\n#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\n	varying vec2 vUv;\n\n#endif\n#ifdef USE_MAP\n\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n\n#endif\n#ifdef USE_ALPHAMAP\n\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n\n#endif\n#ifdef USE_LIGHTMAP\n\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n\n#endif\n#ifdef USE_AOMAP\n\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n\n#endif\n#ifdef USE_BUMPMAP\n\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n\n#endif\n#ifdef USE_NORMALMAP\n\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n\n#endif\n#ifdef USE_EMISSIVEMAP\n\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n\n#endif\n#ifdef USE_METALNESSMAP\n\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n\n#endif\n#ifdef USE_ROUGHNESSMAP\n\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n\n#endif\n#ifdef USE_ANISOTROPYMAP\n\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n\n#endif\n#ifdef USE_CLEARCOATMAP\n\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n\n#endif\n#ifdef USE_SPECULARMAP\n\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n\n#endif\n#ifdef USE_THICKNESSMAP\n\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n\n#endif\n"
                }),
                cE = h(() => {
                    ha = "\n#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n\n	vUv = vec3( uv, 1 ).xy;\n\n#endif\n#ifdef USE_MAP\n\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_ALPHAMAP\n\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_LIGHTMAP\n\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_AOMAP\n\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_BUMPMAP\n\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_NORMALMAP\n\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_DISPLACEMENTMAP\n\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_EMISSIVEMAP\n\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_METALNESSMAP\n\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_ROUGHNESSMAP\n\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_ANISOTROPYMAP\n\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_CLEARCOATMAP\n\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_IRIDESCENCEMAP\n\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_SHEEN_COLORMAP\n\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_SPECULARMAP\n\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_TRANSMISSIONMAP\n\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n\n#endif\n#ifdef USE_THICKNESSMAP\n\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n\n#endif\n"
                }),
                cS = h(() => {
                    hs = "\n#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n\n	vec4 worldPosition = vec4( transformed, 1.0 );\n\n	#ifdef USE_BATCHING\n\n		worldPosition = batchingMatrix * worldPosition;\n\n	#endif\n\n	#ifdef USE_INSTANCING\n\n		worldPosition = instanceMatrix * worldPosition;\n\n	#endif\n\n	worldPosition = modelMatrix * worldPosition;\n\n#endif\n"
                }),
                cb = h(() => {
                    ho = "\nvarying vec2 vUv;\nuniform mat3 uvTransform;\n\nvoid main() {\n\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n\n}\n", hl = "\nuniform sampler2D t2D;\nuniform float backgroundIntensity;\n\nvarying vec2 vUv;\n\nvoid main() {\n\n	vec4 texColor = texture2D( t2D, vUv );\n\n	#ifdef DECODE_VIDEO_TEXTURE\n\n		// use inline sRGB decode until browsers properly support SRGB8_APLHA8 with video textures\n\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n\n	#endif\n\n	texColor.rgb *= backgroundIntensity;\n\n	gl_FragColor = texColor;\n\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n\n}\n"
                }),
                cT = h(() => {
                    hh = "\nvarying vec3 vWorldDirection;\n\n#include <common>\n\nvoid main() {\n\n	vWorldDirection = transformDirection( position, modelMatrix );\n\n	#include <begin_vertex>\n	#include <project_vertex>\n\n	gl_Position.z = gl_Position.w; // set z to camera.far\n\n}\n", hu = "\n\n#ifdef ENVMAP_TYPE_CUBE\n\n	uniform samplerCube envMap;\n\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n\n	uniform sampler2D envMap;\n\n#endif\n\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\n\nvarying vec3 vWorldDirection;\n\n#include <cube_uv_reflection_fragment>\n\nvoid main() {\n\n	#ifdef ENVMAP_TYPE_CUBE\n\n		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n\n	#else\n\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\n	#endif\n\n	texColor.rgb *= backgroundIntensity;\n\n	gl_FragColor = texColor;\n\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n\n}\n"
                }),
                cA = h(() => {
                    hc = "\nvarying vec3 vWorldDirection;\n\n#include <common>\n\nvoid main() {\n\n	vWorldDirection = transformDirection( position, modelMatrix );\n\n	#include <begin_vertex>\n	#include <project_vertex>\n\n	gl_Position.z = gl_Position.w; // set z to camera.far\n\n}\n", hd = "\nuniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\n\nvarying vec3 vWorldDirection;\n\nvoid main() {\n\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n\n}\n"
                }),
                cw = h(() => {
                    hp = "\n", hf = ""
                }),
                cR = h(() => {
                    hm = "\n", hg = ""
                }),
                cC = h(() => {
                    hv = "\n", h_ = ""
                }),
                cU = h(() => {
                    hx = "\nuniform float scale;\nattribute float lineDistance;\n\nvarying float vLineDistance;\n\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n	vLineDistance = scale * lineDistance;\n\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n\n}\n", hM = "\nuniform vec3 diffuse;\nuniform float opacity;\n\nuniform float dashSize;\nuniform float totalSize;\n\nvarying float vLineDistance;\n\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n\n		discard;\n\n	}\n\n	vec3 outgoingLight = vec3( 0.0 );\n\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n\n	outgoingLight = diffuseColor.rgb; // simple shader\n\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n\n}\n"
                }),
                cP = h(() => {
                    hy = "\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n\n	#endif\n\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n\n}\n", hE = "\nuniform vec3 diffuse;\nuniform float opacity;\n\n#ifndef FLAT_SHADED\n\n	varying vec3 vNormal;\n\n#endif\n\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\n	// accumulation (baked indirect lighting only)\n	#ifdef USE_LIGHTMAP\n\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n\n	#else\n\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n\n	#endif\n\n	// modulation\n	#include <aomap_fragment>\n\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n\n	#include <envmap_fragment>\n\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n\n}\n"
                }),
                cL = h(() => {
                    hS = "\n", hb = ""
                }),
                cD = h(() => {
                    hT = "\n", hA = ""
                }),
                cI = h(() => {
                    hw = "\n#define NORMAL\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\n	varying vec3 vViewPosition;\n\n#endif\n\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n\nvoid main() {\n\n	#include <uv_vertex>\n	#include <batching_vertex>\n\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\n	vViewPosition = - mvPosition.xyz;\n\n#endif\n\n}\n", hR = "\n#define NORMAL\n\nuniform float opacity;\n\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n\n	varying vec3 vViewPosition;\n\n#endif\n\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\n\nvoid main() {\n\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n\n	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n\n	#ifdef OPAQUE\n\n		gl_FragColor.a = 1.0;\n\n	#endif\n\n}\n"
                }),
                cN = h(() => {
                    hC = "\n", hU = ""
                }),
                cO = h(() => {
                    hP = "\n", hL = ""
                }),
                cF = h(() => {
                    hD = "\n", hI = ""
                }),
                cB = h(() => {
                    hN = "\n", hO = ""
                }),
                cz = h(() => {
                    hF = "\n", hB = ""
                }),
                cG = h(() => {
                    hz = "\n", hG = ""
                }),
                cH = h(() => {
                    hX(), hj(), hY(), hq(), hK(), hZ(), hJ(), hQ(), h$(), h0(), h1(), h2(), h3(), h4(), h5(), h6(), h8(), h9(), h7(), ue(), ut(), un(), ui(), ur(), ua(), us(), uo(), ul(), uh(), uu(), uc(), ud(), up(), uf(), um(), ug(), uv(), u_(), ux(), uM(), uy(), uE(), uS(), ub(), uT(), uA(), uw(), uR(), uC(), uU(), uP(), uL(), uD(), uI(), uN(), uO(), uF(), uB(), uz(), uG(), uH(), uk(), uV(), uW(), uX(), uj(), uY(), uq(), uK(), uZ(), uJ(), uQ(), u$(), u0(), u1(), u2(), u3(), u4(), u5(), u6(), u8(), u9(), u7(), ce(), ct(), cn(), ci(), cr(), ca(), cs(), co(), cl(), ch(), cu(), cc(), cd(), cp(), cf(), cm(), cg(), cv(), c_(), cx(), cM(), cy(), cE(), cS(), cb(), cT(), cA(), cw(), cR(), cC(), cU(), cP(), cL(), cD(), cI(), cN(), cO(), cF(), cB(), cz(), cG(), hH = {
                        alphahash_fragment: oR,
                        alphahash_pars_fragment: oC,
                        alphamap_fragment: oU,
                        alphamap_pars_fragment: oP,
                        alphatest_fragment: oL,
                        alphatest_pars_fragment: oD,
                        aomap_fragment: oI,
                        aomap_pars_fragment: oN,
                        batching_pars_vertex: oO,
                        batching_vertex: oF,
                        begin_vertex: oB,
                        beginnormal_vertex: oz,
                        bsdfs: oG,
                        iridescence_fragment: oH,
                        bumpmap_pars_fragment: ok,
                        clipping_planes_fragment: oV,
                        clipping_planes_pars_fragment: oW,
                        clipping_planes_pars_vertex: oX,
                        clipping_planes_vertex: oj,
                        color_fragment: oY,
                        color_pars_fragment: oq,
                        color_pars_vertex: oK,
                        color_vertex: oZ,
                        common: oJ,
                        cube_uv_reflection_fragment: oQ,
                        defaultnormal_vertex: o$,
                        displacementmap_pars_vertex: o0,
                        displacementmap_vertex: o1,
                        emissivemap_fragment: o2,
                        emissivemap_pars_fragment: o3,
                        colorspace_fragment: o4,
                        colorspace_pars_fragment: o5,
                        envmap_fragment: o6,
                        envmap_common_pars_fragment: o8,
                        envmap_pars_fragment: o9,
                        envmap_pars_vertex: o7,
                        envmap_physical_pars_fragment: lu,
                        envmap_vertex: le,
                        fog_vertex: lt,
                        fog_pars_vertex: ln,
                        fog_fragment: li,
                        fog_pars_fragment: lr,
                        gradientmap_pars_fragment: la,
                        lightmap_pars_fragment: ls,
                        lights_lambert_fragment: lo,
                        lights_lambert_pars_fragment: ll,
                        lights_pars_begin: lh,
                        lights_toon_fragment: lc,
                        lights_toon_pars_fragment: ld,
                        lights_phong_fragment: lp,
                        lights_phong_pars_fragment: lf,
                        lights_physical_fragment: lm,
                        lights_physical_pars_fragment: lg,
                        lights_fragment_begin: lv,
                        lights_fragment_maps: l_,
                        lights_fragment_end: lx,
                        logdepthbuf_fragment: lM,
                        logdepthbuf_pars_fragment: ly,
                        logdepthbuf_pars_vertex: lE,
                        logdepthbuf_vertex: lS,
                        map_fragment: lb,
                        map_pars_fragment: lT,
                        map_particle_fragment: lA,
                        map_particle_pars_fragment: lw,
                        metalnessmap_fragment: lR,
                        metalnessmap_pars_fragment: lC,
                        morphinstance_vertex: lU,
                        morphcolor_vertex: lP,
                        morphnormal_vertex: lL,
                        morphtarget_pars_vertex: lD,
                        morphtarget_vertex: lI,
                        normal_fragment_begin: lN,
                        normal_fragment_maps: lO,
                        normal_pars_fragment: lF,
                        normal_pars_vertex: lB,
                        normal_vertex: lz,
                        normalmap_pars_fragment: lG,
                        clearcoat_normal_fragment_begin: lH,
                        clearcoat_normal_fragment_maps: lk,
                        clearcoat_pars_fragment: lV,
                        iridescence_pars_fragment: lW,
                        opaque_fragment: lX,
                        packing: lj,
                        premultiplied_alpha_fragment: lY,
                        project_vertex: lq,
                        dithering_fragment: lK,
                        dithering_pars_fragment: lZ,
                        roughnessmap_fragment: lJ,
                        roughnessmap_pars_fragment: lQ,
                        shadowmap_pars_fragment: l$,
                        shadowmap_pars_vertex: l0,
                        shadowmap_vertex: l1,
                        shadowmask_pars_fragment: l2,
                        skinbase_vertex: l3,
                        skinning_pars_vertex: l4,
                        skinning_vertex: l5,
                        skinnormal_vertex: l6,
                        specularmap_fragment: l8,
                        specularmap_pars_fragment: l9,
                        tonemapping_fragment: l7,
                        tonemapping_pars_fragment: he,
                        transmission_fragment: ht,
                        transmission_pars_fragment: hn,
                        uv_pars_fragment: hi,
                        uv_pars_vertex: hr,
                        uv_vertex: ha,
                        worldpos_vertex: hs,
                        background_vert: ho,
                        background_frag: hl,
                        backgroundCube_vert: hh,
                        backgroundCube_frag: hu,
                        cube_vert: hc,
                        cube_frag: hd,
                        depth_vert: hp,
                        depth_frag: hf,
                        distanceRGBA_vert: hm,
                        distanceRGBA_frag: hg,
                        equirect_vert: hv,
                        equirect_frag: h_,
                        linedashed_vert: hx,
                        linedashed_frag: hM,
                        meshbasic_vert: hy,
                        meshbasic_frag: hE,
                        meshlambert_vert: hS,
                        meshlambert_frag: hb,
                        meshmatcap_vert: hT,
                        meshmatcap_frag: hA,
                        meshnormal_vert: hw,
                        meshnormal_frag: hR,
                        meshphong_vert: hC,
                        meshphong_frag: hU,
                        meshphysical_vert: hP,
                        meshphysical_frag: hL,
                        meshtoon_vert: hD,
                        meshtoon_frag: hI,
                        points_vert: hN,
                        points_frag: hO,
                        shadow_vert: hF,
                        shadow_frag: hB,
                        sprite_vert: hz,
                        sprite_frag: hG
                    }
                }),
                ck = h(() => {
                    aR(), ig(), iv(), hk = {
                        common: {
                            diffuse: {
                                value: new al(0xffffff)
                            },
                            opacity: {
                                value: 1
                            },
                            map: {
                                value: null
                            },
                            mapTransform: {
                                value: new id
                            },
                            alphaMap: {
                                value: null
                            },
                            alphaMapTransform: {
                                value: new id
                            },
                            alphaTest: {
                                value: 0
                            }
                        },
                        specularmap: {
                            specularMap: {
                                value: null
                            },
                            specularMapTransform: {
                                value: new id
                            }
                        },
                        envmap: {
                            envMap: {
                                value: null
                            },
                            envMapRotation: {
                                value: new id
                            },
                            flipEnvMap: {
                                value: -1
                            },
                            reflectivity: {
                                value: 1
                            },
                            ior: {
                                value: 1.5
                            },
                            refractionRatio: {
                                value: .98
                            }
                        },
                        aomap: {
                            aoMap: {
                                value: null
                            },
                            aoMapIntensity: {
                                value: 1
                            },
                            aoMapTransform: {
                                value: new id
                            }
                        },
                        lightmap: {
                            lightMap: {
                                value: null
                            },
                            lightMapIntensity: {
                                value: 1
                            },
                            lightMapTransform: {
                                value: new id
                            }
                        },
                        bumpmap: {
                            bumpMap: {
                                value: null
                            },
                            bumpMapTransform: {
                                value: new id
                            },
                            bumpScale: {
                                value: 1
                            }
                        },
                        normalmap: {
                            normalMap: {
                                value: null
                            },
                            normalMapTransform: {
                                value: new id
                            },
                            normalScale: {
                                value: new ic(1, 1)
                            }
                        },
                        displacementmap: {
                            displacementMap: {
                                value: null
                            },
                            displacementMapTransform: {
                                value: new id
                            },
                            displacementScale: {
                                value: 1
                            },
                            displacementBias: {
                                value: 0
                            }
                        },
                        emissivemap: {
                            emissiveMap: {
                                value: null
                            },
                            emissiveMapTransform: {
                                value: new id
                            }
                        },
                        metalnessmap: {
                            metalnessMap: {
                                value: null
                            },
                            metalnessMapTransform: {
                                value: new id
                            }
                        },
                        roughnessmap: {
                            roughnessMap: {
                                value: null
                            },
                            roughnessMapTransform: {
                                value: new id
                            }
                        },
                        gradientmap: {
                            gradientMap: {
                                value: null
                            }
                        },
                        fog: {
                            fogDensity: {
                                value: 25e-5
                            },
                            fogNear: {
                                value: 1
                            },
                            fogFar: {
                                value: 2e3
                            },
                            fogColor: {
                                value: new al(0xffffff)
                            }
                        },
                        lights: {
                            ambientLightColor: {
                                value: []
                            },
                            lightProbe: {
                                value: []
                            },
                            directionalLights: {
                                value: [],
                                properties: {
                                    direction: {},
                                    color: {}
                                }
                            },
                            directionalLightShadows: {
                                value: [],
                                properties: {
                                    shadowIntensity: 1,
                                    shadowBias: {},
                                    shadowNormalBias: {},
                                    shadowRadius: {},
                                    shadowMapSize: {}
                                }
                            },
                            directionalShadowMap: {
                                value: []
                            },
                            directionalShadowMatrix: {
                                value: []
                            },
                            spotLights: {
                                value: [],
                                properties: {
                                    color: {},
                                    position: {},
                                    direction: {},
                                    distance: {},
                                    coneCos: {},
                                    penumbraCos: {},
                                    decay: {}
                                }
                            },
                            spotLightShadows: {
                                value: [],
                                properties: {
                                    shadowIntensity: 1,
                                    shadowBias: {},
                                    shadowNormalBias: {},
                                    shadowRadius: {},
                                    shadowMapSize: {}
                                }
                            },
                            spotLightMap: {
                                value: []
                            },
                            spotShadowMap: {
                                value: []
                            },
                            spotLightMatrix: {
                                value: []
                            },
                            pointLights: {
                                value: [],
                                properties: {
                                    color: {},
                                    position: {},
                                    decay: {},
                                    distance: {}
                                }
                            },
                            pointLightShadows: {
                                value: [],
                                properties: {
                                    shadowIntensity: 1,
                                    shadowBias: {},
                                    shadowNormalBias: {},
                                    shadowRadius: {},
                                    shadowMapSize: {},
                                    shadowCameraNear: {},
                                    shadowCameraFar: {}
                                }
                            },
                            pointShadowMap: {
                                value: []
                            },
                            pointShadowMatrix: {
                                value: []
                            },
                            hemisphereLights: {
                                value: [],
                                properties: {
                                    direction: {},
                                    skyColor: {},
                                    groundColor: {}
                                }
                            },
                            rectAreaLights: {
                                value: [],
                                properties: {
                                    color: {},
                                    position: {},
                                    width: {},
                                    height: {}
                                }
                            },
                            ltc_1: {
                                value: null
                            },
                            ltc_2: {
                                value: null
                            }
                        },
                        points: {
                            diffuse: {
                                value: new al(0xffffff)
                            },
                            opacity: {
                                value: 1
                            },
                            size: {
                                value: 1
                            },
                            scale: {
                                value: 1
                            },
                            map: {
                                value: null
                            },
                            alphaMap: {
                                value: null
                            },
                            alphaMapTransform: {
                                value: new id
                            },
                            alphaTest: {
                                value: 0
                            },
                            uvTransform: {
                                value: new id
                            }
                        },
                        sprite: {
                            diffuse: {
                                value: new al(0xffffff)
                            },
                            opacity: {
                                value: 1
                            },
                            center: {
                                value: new ic(.5, .5)
                            },
                            rotation: {
                                value: 0
                            },
                            map: {
                                value: null
                            },
                            mapTransform: {
                                value: new id
                            },
                            alphaMap: {
                                value: null
                            },
                            alphaMapTransform: {
                                value: new id
                            },
                            alphaTest: {
                                value: 0
                            }
                        }
                    }
                }),
                cV = h(() => {
                    cH(), sv(), ig(), i0(), ck(), aR(), iv(), (hV = {
                        basic: {
                            uniforms: aZ([hk.common, hk.specularmap, hk.envmap, hk.aomap, hk.lightmap, hk.fog]),
                            vertexShader: hH.meshbasic_vert,
                            fragmentShader: hH.meshbasic_frag
                        },
                        lambert: {
                            uniforms: aZ([hk.common, hk.specularmap, hk.envmap, hk.aomap, hk.lightmap, hk.emissivemap, hk.bumpmap, hk.normalmap, hk.displacementmap, hk.fog, hk.lights, {
                                emissive: {
                                    value: new al(0)
                                }
                            }]),
                            vertexShader: hH.meshlambert_vert,
                            fragmentShader: hH.meshlambert_frag
                        },
                        phong: {
                            uniforms: aZ([hk.common, hk.specularmap, hk.envmap, hk.aomap, hk.lightmap, hk.emissivemap, hk.bumpmap, hk.normalmap, hk.displacementmap, hk.fog, hk.lights, {
                                emissive: {
                                    value: new al(0)
                                },
                                specular: {
                                    value: new al(1118481)
                                },
                                shininess: {
                                    value: 30
                                }
                            }]),
                            vertexShader: hH.meshphong_vert,
                            fragmentShader: hH.meshphong_frag
                        },
                        standard: {
                            uniforms: aZ([hk.common, hk.envmap, hk.aomap, hk.lightmap, hk.emissivemap, hk.bumpmap, hk.normalmap, hk.displacementmap, hk.roughnessmap, hk.metalnessmap, hk.fog, hk.lights, {
                                emissive: {
                                    value: new al(0)
                                },
                                roughness: {
                                    value: 1
                                },
                                metalness: {
                                    value: 0
                                },
                                envMapIntensity: {
                                    value: 1
                                }
                            }]),
                            vertexShader: hH.meshphysical_vert,
                            fragmentShader: hH.meshphysical_frag
                        },
                        toon: {
                            uniforms: aZ([hk.common, hk.aomap, hk.lightmap, hk.emissivemap, hk.bumpmap, hk.normalmap, hk.displacementmap, hk.gradientmap, hk.fog, hk.lights, {
                                emissive: {
                                    value: new al(0)
                                }
                            }]),
                            vertexShader: hH.meshtoon_vert,
                            fragmentShader: hH.meshtoon_frag
                        },
                        matcap: {
                            uniforms: aZ([hk.common, hk.bumpmap, hk.normalmap, hk.displacementmap, hk.fog, {
                                matcap: {
                                    value: null
                                }
                            }]),
                            vertexShader: hH.meshmatcap_vert,
                            fragmentShader: hH.meshmatcap_frag
                        },
                        points: {
                            uniforms: aZ([hk.points, hk.fog]),
                            vertexShader: hH.points_vert,
                            fragmentShader: hH.points_frag
                        },
                        dashed: {
                            uniforms: aZ([hk.common, hk.fog, {
                                scale: {
                                    value: 1
                                },
                                dashSize: {
                                    value: 1
                                },
                                totalSize: {
                                    value: 2
                                }
                            }]),
                            vertexShader: hH.linedashed_vert,
                            fragmentShader: hH.linedashed_frag
                        },
                        depth: {
                            uniforms: aZ([hk.common, hk.displacementmap]),
                            vertexShader: hH.depth_vert,
                            fragmentShader: hH.depth_frag
                        },
                        normal: {
                            uniforms: aZ([hk.common, hk.bumpmap, hk.normalmap, hk.displacementmap, {
                                opacity: {
                                    value: 1
                                }
                            }]),
                            vertexShader: hH.meshnormal_vert,
                            fragmentShader: hH.meshnormal_frag
                        },
                        sprite: {
                            uniforms: aZ([hk.sprite, hk.fog]),
                            vertexShader: hH.sprite_vert,
                            fragmentShader: hH.sprite_frag
                        },
                        background: {
                            uniforms: {
                                uvTransform: {
                                    value: new id
                                },
                                t2D: {
                                    value: null
                                },
                                backgroundIntensity: {
                                    value: 1
                                }
                            },
                            vertexShader: hH.background_vert,
                            fragmentShader: hH.background_frag
                        },
                        backgroundCube: {
                            uniforms: {
                                envMap: {
                                    value: null
                                },
                                flipEnvMap: {
                                    value: -1
                                },
                                backgroundBlurriness: {
                                    value: 0
                                },
                                backgroundIntensity: {
                                    value: 1
                                },
                                backgroundRotation: {
                                    value: new id
                                }
                            },
                            vertexShader: hH.backgroundCube_vert,
                            fragmentShader: hH.backgroundCube_frag
                        },
                        cube: {
                            uniforms: {
                                tCube: {
                                    value: null
                                },
                                tFlip: {
                                    value: -1
                                },
                                opacity: {
                                    value: 1
                                }
                            },
                            vertexShader: hH.cube_vert,
                            fragmentShader: hH.cube_frag
                        },
                        equirect: {
                            uniforms: {
                                tEquirect: {
                                    value: null
                                }
                            },
                            vertexShader: hH.equirect_vert,
                            fragmentShader: hH.equirect_frag
                        },
                        distanceRGBA: {
                            uniforms: aZ([hk.common, hk.displacementmap, {
                                referencePosition: {
                                    value: new iV
                                },
                                nearDistance: {
                                    value: 1
                                },
                                farDistance: {
                                    value: 1e3
                                }
                            }]),
                            vertexShader: hH.distanceRGBA_vert,
                            fragmentShader: hH.distanceRGBA_frag
                        },
                        shadow: {
                            uniforms: aZ([hk.lights, hk.fog, {
                                color: {
                                    value: new al(0)
                                },
                                opacity: {
                                    value: 1
                                }
                            }]),
                            vertexShader: hH.shadow_vert,
                            fragmentShader: hH.shadow_frag
                        }
                    }).physical = {
                        uniforms: aZ([hV.standard.uniforms, {
                            clearcoat: {
                                value: 0
                            },
                            clearcoatMap: {
                                value: null
                            },
                            clearcoatMapTransform: {
                                value: new id
                            },
                            clearcoatNormalMap: {
                                value: null
                            },
                            clearcoatNormalMapTransform: {
                                value: new id
                            },
                            clearcoatNormalScale: {
                                value: new ic(1, 1)
                            },
                            clearcoatRoughness: {
                                value: 0
                            },
                            clearcoatRoughnessMap: {
                                value: null
                            },
                            clearcoatRoughnessMapTransform: {
                                value: new id
                            },
                            dispersion: {
                                value: 0
                            },
                            iridescence: {
                                value: 0
                            },
                            iridescenceMap: {
                                value: null
                            },
                            iridescenceMapTransform: {
                                value: new id
                            },
                            iridescenceIOR: {
                                value: 1.3
                            },
                            iridescenceThicknessMinimum: {
                                value: 100
                            },
                            iridescenceThicknessMaximum: {
                                value: 400
                            },
                            iridescenceThicknessMap: {
                                value: null
                            },
                            iridescenceThicknessMapTransform: {
                                value: new id
                            },
                            sheen: {
                                value: 0
                            },
                            sheenColor: {
                                value: new al(0)
                            },
                            sheenColorMap: {
                                value: null
                            },
                            sheenColorMapTransform: {
                                value: new id
                            },
                            sheenRoughness: {
                                value: 1
                            },
                            sheenRoughnessMap: {
                                value: null
                            },
                            sheenRoughnessMapTransform: {
                                value: new id
                            },
                            transmission: {
                                value: 0
                            },
                            transmissionMap: {
                                value: null
                            },
                            transmissionMapTransform: {
                                value: new id
                            },
                            transmissionSamplerSize: {
                                value: new ic
                            },
                            transmissionSamplerMap: {
                                value: null
                            },
                            thickness: {
                                value: 0
                            },
                            thicknessMap: {
                                value: null
                            },
                            thicknessMapTransform: {
                                value: new id
                            },
                            attenuationDistance: {
                                value: 0
                            },
                            attenuationColor: {
                                value: new al(0)
                            },
                            specularColor: {
                                value: new al(1, 1, 1)
                            },
                            specularColorMap: {
                                value: null
                            },
                            specularColorMapTransform: {
                                value: new id
                            },
                            specularIntensity: {
                                value: 1
                            },
                            specularIntensityMap: {
                                value: null
                            },
                            specularIntensityMapTransform: {
                                value: new id
                            },
                            anisotropyVector: {
                                value: new ic
                            },
                            anisotropyMap: {
                                value: null
                            },
                            anisotropyMapTransform: {
                                value: new id
                            }
                        }]),
                        vertexShader: hH.meshphysical_vert,
                        fragmentShader: hH.meshphysical_frag
                    }
                });

            function cW(e, t, n, i, r, a, s) {
                let o = new al(0),
                    l = !0 === a ? 0 : 1,
                    h, u, c = null,
                    d = 0,
                    p = null;

                function f(e) {
                    let i = !0 === e.isScene ? e.background : null;
                    return i && i.isTexture && (i = (e.backgroundBlurriness > 0 ? n : t).get(i)), i
                }

                function m(t, n) {
                    t.getRGB(cX, aJ(e)), i.buffers.color.setClear(cX.r, cX.g, cX.b, n, s)
                }
                return {
                    getClearColor: function() {
                        return o
                    },
                    setClearColor: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                        o.set(e), m(o, l = t)
                    },
                    getClearAlpha: function() {
                        return l
                    },
                    setClearAlpha: function(e) {
                        m(o, l = e)
                    },
                    render: function(t) {
                        let n = !1,
                            r = f(t);
                        null === r ? m(o, l) : r && r.isColor && (m(r, 1), n = !0);
                        let a = e.xr.getEnvironmentBlendMode();
                        "additive" === a ? i.buffers.color.setClear(0, 0, 0, 1, s) : "alpha-blend" === a && i.buffers.color.setClear(0, 0, 0, 0, s), (e.autoClear || n) && (i.buffers.depth.setTest(!0), i.buffers.depth.setMask(!0), i.buffers.color.setMask(!0), e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil))
                    },
                    addToRenderList: function(t, n) {
                        let i = f(n);
                        i && (i.isCubeTexture || i.mapping === tf) ? (void 0 === u && ((u = new aX(new aj(1, 1, 1), new a1({
                            name: "BackgroundCubeMaterial",
                            uniforms: aK(hV.backgroundCube.uniforms),
                            vertexShader: hV.backgroundCube.vertexShader,
                            fragmentShader: hV.backgroundCube.fragmentShader,
                            side: eA,
                            depthTest: !1,
                            depthWrite: !1,
                            fog: !1
                        }))).geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(e, t, n) {
                            this.matrixWorld.copyPosition(n.matrixWorld)
                        }, Object.defineProperty(u.material, "envMap", {
                            get: function() {
                                return this.uniforms.envMap.value
                            }
                        }), r.update(u)), cj.copy(n.backgroundRotation), cj.x *= -1, cj.y *= -1, cj.z *= -1, i.isCubeTexture && !1 === i.isRenderTargetTexture && (cj.y *= -1, cj.z *= -1), u.material.uniforms.envMap.value = i, u.material.uniforms.flipEnvMap.value = i.isCubeTexture && !1 === i.isRenderTargetTexture ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = n.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(cY.makeRotationFromEuler(cj)), u.material.toneMapped = iw.getTransfer(i.colorSpace) !== nb, (c !== i || d !== i.version || p !== e.toneMapping) && (u.material.needsUpdate = !0, c = i, d = i.version, p = e.toneMapping), u.layers.enableAll(), t.unshift(u, u.geometry, u.material, 0, 0, null)) : i && i.isTexture && (void 0 === h && ((h = new aX(new sg(2, 2), new a1({
                            name: "BackgroundMaterial",
                            uniforms: aK(hV.background.uniforms),
                            vertexShader: hV.background.vertexShader,
                            fragmentShader: hV.background.fragmentShader,
                            side: eT,
                            depthTest: !1,
                            depthWrite: !1,
                            fog: !1
                        }))).geometry.deleteAttribute("normal"), Object.defineProperty(h.material, "map", {
                            get: function() {
                                return this.uniforms.t2D.value
                            }
                        }), r.update(h)), h.material.uniforms.t2D.value = i, h.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, h.material.toneMapped = iw.getTransfer(i.colorSpace) !== nb, !0 === i.matrixAutoUpdate && i.updateMatrix(), h.material.uniforms.uvTransform.value.copy(i.matrix), (c !== i || d !== i.version || p !== e.toneMapping) && (h.material.needsUpdate = !0, c = i, d = i.version, p = e.toneMapping), h.layers.enableAll(), t.unshift(h, h.geometry, h.material, 0, 0, null))
                    },
                    dispose: function() {
                        void 0 !== u && (u.geometry.dispose(), u.material.dispose(), u = void 0), void 0 !== h && (h.geometry.dispose(), h.material.dispose(), h = void 0)
                    }
                }
            }
            var cX, cj, cY, cq = h(() => {
                nX(), aq(), sj(), sM(), aR(), iU(), ae(), r7(), aY(), cV(), sv(), cX = {
                    r: 0,
                    b: 0,
                    g: 0
                }, cj = new rR, cY = new r_
            });

            function cK(e, t) {
                let n = e.getParameter(e.MAX_VERTEX_ATTRIBS),
                    i = {},
                    r = h(null),
                    a = r,
                    s = !1;

                function o(t) {
                    return e.bindVertexArray(t)
                }

                function l(t) {
                    return e.deleteVertexArray(t)
                }

                function h(e) {
                    let t = [],
                        i = [],
                        r = [];
                    for (let e = 0; e < n; e++) t[e] = 0, i[e] = 0, r[e] = 0;
                    return {
                        geometry: null,
                        program: null,
                        wireframe: !1,
                        newAttributes: t,
                        enabledAttributes: i,
                        attributeDivisors: r,
                        object: e,
                        attributes: {},
                        index: null
                    }
                }

                function u() {
                    let e = a.newAttributes;
                    for (let t = 0, n = e.length; t < n; t++) e[t] = 0
                }

                function c(e) {
                    d(e, 0)
                }

                function d(t, n) {
                    let i = a.newAttributes,
                        r = a.enabledAttributes,
                        s = a.attributeDivisors;
                    i[t] = 1, 0 === r[t] && (e.enableVertexAttribArray(t), r[t] = 1), s[t] !== n && (e.vertexAttribDivisor(t, n), s[t] = n)
                }

                function p() {
                    let t = a.newAttributes,
                        n = a.enabledAttributes;
                    for (let i = 0, r = n.length; i < r; i++) n[i] !== t[i] && (e.disableVertexAttribArray(i), n[i] = 0)
                }

                function f(t, n, i, r, a, s, o) {
                    !0 === o ? e.vertexAttribIPointer(t, n, i, a, s) : e.vertexAttribPointer(t, n, i, r, a, s)
                }

                function m() {
                    g(), s = !0, a !== r && o((a = r).object)
                }

                function g() {
                    r.geometry = null, r.program = null, r.wireframe = !1
                }
                return {
                    setup: function(n, r, l, m, g) {
                        let v, _, x, M;
                        let y = !1,
                            E = (v = !0 === r.wireframe, void 0 === (_ = i[m.id]) && (_ = {}, i[m.id] = _), void 0 === (x = _[l.id]) && (x = {}, _[l.id] = x), void 0 === (M = x[v]) && (M = h(e.createVertexArray()), x[v] = M), M);
                        a !== E && o((a = E).object), (y = function(e, t, n, i) {
                            let r = a.attributes,
                                s = t.attributes,
                                o = 0,
                                l = n.getAttributes();
                            for (let t in l)
                                if (l[t].location >= 0) {
                                    let n = r[t],
                                        i = s[t];
                                    if (void 0 === i && ("instanceMatrix" === t && e.instanceMatrix && (i = e.instanceMatrix), "instanceColor" === t && e.instanceColor && (i = e.instanceColor)), void 0 === n || n.attribute !== i || i && n.data !== i.data) return !0;
                                    o++
                                }
                            return a.attributesNum !== o || a.index !== i
                        }(n, m, l, g)) && function(e, t, n, i) {
                            let r = {},
                                s = t.attributes,
                                o = 0,
                                l = n.getAttributes();
                            for (let t in l)
                                if (l[t].location >= 0) {
                                    let n = s[t];
                                    void 0 === n && ("instanceMatrix" === t && e.instanceMatrix && (n = e.instanceMatrix), "instanceColor" === t && e.instanceColor && (n = e.instanceColor));
                                    let i = {};
                                    i.attribute = n, n && n.data && (i.data = n.data), r[t] = i, o++
                                }
                            a.attributes = r, a.attributesNum = o, a.index = i
                        }(n, m, l, g), null !== g && t.update(g, e.ELEMENT_ARRAY_BUFFER), (y || s) && (s = !1, function(n, i, r, a) {
                            u();
                            let s = a.attributes,
                                o = r.getAttributes(),
                                l = i.defaultAttributeValues;
                            for (let i in o) {
                                let r = o[i];
                                if (r.location >= 0) {
                                    let o = s[i];
                                    if (void 0 === o && ("instanceMatrix" === i && n.instanceMatrix && (o = n.instanceMatrix), "instanceColor" === i && n.instanceColor && (o = n.instanceColor)), void 0 !== o) {
                                        let i = o.normalized,
                                            s = o.itemSize,
                                            l = t.get(o);
                                        if (void 0 === l) continue;
                                        let h = l.buffer,
                                            u = l.type,
                                            p = l.bytesPerElement,
                                            m = u === e.INT || u === e.UNSIGNED_INT || o.gpuType === tR;
                                        if (o.isInterleavedBufferAttribute) {
                                            let t = o.data,
                                                l = t.stride,
                                                g = o.offset;
                                            if (t.isInstancedInterleavedBuffer) {
                                                for (let e = 0; e < r.locationSize; e++) d(r.location + e, t.meshPerAttribute);
                                                !0 !== n.isInstancedMesh && void 0 === a._maxInstanceCount && (a._maxInstanceCount = t.meshPerAttribute * t.count)
                                            } else
                                                for (let e = 0; e < r.locationSize; e++) c(r.location + e);
                                            e.bindBuffer(e.ARRAY_BUFFER, h);
                                            for (let e = 0; e < r.locationSize; e++) f(r.location + e, s / r.locationSize, u, i, l * p, (g + s / r.locationSize * e) * p, m)
                                        } else {
                                            if (o.isInstancedBufferAttribute) {
                                                for (let e = 0; e < r.locationSize; e++) d(r.location + e, o.meshPerAttribute);
                                                !0 !== n.isInstancedMesh && void 0 === a._maxInstanceCount && (a._maxInstanceCount = o.meshPerAttribute * o.count)
                                            } else
                                                for (let e = 0; e < r.locationSize; e++) c(r.location + e);
                                            e.bindBuffer(e.ARRAY_BUFFER, h);
                                            for (let e = 0; e < r.locationSize; e++) f(r.location + e, s / r.locationSize, u, i, s * p, s / r.locationSize * e * p, m)
                                        }
                                    } else if (void 0 !== l) {
                                        let t = l[i];
                                        if (void 0 !== t) switch (t.length) {
                                            case 2:
                                                e.vertexAttrib2fv(r.location, t);
                                                break;
                                            case 3:
                                                e.vertexAttrib3fv(r.location, t);
                                                break;
                                            case 4:
                                                e.vertexAttrib4fv(r.location, t);
                                                break;
                                            default:
                                                e.vertexAttrib1fv(r.location, t)
                                        }
                                    }
                                }
                            }
                            p()
                        }(n, r, l, m), null !== g && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(g).buffer))
                    },
                    reset: m,
                    resetDefaultState: g,
                    dispose: function() {
                        for (let e in m(), i) {
                            let t = i[e];
                            for (let e in t) {
                                let n = t[e];
                                for (let e in n) l(n[e].object), delete n[e];
                                delete t[e]
                            }
                            delete i[e]
                        }
                    },
                    releaseStatesOfGeometry: function(e) {
                        if (void 0 === i[e.id]) return;
                        let t = i[e.id];
                        for (let e in t) {
                            let n = t[e];
                            for (let e in n) l(n[e].object), delete n[e];
                            delete t[e]
                        }
                        delete i[e.id]
                    },
                    releaseStatesOfProgram: function(e) {
                        for (let t in i) {
                            let n = i[t];
                            if (void 0 === n[e.id]) continue;
                            let r = n[e.id];
                            for (let e in r) l(r[e].object), delete r[e];
                            delete n[e.id]
                        }
                    },
                    initAttributes: u,
                    enableAttribute: c,
                    disableUnusedAttributes: p
                }
            }
            var cZ = h(() => {
                nX()
            });

            function cJ(e, t, n) {
                let i;

                function r(t, r, a) {
                    0 !== a && (e.drawArraysInstanced(i, t, r, a), n.update(r, i, a))
                }
                this.setMode = function(e) {
                    i = e
                }, this.render = function(t, r) {
                    e.drawArrays(i, t, r), n.update(r, i, 1)
                }, this.renderInstances = r, this.renderMultiDraw = function(e, r, a) {
                    if (0 === a) return;
                    t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, e, 0, r, 0, a);
                    let s = 0;
                    for (let e = 0; e < a; e++) s += r[e];
                    n.update(s, i, 1)
                }, this.renderMultiDrawInstances = function(e, a, s, o) {
                    if (0 === s) return;
                    let l = t.get("WEBGL_multi_draw");
                    if (null === l)
                        for (let t = 0; t < e.length; t++) r(e[t], a[t], o[t]);
                    else {
                        l.multiDrawArraysInstancedWEBGL(i, e, 0, a, 0, o, 0, s);
                        let t = 0;
                        for (let e = 0; e < s; e++) t += a[e] * o[e];
                        n.update(t, i, 1)
                    }
                }
            }
            var cQ = h(() => {});

            function c$(e, t, n, i) {
                let r;

                function a(t) {
                    if ("highp" === t) {
                        if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
                        t = "mediump"
                    }
                    return "mediump" === t && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
                }
                let s = void 0 !== n.precision ? n.precision : "highp",
                    o = a(s);
                o !== s && (console.warn("THREE.WebGLRenderer:", s, "not supported, using", o, "instead."), s = o);
                let l = !0 === n.logarithmicDepthBuffer,
                    h = !0 === n.reverseDepthBuffer && t.has("EXT_clip_control"),
                    u = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
                    c = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
                return {
                    isWebGL2: !0,
                    getMaxAnisotropy: function() {
                        if (void 0 !== r) return r;
                        if (!0 === t.has("EXT_texture_filter_anisotropic")) {
                            let n = t.get("EXT_texture_filter_anisotropic");
                            r = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
                        } else r = 0;
                        return r
                    },
                    getMaxPrecision: a,
                    textureFormatReadable: function(t) {
                        return !(t !== tB && i.convert(t) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))
                    },
                    textureTypeReadable: function(n) {
                        let r = n === tP && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
                        return !(n !== tb && i.convert(n) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE) && n !== tU && !r)
                    },
                    precision: s,
                    logarithmicDepthBuffer: l,
                    reverseDepthBuffer: h,
                    maxTextures: u,
                    maxVertexTextures: c,
                    maxTextureSize: e.getParameter(e.MAX_TEXTURE_SIZE),
                    maxCubemapSize: e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),
                    maxAttributes: e.getParameter(e.MAX_VERTEX_ATTRIBS),
                    maxVertexUniforms: e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),
                    maxVaryings: e.getParameter(e.MAX_VARYING_VECTORS),
                    maxFragmentUniforms: e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),
                    vertexTextures: c > 0,
                    maxSamples: e.getParameter(e.MAX_SAMPLES)
                }
            }
            var c0 = h(() => {
                nX()
            });

            function c1(e) {
                let t = this,
                    n = null,
                    i = 0,
                    r = !1,
                    a = !1,
                    s = new su,
                    o = new id,
                    l = {
                        value: null,
                        needsUpdate: !1
                    };

                function h(e, n, i, r) {
                    let a = null !== e ? e.length : 0,
                        h = null;
                    if (0 !== a) {
                        if (h = l.value, !0 !== r || null === h) {
                            let t = i + 4 * a,
                                r = n.matrixWorldInverse;
                            o.getNormalMatrix(r), (null === h || h.length < t) && (h = new Float32Array(t));
                            for (let t = 0, n = i; t !== a; ++t, n += 4) s.copy(e[t]).applyMatrix4(r, o), s.normal.toArray(h, n), h[n + 3] = s.constant
                        }
                        l.value = h, l.needsUpdate = !0
                    }
                    return t.numPlanes = a, t.numIntersection = 0, h
                }
                this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e, t) {
                    let n = 0 !== e.length || t || 0 !== i || r;
                    return r = t, i = e.length, n
                }, this.beginShadows = function() {
                    a = !0, h(null)
                }, this.endShadows = function() {
                    a = !1
                }, this.setGlobalState = function(e, t) {
                    n = h(e, t, 0)
                }, this.setState = function(s, o, u) {
                    let c = s.clippingPlanes,
                        d = s.clipIntersection,
                        p = s.clipShadows,
                        f = e.get(s);
                    if (r && null !== c && 0 !== c.length && (!a || p)) {
                        let e = a ? 0 : i,
                            t = 4 * e,
                            r = f.clippingState || null;
                        l.value = r, r = h(c, o, t, u);
                        for (let e = 0; e !== t; ++e) r[e] = n[e];
                        f.clippingState = r, this.numIntersection = d ? this.numPlanes : 0, this.numPlanes += e
                    } else a ? h(null) : (l.value !== n && (l.value = n, l.needsUpdate = i > 0), t.numPlanes = i, t.numIntersection = 0)
                }
            }
            var c2 = h(() => {
                iv(), sP()
            });

            function c3(e) {
                let t = new WeakMap;

                function n(e, t) {
                    return t === td ? e.mapping = tu : t === tp && (e.mapping = tc), e
                }

                function i(e) {
                    let n = e.target;
                    n.removeEventListener("dispose", i);
                    let r = t.get(n);
                    void 0 !== r && (t.delete(n), r.dispose())
                }
                return {
                    get: function(r) {
                        if (r && r.isTexture) {
                            let a = r.mapping;
                            if (a === td || a === tp) {
                                if (t.has(r)) return n(t.get(r).texture, r.mapping); {
                                    let a = r.image;
                                    if (!a || !(a.height > 0)) return null; {
                                        let s = new a7(a.height);
                                        return s.fromEquirectangularTexture(e, r), t.set(r, s), r.addEventListener("dispose", i), n(s.texture, r.mapping)
                                    }
                                }
                            }
                        }
                        return r
                    },
                    dispose: function() {
                        t = new WeakMap
                    }
                }
            }
            var c4 = h(() => {
                nX(), sT()
            });

            function c5(e, t, n) {
                let i = new iz(e, t, n);
                return i.texture.mapping = tf, i.texture.name = "PMREM.cubeUv", i.scissorTest = !0, i
            }

            function c6(e, t, n, i, r) {
                e.viewport.set(t, n, i, r), e.scissor.set(t, n, i, r)
            }

            function c8() {
                return new a1({
                    name: "EquirectangularToCubeUV",
                    uniforms: {
                        envMap: {
                            value: null
                        }
                    },
                    vertexShader: c7(),
                    fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		",
                    blending: eR,
                    depthTest: !1,
                    depthWrite: !1
                })
            }

            function c9() {
                return new a1({
                    name: "CubemapToCubeUV",
                    uniforms: {
                        envMap: {
                            value: null
                        },
                        flipEnvMap: {
                            value: -1
                        }
                    },
                    vertexShader: c7(),
                    fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		",
                    blending: eR,
                    depthTest: !1,
                    depthWrite: !1
                })
            }

            function c7() {
                return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	"
            }
            var de, dt, dn, di, dr, da, ds, dl, dh, du, dc, dd = h(() => {
                nX(), aP(), aL(), aY(), og(), sE(), sM(), i0(), aR(), iZ(), aU(), aq(), de = [.125, .215, .35, .446, .526, .582], dt = new s7, dn = new al, di = null, dr = 0, da = 0, ds = !1, dh = 1 / (dl = (1 + Math.sqrt(5)) / 2), du = [new iV(-dl, dh, 0), new iV(dl, dh, 0), new iV(-dh, 0, dl), new iV(dh, 0, dl), new iV(0, dl, -dh), new iV(0, dl, dh), new iV(-1, 1, -1), new iV(1, 1, -1), new iV(-1, 1, 1), new iV(1, 1, 1)], dc = class {
                    fromScene(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1,
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100;
                        di = this._renderer.getRenderTarget(), dr = this._renderer.getActiveCubeFace(), da = this._renderer.getActiveMipmapLevel(), ds = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256);
                        let r = this._allocateTargets();
                        return r.depthBuffer = !0, this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r
                    }
                    fromEquirectangular(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        return this._fromTexture(e, t)
                    }
                    fromCubemap(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        return this._fromTexture(e, t)
                    }
                    compileCubemapShader() {
                        null === this._cubemapMaterial && (this._cubemapMaterial = c9(), this._compileMaterial(this._cubemapMaterial))
                    }
                    compileEquirectangularShader() {
                        null === this._equirectMaterial && (this._equirectMaterial = c8(), this._compileMaterial(this._equirectMaterial))
                    }
                    dispose() {
                        this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose()
                    }
                    _setSize(e) {
                        this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax)
                    }
                    _dispose() {
                        null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
                        for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose()
                    }
                    _cleanup(e) {
                        this._renderer.setRenderTarget(di, dr, da), this._renderer.xr.enabled = ds, e.scissorTest = !1, c6(e, 0, 0, e.width, e.height)
                    }
                    _fromTexture(e, t) {
                        e.mapping === tu || e.mapping === tc ? this._setSize(0 === e.image.length ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), di = this._renderer.getRenderTarget(), dr = this._renderer.getActiveCubeFace(), da = this._renderer.getActiveMipmapLevel(), ds = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
                        let n = t || this._allocateTargets();
                        return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
                    }
                    _allocateTargets() {
                        let e = 3 * Math.max(this._cubeSize, 112),
                            t = 4 * this._cubeSize,
                            n = {
                                magFilter: ty,
                                minFilter: ty,
                                generateMipmaps: !1,
                                type: tP,
                                format: tB,
                                colorSpace: nE,
                                depthBuffer: !1
                            },
                            i = c5(e, t, n);
                        if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
                            let i, r;
                            null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = c5(e, t, n);
                            let {
                                _lodMax: a
                            } = this;
                            ({
                                sizeLods: this._sizeLods,
                                lodPlanes: this._lodPlanes,
                                sigmas: this._sigmas
                            } = function(e) {
                                let t = [],
                                    n = [],
                                    i = [],
                                    r = e,
                                    a = e - 4 + 1 + de.length;
                                for (let s = 0; s < a; s++) {
                                    let a = Math.pow(2, r);
                                    n.push(a);
                                    let o = 1 / a;
                                    s > e - 4 ? o = de[s - e + 4 - 1] : 0 === s && (o = 0), i.push(o);
                                    let l = 1 / (a - 2),
                                        h = -l,
                                        u = 1 + l,
                                        c = [h, h, u, h, u, u, h, h, u, u, h, u],
                                        d = new Float32Array(108),
                                        p = new Float32Array(72),
                                        f = new Float32Array(36);
                                    for (let e = 0; e < 6; e++) {
                                        let t = e % 3 * 2 / 3 - 1,
                                            n = e > 2 ? 0 : -1,
                                            i = [t, n, 0, t + 2 / 3, n, 0, t + 2 / 3, n + 1, 0, t, n, 0, t + 2 / 3, n + 1, 0, t, n + 1, 0];
                                        d.set(i, 18 * e), p.set(c, 12 * e);
                                        let r = [e, e, e, e, e, e];
                                        f.set(r, 6 * e)
                                    }
                                    let m = new aw;
                                    m.setAttribute("position", new ag(d, 3)), m.setAttribute("uv", new ag(p, 2)), m.setAttribute("faceIndex", new ag(f, 1)), t.push(m), r > 4 && r--
                                }
                                return {
                                    lodPlanes: t,
                                    sizeLods: n,
                                    sigmas: i
                                }
                            }(a)), this._blurMaterial = (i = new Float32Array(20), r = new iV(0, 1, 0), new a1({
                                name: "SphericalGaussianBlur",
                                defines: {
                                    n: 20,
                                    CUBEUV_TEXEL_WIDTH: 1 / e,
                                    CUBEUV_TEXEL_HEIGHT: 1 / t,
                                    CUBEUV_MAX_MIP: "".concat(a, ".0")
                                },
                                uniforms: {
                                    envMap: {
                                        value: null
                                    },
                                    samples: {
                                        value: 1
                                    },
                                    weights: {
                                        value: i
                                    },
                                    latitudinal: {
                                        value: !1
                                    },
                                    dTheta: {
                                        value: 0
                                    },
                                    mipInt: {
                                        value: 0
                                    },
                                    poleAxis: {
                                        value: r
                                    }
                                },
                                vertexShader: c7(),
                                fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		",
                                blending: eR,
                                depthTest: !1,
                                depthWrite: !1
                            }))
                        }
                        return i
                    }
                    _compileMaterial(e) {
                        let t = new aX(this._lodPlanes[0], e);
                        this._renderer.compile(t, dt)
                    }
                    _sceneToCubeUV(e, t, n, i) {
                        let r = new a6(90, 1, t, n),
                            a = [1, -1, 1, 1, 1, 1],
                            s = [1, 1, 1, -1, -1, -1],
                            o = this._renderer,
                            l = o.autoClear,
                            h = o.toneMapping;
                        o.getClearColor(dn), o.toneMapping = tt, o.autoClear = !1;
                        let u = new ad({
                                name: "PMREM.Background",
                                side: eA,
                                depthWrite: !1,
                                depthTest: !1
                            }),
                            c = new aX(new aj, u),
                            d = !1,
                            p = e.background;
                        p ? p.isColor && (u.color.copy(p), e.background = null, d = !0) : (u.color.copy(dn), d = !0);
                        for (let t = 0; t < 6; t++) {
                            let n = t % 3;
                            0 === n ? (r.up.set(0, a[t], 0), r.lookAt(s[t], 0, 0)) : 1 === n ? (r.up.set(0, 0, a[t]), r.lookAt(0, s[t], 0)) : (r.up.set(0, a[t], 0), r.lookAt(0, 0, s[t]));
                            let l = this._cubeSize;
                            c6(i, n * l, t > 2 ? l : 0, l, l), o.setRenderTarget(i), d && o.render(c, r), o.render(e, r)
                        }
                        c.geometry.dispose(), c.material.dispose(), o.toneMapping = h, o.autoClear = l, e.background = p
                    }
                    _textureToCubeUV(e, t) {
                        let n = this._renderer,
                            i = e.mapping === tu || e.mapping === tc;
                        i ? (null === this._cubemapMaterial && (this._cubemapMaterial = c9()), this._cubemapMaterial.uniforms.flipEnvMap.value = !1 === e.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = c8());
                        let r = i ? this._cubemapMaterial : this._equirectMaterial,
                            a = new aX(this._lodPlanes[0], r);
                        r.uniforms.envMap.value = e;
                        let s = this._cubeSize;
                        c6(t, 0, 0, 3 * s, 2 * s), n.setRenderTarget(t), n.render(a, dt)
                    }
                    _applyPMREM(e) {
                        let t = this._renderer,
                            n = t.autoClear;
                        t.autoClear = !1;
                        let i = this._lodPlanes.length;
                        for (let t = 1; t < i; t++) {
                            let n = Math.sqrt(this._sigmas[t] * this._sigmas[t] - this._sigmas[t - 1] * this._sigmas[t - 1]),
                                r = du[(i - t - 1) % du.length];
                            this._blur(e, t - 1, t, n, r)
                        }
                        t.autoClear = n
                    }
                    _blur(e, t, n, i, r) {
                        let a = this._pingPongRenderTarget;
                        this._halfBlur(e, a, t, n, i, "latitudinal", r), this._halfBlur(a, e, n, n, i, "longitudinal", r)
                    }
                    _halfBlur(e, t, n, i, r, a, s) {
                        let o = this._renderer,
                            l = this._blurMaterial;
                        "latitudinal" !== a && "longitudinal" !== a && console.error("blur direction must be either latitudinal or longitudinal!");
                        let h = new aX(this._lodPlanes[i], l),
                            u = l.uniforms,
                            c = this._sizeLods[n] - 1,
                            d = isFinite(r) ? Math.PI / (2 * c) : 2 * Math.PI / 39,
                            p = r / d,
                            f = isFinite(r) ? 1 + Math.floor(3 * p) : 20;
                        f > 20 && console.warn("sigmaRadians, ".concat(r, ", is too large and will clip, as it requested ").concat(f, " samples when the maximum is set to ").concat(20));
                        let m = [],
                            g = 0;
                        for (let e = 0; e < 20; ++e) {
                            let t = e / p,
                                n = Math.exp(-t * t / 2);
                            m.push(n), 0 === e ? g += n : e < f && (g += 2 * n)
                        }
                        for (let e = 0; e < m.length; e++) m[e] = m[e] / g;
                        u.envMap.value = e.texture, u.samples.value = f, u.weights.value = m, u.latitudinal.value = "latitudinal" === a, s && (u.poleAxis.value = s);
                        let {
                            _lodMax: v
                        } = this;
                        u.dTheta.value = d, u.mipInt.value = v - n;
                        let _ = this._sizeLods[i];
                        c6(t, 3 * _ * (i > v - 4 ? i - v + 4 : 0), 4 * (this._cubeSize - _), 3 * _, 2 * _), o.setRenderTarget(t), o.render(h, dt)
                    }
                    constructor(e) {
                        this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial)
                    }
                }
            });

            function dp(e) {
                let t = new WeakMap,
                    n = null;

                function i(e) {
                    let n = e.target;
                    n.removeEventListener("dispose", i);
                    let r = t.get(n);
                    void 0 !== r && (t.delete(n), r.dispose())
                }
                return {
                    get: function(r) {
                        if (r && r.isTexture) {
                            let a = r.mapping,
                                s = a === td || a === tp,
                                o = a === tu || a === tc;
                            if (s || o) {
                                let a = t.get(r),
                                    l = void 0 !== a ? a.texture.pmremVersion : 0;
                                if (r.isRenderTargetTexture && r.pmremVersion !== l) return null === n && (n = new dc(e)), (a = s ? n.fromEquirectangular(r, a) : n.fromCubemap(r, a)).texture.pmremVersion = r.pmremVersion, t.set(r, a), a.texture;
                                if (void 0 !== a) return a.texture; {
                                    let l = r.image;
                                    return s && l && l.height > 0 || o && l && function(e) {
                                        let t = 0;
                                        for (let n = 0; n < 6; n++) void 0 !== e[n] && t++;
                                        return 6 === t
                                    }(l) ? (null === n && (n = new dc(e)), (a = s ? n.fromEquirectangular(r) : n.fromCubemap(r)).texture.pmremVersion = r.pmremVersion, t.set(r, a), r.addEventListener("dispose", i), a.texture) : null
                                }
                            }
                        }
                        return r
                    },
                    dispose: function() {
                        t = new WeakMap, null !== n && (n.dispose(), n = null)
                    }
                }
            }
            var df = h(() => {
                nX(), dd()
            });

            function dm(e) {
                let t = {};

                function n(n) {
                    let i;
                    if (void 0 !== t[n]) return t[n];
                    switch (n) {
                        case "WEBGL_depth_texture":
                            i = e.getExtension("WEBGL_depth_texture") || e.getExtension("MOZ_WEBGL_depth_texture") || e.getExtension("WEBKIT_WEBGL_depth_texture");
                            break;
                        case "EXT_texture_filter_anisotropic":
                            i = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                            break;
                        case "WEBGL_compressed_texture_s3tc":
                            i = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                            break;
                        case "WEBGL_compressed_texture_pvrtc":
                            i = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                            break;
                        default:
                            i = e.getExtension(n)
                    }
                    return t[n] = i, i
                }
                return {
                    has: function(e) {
                        return null !== n(e)
                    },
                    init: function() {
                        n("EXT_color_buffer_float"), n("WEBGL_clip_cull_distance"), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture"), n("WEBGL_render_shared_exponent")
                    },
                    get: function(e) {
                        let t = n(e);
                        return null === t && iM("THREE.WebGLRenderer: " + e + " extension not supported."), t
                    }
                }
            }
            var dg = h(() => {
                iE()
            });

            function dv(e, t, n, i) {
                let r = {},
                    a = new WeakMap;

                function s(e) {
                    let o = e.target;
                    for (let e in null !== o.index && t.remove(o.index), o.attributes) t.remove(o.attributes[e]);
                    o.removeEventListener("dispose", s), delete r[o.id];
                    let l = a.get(o);
                    l && (t.remove(l), a.delete(o)), i.releaseStatesOfGeometry(o), !0 === o.isInstancedBufferGeometry && delete o._maxInstanceCount, n.memory.geometries--
                }

                function o(e) {
                    let n = [],
                        i = e.index,
                        r = e.attributes.position,
                        s = 0;
                    if (null !== i) {
                        let e = i.array;
                        s = i.version;
                        for (let t = 0, i = e.length; t < i; t += 3) {
                            let i = e[t + 0],
                                r = e[t + 1],
                                a = e[t + 2];
                            n.push(i, r, r, a, a, i)
                        }
                    } else {
                        if (void 0 === r) return;
                        let e = r.array;
                        s = r.version;
                        for (let t = 0, i = e.length / 3 - 1; t < i; t += 3) {
                            let e = t + 0,
                                i = t + 1,
                                r = t + 2;
                            n.push(e, i, i, r, r, e)
                        }
                    }
                    let o = new(i_(n) ? a_ : av)(n, 1);
                    o.version = s;
                    let l = a.get(e);
                    l && t.remove(l), a.set(e, o)
                }
                return {
                    get: function(e, t) {
                        return !0 === r[t.id] || (t.addEventListener("dispose", s), r[t.id] = !0, n.memory.geometries++), t
                    },
                    update: function(n) {
                        let i = n.attributes;
                        for (let n in i) t.update(i[n], e.ARRAY_BUFFER)
                    },
                    getWireframeAttribute: function(e) {
                        let t = a.get(e);
                        if (t) {
                            let n = e.index;
                            null !== n && t.version < n.version && o(e)
                        } else o(e);
                        return a.get(e)
                    }
                }
            }
            var d_ = h(() => {
                aP(), iE()
            });

            function dx(e, t, n) {
                let i, r, a;

                function s(t, s, o) {
                    0 !== o && (e.drawElementsInstanced(i, s, r, t * a, o), n.update(s, i, o))
                }
                this.setMode = function(e) {
                    i = e
                }, this.setIndex = function(e) {
                    r = e.type, a = e.bytesPerElement
                }, this.render = function(t, s) {
                    e.drawElements(i, s, r, t * a), n.update(s, i, 1)
                }, this.renderInstances = s, this.renderMultiDraw = function(e, a, s) {
                    if (0 === s) return;
                    t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, a, 0, r, e, 0, s);
                    let o = 0;
                    for (let e = 0; e < s; e++) o += a[e];
                    n.update(o, i, 1)
                }, this.renderMultiDrawInstances = function(e, o, l, h) {
                    if (0 === l) return;
                    let u = t.get("WEBGL_multi_draw");
                    if (null === u)
                        for (let t = 0; t < e.length; t++) s(e[t] / a, o[t], h[t]);
                    else {
                        u.multiDrawElementsInstancedWEBGL(i, o, 0, r, e, 0, h, 0, l);
                        let t = 0;
                        for (let e = 0; e < l; e++) t += o[e] * h[e];
                        n.update(t, i, 1)
                    }
                }
            }
            var dM = h(() => {});

            function dy(e) {
                let t = {
                    frame: 0,
                    calls: 0,
                    triangles: 0,
                    points: 0,
                    lines: 0
                };
                return {
                    memory: {
                        geometries: 0,
                        textures: 0
                    },
                    render: t,
                    programs: null,
                    autoReset: !0,
                    reset: function() {
                        t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0
                    },
                    update: function(n, i, r) {
                        switch (t.calls++, i) {
                            case e.TRIANGLES:
                                t.triangles += n / 3 * r;
                                break;
                            case e.LINES:
                                t.lines += n / 2 * r;
                                break;
                            case e.LINE_STRIP:
                                t.lines += r * (n - 1);
                                break;
                            case e.LINE_LOOP:
                                t.lines += r * n;
                                break;
                            case e.POINTS:
                                t.points += r * n;
                                break;
                            default:
                                console.error("THREE.WebGLInfo: Unknown draw mode:", i)
                        }
                    }
                }
            }
            var dE = h(() => {});

            function dS(e, t, n) {
                let i = new WeakMap,
                    r = new iF;
                return {
                    update: function(a, s, o) {
                        let l = a.morphTargetInfluences,
                            h = s.morphAttributes.position || s.morphAttributes.normal || s.morphAttributes.color,
                            u = void 0 !== h ? h.length : 0,
                            c = i.get(s);
                        if (void 0 === c || c.count !== u) {
                            let e = function() {
                                v.dispose(), i.delete(s), s.removeEventListener("dispose", e)
                            };
                            void 0 !== c && c.texture.dispose();
                            let n = void 0 !== s.morphAttributes.position,
                                a = void 0 !== s.morphAttributes.normal,
                                o = void 0 !== s.morphAttributes.color,
                                l = s.morphAttributes.position || [],
                                h = s.morphAttributes.normal || [],
                                d = s.morphAttributes.color || [],
                                p = 0;
                            !0 === n && (p = 1), !0 === a && (p = 2), !0 === o && (p = 3);
                            let f = s.attributes.position.count * p,
                                m = 1;
                            f > t.maxTextureSize && (m = Math.ceil(f / t.maxTextureSize), f = t.maxTextureSize);
                            let g = new Float32Array(f * m * 4 * u),
                                v = new iG(g, f, m, u);
                            v.type = tU, v.needsUpdate = !0;
                            let _ = 4 * p;
                            for (let e = 0; e < u; e++) {
                                let t = l[e],
                                    i = h[e],
                                    s = d[e],
                                    u = f * m * 4 * e;
                                for (let e = 0; e < t.count; e++) {
                                    let l = e * _;
                                    !0 === n && (r.fromBufferAttribute(t, e), g[u + l + 0] = r.x, g[u + l + 1] = r.y, g[u + l + 2] = r.z, g[u + l + 3] = 0), !0 === a && (r.fromBufferAttribute(i, e), g[u + l + 4] = r.x, g[u + l + 5] = r.y, g[u + l + 6] = r.z, g[u + l + 7] = 0), !0 === o && (r.fromBufferAttribute(s, e), g[u + l + 8] = r.x, g[u + l + 9] = r.y, g[u + l + 10] = r.z, g[u + l + 11] = 4 === s.itemSize ? r.w : 1)
                                }
                            }
                            c = {
                                count: u,
                                texture: v,
                                size: new ic(f, m)
                            }, i.set(s, c), s.addEventListener("dispose", e)
                        }
                        if (!0 === a.isInstancedMesh && null !== a.morphTexture) o.getUniforms().setValue(e, "morphTexture", a.morphTexture, n);
                        else {
                            let t = 0;
                            for (let e = 0; e < l.length; e++) t += l[e];
                            let n = s.morphTargetsRelative ? 1 : 1 - t;
                            o.getUniforms().setValue(e, "morphTargetBaseInfluence", n), o.getUniforms().setValue(e, "morphTargetInfluences", l)
                        }
                        o.getUniforms().setValue(e, "morphTargetsTexture", c.texture, n), o.getUniforms().setValue(e, "morphTargetsTextureSize", c.size)
                    }
                }
            }
            var db = h(() => {
                nX(), iJ(), iq(), ig()
            });

            function dT(e, t, n, i) {
                let r = new WeakMap;

                function a(e) {
                    let t = e.target;
                    t.removeEventListener("dispose", a), n.remove(t.instanceMatrix), null !== t.instanceColor && n.remove(t.instanceColor)
                }
                return {
                    update: function(s) {
                        let o = i.render.frame,
                            l = s.geometry,
                            h = t.get(s, l);
                        if (r.get(h) !== o && (t.update(h), r.set(h, o)), s.isInstancedMesh && (!1 === s.hasEventListener("dispose", a) && s.addEventListener("dispose", a), r.get(s) !== o && (n.update(s.instanceMatrix, e.ARRAY_BUFFER), null !== s.instanceColor && n.update(s.instanceColor, e.ARRAY_BUFFER), r.set(s, o))), s.isSkinnedMesh) {
                            let e = s.skeleton;
                            r.get(e) !== o && (e.update(), r.set(e, o))
                        }
                        return h
                    },
                    dispose: function() {
                        r = new WeakMap
                    }
                }
            }
            var dA = h(() => {});

            function dw(e, t, n) {
                let i = e[0];
                if (i <= 0 || i > 0) return e;
                let r = t * n,
                    a = pc[r];
                if (void 0 === a && (a = new Float32Array(r), pc[r] = a), 0 !== t) {
                    i.toArray(a, 0);
                    for (let i = 1, r = 0; i !== t; ++i) r += n, e[i].toArray(a, r)
                }
                return a
            }

            function dR(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0, i = e.length; n < i; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }

            function dC(e, t) {
                for (let n = 0, i = t.length; n < i; n++) e[n] = t[n]
            }

            function dU(e, t) {
                let n = pd[t];
                void 0 === n && (n = new Int32Array(t), pd[t] = n);
                for (let i = 0; i !== t; ++i) n[i] = e.allocateTextureUnit();
                return n
            }

            function dP(e, t) {
                let n = this.cache;
                n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t)
            }

            function dL(e, t) {
                let n = this.cache;
                if (void 0 !== t.x)(n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
                else {
                    if (dR(n, t)) return;
                    e.uniform2fv(this.addr, t), dC(n, t)
                }
            }

            function dD(e, t) {
                let n = this.cache;
                if (void 0 !== t.x)(n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
                else if (void 0 !== t.r)(n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
                else {
                    if (dR(n, t)) return;
                    e.uniform3fv(this.addr, t), dC(n, t)
                }
            }

            function dI(e, t) {
                let n = this.cache;
                if (void 0 !== t.x)(n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
                else {
                    if (dR(n, t)) return;
                    e.uniform4fv(this.addr, t), dC(n, t)
                }
            }

            function dN(e, t) {
                let n = this.cache,
                    i = t.elements;
                if (void 0 === i) {
                    if (dR(n, t)) return;
                    e.uniformMatrix2fv(this.addr, !1, t), dC(n, t)
                } else {
                    if (dR(n, i)) return;
                    pm.set(i), e.uniformMatrix2fv(this.addr, !1, pm), dC(n, i)
                }
            }

            function dO(e, t) {
                let n = this.cache,
                    i = t.elements;
                if (void 0 === i) {
                    if (dR(n, t)) return;
                    e.uniformMatrix3fv(this.addr, !1, t), dC(n, t)
                } else {
                    if (dR(n, i)) return;
                    pf.set(i), e.uniformMatrix3fv(this.addr, !1, pf), dC(n, i)
                }
            }

            function dF(e, t) {
                let n = this.cache,
                    i = t.elements;
                if (void 0 === i) {
                    if (dR(n, t)) return;
                    e.uniformMatrix4fv(this.addr, !1, t), dC(n, t)
                } else {
                    if (dR(n, i)) return;
                    pp.set(i), e.uniformMatrix4fv(this.addr, !1, pp), dC(n, i)
                }
            }

            function dB(e, t) {
                let n = this.cache;
                n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t)
            }

            function dz(e, t) {
                let n = this.cache;
                if (void 0 !== t.x)(n[0] !== t.x || n[1] !== t.y) && (e.uniform2i(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
                else {
                    if (dR(n, t)) return;
                    e.uniform2iv(this.addr, t), dC(n, t)
                }
            }

            function dG(e, t) {
                let n = this.cache;
                if (void 0 !== t.x)(n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3i(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
                else {
                    if (dR(n, t)) return;
                    e.uniform3iv(this.addr, t), dC(n, t)
                }
            }

            function dH(e, t) {
                let n = this.cache;
                if (void 0 !== t.x)(n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4i(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
                else {
                    if (dR(n, t)) return;
                    e.uniform4iv(this.addr, t), dC(n, t)
                }
            }

            function dk(e, t) {
                let n = this.cache;
                n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t)
            }

            function dV(e, t) {
                let n = this.cache;
                if (void 0 !== t.x)(n[0] !== t.x || n[1] !== t.y) && (e.uniform2ui(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
                else {
                    if (dR(n, t)) return;
                    e.uniform2uiv(this.addr, t), dC(n, t)
                }
            }

            function dW(e, t) {
                let n = this.cache;
                if (void 0 !== t.x)(n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3ui(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
                else {
                    if (dR(n, t)) return;
                    e.uniform3uiv(this.addr, t), dC(n, t)
                }
            }

            function dX(e, t) {
                let n = this.cache;
                if (void 0 !== t.x)(n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
                else {
                    if (dR(n, t)) return;
                    e.uniform4uiv(this.addr, t), dC(n, t)
                }
            }

            function dj(e, t, n) {
                let i, r = this.cache,
                    a = n.allocateTextureUnit();
                r[0] !== a && (e.uniform1i(this.addr, a), r[0] = a), this.type === e.SAMPLER_2D_SHADOW ? (po.compareFunction = nU, i = po) : i = ps, n.setTexture2D(t || i, a)
            }

            function dY(e, t, n) {
                let i = this.cache,
                    r = n.allocateTextureUnit();
                i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(t || ph, r)
            }

            function dq(e, t, n) {
                let i = this.cache,
                    r = n.allocateTextureUnit();
                i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTextureCube(t || pu, r)
            }

            function dK(e, t, n) {
                let i = this.cache,
                    r = n.allocateTextureUnit();
                i[0] !== r && (e.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(t || pl, r)
            }

            function dZ(e, t) {
                e.uniform1fv(this.addr, t)
            }

            function dJ(e, t) {
                let n = dw(t, this.size, 2);
                e.uniform2fv(this.addr, n)
            }

            function dQ(e, t) {
                let n = dw(t, this.size, 3);
                e.uniform3fv(this.addr, n)
            }

            function d$(e, t) {
                let n = dw(t, this.size, 4);
                e.uniform4fv(this.addr, n)
            }

            function d0(e, t) {
                let n = dw(t, this.size, 4);
                e.uniformMatrix2fv(this.addr, !1, n)
            }

            function d1(e, t) {
                let n = dw(t, this.size, 9);
                e.uniformMatrix3fv(this.addr, !1, n)
            }

            function d2(e, t) {
                let n = dw(t, this.size, 16);
                e.uniformMatrix4fv(this.addr, !1, n)
            }

            function d3(e, t) {
                e.uniform1iv(this.addr, t)
            }

            function d4(e, t) {
                e.uniform2iv(this.addr, t)
            }

            function d5(e, t) {
                e.uniform3iv(this.addr, t)
            }

            function d6(e, t) {
                e.uniform4iv(this.addr, t)
            }

            function d8(e, t) {
                e.uniform1uiv(this.addr, t)
            }

            function d9(e, t) {
                e.uniform2uiv(this.addr, t)
            }

            function d7(e, t) {
                e.uniform3uiv(this.addr, t)
            }

            function pe(e, t) {
                e.uniform4uiv(this.addr, t)
            }

            function pt(e, t, n) {
                let i = this.cache,
                    r = t.length,
                    a = dU(n, r);
                dR(i, a) || (e.uniform1iv(this.addr, a), dC(i, a));
                for (let e = 0; e !== r; ++e) n.setTexture2D(t[e] || ps, a[e])
            }

            function pn(e, t, n) {
                let i = this.cache,
                    r = t.length,
                    a = dU(n, r);
                dR(i, a) || (e.uniform1iv(this.addr, a), dC(i, a));
                for (let e = 0; e !== r; ++e) n.setTexture3D(t[e] || ph, a[e])
            }

            function pi(e, t, n) {
                let i = this.cache,
                    r = t.length,
                    a = dU(n, r);
                dR(i, a) || (e.uniform1iv(this.addr, a), dC(i, a));
                for (let e = 0; e !== r; ++e) n.setTextureCube(t[e] || pu, a[e])
            }

            function pr(e, t, n) {
                let i = this.cache,
                    r = t.length,
                    a = dU(n, r);
                dR(i, a) || (e.uniform1iv(this.addr, a), dC(i, a));
                for (let e = 0; e !== r; ++e) n.setTexture2DArray(t[e] || pl, a[e])
            }

            function pa(e, t) {
                e.seq.push(t), e.map[t.id] = t
            }
            var ps, po, pl, ph, pu, pc, pd, pp, pf, pm, pg, pv, p_, px, pM, py = h(() => {
                sb(), iY(), iJ(), iQ(), sD(), nX(), ps = new iO, po = new sf(1, 1), pl = new iG, ph = new iH, pu = new a9, pc = [], pd = [], pp = new Float32Array(16), pf = new Float32Array(9), pm = new Float32Array(4), pg = class {
                    constructor(e, t, n) {
                        this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = function(e) {
                            switch (e) {
                                case 5126:
                                    return dP;
                                case 35664:
                                    return dL;
                                case 35665:
                                    return dD;
                                case 35666:
                                    return dI;
                                case 35674:
                                    return dN;
                                case 35675:
                                    return dO;
                                case 35676:
                                    return dF;
                                case 5124:
                                case 35670:
                                    return dB;
                                case 35667:
                                case 35671:
                                    return dz;
                                case 35668:
                                case 35672:
                                    return dG;
                                case 35669:
                                case 35673:
                                    return dH;
                                case 5125:
                                    return dk;
                                case 36294:
                                    return dV;
                                case 36295:
                                    return dW;
                                case 36296:
                                    return dX;
                                case 35678:
                                case 36198:
                                case 36298:
                                case 36306:
                                case 35682:
                                    return dj;
                                case 35679:
                                case 36299:
                                case 36307:
                                    return dY;
                                case 35680:
                                case 36300:
                                case 36308:
                                case 36293:
                                    return dq;
                                case 36289:
                                case 36303:
                                case 36311:
                                case 36292:
                                    return dK
                            }
                        }(t.type)
                    }
                }, pv = class {
                    constructor(e, t, n) {
                        this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = function(e) {
                            switch (e) {
                                case 5126:
                                    return dZ;
                                case 35664:
                                    return dJ;
                                case 35665:
                                    return dQ;
                                case 35666:
                                    return d$;
                                case 35674:
                                    return d0;
                                case 35675:
                                    return d1;
                                case 35676:
                                    return d2;
                                case 5124:
                                case 35670:
                                    return d3;
                                case 35667:
                                case 35671:
                                    return d4;
                                case 35668:
                                case 35672:
                                    return d5;
                                case 35669:
                                case 35673:
                                    return d6;
                                case 5125:
                                    return d8;
                                case 36294:
                                    return d9;
                                case 36295:
                                    return d7;
                                case 36296:
                                    return pe;
                                case 35678:
                                case 36198:
                                case 36298:
                                case 36306:
                                case 35682:
                                    return pt;
                                case 35679:
                                case 36299:
                                case 36307:
                                    return pn;
                                case 35680:
                                case 36300:
                                case 36308:
                                case 36293:
                                    return pi;
                                case 36289:
                                case 36303:
                                case 36311:
                                case 36292:
                                    return pr
                            }
                        }(t.type)
                    }
                }, p_ = class {
                    setValue(e, t, n) {
                        let i = this.seq;
                        for (let r = 0, a = i.length; r !== a; ++r) {
                            let a = i[r];
                            a.setValue(e, t[a.id], n)
                        }
                    }
                    constructor(e) {
                        this.id = e, this.seq = [], this.map = {}
                    }
                }, px = /(\w+)(\])?(\[|\.)?/g, pM = class {
                    setValue(e, t, n, i) {
                        let r = this.map[t];
                        void 0 !== r && r.setValue(e, n, i)
                    }
                    setOptional(e, t, n) {
                        let i = t[n];
                        void 0 !== i && this.setValue(e, n, i)
                    }
                    static upload(e, t, n, i) {
                        for (let r = 0, a = t.length; r !== a; ++r) {
                            let a = t[r],
                                s = n[a.id];
                            !1 !== s.needsUpdate && a.setValue(e, s.value, i)
                        }
                    }
                    static seqWithValue(e, t) {
                        let n = [];
                        for (let i = 0, r = e.length; i !== r; ++i) {
                            let r = e[i];
                            r.id in t && n.push(r)
                        }
                        return n
                    }
                    constructor(e, t) {
                        this.seq = [], this.map = {};
                        let n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
                        for (let i = 0; i < n; ++i) {
                            let n = e.getActiveUniform(t, i),
                                r = e.getUniformLocation(t, n.name);
                            ! function(e, t, n) {
                                let i = e.name,
                                    r = i.length;
                                for (px.lastIndex = 0;;) {
                                    let a = px.exec(i),
                                        s = px.lastIndex,
                                        o = a[1],
                                        l = "]" === a[2],
                                        h = a[3];
                                    if (l && (o |= 0), void 0 === h || "[" === h && s + 2 === r) {
                                        pa(n, void 0 === h ? new pg(o, e, t) : new pv(o, e, t));
                                        break
                                    } {
                                        let e = n.map[o];
                                        void 0 === e && pa(n, e = new p_(o)), n = e
                                    }
                                }
                            }(n, r, this)
                        }
                    }
                }
            });

            function pE(e, t, n) {
                let i = e.createShader(t);
                return e.shaderSource(i, n), e.compileShader(i), i
            }
            var pS = h(() => {});

            function pb(e, t, n) {
                let i = e.getShaderParameter(t, e.COMPILE_STATUS),
                    r = e.getShaderInfoLog(t).trim();
                if (i && "" === r) return "";
                let a = /ERROR: 0:(\d+)/.exec(r);
                if (!a) return r; {
                    let i = parseInt(a[1]);
                    return n.toUpperCase() + "\n\n" + r + "\n\n" + function(e, t) {
                        let n = e.split("\n"),
                            i = [],
                            r = Math.max(t - 6, 0),
                            a = Math.min(t + 6, n.length);
                        for (let e = r; e < a; e++) {
                            let r = e + 1;
                            i.push("".concat(r === t ? ">" : " ", " ").concat(r, ": ").concat(n[e]))
                        }
                        return i.join("\n")
                    }(e.getShaderSource(t), i)
                }
            }

            function pT(e) {
                return "" !== e
            }

            function pA(e, t) {
                let n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
                return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows)
            }

            function pw(e, t) {
                return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection)
            }

            function pR(e) {
                return e.replace(pB, pC)
            }

            function pC(e, t) {
                let n = hH[t];
                if (void 0 === n) {
                    let e = pz.get(t);
                    if (void 0 !== e) n = hH[e], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', t, e);
                    else throw Error("Can not resolve #include <" + t + ">")
                }
                return pR(n)
            }

            function pU(e) {
                return e.replace(pG, pP)
            }

            function pP(e, t, n, i) {
                let r = "";
                for (let e = parseInt(t); e < parseInt(n); e++) r += i.replace(/\[\s*i\s*\]/g, "[ " + e + " ]").replace(/UNROLLED_LOOP_INDEX/g, e);
                return r
            }

            function pL(e) {
                let t = "precision ".concat(e.precision, " float;\n	precision ").concat(e.precision, " int;\n	precision ").concat(e.precision, " sampler2D;\n	precision ").concat(e.precision, " samplerCube;\n	precision ").concat(e.precision, " sampler3D;\n	precision ").concat(e.precision, " sampler2DArray;\n	precision ").concat(e.precision, " sampler2DShadow;\n	precision ").concat(e.precision, " samplerCubeShadow;\n	precision ").concat(e.precision, " sampler2DArrayShadow;\n	precision ").concat(e.precision, " isampler2D;\n	precision ").concat(e.precision, " isampler3D;\n	precision ").concat(e.precision, " isamplerCube;\n	precision ").concat(e.precision, " isampler2DArray;\n	precision ").concat(e.precision, " usampler2D;\n	precision ").concat(e.precision, " usampler3D;\n	precision ").concat(e.precision, " usamplerCube;\n	precision ").concat(e.precision, " usampler2DArray;\n	");
                return "highp" === e.precision ? t += "\n#define HIGH_PRECISION" : "mediump" === e.precision ? t += "\n#define MEDIUM_PRECISION" : "lowp" === e.precision && (t += "\n#define LOW_PRECISION"), t
            }

            function pD(e, t, n, i) {
                let r, a, s, o, l, h;
                let u, c, d = e.getContext(),
                    p = n.defines,
                    f = n.vertexShader,
                    m = n.fragmentShader,
                    g = (r = "SHADOWMAP_TYPE_BASIC", n.shadowMapType === eE ? r = "SHADOWMAP_TYPE_PCF" : n.shadowMapType === eS ? r = "SHADOWMAP_TYPE_PCF_SOFT" : n.shadowMapType === eb && (r = "SHADOWMAP_TYPE_VSM"), r),
                    v = function(e) {
                        let t = "ENVMAP_TYPE_CUBE";
                        if (e.envMap) switch (e.envMapMode) {
                            case tu:
                            case tc:
                                t = "ENVMAP_TYPE_CUBE";
                                break;
                            case tf:
                                t = "ENVMAP_TYPE_CUBE_UV"
                        }
                        return t
                    }(n),
                    _ = (a = "ENVMAP_MODE_REFLECTION", n.envMap && n.envMapMode === tc && (a = "ENVMAP_MODE_REFRACTION"), a),
                    x = function(e) {
                        let t = "ENVMAP_BLENDING_NONE";
                        if (e.envMap) switch (e.combine) {
                            case e9:
                                t = "ENVMAP_BLENDING_MULTIPLY";
                                break;
                            case e7:
                                t = "ENVMAP_BLENDING_MIX";
                                break;
                            case te:
                                t = "ENVMAP_BLENDING_ADD"
                        }
                        return t
                    }(n),
                    M = function(e) {
                        let t = e.envMapCubeUVHeight;
                        if (null === t) return null;
                        let n = Math.log2(t) - 2;
                        return {
                            texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 112)),
                            texelHeight: 1 / t,
                            maxMip: n
                        }
                    }(n),
                    y = [n.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", n.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(pT).join("\n"),
                    E = function(e) {
                        let t = [];
                        for (let n in e) {
                            let i = e[n];
                            !1 !== i && t.push("#define " + n + " " + i)
                        }
                        return t.join("\n")
                    }(p),
                    S = d.createProgram(),
                    b, T, A = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
                n.isRawShaderMaterial ? ((b = ["#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, E].filter(pT).join("\n")).length > 0 && (b += "\n"), (T = ["#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, E].filter(pT).join("\n")).length > 0 && (T += "\n")) : (b = [pL(n), "#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, E, n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", n.batching ? "#define USE_BATCHING" : "", n.batchingColor ? "#define USE_BATCHING_COLOR" : "", n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + _ : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.anisotropy ? "#define USE_ANISOTROPY" : "", n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaHash ? "#define USE_ALPHAHASH" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n.mapUv ? "#define MAP_UV " + n.mapUv : "", n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "", n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "", n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "", n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "", n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "", n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "", n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "", n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "", n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "", n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "", n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "", n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "", n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "", n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "", n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "", n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "", n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "", n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "", n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "", n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "", n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "", n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "", n.vertexTangents && !1 === n.flatShading ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUv1s ? "#define USE_UV1" : "", n.vertexUv2s ? "#define USE_UV2" : "", n.vertexUv3s ? "#define USE_UV3" : "", n.pointsUvs ? "#define USE_POINTS_UV" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.morphColors ? "#define USE_MORPHCOLORS" : "", n.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "", n.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + g : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(pT).join("\n"), T = [pL(n), "#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, E, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + v : "", n.envMap ? "#define " + _ : "", n.envMap ? "#define " + x : "", M ? "#define CUBEUV_TEXEL_WIDTH " + M.texelWidth : "", M ? "#define CUBEUV_TEXEL_HEIGHT " + M.texelHeight : "", M ? "#define CUBEUV_MAX_MIP " + M.maxMip + ".0" : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.anisotropy ? "#define USE_ANISOTROPY" : "", n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n.clearcoat ? "#define USE_CLEARCOAT" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.dispersion ? "#define USE_DISPERSION" : "", n.iridescence ? "#define USE_IRIDESCENCE" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaTest ? "#define USE_ALPHATEST" : "", n.alphaHash ? "#define USE_ALPHAHASH" : "", n.sheen ? "#define USE_SHEEN" : "", n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.vertexTangents && !1 === n.flatShading ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor || n.batchingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUv1s ? "#define USE_UV1" : "", n.vertexUv2s ? "#define USE_UV2" : "", n.vertexUv3s ? "#define USE_UV3" : "", n.pointsUvs ? "#define USE_POINTS_UV" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + g : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", n.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", n.toneMapping !== tt ? "#define TONE_MAPPING" : "", n.toneMapping !== tt ? hH.tonemapping_pars_fragment : "", n.toneMapping !== tt ? function(e, t) {
                    let n;
                    switch (t) {
                        case tn:
                            n = "Linear";
                            break;
                        case ti:
                            n = "Reinhard";
                            break;
                        case tr:
                            n = "Cineon";
                            break;
                        case ta:
                            n = "ACESFilmic";
                            break;
                        case to:
                            n = "AgX";
                            break;
                        case tl:
                            n = "Neutral";
                            break;
                        case ts:
                            n = "Custom";
                            break;
                        default:
                            console.warn("THREE.WebGLProgram: Unsupported toneMapping:", t), n = "Linear"
                    }
                    return "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }"
                }("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", n.opaque ? "#define OPAQUE" : "", hH.colorspace_pars_fragment, (s = function(e) {
                    iw._getMatrix(pO, iw.workingColorSpace, e);
                    let t = "mat3( ".concat(pO.elements.map(e => e.toFixed(4)), " )");
                    switch (iw.getTransfer(e)) {
                        case nS:
                            return [t, "LinearTransferOETF"];
                        case nb:
                            return [t, "sRGBTransferOETF"];
                        default:
                            return console.warn("THREE.WebGLProgram: Unsupported color space: ", e), [t, "LinearTransferOETF"]
                    }
                }(n.outputColorSpace), ["vec4 ".concat("linearToOutputTexel", "( vec4 value ) {"), "	return ".concat(s[1], "( vec4( value.rgb * ").concat(s[0], ", value.a ) );"), "}"].join("\n")), (iw.getLuminanceCoefficients(pF), o = pF.x.toFixed(4), l = pF.y.toFixed(4), h = pF.z.toFixed(4), ["float luminance( const in vec3 rgb ) {", "	const vec3 weights = vec3( ".concat(o, ", ").concat(l, ", ").concat(h, " );"), "	return dot( weights, rgb );", "}"].join("\n")), n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(pT).join("\n")), f = pw(f = pA(f = pR(f), n), n), m = pw(m = pA(m = pR(m), n), n), f = pU(f), m = pU(m), !0 !== n.isRawShaderMaterial && (A = "#version 300 es\n", b = [y, "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + b, T = ["#define varying in", n.glslVersion === nO ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", n.glslVersion === nO ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + T);
                let w = A + b + f,
                    R = A + T + m,
                    C = pE(d, d.VERTEX_SHADER, w),
                    U = pE(d, d.FRAGMENT_SHADER, R);

                function P(t) {
                    if (e.debug.checkShaderErrors) {
                        let n = d.getProgramInfoLog(S).trim(),
                            i = d.getShaderInfoLog(C).trim(),
                            r = d.getShaderInfoLog(U).trim(),
                            a = !0,
                            s = !0;
                        if (!1 === d.getProgramParameter(S, d.LINK_STATUS)) {
                            if (a = !1, "function" == typeof e.debug.onShaderError) e.debug.onShaderError(d, S, C, U);
                            else {
                                let e = pb(d, C, "vertex"),
                                    i = pb(d, U, "fragment");
                                console.error("THREE.WebGLProgram: Shader Error " + d.getError() + " - VALIDATE_STATUS " + d.getProgramParameter(S, d.VALIDATE_STATUS) + "\n\nMaterial Name: " + t.name + "\nMaterial Type: " + t.type + "\n\nProgram Info Log: " + n + "\n" + e + "\n" + i)
                            }
                        } else "" !== n ? console.warn("THREE.WebGLProgram: Program Info Log:", n) : ("" === i || "" === r) && (s = !1);
                        s && (t.diagnostics = {
                            runnable: a,
                            programLog: n,
                            vertexShader: {
                                log: i,
                                prefix: b
                            },
                            fragmentShader: {
                                log: r,
                                prefix: T
                            }
                        })
                    }
                    d.deleteShader(C), d.deleteShader(U), u = new pM(d, S), c = function(e, t) {
                        let n = {},
                            i = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
                        for (let r = 0; r < i; r++) {
                            let i = e.getActiveAttrib(t, r),
                                a = i.name,
                                s = 1;
                            i.type === e.FLOAT_MAT2 && (s = 2), i.type === e.FLOAT_MAT3 && (s = 3), i.type === e.FLOAT_MAT4 && (s = 4), n[a] = {
                                type: i.type,
                                location: e.getAttribLocation(t, a),
                                locationSize: s
                            }
                        }
                        return n
                    }(d, S)
                }
                d.attachShader(S, C), d.attachShader(S, U), void 0 !== n.index0AttributeName ? d.bindAttribLocation(S, 0, n.index0AttributeName) : !0 === n.morphTargets && d.bindAttribLocation(S, 0, "position"), d.linkProgram(S), this.getUniforms = function() {
                    return void 0 === u && P(this), u
                }, this.getAttributes = function() {
                    return void 0 === c && P(this), c
                };
                let L = !1 === n.rendererExtensionParallelShaderCompile;
                return this.isReady = function() {
                    return !1 === L && (L = d.getProgramParameter(S, pI)), L
                }, this.destroy = function() {
                    i.releaseStatesOfProgram(this), d.deleteProgram(S), this.program = void 0
                }, this.type = n.shaderType, this.name = n.shaderName, this.id = pN++, this.cacheKey = t, this.usedTimes = 1, this.program = S, this.vertexShader = C, this.fragmentShader = U, this
            }
            var pI, pN, pO, pF, pB, pz, pG, pH, pk, pV, pW = h(() => {
                    py(), pS(), cH(), nX(), iU(), i0(), iv(), pI = 37297, pN = 0, pO = new id, pF = new iV, pB = /^[ \t]*#include +<([\w\d./]+)>/gm, pz = new Map, pG = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g
                }),
                pX = h(() => {
                    pH = 0, pk = class {
                        update(e) {
                            let t = e.vertexShader,
                                n = e.fragmentShader,
                                i = this._getShaderStage(t),
                                r = this._getShaderStage(n),
                                a = this._getShaderCacheForMaterial(e);
                            return !1 === a.has(i) && (a.add(i), i.usedTimes++), !1 === a.has(r) && (a.add(r), r.usedTimes++), this
                        }
                        remove(e) {
                            for (let t of this.materialCache.get(e)) t.usedTimes--, 0 === t.usedTimes && this.shaderCache.delete(t.code);
                            return this.materialCache.delete(e), this
                        }
                        getVertexShaderID(e) {
                            return this._getShaderStage(e.vertexShader).id
                        }
                        getFragmentShaderID(e) {
                            return this._getShaderStage(e.fragmentShader).id
                        }
                        dispose() {
                            this.shaderCache.clear(), this.materialCache.clear()
                        }
                        _getShaderCacheForMaterial(e) {
                            let t = this.materialCache,
                                n = t.get(e);
                            return void 0 === n && (n = new Set, t.set(e, n)), n
                        }
                        _getShaderStage(e) {
                            let t = this.shaderCache,
                                n = t.get(e);
                            return void 0 === n && (n = new pV(e), t.set(e, n)), n
                        }
                        constructor() {
                            this.shaderCache = new Map, this.materialCache = new Map
                        }
                    }, pV = class {
                        constructor(e) {
                            this.id = pH++, this.code = e, this.usedTimes = 0
                        }
                    }
                });

            function pj(e, t, n, i, r, a, s) {
                let o = new rC,
                    l = new pk,
                    h = new Set,
                    u = [],
                    c = r.logarithmicDepthBuffer,
                    d = r.vertexTextures,
                    p = r.precision,
                    f = {
                        MeshDepthMaterial: "depth",
                        MeshDistanceMaterial: "distanceRGBA",
                        MeshNormalMaterial: "normal",
                        MeshBasicMaterial: "basic",
                        MeshLambertMaterial: "lambert",
                        MeshPhongMaterial: "phong",
                        MeshToonMaterial: "toon",
                        MeshStandardMaterial: "physical",
                        MeshPhysicalMaterial: "physical",
                        MeshMatcapMaterial: "matcap",
                        LineBasicMaterial: "basic",
                        LineDashedMaterial: "dashed",
                        PointsMaterial: "points",
                        ShadowMaterial: "shadow",
                        SpriteMaterial: "sprite"
                    };

                function m(e) {
                    return h.add(e), 0 === e ? "uv" : "uv".concat(e)
                }
                return {
                    getParameters: function(a, o, u, g, v) {
                        let _, x, M, y, E = g.fog,
                            S = v.geometry,
                            b = a.isMeshStandardMaterial ? g.environment : null,
                            T = (a.isMeshStandardMaterial ? n : t).get(a.envMap || b),
                            A = T && T.mapping === tf ? T.image.height : null,
                            w = f[a.type];
                        null !== a.precision && (p = r.getMaxPrecision(a.precision)) !== a.precision && console.warn("THREE.WebGLProgram.getParameters:", a.precision, "not supported, using", p, "instead.");
                        let R = S.morphAttributes.position || S.morphAttributes.normal || S.morphAttributes.color,
                            C = void 0 !== R ? R.length : 0,
                            U = 0;
                        if (void 0 !== S.morphAttributes.position && (U = 1), void 0 !== S.morphAttributes.normal && (U = 2), void 0 !== S.morphAttributes.color && (U = 3), w) {
                            let e = hV[w];
                            _ = e.vertexShader, x = e.fragmentShader
                        } else _ = a.vertexShader, x = a.fragmentShader, l.update(a), M = l.getVertexShaderID(a), y = l.getFragmentShaderID(a);
                        let P = e.getRenderTarget(),
                            L = e.state.buffers.depth.getReversed(),
                            D = !0 === v.isInstancedMesh,
                            I = !0 === v.isBatchedMesh,
                            N = !!a.map,
                            O = !!a.matcap,
                            F = !!T,
                            B = !!a.aoMap,
                            z = !!a.lightMap,
                            G = !!a.bumpMap,
                            H = !!a.normalMap,
                            k = !!a.displacementMap,
                            V = !!a.emissiveMap,
                            W = !!a.metalnessMap,
                            X = !!a.roughnessMap,
                            j = a.anisotropy > 0,
                            Y = a.clearcoat > 0,
                            q = a.dispersion > 0,
                            K = a.iridescence > 0,
                            Z = a.sheen > 0,
                            J = a.transmission > 0,
                            Q = j && !!a.anisotropyMap,
                            $ = Y && !!a.clearcoatMap,
                            ee = Y && !!a.clearcoatNormalMap,
                            et = Y && !!a.clearcoatRoughnessMap,
                            en = K && !!a.iridescenceMap,
                            ei = K && !!a.iridescenceThicknessMap,
                            er = Z && !!a.sheenColorMap,
                            ea = Z && !!a.sheenRoughnessMap,
                            es = !!a.specularMap,
                            eo = !!a.specularColorMap,
                            el = !!a.specularIntensityMap,
                            eh = J && !!a.transmissionMap,
                            eu = J && !!a.thicknessMap,
                            ec = !!a.gradientMap,
                            ed = !!a.alphaMap,
                            ep = a.alphaTest > 0,
                            ef = !!a.alphaHash,
                            em = !!a.extensions,
                            eg = tt;
                        a.toneMapped && (null === P || !0 === P.isXRRenderTarget) && (eg = e.toneMapping);
                        let ev = {
                            shaderID: w,
                            shaderType: a.type,
                            shaderName: a.name,
                            vertexShader: _,
                            fragmentShader: x,
                            defines: a.defines,
                            customVertexShaderID: M,
                            customFragmentShaderID: y,
                            isRawShaderMaterial: !0 === a.isRawShaderMaterial,
                            glslVersion: a.glslVersion,
                            precision: p,
                            batching: I,
                            batchingColor: I && null !== v._colorsTexture,
                            instancing: D,
                            instancingColor: D && null !== v.instanceColor,
                            instancingMorph: D && null !== v.morphTexture,
                            supportsVertexTextures: d,
                            outputColorSpace: null === P ? e.outputColorSpace : !0 === P.isXRRenderTarget ? P.texture.colorSpace : nE,
                            alphaToCoverage: !!a.alphaToCoverage,
                            map: N,
                            matcap: O,
                            envMap: F,
                            envMapMode: F && T.mapping,
                            envMapCubeUVHeight: A,
                            aoMap: B,
                            lightMap: z,
                            bumpMap: G,
                            normalMap: H,
                            displacementMap: d && k,
                            emissiveMap: V,
                            normalMapObjectSpace: H && a.normalMapType === nx,
                            normalMapTangentSpace: H && a.normalMapType === n_,
                            metalnessMap: W,
                            roughnessMap: X,
                            anisotropy: j,
                            anisotropyMap: Q,
                            clearcoat: Y,
                            clearcoatMap: $,
                            clearcoatNormalMap: ee,
                            clearcoatRoughnessMap: et,
                            dispersion: q,
                            iridescence: K,
                            iridescenceMap: en,
                            iridescenceThicknessMap: ei,
                            sheen: Z,
                            sheenColorMap: er,
                            sheenRoughnessMap: ea,
                            specularMap: es,
                            specularColorMap: eo,
                            specularIntensityMap: el,
                            transmission: J,
                            transmissionMap: eh,
                            thicknessMap: eu,
                            gradientMap: ec,
                            opaque: !1 === a.transparent && a.blending === eC && !1 === a.alphaToCoverage,
                            alphaMap: ed,
                            alphaTest: ep,
                            alphaHash: ef,
                            combine: a.combine,
                            mapUv: N && m(a.map.channel),
                            aoMapUv: B && m(a.aoMap.channel),
                            lightMapUv: z && m(a.lightMap.channel),
                            bumpMapUv: G && m(a.bumpMap.channel),
                            normalMapUv: H && m(a.normalMap.channel),
                            displacementMapUv: k && m(a.displacementMap.channel),
                            emissiveMapUv: V && m(a.emissiveMap.channel),
                            metalnessMapUv: W && m(a.metalnessMap.channel),
                            roughnessMapUv: X && m(a.roughnessMap.channel),
                            anisotropyMapUv: Q && m(a.anisotropyMap.channel),
                            clearcoatMapUv: $ && m(a.clearcoatMap.channel),
                            clearcoatNormalMapUv: ee && m(a.clearcoatNormalMap.channel),
                            clearcoatRoughnessMapUv: et && m(a.clearcoatRoughnessMap.channel),
                            iridescenceMapUv: en && m(a.iridescenceMap.channel),
                            iridescenceThicknessMapUv: ei && m(a.iridescenceThicknessMap.channel),
                            sheenColorMapUv: er && m(a.sheenColorMap.channel),
                            sheenRoughnessMapUv: ea && m(a.sheenRoughnessMap.channel),
                            specularMapUv: es && m(a.specularMap.channel),
                            specularColorMapUv: eo && m(a.specularColorMap.channel),
                            specularIntensityMapUv: el && m(a.specularIntensityMap.channel),
                            transmissionMapUv: eh && m(a.transmissionMap.channel),
                            thicknessMapUv: eu && m(a.thicknessMap.channel),
                            alphaMapUv: ed && m(a.alphaMap.channel),
                            vertexTangents: !!S.attributes.tangent && (H || j),
                            vertexColors: a.vertexColors,
                            vertexAlphas: !0 === a.vertexColors && !!S.attributes.color && 4 === S.attributes.color.itemSize,
                            pointsUvs: !0 === v.isPoints && !!S.attributes.uv && (N || ed),
                            fog: !!E,
                            useFog: !0 === a.fog,
                            fogExp2: !!E && E.isFogExp2,
                            flatShading: !0 === a.flatShading,
                            sizeAttenuation: !0 === a.sizeAttenuation,
                            logarithmicDepthBuffer: c,
                            reverseDepthBuffer: L,
                            skinning: !0 === v.isSkinnedMesh,
                            morphTargets: void 0 !== S.morphAttributes.position,
                            morphNormals: void 0 !== S.morphAttributes.normal,
                            morphColors: void 0 !== S.morphAttributes.color,
                            morphTargetsCount: C,
                            morphTextureStride: U,
                            numDirLights: o.directional.length,
                            numPointLights: o.point.length,
                            numSpotLights: o.spot.length,
                            numSpotLightMaps: o.spotLightMap.length,
                            numRectAreaLights: o.rectArea.length,
                            numHemiLights: o.hemi.length,
                            numDirLightShadows: o.directionalShadowMap.length,
                            numPointLightShadows: o.pointShadowMap.length,
                            numSpotLightShadows: o.spotShadowMap.length,
                            numSpotLightShadowsWithMaps: o.numSpotLightShadowsWithMaps,
                            numLightProbes: o.numLightProbes,
                            numClippingPlanes: s.numPlanes,
                            numClipIntersection: s.numIntersection,
                            dithering: a.dithering,
                            shadowMapEnabled: e.shadowMap.enabled && u.length > 0,
                            shadowMapType: e.shadowMap.type,
                            toneMapping: eg,
                            decodeVideoTexture: N && !0 === a.map.isVideoTexture && iw.getTransfer(a.map.colorSpace) === nb,
                            decodeVideoTextureEmissive: V && !0 === a.emissiveMap.isVideoTexture && iw.getTransfer(a.emissiveMap.colorSpace) === nb,
                            premultipliedAlpha: a.premultipliedAlpha,
                            doubleSided: a.side === ew,
                            flipSided: a.side === eA,
                            useDepthPacking: a.depthPacking >= 0,
                            depthPacking: a.depthPacking || 0,
                            index0AttributeName: a.index0AttributeName,
                            extensionClipCullDistance: em && !0 === a.extensions.clipCullDistance && i.has("WEBGL_clip_cull_distance"),
                            extensionMultiDraw: (em && !0 === a.extensions.multiDraw || I) && i.has("WEBGL_multi_draw"),
                            rendererExtensionParallelShaderCompile: i.has("KHR_parallel_shader_compile"),
                            customProgramCacheKey: a.customProgramCacheKey()
                        };
                        return ev.vertexUv1s = h.has(1), ev.vertexUv2s = h.has(2), ev.vertexUv3s = h.has(3), h.clear(), ev
                    },
                    getProgramCacheKey: function(t) {
                        let n = [];
                        if (t.shaderID ? n.push(t.shaderID) : (n.push(t.customVertexShaderID), n.push(t.customFragmentShaderID)), void 0 !== t.defines)
                            for (let e in t.defines) n.push(e), n.push(t.defines[e]);
                        return !1 === t.isRawShaderMaterial && (n.push(t.precision), n.push(t.outputColorSpace), n.push(t.envMapMode), n.push(t.envMapCubeUVHeight), n.push(t.mapUv), n.push(t.alphaMapUv), n.push(t.lightMapUv), n.push(t.aoMapUv), n.push(t.bumpMapUv), n.push(t.normalMapUv), n.push(t.displacementMapUv), n.push(t.emissiveMapUv), n.push(t.metalnessMapUv), n.push(t.roughnessMapUv), n.push(t.anisotropyMapUv), n.push(t.clearcoatMapUv), n.push(t.clearcoatNormalMapUv), n.push(t.clearcoatRoughnessMapUv), n.push(t.iridescenceMapUv), n.push(t.iridescenceThicknessMapUv), n.push(t.sheenColorMapUv), n.push(t.sheenRoughnessMapUv), n.push(t.specularMapUv), n.push(t.specularColorMapUv), n.push(t.specularIntensityMapUv), n.push(t.transmissionMapUv), n.push(t.thicknessMapUv), n.push(t.combine), n.push(t.fogExp2), n.push(t.sizeAttenuation), n.push(t.morphTargetsCount), n.push(t.morphAttributeCount), n.push(t.numDirLights), n.push(t.numPointLights), n.push(t.numSpotLights), n.push(t.numSpotLightMaps), n.push(t.numHemiLights), n.push(t.numRectAreaLights), n.push(t.numDirLightShadows), n.push(t.numPointLightShadows), n.push(t.numSpotLightShadows), n.push(t.numSpotLightShadowsWithMaps), n.push(t.numLightProbes), n.push(t.shadowMapType), n.push(t.toneMapping), n.push(t.numClippingPlanes), n.push(t.numClipIntersection), n.push(t.depthPacking), o.disableAll(), t.supportsVertexTextures && o.enable(0), t.instancing && o.enable(1), t.instancingColor && o.enable(2), t.instancingMorph && o.enable(3), t.matcap && o.enable(4), t.envMap && o.enable(5), t.normalMapObjectSpace && o.enable(6), t.normalMapTangentSpace && o.enable(7), t.clearcoat && o.enable(8), t.iridescence && o.enable(9), t.alphaTest && o.enable(10), t.vertexColors && o.enable(11), t.vertexAlphas && o.enable(12), t.vertexUv1s && o.enable(13), t.vertexUv2s && o.enable(14), t.vertexUv3s && o.enable(15), t.vertexTangents && o.enable(16), t.anisotropy && o.enable(17), t.alphaHash && o.enable(18), t.batching && o.enable(19), t.dispersion && o.enable(20), t.batchingColor && o.enable(21), n.push(o.mask), o.disableAll(), t.fog && o.enable(0), t.useFog && o.enable(1), t.flatShading && o.enable(2), t.logarithmicDepthBuffer && o.enable(3), t.reverseDepthBuffer && o.enable(4), t.skinning && o.enable(5), t.morphTargets && o.enable(6), t.morphNormals && o.enable(7), t.morphColors && o.enable(8), t.premultipliedAlpha && o.enable(9), t.shadowMapEnabled && o.enable(10), t.doubleSided && o.enable(11), t.flipSided && o.enable(12), t.useDepthPacking && o.enable(13), t.dithering && o.enable(14), t.transmission && o.enable(15), t.sheen && o.enable(16), t.opaque && o.enable(17), t.pointsUvs && o.enable(18), t.decodeVideoTexture && o.enable(19), t.decodeVideoTextureEmissive && o.enable(20), t.alphaToCoverage && o.enable(21), n.push(o.mask), n.push(e.outputColorSpace)), n.push(t.customProgramCacheKey), n.join()
                    },
                    getUniforms: function(e) {
                        let t = f[e.type],
                            n;
                        if (t) {
                            let e = hV[t];
                            n = aQ.clone(e.uniforms)
                        } else n = e.uniforms;
                        return n
                    },
                    acquireProgram: function(t, n) {
                        let i;
                        for (let e = 0, t = u.length; e < t; e++) {
                            let t = u[e];
                            if (t.cacheKey === n) {
                                i = t, ++i.usedTimes;
                                break
                            }
                        }
                        return void 0 === i && (i = new pD(e, n, t, a), u.push(i)), i
                    },
                    releaseProgram: function(e) {
                        if (0 == --e.usedTimes) {
                            let t = u.indexOf(e);
                            u[t] = u[u.length - 1], u.pop(), e.destroy()
                        }
                    },
                    releaseShaderCache: function(e) {
                        l.remove(e)
                    },
                    programs: u,
                    dispose: function() {
                        l.dispose()
                    }
                }
            }
            var pY = h(() => {
                nX(), at(), pW(), pX(), cV(), sv(), iU()
            });

            function pq() {
                let e = new WeakMap;
                return {
                    has: function(t) {
                        return e.has(t)
                    },
                    get: function(t) {
                        let n = e.get(t);
                        return void 0 === n && (n = {}, e.set(t, n)), n
                    },
                    remove: function(t) {
                        e.delete(t)
                    },
                    update: function(t, n, i) {
                        e.get(t)[n] = i
                    },
                    dispose: function() {
                        e = new WeakMap
                    }
                }
            }
            var pK = h(() => {});

            function pZ(e, t) {
                return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.material.id !== t.material.id ? e.material.id - t.material.id : e.z !== t.z ? e.z - t.z : e.id - t.id
            }

            function pJ(e, t) {
                return e.groupOrder !== t.groupOrder ? e.groupOrder - t.groupOrder : e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder : e.z !== t.z ? t.z - e.z : e.id - t.id
            }

            function pQ() {
                let e = [],
                    t = 0,
                    n = [],
                    i = [],
                    r = [];

                function a(n, i, r, a, s, o) {
                    let l = e[t];
                    return void 0 === l ? (l = {
                        id: n.id,
                        object: n,
                        geometry: i,
                        material: r,
                        groupOrder: a,
                        renderOrder: n.renderOrder,
                        z: s,
                        group: o
                    }, e[t] = l) : (l.id = n.id, l.object = n, l.geometry = i, l.material = r, l.groupOrder = a, l.renderOrder = n.renderOrder, l.z = s, l.group = o), t++, l
                }
                return {
                    opaque: n,
                    transmissive: i,
                    transparent: r,
                    init: function() {
                        t = 0, n.length = 0, i.length = 0, r.length = 0
                    },
                    push: function(e, t, s, o, l, h) {
                        let u = a(e, t, s, o, l, h);
                        s.transmission > 0 ? i.push(u) : !0 === s.transparent ? r.push(u) : n.push(u)
                    },
                    unshift: function(e, t, s, o, l, h) {
                        let u = a(e, t, s, o, l, h);
                        s.transmission > 0 ? i.unshift(u) : !0 === s.transparent ? r.unshift(u) : n.unshift(u)
                    },
                    finish: function() {
                        for (let n = t, i = e.length; n < i; n++) {
                            let t = e[n];
                            if (null === t.id) break;
                            t.id = null, t.object = null, t.geometry = null, t.material = null, t.group = null
                        }
                    },
                    sort: function(e, t) {
                        n.length > 1 && n.sort(e || pZ), i.length > 1 && i.sort(t || pJ), r.length > 1 && r.sort(t || pJ)
                    }
                }
            }

            function p$() {
                let e = new WeakMap;
                return {
                    get: function(t, n) {
                        let i = e.get(t),
                            r;
                        return void 0 === i ? (r = new pQ, e.set(t, [r])) : n >= i.length ? (r = new pQ, i.push(r)) : r = i[n], r
                    },
                    dispose: function() {
                        e = new WeakMap
                    }
                }
            }
            var p0 = h(() => {});

            function p1() {
                let e = {};
                return {
                    get: function(t) {
                        let n;
                        if (void 0 !== e[t.id]) return e[t.id];
                        switch (t.type) {
                            case "DirectionalLight":
                                n = {
                                    direction: new iV,
                                    color: new al
                                };
                                break;
                            case "SpotLight":
                                n = {
                                    position: new iV,
                                    direction: new iV,
                                    color: new al,
                                    distance: 0,
                                    coneCos: 0,
                                    penumbraCos: 0,
                                    decay: 0
                                };
                                break;
                            case "PointLight":
                                n = {
                                    position: new iV,
                                    color: new al,
                                    distance: 0,
                                    decay: 0
                                };
                                break;
                            case "HemisphereLight":
                                n = {
                                    direction: new iV,
                                    skyColor: new al,
                                    groundColor: new al
                                };
                                break;
                            case "RectAreaLight":
                                n = {
                                    color: new al,
                                    position: new iV,
                                    halfWidth: new iV,
                                    halfHeight: new iV
                                }
                        }
                        return e[t.id] = n, n
                    }
                }
            }

            function p2(e, t) {
                return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + (t.map ? 1 : 0) - (e.map ? 1 : 0)
            }

            function p3(e) {
                let t;
                let n = new p1,
                    i = (t = {}, {
                        get: function(e) {
                            let n;
                            if (void 0 !== t[e.id]) return t[e.id];
                            switch (e.type) {
                                case "DirectionalLight":
                                case "SpotLight":
                                    n = {
                                        shadowIntensity: 1,
                                        shadowBias: 0,
                                        shadowNormalBias: 0,
                                        shadowRadius: 1,
                                        shadowMapSize: new ic
                                    };
                                    break;
                                case "PointLight":
                                    n = {
                                        shadowIntensity: 1,
                                        shadowBias: 0,
                                        shadowNormalBias: 0,
                                        shadowRadius: 1,
                                        shadowMapSize: new ic,
                                        shadowCameraNear: 1,
                                        shadowCameraFar: 1e3
                                    }
                            }
                            return t[e.id] = n, n
                        }
                    }),
                    r = {
                        version: 0,
                        hash: {
                            directionalLength: -1,
                            pointLength: -1,
                            spotLength: -1,
                            rectAreaLength: -1,
                            hemiLength: -1,
                            numDirectionalShadows: -1,
                            numPointShadows: -1,
                            numSpotShadows: -1,
                            numSpotMaps: -1,
                            numLightProbes: -1
                        },
                        ambient: [0, 0, 0],
                        probe: [],
                        directional: [],
                        directionalShadow: [],
                        directionalShadowMap: [],
                        directionalShadowMatrix: [],
                        spot: [],
                        spotLightMap: [],
                        spotShadow: [],
                        spotShadowMap: [],
                        spotLightMatrix: [],
                        rectArea: [],
                        rectAreaLTC1: null,
                        rectAreaLTC2: null,
                        point: [],
                        pointShadow: [],
                        pointShadowMap: [],
                        pointShadowMatrix: [],
                        hemi: [],
                        numSpotLightShadowsWithMaps: 0,
                        numLightProbes: 0
                    };
                for (let e = 0; e < 9; e++) r.probe.push(new iV);
                let a = new iV,
                    s = new r_,
                    o = new r_;
                return {
                    setup: function(t) {
                        let a = 0,
                            s = 0,
                            o = 0;
                        for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
                        let l = 0,
                            h = 0,
                            u = 0,
                            c = 0,
                            d = 0,
                            p = 0,
                            f = 0,
                            m = 0,
                            g = 0,
                            v = 0,
                            _ = 0;
                        t.sort(p2);
                        for (let e = 0, x = t.length; e < x; e++) {
                            let x = t[e],
                                M = x.color,
                                y = x.intensity,
                                E = x.distance,
                                S = x.shadow && x.shadow.map ? x.shadow.map.texture : null;
                            if (x.isAmbientLight) a += M.r * y, s += M.g * y, o += M.b * y;
                            else if (x.isLightProbe) {
                                for (let e = 0; e < 9; e++) r.probe[e].addScaledVector(x.sh.coefficients[e], y);
                                _++
                            } else if (x.isDirectionalLight) {
                                let e = n.get(x);
                                if (e.color.copy(x.color).multiplyScalar(x.intensity), x.castShadow) {
                                    let e = x.shadow,
                                        t = i.get(x);
                                    t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, r.directionalShadow[l] = t, r.directionalShadowMap[l] = S, r.directionalShadowMatrix[l] = x.shadow.matrix, p++
                                }
                                r.directional[l] = e, l++
                            } else if (x.isSpotLight) {
                                let e = n.get(x);
                                e.position.setFromMatrixPosition(x.matrixWorld), e.color.copy(M).multiplyScalar(y), e.distance = E, e.coneCos = Math.cos(x.angle), e.penumbraCos = Math.cos(x.angle * (1 - x.penumbra)), e.decay = x.decay, r.spot[u] = e;
                                let t = x.shadow;
                                if (x.map && (r.spotLightMap[g] = x.map, g++, t.updateMatrices(x), x.castShadow && v++), r.spotLightMatrix[u] = t.matrix, x.castShadow) {
                                    let e = i.get(x);
                                    e.shadowIntensity = t.intensity, e.shadowBias = t.bias, e.shadowNormalBias = t.normalBias, e.shadowRadius = t.radius, e.shadowMapSize = t.mapSize, r.spotShadow[u] = e, r.spotShadowMap[u] = S, m++
                                }
                                u++
                            } else if (x.isRectAreaLight) {
                                let e = n.get(x);
                                e.color.copy(M).multiplyScalar(y), e.halfWidth.set(.5 * x.width, 0, 0), e.halfHeight.set(0, .5 * x.height, 0), r.rectArea[c] = e, c++
                            } else if (x.isPointLight) {
                                let e = n.get(x);
                                if (e.color.copy(x.color).multiplyScalar(x.intensity), e.distance = x.distance, e.decay = x.decay, x.castShadow) {
                                    let e = x.shadow,
                                        t = i.get(x);
                                    t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, t.shadowCameraNear = e.camera.near, t.shadowCameraFar = e.camera.far, r.pointShadow[h] = t, r.pointShadowMap[h] = S, r.pointShadowMatrix[h] = x.shadow.matrix, f++
                                }
                                r.point[h] = e, h++
                            } else if (x.isHemisphereLight) {
                                let e = n.get(x);
                                e.skyColor.copy(x.color).multiplyScalar(y), e.groundColor.copy(x.groundColor).multiplyScalar(y), r.hemi[d] = e, d++
                            }
                        }
                        c > 0 && (!0 === e.has("OES_texture_float_linear") ? (r.rectAreaLTC1 = hk.LTC_FLOAT_1, r.rectAreaLTC2 = hk.LTC_FLOAT_2) : (r.rectAreaLTC1 = hk.LTC_HALF_1, r.rectAreaLTC2 = hk.LTC_HALF_2)), r.ambient[0] = a, r.ambient[1] = s, r.ambient[2] = o;
                        let x = r.hash;
                        (x.directionalLength !== l || x.pointLength !== h || x.spotLength !== u || x.rectAreaLength !== c || x.hemiLength !== d || x.numDirectionalShadows !== p || x.numPointShadows !== f || x.numSpotShadows !== m || x.numSpotMaps !== g || x.numLightProbes !== _) && (r.directional.length = l, r.spot.length = u, r.rectArea.length = c, r.point.length = h, r.hemi.length = d, r.directionalShadow.length = p, r.directionalShadowMap.length = p, r.pointShadow.length = f, r.pointShadowMap.length = f, r.spotShadow.length = m, r.spotShadowMap.length = m, r.directionalShadowMatrix.length = p, r.pointShadowMatrix.length = f, r.spotLightMatrix.length = m + g - v, r.spotLightMap.length = g, r.numSpotLightShadowsWithMaps = v, r.numLightProbes = _, x.directionalLength = l, x.pointLength = h, x.spotLength = u, x.rectAreaLength = c, x.hemiLength = d, x.numDirectionalShadows = p, x.numPointShadows = f, x.numSpotShadows = m, x.numSpotMaps = g, x.numLightProbes = _, r.version = p4++)
                    },
                    setupView: function(e, t) {
                        let n = 0,
                            i = 0,
                            l = 0,
                            h = 0,
                            u = 0,
                            c = t.matrixWorldInverse;
                        for (let t = 0, d = e.length; t < d; t++) {
                            let d = e[t];
                            if (d.isDirectionalLight) {
                                let e = r.directional[n];
                                e.direction.setFromMatrixPosition(d.matrixWorld), a.setFromMatrixPosition(d.target.matrixWorld), e.direction.sub(a), e.direction.transformDirection(c), n++
                            } else if (d.isSpotLight) {
                                let e = r.spot[l];
                                e.position.setFromMatrixPosition(d.matrixWorld), e.position.applyMatrix4(c), e.direction.setFromMatrixPosition(d.matrixWorld), a.setFromMatrixPosition(d.target.matrixWorld), e.direction.sub(a), e.direction.transformDirection(c), l++
                            } else if (d.isRectAreaLight) {
                                let e = r.rectArea[h];
                                e.position.setFromMatrixPosition(d.matrixWorld), e.position.applyMatrix4(c), o.identity(), s.copy(d.matrixWorld), s.premultiply(c), o.extractRotation(s), e.halfWidth.set(.5 * d.width, 0, 0), e.halfHeight.set(0, .5 * d.height, 0), e.halfWidth.applyMatrix4(o), e.halfHeight.applyMatrix4(o), h++
                            } else if (d.isPointLight) {
                                let e = r.point[i];
                                e.position.setFromMatrixPosition(d.matrixWorld), e.position.applyMatrix4(c), i++
                            } else if (d.isHemisphereLight) {
                                let e = r.hemi[u];
                                e.direction.setFromMatrixPosition(d.matrixWorld), e.direction.transformDirection(c), u++
                            }
                        }
                    },
                    state: r
                }
            }
            var p4, p5 = h(() => {
                aR(), r7(), ig(), i0(), ck(), p4 = 0
            });

            function p6(e) {
                let t = new p3(e),
                    n = [],
                    i = [],
                    r = {
                        lightsArray: n,
                        shadowsArray: i,
                        camera: null,
                        lights: t,
                        transmissionRenderTarget: {}
                    };
                return {
                    init: function(e) {
                        r.camera = e, n.length = 0, i.length = 0
                    },
                    state: r,
                    setupLights: function() {
                        t.setup(n)
                    },
                    setupLightsView: function(e) {
                        t.setupView(n, e)
                    },
                    pushLight: function(e) {
                        n.push(e)
                    },
                    pushShadow: function(e) {
                        i.push(e)
                    }
                }
            }

            function p8(e) {
                let t = new WeakMap;
                return {
                    get: function(n) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            r = t.get(n),
                            a;
                        return void 0 === r ? (a = new p6(e), t.set(n, [a])) : i >= r.length ? (a = new p6(e), r.push(a)) : a = r[i], a
                    },
                    dispose: function() {
                        t = new WeakMap
                    }
                }
            }
            var p9, p7, fe = h(() => {
                    p5()
                }),
                ft = h(() => {
                    p9 = "\n", p7 = ""
                });

            function fn(e, t, n) {
                let i = new sp,
                    r = new ic,
                    a = new ic,
                    s = new iF,
                    o = new s2({
                        depthPacking: nv
                    }),
                    l = new s3,
                    h = {},
                    u = n.maxTextureSize,
                    c = {
                        [eT]: eA,
                        [eA]: eT,
                        [ew]: ew
                    },
                    d = new a1({
                        defines: {
                            VSM_SAMPLES: 8
                        },
                        uniforms: {
                            shadow_pass: {
                                value: null
                            },
                            resolution: {
                                value: new ic
                            },
                            radius: {
                                value: 4
                            }
                        },
                        vertexShader: p9,
                        fragmentShader: p7
                    }),
                    p = d.clone();
                p.defines.HORIZONTAL_PASS = 1;
                let f = new aw;
                f.setAttribute("position", new ag(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3));
                let m = new aX(f, d),
                    g = this;
                this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = eE;
                let v = this.type;

                function _(t, n, i, r) {
                    let a = null,
                        s = !0 === i.isPointLight ? t.customDistanceMaterial : t.customDepthMaterial;
                    if (void 0 !== s) a = s;
                    else if (a = !0 === i.isPointLight ? l : o, e.localClippingEnabled && !0 === n.clipShadows && Array.isArray(n.clippingPlanes) && 0 !== n.clippingPlanes.length || n.displacementMap && 0 !== n.displacementScale || n.alphaMap && n.alphaTest > 0 || n.map && n.alphaTest > 0) {
                        let e = a.uuid,
                            t = n.uuid,
                            i = h[e];
                        void 0 === i && (i = {}, h[e] = i);
                        let r = i[t];
                        void 0 === r && (r = a.clone(), i[t] = r, n.addEventListener("dispose", x)), a = r
                    }
                    return a.visible = n.visible, a.wireframe = n.wireframe, r === eb ? a.side = null !== n.shadowSide ? n.shadowSide : n.side : a.side = null !== n.shadowSide ? n.shadowSide : c[n.side], a.alphaMap = n.alphaMap, a.alphaTest = n.alphaTest, a.map = n.map, a.clipShadows = n.clipShadows, a.clippingPlanes = n.clippingPlanes, a.clipIntersection = n.clipIntersection, a.displacementMap = n.displacementMap, a.displacementScale = n.displacementScale, a.displacementBias = n.displacementBias, a.wireframeLinewidth = n.wireframeLinewidth, a.linewidth = n.linewidth, !0 === i.isPointLight && !0 === a.isMeshDistanceMaterial && (e.properties.get(a).light = i), a
                }

                function x(e) {
                    for (let t in e.target.removeEventListener("dispose", x), h) {
                        let n = h[t],
                            i = e.target.uuid;
                        i in n && (n[i].dispose(), delete n[i])
                    }
                }
                this.render = function(n, o, l) {
                    if (!1 === g.enabled || !1 === g.autoUpdate && !1 === g.needsUpdate || 0 === n.length) return;
                    let h = e.getRenderTarget(),
                        c = e.getActiveCubeFace(),
                        f = e.getActiveMipmapLevel(),
                        x = e.state;
                    x.setBlending(eR), x.buffers.color.setClear(1, 1, 1, 1), x.buffers.depth.setTest(!0), x.setScissorTest(!1);
                    let M = v !== eb && this.type === eb,
                        y = v === eb && this.type !== eb;
                    for (let h = 0, c = n.length; h < c; h++) {
                        let c = n[h],
                            f = c.shadow;
                        if (void 0 === f) {
                            console.warn("THREE.WebGLShadowMap:", c, "has no shadow.");
                            continue
                        }
                        if (!1 === f.autoUpdate && !1 === f.needsUpdate) continue;
                        r.copy(f.mapSize);
                        let g = f.getFrameExtents();
                        if (r.multiply(g), a.copy(f.mapSize), (r.x > u || r.y > u) && (r.x > u && (a.x = Math.floor(u / g.x), r.x = a.x * g.x, f.mapSize.x = a.x), r.y > u && (a.y = Math.floor(u / g.y), r.y = a.y * g.y, f.mapSize.y = a.y)), null === f.map || !0 === M || !0 === y) {
                            let e = this.type !== eb ? {
                                minFilter: t_,
                                magFilter: t_
                            } : {};
                            null !== f.map && f.map.dispose(), f.map = new iz(r.x, r.y, e), f.map.texture.name = c.name + ".shadowMap", f.camera.updateProjectionMatrix()
                        }
                        e.setRenderTarget(f.map), e.clear();
                        let v = f.getViewportCount();
                        for (let n = 0; n < v; n++) {
                            let r = f.getViewport(n);
                            s.set(a.x * r.x, a.y * r.y, a.x * r.z, a.y * r.w), x.viewport(s), f.updateMatrices(c, n), i = f.getFrustum(),
                                function n(r, a, s, o, l) {
                                    if (!1 === r.visible) return;
                                    if (r.layers.test(a.layers) && (r.isMesh || r.isLine || r.isPoints) && (r.castShadow || r.receiveShadow && l === eb) && (!r.frustumCulled || i.intersectsObject(r))) {
                                        r.modelViewMatrix.multiplyMatrices(s.matrixWorldInverse, r.matrixWorld);
                                        let n = t.update(r),
                                            i = r.material;
                                        if (Array.isArray(i)) {
                                            let t = n.groups;
                                            for (let h = 0, u = t.length; h < u; h++) {
                                                let u = t[h],
                                                    c = i[u.materialIndex];
                                                if (c && c.visible) {
                                                    let t = _(r, c, o, l);
                                                    r.onBeforeShadow(e, r, a, s, n, t, u), e.renderBufferDirect(s, null, n, t, r, u), r.onAfterShadow(e, r, a, s, n, t, u)
                                                }
                                            }
                                        } else if (i.visible) {
                                            let t = _(r, i, o, l);
                                            r.onBeforeShadow(e, r, a, s, n, t, null), e.renderBufferDirect(s, null, n, t, r, null), r.onAfterShadow(e, r, a, s, n, t, null)
                                        }
                                    }
                                    let h = r.children;
                                    for (let e = 0, t = h.length; e < t; e++) n(h[e], a, s, o, l)
                                }(o, l, f.camera, c, this.type)
                        }!0 !== f.isPointLightShadow && this.type === eb && function(n, i) {
                            let a = t.update(m);
                            d.defines.VSM_SAMPLES !== n.blurSamples && (d.defines.VSM_SAMPLES = n.blurSamples, p.defines.VSM_SAMPLES = n.blurSamples, d.needsUpdate = !0, p.needsUpdate = !0), null === n.mapPass && (n.mapPass = new iz(r.x, r.y)), d.uniforms.shadow_pass.value = n.map.texture, d.uniforms.resolution.value = n.mapSize, d.uniforms.radius.value = n.radius, e.setRenderTarget(n.mapPass), e.clear(), e.renderBufferDirect(i, null, a, d, m, null), p.uniforms.shadow_pass.value = n.mapPass.texture, p.uniforms.resolution.value = n.mapSize, p.uniforms.radius.value = n.radius, e.setRenderTarget(n.map), e.clear(), e.renderBufferDirect(i, null, a, p, m, null)
                        }(f, l), f.needsUpdate = !1
                    }
                    v = this.type, g.needsUpdate = !1, e.setRenderTarget(h, c, f)
                }
            }
            var fi = h(() => {
                nX(), iZ(), ol(), oh(), sM(), aP(), aL(), aY(), iq(), ig(), sL(), ft()
            });

            function fr(e, t) {
                let n = new function() {
                        let t = !1,
                            n = new iF,
                            i = null,
                            r = new iF(0, 0, 0, 0);
                        return {
                            setMask: function(n) {
                                i === n || t || (e.colorMask(n, n, n, n), i = n)
                            },
                            setLocked: function(e) {
                                t = e
                            },
                            setClear: function(t, i, a, s, o) {
                                !0 === o && (t *= s, i *= s, a *= s), n.set(t, i, a, s), !1 === r.equals(n) && (e.clearColor(t, i, a, s), r.copy(n))
                            },
                            reset: function() {
                                t = !1, i = null, r.set(-1, 0, 0, 0)
                            }
                        }
                    },
                    i = new function() {
                        let n = !1,
                            i = !1,
                            r = null,
                            a = null,
                            s = null;
                        return {
                            setReversed: function(e) {
                                if (i !== e) {
                                    let e = t.get("EXT_clip_control");
                                    i ? e.clipControlEXT(e.LOWER_LEFT_EXT, e.ZERO_TO_ONE_EXT) : e.clipControlEXT(e.LOWER_LEFT_EXT, e.NEGATIVE_ONE_TO_ONE_EXT);
                                    let n = s;
                                    s = null, this.setClear(n)
                                }
                                i = e
                            },
                            getReversed: function() {
                                return i
                            },
                            setTest: function(t) {
                                t ? z(e.DEPTH_TEST) : G(e.DEPTH_TEST)
                            },
                            setMask: function(t) {
                                r === t || n || (e.depthMask(t), r = t)
                            },
                            setFunc: function(t) {
                                if (i && (t = fa[t]), a !== t) {
                                    switch (t) {
                                        case e0:
                                            e.depthFunc(e.NEVER);
                                            break;
                                        case e1:
                                            e.depthFunc(e.ALWAYS);
                                            break;
                                        case e2:
                                            e.depthFunc(e.LESS);
                                            break;
                                        case e3:
                                            e.depthFunc(e.LEQUAL);
                                            break;
                                        case e4:
                                            e.depthFunc(e.EQUAL);
                                            break;
                                        case e5:
                                            e.depthFunc(e.GEQUAL);
                                            break;
                                        case e6:
                                            e.depthFunc(e.GREATER);
                                            break;
                                        case e8:
                                            e.depthFunc(e.NOTEQUAL);
                                            break;
                                        default:
                                            e.depthFunc(e.LEQUAL)
                                    }
                                    a = t
                                }
                            },
                            setLocked: function(e) {
                                n = e
                            },
                            setClear: function(t) {
                                s !== t && (i && (t = 1 - t), e.clearDepth(t), s = t)
                            },
                            reset: function() {
                                n = !1, r = null, a = null, s = null, i = !1
                            }
                        }
                    },
                    r = new function() {
                        let t = !1,
                            n = null,
                            i = null,
                            r = null,
                            a = null,
                            s = null,
                            o = null,
                            l = null,
                            h = null;
                        return {
                            setTest: function(n) {
                                t || (n ? z(e.STENCIL_TEST) : G(e.STENCIL_TEST))
                            },
                            setMask: function(i) {
                                n === i || t || (e.stencilMask(i), n = i)
                            },
                            setFunc: function(t, n, s) {
                                (i !== t || r !== n || a !== s) && (e.stencilFunc(t, n, s), i = t, r = n, a = s)
                            },
                            setOp: function(t, n, i) {
                                (s !== t || o !== n || l !== i) && (e.stencilOp(t, n, i), s = t, o = n, l = i)
                            },
                            setLocked: function(e) {
                                t = e
                            },
                            setClear: function(t) {
                                h !== t && (e.clearStencil(t), h = t)
                            },
                            reset: function() {
                                t = !1, n = null, i = null, r = null, a = null, s = null, o = null, l = null, h = null
                            }
                        }
                    },
                    a = new WeakMap,
                    s = new WeakMap,
                    o = {},
                    l = {},
                    h = new WeakMap,
                    u = [],
                    c = null,
                    d = !1,
                    p = null,
                    f = null,
                    m = null,
                    g = null,
                    v = null,
                    _ = null,
                    x = null,
                    M = new al(0, 0, 0),
                    y = 0,
                    E = !1,
                    S = null,
                    b = null,
                    T = null,
                    A = null,
                    w = null,
                    R = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    C = !1,
                    U = e.getParameter(e.VERSION); - 1 !== U.indexOf("WebGL") ? C = parseFloat(/^WebGL (\d)/.exec(U)[1]) >= 1 : -1 !== U.indexOf("OpenGL ES") && (C = parseFloat(/^OpenGL ES (\d)/.exec(U)[1]) >= 2);
                let P = null,
                    L = {},
                    D = e.getParameter(e.SCISSOR_BOX),
                    I = e.getParameter(e.VIEWPORT),
                    N = new iF().fromArray(D),
                    O = new iF().fromArray(I);

                function F(t, n, i, r) {
                    let a = new Uint8Array(4),
                        s = e.createTexture();
                    e.bindTexture(t, s), e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
                    for (let s = 0; s < i; s++) t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY ? e.texImage3D(n, 0, e.RGBA, 1, 1, r, 0, e.RGBA, e.UNSIGNED_BYTE, a) : e.texImage2D(n + s, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, a);
                    return s
                }
                let B = {};

                function z(t) {
                    !0 !== o[t] && (e.enable(t), o[t] = !0)
                }

                function G(t) {
                    !1 !== o[t] && (e.disable(t), o[t] = !1)
                }
                B[e.TEXTURE_2D] = F(e.TEXTURE_2D, e.TEXTURE_2D, 1), B[e.TEXTURE_CUBE_MAP] = F(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), B[e.TEXTURE_2D_ARRAY] = F(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1), B[e.TEXTURE_3D] = F(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1), n.setClear(0, 0, 0, 1), i.setClear(1), r.setClear(0), z(e.DEPTH_TEST), i.setFunc(e3), W(!1), X(eM), z(e.CULL_FACE), V(eR);
                let H = {
                    [eI]: e.FUNC_ADD,
                    [eN]: e.FUNC_SUBTRACT,
                    [eO]: e.FUNC_REVERSE_SUBTRACT
                };
                H[eF] = e.MIN, H[eB] = e.MAX;
                let k = {
                    [ez]: e.ZERO,
                    [eG]: e.ONE,
                    [eH]: e.SRC_COLOR,
                    [eV]: e.SRC_ALPHA,
                    [eK]: e.SRC_ALPHA_SATURATE,
                    [eY]: e.DST_COLOR,
                    [eX]: e.DST_ALPHA,
                    [ek]: e.ONE_MINUS_SRC_COLOR,
                    [eW]: e.ONE_MINUS_SRC_ALPHA,
                    [eq]: e.ONE_MINUS_DST_COLOR,
                    [ej]: e.ONE_MINUS_DST_ALPHA,
                    [eZ]: e.CONSTANT_COLOR,
                    [eJ]: e.ONE_MINUS_CONSTANT_COLOR,
                    [eQ]: e.CONSTANT_ALPHA,
                    [e$]: e.ONE_MINUS_CONSTANT_ALPHA
                };

                function V(t, n, i, r, a, s, o, l, h, u) {
                    if (t === eR) {
                        !0 === d && (G(e.BLEND), d = !1);
                        return
                    }
                    if (!1 === d && (z(e.BLEND), d = !0), t !== eD) {
                        if (t !== p || u !== E) {
                            if ((f !== eI || v !== eI) && (e.blendEquation(e.FUNC_ADD), f = eI, v = eI), u) switch (t) {
                                case eC:
                                    e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
                                    break;
                                case eU:
                                    e.blendFunc(e.ONE, e.ONE);
                                    break;
                                case eP:
                                    e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
                                    break;
                                case eL:
                                    e.blendFuncSeparate(e.ZERO, e.SRC_COLOR, e.ZERO, e.SRC_ALPHA);
                                    break;
                                default:
                                    console.error("THREE.WebGLState: Invalid blending: ", t)
                            } else switch (t) {
                                case eC:
                                    e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
                                    break;
                                case eU:
                                    e.blendFunc(e.SRC_ALPHA, e.ONE);
                                    break;
                                case eP:
                                    e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
                                    break;
                                case eL:
                                    e.blendFunc(e.ZERO, e.SRC_COLOR);
                                    break;
                                default:
                                    console.error("THREE.WebGLState: Invalid blending: ", t)
                            }
                            m = null, g = null, _ = null, x = null, M.set(0, 0, 0), y = 0, p = t, E = u
                        }
                        return
                    }
                    a = a || n, s = s || i, o = o || r, (n !== f || a !== v) && (e.blendEquationSeparate(H[n], H[a]), f = n, v = a), (i !== m || r !== g || s !== _ || o !== x) && (e.blendFuncSeparate(k[i], k[r], k[s], k[o]), m = i, g = r, _ = s, x = o), (!1 === l.equals(M) || h !== y) && (e.blendColor(l.r, l.g, l.b, h), M.copy(l), y = h), p = t, E = !1
                }

                function W(t) {
                    S !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), S = t)
                }

                function X(t) {
                    t !== ex ? (z(e.CULL_FACE), t !== b && (t === eM ? e.cullFace(e.BACK) : t === ey ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))) : G(e.CULL_FACE), b = t
                }

                function j(t, n, i) {
                    t ? (z(e.POLYGON_OFFSET_FILL), (A !== n || w !== i) && (e.polygonOffset(n, i), A = n, w = i)) : G(e.POLYGON_OFFSET_FILL)
                }
                return {
                    buffers: {
                        color: n,
                        depth: i,
                        stencil: r
                    },
                    enable: z,
                    disable: G,
                    bindFramebuffer: function(t, n) {
                        return l[t] !== n && (e.bindFramebuffer(t, n), l[t] = n, t === e.DRAW_FRAMEBUFFER && (l[e.FRAMEBUFFER] = n), t === e.FRAMEBUFFER && (l[e.DRAW_FRAMEBUFFER] = n), !0)
                    },
                    drawBuffers: function(t, n) {
                        let i = u,
                            r = !1;
                        if (t) {
                            void 0 === (i = h.get(n)) && (i = [], h.set(n, i));
                            let a = t.textures;
                            if (i.length !== a.length || i[0] !== e.COLOR_ATTACHMENT0) {
                                for (let t = 0, n = a.length; t < n; t++) i[t] = e.COLOR_ATTACHMENT0 + t;
                                i.length = a.length, r = !0
                            }
                        } else i[0] !== e.BACK && (i[0] = e.BACK, r = !0);
                        r && e.drawBuffers(i)
                    },
                    useProgram: function(t) {
                        return c !== t && (e.useProgram(t), c = t, !0)
                    },
                    setBlending: V,
                    setMaterial: function(t, a) {
                        t.side === ew ? G(e.CULL_FACE) : z(e.CULL_FACE);
                        let s = t.side === eA;
                        a && (s = !s), W(s), t.blending === eC && !1 === t.transparent ? V(eR) : V(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.blendColor, t.blendAlpha, t.premultipliedAlpha), i.setFunc(t.depthFunc), i.setTest(t.depthTest), i.setMask(t.depthWrite), n.setMask(t.colorWrite);
                        let o = t.stencilWrite;
                        r.setTest(o), o && (r.setMask(t.stencilWriteMask), r.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), r.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), j(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), !0 === t.alphaToCoverage ? z(e.SAMPLE_ALPHA_TO_COVERAGE) : G(e.SAMPLE_ALPHA_TO_COVERAGE)
                    },
                    setFlipSided: W,
                    setCullFace: X,
                    setLineWidth: function(t) {
                        t !== T && (C && e.lineWidth(t), T = t)
                    },
                    setPolygonOffset: j,
                    setScissorTest: function(t) {
                        t ? z(e.SCISSOR_TEST) : G(e.SCISSOR_TEST)
                    },
                    activeTexture: function(t) {
                        void 0 === t && (t = e.TEXTURE0 + R - 1), P !== t && (e.activeTexture(t), P = t)
                    },
                    bindTexture: function(t, n, i) {
                        void 0 === i && (i = null === P ? e.TEXTURE0 + R - 1 : P);
                        let r = L[i];
                        void 0 === r && (r = {
                            type: void 0,
                            texture: void 0
                        }, L[i] = r), (r.type !== t || r.texture !== n) && (P !== i && (e.activeTexture(i), P = i), e.bindTexture(t, n || B[t]), r.type = t, r.texture = n)
                    },
                    unbindTexture: function() {
                        let t = L[P];
                        void 0 !== t && void 0 !== t.type && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0)
                    },
                    compressedTexImage2D: function() {
                        try {
                            e.compressedTexImage2D.apply(e, arguments)
                        } catch (e) {
                            console.error("THREE.WebGLState:", e)
                        }
                    },
                    compressedTexImage3D: function() {
                        try {
                            e.compressedTexImage3D.apply(e, arguments)
                        } catch (e) {
                            console.error("THREE.WebGLState:", e)
                        }
                    },
                    texImage2D: function() {
                        try {
                            e.texImage2D.apply(e, arguments)
                        } catch (e) {
                            console.error("THREE.WebGLState:", e)
                        }
                    },
                    texImage3D: function() {
                        try {
                            e.texImage3D.apply(e, arguments)
                        } catch (e) {
                            console.error("THREE.WebGLState:", e)
                        }
                    },
                    updateUBOMapping: function(t, n) {
                        let i = s.get(n);
                        void 0 === i && (i = new WeakMap, s.set(n, i));
                        let r = i.get(t);
                        void 0 === r && (r = e.getUniformBlockIndex(n, t.name), i.set(t, r))
                    },
                    uniformBlockBinding: function(t, n) {
                        let i = s.get(n).get(t);
                        a.get(n) !== i && (e.uniformBlockBinding(n, i, t.__bindingPointIndex), a.set(n, i))
                    },
                    texStorage2D: function() {
                        try {
                            e.texStorage2D.apply(e, arguments)
                        } catch (e) {
                            console.error("THREE.WebGLState:", e)
                        }
                    },
                    texStorage3D: function() {
                        try {
                            e.texStorage3D.apply(e, arguments)
                        } catch (e) {
                            console.error("THREE.WebGLState:", e)
                        }
                    },
                    texSubImage2D: function() {
                        try {
                            e.texSubImage2D.apply(e, arguments)
                        } catch (e) {
                            console.error("THREE.WebGLState:", e)
                        }
                    },
                    texSubImage3D: function() {
                        try {
                            e.texSubImage3D.apply(e, arguments)
                        } catch (e) {
                            console.error("THREE.WebGLState:", e)
                        }
                    },
                    compressedTexSubImage2D: function() {
                        try {
                            e.compressedTexSubImage2D.apply(e, arguments)
                        } catch (e) {
                            console.error("THREE.WebGLState:", e)
                        }
                    },
                    compressedTexSubImage3D: function() {
                        try {
                            e.compressedTexSubImage3D.apply(e, arguments)
                        } catch (e) {
                            console.error("THREE.WebGLState:", e)
                        }
                    },
                    scissor: function(t) {
                        !1 === N.equals(t) && (e.scissor(t.x, t.y, t.z, t.w), N.copy(t))
                    },
                    viewport: function(t) {
                        !1 === O.equals(t) && (e.viewport(t.x, t.y, t.z, t.w), O.copy(t))
                    },
                    reset: function() {
                        e.disable(e.BLEND), e.disable(e.CULL_FACE), e.disable(e.DEPTH_TEST), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SCISSOR_TEST), e.disable(e.STENCIL_TEST), e.disable(e.SAMPLE_ALPHA_TO_COVERAGE), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ONE, e.ZERO), e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO), e.blendColor(0, 0, 0, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(e.LESS), i.setReversed(!1), e.clearDepth(1), e.stencilMask(0xffffffff), e.stencilFunc(e.ALWAYS, 0, 0xffffffff), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.clearStencil(0), e.cullFace(e.BACK), e.frontFace(e.CCW), e.polygonOffset(0, 0), e.activeTexture(e.TEXTURE0), e.bindFramebuffer(e.FRAMEBUFFER, null), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), e.bindFramebuffer(e.READ_FRAMEBUFFER, null), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), o = {}, P = null, L = {}, l = {}, h = new WeakMap, u = [], c = null, d = !1, p = null, f = null, m = null, g = null, v = null, _ = null, x = null, M = new al(0, 0, 0), y = 0, E = !1, S = null, b = null, T = null, A = null, w = null, N.set(0, 0, e.canvas.width, e.canvas.height), O.set(0, 0, e.canvas.width, e.canvas.height), n.reset(), i.reset(), r.reset()
                    }
                }
            }
            var fa, fs = h(() => {
                nX(), aR(), iq(), fa = {
                    [e0]: e1,
                    [e2]: e6,
                    [e4]: e8,
                    [e3]: e5,
                    [e1]: e0,
                    [e6]: e2,
                    [e8]: e4,
                    [e5]: e3
                }
            });

            function fo(e, t, n, i, r, a, s) {
                let o = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null,
                    l = !(typeof navigator > "u") && /OculusBrowser/g.test(navigator.userAgent),
                    h = new ic,
                    u = new WeakMap,
                    c, d = new WeakMap,
                    p = !1;
                try {
                    p = "u" > typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d")
                } catch (e) {}

                function f(e, t) {
                    return p ? new OffscreenCanvas(e, t) : ix("canvas")
                }

                function m(e, t, n) {
                    let i = 1,
                        r = G(e);
                    if ((r.width > n || r.height > n) && (i = n / Math.max(r.width, r.height)), i < 1) {
                        if (!("u" > typeof HTMLImageElement && e instanceof HTMLImageElement || "u" > typeof HTMLCanvasElement && e instanceof HTMLCanvasElement || "u" > typeof ImageBitmap && e instanceof ImageBitmap || "u" > typeof VideoFrame && e instanceof VideoFrame)) return "data" in e && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + r.width + "x" + r.height + ")."), e; {
                            let n = Math.floor(i * r.width),
                                a = Math.floor(i * r.height);
                            void 0 === c && (c = f(n, a));
                            let s = t ? f(n, a) : c;
                            return s.width = n, s.height = a, s.getContext("2d").drawImage(e, 0, 0, n, a), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + r.width + "x" + r.height + ") to (" + n + "x" + a + ")."), s
                        }
                    }
                    return e
                }

                function g(e) {
                    return e.generateMipmaps
                }

                function v(t) {
                    e.generateMipmap(t)
                }

                function _(n, i, r, a) {
                    let s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    if (null !== n) {
                        if (void 0 !== e[n]) return e[n];
                        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'")
                    }
                    let o = i;
                    if (i === e.RED && (r === e.FLOAT && (o = e.R32F), r === e.HALF_FLOAT && (o = e.R16F), r === e.UNSIGNED_BYTE && (o = e.R8)), i === e.RED_INTEGER && (r === e.UNSIGNED_BYTE && (o = e.R8UI), r === e.UNSIGNED_SHORT && (o = e.R16UI), r === e.UNSIGNED_INT && (o = e.R32UI), r === e.BYTE && (o = e.R8I), r === e.SHORT && (o = e.R16I), r === e.INT && (o = e.R32I)), i === e.RG && (r === e.FLOAT && (o = e.RG32F), r === e.HALF_FLOAT && (o = e.RG16F), r === e.UNSIGNED_BYTE && (o = e.RG8)), i === e.RG_INTEGER && (r === e.UNSIGNED_BYTE && (o = e.RG8UI), r === e.UNSIGNED_SHORT && (o = e.RG16UI), r === e.UNSIGNED_INT && (o = e.RG32UI), r === e.BYTE && (o = e.RG8I), r === e.SHORT && (o = e.RG16I), r === e.INT && (o = e.RG32I)), i === e.RGB_INTEGER && (r === e.UNSIGNED_BYTE && (o = e.RGB8UI), r === e.UNSIGNED_SHORT && (o = e.RGB16UI), r === e.UNSIGNED_INT && (o = e.RGB32UI), r === e.BYTE && (o = e.RGB8I), r === e.SHORT && (o = e.RGB16I), r === e.INT && (o = e.RGB32I)), i === e.RGBA_INTEGER && (r === e.UNSIGNED_BYTE && (o = e.RGBA8UI), r === e.UNSIGNED_SHORT && (o = e.RGBA16UI), r === e.UNSIGNED_INT && (o = e.RGBA32UI), r === e.BYTE && (o = e.RGBA8I), r === e.SHORT && (o = e.RGBA16I), r === e.INT && (o = e.RGBA32I)), i === e.RGB && r === e.UNSIGNED_INT_5_9_9_9_REV && (o = e.RGB9_E5), i === e.RGBA) {
                        let t = s ? nS : iw.getTransfer(a);
                        r === e.FLOAT && (o = e.RGBA32F), r === e.HALF_FLOAT && (o = e.RGBA16F), r === e.UNSIGNED_BYTE && (o = t === nb ? e.SRGB8_ALPHA8 : e.RGBA8), r === e.UNSIGNED_SHORT_4_4_4_4 && (o = e.RGBA4), r === e.UNSIGNED_SHORT_5_5_5_1 && (o = e.RGB5_A1)
                    }
                    return (o === e.R16F || o === e.R32F || o === e.RG16F || o === e.RG32F || o === e.RGBA16F || o === e.RGBA32F) && t.get("EXT_color_buffer_float"), o
                }

                function x(t, n) {
                    let i;
                    return t ? null === n || n === tC || n === tI ? i = e.DEPTH24_STENCIL8 : n === tU ? i = e.DEPTH32F_STENCIL8 : n === tw && (i = e.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : null === n || n === tC || n === tI ? i = e.DEPTH_COMPONENT24 : n === tU ? i = e.DEPTH_COMPONENT32F : n === tw && (i = e.DEPTH_COMPONENT16), i
                }

                function M(e, t) {
                    return !0 === g(e) || e.isFramebufferTexture && e.minFilter !== t_ && e.minFilter !== ty ? Math.log2(Math.max(t.width, t.height)) + 1 : void 0 !== e.mipmaps && e.mipmaps.length > 0 ? e.mipmaps.length : e.isCompressedTexture && Array.isArray(e.image) ? t.mipmaps.length : 1
                }

                function y(e) {
                    let t = e.target;
                    t.removeEventListener("dispose", y),
                        function(e) {
                            let t = i.get(e);
                            if (void 0 === t.__webglInit) return;
                            let n = e.source,
                                r = d.get(n);
                            if (r) {
                                let i = r[t.__cacheKey];
                                i.usedTimes--, 0 === i.usedTimes && S(e), 0 === Object.keys(r).length && d.delete(n)
                            }
                            i.remove(e)
                        }(t), t.isVideoTexture && u.delete(t)
                }

                function E(t) {
                    let n = t.target;
                    n.removeEventListener("dispose", E),
                        function(t) {
                            let n = i.get(t);
                            if (t.depthTexture && (t.depthTexture.dispose(), i.remove(t.depthTexture)), t.isWebGLCubeRenderTarget)
                                for (let t = 0; t < 6; t++) {
                                    if (Array.isArray(n.__webglFramebuffer[t]))
                                        for (let i = 0; i < n.__webglFramebuffer[t].length; i++) e.deleteFramebuffer(n.__webglFramebuffer[t][i]);
                                    else e.deleteFramebuffer(n.__webglFramebuffer[t]);
                                    n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer[t])
                                } else {
                                    if (Array.isArray(n.__webglFramebuffer))
                                        for (let t = 0; t < n.__webglFramebuffer.length; t++) e.deleteFramebuffer(n.__webglFramebuffer[t]);
                                    else e.deleteFramebuffer(n.__webglFramebuffer);
                                    if (n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer), n.__webglMultisampledFramebuffer && e.deleteFramebuffer(n.__webglMultisampledFramebuffer), n.__webglColorRenderbuffer)
                                        for (let t = 0; t < n.__webglColorRenderbuffer.length; t++) n.__webglColorRenderbuffer[t] && e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);
                                    n.__webglDepthRenderbuffer && e.deleteRenderbuffer(n.__webglDepthRenderbuffer)
                                }
                            let r = t.textures;
                            for (let t = 0, n = r.length; t < n; t++) {
                                let n = i.get(r[t]);
                                n.__webglTexture && (e.deleteTexture(n.__webglTexture), s.memory.textures--), i.remove(r[t])
                            }
                            i.remove(t)
                        }(n)
                }

                function S(t) {
                    let n = i.get(t);
                    e.deleteTexture(n.__webglTexture);
                    let r = t.source,
                        a = d.get(r);
                    delete a[n.__cacheKey], s.memory.textures--
                }
                let b = 0;

                function T(t, r) {
                    let a, o = i.get(t);
                    if (t.isVideoTexture && (a = s.render.frame, u.get(t) !== a && (u.set(t, a), t.update())), !1 === t.isRenderTargetTexture && t.version > 0 && o.__version !== t.version) {
                        let e = t.image;
                        if (null === e) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
                        else if (!1 === e.complete) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
                        else {
                            P(o, t, r);
                            return
                        }
                    }
                    n.bindTexture(e.TEXTURE_2D, o.__webglTexture, e.TEXTURE0 + r)
                }
                let A = {
                        [tm]: e.REPEAT,
                        [tg]: e.CLAMP_TO_EDGE,
                        [tv]: e.MIRRORED_REPEAT
                    },
                    w = {
                        [t_]: e.NEAREST,
                        [tx]: e.NEAREST_MIPMAP_NEAREST,
                        [tM]: e.NEAREST_MIPMAP_LINEAR,
                        [ty]: e.LINEAR,
                        [tE]: e.LINEAR_MIPMAP_NEAREST,
                        [tS]: e.LINEAR_MIPMAP_LINEAR
                    },
                    R = {
                        [nw]: e.NEVER,
                        [nI]: e.ALWAYS,
                        [nR]: e.LESS,
                        [nU]: e.LEQUAL,
                        [nC]: e.EQUAL,
                        [nD]: e.GEQUAL,
                        [nP]: e.GREATER,
                        [nL]: e.NOTEQUAL
                    };

                function C(n, a) {
                    if (a.type === tU && !1 === t.has("OES_texture_float_linear") && (a.magFilter === ty || a.magFilter === tE || a.magFilter === tM || a.magFilter === tS || a.minFilter === ty || a.minFilter === tE || a.minFilter === tM || a.minFilter === tS) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e.texParameteri(n, e.TEXTURE_WRAP_S, A[a.wrapS]), e.texParameteri(n, e.TEXTURE_WRAP_T, A[a.wrapT]), (n === e.TEXTURE_3D || n === e.TEXTURE_2D_ARRAY) && e.texParameteri(n, e.TEXTURE_WRAP_R, A[a.wrapR]), e.texParameteri(n, e.TEXTURE_MAG_FILTER, w[a.magFilter]), e.texParameteri(n, e.TEXTURE_MIN_FILTER, w[a.minFilter]), a.compareFunction && (e.texParameteri(n, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE), e.texParameteri(n, e.TEXTURE_COMPARE_FUNC, R[a.compareFunction])), !0 === t.has("EXT_texture_filter_anisotropic") && a.magFilter !== t_ && (a.minFilter === tM || a.minFilter === tS) && (a.type !== tU || !1 !== t.has("OES_texture_float_linear")) && (a.anisotropy > 1 || i.get(a).__currentAnisotropy)) {
                        let s = t.get("EXT_texture_filter_anisotropic");
                        e.texParameterf(n, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, r.getMaxAnisotropy())), i.get(a).__currentAnisotropy = a.anisotropy
                    }
                }

                function U(t, n) {
                    let i, r = !1;
                    void 0 === t.__webglInit && (t.__webglInit = !0, n.addEventListener("dispose", y));
                    let a = n.source,
                        o = d.get(a);
                    void 0 === o && (o = {}, d.set(a, o));
                    let l = ((i = []).push(n.wrapS), i.push(n.wrapT), i.push(n.wrapR || 0), i.push(n.magFilter), i.push(n.minFilter), i.push(n.anisotropy), i.push(n.internalFormat), i.push(n.format), i.push(n.type), i.push(n.generateMipmaps), i.push(n.premultiplyAlpha), i.push(n.flipY), i.push(n.unpackAlignment), i.push(n.colorSpace), i.join());
                    if (l !== t.__cacheKey) {
                        void 0 === o[l] && (o[l] = {
                            texture: e.createTexture(),
                            usedTimes: 0
                        }, s.memory.textures++, r = !0), o[l].usedTimes++;
                        let i = o[t.__cacheKey];
                        void 0 !== i && (o[t.__cacheKey].usedTimes--, 0 === i.usedTimes && S(n)), t.__cacheKey = l, t.__webglTexture = o[l].texture
                    }
                    return r
                }

                function P(t, s, o) {
                    let l = e.TEXTURE_2D;
                    (s.isDataArrayTexture || s.isCompressedArrayTexture) && (l = e.TEXTURE_2D_ARRAY), s.isData3DTexture && (l = e.TEXTURE_3D);
                    let h = U(t, s),
                        u = s.source;
                    n.bindTexture(l, t.__webglTexture, e.TEXTURE0 + o);
                    let c = i.get(u);
                    if (u.version !== c.__version || !0 === h) {
                        n.activeTexture(e.TEXTURE0 + o);
                        let t = iw.getPrimaries(iw.workingColorSpace),
                            i = s.colorSpace === nM ? null : iw.getPrimaries(s.colorSpace),
                            d = s.colorSpace === nM || t === i ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
                        e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, s.flipY), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, s.premultiplyAlpha), e.pixelStorei(e.UNPACK_ALIGNMENT, s.unpackAlignment), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, d);
                        let p = m(s.image, !1, r.maxTextureSize);
                        p = z(s, p);
                        let f = a.convert(s.format, s.colorSpace),
                            y = a.convert(s.type),
                            E = _(s.internalFormat, f, y, s.colorSpace, s.isVideoTexture);
                        C(l, s);
                        let S, b = s.mipmaps,
                            T = !0 !== s.isVideoTexture,
                            A = void 0 === c.__version || !0 === h,
                            w = u.dataReady,
                            R = M(s, p);
                        if (s.isDepthTexture) E = x(s.format === tk, s.type), A && (T ? n.texStorage2D(e.TEXTURE_2D, 1, E, p.width, p.height) : n.texImage2D(e.TEXTURE_2D, 0, E, p.width, p.height, 0, f, y, null));
                        else if (s.isDataTexture) {
                            if (b.length > 0) {
                                T && A && n.texStorage2D(e.TEXTURE_2D, R, E, b[0].width, b[0].height);
                                for (let t = 0, i = b.length; t < i; t++) S = b[t], T ? w && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, S.width, S.height, f, y, S.data) : n.texImage2D(e.TEXTURE_2D, t, E, S.width, S.height, 0, f, y, S.data);
                                s.generateMipmaps = !1
                            } else T ? (A && n.texStorage2D(e.TEXTURE_2D, R, E, p.width, p.height), w && n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, p.width, p.height, f, y, p.data)) : n.texImage2D(e.TEXTURE_2D, 0, E, p.width, p.height, 0, f, y, p.data)
                        } else if (s.isCompressedTexture) {
                            if (s.isCompressedArrayTexture) {
                                T && A && n.texStorage3D(e.TEXTURE_2D_ARRAY, R, E, b[0].width, b[0].height, p.depth);
                                for (let t = 0, i = b.length; t < i; t++)
                                    if (S = b[t], s.format !== tB) {
                                        if (null !== f) {
                                            if (T) {
                                                if (w) {
                                                    if (s.layerUpdates.size > 0) {
                                                        let i = oy(S.width, S.height, s.format, s.type);
                                                        for (let r of s.layerUpdates) {
                                                            let a = S.data.subarray(r * i / S.data.BYTES_PER_ELEMENT, (r + 1) * i / S.data.BYTES_PER_ELEMENT);
                                                            n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, t, 0, 0, r, S.width, S.height, 1, f, a)
                                                        }
                                                        s.clearLayerUpdates()
                                                    } else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, t, 0, 0, 0, S.width, S.height, p.depth, f, S.data)
                                                }
                                            } else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY, t, E, S.width, S.height, p.depth, 0, S.data, 0, 0)
                                        } else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()")
                                    } else T ? w && n.texSubImage3D(e.TEXTURE_2D_ARRAY, t, 0, 0, 0, S.width, S.height, p.depth, f, y, S.data) : n.texImage3D(e.TEXTURE_2D_ARRAY, t, E, S.width, S.height, p.depth, 0, f, y, S.data)
                            } else {
                                T && A && n.texStorage2D(e.TEXTURE_2D, R, E, b[0].width, b[0].height);
                                for (let t = 0, i = b.length; t < i; t++) S = b[t], s.format !== tB ? null !== f ? T ? w && n.compressedTexSubImage2D(e.TEXTURE_2D, t, 0, 0, S.width, S.height, f, S.data) : n.compressedTexImage2D(e.TEXTURE_2D, t, E, S.width, S.height, 0, S.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : T ? w && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, S.width, S.height, f, y, S.data) : n.texImage2D(e.TEXTURE_2D, t, E, S.width, S.height, 0, f, y, S.data)
                            }
                        } else if (s.isDataArrayTexture) {
                            if (T) {
                                if (A && n.texStorage3D(e.TEXTURE_2D_ARRAY, R, E, p.width, p.height, p.depth), w) {
                                    if (s.layerUpdates.size > 0) {
                                        let t = oy(p.width, p.height, s.format, s.type);
                                        for (let i of s.layerUpdates) {
                                            let r = p.data.subarray(i * t / p.data.BYTES_PER_ELEMENT, (i + 1) * t / p.data.BYTES_PER_ELEMENT);
                                            n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, i, p.width, p.height, 1, f, y, r)
                                        }
                                        s.clearLayerUpdates()
                                    } else n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, 0, p.width, p.height, p.depth, f, y, p.data)
                                }
                            } else n.texImage3D(e.TEXTURE_2D_ARRAY, 0, E, p.width, p.height, p.depth, 0, f, y, p.data)
                        } else if (s.isData3DTexture) T ? (A && n.texStorage3D(e.TEXTURE_3D, R, E, p.width, p.height, p.depth), w && n.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, p.width, p.height, p.depth, f, y, p.data)) : n.texImage3D(e.TEXTURE_3D, 0, E, p.width, p.height, p.depth, 0, f, y, p.data);
                        else if (s.isFramebufferTexture) {
                            if (A) {
                                if (T) n.texStorage2D(e.TEXTURE_2D, R, E, p.width, p.height);
                                else {
                                    let t = p.width,
                                        i = p.height;
                                    for (let r = 0; r < R; r++) n.texImage2D(e.TEXTURE_2D, r, E, t, i, 0, f, y, null), t >>= 1, i >>= 1
                                }
                            }
                        } else if (b.length > 0) {
                            if (T && A) {
                                let t = G(b[0]);
                                n.texStorage2D(e.TEXTURE_2D, R, E, t.width, t.height)
                            }
                            for (let t = 0, i = b.length; t < i; t++) S = b[t], T ? w && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, f, y, S) : n.texImage2D(e.TEXTURE_2D, t, E, f, y, S);
                            s.generateMipmaps = !1
                        } else if (T) {
                            if (A) {
                                let t = G(p);
                                n.texStorage2D(e.TEXTURE_2D, R, E, t.width, t.height)
                            }
                            w && n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, f, y, p)
                        } else n.texImage2D(e.TEXTURE_2D, 0, E, f, y, p);
                        g(s) && v(l), c.__version = u.version, s.onUpdate && s.onUpdate(s)
                    }
                    t.__version = s.version
                }

                function L(t, r, s, l, h, u) {
                    let c = a.convert(s.format, s.colorSpace),
                        d = a.convert(s.type),
                        p = _(s.internalFormat, c, d, s.colorSpace),
                        f = i.get(r),
                        m = i.get(s);
                    if (m.__renderTarget = r, !f.__hasExternalTextures) {
                        let t = Math.max(1, r.width >> u),
                            i = Math.max(1, r.height >> u);
                        h === e.TEXTURE_3D || h === e.TEXTURE_2D_ARRAY ? n.texImage3D(h, u, p, t, i, r.depth, 0, c, d, null) : n.texImage2D(h, u, p, t, i, 0, c, d, null)
                    }
                    n.bindFramebuffer(e.FRAMEBUFFER, t), B(r) ? o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, l, h, m.__webglTexture, 0, F(r)) : (h === e.TEXTURE_2D || h >= e.TEXTURE_CUBE_MAP_POSITIVE_X && h <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e.framebufferTexture2D(e.FRAMEBUFFER, l, h, m.__webglTexture, u), n.bindFramebuffer(e.FRAMEBUFFER, null)
                }

                function D(t, n, i) {
                    if (e.bindRenderbuffer(e.RENDERBUFFER, t), n.depthBuffer) {
                        let r = n.depthTexture,
                            a = r && r.isDepthTexture ? r.type : null,
                            s = x(n.stencilBuffer, a),
                            l = n.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT,
                            h = F(n);
                        B(n) ? o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, h, s, n.width, n.height) : i ? e.renderbufferStorageMultisample(e.RENDERBUFFER, h, s, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, s, n.width, n.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, l, e.RENDERBUFFER, t)
                    } else {
                        let t = n.textures;
                        for (let r = 0; r < t.length; r++) {
                            let s = t[r],
                                l = a.convert(s.format, s.colorSpace),
                                h = a.convert(s.type),
                                u = _(s.internalFormat, l, h, s.colorSpace),
                                c = F(n);
                            i && !1 === B(n) ? e.renderbufferStorageMultisample(e.RENDERBUFFER, c, u, n.width, n.height) : B(n) ? o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, c, u, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, u, n.width, n.height)
                        }
                    }
                    e.bindRenderbuffer(e.RENDERBUFFER, null)
                }

                function I(t) {
                    let r = i.get(t),
                        a = !0 === t.isWebGLCubeRenderTarget;
                    if (r.__boundDepthTexture !== t.depthTexture) {
                        let e = t.depthTexture;
                        if (r.__depthDisposeCallback && r.__depthDisposeCallback(), e) {
                            let t = () => {
                                delete r.__boundDepthTexture, delete r.__depthDisposeCallback, e.removeEventListener("dispose", t)
                            };
                            e.addEventListener("dispose", t), r.__depthDisposeCallback = t
                        }
                        r.__boundDepthTexture = e
                    }
                    if (t.depthTexture && !r.__autoAllocateDepthBuffer) {
                        if (a) throw Error("target.depthTexture not supported in Cube render targets");
                        ! function(t, r) {
                            if (r && r.isWebGLCubeRenderTarget) throw Error("Depth Texture with cube render targets is not supported");
                            if (n.bindFramebuffer(e.FRAMEBUFFER, t), !(r.depthTexture && r.depthTexture.isDepthTexture)) throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                            let a = i.get(r.depthTexture);
                            a.__renderTarget = r, a.__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width, r.depthTexture.image.height = r.height, r.depthTexture.needsUpdate = !0), T(r.depthTexture, 0);
                            let s = a.__webglTexture,
                                l = F(r);
                            if (r.depthTexture.format === tH) B(r) ? o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, s, 0, l) : e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, s, 0);
                            else if (r.depthTexture.format === tk) B(r) ? o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.TEXTURE_2D, s, 0, l) : e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.TEXTURE_2D, s, 0);
                            else throw Error("Unknown depthTexture format")
                        }(r.__webglFramebuffer, t)
                    } else if (a) {
                        r.__webglDepthbuffer = [];
                        for (let i = 0; i < 6; i++)
                            if (n.bindFramebuffer(e.FRAMEBUFFER, r.__webglFramebuffer[i]), void 0 === r.__webglDepthbuffer[i]) r.__webglDepthbuffer[i] = e.createRenderbuffer(), D(r.__webglDepthbuffer[i], t, !1);
                            else {
                                let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT,
                                    a = r.__webglDepthbuffer[i];
                                e.bindRenderbuffer(e.RENDERBUFFER, a), e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, a)
                            }
                    } else if (n.bindFramebuffer(e.FRAMEBUFFER, r.__webglFramebuffer), void 0 === r.__webglDepthbuffer) r.__webglDepthbuffer = e.createRenderbuffer(), D(r.__webglDepthbuffer, t, !1);
                    else {
                        let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT,
                            i = r.__webglDepthbuffer;
                        e.bindRenderbuffer(e.RENDERBUFFER, i), e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, i)
                    }
                    n.bindFramebuffer(e.FRAMEBUFFER, null)
                }
                let N = [],
                    O = [];

                function F(e) {
                    return Math.min(r.maxSamples, e.samples)
                }

                function B(e) {
                    let n = i.get(e);
                    return e.samples > 0 && !0 === t.has("WEBGL_multisampled_render_to_texture") && !1 !== n.__useRenderToTexture
                }

                function z(e, t) {
                    let n = e.colorSpace,
                        i = e.format,
                        r = e.type;
                    return !0 === e.isCompressedTexture || !0 === e.isVideoTexture || n !== nE && n !== nM && (iw.getTransfer(n) === nb ? (i !== tB || r !== tb) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", n)), t
                }

                function G(e) {
                    return "u" > typeof HTMLImageElement && e instanceof HTMLImageElement ? (h.width = e.naturalWidth || e.width, h.height = e.naturalHeight || e.height) : "u" > typeof VideoFrame && e instanceof VideoFrame ? (h.width = e.displayWidth, h.height = e.displayHeight) : (h.width = e.width, h.height = e.height), h
                }
                this.allocateTextureUnit = function() {
                    let e = b;
                    return e >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + e + " texture units while this GPU supports only " + r.maxTextures), b += 1, e
                }, this.resetTextureUnits = function() {
                    b = 0
                }, this.setTexture2D = T, this.setTexture2DArray = function(t, r) {
                    let a = i.get(t);
                    if (t.version > 0 && a.__version !== t.version) {
                        P(a, t, r);
                        return
                    }
                    n.bindTexture(e.TEXTURE_2D_ARRAY, a.__webglTexture, e.TEXTURE0 + r)
                }, this.setTexture3D = function(t, r) {
                    let a = i.get(t);
                    if (t.version > 0 && a.__version !== t.version) {
                        P(a, t, r);
                        return
                    }
                    n.bindTexture(e.TEXTURE_3D, a.__webglTexture, e.TEXTURE0 + r)
                }, this.setTextureCube = function(t, s) {
                    let o = i.get(t);
                    if (t.version > 0 && o.__version !== t.version) {
                        (function(t, s, o) {
                            if (6 !== s.image.length) return;
                            let l = U(t, s),
                                h = s.source;
                            n.bindTexture(e.TEXTURE_CUBE_MAP, t.__webglTexture, e.TEXTURE0 + o);
                            let u = i.get(h);
                            if (h.version !== u.__version || !0 === l) {
                                let t;
                                n.activeTexture(e.TEXTURE0 + o);
                                let i = iw.getPrimaries(iw.workingColorSpace),
                                    c = s.colorSpace === nM ? null : iw.getPrimaries(s.colorSpace),
                                    d = s.colorSpace === nM || i === c ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
                                e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, s.flipY), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, s.premultiplyAlpha), e.pixelStorei(e.UNPACK_ALIGNMENT, s.unpackAlignment), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, d);
                                let p = s.isCompressedTexture || s.image[0].isCompressedTexture,
                                    f = s.image[0] && s.image[0].isDataTexture,
                                    x = [];
                                for (let e = 0; e < 6; e++) p || f ? x[e] = f ? s.image[e].image : s.image[e] : x[e] = m(s.image[e], !0, r.maxCubemapSize), x[e] = z(s, x[e]);
                                let y = x[0],
                                    E = a.convert(s.format, s.colorSpace),
                                    S = a.convert(s.type),
                                    b = _(s.internalFormat, E, S, s.colorSpace),
                                    T = !0 !== s.isVideoTexture,
                                    A = void 0 === u.__version || !0 === l,
                                    w = h.dataReady,
                                    R = M(s, y);
                                if (C(e.TEXTURE_CUBE_MAP, s), p) {
                                    T && A && n.texStorage2D(e.TEXTURE_CUBE_MAP, R, b, y.width, y.height);
                                    for (let i = 0; i < 6; i++) {
                                        t = x[i].mipmaps;
                                        for (let r = 0; r < t.length; r++) {
                                            let a = t[r];
                                            s.format !== tB ? null !== E ? T ? w && n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + i, r, 0, 0, a.width, a.height, E, a.data) : n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + i, r, b, a.width, a.height, 0, a.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : T ? w && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + i, r, 0, 0, a.width, a.height, E, S, a.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + i, r, b, a.width, a.height, 0, E, S, a.data)
                                        }
                                    }
                                } else {
                                    if (t = s.mipmaps, T && A) {
                                        t.length > 0 && R++;
                                        let i = G(x[0]);
                                        n.texStorage2D(e.TEXTURE_CUBE_MAP, R, b, i.width, i.height)
                                    }
                                    for (let i = 0; i < 6; i++)
                                        if (f) {
                                            T ? w && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, 0, 0, x[i].width, x[i].height, E, S, x[i].data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, b, x[i].width, x[i].height, 0, E, S, x[i].data);
                                            for (let r = 0; r < t.length; r++) {
                                                let a = t[r].image[i].image;
                                                T ? w && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + i, r + 1, 0, 0, a.width, a.height, E, S, a.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + i, r + 1, b, a.width, a.height, 0, E, S, a.data)
                                            }
                                        } else {
                                            T ? w && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, 0, 0, E, S, x[i]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, b, E, S, x[i]);
                                            for (let r = 0; r < t.length; r++) {
                                                let a = t[r];
                                                T ? w && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + i, r + 1, 0, 0, E, S, a.image[i]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + i, r + 1, b, E, S, a.image[i])
                                            }
                                        }
                                }
                                g(s) && v(e.TEXTURE_CUBE_MAP), u.__version = h.version, s.onUpdate && s.onUpdate(s)
                            }
                            t.__version = s.version
                        })(o, t, s);
                        return
                    }
                    n.bindTexture(e.TEXTURE_CUBE_MAP, o.__webglTexture, e.TEXTURE0 + s)
                }, this.rebindTextures = function(t, n, r) {
                    let a = i.get(t);
                    void 0 !== n && L(a.__webglFramebuffer, t, t.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, 0), void 0 !== r && I(t)
                }, this.setupRenderTarget = function(t) {
                    let r = t.texture,
                        o = i.get(t),
                        l = i.get(r);
                    t.addEventListener("dispose", E);
                    let h = t.textures,
                        u = !0 === t.isWebGLCubeRenderTarget,
                        c = h.length > 1;
                    if (c || (void 0 === l.__webglTexture && (l.__webglTexture = e.createTexture()), l.__version = r.version, s.memory.textures++), u) {
                        o.__webglFramebuffer = [];
                        for (let t = 0; t < 6; t++)
                            if (r.mipmaps && r.mipmaps.length > 0) {
                                o.__webglFramebuffer[t] = [];
                                for (let n = 0; n < r.mipmaps.length; n++) o.__webglFramebuffer[t][n] = e.createFramebuffer()
                            } else o.__webglFramebuffer[t] = e.createFramebuffer()
                    } else {
                        if (r.mipmaps && r.mipmaps.length > 0) {
                            o.__webglFramebuffer = [];
                            for (let t = 0; t < r.mipmaps.length; t++) o.__webglFramebuffer[t] = e.createFramebuffer()
                        } else o.__webglFramebuffer = e.createFramebuffer();
                        if (c)
                            for (let t = 0, n = h.length; t < n; t++) {
                                let n = i.get(h[t]);
                                void 0 === n.__webglTexture && (n.__webglTexture = e.createTexture(), s.memory.textures++)
                            }
                        if (t.samples > 0 && !1 === B(t)) {
                            o.__webglMultisampledFramebuffer = e.createFramebuffer(), o.__webglColorRenderbuffer = [], n.bindFramebuffer(e.FRAMEBUFFER, o.__webglMultisampledFramebuffer);
                            for (let n = 0; n < h.length; n++) {
                                let i = h[n];
                                o.__webglColorRenderbuffer[n] = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, o.__webglColorRenderbuffer[n]);
                                let r = a.convert(i.format, i.colorSpace),
                                    s = a.convert(i.type),
                                    l = _(i.internalFormat, r, s, i.colorSpace, !0 === t.isXRRenderTarget),
                                    u = F(t);
                                e.renderbufferStorageMultisample(e.RENDERBUFFER, u, l, t.width, t.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + n, e.RENDERBUFFER, o.__webglColorRenderbuffer[n])
                            }
                            e.bindRenderbuffer(e.RENDERBUFFER, null), t.depthBuffer && (o.__webglDepthRenderbuffer = e.createRenderbuffer(), D(o.__webglDepthRenderbuffer, t, !0)), n.bindFramebuffer(e.FRAMEBUFFER, null)
                        }
                    }
                    if (u) {
                        n.bindTexture(e.TEXTURE_CUBE_MAP, l.__webglTexture), C(e.TEXTURE_CUBE_MAP, r);
                        for (let n = 0; n < 6; n++)
                            if (r.mipmaps && r.mipmaps.length > 0)
                                for (let i = 0; i < r.mipmaps.length; i++) L(o.__webglFramebuffer[n][i], t, r, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, i);
                            else L(o.__webglFramebuffer[n], t, r, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0);
                        g(r) && v(e.TEXTURE_CUBE_MAP), n.unbindTexture()
                    } else if (c) {
                        for (let r = 0, a = h.length; r < a; r++) {
                            let a = h[r],
                                s = i.get(a);
                            n.bindTexture(e.TEXTURE_2D, s.__webglTexture), C(e.TEXTURE_2D, a), L(o.__webglFramebuffer, t, a, e.COLOR_ATTACHMENT0 + r, e.TEXTURE_2D, 0), g(a) && v(e.TEXTURE_2D)
                        }
                        n.unbindTexture()
                    } else {
                        let i = e.TEXTURE_2D;
                        if ((t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (i = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(i, l.__webglTexture), C(i, r), r.mipmaps && r.mipmaps.length > 0)
                            for (let n = 0; n < r.mipmaps.length; n++) L(o.__webglFramebuffer[n], t, r, e.COLOR_ATTACHMENT0, i, n);
                        else L(o.__webglFramebuffer, t, r, e.COLOR_ATTACHMENT0, i, 0);
                        g(r) && v(i), n.unbindTexture()
                    }
                    t.depthBuffer && I(t)
                }, this.updateRenderTargetMipmap = function(t) {
                    let r = t.textures;
                    for (let a = 0, s = r.length; a < s; a++) {
                        let s = r[a];
                        if (g(s)) {
                            let r = t.isWebGLCubeRenderTarget ? e.TEXTURE_CUBE_MAP : t.isWebGL3DRenderTarget ? e.TEXTURE_3D : t.isWebGLArrayRenderTarget || t.isCompressedArrayTexture ? e.TEXTURE_2D_ARRAY : e.TEXTURE_2D,
                                a = i.get(s).__webglTexture;
                            n.bindTexture(r, a), v(r), n.unbindTexture()
                        }
                    }
                }, this.updateMultisampleRenderTarget = function(t) {
                    if (t.samples > 0) {
                        if (!1 === B(t)) {
                            let r = t.textures,
                                a = t.width,
                                s = t.height,
                                o = e.COLOR_BUFFER_BIT,
                                h = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT,
                                u = i.get(t),
                                c = r.length > 1;
                            if (c)
                                for (let t = 0; t < r.length; t++) n.bindFramebuffer(e.FRAMEBUFFER, u.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, null), n.bindFramebuffer(e.FRAMEBUFFER, u.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, null, 0);
                            n.bindFramebuffer(e.READ_FRAMEBUFFER, u.__webglMultisampledFramebuffer), n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglFramebuffer);
                            for (let n = 0; n < r.length; n++) {
                                if (t.resolveDepthBuffer && (t.depthBuffer && (o |= e.DEPTH_BUFFER_BIT), t.stencilBuffer && t.resolveStencilBuffer && (o |= e.STENCIL_BUFFER_BIT)), c) {
                                    e.framebufferRenderbuffer(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, u.__webglColorRenderbuffer[n]);
                                    let t = i.get(r[n]).__webglTexture;
                                    e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0)
                                }
                                e.blitFramebuffer(0, 0, a, s, 0, 0, a, s, o, e.NEAREST), !0 === l && (N.length = 0, O.length = 0, N.push(e.COLOR_ATTACHMENT0 + n), t.depthBuffer && !1 === t.resolveDepthBuffer && (N.push(h), O.push(h), e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, O)), e.invalidateFramebuffer(e.READ_FRAMEBUFFER, N))
                            }
                            if (n.bindFramebuffer(e.READ_FRAMEBUFFER, null), n.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), c)
                                for (let t = 0; t < r.length; t++) {
                                    n.bindFramebuffer(e.FRAMEBUFFER, u.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, u.__webglColorRenderbuffer[t]);
                                    let a = i.get(r[t]).__webglTexture;
                                    n.bindFramebuffer(e.FRAMEBUFFER, u.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, a, 0)
                                }
                            n.bindFramebuffer(e.DRAW_FRAMEBUFFER, u.__webglMultisampledFramebuffer)
                        } else if (t.depthBuffer && !1 === t.resolveDepthBuffer && l) {
                            let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
                            e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [n])
                        }
                    }
                }, this.setupDepthRenderbuffer = I, this.setupFrameBufferTexture = L, this.useMultisampledRTT = B
            }
            var fl = h(() => {
                nX(), iE(), iU(), ig(), oE()
            });

            function fh(e, t) {
                return {
                    convert: function(n) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nM,
                            r, a = iw.getTransfer(i);
                        if (n === tb) return e.UNSIGNED_BYTE;
                        if (n === tL) return e.UNSIGNED_SHORT_4_4_4_4;
                        if (n === tD) return e.UNSIGNED_SHORT_5_5_5_1;
                        if (n === tN) return e.UNSIGNED_INT_5_9_9_9_REV;
                        if (n === tT) return e.BYTE;
                        if (n === tA) return e.SHORT;
                        if (n === tw) return e.UNSIGNED_SHORT;
                        if (n === tR) return e.INT;
                        if (n === tC) return e.UNSIGNED_INT;
                        if (n === tU) return e.FLOAT;
                        if (n === tP) return e.HALF_FLOAT;
                        if (n === tO) return e.ALPHA;
                        if (n === tF) return e.RGB;
                        if (n === tB) return e.RGBA;
                        if (n === tz) return e.LUMINANCE;
                        if (n === tG) return e.LUMINANCE_ALPHA;
                        if (n === tH) return e.DEPTH_COMPONENT;
                        if (n === tk) return e.DEPTH_STENCIL;
                        if (n === tV) return e.RED;
                        if (n === tW) return e.RED_INTEGER;
                        if (n === tX) return e.RG;
                        if (n === tj) return e.RG_INTEGER;
                        if (n === tY) return e.RGBA_INTEGER;
                        if (n === tq || n === tK || n === tZ || n === tJ) {
                            if (a === nb) {
                                if (null === (r = t.get("WEBGL_compressed_texture_s3tc_srgb"))) return null;
                                if (n === tq) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                                if (n === tK) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                                if (n === tZ) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                                if (n === tJ) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
                            } else {
                                if (null === (r = t.get("WEBGL_compressed_texture_s3tc"))) return null;
                                if (n === tq) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
                                if (n === tK) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                                if (n === tZ) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                                if (n === tJ) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT
                            }
                        }
                        if (n === tQ || n === t$ || n === t0 || n === t1) {
                            if (null === (r = t.get("WEBGL_compressed_texture_pvrtc"))) return null;
                            if (n === tQ) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                            if (n === t$) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                            if (n === t0) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                            if (n === t1) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                        }
                        if (n === t2 || n === t3 || n === t4) {
                            if (null === (r = t.get("WEBGL_compressed_texture_etc"))) return null;
                            if (n === t2 || n === t3) return a === nb ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
                            if (n === t4) return a === nb ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC
                        }
                        if (n === t5 || n === t6 || n === t8 || n === t9 || n === t7 || n === ne || n === nt || n === nn || n === ni || n === nr || n === na || n === ns || n === no || n === nl) {
                            if (null === (r = t.get("WEBGL_compressed_texture_astc"))) return null;
                            if (n === t5) return a === nb ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
                            if (n === t6) return a === nb ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
                            if (n === t8) return a === nb ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
                            if (n === t9) return a === nb ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
                            if (n === t7) return a === nb ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
                            if (n === ne) return a === nb ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
                            if (n === nt) return a === nb ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
                            if (n === nn) return a === nb ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
                            if (n === ni) return a === nb ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
                            if (n === nr) return a === nb ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
                            if (n === na) return a === nb ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
                            if (n === ns) return a === nb ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
                            if (n === no) return a === nb ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
                            if (n === nl) return a === nb ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR
                        }
                        if (n === nh || n === nu || n === nc) {
                            if (null === (r = t.get("EXT_texture_compression_bptc"))) return null;
                            if (n === nh) return a === nb ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
                            if (n === nu) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
                            if (n === nc) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT
                        }
                        if (n === nd || n === np || n === nf || n === nm) {
                            if (null === (r = t.get("EXT_texture_compression_rgtc"))) return null;
                            if (n === nh) return r.COMPRESSED_RED_RGTC1_EXT;
                            if (n === np) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
                            if (n === nf) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
                            if (n === nm) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
                        }
                        return n === tI ? e.UNSIGNED_INT_24_8 : void 0 !== e[n] ? e[n] : null
                    }
                }
            }
            var fu, fc, fd, fp, ff = h(() => {
                    nX(), iU()
                }),
                fm = h(() => {
                    sj(), sM(), aY(), iY(), fu = "\nvoid main() {\n\n	gl_Position = vec4( position, 1.0 );\n\n}", fc = "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n	if ( coord.x >= 1.0 ) {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n	} else {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n	}\n\n}", fd = class {
                        init(e, t, n) {
                            if (null === this.texture) {
                                let i = new iO;
                                e.properties.get(i).__webglTexture = t.texture, (t.depthNear !== n.depthNear || t.depthFar !== n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i
                            }
                        }
                        getMesh(e) {
                            if (null !== this.texture && null === this.mesh) {
                                let t = e.cameras[0].viewport,
                                    n = new a1({
                                        vertexShader: fu,
                                        fragmentShader: fc,
                                        uniforms: {
                                            depthColor: {
                                                value: this.texture
                                            },
                                            depthWidth: {
                                                value: t.z
                                            },
                                            depthHeight: {
                                                value: t.w
                                            }
                                        }
                                    });
                                this.mesh = new aX(new sg(20, 20), n)
                            }
                            return this.mesh
                        }
                        reset() {
                            this.texture = null, this.mesh = null
                        }
                        getDepthTexture() {
                            return this.texture
                        }
                        constructor() {
                            this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0
                        }
                    }
                }),
                fg = h(() => {
                    o_(), nj(), sE(), ig(), i0(), iq(), im(), oA(), iZ(), sw(), sD(), nX(), fm(), fp = class extends nz {
                        constructor(e, t) {
                            super();
                            let n = this,
                                i = null,
                                r = 1,
                                a = null,
                                s = "local-floor",
                                o = 1,
                                l = null,
                                h = null,
                                u = null,
                                c = null,
                                d = null,
                                p = null,
                                f = new fd,
                                m = t.getContextAttributes(),
                                g = null,
                                v = null,
                                _ = [],
                                x = [],
                                M = new ic,
                                y = null,
                                E = new a6;
                            E.viewport = new iF;
                            let S = new a6;
                            S.viewport = new iF;
                            let b = [E, S],
                                T = new ot,
                                A = null,
                                w = null;

                            function R(e) {
                                let t = x.indexOf(e.inputSource);
                                if (-1 === t) return;
                                let n = _[t];
                                void 0 !== n && (n.update(e.inputSource, e.frame, l || a), n.dispatchEvent({
                                    type: e.type,
                                    data: e.inputSource
                                }))
                            }

                            function C() {
                                i.removeEventListener("select", R), i.removeEventListener("selectstart", R), i.removeEventListener("selectend", R), i.removeEventListener("squeeze", R), i.removeEventListener("squeezestart", R), i.removeEventListener("squeezeend", R), i.removeEventListener("end", C), i.removeEventListener("inputsourceschange", U);
                                for (let e = 0; e < _.length; e++) {
                                    let t = x[e];
                                    null !== t && (x[e] = null, _[e].disconnect(t))
                                }
                                A = null, w = null, f.reset(), e.setRenderTarget(g), d = null, c = null, u = null, i = null, v = null, N.stop(), n.isPresenting = !1, e.setPixelRatio(y), e.setSize(M.width, M.height, !1), n.dispatchEvent({
                                    type: "sessionend"
                                })
                            }

                            function U(e) {
                                for (let t = 0; t < e.removed.length; t++) {
                                    let n = e.removed[t],
                                        i = x.indexOf(n);
                                    i >= 0 && (x[i] = null, _[i].disconnect(n))
                                }
                                for (let t = 0; t < e.added.length; t++) {
                                    let n = e.added[t],
                                        i = x.indexOf(n);
                                    if (-1 === i) {
                                        for (let e = 0; e < _.length; e++)
                                            if (e >= x.length) {
                                                x.push(n), i = e;
                                                break
                                            } else if (null === x[e]) {
                                            x[e] = n, i = e;
                                            break
                                        }
                                        if (-1 === i) break
                                    }
                                    let r = _[i];
                                    r && r.connect(n)
                                }
                            }
                            this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(e) {
                                let t = _[e];
                                return void 0 === t && (t = new sn, _[e] = t), t.getTargetRaySpace()
                            }, this.getControllerGrip = function(e) {
                                let t = _[e];
                                return void 0 === t && (t = new sn, _[e] = t), t.getGripSpace()
                            }, this.getHand = function(e) {
                                let t = _[e];
                                return void 0 === t && (t = new sn, _[e] = t), t.getHandSpace()
                            }, this.setFramebufferScaleFactor = function(e) {
                                r = e, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
                            }, this.setReferenceSpaceType = function(e) {
                                s = e, !0 === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
                            }, this.getReferenceSpace = function() {
                                return l || a
                            }, this.setReferenceSpace = function(e) {
                                l = e
                            }, this.getBaseLayer = function() {
                                return null !== c ? c : d
                            }, this.getBinding = function() {
                                return u
                            }, this.getFrame = function() {
                                return p
                            }, this.getSession = function() {
                                return i
                            }, this.setSession = async function(h) {
                                if (null !== (i = h)) {
                                    if (g = e.getRenderTarget(), i.addEventListener("select", R), i.addEventListener("selectstart", R), i.addEventListener("selectend", R), i.addEventListener("squeeze", R), i.addEventListener("squeezestart", R), i.addEventListener("squeezeend", R), i.addEventListener("end", C), i.addEventListener("inputsourceschange", U), !0 !== m.xrCompatible && await t.makeXRCompatible(), y = e.getPixelRatio(), e.getSize(M), "u" > typeof XRWebGLBinding && "createProjectionLayer" in XRWebGLBinding.prototype) {
                                        let n = null,
                                            a = null,
                                            s = null;
                                        m.depth && (s = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, n = m.stencil ? tk : tH, a = m.stencil ? tI : tC);
                                        let o = {
                                            colorFormat: t.RGBA8,
                                            depthFormat: s,
                                            scaleFactor: r
                                        };
                                        c = (u = new XRWebGLBinding(i, t)).createProjectionLayer(o), i.updateRenderState({
                                            layers: [c]
                                        }), e.setPixelRatio(1), e.setSize(c.textureWidth, c.textureHeight, !1), v = new iz(c.textureWidth, c.textureHeight, {
                                            format: tB,
                                            type: tb,
                                            depthTexture: new sf(c.textureWidth, c.textureHeight, a, void 0, void 0, void 0, void 0, void 0, void 0, n),
                                            stencilBuffer: m.stencil,
                                            colorSpace: e.outputColorSpace,
                                            samples: m.antialias ? 4 : 0,
                                            resolveDepthBuffer: !1 === c.ignoreDepthValues
                                        })
                                    } else {
                                        let n = {
                                            antialias: m.antialias,
                                            alpha: !0,
                                            depth: m.depth,
                                            stencil: m.stencil,
                                            framebufferScaleFactor: r
                                        };
                                        d = new XRWebGLLayer(i, t, n), i.updateRenderState({
                                            baseLayer: d
                                        }), e.setPixelRatio(1), e.setSize(d.framebufferWidth, d.framebufferHeight, !1), v = new iz(d.framebufferWidth, d.framebufferHeight, {
                                            format: tB,
                                            type: tb,
                                            colorSpace: e.outputColorSpace,
                                            stencilBuffer: m.stencil
                                        })
                                    }
                                    v.isXRRenderTarget = !0, this.setFoveation(o), l = null, a = await i.requestReferenceSpace(s), N.setContext(i), N.start(), n.isPresenting = !0, n.dispatchEvent({
                                        type: "sessionstart"
                                    })
                                }
                            }, this.getEnvironmentBlendMode = function() {
                                if (null !== i) return i.environmentBlendMode
                            }, this.getDepthTexture = function() {
                                return f.getDepthTexture()
                            };
                            let P = new iV,
                                L = new iV;

                            function D(e, t) {
                                null === t ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.copy(e.matrixWorld).invert()
                            }
                            this.updateCamera = function(e) {
                                if (null === i) return;
                                let t = e.near,
                                    n = e.far;
                                null !== f.texture && (f.depthNear > 0 && (t = f.depthNear), f.depthFar > 0 && (n = f.depthFar)), T.near = S.near = E.near = t, T.far = S.far = E.far = n, (A !== T.near || w !== T.far) && (i.updateRenderState({
                                    depthNear: T.near,
                                    depthFar: T.far
                                }), A = T.near, w = T.far), E.layers.mask = 2 | e.layers.mask, S.layers.mask = 4 | e.layers.mask, T.layers.mask = E.layers.mask | S.layers.mask;
                                let r = e.parent,
                                    a = T.cameras;
                                D(T, r);
                                for (let e = 0; e < a.length; e++) D(a[e], r);
                                2 === a.length ? function(e, t, n) {
                                    P.setFromMatrixPosition(t.matrixWorld), L.setFromMatrixPosition(n.matrixWorld);
                                    let i = P.distanceTo(L),
                                        r = t.projectionMatrix.elements,
                                        a = n.projectionMatrix.elements,
                                        s = r[14] / (r[10] - 1),
                                        o = r[14] / (r[10] + 1),
                                        l = (r[9] + 1) / r[5],
                                        h = (r[9] - 1) / r[5],
                                        u = (r[8] - 1) / r[0],
                                        c = (a[8] + 1) / a[0],
                                        d = i / (-u + c),
                                        p = -(d * u);
                                    if (t.matrixWorld.decompose(e.position, e.quaternion, e.scale), e.translateX(p), e.translateZ(d), e.matrixWorld.compose(e.position, e.quaternion, e.scale), e.matrixWorldInverse.copy(e.matrixWorld).invert(), -1 === r[10]) e.projectionMatrix.copy(t.projectionMatrix), e.projectionMatrixInverse.copy(t.projectionMatrixInverse);
                                    else {
                                        let t = s + d,
                                            n = o + d;
                                        e.projectionMatrix.makePerspective(s * u - p, s * c + (i - p), l * o / n * t, h * o / n * t, t, n), e.projectionMatrixInverse.copy(e.projectionMatrix).invert()
                                    }
                                }(T, E, S) : T.projectionMatrix.copy(E.projectionMatrix), null === r ? e.matrix.copy(T.matrixWorld) : (e.matrix.copy(r.matrixWorld), e.matrix.invert(), e.matrix.multiply(T.matrixWorld)), e.matrix.decompose(e.position, e.quaternion, e.scale), e.updateMatrixWorld(!0), e.projectionMatrix.copy(T.projectionMatrix), e.projectionMatrixInverse.copy(T.projectionMatrixInverse), e.isPerspectiveCamera && (e.fov = 2 * ih * Math.atan(1 / e.projectionMatrix.elements[5]), e.zoom = 1)
                            }, this.getCamera = function() {
                                return T
                            }, this.getFoveation = function() {
                                if (!(null === c && null === d)) return o
                            }, this.setFoveation = function(e) {
                                o = e, null !== c && (c.fixedFoveation = e), null !== d && void 0 !== d.fixedFoveation && (d.fixedFoveation = e)
                            }, this.hasDepthSensing = function() {
                                return null !== f.texture
                            }, this.getDepthSensingMesh = function() {
                                return f.getMesh(T)
                            };
                            let I = null,
                                N = new oT;
                            N.setAnimationLoop(function(t, r) {
                                if (h = r.getViewerPose(l || a), p = r, null !== h) {
                                    let t = h.views;
                                    null !== d && (e.setRenderTargetFramebuffer(v, d.framebuffer), e.setRenderTarget(v));
                                    let n = !1;
                                    t.length !== T.cameras.length && (T.cameras.length = 0, n = !0);
                                    for (let i = 0; i < t.length; i++) {
                                        let r = t[i],
                                            a = null;
                                        if (null !== d) a = d.getViewport(r);
                                        else {
                                            let t = u.getViewSubImage(c, r);
                                            a = t.viewport, 0 === i && (e.setRenderTargetTextures(v, t.colorTexture, c.ignoreDepthValues ? void 0 : t.depthStencilTexture), e.setRenderTarget(v))
                                        }
                                        let s = b[i];
                                        void 0 === s && ((s = new a6).layers.enable(i), s.viewport = new iF, b[i] = s), s.matrix.fromArray(r.transform.matrix), s.matrix.decompose(s.position, s.quaternion, s.scale), s.projectionMatrix.fromArray(r.projectionMatrix), s.projectionMatrixInverse.copy(s.projectionMatrix).invert(), s.viewport.set(a.x, a.y, a.width, a.height), 0 === i && (T.matrix.copy(s.matrix), T.matrix.decompose(T.position, T.quaternion, T.scale)), !0 === n && T.cameras.push(s)
                                    }
                                    let r = i.enabledFeatures;
                                    if (r && r.includes("depth-sensing") && "gpu-optimized" == i.depthUsage && u) {
                                        let n = u.getDepthInformation(t[0]);
                                        n && n.isValid && n.texture && f.init(e, n, i.renderState)
                                    }
                                }
                                for (let e = 0; e < _.length; e++) {
                                    let t = x[e],
                                        n = _[e];
                                    null !== t && void 0 !== n && n.update(t, r, l || a)
                                }
                                I && I(t, r), r.detectedPlanes && n.dispatchEvent({
                                    type: "planesdetected",
                                    data: r
                                }), p = null
                            }), this.setAnimationLoop = function(e) {
                                I = e
                            }, this.dispose = function() {}
                        }
                    }
                });

            function fv(e, t) {
                function n(e, t) {
                    !0 === e.matrixAutoUpdate && e.updateMatrix(), t.value.copy(e.matrix)
                }

                function i(e, i) {
                    e.opacity.value = i.opacity, i.color && e.diffuse.value.copy(i.color), i.emissive && e.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity), i.map && (e.map.value = i.map, n(i.map, e.mapTransform)), i.alphaMap && (e.alphaMap.value = i.alphaMap, n(i.alphaMap, e.alphaMapTransform)), i.bumpMap && (e.bumpMap.value = i.bumpMap, n(i.bumpMap, e.bumpMapTransform), e.bumpScale.value = i.bumpScale, i.side === eA && (e.bumpScale.value *= -1)), i.normalMap && (e.normalMap.value = i.normalMap, n(i.normalMap, e.normalMapTransform), e.normalScale.value.copy(i.normalScale), i.side === eA && e.normalScale.value.negate()), i.displacementMap && (e.displacementMap.value = i.displacementMap, n(i.displacementMap, e.displacementMapTransform), e.displacementScale.value = i.displacementScale, e.displacementBias.value = i.displacementBias), i.emissiveMap && (e.emissiveMap.value = i.emissiveMap, n(i.emissiveMap, e.emissiveMapTransform)), i.specularMap && (e.specularMap.value = i.specularMap, n(i.specularMap, e.specularMapTransform)), i.alphaTest > 0 && (e.alphaTest.value = i.alphaTest);
                    let r = t.get(i),
                        a = r.envMap,
                        s = r.envMapRotation;
                    a && (e.envMap.value = a, f_.copy(s), f_.x *= -1, f_.y *= -1, f_.z *= -1, a.isCubeTexture && !1 === a.isRenderTargetTexture && (f_.y *= -1, f_.z *= -1), e.envMapRotation.value.setFromMatrix4(fx.makeRotationFromEuler(f_)), e.flipEnvMap.value = a.isCubeTexture && !1 === a.isRenderTargetTexture ? -1 : 1, e.reflectivity.value = i.reflectivity, e.ior.value = i.ior, e.refractionRatio.value = i.refractionRatio), i.lightMap && (e.lightMap.value = i.lightMap, e.lightMapIntensity.value = i.lightMapIntensity, n(i.lightMap, e.lightMapTransform)), i.aoMap && (e.aoMap.value = i.aoMap, e.aoMapIntensity.value = i.aoMapIntensity, n(i.aoMap, e.aoMapTransform))
                }
                return {
                    refreshFogUniforms: function(t, n) {
                        n.color.getRGB(t.fogColor.value, aJ(e)), n.isFog ? (t.fogNear.value = n.near, t.fogFar.value = n.far) : n.isFogExp2 && (t.fogDensity.value = n.density)
                    },
                    refreshMaterialUniforms: function(e, r, a, s, o) {
                        let l;
                        r.isMeshBasicMaterial || r.isMeshLambertMaterial ? i(e, r) : r.isMeshToonMaterial ? (i(e, r), r.gradientMap && (e.gradientMap.value = r.gradientMap)) : r.isMeshPhongMaterial ? (i(e, r), e.specular.value.copy(r.specular), e.shininess.value = Math.max(r.shininess, 1e-4)) : r.isMeshStandardMaterial ? (i(e, r), e.metalness.value = r.metalness, r.metalnessMap && (e.metalnessMap.value = r.metalnessMap, n(r.metalnessMap, e.metalnessMapTransform)), e.roughness.value = r.roughness, r.roughnessMap && (e.roughnessMap.value = r.roughnessMap, n(r.roughnessMap, e.roughnessMapTransform)), r.envMap && (e.envMapIntensity.value = r.envMapIntensity), r.isMeshPhysicalMaterial && (e.ior.value = r.ior, r.sheen > 0 && (e.sheenColor.value.copy(r.sheenColor).multiplyScalar(r.sheen), e.sheenRoughness.value = r.sheenRoughness, r.sheenColorMap && (e.sheenColorMap.value = r.sheenColorMap, n(r.sheenColorMap, e.sheenColorMapTransform)), r.sheenRoughnessMap && (e.sheenRoughnessMap.value = r.sheenRoughnessMap, n(r.sheenRoughnessMap, e.sheenRoughnessMapTransform))), r.clearcoat > 0 && (e.clearcoat.value = r.clearcoat, e.clearcoatRoughness.value = r.clearcoatRoughness, r.clearcoatMap && (e.clearcoatMap.value = r.clearcoatMap, n(r.clearcoatMap, e.clearcoatMapTransform)), r.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = r.clearcoatRoughnessMap, n(r.clearcoatRoughnessMap, e.clearcoatRoughnessMapTransform)), r.clearcoatNormalMap && (e.clearcoatNormalMap.value = r.clearcoatNormalMap, n(r.clearcoatNormalMap, e.clearcoatNormalMapTransform), e.clearcoatNormalScale.value.copy(r.clearcoatNormalScale), r.side === eA && e.clearcoatNormalScale.value.negate())), r.dispersion > 0 && (e.dispersion.value = r.dispersion), r.iridescence > 0 && (e.iridescence.value = r.iridescence, e.iridescenceIOR.value = r.iridescenceIOR, e.iridescenceThicknessMinimum.value = r.iridescenceThicknessRange[0], e.iridescenceThicknessMaximum.value = r.iridescenceThicknessRange[1], r.iridescenceMap && (e.iridescenceMap.value = r.iridescenceMap, n(r.iridescenceMap, e.iridescenceMapTransform)), r.iridescenceThicknessMap && (e.iridescenceThicknessMap.value = r.iridescenceThicknessMap, n(r.iridescenceThicknessMap, e.iridescenceThicknessMapTransform))), r.transmission > 0 && (e.transmission.value = r.transmission, e.transmissionSamplerMap.value = o.texture, e.transmissionSamplerSize.value.set(o.width, o.height), r.transmissionMap && (e.transmissionMap.value = r.transmissionMap, n(r.transmissionMap, e.transmissionMapTransform)), e.thickness.value = r.thickness, r.thicknessMap && (e.thicknessMap.value = r.thicknessMap, n(r.thicknessMap, e.thicknessMapTransform)), e.attenuationDistance.value = r.attenuationDistance, e.attenuationColor.value.copy(r.attenuationColor)), r.anisotropy > 0 && (e.anisotropyVector.value.set(r.anisotropy * Math.cos(r.anisotropyRotation), r.anisotropy * Math.sin(r.anisotropyRotation)), r.anisotropyMap && (e.anisotropyMap.value = r.anisotropyMap, n(r.anisotropyMap, e.anisotropyMapTransform))), e.specularIntensity.value = r.specularIntensity, e.specularColor.value.copy(r.specularColor), r.specularColorMap && (e.specularColorMap.value = r.specularColorMap, n(r.specularColorMap, e.specularColorMapTransform)), r.specularIntensityMap && (e.specularIntensityMap.value = r.specularIntensityMap, n(r.specularIntensityMap, e.specularIntensityMapTransform)))) : r.isMeshMatcapMaterial ? (i(e, r), r.matcap && (e.matcap.value = r.matcap)) : r.isMeshDepthMaterial ? i(e, r) : r.isMeshDistanceMaterial ? (i(e, r), l = t.get(r).light, e.referencePosition.value.setFromMatrixPosition(l.matrixWorld), e.nearDistance.value = l.shadow.camera.near, e.farDistance.value = l.shadow.camera.far) : r.isMeshNormalMaterial ? i(e, r) : r.isLineBasicMaterial ? (e.diffuse.value.copy(r.color), e.opacity.value = r.opacity, r.map && (e.map.value = r.map, n(r.map, e.mapTransform)), r.isLineDashedMaterial && (e.dashSize.value = r.dashSize, e.totalSize.value = r.dashSize + r.gapSize, e.scale.value = r.scale)) : r.isPointsMaterial ? (e.diffuse.value.copy(r.color), e.opacity.value = r.opacity, e.size.value = r.size * a, e.scale.value = .5 * s, r.map && (e.map.value = r.map, n(r.map, e.uvTransform)), r.alphaMap && (e.alphaMap.value = r.alphaMap, n(r.alphaMap, e.alphaMapTransform)), r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest)) : r.isSpriteMaterial ? (e.diffuse.value.copy(r.color), e.opacity.value = r.opacity, e.rotation.value = r.rotation, r.map && (e.map.value = r.map, n(r.map, e.mapTransform)), r.alphaMap && (e.alphaMap.value = r.alphaMap, n(r.alphaMap, e.alphaMapTransform)), r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest)) : r.isShadowMaterial ? (e.color.value.copy(r.color), e.opacity.value = r.opacity) : r.isShaderMaterial && (r.uniformsNeedUpdate = !1)
                    }
                }
            }
            var f_, fx, fM = h(() => {
                nX(), sv(), ae(), r7(), f_ = new rR, fx = new r_
            });

            function fy(e, t, n, i) {
                let r = {},
                    a = {},
                    s = [],
                    o = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);

                function l(e) {
                    let t = {
                        boundary: 0,
                        storage: 0
                    };
                    return "number" == typeof e || "boolean" == typeof e ? (t.boundary = 4, t.storage = 4) : e.isVector2 ? (t.boundary = 8, t.storage = 8) : e.isVector3 || e.isColor ? (t.boundary = 16, t.storage = 12) : e.isVector4 ? (t.boundary = 16, t.storage = 16) : e.isMatrix3 ? (t.boundary = 48, t.storage = 48) : e.isMatrix4 ? (t.boundary = 64, t.storage = 64) : e.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", e), t
                }

                function h(t) {
                    let n = t.target;
                    n.removeEventListener("dispose", h);
                    let i = s.indexOf(n.__bindingPointIndex);
                    s.splice(i, 1), e.deleteBuffer(r[n.id]), delete r[n.id], delete a[n.id]
                }
                return {
                    bind: function(e, t) {
                        let n = t.program;
                        i.uniformBlockBinding(e, n)
                    },
                    update: function(n, u) {
                        let c, d, p, f, m = r[n.id];
                        void 0 === m && (function(e) {
                            let t = e.uniforms,
                                n = 0;
                            for (let e = 0, i = t.length; e < i; e++) {
                                let i = Array.isArray(t[e]) ? t[e] : [t[e]];
                                for (let e = 0, t = i.length; e < t; e++) {
                                    let t = i[e],
                                        r = Array.isArray(t.value) ? t.value : [t.value];
                                    for (let e = 0, i = r.length; e < i; e++) {
                                        let i = l(r[e]),
                                            a = n % 16,
                                            s = a % i.boundary,
                                            o = a + s;
                                        n += s, 0 !== o && 16 - o < i.storage && (n += 16 - o), t.__data = new Float32Array(i.storage / Float32Array.BYTES_PER_ELEMENT), t.__offset = n, n += i.storage
                                    }
                                }
                            }
                            let i = n % 16;
                            i > 0 && (n += 16 - i), e.__size = n, e.__cache = {}
                        }(n), c = function() {
                            for (let e = 0; e < o; e++)
                                if (-1 === s.indexOf(e)) return s.push(e), e;
                            return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0
                        }(), n.__bindingPointIndex = c, d = e.createBuffer(), p = n.__size, f = n.usage, e.bindBuffer(e.UNIFORM_BUFFER, d), e.bufferData(e.UNIFORM_BUFFER, p, f), e.bindBuffer(e.UNIFORM_BUFFER, null), e.bindBufferBase(e.UNIFORM_BUFFER, c, d), m = d, r[n.id] = m, n.addEventListener("dispose", h));
                        let g = u.program;
                        i.updateUBOMapping(n, g);
                        let v = t.render.frame;
                        a[n.id] !== v && (function(t) {
                            let n = r[t.id],
                                i = t.uniforms,
                                a = t.__cache;
                            e.bindBuffer(e.UNIFORM_BUFFER, n);
                            for (let t = 0, n = i.length; t < n; t++) {
                                let n = Array.isArray(i[t]) ? i[t] : [i[t]];
                                for (let i = 0, r = n.length; i < r; i++) {
                                    let r = n[i];
                                    if (!0 === function(e, t, n, i) {
                                            let r = e.value,
                                                a = t + "_" + n;
                                            if (void 0 === i[a]) return "number" == typeof r || "boolean" == typeof r ? i[a] = r : i[a] = r.clone(), !0; {
                                                let e = i[a];
                                                if ("number" == typeof r || "boolean" == typeof r) {
                                                    if (e !== r) return i[a] = r, !0
                                                } else if (!1 === e.equals(r)) return e.copy(r), !0
                                            }
                                            return !1
                                        }(r, t, i, a)) {
                                        let t = r.__offset,
                                            n = Array.isArray(r.value) ? r.value : [r.value],
                                            i = 0;
                                        for (let a = 0; a < n.length; a++) {
                                            let s = n[a],
                                                o = l(s);
                                            "number" == typeof s || "boolean" == typeof s ? (r.__data[0] = s, e.bufferSubData(e.UNIFORM_BUFFER, t + i, r.__data)) : s.isMatrix3 ? (r.__data[0] = s.elements[0], r.__data[1] = s.elements[1], r.__data[2] = s.elements[2], r.__data[3] = 0, r.__data[4] = s.elements[3], r.__data[5] = s.elements[4], r.__data[6] = s.elements[5], r.__data[7] = 0, r.__data[8] = s.elements[6], r.__data[9] = s.elements[7], r.__data[10] = s.elements[8], r.__data[11] = 0) : (s.toArray(r.__data, i), i += o.storage / Float32Array.BYTES_PER_ELEMENT)
                                        }
                                        e.bufferSubData(e.UNIFORM_BUFFER, t, r.__data)
                                    }
                                }
                            }
                            e.bindBuffer(e.UNIFORM_BUFFER, null)
                        }(n), a[n.id] = v)
                    },
                    dispose: function() {
                        for (let t in r) e.deleteBuffer(r[t]);
                        s = [], r = {}, a = {}
                    }
                }
            }
            var fE, fS, fb, fT, fA, fw, fR, fC, fU, fP, fL = h(() => {}),
                fD = h(() => {
                    nX(), aR(), sL(), r7(), i0(), iq(), oA(), hW(), cq(), cZ(), cQ(), c0(), c2(), c4(), df(), dg(), d_(), dM(), dE(), db(), dA(), pY(), pK(), p0(), fe(), iZ(), fi(), fs(), fl(), py(), ff(), fg(), fM(), fL(), iE(), iU(), fE = class {
                        get coordinateSystem() {
                            return nF
                        }
                        get outputColorSpace() {
                            return this._outputColorSpace
                        }
                        set outputColorSpace(e) {
                            this._outputColorSpace = e;
                            let t = this.getContext();
                            t.drawingBufferColorspace = iw._getDrawingBufferColorSpace(e), t.unpackColorSpace = iw._getUnpackColorSpace()
                        }
                        constructor(e = {}) {
                            let t, n, i, r, a, s, o, l, h, u, c, d, p, f, m, g, v, _, x, M, y, E, S, b, T, {
                                canvas: A = function() {
                                    let e = ix("canvas");
                                    return e.style.display = "block", e
                                }(),
                                context: w = null,
                                depth: R = !0,
                                stencil: C = !1,
                                alpha: U = !1,
                                antialias: P = !1,
                                premultipliedAlpha: L = !0,
                                preserveDrawingBuffer: D = !1,
                                powerPreference: I = "default",
                                failIfMajorPerformanceCaveat: N = !1,
                                reverseDepthBuffer: O = !1
                            } = e;
                            if (this.isWebGLRenderer = !0, null !== w) {
                                if ("u" > typeof WebGLRenderingContext && w instanceof WebGLRenderingContext) throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
                                t = w.getContextAttributes().alpha
                            } else t = U;
                            let F = new Uint32Array(4),
                                B = new Int32Array(4),
                                z = null,
                                G = null,
                                H = [],
                                k = [];
                            this.domElement = A, this.debug = {
                                checkShaderErrors: !0,
                                onShaderError: null
                            }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = ny, this.toneMapping = tt, this.toneMappingExposure = 1;
                            let V = this,
                                W = !1,
                                X = 0,
                                j = 0,
                                Y = null,
                                q = -1,
                                K = null,
                                Z = new iF,
                                J = new iF,
                                Q = null,
                                $ = new al(0),
                                ee = 0,
                                et = A.width,
                                en = A.height,
                                ei = 1,
                                er = null,
                                ea = null,
                                es = new iF(0, 0, et, en),
                                eo = new iF(0, 0, et, en),
                                el = !1,
                                eh = new sp,
                                eu = !1,
                                ec = !1;
                            this.transmissionResolutionScale = 1;
                            let ed = new r_,
                                ep = new r_,
                                ef = new iV,
                                em = new iF,
                                eg = {
                                    background: null,
                                    fog: null,
                                    environment: null,
                                    overrideMaterial: null,
                                    isScene: !0
                                },
                                ev = !1;

                            function ex() {
                                return null === Y ? ei : 1
                            }
                            let eM = w;

                            function ey(e, t) {
                                return A.getContext(e, t)
                            }
                            try {
                                if ("setAttribute" in A && A.setAttribute("data-engine", "three.js r".concat(e_)), A.addEventListener("webglcontextlost", eb, !1), A.addEventListener("webglcontextrestored", eR, !1), A.addEventListener("webglcontextcreationerror", eC, !1), null === eM) {
                                    let e = "webgl2";
                                    if (eM = ey(e, {
                                            alpha: !0,
                                            depth: R,
                                            stencil: C,
                                            antialias: P,
                                            premultipliedAlpha: L,
                                            preserveDrawingBuffer: D,
                                            powerPreference: I,
                                            failIfMajorPerformanceCaveat: N
                                        }), null === eM) throw ey(e) ? Error("Error creating WebGL context with your selected attributes.") : Error("Error creating WebGL context.")
                                }
                            } catch (e) {
                                throw console.error("THREE.WebGLRenderer: " + e.message), e
                            }

                            function eE() {
                                (n = new dm(eM)).init(), S = new fh(eM, n), i = new c$(eM, n, e, S), r = new fr(eM, n), i.reverseDepthBuffer && O && r.buffers.depth.setReversed(!0), a = new dy(eM), s = new pq, o = new fo(eM, n, r, s, i, S, a), l = new c3(V), h = new dp(V), u = new ow(eM), b = new cK(eM, u), c = new dv(eM, u, a, b), d = new dT(eM, c, u, a), M = new dS(eM, i, o), v = new c1(s), p = new pj(V, l, h, n, i, b, v), f = new fv(V, s), m = new p$, g = new p8(n), x = new cW(V, l, h, r, d, t, L), _ = new fn(V, d, i), T = new fy(eM, a, i, r), y = new cJ(eM, n, a), E = new dx(eM, n, a), a.programs = p.programs, V.capabilities = i, V.extensions = n, V.properties = s, V.renderLists = m, V.shadowMap = _, V.state = r, V.info = a
                            }
                            eE();
                            let eS = new fp(V, eM);

                            function eb(e) {
                                e.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), W = !0
                            }

                            function eR() {
                                console.log("THREE.WebGLRenderer: Context Restored."), W = !1;
                                let e = a.autoReset,
                                    t = _.enabled,
                                    n = _.autoUpdate,
                                    i = _.needsUpdate,
                                    r = _.type;
                                eE(), a.autoReset = e, _.enabled = t, _.autoUpdate = n, _.needsUpdate = i, _.type = r
                            }

                            function eC(e) {
                                console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", e.statusMessage)
                            }

                            function eU(e) {
                                let t, n = e.target;
                                n.removeEventListener("dispose", eU), void 0 !== (t = s.get(n).programs) && (t.forEach(function(e) {
                                    p.releaseProgram(e)
                                }), n.isShaderMaterial && p.releaseShaderCache(n)), s.remove(n)
                            }

                            function eP(e, t, n) {
                                !0 === e.transparent && e.side === ew && !1 === e.forceSinglePass ? (e.side = eA, e.needsUpdate = !0, eH(e, t, n), e.side = eT, e.needsUpdate = !0, eH(e, t, n), e.side = ew) : eH(e, t, n)
                            }
                            this.xr = eS, this.getContext = function() {
                                return eM
                            }, this.getContextAttributes = function() {
                                return eM.getContextAttributes()
                            }, this.forceContextLoss = function() {
                                let e = n.get("WEBGL_lose_context");
                                e && e.loseContext()
                            }, this.forceContextRestore = function() {
                                let e = n.get("WEBGL_lose_context");
                                e && e.restoreContext()
                            }, this.getPixelRatio = function() {
                                return ei
                            }, this.setPixelRatio = function(e) {
                                void 0 !== e && (ei = e, this.setSize(et, en, !1))
                            }, this.getSize = function(e) {
                                return e.set(et, en)
                            }, this.setSize = function(e, t) {
                                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                                if (eS.isPresenting) {
                                    console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
                                    return
                                }
                                et = e, en = t, A.width = Math.floor(e * ei), A.height = Math.floor(t * ei), !0 === n && (A.style.width = e + "px", A.style.height = t + "px"), this.setViewport(0, 0, e, t)
                            }, this.getDrawingBufferSize = function(e) {
                                return e.set(et * ei, en * ei).floor()
                            }, this.setDrawingBufferSize = function(e, t, n) {
                                et = e, en = t, ei = n, A.width = Math.floor(e * n), A.height = Math.floor(t * n), this.setViewport(0, 0, e, t)
                            }, this.getCurrentViewport = function(e) {
                                return e.copy(Z)
                            }, this.getViewport = function(e) {
                                return e.copy(es)
                            }, this.setViewport = function(e, t, n, i) {
                                e.isVector4 ? es.set(e.x, e.y, e.z, e.w) : es.set(e, t, n, i), r.viewport(Z.copy(es).multiplyScalar(ei).round())
                            }, this.getScissor = function(e) {
                                return e.copy(eo)
                            }, this.setScissor = function(e, t, n, i) {
                                e.isVector4 ? eo.set(e.x, e.y, e.z, e.w) : eo.set(e, t, n, i), r.scissor(J.copy(eo).multiplyScalar(ei).round())
                            }, this.getScissorTest = function() {
                                return el
                            }, this.setScissorTest = function(e) {
                                r.setScissorTest(el = e)
                            }, this.setOpaqueSort = function(e) {
                                er = e
                            }, this.setTransparentSort = function(e) {
                                ea = e
                            }, this.getClearColor = function(e) {
                                return e.copy(x.getClearColor())
                            }, this.setClearColor = function() {
                                x.setClearColor.apply(x, arguments)
                            }, this.getClearAlpha = function() {
                                return x.getClearAlpha()
                            }, this.setClearAlpha = function() {
                                x.setClearAlpha.apply(x, arguments)
                            }, this.clear = function() {
                                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                                    t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                                    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                                    i = 0;
                                if (e) {
                                    let e = !1;
                                    if (null !== Y) {
                                        let t = Y.texture.format;
                                        e = t === tY || t === tj || t === tW
                                    }
                                    if (e) {
                                        let e = Y.texture.type,
                                            t = e === tb || e === tC || e === tw || e === tI || e === tL || e === tD,
                                            n = x.getClearColor(),
                                            i = x.getClearAlpha(),
                                            r = n.r,
                                            a = n.g,
                                            s = n.b;
                                        t ? (F[0] = r, F[1] = a, F[2] = s, F[3] = i, eM.clearBufferuiv(eM.COLOR, 0, F)) : (B[0] = r, B[1] = a, B[2] = s, B[3] = i, eM.clearBufferiv(eM.COLOR, 0, B))
                                    } else i |= eM.COLOR_BUFFER_BIT
                                }
                                t && (i |= eM.DEPTH_BUFFER_BIT), n && (i |= eM.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(0xffffffff)), eM.clear(i)
                            }, this.clearColor = function() {
                                this.clear(!0, !1, !1)
                            }, this.clearDepth = function() {
                                this.clear(!1, !0, !1)
                            }, this.clearStencil = function() {
                                this.clear(!1, !1, !0)
                            }, this.dispose = function() {
                                A.removeEventListener("webglcontextlost", eb, !1), A.removeEventListener("webglcontextrestored", eR, !1), A.removeEventListener("webglcontextcreationerror", eC, !1), x.dispose(), m.dispose(), g.dispose(), s.dispose(), l.dispose(), h.dispose(), d.dispose(), b.dispose(), T.dispose(), p.dispose(), eS.dispose(), eS.removeEventListener("sessionstart", eD), eS.removeEventListener("sessionend", eI), eN.stop()
                            }, this.renderBufferDirect = function(e, t, a, d, p, m) {
                                null === t && (t = eg);
                                let g = p.isMesh && 0 > p.matrixWorld.determinant(),
                                    _ = function(e, t, n, a, u) {
                                        var c;
                                        !0 !== t.isScene && (t = eg), o.resetTextureUnits();
                                        let d = t.fog,
                                            p = a.isMeshStandardMaterial ? t.environment : null,
                                            m = null === Y ? V.outputColorSpace : !0 === Y.isXRRenderTarget ? Y.texture.colorSpace : nE,
                                            g = (a.isMeshStandardMaterial ? h : l).get(a.envMap || p),
                                            _ = !0 === a.vertexColors && !!n.attributes.color && 4 === n.attributes.color.itemSize,
                                            x = !!n.attributes.tangent && (!!a.normalMap || a.anisotropy > 0),
                                            y = !!n.morphAttributes.position,
                                            E = !!n.morphAttributes.normal,
                                            S = !!n.morphAttributes.color,
                                            b = tt;
                                        a.toneMapped && (null === Y || !0 === Y.isXRRenderTarget) && (b = V.toneMapping);
                                        let A = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color,
                                            w = void 0 !== A ? A.length : 0,
                                            R = s.get(a),
                                            C = G.state.lights;
                                        if (!0 === eu && (!0 === ec || e !== K)) {
                                            let t = e === K && a.id === q;
                                            v.setState(a, e, t)
                                        }
                                        let U = !1;
                                        a.version === R.__version ? (R.needsLights && R.lightsStateVersion !== C.state.version || R.outputColorSpace !== m || u.isBatchedMesh && !1 === R.batching || !u.isBatchedMesh && !0 === R.batching || u.isBatchedMesh && !0 === R.batchingColor && null === u.colorTexture || u.isBatchedMesh && !1 === R.batchingColor && null !== u.colorTexture || u.isInstancedMesh && !1 === R.instancing || !u.isInstancedMesh && !0 === R.instancing || u.isSkinnedMesh && !1 === R.skinning || !u.isSkinnedMesh && !0 === R.skinning || u.isInstancedMesh && !0 === R.instancingColor && null === u.instanceColor || u.isInstancedMesh && !1 === R.instancingColor && null !== u.instanceColor || u.isInstancedMesh && !0 === R.instancingMorph && null === u.morphTexture || u.isInstancedMesh && !1 === R.instancingMorph && null !== u.morphTexture || R.envMap !== g || !0 === a.fog && R.fog !== d || void 0 !== R.numClippingPlanes && (R.numClippingPlanes !== v.numPlanes || R.numIntersection !== v.numIntersection) || R.vertexAlphas !== _ || R.vertexTangents !== x || R.morphTargets !== y || R.morphNormals !== E || R.morphColors !== S || R.toneMapping !== b || R.morphTargetsCount !== w) && (U = !0) : (U = !0, R.__version = a.version);
                                        let P = R.currentProgram;
                                        !0 === U && (P = eH(a, t, u));
                                        let L = !1,
                                            D = !1,
                                            I = !1,
                                            N = P.getUniforms(),
                                            O = R.uniforms;
                                        if (r.useProgram(P.program) && (L = !0, D = !0, I = !0), a.id !== q && (q = a.id, D = !0), L || K !== e) {
                                            let t, n;
                                            r.buffers.depth.getReversed() ? (ed.copy(e.projectionMatrix), (t = ed.elements)[2] = .5 * t[2] + .5 * t[3], t[6] = .5 * t[6] + .5 * t[7], t[10] = .5 * t[10] + .5 * t[11], t[14] = .5 * t[14] + .5 * t[15], -1 === (n = ed.elements)[11] ? (n[10] = -n[10] - 1, n[14] = -n[14]) : (n[10] = -n[10], n[14] = -n[14] + 1), N.setValue(eM, "projectionMatrix", ed)) : N.setValue(eM, "projectionMatrix", e.projectionMatrix), N.setValue(eM, "viewMatrix", e.matrixWorldInverse);
                                            let s = N.map.cameraPosition;
                                            void 0 !== s && s.setValue(eM, ef.setFromMatrixPosition(e.matrixWorld)), i.logarithmicDepthBuffer && N.setValue(eM, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), (a.isMeshPhongMaterial || a.isMeshToonMaterial || a.isMeshLambertMaterial || a.isMeshBasicMaterial || a.isMeshStandardMaterial || a.isShaderMaterial) && N.setValue(eM, "isOrthographic", !0 === e.isOrthographicCamera), K !== e && (K = e, D = !0, I = !0)
                                        }
                                        if (u.isSkinnedMesh) {
                                            N.setOptional(eM, u, "bindMatrix"), N.setOptional(eM, u, "bindMatrixInverse");
                                            let e = u.skeleton;
                                            e && (null === e.boneTexture && e.computeBoneTexture(), N.setValue(eM, "boneTexture", e.boneTexture, o))
                                        }
                                        u.isBatchedMesh && (N.setOptional(eM, u, "batchingTexture"), N.setValue(eM, "batchingTexture", u._matricesTexture, o), N.setOptional(eM, u, "batchingIdTexture"), N.setValue(eM, "batchingIdTexture", u._indirectTexture, o), N.setOptional(eM, u, "batchingColorTexture"), null !== u._colorsTexture && N.setValue(eM, "batchingColorTexture", u._colorsTexture, o));
                                        let F = n.morphAttributes;
                                        if ((void 0 !== F.position || void 0 !== F.normal || void 0 !== F.color) && M.update(u, n, P), (D || R.receiveShadow !== u.receiveShadow) && (R.receiveShadow = u.receiveShadow, N.setValue(eM, "receiveShadow", u.receiveShadow)), a.isMeshGouraudMaterial && null !== a.envMap && (O.envMap.value = g, O.flipEnvMap.value = g.isCubeTexture && !1 === g.isRenderTargetTexture ? -1 : 1), a.isMeshStandardMaterial && null === a.envMap && null !== t.environment && (O.envMapIntensity.value = t.environmentIntensity), D && (N.setValue(eM, "toneMappingExposure", V.toneMappingExposure), R.needsLights && (c = I, O.ambientLightColor.needsUpdate = c, O.lightProbe.needsUpdate = c, O.directionalLights.needsUpdate = c, O.directionalLightShadows.needsUpdate = c, O.pointLights.needsUpdate = c, O.pointLightShadows.needsUpdate = c, O.spotLights.needsUpdate = c, O.spotLightShadows.needsUpdate = c, O.rectAreaLights.needsUpdate = c, O.hemisphereLights.needsUpdate = c), d && !0 === a.fog && f.refreshFogUniforms(O, d), f.refreshMaterialUniforms(O, a, ei, en, G.state.transmissionRenderTarget[e.id]), pM.upload(eM, ek(R), O, o)), a.isShaderMaterial && !0 === a.uniformsNeedUpdate && (pM.upload(eM, ek(R), O, o), a.uniformsNeedUpdate = !1), a.isSpriteMaterial && N.setValue(eM, "center", u.center), N.setValue(eM, "modelViewMatrix", u.modelViewMatrix), N.setValue(eM, "normalMatrix", u.normalMatrix), N.setValue(eM, "modelMatrix", u.matrixWorld), a.isShaderMaterial || a.isRawShaderMaterial) {
                                            let e = a.uniformsGroups;
                                            for (let t = 0, n = e.length; t < n; t++) {
                                                let n = e[t];
                                                T.update(n, P), T.bind(n, P)
                                            }
                                        }
                                        return P
                                    }(e, t, a, d, p);
                                r.setMaterial(d, g);
                                let x = a.index,
                                    S = 1;
                                if (!0 === d.wireframe) {
                                    if (void 0 === (x = c.getWireframeAttribute(a))) return;
                                    S = 2
                                }
                                let A = a.drawRange,
                                    w = a.attributes.position,
                                    R = A.start * S,
                                    C = (A.start + A.count) * S;
                                null !== m && (R = Math.max(R, m.start * S), C = Math.min(C, (m.start + m.count) * S)), null !== x ? (R = Math.max(R, 0), C = Math.min(C, x.count)) : null != w && (R = Math.max(R, 0), C = Math.min(C, w.count));
                                let U = C - R;
                                if (U < 0 || U === 1 / 0) return;
                                b.setup(p, d, _, a, x);
                                let P, L = y;
                                if (null !== x && (P = u.get(x), (L = E).setIndex(P)), p.isMesh) !0 === d.wireframe ? (r.setLineWidth(d.wireframeLinewidth * ex()), L.setMode(eM.LINES)) : L.setMode(eM.TRIANGLES);
                                else if (p.isLine) {
                                    let e = d.linewidth;
                                    void 0 === e && (e = 1), r.setLineWidth(e * ex()), p.isLineSegments ? L.setMode(eM.LINES) : p.isLineLoop ? L.setMode(eM.LINE_LOOP) : L.setMode(eM.LINE_STRIP)
                                } else p.isPoints ? L.setMode(eM.POINTS) : p.isSprite && L.setMode(eM.TRIANGLES);
                                if (p.isBatchedMesh) {
                                    if (null !== p._multiDrawInstances) L.renderMultiDrawInstances(p._multiDrawStarts, p._multiDrawCounts, p._multiDrawCount, p._multiDrawInstances);
                                    else if (n.get("WEBGL_multi_draw")) L.renderMultiDraw(p._multiDrawStarts, p._multiDrawCounts, p._multiDrawCount);
                                    else {
                                        let e = p._multiDrawStarts,
                                            t = p._multiDrawCounts,
                                            n = p._multiDrawCount,
                                            i = x ? u.get(x).bytesPerElement : 1,
                                            r = s.get(d).currentProgram.getUniforms();
                                        for (let a = 0; a < n; a++) r.setValue(eM, "_gl_DrawID", a), L.render(e[a] / i, t[a])
                                    }
                                } else if (p.isInstancedMesh) L.renderInstances(R, U, p.count);
                                else if (a.isInstancedBufferGeometry) {
                                    let e = void 0 !== a._maxInstanceCount ? a._maxInstanceCount : 1 / 0,
                                        t = Math.min(a.instanceCount, e);
                                    L.renderInstances(R, U, t)
                                } else L.render(R, U)
                            }, this.compile = function(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                                null === n && (n = e), (G = g.get(n)).init(t), k.push(G), n.traverseVisible(function(e) {
                                    e.isLight && e.layers.test(t.layers) && (G.pushLight(e), e.castShadow && G.pushShadow(e))
                                }), e !== n && e.traverseVisible(function(e) {
                                    e.isLight && e.layers.test(t.layers) && (G.pushLight(e), e.castShadow && G.pushShadow(e))
                                }), G.setupLights();
                                let i = new Set;
                                return e.traverse(function(e) {
                                    if (!(e.isMesh || e.isPoints || e.isLine || e.isSprite)) return;
                                    let t = e.material;
                                    if (t) {
                                        if (Array.isArray(t))
                                            for (let r = 0; r < t.length; r++) {
                                                let a = t[r];
                                                eP(a, n, e), i.add(a)
                                            } else eP(t, n, e), i.add(t)
                                    }
                                }), k.pop(), G = null, i
                            }, this.compileAsync = function(e, t) {
                                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                    r = this.compile(e, t, i);
                                return new Promise(t => {
                                    function i() {
                                        if (r.forEach(function(e) {
                                                s.get(e).currentProgram.isReady() && r.delete(e)
                                            }), 0 === r.size) {
                                            t(e);
                                            return
                                        }
                                        setTimeout(i, 10)
                                    }
                                    null !== n.get("KHR_parallel_shader_compile") ? i() : setTimeout(i, 10)
                                })
                            };
                            let eL = null;

                            function eD() {
                                eN.stop()
                            }

                            function eI() {
                                eN.start()
                            }
                            let eN = new oT;

                            function eO(e, t, n, i) {
                                if (!1 === e.visible) return;
                                if (e.layers.test(t.layers)) {
                                    if (e.isGroup) n = e.renderOrder;
                                    else if (e.isLOD) !0 === e.autoUpdate && e.update(t);
                                    else if (e.isLight) G.pushLight(e), e.castShadow && G.pushShadow(e);
                                    else if (e.isSprite) {
                                        if (!e.frustumCulled || eh.intersectsSprite(e)) {
                                            i && em.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ep);
                                            let t = d.update(e),
                                                r = e.material;
                                            r.visible && z.push(e, t, r, n, em.z, null)
                                        }
                                    } else if ((e.isMesh || e.isLine || e.isPoints) && (!e.frustumCulled || eh.intersectsObject(e))) {
                                        let t = d.update(e),
                                            r = e.material;
                                        if (i && (void 0 !== e.boundingSphere ? (null === e.boundingSphere && e.computeBoundingSphere(), em.copy(e.boundingSphere.center)) : (null === t.boundingSphere && t.computeBoundingSphere(), em.copy(t.boundingSphere.center)), em.applyMatrix4(e.matrixWorld).applyMatrix4(ep)), Array.isArray(r)) {
                                            let i = t.groups;
                                            for (let a = 0, s = i.length; a < s; a++) {
                                                let s = i[a],
                                                    o = r[s.materialIndex];
                                                o && o.visible && z.push(e, t, o, n, em.z, s)
                                            }
                                        } else r.visible && z.push(e, t, r, n, em.z, null)
                                    }
                                }
                                let r = e.children;
                                for (let e = 0, a = r.length; e < a; e++) eO(r[e], t, n, i)
                            }

                            function eF(e, t, n, i) {
                                let a = e.opaque,
                                    s = e.transmissive,
                                    o = e.transparent;
                                G.setupLightsView(n), !0 === eu && v.setGlobalState(V.clippingPlanes, n), i && r.viewport(Z.copy(i)), a.length > 0 && ez(a, t, n), s.length > 0 && ez(s, t, n), o.length > 0 && ez(o, t, n), r.buffers.depth.setTest(!0), r.buffers.depth.setMask(!0), r.buffers.color.setMask(!0), r.setPolygonOffset(!1)
                            }

                            function eB(e, t, i, r) {
                                if ((!0 === i.isScene ? i.overrideMaterial : null) !== null) return;
                                void 0 === G.state.transmissionRenderTarget[r.id] && (G.state.transmissionRenderTarget[r.id] = new iz(1, 1, {
                                    generateMipmaps: !0,
                                    type: n.has("EXT_color_buffer_half_float") || n.has("EXT_color_buffer_float") ? tP : tb,
                                    minFilter: tS,
                                    samples: 4,
                                    stencilBuffer: C,
                                    resolveDepthBuffer: !1,
                                    resolveStencilBuffer: !1,
                                    colorSpace: iw.workingColorSpace
                                }));
                                let a = G.state.transmissionRenderTarget[r.id],
                                    s = r.viewport || Z;
                                a.setSize(s.z * V.transmissionResolutionScale, s.w * V.transmissionResolutionScale);
                                let l = V.getRenderTarget();
                                V.setRenderTarget(a), V.getClearColor($), (ee = V.getClearAlpha()) < 1 && V.setClearColor(0xffffff, .5), V.clear(), ev && x.render(i);
                                let h = V.toneMapping;
                                V.toneMapping = tt;
                                let u = r.viewport;
                                if (void 0 !== r.viewport && (r.viewport = void 0), G.setupLightsView(r), !0 === eu && v.setGlobalState(V.clippingPlanes, r), ez(e, i, r), o.updateMultisampleRenderTarget(a), o.updateRenderTargetMipmap(a), !1 === n.has("WEBGL_multisampled_render_to_texture")) {
                                    let e = !1;
                                    for (let n = 0, a = t.length; n < a; n++) {
                                        let a = t[n],
                                            s = a.object,
                                            o = a.geometry,
                                            l = a.material,
                                            h = a.group;
                                        if (l.side === ew && s.layers.test(r.layers)) {
                                            let t = l.side;
                                            l.side = eA, l.needsUpdate = !0, eG(s, i, r, o, l, h), l.side = t, l.needsUpdate = !0, e = !0
                                        }
                                    }!0 === e && (o.updateMultisampleRenderTarget(a), o.updateRenderTargetMipmap(a))
                                }
                                V.setRenderTarget(l), V.setClearColor($, ee), void 0 !== u && (r.viewport = u), V.toneMapping = h
                            }

                            function ez(e, t, n) {
                                let i = !0 === t.isScene ? t.overrideMaterial : null;
                                for (let r = 0, a = e.length; r < a; r++) {
                                    let a = e[r],
                                        s = a.object,
                                        o = a.geometry,
                                        l = null === i ? a.material : i,
                                        h = a.group;
                                    s.layers.test(n.layers) && eG(s, t, n, o, l, h)
                                }
                            }

                            function eG(e, t, n, i, r, a) {
                                e.onBeforeRender(V, t, n, i, r, a), e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), r.onBeforeRender(V, t, n, i, e, a), !0 === r.transparent && r.side === ew && !1 === r.forceSinglePass ? (r.side = eA, r.needsUpdate = !0, V.renderBufferDirect(n, t, i, r, e, a), r.side = eT, r.needsUpdate = !0, V.renderBufferDirect(n, t, i, r, e, a), r.side = ew) : V.renderBufferDirect(n, t, i, r, e, a), e.onAfterRender(V, t, n, i, r, a)
                            }

                            function eH(e, t, n) {
                                !0 !== t.isScene && (t = eg);
                                let i = s.get(e),
                                    r = G.state.lights,
                                    a = G.state.shadowsArray,
                                    o = r.state.version,
                                    u = p.getParameters(e, r.state, a, t, n),
                                    c = p.getProgramCacheKey(u),
                                    d = i.programs;
                                i.environment = e.isMeshStandardMaterial ? t.environment : null, i.fog = t.fog, i.envMap = (e.isMeshStandardMaterial ? h : l).get(e.envMap || i.environment), i.envMapRotation = null !== i.environment && null === e.envMap ? t.environmentRotation : e.envMapRotation, void 0 === d && (e.addEventListener("dispose", eU), d = new Map, i.programs = d);
                                let f = d.get(c);
                                if (void 0 !== f) {
                                    if (i.currentProgram === f && i.lightsStateVersion === o) return eV(e, u), f
                                } else u.uniforms = p.getUniforms(e), e.onBeforeCompile(u, V), f = p.acquireProgram(u, c), d.set(c, f), i.uniforms = u.uniforms;
                                let m = i.uniforms;
                                return (e.isShaderMaterial || e.isRawShaderMaterial) && !0 !== e.clipping || (m.clippingPlanes = v.uniform), eV(e, u), i.needsLights = e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && !0 === e.lights, i.lightsStateVersion = o, i.needsLights && (m.ambientLightColor.value = r.state.ambient, m.lightProbe.value = r.state.probe, m.directionalLights.value = r.state.directional, m.directionalLightShadows.value = r.state.directionalShadow, m.spotLights.value = r.state.spot, m.spotLightShadows.value = r.state.spotShadow, m.rectAreaLights.value = r.state.rectArea, m.ltc_1.value = r.state.rectAreaLTC1, m.ltc_2.value = r.state.rectAreaLTC2, m.pointLights.value = r.state.point, m.pointLightShadows.value = r.state.pointShadow, m.hemisphereLights.value = r.state.hemi, m.directionalShadowMap.value = r.state.directionalShadowMap, m.directionalShadowMatrix.value = r.state.directionalShadowMatrix, m.spotShadowMap.value = r.state.spotShadowMap, m.spotLightMatrix.value = r.state.spotLightMatrix, m.spotLightMap.value = r.state.spotLightMap, m.pointShadowMap.value = r.state.pointShadowMap, m.pointShadowMatrix.value = r.state.pointShadowMatrix), i.currentProgram = f, i.uniformsList = null, f
                            }

                            function ek(e) {
                                if (null === e.uniformsList) {
                                    let t = e.currentProgram.getUniforms();
                                    e.uniformsList = pM.seqWithValue(t.seq, e.uniforms)
                                }
                                return e.uniformsList
                            }

                            function eV(e, t) {
                                let n = s.get(e);
                                n.outputColorSpace = t.outputColorSpace, n.batching = t.batching, n.batchingColor = t.batchingColor, n.instancing = t.instancing, n.instancingColor = t.instancingColor, n.instancingMorph = t.instancingMorph, n.skinning = t.skinning, n.morphTargets = t.morphTargets, n.morphNormals = t.morphNormals, n.morphColors = t.morphColors, n.morphTargetsCount = t.morphTargetsCount, n.numClippingPlanes = t.numClippingPlanes, n.numIntersection = t.numClipIntersection, n.vertexAlphas = t.vertexAlphas, n.vertexTangents = t.vertexTangents, n.toneMapping = t.toneMapping
                            }
                            eN.setAnimationLoop(function(e) {
                                eL && eL(e)
                            }), "u" > typeof self && eN.setContext(self), this.setAnimationLoop = function(e) {
                                eL = e, eS.setAnimationLoop(e), null === e ? eN.stop() : eN.start()
                            }, eS.addEventListener("sessionstart", eD), eS.addEventListener("sessionend", eI), this.render = function(e, t) {
                                if (void 0 !== t && !0 !== t.isCamera) {
                                    console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                                    return
                                }
                                if (!0 === W) return;
                                if (!0 === e.matrixWorldAutoUpdate && e.updateMatrixWorld(), null === t.parent && !0 === t.matrixWorldAutoUpdate && t.updateMatrixWorld(), !0 === eS.enabled && !0 === eS.isPresenting && (!0 === eS.cameraAutoUpdate && eS.updateCamera(t), t = eS.getCamera()), !0 === e.isScene && e.onBeforeRender(V, e, t, Y), (G = g.get(e, k.length)).init(t), k.push(G), ep.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), eh.setFromProjectionMatrix(ep), ec = this.localClippingEnabled, eu = v.init(this.clippingPlanes, ec), (z = m.get(e, H.length)).init(), H.push(z), !0 === eS.enabled && !0 === eS.isPresenting) {
                                    let e = V.xr.getDepthSensingMesh();
                                    null !== e && eO(e, t, -1 / 0, V.sortObjects)
                                }
                                eO(e, t, 0, V.sortObjects), z.finish(), !0 === V.sortObjects && z.sort(er, ea), (ev = !1 === eS.enabled || !1 === eS.isPresenting || !1 === eS.hasDepthSensing()) && x.addToRenderList(z, e), this.info.render.frame++, !0 === eu && v.beginShadows();
                                let n = G.state.shadowsArray;
                                _.render(n, e, t), !0 === eu && v.endShadows(), !0 === this.info.autoReset && this.info.reset();
                                let i = z.opaque,
                                    r = z.transmissive;
                                if (G.setupLights(), t.isArrayCamera) {
                                    let n = t.cameras;
                                    if (r.length > 0)
                                        for (let t = 0, a = n.length; t < a; t++) eB(i, r, e, n[t]);
                                    ev && x.render(e);
                                    for (let t = 0, i = n.length; t < i; t++) {
                                        let i = n[t];
                                        eF(z, e, i, i.viewport)
                                    }
                                } else r.length > 0 && eB(i, r, e, t), ev && x.render(e), eF(z, e, t);
                                null !== Y && 0 === j && (o.updateMultisampleRenderTarget(Y), o.updateRenderTargetMipmap(Y)), !0 === e.isScene && e.onAfterRender(V, e, t), b.resetDefaultState(), q = -1, K = null, k.pop(), k.length > 0 ? (G = k[k.length - 1], !0 === eu && v.setGlobalState(V.clippingPlanes, G.state.camera)) : G = null, H.pop(), z = H.length > 0 ? H[H.length - 1] : null
                            }, this.getActiveCubeFace = function() {
                                return X
                            }, this.getActiveMipmapLevel = function() {
                                return j
                            }, this.getRenderTarget = function() {
                                return Y
                            }, this.setRenderTargetTextures = function(e, t, i) {
                                s.get(e.texture).__webglTexture = t, s.get(e.depthTexture).__webglTexture = i;
                                let r = s.get(e);
                                r.__hasExternalTextures = !0, r.__autoAllocateDepthBuffer = void 0 === i, r.__autoAllocateDepthBuffer || !0 === n.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), r.__useRenderToTexture = !1)
                            }, this.setRenderTargetFramebuffer = function(e, t) {
                                let n = s.get(e);
                                n.__webglFramebuffer = t, n.__useDefaultFramebuffer = void 0 === t
                            };
                            let eW = eM.createFramebuffer();
                            this.setRenderTarget = function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                                Y = e, X = t, j = n;
                                let i = !0,
                                    a = null,
                                    l = !1,
                                    h = !1;
                                if (e) {
                                    let u = s.get(e);
                                    if (void 0 !== u.__useDefaultFramebuffer) r.bindFramebuffer(eM.FRAMEBUFFER, null), i = !1;
                                    else if (void 0 === u.__webglFramebuffer) o.setupRenderTarget(e);
                                    else if (u.__hasExternalTextures) o.rebindTextures(e, s.get(e.texture).__webglTexture, s.get(e.depthTexture).__webglTexture);
                                    else if (e.depthBuffer) {
                                        let t = e.depthTexture;
                                        if (u.__boundDepthTexture !== t) {
                                            if (null !== t && s.has(t) && (e.width !== t.image.width || e.height !== t.image.height)) throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
                                            o.setupDepthRenderbuffer(e)
                                        }
                                    }
                                    let c = e.texture;
                                    (c.isData3DTexture || c.isDataArrayTexture || c.isCompressedArrayTexture) && (h = !0);
                                    let d = s.get(e).__webglFramebuffer;
                                    e.isWebGLCubeRenderTarget ? (a = Array.isArray(d[t]) ? d[t][n] : d[t], l = !0) : a = e.samples > 0 && !1 === o.useMultisampledRTT(e) ? s.get(e).__webglMultisampledFramebuffer : Array.isArray(d) ? d[n] : d, Z.copy(e.viewport), J.copy(e.scissor), Q = e.scissorTest
                                } else Z.copy(es).multiplyScalar(ei).floor(), J.copy(eo).multiplyScalar(ei).floor(), Q = el;
                                if (0 !== n && (a = eW), r.bindFramebuffer(eM.FRAMEBUFFER, a) && i && r.drawBuffers(e, a), r.viewport(Z), r.scissor(J), r.setScissorTest(Q), l) {
                                    let i = s.get(e.texture);
                                    eM.framebufferTexture2D(eM.FRAMEBUFFER, eM.COLOR_ATTACHMENT0, eM.TEXTURE_CUBE_MAP_POSITIVE_X + t, i.__webglTexture, n)
                                } else if (h) {
                                    let i = s.get(e.texture);
                                    eM.framebufferTextureLayer(eM.FRAMEBUFFER, eM.COLOR_ATTACHMENT0, i.__webglTexture, n, t)
                                } else if (null !== e && 0 !== n) {
                                    let t = s.get(e.texture);
                                    eM.framebufferTexture2D(eM.FRAMEBUFFER, eM.COLOR_ATTACHMENT0, eM.TEXTURE_2D, t.__webglTexture, n)
                                }
                                q = -1
                            }, this.readRenderTargetPixels = function(e, t, n, a, o, l, h) {
                                if (!(e && e.isWebGLRenderTarget)) {
                                    console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                                    return
                                }
                                let u = s.get(e).__webglFramebuffer;
                                if (e.isWebGLCubeRenderTarget && void 0 !== h && (u = u[h]), u) {
                                    r.bindFramebuffer(eM.FRAMEBUFFER, u);
                                    try {
                                        let r = e.texture,
                                            s = r.format,
                                            h = r.type;
                                        if (!i.textureFormatReadable(s)) {
                                            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                                            return
                                        }
                                        if (!i.textureTypeReadable(h)) {
                                            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                                            return
                                        }
                                        t >= 0 && t <= e.width - a && n >= 0 && n <= e.height - o && eM.readPixels(t, n, a, o, S.convert(s), S.convert(h), l)
                                    } finally {
                                        let e = null !== Y ? s.get(Y).__webglFramebuffer : null;
                                        r.bindFramebuffer(eM.FRAMEBUFFER, e)
                                    }
                                }
                            }, this.readRenderTargetPixelsAsync = async function(e, t, n, a, o, l, h) {
                                if (!(e && e.isWebGLRenderTarget)) throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                                let u = s.get(e).__webglFramebuffer;
                                if (e.isWebGLCubeRenderTarget && void 0 !== h && (u = u[h]), u) {
                                    let h = e.texture,
                                        d = h.format,
                                        p = h.type;
                                    if (!i.textureFormatReadable(d)) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
                                    if (!i.textureTypeReadable(p)) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
                                    if (t >= 0 && t <= e.width - a && n >= 0 && n <= e.height - o) {
                                        var c;
                                        r.bindFramebuffer(eM.FRAMEBUFFER, u);
                                        let e = eM.createBuffer();
                                        eM.bindBuffer(eM.PIXEL_PACK_BUFFER, e), eM.bufferData(eM.PIXEL_PACK_BUFFER, l.byteLength, eM.STREAM_READ), eM.readPixels(t, n, a, o, S.convert(d), S.convert(p), 0);
                                        let i = null !== Y ? s.get(Y).__webglFramebuffer : null;
                                        r.bindFramebuffer(eM.FRAMEBUFFER, i);
                                        let h = eM.fenceSync(eM.SYNC_GPU_COMMANDS_COMPLETE, 0);
                                        return eM.flush(), await (c = eM, new Promise(function(e, t) {
                                            setTimeout(function n() {
                                                switch (c.clientWaitSync(h, c.SYNC_FLUSH_COMMANDS_BIT, 0)) {
                                                    case c.WAIT_FAILED:
                                                        t();
                                                        break;
                                                    case c.TIMEOUT_EXPIRED:
                                                        setTimeout(n, 4);
                                                        break;
                                                    default:
                                                        e()
                                                }
                                            }, 4)
                                        })), eM.bindBuffer(eM.PIXEL_PACK_BUFFER, e), eM.getBufferSubData(eM.PIXEL_PACK_BUFFER, 0, l), eM.deleteBuffer(e), eM.deleteSync(h), l
                                    }
                                    throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")
                                }
                            }, this.copyFramebufferToTexture = function(e) {
                                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                                !0 !== e.isTexture && (iM("WebGLRenderer: copyFramebufferToTexture function signature has changed."), t = arguments[0] || null, e = arguments[1]);
                                let i = Math.pow(2, -n),
                                    a = Math.floor(e.image.width * i),
                                    s = Math.floor(e.image.height * i),
                                    l = null !== t ? t.x : 0,
                                    h = null !== t ? t.y : 0;
                                o.setTexture2D(e, 0), eM.copyTexSubImage2D(eM.TEXTURE_2D, n, 0, 0, l, h, a, s), r.unbindTexture()
                            };
                            let eX = eM.createFramebuffer(),
                                ej = eM.createFramebuffer();
                            this.copyTextureToTexture = function(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                                    l = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
                                !0 !== e.isTexture && (iM("WebGLRenderer: copyTextureToTexture function signature has changed."), i = arguments[0] || null, e = arguments[1], t = arguments[2], l = arguments[3] || 0, n = null), null === l && (0 !== a ? (iM("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), l = a, a = 0) : l = 0);
                                let h, u, c, d, p, f, m, g, v, _ = e.isCompressedTexture ? e.mipmaps[l] : e.image;
                                if (null !== n) h = n.max.x - n.min.x, u = n.max.y - n.min.y, c = n.isBox3 ? n.max.z - n.min.z : 1, d = n.min.x, p = n.min.y, f = n.isBox3 ? n.min.z : 0;
                                else {
                                    let t = Math.pow(2, -a);
                                    h = Math.floor(_.width * t), u = Math.floor(_.height * t), c = e.isDataArrayTexture ? _.depth : e.isData3DTexture ? Math.floor(_.depth * t) : 1, d = 0, p = 0, f = 0
                                }
                                null !== i ? (m = i.x, g = i.y, v = i.z) : (m = 0, g = 0, v = 0);
                                let x = S.convert(t.format),
                                    M = S.convert(t.type),
                                    y;
                                t.isData3DTexture ? (o.setTexture3D(t, 0), y = eM.TEXTURE_3D) : t.isDataArrayTexture || t.isCompressedArrayTexture ? (o.setTexture2DArray(t, 0), y = eM.TEXTURE_2D_ARRAY) : (o.setTexture2D(t, 0), y = eM.TEXTURE_2D), eM.pixelStorei(eM.UNPACK_FLIP_Y_WEBGL, t.flipY), eM.pixelStorei(eM.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha), eM.pixelStorei(eM.UNPACK_ALIGNMENT, t.unpackAlignment);
                                let E = eM.getParameter(eM.UNPACK_ROW_LENGTH),
                                    b = eM.getParameter(eM.UNPACK_IMAGE_HEIGHT),
                                    T = eM.getParameter(eM.UNPACK_SKIP_PIXELS),
                                    A = eM.getParameter(eM.UNPACK_SKIP_ROWS),
                                    w = eM.getParameter(eM.UNPACK_SKIP_IMAGES);
                                eM.pixelStorei(eM.UNPACK_ROW_LENGTH, _.width), eM.pixelStorei(eM.UNPACK_IMAGE_HEIGHT, _.height), eM.pixelStorei(eM.UNPACK_SKIP_PIXELS, d), eM.pixelStorei(eM.UNPACK_SKIP_ROWS, p), eM.pixelStorei(eM.UNPACK_SKIP_IMAGES, f);
                                let R = e.isDataArrayTexture || e.isData3DTexture,
                                    C = t.isDataArrayTexture || t.isData3DTexture;
                                if (e.isDepthTexture) {
                                    let n = s.get(e),
                                        i = s.get(t),
                                        o = s.get(n.__renderTarget),
                                        _ = s.get(i.__renderTarget);
                                    r.bindFramebuffer(eM.READ_FRAMEBUFFER, o.__webglFramebuffer), r.bindFramebuffer(eM.DRAW_FRAMEBUFFER, _.__webglFramebuffer);
                                    for (let n = 0; n < c; n++) R && (eM.framebufferTextureLayer(eM.READ_FRAMEBUFFER, eM.COLOR_ATTACHMENT0, s.get(e).__webglTexture, a, f + n), eM.framebufferTextureLayer(eM.DRAW_FRAMEBUFFER, eM.COLOR_ATTACHMENT0, s.get(t).__webglTexture, l, v + n)), eM.blitFramebuffer(d, p, h, u, m, g, h, u, eM.DEPTH_BUFFER_BIT, eM.NEAREST);
                                    r.bindFramebuffer(eM.READ_FRAMEBUFFER, null), r.bindFramebuffer(eM.DRAW_FRAMEBUFFER, null)
                                } else if (0 !== a || e.isRenderTargetTexture || s.has(e)) {
                                    let n = s.get(e),
                                        i = s.get(t);
                                    r.bindFramebuffer(eM.READ_FRAMEBUFFER, eX), r.bindFramebuffer(eM.DRAW_FRAMEBUFFER, ej);
                                    for (let e = 0; e < c; e++) R ? eM.framebufferTextureLayer(eM.READ_FRAMEBUFFER, eM.COLOR_ATTACHMENT0, n.__webglTexture, a, f + e) : eM.framebufferTexture2D(eM.READ_FRAMEBUFFER, eM.COLOR_ATTACHMENT0, eM.TEXTURE_2D, n.__webglTexture, a), C ? eM.framebufferTextureLayer(eM.DRAW_FRAMEBUFFER, eM.COLOR_ATTACHMENT0, i.__webglTexture, l, v + e) : eM.framebufferTexture2D(eM.DRAW_FRAMEBUFFER, eM.COLOR_ATTACHMENT0, eM.TEXTURE_2D, i.__webglTexture, l), 0 !== a ? eM.blitFramebuffer(d, p, h, u, m, g, h, u, eM.COLOR_BUFFER_BIT, eM.NEAREST) : C ? eM.copyTexSubImage3D(y, l, m, g, v + e, d, p, h, u) : eM.copyTexSubImage2D(y, l, m, g, d, p, h, u);
                                    r.bindFramebuffer(eM.READ_FRAMEBUFFER, null), r.bindFramebuffer(eM.DRAW_FRAMEBUFFER, null)
                                } else C ? e.isDataTexture || e.isData3DTexture ? eM.texSubImage3D(y, l, m, g, v, h, u, c, x, M, _.data) : t.isCompressedArrayTexture ? eM.compressedTexSubImage3D(y, l, m, g, v, h, u, c, x, _.data) : eM.texSubImage3D(y, l, m, g, v, h, u, c, x, M, _) : e.isDataTexture ? eM.texSubImage2D(eM.TEXTURE_2D, l, m, g, h, u, x, M, _.data) : e.isCompressedTexture ? eM.compressedTexSubImage2D(eM.TEXTURE_2D, l, m, g, _.width, _.height, x, _.data) : eM.texSubImage2D(eM.TEXTURE_2D, l, m, g, h, u, x, M, _);
                                eM.pixelStorei(eM.UNPACK_ROW_LENGTH, E), eM.pixelStorei(eM.UNPACK_IMAGE_HEIGHT, b), eM.pixelStorei(eM.UNPACK_SKIP_PIXELS, T), eM.pixelStorei(eM.UNPACK_SKIP_ROWS, A), eM.pixelStorei(eM.UNPACK_SKIP_IMAGES, w), 0 === l && t.generateMipmaps && eM.generateMipmap(y), r.unbindTexture()
                            }, this.copyTextureToTexture3D = function(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                                return !0 !== e.isTexture && (iM("WebGLRenderer: copyTextureToTexture3D function signature has changed."), n = arguments[0] || null, i = arguments[1] || null, e = arguments[2], t = arguments[3], r = arguments[4] || 0), iM('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(e, t, n, i, r)
                            }, this.initRenderTarget = function(e) {
                                void 0 === s.get(e).__webglFramebuffer && o.setupRenderTarget(e)
                            }, this.initTexture = function(e) {
                                e.isCubeTexture ? o.setTextureCube(e, 0) : e.isData3DTexture ? o.setTexture3D(e, 0) : e.isDataArrayTexture || e.isCompressedArrayTexture ? o.setTexture2DArray(e, 0) : o.setTexture2D(e, 0), r.unbindTexture()
                            }, this.resetState = function() {
                                X = 0, j = 0, Y = null, r.reset(), b.reset()
                            }, "u" > typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", {
                                detail: this
                            }))
                        }
                    }
                }),
                fI = h(() => {
                    ob(), fD(), cV(), ck(), sv()
                }),
                fN = h(() => {
                    fI(), nG(), fS = null, null != Y && (console.log("%c WebGL Renderer created ", "background: #222; color: #bada55"), (fS = new fE({
                        canvas: Y,
                        antialias: !0,
                        alpha: !1,
                        stencil: !1
                    })).autoClear = !1, fS.setPixelRatio(B), fS.outputColorSpace = ny, fS.info.autoReset = !1, fS.setClearColor(0, 1), fS.debug.checkShaderErrors = N, fS.localClippingEnabled = !1), fb = fS
                }),
                fO = h(() => {
                    fI(), L(), nH(), fT = class extends s7 {
                        resize(e, t) {
                            this.left = -e / 2, this.right = e / 2, this.bottom = -t / 2, this.top = t / 2, this.updateProjectionMatrix()
                        }
                        constructor(e = -1, t = 1, n = 1, i = -1, r = .1, a = 2e3, s, o) {
                            super(e, t, n, i, r, a), this.position.copy(s), this.zoom = o, this.resizeEvent = this.resize.bind(this), R.on(ef.RESIZE, this.resizeEvent)
                        }
                    }
                }),
                fF = h(() => {
                    fO(), L(), nH(), nW(), fA = new class {
                        set current(e) {
                            this._current = e
                        }
                        get current() {
                            return this._current
                        }
                        update() {
                            ev.currentConfig.camera.value.position.value.x = this.current.position.x, ev.currentConfig.camera.value.position.value.y = this.current.position.y, ev.currentConfig.camera.value.position.value.z = this.current.position.z, this.current.position.z = ev.currentConfig.camera.value.position.value.z, this.current.zoom = ev.currentConfig.camera.value.zoom.value, this.current.updateProjectionMatrix(), ev.currentConfig.camera.value.far.value = this.current.far
                        }
                        addEvents() {
                            R.on(ef.PRE_UPDATE, this.update.bind(this))
                        }
                        constructor() {
                            var e = ev.currentConfig.camera.value.position.value,
                                t = ev.currentConfig.camera.value.zoom.value,
                                n = ev.currentConfig.camera.value.far.value;
                            this.cameraPool = {
                                main: new fT(1, 1, 1, 1, .001, n, e, t)
                            }, this.camera = null, this._current = this.cameraPool.main, this.current.zoom = ev.currentConfig.camera.value.zoom.value, this.addEvents()
                        }
                    }
                }),
                fB = h(() => {
                    fw = function(e, t, n) {
                        return e === t ? n <= e ? 0 : 1 : Math.max(0, Math.min(1, (n - e) / (t - e)))
                    }
                }),
                fz = h(() => {
                    fI(), fR = new i2, fC = new iV, fU = class extends oe {
                        applyMatrix4(e) {
                            let t = this.attributes.instanceStart,
                                n = this.attributes.instanceEnd;
                            return void 0 !== t && (t.applyMatrix4(e), n.applyMatrix4(e), t.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
                        }
                        setPositions(e) {
                            let t;
                            e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
                            let n = new on(t, 6, 1);
                            return this.setAttribute("instanceStart", new ss(n, 3, 0)), this.setAttribute("instanceEnd", new ss(n, 3, 3)), this.instanceCount = this.attributes.instanceStart.count, this.computeBoundingBox(), this.computeBoundingSphere(), this
                        }
                        setColors(e) {
                            let t;
                            e instanceof Float32Array ? t = e : Array.isArray(e) && (t = new Float32Array(e));
                            let n = new on(t, 6, 1);
                            return this.setAttribute("instanceColorStart", new ss(n, 3, 0)), this.setAttribute("instanceColorEnd", new ss(n, 3, 3)), this
                        }
                        fromWireframeGeometry(e) {
                            return this.setPositions(e.attributes.position.array), this
                        }
                        fromEdgesGeometry(e) {
                            return this.setPositions(e.attributes.position.array), this
                        }
                        fromMesh(e) {
                            return this.fromWireframeGeometry(new s1(e.geometry)), this
                        }
                        fromLineSegments(e) {
                            let t = e.geometry;
                            return this.setPositions(t.attributes.position.array), this
                        }
                        computeBoundingBox() {
                            null === this.boundingBox && (this.boundingBox = new i2);
                            let e = this.attributes.instanceStart,
                                t = this.attributes.instanceEnd;
                            void 0 !== e && void 0 !== t && (this.boundingBox.setFromBufferAttribute(e), fR.setFromBufferAttribute(t), this.boundingBox.union(fR))
                        }
                        computeBoundingSphere() {
                            null === this.boundingSphere && (this.boundingSphere = new rh), null === this.boundingBox && this.computeBoundingBox();
                            let e = this.attributes.instanceStart,
                                t = this.attributes.instanceEnd;
                            if (void 0 !== e && void 0 !== t) {
                                let n = this.boundingSphere.center;
                                this.boundingBox.getCenter(n);
                                let i = 0;
                                for (let r = 0, a = e.count; r < a; r++) fC.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(fC)), fC.fromBufferAttribute(t, r), i = Math.max(i, n.distanceToSquared(fC));
                                this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.", this)
                            }
                        }
                        toJSON() {}
                        applyMatrix(e) {
                            return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."), this.applyMatrix4(e)
                        }
                        constructor() {
                            super(), this.isLineSegmentsGeometry = !0, this.type = "LineSegmentsGeometry", this.setIndex([0, 2, 1, 2, 3, 1, 2, 4, 3, 4, 5, 3, 4, 6, 5, 6, 7, 5]), this.setAttribute("position", new ax([-1, 2, 0, 1, 2, 0, -1, 1, 0, 1, 1, 0, -1, 0, 0, 1, 0, 0, -1, -1, 0, 1, -1, 0], 3)), this.setAttribute("uv", new ax([-1, 2, 1, 2, -1, 1, 1, 1, -1, -1, 1, -1, -1, -2, 1, -2], 2))
                        }
                    }
                }),
                fG = h(() => {
                    fI(), hk.line = {
                        worldUnits: {
                            value: 1
                        },
                        linewidth: {
                            value: 1
                        },
                        resolution: {
                            value: new ic(1, 1)
                        },
                        dashOffset: {
                            value: 0
                        },
                        dashScale: {
                            value: 1
                        },
                        dashSize: {
                            value: 1
                        },
                        gapSize: {
                            value: 1
                        }
                    }, hV.line = {
                        uniforms: aQ.merge([hk.common, hk.fog, hk.line]),
                        vertexShader: "\n		#include <common>\n		#include <color_pars_vertex>\n		#include <fog_pars_vertex>\n		#include <logdepthbuf_pars_vertex>\n		#include <clipping_planes_pars_vertex>\n\n		uniform float linewidth;\n		uniform vec2 resolution;\n\n		attribute vec3 instanceStart;\n		attribute vec3 instanceEnd;\n\n		attribute vec3 instanceColorStart;\n		attribute vec3 instanceColorEnd;\n\n		#ifdef WORLD_UNITS\n\n			varying vec4 worldPos;\n			varying vec3 worldStart;\n			varying vec3 worldEnd;\n\n			#ifdef USE_DASH\n\n				varying vec2 vUv;\n\n			#endif\n\n		#else\n\n			varying vec2 vUv;\n\n		#endif\n\n		#ifdef USE_DASH\n\n			uniform float dashScale;\n			attribute float instanceDistanceStart;\n			attribute float instanceDistanceEnd;\n			varying float vLineDistance;\n\n		#endif\n\n		void trimSegment( const in vec4 start, inout vec4 end ) {\n\n			// trim end segment so it terminates between the camera plane and the near plane\n\n			// conservative estimate of the near plane\n			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column\n			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column\n			float nearEstimate = - 0.5 * b / a;\n\n			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );\n\n			end.xyz = mix( start.xyz, end.xyz, alpha );\n\n		}\n\n		void main() {\n\n			#ifdef USE_COLOR\n\n				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;\n\n			#endif\n\n			#ifdef USE_DASH\n\n				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;\n				vUv = uv;\n\n			#endif\n\n			float aspect = resolution.x / resolution.y;\n\n			// camera space\n			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );\n			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );\n\n			#ifdef WORLD_UNITS\n\n				worldStart = start.xyz;\n				worldEnd = end.xyz;\n\n			#else\n\n				vUv = uv;\n\n			#endif\n\n			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane\n			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space\n			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly\n			// perhaps there is a more elegant solution -- WestLangley\n\n			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column\n\n			if ( perspective ) {\n\n				if ( start.z < 0.0 && end.z >= 0.0 ) {\n\n					trimSegment( start, end );\n\n				} else if ( end.z < 0.0 && start.z >= 0.0 ) {\n\n					trimSegment( end, start );\n\n				}\n\n			}\n\n			// clip space\n			vec4 clipStart = projectionMatrix * start;\n			vec4 clipEnd = projectionMatrix * end;\n\n			// ndc space\n			vec3 ndcStart = clipStart.xyz / clipStart.w;\n			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;\n\n			// direction\n			vec2 dir = ndcEnd.xy - ndcStart.xy;\n\n			// account for clip-space aspect ratio\n			dir.x *= aspect;\n			dir = normalize( dir );\n\n			#ifdef WORLD_UNITS\n\n				vec3 worldDir = normalize( end.xyz - start.xyz );\n				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );\n				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );\n				vec3 worldFwd = cross( worldDir, worldUp );\n				worldPos = position.y < 0.5 ? start: end;\n\n				// height offset\n				float hw = linewidth * 0.5;\n				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;\n\n				// don't extend the line if we're rendering dashes because we\n				// won't be rendering the endcaps\n				#ifndef USE_DASH\n\n					// cap extension\n					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;\n\n					// add width to the box\n					worldPos.xyz += worldFwd * hw;\n\n					// endcaps\n					if ( position.y > 1.0 || position.y < 0.0 ) {\n\n						worldPos.xyz -= worldFwd * 2.0 * hw;\n\n					}\n\n				#endif\n\n				// project the worldpos\n				vec4 clip = projectionMatrix * worldPos;\n\n				// shift the depth of the projected points so the line\n				// segments overlap neatly\n				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;\n				clip.z = clipPose.z * clip.w;\n\n			#else\n\n				vec2 offset = vec2( dir.y, - dir.x );\n				// undo aspect ratio adjustment\n				dir.x /= aspect;\n				offset.x /= aspect;\n\n				// sign flip\n				if ( position.x < 0.0 ) offset *= - 1.0;\n\n				// endcaps\n				if ( position.y < 0.0 ) {\n\n					offset += - dir;\n\n				} else if ( position.y > 1.0 ) {\n\n					offset += dir;\n\n				}\n\n				// adjust for linewidth\n				offset *= linewidth;\n\n				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...\n				offset /= resolution.y;\n\n				// select end\n				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;\n\n				// back to clip space\n				offset *= clip.w;\n\n				clip.xy += offset;\n\n			#endif\n\n			gl_Position = clip;\n\n			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation\n\n			#include <logdepthbuf_vertex>\n			#include <clipping_planes_vertex>\n			#include <fog_vertex>\n\n		}\n		",
                        fragmentShader: "\n		uniform vec3 diffuse;\n		uniform float opacity;\n		uniform float linewidth;\n\n		#ifdef USE_DASH\n\n			uniform float dashOffset;\n			uniform float dashSize;\n			uniform float gapSize;\n\n		#endif\n\n		varying float vLineDistance;\n\n		#ifdef WORLD_UNITS\n\n			varying vec4 worldPos;\n			varying vec3 worldStart;\n			varying vec3 worldEnd;\n\n			#ifdef USE_DASH\n\n				varying vec2 vUv;\n\n			#endif\n\n		#else\n\n			varying vec2 vUv;\n\n		#endif\n\n		#include <common>\n		#include <color_pars_fragment>\n		#include <fog_pars_fragment>\n		#include <logdepthbuf_pars_fragment>\n		#include <clipping_planes_pars_fragment>\n\n		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {\n\n			float mua;\n			float mub;\n\n			vec3 p13 = p1 - p3;\n			vec3 p43 = p4 - p3;\n\n			vec3 p21 = p2 - p1;\n\n			float d1343 = dot( p13, p43 );\n			float d4321 = dot( p43, p21 );\n			float d1321 = dot( p13, p21 );\n			float d4343 = dot( p43, p43 );\n			float d2121 = dot( p21, p21 );\n\n			float denom = d2121 * d4343 - d4321 * d4321;\n\n			float numer = d1343 * d4321 - d1321 * d4343;\n\n			mua = numer / denom;\n			mua = clamp( mua, 0.0, 1.0 );\n			mub = ( d1343 + d4321 * ( mua ) ) / d4343;\n			mub = clamp( mub, 0.0, 1.0 );\n\n			return vec2( mua, mub );\n\n		}\n\n		void main() {\n\n			#include <clipping_planes_fragment>\n\n			#ifdef USE_DASH\n\n				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps\n\n				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX\n\n			#endif\n\n			float alpha = opacity;\n\n			#ifdef WORLD_UNITS\n\n				// Find the closest points on the view ray and the line segment\n				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;\n				vec3 lineDir = worldEnd - worldStart;\n				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );\n\n				vec3 p1 = worldStart + lineDir * params.x;\n				vec3 p2 = rayEnd * params.y;\n				vec3 delta = p1 - p2;\n				float len = length( delta );\n				float norm = len / linewidth;\n\n				#ifndef USE_DASH\n\n					#ifdef USE_ALPHA_TO_COVERAGE\n\n						float dnorm = fwidth( norm );\n						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );\n\n					#else\n\n						if ( norm > 0.5 ) {\n\n							discard;\n\n						}\n\n					#endif\n\n				#endif\n\n			#else\n\n				#ifdef USE_ALPHA_TO_COVERAGE\n\n					// artifacts appear on some hardware if a derivative is taken within a conditional\n					float a = vUv.x;\n					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;\n					float len2 = a * a + b * b;\n					float dlen = fwidth( len2 );\n\n					if ( abs( vUv.y ) > 1.0 ) {\n\n						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );\n\n					}\n\n				#else\n\n					if ( abs( vUv.y ) > 1.0 ) {\n\n						float a = vUv.x;\n						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;\n						float len2 = a * a + b * b;\n\n						if ( len2 > 1.0 ) discard;\n\n					}\n\n				#endif\n\n			#endif\n\n			vec4 diffuseColor = vec4( diffuse, alpha );\n\n			#include <logdepthbuf_fragment>\n			#include <color_fragment>\n\n			gl_FragColor = vec4( diffuseColor.rgb, alpha );\n\n			#include <tonemapping_fragment>\n			#include <colorspace_fragment>\n			#include <fog_fragment>\n			#include <premultiplied_alpha_fragment>\n\n		}\n		"
                    }, fP = class extends a1 {
                        get color() {
                            return this.uniforms.diffuse.value
                        }
                        set color(e) {
                            this.uniforms.diffuse.value = e
                        }
                        get worldUnits() {
                            return "WORLD_UNITS" in this.defines
                        }
                        set worldUnits(e) {
                            !0 === e ? this.defines.WORLD_UNITS = "" : delete this.defines.WORLD_UNITS
                        }
                        get linewidth() {
                            return this.uniforms.linewidth.value
                        }
                        set linewidth(e) {
                            this.uniforms.linewidth && (this.uniforms.linewidth.value = e)
                        }
                        get dashed() {
                            return "USE_DASH" in this.defines
                        }
                        set dashed(e) {
                            !0 === e !== this.dashed && (this.needsUpdate = !0), !0 === e ? this.defines.USE_DASH = "" : delete this.defines.USE_DASH
                        }
                        get dashScale() {
                            return this.uniforms.dashScale.value
                        }
                        set dashScale(e) {
                            this.uniforms.dashScale.value = e
                        }
                        get dashSize() {
                            return this.uniforms.dashSize.value
                        }
                        set dashSize(e) {
                            this.uniforms.dashSize.value = e
                        }
                        get dashOffset() {
                            return this.uniforms.dashOffset.value
                        }
                        set dashOffset(e) {
                            this.uniforms.dashOffset.value = e
                        }
                        get gapSize() {
                            return this.uniforms.gapSize.value
                        }
                        set gapSize(e) {
                            this.uniforms.gapSize.value = e
                        }
                        get opacity() {
                            return this.uniforms.opacity.value
                        }
                        set opacity(e) {
                            this.uniforms && (this.uniforms.opacity.value = e)
                        }
                        get resolution() {
                            return this.uniforms.resolution.value
                        }
                        set resolution(e) {
                            this.uniforms.resolution.value.copy(e)
                        }
                        get alphaToCoverage() {
                            return "USE_ALPHA_TO_COVERAGE" in this.defines
                        }
                        set alphaToCoverage(e) {
                            this.defines && (!0 === e !== this.alphaToCoverage && (this.needsUpdate = !0), !0 === e ? this.defines.USE_ALPHA_TO_COVERAGE = "" : delete this.defines.USE_ALPHA_TO_COVERAGE)
                        }
                        constructor(e) {
                            super({
                                type: "LineMaterial",
                                uniforms: aQ.clone(hV.line.uniforms),
                                vertexShader: hV.line.vertexShader,
                                fragmentShader: hV.line.fragmentShader,
                                clipping: !0
                            }), this.isLineMaterial = !0, this.setValues(e)
                        }
                    }
                });

            function fH(e, t, n) {
                return f0.set(0, 0, -t, 1).applyMatrix4(e.projectionMatrix), f0.multiplyScalar(1 / f0.w), f0.x = f2 / n.width, f0.y = f2 / n.height, f0.applyMatrix4(e.projectionMatrixInverse), f0.multiplyScalar(1 / f0.w), Math.abs(Math.max(f0.x, f0.y))
            }
            var fk, fV, fW, fX, fj, fY, fq, fK, fZ, fJ, fQ, f$, f0, f1, f2, f3, f4, f5, f6, f8, f9, f7, me, mt, mn, mi, mr, ma, ms, mo, ml = h(() => {
                    fI(), fz(), fG(), fk = new iF, fV = new iV, fW = new iV, fX = new iF, fj = new iF, fY = new iF, fq = new iV, fK = new r_, fZ = new oa, fJ = new iV, fQ = new i2, f$ = new rh, f0 = new iF, f3 = class extends aX {
                        computeLineDistances() {
                            let e = this.geometry,
                                t = e.attributes.instanceStart,
                                n = e.attributes.instanceEnd,
                                i = new Float32Array(2 * t.count);
                            for (let e = 0, r = 0, a = t.count; e < a; e++, r += 2) fV.fromBufferAttribute(t, e), fW.fromBufferAttribute(n, e), i[r] = 0 === r ? 0 : i[r - 1], i[r + 1] = i[r] + fV.distanceTo(fW);
                            let r = new on(i, 2, 1);
                            return e.setAttribute("instanceDistanceStart", new ss(r, 1, 0)), e.setAttribute("instanceDistanceEnd", new ss(r, 1, 1)), this
                        }
                        raycast(e, t) {
                            let n, i, r = this.material.worldUnits,
                                a = e.camera;
                            null !== a || r || console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');
                            let s = void 0 !== e.params.Line2 && e.params.Line2.threshold || 0;
                            f1 = e.ray;
                            let o = this.matrixWorld,
                                l = this.geometry,
                                h = this.material;
                            if (f2 = h.linewidth + s, null === l.boundingSphere && l.computeBoundingSphere(), f$.copy(l.boundingSphere).applyMatrix4(o), r) n = .5 * f2;
                            else {
                                let e = Math.max(a.near, f$.distanceToPoint(f1.origin));
                                n = fH(a, e, h.resolution)
                            }
                            if (f$.radius += n, !1 !== f1.intersectsSphere(f$)) {
                                if (null === l.boundingBox && l.computeBoundingBox(), fQ.copy(l.boundingBox).applyMatrix4(o), r) i = .5 * f2;
                                else {
                                    let e = Math.max(a.near, fQ.distanceToPoint(f1.origin));
                                    i = fH(a, e, h.resolution)
                                }
                                fQ.expandByScalar(i), !1 !== f1.intersectsBox(fQ) && (r ? function(e, t) {
                                    let n = e.matrixWorld,
                                        i = e.geometry,
                                        r = i.attributes.instanceStart,
                                        a = i.attributes.instanceEnd,
                                        s = Math.min(i.instanceCount, r.count);
                                    for (let i = 0; i < s; i++) {
                                        fZ.start.fromBufferAttribute(r, i), fZ.end.fromBufferAttribute(a, i), fZ.applyMatrix4(n);
                                        let s = new iV,
                                            o = new iV;
                                        f1.distanceSqToSegment(fZ.start, fZ.end, o, s), o.distanceTo(s) < .5 * f2 && t.push({
                                            point: o,
                                            pointOnLine: s,
                                            distance: f1.origin.distanceTo(o),
                                            object: e,
                                            face: null,
                                            faceIndex: i,
                                            uv: null,
                                            uv1: null
                                        })
                                    }
                                }(this, t) : function(e, t, n) {
                                    let i = t.projectionMatrix,
                                        r = e.material.resolution,
                                        a = e.matrixWorld,
                                        s = e.geometry,
                                        o = s.attributes.instanceStart,
                                        l = s.attributes.instanceEnd,
                                        h = Math.min(s.instanceCount, o.count),
                                        u = -t.near;
                                    f1.at(1, fY), fY.w = 1, fY.applyMatrix4(t.matrixWorldInverse), fY.applyMatrix4(i), fY.multiplyScalar(1 / fY.w), fY.x *= r.x / 2, fY.y *= r.y / 2, fY.z = 0, fq.copy(fY), fK.multiplyMatrices(t.matrixWorldInverse, a);
                                    for (let t = 0; t < h; t++) {
                                        if (fX.fromBufferAttribute(o, t), fj.fromBufferAttribute(l, t), fX.w = 1, fj.w = 1, fX.applyMatrix4(fK), fj.applyMatrix4(fK), fX.z > u && fj.z > u) continue;
                                        if (fX.z > u) {
                                            let e = fX.z - fj.z,
                                                t = (fX.z - u) / e;
                                            fX.lerp(fj, t)
                                        } else if (fj.z > u) {
                                            let e = fj.z - fX.z,
                                                t = (fj.z - u) / e;
                                            fj.lerp(fX, t)
                                        }
                                        fX.applyMatrix4(i), fj.applyMatrix4(i), fX.multiplyScalar(1 / fX.w), fj.multiplyScalar(1 / fj.w), fX.x *= r.x / 2, fX.y *= r.y / 2, fj.x *= r.x / 2, fj.y *= r.y / 2, fZ.start.copy(fX), fZ.start.z = 0, fZ.end.copy(fj), fZ.end.z = 0;
                                        let s = fZ.closestPointToPointParameter(fq, !0);
                                        fZ.at(s, fJ);
                                        let h = iu.lerp(fX.z, fj.z, s),
                                            c = h >= -1 && h <= 1,
                                            d = fq.distanceTo(fJ) < .5 * f2;
                                        if (c && d) {
                                            fZ.start.fromBufferAttribute(o, t), fZ.end.fromBufferAttribute(l, t), fZ.start.applyMatrix4(a), fZ.end.applyMatrix4(a);
                                            let i = new iV,
                                                r = new iV;
                                            f1.distanceSqToSegment(fZ.start, fZ.end, r, i), n.push({
                                                point: r,
                                                pointOnLine: i,
                                                distance: f1.origin.distanceTo(r),
                                                object: e,
                                                face: null,
                                                faceIndex: t,
                                                uv: null,
                                                uv1: null
                                            })
                                        }
                                    }
                                }(this, a, t))
                            }
                        }
                        onBeforeRender(e) {
                            let t = this.material.uniforms;
                            t && t.resolution && (e.getViewport(fk), this.material.uniforms.resolution.value.set(fk.z, fk.w))
                        }
                        constructor(e = new fU, t = new fP({
                            color: 0xffffff * Math.random()
                        })) {
                            super(e, t), this.isLineSegments2 = !0, this.type = "LineSegments2"
                        }
                    }
                }),
                mh = h(() => {
                    fz(), f4 = class extends fU {
                        setPositions(e) {
                            let t = e.length - 3,
                                n = new Float32Array(2 * t);
                            for (let i = 0; i < t; i += 3) n[2 * i] = e[i], n[2 * i + 1] = e[i + 1], n[2 * i + 2] = e[i + 2], n[2 * i + 3] = e[i + 3], n[2 * i + 4] = e[i + 4], n[2 * i + 5] = e[i + 5];
                            return super.setPositions(n), this
                        }
                        setColors(e) {
                            let t = e.length - 3,
                                n = new Float32Array(2 * t);
                            for (let i = 0; i < t; i += 3) n[2 * i] = e[i], n[2 * i + 1] = e[i + 1], n[2 * i + 2] = e[i + 2], n[2 * i + 3] = e[i + 3], n[2 * i + 4] = e[i + 4], n[2 * i + 5] = e[i + 5];
                            return super.setColors(n), this
                        }
                        setFromPoints(e) {
                            let t = e.length - 1,
                                n = new Float32Array(6 * t);
                            for (let i = 0; i < t; i++) n[6 * i] = e[i].x, n[6 * i + 1] = e[i].y, n[6 * i + 2] = e[i].z || 0, n[6 * i + 3] = e[i + 1].x, n[6 * i + 4] = e[i + 1].y, n[6 * i + 5] = e[i + 1].z || 0;
                            return super.setPositions(n), this
                        }
                        fromLine(e) {
                            let t = e.geometry;
                            return this.setPositions(t.attributes.position.array), this
                        }
                        constructor() {
                            super(), this.isLineGeometry = !0, this.type = "LineGeometry"
                        }
                    }
                }),
                mu = h(() => {
                    ml(), mh(), fG(), f5 = class extends f3 {
                        constructor(e = new f4, t = new fP({
                            color: 0xffffff * Math.random()
                        })) {
                            super(e, t), this.isLine2 = !0, this.type = "Line2"
                        }
                    }
                }),
                mc = h(() => {
                    f6 = function(e, t, n) {
                        return e * (1 - n) + t * n
                    }
                }),
                md = h(() => {
                    fI(), f8 = new class extends aw {
                        constructor() {
                            super(), this.setIndex([2, 1, 0]), this.setAttribute("position", new ax([-1, -1, 0, -1, 4, 0, 4, -1, 0], 3)), this.needsUpdate = !0
                        }
                    }
                }),
                mp = h(() => {
                    f9 = "#define GLSLIFY 1\nvarying vec2 vUv;void main(){vec2 uv=position.xy*0.5+0.5;vUv=uv;gl_Position=vec4(position,1.0);}"
                }),
                mf = h(() => {
                    f7 = "#define GLSLIFY 1\nuniform sampler2D tInput;uniform vec2 direction;varying vec2 vUv;uniform vec2 resolution;vec4 blur13(sampler2D image,vec2 uv,vec2 direction){vec4 color=vec4(0.0);vec2 off1=vec2(1.411764705882353)*direction;vec2 off2=vec2(3.2941176470588234)*direction;vec2 off3=vec2(5.176470588235294)*direction;color+=texture2D(image,uv)*0.1964825501511404;color+=texture2D(image,uv+(off1/resolution))*0.2969069646728344;color+=texture2D(image,uv-(off1/resolution))*0.2969069646728344;color+=texture2D(image,uv+(off2/resolution))*0.09447039785044732;color+=texture2D(image,uv-(off2/resolution))*0.09447039785044732;color+=texture2D(image,uv+(off3/resolution))*0.010381362401148057;color+=texture2D(image,uv-(off3/resolution))*0.010381362401148057;color=min(color,vec4(1.0));return color;}void main(){vec2 uv=vUv;gl_FragColor=blur13(tInput,vUv,direction);}"
                }),
                mm = h(() => {
                    md(), fI(), mp(), mf(), fN(), me = class {
                        ensureRenderTargets(e) {
                            this.tempY || (this.tempY = new iz(e.width, e.height), this.needsOutputGeneration && (this.outputSize ? this.output = new iz(this.outputSize.width, this.outputSize.height) : this.output = new iz(e.width, e.height))), this.tempY.height !== e.height && (this.tempY.setSize(e.width, e.height), this.output && (this.outputSize ? this.output.setSize(this.outputSize.width, this.outputSize.height) : this.output.setSize(e.width, e.height)))
                        }
                        blur(e) {
                            var t;
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                            this.ensureRenderTargets(e);
                            let i = fb.autoClear;
                            fb.autoClear = !1;
                            let r = fb.getRenderTarget(),
                                a = fb.shadowMap.autoUpdate;
                            fb.shadowMap.autoUpdate = !1, this.blurMaterial.uniforms.direction.value.set(0, n), this.blurMaterial.uniforms.tInput.value = null !== (t = e.texture) && void 0 !== t ? t : e, fb.setRenderTarget(this.tempY), fb.render(this.scene, this.camera), this.blurMaterial.uniforms.direction.value.set(n, 0), this.blurMaterial.uniforms.tInput.value = this.tempY.texture, this.output ? fb.setRenderTarget(this.output) : fb.setRenderTarget(e), fb.render(this.scene, this.camera), fb.setRenderTarget(r), fb.autoClear = i, fb.shadowMap.autoUpdate = a
                        }
                        resize(e) {
                            this.blurMaterial.uniforms.resolution.value.set(e.width, e.height)
                        }
                        dispose() {
                            this.tempY && this.tempY.dispose(), this.blurMaterial.dispose()
                        }
                        constructor(e = {}) {
                            this.blurMaterial = new a1({
                                vertexShader: f9,
                                fragmentShader: f7,
                                uniforms: {
                                    tInput: {
                                        value: null
                                    },
                                    direction: {
                                        value: new ic(0, 0)
                                    },
                                    resolution: {
                                        value: new ic(0, 0)
                                    }
                                },
                                depthTest: !1,
                                depthWrite: !1
                            }), this.camera = new a2, this.mesh = new aX(f8, this.blurMaterial), this.mesh.frustumCulled = !1, this.mesh.matrixAutoUpdate = !1, this.scene = new si, this.scene.matrixWorldAutoUpdate = !1, this.scene.add(this.mesh), this.tempY = null, this.needsOutputGeneration = e.generatOutput, this.outputSize = e.outputSize, e.input && this.ensureRenderTargets(e.input)
                        }
                    }
                }),
                mg = ((e, t) => () => (t || e((t = {
                    exports: {}
                }).exports, t), t.exports))(() => {}),
                mv = h(() => {
                    fI(), fN(), fF(), nG(), mt = c(mg()), nH(), L(), nG(), mn = {
                        autoUpdate: !0,
                        autoResize: !0
                    }, mi = new al, mr = class extends iz {
                        update() {
                            let e = fb.getRenderTarget();
                            fb.setRenderTarget(this), fb.getClearColor(mi), this.clearColor && fb.setClearColor(this.clearColor.color, this.clearColor.alpha), fb.clear(), fb.render(this.scene, this.camera), fb.setRenderTarget(e), fb.setClearColor(mi, 1)
                        }
                        resize(e, t) {
                            O && (mt.default.detach(this), mt.default.attach(this, "noise offline"), mt.default.update())
                        }
                        addEvents() {
                            this.opts.autoUpdate && R.on(ef.PRE_UPDATE, this.update.bind(this)), this.opts.autoResize && R.on(ef.RESIZE, this.resize.bind(this))
                        }
                        constructor(e, t = {}) {
                            super(500, 500, {
                                type: tP
                            }), this.camera = fA.current, t.camera && (this.camera = t.camera), this.opts = Object.assign(mn, t), this.scene = e, this.generateMipmaps = !1, t.clearColor && (this.clearColor = t.clearColor), this.addEvents(), this.update()
                        }
                    }
                }),
                m_ = h(() => {
                    fI(), (ma = new aw).setIndex([2, 1, 0]), ma.setAttribute("position", new ax([-1, -1, 0, -1, 4, 0, 4, -1, 0], 3)), ms = ma
                }),
                mx = h(() => {
                    L(), nG(), fI(), nH(), mo = new class {
                        constructor() {
                            this.mouse = {
                                value: new ic(0, 0)
                            }, this.timer = {
                                value: 0
                            }, this.DPI = {
                                value: B
                            }, this.resY = {
                                value: 0
                            }, this.aspect = {
                                value: 1
                            }, this.resolution = {
                                value: new ic
                            }, this.audioSum = {
                                value: 0
                            }, this.audioSumRatio = {
                                value: 0
                            }, this.cumulativeAudioSumRatio = {
                                value: es
                            }, this.immediateSumRatio = {
                                value: er
                            }, this.idleRatio = {
                                value: 0
                            }, this.aiRatio = {
                                value: 0
                            }, this.aiRatioLerp = {
                                value: 0
                            }, this.userRatio = {
                                value: 0
                            }, this.userRatioLerp = {
                                value: 0
                            }, this.idleRatioLerp = {
                                value: 0
                            }, this.appDelta = {
                                value: 0
                            }, this.accimmediateSumRatio = {
                                value: 0
                            }, this.accAudioSumRatio = {
                                value: 0
                            }, this.accUserSumRatio = {
                                value: 0
                            }, R.on(ef.RESIZE, (e, t) => {
                                this.aspect.value = e / t, this.DPI.value = B, this.resolution.value.x = e * B, this.resolution.value.y = t * B
                            }), R.on(ef.PRE_UPDATE, e => {
                                this.timer.value += e, this.appDelta.value = 100 * Math.min(e, .3), this.audioSum.value += er, this.audioSumRatio.value = this.audioSumRatio.value * e + en * (1 - e), this.accAudioSumRatio.value += this.audioSumRatio.value, this.immediateSumRatio.value = en, this.accimmediateSumRatio.value += this.immediateSumRatio.value, this.idleRatio.value = et.IDLE == $ ? 1 : 0, this.aiRatio.value = et.AI == $ ? 1 : 0, this.userRatio.value = et.USER == $ ? 1 : 0;
                                let t = Math.min(3 * e, .3);
                                this.idleRatioLerp.value = this.idleRatioLerp.value * (1 - t) + this.idleRatio.value * t, this.aiRatioLerp.value = this.aiRatioLerp.value * (1 - t) + this.aiRatio.value * t, this.userRatioLerp.value = this.userRatioLerp.value * (1 - t) + this.userRatio.value * t, this.accUserSumRatio.value = el
                            })
                        }
                    }
                });
            async function mM(e) {
                return mE.loadAsync(e)
            }

            function my(e) {
                let t = e.x,
                    n = e.y,
                    i = H.w,
                    r = H.h,
                    a = fA.current.zoom;
                return {
                    x: i / a * (t / i * 2 - 1) / 2,
                    y: r / a * (-(n / r * 2) + 1) / 2
                }
            }
            var mE, mS, mb, mT, mA, mw, mR = h(() => {
                    fI(), nG(), fF(), mE = new s9
                }),
                mC = h(() => {
                    fI(), L(), nH(), fN(), nW(), fF(), nG(), fB(), mu(), fG(), mh(), mc(), mm(), mv(), m_(), mx(), mR(), mS = new al, mb = new al, mT = class extends se {
                        async preload() {
                            await this.createScene(), this.addEvents()
                        }
                        async setState(e, t) {}
                        async createScene() {
                            this.blurPass = new me, this.gradientMesh = this.createGradientMesh(), this.offline = new mr(this.gradientMesh, {
                                autoUpdate: !1,
                                autoResize: !1
                            }), this.blurOffline();
                            let e = new sm(1, 64),
                                t = new a1({
                                    uniforms: {
                                        map: {
                                            value: this.offline.texture
                                        },
                                        colorMixer: {
                                            value: 0
                                        },
                                        gradientMixer: {
                                            value: 0
                                        },
                                        color: {
                                            value: new al(0xff0000)
                                        }
                                    },
                                    vertexShader: "\n                varying vec2 vUv;\n                void main() {\n                    vUv = uv;\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n                }\n            ",
                                    fragmentShader: "\n                uniform sampler2D map;\n                varying vec2 vUv;\n                uniform float colorMixer;\n\n                uniform float gradientMixer;\n\n                uniform vec3 color;\n\n                void main() {\n\n                    vec3 texColor = texture2D( map, vUv ).rgb;\n                    gl_FragColor = vec4(\n\n                        mix( color, texColor, colorMixer * gradientMixer ),\n\n                    1.0);\n                    #include <colorspace_fragment>\n                }\n            "
                                });
                            this.ringBase = new aX(e, t), this.add(this.ringBase);
                            let n = new ad({
                                transparent: !0
                            });
                            this.outerRing = new aX(e, n), this.outerRing.scale.set(1.5, 1.5, 1.5), this.add(this.outerRing), this.outerRing.position.z = -1;
                            let i = [],
                                r = [],
                                a = 2 * Math.PI;
                            for (let e = 0; e < 100; e++) {
                                let t = 1 * Math.sin(e / 100 * a),
                                    n = 1 * Math.cos(e / 100 * a);
                                0 == e && (r = [t, n, 0]), i.push(t), i.push(n), i.push(0)
                            }
                            i.push(r[0], r[1], r[2]);
                            let s = new f4;
                            s.setPositions(i), this.linegeometry = s;
                            let o = await mM(K),
                                l = o.source.data.width / o.source.data.height;
                            o.anisotropy = fb.capabilities.getMaxAnisotropy(), o.needsUpdate = !0, this.textMesh = new aX(new sg(1, 1), new ad({
                                alphaTest: 0,
                                transparent: !0,
                                map: o
                            })), this.textMesh.geometry.computeBoundingBox(), this.textMesh.scaleRatio = l, this.nameTexs = {
                                maya: await mM(J.maya),
                                miles: await mM(J.miles)
                            }, this.textNameMesh = new aX(new sg(1, 1), new ad({
                                alphaTest: 0,
                                transparent: !0,
                                map: o
                            })), this.textNameMesh.geometry.computeBoundingBox(), this.textNameMesh.scaleRatio = l, this.add(this.textMesh), this.add(this.textNameMesh)
                        }
                        connect() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                            return this.state = "connected", this.connectionDuration = 1 / e, new Promise(e => {
                                this.stateResolve = e
                            })
                        }
                        disconnect() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                            return this.state = "disconnected", this.connectionDuration = 1 / e, new Promise(e => {
                                this.stateResolve = e
                            })
                        }
                        update(e) {
                            let t = ev.currentConfig.preset.value.preset.value;
                            if (this.textNameMesh.material.map = this.nameTexs[t], this.textNameMesh.scaleRatio = this.nameTexs[t].source.data.width / this.nameTexs[t].source.data.height, this.textMesh) {
                                if ((ev.currentConfig.text.value.position.value.x != this.defaultTextPosition.x || ev.currentConfig.text.value.position.value.y != this.defaultTextPosition.y) && (this.defaultTextPosition.moved = !0), this.defaultTextPosition.moved) {
                                    this.textMesh.visible = !0;
                                    let e = my(ev.currentConfig.text.value.position.value);
                                    this.textMesh.position.x = e.x, this.textMesh.position.y = e.y, this.textMesh.scale.x = this.textMesh.scaleRatio * ev.currentConfig.text.value.scale.value, this.textMesh.scale.y = ev.currentConfig.text.value.scale.value, this.textMesh.scale.multiplyScalar(1 / fA.current.zoom)
                                } else this.textMesh.visible = !1
                            }
                            if (this.textNameMesh) {
                                if ((ev.currentConfig.nameText.value.position.value.x != this.defaultTextMeshPosition.x || ev.currentConfig.nameText.value.position.value.y != this.defaultTextMeshPosition.y) && (this.defaultTextMeshPosition.moved = !0), this.defaultTextMeshPosition.moved) {
                                    this.textNameMesh.visible = !0;
                                    let e = my(ev.currentConfig.nameText.value.position.value);
                                    this.textNameMesh.position.x = e.x, this.textNameMesh.position.y = e.y, this.textNameMesh.scale.x = this.textNameMesh.scaleRatio * ev.currentConfig.nameText.value.scale.value, this.textNameMesh.scale.y = ev.currentConfig.nameText.value.scale.value, this.textNameMesh.scale.multiplyScalar(1 / fA.current.zoom)
                                } else this.textNameMesh.visible = !1
                            }
                            ev.currentConfig.general.value.gradientMixer.value > 0 && this.blurOffline();
                            let n = ev.currentConfig[t].value;
                            this.ringBase.material.uniforms.gradientMixer.value = ev.currentConfig.general.value.gradientMixer.value, "connected" == this.state && (this.ringBase.material.uniforms.colorMixer.value += e * this.connectionDuration, this.ringBase.material.uniforms.colorMixer.value >= 1 && (this.state = "void", this.stateResolve && (this.stateResolve(), this.stateResolve = null))), "disconnected" == this.state && (this.ringBase.material.uniforms.colorMixer.value -= e * this.connectionDuration, this.ringBase.material.uniforms.colorMixer.value <= 0 && (this.state = "void", this.stateResolve && (this.stateResolve(), this.stateResolve = null))), this.ringBase.material.uniforms.colorMixer.value = Math.max(0, Math.min(this.ringBase.material.uniforms.colorMixer.value, 1));
                            let i = ev.currentConfig.general.value.flipAiAndUser.value,
                                r = i ? eu : el,
                                a = i ? el : eu,
                                s = Math.min(.3, e);
                            mS.set(ev.currentConfig.background.value.backgroundcolor.value), fb.setClearColor(mS, 1), mb.copy(mS), mS.set(n.gradientBlurBase.value), this.ringBase.material.uniforms.color.value.set(mS), mS.set(n.outerRingColor.value), this.outerRing.material.color.set(mS), this.outerRing.material.opacity = n.outerRingOpacity.value;
                            let o = s * ev.currentConfig.general.value.userSmooth.value;
                            this.currentUserAudio = this.currentUserAudio * (1 - o) + o * fw(ev.currentConfig.general.value.userNoiseThreshold.value, 1, r), this.accUserAudio += .01 * this.currentUserAudio, this.gradientMesh.material.uniforms.accUserAudio.value = this.accUserAudio;
                            var l = 1 + this.currentUserAudio * ev.currentConfig.general.value.userMaxScale.value;
                            this.ringBase.scale.set(l, l, 1);
                            let h = s * ev.currentConfig.general.value.aiSmooth.value;
                            this.currentAiAudio = this.currentAiAudio * (1 - h) + h * a, l = (ev.currentConfig.general.value.cumulativeMode.value ? l : 1) + ev.currentConfig.general.value.aiMinScale.value + this.currentAiAudio * ev.currentConfig.general.value.aiMaxScale.value, this.outerRing.scale.set(l, l, 1), this.currentTimer += s;
                            let u = ev.currentConfig.general.value.rippleSpawnRate.value;
                            this.currentTimer > u && this.currentAiAudio > .1 && (this.currentTimer = 0, this.createLine(this.outerRing.scale.x)), mS.set(n.rippleColor.value).convertSRGBToLinear();
                            let c = 0;
                            for (; c < this.lines.length;) {
                                let e = this.lines[c];
                                if (e.visible) {
                                    var d = Math.max(e.scale.x, this.outerRing.scale.x);
                                    d += s, e.scale.set(d, d, 1);
                                    let t = (1 - fw(e.startScale, e.startScale + 1.5, d)) * e.startingAlpha;
                                    e.material.color.set(mS), e.material.linewidth = ev.currentConfig.general.value.rippleLineWidth.value, e.material.color.r = f6(mS.r, mb.r, 1 - t), e.material.color.g = f6(mS.g, mb.g, 1 - t), e.material.color.b = f6(mS.b, mb.b, 1 - t), t <= 0 && (e.visible = !1)
                                }
                                c++
                            }
                        }
                        createLine(e) {
                            let t = 0,
                                n = null;
                            for (; t < this.lines.length;) {
                                let e = this.lines[t];
                                !1 == e.visible && (n = e, t = this.lines.length), t++
                            }
                            if (null == n) {
                                let e = new fP({
                                        color: 255,
                                        side: 0,
                                        linewidth: 3,
                                        opacity: 1,
                                        dashed: !1,
                                        alphaTest: .001,
                                        depthTest: !1,
                                        depthWrite: !1
                                    }),
                                    t = new f5(this.linegeometry, e);
                                t.computeLineDistances(), t.scale.set(1, 1, 1), this.add(t), t.position.z = .1, this.lines.push(t), n = t
                            }
                            return n.scale.set(e, e, e), n.startScale = e, n.startingAlpha = ev.currentConfig.general.value.rippleOpacity.value, n.visible = !0, this.add(n), n
                        }
                        createGradientMesh() {
                            let e = ms,
                                t = new a1({
                                    uniforms: {
                                        color1: {
                                            value: new al(0xffffff)
                                        },
                                        color2: {
                                            value: new al(0xffffff)
                                        },
                                        timer: mo.timer,
                                        accUserAudio: {
                                            value: 0
                                        },
                                        uvDomainGradientNoise: ev.currentConfig.general.value.uvDomainGradientNoise,
                                        gradientDisplacement: ev.currentConfig.general.value.gradientDisplacement
                                    },
                                    vertexShader: "\n                varying vec2 vUv;\n                varying vec2 vPosition;\n\n                void main() {\n\n                    vUv = vec2(0.5)+(position.xy)*0.5;\n\n                    vPosition = position.xy;\n\n                    gl_Position = vec4( position.xy, 0.0,  1.0 );\n                }\n            ",
                                    fragmentShader: "\n                uniform vec3 color1;\n                uniform vec3 color2;\n                varying vec2 vUv;\n                uniform float timer;\n                uniform float accUserAudio;\n                uniform float uvDomainGradientNoise;\n\n                uniform vec2 gradientDisplacement;\n\n                float rand(vec2 co){\n                    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);\n                }\n\n                vec3 random3(vec3 c) {\n                    float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));\n                    vec3 r;\n                    r.z = fract(512.0*j);\n                    j *= .125;\n                    r.x = fract(512.0*j);\n                    j *= .125;\n                    r.y = fract(512.0*j);\n                    return r-0.5;\n                }\n\n                const float F3 =  0.3333333;\n                const float G3 =  0.1666667;\n                float snoise(vec3 p) {\n\n                    vec3 s = floor(p + dot(p, vec3(F3)));\n                    vec3 x = p - s + dot(s, vec3(G3));\n                    \n                    vec3 e = step(vec3(0.0), x - x.yzx);\n                    vec3 i1 = e*(1.0 - e.zxy);\n                    vec3 i2 = 1.0 - e.zxy*(1.0 - e);\n                        \n                    vec3 x1 = x - i1 + G3;\n                    vec3 x2 = x - i2 + 2.0*G3;\n                    vec3 x3 = x - 1.0 + 3.0*G3;\n                    \n                    vec4 w, d;\n                    \n                    w.x = dot(x, x);\n                    w.y = dot(x1, x1);\n                    w.z = dot(x2, x2);\n                    w.w = dot(x3, x3);\n                    \n                    w = max(0.6 - w, 0.0);\n                    \n                    d.x = dot(random3(s), x);\n                    d.y = dot(random3(s + i1), x1);\n                    d.z = dot(random3(s + i2), x2);\n                    d.w = dot(random3(s + 1.0), x3);\n                    \n                    w *= w;\n                    w *= w;\n                    d *= w;\n                    \n                    return dot(d, vec4(52.0));\n                }\n\n                float snoiseFractal(vec3 m) {\n                    return   0.5333333* snoise(m)\n                                +0.2666667* snoise(2.0*m)\n                                +0.1333333* snoise(4.0*m)\n                                +0.0666667* snoise(8.0*m);\n                }\n\n\n                void main() {\n\n                    float def = 0.01;\n\n                    float t =  timer * 0.25 + accUserAudio * 2.0;\n\n                    vec2 v = vec2(\n                        // vUv.x  + gradientDisplacement.x + sin(t) * 0.1, \n                        // vUv.y + gradientDisplacement.y - cos(t + 43.0) * 0.1\n\n                        vUv.x  + gradientDisplacement.x, \n                        vUv.y + gradientDisplacement.y \n                    );\n\n                    float dist =   length( v - vec2(0.5) );\n                    float distance = smoothstep( \n                        0.3, \n                        1.5, \n                        dist\n                    );\n\n                    distance += (rand(vUv * 5.0) - 0.5) * def;\n\n                    distance = clamp(0.0, 1.0, distance);\n\n                    float n = snoise(vec3(vUv * uvDomainGradientNoise , t)) * 0.33 ;\n\n                    float finalD =  max( 0.0, min(distance + (n ) , 1.0)) ;\n\n                    gl_FragColor = vec4( mix( color1, color2, finalD ), 1.0 );\n                }\n            "
                                });
                            return new aX(e, t)
                        }
                        blurOffline() {
                            let e = ev.currentConfig.preset.value.preset.value,
                                t = ev.currentConfig[e].value;
                            this.gradientMesh.material.uniforms.color1.value.set(t.gradientBlurColor.value), this.gradientMesh.material.uniforms.color2.value.set(t.gradientBlurBase.value), this.offline.update(), this.blurForce = 15;
                            let n = 0;
                            for (; n < 3;) {
                                var i = (3 - n - 1) * this.blurForce;
                                this.blurPass.blur(this.offline, i), n++
                            }
                        }
                        setPreset(e) {
                            ev.currentConfig.preset.value.preset.value = e
                        }
                        getTextSize() {
                            let e = this.textMesh.geometry.boundingBox,
                                t = this.vector1.copy(e.min).applyMatrix4(this.textMesh.matrixWorld),
                                n = this.vector2.copy(e.max).applyMatrix4(this.textMesh.matrixWorld),
                                i = t.project(fA.current),
                                r = n.project(fA.current);
                            return {
                                width: (r.x - i.x) * H.w / 2,
                                height: (r.y - i.y) * H.h / 2
                            }
                        }
                        getNameTextSize() {
                            let e = this.textNameMesh.geometry.boundingBox,
                                t = this.vector1.copy(e.min).applyMatrix4(this.textNameMesh.matrixWorld),
                                n = this.vector2.copy(e.max).applyMatrix4(this.textNameMesh.matrixWorld),
                                i = t.project(fA.current),
                                r = n.project(fA.current);
                            return {
                                width: (r.x - i.x) * H.w / 2,
                                height: (r.y - i.y) * H.h / 2
                            }
                        }
                        resize() {
                            let e = 0;
                            for (; e < this.lines.length;) this.lines[e], e++;
                            this.blurPass.resize(this.offline)
                        }
                        addEvents() {
                            R.on(ef.PRE_UPDATE, this.update.bind(this)), R.on(ef.RESIZE, this.resize.bind(this))
                        }
                        constructor() {
                            super(), this.timer = 0, this.sinTimer = 0, this.currentUserAudio = 0, this.currentAiAudio = 0, this.currentTimer = 0, this.state = "void", this.connectionDuration = 1, this.accUserAudio = 0, this.lines = [], this.vector1 = new iV, this.vector2 = new iV, this.defaultTextPosition = {
                                moved: !1,
                                x: ev.currentConfig.text.value.position.value.x,
                                y: ev.currentConfig.text.value.position.value.y
                            }, this.defaultTextMeshPosition = {
                                moved: !1,
                                x: ev.currentConfig.nameText.value.position.value.x,
                                y: ev.currentConfig.nameText.value.position.value.y
                            }
                        }
                    }
                }),
                mU = h(() => {
                    fI(), mC(), mA = class extends se {
                        preload() {
                            return this.scene.preload()
                        }
                        start() {}
                        setPreset(e) {
                            return this.scene.setPreset(e)
                        }
                        getTextSize() {
                            return this.scene.getTextSize()
                        }
                        getNameTextSize() {
                            return this.scene.getNameTextSize()
                        }
                        connect(e) {
                            return this.scene.connect(e)
                        }
                        disconnect(e) {
                            return this.scene.disconnect(e)
                        }
                        stateDone(e, t, n) {
                            return new Promise(e => {
                                var t = [];
                                Promise.all(t).then(() => {
                                    e(t)
                                })
                            })
                        }
                        constructor() {
                            super(), this.currentMode = -1, this.scene = new mT, this.add(this.scene)
                        }
                    }
                }),
                mP = h(() => {
                    fI(), nG(), mw = new class extends si {
                        constructor() {
                            super(), N && (window.scene = this), this.matrixAutoUpdate = !1, this.matrixWorldAutoUpdate = !0
                        }
                    }
                }),
                mL = {};
            ((e, t) => {
                for (var n in t) r(e, n, {
                    get: t[n],
                    enumerable: !0
                })
            })(mL, {
                default: () => mD
            });
            var mD, mI = h(() => {
                mU(), L(), nH(), fN(), mP(), fF(), nk(), nW(), mD = class {
                    forceContextLoss() {
                        fb.getContext().getExtension("WEBGL_lose_context").loseContext()
                    }
                    async preload() {
                        this.root = new mA, await this.root.preload(), mw.add(this.root)
                    }
                    async start() {
                        let e = ev.currentConfig.general.value.size.value;
                        await em.resize({
                            w: e.x,
                            h: e.y
                        }), this.root.start(), this.addEvents()
                    }
                    setPreset(e) {
                        return this.root.setPreset(e)
                    }
                    connect(e) {
                        return this.root.connect(e)
                    }
                    disconnect(e) {
                        return this.root.disconnect(e)
                    }
                    update() {
                        fb.clear(), fb.render(mw, fA.current)
                    }
                    addEvents() {
                        this.updateEvent = this.update.bind(this), R.on(ef.UPDATE, this.updateEvent), this.resizeEvent = this.resize.bind(this), R.on(ef.RESIZE, this.resizeEvent)
                    }
                    resize(e, t) {
                        fb.setSize(e, t)
                    }
                    setTextOption(e) {
                        e.position && e.position.x && (ev.currentConfig.text.value.position.value.x = e.position.x), e.position && e.position.y && (ev.currentConfig.text.value.position.value.y = e.position.y), e.scale && (ev.currentConfig.text.value.scale.value = e.scale)
                    }
                    getTextOption() {
                        let e = this.root.getTextSize();
                        return {
                            position: {
                                x: ev.currentConfig.text.value.position.value.x,
                                y: ev.currentConfig.text.value.position.value.y
                            },
                            scale: ev.currentConfig.text.value.scale.value,
                            size: e
                        }
                    }
                    setNameTextOption(e) {
                        e.position && e.position.x && (ev.currentConfig.nameText.value.position.value.x = e.position.x), e.position && e.position.y && (ev.currentConfig.nameText.value.position.value.y = e.position.y), e.scale && (ev.currentConfig.nameText.value.scale.value = e.scale)
                    }
                    getNameTextOption() {
                        let e = this.root.getNameTextSize();
                        return {
                            position: {
                                x: ev.currentConfig.text.value.position.value.x,
                                y: ev.currentConfig.text.value.position.value.y
                            },
                            scale: ev.currentConfig.text.value.scale.value,
                            size: e
                        }
                    }
                    setZoom(e) {
                        ev.currentConfig.camera.value.zoom.value = e, fA.current.zoom = e, fA.current.updateProjectionMatrix()
                    }
                    getZoom() {
                        return fA.current.zoom
                    }
                    setGradientMixer(e) {
                        ev.currentConfig.general.value.gradientMixer.value = e
                    }
                    getGradientMixer() {
                        return ev.currentConfig.general.value.gradientMixer.value
                    }
                    constructor() {
                        this.renderer = fb
                    }
                }
            });
            nk(), L(), nH(), nG(), nW();
            var mN = new class {
                init(e) {
                    this.CURRENT_STATE = et.IDLE, this.noiseThreshold = ev.currentConfig.audio.value.userSumNoiseThreshold.value, this.soundStateSustainInSeconds = ev.currentConfig.audio.value.soundStateSustainInSeconds.value, this.currentSum = 0, this.currentHighFreqSum = 0, this.highFilter = 8, this.minFilter = 20
                }
                stop() {
                    ee(et.IDLE), this.CURRENT_STATE = $, !(!this.audio || !this.isPlaying) && (this.audio.stop(), this.isPlaying = !1, this.removeEvents(), F && this.canvas && document.body.removeChild(this.canvas))
                }
                addEvents() {
                    null == this.analyseEvent && (this.analyseEvent = this.update.bind(this), R.on(ef.PRE_UPDATE, this.analyseEvent))
                }
                removeEvents() {
                    null != this.analyseEvent && (R.off(ef.PRE_UPDATE, this.analyseEvent), this.analyseEvent = null)
                }
                updateAnalyse(e, t) {
                    let n = Date.now(),
                        i = Math.min((n - this.now) / 1e3, 1),
                        r = 6 * i;
                    if (this.noiseThreshold = ev.currentConfig.audio.value.userSumNoiseThreshold.value, this.dataTextureLeft) {
                        let n = 0,
                            i = 0;
                        for (; n < e.length;) i = 4 * n, this.dataTextureLeft.image.data[i], this.dataTextureLeft.image.data[i], this.dataTextureLeft.image.data[i] = this.dataTextureLeft.image.data[i] * (1 - r) + e[n] * r, this.dataTextureRight.image.data[i] = this.dataTextureRight.image.data[i] * (1 - r) + t[n] * r, n++;
                        this.dataTextureLeft.needsUpdate = !0, this.dataTextureRight.needsUpdate = !0
                    }
                    let a = 0,
                        s = 0,
                        o = 0;
                    for (; o < e.length;) a += e[o], s += t[o], o > this.highFilter && (e[o], t[o]), o++;
                    let l = $,
                        h = 255 * e.length / ev.currentConfig.general.value.audioInfluence.value;
                    eh(a, h), isNaN(s) || ec(s, h), $ != et.IDLE && this.accu < this.soundStateSustainInSeconds || (this.accu = 0, s > 50 ? ee(et.AI) : a > this.noiseThreshold ? ee(et.USER) : ee(et.IDLE)), $ == et.AI ? this.currentSum = s : $ == et.USER ? this.currentSum = a : this.currentSum = 0, l == $ ? (et.USER, eo(ea + this.currentSum * i)) : eo(0), ep({
                        left: e,
                        right: t
                    }), ed(this.currentSum), this.CURRENT_STATE = $, this.accu += i;
                    let u = document.getElementById("debug-audio-bars");
                    F && u && u.checked, l != $ && R.emit(ef.AUDIO_STATE_CHANGE, $), this.now = n
                }
                constructor() {
                    this.accu = 0, this.now = 0
                }
            };
            nG();
            var mO = function() {
                    var e, t = document.createElement("canvas"),
                        n = !0;
                    try {
                        t.addEventListener("webglcontextlost", () => {
                            n = !1
                        }, !1), t.addEventListener("webglcontextcreationerror", () => {
                            n = !1
                        }, !1), e = t.getContext("webgl2")
                    } catch (e) {
                        n = !1
                    }
                    if (e) {
                        let t = e.getExtension("WEBGL_lose_context");
                        t && t.loseContext()
                    }
                    return t = null, n
                },
                mF = new class {
                    isCapable() {
                        return mO()
                    }
                    init() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        null != e.canvas && q(e.canvas), e.logo && Z(e.logo), e.nameImages && Q(e.nameImages), e.contextLossCallback && (this.contextLossCallback = e.contextLossCallback)
                    }
                    audioFeed(e, t) {
                        this.world && mN.updateAnalyse(e, t)
                    }
                    visualize(e) {
                        let t = () => {
                            let {
                                input: n,
                                output: i
                            } = e.getFrequencies();
                            this.audioFeed(n, i), e.isCallActive() && requestAnimationFrame(t)
                        };
                        t()
                    }
                    async preload() {
                        if (!1 == this.preloaded) {
                            let e = (mI(), d(mL)).default;
                            this.world = new e, await this.world.preload(), this.preloaded = !0, this.world.renderer.domElement.addEventListener("webglcontextlost", e => {
                                this.contextLossCallback && this.contextLossCallback()
                            })
                        }
                    }
                    async start() {
                        await this.world.start()
                    }
                    async play() {
                        await em.play()
                    }
                    async pause() {
                        await em.pause()
                    }
                    async resize(e, t) {
                        await em.resize({
                            w: e,
                            h: t
                        })
                    }
                    connect() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        return this.world.connect(e)
                    }
                    disconnect() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        return this.world.disconnect(e)
                    }
                    get paused() {
                        return !em._isPlaying
                    }
                    setTextOption(e) {
                        this.world.setTextOption(e)
                    }
                    getTextOption() {
                        return this.world.getTextOption()
                    }
                    setNameTextOption(e) {
                        this.world.setNameTextOption(e)
                    }
                    getNameTextOption() {
                        return this.world.getNameTextOption()
                    }
                    set gradientMixer(e) {
                        this.world.setGradientMixer(e)
                    }
                    get gradientMixer() {
                        return this.world.getGradientMixer()
                    }
                    set zoom(e) {
                        this.world.setZoom(e)
                    }
                    get zoom() {
                        return this.world.getZoom()
                    }
                    setPreset(e) {
                        return this.world.setPreset(e)
                    }
                    constructor() {
                        this.preloaded = !1, console.log("%c WebGL Visualisation created ", "background: #222; color: #bada55"), window.x = this
                    }
                }
        }
    }
]);