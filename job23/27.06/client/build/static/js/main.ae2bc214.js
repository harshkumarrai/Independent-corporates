/*! For license information please see main.ae2bc214.js.LICENSE.txt */
(() => {
  var e = {
      497: (e, t, n) => {
        "use strict";
        var r = n(837);
        function a() {}
        function o() {}
        (o.resetWarningCache = a),
          (e.exports = function () {
            function e(e, t, n, a, o, i) {
              if (i !== r) {
                var s = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((s.name = "Invariant Violation"), s);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var n = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: o,
              resetWarningCache: a,
            };
            return (n.PropTypes = n), n;
          });
      },
      173: (e, t, n) => {
        e.exports = n(497)();
      },
      837: (e) => {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      730: (e, t, n) => {
        "use strict";
        var r = n(43),
          a = n(853);
        function o(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          s = {};
        function l(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var u = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function m(e, t, n, r, a, o, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = i);
        }
        var g = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            g[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            g[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              g[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            g[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              g[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            g[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            g[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            g[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            g[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function v(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = g.hasOwnProperty(t) ? g[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, v);
              g[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, v);
            g[t] = new m(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (g.xlinkHref = new m(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            g[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          N = Symbol.for("react.provider"),
          O = Symbol.for("react.context"),
          _ = Symbol.for("react.forward_ref"),
          j = Symbol.for("react.suspense"),
          P = Symbol.for("react.suspense_list"),
          R = Symbol.for("react.memo"),
          T = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var A = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var L = Symbol.iterator;
        function z(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (L && e[L]) || e["@@iterator"])
            ? e
            : null;
        }
        var F,
          D = Object.assign;
        function M(e) {
          if (void 0 === F)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              F = (t && t[1]) || "";
            }
          return "\n" + F + e;
        }
        var I = !1;
        function U(e, t) {
          if (!e || I) return "";
          I = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (c) {
                  var r = c;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (c) {
                  r = c;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (c) {
                r = c;
              }
              e();
            }
          } catch (c) {
            if (c && r && "string" === typeof c.stack) {
              for (
                var a = c.stack.split("\n"),
                  o = r.stack.split("\n"),
                  i = a.length - 1,
                  s = o.length - 1;
                1 <= i && 0 <= s && a[i] !== o[s];

              )
                s--;
              for (; 1 <= i && 0 <= s; i--, s--)
                if (a[i] !== o[s]) {
                  if (1 !== i || 1 !== s)
                    do {
                      if ((i--, 0 > --s || a[i] !== o[s])) {
                        var l = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= i && 0 <= s);
                  break;
                }
            }
          } finally {
            (I = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? M(e) : "";
        }
        function B(e) {
          switch (e.tag) {
            case 5:
              return M(e.type);
            case 16:
              return M("Lazy");
            case 13:
              return M("Suspense");
            case 19:
              return M("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = U(e.type, !1));
            case 11:
              return (e = U(e.type.render, !1));
            case 1:
              return (e = U(e.type, !0));
            default:
              return "";
          }
        }
        function q(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case C:
              return "Profiler";
            case E:
              return "StrictMode";
            case j:
              return "Suspense";
            case P:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case O:
                return (e.displayName || "Context") + ".Consumer";
              case N:
                return (e._context.displayName || "Context") + ".Provider";
              case _:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case R:
                return null !== (t = e.displayName || null)
                  ? t
                  : q(e.type) || "Memo";
              case T:
                (t = e._payload), (e = e._init);
                try {
                  return q(e(t));
                } catch (n) {}
            }
          return null;
        }
        function V(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return q(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function W(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function H(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function $(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = H(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Q(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = H(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Y(e, t) {
          var n = t.checked;
          return D({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function J(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = W(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function G(e, t) {
          X(e, t);
          var n = W(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, W(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && K(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + W(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
          return D({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(o(92));
              if (te(n)) {
                if (1 < n.length) throw Error(o(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: W(n) };
        }
        function oe(e, t) {
          var n = W(t.value),
            r = W(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function se(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function le(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? se(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ce,
          ue,
          fe =
            ((ue = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ce = ce || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ce.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ue(e, t);
                  });
                }
              : ue);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function me(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ge(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = me(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ye = D(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ve(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(o(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(o(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(o(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(o(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          Ee = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(o(280));
            var t = e.stateNode;
            t && ((t = xa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ne(e) {
          Se ? (Ee ? Ee.push(e) : (Ee = [e])) : (Se = e);
        }
        function Oe() {
          if (Se) {
            var e = Se,
              t = Ee;
            if (((Ee = Se = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function _e(e, t) {
          return e(t);
        }
        function je() {}
        var Pe = !1;
        function Re(e, t, n) {
          if (Pe) return e(t, n);
          Pe = !0;
          try {
            return _e(e, t, n);
          } finally {
            (Pe = !1), (null !== Se || null !== Ee) && (je(), Oe());
          }
        }
        function Te(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = xa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(o(231, t, typeof n));
          return n;
        }
        var Ae = !1;
        if (u)
          try {
            var Le = {};
            Object.defineProperty(Le, "passive", {
              get: function () {
                Ae = !0;
              },
            }),
              window.addEventListener("test", Le, Le),
              window.removeEventListener("test", Le, Le);
          } catch (ue) {
            Ae = !1;
          }
        function ze(e, t, n, r, a, o, i, s, l) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (u) {
            this.onError(u);
          }
        }
        var Fe = !1,
          De = null,
          Me = !1,
          Ie = null,
          Ue = {
            onError: function (e) {
              (Fe = !0), (De = e);
            },
          };
        function Be(e, t, n, r, a, o, i, s, l) {
          (Fe = !1), (De = null), ze.apply(Ue, arguments);
        }
        function qe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ve(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function We(e) {
          if (qe(e) !== e) throw Error(o(188));
        }
        function He(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = qe(e))) throw Error(o(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var i = a.alternate;
                if (null === i) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === i.child) {
                  for (i = a.child; i; ) {
                    if (i === n) return We(a), e;
                    if (i === r) return We(a), t;
                    i = i.sibling;
                  }
                  throw Error(o(188));
                }
                if (n.return !== r.return) (n = a), (r = i);
                else {
                  for (var s = !1, l = a.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = a), (r = i);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = a), (n = i);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = i.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = i), (r = a);
                        break;
                      }
                      if (l === r) {
                        (s = !0), (r = i), (n = a);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(o(189));
                  }
                }
                if (n.alternate !== r) throw Error(o(190));
              }
              if (3 !== n.tag) throw Error(o(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? $e(e)
            : null;
        }
        function $e(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = $e(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Qe = a.unstable_scheduleCallback,
          Ke = a.unstable_cancelCallback,
          Ye = a.unstable_shouldYield,
          Je = a.unstable_requestPaint,
          Xe = a.unstable_now,
          Ge = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          ot = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((st(e) / lt) | 0)) | 0;
              },
          st = Math.log,
          lt = Math.LN2;
        var ct = 64,
          ut = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            o = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var s = i & ~a;
            0 !== s ? (r = ft(s)) : 0 !== (o &= i) && (r = ft(o));
          } else 0 !== (i = n & ~a) ? (r = ft(i)) : 0 !== o && (r = ft(o));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (o = t & -t) || (16 === a && 0 !== (4194240 & o)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function mt() {
          var e = ct;
          return 0 === (4194240 & (ct <<= 1)) && (ct = 64), e;
        }
        function gt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = n);
        }
        function vt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - it(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xt,
          kt,
          St,
          Et,
          Ct,
          Nt = !1,
          Ot = [],
          _t = null,
          jt = null,
          Pt = null,
          Rt = new Map(),
          Tt = new Map(),
          At = [],
          Lt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function zt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              _t = null;
              break;
            case "dragenter":
            case "dragleave":
              jt = null;
              break;
            case "mouseover":
            case "mouseout":
              Pt = null;
              break;
            case "pointerover":
            case "pointerout":
              Rt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Tt.delete(t.pointerId);
          }
        }
        function Ft(e, t, n, r, a, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: o,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Dt(e) {
          var t = va(e.target);
          if (null !== t) {
            var n = qe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ve(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Mt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function It(e, t, n) {
          Mt(e) && n.delete(t);
        }
        function Ut() {
          (Nt = !1),
            null !== _t && Mt(_t) && (_t = null),
            null !== jt && Mt(jt) && (jt = null),
            null !== Pt && Mt(Pt) && (Pt = null),
            Rt.forEach(It),
            Tt.forEach(It);
        }
        function Bt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Nt ||
              ((Nt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Ut)));
        }
        function qt(e) {
          function t(t) {
            return Bt(t, e);
          }
          if (0 < Ot.length) {
            Bt(Ot[0], e);
            for (var n = 1; n < Ot.length; n++) {
              var r = Ot[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== _t && Bt(_t, e),
              null !== jt && Bt(jt, e),
              null !== Pt && Bt(Pt, e),
              Rt.forEach(t),
              Tt.forEach(t),
              n = 0;
            n < At.length;
            n++
          )
            (r = At[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < At.length && null === (n = At[0]).blockedOn; )
            Dt(n), null === n.blockedOn && At.shift();
        }
        var Vt = w.ReactCurrentBatchConfig,
          Wt = !0;
        function Ht(e, t, n, r) {
          var a = bt,
            o = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 1), Qt(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = o);
          }
        }
        function $t(e, t, n, r) {
          var a = bt,
            o = Vt.transition;
          Vt.transition = null;
          try {
            (bt = 4), Qt(e, t, n, r);
          } finally {
            (bt = a), (Vt.transition = o);
          }
        }
        function Qt(e, t, n, r) {
          if (Wt) {
            var a = Yt(e, t, n, r);
            if (null === a) Wr(e, t, r, Kt, n), zt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (_t = Ft(_t, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (jt = Ft(jt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Pt = Ft(Pt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var o = a.pointerId;
                    return Rt.set(o, Ft(Rt.get(o) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (o = a.pointerId),
                      Tt.set(o, Ft(Tt.get(o) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((zt(e, r), 4 & t && -1 < Lt.indexOf(e))) {
              for (; null !== a; ) {
                var o = ba(a);
                if (
                  (null !== o && xt(o),
                  null === (o = Yt(e, t, n, r)) && Wr(e, t, r, Kt, n),
                  o === a)
                )
                  break;
                a = o;
              }
              null !== a && r.stopPropagation();
            } else Wr(e, t, r, null, n);
          }
        }
        var Kt = null;
        function Yt(e, t, n, r) {
          if (((Kt = null), null !== (e = va((e = xe(r))))))
            if (null === (t = qe(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = Ve(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Jt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ge()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Gt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Gt,
            r = n.length,
            a = "value" in Xt ? Xt.value : Xt.textContent,
            o = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, o) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            D(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          sn,
          ln,
          cn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          un = an(cn),
          fn = D({}, cn, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = D({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((on = e.screenX - ln.screenX),
                        (sn = e.screenY - ln.screenY))
                      : (sn = on = 0),
                    (ln = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          hn = an(pn),
          mn = an(D({}, pn, { dataTransfer: 0 })),
          gn = an(D({}, fn, { relatedTarget: 0 })),
          yn = an(
            D({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          vn = D({}, cn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(vn),
          wn = an(D({}, cn, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Cn() {
          return En;
        }
        var Nn = D({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          On = an(Nn),
          _n = an(
            D({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          jn = an(
            D({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          Pn = an(
            D({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Rn = D({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Tn = an(Rn),
          An = [9, 13, 27, 32],
          Ln = u && "CompositionEvent" in window,
          zn = null;
        u && "documentMode" in document && (zn = document.documentMode);
        var Fn = u && "TextEvent" in window && !zn,
          Dn = u && (!Ln || (zn && 8 < zn && 11 >= zn)),
          Mn = String.fromCharCode(32),
          In = !1;
        function Un(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== An.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Bn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var qn = !1;
        var Vn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Wn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Vn[e.type] : "textarea" === t;
        }
        function Hn(e, t, n, r) {
          Ne(r),
            0 < (t = $r(t, "onChange")).length &&
              ((n = new un("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var $n = null,
          Qn = null;
        function Kn(e) {
          Mr(e, 0);
        }
        function Yn(e) {
          if (Q(wa(e))) return e;
        }
        function Jn(e, t) {
          if ("change" === e) return t;
        }
        var Xn = !1;
        if (u) {
          var Gn;
          if (u) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Gn = Zn;
          } else Gn = !1;
          Xn = Gn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          $n && ($n.detachEvent("onpropertychange", nr), (Qn = $n = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Yn(Qn)) {
            var t = [];
            Hn(t, Qn, e, xe(e)), Re(Kn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Qn = n), ($n = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Yn(Qn);
        }
        function or(e, t) {
          if ("click" === e) return Yn(t);
        }
        function ir(e, t) {
          if ("input" === e || "change" === e) return Yn(t);
        }
        var sr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function lr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !sr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function cr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function ur(e, t) {
          var n,
            r = cr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = cr(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  o = Math.min(r.start, a);
                (r = void 0 === r.end ? o : Math.min(r.end, a)),
                  !e.extend && o > r && ((a = r), (r = o), (o = a)),
                  (a = ur(n, o));
                var i = ur(n, r);
                a &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  o > r
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var mr = u && "documentMode" in document && 11 >= document.documentMode,
          gr = null,
          yr = null,
          vr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == gr ||
            gr !== K(r) ||
            ("selectionStart" in (r = gr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (vr && lr(vr, r)) ||
              ((vr = r),
              0 < (r = $r(yr, "onSelect")).length &&
                ((t = new un("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = gr))));
        }
        function xr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          Sr = {},
          Er = {};
        function Cr(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (Sr[e] = n[t]);
          return e;
        }
        u &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Nr = Cr("animationend"),
          Or = Cr("animationiteration"),
          _r = Cr("animationstart"),
          jr = Cr("transitionend"),
          Pr = new Map(),
          Rr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Tr(e, t) {
          Pr.set(e, t), l(t, [e]);
        }
        for (var Ar = 0; Ar < Rr.length; Ar++) {
          var Lr = Rr[Ar];
          Tr(Lr.toLowerCase(), "on" + (Lr[0].toUpperCase() + Lr.slice(1)));
        }
        Tr(Nr, "onAnimationEnd"),
          Tr(Or, "onAnimationIteration"),
          Tr(_r, "onAnimationStart"),
          Tr("dblclick", "onDoubleClick"),
          Tr("focusin", "onFocus"),
          Tr("focusout", "onBlur"),
          Tr(jr, "onTransitionEnd"),
          c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var zr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Fr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(zr)
          );
        function Dr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, i, s, l, c) {
              if ((Be.apply(this, arguments), Fe)) {
                if (!Fe) throw Error(o(198));
                var u = De;
                (Fe = !1), (De = null), Me || ((Me = !0), (Ie = u));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Mr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var s = r[i],
                    l = s.instance,
                    c = s.currentTarget;
                  if (((s = s.listener), l !== o && a.isPropagationStopped()))
                    break e;
                  Dr(a, s, c), (o = l);
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((l = (s = r[i]).instance),
                    (c = s.currentTarget),
                    (s = s.listener),
                    l !== o && a.isPropagationStopped())
                  )
                    break e;
                  Dr(a, s, c), (o = l);
                }
            }
          }
          if (Me) throw ((e = Ie), (Me = !1), (Ie = null), e);
        }
        function Ir(e, t) {
          var n = t[ma];
          void 0 === n && (n = t[ma] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Vr(t, e, 2, !1), n.add(r));
        }
        function Ur(e, t, n) {
          var r = 0;
          t && (r |= 4), Vr(n, e, r, t);
        }
        var Br = "_reactListening" + Math.random().toString(36).slice(2);
        function qr(e) {
          if (!e[Br]) {
            (e[Br] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Fr.has(t) || Ur(t, !1, e), Ur(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Br] || ((t[Br] = !0), Ur("selectionchange", !1, t));
          }
        }
        function Vr(e, t, n, r) {
          switch (Jt(t)) {
            case 1:
              var a = Ht;
              break;
            case 4:
              a = $t;
              break;
            default:
              a = Qt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Ae ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Wr(e, t, n, r, a) {
          var o = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var i = r.tag;
              if (3 === i || 4 === i) {
                var s = r.stateNode.containerInfo;
                if (s === a || (8 === s.nodeType && s.parentNode === a)) break;
                if (4 === i)
                  for (i = r.return; null !== i; ) {
                    var l = i.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = i.stateNode.containerInfo) === a ||
                        (8 === l.nodeType && l.parentNode === a))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== s; ) {
                  if (null === (i = va(s))) return;
                  if (5 === (l = i.tag) || 6 === l) {
                    r = o = i;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Re(function () {
            var r = o,
              a = xe(n),
              i = [];
            e: {
              var s = Pr.get(e);
              if (void 0 !== s) {
                var l = un,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = On;
                    break;
                  case "focusin":
                    (c = "focus"), (l = gn);
                    break;
                  case "focusout":
                    (c = "blur"), (l = gn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = gn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = jn;
                    break;
                  case Nr:
                  case Or:
                  case _r:
                    l = yn;
                    break;
                  case jr:
                    l = Pn;
                    break;
                  case "scroll":
                    l = dn;
                    break;
                  case "wheel":
                    l = Tn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = _n;
                }
                var u = 0 !== (4 & t),
                  f = !u && "scroll" === e,
                  d = u ? (null !== s ? s + "Capture" : null) : s;
                u = [];
                for (var p, h = r; null !== h; ) {
                  var m = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== m &&
                      ((p = m),
                      null !== d &&
                        null != (m = Te(h, d)) &&
                        u.push(Hr(h, m, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < u.length &&
                  ((s = new l(s, c, null, n, a)),
                  i.push({ event: s, listeners: u }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!va(c) && !c[ha])) &&
                  (l || s) &&
                  ((s =
                    a.window === a
                      ? a
                      : (s = a.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (c = (c = n.relatedTarget || n.toElement)
                          ? va(c)
                          : null) &&
                        (c !== (f = qe(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((l = null), (c = r)),
                  l !== c))
              ) {
                if (
                  ((u = hn),
                  (m = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((u = _n),
                    (m = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == l ? s : wa(l)),
                  (p = null == c ? s : wa(c)),
                  ((s = new u(m, h + "leave", l, n, a)).target = f),
                  (s.relatedTarget = p),
                  (m = null),
                  va(a) === r &&
                    (((u = new u(d, h + "enter", c, n, a)).target = p),
                    (u.relatedTarget = f),
                    (m = u)),
                  (f = m),
                  l && c)
                )
                  e: {
                    for (d = c, h = 0, p = u = l; p; p = Qr(p)) h++;
                    for (p = 0, m = d; m; m = Qr(m)) p++;
                    for (; 0 < h - p; ) (u = Qr(u)), h--;
                    for (; 0 < p - h; ) (d = Qr(d)), p--;
                    for (; h--; ) {
                      if (u === d || (null !== d && u === d.alternate)) break e;
                      (u = Qr(u)), (d = Qr(d));
                    }
                    u = null;
                  }
                else u = null;
                null !== l && Kr(i, s, l, u, !1),
                  null !== c && null !== f && Kr(i, f, c, u, !0);
              }
              if (
                "select" ===
                  (l =
                    (s = r ? wa(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === l && "file" === s.type)
              )
                var g = Jn;
              else if (Wn(s))
                if (Xn) g = ir;
                else {
                  g = ar;
                  var y = rr;
                }
              else
                (l = s.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) &&
                  (g = or);
              switch (
                (g && (g = g(e, r))
                  ? Hn(i, g, n, a)
                  : (y && y(e, s, r),
                    "focusout" === e &&
                      (y = s._wrapperState) &&
                      y.controlled &&
                      "number" === s.type &&
                      ee(s, "number", s.value)),
                (y = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Wn(y) || "true" === y.contentEditable) &&
                    ((gr = y), (yr = r), (vr = null));
                  break;
                case "focusout":
                  vr = yr = gr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(i, n, a);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  wr(i, n, a);
              }
              var v;
              if (Ln)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                qn
                  ? Un(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Dn &&
                  "ko" !== n.locale &&
                  (qn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && qn && (v = en())
                    : ((Gt = "value" in (Xt = a) ? Xt.value : Xt.textContent),
                      (qn = !0))),
                0 < (y = $r(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  i.push({ event: b, listeners: y }),
                  v ? (b.data = v) : null !== (v = Bn(n)) && (b.data = v))),
                (v = Fn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Bn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((In = !0), Mn);
                        case "textInput":
                          return (e = t.data) === Mn && In ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (qn)
                        return "compositionend" === e || (!Ln && Un(e, t))
                          ? ((e = en()), (Zt = Gt = Xt = null), (qn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Dn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = $r(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  i.push({ event: a, listeners: r }),
                  (a.data = v));
            }
            Mr(i, t);
          });
        }
        function Hr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function $r(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              o = a.stateNode;
            5 === a.tag &&
              null !== o &&
              ((a = o),
              null != (o = Te(e, n)) && r.unshift(Hr(e, o, a)),
              null != (o = Te(e, t)) && r.push(Hr(e, o, a))),
              (e = e.return);
          }
          return r;
        }
        function Qr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, t, n, r, a) {
          for (var o = t._reactName, i = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              c = s.stateNode;
            if (null !== l && l === r) break;
            5 === s.tag &&
              null !== c &&
              ((s = c),
              a
                ? null != (l = Te(n, o)) && i.unshift(Hr(n, l, s))
                : a || (null != (l = Te(n, o)) && i.push(Hr(n, l, s)))),
              (n = n.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Yr = /\r\n?/g,
          Jr = /\u0000|\uFFFD/g;
        function Xr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Yr, "\n")
            .replace(Jr, "");
        }
        function Gr(e, t, n) {
          if (((t = Xr(t)), Xr(e) !== t && n)) throw Error(o(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          oa = "function" === typeof Promise ? Promise : void 0,
          ia =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof oa
              ? function (e) {
                  return oa.resolve(null).then(e).catch(sa);
                }
              : ra;
        function sa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function la(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void qt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          qt(t);
        }
        function ca(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ua(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          ma = "__reactEvents$" + fa,
          ga = "__reactListeners$" + fa,
          ya = "__reactHandles$" + fa;
        function va(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ua(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ua(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(o(33));
        }
        function xa(e) {
          return e[pa] || null;
        }
        var ka = [],
          Sa = -1;
        function Ea(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > Sa || ((e.current = ka[Sa]), (ka[Sa] = null), Sa--);
        }
        function Na(e, t) {
          Sa++, (ka[Sa] = e.current), (e.current = t);
        }
        var Oa = {},
          _a = Ea(Oa),
          ja = Ea(!1),
          Pa = Oa;
        function Ra(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Oa;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            o = {};
          for (a in n) o[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function Ta(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Aa() {
          Ca(ja), Ca(_a);
        }
        function La(e, t, n) {
          if (_a.current !== Oa) throw Error(o(168));
          Na(_a, t), Na(ja, n);
        }
        function za(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(o(108, V(e) || "Unknown", a));
          return D({}, n, r);
        }
        function Fa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Oa),
            (Pa = _a.current),
            Na(_a, e),
            Na(ja, ja.current),
            !0
          );
        }
        function Da(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(o(169));
          n
            ? ((e = za(e, t, Pa)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(ja),
              Ca(_a),
              Na(_a, e))
            : Ca(ja),
            Na(ja, n);
        }
        var Ma = null,
          Ia = !1,
          Ua = !1;
        function Ba(e) {
          null === Ma ? (Ma = [e]) : Ma.push(e);
        }
        function qa() {
          if (!Ua && null !== Ma) {
            Ua = !0;
            var e = 0,
              t = bt;
            try {
              var n = Ma;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ma = null), (Ia = !1);
            } catch (a) {
              throw (null !== Ma && (Ma = Ma.slice(e + 1)), Qe(Ze, qa), a);
            } finally {
              (bt = t), (Ua = !1);
            }
          }
          return null;
        }
        var Va = [],
          Wa = 0,
          Ha = null,
          $a = 0,
          Qa = [],
          Ka = 0,
          Ya = null,
          Ja = 1,
          Xa = "";
        function Ga(e, t) {
          (Va[Wa++] = $a), (Va[Wa++] = Ha), (Ha = e), ($a = t);
        }
        function Za(e, t, n) {
          (Qa[Ka++] = Ja), (Qa[Ka++] = Xa), (Qa[Ka++] = Ya), (Ya = e);
          var r = Ja;
          e = Xa;
          var a = 32 - it(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var o = 32 - it(t) + a;
          if (30 < o) {
            var i = a - (a % 5);
            (o = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (Ja = (1 << (32 - it(t) + a)) | (n << a) | r),
              (Xa = o + e);
          } else (Ja = (1 << o) | (n << a) | r), (Xa = e);
        }
        function eo(e) {
          null !== e.return && (Ga(e, 1), Za(e, 1, 0));
        }
        function to(e) {
          for (; e === Ha; )
            (Ha = Va[--Wa]), (Va[Wa] = null), ($a = Va[--Wa]), (Va[Wa] = null);
          for (; e === Ya; )
            (Ya = Qa[--Ka]),
              (Qa[Ka] = null),
              (Xa = Qa[--Ka]),
              (Qa[Ka] = null),
              (Ja = Qa[--Ka]),
              (Qa[Ka] = null);
        }
        var no = null,
          ro = null,
          ao = !1,
          oo = null;
        function io(e, t) {
          var n = Rc(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function so(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (no = e), (ro = ca(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (no = e), (ro = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ya ? { id: Ja, overflow: Xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Rc(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (no = e),
                (ro = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function lo(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function co(e) {
          if (ao) {
            var t = ro;
            if (t) {
              var n = t;
              if (!so(e, t)) {
                if (lo(e)) throw Error(o(418));
                t = ca(n.nextSibling);
                var r = no;
                t && so(e, t)
                  ? io(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
              }
            } else {
              if (lo(e)) throw Error(o(418));
              (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
            }
          }
        }
        function uo(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          no = e;
        }
        function fo(e) {
          if (e !== no) return !1;
          if (!ao) return uo(e), (ao = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ro))
          ) {
            if (lo(e)) throw (po(), Error(o(418)));
            for (; t; ) io(e, t), (t = ca(t.nextSibling));
          }
          if ((uo(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(o(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ro = ca(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ro = null;
            }
          } else ro = no ? ca(e.stateNode.nextSibling) : null;
          return !0;
        }
        function po() {
          for (var e = ro; e; ) e = ca(e.nextSibling);
        }
        function ho() {
          (ro = no = null), (ao = !1);
        }
        function mo(e) {
          null === oo ? (oo = [e]) : oo.push(e);
        }
        var go = w.ReactCurrentBatchConfig;
        function yo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(o(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(o(147, e));
              var a = r,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(o(284));
            if (!n._owner) throw Error(o(290, e));
          }
          return e;
        }
        function vo(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              o(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function bo(e) {
          return (0, e._init)(e._payload);
        }
        function wo(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Ac(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Dc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var o = n.type;
            return o === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === o ||
                  ("object" === typeof o &&
                    null !== o &&
                    o.$$typeof === T &&
                    bo(o) === t.type))
              ? (((r = a(t, n.props)).ref = yo(e, t, n)), (r.return = e), r)
              : (((r = Lc(n.type, n.key, n.props, null, e.mode, r)).ref = yo(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function u(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Mc(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = zc(n, e.mode, r, o)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Dc("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = Lc(t.type, t.key, t.props, null, e.mode, n)).ref = yo(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Mc(t, e.mode, n)).return = e), t;
                case T:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || z(t))
                return ((t = zc(t, e.mode, n, null)).return = e), t;
              vo(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === a ? c(e, t, n, r) : null;
                case k:
                  return n.key === a ? u(e, t, n, r) : null;
                case T:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || z(n)) return null !== a ? null : f(e, t, n, r, null);
              vo(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return l(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case T:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || z(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              vo(t, r);
            }
            return null;
          }
          function m(a, o, s, l) {
            for (
              var c = null, u = null, f = o, m = (o = 0), g = null;
              null !== f && m < s.length;
              m++
            ) {
              f.index > m ? ((g = f), (f = null)) : (g = f.sibling);
              var y = p(a, f, s[m], l);
              if (null === y) {
                null === f && (f = g);
                break;
              }
              e && f && null === y.alternate && t(a, f),
                (o = i(y, o, m)),
                null === u ? (c = y) : (u.sibling = y),
                (u = y),
                (f = g);
            }
            if (m === s.length) return n(a, f), ao && Ga(a, m), c;
            if (null === f) {
              for (; m < s.length; m++)
                null !== (f = d(a, s[m], l)) &&
                  ((o = i(f, o, m)),
                  null === u ? (c = f) : (u.sibling = f),
                  (u = f));
              return ao && Ga(a, m), c;
            }
            for (f = r(a, f); m < s.length; m++)
              null !== (g = h(f, a, m, s[m], l)) &&
                (e &&
                  null !== g.alternate &&
                  f.delete(null === g.key ? m : g.key),
                (o = i(g, o, m)),
                null === u ? (c = g) : (u.sibling = g),
                (u = g));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ga(a, m),
              c
            );
          }
          function g(a, s, l, c) {
            var u = z(l);
            if ("function" !== typeof u) throw Error(o(150));
            if (null == (l = u.call(l))) throw Error(o(151));
            for (
              var f = (u = null), m = s, g = (s = 0), y = null, v = l.next();
              null !== m && !v.done;
              g++, v = l.next()
            ) {
              m.index > g ? ((y = m), (m = null)) : (y = m.sibling);
              var b = p(a, m, v.value, c);
              if (null === b) {
                null === m && (m = y);
                break;
              }
              e && m && null === b.alternate && t(a, m),
                (s = i(b, s, g)),
                null === f ? (u = b) : (f.sibling = b),
                (f = b),
                (m = y);
            }
            if (v.done) return n(a, m), ao && Ga(a, g), u;
            if (null === m) {
              for (; !v.done; g++, v = l.next())
                null !== (v = d(a, v.value, c)) &&
                  ((s = i(v, s, g)),
                  null === f ? (u = v) : (f.sibling = v),
                  (f = v));
              return ao && Ga(a, g), u;
            }
            for (m = r(a, m); !v.done; g++, v = l.next())
              null !== (v = h(m, a, g, v.value, c)) &&
                (e &&
                  null !== v.alternate &&
                  m.delete(null === v.key ? g : v.key),
                (s = i(v, s, g)),
                null === f ? (u = v) : (f.sibling = v),
                (f = v));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              ao && Ga(a, g),
              u
            );
          }
          return function e(r, o, i, l) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === S &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case x:
                  e: {
                    for (var c = i.key, u = o; null !== u; ) {
                      if (u.key === c) {
                        if ((c = i.type) === S) {
                          if (7 === u.tag) {
                            n(r, u.sibling),
                              ((o = a(u, i.props.children)).return = r),
                              (r = o);
                            break e;
                          }
                        } else if (
                          u.elementType === c ||
                          ("object" === typeof c &&
                            null !== c &&
                            c.$$typeof === T &&
                            bo(c) === u.type)
                        ) {
                          n(r, u.sibling),
                            ((o = a(u, i.props)).ref = yo(r, u, i)),
                            (o.return = r),
                            (r = o);
                          break e;
                        }
                        n(r, u);
                        break;
                      }
                      t(r, u), (u = u.sibling);
                    }
                    i.type === S
                      ? (((o = zc(i.props.children, r.mode, l, i.key)).return =
                          r),
                        (r = o))
                      : (((l = Lc(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          r.mode,
                          l
                        )).ref = yo(r, o, i)),
                        (l.return = r),
                        (r = l));
                  }
                  return s(r);
                case k:
                  e: {
                    for (u = i.key; null !== o; ) {
                      if (o.key === u) {
                        if (
                          4 === o.tag &&
                          o.stateNode.containerInfo === i.containerInfo &&
                          o.stateNode.implementation === i.implementation
                        ) {
                          n(r, o.sibling),
                            ((o = a(o, i.children || [])).return = r),
                            (r = o);
                          break e;
                        }
                        n(r, o);
                        break;
                      }
                      t(r, o), (o = o.sibling);
                    }
                    ((o = Mc(i, r.mode, l)).return = r), (r = o);
                  }
                  return s(r);
                case T:
                  return e(r, o, (u = i._init)(i._payload), l);
              }
              if (te(i)) return m(r, o, i, l);
              if (z(i)) return g(r, o, i, l);
              vo(r, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== o && 6 === o.tag
                  ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                  : (n(r, o), ((o = Dc(i, r.mode, l)).return = r), (r = o)),
                s(r))
              : n(r, o);
          };
        }
        var xo = wo(!0),
          ko = wo(!1),
          So = Ea(null),
          Eo = null,
          Co = null,
          No = null;
        function Oo() {
          No = Co = Eo = null;
        }
        function _o(e) {
          var t = So.current;
          Ca(So), (e._currentValue = t);
        }
        function jo(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Po(e, t) {
          (Eo = e),
            (No = Co = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (bs = !0), (e.firstContext = null));
        }
        function Ro(e) {
          var t = e._currentValue;
          if (No !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === Co)
            ) {
              if (null === Eo) throw Error(o(308));
              (Co = e), (Eo.dependencies = { lanes: 0, firstContext: e });
            } else Co = Co.next = e;
          return t;
        }
        var To = null;
        function Ao(e) {
          null === To ? (To = [e]) : To.push(e);
        }
        function Lo(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Ao(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            zo(e, r)
          );
        }
        function zo(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Fo = !1;
        function Do(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Mo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Io(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Uo(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & _l))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              zo(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Ao(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            zo(e, n)
          );
        }
        function Bo(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        function qo(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
              } while (null !== n);
              null === o ? (a = o = t) : (o = o.next = t);
            } else a = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Vo(e, t, n, r) {
          var a = e.updateQueue;
          Fo = !1;
          var o = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            s = a.shared.pending;
          if (null !== s) {
            a.shared.pending = null;
            var l = s,
              c = l.next;
            (l.next = null), null === i ? (o = c) : (i.next = c), (i = l);
            var u = e.alternate;
            null !== u &&
              (s = (u = u.updateQueue).lastBaseUpdate) !== i &&
              (null === s ? (u.firstBaseUpdate = c) : (s.next = c),
              (u.lastBaseUpdate = l));
          }
          if (null !== o) {
            var f = a.baseState;
            for (i = 0, u = c = l = null, s = o; ; ) {
              var d = s.lane,
                p = s.eventTime;
              if ((r & d) === d) {
                null !== u &&
                  (u = u.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    m = s;
                  switch (((d = t), (p = n), m.tag)) {
                    case 1:
                      if ("function" === typeof (h = m.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = m.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = D({}, f, d);
                      break e;
                    case 2:
                      Fo = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [s]) : d.push(s));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === u ? ((c = u = p), (l = f)) : (u = u.next = p),
                  (i |= d);
              if (null === (s = s.next)) {
                if (null === (s = a.shared.pending)) break;
                (s = (d = s).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === u && (l = f),
              (a.baseState = l),
              (a.firstBaseUpdate = c),
              (a.lastBaseUpdate = u),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (i |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === o && (a.shared.lanes = 0);
            (Fl |= i), (e.lanes = i), (e.memoizedState = f);
          }
        }
        function Wo(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(o(191, a));
                a.call(r);
              }
            }
        }
        var Ho = {},
          $o = Ea(Ho),
          Qo = Ea(Ho),
          Ko = Ea(Ho);
        function Yo(e) {
          if (e === Ho) throw Error(o(174));
          return e;
        }
        function Jo(e, t) {
          switch ((Na(Ko, t), Na(Qo, e), Na($o, Ho), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ca($o), Na($o, t);
        }
        function Xo() {
          Ca($o), Ca(Qo), Ca(Ko);
        }
        function Go(e) {
          Yo(Ko.current);
          var t = Yo($o.current),
            n = le(t, e.type);
          t !== n && (Na(Qo, e), Na($o, n));
        }
        function Zo(e) {
          Qo.current === e && (Ca($o), Ca(Qo));
        }
        var ei = Ea(0);
        function ti(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ni = [];
        function ri() {
          for (var e = 0; e < ni.length; e++)
            ni[e]._workInProgressVersionPrimary = null;
          ni.length = 0;
        }
        var ai = w.ReactCurrentDispatcher,
          oi = w.ReactCurrentBatchConfig,
          ii = 0,
          si = null,
          li = null,
          ci = null,
          ui = !1,
          fi = !1,
          di = 0,
          pi = 0;
        function hi() {
          throw Error(o(321));
        }
        function mi(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function gi(e, t, n, r, a, i) {
          if (
            ((ii = i),
            (si = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ai.current = null === e || null === e.memoizedState ? Zi : es),
            (e = n(r, a)),
            fi)
          ) {
            i = 0;
            do {
              if (((fi = !1), (di = 0), 25 <= i)) throw Error(o(301));
              (i += 1),
                (ci = li = null),
                (t.updateQueue = null),
                (ai.current = ts),
                (e = n(r, a));
            } while (fi);
          }
          if (
            ((ai.current = Gi),
            (t = null !== li && null !== li.next),
            (ii = 0),
            (ci = li = si = null),
            (ui = !1),
            t)
          )
            throw Error(o(300));
          return e;
        }
        function yi() {
          var e = 0 !== di;
          return (di = 0), e;
        }
        function vi() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ci ? (si.memoizedState = ci = e) : (ci = ci.next = e), ci
          );
        }
        function bi() {
          if (null === li) {
            var e = si.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = li.next;
          var t = null === ci ? si.memoizedState : ci.next;
          if (null !== t) (ci = t), (li = e);
          else {
            if (null === e) throw Error(o(310));
            (e = {
              memoizedState: (li = e).memoizedState,
              baseState: li.baseState,
              baseQueue: li.baseQueue,
              queue: li.queue,
              next: null,
            }),
              null === ci ? (si.memoizedState = ci = e) : (ci = ci.next = e);
          }
          return ci;
        }
        function wi(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function xi(e) {
          var t = bi(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = li,
            a = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== a) {
              var s = a.next;
              (a.next = i.next), (i.next = s);
            }
            (r.baseQueue = a = i), (n.pending = null);
          }
          if (null !== a) {
            (i = a.next), (r = r.baseState);
            var l = (s = null),
              c = null,
              u = i;
            do {
              var f = u.lane;
              if ((ii & f) === f)
                null !== c &&
                  (c = c.next =
                    {
                      lane: 0,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (r = u.hasEagerState ? u.eagerState : e(r, u.action));
              else {
                var d = {
                  lane: f,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === c ? ((l = c = d), (s = r)) : (c = c.next = d),
                  (si.lanes |= f),
                  (Fl |= f);
              }
              u = u.next;
            } while (null !== u && u !== i);
            null === c ? (s = r) : (c.next = l),
              sr(r, t.memoizedState) || (bs = !0),
              (t.memoizedState = r),
              (t.baseState = s),
              (t.baseQueue = c),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (i = a.lane), (si.lanes |= i), (Fl |= i), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function ki(e) {
          var t = bi(),
            n = t.queue;
          if (null === n) throw Error(o(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var s = (a = a.next);
            do {
              (i = e(i, s.action)), (s = s.next);
            } while (s !== a);
            sr(i, t.memoizedState) || (bs = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function Si() {}
        function Ei(e, t) {
          var n = si,
            r = bi(),
            a = t(),
            i = !sr(r.memoizedState, a);
          if (
            (i && ((r.memoizedState = a), (bs = !0)),
            (r = r.queue),
            Fi(Oi.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              i ||
              (null !== ci && 1 & ci.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Ri(9, Ni.bind(null, n, r, a, t), void 0, null),
              null === jl)
            )
              throw Error(o(349));
            0 !== (30 & ii) || Ci(n, t, a);
          }
          return a;
        }
        function Ci(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = si.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (si.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Ni(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), _i(t) && ji(e);
        }
        function Oi(e, t, n) {
          return n(function () {
            _i(t) && ji(e);
          });
        }
        function _i(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function ji(e) {
          var t = zo(e, 1);
          null !== t && nc(t, e, 1, -1);
        }
        function Pi(e) {
          var t = vi();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: wi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Ki.bind(null, si, e)),
            [t.memoizedState, e]
          );
        }
        function Ri(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = si.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (si.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Ti() {
          return bi().memoizedState;
        }
        function Ai(e, t, n, r) {
          var a = vi();
          (si.flags |= e),
            (a.memoizedState = Ri(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Li(e, t, n, r) {
          var a = bi();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== li) {
            var i = li.memoizedState;
            if (((o = i.destroy), null !== r && mi(r, i.deps)))
              return void (a.memoizedState = Ri(t, n, o, r));
          }
          (si.flags |= e), (a.memoizedState = Ri(1 | t, n, o, r));
        }
        function zi(e, t) {
          return Ai(8390656, 8, e, t);
        }
        function Fi(e, t) {
          return Li(2048, 8, e, t);
        }
        function Di(e, t) {
          return Li(4, 2, e, t);
        }
        function Mi(e, t) {
          return Li(4, 4, e, t);
        }
        function Ii(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ui(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Li(4, 4, Ii.bind(null, t, e), n)
          );
        }
        function Bi() {}
        function qi(e, t) {
          var n = bi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mi(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Vi(e, t) {
          var n = bi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && mi(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Wi(e, t, n) {
          return 0 === (21 & ii)
            ? (e.baseState && ((e.baseState = !1), (bs = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = mt()), (si.lanes |= n), (Fl |= n), (e.baseState = !0)),
              t);
        }
        function Hi(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = oi.transition;
          oi.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (oi.transition = r);
          }
        }
        function $i() {
          return bi().memoizedState;
        }
        function Qi(e, t, n) {
          var r = tc(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            Yi(e))
          )
            Ji(t, n);
          else if (null !== (n = Lo(e, t, n, r))) {
            nc(n, e, r, ec()), Xi(n, t, r);
          }
        }
        function Ki(e, t, n) {
          var r = tc(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Yi(e)) Ji(t, a);
          else {
            var o = e.alternate;
            if (
              0 === e.lanes &&
              (null === o || 0 === o.lanes) &&
              null !== (o = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  s = o(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = s), sr(s, i))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((a.next = a), Ao(t))
                      : ((a.next = l.next), (l.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (c) {}
            null !== (n = Lo(e, t, a, r)) &&
              (nc(n, e, r, (a = ec())), Xi(n, t, r));
          }
        }
        function Yi(e) {
          var t = e.alternate;
          return e === si || (null !== t && t === si);
        }
        function Ji(e, t) {
          fi = ui = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function Xi(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), vt(e, n);
          }
        }
        var Gi = {
            readContext: Ro,
            useCallback: hi,
            useContext: hi,
            useEffect: hi,
            useImperativeHandle: hi,
            useInsertionEffect: hi,
            useLayoutEffect: hi,
            useMemo: hi,
            useReducer: hi,
            useRef: hi,
            useState: hi,
            useDebugValue: hi,
            useDeferredValue: hi,
            useTransition: hi,
            useMutableSource: hi,
            useSyncExternalStore: hi,
            useId: hi,
            unstable_isNewReconciler: !1,
          },
          Zi = {
            readContext: Ro,
            useCallback: function (e, t) {
              return (vi().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ro,
            useEffect: zi,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Ai(4194308, 4, Ii.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ai(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ai(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = vi();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = vi();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Qi.bind(null, si, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (vi().memoizedState = e);
            },
            useState: Pi,
            useDebugValue: Bi,
            useDeferredValue: function (e) {
              return (vi().memoizedState = e);
            },
            useTransition: function () {
              var e = Pi(!1),
                t = e[0];
              return (
                (e = Hi.bind(null, e[1])), (vi().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = si,
                a = vi();
              if (ao) {
                if (void 0 === n) throw Error(o(407));
                n = n();
              } else {
                if (((n = t()), null === jl)) throw Error(o(349));
                0 !== (30 & ii) || Ci(r, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                zi(Oi.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                Ri(9, Ni.bind(null, r, i, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = vi(),
                t = jl.identifierPrefix;
              if (ao) {
                var n = Xa;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ja & ~(1 << (32 - it(Ja) - 1))).toString(32) + n)),
                  0 < (n = di++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = pi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          es = {
            readContext: Ro,
            useCallback: qi,
            useContext: Ro,
            useEffect: Fi,
            useImperativeHandle: Ui,
            useInsertionEffect: Di,
            useLayoutEffect: Mi,
            useMemo: Vi,
            useReducer: xi,
            useRef: Ti,
            useState: function () {
              return xi(wi);
            },
            useDebugValue: Bi,
            useDeferredValue: function (e) {
              return Wi(bi(), li.memoizedState, e);
            },
            useTransition: function () {
              return [xi(wi)[0], bi().memoizedState];
            },
            useMutableSource: Si,
            useSyncExternalStore: Ei,
            useId: $i,
            unstable_isNewReconciler: !1,
          },
          ts = {
            readContext: Ro,
            useCallback: qi,
            useContext: Ro,
            useEffect: Fi,
            useImperativeHandle: Ui,
            useInsertionEffect: Di,
            useLayoutEffect: Mi,
            useMemo: Vi,
            useReducer: ki,
            useRef: Ti,
            useState: function () {
              return ki(wi);
            },
            useDebugValue: Bi,
            useDeferredValue: function (e) {
              var t = bi();
              return null === li
                ? (t.memoizedState = e)
                : Wi(t, li.memoizedState, e);
            },
            useTransition: function () {
              return [ki(wi)[0], bi().memoizedState];
            },
            useMutableSource: Si,
            useSyncExternalStore: Ei,
            useId: $i,
            unstable_isNewReconciler: !1,
          };
        function ns(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = D({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        function rs(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : D({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var as = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && qe(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              a = tc(e),
              o = Io(r, a);
            (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Uo(e, o, a)) && (nc(t, e, a, r), Bo(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ec(),
              a = tc(e),
              o = Io(r, a);
            (o.tag = 1),
              (o.payload = t),
              void 0 !== n && null !== n && (o.callback = n),
              null !== (t = Uo(e, o, a)) && (nc(t, e, a, r), Bo(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ec(),
              r = tc(e),
              a = Io(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Uo(e, a, r)) && (nc(t, e, r, n), Bo(t, e, r));
          },
        };
        function os(e, t, n, r, a, o, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !lr(n, r) ||
                !lr(a, o);
        }
        function is(e, t, n) {
          var r = !1,
            a = Oa,
            o = t.contextType;
          return (
            "object" === typeof o && null !== o
              ? (o = Ro(o))
              : ((a = Ta(t) ? Pa : _a.current),
                (o = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Ra(e, a)
                  : Oa)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = as),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function ss(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && as.enqueueReplaceState(t, t.state, null);
        }
        function ls(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = {}), Do(e);
          var o = t.contextType;
          "object" === typeof o && null !== o
            ? (a.context = Ro(o))
            : ((o = Ta(t) ? Pa : _a.current), (a.context = Ra(e, o))),
            (a.state = e.memoizedState),
            "function" === typeof (o = t.getDerivedStateFromProps) &&
              (rs(e, t, o, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && as.enqueueReplaceState(a, a.state, null),
              Vo(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function cs(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += B(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (o) {
            a = "\nError generating stack: " + o.message + "\n" + o.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function us(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fs(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var ds = "function" === typeof WeakMap ? WeakMap : Map;
        function ps(e, t, n) {
          ((n = Io(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Wl || ((Wl = !0), (Hl = r)), fs(0, t);
            }),
            n
          );
        }
        function hs(e, t, n) {
          (n = Io(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fs(0, t);
              });
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" === typeof o.componentDidCatch &&
              (n.callback = function () {
                fs(0, t),
                  "function" !== typeof r &&
                    (null === $l ? ($l = new Set([this])) : $l.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ms(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new ds();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Cc.bind(null, e, t, n)), t.then(e, e));
        }
        function gs(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function ys(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Io(-1, 1)).tag = 2), Uo(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var vs = w.ReactCurrentOwner,
          bs = !1;
        function ws(e, t, n, r) {
          t.child = null === e ? ko(t, null, n, r) : xo(t, e.child, n, r);
        }
        function xs(e, t, n, r, a) {
          n = n.render;
          var o = t.ref;
          return (
            Po(t, a),
            (r = gi(e, t, n, r, o, a)),
            (n = yi()),
            null === e || bs
              ? (ao && n && eo(t), (t.flags |= 1), ws(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Ws(e, t, a))
          );
        }
        function ks(e, t, n, r, a) {
          if (null === e) {
            var o = n.type;
            return "function" !== typeof o ||
              Tc(o) ||
              void 0 !== o.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Lc(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = o), Ss(e, t, o, r, a));
          }
          if (((o = e.child), 0 === (e.lanes & a))) {
            var i = o.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(i, r) &&
              e.ref === t.ref
            )
              return Ws(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Ac(o, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Ss(e, t, n, r, a) {
          if (null !== e) {
            var o = e.memoizedProps;
            if (lr(o, r) && e.ref === t.ref) {
              if (((bs = !1), (t.pendingProps = r = o), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Ws(e, t, a);
              0 !== (131072 & e.flags) && (bs = !0);
            }
          }
          return Ns(e, t, n, r, a);
        }
        function Es(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Na(Al, Tl),
                (Tl |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Na(Al, Tl),
                  (Tl |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== o ? o.baseLanes : n),
                Na(Al, Tl),
                (Tl |= r);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Na(Al, Tl),
              (Tl |= r);
          return ws(e, t, a, n), t.child;
        }
        function Cs(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ns(e, t, n, r, a) {
          var o = Ta(n) ? Pa : _a.current;
          return (
            (o = Ra(t, o)),
            Po(t, a),
            (n = gi(e, t, n, r, o, a)),
            (r = yi()),
            null === e || bs
              ? (ao && r && eo(t), (t.flags |= 1), ws(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Ws(e, t, a))
          );
        }
        function Os(e, t, n, r, a) {
          if (Ta(n)) {
            var o = !0;
            Fa(t);
          } else o = !1;
          if ((Po(t, a), null === t.stateNode))
            Vs(e, t), is(t, n, r), ls(t, n, r, a), (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              s = t.memoizedProps;
            i.props = s;
            var l = i.context,
              c = n.contextType;
            "object" === typeof c && null !== c
              ? (c = Ro(c))
              : (c = Ra(t, (c = Ta(n) ? Pa : _a.current)));
            var u = n.getDerivedStateFromProps,
              f =
                "function" === typeof u ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((s !== r || l !== c) && ss(t, i, r, c)),
              (Fo = !1);
            var d = t.memoizedState;
            (i.state = d),
              Vo(t, r, i, a),
              (l = t.memoizedState),
              s !== r || d !== l || ja.current || Fo
                ? ("function" === typeof u &&
                    (rs(t, n, u, r), (l = t.memoizedState)),
                  (s = Fo || os(t, n, s, r, d, l, c))
                    ? (f ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (i.props = r),
                  (i.state = l),
                  (i.context = c),
                  (r = s))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              Mo(e, t),
              (s = t.memoizedProps),
              (c = t.type === t.elementType ? s : ns(t.type, s)),
              (i.props = c),
              (f = t.pendingProps),
              (d = i.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = Ro(l))
                : (l = Ra(t, (l = Ta(n) ? Pa : _a.current)));
            var p = n.getDerivedStateFromProps;
            (u =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((s !== f || d !== l) && ss(t, i, r, l)),
              (Fo = !1),
              (d = t.memoizedState),
              (i.state = d),
              Vo(t, r, i, a);
            var h = t.memoizedState;
            s !== f || d !== h || ja.current || Fo
              ? ("function" === typeof p &&
                  (rs(t, n, p, r), (h = t.memoizedState)),
                (c = Fo || os(t, n, c, r, d, h, l) || !1)
                  ? (u ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, l),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, l)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (s === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = l),
                (r = c))
              : ("function" !== typeof i.componentDidUpdate ||
                  (s === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return _s(e, t, n, r, o, a);
        }
        function _s(e, t, n, r, a, o) {
          Cs(e, t);
          var i = 0 !== (128 & t.flags);
          if (!r && !i) return a && Da(t, n, !1), Ws(e, t, o);
          (r = t.stateNode), (vs.current = t);
          var s =
            i && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = xo(t, e.child, null, o)),
                (t.child = xo(t, null, s, o)))
              : ws(e, t, s, o),
            (t.memoizedState = r.state),
            a && Da(t, n, !0),
            t.child
          );
        }
        function js(e) {
          var t = e.stateNode;
          t.pendingContext
            ? La(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && La(0, t.context, !1),
            Jo(e, t.containerInfo);
        }
        function Ps(e, t, n, r, a) {
          return ho(), mo(a), (t.flags |= 256), ws(e, t, n, r), t.child;
        }
        var Rs,
          Ts,
          As,
          Ls,
          zs = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Fs(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Ds(e, t, n) {
          var r,
            a = t.pendingProps,
            i = ei.current,
            s = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            r
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Na(ei, 1 & i),
            null === e)
          )
            return (
              co(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = a.children),
                  (e = a.fallback),
                  s
                    ? ((a = t.mode),
                      (s = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & a) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = l))
                        : (s = Fc(l, a, 0, null)),
                      (e = zc(e, a, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = Fs(n)),
                      (t.memoizedState = zs),
                      e)
                    : Ms(t, l))
            );
          if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
            return (function (e, t, n, r, a, i, s) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Is(e, t, s, (r = us(Error(o(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = r.fallback),
                    (a = t.mode),
                    (r = Fc(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((i = zc(i, a, s, null)).flags |= 2),
                    (r.return = t),
                    (i.return = t),
                    (r.sibling = i),
                    (t.child = r),
                    0 !== (1 & t.mode) && xo(t, e.child, null, s),
                    (t.child.memoizedState = Fs(s)),
                    (t.memoizedState = zs),
                    i);
              if (0 === (1 & t.mode)) return Is(e, t, s, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var l = r.dgst;
                return (
                  (r = l), Is(e, t, s, (r = us((i = Error(o(419))), r, void 0)))
                );
              }
              if (((l = 0 !== (s & e.childLanes)), bs || l)) {
                if (null !== (r = jl)) {
                  switch (s & -s) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | s)) ? 0 : a) &&
                    a !== i.retryLane &&
                    ((i.retryLane = a), zo(e, a), nc(r, e, a, -1));
                }
                return mc(), Is(e, t, s, (r = us(Error(o(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Oc.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (ro = ca(a.nextSibling)),
                  (no = t),
                  (ao = !0),
                  (oo = null),
                  null !== e &&
                    ((Qa[Ka++] = Ja),
                    (Qa[Ka++] = Xa),
                    (Qa[Ka++] = Ya),
                    (Ja = e.id),
                    (Xa = e.overflow),
                    (Ya = t)),
                  (t = Ms(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, l, a, r, i, n);
          if (s) {
            (s = a.fallback), (l = t.mode), (r = (i = e.child).sibling);
            var c = { mode: "hidden", children: a.children };
            return (
              0 === (1 & l) && t.child !== i
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = c),
                  (t.deletions = null))
                : ((a = Ac(i, c)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== r
                ? (s = Ac(r, s))
                : ((s = zc(s, l, n, null)).flags |= 2),
              (s.return = t),
              (a.return = t),
              (a.sibling = s),
              (t.child = a),
              (a = s),
              (s = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? Fs(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (s.memoizedState = l),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = zs),
              a
            );
          }
          return (
            (e = (s = e.child).sibling),
            (a = Ac(s, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Ms(e, t) {
          return (
            ((t = Fc(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Is(e, t, n, r) {
          return (
            null !== r && mo(r),
            xo(t, e.child, null, n),
            ((e = Ms(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Us(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), jo(e.return, t, n);
        }
        function Bs(e, t, n, r, a) {
          var o = e.memoizedState;
          null === o
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((o.isBackwards = t),
              (o.rendering = null),
              (o.renderingStartTime = 0),
              (o.last = r),
              (o.tail = n),
              (o.tailMode = a));
        }
        function qs(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            o = r.tail;
          if ((ws(e, t, r.children, n), 0 !== (2 & (r = ei.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Us(e, n, t);
                else if (19 === e.tag) Us(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Na(ei, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === ti(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Bs(t, !1, a, n, o);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === ti(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Bs(t, !0, n, null, o);
                break;
              case "together":
                Bs(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Vs(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Ws(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Fl |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = Ac((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ac(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Hs(e, t) {
          if (!ao)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function $s(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Qs(e, t, n) {
          var r = t.pendingProps;
          switch ((to(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return $s(t), null;
            case 1:
            case 17:
              return Ta(t.type) && Aa(), $s(t), null;
            case 3:
              return (
                (r = t.stateNode),
                Xo(),
                Ca(ja),
                Ca(_a),
                ri(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fo(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== oo && (ic(oo), (oo = null)))),
                Ts(e, t),
                $s(t),
                null
              );
            case 5:
              Zo(t);
              var a = Yo(Ko.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                As(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(o(166));
                  return $s(t), null;
                }
                if (((e = Yo($o.current)), fo(t))) {
                  (r = t.stateNode), (n = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = i), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Ir("cancel", r), Ir("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Ir("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < zr.length; a++) Ir(zr[a], r);
                      break;
                    case "source":
                      Ir("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Ir("error", r), Ir("load", r);
                      break;
                    case "details":
                      Ir("toggle", r);
                      break;
                    case "input":
                      J(r, i), Ir("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!i.multiple }),
                        Ir("invalid", r);
                      break;
                    case "textarea":
                      ae(r, i), Ir("invalid", r);
                  }
                  for (var l in (ve(n, i), (a = null), i))
                    if (i.hasOwnProperty(l)) {
                      var c = i[l];
                      "children" === l
                        ? "string" === typeof c
                          ? r.textContent !== c &&
                            (!0 !== i.suppressHydrationWarning &&
                              Gr(r.textContent, c, e),
                            (a = ["children", c]))
                          : "number" === typeof c &&
                            r.textContent !== "" + c &&
                            (!0 !== i.suppressHydrationWarning &&
                              Gr(r.textContent, c, e),
                            (a = ["children", "" + c]))
                        : s.hasOwnProperty(l) &&
                          null != c &&
                          "onScroll" === l &&
                          Ir("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      $(r), Z(r, i, !0);
                      break;
                    case "textarea":
                      $(r), ie(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = se(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            r.multiple
                              ? (l.multiple = !0)
                              : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Rs(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((l = be(n, r)), n)) {
                      case "dialog":
                        Ir("cancel", e), Ir("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Ir("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < zr.length; a++) Ir(zr[a], e);
                        a = r;
                        break;
                      case "source":
                        Ir("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Ir("error", e), Ir("load", e), (a = r);
                        break;
                      case "details":
                        Ir("toggle", e), (a = r);
                        break;
                      case "input":
                        J(e, r), (a = Y(e, r)), Ir("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = D({}, r, { value: void 0 })),
                          Ir("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Ir("invalid", e);
                    }
                    for (i in (ve(n, a), (c = a)))
                      if (c.hasOwnProperty(i)) {
                        var u = c[i];
                        "style" === i
                          ? ge(e, u)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (u = u ? u.__html : void 0) && fe(e, u)
                          : "children" === i
                          ? "string" === typeof u
                            ? ("textarea" !== n || "" !== u) && de(e, u)
                            : "number" === typeof u && de(e, "" + u)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (s.hasOwnProperty(i)
                              ? null != u && "onScroll" === i && Ir("scroll", e)
                              : null != u && b(e, i, u, l));
                      }
                    switch (n) {
                      case "input":
                        $(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        $(e), ie(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + W(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (i = r.value)
                            ? ne(e, !!r.multiple, i, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return $s(t), null;
            case 6:
              if (e && null != t.stateNode) Ls(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(o(166));
                if (((n = Yo(Ko.current)), Yo($o.current), fo(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (i = r.nodeValue !== n) && null !== (e = no))
                  )
                    switch (e.tag) {
                      case 3:
                        Gr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Gr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return $s(t), null;
            case 13:
              if (
                (Ca(ei),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ao &&
                  null !== ro &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  po(), ho(), (t.flags |= 98560), (i = !1);
                else if (((i = fo(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(o(318));
                    if (
                      !(i =
                        null !== (i = t.memoizedState) ? i.dehydrated : null)
                    )
                      throw Error(o(317));
                    i[da] = t;
                  } else
                    ho(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  $s(t), (i = !1);
                } else null !== oo && (ic(oo), (oo = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & ei.current)
                        ? 0 === Ll && (Ll = 3)
                        : mc())),
                  null !== t.updateQueue && (t.flags |= 4),
                  $s(t),
                  null);
            case 4:
              return (
                Xo(),
                Ts(e, t),
                null === e && qr(t.stateNode.containerInfo),
                $s(t),
                null
              );
            case 10:
              return _o(t.type._context), $s(t), null;
            case 19:
              if ((Ca(ei), null === (i = t.memoizedState))) return $s(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = i.rendering)))
                if (r) Hs(i, !1);
                else {
                  if (0 !== Ll || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = ti(e))) {
                        for (
                          t.flags |= 128,
                            Hs(i, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((i = n).flags &= 14680066),
                            null === (l = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = l.childLanes),
                                (i.lanes = l.lanes),
                                (i.child = l.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = l.memoizedProps),
                                (i.memoizedState = l.memoizedState),
                                (i.updateQueue = l.updateQueue),
                                (i.type = l.type),
                                (e = l.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Na(ei, (1 & ei.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Xe() > ql &&
                    ((t.flags |= 128),
                    (r = !0),
                    Hs(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = ti(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Hs(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !l.alternate &&
                        !ao)
                    )
                      return $s(t), null;
                  } else
                    2 * Xe() - i.renderingStartTime > ql &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Hs(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = i.last) ? (n.sibling = l) : (t.child = l),
                    (i.last = l));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (n = ei.current),
                  Na(ei, r ? (1 & n) | 2 : 1 & n),
                  t)
                : ($s(t), null);
            case 22:
            case 23:
              return (
                fc(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Tl) &&
                    ($s(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : $s(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(o(156, t.tag));
        }
        function Ks(e, t) {
          switch ((to(t), t.tag)) {
            case 1:
              return (
                Ta(t.type) && Aa(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                Xo(),
                Ca(ja),
                Ca(_a),
                ri(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return Zo(t), null;
            case 13:
              if (
                (Ca(ei),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(o(340));
                ho();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca(ei), null;
            case 4:
              return Xo(), null;
            case 10:
              return _o(t.type._context), null;
            case 22:
            case 23:
              return fc(), null;
            default:
              return null;
          }
        }
        (Rs = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ts = function () {}),
          (As = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), Yo($o.current);
              var o,
                i = null;
              switch (n) {
                case "input":
                  (a = Y(e, a)), (r = Y(e, r)), (i = []);
                  break;
                case "select":
                  (a = D({}, a, { value: void 0 })),
                    (r = D({}, r, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (i = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (u in (ve(n, r), (n = null), a))
                if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
                  if ("style" === u) {
                    var l = a[u];
                    for (o in l)
                      l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== u &&
                      "children" !== u &&
                      "suppressContentEditableWarning" !== u &&
                      "suppressHydrationWarning" !== u &&
                      "autoFocus" !== u &&
                      (s.hasOwnProperty(u)
                        ? i || (i = [])
                        : (i = i || []).push(u, null));
              for (u in r) {
                var c = r[u];
                if (
                  ((l = null != a ? a[u] : void 0),
                  r.hasOwnProperty(u) && c !== l && (null != c || null != l))
                )
                  if ("style" === u)
                    if (l) {
                      for (o in l)
                        !l.hasOwnProperty(o) ||
                          (c && c.hasOwnProperty(o)) ||
                          (n || (n = {}), (n[o] = ""));
                      for (o in c)
                        c.hasOwnProperty(o) &&
                          l[o] !== c[o] &&
                          (n || (n = {}), (n[o] = c[o]));
                    } else n || (i || (i = []), i.push(u, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === u
                      ? ((c = c ? c.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != c && l !== c && (i = i || []).push(u, c))
                      : "children" === u
                      ? ("string" !== typeof c && "number" !== typeof c) ||
                        (i = i || []).push(u, "" + c)
                      : "suppressContentEditableWarning" !== u &&
                        "suppressHydrationWarning" !== u &&
                        (s.hasOwnProperty(u)
                          ? (null != c && "onScroll" === u && Ir("scroll", e),
                            i || l === c || (i = []))
                          : (i = i || []).push(u, c));
              }
              n && (i = i || []).push("style", n);
              var u = i;
              (t.updateQueue = u) && (t.flags |= 4);
            }
          }),
          (Ls = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Ys = !1,
          Js = !1,
          Xs = "function" === typeof WeakSet ? WeakSet : Set,
          Gs = null;
        function Zs(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Ec(e, t, r);
              }
            else n.current = null;
        }
        function el(e, t, n) {
          try {
            n();
          } catch (r) {
            Ec(e, t, r);
          }
        }
        var tl = !1;
        function nl(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var o = a.destroy;
                (a.destroy = void 0), void 0 !== o && el(t, n, o);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function rl(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function al(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function ol(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), ol(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[ma],
              delete t[ga],
              delete t[ya]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function il(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function sl(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || il(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ll(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ll(e, t, n), e = e.sibling; null !== e; )
              ll(e, t, n), (e = e.sibling);
        }
        function cl(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cl(e, t, n), e = e.sibling; null !== e; )
              cl(e, t, n), (e = e.sibling);
        }
        var ul = null,
          fl = !1;
        function dl(e, t, n) {
          for (n = n.child; null !== n; ) pl(e, t, n), (n = n.sibling);
        }
        function pl(e, t, n) {
          if (ot && "function" === typeof ot.onCommitFiberUnmount)
            try {
              ot.onCommitFiberUnmount(at, n);
            } catch (s) {}
          switch (n.tag) {
            case 5:
              Js || Zs(n, t);
            case 6:
              var r = ul,
                a = fl;
              (ul = null),
                dl(e, t, n),
                (fl = a),
                null !== (ul = r) &&
                  (fl
                    ? ((e = ul),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : ul.removeChild(n.stateNode));
              break;
            case 18:
              null !== ul &&
                (fl
                  ? ((e = ul),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? la(e.parentNode, n)
                      : 1 === e.nodeType && la(e, n),
                    qt(e))
                  : la(ul, n.stateNode));
              break;
            case 4:
              (r = ul),
                (a = fl),
                (ul = n.stateNode.containerInfo),
                (fl = !0),
                dl(e, t, n),
                (ul = r),
                (fl = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Js &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var o = a,
                    i = o.destroy;
                  (o = o.tag),
                    void 0 !== i &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      el(n, t, i),
                    (a = a.next);
                } while (a !== r);
              }
              dl(e, t, n);
              break;
            case 1:
              if (
                !Js &&
                (Zs(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (s) {
                  Ec(n, t, s);
                }
              dl(e, t, n);
              break;
            case 21:
              dl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Js = (r = Js) || null !== n.memoizedState),
                  dl(e, t, n),
                  (Js = r))
                : dl(e, t, n);
              break;
            default:
              dl(e, t, n);
          }
        }
        function hl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Xs()),
              t.forEach(function (t) {
                var r = _c.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ml(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var i = e,
                  s = t,
                  l = s;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (ul = l.stateNode), (fl = !1);
                      break e;
                    case 3:
                    case 4:
                      (ul = l.stateNode.containerInfo), (fl = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === ul) throw Error(o(160));
                pl(i, s, a), (ul = null), (fl = !1);
                var c = a.alternate;
                null !== c && (c.return = null), (a.return = null);
              } catch (u) {
                Ec(a, t, u);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) gl(t, e), (t = t.sibling);
        }
        function gl(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ml(t, e), yl(e), 4 & r)) {
                try {
                  nl(3, e, e.return), rl(3, e);
                } catch (g) {
                  Ec(e, e.return, g);
                }
                try {
                  nl(5, e, e.return);
                } catch (g) {
                  Ec(e, e.return, g);
                }
              }
              break;
            case 1:
              ml(t, e), yl(e), 512 & r && null !== n && Zs(n, n.return);
              break;
            case 5:
              if (
                (ml(t, e),
                yl(e),
                512 & r && null !== n && Zs(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (g) {
                  Ec(e, e.return, g);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var i = e.memoizedProps,
                  s = null !== n ? n.memoizedProps : i,
                  l = e.type,
                  c = e.updateQueue;
                if (((e.updateQueue = null), null !== c))
                  try {
                    "input" === l &&
                      "radio" === i.type &&
                      null != i.name &&
                      X(a, i),
                      be(l, s);
                    var u = be(l, i);
                    for (s = 0; s < c.length; s += 2) {
                      var f = c[s],
                        d = c[s + 1];
                      "style" === f
                        ? ge(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, u);
                    }
                    switch (l) {
                      case "input":
                        G(a, i);
                        break;
                      case "textarea":
                        oe(a, i);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? ne(a, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? ne(a, !!i.multiple, i.defaultValue, !0)
                              : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                    }
                    a[pa] = i;
                  } catch (g) {
                    Ec(e, e.return, g);
                  }
              }
              break;
            case 6:
              if ((ml(t, e), yl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(o(162));
                (a = e.stateNode), (i = e.memoizedProps);
                try {
                  a.nodeValue = i;
                } catch (g) {
                  Ec(e, e.return, g);
                }
              }
              break;
            case 3:
              if (
                (ml(t, e),
                yl(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  qt(t.containerInfo);
                } catch (g) {
                  Ec(e, e.return, g);
                }
              break;
            case 4:
            default:
              ml(t, e), yl(e);
              break;
            case 13:
              ml(t, e),
                yl(e),
                8192 & (a = e.child).flags &&
                  ((i = null !== a.memoizedState),
                  (a.stateNode.isHidden = i),
                  !i ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Bl = Xe())),
                4 & r && hl(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Js = (u = Js) || f), ml(t, e), (Js = u))
                  : ml(t, e),
                yl(e),
                8192 & r)
              ) {
                if (
                  ((u = null !== e.memoizedState),
                  (e.stateNode.isHidden = u) && !f && 0 !== (1 & e.mode))
                )
                  for (Gs = e, f = e.child; null !== f; ) {
                    for (d = Gs = f; null !== Gs; ) {
                      switch (((h = (p = Gs).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          nl(4, p, p.return);
                          break;
                        case 1:
                          Zs(p, p.return);
                          var m = p.stateNode;
                          if ("function" === typeof m.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (m.props = t.memoizedProps),
                                (m.state = t.memoizedState),
                                m.componentWillUnmount();
                            } catch (g) {
                              Ec(r, n, g);
                            }
                          }
                          break;
                        case 5:
                          Zs(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            xl(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Gs = h)) : xl(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          u
                            ? "function" === typeof (i = a.style).setProperty
                              ? i.setProperty("display", "none", "important")
                              : (i.display = "none")
                            : ((l = d.stateNode),
                              (s =
                                void 0 !== (c = d.memoizedProps.style) &&
                                null !== c &&
                                c.hasOwnProperty("display")
                                  ? c.display
                                  : null),
                              (l.style.display = me("display", s)));
                      } catch (g) {
                        Ec(e, e.return, g);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                      } catch (g) {
                        Ec(e, e.return, g);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              ml(t, e), yl(e), 4 & r && hl(e);
            case 21:
          }
        }
        function yl(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (il(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(o(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    cl(e, sl(e), a);
                  break;
                case 3:
                case 4:
                  var i = r.stateNode.containerInfo;
                  ll(e, sl(e), i);
                  break;
                default:
                  throw Error(o(161));
              }
            } catch (s) {
              Ec(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function vl(e, t, n) {
          (Gs = e), bl(e, t, n);
        }
        function bl(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Gs; ) {
            var a = Gs,
              o = a.child;
            if (22 === a.tag && r) {
              var i = null !== a.memoizedState || Ys;
              if (!i) {
                var s = a.alternate,
                  l = (null !== s && null !== s.memoizedState) || Js;
                s = Ys;
                var c = Js;
                if (((Ys = i), (Js = l) && !c))
                  for (Gs = a; null !== Gs; )
                    (l = (i = Gs).child),
                      22 === i.tag && null !== i.memoizedState
                        ? kl(a)
                        : null !== l
                        ? ((l.return = i), (Gs = l))
                        : kl(a);
                for (; null !== o; ) (Gs = o), bl(o, t, n), (o = o.sibling);
                (Gs = a), (Ys = s), (Js = c);
              }
              wl(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== o
                ? ((o.return = a), (Gs = o))
                : wl(e);
          }
        }
        function wl(e) {
          for (; null !== Gs; ) {
            var t = Gs;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Js || rl(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Js)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : ns(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Wo(t, i, r);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Wo(t, s, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var c = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            c.autoFocus && n.focus();
                            break;
                          case "img":
                            c.src && (n.src = c.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var u = t.alternate;
                        if (null !== u) {
                          var f = u.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && qt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(o(163));
                  }
                Js || (512 & t.flags && al(t));
              } catch (p) {
                Ec(t, t.return, p);
              }
            }
            if (t === e) {
              Gs = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Gs = n);
              break;
            }
            Gs = t.return;
          }
        }
        function xl(e) {
          for (; null !== Gs; ) {
            var t = Gs;
            if (t === e) {
              Gs = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Gs = n);
              break;
            }
            Gs = t.return;
          }
        }
        function kl(e) {
          for (; null !== Gs; ) {
            var t = Gs;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    rl(4, t);
                  } catch (l) {
                    Ec(t, n, l);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      Ec(t, a, l);
                    }
                  }
                  var o = t.return;
                  try {
                    al(t);
                  } catch (l) {
                    Ec(t, o, l);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    al(t);
                  } catch (l) {
                    Ec(t, i, l);
                  }
              }
            } catch (l) {
              Ec(t, t.return, l);
            }
            if (t === e) {
              Gs = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), (Gs = s);
              break;
            }
            Gs = t.return;
          }
        }
        var Sl,
          El = Math.ceil,
          Cl = w.ReactCurrentDispatcher,
          Nl = w.ReactCurrentOwner,
          Ol = w.ReactCurrentBatchConfig,
          _l = 0,
          jl = null,
          Pl = null,
          Rl = 0,
          Tl = 0,
          Al = Ea(0),
          Ll = 0,
          zl = null,
          Fl = 0,
          Dl = 0,
          Ml = 0,
          Il = null,
          Ul = null,
          Bl = 0,
          ql = 1 / 0,
          Vl = null,
          Wl = !1,
          Hl = null,
          $l = null,
          Ql = !1,
          Kl = null,
          Yl = 0,
          Jl = 0,
          Xl = null,
          Gl = -1,
          Zl = 0;
        function ec() {
          return 0 !== (6 & _l) ? Xe() : -1 !== Gl ? Gl : (Gl = Xe());
        }
        function tc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & _l) && 0 !== Rl
            ? Rl & -Rl
            : null !== go.transition
            ? (0 === Zl && (Zl = mt()), Zl)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Jt(e.type));
        }
        function nc(e, t, n, r) {
          if (50 < Jl) throw ((Jl = 0), (Xl = null), Error(o(185)));
          yt(e, n, r),
            (0 !== (2 & _l) && e === jl) ||
              (e === jl && (0 === (2 & _l) && (Dl |= n), 4 === Ll && sc(e, Rl)),
              rc(e, r),
              1 === n &&
                0 === _l &&
                0 === (1 & t.mode) &&
                ((ql = Xe() + 500), Ia && qa()));
        }
        function rc(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                o = e.pendingLanes;
              0 < o;

            ) {
              var i = 31 - it(o),
                s = 1 << i,
                l = a[i];
              -1 === l
                ? (0 !== (s & n) && 0 === (s & r)) || (a[i] = pt(s, t))
                : l <= t && (e.expiredLanes |= s),
                (o &= ~s);
            }
          })(e, t);
          var r = dt(e, e === jl ? Rl : 0);
          if (0 === r)
            null !== n && Ke(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Ia = !0), Ba(e);
                  })(lc.bind(null, e))
                : Ba(lc.bind(null, e)),
                ia(function () {
                  0 === (6 & _l) && qa();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = jc(n, ac.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function ac(e, t) {
          if (((Gl = -1), (Zl = 0), 0 !== (6 & _l))) throw Error(o(327));
          var n = e.callbackNode;
          if (kc() && e.callbackNode !== n) return null;
          var r = dt(e, e === jl ? Rl : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = gc(e, r);
          else {
            t = r;
            var a = _l;
            _l |= 2;
            var i = hc();
            for (
              (jl === e && Rl === t) ||
              ((Vl = null), (ql = Xe() + 500), dc(e, t));
              ;

            )
              try {
                vc();
                break;
              } catch (l) {
                pc(e, l);
              }
            Oo(),
              (Cl.current = i),
              (_l = a),
              null !== Pl ? (t = 0) : ((jl = null), (Rl = 0), (t = Ll));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = oc(e, a))),
              1 === t)
            )
              throw ((n = zl), dc(e, 0), sc(e, r), rc(e, Xe()), n);
            if (6 === t) sc(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              o = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!sr(o(), a)) return !1;
                            } catch (s) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = gc(e, r)) &&
                    0 !== (i = ht(e)) &&
                    ((r = i), (t = oc(e, i))),
                  1 === t))
              )
                throw ((n = zl), dc(e, 0), sc(e, r), rc(e, Xe()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(o(345));
                case 2:
                case 5:
                  xc(e, Ul, Vl);
                  break;
                case 3:
                  if (
                    (sc(e, r),
                    (130023424 & r) === r && 10 < (t = Bl + 500 - Xe()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ec(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(xc.bind(null, e, Ul, Vl), t);
                    break;
                  }
                  xc(e, Ul, Vl);
                  break;
                case 4:
                  if ((sc(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var s = 31 - it(r);
                    (i = 1 << s), (s = t[s]) > a && (a = s), (r &= ~i);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Xe() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * El(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(xc.bind(null, e, Ul, Vl), r);
                    break;
                  }
                  xc(e, Ul, Vl);
                  break;
                default:
                  throw Error(o(329));
              }
            }
          }
          return rc(e, Xe()), e.callbackNode === n ? ac.bind(null, e) : null;
        }
        function oc(e, t) {
          var n = Il;
          return (
            e.current.memoizedState.isDehydrated && (dc(e, t).flags |= 256),
            2 !== (e = gc(e, t)) && ((t = Ul), (Ul = n), null !== t && ic(t)),
            e
          );
        }
        function ic(e) {
          null === Ul ? (Ul = e) : Ul.push.apply(Ul, e);
        }
        function sc(e, t) {
          for (
            t &= ~Ml,
              t &= ~Dl,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - it(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function lc(e) {
          if (0 !== (6 & _l)) throw Error(o(327));
          kc();
          var t = dt(e, 0);
          if (0 === (1 & t)) return rc(e, Xe()), null;
          var n = gc(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = oc(e, r)));
          }
          if (1 === n) throw ((n = zl), dc(e, 0), sc(e, t), rc(e, Xe()), n);
          if (6 === n) throw Error(o(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            xc(e, Ul, Vl),
            rc(e, Xe()),
            null
          );
        }
        function cc(e, t) {
          var n = _l;
          _l |= 1;
          try {
            return e(t);
          } finally {
            0 === (_l = n) && ((ql = Xe() + 500), Ia && qa());
          }
        }
        function uc(e) {
          null !== Kl && 0 === Kl.tag && 0 === (6 & _l) && kc();
          var t = _l;
          _l |= 1;
          var n = Ol.transition,
            r = bt;
          try {
            if (((Ol.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Ol.transition = n), 0 === (6 & (_l = t)) && qa();
          }
        }
        function fc() {
          (Tl = Al.current), Ca(Al);
        }
        function dc(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Pl))
            for (n = Pl.return; null !== n; ) {
              var r = n;
              switch ((to(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Aa();
                  break;
                case 3:
                  Xo(), Ca(ja), Ca(_a), ri();
                  break;
                case 5:
                  Zo(r);
                  break;
                case 4:
                  Xo();
                  break;
                case 13:
                case 19:
                  Ca(ei);
                  break;
                case 10:
                  _o(r.type._context);
                  break;
                case 22:
                case 23:
                  fc();
              }
              n = n.return;
            }
          if (
            ((jl = e),
            (Pl = e = Ac(e.current, null)),
            (Rl = Tl = t),
            (Ll = 0),
            (zl = null),
            (Ml = Dl = Fl = 0),
            (Ul = Il = null),
            null !== To)
          ) {
            for (t = 0; t < To.length; t++)
              if (null !== (r = (n = To[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  o = n.pending;
                if (null !== o) {
                  var i = o.next;
                  (o.next = a), (r.next = i);
                }
                n.pending = r;
              }
            To = null;
          }
          return e;
        }
        function pc(e, t) {
          for (;;) {
            var n = Pl;
            try {
              if ((Oo(), (ai.current = Gi), ui)) {
                for (var r = si.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                ui = !1;
              }
              if (
                ((ii = 0),
                (ci = li = si = null),
                (fi = !1),
                (di = 0),
                (Nl.current = null),
                null === n || null === n.return)
              ) {
                (Ll = 1), (zl = t), (Pl = null);
                break;
              }
              e: {
                var i = e,
                  s = n.return,
                  l = n,
                  c = t;
                if (
                  ((t = Rl),
                  (l.flags |= 32768),
                  null !== c &&
                    "object" === typeof c &&
                    "function" === typeof c.then)
                ) {
                  var u = c,
                    f = l,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = gs(s);
                  if (null !== h) {
                    (h.flags &= -257),
                      ys(h, s, l, 0, t),
                      1 & h.mode && ms(i, u, t),
                      (c = u);
                    var m = (t = h).updateQueue;
                    if (null === m) {
                      var g = new Set();
                      g.add(c), (t.updateQueue = g);
                    } else m.add(c);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ms(i, u, t), mc();
                    break e;
                  }
                  c = Error(o(426));
                } else if (ao && 1 & l.mode) {
                  var y = gs(s);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      ys(y, s, l, 0, t),
                      mo(cs(c, l));
                    break e;
                  }
                }
                (i = c = cs(c, l)),
                  4 !== Ll && (Ll = 2),
                  null === Il ? (Il = [i]) : Il.push(i),
                  (i = s);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        qo(i, ps(0, c, t));
                      break e;
                    case 1:
                      l = c;
                      var v = i.type,
                        b = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ("function" === typeof v.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === $l || !$l.has(b))))
                      ) {
                        (i.flags |= 65536),
                          (t &= -t),
                          (i.lanes |= t),
                          qo(i, hs(i, l, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              wc(n);
            } catch (w) {
              (t = w), Pl === n && null !== n && (Pl = n = n.return);
              continue;
            }
            break;
          }
        }
        function hc() {
          var e = Cl.current;
          return (Cl.current = Gi), null === e ? Gi : e;
        }
        function mc() {
          (0 !== Ll && 3 !== Ll && 2 !== Ll) || (Ll = 4),
            null === jl ||
              (0 === (268435455 & Fl) && 0 === (268435455 & Dl)) ||
              sc(jl, Rl);
        }
        function gc(e, t) {
          var n = _l;
          _l |= 2;
          var r = hc();
          for ((jl === e && Rl === t) || ((Vl = null), dc(e, t)); ; )
            try {
              yc();
              break;
            } catch (a) {
              pc(e, a);
            }
          if ((Oo(), (_l = n), (Cl.current = r), null !== Pl))
            throw Error(o(261));
          return (jl = null), (Rl = 0), Ll;
        }
        function yc() {
          for (; null !== Pl; ) bc(Pl);
        }
        function vc() {
          for (; null !== Pl && !Ye(); ) bc(Pl);
        }
        function bc(e) {
          var t = Sl(e.alternate, e, Tl);
          (e.memoizedProps = e.pendingProps),
            null === t ? wc(e) : (Pl = t),
            (Nl.current = null);
        }
        function wc(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Qs(n, t, Tl))) return void (Pl = n);
            } else {
              if (null !== (n = Ks(n, t)))
                return (n.flags &= 32767), void (Pl = n);
              if (null === e) return (Ll = 6), void (Pl = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Pl = t);
            Pl = t = e;
          } while (null !== t);
          0 === Ll && (Ll = 5);
        }
        function xc(e, t, n) {
          var r = bt,
            a = Ol.transition;
          try {
            (Ol.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  kc();
                } while (null !== Kl);
                if (0 !== (6 & _l)) throw Error(o(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(o(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - it(n),
                        o = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                    }
                  })(e, i),
                  e === jl && ((Pl = jl = null), (Rl = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Ql ||
                    ((Ql = !0),
                    jc(tt, function () {
                      return kc(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = Ol.transition), (Ol.transition = null);
                  var s = bt;
                  bt = 1;
                  var l = _l;
                  (_l |= 4),
                    (Nl.current = null),
                    (function (e, t) {
                      if (((ea = Wt), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                i = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, i.nodeType;
                              } catch (x) {
                                n = null;
                                break e;
                              }
                              var s = 0,
                                l = -1,
                                c = -1,
                                u = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (l = s + a),
                                    d !== i ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (c = s + r),
                                    3 === d.nodeType &&
                                      (s += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++u === a && (l = s),
                                    p === i && ++f === r && (c = s),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === l || -1 === c
                                  ? null
                                  : { start: l, end: c };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Wt = !1,
                          Gs = t;
                        null !== Gs;

                      )
                        if (
                          ((e = (t = Gs).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Gs = e);
                        else
                          for (; null !== Gs; ) {
                            t = Gs;
                            try {
                              var m = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== m) {
                                      var g = m.memoizedProps,
                                        y = m.memoizedState,
                                        v = t.stateNode,
                                        b = v.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? g
                                            : ns(t.type, g),
                                          y
                                        );
                                      v.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(o(163));
                                }
                            } catch (x) {
                              Ec(t, t.return, x);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Gs = e);
                              break;
                            }
                            Gs = t.return;
                          }
                      (m = tl), (tl = !1);
                    })(e, n),
                    gl(n, e),
                    hr(ta),
                    (Wt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    vl(n, e, a),
                    Je(),
                    (_l = l),
                    (bt = s),
                    (Ol.transition = i);
                } else e.current = n;
                if (
                  (Ql && ((Ql = !1), (Kl = e), (Yl = a)),
                  (i = e.pendingLanes),
                  0 === i && ($l = null),
                  (function (e) {
                    if (ot && "function" === typeof ot.onCommitFiberRoot)
                      try {
                        ot.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  rc(e, Xe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if (Wl) throw ((Wl = !1), (e = Hl), (Hl = null), e);
                0 !== (1 & Yl) && 0 !== e.tag && kc(),
                  (i = e.pendingLanes),
                  0 !== (1 & i)
                    ? e === Xl
                      ? Jl++
                      : ((Jl = 0), (Xl = e))
                    : (Jl = 0),
                  qa();
              })(e, t, n, r);
          } finally {
            (Ol.transition = a), (bt = r);
          }
          return null;
        }
        function kc() {
          if (null !== Kl) {
            var e = wt(Yl),
              t = Ol.transition,
              n = bt;
            try {
              if (((Ol.transition = null), (bt = 16 > e ? 16 : e), null === Kl))
                var r = !1;
              else {
                if (((e = Kl), (Kl = null), (Yl = 0), 0 !== (6 & _l)))
                  throw Error(o(331));
                var a = _l;
                for (_l |= 4, Gs = e.current; null !== Gs; ) {
                  var i = Gs,
                    s = i.child;
                  if (0 !== (16 & Gs.flags)) {
                    var l = i.deletions;
                    if (null !== l) {
                      for (var c = 0; c < l.length; c++) {
                        var u = l[c];
                        for (Gs = u; null !== Gs; ) {
                          var f = Gs;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              nl(8, f, i);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Gs = d);
                          else
                            for (; null !== Gs; ) {
                              var p = (f = Gs).sibling,
                                h = f.return;
                              if ((ol(f), f === u)) {
                                Gs = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Gs = p);
                                break;
                              }
                              Gs = h;
                            }
                        }
                      }
                      var m = i.alternate;
                      if (null !== m) {
                        var g = m.child;
                        if (null !== g) {
                          m.child = null;
                          do {
                            var y = g.sibling;
                            (g.sibling = null), (g = y);
                          } while (null !== g);
                        }
                      }
                      Gs = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== s)
                    (s.return = i), (Gs = s);
                  else
                    e: for (; null !== Gs; ) {
                      if (0 !== (2048 & (i = Gs).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nl(9, i, i.return);
                        }
                      var v = i.sibling;
                      if (null !== v) {
                        (v.return = i.return), (Gs = v);
                        break e;
                      }
                      Gs = i.return;
                    }
                }
                var b = e.current;
                for (Gs = b; null !== Gs; ) {
                  var w = (s = Gs).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== w)
                    (w.return = s), (Gs = w);
                  else
                    e: for (s = b; null !== Gs; ) {
                      if (0 !== (2048 & (l = Gs).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(9, l);
                          }
                        } catch (k) {
                          Ec(l, l.return, k);
                        }
                      if (l === s) {
                        Gs = null;
                        break e;
                      }
                      var x = l.sibling;
                      if (null !== x) {
                        (x.return = l.return), (Gs = x);
                        break e;
                      }
                      Gs = l.return;
                    }
                }
                if (
                  ((_l = a),
                  qa(),
                  ot && "function" === typeof ot.onPostCommitFiberRoot)
                )
                  try {
                    ot.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Ol.transition = t);
            }
          }
          return !1;
        }
        function Sc(e, t, n) {
          (e = Uo(e, (t = ps(0, (t = cs(n, t)), 1)), 1)),
            (t = ec()),
            null !== e && (yt(e, 1, t), rc(e, t));
        }
        function Ec(e, t, n) {
          if (3 === e.tag) Sc(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Sc(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === $l || !$l.has(r)))
                ) {
                  (t = Uo(t, (e = hs(t, (e = cs(n, e)), 1)), 1)),
                    (e = ec()),
                    null !== t && (yt(t, 1, e), rc(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cc(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ec()),
            (e.pingedLanes |= e.suspendedLanes & n),
            jl === e &&
              (Rl & n) === n &&
              (4 === Ll ||
              (3 === Ll && (130023424 & Rl) === Rl && 500 > Xe() - Bl)
                ? dc(e, 0)
                : (Ml |= n)),
            rc(e, t);
        }
        function Nc(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ut), 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
          var n = ec();
          null !== (e = zo(e, t)) && (yt(e, t, n), rc(e, n));
        }
        function Oc(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Nc(e, n);
        }
        function _c(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(o(314));
          }
          null !== r && r.delete(t), Nc(e, n);
        }
        function jc(e, t) {
          return Qe(e, t);
        }
        function Pc(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Rc(e, t, n, r) {
          return new Pc(e, t, n, r);
        }
        function Tc(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Ac(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Rc(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Lc(e, t, n, r, a, i) {
          var s = 2;
          if (((r = e), "function" === typeof e)) Tc(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case S:
                return zc(n.children, a, i, t);
              case E:
                (s = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Rc(12, n, t, 2 | a)).elementType = C), (e.lanes = i), e
                );
              case j:
                return (
                  ((e = Rc(13, n, t, a)).elementType = j), (e.lanes = i), e
                );
              case P:
                return (
                  ((e = Rc(19, n, t, a)).elementType = P), (e.lanes = i), e
                );
              case A:
                return Fc(n, a, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case N:
                      s = 10;
                      break e;
                    case O:
                      s = 9;
                      break e;
                    case _:
                      s = 11;
                      break e;
                    case R:
                      s = 14;
                      break e;
                    case T:
                      (s = 16), (r = null);
                      break e;
                  }
                throw Error(o(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Rc(s, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = i),
            t
          );
        }
        function zc(e, t, n, r) {
          return ((e = Rc(7, e, r, t)).lanes = n), e;
        }
        function Fc(e, t, n, r) {
          return (
            ((e = Rc(22, e, r, t)).elementType = A),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Dc(e, t, n) {
          return ((e = Rc(6, e, null, t)).lanes = n), e;
        }
        function Mc(e, t, n) {
          return (
            ((t = Rc(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Ic(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = gt(0)),
            (this.expirationTimes = gt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = gt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Uc(e, t, n, r, a, o, i, s, l) {
          return (
            (e = new Ic(e, t, n, s, l)),
            1 === t ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
            (o = Rc(3, null, null, t)),
            (e.current = o),
            (o.stateNode = e),
            (o.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Do(o),
            e
          );
        }
        function Bc(e) {
          if (!e) return Oa;
          e: {
            if (qe((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(o(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (Ta(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(o(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (Ta(n)) return za(e, n, t);
          }
          return t;
        }
        function qc(e, t, n, r, a, o, i, s, l) {
          return (
            ((e = Uc(n, r, !0, e, 0, o, 0, s, l)).context = Bc(null)),
            (n = e.current),
            ((o = Io((r = ec()), (a = tc(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Uo(n, o, a),
            (e.current.lanes = a),
            yt(e, a, r),
            rc(e, r),
            e
          );
        }
        function Vc(e, t, n, r) {
          var a = t.current,
            o = ec(),
            i = tc(a);
          return (
            (n = Bc(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Io(o, i)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Uo(a, t, i)) && (nc(e, a, i, o), Bo(e, a, i)),
            i
          );
        }
        function Wc(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Hc(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function $c(e, t) {
          Hc(e, t), (e = e.alternate) && Hc(e, t);
        }
        Sl = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || ja.current) bs = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (bs = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        js(t), ho();
                        break;
                      case 5:
                        Go(t);
                        break;
                      case 1:
                        Ta(t.type) && Fa(t);
                        break;
                      case 4:
                        Jo(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Na(So, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Na(ei, 1 & ei.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Ds(e, t, n)
                            : (Na(ei, 1 & ei.current),
                              null !== (e = Ws(e, t, n)) ? e.sibling : null);
                        Na(ei, 1 & ei.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return qs(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Na(ei, ei.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Es(e, t, n);
                    }
                    return Ws(e, t, n);
                  })(e, t, n)
                );
              bs = 0 !== (131072 & e.flags);
            }
          else (bs = !1), ao && 0 !== (1048576 & t.flags) && Za(t, $a, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Vs(e, t), (e = t.pendingProps);
              var a = Ra(t, _a.current);
              Po(t, n), (a = gi(null, t, r, e, a, n));
              var i = yi();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    Ta(r) ? ((i = !0), Fa(t)) : (i = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Do(t),
                    (a.updater = as),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    ls(t, r, e, n),
                    (t = _s(null, t, r, !0, i, n)))
                  : ((t.tag = 0),
                    ao && i && eo(t),
                    ws(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Vs(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Tc(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === _) return 11;
                        if (e === R) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = ns(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ns(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Os(null, t, r, e, n);
                    break e;
                  case 11:
                    t = xs(null, t, r, e, n);
                    break e;
                  case 14:
                    t = ks(null, t, r, ns(r.type, e), n);
                    break e;
                }
                throw Error(o(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ns(e, t, r, (a = t.elementType === r ? a : ns(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Os(e, t, r, (a = t.elementType === r ? a : ns(r, a)), n)
              );
            case 3:
              e: {
                if ((js(t), null === e)) throw Error(o(387));
                (r = t.pendingProps),
                  (a = (i = t.memoizedState).element),
                  Mo(e, t),
                  Vo(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Ps(e, t, r, n, (a = cs(Error(o(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Ps(e, t, r, n, (a = cs(Error(o(424)), t)));
                    break e;
                  }
                  for (
                    ro = ca(t.stateNode.containerInfo.firstChild),
                      no = t,
                      ao = !0,
                      oo = null,
                      n = ko(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((ho(), r === a)) {
                    t = Ws(e, t, n);
                    break e;
                  }
                  ws(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Go(t),
                null === e && co(t),
                (r = t.type),
                (a = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (s = a.children),
                na(r, a)
                  ? (s = null)
                  : null !== i && na(r, i) && (t.flags |= 32),
                Cs(e, t),
                ws(e, t, s, n),
                t.child
              );
            case 6:
              return null === e && co(t), null;
            case 13:
              return Ds(e, t, n);
            case 4:
              return (
                Jo(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = xo(t, null, r, n)) : ws(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                xs(e, t, r, (a = t.elementType === r ? a : ns(r, a)), n)
              );
            case 7:
              return ws(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return ws(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (i = t.memoizedProps),
                  (s = a.value),
                  Na(So, r._currentValue),
                  (r._currentValue = s),
                  null !== i)
                )
                  if (sr(i.value, s)) {
                    if (i.children === a.children && !ja.current) {
                      t = Ws(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var l = i.dependencies;
                      if (null !== l) {
                        s = i.child;
                        for (var c = l.firstContext; null !== c; ) {
                          if (c.context === r) {
                            if (1 === i.tag) {
                              (c = Io(-1, n & -n)).tag = 2;
                              var u = i.updateQueue;
                              if (null !== u) {
                                var f = (u = u.shared).pending;
                                null === f
                                  ? (c.next = c)
                                  : ((c.next = f.next), (f.next = c)),
                                  (u.pending = c);
                              }
                            }
                            (i.lanes |= n),
                              null !== (c = i.alternate) && (c.lanes |= n),
                              jo(i.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else if (10 === i.tag)
                        s = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (s = i.return)) throw Error(o(341));
                        (s.lanes |= n),
                          null !== (l = s.alternate) && (l.lanes |= n),
                          jo(s, n, t),
                          (s = i.sibling);
                      } else s = i.child;
                      if (null !== s) s.return = i;
                      else
                        for (s = i; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (i = s.sibling)) {
                            (i.return = s.return), (s = i);
                            break;
                          }
                          s = s.return;
                        }
                      i = s;
                    }
                ws(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Po(t, n),
                (r = r((a = Ro(a)))),
                (t.flags |= 1),
                ws(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = ns((r = t.type), t.pendingProps)),
                ks(e, t, r, (a = ns(r.type, a)), n)
              );
            case 15:
              return Ss(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : ns(r, a)),
                Vs(e, t),
                (t.tag = 1),
                Ta(r) ? ((e = !0), Fa(t)) : (e = !1),
                Po(t, n),
                is(t, r, a),
                ls(t, r, a, n),
                _s(null, t, r, !0, e, n)
              );
            case 19:
              return qs(e, t, n);
            case 22:
              return Es(e, t, n);
          }
          throw Error(o(156, t.tag));
        };
        var Qc =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Kc(e) {
          this._internalRoot = e;
        }
        function Yc(e) {
          this._internalRoot = e;
        }
        function Jc(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Xc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Gc() {}
        function Zc(e, t, n, r, a) {
          var o = n._reactRootContainer;
          if (o) {
            var i = o;
            if ("function" === typeof a) {
              var s = a;
              a = function () {
                var e = Wc(i);
                s.call(e);
              };
            }
            Vc(t, i, e, a);
          } else
            i = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var o = r;
                  r = function () {
                    var e = Wc(i);
                    o.call(e);
                  };
                }
                var i = qc(t, r, e, 0, null, !1, 0, "", Gc);
                return (
                  (e._reactRootContainer = i),
                  (e[ha] = i.current),
                  qr(8 === e.nodeType ? e.parentNode : e),
                  uc(),
                  i
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var s = r;
                r = function () {
                  var e = Wc(l);
                  s.call(e);
                };
              }
              var l = Uc(e, 0, !1, null, 0, !1, 0, "", Gc);
              return (
                (e._reactRootContainer = l),
                (e[ha] = l.current),
                qr(8 === e.nodeType ? e.parentNode : e),
                uc(function () {
                  Vc(t, l, n, r);
                }),
                l
              );
            })(n, t, e, a, r);
          return Wc(i);
        }
        (Yc.prototype.render = Kc.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(o(409));
            Vc(e, t, null, null);
          }),
          (Yc.prototype.unmount = Kc.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                uc(function () {
                  Vc(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Yc.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < At.length && 0 !== t && t < At[n].priority;
                n++
              );
              At.splice(n, 0, e), 0 === n && Dt(e);
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (vt(t, 1 | n),
                    rc(t, Xe()),
                    0 === (6 & _l) && ((ql = Xe() + 500), qa()));
                }
                break;
              case 13:
                uc(function () {
                  var t = zo(e, 1);
                  if (null !== t) {
                    var n = ec();
                    nc(t, e, 1, n);
                  }
                }),
                  $c(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = zo(e, 134217728);
              if (null !== t) nc(t, e, 134217728, ec());
              $c(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = tc(e),
                n = zo(e, t);
              if (null !== n) nc(n, e, t, ec());
              $c(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((G(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = xa(r);
                      if (!a) throw Error(o(90));
                      Q(r), G(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                oe(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (_e = cc),
          (je = uc);
        var eu = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, xa, Ne, Oe, cc],
          },
          tu = {
            findFiberByHostInstance: va,
            bundleType: 0,
            version: "18.3.1",
            rendererPackageName: "react-dom",
          },
          nu = {
            bundleType: tu.bundleType,
            version: tu.version,
            rendererPackageName: tu.rendererPackageName,
            rendererConfig: tu.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = He(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              tu.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ru.isDisabled && ru.supportsFiber)
            try {
              (at = ru.inject(nu)), (ot = ru);
            } catch (ue) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eu),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Jc(t)) throw Error(o(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Jc(e)) throw Error(o(299));
            var n = !1,
              r = "",
              a = Qc;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Uc(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              qr(8 === e.nodeType ? e.parentNode : e),
              new Kc(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(o(188));
              throw ((e = Object.keys(e).join(",")), Error(o(268, e)));
            }
            return (e = null === (e = He(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return uc(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Xc(t)) throw Error(o(200));
            return Zc(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Jc(e)) throw Error(o(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              i = "",
              s = Qc;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (t = qc(t, null, e, 1, null != n ? n : null, a, 0, i, s)),
              (e[ha] = t.current),
              qr(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Yc(t);
          }),
          (t.render = function (e, t, n) {
            if (!Xc(t)) throw Error(o(200));
            return Zc(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Xc(e)) throw Error(o(40));
            return (
              !!e._reactRootContainer &&
              (uc(function () {
                Zc(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cc),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Xc(n)) throw Error(o(200));
            if (null == e || void 0 === e._reactInternals) throw Error(o(38));
            return Zc(e, t, n, !1, r);
          }),
          (t.version = "18.3.1-next-f1338f8080-20240426");
      },
      391: (e, t, n) => {
        "use strict";
        var r = n(950);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      950: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(730));
      },
      153: (e, t, n) => {
        "use strict";
        var r = n(43),
          a = Symbol.for("react.element"),
          o = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function c(e, t, n) {
          var r,
            o = {},
            c = null,
            u = null;
          for (r in (void 0 !== n && (c = "" + n),
          void 0 !== t.key && (c = "" + t.key),
          void 0 !== t.ref && (u = t.ref),
          t))
            i.call(t, r) && !l.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: c,
            ref: u,
            props: o,
            _owner: s.current,
          };
        }
        (t.jsx = c), (t.jsxs = c);
      },
      202: (e, t) => {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          o = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          c = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          m = Object.assign,
          g = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        function v() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = g),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (v.prototype = y.prototype);
        var w = (b.prototype = new v());
        (w.constructor = b), m(w, y.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            o = {},
            i = null,
            s = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              k.call(t, a) && !E.hasOwnProperty(a) && (o[a] = t[a]);
          var l = arguments.length - 2;
          if (1 === l) o.children = r;
          else if (1 < l) {
            for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
            o.children = c;
          }
          if (e && e.defaultProps)
            for (a in (l = e.defaultProps)) void 0 === o[a] && (o[a] = l[a]);
          return {
            $$typeof: n,
            type: e,
            key: i,
            ref: s,
            props: o,
            _owner: S.current,
          };
        }
        function N(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var O = /\/+/g;
        function _(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function j(e, t, a, o, i) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (s) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (i = i((l = e))),
              (e = "" === o ? "." + _(l, 0) : o),
              x(i)
                ? ((a = ""),
                  null != e && (a = e.replace(O, "$&/") + "/"),
                  j(i, t, a, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (N(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      a +
                        (!i.key || (l && l.key === i.key)
                          ? ""
                          : ("" + i.key).replace(O, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((l = 0), (o = "" === o ? "." : o + ":"), x(e)))
            for (var c = 0; c < e.length; c++) {
              var u = o + _((s = e[c]), c);
              l += j(s, t, a, u, i);
            }
          else if (
            ((u = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof u)
          )
            for (e = u.call(e), c = 0; !(s = e.next()).done; )
              l += j((s = s.value), t, a, (u = o + _(s, c++)), i);
          else if ("object" === s)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return l;
        }
        function P(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            j(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function R(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var T = { current: null },
          A = { transition: null },
          L = {
            ReactCurrentDispatcher: T,
            ReactCurrentBatchConfig: A,
            ReactCurrentOwner: S,
          };
        function z() {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }
        (t.Children = {
          map: P,
          forEach: function (e, t, n) {
            P(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              P(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              P(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!N(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = i),
          (t.PureComponent = b),
          (t.StrictMode = o),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
          (t.act = z),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = m({}, e.props),
              o = e.key,
              i = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (s = S.current)),
                void 0 !== t.key && (o = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (c in t)
                k.call(t, c) &&
                  !E.hasOwnProperty(c) &&
                  (a[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) a.children = r;
            else if (1 < c) {
              l = Array(c);
              for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
              a.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: o,
              ref: i,
              props: a,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: c, render: e };
          }),
          (t.isValidElement = N),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: R,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = A.transition;
            A.transition = {};
            try {
              e();
            } finally {
              A.transition = t;
            }
          }),
          (t.unstable_act = z),
          (t.useCallback = function (e, t) {
            return T.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return T.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return T.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return T.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return T.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return T.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return T.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return T.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return T.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return T.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return T.current.useRef(e);
          }),
          (t.useState = function (e) {
            return T.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return T.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return T.current.useTransition();
          }),
          (t.version = "18.3.1");
      },
      43: (e, t, n) => {
        "use strict";
        e.exports = n(202);
      },
      579: (e, t, n) => {
        "use strict";
        e.exports = n(153);
      },
      234: (e, t) => {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < o(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
              var s = 2 * (r + 1) - 1,
                l = e[s],
                c = s + 1,
                u = e[c];
              if (0 > o(l, n))
                c < a && 0 > o(u, l)
                  ? ((e[r] = u), (e[c] = n), (r = c))
                  : ((e[r] = l), (e[s] = n), (r = s));
              else {
                if (!(c < a && 0 > o(u, n))) break e;
                (e[r] = u), (e[c] = n), (r = c);
              }
            }
          }
          return t;
        }
        function o(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        var c = [],
          u = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          m = !1,
          g = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          v = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(u); null !== t; ) {
            if (null === t.callback) a(u);
            else {
              if (!(t.startTime <= e)) break;
              a(u), (t.sortIndex = t.expirationTime), n(c, t);
            }
            t = r(u);
          }
        }
        function x(e) {
          if (((g = !1), w(e), !m))
            if (null !== r(c)) (m = !0), A(k);
            else {
              var t = r(u);
              null !== t && L(x, t.startTime - e);
            }
        }
        function k(e, n) {
          (m = !1), g && ((g = !1), v(N), (N = -1)), (h = !0);
          var o = p;
          try {
            for (
              w(n), d = r(c);
              null !== d && (!(d.expirationTime > n) || (e && !j()));

            ) {
              var i = d.callback;
              if ("function" === typeof i) {
                (d.callback = null), (p = d.priorityLevel);
                var s = i(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof s
                    ? (d.callback = s)
                    : d === r(c) && a(c),
                  w(n);
              } else a(c);
              d = r(c);
            }
            if (null !== d) var l = !0;
            else {
              var f = r(u);
              null !== f && L(x, f.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (d = null), (p = o), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          E = !1,
          C = null,
          N = -1,
          O = 5,
          _ = -1;
        function j() {
          return !(t.unstable_now() - _ < O);
        }
        function P() {
          if (null !== C) {
            var e = t.unstable_now();
            _ = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? S() : ((E = !1), (C = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(P);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var R = new MessageChannel(),
            T = R.port2;
          (R.port1.onmessage = P),
            (S = function () {
              T.postMessage(null);
            });
        } else
          S = function () {
            y(P, 0);
          };
        function A(e) {
          (C = e), E || ((E = !0), S());
        }
        function L(e, n) {
          N = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            m || h || ((m = !0), A(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (O = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(c);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, o) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof o && null !== o
                ? (o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i)
                : (o = i),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: o,
                expirationTime: (s = o + s),
                sortIndex: -1,
              }),
              o > i
                ? ((e.sortIndex = o),
                  n(u, e),
                  null === r(c) &&
                    e === r(u) &&
                    (g ? (v(N), (N = -1)) : (g = !0), L(x, o - i)))
                : ((e.sortIndex = s), n(c, e), m || h || ((m = !0), A(k))),
              e
            );
          }),
          (t.unstable_shouldYield = j),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      853: (e, t, n) => {
        "use strict";
        e.exports = n(234);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.m = e),
    (n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return n.d(t, { a: t }), t;
    }),
    (() => {
      var e,
        t = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var o = Object.create(null);
        n.r(o);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var s = 2 & a && r;
          "object" == typeof s && !~e.indexOf(s);
          s = t(s)
        )
          Object.getOwnPropertyNames(s).forEach((e) => (i[e] = () => r[e]));
        return (i.default = () => r), n.d(o, i), o;
      };
    })(),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.f = {}),
    (n.e = (e) =>
      Promise.all(Object.keys(n.f).reduce((t, r) => (n.f[r](e, t), t), []))),
    (n.u = (e) => "static/js/" + e + ".419a5d54.chunk.js"),
    (n.miniCssF = (e) => {}),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = "client:";
      n.l = (r, a, o, i) => {
        if (e[r]) e[r].push(a);
        else {
          var s, l;
          if (void 0 !== o)
            for (
              var c = document.getElementsByTagName("script"), u = 0;
              u < c.length;
              u++
            ) {
              var f = c[u];
              if (
                f.getAttribute("src") == r ||
                f.getAttribute("data-webpack") == t + o
              ) {
                s = f;
                break;
              }
            }
          s ||
            ((l = !0),
            ((s = document.createElement("script")).charset = "utf-8"),
            (s.timeout = 120),
            n.nc && s.setAttribute("nonce", n.nc),
            s.setAttribute("data-webpack", t + o),
            (s.src = r)),
            (e[r] = [a]);
          var d = (t, n) => {
              (s.onerror = s.onload = null), clearTimeout(p);
              var a = e[r];
              if (
                (delete e[r],
                s.parentNode && s.parentNode.removeChild(s),
                a && a.forEach((e) => e(n)),
                t)
              )
                return t(n);
            },
            p = setTimeout(
              d.bind(null, void 0, { type: "timeout", target: s }),
              12e4
            );
          (s.onerror = d.bind(null, s.onerror)),
            (s.onload = d.bind(null, s.onload)),
            l && document.head.appendChild(s);
        }
      };
    })(),
    (n.r = (e) => {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (() => {
      var e = { 792: 0 };
      n.f.j = (t, r) => {
        var a = n.o(e, t) ? e[t] : void 0;
        if (0 !== a)
          if (a) r.push(a[2]);
          else {
            var o = new Promise((n, r) => (a = e[t] = [n, r]));
            r.push((a[2] = o));
            var i = n.p + n.u(t),
              s = new Error();
            n.l(
              i,
              (r) => {
                if (n.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    i = r && r.target && r.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = o),
                    (s.request = i),
                    a[1](s);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var a,
            o,
            i = r[0],
            s = r[1],
            l = r[2],
            c = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (a in s) n.o(s, a) && (n.m[a] = s[a]);
            if (l) l(n);
          }
          for (t && t(r); c < i.length; c++)
            (o = i[c]), n.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (self.webpackChunkclient = self.webpackChunkclient || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (() => {
      "use strict";
      var e = {};
      n.r(e),
        n.d(e, {
          hasBrowserEnv: () => No,
          hasStandardBrowserEnv: () => Oo,
          hasStandardBrowserWebWorkerEnv: () => jo,
          origin: () => Po,
        });
      var t = {};
      n.r(t),
        n.d(t, {
          Decoder: () => tl,
          Encoder: () => Zs,
          PacketType: () => Gs,
          protocol: () => Xs,
        });
      var r,
        a = n(43),
        o = n.t(a, 2),
        i = n(391),
        s = n(950),
        l = n.t(s, 2);
      function c() {
        return (
          (c = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          c.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(r || (r = {}));
      const u = "popstate";
      function f(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function d(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function p(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function h(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          c(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? g(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function m(e) {
        let { pathname: t = "/", search: n = "", hash: r = "" } = e;
        return (
          n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
          t
        );
      }
      function g(e) {
        let t = {};
        if (e) {
          let n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          let r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function y(e, t, n, a) {
        void 0 === a && (a = {});
        let { window: o = document.defaultView, v5Compat: i = !1 } = a,
          s = o.history,
          l = r.Pop,
          d = null,
          g = y();
        function y() {
          return (s.state || { idx: null }).idx;
        }
        function v() {
          l = r.Pop;
          let e = y(),
            t = null == e ? null : e - g;
          (g = e), d && d({ action: l, location: w.location, delta: t });
        }
        function b(e) {
          let t =
              "null" !== o.location.origin
                ? o.location.origin
                : o.location.href,
            n = "string" === typeof e ? e : m(e);
          return (
            (n = n.replace(/ $/, "%20")),
            f(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n
            ),
            new URL(n, t)
          );
        }
        null == g && ((g = 0), s.replaceState(c({}, s.state, { idx: g }), ""));
        let w = {
          get action() {
            return l;
          },
          get location() {
            return e(o, s);
          },
          listen(e) {
            if (d)
              throw new Error("A history only accepts one active listener");
            return (
              o.addEventListener(u, v),
              (d = e),
              () => {
                o.removeEventListener(u, v), (d = null);
              }
            );
          },
          createHref: (e) => t(o, e),
          createURL: b,
          encodeLocation(e) {
            let t = b(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, t) {
            l = r.Push;
            let a = h(w.location, e, t);
            n && n(a, e), (g = y() + 1);
            let c = p(a, g),
              u = w.createHref(a);
            try {
              s.pushState(c, "", u);
            } catch (f) {
              if (f instanceof DOMException && "DataCloneError" === f.name)
                throw f;
              o.location.assign(u);
            }
            i && d && d({ action: l, location: w.location, delta: 1 });
          },
          replace: function (e, t) {
            l = r.Replace;
            let a = h(w.location, e, t);
            n && n(a, e), (g = y());
            let o = p(a, g),
              c = w.createHref(a);
            s.replaceState(o, "", c),
              i && d && d({ action: l, location: w.location, delta: 0 });
          },
          go: (e) => s.go(e),
        };
        return w;
      }
      var v;
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(v || (v = {}));
      new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
      function b(e, t, n) {
        return void 0 === n && (n = "/"), w(e, t, n, !1);
      }
      function w(e, t, n, r) {
        let a = L(("string" === typeof t ? g(t) : t).pathname || "/", n);
        if (null == a) return null;
        let o = x(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  let n =
                    e.length === t.length &&
                    e.slice(0, -1).every((e, n) => e === t[n]);
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex)
                )
          );
        })(o);
        let i = null;
        for (let s = 0; null == i && s < o.length; ++s) {
          let e = A(a);
          i = R(o[s], e, r);
        }
        return i;
      }
      function x(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        let a = (e, a, o) => {
          let i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          i.relativePath.startsWith("/") &&
            (f(
              i.relativePath.startsWith(r),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (i.relativePath = i.relativePath.slice(r.length)));
          let s = I([r, i.relativePath]),
            l = n.concat(i);
          e.children &&
            e.children.length > 0 &&
            (f(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                s +
                '".'
            ),
            x(e.children, t, l, s)),
            (null != e.path || e.index) &&
              t.push({ path: s, score: P(s, e.index), routesMeta: l });
        };
        return (
          e.forEach((e, t) => {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?"))
              for (let r of k(e.path)) a(e, t, r);
            else a(e, t);
          }),
          t
        );
      }
      function k(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [n, ...r] = t,
          a = n.endsWith("?"),
          o = n.replace(/\?$/, "");
        if (0 === r.length) return a ? [o, ""] : [o];
        let i = k(r.join("/")),
          s = [];
        return (
          s.push(...i.map((e) => ("" === e ? o : [o, e].join("/")))),
          a && s.push(...i),
          s.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
        );
      }
      const S = /^:[\w-]+$/,
        E = 3,
        C = 2,
        N = 1,
        O = 10,
        _ = -2,
        j = (e) => "*" === e;
      function P(e, t) {
        let n = e.split("/"),
          r = n.length;
        return (
          n.some(j) && (r += _),
          t && (r += C),
          n
            .filter((e) => !j(e))
            .reduce((e, t) => e + (S.test(t) ? E : "" === t ? N : O), r)
        );
      }
      function R(e, t, n) {
        void 0 === n && (n = !1);
        let { routesMeta: r } = e,
          a = {},
          o = "/",
          i = [];
        for (let s = 0; s < r.length; ++s) {
          let e = r[s],
            l = s === r.length - 1,
            c = "/" === o ? t : t.slice(o.length) || "/",
            u = T(
              { path: e.relativePath, caseSensitive: e.caseSensitive, end: l },
              c
            ),
            f = e.route;
          if (
            (!u &&
              l &&
              n &&
              !r[r.length - 1].route.index &&
              (u = T(
                {
                  path: e.relativePath,
                  caseSensitive: e.caseSensitive,
                  end: !1,
                },
                c
              )),
            !u)
          )
            return null;
          Object.assign(a, u.params),
            i.push({
              params: a,
              pathname: I([o, u.pathname]),
              pathnameBase: U(I([o, u.pathnameBase])),
              route: f,
            }),
            "/" !== u.pathnameBase && (o = I([o, u.pathnameBase]));
        }
        return i;
      }
      function T(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            d(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            let r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                  .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (e, t, n) => (
                      r.push({ paramName: t, isOptional: null != n }),
                      n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    )
                  );
            e.endsWith("*")
              ? (r.push({ paramName: "*" }),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            let o = new RegExp(a, t ? void 0 : "i");
            return [o, r];
          })(e.path, e.caseSensitive, e.end),
          a = t.match(n);
        if (!a) return null;
        let o = a[0],
          i = o.replace(/(.)\/+$/, "$1"),
          s = a.slice(1),
          l = r.reduce((e, t, n) => {
            let { paramName: r, isOptional: a } = t;
            if ("*" === r) {
              let e = s[n] || "";
              i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1");
            }
            const l = s[n];
            return (
              (e[r] = a && !l ? void 0 : (l || "").replace(/%2F/g, "/")), e
            );
          }, {});
        return { params: l, pathname: o, pathnameBase: i, pattern: e };
      }
      function A(e) {
        try {
          return e
            .split("/")
            .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
            .join("/");
        } catch (t) {
          return (
            d(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function L(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function z(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function F(e) {
        return e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
        );
      }
      function D(e, t) {
        let n = F(e);
        return t
          ? n.map((e, t) => (t === n.length - 1 ? e.pathname : e.pathnameBase))
          : n.map((e) => e.pathnameBase);
      }
      function M(e, t, n, r) {
        let a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = g(e))
            : ((a = c({}, e)),
              f(
                !a.pathname || !a.pathname.includes("?"),
                z("?", "pathname", "search", a)
              ),
              f(
                !a.pathname || !a.pathname.includes("#"),
                z("#", "pathname", "hash", a)
              ),
              f(
                !a.search || !a.search.includes("#"),
                z("#", "search", "hash", a)
              ));
        let o,
          i = "" === e || "" === a.pathname,
          s = i ? "/" : a.pathname;
        if (null == s) o = n;
        else {
          let e = t.length - 1;
          if (!r && s.startsWith("..")) {
            let t = s.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join("/");
          }
          o = e >= 0 ? t[e] : "/";
        }
        let l = (function (e, t) {
            void 0 === t && (t = "/");
            let {
                pathname: n,
                search: r = "",
                hash: a = "",
              } = "string" === typeof e ? g(e) : e,
              o = n
                ? n.startsWith("/")
                  ? n
                  : (function (e, t) {
                      let n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach((e) => {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(n, t)
                : t;
            return { pathname: o, search: B(r), hash: q(a) };
          })(a, o),
          u = s && "/" !== s && s.endsWith("/"),
          d = (i || "." === s) && n.endsWith("/");
        return l.pathname.endsWith("/") || (!u && !d) || (l.pathname += "/"), l;
      }
      const I = (e) => e.join("/").replace(/\/\/+/g, "/"),
        U = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        B = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        q = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
      Error;
      function V(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      const W = ["post", "put", "patch", "delete"],
        H = (new Set(W), ["get", ...W]);
      new Set(H), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol("deferred");
      function $() {
        return (
          ($ = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          $.apply(this, arguments)
        );
      }
      const Q = a.createContext(null);
      const K = a.createContext(null);
      const Y = a.createContext(null);
      const J = a.createContext(null);
      const X = a.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      const G = a.createContext(null);
      function Z() {
        return null != a.useContext(J);
      }
      function ee() {
        return Z() || f(!1), a.useContext(J).location;
      }
      function te(e) {
        a.useContext(Y).static || a.useLayoutEffect(e);
      }
      function ne() {
        let { isDataRoute: e } = a.useContext(X);
        return e
          ? (function () {
              let { router: e } = de(ue.UseNavigateStable),
                t = he(fe.UseNavigateStable),
                n = a.useRef(!1);
              return (
                te(() => {
                  n.current = !0;
                }),
                a.useCallback(
                  function (r, a) {
                    void 0 === a && (a = {}),
                      n.current &&
                        ("number" === typeof r
                          ? e.navigate(r)
                          : e.navigate(r, $({ fromRouteId: t }, a)));
                  },
                  [e, t]
                )
              );
            })()
          : (function () {
              Z() || f(!1);
              let e = a.useContext(Q),
                { basename: t, future: n, navigator: r } = a.useContext(Y),
                { matches: o } = a.useContext(X),
                { pathname: i } = ee(),
                s = JSON.stringify(D(o, n.v7_relativeSplatPath)),
                l = a.useRef(!1);
              return (
                te(() => {
                  l.current = !0;
                }),
                a.useCallback(
                  function (n, a) {
                    if ((void 0 === a && (a = {}), !l.current)) return;
                    if ("number" === typeof n) return void r.go(n);
                    let o = M(n, JSON.parse(s), i, "path" === a.relative);
                    null == e &&
                      "/" !== t &&
                      (o.pathname =
                        "/" === o.pathname ? t : I([t, o.pathname])),
                      (a.replace ? r.replace : r.push)(o, a.state, a);
                  },
                  [t, r, s, i, e]
                )
              );
            })();
      }
      function re(e, t) {
        let { relative: n } = void 0 === t ? {} : t,
          { future: r } = a.useContext(Y),
          { matches: o } = a.useContext(X),
          { pathname: i } = ee(),
          s = JSON.stringify(D(o, r.v7_relativeSplatPath));
        return a.useMemo(
          () => M(e, JSON.parse(s), i, "path" === n),
          [e, s, i, n]
        );
      }
      function ae(e, t, n, o) {
        Z() || f(!1);
        let { navigator: i } = a.useContext(Y),
          { matches: s } = a.useContext(X),
          l = s[s.length - 1],
          c = l ? l.params : {},
          u = (l && l.pathname, l ? l.pathnameBase : "/");
        l && l.route;
        let d,
          p = ee();
        if (t) {
          var h;
          let e = "string" === typeof t ? g(t) : t;
          "/" === u ||
            (null == (h = e.pathname) ? void 0 : h.startsWith(u)) ||
            f(!1),
            (d = e);
        } else d = p;
        let m = d.pathname || "/",
          y = m;
        if ("/" !== u) {
          let e = u.replace(/^\//, "").split("/");
          y = "/" + m.replace(/^\//, "").split("/").slice(e.length).join("/");
        }
        let v = b(e, { pathname: y });
        let w = ce(
          v &&
            v.map((e) =>
              Object.assign({}, e, {
                params: Object.assign({}, c, e.params),
                pathname: I([
                  u,
                  i.encodeLocation
                    ? i.encodeLocation(e.pathname).pathname
                    : e.pathname,
                ]),
                pathnameBase:
                  "/" === e.pathnameBase
                    ? u
                    : I([
                        u,
                        i.encodeLocation
                          ? i.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              })
            ),
          s,
          n,
          o
        );
        return t && w
          ? a.createElement(
              J.Provider,
              {
                value: {
                  location: $(
                    {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                    },
                    d
                  ),
                  navigationType: r.Pop,
                },
              },
              w
            )
          : w;
      }
      function oe() {
        let e = (function () {
            var e;
            let t = a.useContext(G),
              n = pe(fe.UseRouteError),
              r = he(fe.UseRouteError);
            if (void 0 !== t) return t;
            return null == (e = n.errors) ? void 0 : e[r];
          })(),
          t = V(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          n = e instanceof Error ? e.stack : null,
          r = "rgba(200,200,200, 0.5)",
          o = { padding: "0.5rem", backgroundColor: r };
        return a.createElement(
          a.Fragment,
          null,
          a.createElement("h2", null, "Unexpected Application Error!"),
          a.createElement("h3", { style: { fontStyle: "italic" } }, t),
          n ? a.createElement("pre", { style: o }, n) : null,
          null
        );
      }
      const ie = a.createElement(oe, null);
      class se extends a.Component {
        constructor(e) {
          super(e),
            (this.state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ("idle" !== t.revalidation && "idle" === e.revalidation)
            ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation,
              }
            : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error(
            "React Router caught the following error during render",
            e,
            t
          );
        }
        render() {
          return void 0 !== this.state.error
            ? a.createElement(
                X.Provider,
                { value: this.props.routeContext },
                a.createElement(G.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                })
              )
            : this.props.children;
        }
      }
      function le(e) {
        let { routeContext: t, match: n, children: r } = e,
          o = a.useContext(Q);
        return (
          o &&
            o.static &&
            o.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = n.route.id),
          a.createElement(X.Provider, { value: t }, r)
        );
      }
      function ce(e, t, n, r) {
        var o;
        if (
          (void 0 === t && (t = []),
          void 0 === n && (n = null),
          void 0 === r && (r = null),
          null == e)
        ) {
          var i;
          if (null == (i = n) || !i.errors) return null;
          e = n.matches;
        }
        let s = e,
          l = null == (o = n) ? void 0 : o.errors;
        if (null != l) {
          let e = s.findIndex(
            (e) => e.route.id && void 0 !== (null == l ? void 0 : l[e.route.id])
          );
          e >= 0 || f(!1), (s = s.slice(0, Math.min(s.length, e + 1)));
        }
        let c = !1,
          u = -1;
        if (n && r && r.v7_partialHydration)
          for (let a = 0; a < s.length; a++) {
            let e = s[a];
            if (
              ((e.route.HydrateFallback || e.route.hydrateFallbackElement) &&
                (u = a),
              e.route.id)
            ) {
              let { loaderData: t, errors: r } = n,
                a =
                  e.route.loader &&
                  void 0 === t[e.route.id] &&
                  (!r || void 0 === r[e.route.id]);
              if (e.route.lazy || a) {
                (c = !0), (s = u >= 0 ? s.slice(0, u + 1) : [s[0]]);
                break;
              }
            }
          }
        return s.reduceRight((e, r, o) => {
          let i,
            f = !1,
            d = null,
            p = null;
          var h;
          n &&
            ((i = l && r.route.id ? l[r.route.id] : void 0),
            (d = r.route.errorElement || ie),
            c &&
              (u < 0 && 0 === o
                ? ((h = "route-fallback"),
                  !1 || me[h] || (me[h] = !0),
                  (f = !0),
                  (p = null))
                : u === o &&
                  ((f = !0), (p = r.route.hydrateFallbackElement || null))));
          let m = t.concat(s.slice(0, o + 1)),
            g = () => {
              let t;
              return (
                (t = i
                  ? d
                  : f
                  ? p
                  : r.route.Component
                  ? a.createElement(r.route.Component, null)
                  : r.route.element
                  ? r.route.element
                  : e),
                a.createElement(le, {
                  match: r,
                  routeContext: {
                    outlet: e,
                    matches: m,
                    isDataRoute: null != n,
                  },
                  children: t,
                })
              );
            };
          return n && (r.route.ErrorBoundary || r.route.errorElement || 0 === o)
            ? a.createElement(se, {
                location: n.location,
                revalidation: n.revalidation,
                component: d,
                error: i,
                children: g(),
                routeContext: { outlet: null, matches: m, isDataRoute: !0 },
              })
            : g();
        }, null);
      }
      var ue = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
          );
        })(ue || {}),
        fe = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
          );
        })(fe || {});
      function de(e) {
        let t = a.useContext(Q);
        return t || f(!1), t;
      }
      function pe(e) {
        let t = a.useContext(K);
        return t || f(!1), t;
      }
      function he(e) {
        let t = (function () {
            let e = a.useContext(X);
            return e || f(!1), e;
          })(),
          n = t.matches[t.matches.length - 1];
        return n.route.id || f(!1), n.route.id;
      }
      const me = {};
      o.startTransition;
      function ge(e) {
        let { to: t, replace: n, state: r, relative: o } = e;
        Z() || f(!1);
        let { future: i, static: s } = a.useContext(Y),
          { matches: l } = a.useContext(X),
          { pathname: c } = ee(),
          u = ne(),
          d = M(t, D(l, i.v7_relativeSplatPath), c, "path" === o),
          p = JSON.stringify(d);
        return (
          a.useEffect(
            () => u(JSON.parse(p), { replace: n, state: r, relative: o }),
            [u, p, o, n, r]
          ),
          null
        );
      }
      function ye(e) {
        f(!1);
      }
      function ve(e) {
        let {
          basename: t = "/",
          children: n = null,
          location: o,
          navigationType: i = r.Pop,
          navigator: s,
          static: l = !1,
          future: c,
        } = e;
        Z() && f(!1);
        let u = t.replace(/^\/*/, "/"),
          d = a.useMemo(
            () => ({
              basename: u,
              navigator: s,
              static: l,
              future: $({ v7_relativeSplatPath: !1 }, c),
            }),
            [u, c, s, l]
          );
        "string" === typeof o && (o = g(o));
        let {
            pathname: p = "/",
            search: h = "",
            hash: m = "",
            state: y = null,
            key: v = "default",
          } = o,
          b = a.useMemo(() => {
            let e = L(p, u);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: h,
                    hash: m,
                    state: y,
                    key: v,
                  },
                  navigationType: i,
                };
          }, [u, p, h, m, y, v, i]);
        return null == b
          ? null
          : a.createElement(
              Y.Provider,
              { value: d },
              a.createElement(J.Provider, { children: n, value: b })
            );
      }
      function be(e) {
        let { children: t, location: n } = e;
        return ae(we(t), n);
      }
      new Promise(() => {});
      a.Component;
      function we(e, t) {
        void 0 === t && (t = []);
        let n = [];
        return (
          a.Children.forEach(e, (e, r) => {
            if (!a.isValidElement(e)) return;
            let o = [...t, r];
            if (e.type === a.Fragment)
              return void n.push.apply(n, we(e.props.children, o));
            e.type !== ye && f(!1), e.props.index && e.props.children && f(!1);
            let i = {
              id: e.props.id || o.join("-"),
              caseSensitive: e.props.caseSensitive,
              element: e.props.element,
              Component: e.props.Component,
              index: e.props.index,
              path: e.props.path,
              loader: e.props.loader,
              action: e.props.action,
              errorElement: e.props.errorElement,
              ErrorBoundary: e.props.ErrorBoundary,
              hasErrorBoundary:
                null != e.props.ErrorBoundary || null != e.props.errorElement,
              shouldRevalidate: e.props.shouldRevalidate,
              handle: e.props.handle,
              lazy: e.props.lazy,
            };
            e.props.children && (i.children = we(e.props.children, o)),
              n.push(i);
          }),
          n
        );
      }
      function xe() {
        return (
          (xe = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          xe.apply(this, arguments)
        );
      }
      function ke(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
      ]);
      const Se = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "unstable_viewTransition",
      ];
      try {
        window.__reactRouterVersion = "6";
      } catch (ml) {}
      new Map();
      const Ee = o.startTransition;
      l.flushSync, o.useId;
      function Ce(e) {
        let { basename: t, children: n, future: r, window: o } = e,
          i = a.useRef();
        var s;
        null == i.current &&
          (i.current =
            (void 0 === (s = { window: o, v5Compat: !0 }) && (s = {}),
            y(
              function (e, t) {
                let { pathname: n, search: r, hash: a } = e.location;
                return h(
                  "",
                  { pathname: n, search: r, hash: a },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : m(t);
              },
              null,
              s
            )));
        let l = i.current,
          [c, u] = a.useState({ action: l.action, location: l.location }),
          { v7_startTransition: f } = r || {},
          d = a.useCallback(
            (e) => {
              f && Ee ? Ee(() => u(e)) : u(e);
            },
            [u, f]
          );
        return (
          a.useLayoutEffect(() => l.listen(d), [l, d]),
          a.createElement(ve, {
            basename: t,
            children: n,
            location: c.location,
            navigationType: c.action,
            navigator: l,
            future: r,
          })
        );
      }
      const Ne =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        Oe = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        _e = a.forwardRef(function (e, t) {
          let n,
            {
              onClick: r,
              relative: o,
              reloadDocument: i,
              replace: s,
              state: l,
              target: c,
              to: u,
              preventScrollReset: d,
              unstable_viewTransition: p,
            } = e,
            h = ke(e, Se),
            { basename: g } = a.useContext(Y),
            y = !1;
          if ("string" === typeof u && Oe.test(u) && ((n = u), Ne))
            try {
              let e = new URL(window.location.href),
                t = u.startsWith("//") ? new URL(e.protocol + u) : new URL(u),
                n = L(t.pathname, g);
              t.origin === e.origin && null != n
                ? (u = n + t.search + t.hash)
                : (y = !0);
            } catch (ml) {}
          let v = (function (e, t) {
              let { relative: n } = void 0 === t ? {} : t;
              Z() || f(!1);
              let { basename: r, navigator: o } = a.useContext(Y),
                { hash: i, pathname: s, search: l } = re(e, { relative: n }),
                c = s;
              return (
                "/" !== r && (c = "/" === s ? r : I([r, s])),
                o.createHref({ pathname: c, search: l, hash: i })
              );
            })(u, { relative: o }),
            b = (function (e, t) {
              let {
                  target: n,
                  replace: r,
                  state: o,
                  preventScrollReset: i,
                  relative: s,
                  unstable_viewTransition: l,
                } = void 0 === t ? {} : t,
                c = ne(),
                u = ee(),
                f = re(e, { relative: s });
              return a.useCallback(
                (t) => {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || "_self" === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(t, n)
                  ) {
                    t.preventDefault();
                    let n = void 0 !== r ? r : m(u) === m(f);
                    c(e, {
                      replace: n,
                      state: o,
                      preventScrollReset: i,
                      relative: s,
                      unstable_viewTransition: l,
                    });
                  }
                },
                [u, c, f, r, o, n, e, i, s, l]
              );
            })(u, {
              replace: s,
              state: l,
              target: c,
              preventScrollReset: d,
              relative: o,
              unstable_viewTransition: p,
            });
          return a.createElement(
            "a",
            xe({}, h, {
              href: n || v,
              onClick:
                y || i
                  ? r
                  : function (e) {
                      r && r(e), e.defaultPrevented || b(e);
                    },
              ref: t,
              target: c,
            })
          );
        });
      var je, Pe;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmit = "useSubmit"),
          (e.UseSubmitFetcher = "useSubmitFetcher"),
          (e.UseFetcher = "useFetcher"),
          (e.useViewTransitionState = "useViewTransitionState");
      })(je || (je = {})),
        (function (e) {
          (e.UseFetcher = "useFetcher"),
            (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Pe || (Pe = {}));
      const Re = () => {};
      let Te = {},
        Ae = {},
        Le = null,
        ze = { mark: Re, measure: Re };
      try {
        "undefined" !== typeof window && (Te = window),
          "undefined" !== typeof document && (Ae = document),
          "undefined" !== typeof MutationObserver && (Le = MutationObserver),
          "undefined" !== typeof performance && (ze = performance);
      } catch (ml) {}
      const { userAgent: Fe = "" } = Te.navigator || {},
        De = Te,
        Me = Ae,
        Ie = Le,
        Ue = ze,
        Be =
          (De.document,
          !!Me.documentElement &&
            !!Me.head &&
            "function" === typeof Me.addEventListener &&
            "function" === typeof Me.createElement),
        qe = ~Fe.indexOf("MSIE") || ~Fe.indexOf("Trident/");
      var Ve = "classic",
        We = "duotone",
        He = "sharp",
        $e = "sharp-duotone",
        Qe = [Ve, We, He, $e],
        Ke = { fak: "kit", "fa-kit": "kit" },
        Ye = { fakd: "kit-duotone", "fa-kit-duotone": "kit-duotone" },
        Je = {
          classic: {
            fa: "solid",
            fas: "solid",
            "fa-solid": "solid",
            far: "regular",
            "fa-regular": "regular",
            fal: "light",
            "fa-light": "light",
            fat: "thin",
            "fa-thin": "thin",
            fad: "duotone",
            "fa-duotone": "duotone",
            fab: "brands",
            "fa-brands": "brands",
          },
          sharp: {
            fa: "solid",
            fass: "solid",
            "fa-solid": "solid",
            fasr: "regular",
            "fa-regular": "regular",
            fasl: "light",
            "fa-light": "light",
            fast: "thin",
            "fa-thin": "thin",
          },
          "sharp-duotone": { fa: "solid", fasds: "solid", "fa-solid": "solid" },
        },
        Xe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        Ge = Xe.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        Ze = {
          GROUP: "duotone-group",
          SWAP_OPACITY: "swap-opacity",
          PRIMARY: "primary",
          SECONDARY: "secondary",
        },
        et = [
          ...Object.keys({
            classic: ["fas", "far", "fal", "fat"],
            sharp: ["fass", "fasr", "fasl", "fast"],
            "sharp-duotone": ["fasds"],
          }),
          "solid",
          "regular",
          "light",
          "thin",
          "duotone",
          "brands",
          "2xs",
          "xs",
          "sm",
          "lg",
          "xl",
          "2xl",
          "beat",
          "border",
          "fade",
          "beat-fade",
          "bounce",
          "flip-both",
          "flip-horizontal",
          "flip-vertical",
          "flip",
          "fw",
          "inverse",
          "layers-counter",
          "layers-text",
          "layers",
          "li",
          "pull-left",
          "pull-right",
          "pulse",
          "rotate-180",
          "rotate-270",
          "rotate-90",
          "rotate-by",
          "shake",
          "spin-pulse",
          "spin-reverse",
          "spin",
          "stack-1x",
          "stack-2x",
          "stack",
          "ul",
          Ze.GROUP,
          Ze.SWAP_OPACITY,
          Ze.PRIMARY,
          Ze.SECONDARY,
        ]
          .concat(Xe.map((e) => "".concat(e, "x")))
          .concat(Ge.map((e) => "w-".concat(e))),
        tt = { kit: "fak" },
        nt = { "kit-duotone": "fakd" };
      const rt = "___FONT_AWESOME___",
        at = 16,
        ot = "fa",
        it = "svg-inline--fa",
        st = "data-fa-i2svg",
        lt = "data-fa-pseudo-element",
        ct = "data-fa-pseudo-element-pending",
        ut = "data-prefix",
        ft = "data-icon",
        dt = "fontawesome-i2svg",
        pt = "async",
        ht = ["HTML", "HEAD", "STYLE", "SCRIPT"],
        mt = (() => {
          try {
            return !0;
          } catch (e) {
            return !1;
          }
        })(),
        gt = [Ve, He, $e];
      function yt(e) {
        return new Proxy(e, { get: (e, t) => (t in e ? e[t] : e[Ve]) });
      }
      const vt = { ...Je };
      vt[Ve] = { ...Je[Ve], ...Ke, ...Ye };
      const bt = yt(vt),
        wt = {
          classic: {
            solid: "fas",
            regular: "far",
            light: "fal",
            thin: "fat",
            duotone: "fad",
            brands: "fab",
          },
          sharp: {
            solid: "fass",
            regular: "fasr",
            light: "fasl",
            thin: "fast",
          },
          "sharp-duotone": { solid: "fasds" },
        };
      wt[Ve] = { ...wt[Ve], ...tt, ...nt };
      const xt = yt(wt),
        kt = {
          classic: {
            fab: "fa-brands",
            fad: "fa-duotone",
            fal: "fa-light",
            far: "fa-regular",
            fas: "fa-solid",
            fat: "fa-thin",
          },
          sharp: {
            fass: "fa-solid",
            fasr: "fa-regular",
            fasl: "fa-light",
            fast: "fa-thin",
          },
          "sharp-duotone": { fasds: "fa-solid" },
        };
      kt[Ve] = { ...kt[Ve], fak: "fa-kit" };
      const St = yt(kt),
        Et = {
          classic: {
            "fa-brands": "fab",
            "fa-duotone": "fad",
            "fa-light": "fal",
            "fa-regular": "far",
            "fa-solid": "fas",
            "fa-thin": "fat",
          },
          sharp: {
            "fa-solid": "fass",
            "fa-regular": "fasr",
            "fa-light": "fasl",
            "fa-thin": "fast",
          },
          "sharp-duotone": { "fa-solid": "fasds" },
        };
      Et[Ve] = { ...Et[Ve], "fa-kit": "fak" };
      const Ct = yt(Et),
        Nt = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,
        Ot = "fa-layers-text",
        _t =
          /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,
        jt =
          (yt({
            classic: {
              900: "fas",
              400: "far",
              normal: "far",
              300: "fal",
              100: "fat",
            },
            sharp: { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" },
            "sharp-duotone": { 900: "fasds" },
          }),
          [
            "class",
            "data-prefix",
            "data-icon",
            "data-fa-transform",
            "data-fa-mask",
          ]),
        Pt = Ze,
        Rt = new Set();
      Object.keys(xt[Ve]).map(Rt.add.bind(Rt)),
        Object.keys(xt[He]).map(Rt.add.bind(Rt)),
        Object.keys(xt[$e]).map(Rt.add.bind(Rt));
      const Tt = ["kit", ...et],
        At = De.FontAwesomeConfig || {};
      if (Me && "function" === typeof Me.querySelector) {
        [
          ["data-family-prefix", "familyPrefix"],
          ["data-css-prefix", "cssPrefix"],
          ["data-family-default", "familyDefault"],
          ["data-style-default", "styleDefault"],
          ["data-replacement-class", "replacementClass"],
          ["data-auto-replace-svg", "autoReplaceSvg"],
          ["data-auto-add-css", "autoAddCss"],
          ["data-auto-a11y", "autoA11y"],
          ["data-search-pseudo-elements", "searchPseudoElements"],
          ["data-observe-mutations", "observeMutations"],
          ["data-mutate-approach", "mutateApproach"],
          ["data-keep-original-source", "keepOriginalSource"],
          ["data-measure-performance", "measurePerformance"],
          ["data-show-missing-icons", "showMissingIcons"],
        ].forEach((e) => {
          let [t, n] = e;
          const r = (function (e) {
            return "" === e || ("false" !== e && ("true" === e || e));
          })(
            (function (e) {
              var t = Me.querySelector("script[" + e + "]");
              if (t) return t.getAttribute(e);
            })(t)
          );
          void 0 !== r && null !== r && (At[n] = r);
        });
      }
      const Lt = {
        styleDefault: "solid",
        familyDefault: "classic",
        cssPrefix: ot,
        replacementClass: it,
        autoReplaceSvg: !0,
        autoAddCss: !0,
        autoA11y: !0,
        searchPseudoElements: !1,
        observeMutations: !0,
        mutateApproach: "async",
        keepOriginalSource: !0,
        measurePerformance: !1,
        showMissingIcons: !0,
      };
      At.familyPrefix && (At.cssPrefix = At.familyPrefix);
      const zt = { ...Lt, ...At };
      zt.autoReplaceSvg || (zt.observeMutations = !1);
      const Ft = {};
      Object.keys(Lt).forEach((e) => {
        Object.defineProperty(Ft, e, {
          enumerable: !0,
          set: function (t) {
            (zt[e] = t), Dt.forEach((e) => e(Ft));
          },
          get: function () {
            return zt[e];
          },
        });
      }),
        Object.defineProperty(Ft, "familyPrefix", {
          enumerable: !0,
          set: function (e) {
            (zt.cssPrefix = e), Dt.forEach((e) => e(Ft));
          },
          get: function () {
            return zt.cssPrefix;
          },
        }),
        (De.FontAwesomeConfig = Ft);
      const Dt = [];
      const Mt = at,
        It = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
      const Ut =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      function Bt() {
        let e = 12,
          t = "";
        for (; e-- > 0; ) t += Ut[(62 * Math.random()) | 0];
        return t;
      }
      function qt(e) {
        const t = [];
        for (let n = (e || []).length >>> 0; n--; ) t[n] = e[n];
        return t;
      }
      function Vt(e) {
        return e.classList
          ? qt(e.classList)
          : (e.getAttribute("class") || "").split(" ").filter((e) => e);
      }
      function Wt(e) {
        return ""
          .concat(e)
          .replace(/&/g, "&amp;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      function Ht(e) {
        return Object.keys(e || {}).reduce(
          (t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"),
          ""
        );
      }
      function $t(e) {
        return (
          e.size !== It.size ||
          e.x !== It.x ||
          e.y !== It.y ||
          e.rotate !== It.rotate ||
          e.flipX ||
          e.flipY
        );
      }
      var Qt =
        ':root, :host {\n  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";\n  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";\n  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";\n  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";\n  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";\n  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";\n  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";\n  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";\n}\n\nsvg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {\n  overflow: visible;\n  box-sizing: content-box;\n}\n\n.svg-inline--fa {\n  display: var(--fa-display, inline-block);\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-2xs {\n  vertical-align: 0.1em;\n}\n.svg-inline--fa.fa-xs {\n  vertical-align: 0em;\n}\n.svg-inline--fa.fa-sm {\n  vertical-align: -0.0714285705em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.2em;\n}\n.svg-inline--fa.fa-xl {\n  vertical-align: -0.25em;\n}\n.svg-inline--fa.fa-2xl {\n  vertical-align: -0.3125em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: var(--fa-pull-margin, 0.3em);\n  width: auto;\n}\n.svg-inline--fa.fa-li {\n  width: var(--fa-li-width, 2em);\n  top: 0.25em;\n}\n.svg-inline--fa.fa-fw {\n  width: var(--fa-fw-width, 1.25em);\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  transform-origin: center center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: var(--fa-counter-background-color, #ff253a);\n  border-radius: var(--fa-counter-border-radius, 1em);\n  box-sizing: border-box;\n  color: var(--fa-inverse, #fff);\n  line-height: var(--fa-counter-line-height, 1);\n  max-width: var(--fa-counter-max-width, 5em);\n  min-width: var(--fa-counter-min-width, 1.5em);\n  overflow: hidden;\n  padding: var(--fa-counter-padding, 0.25em 0.5em);\n  right: var(--fa-right, 0);\n  text-overflow: ellipsis;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-counter-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: var(--fa-bottom, 0);\n  right: var(--fa-right, 0);\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: var(--fa-bottom, 0);\n  left: var(--fa-left, 0);\n  right: auto;\n  top: auto;\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  top: var(--fa-top, 0);\n  right: var(--fa-right, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: var(--fa-left, 0);\n  right: auto;\n  top: var(--fa-top, 0);\n  transform: scale(var(--fa-layers-scale, 0.25));\n  transform-origin: top left;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-2xs {\n  font-size: 0.625em;\n  line-height: 0.1em;\n  vertical-align: 0.225em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n  line-height: 0.0833333337em;\n  vertical-align: 0.125em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n  line-height: 0.0714285718em;\n  vertical-align: 0.0535714295em;\n}\n\n.fa-lg {\n  font-size: 1.25em;\n  line-height: 0.05em;\n  vertical-align: -0.075em;\n}\n\n.fa-xl {\n  font-size: 1.5em;\n  line-height: 0.0416666682em;\n  vertical-align: -0.125em;\n}\n\n.fa-2xl {\n  font-size: 2em;\n  line-height: 0.03125em;\n  vertical-align: -0.1875em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: var(--fa-li-margin, 2.5em);\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: calc(-1 * var(--fa-li-width, 2em));\n  position: absolute;\n  text-align: center;\n  width: var(--fa-li-width, 2em);\n  line-height: inherit;\n}\n\n.fa-border {\n  border-color: var(--fa-border-color, #eee);\n  border-radius: var(--fa-border-radius, 0.1em);\n  border-style: var(--fa-border-style, solid);\n  border-width: var(--fa-border-width, 0.08em);\n  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);\n}\n\n.fa-pull-left {\n  float: left;\n  margin-right: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-pull-right {\n  float: right;\n  margin-left: var(--fa-pull-margin, 0.3em);\n}\n\n.fa-beat {\n  animation-name: fa-beat;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-bounce {\n  animation-name: fa-bounce;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));\n}\n\n.fa-fade {\n  animation-name: fa-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-beat-fade {\n  animation-name: fa-beat-fade;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));\n}\n\n.fa-flip {\n  animation-name: fa-flip;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, ease-in-out);\n}\n\n.fa-shake {\n  animation-name: fa-shake;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin {\n  animation-name: fa-spin;\n  animation-delay: var(--fa-animation-delay, 0s);\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 2s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, linear);\n}\n\n.fa-spin-reverse {\n  --fa-animation-direction: reverse;\n}\n\n.fa-pulse,\n.fa-spin-pulse {\n  animation-name: fa-spin;\n  animation-direction: var(--fa-animation-direction, normal);\n  animation-duration: var(--fa-animation-duration, 1s);\n  animation-iteration-count: var(--fa-animation-iteration-count, infinite);\n  animation-timing-function: var(--fa-animation-timing, steps(8));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .fa-beat,\n.fa-bounce,\n.fa-fade,\n.fa-beat-fade,\n.fa-flip,\n.fa-pulse,\n.fa-shake,\n.fa-spin,\n.fa-spin-pulse {\n    animation-delay: -1ms;\n    animation-duration: 1ms;\n    animation-iteration-count: 1;\n    transition-delay: 0s;\n    transition-duration: 0s;\n  }\n}\n@keyframes fa-beat {\n  0%, 90% {\n    transform: scale(1);\n  }\n  45% {\n    transform: scale(var(--fa-beat-scale, 1.25));\n  }\n}\n@keyframes fa-bounce {\n  0% {\n    transform: scale(1, 1) translateY(0);\n  }\n  10% {\n    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);\n  }\n  30% {\n    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));\n  }\n  50% {\n    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);\n  }\n  57% {\n    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));\n  }\n  64% {\n    transform: scale(1, 1) translateY(0);\n  }\n  100% {\n    transform: scale(1, 1) translateY(0);\n  }\n}\n@keyframes fa-fade {\n  50% {\n    opacity: var(--fa-fade-opacity, 0.4);\n  }\n}\n@keyframes fa-beat-fade {\n  0%, 100% {\n    opacity: var(--fa-beat-fade-opacity, 0.4);\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(var(--fa-beat-fade-scale, 1.125));\n  }\n}\n@keyframes fa-flip {\n  50% {\n    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));\n  }\n}\n@keyframes fa-shake {\n  0% {\n    transform: rotate(-15deg);\n  }\n  4% {\n    transform: rotate(15deg);\n  }\n  8%, 24% {\n    transform: rotate(-18deg);\n  }\n  12%, 28% {\n    transform: rotate(18deg);\n  }\n  16% {\n    transform: rotate(-22deg);\n  }\n  20% {\n    transform: rotate(22deg);\n  }\n  32% {\n    transform: rotate(-12deg);\n  }\n  36% {\n    transform: rotate(12deg);\n  }\n  40%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  transform: scale(1, -1);\n}\n\n.fa-flip-both,\n.fa-flip-horizontal.fa-flip-vertical {\n  transform: scale(-1, -1);\n}\n\n.fa-rotate-by {\n  transform: rotate(var(--fa-rotate-angle, 0));\n}\n\n.fa-stack {\n  display: inline-block;\n  vertical-align: middle;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: var(--fa-stack-z-index, auto);\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}\n\n.sr-only,\n.fa-sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.sr-only-focusable:not(:focus),\n.fa-sr-only-focusable:not(:focus) {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse,\n.fa-duotone.fa-inverse {\n  color: var(--fa-inverse, #fff);\n}';
      function Kt() {
        const e = ot,
          t = it,
          n = Ft.cssPrefix,
          r = Ft.replacementClass;
        let a = Qt;
        if (n !== e || r !== t) {
          const o = new RegExp("\\.".concat(e, "\\-"), "g"),
            i = new RegExp("\\--".concat(e, "\\-"), "g"),
            s = new RegExp("\\.".concat(t), "g");
          a = a
            .replace(o, ".".concat(n, "-"))
            .replace(i, "--".concat(n, "-"))
            .replace(s, ".".concat(r));
        }
        return a;
      }
      let Yt = !1;
      function Jt() {
        Ft.autoAddCss &&
          !Yt &&
          (!(function (e) {
            if (!e || !Be) return;
            const t = Me.createElement("style");
            t.setAttribute("type", "text/css"), (t.innerHTML = e);
            const n = Me.head.childNodes;
            let r = null;
            for (let a = n.length - 1; a > -1; a--) {
              const e = n[a],
                t = (e.tagName || "").toUpperCase();
              ["STYLE", "LINK"].indexOf(t) > -1 && (r = e);
            }
            Me.head.insertBefore(t, r);
          })(Kt()),
          (Yt = !0));
      }
      var Xt = {
        mixout: () => ({ dom: { css: Kt, insertCss: Jt } }),
        hooks: () => ({
          beforeDOMElementCreation() {
            Jt();
          },
          beforeI2svg() {
            Jt();
          },
        }),
      };
      const Gt = De || {};
      Gt[rt] || (Gt[rt] = {}),
        Gt[rt].styles || (Gt[rt].styles = {}),
        Gt[rt].hooks || (Gt[rt].hooks = {}),
        Gt[rt].shims || (Gt[rt].shims = []);
      var Zt = Gt[rt];
      const en = [],
        tn = function () {
          Me.removeEventListener("DOMContentLoaded", tn),
            (nn = 1),
            en.map((e) => e());
        };
      let nn = !1;
      function rn(e) {
        const { tag: t, attributes: n = {}, children: r = [] } = e;
        return "string" === typeof e
          ? Wt(e)
          : "<"
              .concat(t, " ")
              .concat(
                (function (e) {
                  return Object.keys(e || {})
                    .reduce(
                      (t, n) => t + "".concat(n, '="').concat(Wt(e[n]), '" '),
                      ""
                    )
                    .trim();
                })(n),
                ">"
              )
              .concat(r.map(rn).join(""), "</")
              .concat(t, ">");
      }
      function an(e, t, n) {
        if (e && e[t] && e[t][n])
          return { prefix: t, iconName: n, icon: e[t][n] };
      }
      Be &&
        ((nn = (
          Me.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/
        ).test(Me.readyState)),
        nn || Me.addEventListener("DOMContentLoaded", tn));
      var on = function (e, t, n, r) {
        var a,
          o,
          i,
          s = Object.keys(e),
          l = s.length,
          c =
            void 0 !== r
              ? (function (e, t) {
                  return function (n, r, a, o) {
                    return e.call(t, n, r, a, o);
                  };
                })(t, r)
              : t;
        for (
          void 0 === n ? ((a = 1), (i = e[s[0]])) : ((a = 0), (i = n));
          a < l;
          a++
        )
          i = c(i, e[(o = s[a])], o, e);
        return i;
      };
      function sn(e) {
        const t = (function (e) {
          const t = [];
          let n = 0;
          const r = e.length;
          for (; n < r; ) {
            const a = e.charCodeAt(n++);
            if (a >= 55296 && a <= 56319 && n < r) {
              const r = e.charCodeAt(n++);
              56320 == (64512 & r)
                ? t.push(((1023 & a) << 10) + (1023 & r) + 65536)
                : (t.push(a), n--);
            } else t.push(a);
          }
          return t;
        })(e);
        return 1 === t.length ? t[0].toString(16) : null;
      }
      function ln(e) {
        return Object.keys(e).reduce((t, n) => {
          const r = e[n];
          return !!r.icon ? (t[r.iconName] = r.icon) : (t[n] = r), t;
        }, {});
      }
      function cn(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        const { skipHooks: r = !1 } = n,
          a = ln(t);
        "function" !== typeof Zt.hooks.addPack || r
          ? (Zt.styles[e] = { ...(Zt.styles[e] || {}), ...a })
          : Zt.hooks.addPack(e, ln(t)),
          "fas" === e && cn("fa", t);
      }
      const { styles: un, shims: fn } = Zt,
        dn = {
          [Ve]: Object.values(St[Ve]),
          [He]: Object.values(St[He]),
          [$e]: Object.values(St[$e]),
        };
      let pn = null,
        hn = {},
        mn = {},
        gn = {},
        yn = {},
        vn = {};
      const bn = {
        [Ve]: Object.keys(bt[Ve]),
        [He]: Object.keys(bt[He]),
        [$e]: Object.keys(bt[$e]),
      };
      function wn(e, t) {
        const n = t.split("-"),
          r = n[0],
          a = n.slice(1).join("-");
        return r !== e || "" === a || ((o = a), ~Tt.indexOf(o)) ? null : a;
        var o;
      }
      const xn = () => {
        const e = (e) => on(un, (t, n, r) => ((t[r] = on(n, e, {})), t), {});
        (hn = e((e, t, n) => {
          if ((t[3] && (e[t[3]] = n), t[2])) {
            t[2]
              .filter((e) => "number" === typeof e)
              .forEach((t) => {
                e[t.toString(16)] = n;
              });
          }
          return e;
        })),
          (mn = e((e, t, n) => {
            if (((e[n] = n), t[2])) {
              t[2]
                .filter((e) => "string" === typeof e)
                .forEach((t) => {
                  e[t] = n;
                });
            }
            return e;
          })),
          (vn = e((e, t, n) => {
            const r = t[2];
            return (
              (e[n] = n),
              r.forEach((t) => {
                e[t] = n;
              }),
              e
            );
          }));
        const t = "far" in un || Ft.autoFetchSvg,
          n = on(
            fn,
            (e, n) => {
              const r = n[0];
              let a = n[1];
              const o = n[2];
              return (
                "far" !== a || t || (a = "fas"),
                "string" === typeof r &&
                  (e.names[r] = { prefix: a, iconName: o }),
                "number" === typeof r &&
                  (e.unicodes[r.toString(16)] = { prefix: a, iconName: o }),
                e
              );
            },
            { names: {}, unicodes: {} }
          );
        (gn = n.names),
          (yn = n.unicodes),
          (pn = _n(Ft.styleDefault, { family: Ft.familyDefault }));
      };
      var kn;
      function Sn(e, t) {
        return (hn[e] || {})[t];
      }
      function En(e, t) {
        return (vn[e] || {})[t];
      }
      function Cn(e) {
        return gn[e] || { prefix: null, iconName: null };
      }
      function Nn() {
        return pn;
      }
      (kn = (e) => {
        pn = _n(e.styleDefault, { family: Ft.familyDefault });
      }),
        Dt.push(kn),
        xn();
      const On = () => ({ prefix: null, iconName: null, rest: [] });
      function _n(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { family: n = Ve } = t,
          r = bt[n][e],
          a = xt[n][e] || xt[n][r],
          o = e in Zt.styles ? e : null;
        return a || o || null;
      }
      const jn = {
        [Ve]: Object.keys(St[Ve]),
        [He]: Object.keys(St[He]),
        [$e]: Object.keys(St[$e]),
      };
      function Pn(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { skipLookups: n = !1 } = t,
          r = {
            [Ve]: "".concat(Ft.cssPrefix, "-").concat(Ve),
            [He]: "".concat(Ft.cssPrefix, "-").concat(He),
            [$e]: "".concat(Ft.cssPrefix, "-").concat($e),
          };
        let a = null,
          o = Ve;
        const i = Qe.filter((e) => e !== We);
        i.forEach((t) => {
          (e.includes(r[t]) || e.some((e) => jn[t].includes(e))) && (o = t);
        });
        const s = e.reduce((e, t) => {
          const s = wn(Ft.cssPrefix, t);
          if (
            (un[t]
              ? ((t = dn[o].includes(t) ? Ct[o][t] : t),
                (a = t),
                (e.prefix = t))
              : bn[o].indexOf(t) > -1
              ? ((a = t), (e.prefix = _n(t, { family: o })))
              : s
              ? (e.iconName = s)
              : t === Ft.replacementClass ||
                i.some((e) => t === r[e]) ||
                e.rest.push(t),
            !n && e.prefix && e.iconName)
          ) {
            const t = "fa" === a ? Cn(e.iconName) : {},
              n = En(e.prefix, e.iconName);
            t.prefix && (a = null),
              (e.iconName = t.iconName || n || e.iconName),
              (e.prefix = t.prefix || e.prefix),
              "far" !== e.prefix ||
                un.far ||
                !un.fas ||
                Ft.autoFetchSvg ||
                (e.prefix = "fas");
          }
          return e;
        }, On());
        return (
          (e.includes("fa-brands") || e.includes("fab")) && (s.prefix = "fab"),
          (e.includes("fa-duotone") || e.includes("fad")) && (s.prefix = "fad"),
          s.prefix ||
            o !== He ||
            (!un.fass && !Ft.autoFetchSvg) ||
            ((s.prefix = "fass"),
            (s.iconName = En(s.prefix, s.iconName) || s.iconName)),
          s.prefix ||
            o !== $e ||
            (!un.fasds && !Ft.autoFetchSvg) ||
            ((s.prefix = "fasds"),
            (s.iconName = En(s.prefix, s.iconName) || s.iconName)),
          ("fa" !== s.prefix && "fa" !== a) || (s.prefix = Nn() || "fas"),
          s
        );
      }
      let Rn = [],
        Tn = {};
      const An = {},
        Ln = Object.keys(An);
      function zn(e, t) {
        for (
          var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2;
          a < n;
          a++
        )
          r[a - 2] = arguments[a];
        return (
          (Tn[e] || []).forEach((e) => {
            t = e.apply(null, [t, ...r]);
          }),
          t
        );
      }
      function Fn(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        (Tn[e] || []).forEach((e) => {
          e.apply(null, n);
        });
      }
      function Dn() {
        const e = arguments[0],
          t = Array.prototype.slice.call(arguments, 1);
        return An[e] ? An[e].apply(null, t) : void 0;
      }
      function Mn(e) {
        "fa" === e.prefix && (e.prefix = "fas");
        let { iconName: t } = e;
        const n = e.prefix || Nn();
        if (t)
          return (
            (t = En(n, t) || t), an(In.definitions, n, t) || an(Zt.styles, n, t)
          );
      }
      const In = new (class {
          constructor() {
            this.definitions = {};
          }
          add() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            const r = t.reduce(this._pullDefinitions, {});
            Object.keys(r).forEach((e) => {
              (this.definitions[e] = {
                ...(this.definitions[e] || {}),
                ...r[e],
              }),
                cn(e, r[e]);
              const t = St[Ve][e];
              t && cn(t, r[e]), xn();
            });
          }
          reset() {
            this.definitions = {};
          }
          _pullDefinitions(e, t) {
            const n = t.prefix && t.iconName && t.icon ? { 0: t } : t;
            return (
              Object.keys(n).map((t) => {
                const { prefix: r, iconName: a, icon: o } = n[t],
                  i = o[2];
                e[r] || (e[r] = {}),
                  i.length > 0 &&
                    i.forEach((t) => {
                      "string" === typeof t && (e[r][t] = o);
                    }),
                  (e[r][a] = o);
              }),
              e
            );
          }
        })(),
        Un = {
          i2svg: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return Be
              ? (Fn("beforeI2svg", e),
                Dn("pseudoElements2svg", e),
                Dn("i2svg", e))
              : Promise.reject(
                  new Error("Operation requires a DOM of some kind.")
                );
          },
          watch: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            const { autoReplaceSvgRoot: t } = e;
            var n;
            !1 === Ft.autoReplaceSvg && (Ft.autoReplaceSvg = !0),
              (Ft.observeMutations = !0),
              (n = () => {
                Vn({ autoReplaceSvgRoot: t }), Fn("watch", e);
              }),
              Be && (nn ? setTimeout(n, 0) : en.push(n));
          },
        },
        Bn = {
          icon: (e) => {
            if (null === e) return null;
            if ("object" === typeof e && e.prefix && e.iconName)
              return {
                prefix: e.prefix,
                iconName: En(e.prefix, e.iconName) || e.iconName,
              };
            if (Array.isArray(e) && 2 === e.length) {
              const t = 0 === e[1].indexOf("fa-") ? e[1].slice(3) : e[1],
                n = _n(e[0]);
              return { prefix: n, iconName: En(n, t) || t };
            }
            if (
              "string" === typeof e &&
              (e.indexOf("".concat(Ft.cssPrefix, "-")) > -1 || e.match(Nt))
            ) {
              const t = Pn(e.split(" "), { skipLookups: !0 });
              return {
                prefix: t.prefix || Nn(),
                iconName: En(t.prefix, t.iconName) || t.iconName,
              };
            }
            if ("string" === typeof e) {
              const t = Nn();
              return { prefix: t, iconName: En(t, e) || e };
            }
          },
        },
        qn = {
          noAuto: () => {
            (Ft.autoReplaceSvg = !1), (Ft.observeMutations = !1), Fn("noAuto");
          },
          config: Ft,
          dom: Un,
          parse: Bn,
          library: In,
          findIconDefinition: Mn,
          toHtml: rn,
        },
        Vn = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const { autoReplaceSvgRoot: t = Me } = e;
          (Object.keys(Zt.styles).length > 0 || Ft.autoFetchSvg) &&
            Be &&
            Ft.autoReplaceSvg &&
            qn.dom.i2svg({ node: t });
        };
      function Wn(e, t) {
        return (
          Object.defineProperty(e, "abstract", { get: t }),
          Object.defineProperty(e, "html", {
            get: function () {
              return e.abstract.map((e) => rn(e));
            },
          }),
          Object.defineProperty(e, "node", {
            get: function () {
              if (!Be) return;
              const t = Me.createElement("div");
              return (t.innerHTML = e.html), t.children;
            },
          }),
          e
        );
      }
      function Hn(e) {
        const {
            icons: { main: t, mask: n },
            prefix: r,
            iconName: a,
            transform: o,
            symbol: i,
            title: s,
            maskId: l,
            titleId: c,
            extra: u,
            watchable: f = !1,
          } = e,
          { width: d, height: p } = n.found ? n : t,
          h = "fak" === r,
          m = [
            Ft.replacementClass,
            a ? "".concat(Ft.cssPrefix, "-").concat(a) : "",
          ]
            .filter((e) => -1 === u.classes.indexOf(e))
            .filter((e) => "" !== e || !!e)
            .concat(u.classes)
            .join(" ");
        let g = {
          children: [],
          attributes: {
            ...u.attributes,
            "data-prefix": r,
            "data-icon": a,
            class: m,
            role: u.attributes.role || "img",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 ".concat(d, " ").concat(p),
          },
        };
        const y =
          h && !~u.classes.indexOf("fa-fw")
            ? { width: "".concat((d / p) * 16 * 0.0625, "em") }
            : {};
        f && (g.attributes[st] = ""),
          s &&
            (g.children.push({
              tag: "title",
              attributes: {
                id:
                  g.attributes["aria-labelledby"] || "title-".concat(c || Bt()),
              },
              children: [s],
            }),
            delete g.attributes.title);
        const v = {
            ...g,
            prefix: r,
            iconName: a,
            main: t,
            mask: n,
            maskId: l,
            transform: o,
            symbol: i,
            styles: { ...y, ...u.styles },
          },
          { children: b, attributes: w } =
            n.found && t.found
              ? Dn("generateAbstractMask", v) || {
                  children: [],
                  attributes: {},
                }
              : Dn("generateAbstractIcon", v) || {
                  children: [],
                  attributes: {},
                };
        return (
          (v.children = b),
          (v.attributes = w),
          i
            ? (function (e) {
                let {
                  prefix: t,
                  iconName: n,
                  children: r,
                  attributes: a,
                  symbol: o,
                } = e;
                return [
                  {
                    tag: "svg",
                    attributes: { style: "display: none;" },
                    children: [
                      {
                        tag: "symbol",
                        attributes: {
                          ...a,
                          id:
                            !0 === o
                              ? ""
                                  .concat(t, "-")
                                  .concat(Ft.cssPrefix, "-")
                                  .concat(n)
                              : o,
                        },
                        children: r,
                      },
                    ],
                  },
                ];
              })(v)
            : (function (e) {
                let {
                  children: t,
                  main: n,
                  mask: r,
                  attributes: a,
                  styles: o,
                  transform: i,
                } = e;
                if ($t(i) && n.found && !r.found) {
                  const { width: e, height: t } = n,
                    r = { x: e / t / 2, y: 0.5 };
                  a.style = Ht({
                    ...o,
                    "transform-origin": ""
                      .concat(r.x + i.x / 16, "em ")
                      .concat(r.y + i.y / 16, "em"),
                  });
                }
                return [{ tag: "svg", attributes: a, children: t }];
              })(v)
        );
      }
      function $n(e) {
        const {
            content: t,
            width: n,
            height: r,
            transform: a,
            title: o,
            extra: i,
            watchable: s = !1,
          } = e,
          l = {
            ...i.attributes,
            ...(o ? { title: o } : {}),
            class: i.classes.join(" "),
          };
        s && (l[st] = "");
        const c = { ...i.styles };
        $t(a) &&
          ((c.transform = (function (e) {
            let {
                transform: t,
                width: n = at,
                height: r = at,
                startCentered: a = !1,
              } = e,
              o = "";
            return (
              (o +=
                a && qe
                  ? "translate("
                      .concat(t.x / Mt - n / 2, "em, ")
                      .concat(t.y / Mt - r / 2, "em) ")
                  : a
                  ? "translate(calc(-50% + "
                      .concat(t.x / Mt, "em), calc(-50% + ")
                      .concat(t.y / Mt, "em)) ")
                  : "translate("
                      .concat(t.x / Mt, "em, ")
                      .concat(t.y / Mt, "em) ")),
              (o += "scale("
                .concat((t.size / Mt) * (t.flipX ? -1 : 1), ", ")
                .concat((t.size / Mt) * (t.flipY ? -1 : 1), ") ")),
              (o += "rotate(".concat(t.rotate, "deg) ")),
              o
            );
          })({ transform: a, startCentered: !0, width: n, height: r })),
          (c["-webkit-transform"] = c.transform));
        const u = Ht(c);
        u.length > 0 && (l.style = u);
        const f = [];
        return (
          f.push({ tag: "span", attributes: l, children: [t] }),
          o &&
            f.push({
              tag: "span",
              attributes: { class: "sr-only" },
              children: [o],
            }),
          f
        );
      }
      const { styles: Qn } = Zt;
      function Kn(e) {
        const t = e[0],
          n = e[1],
          [r] = e.slice(4);
        let a = null;
        return (
          (a = Array.isArray(r)
            ? {
                tag: "g",
                attributes: {
                  class: "".concat(Ft.cssPrefix, "-").concat(Pt.GROUP),
                },
                children: [
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(Ft.cssPrefix, "-").concat(Pt.SECONDARY),
                      fill: "currentColor",
                      d: r[0],
                    },
                  },
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(Ft.cssPrefix, "-").concat(Pt.PRIMARY),
                      fill: "currentColor",
                      d: r[1],
                    },
                  },
                ],
              }
            : { tag: "path", attributes: { fill: "currentColor", d: r } }),
          { found: !0, width: t, height: n, icon: a }
        );
      }
      const Yn = { found: !1, width: 512, height: 512 };
      function Jn(e, t) {
        let n = t;
        return (
          "fa" === t && null !== Ft.styleDefault && (t = Nn()),
          new Promise((r, a) => {
            if ("fa" === n) {
              const n = Cn(e) || {};
              (e = n.iconName || e), (t = n.prefix || t);
            }
            if (e && t && Qn[t] && Qn[t][e]) {
              return r(Kn(Qn[t][e]));
            }
            !(function (e, t) {
              mt ||
                Ft.showMissingIcons ||
                !e ||
                console.error(
                  'Icon with name "'
                    .concat(e, '" and prefix "')
                    .concat(t, '" is missing.')
                );
            })(e, t),
              r({
                ...Yn,
                icon:
                  (Ft.showMissingIcons && e && Dn("missingIconAbstract")) || {},
              });
          })
        );
      }
      const Xn = () => {},
        Gn =
          Ft.measurePerformance && Ue && Ue.mark && Ue.measure
            ? Ue
            : { mark: Xn, measure: Xn },
        Zn = 'FA "6.6.0"',
        er = (e) => {
          Gn.mark("".concat(Zn, " ").concat(e, " ends")),
            Gn.measure(
              "".concat(Zn, " ").concat(e),
              "".concat(Zn, " ").concat(e, " begins"),
              "".concat(Zn, " ").concat(e, " ends")
            );
        };
      var tr = {
        begin: (e) => (
          Gn.mark("".concat(Zn, " ").concat(e, " begins")), () => er(e)
        ),
        end: er,
      };
      const nr = () => {};
      function rr(e) {
        return "string" === typeof (e.getAttribute ? e.getAttribute(st) : null);
      }
      function ar(e) {
        return Me.createElementNS("http://www.w3.org/2000/svg", e);
      }
      function or(e) {
        return Me.createElement(e);
      }
      function ir(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { ceFn: n = "svg" === e.tag ? ar : or } = t;
        if ("string" === typeof e) return Me.createTextNode(e);
        const r = n(e.tag);
        Object.keys(e.attributes || []).forEach(function (t) {
          r.setAttribute(t, e.attributes[t]);
        });
        return (
          (e.children || []).forEach(function (e) {
            r.appendChild(ir(e, { ceFn: n }));
          }),
          r
        );
      }
      const sr = {
        replace: function (e) {
          const t = e[0];
          if (t.parentNode)
            if (
              (e[1].forEach((e) => {
                t.parentNode.insertBefore(ir(e), t);
              }),
              null === t.getAttribute(st) && Ft.keepOriginalSource)
            ) {
              let e = Me.createComment(
                (function (e) {
                  let t = " ".concat(e.outerHTML, " ");
                  return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
                })(t)
              );
              t.parentNode.replaceChild(e, t);
            } else t.remove();
        },
        nest: function (e) {
          const t = e[0],
            n = e[1];
          if (~Vt(t).indexOf(Ft.replacementClass)) return sr.replace(e);
          const r = new RegExp("".concat(Ft.cssPrefix, "-.*"));
          if ((delete n[0].attributes.id, n[0].attributes.class)) {
            const e = n[0].attributes.class
              .split(" ")
              .reduce(
                (e, t) => (
                  t === Ft.replacementClass || t.match(r)
                    ? e.toSvg.push(t)
                    : e.toNode.push(t),
                  e
                ),
                { toNode: [], toSvg: [] }
              );
            (n[0].attributes.class = e.toSvg.join(" ")),
              0 === e.toNode.length
                ? t.removeAttribute("class")
                : t.setAttribute("class", e.toNode.join(" "));
          }
          const a = n.map((e) => rn(e)).join("\n");
          t.setAttribute(st, ""), (t.innerHTML = a);
        },
      };
      function lr(e) {
        e();
      }
      function cr(e, t) {
        const n = "function" === typeof t ? t : nr;
        if (0 === e.length) n();
        else {
          let t = lr;
          Ft.mutateApproach === pt && (t = De.requestAnimationFrame || lr),
            t(() => {
              const t =
                  !0 === Ft.autoReplaceSvg
                    ? sr.replace
                    : sr[Ft.autoReplaceSvg] || sr.replace,
                r = tr.begin("mutate");
              e.map(t), r(), n();
            });
        }
      }
      let ur = !1;
      function fr() {
        ur = !0;
      }
      function dr() {
        ur = !1;
      }
      let pr = null;
      function hr(e) {
        if (!Ie) return;
        if (!Ft.observeMutations) return;
        const {
          treeCallback: t = nr,
          nodeCallback: n = nr,
          pseudoElementsCallback: r = nr,
          observeMutationsRoot: a = Me,
        } = e;
        (pr = new Ie((e) => {
          if (ur) return;
          const a = Nn();
          qt(e).forEach((e) => {
            if (
              ("childList" === e.type &&
                e.addedNodes.length > 0 &&
                !rr(e.addedNodes[0]) &&
                (Ft.searchPseudoElements && r(e.target), t(e.target)),
              "attributes" === e.type &&
                e.target.parentNode &&
                Ft.searchPseudoElements &&
                r(e.target.parentNode),
              "attributes" === e.type &&
                rr(e.target) &&
                ~jt.indexOf(e.attributeName))
            )
              if (
                "class" === e.attributeName &&
                (function (e) {
                  const t = e.getAttribute ? e.getAttribute(ut) : null,
                    n = e.getAttribute ? e.getAttribute(ft) : null;
                  return t && n;
                })(e.target)
              ) {
                const { prefix: t, iconName: n } = Pn(Vt(e.target));
                e.target.setAttribute(ut, t || a),
                  n && e.target.setAttribute(ft, n);
              } else
                (o = e.target) &&
                  o.classList &&
                  o.classList.contains &&
                  o.classList.contains(Ft.replacementClass) &&
                  n(e.target);
            var o;
          });
        })),
          Be &&
            pr.observe(a, {
              childList: !0,
              attributes: !0,
              characterData: !0,
              subtree: !0,
            });
      }
      function mr(e) {
        const t = e.getAttribute("data-prefix"),
          n = e.getAttribute("data-icon"),
          r = void 0 !== e.innerText ? e.innerText.trim() : "";
        let a = Pn(Vt(e));
        return (
          a.prefix || (a.prefix = Nn()),
          t && n && ((a.prefix = t), (a.iconName = n)),
          (a.iconName && a.prefix) ||
            (a.prefix &&
              r.length > 0 &&
              (a.iconName =
                (function (e, t) {
                  return (mn[e] || {})[t];
                })(a.prefix, e.innerText) || Sn(a.prefix, sn(e.innerText))),
            !a.iconName &&
              Ft.autoFetchSvg &&
              e.firstChild &&
              e.firstChild.nodeType === Node.TEXT_NODE &&
              (a.iconName = e.firstChild.data)),
          a
        );
      }
      function gr(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { styleParser: !0 };
        const { iconName: n, prefix: r, rest: a } = mr(e),
          o = (function (e) {
            const t = qt(e.attributes).reduce(
                (e, t) => (
                  "class" !== e.name &&
                    "style" !== e.name &&
                    (e[t.name] = t.value),
                  e
                ),
                {}
              ),
              n = e.getAttribute("title"),
              r = e.getAttribute("data-fa-title-id");
            return (
              Ft.autoA11y &&
                (n
                  ? (t["aria-labelledby"] = ""
                      .concat(Ft.replacementClass, "-title-")
                      .concat(r || Bt()))
                  : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
              t
            );
          })(e),
          i = zn("parseNodeAttributes", {}, e);
        let s = t.styleParser
          ? (function (e) {
              const t = e.getAttribute("style");
              let n = [];
              return (
                t &&
                  (n = t.split(";").reduce((e, t) => {
                    const n = t.split(":"),
                      r = n[0],
                      a = n.slice(1);
                    return r && a.length > 0 && (e[r] = a.join(":").trim()), e;
                  }, {})),
                n
              );
            })(e)
          : [];
        return {
          iconName: n,
          title: e.getAttribute("title"),
          titleId: e.getAttribute("data-fa-title-id"),
          prefix: r,
          transform: It,
          mask: { iconName: null, prefix: null, rest: [] },
          maskId: null,
          symbol: !1,
          extra: { classes: a, styles: s, attributes: o },
          ...i,
        };
      }
      const { styles: yr } = Zt;
      function vr(e) {
        const t =
          "nest" === Ft.autoReplaceSvg ? gr(e, { styleParser: !1 }) : gr(e);
        return ~t.extra.classes.indexOf(Ot)
          ? Dn("generateLayersText", e, t)
          : Dn("generateSvgReplacementMutation", e, t);
      }
      let br = new Set();
      function wr(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!Be) return Promise.resolve();
        const n = Me.documentElement.classList,
          r = (e) => n.add("".concat(dt, "-").concat(e)),
          a = (e) => n.remove("".concat(dt, "-").concat(e)),
          o = Ft.autoFetchSvg
            ? br
            : gt.map((e) => "fa-".concat(e)).concat(Object.keys(yr));
        o.includes("fa") || o.push("fa");
        const i = [".".concat(Ot, ":not([").concat(st, "])")]
          .concat(o.map((e) => ".".concat(e, ":not([").concat(st, "])")))
          .join(", ");
        if (0 === i.length) return Promise.resolve();
        let s = [];
        try {
          s = qt(e.querySelectorAll(i));
        } catch (u) {}
        if (!(s.length > 0)) return Promise.resolve();
        r("pending"), a("complete");
        const l = tr.begin("onTree"),
          c = s.reduce((e, t) => {
            try {
              const n = vr(t);
              n && e.push(n);
            } catch (u) {
              mt || ("MissingIcon" === u.name && console.error(u));
            }
            return e;
          }, []);
        return new Promise((e, n) => {
          Promise.all(c)
            .then((n) => {
              cr(n, () => {
                r("active"),
                  r("complete"),
                  a("pending"),
                  "function" === typeof t && t(),
                  l(),
                  e();
              });
            })
            .catch((e) => {
              l(), n(e);
            });
        });
      }
      function xr(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        vr(e).then((e) => {
          e && cr([e], t);
        });
      }
      gt.map((e) => {
        br.add("fa-".concat(e));
      }),
        Object.keys(bt[Ve]).map(br.add.bind(br)),
        Object.keys(bt[He]).map(br.add.bind(br)),
        Object.keys(bt[$e]).map(br.add.bind(br)),
        (br = [...br]);
      const kr = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const {
          transform: n = It,
          symbol: r = !1,
          mask: a = null,
          maskId: o = null,
          title: i = null,
          titleId: s = null,
          classes: l = [],
          attributes: c = {},
          styles: u = {},
        } = t;
        if (!e) return;
        const { prefix: f, iconName: d, icon: p } = e;
        return Wn(
          { type: "icon", ...e },
          () => (
            Fn("beforeDOMElementCreation", { iconDefinition: e, params: t }),
            Ft.autoA11y &&
              (i
                ? (c["aria-labelledby"] = ""
                    .concat(Ft.replacementClass, "-title-")
                    .concat(s || Bt()))
                : ((c["aria-hidden"] = "true"), (c.focusable = "false"))),
            Hn({
              icons: {
                main: Kn(p),
                mask: a
                  ? Kn(a.icon)
                  : { found: !1, width: null, height: null, icon: {} },
              },
              prefix: f,
              iconName: d,
              transform: { ...It, ...n },
              symbol: r,
              title: i,
              maskId: o,
              titleId: s,
              extra: { attributes: c, styles: u, classes: l },
            })
          )
        );
      };
      var Sr = {
          mixout() {
            return {
              icon:
                ((e = kr),
                function (t) {
                  let n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  const r = (t || {}).icon ? t : Mn(t || {});
                  let { mask: a } = n;
                  return (
                    a && (a = (a || {}).icon ? a : Mn(a || {})),
                    e(r, { ...n, mask: a })
                  );
                }),
            };
            var e;
          },
          hooks: () => ({
            mutationObserverCallbacks: (e) => (
              (e.treeCallback = wr), (e.nodeCallback = xr), e
            ),
          }),
          provides(e) {
            (e.i2svg = function (e) {
              const { node: t = Me, callback: n = () => {} } = e;
              return wr(t, n);
            }),
              (e.generateSvgReplacementMutation = function (e, t) {
                const {
                  iconName: n,
                  title: r,
                  titleId: a,
                  prefix: o,
                  transform: i,
                  symbol: s,
                  mask: l,
                  maskId: c,
                  extra: u,
                } = t;
                return new Promise((t, f) => {
                  Promise.all([
                    Jn(n, o),
                    l.iconName
                      ? Jn(l.iconName, l.prefix)
                      : Promise.resolve({
                          found: !1,
                          width: 512,
                          height: 512,
                          icon: {},
                        }),
                  ])
                    .then((l) => {
                      let [f, d] = l;
                      t([
                        e,
                        Hn({
                          icons: { main: f, mask: d },
                          prefix: o,
                          iconName: n,
                          transform: i,
                          symbol: s,
                          maskId: c,
                          title: r,
                          titleId: a,
                          extra: u,
                          watchable: !0,
                        }),
                      ]);
                    })
                    .catch(f);
                });
              }),
              (e.generateAbstractIcon = function (e) {
                let {
                  children: t,
                  attributes: n,
                  main: r,
                  transform: a,
                  styles: o,
                } = e;
                const i = Ht(o);
                let s;
                return (
                  i.length > 0 && (n.style = i),
                  $t(a) &&
                    (s = Dn("generateAbstractTransformGrouping", {
                      main: r,
                      transform: a,
                      containerWidth: r.width,
                      iconWidth: r.width,
                    })),
                  t.push(s || r.icon),
                  { children: t, attributes: n }
                );
              });
          },
        },
        Er = {
          mixout: () => ({
            layer(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              const { classes: n = [] } = t;
              return Wn({ type: "layer" }, () => {
                Fn("beforeDOMElementCreation", { assembler: e, params: t });
                let r = [];
                return (
                  e((e) => {
                    Array.isArray(e)
                      ? e.map((e) => {
                          r = r.concat(e.abstract);
                        })
                      : (r = r.concat(e.abstract));
                  }),
                  [
                    {
                      tag: "span",
                      attributes: {
                        class: ["".concat(Ft.cssPrefix, "-layers"), ...n].join(
                          " "
                        ),
                      },
                      children: r,
                    },
                  ]
                );
              });
            },
          }),
        },
        Cr = {
          mixout: () => ({
            counter(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              const {
                title: n = null,
                classes: r = [],
                attributes: a = {},
                styles: o = {},
              } = t;
              return Wn(
                { type: "counter", content: e },
                () => (
                  Fn("beforeDOMElementCreation", { content: e, params: t }),
                  (function (e) {
                    const { content: t, title: n, extra: r } = e,
                      a = {
                        ...r.attributes,
                        ...(n ? { title: n } : {}),
                        class: r.classes.join(" "),
                      },
                      o = Ht(r.styles);
                    o.length > 0 && (a.style = o);
                    const i = [];
                    return (
                      i.push({ tag: "span", attributes: a, children: [t] }),
                      n &&
                        i.push({
                          tag: "span",
                          attributes: { class: "sr-only" },
                          children: [n],
                        }),
                      i
                    );
                  })({
                    content: e.toString(),
                    title: n,
                    extra: {
                      attributes: a,
                      styles: o,
                      classes: [
                        "".concat(Ft.cssPrefix, "-layers-counter"),
                        ...r,
                      ],
                    },
                  })
                )
              );
            },
          }),
        },
        Nr = {
          mixout: () => ({
            text(e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
              const {
                transform: n = It,
                title: r = null,
                classes: a = [],
                attributes: o = {},
                styles: i = {},
              } = t;
              return Wn(
                { type: "text", content: e },
                () => (
                  Fn("beforeDOMElementCreation", { content: e, params: t }),
                  $n({
                    content: e,
                    transform: { ...It, ...n },
                    title: r,
                    extra: {
                      attributes: o,
                      styles: i,
                      classes: ["".concat(Ft.cssPrefix, "-layers-text"), ...a],
                    },
                  })
                )
              );
            },
          }),
          provides(e) {
            e.generateLayersText = function (e, t) {
              const { title: n, transform: r, extra: a } = t;
              let o = null,
                i = null;
              if (qe) {
                const t = parseInt(getComputedStyle(e).fontSize, 10),
                  n = e.getBoundingClientRect();
                (o = n.width / t), (i = n.height / t);
              }
              return (
                Ft.autoA11y && !n && (a.attributes["aria-hidden"] = "true"),
                Promise.resolve([
                  e,
                  $n({
                    content: e.innerHTML,
                    width: o,
                    height: i,
                    transform: r,
                    title: n,
                    extra: a,
                    watchable: !0,
                  }),
                ])
              );
            };
          },
        };
      const Or = new RegExp('"', "ug"),
        _r = [1105920, 1112319],
        jr = {
          FontAwesome: { normal: "fas", 400: "fas" },
          "Font Awesome 6 Free": { 900: "fas", 400: "far" },
          "Font Awesome 6 Pro": {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal",
            100: "fat",
          },
          "Font Awesome 6 Brands": { 400: "fab", normal: "fab" },
          "Font Awesome 6 Duotone": { 900: "fad" },
          "Font Awesome 6 Sharp": {
            900: "fass",
            400: "fasr",
            normal: "fasr",
            300: "fasl",
            100: "fast",
          },
          "Font Awesome 6 Sharp Duotone": { 900: "fasds" },
          "Font Awesome 5 Free": { 900: "fas", 400: "far" },
          "Font Awesome 5 Pro": {
            900: "fas",
            400: "far",
            normal: "far",
            300: "fal",
          },
          "Font Awesome 5 Brands": { 400: "fab", normal: "fab" },
          "Font Awesome 5 Duotone": { 900: "fad" },
          "Font Awesome Kit": { 400: "fak", normal: "fak" },
          "Font Awesome Kit Duotone": { 400: "fakd", normal: "fakd" },
        },
        Pr = Object.keys(jr).reduce(
          (e, t) => ((e[t.toLowerCase()] = jr[t]), e),
          {}
        ),
        Rr = Object.keys(Pr).reduce((e, t) => {
          const n = Pr[t];
          return (e[t] = n[900] || [...Object.entries(n)][0][1]), e;
        }, {});
      function Tr(e, t) {
        const n = "".concat(ct).concat(t.replace(":", "-"));
        return new Promise((r, a) => {
          if (null !== e.getAttribute(n)) return r();
          const o = qt(e.children).filter((e) => e.getAttribute(lt) === t)[0],
            i = De.getComputedStyle(e, t),
            s = i.getPropertyValue("font-family"),
            l = s.match(_t),
            c = i.getPropertyValue("font-weight"),
            u = i.getPropertyValue("content");
          if (o && !l) return e.removeChild(o), r();
          if (l && "none" !== u && "" !== u) {
            const u = i.getPropertyValue("content");
            let f = (function (e, t) {
              const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(),
                r = parseInt(t),
                a = isNaN(r) ? "normal" : r;
              return (Pr[n] || {})[a] || Rr[n];
            })(s, c);
            const { value: d, isSecondary: p } = (function (e) {
                const t = e.replace(Or, ""),
                  n = (function (e, t) {
                    const n = e.length;
                    let r,
                      a = e.charCodeAt(t);
                    return a >= 55296 &&
                      a <= 56319 &&
                      n > t + 1 &&
                      ((r = e.charCodeAt(t + 1)), r >= 56320 && r <= 57343)
                      ? 1024 * (a - 55296) + r - 56320 + 65536
                      : a;
                  })(t, 0),
                  r = n >= _r[0] && n <= _r[1],
                  a = 2 === t.length && t[0] === t[1];
                return { value: sn(a ? t[0] : t), isSecondary: r || a };
              })(u),
              h = l[0].startsWith("FontAwesome");
            let m = Sn(f, d),
              g = m;
            if (h) {
              const e = (function (e) {
                const t = yn[e],
                  n = Sn("fas", e);
                return (
                  t ||
                  (n ? { prefix: "fas", iconName: n } : null) || {
                    prefix: null,
                    iconName: null,
                  }
                );
              })(d);
              e.iconName && e.prefix && ((m = e.iconName), (f = e.prefix));
            }
            if (
              !m ||
              p ||
              (o && o.getAttribute(ut) === f && o.getAttribute(ft) === g)
            )
              r();
            else {
              e.setAttribute(n, g), o && e.removeChild(o);
              const i = {
                  iconName: null,
                  title: null,
                  titleId: null,
                  prefix: null,
                  transform: It,
                  symbol: !1,
                  mask: { iconName: null, prefix: null, rest: [] },
                  maskId: null,
                  extra: { classes: [], styles: {}, attributes: {} },
                },
                { extra: s } = i;
              (s.attributes[lt] = t),
                Jn(m, f)
                  .then((a) => {
                    const o = Hn({
                        ...i,
                        icons: { main: a, mask: On() },
                        prefix: f,
                        iconName: g,
                        extra: s,
                        watchable: !0,
                      }),
                      l = Me.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "svg"
                      );
                    "::before" === t
                      ? e.insertBefore(l, e.firstChild)
                      : e.appendChild(l),
                      (l.outerHTML = o.map((e) => rn(e)).join("\n")),
                      e.removeAttribute(n),
                      r();
                  })
                  .catch(a);
            }
          } else r();
        });
      }
      function Ar(e) {
        return Promise.all([Tr(e, "::before"), Tr(e, "::after")]);
      }
      function Lr(e) {
        return (
          e.parentNode !== document.head &&
          !~ht.indexOf(e.tagName.toUpperCase()) &&
          !e.getAttribute(lt) &&
          (!e.parentNode || "svg" !== e.parentNode.tagName)
        );
      }
      function zr(e) {
        if (Be)
          return new Promise((t, n) => {
            const r = qt(e.querySelectorAll("*")).filter(Lr).map(Ar),
              a = tr.begin("searchPseudoElements");
            fr(),
              Promise.all(r)
                .then(() => {
                  a(), dr(), t();
                })
                .catch(() => {
                  a(), dr(), n();
                });
          });
      }
      var Fr = {
        hooks: () => ({
          mutationObserverCallbacks: (e) => (
            (e.pseudoElementsCallback = zr), e
          ),
        }),
        provides(e) {
          e.pseudoElements2svg = function (e) {
            const { node: t = Me } = e;
            Ft.searchPseudoElements && zr(t);
          };
        },
      };
      let Dr = !1;
      var Mr = {
        mixout: () => ({
          dom: {
            unwatch() {
              fr(), (Dr = !0);
            },
          },
        }),
        hooks: () => ({
          bootstrap() {
            hr(zn("mutationObserverCallbacks", {}));
          },
          noAuto() {
            pr && pr.disconnect();
          },
          watch(e) {
            const { observeMutationsRoot: t } = e;
            Dr
              ? dr()
              : hr(
                  zn("mutationObserverCallbacks", { observeMutationsRoot: t })
                );
          },
        }),
      };
      const Ir = (e) =>
        e
          .toLowerCase()
          .split(" ")
          .reduce(
            (e, t) => {
              const n = t.toLowerCase().split("-"),
                r = n[0];
              let a = n.slice(1).join("-");
              if (r && "h" === a) return (e.flipX = !0), e;
              if (r && "v" === a) return (e.flipY = !0), e;
              if (((a = parseFloat(a)), isNaN(a))) return e;
              switch (r) {
                case "grow":
                  e.size = e.size + a;
                  break;
                case "shrink":
                  e.size = e.size - a;
                  break;
                case "left":
                  e.x = e.x - a;
                  break;
                case "right":
                  e.x = e.x + a;
                  break;
                case "up":
                  e.y = e.y - a;
                  break;
                case "down":
                  e.y = e.y + a;
                  break;
                case "rotate":
                  e.rotate = e.rotate + a;
              }
              return e;
            },
            { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 }
          );
      var Ur = {
        mixout: () => ({ parse: { transform: (e) => Ir(e) } }),
        hooks: () => ({
          parseNodeAttributes(e, t) {
            const n = t.getAttribute("data-fa-transform");
            return n && (e.transform = Ir(n)), e;
          },
        }),
        provides(e) {
          e.generateAbstractTransformGrouping = function (e) {
            let { main: t, transform: n, containerWidth: r, iconWidth: a } = e;
            const o = { transform: "translate(".concat(r / 2, " 256)") },
              i = "translate(".concat(32 * n.x, ", ").concat(32 * n.y, ") "),
              s = "scale("
                .concat((n.size / 16) * (n.flipX ? -1 : 1), ", ")
                .concat((n.size / 16) * (n.flipY ? -1 : 1), ") "),
              l = "rotate(".concat(n.rotate, " 0 0)"),
              c = { transform: "".concat(i, " ").concat(s, " ").concat(l) },
              u = { transform: "translate(".concat((a / 2) * -1, " -256)") };
            return {
              tag: "g",
              attributes: { ...o },
              children: [
                {
                  tag: "g",
                  attributes: { ...c },
                  children: [
                    {
                      tag: t.icon.tag,
                      children: t.icon.children,
                      attributes: { ...t.icon.attributes, ...u },
                    },
                  ],
                },
              ],
            };
          };
        },
      };
      const Br = { x: 0, y: 0, width: "100%", height: "100%" };
      function qr(e) {
        let t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return (
          e.attributes &&
            (e.attributes.fill || t) &&
            (e.attributes.fill = "black"),
          e
        );
      }
      var Vr = {
          hooks: () => ({
            parseNodeAttributes(e, t) {
              const n = t.getAttribute("data-fa-mask"),
                r = n ? Pn(n.split(" ").map((e) => e.trim())) : On();
              return (
                r.prefix || (r.prefix = Nn()),
                (e.mask = r),
                (e.maskId = t.getAttribute("data-fa-mask-id")),
                e
              );
            },
          }),
          provides(e) {
            e.generateAbstractMask = function (e) {
              let {
                children: t,
                attributes: n,
                main: r,
                mask: a,
                maskId: o,
                transform: i,
              } = e;
              const { width: s, icon: l } = r,
                { width: c, icon: u } = a,
                f = (function (e) {
                  let { transform: t, containerWidth: n, iconWidth: r } = e;
                  const a = { transform: "translate(".concat(n / 2, " 256)") },
                    o = "translate("
                      .concat(32 * t.x, ", ")
                      .concat(32 * t.y, ") "),
                    i = "scale("
                      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
                      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
                    s = "rotate(".concat(t.rotate, " 0 0)");
                  return {
                    outer: a,
                    inner: {
                      transform: "".concat(o, " ").concat(i, " ").concat(s),
                    },
                    path: {
                      transform: "translate(".concat((r / 2) * -1, " -256)"),
                    },
                  };
                })({ transform: i, containerWidth: c, iconWidth: s }),
                d = { tag: "rect", attributes: { ...Br, fill: "white" } },
                p = l.children ? { children: l.children.map(qr) } : {},
                h = {
                  tag: "g",
                  attributes: { ...f.inner },
                  children: [
                    qr({
                      tag: l.tag,
                      attributes: { ...l.attributes, ...f.path },
                      ...p,
                    }),
                  ],
                },
                m = { tag: "g", attributes: { ...f.outer }, children: [h] },
                g = "mask-".concat(o || Bt()),
                y = "clip-".concat(o || Bt()),
                v = {
                  tag: "mask",
                  attributes: {
                    ...Br,
                    id: g,
                    maskUnits: "userSpaceOnUse",
                    maskContentUnits: "userSpaceOnUse",
                  },
                  children: [d, m],
                },
                b = {
                  tag: "defs",
                  children: [
                    {
                      tag: "clipPath",
                      attributes: { id: y },
                      children: ((w = u), "g" === w.tag ? w.children : [w]),
                    },
                    v,
                  ],
                };
              var w;
              return (
                t.push(b, {
                  tag: "rect",
                  attributes: {
                    fill: "currentColor",
                    "clip-path": "url(#".concat(y, ")"),
                    mask: "url(#".concat(g, ")"),
                    ...Br,
                  },
                }),
                { children: t, attributes: n }
              );
            };
          },
        },
        Wr = {
          provides(e) {
            let t = !1;
            De.matchMedia &&
              (t = De.matchMedia("(prefers-reduced-motion: reduce)").matches),
              (e.missingIconAbstract = function () {
                const e = [],
                  n = { fill: "currentColor" },
                  r = {
                    attributeType: "XML",
                    repeatCount: "indefinite",
                    dur: "2s",
                  };
                e.push({
                  tag: "path",
                  attributes: {
                    ...n,
                    d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
                  },
                });
                const a = { ...r, attributeName: "opacity" },
                  o = {
                    tag: "circle",
                    attributes: { ...n, cx: "256", cy: "364", r: "28" },
                    children: [],
                  };
                return (
                  t ||
                    o.children.push(
                      {
                        tag: "animate",
                        attributes: {
                          ...r,
                          attributeName: "r",
                          values: "28;14;28;28;14;28;",
                        },
                      },
                      {
                        tag: "animate",
                        attributes: { ...a, values: "1;0;1;1;0;1;" },
                      }
                    ),
                  e.push(o),
                  e.push({
                    tag: "path",
                    attributes: {
                      ...n,
                      opacity: "1",
                      d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                    },
                    children: t
                      ? []
                      : [
                          {
                            tag: "animate",
                            attributes: { ...a, values: "1;0;0;0;0;1;" },
                          },
                        ],
                  }),
                  t ||
                    e.push({
                      tag: "path",
                      attributes: {
                        ...n,
                        opacity: "0",
                        d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                      },
                      children: [
                        {
                          tag: "animate",
                          attributes: { ...a, values: "0;0;1;1;0;0;" },
                        },
                      ],
                    }),
                  { tag: "g", attributes: { class: "missing" }, children: e }
                );
              });
          },
        };
      !(function (e, t) {
        let { mixoutsTo: n } = t;
        (Rn = e),
          (Tn = {}),
          Object.keys(An).forEach((e) => {
            -1 === Ln.indexOf(e) && delete An[e];
          }),
          Rn.forEach((e) => {
            const t = e.mixout ? e.mixout() : {};
            if (
              (Object.keys(t).forEach((e) => {
                "function" === typeof t[e] && (n[e] = t[e]),
                  "object" === typeof t[e] &&
                    Object.keys(t[e]).forEach((r) => {
                      n[e] || (n[e] = {}), (n[e][r] = t[e][r]);
                    });
              }),
              e.hooks)
            ) {
              const t = e.hooks();
              Object.keys(t).forEach((e) => {
                Tn[e] || (Tn[e] = []), Tn[e].push(t[e]);
              });
            }
            e.provides && e.provides(An);
          });
      })(
        [
          Xt,
          Sr,
          Er,
          Cr,
          Nr,
          Fr,
          Mr,
          Ur,
          Vr,
          Wr,
          {
            hooks: () => ({
              parseNodeAttributes(e, t) {
                const n = t.getAttribute("data-fa-symbol"),
                  r = null !== n && ("" === n || n);
                return (e.symbol = r), e;
              },
            }),
          },
        ],
        { mixoutsTo: qn }
      );
      const Hr = qn.parse,
        $r = qn.icon;
      var Qr = n(173),
        Kr = n.n(Qr);
      function Yr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Jr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Yr(Object(n), !0).forEach(function (t) {
                Gr(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Yr(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function Xr(e) {
        return (
          (Xr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Xr(e)
        );
      }
      function Gr(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Zr(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              o = Object.keys(e);
            for (r = 0; r < o.length; r++)
              (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function ea(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return ta(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return ta(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return ta(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ta(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function na(e) {
        return (
          (t = e),
          (t -= 0) === t
            ? e
            : (e = e.replace(/[\-_\s]+(.)?/g, function (e, t) {
                return t ? t.toUpperCase() : "";
              }))
                .substr(0, 1)
                .toLowerCase() + e.substr(1)
        );
        var t;
      }
      var ra = ["style"];
      var aa = !1;
      try {
        aa = !0;
      } catch (ml) {}
      function oa(e) {
        return e && "object" === Xr(e) && e.prefix && e.iconName && e.icon
          ? e
          : Hr.icon
          ? Hr.icon(e)
          : null === e
          ? null
          : e && "object" === Xr(e) && e.prefix && e.iconName
          ? e
          : Array.isArray(e) && 2 === e.length
          ? { prefix: e[0], iconName: e[1] }
          : "string" === typeof e
          ? { prefix: "fas", iconName: e }
          : void 0;
      }
      function ia(e, t) {
        return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
          ? Gr({}, e, t)
          : {};
      }
      var sa = {
          border: !1,
          className: "",
          mask: null,
          maskId: null,
          fixedWidth: !1,
          inverse: !1,
          flip: !1,
          icon: null,
          listItem: !1,
          pull: null,
          pulse: !1,
          rotation: null,
          size: null,
          spin: !1,
          spinPulse: !1,
          spinReverse: !1,
          beat: !1,
          fade: !1,
          beatFade: !1,
          bounce: !1,
          shake: !1,
          symbol: !1,
          title: "",
          titleId: null,
          transform: null,
          swapOpacity: !1,
        },
        la = a.forwardRef(function (e, t) {
          var n = Jr(Jr({}, sa), e),
            r = n.icon,
            a = n.mask,
            o = n.symbol,
            i = n.className,
            s = n.title,
            l = n.titleId,
            c = n.maskId,
            u = oa(r),
            f = ia(
              "classes",
              [].concat(
                ea(
                  (function (e) {
                    var t,
                      n = e.beat,
                      r = e.fade,
                      a = e.beatFade,
                      o = e.bounce,
                      i = e.shake,
                      s = e.flash,
                      l = e.spin,
                      c = e.spinPulse,
                      u = e.spinReverse,
                      f = e.pulse,
                      d = e.fixedWidth,
                      p = e.inverse,
                      h = e.border,
                      m = e.listItem,
                      g = e.flip,
                      y = e.size,
                      v = e.rotation,
                      b = e.pull,
                      w =
                        (Gr(
                          (t = {
                            "fa-beat": n,
                            "fa-fade": r,
                            "fa-beat-fade": a,
                            "fa-bounce": o,
                            "fa-shake": i,
                            "fa-flash": s,
                            "fa-spin": l,
                            "fa-spin-reverse": u,
                            "fa-spin-pulse": c,
                            "fa-pulse": f,
                            "fa-fw": d,
                            "fa-inverse": p,
                            "fa-border": h,
                            "fa-li": m,
                            "fa-flip": !0 === g,
                            "fa-flip-horizontal":
                              "horizontal" === g || "both" === g,
                            "fa-flip-vertical":
                              "vertical" === g || "both" === g,
                          }),
                          "fa-".concat(y),
                          "undefined" !== typeof y && null !== y
                        ),
                        Gr(
                          t,
                          "fa-rotate-".concat(v),
                          "undefined" !== typeof v && null !== v && 0 !== v
                        ),
                        Gr(
                          t,
                          "fa-pull-".concat(b),
                          "undefined" !== typeof b && null !== b
                        ),
                        Gr(t, "fa-swap-opacity", e.swapOpacity),
                        t);
                    return Object.keys(w)
                      .map(function (e) {
                        return w[e] ? e : null;
                      })
                      .filter(function (e) {
                        return e;
                      });
                  })(n)
                ),
                ea((i || "").split(" "))
              )
            ),
            d = ia(
              "transform",
              "string" === typeof n.transform
                ? Hr.transform(n.transform)
                : n.transform
            ),
            p = ia("mask", oa(a)),
            h = $r(
              u,
              Jr(
                Jr(Jr(Jr({}, f), d), p),
                {},
                { symbol: o, title: s, titleId: l, maskId: c }
              )
            );
          if (!h)
            return (
              (function () {
                var e;
                !aa &&
                  console &&
                  "function" === typeof console.error &&
                  (e = console).error.apply(e, arguments);
              })("Could not find icon", u),
              null
            );
          var m = h.abstract,
            g = { ref: t };
          return (
            Object.keys(n).forEach(function (e) {
              sa.hasOwnProperty(e) || (g[e] = n[e]);
            }),
            ca(m[0], g)
          );
        });
      (la.displayName = "FontAwesomeIcon"),
        (la.propTypes = {
          beat: Kr().bool,
          border: Kr().bool,
          beatFade: Kr().bool,
          bounce: Kr().bool,
          className: Kr().string,
          fade: Kr().bool,
          flash: Kr().bool,
          mask: Kr().oneOfType([Kr().object, Kr().array, Kr().string]),
          maskId: Kr().string,
          fixedWidth: Kr().bool,
          inverse: Kr().bool,
          flip: Kr().oneOf([!0, !1, "horizontal", "vertical", "both"]),
          icon: Kr().oneOfType([Kr().object, Kr().array, Kr().string]),
          listItem: Kr().bool,
          pull: Kr().oneOf(["right", "left"]),
          pulse: Kr().bool,
          rotation: Kr().oneOf([0, 90, 180, 270]),
          shake: Kr().bool,
          size: Kr().oneOf([
            "2xs",
            "xs",
            "sm",
            "lg",
            "xl",
            "2xl",
            "1x",
            "2x",
            "3x",
            "4x",
            "5x",
            "6x",
            "7x",
            "8x",
            "9x",
            "10x",
          ]),
          spin: Kr().bool,
          spinPulse: Kr().bool,
          spinReverse: Kr().bool,
          symbol: Kr().oneOfType([Kr().bool, Kr().string]),
          title: Kr().string,
          titleId: Kr().string,
          transform: Kr().oneOfType([Kr().string, Kr().object]),
          swapOpacity: Kr().bool,
        });
      var ca = function e(t, n) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if ("string" === typeof n) return n;
        var a = (n.children || []).map(function (n) {
            return e(t, n);
          }),
          o = Object.keys(n.attributes || {}).reduce(
            function (e, t) {
              var r = n.attributes[t];
              switch (t) {
                case "class":
                  (e.attrs.className = r), delete n.attributes.class;
                  break;
                case "style":
                  e.attrs.style = r
                    .split(";")
                    .map(function (e) {
                      return e.trim();
                    })
                    .filter(function (e) {
                      return e;
                    })
                    .reduce(function (e, t) {
                      var n,
                        r = t.indexOf(":"),
                        a = na(t.slice(0, r)),
                        o = t.slice(r + 1).trim();
                      return (
                        a.startsWith("webkit")
                          ? (e[
                              ((n = a), n.charAt(0).toUpperCase() + n.slice(1))
                            ] = o)
                          : (e[a] = o),
                        e
                      );
                    }, {});
                  break;
                default:
                  0 === t.indexOf("aria-") || 0 === t.indexOf("data-")
                    ? (e.attrs[t.toLowerCase()] = r)
                    : (e.attrs[na(t)] = r);
              }
              return e;
            },
            { attrs: {} }
          ),
          i = r.style,
          s = void 0 === i ? {} : i,
          l = Zr(r, ra);
        return (
          (o.attrs.style = Jr(Jr({}, o.attrs.style), s)),
          t.apply(void 0, [n.tag, Jr(Jr({}, o.attrs), l)].concat(ea(a)))
        );
      }.bind(null, a.createElement);
      const ua = {
          prefix: "fas",
          iconName: "pencil",
          icon: [
            512,
            512,
            [9999, 61504, "pencil-alt"],
            "f303",
            "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1 0 32c0 8.8 7.2 16 16 16l32 0zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z",
          ],
        },
        fa = ua,
        da = {
          prefix: "fas",
          iconName: "lock",
          icon: [
            448,
            512,
            [128274],
            "f023",
            "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z",
          ],
        },
        pa = {
          prefix: "fas",
          iconName: "user",
          icon: [
            448,
            512,
            [128100, 62144],
            "f007",
            "M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z",
          ],
        },
        ha = {
          prefix: "fas",
          iconName: "code",
          icon: [
            640,
            512,
            [],
            "f121",
            "M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z",
          ],
        },
        ma = {
          prefix: "fas",
          iconName: "phone",
          icon: [
            512,
            512,
            [128222, 128379],
            "f095",
            "M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z",
          ],
        },
        ga = {
          prefix: "fas",
          iconName: "envelope",
          icon: [
            512,
            512,
            [128386, 9993, 61443],
            "f0e0",
            "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z",
          ],
        },
        ya = {
          prefix: "fas",
          iconName: "paperclip",
          icon: [
            448,
            512,
            [128206],
            "f0c6",
            "M364.2 83.8c-24.4-24.4-64-24.4-88.4 0l-184 184c-42.1 42.1-42.1 110.3 0 152.4s110.3 42.1 152.4 0l152-152c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-152 152c-64 64-167.6 64-231.6 0s-64-167.6 0-231.6l184-184c46.3-46.3 121.3-46.3 167.6 0s46.3 121.3 0 167.6l-176 176c-28.6 28.6-75 28.6-103.6 0s-28.6-75 0-103.6l144-144c10.9-10.9 28.7-10.9 39.6 0s10.9 28.7 0 39.6l-144 144c-6.7 6.7-6.7 17.7 0 24.4s17.7 6.7 24.4 0l176-176c24.4-24.4 24.4-64 0-88.4z",
          ],
        },
        va = {
          prefix: "fas",
          iconName: "face-smile",
          icon: [
            512,
            512,
            [128578, "smile"],
            "f118",
            "M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",
          ],
        },
        ba = va,
        wa = {
          prefix: "fas",
          iconName: "paper-plane",
          icon: [
            512,
            512,
            [61913],
            "f1d8",
            "M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z",
          ],
        };
      var xa = n(579);
      const ka = () =>
        (0, xa.jsxs)("div", {
          children: [
            (0, xa.jsxs)("nav", {
              className: "navbar bg-dark",
              children: [
                (0, xa.jsx)("h1", {
                  children: (0, xa.jsxs)(_e, {
                    to: "/",
                    children: [
                      (0, xa.jsx)(la, { icon: ha }),
                      "Independent Corporate",
                    ],
                  }),
                }),
                (0, xa.jsxs)("ul", {
                  children: [
                    (0, xa.jsx)("li", {
                      children: (0, xa.jsx)(_e, {
                        to: "/register1",
                        children: "Register",
                      }),
                    }),
                    (0, xa.jsx)("li", {
                      children: (0, xa.jsx)(_e, {
                        to: "/login1",
                        children: "Login",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, xa.jsx)("section", {
              className: "landing",
              children: (0, xa.jsx)("div", {
                className: "dark-overlay",
                children: (0, xa.jsxs)("div", {
                  className: "landing-inner",
                  children: [
                    (0, xa.jsx)("h1", {
                      className: "x-large",
                      children: "Independent Corporate",
                    }),
                    (0, xa.jsx)("p", {
                      className: "lead",
                      children:
                        "Create a developer profile/portfolio, share posts and get help from other developers",
                    }),
                    (0, xa.jsxs)("div", {
                      className: "buttons",
                      children: [
                        (0, xa.jsx)(_e, {
                          to: "register1",
                          className: "btn btn-primary",
                          children: "Sign Up",
                        }),
                        (0, xa.jsx)(_e, {
                          to: "login1",
                          className: "btn btn-primary",
                          children: "Login",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      function Sa(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      const { toString: Ea } = Object.prototype,
        { getPrototypeOf: Ca } = Object,
        Na = ((e) => (t) => {
          const n = Ea.call(t);
          return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
        })(Object.create(null)),
        Oa = (e) => ((e = e.toLowerCase()), (t) => Na(t) === e),
        _a = (e) => (t) => typeof t === e,
        { isArray: ja } = Array,
        Pa = _a("undefined");
      const Ra = Oa("ArrayBuffer");
      const Ta = _a("string"),
        Aa = _a("function"),
        La = _a("number"),
        za = (e) => null !== e && "object" === typeof e,
        Fa = (e) => {
          if ("object" !== Na(e)) return !1;
          const t = Ca(e);
          return (
            (null === t ||
              t === Object.prototype ||
              null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        Da = Oa("Date"),
        Ma = Oa("File"),
        Ia = Oa("Blob"),
        Ua = Oa("FileList"),
        Ba = Oa("URLSearchParams"),
        [qa, Va, Wa, Ha] = [
          "ReadableStream",
          "Request",
          "Response",
          "Headers",
        ].map(Oa);
      function $a(e, t) {
        let n,
          r,
          { allOwnKeys: a = !1 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null !== e && "undefined" !== typeof e)
          if (("object" !== typeof e && (e = [e]), ja(e)))
            for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
          else {
            const r = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
              o = r.length;
            let i;
            for (n = 0; n < o; n++) (i = r[n]), t.call(null, e[i], i, e);
          }
      }
      function Qa(e, t) {
        t = t.toLowerCase();
        const n = Object.keys(e);
        let r,
          a = n.length;
        for (; a-- > 0; ) if (((r = n[a]), t === r.toLowerCase())) return r;
        return null;
      }
      const Ka =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof self
            ? self
            : "undefined" !== typeof window
            ? window
            : global,
        Ya = (e) => !Pa(e) && e !== Ka;
      const Ja =
        ((Xa = "undefined" !== typeof Uint8Array && Ca(Uint8Array)),
        (e) => Xa && e instanceof Xa);
      var Xa;
      const Ga = Oa("HTMLFormElement"),
        Za = ((e) => {
          let { hasOwnProperty: t } = e;
          return (e, n) => t.call(e, n);
        })(Object.prototype),
        eo = Oa("RegExp"),
        to = (e, t) => {
          const n = Object.getOwnPropertyDescriptors(e),
            r = {};
          $a(n, (n, a) => {
            let o;
            !1 !== (o = t(n, a, e)) && (r[a] = o || n);
          }),
            Object.defineProperties(e, r);
        },
        no = "abcdefghijklmnopqrstuvwxyz",
        ro = "0123456789",
        ao = { DIGIT: ro, ALPHA: no, ALPHA_DIGIT: no + no.toUpperCase() + ro };
      const oo = Oa("AsyncFunction"),
        io = {
          isArray: ja,
          isArrayBuffer: Ra,
          isBuffer: function (e) {
            return (
              null !== e &&
              !Pa(e) &&
              null !== e.constructor &&
              !Pa(e.constructor) &&
              Aa(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let t;
            return (
              e &&
              (("function" === typeof FormData && e instanceof FormData) ||
                (Aa(e.append) &&
                  ("formdata" === (t = Na(e)) ||
                    ("object" === t &&
                      Aa(e.toString) &&
                      "[object FormData]" === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            let t;
            return (
              (t =
                "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
                  ? ArrayBuffer.isView(e)
                  : e && e.buffer && Ra(e.buffer)),
              t
            );
          },
          isString: Ta,
          isNumber: La,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: za,
          isPlainObject: Fa,
          isReadableStream: qa,
          isRequest: Va,
          isResponse: Wa,
          isHeaders: Ha,
          isUndefined: Pa,
          isDate: Da,
          isFile: Ma,
          isBlob: Ia,
          isRegExp: eo,
          isFunction: Aa,
          isStream: (e) => za(e) && Aa(e.pipe),
          isURLSearchParams: Ba,
          isTypedArray: Ja,
          isFileList: Ua,
          forEach: $a,
          merge: function e() {
            const { caseless: t } = (Ya(this) && this) || {},
              n = {},
              r = (r, a) => {
                const o = (t && Qa(n, a)) || a;
                Fa(n[o]) && Fa(r)
                  ? (n[o] = e(n[o], r))
                  : Fa(r)
                  ? (n[o] = e({}, r))
                  : ja(r)
                  ? (n[o] = r.slice())
                  : (n[o] = r);
              };
            for (let a = 0, o = arguments.length; a < o; a++)
              arguments[a] && $a(arguments[a], r);
            return n;
          },
          extend: function (e, t, n) {
            let { allOwnKeys: r } =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
            return (
              $a(
                t,
                (t, r) => {
                  n && Aa(t) ? (e[r] = Sa(t, n)) : (e[r] = t);
                },
                { allOwnKeys: r }
              ),
              e
            );
          },
          trim: (e) =>
            e.trim
              ? e.trim()
              : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, n, r) => {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: (e, t, n, r) => {
            let a, o, i;
            const s = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (a = Object.getOwnPropertyNames(e), o = a.length; o-- > 0; )
                (i = a[o]),
                  (r && !r(i, e, t)) || s[i] || ((t[i] = e[i]), (s[i] = !0));
              e = !1 !== n && Ca(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: Na,
          kindOfTest: Oa,
          endsWith: (e, t, n) => {
            (e = String(e)),
              (void 0 === n || n > e.length) && (n = e.length),
              (n -= t.length);
            const r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: (e) => {
            if (!e) return null;
            if (ja(e)) return e;
            let t = e.length;
            if (!La(t)) return null;
            const n = new Array(t);
            for (; t-- > 0; ) n[t] = e[t];
            return n;
          },
          forEachEntry: (e, t) => {
            const n = (e && e[Symbol.iterator]).call(e);
            let r;
            for (; (r = n.next()) && !r.done; ) {
              const n = r.value;
              t.call(e, n[0], n[1]);
            }
          },
          matchAll: (e, t) => {
            let n;
            const r = [];
            for (; null !== (n = e.exec(t)); ) r.push(n);
            return r;
          },
          isHTMLForm: Ga,
          hasOwnProperty: Za,
          hasOwnProp: Za,
          reduceDescriptors: to,
          freezeMethods: (e) => {
            to(e, (t, n) => {
              if (Aa(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n))
                return !1;
              const r = e[n];
              Aa(r) &&
                ((t.enumerable = !1),
                "writable" in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = () => {
                      throw Error(
                        "Can not rewrite read-only method '" + n + "'"
                      );
                    }));
            });
          },
          toObjectSet: (e, t) => {
            const n = {},
              r = (e) => {
                e.forEach((e) => {
                  n[e] = !0;
                });
              };
            return ja(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: (e) =>
            e
              .toLowerCase()
              .replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              }),
          noop: () => {},
          toFiniteNumber: (e, t) =>
            null != e && Number.isFinite((e = +e)) ? e : t,
          findKey: Qa,
          global: Ka,
          isContextDefined: Ya,
          ALPHABET: ao,
          generateString: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 16,
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : ao.ALPHA_DIGIT,
              n = "";
            const { length: r } = t;
            for (; e--; ) n += t[(Math.random() * r) | 0];
            return n;
          },
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              Aa(e.append) &&
              "FormData" === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: (e) => {
            const t = new Array(10),
              n = (e, r) => {
                if (za(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!("toJSON" in e)) {
                    t[r] = e;
                    const a = ja(e) ? [] : {};
                    return (
                      $a(e, (e, t) => {
                        const o = n(e, r + 1);
                        !Pa(o) && (a[t] = o);
                      }),
                      (t[r] = void 0),
                      a
                    );
                  }
                }
                return e;
              };
            return n(e, 0);
          },
          isAsyncFn: oo,
          isThenable: (e) => e && (za(e) || Aa(e)) && Aa(e.then) && Aa(e.catch),
        };
      function so(e, t, n, r, a) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          n && (this.config = n),
          r && (this.request = r),
          a && (this.response = a);
      }
      io.inherits(so, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: io.toJSONObject(this.config),
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null,
          };
        },
      });
      const lo = so.prototype,
        co = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL",
      ].forEach((e) => {
        co[e] = { value: e };
      }),
        Object.defineProperties(so, co),
        Object.defineProperty(lo, "isAxiosError", { value: !0 }),
        (so.from = (e, t, n, r, a, o) => {
          const i = Object.create(lo);
          return (
            io.toFlatObject(
              e,
              i,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => "isAxiosError" !== e
            ),
            so.call(i, e.message, t, n, r, a),
            (i.cause = e),
            (i.name = e.name),
            o && Object.assign(i, o),
            i
          );
        });
      const uo = so;
      function fo(e) {
        return io.isPlainObject(e) || io.isArray(e);
      }
      function po(e) {
        return io.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function ho(e, t, n) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = po(e)), !n && t ? "[" + e + "]" : e;
              })
              .join(n ? "." : "")
          : t;
      }
      const mo = io.toFlatObject(io, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      const go = function (e, t, n) {
        if (!io.isObject(e)) throw new TypeError("target must be an object");
        t = t || new FormData();
        const r = (n = io.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, t) {
              return !io.isUndefined(t[e]);
            }
          )).metaTokens,
          a = n.visitor || c,
          o = n.dots,
          i = n.indexes,
          s =
            (n.Blob || ("undefined" !== typeof Blob && Blob)) &&
            io.isSpecCompliantForm(t);
        if (!io.isFunction(a))
          throw new TypeError("visitor must be a function");
        function l(e) {
          if (null === e) return "";
          if (io.isDate(e)) return e.toISOString();
          if (!s && io.isBlob(e))
            throw new uo("Blob is not supported. Use a Buffer instead.");
          return io.isArrayBuffer(e) || io.isTypedArray(e)
            ? s && "function" === typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function c(e, n, a) {
          let s = e;
          if (e && !a && "object" === typeof e)
            if (io.endsWith(n, "{}"))
              (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
            else if (
              (io.isArray(e) &&
                (function (e) {
                  return io.isArray(e) && !e.some(fo);
                })(e)) ||
              ((io.isFileList(e) || io.endsWith(n, "[]")) &&
                (s = io.toArray(e)))
            )
              return (
                (n = po(n)),
                s.forEach(function (e, r) {
                  !io.isUndefined(e) &&
                    null !== e &&
                    t.append(
                      !0 === i ? ho([n], r, o) : null === i ? n : n + "[]",
                      l(e)
                    );
                }),
                !1
              );
          return !!fo(e) || (t.append(ho(a, n, o), l(e)), !1);
        }
        const u = [],
          f = Object.assign(mo, {
            defaultVisitor: c,
            convertValue: l,
            isVisitable: fo,
          });
        if (!io.isObject(e)) throw new TypeError("data must be an object");
        return (
          (function e(n, r) {
            if (!io.isUndefined(n)) {
              if (-1 !== u.indexOf(n))
                throw Error("Circular reference detected in " + r.join("."));
              u.push(n),
                io.forEach(n, function (n, o) {
                  !0 ===
                    (!(io.isUndefined(n) || null === n) &&
                      a.call(t, n, io.isString(o) ? o.trim() : o, r, f)) &&
                    e(n, r ? r.concat(o) : [o]);
                }),
                u.pop();
            }
          })(e),
          t
        );
      };
      function yo(e) {
        const t = {
          "!": "%21",
          "'": "%27",
          "(": "%28",
          ")": "%29",
          "~": "%7E",
          "%20": "+",
          "%00": "\0",
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function vo(e, t) {
        (this._pairs = []), e && go(e, this, t);
      }
      const bo = vo.prototype;
      (bo.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (bo.toString = function (e) {
          const t = e
            ? function (t) {
                return e.call(this, t, yo);
              }
            : yo;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      const wo = vo;
      function xo(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function ko(e, t, n) {
        if (!t) return e;
        const r = (n && n.encode) || xo,
          a = n && n.serialize;
        let o;
        if (
          ((o = a
            ? a(t, n)
            : io.isURLSearchParams(t)
            ? t.toString()
            : new wo(t, n).toString(r)),
          o)
        ) {
          const t = e.indexOf("#");
          -1 !== t && (e = e.slice(0, t)),
            (e += (-1 === e.indexOf("?") ? "?" : "&") + o);
        }
        return e;
      }
      const So = class {
          constructor() {
            this.handlers = [];
          }
          use(e, t, n) {
            return (
              this.handlers.push({
                fulfilled: e,
                rejected: t,
                synchronous: !!n && n.synchronous,
                runWhen: n ? n.runWhen : null,
              }),
              this.handlers.length - 1
            );
          }
          eject(e) {
            this.handlers[e] && (this.handlers[e] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(e) {
            io.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }
        },
        Eo = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        Co = {
          isBrowser: !0,
          classes: {
            URLSearchParams:
              "undefined" !== typeof URLSearchParams ? URLSearchParams : wo,
            FormData: "undefined" !== typeof FormData ? FormData : null,
            Blob: "undefined" !== typeof Blob ? Blob : null,
          },
          protocols: ["http", "https", "file", "blob", "url", "data"],
        },
        No = "undefined" !== typeof window && "undefined" !== typeof document,
        Oo =
          ((_o = "undefined" !== typeof navigator && navigator.product),
          No && ["ReactNative", "NativeScript", "NS"].indexOf(_o) < 0);
      var _o;
      const jo =
          "undefined" !== typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          "function" === typeof self.importScripts,
        Po = (No && window.location.href) || "http://localhost",
        Ro = { ...e, ...Co };
      const To = function (e) {
        function t(e, n, r, a) {
          let o = e[a++];
          if ("__proto__" === o) return !0;
          const i = Number.isFinite(+o),
            s = a >= e.length;
          if (((o = !o && io.isArray(r) ? r.length : o), s))
            return io.hasOwnProp(r, o) ? (r[o] = [r[o], n]) : (r[o] = n), !i;
          (r[o] && io.isObject(r[o])) || (r[o] = []);
          return (
            t(e, n, r[o], a) &&
              io.isArray(r[o]) &&
              (r[o] = (function (e) {
                const t = {},
                  n = Object.keys(e);
                let r;
                const a = n.length;
                let o;
                for (r = 0; r < a; r++) (o = n[r]), (t[o] = e[o]);
                return t;
              })(r[o])),
            !i
          );
        }
        if (io.isFormData(e) && io.isFunction(e.entries)) {
          const n = {};
          return (
            io.forEachEntry(e, (e, r) => {
              t(
                (function (e) {
                  return io
                    .matchAll(/\w+|\[(\w*)]/g, e)
                    .map((e) => ("[]" === e[0] ? "" : e[1] || e[0]));
                })(e),
                r,
                n,
                0
              );
            }),
            n
          );
        }
        return null;
      };
      const Ao = {
        transitional: Eo,
        adapter: ["xhr", "http", "fetch"],
        transformRequest: [
          function (e, t) {
            const n = t.getContentType() || "",
              r = n.indexOf("application/json") > -1,
              a = io.isObject(e);
            a && io.isHTMLForm(e) && (e = new FormData(e));
            if (io.isFormData(e)) return r ? JSON.stringify(To(e)) : e;
            if (
              io.isArrayBuffer(e) ||
              io.isBuffer(e) ||
              io.isStream(e) ||
              io.isFile(e) ||
              io.isBlob(e) ||
              io.isReadableStream(e)
            )
              return e;
            if (io.isArrayBufferView(e)) return e.buffer;
            if (io.isURLSearchParams(e))
              return (
                t.setContentType(
                  "application/x-www-form-urlencoded;charset=utf-8",
                  !1
                ),
                e.toString()
              );
            let o;
            if (a) {
              if (n.indexOf("application/x-www-form-urlencoded") > -1)
                return (function (e, t) {
                  return go(
                    e,
                    new Ro.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, n, r) {
                          return Ro.isNode && io.isBuffer(e)
                            ? (this.append(t, e.toString("base64")), !1)
                            : r.defaultVisitor.apply(this, arguments);
                        },
                      },
                      t
                    )
                  );
                })(e, this.formSerializer).toString();
              if (
                (o = io.isFileList(e)) ||
                n.indexOf("multipart/form-data") > -1
              ) {
                const t = this.env && this.env.FormData;
                return go(
                  o ? { "files[]": e } : e,
                  t && new t(),
                  this.formSerializer
                );
              }
            }
            return a || r
              ? (t.setContentType("application/json", !1),
                (function (e, t, n) {
                  if (io.isString(e))
                    try {
                      return (t || JSON.parse)(e), io.trim(e);
                    } catch (ml) {
                      if ("SyntaxError" !== ml.name) throw ml;
                    }
                  return (n || JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            const t = this.transitional || Ao.transitional,
              n = t && t.forcedJSONParsing,
              r = "json" === this.responseType;
            if (io.isResponse(e) || io.isReadableStream(e)) return e;
            if (e && io.isString(e) && ((n && !this.responseType) || r)) {
              const n = !(t && t.silentJSONParsing) && r;
              try {
                return JSON.parse(e);
              } catch (ml) {
                if (n) {
                  if ("SyntaxError" === ml.name)
                    throw uo.from(
                      ml,
                      uo.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response
                    );
                  throw ml;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: Ro.classes.FormData, Blob: Ro.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: {
          common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0,
          },
        },
      };
      io.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
        Ao.headers[e] = {};
      });
      const Lo = Ao,
        zo = io.toObjectSet([
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ]),
        Fo = Symbol("internals");
      function Do(e) {
        return e && String(e).trim().toLowerCase();
      }
      function Mo(e) {
        return !1 === e || null == e
          ? e
          : io.isArray(e)
          ? e.map(Mo)
          : String(e);
      }
      function Io(e, t, n, r, a) {
        return io.isFunction(r)
          ? r.call(this, t, n)
          : (a && (t = n),
            io.isString(t)
              ? io.isString(r)
                ? -1 !== t.indexOf(r)
                : io.isRegExp(r)
                ? r.test(t)
                : void 0
              : void 0);
      }
      class Uo {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, n) {
          const r = this;
          function a(e, t, n) {
            const a = Do(t);
            if (!a) throw new Error("header name must be a non-empty string");
            const o = io.findKey(r, a);
            (!o ||
              void 0 === r[o] ||
              !0 === n ||
              (void 0 === n && !1 !== r[o])) &&
              (r[o || t] = Mo(e));
          }
          const o = (e, t) => io.forEach(e, (e, n) => a(e, n, t));
          if (io.isPlainObject(e) || e instanceof this.constructor) o(e, t);
          else if (
            io.isString(e) &&
            (e = e.trim()) &&
            !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
          )
            o(
              ((e) => {
                const t = {};
                let n, r, a;
                return (
                  e &&
                    e.split("\n").forEach(function (e) {
                      (a = e.indexOf(":")),
                        (n = e.substring(0, a).trim().toLowerCase()),
                        (r = e.substring(a + 1).trim()),
                        !n ||
                          (t[n] && zo[n]) ||
                          ("set-cookie" === n
                            ? t[n]
                              ? t[n].push(r)
                              : (t[n] = [r])
                            : (t[n] = t[n] ? t[n] + ", " + r : r));
                    }),
                  t
                );
              })(e),
              t
            );
          else if (io.isHeaders(e))
            for (const [i, s] of e.entries()) a(s, i, n);
          else null != e && a(t, e, n);
          return this;
        }
        get(e, t) {
          if ((e = Do(e))) {
            const n = io.findKey(this, e);
            if (n) {
              const e = this[n];
              if (!t) return e;
              if (!0 === t)
                return (function (e) {
                  const t = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  let r;
                  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
                  return t;
                })(e);
              if (io.isFunction(t)) return t.call(this, e, n);
              if (io.isRegExp(t)) return t.exec(e);
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(e, t) {
          if ((e = Do(e))) {
            const n = io.findKey(this, e);
            return !(!n || void 0 === this[n] || (t && !Io(0, this[n], n, t)));
          }
          return !1;
        }
        delete(e, t) {
          const n = this;
          let r = !1;
          function a(e) {
            if ((e = Do(e))) {
              const a = io.findKey(n, e);
              !a || (t && !Io(0, n[a], a, t)) || (delete n[a], (r = !0));
            }
          }
          return io.isArray(e) ? e.forEach(a) : a(e), r;
        }
        clear(e) {
          const t = Object.keys(this);
          let n = t.length,
            r = !1;
          for (; n--; ) {
            const a = t[n];
            (e && !Io(0, this[a], a, e, !0)) || (delete this[a], (r = !0));
          }
          return r;
        }
        normalize(e) {
          const t = this,
            n = {};
          return (
            io.forEach(this, (r, a) => {
              const o = io.findKey(n, a);
              if (o) return (t[o] = Mo(r)), void delete t[a];
              const i = e
                ? (function (e) {
                    return e
                      .trim()
                      .toLowerCase()
                      .replace(
                        /([a-z\d])(\w*)/g,
                        (e, t, n) => t.toUpperCase() + n
                      );
                  })(a)
                : String(a).trim();
              i !== a && delete t[a], (t[i] = Mo(r)), (n[i] = !0);
            }),
            this
          );
        }
        concat() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return this.constructor.concat(this, ...t);
        }
        toJSON(e) {
          const t = Object.create(null);
          return (
            io.forEach(this, (n, r) => {
              null != n &&
                !1 !== n &&
                (t[r] = e && io.isArray(n) ? n.join(", ") : n);
            }),
            t
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map((e) => {
              let [t, n] = e;
              return t + ": " + n;
            })
            .join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e) {
          const t = new this(e);
          for (
            var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1;
            a < n;
            a++
          )
            r[a - 1] = arguments[a];
          return r.forEach((e) => t.set(e)), t;
        }
        static accessor(e) {
          const t = (this[Fo] = this[Fo] = { accessors: {} }).accessors,
            n = this.prototype;
          function r(e) {
            const r = Do(e);
            t[r] ||
              (!(function (e, t) {
                const n = io.toCamelCase(" " + t);
                ["get", "set", "has"].forEach((r) => {
                  Object.defineProperty(e, r + n, {
                    value: function (e, n, a) {
                      return this[r].call(this, t, e, n, a);
                    },
                    configurable: !0,
                  });
                });
              })(n, e),
              (t[r] = !0));
          }
          return io.isArray(e) ? e.forEach(r) : r(e), this;
        }
      }
      Uo.accessor([
        "Content-Type",
        "Content-Length",
        "Accept",
        "Accept-Encoding",
        "User-Agent",
        "Authorization",
      ]),
        io.reduceDescriptors(Uo.prototype, (e, t) => {
          let { value: n } = e,
            r = t[0].toUpperCase() + t.slice(1);
          return {
            get: () => n,
            set(e) {
              this[r] = e;
            },
          };
        }),
        io.freezeMethods(Uo);
      const Bo = Uo;
      function qo(e, t) {
        const n = this || Lo,
          r = t || n,
          a = Bo.from(r.headers);
        let o = r.data;
        return (
          io.forEach(e, function (e) {
            o = e.call(n, o, a.normalize(), t ? t.status : void 0);
          }),
          a.normalize(),
          o
        );
      }
      function Vo(e) {
        return !(!e || !e.__CANCEL__);
      }
      function Wo(e, t, n) {
        uo.call(this, null == e ? "canceled" : e, uo.ERR_CANCELED, t, n),
          (this.name = "CanceledError");
      }
      io.inherits(Wo, uo, { __CANCEL__: !0 });
      const Ho = Wo;
      function $o(e, t, n) {
        const r = n.config.validateStatus;
        n.status && r && !r(n.status)
          ? t(
              new uo(
                "Request failed with status code " + n.status,
                [uo.ERR_BAD_REQUEST, uo.ERR_BAD_RESPONSE][
                  Math.floor(n.status / 100) - 4
                ],
                n.config,
                n.request,
                n
              )
            )
          : e(n);
      }
      const Qo = function (e, t) {
        e = e || 10;
        const n = new Array(e),
          r = new Array(e);
        let a,
          o = 0,
          i = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (s) {
            const l = Date.now(),
              c = r[i];
            a || (a = l), (n[o] = s), (r[o] = l);
            let u = i,
              f = 0;
            for (; u !== o; ) (f += n[u++]), (u %= e);
            if (((o = (o + 1) % e), o === i && (i = (i + 1) % e), l - a < t))
              return;
            const d = c && l - c;
            return d ? Math.round((1e3 * f) / d) : void 0;
          }
        );
      };
      const Ko = function (e, t) {
          let n = 0;
          const r = 1e3 / t;
          let a = null;
          return function () {
            const t = !0 === this,
              o = Date.now();
            if (t || o - n > r)
              return (
                a && (clearTimeout(a), (a = null)),
                (n = o),
                e.apply(null, arguments)
              );
            a ||
              (a = setTimeout(
                () => ((a = null), (n = Date.now()), e.apply(null, arguments)),
                r - (o - n)
              ));
          };
        },
        Yo = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 3,
            r = 0;
          const a = Qo(50, 250);
          return Ko((n) => {
            const o = n.loaded,
              i = n.lengthComputable ? n.total : void 0,
              s = o - r,
              l = a(s);
            r = o;
            const c = {
              loaded: o,
              total: i,
              progress: i ? o / i : void 0,
              bytes: s,
              rate: l || void 0,
              estimated: l && i && o <= i ? (i - o) / l : void 0,
              event: n,
              lengthComputable: null != i,
            };
            (c[t ? "download" : "upload"] = !0), e(c);
          }, n);
        },
        Jo = Ro.hasStandardBrowserEnv
          ? (function () {
              const e = /(msie|trident)/i.test(navigator.userAgent),
                t = document.createElement("a");
              let n;
              function r(n) {
                let r = n;
                return (
                  e && (t.setAttribute("href", r), (r = t.href)),
                  t.setAttribute("href", r),
                  {
                    href: t.href,
                    protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                    host: t.host,
                    search: t.search ? t.search.replace(/^\?/, "") : "",
                    hash: t.hash ? t.hash.replace(/^#/, "") : "",
                    hostname: t.hostname,
                    port: t.port,
                    pathname:
                      "/" === t.pathname.charAt(0)
                        ? t.pathname
                        : "/" + t.pathname,
                  }
                );
              }
              return (
                (n = r(window.location.href)),
                function (e) {
                  const t = io.isString(e) ? r(e) : e;
                  return t.protocol === n.protocol && t.host === n.host;
                }
              );
            })()
          : function () {
              return !0;
            },
        Xo = Ro.hasStandardBrowserEnv
          ? {
              write(e, t, n, r, a, o) {
                const i = [e + "=" + encodeURIComponent(t)];
                io.isNumber(n) &&
                  i.push("expires=" + new Date(n).toGMTString()),
                  io.isString(r) && i.push("path=" + r),
                  io.isString(a) && i.push("domain=" + a),
                  !0 === o && i.push("secure"),
                  (document.cookie = i.join("; "));
              },
              read(e) {
                const t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove(e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : { write() {}, read: () => null, remove() {} };
      function Go(e, t) {
        return e &&
          !(function (e) {
            return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
          })(t)
          ? (function (e, t) {
              return t
                ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "")
                : e;
            })(e, t)
          : t;
      }
      const Zo = (e) => (e instanceof Bo ? { ...e } : e);
      function ei(e, t) {
        t = t || {};
        const n = {};
        function r(e, t, n) {
          return io.isPlainObject(e) && io.isPlainObject(t)
            ? io.merge.call({ caseless: n }, e, t)
            : io.isPlainObject(t)
            ? io.merge({}, t)
            : io.isArray(t)
            ? t.slice()
            : t;
        }
        function a(e, t, n) {
          return io.isUndefined(t)
            ? io.isUndefined(e)
              ? void 0
              : r(void 0, e, n)
            : r(e, t, n);
        }
        function o(e, t) {
          if (!io.isUndefined(t)) return r(void 0, t);
        }
        function i(e, t) {
          return io.isUndefined(t)
            ? io.isUndefined(e)
              ? void 0
              : r(void 0, e)
            : r(void 0, t);
        }
        function s(n, a, o) {
          return o in t ? r(n, a) : o in e ? r(void 0, n) : void 0;
        }
        const l = {
          url: o,
          method: o,
          data: o,
          baseURL: i,
          transformRequest: i,
          transformResponse: i,
          paramsSerializer: i,
          timeout: i,
          timeoutMessage: i,
          withCredentials: i,
          withXSRFToken: i,
          adapter: i,
          responseType: i,
          xsrfCookieName: i,
          xsrfHeaderName: i,
          onUploadProgress: i,
          onDownloadProgress: i,
          decompress: i,
          maxContentLength: i,
          maxBodyLength: i,
          beforeRedirect: i,
          transport: i,
          httpAgent: i,
          httpsAgent: i,
          cancelToken: i,
          socketPath: i,
          responseEncoding: i,
          validateStatus: s,
          headers: (e, t) => a(Zo(e), Zo(t), !0),
        };
        return (
          io.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
            const o = l[r] || a,
              i = o(e[r], t[r], r);
            (io.isUndefined(i) && o !== s) || (n[r] = i);
          }),
          n
        );
      }
      const ti = (e) => {
          const t = ei({}, e);
          let n,
            {
              data: r,
              withXSRFToken: a,
              xsrfHeaderName: o,
              xsrfCookieName: i,
              headers: s,
              auth: l,
            } = t;
          if (
            ((t.headers = s = Bo.from(s)),
            (t.url = ko(Go(t.baseURL, t.url), e.params, e.paramsSerializer)),
            l &&
              s.set(
                "Authorization",
                "Basic " +
                  btoa(
                    (l.username || "") +
                      ":" +
                      (l.password
                        ? unescape(encodeURIComponent(l.password))
                        : "")
                  )
              ),
            io.isFormData(r))
          )
            if (Ro.hasStandardBrowserEnv || Ro.hasStandardBrowserWebWorkerEnv)
              s.setContentType(void 0);
            else if (!1 !== (n = s.getContentType())) {
              const [e, ...t] = n
                ? n
                    .split(";")
                    .map((e) => e.trim())
                    .filter(Boolean)
                : [];
              s.setContentType([e || "multipart/form-data", ...t].join("; "));
            }
          if (
            Ro.hasStandardBrowserEnv &&
            (a && io.isFunction(a) && (a = a(t)), a || (!1 !== a && Jo(t.url)))
          ) {
            const e = o && i && Xo.read(i);
            e && s.set(o, e);
          }
          return t;
        },
        ni =
          "undefined" !== typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, n) {
              const r = ti(e);
              let a = r.data;
              const o = Bo.from(r.headers).normalize();
              let i,
                { responseType: s } = r;
              function l() {
                r.cancelToken && r.cancelToken.unsubscribe(i),
                  r.signal && r.signal.removeEventListener("abort", i);
              }
              let c = new XMLHttpRequest();
              function u() {
                if (!c) return;
                const r = Bo.from(
                  "getAllResponseHeaders" in c && c.getAllResponseHeaders()
                );
                $o(
                  function (e) {
                    t(e), l();
                  },
                  function (e) {
                    n(e), l();
                  },
                  {
                    data:
                      s && "text" !== s && "json" !== s
                        ? c.response
                        : c.responseText,
                    status: c.status,
                    statusText: c.statusText,
                    headers: r,
                    config: e,
                    request: c,
                  }
                ),
                  (c = null);
              }
              c.open(r.method.toUpperCase(), r.url, !0),
                (c.timeout = r.timeout),
                "onloadend" in c
                  ? (c.onloadend = u)
                  : (c.onreadystatechange = function () {
                      c &&
                        4 === c.readyState &&
                        (0 !== c.status ||
                          (c.responseURL &&
                            0 === c.responseURL.indexOf("file:"))) &&
                        setTimeout(u);
                    }),
                (c.onabort = function () {
                  c &&
                    (n(new uo("Request aborted", uo.ECONNABORTED, r, c)),
                    (c = null));
                }),
                (c.onerror = function () {
                  n(new uo("Network Error", uo.ERR_NETWORK, r, c)), (c = null);
                }),
                (c.ontimeout = function () {
                  let e = r.timeout
                    ? "timeout of " + r.timeout + "ms exceeded"
                    : "timeout exceeded";
                  const t = r.transitional || Eo;
                  r.timeoutErrorMessage && (e = r.timeoutErrorMessage),
                    n(
                      new uo(
                        e,
                        t.clarifyTimeoutError ? uo.ETIMEDOUT : uo.ECONNABORTED,
                        r,
                        c
                      )
                    ),
                    (c = null);
                }),
                void 0 === a && o.setContentType(null),
                "setRequestHeader" in c &&
                  io.forEach(o.toJSON(), function (e, t) {
                    c.setRequestHeader(t, e);
                  }),
                io.isUndefined(r.withCredentials) ||
                  (c.withCredentials = !!r.withCredentials),
                s && "json" !== s && (c.responseType = r.responseType),
                "function" === typeof r.onDownloadProgress &&
                  c.addEventListener("progress", Yo(r.onDownloadProgress, !0)),
                "function" === typeof r.onUploadProgress &&
                  c.upload &&
                  c.upload.addEventListener("progress", Yo(r.onUploadProgress)),
                (r.cancelToken || r.signal) &&
                  ((i = (t) => {
                    c &&
                      (n(!t || t.type ? new Ho(null, e, c) : t),
                      c.abort(),
                      (c = null));
                  }),
                  r.cancelToken && r.cancelToken.subscribe(i),
                  r.signal &&
                    (r.signal.aborted
                      ? i()
                      : r.signal.addEventListener("abort", i)));
              const f = (function (e) {
                const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || "";
              })(r.url);
              f && -1 === Ro.protocols.indexOf(f)
                ? n(
                    new uo(
                      "Unsupported protocol " + f + ":",
                      uo.ERR_BAD_REQUEST,
                      e
                    )
                  )
                : c.send(a || null);
            });
          },
        ri = (e, t) => {
          let n,
            r = new AbortController();
          const a = function (e) {
            if (!n) {
              (n = !0), i();
              const t = e instanceof Error ? e : this.reason;
              r.abort(
                t instanceof uo ? t : new Ho(t instanceof Error ? t.message : t)
              );
            }
          };
          let o =
            t &&
            setTimeout(() => {
              a(new uo("timeout ".concat(t, " of ms exceeded"), uo.ETIMEDOUT));
            }, t);
          const i = () => {
            e &&
              (o && clearTimeout(o),
              (o = null),
              e.forEach((e) => {
                e &&
                  (e.removeEventListener
                    ? e.removeEventListener("abort", a)
                    : e.unsubscribe(a));
              }),
              (e = null));
          };
          e.forEach(
            (e) => e && e.addEventListener && e.addEventListener("abort", a)
          );
          const { signal: s } = r;
          return (
            (s.unsubscribe = i),
            [
              s,
              () => {
                o && clearTimeout(o), (o = null);
              },
            ]
          );
        },
        ai = function* (e, t) {
          let n = e.byteLength;
          if (!t || n < t) return void (yield e);
          let r,
            a = 0;
          for (; a < n; ) (r = a + t), yield e.slice(a, r), (a = r);
        },
        oi = (e, t, n, r, a) => {
          const o = (async function* (e, t, n) {
            for await (const r of e)
              yield* ai(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
          })(e, t, a);
          let i = 0;
          return new ReadableStream(
            {
              type: "bytes",
              async pull(e) {
                const { done: t, value: a } = await o.next();
                if (t) return e.close(), void r();
                let s = a.byteLength;
                n && n((i += s)), e.enqueue(new Uint8Array(a));
              },
              cancel: (e) => (r(e), o.return()),
            },
            { highWaterMark: 2 }
          );
        },
        ii = (e, t) => {
          const n = null != e;
          return (r) =>
            setTimeout(() => t({ lengthComputable: n, total: e, loaded: r }));
        },
        si =
          "function" === typeof fetch &&
          "function" === typeof Request &&
          "function" === typeof Response,
        li = si && "function" === typeof ReadableStream,
        ci =
          si &&
          ("function" === typeof TextEncoder
            ? ((ui = new TextEncoder()), (e) => ui.encode(e))
            : async (e) => new Uint8Array(await new Response(e).arrayBuffer()));
      var ui;
      const fi =
          li &&
          (() => {
            let e = !1;
            const t = new Request(Ro.origin, {
              body: new ReadableStream(),
              method: "POST",
              get duplex() {
                return (e = !0), "half";
              },
            }).headers.has("Content-Type");
            return e && !t;
          })(),
        di =
          li &&
          !!(() => {
            try {
              return io.isReadableStream(new Response("").body);
            } catch (e) {}
          })(),
        pi = { stream: di && ((e) => e.body) };
      var hi;
      si &&
        ((hi = new Response()),
        ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
          !pi[e] &&
            (pi[e] = io.isFunction(hi[e])
              ? (t) => t[e]()
              : (t, n) => {
                  throw new uo(
                    "Response type '".concat(e, "' is not supported"),
                    uo.ERR_NOT_SUPPORT,
                    n
                  );
                });
        }));
      const mi = async (e, t) => {
          const n = io.toFiniteNumber(e.getContentLength());
          return null == n
            ? (async (e) =>
                null == e
                  ? 0
                  : io.isBlob(e)
                  ? e.size
                  : io.isSpecCompliantForm(e)
                  ? (await new Request(e).arrayBuffer()).byteLength
                  : io.isArrayBufferView(e)
                  ? e.byteLength
                  : (io.isURLSearchParams(e) && (e += ""),
                    io.isString(e) ? (await ci(e)).byteLength : void 0))(t)
            : n;
        },
        gi =
          si &&
          (async (e) => {
            let {
              url: t,
              method: n,
              data: r,
              signal: a,
              cancelToken: o,
              timeout: i,
              onDownloadProgress: s,
              onUploadProgress: l,
              responseType: c,
              headers: u,
              withCredentials: f = "same-origin",
              fetchOptions: d,
            } = ti(e);
            c = c ? (c + "").toLowerCase() : "text";
            let p,
              h,
              [m, g] = a || o || i ? ri([a, o], i) : [];
            const y = () => {
              !p &&
                setTimeout(() => {
                  m && m.unsubscribe();
                }),
                (p = !0);
            };
            let v;
            try {
              if (
                l &&
                fi &&
                "get" !== n &&
                "head" !== n &&
                0 !== (v = await mi(u, r))
              ) {
                let e,
                  n = new Request(t, {
                    method: "POST",
                    body: r,
                    duplex: "half",
                  });
                io.isFormData(r) &&
                  (e = n.headers.get("content-type")) &&
                  u.setContentType(e),
                  n.body && (r = oi(n.body, 65536, ii(v, Yo(l)), null, ci));
              }
              io.isString(f) || (f = f ? "cors" : "omit"),
                (h = new Request(t, {
                  ...d,
                  signal: m,
                  method: n.toUpperCase(),
                  headers: u.normalize().toJSON(),
                  body: r,
                  duplex: "half",
                  withCredentials: f,
                }));
              let a = await fetch(h);
              const o = di && ("stream" === c || "response" === c);
              if (di && (s || o)) {
                const e = {};
                ["status", "statusText", "headers"].forEach((t) => {
                  e[t] = a[t];
                });
                const t = io.toFiniteNumber(a.headers.get("content-length"));
                a = new Response(
                  oi(a.body, 65536, s && ii(t, Yo(s, !0)), o && y, ci),
                  e
                );
              }
              c = c || "text";
              let i = await pi[io.findKey(pi, c) || "text"](a, e);
              return (
                !o && y(),
                g && g(),
                await new Promise((t, n) => {
                  $o(t, n, {
                    data: i,
                    headers: Bo.from(a.headers),
                    status: a.status,
                    statusText: a.statusText,
                    config: e,
                    request: h,
                  });
                })
              );
            } catch (b) {
              if (
                (y(), b && "TypeError" === b.name && /fetch/i.test(b.message))
              )
                throw Object.assign(
                  new uo("Network Error", uo.ERR_NETWORK, e, h),
                  { cause: b.cause || b }
                );
              throw uo.from(b, b && b.code, e, h);
            }
          }),
        yi = { http: null, xhr: ni, fetch: gi };
      io.forEach(yi, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch (ml) {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      });
      const vi = (e) => "- ".concat(e),
        bi = (e) => io.isFunction(e) || null === e || !1 === e,
        wi = (e) => {
          e = io.isArray(e) ? e : [e];
          const { length: t } = e;
          let n, r;
          const a = {};
          for (let o = 0; o < t; o++) {
            let t;
            if (
              ((n = e[o]),
              (r = n),
              !bi(n) && ((r = yi[(t = String(n)).toLowerCase()]), void 0 === r))
            )
              throw new uo("Unknown adapter '".concat(t, "'"));
            if (r) break;
            a[t || "#" + o] = r;
          }
          if (!r) {
            const e = Object.entries(a).map((e) => {
              let [t, n] = e;
              return (
                "adapter ".concat(t, " ") +
                (!1 === n
                  ? "is not supported by the environment"
                  : "is not available in the build")
              );
            });
            let n = t
              ? e.length > 1
                ? "since :\n" + e.map(vi).join("\n")
                : " " + vi(e[0])
              : "as no adapter specified";
            throw new uo(
              "There is no suitable adapter to dispatch the request " + n,
              "ERR_NOT_SUPPORT"
            );
          }
          return r;
        };
      function xi(e) {
        if (
          (e.cancelToken && e.cancelToken.throwIfRequested(),
          e.signal && e.signal.aborted)
        )
          throw new Ho(null, e);
      }
      function ki(e) {
        xi(e),
          (e.headers = Bo.from(e.headers)),
          (e.data = qo.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) &&
            e.headers.setContentType("application/x-www-form-urlencoded", !1);
        return wi(e.adapter || Lo.adapter)(e).then(
          function (t) {
            return (
              xi(e),
              (t.data = qo.call(e, e.transformResponse, t)),
              (t.headers = Bo.from(t.headers)),
              t
            );
          },
          function (t) {
            return (
              Vo(t) ||
                (xi(e),
                t &&
                  t.response &&
                  ((t.response.data = qo.call(
                    e,
                    e.transformResponse,
                    t.response
                  )),
                  (t.response.headers = Bo.from(t.response.headers)))),
              Promise.reject(t)
            );
          }
        );
      }
      const Si = "1.7.2",
        Ei = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        (e, t) => {
          Ei[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        }
      );
      const Ci = {};
      Ei.transitional = function (e, t, n) {
        function r(e, t) {
          return (
            "[Axios v1.7.2] Transitional option '" +
            e +
            "'" +
            t +
            (n ? ". " + n : "")
          );
        }
        return (n, a, o) => {
          if (!1 === e)
            throw new uo(
              r(a, " has been removed" + (t ? " in " + t : "")),
              uo.ERR_DEPRECATED
            );
          return (
            t &&
              !Ci[a] &&
              ((Ci[a] = !0),
              console.warn(
                r(
                  a,
                  " has been deprecated since v" +
                    t +
                    " and will be removed in the near future"
                )
              )),
            !e || e(n, a, o)
          );
        };
      };
      const Ni = {
          assertOptions: function (e, t, n) {
            if ("object" !== typeof e)
              throw new uo(
                "options must be an object",
                uo.ERR_BAD_OPTION_VALUE
              );
            const r = Object.keys(e);
            let a = r.length;
            for (; a-- > 0; ) {
              const o = r[a],
                i = t[o];
              if (i) {
                const t = e[o],
                  n = void 0 === t || i(t, o, e);
                if (!0 !== n)
                  throw new uo(
                    "option " + o + " must be " + n,
                    uo.ERR_BAD_OPTION_VALUE
                  );
              } else if (!0 !== n)
                throw new uo("Unknown option " + o, uo.ERR_BAD_OPTION);
            }
          },
          validators: Ei,
        },
        Oi = Ni.validators;
      class _i {
        constructor(e) {
          (this.defaults = e),
            (this.interceptors = { request: new So(), response: new So() });
        }
        async request(e, t) {
          try {
            return await this._request(e, t);
          } catch (n) {
            if (n instanceof Error) {
              let e;
              Error.captureStackTrace
                ? Error.captureStackTrace((e = {}))
                : (e = new Error());
              const t = e.stack ? e.stack.replace(/^.+\n/, "") : "";
              try {
                n.stack
                  ? t &&
                    !String(n.stack).endsWith(t.replace(/^.+\n.+\n/, "")) &&
                    (n.stack += "\n" + t)
                  : (n.stack = t);
              } catch (ml) {}
            }
            throw n;
          }
        }
        _request(e, t) {
          "string" === typeof e ? ((t = t || {}).url = e) : (t = e || {}),
            (t = ei(this.defaults, t));
          const { transitional: n, paramsSerializer: r, headers: a } = t;
          void 0 !== n &&
            Ni.assertOptions(
              n,
              {
                silentJSONParsing: Oi.transitional(Oi.boolean),
                forcedJSONParsing: Oi.transitional(Oi.boolean),
                clarifyTimeoutError: Oi.transitional(Oi.boolean),
              },
              !1
            ),
            null != r &&
              (io.isFunction(r)
                ? (t.paramsSerializer = { serialize: r })
                : Ni.assertOptions(
                    r,
                    { encode: Oi.function, serialize: Oi.function },
                    !0
                  )),
            (t.method = (
              t.method ||
              this.defaults.method ||
              "get"
            ).toLowerCase());
          let o = a && io.merge(a.common, a[t.method]);
          a &&
            io.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              (e) => {
                delete a[e];
              }
            ),
            (t.headers = Bo.concat(o, a));
          const i = [];
          let s = !0;
          this.interceptors.request.forEach(function (e) {
            ("function" === typeof e.runWhen && !1 === e.runWhen(t)) ||
              ((s = s && e.synchronous), i.unshift(e.fulfilled, e.rejected));
          });
          const l = [];
          let c;
          this.interceptors.response.forEach(function (e) {
            l.push(e.fulfilled, e.rejected);
          });
          let u,
            f = 0;
          if (!s) {
            const e = [ki.bind(this), void 0];
            for (
              e.unshift.apply(e, i),
                e.push.apply(e, l),
                u = e.length,
                c = Promise.resolve(t);
              f < u;

            )
              c = c.then(e[f++], e[f++]);
            return c;
          }
          u = i.length;
          let d = t;
          for (f = 0; f < u; ) {
            const e = i[f++],
              t = i[f++];
            try {
              d = e(d);
            } catch (p) {
              t.call(this, p);
              break;
            }
          }
          try {
            c = ki.call(this, d);
          } catch (p) {
            return Promise.reject(p);
          }
          for (f = 0, u = l.length; f < u; ) c = c.then(l[f++], l[f++]);
          return c;
        }
        getUri(e) {
          return ko(
            Go((e = ei(this.defaults, e)).baseURL, e.url),
            e.params,
            e.paramsSerializer
          );
        }
      }
      io.forEach(["delete", "get", "head", "options"], function (e) {
        _i.prototype[e] = function (t, n) {
          return this.request(
            ei(n || {}, { method: e, url: t, data: (n || {}).data })
          );
        };
      }),
        io.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (n, r, a) {
              return this.request(
                ei(a || {}, {
                  method: e,
                  headers: t ? { "Content-Type": "multipart/form-data" } : {},
                  url: n,
                  data: r,
                })
              );
            };
          }
          (_i.prototype[e] = t()), (_i.prototype[e + "Form"] = t(!0));
        });
      const ji = _i;
      class Pi {
        constructor(e) {
          if ("function" !== typeof e)
            throw new TypeError("executor must be a function.");
          let t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          const n = this;
          this.promise.then((e) => {
            if (!n._listeners) return;
            let t = n._listeners.length;
            for (; t-- > 0; ) n._listeners[t](e);
            n._listeners = null;
          }),
            (this.promise.then = (e) => {
              let t;
              const r = new Promise((e) => {
                n.subscribe(e), (t = e);
              }).then(e);
              return (
                (r.cancel = function () {
                  n.unsubscribe(t);
                }),
                r
              );
            }),
            e(function (e, r, a) {
              n.reason || ((n.reason = new Ho(e, r, a)), t(n.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          this.reason
            ? e(this.reason)
            : this._listeners
            ? this._listeners.push(e)
            : (this._listeners = [e]);
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          const t = this._listeners.indexOf(e);
          -1 !== t && this._listeners.splice(t, 1);
        }
        static source() {
          let e;
          const t = new Pi(function (t) {
            e = t;
          });
          return { token: t, cancel: e };
        }
      }
      const Ri = Pi;
      const Ti = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(Ti).forEach((e) => {
        let [t, n] = e;
        Ti[n] = t;
      });
      const Ai = Ti;
      const Li = (function e(t) {
        const n = new ji(t),
          r = Sa(ji.prototype.request, n);
        return (
          io.extend(r, ji.prototype, n, { allOwnKeys: !0 }),
          io.extend(r, n, null, { allOwnKeys: !0 }),
          (r.create = function (n) {
            return e(ei(t, n));
          }),
          r
        );
      })(Lo);
      (Li.Axios = ji),
        (Li.CanceledError = Ho),
        (Li.CancelToken = Ri),
        (Li.isCancel = Vo),
        (Li.VERSION = Si),
        (Li.toFormData = go),
        (Li.AxiosError = uo),
        (Li.Cancel = Li.CanceledError),
        (Li.all = function (e) {
          return Promise.all(e);
        }),
        (Li.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (Li.isAxiosError = function (e) {
          return io.isObject(e) && !0 === e.isAxiosError;
        }),
        (Li.mergeConfig = ei),
        (Li.AxiosHeaders = Bo),
        (Li.formToJSON = (e) => To(io.isHTMLForm(e) ? new FormData(e) : e)),
        (Li.getAdapter = wi),
        (Li.HttpStatusCode = Ai),
        (Li.default = Li);
      const zi = Li,
        Fi = () => {
          const [e, t] = (0, a.useState)(!1),
            [n, r] = (0, a.useState)({ email: "", password: "" }),
            o = (e) => {
              r({ ...n, [e.target.name]: e.target.value });
            };
          return e
            ? (0, xa.jsx)(ge, { to: "/dashboard" })
            : (0, xa.jsxs)("div", {
                children: [
                  (0, xa.jsxs)("nav", {
                    className: "navbar bg-dark",
                    children: [
                      (0, xa.jsx)("h1", {
                        children: (0, xa.jsxs)(_e, {
                          to: "/",
                          children: [
                            (0, xa.jsx)(la, { icon: pa }),
                            " Independent Corporate",
                          ],
                        }),
                      }),
                      (0, xa.jsxs)("ul", {
                        children: [
                          (0, xa.jsx)("li", {
                            children: (0, xa.jsx)(_e, {
                              to: "/register1",
                              children: "Register",
                            }),
                          }),
                          (0, xa.jsx)("li", {
                            children: (0, xa.jsx)(_e, {
                              to: "/login1",
                              children: "Login",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, xa.jsxs)("section", {
                    className: "container",
                    children: [
                      (0, xa.jsx)("h1", {
                        className: "large text-primary",
                        children: "Sign In",
                      }),
                      (0, xa.jsxs)("p", {
                        className: "lead",
                        children: [
                          (0, xa.jsx)(la, { icon: pa }),
                          " Sign into Your Account",
                        ],
                      }),
                      (0, xa.jsxs)("form", {
                        className: "form",
                        onSubmit: (e) => {
                          e.preventDefault(),
                            zi
                              .post(
                                "".concat(window.location.origin, "/login1"),
                                n
                              )
                              .then((e) => {
                                localStorage.setItem("token", e.data.token),
                                  t(!0);
                              })
                              .catch((e) => {
                                console.error("Error logging in:", e),
                                  e.response && e.response.data
                                    ? alert(
                                        "Error: ".concat(e.response.data.msg)
                                      )
                                    : alert(
                                        "An error occurred while logging in. Please try again later."
                                      );
                              });
                        },
                        children: [
                          (0, xa.jsx)("div", {
                            className: "form-group",
                            children: (0, xa.jsxs)("div", {
                              className: "input-group",
                              children: [
                                (0, xa.jsx)("div", {
                                  className: "input-group-prepend",
                                  children: (0, xa.jsx)("span", {
                                    className: "input-group-text",
                                    children: (0, xa.jsx)(la, { icon: ga }),
                                  }),
                                }),
                                (0, xa.jsx)("input", {
                                  type: "email",
                                  placeholder: "Email Address",
                                  name: "email",
                                  onChange: o,
                                  required: !0,
                                  className: "form-control",
                                }),
                              ],
                            }),
                          }),
                          (0, xa.jsx)("div", {
                            className: "form-group",
                            children: (0, xa.jsxs)("div", {
                              className: "input-group",
                              children: [
                                (0, xa.jsx)("div", {
                                  className: "input-group-prepend",
                                  children: (0, xa.jsx)("span", {
                                    className: "input-group-text",
                                    children: (0, xa.jsx)(la, { icon: da }),
                                  }),
                                }),
                                (0, xa.jsx)("input", {
                                  type: "password",
                                  placeholder: "Password",
                                  name: "password",
                                  onChange: o,
                                  required: !0,
                                  className: "form-control",
                                }),
                              ],
                            }),
                          }),
                          (0, xa.jsx)("input", {
                            type: "submit",
                            value: "Login",
                            className: "btn btn-primary",
                          }),
                        ],
                      }),
                      (0, xa.jsxs)("p", {
                        className: "my-1",
                        children: [
                          "Don't have an account? ",
                          (0, xa.jsx)(_e, {
                            to: "/register1",
                            children: "Sign Up",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
        },
        Di = () => {
          const e = ne(),
            [t, n] = (0, a.useState)({
              fullname: "",
              email: "",
              mobile: "",
              skill: "",
              password: "",
              confirmpassword: "",
            }),
            [r, o] = (0, a.useState)(""),
            i = (e) => {
              n({ ...t, [e.target.name]: e.target.value });
            };
          return (0, xa.jsxs)("div", {
            children: [
              (0, xa.jsxs)("nav", {
                className: "navbar bg-dark",
                children: [
                  (0, xa.jsx)("h1", {
                    children: (0, xa.jsxs)(_e, {
                      to: "/",
                      children: [
                        (0, xa.jsx)(la, { icon: pa }),
                        " Independent Corporate",
                      ],
                    }),
                  }),
                  (0, xa.jsxs)("ul", {
                    children: [
                      (0, xa.jsx)("li", {
                        children: (0, xa.jsx)(_e, {
                          to: "/register1",
                          children: "Register",
                        }),
                      }),
                      (0, xa.jsx)("li", {
                        children: (0, xa.jsx)(_e, {
                          to: "/login1",
                          children: "Login",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, xa.jsxs)("section", {
                className: "container",
                children: [
                  (0, xa.jsx)("h1", {
                    className: "large text-primary",
                    children: "Sign Up",
                  }),
                  (0, xa.jsxs)("p", {
                    className: "lead",
                    children: [
                      (0, xa.jsx)(la, { icon: pa }),
                      " Create Your Account",
                    ],
                  }),
                  (0, xa.jsxs)("form", {
                    className: "form",
                    onSubmit: (e) => {
                      e.preventDefault(),
                        zi
                          .post(
                            "".concat(window.location.origin, "/register1"),
                            t
                          )
                          .then((e) => {
                            console.log(e.data),
                              o("You have registered successfully"),
                              alert("You have registered successfully");
                          })
                          .catch((e) => {
                            console.error("Error registering:", e), o("");
                          });
                    },
                    children: [
                      (0, xa.jsx)("div", {
                        className: "form-group",
                        children: (0, xa.jsxs)("div", {
                          className: "input-group",
                          children: [
                            (0, xa.jsx)("div", {
                              className: "input-group-prepend",
                              children: (0, xa.jsx)("span", {
                                className: "input-group-text",
                                children: (0, xa.jsx)(la, { icon: pa }),
                              }),
                            }),
                            (0, xa.jsx)("input", {
                              type: "text",
                              placeholder: "Name",
                              name: "fullname",
                              onChange: i,
                              required: !0,
                              className: "form-control",
                            }),
                          ],
                        }),
                      }),
                      (0, xa.jsx)("div", {
                        className: "form-group",
                        children: (0, xa.jsxs)("div", {
                          className: "input-group",
                          children: [
                            (0, xa.jsx)("div", {
                              className: "input-group-prepend",
                              children: (0, xa.jsx)("span", {
                                className: "input-group-text",
                                children: (0, xa.jsx)(la, { icon: ga }),
                              }),
                            }),
                            (0, xa.jsx)("input", {
                              type: "email",
                              placeholder: "Email Address",
                              name: "email",
                              onChange: i,
                              required: !0,
                              className: "form-control",
                            }),
                          ],
                        }),
                      }),
                      (0, xa.jsx)("div", {
                        className: "form-group",
                        children: (0, xa.jsxs)("div", {
                          className: "input-group",
                          children: [
                            (0, xa.jsx)("div", {
                              className: "input-group-prepend",
                              children: (0, xa.jsx)("span", {
                                className: "input-group-text",
                                children: (0, xa.jsx)(la, { icon: ma }),
                              }),
                            }),
                            (0, xa.jsx)("input", {
                              type: "text",
                              placeholder: "Mobile",
                              name: "mobile",
                              onChange: i,
                              required: !0,
                              className: "form-control",
                            }),
                          ],
                        }),
                      }),
                      (0, xa.jsxs)("div", {
                        className: "form-group",
                        children: [
                          (0, xa.jsxs)("div", {
                            className: "input-group",
                            children: [
                              (0, xa.jsx)("div", {
                                className: "input-group-prepend",
                                children: (0, xa.jsx)("span", {
                                  className: "input-group-text",
                                  children: (0, xa.jsx)(la, { icon: fa }),
                                }),
                              }),
                              (0, xa.jsx)("input", {
                                type: "text",
                                placeholder: "Skill",
                                name: "skill",
                                onChange: i,
                                required: !0,
                                className: "form-control",
                              }),
                            ],
                          }),
                          (0, xa.jsx)("small", {
                            className: "form-text",
                            children:
                              "Please provide skills separated by commas",
                          }),
                        ],
                      }),
                      (0, xa.jsx)("div", {
                        className: "form-group",
                        children: (0, xa.jsxs)("div", {
                          className: "input-group",
                          children: [
                            (0, xa.jsx)("div", {
                              className: "input-group-prepend",
                              children: (0, xa.jsx)("span", {
                                className: "input-group-text",
                                children: (0, xa.jsx)(la, { icon: da }),
                              }),
                            }),
                            (0, xa.jsx)("input", {
                              type: "password",
                              placeholder: "Password",
                              name: "password",
                              onChange: i,
                              required: !0,
                              className: "form-control",
                            }),
                          ],
                        }),
                      }),
                      (0, xa.jsx)("div", {
                        className: "form-group",
                        children: (0, xa.jsxs)("div", {
                          className: "input-group",
                          children: [
                            (0, xa.jsx)("div", {
                              className: "input-group-prepend",
                              children: (0, xa.jsx)("span", {
                                className: "input-group-text",
                                children: (0, xa.jsx)(la, { icon: da }),
                              }),
                            }),
                            (0, xa.jsx)("input", {
                              type: "password",
                              placeholder: "Confirm Password",
                              name: "confirmpassword",
                              onChange: i,
                              required: !0,
                              className: "form-control",
                            }),
                          ],
                        }),
                      }),
                      (0, xa.jsx)("input", {
                        type: "submit",
                        className: "btn btn-primary",
                        value: "Register",
                      }),
                    ],
                  }),
                  r && (0, xa.jsx)("p", { className: "my-1", children: r }),
                  (0, xa.jsxs)("p", {
                    className: "my-1",
                    children: [
                      "Already have an account? ",
                      (0, xa.jsx)(_e, {
                        to: "/login1",
                        onClick: () => e("/login1"),
                        children: "Sign In",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Mi = (e) => {
          let { profile: t } = e;
          return (0, xa.jsxs)("div", {
            className: "profile bg-light",
            children: [
              (0, xa.jsx)("img", {
                className: "round-img",
                src: "https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png",
                alt: "".concat(t.name || "John Doe", "'s profile"),
              }),
              (0, xa.jsxs)("div", {
                children: [
                  (0, xa.jsx)("h2", { children: t.fullname }),
                  (0, xa.jsx)("p", { children: t.email }),
                  (0, xa.jsx)("p", { children: t.mobile }),
                  (0, xa.jsx)("p", { children: t.skill }),
                  (0, xa.jsx)(_e, {
                    to: "/indprofile/"
                      .concat(t.fullname, "/")
                      .concat(t.email, "/")
                      .concat(t.mobile, "/")
                      .concat(t._id),
                    className: "btn btn-primary",
                    children: "View Profile",
                  }),
                ],
              }),
            ],
          });
        },
        Ii = () => {
          const [e, t] = (0, a.useState)([]);
          return (
            (0, a.useEffect)(() => {
              zi.get("".concat(window.location.origin, "/allprofiles"), {
                headers: { "x-token": localStorage.getItem("token") },
              })
                .then((e) => t(e.data))
                .catch((e) => {
                  console.error("Error fetching profiles:", e);
                });
            }, []),
            localStorage.getItem("token")
              ? (0, xa.jsxs)("div", {
                  children: [
                    (0, xa.jsxs)("nav", {
                      className: "navbar bg-dark",
                      children: [
                        (0, xa.jsx)("h1", {
                          children: (0, xa.jsxs)(_e, {
                            to: "/",
                            children: [
                              (0, xa.jsx)("i", { className: "fas fa-code" }),
                              " Independent Corporate",
                            ],
                          }),
                        }),
                        (0, xa.jsxs)("ul", {
                          children: [
                            (0, xa.jsx)("li", {
                              children: (0, xa.jsx)(_e, {
                                to: "/myprofile",
                                children: "My Profile",
                              }),
                            }),
                            (0, xa.jsx)("li", {
                              children: (0, xa.jsx)(_e, {
                                to: "/Chat",
                                children: "Chat",
                              }),
                            }),
                            (0, xa.jsx)("li", {
                              children: (0, xa.jsx)(_e, {
                                to: "/login1",
                                onClick: () => localStorage.removeItem("token"),
                                children: "Logout",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, xa.jsxs)("section", {
                      className: "container",
                      children: [
                        (0, xa.jsx)("h1", {
                          className: "large text-primary",
                          children: "Employers",
                        }),
                        (0, xa.jsxs)("p", {
                          className: "lead",
                          children: [
                            (0, xa.jsx)("i", {
                              className: "fab fa-connectdevelop",
                            }),
                            " Browse and connect with Employers",
                          ],
                        }),
                        (0, xa.jsx)("div", {
                          className: "profiles",
                          children:
                            e.length > 0
                              ? e.map((e, t) =>
                                  (0, xa.jsx)(Mi, { profile: e }, t)
                                )
                              : (0, xa.jsx)("p", {
                                  children: "No profiles found",
                                }),
                        }),
                      ],
                    }),
                  ],
                })
              : (0, xa.jsx)(ge, { to: "/login1" })
          );
        },
        Ui = () => {
          const [e, t] = (0, a.useState)(null),
            [n, r] = (0, a.useState)([]),
            o = ne();
          if (
            ((0, a.useEffect)(() => {
              zi
                .get("https://job-lxhp.onrender.com/myprofile", {
                  headers: { "x-token": localStorage.getItem("token") },
                })
                .then((e) => t(e.data)),
                zi
                  .get("https://job-lxhp.onrender.com/myreview", {
                    headers: { "x-token": localStorage.getItem("token") },
                  })
                  .then((e) => r(e.data));
            }, []),
            !localStorage.getItem("token"))
          )
            return (0, xa.jsx)(ge, { to: "/login1" });
          return (0, xa.jsxs)("div", {
            children: [
              (0, xa.jsxs)("nav", {
                className: "navbar bg-dark",
                children: [
                  (0, xa.jsx)("h1", {
                    children: (0, xa.jsxs)(_e, {
                      to: "/",
                      children: [
                        (0, xa.jsx)("i", { className: "fas fa-code" }),
                        "Independent Corporate",
                      ],
                    }),
                  }),
                  (0, xa.jsxs)("ul", {
                    children: [
                      (0, xa.jsx)("li", {
                        children: (0, xa.jsx)(_e, {
                          to: "/myprofile",
                          children: "Myprofile",
                        }),
                      }),
                      (0, xa.jsx)("li", {
                        children: (0, xa.jsx)(_e, {
                          to: "/login1",
                          children: "Logout",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              e &&
                (0, xa.jsxs)("section", {
                  className: "container",
                  children: [
                    (0, xa.jsx)(_e, {
                      to: "/myprofile",
                      className: "btn btn-light",
                      children: "Back to profiles",
                    }),
                    (0, xa.jsxs)("div", {
                      className: "profile-grid my-1",
                      children: [
                        (0, xa.jsxs)("div", {
                          className: "profile-top bg-primary p-2",
                          children: [
                            (0, xa.jsx)("img", {
                              className: "round-img",
                              src: "https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png",
                              alt: "",
                            }),
                            (0, xa.jsx)("h1", {
                              className: "large",
                              children: e.fullname,
                            }),
                            (0, xa.jsx)("p", {
                              className: "lead",
                              children: e.email,
                            }),
                            (0, xa.jsx)("p", { children: e.mobile }),
                            (0, xa.jsx)("button", {
                              className: "btn btn-primary",
                              onClick: () => {
                                return (
                                  (t = e._id), void o("/indprofile/".concat(t))
                                );
                                var t;
                              },
                              children: "View Profile",
                            }),
                          ],
                        }),
                        (0, xa.jsxs)("div", {
                          className: "profile-github",
                          children: [
                            (0, xa.jsxs)("h2", {
                              className: "text-primary my-1",
                              children: [
                                (0, xa.jsx)("i", {
                                  className: "fab fa-github",
                                }),
                                "Reviews and Ratings",
                              ],
                            }),
                            (0, xa.jsx)("div", {
                              className: "repo bg-white p-1 my-1",
                              children:
                                n &&
                                n.map((e) =>
                                  (0, xa.jsxs)(
                                    "div",
                                    {
                                      children: [
                                        (0, xa.jsx)("h4", {
                                          children: e.taskprovider,
                                        }),
                                        (0, xa.jsxs)("p", {
                                          children: [e.rating, "/5"],
                                        }),
                                      ],
                                    },
                                    e._id
                                  )
                                ),
                            }),
                            (0, xa.jsx)("div", {
                              className: "repo bg-white p-1 my-1",
                              children: (0, xa.jsxs)("div", {
                                children: [
                                  (0, xa.jsx)("h4", {
                                    children: "Enter your reviews",
                                  }),
                                  (0, xa.jsxs)("form", {
                                    className: "form",
                                    children: [
                                      (0, xa.jsx)("div", {
                                        className: "form-group",
                                        children: (0, xa.jsx)("input", {
                                          type: "text",
                                          placeholder:
                                            "Enter Your rating out of 5",
                                          name: "rating",
                                          required: !0,
                                        }),
                                      }),
                                      (0, xa.jsx)("input", {
                                        type: "submit",
                                        className: "btn btn-primary",
                                        value: "Add Rating",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        },
        Bi = Object.create(null);
      (Bi.open = "0"),
        (Bi.close = "1"),
        (Bi.ping = "2"),
        (Bi.pong = "3"),
        (Bi.message = "4"),
        (Bi.upgrade = "5"),
        (Bi.noop = "6");
      const qi = Object.create(null);
      Object.keys(Bi).forEach((e) => {
        qi[Bi[e]] = e;
      });
      const Vi = { type: "error", data: "parser error" },
        Wi =
          "function" === typeof Blob ||
          ("undefined" !== typeof Blob &&
            "[object BlobConstructor]" ===
              Object.prototype.toString.call(Blob)),
        Hi = "function" === typeof ArrayBuffer,
        $i = (e) =>
          "function" === typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer instanceof ArrayBuffer,
        Qi = (e, t, n) => {
          let { type: r, data: a } = e;
          return Wi && a instanceof Blob
            ? t
              ? n(a)
              : Ki(a, n)
            : Hi && (a instanceof ArrayBuffer || $i(a))
            ? t
              ? n(a)
              : Ki(new Blob([a]), n)
            : n(Bi[r] + (a || ""));
        },
        Ki = (e, t) => {
          const n = new FileReader();
          return (
            (n.onload = function () {
              const e = n.result.split(",")[1];
              t("b" + (e || ""));
            }),
            n.readAsDataURL(e)
          );
        };
      function Yi(e) {
        return e instanceof Uint8Array
          ? e
          : e instanceof ArrayBuffer
          ? new Uint8Array(e)
          : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      }
      let Ji;
      const Xi =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        Gi = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256);
      for (let n = 0; n < 64; n++) Gi[Xi.charCodeAt(n)] = n;
      const Zi = "function" === typeof ArrayBuffer,
        es = (e, t) => {
          if ("string" !== typeof e) return { type: "message", data: ns(e, t) };
          const n = e.charAt(0);
          if ("b" === n)
            return { type: "message", data: ts(e.substring(1), t) };
          return qi[n]
            ? e.length > 1
              ? { type: qi[n], data: e.substring(1) }
              : { type: qi[n] }
            : Vi;
        },
        ts = (e, t) => {
          if (Zi) {
            const n = ((e) => {
              let t,
                n,
                r,
                a,
                o,
                i = 0.75 * e.length,
                s = e.length,
                l = 0;
              "=" === e[e.length - 1] && (i--, "=" === e[e.length - 2] && i--);
              const c = new ArrayBuffer(i),
                u = new Uint8Array(c);
              for (t = 0; t < s; t += 4)
                (n = Gi[e.charCodeAt(t)]),
                  (r = Gi[e.charCodeAt(t + 1)]),
                  (a = Gi[e.charCodeAt(t + 2)]),
                  (o = Gi[e.charCodeAt(t + 3)]),
                  (u[l++] = (n << 2) | (r >> 4)),
                  (u[l++] = ((15 & r) << 4) | (a >> 2)),
                  (u[l++] = ((3 & a) << 6) | (63 & o));
              return c;
            })(e);
            return ns(n, t);
          }
          return { base64: !0, data: e };
        },
        ns = (e, t) =>
          "blob" === t
            ? e instanceof Blob
              ? e
              : new Blob([e])
            : e instanceof ArrayBuffer
            ? e
            : e.buffer,
        rs = String.fromCharCode(30);
      function as() {
        return new TransformStream({
          transform(e, t) {
            !(function (e, t) {
              Wi && e.data instanceof Blob
                ? e.data.arrayBuffer().then(Yi).then(t)
                : Hi && (e.data instanceof ArrayBuffer || $i(e.data))
                ? t(Yi(e.data))
                : Qi(e, !1, (e) => {
                    Ji || (Ji = new TextEncoder()), t(Ji.encode(e));
                  });
            })(e, (n) => {
              const r = n.length;
              let a;
              if (r < 126)
                (a = new Uint8Array(1)), new DataView(a.buffer).setUint8(0, r);
              else if (r < 65536) {
                a = new Uint8Array(3);
                const e = new DataView(a.buffer);
                e.setUint8(0, 126), e.setUint16(1, r);
              } else {
                a = new Uint8Array(9);
                const e = new DataView(a.buffer);
                e.setUint8(0, 127), e.setBigUint64(1, BigInt(r));
              }
              e.data && "string" !== typeof e.data && (a[0] |= 128),
                t.enqueue(a),
                t.enqueue(n);
            });
          },
        });
      }
      let os;
      function is(e) {
        return e.reduce((e, t) => e + t.length, 0);
      }
      function ss(e, t) {
        if (e[0].length === t) return e.shift();
        const n = new Uint8Array(t);
        let r = 0;
        for (let a = 0; a < t; a++)
          (n[a] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0));
        return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
      }
      function ls(e) {
        if (e)
          return (function (e) {
            for (var t in ls.prototype) e[t] = ls.prototype[t];
            return e;
          })(e);
      }
      (ls.prototype.on = ls.prototype.addEventListener =
        function (e, t) {
          return (
            (this._callbacks = this._callbacks || {}),
            (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
            this
          );
        }),
        (ls.prototype.once = function (e, t) {
          function n() {
            this.off(e, n), t.apply(this, arguments);
          }
          return (n.fn = t), this.on(e, n), this;
        }),
        (ls.prototype.off =
          ls.prototype.removeListener =
          ls.prototype.removeAllListeners =
          ls.prototype.removeEventListener =
            function (e, t) {
              if (
                ((this._callbacks = this._callbacks || {}),
                0 == arguments.length)
              )
                return (this._callbacks = {}), this;
              var n,
                r = this._callbacks["$" + e];
              if (!r) return this;
              if (1 == arguments.length)
                return delete this._callbacks["$" + e], this;
              for (var a = 0; a < r.length; a++)
                if ((n = r[a]) === t || n.fn === t) {
                  r.splice(a, 1);
                  break;
                }
              return 0 === r.length && delete this._callbacks["$" + e], this;
            }),
        (ls.prototype.emit = function (e) {
          this._callbacks = this._callbacks || {};
          for (
            var t = new Array(arguments.length - 1),
              n = this._callbacks["$" + e],
              r = 1;
            r < arguments.length;
            r++
          )
            t[r - 1] = arguments[r];
          if (n) {
            r = 0;
            for (var a = (n = n.slice(0)).length; r < a; ++r)
              n[r].apply(this, t);
          }
          return this;
        }),
        (ls.prototype.emitReserved = ls.prototype.emit),
        (ls.prototype.listeners = function (e) {
          return (
            (this._callbacks = this._callbacks || {}),
            this._callbacks["$" + e] || []
          );
        }),
        (ls.prototype.hasListeners = function (e) {
          return !!this.listeners(e).length;
        });
      const cs =
        "undefined" !== typeof self
          ? self
          : "undefined" !== typeof window
          ? window
          : Function("return this")();
      function us(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return n.reduce(
          (t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t),
          {}
        );
      }
      const fs = cs.setTimeout,
        ds = cs.clearTimeout;
      function ps(e, t) {
        t.useNativeTimers
          ? ((e.setTimeoutFn = fs.bind(cs)), (e.clearTimeoutFn = ds.bind(cs)))
          : ((e.setTimeoutFn = cs.setTimeout.bind(cs)),
            (e.clearTimeoutFn = cs.clearTimeout.bind(cs)));
      }
      class hs extends Error {
        constructor(e, t, n) {
          super(e),
            (this.description = t),
            (this.context = n),
            (this.type = "TransportError");
        }
      }
      class ms extends ls {
        constructor(e) {
          super(),
            (this.writable = !1),
            ps(this, e),
            (this.opts = e),
            (this.query = e.query),
            (this.socket = e.socket);
        }
        onError(e, t, n) {
          return super.emitReserved("error", new hs(e, t, n)), this;
        }
        open() {
          return (this.readyState = "opening"), this.doOpen(), this;
        }
        close() {
          return (
            ("opening" !== this.readyState && "open" !== this.readyState) ||
              (this.doClose(), this.onClose()),
            this
          );
        }
        send(e) {
          "open" === this.readyState && this.write(e);
        }
        onOpen() {
          (this.readyState = "open"),
            (this.writable = !0),
            super.emitReserved("open");
        }
        onData(e) {
          const t = es(e, this.socket.binaryType);
          this.onPacket(t);
        }
        onPacket(e) {
          super.emitReserved("packet", e);
        }
        onClose(e) {
          (this.readyState = "closed"), super.emitReserved("close", e);
        }
        pause(e) {}
        createUri(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (
            e +
            "://" +
            this._hostname() +
            this._port() +
            this.opts.path +
            this._query(t)
          );
        }
        _hostname() {
          const e = this.opts.hostname;
          return -1 === e.indexOf(":") ? e : "[" + e + "]";
        }
        _port() {
          return this.opts.port &&
            ((this.opts.secure && Number(443 !== this.opts.port)) ||
              (!this.opts.secure && 80 !== Number(this.opts.port)))
            ? ":" + this.opts.port
            : "";
        }
        _query(e) {
          const t = (function (e) {
            let t = "";
            for (let n in e)
              e.hasOwnProperty(n) &&
                (t.length && (t += "&"),
                (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
            return t;
          })(e);
          return t.length ? "?" + t : "";
        }
      }
      const gs =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
            ""
          ),
        ys = 64,
        vs = {};
      let bs,
        ws = 0,
        xs = 0;
      function ks(e) {
        let t = "";
        do {
          (t = gs[e % ys] + t), (e = Math.floor(e / ys));
        } while (e > 0);
        return t;
      }
      function Ss() {
        const e = ks(+new Date());
        return e !== bs ? ((ws = 0), (bs = e)) : e + "." + ks(ws++);
      }
      for (; xs < ys; xs++) vs[gs[xs]] = xs;
      let Es = !1;
      try {
        Es =
          "undefined" !== typeof XMLHttpRequest &&
          "withCredentials" in new XMLHttpRequest();
      } catch (gl) {}
      const Cs = Es;
      function Ns(e) {
        const t = e.xdomain;
        try {
          if ("undefined" !== typeof XMLHttpRequest && (!t || Cs))
            return new XMLHttpRequest();
        } catch (ml) {}
        if (!t)
          try {
            return new cs[["Active"].concat("Object").join("X")](
              "Microsoft.XMLHTTP"
            );
          } catch (ml) {}
      }
      function Os() {}
      const _s = null != new Ns({ xdomain: !1 }).responseType;
      class js extends ls {
        constructor(e, t) {
          super(),
            ps(this, t),
            (this.opts = t),
            (this.method = t.method || "GET"),
            (this.uri = e),
            (this.data = void 0 !== t.data ? t.data : null),
            this.create();
        }
        create() {
          var e;
          const t = us(
            this.opts,
            "agent",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "autoUnref"
          );
          t.xdomain = !!this.opts.xd;
          const n = (this.xhr = new Ns(t));
          try {
            n.open(this.method, this.uri, !0);
            try {
              if (this.opts.extraHeaders) {
                n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
                for (let e in this.opts.extraHeaders)
                  this.opts.extraHeaders.hasOwnProperty(e) &&
                    n.setRequestHeader(e, this.opts.extraHeaders[e]);
              }
            } catch (ml) {}
            if ("POST" === this.method)
              try {
                n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
              } catch (ml) {}
            try {
              n.setRequestHeader("Accept", "*/*");
            } catch (ml) {}
            null === (e = this.opts.cookieJar) ||
              void 0 === e ||
              e.addCookies(n),
              "withCredentials" in n &&
                (n.withCredentials = this.opts.withCredentials),
              this.opts.requestTimeout &&
                (n.timeout = this.opts.requestTimeout),
              (n.onreadystatechange = () => {
                var e;
                3 === n.readyState &&
                  (null === (e = this.opts.cookieJar) ||
                    void 0 === e ||
                    e.parseCookies(n)),
                  4 === n.readyState &&
                    (200 === n.status || 1223 === n.status
                      ? this.onLoad()
                      : this.setTimeoutFn(() => {
                          this.onError(
                            "number" === typeof n.status ? n.status : 0
                          );
                        }, 0));
              }),
              n.send(this.data);
          } catch (ml) {
            return void this.setTimeoutFn(() => {
              this.onError(ml);
            }, 0);
          }
          "undefined" !== typeof document &&
            ((this.index = js.requestsCount++),
            (js.requests[this.index] = this));
        }
        onError(e) {
          this.emitReserved("error", e, this.xhr), this.cleanup(!0);
        }
        cleanup(e) {
          if ("undefined" !== typeof this.xhr && null !== this.xhr) {
            if (((this.xhr.onreadystatechange = Os), e))
              try {
                this.xhr.abort();
              } catch (ml) {}
            "undefined" !== typeof document && delete js.requests[this.index],
              (this.xhr = null);
          }
        }
        onLoad() {
          const e = this.xhr.responseText;
          null !== e &&
            (this.emitReserved("data", e),
            this.emitReserved("success"),
            this.cleanup());
        }
        abort() {
          this.cleanup();
        }
      }
      if (
        ((js.requestsCount = 0),
        (js.requests = {}),
        "undefined" !== typeof document)
      )
        if ("function" === typeof attachEvent) attachEvent("onunload", Ps);
        else if ("function" === typeof addEventListener) {
          addEventListener("onpagehide" in cs ? "pagehide" : "unload", Ps, !1);
        }
      function Ps() {
        for (let e in js.requests)
          js.requests.hasOwnProperty(e) && js.requests[e].abort();
      }
      const Rs =
          "function" === typeof Promise && "function" === typeof Promise.resolve
            ? (e) => Promise.resolve().then(e)
            : (e, t) => t(e, 0),
        Ts = cs.WebSocket || cs.MozWebSocket,
        As =
          "undefined" !== typeof navigator &&
          "string" === typeof navigator.product &&
          "reactnative" === navigator.product.toLowerCase();
      const Ls = {
          websocket: class extends ms {
            constructor(e) {
              super(e), (this.supportsBinary = !e.forceBase64);
            }
            get name() {
              return "websocket";
            }
            doOpen() {
              if (!this.check()) return;
              const e = this.uri(),
                t = this.opts.protocols,
                n = As
                  ? {}
                  : us(
                      this.opts,
                      "agent",
                      "perMessageDeflate",
                      "pfx",
                      "key",
                      "passphrase",
                      "cert",
                      "ca",
                      "ciphers",
                      "rejectUnauthorized",
                      "localAddress",
                      "protocolVersion",
                      "origin",
                      "maxPayload",
                      "family",
                      "checkServerIdentity"
                    );
              this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
              try {
                this.ws = As ? new Ts(e, t, n) : t ? new Ts(e, t) : new Ts(e);
              } catch (gl) {
                return this.emitReserved("error", gl);
              }
              (this.ws.binaryType = this.socket.binaryType),
                this.addEventListeners();
            }
            addEventListeners() {
              (this.ws.onopen = () => {
                this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
              }),
                (this.ws.onclose = (e) =>
                  this.onClose({
                    description: "websocket connection closed",
                    context: e,
                  })),
                (this.ws.onmessage = (e) => this.onData(e.data)),
                (this.ws.onerror = (e) => this.onError("websocket error", e));
            }
            write(e) {
              this.writable = !1;
              for (let t = 0; t < e.length; t++) {
                const n = e[t],
                  r = t === e.length - 1;
                Qi(n, this.supportsBinary, (e) => {
                  try {
                    this.ws.send(e);
                  } catch (ml) {}
                  r &&
                    Rs(() => {
                      (this.writable = !0), this.emitReserved("drain");
                    }, this.setTimeoutFn);
                });
              }
            }
            doClose() {
              "undefined" !== typeof this.ws &&
                (this.ws.close(), (this.ws = null));
            }
            uri() {
              const e = this.opts.secure ? "wss" : "ws",
                t = this.query || {};
              return (
                this.opts.timestampRequests &&
                  (t[this.opts.timestampParam] = Ss()),
                this.supportsBinary || (t.b64 = 1),
                this.createUri(e, t)
              );
            }
            check() {
              return !!Ts;
            }
          },
          webtransport: class extends ms {
            get name() {
              return "webtransport";
            }
            doOpen() {
              "function" === typeof WebTransport &&
                ((this.transport = new WebTransport(
                  this.createUri("https"),
                  this.opts.transportOptions[this.name]
                )),
                this.transport.closed
                  .then(() => {
                    this.onClose();
                  })
                  .catch((e) => {
                    this.onError("webtransport error", e);
                  }),
                this.transport.ready.then(() => {
                  this.transport.createBidirectionalStream().then((e) => {
                    const t = (function (e, t) {
                        os || (os = new TextDecoder());
                        const n = [];
                        let r = 0,
                          a = -1,
                          o = !1;
                        return new TransformStream({
                          transform(i, s) {
                            for (n.push(i); ; ) {
                              if (0 === r) {
                                if (is(n) < 1) break;
                                const e = ss(n, 1);
                                (o = 128 === (128 & e[0])),
                                  (a = 127 & e[0]),
                                  (r = a < 126 ? 3 : 126 === a ? 1 : 2);
                              } else if (1 === r) {
                                if (is(n) < 2) break;
                                const e = ss(n, 2);
                                (a = new DataView(
                                  e.buffer,
                                  e.byteOffset,
                                  e.length
                                ).getUint16(0)),
                                  (r = 3);
                              } else if (2 === r) {
                                if (is(n) < 8) break;
                                const e = ss(n, 8),
                                  t = new DataView(
                                    e.buffer,
                                    e.byteOffset,
                                    e.length
                                  ),
                                  o = t.getUint32(0);
                                if (o > Math.pow(2, 21) - 1) {
                                  s.enqueue(Vi);
                                  break;
                                }
                                (a = o * Math.pow(2, 32) + t.getUint32(4)),
                                  (r = 3);
                              } else {
                                if (is(n) < a) break;
                                const e = ss(n, a);
                                s.enqueue(es(o ? e : os.decode(e), t)), (r = 0);
                              }
                              if (0 === a || a > e) {
                                s.enqueue(Vi);
                                break;
                              }
                            }
                          },
                        });
                      })(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                      n = e.readable.pipeThrough(t).getReader(),
                      r = as();
                    r.readable.pipeTo(e.writable),
                      (this.writer = r.writable.getWriter());
                    const a = () => {
                      n.read()
                        .then((e) => {
                          let { done: t, value: n } = e;
                          t || (this.onPacket(n), a());
                        })
                        .catch((e) => {});
                    };
                    a();
                    const o = { type: "open" };
                    this.query.sid &&
                      (o.data = '{"sid":"'.concat(this.query.sid, '"}')),
                      this.writer.write(o).then(() => this.onOpen());
                  });
                }));
            }
            write(e) {
              this.writable = !1;
              for (let t = 0; t < e.length; t++) {
                const n = e[t],
                  r = t === e.length - 1;
                this.writer.write(n).then(() => {
                  r &&
                    Rs(() => {
                      (this.writable = !0), this.emitReserved("drain");
                    }, this.setTimeoutFn);
                });
              }
            }
            doClose() {
              var e;
              null === (e = this.transport) || void 0 === e || e.close();
            }
          },
          polling: class extends ms {
            constructor(e) {
              if (
                (super(e), (this.polling = !1), "undefined" !== typeof location)
              ) {
                const t = "https:" === location.protocol;
                let n = location.port;
                n || (n = t ? "443" : "80"),
                  (this.xd =
                    ("undefined" !== typeof location &&
                      e.hostname !== location.hostname) ||
                    n !== e.port);
              }
              const t = e && e.forceBase64;
              (this.supportsBinary = _s && !t),
                this.opts.withCredentials && (this.cookieJar = void 0);
            }
            get name() {
              return "polling";
            }
            doOpen() {
              this.poll();
            }
            pause(e) {
              this.readyState = "pausing";
              const t = () => {
                (this.readyState = "paused"), e();
              };
              if (this.polling || !this.writable) {
                let e = 0;
                this.polling &&
                  (e++,
                  this.once("pollComplete", function () {
                    --e || t();
                  })),
                  this.writable ||
                    (e++,
                    this.once("drain", function () {
                      --e || t();
                    }));
              } else t();
            }
            poll() {
              (this.polling = !0), this.doPoll(), this.emitReserved("poll");
            }
            onData(e) {
              ((e, t) => {
                const n = e.split(rs),
                  r = [];
                for (let a = 0; a < n.length; a++) {
                  const e = es(n[a], t);
                  if ((r.push(e), "error" === e.type)) break;
                }
                return r;
              })(e, this.socket.binaryType).forEach((e) => {
                if (
                  ("opening" === this.readyState &&
                    "open" === e.type &&
                    this.onOpen(),
                  "close" === e.type)
                )
                  return (
                    this.onClose({
                      description: "transport closed by the server",
                    }),
                    !1
                  );
                this.onPacket(e);
              }),
                "closed" !== this.readyState &&
                  ((this.polling = !1),
                  this.emitReserved("pollComplete"),
                  "open" === this.readyState && this.poll());
            }
            doClose() {
              const e = () => {
                this.write([{ type: "close" }]);
              };
              "open" === this.readyState ? e() : this.once("open", e);
            }
            write(e) {
              (this.writable = !1),
                ((e, t) => {
                  const n = e.length,
                    r = new Array(n);
                  let a = 0;
                  e.forEach((e, o) => {
                    Qi(e, !1, (e) => {
                      (r[o] = e), ++a === n && t(r.join(rs));
                    });
                  });
                })(e, (e) => {
                  this.doWrite(e, () => {
                    (this.writable = !0), this.emitReserved("drain");
                  });
                });
            }
            uri() {
              const e = this.opts.secure ? "https" : "http",
                t = this.query || {};
              return (
                !1 !== this.opts.timestampRequests &&
                  (t[this.opts.timestampParam] = Ss()),
                this.supportsBinary || t.sid || (t.b64 = 1),
                this.createUri(e, t)
              );
            }
            request() {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return (
                Object.assign(
                  e,
                  { xd: this.xd, cookieJar: this.cookieJar },
                  this.opts
                ),
                new js(this.uri(), e)
              );
            }
            doWrite(e, t) {
              const n = this.request({ method: "POST", data: e });
              n.on("success", t),
                n.on("error", (e, t) => {
                  this.onError("xhr post error", e, t);
                });
            }
            doPoll() {
              const e = this.request();
              e.on("data", this.onData.bind(this)),
                e.on("error", (e, t) => {
                  this.onError("xhr poll error", e, t);
                }),
                (this.pollXhr = e);
            }
          },
        },
        zs =
          /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        Fs = [
          "source",
          "protocol",
          "authority",
          "userInfo",
          "user",
          "password",
          "host",
          "port",
          "relative",
          "path",
          "directory",
          "file",
          "query",
          "anchor",
        ];
      function Ds(e) {
        if (e.length > 2e3) throw "URI too long";
        const t = e,
          n = e.indexOf("["),
          r = e.indexOf("]");
        -1 != n &&
          -1 != r &&
          (e =
            e.substring(0, n) +
            e.substring(n, r).replace(/:/g, ";") +
            e.substring(r, e.length));
        let a = zs.exec(e || ""),
          o = {},
          i = 14;
        for (; i--; ) o[Fs[i]] = a[i] || "";
        return (
          -1 != n &&
            -1 != r &&
            ((o.source = t),
            (o.host = o.host
              .substring(1, o.host.length - 1)
              .replace(/;/g, ":")),
            (o.authority = o.authority
              .replace("[", "")
              .replace("]", "")
              .replace(/;/g, ":")),
            (o.ipv6uri = !0)),
          (o.pathNames = (function (e, t) {
            const n = /\/{2,9}/g,
              r = t.replace(n, "/").split("/");
            ("/" != t.slice(0, 1) && 0 !== t.length) || r.splice(0, 1);
            "/" == t.slice(-1) && r.splice(r.length - 1, 1);
            return r;
          })(0, o.path)),
          (o.queryKey = (function (e, t) {
            const n = {};
            return (
              t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (e, t, r) {
                t && (n[t] = r);
              }),
              n
            );
          })(0, o.query)),
          o
        );
      }
      class Ms extends ls {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          super(),
            (this.binaryType = "arraybuffer"),
            (this.writeBuffer = []),
            e && "object" === typeof e && ((t = e), (e = null)),
            e
              ? ((e = Ds(e)),
                (t.hostname = e.host),
                (t.secure = "https" === e.protocol || "wss" === e.protocol),
                (t.port = e.port),
                e.query && (t.query = e.query))
              : t.host && (t.hostname = Ds(t.host).host),
            ps(this, t),
            (this.secure =
              null != t.secure
                ? t.secure
                : "undefined" !== typeof location &&
                  "https:" === location.protocol),
            t.hostname && !t.port && (t.port = this.secure ? "443" : "80"),
            (this.hostname =
              t.hostname ||
              ("undefined" !== typeof location
                ? location.hostname
                : "localhost")),
            (this.port =
              t.port ||
              ("undefined" !== typeof location && location.port
                ? location.port
                : this.secure
                ? "443"
                : "80")),
            (this.transports = t.transports || [
              "polling",
              "websocket",
              "webtransport",
            ]),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0),
            (this.opts = Object.assign(
              {
                path: "/engine.io",
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: "t",
                rememberUpgrade: !1,
                addTrailingSlash: !0,
                rejectUnauthorized: !0,
                perMessageDeflate: { threshold: 1024 },
                transportOptions: {},
                closeOnBeforeunload: !1,
              },
              t
            )),
            (this.opts.path =
              this.opts.path.replace(/\/$/, "") +
              (this.opts.addTrailingSlash ? "/" : "")),
            "string" === typeof this.opts.query &&
              (this.opts.query = (function (e) {
                let t = {},
                  n = e.split("&");
                for (let r = 0, a = n.length; r < a; r++) {
                  let e = n[r].split("=");
                  t[decodeURIComponent(e[0])] = decodeURIComponent(e[1]);
                }
                return t;
              })(this.opts.query)),
            (this.id = null),
            (this.upgrades = null),
            (this.pingInterval = null),
            (this.pingTimeout = null),
            (this.pingTimeoutTimer = null),
            "function" === typeof addEventListener &&
              (this.opts.closeOnBeforeunload &&
                ((this.beforeunloadEventListener = () => {
                  this.transport &&
                    (this.transport.removeAllListeners(),
                    this.transport.close());
                }),
                addEventListener(
                  "beforeunload",
                  this.beforeunloadEventListener,
                  !1
                )),
              "localhost" !== this.hostname &&
                ((this.offlineEventListener = () => {
                  this.onClose("transport close", {
                    description: "network connection lost",
                  });
                }),
                addEventListener("offline", this.offlineEventListener, !1))),
            this.open();
        }
        createTransport(e) {
          const t = Object.assign({}, this.opts.query);
          (t.EIO = 4), (t.transport = e), this.id && (t.sid = this.id);
          const n = Object.assign(
            {},
            this.opts,
            {
              query: t,
              socket: this,
              hostname: this.hostname,
              secure: this.secure,
              port: this.port,
            },
            this.opts.transportOptions[e]
          );
          return new Ls[e](n);
        }
        open() {
          let e;
          if (
            this.opts.rememberUpgrade &&
            Ms.priorWebsocketSuccess &&
            -1 !== this.transports.indexOf("websocket")
          )
            e = "websocket";
          else {
            if (0 === this.transports.length)
              return void this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
              }, 0);
            e = this.transports[0];
          }
          this.readyState = "opening";
          try {
            e = this.createTransport(e);
          } catch (ml) {
            return this.transports.shift(), void this.open();
          }
          e.open(), this.setTransport(e);
        }
        setTransport(e) {
          this.transport && this.transport.removeAllListeners(),
            (this.transport = e),
            e
              .on("drain", this.onDrain.bind(this))
              .on("packet", this.onPacket.bind(this))
              .on("error", this.onError.bind(this))
              .on("close", (e) => this.onClose("transport close", e));
        }
        probe(e) {
          let t = this.createTransport(e),
            n = !1;
          Ms.priorWebsocketSuccess = !1;
          const r = () => {
            n ||
              (t.send([{ type: "ping", data: "probe" }]),
              t.once("packet", (e) => {
                if (!n)
                  if ("pong" === e.type && "probe" === e.data) {
                    if (
                      ((this.upgrading = !0),
                      this.emitReserved("upgrading", t),
                      !t)
                    )
                      return;
                    (Ms.priorWebsocketSuccess = "websocket" === t.name),
                      this.transport.pause(() => {
                        n ||
                          ("closed" !== this.readyState &&
                            (c(),
                            this.setTransport(t),
                            t.send([{ type: "upgrade" }]),
                            this.emitReserved("upgrade", t),
                            (t = null),
                            (this.upgrading = !1),
                            this.flush()));
                      });
                  } else {
                    const e = new Error("probe error");
                    (e.transport = t.name),
                      this.emitReserved("upgradeError", e);
                  }
              }));
          };
          function a() {
            n || ((n = !0), c(), t.close(), (t = null));
          }
          const o = (e) => {
            const n = new Error("probe error: " + e);
            (n.transport = t.name), a(), this.emitReserved("upgradeError", n);
          };
          function i() {
            o("transport closed");
          }
          function s() {
            o("socket closed");
          }
          function l(e) {
            t && e.name !== t.name && a();
          }
          const c = () => {
            t.removeListener("open", r),
              t.removeListener("error", o),
              t.removeListener("close", i),
              this.off("close", s),
              this.off("upgrading", l);
          };
          t.once("open", r),
            t.once("error", o),
            t.once("close", i),
            this.once("close", s),
            this.once("upgrading", l),
            -1 !== this.upgrades.indexOf("webtransport") && "webtransport" !== e
              ? this.setTimeoutFn(() => {
                  n || t.open();
                }, 200)
              : t.open();
        }
        onOpen() {
          if (
            ((this.readyState = "open"),
            (Ms.priorWebsocketSuccess = "websocket" === this.transport.name),
            this.emitReserved("open"),
            this.flush(),
            "open" === this.readyState && this.opts.upgrade)
          ) {
            let e = 0;
            const t = this.upgrades.length;
            for (; e < t; e++) this.probe(this.upgrades[e]);
          }
        }
        onPacket(e) {
          if (
            "opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState
          )
            switch (
              (this.emitReserved("packet", e),
              this.emitReserved("heartbeat"),
              this.resetPingTimeout(),
              e.type)
            ) {
              case "open":
                this.onHandshake(JSON.parse(e.data));
                break;
              case "ping":
                this.sendPacket("pong"),
                  this.emitReserved("ping"),
                  this.emitReserved("pong");
                break;
              case "error":
                const t = new Error("server error");
                (t.code = e.data), this.onError(t);
                break;
              case "message":
                this.emitReserved("data", e.data),
                  this.emitReserved("message", e.data);
            }
        }
        onHandshake(e) {
          this.emitReserved("handshake", e),
            (this.id = e.sid),
            (this.transport.query.sid = e.sid),
            (this.upgrades = this.filterUpgrades(e.upgrades)),
            (this.pingInterval = e.pingInterval),
            (this.pingTimeout = e.pingTimeout),
            (this.maxPayload = e.maxPayload),
            this.onOpen(),
            "closed" !== this.readyState && this.resetPingTimeout();
        }
        resetPingTimeout() {
          this.clearTimeoutFn(this.pingTimeoutTimer),
            (this.pingTimeoutTimer = this.setTimeoutFn(() => {
              this.onClose("ping timeout");
            }, this.pingInterval + this.pingTimeout)),
            this.opts.autoUnref && this.pingTimeoutTimer.unref();
        }
        onDrain() {
          this.writeBuffer.splice(0, this.prevBufferLen),
            (this.prevBufferLen = 0),
            0 === this.writeBuffer.length
              ? this.emitReserved("drain")
              : this.flush();
        }
        flush() {
          if (
            "closed" !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length
          ) {
            const e = this.getWritablePackets();
            this.transport.send(e),
              (this.prevBufferLen = e.length),
              this.emitReserved("flush");
          }
        }
        getWritablePackets() {
          if (
            !(
              this.maxPayload &&
              "polling" === this.transport.name &&
              this.writeBuffer.length > 1
            )
          )
            return this.writeBuffer;
          let e = 1;
          for (let n = 0; n < this.writeBuffer.length; n++) {
            const r = this.writeBuffer[n].data;
            if (
              (r &&
                (e +=
                  "string" === typeof (t = r)
                    ? (function (e) {
                        let t = 0,
                          n = 0;
                        for (let r = 0, a = e.length; r < a; r++)
                          (t = e.charCodeAt(r)),
                            t < 128
                              ? (n += 1)
                              : t < 2048
                              ? (n += 2)
                              : t < 55296 || t >= 57344
                              ? (n += 3)
                              : (r++, (n += 4));
                        return n;
                      })(t)
                    : Math.ceil(1.33 * (t.byteLength || t.size))),
              n > 0 && e > this.maxPayload)
            )
              return this.writeBuffer.slice(0, n);
            e += 2;
          }
          var t;
          return this.writeBuffer;
        }
        write(e, t, n) {
          return this.sendPacket("message", e, t, n), this;
        }
        send(e, t, n) {
          return this.sendPacket("message", e, t, n), this;
        }
        sendPacket(e, t, n, r) {
          if (
            ("function" === typeof t && ((r = t), (t = void 0)),
            "function" === typeof n && ((r = n), (n = null)),
            "closing" === this.readyState || "closed" === this.readyState)
          )
            return;
          (n = n || {}).compress = !1 !== n.compress;
          const a = { type: e, data: t, options: n };
          this.emitReserved("packetCreate", a),
            this.writeBuffer.push(a),
            r && this.once("flush", r),
            this.flush();
        }
        close() {
          const e = () => {
              this.onClose("forced close"), this.transport.close();
            },
            t = () => {
              this.off("upgrade", t), this.off("upgradeError", t), e();
            },
            n = () => {
              this.once("upgrade", t), this.once("upgradeError", t);
            };
          return (
            ("opening" !== this.readyState && "open" !== this.readyState) ||
              ((this.readyState = "closing"),
              this.writeBuffer.length
                ? this.once("drain", () => {
                    this.upgrading ? n() : e();
                  })
                : this.upgrading
                ? n()
                : e()),
            this
          );
        }
        onError(e) {
          (Ms.priorWebsocketSuccess = !1),
            this.emitReserved("error", e),
            this.onClose("transport error", e);
        }
        onClose(e, t) {
          ("opening" !== this.readyState &&
            "open" !== this.readyState &&
            "closing" !== this.readyState) ||
            (this.clearTimeoutFn(this.pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            "function" === typeof removeEventListener &&
              (removeEventListener(
                "beforeunload",
                this.beforeunloadEventListener,
                !1
              ),
              removeEventListener("offline", this.offlineEventListener, !1)),
            (this.readyState = "closed"),
            (this.id = null),
            this.emitReserved("close", e, t),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0));
        }
        filterUpgrades(e) {
          const t = [];
          let n = 0;
          const r = e.length;
          for (; n < r; n++) ~this.transports.indexOf(e[n]) && t.push(e[n]);
          return t;
        }
      }
      Ms.protocol = 4;
      Ms.protocol;
      const Is = "function" === typeof ArrayBuffer,
        Us = (e) =>
          "function" === typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e.buffer instanceof ArrayBuffer,
        Bs = Object.prototype.toString,
        qs =
          "function" === typeof Blob ||
          ("undefined" !== typeof Blob &&
            "[object BlobConstructor]" === Bs.call(Blob)),
        Vs =
          "function" === typeof File ||
          ("undefined" !== typeof File &&
            "[object FileConstructor]" === Bs.call(File));
      function Ws(e) {
        return (
          (Is && (e instanceof ArrayBuffer || Us(e))) ||
          (qs && e instanceof Blob) ||
          (Vs && e instanceof File)
        );
      }
      function Hs(e, t) {
        if (!e || "object" !== typeof e) return !1;
        if (Array.isArray(e)) {
          for (let t = 0, n = e.length; t < n; t++) if (Hs(e[t])) return !0;
          return !1;
        }
        if (Ws(e)) return !0;
        if (
          e.toJSON &&
          "function" === typeof e.toJSON &&
          1 === arguments.length
        )
          return Hs(e.toJSON(), !0);
        for (const n in e)
          if (Object.prototype.hasOwnProperty.call(e, n) && Hs(e[n])) return !0;
        return !1;
      }
      function $s(e) {
        const t = [],
          n = e.data,
          r = e;
        return (
          (r.data = Qs(n, t)),
          (r.attachments = t.length),
          { packet: r, buffers: t }
        );
      }
      function Qs(e, t) {
        if (!e) return e;
        if (Ws(e)) {
          const n = { _placeholder: !0, num: t.length };
          return t.push(e), n;
        }
        if (Array.isArray(e)) {
          const n = new Array(e.length);
          for (let r = 0; r < e.length; r++) n[r] = Qs(e[r], t);
          return n;
        }
        if ("object" === typeof e && !(e instanceof Date)) {
          const n = {};
          for (const r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (n[r] = Qs(e[r], t));
          return n;
        }
        return e;
      }
      function Ks(e, t) {
        return (e.data = Ys(e.data, t)), delete e.attachments, e;
      }
      function Ys(e, t) {
        if (!e) return e;
        if (e && !0 === e._placeholder) {
          if ("number" === typeof e.num && e.num >= 0 && e.num < t.length)
            return t[e.num];
          throw new Error("illegal attachments");
        }
        if (Array.isArray(e))
          for (let n = 0; n < e.length; n++) e[n] = Ys(e[n], t);
        else if ("object" === typeof e)
          for (const n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (e[n] = Ys(e[n], t));
        return e;
      }
      const Js = [
          "connect",
          "connect_error",
          "disconnect",
          "disconnecting",
          "newListener",
          "removeListener",
        ],
        Xs = 5;
      var Gs;
      !(function (e) {
        (e[(e.CONNECT = 0)] = "CONNECT"),
          (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
          (e[(e.EVENT = 2)] = "EVENT"),
          (e[(e.ACK = 3)] = "ACK"),
          (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
          (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
          (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
      })(Gs || (Gs = {}));
      class Zs {
        constructor(e) {
          this.replacer = e;
        }
        encode(e) {
          return (e.type !== Gs.EVENT && e.type !== Gs.ACK) || !Hs(e)
            ? [this.encodeAsString(e)]
            : this.encodeAsBinary({
                type: e.type === Gs.EVENT ? Gs.BINARY_EVENT : Gs.BINARY_ACK,
                nsp: e.nsp,
                data: e.data,
                id: e.id,
              });
        }
        encodeAsString(e) {
          let t = "" + e.type;
          return (
            (e.type !== Gs.BINARY_EVENT && e.type !== Gs.BINARY_ACK) ||
              (t += e.attachments + "-"),
            e.nsp && "/" !== e.nsp && (t += e.nsp + ","),
            null != e.id && (t += e.id),
            null != e.data && (t += JSON.stringify(e.data, this.replacer)),
            t
          );
        }
        encodeAsBinary(e) {
          const t = $s(e),
            n = this.encodeAsString(t.packet),
            r = t.buffers;
          return r.unshift(n), r;
        }
      }
      function el(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      class tl extends ls {
        constructor(e) {
          super(), (this.reviver = e);
        }
        add(e) {
          let t;
          if ("string" === typeof e) {
            if (this.reconstructor)
              throw new Error(
                "got plaintext data when reconstructing a packet"
              );
            t = this.decodeString(e);
            const n = t.type === Gs.BINARY_EVENT;
            n || t.type === Gs.BINARY_ACK
              ? ((t.type = n ? Gs.EVENT : Gs.ACK),
                (this.reconstructor = new nl(t)),
                0 === t.attachments && super.emitReserved("decoded", t))
              : super.emitReserved("decoded", t);
          } else {
            if (!Ws(e) && !e.base64) throw new Error("Unknown type: " + e);
            if (!this.reconstructor)
              throw new Error(
                "got binary data when not reconstructing a packet"
              );
            (t = this.reconstructor.takeBinaryData(e)),
              t &&
                ((this.reconstructor = null), super.emitReserved("decoded", t));
          }
        }
        decodeString(e) {
          let t = 0;
          const n = { type: Number(e.charAt(0)) };
          if (void 0 === Gs[n.type])
            throw new Error("unknown packet type " + n.type);
          if (n.type === Gs.BINARY_EVENT || n.type === Gs.BINARY_ACK) {
            const r = t + 1;
            for (; "-" !== e.charAt(++t) && t != e.length; );
            const a = e.substring(r, t);
            if (a != Number(a) || "-" !== e.charAt(t))
              throw new Error("Illegal attachments");
            n.attachments = Number(a);
          }
          if ("/" === e.charAt(t + 1)) {
            const r = t + 1;
            for (; ++t; ) {
              if ("," === e.charAt(t)) break;
              if (t === e.length) break;
            }
            n.nsp = e.substring(r, t);
          } else n.nsp = "/";
          const r = e.charAt(t + 1);
          if ("" !== r && Number(r) == r) {
            const r = t + 1;
            for (; ++t; ) {
              const n = e.charAt(t);
              if (null == n || Number(n) != n) {
                --t;
                break;
              }
              if (t === e.length) break;
            }
            n.id = Number(e.substring(r, t + 1));
          }
          if (e.charAt(++t)) {
            const r = this.tryParse(e.substr(t));
            if (!tl.isPayloadValid(n.type, r))
              throw new Error("invalid payload");
            n.data = r;
          }
          return n;
        }
        tryParse(e) {
          try {
            return JSON.parse(e, this.reviver);
          } catch (ml) {
            return !1;
          }
        }
        static isPayloadValid(e, t) {
          switch (e) {
            case Gs.CONNECT:
              return el(t);
            case Gs.DISCONNECT:
              return void 0 === t;
            case Gs.CONNECT_ERROR:
              return "string" === typeof t || el(t);
            case Gs.EVENT:
            case Gs.BINARY_EVENT:
              return (
                Array.isArray(t) &&
                ("number" === typeof t[0] ||
                  ("string" === typeof t[0] && -1 === Js.indexOf(t[0])))
              );
            case Gs.ACK:
            case Gs.BINARY_ACK:
              return Array.isArray(t);
          }
        }
        destroy() {
          this.reconstructor &&
            (this.reconstructor.finishedReconstruction(),
            (this.reconstructor = null));
        }
      }
      class nl {
        constructor(e) {
          (this.packet = e), (this.buffers = []), (this.reconPack = e);
        }
        takeBinaryData(e) {
          if (
            (this.buffers.push(e),
            this.buffers.length === this.reconPack.attachments)
          ) {
            const e = Ks(this.reconPack, this.buffers);
            return this.finishedReconstruction(), e;
          }
          return null;
        }
        finishedReconstruction() {
          (this.reconPack = null), (this.buffers = []);
        }
      }
      function rl(e, t, n) {
        return (
          e.on(t, n),
          function () {
            e.off(t, n);
          }
        );
      }
      const al = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1,
      });
      class ol extends ls {
        constructor(e, t, n) {
          super(),
            (this.connected = !1),
            (this.recovered = !1),
            (this.receiveBuffer = []),
            (this.sendBuffer = []),
            (this._queue = []),
            (this._queueSeq = 0),
            (this.ids = 0),
            (this.acks = {}),
            (this.flags = {}),
            (this.io = e),
            (this.nsp = t),
            n && n.auth && (this.auth = n.auth),
            (this._opts = Object.assign({}, n)),
            this.io._autoConnect && this.open();
        }
        get disconnected() {
          return !this.connected;
        }
        subEvents() {
          if (this.subs) return;
          const e = this.io;
          this.subs = [
            rl(e, "open", this.onopen.bind(this)),
            rl(e, "packet", this.onpacket.bind(this)),
            rl(e, "error", this.onerror.bind(this)),
            rl(e, "close", this.onclose.bind(this)),
          ];
        }
        get active() {
          return !!this.subs;
        }
        connect() {
          return (
            this.connected ||
              (this.subEvents(),
              this.io._reconnecting || this.io.open(),
              "open" === this.io._readyState && this.onopen()),
            this
          );
        }
        open() {
          return this.connect();
        }
        send() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.unshift("message"), this.emit.apply(this, t), this;
        }
        emit(e) {
          if (al.hasOwnProperty(e))
            throw new Error('"' + e.toString() + '" is a reserved event name');
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          if (
            (n.unshift(e),
            this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
          )
            return this._addToQueue(n), this;
          const a = { type: Gs.EVENT, data: n, options: {} };
          if (
            ((a.options.compress = !1 !== this.flags.compress),
            "function" === typeof n[n.length - 1])
          ) {
            const e = this.ids++,
              t = n.pop();
            this._registerAckCallback(e, t), (a.id = e);
          }
          const o =
            this.io.engine &&
            this.io.engine.transport &&
            this.io.engine.transport.writable;
          return (
            (this.flags.volatile && (!o || !this.connected)) ||
              (this.connected
                ? (this.notifyOutgoingListeners(a), this.packet(a))
                : this.sendBuffer.push(a)),
            (this.flags = {}),
            this
          );
        }
        _registerAckCallback(e, t) {
          var n,
            r = this;
          const a =
            null !== (n = this.flags.timeout) && void 0 !== n
              ? n
              : this._opts.ackTimeout;
          if (void 0 === a) return void (this.acks[e] = t);
          const o = this.io.setTimeoutFn(() => {
              delete this.acks[e];
              for (let t = 0; t < this.sendBuffer.length; t++)
                this.sendBuffer[t].id === e && this.sendBuffer.splice(t, 1);
              t.call(this, new Error("operation has timed out"));
            }, a),
            i = function () {
              r.io.clearTimeoutFn(o);
              for (
                var e = arguments.length, n = new Array(e), a = 0;
                a < e;
                a++
              )
                n[a] = arguments[a];
              t.apply(r, n);
            };
          (i.withError = !0), (this.acks[e] = i);
        }
        emitWithAck(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          return new Promise((t, r) => {
            const a = (e, n) => (e ? r(e) : t(n));
            (a.withError = !0), n.push(a), this.emit(e, ...n);
          });
        }
        _addToQueue(e) {
          var t = this;
          let n;
          "function" === typeof e[e.length - 1] && (n = e.pop());
          const r = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: e,
            flags: Object.assign({ fromQueue: !0 }, this.flags),
          };
          e.push(function (e) {
            if (r !== t._queue[0]) return;
            if (null !== e)
              r.tryCount > t._opts.retries && (t._queue.shift(), n && n(e));
            else if ((t._queue.shift(), n)) {
              for (
                var a = arguments.length,
                  o = new Array(a > 1 ? a - 1 : 0),
                  i = 1;
                i < a;
                i++
              )
                o[i - 1] = arguments[i];
              n(null, ...o);
            }
            return (r.pending = !1), t._drainQueue();
          }),
            this._queue.push(r),
            this._drainQueue();
        }
        _drainQueue() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (!this.connected || 0 === this._queue.length) return;
          const t = this._queue[0];
          (t.pending && !e) ||
            ((t.pending = !0),
            t.tryCount++,
            (this.flags = t.flags),
            this.emit.apply(this, t.args));
        }
        packet(e) {
          (e.nsp = this.nsp), this.io._packet(e);
        }
        onopen() {
          "function" == typeof this.auth
            ? this.auth((e) => {
                this._sendConnectPacket(e);
              })
            : this._sendConnectPacket(this.auth);
        }
        _sendConnectPacket(e) {
          this.packet({
            type: Gs.CONNECT,
            data: this._pid
              ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e)
              : e,
          });
        }
        onerror(e) {
          this.connected || this.emitReserved("connect_error", e);
        }
        onclose(e, t) {
          (this.connected = !1),
            delete this.id,
            this.emitReserved("disconnect", e, t),
            this._clearAcks();
        }
        _clearAcks() {
          Object.keys(this.acks).forEach((e) => {
            if (!this.sendBuffer.some((t) => String(t.id) === e)) {
              const t = this.acks[e];
              delete this.acks[e],
                t.withError &&
                  t.call(this, new Error("socket has been disconnected"));
            }
          });
        }
        onpacket(e) {
          if (e.nsp === this.nsp)
            switch (e.type) {
              case Gs.CONNECT:
                e.data && e.data.sid
                  ? this.onconnect(e.data.sid, e.data.pid)
                  : this.emitReserved(
                      "connect_error",
                      new Error(
                        "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                      )
                    );
                break;
              case Gs.EVENT:
              case Gs.BINARY_EVENT:
                this.onevent(e);
                break;
              case Gs.ACK:
              case Gs.BINARY_ACK:
                this.onack(e);
                break;
              case Gs.DISCONNECT:
                this.ondisconnect();
                break;
              case Gs.CONNECT_ERROR:
                this.destroy();
                const t = new Error(e.data.message);
                (t.data = e.data.data), this.emitReserved("connect_error", t);
            }
        }
        onevent(e) {
          const t = e.data || [];
          null != e.id && t.push(this.ack(e.id)),
            this.connected
              ? this.emitEvent(t)
              : this.receiveBuffer.push(Object.freeze(t));
        }
        emitEvent(e) {
          if (this._anyListeners && this._anyListeners.length) {
            const t = this._anyListeners.slice();
            for (const n of t) n.apply(this, e);
          }
          super.emit.apply(this, e),
            this._pid &&
              e.length &&
              "string" === typeof e[e.length - 1] &&
              (this._lastOffset = e[e.length - 1]);
        }
        ack(e) {
          const t = this;
          let n = !1;
          return function () {
            if (!n) {
              n = !0;
              for (
                var r = arguments.length, a = new Array(r), o = 0;
                o < r;
                o++
              )
                a[o] = arguments[o];
              t.packet({ type: Gs.ACK, id: e, data: a });
            }
          };
        }
        onack(e) {
          const t = this.acks[e.id];
          "function" === typeof t &&
            (delete this.acks[e.id],
            t.withError && e.data.unshift(null),
            t.apply(this, e.data));
        }
        onconnect(e, t) {
          (this.id = e),
            (this.recovered = t && this._pid === t),
            (this._pid = t),
            (this.connected = !0),
            this.emitBuffered(),
            this.emitReserved("connect"),
            this._drainQueue(!0);
        }
        emitBuffered() {
          this.receiveBuffer.forEach((e) => this.emitEvent(e)),
            (this.receiveBuffer = []),
            this.sendBuffer.forEach((e) => {
              this.notifyOutgoingListeners(e), this.packet(e);
            }),
            (this.sendBuffer = []);
        }
        ondisconnect() {
          this.destroy(), this.onclose("io server disconnect");
        }
        destroy() {
          this.subs && (this.subs.forEach((e) => e()), (this.subs = void 0)),
            this.io._destroy(this);
        }
        disconnect() {
          return (
            this.connected && this.packet({ type: Gs.DISCONNECT }),
            this.destroy(),
            this.connected && this.onclose("io client disconnect"),
            this
          );
        }
        close() {
          return this.disconnect();
        }
        compress(e) {
          return (this.flags.compress = e), this;
        }
        get volatile() {
          return (this.flags.volatile = !0), this;
        }
        timeout(e) {
          return (this.flags.timeout = e), this;
        }
        onAny(e) {
          return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.push(e),
            this
          );
        }
        prependAny(e) {
          return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.unshift(e),
            this
          );
        }
        offAny(e) {
          if (!this._anyListeners) return this;
          if (e) {
            const t = this._anyListeners;
            for (let n = 0; n < t.length; n++)
              if (e === t[n]) return t.splice(n, 1), this;
          } else this._anyListeners = [];
          return this;
        }
        listenersAny() {
          return this._anyListeners || [];
        }
        onAnyOutgoing(e) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.push(e),
            this
          );
        }
        prependAnyOutgoing(e) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.unshift(e),
            this
          );
        }
        offAnyOutgoing(e) {
          if (!this._anyOutgoingListeners) return this;
          if (e) {
            const t = this._anyOutgoingListeners;
            for (let n = 0; n < t.length; n++)
              if (e === t[n]) return t.splice(n, 1), this;
          } else this._anyOutgoingListeners = [];
          return this;
        }
        listenersAnyOutgoing() {
          return this._anyOutgoingListeners || [];
        }
        notifyOutgoingListeners(e) {
          if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const t = this._anyOutgoingListeners.slice();
            for (const n of t) n.apply(this, e.data);
          }
        }
      }
      function il(e) {
        (e = e || {}),
          (this.ms = e.min || 100),
          (this.max = e.max || 1e4),
          (this.factor = e.factor || 2),
          (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
          (this.attempts = 0);
      }
      (il.prototype.duration = function () {
        var e = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var t = Math.random(),
            n = Math.floor(t * this.jitter * e);
          e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n;
        }
        return 0 | Math.min(e, this.max);
      }),
        (il.prototype.reset = function () {
          this.attempts = 0;
        }),
        (il.prototype.setMin = function (e) {
          this.ms = e;
        }),
        (il.prototype.setMax = function (e) {
          this.max = e;
        }),
        (il.prototype.setJitter = function (e) {
          this.jitter = e;
        });
      class sl extends ls {
        constructor(e, n) {
          var r;
          super(),
            (this.nsps = {}),
            (this.subs = []),
            e && "object" === typeof e && ((n = e), (e = void 0)),
            ((n = n || {}).path = n.path || "/socket.io"),
            (this.opts = n),
            ps(this, n),
            this.reconnection(!1 !== n.reconnection),
            this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(n.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
            this.randomizationFactor(
              null !== (r = n.randomizationFactor) && void 0 !== r ? r : 0.5
            ),
            (this.backoff = new il({
              min: this.reconnectionDelay(),
              max: this.reconnectionDelayMax(),
              jitter: this.randomizationFactor(),
            })),
            this.timeout(null == n.timeout ? 2e4 : n.timeout),
            (this._readyState = "closed"),
            (this.uri = e);
          const a = n.parser || t;
          (this.encoder = new a.Encoder()),
            (this.decoder = new a.Decoder()),
            (this._autoConnect = !1 !== n.autoConnect),
            this._autoConnect && this.open();
        }
        reconnection(e) {
          return arguments.length
            ? ((this._reconnection = !!e), this)
            : this._reconnection;
        }
        reconnectionAttempts(e) {
          return void 0 === e
            ? this._reconnectionAttempts
            : ((this._reconnectionAttempts = e), this);
        }
        reconnectionDelay(e) {
          var t;
          return void 0 === e
            ? this._reconnectionDelay
            : ((this._reconnectionDelay = e),
              null === (t = this.backoff) || void 0 === t || t.setMin(e),
              this);
        }
        randomizationFactor(e) {
          var t;
          return void 0 === e
            ? this._randomizationFactor
            : ((this._randomizationFactor = e),
              null === (t = this.backoff) || void 0 === t || t.setJitter(e),
              this);
        }
        reconnectionDelayMax(e) {
          var t;
          return void 0 === e
            ? this._reconnectionDelayMax
            : ((this._reconnectionDelayMax = e),
              null === (t = this.backoff) || void 0 === t || t.setMax(e),
              this);
        }
        timeout(e) {
          return arguments.length ? ((this._timeout = e), this) : this._timeout;
        }
        maybeReconnectOnOpen() {
          !this._reconnecting &&
            this._reconnection &&
            0 === this.backoff.attempts &&
            this.reconnect();
        }
        open(e) {
          if (~this._readyState.indexOf("open")) return this;
          this.engine = new Ms(this.uri, this.opts);
          const t = this.engine,
            n = this;
          (this._readyState = "opening"), (this.skipReconnect = !1);
          const r = rl(t, "open", function () {
              n.onopen(), e && e();
            }),
            a = (t) => {
              this.cleanup(),
                (this._readyState = "closed"),
                this.emitReserved("error", t),
                e ? e(t) : this.maybeReconnectOnOpen();
            },
            o = rl(t, "error", a);
          if (!1 !== this._timeout) {
            const e = this._timeout,
              n = this.setTimeoutFn(() => {
                r(), a(new Error("timeout")), t.close();
              }, e);
            this.opts.autoUnref && n.unref(),
              this.subs.push(() => {
                this.clearTimeoutFn(n);
              });
          }
          return this.subs.push(r), this.subs.push(o), this;
        }
        connect(e) {
          return this.open(e);
        }
        onopen() {
          this.cleanup(),
            (this._readyState = "open"),
            this.emitReserved("open");
          const e = this.engine;
          this.subs.push(
            rl(e, "ping", this.onping.bind(this)),
            rl(e, "data", this.ondata.bind(this)),
            rl(e, "error", this.onerror.bind(this)),
            rl(e, "close", this.onclose.bind(this)),
            rl(this.decoder, "decoded", this.ondecoded.bind(this))
          );
        }
        onping() {
          this.emitReserved("ping");
        }
        ondata(e) {
          try {
            this.decoder.add(e);
          } catch (ml) {
            this.onclose("parse error", ml);
          }
        }
        ondecoded(e) {
          Rs(() => {
            this.emitReserved("packet", e);
          }, this.setTimeoutFn);
        }
        onerror(e) {
          this.emitReserved("error", e);
        }
        socket(e, t) {
          let n = this.nsps[e];
          return (
            n
              ? this._autoConnect && !n.active && n.connect()
              : ((n = new ol(this, e, t)), (this.nsps[e] = n)),
            n
          );
        }
        _destroy(e) {
          const t = Object.keys(this.nsps);
          for (const n of t) {
            if (this.nsps[n].active) return;
          }
          this._close();
        }
        _packet(e) {
          const t = this.encoder.encode(e);
          for (let n = 0; n < t.length; n++) this.engine.write(t[n], e.options);
        }
        cleanup() {
          this.subs.forEach((e) => e()),
            (this.subs.length = 0),
            this.decoder.destroy();
        }
        _close() {
          (this.skipReconnect = !0),
            (this._reconnecting = !1),
            this.onclose("forced close"),
            this.engine && this.engine.close();
        }
        disconnect() {
          return this._close();
        }
        onclose(e, t) {
          this.cleanup(),
            this.backoff.reset(),
            (this._readyState = "closed"),
            this.emitReserved("close", e, t),
            this._reconnection && !this.skipReconnect && this.reconnect();
        }
        reconnect() {
          if (this._reconnecting || this.skipReconnect) return this;
          const e = this;
          if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
              this.emitReserved("reconnect_failed"),
              (this._reconnecting = !1);
          else {
            const t = this.backoff.duration();
            this._reconnecting = !0;
            const n = this.setTimeoutFn(() => {
              e.skipReconnect ||
                (this.emitReserved("reconnect_attempt", e.backoff.attempts),
                e.skipReconnect ||
                  e.open((t) => {
                    t
                      ? ((e._reconnecting = !1),
                        e.reconnect(),
                        this.emitReserved("reconnect_error", t))
                      : e.onreconnect();
                  }));
            }, t);
            this.opts.autoUnref && n.unref(),
              this.subs.push(() => {
                this.clearTimeoutFn(n);
              });
          }
        }
        onreconnect() {
          const e = this.backoff.attempts;
          (this._reconnecting = !1),
            this.backoff.reset(),
            this.emitReserved("reconnect", e);
        }
      }
      const ll = {};
      function cl(e, t) {
        "object" === typeof e && ((t = e), (e = void 0));
        const n = (function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              n = arguments.length > 2 ? arguments[2] : void 0,
              r = e;
            (n = n || ("undefined" !== typeof location && location)),
              null == e && (e = n.protocol + "//" + n.host),
              "string" === typeof e &&
                ("/" === e.charAt(0) &&
                  (e = "/" === e.charAt(1) ? n.protocol + e : n.host + e),
                /^(https?|wss?):\/\//.test(e) ||
                  (e =
                    "undefined" !== typeof n
                      ? n.protocol + "//" + e
                      : "https://" + e),
                (r = Ds(e))),
              r.port ||
                (/^(http|ws)$/.test(r.protocol)
                  ? (r.port = "80")
                  : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
              (r.path = r.path || "/");
            const a = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
            return (
              (r.id = r.protocol + "://" + a + ":" + r.port + t),
              (r.href =
                r.protocol +
                "://" +
                a +
                (n && n.port === r.port ? "" : ":" + r.port)),
              r
            );
          })(e, (t = t || {}).path || "/socket.io"),
          r = n.source,
          a = n.id,
          o = n.path,
          i = ll[a] && o in ll[a].nsps;
        let s;
        return (
          t.forceNew || t["force new connection"] || !1 === t.multiplex || i
            ? (s = new sl(r, t))
            : (ll[a] || (ll[a] = new sl(r, t)), (s = ll[a])),
          n.query && !t.query && (t.query = n.queryKey),
          s.socket(n.path, t)
        );
      }
      Object.assign(cl, { Manager: sl, Socket: ol, io: cl, connect: cl });
      const ul = cl("https://job-lxhp.onrender.com"),
        fl = () => {
          const [e, t] = (0, a.useState)(null),
            [n, r] = (0, a.useState)([]),
            [o, i] = (0, a.useState)(""),
            [s, l] = (0, a.useState)(""),
            [c, u] = (0, a.useState)(null),
            f = (0, a.useRef)(null);
          (0, a.useEffect)(
            () => (
              (async () => {
                try {
                  const e = await zi.get(
                    "".concat(window.location.origin, "/myprofile"),
                    { headers: { "x-token": localStorage.getItem("token") } }
                  );
                  l(e.data);
                } catch (c) {
                  console.error(c), u("Error fetching user data");
                }
              })(),
              (async () => {
                try {
                  const e = await zi.get(
                    "https://job-lxhp.onrender.com/getmsg",
                    { headers: { "x-token": localStorage.getItem("token") } }
                  );
                  r(e.data);
                } catch (c) {
                  console.error(c), u("Error fetching messages");
                }
              })(),
              ul.on("message", (e) => {
                r(e);
              }),
              () => {
                ul.off("message");
              }
            ),
            []
          );
          const d = async (e) => {
            if ((e.preventDefault(), o.trim()))
              try {
                await zi.post(
                  "https://job-lxhp.onrender.com/addmsg",
                  { text: o, username: s.fullname },
                  { headers: { "x-token": localStorage.getItem("token") } }
                ),
                  i(""),
                  u(null);
              } catch (c) {
                console.error("Error sending message:", c),
                  u("Error sending message");
              }
            else u("Please enter a message");
          };
          return (0, xa.jsxs)("div", {
            children: [
              (0, xa.jsxs)("nav", {
                className: "navbar bg-dark",
                children: [
                  (0, xa.jsx)("h1", {
                    children: (0, xa.jsxs)(_e, {
                      to: "/",
                      children: [
                        (0, xa.jsx)("i", { className: "fas fa-code" }),
                        "Independent Corporate",
                      ],
                    }),
                  }),
                  (0, xa.jsxs)("ul", {
                    children: [
                      (0, xa.jsx)("li", {
                        children: (0, xa.jsx)(_e, {
                          to: "/myprofile",
                          children: "Myprofile",
                        }),
                      }),
                      (0, xa.jsx)("li", {
                        children: (0, xa.jsx)(_e, {
                          to: "/login1",
                          children: "Logout",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, xa.jsxs)("div", {
                className: "chat-card",
                children: [
                  (0, xa.jsx)("div", {
                    className: "chat-header",
                    children: (0, xa.jsxs)("h1", {
                      children: ["Welcome, ", s.fullname, "!"],
                    }),
                  }),
                  (0, xa.jsx)("div", {
                    className: "chat-body",
                    children: (0, xa.jsx)("div", {
                      className: "chat-container",
                      children: n.map((e, t) =>
                        (0, xa.jsxs)(
                          "div",
                          {
                            className: "message",
                            children: [
                              (0, xa.jsxs)("span", {
                                className: "sender",
                                children: [e.fullname, ":"],
                              }),
                              (0, xa.jsx)("span", {
                                className: "content",
                                children: e.text,
                              }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                  }),
                  (0, xa.jsx)("div", {
                    className: "chat-footer",
                    children: (0, xa.jsxs)("div", {
                      className: "input-container",
                      children: [
                        (0, xa.jsxs)("form", {
                          onSubmit: d,
                          children: [
                            (0, xa.jsx)("input", {
                              type: "text",
                              placeholder: "Type your message...",
                              value: o,
                              onChange: (e) => {
                                i(e.target.value);
                              },
                              onKeyPress: (e) => {
                                "Enter" === e.key && d(e);
                              },
                              ref: f,
                            }),
                            (0, xa.jsx)("button", {
                              type: "submit",
                              children: (0, xa.jsx)(la, { icon: wa }),
                            }),
                          ],
                        }),
                        (0, xa.jsxs)("button", {
                          children: [
                            (0, xa.jsx)("label", {
                              htmlFor: "attachment",
                              children: (0, xa.jsx)(la, { icon: ya }),
                            }),
                            (0, xa.jsx)("input", {
                              id: "attachment",
                              type: "file",
                              style: { display: "none" },
                              onChange: (e) => console.log(e.target.files[0]),
                            }),
                          ],
                        }),
                        (0, xa.jsx)("button", {
                          onClick: () => {
                            console.log("Emoji button clicked");
                          },
                          children: (0, xa.jsx)(la, { icon: ba }),
                        }),
                      ],
                    }),
                  }),
                  c && (0, xa.jsx)("div", { className: "error", children: c }),
                ],
              }),
            ],
          });
        },
        dl = () => {
          const { id: e } = (function () {
              let { matches: e } = a.useContext(X),
                t = e[e.length - 1];
              return t ? t.params : {};
            })(),
            [t, n] = (0, a.useState)({}),
            [r, o] = (0, a.useState)([]),
            [i, s] = (0, a.useState)(null),
            [l, c] = (0, a.useState)(null);
          (0, a.useEffect)(() => {
            zi
              .get("".concat(window.location.origin, "/profile/").concat(e), {
                headers: { "x-token": localStorage.getItem("token") },
              })
              .then((e) => {
                n(e.data);
              })
              .catch((e) => console.error("Error fetching profile:", e)),
              zi
                .get("".concat(window.location.origin, "/reviews/").concat(e), {
                  headers: { "x-token": localStorage.getItem("token") },
                })
                .then((e) => {
                  o(e.data);
                })
                .catch((e) => console.error("Error fetching reviews:", e));
          }, [e]);
          return (0, xa.jsxs)("div", {
            children: [
              (0, xa.jsxs)("nav", {
                className: "navbar bg-dark",
                children: [
                  (0, xa.jsx)("h1", {
                    children: (0, xa.jsxs)(_e, {
                      to: "/",
                      children: [
                        (0, xa.jsx)("i", { className: "fas fa-code" }),
                        " Independent Corporate",
                      ],
                    }),
                  }),
                  (0, xa.jsxs)("ul", {
                    children: [
                      (0, xa.jsx)("li", {
                        children: (0, xa.jsx)(_e, {
                          to: "/myprofile",
                          children: "My Profile",
                        }),
                      }),
                      (0, xa.jsx)("li", {
                        children: (0, xa.jsx)(_e, {
                          to: "/login1",
                          children: "Logout",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, xa.jsxs)("section", {
                className: "container",
                children: [
                  (0, xa.jsx)(_e, {
                    to: "/myprofile",
                    className: "btn btn-light",
                    children: "Back to profiles",
                  }),
                  (0, xa.jsxs)("div", {
                    className: "profile-grid my-1",
                    children: [
                      (0, xa.jsxs)("div", {
                        className: "profile-top bg-primary p-2",
                        children: [
                          (0, xa.jsx)("img", {
                            className: "round-img",
                            src: "https://e7.pngegg.com/pngimages/505/761/png-clipart-login-computer-icons-avatar-icon-monochrome-black.png",
                            alt: "".concat(t.fullname, "'s profile"),
                          }),
                          (0, xa.jsx)("h1", {
                            className: "large",
                            children: t.fullname,
                          }),
                          (0, xa.jsx)("p", {
                            className: "lead",
                            children: t.email,
                          }),
                          (0, xa.jsx)("p", { children: t.mobile }),
                        ],
                      }),
                      (0, xa.jsxs)("div", {
                        className: "profile-github",
                        children: [
                          (0, xa.jsxs)("h2", {
                            className: "text-primary my-1",
                            children: [
                              (0, xa.jsx)("i", { className: "fab fa-github" }),
                              "Reviews and Ratings",
                            ],
                          }),
                          (0, xa.jsx)("div", {
                            className: "repo bg-white p-1 my-1",
                            children: r.map((e) =>
                              (0, xa.jsxs)(
                                "div",
                                {
                                  children: [
                                    (0, xa.jsx)("h4", {
                                      children: e.taskprovider,
                                    }),
                                    (0, xa.jsxs)("p", {
                                      children: [e.rating, "/5"],
                                    }),
                                  ],
                                },
                                e._id
                              )
                            ),
                          }),
                          (0, xa.jsx)("div", {
                            className: "repo bg-white p-1 my-1",
                            children: (0, xa.jsxs)("div", {
                              children: [
                                (0, xa.jsx)("h4", {
                                  children: "Enter your reviews",
                                }),
                                (0, xa.jsxs)("form", {
                                  className: "form",
                                  onSubmit: async (t) => {
                                    t.preventDefault();
                                    try {
                                      const t = await zi.get(
                                        "${window.location.origin}/myprofile",
                                        {
                                          headers: {
                                            "x-token":
                                              localStorage.getItem("token"),
                                          },
                                        }
                                      );
                                      c(t.data.fullname);
                                      const n = {
                                        taskprovider: t.data.fullname,
                                        taskworker: e,
                                        rating: i,
                                      };
                                      await zi.post(
                                        "${window.location.origin}/reviews",
                                        n,
                                        {
                                          headers: {
                                            "x-token":
                                              localStorage.getItem("token"),
                                          },
                                        }
                                      ),
                                        o([...r, n]);
                                    } catch (gl) {
                                      console.error(
                                        "Error submitting review:",
                                        gl
                                      ),
                                        alert(
                                          "An error occurred while submitting your review. Please try again later."
                                        );
                                    }
                                  },
                                  children: [
                                    (0, xa.jsx)("div", {
                                      className: "form-group",
                                      children: (0, xa.jsx)("input", {
                                        type: "text",
                                        placeholder:
                                          "Enter Your rating out of 5",
                                        name: "rating",
                                        value: i || "",
                                        onChange: (e) => s(e.target.value),
                                        required: !0,
                                      }),
                                    }),
                                    (0, xa.jsx)("input", {
                                      type: "submit",
                                      className: "btn btn-primary",
                                      value: "Add Rating",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        pl = () =>
          (0, xa.jsx)(Ce, {
            children: (0, xa.jsxs)(be, {
              children: [
                (0, xa.jsx)(ye, { path: "/", element: (0, xa.jsx)(ka, {}) }),
                (0, xa.jsx)(ye, {
                  path: "/login1",
                  element: (0, xa.jsx)(Fi, {}),
                }),
                (0, xa.jsx)(ye, {
                  path: "/register1",
                  element: (0, xa.jsx)(Di, {}),
                }),
                (0, xa.jsx)(ye, {
                  path: "/dashboard",
                  element: (0, xa.jsx)(Ii, {}),
                }),
                (0, xa.jsx)(ye, {
                  path: "/myprofile",
                  element: (0, xa.jsx)(Ui, {}),
                }),
                (0, xa.jsx)(ye, {
                  path: "/Chat",
                  element: (0, xa.jsx)(fl, {}),
                }),
                (0, xa.jsx)(ye, {
                  path: "/indprofile/:id",
                  element: (0, xa.jsx)(dl, {}),
                }),
              ],
            }),
          }),
        hl = (e) => {
          e &&
            e instanceof Function &&
            n
              .e(453)
              .then(n.bind(n, 453))
              .then((t) => {
                let {
                  getCLS: n,
                  getFID: r,
                  getFCP: a,
                  getLCP: o,
                  getTTFB: i,
                } = t;
                n(e), r(e), a(e), o(e), i(e);
              });
        };
      i
        .createRoot(document.getElementById("root"))
        .render((0, xa.jsx)(a.StrictMode, { children: (0, xa.jsx)(pl, {}) })),
        hl();
    })();
})();
//# sourceMappingURL=main.ae2bc214.js.map
