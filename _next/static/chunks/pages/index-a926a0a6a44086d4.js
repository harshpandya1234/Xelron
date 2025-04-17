! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            s = (new e.Error).stack;
        s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "6c0a20e4-c2bb-4f6e-ab73-14b8a3f7043d", e._sentryDebugIdIdentifier = "sentry-dbid-6c0a20e4-c2bb-4f6e-ab73-14b8a3f7043d")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [332], {
        9212: (e, s, a) => {
            "use strict";
            a.d(s, {
                A: () => n
            });
            var t, r = a(6540);

            function l() {
                return (l = Object.assign ? Object.assign.bind() : function(e) {
                    for (var s = 1; s < arguments.length; s++) {
                        var a = arguments[s];
                        for (var t in a)({}).hasOwnProperty.call(a, t) && (e[t] = a[t])
                    }
                    return e
                }).apply(null, arguments)
            }
            let n = function(e) {
                return r.createElement("svg", l({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 12,
                    height: 12,
                    fill: "none"
                }, e), t || (t = r.createElement("path", {
                    fill: "#111",
                    d: "M11.742 8.808c0 .496-.38.877-.83.877-.458 0-.825-.397-.825-.854V5.986l.13-3.157-1.235 1.388-7.275 7.275a.83.83 0 0 1-.595.26c-.458 0-.862-.412-.862-.854 0-.214.092-.428.267-.603L7.784 3.02 9.172 1.8l-3.286.106H3.17c-.458 0-.847-.366-.847-.808 0-.45.359-.831.87-.831h7.656c.542 0 .892.358.892.885z"
                })))
            }
        },
        2022: (e, s, a) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return a(3327)
            }])
        },
        6452: (e, s, a) => {
            "use strict";
            a.d(s, {
                A: () => n
            });
            var t = a(4848),
                r = a(4164),
                l = a(5580);
            let n = e => {
                let {
                    children: s
                } = e;
                return (0, t.jsxs)("div", {
                    className: "relative z-0",
                    "data-sentry-component": "PageLayout",
                    "data-sentry-source-file": "PageLayout.tsx",
                    children: [(0, t.jsxs)("div", {
                        className: "w-full bg-light1 relative z-10",
                        children: [(0, t.jsx)("div", {
                            className: (0, r.A)("relative", "grid grid-cols-6 gap-[var(--s20)] md:grid-cols-12 max-w-screen-2xl mx-auto", "px-[var(--s28)] sm:px-[var(--s32)] md:px-[var(--s40)] lg:px-[var(--s80)]", "pt-[var(--s80)] md:pt-[var(--s200)]", "relative z-10 min-h-[100dvh]"),
                            children: (0, t.jsx)("div", {
                                className: (0, r.A)("col-start-1 col-end-7", "md:col-start-4 md:col-end-12", "lg:col-end-10"),
                                children: s
                            })
                        }), (0, t.jsx)("div", {
                            className: "absolute bottom-0 w-full rounded-b-radius1 h-[calc(2*var(--radius-1))] bg-light1 translate-y-[50%]"
                        })]
                    }), (0, t.jsx)(l.A, {
                        "data-sentry-element": "Footer",
                        "data-sentry-source-file": "PageLayout.tsx"
                    })]
                })
            }
        },
        3327: (e, s, a) => {
            "use strict";
            a.r(s), a.d(s, {
                __N_SSG: () => x,
                default: () => u
            });
            var t = a(4848),
                r = a(6540),
                l = a(9728),
                n = a(6452),
                i = a(6557),
                d = a(260),
                c = a(6909),
                o = a(2558),
                h = a(9212);
            let m = (e, s) => {
                let {
                    pageData: a
                } = e;
                return (0, t.jsx)(i.A, {
                    "data-sentry-element": "PageWrapper",
                    "data-sentry-component": "Home",
                    "data-sentry-source-file": "index.tsx",
                    children: (0, t.jsx)(n.A, {
                        "data-sentry-element": "PageLayout",
                        "data-sentry-source-file": "index.tsx",
                        children: (0, t.jsxs)("div", {
                            className: "flex flex-col gap-[var(--s40)] md:gap-[var(--s80)] pb-[var(--s80)] md:pb-[var(--s120)]",
                            children: [(0, t.jsxs)("h1", {
                                className: "text-h1",
                                style: {
                                    fontVariationSettings: '"SERF" 33'
                                },
                                children: [(0, t.jsx)("span", {
                                    className: "block",
                                    children: "Bringing"
                                }), " ", (0, t.jsx)("span", {
                                    className: "block",
                                    children: "the computer"
                                }), " ", (0, t.jsx)("span", {
                                    className: "block",
                                    children: "to life"
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "text-h4",
                                children: [(0, t.jsx)("p", {
                                    className: "text-tertiary",
                                    children: "We believe in a future where computers are lifelike. They will see, hear, and collaborate with us the way we’re used to. A natural human voice is key to unlocking this future."
                                }), (0, t.jsx)("p", {
                                    className: "mt-[var(--s20)]",
                                    children: "To start, we have two goals."
                                })]
                            }), (0, t.jsx)("div", {
                                className: "line"
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("p", {
                                    className: "text-h4 text-tertiary pointer-events-none select-none",
                                    children: "01"
                                }), (0, t.jsxs)("div", {
                                    className: "mt-[var(--s32)] flex flex-col gap-[var(--s40)] md:gap-[var(--s40)]",
                                    children: [(0, t.jsxs)("div", {
                                        children: [(0, t.jsx)("h2", {
                                            className: "text-h2",
                                            children: "A personal companion"
                                        }), (0, t.jsxs)("p", {
                                            className: "text-h4 text-tertiary mt-[var(--s16)]",
                                            children: ["An ever-present brilliant friend and conversationalist, keeping you informed and organized, helping you be a better version of yourself.", (0, t.jsx)("br", {}), (0, t.jsx)("br", {}), "Try our research", " ", (0, t.jsx)(l.A, {
                                                className: "underline",
                                                href: c.A.demo,
                                                "data-anchor-link": !0,
                                                "data-sentry-element": "Link",
                                                "data-sentry-source-file": "index.tsx",
                                                children: "demo"
                                            }), "."]
                                        })]
                                    }), (0, t.jsx)(d.A, {
                                        href: c.A.research,
                                        image: [{
                                            src: "/assets/images/HomeGraph-Desktop02.jpg",
                                            width: 1980,
                                            height: 870
                                        }, {
                                            src: "/assets/images/Home Page Graph - Mobile02.jpg",
                                            width: 1125,
                                            height: 870
                                        }],
                                        label: "Crossing the uncanny valley of conversational voice",
                                        color: "white",
                                        icon: (0, t.jsx)(h.A, {}),
                                        "data-sentry-element": "LinkButton",
                                        "data-sentry-source-file": "index.tsx"
                                    })]
                                })]
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("p", {
                                    className: "text-h4 text-tertiary pointer-events-none select-none",
                                    children: "02"
                                }), (0, t.jsxs)("div", {
                                    className: "mt-[var(--s32)] flex flex-col gap-[var(--s40)] md:gap-[var(--s40)]",
                                    children: [(0, t.jsxs)("div", {
                                        children: [(0, t.jsx)("h2", {
                                            className: "text-h2",
                                            children: "Lightweight eyewear"
                                        }), (0, t.jsx)("p", {
                                            className: "text-h4 text-tertiary mt-[var(--s16)]",
                                            children: "Designed to be worn all day, giving you high-quality audio and convenient access to your companion who can observe the world alongside you."
                                        })]
                                    }), (0, t.jsx)("div", {
                                        className: "w-full overflow-hidden rounded-radius2 relative",
                                        children: (0, t.jsx)(o.A, {
                                            src: "/assets/images/3U0A4373-2.png",
                                            width: 630,
                                            height: 320,
                                            "data-sentry-element": "Image",
                                            "data-sentry-source-file": "index.tsx"
                                        })
                                    })]
                                })]
                            }), (0, t.jsx)("div", {
                                className: "line"
                            }), (0, t.jsxs)("div", {
                                className: "flex flex-col gap-[var(--s40)] md:gap-[var(--s60)]",
                                children: [(0, t.jsxs)("div", {
                                    children: [(0, t.jsx)("h2", {
                                        className: "text-h2",
                                        children: "Join Sesame"
                                    }), (0, t.jsxs)("p", {
                                        className: "text-h4 text-tertiary mt-[var(--s16)] md:mt-[var(--s24)]",
                                        children: ["Sesame is an interdisciplinary product and research team focused on making voice companions useful for daily life. Learn more about our", " ", (0, t.jsx)(l.A, {
                                            className: "underline",
                                            href: c.A.team,
                                            "data-sentry-element": "Link",
                                            "data-sentry-source-file": "index.tsx",
                                            children: "team and mission"
                                        }), "."]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: "flex flex-col gap-[var(--s12)] md:gap-[var(--s60)]",
                                    children: [(0, t.jsxs)("div", {
                                        className: "grid gap-[var(--s12)] grid-cols-8 h-[15rem] md:h-[20rem]",
                                        children: [(0, t.jsx)("div", {
                                            className: "col-start-1 sm:col-end-6 col-end-5 h-full rounded-radius2 overflow-hidden",
                                            children: (0, t.jsx)("div", {
                                                className: "w-full h-full relative",
                                                children: (0, t.jsx)(o.A, {
                                                    src: "/assets/images/temp/hero-03.jpg",
                                                    "data-sentry-element": "Image",
                                                    "data-sentry-source-file": "index.tsx"
                                                })
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: "col-start-5 sm:col-start-6 col-end-9 h-full rounded-radius2 overflow-hidden",
                                            children: (0, t.jsx)("div", {
                                                className: "w-full h-full relative",
                                                children: (0, t.jsx)(o.A, {
                                                    src: "/assets/images/team/2.jpg",
                                                    "data-sentry-element": "Image",
                                                    "data-sentry-source-file": "index.tsx"
                                                })
                                            })
                                        })]
                                    }), (0, t.jsx)("div", {
                                        children: (0, t.jsx)(d.A, {
                                            href: c.A.openRoles,
                                            label: "Careers at Sesame",
                                            color: "white",
                                            external: !0,
                                            icon: (0, t.jsx)(h.A, {}),
                                            "data-sentry-element": "LinkButton",
                                            "data-sentry-source-file": "index.tsx"
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                })
            };
            m.displayName = "Home";
            var x = !0;
            let u = (0, r.forwardRef)(m)
        }
    },
    e => {
        var s = s => e(e.s = s);
        e.O(0, [965, 407, 636, 593, 792], () => s(2022)), _N_E = e.O()
    }
]);