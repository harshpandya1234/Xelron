! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c31ef296-45c0-429b-a19b-9caa618a8eb1", e._sentryDebugIdIdentifier = "sentry-dbid-c31ef296-45c0-429b-a19b-9caa618a8eb1")
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [407], {
        5580: (e, t, a) => {
            a.d(t, {
                A: () => y
            });
            var s, r = a(4848),
                n = a(9728),
                l = a(4164),
                i = a(6540);

            function o() {
                return (o = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a)({}).hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(null, arguments)
            }
            let c = function(e) {
                return i.createElement("svg", o({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 102 16"
                }, e), s || (s = i.createElement("path", {
                    fill: "currentColor",
                    d: "M94.225 16q-2.082 0-3.803-1.072a8.04 8.04 0 0 1-2.732-2.868q-1.012-1.81-1.012-4a8.1 8.1 0 0 1 .589-3.094 8.1 8.1 0 0 1 1.615-2.536A7.6 7.6 0 0 1 91.297.71a7.05 7.05 0 0 1 2.928-.62q1.676 0 3.08.665a7.1 7.1 0 0 1 2.43 1.856 7.95 7.95 0 0 1 1.539 2.793q.53 1.6.438 3.456h-12.8q.182 1.434.906 2.566a5.6 5.6 0 0 0 1.872 1.797q1.147.649 2.535.664 1.51 0 2.717-.785 1.223-.785 1.963-2.159l2.143.498a7.96 7.96 0 0 1-2.732 3.291Q96.489 16 94.226 16m-5.373-8.845h10.732a5.4 5.4 0 0 0-.86-2.566 5.6 5.6 0 0 0-1.917-1.872 4.9 4.9 0 0 0-2.582-.71 4.9 4.9 0 0 0-2.566.695 5.5 5.5 0 0 0-1.902 1.856 6.1 6.1 0 0 0-.905 2.597M61.05 15.608V.512h2.113v2.083A6 6 0 0 1 65.247.77a5.8 5.8 0 0 1 2.777-.68 6 6 0 0 1 3.125.846 6 6 0 0 1 2.219 2.219A6.05 6.05 0 0 1 75.57.935q1.404-.844 3.11-.844t3.11.83a6.25 6.25 0 0 1 2.233 2.234q.83 1.404.83 3.11v9.343h-2.113V6.732q0-1.208-.589-2.234a4.6 4.6 0 0 0-1.584-1.645 3.95 3.95 0 0 0-2.19-.634q-1.207 0-2.203.589a4.3 4.3 0 0 0-1.57 1.6q-.588 1.011-.588 2.324v8.876h-2.114V6.732q0-1.313-.588-2.324a4.25 4.25 0 0 0-1.585-1.6 4.25 4.25 0 0 0-2.204-.59q-1.193 0-2.189.635a4.6 4.6 0 0 0-1.585 1.645 4.4 4.4 0 0 0-.588 2.234v8.875zM55.917.512h2.113v15.095h-2.113l-.075-2.808a6.14 6.14 0 0 1-2.068 2.325q-1.329.875-3.17.875a7.8 7.8 0 0 1-3.11-.619 8.3 8.3 0 0 1-2.55-1.736 8 8 0 0 1-1.721-2.55 7.8 7.8 0 0 1-.62-3.11q0-1.63.605-3.064a8.2 8.2 0 0 1 1.69-2.521A7.9 7.9 0 0 1 47.404.71a7.65 7.65 0 0 1 3.064-.62q1.887 0 3.29.906a6.64 6.64 0 0 1 2.235 2.34zm-5.358 13.434q1.614 0 2.777-.785a5.17 5.17 0 0 0 1.781-2.143q.634-1.344.634-2.959 0-1.66-.634-2.988-.634-1.343-1.796-2.129-1.163-.785-2.762-.785a5.57 5.57 0 0 0-2.929.8 5.9 5.9 0 0 0-2.098 2.129q-.77 1.343-.77 2.973 0 1.645.8 2.99a6.1 6.1 0 0 0 2.113 2.112 5.57 5.57 0 0 0 2.883.785m-15.24 1.947a7.7 7.7 0 0 1-2.414-.452 6.8 6.8 0 0 1-2.053-1.148q-.876-.724-1.253-1.645l1.826-.785q.242.59.891 1.087.664.483 1.51.785a5.2 5.2 0 0 0 1.675.287q.92 0 1.72-.302.801-.302 1.299-.86.513-.574.513-1.344 0-.83-.543-1.298-.544-.483-1.374-.755a38 38 0 0 0-1.706-.543 21 21 0 0 1-2.822-.966q-1.223-.528-1.917-1.344-.68-.83-.68-2.128 0-1.374.77-2.37.785-1.01 2.038-1.555A6.6 6.6 0 0 1 35.501 0q1.842 0 3.35.8 1.526.8 2.205 2.128L39.35 3.94a2.73 2.73 0 0 0-.86-1.072 4.6 4.6 0 0 0-1.344-.71 4.9 4.9 0 0 0-1.51-.271 5 5 0 0 0-1.796.287q-.829.286-1.343.86Q32 3.607 32 4.438c0 .83.166.976.498 1.268q.498.422 1.343.694.86.256 1.933.604 1.373.438 2.58.996 1.209.558 1.948 1.389.74.83.724 2.098 0 1.358-.815 2.37-.814 1.011-2.113 1.554a6.7 6.7 0 0 1-2.777.483M20.553 16q-2.083 0-3.804-1.072a8.04 8.04 0 0 1-2.732-2.868q-1.011-1.81-1.011-4a8.1 8.1 0 0 1 .588-3.094A8.1 8.1 0 0 1 15.21 2.43 7.6 7.6 0 0 1 17.624.71a7.05 7.05 0 0 1 2.928-.62q1.675 0 3.08.665a7.1 7.1 0 0 1 2.43 1.856A7.9 7.9 0 0 1 27.6 5.404q.528 1.6.438 3.456h-12.8q.18 1.434.905 2.566a5.6 5.6 0 0 0 1.872 1.797q1.147.649 2.536.664 1.51 0 2.717-.785 1.223-.785 1.962-2.159l2.144.498a7.96 7.96 0 0 1-2.733 3.291Q22.817 16 20.552 16m-5.374-8.845H25.91a5.4 5.4 0 0 0-.86-2.566 5.6 5.6 0 0 0-1.917-1.872 4.9 4.9 0 0 0-2.581-.71 4.9 4.9 0 0 0-2.566.695 5.5 5.5 0 0 0-1.902 1.856 6.1 6.1 0 0 0-.906 2.597m-9.457 8.74a7.7 7.7 0 0 1-2.415-.454 6.8 6.8 0 0 1-2.053-1.147Q.378 13.57 0 12.65l1.826-.785q.242.59.891 1.087.664.483 1.51.785a5.2 5.2 0 0 0 1.675.287q.92 0 1.72-.302.801-.302 1.299-.86.513-.574.513-1.344 0-.83-.543-1.298-.544-.483-1.374-.755a38 38 0 0 0-1.706-.543 21 21 0 0 1-2.822-.966Q1.766 7.427 1.072 6.61q-.68-.83-.68-2.128 0-1.374.77-2.37Q1.947 1.103 3.2.558A6.6 6.6 0 0 1 5.902 0q1.842 0 3.35.8 1.526.8 2.205 2.128L9.75 3.94a2.73 2.73 0 0 0-.86-1.072 4.6 4.6 0 0 0-1.344-.71 4.9 4.9 0 0 0-1.51-.271 5 5 0 0 0-1.795.287q-.831.286-1.344.86-.498.573-.498 1.404c0 .83.166.976.498 1.268q.498.422 1.344.694.86.256 1.932.604 1.373.438 2.58.996 1.209.558 1.948 1.389.74.83.724 2.098 0 1.358-.815 2.37-.814 1.011-2.113 1.554a6.7 6.7 0 0 1-2.777.483"
                })))
            };

            function d() {
                return (d = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a)({}).hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(null, arguments)
            }
            let h = function(e) {
                return i.createElement("svg", d({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 51 50"
                }, e), i.createElement("path", {
                    fill: "#fff",
                    d: "M37.398 37.823h-5.186V29.7c0-1.936-.034-4.43-2.697-4.43-2.7 0-3.114 2.11-3.114 4.29v8.261h-5.186V21.121h4.979v2.282h.07a5.46 5.46 0 0 1 4.911-2.697c5.256 0 6.226 3.457 6.226 7.955zM15.364 18.838a3.01 3.01 0 1 1-.001-6.018 3.01 3.01 0 0 1 0 6.018m2.593 18.985h-5.192V21.12h5.192zm22.027-29.82H10.159a2.554 2.554 0 0 0-2.582 2.523v29.949A2.556 2.556 0 0 0 10.159 43h29.825a2.56 2.56 0 0 0 2.593-2.525V10.523a2.56 2.56 0 0 0-2.593-2.522",
                    style: {
                        fill: "#fff",
                        fillOpacity: 1
                    }
                }))
            };

            function f() {
                return (f = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a)({}).hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }).apply(null, arguments)
            }
            let m = function(e) {
                return i.createElement("svg", f({
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 51 50"
                }, e), i.createElement("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "M11.423 7.5a3 3 0 0 0-3 3v29a3 3 0 0 0 3 3h29a3 3 0 0 0 3-3v-29a3 3 0 0 0-3-3zm24.615 7h-3.51l-5.774 6.72-5.034-6.72h-7.297l8.683 11.48-8.221 9.52h3.51l6.374-7.327L30.31 35.5h7.112l-9.052-12.087zM33.22 33.353h-1.94L18.535 16.507h2.124z",
                    clipRule: "evenodd",
                    style: {
                        fill: "#fff",
                        fillOpacity: 1
                    }
                }))
            };
            var x = a(1106),
                u = a.n(x),
                v = a(6909);
            let y = () => (0, r.jsxs)("footer", {
                className: (0, l.A)(" bg-main text-white px-[var(--s24)] md:px-[var(--s60)] lg:px-[var(--s80)] pt-[var(--s96)] pb-[var(--s80)] relative", "sticky bottom-0 w-full z-0"),
                "data-sentry-component": "Footer",
                "data-sentry-source-file": "Footer.tsx",
                children: [(0, r.jsxs)("div", {
                    className: "absolute z-0 w-full top-0 h-full left-0",
                    children: [(0, r.jsx)("video", {
                        src: "https://storage.googleapis.com/sesame-dev-public/video/UpdateFade_smaller.mp4",
                        autoPlay: !0,
                        playsInline: !0,
                        muted: !0,
                        loop: !0,
                        className: "w-full h-full object-cover"
                    }), (0, r.jsx)("div", {
                        className: "absolute bg-black/20 inset-0"
                    })]
                }), (0, r.jsxs)("div", {
                    className: "flex flex-col items-start relative z-10 max-w-screen-2xl mx-auto",
                    children: [(0, r.jsx)("div", {
                        className: "pb-[var(--s40)] md:pb-[var(--s10)]",
                        children: (0, r.jsx)(c, {
                            className: "h-[var(--s16)]",
                            "data-sentry-element": "SesameLogo",
                            "data-sentry-source-file": "Footer.tsx"
                        })
                    }), (0, r.jsx)("div", {
                        className: "block md:hidden bg-white/20 h-[1px] w-full"
                    }), (0, r.jsxs)("div", {
                        className: "flex justify-between w-full items-center",
                        children: [(0, r.jsxs)("div", {
                            className: "flex flex-col md:flex-row text-sidebar-light py-[var(--s40)] md:py-[var(--s24)] gap-[var(--s24)] opacity-80",
                            children: [(0, r.jsx)(n.A, {
                                href: v.A.home,
                                "data-sentry-element": "Link",
                                "data-sentry-source-file": "Footer.tsx",
                                children: "Home"
                            }), (0, r.jsx)(n.A, {
                                href: v.A.research,
                                "data-sentry-element": "Link",
                                "data-sentry-source-file": "Footer.tsx",
                                children: "Research"
                            }), (0, r.jsx)(n.A, {
                                href: v.A.team,
                                "data-sentry-element": "Link",
                                "data-sentry-source-file": "Footer.tsx",
                                children: "Team"
                            }), (0, r.jsx)(u(), {
                                href: v.A.contact,
                                "data-sentry-element": "NextLink",
                                "data-sentry-source-file": "Footer.tsx",
                                children: "Contact us"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "hidden md:flex gap-[var(--s32)]",
                            children: [(0, r.jsx)(u(), {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: v.A.twitter,
                                "data-sentry-element": "NextLink",
                                "data-sentry-source-file": "Footer.tsx",
                                children: (0, r.jsx)(m, {
                                    className: "block w-[var(--s28)] h-[var(--s28)]",
                                    "data-sentry-element": "X",
                                    "data-sentry-source-file": "Footer.tsx"
                                })
                            }), (0, r.jsx)(u(), {
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: v.A.linkedin,
                                "data-sentry-element": "NextLink",
                                "data-sentry-source-file": "Footer.tsx",
                                children: (0, r.jsx)(h, {
                                    className: "block w-[var(--s28)] h-[var(--s28)]",
                                    "data-sentry-element": "Linkdin",
                                    "data-sentry-source-file": "Footer.tsx"
                                })
                            })]
                        })]
                    }), (0, r.jsx)("div", {
                        className: "bg-white/20 h-[1px] w-full"
                    }), (0, r.jsxs)("div", {
                        className: "flex md:hidden gap-[var(--s32)] mt-[var(--s46)]",
                        children: [(0, r.jsx)(u(), {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: v.A.twitter,
                            "data-sentry-element": "NextLink",
                            "data-sentry-source-file": "Footer.tsx",
                            children: (0, r.jsx)(m, {
                                className: "block w-[var(--s40)] h-[var(--s40)]",
                                "data-sentry-element": "X",
                                "data-sentry-source-file": "Footer.tsx"
                            })
                        }), (0, r.jsx)(u(), {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            href: v.A.linkedin,
                            "data-sentry-element": "NextLink",
                            "data-sentry-source-file": "Footer.tsx",
                            children: (0, r.jsx)(h, {
                                className: "block w-[var(--s40)] h-[var(--s40)]",
                                "data-sentry-element": "Linkdin",
                                "data-sentry-source-file": "Footer.tsx"
                            })
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "mt-[var(--s40)] md:mt-[var(--s32)] opacity-50 md:opacity-90 flex flex-col-reverse sm:flex-row justify-between w-full gap-[var(--s24)]",
                        children: [(0, r.jsxs)("p", {
                            className: "text-caption",
                            children: ["Copyright \xa9 ", new Date().getFullYear(), " Sesame AI Inc. All rights reserved."]
                        }), (0, r.jsxs)("div", {
                            className: "text-caption flex gap-[var(--s24)]",
                            children: [(0, r.jsx)(n.A, {
                                href: v.A.privacy,
                                "data-sentry-element": "Link",
                                "data-sentry-source-file": "Footer.tsx",
                                children: "Privacy"
                            }), (0, r.jsx)(n.A, {
                                href: v.A.terms,
                                "data-sentry-element": "Link",
                                "data-sentry-source-file": "Footer.tsx",
                                children: "Terms"
                            })]
                        })]
                    })]
                })]
            })
        },
        2558: (e, t, a) => {
            a.d(t, {
                A: () => l
            });
            var s = a(4848),
                r = a(9965),
                n = a.n(r);
            let l = e => {
                let {
                    src: t,
                    width: a,
                    height: r,
                    color: l = "rgba(0, 0, 0, 0.05)",
                    alt: i
                } = e, o = {
                    backgroundColor: l
                };
                return a && r ? o.aspectRatio = "".concat(a, "/").concat(r) : o.height = "100%", (0, s.jsx)("div", {
                    className: "w-full relative",
                    style: o,
                    "data-sentry-component": "Image",
                    "data-sentry-source-file": "Image.tsx",
                    children: (0, s.jsx)(n(), {
                        src: t,
                        alt: i,
                        fill: !0,
                        style: {
                            opacity: 0
                        },
                        onLoad: e => {
                            e.currentTarget.style.opacity = "1"
                        },
                        className: "w-full h-full object-cover transition-opacity duration-300",
                        loading: "lazy",
                        "data-sentry-element": "NextImage",
                        "data-sentry-source-file": "Image.tsx"
                    })
                })
            }
        },
        6557: (e, t, a) => {
            a.d(t, {
                A: () => c
            });
            var s = a(4848),
                r = a(9464),
                n = a(6540),
                l = a(8008),
                i = a(6372),
                o = a(6715);
            let c = e => {
                let {
                    children: t,
                    research: a
                } = e, c = (0, n.useRef)(!1), d = (0, i.P)(e => e.setPageLifecycle);
                return (0, o.useRouter)(), (0, n.useEffect)(() => {
                    if (c.current) return;
                    c.current = !0, d("init");
                    let e = (0, l.$)("#navigation-menu"),
                        t = (0, l.$)("#transition-overlay"),
                        a = (0, l.$)("#menu-transition-overlay");
                    a.style.pointerEvents = "default", r.Ay.set(a, {
                        opacity: 0
                    }), e.removeAttribute("data-menu-have-transition"), e.removeAttribute("data-menu-is-transitioning"), e.setAttribute("data-menu-open", "false"), r.Ay.to(t, {
                        opacity: 0,
                        duration: .2,
                        onComplete: () => {
                            t.style.pointerEvents = "none"
                        }
                    })
                }, []), (0, s.jsxs)(s.Fragment, {
                    children: [t, (0, s.jsx)("div", {
                        id: "transition-overlay",
                        className: "fixed top-0 left-0 w-full h-full bg-light1 overflow-y-scroll z-40"
                    })]
                })
            }
        },
        260: (e, t, a) => {
            a.d(t, {
                A: () => c
            });
            var s = a(4848),
                r = a(9728),
                n = a(4164),
                l = a(2558),
                i = a(1106),
                o = a.n(i);
            let c = e => {
                let {
                    href: t,
                    icon: a,
                    label: i,
                    external: c,
                    image: d,
                    nopush: h,
                    color: f = "white",
                    anchor: m
                } = e, x = c ? o() : r.A;
                return (0, s.jsxs)(x, {
                    href: t,
                    ...c && {
                        target: "_blank",
                        rel: "noopener noreferrer"
                    },
                    className: (0, n.A)("rounded-radius2 overflow-hidden block select-none"),
                    style: {
                        boxShadow: "grey" === f ? "none" : "0px 2px 15px 0px rgba(159, 159, 159, 0.15)"
                    },
                    nopush: h,
                    ...m && {
                        "data-anchor-link": !0
                    },
                    "data-sentry-element": "LinkComponent",
                    "data-sentry-component": "LinkButton",
                    "data-sentry-source-file": "LinkButton.tsx",
                    children: [d && (0, s.jsxs)("div", {
                        className: "relative overflow-hidden",
                        children: [!("length" in d) && (0, s.jsx)("div", {
                            className: "w-full",
                            children: (0, s.jsx)(l.A, {
                                src: d.src,
                                width: d.width,
                                height: d.height
                            })
                        }), "length" in d && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)("div", {
                                className: "hidden md:block w-full",
                                children: (0, s.jsx)(l.A, {
                                    src: d[0].src,
                                    width: d[0].width,
                                    height: d[0].height
                                })
                            }), (0, s.jsx)("div", {
                                className: "bock md:hidden w-full",
                                style: {
                                    aspectRatio: "".concat(d[1].width, "/").concat(d[1].height)
                                },
                                children: (0, s.jsx)(l.A, {
                                    src: d[1].src,
                                    width: d[1].width,
                                    height: d[1].height
                                })
                            })]
                        })]
                    }), (0, s.jsxs)("div", {
                        className: (0, n.A)("flex items-center py-[var(--s16)] md:py-[var(--s20)] px-[var(--s16)] md:px-[var(--s24)]", "white" === f && "bg-white", "grey" === f && "bg-light3", "black" === f && "bg-main text-white"),
                        children: [(0, s.jsx)("span", {
                            className: "block text-button flex-1",
                            children: i
                        }), a && (0, s.jsx)("span", {
                            className: "block shrink-0",
                            children: a
                        })]
                    })]
                })
            }
        }
    }
]);