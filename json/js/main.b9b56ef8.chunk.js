(this.webpackJsonpjsoneditoronline = this.webpackJsonpjsoneditoronline || []).push([
    [0], {
        107: function(e, t, n) {
            var a = n(247);
            e.exports = function() {
                var e = a({
                    allErrors: !0,
                    verbose: !0,
                    schemaId: "auto",
                    $data: !0
                });
                return e.addMetaSchema(n(281)), e.addMetaSchema(n(282)), e
            }
        },
        109: function(e, t, n) {
            e.exports = n(283)
        },
        114: function(e, t, n) {},
        116: function(e, t, n) {},
        121: function(e, t, n) {},
        122: function(e, t, n) {},
        123: function(e, t, n) {},
        127: function(e, t, n) {},
        128: function(e, t, n) {},
        205: function(e, t, n) {},
        213: function(e, t, n) {},
        214: function(e, t, n) {},
        215: function(e, t, n) {},
        216: function(e, t, n) {},
        218: function(e, t, n) {},
        231: function(e, t, n) {},
        232: function(e, t, n) {},
        236: function(e, t, n) {},
        283: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                o = n.n(a),
                r = n(10),
                c = n.n(r),
                s = (n(114), n(1)),
                i = n.n(s),
                l = n(9),
                u = n(2),
                d = n(8),
                m = (n(116), n(5)),
                p = n(4),
                h = n(13),
                f = n(14),
                v = n(17),
                b = n(16),
                E = n(18),
                g = (n(121), function(e) {
                    function t(e) {
                        var n;
                        Object(h.a)(this, t), n = Object(v.a)(this, Object(b.a)(t).call(this, e));
                        var a = w(),
                            o = a.width,
                            r = a.height;
                        return n.state = {
                            width: o,
                            height: r,
                            updateSequence: 1
                        }, n
                    }
                    return Object(E.a)(t, e), Object(f.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = {
                                width: this.state.width,
                                height: this.state.height
                            };
                            return o.a.createElement("div", {
                                className: "ads",
                                style: e,
                                dangerouslySetInnerHTML: {
                                    __html: '\n          \x3c!-- Tag ID: jsoneditoronline_300x600_160x600_300x250_ATF --\x3e\n          <div align="center" id="jsoneditoronline_300x600_160x600_300x250_ATF">\n            <script data-cfasync="false" type=\'text/javascript\'>\n              freestar.queue.push(function () { googletag.display(\'jsoneditoronline_300x600_160x600_300x250_ATF\'); });\n            <\/script>\n          </div>\n        '
                                }
                            })
                        }
                    }]), t
                }(a.PureComponent));

            function w() {
                return {
                    width: window.innerWidth > 1500 ? 300 : 160,
                    height: 600
                }
            }
            var y, O, j = n(19),
                N = (y = {}, Object(j.a)(y, "LEFT_PANEL", "Left"), Object(j.a)(y, "RIGHT_PANEL", "Right"), y),
                x = (O = {}, Object(j.a)(O, "LEFT_PANEL", "left"), Object(j.a)(O, "RIGHT_PANEL", "right"), O),
                S = {
                    cloud: "stored in the cloud, sharable",
                    local: "stored locally in your browser",
                    url: "document is loaded via an url",
                    json: "document is stored in the url itself"
                },
                k = (n(122), n(7)),
                C = n.n(k),
                D = function(e) {
                    function t() {
                        var e, n;
                        Object(h.a)(this, t);
                        for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++) o[r] = arguments[r];
                        return (n = Object(v.a)(this, (e = Object(b.a)(t)).call.apply(e, [this].concat(o)))).handleRequestClose = function(e) {
                            e.target === n.refs.background && (e.preventDefault(), e.stopPropagation(), n.props.onRequestClose())
                        }, n.handleKeyDown = function(e) {
                            27 === e.which && (e.preventDefault(), e.stopPropagation(), clearTimeout(T), T = setTimeout((function() {
                                return n.props.onRequestClose()
                            }), 0))
                        }, n.close = function() {
                            n.componentWillUnmount()
                        }, n
                    }
                    return Object(E.a)(t, e), Object(f.a)(t, [{
                        key: "render",
                        value: function() {
                            return o.a.createElement("div", {
                                ref: "background",
                                className: C()("modal-background", this.props.className),
                                onClick: this.handleRequestClose
                            }, o.a.createElement("div", {
                                className: C()("modal-foreground", this.props.className)
                            }, this.props.children))
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            window.addEventListener("keydown", this.handleKeyDown), document.activeElement && "function" === typeof document.activeElement.blur && document.activeElement.blur()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("keydown", this.handleKeyDown)
                        }
                    }]), t
                }(o.a.PureComponent),
                T = null,
                L = (n(123),
                n(98));

            function I(e, t) {
                return o.a.createElement("a", {
                    href: e,
                    target: "_blank",
                    rel: "noopener noreferrer"
                }, t || e)
            }


            function P(e) {
                var t = e.onClose;
                return o.a.createElement(D, {
                    onRequestClose: t,
                    className: "info"
                },
                o.a.createElement("div", {
                    className: "modal modal-info"
                },
                o.a.createElement("h1", null, "苏三博客"),
                ))
            }

            function A() {
                var e = document.createElement("div");
                return document.body.appendChild(e), c.a.render(o.a.createElement(P, {
                    onClose: function() {
                        document.body.removeChild(e)
                    }
                }), e)
            }
            var M = n(27),
                F = n.n(M);

            function J() {
                var e = Object(a.useState)(w().width),
                    t = Object(d.a)(e, 1)[0];
                return o.a.createElement("div", {
                    className: "menu"
                },
                o.a.createElement("h2", {
                    className: "name",
                }, "JSON编辑器"),
                o.a.createElement("div", {
                    className: "buttons",
                    style: {
                        marginRight: 15
                    }
                },
                o.a.createElement("button", {
                    className: "info",
                    onClick: A
                }, 
                o.a.createElement(p.a, {
                    icon: m.r
                }), " 关于")))
            }
            n(127);
            var R = n(28),
                U = (n(128), n(59)),
                _ = n.n(U),
                K = n(60),
                q = n.n(K),
                W = (n(205), n(99)),
                B = n.n(W),
                V = n(15),
                H = n.n(V),
                z = n(108),
                X = (n(213), function(e) {
                    function t(e) {
                        var n;
                        return Object(h.a)(this, t), (n = Object(v.a)(this, Object(b.a)(t).call(this, e))).close = function(e) {
                            n.setState({
                                notifications: n.state.notifications.filter((function(t) {
                                    return t !== e
                                }))
                            })
                        }, n.notify = function(e) {
                            n.setState({
                                notifications: [].concat(Object(z.a)(n.state.notifications), [e])
                            });
                            var t = function() {
                                return n.close(e)
                            };
                            return e.timeout && setTimeout(t, e.timeout), {
                                close: t
                            }
                        }, n.state = {
                            notifications: [],
                            adWidth: w().width
                        }, n
                    }
                    return Object(E.a)(t, e), Object(f.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.state.notifications.map((function(t, n) {
                                    var a;
                                    if (t.closable) {
                                        a = o.a.createElement("div", {
                                            className: "close",
                                            onClick: function() {
                                                return e.close(t)
                                            }
                                        }, o.a.createElement(p.a, {
                                            icon: m.w
                                        }))
                                    }
                                    var r = C()("notification", t.className, {
                                        closable: t.closable
                                    });
                                    return o.a.createElement("div", {
                                        className: r,
                                        key: n
                                    }, t.text, a)
                                }));
                            return o.a.createElement("div", {
                                className: C()("notification-list", "size-".concat(this.state.adWidth))
                            }, o.a.createElement("div", {
                                className: "notification-list-items"
                            }, t))
                        }
                    }]), t
                }(o.a.PureComponent)),
                G = document.createElement("div");
            document.body.appendChild(G);
            var Y = c.a.render(o.a.createElement(X, {
                container: G
            }), G);

            function $(e) {
                return Y.notify(e)
            }

            function Q(e) {
                return $({
                    text: e
                })
            }

            function Z(e) {
                return $({
                    text: e,
                    timeout: 1e3
                })
            }

            function ee(e) {
                return $({
                    text: e && "string" === typeof e.message ? e.toString() : e,
                    className: "error",
                    timeout: 6e4,
                    closable: !0
                })
            }

            function te(e, t) {
                return e.toLowerCase().endsWith(t.toLowerCase()) ? e.substring(0, e.length - t.length) : e
            }

            function ne(e) {
                if (e < 900) return e.toFixed() + " B";
                var t = e / 1e3;
                if (t < 900) return t.toFixed(1) + " KB";
                var n = t / 1e3;
                if (n < 900) return n.toFixed(1) + " MB";
                var a = n / 1e3;
                return a < 900 ? a.toFixed(1) + " GB" : (a / 1e3).toFixed(1) + " TB"
            }
            var ae = function(e) {
                function t() {
                    var e, n;
                    Object(h.a)(this, t);
                    for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++) o[r] = arguments[r];
                    return (n = Object(v.a)(this, (e = Object(b.a)(t)).call.apply(e, [this].concat(o)))).handleOk = function(e) {
                        e.preventDefault(), n.close(), n.props.onOk && n.props.onOk()
                    }, n.handleCancel = function() {
                        n.close(), n.props.onCancel && n.props.onCancel()
                    }, n.close = function() {
                        n.refs.modal.close(), n.props.onClose()
                    }, n
                }
                return Object(E.a)(t, e), Object(f.a)(t, [{
                    key: "render",
                    value: function() {
                        return o.a.createElement(D, {
                            ref: "modal",
                            onRequestClose: this.handleCancel
                        }, o.a.createElement("div", {
                            className: "modal modal-confirm"
                        }, o.a.createElement("h1", null, this.props.title), o.a.createElement("div", {
                            className: "modal-text"
                        }, this.props.text), o.a.createElement("div", {
                            className: "modal-action-menu"
                        }, o.a.createElement("button", {
                            ref: "cancel",
                            className: C()("modal-button", this.props.classCancel),
                            onClick: this.handleCancel
                        }, this.props.textCancel || "Cancel"), o.a.createElement("button", {
                            ref: "ok",
                            onClick: this.handleOk,
                            className: C()("modal-button", "primary", this.props.classOk)
                        }, this.props.textOk || "Ok"))))
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        setTimeout((function() {
                            return e.refs.ok.focus()
                        }))
                    }
                }]), t
            }(o.a.PureComponent);

            function oe(e) {
                var t = document.createElement("div");
                return document.body.appendChild(t), c.a.render(o.a.createElement(ae, Object.assign({}, e, {
                    onClose: function() {
                        document.body.removeChild(t)
                    }
                })), t)
            }

            function re(e) {
                return "json" in e ? e.json : JSON.parse(e.text)
            }

            function ce(e) {
                return "text" in e ? e.text : JSON.stringify(e.json)
            }

            function se(e, t) {
                try {
                    return JSON.stringify(JSON.parse(e), null, t)
                } catch (n) {
                    return e
                }
            }

            function ie(e) {
                return !(!e || !e.text) && e.text.length > 1e7
            }
            var le = H()("jsoneditoronline:JSONEditorComponent"),
                ue = function(e) {
                    function t() {
                        var e, n;
                        Object(h.a)(this, t);
                        for (var a = arguments.length, r = new Array(a), c = 0; c < a; c++) r[c] = arguments[c];
                        return (n = Object(v.a)(this, (e = Object(b.a)(t)).call.apply(e, [this].concat(r)))).setSchema = function() {
                            var e = !_()(n.props.schema, n.schema),
                                t = !_()(n.props.schemaRefs, n.schemaRefs);
                            if (e || t) try {
                                n.schema = q()(n.props.schema), n.schemaRefs = q()(n.props.schemaRefs), n.jsoneditor.setSchema(n.props.schema, n.props.schemaRefs)
                            } catch (a) {
                                console.error(a), ee(a)
                            }
                        }, n.createModeToggle = function() {
                            var e = n.container.querySelector(".jsoneditor-menu");
                            if (e) {
                                e.querySelectorAll(".mode-toggle").forEach((function(t) {
                                    t.parentNode === e && e.removeChild(t)
                                }));
                                var t = e.firstChild,
                                    a = n.jsoneditor.getMode(),
                                    r = n.previewMode ? ["code", "tree", "preview"] : ["code", "tree"];
                                r.forEach((function(c, s) {
                                    var i = 0 === s,
                                        l = s === r.length - 1,
                                        u = document.createElement("button");
                                    u.title = "Switch to ".concat(c, " mode"), u.className = C()("mode-toggle", c, {
                                        selected: a === c,
                                        first: i,
                                        last: l,
                                        "border-right": l || 3 === r.length && "preview" === a && 0 === s || 3 === r.length && "code" === a && 1 === s
                                    }), u.append(document.createTextNode(c)), u.onclick = function() {
                                        "preview" !== c && ie(n.props.content) ? oe({
                                            title: "Warning!",
                                            text: o.a.createElement(o.a.Fragment, null, o.a.createElement("p", null, "The current document has a size of ", ne(n.props.content.text.length), ", which exceeds the recommended maximum of ", ne(1e7), ". Opening a document this large in ", o.a.createElement("b", null, c), " mode can slow down or crash your browser."), o.a.createElement("p", null, "Are you sure you want to switch to ", o.a.createElement("b", null, c), " mode?")),
                                            textOk: "Yes, I know what I'm doing",
                                            classOk: "danger",
                                            onOk: function() {
                                                return n.switchMode(c)
                                            }
                                        }) : n.switchMode(c)
                                    }, e.insertBefore(u, t)
                                }))
                            }
                        }, n.switchMode = function(e) {
                            try {
                                n.jsoneditor.setMode(e), n.props.onChangeMode(e)
                            } catch (t) {
                                ee(o.a.createElement("div", {
                                    className: "parse-error"
                                }, 'Failed to switch to "', e, '" mode because of Invalid JSON:', o.a.createElement("pre", null, o.a.createElement("code", null, t.message))))
                            }
                        }, n
                    }
                    return Object(E.a)(t, e), Object(f.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            le("componentDidMount", {
                                props: this.props
                            }), this.previewMode = !1;
                            var t = this.props.mode;
                            "preview" !== t || this.props.content && ie(this.props.content) || (t = "tree", this.props.onChangeMode(t));
                            var n = {
                                mode: t,
                                ajv: this.props.ajv,
                                indentation: this.props.indentation,
                                mainMenuBar: !1 !== this.props.mainMenuBar,
                                navigationBar: !1 !== this.props.navigationBar,
                                statusBar: !1 !== this.props.statusBar,
                                popupAnchor: document.body,
                                onChange: function() {
                                    e.props.onChangeContent && ("tree" === e.props.mode || "form" === e.props.mode || "view" === e.props.mode ? e.props.onChangeContent({
                                        json: e.jsoneditor.get()
                                    }) : e.props.onChangeContent({
                                        text: e.jsoneditor.getText()
                                    }))
                                },
                                onClassName: this.props.onClassName
                            };
                            if (this.jsoneditor = new B.a(this.container, n), this.props.id && (window.jsoneditors || (window.jsoneditors = {}), window.jsoneditors[this.props.id] = this.jsoneditor), this.props.content && (this.checkSwitchToPreviewMode(this.props.content), "json" in this.props.content && this.jsoneditor.set(this.props.content.json), "text" in this.props.content)) try {
                                this.jsoneditor.setText(this.props.content.text)
                            } catch (a) {
                                this.jsoneditor.setMode("code"), this.jsoneditor.setText(this.props.content.text), this.props.onChangeMode("code"), $({
                                    text: 'Switched to "code" mode because of invalid JSON.',
                                    timeout: 5e3
                                })
                            }
                            this.createModeToggle(), this.setSchema()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            if (this.props.content && this.props.content !== e.content && (this.checkSwitchToPreviewMode(this.props.content), "json" in this.props.content && this.jsoneditor.update(this.props.content.json), "text" in this.props.content)) try {
                                this.jsoneditor.updateText(this.props.content.text)
                            } catch (t) {
                                this.jsoneditor.setMode("code"), this.jsoneditor.updateText(this.props.content.text), this.props.onChangeMode("code"), $({
                                    text: 'Switched to "code" mode because of invalid JSON.',
                                    timeout: 5e3
                                })
                            }
                            "number" === typeof this.props.indentation && (this.props.indentation !== e.indentation && (this.jsoneditor.options.indentation = this.props.indentation, this.jsoneditor.indentation = this.props.indentation, this.jsoneditor.aceEditor && this.jsoneditor.aceEditor.getSession().setTabSize(this.props.indentation)));
                            "mode" in this.props && this.props.mode !== e.mode && (this.jsoneditor.setMode(this.props.mode), this.createModeToggle()), this.jsoneditor.options.onClassName !== this.props.onClassName && (le("change onClassName, enabled=".concat(!!this.props.onClassName)), this.props.onClassName ? (this.jsoneditor.options.onClassName = this.props.onClassName, this.jsoneditor.node && this.jsoneditor.node.recursivelyUpdateCssClassesOnNodes()) : (this.jsoneditor.options.onClassName = function() {}, this.jsoneditor.node && this.jsoneditor.node.recursivelyUpdateCssClassesOnNodes(), this.jsoneditor.options.onClassName = void 0)), this.setSchema()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            le("componentWillUnmount"), this.jsoneditor && (this.jsoneditor.destroy(), this.jsoneditor = null, this.schema = null, this.schemaRefs = null)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return o.a.createElement("div", {
                                className: "jsoneditor-react-container",
                                ref: function(t) {
                                    e.container = t
                                }
                            })
                        }
                    }, {
                        key: "checkSwitchToPreviewMode",
                        value: function(e) {
                            !this.previewMode && ie(e) && (this.previewMode = !0, this.switchMode("preview"), le("Large document, switching to preview mode"), $({
                                text: 'Switched to "preview" mode' + " because the document's size of ".concat(ne(e.text.length)) + " is exceeding ".concat(ne(1e7), "."),
                                timeout: 5e3
                            }), this.createModeToggle()), le({
                                previewMode: this.previewMode
                            })
                        }
                    }]), t
                }(a.PureComponent),
                de = function(e) {
                    function t(e) {
                        var n;
                        return Object(h.a)(this, t), (n = Object(v.a)(this, Object(b.a)(t).call(this, e))).handleOk = function(e) {
                            if ((e.preventDefault(), n.props.validate) && null != n.props.validate(n.state.value)) return n.setState({
                                showValidationResult: !0
                            }), void n.refs.value.select();
                            n.close(), n.props.onOk && n.props.onOk(n.state.value)
                        }, n.handleCancel = function() {
                            n.close(), n.props.onCancel && n.props.onCancel()
                        }, n.handleChange = function() {
                            n.setState({
                                value: n.refs.value.value
                            })
                        }, n.close = function() {
                            n.refs.modal.close(), n.props.onClose()
                        }, n.state = {
                            value: e.value,
                            showValidationResult: !1
                        }, n
                    }
                    return Object(E.a)(t, e), Object(f.a)(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props.validate && this.state.showValidationResult ? this.props.validate(this.state.value) : null;
                            return o.a.createElement(D, {
                                ref: "modal",
                                className: this.props.className,
                                onRequestClose: this.handleCancel
                            }, o.a.createElement("div", {
                                className: "modal modal-prompt"
                            }, o.a.createElement("h1", null, this.props.title), o.a.createElement("div", {
                                className: "modal-text"
                            }, this.props.text), o.a.createElement("form", {
                                onSubmit: this.handleOk
                            }, o.a.createElement("input", {
                                ref: "value",
                                type: "text",
                                className: C()("regular", {
                                    error: e
                                }),
                                value: this.state.value,
                                onChange: this.handleChange
                            })), e && o.a.createElement("div", {
                                className: "error-message"
                            }, e), o.a.createElement("div", {
                                className: "modal-action-menu"
                            }, o.a.createElement("button", {
                                ref: "cancel",
                                className: C()("modal-button", this.props.classCancel),
                                onClick: this.handleCancel
                            }, this.props.textCancel || "Cancel"), o.a.createElement("button", {
                                ref: "ok",
                                onClick: this.handleOk,
                                className: C()("modal-button", "primary", this.props.classOk)
                            }, this.props.textOk || "Ok"))))
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            setTimeout((function() {
                                return e.refs.value.select()
                            }), 0)
                        }
                    }]), t
                }(o.a.PureComponent);

            function me(e) {
                var t = document.createElement("div");
                return document.body.appendChild(t), c.a.render(o.a.createElement(de, Object.assign({}, e, {
                    onClose: function() {
                        document.body.removeChild(t)
                    }
                })), t)
            }

            function pe(e, t) {
                try {
                    var n = window.localStorage[e];
                    return void 0 !== n ? JSON.parse(n) : t
                } catch (a) {
                    return console.error("error in function loadProperty  " + a.message), t
                }
            }

            function he(e, t) {
                var n = JSON.stringify(t),
                    a = n.length;
                try {
                    return a <= 1e6 ? (window.localStorage[e] = n, {
                        success: !0,
                        error: null,
                        size: a,
                        maxSize: 1e6
                    }) : {
                        success: !1,
                        error: "Error: Value too large to store in local storage",
                        size: a,
                        maxSize: 1e6
                    }
                } catch (o) {
                    return console.error("error in function saveProperty  " + o.message), {
                        success: !1,
                        error: o.toString(),
                        size: a,
                        maxSize: 1e6
                    }
                }
            }
            var fe = n(286),
                ve = n(285);

            function be() {
                return (new Date).toISOString()
            }

            function Ee(e) {
                return Object(fe.a)(Object(ve.a)(e), "yyyy-MM-dd HH:mm")
            }

            function ge(e, t) {
                var n, a = ye().filter((function(n) {
                    return n.id !== t._id || n.source !== e
                }));
                a.unshift({
                    id: t._id,
                    source: e,
                    name: t.name || "Unnamed document (".concat(t._id, ")"),
                    updated: t.updated,
                    accessed: be()
                }), he("recentFiles", (n = 1e3, a.slice(0, n)))
            }

            function we(e, t) {
                he("recentFiles", ye().filter((function(e) {
                    return e.id !== t
                })))
            }

            function ye() {
                var e = pe("recentFiles");
                if (e) return e;
                var t = function() {
                    var e = pe("files");
                    if (!e) return;
                    return Object.values(e).map((function(e) {
                        return {
                            id: e._id,
                            source: "cloud",
                            name: e.name,
                            updated: e.updated,
                            accessed: e.updated
                        }
                    }))
                }();
                return t || []
            }
            var Oe = n(12);
            n(214);

            function je(e) {
                var t = e.onOpen,
                    n = e.onClose,
                    r = e.onDelete,
                    c = Object(a.useRef)(null),
                    s = Object(a.useRef)(null),
                    h = Object(a.useState)(""),
                    f = Object(d.a)(h, 2),
                    v = f[0],
                    b = f[1],
                    E = Object(a.useState)(ye()),
                    g = Object(d.a)(E, 2),
                    w = g[0],
                    y = g[1],
                    O = Object(a.useState)({}),
                    N = Object(d.a)(O, 2),
                    x = N[0],
                    S = N[1],
                    k = !Object(Oe.isEmpty)(v.trim()),
                    T = k ? w.filter((function(e) {
                        return e.name.toLowerCase().includes(v.toLowerCase())
                    })) : w;

                function L() {
                    c.current.close(), n()
                }

                function I() {
                    return (I = Object(u.a)(i.a.mark((function e(t, n, a) {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    oe({
                                        title: "Delete document",
                                        text: 'Are you sure you want to delete document "'.concat(a || n, '"?'),
                                        textOk: "Delete",
                                        classOk: "danger",
                                        onOk: function() {
                                            var e = Object(u.a)(i.a.mark((function e() {
                                                return i.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return S(Object(l.a)({}, x, Object(j.a)({}, n, !0))), e.next = 3, r(t, n);
                                                        case 3:
                                                            y(ye()), S(Object(l.a)({}, x, Object(j.a)({}, n, !1)));
                                                        case 5:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function() {
                                                return e.apply(this, arguments)
                                            }
                                        }()
                                    });
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function P() {
                    L()
                }
                return (Object(a.useEffect)((function() {
                    s.current && s.current.focus()
                }), [s]), o.a.createElement(D, {
                    ref: c,
                    onRequestClose: P
                }, o.a.createElement("div", {
                    className: "modal modal-open"
                }, o.a.createElement("h1", null, "Open a recent file"), o.a.createElement("div", {
                    className: "search-box"
                }, o.a.createElement("span", {
                    className: "label"
                }, "Search:"), o.a.createElement("input", {
                    ref: s,
                    className: "search-text",
                    placeholder: "Enter a document name...",
                    value: v,
                    onChange: function(e) {
                        return b(e.target.value)
                    }
                })), o.a.createElement("div", {
                    className: "info"
                }, k ? "Showing ".concat(T.length, " out of ").concat(w.length, " documents") : "Showing ".concat(w.length, " documents")), o.a.createElement("div", {
                    className: "recent-files"
                }, Object(Oe.isEmpty)(T) ? o.a.createElement("div", {
                    className: "no-files"
                }, "(no recent files)") : T.map((function(e) {
                    var n = x[e.id] || !1,
                        a = C()({
                            "recent-file": !0,
                            deleting: n
                        });
                    return o.a.createElement("div", {
                        key: e.id,
                        className: a
                    }, o.a.createElement("button", {
                        className: "modal-button open",
                        title: "Click to open this document",
                        disabled: n,
                        onClick: function() {
                            return n = e.source, a = e.id, L(), void t(n, a);
                            var n, a
                        }
                    }, "cloud" === e.source &&
                    o.a.createElement("span", {
                        title: "This document is stored in the cloud"
                    },
                    o.a.createElement(p.a, {
                        icon: m.i
                    }), " "), e.name, n ? " (deleting...)" : null,
                    o.a.createElement("div", {
                        className: "updated"
                    }, "Last modified: ", e.updated ? Ee(e.updated) : "(unknown)")),
                    o.a.createElement("button", {
                        className: "modal-button remove",
                        disabled: n,
                        title: "Click to delete this document",
                        onClick: function() {
                            return function(e, t, n) {
                                return I.apply(this, arguments)
                            }(e.source, e.id, e.name)
                        }
                    },
                    o.a.createElement(p.a, {
                        icon: m.w
                    })))
                }))),
                o.a.createElement("div", {
                    className: "modal-action-menu"
                }, o.a.createElement("button", {
                    className: "modal-button",
                    onClick: P
                }, "Cancel")))))
            }

            function Ne(e) {
                var t = document.createElement("div");
                return document.body.appendChild(t), c.a.render(o.a.createElement(je, {
                    onOpen: e.onOpen,
                    onDelete: e.onDelete,
                    onClose: function() {
                        document.body.removeChild(t)
                    }
                }), t)
            }
            var xe = n(100);
            n(215), n(216);

            function Se(e) {
                var t = e.options,
                    n = e.value,
                    a = e.onChange,
                    r = e.className;
                return o.a.createElement("div", {
                    className: C()("toggle", r)
                }, t.map((function(e) {
                    var t = C()({
                        className: e.className,
                        selected: e.value === n
                    });
                    return o.a.createElement("button", {
                        key: String(e.value),
                        className: t,
                        onClick: function() {
                            return a(e.value)
                        }
                    }, e.text)
                })))
            }
            var ke = n(23),
                Ce = "https://jsoneditoronline.herokuapp.com/v1/docs";

            function De(e) {
                return Te.apply(this, arguments)
            }

            function Te() {
                return (Te = Object(u.a)(i.a.mark((function e(t) {
                    var n, a;
                    return i.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, window.fetch("".concat(Ce, "/").concat(t), {
                                    method: "GET"
                                });
                            case 2:
                                if (!((n = e.sent).status < 200 || n.status >= 300)) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 6, n.text();
                            case 6:
                                throw a = e.sent, Error('Failed to load document with id "'.concat(t, '". ').concat(a));
                            case 8:
                                return e.t0 = Ue, e.next = 11, n.json();
                            case 11:
                                return e.t1 = e.sent, e.abrupt("return", (0, e.t0)(e.t1));
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Le(e) {
                return Ie.apply(this, arguments)
            }

            function Ie() {
                return (Ie = Object(u.a)(i.a.mark((function e(t) {
                    var n, a;
                    return i.a.wrap((function(e) {
                        if (t == null) { return e.stop(); }
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, window.fetch(t, {
                                    method: "GET"
                                });
                            case 2:
                                if (!((n = e.sent).status < 200 || n.status >= 300)) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 6, n.text();
                            case 6:
                                throw a = e.sent, Error('Failed to load url "'.concat(t, '". ').concat(a));
                            case 8:
                                return e.abrupt("return", n.json());
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Pe(e) {
                return Ae.apply(this, arguments)
            }

            function Ae() {
                return (Ae = Object(u.a)(i.a.mark((function e(t) {
                    var n, a, o;
                    return i.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = t._id, e.next = 3, window.fetch("".concat(Ce, "/").concat(n), {
                                    method: "PUT",
                                    body: JSON.stringify(_e(t))
                                });
                            case 3:
                                if (!((a = e.sent).status < 200 || a.status >= 300)) {
                                    e.next = 9;
                                    break
                                }
                                return e.next = 7, a.text();
                            case 7:
                                throw o = e.sent, Error('Failed to save document with id "'.concat(n, '". ').concat(o));
                            case 9:
                                return e.abrupt("return", {
                                    id: n
                                });
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Me(e) {
                return Fe.apply(this, arguments)
            }

            function Fe() {
                return (Fe = Object(u.a)(i.a.mark((function e(t) {
                    var n, a;
                    return i.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, window.fetch("".concat(Ce), {
                                    method: "POST",
                                    body: JSON.stringify(_e(t))
                                });
                            case 2:
                                if (!((n = e.sent).status < 200 || n.status >= 300)) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 6, n.text();
                            case 6:
                                throw a = e.sent, Error("Failed to save document. ".concat(a));
                            case 8:
                                return e.abrupt("return", n.json());
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Je(e) {
                return Re.apply(this, arguments)
            }

            function Re() {
                return (Re = Object(u.a)(i.a.mark((function e(t) {
                    var n, a;
                    return i.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, window.fetch("".concat(Ce, "/").concat(t), {
                                    method: "DELETE"
                                });
                            case 2:
                                if (!((n = e.sent).status < 200 || n.status >= 300)) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 6, n.text();
                            case 6:
                                throw a = e.sent, Error("Failed to delete document. ".concat(a));
                            case 8:
                                return e.abrupt("return", n.json());
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Ue(e) {
                var t = Object(l.a)({}, e);
                return "string" === typeof t.data && ("undefined" === typeof t.content && (t.content = {
                    text: t.data
                }), delete t.data), t
            }

            function _e(e) {
                var t = Object(l.a)({}, e);
                if ("object" === typeof t.content) {
                    if ("undefined" === typeof t.data) {
                        var n = t.content;
                        t.data = n.text ? n.text : JSON.stringify(n.json)
                    }
                    delete t.content
                }
                return t
            }

            function Ke(e) {
                var t = e.url,
                    n = e.indentation,
                    a = Object(ke.useAsync)(Le, [t]),
                    r = a.loading,
                    c = a.result,
                    s = a.error;
                return o.a.createElement("div", null, s ? o.a.createElement("div", {
                    className: "error"
                }, s.toString()) : r ? o.a.createElement("div", {
                    className: "loading"
                }, "Loading...") : o.a.createElement(ue, {
                    mode: "view",
                    indentation: n,
                    mainMenuBar: !1,
                    navigationBar: !1,
                    content: {
                        json: c
                    }
                }))
            }
            var qe = n(101),
                We = n.n(qe);

            function Be(e) {
                var t = e.panelId,
                    n = e.allPanels,
                    a = e.indentation,
                    r = n.find((function(e) {
                        return e.panelId === t
                    }));
                try {
                    var c = re(r.document.content);
                    return r ? o.a.createElement(ue, {
                        mode: "view",
                        indentation: a,
                        mainMenuBar: !1,
                        navigationBar: !1,
                        content: {
                            json: c
                        }
                    }) : o.a.createElement("div", {
                        className: "error"
                    }, "Error: Cannot show preview. Panel with id ", t, " not found.")
                } catch (s) {
                    return o.a.createElement("div", {
                        className: "error"
                    }, "Error: Cannot show preview. The ", x[t], " panel contains a JSON parse error.")
                }
            }
            n(218);
            var Ve = n(29),
                He = "Are you running in private mode or is the browser history disabled?";

            function ze(e, t) {
                return Xe.apply(this, arguments)
            }

            function Xe() {
                return (Xe = Object(u.a)(i.a.mark((function e(t, n) {
                    return i.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, Object(Ve.d)(t, n);
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 6:
                                throw e.prev = 6, e.t0 = e.catch(0), console.error(e.t0), tt(e.t0) ? new Error("Failed to save document in local database. " + He) : e.t0;
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 6]
                    ])
                })))).apply(this, arguments)
            }

            function Ge(e) {
                return Ye.apply(this, arguments)
            }

            function Ye() {
                return (Ye = Object(u.a)(i.a.mark((function e(t) {
                    return i.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, Object(Ve.b)(t);
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 6:
                                throw e.prev = 6, e.t0 = e.catch(0), console.error(e.t0), tt(e.t0) ? new Error("Failed to load document from local database. " + He) : e.t0;
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 6]
                    ])
                })))).apply(this, arguments)
            }

            function $e(e) {
                return Qe.apply(this, arguments)
            }

            function Qe() {
                return (Qe = Object(u.a)(i.a.mark((function e(t) {
                    return i.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return console.log("deleteLocalDocument", t), e.prev = 1, e.next = 4, Object(Ve.a)(t);
                            case 4:
                                return e.abrupt("return", e.sent);
                            case 7:
                                throw e.prev = 7, e.t0 = e.catch(1), console.error(e.t0), tt(e.t0) ? new Error("Failed to delete document from local database. " + He) : e.t0;
                            case 11:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 7]
                    ])
                })))).apply(this, arguments)
            }

            function Ze() {
                return et.apply(this, arguments)
            }

            function et() {
                return (et = Object(u.a)(i.a.mark((function e() {
                    var t, n, a, o, r, c, s, l, u, d, m, p, h;
                    return i.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (e.prev = 0, void 0 !== (t = pe("newDocumentSequenceNumber"))) {
                                    e.next = 37;
                                    break
                                }
                                return t = 0, e.next = 6, Object(Ve.c)();
                            case 6:
                                n = e.sent, a = /^New document (\d+)$/, o = !0, r = !1, c = void 0, e.prev = 11, s = n[Symbol.iterator]();
                            case 13:
                                if (o = (l = s.next()).done) {
                                    e.next = 23;
                                    break
                                }
                                return u = l.value, e.next = 17, Object(Ve.b)(u);
                            case 17:
                                d = e.sent, (m = a.exec(d.name)) && (console.log("match ", m), (p = parseInt(m[1])) > t && (t = p));
                            case 20:
                                o = !0, e.next = 13;
                                break;
                            case 23:
                                e.next = 29;
                                break;
                            case 25:
                                e.prev = 25, e.t0 = e.catch(11), r = !0, c = e.t0;
                            case 29:
                                e.prev = 29, e.prev = 30, o || null == s.return || s.return();
                            case 32:
                                if (e.prev = 32, !r) {
                                    e.next = 35;
                                    break
                                }
                                throw c;
                            case 35:
                                return e.finish(32);
                            case 36:
                                return e.finish(29);
                            case 37:
                                return he("newDocumentSequenceNumber", h = t + 1), e.abrupt("return", "New document ".concat(h));
                            case 42:
                                throw e.prev = 42, e.t1 = e.catch(0), console.error(e.t1), tt(e.t1) ? new Error("Failed to save document in local database. " + He) : e.t1;
                            case 46:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 42],
                        [11, 25, 29, 37],
                        [30, , 32, 36]
                    ])
                })))).apply(this, arguments)
            }

            function tt(e) {
                return e && "InvalidStateError" === e.name && "A mutation operation was attempted on a database that did not allow mutations." === e.message
            }

            function nt(e) {
                var t = e.compoundKey,
                    n = e.indentation;
                return o.a.createElement("div", {
                    className: "cloud-document-schema-preview"
                }, "Preview:", o.a.createElement("div", {
                    className: "preview"
                }, t ? o.a.createElement(at, {
                    compoundKey: t,
                    indentation: n
                }) : o.a.createElement("div", {
                    className: "info"
                }, "(Select a document)")))
            }

            function at(e) {
                var t = e.compoundKey,
                    n = e.indentation,
                    a = t.split("."),
                    r = Object(d.a)(a, 2),
                    c = r[0],
                    s = r[1],
                    i = "cloud" === c ? De : Ge,
                    l = Object(ke.useAsync)(i, [s]),
                    u = l.loading,
                    m = l.result,
                    p = l.error;
                if (p) return o.a.createElement("div", {
                    className: "error"
                }, p.toString());
                if (u) return o.a.createElement("div", {
                    className: "loading"
                }, "Loading...");
                try {
                    var h = re(m.content);
                    return o.a.createElement(ue, {
                        mode: "view",
                        indentation: n,
                        mainMenuBar: !1,
                        navigationBar: !1,
                        content: {
                            json: h
                        }
                    })
                } catch (f) {
                    return o.a.createElement("div", {
                        className: "error"
                    }, "Error: Cannot show preview. The selected document contains a JSON parse error.")
                }
            }

            function ot(e) {
                var t = e.initialSchema,
                    n = e.indentation,
                    r = e.panelId,
                    c = e.allPanels,
                    s = e.onOk,
                    i = e.onClose,
                    u = Object(a.useRef)(null),
                    h = Object(a.useState)("code"),
                    f = Object(d.a)(h, 2),
                    v = f[0],
                    b = f[1],
                    E = Object(a.useState)(t || {
                        type: "NONE"
                    }),
                    g = Object(d.a)(E, 2),
                    w = g[0],
                    y = g[1];

                function O() {
                    u.current.close(), i()
                }

                function j() {
                    O()
                }
                var S = ye(),
                    k = c.find((function(e) {
                        return e.panelId !== r
                    }));
                return o.a.createElement(D, {
                    ref: u,
                    onRequestClose: j,
                    className: "schema"
                }, o.a.createElement("div", {
                    className: "modal modal-schema"
                }, o.a.createElement("h1", null, "JSON schema"),
                o.a.createElement("p", null, "Configure a JSON schema for the ", x[r], " panel:"),
                o.a.createElement("div", {
                    className: "contents"
                }, o.a.createElement(Se, {
                    options: [{
                        value: "NONE",
                        text: "None"
                    }, {
                        value: "PANEL",
                        text: "Panel"
                    }, {
                        value: "DOCUMENT",
                        text: "Document"
                    }, {
                        value: "TEXT",
                        text: "Text"
                    }, {
                        value: "URL",
                        text: "Url"
                    }],
                    value: w.type,
                    onChange: function(e) {
                        var t = c.find((function(e) {
                            return e.panelId !== r
                        }));
                        y(Object(l.a)({}, w, {
                            type: e,
                            panelId: void 0 === w.panelId && t ? t.panelId : w.panelId
                        }))
                    }
                }), "NONE" === w.type &&
                o.a.createElement("div", {
                    className: "config"
                }, "No JSON Schema."), "PANEL" === w.type && o.a.createElement("div", {
                    className: "config"
                }, w.panelId ? w.panelId !== r ? o.a.createElement(o.a.Fragment, null, o.a.createElement("p", null, N[w.panelId], " panel contents will be used as JSON Schema."), o.a.createElement("p", null, "Preview:"), o.a.createElement("div", {
                    className: "schema-panel-preview"
                }, o.a.createElement(Be, {
                    panelId: w.panelId,
                    allPanels: c,
                    indentation: n
                }))) : o.a.createElement("div", {
                    className: "error"
                }, o.a.createElement("p", null, "Error: Currently the ", x[r], " panel itself is selected as JSON Schema. This is not possible."), o.a.createElement("p", null, o.a.createElement("button", {
                    className: "fix-panel",
                    onClick: function() {
                        return function(e) {
                            y(Object(l.a)({}, w, {
                                panelId: e
                            }))
                        }(k.panelId)
                    }
                }, "Select ", x[k.panelId], " panel"))) : null), "DOCUMENT" === w.type && o.a.createElement("div", {
                    className: "config cloud-document"
                }, o.a.createElement("div", {
                    className: "list-column"
                }, "Select a document as JSON Schema:", o.a.createElement("div", {
                    className: "recent-files"
                }, Object(Oe.isEmpty)(S) ? o.a.createElement("div", {
                    className: "no-files"
                }, "(no recent files)") : S.map((function(e) {
                    var t = "".concat(e.source, ".").concat(e.id),
                        n = C()("modal-button", "recent-file", {
                            selected: t === w.compoundKey
                        });
                    return o.a.createElement("button", {
                        key: e.id,
                        className: n,
                        title: "Select this file as JSON Schema",
                        onClick: function() {
                            return y(Object(l.a)({}, w, {
                                compoundKey: "".concat(e.source, ".").concat(e.id)
                            }))
                        }
                    }, "cloud" === e.source && o.a.createElement("span", {
                        title: "This document is stored in the cloud"
                    }, o.a.createElement(p.a, {
                        icon: m.i
                    }), " "), e.name, o.a.createElement("div", {
                        className: "updated"
                    }, "Last modified: ", e.updated ? Ee(e.updated) : "(unknown)"))
                })))), o.a.createElement("div", {
                    className: "preview-column"
                }, o.a.createElement(nt, {
                    compoundKey: w.compoundKey
                }))), "TEXT" === w.type && o.a.createElement("div", {
                    className: "config config-jsoneditor"
                }, o.a.createElement("p", null, "Enter the contents of the JSON Schema:"), o.a.createElement(ue, {
                    mode: v,
                    onChangeMode: b,
                    indentation: n,
                    content: w.content ? w.content : {
                        json: {}
                    },
                    onChangeContent: function(e) {
                        y(Object(l.a)({}, w, {
                            content: e
                        }))
                    }
                })), "URL" === w.type && o.a.createElement("div", {
                    className: "config"
                }, o.a.createElement("p", null, "Specify the url of the JSON Schema."), o.a.createElement("p", null, "The url must be public: it must not require authentication and needs to have CORS enabled."), o.a.createElement("input", {
                    className: "regular schema-url",
                    type: "text",
                    value: w.url || "",
                    onChange: function(e) {
                        return y(Object(l.a)({}, w, {
                            url: e.target.value
                        }))
                    }
                }), o.a.createElement("div", null, o.a.createElement("p", null, "Preview:"), o.a.createElement("div", {
                    className: "schema-url-preview"
                }, w.url && We()(w.url) ? o.a.createElement(Ke, {
                    url: w.url,
                    indentation: n
                }) : o.a.createElement("div", {
                    className: "info"
                }, "(enter a valid url)"))))), o.a.createElement("div", {
                    className: "modal-action-menu"
                }, o.a.createElement("button", {
                    className: "modal-button",
                    onClick: j
                }, "Cancel"), o.a.createElement("button", {
                    className: "modal-button primary",
                    onClick: function() {
                        s(function(e) {
                            var t = e.type,
                                n = e.url,
                                a = e.compoundKey,
                                o = e.content,
                                r = e.panelId;
                            switch (t) {
                                case "NONE":
                                    return {
                                        type: t
                                    };
                                case "URL":
                                    return {
                                        type: t,
                                        url: n
                                    };
                                case "DOCUMENT":
                                    return {
                                        type: t,
                                        compoundKey: a
                                    };
                                case "TEXT":
                                    return {
                                        type: t,
                                        content: o
                                    };
                                case "PANEL":
                                    return {
                                        type: t,
                                        panelId: r
                                    };
                                default:
                                    return console.error("Unknown type of schemaConfig", e), e
                            }
                        }(w)), O()
                    }
                }, "Ok"))))
            }

            function rt(e) {
                var t = document.createElement("div");
                return document.body.appendChild(t), c.a.render(o.a.createElement(ot, {
                    panelId: e.panelId,
                    allPanels: e.allPanels,
                    initialSchema: e.initialSchema,
                    indentation: e.indentation,
                    onOk: e.onOk,
                    onClose: function() {
                        document.body.removeChild(t)
                    }
                }), t)
            }
            var ct = H()("jsoneditoronline:useSchema"),
                st = {
                    type: "NONE",
                    leftPanel: !1,
                    rightPanel: !1
                };

            function it(e, t) {
                return lt.apply(this, arguments)
            }

            function lt() {
                return (lt = Object(u.a)(i.a.mark((function e(t, n) {
                    return i.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t && n) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", Promise.resolve(null));
                            case 2:
                                return e.abrupt("return", "cloud" === t ? De(n) : Ge(n));
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var ut = n(102),
                dt = n.n(ut),
                mt = (n(231), n(21));

            function pt(e) {
                var t = e.document,
                    n = e.documentSource,
                    a = e.onClose,
                    r = S[n];
                return o.a.createElement(D, {
                    onRequestClose: a,
                    className: "document-properties"
                }, o.a.createElement("div", {
                    className: "modal modal-document-properties"
                }, o.a.createElement("h1", null, "Document properties"), o.a.createElement("table", {
                    className: "properties"
                }, o.a.createElement("tbody", null, o.a.createElement("tr", null, o.a.createElement("th", null, "Name"), o.a.createElement("td", null, t.name || "-")), o.a.createElement("tr", null, o.a.createElement("th", null, "Storage"), o.a.createElement("td", null, n || "-", r ? " (".concat(r, ")") : "")), o.a.createElement("tr", null, o.a.createElement("th", null, "Updated"), o.a.createElement("td", null, t.updated ? Ee(t.updated) : "-")), o.a.createElement("tr", null, o.a.createElement("th", null, "Contents"), o.a.createElement("td", null, function(e) {
                    try {
                        var t = re(e);
                        return Array.isArray(t) ? "Array containing ".concat(t.length, " items") : t && "object" === typeof t ? "Object containing ".concat(Object.keys(t).length, " properties") : null === t ? "null" : typeof t
                    } catch (n) {
                        return "Invalid JSON"
                    }
                }(t.content))), o.a.createElement("tr", null, o.a.createElement("th", null, "Size"), o.a.createElement("td", null, Object(mt.a)(ce(t.content).length))))), o.a.createElement("div", {
                    className: "modal-action-menu"
                }, o.a.createElement("button", {
                    className: "modal-button",
                    onClick: a
                }, "Close"))))
            }

            function ht(e) {
                var t = document.createElement("div");
                return document.body.appendChild(t), c.a.render(o.a.createElement(pt, Object.assign({}, e, {
                    onClose: function() {
                        document.body.removeChild(t)
                    }
                })), t)
            }
            n(232);
            var ft = n(105),
                vt = n.n(ft);
            n(236);
            var bt = H()("jsoneditoronline:CopyToClipboardButton");

            function Et(e) {
                var t = e.text,
                    n = e.title,
                    r = e.tooltip,
                    c = Object(a.useState)(!1),
                    s = Object(d.a)(c, 2),
                    i = s[0],
                    l = s[1],
                    u = function() {
                        var e = Object(a.useState)(null),
                            t = Object(d.a)(e, 2),
                            n = t[0],
                            o = t[1],
                            r = Object(a.useCallback)((function() {
                                null != n && (window.clearTimeout(n), o(null))
                            }), [n]),
                            c = Object(a.useCallback)((function(e, t) {
                                null != n && window.clearTimeout(n);
                                var a = window.setTimeout(e, t);
                                o(a)
                            }), [n, o]);
                        return Object(a.useEffect)((function() {
                            return function() {
                                r()
                            }
                        })), [c, r]
                    }(),
                    m = Object(d.a)(u, 1)[0];
                return o.a.createElement(vt.a, {
                    text: t,
                    onCopy: function() {
                        bt("Text copied to clipboard", {
                            text: t
                        }), l(!0), m((function() {
                            return l(!1)
                        }), 1e3)
                    }
                }, o.a.createElement("div", null, o.a.createElement(F.a, {
                    className: "tooltip modal-button primary",
                    content: r,
                    useHover: !1,
                    isOpen: i
                }, o.a.createElement(p.a, {
                    icon: R.a,
                    title: n
                }))))
            }

            function gt(e) {
                var t = e.document,
                    n = e.documentSource,
                    a = e.onClose,
                    r = t.name ? 'document "'.concat(t.name, '"') : "";
                return o.a.createElement(D, {
                    onRequestClose: a,
                    className: "share"
                }, o.a.createElement("div", {
                    className: "modal modal-share"
                }, o.a.createElement("h1", null, "Share ", r), function(e, t) {
                    if ("local" === t) return o.a.createElement("div", null, o.a.createElement("p", null, "This document is stored locally in your browser and cannot be shared."), o.a.createElement("p", null, 'To share this document, save it in the cloud first via menu "Save", "Save to cloud".'));
                    if ("cloud" === t) {
                        var n = function(e, t) {
                            if ("cloud" === t) {
                                var n = window.location.origin,
                                    a = e._id;
                                return "".concat(n, "/#left=cloud.").concat(a)
                            }
                        }(e, t);
                        return o.a.createElement("div", {
                            className: "share-contents"
                        }, o.a.createElement("input", {
                            readOnly: !0,
                            value: n,
                            className: "url-contents"
                        }), o.a.createElement(Et, {
                            text: n,
                            tooltip: "Url copied to clipboard",
                            title: "Copy url to clipboard",
                            className: "modal-button primary"
                        }))
                    }
                    return o.a.createElement("div", null, "Cannot create a sharable url. Please save the document in the cloud first.")
                }(t, n), o.a.createElement("div", {
                    className: "modal-action-menu"
                }, o.a.createElement("button", {
                    className: "modal-button",
                    onClick: a
                }, "Close"))))
            }

            function wt(e) {
                var t = document.createElement("div");
                return document.body.appendChild(t), c.a.render(o.a.createElement(gt, Object.assign({}, e, {
                    onClose: function() {
                        document.body.removeChild(t)
                    }
                })), t)
            }
            var yt = H()("jsoneditoronline:JSONEditorPanel"),
                Ot = {
                    json: {}
                };

            function jt(e) {
                var t = e.panelId,
                    n = e.ajv,
                    r = e.mode,
                    c = e.setMode,
                    s = e.focus,
                    h = e.loading,
                    f = e.error,
                    v = e.localStorageError,
                    b = e.unsavedChanges,
                    E = e.document,
                    g = e.documentSource,
                    w = e.diff,
                    y = e.indentation,
                    O = e.setIndentation,
                    j = e.updateDocument,
                    N = e.newDocument,
                    x = e.updateDocumentProperties,
                    S = e.renameDocument,
                    k = e.loadDocument,
                    D = e.loadFromDisk,
                    T = e.loadFromUrl,
                    L = e.saveToCloud,
                    I = e.saveToDisk,
                    P = e.saveToUrl,
                    A = e.saveChanges,
                    M = e.closeAndDeleteDocument,
                    J = e.allPanels,
                    U = Object(a.useRef)(null),
                    _ = Object(a.useRef)(null),
                    K = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : st,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            o = arguments.length > 3 ? arguments[3] : void 0,
                            r = "DOCUMENT" === e.type ? e.compoundKey.split(".") : [null, null],
                            c = Object(d.a)(r, 2),
                            s = c[0],
                            i = c[1],
                            l = Object(ke.useAsync)(it, [s, i]),
                            u = "URL" === e.type ? e.url : null,
                            m = Object(ke.useAsync)(Le, [u]),
                            p = Object(a.useCallback)((function(e) {
                                return e && o.compile(e), e
                            }), [o]);
                        if (Object(a.useEffect)((function() {
                                ct("schema config changed", {
                                    schemaConfig: e
                                })
                            }), [e]), e) try {
                            if ("TEXT" === e.type) return {
                                loading: !1,
                                error: null,
                                content: p(re(e.content))
                            };
                            if ("DOCUMENT" === e.type) return {
                                loading: "loading" === l.status,
                                error: l.error,
                                content: l.result && "loading" !== l.status ? p(re(l.result.content)) : null
                            };
                            if ("URL" === e.type) return {
                                loading: "loading" === m.status,
                                error: m.error,
                                content: "loading" !== m.status ? p(m.result) : null
                            };
                            if ("PANEL" === e.type) {
                                if (e.panelId === t) return {
                                    loading: !1,
                                    error: "Error: Cannot select panel itself as JSON schema.",
                                    content: null
                                };
                                var h = n.find((function(t) {
                                    return t.panelId === e.panelId
                                }));
                                return h ? {
                                    loading: !1,
                                    error: null,
                                    content: p(re(h.document.content))
                                } : {
                                    loading: !1,
                                    error: 'Error: Panel with id "'.concat(e.panelId, '" not found.'),
                                    content: null
                                }
                            }
                        } catch (f) {
                            return {
                                loading: !1,
                                error: f.toString(),
                                content: null
                            }
                        }
                        return {
                            loading: !1,
                            error: null,
                            content: null
                        }
                    }(E.schema, t, J, n),
                    q = E ? E.content : Ot,
                    W = function() {
                        N()
                    },
                    B = function() {
                        me({
                            title: "Rename",
                            text: "Enter a new name for the document:",
                            value: E.name || "New document",
                            onOk: S
                        })
                    },
                    V = Object(a.useCallback)(Object(u.a)(i.a.mark((function e() {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    Ne({
                                        onOpen: function() {
                                            var e = Object(u.a)(i.a.mark((function e(t, n) {
                                                var a;
                                                return i.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return a = "".concat(t, ".").concat(n), yt("onOpen", {
                                                                compoundKey: a,
                                                                documentSource: t,
                                                                documentId: n
                                                            }), e.next = 4, k(a);
                                                        case 4:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t, n) {
                                                return e.apply(this, arguments)
                                            }
                                        }(),
                                        onDelete: M
                                    });
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), [k, M]),
                    H = Object(a.useCallback)(Object(u.a)(i.a.mark((function e() {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, A({
                                        force: !0,
                                        silent: !1
                                    });
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), [A]),
                    z = Object(a.useCallback)(Object(u.a)(i.a.mark((function e() {
                        return i.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ("cloud" !== g) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 3, L();
                                case 3:
                                    e.next = 6;
                                    break;
                                case 5:
                                    me({
                                        title: "Save to cloud",
                                        text: "Enter a name for the document:",
                                        value: E.name || "New document",
                                        textOk: "Save",
                                        onOk: function() {
                                            var e = Object(u.a)(i.a.mark((function e(t) {
                                                return i.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, x({
                                                                name: t
                                                            });
                                                        case 2:
                                                            return e.next = 4, L();
                                                        case 4:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }()
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), [g, E.name, x, L]),
                    X = function() {
                        var e = Object(u.a)(i.a.mark((function e() {
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        me({
                                            title: "Save to disk",
                                            text: "Enter a name for the document:",
                                            value: E.name || "New document",
                                            textOk: "Save",
                                            onOk: function(e) {
                                                I(e)
                                            }
                                        });
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    G = function() {
                        var e = Object(u.a)(i.a.mark((function e() {
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        me({
                                            className: "open-url-prompt",
                                            title: "Open url",
                                            text: o.a.createElement("div", null, o.a.createElement("p", null, "Enter a public url."), o.a.createElement("p", null, "Urls which need authentication or do not have CORS enabled cannot be loaded.")),
                                            value: E.loadedFromUrl || "",
                                            textOk: "Open",
                                            onOk: T
                                        });
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    Y = function() {
                        var e = Object(u.a)(i.a.mark((function e() {
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        me({
                                            className: "save-url-prompt",
                                            title: "Save to url",
                                            text: o.a.createElement("div", null, o.a.createElement("p", null, "Enter a public url of a server."), o.a.createElement("p", null, "When clicking Save, an HTTP POST request will be send to the selected url with the JSON document as body. The url must not require authentication and must have CORS enabled.")),
                                            value: E.savedToUrl || E.loadedFromUrl || "",
                                            textOk: "Save",
                                            onOk: P
                                        });
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    $ = Object(a.useCallback)(function() {
                        var e = Object(u.a)(i.a.mark((function e(t) {
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, j(Object(l.a)({}, E, {
                                            content: t
                                        }));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [j, E]),
                    Q = Object(a.useCallback)((function(e) {
                        var t = e.path,
                            n = t.length > 0 ? "/" + t.join("/") : "",
                            a = w[n];
                        if (a) return "diff-".concat(a)
                    }), [w]);

                function Z() {
                    rt({
                        indentation: y,
                        initialSchema: E.schema,
                        panelId: t,
                        allPanels: J,
                        onOk: function(e) {
                            yt("Selected JSON Schema", e), j(Object(l.a)({}, E, {
                                schema: e
                            }), !0)
                        }
                    })
                }
                var ee = Object(a.useCallback)((function() {
                    ht({
                        document: E,
                        documentSource: g
                    })
                }), [E, g]);

                function te() {
                    wt({
                        document: E,
                        documentSource: g
                    })
                }

                function ne() {
                    me({
                        title: "Configure indentation",
                        text: "Configure the number of spaces used for indentation in code mode. The indentation is applied to both panels in the JSONEditor.",
                        value: y,
                        validate: function(e) {
                            var t = Number(e);
                            return isNaN(t) || !isFinite(t) || t <= 0 || Math.round(t) !== t ? "Error: value must be a positive integer number." : null
                        },
                        onOk: function(e) {
                            O(Number(e))
                        }
                    })
                }
                var ae = "cloud" === g ? "Rename document. Document is stored in the cloud" : "Rename document. Document is stored locally in your browser";
                return Object(a.useEffect)((function() {
                    function e(e) {
                        return n.apply(this, arguments)
                    }

                    function n() {
                        return (n = Object(u.a)(i.a.mark((function e(t) {
                            var n;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.key.toUpperCase(), !t.ctrlKey || t.shiftKey || "S" !== n) {
                                            e.next = 6;
                                            break
                                        }
                                        return t.preventDefault(), t.stopPropagation(), e.next = 6, H();
                                    case 6:
                                        if (!t.ctrlKey || t.shiftKey || "O" !== n) {
                                            e.next = 11;
                                            break
                                        }
                                        return t.preventDefault(), t.stopPropagation(), e.next = 11, V();
                                    case 11:
                                        t.ctrlKey && !t.shiftKey && "I" === n && (t.preventDefault(), t.stopPropagation(), ee());
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }
                    if (s) return yt("addEventListener for global keydown panelId:", t), window.document.body.addEventListener("keydown", e),
                        function() {
                            yt("removeEventListener for global keydown panelId:", t), window.document.body.removeEventListener("keydown", e)
                        }
                }), [s, t, V, H, ee]), o.a.createElement("div", {
                    className: "panel"
                }, o.a.createElement(xe.a, {
                    onDrop: function(e) {
                        return D(e[0])
                    }
                }, "Drag 'n drop your JSON document here..."), o.a.createElement(dt.a, null, (function(e) {
                    var t, n = e.width - ((t = _).current ? t.current.getBoundingClientRect().width : null),
                        a = n - 40 > 430,
                        r = n - (a ? 430 : 220) > 170,
                        c = n - 40 - 220 < 0,
                        s = b && !v;
                    return o.a.createElement(o.a.Fragment, null,
                        o.a.createElement("div", {
                        className: C()("panel-menu", {
                            wrap: c
                        })
                    }, o.a.createElement("div", {
                        className: "document-details",
                        ref: _
                    }, v ? o.a.createElement(F.a, {
                        content: v,
                        direction: "bottom",
                        background: "#4d4d4d",
                        color: "#ffffff",
                        className: "local-storage-error-wrapper",
                        tipContentClassName: "local-storage-error"
                    }, o.a.createElement("div", {
                        className: "local-storage-error-icon"
                    }, o.a.createElement(p.a, {
                        icon: m.m
                    }))) : null, E.schema && "NONE" !== E.schema.type &&
                    o.a.createElement("button", {
                        className: C()("menu-button schema", {
                            error: K.error
                        }),
                        disabled: h || f,
                        onClick: Z,
                        title: K.error ? "Failed to load JSON Schema: ".concat(K.error) : K.loading ? "Loading JSON schema..." : "This document is validated against a JSON schema. Click to view or change the schema."
                    }, K.loading ? o.a.createElement(p.a, {
                        icon: m.h,
                        spin: !0,
                        fixedWidth: !0
                    }) : o.a.createElement(Nt, {
                        backgroundColor: "#6f9970"
                    }), K.error && o.a.createElement("span", {
                        className: "error"
                    }, "Error")), !h && E && E._id ? o.a.createElement("button", {
                        disabled: h || f,
                        className: C()("menu-button name", {
                            unnamed: !E.name
                        }),
                        title: ae,
                        onClick: B
                    }, "cloud" === g ? o.a.createElement(p.a, {
                        icon: m.i
                    }) : null, E.name, o.a.createElement(p.a, {
                        icon: m.k
                    })) : null), r ? o.a.createElement("div", {
                        className: C()("unsaved-changes", {
                            visible: s
                        })
                    }, "changed (", o.a.createElement("button", {
                        className: "save-now",
                        onClick: H
                    }, "save now"), ")") : o.a.createElement("button", {
                        className: C()("menu-button unsaved-changes", {
                            visible: s
                        }),
                        onClick: H,
                        title: "There are unsaved changes. Click to save now."
                    }, o.a.createElement(p.a, {
                        icon: R.b
                    })), o.a.createElement("div", {
                        className: "buttons"
                    }, o.a.createElement("button", {
                        className: "menu-button",
                        disabled: h,
                        onClick: W,
                        title: "Open a new, empty document"
                    }, o.a.createElement(p.a, {
                        icon: m.n
                    }), a && " 新建"), o.a.createElement("div", {
                        className: "menu-button dropdown-button"
                    }, o.a.createElement(p.a, {
                        icon: m.o
                    }), a && " 打开", " ", o.a.createElement(p.a, {
                        icon: m.c
                    }), o.a.createElement("div", {
                        className: "dropdown-menu"
                    }, o.a.createElement("button", {
                        className: "dropdown-menu-button",
                        disabled: h,
                        onClick: V,
                        title: "打开一个远程文件"
                    }, o.a.createElement(p.a, {
                        icon: m.i,
                        fixedWidth: !0
                    }), " 打开远程文件"), o.a.createElement("input", {
                        type: "file",
                        ref: U,
                        onChange: function(e) {
                            return D(e.target.files[0])
                        },
                        style: {
                            display: "none"
                        }
                    }), o.a.createElement("button", {
                        className: "dropdown-menu-button",
                        disabled: h,
                        onClick: function() {
                            return U.current.click()
                        },
                        title: "打开磁盘中的文件"
                    }, o.a.createElement(p.a, {
                        icon: m.s,
                        fixedWidth: !0
                    }), " 打开磁盘文件"), o.a.createElement("button", {
                        className: "dropdown-menu-button",
                        disabled: h,
                        onClick: G,
                        title: "打开文档来自一个URL"
                    }, o.a.createElement(p.a, {
                        icon: m.t,
                        fixedWidth: !0
                    }), " 打开URL文件"))), o.a.createElement("div", {
                        className: "menu-button dropdown-button"
                    }, o.a.createElement(p.a, {
                        icon: m.u
                    }), a && " 保存", " ", o.a.createElement(p.a, {
                        icon: m.c
                    }), o.a.createElement("div", {
                        className: "dropdown-menu"
                    }, o.a.createElement("button", {
                        className: "dropdown-menu-button",
                        disabled: h || f,
                        onClick: z,
                        title: "保存文档到云盘"
                    }, o.a.createElement(p.a, {
                        icon: m.i,
                        fixedWidth: !0
                    }), " 保存到云盘"), o.a.createElement("button", {
                        className: "dropdown-menu-button",
                        disabled: h || f,
                        onClick: X,
                        title: "保存文档到磁盘"
                    }, o.a.createElement(p.a, {
                        icon: m.s,
                        fixedWidth: !0
                    }), " 保存到磁盘"), o.a.createElement("button", {
                        className: "dropdown-menu-button",
                        disabled: h || f,
                        onClick: Y,
                        title: "保存文档到一个图片URL"
                    }, o.a.createElement(p.a, {
                        icon: m.t,
                        fixedWidth: !0
                    }), " 发送到URL"))), o.a.createElement("div", {
                        className: "menu-button dropdown-button"
                    }, o.a.createElement(p.a, {
                        icon: m.j
                    }), a && " 设置", " ", o.a.createElement(p.a, {
                        icon: m.c
                    }), o.a.createElement("div", {
                        className: "dropdown-menu wide"
                    }, o.a.createElement("button", {
                        className: "dropdown-menu-button",
                        disabled: h || f,
                        onClick: Z,
                        title: "Configure a JSON schema to validate this document"
                    }, o.a.createElement(Nt, null), " JSON序列化"), o.a.createElement("button", {
                        className: "dropdown-menu-button",
                        disabled: h || f,
                        onClick: ne,
                        title: "Configure indentation. Currently ".concat(y, " spaces.")
                    }, o.a.createElement(p.a, {
                        icon: m.p,
                        fixedWidth: !0
                    }), " 缩进 (", y, ")"), o.a.createElement("button", {
                        className: "dropdown-menu-button",
                        disabled: h || f,
                        onClick: ee,
                        title: "See document properties (Ctrl+I)"
                    }, o.a.createElement(p.a, {
                        icon: m.q,
                        fixedWidth: !0
                    }), "  文档属性"))), o.a.createElement("button", {
                        className: "menu-button",
                        disabled: h,
                        onClick: te,
                        title: "分享"
                    }, o.a.createElement(p.a, {
                        icon: m.v
                    }), a && " 分享"))))
                })), o.a.createElement("div", {
                    className: "panel-contents"
                }, o.a.createElement(ue, {
                    id: t,
                    mode: r,
                    ajv: n,
                    onChangeMode: c,
                    indentation: y,
                    content: q,
                    onChangeContent: $,
                    onClassName: w ? Q : void 0,
                    schema: K.content
                }), h ? o.a.createElement("div", {
                    className: "overlay"
                }, o.a.createElement(p.a, {
                    icon: m.h,
                    spin: !0,
                    fixedWidth: !0
                }), " loading...") : null, f ? o.a.createElement("div", {
                    className: "overlay"
                }, o.a.createElement("div", {
                    className: "loading-error"
                }, o.a.createElement(p.a, {
                    icon: m.m
                }), o.a.createElement("br", null), f.toString())) : null))
            }

            function Nt(e) {
                var t = !1 !== e.valid,
                    n = {
                        color: e.backgroundColor || "white",
                        position: "absolute",
                        bottom: 2,
                        left: 4,
                        fontSize: "60%"
                    };
                return o.a.createElement("div", {
                    style: {
                        position: "relative",
                        display: "inline-block"
                    }
                }, o.a.createElement(p.a, {
                    icon: m.n,
                    fixedWidth: !0
                }), o.a.createElement(p.a, {
                    style: n,
                    icon: t ? m.d : m.w,
                    fixedWidth: !0
                }))
            }

            function xt() {
                function e() {
                    return function(e) {
                        var t = e.split("&").filter((function(e) {
                            return !Object(Oe.isEmpty)(e)
                        })).map((function(e) {
                            return e.split("=").map(decodeURIComponent)
                        }));
                        return Object(Oe.fromPairs)(t)
                    }(window.location.hash.substring(1))
                }

                function t(e) {
                    a = e;
                    var t, n = (t = e, Object(Oe.toPairs)(t).map((function(e) {
                        return e.map(encodeURIComponent).join("=")
                    })).join("&"));
                    window.location.hash = n.length ? "#" + n : ""
                }
                var n = [],
                    a = e();

                function o() {
                    var t = e();
                    n.forEach((function(e) {
                        var n = e.key,
                            o = e.callback;
                        t[n] !== a[n] && o(t[n])
                    })), a = t
                }
                return window.addEventListener("hashchange", o), {
                    getValue: function(t) {
                        return e()[t]
                    },
                    setValue: function(n, a) {
                        var o = e();
                        t(Object(l.a)({}, o, Object(j.a)({}, n, a)))
                    },
                    onChange: function(e, t) {
                        n.push({
                            key: e,
                            callback: t
                        })
                    },
                    removeValue: function(n) {
                        var a = e();
                        a[n] && (delete a[n], t(a))
                    },
                    destroy: function() {
                        window.removeEventListener("hashchange", o)
                    }
                }
            }

            function St() {
                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6, t = "aeiou", n = "bcdfghjklmnpqrstvwxyz", a = ""; a.length < e;) a += kt(n) + kt(t);
                return a
            }

            function kt(e) {
                return e[Math.floor(Math.random() * e.length)]
            }
            var Ct = H()("jsoneditoronline:DocumentProvider"),
                Dt = {
                    type: "NONE",
                    url: null,
                    id: null,
                    content: null,
                    leftPanel: !1,
                    rightPanel: !1
                },
                Tt = {
                    _id: void 0,
                    name: void 0,
                    content: {
                        json: {
                            array: [1, 2, 3],
                            boolean: !0,
                            color: "gold",
                            null: null,
                            number: 123,
                            object: {
                                a: "b",
                                c: "d"
                            },
                            string: "Hello World"
                        }
                    },
                    schema: Dt,
                    updated: void 0
                },
                Lt = {
                    _id: void 0,
                    name: void 0,
                    content: {
                        json: {}
                    },
                    schema: Dt,
                    updated: void 0
                },
                It = function(e) {
                    function t(e) {
                        var n;
                        return Object(h.a)(this, t), (n = Object(v.a)(this, Object(b.a)(t).call(this, e))).loadDocument = function() {
                            var e = Object(u.a)(i.a.mark((function e(t) {
                                var a, o, r, c, s, l, u;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t) {
                                                e.next = 6;
                                                break
                                            }
                                            return a = function() {
                                                var e = pe("data");
                                                return void 0 !== e ? {
                                                    content: {
                                                        json: e
                                                    }
                                                } : Tt
                                            }, o = !!n.props.loadDefaultDocumentOnFirstUse && !1 !== pe("firstTimeUse"), n.setState({
                                                documentSource: null,
                                                document: o ? a() : Lt,
                                                loading: !1,
                                                loadingError: null
                                            }), n.hash.removeValue(n.props.hashKey), e.abrupt("return");
                                        case 6:
                                            if (r = n.splitCompoundKey(t), c = r.documentSource, s = r.documentId, c) {
                                                e.next = 10;
                                                break
                                            }
                                            return n.setState({
                                                loading: !1,
                                                loadingError: "Error: cannot load document with id '".concat(t, "',") + " expecting a compound key 'local.id' or 'cloud.id'."
                                            }), e.abrupt("return");
                                        case 10:
                                            e.t0 = c, e.next = "cloud" === e.t0 ? 13 : "local" === e.t0 ? 17 : "json" === e.t0 ? 21 : "url" === e.t0 ? 26 : 31;
                                            break;
                                        case 13:
                                            return Ct("load from cloud id: ".concat(s)), e.next = 16, n.loadFromCloud(s, {
                                                silent: !0
                                            });
                                        case 16:
                                            return e.abrupt("return");
                                        case 17:
                                            return Ct("load locally id: ".concat(s)), e.next = 20, n.loadLocally(s, {
                                                silent: !0
                                            });
                                        case 20:
                                            return e.abrupt("return");
                                        case 21:
                                            return l = decodeURIComponent(s), Ct("load json: ".concat(l)), e.next = 25, n.loadFromJson(l);
                                        case 25:
                                            return e.abrupt("return");
                                        case 26:
                                            return Ct("load url: ".concat(u = s)), e.next = 30, n.loadFromUrl(u);
                                        case 30:
                                            return e.abrupt("return");
                                        case 31:
                                            return n.setState({
                                                loading: !1,
                                                loadingError: "Error: cannot load document with id '".concat(t, "',") + " unknown document source ".concat(c, ".") + " Known sources: 'local', 'cloud', 'url', or 'json'."
                                            }), e.abrupt("return");
                                        case 33:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), n.splitCompoundKey = function(e) {
                            var t = e ? e.indexOf(".") : -1;
                            return -1 === t ? {
                                documentSource: null,
                                documentId: null
                            } : {
                                documentSource: e.substring(0, t),
                                documentId: e.substring(t + 1)
                            }
                        }, n.getDocumentSource = function() {
                            var e = n.hash.getValue(n.props.hashKey);
                            return n.splitCompoundKey(e).documentSource
                        }, n.newDocument = Object(u.a)(i.a.mark((function e() {
                            var t;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = Pt({
                                            content: {
                                                text: "{}"
                                            }
                                        }), Ct("newDocument", {
                                            document: t
                                        }), e.next = 4, n.setState({
                                            documentSequenceNr: n.state.documentSequenceNr + 1,
                                            documentSource: null,
                                            document: t,
                                            loadingError: !1,
                                            localStorageError: null,
                                            unsavedChanges: !1
                                        });
                                    case 4:
                                        n.hash.removeValue(n.props.hashKey), n.props.loadDefaultDocumentOnFirstUse && he("firstTimeUse", !1);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), n.updateDocument = function() {
                            var e = Object(u.a)(i.a.mark((function e(t) {
                                var a, o, r = arguments;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = r.length > 1 && void 0 !== r[1] && r[1], o = Pt(t), e.next = 4, n.setState({
                                                document: o,
                                                unsavedChanges: !0
                                            });
                                        case 4:
                                            return a ? n.saveChanges() : n.debouncedSaveChanges(), e.abrupt("return", o);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), n.renameDocument = function() {
                            var e = Object(u.a)(i.a.mark((function e(t) {
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, n.updateDocumentProperties({
                                                name: t
                                            });
                                        case 2:
                                            return e.next = 4, n.saveChanges();
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), n.updateDocumentProperties = function() {
                            var e = Object(u.a)(i.a.mark((function e(t) {
                                var a, o, r = arguments;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = r.length > 1 && void 0 !== r[1] && r[1], o = Pt(n.state.document, t), e.next = 4, n.setState({
                                                document: o,
                                                unsavedChanges: !0
                                            });
                                        case 4:
                                            return a ? n.saveChanges() : n.debouncedSaveChanges(), e.abrupt("return", o);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), n.loadLocally = function() {
                            var e = Object(u.a)(i.a.mark((function e(t) {
                                var a, o, r, c, s, l = arguments;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = l.length > 1 && void 0 !== l[1] ? l[1] : {
                                                silent: !1
                                            }, o = a.silent, n.setState({
                                                loading: !0,
                                                loadingError: null,
                                                localStorageError: null
                                            }), r = function(e) {
                                                n.setState({
                                                    loading: !1,
                                                    loadingError: e
                                                }), o || ee(e)
                                            }, e.prev = 3, e.next = 6, Ge(t);
                                        case 6:
                                            (c = e.sent) ? (n.setState({
                                                document: c,
                                                documentSource: "local",
                                                loading: !1
                                            }), s = "local.".concat(t), n.hash.setValue(n.props.hashKey, s), ge("local", c)) : r(new Error("Local document with id '".concat(t, "' not found"))), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(3), r(e.t0);
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [3, 10]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), n.saveLocally = function() {
                            var e = Object(u.a)(i.a.mark((function e() {
                                var t, a, o, r, c, s, l, u, d, m = arguments;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = m.length > 0 && void 0 !== m[0] ? m[0] : {
                                                    silent: !1
                                                }, a = t.silent, Ct("save document locally (_id: ".concat(n.state.document._id, ")")), o = a ? null : Q("Saving document..."), r = "The JSON document is too large to store locally in your browser, and will be lost when closing the browser. Make sure you save the document yourself.", !(n.state.document.content.text && n.state.document.content.text.length > 1e6)) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.next = 7, n.setState({
                                                unsavedChanges: !1,
                                                localStorageError: r + " (maximum size: ".concat(Object(mt.a)(1e6), ",") + " actual size: ".concat(Object(mt.a)(n.state.document.content.text.length), ")")
                                            });
                                        case 7:
                                            return e.abrupt("return");
                                        case 8:
                                            if (!((c = JSON.stringify(n.state.document).length) > 1e6)) {
                                                e.next = 13;
                                                break
                                            }
                                            return e.next = 12, n.setState({
                                                unsavedChanges: !1,
                                                localStorageError: r + " (maximum size: ".concat(Object(mt.a)(1e6), ",") + " actual serialized size: ".concat(Object(mt.a)(c), ")")
                                            });
                                        case 12:
                                            return e.abrupt("return");
                                        case 13:
                                            if (e.prev = 13, !n.state.document._id) {
                                                e.next = 20;
                                                break
                                            }
                                            return e.next = 17, ze(n.state.document._id, n.state.document);
                                        case 17:
                                            Ct("Updated existing local document"), e.next = 35;
                                            break;
                                        case 20:
                                            if (s = St(), e.t0 = n.state.document.name, e.t0) {
                                                e.next = 26;
                                                break
                                            }
                                            return e.next = 25, Ze();
                                        case 25:
                                            e.t0 = e.sent;
                                        case 26:
                                            return l = e.t0, u = Pt(n.state.document, {
                                                _id: s,
                                                name: l
                                            }), e.next = 30, n.setState({
                                                documentSource: "local",
                                                document: u
                                            });
                                        case 30:
                                            return e.next = 32, ze(s, u);
                                        case 32:
                                            d = "local.".concat(s), n.hash.setValue(n.props.hashKey, d), Ct("Saved new local document", s);
                                        case 35:
                                            ge("local", n.state.document), n.setState({
                                                unsavedChanges: !1,
                                                localStorageError: null
                                            }), a || Z('Document "'.concat(n.state.document.name, '" saved locally.')), e.next = 43;
                                            break;
                                        case 40:
                                            e.prev = 40, e.t1 = e.catch(13), n.setState({
                                                unsavedChanges: !1,
                                                localStorageError: e.t1.toString()
                                            });
                                        case 43:
                                            return e.prev = 43, o && o.close(), e.finish(43);
                                        case 46:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [13, 40, 43, 46]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(), n.saveChanges = function() {
                            var e = Object(u.a)(i.a.mark((function e() {
                                var t, a, o, r, c = arguments;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = c.length > 0 && void 0 !== c[0] ? c[0] : {
                                                    silent: !0,
                                                    force: !1
                                                }, a = t.silent, o = t.force, !n.state.unsavedChanges && !o) {
                                                e.next = 20;
                                                break
                                            }
                                            e.prev = 2, r = n.getDocumentSource(), e.t0 = r, e.next = "cloud" === e.t0 ? 7 : "local" === e.t0 ? 10 : "url" === e.t0 ? 10 : "json" === e.t0 ? 10 : null === e.t0 ? 10 : 13;
                                            break;
                                        case 7:
                                            return e.next = 9, n.saveToCloud({
                                                silent: a
                                            });
                                        case 9:
                                            return e.abrupt("break", 14);
                                        case 10:
                                            return e.next = 12, n.saveLocally({
                                                silent: a
                                            });
                                        case 12:
                                            return e.abrupt("break", 14);
                                        case 13:
                                            throw new Error("Error: cannot save changes, " + "unknown document source '".concat(r, "'. ") + " Known sources: 'local', 'cloud', 'url', or 'json'.");
                                        case 14:
                                            e.next = 20;
                                            break;
                                        case 16:
                                            e.prev = 16, e.t1 = e.catch(2), console.error(e.t1), ee(e.t1);
                                        case 20:
                                            n.props.loadDefaultDocumentOnFirstUse && he("firstTimeUse", !1);
                                        case 21:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 16]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(), n._debouncedSaveToLocalStorage = Object(Oe.debounce)(n.saveChanges, 1e3), n._debouncedSaveToCloud = Object(Oe.debounce)(n.saveChanges, 4e3), n.debouncedSaveChanges = function() {
                            "cloud" === n.getDocumentSource() ? n._debouncedSaveToCloud() : n._debouncedSaveToLocalStorage()
                        }, n.loadFromCloud = function() {
                            var e = Object(u.a)(i.a.mark((function e(t) {
                                var a, o, r, c, s, l = arguments;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = l.length > 1 && void 0 !== l[1] ? l[1] : {
                                                silent: !1
                                            }, o = a.silent, r = o ? null : Q("Loading document..."), n.setState({
                                                loading: !0,
                                                loadingError: null,
                                                localStorageError: null
                                            }), e.prev = 3, Ct("Load document with id ".concat(t, "...")), e.next = 7, De(t);
                                        case 7:
                                            ge("cloud", c = e.sent), Ct("Loaded document", c), n.setState({
                                                documentSequenceNr: n.state.documentSequenceNr + 1,
                                                documentSource: "cloud",
                                                document: c,
                                                loading: !1,
                                                unsavedChanges: !1
                                            }), s = "cloud.".concat(t), n.hash.setValue(n.props.hashKey, s), o || Z('Document "'.concat(c.name, '" loaded.')), e.next = 21;
                                            break;
                                        case 16:
                                            e.prev = 16, e.t0 = e.catch(3), console.error(e.t0), n.setState({
                                                loading: !1,
                                                loadingError: e.t0
                                            }), o || ee(e.t0);
                                        case 21:
                                            return e.prev = 21, r && r.close(), e.finish(21);
                                        case 24:
                                            return e.abrupt("return", n.state.document);
                                        case 25:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [3, 16, 21, 24]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), n.saveToCloud = function() {
                            var e = Object(u.a)(i.a.mark((function e() {
                                var t, a, o, r, c, s, u, d, m, p = arguments;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = p.length > 0 && void 0 !== p[0] ? p[0] : {
                                                    silent: !1
                                                }, a = t.silent, o = n.state.document.name, Ct("save document to cloud (hashKey: ".concat(n.props.hashKey, ", name: ").concat(o, ")")), r = a ? null : Q("Saving document..."), e.prev = 4, "cloud" !== n.state.documentSource || !n.state.document._id) {
                                                e.next = 11;
                                                break
                                            }
                                            return e.next = 8, Pe(n.state.document);
                                        case 8:
                                            Ct("Updated existing document"), e.next = 25;
                                            break;
                                        case 11:
                                            return c = n.state.document._id, s = Object(l.a)({}, n.state.document, {
                                                _id: void 0
                                            }), e.next = 15, Me(s);
                                        case 15:
                                            return u = e.sent, d = u.id, e.next = 19, n.updateDocumentProperties({
                                                _id: d
                                            });
                                        case 19:
                                            if (m = "cloud.".concat(d), n.hash.setValue(n.props.hashKey, m), !c) {
                                                e.next = 24;
                                                break
                                            }
                                            return e.next = 24, $e(c);
                                        case 24:
                                            Ct("Saved new document", d, o);
                                        case 25:
                                            ge("cloud", n.state.document), n.setState({
                                                unsavedChanges: !1
                                            }), a || Z('Document "'.concat(o, '" saved.')), e.next = 34;
                                            break;
                                        case 30:
                                            e.prev = 30, e.t0 = e.catch(4), console.error(e.t0), ee(e.t0);
                                        case 34:
                                            return e.prev = 34, r && r.close(), e.finish(34);
                                        case 37:
                                            return e.abrupt("return", n.state.document);
                                        case 38:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [4, 30, 34, 37]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(), n.deleteDocument = function() {
                            var e = Object(u.a)(i.a.mark((function e(t, a) {
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            Ct("deleteDocument", {
                                                documentSource: t,
                                                documentId: a
                                            }), e.prev = 1, n.setState({
                                                unsavedChanges: !1
                                            }), e.t0 = t, e.next = "local" === e.t0 ? 6 : "cloud" === e.t0 ? 9 : 12;
                                            break;
                                        case 6:
                                            return e.next = 8, $e(a);
                                        case 8:
                                            return e.abrupt("break", 13);
                                        case 9:
                                            return e.next = 11, Je(a);
                                        case 11:
                                            return e.abrupt("break", 13);
                                        case 12:
                                            throw new Error("Error: cannot delete document, " + "unknown document source '".concat(t, "'. ") + " Known sources: 'local', 'cloud', 'url', or 'json'.");
                                        case 13:
                                            we(0, a), e.next = 20;
                                            break;
                                        case 16:
                                            e.prev = 16, e.t1 = e.catch(1), console.error(e.t1), ee(e.t1);
                                        case 20:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 16]
                                ])
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(), n.loadFromDisk = function() {
                            var e = Object(u.a)(i.a.mark((function e(t) {
                                var a, o, r, c;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return Ct("Loading file from disk...", {
                                                file: t
                                            }), n.setState({
                                                loading: !0,
                                                loadingError: null,
                                                localStorageError: null
                                            }), e.prev = 2, e.next = 5, At(t);
                                        case 5:
                                            return a = e.sent, o = a.name, r = a.data, c = {
                                                name: te(o, ".json"),
                                                content: {
                                                    text: r
                                                }
                                            }, Ct("Loaded file from disk", {
                                                data: r,
                                                name: o
                                            }), e.next = 12, n.setState({
                                                documentSequenceNr: n.state.documentSequenceNr + 1,
                                                documentSource: null,
                                                document: c,
                                                unsavedChanges: !0,
                                                loading: !1
                                            });
                                        case 12:
                                            return e.next = 14, n.saveLocally({
                                                silent: !0
                                            });
                                        case 14:
                                            e.next = 21;
                                            break;
                                        case 16:
                                            e.prev = 16, e.t0 = e.catch(2), console.error(e.t0), ee(e.t0), n.setState({
                                                loading: !1,
                                                loadingError: e.t0
                                            });
                                        case 21:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 16]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), n.saveToDisk = function(e) {
                            var t = function(e, t) {
                                    return e.toLowerCase().endsWith(t.toLowerCase()) ? e : e + t
                                }(e, ".json"),
                                a = document.createElement("a");
                            try {
                                if ("undefined" === typeof Blob) throw new Error("Failed to save file to disk. Your browser doesn't support Blob.");
                                if (void 0 === a.download) throw new Error("Failed to save file to disk. Your browser doesn't support HTML5 a.download.");
                                var o = n.state.document.content,
                                    r = "string" === typeof o.text ? o.text : JSON.stringify(o.json, null, n.props.indentation),
                                    c = new Blob([r], {
                                        type: "application/json;charset=utf-8"
                                    });
                                a.style.display = "none", a.rel = "noopener", a.href = URL.createObjectURL(c), a.download = t, document.body.appendChild(a), a.click()
                            } catch (s) {
                                console.error(s), ee(s), n.setState({
                                    loading: !1,
                                    loadingError: s
                                })
                            } finally {
                                URL.revokeObjectURL(a.href), document.body.removeChild(a)
                            }
                        }, n.loadFromJson = function(e) {
                            var t = Pt({
                                content: {
                                    text: e
                                }
                            });
                            Ct("loadFromJson", {
                                document: t
                            }), n.setState({
                                documentSequenceNr: n.state.documentSequenceNr + 1,
                                documentSource: "json",
                                document: t,
                                loading: !1,
                                loadingError: !1,
                                unsavedChanges: !1
                            });
                            var a = "json.".concat(e);
                            n.hash.setValue(n.props.hashKey, a)
                        }, n.saveToJson = Object(u.a)(i.a.mark((function e() {
                            var t, a;
                            return i.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = ce(n.state.document.content), e.next = 3, n.setState({
                                            unsavedChanges: !1,
                                            localStorageError: null
                                        });
                                    case 3:
                                        a = encodeURIComponent("json.".concat(t)), n.hash.setValue(n.props.hashKey, a), window.location.href.length > 2e3 && n.setState({
                                            localStorageError: "The JSON document is too large to safely store in an url, and may be lost when closing the browser. Make sure you save the document yourself" + " (safe maximum size: ".concat(Object(mt.a)(2e3), ",") + " actual size: ".concat(window.location.href.length, ").")
                                        });
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), n.loadFromUrl = function() {
                            var e = Object(u.a)(i.a.mark((function e(t) {
                                var a, o, r, c, s;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return Ct("Loading file from url...", {
                                                url: t
                                            }), n.setState({
                                                loading: !0,
                                                loadingError: null,
                                                localStorageError: null
                                            }), e.prev = 2, a = Object(Oe.last)(t.split("/")), e.next = 6, window.fetch(t);
                                        case 6:
                                            return o = e.sent, e.next = 9, o.text();
                                        case 9:
                                            r = e.sent, c = {
                                                loadedFromUrl: t,
                                                name: te(a, ".json"),
                                                content: {
                                                    text: r
                                                }
                                            }, Ct("Loaded file from url", {
                                                data: r,
                                                name: a
                                            }), n.setState({
                                                documentSequenceNr: n.state.documentSequenceNr + 1,
                                                documentSource: "url",
                                                document: c,
                                                loading: !1,
                                                unsavedChanges: !1
                                            }), s = "url.".concat(t), n.hash.setValue(n.props.hashKey, s), e.next = 22;
                                            break;
                                        case 17:
                                            e.prev = 17, e.t0 = e.catch(2), console.error(e.t0), ee(e.t0), n.setState({
                                                loading: !1,
                                                loadingError: e.t0
                                            });
                                        case 22:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 17]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), n.saveToUrl = function() {
                            var e = Object(u.a)(i.a.mark((function e(t) {
                                var a, o, r, c;
                                return i.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return Ct("Saving document to url...", {
                                                url: t
                                            }), e.prev = 1, e.next = 4, n.updateDocumentProperties({
                                                savedToUrl: t
                                            });
                                        case 4:
                                            return a = n.state.document.content, o = "string" === typeof a.text ? a.text : JSON.stringify(a.json, null, n.props.indentation), e.next = 8, window.fetch(t, {
                                                method: "POST",
                                                body: o
                                            });
                                        case 8:
                                            return r = e.sent, e.next = 11, r.text();
                                        case 11:
                                            c = e.sent, r.status >= 200 && r.status < 300 ? (Ct("Document successfully saved to url"), Z("Document successfully saved to url.")) : ee(new Error(r.status + " " + r.statusText + " " + c)), e.next = 19;
                                            break;
                                        case 15:
                                            e.prev = 15, e.t0 = e.catch(1), console.error(e.t0), ee(e.t0);
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 15]
                                ])
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), n.state = {
                            documentSequenceNr: 1,
                            compoundKey: null,
                            document: Lt,
                            documentSource: null,
                            unsavedChanges: !1,
                            loading: !0,
                            loadingError: null,
                            localStorageError: null
                        }, n.hash = xt(), n.hash.onChange(e.hashKey, (function(t) {
                            Ct("hash changed", {
                                key: e.hashKey,
                                compoundKey: t
                            }), t !== n.state.compoundKey && (n.setState({
                                compoundKey: t
                            }), n.loadDocument(t))
                        })), n
                    }
                    return Object(E.a)(t, e), Object(f.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.hash.getValue(this.props.hashKey);
                            this.loadDocument(e)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.hash.destroy(), this.hash = null
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state,
                                t = e.loading,
                                n = e.document,
                                a = e.loadingError,
                                o = e.unsavedChanges,
                                r = e.localStorageError;
                            return this.props.children ? this.props.children({
                                documentSequenceNr: this.state.documentSequenceNr,
                                loading: t,
                                document: n,
                                documentSource: this.state.documentSource,
                                unsavedChanges: o,
                                error: a,
                                localStorageError: r,
                                newDocument: this.newDocument,
                                updateDocument: this.updateDocument,
                                updateDocumentProperties: this.updateDocumentProperties,
                                renameDocument: this.renameDocument,
                                loadDocument: this.loadDocument,
                                loadFromCloud: this.loadFromCloud,
                                loadFromUrl: this.loadFromUrl,
                                loadFromDisk: this.loadFromDisk,
                                saveToCloud: this.saveToCloud,
                                saveToDisk: this.saveToDisk,
                                saveToJson: this.saveToJson,
                                saveToUrl: this.saveToUrl,
                                saveChanges: this.saveChanges,
                                deleteDocument: this.deleteDocument
                            }) : null
                        }
                    }]), t
                }(a.PureComponent);

            function Pt(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return Object(l.a)({}, e, {}, t, {
                    updated: be()
                })
            }

            function At(e) {
                return Mt.apply(this, arguments)
            }

            function Mt() {
                return (Mt = Object(u.a)(i.a.mark((function e(t) {
                    return i.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", new Promise((function(e) {
                                    var n = new FileReader;
                                    n.onload = function(n) {
                                        var a = n.target.result,
                                            o = t.name;
                                        e({
                                            name: o,
                                            data: a
                                        })
                                    }, n.readAsText(t)
                                })));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Ft(e, t) {
                var n = Object(a.useState)((function() {
                        try {
                            var n = window.localStorage.getItem(e);
                            return n ? JSON.parse(n) : t
                        } catch (a) {
                            return console.error(a), t
                        }
                    })),
                    o = Object(d.a)(n, 2),
                    r = o[0],
                    c = o[1],
                    s = Object(a.useCallback)((function(t) {
                        try {
                            var n = t instanceof Function ? t(r) : t;
                            c(n), window.localStorage.setItem(e, JSON.stringify(n))
                        } catch (a) {
                            console.error(a)
                        }
                    }), [e, r]);
                return [r, s]
            }
            var Jt = H()("jsoneditoronline:useSplitter");
            var Rt = n(106),
                Ut = n.n(Rt);

            function _t(e, t) {
                var n = {};
                return function e(t, a, o) {
                    if (Array.isArray(t) && Array.isArray(a)) {
                        for (var r = !1, c = 0; c < t.length; c++) {
                            e(t[c], a[c], o + "/" + c) && (r = !0)
                        }
                        return r && !n[o] && (n[o] = "child-changed"), r
                    }
                    if (Wt(t) && Wt(a)) {
                        var s = !1;
                        return Object.keys(t).forEach((function(n) {
                            e(t[n], a[n], o + "/" + n) && (s = !0)
                        })), s && !n[o] && (n[o] = "child-changed"), s
                    }
                    return t !== a && ((Array.isArray(t) || Wt(t) || Array.isArray(a) || Wt(a)) && qt(t, (function(e, t) {
                        return n[t] = "removed"
                    }), o), n[o] = void 0 === a ? "removed" : "changed", !0)
                }(e, t, "") && !n[""] && (n[""] = "child-changed"), n
            }

            function Kt(e, t) {
                var n = {};
                return function e(t, a, o) {
                    if (Array.isArray(a) && Array.isArray(t)) {
                        for (var r = !1, c = 0; c < a.length; c++) {
                            e(t[c], a[c], o + "/" + c) && (r = !0)
                        }
                        return r && !n[o] && (n[o] = "child-changed"), r
                    }
                    if (Wt(a) && Wt(t)) {
                        var s = !1;
                        return Object.keys(a).forEach((function(n) {
                            e(t[n], a[n], o + "/" + n) && (s = !0)
                        })), s && !n[o] && (n[o] = "child-changed"), s
                    }
                    return t !== a && ((Array.isArray(t) || Wt(t) || Array.isArray(a) || Wt(a)) && qt(a, (function(e, t) {
                        return n[t] = "added"
                    }), o), n[o] = void 0 === t ? "added" : "changed", !0)
                }(e, t, "") && !n[""] && (n[""] = "child-changed"), n
            }

            function qt(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                if (t(e, n), Array.isArray(e))
                    for (var a = 0; a < e.length; a++) qt(e[a], t, n + "/" + a);
                else Wt(e) && Object.keys(e).forEach((function(a) {
                    qt(e[a], t, n + "/" + a)
                }))
            }

            function Wt(e) {
                return null != e && "object" === typeof e && !Array.isArray(e)
            }
            var Bt = n(107),
                Vt = n.n(Bt),
                Ht = H()("jsoneditoronline:App"),
                zt = function(e) {
                    var t;
                    return function() {
                        var n = e.apply(void 0, arguments);
                        return Object(Oe.isEqual)(n, t) ? t : (t = n, n)
                    }
                }((function(e, t) {
                    return {
                        diffLeft: _t(e, t),
                        diffRight: Kt(e, t)
                    }
                })),
                Xt = Vt()();
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            var Gt = H()("jsoneditoronline:index");
            console.info('To see logging output in the console, set localStorage.debug and refresh the page. For example: localStorage.debug="jsoneditoronline:*"'), console.info("Current value of localStorage.debug:", window.localStorage.debug);
            var Yt = /\?(id|url|json)=(.+)/.exec(window.location.search);
            if (Yt) {
                var $t = Yt[1],
                    Qt = Yt[2],
                    Zt = "id" === $t ? "cloud" : $t;
                Gt("Change legacy url search parameters into hash parameters"), window.location.href = "".concat(window.location.origin, "/#left=").concat(Zt, ".").concat(Qt)
            }
            c.a.render(o.a.createElement((function() {
                var e = Ft("indentation", 2),
                    t = Object(d.a)(e, 2),
                    n = t[0],
                    r = t[1],
                    c = Ft("leftMode", "code"),
                    s = Object(d.a)(c, 2),
                    h = s[0],
                    f = s[1],
                    v = Ft("rightMode", "tree"),
                    b = Object(d.a)(v, 2),
                    E = b[0],
                    w = b[1],
                    y = Ft("splitterValue", .5),
                    O = Object(d.a)(y, 2),
                    j = O[0],
                    N = O[1],
                    x = Object(a.useState)("LEFT_PANEL"),
                    S = Object(d.a)(x, 2),
                    k = S[0],
                    C = S[1],
                    D = Ft("showDiff", !1),
                    T = Object(d.a)(D, 2),
                    L = T[0],
                    I = T[1];
                Object(a.useEffect)((function() {
                    var e = pe("lastHash", "");

                    function t() {
                        var e = window.location.hash;
                        Ht("save lastHash", {
                            lastHash: e
                        }), he("lastHash", e)
                    }
                    return "" === window.location.hash && "" !== e && (Ht("load lastHash", {
                            lastHash: e
                        }), window.location.hash = e), window.addEventListener("hashchange", t), window.addEventListener("unload", t),
                        function() {
                            window.removeEventListener("hashchange", t), window.removeEventListener("unload", t)
                        }
                }));
                var P = Object(a.useRef)(null),
                    A = Object(a.useRef)(null);
                ! function(e) {
                    var t = e.setSplitterValue,
                        n = e.refContainer,
                        o = e.refSplitter;
                    Object(a.useEffect)((function() {
                        if (o && o.current && n && n.current) {
                            var e = n.current,
                                a = o.current,
                                r = {
                                    startMouseX: null,
                                    startSplitterX: null,
                                    offsetX: null
                                };
                            return a.addEventListener("mousedown", c),
                                function() {
                                    a.removeEventListener("mousedown", c)
                                }
                        }

                        function c(n) {
                            n.preventDefault();
                            var o = e.getBoundingClientRect(),
                                c = a.getBoundingClientRect();

                            function s(e) {
                                e.preventDefault();
                                var n = e.clientX + r.offsetX,
                                    a = o.width - c.width,
                                    s = a > 0 ? (n - o.left) / a : .5;
                                Jt("mouse move", {
                                    splitterX: n,
                                    width: a,
                                    newValue: s
                                }), t(s)
                            }
                            r.startMouseX = n.clientX, r.startSplitterX = c.left, r.offsetX = r.startSplitterX - r.startMouseX, Jt("mouse down", n.clientX), document.body.addEventListener("mousemove", s), document.body.addEventListener("mouseup", (function e(t) {
                                t.preventDefault(), document.body.removeEventListener("mousemove", s), document.body.removeEventListener("mouseup", e), Jt("mouse up")
                            }))
                        }
                    }), [n, o, t])
                }({
                    setSplitterValue: N,
                    refContainer: P,
                    refSplitter: A
                });
                var M = j >= .15,
                    F = j <= .85,
                    U = M && F,
                    _ = M ? F ? m.l : m.f : m.g;

                function K() {
                    M || N(.2), F || N(.8)
                }
                return o.a.createElement("div", {
                    className: "app"
                }, o.a.createElement(J, null), o.a.createElement(It, {
                    hashKey: "left",
                    indentation: n,
                    loadDefaultDocumentOnFirstUse: !0
                }, (function(e) {
                    return o.a.createElement(It, {
                        hashKey: "right",
                        indentation: n
                    }, (function(t) {
                        var a = [{
                            panelId: "LEFT_PANEL",
                            documentSource: e.documentSource,
                            document: e.document
                        }, {
                            panelId: "RIGHT_PANEL",
                            documentSource: t.documentSource,
                            document: t.document
                        }];

                        function c() {
                            return (c = Object(u.a)(i.a.mark((function a() {
                                var o, r;
                                return i.a.wrap((function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return o = e.document.content, r = "text" in o && "tree" === h && "code" === E, a.next = 4, t.updateDocumentProperties({
                                                content: r ? {
                                                    text: se(o.text, n)
                                                } : o
                                            });
                                        case 4:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))).apply(this, arguments)
                        }

                        function s() {
                            return (s = Object(u.a)(i.a.mark((function a() {
                                var o, r;
                                return i.a.wrap((function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            return o = t.document.content, r = "text" in o && "tree" === E && "code" === h, a.next = 4, e.updateDocumentProperties({
                                                content: r ? {
                                                    text: se(o.text, n)
                                                } : o
                                            });
                                        case 4:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))).apply(this, arguments)
                        }
                        var d = function() {
                            var n = "preview" !== h && "preview" !== E;
                            try {
                                return L && n ? zt(re(e.document.content), re(t.document.content)) : void 0
                            } catch (a) {
                                return
                            }
                        }();

                        function v(n) {
                            if (r(n), "string" === typeof e.document.content.text) try {
                                var a = re(e.document.content),
                                    o = JSON.stringify(a, null, n);
                                e.updateDocument(Object(l.a)({}, e.document, {
                                    content: {
                                        text: o
                                    }
                                }))
                            } catch (i) {}
                            if ("string" === typeof t.document.content.text) try {
                                var c = re(t.document.content),
                                    s = JSON.stringify(c, null, n);
                                t.updateDocument(Object(l.a)({}, t.document, {
                                    content: {
                                        text: s
                                    }
                                }))
                            } catch (i) {}
                        }

                        function b(n, a) {
                            [e, t].filter((function(e) {
                                return e.documentSource === n && e.document._id === a
                            })).forEach((function(e) {
                                Ht("close document", e), e.loadDocument(null)
                            }))
                        }
                        return window.document.title = function(e, t) {
                            var n = "JSON编辑器",
                                a = [e, t].filter((function(e) {
                                    return !Object(Oe.isEmpty)(e)
                                }));
                            return Object(Oe.isEmpty)(a) ? n : "[".concat(a.join(" | "), "] \xa0").concat(n)
                        }(e.document.name, t.document.name),
                        o.a.createElement("div", {
                            className: "body"
                        }, o.a.createElement("div", {
                            ref: P,
                            className: "contents-panel"
                        }, M && o.a.createElement("div", {
                            className: "left-panel",
                            style: {
                                flex: U ? j : 1
                            },
                            onKeyDown: function() {
                                return C("LEFT_PANEL")
                            },
                            onMouseDown: function() {
                                return C("LEFT_PANEL")
                            }
                        }, o.a.createElement(jt, Object.assign({
                            key: e.documentSequenceNr,
                            panelId: "LEFT_PANEL",
                            focus: "LEFT_PANEL" === k,
                            ajv: Xt,
                            mode: h,
                            setMode: f,
                            indentation: n,
                            setIndentation: v,
                            allPanels: a,
                            closeAndDeleteDocument: function() {
                                var t = Object(u.a)(i.a.mark((function t(n, a) {
                                    return i.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return b(n, a), t.next = 3, e.deleteDocument(n, a);
                                            case 3:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function(e, n) {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }, e, {
                            diff: d && d.diffLeft
                        }))), o.a.createElement("div", {
                            className: "center-panel"
                        }, U && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                            className: "empty-space-top"
                        }), o.a.createElement("div", {
                            className: "actions"
                        }, o.a.createElement("button", {
                            onClick: function() {
                                return c.apply(this, arguments)
                            },
                            title: "Copy the contents of the left panel to the right panel"
                        }, "", o.a.createElement(p.a, {
                            icon: m.b
                        })), o.a.createElement("button", {
                            onClick: function() {
                                return s.apply(this, arguments)
                            },
                            title: "Copy the contents of the right panel to the left panel"
                        }, o.a.createElement(p.a, {
                            icon: m.a
                        }), ""), o.a.createElement("button", {
                            onClick: function() {
                                if (L) I(!1);
                                else if (I(!0), "tree" !== h || "tree" !== E) var e = $({
                                    text: o.a.createElement(o.a.Fragment, null, "Highlighting of differences between left and right panel is only available in tree mode.", " ",
                                    o.a.createElement("button", {
                                        className: "action",
                                        onClick: function(t) {
                                            t.preventDefault(), f("tree"), w("tree"), e.close()
                                        }
                                    }, "Switch to tree mode")),
                                    closable: !0,
                                    className: "wide"
                                })
                            },
                            title: "Highlight the differences between left and right panel contents"
                        }, o.a.createElement(p.a, {
                            icon: L ? m.e : R.c
                        }), ""))), o.a.createElement("div", {
                            ref: A,
                            onClick: K,
                            className: "draggable-splitter",
                            title: "Drag left or right to change the width of the panels"
                        }, o.a.createElement("div", {
                            className: "draggable-splitter-icon"
                        }, o.a.createElement(p.a, {
                            icon: _,
                            fixedWidth: !0
                        })))), F && o.a.createElement("div", {
                            className: "right-panel",
                            style: {
                                flex: U ? 1 - j : 1
                            },
                            onKeyDown: function() {
                                return C("RIGHT_PANEL")
                            },
                            onMouseDown: function() {
                                return C("RIGHT_PANEL")
                            }
                        }, o.a.createElement(jt, Object.assign({
                            key: t.documentSequenceNr,
                            panelId: "RIGHT_PANEL",
                            focus: "RIGHT_PANEL" === k,
                            ajv: Xt,
                            mode: E,
                            setMode: w,
                            indentation: n,
                            setIndentation: v,
                            allPanels: a,
                            closeAndDeleteDocument: function() {
                                var e = Object(u.a)(i.a.mark((function e(n, a) {
                                    return i.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return b(n, a), e.next = 3, t.deleteDocument(n, a);
                                            case 3:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t, n) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, t, {
                            diff: d && d.diffRight
                        })))))
                    }))
                })))
            }), null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            }))
        },
        98: function(e) {
            e.exports = {
                "name": "jsoneditoronline",
                "version": "5.2.4",
                "description": "A web-based tool to view, edit and format JSON",
                "private": true,
                "license": "UNLICENSED",
                "homepage": "https://jsoneditoronline.org",
                "dependencies": {
                    "@fortawesome/fontawesome-svg-core": "1.2.27",
                    "@fortawesome/free-regular-svg-icons": "5.12.1",
                    "@fortawesome/free-solid-svg-icons": "5.12.1",
                    "@fortawesome/react-fontawesome": "0.1.8",
                    "ajv": "6.11.0",
                    "classnames": "2.2.6",
                    "date-fns": "2.9.0",
                    "debug": "4.1.1",
                    "idb-keyval": "3.2.0",
                    "is-url": "1.2.4",
                    "jsoneditor": "8.6.1",
                    "lodash": "4.17.15",
                    "markdown-to-html": "0.0.13",
                    "prop-types": "15.7.2",
                    "react": "16.12.0",
                    "react-async-hook": "3.6.1",
                    "react-container-dimensions": "1.4.1",
                    "react-cookie-banner": "4.1.0",
                    "react-copy-to-clipboard": "5.0.2",
                    "react-dom": "16.12.0",
                    "react-file-drop": "0.2.8",
                    "react-tooltip-lite": "1.11.2"
                },
                "devDependencies": {
                    "node-sass": "4.13.1",
                    "react-scripts": "3.4.0",
                    "standard": "14.3.1"
                },
                "scripts": {
                    "start": "react-scripts start",
                    "build": "npm run build-app && npm run build-changelog",
                    "build-app": "react-scripts build",
                    "build-changelog": "github-markdown CHANGELOG.md --title \'Changelog | JSON Editor Online\' --flavor \'markdown\' --stylesheet \'markdown.css\' > build/changelog.html",
                    "lint": "standard --env jest src/*.js src/**/*.js",
                    "test": "react-scripts test",
                    "deploy": "npm run build && aws s3 sync --delete build s3://jsoneditoronline.org"
                },
                "browserslist": {
                    "production": [">0.2%",
                        "not dead",
                        "not op_mini all"],
                    "development": ["last 1 chrome version",
                        "last 1 firefox version",
                        "last 1 safari version"]
                }
            }
        }
    },
    [
        [109, 1, 2]
    ]
]);
//# sourceMappingURL=main.b9b56ef8.chunk.js.map