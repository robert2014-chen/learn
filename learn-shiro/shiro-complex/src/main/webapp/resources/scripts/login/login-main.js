!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = !!e && "length"in e && e.length, n = Ft.type(e);
        return "function" !== n && !Ft.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t, n) {
        if (Ft.isFunction(t))return Ft.grep(e, function (e, r) {
            return !!t.call(e, r, e) !== n
        });
        if (t.nodeType)return Ft.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (K.test(t))return Ft.filter(t, e, n);
            t = Ft.filter(t, e)
        }
        return Ft.grep(e, function (e) {
            return qt.call(t, e) > -1 !== n
        })
    }

    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function o(e) {
        var t = {};
        return Ft.each(e.match(oe) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function s() {
        jt.removeEventListener("DOMContentLoaded", s), e.removeEventListener("load", s), Ft.ready()
    }

    function a() {
        this.expando = Ft.expando + a.uid++
    }

    function u(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)if (r = "data-" + t.replace(de, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
            try {
                n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : fe.test(n) ? Ft.parseJSON(n) : n)
            } catch (e) {
            }
            le.set(e, t, n)
        } else n = void 0;
        return n
    }

    function c(e, t, n, r) {
        var i, o = 1, s = 20, a = r ? function () {
            return r.cur()
        } : function () {
            return Ft.css(e, t, "")
        }, u = a(), c = n && n[3] || (Ft.cssNumber[t] ? "" : "px"), l = (Ft.cssNumber[t] || "px" !== c && +u) && he.exec(Ft.css(e, t));
        if (l && l[3] !== c) {
            c = c || l[3], n = n || [], l = +u || 1;
            do o = o || ".5", l /= o, Ft.style(e, t, l + c); while (o !== (o = a() / u) && 1 !== o && --s)
        }
        return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = i)), i
    }

    function l(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Ft.nodeName(e, t) ? Ft.merge([e], n) : n
    }

    function f(e, t) {
        for (var n = 0, r = e.length; n < r; n++)ce.set(e[n], "globalEval", !t || ce.get(t[n], "globalEval"))
    }

    function d(e, t, n, r, i) {
        for (var o, s, a, u, c, d, p = t.createDocumentFragment(), h = [], g = 0, v = e.length; g < v; g++)if (o = e[g], o || 0 === o)if ("object" === Ft.type(o))Ft.merge(h, o.nodeType ? [o] : o); else if (we.test(o)) {
            for (s = s || p.appendChild(t.createElement("div")), a = (ye.exec(o) || ["", ""])[1].toLowerCase(), u = xe[a] || xe._default, s.innerHTML = u[1] + Ft.htmlPrefilter(o) + u[2], d = u[0]; d--;)s = s.lastChild;
            Ft.merge(h, s.childNodes), s = p.firstChild, s.textContent = ""
        } else h.push(t.createTextNode(o));
        for (p.textContent = "", g = 0; o = h[g++];)if (r && Ft.inArray(o, r) > -1)i && i.push(o); else if (c = Ft.contains(o.ownerDocument, o), s = l(p.appendChild(o), "script"), c && f(s), n)for (d = 0; o = s[d++];)be.test(o.type || "") && n.push(o);
        return p
    }

    function p() {
        return !0
    }

    function h() {
        return !1
    }

    function g() {
        try {
            return jt.activeElement
        } catch (e) {
        }
    }

    function v(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (a in t)v(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1)i = h; else if (!i)return e;
        return 1 === o && (s = i, i = function (e) {
            return Ft().off(e), s.apply(this, arguments)
        }, i.guid = s.guid || (s.guid = Ft.guid++)), e.each(function () {
            Ft.event.add(this, t, i, r, n)
        })
    }

    function m(e, t) {
        return Ft.nodeName(e, "table") && Ft.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function b(e) {
        var t = Ae.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function x(e, t) {
        var n, r, i, o, s, a, u, c;
        if (1 === t.nodeType) {
            if (ce.hasData(e) && (o = ce.access(e), s = ce.set(t, o), c = o.events)) {
                delete s.handle, s.events = {};
                for (i in c)for (n = 0, r = c[i].length; n < r; n++)Ft.event.add(t, i, c[i][n])
            }
            le.hasData(e) && (a = le.access(e), u = Ft.extend({}, a), le.set(t, u))
        }
    }

    function w(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function T(e, t, n, r) {
        t = At.apply([], t);
        var i, o, s, a, u, c, f = 0, p = e.length, h = p - 1, g = t[0], v = Ft.isFunction(g);
        if (v || p > 1 && "string" == typeof g && !Lt.checkClone && Se.test(g))return e.each(function (i) {
            var o = e.eq(i);
            v && (t[0] = g.call(this, i, o.html())), T(o, t, n, r)
        });
        if (p && (i = d(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
            for (s = Ft.map(l(i, "script"), y), a = s.length; f < p; f++)u = i, f !== h && (u = Ft.clone(u, !0, !0), a && Ft.merge(s, l(u, "script"))), n.call(e[f], u, f);
            if (a)for (c = s[s.length - 1].ownerDocument, Ft.map(s, b), f = 0; f < a; f++)u = s[f], be.test(u.type || "") && !ce.access(u, "globalEval") && Ft.contains(c, u) && (u.src ? Ft._evalUrl && Ft._evalUrl(u.src) : Ft.globalEval(u.textContent.replace(Ee, "")))
        }
        return e
    }

    function C(e, t, n) {
        for (var r, i = t ? Ft.filter(t, e) : e, o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || Ft.cleanData(l(r)), r.parentNode && (n && Ft.contains(r.ownerDocument, r) && f(l(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function k(e, t) {
        var n = Ft(t.createElement(e)).appendTo(t.body), r = Ft.css(n[0], "display");
        return n.detach(), r
    }

    function _(e) {
        var t = jt, n = Ne[e];
        return n || (n = k(e, t), "none" !== n && n || (qe = (qe || Ft("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = qe[0].contentDocument, t.write(), t.close(), n = k(e, t), qe.detach()), Ne[e] = n), n
    }

    function j(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || Le(e), s = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== s && void 0 !== s || Ft.contains(e.ownerDocument, e) || (s = Ft.style(e, t)), n && !Lt.pixelMarginRight() && He.test(s) && De.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o), void 0 !== s ? s + "" : s
    }

    function S(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function A(e) {
        if (e in Be)return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Re.length; n--;)if (e = Re[n] + t, e in Be)return e
    }

    function E(e, t, n) {
        var r = he.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function q(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2)"margin" === n && (s += Ft.css(e, n + ge[o], !0, i)), r ? ("content" === n && (s -= Ft.css(e, "padding" + ge[o], !0, i)), "margin" !== n && (s -= Ft.css(e, "border" + ge[o] + "Width", !0, i))) : (s += Ft.css(e, "padding" + ge[o], !0, i), "padding" !== n && (s += Ft.css(e, "border" + ge[o] + "Width", !0, i)));
        return s
    }

    function N(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Le(e), s = "border-box" === Ft.css(e, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (i = j(e, t, o), (i < 0 || null == i) && (i = e.style[t]), He.test(i))return i;
            r = s && (Lt.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + q(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }

    function D(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)r = e[s], r.style && (o[s] = ce.get(r, "olddisplay"), n = r.style.display, t ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && ve(r) && (o[s] = ce.access(r, "olddisplay", _(r.nodeName)))) : (i = ve(r), "none" === n && i || ce.set(r, "olddisplay", i ? n : Ft.css(r, "display"))));
        for (s = 0; s < a; s++)r = e[s], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }

    function H(e, t, n, r, i) {
        return new H.prototype.init(e, t, n, r, i)
    }

    function L() {
        return e.setTimeout(function () {
            We = void 0
        }), We = Ft.now()
    }

    function O(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; r < 4; r += 2 - t)n = ge[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function F(e, t, n) {
        for (var r, i = (M.tweeners[t] || []).concat(M.tweeners["*"]), o = 0, s = i.length; o < s; o++)if (r = i[o].call(n, t, e))return r
    }

    function I(e, t, n) {
        var r, i, o, s, a, u, c, l, f = this, d = {}, p = e.style, h = e.nodeType && ve(e), g = ce.get(e, "fxshow");
        n.queue || (a = Ft._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function () {
            a.unqueued || u()
        }), a.unqueued++, f.always(function () {
            f.always(function () {
                a.unqueued--, Ft.queue(e, "fx").length || a.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = Ft.css(e, "display"), l = "none" === c ? ce.get(e, "olddisplay") || _(e.nodeName) : c, "inline" === l && "none" === Ft.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)if (i = t[r], ze.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                if ("show" !== i || !g || void 0 === g[r])continue;
                h = !0
            }
            d[r] = g && g[r] || Ft.style(e, r)
        } else c = void 0;
        if (Ft.isEmptyObject(d))"inline" === ("none" === c ? _(e.nodeName) : c) && (p.display = c); else {
            g ? "hidden"in g && (h = g.hidden) : g = ce.access(e, "fxshow", {}), o && (g.hidden = !h), h ? Ft(e).show() : f.done(function () {
                Ft(e).hide()
            }), f.done(function () {
                var t;
                ce.remove(e, "fxshow");
                for (t in d)Ft.style(e, t, d[t])
            });
            for (r in d)s = F(h ? g[r] : 0, r, f), r in g || (g[r] = s.start, h && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function P(e, t) {
        var n, r, i, o, s;
        for (n in e)if (r = Ft.camelCase(n), i = t[r], o = e[n], Ft.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = Ft.cssHooks[r], s && "expand"in s) {
            o = s.expand(o), delete e[r];
            for (n in o)n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    function M(e, t, n) {
        var r, i, o = 0, s = M.prefilters.length, a = Ft.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i)return !1;
            for (var t = We || L(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, s = 0, u = c.tweens.length; s < u; s++)c.tweens[s].run(o);
            return a.notifyWith(e, [c, o, n]), o < 1 && u ? n : (a.resolveWith(e, [c]), !1)
        }, c = a.promise({
            elem: e,
            props: Ft.extend({}, t),
            opts: Ft.extend(!0, {specialEasing: {}, easing: Ft.easing._default}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: We || L(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = Ft.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? c.tweens.length : 0;
                if (i)return this;
                for (i = !0; n < r; n++)c.tweens[n].run(1);
                return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
            }
        }), l = c.props;
        for (P(l, c.opts.specialEasing); o < s; o++)if (r = M.prefilters[o].call(c, e, l, c.opts))return Ft.isFunction(r.stop) && (Ft._queueHooks(c.elem, c.opts.queue).stop = Ft.proxy(r.stop, r)), r;
        return Ft.map(l, F, c), Ft.isFunction(c.opts.start) && c.opts.start.call(e, c), Ft.fx.timer(Ft.extend(u, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function R(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function B(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(oe) || [];
            if (Ft.isFunction(n))for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function W(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0, Ft.each(e[a] || [], function (e, a) {
                var c = a(t, n, r);
                return "string" != typeof c || s || o[c] ? s ? !(u = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
            }), u
        }

        var o = {}, s = e === lt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function $(e, t) {
        var n, r, i = Ft.ajaxSettings.flatOptions || {};
        for (n in t)void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Ft.extend(!0, e, r), e
    }

    function z(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0];)u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)for (i in a)if (a[i] && a[i].test(r)) {
            u.unshift(i);
            break
        }
        if (u[0]in n)o = u[0]; else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        if (o)return o !== u[0] && u.unshift(o), n[o]
    }

    function X(e, t, n, r) {
        var i, o, s, a, u, c = {}, l = e.dataTypes.slice();
        if (l[1])for (s in e.converters)c[s.toLowerCase()] = e.converters[s];
        for (o = l.shift(); o;)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift())if ("*" === o)o = u; else if ("*" !== u && u !== o) {
            if (s = c[u + " " + o] || c["* " + o], !s)for (i in c)if (a = i.split(" "), a[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                s === !0 ? s = c[i] : c[i] !== !0 && (o = a[0], l.unshift(a[1]));
                break
            }
            if (s !== !0)if (s && e.throws)t = s(t); else try {
                t = s(t)
            } catch (e) {
                return {state: "parsererror", error: s ? e : "No conversion from " + u + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    function U(e, t, n, r) {
        var i;
        if (Ft.isArray(t))Ft.each(t, function (t, i) {
            n || ht.test(e) ? r(e, i) : U(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== Ft.type(t))r(e, t); else for (i in t)U(e + "[" + i + "]", t[i], n, r)
    }

    function V(e) {
        return Ft.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }

    var Y, G, J, Q, Z, K, ee, te, ne, re, ie, oe, se, ae, ue, ce, le, fe, de, pe, he, ge, ve, me, ye, be, xe, we, Te, Ce, ke, _e, je, Se, Ae, Ee, qe, Ne, De, He, Le, Oe, Fe, Ie, Pe, Me, Re, Be, We, $e, ze, Xe, Ue, Ve, Ye, Ge, Je, Qe, Ze, Ke, et, tt, nt, rt, it, ot, st, at, ut, ct, lt, ft, dt, pt, ht, gt, vt, mt, yt, bt, xt, wt, Tt, Ct, kt, _t = [], jt = e.document, St = _t.slice, At = _t.concat, Et = _t.push, qt = _t.indexOf, Nt = {}, Dt = Nt.toString, Ht = Nt.hasOwnProperty, Lt = {}, Ot = "2.2.4", Ft = function (e, t) {
        return new Ft.fn.init(e, t)
    }, It = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Pt = /^-ms-/, Mt = /-([\da-z])/gi, Rt = function (e, t) {
        return t.toUpperCase()
    };
    return Ft.fn = Ft.prototype = {
        jquery: Ot, constructor: Ft, selector: "", length: 0, toArray: function () {
            return St.call(this)
        }, get: function (e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : St.call(this)
        }, pushStack: function (e) {
            var t = Ft.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e) {
            return Ft.each(this, e)
        }, map: function (e) {
            return this.pushStack(Ft.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(St.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: Et, sort: _t.sort, splice: _t.splice
    }, Ft.extend = Ft.fn.extend = function () {
        var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || Ft.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++)if (null != (e = arguments[a]))for (t in e)n = s[t], r = e[t], s !== r && (c && r && (Ft.isPlainObject(r) || (i = Ft.isArray(r))) ? (i ? (i = !1, o = n && Ft.isArray(n) ? n : []) : o = n && Ft.isPlainObject(n) ? n : {}, s[t] = Ft.extend(c, o, r)) : void 0 !== r && (s[t] = r));
        return s
    }, Ft.extend({
        expando: "jQuery" + (Ot + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === Ft.type(e)
        }, isArray: Array.isArray, isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            var t = e && e.toString();
            return !Ft.isArray(e) && t - parseFloat(t) + 1 >= 0
        }, isPlainObject: function (e) {
            var t;
            if ("object" !== Ft.type(e) || e.nodeType || Ft.isWindow(e))return !1;
            if (e.constructor && !Ht.call(e, "constructor") && !Ht.call(e.constructor.prototype || {}, "isPrototypeOf"))return !1;
            for (t in e);
            return void 0 === t || Ht.call(e, t)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Nt[Dt.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            var t, n = eval;
            e = Ft.trim(e), e && (1 === e.indexOf("use strict") ? (t = jt.createElement("script"), t.text = e, jt.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        }, camelCase: function (e) {
            return e.replace(Pt, "ms-").replace(Mt, Rt)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t) {
            var r, i = 0;
            if (n(e))for (r = e.length; i < r && t.call(e[i], i, e[i]) !== !1; i++); else for (i in e)if (t.call(e[i], i, e[i]) === !1)break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(It, "")
        }, makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? Ft.merge(r, "string" == typeof e ? [e] : e) : Et.call(r, e)), r
        }, inArray: function (e, t, n) {
            return null == t ? -1 : qt.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; o < s; o++)r = !t(e[o], o), r !== a && i.push(e[o]);
            return i
        }, map: function (e, t, r) {
            var i, o, s = 0, a = [];
            if (n(e))for (i = e.length; s < i; s++)o = t(e[s], s, r), null != o && a.push(o); else for (s in e)o = t(e[s], s, r), null != o && a.push(o);
            return At.apply([], a)
        }, guid: 1, proxy: function (e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), Ft.isFunction(e))return r = St.call(arguments, 2), i = function () {
                return e.apply(t || this, r.concat(St.call(arguments)))
            }, i.guid = e.guid = e.guid || Ft.guid++, i
        }, now: Date.now, support: Lt
    }), "function" == typeof Symbol && (Ft.fn[Symbol.iterator] = _t[Symbol.iterator]), Ft.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        Nt["[object " + t + "]"] = t.toLowerCase()
    }), Y = function (e) {
        function t(e, t, n, r) {
            var i, o, s, a, u, c, f, p, h = t && t.ownerDocument, g = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g)return n;
            if (!r && ((t ? t.ownerDocument || t : R) !== D && N(t), t = t || D, L)) {
                if (11 !== g && (c = me.exec(e)))if (i = c[1]) {
                    if (9 === g) {
                        if (!(s = t.getElementById(i)))return n;
                        if (s.id === i)return n.push(s), n
                    } else if (h && (s = h.getElementById(i)) && P(t, s) && s.id === i)return n.push(s), n
                } else {
                    if (c[2])return Z.apply(n, t.getElementsByTagName(e)), n;
                    if ((i = c[3]) && w.getElementsByClassName && t.getElementsByClassName)return Z.apply(n, t.getElementsByClassName(i)), n
                }
                if (w.qsa && !X[e + " "] && (!O || !O.test(e))) {
                    if (1 !== g)h = t, p = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = M), f = _(e), o = f.length, u = de.test(a) ? "#" + a : "[id='" + a + "']"; o--;)f[o] = u + " " + d(f[o]);
                        p = f.join(","), h = ye.test(e) && l(t.parentNode) || t
                    }
                    if (p)try {
                        return Z.apply(n, h.querySelectorAll(p)), n
                    } catch (e) {
                    } finally {
                        a === M && t.removeAttribute("id")
                    }
                }
            }
            return S(e.replace(ae, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r
            }

            var t = [];
            return e
        }

        function r(e) {
            return e[M] = !0, e
        }

        function i(e) {
            var t = D.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;)T.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r)return r;
            if (n)for (; n = n.nextSibling;)if (n === t)return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return r(function (t) {
                return t = +t, r(function (n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;)n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function l(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function f() {
        }

        function d(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)r += e[t].value;
            return r
        }

        function p(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = W++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];)if (1 === t.nodeType || i)return e(t, n, o)
            } : function (t, n, s) {
                var a, u, c, l = [B, o];
                if (s) {
                    for (; t = t[r];)if ((1 === t.nodeType || i) && e(t, n, s))return !0
                } else for (; t = t[r];)if (1 === t.nodeType || i) {
                    if (c = t[M] || (t[M] = {}), u = c[t.uniqueID] || (c[t.uniqueID] = {}), (a = u[r]) && a[0] === B && a[1] === o)return l[2] = a[2];
                    if (u[r] = l, l[2] = e(t, n, s))return !0
                }
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)if (!e[i](t, n, r))return !1;
                return !0
            } : e[0]
        }

        function g(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++)t(e, n[i], r);
            return r
        }

        function v(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, c = null != t; a < u; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), c && t.push(a)));
            return s
        }

        function m(e, t, n, i, o, s) {
            return i && !i[M] && (i = m(i)), o && !o[M] && (o = m(o, s)), r(function (r, s, a, u) {
                var c, l, f, d = [], p = [], h = s.length, m = r || g(t || "*", a.nodeType ? [a] : a, []), y = !e || !r && t ? m : v(m, d, e, a, u), b = n ? o || (r ? e : h || i) ? [] : s : y;
                if (n && n(y, b, a, u), i)for (c = v(b, p), i(c, [], a, u), l = c.length; l--;)(f = c[l]) && (b[p[l]] = !(y[p[l]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [], l = b.length; l--;)(f = b[l]) && c.push(y[l] = f);
                            o(null, b = [], c, u)
                        }
                        for (l = b.length; l--;)(f = b[l]) && (c = o ? ee(r, f) : d[l]) > -1 && (r[c] = !(s[c] = f))
                    }
                } else b = v(b === s ? b.splice(h, b.length) : b), o ? o(null, s, b, u) : Z.apply(s, b)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = p(function (e) {
                return e === t
            }, s, !0), c = p(function (e) {
                return ee(t, e) > -1
            }, s, !0), l = [function (e, n, r) {
                var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
                return t = null, i
            }]; a < i; a++)if (n = T.relative[e[a].type])l = [p(h(l), n)]; else {
                if (n = T.filter[e[a].type].apply(null, e[a].matches), n[M]) {
                    for (r = ++a; r < i && !T.relative[e[r].type]; r++);
                    return m(a > 1 && h(l), a > 1 && d(e.slice(0, a - 1).concat({value: " " === e[a - 2].type ? "*" : ""})).replace(ae, "$1"), n, a < r && y(e.slice(a, r)), r < i && y(e = e.slice(r)), r < i && d(e))
                }
                l.push(n)
            }
            return h(l)
        }

        function b(e, n) {
            var i = n.length > 0, o = e.length > 0, s = function (r, s, a, u, c) {
                var l, f, d, p = 0, h = "0", g = r && [], m = [], y = A, b = r || o && T.find.TAG("*", c), x = B += null == y ? 1 : Math.random() || .1, w = b.length;
                for (c && (A = s === D || s || c); h !== w && null != (l = b[h]); h++) {
                    if (o && l) {
                        for (f = 0, s || l.ownerDocument === D || (N(l), a = !L); d = e[f++];)if (d(l, s || D, a)) {
                            u.push(l);
                            break
                        }
                        c && (B = x)
                    }
                    i && ((l = !d && l) && p--, r && g.push(l))
                }
                if (p += h, i && h !== p) {
                    for (f = 0; d = n[f++];)d(g, m, s, a);
                    if (r) {
                        if (p > 0)for (; h--;)g[h] || m[h] || (m[h] = J.call(u));
                        m = v(m)
                    }
                    Z.apply(u, m), c && !r && m.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                }
                return c && (B = x, A = y), g
            };
            return i ? r(s) : s
        }

        var x, w, T, C, k, _, j, S, A, E, q, N, D, H, L, O, F, I, P, M = "sizzle" + 1 * new Date, R = e.document, B = 0, W = 0, $ = n(), z = n(), X = n(), U = function (e, t) {
            return e === t && (q = !0), 0
        }, V = 1 << 31, Y = {}.hasOwnProperty, G = [], J = G.pop, Q = G.push, Z = G.push, K = G.slice, ee = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++)if (e[n] === t)return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", se = new RegExp(ne + "+", "g"), ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"), ue = new RegExp("^" + ne + "*," + ne + "*"), ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), le = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"), fe = new RegExp(oe), de = new RegExp("^" + re + "$"), pe = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re + "|[*])"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + oe),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + te + ")$", "i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
        }, he = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"), we = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, Te = function () {
            N()
        };
        try {
            Z.apply(G = K.call(R.childNodes), R.childNodes), G[R.childNodes.length].nodeType
        } catch (e) {
            Z = {
                apply: G.length ? function (e, t) {
                    Q.apply(e, K.call(t))
                } : function (e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        w = t.support = {}, k = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, N = t.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : R;
            return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, H = D.documentElement, L = !k(D), (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), w.attributes = i(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), w.getElementsByTagName = i(function (e) {
                return e.appendChild(D.createComment("")), !e.getElementsByTagName("*").length
            }), w.getElementsByClassName = ve.test(D.getElementsByClassName), w.getById = i(function (e) {
                return H.appendChild(e).id = M, !D.getElementsByName || !D.getElementsByName(M).length
            }), w.getById ? (T.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && L) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, T.filter.ID = function (e) {
                var t = e.replace(xe, we);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function (e) {
                var t = e.replace(xe, we);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = w.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];)1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, T.find.CLASS = w.getElementsByClassName && function (e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && L)return t.getElementsByClassName(e)
                }, F = [], O = [], (w.qsa = ve.test(D.querySelectorAll)) && (i(function (e) {
                H.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + M + "-]").length || O.push("~="), e.querySelectorAll(":checked").length || O.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || O.push(".#.+[+~]")
            }), i(function (e) {
                var t = D.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), O.push(",.*:")
            })), (w.matchesSelector = ve.test(I = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function (e) {
                w.disconnectedMatch = I.call(e, "div"), I.call(e, "[s!='']:x"), F.push("!=", oe)
            }), O = O.length && new RegExp(O.join("|")), F = F.length && new RegExp(F.join("|")), t = ve.test(H.compareDocumentPosition), P = t || ve.test(H.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)for (; t = t.parentNode;)if (t === e)return !0;
                return !1
            }, U = t ? function (e, t) {
                if (e === t)return q = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === D || e.ownerDocument === R && P(R, e) ? -1 : t === D || t.ownerDocument === R && P(R, t) ? 1 : E ? ee(E, e) - ee(E, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t)return q = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], u = [t];
                if (!i || !o)return e === D ? -1 : t === D ? 1 : i ? -1 : o ? 1 : E ? ee(E, e) - ee(E, t) : 0;
                if (i === o)return s(e, t);
                for (n = e; n = n.parentNode;)a.unshift(n);
                for (n = t; n = n.parentNode;)u.unshift(n);
                for (; a[r] === u[r];)r++;
                return r ? s(a[r], u[r]) : a[r] === R ? -1 : u[r] === R ? 1 : 0
            }, D) : D
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== D && N(e), n = n.replace(le, "='$1']"), w.matchesSelector && L && !X[n + " "] && (!F || !F.test(n)) && (!O || !O.test(n)))try {
                var r = I.call(e, n);
                if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)return r
            } catch (e) {
            }
            return t(n, D, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== D && N(e), P(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== D && N(e);
            var n = T.attrHandle[t.toLowerCase()], r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
            return void 0 !== r ? r : w.attributes || !L ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (q = !w.detectDuplicates, E = !w.sortStable && e.slice(0), e.sort(U), q) {
                for (; t = e[i++];)t === e[i] && (r = n.push(i));
                for (; r--;)e.splice(n[r], 1)
            }
            return E = null, e
        }, C = t.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += C(e)
                } else if (3 === i || 4 === i)return e.nodeValue
            } else for (; t = e[r++];)n += C(t);
            return n
        }, T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(xe, we), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = _(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(xe, we).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = $[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && $(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, n, r) {
                    return function (i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var c, l, f, d, p, h, g = o !== s ? "nextSibling" : "previousSibling", v = t.parentNode, m = a && t.nodeName.toLowerCase(), y = !u && !a, b = !1;
                        if (v) {
                            if (o) {
                                for (; g;) {
                                    for (d = t; d = d[g];)if (a ? d.nodeName.toLowerCase() === m : 1 === d.nodeType)return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? v.firstChild : v.lastChild], s && y) {
                                for (d = v, f = d[M] || (d[M] = {}), l = f[d.uniqueID] || (f[d.uniqueID] = {}), c = l[e] || [], p = c[0] === B && c[1], b = p && c[2], d = p && v.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop();)if (1 === d.nodeType && ++b && d === t) {
                                    l[e] = [B, p, b];
                                    break
                                }
                            } else if (y && (d = t, f = d[M] || (d[M] = {}), l = f[d.uniqueID] || (f[d.uniqueID] = {}), c = l[e] || [], p = c[0] === B && c[1], b = p), b === !1)for (; (d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++b || (y && (f = d[M] || (d[M] = {}), l = f[d.uniqueID] || (f[d.uniqueID] = {}), l[e] = [B, b]), d !== t)););
                            return b -= i, b === r || b % r === 0 && b / r >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[M] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
                        for (var r, i = o(e, n), s = i.length; s--;)r = ee(e, i[s]), e[r] = !(t[r] = i[s])
                    }) : function (e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function (e) {
                    var t = [], n = [], i = j(e.replace(ae, "$1"));
                    return i[M] ? r(function (e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function (e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }), has: r(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }), contains: r(function (e) {
                    return e = e.replace(xe, we), function (t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }), lang: r(function (e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, we).toLowerCase(), function (t) {
                        var n;
                        do if (n = L ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === H
                }, focus: function (e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                    return !0
                }, parent: function (e) {
                    return !T.pseudos.empty(e)
                }, header: function (e) {
                    return ge.test(e.nodeName)
                }, input: function (e) {
                    return he.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: c(function () {
                    return [0]
                }),
                last: c(function (e, t) {
                    return [t - 1]
                }),
                eq: c(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: c(function (e, t) {
                    for (var n = 0; n < t; n += 2)e.push(n);
                    return e
                }), odd: c(function (e, t) {
                    for (var n = 1; n < t; n += 2)e.push(n);
                    return e
                }), lt: c(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;)e.push(r);
                    return e
                }), gt: c(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r);
                    return e
                })
            }
        }, T.pseudos.nth = T.pseudos.eq;
        for (x in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})T.pseudos[x] = a(x);
        for (x in{submit: !0, reset: !0})T.pseudos[x] = u(x);
        return f.prototype = T.filters = T.pseudos, T.setFilters = new f, _ = t.tokenize = function (e, n) {
            var r, i, o, s, a, u, c, l = z[e + " "];
            if (l)return n ? 0 : l.slice(0);
            for (a = e, u = [], c = T.preFilter; a;) {
                r && !(i = ue.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = ce.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ae, " ")
                }), a = a.slice(r.length));
                for (s in T.filter)!(i = pe[s].exec(a)) || c[s] && !(i = c[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r)break
            }
            return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
        }, j = t.compile = function (e, t) {
            var n, r = [], i = [], o = X[e + " "];
            if (!o) {
                for (t || (t = _(e)), n = t.length; n--;)o = y(t[n]), o[M] ? r.push(o) : i.push(o);
                o = X(e, b(i, r)), o.selector = e
            }
            return o
        }, S = t.select = function (e, t, n, r) {
            var i, o, s, a, u, c = "function" == typeof e && e, f = !r && _(e = c.selector || e);
            if (n = n || [], 1 === f.length) {
                if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && L && T.relative[o[1].type]) {
                    if (t = (T.find.ID(s.matches[0].replace(xe, we), t) || [])[0], !t)return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !T.relative[a = s.type]);)if ((u = T.find[a]) && (r = u(s.matches[0].replace(xe, we), ye.test(o[0].type) && l(t.parentNode) || t))) {
                    if (o.splice(i, 1), e = r.length && d(o), !e)return Z.apply(n, r), n;
                    break
                }
            }
            return (c || j(e, f))(r, t, !L, n, !t || ye.test(e) && l(t.parentNode) || t), n
        }, w.sortStable = M.split("").sort(U).join("") === M, w.detectDuplicates = !!q, N(), w.sortDetached = i(function (e) {
            return 1 & e.compareDocumentPosition(D.createElement("div"))
        }), i(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (e, t, n) {
            if (!n)return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), w.attributes && i(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())return e.defaultValue
        }), i(function (e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function (e, t, n) {
            var r;
            if (!n)return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e), Ft.find = Y, Ft.expr = Y.selectors, Ft.expr[":"] = Ft.expr.pseudos, Ft.uniqueSort = Ft.unique = Y.uniqueSort, Ft.text = Y.getText, Ft.isXMLDoc = Y.isXML, Ft.contains = Y.contains, G = function (e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)if (1 === e.nodeType) {
            if (i && Ft(e).is(n))break;
            r.push(e)
        }
        return r
    }, J = function (e, t) {
        for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
        return n
    }, Q = Ft.expr.match.needsContext, Z = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, K = /^.[^:#\[\.,]*$/, Ft.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Ft.find.matchesSelector(r, e) ? [r] : [] : Ft.find.matches(e, Ft.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, Ft.fn.extend({
        find: function (e) {
            var t, n = this.length, r = [], i = this;
            if ("string" != typeof e)return this.pushStack(Ft(e).filter(function () {
                for (t = 0; t < n; t++)if (Ft.contains(i[t], this))return !0
            }));
            for (t = 0; t < n; t++)Ft.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? Ft.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
        }, filter: function (e) {
            return this.pushStack(r(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(r(this, e || [], !0))
        }, is: function (e) {
            return !!r(this, "string" == typeof e && Q.test(e) ? Ft(e) : e || [], !1).length
        }
    }), te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ne = Ft.fn.init = function (e, t, n) {
        var r, i;
        if (!e)return this;
        if (n = n || ee, "string" == typeof e) {
            if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : te.exec(e), !r || !r[1] && t)return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof Ft ? t[0] : t, Ft.merge(this, Ft.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : jt, !0)), Z.test(r[1]) && Ft.isPlainObject(t))for (r in t)Ft.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return i = jt.getElementById(r[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = jt, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Ft.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(Ft) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Ft.makeArray(e, this))
    }, ne.prototype = Ft.fn, ee = Ft(jt), re = /^(?:parents|prev(?:Until|All))/, ie = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    }, Ft.fn.extend({
        has: function (e) {
            var t = Ft(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)if (Ft.contains(this, t[e]))return !0
            })
        }, closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], s = Q.test(e) || "string" != typeof e ? Ft(e, t || this.context) : 0; r < i; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Ft.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? Ft.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? qt.call(Ft(e), this[0]) : qt.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(Ft.uniqueSort(Ft.merge(this.get(), Ft(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Ft.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return G(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return G(e, "parentNode", n)
        }, next: function (e) {
            return i(e, "nextSibling")
        }, prev: function (e) {
            return i(e, "previousSibling")
        }, nextAll: function (e) {
            return G(e, "nextSibling")
        }, prevAll: function (e) {
            return G(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return G(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return G(e, "previousSibling", n)
        }, siblings: function (e) {
            return J((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return J(e.firstChild)
        }, contents: function (e) {
            return e.contentDocument || Ft.merge([], e.childNodes)
        }
    }, function (e, t) {
        Ft.fn[e] = function (n, r) {
            var i = Ft.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Ft.filter(r, i)), this.length > 1 && (ie[e] || Ft.uniqueSort(i), re.test(e) && i.reverse()), this.pushStack(i)
        }
    }), oe = /\S+/g, Ft.Callbacks = function (e) {
        e = "string" == typeof e ? o(e) : Ft.extend({}, e);
        var t, n, r, i, s = [], a = [], u = -1, c = function () {
            for (i = e.once, r = t = !0; a.length; u = -1)for (n = a.shift(); ++u < s.length;)s[u].apply(n[0], n[1]) === !1 && e.stopOnFalse && (u = s.length, n = !1);
            e.memory || (n = !1), t = !1, i && (s = n ? [] : "")
        }, l = {
            add: function () {
                return s && (n && !t && (u = s.length - 1, a.push(n)), function t(n) {
                    Ft.each(n, function (n, r) {
                        Ft.isFunction(r) ? e.unique && l.has(r) || s.push(r) : r && r.length && "string" !== Ft.type(r) && t(r)
                    })
                }(arguments), n && !t && c()), this
            }, remove: function () {
                return Ft.each(arguments, function (e, t) {
                    for (var n; (n = Ft.inArray(t, s, n)) > -1;)s.splice(n, 1), n <= u && u--
                }), this
            }, has: function (e) {
                return e ? Ft.inArray(e, s) > -1 : s.length > 0
            }, empty: function () {
                return s && (s = []), this
            }, disable: function () {
                return i = a = [], s = n = "", this
            }, disabled: function () {
                return !s
            }, lock: function () {
                return i = a = [], n || (s = n = ""), this
            }, locked: function () {
                return !!i
            }, fireWith: function (e, n) {
                return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || c()), this
            }, fire: function () {
                return l.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return l
    }, Ft.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", Ft.Callbacks("once memory"), "resolved"], ["reject", "fail", Ft.Callbacks("once memory"), "rejected"], ["notify", "progress", Ft.Callbacks("memory")]], n = "pending", r = {
                state: function () {
                    return n
                }, always: function () {
                    return i.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return Ft.Deferred(function (n) {
                        Ft.each(t, function (t, o) {
                            var s = Ft.isFunction(e[t]) && e[t];
                            i[o[1]](function () {
                                var e = s && s.apply(this, arguments);
                                e && Ft.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return null != e ? Ft.extend(e, r) : r
                }
            }, i = {};
            return r.pipe = r.then, Ft.each(t, function (e, o) {
                var s = o[2], a = o[3];
                r[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t, n, r, i = 0, o = St.call(arguments), s = o.length, a = 1 !== s || e && Ft.isFunction(e.promise) ? s : 0, u = 1 === a ? e : Ft.Deferred(), c = function (e, n, r) {
                return function (i) {
                    n[e] = this, r[e] = arguments.length > 1 ? St.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                }
            };
            if (s > 1)for (t = new Array(s), n = new Array(s), r = new Array(s); i < s; i++)o[i] && Ft.isFunction(o[i].promise) ? o[i].promise().progress(c(i, n, t)).done(c(i, r, o)).fail(u.reject) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    }), Ft.fn.ready = function (e) {
        return Ft.ready.promise().done(e), this
    }, Ft.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? Ft.readyWait++ : Ft.ready(!0)
        }, ready: function (e) {
            (e === !0 ? --Ft.readyWait : Ft.isReady) || (Ft.isReady = !0, e !== !0 && --Ft.readyWait > 0 || (se.resolveWith(jt, [Ft]), Ft.fn.triggerHandler && (Ft(jt).triggerHandler("ready"), Ft(jt).off("ready"))))
        }
    }), Ft.ready.promise = function (t) {
        return se || (se = Ft.Deferred(), "complete" === jt.readyState || "loading" !== jt.readyState && !jt.documentElement.doScroll ? e.setTimeout(Ft.ready) : (jt.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))), se.promise(t)
    }, Ft.ready.promise(), ae = function (e, t, n, r, i, o, s) {
        var a = 0, u = e.length, c = null == n;
        if ("object" === Ft.type(n)) {
            i = !0;
            for (a in n)ae(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i = !0, Ft.isFunction(r) || (s = !0), c && (s ? (t.call(e, r), t = null) : (c = t, t = function (e, t, n) {
                return c.call(Ft(e), n)
            })), t))for (; a < u; a++)t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : c ? t.call(e) : u ? t(e[0], n) : o
    }, ue = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }, a.uid = 1, a.prototype = {
        register: function (e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando]
        }, cache: function (e) {
            if (!ue(e))return {};
            var t = e[this.expando];
            return t || (t = {}, ue(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        }, set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t)i[t] = n; else for (r in t)i[r] = t[r];
            return i
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        }, access: function (e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Ft.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r, i, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t)this.register(e); else {
                    Ft.isArray(t) ? r = t.concat(t.map(Ft.camelCase)) : (i = Ft.camelCase(t), t in o ? r = [t, i] : (r = i, r = r in o ? [r] : r.match(oe) || [])), n = r.length;
                    for (; n--;)delete o[r[n]]
                }
                (void 0 === t || Ft.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !Ft.isEmptyObject(t)
        }
    }, ce = new a, le = new a, fe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, de = /[A-Z]/g, Ft.extend({
        hasData: function (e) {
            return le.hasData(e) || ce.hasData(e)
        }, data: function (e, t, n) {
            return le.access(e, t, n)
        }, removeData: function (e, t) {
            le.remove(e, t)
        }, _data: function (e, t, n) {
            return ce.access(e, t, n)
        }, _removeData: function (e, t) {
            ce.remove(e, t)
        }
    }), Ft.fn.extend({
        data: function (e, t) {
            var n, r, i, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = le.get(o), 1 === o.nodeType && !ce.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;)s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = Ft.camelCase(r.slice(5)), u(o, r, i[r])));
                    ce.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                le.set(this, e)
            }) : ae(this, function (t) {
                var n, r;
                if (o && void 0 === t) {
                    if (n = le.get(o, e) || le.get(o, e.replace(de, "-$&").toLowerCase()), void 0 !== n)return n;
                    if (r = Ft.camelCase(e), n = le.get(o, r), void 0 !== n)return n;
                    if (n = u(o, r, void 0), void 0 !== n)return n
                } else r = Ft.camelCase(e), this.each(function () {
                    var n = le.get(this, r);
                    le.set(this, r, t), e.indexOf("-") > -1 && void 0 !== n && le.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                le.remove(this, e)
            })
        }
    }), Ft.extend({
        queue: function (e, t, n) {
            var r;
            if (e)return t = (t || "fx") + "queue", r = ce.get(e, t), n && (!r || Ft.isArray(n) ? r = ce.access(e, t, Ft.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = Ft.queue(e, t), r = n.length, i = n.shift(), o = Ft._queueHooks(e, t), s = function () {
                Ft.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ce.get(e, n) || ce.access(e, n, {
                    empty: Ft.Callbacks("once memory").add(function () {
                        ce.remove(e, [t + "queue", n])
                    })
                })
        }
    }), Ft.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Ft.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = Ft.queue(this, e, t);
                Ft._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Ft.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                Ft.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = Ft.Deferred(), o = this, s = this.length, a = function () {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)n = ce.get(o[s], e + "queueHooks"), n && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    }), pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, he = new RegExp("^(?:([+-])=|)(" + pe + ")([a-z%]*)$", "i"), ge = ["Top", "Right", "Bottom", "Left"], ve = function (e, t) {
        return e = t || e, "none" === Ft.css(e, "display") || !Ft.contains(e.ownerDocument, e)
    }, me = /^(?:checkbox|radio)$/i, ye = /<([\w:-]+)/, be = /^$|\/(?:java|ecma)script/i, xe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    }, xe.optgroup = xe.option, xe.tbody = xe.tfoot = xe.colgroup = xe.caption = xe.thead, xe.th = xe.td, we = /<|&#?\w+;/, function () {
        var e = jt.createDocumentFragment(), t = e.appendChild(jt.createElement("div")), n = jt.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Lt.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Lt.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }(), Te = /^key/, Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ke = /^([^.]*)(?:\.(.+)|)/, Ft.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o, s, a, u, c, l, f, d, p, h, g, v = ce.get(e);
            if (v)for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Ft.guid++), (u = v.events) || (u = v.events = {}), (s = v.handle) || (s = v.handle = function (t) {
                return "undefined" != typeof Ft && Ft.event.triggered !== t.type ? Ft.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(oe) || [""], c = t.length; c--;)a = ke.exec(t[c]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p && (f = Ft.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = Ft.event.special[p] || {}, l = Ft.extend({
                type: p,
                origType: g,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && Ft.expr.match.needsContext.test(i),
                namespace: h.join(".")
            }, o), (d = u[p]) || (d = u[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(p, s)), f.add && (f.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, l) : d.push(l), Ft.event.global[p] = !0)
        },
        remove: function (e, t, n, r, i) {
            var o, s, a, u, c, l, f, d, p, h, g, v = ce.hasData(e) && ce.get(e);
            if (v && (u = v.events)) {
                for (t = (t || "").match(oe) || [""], c = t.length; c--;)if (a = ke.exec(t[c]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p) {
                    for (f = Ft.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;)l = d[o], !i && g !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (d.splice(o, 1), l.selector && d.delegateCount--, f.remove && f.remove.call(e, l));
                    s && !d.length && (f.teardown && f.teardown.call(e, h, v.handle) !== !1 || Ft.removeEvent(e, p, v.handle), delete u[p])
                } else for (p in u)Ft.event.remove(e, p + t[c], n, r, !0);
                Ft.isEmptyObject(u) && ce.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            e = Ft.event.fix(e);
            var t, n, r, i, o, s = [], a = St.call(arguments), u = (ce.get(this, "events") || {})[e.type] || [], c = Ft.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = Ft.event.handlers.call(this, e, u), t = 0; (i = s[t++]) && !e.isPropagationStopped();)for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((Ft.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, r, i, o, s = [], a = t.delegateCount, u = e.target;
            if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))for (; u !== this; u = u.parentNode || this)if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                for (r = [], n = 0; n < a; n++)o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Ft(i, this).index(u) > -1 : Ft.find(i, this, null, [u]).length), r[i] && r.push(o);
                r.length && s.push({elem: u, handlers: r})
            }
            return a < t.length && s.push({elem: this, handlers: t.slice(a)}), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, r, i, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || jt, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[Ft.expando])return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Ce.test(i) ? this.mouseHooks : Te.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new Ft.Event(o), t = r.length; t--;)n = r[t], e[n] = o[n];
            return e.target || (e.target = jt), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== g() && this.focus)return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === g() && this.blur)return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && Ft.nodeName(this, "input"))return this.click(), !1
                }, _default: function (e) {
                    return Ft.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, Ft.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, Ft.Event = function (e, t) {
        return this instanceof Ft.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : h) : this.type = e, t && Ft.extend(this, t), this.timeStamp = e && e.timeStamp || Ft.now(), void(this[Ft.expando] = !0)) : new Ft.Event(e, t)
    }, Ft.Event.prototype = {
        constructor: Ft.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = p, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = p, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = p, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Ft.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        Ft.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return i && (i === r || Ft.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Ft.fn.extend({
        on: function (e, t, n, r) {
            return v(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return v(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)return r = e.handleObj, Ft(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e)this.off(i, t, e[i]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = h), this.each(function () {
                Ft.event.remove(this, e, n, t)
            })
        }
    }), _e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, je = /<script|<style|<link/i, Se = /checked\s*(?:[^=]|=\s*.checked.)/i, Ae = /^true\/(.*)/, Ee = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Ft.extend({
        htmlPrefilter: function (e) {
            return e.replace(_e, "<$1></$2>")
        }, clone: function (e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0), u = Ft.contains(e.ownerDocument, e);
            if (!(Lt.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Ft.isXMLDoc(e)))for (s = l(a), o = l(e), r = 0, i = o.length; r < i; r++)w(o[r], s[r]);
            if (t)if (n)for (o = o || l(e), s = s || l(a), r = 0, i = o.length; r < i; r++)x(o[r], s[r]); else x(e, a);
            return s = l(a, "script"), s.length > 0 && f(s, !u && l(e, "script")), a
        }, cleanData: function (e) {
            for (var t, n, r, i = Ft.event.special, o = 0; void 0 !== (n = e[o]); o++)if (ue(n)) {
                if (t = n[ce.expando]) {
                    if (t.events)for (r in t.events)i[r] ? Ft.event.remove(n, r) : Ft.removeEvent(n, r, t.handle);
                    n[ce.expando] = void 0
                }
                n[le.expando] && (n[le.expando] = void 0)
            }
        }
    }), Ft.fn.extend({
        domManip: T, detach: function (e) {
            return C(this, e, !0)
        }, remove: function (e) {
            return C(this, e)
        }, text: function (e) {
            return ae(this, function (e) {
                return void 0 === e ? Ft.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return T(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = m(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return T(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = m(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return T(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return T(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)1 === e.nodeType && (Ft.cleanData(l(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return Ft.clone(this, e, t)
            })
        }, html: function (e) {
            return ae(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType)return t.innerHTML;
                if ("string" == typeof e && !je.test(e) && !xe[(ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = Ft.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)t = this[n] || {}, 1 === t.nodeType && (Ft.cleanData(l(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return T(this, arguments, function (t) {
                var n = this.parentNode;
                Ft.inArray(this, e) < 0 && (Ft.cleanData(l(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), Ft.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        Ft.fn[e] = function (e) {
            for (var n, r = [], i = Ft(e), o = i.length - 1, s = 0; s <= o; s++)n = s === o ? this : this.clone(!0), Ft(i[s])[t](n), Et.apply(r, n.get());
            return this.pushStack(r)
        }
    }), Ne = {
        HTML: "block",
        BODY: "block"
    }, De = /^margin/, He = new RegExp("^(" + pe + ")(?!px)[a-z%]+$", "i"), Le = function (t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t)
    }, Oe = function (e, t, n, r) {
        var i, o, s = {};
        for (o in t)s[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)e.style[o] = s[o];
        return i
    }, Fe = jt.documentElement, function () {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Fe.appendChild(s);
            var t = e.getComputedStyle(a);
            n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, a.style.marginRight = "50%", i = "4px" === t.marginRight, Fe.removeChild(s)
        }

        var n, r, i, o, s = jt.createElement("div"), a = jt.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", Lt.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), Ft.extend(Lt, {
            pixelPosition: function () {
                return t(), n
            }, boxSizingReliable: function () {
                return null == r && t(), r
            }, pixelMarginRight: function () {
                return null == r && t(), i
            }, reliableMarginLeft: function () {
                return null == r && t(), o
            }, reliableMarginRight: function () {
                var t, n = a.appendChild(jt.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", Fe.appendChild(s), t = !parseFloat(e.getComputedStyle(n).marginRight), Fe.removeChild(s), a.removeChild(n), t
            }
        }))
    }(), Ie = /^(none|table(?!-c[ea]).+)/, Pe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Me = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Re = ["Webkit", "O", "Moz", "ms"], Be = jt.createElement("div").style, Ft.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = j(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {float: "cssFloat"},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = Ft.camelCase(t), u = e.style;
                return t = Ft.cssProps[a] || (Ft.cssProps[a] = A(a) || a), s = Ft.cssHooks[t] || Ft.cssHooks[a], void 0 === n ? s && "get"in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n, "string" === o && (i = he.exec(n)) && i[1] && (n = c(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (Ft.cssNumber[a] ? "" : "px")), Lt.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set"in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n)), void 0)
            }
        },
        css: function (e, t, n, r) {
            var i, o, s, a = Ft.camelCase(t);
            return t = Ft.cssProps[a] || (Ft.cssProps[a] = A(a) || a), s = Ft.cssHooks[t] || Ft.cssHooks[a], s && "get"in s && (i = s.get(e, !0, n)), void 0 === i && (i = j(e, t, r)), "normal" === i && t in Me && (i = Me[t]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
        }
    }), Ft.each(["height", "width"], function (e, t) {
        Ft.cssHooks[t] = {
            get: function (e, n, r) {
                if (n)return Ie.test(Ft.css(e, "display")) && 0 === e.offsetWidth ? Oe(e, Pe, function () {
                    return N(e, t, r)
                }) : N(e, t, r)
            }, set: function (e, n, r) {
                var i, o = r && Le(e), s = r && q(e, t, r, "border-box" === Ft.css(e, "boxSizing", !1, o), o);
                return s && (i = he.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = Ft.css(e, t)), E(e, n, s)
            }
        }
    }), Ft.cssHooks.marginLeft = S(Lt.reliableMarginLeft, function (e, t) {
        if (t)return (parseFloat(j(e, "marginLeft")) || e.getBoundingClientRect().left - Oe(e, {marginLeft: 0}, function () {
                return e.getBoundingClientRect().left
            })) + "px"
    }), Ft.cssHooks.marginRight = S(Lt.reliableMarginRight, function (e, t) {
        if (t)return Oe(e, {display: "inline-block"}, j, [e, "marginRight"])
    }), Ft.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        Ft.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)i[e + ge[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, De.test(e) || (Ft.cssHooks[e + t].set = E)
    }), Ft.fn.extend({
        css: function (e, t) {
            return ae(this, function (e, t, n) {
                var r, i, o = {}, s = 0;
                if (Ft.isArray(t)) {
                    for (r = Le(e), i = t.length; s < i; s++)o[t[s]] = Ft.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? Ft.style(e, t, n) : Ft.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return D(this, !0)
        }, hide: function () {
            return D(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ve(this) ? Ft(this).show() : Ft(this).hide()
            })
        }
    }), Ft.Tween = H, H.prototype = {
        constructor: H, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || Ft.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Ft.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = H.propHooks[this.prop];
            return e && e.get ? e.get(this) : H.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = H.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Ft.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Ft.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            }, set: function (e) {
                Ft.fx.step[e.prop] ? Ft.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[Ft.cssProps[e.prop]] && !Ft.cssHooks[e.prop] ? e.elem[e.prop] = e.now : Ft.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Ft.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    },Ft.fx = H.prototype.init,Ft.fx.step = {},ze = /^(?:toggle|show|hide)$/,Xe = /queueHooks$/,Ft.Animation = Ft.extend(M, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return c(n.elem, e, he.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            Ft.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(oe);
            for (var n, r = 0, i = e.length; r < i; r++)n = e[r], M.tweeners[n] = M.tweeners[n] || [], M.tweeners[n].unshift(t)
        }, prefilters: [I], prefilter: function (e, t) {
            t ? M.prefilters.unshift(e) : M.prefilters.push(e)
        }
    }),Ft.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? Ft.extend({}, e) : {
            complete: n || !n && t || Ft.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !Ft.isFunction(t) && t
        };
        return r.duration = Ft.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Ft.fx.speeds ? Ft.fx.speeds[r.duration] : Ft.fx.speeds._default, null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            Ft.isFunction(r.old) && r.old.call(this), r.queue && Ft.dequeue(this, r.queue)
        }, r
    },Ft.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(ve).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = Ft.isEmptyObject(e), o = Ft.speed(t, n, r), s = function () {
                var t = M(this, Ft.extend({}, e), o);
                (i || ce.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s, i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        }, stop: function (e, t, n) {
            var r = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", o = Ft.timers, s = ce.get(this);
                if (i)s[i] && s[i].stop && r(s[i]); else for (i in s)s[i] && s[i].stop && Xe.test(i) && r(s[i]);
                for (i = o.length; i--;)o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                !t && n || Ft.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = ce.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = Ft.timers, s = r ? r.length : 0;
                for (n.finish = !0, Ft.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++)r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),Ft.each(["toggle", "show", "hide"], function (e, t) {
        var n = Ft.fn[t];
        Ft.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, r, i)
        }
    }),Ft.each({
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        Ft.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),Ft.timers = [],Ft.fx.tick = function () {
        var e, t = 0, n = Ft.timers;
        for (We = Ft.now(); t < n.length; t++)e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || Ft.fx.stop(), We = void 0
    },Ft.fx.timer = function (e) {
        Ft.timers.push(e), e() ? Ft.fx.start() : Ft.timers.pop()
    },Ft.fx.interval = 13,Ft.fx.start = function () {
        $e || ($e = e.setInterval(Ft.fx.tick, Ft.fx.interval))
    },Ft.fx.stop = function () {
        e.clearInterval($e), $e = null
    },Ft.fx.speeds = {slow: 600, fast: 200, _default: 400},Ft.fn.delay = function (t, n) {
        return t = Ft.fx ? Ft.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function (n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function () {
                e.clearTimeout(i)
            }
        })
    },function () {
        var e = jt.createElement("input"), t = jt.createElement("select"), n = t.appendChild(jt.createElement("option"));
        e.type = "checkbox", Lt.checkOn = "" !== e.value, Lt.optSelected = n.selected, t.disabled = !0, Lt.optDisabled = !n.disabled, e = jt.createElement("input"), e.value = "t", e.type = "radio", Lt.radioValue = "t" === e.value
    }(),Ve = Ft.expr.attrHandle,Ft.fn.extend({
        attr: function (e, t) {
            return ae(this, Ft.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                Ft.removeAttr(this, e)
            })
        }
    }),Ft.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)return "undefined" == typeof e.getAttribute ? Ft.prop(e, t, n) : (1 === o && Ft.isXMLDoc(e) || (t = t.toLowerCase(), i = Ft.attrHooks[t] || (Ft.expr.match.bool.test(t) ? Ue : void 0)), void 0 !== n ? null === n ? void Ft.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : (r = Ft.find.attr(e, t), null == r ? void 0 : r))
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!Lt.radioValue && "radio" === t && Ft.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(oe);
            if (o && 1 === e.nodeType)for (; n = o[i++];)r = Ft.propFix[n] || n, Ft.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
        }
    }),Ue = {
        set: function (e, t, n) {
            return t === !1 ? Ft.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    },Ft.each(Ft.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = Ve[t] || Ft.find.attr;
        Ve[t] = function (e, t, r) {
            var i, o;
            return r || (o = Ve[t], Ve[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Ve[t] = o), i
        }
    }),Ye = /^(?:input|select|textarea|button)$/i,Ge = /^(?:a|area)$/i,Ft.fn.extend({
        prop: function (e, t) {
            return ae(this, Ft.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[Ft.propFix[e] || e]
            })
        }
    }),Ft.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)return 1 === o && Ft.isXMLDoc(e) || (t = Ft.propFix[t] || t, i = Ft.propHooks[t]), void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = Ft.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Ye.test(e.nodeName) || Ge.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }),Lt.optSelected || (Ft.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            }, set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }),Ft.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        Ft.propFix[this.toLowerCase()] = this
    }),Je = /[\t\r\n\f]/g,Ft.fn.extend({
        addClass: function (e) {
            var t, n, r, i, o, s, a, u = 0;
            if (Ft.isFunction(e))return this.each(function (t) {
                Ft(this).addClass(e.call(this, t, R(this)))
            });
            if ("string" == typeof e && e)for (t = e.match(oe) || []; n = this[u++];)if (i = R(n), r = 1 === n.nodeType && (" " + i + " ").replace(Je, " ")) {
                for (s = 0; o = t[s++];)r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                a = Ft.trim(r), i !== a && n.setAttribute("class", a)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, s, a, u = 0;
            if (Ft.isFunction(e))return this.each(function (t) {
                Ft(this).removeClass(e.call(this, t, R(this)))
            });
            if (!arguments.length)return this.attr("class", "");
            if ("string" == typeof e && e)for (t = e.match(oe) || []; n = this[u++];)if (i = R(n), r = 1 === n.nodeType && (" " + i + " ").replace(Je, " ")) {
                for (s = 0; o = t[s++];)for (; r.indexOf(" " + o + " ") > -1;)r = r.replace(" " + o + " ", " ");
                a = Ft.trim(r), i !== a && n.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : Ft.isFunction(e) ? this.each(function (n) {
                Ft(this).toggleClass(e.call(this, n, R(this), t), t)
            }) : this.each(function () {
                var t, r, i, o;
                if ("string" === n)for (r = 0, i = Ft(this), o = e.match(oe) || []; t = o[r++];)i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else void 0 !== e && "boolean" !== n || (t = R(this), t && ce.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : ce.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)if (1 === n.nodeType && (" " + R(n) + " ").replace(Je, " ").indexOf(t) > -1)return !0;
            return !1
        }
    }),Qe = /\r/g,Ze = /[\x20\t\r\n\f]+/g,Ft.fn.extend({
        val: function (e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)return r = Ft.isFunction(e), this.each(function (n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, Ft(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Ft.isArray(i) && (i = Ft.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), t = Ft.valHooks[this.type] || Ft.valHooks[this.nodeName.toLowerCase()], t && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                });
                if (i)return t = Ft.valHooks[i.type] || Ft.valHooks[i.nodeName.toLowerCase()], t && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Qe, "") : null == n ? "" : n)
            }
        }
    }),Ft.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = Ft.find.attr(e, "value");
                    return null != t ? t : Ft.trim(Ft.text(e)).replace(Ze, " ")
                }
            }, select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)if (n = r[u], (n.selected || u === i) && (Lt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Ft.nodeName(n.parentNode, "optgroup"))) {
                        if (t = Ft(n).val(), o)return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    for (var n, r, i = e.options, o = Ft.makeArray(t), s = i.length; s--;)r = i[s], (r.selected = Ft.inArray(Ft.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }),Ft.each(["radio", "checkbox"], function () {
        Ft.valHooks[this] = {
            set: function (e, t) {
                if (Ft.isArray(t))return e.checked = Ft.inArray(Ft(e).val(), t) > -1
            }
        }, Lt.checkOn || (Ft.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }),Ke = /^(?:focusinfocus|focusoutblur)$/,Ft.extend(Ft.event, {
        trigger: function (t, n, r, i) {
            var o, s, a, u, c, l, f, d = [r || jt], p = Ht.call(t, "type") ? t.type : t, h = Ht.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = r = r || jt, 3 !== r.nodeType && 8 !== r.nodeType && !Ke.test(p + Ft.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[Ft.expando] ? t : new Ft.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Ft.makeArray(n, [t]), f = Ft.event.special[p] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
                if (!i && !f.noBubble && !Ft.isWindow(r)) {
                    for (u = f.delegateType || p, Ke.test(u + p) || (s = s.parentNode); s; s = s.parentNode)d.push(s), a = s;
                    a === (r.ownerDocument || jt) && d.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0; (s = d[o++]) && !t.isPropagationStopped();)t.type = o > 1 ? u : f.bindType || p, l = (ce.get(s, "events") || {})[t.type] && ce.get(s, "handle"), l && l.apply(s, n), l = c && s[c], l && l.apply && ue(s) && (t.result = l.apply(s, n), t.result === !1 && t.preventDefault());
                return t.type = p, i || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !ue(r) || c && Ft.isFunction(r[p]) && !Ft.isWindow(r) && (a = r[c], a && (r[c] = null), Ft.event.triggered = p, r[p](), Ft.event.triggered = void 0, a && (r[c] = a)), t.result
            }
        }, simulate: function (e, t, n) {
            var r = Ft.extend(new Ft.Event, n, {type: e, isSimulated: !0});
            Ft.event.trigger(r, null, t)
        }
    }),Ft.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                Ft.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n)return Ft.event.trigger(e, t, n, !0)
        }
    }),Ft.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        Ft.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),Ft.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),Lt.focusin = "onfocusin"in e,Lt.focusin || Ft.each({focus: "focusin", blur: "focusout"}, function (e, t) {
            var n = function (e) {
                Ft.event.simulate(t, e.target, Ft.event.fix(e))
            };
            Ft.event.special[t] = {
                setup: function () {
                    var r = this.ownerDocument || this, i = ce.access(r, t);
                    i || r.addEventListener(e, n, !0), ce.access(r, t, (i || 0) + 1)
                }, teardown: function () {
                    var r = this.ownerDocument || this, i = ce.access(r, t) - 1;
                    i ? ce.access(r, t, i) : (r.removeEventListener(e, n, !0), ce.remove(r, t))
                }
            }
        }),et = e.location,tt = Ft.now(),nt = /\?/,Ft.parseJSON = function (e) {
        return JSON.parse(e + "")
    },Ft.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t)return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || Ft.error("Invalid XML: " + t), n
    },rt = /#.*$/,it = /([?&])_=[^&]*/,ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,st = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,at = /^(?:GET|HEAD)$/,ut = /^\/\//,ct = {},lt = {},ft = "*/".concat("*"),dt = jt.createElement("a"),dt.href = et.href,Ft.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: et.href,
            type: "GET",
            isLocal: st.test(et.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ft,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": Ft.parseJSON, "text xml": Ft.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? $($(e, Ft.ajaxSettings), t) : $(Ft.ajaxSettings, e)
        },
        ajaxPrefilter: B(ct),
        ajaxTransport: B(lt),
        ajax: function (t, n) {
            function r(t, n, r, a) {
                var c, f, y, b, w, C = n;
                2 !== x && (x = 2, u && e.clearTimeout(u), i = void 0, s = a || "", T.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, r && (b = z(d, T, r)), b = X(d, b, T, c), c ? (d.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (Ft.lastModified[o] = w), w = T.getResponseHeader("etag"), w && (Ft.etag[o] = w)), 204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, f = b.data, y = b.error, c = !y)) : (y = C, !t && C || (C = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (n || C) + "", c ? g.resolveWith(p, [f, C, T]) : g.rejectWith(p, [T, C, y]), T.statusCode(m), m = void 0, l && h.trigger(c ? "ajaxSuccess" : "ajaxError", [T, d, c ? f : y]), v.fireWith(p, [T, C]), l && (h.trigger("ajaxComplete", [T, d]), --Ft.active || Ft.event.trigger("ajaxStop")))
            }

            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, s, a, u, c, l, f, d = Ft.ajaxSetup({}, n), p = d.context || d, h = d.context && (p.nodeType || p.jquery) ? Ft(p) : Ft.event, g = Ft.Deferred(), v = Ft.Callbacks("once memory"), m = d.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", T = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (2 === x) {
                        if (!a)for (a = {}; t = ot.exec(s);)a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                    return 2 === x ? s : null
                },
                setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e, y[e] = t), this
                },
                overrideMimeType: function (e) {
                    return x || (d.mimeType = e), this
                },
                statusCode: function (e) {
                    var t;
                    if (e)if (x < 2)for (t in e)m[t] = [m[t], e[t]]; else T.always(e[T.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || w;
                    return i && i.abort(t), r(0, t), this
                }
            };
            if (g.promise(T).complete = v.add, T.success = T.done, T.error = T.fail, d.url = ((t || d.url || et.href) + "").replace(rt, "").replace(ut, et.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = Ft.trim(d.dataType || "*").toLowerCase().match(oe) || [""], null == d.crossDomain) {
                c = jt.createElement("a");
                try {
                    c.href = d.url, c.href = c.href, d.crossDomain = dt.protocol + "//" + dt.host != c.protocol + "//" + c.host
                } catch (e) {
                    d.crossDomain = !0
                }
            }
            if (d.data && d.processData && "string" != typeof d.data && (d.data = Ft.param(d.data, d.traditional)), W(ct, d, n, T), 2 === x)return T;
            l = Ft.event && d.global, l && 0 === Ft.active++ && Ft.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !at.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (nt.test(o) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = it.test(o) ? o.replace(it, "$1_=" + tt++) : o + (nt.test(o) ? "&" : "?") + "_=" + tt++)), d.ifModified && (Ft.lastModified[o] && T.setRequestHeader("If-Modified-Since", Ft.lastModified[o]), Ft.etag[o] && T.setRequestHeader("If-None-Match", Ft.etag[o])), (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + ft + "; q=0.01" : "") : d.accepts["*"]);
            for (f in d.headers)T.setRequestHeader(f, d.headers[f]);
            if (d.beforeSend && (d.beforeSend.call(p, T, d) === !1 || 2 === x))return T.abort();
            w = "abort";
            for (f in{success: 1, error: 1, complete: 1})T[f](d[f]);
            if (i = W(lt, d, n, T)) {
                if (T.readyState = 1, l && h.trigger("ajaxSend", [T, d]), 2 === x)return T;
                d.async && d.timeout > 0 && (u = e.setTimeout(function () {
                    T.abort("timeout")
                }, d.timeout));
                try {
                    x = 1, i.send(y, r)
                } catch (e) {
                    if (!(x < 2))throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return T
        },
        getJSON: function (e, t, n) {
            return Ft.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return Ft.get(e, void 0, t, "script")
        }
    }),Ft.each(["get", "post"], function (e, t) {
        Ft[t] = function (e, n, r, i) {
            return Ft.isFunction(n) && (i = i || r, r = n, n = void 0), Ft.ajax(Ft.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, Ft.isPlainObject(e) && e))
        }
    }),Ft._evalUrl = function (e) {
        return Ft.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
    },Ft.fn.extend({
        wrapAll: function (e) {
            var t;
            return Ft.isFunction(e) ? this.each(function (t) {
                Ft(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Ft(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;)e = e.firstElementChild;
                return e
            }).append(this)), this)
        }, wrapInner: function (e) {
            return Ft.isFunction(e) ? this.each(function (t) {
                Ft(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = Ft(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = Ft.isFunction(e);
            return this.each(function (n) {
                Ft(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                Ft.nodeName(this, "body") || Ft(this).replaceWith(this.childNodes)
            }).end()
        }
    }),Ft.expr.filters.hidden = function (e) {
        return !Ft.expr.filters.visible(e)
    },Ft.expr.filters.visible = function (e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    },pt = /%20/g,ht = /\[\]$/,gt = /\r?\n/g,vt = /^(?:submit|button|image|reset|file)$/i,mt = /^(?:input|select|textarea|keygen)/i,Ft.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            t = Ft.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = Ft.ajaxSettings && Ft.ajaxSettings.traditional), Ft.isArray(e) || e.jquery && !Ft.isPlainObject(e))Ft.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e)U(n, e[n], t, i);
        return r.join("&").replace(pt, "+")
    },Ft.fn.extend({
        serialize: function () {
            return Ft.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = Ft.prop(this, "elements");
                return e ? Ft.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !Ft(this).is(":disabled") && mt.test(this.nodeName) && !vt.test(e) && (this.checked || !me.test(e))
            }).map(function (e, t) {
                var n = Ft(this).val();
                return null == n ? null : Ft.isArray(n) ? Ft.map(n, function (e) {
                    return {name: t.name, value: e.replace(gt, "\r\n")}
                }) : {name: t.name, value: n.replace(gt, "\r\n")}
            }).get()
        }
    }),Ft.ajaxSettings.xhr = function () {
        try {
            return new e.XMLHttpRequest
        } catch (e) {
        }
    },yt = {
        0: 200,
        1223: 204
    },bt = Ft.ajaxSettings.xhr(),Lt.cors = !!bt && "withCredentials"in bt,Lt.ajax = bt = !!bt,Ft.ajaxTransport(function (t) {
        var n, r;
        if (Lt.cors || bt && !t.crossDomain)return {
            send: function (i, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (s in t.xhrFields)a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (s in i)a.setRequestHeader(s, i[s]);
                n = function (e) {
                    return function () {
                        n && (n = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(yt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {binary: a.response} : {text: a.responseText}, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), r = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function () {
                    4 === a.readyState && e.setTimeout(function () {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n)throw e
                }
            }, abort: function () {
                n && n()
            }
        }
    }),Ft.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return Ft.globalEval(e), e
            }
        }
    }),Ft.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }),Ft.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (r, i) {
                    t = Ft("<script>").prop({charset: e.scriptCharset, src: e.url}).on("load error", n = function (e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), jt.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    }),xt = [],wt = /(=)\?(?=&|$)|\?\?/,Ft.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = xt.pop() || Ft.expando + "_" + tt++;
            return this[e] = !0, e
        }
    }),Ft.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (wt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && wt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0])return i = t.jsonpCallback = Ft.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(wt, "$1" + i) : t.jsonp !== !1 && (t.url += (nt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return s || Ft.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function () {
            s = arguments
        }, r.always(function () {
            void 0 === o ? Ft(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, xt.push(i)), s && Ft.isFunction(o) && o(s[0]), s = o = void 0
        }), "script"
    }),Ft.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || jt;
        var r = Z.exec(e), i = !n && [];
        return r ? [t.createElement(r[1])] : (r = d([e], t, i), i && i.length && Ft(i).remove(), Ft.merge([], r.childNodes))
    },Tt = Ft.fn.load,Ft.fn.load = function (e, t, n) {
        if ("string" != typeof e && Tt)return Tt.apply(this, arguments);
        var r, i, o, s = this, a = e.indexOf(" ");
        return a > -1 && (r = Ft.trim(e.slice(a)), e = e.slice(0, a)), Ft.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), s.length > 0 && Ft.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, s.html(r ? Ft("<div>").append(Ft.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
                s.each(function () {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }), this
    },Ft.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        Ft.fn[t] = function (e) {
            return this.on(t, e)
        }
    }),Ft.expr.filters.animated = function (e) {
        return Ft.grep(Ft.timers, function (t) {
            return e === t.elem
        }).length
    },Ft.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, s, a, u, c, l = Ft.css(e, "position"), f = Ft(e), d = {};
            "static" === l && (e.style.position = "relative"), a = f.offset(), o = Ft.css(e, "top"), u = Ft.css(e, "left"), c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1, c ? (r = f.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), Ft.isFunction(t) && (t = t.call(e, n, Ft.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + i), "using"in t ? t.using.call(e, d) : f.css(d)
        }
    },Ft.fn.extend({
        offset: function (e) {
            if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                Ft.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0], i = {top: 0, left: 0}, o = r && r.ownerDocument;
            if (o)return t = o.documentElement, Ft.contains(t, r) ? (i = r.getBoundingClientRect(), n = V(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i
        }, position: function () {
            if (this[0]) {
                var e, t, n = this[0], r = {top: 0, left: 0};
                return "fixed" === Ft.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Ft.nodeName(e[0], "html") || (r = e.offset()), r.top += Ft.css(e[0], "borderTopWidth", !0), r.left += Ft.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - r.top - Ft.css(n, "marginTop", !0),
                    left: t.left - r.left - Ft.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === Ft.css(e, "position");)e = e.offsetParent;
                return e || Fe
            })
        }
    }),Ft.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        Ft.fn[e] = function (r) {
            return ae(this, function (e, r, i) {
                var o = V(e);
                return void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
            }, e, r, arguments.length)
        }
    }),Ft.each(["top", "left"], function (e, t) {
        Ft.cssHooks[t] = S(Lt.pixelPosition, function (e, n) {
            if (n)return n = j(e, t), He.test(n) ? Ft(e).position()[t] + "px" : n
        })
    }),Ft.each({Height: "height", Width: "width"}, function (e, t) {
        Ft.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
            Ft.fn[r] = function (r, i) {
                var o = arguments.length && (n || "boolean" != typeof r), s = n || (r === !0 || i === !0 ? "margin" : "border");
                return ae(this, function (t, n, r) {
                    var i;
                    return Ft.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Ft.css(t, n, s) : Ft.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }),Ft.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }, size: function () {
            return this.length
        }
    }),Ft.fn.andSelf = Ft.fn.addBack,"function" == typeof define && define.amd && define("jquery", [], function () {
            return Ft
        }),Ct = e.jQuery,kt = e.$,Ft.noConflict = function (t) {
        return e.$ === Ft && (e.$ = kt), t && e.jQuery === Ft && (e.jQuery = Ct), Ft
    },t || (e.jQuery = e.$ = Ft),Ft
}), Function.prototype.around = function (e) {
    var t = this, n = function () {
        var e = null;
        try {
            e = arguments ? t.apply(this, arguments) : t.apply(this)
        } catch (e) {
            throw e
        }
        return e
    };
    return n.__fn__ = this, n
}, function (e) {
    e.actionConfig = {
        www_blog: {
            url: "/dist/oschina/blog/require/blog.js",
            version: "d2006065891e2eb98fc4f5822dc6a19427cbf2e8"
        },
        "comp-comment": {
            url: "/dist/oschina/event/require/comment.js",
            version: "26adb80b975cc0b722833ae20ff80ca7eca80057"
        },
        www_activate: {
            url: "/dist/oschina/home/login/require/activate.js",
            version: "7452ce7105d722eb67cc0822f7766da5c4d26007"
        },
        "comp-comment": {
            url: "/dist/oschina/news/require/comment.js",
            version: "837f2883637ea3effd8b332180496a8714be30ed"
        },
        www_comments: {
            url: "/dist/oschina/project/require/comments.js",
            version: "0e374d0e5cef2173504972c63e39571384dd7c89"
        },
        www_question_answer: {
            url: "/dist/oschina/question/require/answer.js",
            version: "956c39fccd74242e41817515036999db497771d2"
        },
        www_translates_list: {
            url: "/dist/oschina/translate/require/list.js",
            version: "77aa8ec9482c9114b37959474ef95ba65a9265f8"
        },
        www_tweet_detail: {
            url: "/dist/oschina/tweet/require/detail.js",
            version: "ba0b8b399d18f44c30c48d0bb4237016c19b094f"
        },
        www_event_create: {
            url: "/dist/oschina/event/require/create.js",
            version: "22bf8e614e1af7e29acb43ecc6a61f6814e1aadf"
        },
        www_change_email: {
            url: "/dist/oschina/home/login/require/change-email.js",
            version: "6f2b0a9dd6722c6286deceeb98de64a729ca3b51"
        },
        www_news: {url: "/dist/oschina/news/require/news.js", version: "a2e49e136cdc79d3331547ed7db91b9d6b8da0e5"},
        www_details: {
            url: "/dist/oschina/project/require/details.js",
            version: "7926109d562847bf8caa87bda863603ab7bc1baa"
        },
        www_question_ask: {
            url: "/dist/oschina/question/require/ask.js",
            version: "4609fa01213440cec10aeceb009392427c8a1a6a"
        },
        www_translates_detail: {
            url: "/dist/oschina/translate/require/show.js",
            version: "5fdda74e30ae65ee139ccb8475761d9304fbb5f8"
        },
        www_tweet_list: {
            url: "/dist/oschina/tweet/require/list.js",
            version: "4e57e2287e368f5bce838bfb6e370bec0a918a16"
        },
        www_event_detail: {
            url: "/dist/oschina/event/require/detail.js",
            version: "f5795126d986d1a643003aea081a5c66c09dabfb"
        },
        www_login: {
            url: "/dist/oschina/home/login/require/login.js",
            version: "39a9a6d37602ca573d20002b2866ce029e004f14"
        },
        www_news_detail: {
            url: "/dist/oschina/news/require/news_detail.js",
            version: "a032778caeee74efa6e0e3926e5ffddd70b80c64"
        },
        www_project: {
            url: "/dist/oschina/project/require/index.js",
            version: "c8b50c6a08c9a9f2ea77fba7b1ab5c9ef7ab0fdc"
        },
        www_question_detail: {
            url: "/dist/oschina/question/require/detail.js",
            version: "2fd2bbe4b65bf8657f20f9028a23b4ba7e911b5e"
        },
        www_event_edit: {
            url: "/dist/oschina/event/require/edit.js",
            version: "f5c77a65ff726e90d9a9edfd5338811ff1f894d7"
        },
        www_logon: {
            url: "/dist/oschina/home/login/require/logon.js",
            version: "36f0478fe5af9943436fc4f4c77b727f50a03fa0"
        },
        www_list: {url: "/dist/oschina/project/require/list.js", version: "9ec6d811c130d37a2906a6255d3e6443985c1bad"},
        www_question_edit_answer: {
            url: "/dist/oschina/question/require/editanswer.js",
            version: "d6f6d8affa39dbbab6588aea51e577bf3a35d9d2"
        },
        www_event: {url: "/dist/oschina/event/require/index.js", version: "796be938f1c222bd6cfcf10a542db04de697a112"},
        www_openid: {
            url: "/dist/oschina/home/login/require/openid.js",
            version: "35559b2accb860974e2e83cea330ea531641967f"
        },
        www_related: {
            url: "/dist/oschina/project/require/related.js",
            version: "860ec213ef5fef1b8679c468e3ec5c97ae79b4fa"
        },
        www_question_list: {
            url: "/dist/oschina/question/require/list.js",
            version: "52d816c5a468634c792bf0abd13d4c7207a6ec94"
        },
        www_regok: {
            url: "/dist/oschina/home/login/require/regok.js",
            version: "3efeff0f34e21cede2c44b2540969ec98fb34e76"
        },
        www_innovation: {
            url: "/dist/oschina/event/require/innovation.js",
            version: "8d315bf0df90906b333f687055a7bc71f57d8710"
        },
        www_zh: {url: "/dist/oschina/project/require/zh.js", version: "98abd655d4a9e367fbd11afba993e845e096b5a1"},
        www_event_my: {url: "/dist/oschina/event/require/my.js", version: "484a2d665c0f1d42422430c8e899a727c2c430c8"},
        www_reset_pwd: {
            url: "/dist/oschina/home/login/require/reset-pwd.js",
            version: "907f7d310eed2c03d19383a65d9d2e56600f7312"
        },
        www_event_sponsor: {
            url: "/dist/oschina/event/require/sponsor.js",
            version: "9c7e6b000111db14397003617cdf5568e90986f1"
        }
    }
}(window), function (e, t, n) {
    function r(e) {
        var t, n, r = t = e.scrollWidth, i = n = e.scrollHeight, o = Math.max(e.naturalWidth, 1), s = Math.max(e.naturalHeight, 1), a = t / o, u = n / s;
        1 == a && 1 == u || (a < u ? i = s * a : r = o * u, e.style.width = r + "px", e.style.height = i + "px", e.style.margin = (n - i) / 2 + "px " + (t - r) / 2 + "px")
    }

    var i, o, s = e.action = {
        fn: {},
        handlers: [],
        module: {},
        base: {},
        pageInfo: {define: "", vals: null},
        event: {
            handlers: {}, addHandler: function (e, t) {
                "undefined" == typeof this.handlers[e] && (this.handlers[e] = []), this.handlers[e].push(t)
            }, fire: function (e) {
                var t, n, r;
                if (e.target || (e.target = this), this.handlers[e.type]instanceof Array)for (t = this.handlers[e.type], n = 0, r = t.length; n < r; n++)t[n](e)
            }, removeHandler: function (e, t) {
                if (this.handlers[e]instanceof Array) {
                    for (var n = this.handlers[e], r = 0, i = n.length; r < i && n[r] !== t; r++);
                    n.splice(r, 1)
                }
            }
        },
        stringUtil: {
            isNull: function (e) {
                return !("string" == typeof e && e && e.replace(/(^\s*)|(\s*$)/g, ""))
            }
        },
        initPageInfo: function () {
            var e = t.querySelector("[data-define]") || t.querySelector("x-foo-define");
            return this.pageInfo.vals = t.querySelectorAll("val") || t.querySelectorAll("x-foo-val"), e instanceof HTMLElement && (this.pageInfo.define = e.getAttribute("data-define")), this.pageInfo
        },
        initParams: function (e, t) {
            var n, r, i = null, o = "", s = "", a = "";
            for (n = 0, r = t.length; n < r; ++n)i = t[n], i instanceof HTMLElement && (o = i.getAttribute("data-name"), s = i.getAttribute("data-value"), a = i.getAttribute("data-type"), o && (e[o] = "json" === a ? JSON.parse(s) : s))
        },
        fetch: function (e) {
            if ("function" == typeof this.base[e]) {
                var t = this.base[e].apply(Object);
                this.base[e] = "function" == typeof t ? new t : t
            }
            return this.base[e]
        },
        handerFunction: function (e) {
            return e
        },
        loadImg: function () {
            var e = t.querySelectorAll("img[data-delay]");
            this.loadDelayImg(e)
        },
        loadDelayImg: function (e) {
            Array.prototype.forEach.call(e, function (e) {
                if (e instanceof HTMLElement) {
                    if (e.getAttribute("load"))return;
                    e.setAttribute("load", "unload");
                    var t = e.getAttribute("data-delay");
                    e.addEventListener("load", function () {
                        e.setAttribute("load", "loaded"), !e.classList.contains("obj-contain") || "objectFit"in e.style || r(e)
                    }), e.addEventListener("error", function () {
                        var t = e.getAttribute("data-default");
                        e.setAttribute("load", "error"), t && t !== e.getAttribute("src") && e.setAttribute("src", t)
                    }), t && e.setAttribute("src", t)
                }
            })
        },
        delayImgLoaded: function (e) {
            var t, n, r, i;
            for (t = 0, n = e.length; t < n; ++t)if (r = e[t], r instanceof HTMLElement && (i = r.getAttribute("load"), "unload" === i))return !1;
            return !0
        },
        appendScript: function (e, n, r) {
            if (!this.stringUtil.isNull(e)) {
                var i = t.createElement("script");
                i.setAttribute("type", "text/javascript"), i.setAttribute("src", e), r && i.setAttribute("defer", "defer"), n instanceof Function && (i.onload = function (e) {
                    n(e, i)
                }), t.body.appendChild(i)
            }
        },
        require: function (e) {
            var t, r, i = this, o = n[e];
            o && (t = o.url + "?v=" + o.version, r = function (e, t) {
                t.readyState && "loaded" !== t.readyState && "complete" !== t.readyState || i.event.fire({
                    type: "invoke",
                    message: "hello"
                })
            }, i.appendScript(t, r))
        },
        buildModule: function (e, t, n) {
            var r, i, o, s = this.stringUtil, a = {require: null, target: null};
            if (!s.isNull(e) && n instanceof Function) {
                if (a.target = n, t instanceof Array) {
                    r = [];
                    for (i in t) {
                        if (o = t[i], s.isNull(o) || !this.base.hasOwnProperty(o))throw new Error("依赖参数错误!");
                        r.push(o)
                    }
                    r.length && (a.require = r)
                }
                this.module[e] = a
            }
        },
        initModule: function (e, t) {
            var n, r, i, o, s = [];
            if (!(e instanceof Function))throw new Error("非法模块调用!");
            if (t instanceof Array && t.length)for (n in t)r = t[n], s.push(this.fetch(r));
            return i = e.apply(Object, s), o = this.handerFunction(new i)
        },
        registerHandlers: function (e, t) {
            if ("string" == typeof e && "function" == typeof t) {
                if (this.handlers.indexOf(e) !== -1)throw new Error("事件:%s 已经注册!", e);
                this.handlers.push(e), this.event.addHandler(e, t)
            }
        },
        fireHandlers: function () {
            var e, t, n, r = this.handlers;
            for (e = 0, t = r.length; e < t; ++e)n = r[e], this.event.fire({type: n, message: "Action page loaded!"})
        }
    };
    e.define = function () {
        var e, t, n, r, i, o = arguments, a = o.length;
        a >= 2 && (n = o[0], r = o[1], i = 3 === a ? o[2] : null, r instanceof Function && (e = r), i instanceof Function && (e = i), r instanceof Array && (t = r), s.stringUtil.isNull(n) || s.buildModule(n, t, e))
    }, i = function (e, t) {
        "string" == typeof e && /^object|function$/.test(typeof t) && "" !== e && (s.base[e] || (s.base[e] = t))
    }, e.base = i, e.plugin = i, e.stopEvent = function (t) {
        return t = t || e.event, t.preventDefault && (t.preventDefault(), t.stopPropagation()), t.returnValue && (t.returnValue = !1), t.cancelBubble && (t.cancelBubble = !0), !1
    }, o = {
        pageInfo: s.pageInfo, invokePage: function () {
            var n, r, i;
            if (this.pageInfo.define && (n = s.module[this.pageInfo.define], n instanceof Object)) {
                e.page = e.page = s.initModule(n.target, n.require), this.pageInfo.vals && s.initParams(page, this.pageInfo.vals), e.__pageVals && $.extend(page, e.__pageVals), "function" == typeof page.imgReady && (r = t.querySelectorAll("img[data-delay]"), i = self.setInterval(function () {
                    s.delayImgLoaded(r) && (e.clearInterval(i), page.imgReady())
                }, 1500));
                try {
                    "function" == typeof page.ready && page.ready(), "function" == typeof page.register && page.register(), s.fireHandlers()
                } catch (t) {
                    e.console.error(t.message, t)
                }
            }
            return this
        }, execute: function () {
            o.invokePage()
        }
    }, s.event.addHandler("invoke", o.execute), e.addEventListener("DOMContentLoaded", function r() {
        e.removeEventListener("DOMContentLoaded", r, !1);
        var i = s.initPageInfo().define;
        n instanceof Object ? i && s.require(i) : o.invokePage(), t.querySelector("x-foo-opt[data-name=deferImgLoad]") || s.loadImg()
    }, !1)
}(window, window.document, window.actionConfig), plugin("home", function () {
    var e = function () {
    };
    return e.prototype = {
        constructor: e, _vCode: function (e) {
            e.attr("src", page.captcha + Math.random(1e3))
        }, _input_check_tips: function (e, t, n, r) {
            var i = t.parents(".form-item").find(".form-tips");
            return n && !e ? (t.addClass("error"), r && t.focus(), void i.show().addClass("error").html(n)) : (t.removeClass("error"), void i.hide())
        }, _check_name: function (e, t) {
            var n, r, i = this, o = e.val();
            return o ? (n = /^[A-Za-z0-9\u4e00-\u9fa5_-]+$/.test(o)) ? o && o.length < 2 ? (i._input_check_tips(null, e, "昵称不能少于2个字符", t), !1) : (r = /^[\u4e00-\u9fa5]+$/.test(o), !(o && o.length > (r ? 10 : 20)) || (i._input_check_tips(null, e, r ? "纯中文昵称最长10个字符" : "昵称最长20个字符", t), !1)) : (i._input_check_tips(null, e, "昵称只能由中文、字母、数字、下划线或者短横线组成", t),
                !1) : (i._input_check_tips(null, e, "请输入昵称", t), !1)
        }, _check_password: function (e, t) {
            var n = this, r = e.val(), i = !r.match(/[0-9]/) || !(r.match(/[a-zA-Z]/) || /\W/.test(r));
            return r ? r.length < 8 ? (n._input_check_tips(null, e, "密码不能少于8位", t), !1) : r.length > 20 ? (n._input_check_tips(null, e, "密码不能多于20位", t), !1) : !i || (n._input_check_tips(null, e, "密码必须是字母或特殊符号和数字结合", t), !1) : (n._input_check_tips(null, e, "请输入密码", t), !1)
        }, _check_password2: function (e, t) {
            var n = this;
            return e.val() === t.val() || (n._input_check_tips(null, t, "两次密码不一样"), !1)
        }, _check_mail: function (e, t) {
            var n = this, r = e.val();
            return r ? n._is_mail(r) ? (n._input_check_tips(null, e), !0) : (n._input_check_tips(null, e, "请输入正确的邮箱地址", t), !1) : (n._input_check_tips(null, e, "请输入邮箱地址", t), !1)
        }, _is_mail: function (e) {
            var t = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return t.test(e)
        }, _check_phone: function (e, t) {
            var n = this, r = n._is_phone(e.val());
            return e.val() ? !!r || (n._input_check_tips(null, e, "请输入正确的手机号码", t), !1) : (n._input_check_tips(null, e, "请输入手机号码", t), !1)
        }, _is_phone: function (e) {
            if (!e)return !1;
            var t = /^(((13[0-9])|(14[5,7])|(15([0-3]|[5-9]))|(17[0,3,6-8])|(18[0-9]))\d{8})|(0\\d{2}-\\d{8})|(0\\d{3}-\\d{7,8})$/;
            return t.test(e)
        }, _countDown: function () {
            var e = 60, t = $(".send-phone-vcode"), n = self.setInterval(function () {
                t.attr("disabled", "true"), t.val(e + "s后重新发送"), e--, e < 1 && (clearInterval(n), t.removeAttr("disabled"), t.val("重新获取"))
            }, 1e3)
        }
    }, e
});
var CryptoJS = CryptoJS || function (e, t) {
        var n, r = {}, i = r.lib = {}, o = i.Base = function () {
            function e() {
            }

            return {
                extend: function (t) {
                    e.prototype = this;
                    var n = new e;
                    return t && n.mixIn(t), n.$super = this, n
                }, create: function () {
                    var e = this.extend();
                    return e.init.apply(e, arguments), e
                }, init: function () {
                }, mixIn: function (e) {
                    for (var t in e)e.hasOwnProperty(t) && (this[t] = e[t]);
                    e.hasOwnProperty("toString") && (this.toString = e.toString)
                }, clone: function () {
                    return this.$super.extend(this)
                }
            }
        }(), s = i.WordArray = o.extend({
            init: function (e, n) {
                e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length
            }, toString: function (e) {
                return (e || u).stringify(this)
            }, concat: function (e) {
                var t, n = this.words, r = e.words, i = this.sigBytes;
                if (e = e.sigBytes, this.clamp(), i % 4)for (t = 0; t < e; t++)n[i + t >>> 2] |= (r[t >>> 2] >>> 24 - 8 * (t % 4) & 255) << 24 - 8 * ((i + t) % 4); else if (65535 < r.length)for (t = 0; t < e; t += 4)n[i + t >>> 2] = r[t >>> 2]; else n.push.apply(n, r);
                return this.sigBytes += e, this
            }, clamp: function () {
                var t = this.words, n = this.sigBytes;
                t[n >>> 2] &= 4294967295 << 32 - 8 * (n % 4), t.length = e.ceil(n / 4)
            }, clone: function () {
                var e = o.clone.call(this);
                return e.words = this.words.slice(0), e
            }, random: function (t) {
                for (var n = [], r = 0; r < t; r += 4)n.push(4294967296 * e.random() | 0);
                return s.create(n, t)
            }
        }), a = r.enc = {}, u = a.Hex = {
            stringify: function (e) {
                var t, n, r, i;
                for (t = e.words, e = e.sigBytes, n = [], r = 0; r < e; r++)i = t[r >>> 2] >>> 24 - 8 * (r % 4) & 255, n.push((i >>> 4).toString(16)), n.push((15 & i).toString(16));
                return n.join("")
            }, parse: function (e) {
                for (var t = e.length, n = [], r = 0; r < t; r += 2)n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - 4 * (r % 8);
                return s.create(n, t / 2)
            }
        }, c = a.Latin1 = {
            stringify: function (e) {
                for (var t = e.words, e = e.sigBytes, n = [], r = 0; r < e; r++)n.push(String.fromCharCode(t[r >>> 2] >>> 24 - 8 * (r % 4) & 255));
                return n.join("")
            }, parse: function (e) {
                for (var t = e.length, n = [], r = 0; r < t; r++)n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - 8 * (r % 4);
                return s.create(n, t)
            }
        }, l = a.Utf8 = {
            stringify: function (e) {
                try {
                    return decodeURIComponent(escape(c.stringify(e)))
                } catch (e) {
                    throw Error("Malformed UTF-8 data")
                }
            }, parse: function (e) {
                return c.parse(unescape(encodeURIComponent(e)))
            }
        }, f = i.BufferedBlockAlgorithm = o.extend({
            reset: function () {
                this._data = s.create(), this._nDataBytes = 0
            }, _append: function (e) {
                "string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
            }, _process: function (t) {
                var n, r = this._data, i = r.words, o = r.sigBytes, a = this.blockSize, u = o / (4 * a);
                if (u = t ? e.ceil(u) : e.max((0 | u) - this._minBufferSize, 0), t = u * a, o = e.min(4 * t, o), t) {
                    for (n = 0; n < t; n += a)this._doProcessBlock(i, n);
                    n = i.splice(0, t), r.sigBytes -= o
                }
                return s.create(n, o)
            }, clone: function () {
                var e = o.clone.call(this);
                return e._data = this._data.clone(), e
            }, _minBufferSize: 0
        });
        return i.Hasher = f.extend({
            init: function () {
                this.reset()
            }, reset: function () {
                f.reset.call(this), this._doReset()
            }, update: function (e) {
                return this._append(e), this._process(), this
            }, finalize: function (e) {
                return e && this._append(e), this._doFinalize(), this._hash
            }, clone: function () {
                var e = f.clone.call(this);
                return e._hash = this._hash.clone(), e
            }, blockSize: 16, _createHelper: function (e) {
                return function (t, n) {
                    return e.create(n).finalize(t)
                }
            }, _createHmacHelper: function (e) {
                return function (t, r) {
                    return n.HMAC.create(e, r).finalize(t)
                }
            }
        }), n = r.algo = {}, r
    }(Math);
