! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "158a181d-e85b-4d7e-9ffc-b64c8b12e5a9", e._sentryDebugIdIdentifier = "sentry-dbid-158a181d-e85b-4d7e-9ffc-b64c8b12e5a9")
    } catch (e) {}
}(), (() => {
    "use strict";
    var e = {},
        t = {};

    function r(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var a = t[n] = {
                exports: {}
            },
            i = !0;
        try {
            e[n].call(a.exports, a, a.exports, r), i = !1
        } finally {
            i && delete t[n]
        }
        return a.exports
    }
    r.m = e, (() => {
        var e = [];
        r.O = (t, n, o, a) => {
            if (n) {
                a = a || 0;
                for (var i = e.length; i > 0 && e[i - 1][2] > a; i--) e[i] = e[i - 1];
                e[i] = [n, o, a];
                return
            }
            for (var d = 1 / 0, i = 0; i < e.length; i++) {
                for (var [n, o, a] = e[i], u = !0, l = 0; l < n.length; l++)(!1 & a || d >= a) && Object.keys(r.O).every(e => r.O[e](n[l])) ? n.splice(l--, 1) : (u = !1, a < d && (d = a));
                if (u) {
                    e.splice(i--, 1);
                    var s = o();
                    void 0 !== s && (t = s)
                }
            }
            return t
        }
    })(), r.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, {
            a: t
        }), t
    }, r.d = (e, t) => {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, r.f = {}, r.e = e => Promise.all(Object.keys(r.f).reduce((t, n) => (r.f[n](e, t), t), [])), r.u = e => "static/chunks/" + (777 === e ? "recorder" : e) + "." + ({
        348: "7ee9ea132bb9446b",
        547: "db8f8e2d46f95cf2",
        573: "8982d3e9a39c0a13",
        777: "a30603a1499837e3"
    })[e] + ".js", r.miniCssF = e => {}, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        var e = {},
            t = "_N_E:";
        r.l = (n, o, a, i) => {
            if (e[n]) {
                e[n].push(o);
                return
            }
            if (void 0 !== a)
                for (var d, u, l = document.getElementsByTagName("script"), s = 0; s < l.length; s++) {
                    var c = l[s];
                    if (c.getAttribute("src") == n || c.getAttribute("data-webpack") == t + a) {
                        d = c;
                        break
                    }
                }
            d || (u = !0, (d = document.createElement("script")).charset = "utf-8", d.timeout = 120, r.nc && d.setAttribute("nonce", r.nc), d.setAttribute("data-webpack", t + a), d.src = r.tu(n)), e[n] = [o];
            var f = (t, r) => {
                    d.onerror = d.onload = null, clearTimeout(b);
                    var o = e[n];
                    if (delete e[n], d.parentNode && d.parentNode.removeChild(d), o && o.forEach(e => e(r)), t) return t(r)
                },
                b = setTimeout(f.bind(null, void 0, {
                    type: "timeout",
                    target: d
                }), 12e4);
            d.onerror = f.bind(null, d.onerror), d.onload = f.bind(null, d.onload), u && document.head.appendChild(d)
        }
    })(), r.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e;
        r.tt = () => (void 0 === e && (e = {
            createScriptURL: e => e
        }, "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (e = trustedTypes.createPolicy("nextjs#bundler", e))), e)
    })(), r.tu = e => r.tt().createScriptURL(e), r.p = "/_next/", (() => {
        r.b = document.baseURI || self.location.href;
        var e = {
            68: 0
        };
        r.f.j = (t, n) => {
            var o = r.o(e, t) ? e[t] : void 0;
            if (0 !== o) {
                if (o) n.push(o[2]);
                else if (68 != t) {
                    var a = new Promise((r, n) => o = e[t] = [r, n]);
                    n.push(o[2] = a);
                    var i = r.p + r.u(t),
                        d = Error();
                    r.l(i, n => {
                        if (r.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                            var a = n && ("load" === n.type ? "missing" : n.type),
                                i = n && n.target && n.target.src;
                            d.message = "Loading chunk " + t + " failed.\n(" + a + ": " + i + ")", d.name = "ChunkLoadError", d.type = a, d.request = i, o[1](d)
                        }
                    }, "chunk-" + t, t)
                } else e[t] = 0
            }
        }, r.O.j = t => 0 === e[t];
        var t = (t, n) => {
                var o, a, [i, d, u] = n,
                    l = 0;
                if (i.some(t => 0 !== e[t])) {
                    for (o in d) r.o(d, o) && (r.m[o] = d[o]);
                    if (u) var s = u(r)
                }
                for (t && t(n); l < i.length; l++) a = i[l], r.o(e, a) && e[a] && e[a][0](), e[a] = 0;
                return r.O(s)
            },
            n = self.webpackChunk_N_E = self.webpackChunk_N_E || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })()
})();;
(function() {
    if (!/(?:^|;\s)__vercel_toolbar=1(?:;|$)/.test(document.cookie)) return;
    var s = document.createElement('script');
    s.src = 'https://vercel.live/_next-live/feedback/feedback.js';
    s.setAttribute("data-explicit-opt-in", "true");
    s.setAttribute("data-cookie-opt-in", "true");
    s.setAttribute("data-deployment-id", "dpl_5pRp8nmWF7mHuGGFewfY7xZwjkE8");
    ((document.head || document.documentElement).appendChild(s))
})();