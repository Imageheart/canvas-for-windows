(function (t) {
    function e(e) {
        for (var s, l, n = e[0], c = e[1], o = e[2], y = 0, u = []; y < n.length; y++) l = n[y], a[l] && u.push(a[l][0]), a[l] = 0;
        for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (t[s] = c[s]);
        r && r(e);
        while (u.length) u.shift()();
        return h.push.apply(h, o || []), i()
    }

    function i() {
        for (var t, e = 0; e < h.length; e++) {
            for (var i = h[e], s = !0, n = 1; n < i.length; n++) {
                var c = i[n];
                0 !== a[c] && (s = !1)
            }
            s && (h.splice(e--, 1), t = l(l.s = i[0]))
        }
        return t
    }
    var s = {},
        a = {
            app: 0
        },
        h = [];

    function l(e) {
        if (s[e]) return s[e].exports;
        var i = s[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, l), i.l = !0, i.exports
    }
    l.m = t, l.c = s, l.d = function (t, e, i) {
        l.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, l.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, l.t = function (t, e) {
        if (1 & e && (t = l(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (l.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var s in t) l.d(i, s, function (e) {
                return t[e]
            }.bind(null, s));
        return i
    }, l.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return l.d(e, "a", e), e
    }, l.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, l.p = "";
    var n = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = n.push.bind(n);
    n.push = e, n = n.slice();
    for (var o = 0; o < n.length; o++) e(n[o]);
    var r = c;
    h.push([0, "chunk-vendors"]), i()
})({
    0: function (t, e, i) {
        t.exports = i("56d7")
    },
    "07bb": function (t, e, i) {},
    "56d7": function (t, e, i) {
        "use strict";
        i.r(e);
        i("cadf"), i("551c"), i("f751"), i("097d");
        var s = i("2b0e"),
            a = i("5c96"),
            h = i.n(a),
            l = (i("0fae"), function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "app"
                    }
                }, [i("toolBar"), i("HelloWorld", {
                    attrs: {
                        msg: ""
                    }
                })], 1)
            }),
            n = [],
            c = function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", [i("h1", [t._v(t._s(t.msg))]), i("canvas", {
                    ref: "canvas",
                    attrs: {
                        id: "canvas",
                        width: "800",
                        height: "600"
                    },
                    on: {
                        mousedown: function (e) {
                            return t.canvasDown(e)
                        },
                        mousemove: function (e) {
                            return t.canvasMove(e)
                        },
                        mouseup: function (e) {
                            return t.canvasUp(e)
                        },
                        mouseleave: function (e) {
                            return t.canvasLeave(e)
                        }
                    }
                })])
            },
            o = [],
            r = i("768b"),
            y = i("d225"),
            u = i("b0b4"),
            p = (i("6c7b"), i("75fc")),
            x = i("9a04"),
            m = (i("c5f6"), new s["default"]),
            f = {
                name: "HelloWorld",
                props: {
                    msg: String
                },
                mounted: function () {
                    var t = this;
                    m.$on("myFun", function (e) {
                        t.colorstyle = e
                    }), m.$on("type", function (e) {
                        t.type = e, "Ploygon" == e && t.openbox(e)
                    }), m.$on("clean", function () {
                        t.clean()
                    }), m.$on("dele", function () {
                        t.dele()
                    }), this.show()
                },
                data: function () {
                    return {
                        colorstyle: "rgb(0,0,0,1)",
                        clickCanvasX: "",
                        clickCanvasY: "",
                        type: "line",
                        polynumber: 0,
                        imageData1: [],
                        tempcanvax: 0,
                        tempcanvay: 0,
                        tempcount: 0,
                        tempdata: [],
                        tempupdata: [],
                        judge1: !1,
                        judge2: !1,
                        judge3: !1,
                        alltypetemp: [],
                        alltype: [],
                        allRanPolyData: [],
                        ranpolyData: [],
                        clickjudge: !1,
                        clickjudge1: !1,
                        tempnumber: Number,
                        clickdata: [],
                        key: []
                    }
                },
                methods: {
                    show: function () {
                        this.canvas = this.$refs.canvas, this.ctx = this.canvas.getContext("2d"), this.ctx.lineWidth = 1, this.ctx.rect(0, 0, 800, 600), this.ctx.stroke()
                    },
                    canvasDown: function (t) {
                        var e, i;
                        if (this.canvasMoveUse = !0, this.clickCanvasX = t.clientX - t.target.offsetLeft, this.clickCanvasY = t.clientY - t.target.offsetTop + document.documentElement.scrollTop, "radomPloygon" != this.type && (this.judge1 = !1), this.tempdata.push({
                                x: this.clickCanvasX,
                                y: this.clickCanvasY
                            }), this.judge1) {
                            this.ctx.moveTo(this.tempcanvax, this.tempcanvay), this.ctx.strokeStyle = this.colorstyle;
                            var s = [this.ctx, this.tempupdata[this.tempupdata.length - 1].x, this.tempupdata[this.tempupdata.length - 1].y, this.clickCanvasX, this.clickCanvasY, this.ctx.strokeStyle, this.type];
                            this.alltypetemp = Object(x["a"])(O, s), this.alltypetemp.generate(), this.ctx.stroke();
                            try {
                                if (this.tempupdata[this.tempupdata.length - 1].x == this.clickCanvasX && this.tempupdata[this.tempupdata.length - 1].y == this.clickCanvasY) {
                                    var a = [this.ctx, this.tempupdata[this.tempupdata.length - 1].x, this.tempupdata[this.tempupdata.length - 1].y, this.tempdata[0].x, this.tempdata[0].y, this.tempcount, this.ctx.strokeStyle];
                                    this.allRanPolyData.push(Object(x["a"])(O, a));
                                    var h = [this.ctx, this.allRanPolyData[0].x + this.allRanPolyData[0].a, this.allRanPolyData[0].y + this.allRanPolyData[0].b, this.allRanPolyData[0].x, this.allRanPolyData[0].y, this.tempcount, this.ctx.strokeStyle],
                                        l = Object(x["a"])(O, h);
                                    this.key = [], this.key.push(l);
                                    for (var n = 1; n < this.allRanPolyData.length; n++) this.key.push(this.allRanPolyData[n]);
                                    var c = Object(x["a"])(S, [this.ctx, this.type, this.ctx.strokeStyle, 0].concat(Object(p["a"])(this.key)));
                                    return this.alltype.push(c), this.tempcanvax = 0, this.tempcanvay = 0, this.tempcount = 0, this.tempdata = [], this.tempupdata = [], this.allRanPolyData = [], this.judge1 = !1, this.judge2 = !1, void(this.judge3 = !1)
                                }
                            } catch (r) {}
                        } else this.ctx.moveTo(this.clickCanvasX, this.clickCanvasY);
                        for (var o = 0; o < this.alltype.length; o++)
                            if (!(this.alltype[o] instanceof Array)) switch (this.alltype[o].type) {
                                case "radius":
                                    if (this.ctx.beginPath(), this.ctx.rect(this.alltype[o].x - this.alltype[o].a, this.alltype[o].y + this.alltype[o].b, 2 * this.alltype[o].a, 2 * -this.alltype[o].b), this.ctx.closePath(), this.ctx.isPointInPath(this.clickCanvasX, this.clickCanvasY)) return this.cleanScreen(this.ctx), this.generateAgainAll(this.alltype), D(this.ctx, this.alltype[o].x - this.alltype[o].a, this.alltype[o].y + this.alltype[o].b, 2 * this.alltype[o].a, 2 * -this.alltype[o].b), this.clickdata.push([this.alltype[o].x - this.alltype[o].a, this.alltype[o].y + this.alltype[o].b, 2 * this.alltype[o].a, 2 * -this.alltype[o].b]), this.ctx.strokeStyle = this.alltype[o].color, this.clickjudge = !0, this.tempnumber = o, void(this.clickjudge1 && (this.clickdata[0][0] == this.alltype[o].x - this.alltype[o].a && this.clickdata[0][1] == this.alltype[o].y + this.alltype[o].b && this.clickdata[0][2] == 2 * this.alltype[o].a && this.clickdata[0][3] == 2 * -this.alltype[o].b || (this.clickdata.splice(0, 1), this.clickjudge1 = !1)));
                                    this.generateAgainAll(this.alltype), this.clickjudge = !1;
                                    try {
                                        this.clickdata[0][0] == this.alltype[o].x - this.alltype[o].a && this.clickdata[0][1] == this.alltype[o].y + this.alltype[o].b && this.clickdata[0][2] == 2 * this.alltype[o].a && this.clickdata[0][3] == 2 * -this.alltype[o].b && (this.clickjudge1 = !1, this.clickdata.splice(0, 1), this.cleanScreen(this.ctx), this.generateAgainAll(this.alltype))
                                    } catch (r) {}
                                    break;
                                case "rectangle":
                                    if (e = this.alltype[o].compare(), this.ctx.beginPath(), this.ctx.rect(e.minx, e.miny, e.maxx - e.minx, e.maxy - e.miny), this.ctx.closePath(), this.ctx.isPointInPath(this.clickCanvasX, this.clickCanvasY)) return this.cleanScreen(this.ctx), i = this.alltype[o], this.alltype.splice(o, 1), this.generateAgainAll(this.alltype), this.alltype.splice(o, 0, i), D(this.ctx, e.minx, e.miny, e.maxx - e.minx, e.maxy - e.miny), this.ctx.strokeStyle = this.alltype[o].color, this.clickdata.push([e.minx, e.miny, e.maxx - e.minx, e.maxy - e.miny]), this.clickjudge = !0, this.tempnumber = o, void(this.clickjudge1 && (this.clickdata[0][0] == e.minx && this.clickdata[0][1] == e.miny && this.clickdata[0][2] == e.maxx - e.minx && this.clickdata[0][3] == e.maxy - e.miny || (this.clickdata.splice(0, 1), this.clickjudge1 = !1)));
                                    this.generateAgainAll(this.alltype), this.clickjudge = !1;
                                    try {
                                        this.clickdata[0][0] == e.minx && this.clickdata[0][1] == e.miny && this.clickdata[0][2] == e.maxx - e.minx && this.clickdata[0][3] == e.maxy - e.miny && (this.clickjudge1 = !1, this.clickdata.splice(0, 1), this.cleanScreen(this.ctx), this.generateAgainAll(this.alltype))
                                    } catch (r) {}
                                    break;
                                default:
                                    if (e = this.alltype[o].compare(), this.ctx.beginPath(), this.ctx.rect(e.minx, e.miny, e.maxx - e.minx, e.maxy - e.miny), this.ctx.closePath(), this.ctx.isPointInPath(this.clickCanvasX, this.clickCanvasY)) return this.cleanScreen(this.ctx), this.generateAgainAll(this.alltype), D(this.ctx, e.minx, e.miny, e.maxx - e.minx, e.maxy - e.miny), this.ctx.strokeStyle = this.alltype[o].color, this.clickdata.push([e.minx, e.miny, e.maxx - e.minx, e.maxy - e.miny]), this.clickjudge = !0, this.tempnumber = o, void(this.clickjudge1 && (this.clickdata[0][0] == e.minx && this.clickdata[0][1] == e.miny && this.clickdata[0][2] == e.maxx - e.minx && this.clickdata[0][3] == e.maxy - e.miny || (this.clickdata.splice(0, 1), this.clickjudge1 = !1)));
                                    this.generateAgainAll(this.alltype), this.clickjudge = !1;
                                    try {
                                        this.clickdata[0][0] == e.minx && this.clickdata[0][1] == e.miny && this.clickdata[0][2] == e.maxx - e.minx && this.clickdata[0][3] == e.maxy - e.miny && (this.clickjudge1 = !1, "radomPloygon" != this.alltype[o].type && this.cleanScreen(this.ctx), this.clickdata.splice(0, 1), this.generateAgainAll(this.alltype))
                                    } catch (r) {}
                            }
                    },
                    canvasMove: function (t) {
                        if (this.canvasMoveUse) {
                            var e, i, s = t.target;
                            e = t.clientX - s.offsetLeft, i = t.clientY - s.offsetTop + document.documentElement.scrollTop;
                            var a = this.clickCanvasX - e,
                                h = this.clickCanvasY - i,
                                l = [];
                            if (this.clickjudge) {
                                var n = this.alltype[this.tempnumber],
                                    c = n.type,
                                    o = {},
                                    r = [];
                                if (!this.clickjudge1) return;
                                switch (c) {
                                    case "line":
                                        break;
                                    case "beeline":
                                        this.ctx.beginPath(), this.ctx.strokeStyle = n.color, l = [this.ctx, e - .5 * n.a, i - .5 * n.b, n.a, n.b, this.ctx.strokeStyle, c], this.cleanScreen(this.ctx), this.alltypetemp = Object(x["a"])(j, Object(p["a"])(l)), this.generateAgainAll(this.alltype), this.alltypetemp.generate(), this.ctx.stroke();
                                        break;
                                    case "radius":
                                        this.ctx.beginPath(), this.ctx.strokeStyle = n.color, l = [this.ctx, e, i, n.a, n.b, this.ctx.strokeStyle, c], this.cleanScreen(this.ctx), this.alltypetemp = Object(x["a"])(b, Object(p["a"])(l)), this.generateAgainAll(this.alltype), this.alltypetemp.generate(), this.ctx.stroke();
                                        break;
                                    case "rectangle":
                                        this.ctx.beginPath(), this.ctx.strokeStyle = n.color, l = [this.ctx, e - .5 * n.a, i - .5 * n.b, n.a, n.b, this.ctx.strokeStyle, c], this.cleanScreen(this.ctx), this.alltypetemp = Object(x["a"])(d, Object(p["a"])(l)), this.generateAgainAll(this.alltype), this.alltypetemp.generate(), this.ctx.stroke();
                                        break;
                                    case "star":
                                        this.ctx.beginPath(), this.ctx.strokeStyle = n.color, l = [this.ctx, e, i, n.a, n.b, this.ctx.strokeStyle, c], this.cleanScreen(this.ctx), this.alltypetemp = Object(x["a"])(k, Object(p["a"])(l)), this.generateAgainAll(this.alltype), this.alltypetemp.generate(), this.ctx.stroke();
                                        break;
                                    case "Ploygon":
                                        this.ctx.beginPath(), this.ctx.strokeStyle = n.color, l = [this.ctx, e, i, n.a, n.b, this.ctx.strokeStyle, c, n.polynumber], this.cleanScreen(this.ctx), this.alltypetemp = Object(x["a"])(v, Object(p["a"])(l)), this.generateAgainAll(this.alltype), this.alltypetemp.generate(), this.ctx.stroke();
                                        break;
                                    case "radomPloygon":
                                        this.ctx.beginPath(), this.cleanScreen(this.ctx), this.generateAgainAll(this.alltype), o = {
                                            shiftX: a,
                                            shiftY: h
                                        }, r = [n.fir].concat(Object(p["a"])(n.other)), this.ctx.strokeStyle = n.color, l = [this.ctx, n.type, n.color, o].concat(Object(p["a"])(r)), this.ranpolyData = Object(x["a"])(S, Object(p["a"])(l)), this.generateAgainAll(this.ranpolyData), this.ranpolyData.generate(), this.ctx.strokeStyle = this.colorstyle, this.ctx.stroke();
                                        break
                                }
                            } else {
                                switch (this.type) {
                                    case "line":
                                        this.cleanScreen(this.ctx), this.generateAgainAll(this.alltype), this.ctx.beginPath(), this.ctx.strokeStyle = this.colorstyle, l = [this.ctx, e, i, 0, 0, this.ctx.strokeStyle, this.type], this.alltypetemp.push(Object(x["a"])(g, Object(p["a"])(l)));
                                        for (var y = 0; y < this.alltypetemp.length; y++) this.alltypetemp[y].generate();
                                        break;
                                    case "beeline":
                                        this.ctx.beginPath(), this.ctx.strokeStyle = this.colorstyle, l = [this.ctx, e, i, a, h, this.ctx.strokeStyle, this.type], this.cleanScreen(this.ctx), this.alltypetemp = Object(x["a"])(j, Object(p["a"])(l)), this.generateAgainAll(this.alltype), this.alltypetemp.generate(), this.ctx.stroke();
                                        break;
                                    case "radius":
                                        this.ctx.beginPath(), this.ctx.strokeStyle = this.colorstyle, l = [this.ctx, e, i, a, h, this.ctx.strokeStyle, this.type], this.cleanScreen(this.ctx), this.alltypetemp = Object(x["a"])(b, Object(p["a"])(l)), this.generateAgainAll(this.alltype), this.alltypetemp.generate(), this.ctx.stroke();
                                        break;
                                    case "rectangle":
                                        this.ctx.beginPath(), this.ctx.strokeStyle = this.colorstyle, l = [this.ctx, e, i, a, h, this.ctx.strokeStyle, this.type], this.cleanScreen(this.ctx), this.alltypetemp = Object(x["a"])(d, Object(p["a"])(l)), this.generateAgainAll(this.alltype), this.alltypetemp.generate(), this.ctx.stroke();
                                        break;
                                    case "star":
                                        this.ctx.beginPath(), this.ctx.strokeStyle = this.colorstyle, l = [this.ctx, e, i, a, h, this.ctx.strokeStyle, this.type], this.cleanScreen(this.ctx), this.alltypetemp = Object(x["a"])(k, Object(p["a"])(l)), this.generateAgainAll(this.alltype), this.alltypetemp.generate(), this.ctx.stroke();
                                        break;
                                    case "Ploygon":
                                        this.ctx.beginPath(), this.ctx.strokeStyle = this.colorstyle, l = [this.ctx, e, i, a, h, this.ctx.strokeStyle, this.type, this.polynumber], this.cleanScreen(this.ctx), this.alltypetemp = Object(x["a"])(v, Object(p["a"])(l)), this.generateAgainAll(this.alltype), this.alltypetemp.generate(), this.ctx.stroke();
                                        break;
                                    case "radomPloygon":
                                        this.ctx.beginPath(), this.cleanScreen(this.ctx), this.generateAgainAll(this.allRanPolyData), this.ctx.strokeStyle = this.colorstyle, this.judge1 = !0, l = this.judge2 && 0 != this.tempcanvax ? [this.ctx, this.tempcanvax, this.tempcanvay, -a, -h, this.tempcount, e - this.tempcanvax, i - this.tempcanvay, this.ctx.strokeStyle, this.type] : [this.ctx, e, i, a, h, this.tempcount, 0, 0, this.ctx.strokeStyle, this.type], this.generateAgainAll(this.alltype), this.alltypetemp = Object(x["a"])(P, Object(p["a"])(l)), this.alltypetemp.generate(), this.ctx.strokeStyle = this.colorstyle, this.ctx.stroke();
                                        break
                                }
                                this.ctx.closePath()
                            }
                        }
                    },
                    canvasUp: function (t) {
                        this.canvasMoveUse = !1;
                        var e, i, s = t.target;
                        if (e = t.clientX - s.offsetLeft, i = t.clientY - s.offsetTop + document.documentElement.scrollTop, this.judge1)
                            if (this.judge3 = this.sucker(this.ctx, this.tempdata[0].x, this.tempdata[0].y, e, i), this.allRanPolyData.push(this.alltypetemp), this.judge3) {
                                var a = [this.ctx, e, i, this.tempdata[0].x, this.tempdata[0].y, this.tempcount, this.ctx.strokeStyle, this.type];
                                this.allRanPolyData.push(Object(x["a"])(O, a));
                                var h = [this.ctx, this.allRanPolyData[0].x + this.allRanPolyData[0].a, this.allRanPolyData[0].y + this.allRanPolyData[0].b, this.allRanPolyData[0].x, this.allRanPolyData[0].y, this.tempcount],
                                    l = Object(x["a"])(O, h);
                                this.key = [], this.key.push(l);
                                for (var n = 1; n < this.allRanPolyData.length; n++) this.key.push(this.allRanPolyData[n]);
                                var c = Object(x["a"])(S, [this.ctx, this.type, this.ctx.strokeStyle, 0].concat(Object(p["a"])(this.key)));
                                this.alltype.push(c), this.tempcanvax = 0, this.tempcanvay = 0, this.tempcount = 0, this.tempdata = [], this.tempupdata = [], this.allRanPolyData = [], this.judge1 = !1, this.judge2 = !1, this.judge3 = !1
                            } else {
                                this.tempupdata.push({
                                    x: e,
                                    y: i
                                });
                                var o = Math.pow(Math.abs(this.tempupdata[0].x - this.tempdata[0].x), 2),
                                    r = Math.pow(Math.abs(this.tempupdata[0].y - this.tempdata[0].y), 2),
                                    y = Math.sqrt(o + r);
                                if (y < 5) return y = 0, this.cleanScreen(this.ctx), this.tempcanvax = 0, this.tempcanvay = 0, this.tempcount = 0, this.tempdata = [], this.tempupdata = [], this.judge1 = !1, this.judge2 = !1, void(this.judge3 = !1);
                                this.judge2 = !0, this.tempcanvax = e, this.tempcanvay = i, this.tempcount++
                            }
                        else try {
                            this.judge3 = this.sucker(this.ctx, this.tempdata[0].x, this.tempdata[0].y, e, i), this.judge3 && (this.allRanPolyData = [])
                        } catch (f) {}
                        if (this.clickjudge) {
                            if (this.clickjudge1) {
                                if ("radomPloygon" != this.alltype[this.tempnumber].type) 0 != this.alltypetemp.length && (this.alltype.push(this.alltypetemp), this.alltypetemp = [], this.alltype.splice(this.tempnumber, 1)), this.clickjudge = !1, this.clickjudge1 = !1, this.clickdata = [];
                                else {
                                    if (0 != this.ranpolyData.length) {
                                        var u = this.ranpolyData.offset;
                                        this.ranpolyData.fir.x = this.ranpolyData.fir.x - u.shiftX, this.ranpolyData.fir.y = this.ranpolyData.fir.y - u.shiftY;
                                        for (var m = 0; m < this.ranpolyData.other.length; m++) this.ranpolyData.other[m].x = this.ranpolyData.other[m].x - u.shiftX, this.ranpolyData.other[m].y = this.ranpolyData.other[m].y - u.shiftY;
                                        this.ranpolyData.offset = {
                                            shiftX: 0,
                                            shiftY: 0
                                        }, this.alltype.push(this.ranpolyData), this.alltype.splice(this.tempnumber, 1), this.ranpolyData = []
                                    }
                                    this.clickjudge = !1, this.clickjudge1 = !1, this.clickdata = []
                                }
                                return this.cleanScreen(this.ctx), void this.generateAgainAll(this.alltype)
                            }
                            this.clickjudge1 = !0
                        } else "radomPloygon" != this.type && 0 != this.alltypetemp.length && (this.alltype.push(this.alltypetemp), this.alltypetemp = []), this.cleanScreen(this.ctx), this.generateAgainAll(this.allRanPolyData), this.generateAgainAll(this.alltype)
                    },
                    canvasLeave: function () {
                        this.canvasMoveUse = !1
                    },
                    clean: function () {
                        this.canvas = this.$refs.canvas, this.ctx = this.canvas.getContext("2d"), this.ctx.fillStyle = "#ffffff", this.ctx.beginPath(), this.ctx.rect(0, 0, 800, 600), this.ctx.fill(), this.ctx.strokeStyle = "rgb(0,0,0,1)", this.ctx.rect(0, 0, 800, 600), this.ctx.stroke(), this.ctx.closePath(), this.imageData1 = [], this.polynumber = 0, this.tempcount = 0, this.judge1 = !1, this.judge2 = !1, this.judge3 = !1, this.clickjudge = !1, this.clickjudge1 = !1, this.tempdata = [], this.tempupdata = [], this.tempcanvax = 0, this.tempcanvay = 0, this.alltype = [], this.type = "line"
                    },
                    cleanScreen: function (t) {
                        t.fillStyle = "#ffffff", t.beginPath(), t.rect(0, 0, 800, 600), t.fill(), t.strokeStyle = "rgb(0,0,0,1)", t.rect(0, 0, 800, 600), t.stroke(), t.closePath()
                    },
                    openbox: function (t) {
                        var e = this;
                        this.$prompt("请输入边数", "提示", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            inputPattern: /^((0?[3-9])|((1)[0-9])|20)$/,
                            inputErrorMessage: "请输入大于等于3小于等于20的整数"
                        }).then(function (i) {
                            var s = i.value;
                            e.$message({
                                type: "success",
                                message: "你输入的边数是: " + s
                            }), "Ploygon" == t && (e.polynumber = s)
                        }).catch(function () {
                            e.$message({
                                type: "info",
                                message: "取消输入"
                            })
                        })
                    },
                    sucker: function (t, e, i, s, a) {
                        t.beginPath(), t.arc(e, i, 5, 0, 2 * Math.PI), t.closePath();
                        var h = Math.sqrt((s - e) * (s - e) + (a - i) * (a - i));
                        return h <= 5
                    },
                    generateAgainAll: function (t) {
                        for (var e = t, i = 0; i < e.length; i++)
                            if (e[i] instanceof Array) {
                                var s = e[i];
                                this.ctx.moveTo(s[0].x, s[0].y);
                                for (var a = 0; a < s.length; a++) this.ctx.lineTo(s[a].x, s[a].y), s[a].generate(), this.ctx.strokeStyle = s[a].color
                            } else this.ctx.beginPath(), e[i].generate(), this.ctx.strokeStyle = e[i].color, this.ctx.stroke(), this.ctx.closePath()
                    },
                    dele: function () {
                        this.clickjudge || this.clickjudge1 ? (this.alltype.splice(this.tempnumber, 1), this.cleanScreen(this.ctx), this.generateAgainAll(this.alltype), this.clickjudge = !1, this.clickjudge1 = !1, this.clickdata = []) : this.$notify({
                            title: "删除图形",
                            message: "您未选定图形删除"
                        })
                    }
                }
            },
            g = function () {
                function t(e, i, s, a, h, l, n) {
                    Object(y["a"])(this, t), this.ctx = e, this.x = i, this.y = s, this.a = a, this.b = h, this.type = n, this.color = l
                }
                return Object(u["a"])(t, [{
                    key: "generate",
                    value: function () {
                        this.ctx.lineTo(this.x, this.y), this.ctx.stroke()
                    }
                }, {
                    key: "compare",
                    value: function () {
                        return 1
                    }
                }]), t
            }(),
            b = function () {
                function t(e, i, s, a, h, l, n) {
                    Object(y["a"])(this, t), this.ctx = e, this.x = i, this.y = s, this.a = a, this.b = h, this.type = n, this.color = l
                }
                return Object(u["a"])(t, [{
                    key: "generate",
                    value: function () {
                        var t = .5522848,
                            e = this.a * t,
                            i = this.b * t,
                            s = this.ctx;
                        s.beginPath(), s.strokeStyle = this.color, s.moveTo(this.x - this.a, this.y), s.bezierCurveTo(this.x - this.a, this.y - i, this.x - e, this.y - this.b, this.x, this.y - this.b), s.bezierCurveTo(this.x + e, this.y - this.b, this.x + this.a, this.y - i, this.x + this.a, this.y), s.bezierCurveTo(this.x + this.a, this.y + i, this.x + e, this.y + this.b, this.x, this.y + this.b), s.bezierCurveTo(this.x - e, this.y + this.b, this.x - this.a, this.y + i, this.x - this.a, this.y), s.closePath()
                    }
                }]), t
            }(),
            d = function () {
                function t(e, i, s, a, h, l, n) {
                    Object(y["a"])(this, t), this.ctx = e, this.x = i, this.y = s, this.a = a, this.b = h, this.type = n, this.color = l
                }
                return Object(u["a"])(t, [{
                    key: "generate",
                    value: function () {
                        var t = this.ctx;
                        t.beginPath(), t.rect(this.x, this.y, this.a, this.b), t.strokeStyle = this.color, t.stroke(), t.closePath()
                    }
                }, {
                    key: "compare",
                    value: function () {
                        var t, e, i, s;
                        return t = this.x + this.a, i = this.x, e = this.y + this.b, s = this.y, {
                            minx: t,
                            miny: e,
                            maxx: i,
                            maxy: s
                        }
                    }
                }]), t
            }(),
            k = function () {
                function t(e, i, s, a, h, l, n) {
                    Object(y["a"])(this, t), this.ctx = e, this.x = i, this.y = s, this.a = a, this.b = h, this.type = n, this.color = l, this.offsetx = [], this.offsety = []
                }
                return Object(u["a"])(t, [{
                    key: "generate",
                    value: function () {
                        var t = this.ctx;
                        this.offsetx = [], this.offsety = [], t.beginPath(), t.strokeStyle = this.color;
                        for (var e = 0; e < 6; e++) t.lineTo(Math.cos((18 + 72 * e) / 180 * Math.PI) * this.a + this.x, -Math.sin((18 + 72 * e) / 180 * Math.PI) * this.b + this.y), t.lineTo(Math.cos((54 + 72 * e) / 180 * Math.PI) * (.4 * this.a) + this.x, -Math.sin((54 + 72 * e) / 180 * Math.PI) * (.4 * this.b) + this.y), this.offsetx.push(Math.cos((18 + 72 * e) / 180 * Math.PI) * this.a + this.x), this.offsetx.push(Math.cos((54 + 72 * e) / 180 * Math.PI) * (.4 * this.a) + this.x), this.offsety.push(-Math.sin((18 + 72 * e) / 180 * Math.PI) * this.b + this.y), this.offsety.push(-Math.sin((54 + 72 * e) / 180 * Math.PI) * (.4 * this.b) + this.y);
                        t.restore(), t.closePath()
                    }
                }, {
                    key: "compare",
                    value: function () {
                        var t, e, i, s, a = this.offsetx,
                            h = this.offsety;
                        return a = A(a), h = A(h), t = a[0], i = a[a.length - 1], e = h[0], s = h[h.length - 1], {
                            minx: t,
                            miny: e,
                            maxx: i,
                            maxy: s
                        }
                    }
                }]), t
            }(),
            v = function () {
                function t(e, i, s, a, h, l, n, c) {
                    Object(y["a"])(this, t), this.ctx = e, this.x = i, this.y = s, this.a = a, this.b = h, this.type = n, this.color = l, this.polynumber = c, this.offsetx = [], this.offsety = []
                }
                return Object(u["a"])(t, [{
                    key: "generate",
                    value: function () {
                        var t = this.ctx,
                            e = this.polynumber,
                            i = 2 * Math.PI / e;
                        this.offsetx = [], this.offsety = [], t.save(), t.translate(this.x, this.y), t.strokeStyle = this.color, t.moveTo(0, -this.b), t.beginPath();
                        for (var s = 0; s < e; s++) t.rotate(i), t.lineTo(0, -this.b), this.offsetx.push(-this.b * Math.sin(i * (s + 1)) + this.x), this.offsety.push(-this.b * Math.cos(i * (s + 1)) + this.y);
                        t.closePath(), t.restore()
                    }
                }, {
                    key: "compare",
                    value: function () {
                        var t, e, i, s, a = this.offsetx,
                            h = this.offsety;
                        return a = A(a), h = A(h), t = a[0], i = a[a.length - 1], e = h[0], s = h[h.length - 1], {
                            minx: t,
                            miny: e,
                            maxx: i,
                            maxy: s
                        }
                    }
                }]), t
            }(),
            j = function () {
                function t(e, i, s, a, h, l, n) {
                    Object(y["a"])(this, t), this.ctx = e, this.x = i, this.y = s, this.a = a, this.b = h, this.type = n, this.color = l
                }
                return Object(u["a"])(t, [{
                    key: "generate",
                    value: function () {
                        var t = this.ctx;
                        t.beginPath(), t.moveTo(this.x, this.y), t.lineTo(this.x + this.a, this.y + this.b), t.closePath()
                    }
                }, {
                    key: "compare",
                    value: function () {
                        var t, e, i, s;
                        return t = Math.min(this.x, this.x + this.a), i = Math.max(this.x, this.x + this.a), e = Math.min(this.y, this.y + this.b), s = Math.max(this.y, this.y + this.b), {
                            minx: t,
                            miny: e,
                            maxx: i,
                            maxy: s
                        }
                    }
                }]), t
            }(),
            P = function () {
                function t(e, i, s, a, h, l, n, c, o, r) {
                    Object(y["a"])(this, t), this.ctx = e, this.x = i, this.y = s, this.a = a, this.b = h, this.mox = n, this.moy = c, this.tempcount = l, this.type = r, this.color = o
                }
                return Object(u["a"])(t, [{
                    key: "generate",
                    value: function () {
                        var t = this.ctx;
                        t.beginPath(), t.moveTo(this.x, this.y), 0 != this.tempcount ? t.lineTo(this.mox + this.x, this.moy + this.y) : t.lineTo(this.x + this.a, this.y + this.b), t.closePath()
                    }
                }]), t
            }(),
            O = function () {
                function t(e, i, s, a, h, l, n, c, o, r) {
                    Object(y["a"])(this, t), this.ctx = e, this.x = i, this.y = s, this.a = a, this.b = h, this.mox = n, this.moy = c, this.tempcount = l, this.type = r, this.color = o
                }
                return Object(u["a"])(t, [{
                    key: "generate",
                    value: function () {
                        this.ctx.beginPath(), this.ctx.moveTo(this.x, this.y), this.ctx.lineTo(this.a, this.b), this.ctx.closePath()
                    }
                }]), t
            }(),
            S = function () {
                function t(e, i, s, a, h) {
                    Object(y["a"])(this, t), this.ctx = e, this.fir = h;
                    for (var l = arguments.length, n = new Array(l > 5 ? l - 5 : 0), c = 5; c < l; c++) n[c - 5] = arguments[c];
                    this.other = n, this.type = i, this.color = s, this.offset = 0 == a ? {
                        shiftX: 0,
                        shiftY: 0
                    } : a
                }
                return Object(u["a"])(t, [{
                    key: "generate",
                    value: function () {
                        this.ctx.beginPath(), this.ctx.moveTo(this.fir.x - this.offset.shiftX, this.fir.y - this.offset.shiftY), this.ctx.lineTo(this.other[0].x - this.offset.shiftX, this.other[0].y - this.offset.shiftY);
                        for (var t = 1; t < this.other.length; t++) this.ctx.lineTo(this.other[t].x - this.offset.shiftX, this.other[t].y - this.offset.shiftY);
                        this.ctx.closePath()
                    }
                }, {
                    key: "compare",
                    value: function () {
                        for (var t, e, i, s, a = [this.fir.x - this.offset.shiftX], h = [this.fir.y - this.offset.shiftY], l = 0; l < this.other.length; l++) a.push(this.other[l].x - this.offset.shiftX), h.push(this.other[l].y - this.offset.shiftY);
                        return a = A(a), h = A(h), t = a[0], i = a[a.length - 1], e = h[0], s = h[h.length - 1], {
                            minx: t,
                            miny: e,
                            maxx: i,
                            maxy: s
                        }
                    }
                }]), t
            }();

        function A(t) {
            for (var e = 0; e < t.length; e++)
                for (var i = 0; i < t.length - 1 - e; i++)
                    if (t[i] > t[i + 1]) {
                        var s = t[i];
                        t[i] = t[i + 1], t[i + 1] = s
                    } return t
        }
        var C = function (t, e, i) {
                var s = Object(r["a"])(e, 2),
                    a = s[0],
                    h = s[1],
                    l = Object(r["a"])(i, 2),
                    n = l[0],
                    c = l[1],
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 5,
                    y = n - a,
                    u = c - h,
                    p = Math.floor(Math.sqrt(y * y + u * u) / o),
                    x = y / p,
                    m = u / p;
                t.beginPath();
                for (var f = 0; f < p; f++) f % 2 === 0 ? t.moveTo(a, h) : t.lineTo(a, h), a += x, h += m;
                t.lineTo(n, c)
            },
            D = function (t, e, i, s, a) {
                var h = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5;
                return t.strokeStyle = "rgb(0,0,0,1)", C(t, [e, i], [e + s, i], h), t.stroke(), C(t, [e + s, i], [e + s, i + a], h), t.stroke(), C(t, [e + s, i + a], [e, i + a], h), t.stroke(), C(t, [e, i + a], [e, i], h), t.stroke(), !0
            },
            M = f,
            T = i("2877"),
            w = Object(T["a"])(M, c, o, !1, null, "de4432b0", null),
            z = w.exports,
            _ = function () {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", [i("el-row", {
                    attrs: {
                        gutter: 12
                    }
                }, [i("el-col", {
                    attrs: {
                        span: 6
                    }
                }, [i("el-card", {
                    attrs: {
                        shadow: "hover"
                    }
                }, [i("el-container", [i("el-main", [i("div", {
                    staticClass: "flexColumn"
                }, [i("div", [i("el-button", {
                    attrs: {
                        icon: "el-icon-smoking",
                        circle: ""
                    },
                    on: {
                        click: function (e) {
                            return t.clean()
                        }
                    }
                }, [t._v("清空画布")]), i("el-button", {
                    attrs: {
                        icon: "el-icon-smoking",
                        circle: ""
                    },
                    on: {
                        click: function (e) {
                            return t.dele()
                        }
                    }
                }, [t._v("删除图形")])], 1)])]), i("el-footer", {
                    staticStyle: {
                        height: "30px"
                    }
                }, [t._v("工具")])], 1)], 1)], 1), i("el-col", {
                    attrs: {
                        span: 8
                    }
                }, [i("el-card", {
                    attrs: {
                        shadow: "hover"
                    }
                }, [i("el-container", [i("el-main", [i("div", {
                    staticStyle: {
                        "line-height": "16px"
                    }
                }, [i("div", [i("el-button", {
                    attrs: {
                        autofocus: !0,
                        size: "small"
                    },
                    on: {
                        click: function (e) {
                            return t.line()
                        }
                    }
                }, [t._v("线条")]), i("el-button", {
                    attrs: {
                        size: "small"
                    },
                    on: {
                        click: function (e) {
                            return t.beeline()
                        }
                    }
                }, [t._v("直线")]), i("el-button", {
                    attrs: {
                        size: "small"
                    },
                    on: {
                        click: function (e) {
                            return t.star()
                        }
                    }
                }, [t._v("五角星")])], 1), i("div", [i("el-button", {
                    attrs: {
                        size: "small"
                    },
                    on: {
                        click: function (e) {
                            return t.rectangle()
                        }
                    }
                }, [t._v("矩形")]), i("el-button", {
                    attrs: {
                        size: "small"
                    },
                    on: {
                        click: function (e) {
                            return t.radius()
                        }
                    }
                }, [t._v("圆形")]), i("el-button", {
                    attrs: {
                        size: "small"
                    },
                    on: {
                        click: function (e) {
                            return t.Ploygon()
                        }
                    }
                }, [t._v("多边形")]), i("el-button", {
                    attrs: {
                        size: "small"
                    },
                    on: {
                        click: function (e) {
                            return t.radomPloygon()
                        }
                    }
                }, [t._v("任意多边形")])], 1)])]), i("el-footer", {
                    staticStyle: {
                        height: "30px"
                    }
                }, [t._v("形状")])], 1)], 1)], 1), i("el-col", {
                    attrs: {
                        span: 6
                    }
                }, [i("el-card", {
                    attrs: {
                        shadow: "hover"
                    }
                }, [i("el-container", [i("el-main", {
                    staticStyle: {
                        padding: "8.5px"
                    }
                }, [i("div", {
                    staticClass: "colorstyle"
                }, [i("div", {
                    staticClass: "colorstylechild"
                }, [i("el-button", {
                    staticClass: "test",
                    style: t.styleObj[0],
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        click: function (e) {
                            return t.color1(e)
                        }
                    }
                }), i("el-button", {
                    style: t.styleObj[1],
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        click: function (e) {
                            return t.color1(e)
                        }
                    }
                }), i("el-button", {
                    style: t.styleObj[2],
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        click: function (e) {
                            return t.color1(e)
                        }
                    }
                }), i("el-button", {
                    style: t.styleObj[3],
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        click: function (e) {
                            return t.color1(e)
                        }
                    }
                }), i("el-button", {
                    style: t.styleObj[4],
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        click: function (e) {
                            return t.color1(e)
                        }
                    }
                })], 1), i("div", {
                    staticClass: "colorstylechild"
                }, [i("el-button", {
                    style: t.styleObj[5],
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        click: function (e) {
                            return t.color1(e)
                        }
                    }
                }), i("el-button", {
                    style: t.styleObj[6],
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        click: function (e) {
                            return t.color1(e)
                        }
                    }
                }), i("el-button", {
                    style: t.styleObj[7],
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        click: function (e) {
                            return t.color1(e)
                        }
                    }
                }), i("el-button", {
                    style: t.styleObj[8],
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        click: function (e) {
                            return t.color1(e)
                        }
                    }
                }), i("el-button", {
                    style: t.styleObj[9],
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        click: function (e) {
                            return t.color1(e)
                        }
                    }
                })], 1), i("div", {
                    staticClass: "colorstylechild"
                }, [i("el-button", {
                    style: t.styleObj[10],
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        click: function (e) {
                            return t.color1(e)
                        }
                    }
                }), i("el-button", {
                    style: t.styleObj[11],
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        click: function (e) {
                            return t.color1(e)
                        }
                    }
                }), i("el-button", {
                    style: t.styleObj[12],
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        click: function (e) {
                            return t.color1(e)
                        }
                    }
                }), i("el-button", {
                    style: t.styleObj[13],
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        click: function (e) {
                            return t.color1(e)
                        }
                    }
                }), i("el-button", {
                    style: t.styleObj[14],
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        click: function (e) {
                            return t.color1(e)
                        }
                    }
                })], 1)])]), i("el-footer", {
                    staticStyle: {
                        height: "30px"
                    }
                }, [t._v("颜色")])], 1)], 1)], 1)], 1)], 1)
            },
            R = [],
            $ = {
                name: "toolBar",
                props: {
                    msg: String
                },
                mounted: function () {
                    this.show()
                },
                data: function () {
                    return {
                        act: "1",
                        styleObj: [{
                            value: "1",
                            backgroundColor: "rgb(0,0,0,1)"
                        }, {
                            value: "2",
                            backgroundColor: "rgb(127,127,127,1)"
                        }, {
                            value: "3",
                            backgroundColor: "rgb(136,0,21,1)"
                        }, {
                            value: "4",
                            backgroundColor: "rgb(200,15,30,1)"
                        }, {
                            value: "5",
                            backgroundColor: "rgb(150,230,127,1)"
                        }, {
                            value: "5",
                            backgroundColor: "rgb(237,28,36,1)"
                        }, {
                            value: "6",
                            backgroundColor: "rgb(255,242,0,1)"
                        }, {
                            value: "7",
                            backgroundColor: "rgb(255,127,39,1)"
                        }, {
                            value: "8",
                            backgroundColor: "rgb(34,177,76,1)"
                        }, {
                            value: "9",
                            backgroundColor: "rgb(0,162,232,1)"
                        }, {
                            value: "10",
                            backgroundColor: "rgb(63,72,204,1)"
                        }, {
                            value: "11",
                            backgroundColor: "rgb(163,73,164,1)"
                        }, {
                            value: "12",
                            backgroundColor: "rgb(255,255,255,1)"
                        }, {
                            value: "13",
                            backgroundColor: "rgb(152,217,234,1)"
                        }, {
                            value: "14",
                            backgroundColor: "rgb(163,73,164,1)"
                        }]
                    }
                },
                methods: {
                    show: function () {},
                    color1: function (t) {
                        m.$emit("myFun", t.currentTarget.style.backgroundColor)
                    },
                    line: function () {
                        m.$emit("type", "line")
                    },
                    beeline: function () {
                        m.$emit("type", "beeline")
                    },
                    radius: function () {
                        m.$emit("type", "radius")
                    },
                    rectangle: function () {
                        m.$emit("type", "rectangle")
                    },
                    star: function () {
                        m.$emit("type", "star")
                    },
                    Ploygon: function () {
                        m.$emit("type", "Ploygon")
                    },
                    radomPloygon: function () {
                        m.$emit("type", "radomPloygon")
                    },
                    clean: function () {
                        m.$emit("clean", !0)
                    },
                    dele: function () {
                        m.$emit("dele", !0)
                    }
                }
            },
            X = $,
            Y = (i("c111"), Object(T["a"])(X, _, R, !1, null, "5306397a", null)),
            I = Y.exports,
            E = {
                name: "app",
                components: {
                    HelloWorld: z,
                    toolBar: I
                },
                data: function () {
                    return {
                        activeIndex: "1",
                        activeIndex2: "1"
                    }
                },
                methods: {}
            },
            U = E,
            B = (i("b0a0"), Object(T["a"])(U, l, n, !1, null, null, null)),
            L = B.exports;
        s["default"].use(h.a), new s["default"]({
            el: "#app",
            render: function (t) {
                return t(L)
            }
        })
    },
    a496: function (t, e, i) {},
    b0a0: function (t, e, i) {
        "use strict";
        var s = i("07bb"),
            a = i.n(s);
        a.a
    },
    c111: function (t, e, i) {
        "use strict";
        var s = i("a496"),
            a = i.n(s);
        a.a
    }
});
//# sourceMappingURL=app.213ab352.js.map