!function () {
    var e = CryptoJS, t = e.lib, n = t.WordArray, t = t.Hasher, r = [], i = e.algo.SHA1 = t.extend({
        _doReset: function () {
            this._hash = n.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
        }, _doProcessBlock: function (e, t) {
            var n, i, o, s, a, u, c, l;
            for (n = this._hash.words, i = n[0], o = n[1], s = n[2], a = n[3], u = n[4], c = 0; 80 > c; c++)16 > c ? r[c] = 0 | e[t + c] : (l = r[c - 3] ^ r[c - 8] ^ r[c - 14] ^ r[c - 16], r[c] = l << 1 | l >>> 31), l = (i << 5 | i >>> 27) + u + r[c], l = 20 > c ? l + ((o & s | ~o & a) + 1518500249) : 40 > c ? l + ((o ^ s ^ a) + 1859775393) : 60 > c ? l + ((o & s | o & a | s & a) - 1894007588) : l + ((o ^ s ^ a) - 899497514), u = a, a = s, s = o << 30 | o >>> 2, o = i, i = l;
            n[0] = n[0] + i | 0, n[1] = n[1] + o | 0, n[2] = n[2] + s | 0, n[3] = n[3] + a | 0, n[4] = n[4] + u | 0
        }, _doFinalize: function () {
            var e = this._data, t = e.words, n = 8 * this._nDataBytes, r = 8 * e.sigBytes;
            t[r >>> 5] |= 128 << 24 - r % 32, t[(r + 64 >>> 9 << 4) + 15] = n, e.sigBytes = 4 * t.length, this._process()
        }
    });
    e.SHA1 = t._createHelper(i), e.HmacSHA1 = t._createHmacHelper(i)
}();