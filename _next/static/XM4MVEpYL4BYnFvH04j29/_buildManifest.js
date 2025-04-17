self.__BUILD_MANIFEST = function(s, a, e, t, c, i, n, u, r, d, o, p, h, b, g, l, _, f, k, j) {
    return {
        __rewrites: {
            afterFiles: [{
                has: [{
                    type: a,
                    key: "o",
                    value: r
                }, {
                    type: a,
                    key: "p",
                    value: o
                }, {
                    type: a,
                    key: "r",
                    value: "(?<region>[a-z]{2})"
                }],
                source: p,
                destination: s
            }, {
                has: [{
                    type: a,
                    key: "o",
                    value: r
                }, {
                    type: a,
                    key: "p",
                    value: o
                }],
                source: p,
                destination: s
            }, {
                has: s,
                source: "/api/:path*",
                destination: s
            }, {
                has: s,
                source: "/agent-service-0/:path*",
                destination: s
            }, {
                has: s,
                source: "/__/auth/:path*",
                destination: s
            }],
            beforeFiles: [],
            fallback: []
        },
        __routerFilterStatic: {
            numItems: 0,
            errorRate: 1e-4,
            numBits: 0,
            numHashes: b,
            bitArray: []
        },
        __routerFilterDynamic: {
            numItems: 0,
            errorRate: 1e-4,
            numBits: t,
            numHashes: b,
            bitArray: []
        },
        "/": [e, c, "static/chunks/pages/index-a926a0a6a44086d4.js"],
        "/404": ["static/chunks/pages/404-418bec19607a398c.js"],
        "/500": ["static/css/70c99ad140e8f657.css", "static/chunks/pages/500-12ceaa025036e134.js"],
        "/_appController": ["static/chunks/pages/_appController-1cfb3fc806dd80a6.js"],
        "/_error": ["static/chunks/pages/_error-d0dfd87d52f8c4bd.js"],
        "/debug/video": [g, "static/chunks/pages/debug/video-cae280e3362286d2.js"],
        "/debug-user": ["static/css/9df9131885336e21.css", "static/chunks/pages/debug-user-56c84c183e1ed5d7.js"],
        "/login": ["static/chunks/pages/login-59fd4430b565847f.js"],
        "/old/[slug]": [e, i, n, l, _, "static/css/e2be581acbf7cd63.css", "static/chunks/pages/old/[slug]-e2c171a123cb1019.js"],
        "/privacy": [f, k, "static/chunks/pages/privacy-7c8cd25f836d51ef.js"],
        "/research/crossing_the_uncanny_valley_of_voice": [e, "static/chunks/764-c25d4673eb1fe222.js", c, g, "static/chunks/pages/research/crossing_the_uncanny_valley_of_voice-b64fa1c06df67de7.js"],
        "/sentry-example-page": ["static/chunks/pages/sentry-example-page-f1e64af16e3290f7.js"],
        "/team": [e, "static/chunks/193-26fdd2dadeeddccf.js", c, "static/chunks/pages/team-c63d3dcd8efb5206.js"],
        "/terms": [f, k, "static/chunks/pages/terms-ce7d4a6a2998cfea.js"],
        "/updates": [i, n, j, "static/css/383788ab1ae80e24.css", "static/chunks/pages/updates-0293fca1d49c2873.js"],
        "/updates/[slug]": [e, i, n, l, _, j, "static/css/451a7ccac35f4d6a.css", "static/chunks/pages/updates/[slug]-62928c69a1ee5301.js"],
        sortedPages: ["/", "/404", "/500", "/_app", "/_appController", "/_error", "/debug/video", "/debug-user", "/login", "/old/[slug]", "/privacy", "/research/crossing_the_uncanny_valley_of_voice", "/sentry-example-page", "/team", "/terms", "/updates", "/updates/[slug]"]
    }
}(void 0, "query", "static/chunks/965-139d174b2b07cde2.js", 0, "static/chunks/407-222bdd85a580dd0a.js", "static/chunks/956-c0123906ac45b83c.js", "static/chunks/748-05a305bfb7965acd.js", 0, "(?<orgid>\\d*)", 0, "(?<projectid>\\d*)", "/monitoring(/?)", 0, NaN, "static/chunks/340-ca859c367c3cc7fe.js", "static/css/eedbcc2960e81150.css", "static/chunks/701-61c910606d859e28.js", "static/chunks/652-572393fa993def2f.js", "static/chunks/766-7fb135d2bb087bac.js", "static/chunks/989-c8a98ea69e30a324.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();