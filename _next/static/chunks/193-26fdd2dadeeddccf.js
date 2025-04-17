! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "033a5efd-d639-459d-97ea-8e6c18975a8c", t._sentryDebugIdIdentifier = "sentry-dbid-033a5efd-d639-459d-97ea-8e6c18975a8c")
    } catch (t) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [193], {
        5193: (t, e, n) => {
            n.d(e, {
                A: () => I
            });
            var r = n(6540);

            function i(t) {
                return "[object Object]" === Object.prototype.toString.call(t) || Array.isArray(t)
            }

            function o(t, e) {
                let n = Object.keys(t),
                    r = Object.keys(e);
                return n.length === r.length && JSON.stringify(Object.keys(t.breakpoints || {})) === JSON.stringify(Object.keys(e.breakpoints || {})) && n.every(n => {
                    let r = t[n],
                        u = e[n];
                    return "function" == typeof r ? `${r}` == `${u}` : i(r) && i(u) ? o(r, u) : r === u
                })
            }

            function u(t) {
                return t.concat().sort((t, e) => t.name > e.name ? 1 : -1).map(t => t.options)
            }

            function c(t) {
                return "number" == typeof t
            }

            function a(t) {
                return "string" == typeof t
            }

            function l(t) {
                return "boolean" == typeof t
            }

            function s(t) {
                return "[object Object]" === Object.prototype.toString.call(t)
            }

            function f(t) {
                return Math.abs(t)
            }

            function d(t) {
                return Math.sign(t)
            }

            function p(t) {
                return y(t).map(Number)
            }

            function g(t) {
                return t[m(t)]
            }

            function m(t) {
                return Math.max(0, t.length - 1)
            }

            function h(t, e = 0) {
                return Array.from(Array(t), (t, n) => e + n)
            }

            function y(t) {
                return Object.keys(t)
            }

            function b(t, e) {
                return void 0 !== e.MouseEvent && t instanceof e.MouseEvent
            }

            function v() {
                let t = [],
                    e = {
                        add: function(n, r, i, o = {
                            passive: !0
                        }) {
                            let u;
                            return "addEventListener" in n ? (n.addEventListener(r, i, o), u = () => n.removeEventListener(r, i, o)) : (n.addListener(i), u = () => n.removeListener(i)), t.push(u), e
                        },
                        clear: function() {
                            t = t.filter(t => t())
                        }
                    };
                return e
            }

            function x(t = 0, e = 0) {
                let n = f(t - e);

                function r(n) {
                    return n < t || n > e
                }
                return {
                    length: n,
                    max: e,
                    min: t,
                    constrain: function(n) {
                        return r(n) ? n < t ? t : e : n
                    },
                    reachedAny: r,
                    reachedMax: function(t) {
                        return t > e
                    },
                    reachedMin: function(e) {
                        return e < t
                    },
                    removeOffset: function(t) {
                        return n ? t - n * Math.ceil((t - e) / n) : t
                    }
                }
            }

            function w(t) {
                let e = t;

                function n(t) {
                    return c(t) ? t : t.get()
                }
                return {
                    get: function() {
                        return e
                    },
                    set: function(t) {
                        e = n(t)
                    },
                    add: function(t) {
                        e += n(t)
                    },
                    subtract: function(t) {
                        e -= n(t)
                    }
                }
            }

            function S(t, e) {
                let n = "x" === t.scroll ? function(t) {
                        return `translate3d(${t}px,0px,0px)`
                    } : function(t) {
                        return `translate3d(0px,${t}px,0px)`
                    },
                    r = e.style,
                    i = null,
                    o = !1;
                return {
                    clear: function() {
                        o || (r.transform = "", e.getAttribute("style") || e.removeAttribute("style"))
                    },
                    to: function(e) {
                        if (o) return;
                        let u = Math.round(100 * t.direction(e)) / 100;
                        u !== i && (r.transform = n(u), i = u)
                    },
                    toggleActive: function(t) {
                        o = !t
                    }
                }
            }
            let E = {
                align: "center",
                axis: "x",
                container: null,
                slides: null,
                containScroll: "trimSnaps",
                direction: "ltr",
                slidesToScroll: 1,
                inViewThreshold: 0,
                breakpoints: {},
                dragFree: !1,
                dragThreshold: 10,
                loop: !1,
                skipSnaps: !1,
                duration: 25,
                startIndex: 0,
                active: !0,
                watchDrag: !0,
                watchResize: !0,
                watchSlides: !0,
                watchFocus: !0
            };

            function D(t, e, n) {
                let r, i, o, u, I;
                let O = t.ownerDocument,
                    k = O.defaultView,
                    A = function(t) {
                        function e(t, e) {
                            return function t(e, n) {
                                return [e, n].reduce((e, n) => (y(n).forEach(r => {
                                    let i = e[r],
                                        o = n[r],
                                        u = s(i) && s(o);
                                    e[r] = u ? t(i, o) : o
                                }), e), {})
                            }(t, e || {})
                        }
                        return {
                            mergeOptions: e,
                            optionsAtMedia: function(n) {
                                let r = n.breakpoints || {},
                                    i = y(r).filter(e => t.matchMedia(e).matches).map(t => r[t]).reduce((t, n) => e(t, n), {});
                                return e(n, i)
                            },
                            optionsMediaQueries: function(e) {
                                return e.map(t => y(t.breakpoints || {})).reduce((t, e) => t.concat(e), []).map(t.matchMedia)
                            }
                        }
                    }(k),
                    L = (I = [], {
                        init: function(t, e) {
                            return (I = e.filter(({
                                options: t
                            }) => !1 !== A.optionsAtMedia(t).active)).forEach(e => e.init(t, A)), e.reduce((t, e) => Object.assign(t, {
                                [e.name]: e
                            }), {})
                        },
                        destroy: function() {
                            I = I.filter(t => t.destroy())
                        }
                    }),
                    M = v(),
                    F = function() {
                        let t, e = {},
                            n = {
                                init: function(e) {
                                    t = e
                                },
                                emit: function(r) {
                                    return (e[r] || []).forEach(e => e(t, r)), n
                                },
                                off: function(t, r) {
                                    return e[t] = (e[t] || []).filter(t => t !== r), n
                                },
                                on: function(t, r) {
                                    return e[t] = (e[t] || []).concat([r]), n
                                },
                                clear: function() {
                                    e = {}
                                }
                            };
                        return n
                    }(),
                    {
                        mergeOptions: j,
                        optionsAtMedia: N,
                        optionsMediaQueries: P
                    } = A,
                    {
                        on: T,
                        off: H,
                        emit: V
                    } = F,
                    z = !1,
                    C = j(E, D.globalOptions),
                    _ = j(C),
                    B = [];

                function R(e, n) {
                    !z && (_ = N(C = j(C, e)), B = n || B, function() {
                        let {
                            container: e,
                            slides: n
                        } = _;
                        o = (a(e) ? t.querySelector(e) : e) || t.children[0];
                        let r = a(n) ? o.querySelectorAll(n) : n;
                        u = [].slice.call(r || o.children)
                    }(), r = function e(n) {
                        let r = function(t, e, n, r, i, o, u) {
                            let s, E;
                            let {
                                align: D,
                                axis: I,
                                direction: O,
                                startIndex: k,
                                loop: A,
                                duration: L,
                                dragFree: M,
                                dragThreshold: F,
                                inViewThreshold: j,
                                slidesToScroll: N,
                                skipSnaps: P,
                                containScroll: T,
                                watchResize: H,
                                watchSlides: V,
                                watchDrag: z,
                                watchFocus: C
                            } = o, _ = {
                                measure: function(t) {
                                    let {
                                        offsetTop: e,
                                        offsetLeft: n,
                                        offsetWidth: r,
                                        offsetHeight: i
                                    } = t;
                                    return {
                                        top: e,
                                        right: n + r,
                                        bottom: e + i,
                                        left: n,
                                        width: r,
                                        height: i
                                    }
                                }
                            }, B = _.measure(e), R = n.map(_.measure), $ = function(t, e) {
                                let n = "rtl" === e,
                                    r = "y" === t,
                                    i = !r && n ? -1 : 1;
                                return {
                                    scroll: r ? "y" : "x",
                                    cross: r ? "x" : "y",
                                    startEdge: r ? "top" : n ? "right" : "left",
                                    endEdge: r ? "bottom" : n ? "left" : "right",
                                    measureSize: function(t) {
                                        let {
                                            height: e,
                                            width: n
                                        } = t;
                                        return r ? e : n
                                    },
                                    direction: function(t) {
                                        return t * i
                                    }
                                }
                            }(I, O), q = $.measureSize(B), U = {
                                measure: function(t) {
                                    return t / 100 * q
                                }
                            }, J = function(t, e) {
                                let n = {
                                    start: function() {
                                        return 0
                                    },
                                    center: function(t) {
                                        return (e - t) / 2
                                    },
                                    end: function(t) {
                                        return e - t
                                    }
                                };
                                return {
                                    measure: function(r, i) {
                                        return a(t) ? n[t](r) : t(e, r, i)
                                    }
                                }
                            }(D, q), X = !A && !!T, {
                                slideSizes: Q,
                                slideSizesWithGaps: Y,
                                startGap: G,
                                endGap: K
                            } = function(t, e, n, r, i, o) {
                                let {
                                    measureSize: u,
                                    startEdge: c,
                                    endEdge: a
                                } = t, l = n[0] && i, s = function() {
                                    if (!l) return 0;
                                    let t = n[0];
                                    return f(e[c] - t[c])
                                }(), d = l ? parseFloat(o.getComputedStyle(g(r)).getPropertyValue(`margin-${a}`)) : 0, p = n.map(u), h = n.map((t, e, n) => {
                                    let r = e === m(n);
                                    return e ? r ? p[e] + d : n[e + 1][c] - t[c] : p[e] + s
                                }).map(f);
                                return {
                                    slideSizes: p,
                                    slideSizesWithGaps: h,
                                    startGap: s,
                                    endGap: d
                                }
                            }($, B, R, n, A || !!T, i), W = function(t, e, n, r, i, o, u, a, l) {
                                let {
                                    startEdge: s,
                                    endEdge: d,
                                    direction: h
                                } = t, y = c(n);
                                return {
                                    groupSlides: function(t) {
                                        return y ? p(t).filter(t => t % n == 0).map(e => t.slice(e, e + n)) : t.length ? p(t).reduce((n, c, l) => {
                                            let p = g(n) || 0,
                                                y = c === m(t),
                                                b = i[s] - o[p][s],
                                                v = i[s] - o[c][d],
                                                x = r || 0 !== p ? 0 : h(u),
                                                w = f(v - (!r && y ? h(a) : 0) - (b + x));
                                            return l && w > e + 2 && n.push(c), y && n.push(t.length), n
                                        }, []).map((e, n, r) => {
                                            let i = Math.max(r[n - 1] || 0);
                                            return t.slice(i, e)
                                        }) : []
                                    }
                                }
                            }($, q, N, A, B, R, G, K, 0), {
                                snaps: Z,
                                snapsAligned: tt
                            } = function(t, e, n, r, i) {
                                let {
                                    startEdge: o,
                                    endEdge: u
                                } = t, {
                                    groupSlides: c
                                } = i, a = c(r).map(t => g(t)[u] - t[0][o]).map(f).map(e.measure), l = r.map(t => n[o] - t[o]).map(t => -f(t)), s = c(l).map(t => t[0]).map((t, e) => t + a[e]);
                                return {
                                    snaps: l,
                                    snapsAligned: s
                                }
                            }($, J, B, R, W), te = -g(Z) + g(Y), {
                                snapsContained: tn,
                                scrollContainLimit: tr
                            } = function(t, e, n, r, i) {
                                let o = x(-e + t, 0),
                                    u = n.map((t, e) => {
                                        let {
                                            min: r,
                                            max: i
                                        } = o, u = o.constrain(t), c = e === m(n);
                                        return e ? c || 1 >= f(r - u) ? r : 1 >= f(i - u) ? i : u : i
                                    }).map(t => parseFloat(t.toFixed(3))),
                                    c = function() {
                                        let t = u[0],
                                            e = g(u);
                                        return x(u.lastIndexOf(t), u.indexOf(e) + 1)
                                    }();
                                return {
                                    snapsContained: function() {
                                        if (e <= t + 2) return [o.max];
                                        if ("keepSnaps" === r) return u;
                                        let {
                                            min: n,
                                            max: i
                                        } = c;
                                        return u.slice(n, i)
                                    }(),
                                    scrollContainLimit: c
                                }
                            }(q, te, tt, T, 0), ti = X ? tn : tt, {
                                limit: to
                            } = function(t, e, n) {
                                let r = e[0];
                                return {
                                    limit: x(n ? r - t : g(e), r)
                                }
                            }(te, ti, A), tu = function t(e, n, r) {
                                let {
                                    constrain: i
                                } = x(0, e), o = e + 1, u = c(n);

                                function c(t) {
                                    return r ? f((o + t) % o) : i(t)
                                }

                                function a() {
                                    return t(e, u, r)
                                }
                                let l = {
                                    get: function() {
                                        return u
                                    },
                                    set: function(t) {
                                        return u = c(t), l
                                    },
                                    add: function(t) {
                                        return a().set(u + t)
                                    },
                                    clone: a
                                };
                                return l
                            }(m(ti), k, A), tc = tu.clone(), ta = p(n), tl = ({
                                dragHandler: t,
                                scrollBody: e,
                                scrollBounds: n,
                                options: {
                                    loop: r
                                }
                            }) => {
                                r || n.constrain(t.pointerDown()), e.seek()
                            }, ts = ({
                                scrollBody: t,
                                translate: e,
                                location: n,
                                offsetLocation: r,
                                previousLocation: i,
                                scrollLooper: o,
                                slideLooper: u,
                                dragHandler: c,
                                animation: a,
                                eventHandler: l,
                                scrollBounds: s,
                                options: {
                                    loop: f
                                }
                            }, d) => {
                                let p = t.settled(),
                                    g = !s.shouldConstrain(),
                                    m = f ? p : p && g;
                                m && !c.pointerDown() && (a.stop(), l.emit("settle")), m || l.emit("scroll");
                                let h = n.get() * d + i.get() * (1 - d);
                                r.set(h), f && (o.loop(t.direction()), u.loop()), e.to(r.get())
                            }, tf = function(t, e, n, r) {
                                let i = v(),
                                    o = 1e3 / 60,
                                    u = null,
                                    c = 0,
                                    a = 0;

                                function l(t) {
                                    if (!a) return;
                                    u || (u = t, n(), n());
                                    let i = t - u;
                                    for (u = t, c += i; c >= o;) n(), c -= o;
                                    r(c / o), a && (a = e.requestAnimationFrame(l))
                                }

                                function s() {
                                    e.cancelAnimationFrame(a), u = null, c = 0, a = 0
                                }
                                return {
                                    init: function() {
                                        i.add(t, "visibilitychange", () => {
                                            t.hidden && (u = null, c = 0)
                                        })
                                    },
                                    destroy: function() {
                                        s(), i.clear()
                                    },
                                    start: function() {
                                        a || (a = e.requestAnimationFrame(l))
                                    },
                                    stop: s,
                                    update: n,
                                    render: r
                                }
                            }(r, i, () => tl(tI), t => ts(tI, t)), td = ti[tu.get()], tp = w(td), tg = w(td), tm = w(td), th = w(td), ty = function(t, e, n, r, i, o) {
                                let u = 0,
                                    c = 0,
                                    a = i,
                                    l = .68,
                                    s = t.get(),
                                    p = 0;

                                function g(t) {
                                    return a = t, h
                                }

                                function m(t) {
                                    return l = t, h
                                }
                                let h = {
                                    direction: function() {
                                        return c
                                    },
                                    duration: function() {
                                        return a
                                    },
                                    velocity: function() {
                                        return u
                                    },
                                    seek: function() {
                                        let e = r.get() - t.get(),
                                            i = 0;
                                        return a ? (n.set(t), u += e / a, u *= l, s += u, t.add(u), i = s - p) : (u = 0, n.set(r), t.set(r), i = e), c = d(i), p = s, h
                                    },
                                    settled: function() {
                                        return .001 > f(r.get() - e.get())
                                    },
                                    useBaseFriction: function() {
                                        return m(.68)
                                    },
                                    useBaseDuration: function() {
                                        return g(i)
                                    },
                                    useFriction: m,
                                    useDuration: g
                                };
                                return h
                            }(tp, tm, tg, th, L, 0), tb = function(t, e, n, r, i) {
                                let {
                                    reachedAny: o,
                                    removeOffset: u,
                                    constrain: c
                                } = r;

                                function a(t) {
                                    return t.concat().sort((t, e) => f(t) - f(e))[0]
                                }

                                function l(e, r) {
                                    let i = [e, e + n, e - n];
                                    if (!t) return e;
                                    if (!r) return a(i);
                                    let o = i.filter(t => d(t) === r);
                                    return o.length ? a(o) : g(i) - n
                                }
                                return {
                                    byDistance: function(n, r) {
                                        let a = i.get() + n,
                                            {
                                                index: s,
                                                distance: d
                                            } = function(n) {
                                                let r = t ? u(n) : c(n),
                                                    {
                                                        index: i
                                                    } = e.map((t, e) => ({
                                                        diff: l(t - r, 0),
                                                        index: e
                                                    })).sort((t, e) => f(t.diff) - f(e.diff))[0];
                                                return {
                                                    index: i,
                                                    distance: r
                                                }
                                            }(a),
                                            p = !t && o(a);
                                        if (!r || p) return {
                                            index: s,
                                            distance: n
                                        };
                                        let g = n + l(e[s] - d, 0);
                                        return {
                                            index: s,
                                            distance: g
                                        }
                                    },
                                    byIndex: function(t, n) {
                                        let r = l(e[t] - i.get(), n);
                                        return {
                                            index: t,
                                            distance: r
                                        }
                                    },
                                    shortcut: l
                                }
                            }(A, ti, te, to, th), tv = function(t, e, n, r, i, o, u) {
                                function c(i) {
                                    let c = i.distance,
                                        a = i.index !== e.get();
                                    o.add(c), c && (r.duration() ? t.start() : (t.update(), t.render(1), t.update())), a && (n.set(e.get()), e.set(i.index), u.emit("select"))
                                }
                                return {
                                    distance: function(t, e) {
                                        c(i.byDistance(t, e))
                                    },
                                    index: function(t, n) {
                                        let r = e.clone().set(t);
                                        c(i.byIndex(r.get(), n))
                                    }
                                }
                            }(tf, tu, tc, ty, tb, th, u), tx = function(t) {
                                let {
                                    max: e,
                                    length: n
                                } = t;
                                return {
                                    get: function(t) {
                                        return n ? -((t - e) / n) : 0
                                    }
                                }
                            }(to), tw = v(), tS = function(t, e, n, r) {
                                let i;
                                let o = {},
                                    u = null,
                                    c = null,
                                    a = !1;
                                return {
                                    init: function() {
                                        i = new IntersectionObserver(t => {
                                            a || (t.forEach(t => {
                                                o[e.indexOf(t.target)] = t
                                            }), u = null, c = null, n.emit("slidesInView"))
                                        }, {
                                            root: t.parentElement,
                                            threshold: r
                                        }), e.forEach(t => i.observe(t))
                                    },
                                    destroy: function() {
                                        i && i.disconnect(), a = !0
                                    },
                                    get: function(t = !0) {
                                        if (t && u) return u;
                                        if (!t && c) return c;
                                        let e = y(o).reduce((e, n) => {
                                            let r = parseInt(n),
                                                {
                                                    isIntersecting: i
                                                } = o[r];
                                            return (t && i || !t && !i) && e.push(r), e
                                        }, []);
                                        return t && (u = e), t || (c = e), e
                                    }
                                }
                            }(e, n, u, j), {
                                slideRegistry: tE
                            } = function(t, e, n, r, i, o) {
                                let {
                                    groupSlides: u
                                } = i, {
                                    min: c,
                                    max: a
                                } = r;
                                return {
                                    slideRegistry: function() {
                                        let r = u(o);
                                        return 1 === n.length ? [o] : t && "keepSnaps" !== e ? r.slice(c, a).map((t, e, n) => {
                                            let r = e === m(n);
                                            return e ? r ? h(m(o) - g(n)[0] + 1, g(n)[0]) : t : h(g(n[0]) + 1)
                                        }) : r
                                    }()
                                }
                            }(X, T, ti, tr, W, ta), tD = function(t, e, n, r, i, o, u, a) {
                                let s = {
                                        passive: !0,
                                        capture: !0
                                    },
                                    f = 0;

                                function d(t) {
                                    "Tab" === t.code && (f = new Date().getTime())
                                }
                                return {
                                    init: function(p) {
                                        a && (o.add(document, "keydown", d, !1), e.forEach((e, d) => {
                                            o.add(e, "focus", e => {
                                                (l(a) || a(p, e)) && function(e) {
                                                    if (new Date().getTime() - f > 10) return;
                                                    u.emit("slideFocusStart"), t.scrollLeft = 0;
                                                    let o = n.findIndex(t => t.includes(e));
                                                    c(o) && (i.useDuration(0), r.index(o, 0), u.emit("slideFocus"))
                                                }(d)
                                            }, s)
                                        }))
                                    }
                                }
                            }(t, n, tE, tv, ty, tw, u, C), tI = {
                                ownerDocument: r,
                                ownerWindow: i,
                                eventHandler: u,
                                containerRect: B,
                                slideRects: R,
                                animation: tf,
                                axis: $,
                                dragHandler: function(t, e, n, r, i, o, u, c, a, s, p, g, m, h, y, w, S, E, D) {
                                    let {
                                        cross: I,
                                        direction: O
                                    } = t, k = ["INPUT", "SELECT", "TEXTAREA"], A = {
                                        passive: !1
                                    }, L = v(), M = v(), F = x(50, 225).constrain(h.measure(20)), j = {
                                        mouse: 300,
                                        touch: 400
                                    }, N = {
                                        mouse: 500,
                                        touch: 600
                                    }, P = y ? 43 : 25, T = !1, H = 0, V = 0, z = !1, C = !1, _ = !1, B = !1;

                                    function R(t) {
                                        if (!b(t, r) && t.touches.length >= 2) return $(t);
                                        let e = o.readPoint(t),
                                            n = o.readPoint(t, I),
                                            u = f(e - H),
                                            a = f(n - V);
                                        if (!C && !B && (!t.cancelable || !(C = u > a))) return $(t);
                                        let l = o.pointerMove(t);
                                        u > w && (_ = !0), s.useFriction(.3).useDuration(.75), c.start(), i.add(O(l)), t.preventDefault()
                                    }

                                    function $(t) {
                                        let e = p.byDistance(0, !1).index !== g.get(),
                                            n = o.pointerUp(t) * (y ? N : j)[B ? "mouse" : "touch"],
                                            r = function(t, e) {
                                                let n = g.add(-1 * d(t)),
                                                    r = p.byDistance(t, !y).distance;
                                                return y || f(t) < F ? r : S && e ? .5 * r : p.byIndex(n.get(), 0).distance
                                            }(O(n), e),
                                            i = function(t, e) {
                                                var n, r;
                                                if (0 === t || 0 === e || f(t) <= f(e)) return 0;
                                                let i = (n = f(t), r = f(e), f(n - r));
                                                return f(i / t)
                                            }(n, r);
                                        C = !1, z = !1, M.clear(), s.useDuration(P - 10 * i).useFriction(.68 + i / 50), a.distance(r, !y), B = !1, m.emit("pointerUp")
                                    }

                                    function q(t) {
                                        _ && (t.stopPropagation(), t.preventDefault(), _ = !1)
                                    }
                                    return {
                                        init: function(t) {
                                            D && L.add(e, "dragstart", t => t.preventDefault(), A).add(e, "touchmove", () => void 0, A).add(e, "touchend", () => void 0).add(e, "touchstart", c).add(e, "mousedown", c).add(e, "touchcancel", $).add(e, "contextmenu", $).add(e, "click", q, !0);

                                            function c(c) {
                                                (l(D) || D(t, c)) && function(t) {
                                                    let c = b(t, r);
                                                    B = c, _ = y && c && !t.buttons && T, T = f(i.get() - u.get()) >= 2, c && 0 !== t.button || function(t) {
                                                        let e = t.nodeName || "";
                                                        return k.includes(e)
                                                    }(t.target) || (z = !0, o.pointerDown(t), s.useFriction(0).useDuration(0), i.set(u), function() {
                                                        let t = B ? n : e;
                                                        M.add(t, "touchmove", R, A).add(t, "touchend", $).add(t, "mousemove", R, A).add(t, "mouseup", $)
                                                    }(), H = o.readPoint(t), V = o.readPoint(t, I), m.emit("pointerDown"))
                                                }(c)
                                            }
                                        },
                                        destroy: function() {
                                            L.clear(), M.clear()
                                        },
                                        pointerDown: function() {
                                            return z
                                        }
                                    }
                                }($, t, r, i, th, function(t, e) {
                                    let n, r;

                                    function i(t) {
                                        return t.timeStamp
                                    }

                                    function o(n, r) {
                                        let i = r || t.scroll,
                                            o = `client${"x"===i?"X":"Y"}`;
                                        return (b(n, e) ? n : n.touches[0])[o]
                                    }
                                    return {
                                        pointerDown: function(t) {
                                            return n = t, r = t, o(t)
                                        },
                                        pointerMove: function(t) {
                                            let e = o(t) - o(r),
                                                u = i(t) - i(n) > 170;
                                            return r = t, u && (n = t), e
                                        },
                                        pointerUp: function(t) {
                                            if (!n || !r) return 0;
                                            let e = o(r) - o(n),
                                                u = i(t) - i(n),
                                                c = i(t) - i(r) > 170,
                                                a = e / u;
                                            return u && !c && f(a) > .1 ? a : 0
                                        },
                                        readPoint: o
                                    }
                                }($, i), tp, tf, tv, ty, tb, tu, u, U, M, F, P, 0, z),
                                eventStore: tw,
                                percentOfView: U,
                                index: tu,
                                indexPrevious: tc,
                                limit: to,
                                location: tp,
                                offsetLocation: tm,
                                previousLocation: tg,
                                options: o,
                                resizeHandler: function(t, e, n, r, i, o, u) {
                                    let c, a;
                                    let s = [t].concat(r),
                                        d = [],
                                        p = !1;

                                    function g(t) {
                                        return i.measureSize(u.measure(t))
                                    }
                                    return {
                                        init: function(i) {
                                            o && (a = g(t), d = r.map(g), c = new ResizeObserver(n => {
                                                (l(o) || o(i, n)) && function(n) {
                                                    for (let o of n) {
                                                        if (p) return;
                                                        let n = o.target === t,
                                                            u = r.indexOf(o.target),
                                                            c = n ? a : d[u];
                                                        if (f(g(n ? t : r[u]) - c) >= .5) {
                                                            i.reInit(), e.emit("resize");
                                                            break
                                                        }
                                                    }
                                                }(n)
                                            }), n.requestAnimationFrame(() => {
                                                s.forEach(t => c.observe(t))
                                            }))
                                        },
                                        destroy: function() {
                                            p = !0, c && c.disconnect()
                                        }
                                    }
                                }(e, u, i, n, $, H, _),
                                scrollBody: ty,
                                scrollBounds: function(t, e, n, r, i) {
                                    let o = i.measure(10),
                                        u = i.measure(50),
                                        c = x(.1, .99),
                                        a = !1;

                                    function l() {
                                        return !!(!a && t.reachedAny(n.get()) && t.reachedAny(e.get()))
                                    }
                                    return {
                                        shouldConstrain: l,
                                        constrain: function(i) {
                                            if (!l()) return;
                                            let a = t.reachedMin(e.get()) ? "min" : "max",
                                                s = f(t[a] - e.get()),
                                                d = n.get() - e.get(),
                                                p = c.constrain(s / u);
                                            n.subtract(d * p), !i && f(d) < o && (n.set(t.constrain(n.get())), r.useDuration(25).useBaseFriction())
                                        },
                                        toggleActive: function(t) {
                                            a = !t
                                        }
                                    }
                                }(to, tm, th, ty, U),
                                scrollLooper: function(t, e, n, r) {
                                    let {
                                        reachedMin: i,
                                        reachedMax: o
                                    } = x(e.min + .1, e.max + .1);
                                    return {
                                        loop: function(e) {
                                            if (!(1 === e ? o(n.get()) : -1 === e && i(n.get()))) return;
                                            let u = -1 * e * t;
                                            r.forEach(t => t.add(u))
                                        }
                                    }
                                }(te, to, tm, [tp, tm, tg, th]),
                                scrollProgress: tx,
                                scrollSnapList: ti.map(tx.get),
                                scrollSnaps: ti,
                                scrollTarget: tb,
                                scrollTo: tv,
                                slideLooper: function(t, e, n, r, i, o, u, c, a) {
                                    let l = p(i),
                                        s = g(d(p(i).reverse(), u[0]), n, !1).concat(g(d(l, e - u[0] - 1), -n, !0));

                                    function f(t, e) {
                                        return t.reduce((t, e) => t - i[e], e)
                                    }

                                    function d(t, e) {
                                        return t.reduce((t, n) => f(t, e) > 0 ? t.concat([n]) : t, [])
                                    }

                                    function g(i, u, l) {
                                        let s = o.map((t, n) => ({
                                            start: t - r[n] + .5 + u,
                                            end: t + e - .5 + u
                                        }));
                                        return i.map(e => {
                                            let r = l ? 0 : -n,
                                                i = l ? n : 0,
                                                o = s[e][l ? "end" : "start"];
                                            return {
                                                index: e,
                                                loopPoint: o,
                                                slideLocation: w(-1),
                                                translate: S(t, a[e]),
                                                target: () => c.get() > o ? r : i
                                            }
                                        })
                                    }
                                    return {
                                        canLoop: function() {
                                            return s.every(({
                                                index: t
                                            }) => .1 >= f(l.filter(e => e !== t), e))
                                        },
                                        clear: function() {
                                            s.forEach(t => t.translate.clear())
                                        },
                                        loop: function() {
                                            s.forEach(t => {
                                                let {
                                                    target: e,
                                                    translate: n,
                                                    slideLocation: r
                                                } = t, i = e();
                                                i !== r.get() && (n.to(i), r.set(i))
                                            })
                                        },
                                        loopPoints: s
                                    }
                                }($, q, te, Q, Y, Z, ti, tm, n),
                                slideFocus: tD,
                                slidesHandler: (E = !1, {
                                    init: function(t) {
                                        V && (s = new MutationObserver(e => {
                                            !E && (l(V) || V(t, e)) && function(e) {
                                                for (let n of e)
                                                    if ("childList" === n.type) {
                                                        t.reInit(), u.emit("slidesChanged");
                                                        break
                                                    }
                                            }(e)
                                        })).observe(e, {
                                            childList: !0
                                        })
                                    },
                                    destroy: function() {
                                        s && s.disconnect(), E = !0
                                    }
                                }),
                                slidesInView: tS,
                                slideIndexes: ta,
                                slideRegistry: tE,
                                slidesToScroll: W,
                                target: th,
                                translate: S($, e)
                            };
                            return tI
                        }(t, o, u, O, k, n, F);
                        return n.loop && !r.slideLooper.canLoop() ? e(Object.assign({}, n, {
                            loop: !1
                        })) : r
                    }(_), P([C, ...B.map(({
                        options: t
                    }) => t)]).forEach(t => M.add(t, "change", $)), _.active && (r.translate.to(r.location.get()), r.animation.init(), r.slidesInView.init(), r.slideFocus.init(X), r.eventHandler.init(X), r.resizeHandler.init(X), r.slidesHandler.init(X), r.options.loop && r.slideLooper.loop(), o.offsetParent && u.length && r.dragHandler.init(X), i = L.init(X, B)))
                }

                function $(t, e) {
                    let n = J();
                    q(), R(j({
                        startIndex: n
                    }, t), e), F.emit("reInit")
                }

                function q() {
                    r.dragHandler.destroy(), r.eventStore.clear(), r.translate.clear(), r.slideLooper.clear(), r.resizeHandler.destroy(), r.slidesHandler.destroy(), r.slidesInView.destroy(), r.animation.destroy(), L.destroy(), M.clear()
                }

                function U(t, e, n) {
                    _.active && !z && (r.scrollBody.useBaseFriction().useDuration(!0 === e ? 0 : _.duration), r.scrollTo.index(t, n || 0))
                }

                function J() {
                    return r.index.get()
                }
                let X = {
                    canScrollNext: function() {
                        return r.index.add(1).get() !== J()
                    },
                    canScrollPrev: function() {
                        return r.index.add(-1).get() !== J()
                    },
                    containerNode: function() {
                        return o
                    },
                    internalEngine: function() {
                        return r
                    },
                    destroy: function() {
                        z || (z = !0, M.clear(), q(), F.emit("destroy"), F.clear())
                    },
                    off: H,
                    on: T,
                    emit: V,
                    plugins: function() {
                        return i
                    },
                    previousScrollSnap: function() {
                        return r.indexPrevious.get()
                    },
                    reInit: $,
                    rootNode: function() {
                        return t
                    },
                    scrollNext: function(t) {
                        U(r.index.add(1).get(), t, -1)
                    },
                    scrollPrev: function(t) {
                        U(r.index.add(-1).get(), t, 1)
                    },
                    scrollProgress: function() {
                        return r.scrollProgress.get(r.location.get())
                    },
                    scrollSnapList: function() {
                        return r.scrollSnapList
                    },
                    scrollTo: U,
                    selectedScrollSnap: J,
                    slideNodes: function() {
                        return u
                    },
                    slidesInView: function() {
                        return r.slidesInView.get()
                    },
                    slidesNotInView: function() {
                        return r.slidesInView.get(!1)
                    }
                };
                return R(e, n), setTimeout(() => F.emit("init"), 0), X
            }

            function I(t = {}, e = []) {
                let n = (0, r.useRef)(t),
                    i = (0, r.useRef)(e),
                    [c, a] = (0, r.useState)(),
                    [l, s] = (0, r.useState)(),
                    f = (0, r.useCallback)(() => {
                        c && c.reInit(n.current, i.current)
                    }, [c]);
                return (0, r.useEffect)(() => {
                    o(n.current, t) || (n.current = t, f())
                }, [t, f]), (0, r.useEffect)(() => {
                    ! function(t, e) {
                        if (t.length !== e.length) return !1;
                        let n = u(t),
                            r = u(e);
                        return n.every((t, e) => o(t, r[e]))
                    }(i.current, e) && (i.current = e, f())
                }, [e, f]), (0, r.useEffect)(() => {
                    if ("undefined" != typeof window && window.document && window.document.createElement && l) {
                        D.globalOptions = I.globalOptions;
                        let t = D(l, n.current, i.current);
                        return a(t), () => t.destroy()
                    }
                    a(void 0)
                }, [l, a]), [s, c]
            }
            D.globalOptions = void 0, I.globalOptions = void 0
        }
    }
]);