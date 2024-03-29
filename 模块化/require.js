var requirejs, require, define;
!function (global) {
    "use strict";

    function isFunction(e) {
        return "[object Function]" === ostring.call(e)
    }

    function isArray(e) {
        return "[object Array]" === ostring.call(e)
    }

    function each(e, t) {
        if (e) {
            var i;
            for (i = 0; i < e.length && !t(e[i], i, e); i += 1) ;
        }
    }

    function eachReverse(e, t) {
        if (e) {
            var i;
            for (i = e.length - 1; i > -1 && !t(e[i], i, e); i -= 1) ;
        }
    }

    function hasProp(e, t) {
        return e.hasOwnProperty(t)
    }

    function eachProp(e, t) {
        var i;
        for (i in e) if (e.hasOwnProperty(i) && t(e[i], i)) break
    }

    function mixin(e, t, i) {
        t && eachProp(t, function (t, r) {
            (i || !hasProp(e, r)) && (e[r] = t)
        })
    }

    function bind(e, t) {
        return function () {
            return t.apply(e, arguments)
        }
    }

    function scripts() {
        return document.getElementsByTagName("script")
    }

    function getGlobal(e) {
        if (!e) return e;
        var t = global;
        return each(e.split("."), function (e) {
            t = t[e]
        }), t
    }

    function makeContextModuleFunc(e, t, i) {
        return function () {
            var r, n = aps.call(arguments, 0);
            return i && isFunction(r = n[n.length - 1]) && (r.__requireJsBuild = !0), n.push(t), e.apply(null, n)
        }
    }

    function addRequireMethods(e, t, i) {
        each([["toUrl"], ["undef"], ["defined", "requireDefined"], ["specified", "requireSpecified"]], function (r) {
            e[r[0]] = makeContextModuleFunc(t[r[1] || r[0]], i)
        })
    }

    function makeError(e, t, i, r) {
        var n = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
        return n.requireType = e, n.requireModules = r, i && (n.originalError = i), n
    }

    function newContext(e) {
        function t(e) {
            var t, i;
            for (t = 0; e[t]; t += 1) if (i = e[t], "." === i) e.splice(t, 1), t -= 1; else if (".." === i) {
                if (1 === t && (".." === e[2] || ".." === e[0])) break;
                t > 0 && (e.splice(t - 1, 2), t -= 2)
            }
        }

        function i(e, i, r) {
            var n, o, a, s, u, c, d, p, f = i && i.split("/"), l = M.map, h = l && l["*"];
            if (e && "." === e.charAt(0) && (i ? (f = M.pkgs[i] ? [i] : f.slice(0, f.length - 1), e = f.concat(e.split("/")), t(e), o = M.pkgs[n = e[0]], e = e.join("/"), o && e === n + "/" + o.main && (e = n)) : 0 === e.indexOf("./") && (e = e.substring(2))), r && (f || h) && l) for (s = e.split("/"), u = s.length; u > 0; u -= 1) {
                if (d = s.slice(0, u).join("/"), f) for (c = f.length; c > 0; c -= 1) if (a = l[f.slice(0, c).join("/")], a && (a = a[d])) {
                    p = a;
                    break
                }
                if (!p && h && h[d] && (p = h[d]), p) {
                    s.splice(0, u, p), e = s.join("/");
                    break
                }
            }
            return e
        }

        function r(e) {
            isBrowser && each(scripts(), function (t) {
                return t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === E.contextName ? (t.parentNode.removeChild(t), !0) : void 0
            })
        }

        function n(e) {
            var t = M.paths[e];
            return t && isArray(t) && t.length > 1 ? (r(e), t.shift(), E.undef(e), E.require([e]), !0) : void 0
        }

        function o(e, t, r, n) {
            var o, a, s, u, c = e ? e.indexOf("!") : -1, d = null, p = t ? t.name : null, f = e, l = !0;
            return e || (l = !1, e = "_@r" + (D += 1)), -1 !== c && (d = e.substring(0, c), e = e.substring(c + 1, e.length)), d && (d = i(d, p, n)), e && (d ? (s = A[d], o = s && s.normalize ? s.normalize(e, function (e) {
                return i(e, p, n)
            }) : i(e, p, n)) : (o = i(e, p, n), a = C[o], a || (a = E.nameToUrl(e, null, t), C[o] = a))), u = !d || s || r ? "" : "_unnormalized" + (R += 1), {
                prefix: d,
                name: o,
                parentMap: t,
                unnormalized: !!u,
                url: a,
                originalName: f,
                isDefine: l,
                id: (d ? d + "!" + (o || "") : o) + u
            }
        }

        function a(e) {
            var t = e.id, i = k[t];
            return i || (i = k[t] = new E.Module(e)), i
        }

        function s(e, t, i) {
            var r = e.id, n = k[r];
            !hasProp(A, r) || n && !n.defineEmitComplete ? a(e).on(t, i) : "defined" === t && i(A[r])
        }

        function u(e, t) {
            var i = e.requireModules, r = !1;
            t ? t(e) : (each(i, function (t) {
                var i = k[t];
                i && (i.error = e, i.events.error && (r = !0, i.emit("error", e)))
            }), r || req.onError(e))
        }

        function c() {
            globalDefQueue.length && (apsp.apply(j, [j.length - 1, 0].concat(globalDefQueue)), globalDefQueue = [])
        }

        function d(e, t, i) {
            var r = e && e.map, n = makeContextModuleFunc(i || E.require, r, t);
            return addRequireMethods(n, E, r), n
        }

        function p(e) {
            delete k[e], each(T, function (t, i) {
                return t.map.id === e ? (T.splice(i, 1), t.defined || (E.waitCount -= 1), !0) : void 0
            })
        }

        function f(e, t) {
            var i, r = e.map.id, n = e.depMaps;
            if (e.inited) return t[r] ? e : (t[r] = !0, each(n, function (e) {
                var n = e.id, o = k[n];
                if (o) return o.inited && o.enabled ? i = f(o, t) : (i = null, delete t[r], !0)
            }), i)
        }

        function l(e, t, i) {
            var r = e.map.id, n = e.depMaps;
            if (e.inited && e.map.isDefine) return t[r] ? A[r] : (t[r] = e, each(n, function (n) {
                var o, a = n.id, s = k[a];
                if (!y[a] && s) {
                    if (!s.inited || !s.enabled) return void (i[r] = !0);
                    o = l(s, t, i), i[a] || e.defineDepById(a, o)
                }
            }), e.check(!0), A[r])
        }

        function h(e) {
            e.check()
        }

        function m() {
            var e, t, i, o, a = 1e3 * M.waitSeconds, s = a && E.startTime + a < (new Date).getTime(), c = [], d = !1,
                p = !0;
            if (!b) {
                if (b = !0, eachProp(k, function (i) {
                    if (e = i.map, t = e.id, i.enabled && !i.error) if (!i.inited && s) n(t) ? (o = !0, d = !0) : (c.push(t), r(t)); else if (!i.inited && i.fetched && e.isDefine && (d = !0, !e.prefix)) return p = !1
                }), s && c.length) return i = makeError("timeout", "Load timeout for modules: " + c, null, c), i.contextName = E.contextName, u(i);
                p && (each(T, function (e) {
                    if (!e.defined) {
                        var t = f(e, {}), i = {};
                        t && (l(t, i, {}), eachProp(i, h))
                    }
                }), eachProp(k, h)), s && !o || !d || !isBrowser && !isWebWorker || S || (S = setTimeout(function () {
                    S = 0, m()
                }, 50)), b = !1
            }
        }

        function g(e) {
            a(o(e[0], null, !0)).init(e[1], e[2])
        }

        function v(e, t, i, r) {
            e.detachEvent && !isOpera ? r && e.detachEvent(r, t) : e.removeEventListener(i, t, !1)
        }

        function x(e) {
            var t = e.currentTarget || e.srcElement;
            return v(t, E.onScriptLoad, "load", "onreadystatechange"), v(t, E.onScriptError, "error"), {
                node: t,
                id: t && t.getAttribute("data-requiremodule")
            }
        }

        var b, q, E, y, S, M = {waitSeconds: 7, baseUrl: "./", paths: {}, pkgs: {}, shim: {}}, k = {}, w = {}, j = [],
            A = {}, C = {}, P = {}, D = 1, R = 1, T = [];
        return y = {
            require: function (e) {
                return d(e)
            }, exports: function (e) {
                return e.usingExports = !0, e.map.isDefine ? e.exports = A[e.map.id] = {} : void 0
            }, module: function (e) {
                return e.module = {
                    id: e.map.id, uri: e.map.url, config: function () {
                        return M.config && M.config[e.map.id] || {}
                    }, exports: A[e.map.id]
                }
            }
        }, q = function (e) {
            this.events = w[e.id] || {}, this.map = e, this.shim = M.shim[e.id], this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, q.prototype = {
            init: function (e, t, i, r) {
                r = r || {}, this.inited || (this.factory = t, i ? this.on("error", i) : this.events.error && (i = bind(this, function (e) {
                    this.emit("error", e)
                })), each(e, bind(this, function (e, t) {
                    "string" == typeof e && (e = o(e, this.map.isDefine ? this.map : this.map.parentMap, !1, !0), this.depMaps.push(e));
                    var r = y[e.id];
                    return r ? void (this.depExports[t] = r(this)) : (this.depCount += 1, s(e, "defined", bind(this, function (e) {
                        this.defineDep(t, e), this.check()
                    })), void (i && s(e, "error", i)))
                })), this.inited = !0, this.ignore = r.ignore, r.enabled || this.enabled ? this.enable() : this.check())
            }, defineDepById: function (e, t) {
                var i;
                return each(this.depMaps, function (t, r) {
                    return t.id === e ? (i = r, !0) : void 0
                }), this.defineDep(i, t)
            }, defineDep: function (e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
            }, fetch: function () {
                if (!this.fetched) {
                    this.fetched = !0, E.startTime = (new Date).getTime();
                    var e = this.map;
                    e.prefix ? this.callPlugin() : this.shim ? d(this, !0)(this.shim.deps || [], bind(this, function () {
                        this.load()
                    })) : this.load()
                }
            }, load: function () {
                var e = this.map.url;
                P[e] || (P[e] = !0, E.load(this.map.id, e))
            }, check: function (e) {
                if (this.enabled) {
                    var t, i, r = this.map.id, n = this.depExports, o = this.exports, a = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit("error", this.error); else if (!this.defining) {
                            if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                if (isFunction(a)) {
                                    if (this.events.error) try {
                                        o = E.execCb(r, a, n, o)
                                    } catch (s) {
                                        t = s
                                    } else o = E.execCb(r, a, n, o);
                                    if (this.map.isDefine && (i = this.module, i && void 0 !== i.exports && i.exports !== this.exports ? o = i.exports : void 0 === o && this.usingExports && (o = this.exports)), t) return t.requireMap = this.map, t.requireModules = [this.map.id], t.requireType = "define", u(this.error = t)
                                } else o = a;
                                this.exports = o, this.map.isDefine && !this.ignore && (A[r] = o, req.onResourceLoad && req.onResourceLoad(E, this.map, this.depMaps)), delete k[r], this.defined = !0, E.waitCount -= 1, 0 === E.waitCount && (T = [])
                            }
                            this.defining = !1, e || this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else this.fetch()
                }
            }, callPlugin: function () {
                var e = this.map, t = e.id, r = o(e.prefix, null, !1, !0);
                s(r, "defined", bind(this, function (r) {
                    var n, a, c, f = this.map.name, l = this.map.parentMap ? this.map.parentMap.name : null;
                    return this.map.unnormalized ? (r.normalize && (f = r.normalize(f, function (e) {
                        return i(e, l, !0)
                    })), a = o(e.prefix + "!" + f), s(a, "defined", bind(this, function (e) {
                        this.init([], function () {
                            return e
                        }, null, {enabled: !0, ignore: !0})
                    })), c = k[a.id], void (c && (this.events.error && c.on("error", bind(this, function (e) {
                        this.emit("error", e)
                    })), c.enable()))) : (n = bind(this, function (e) {
                        this.init([], function () {
                            return e
                        }, null, {enabled: !0})
                    }), n.error = bind(this, function (e) {
                        this.inited = !0, this.error = e, e.requireModules = [t], eachProp(k, function (e) {
                            0 === e.map.id.indexOf(t + "_unnormalized") && p(e.map.id)
                        }), u(e)
                    }), n.fromText = function (e, t) {
                        var i = useInteractive;
                        i && (useInteractive = !1), req.exec(t), i && (useInteractive = !0), E.completeLoad(e)
                    }, void r.load(e.name, d(e.parentMap, !0, function (e, t) {
                        return E.require(e, t)
                    }), n, M))
                })), E.enable(r, this), this.pluginMaps[r.id] = r
            }, enable: function () {
                this.enabled = !0, this.waitPushed || (T.push(this), E.waitCount += 1, this.waitPushed = !0), each(this.depMaps, bind(this, function (e) {
                    var t = e.id, i = k[t];
                    y[t] || !i || i.enabled || E.enable(e, this)
                })), eachProp(this.pluginMaps, bind(this, function (e) {
                    var t = k[e.id];
                    t && !t.enabled && E.enable(e, this)
                })), this.check()
            }, on: function (e, t) {
                var i = this.events[e];
                i || (i = this.events[e] = []), i.push(t)
            }, emit: function (e, t) {
                each(this.events[e], function (e) {
                    e(t)
                }), "error" === e && delete this.events[e]
            }
        }, E = {
            config: M,
            contextName: e,
            registry: k,
            defined: A,
            urlMap: C,
            urlFetched: P,
            waitCount: 0,
            defQueue: j,
            Module: q,
            makeModuleMap: o,
            configure: function (e) {
                e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
                var t = M.paths, i = M.pkgs, r = M.shim, n = M.map || {};
                mixin(M, e, !0), mixin(t, e.paths, !0), M.paths = t, e.map && (mixin(n, e.map, !0), M.map = n), e.shim && (eachProp(e.shim, function (e, t) {
                    isArray(e) && (e = {deps: e}), e.exports && !e.exports.__buildReady && (e.exports = E.makeShimExports(e.exports)), r[t] = e
                }), M.shim = r), e.packages && (each(e.packages, function (e) {
                    var t;
                    e = "string" == typeof e ? {name: e} : e, t = e.location, i[e.name] = {
                        name: e.name,
                        location: t || e.name,
                        main: (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                    }
                }), M.pkgs = i), (e.deps || e.callback) && E.require(e.deps || [], e.callback)
            },
            makeShimExports: function (e) {
                var t;
                return "string" == typeof e ? (t = function () {
                    return getGlobal(e)
                }, t.exports = e, t) : function () {
                    return e.apply(global, arguments)
                }
            },
            requireDefined: function (e, t) {
                return hasProp(A, o(e, t, !1, !0).id)
            },
            requireSpecified: function (e, t) {
                return e = o(e, t, !1, !0).id, hasProp(A, e) || hasProp(k, e)
            },
            require: function (t, i, r, n) {
                var s, d, p, f, l;
                if ("string" == typeof t) return isFunction(i) ? u(makeError("requireargs", "Invalid require call"), r) : req.get ? req.get(E, t, i) : (s = t, n = i, p = o(s, n, !1, !0), d = p.id, hasProp(A, d) ? A[d] : u(makeError("notloaded", 'Module name "' + d + '" has not been loaded yet for context: ' + e)));
                for (r && !isFunction(r) && (n = r, r = void 0), i && !isFunction(i) && (n = i, i = void 0), c(); j.length;) {
                    if (l = j.shift(), null === l[0]) return u(makeError("mismatch", "Mismatched anonymous define() module: " + l[l.length - 1]));
                    g(l)
                }
                return f = a(o(null, n)), f.init(t, i, r, {enabled: !0}), m(), E.require
            },
            undef: function (e) {
                var t = o(e, null, !0), i = k[e];
                delete A[e], delete C[e], delete P[t.url], delete w[e], i && (i.events.defined && (w[e] = i.events), p(e))
            },
            enable: function (e) {
                var t = k[e.id];
                t && a(e).enable()
            },
            completeLoad: function (e) {
                var t, i, r, o = M.shim[e] || {}, a = o.exports && o.exports.exports;
                for (c(); j.length;) {
                    if (i = j.shift(), null === i[0]) {
                        if (i[0] = e, t) break;
                        t = !0
                    } else i[0] === e && (t = !0);
                    g(i)
                }
                if (r = k[e], !t && !A[e] && r && !r.inited) {
                    if (!(!M.enforceDefine || a && getGlobal(a))) return n(e) ? void 0 : u(makeError("nodefine", "No define call for " + e, null, [e]));
                    g([e, o.deps || [], o.exports])
                }
                m()
            },
            toUrl: function (e, t) {
                var i = e.lastIndexOf("."), r = null;
                return -1 !== i && (r = e.substring(i, e.length), e = e.substring(0, i)), E.nameToUrl(e, r, t)
            },
            nameToUrl: function (e, t, r) {
                var n, o, a, s, u, c, d, p, f;
                if (e = i(e, r && r.id, !0), req.jsExtRegExp.test(e)) p = e + (t || ""); else {
                    for (n = M.paths, o = M.pkgs, u = e.split("/"), c = u.length; c > 0; c -= 1) {
                        if (d = u.slice(0, c).join("/"), a = o[d], f = n[d]) {
                            isArray(f) && (f = f[0]), u.splice(0, c, f);
                            break
                        }
                        if (a) {
                            s = e === a.name ? a.location + "/" + a.main : a.location, u.splice(0, c, s);
                            break
                        }
                    }
                    p = u.join("/") + (t || ".js"), p = ("/" === p.charAt(0) || p.match(/^[\w\+\.\-]+:/) ? "" : M.baseUrl) + p
                }
                return M.urlArgs ? p + ((-1 === p.indexOf("?") ? "?" : "&") + M.urlArgs) : p
            },
            load: function (e, t) {
                req.load(E, e, t)
            },
            execCb: function (e, t, i, r) {
                return t.apply(r, i)
            },
            onScriptLoad: function (e) {
                if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                    interactiveScript = null;
                    var t = x(e);
                    E.completeLoad(t.id)
                }
            },
            onScriptError: function (e) {
                var t = x(e);
                return n(t.id) ? void 0 : u(makeError("scripterror", "Script error", e, [t.id]))
            }
        }
    }

    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function (e) {
            return "interactive" === e.readyState ? interactiveScript = e : void 0
        }), interactiveScript)
    }

    var version = "2.0.0", commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
        cjsRequireRegExp = /require\s*\(\s*["']([^'"\s]+)["']\s*\)/g, jsSuffixRegExp = /\.js$/, currDirRegExp = /^\.\//,
        ostring = Object.prototype.toString, ap = Array.prototype, aps = ap.slice, apsp = ap.splice,
        isBrowser = !("undefined" == typeof window || !navigator || !document),
        isWebWorker = !isBrowser && "undefined" != typeof importScripts,
        readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        defContextName = "_", isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        contexts = {}, cfg = {}, globalDefQueue = [], useInteractive = !1, req, s, head, baseElement, dataMain, src,
        interactiveScript, currentlyAddingScript, mainScript, subPath;
    if ("undefined" == typeof define) {
        if ("undefined" != typeof requirejs) {
            if (isFunction(requirejs)) return;
            cfg = requirejs, requirejs = void 0
        }
        "undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function (e, t, i, r) {
            var n, o, a = defContextName;
            return isArray(e) || "string" == typeof e || (o = e, isArray(t) ? (e = t, t = i, i = r) : e = []), o && o.context && (a = o.context), n = contexts[a], n || (n = contexts[a] = req.s.newContext(a)), o && n.configure(o), n.require(e, t, i)
        }, req.config = function (e) {
            return req(e)
        }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
            contexts: contexts,
            newContext: newContext
        }, req({}), addRequireMethods(req, contexts[defContextName]), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = function (e) {
            throw e
        }, req.load = function (e, t, i) {
            var r, n = e && e.config || {};
            return isBrowser ? (r = n.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script"), r.type = n.scriptType || "text/javascript", r.charset = "utf-8", r.setAttribute("data-requirecontext", e.contextName), r.setAttribute("data-requiremodule", t), !r.attachEvent || r.attachEvent.toString && r.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (r.addEventListener("load", e.onScriptLoad, !1), r.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0, r.attachEvent("onreadystatechange", e.onScriptLoad)), r.src = i, currentlyAddingScript = r, baseElement ? head.insertBefore(r, baseElement) : head.appendChild(r), currentlyAddingScript = null, r) : void (isWebWorker && (importScripts(i), e.completeLoad(t)))
        }, isBrowser && eachReverse(scripts(), function (e) {
            return head || (head = e.parentNode), dataMain = e.getAttribute("data-main"), dataMain ? (cfg.baseUrl || (src = dataMain.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath, dataMain = mainScript.replace(jsSuffixRegExp, "")), cfg.deps = cfg.deps ? cfg.deps.concat(dataMain) : [dataMain], !0) : void 0
        }), define = function (e, t, i) {
            var r, n;
            "string" != typeof e && (i = t, t = e, e = null), isArray(t) || (i = t, t = []), !t.length && isFunction(i) && i.length && (i.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function (e, i) {
                t.push(i)
            }), t = (1 === i.length ? ["require"] : ["require", "exports", "module"]).concat(t)), useInteractive && (r = currentlyAddingScript || getInteractiveScript(), r && (e || (e = r.getAttribute("data-requiremodule")), n = contexts[r.getAttribute("data-requirecontext")])), (n ? n.defQueue : globalDefQueue).push([e, t, i])
        }, define.amd = {jQuery: !0}, req.exec = function (text) {
            return eval(text)
        }, req(cfg)
    }
}(this);
