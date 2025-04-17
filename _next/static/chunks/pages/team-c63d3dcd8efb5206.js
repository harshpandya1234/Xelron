! function() {
    try {
        var A = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
            e = (new A.Error).stack;
        e && (A._sentryDebugIds = A._sentryDebugIds || {}, A._sentryDebugIds[e] = "0254e249-a49a-4650-873e-117f704fb7d4", A._sentryDebugIdIdentifier = "sentry-dbid-0254e249-a49a-4650-873e-117f704fb7d4")
    } catch (A) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [819], {
        9212: (A, e, t) => {
            "use strict";
            t.d(e, {
                A: () => C
            });
            var a, s = t(6540);

            function g() {
                return (g = Object.assign ? Object.assign.bind() : function(A) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var a in t)({}).hasOwnProperty.call(t, a) && (A[a] = t[a])
                    }
                    return A
                }).apply(null, arguments)
            }
            let C = function(A) {
                return s.createElement("svg", g({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 12,
                    height: 12,
                    fill: "none"
                }, A), a || (a = s.createElement("path", {
                    fill: "#111",
                    d: "M11.742 8.808c0 .496-.38.877-.83.877-.458 0-.825-.397-.825-.854V5.986l.13-3.157-1.235 1.388-7.275 7.275a.83.83 0 0 1-.595.26c-.458 0-.862-.412-.862-.854 0-.214.092-.428.267-.603L7.784 3.02 9.172 1.8l-3.286.106H3.17c-.458 0-.847-.366-.847-.808 0-.45.359-.831.87-.831h7.656c.542 0 .892.358.892.885z"
                })))
            }
        },
        1946: (A, e, t) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/team", function() {
                return t(4557)
            }])
        },
        6452: (A, e, t) => {
            "use strict";
            t.d(e, {
                A: () => C
            });
            var a = t(4848),
                s = t(4164),
                g = t(5580);
            let C = A => {
                let {
                    children: e
                } = A;
                return (0, a.jsxs)("div", {
                    className: "relative z-0",
                    "data-sentry-component": "PageLayout",
                    "data-sentry-source-file": "PageLayout.tsx",
                    children: [(0, a.jsxs)("div", {
                        className: "w-full bg-light1 relative z-10",
                        children: [(0, a.jsx)("div", {
                            className: (0, s.A)("relative", "grid grid-cols-6 gap-[var(--s20)] md:grid-cols-12 max-w-screen-2xl mx-auto", "px-[var(--s28)] sm:px-[var(--s32)] md:px-[var(--s40)] lg:px-[var(--s80)]", "pt-[var(--s80)] md:pt-[var(--s200)]", "relative z-10 min-h-[100dvh]"),
                            children: (0, a.jsx)("div", {
                                className: (0, s.A)("col-start-1 col-end-7", "md:col-start-4 md:col-end-12", "lg:col-end-10"),
                                children: e
                            })
                        }), (0, a.jsx)("div", {
                            className: "absolute bottom-0 w-full rounded-b-radius1 h-[calc(2*var(--radius-1))] bg-light1 translate-y-[50%]"
                        })]
                    }), (0, a.jsx)(g.A, {
                        "data-sentry-element": "Footer",
                        "data-sentry-source-file": "PageLayout.tsx"
                    })]
                })
            }
        },
        4557: (A, e, t) => {
            "use strict";
            t.r(e), t.d(e, {
                __N_SSG: () => b,
                default: () => p
            });
            var a, s, g = t(4848),
                C = t(6540);

            function B(A) {
                return (B = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(A) {
                    return typeof A
                } : function(A) {
                    return A && "function" == typeof Symbol && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A
                })(A)
            }

            function n() {
                return (n = Object.assign ? Object.assign.bind() : function(A) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var a in t)({}).hasOwnProperty.call(t, a) && (A[a] = t[a])
                    }
                    return A
                }).apply(null, arguments)
            }

            function E(A, e, t) {
                var a;
                return (a = function(A, e) {
                    if ("object" != B(A) || !A) return A;
                    var t = A[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var a = t.call(A, e || "default");
                        if ("object" != B(a)) return a;
                        throw TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(A)
                }(e, "string"), (e = "symbol" == B(a) ? a : a + "") in A) ? Object.defineProperty(A, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : A[e] = t, A
            }
            let r = function(A) {
                return C.createElement("svg", n({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 20,
                    height: 14,
                    fill: "none"
                }, A), C.createElement("path", {
                    fill: "#111",
                    d: "M3.446 13.69c-1.64 0-2.501-.847-2.501-2.479V2.784c0-1.624.854-2.47 2.31-2.47h13.857c1.64 0 2.501.846 2.501 2.47v8.427c0 1.632-.854 2.479-2.31 2.479zm6.147-6.246q.331.297.686.297.354 0 .686-.297l6.345-5.72c-.061-.007-.13-.007-.198-.007H3.446q-.105-.002-.198.007zM18.21 2.83c0-.06 0-.122-.008-.175l-4.46 4.019 4.468 4.469zM2.348 2.823v8.32l4.469-4.47-4.462-4.018q-.009.078-.007.168m1.098 9.464h13.666c.137 0 .259-.016.373-.039L12.78 7.535l-1.037.938c-.465.42-.938.61-1.464.61s-1-.19-1.464-.61l-1.037-.938-4.706 4.713c.115.023.237.039.374.039",
                    style: E(E({
                        fill: "#111"
                    }, "fill", "color(display-p3 .0667 .0667 .0667)"), "fillOpacity", 1)
                }))
            };

            function l() {
                return (l = Object.assign ? Object.assign.bind() : function(A) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = arguments[e];
                        for (var a in t)({}).hasOwnProperty.call(t, a) && (A[a] = t[a])
                    }
                    return A
                }).apply(null, arguments)
            }
            let i = function(A) {
                return C.createElement("svg", l({
                    xmlns: "http://www.w3.org/2000/svg",
                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                    width: 20,
                    height: 20,
                    fill: "none"
                }, A), a || (a = C.createElement("path", {
                    fill: "url(#linkedin_svg__a)",
                    d: "M0 0h20v20H0z"
                })), s || (s = C.createElement("defs", null, C.createElement("pattern", {
                    id: "linkedin_svg__a",
                    width: 1,
                    height: 1,
                    patternContentUnits: "objectBoundingBox"
                }, C.createElement("use", {
                    xlinkHref: "#linkedin_svg__b",
                    transform: "scale(.00195)"
                })), C.createElement("image", {
                    xlinkHref: "data:image/png;base64,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AIEaBBQANayiHAgQIECAQKGAAqAQTHcCBAgQIFCDgAKghlWUAwECBAgQKBRQABSC6U6AAAECBGoQUADUsIpyIECAAAEChQIKgEIw3QkQIECAQA0CCoAaVlEOBAgQIECgUEABUAimOwECBAgQqEFAAVDDKsqBAAECBAgUCigACsF0J0CAAAECNQgoAGpYRTkQIECAAIFCAQVAIZjuBAgQIECgBgEFQA2rKAcCBAgQIFAooAAoBNOdAAECBAjUIKAAqGEV5UCAAAECBAoFFACFYLoTIECAAIEaBBQANayiHAgQIECAQKGAAqAQTHcCBAgQIFCDgAKghlWUAwECBAgQKBRQABSC6U6AAAECBGoQUADUsIpyIECAAAEChQIKgEIw3QkQIECAQA0CCoAaVlEOBAgQIECgUEABUAimOwECBAgQqEFAAVDDKsqBAAECBAgUCigACsF0J0CAAAECNQgoAGpYRTkQIECAAIFCAQVAIZjuBAgQIECgBgEFQA2rKAcCBAgQIFAooAAoBNOdAAECBAjUIKAAqGEV5UCAAAECBAoFFACFYLoTIECAAIEaBBQANayiHAgQIECAQKGAAqAQTHcCBAgQIFCDgAKghlWUAwECBAgQKBRQABSC6U6AAAECBGoQUADUsIpyIECAAAEChQIKgEIw3QkQIECAQA0CCoAaVlEOBAgQIECgUEABUAimOwECBAgQqEFAAVDDKsqBAAECBAgUCigACsF0J0CAAAECNQgoAGpYRTkQIECAAIFCAQVAIZjuBAgQIECgBgEFQA2rKAcCBAgQIFAooAAoBNOdAAECBAjUIKAAqGEV5UCAAAECBAoFFACFYLoTIECAAIEaBBQANayiHAgQIECAQKGAAqAQTHcCBAgQIFCDgAKghlWUAwECBAgQKBRQABSC6U6AAAECBGoQUADUsIpyIECAAAEChQIKgEIw3QkQIECAQA0CCoAaVlEOBAgQIECgUEABUAimOwECBAgQqEFAAVDDKsqBAAECBAgUCigACsF0J0CAAAECNQgoAGpYRTkQIECAAIFCAQVAIZjuBAgQIECgBgEFQA2rKAcCBAgQIFAooAAoBNOdAAECBAjUIKAAqGEV5UCAAAECBAoFFACFYLoTIECAAIEaBBQANayiHAgQIECAQKGAAqAQTHcCBAgQIFCDgAKghlWUAwECBAgQKBRQABSC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",
                    id: "linkedin_svg__b",
                    width: 512,
                    height: 512,
                    preserveAspectRatio: "none"
                }))))
            };
            var Q = t(9212),
                o = t(6452),
                c = t(6557);
            let I = A => {
                    let [e, t] = (0, C.useState)(!0), [a, s] = (0, C.useState)(!0), g = (0, C.useCallback)(() => {
                        A && A.scrollPrev()
                    }, [A]), B = (0, C.useCallback)(() => {
                        A && A.scrollNext()
                    }, [A]), n = (0, C.useCallback)(A => {
                        t(!A.canScrollPrev()), s(!A.canScrollNext())
                    }, []);
                    return (0, C.useEffect)(() => {
                        A && (n(A), A.on("reInit", n).on("select", n))
                    }, [A, n]), {
                        prevBtnDisabled: e,
                        nextBtnDisabled: a,
                        onPrevButtonClick: g,
                        onNextButtonClick: B
                    }
                },
                d = A => {
                    let {
                        children: e,
                        disabled: t,
                        ...a
                    } = A;
                    return (0, g.jsxs)("button", {
                        className: "embla__button embla__button--prev",
                        type: "button",
                        disabled: t,
                        ...a,
                        "data-sentry-component": "PrevButton",
                        "data-sentry-source-file": "EmblaCarouselArrowButtons.tsx",
                        children: [(0, g.jsx)("svg", {
                            width: "8",
                            height: "14",
                            viewBox: "0 0 8 14",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "data-sentry-element": "svg",
                            "data-sentry-source-file": "EmblaCarouselArrowButtons.tsx",
                            children: (0, g.jsx)("path", {
                                opacity: t ? "0.2" : "1",
                                d: "M0.00585938 7.06445C0.00585938 6.90951 0.0354818 6.76595 0.0947266 6.63379C0.153971 6.50163 0.247396 6.37174 0.375 6.24414L5.58398 1.14453C5.77539 0.953125 6.01009 0.857422 6.28809 0.857422C6.47493 0.857422 6.64583 0.902995 6.80078 0.994141C6.95573 1.08529 7.07878 1.20833 7.16992 1.36328C7.26562 1.51367 7.31348 1.68229 7.31348 1.86914C7.31348 2.15169 7.2041 2.39779 6.98535 2.60742L2.40527 7.06445L6.98535 11.5215C7.2041 11.7357 7.31348 11.9818 7.31348 12.2598C7.31348 12.4466 7.26562 12.6152 7.16992 12.7656C7.07878 12.9206 6.95573 13.0436 6.80078 13.1348C6.64583 13.2259 6.47493 13.2715 6.28809 13.2715C6.01009 13.2715 5.77539 13.1758 5.58398 12.9844L0.375 7.88477C0.247396 7.75716 0.153971 7.62728 0.0947266 7.49512C0.0354818 7.36296 0.00585938 7.2194 0.00585938 7.06445Z",
                                fill: "#111111",
                                fillOpacity: "0.5",
                                "data-sentry-element": "path",
                                "data-sentry-source-file": "EmblaCarouselArrowButtons.tsx"
                            })
                        }), e]
                    })
                },
                x = A => {
                    let {
                        children: e,
                        disabled: t,
                        ...a
                    } = A;
                    return (0, g.jsxs)("button", {
                        className: "embla__button embla__button--next",
                        type: "button",
                        disabled: t,
                        ...a,
                        "data-sentry-component": "NextButton",
                        "data-sentry-source-file": "EmblaCarouselArrowButtons.tsx",
                        children: [(0, g.jsx)("svg", {
                            width: "9",
                            height: "14",
                            viewBox: "0 0 9 14",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            "data-sentry-element": "svg",
                            "data-sentry-source-file": "EmblaCarouselArrowButtons.tsx",
                            children: (0, g.jsx)("path", {
                                opacity: t ? "0.2" : "1",
                                d: "M8.18652 7.06445C8.18652 7.2194 8.1569 7.36296 8.09766 7.49512C8.03841 7.62728 7.94499 7.75716 7.81738 7.88477L2.6084 12.9844C2.41699 13.1758 2.18229 13.2715 1.9043 13.2715C1.71745 13.2715 1.54655 13.2259 1.3916 13.1348C1.23665 13.0436 1.11361 12.9206 1.02246 12.7656C0.931315 12.6152 0.885742 12.4466 0.885742 12.2598C0.885742 11.9818 0.992839 11.7357 1.20703 11.5215L5.78711 7.06445L1.20703 2.60742C0.992839 2.39779 0.885742 2.15169 0.885742 1.86914C0.885742 1.68229 0.931315 1.51367 1.02246 1.36328C1.11361 1.20833 1.23665 1.08529 1.3916 0.994141C1.54655 0.902995 1.71745 0.857422 1.9043 0.857422C2.18229 0.857422 2.41699 0.953125 2.6084 1.14453L7.81738 6.24414C7.94499 6.37174 8.03841 6.50163 8.09766 6.63379C8.1569 6.76595 8.18652 6.90951 8.18652 7.06445Z",
                                fill: "#111111",
                                fillOpacity: "0.5",
                                "data-sentry-element": "path",
                                "data-sentry-source-file": "EmblaCarouselArrowButtons.tsx"
                            })
                        }), e]
                    })
                },
                f = A => {
                    let [e, t] = (0, C.useState)(0), [a, s] = (0, C.useState)(0), g = (0, C.useCallback)(A => {
                        s(A.scrollSnapList().length), t(A.selectedScrollSnap())
                    }, []);
                    return (0, C.useEffect)(() => {
                        A && (g(A), A.on("select", g), A.on("reInit", g))
                    }, [A, g]), {
                        selectedSnap: e,
                        snapCount: a
                    }
                },
                m = A => {
                    let {
                        selectedSnap: e,
                        snapCount: t
                    } = A;
                    return (0, g.jsxs)("div", {
                        className: "embla__selected-snap-display text-sidebar-light text-tertiary",
                        "data-sentry-component": "SelectedSnapDisplay",
                        "data-sentry-source-file": "EmblaCarouselSelectedSnapDisplay.tsx",
                        children: [e + 1, " / ", t]
                    })
                };
            var u = t(5193),
                h = t(2558);
            let w = A => {
                let {
                    slides: e,
                    options: t
                } = A, [a, s] = (0, u.A)(t), {
                    prevBtnDisabled: C,
                    nextBtnDisabled: B,
                    onPrevButtonClick: n,
                    onNextButtonClick: E
                } = I(s), {
                    selectedSnap: r,
                    snapCount: l
                } = f(s);
                return (0, g.jsxs)("section", {
                    className: "embla",
                    "data-sentry-component": "EmblaCarousel",
                    "data-sentry-source-file": "EmblaCaroussel.tsx",
                    children: [(0, g.jsx)("div", {
                        className: "embla__viewport rounded-radius2",
                        ref: a,
                        children: (0, g.jsx)("div", {
                            className: "embla__container",
                            children: e.map((A, e) => (0, g.jsx)("div", {
                                className: "embla__slide rounded-radius2 overflow-hidden",
                                style: {
                                    flex: "0 0 calc(var(--slide-height) * ".concat(A.aspectRatio, ")")
                                },
                                children: (0, g.jsx)("div", {
                                    className: "embla__slide__number relative w-full h-full",
                                    children: (0, g.jsx)(h.A, {
                                        src: A.src
                                    })
                                })
                            }, e))
                        })
                    }), (0, g.jsxs)("div", {
                        className: "embla__controls",
                        children: [(0, g.jsxs)("div", {
                            className: "embla__buttons",
                            children: [(0, g.jsx)(d, {
                                onClick: n,
                                disabled: C,
                                "data-sentry-element": "PrevButton",
                                "data-sentry-source-file": "EmblaCaroussel.tsx"
                            }), (0, g.jsx)(x, {
                                onClick: E,
                                disabled: B,
                                "data-sentry-element": "NextButton",
                                "data-sentry-source-file": "EmblaCaroussel.tsx"
                            })]
                        }), (0, g.jsx)(m, {
                            selectedSnap: r,
                            snapCount: l,
                            "data-sentry-element": "SelectedSnapDisplay",
                            "data-sentry-source-file": "EmblaCaroussel.tsx"
                        })]
                    })]
                })
            };
            var v = t(260),
                j = t(6909),
                F = t(9728);
            let y = (A, e) => {
                let {
                    pageData: t
                } = A, a = {
                    dragFree: !0
                };
                return (0, g.jsx)(c.A, {
                    "data-sentry-element": "PageWrapper",
                    "data-sentry-component": "Team",
                    "data-sentry-source-file": "team.tsx",
                    children: (0, g.jsx)(o.A, {
                        "data-sentry-element": "PageLayout",
                        "data-sentry-source-file": "team.tsx",
                        children: (0, g.jsxs)("div", {
                            className: "flex flex-col gap-[var(--s60)] md:gap-[var(--s80)] pb-[var(--s80)] md:pb-[var(--s120)]",
                            children: [(0, g.jsxs)("div", {
                                className: "flex flex-col gap-[var(--s60)]",
                                children: [(0, g.jsxs)("div", {
                                    className: "flex flex-col gap-[var(--s40)] md:gap-[var(--s40)]",
                                    children: [(0, g.jsx)("h2", {
                                        className: "text-h1",
                                        style: {
                                            fontVariationSettings: '"SERF" 33'
                                        },
                                        children: "Team"
                                    }), (0, g.jsxs)("div", {
                                        className: "flex flex-col gap-[var(--s8)]",
                                        children: [(0, g.jsxs)("p", {
                                            className: "text-body text-tertiary",
                                            children: ["Sesame is led by", " ", (0, g.jsx)("span", {
                                                className: "text-main",
                                                children: "Brendan Iribe, Ankit Kumar, Ryan Brown,"
                                            }), " ", "and a team of creative individuals with a shared passion. We are backed by Anjney Midha and Marc Andreessen at Andreessen Horowitz, along with Spark Capital, Matrix Partners, and a collection of founders and investors."]
                                        }), (0, g.jsx)("p", {
                                            className: "text-body text-tertiary",
                                            children: "We have offices in San Francisco, Bellevue, and New York. Our team members have long-tenured careers in machine learning, hardware, software, and entertainment."
                                        }), (0, g.jsx)("p", {
                                            className: "text-body text-tertiary",
                                            children: "We strongly believe that a small, focused team with a clear vision can build great things."
                                        })]
                                    }), (0, g.jsx)("div", {
                                        children: (0, g.jsx)(v.A, {
                                            href: j.A.openRoles,
                                            external: !0,
                                            label: "See open roles",
                                            icon: (0, g.jsx)(Q.A, {}),
                                            "data-sentry-element": "LinkButton",
                                            "data-sentry-source-file": "team.tsx"
                                        })
                                    })]
                                }), (0, g.jsxs)("div", {
                                    children: [(0, g.jsx)(w, {
                                        slides: [{
                                            src: "/assets/images/team/3.jpg",
                                            aspectRatio: 2048 / 1366
                                        }, {
                                            src: "/assets/images/team/12.jpg",
                                            aspectRatio: 947 / 1340
                                        }, {
                                            src: "/assets/images/team/13.jpg",
                                            aspectRatio: 1600 / 1400
                                        }, {
                                            src: "/assets/images/team/4.jpg",
                                            aspectRatio: 1365 / 2048
                                        }],
                                        options: a,
                                        "data-sentry-element": "EmblaCarousel",
                                        "data-sentry-source-file": "team.tsx"
                                    }), (0, g.jsx)("div", {
                                        className: "line mt-[var(--s32)]"
                                    })]
                                })]
                            }), (0, g.jsxs)("div", {
                                className: "flex flex-col gap-[var(--s40)] md:gap-[var(--s60)]",
                                children: [(0, g.jsxs)("div", {
                                    className: "flex flex-col gap-[var(--s32)] md:gap-[var(--s40)]",
                                    children: [(0, g.jsx)("h2", {
                                        className: "text-h2",
                                        style: {
                                            fontVariationSettings: '"SERF" 33'
                                        },
                                        children: "Product"
                                    }), (0, g.jsx)("div", {
                                        className: "flex flex-col gap-[var(--s24)] md:gap-[var(--s40)]",
                                        children: (0, g.jsxs)("div", {
                                            className: "flex flex-col gap-[var(--s8)]",
                                            children: [(0, g.jsx)("p", {
                                                className: "text-body text-tertiary",
                                                children: "We are building voice companions capable of holding natural conversations and devices that make them more effective."
                                            }), (0, g.jsx)("p", {
                                                className: "text-body text-tertiary",
                                                children: "Voice as an interface is nuanced and intimate, which makes it a difficult medium to get right. There is a high bar that must be met for voice interfaces to be useful and not annoying, and we are careful and deliberate in how we design our products to meet our users where they want to be."
                                            }), (0, g.jsx)("p", {
                                                className: "text-body text-tertiary",
                                                children: "We believe that a great voice product calls for an interdisciplinary approach that tightly integrates hardware, software, and machine learning."
                                            })]
                                        })
                                    })]
                                }), (0, g.jsxs)("div", {
                                    children: [(0, g.jsx)(w, {
                                        slides: [{
                                            src: "/assets/images/team/8.jpg",
                                            aspectRatio: 1.275
                                        }, {
                                            src: "/assets/images/team/5.jpg",
                                            aspectRatio: 2048 / 1366
                                        }, {
                                            src: "/assets/images/team/7.jpg",
                                            aspectRatio: 2048 / 1366
                                        }, {
                                            src: "/assets/images/team/11.jpg",
                                            aspectRatio: 2048 / 1364
                                        }],
                                        options: a,
                                        "data-sentry-element": "EmblaCarousel",
                                        "data-sentry-source-file": "team.tsx"
                                    }), (0, g.jsx)("div", {
                                        className: "line mt-[var(--s32)]"
                                    })]
                                })]
                            }), (0, g.jsx)("div", {
                                className: "flex flex-col gap-[var(--s40)] md:gap-[var(--s60)]",
                                children: (0, g.jsxs)("div", {
                                    className: "flex flex-col gap-[var(--s32)] md:gap-[var(--s40)]",
                                    children: [(0, g.jsx)("h2", {
                                        className: "text-h2",
                                        style: {
                                            fontVariationSettings: '"SERF" 33'
                                        },
                                        children: "Research"
                                    }), (0, g.jsxs)("div", {
                                        className: "flex flex-col gap-[var(--s32)] md:gap-[var(--s40)]",
                                        children: [(0, g.jsxs)("p", {
                                            className: "text-body text-tertiary",
                                            children: ["Deep and innovative machine learning research is essential to our goals. Our research team is actively pushing forward on multiple fronts, including speech generation, personality modeling, and multimodality. Read more about our research in", " ", (0, g.jsx)(F.A, {
                                                className: "underline",
                                                href: j.A.technical,
                                                "data-sentry-element": "Link",
                                                "data-sentry-source-file": "team.tsx",
                                                children: "conversational speech generation"
                                            }), ".", (0, g.jsx)("br", {}), (0, g.jsx)("br", {}), "These ambitious research outcomes are only possible with scaled infrastructure for data and training. We operate large GPU clusters and cultivate in-house expertise in training and evaluation."]
                                        }), (0, g.jsx)("div", {
                                            className: "line"
                                        })]
                                    })]
                                })
                            }), (0, g.jsx)("div", {
                                children: (0, g.jsxs)("div", {
                                    className: "flex flex-col gap-[var(--s32)]  md:gap-[var(--s40)]",
                                    children: [(0, g.jsx)("h2", {
                                        className: "text-h2",
                                        children: "Interested?"
                                    }), (0, g.jsx)("p", {
                                        className: "text-body text-tertiary",
                                        children: "If what we are doing resonates with you, reach out."
                                    }), (0, g.jsxs)("div", {
                                        className: "flex flex-col gap-[var(--s10)]",
                                        children: [(0, g.jsx)(v.A, {
                                            href: j.A.careercontact,
                                            label: "Email us",
                                            icon: (0, g.jsx)(r, {}),
                                            external: !0,
                                            "data-sentry-element": "LinkButton",
                                            "data-sentry-source-file": "team.tsx"
                                        }), (0, g.jsx)(v.A, {
                                            href: j.A.openRoles,
                                            external: !0,
                                            label: "See open roles",
                                            icon: (0, g.jsx)(Q.A, {}),
                                            "data-sentry-element": "LinkButton",
                                            "data-sentry-source-file": "team.tsx"
                                        }), (0, g.jsx)(v.A, {
                                            href: j.A.linkedin,
                                            label: "Sesame on Linkedin",
                                            icon: (0, g.jsx)(i, {}),
                                            external: !0,
                                            "data-sentry-element": "LinkButton",
                                            "data-sentry-source-file": "team.tsx"
                                        })]
                                    })]
                                })
                            }), (0, g.jsx)("div", {})]
                        })
                    })
                })
            };
            y.displayName = "Team";
            var b = !0;
            let p = (0, C.forwardRef)(y)
        }
    },
    A => {
        var e = e => A(A.s = e);
        A.O(0, [965, 193, 407, 636, 593, 792], () => e(1946)), _N_E = A.O()
    }
]);