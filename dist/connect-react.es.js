var jd = (e) => {
  throw TypeError(e);
};
var wl = (e, t, r) => t.has(e) || jd("Cannot " + r);
var O = (e, t, r) => (wl(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Ce = (e, t, r) => t.has(e) ? jd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), ae = (e, t, r, u) => (wl(e, t, "write to private field"), u ? u.call(e, r) : t.set(e, r), r), ze = (e, t, r) => (wl(e, t, "access private method"), r);
var gs = (e, t, r, u) => ({
  set _(o) {
    ae(e, t, o, r);
  },
  get _() {
    return O(e, t, u);
  }
});
import { jsxs as Mn, jsx as re, Fragment as Yu } from "react/jsx-runtime";
import * as Oe from "react";
import { useState as $e, useEffect as an, createContext as eo, useContext as su, useId as Cc, useMemo as ln, useCallback as Mt, useLayoutEffect as V1, useRef as xr, Component as Fp, Fragment as Hl, forwardRef as Rp, memo as to, Suspense as W1 } from "react";
import { jsx as ge, css as Pp, keyframes as X1 } from "@emotion/react";
import { createPortal as H1 } from "react-dom";
function z1(e, t) {
  const r = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (r.padRight ? " " : "") + "," + (r.padLeft === !1 ? "" : " ")
  ).trim();
}
const Z1 = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Y1 = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, J1 = {};
function Qd(e, t) {
  return (J1.jsx ? Y1 : Z1).test(e);
}
const U1 = /[ \t\n\f\r]/g;
function j1(e) {
  return typeof e == "object" ? e.type === "text" ? qd(e.value) : !1 : qd(e);
}
function qd(e) {
  return e.replace(U1, "") === "";
}
class no {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(t, r, u) {
    this.normal = r, this.property = t, u && (this.space = u);
  }
}
no.prototype.normal = {};
no.prototype.property = {};
no.prototype.space = void 0;
function Op(e, t) {
  const r = {}, u = {};
  for (const o of e)
    Object.assign(r, o.property), Object.assign(u, o.normal);
  return new no(r, u, t);
}
function zl(e) {
  return e.toLowerCase();
}
class fn {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(t, r) {
    this.attribute = r, this.property = t;
  }
}
fn.prototype.attribute = "";
fn.prototype.booleanish = !1;
fn.prototype.boolean = !1;
fn.prototype.commaOrSpaceSeparated = !1;
fn.prototype.commaSeparated = !1;
fn.prototype.defined = !1;
fn.prototype.mustUseProperty = !1;
fn.prototype.number = !1;
fn.prototype.overloadedBoolean = !1;
fn.prototype.property = "";
fn.prototype.spaceSeparated = !1;
fn.prototype.space = void 0;
let Q1 = 0;
const Be = vi(), Rt = vi(), _p = vi(), $ = vi(), lt = vi(), zi = vi(), Cn = vi();
function vi() {
  return 2 ** ++Q1;
}
const Zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: Be,
  booleanish: Rt,
  commaOrSpaceSeparated: Cn,
  commaSeparated: zi,
  number: $,
  overloadedBoolean: _p,
  spaceSeparated: lt
}, Symbol.toStringTag, { value: "Module" })), Sl = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Zl)
);
class xc extends fn {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(t, r, u, o) {
    let a = -1;
    if (super(t, r), $d(this, "space", o), typeof u == "number")
      for (; ++a < Sl.length; ) {
        const l = Sl[a];
        $d(this, Sl[a], (u & Zl[l]) === Zl[l]);
      }
  }
}
xc.prototype.defined = !0;
function $d(e, t, r) {
  r && (e[t] = r);
}
function au(e) {
  const t = {}, r = {};
  for (const [u, o] of Object.entries(e.properties)) {
    const a = new xc(
      u,
      e.transform(e.attributes || {}, u),
      o,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(u) && (a.mustUseProperty = !0), t[u] = a, r[zl(u)] = u, r[zl(a.attribute)] = u;
  }
  return new no(t, r, e.space);
}
const Tp = au({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Rt,
    ariaAutoComplete: null,
    ariaBusy: Rt,
    ariaChecked: Rt,
    ariaColCount: $,
    ariaColIndex: $,
    ariaColSpan: $,
    ariaControls: lt,
    ariaCurrent: null,
    ariaDescribedBy: lt,
    ariaDetails: null,
    ariaDisabled: Rt,
    ariaDropEffect: lt,
    ariaErrorMessage: null,
    ariaExpanded: Rt,
    ariaFlowTo: lt,
    ariaGrabbed: Rt,
    ariaHasPopup: null,
    ariaHidden: Rt,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: lt,
    ariaLevel: $,
    ariaLive: null,
    ariaModal: Rt,
    ariaMultiLine: Rt,
    ariaMultiSelectable: Rt,
    ariaOrientation: null,
    ariaOwns: lt,
    ariaPlaceholder: null,
    ariaPosInSet: $,
    ariaPressed: Rt,
    ariaReadOnly: Rt,
    ariaRelevant: null,
    ariaRequired: Rt,
    ariaRoleDescription: lt,
    ariaRowCount: $,
    ariaRowIndex: $,
    ariaRowSpan: $,
    ariaSelected: Rt,
    ariaSetSize: $,
    ariaSort: null,
    ariaValueMax: $,
    ariaValueMin: $,
    ariaValueNow: $,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function Bp(e, t) {
  return t in e ? e[t] : t;
}
function Gp(e, t) {
  return Bp(e, t.toLowerCase());
}
const q1 = au({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: zi,
    acceptCharset: lt,
    accessKey: lt,
    action: null,
    allow: null,
    allowFullScreen: Be,
    allowPaymentRequest: Be,
    allowUserMedia: Be,
    alt: null,
    as: null,
    async: Be,
    autoCapitalize: null,
    autoComplete: lt,
    autoFocus: Be,
    autoPlay: Be,
    blocking: lt,
    capture: null,
    charSet: null,
    checked: Be,
    cite: null,
    className: lt,
    cols: $,
    colSpan: null,
    content: null,
    contentEditable: Rt,
    controls: Be,
    controlsList: lt,
    coords: $ | zi,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: Be,
    defer: Be,
    dir: null,
    dirName: null,
    disabled: Be,
    download: _p,
    draggable: Rt,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: Be,
    formTarget: null,
    headers: lt,
    height: $,
    hidden: Be,
    high: $,
    href: null,
    hrefLang: null,
    htmlFor: lt,
    httpEquiv: lt,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: Be,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: Be,
    itemId: null,
    itemProp: lt,
    itemRef: lt,
    itemScope: Be,
    itemType: lt,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: Be,
    low: $,
    manifest: null,
    max: null,
    maxLength: $,
    media: null,
    method: null,
    min: null,
    minLength: $,
    multiple: Be,
    muted: Be,
    name: null,
    nonce: null,
    noModule: Be,
    noValidate: Be,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: Be,
    optimum: $,
    pattern: null,
    ping: lt,
    placeholder: null,
    playsInline: Be,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: Be,
    referrerPolicy: null,
    rel: lt,
    required: Be,
    reversed: Be,
    rows: $,
    rowSpan: $,
    sandbox: lt,
    scope: null,
    scoped: Be,
    seamless: Be,
    selected: Be,
    shadowRootClonable: Be,
    shadowRootDelegatesFocus: Be,
    shadowRootMode: null,
    shape: null,
    size: $,
    sizes: null,
    slot: null,
    span: $,
    spellCheck: Rt,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: $,
    step: null,
    style: null,
    tabIndex: $,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: Be,
    useMap: null,
    value: Rt,
    width: $,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: lt,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: $,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: $,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: Be,
    // Lists. Use CSS to reduce space between items instead
    declare: Be,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: $,
    // `<img>` and `<object>`
    leftMargin: $,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: $,
    // `<body>`
    marginWidth: $,
    // `<body>`
    noResize: Be,
    // `<frame>`
    noHref: Be,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: Be,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: Be,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: $,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: Rt,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: $,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: $,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: Be,
    disableRemotePlayback: Be,
    prefix: null,
    property: null,
    results: $,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Gp
}), $1 = au({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: Cn,
    accentHeight: $,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: $,
    amplitude: $,
    arabicForm: null,
    ascent: $,
    attributeName: null,
    attributeType: null,
    azimuth: $,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: $,
    by: null,
    calcMode: null,
    capHeight: $,
    className: lt,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: $,
    diffuseConstant: $,
    direction: null,
    display: null,
    dur: null,
    divisor: $,
    dominantBaseline: null,
    download: Be,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: $,
    enableBackground: null,
    end: null,
    event: null,
    exponent: $,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: $,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: zi,
    g2: zi,
    glyphName: zi,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: $,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: $,
    horizOriginX: $,
    horizOriginY: $,
    id: null,
    ideographic: $,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: $,
    k: $,
    k1: $,
    k2: $,
    k3: $,
    k4: $,
    kernelMatrix: Cn,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: $,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: $,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: $,
    overlineThickness: $,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: $,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: lt,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: $,
    pointsAtY: $,
    pointsAtZ: $,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Cn,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Cn,
    rev: Cn,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Cn,
    requiredFeatures: Cn,
    requiredFonts: Cn,
    requiredFormats: Cn,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: $,
    specularExponent: $,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: $,
    strikethroughThickness: $,
    string: null,
    stroke: null,
    strokeDashArray: Cn,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: $,
    strokeOpacity: $,
    strokeWidth: null,
    style: null,
    surfaceScale: $,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Cn,
    tabIndex: $,
    tableValues: null,
    target: null,
    targetX: $,
    targetY: $,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Cn,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: $,
    underlineThickness: $,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: $,
    values: null,
    vAlphabetic: $,
    vMathematical: $,
    vectorEffect: null,
    vHanging: $,
    vIdeographic: $,
    version: null,
    vertAdvY: $,
    vertOriginX: $,
    vertOriginY: $,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: $,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Bp
}), kp = au({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(e, t) {
    return "xlink:" + t.slice(5).toLowerCase();
  }
}), Lp = au({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Gp
}), Dp = au({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), K1 = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, eC = /[A-Z]/g, Kd = /-[a-z]/g, tC = /^data[-\w.:]+$/i;
function nC(e, t) {
  const r = zl(t);
  let u = t, o = fn;
  if (r in e.normal)
    return e.property[e.normal[r]];
  if (r.length > 4 && r.slice(0, 4) === "data" && tC.test(t)) {
    if (t.charAt(4) === "-") {
      const a = t.slice(5).replace(Kd, iC);
      u = "data" + a.charAt(0).toUpperCase() + a.slice(1);
    } else {
      const a = t.slice(4);
      if (!Kd.test(a)) {
        let l = a.replace(eC, rC);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    o = xc;
  }
  return new o(u, t);
}
function rC(e) {
  return "-" + e.toLowerCase();
}
function iC(e) {
  return e.charAt(1).toUpperCase();
}
const uC = Op([Tp, q1, kp, Lp, Dp], "html"), Ac = Op([Tp, $1, kp, Lp, Dp], "svg");
function oC(e) {
  return e.join(" ").trim();
}
var xn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ws(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wc = {}, eh = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, sC = /\n/g, aC = /^\s*/, lC = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, cC = /^:\s*/, fC = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, dC = /^[;\s]*/, hC = /^\s+|\s+$/g, pC = `
`, th = "/", nh = "*", ai = "", gC = "comment", mC = "declaration", bC = function(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var r = 1, u = 1;
  function o(S) {
    var A = S.match(sC);
    A && (r += A.length);
    var F = S.lastIndexOf(pC);
    u = ~F ? S.length - F : u + S.length;
  }
  function a() {
    var S = { line: r, column: u };
    return function(A) {
      return A.position = new l(S), h(), A;
    };
  }
  function l(S) {
    this.start = S, this.end = { line: r, column: u }, this.source = t.source;
  }
  l.prototype.content = e;
  function c(S) {
    var A = new Error(
      t.source + ":" + r + ":" + u + ": " + S
    );
    if (A.reason = S, A.filename = t.source, A.line = r, A.column = u, A.source = e, !t.silent) throw A;
  }
  function f(S) {
    var A = S.exec(e);
    if (A) {
      var F = A[0];
      return o(F), e = e.slice(F.length), A;
    }
  }
  function h() {
    f(aC);
  }
  function p(S) {
    var A;
    for (S = S || []; A = g(); )
      A !== !1 && S.push(A);
    return S;
  }
  function g() {
    var S = a();
    if (!(th != e.charAt(0) || nh != e.charAt(1))) {
      for (var A = 2; ai != e.charAt(A) && (nh != e.charAt(A) || th != e.charAt(A + 1)); )
        ++A;
      if (A += 2, ai === e.charAt(A - 1))
        return c("End of comment missing");
      var F = e.slice(2, A - 2);
      return u += 2, o(F), e = e.slice(A), u += 2, S({
        type: gC,
        comment: F
      });
    }
  }
  function v() {
    var S = a(), A = f(lC);
    if (A) {
      if (g(), !f(cC)) return c("property missing ':'");
      var F = f(fC), P = S({
        type: mC,
        property: rh(A[0].replace(eh, ai)),
        value: F ? rh(F[0].replace(eh, ai)) : ai
      });
      return f(dC), P;
    }
  }
  function b() {
    var S = [];
    p(S);
    for (var A; A = v(); )
      A !== !1 && (S.push(A), p(S));
    return S;
  }
  return h(), b();
};
function rh(e) {
  return e ? e.replace(hC, ai) : ai;
}
var yC = xn && xn.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(wc, "__esModule", { value: !0 });
wc.default = IC;
var vC = yC(bC);
function IC(e, t) {
  var r = null;
  if (!e || typeof e != "string")
    return r;
  var u = (0, vC.default)(e), o = typeof t == "function";
  return u.forEach(function(a) {
    if (a.type === "declaration") {
      var l = a.property, c = a.value;
      o ? t(l, c, a) : c && (r = r || {}, r[l] = c);
    }
  }), r;
}
var Xs = {};
Object.defineProperty(Xs, "__esModule", { value: !0 });
Xs.camelCase = void 0;
var CC = /^--[a-zA-Z0-9_-]+$/, xC = /-([a-z])/g, AC = /^[^-]+$/, wC = /^-(webkit|moz|ms|o|khtml)-/, SC = /^-(ms)-/, EC = function(e) {
  return !e || AC.test(e) || CC.test(e);
}, FC = function(e, t) {
  return t.toUpperCase();
}, ih = function(e, t) {
  return "".concat(t, "-");
}, RC = function(e, t) {
  return t === void 0 && (t = {}), EC(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace(SC, ih) : e = e.replace(wC, ih), e.replace(xC, FC));
};
Xs.camelCase = RC;
var PC = xn && xn.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, OC = PC(wc), _C = Xs;
function Yl(e, t) {
  var r = {};
  return !e || typeof e != "string" || (0, OC.default)(e, function(u, o) {
    u && o && (r[(0, _C.camelCase)(u, t)] = o);
  }), r;
}
Yl.default = Yl;
var TC = Yl;
const BC = /* @__PURE__ */ Ws(TC), Mp = Np("end"), Sc = Np("start");
function Np(e) {
  return t;
  function t(r) {
    const u = r && r.position && r.position[e] || {};
    if (typeof u.line == "number" && u.line > 0 && typeof u.column == "number" && u.column > 0)
      return {
        line: u.line,
        column: u.column,
        offset: typeof u.offset == "number" && u.offset > -1 ? u.offset : void 0
      };
  }
}
function GC(e) {
  const t = Sc(e), r = Mp(e);
  if (t && r)
    return { start: t, end: r };
}
function Xu(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? uh(e.position) : "start" in e || "end" in e ? uh(e) : "line" in e || "column" in e ? Jl(e) : "";
}
function Jl(e) {
  return oh(e && e.line) + ":" + oh(e && e.column);
}
function uh(e) {
  return Jl(e && e.start) + "-" + Jl(e && e.end);
}
function oh(e) {
  return e && typeof e == "number" ? e : 1;
}
class zt extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(t, r, u) {
    super(), typeof r == "string" && (u = r, r = void 0);
    let o = "", a = {}, l = !1;
    if (r && ("line" in r && "column" in r ? a = { place: r } : "start" in r && "end" in r ? a = { place: r } : "type" in r ? a = {
      ancestors: [r],
      place: r.position
    } : a = { ...r }), typeof t == "string" ? o = t : !a.cause && t && (l = !0, o = t.message, a.cause = t), !a.ruleId && !a.source && typeof u == "string") {
      const f = u.indexOf(":");
      f === -1 ? a.ruleId = u : (a.source = u.slice(0, f), a.ruleId = u.slice(f + 1));
    }
    if (!a.place && a.ancestors && a.ancestors) {
      const f = a.ancestors[a.ancestors.length - 1];
      f && (a.place = f.position);
    }
    const c = a.place && "start" in a.place ? a.place.start : a.place;
    this.ancestors = a.ancestors || void 0, this.cause = a.cause || void 0, this.column = c ? c.column : void 0, this.fatal = void 0, this.file, this.message = o, this.line = c ? c.line : void 0, this.name = Xu(a.place) || "1:1", this.place = a.place || void 0, this.reason = this.message, this.ruleId = a.ruleId || void 0, this.source = a.source || void 0, this.stack = l && a.cause && typeof a.cause.stack == "string" ? a.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
zt.prototype.file = "";
zt.prototype.name = "";
zt.prototype.reason = "";
zt.prototype.message = "";
zt.prototype.stack = "";
zt.prototype.column = void 0;
zt.prototype.line = void 0;
zt.prototype.ancestors = void 0;
zt.prototype.cause = void 0;
zt.prototype.fatal = void 0;
zt.prototype.place = void 0;
zt.prototype.ruleId = void 0;
zt.prototype.source = void 0;
const Ec = {}.hasOwnProperty, kC = /* @__PURE__ */ new Map(), LC = /[A-Z]/g, DC = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), MC = /* @__PURE__ */ new Set(["td", "th"]), Vp = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function NC(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const r = t.filePath || void 0;
  let u;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    u = JC(r, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    u = YC(r, t.jsx, t.jsxs);
  }
  const o = {
    Fragment: t.Fragment,
    ancestors: [],
    components: t.components || {},
    create: u,
    elementAttributeNameCase: t.elementAttributeNameCase || "react",
    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
    filePath: r,
    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
    passKeys: t.passKeys !== !1,
    passNode: t.passNode || !1,
    schema: t.space === "svg" ? Ac : uC,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, a = Wp(o, e, void 0);
  return a && typeof a != "string" ? a : o.create(
    e,
    o.Fragment,
    { children: a || void 0 },
    void 0
  );
}
function Wp(e, t, r) {
  if (t.type === "element")
    return VC(e, t, r);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return WC(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return HC(e, t, r);
  if (t.type === "mdxjsEsm")
    return XC(e, t);
  if (t.type === "root")
    return zC(e, t, r);
  if (t.type === "text")
    return ZC(e, t);
}
function VC(e, t, r) {
  const u = e.schema;
  let o = u;
  t.tagName.toLowerCase() === "svg" && u.space === "html" && (o = Ac, e.schema = o), e.ancestors.push(t);
  const a = Hp(e, t.tagName, !1), l = UC(e, t);
  let c = Rc(e, t);
  return DC.has(t.tagName) && (c = c.filter(function(f) {
    return typeof f == "string" ? !j1(f) : !0;
  })), Xp(e, l, a, t), Fc(l, c), e.ancestors.pop(), e.schema = u, e.create(t, a, l, r);
}
function WC(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const u = t.data.estree.body[0];
    return u.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(u.expression);
  }
  Ju(e, t.position);
}
function XC(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  Ju(e, t.position);
}
function HC(e, t, r) {
  const u = e.schema;
  let o = u;
  t.name === "svg" && u.space === "html" && (o = Ac, e.schema = o), e.ancestors.push(t);
  const a = t.name === null ? e.Fragment : Hp(e, t.name, !0), l = jC(e, t), c = Rc(e, t);
  return Xp(e, l, a, t), Fc(l, c), e.ancestors.pop(), e.schema = u, e.create(t, a, l, r);
}
function zC(e, t, r) {
  const u = {};
  return Fc(u, Rc(e, t)), e.create(t, e.Fragment, u, r);
}
function ZC(e, t) {
  return t.value;
}
function Xp(e, t, r, u) {
  typeof r != "string" && r !== e.Fragment && e.passNode && (t.node = u);
}
function Fc(e, t) {
  if (t.length > 0) {
    const r = t.length > 1 ? t : t[0];
    r && (e.children = r);
  }
}
function YC(e, t, r) {
  return u;
  function u(o, a, l, c) {
    const h = Array.isArray(l.children) ? r : t;
    return c ? h(a, l, c) : h(a, l);
  }
}
function JC(e, t) {
  return r;
  function r(u, o, a, l) {
    const c = Array.isArray(a.children), f = Sc(u);
    return t(
      o,
      a,
      l,
      c,
      {
        columnNumber: f ? f.column - 1 : void 0,
        fileName: e,
        lineNumber: f ? f.line : void 0
      },
      void 0
    );
  }
}
function UC(e, t) {
  const r = {};
  let u, o;
  for (o in t.properties)
    if (o !== "children" && Ec.call(t.properties, o)) {
      const a = QC(e, o, t.properties[o]);
      if (a) {
        const [l, c] = a;
        e.tableCellAlignToStyle && l === "align" && typeof c == "string" && MC.has(t.tagName) ? u = c : r[l] = c;
      }
    }
  if (u) {
    const a = (
      /** @type {Style} */
      r.style || (r.style = {})
    );
    a[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = u;
  }
  return r;
}
function jC(e, t) {
  const r = {};
  for (const u of t.attributes)
    if (u.type === "mdxJsxExpressionAttribute")
      if (u.data && u.data.estree && e.evaluater) {
        const a = u.data.estree.body[0];
        a.type;
        const l = a.expression;
        l.type;
        const c = l.properties[0];
        c.type, Object.assign(
          r,
          e.evaluater.evaluateExpression(c.argument)
        );
      } else
        Ju(e, t.position);
    else {
      const o = u.name;
      let a;
      if (u.value && typeof u.value == "object")
        if (u.value.data && u.value.data.estree && e.evaluater) {
          const c = u.value.data.estree.body[0];
          c.type, a = e.evaluater.evaluateExpression(c.expression);
        } else
          Ju(e, t.position);
      else
        a = u.value === null ? !0 : u.value;
      r[o] = /** @type {Props[keyof Props]} */
      a;
    }
  return r;
}
function Rc(e, t) {
  const r = [];
  let u = -1;
  const o = e.passKeys ? /* @__PURE__ */ new Map() : kC;
  for (; ++u < t.children.length; ) {
    const a = t.children[u];
    let l;
    if (e.passKeys) {
      const f = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
      if (f) {
        const h = o.get(f) || 0;
        l = f + "-" + h, o.set(f, h + 1);
      }
    }
    const c = Wp(e, a, l);
    c !== void 0 && r.push(c);
  }
  return r;
}
function QC(e, t, r) {
  const u = nC(e.schema, t);
  if (!(r == null || typeof r == "number" && Number.isNaN(r))) {
    if (Array.isArray(r) && (r = u.commaSeparated ? z1(r) : oC(r)), u.property === "style") {
      let o = typeof r == "object" ? r : qC(e, String(r));
      return e.stylePropertyNameCase === "css" && (o = $C(o)), ["style", o];
    }
    return [
      e.elementAttributeNameCase === "react" && u.space ? K1[u.property] || u.property : u.attribute,
      r
    ];
  }
}
function qC(e, t) {
  try {
    return BC(t, { reactCompat: !0 });
  } catch (r) {
    if (e.ignoreInvalidStyle)
      return {};
    const u = (
      /** @type {Error} */
      r
    ), o = new zt("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: u,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw o.file = e.filePath || void 0, o.url = Vp + "#cannot-parse-style-attribute", o;
  }
}
function Hp(e, t, r) {
  let u;
  if (!r)
    u = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const o = t.split(".");
    let a = -1, l;
    for (; ++a < o.length; ) {
      const c = Qd(o[a]) ? { type: "Identifier", name: o[a] } : { type: "Literal", value: o[a] };
      l = l ? {
        type: "MemberExpression",
        object: l,
        property: c,
        computed: !!(a && c.type === "Literal"),
        optional: !1
      } : c;
    }
    u = l;
  } else
    u = Qd(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (u.type === "Literal") {
    const o = (
      /** @type {string | number} */
      u.value
    );
    return Ec.call(e.components, o) ? e.components[o] : o;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(u);
  Ju(e);
}
function Ju(e, t) {
  const r = new zt(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw r.file = e.filePath || void 0, r.url = Vp + "#cannot-handle-mdx-estrees-without-createevaluater", r;
}
function $C(e) {
  const t = {};
  let r;
  for (r in e)
    Ec.call(e, r) && (t[KC(r)] = e[r]);
  return t;
}
function KC(e) {
  let t = e.replace(LC, ex);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function ex(e) {
  return "-" + e.toLowerCase();
}
const El = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, tx = {};
function nx(e, t) {
  const r = tx, u = typeof r.includeImageAlt == "boolean" ? r.includeImageAlt : !0, o = typeof r.includeHtml == "boolean" ? r.includeHtml : !0;
  return zp(e, u, o);
}
function zp(e, t, r) {
  if (rx(e)) {
    if ("value" in e)
      return e.type === "html" && !r ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return sh(e.children, t, r);
  }
  return Array.isArray(e) ? sh(e, t, r) : "";
}
function sh(e, t, r) {
  const u = [];
  let o = -1;
  for (; ++o < e.length; )
    u[o] = zp(e[o], t, r);
  return u.join("");
}
function rx(e) {
  return !!(e && typeof e == "object");
}
const ah = document.createElement("i");
function Pc(e) {
  const t = "&" + e + ";";
  ah.innerHTML = t;
  const r = ah.textContent;
  return (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    r.charCodeAt(r.length - 1) === 59 && e !== "semi" || r === t ? !1 : r
  );
}
function ur(e, t, r, u) {
  const o = e.length;
  let a = 0, l;
  if (t < 0 ? t = -t > o ? 0 : o + t : t = t > o ? o : t, r = r > 0 ? r : 0, u.length < 1e4)
    l = Array.from(u), l.unshift(t, r), e.splice(...l);
  else
    for (r && e.splice(t, r); a < u.length; )
      l = u.slice(a, a + 1e4), l.unshift(t, 0), e.splice(...l), a += 1e4, t += 1e4;
}
function Dn(e, t) {
  return e.length > 0 ? (ur(e, e.length, 0, t), e) : t;
}
const lh = {}.hasOwnProperty;
function ix(e) {
  const t = {};
  let r = -1;
  for (; ++r < e.length; )
    ux(t, e[r]);
  return t;
}
function ux(e, t) {
  let r;
  for (r in t) {
    const o = (lh.call(e, r) ? e[r] : void 0) || (e[r] = {}), a = t[r];
    let l;
    if (a)
      for (l in a) {
        lh.call(o, l) || (o[l] = []);
        const c = a[l];
        ox(
          // @ts-expect-error Looks like a list.
          o[l],
          Array.isArray(c) ? c : c ? [c] : []
        );
      }
  }
}
function ox(e, t) {
  let r = -1;
  const u = [];
  for (; ++r < t.length; )
    (t[r].add === "after" ? e : u).push(t[r]);
  ur(e, 0, 0, u);
}
function Zp(e, t) {
  const r = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    r < 9 || r === 11 || r > 13 && r < 32 || // Control character (DEL) of C0, and C1 controls.
    r > 126 && r < 160 || // Lone high surrogates and low surrogates.
    r > 55295 && r < 57344 || // Noncharacters.
    r > 64975 && r < 65008 || /* eslint-disable no-bitwise */
    (r & 65535) === 65535 || (r & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    r > 1114111 ? "�" : String.fromCodePoint(r)
  );
}
function Zi(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const ir = Zr(/[A-Za-z]/), An = Zr(/[\dA-Za-z]/), sx = Zr(/[#-'*+\--9=?A-Z^-~]/);
function Ul(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const jl = Zr(/\d/), ax = Zr(/[\dA-Fa-f]/), lx = Zr(/[!-/:-@[-`{-~]/);
function Ae(e) {
  return e !== null && e < -2;
}
function cn(e) {
  return e !== null && (e < 0 || e === 32);
}
function je(e) {
  return e === -2 || e === -1 || e === 32;
}
const cx = Zr(new RegExp("\\p{P}|\\p{S}", "u")), fx = Zr(/\s/);
function Zr(e) {
  return t;
  function t(r) {
    return r !== null && r > -1 && e.test(String.fromCharCode(r));
  }
}
function lu(e) {
  const t = [];
  let r = -1, u = 0, o = 0;
  for (; ++r < e.length; ) {
    const a = e.charCodeAt(r);
    let l = "";
    if (a === 37 && An(e.charCodeAt(r + 1)) && An(e.charCodeAt(r + 2)))
      o = 2;
    else if (a < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (l = String.fromCharCode(a));
    else if (a > 55295 && a < 57344) {
      const c = e.charCodeAt(r + 1);
      a < 56320 && c > 56319 && c < 57344 ? (l = String.fromCharCode(a, c), o = 1) : l = "�";
    } else
      l = String.fromCharCode(a);
    l && (t.push(e.slice(u, r), encodeURIComponent(l)), u = r + o + 1, l = ""), o && (r += o, o = 0);
  }
  return t.join("") + e.slice(u);
}
function ct(e, t, r, u) {
  const o = u ? u - 1 : Number.POSITIVE_INFINITY;
  let a = 0;
  return l;
  function l(f) {
    return je(f) ? (e.enter(r), c(f)) : t(f);
  }
  function c(f) {
    return je(f) && a++ < o ? (e.consume(f), c) : (e.exit(r), t(f));
  }
}
const dx = {
  tokenize: hx
};
function hx(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, u, o);
  let r;
  return t;
  function u(c) {
    if (c === null) {
      e.consume(c);
      return;
    }
    return e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), ct(e, t, "linePrefix");
  }
  function o(c) {
    return e.enter("paragraph"), a(c);
  }
  function a(c) {
    const f = e.enter("chunkText", {
      contentType: "text",
      previous: r
    });
    return r && (r.next = f), r = f, l(c);
  }
  function l(c) {
    if (c === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(c);
      return;
    }
    return Ae(c) ? (e.consume(c), e.exit("chunkText"), a) : (e.consume(c), l);
  }
}
const px = {
  tokenize: gx
}, ch = {
  tokenize: mx
};
function gx(e) {
  const t = this, r = [];
  let u = 0, o, a, l;
  return c;
  function c(k) {
    if (u < r.length) {
      const N = r[u];
      return t.containerState = N[1], e.attempt(N[0].continuation, f, h)(k);
    }
    return h(k);
  }
  function f(k) {
    if (u++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, o && W();
      const N = t.events.length;
      let U = N, G;
      for (; U--; )
        if (t.events[U][0] === "exit" && t.events[U][1].type === "chunkFlow") {
          G = t.events[U][1].end;
          break;
        }
      P(u);
      let j = N;
      for (; j < t.events.length; )
        t.events[j][1].end = {
          ...G
        }, j++;
      return ur(t.events, U + 1, 0, t.events.slice(N)), t.events.length = j, h(k);
    }
    return c(k);
  }
  function h(k) {
    if (u === r.length) {
      if (!o)
        return v(k);
      if (o.currentConstruct && o.currentConstruct.concrete)
        return S(k);
      t.interrupt = !!(o.currentConstruct && !o._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(ch, p, g)(k);
  }
  function p(k) {
    return o && W(), P(u), v(k);
  }
  function g(k) {
    return t.parser.lazy[t.now().line] = u !== r.length, l = t.now().offset, S(k);
  }
  function v(k) {
    return t.containerState = {}, e.attempt(ch, b, S)(k);
  }
  function b(k) {
    return u++, r.push([t.currentConstruct, t.containerState]), v(k);
  }
  function S(k) {
    if (k === null) {
      o && W(), P(0), e.consume(k);
      return;
    }
    return o = o || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: o,
      contentType: "flow",
      previous: a
    }), A(k);
  }
  function A(k) {
    if (k === null) {
      F(e.exit("chunkFlow"), !0), P(0), e.consume(k);
      return;
    }
    return Ae(k) ? (e.consume(k), F(e.exit("chunkFlow")), u = 0, t.interrupt = void 0, c) : (e.consume(k), A);
  }
  function F(k, N) {
    const U = t.sliceStream(k);
    if (N && U.push(null), k.previous = a, a && (a.next = k), a = k, o.defineSkip(k.start), o.write(U), t.parser.lazy[k.start.line]) {
      let G = o.events.length;
      for (; G--; )
        if (
          // The token starts before the line ending…
          o.events[G][1].start.offset < l && // …and either is not ended yet…
          (!o.events[G][1].end || // …or ends after it.
          o.events[G][1].end.offset > l)
        )
          return;
      const j = t.events.length;
      let M = j, Y, K;
      for (; M--; )
        if (t.events[M][0] === "exit" && t.events[M][1].type === "chunkFlow") {
          if (Y) {
            K = t.events[M][1].end;
            break;
          }
          Y = !0;
        }
      for (P(u), G = j; G < t.events.length; )
        t.events[G][1].end = {
          ...K
        }, G++;
      ur(t.events, M + 1, 0, t.events.slice(j)), t.events.length = G;
    }
  }
  function P(k) {
    let N = r.length;
    for (; N-- > k; ) {
      const U = r[N];
      t.containerState = U[1], U[0].exit.call(t, e);
    }
    r.length = k;
  }
  function W() {
    o.write([null]), a = void 0, o = void 0, t.containerState._closeFlow = void 0;
  }
}
function mx(e, t, r) {
  return ct(e, e.attempt(this.parser.constructs.document, t, r), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function fh(e) {
  if (e === null || cn(e) || fx(e))
    return 1;
  if (cx(e))
    return 2;
}
function Oc(e, t, r) {
  const u = [];
  let o = -1;
  for (; ++o < e.length; ) {
    const a = e[o].resolveAll;
    a && !u.includes(a) && (t = a(t, r), u.push(a));
  }
  return t;
}
const Ql = {
  name: "attention",
  resolveAll: bx,
  tokenize: yx
};
function bx(e, t) {
  let r = -1, u, o, a, l, c, f, h, p;
  for (; ++r < e.length; )
    if (e[r][0] === "enter" && e[r][1].type === "attentionSequence" && e[r][1]._close) {
      for (u = r; u--; )
        if (e[u][0] === "exit" && e[u][1].type === "attentionSequence" && e[u][1]._open && // If the markers are the same:
        t.sliceSerialize(e[u][1]).charCodeAt(0) === t.sliceSerialize(e[r][1]).charCodeAt(0)) {
          if ((e[u][1]._close || e[r][1]._open) && (e[r][1].end.offset - e[r][1].start.offset) % 3 && !((e[u][1].end.offset - e[u][1].start.offset + e[r][1].end.offset - e[r][1].start.offset) % 3))
            continue;
          f = e[u][1].end.offset - e[u][1].start.offset > 1 && e[r][1].end.offset - e[r][1].start.offset > 1 ? 2 : 1;
          const g = {
            ...e[u][1].end
          }, v = {
            ...e[r][1].start
          };
          dh(g, -f), dh(v, f), l = {
            type: f > 1 ? "strongSequence" : "emphasisSequence",
            start: g,
            end: {
              ...e[u][1].end
            }
          }, c = {
            type: f > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[r][1].start
            },
            end: v
          }, a = {
            type: f > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[u][1].end
            },
            end: {
              ...e[r][1].start
            }
          }, o = {
            type: f > 1 ? "strong" : "emphasis",
            start: {
              ...l.start
            },
            end: {
              ...c.end
            }
          }, e[u][1].end = {
            ...l.start
          }, e[r][1].start = {
            ...c.end
          }, h = [], e[u][1].end.offset - e[u][1].start.offset && (h = Dn(h, [["enter", e[u][1], t], ["exit", e[u][1], t]])), h = Dn(h, [["enter", o, t], ["enter", l, t], ["exit", l, t], ["enter", a, t]]), h = Dn(h, Oc(t.parser.constructs.insideSpan.null, e.slice(u + 1, r), t)), h = Dn(h, [["exit", a, t], ["enter", c, t], ["exit", c, t], ["exit", o, t]]), e[r][1].end.offset - e[r][1].start.offset ? (p = 2, h = Dn(h, [["enter", e[r][1], t], ["exit", e[r][1], t]])) : p = 0, ur(e, u - 1, r - u + 3, h), r = u + h.length - p - 2;
          break;
        }
    }
  for (r = -1; ++r < e.length; )
    e[r][1].type === "attentionSequence" && (e[r][1].type = "data");
  return e;
}
function yx(e, t) {
  const r = this.parser.constructs.attentionMarkers.null, u = this.previous, o = fh(u);
  let a;
  return l;
  function l(f) {
    return a = f, e.enter("attentionSequence"), c(f);
  }
  function c(f) {
    if (f === a)
      return e.consume(f), c;
    const h = e.exit("attentionSequence"), p = fh(f), g = !p || p === 2 && o || r.includes(f), v = !o || o === 2 && p || r.includes(u);
    return h._open = !!(a === 42 ? g : g && (o || !v)), h._close = !!(a === 42 ? v : v && (p || !g)), t(f);
  }
}
function dh(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const vx = {
  name: "autolink",
  tokenize: Ix
};
function Ix(e, t, r) {
  let u = 0;
  return o;
  function o(b) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(b), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
  }
  function a(b) {
    return ir(b) ? (e.consume(b), l) : b === 64 ? r(b) : h(b);
  }
  function l(b) {
    return b === 43 || b === 45 || b === 46 || An(b) ? (u = 1, c(b)) : h(b);
  }
  function c(b) {
    return b === 58 ? (e.consume(b), u = 0, f) : (b === 43 || b === 45 || b === 46 || An(b)) && u++ < 32 ? (e.consume(b), c) : (u = 0, h(b));
  }
  function f(b) {
    return b === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(b), e.exit("autolinkMarker"), e.exit("autolink"), t) : b === null || b === 32 || b === 60 || Ul(b) ? r(b) : (e.consume(b), f);
  }
  function h(b) {
    return b === 64 ? (e.consume(b), p) : sx(b) ? (e.consume(b), h) : r(b);
  }
  function p(b) {
    return An(b) ? g(b) : r(b);
  }
  function g(b) {
    return b === 46 ? (e.consume(b), u = 0, p) : b === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(b), e.exit("autolinkMarker"), e.exit("autolink"), t) : v(b);
  }
  function v(b) {
    if ((b === 45 || An(b)) && u++ < 63) {
      const S = b === 45 ? v : g;
      return e.consume(b), S;
    }
    return r(b);
  }
}
const Hs = {
  partial: !0,
  tokenize: Cx
};
function Cx(e, t, r) {
  return u;
  function u(a) {
    return je(a) ? ct(e, o, "linePrefix")(a) : o(a);
  }
  function o(a) {
    return a === null || Ae(a) ? t(a) : r(a);
  }
}
const Yp = {
  continuation: {
    tokenize: Ax
  },
  exit: wx,
  name: "blockQuote",
  tokenize: xx
};
function xx(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    if (l === 62) {
      const c = u.containerState;
      return c.open || (e.enter("blockQuote", {
        _container: !0
      }), c.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), a;
    }
    return r(l);
  }
  function a(l) {
    return je(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l));
  }
}
function Ax(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return je(l) ? ct(e, a, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : a(l);
  }
  function a(l) {
    return e.attempt(Yp, t, r)(l);
  }
}
function wx(e) {
  e.exit("blockQuote");
}
const Jp = {
  name: "characterEscape",
  tokenize: Sx
};
function Sx(e, t, r) {
  return u;
  function u(a) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(a), e.exit("escapeMarker"), o;
  }
  function o(a) {
    return lx(a) ? (e.enter("characterEscapeValue"), e.consume(a), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : r(a);
  }
}
const Up = {
  name: "characterReference",
  tokenize: Ex
};
function Ex(e, t, r) {
  const u = this;
  let o = 0, a, l;
  return c;
  function c(g) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(g), e.exit("characterReferenceMarker"), f;
  }
  function f(g) {
    return g === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(g), e.exit("characterReferenceMarkerNumeric"), h) : (e.enter("characterReferenceValue"), a = 31, l = An, p(g));
  }
  function h(g) {
    return g === 88 || g === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(g), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, l = ax, p) : (e.enter("characterReferenceValue"), a = 7, l = jl, p(g));
  }
  function p(g) {
    if (g === 59 && o) {
      const v = e.exit("characterReferenceValue");
      return l === An && !Pc(u.sliceSerialize(v)) ? r(g) : (e.enter("characterReferenceMarker"), e.consume(g), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return l(g) && o++ < a ? (e.consume(g), p) : r(g);
  }
}
const hh = {
  partial: !0,
  tokenize: Rx
}, ph = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Fx
};
function Fx(e, t, r) {
  const u = this, o = {
    partial: !0,
    tokenize: U
  };
  let a = 0, l = 0, c;
  return f;
  function f(G) {
    return h(G);
  }
  function h(G) {
    const j = u.events[u.events.length - 1];
    return a = j && j[1].type === "linePrefix" ? j[2].sliceSerialize(j[1], !0).length : 0, c = G, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), p(G);
  }
  function p(G) {
    return G === c ? (l++, e.consume(G), p) : l < 3 ? r(G) : (e.exit("codeFencedFenceSequence"), je(G) ? ct(e, g, "whitespace")(G) : g(G));
  }
  function g(G) {
    return G === null || Ae(G) ? (e.exit("codeFencedFence"), u.interrupt ? t(G) : e.check(hh, A, N)(G)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), v(G));
  }
  function v(G) {
    return G === null || Ae(G) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), g(G)) : je(G) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ct(e, b, "whitespace")(G)) : G === 96 && G === c ? r(G) : (e.consume(G), v);
  }
  function b(G) {
    return G === null || Ae(G) ? g(G) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), S(G));
  }
  function S(G) {
    return G === null || Ae(G) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), g(G)) : G === 96 && G === c ? r(G) : (e.consume(G), S);
  }
  function A(G) {
    return e.attempt(o, N, F)(G);
  }
  function F(G) {
    return e.enter("lineEnding"), e.consume(G), e.exit("lineEnding"), P;
  }
  function P(G) {
    return a > 0 && je(G) ? ct(e, W, "linePrefix", a + 1)(G) : W(G);
  }
  function W(G) {
    return G === null || Ae(G) ? e.check(hh, A, N)(G) : (e.enter("codeFlowValue"), k(G));
  }
  function k(G) {
    return G === null || Ae(G) ? (e.exit("codeFlowValue"), W(G)) : (e.consume(G), k);
  }
  function N(G) {
    return e.exit("codeFenced"), t(G);
  }
  function U(G, j, M) {
    let Y = 0;
    return K;
    function K(ie) {
      return G.enter("lineEnding"), G.consume(ie), G.exit("lineEnding"), Q;
    }
    function Q(ie) {
      return G.enter("codeFencedFence"), je(ie) ? ct(G, z, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(ie) : z(ie);
    }
    function z(ie) {
      return ie === c ? (G.enter("codeFencedFenceSequence"), ee(ie)) : M(ie);
    }
    function ee(ie) {
      return ie === c ? (Y++, G.consume(ie), ee) : Y >= l ? (G.exit("codeFencedFenceSequence"), je(ie) ? ct(G, de, "whitespace")(ie) : de(ie)) : M(ie);
    }
    function de(ie) {
      return ie === null || Ae(ie) ? (G.exit("codeFencedFence"), j(ie)) : M(ie);
    }
  }
}
function Rx(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return l === null ? r(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), a);
  }
  function a(l) {
    return u.parser.lazy[u.now().line] ? r(l) : t(l);
  }
}
const Fl = {
  name: "codeIndented",
  tokenize: Ox
}, Px = {
  partial: !0,
  tokenize: _x
};
function Ox(e, t, r) {
  const u = this;
  return o;
  function o(h) {
    return e.enter("codeIndented"), ct(e, a, "linePrefix", 5)(h);
  }
  function a(h) {
    const p = u.events[u.events.length - 1];
    return p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? l(h) : r(h);
  }
  function l(h) {
    return h === null ? f(h) : Ae(h) ? e.attempt(Px, l, f)(h) : (e.enter("codeFlowValue"), c(h));
  }
  function c(h) {
    return h === null || Ae(h) ? (e.exit("codeFlowValue"), l(h)) : (e.consume(h), c);
  }
  function f(h) {
    return e.exit("codeIndented"), t(h);
  }
}
function _x(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return u.parser.lazy[u.now().line] ? r(l) : Ae(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : ct(e, a, "linePrefix", 5)(l);
  }
  function a(l) {
    const c = u.events[u.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? t(l) : Ae(l) ? o(l) : r(l);
  }
}
const Tx = {
  name: "codeText",
  previous: Gx,
  resolve: Bx,
  tokenize: kx
};
function Bx(e) {
  let t = e.length - 4, r = 3, u, o;
  if ((e[r][1].type === "lineEnding" || e[r][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (u = r; ++u < t; )
      if (e[u][1].type === "codeTextData") {
        e[r][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", r += 2, t -= 2;
        break;
      }
  }
  for (u = r - 1, t++; ++u <= t; )
    o === void 0 ? u !== t && e[u][1].type !== "lineEnding" && (o = u) : (u === t || e[u][1].type === "lineEnding") && (e[o][1].type = "codeTextData", u !== o + 2 && (e[o][1].end = e[u - 1][1].end, e.splice(o + 2, u - o - 2), t -= u - o - 2, u = o + 2), o = void 0);
  return e;
}
function Gx(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function kx(e, t, r) {
  let u = 0, o, a;
  return l;
  function l(g) {
    return e.enter("codeText"), e.enter("codeTextSequence"), c(g);
  }
  function c(g) {
    return g === 96 ? (e.consume(g), u++, c) : (e.exit("codeTextSequence"), f(g));
  }
  function f(g) {
    return g === null ? r(g) : g === 32 ? (e.enter("space"), e.consume(g), e.exit("space"), f) : g === 96 ? (a = e.enter("codeTextSequence"), o = 0, p(g)) : Ae(g) ? (e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), f) : (e.enter("codeTextData"), h(g));
  }
  function h(g) {
    return g === null || g === 32 || g === 96 || Ae(g) ? (e.exit("codeTextData"), f(g)) : (e.consume(g), h);
  }
  function p(g) {
    return g === 96 ? (e.consume(g), o++, p) : o === u ? (e.exit("codeTextSequence"), e.exit("codeText"), t(g)) : (a.type = "codeTextData", h(g));
  }
}
class Lx {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(t) {
    this.left = t ? [...t] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(t) {
    if (t < 0 || t >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(t, r) {
    const u = r ?? Number.POSITIVE_INFINITY;
    return u < this.left.length ? this.left.slice(t, u) : t > this.left.length ? this.right.slice(this.right.length - u + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - u + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(t, r, u) {
    const o = r || 0;
    this.setCursor(Math.trunc(t));
    const a = this.right.splice(this.right.length - o, Number.POSITIVE_INFINITY);
    return u && Lu(this.left, u), a.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(t) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(t) {
    this.setCursor(Number.POSITIVE_INFINITY), Lu(this.left, t);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(t) {
    this.setCursor(0), this.right.push(t);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(t) {
    this.setCursor(0), Lu(this.right, t.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(t) {
    if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0))
      if (t < this.left.length) {
        const r = this.left.splice(t, Number.POSITIVE_INFINITY);
        Lu(this.right, r.reverse());
      } else {
        const r = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        Lu(this.left, r.reverse());
      }
  }
}
function Lu(e, t) {
  let r = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; r < t.length; )
      e.push(...t.slice(r, r + 1e4)), r += 1e4;
}
function jp(e) {
  const t = {};
  let r = -1, u, o, a, l, c, f, h;
  const p = new Lx(e);
  for (; ++r < p.length; ) {
    for (; r in t; )
      r = t[r];
    if (u = p.get(r), r && u[1].type === "chunkFlow" && p.get(r - 1)[1].type === "listItemPrefix" && (f = u[1]._tokenizer.events, a = 0, a < f.length && f[a][1].type === "lineEndingBlank" && (a += 2), a < f.length && f[a][1].type === "content"))
      for (; ++a < f.length && f[a][1].type !== "content"; )
        f[a][1].type === "chunkText" && (f[a][1]._isInFirstContentOfListItem = !0, a++);
    if (u[0] === "enter")
      u[1].contentType && (Object.assign(t, Dx(p, r)), r = t[r], h = !0);
    else if (u[1]._container) {
      for (a = r, o = void 0; a--; )
        if (l = p.get(a), l[1].type === "lineEnding" || l[1].type === "lineEndingBlank")
          l[0] === "enter" && (o && (p.get(o)[1].type = "lineEndingBlank"), l[1].type = "lineEnding", o = a);
        else if (!(l[1].type === "linePrefix" || l[1].type === "listItemIndent")) break;
      o && (u[1].end = {
        ...p.get(o)[1].start
      }, c = p.slice(o, r), c.unshift(u), p.splice(o, r - o + 1, c));
    }
  }
  return ur(e, 0, Number.POSITIVE_INFINITY, p.slice(0)), !h;
}
function Dx(e, t) {
  const r = e.get(t)[1], u = e.get(t)[2];
  let o = t - 1;
  const a = [];
  let l = r._tokenizer;
  l || (l = u.parser[r.contentType](r.start), r._contentTypeTextTrailing && (l._contentTypeTextTrailing = !0));
  const c = l.events, f = [], h = {};
  let p, g, v = -1, b = r, S = 0, A = 0;
  const F = [A];
  for (; b; ) {
    for (; e.get(++o)[1] !== b; )
      ;
    a.push(o), b._tokenizer || (p = u.sliceStream(b), b.next || p.push(null), g && l.defineSkip(b.start), b._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(p), b._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), g = b, b = b.next;
  }
  for (b = r; ++v < c.length; )
    // Find a void token that includes a break.
    c[v][0] === "exit" && c[v - 1][0] === "enter" && c[v][1].type === c[v - 1][1].type && c[v][1].start.line !== c[v][1].end.line && (A = v + 1, F.push(A), b._tokenizer = void 0, b.previous = void 0, b = b.next);
  for (l.events = [], b ? (b._tokenizer = void 0, b.previous = void 0) : F.pop(), v = F.length; v--; ) {
    const P = c.slice(F[v], F[v + 1]), W = a.pop();
    f.push([W, W + P.length - 1]), e.splice(W, 2, P);
  }
  for (f.reverse(), v = -1; ++v < f.length; )
    h[S + f[v][0]] = S + f[v][1], S += f[v][1] - f[v][0] - 1;
  return h;
}
const Mx = {
  resolve: Vx,
  tokenize: Wx
}, Nx = {
  partial: !0,
  tokenize: Xx
};
function Vx(e) {
  return jp(e), e;
}
function Wx(e, t) {
  let r;
  return u;
  function u(c) {
    return e.enter("content"), r = e.enter("chunkContent", {
      contentType: "content"
    }), o(c);
  }
  function o(c) {
    return c === null ? a(c) : Ae(c) ? e.check(Nx, l, a)(c) : (e.consume(c), o);
  }
  function a(c) {
    return e.exit("chunkContent"), e.exit("content"), t(c);
  }
  function l(c) {
    return e.consume(c), e.exit("chunkContent"), r.next = e.enter("chunkContent", {
      contentType: "content",
      previous: r
    }), r = r.next, o;
  }
}
function Xx(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), ct(e, a, "linePrefix");
  }
  function a(l) {
    if (l === null || Ae(l))
      return r(l);
    const c = u.events[u.events.length - 1];
    return !u.parser.constructs.disable.null.includes("codeIndented") && c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? t(l) : e.interrupt(u.parser.constructs.flow, r, t)(l);
  }
}
function Qp(e, t, r, u, o, a, l, c, f) {
  const h = f || Number.POSITIVE_INFINITY;
  let p = 0;
  return g;
  function g(P) {
    return P === 60 ? (e.enter(u), e.enter(o), e.enter(a), e.consume(P), e.exit(a), v) : P === null || P === 32 || P === 41 || Ul(P) ? r(P) : (e.enter(u), e.enter(l), e.enter(c), e.enter("chunkString", {
      contentType: "string"
    }), A(P));
  }
  function v(P) {
    return P === 62 ? (e.enter(a), e.consume(P), e.exit(a), e.exit(o), e.exit(u), t) : (e.enter(c), e.enter("chunkString", {
      contentType: "string"
    }), b(P));
  }
  function b(P) {
    return P === 62 ? (e.exit("chunkString"), e.exit(c), v(P)) : P === null || P === 60 || Ae(P) ? r(P) : (e.consume(P), P === 92 ? S : b);
  }
  function S(P) {
    return P === 60 || P === 62 || P === 92 ? (e.consume(P), b) : b(P);
  }
  function A(P) {
    return !p && (P === null || P === 41 || cn(P)) ? (e.exit("chunkString"), e.exit(c), e.exit(l), e.exit(u), t(P)) : p < h && P === 40 ? (e.consume(P), p++, A) : P === 41 ? (e.consume(P), p--, A) : P === null || P === 32 || P === 40 || Ul(P) ? r(P) : (e.consume(P), P === 92 ? F : A);
  }
  function F(P) {
    return P === 40 || P === 41 || P === 92 ? (e.consume(P), A) : A(P);
  }
}
function qp(e, t, r, u, o, a) {
  const l = this;
  let c = 0, f;
  return h;
  function h(b) {
    return e.enter(u), e.enter(o), e.consume(b), e.exit(o), e.enter(a), p;
  }
  function p(b) {
    return c > 999 || b === null || b === 91 || b === 93 && !f || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    b === 94 && !c && "_hiddenFootnoteSupport" in l.parser.constructs ? r(b) : b === 93 ? (e.exit(a), e.enter(o), e.consume(b), e.exit(o), e.exit(u), t) : Ae(b) ? (e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), p) : (e.enter("chunkString", {
      contentType: "string"
    }), g(b));
  }
  function g(b) {
    return b === null || b === 91 || b === 93 || Ae(b) || c++ > 999 ? (e.exit("chunkString"), p(b)) : (e.consume(b), f || (f = !je(b)), b === 92 ? v : g);
  }
  function v(b) {
    return b === 91 || b === 92 || b === 93 ? (e.consume(b), c++, g) : g(b);
  }
}
function $p(e, t, r, u, o, a) {
  let l;
  return c;
  function c(v) {
    return v === 34 || v === 39 || v === 40 ? (e.enter(u), e.enter(o), e.consume(v), e.exit(o), l = v === 40 ? 41 : v, f) : r(v);
  }
  function f(v) {
    return v === l ? (e.enter(o), e.consume(v), e.exit(o), e.exit(u), t) : (e.enter(a), h(v));
  }
  function h(v) {
    return v === l ? (e.exit(a), f(l)) : v === null ? r(v) : Ae(v) ? (e.enter("lineEnding"), e.consume(v), e.exit("lineEnding"), ct(e, h, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), p(v));
  }
  function p(v) {
    return v === l || v === null || Ae(v) ? (e.exit("chunkString"), h(v)) : (e.consume(v), v === 92 ? g : p);
  }
  function g(v) {
    return v === l || v === 92 ? (e.consume(v), p) : p(v);
  }
}
function Hu(e, t) {
  let r;
  return u;
  function u(o) {
    return Ae(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), r = !0, u) : je(o) ? ct(e, u, r ? "linePrefix" : "lineSuffix")(o) : t(o);
  }
}
const Hx = {
  name: "definition",
  tokenize: Zx
}, zx = {
  partial: !0,
  tokenize: Yx
};
function Zx(e, t, r) {
  const u = this;
  let o;
  return a;
  function a(b) {
    return e.enter("definition"), l(b);
  }
  function l(b) {
    return qp.call(
      u,
      e,
      c,
      // Note: we don’t need to reset the way `markdown-rs` does.
      r,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(b);
  }
  function c(b) {
    return o = Zi(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1)), b === 58 ? (e.enter("definitionMarker"), e.consume(b), e.exit("definitionMarker"), f) : r(b);
  }
  function f(b) {
    return cn(b) ? Hu(e, h)(b) : h(b);
  }
  function h(b) {
    return Qp(
      e,
      p,
      // Note: we don’t need to reset the way `markdown-rs` does.
      r,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(b);
  }
  function p(b) {
    return e.attempt(zx, g, g)(b);
  }
  function g(b) {
    return je(b) ? ct(e, v, "whitespace")(b) : v(b);
  }
  function v(b) {
    return b === null || Ae(b) ? (e.exit("definition"), u.parser.defined.push(o), t(b)) : r(b);
  }
}
function Yx(e, t, r) {
  return u;
  function u(c) {
    return cn(c) ? Hu(e, o)(c) : r(c);
  }
  function o(c) {
    return $p(e, a, r, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(c);
  }
  function a(c) {
    return je(c) ? ct(e, l, "whitespace")(c) : l(c);
  }
  function l(c) {
    return c === null || Ae(c) ? t(c) : r(c);
  }
}
const Jx = {
  name: "hardBreakEscape",
  tokenize: Ux
};
function Ux(e, t, r) {
  return u;
  function u(a) {
    return e.enter("hardBreakEscape"), e.consume(a), o;
  }
  function o(a) {
    return Ae(a) ? (e.exit("hardBreakEscape"), t(a)) : r(a);
  }
}
const jx = {
  name: "headingAtx",
  resolve: Qx,
  tokenize: qx
};
function Qx(e, t) {
  let r = e.length - 2, u = 3, o, a;
  return e[u][1].type === "whitespace" && (u += 2), r - 2 > u && e[r][1].type === "whitespace" && (r -= 2), e[r][1].type === "atxHeadingSequence" && (u === r - 1 || r - 4 > u && e[r - 2][1].type === "whitespace") && (r -= u + 1 === r ? 2 : 4), r > u && (o = {
    type: "atxHeadingText",
    start: e[u][1].start,
    end: e[r][1].end
  }, a = {
    type: "chunkText",
    start: e[u][1].start,
    end: e[r][1].end,
    contentType: "text"
  }, ur(e, u, r - u + 1, [["enter", o, t], ["enter", a, t], ["exit", a, t], ["exit", o, t]])), e;
}
function qx(e, t, r) {
  let u = 0;
  return o;
  function o(p) {
    return e.enter("atxHeading"), a(p);
  }
  function a(p) {
    return e.enter("atxHeadingSequence"), l(p);
  }
  function l(p) {
    return p === 35 && u++ < 6 ? (e.consume(p), l) : p === null || cn(p) ? (e.exit("atxHeadingSequence"), c(p)) : r(p);
  }
  function c(p) {
    return p === 35 ? (e.enter("atxHeadingSequence"), f(p)) : p === null || Ae(p) ? (e.exit("atxHeading"), t(p)) : je(p) ? ct(e, c, "whitespace")(p) : (e.enter("atxHeadingText"), h(p));
  }
  function f(p) {
    return p === 35 ? (e.consume(p), f) : (e.exit("atxHeadingSequence"), c(p));
  }
  function h(p) {
    return p === null || p === 35 || cn(p) ? (e.exit("atxHeadingText"), c(p)) : (e.consume(p), h);
  }
}
const $x = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], gh = ["pre", "script", "style", "textarea"], Kx = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: nA,
  tokenize: rA
}, eA = {
  partial: !0,
  tokenize: uA
}, tA = {
  partial: !0,
  tokenize: iA
};
function nA(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function rA(e, t, r) {
  const u = this;
  let o, a, l, c, f;
  return h;
  function h(E) {
    return p(E);
  }
  function p(E) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(E), g;
  }
  function g(E) {
    return E === 33 ? (e.consume(E), v) : E === 47 ? (e.consume(E), a = !0, A) : E === 63 ? (e.consume(E), o = 3, u.interrupt ? t : w) : ir(E) ? (e.consume(E), l = String.fromCharCode(E), F) : r(E);
  }
  function v(E) {
    return E === 45 ? (e.consume(E), o = 2, b) : E === 91 ? (e.consume(E), o = 5, c = 0, S) : ir(E) ? (e.consume(E), o = 4, u.interrupt ? t : w) : r(E);
  }
  function b(E) {
    return E === 45 ? (e.consume(E), u.interrupt ? t : w) : r(E);
  }
  function S(E) {
    const Ye = "CDATA[";
    return E === Ye.charCodeAt(c++) ? (e.consume(E), c === Ye.length ? u.interrupt ? t : z : S) : r(E);
  }
  function A(E) {
    return ir(E) ? (e.consume(E), l = String.fromCharCode(E), F) : r(E);
  }
  function F(E) {
    if (E === null || E === 47 || E === 62 || cn(E)) {
      const Ye = E === 47, ce = l.toLowerCase();
      return !Ye && !a && gh.includes(ce) ? (o = 1, u.interrupt ? t(E) : z(E)) : $x.includes(l.toLowerCase()) ? (o = 6, Ye ? (e.consume(E), P) : u.interrupt ? t(E) : z(E)) : (o = 7, u.interrupt && !u.parser.lazy[u.now().line] ? r(E) : a ? W(E) : k(E));
    }
    return E === 45 || An(E) ? (e.consume(E), l += String.fromCharCode(E), F) : r(E);
  }
  function P(E) {
    return E === 62 ? (e.consume(E), u.interrupt ? t : z) : r(E);
  }
  function W(E) {
    return je(E) ? (e.consume(E), W) : K(E);
  }
  function k(E) {
    return E === 47 ? (e.consume(E), K) : E === 58 || E === 95 || ir(E) ? (e.consume(E), N) : je(E) ? (e.consume(E), k) : K(E);
  }
  function N(E) {
    return E === 45 || E === 46 || E === 58 || E === 95 || An(E) ? (e.consume(E), N) : U(E);
  }
  function U(E) {
    return E === 61 ? (e.consume(E), G) : je(E) ? (e.consume(E), U) : k(E);
  }
  function G(E) {
    return E === null || E === 60 || E === 61 || E === 62 || E === 96 ? r(E) : E === 34 || E === 39 ? (e.consume(E), f = E, j) : je(E) ? (e.consume(E), G) : M(E);
  }
  function j(E) {
    return E === f ? (e.consume(E), f = null, Y) : E === null || Ae(E) ? r(E) : (e.consume(E), j);
  }
  function M(E) {
    return E === null || E === 34 || E === 39 || E === 47 || E === 60 || E === 61 || E === 62 || E === 96 || cn(E) ? U(E) : (e.consume(E), M);
  }
  function Y(E) {
    return E === 47 || E === 62 || je(E) ? k(E) : r(E);
  }
  function K(E) {
    return E === 62 ? (e.consume(E), Q) : r(E);
  }
  function Q(E) {
    return E === null || Ae(E) ? z(E) : je(E) ? (e.consume(E), Q) : r(E);
  }
  function z(E) {
    return E === 45 && o === 2 ? (e.consume(E), xe) : E === 60 && o === 1 ? (e.consume(E), we) : E === 62 && o === 4 ? (e.consume(E), Ie) : E === 63 && o === 3 ? (e.consume(E), w) : E === 93 && o === 5 ? (e.consume(E), Je) : Ae(E) && (o === 6 || o === 7) ? (e.exit("htmlFlowData"), e.check(eA, Ge, ee)(E)) : E === null || Ae(E) ? (e.exit("htmlFlowData"), ee(E)) : (e.consume(E), z);
  }
  function ee(E) {
    return e.check(tA, de, Ge)(E);
  }
  function de(E) {
    return e.enter("lineEnding"), e.consume(E), e.exit("lineEnding"), ie;
  }
  function ie(E) {
    return E === null || Ae(E) ? ee(E) : (e.enter("htmlFlowData"), z(E));
  }
  function xe(E) {
    return E === 45 ? (e.consume(E), w) : z(E);
  }
  function we(E) {
    return E === 47 ? (e.consume(E), l = "", Fe) : z(E);
  }
  function Fe(E) {
    if (E === 62) {
      const Ye = l.toLowerCase();
      return gh.includes(Ye) ? (e.consume(E), Ie) : z(E);
    }
    return ir(E) && l.length < 8 ? (e.consume(E), l += String.fromCharCode(E), Fe) : z(E);
  }
  function Je(E) {
    return E === 93 ? (e.consume(E), w) : z(E);
  }
  function w(E) {
    return E === 62 ? (e.consume(E), Ie) : E === 45 && o === 2 ? (e.consume(E), w) : z(E);
  }
  function Ie(E) {
    return E === null || Ae(E) ? (e.exit("htmlFlowData"), Ge(E)) : (e.consume(E), Ie);
  }
  function Ge(E) {
    return e.exit("htmlFlow"), t(E);
  }
}
function iA(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return Ae(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), a) : r(l);
  }
  function a(l) {
    return u.parser.lazy[u.now().line] ? r(l) : t(l);
  }
}
function uA(e, t, r) {
  return u;
  function u(o) {
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), e.attempt(Hs, t, r);
  }
}
const oA = {
  name: "htmlText",
  tokenize: sA
};
function sA(e, t, r) {
  const u = this;
  let o, a, l;
  return c;
  function c(w) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(w), f;
  }
  function f(w) {
    return w === 33 ? (e.consume(w), h) : w === 47 ? (e.consume(w), U) : w === 63 ? (e.consume(w), k) : ir(w) ? (e.consume(w), M) : r(w);
  }
  function h(w) {
    return w === 45 ? (e.consume(w), p) : w === 91 ? (e.consume(w), a = 0, S) : ir(w) ? (e.consume(w), W) : r(w);
  }
  function p(w) {
    return w === 45 ? (e.consume(w), b) : r(w);
  }
  function g(w) {
    return w === null ? r(w) : w === 45 ? (e.consume(w), v) : Ae(w) ? (l = g, we(w)) : (e.consume(w), g);
  }
  function v(w) {
    return w === 45 ? (e.consume(w), b) : g(w);
  }
  function b(w) {
    return w === 62 ? xe(w) : w === 45 ? v(w) : g(w);
  }
  function S(w) {
    const Ie = "CDATA[";
    return w === Ie.charCodeAt(a++) ? (e.consume(w), a === Ie.length ? A : S) : r(w);
  }
  function A(w) {
    return w === null ? r(w) : w === 93 ? (e.consume(w), F) : Ae(w) ? (l = A, we(w)) : (e.consume(w), A);
  }
  function F(w) {
    return w === 93 ? (e.consume(w), P) : A(w);
  }
  function P(w) {
    return w === 62 ? xe(w) : w === 93 ? (e.consume(w), P) : A(w);
  }
  function W(w) {
    return w === null || w === 62 ? xe(w) : Ae(w) ? (l = W, we(w)) : (e.consume(w), W);
  }
  function k(w) {
    return w === null ? r(w) : w === 63 ? (e.consume(w), N) : Ae(w) ? (l = k, we(w)) : (e.consume(w), k);
  }
  function N(w) {
    return w === 62 ? xe(w) : k(w);
  }
  function U(w) {
    return ir(w) ? (e.consume(w), G) : r(w);
  }
  function G(w) {
    return w === 45 || An(w) ? (e.consume(w), G) : j(w);
  }
  function j(w) {
    return Ae(w) ? (l = j, we(w)) : je(w) ? (e.consume(w), j) : xe(w);
  }
  function M(w) {
    return w === 45 || An(w) ? (e.consume(w), M) : w === 47 || w === 62 || cn(w) ? Y(w) : r(w);
  }
  function Y(w) {
    return w === 47 ? (e.consume(w), xe) : w === 58 || w === 95 || ir(w) ? (e.consume(w), K) : Ae(w) ? (l = Y, we(w)) : je(w) ? (e.consume(w), Y) : xe(w);
  }
  function K(w) {
    return w === 45 || w === 46 || w === 58 || w === 95 || An(w) ? (e.consume(w), K) : Q(w);
  }
  function Q(w) {
    return w === 61 ? (e.consume(w), z) : Ae(w) ? (l = Q, we(w)) : je(w) ? (e.consume(w), Q) : Y(w);
  }
  function z(w) {
    return w === null || w === 60 || w === 61 || w === 62 || w === 96 ? r(w) : w === 34 || w === 39 ? (e.consume(w), o = w, ee) : Ae(w) ? (l = z, we(w)) : je(w) ? (e.consume(w), z) : (e.consume(w), de);
  }
  function ee(w) {
    return w === o ? (e.consume(w), o = void 0, ie) : w === null ? r(w) : Ae(w) ? (l = ee, we(w)) : (e.consume(w), ee);
  }
  function de(w) {
    return w === null || w === 34 || w === 39 || w === 60 || w === 61 || w === 96 ? r(w) : w === 47 || w === 62 || cn(w) ? Y(w) : (e.consume(w), de);
  }
  function ie(w) {
    return w === 47 || w === 62 || cn(w) ? Y(w) : r(w);
  }
  function xe(w) {
    return w === 62 ? (e.consume(w), e.exit("htmlTextData"), e.exit("htmlText"), t) : r(w);
  }
  function we(w) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), Fe;
  }
  function Fe(w) {
    return je(w) ? ct(e, Je, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(w) : Je(w);
  }
  function Je(w) {
    return e.enter("htmlTextData"), l(w);
  }
}
const _c = {
  name: "labelEnd",
  resolveAll: fA,
  resolveTo: dA,
  tokenize: hA
}, aA = {
  tokenize: pA
}, lA = {
  tokenize: gA
}, cA = {
  tokenize: mA
};
function fA(e) {
  let t = -1;
  const r = [];
  for (; ++t < e.length; ) {
    const u = e[t][1];
    if (r.push(e[t]), u.type === "labelImage" || u.type === "labelLink" || u.type === "labelEnd") {
      const o = u.type === "labelImage" ? 4 : 2;
      u.type = "data", t += o;
    }
  }
  return e.length !== r.length && ur(e, 0, e.length, r), e;
}
function dA(e, t) {
  let r = e.length, u = 0, o, a, l, c;
  for (; r--; )
    if (o = e[r][1], a) {
      if (o.type === "link" || o.type === "labelLink" && o._inactive)
        break;
      e[r][0] === "enter" && o.type === "labelLink" && (o._inactive = !0);
    } else if (l) {
      if (e[r][0] === "enter" && (o.type === "labelImage" || o.type === "labelLink") && !o._balanced && (a = r, o.type !== "labelLink")) {
        u = 2;
        break;
      }
    } else o.type === "labelEnd" && (l = r);
  const f = {
    type: e[a][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[a][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, h = {
    type: "label",
    start: {
      ...e[a][1].start
    },
    end: {
      ...e[l][1].end
    }
  }, p = {
    type: "labelText",
    start: {
      ...e[a + u + 2][1].end
    },
    end: {
      ...e[l - 2][1].start
    }
  };
  return c = [["enter", f, t], ["enter", h, t]], c = Dn(c, e.slice(a + 1, a + u + 3)), c = Dn(c, [["enter", p, t]]), c = Dn(c, Oc(t.parser.constructs.insideSpan.null, e.slice(a + u + 4, l - 3), t)), c = Dn(c, [["exit", p, t], e[l - 2], e[l - 1], ["exit", h, t]]), c = Dn(c, e.slice(l + 1)), c = Dn(c, [["exit", f, t]]), ur(e, a, e.length, c), e;
}
function hA(e, t, r) {
  const u = this;
  let o = u.events.length, a, l;
  for (; o--; )
    if ((u.events[o][1].type === "labelImage" || u.events[o][1].type === "labelLink") && !u.events[o][1]._balanced) {
      a = u.events[o][1];
      break;
    }
  return c;
  function c(v) {
    return a ? a._inactive ? g(v) : (l = u.parser.defined.includes(Zi(u.sliceSerialize({
      start: a.end,
      end: u.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(v), e.exit("labelMarker"), e.exit("labelEnd"), f) : r(v);
  }
  function f(v) {
    return v === 40 ? e.attempt(aA, p, l ? p : g)(v) : v === 91 ? e.attempt(lA, p, l ? h : g)(v) : l ? p(v) : g(v);
  }
  function h(v) {
    return e.attempt(cA, p, g)(v);
  }
  function p(v) {
    return t(v);
  }
  function g(v) {
    return a._balanced = !0, r(v);
  }
}
function pA(e, t, r) {
  return u;
  function u(g) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(g), e.exit("resourceMarker"), o;
  }
  function o(g) {
    return cn(g) ? Hu(e, a)(g) : a(g);
  }
  function a(g) {
    return g === 41 ? p(g) : Qp(e, l, c, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(g);
  }
  function l(g) {
    return cn(g) ? Hu(e, f)(g) : p(g);
  }
  function c(g) {
    return r(g);
  }
  function f(g) {
    return g === 34 || g === 39 || g === 40 ? $p(e, h, r, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(g) : p(g);
  }
  function h(g) {
    return cn(g) ? Hu(e, p)(g) : p(g);
  }
  function p(g) {
    return g === 41 ? (e.enter("resourceMarker"), e.consume(g), e.exit("resourceMarker"), e.exit("resource"), t) : r(g);
  }
}
function gA(e, t, r) {
  const u = this;
  return o;
  function o(c) {
    return qp.call(u, e, a, l, "reference", "referenceMarker", "referenceString")(c);
  }
  function a(c) {
    return u.parser.defined.includes(Zi(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1))) ? t(c) : r(c);
  }
  function l(c) {
    return r(c);
  }
}
function mA(e, t, r) {
  return u;
  function u(a) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), o;
  }
  function o(a) {
    return a === 93 ? (e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), e.exit("reference"), t) : r(a);
  }
}
const bA = {
  name: "labelStartImage",
  resolveAll: _c.resolveAll,
  tokenize: yA
};
function yA(e, t, r) {
  const u = this;
  return o;
  function o(c) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(c), e.exit("labelImageMarker"), a;
  }
  function a(c) {
    return c === 91 ? (e.enter("labelMarker"), e.consume(c), e.exit("labelMarker"), e.exit("labelImage"), l) : r(c);
  }
  function l(c) {
    return c === 94 && "_hiddenFootnoteSupport" in u.parser.constructs ? r(c) : t(c);
  }
}
const vA = {
  name: "labelStartLink",
  resolveAll: _c.resolveAll,
  tokenize: IA
};
function IA(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), a;
  }
  function a(l) {
    return l === 94 && "_hiddenFootnoteSupport" in u.parser.constructs ? r(l) : t(l);
  }
}
const Rl = {
  name: "lineEnding",
  tokenize: CA
};
function CA(e, t) {
  return r;
  function r(u) {
    return e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), ct(e, t, "linePrefix");
  }
}
const As = {
  name: "thematicBreak",
  tokenize: xA
};
function xA(e, t, r) {
  let u = 0, o;
  return a;
  function a(h) {
    return e.enter("thematicBreak"), l(h);
  }
  function l(h) {
    return o = h, c(h);
  }
  function c(h) {
    return h === o ? (e.enter("thematicBreakSequence"), f(h)) : u >= 3 && (h === null || Ae(h)) ? (e.exit("thematicBreak"), t(h)) : r(h);
  }
  function f(h) {
    return h === o ? (e.consume(h), u++, f) : (e.exit("thematicBreakSequence"), je(h) ? ct(e, c, "whitespace")(h) : c(h));
  }
}
const on = {
  continuation: {
    tokenize: EA
  },
  exit: RA,
  name: "list",
  tokenize: SA
}, AA = {
  partial: !0,
  tokenize: PA
}, wA = {
  partial: !0,
  tokenize: FA
};
function SA(e, t, r) {
  const u = this, o = u.events[u.events.length - 1];
  let a = o && o[1].type === "linePrefix" ? o[2].sliceSerialize(o[1], !0).length : 0, l = 0;
  return c;
  function c(b) {
    const S = u.containerState.type || (b === 42 || b === 43 || b === 45 ? "listUnordered" : "listOrdered");
    if (S === "listUnordered" ? !u.containerState.marker || b === u.containerState.marker : jl(b)) {
      if (u.containerState.type || (u.containerState.type = S, e.enter(S, {
        _container: !0
      })), S === "listUnordered")
        return e.enter("listItemPrefix"), b === 42 || b === 45 ? e.check(As, r, h)(b) : h(b);
      if (!u.interrupt || b === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), f(b);
    }
    return r(b);
  }
  function f(b) {
    return jl(b) && ++l < 10 ? (e.consume(b), f) : (!u.interrupt || l < 2) && (u.containerState.marker ? b === u.containerState.marker : b === 41 || b === 46) ? (e.exit("listItemValue"), h(b)) : r(b);
  }
  function h(b) {
    return e.enter("listItemMarker"), e.consume(b), e.exit("listItemMarker"), u.containerState.marker = u.containerState.marker || b, e.check(
      Hs,
      // Can’t be empty when interrupting.
      u.interrupt ? r : p,
      e.attempt(AA, v, g)
    );
  }
  function p(b) {
    return u.containerState.initialBlankLine = !0, a++, v(b);
  }
  function g(b) {
    return je(b) ? (e.enter("listItemPrefixWhitespace"), e.consume(b), e.exit("listItemPrefixWhitespace"), v) : r(b);
  }
  function v(b) {
    return u.containerState.size = a + u.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(b);
  }
}
function EA(e, t, r) {
  const u = this;
  return u.containerState._closeFlow = void 0, e.check(Hs, o, a);
  function o(c) {
    return u.containerState.furtherBlankLines = u.containerState.furtherBlankLines || u.containerState.initialBlankLine, ct(e, t, "listItemIndent", u.containerState.size + 1)(c);
  }
  function a(c) {
    return u.containerState.furtherBlankLines || !je(c) ? (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, l(c)) : (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, e.attempt(wA, t, l)(c));
  }
  function l(c) {
    return u.containerState._closeFlow = !0, u.interrupt = void 0, ct(e, e.attempt(on, t, r), "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(c);
  }
}
function FA(e, t, r) {
  const u = this;
  return ct(e, o, "listItemIndent", u.containerState.size + 1);
  function o(a) {
    const l = u.events[u.events.length - 1];
    return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === u.containerState.size ? t(a) : r(a);
  }
}
function RA(e) {
  e.exit(this.containerState.type);
}
function PA(e, t, r) {
  const u = this;
  return ct(e, o, "listItemPrefixWhitespace", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function o(a) {
    const l = u.events[u.events.length - 1];
    return !je(a) && l && l[1].type === "listItemPrefixWhitespace" ? t(a) : r(a);
  }
}
const mh = {
  name: "setextUnderline",
  resolveTo: OA,
  tokenize: _A
};
function OA(e, t) {
  let r = e.length, u, o, a;
  for (; r--; )
    if (e[r][0] === "enter") {
      if (e[r][1].type === "content") {
        u = r;
        break;
      }
      e[r][1].type === "paragraph" && (o = r);
    } else
      e[r][1].type === "content" && e.splice(r, 1), !a && e[r][1].type === "definition" && (a = r);
  const l = {
    type: "setextHeading",
    start: {
      ...e[u][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[o][1].type = "setextHeadingText", a ? (e.splice(o, 0, ["enter", l, t]), e.splice(a + 1, 0, ["exit", e[u][1], t]), e[u][1].end = {
    ...e[a][1].end
  }) : e[u][1] = l, e.push(["exit", l, t]), e;
}
function _A(e, t, r) {
  const u = this;
  let o;
  return a;
  function a(h) {
    let p = u.events.length, g;
    for (; p--; )
      if (u.events[p][1].type !== "lineEnding" && u.events[p][1].type !== "linePrefix" && u.events[p][1].type !== "content") {
        g = u.events[p][1].type === "paragraph";
        break;
      }
    return !u.parser.lazy[u.now().line] && (u.interrupt || g) ? (e.enter("setextHeadingLine"), o = h, l(h)) : r(h);
  }
  function l(h) {
    return e.enter("setextHeadingLineSequence"), c(h);
  }
  function c(h) {
    return h === o ? (e.consume(h), c) : (e.exit("setextHeadingLineSequence"), je(h) ? ct(e, f, "lineSuffix")(h) : f(h));
  }
  function f(h) {
    return h === null || Ae(h) ? (e.exit("setextHeadingLine"), t(h)) : r(h);
  }
}
const TA = {
  tokenize: BA
};
function BA(e) {
  const t = this, r = e.attempt(
    // Try to parse a blank line.
    Hs,
    u,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, o, ct(e, e.attempt(this.parser.constructs.flow, o, e.attempt(Mx, o)), "linePrefix"))
  );
  return r;
  function u(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(a), e.exit("lineEndingBlank"), t.currentConstruct = void 0, r;
  }
  function o(a) {
    if (a === null) {
      e.consume(a);
      return;
    }
    return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), t.currentConstruct = void 0, r;
  }
}
const GA = {
  resolveAll: eg()
}, kA = Kp("string"), LA = Kp("text");
function Kp(e) {
  return {
    resolveAll: eg(e === "text" ? DA : void 0),
    tokenize: t
  };
  function t(r) {
    const u = this, o = this.parser.constructs[e], a = r.attempt(o, l, c);
    return l;
    function l(p) {
      return h(p) ? a(p) : c(p);
    }
    function c(p) {
      if (p === null) {
        r.consume(p);
        return;
      }
      return r.enter("data"), r.consume(p), f;
    }
    function f(p) {
      return h(p) ? (r.exit("data"), a(p)) : (r.consume(p), f);
    }
    function h(p) {
      if (p === null)
        return !0;
      const g = o[p];
      let v = -1;
      if (g)
        for (; ++v < g.length; ) {
          const b = g[v];
          if (!b.previous || b.previous.call(u, u.previous))
            return !0;
        }
      return !1;
    }
  }
}
function eg(e) {
  return t;
  function t(r, u) {
    let o = -1, a;
    for (; ++o <= r.length; )
      a === void 0 ? r[o] && r[o][1].type === "data" && (a = o, o++) : (!r[o] || r[o][1].type !== "data") && (o !== a + 2 && (r[a][1].end = r[o - 1][1].end, r.splice(a + 2, o - a - 2), o = a + 2), a = void 0);
    return e ? e(r, u) : r;
  }
}
function DA(e, t) {
  let r = 0;
  for (; ++r <= e.length; )
    if ((r === e.length || e[r][1].type === "lineEnding") && e[r - 1][1].type === "data") {
      const u = e[r - 1][1], o = t.sliceStream(u);
      let a = o.length, l = -1, c = 0, f;
      for (; a--; ) {
        const h = o[a];
        if (typeof h == "string") {
          for (l = h.length; h.charCodeAt(l - 1) === 32; )
            c++, l--;
          if (l) break;
          l = -1;
        } else if (h === -2)
          f = !0, c++;
        else if (h !== -1) {
          a++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && r === e.length && (c = 0), c) {
        const h = {
          type: r === e.length || f || c < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: a ? l : u.start._bufferIndex + l,
            _index: u.start._index + a,
            line: u.end.line,
            column: u.end.column - c,
            offset: u.end.offset - c
          },
          end: {
            ...u.end
          }
        };
        u.end = {
          ...h.start
        }, u.start.offset === u.end.offset ? Object.assign(u, h) : (e.splice(r, 0, ["enter", h, t], ["exit", h, t]), r += 2);
      }
      r++;
    }
  return e;
}
const MA = {
  42: on,
  43: on,
  45: on,
  48: on,
  49: on,
  50: on,
  51: on,
  52: on,
  53: on,
  54: on,
  55: on,
  56: on,
  57: on,
  62: Yp
}, NA = {
  91: Hx
}, VA = {
  [-2]: Fl,
  [-1]: Fl,
  32: Fl
}, WA = {
  35: jx,
  42: As,
  45: [mh, As],
  60: Kx,
  61: mh,
  95: As,
  96: ph,
  126: ph
}, XA = {
  38: Up,
  92: Jp
}, HA = {
  [-5]: Rl,
  [-4]: Rl,
  [-3]: Rl,
  33: bA,
  38: Up,
  42: Ql,
  60: [vx, oA],
  91: vA,
  92: [Jx, Jp],
  93: _c,
  95: Ql,
  96: Tx
}, zA = {
  null: [Ql, GA]
}, ZA = {
  null: [42, 95]
}, YA = {
  null: []
}, JA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: ZA,
  contentInitial: NA,
  disable: YA,
  document: MA,
  flow: WA,
  flowInitial: VA,
  insideSpan: zA,
  string: XA,
  text: HA
}, Symbol.toStringTag, { value: "Module" }));
function UA(e, t, r) {
  let u = {
    _bufferIndex: -1,
    _index: 0,
    line: r && r.line || 1,
    column: r && r.column || 1,
    offset: r && r.offset || 0
  };
  const o = {}, a = [];
  let l = [], c = [];
  const f = {
    attempt: j(U),
    check: j(G),
    consume: W,
    enter: k,
    exit: N,
    interrupt: j(G, {
      interrupt: !0
    })
  }, h = {
    code: null,
    containerState: {},
    defineSkip: A,
    events: [],
    now: S,
    parser: e,
    previous: null,
    sliceSerialize: v,
    sliceStream: b,
    write: g
  };
  let p = t.tokenize.call(h, f);
  return t.resolveAll && a.push(t), h;
  function g(Q) {
    return l = Dn(l, Q), F(), l[l.length - 1] !== null ? [] : (M(t, 0), h.events = Oc(a, h.events, h), h.events);
  }
  function v(Q, z) {
    return QA(b(Q), z);
  }
  function b(Q) {
    return jA(l, Q);
  }
  function S() {
    const {
      _bufferIndex: Q,
      _index: z,
      line: ee,
      column: de,
      offset: ie
    } = u;
    return {
      _bufferIndex: Q,
      _index: z,
      line: ee,
      column: de,
      offset: ie
    };
  }
  function A(Q) {
    o[Q.line] = Q.column, K();
  }
  function F() {
    let Q;
    for (; u._index < l.length; ) {
      const z = l[u._index];
      if (typeof z == "string")
        for (Q = u._index, u._bufferIndex < 0 && (u._bufferIndex = 0); u._index === Q && u._bufferIndex < z.length; )
          P(z.charCodeAt(u._bufferIndex));
      else
        P(z);
    }
  }
  function P(Q) {
    p = p(Q);
  }
  function W(Q) {
    Ae(Q) ? (u.line++, u.column = 1, u.offset += Q === -3 ? 2 : 1, K()) : Q !== -1 && (u.column++, u.offset++), u._bufferIndex < 0 ? u._index++ : (u._bufferIndex++, u._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    l[u._index].length && (u._bufferIndex = -1, u._index++)), h.previous = Q;
  }
  function k(Q, z) {
    const ee = z || {};
    return ee.type = Q, ee.start = S(), h.events.push(["enter", ee, h]), c.push(ee), ee;
  }
  function N(Q) {
    const z = c.pop();
    return z.end = S(), h.events.push(["exit", z, h]), z;
  }
  function U(Q, z) {
    M(Q, z.from);
  }
  function G(Q, z) {
    z.restore();
  }
  function j(Q, z) {
    return ee;
    function ee(de, ie, xe) {
      let we, Fe, Je, w;
      return Array.isArray(de) ? (
        /* c8 ignore next 1 */
        Ge(de)
      ) : "tokenize" in de ? (
        // Looks like a construct.
        Ge([
          /** @type {Construct} */
          de
        ])
      ) : Ie(de);
      function Ie(Se) {
        return wt;
        function wt(De) {
          const gt = De !== null && Se[De], Vt = De !== null && Se.null, Gt = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(gt) ? gt : gt ? [gt] : [],
            ...Array.isArray(Vt) ? Vt : Vt ? [Vt] : []
          ];
          return Ge(Gt)(De);
        }
      }
      function Ge(Se) {
        return we = Se, Fe = 0, Se.length === 0 ? xe : E(Se[Fe]);
      }
      function E(Se) {
        return wt;
        function wt(De) {
          return w = Y(), Je = Se, Se.partial || (h.currentConstruct = Se), Se.name && h.parser.constructs.disable.null.includes(Se.name) ? ce() : Se.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            z ? Object.assign(Object.create(h), z) : h,
            f,
            Ye,
            ce
          )(De);
        }
      }
      function Ye(Se) {
        return Q(Je, w), ie;
      }
      function ce(Se) {
        return w.restore(), ++Fe < we.length ? E(we[Fe]) : xe;
      }
    }
  }
  function M(Q, z) {
    Q.resolveAll && !a.includes(Q) && a.push(Q), Q.resolve && ur(h.events, z, h.events.length - z, Q.resolve(h.events.slice(z), h)), Q.resolveTo && (h.events = Q.resolveTo(h.events, h));
  }
  function Y() {
    const Q = S(), z = h.previous, ee = h.currentConstruct, de = h.events.length, ie = Array.from(c);
    return {
      from: de,
      restore: xe
    };
    function xe() {
      u = Q, h.previous = z, h.currentConstruct = ee, h.events.length = de, c = ie, K();
    }
  }
  function K() {
    u.line in o && u.column < 2 && (u.column = o[u.line], u.offset += o[u.line] - 1);
  }
}
function jA(e, t) {
  const r = t.start._index, u = t.start._bufferIndex, o = t.end._index, a = t.end._bufferIndex;
  let l;
  if (r === o)
    l = [e[r].slice(u, a)];
  else {
    if (l = e.slice(r, o), u > -1) {
      const c = l[0];
      typeof c == "string" ? l[0] = c.slice(u) : l.shift();
    }
    a > 0 && l.push(e[o].slice(0, a));
  }
  return l;
}
function QA(e, t) {
  let r = -1;
  const u = [];
  let o;
  for (; ++r < e.length; ) {
    const a = e[r];
    let l;
    if (typeof a == "string")
      l = a;
    else switch (a) {
      case -5: {
        l = "\r";
        break;
      }
      case -4: {
        l = `
`;
        break;
      }
      case -3: {
        l = `\r
`;
        break;
      }
      case -2: {
        l = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && o) continue;
        l = " ";
        break;
      }
      default:
        l = String.fromCharCode(a);
    }
    o = a === -2, u.push(l);
  }
  return u.join("");
}
function qA(e) {
  const u = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      ix([JA, ...(e || {}).extensions || []])
    ),
    content: o(dx),
    defined: [],
    document: o(px),
    flow: o(TA),
    lazy: {},
    string: o(kA),
    text: o(LA)
  };
  return u;
  function o(a) {
    return l;
    function l(c) {
      return UA(u, a, c);
    }
  }
}
function $A(e) {
  for (; !jp(e); )
    ;
  return e;
}
const bh = /[\0\t\n\r]/g;
function KA() {
  let e = 1, t = "", r = !0, u;
  return o;
  function o(a, l, c) {
    const f = [];
    let h, p, g, v, b;
    for (a = t + (typeof a == "string" ? a.toString() : new TextDecoder(l || void 0).decode(a)), g = 0, t = "", r && (a.charCodeAt(0) === 65279 && g++, r = void 0); g < a.length; ) {
      if (bh.lastIndex = g, h = bh.exec(a), v = h && h.index !== void 0 ? h.index : a.length, b = a.charCodeAt(v), !h) {
        t = a.slice(g);
        break;
      }
      if (b === 10 && g === v && u)
        f.push(-3), u = void 0;
      else
        switch (u && (f.push(-5), u = void 0), g < v && (f.push(a.slice(g, v)), e += v - g), b) {
          case 0: {
            f.push(65533), e++;
            break;
          }
          case 9: {
            for (p = Math.ceil(e / 4) * 4, f.push(-2); e++ < p; ) f.push(-1);
            break;
          }
          case 10: {
            f.push(-4), e = 1;
            break;
          }
          default:
            u = !0, e = 1;
        }
      g = v + 1;
    }
    return c && (u && f.push(-5), t && f.push(t), f.push(null)), f;
  }
}
const ew = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function tw(e) {
  return e.replace(ew, nw);
}
function nw(e, t, r) {
  if (t)
    return t;
  if (r.charCodeAt(0) === 35) {
    const o = r.charCodeAt(1), a = o === 120 || o === 88;
    return Zp(r.slice(a ? 2 : 1), a ? 16 : 10);
  }
  return Pc(r) || e;
}
const tg = {}.hasOwnProperty;
function rw(e, t, r) {
  return typeof t != "string" && (r = t, t = void 0), iw(r)($A(qA(r).document().write(KA()(e, t, !0))));
}
function iw(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(at),
      autolinkProtocol: Y,
      autolinkEmail: Y,
      atxHeading: a(te),
      blockQuote: a(Vt),
      characterEscape: Y,
      characterReference: Y,
      codeFenced: a(Gt),
      codeFencedFenceInfo: l,
      codeFencedFenceMeta: l,
      codeIndented: a(Gt, l),
      codeText: a(kt, l),
      codeTextData: Y,
      data: Y,
      codeFlowValue: Y,
      definition: a(wn),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: a(It),
      hardBreakEscape: a(oe),
      hardBreakTrailing: a(oe),
      htmlFlow: a(le, l),
      htmlFlowData: Y,
      htmlText: a(le, l),
      htmlTextData: Y,
      image: a(Ve),
      label: l,
      link: a(at),
      listItem: a(Lt),
      listItemValue: v,
      listOrdered: a(mt, g),
      listUnordered: a(mt),
      paragraph: a(Nn),
      reference: E,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: a(te),
      strong: a(tt),
      thematicBreak: a(Qe)
    },
    exit: {
      atxHeading: f(),
      atxHeadingSequence: U,
      autolink: f(),
      autolinkEmail: gt,
      autolinkProtocol: De,
      blockQuote: f(),
      characterEscapeValue: K,
      characterReferenceMarkerHexadecimal: ce,
      characterReferenceMarkerNumeric: ce,
      characterReferenceValue: Se,
      characterReference: wt,
      codeFenced: f(F),
      codeFencedFence: A,
      codeFencedFenceInfo: b,
      codeFencedFenceMeta: S,
      codeFlowValue: K,
      codeIndented: f(P),
      codeText: f(ie),
      codeTextData: K,
      data: K,
      definition: f(),
      definitionDestinationString: N,
      definitionLabelString: W,
      definitionTitleString: k,
      emphasis: f(),
      hardBreakEscape: f(z),
      hardBreakTrailing: f(z),
      htmlFlow: f(ee),
      htmlFlowData: K,
      htmlText: f(de),
      htmlTextData: K,
      image: f(we),
      label: Je,
      labelText: Fe,
      lineEnding: Q,
      link: f(xe),
      listItem: f(),
      listOrdered: f(),
      listUnordered: f(),
      paragraph: f(),
      referenceString: Ye,
      resourceDestinationString: w,
      resourceTitleString: Ie,
      resource: Ge,
      setextHeading: f(M),
      setextHeadingLineSequence: j,
      setextHeadingText: G,
      strong: f(),
      thematicBreak: f()
    }
  };
  ng(t, (e || {}).mdastExtensions || []);
  const r = {};
  return u;
  function u(L) {
    let q = {
      type: "root",
      children: []
    };
    const pe = {
      stack: [q],
      tokenStack: [],
      config: t,
      enter: c,
      exit: h,
      buffer: l,
      resume: p,
      data: r
    }, _e = [];
    let Te = -1;
    for (; ++Te < L.length; )
      if (L[Te][1].type === "listOrdered" || L[Te][1].type === "listUnordered")
        if (L[Te][0] === "enter")
          _e.push(Te);
        else {
          const _t = _e.pop();
          Te = o(L, _t, Te);
        }
    for (Te = -1; ++Te < L.length; ) {
      const _t = t[L[Te][0]];
      tg.call(_t, L[Te][1].type) && _t[L[Te][1].type].call(Object.assign({
        sliceSerialize: L[Te][2].sliceSerialize
      }, pe), L[Te][1]);
    }
    if (pe.tokenStack.length > 0) {
      const _t = pe.tokenStack[pe.tokenStack.length - 1];
      (_t[1] || yh).call(pe, void 0, _t[0]);
    }
    for (q.position = {
      start: kr(L.length > 0 ? L[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: kr(L.length > 0 ? L[L.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, Te = -1; ++Te < t.transforms.length; )
      q = t.transforms[Te](q) || q;
    return q;
  }
  function o(L, q, pe) {
    let _e = q - 1, Te = -1, _t = !1, $t, Zt, Sn, Kt;
    for (; ++_e <= pe; ) {
      const St = L[_e];
      switch (St[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          St[0] === "enter" ? Te++ : Te--, Kt = void 0;
          break;
        }
        case "lineEndingBlank": {
          St[0] === "enter" && ($t && !Kt && !Te && !Sn && (Sn = _e), Kt = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Kt = void 0;
      }
      if (!Te && St[0] === "enter" && St[1].type === "listItemPrefix" || Te === -1 && St[0] === "exit" && (St[1].type === "listUnordered" || St[1].type === "listOrdered")) {
        if ($t) {
          let hn = _e;
          for (Zt = void 0; hn--; ) {
            const pn = L[hn];
            if (pn[1].type === "lineEnding" || pn[1].type === "lineEndingBlank") {
              if (pn[0] === "exit") continue;
              Zt && (L[Zt][1].type = "lineEndingBlank", _t = !0), pn[1].type = "lineEnding", Zt = hn;
            } else if (!(pn[1].type === "linePrefix" || pn[1].type === "blockQuotePrefix" || pn[1].type === "blockQuotePrefixWhitespace" || pn[1].type === "blockQuoteMarker" || pn[1].type === "listItemIndent")) break;
          }
          Sn && (!Zt || Sn < Zt) && ($t._spread = !0), $t.end = Object.assign({}, Zt ? L[Zt][1].start : St[1].end), L.splice(Zt || _e, 0, ["exit", $t, St[2]]), _e++, pe++;
        }
        if (St[1].type === "listItemPrefix") {
          const hn = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, St[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          $t = hn, L.splice(_e, 0, ["enter", hn, St[2]]), _e++, pe++, Sn = void 0, Kt = !0;
        }
      }
    }
    return L[q][1]._spread = _t, pe;
  }
  function a(L, q) {
    return pe;
    function pe(_e) {
      c.call(this, L(_e), _e), q && q.call(this, _e);
    }
  }
  function l() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function c(L, q, pe) {
    this.stack[this.stack.length - 1].children.push(L), this.stack.push(L), this.tokenStack.push([q, pe || void 0]), L.position = {
      start: kr(q.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function f(L) {
    return q;
    function q(pe) {
      L && L.call(this, pe), h.call(this, pe);
    }
  }
  function h(L, q) {
    const pe = this.stack.pop(), _e = this.tokenStack.pop();
    if (_e)
      _e[0].type !== L.type && (q ? q.call(this, L, _e[0]) : (_e[1] || yh).call(this, L, _e[0]));
    else throw new Error("Cannot close `" + L.type + "` (" + Xu({
      start: L.start,
      end: L.end
    }) + "): it’s not open");
    pe.position.end = kr(L.end);
  }
  function p() {
    return nx(this.stack.pop());
  }
  function g() {
    this.data.expectingFirstListItemValue = !0;
  }
  function v(L) {
    if (this.data.expectingFirstListItemValue) {
      const q = this.stack[this.stack.length - 2];
      q.start = Number.parseInt(this.sliceSerialize(L), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function b() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.lang = L;
  }
  function S() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.meta = L;
  }
  function A() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function F() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = L.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function P() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = L.replace(/(\r?\n|\r)$/g, "");
  }
  function W(L) {
    const q = this.resume(), pe = this.stack[this.stack.length - 1];
    pe.label = q, pe.identifier = Zi(this.sliceSerialize(L)).toLowerCase();
  }
  function k() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.title = L;
  }
  function N() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.url = L;
  }
  function U(L) {
    const q = this.stack[this.stack.length - 1];
    if (!q.depth) {
      const pe = this.sliceSerialize(L).length;
      q.depth = pe;
    }
  }
  function G() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function j(L) {
    const q = this.stack[this.stack.length - 1];
    q.depth = this.sliceSerialize(L).codePointAt(0) === 61 ? 1 : 2;
  }
  function M() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function Y(L) {
    const pe = this.stack[this.stack.length - 1].children;
    let _e = pe[pe.length - 1];
    (!_e || _e.type !== "text") && (_e = nt(), _e.position = {
      start: kr(L.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, pe.push(_e)), this.stack.push(_e);
  }
  function K(L) {
    const q = this.stack.pop();
    q.value += this.sliceSerialize(L), q.position.end = kr(L.end);
  }
  function Q(L) {
    const q = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const pe = q.children[q.children.length - 1];
      pe.position.end = kr(L.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(q.type) && (Y.call(this, L), K.call(this, L));
  }
  function z() {
    this.data.atHardBreak = !0;
  }
  function ee() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = L;
  }
  function de() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = L;
  }
  function ie() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.value = L;
  }
  function xe() {
    const L = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const q = this.data.referenceType || "shortcut";
      L.type += "Reference", L.referenceType = q, delete L.url, delete L.title;
    } else
      delete L.identifier, delete L.label;
    this.data.referenceType = void 0;
  }
  function we() {
    const L = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const q = this.data.referenceType || "shortcut";
      L.type += "Reference", L.referenceType = q, delete L.url, delete L.title;
    } else
      delete L.identifier, delete L.label;
    this.data.referenceType = void 0;
  }
  function Fe(L) {
    const q = this.sliceSerialize(L), pe = this.stack[this.stack.length - 2];
    pe.label = tw(q), pe.identifier = Zi(q).toLowerCase();
  }
  function Je() {
    const L = this.stack[this.stack.length - 1], q = this.resume(), pe = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, pe.type === "link") {
      const _e = L.children;
      pe.children = _e;
    } else
      pe.alt = q;
  }
  function w() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.url = L;
  }
  function Ie() {
    const L = this.resume(), q = this.stack[this.stack.length - 1];
    q.title = L;
  }
  function Ge() {
    this.data.inReference = void 0;
  }
  function E() {
    this.data.referenceType = "collapsed";
  }
  function Ye(L) {
    const q = this.resume(), pe = this.stack[this.stack.length - 1];
    pe.label = q, pe.identifier = Zi(this.sliceSerialize(L)).toLowerCase(), this.data.referenceType = "full";
  }
  function ce(L) {
    this.data.characterReferenceType = L.type;
  }
  function Se(L) {
    const q = this.sliceSerialize(L), pe = this.data.characterReferenceType;
    let _e;
    pe ? (_e = Zp(q, pe === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : _e = Pc(q);
    const Te = this.stack[this.stack.length - 1];
    Te.value += _e;
  }
  function wt(L) {
    const q = this.stack.pop();
    q.position.end = kr(L.end);
  }
  function De(L) {
    K.call(this, L);
    const q = this.stack[this.stack.length - 1];
    q.url = this.sliceSerialize(L);
  }
  function gt(L) {
    K.call(this, L);
    const q = this.stack[this.stack.length - 1];
    q.url = "mailto:" + this.sliceSerialize(L);
  }
  function Vt() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function Gt() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function kt() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function wn() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function It() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function te() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function oe() {
    return {
      type: "break"
    };
  }
  function le() {
    return {
      type: "html",
      value: ""
    };
  }
  function Ve() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function at() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function mt(L) {
    return {
      type: "list",
      ordered: L.type === "listOrdered",
      start: null,
      spread: L._spread,
      children: []
    };
  }
  function Lt(L) {
    return {
      type: "listItem",
      spread: L._spread,
      checked: null,
      children: []
    };
  }
  function Nn() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function tt() {
    return {
      type: "strong",
      children: []
    };
  }
  function nt() {
    return {
      type: "text",
      value: ""
    };
  }
  function Qe() {
    return {
      type: "thematicBreak"
    };
  }
}
function kr(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function ng(e, t) {
  let r = -1;
  for (; ++r < t.length; ) {
    const u = t[r];
    Array.isArray(u) ? ng(e, u) : uw(e, u);
  }
}
function uw(e, t) {
  let r;
  for (r in t)
    if (tg.call(t, r))
      switch (r) {
        case "canContainEols": {
          const u = t[r];
          u && e[r].push(...u);
          break;
        }
        case "transforms": {
          const u = t[r];
          u && e[r].push(...u);
          break;
        }
        case "enter":
        case "exit": {
          const u = t[r];
          u && Object.assign(e[r], u);
          break;
        }
      }
}
function yh(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + Xu({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + Xu({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + Xu({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function ow(e) {
  const t = this;
  t.parser = r;
  function r(u) {
    return rw(u, {
      ...t.data("settings"),
      ...e,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: t.data("micromarkExtensions") || [],
      mdastExtensions: t.data("fromMarkdownExtensions") || []
    });
  }
}
function sw(e, t) {
  const r = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function aw(e, t) {
  const r = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, r), [e.applyData(t, r), { type: "text", value: `
` }];
}
function lw(e, t) {
  const r = t.value ? t.value + `
` : "", u = {};
  t.lang && (u.className = ["language-" + t.lang]);
  let o = {
    type: "element",
    tagName: "code",
    properties: u,
    children: [{ type: "text", value: r }]
  };
  return t.meta && (o.data = { meta: t.meta }), e.patch(t, o), o = e.applyData(t, o), o = { type: "element", tagName: "pre", properties: {}, children: [o] }, e.patch(t, o), o;
}
function cw(e, t) {
  const r = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function fw(e, t) {
  const r = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function dw(e, t) {
  const r = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", u = String(t.identifier).toUpperCase(), o = lu(u.toLowerCase()), a = e.footnoteOrder.indexOf(u);
  let l, c = e.footnoteCounts.get(u);
  c === void 0 ? (c = 0, e.footnoteOrder.push(u), l = e.footnoteOrder.length) : l = a + 1, c += 1, e.footnoteCounts.set(u, c);
  const f = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + r + "fn-" + o,
      id: r + "fnref-" + o + (c > 1 ? "-" + c : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(l) }]
  };
  e.patch(t, f);
  const h = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [f]
  };
  return e.patch(t, h), e.applyData(t, h);
}
function hw(e, t) {
  const r = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function pw(e, t) {
  if (e.options.allowDangerousHtml) {
    const r = { type: "raw", value: t.value };
    return e.patch(t, r), e.applyData(t, r);
  }
}
function rg(e, t) {
  const r = t.referenceType;
  let u = "]";
  if (r === "collapsed" ? u += "[]" : r === "full" && (u += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + u }];
  const o = e.all(t), a = o[0];
  a && a.type === "text" ? a.value = "[" + a.value : o.unshift({ type: "text", value: "[" });
  const l = o[o.length - 1];
  return l && l.type === "text" ? l.value += u : o.push({ type: "text", value: u }), o;
}
function gw(e, t) {
  const r = String(t.identifier).toUpperCase(), u = e.definitionById.get(r);
  if (!u)
    return rg(e, t);
  const o = { src: lu(u.url || ""), alt: t.alt };
  u.title !== null && u.title !== void 0 && (o.title = u.title);
  const a = { type: "element", tagName: "img", properties: o, children: [] };
  return e.patch(t, a), e.applyData(t, a);
}
function mw(e, t) {
  const r = { src: lu(t.url) };
  t.alt !== null && t.alt !== void 0 && (r.alt = t.alt), t.title !== null && t.title !== void 0 && (r.title = t.title);
  const u = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(t, u), e.applyData(t, u);
}
function bw(e, t) {
  const r = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, r);
  const u = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [r]
  };
  return e.patch(t, u), e.applyData(t, u);
}
function yw(e, t) {
  const r = String(t.identifier).toUpperCase(), u = e.definitionById.get(r);
  if (!u)
    return rg(e, t);
  const o = { href: lu(u.url || "") };
  u.title !== null && u.title !== void 0 && (o.title = u.title);
  const a = {
    type: "element",
    tagName: "a",
    properties: o,
    children: e.all(t)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function vw(e, t) {
  const r = { href: lu(t.url) };
  t.title !== null && t.title !== void 0 && (r.title = t.title);
  const u = {
    type: "element",
    tagName: "a",
    properties: r,
    children: e.all(t)
  };
  return e.patch(t, u), e.applyData(t, u);
}
function Iw(e, t, r) {
  const u = e.all(t), o = r ? Cw(r) : ig(t), a = {}, l = [];
  if (typeof t.checked == "boolean") {
    const p = u[0];
    let g;
    p && p.type === "element" && p.tagName === "p" ? g = p : (g = { type: "element", tagName: "p", properties: {}, children: [] }, u.unshift(g)), g.children.length > 0 && g.children.unshift({ type: "text", value: " " }), g.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), a.className = ["task-list-item"];
  }
  let c = -1;
  for (; ++c < u.length; ) {
    const p = u[c];
    (o || c !== 0 || p.type !== "element" || p.tagName !== "p") && l.push({ type: "text", value: `
` }), p.type === "element" && p.tagName === "p" && !o ? l.push(...p.children) : l.push(p);
  }
  const f = u[u.length - 1];
  f && (o || f.type !== "element" || f.tagName !== "p") && l.push({ type: "text", value: `
` });
  const h = { type: "element", tagName: "li", properties: a, children: l };
  return e.patch(t, h), e.applyData(t, h);
}
function Cw(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const r = e.children;
    let u = -1;
    for (; !t && ++u < r.length; )
      t = ig(r[u]);
  }
  return t;
}
function ig(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function xw(e, t) {
  const r = {}, u = e.all(t);
  let o = -1;
  for (typeof t.start == "number" && t.start !== 1 && (r.start = t.start); ++o < u.length; ) {
    const l = u[o];
    if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
      r.className = ["contains-task-list"];
      break;
    }
  }
  const a = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: r,
    children: e.wrap(u, !0)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function Aw(e, t) {
  const r = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function ww(e, t) {
  const r = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, r), e.applyData(t, r);
}
function Sw(e, t) {
  const r = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Ew(e, t) {
  const r = e.all(t), u = r.shift(), o = [];
  if (u) {
    const l = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([u], !0)
    };
    e.patch(t.children[0], l), o.push(l);
  }
  if (r.length > 0) {
    const l = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(r, !0)
    }, c = Sc(t.children[1]), f = Mp(t.children[t.children.length - 1]);
    c && f && (l.position = { start: c, end: f }), o.push(l);
  }
  const a = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(o, !0)
  };
  return e.patch(t, a), e.applyData(t, a);
}
function Fw(e, t, r) {
  const u = r ? r.children : void 0, a = (u ? u.indexOf(t) : 1) === 0 ? "th" : "td", l = r && r.type === "table" ? r.align : void 0, c = l ? l.length : t.children.length;
  let f = -1;
  const h = [];
  for (; ++f < c; ) {
    const g = t.children[f], v = {}, b = l ? l[f] : void 0;
    b && (v.align = b);
    let S = { type: "element", tagName: a, properties: v, children: [] };
    g && (S.children = e.all(g), e.patch(g, S), S = e.applyData(g, S)), h.push(S);
  }
  const p = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(h, !0)
  };
  return e.patch(t, p), e.applyData(t, p);
}
function Rw(e, t) {
  const r = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
const vh = 9, Ih = 32;
function Pw(e) {
  const t = String(e), r = /\r?\n|\r/g;
  let u = r.exec(t), o = 0;
  const a = [];
  for (; u; )
    a.push(
      Ch(t.slice(o, u.index), o > 0, !0),
      u[0]
    ), o = u.index + u[0].length, u = r.exec(t);
  return a.push(Ch(t.slice(o), o > 0, !1)), a.join("");
}
function Ch(e, t, r) {
  let u = 0, o = e.length;
  if (t) {
    let a = e.codePointAt(u);
    for (; a === vh || a === Ih; )
      u++, a = e.codePointAt(u);
  }
  if (r) {
    let a = e.codePointAt(o - 1);
    for (; a === vh || a === Ih; )
      o--, a = e.codePointAt(o - 1);
  }
  return o > u ? e.slice(u, o) : "";
}
function Ow(e, t) {
  const r = { type: "text", value: Pw(String(t.value)) };
  return e.patch(t, r), e.applyData(t, r);
}
function _w(e, t) {
  const r = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, r), e.applyData(t, r);
}
const Tw = {
  blockquote: sw,
  break: aw,
  code: lw,
  delete: cw,
  emphasis: fw,
  footnoteReference: dw,
  heading: hw,
  html: pw,
  imageReference: gw,
  image: mw,
  inlineCode: bw,
  linkReference: yw,
  link: vw,
  listItem: Iw,
  list: xw,
  paragraph: Aw,
  // @ts-expect-error: root is different, but hard to type.
  root: ww,
  strong: Sw,
  table: Ew,
  tableCell: Rw,
  tableRow: Fw,
  text: Ow,
  thematicBreak: _w,
  toml: ms,
  yaml: ms,
  definition: ms,
  footnoteDefinition: ms
};
function ms() {
}
const ug = -1, zs = 0, zu = 1, Fs = 2, Tc = 3, Bc = 4, Gc = 5, kc = 6, og = 7, sg = 8, xh = typeof self == "object" ? self : globalThis, Bw = (e, t) => {
  const r = (o, a) => (e.set(a, o), o), u = (o) => {
    if (e.has(o))
      return e.get(o);
    const [a, l] = t[o];
    switch (a) {
      case zs:
      case ug:
        return r(l, o);
      case zu: {
        const c = r([], o);
        for (const f of l)
          c.push(u(f));
        return c;
      }
      case Fs: {
        const c = r({}, o);
        for (const [f, h] of l)
          c[u(f)] = u(h);
        return c;
      }
      case Tc:
        return r(new Date(l), o);
      case Bc: {
        const { source: c, flags: f } = l;
        return r(new RegExp(c, f), o);
      }
      case Gc: {
        const c = r(/* @__PURE__ */ new Map(), o);
        for (const [f, h] of l)
          c.set(u(f), u(h));
        return c;
      }
      case kc: {
        const c = r(/* @__PURE__ */ new Set(), o);
        for (const f of l)
          c.add(u(f));
        return c;
      }
      case og: {
        const { name: c, message: f } = l;
        return r(new xh[c](f), o);
      }
      case sg:
        return r(BigInt(l), o);
      case "BigInt":
        return r(Object(BigInt(l)), o);
      case "ArrayBuffer":
        return r(new Uint8Array(l).buffer, l);
      case "DataView": {
        const { buffer: c } = new Uint8Array(l);
        return r(new DataView(c), l);
      }
    }
    return r(new xh[a](l), o);
  };
  return u;
}, Ah = (e) => Bw(/* @__PURE__ */ new Map(), e)(0), Xi = "", { toString: Gw } = {}, { keys: kw } = Object, Du = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [zs, t];
  const r = Gw.call(e).slice(8, -1);
  switch (r) {
    case "Array":
      return [zu, Xi];
    case "Object":
      return [Fs, Xi];
    case "Date":
      return [Tc, Xi];
    case "RegExp":
      return [Bc, Xi];
    case "Map":
      return [Gc, Xi];
    case "Set":
      return [kc, Xi];
    case "DataView":
      return [zu, r];
  }
  return r.includes("Array") ? [zu, r] : r.includes("Error") ? [og, r] : [Fs, r];
}, bs = ([e, t]) => e === zs && (t === "function" || t === "symbol"), Lw = (e, t, r, u) => {
  const o = (l, c) => {
    const f = u.push(l) - 1;
    return r.set(c, f), f;
  }, a = (l) => {
    if (r.has(l))
      return r.get(l);
    let [c, f] = Du(l);
    switch (c) {
      case zs: {
        let p = l;
        switch (f) {
          case "bigint":
            c = sg, p = l.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + f);
            p = null;
            break;
          case "undefined":
            return o([ug], l);
        }
        return o([c, p], l);
      }
      case zu: {
        if (f) {
          let v = l;
          return f === "DataView" ? v = new Uint8Array(l.buffer) : f === "ArrayBuffer" && (v = new Uint8Array(l)), o([f, [...v]], l);
        }
        const p = [], g = o([c, p], l);
        for (const v of l)
          p.push(a(v));
        return g;
      }
      case Fs: {
        if (f)
          switch (f) {
            case "BigInt":
              return o([f, l.toString()], l);
            case "Boolean":
            case "Number":
            case "String":
              return o([f, l.valueOf()], l);
          }
        if (t && "toJSON" in l)
          return a(l.toJSON());
        const p = [], g = o([c, p], l);
        for (const v of kw(l))
          (e || !bs(Du(l[v]))) && p.push([a(v), a(l[v])]);
        return g;
      }
      case Tc:
        return o([c, l.toISOString()], l);
      case Bc: {
        const { source: p, flags: g } = l;
        return o([c, { source: p, flags: g }], l);
      }
      case Gc: {
        const p = [], g = o([c, p], l);
        for (const [v, b] of l)
          (e || !(bs(Du(v)) || bs(Du(b)))) && p.push([a(v), a(b)]);
        return g;
      }
      case kc: {
        const p = [], g = o([c, p], l);
        for (const v of l)
          (e || !bs(Du(v))) && p.push(a(v));
        return g;
      }
    }
    const { message: h } = l;
    return o([c, { name: f, message: h }], l);
  };
  return a;
}, wh = (e, { json: t, lossy: r } = {}) => {
  const u = [];
  return Lw(!(t || r), !!t, /* @__PURE__ */ new Map(), u)(e), u;
}, Rs = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Ah(wh(e, t)) : structuredClone(e)
) : (e, t) => Ah(wh(e, t));
function Dw(e, t) {
  const r = [{ type: "text", value: "↩" }];
  return t > 1 && r.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), r;
}
function Mw(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Nw(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = e.options.footnoteBackContent || Dw, u = e.options.footnoteBackLabel || Mw, o = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", l = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, c = [];
  let f = -1;
  for (; ++f < e.footnoteOrder.length; ) {
    const h = e.footnoteById.get(
      e.footnoteOrder[f]
    );
    if (!h)
      continue;
    const p = e.all(h), g = String(h.identifier).toUpperCase(), v = lu(g.toLowerCase());
    let b = 0;
    const S = [], A = e.footnoteCounts.get(g);
    for (; A !== void 0 && ++b <= A; ) {
      S.length > 0 && S.push({ type: "text", value: " " });
      let W = typeof r == "string" ? r : r(f, b);
      typeof W == "string" && (W = { type: "text", value: W }), S.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + v + (b > 1 ? "-" + b : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof u == "string" ? u : u(f, b),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(W) ? W : [W]
      });
    }
    const F = p[p.length - 1];
    if (F && F.type === "element" && F.tagName === "p") {
      const W = F.children[F.children.length - 1];
      W && W.type === "text" ? W.value += " " : F.children.push({ type: "text", value: " " }), F.children.push(...S);
    } else
      p.push(...S);
    const P = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + v },
      children: e.wrap(p, !0)
    };
    e.patch(h, P), c.push(P);
  }
  if (c.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: a,
          properties: {
            ...Rs(l),
            id: "footnote-label"
          },
          children: [{ type: "text", value: o }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(c, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const ag = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(e) {
    if (e == null)
      return Hw;
    if (typeof e == "function")
      return Zs(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Vw(e) : Ww(e);
    if (typeof e == "string")
      return Xw(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Vw(e) {
  const t = [];
  let r = -1;
  for (; ++r < e.length; )
    t[r] = ag(e[r]);
  return Zs(u);
  function u(...o) {
    let a = -1;
    for (; ++a < t.length; )
      if (t[a].apply(this, o)) return !0;
    return !1;
  }
}
function Ww(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Zs(r);
  function r(u) {
    const o = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      u
    );
    let a;
    for (a in e)
      if (o[a] !== t[a]) return !1;
    return !0;
  }
}
function Xw(e) {
  return Zs(t);
  function t(r) {
    return r && r.type === e;
  }
}
function Zs(e) {
  return t;
  function t(r, u, o) {
    return !!(zw(r) && e.call(
      this,
      r,
      typeof u == "number" ? u : void 0,
      o || void 0
    ));
  }
}
function Hw() {
  return !0;
}
function zw(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const lg = [], Zw = !0, Sh = !1, Yw = "skip";
function Jw(e, t, r, u) {
  let o;
  typeof t == "function" && typeof r != "function" ? (u = r, r = t) : o = t;
  const a = ag(o), l = u ? -1 : 1;
  c(e, void 0, [])();
  function c(f, h, p) {
    const g = (
      /** @type {Record<string, unknown>} */
      f && typeof f == "object" ? f : {}
    );
    if (typeof g.type == "string") {
      const b = (
        // `hast`
        typeof g.tagName == "string" ? g.tagName : (
          // `xast`
          typeof g.name == "string" ? g.name : void 0
        )
      );
      Object.defineProperty(v, "name", {
        value: "node (" + (f.type + (b ? "<" + b + ">" : "")) + ")"
      });
    }
    return v;
    function v() {
      let b = lg, S, A, F;
      if ((!t || a(f, h, p[p.length - 1] || void 0)) && (b = Uw(r(f, p)), b[0] === Sh))
        return b;
      if ("children" in f && f.children) {
        const P = (
          /** @type {UnistParent} */
          f
        );
        if (P.children && b[0] !== Yw)
          for (A = (u ? P.children.length : -1) + l, F = p.concat(P); A > -1 && A < P.children.length; ) {
            const W = P.children[A];
            if (S = c(W, A, F)(), S[0] === Sh)
              return S;
            A = typeof S[1] == "number" ? S[1] : A + l;
          }
      }
      return b;
    }
  }
}
function Uw(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Zw, e] : e == null ? lg : [e];
}
function cg(e, t, r, u) {
  let o, a, l;
  typeof t == "function" ? (a = void 0, l = t, o = r) : (a = t, l = r, o = u), Jw(e, a, c, o);
  function c(f, h) {
    const p = h[h.length - 1], g = p ? p.children.indexOf(f) : void 0;
    return l(f, g, p);
  }
}
const ql = {}.hasOwnProperty, jw = {};
function Qw(e, t) {
  const r = t || jw, u = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), l = { ...Tw, ...r.handlers }, c = {
    all: h,
    applyData: $w,
    definitionById: u,
    footnoteById: o,
    footnoteCounts: a,
    footnoteOrder: [],
    handlers: l,
    one: f,
    options: r,
    patch: qw,
    wrap: eS
  };
  return cg(e, function(p) {
    if (p.type === "definition" || p.type === "footnoteDefinition") {
      const g = p.type === "definition" ? u : o, v = String(p.identifier).toUpperCase();
      g.has(v) || g.set(v, p);
    }
  }), c;
  function f(p, g) {
    const v = p.type, b = c.handlers[v];
    if (ql.call(c.handlers, v) && b)
      return b(c, p, g);
    if (c.options.passThrough && c.options.passThrough.includes(v)) {
      if ("children" in p) {
        const { children: A, ...F } = p, P = Rs(F);
        return P.children = c.all(p), P;
      }
      return Rs(p);
    }
    return (c.options.unknownHandler || Kw)(c, p, g);
  }
  function h(p) {
    const g = [];
    if ("children" in p) {
      const v = p.children;
      let b = -1;
      for (; ++b < v.length; ) {
        const S = c.one(v[b], p);
        if (S) {
          if (b && v[b - 1].type === "break" && (!Array.isArray(S) && S.type === "text" && (S.value = Eh(S.value)), !Array.isArray(S) && S.type === "element")) {
            const A = S.children[0];
            A && A.type === "text" && (A.value = Eh(A.value));
          }
          Array.isArray(S) ? g.push(...S) : g.push(S);
        }
      }
    }
    return g;
  }
}
function qw(e, t) {
  e.position && (t.position = GC(e));
}
function $w(e, t) {
  let r = t;
  if (e && e.data) {
    const u = e.data.hName, o = e.data.hChildren, a = e.data.hProperties;
    if (typeof u == "string")
      if (r.type === "element")
        r.tagName = u;
      else {
        const l = "children" in r ? r.children : [r];
        r = { type: "element", tagName: u, properties: {}, children: l };
      }
    r.type === "element" && a && Object.assign(r.properties, Rs(a)), "children" in r && r.children && o !== null && o !== void 0 && (r.children = o);
  }
  return r;
}
function Kw(e, t) {
  const r = t.data || {}, u = "value" in t && !(ql.call(r, "hProperties") || ql.call(r, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, u), e.applyData(t, u);
}
function eS(e, t) {
  const r = [];
  let u = -1;
  for (t && r.push({ type: "text", value: `
` }); ++u < e.length; )
    u && r.push({ type: "text", value: `
` }), r.push(e[u]);
  return t && e.length > 0 && r.push({ type: "text", value: `
` }), r;
}
function Eh(e) {
  let t = 0, r = e.charCodeAt(t);
  for (; r === 9 || r === 32; )
    t++, r = e.charCodeAt(t);
  return e.slice(t);
}
function Fh(e, t) {
  const r = Qw(e, t), u = r.one(e, void 0), o = Nw(r), a = Array.isArray(u) ? { type: "root", children: u } : u || { type: "root", children: [] };
  return o && a.children.push({ type: "text", value: `
` }, o), a;
}
function tS(e, t) {
  return e && "run" in e ? async function(r, u) {
    const o = (
      /** @type {HastRoot} */
      Fh(r, { file: u, ...t })
    );
    await e.run(o, u);
  } : function(r, u) {
    return (
      /** @type {HastRoot} */
      Fh(r, { file: u, ...e || t })
    );
  };
}
function Rh(e) {
  if (e)
    throw e;
}
var ws = Object.prototype.hasOwnProperty, fg = Object.prototype.toString, Ph = Object.defineProperty, Oh = Object.getOwnPropertyDescriptor, _h = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : fg.call(t) === "[object Array]";
}, Th = function(t) {
  if (!t || fg.call(t) !== "[object Object]")
    return !1;
  var r = ws.call(t, "constructor"), u = t.constructor && t.constructor.prototype && ws.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !r && !u)
    return !1;
  var o;
  for (o in t)
    ;
  return typeof o > "u" || ws.call(t, o);
}, Bh = function(t, r) {
  Ph && r.name === "__proto__" ? Ph(t, r.name, {
    enumerable: !0,
    configurable: !0,
    value: r.newValue,
    writable: !0
  }) : t[r.name] = r.newValue;
}, Gh = function(t, r) {
  if (r === "__proto__")
    if (ws.call(t, r)) {
      if (Oh)
        return Oh(t, r).value;
    } else return;
  return t[r];
}, nS = function e() {
  var t, r, u, o, a, l, c = arguments[0], f = 1, h = arguments.length, p = !1;
  for (typeof c == "boolean" && (p = c, c = arguments[1] || {}, f = 2), (c == null || typeof c != "object" && typeof c != "function") && (c = {}); f < h; ++f)
    if (t = arguments[f], t != null)
      for (r in t)
        u = Gh(c, r), o = Gh(t, r), c !== o && (p && o && (Th(o) || (a = _h(o))) ? (a ? (a = !1, l = u && _h(u) ? u : []) : l = u && Th(u) ? u : {}, Bh(c, { name: r, newValue: e(p, l, o) })) : typeof o < "u" && Bh(c, { name: r, newValue: o }));
  return c;
};
const Pl = /* @__PURE__ */ Ws(nS);
function $l(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function rS() {
  const e = [], t = { run: r, use: u };
  return t;
  function r(...o) {
    let a = -1;
    const l = o.pop();
    if (typeof l != "function")
      throw new TypeError("Expected function as last argument, not " + l);
    c(null, ...o);
    function c(f, ...h) {
      const p = e[++a];
      let g = -1;
      if (f) {
        l(f);
        return;
      }
      for (; ++g < o.length; )
        (h[g] === null || h[g] === void 0) && (h[g] = o[g]);
      o = h, p ? iS(p, c)(...h) : l(null, ...h);
    }
  }
  function u(o) {
    if (typeof o != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + o
      );
    return e.push(o), t;
  }
}
function iS(e, t) {
  let r;
  return u;
  function u(...l) {
    const c = e.length > l.length;
    let f;
    c && l.push(o);
    try {
      f = e.apply(this, l);
    } catch (h) {
      const p = (
        /** @type {Error} */
        h
      );
      if (c && r)
        throw p;
      return o(p);
    }
    c || (f && f.then && typeof f.then == "function" ? f.then(a, o) : f instanceof Error ? o(f) : a(f));
  }
  function o(l, ...c) {
    r || (r = !0, t(l, ...c));
  }
  function a(l) {
    o(null, l);
  }
}
const er = { basename: uS, dirname: oS, extname: sS, join: aS, sep: "/" };
function uS(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  ro(e);
  let r = 0, u = -1, o = e.length, a;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; o--; )
      if (e.codePointAt(o) === 47) {
        if (a) {
          r = o + 1;
          break;
        }
      } else u < 0 && (a = !0, u = o + 1);
    return u < 0 ? "" : e.slice(r, u);
  }
  if (t === e)
    return "";
  let l = -1, c = t.length - 1;
  for (; o--; )
    if (e.codePointAt(o) === 47) {
      if (a) {
        r = o + 1;
        break;
      }
    } else
      l < 0 && (a = !0, l = o + 1), c > -1 && (e.codePointAt(o) === t.codePointAt(c--) ? c < 0 && (u = o) : (c = -1, u = l));
  return r === u ? u = l : u < 0 && (u = e.length), e.slice(r, u);
}
function oS(e) {
  if (ro(e), e.length === 0)
    return ".";
  let t = -1, r = e.length, u;
  for (; --r; )
    if (e.codePointAt(r) === 47) {
      if (u) {
        t = r;
        break;
      }
    } else u || (u = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function sS(e) {
  ro(e);
  let t = e.length, r = -1, u = 0, o = -1, a = 0, l;
  for (; t--; ) {
    const c = e.codePointAt(t);
    if (c === 47) {
      if (l) {
        u = t + 1;
        break;
      }
      continue;
    }
    r < 0 && (l = !0, r = t + 1), c === 46 ? o < 0 ? o = t : a !== 1 && (a = 1) : o > -1 && (a = -1);
  }
  return o < 0 || r < 0 || // We saw a non-dot character immediately before the dot.
  a === 0 || // The (right-most) trimmed path component is exactly `..`.
  a === 1 && o === r - 1 && o === u + 1 ? "" : e.slice(o, r);
}
function aS(...e) {
  let t = -1, r;
  for (; ++t < e.length; )
    ro(e[t]), e[t] && (r = r === void 0 ? e[t] : r + "/" + e[t]);
  return r === void 0 ? "." : lS(r);
}
function lS(e) {
  ro(e);
  const t = e.codePointAt(0) === 47;
  let r = cS(e, !t);
  return r.length === 0 && !t && (r = "."), r.length > 0 && e.codePointAt(e.length - 1) === 47 && (r += "/"), t ? "/" + r : r;
}
function cS(e, t) {
  let r = "", u = 0, o = -1, a = 0, l = -1, c, f;
  for (; ++l <= e.length; ) {
    if (l < e.length)
      c = e.codePointAt(l);
    else {
      if (c === 47)
        break;
      c = 47;
    }
    if (c === 47) {
      if (!(o === l - 1 || a === 1)) if (o !== l - 1 && a === 2) {
        if (r.length < 2 || u !== 2 || r.codePointAt(r.length - 1) !== 46 || r.codePointAt(r.length - 2) !== 46) {
          if (r.length > 2) {
            if (f = r.lastIndexOf("/"), f !== r.length - 1) {
              f < 0 ? (r = "", u = 0) : (r = r.slice(0, f), u = r.length - 1 - r.lastIndexOf("/")), o = l, a = 0;
              continue;
            }
          } else if (r.length > 0) {
            r = "", u = 0, o = l, a = 0;
            continue;
          }
        }
        t && (r = r.length > 0 ? r + "/.." : "..", u = 2);
      } else
        r.length > 0 ? r += "/" + e.slice(o + 1, l) : r = e.slice(o + 1, l), u = l - o - 1;
      o = l, a = 0;
    } else c === 46 && a > -1 ? a++ : a = -1;
  }
  return r;
}
function ro(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const fS = { cwd: dS };
function dS() {
  return "/";
}
function Kl(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function hS(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Kl(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return pS(e);
}
function pS(e) {
  if (e.hostname !== "") {
    const u = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw u.code = "ERR_INVALID_FILE_URL_HOST", u;
  }
  const t = e.pathname;
  let r = -1;
  for (; ++r < t.length; )
    if (t.codePointAt(r) === 37 && t.codePointAt(r + 1) === 50) {
      const u = t.codePointAt(r + 2);
      if (u === 70 || u === 102) {
        const o = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw o.code = "ERR_INVALID_FILE_URL_PATH", o;
      }
    }
  return decodeURIComponent(t);
}
const Ol = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class dg {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(t) {
    let r;
    t ? Kl(t) ? r = { path: t } : typeof t == "string" || gS(t) ? r = { value: t } : r = t : r = {}, this.cwd = "cwd" in r ? "" : fS.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let u = -1;
    for (; ++u < Ol.length; ) {
      const a = Ol[u];
      a in r && r[a] !== void 0 && r[a] !== null && (this[a] = a === "history" ? [...r[a]] : r[a]);
    }
    let o;
    for (o in r)
      Ol.includes(o) || (this[o] = r[o]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? er.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(t) {
    Tl(t, "basename"), _l(t, "basename"), this.path = er.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? er.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(t) {
    kh(this.basename, "dirname"), this.path = er.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? er.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(t) {
    if (_l(t, "extname"), kh(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = er.join(this.dirname, this.stem + (t || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(t) {
    Kl(t) && (t = hS(t)), Tl(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? er.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(t) {
    Tl(t, "stem"), _l(t, "stem"), this.path = er.join(this.dirname || "", t + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(t, r, u) {
    const o = this.message(t, r, u);
    throw o.fatal = !0, o;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(t, r, u) {
    const o = this.message(t, r, u);
    return o.fatal = void 0, o;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(t, r, u) {
    const o = new zt(
      // @ts-expect-error: the overloads are fine.
      t,
      r,
      u
    );
    return this.path && (o.name = this.path + ":" + o.name, o.file = this.path), o.fatal = !1, this.messages.push(o), o;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(t) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
  }
}
function _l(e, t) {
  if (e && e.includes(er.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + er.sep + "`"
    );
}
function Tl(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function kh(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function gS(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const mS = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(e) {
    const u = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), o = u[e], a = function() {
      return o.apply(a, arguments);
    };
    return Object.setPrototypeOf(a, u), a;
  }
), bS = {}.hasOwnProperty;
class Lc extends mS {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = rS();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const t = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new Lc()
    );
    let r = -1;
    for (; ++r < this.attachers.length; ) {
      const u = this.attachers[r];
      t.use(...u);
    }
    return t.data(Pl(!0, {}, this.namespace)), t;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(t, r) {
    return typeof t == "string" ? arguments.length === 2 ? (kl("data", this.frozen), this.namespace[t] = r, this) : bS.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (kl("data", this.frozen), this.namespace = t, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const t = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [r, ...u] = this.attachers[this.freezeIndex];
      if (u[0] === !1)
        continue;
      u[0] === !0 && (u[0] = void 0);
      const o = r.call(t, ...u);
      typeof o == "function" && this.transformers.use(o);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(t) {
    this.freeze();
    const r = ys(t), u = this.parser || this.Parser;
    return Bl("parse", u), u(String(r), r);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(t, r) {
    const u = this;
    return this.freeze(), Bl("process", this.parser || this.Parser), Gl("process", this.compiler || this.Compiler), r ? o(void 0, r) : new Promise(o);
    function o(a, l) {
      const c = ys(t), f = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        u.parse(c)
      );
      u.run(f, c, function(p, g, v) {
        if (p || !g || !v)
          return h(p);
        const b = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          g
        ), S = u.stringify(b, v);
        IS(S) ? v.value = S : v.result = S, h(
          p,
          /** @type {VFileWithOutput<CompileResult>} */
          v
        );
      });
      function h(p, g) {
        p || !g ? l(p) : a ? a(g) : r(void 0, g);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(t) {
    let r = !1, u;
    return this.freeze(), Bl("processSync", this.parser || this.Parser), Gl("processSync", this.compiler || this.Compiler), this.process(t, o), Dh("processSync", "process", r), u;
    function o(a, l) {
      r = !0, Rh(a), u = l;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(t, r, u) {
    Lh(t), this.freeze();
    const o = this.transformers;
    return !u && typeof r == "function" && (u = r, r = void 0), u ? a(void 0, u) : new Promise(a);
    function a(l, c) {
      const f = ys(r);
      o.run(t, f, h);
      function h(p, g, v) {
        const b = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          g || t
        );
        p ? c(p) : l ? l(b) : u(void 0, b, v);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(t, r) {
    let u = !1, o;
    return this.run(t, r, a), Dh("runSync", "run", u), o;
    function a(l, c) {
      Rh(l), o = c, u = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(t, r) {
    this.freeze();
    const u = ys(r), o = this.compiler || this.Compiler;
    return Gl("stringify", o), Lh(t), o(t, u);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(t, ...r) {
    const u = this.attachers, o = this.namespace;
    if (kl("use", this.frozen), t != null) if (typeof t == "function")
      f(t, r);
    else if (typeof t == "object")
      Array.isArray(t) ? c(t) : l(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function a(h) {
      if (typeof h == "function")
        f(h, []);
      else if (typeof h == "object")
        if (Array.isArray(h)) {
          const [p, ...g] = (
            /** @type {PluginTuple<Array<unknown>>} */
            h
          );
          f(p, g);
        } else
          l(h);
      else
        throw new TypeError("Expected usable value, not `" + h + "`");
    }
    function l(h) {
      if (!("plugins" in h) && !("settings" in h))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      c(h.plugins), h.settings && (o.settings = Pl(!0, o.settings, h.settings));
    }
    function c(h) {
      let p = -1;
      if (h != null) if (Array.isArray(h))
        for (; ++p < h.length; ) {
          const g = h[p];
          a(g);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + h + "`");
    }
    function f(h, p) {
      let g = -1, v = -1;
      for (; ++g < u.length; )
        if (u[g][0] === h) {
          v = g;
          break;
        }
      if (v === -1)
        u.push([h, ...p]);
      else if (p.length > 0) {
        let [b, ...S] = p;
        const A = u[v][1];
        $l(A) && $l(b) && (b = Pl(!0, A, b)), u[v] = [h, b, ...S];
      }
    }
  }
}
const yS = new Lc().freeze();
function Bl(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Gl(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function kl(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Lh(e) {
  if (!$l(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Dh(e, t, r) {
  if (!r)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function ys(e) {
  return vS(e) ? e : new dg(e);
}
function vS(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function IS(e) {
  return typeof e == "string" || CS(e);
}
function CS(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const xS = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Mh = [], Nh = { allowDangerousHtml: !0 }, AS = /^(https?|ircs?|mailto|xmpp)$/i, wS = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function hg(e) {
  const t = SS(e), r = ES(e);
  return FS(t.runSync(t.parse(r), r), e);
}
function SS(e) {
  const t = e.rehypePlugins || Mh, r = e.remarkPlugins || Mh, u = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Nh } : Nh;
  return yS().use(ow).use(r).use(tS, u).use(t);
}
function ES(e) {
  const t = e.children || "", r = new dg();
  return typeof t == "string" && (r.value = t), r;
}
function FS(e, t) {
  const r = t.allowedElements, u = t.allowElement, o = t.components, a = t.disallowedElements, l = t.skipHtml, c = t.unwrapDisallowed, f = t.urlTransform || RS;
  for (const p of wS)
    Object.hasOwn(t, p.from) && ("" + p.from + (p.to ? "use `" + p.to + "` instead" : "remove it") + xS + p.id, void 0);
  return t.className && (e = {
    type: "element",
    tagName: "div",
    properties: { className: t.className },
    // Assume no doctypes.
    children: (
      /** @type {Array<ElementContent>} */
      e.type === "root" ? e.children : [e]
    )
  }), cg(e, h), NC(e, {
    Fragment: Yu,
    // @ts-expect-error
    // React components are allowed to return numbers,
    // but not according to the types in hast-util-to-jsx-runtime
    components: o,
    ignoreInvalidStyle: !0,
    jsx: re,
    jsxs: Mn,
    passKeys: !0,
    passNode: !0
  });
  function h(p, g, v) {
    if (p.type === "raw" && v && typeof g == "number")
      return l ? v.children.splice(g, 1) : v.children[g] = { type: "text", value: p.value }, g;
    if (p.type === "element") {
      let b;
      for (b in El)
        if (Object.hasOwn(El, b) && Object.hasOwn(p.properties, b)) {
          const S = p.properties[b], A = El[b];
          (A === null || A.includes(p.tagName)) && (p.properties[b] = f(String(S || ""), b, p));
        }
    }
    if (p.type === "element") {
      let b = r ? !r.includes(p.tagName) : a ? a.includes(p.tagName) : !1;
      if (!b && u && typeof g == "number" && (b = !u(p, g, v)), b && v && typeof g == "number")
        return c && p.children ? v.children.splice(g, 1, ...p.children) : v.children.splice(g, 1), g;
    }
  }
}
function RS(e) {
  const t = e.indexOf(":"), r = e.indexOf("?"), u = e.indexOf("#"), o = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    o !== -1 && t > o || r !== -1 && t > r || u !== -1 && t > u || // It is a protocol, it should be allowed.
    AS.test(e.slice(0, t)) ? e : ""
  );
}
function ec({ prop: e }) {
  const t = {
    width: "100%",
    background: "#e2e3e5",
    borderRadius: "5px",
    paddingTop: "2px",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingBottom: "2px",
    display: "none"
  }, r = {
    ...t,
    background: "#fff3cd"
  }, u = {
    ...t,
    background: "#d1ecf1"
  }, o = {
    ...t,
    background: "#f8d7da"
  }, a = {
    ...t,
    background: "#fffff2"
  };
  let l = {};
  switch (e.alertType) {
    case "info":
      l = u;
      break;
    case "neutral":
      l = a;
      break;
    case "warning":
      l = r;
      break;
    case "error":
      l = o;
      break;
    default:
      l = t;
  }
  return /* @__PURE__ */ re("div", { className: `pd-alert-${e.alertType}`, style: l, children: /* @__PURE__ */ re(
    hg,
    {
      components: {
        a: ({ ...c }) => /* @__PURE__ */ re("a", { ...c, target: "_blank", rel: "noopener noreferrer" })
      },
      children: e.content
    }
  ) });
}
var io = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, bi = typeof window > "u" || "Deno" in globalThis;
function Ln() {
}
function PS(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function tc(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function pg(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Yi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Un(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vh(e, t) {
  const {
    type: r = "all",
    exact: u,
    fetchStatus: o,
    predicate: a,
    queryKey: l,
    stale: c
  } = e;
  if (l) {
    if (u) {
      if (t.queryHash !== Dc(l, t.options))
        return !1;
    } else if (!ju(t.queryKey, l))
      return !1;
  }
  if (r !== "all") {
    const f = t.isActive();
    if (r === "active" && !f || r === "inactive" && f)
      return !1;
  }
  return !(typeof c == "boolean" && t.isStale() !== c || o && o !== t.state.fetchStatus || a && !a(t));
}
function Wh(e, t) {
  const { exact: r, status: u, predicate: o, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey)
      return !1;
    if (r) {
      if (Uu(t.options.mutationKey) !== Uu(a))
        return !1;
    } else if (!ju(t.options.mutationKey, a))
      return !1;
  }
  return !(u && t.state.status !== u || o && !o(t));
}
function Dc(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Uu)(e);
}
function Uu(e) {
  return JSON.stringify(
    e,
    (t, r) => ic(r) ? Object.keys(r).sort().reduce((u, o) => (u[o] = r[o], u), {}) : r
  );
}
function ju(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every((r) => ju(e[r], t[r])) : !1;
}
function nc(e, t) {
  if (e === t)
    return e;
  const r = Xh(e) && Xh(t);
  if (r || ic(e) && ic(t)) {
    const u = r ? e : Object.keys(e), o = u.length, a = r ? t : Object.keys(t), l = a.length, c = r ? [] : {};
    let f = 0;
    for (let h = 0; h < l; h++) {
      const p = r ? h : a[h];
      (!r && u.includes(p) || r) && e[p] === void 0 && t[p] === void 0 ? (c[p] = void 0, f++) : (c[p] = nc(e[p], t[p]), c[p] === e[p] && e[p] !== void 0 && f++);
    }
    return o === l && f === o ? e : c;
  }
  return t;
}
function rc(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Xh(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function ic(e) {
  if (!Hh(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(!Hh(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function Hh(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function OS(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function uc(e, t, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(e, t);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return nc(e, t);
      } catch (u) {
        throw console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${u}`
        ), u;
      }
    return nc(e, t);
  }
  return t;
}
function _S(e, t, r = 0) {
  const u = [...e, t];
  return r && u.length > r ? u.slice(1) : u;
}
function TS(e, t, r = 0) {
  const u = [t, ...e];
  return r && u.length > r ? u.slice(0, -1) : u;
}
var Ps = Symbol();
function gg(e, t) {
  return process.env.NODE_ENV !== "production" && e.queryFn === Ps && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`
  ), !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Ps ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var li, Dr, Ui, yp, BS = (yp = class extends io {
  constructor() {
    super();
    Ce(this, li);
    Ce(this, Dr);
    Ce(this, Ui);
    ae(this, Ui, (t) => {
      if (!bi && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    O(this, Dr) || this.setEventListener(O(this, Ui));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = O(this, Dr)) == null || t.call(this), ae(this, Dr, void 0));
  }
  setEventListener(t) {
    var r;
    ae(this, Ui, t), (r = O(this, Dr)) == null || r.call(this), ae(this, Dr, t((u) => {
      typeof u == "boolean" ? this.setFocused(u) : this.onFocus();
    }));
  }
  setFocused(t) {
    O(this, li) !== t && (ae(this, li, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((r) => {
      r(t);
    });
  }
  isFocused() {
    var t;
    return typeof O(this, li) == "boolean" ? O(this, li) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, li = new WeakMap(), Dr = new WeakMap(), Ui = new WeakMap(), yp), Mc = new BS(), ji, Mr, Qi, vp, GS = (vp = class extends io {
  constructor() {
    super();
    Ce(this, ji, !0);
    Ce(this, Mr);
    Ce(this, Qi);
    ae(this, Qi, (t) => {
      if (!bi && window.addEventListener) {
        const r = () => t(!0), u = () => t(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", u, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", u);
        };
      }
    });
  }
  onSubscribe() {
    O(this, Mr) || this.setEventListener(O(this, Qi));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = O(this, Mr)) == null || t.call(this), ae(this, Mr, void 0));
  }
  setEventListener(t) {
    var r;
    ae(this, Qi, t), (r = O(this, Mr)) == null || r.call(this), ae(this, Mr, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    O(this, ji) !== t && (ae(this, ji, t), this.listeners.forEach((u) => {
      u(t);
    }));
  }
  isOnline() {
    return O(this, ji);
  }
}, ji = new WeakMap(), Mr = new WeakMap(), Qi = new WeakMap(), vp), Os = new GS();
function oc() {
  let e, t;
  const r = new Promise((o, a) => {
    e = o, t = a;
  });
  r.status = "pending", r.catch(() => {
  });
  function u(o) {
    Object.assign(r, o), delete r.resolve, delete r.reject;
  }
  return r.resolve = (o) => {
    u({
      status: "fulfilled",
      value: o
    }), e(o);
  }, r.reject = (o) => {
    u({
      status: "rejected",
      reason: o
    }), t(o);
  }, r;
}
function kS(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function mg(e) {
  return (e ?? "online") === "online" ? Os.isOnline() : !0;
}
var bg = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function Ll(e) {
  return e instanceof bg;
}
function yg(e) {
  let t = !1, r = 0, u = !1, o;
  const a = oc(), l = (A) => {
    var F;
    u || (v(new bg(A)), (F = e.abort) == null || F.call(e));
  }, c = () => {
    t = !0;
  }, f = () => {
    t = !1;
  }, h = () => Mc.isFocused() && (e.networkMode === "always" || Os.isOnline()) && e.canRun(), p = () => mg(e.networkMode) && e.canRun(), g = (A) => {
    var F;
    u || (u = !0, (F = e.onSuccess) == null || F.call(e, A), o == null || o(), a.resolve(A));
  }, v = (A) => {
    var F;
    u || (u = !0, (F = e.onError) == null || F.call(e, A), o == null || o(), a.reject(A));
  }, b = () => new Promise((A) => {
    var F;
    o = (P) => {
      (u || h()) && A(P);
    }, (F = e.onPause) == null || F.call(e);
  }).then(() => {
    var A;
    o = void 0, u || (A = e.onContinue) == null || A.call(e);
  }), S = () => {
    if (u)
      return;
    let A;
    const F = r === 0 ? e.initialPromise : void 0;
    try {
      A = F ?? e.fn();
    } catch (P) {
      A = Promise.reject(P);
    }
    Promise.resolve(A).then(g).catch((P) => {
      var G;
      if (u)
        return;
      const W = e.retry ?? (bi ? 0 : 3), k = e.retryDelay ?? kS, N = typeof k == "function" ? k(r, P) : k, U = W === !0 || typeof W == "number" && r < W || typeof W == "function" && W(r, P);
      if (t || !U) {
        v(P);
        return;
      }
      r++, (G = e.onFail) == null || G.call(e, r, P), OS(N).then(() => h() ? void 0 : b()).then(() => {
        t ? v(P) : S();
      });
    });
  };
  return {
    promise: a,
    cancel: l,
    continue: () => (o == null || o(), a),
    cancelRetry: c,
    continueRetry: f,
    canStart: p,
    start: () => (p() ? S() : b().then(S), a)
  };
}
var LS = (e) => setTimeout(e, 0);
function DS() {
  let e = [], t = 0, r = (c) => {
    c();
  }, u = (c) => {
    c();
  }, o = LS;
  const a = (c) => {
    t ? e.push(c) : o(() => {
      r(c);
    });
  }, l = () => {
    const c = e;
    e = [], c.length && o(() => {
      u(() => {
        c.forEach((f) => {
          r(f);
        });
      });
    });
  };
  return {
    batch: (c) => {
      let f;
      t++;
      try {
        f = c();
      } finally {
        t--, t || l();
      }
      return f;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (c) => (...f) => {
      a(() => {
        c(...f);
      });
    },
    schedule: a,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (c) => {
      r = c;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (c) => {
      u = c;
    },
    setScheduler: (c) => {
      o = c;
    }
  };
}
var Nt = DS(), ci, Ip, vg = (Ip = class {
  constructor() {
    Ce(this, ci);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), tc(this.gcTime) && ae(this, ci, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (bi ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    O(this, ci) && (clearTimeout(O(this, ci)), ae(this, ci, void 0));
  }
}, ci = new WeakMap(), Ip), qi, $i, kn, fi, Ht, Qu, di, Yn, Ir, Cp, MS = (Cp = class extends vg {
  constructor(t) {
    super();
    Ce(this, Yn);
    Ce(this, qi);
    Ce(this, $i);
    Ce(this, kn);
    Ce(this, fi);
    Ce(this, Ht);
    Ce(this, Qu);
    Ce(this, di);
    ae(this, di, !1), ae(this, Qu, t.defaultOptions), this.setOptions(t.options), this.observers = [], ae(this, fi, t.client), ae(this, kn, O(this, fi).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, ae(this, qi, NS(this.options)), this.state = t.state ?? O(this, qi), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var t;
    return (t = O(this, Ht)) == null ? void 0 : t.promise;
  }
  setOptions(t) {
    this.options = { ...O(this, Qu), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && O(this, kn).remove(this);
  }
  setData(t, r) {
    const u = uc(this.state.data, t, this.options);
    return ze(this, Yn, Ir).call(this, {
      data: u,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), u;
  }
  setState(t, r) {
    ze(this, Yn, Ir).call(this, { type: "setState", state: t, setStateOptions: r });
  }
  cancel(t) {
    var u, o;
    const r = (u = O(this, Ht)) == null ? void 0 : u.promise;
    return (o = O(this, Ht)) == null || o.cancel(t), r ? r.then(Ln).catch(Ln) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(O(this, qi));
  }
  isActive() {
    return this.observers.some(
      (t) => Un(t.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Ps || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (t) => t.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !pg(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var r;
    const t = this.observers.find((u) => u.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = O(this, Ht)) == null || r.continue();
  }
  onOnline() {
    var r;
    const t = this.observers.find((u) => u.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = O(this, Ht)) == null || r.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), O(this, kn).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((r) => r !== t), this.observers.length || (O(this, Ht) && (O(this, di) ? O(this, Ht).cancel({ revert: !0 }) : O(this, Ht).cancelRetry()), this.scheduleGc()), O(this, kn).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || ze(this, Yn, Ir).call(this, { type: "invalidate" });
  }
  fetch(t, r) {
    var f, h, p;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (O(this, Ht))
        return O(this, Ht).continueRetry(), O(this, Ht).promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const g = this.observers.find((v) => v.options.queryFn);
      g && this.setOptions(g.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const u = new AbortController(), o = (g) => {
      Object.defineProperty(g, "signal", {
        enumerable: !0,
        get: () => (ae(this, di, !0), u.signal)
      });
    }, a = () => {
      const g = gg(this.options, r), v = {
        client: O(this, fi),
        queryKey: this.queryKey,
        meta: this.meta
      };
      return o(v), ae(this, di, !1), this.options.persister ? this.options.persister(
        g,
        v,
        this
      ) : g(v);
    }, l = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      client: O(this, fi),
      state: this.state,
      fetchFn: a
    };
    o(l), (f = this.options.behavior) == null || f.onFetch(
      l,
      this
    ), ae(this, $i, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((h = l.fetchOptions) == null ? void 0 : h.meta)) && ze(this, Yn, Ir).call(this, { type: "fetch", meta: (p = l.fetchOptions) == null ? void 0 : p.meta });
    const c = (g) => {
      var v, b, S, A;
      Ll(g) && g.silent || ze(this, Yn, Ir).call(this, {
        type: "error",
        error: g
      }), Ll(g) || ((b = (v = O(this, kn).config).onError) == null || b.call(
        v,
        g,
        this
      ), (A = (S = O(this, kn).config).onSettled) == null || A.call(
        S,
        this.state.data,
        g,
        this
      )), this.scheduleGc();
    };
    return ae(this, Ht, yg({
      initialPromise: r == null ? void 0 : r.initialPromise,
      fn: l.fetchFn,
      abort: u.abort.bind(u),
      onSuccess: (g) => {
        var v, b, S, A;
        if (g === void 0) {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), c(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(g);
        } catch (F) {
          c(F);
          return;
        }
        (b = (v = O(this, kn).config).onSuccess) == null || b.call(v, g, this), (A = (S = O(this, kn).config).onSettled) == null || A.call(
          S,
          g,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: c,
      onFail: (g, v) => {
        ze(this, Yn, Ir).call(this, { type: "failed", failureCount: g, error: v });
      },
      onPause: () => {
        ze(this, Yn, Ir).call(this, { type: "pause" });
      },
      onContinue: () => {
        ze(this, Yn, Ir).call(this, { type: "continue" });
      },
      retry: l.options.retry,
      retryDelay: l.options.retryDelay,
      networkMode: l.options.networkMode,
      canRun: () => !0
    })), O(this, Ht).start();
  }
}, qi = new WeakMap(), $i = new WeakMap(), kn = new WeakMap(), fi = new WeakMap(), Ht = new WeakMap(), Qu = new WeakMap(), di = new WeakMap(), Yn = new WeakSet(), Ir = function(t) {
  const r = (u) => {
    switch (t.type) {
      case "failed":
        return {
          ...u,
          fetchFailureCount: t.failureCount,
          fetchFailureReason: t.error
        };
      case "pause":
        return {
          ...u,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...u,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...u,
          ...Ig(u.data, this.options),
          fetchMeta: t.meta ?? null
        };
      case "success":
        return {
          ...u,
          data: t.data,
          dataUpdateCount: u.dataUpdateCount + 1,
          dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!t.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const o = t.error;
        return Ll(o) && o.revert && O(this, $i) ? { ...O(this, $i), fetchStatus: "idle" } : {
          ...u,
          error: o,
          errorUpdateCount: u.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: u.fetchFailureCount + 1,
          fetchFailureReason: o,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...u,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...u,
          ...t.state
        };
    }
  };
  this.state = r(this.state), Nt.batch(() => {
    this.observers.forEach((u) => {
      u.onQueryUpdate();
    }), O(this, kn).notify({ query: this, type: "updated", action: t });
  });
}, Cp);
function Ig(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: mg(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function NS(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, r = t !== void 0, u = r ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? u ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var tr, xp, VS = (xp = class extends io {
  constructor(t = {}) {
    super();
    Ce(this, tr);
    this.config = t, ae(this, tr, /* @__PURE__ */ new Map());
  }
  build(t, r, u) {
    const o = r.queryKey, a = r.queryHash ?? Dc(o, r);
    let l = this.get(a);
    return l || (l = new MS({
      client: t,
      queryKey: o,
      queryHash: a,
      options: t.defaultQueryOptions(r),
      state: u,
      defaultOptions: t.getQueryDefaults(o)
    }), this.add(l)), l;
  }
  add(t) {
    O(this, tr).has(t.queryHash) || (O(this, tr).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const r = O(this, tr).get(t.queryHash);
    r && (t.destroy(), r === t && O(this, tr).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    Nt.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return O(this, tr).get(t);
  }
  getAll() {
    return [...O(this, tr).values()];
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (u) => Vh(r, u)
    );
  }
  findAll(t = {}) {
    const r = this.getAll();
    return Object.keys(t).length > 0 ? r.filter((u) => Vh(t, u)) : r;
  }
  notify(t) {
    Nt.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  onFocus() {
    Nt.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    Nt.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, tr = new WeakMap(), xp), nr, Qt, hi, rr, Lr, Ap, WS = (Ap = class extends vg {
  constructor(t) {
    super();
    Ce(this, rr);
    Ce(this, nr);
    Ce(this, Qt);
    Ce(this, hi);
    this.mutationId = t.mutationId, ae(this, Qt, t.mutationCache), ae(this, nr, []), this.state = t.state || XS(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    O(this, nr).includes(t) || (O(this, nr).push(t), this.clearGcTimeout(), O(this, Qt).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    ae(this, nr, O(this, nr).filter((r) => r !== t)), this.scheduleGc(), O(this, Qt).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    O(this, nr).length || (this.state.status === "pending" ? this.scheduleGc() : O(this, Qt).remove(this));
  }
  continue() {
    var t;
    return ((t = O(this, hi)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var a, l, c, f, h, p, g, v, b, S, A, F, P, W, k, N, U, G, j, M;
    const r = () => {
      ze(this, rr, Lr).call(this, { type: "continue" });
    };
    ae(this, hi, yg({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (Y, K) => {
        ze(this, rr, Lr).call(this, { type: "failed", failureCount: Y, error: K });
      },
      onPause: () => {
        ze(this, rr, Lr).call(this, { type: "pause" });
      },
      onContinue: r,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => O(this, Qt).canRun(this)
    }));
    const u = this.state.status === "pending", o = !O(this, hi).canStart();
    try {
      if (u)
        r();
      else {
        ze(this, rr, Lr).call(this, { type: "pending", variables: t, isPaused: o }), await ((l = (a = O(this, Qt).config).onMutate) == null ? void 0 : l.call(
          a,
          t,
          this
        ));
        const K = await ((f = (c = this.options).onMutate) == null ? void 0 : f.call(c, t));
        K !== this.state.context && ze(this, rr, Lr).call(this, {
          type: "pending",
          context: K,
          variables: t,
          isPaused: o
        });
      }
      const Y = await O(this, hi).start();
      return await ((p = (h = O(this, Qt).config).onSuccess) == null ? void 0 : p.call(
        h,
        Y,
        t,
        this.state.context,
        this
      )), await ((v = (g = this.options).onSuccess) == null ? void 0 : v.call(g, Y, t, this.state.context)), await ((S = (b = O(this, Qt).config).onSettled) == null ? void 0 : S.call(
        b,
        Y,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((F = (A = this.options).onSettled) == null ? void 0 : F.call(A, Y, null, t, this.state.context)), ze(this, rr, Lr).call(this, { type: "success", data: Y }), Y;
    } catch (Y) {
      try {
        throw await ((W = (P = O(this, Qt).config).onError) == null ? void 0 : W.call(
          P,
          Y,
          t,
          this.state.context,
          this
        )), await ((N = (k = this.options).onError) == null ? void 0 : N.call(
          k,
          Y,
          t,
          this.state.context
        )), await ((G = (U = O(this, Qt).config).onSettled) == null ? void 0 : G.call(
          U,
          void 0,
          Y,
          this.state.variables,
          this.state.context,
          this
        )), await ((M = (j = this.options).onSettled) == null ? void 0 : M.call(
          j,
          void 0,
          Y,
          t,
          this.state.context
        )), Y;
      } finally {
        ze(this, rr, Lr).call(this, { type: "error", error: Y });
      }
    } finally {
      O(this, Qt).runNext(this);
    }
  }
}, nr = new WeakMap(), Qt = new WeakMap(), hi = new WeakMap(), rr = new WeakSet(), Lr = function(t) {
  const r = (u) => {
    switch (t.type) {
      case "failed":
        return {
          ...u,
          failureCount: t.failureCount,
          failureReason: t.error
        };
      case "pause":
        return {
          ...u,
          isPaused: !0
        };
      case "continue":
        return {
          ...u,
          isPaused: !1
        };
      case "pending":
        return {
          ...u,
          context: t.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: t.isPaused,
          status: "pending",
          variables: t.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...u,
          data: t.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...u,
          data: void 0,
          error: t.error,
          failureCount: u.failureCount + 1,
          failureReason: t.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = r(this.state), Nt.batch(() => {
    O(this, nr).forEach((u) => {
      u.onMutationUpdate(t);
    }), O(this, Qt).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, Ap);
function XS() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var Cr, Jn, qu, wp, HS = (wp = class extends io {
  constructor(t = {}) {
    super();
    Ce(this, Cr);
    Ce(this, Jn);
    Ce(this, qu);
    this.config = t, ae(this, Cr, /* @__PURE__ */ new Set()), ae(this, Jn, /* @__PURE__ */ new Map()), ae(this, qu, 0);
  }
  build(t, r, u) {
    const o = new WS({
      mutationCache: this,
      mutationId: ++gs(this, qu)._,
      options: t.defaultMutationOptions(r),
      state: u
    });
    return this.add(o), o;
  }
  add(t) {
    O(this, Cr).add(t);
    const r = vs(t);
    if (typeof r == "string") {
      const u = O(this, Jn).get(r);
      u ? u.push(t) : O(this, Jn).set(r, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (O(this, Cr).delete(t)) {
      const r = vs(t);
      if (typeof r == "string") {
        const u = O(this, Jn).get(r);
        if (u)
          if (u.length > 1) {
            const o = u.indexOf(t);
            o !== -1 && u.splice(o, 1);
          } else u[0] === t && O(this, Jn).delete(r);
      }
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    const r = vs(t);
    if (typeof r == "string") {
      const u = O(this, Jn).get(r), o = u == null ? void 0 : u.find(
        (a) => a.state.status === "pending"
      );
      return !o || o === t;
    } else
      return !0;
  }
  runNext(t) {
    var u;
    const r = vs(t);
    if (typeof r == "string") {
      const o = (u = O(this, Jn).get(r)) == null ? void 0 : u.find((a) => a !== t && a.state.isPaused);
      return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
    } else
      return Promise.resolve();
  }
  clear() {
    Nt.batch(() => {
      O(this, Cr).forEach((t) => {
        this.notify({ type: "removed", mutation: t });
      }), O(this, Cr).clear(), O(this, Jn).clear();
    });
  }
  getAll() {
    return Array.from(O(this, Cr));
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (u) => Wh(r, u)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((r) => Wh(t, r));
  }
  notify(t) {
    Nt.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((r) => r.state.isPaused);
    return Nt.batch(
      () => Promise.all(
        t.map((r) => r.continue().catch(Ln))
      )
    );
  }
}, Cr = new WeakMap(), Jn = new WeakMap(), qu = new WeakMap(), wp);
function vs(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function zh(e) {
  return {
    onFetch: (t, r) => {
      var p, g, v, b, S;
      const u = t.options, o = (v = (g = (p = t.fetchOptions) == null ? void 0 : p.meta) == null ? void 0 : g.fetchMore) == null ? void 0 : v.direction, a = ((b = t.state.data) == null ? void 0 : b.pages) || [], l = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
      let c = { pages: [], pageParams: [] }, f = 0;
      const h = async () => {
        let A = !1;
        const F = (k) => {
          Object.defineProperty(k, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? A = !0 : t.signal.addEventListener("abort", () => {
              A = !0;
            }), t.signal)
          });
        }, P = gg(t.options, t.fetchOptions), W = async (k, N, U) => {
          if (A)
            return Promise.reject();
          if (N == null && k.pages.length)
            return Promise.resolve(k);
          const G = {
            client: t.client,
            queryKey: t.queryKey,
            pageParam: N,
            direction: U ? "backward" : "forward",
            meta: t.options.meta
          };
          F(G);
          const j = await P(
            G
          ), { maxPages: M } = t.options, Y = U ? TS : _S;
          return {
            pages: Y(k.pages, j, M),
            pageParams: Y(k.pageParams, N, M)
          };
        };
        if (o && a.length) {
          const k = o === "backward", N = k ? zS : Zh, U = {
            pages: a,
            pageParams: l
          }, G = N(u, U);
          c = await W(U, G, k);
        } else {
          const k = e ?? a.length;
          do {
            const N = f === 0 ? l[0] ?? u.initialPageParam : Zh(u, c);
            if (f > 0 && N == null)
              break;
            c = await W(c, N), f++;
          } while (f < k);
        }
        return c;
      };
      t.options.persister ? t.fetchFn = () => {
        var A, F;
        return (F = (A = t.options).persister) == null ? void 0 : F.call(
          A,
          h,
          {
            client: t.client,
            queryKey: t.queryKey,
            meta: t.options.meta,
            signal: t.signal
          },
          r
        );
      } : t.fetchFn = h;
    }
  };
}
function Zh(e, { pages: t, pageParams: r }) {
  const u = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[u],
    t,
    r[u],
    r
  ) : void 0;
}
function zS(e, { pages: t, pageParams: r }) {
  var u;
  return t.length > 0 ? (u = e.getPreviousPageParam) == null ? void 0 : u.call(e, t[0], t, r[0], r) : void 0;
}
var yt, Nr, Vr, Ki, eu, Wr, tu, nu, Sp, ZS = (Sp = class {
  constructor(e = {}) {
    Ce(this, yt);
    Ce(this, Nr);
    Ce(this, Vr);
    Ce(this, Ki);
    Ce(this, eu);
    Ce(this, Wr);
    Ce(this, tu);
    Ce(this, nu);
    ae(this, yt, e.queryCache || new VS()), ae(this, Nr, e.mutationCache || new HS()), ae(this, Vr, e.defaultOptions || {}), ae(this, Ki, /* @__PURE__ */ new Map()), ae(this, eu, /* @__PURE__ */ new Map()), ae(this, Wr, 0);
  }
  mount() {
    gs(this, Wr)._++, O(this, Wr) === 1 && (ae(this, tu, Mc.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), O(this, yt).onFocus());
    })), ae(this, nu, Os.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), O(this, yt).onOnline());
    })));
  }
  unmount() {
    var e, t;
    gs(this, Wr)._--, O(this, Wr) === 0 && ((e = O(this, tu)) == null || e.call(this), ae(this, tu, void 0), (t = O(this, nu)) == null || t.call(this), ae(this, nu, void 0));
  }
  isFetching(e) {
    return O(this, yt).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return O(this, Nr).findAll({ ...e, status: "pending" }).length;
  }
  /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */
  getQueryData(e) {
    var r;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (r = O(this, yt).get(t.queryHash)) == null ? void 0 : r.state.data;
  }
  ensureQueryData(e) {
    const t = this.defaultQueryOptions(e), r = O(this, yt).build(this, t), u = r.state.data;
    return u === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && r.isStaleByTime(Yi(t.staleTime, r)) && this.prefetchQuery(t), Promise.resolve(u));
  }
  getQueriesData(e) {
    return O(this, yt).findAll(e).map(({ queryKey: t, state: r }) => {
      const u = r.data;
      return [t, u];
    });
  }
  setQueryData(e, t, r) {
    const u = this.defaultQueryOptions({ queryKey: e }), o = O(this, yt).get(
      u.queryHash
    ), a = o == null ? void 0 : o.state.data, l = PS(t, a);
    if (l !== void 0)
      return O(this, yt).build(this, u).setData(l, { ...r, manual: !0 });
  }
  setQueriesData(e, t, r) {
    return Nt.batch(
      () => O(this, yt).findAll(e).map(({ queryKey: u }) => [
        u,
        this.setQueryData(u, t, r)
      ])
    );
  }
  getQueryState(e) {
    var r;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (r = O(this, yt).get(
      t.queryHash
    )) == null ? void 0 : r.state;
  }
  removeQueries(e) {
    const t = O(this, yt);
    Nt.batch(() => {
      t.findAll(e).forEach((r) => {
        t.remove(r);
      });
    });
  }
  resetQueries(e, t) {
    const r = O(this, yt);
    return Nt.batch(() => (r.findAll(e).forEach((u) => {
      u.reset();
    }), this.refetchQueries(
      {
        type: "active",
        ...e
      },
      t
    )));
  }
  cancelQueries(e, t = {}) {
    const r = { revert: !0, ...t }, u = Nt.batch(
      () => O(this, yt).findAll(e).map((o) => o.cancel(r))
    );
    return Promise.all(u).then(Ln).catch(Ln);
  }
  invalidateQueries(e, t = {}) {
    return Nt.batch(() => (O(this, yt).findAll(e).forEach((r) => {
      r.invalidate();
    }), (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries(
      {
        ...e,
        type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
      },
      t
    )));
  }
  refetchQueries(e, t = {}) {
    const r = {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }, u = Nt.batch(
      () => O(this, yt).findAll(e).filter((o) => !o.isDisabled()).map((o) => {
        let a = o.fetch(void 0, r);
        return r.throwOnError || (a = a.catch(Ln)), o.state.fetchStatus === "paused" ? Promise.resolve() : a;
      })
    );
    return Promise.all(u).then(Ln);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const r = O(this, yt).build(this, t);
    return r.isStaleByTime(
      Yi(t.staleTime, r)
    ) ? r.fetch(t) : Promise.resolve(r.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(Ln).catch(Ln);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = zh(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(Ln).catch(Ln);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = zh(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return Os.isOnline() ? O(this, Nr).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return O(this, yt);
  }
  getMutationCache() {
    return O(this, Nr);
  }
  getDefaultOptions() {
    return O(this, Vr);
  }
  setDefaultOptions(e) {
    ae(this, Vr, e);
  }
  setQueryDefaults(e, t) {
    O(this, Ki).set(Uu(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...O(this, Ki).values()], r = {};
    return t.forEach((u) => {
      ju(e, u.queryKey) && Object.assign(r, u.defaultOptions);
    }), r;
  }
  setMutationDefaults(e, t) {
    O(this, eu).set(Uu(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...O(this, eu).values()], r = {};
    return t.forEach((u) => {
      ju(e, u.mutationKey) && Object.assign(r, u.defaultOptions);
    }), r;
  }
  defaultQueryOptions(e) {
    if (e._defaulted)
      return e;
    const t = {
      ...O(this, Vr).queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = Dc(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === Ps && (t.enabled = !1), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...O(this, Vr).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    O(this, yt).clear(), O(this, Nr).clear();
  }
}, yt = new WeakMap(), Nr = new WeakMap(), Vr = new WeakMap(), Ki = new WeakMap(), eu = new WeakMap(), Wr = new WeakMap(), tu = new WeakMap(), nu = new WeakMap(), Sp), sn, Ze, $u, qt, pi, ru, Xr, Hr, Ku, iu, uu, gi, mi, zr, ou, Ke, Nu, sc, ac, lc, cc, fc, dc, hc, Cg, Ep, YS = (Ep = class extends io {
  constructor(t, r) {
    super();
    Ce(this, Ke);
    Ce(this, sn);
    Ce(this, Ze);
    Ce(this, $u);
    Ce(this, qt);
    Ce(this, pi);
    Ce(this, ru);
    Ce(this, Xr);
    Ce(this, Hr);
    Ce(this, Ku);
    Ce(this, iu);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    Ce(this, uu);
    Ce(this, gi);
    Ce(this, mi);
    Ce(this, zr);
    Ce(this, ou, /* @__PURE__ */ new Set());
    this.options = r, ae(this, sn, t), ae(this, Hr, null), ae(this, Xr, oc()), this.options.experimental_prefetchInRender || O(this, Xr).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (O(this, Ze).addObserver(this), Yh(O(this, Ze), this.options) ? ze(this, Ke, Nu).call(this) : this.updateResult(), ze(this, Ke, cc).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return pc(
      O(this, Ze),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return pc(
      O(this, Ze),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), ze(this, Ke, fc).call(this), ze(this, Ke, dc).call(this), O(this, Ze).removeObserver(this);
  }
  setOptions(t) {
    const r = this.options, u = O(this, Ze);
    if (this.options = O(this, sn).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Un(this.options.enabled, O(this, Ze)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    ze(this, Ke, hc).call(this), O(this, Ze).setOptions(this.options), r._defaulted && !rc(this.options, r) && O(this, sn).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: O(this, Ze),
      observer: this
    });
    const o = this.hasListeners();
    o && Jh(
      O(this, Ze),
      u,
      this.options,
      r
    ) && ze(this, Ke, Nu).call(this), this.updateResult(), o && (O(this, Ze) !== u || Un(this.options.enabled, O(this, Ze)) !== Un(r.enabled, O(this, Ze)) || Yi(this.options.staleTime, O(this, Ze)) !== Yi(r.staleTime, O(this, Ze))) && ze(this, Ke, sc).call(this);
    const a = ze(this, Ke, ac).call(this);
    o && (O(this, Ze) !== u || Un(this.options.enabled, O(this, Ze)) !== Un(r.enabled, O(this, Ze)) || a !== O(this, zr)) && ze(this, Ke, lc).call(this, a);
  }
  getOptimisticResult(t) {
    const r = O(this, sn).getQueryCache().build(O(this, sn), t), u = this.createResult(r, t);
    return US(this, u) && (ae(this, qt, u), ae(this, ru, this.options), ae(this, pi, O(this, Ze).state)), u;
  }
  getCurrentResult() {
    return O(this, qt);
  }
  trackResult(t, r) {
    return new Proxy(t, {
      get: (u, o) => (this.trackProp(o), r == null || r(o), Reflect.get(u, o))
    });
  }
  trackProp(t) {
    O(this, ou).add(t);
  }
  getCurrentQuery() {
    return O(this, Ze);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const r = O(this, sn).defaultQueryOptions(t), u = O(this, sn).getQueryCache().build(O(this, sn), r);
    return u.fetch().then(() => this.createResult(u, r));
  }
  fetch(t) {
    return ze(this, Ke, Nu).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), O(this, qt)));
  }
  createResult(t, r) {
    var Y;
    const u = O(this, Ze), o = this.options, a = O(this, qt), l = O(this, pi), c = O(this, ru), h = t !== u ? t.state : O(this, $u), { state: p } = t;
    let g = { ...p }, v = !1, b;
    if (r._optimisticResults) {
      const K = this.hasListeners(), Q = !K && Yh(t, r), z = K && Jh(t, u, r, o);
      (Q || z) && (g = {
        ...g,
        ...Ig(p.data, t.options)
      }), r._optimisticResults === "isRestoring" && (g.fetchStatus = "idle");
    }
    let { error: S, errorUpdatedAt: A, status: F } = g;
    b = g.data;
    let P = !1;
    if (r.placeholderData !== void 0 && b === void 0 && F === "pending") {
      let K;
      a != null && a.isPlaceholderData && r.placeholderData === (c == null ? void 0 : c.placeholderData) ? (K = a.data, P = !0) : K = typeof r.placeholderData == "function" ? r.placeholderData(
        (Y = O(this, uu)) == null ? void 0 : Y.state.data,
        O(this, uu)
      ) : r.placeholderData, K !== void 0 && (F = "success", b = uc(
        a == null ? void 0 : a.data,
        K,
        r
      ), v = !0);
    }
    if (r.select && b !== void 0 && !P)
      if (a && b === (l == null ? void 0 : l.data) && r.select === O(this, Ku))
        b = O(this, iu);
      else
        try {
          ae(this, Ku, r.select), b = r.select(b), b = uc(a == null ? void 0 : a.data, b, r), ae(this, iu, b), ae(this, Hr, null);
        } catch (K) {
          ae(this, Hr, K);
        }
    O(this, Hr) && (S = O(this, Hr), b = O(this, iu), A = Date.now(), F = "error");
    const W = g.fetchStatus === "fetching", k = F === "pending", N = F === "error", U = k && W, G = b !== void 0, M = {
      status: F,
      fetchStatus: g.fetchStatus,
      isPending: k,
      isSuccess: F === "success",
      isError: N,
      isInitialLoading: U,
      isLoading: U,
      data: b,
      dataUpdatedAt: g.dataUpdatedAt,
      error: S,
      errorUpdatedAt: A,
      failureCount: g.fetchFailureCount,
      failureReason: g.fetchFailureReason,
      errorUpdateCount: g.errorUpdateCount,
      isFetched: g.dataUpdateCount > 0 || g.errorUpdateCount > 0,
      isFetchedAfterMount: g.dataUpdateCount > h.dataUpdateCount || g.errorUpdateCount > h.errorUpdateCount,
      isFetching: W,
      isRefetching: W && !k,
      isLoadingError: N && !G,
      isPaused: g.fetchStatus === "paused",
      isPlaceholderData: v,
      isRefetchError: N && G,
      isStale: Nc(t, r),
      refetch: this.refetch,
      promise: O(this, Xr)
    };
    if (this.options.experimental_prefetchInRender) {
      const K = (ee) => {
        M.status === "error" ? ee.reject(M.error) : M.data !== void 0 && ee.resolve(M.data);
      }, Q = () => {
        const ee = ae(this, Xr, M.promise = oc());
        K(ee);
      }, z = O(this, Xr);
      switch (z.status) {
        case "pending":
          t.queryHash === u.queryHash && K(z);
          break;
        case "fulfilled":
          (M.status === "error" || M.data !== z.value) && Q();
          break;
        case "rejected":
          (M.status !== "error" || M.error !== z.reason) && Q();
          break;
      }
    }
    return M;
  }
  updateResult() {
    const t = O(this, qt), r = this.createResult(O(this, Ze), this.options);
    if (ae(this, pi, O(this, Ze).state), ae(this, ru, this.options), O(this, pi).data !== void 0 && ae(this, uu, O(this, Ze)), rc(r, t))
      return;
    ae(this, qt, r);
    const u = () => {
      if (!t)
        return !0;
      const { notifyOnChangeProps: o } = this.options, a = typeof o == "function" ? o() : o;
      if (a === "all" || !a && !O(this, ou).size)
        return !0;
      const l = new Set(
        a ?? O(this, ou)
      );
      return this.options.throwOnError && l.add("error"), Object.keys(O(this, qt)).some((c) => {
        const f = c;
        return O(this, qt)[f] !== t[f] && l.has(f);
      });
    };
    ze(this, Ke, Cg).call(this, { listeners: u() });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && ze(this, Ke, cc).call(this);
  }
}, sn = new WeakMap(), Ze = new WeakMap(), $u = new WeakMap(), qt = new WeakMap(), pi = new WeakMap(), ru = new WeakMap(), Xr = new WeakMap(), Hr = new WeakMap(), Ku = new WeakMap(), iu = new WeakMap(), uu = new WeakMap(), gi = new WeakMap(), mi = new WeakMap(), zr = new WeakMap(), ou = new WeakMap(), Ke = new WeakSet(), Nu = function(t) {
  ze(this, Ke, hc).call(this);
  let r = O(this, Ze).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (r = r.catch(Ln)), r;
}, sc = function() {
  ze(this, Ke, fc).call(this);
  const t = Yi(
    this.options.staleTime,
    O(this, Ze)
  );
  if (bi || O(this, qt).isStale || !tc(t))
    return;
  const u = pg(O(this, qt).dataUpdatedAt, t) + 1;
  ae(this, gi, setTimeout(() => {
    O(this, qt).isStale || this.updateResult();
  }, u));
}, ac = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(O(this, Ze)) : this.options.refetchInterval) ?? !1;
}, lc = function(t) {
  ze(this, Ke, dc).call(this), ae(this, zr, t), !(bi || Un(this.options.enabled, O(this, Ze)) === !1 || !tc(O(this, zr)) || O(this, zr) === 0) && ae(this, mi, setInterval(() => {
    (this.options.refetchIntervalInBackground || Mc.isFocused()) && ze(this, Ke, Nu).call(this);
  }, O(this, zr)));
}, cc = function() {
  ze(this, Ke, sc).call(this), ze(this, Ke, lc).call(this, ze(this, Ke, ac).call(this));
}, fc = function() {
  O(this, gi) && (clearTimeout(O(this, gi)), ae(this, gi, void 0));
}, dc = function() {
  O(this, mi) && (clearInterval(O(this, mi)), ae(this, mi, void 0));
}, hc = function() {
  const t = O(this, sn).getQueryCache().build(O(this, sn), this.options);
  if (t === O(this, Ze))
    return;
  const r = O(this, Ze);
  ae(this, Ze, t), ae(this, $u, t.state), this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
}, Cg = function(t) {
  Nt.batch(() => {
    t.listeners && this.listeners.forEach((r) => {
      r(O(this, qt));
    }), O(this, sn).getQueryCache().notify({
      query: O(this, Ze),
      type: "observerResultsUpdated"
    });
  });
}, Ep);
function JS(e, t) {
  return Un(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function Yh(e, t) {
  return JS(e, t) || e.state.data !== void 0 && pc(e, t, t.refetchOnMount);
}
function pc(e, t, r) {
  if (Un(t.enabled, e) !== !1) {
    const u = typeof r == "function" ? r(e) : r;
    return u === "always" || u !== !1 && Nc(e, t);
  }
  return !1;
}
function Jh(e, t, r, u) {
  return (e !== t || Un(u.enabled, e) === !1) && (!r.suspense || e.state.status !== "error") && Nc(e, r);
}
function Nc(e, t) {
  return Un(t.enabled, e) !== !1 && e.isStaleByTime(Yi(t.staleTime, e));
}
function US(e, t) {
  return !rc(e.getCurrentResult(), t);
}
var xg = Oe.createContext(
  void 0
), jS = (e) => {
  const t = Oe.useContext(xg);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, QS = ({
  client: e,
  children: t
}) => (Oe.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ re(xg.Provider, { value: e, children: t })), Ag = Oe.createContext(!1), qS = () => Oe.useContext(Ag);
Ag.Provider;
function $S() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e
  };
}
var KS = Oe.createContext($S()), eE = () => Oe.useContext(KS);
function tE(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function Uh() {
}
var nE = (e, t) => {
  (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1));
}, rE = (e) => {
  Oe.useEffect(() => {
    e.clearReset();
  }, [e]);
}, iE = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: r,
  query: u,
  suspense: o
}) => e.isError && !t.isReset() && !e.isFetching && u && (o && e.data === void 0 || tE(r, [e.error, u])), uE = (e) => {
  const t = e.staleTime;
  e.suspense && (e.staleTime = typeof t == "function" ? (...r) => Math.max(t(...r), 1e3) : Math.max(t ?? 1e3, 1e3), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
}, oE = (e, t) => e.isLoading && e.isFetching && !t, sE = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, jh = (e, t, r) => t.fetchOptimistic(e).catch(() => {
  r.clearReset();
});
function aE(e, t, r) {
  var g, v, b, S, A;
  if (process.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const u = jS(), o = qS(), a = eE(), l = u.defaultQueryOptions(e);
  (v = (g = u.getDefaultOptions().queries) == null ? void 0 : g._experimental_beforeQuery) == null || v.call(
    g,
    l
  ), process.env.NODE_ENV !== "production" && (l.queryFn || console.error(
    `[${l.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`
  )), l._optimisticResults = o ? "isRestoring" : "optimistic", uE(l), nE(l, a), rE(a);
  const c = !u.getQueryCache().get(l.queryHash), [f] = Oe.useState(
    () => new t(
      u,
      l
    )
  ), h = f.getOptimisticResult(l), p = !o && e.subscribed !== !1;
  if (Oe.useSyncExternalStore(
    Oe.useCallback(
      (F) => {
        const P = p ? f.subscribe(Nt.batchCalls(F)) : Uh;
        return f.updateResult(), P;
      },
      [f, p]
    ),
    () => f.getCurrentResult(),
    () => f.getCurrentResult()
  ), Oe.useEffect(() => {
    f.setOptions(l);
  }, [l, f]), sE(l, h))
    throw jh(l, f, a);
  if (iE({
    result: h,
    errorResetBoundary: a,
    throwOnError: l.throwOnError,
    query: u.getQueryCache().get(l.queryHash),
    suspense: l.suspense
  }))
    throw h.error;
  if ((S = (b = u.getDefaultOptions().queries) == null ? void 0 : b._experimental_afterQuery) == null || S.call(
    b,
    l,
    h
  ), l.experimental_prefetchInRender && !bi && oE(h, o)) {
    const F = c ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      jh(l, f, a)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (A = u.getQueryCache().get(l.queryHash)) == null ? void 0 : A.promise
    );
    F == null || F.catch(Uh).finally(() => {
      f.updateResult();
    });
  }
  return l.notifyOnChangeProps ? h : f.trackResult(h);
}
function Ii(e, t) {
  return aE(e, YS);
}
var _s = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
_s.exports;
(function(e, t) {
  (function() {
    var r, u = "4.17.21", o = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", c = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", h = 500, p = "__lodash_placeholder__", g = 1, v = 2, b = 4, S = 1, A = 2, F = 1, P = 2, W = 4, k = 8, N = 16, U = 32, G = 64, j = 128, M = 256, Y = 512, K = 30, Q = "...", z = 800, ee = 16, de = 1, ie = 2, xe = 3, we = 1 / 0, Fe = 9007199254740991, Je = 17976931348623157e292, w = NaN, Ie = 4294967295, Ge = Ie - 1, E = Ie >>> 1, Ye = [
      ["ary", j],
      ["bind", F],
      ["bindKey", P],
      ["curry", k],
      ["curryRight", N],
      ["flip", Y],
      ["partial", U],
      ["partialRight", G],
      ["rearg", M]
    ], ce = "[object Arguments]", Se = "[object Array]", wt = "[object AsyncFunction]", De = "[object Boolean]", gt = "[object Date]", Vt = "[object DOMException]", Gt = "[object Error]", kt = "[object Function]", wn = "[object GeneratorFunction]", It = "[object Map]", te = "[object Number]", oe = "[object Null]", le = "[object Object]", Ve = "[object Promise]", at = "[object Proxy]", mt = "[object RegExp]", Lt = "[object Set]", Nn = "[object String]", tt = "[object Symbol]", nt = "[object Undefined]", Qe = "[object WeakMap]", L = "[object WeakSet]", q = "[object ArrayBuffer]", pe = "[object DataView]", _e = "[object Float32Array]", Te = "[object Float64Array]", _t = "[object Int8Array]", $t = "[object Int16Array]", Zt = "[object Int32Array]", Sn = "[object Uint8Array]", Kt = "[object Uint8ClampedArray]", St = "[object Uint16Array]", hn = "[object Uint32Array]", pn = /\b__p \+= '';/g, sr = /\b(__p \+=) '' \+/g, oo = /(__e\(.*?\)|\b__t\)) \+\n'';/g, so = /&(?:amp|lt|gt|quot|#39);/g, ao = /[&<>"']/g, fu = RegExp(so.source), Jr = RegExp(ao.source), du = /<%-([\s\S]+?)%>/g, hu = /<%([\s\S]+?)%>/g, Ci = /<%=([\s\S]+?)%>/g, Ur = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, js = /^\w*$/, Qs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, pu = /[\\^$.*+?()[\]{}|]/g, qs = RegExp(pu.source), gu = /^\s+/, lo = /\s/, mu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ar = /\{\n\/\* \[wrapped with (.+)\] \*/, $s = /,? & /, Ks = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ea = /[()=,{}\[\]\/\s]/, ta = /\\(\\)?/g, na = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, En = /\w*$/, ra = /^[-+]0x[0-9a-f]+$/i, ia = /^0b[01]+$/i, ua = /^\[object .+?Constructor\]$/, oa = /^0o[0-7]+$/i, sa = /^(?:0|[1-9]\d*)$/, lr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, xi = /($^)/, aa = /['\n\r\u2028\u2029\\]/g, Ai = "\\ud800-\\udfff", la = "\\u0300-\\u036f", ca = "\\ufe20-\\ufe2f", wi = "\\u20d0-\\u20ff", co = la + ca + wi, fo = "\\u2700-\\u27bf", Vn = "a-z\\xdf-\\xf6\\xf8-\\xff", fa = "\\xac\\xb1\\xd7\\xf7", da = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", ha = "\\u2000-\\u206f", pa = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", ho = "A-Z\\xc0-\\xd6\\xd8-\\xde", po = "\\ufe0e\\ufe0f", jr = fa + da + ha + pa, bu = "['’]", Qr = "[" + Ai + "]", yu = "[" + jr + "]", qr = "[" + co + "]", go = "\\d+", ga = "[" + fo + "]", mo = "[" + Vn + "]", bo = "[^" + Ai + jr + go + fo + Vn + ho + "]", Si = "\\ud83c[\\udffb-\\udfff]", ma = "(?:" + qr + "|" + Si + ")", yo = "[^" + Ai + "]", Ei = "(?:\\ud83c[\\udde6-\\uddff]){2}", Sr = "[\\ud800-\\udbff][\\udc00-\\udfff]", gn = "[" + ho + "]", vo = "\\u200d", Io = "(?:" + mo + "|" + bo + ")", jn = "(?:" + gn + "|" + bo + ")", Co = "(?:" + bu + "(?:d|ll|m|re|s|t|ve))?", xo = "(?:" + bu + "(?:D|LL|M|RE|S|T|VE))?", Ao = ma + "?", wo = "[" + po + "]?", ba = "(?:" + vo + "(?:" + [yo, Ei, Sr].join("|") + ")" + wo + Ao + ")*", cr = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", So = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Eo = wo + Ao + ba, Fi = "(?:" + [ga, Ei, Sr].join("|") + ")" + Eo, ya = "(?:" + [yo + qr + "?", qr, Ei, Sr, Qr].join("|") + ")", vu = RegExp(bu, "g"), va = RegExp(qr, "g"), Ri = RegExp(Si + "(?=" + Si + ")|" + ya + Eo, "g"), Fo = RegExp([
      gn + "?" + mo + "+" + Co + "(?=" + [yu, gn, "$"].join("|") + ")",
      jn + "+" + xo + "(?=" + [yu, gn + Io, "$"].join("|") + ")",
      gn + "?" + Io + "+" + Co,
      gn + "+" + xo,
      So,
      cr,
      go,
      Fi
    ].join("|"), "g"), Ro = RegExp("[" + vo + Ai + co + po + "]"), $r = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Po = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], Ia = -1, it = {};
    it[_e] = it[Te] = it[_t] = it[$t] = it[Zt] = it[Sn] = it[Kt] = it[St] = it[hn] = !0, it[ce] = it[Se] = it[q] = it[De] = it[pe] = it[gt] = it[Gt] = it[kt] = it[It] = it[te] = it[le] = it[mt] = it[Lt] = it[Nn] = it[Qe] = !1;
    var rt = {};
    rt[ce] = rt[Se] = rt[q] = rt[pe] = rt[De] = rt[gt] = rt[_e] = rt[Te] = rt[_t] = rt[$t] = rt[Zt] = rt[It] = rt[te] = rt[le] = rt[mt] = rt[Lt] = rt[Nn] = rt[tt] = rt[Sn] = rt[Kt] = rt[St] = rt[hn] = !0, rt[Gt] = rt[kt] = rt[Qe] = !1;
    var C = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, T = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, Z = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, ue = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, ut = parseFloat, Re = parseInt, ft = typeof xn == "object" && xn && xn.Object === Object && xn, Et = typeof self == "object" && self && self.Object === Object && self, Xe = ft || Et || Function("return this")(), ot = t && !t.nodeType && t, Ct = ot && !0 && e && !e.nodeType && e, en = Ct && Ct.exports === ot, Ft = en && ft.process, dt = function() {
      try {
        var _ = Ct && Ct.require && Ct.require("util").types;
        return _ || Ft && Ft.binding && Ft.binding("util");
      } catch {
      }
    }(), Yt = dt && dt.isArrayBuffer, Wn = dt && dt.isDate, Fn = dt && dt.isMap, Qn = dt && dt.isRegExp, Iu = dt && dt.isSet, Kr = dt && dt.isTypedArray;
    function Tt(_, V, D) {
      switch (D.length) {
        case 0:
          return _.call(V);
        case 1:
          return _.call(V, D[0]);
        case 2:
          return _.call(V, D[0], D[1]);
        case 3:
          return _.call(V, D[0], D[1], D[2]);
      }
      return _.apply(V, D);
    }
    function lm(_, V, D, se) {
      for (var Ee = -1, Ue = _ == null ? 0 : _.length; ++Ee < Ue; ) {
        var Pt = _[Ee];
        V(se, Pt, D(Pt), _);
      }
      return se;
    }
    function Rn(_, V) {
      for (var D = -1, se = _ == null ? 0 : _.length; ++D < se && V(_[D], D, _) !== !1; )
        ;
      return _;
    }
    function cm(_, V) {
      for (var D = _ == null ? 0 : _.length; D-- && V(_[D], D, _) !== !1; )
        ;
      return _;
    }
    function jc(_, V) {
      for (var D = -1, se = _ == null ? 0 : _.length; ++D < se; )
        if (!V(_[D], D, _))
          return !1;
      return !0;
    }
    function Er(_, V) {
      for (var D = -1, se = _ == null ? 0 : _.length, Ee = 0, Ue = []; ++D < se; ) {
        var Pt = _[D];
        V(Pt, D, _) && (Ue[Ee++] = Pt);
      }
      return Ue;
    }
    function Oo(_, V) {
      var D = _ == null ? 0 : _.length;
      return !!D && Pi(_, V, 0) > -1;
    }
    function Ca(_, V, D) {
      for (var se = -1, Ee = _ == null ? 0 : _.length; ++se < Ee; )
        if (D(V, _[se]))
          return !0;
      return !1;
    }
    function ht(_, V) {
      for (var D = -1, se = _ == null ? 0 : _.length, Ee = Array(se); ++D < se; )
        Ee[D] = V(_[D], D, _);
      return Ee;
    }
    function Fr(_, V) {
      for (var D = -1, se = V.length, Ee = _.length; ++D < se; )
        _[Ee + D] = V[D];
      return _;
    }
    function xa(_, V, D, se) {
      var Ee = -1, Ue = _ == null ? 0 : _.length;
      for (se && Ue && (D = _[++Ee]); ++Ee < Ue; )
        D = V(D, _[Ee], Ee, _);
      return D;
    }
    function fm(_, V, D, se) {
      var Ee = _ == null ? 0 : _.length;
      for (se && Ee && (D = _[--Ee]); Ee--; )
        D = V(D, _[Ee], Ee, _);
      return D;
    }
    function Aa(_, V) {
      for (var D = -1, se = _ == null ? 0 : _.length; ++D < se; )
        if (V(_[D], D, _))
          return !0;
      return !1;
    }
    var dm = wa("length");
    function hm(_) {
      return _.split("");
    }
    function pm(_) {
      return _.match(Ks) || [];
    }
    function Qc(_, V, D) {
      var se;
      return D(_, function(Ee, Ue, Pt) {
        if (V(Ee, Ue, Pt))
          return se = Ue, !1;
      }), se;
    }
    function _o(_, V, D, se) {
      for (var Ee = _.length, Ue = D + (se ? 1 : -1); se ? Ue-- : ++Ue < Ee; )
        if (V(_[Ue], Ue, _))
          return Ue;
      return -1;
    }
    function Pi(_, V, D) {
      return V === V ? Em(_, V, D) : _o(_, qc, D);
    }
    function gm(_, V, D, se) {
      for (var Ee = D - 1, Ue = _.length; ++Ee < Ue; )
        if (se(_[Ee], V))
          return Ee;
      return -1;
    }
    function qc(_) {
      return _ !== _;
    }
    function $c(_, V) {
      var D = _ == null ? 0 : _.length;
      return D ? Ea(_, V) / D : w;
    }
    function wa(_) {
      return function(V) {
        return V == null ? r : V[_];
      };
    }
    function Sa(_) {
      return function(V) {
        return _ == null ? r : _[V];
      };
    }
    function Kc(_, V, D, se, Ee) {
      return Ee(_, function(Ue, Pt, st) {
        D = se ? (se = !1, Ue) : V(D, Ue, Pt, st);
      }), D;
    }
    function mm(_, V) {
      var D = _.length;
      for (_.sort(V); D--; )
        _[D] = _[D].value;
      return _;
    }
    function Ea(_, V) {
      for (var D, se = -1, Ee = _.length; ++se < Ee; ) {
        var Ue = V(_[se]);
        Ue !== r && (D = D === r ? Ue : D + Ue);
      }
      return D;
    }
    function Fa(_, V) {
      for (var D = -1, se = Array(_); ++D < _; )
        se[D] = V(D);
      return se;
    }
    function bm(_, V) {
      return ht(V, function(D) {
        return [D, _[D]];
      });
    }
    function ef(_) {
      return _ && _.slice(0, uf(_) + 1).replace(gu, "");
    }
    function mn(_) {
      return function(V) {
        return _(V);
      };
    }
    function Ra(_, V) {
      return ht(V, function(D) {
        return _[D];
      });
    }
    function Cu(_, V) {
      return _.has(V);
    }
    function tf(_, V) {
      for (var D = -1, se = _.length; ++D < se && Pi(V, _[D], 0) > -1; )
        ;
      return D;
    }
    function nf(_, V) {
      for (var D = _.length; D-- && Pi(V, _[D], 0) > -1; )
        ;
      return D;
    }
    function ym(_, V) {
      for (var D = _.length, se = 0; D--; )
        _[D] === V && ++se;
      return se;
    }
    var vm = Sa(C), Im = Sa(T);
    function Cm(_) {
      return "\\" + ue[_];
    }
    function xm(_, V) {
      return _ == null ? r : _[V];
    }
    function Oi(_) {
      return Ro.test(_);
    }
    function Am(_) {
      return $r.test(_);
    }
    function wm(_) {
      for (var V, D = []; !(V = _.next()).done; )
        D.push(V.value);
      return D;
    }
    function Pa(_) {
      var V = -1, D = Array(_.size);
      return _.forEach(function(se, Ee) {
        D[++V] = [Ee, se];
      }), D;
    }
    function rf(_, V) {
      return function(D) {
        return _(V(D));
      };
    }
    function Rr(_, V) {
      for (var D = -1, se = _.length, Ee = 0, Ue = []; ++D < se; ) {
        var Pt = _[D];
        (Pt === V || Pt === p) && (_[D] = p, Ue[Ee++] = D);
      }
      return Ue;
    }
    function To(_) {
      var V = -1, D = Array(_.size);
      return _.forEach(function(se) {
        D[++V] = se;
      }), D;
    }
    function Sm(_) {
      var V = -1, D = Array(_.size);
      return _.forEach(function(se) {
        D[++V] = [se, se];
      }), D;
    }
    function Em(_, V, D) {
      for (var se = D - 1, Ee = _.length; ++se < Ee; )
        if (_[se] === V)
          return se;
      return -1;
    }
    function Fm(_, V, D) {
      for (var se = D + 1; se--; )
        if (_[se] === V)
          return se;
      return se;
    }
    function _i(_) {
      return Oi(_) ? Pm(_) : dm(_);
    }
    function Xn(_) {
      return Oi(_) ? Om(_) : hm(_);
    }
    function uf(_) {
      for (var V = _.length; V-- && lo.test(_.charAt(V)); )
        ;
      return V;
    }
    var Rm = Sa(Z);
    function Pm(_) {
      for (var V = Ri.lastIndex = 0; Ri.test(_); )
        ++V;
      return V;
    }
    function Om(_) {
      return _.match(Ri) || [];
    }
    function _m(_) {
      return _.match(Fo) || [];
    }
    var Tm = function _(V) {
      V = V == null ? Xe : Ti.defaults(Xe.Object(), V, Ti.pick(Xe, Po));
      var D = V.Array, se = V.Date, Ee = V.Error, Ue = V.Function, Pt = V.Math, st = V.Object, Oa = V.RegExp, Bm = V.String, Pn = V.TypeError, Bo = D.prototype, Gm = Ue.prototype, Bi = st.prototype, Go = V["__core-js_shared__"], ko = Gm.toString, et = Bi.hasOwnProperty, km = 0, of = function() {
        var n = /[^.]+$/.exec(Go && Go.keys && Go.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), Lo = Bi.toString, Lm = ko.call(st), Dm = Xe._, Mm = Oa(
        "^" + ko.call(et).replace(pu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Do = en ? V.Buffer : r, Pr = V.Symbol, Mo = V.Uint8Array, sf = Do ? Do.allocUnsafe : r, No = rf(st.getPrototypeOf, st), af = st.create, lf = Bi.propertyIsEnumerable, Vo = Bo.splice, cf = Pr ? Pr.isConcatSpreadable : r, xu = Pr ? Pr.iterator : r, ei = Pr ? Pr.toStringTag : r, Wo = function() {
        try {
          var n = ui(st, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), Nm = V.clearTimeout !== Xe.clearTimeout && V.clearTimeout, Vm = se && se.now !== Xe.Date.now && se.now, Wm = V.setTimeout !== Xe.setTimeout && V.setTimeout, Xo = Pt.ceil, Ho = Pt.floor, _a = st.getOwnPropertySymbols, Xm = Do ? Do.isBuffer : r, ff = V.isFinite, Hm = Bo.join, zm = rf(st.keys, st), Ot = Pt.max, Wt = Pt.min, Zm = se.now, Ym = V.parseInt, df = Pt.random, Jm = Bo.reverse, Ta = ui(V, "DataView"), Au = ui(V, "Map"), Ba = ui(V, "Promise"), Gi = ui(V, "Set"), wu = ui(V, "WeakMap"), Su = ui(st, "create"), zo = wu && new wu(), ki = {}, Um = oi(Ta), jm = oi(Au), Qm = oi(Ba), qm = oi(Gi), $m = oi(wu), Zo = Pr ? Pr.prototype : r, Eu = Zo ? Zo.valueOf : r, hf = Zo ? Zo.toString : r;
      function y(n) {
        if (bt(n) && !Pe(n) && !(n instanceof We)) {
          if (n instanceof On)
            return n;
          if (et.call(n, "__wrapped__"))
            return pd(n);
        }
        return new On(n);
      }
      var Li = /* @__PURE__ */ function() {
        function n() {
        }
        return function(i) {
          if (!pt(i))
            return {};
          if (af)
            return af(i);
          n.prototype = i;
          var s = new n();
          return n.prototype = r, s;
        };
      }();
      function Yo() {
      }
      function On(n, i) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r;
      }
      y.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: du,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: hu,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: Ci,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: y
        }
      }, y.prototype = Yo.prototype, y.prototype.constructor = y, On.prototype = Li(Yo.prototype), On.prototype.constructor = On;
      function We(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ie, this.__views__ = [];
      }
      function Km() {
        var n = new We(this.__wrapped__);
        return n.__actions__ = tn(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = tn(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = tn(this.__views__), n;
      }
      function eb() {
        if (this.__filtered__) {
          var n = new We(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function tb() {
        var n = this.__wrapped__.value(), i = this.__dir__, s = Pe(n), d = i < 0, m = s ? n.length : 0, I = h0(0, m, this.__views__), x = I.start, R = I.end, B = R - x, X = d ? R : x - 1, H = this.__iteratees__, J = H.length, ne = 0, fe = Wt(B, this.__takeCount__);
        if (!s || !d && m == B && fe == B)
          return Df(n, this.__actions__);
        var ye = [];
        e:
          for (; B-- && ne < fe; ) {
            X += i;
            for (var Le = -1, ve = n[X]; ++Le < J; ) {
              var Ne = H[Le], He = Ne.iteratee, vn = Ne.type, jt = He(ve);
              if (vn == ie)
                ve = jt;
              else if (!jt) {
                if (vn == de)
                  continue e;
                break e;
              }
            }
            ye[ne++] = ve;
          }
        return ye;
      }
      We.prototype = Li(Yo.prototype), We.prototype.constructor = We;
      function ti(n) {
        var i = -1, s = n == null ? 0 : n.length;
        for (this.clear(); ++i < s; ) {
          var d = n[i];
          this.set(d[0], d[1]);
        }
      }
      function nb() {
        this.__data__ = Su ? Su(null) : {}, this.size = 0;
      }
      function rb(n) {
        var i = this.has(n) && delete this.__data__[n];
        return this.size -= i ? 1 : 0, i;
      }
      function ib(n) {
        var i = this.__data__;
        if (Su) {
          var s = i[n];
          return s === f ? r : s;
        }
        return et.call(i, n) ? i[n] : r;
      }
      function ub(n) {
        var i = this.__data__;
        return Su ? i[n] !== r : et.call(i, n);
      }
      function ob(n, i) {
        var s = this.__data__;
        return this.size += this.has(n) ? 0 : 1, s[n] = Su && i === r ? f : i, this;
      }
      ti.prototype.clear = nb, ti.prototype.delete = rb, ti.prototype.get = ib, ti.prototype.has = ub, ti.prototype.set = ob;
      function fr(n) {
        var i = -1, s = n == null ? 0 : n.length;
        for (this.clear(); ++i < s; ) {
          var d = n[i];
          this.set(d[0], d[1]);
        }
      }
      function sb() {
        this.__data__ = [], this.size = 0;
      }
      function ab(n) {
        var i = this.__data__, s = Jo(i, n);
        if (s < 0)
          return !1;
        var d = i.length - 1;
        return s == d ? i.pop() : Vo.call(i, s, 1), --this.size, !0;
      }
      function lb(n) {
        var i = this.__data__, s = Jo(i, n);
        return s < 0 ? r : i[s][1];
      }
      function cb(n) {
        return Jo(this.__data__, n) > -1;
      }
      function fb(n, i) {
        var s = this.__data__, d = Jo(s, n);
        return d < 0 ? (++this.size, s.push([n, i])) : s[d][1] = i, this;
      }
      fr.prototype.clear = sb, fr.prototype.delete = ab, fr.prototype.get = lb, fr.prototype.has = cb, fr.prototype.set = fb;
      function dr(n) {
        var i = -1, s = n == null ? 0 : n.length;
        for (this.clear(); ++i < s; ) {
          var d = n[i];
          this.set(d[0], d[1]);
        }
      }
      function db() {
        this.size = 0, this.__data__ = {
          hash: new ti(),
          map: new (Au || fr)(),
          string: new ti()
        };
      }
      function hb(n) {
        var i = us(this, n).delete(n);
        return this.size -= i ? 1 : 0, i;
      }
      function pb(n) {
        return us(this, n).get(n);
      }
      function gb(n) {
        return us(this, n).has(n);
      }
      function mb(n, i) {
        var s = us(this, n), d = s.size;
        return s.set(n, i), this.size += s.size == d ? 0 : 1, this;
      }
      dr.prototype.clear = db, dr.prototype.delete = hb, dr.prototype.get = pb, dr.prototype.has = gb, dr.prototype.set = mb;
      function ni(n) {
        var i = -1, s = n == null ? 0 : n.length;
        for (this.__data__ = new dr(); ++i < s; )
          this.add(n[i]);
      }
      function bb(n) {
        return this.__data__.set(n, f), this;
      }
      function yb(n) {
        return this.__data__.has(n);
      }
      ni.prototype.add = ni.prototype.push = bb, ni.prototype.has = yb;
      function Hn(n) {
        var i = this.__data__ = new fr(n);
        this.size = i.size;
      }
      function vb() {
        this.__data__ = new fr(), this.size = 0;
      }
      function Ib(n) {
        var i = this.__data__, s = i.delete(n);
        return this.size = i.size, s;
      }
      function Cb(n) {
        return this.__data__.get(n);
      }
      function xb(n) {
        return this.__data__.has(n);
      }
      function Ab(n, i) {
        var s = this.__data__;
        if (s instanceof fr) {
          var d = s.__data__;
          if (!Au || d.length < o - 1)
            return d.push([n, i]), this.size = ++s.size, this;
          s = this.__data__ = new dr(d);
        }
        return s.set(n, i), this.size = s.size, this;
      }
      Hn.prototype.clear = vb, Hn.prototype.delete = Ib, Hn.prototype.get = Cb, Hn.prototype.has = xb, Hn.prototype.set = Ab;
      function pf(n, i) {
        var s = Pe(n), d = !s && si(n), m = !s && !d && Gr(n), I = !s && !d && !m && Vi(n), x = s || d || m || I, R = x ? Fa(n.length, Bm) : [], B = R.length;
        for (var X in n)
          (i || et.call(n, X)) && !(x && // Safari 9 has enumerable `arguments.length` in strict mode.
          (X == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          m && (X == "offset" || X == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          I && (X == "buffer" || X == "byteLength" || X == "byteOffset") || // Skip index properties.
          mr(X, B))) && R.push(X);
        return R;
      }
      function gf(n) {
        var i = n.length;
        return i ? n[za(0, i - 1)] : r;
      }
      function wb(n, i) {
        return os(tn(n), ri(i, 0, n.length));
      }
      function Sb(n) {
        return os(tn(n));
      }
      function Ga(n, i, s) {
        (s !== r && !zn(n[i], s) || s === r && !(i in n)) && hr(n, i, s);
      }
      function Fu(n, i, s) {
        var d = n[i];
        (!(et.call(n, i) && zn(d, s)) || s === r && !(i in n)) && hr(n, i, s);
      }
      function Jo(n, i) {
        for (var s = n.length; s--; )
          if (zn(n[s][0], i))
            return s;
        return -1;
      }
      function Eb(n, i, s, d) {
        return Or(n, function(m, I, x) {
          i(d, m, s(m), x);
        }), d;
      }
      function mf(n, i) {
        return n && $n(i, Bt(i), n);
      }
      function Fb(n, i) {
        return n && $n(i, rn(i), n);
      }
      function hr(n, i, s) {
        i == "__proto__" && Wo ? Wo(n, i, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        }) : n[i] = s;
      }
      function ka(n, i) {
        for (var s = -1, d = i.length, m = D(d), I = n == null; ++s < d; )
          m[s] = I ? r : gl(n, i[s]);
        return m;
      }
      function ri(n, i, s) {
        return n === n && (s !== r && (n = n <= s ? n : s), i !== r && (n = n >= i ? n : i)), n;
      }
      function _n(n, i, s, d, m, I) {
        var x, R = i & g, B = i & v, X = i & b;
        if (s && (x = m ? s(n, d, m, I) : s(n)), x !== r)
          return x;
        if (!pt(n))
          return n;
        var H = Pe(n);
        if (H) {
          if (x = g0(n), !R)
            return tn(n, x);
        } else {
          var J = Xt(n), ne = J == kt || J == wn;
          if (Gr(n))
            return Vf(n, R);
          if (J == le || J == ce || ne && !m) {
            if (x = B || ne ? {} : ud(n), !R)
              return B ? i0(n, Fb(x, n)) : r0(n, mf(x, n));
          } else {
            if (!rt[J])
              return m ? n : {};
            x = m0(n, J, R);
          }
        }
        I || (I = new Hn());
        var fe = I.get(n);
        if (fe)
          return fe;
        I.set(n, x), Gd(n) ? n.forEach(function(ve) {
          x.add(_n(ve, i, s, ve, n, I));
        }) : Td(n) && n.forEach(function(ve, Ne) {
          x.set(Ne, _n(ve, i, s, Ne, n, I));
        });
        var ye = X ? B ? tl : el : B ? rn : Bt, Le = H ? r : ye(n);
        return Rn(Le || n, function(ve, Ne) {
          Le && (Ne = ve, ve = n[Ne]), Fu(x, Ne, _n(ve, i, s, Ne, n, I));
        }), x;
      }
      function Rb(n) {
        var i = Bt(n);
        return function(s) {
          return bf(s, n, i);
        };
      }
      function bf(n, i, s) {
        var d = s.length;
        if (n == null)
          return !d;
        for (n = st(n); d--; ) {
          var m = s[d], I = i[m], x = n[m];
          if (x === r && !(m in n) || !I(x))
            return !1;
        }
        return !0;
      }
      function yf(n, i, s) {
        if (typeof n != "function")
          throw new Pn(l);
        return Gu(function() {
          n.apply(r, s);
        }, i);
      }
      function Ru(n, i, s, d) {
        var m = -1, I = Oo, x = !0, R = n.length, B = [], X = i.length;
        if (!R)
          return B;
        s && (i = ht(i, mn(s))), d ? (I = Ca, x = !1) : i.length >= o && (I = Cu, x = !1, i = new ni(i));
        e:
          for (; ++m < R; ) {
            var H = n[m], J = s == null ? H : s(H);
            if (H = d || H !== 0 ? H : 0, x && J === J) {
              for (var ne = X; ne--; )
                if (i[ne] === J)
                  continue e;
              B.push(H);
            } else I(i, J, d) || B.push(H);
          }
        return B;
      }
      var Or = Zf(qn), vf = Zf(Da, !0);
      function Pb(n, i) {
        var s = !0;
        return Or(n, function(d, m, I) {
          return s = !!i(d, m, I), s;
        }), s;
      }
      function Uo(n, i, s) {
        for (var d = -1, m = n.length; ++d < m; ) {
          var I = n[d], x = i(I);
          if (x != null && (R === r ? x === x && !yn(x) : s(x, R)))
            var R = x, B = I;
        }
        return B;
      }
      function Ob(n, i, s, d) {
        var m = n.length;
        for (s = ke(s), s < 0 && (s = -s > m ? 0 : m + s), d = d === r || d > m ? m : ke(d), d < 0 && (d += m), d = s > d ? 0 : Ld(d); s < d; )
          n[s++] = i;
        return n;
      }
      function If(n, i) {
        var s = [];
        return Or(n, function(d, m, I) {
          i(d, m, I) && s.push(d);
        }), s;
      }
      function Dt(n, i, s, d, m) {
        var I = -1, x = n.length;
        for (s || (s = y0), m || (m = []); ++I < x; ) {
          var R = n[I];
          i > 0 && s(R) ? i > 1 ? Dt(R, i - 1, s, d, m) : Fr(m, R) : d || (m[m.length] = R);
        }
        return m;
      }
      var La = Yf(), Cf = Yf(!0);
      function qn(n, i) {
        return n && La(n, i, Bt);
      }
      function Da(n, i) {
        return n && Cf(n, i, Bt);
      }
      function jo(n, i) {
        return Er(i, function(s) {
          return br(n[s]);
        });
      }
      function ii(n, i) {
        i = Tr(i, n);
        for (var s = 0, d = i.length; n != null && s < d; )
          n = n[Kn(i[s++])];
        return s && s == d ? n : r;
      }
      function xf(n, i, s) {
        var d = i(n);
        return Pe(n) ? d : Fr(d, s(n));
      }
      function Jt(n) {
        return n == null ? n === r ? nt : oe : ei && ei in st(n) ? d0(n) : S0(n);
      }
      function Ma(n, i) {
        return n > i;
      }
      function _b(n, i) {
        return n != null && et.call(n, i);
      }
      function Tb(n, i) {
        return n != null && i in st(n);
      }
      function Bb(n, i, s) {
        return n >= Wt(i, s) && n < Ot(i, s);
      }
      function Na(n, i, s) {
        for (var d = s ? Ca : Oo, m = n[0].length, I = n.length, x = I, R = D(I), B = 1 / 0, X = []; x--; ) {
          var H = n[x];
          x && i && (H = ht(H, mn(i))), B = Wt(H.length, B), R[x] = !s && (i || m >= 120 && H.length >= 120) ? new ni(x && H) : r;
        }
        H = n[0];
        var J = -1, ne = R[0];
        e:
          for (; ++J < m && X.length < B; ) {
            var fe = H[J], ye = i ? i(fe) : fe;
            if (fe = s || fe !== 0 ? fe : 0, !(ne ? Cu(ne, ye) : d(X, ye, s))) {
              for (x = I; --x; ) {
                var Le = R[x];
                if (!(Le ? Cu(Le, ye) : d(n[x], ye, s)))
                  continue e;
              }
              ne && ne.push(ye), X.push(fe);
            }
          }
        return X;
      }
      function Gb(n, i, s, d) {
        return qn(n, function(m, I, x) {
          i(d, s(m), I, x);
        }), d;
      }
      function Pu(n, i, s) {
        i = Tr(i, n), n = ld(n, i);
        var d = n == null ? n : n[Kn(Bn(i))];
        return d == null ? r : Tt(d, n, s);
      }
      function Af(n) {
        return bt(n) && Jt(n) == ce;
      }
      function kb(n) {
        return bt(n) && Jt(n) == q;
      }
      function Lb(n) {
        return bt(n) && Jt(n) == gt;
      }
      function Ou(n, i, s, d, m) {
        return n === i ? !0 : n == null || i == null || !bt(n) && !bt(i) ? n !== n && i !== i : Db(n, i, s, d, Ou, m);
      }
      function Db(n, i, s, d, m, I) {
        var x = Pe(n), R = Pe(i), B = x ? Se : Xt(n), X = R ? Se : Xt(i);
        B = B == ce ? le : B, X = X == ce ? le : X;
        var H = B == le, J = X == le, ne = B == X;
        if (ne && Gr(n)) {
          if (!Gr(i))
            return !1;
          x = !0, H = !1;
        }
        if (ne && !H)
          return I || (I = new Hn()), x || Vi(n) ? nd(n, i, s, d, m, I) : c0(n, i, B, s, d, m, I);
        if (!(s & S)) {
          var fe = H && et.call(n, "__wrapped__"), ye = J && et.call(i, "__wrapped__");
          if (fe || ye) {
            var Le = fe ? n.value() : n, ve = ye ? i.value() : i;
            return I || (I = new Hn()), m(Le, ve, s, d, I);
          }
        }
        return ne ? (I || (I = new Hn()), f0(n, i, s, d, m, I)) : !1;
      }
      function Mb(n) {
        return bt(n) && Xt(n) == It;
      }
      function Va(n, i, s, d) {
        var m = s.length, I = m, x = !d;
        if (n == null)
          return !I;
        for (n = st(n); m--; ) {
          var R = s[m];
          if (x && R[2] ? R[1] !== n[R[0]] : !(R[0] in n))
            return !1;
        }
        for (; ++m < I; ) {
          R = s[m];
          var B = R[0], X = n[B], H = R[1];
          if (x && R[2]) {
            if (X === r && !(B in n))
              return !1;
          } else {
            var J = new Hn();
            if (d)
              var ne = d(X, H, B, n, i, J);
            if (!(ne === r ? Ou(H, X, S | A, d, J) : ne))
              return !1;
          }
        }
        return !0;
      }
      function wf(n) {
        if (!pt(n) || I0(n))
          return !1;
        var i = br(n) ? Mm : ua;
        return i.test(oi(n));
      }
      function Nb(n) {
        return bt(n) && Jt(n) == mt;
      }
      function Vb(n) {
        return bt(n) && Xt(n) == Lt;
      }
      function Wb(n) {
        return bt(n) && ds(n.length) && !!it[Jt(n)];
      }
      function Sf(n) {
        return typeof n == "function" ? n : n == null ? un : typeof n == "object" ? Pe(n) ? Rf(n[0], n[1]) : Ff(n) : Jd(n);
      }
      function Wa(n) {
        if (!Bu(n))
          return zm(n);
        var i = [];
        for (var s in st(n))
          et.call(n, s) && s != "constructor" && i.push(s);
        return i;
      }
      function Xb(n) {
        if (!pt(n))
          return w0(n);
        var i = Bu(n), s = [];
        for (var d in n)
          d == "constructor" && (i || !et.call(n, d)) || s.push(d);
        return s;
      }
      function Xa(n, i) {
        return n < i;
      }
      function Ef(n, i) {
        var s = -1, d = nn(n) ? D(n.length) : [];
        return Or(n, function(m, I, x) {
          d[++s] = i(m, I, x);
        }), d;
      }
      function Ff(n) {
        var i = rl(n);
        return i.length == 1 && i[0][2] ? sd(i[0][0], i[0][1]) : function(s) {
          return s === n || Va(s, n, i);
        };
      }
      function Rf(n, i) {
        return ul(n) && od(i) ? sd(Kn(n), i) : function(s) {
          var d = gl(s, n);
          return d === r && d === i ? ml(s, n) : Ou(i, d, S | A);
        };
      }
      function Qo(n, i, s, d, m) {
        n !== i && La(i, function(I, x) {
          if (m || (m = new Hn()), pt(I))
            Hb(n, i, x, s, Qo, d, m);
          else {
            var R = d ? d(sl(n, x), I, x + "", n, i, m) : r;
            R === r && (R = I), Ga(n, x, R);
          }
        }, rn);
      }
      function Hb(n, i, s, d, m, I, x) {
        var R = sl(n, s), B = sl(i, s), X = x.get(B);
        if (X) {
          Ga(n, s, X);
          return;
        }
        var H = I ? I(R, B, s + "", n, i, x) : r, J = H === r;
        if (J) {
          var ne = Pe(B), fe = !ne && Gr(B), ye = !ne && !fe && Vi(B);
          H = B, ne || fe || ye ? Pe(R) ? H = R : xt(R) ? H = tn(R) : fe ? (J = !1, H = Vf(B, !0)) : ye ? (J = !1, H = Wf(B, !0)) : H = [] : ku(B) || si(B) ? (H = R, si(R) ? H = Dd(R) : (!pt(R) || br(R)) && (H = ud(B))) : J = !1;
        }
        J && (x.set(B, H), m(H, B, d, I, x), x.delete(B)), Ga(n, s, H);
      }
      function Pf(n, i) {
        var s = n.length;
        if (s)
          return i += i < 0 ? s : 0, mr(i, s) ? n[i] : r;
      }
      function Of(n, i, s) {
        i.length ? i = ht(i, function(I) {
          return Pe(I) ? function(x) {
            return ii(x, I.length === 1 ? I[0] : I);
          } : I;
        }) : i = [un];
        var d = -1;
        i = ht(i, mn(me()));
        var m = Ef(n, function(I, x, R) {
          var B = ht(i, function(X) {
            return X(I);
          });
          return { criteria: B, index: ++d, value: I };
        });
        return mm(m, function(I, x) {
          return n0(I, x, s);
        });
      }
      function zb(n, i) {
        return _f(n, i, function(s, d) {
          return ml(n, d);
        });
      }
      function _f(n, i, s) {
        for (var d = -1, m = i.length, I = {}; ++d < m; ) {
          var x = i[d], R = ii(n, x);
          s(R, x) && _u(I, Tr(x, n), R);
        }
        return I;
      }
      function Zb(n) {
        return function(i) {
          return ii(i, n);
        };
      }
      function Ha(n, i, s, d) {
        var m = d ? gm : Pi, I = -1, x = i.length, R = n;
        for (n === i && (i = tn(i)), s && (R = ht(n, mn(s))); ++I < x; )
          for (var B = 0, X = i[I], H = s ? s(X) : X; (B = m(R, H, B, d)) > -1; )
            R !== n && Vo.call(R, B, 1), Vo.call(n, B, 1);
        return n;
      }
      function Tf(n, i) {
        for (var s = n ? i.length : 0, d = s - 1; s--; ) {
          var m = i[s];
          if (s == d || m !== I) {
            var I = m;
            mr(m) ? Vo.call(n, m, 1) : Ja(n, m);
          }
        }
        return n;
      }
      function za(n, i) {
        return n + Ho(df() * (i - n + 1));
      }
      function Yb(n, i, s, d) {
        for (var m = -1, I = Ot(Xo((i - n) / (s || 1)), 0), x = D(I); I--; )
          x[d ? I : ++m] = n, n += s;
        return x;
      }
      function Za(n, i) {
        var s = "";
        if (!n || i < 1 || i > Fe)
          return s;
        do
          i % 2 && (s += n), i = Ho(i / 2), i && (n += n);
        while (i);
        return s;
      }
      function Me(n, i) {
        return al(ad(n, i, un), n + "");
      }
      function Jb(n) {
        return gf(Wi(n));
      }
      function Ub(n, i) {
        var s = Wi(n);
        return os(s, ri(i, 0, s.length));
      }
      function _u(n, i, s, d) {
        if (!pt(n))
          return n;
        i = Tr(i, n);
        for (var m = -1, I = i.length, x = I - 1, R = n; R != null && ++m < I; ) {
          var B = Kn(i[m]), X = s;
          if (B === "__proto__" || B === "constructor" || B === "prototype")
            return n;
          if (m != x) {
            var H = R[B];
            X = d ? d(H, B, R) : r, X === r && (X = pt(H) ? H : mr(i[m + 1]) ? [] : {});
          }
          Fu(R, B, X), R = R[B];
        }
        return n;
      }
      var Bf = zo ? function(n, i) {
        return zo.set(n, i), n;
      } : un, jb = Wo ? function(n, i) {
        return Wo(n, "toString", {
          configurable: !0,
          enumerable: !1,
          value: yl(i),
          writable: !0
        });
      } : un;
      function Qb(n) {
        return os(Wi(n));
      }
      function Tn(n, i, s) {
        var d = -1, m = n.length;
        i < 0 && (i = -i > m ? 0 : m + i), s = s > m ? m : s, s < 0 && (s += m), m = i > s ? 0 : s - i >>> 0, i >>>= 0;
        for (var I = D(m); ++d < m; )
          I[d] = n[d + i];
        return I;
      }
      function qb(n, i) {
        var s;
        return Or(n, function(d, m, I) {
          return s = i(d, m, I), !s;
        }), !!s;
      }
      function qo(n, i, s) {
        var d = 0, m = n == null ? d : n.length;
        if (typeof i == "number" && i === i && m <= E) {
          for (; d < m; ) {
            var I = d + m >>> 1, x = n[I];
            x !== null && !yn(x) && (s ? x <= i : x < i) ? d = I + 1 : m = I;
          }
          return m;
        }
        return Ya(n, i, un, s);
      }
      function Ya(n, i, s, d) {
        var m = 0, I = n == null ? 0 : n.length;
        if (I === 0)
          return 0;
        i = s(i);
        for (var x = i !== i, R = i === null, B = yn(i), X = i === r; m < I; ) {
          var H = Ho((m + I) / 2), J = s(n[H]), ne = J !== r, fe = J === null, ye = J === J, Le = yn(J);
          if (x)
            var ve = d || ye;
          else X ? ve = ye && (d || ne) : R ? ve = ye && ne && (d || !fe) : B ? ve = ye && ne && !fe && (d || !Le) : fe || Le ? ve = !1 : ve = d ? J <= i : J < i;
          ve ? m = H + 1 : I = H;
        }
        return Wt(I, Ge);
      }
      function Gf(n, i) {
        for (var s = -1, d = n.length, m = 0, I = []; ++s < d; ) {
          var x = n[s], R = i ? i(x) : x;
          if (!s || !zn(R, B)) {
            var B = R;
            I[m++] = x === 0 ? 0 : x;
          }
        }
        return I;
      }
      function kf(n) {
        return typeof n == "number" ? n : yn(n) ? w : +n;
      }
      function bn(n) {
        if (typeof n == "string")
          return n;
        if (Pe(n))
          return ht(n, bn) + "";
        if (yn(n))
          return hf ? hf.call(n) : "";
        var i = n + "";
        return i == "0" && 1 / n == -1 / 0 ? "-0" : i;
      }
      function _r(n, i, s) {
        var d = -1, m = Oo, I = n.length, x = !0, R = [], B = R;
        if (s)
          x = !1, m = Ca;
        else if (I >= o) {
          var X = i ? null : a0(n);
          if (X)
            return To(X);
          x = !1, m = Cu, B = new ni();
        } else
          B = i ? [] : R;
        e:
          for (; ++d < I; ) {
            var H = n[d], J = i ? i(H) : H;
            if (H = s || H !== 0 ? H : 0, x && J === J) {
              for (var ne = B.length; ne--; )
                if (B[ne] === J)
                  continue e;
              i && B.push(J), R.push(H);
            } else m(B, J, s) || (B !== R && B.push(J), R.push(H));
          }
        return R;
      }
      function Ja(n, i) {
        return i = Tr(i, n), n = ld(n, i), n == null || delete n[Kn(Bn(i))];
      }
      function Lf(n, i, s, d) {
        return _u(n, i, s(ii(n, i)), d);
      }
      function $o(n, i, s, d) {
        for (var m = n.length, I = d ? m : -1; (d ? I-- : ++I < m) && i(n[I], I, n); )
          ;
        return s ? Tn(n, d ? 0 : I, d ? I + 1 : m) : Tn(n, d ? I + 1 : 0, d ? m : I);
      }
      function Df(n, i) {
        var s = n;
        return s instanceof We && (s = s.value()), xa(i, function(d, m) {
          return m.func.apply(m.thisArg, Fr([d], m.args));
        }, s);
      }
      function Ua(n, i, s) {
        var d = n.length;
        if (d < 2)
          return d ? _r(n[0]) : [];
        for (var m = -1, I = D(d); ++m < d; )
          for (var x = n[m], R = -1; ++R < d; )
            R != m && (I[m] = Ru(I[m] || x, n[R], i, s));
        return _r(Dt(I, 1), i, s);
      }
      function Mf(n, i, s) {
        for (var d = -1, m = n.length, I = i.length, x = {}; ++d < m; ) {
          var R = d < I ? i[d] : r;
          s(x, n[d], R);
        }
        return x;
      }
      function ja(n) {
        return xt(n) ? n : [];
      }
      function Qa(n) {
        return typeof n == "function" ? n : un;
      }
      function Tr(n, i) {
        return Pe(n) ? n : ul(n, i) ? [n] : hd(qe(n));
      }
      var $b = Me;
      function Br(n, i, s) {
        var d = n.length;
        return s = s === r ? d : s, !i && s >= d ? n : Tn(n, i, s);
      }
      var Nf = Nm || function(n) {
        return Xe.clearTimeout(n);
      };
      function Vf(n, i) {
        if (i)
          return n.slice();
        var s = n.length, d = sf ? sf(s) : new n.constructor(s);
        return n.copy(d), d;
      }
      function qa(n) {
        var i = new n.constructor(n.byteLength);
        return new Mo(i).set(new Mo(n)), i;
      }
      function Kb(n, i) {
        var s = i ? qa(n.buffer) : n.buffer;
        return new n.constructor(s, n.byteOffset, n.byteLength);
      }
      function e0(n) {
        var i = new n.constructor(n.source, En.exec(n));
        return i.lastIndex = n.lastIndex, i;
      }
      function t0(n) {
        return Eu ? st(Eu.call(n)) : {};
      }
      function Wf(n, i) {
        var s = i ? qa(n.buffer) : n.buffer;
        return new n.constructor(s, n.byteOffset, n.length);
      }
      function Xf(n, i) {
        if (n !== i) {
          var s = n !== r, d = n === null, m = n === n, I = yn(n), x = i !== r, R = i === null, B = i === i, X = yn(i);
          if (!R && !X && !I && n > i || I && x && B && !R && !X || d && x && B || !s && B || !m)
            return 1;
          if (!d && !I && !X && n < i || X && s && m && !d && !I || R && s && m || !x && m || !B)
            return -1;
        }
        return 0;
      }
      function n0(n, i, s) {
        for (var d = -1, m = n.criteria, I = i.criteria, x = m.length, R = s.length; ++d < x; ) {
          var B = Xf(m[d], I[d]);
          if (B) {
            if (d >= R)
              return B;
            var X = s[d];
            return B * (X == "desc" ? -1 : 1);
          }
        }
        return n.index - i.index;
      }
      function Hf(n, i, s, d) {
        for (var m = -1, I = n.length, x = s.length, R = -1, B = i.length, X = Ot(I - x, 0), H = D(B + X), J = !d; ++R < B; )
          H[R] = i[R];
        for (; ++m < x; )
          (J || m < I) && (H[s[m]] = n[m]);
        for (; X--; )
          H[R++] = n[m++];
        return H;
      }
      function zf(n, i, s, d) {
        for (var m = -1, I = n.length, x = -1, R = s.length, B = -1, X = i.length, H = Ot(I - R, 0), J = D(H + X), ne = !d; ++m < H; )
          J[m] = n[m];
        for (var fe = m; ++B < X; )
          J[fe + B] = i[B];
        for (; ++x < R; )
          (ne || m < I) && (J[fe + s[x]] = n[m++]);
        return J;
      }
      function tn(n, i) {
        var s = -1, d = n.length;
        for (i || (i = D(d)); ++s < d; )
          i[s] = n[s];
        return i;
      }
      function $n(n, i, s, d) {
        var m = !s;
        s || (s = {});
        for (var I = -1, x = i.length; ++I < x; ) {
          var R = i[I], B = d ? d(s[R], n[R], R, s, n) : r;
          B === r && (B = n[R]), m ? hr(s, R, B) : Fu(s, R, B);
        }
        return s;
      }
      function r0(n, i) {
        return $n(n, il(n), i);
      }
      function i0(n, i) {
        return $n(n, rd(n), i);
      }
      function Ko(n, i) {
        return function(s, d) {
          var m = Pe(s) ? lm : Eb, I = i ? i() : {};
          return m(s, n, me(d, 2), I);
        };
      }
      function Di(n) {
        return Me(function(i, s) {
          var d = -1, m = s.length, I = m > 1 ? s[m - 1] : r, x = m > 2 ? s[2] : r;
          for (I = n.length > 3 && typeof I == "function" ? (m--, I) : r, x && Ut(s[0], s[1], x) && (I = m < 3 ? r : I, m = 1), i = st(i); ++d < m; ) {
            var R = s[d];
            R && n(i, R, d, I);
          }
          return i;
        });
      }
      function Zf(n, i) {
        return function(s, d) {
          if (s == null)
            return s;
          if (!nn(s))
            return n(s, d);
          for (var m = s.length, I = i ? m : -1, x = st(s); (i ? I-- : ++I < m) && d(x[I], I, x) !== !1; )
            ;
          return s;
        };
      }
      function Yf(n) {
        return function(i, s, d) {
          for (var m = -1, I = st(i), x = d(i), R = x.length; R--; ) {
            var B = x[n ? R : ++m];
            if (s(I[B], B, I) === !1)
              break;
          }
          return i;
        };
      }
      function u0(n, i, s) {
        var d = i & F, m = Tu(n);
        function I() {
          var x = this && this !== Xe && this instanceof I ? m : n;
          return x.apply(d ? s : this, arguments);
        }
        return I;
      }
      function Jf(n) {
        return function(i) {
          i = qe(i);
          var s = Oi(i) ? Xn(i) : r, d = s ? s[0] : i.charAt(0), m = s ? Br(s, 1).join("") : i.slice(1);
          return d[n]() + m;
        };
      }
      function Mi(n) {
        return function(i) {
          return xa(Zd(zd(i).replace(vu, "")), n, "");
        };
      }
      function Tu(n) {
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return new n();
            case 1:
              return new n(i[0]);
            case 2:
              return new n(i[0], i[1]);
            case 3:
              return new n(i[0], i[1], i[2]);
            case 4:
              return new n(i[0], i[1], i[2], i[3]);
            case 5:
              return new n(i[0], i[1], i[2], i[3], i[4]);
            case 6:
              return new n(i[0], i[1], i[2], i[3], i[4], i[5]);
            case 7:
              return new n(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
          }
          var s = Li(n.prototype), d = n.apply(s, i);
          return pt(d) ? d : s;
        };
      }
      function o0(n, i, s) {
        var d = Tu(n);
        function m() {
          for (var I = arguments.length, x = D(I), R = I, B = Ni(m); R--; )
            x[R] = arguments[R];
          var X = I < 3 && x[0] !== B && x[I - 1] !== B ? [] : Rr(x, B);
          if (I -= X.length, I < s)
            return $f(
              n,
              i,
              es,
              m.placeholder,
              r,
              x,
              X,
              r,
              r,
              s - I
            );
          var H = this && this !== Xe && this instanceof m ? d : n;
          return Tt(H, this, x);
        }
        return m;
      }
      function Uf(n) {
        return function(i, s, d) {
          var m = st(i);
          if (!nn(i)) {
            var I = me(s, 3);
            i = Bt(i), s = function(R) {
              return I(m[R], R, m);
            };
          }
          var x = n(i, s, d);
          return x > -1 ? m[I ? i[x] : x] : r;
        };
      }
      function jf(n) {
        return gr(function(i) {
          var s = i.length, d = s, m = On.prototype.thru;
          for (n && i.reverse(); d--; ) {
            var I = i[d];
            if (typeof I != "function")
              throw new Pn(l);
            if (m && !x && is(I) == "wrapper")
              var x = new On([], !0);
          }
          for (d = x ? d : s; ++d < s; ) {
            I = i[d];
            var R = is(I), B = R == "wrapper" ? nl(I) : r;
            B && ol(B[0]) && B[1] == (j | k | U | M) && !B[4].length && B[9] == 1 ? x = x[is(B[0])].apply(x, B[3]) : x = I.length == 1 && ol(I) ? x[R]() : x.thru(I);
          }
          return function() {
            var X = arguments, H = X[0];
            if (x && X.length == 1 && Pe(H))
              return x.plant(H).value();
            for (var J = 0, ne = s ? i[J].apply(this, X) : H; ++J < s; )
              ne = i[J].call(this, ne);
            return ne;
          };
        });
      }
      function es(n, i, s, d, m, I, x, R, B, X) {
        var H = i & j, J = i & F, ne = i & P, fe = i & (k | N), ye = i & Y, Le = ne ? r : Tu(n);
        function ve() {
          for (var Ne = arguments.length, He = D(Ne), vn = Ne; vn--; )
            He[vn] = arguments[vn];
          if (fe)
            var jt = Ni(ve), In = ym(He, jt);
          if (d && (He = Hf(He, d, m, fe)), I && (He = zf(He, I, x, fe)), Ne -= In, fe && Ne < X) {
            var At = Rr(He, jt);
            return $f(
              n,
              i,
              es,
              ve.placeholder,
              s,
              He,
              At,
              R,
              B,
              X - Ne
            );
          }
          var Zn = J ? s : this, vr = ne ? Zn[n] : n;
          return Ne = He.length, R ? He = E0(He, R) : ye && Ne > 1 && He.reverse(), H && B < Ne && (He.length = B), this && this !== Xe && this instanceof ve && (vr = Le || Tu(vr)), vr.apply(Zn, He);
        }
        return ve;
      }
      function Qf(n, i) {
        return function(s, d) {
          return Gb(s, n, i(d), {});
        };
      }
      function ts(n, i) {
        return function(s, d) {
          var m;
          if (s === r && d === r)
            return i;
          if (s !== r && (m = s), d !== r) {
            if (m === r)
              return d;
            typeof s == "string" || typeof d == "string" ? (s = bn(s), d = bn(d)) : (s = kf(s), d = kf(d)), m = n(s, d);
          }
          return m;
        };
      }
      function $a(n) {
        return gr(function(i) {
          return i = ht(i, mn(me())), Me(function(s) {
            var d = this;
            return n(i, function(m) {
              return Tt(m, d, s);
            });
          });
        });
      }
      function ns(n, i) {
        i = i === r ? " " : bn(i);
        var s = i.length;
        if (s < 2)
          return s ? Za(i, n) : i;
        var d = Za(i, Xo(n / _i(i)));
        return Oi(i) ? Br(Xn(d), 0, n).join("") : d.slice(0, n);
      }
      function s0(n, i, s, d) {
        var m = i & F, I = Tu(n);
        function x() {
          for (var R = -1, B = arguments.length, X = -1, H = d.length, J = D(H + B), ne = this && this !== Xe && this instanceof x ? I : n; ++X < H; )
            J[X] = d[X];
          for (; B--; )
            J[X++] = arguments[++R];
          return Tt(ne, m ? s : this, J);
        }
        return x;
      }
      function qf(n) {
        return function(i, s, d) {
          return d && typeof d != "number" && Ut(i, s, d) && (s = d = r), i = yr(i), s === r ? (s = i, i = 0) : s = yr(s), d = d === r ? i < s ? 1 : -1 : yr(d), Yb(i, s, d, n);
        };
      }
      function rs(n) {
        return function(i, s) {
          return typeof i == "string" && typeof s == "string" || (i = Gn(i), s = Gn(s)), n(i, s);
        };
      }
      function $f(n, i, s, d, m, I, x, R, B, X) {
        var H = i & k, J = H ? x : r, ne = H ? r : x, fe = H ? I : r, ye = H ? r : I;
        i |= H ? U : G, i &= ~(H ? G : U), i & W || (i &= -4);
        var Le = [
          n,
          i,
          m,
          fe,
          J,
          ye,
          ne,
          R,
          B,
          X
        ], ve = s.apply(r, Le);
        return ol(n) && cd(ve, Le), ve.placeholder = d, fd(ve, n, i);
      }
      function Ka(n) {
        var i = Pt[n];
        return function(s, d) {
          if (s = Gn(s), d = d == null ? 0 : Wt(ke(d), 292), d && ff(s)) {
            var m = (qe(s) + "e").split("e"), I = i(m[0] + "e" + (+m[1] + d));
            return m = (qe(I) + "e").split("e"), +(m[0] + "e" + (+m[1] - d));
          }
          return i(s);
        };
      }
      var a0 = Gi && 1 / To(new Gi([, -0]))[1] == we ? function(n) {
        return new Gi(n);
      } : Cl;
      function Kf(n) {
        return function(i) {
          var s = Xt(i);
          return s == It ? Pa(i) : s == Lt ? Sm(i) : bm(i, n(i));
        };
      }
      function pr(n, i, s, d, m, I, x, R) {
        var B = i & P;
        if (!B && typeof n != "function")
          throw new Pn(l);
        var X = d ? d.length : 0;
        if (X || (i &= -97, d = m = r), x = x === r ? x : Ot(ke(x), 0), R = R === r ? R : ke(R), X -= m ? m.length : 0, i & G) {
          var H = d, J = m;
          d = m = r;
        }
        var ne = B ? r : nl(n), fe = [
          n,
          i,
          s,
          d,
          m,
          H,
          J,
          I,
          x,
          R
        ];
        if (ne && A0(fe, ne), n = fe[0], i = fe[1], s = fe[2], d = fe[3], m = fe[4], R = fe[9] = fe[9] === r ? B ? 0 : n.length : Ot(fe[9] - X, 0), !R && i & (k | N) && (i &= -25), !i || i == F)
          var ye = u0(n, i, s);
        else i == k || i == N ? ye = o0(n, i, R) : (i == U || i == (F | U)) && !m.length ? ye = s0(n, i, s, d) : ye = es.apply(r, fe);
        var Le = ne ? Bf : cd;
        return fd(Le(ye, fe), n, i);
      }
      function ed(n, i, s, d) {
        return n === r || zn(n, Bi[s]) && !et.call(d, s) ? i : n;
      }
      function td(n, i, s, d, m, I) {
        return pt(n) && pt(i) && (I.set(i, n), Qo(n, i, r, td, I), I.delete(i)), n;
      }
      function l0(n) {
        return ku(n) ? r : n;
      }
      function nd(n, i, s, d, m, I) {
        var x = s & S, R = n.length, B = i.length;
        if (R != B && !(x && B > R))
          return !1;
        var X = I.get(n), H = I.get(i);
        if (X && H)
          return X == i && H == n;
        var J = -1, ne = !0, fe = s & A ? new ni() : r;
        for (I.set(n, i), I.set(i, n); ++J < R; ) {
          var ye = n[J], Le = i[J];
          if (d)
            var ve = x ? d(Le, ye, J, i, n, I) : d(ye, Le, J, n, i, I);
          if (ve !== r) {
            if (ve)
              continue;
            ne = !1;
            break;
          }
          if (fe) {
            if (!Aa(i, function(Ne, He) {
              if (!Cu(fe, He) && (ye === Ne || m(ye, Ne, s, d, I)))
                return fe.push(He);
            })) {
              ne = !1;
              break;
            }
          } else if (!(ye === Le || m(ye, Le, s, d, I))) {
            ne = !1;
            break;
          }
        }
        return I.delete(n), I.delete(i), ne;
      }
      function c0(n, i, s, d, m, I, x) {
        switch (s) {
          case pe:
            if (n.byteLength != i.byteLength || n.byteOffset != i.byteOffset)
              return !1;
            n = n.buffer, i = i.buffer;
          case q:
            return !(n.byteLength != i.byteLength || !I(new Mo(n), new Mo(i)));
          case De:
          case gt:
          case te:
            return zn(+n, +i);
          case Gt:
            return n.name == i.name && n.message == i.message;
          case mt:
          case Nn:
            return n == i + "";
          case It:
            var R = Pa;
          case Lt:
            var B = d & S;
            if (R || (R = To), n.size != i.size && !B)
              return !1;
            var X = x.get(n);
            if (X)
              return X == i;
            d |= A, x.set(n, i);
            var H = nd(R(n), R(i), d, m, I, x);
            return x.delete(n), H;
          case tt:
            if (Eu)
              return Eu.call(n) == Eu.call(i);
        }
        return !1;
      }
      function f0(n, i, s, d, m, I) {
        var x = s & S, R = el(n), B = R.length, X = el(i), H = X.length;
        if (B != H && !x)
          return !1;
        for (var J = B; J--; ) {
          var ne = R[J];
          if (!(x ? ne in i : et.call(i, ne)))
            return !1;
        }
        var fe = I.get(n), ye = I.get(i);
        if (fe && ye)
          return fe == i && ye == n;
        var Le = !0;
        I.set(n, i), I.set(i, n);
        for (var ve = x; ++J < B; ) {
          ne = R[J];
          var Ne = n[ne], He = i[ne];
          if (d)
            var vn = x ? d(He, Ne, ne, i, n, I) : d(Ne, He, ne, n, i, I);
          if (!(vn === r ? Ne === He || m(Ne, He, s, d, I) : vn)) {
            Le = !1;
            break;
          }
          ve || (ve = ne == "constructor");
        }
        if (Le && !ve) {
          var jt = n.constructor, In = i.constructor;
          jt != In && "constructor" in n && "constructor" in i && !(typeof jt == "function" && jt instanceof jt && typeof In == "function" && In instanceof In) && (Le = !1);
        }
        return I.delete(n), I.delete(i), Le;
      }
      function gr(n) {
        return al(ad(n, r, bd), n + "");
      }
      function el(n) {
        return xf(n, Bt, il);
      }
      function tl(n) {
        return xf(n, rn, rd);
      }
      var nl = zo ? function(n) {
        return zo.get(n);
      } : Cl;
      function is(n) {
        for (var i = n.name + "", s = ki[i], d = et.call(ki, i) ? s.length : 0; d--; ) {
          var m = s[d], I = m.func;
          if (I == null || I == n)
            return m.name;
        }
        return i;
      }
      function Ni(n) {
        var i = et.call(y, "placeholder") ? y : n;
        return i.placeholder;
      }
      function me() {
        var n = y.iteratee || vl;
        return n = n === vl ? Sf : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function us(n, i) {
        var s = n.__data__;
        return v0(i) ? s[typeof i == "string" ? "string" : "hash"] : s.map;
      }
      function rl(n) {
        for (var i = Bt(n), s = i.length; s--; ) {
          var d = i[s], m = n[d];
          i[s] = [d, m, od(m)];
        }
        return i;
      }
      function ui(n, i) {
        var s = xm(n, i);
        return wf(s) ? s : r;
      }
      function d0(n) {
        var i = et.call(n, ei), s = n[ei];
        try {
          n[ei] = r;
          var d = !0;
        } catch {
        }
        var m = Lo.call(n);
        return d && (i ? n[ei] = s : delete n[ei]), m;
      }
      var il = _a ? function(n) {
        return n == null ? [] : (n = st(n), Er(_a(n), function(i) {
          return lf.call(n, i);
        }));
      } : xl, rd = _a ? function(n) {
        for (var i = []; n; )
          Fr(i, il(n)), n = No(n);
        return i;
      } : xl, Xt = Jt;
      (Ta && Xt(new Ta(new ArrayBuffer(1))) != pe || Au && Xt(new Au()) != It || Ba && Xt(Ba.resolve()) != Ve || Gi && Xt(new Gi()) != Lt || wu && Xt(new wu()) != Qe) && (Xt = function(n) {
        var i = Jt(n), s = i == le ? n.constructor : r, d = s ? oi(s) : "";
        if (d)
          switch (d) {
            case Um:
              return pe;
            case jm:
              return It;
            case Qm:
              return Ve;
            case qm:
              return Lt;
            case $m:
              return Qe;
          }
        return i;
      });
      function h0(n, i, s) {
        for (var d = -1, m = s.length; ++d < m; ) {
          var I = s[d], x = I.size;
          switch (I.type) {
            case "drop":
              n += x;
              break;
            case "dropRight":
              i -= x;
              break;
            case "take":
              i = Wt(i, n + x);
              break;
            case "takeRight":
              n = Ot(n, i - x);
              break;
          }
        }
        return { start: n, end: i };
      }
      function p0(n) {
        var i = n.match(ar);
        return i ? i[1].split($s) : [];
      }
      function id(n, i, s) {
        i = Tr(i, n);
        for (var d = -1, m = i.length, I = !1; ++d < m; ) {
          var x = Kn(i[d]);
          if (!(I = n != null && s(n, x)))
            break;
          n = n[x];
        }
        return I || ++d != m ? I : (m = n == null ? 0 : n.length, !!m && ds(m) && mr(x, m) && (Pe(n) || si(n)));
      }
      function g0(n) {
        var i = n.length, s = new n.constructor(i);
        return i && typeof n[0] == "string" && et.call(n, "index") && (s.index = n.index, s.input = n.input), s;
      }
      function ud(n) {
        return typeof n.constructor == "function" && !Bu(n) ? Li(No(n)) : {};
      }
      function m0(n, i, s) {
        var d = n.constructor;
        switch (i) {
          case q:
            return qa(n);
          case De:
          case gt:
            return new d(+n);
          case pe:
            return Kb(n, s);
          case _e:
          case Te:
          case _t:
          case $t:
          case Zt:
          case Sn:
          case Kt:
          case St:
          case hn:
            return Wf(n, s);
          case It:
            return new d();
          case te:
          case Nn:
            return new d(n);
          case mt:
            return e0(n);
          case Lt:
            return new d();
          case tt:
            return t0(n);
        }
      }
      function b0(n, i) {
        var s = i.length;
        if (!s)
          return n;
        var d = s - 1;
        return i[d] = (s > 1 ? "& " : "") + i[d], i = i.join(s > 2 ? ", " : " "), n.replace(mu, `{
/* [wrapped with ` + i + `] */
`);
      }
      function y0(n) {
        return Pe(n) || si(n) || !!(cf && n && n[cf]);
      }
      function mr(n, i) {
        var s = typeof n;
        return i = i ?? Fe, !!i && (s == "number" || s != "symbol" && sa.test(n)) && n > -1 && n % 1 == 0 && n < i;
      }
      function Ut(n, i, s) {
        if (!pt(s))
          return !1;
        var d = typeof i;
        return (d == "number" ? nn(s) && mr(i, s.length) : d == "string" && i in s) ? zn(s[i], n) : !1;
      }
      function ul(n, i) {
        if (Pe(n))
          return !1;
        var s = typeof n;
        return s == "number" || s == "symbol" || s == "boolean" || n == null || yn(n) ? !0 : js.test(n) || !Ur.test(n) || i != null && n in st(i);
      }
      function v0(n) {
        var i = typeof n;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? n !== "__proto__" : n === null;
      }
      function ol(n) {
        var i = is(n), s = y[i];
        if (typeof s != "function" || !(i in We.prototype))
          return !1;
        if (n === s)
          return !0;
        var d = nl(s);
        return !!d && n === d[0];
      }
      function I0(n) {
        return !!of && of in n;
      }
      var C0 = Go ? br : Al;
      function Bu(n) {
        var i = n && n.constructor, s = typeof i == "function" && i.prototype || Bi;
        return n === s;
      }
      function od(n) {
        return n === n && !pt(n);
      }
      function sd(n, i) {
        return function(s) {
          return s == null ? !1 : s[n] === i && (i !== r || n in st(s));
        };
      }
      function x0(n) {
        var i = cs(n, function(d) {
          return s.size === h && s.clear(), d;
        }), s = i.cache;
        return i;
      }
      function A0(n, i) {
        var s = n[1], d = i[1], m = s | d, I = m < (F | P | j), x = d == j && s == k || d == j && s == M && n[7].length <= i[8] || d == (j | M) && i[7].length <= i[8] && s == k;
        if (!(I || x))
          return n;
        d & F && (n[2] = i[2], m |= s & F ? 0 : W);
        var R = i[3];
        if (R) {
          var B = n[3];
          n[3] = B ? Hf(B, R, i[4]) : R, n[4] = B ? Rr(n[3], p) : i[4];
        }
        return R = i[5], R && (B = n[5], n[5] = B ? zf(B, R, i[6]) : R, n[6] = B ? Rr(n[5], p) : i[6]), R = i[7], R && (n[7] = R), d & j && (n[8] = n[8] == null ? i[8] : Wt(n[8], i[8])), n[9] == null && (n[9] = i[9]), n[0] = i[0], n[1] = m, n;
      }
      function w0(n) {
        var i = [];
        if (n != null)
          for (var s in st(n))
            i.push(s);
        return i;
      }
      function S0(n) {
        return Lo.call(n);
      }
      function ad(n, i, s) {
        return i = Ot(i === r ? n.length - 1 : i, 0), function() {
          for (var d = arguments, m = -1, I = Ot(d.length - i, 0), x = D(I); ++m < I; )
            x[m] = d[i + m];
          m = -1;
          for (var R = D(i + 1); ++m < i; )
            R[m] = d[m];
          return R[i] = s(x), Tt(n, this, R);
        };
      }
      function ld(n, i) {
        return i.length < 2 ? n : ii(n, Tn(i, 0, -1));
      }
      function E0(n, i) {
        for (var s = n.length, d = Wt(i.length, s), m = tn(n); d--; ) {
          var I = i[d];
          n[d] = mr(I, s) ? m[I] : r;
        }
        return n;
      }
      function sl(n, i) {
        if (!(i === "constructor" && typeof n[i] == "function") && i != "__proto__")
          return n[i];
      }
      var cd = dd(Bf), Gu = Wm || function(n, i) {
        return Xe.setTimeout(n, i);
      }, al = dd(jb);
      function fd(n, i, s) {
        var d = i + "";
        return al(n, b0(d, F0(p0(d), s)));
      }
      function dd(n) {
        var i = 0, s = 0;
        return function() {
          var d = Zm(), m = ee - (d - s);
          if (s = d, m > 0) {
            if (++i >= z)
              return arguments[0];
          } else
            i = 0;
          return n.apply(r, arguments);
        };
      }
      function os(n, i) {
        var s = -1, d = n.length, m = d - 1;
        for (i = i === r ? d : i; ++s < i; ) {
          var I = za(s, m), x = n[I];
          n[I] = n[s], n[s] = x;
        }
        return n.length = i, n;
      }
      var hd = x0(function(n) {
        var i = [];
        return n.charCodeAt(0) === 46 && i.push(""), n.replace(Qs, function(s, d, m, I) {
          i.push(m ? I.replace(ta, "$1") : d || s);
        }), i;
      });
      function Kn(n) {
        if (typeof n == "string" || yn(n))
          return n;
        var i = n + "";
        return i == "0" && 1 / n == -1 / 0 ? "-0" : i;
      }
      function oi(n) {
        if (n != null) {
          try {
            return ko.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function F0(n, i) {
        return Rn(Ye, function(s) {
          var d = "_." + s[0];
          i & s[1] && !Oo(n, d) && n.push(d);
        }), n.sort();
      }
      function pd(n) {
        if (n instanceof We)
          return n.clone();
        var i = new On(n.__wrapped__, n.__chain__);
        return i.__actions__ = tn(n.__actions__), i.__index__ = n.__index__, i.__values__ = n.__values__, i;
      }
      function R0(n, i, s) {
        (s ? Ut(n, i, s) : i === r) ? i = 1 : i = Ot(ke(i), 0);
        var d = n == null ? 0 : n.length;
        if (!d || i < 1)
          return [];
        for (var m = 0, I = 0, x = D(Xo(d / i)); m < d; )
          x[I++] = Tn(n, m, m += i);
        return x;
      }
      function P0(n) {
        for (var i = -1, s = n == null ? 0 : n.length, d = 0, m = []; ++i < s; ) {
          var I = n[i];
          I && (m[d++] = I);
        }
        return m;
      }
      function O0() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var i = D(n - 1), s = arguments[0], d = n; d--; )
          i[d - 1] = arguments[d];
        return Fr(Pe(s) ? tn(s) : [s], Dt(i, 1));
      }
      var _0 = Me(function(n, i) {
        return xt(n) ? Ru(n, Dt(i, 1, xt, !0)) : [];
      }), T0 = Me(function(n, i) {
        var s = Bn(i);
        return xt(s) && (s = r), xt(n) ? Ru(n, Dt(i, 1, xt, !0), me(s, 2)) : [];
      }), B0 = Me(function(n, i) {
        var s = Bn(i);
        return xt(s) && (s = r), xt(n) ? Ru(n, Dt(i, 1, xt, !0), r, s) : [];
      });
      function G0(n, i, s) {
        var d = n == null ? 0 : n.length;
        return d ? (i = s || i === r ? 1 : ke(i), Tn(n, i < 0 ? 0 : i, d)) : [];
      }
      function k0(n, i, s) {
        var d = n == null ? 0 : n.length;
        return d ? (i = s || i === r ? 1 : ke(i), i = d - i, Tn(n, 0, i < 0 ? 0 : i)) : [];
      }
      function L0(n, i) {
        return n && n.length ? $o(n, me(i, 3), !0, !0) : [];
      }
      function D0(n, i) {
        return n && n.length ? $o(n, me(i, 3), !0) : [];
      }
      function M0(n, i, s, d) {
        var m = n == null ? 0 : n.length;
        return m ? (s && typeof s != "number" && Ut(n, i, s) && (s = 0, d = m), Ob(n, i, s, d)) : [];
      }
      function gd(n, i, s) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = s == null ? 0 : ke(s);
        return m < 0 && (m = Ot(d + m, 0)), _o(n, me(i, 3), m);
      }
      function md(n, i, s) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = d - 1;
        return s !== r && (m = ke(s), m = s < 0 ? Ot(d + m, 0) : Wt(m, d - 1)), _o(n, me(i, 3), m, !0);
      }
      function bd(n) {
        var i = n == null ? 0 : n.length;
        return i ? Dt(n, 1) : [];
      }
      function N0(n) {
        var i = n == null ? 0 : n.length;
        return i ? Dt(n, we) : [];
      }
      function V0(n, i) {
        var s = n == null ? 0 : n.length;
        return s ? (i = i === r ? 1 : ke(i), Dt(n, i)) : [];
      }
      function W0(n) {
        for (var i = -1, s = n == null ? 0 : n.length, d = {}; ++i < s; ) {
          var m = n[i];
          d[m[0]] = m[1];
        }
        return d;
      }
      function yd(n) {
        return n && n.length ? n[0] : r;
      }
      function X0(n, i, s) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = s == null ? 0 : ke(s);
        return m < 0 && (m = Ot(d + m, 0)), Pi(n, i, m);
      }
      function H0(n) {
        var i = n == null ? 0 : n.length;
        return i ? Tn(n, 0, -1) : [];
      }
      var z0 = Me(function(n) {
        var i = ht(n, ja);
        return i.length && i[0] === n[0] ? Na(i) : [];
      }), Z0 = Me(function(n) {
        var i = Bn(n), s = ht(n, ja);
        return i === Bn(s) ? i = r : s.pop(), s.length && s[0] === n[0] ? Na(s, me(i, 2)) : [];
      }), Y0 = Me(function(n) {
        var i = Bn(n), s = ht(n, ja);
        return i = typeof i == "function" ? i : r, i && s.pop(), s.length && s[0] === n[0] ? Na(s, r, i) : [];
      });
      function J0(n, i) {
        return n == null ? "" : Hm.call(n, i);
      }
      function Bn(n) {
        var i = n == null ? 0 : n.length;
        return i ? n[i - 1] : r;
      }
      function U0(n, i, s) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = d;
        return s !== r && (m = ke(s), m = m < 0 ? Ot(d + m, 0) : Wt(m, d - 1)), i === i ? Fm(n, i, m) : _o(n, qc, m, !0);
      }
      function j0(n, i) {
        return n && n.length ? Pf(n, ke(i)) : r;
      }
      var Q0 = Me(vd);
      function vd(n, i) {
        return n && n.length && i && i.length ? Ha(n, i) : n;
      }
      function q0(n, i, s) {
        return n && n.length && i && i.length ? Ha(n, i, me(s, 2)) : n;
      }
      function $0(n, i, s) {
        return n && n.length && i && i.length ? Ha(n, i, r, s) : n;
      }
      var K0 = gr(function(n, i) {
        var s = n == null ? 0 : n.length, d = ka(n, i);
        return Tf(n, ht(i, function(m) {
          return mr(m, s) ? +m : m;
        }).sort(Xf)), d;
      });
      function ey(n, i) {
        var s = [];
        if (!(n && n.length))
          return s;
        var d = -1, m = [], I = n.length;
        for (i = me(i, 3); ++d < I; ) {
          var x = n[d];
          i(x, d, n) && (s.push(x), m.push(d));
        }
        return Tf(n, m), s;
      }
      function ll(n) {
        return n == null ? n : Jm.call(n);
      }
      function ty(n, i, s) {
        var d = n == null ? 0 : n.length;
        return d ? (s && typeof s != "number" && Ut(n, i, s) ? (i = 0, s = d) : (i = i == null ? 0 : ke(i), s = s === r ? d : ke(s)), Tn(n, i, s)) : [];
      }
      function ny(n, i) {
        return qo(n, i);
      }
      function ry(n, i, s) {
        return Ya(n, i, me(s, 2));
      }
      function iy(n, i) {
        var s = n == null ? 0 : n.length;
        if (s) {
          var d = qo(n, i);
          if (d < s && zn(n[d], i))
            return d;
        }
        return -1;
      }
      function uy(n, i) {
        return qo(n, i, !0);
      }
      function oy(n, i, s) {
        return Ya(n, i, me(s, 2), !0);
      }
      function sy(n, i) {
        var s = n == null ? 0 : n.length;
        if (s) {
          var d = qo(n, i, !0) - 1;
          if (zn(n[d], i))
            return d;
        }
        return -1;
      }
      function ay(n) {
        return n && n.length ? Gf(n) : [];
      }
      function ly(n, i) {
        return n && n.length ? Gf(n, me(i, 2)) : [];
      }
      function cy(n) {
        var i = n == null ? 0 : n.length;
        return i ? Tn(n, 1, i) : [];
      }
      function fy(n, i, s) {
        return n && n.length ? (i = s || i === r ? 1 : ke(i), Tn(n, 0, i < 0 ? 0 : i)) : [];
      }
      function dy(n, i, s) {
        var d = n == null ? 0 : n.length;
        return d ? (i = s || i === r ? 1 : ke(i), i = d - i, Tn(n, i < 0 ? 0 : i, d)) : [];
      }
      function hy(n, i) {
        return n && n.length ? $o(n, me(i, 3), !1, !0) : [];
      }
      function py(n, i) {
        return n && n.length ? $o(n, me(i, 3)) : [];
      }
      var gy = Me(function(n) {
        return _r(Dt(n, 1, xt, !0));
      }), my = Me(function(n) {
        var i = Bn(n);
        return xt(i) && (i = r), _r(Dt(n, 1, xt, !0), me(i, 2));
      }), by = Me(function(n) {
        var i = Bn(n);
        return i = typeof i == "function" ? i : r, _r(Dt(n, 1, xt, !0), r, i);
      });
      function yy(n) {
        return n && n.length ? _r(n) : [];
      }
      function vy(n, i) {
        return n && n.length ? _r(n, me(i, 2)) : [];
      }
      function Iy(n, i) {
        return i = typeof i == "function" ? i : r, n && n.length ? _r(n, r, i) : [];
      }
      function cl(n) {
        if (!(n && n.length))
          return [];
        var i = 0;
        return n = Er(n, function(s) {
          if (xt(s))
            return i = Ot(s.length, i), !0;
        }), Fa(i, function(s) {
          return ht(n, wa(s));
        });
      }
      function Id(n, i) {
        if (!(n && n.length))
          return [];
        var s = cl(n);
        return i == null ? s : ht(s, function(d) {
          return Tt(i, r, d);
        });
      }
      var Cy = Me(function(n, i) {
        return xt(n) ? Ru(n, i) : [];
      }), xy = Me(function(n) {
        return Ua(Er(n, xt));
      }), Ay = Me(function(n) {
        var i = Bn(n);
        return xt(i) && (i = r), Ua(Er(n, xt), me(i, 2));
      }), wy = Me(function(n) {
        var i = Bn(n);
        return i = typeof i == "function" ? i : r, Ua(Er(n, xt), r, i);
      }), Sy = Me(cl);
      function Ey(n, i) {
        return Mf(n || [], i || [], Fu);
      }
      function Fy(n, i) {
        return Mf(n || [], i || [], _u);
      }
      var Ry = Me(function(n) {
        var i = n.length, s = i > 1 ? n[i - 1] : r;
        return s = typeof s == "function" ? (n.pop(), s) : r, Id(n, s);
      });
      function Cd(n) {
        var i = y(n);
        return i.__chain__ = !0, i;
      }
      function Py(n, i) {
        return i(n), n;
      }
      function ss(n, i) {
        return i(n);
      }
      var Oy = gr(function(n) {
        var i = n.length, s = i ? n[0] : 0, d = this.__wrapped__, m = function(I) {
          return ka(I, n);
        };
        return i > 1 || this.__actions__.length || !(d instanceof We) || !mr(s) ? this.thru(m) : (d = d.slice(s, +s + (i ? 1 : 0)), d.__actions__.push({
          func: ss,
          args: [m],
          thisArg: r
        }), new On(d, this.__chain__).thru(function(I) {
          return i && !I.length && I.push(r), I;
        }));
      });
      function _y() {
        return Cd(this);
      }
      function Ty() {
        return new On(this.value(), this.__chain__);
      }
      function By() {
        this.__values__ === r && (this.__values__ = kd(this.value()));
        var n = this.__index__ >= this.__values__.length, i = n ? r : this.__values__[this.__index__++];
        return { done: n, value: i };
      }
      function Gy() {
        return this;
      }
      function ky(n) {
        for (var i, s = this; s instanceof Yo; ) {
          var d = pd(s);
          d.__index__ = 0, d.__values__ = r, i ? m.__wrapped__ = d : i = d;
          var m = d;
          s = s.__wrapped__;
        }
        return m.__wrapped__ = n, i;
      }
      function Ly() {
        var n = this.__wrapped__;
        if (n instanceof We) {
          var i = n;
          return this.__actions__.length && (i = new We(this)), i = i.reverse(), i.__actions__.push({
            func: ss,
            args: [ll],
            thisArg: r
          }), new On(i, this.__chain__);
        }
        return this.thru(ll);
      }
      function Dy() {
        return Df(this.__wrapped__, this.__actions__);
      }
      var My = Ko(function(n, i, s) {
        et.call(n, s) ? ++n[s] : hr(n, s, 1);
      });
      function Ny(n, i, s) {
        var d = Pe(n) ? jc : Pb;
        return s && Ut(n, i, s) && (i = r), d(n, me(i, 3));
      }
      function Vy(n, i) {
        var s = Pe(n) ? Er : If;
        return s(n, me(i, 3));
      }
      var Wy = Uf(gd), Xy = Uf(md);
      function Hy(n, i) {
        return Dt(as(n, i), 1);
      }
      function zy(n, i) {
        return Dt(as(n, i), we);
      }
      function Zy(n, i, s) {
        return s = s === r ? 1 : ke(s), Dt(as(n, i), s);
      }
      function xd(n, i) {
        var s = Pe(n) ? Rn : Or;
        return s(n, me(i, 3));
      }
      function Ad(n, i) {
        var s = Pe(n) ? cm : vf;
        return s(n, me(i, 3));
      }
      var Yy = Ko(function(n, i, s) {
        et.call(n, s) ? n[s].push(i) : hr(n, s, [i]);
      });
      function Jy(n, i, s, d) {
        n = nn(n) ? n : Wi(n), s = s && !d ? ke(s) : 0;
        var m = n.length;
        return s < 0 && (s = Ot(m + s, 0)), hs(n) ? s <= m && n.indexOf(i, s) > -1 : !!m && Pi(n, i, s) > -1;
      }
      var Uy = Me(function(n, i, s) {
        var d = -1, m = typeof i == "function", I = nn(n) ? D(n.length) : [];
        return Or(n, function(x) {
          I[++d] = m ? Tt(i, x, s) : Pu(x, i, s);
        }), I;
      }), jy = Ko(function(n, i, s) {
        hr(n, s, i);
      });
      function as(n, i) {
        var s = Pe(n) ? ht : Ef;
        return s(n, me(i, 3));
      }
      function Qy(n, i, s, d) {
        return n == null ? [] : (Pe(i) || (i = i == null ? [] : [i]), s = d ? r : s, Pe(s) || (s = s == null ? [] : [s]), Of(n, i, s));
      }
      var qy = Ko(function(n, i, s) {
        n[s ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function $y(n, i, s) {
        var d = Pe(n) ? xa : Kc, m = arguments.length < 3;
        return d(n, me(i, 4), s, m, Or);
      }
      function Ky(n, i, s) {
        var d = Pe(n) ? fm : Kc, m = arguments.length < 3;
        return d(n, me(i, 4), s, m, vf);
      }
      function ev(n, i) {
        var s = Pe(n) ? Er : If;
        return s(n, fs(me(i, 3)));
      }
      function tv(n) {
        var i = Pe(n) ? gf : Jb;
        return i(n);
      }
      function nv(n, i, s) {
        (s ? Ut(n, i, s) : i === r) ? i = 1 : i = ke(i);
        var d = Pe(n) ? wb : Ub;
        return d(n, i);
      }
      function rv(n) {
        var i = Pe(n) ? Sb : Qb;
        return i(n);
      }
      function iv(n) {
        if (n == null)
          return 0;
        if (nn(n))
          return hs(n) ? _i(n) : n.length;
        var i = Xt(n);
        return i == It || i == Lt ? n.size : Wa(n).length;
      }
      function uv(n, i, s) {
        var d = Pe(n) ? Aa : qb;
        return s && Ut(n, i, s) && (i = r), d(n, me(i, 3));
      }
      var ov = Me(function(n, i) {
        if (n == null)
          return [];
        var s = i.length;
        return s > 1 && Ut(n, i[0], i[1]) ? i = [] : s > 2 && Ut(i[0], i[1], i[2]) && (i = [i[0]]), Of(n, Dt(i, 1), []);
      }), ls = Vm || function() {
        return Xe.Date.now();
      };
      function sv(n, i) {
        if (typeof i != "function")
          throw new Pn(l);
        return n = ke(n), function() {
          if (--n < 1)
            return i.apply(this, arguments);
        };
      }
      function wd(n, i, s) {
        return i = s ? r : i, i = n && i == null ? n.length : i, pr(n, j, r, r, r, r, i);
      }
      function Sd(n, i) {
        var s;
        if (typeof i != "function")
          throw new Pn(l);
        return n = ke(n), function() {
          return --n > 0 && (s = i.apply(this, arguments)), n <= 1 && (i = r), s;
        };
      }
      var fl = Me(function(n, i, s) {
        var d = F;
        if (s.length) {
          var m = Rr(s, Ni(fl));
          d |= U;
        }
        return pr(n, d, i, s, m);
      }), Ed = Me(function(n, i, s) {
        var d = F | P;
        if (s.length) {
          var m = Rr(s, Ni(Ed));
          d |= U;
        }
        return pr(i, d, n, s, m);
      });
      function Fd(n, i, s) {
        i = s ? r : i;
        var d = pr(n, k, r, r, r, r, r, i);
        return d.placeholder = Fd.placeholder, d;
      }
      function Rd(n, i, s) {
        i = s ? r : i;
        var d = pr(n, N, r, r, r, r, r, i);
        return d.placeholder = Rd.placeholder, d;
      }
      function Pd(n, i, s) {
        var d, m, I, x, R, B, X = 0, H = !1, J = !1, ne = !0;
        if (typeof n != "function")
          throw new Pn(l);
        i = Gn(i) || 0, pt(s) && (H = !!s.leading, J = "maxWait" in s, I = J ? Ot(Gn(s.maxWait) || 0, i) : I, ne = "trailing" in s ? !!s.trailing : ne);
        function fe(At) {
          var Zn = d, vr = m;
          return d = m = r, X = At, x = n.apply(vr, Zn), x;
        }
        function ye(At) {
          return X = At, R = Gu(Ne, i), H ? fe(At) : x;
        }
        function Le(At) {
          var Zn = At - B, vr = At - X, Ud = i - Zn;
          return J ? Wt(Ud, I - vr) : Ud;
        }
        function ve(At) {
          var Zn = At - B, vr = At - X;
          return B === r || Zn >= i || Zn < 0 || J && vr >= I;
        }
        function Ne() {
          var At = ls();
          if (ve(At))
            return He(At);
          R = Gu(Ne, Le(At));
        }
        function He(At) {
          return R = r, ne && d ? fe(At) : (d = m = r, x);
        }
        function vn() {
          R !== r && Nf(R), X = 0, d = B = m = R = r;
        }
        function jt() {
          return R === r ? x : He(ls());
        }
        function In() {
          var At = ls(), Zn = ve(At);
          if (d = arguments, m = this, B = At, Zn) {
            if (R === r)
              return ye(B);
            if (J)
              return Nf(R), R = Gu(Ne, i), fe(B);
          }
          return R === r && (R = Gu(Ne, i)), x;
        }
        return In.cancel = vn, In.flush = jt, In;
      }
      var av = Me(function(n, i) {
        return yf(n, 1, i);
      }), lv = Me(function(n, i, s) {
        return yf(n, Gn(i) || 0, s);
      });
      function cv(n) {
        return pr(n, Y);
      }
      function cs(n, i) {
        if (typeof n != "function" || i != null && typeof i != "function")
          throw new Pn(l);
        var s = function() {
          var d = arguments, m = i ? i.apply(this, d) : d[0], I = s.cache;
          if (I.has(m))
            return I.get(m);
          var x = n.apply(this, d);
          return s.cache = I.set(m, x) || I, x;
        };
        return s.cache = new (cs.Cache || dr)(), s;
      }
      cs.Cache = dr;
      function fs(n) {
        if (typeof n != "function")
          throw new Pn(l);
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return !n.call(this);
            case 1:
              return !n.call(this, i[0]);
            case 2:
              return !n.call(this, i[0], i[1]);
            case 3:
              return !n.call(this, i[0], i[1], i[2]);
          }
          return !n.apply(this, i);
        };
      }
      function fv(n) {
        return Sd(2, n);
      }
      var dv = $b(function(n, i) {
        i = i.length == 1 && Pe(i[0]) ? ht(i[0], mn(me())) : ht(Dt(i, 1), mn(me()));
        var s = i.length;
        return Me(function(d) {
          for (var m = -1, I = Wt(d.length, s); ++m < I; )
            d[m] = i[m].call(this, d[m]);
          return Tt(n, this, d);
        });
      }), dl = Me(function(n, i) {
        var s = Rr(i, Ni(dl));
        return pr(n, U, r, i, s);
      }), Od = Me(function(n, i) {
        var s = Rr(i, Ni(Od));
        return pr(n, G, r, i, s);
      }), hv = gr(function(n, i) {
        return pr(n, M, r, r, r, i);
      });
      function pv(n, i) {
        if (typeof n != "function")
          throw new Pn(l);
        return i = i === r ? i : ke(i), Me(n, i);
      }
      function gv(n, i) {
        if (typeof n != "function")
          throw new Pn(l);
        return i = i == null ? 0 : Ot(ke(i), 0), Me(function(s) {
          var d = s[i], m = Br(s, 0, i);
          return d && Fr(m, d), Tt(n, this, m);
        });
      }
      function mv(n, i, s) {
        var d = !0, m = !0;
        if (typeof n != "function")
          throw new Pn(l);
        return pt(s) && (d = "leading" in s ? !!s.leading : d, m = "trailing" in s ? !!s.trailing : m), Pd(n, i, {
          leading: d,
          maxWait: i,
          trailing: m
        });
      }
      function bv(n) {
        return wd(n, 1);
      }
      function yv(n, i) {
        return dl(Qa(i), n);
      }
      function vv() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return Pe(n) ? n : [n];
      }
      function Iv(n) {
        return _n(n, b);
      }
      function Cv(n, i) {
        return i = typeof i == "function" ? i : r, _n(n, b, i);
      }
      function xv(n) {
        return _n(n, g | b);
      }
      function Av(n, i) {
        return i = typeof i == "function" ? i : r, _n(n, g | b, i);
      }
      function wv(n, i) {
        return i == null || bf(n, i, Bt(i));
      }
      function zn(n, i) {
        return n === i || n !== n && i !== i;
      }
      var Sv = rs(Ma), Ev = rs(function(n, i) {
        return n >= i;
      }), si = Af(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Af : function(n) {
        return bt(n) && et.call(n, "callee") && !lf.call(n, "callee");
      }, Pe = D.isArray, Fv = Yt ? mn(Yt) : kb;
      function nn(n) {
        return n != null && ds(n.length) && !br(n);
      }
      function xt(n) {
        return bt(n) && nn(n);
      }
      function Rv(n) {
        return n === !0 || n === !1 || bt(n) && Jt(n) == De;
      }
      var Gr = Xm || Al, Pv = Wn ? mn(Wn) : Lb;
      function Ov(n) {
        return bt(n) && n.nodeType === 1 && !ku(n);
      }
      function _v(n) {
        if (n == null)
          return !0;
        if (nn(n) && (Pe(n) || typeof n == "string" || typeof n.splice == "function" || Gr(n) || Vi(n) || si(n)))
          return !n.length;
        var i = Xt(n);
        if (i == It || i == Lt)
          return !n.size;
        if (Bu(n))
          return !Wa(n).length;
        for (var s in n)
          if (et.call(n, s))
            return !1;
        return !0;
      }
      function Tv(n, i) {
        return Ou(n, i);
      }
      function Bv(n, i, s) {
        s = typeof s == "function" ? s : r;
        var d = s ? s(n, i) : r;
        return d === r ? Ou(n, i, r, s) : !!d;
      }
      function hl(n) {
        if (!bt(n))
          return !1;
        var i = Jt(n);
        return i == Gt || i == Vt || typeof n.message == "string" && typeof n.name == "string" && !ku(n);
      }
      function Gv(n) {
        return typeof n == "number" && ff(n);
      }
      function br(n) {
        if (!pt(n))
          return !1;
        var i = Jt(n);
        return i == kt || i == wn || i == wt || i == at;
      }
      function _d(n) {
        return typeof n == "number" && n == ke(n);
      }
      function ds(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= Fe;
      }
      function pt(n) {
        var i = typeof n;
        return n != null && (i == "object" || i == "function");
      }
      function bt(n) {
        return n != null && typeof n == "object";
      }
      var Td = Fn ? mn(Fn) : Mb;
      function kv(n, i) {
        return n === i || Va(n, i, rl(i));
      }
      function Lv(n, i, s) {
        return s = typeof s == "function" ? s : r, Va(n, i, rl(i), s);
      }
      function Dv(n) {
        return Bd(n) && n != +n;
      }
      function Mv(n) {
        if (C0(n))
          throw new Ee(a);
        return wf(n);
      }
      function Nv(n) {
        return n === null;
      }
      function Vv(n) {
        return n == null;
      }
      function Bd(n) {
        return typeof n == "number" || bt(n) && Jt(n) == te;
      }
      function ku(n) {
        if (!bt(n) || Jt(n) != le)
          return !1;
        var i = No(n);
        if (i === null)
          return !0;
        var s = et.call(i, "constructor") && i.constructor;
        return typeof s == "function" && s instanceof s && ko.call(s) == Lm;
      }
      var pl = Qn ? mn(Qn) : Nb;
      function Wv(n) {
        return _d(n) && n >= -9007199254740991 && n <= Fe;
      }
      var Gd = Iu ? mn(Iu) : Vb;
      function hs(n) {
        return typeof n == "string" || !Pe(n) && bt(n) && Jt(n) == Nn;
      }
      function yn(n) {
        return typeof n == "symbol" || bt(n) && Jt(n) == tt;
      }
      var Vi = Kr ? mn(Kr) : Wb;
      function Xv(n) {
        return n === r;
      }
      function Hv(n) {
        return bt(n) && Xt(n) == Qe;
      }
      function zv(n) {
        return bt(n) && Jt(n) == L;
      }
      var Zv = rs(Xa), Yv = rs(function(n, i) {
        return n <= i;
      });
      function kd(n) {
        if (!n)
          return [];
        if (nn(n))
          return hs(n) ? Xn(n) : tn(n);
        if (xu && n[xu])
          return wm(n[xu]());
        var i = Xt(n), s = i == It ? Pa : i == Lt ? To : Wi;
        return s(n);
      }
      function yr(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = Gn(n), n === we || n === -1 / 0) {
          var i = n < 0 ? -1 : 1;
          return i * Je;
        }
        return n === n ? n : 0;
      }
      function ke(n) {
        var i = yr(n), s = i % 1;
        return i === i ? s ? i - s : i : 0;
      }
      function Ld(n) {
        return n ? ri(ke(n), 0, Ie) : 0;
      }
      function Gn(n) {
        if (typeof n == "number")
          return n;
        if (yn(n))
          return w;
        if (pt(n)) {
          var i = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = pt(i) ? i + "" : i;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = ef(n);
        var s = ia.test(n);
        return s || oa.test(n) ? Re(n.slice(2), s ? 2 : 8) : ra.test(n) ? w : +n;
      }
      function Dd(n) {
        return $n(n, rn(n));
      }
      function Jv(n) {
        return n ? ri(ke(n), -9007199254740991, Fe) : n === 0 ? n : 0;
      }
      function qe(n) {
        return n == null ? "" : bn(n);
      }
      var Uv = Di(function(n, i) {
        if (Bu(i) || nn(i)) {
          $n(i, Bt(i), n);
          return;
        }
        for (var s in i)
          et.call(i, s) && Fu(n, s, i[s]);
      }), Md = Di(function(n, i) {
        $n(i, rn(i), n);
      }), ps = Di(function(n, i, s, d) {
        $n(i, rn(i), n, d);
      }), jv = Di(function(n, i, s, d) {
        $n(i, Bt(i), n, d);
      }), Qv = gr(ka);
      function qv(n, i) {
        var s = Li(n);
        return i == null ? s : mf(s, i);
      }
      var $v = Me(function(n, i) {
        n = st(n);
        var s = -1, d = i.length, m = d > 2 ? i[2] : r;
        for (m && Ut(i[0], i[1], m) && (d = 1); ++s < d; )
          for (var I = i[s], x = rn(I), R = -1, B = x.length; ++R < B; ) {
            var X = x[R], H = n[X];
            (H === r || zn(H, Bi[X]) && !et.call(n, X)) && (n[X] = I[X]);
          }
        return n;
      }), Kv = Me(function(n) {
        return n.push(r, td), Tt(Nd, r, n);
      });
      function eI(n, i) {
        return Qc(n, me(i, 3), qn);
      }
      function tI(n, i) {
        return Qc(n, me(i, 3), Da);
      }
      function nI(n, i) {
        return n == null ? n : La(n, me(i, 3), rn);
      }
      function rI(n, i) {
        return n == null ? n : Cf(n, me(i, 3), rn);
      }
      function iI(n, i) {
        return n && qn(n, me(i, 3));
      }
      function uI(n, i) {
        return n && Da(n, me(i, 3));
      }
      function oI(n) {
        return n == null ? [] : jo(n, Bt(n));
      }
      function sI(n) {
        return n == null ? [] : jo(n, rn(n));
      }
      function gl(n, i, s) {
        var d = n == null ? r : ii(n, i);
        return d === r ? s : d;
      }
      function aI(n, i) {
        return n != null && id(n, i, _b);
      }
      function ml(n, i) {
        return n != null && id(n, i, Tb);
      }
      var lI = Qf(function(n, i, s) {
        i != null && typeof i.toString != "function" && (i = Lo.call(i)), n[i] = s;
      }, yl(un)), cI = Qf(function(n, i, s) {
        i != null && typeof i.toString != "function" && (i = Lo.call(i)), et.call(n, i) ? n[i].push(s) : n[i] = [s];
      }, me), fI = Me(Pu);
      function Bt(n) {
        return nn(n) ? pf(n) : Wa(n);
      }
      function rn(n) {
        return nn(n) ? pf(n, !0) : Xb(n);
      }
      function dI(n, i) {
        var s = {};
        return i = me(i, 3), qn(n, function(d, m, I) {
          hr(s, i(d, m, I), d);
        }), s;
      }
      function hI(n, i) {
        var s = {};
        return i = me(i, 3), qn(n, function(d, m, I) {
          hr(s, m, i(d, m, I));
        }), s;
      }
      var pI = Di(function(n, i, s) {
        Qo(n, i, s);
      }), Nd = Di(function(n, i, s, d) {
        Qo(n, i, s, d);
      }), gI = gr(function(n, i) {
        var s = {};
        if (n == null)
          return s;
        var d = !1;
        i = ht(i, function(I) {
          return I = Tr(I, n), d || (d = I.length > 1), I;
        }), $n(n, tl(n), s), d && (s = _n(s, g | v | b, l0));
        for (var m = i.length; m--; )
          Ja(s, i[m]);
        return s;
      });
      function mI(n, i) {
        return Vd(n, fs(me(i)));
      }
      var bI = gr(function(n, i) {
        return n == null ? {} : zb(n, i);
      });
      function Vd(n, i) {
        if (n == null)
          return {};
        var s = ht(tl(n), function(d) {
          return [d];
        });
        return i = me(i), _f(n, s, function(d, m) {
          return i(d, m[0]);
        });
      }
      function yI(n, i, s) {
        i = Tr(i, n);
        var d = -1, m = i.length;
        for (m || (m = 1, n = r); ++d < m; ) {
          var I = n == null ? r : n[Kn(i[d])];
          I === r && (d = m, I = s), n = br(I) ? I.call(n) : I;
        }
        return n;
      }
      function vI(n, i, s) {
        return n == null ? n : _u(n, i, s);
      }
      function II(n, i, s, d) {
        return d = typeof d == "function" ? d : r, n == null ? n : _u(n, i, s, d);
      }
      var Wd = Kf(Bt), Xd = Kf(rn);
      function CI(n, i, s) {
        var d = Pe(n), m = d || Gr(n) || Vi(n);
        if (i = me(i, 4), s == null) {
          var I = n && n.constructor;
          m ? s = d ? new I() : [] : pt(n) ? s = br(I) ? Li(No(n)) : {} : s = {};
        }
        return (m ? Rn : qn)(n, function(x, R, B) {
          return i(s, x, R, B);
        }), s;
      }
      function xI(n, i) {
        return n == null ? !0 : Ja(n, i);
      }
      function AI(n, i, s) {
        return n == null ? n : Lf(n, i, Qa(s));
      }
      function wI(n, i, s, d) {
        return d = typeof d == "function" ? d : r, n == null ? n : Lf(n, i, Qa(s), d);
      }
      function Wi(n) {
        return n == null ? [] : Ra(n, Bt(n));
      }
      function SI(n) {
        return n == null ? [] : Ra(n, rn(n));
      }
      function EI(n, i, s) {
        return s === r && (s = i, i = r), s !== r && (s = Gn(s), s = s === s ? s : 0), i !== r && (i = Gn(i), i = i === i ? i : 0), ri(Gn(n), i, s);
      }
      function FI(n, i, s) {
        return i = yr(i), s === r ? (s = i, i = 0) : s = yr(s), n = Gn(n), Bb(n, i, s);
      }
      function RI(n, i, s) {
        if (s && typeof s != "boolean" && Ut(n, i, s) && (i = s = r), s === r && (typeof i == "boolean" ? (s = i, i = r) : typeof n == "boolean" && (s = n, n = r)), n === r && i === r ? (n = 0, i = 1) : (n = yr(n), i === r ? (i = n, n = 0) : i = yr(i)), n > i) {
          var d = n;
          n = i, i = d;
        }
        if (s || n % 1 || i % 1) {
          var m = df();
          return Wt(n + m * (i - n + ut("1e-" + ((m + "").length - 1))), i);
        }
        return za(n, i);
      }
      var PI = Mi(function(n, i, s) {
        return i = i.toLowerCase(), n + (s ? Hd(i) : i);
      });
      function Hd(n) {
        return bl(qe(n).toLowerCase());
      }
      function zd(n) {
        return n = qe(n), n && n.replace(lr, vm).replace(va, "");
      }
      function OI(n, i, s) {
        n = qe(n), i = bn(i);
        var d = n.length;
        s = s === r ? d : ri(ke(s), 0, d);
        var m = s;
        return s -= i.length, s >= 0 && n.slice(s, m) == i;
      }
      function _I(n) {
        return n = qe(n), n && Jr.test(n) ? n.replace(ao, Im) : n;
      }
      function TI(n) {
        return n = qe(n), n && qs.test(n) ? n.replace(pu, "\\$&") : n;
      }
      var BI = Mi(function(n, i, s) {
        return n + (s ? "-" : "") + i.toLowerCase();
      }), GI = Mi(function(n, i, s) {
        return n + (s ? " " : "") + i.toLowerCase();
      }), kI = Jf("toLowerCase");
      function LI(n, i, s) {
        n = qe(n), i = ke(i);
        var d = i ? _i(n) : 0;
        if (!i || d >= i)
          return n;
        var m = (i - d) / 2;
        return ns(Ho(m), s) + n + ns(Xo(m), s);
      }
      function DI(n, i, s) {
        n = qe(n), i = ke(i);
        var d = i ? _i(n) : 0;
        return i && d < i ? n + ns(i - d, s) : n;
      }
      function MI(n, i, s) {
        n = qe(n), i = ke(i);
        var d = i ? _i(n) : 0;
        return i && d < i ? ns(i - d, s) + n : n;
      }
      function NI(n, i, s) {
        return s || i == null ? i = 0 : i && (i = +i), Ym(qe(n).replace(gu, ""), i || 0);
      }
      function VI(n, i, s) {
        return (s ? Ut(n, i, s) : i === r) ? i = 1 : i = ke(i), Za(qe(n), i);
      }
      function WI() {
        var n = arguments, i = qe(n[0]);
        return n.length < 3 ? i : i.replace(n[1], n[2]);
      }
      var XI = Mi(function(n, i, s) {
        return n + (s ? "_" : "") + i.toLowerCase();
      });
      function HI(n, i, s) {
        return s && typeof s != "number" && Ut(n, i, s) && (i = s = r), s = s === r ? Ie : s >>> 0, s ? (n = qe(n), n && (typeof i == "string" || i != null && !pl(i)) && (i = bn(i), !i && Oi(n)) ? Br(Xn(n), 0, s) : n.split(i, s)) : [];
      }
      var zI = Mi(function(n, i, s) {
        return n + (s ? " " : "") + bl(i);
      });
      function ZI(n, i, s) {
        return n = qe(n), s = s == null ? 0 : ri(ke(s), 0, n.length), i = bn(i), n.slice(s, s + i.length) == i;
      }
      function YI(n, i, s) {
        var d = y.templateSettings;
        s && Ut(n, i, s) && (i = r), n = qe(n), i = ps({}, i, d, ed);
        var m = ps({}, i.imports, d.imports, ed), I = Bt(m), x = Ra(m, I), R, B, X = 0, H = i.interpolate || xi, J = "__p += '", ne = Oa(
          (i.escape || xi).source + "|" + H.source + "|" + (H === Ci ? na : xi).source + "|" + (i.evaluate || xi).source + "|$",
          "g"
        ), fe = "//# sourceURL=" + (et.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Ia + "]") + `
`;
        n.replace(ne, function(ve, Ne, He, vn, jt, In) {
          return He || (He = vn), J += n.slice(X, In).replace(aa, Cm), Ne && (R = !0, J += `' +
__e(` + Ne + `) +
'`), jt && (B = !0, J += `';
` + jt + `;
__p += '`), He && (J += `' +
((__t = (` + He + `)) == null ? '' : __t) +
'`), X = In + ve.length, ve;
        }), J += `';
`;
        var ye = et.call(i, "variable") && i.variable;
        if (!ye)
          J = `with (obj) {
` + J + `
}
`;
        else if (ea.test(ye))
          throw new Ee(c);
        J = (B ? J.replace(pn, "") : J).replace(sr, "$1").replace(oo, "$1;"), J = "function(" + (ye || "obj") + `) {
` + (ye ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (R ? ", __e = _.escape" : "") + (B ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + J + `return __p
}`;
        var Le = Yd(function() {
          return Ue(I, fe + "return " + J).apply(r, x);
        });
        if (Le.source = J, hl(Le))
          throw Le;
        return Le;
      }
      function JI(n) {
        return qe(n).toLowerCase();
      }
      function UI(n) {
        return qe(n).toUpperCase();
      }
      function jI(n, i, s) {
        if (n = qe(n), n && (s || i === r))
          return ef(n);
        if (!n || !(i = bn(i)))
          return n;
        var d = Xn(n), m = Xn(i), I = tf(d, m), x = nf(d, m) + 1;
        return Br(d, I, x).join("");
      }
      function QI(n, i, s) {
        if (n = qe(n), n && (s || i === r))
          return n.slice(0, uf(n) + 1);
        if (!n || !(i = bn(i)))
          return n;
        var d = Xn(n), m = nf(d, Xn(i)) + 1;
        return Br(d, 0, m).join("");
      }
      function qI(n, i, s) {
        if (n = qe(n), n && (s || i === r))
          return n.replace(gu, "");
        if (!n || !(i = bn(i)))
          return n;
        var d = Xn(n), m = tf(d, Xn(i));
        return Br(d, m).join("");
      }
      function $I(n, i) {
        var s = K, d = Q;
        if (pt(i)) {
          var m = "separator" in i ? i.separator : m;
          s = "length" in i ? ke(i.length) : s, d = "omission" in i ? bn(i.omission) : d;
        }
        n = qe(n);
        var I = n.length;
        if (Oi(n)) {
          var x = Xn(n);
          I = x.length;
        }
        if (s >= I)
          return n;
        var R = s - _i(d);
        if (R < 1)
          return d;
        var B = x ? Br(x, 0, R).join("") : n.slice(0, R);
        if (m === r)
          return B + d;
        if (x && (R += B.length - R), pl(m)) {
          if (n.slice(R).search(m)) {
            var X, H = B;
            for (m.global || (m = Oa(m.source, qe(En.exec(m)) + "g")), m.lastIndex = 0; X = m.exec(H); )
              var J = X.index;
            B = B.slice(0, J === r ? R : J);
          }
        } else if (n.indexOf(bn(m), R) != R) {
          var ne = B.lastIndexOf(m);
          ne > -1 && (B = B.slice(0, ne));
        }
        return B + d;
      }
      function KI(n) {
        return n = qe(n), n && fu.test(n) ? n.replace(so, Rm) : n;
      }
      var e1 = Mi(function(n, i, s) {
        return n + (s ? " " : "") + i.toUpperCase();
      }), bl = Jf("toUpperCase");
      function Zd(n, i, s) {
        return n = qe(n), i = s ? r : i, i === r ? Am(n) ? _m(n) : pm(n) : n.match(i) || [];
      }
      var Yd = Me(function(n, i) {
        try {
          return Tt(n, r, i);
        } catch (s) {
          return hl(s) ? s : new Ee(s);
        }
      }), t1 = gr(function(n, i) {
        return Rn(i, function(s) {
          s = Kn(s), hr(n, s, fl(n[s], n));
        }), n;
      });
      function n1(n) {
        var i = n == null ? 0 : n.length, s = me();
        return n = i ? ht(n, function(d) {
          if (typeof d[1] != "function")
            throw new Pn(l);
          return [s(d[0]), d[1]];
        }) : [], Me(function(d) {
          for (var m = -1; ++m < i; ) {
            var I = n[m];
            if (Tt(I[0], this, d))
              return Tt(I[1], this, d);
          }
        });
      }
      function r1(n) {
        return Rb(_n(n, g));
      }
      function yl(n) {
        return function() {
          return n;
        };
      }
      function i1(n, i) {
        return n == null || n !== n ? i : n;
      }
      var u1 = jf(), o1 = jf(!0);
      function un(n) {
        return n;
      }
      function vl(n) {
        return Sf(typeof n == "function" ? n : _n(n, g));
      }
      function s1(n) {
        return Ff(_n(n, g));
      }
      function a1(n, i) {
        return Rf(n, _n(i, g));
      }
      var l1 = Me(function(n, i) {
        return function(s) {
          return Pu(s, n, i);
        };
      }), c1 = Me(function(n, i) {
        return function(s) {
          return Pu(n, s, i);
        };
      });
      function Il(n, i, s) {
        var d = Bt(i), m = jo(i, d);
        s == null && !(pt(i) && (m.length || !d.length)) && (s = i, i = n, n = this, m = jo(i, Bt(i)));
        var I = !(pt(s) && "chain" in s) || !!s.chain, x = br(n);
        return Rn(m, function(R) {
          var B = i[R];
          n[R] = B, x && (n.prototype[R] = function() {
            var X = this.__chain__;
            if (I || X) {
              var H = n(this.__wrapped__), J = H.__actions__ = tn(this.__actions__);
              return J.push({ func: B, args: arguments, thisArg: n }), H.__chain__ = X, H;
            }
            return B.apply(n, Fr([this.value()], arguments));
          });
        }), n;
      }
      function f1() {
        return Xe._ === this && (Xe._ = Dm), this;
      }
      function Cl() {
      }
      function d1(n) {
        return n = ke(n), Me(function(i) {
          return Pf(i, n);
        });
      }
      var h1 = $a(ht), p1 = $a(jc), g1 = $a(Aa);
      function Jd(n) {
        return ul(n) ? wa(Kn(n)) : Zb(n);
      }
      function m1(n) {
        return function(i) {
          return n == null ? r : ii(n, i);
        };
      }
      var b1 = qf(), y1 = qf(!0);
      function xl() {
        return [];
      }
      function Al() {
        return !1;
      }
      function v1() {
        return {};
      }
      function I1() {
        return "";
      }
      function C1() {
        return !0;
      }
      function x1(n, i) {
        if (n = ke(n), n < 1 || n > Fe)
          return [];
        var s = Ie, d = Wt(n, Ie);
        i = me(i), n -= Ie;
        for (var m = Fa(d, i); ++s < n; )
          i(s);
        return m;
      }
      function A1(n) {
        return Pe(n) ? ht(n, Kn) : yn(n) ? [n] : tn(hd(qe(n)));
      }
      function w1(n) {
        var i = ++km;
        return qe(n) + i;
      }
      var S1 = ts(function(n, i) {
        return n + i;
      }, 0), E1 = Ka("ceil"), F1 = ts(function(n, i) {
        return n / i;
      }, 1), R1 = Ka("floor");
      function P1(n) {
        return n && n.length ? Uo(n, un, Ma) : r;
      }
      function O1(n, i) {
        return n && n.length ? Uo(n, me(i, 2), Ma) : r;
      }
      function _1(n) {
        return $c(n, un);
      }
      function T1(n, i) {
        return $c(n, me(i, 2));
      }
      function B1(n) {
        return n && n.length ? Uo(n, un, Xa) : r;
      }
      function G1(n, i) {
        return n && n.length ? Uo(n, me(i, 2), Xa) : r;
      }
      var k1 = ts(function(n, i) {
        return n * i;
      }, 1), L1 = Ka("round"), D1 = ts(function(n, i) {
        return n - i;
      }, 0);
      function M1(n) {
        return n && n.length ? Ea(n, un) : 0;
      }
      function N1(n, i) {
        return n && n.length ? Ea(n, me(i, 2)) : 0;
      }
      return y.after = sv, y.ary = wd, y.assign = Uv, y.assignIn = Md, y.assignInWith = ps, y.assignWith = jv, y.at = Qv, y.before = Sd, y.bind = fl, y.bindAll = t1, y.bindKey = Ed, y.castArray = vv, y.chain = Cd, y.chunk = R0, y.compact = P0, y.concat = O0, y.cond = n1, y.conforms = r1, y.constant = yl, y.countBy = My, y.create = qv, y.curry = Fd, y.curryRight = Rd, y.debounce = Pd, y.defaults = $v, y.defaultsDeep = Kv, y.defer = av, y.delay = lv, y.difference = _0, y.differenceBy = T0, y.differenceWith = B0, y.drop = G0, y.dropRight = k0, y.dropRightWhile = L0, y.dropWhile = D0, y.fill = M0, y.filter = Vy, y.flatMap = Hy, y.flatMapDeep = zy, y.flatMapDepth = Zy, y.flatten = bd, y.flattenDeep = N0, y.flattenDepth = V0, y.flip = cv, y.flow = u1, y.flowRight = o1, y.fromPairs = W0, y.functions = oI, y.functionsIn = sI, y.groupBy = Yy, y.initial = H0, y.intersection = z0, y.intersectionBy = Z0, y.intersectionWith = Y0, y.invert = lI, y.invertBy = cI, y.invokeMap = Uy, y.iteratee = vl, y.keyBy = jy, y.keys = Bt, y.keysIn = rn, y.map = as, y.mapKeys = dI, y.mapValues = hI, y.matches = s1, y.matchesProperty = a1, y.memoize = cs, y.merge = pI, y.mergeWith = Nd, y.method = l1, y.methodOf = c1, y.mixin = Il, y.negate = fs, y.nthArg = d1, y.omit = gI, y.omitBy = mI, y.once = fv, y.orderBy = Qy, y.over = h1, y.overArgs = dv, y.overEvery = p1, y.overSome = g1, y.partial = dl, y.partialRight = Od, y.partition = qy, y.pick = bI, y.pickBy = Vd, y.property = Jd, y.propertyOf = m1, y.pull = Q0, y.pullAll = vd, y.pullAllBy = q0, y.pullAllWith = $0, y.pullAt = K0, y.range = b1, y.rangeRight = y1, y.rearg = hv, y.reject = ev, y.remove = ey, y.rest = pv, y.reverse = ll, y.sampleSize = nv, y.set = vI, y.setWith = II, y.shuffle = rv, y.slice = ty, y.sortBy = ov, y.sortedUniq = ay, y.sortedUniqBy = ly, y.split = HI, y.spread = gv, y.tail = cy, y.take = fy, y.takeRight = dy, y.takeRightWhile = hy, y.takeWhile = py, y.tap = Py, y.throttle = mv, y.thru = ss, y.toArray = kd, y.toPairs = Wd, y.toPairsIn = Xd, y.toPath = A1, y.toPlainObject = Dd, y.transform = CI, y.unary = bv, y.union = gy, y.unionBy = my, y.unionWith = by, y.uniq = yy, y.uniqBy = vy, y.uniqWith = Iy, y.unset = xI, y.unzip = cl, y.unzipWith = Id, y.update = AI, y.updateWith = wI, y.values = Wi, y.valuesIn = SI, y.without = Cy, y.words = Zd, y.wrap = yv, y.xor = xy, y.xorBy = Ay, y.xorWith = wy, y.zip = Sy, y.zipObject = Ey, y.zipObjectDeep = Fy, y.zipWith = Ry, y.entries = Wd, y.entriesIn = Xd, y.extend = Md, y.extendWith = ps, Il(y, y), y.add = S1, y.attempt = Yd, y.camelCase = PI, y.capitalize = Hd, y.ceil = E1, y.clamp = EI, y.clone = Iv, y.cloneDeep = xv, y.cloneDeepWith = Av, y.cloneWith = Cv, y.conformsTo = wv, y.deburr = zd, y.defaultTo = i1, y.divide = F1, y.endsWith = OI, y.eq = zn, y.escape = _I, y.escapeRegExp = TI, y.every = Ny, y.find = Wy, y.findIndex = gd, y.findKey = eI, y.findLast = Xy, y.findLastIndex = md, y.findLastKey = tI, y.floor = R1, y.forEach = xd, y.forEachRight = Ad, y.forIn = nI, y.forInRight = rI, y.forOwn = iI, y.forOwnRight = uI, y.get = gl, y.gt = Sv, y.gte = Ev, y.has = aI, y.hasIn = ml, y.head = yd, y.identity = un, y.includes = Jy, y.indexOf = X0, y.inRange = FI, y.invoke = fI, y.isArguments = si, y.isArray = Pe, y.isArrayBuffer = Fv, y.isArrayLike = nn, y.isArrayLikeObject = xt, y.isBoolean = Rv, y.isBuffer = Gr, y.isDate = Pv, y.isElement = Ov, y.isEmpty = _v, y.isEqual = Tv, y.isEqualWith = Bv, y.isError = hl, y.isFinite = Gv, y.isFunction = br, y.isInteger = _d, y.isLength = ds, y.isMap = Td, y.isMatch = kv, y.isMatchWith = Lv, y.isNaN = Dv, y.isNative = Mv, y.isNil = Vv, y.isNull = Nv, y.isNumber = Bd, y.isObject = pt, y.isObjectLike = bt, y.isPlainObject = ku, y.isRegExp = pl, y.isSafeInteger = Wv, y.isSet = Gd, y.isString = hs, y.isSymbol = yn, y.isTypedArray = Vi, y.isUndefined = Xv, y.isWeakMap = Hv, y.isWeakSet = zv, y.join = J0, y.kebabCase = BI, y.last = Bn, y.lastIndexOf = U0, y.lowerCase = GI, y.lowerFirst = kI, y.lt = Zv, y.lte = Yv, y.max = P1, y.maxBy = O1, y.mean = _1, y.meanBy = T1, y.min = B1, y.minBy = G1, y.stubArray = xl, y.stubFalse = Al, y.stubObject = v1, y.stubString = I1, y.stubTrue = C1, y.multiply = k1, y.nth = j0, y.noConflict = f1, y.noop = Cl, y.now = ls, y.pad = LI, y.padEnd = DI, y.padStart = MI, y.parseInt = NI, y.random = RI, y.reduce = $y, y.reduceRight = Ky, y.repeat = VI, y.replace = WI, y.result = yI, y.round = L1, y.runInContext = _, y.sample = tv, y.size = iv, y.snakeCase = XI, y.some = uv, y.sortedIndex = ny, y.sortedIndexBy = ry, y.sortedIndexOf = iy, y.sortedLastIndex = uy, y.sortedLastIndexBy = oy, y.sortedLastIndexOf = sy, y.startCase = zI, y.startsWith = ZI, y.subtract = D1, y.sum = M1, y.sumBy = N1, y.template = YI, y.times = x1, y.toFinite = yr, y.toInteger = ke, y.toLength = Ld, y.toLower = JI, y.toNumber = Gn, y.toSafeInteger = Jv, y.toString = qe, y.toUpper = UI, y.trim = jI, y.trimEnd = QI, y.trimStart = qI, y.truncate = $I, y.unescape = KI, y.uniqueId = w1, y.upperCase = e1, y.upperFirst = bl, y.each = xd, y.eachRight = Ad, y.first = yd, Il(y, function() {
        var n = {};
        return qn(y, function(i, s) {
          et.call(y.prototype, s) || (n[s] = i);
        }), n;
      }(), { chain: !1 }), y.VERSION = u, Rn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        y[n].placeholder = y;
      }), Rn(["drop", "take"], function(n, i) {
        We.prototype[n] = function(s) {
          s = s === r ? 1 : Ot(ke(s), 0);
          var d = this.__filtered__ && !i ? new We(this) : this.clone();
          return d.__filtered__ ? d.__takeCount__ = Wt(s, d.__takeCount__) : d.__views__.push({
            size: Wt(s, Ie),
            type: n + (d.__dir__ < 0 ? "Right" : "")
          }), d;
        }, We.prototype[n + "Right"] = function(s) {
          return this.reverse()[n](s).reverse();
        };
      }), Rn(["filter", "map", "takeWhile"], function(n, i) {
        var s = i + 1, d = s == de || s == xe;
        We.prototype[n] = function(m) {
          var I = this.clone();
          return I.__iteratees__.push({
            iteratee: me(m, 3),
            type: s
          }), I.__filtered__ = I.__filtered__ || d, I;
        };
      }), Rn(["head", "last"], function(n, i) {
        var s = "take" + (i ? "Right" : "");
        We.prototype[n] = function() {
          return this[s](1).value()[0];
        };
      }), Rn(["initial", "tail"], function(n, i) {
        var s = "drop" + (i ? "" : "Right");
        We.prototype[n] = function() {
          return this.__filtered__ ? new We(this) : this[s](1);
        };
      }), We.prototype.compact = function() {
        return this.filter(un);
      }, We.prototype.find = function(n) {
        return this.filter(n).head();
      }, We.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, We.prototype.invokeMap = Me(function(n, i) {
        return typeof n == "function" ? new We(this) : this.map(function(s) {
          return Pu(s, n, i);
        });
      }), We.prototype.reject = function(n) {
        return this.filter(fs(me(n)));
      }, We.prototype.slice = function(n, i) {
        n = ke(n);
        var s = this;
        return s.__filtered__ && (n > 0 || i < 0) ? new We(s) : (n < 0 ? s = s.takeRight(-n) : n && (s = s.drop(n)), i !== r && (i = ke(i), s = i < 0 ? s.dropRight(-i) : s.take(i - n)), s);
      }, We.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, We.prototype.toArray = function() {
        return this.take(Ie);
      }, qn(We.prototype, function(n, i) {
        var s = /^(?:filter|find|map|reject)|While$/.test(i), d = /^(?:head|last)$/.test(i), m = y[d ? "take" + (i == "last" ? "Right" : "") : i], I = d || /^find/.test(i);
        m && (y.prototype[i] = function() {
          var x = this.__wrapped__, R = d ? [1] : arguments, B = x instanceof We, X = R[0], H = B || Pe(x), J = function(Ne) {
            var He = m.apply(y, Fr([Ne], R));
            return d && ne ? He[0] : He;
          };
          H && s && typeof X == "function" && X.length != 1 && (B = H = !1);
          var ne = this.__chain__, fe = !!this.__actions__.length, ye = I && !ne, Le = B && !fe;
          if (!I && H) {
            x = Le ? x : new We(this);
            var ve = n.apply(x, R);
            return ve.__actions__.push({ func: ss, args: [J], thisArg: r }), new On(ve, ne);
          }
          return ye && Le ? n.apply(this, R) : (ve = this.thru(J), ye ? d ? ve.value()[0] : ve.value() : ve);
        });
      }), Rn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var i = Bo[n], s = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", d = /^(?:pop|shift)$/.test(n);
        y.prototype[n] = function() {
          var m = arguments;
          if (d && !this.__chain__) {
            var I = this.value();
            return i.apply(Pe(I) ? I : [], m);
          }
          return this[s](function(x) {
            return i.apply(Pe(x) ? x : [], m);
          });
        };
      }), qn(We.prototype, function(n, i) {
        var s = y[i];
        if (s) {
          var d = s.name + "";
          et.call(ki, d) || (ki[d] = []), ki[d].push({ name: i, func: s });
        }
      }), ki[es(r, P).name] = [{
        name: "wrapper",
        func: r
      }], We.prototype.clone = Km, We.prototype.reverse = eb, We.prototype.value = tb, y.prototype.at = Oy, y.prototype.chain = _y, y.prototype.commit = Ty, y.prototype.next = By, y.prototype.plant = ky, y.prototype.reverse = Ly, y.prototype.toJSON = y.prototype.valueOf = y.prototype.value = Dy, y.prototype.first = y.prototype.head, xu && (y.prototype[xu] = Gy), y;
    }, Ti = Tm();
    Ct ? ((Ct.exports = Ti)._ = Ti, ot._ = Ti) : Xe._ = Ti;
  }).call(xn);
})(_s, _s.exports);
var lE = _s.exports;
const cE = /* @__PURE__ */ Ws(lE);
var Ts = { exports: {} };
Ts.exports;
(function(e, t) {
  var r = 200, u = "__lodash_hash_undefined__", o = 1, a = 2, l = 9007199254740991, c = "[object Arguments]", f = "[object Array]", h = "[object AsyncFunction]", p = "[object Boolean]", g = "[object Date]", v = "[object Error]", b = "[object Function]", S = "[object GeneratorFunction]", A = "[object Map]", F = "[object Number]", P = "[object Null]", W = "[object Object]", k = "[object Promise]", N = "[object Proxy]", U = "[object RegExp]", G = "[object Set]", j = "[object String]", M = "[object Symbol]", Y = "[object Undefined]", K = "[object WeakMap]", Q = "[object ArrayBuffer]", z = "[object DataView]", ee = "[object Float32Array]", de = "[object Float64Array]", ie = "[object Int8Array]", xe = "[object Int16Array]", we = "[object Int32Array]", Fe = "[object Uint8Array]", Je = "[object Uint8ClampedArray]", w = "[object Uint16Array]", Ie = "[object Uint32Array]", Ge = /[\\^$.*+?()[\]{}|]/g, E = /^\[object .+?Constructor\]$/, Ye = /^(?:0|[1-9]\d*)$/, ce = {};
  ce[ee] = ce[de] = ce[ie] = ce[xe] = ce[we] = ce[Fe] = ce[Je] = ce[w] = ce[Ie] = !0, ce[c] = ce[f] = ce[Q] = ce[p] = ce[z] = ce[g] = ce[v] = ce[b] = ce[A] = ce[F] = ce[W] = ce[U] = ce[G] = ce[j] = ce[K] = !1;
  var Se = typeof xn == "object" && xn && xn.Object === Object && xn, wt = typeof self == "object" && self && self.Object === Object && self, De = Se || wt || Function("return this")(), gt = t && !t.nodeType && t, Vt = gt && !0 && e && !e.nodeType && e, Gt = Vt && Vt.exports === gt, kt = Gt && Se.process, wn = function() {
    try {
      return kt && kt.binding && kt.binding("util");
    } catch {
    }
  }(), It = wn && wn.isTypedArray;
  function te(C, T) {
    for (var Z = -1, ue = C == null ? 0 : C.length, ut = 0, Re = []; ++Z < ue; ) {
      var ft = C[Z];
      T(ft, Z, C) && (Re[ut++] = ft);
    }
    return Re;
  }
  function oe(C, T) {
    for (var Z = -1, ue = T.length, ut = C.length; ++Z < ue; )
      C[ut + Z] = T[Z];
    return C;
  }
  function le(C, T) {
    for (var Z = -1, ue = C == null ? 0 : C.length; ++Z < ue; )
      if (T(C[Z], Z, C))
        return !0;
    return !1;
  }
  function Ve(C, T) {
    for (var Z = -1, ue = Array(C); ++Z < C; )
      ue[Z] = T(Z);
    return ue;
  }
  function at(C) {
    return function(T) {
      return C(T);
    };
  }
  function mt(C, T) {
    return C.has(T);
  }
  function Lt(C, T) {
    return C == null ? void 0 : C[T];
  }
  function Nn(C) {
    var T = -1, Z = Array(C.size);
    return C.forEach(function(ue, ut) {
      Z[++T] = [ut, ue];
    }), Z;
  }
  function tt(C, T) {
    return function(Z) {
      return C(T(Z));
    };
  }
  function nt(C) {
    var T = -1, Z = Array(C.size);
    return C.forEach(function(ue) {
      Z[++T] = ue;
    }), Z;
  }
  var Qe = Array.prototype, L = Function.prototype, q = Object.prototype, pe = De["__core-js_shared__"], _e = L.toString, Te = q.hasOwnProperty, _t = function() {
    var C = /[^.]+$/.exec(pe && pe.keys && pe.keys.IE_PROTO || "");
    return C ? "Symbol(src)_1." + C : "";
  }(), $t = q.toString, Zt = RegExp(
    "^" + _e.call(Te).replace(Ge, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Sn = Gt ? De.Buffer : void 0, Kt = De.Symbol, St = De.Uint8Array, hn = q.propertyIsEnumerable, pn = Qe.splice, sr = Kt ? Kt.toStringTag : void 0, oo = Object.getOwnPropertySymbols, so = Sn ? Sn.isBuffer : void 0, ao = tt(Object.keys, Object), fu = gn(De, "DataView"), Jr = gn(De, "Map"), du = gn(De, "Promise"), hu = gn(De, "Set"), Ci = gn(De, "WeakMap"), Ur = gn(Object, "create"), js = cr(fu), Qs = cr(Jr), pu = cr(du), qs = cr(hu), gu = cr(Ci), lo = Kt ? Kt.prototype : void 0, mu = lo ? lo.valueOf : void 0;
  function ar(C) {
    var T = -1, Z = C == null ? 0 : C.length;
    for (this.clear(); ++T < Z; ) {
      var ue = C[T];
      this.set(ue[0], ue[1]);
    }
  }
  function $s() {
    this.__data__ = Ur ? Ur(null) : {}, this.size = 0;
  }
  function Ks(C) {
    var T = this.has(C) && delete this.__data__[C];
    return this.size -= T ? 1 : 0, T;
  }
  function ea(C) {
    var T = this.__data__;
    if (Ur) {
      var Z = T[C];
      return Z === u ? void 0 : Z;
    }
    return Te.call(T, C) ? T[C] : void 0;
  }
  function ta(C) {
    var T = this.__data__;
    return Ur ? T[C] !== void 0 : Te.call(T, C);
  }
  function na(C, T) {
    var Z = this.__data__;
    return this.size += this.has(C) ? 0 : 1, Z[C] = Ur && T === void 0 ? u : T, this;
  }
  ar.prototype.clear = $s, ar.prototype.delete = Ks, ar.prototype.get = ea, ar.prototype.has = ta, ar.prototype.set = na;
  function En(C) {
    var T = -1, Z = C == null ? 0 : C.length;
    for (this.clear(); ++T < Z; ) {
      var ue = C[T];
      this.set(ue[0], ue[1]);
    }
  }
  function ra() {
    this.__data__ = [], this.size = 0;
  }
  function ia(C) {
    var T = this.__data__, Z = jr(T, C);
    if (Z < 0)
      return !1;
    var ue = T.length - 1;
    return Z == ue ? T.pop() : pn.call(T, Z, 1), --this.size, !0;
  }
  function ua(C) {
    var T = this.__data__, Z = jr(T, C);
    return Z < 0 ? void 0 : T[Z][1];
  }
  function oa(C) {
    return jr(this.__data__, C) > -1;
  }
  function sa(C, T) {
    var Z = this.__data__, ue = jr(Z, C);
    return ue < 0 ? (++this.size, Z.push([C, T])) : Z[ue][1] = T, this;
  }
  En.prototype.clear = ra, En.prototype.delete = ia, En.prototype.get = ua, En.prototype.has = oa, En.prototype.set = sa;
  function lr(C) {
    var T = -1, Z = C == null ? 0 : C.length;
    for (this.clear(); ++T < Z; ) {
      var ue = C[T];
      this.set(ue[0], ue[1]);
    }
  }
  function xi() {
    this.size = 0, this.__data__ = {
      hash: new ar(),
      map: new (Jr || En)(),
      string: new ar()
    };
  }
  function aa(C) {
    var T = Sr(this, C).delete(C);
    return this.size -= T ? 1 : 0, T;
  }
  function Ai(C) {
    return Sr(this, C).get(C);
  }
  function la(C) {
    return Sr(this, C).has(C);
  }
  function ca(C, T) {
    var Z = Sr(this, C), ue = Z.size;
    return Z.set(C, T), this.size += Z.size == ue ? 0 : 1, this;
  }
  lr.prototype.clear = xi, lr.prototype.delete = aa, lr.prototype.get = Ai, lr.prototype.has = la, lr.prototype.set = ca;
  function wi(C) {
    var T = -1, Z = C == null ? 0 : C.length;
    for (this.__data__ = new lr(); ++T < Z; )
      this.add(C[T]);
  }
  function co(C) {
    return this.__data__.set(C, u), this;
  }
  function fo(C) {
    return this.__data__.has(C);
  }
  wi.prototype.add = wi.prototype.push = co, wi.prototype.has = fo;
  function Vn(C) {
    var T = this.__data__ = new En(C);
    this.size = T.size;
  }
  function fa() {
    this.__data__ = new En(), this.size = 0;
  }
  function da(C) {
    var T = this.__data__, Z = T.delete(C);
    return this.size = T.size, Z;
  }
  function ha(C) {
    return this.__data__.get(C);
  }
  function pa(C) {
    return this.__data__.has(C);
  }
  function ho(C, T) {
    var Z = this.__data__;
    if (Z instanceof En) {
      var ue = Z.__data__;
      if (!Jr || ue.length < r - 1)
        return ue.push([C, T]), this.size = ++Z.size, this;
      Z = this.__data__ = new lr(ue);
    }
    return Z.set(C, T), this.size = Z.size, this;
  }
  Vn.prototype.clear = fa, Vn.prototype.delete = da, Vn.prototype.get = ha, Vn.prototype.has = pa, Vn.prototype.set = ho;
  function po(C, T) {
    var Z = Fi(C), ue = !Z && Eo(C), ut = !Z && !ue && vu(C), Re = !Z && !ue && !ut && Po(C), ft = Z || ue || ut || Re, Et = ft ? Ve(C.length, String) : [], Xe = Et.length;
    for (var ot in C)
      Te.call(C, ot) && !(ft && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ot == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      ut && (ot == "offset" || ot == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Re && (ot == "buffer" || ot == "byteLength" || ot == "byteOffset") || // Skip index properties.
      Co(ot, Xe))) && Et.push(ot);
    return Et;
  }
  function jr(C, T) {
    for (var Z = C.length; Z--; )
      if (So(C[Z][0], T))
        return Z;
    return -1;
  }
  function bu(C, T, Z) {
    var ue = T(C);
    return Fi(C) ? ue : oe(ue, Z(C));
  }
  function Qr(C) {
    return C == null ? C === void 0 ? Y : P : sr && sr in Object(C) ? vo(C) : ba(C);
  }
  function yu(C) {
    return $r(C) && Qr(C) == c;
  }
  function qr(C, T, Z, ue, ut) {
    return C === T ? !0 : C == null || T == null || !$r(C) && !$r(T) ? C !== C && T !== T : go(C, T, Z, ue, qr, ut);
  }
  function go(C, T, Z, ue, ut, Re) {
    var ft = Fi(C), Et = Fi(T), Xe = ft ? f : jn(C), ot = Et ? f : jn(T);
    Xe = Xe == c ? W : Xe, ot = ot == c ? W : ot;
    var Ct = Xe == W, en = ot == W, Ft = Xe == ot;
    if (Ft && vu(C)) {
      if (!vu(T))
        return !1;
      ft = !0, Ct = !1;
    }
    if (Ft && !Ct)
      return Re || (Re = new Vn()), ft || Po(C) ? Si(C, T, Z, ue, ut, Re) : ma(C, T, Xe, Z, ue, ut, Re);
    if (!(Z & o)) {
      var dt = Ct && Te.call(C, "__wrapped__"), Yt = en && Te.call(T, "__wrapped__");
      if (dt || Yt) {
        var Wn = dt ? C.value() : C, Fn = Yt ? T.value() : T;
        return Re || (Re = new Vn()), ut(Wn, Fn, Z, ue, Re);
      }
    }
    return Ft ? (Re || (Re = new Vn()), yo(C, T, Z, ue, ut, Re)) : !1;
  }
  function ga(C) {
    if (!Ro(C) || Ao(C))
      return !1;
    var T = Ri(C) ? Zt : E;
    return T.test(cr(C));
  }
  function mo(C) {
    return $r(C) && Fo(C.length) && !!ce[Qr(C)];
  }
  function bo(C) {
    if (!wo(C))
      return ao(C);
    var T = [];
    for (var Z in Object(C))
      Te.call(C, Z) && Z != "constructor" && T.push(Z);
    return T;
  }
  function Si(C, T, Z, ue, ut, Re) {
    var ft = Z & o, Et = C.length, Xe = T.length;
    if (Et != Xe && !(ft && Xe > Et))
      return !1;
    var ot = Re.get(C);
    if (ot && Re.get(T))
      return ot == T;
    var Ct = -1, en = !0, Ft = Z & a ? new wi() : void 0;
    for (Re.set(C, T), Re.set(T, C); ++Ct < Et; ) {
      var dt = C[Ct], Yt = T[Ct];
      if (ue)
        var Wn = ft ? ue(Yt, dt, Ct, T, C, Re) : ue(dt, Yt, Ct, C, T, Re);
      if (Wn !== void 0) {
        if (Wn)
          continue;
        en = !1;
        break;
      }
      if (Ft) {
        if (!le(T, function(Fn, Qn) {
          if (!mt(Ft, Qn) && (dt === Fn || ut(dt, Fn, Z, ue, Re)))
            return Ft.push(Qn);
        })) {
          en = !1;
          break;
        }
      } else if (!(dt === Yt || ut(dt, Yt, Z, ue, Re))) {
        en = !1;
        break;
      }
    }
    return Re.delete(C), Re.delete(T), en;
  }
  function ma(C, T, Z, ue, ut, Re, ft) {
    switch (Z) {
      case z:
        if (C.byteLength != T.byteLength || C.byteOffset != T.byteOffset)
          return !1;
        C = C.buffer, T = T.buffer;
      case Q:
        return !(C.byteLength != T.byteLength || !Re(new St(C), new St(T)));
      case p:
      case g:
      case F:
        return So(+C, +T);
      case v:
        return C.name == T.name && C.message == T.message;
      case U:
      case j:
        return C == T + "";
      case A:
        var Et = Nn;
      case G:
        var Xe = ue & o;
        if (Et || (Et = nt), C.size != T.size && !Xe)
          return !1;
        var ot = ft.get(C);
        if (ot)
          return ot == T;
        ue |= a, ft.set(C, T);
        var Ct = Si(Et(C), Et(T), ue, ut, Re, ft);
        return ft.delete(C), Ct;
      case M:
        if (mu)
          return mu.call(C) == mu.call(T);
    }
    return !1;
  }
  function yo(C, T, Z, ue, ut, Re) {
    var ft = Z & o, Et = Ei(C), Xe = Et.length, ot = Ei(T), Ct = ot.length;
    if (Xe != Ct && !ft)
      return !1;
    for (var en = Xe; en--; ) {
      var Ft = Et[en];
      if (!(ft ? Ft in T : Te.call(T, Ft)))
        return !1;
    }
    var dt = Re.get(C);
    if (dt && Re.get(T))
      return dt == T;
    var Yt = !0;
    Re.set(C, T), Re.set(T, C);
    for (var Wn = ft; ++en < Xe; ) {
      Ft = Et[en];
      var Fn = C[Ft], Qn = T[Ft];
      if (ue)
        var Iu = ft ? ue(Qn, Fn, Ft, T, C, Re) : ue(Fn, Qn, Ft, C, T, Re);
      if (!(Iu === void 0 ? Fn === Qn || ut(Fn, Qn, Z, ue, Re) : Iu)) {
        Yt = !1;
        break;
      }
      Wn || (Wn = Ft == "constructor");
    }
    if (Yt && !Wn) {
      var Kr = C.constructor, Tt = T.constructor;
      Kr != Tt && "constructor" in C && "constructor" in T && !(typeof Kr == "function" && Kr instanceof Kr && typeof Tt == "function" && Tt instanceof Tt) && (Yt = !1);
    }
    return Re.delete(C), Re.delete(T), Yt;
  }
  function Ei(C) {
    return bu(C, Ia, Io);
  }
  function Sr(C, T) {
    var Z = C.__data__;
    return xo(T) ? Z[typeof T == "string" ? "string" : "hash"] : Z.map;
  }
  function gn(C, T) {
    var Z = Lt(C, T);
    return ga(Z) ? Z : void 0;
  }
  function vo(C) {
    var T = Te.call(C, sr), Z = C[sr];
    try {
      C[sr] = void 0;
      var ue = !0;
    } catch {
    }
    var ut = $t.call(C);
    return ue && (T ? C[sr] = Z : delete C[sr]), ut;
  }
  var Io = oo ? function(C) {
    return C == null ? [] : (C = Object(C), te(oo(C), function(T) {
      return hn.call(C, T);
    }));
  } : it, jn = Qr;
  (fu && jn(new fu(new ArrayBuffer(1))) != z || Jr && jn(new Jr()) != A || du && jn(du.resolve()) != k || hu && jn(new hu()) != G || Ci && jn(new Ci()) != K) && (jn = function(C) {
    var T = Qr(C), Z = T == W ? C.constructor : void 0, ue = Z ? cr(Z) : "";
    if (ue)
      switch (ue) {
        case js:
          return z;
        case Qs:
          return A;
        case pu:
          return k;
        case qs:
          return G;
        case gu:
          return K;
      }
    return T;
  });
  function Co(C, T) {
    return T = T ?? l, !!T && (typeof C == "number" || Ye.test(C)) && C > -1 && C % 1 == 0 && C < T;
  }
  function xo(C) {
    var T = typeof C;
    return T == "string" || T == "number" || T == "symbol" || T == "boolean" ? C !== "__proto__" : C === null;
  }
  function Ao(C) {
    return !!_t && _t in C;
  }
  function wo(C) {
    var T = C && C.constructor, Z = typeof T == "function" && T.prototype || q;
    return C === Z;
  }
  function ba(C) {
    return $t.call(C);
  }
  function cr(C) {
    if (C != null) {
      try {
        return _e.call(C);
      } catch {
      }
      try {
        return C + "";
      } catch {
      }
    }
    return "";
  }
  function So(C, T) {
    return C === T || C !== C && T !== T;
  }
  var Eo = yu(/* @__PURE__ */ function() {
    return arguments;
  }()) ? yu : function(C) {
    return $r(C) && Te.call(C, "callee") && !hn.call(C, "callee");
  }, Fi = Array.isArray;
  function ya(C) {
    return C != null && Fo(C.length) && !Ri(C);
  }
  var vu = so || rt;
  function va(C, T) {
    return qr(C, T);
  }
  function Ri(C) {
    if (!Ro(C))
      return !1;
    var T = Qr(C);
    return T == b || T == S || T == h || T == N;
  }
  function Fo(C) {
    return typeof C == "number" && C > -1 && C % 1 == 0 && C <= l;
  }
  function Ro(C) {
    var T = typeof C;
    return C != null && (T == "object" || T == "function");
  }
  function $r(C) {
    return C != null && typeof C == "object";
  }
  var Po = It ? at(It) : mo;
  function Ia(C) {
    return ya(C) ? po(C) : bo(C);
  }
  function it() {
    return [];
  }
  function rt() {
    return !1;
  }
  e.exports = va;
})(Ts, Ts.exports);
var fE = Ts.exports;
const dE = /* @__PURE__ */ Ws(fE);
function wg(e) {
  return typeof e == "object" && e && "__lv" in e ? e.__lv.value : e;
}
function hE(e) {
  if (typeof e == "object" && e && "selectedOptions" in e && Array.isArray(e.selectedOptions)) {
    const t = e.selectedOptions, r = [];
    for (const u of t)
      if (typeof u == "object" && u && "emitValue" in u) {
        const o = u.emitValue;
        typeof o == "object" && o && "__lv" in o ? r.push(o.__lv.value) : r.push(o);
      } else
        return [];
    return r;
  }
  return e && typeof e == "object" && Array.isArray(e.__lv) ? e.__lv : Array.isArray(e) ? e : [];
}
function pE(e) {
  const t = hE(e.value);
  if (!e.prop.default && typeof t > "u")
    return ["required"];
  if (!e.prop.default && Array.isArray(t) && !t.length)
    return ["empty array"];
}
function gE(e) {
  const t = wg(e.value);
  if (t == null || typeof t > "u") return ["required"];
}
function mE(e) {
  const { prop: t, value: r } = e, u = wg(r);
  if (!t.default && (u == null || typeof u > "u"))
    return ["required"];
  const o = typeof u == "number" ? u : parseInt(String(u));
  if (Number.isNaN(o)) return ["not a number"];
  const a = [];
  return typeof t.min == "number" && o < t.min && a.push("number too small"), typeof t.max == "number" && o > t.max && a.push("number too big"), a;
}
function bE(e) {
  const { prop: t, value: r } = e;
  if (!t.default && (r == null || typeof r > "u"))
    return ["required"];
}
function yE(e) {
  const t = e.auth_type === "oauth", r = JSON.parse(e.custom_fields_json || "[]");
  if ("extracted_custom_fields_names" in e && e.extracted_custom_fields_names) {
    const u = (e.extracted_custom_fields_names || []).map((o) => ({
      name: o
    }));
    r.push(...u);
  }
  return r.map((u) => ({
    ...u,
    // if oauth, treat all as optional (they are usually needed for getting access token)
    optional: u.optional || t
  }));
}
function vE(e) {
  const { app: t, value: r } = e;
  if (!t)
    return ["app field not registered"];
  if (!r)
    return ["no app configured"];
  if (typeof r != "object")
    return ["not an app"];
  const u = r;
  if ("authProvisionId" in u && !u.authProvisionId && t.auth_type) {
    const o = [];
    if (t.auth_type === "oauth" && !u.oauth_access_token && o.push("missing oauth token"), t.auth_type === "oauth" || t.auth_type === "keys") {
      const a = yE(t), l = u;
      for (const c of a)
        !c.optional && !l[c.name] && o.push(`missing custom field: ${c.name}`);
    }
    return t.auth_type !== "none" && o.push("no auth provision configured"), o;
  }
}
const Sg = () => typeof window > "u" || typeof document > "u", IE = ({
  children: e,
  fallback: t = null
}) => {
  const [r, u] = $e(!Sg());
  return an(() => {
    u(!0);
  }, []), r ? /* @__PURE__ */ re(Yu, { children: e }) : /* @__PURE__ */ re(Yu, { children: t });
}, Eg = eo(
  void 0
), Yr = () => {
  if (Sg())
    throw new Error(
      "useFrontendClient cannot be used during server-side rendering"
    );
  const e = su(Eg);
  if (!e)
    throw new Error("Must be used inside FrontendClientProvider");
  return e;
}, rP = ({
  children: e,
  client: t
}) => {
  const [r] = $e(
    () => new ZS({
      defaultOptions: {
        queries: {
          staleTime: 36e5,
          refetchOnWindowFocus: !1
        }
      }
    })
  );
  return /* @__PURE__ */ re(IE, { fallback: /* @__PURE__ */ re(Yu, { children: e }), children: /* @__PURE__ */ re(QS, { client: r, children: /* @__PURE__ */ re(Eg.Provider, { value: t, children: e }) }) });
}, Ss = [
  "$.service.db",
  "$.interface.http",
  "$.interface.apphook",
  "$.interface.timer"
  // TODO add support for this (cron string and timers)
], Fg = eo(void 0), Vc = () => {
  const e = su(Fg);
  if (!e)
    throw new Error("Must be used inside provider");
  return e;
}, CE = ({
  children: e,
  props: t
}) => {
  const r = Yr(), u = Cc(), {
    component: o,
    configuredProps: a,
    propNames: l,
    userId: c,
    sdkResponse: f,
    enableDebugging: h
  } = t, p = o.key, [g, v] = $e(
    0
  ), [b, S] = $e({}), [A, F] = $e(!1), [P, W] = $e({}), [k, N] = $e([]), [U, G] = $e({});
  an(() => {
    const te = {}, oe = o.configurable_props || [];
    for (const le of oe)
      if (le.optional) {
        const Ve = le.name, at = M[Ve];
        at != null && at !== "" && (te[le.name] = !0);
      }
    G(te);
  }, [o.key, a]);
  const j = (te) => U[te.name];
  let M = a || {};
  const [Y, K] = $e(M), Q = t.onUpdateConfiguredProps || K;
  t.onUpdateConfiguredProps || (M = Y);
  const [z, ee] = $e(), [de, ie] = $e(), xe = {
    userId: c,
    componentId: p,
    configuredProps: M,
    dynamicPropsId: z == null ? void 0 : z.id
  }, we = {
    ...xe
  }, {
    isFetching: Fe
    // TODO error
  } = Ii({
    queryKey: ["dynamicProps", we],
    queryFn: async () => {
      var at;
      const te = await r.componentReloadProps(
        xe
      ), { dynamicProps: oe, observations: le, errors: Ve } = te;
      return le && le.filter((mt) => mt.k === "error").length > 0 ? kt(le) : kt(Ve), oe && ((at = t.onUpdateDynamicProps) == null || at.call(t, oe), ee(oe)), ie(void 0), [];
    },
    enabled: de != null
    // TODO or props.dynamicPropsId && !dynamicProps
  }), [Je, w] = $e(
    []
  );
  an(() => {
    Vt();
  }, [M]);
  let Ie = (z == null ? void 0 : z.configurableProps) || t.component.configurable_props || [];
  if (l != null && l.length) {
    const te = [];
    for (const oe of Ie)
      l.findIndex((le) => oe.name === le) >= 0 && te.push(oe);
    Ie = te;
  }
  de != null && (Ie = Ie.slice(
    0,
    de + 1
  ));
  const Ge = (te, oe) => {
    const le = [];
    if (te.optional || te.hidden || te.disabled || Ss.includes(te.type))
      return [];
    if (te.type === "app") {
      const Ve = b[te.name];
      if (Ve) {
        const at = Ve.extra.app;
        le.push(
          ...vE({
            value: oe,
            app: at
          }) ?? []
        );
      } else
        le.push("field not registered");
    } else te.type === "boolean" ? le.push(
      ...gE({
        value: oe
      }) ?? []
    ) : te.type === "integer" ? le.push(
      ...mE({
        prop: te,
        value: oe
      }) ?? []
    ) : te.type === "string" ? le.push(
      ...bE({
        prop: te,
        value: oe
      }) ?? []
    ) : te.type === "string[]" && le.push(
      ...pE({
        prop: te,
        value: oe
      }) ?? []
    );
    return le;
  }, E = (te) => {
    let oe;
    for (let le = 0; le < Ie.length; le++) {
      const Ve = Ie[le];
      if (Ve.hidden || Ve.optional && !j(Ve))
        continue;
      if (te[Ve.name] === void 0 && oe == null && (Ve.type === "app" || Ve.remoteOptions)) {
        oe = le;
        break;
      }
    }
    v(oe);
  }, Ye = (te) => {
    Q(te), E(te), ce(te);
  }, ce = (te) => {
    const oe = {};
    for (let le = 0; le < Ie.length; le++) {
      const Ve = Ie[le], at = te[Ve.name], mt = Ge(Ve, at);
      mt.length && (oe[Ve.name] = mt);
    }
    W(oe);
  };
  an(() => {
    E(Y);
  }, [Y]), an(() => {
    ce(M);
  }, [M, de, g]), an(() => {
    kt(f);
  }, [f]), an(() => {
    const te = {};
    for (const oe of Ie) {
      if (oe.hidden || Ss.includes(oe.type) || oe.optional && !j(oe))
        continue;
      const le = M[oe.name];
      le === void 0 ? "default" in oe && oe.default != null && (te[oe.name] = oe.default) : oe.type === "integer" && typeof le != "number" ? delete te[oe.name] : te[oe.name] = le;
    }
    dE(te, M) || Ye(te);
  }, [Ie]);
  const [Se, wt] = $e(c);
  an(() => {
    Se !== c && (Ye({}), wt(c));
  }, [c]);
  const De = (te, oe) => {
    const le = Ie[te], Ve = {
      ...M
    };
    oe === void 0 ? delete Ve[le.name] : Ve[le.name] = oe, Q(Ve), le.reloadProps && ie(te), (le.type === "app" || le.remoteOptions) && E(Ve);
    const at = Ge(le, oe), mt = {
      ...P
    };
    at.length ? mt[le.name] = at : delete mt[le.name], W(mt);
  }, gt = (te, oe) => {
    const le = {
      ...U
    };
    oe ? le[te.name] = !0 : delete le[te.name];
    const Ve = Ie.findIndex((at) => at.name === te.name);
    oe ? (a == null ? void 0 : a[te.name]) !== void 0 ? De(
      Ve,
      a[te.name]
    ) : "default" in te && te.default != null && De(Ve, te.default) : De(Ve, void 0), G(le);
  }, Vt = () => {
    const te = [];
    for (const oe of Ie) {
      if (!oe || oe.optional || oe.hidden || Ss.includes(oe.type))
        continue;
      const le = M[oe.name];
      Ge(oe, le).length && te.push(oe.name);
    }
    te && Je && cE.isEqual(te, Je) || w(te);
  }, Gt = (te) => {
    S((oe) => (oe[te.prop.name] = te, oe)), Vt();
  }, kt = (te) => {
    if (!te) return;
    let oe = [...k];
    const le = (tt, nt) => {
      try {
        const Qe = JSON.parse(tt), L = {
          name: Qe.name,
          message: Qe.message
        };
        L.name && L.message && nt.push(L);
      } catch {
      }
    }, Ve = (tt, nt) => {
      const Qe = {
        name: tt.name,
        message: tt.message
      };
      Qe.name && Qe.message && nt.push(Qe);
    }, at = (tt, nt) => {
      var L, q;
      const Qe = {
        name: (L = tt.err) == null ? void 0 : L.name,
        message: (q = tt.err) == null ? void 0 : q.message
      };
      Qe.name && Qe.message && nt.push(Qe);
    }, mt = (tt, nt) => {
      const Qe = tt.os || tt.observations;
      if (Array.isArray(Qe) && Qe.length > 0)
        for (let L = 0; L < Qe.length; L++)
          Qe[L].k === "error" && at(Qe[L], nt);
    }, Lt = (tt, nt) => {
      nt.push({
        name: tt.error,
        message: JSON.stringify(tt.details)
        //     message: ` // TODO: It would be nice to render the JSON in markdown
        // \`\`\`json
        // ${JSON.stringify(data.details)}
        // \`\`\`
        // `,
        //   })
      });
    }, Nn = (tt, nt) => {
      var Qe;
      try {
        const L = (Qe = JSON.parse(tt.message)) == null ? void 0 : Qe.data;
        L && "observations" in L ? mt(L, nt) : L && "error" in L && "details" in L && Lt(L, nt);
      } catch {
      }
    };
    if (Array.isArray(te) && te.length > 0)
      for (let tt = 0; tt < te.length; tt++) {
        const nt = te[tt];
        typeof nt == "string" ? le(nt, oe) : typeof nt == "object" && "name" in nt && "message" in nt ? Ve(nt, oe) : typeof nt == "object" && nt.k === "error" && at(nt, oe);
      }
    else typeof te == "object" && "os" in te || "observations" in te ? mt(te, oe) : typeof te == "object" && "message" in te ? Nn(te, oe) : oe = [];
    N(oe);
  }, wn = {
    id: u,
    isValid: !Object.keys(P).length,
    // XXX want to expose more from errors
    props: t,
    userId: c,
    component: o,
    configurableProps: Ie,
    configuredProps: M,
    dynamicProps: z,
    dynamicPropsQueryIsFetching: Fe,
    errors: P,
    fields: b,
    optionalPropIsEnabled: j,
    optionalPropSetEnabled: gt,
    propsNeedConfiguring: Je,
    queryDisabledIdx: g,
    registerField: Gt,
    setConfiguredProp: De,
    setSubmitting: F,
    submitting: A,
    sdkErrors: k,
    enableDebugging: h
  }, It = ln(
    () => wn,
    [
      // Since we're not modifying existing code structure, include all value properties
      // to maintain behavior but provide stability for component references
      wn
    ]
  );
  return /* @__PURE__ */ re(Fg.Provider, { value: It, children: e });
};
function yi(e) {
  "@babel/helpers - typeof";
  return yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yi(e);
}
function xE(e, t) {
  if (yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var u = r.call(e, t);
    if (yi(u) != "object") return u;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Rg(e) {
  var t = xE(e, "string");
  return yi(t) == "symbol" ? t : t + "";
}
function Vu(e, t, r) {
  return (t = Rg(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Qh(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    t && (u = u.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, u);
  }
  return r;
}
function he(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qh(Object(r), !0).forEach(function(u) {
      Vu(e, u, r[u]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qh(Object(r)).forEach(function(u) {
      Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(r, u));
    });
  }
  return e;
}
function AE(e) {
  if (Array.isArray(e)) return e;
}
function wE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var u, o, a, l, c = [], f = !0, h = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        f = !1;
      } else for (; !(f = (u = a.call(r)).done) && (c.push(u.value), c.length !== t); f = !0) ;
    } catch (p) {
      h = !0, o = p;
    } finally {
      try {
        if (!f && r.return != null && (l = r.return(), Object(l) !== l)) return;
      } finally {
        if (h) throw o;
      }
    }
    return c;
  }
}
function gc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, u = Array(t); r < t; r++) u[r] = e[r];
  return u;
}
function Pg(e, t) {
  if (e) {
    if (typeof e == "string") return gc(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? gc(e, t) : void 0;
  }
}
function SE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ar(e, t) {
  return AE(e) || wE(e, t) || Pg(e, t) || SE();
}
function EE(e, t) {
  if (e == null) return {};
  var r = {};
  for (var u in e) if ({}.hasOwnProperty.call(e, u)) {
    if (t.indexOf(u) !== -1) continue;
    r[u] = e[u];
  }
  return r;
}
function or(e, t) {
  if (e == null) return {};
  var r, u, o = EE(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (u = 0; u < a.length; u++) r = a[u], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
var FE = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function Og(e) {
  var t = e.defaultInputValue, r = t === void 0 ? "" : t, u = e.defaultMenuIsOpen, o = u === void 0 ? !1 : u, a = e.defaultValue, l = a === void 0 ? null : a, c = e.inputValue, f = e.menuIsOpen, h = e.onChange, p = e.onInputChange, g = e.onMenuClose, v = e.onMenuOpen, b = e.value, S = or(e, FE), A = $e(c !== void 0 ? c : r), F = Ar(A, 2), P = F[0], W = F[1], k = $e(f !== void 0 ? f : o), N = Ar(k, 2), U = N[0], G = N[1], j = $e(b !== void 0 ? b : l), M = Ar(j, 2), Y = M[0], K = M[1], Q = Mt(function(Fe, Je) {
    typeof h == "function" && h(Fe, Je), K(Fe);
  }, [h]), z = Mt(function(Fe, Je) {
    var w;
    typeof p == "function" && (w = p(Fe, Je)), W(w !== void 0 ? w : Fe);
  }, [p]), ee = Mt(function() {
    typeof v == "function" && v(), G(!0);
  }, [v]), de = Mt(function() {
    typeof g == "function" && g(), G(!1);
  }, [g]), ie = c !== void 0 ? c : P, xe = f !== void 0 ? f : U, we = b !== void 0 ? b : Y;
  return he(he({}, S), {}, {
    inputValue: ie,
    menuIsOpen: xe,
    onChange: Q,
    onInputChange: z,
    onMenuClose: de,
    onMenuOpen: ee,
    value: we
  });
}
function be() {
  return be = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var u in r) ({}).hasOwnProperty.call(r, u) && (e[u] = r[u]);
    }
    return e;
  }, be.apply(null, arguments);
}
function RE(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function qh(e, t) {
  for (var r = 0; r < t.length; r++) {
    var u = t[r];
    u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(e, Rg(u.key), u);
  }
}
function PE(e, t, r) {
  return t && qh(e.prototype, t), r && qh(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function mc(e, t) {
  return mc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, mc(e, t);
}
function OE(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && mc(e, t);
}
function Bs(e) {
  return Bs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Bs(e);
}
function _g() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (_g = function() {
    return !!e;
  })();
}
function _E(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function TE(e, t) {
  if (t && (yi(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return _E(e);
}
function BE(e) {
  var t = _g();
  return function() {
    var r, u = Bs(e);
    if (t) {
      var o = Bs(this).constructor;
      r = Reflect.construct(u, arguments, o);
    } else r = u.apply(this, arguments);
    return TE(this, r);
  };
}
function GE(e) {
  if (Array.isArray(e)) return gc(e);
}
function kE(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function LE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ji(e) {
  return GE(e) || kE(e) || Pg(e) || LE();
}
function DE(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const ME = Math.min, NE = Math.max, Gs = Math.round, Is = Math.floor, ks = (e) => ({
  x: e,
  y: e
});
function VE(e) {
  const {
    x: t,
    y: r,
    width: u,
    height: o
  } = e;
  return {
    width: u,
    height: o,
    top: r,
    left: t,
    right: t + u,
    bottom: r + o,
    x: t,
    y: r
  };
}
function Ys() {
  return typeof window < "u";
}
function Tg(e) {
  return Gg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function wr(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Bg(e) {
  var t;
  return (t = (Gg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Gg(e) {
  return Ys() ? e instanceof Node || e instanceof wr(e).Node : !1;
}
function WE(e) {
  return Ys() ? e instanceof Element || e instanceof wr(e).Element : !1;
}
function Wc(e) {
  return Ys() ? e instanceof HTMLElement || e instanceof wr(e).HTMLElement : !1;
}
function $h(e) {
  return !Ys() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof wr(e).ShadowRoot;
}
function kg(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: u,
    display: o
  } = Xc(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + u + r) && !["inline", "contents"].includes(o);
}
function XE() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function HE(e) {
  return ["html", "body", "#document"].includes(Tg(e));
}
function Xc(e) {
  return wr(e).getComputedStyle(e);
}
function zE(e) {
  if (Tg(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    $h(e) && e.host || // Fallback.
    Bg(e)
  );
  return $h(t) ? t.host : t;
}
function Lg(e) {
  const t = zE(e);
  return HE(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Wc(t) && kg(t) ? t : Lg(t);
}
function Ls(e, t, r) {
  var u;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = Lg(e), a = o === ((u = e.ownerDocument) == null ? void 0 : u.body), l = wr(o);
  if (a) {
    const c = bc(l);
    return t.concat(l, l.visualViewport || [], kg(o) ? o : [], c && r ? Ls(c) : []);
  }
  return t.concat(o, Ls(o, [], r));
}
function bc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ZE(e) {
  const t = Xc(e);
  let r = parseFloat(t.width) || 0, u = parseFloat(t.height) || 0;
  const o = Wc(e), a = o ? e.offsetWidth : r, l = o ? e.offsetHeight : u, c = Gs(r) !== a || Gs(u) !== l;
  return c && (r = a, u = l), {
    width: r,
    height: u,
    $: c
  };
}
function Hc(e) {
  return WE(e) ? e : e.contextElement;
}
function Kh(e) {
  const t = Hc(e);
  if (!Wc(t))
    return ks(1);
  const r = t.getBoundingClientRect(), {
    width: u,
    height: o,
    $: a
  } = ZE(t);
  let l = (a ? Gs(r.width) : r.width) / u, c = (a ? Gs(r.height) : r.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
const YE = /* @__PURE__ */ ks(0);
function JE(e) {
  const t = wr(e);
  return !XE() || !t.visualViewport ? YE : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function UE(e, t, r) {
  return !1;
}
function ep(e, t, r, u) {
  t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), a = Hc(e);
  let l = ks(1);
  t && (l = Kh(e));
  const c = UE() ? JE(a) : ks(0);
  let f = (o.left + c.x) / l.x, h = (o.top + c.y) / l.y, p = o.width / l.x, g = o.height / l.y;
  if (a) {
    const v = wr(a), b = u;
    let S = v, A = bc(S);
    for (; A && u && b !== S; ) {
      const F = Kh(A), P = A.getBoundingClientRect(), W = Xc(A), k = P.left + (A.clientLeft + parseFloat(W.paddingLeft)) * F.x, N = P.top + (A.clientTop + parseFloat(W.paddingTop)) * F.y;
      f *= F.x, h *= F.y, p *= F.x, g *= F.y, f += k, h += N, S = wr(A), A = bc(S);
    }
  }
  return VE({
    width: p,
    height: g,
    x: f,
    y: h
  });
}
function Dg(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function jE(e, t) {
  let r = null, u;
  const o = Bg(e);
  function a() {
    var c;
    clearTimeout(u), (c = r) == null || c.disconnect(), r = null;
  }
  function l(c, f) {
    c === void 0 && (c = !1), f === void 0 && (f = 1), a();
    const h = e.getBoundingClientRect(), {
      left: p,
      top: g,
      width: v,
      height: b
    } = h;
    if (c || t(), !v || !b)
      return;
    const S = Is(g), A = Is(o.clientWidth - (p + v)), F = Is(o.clientHeight - (g + b)), P = Is(p), k = {
      rootMargin: -S + "px " + -A + "px " + -F + "px " + -P + "px",
      threshold: NE(0, ME(1, f)) || 1
    };
    let N = !0;
    function U(G) {
      const j = G[0].intersectionRatio;
      if (j !== f) {
        if (!N)
          return l();
        j ? l(!1, j) : u = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      j === 1 && !Dg(h, e.getBoundingClientRect()) && l(), N = !1;
    }
    try {
      r = new IntersectionObserver(U, {
        ...k,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(U, k);
    }
    r.observe(e);
  }
  return l(!0), a;
}
function QE(e, t, r, u) {
  u === void 0 && (u = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = u, h = Hc(e), p = o || a ? [...h ? Ls(h) : [], ...Ls(t)] : [];
  p.forEach((P) => {
    o && P.addEventListener("scroll", r, {
      passive: !0
    }), a && P.addEventListener("resize", r);
  });
  const g = h && c ? jE(h, r) : null;
  let v = -1, b = null;
  l && (b = new ResizeObserver((P) => {
    let [W] = P;
    W && W.target === h && b && (b.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var k;
      (k = b) == null || k.observe(t);
    })), r();
  }), h && !f && b.observe(h), b.observe(t));
  let S, A = f ? ep(e) : null;
  f && F();
  function F() {
    const P = ep(e);
    A && !Dg(A, P) && r(), A = P, S = requestAnimationFrame(F);
  }
  return r(), () => {
    var P;
    p.forEach((W) => {
      o && W.removeEventListener("scroll", r), a && W.removeEventListener("resize", r);
    }), g == null || g(), (P = b) == null || P.disconnect(), b = null, f && cancelAnimationFrame(S);
  };
}
var yc = V1, qE = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], Ds = function() {
};
function $E(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function KE(e, t) {
  for (var r = arguments.length, u = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    u[o - 2] = arguments[o];
  var a = [].concat(u);
  if (t && e)
    for (var l in t)
      t.hasOwnProperty(l) && t[l] && a.push("".concat($E(e, l)));
  return a.filter(function(c) {
    return c;
  }).map(function(c) {
    return String(c).trim();
  }).join(" ");
}
var Ms = function(t) {
  return a2(t) ? t.filter(Boolean) : yi(t) === "object" && t !== null ? [t] : [];
}, Mg = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var r = or(t, qE);
  return he({}, r);
}, vt = function(t, r, u) {
  var o = t.cx, a = t.getStyles, l = t.getClassNames, c = t.className;
  return {
    css: a(r, t),
    className: o(u ?? {}, l(r, t), c)
  };
};
function Js(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function e2(e) {
  return Js(e) ? window.innerHeight : e.clientHeight;
}
function Ng(e) {
  return Js(e) ? window.pageYOffset : e.scrollTop;
}
function Ns(e, t) {
  if (Js(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function t2(e) {
  var t = getComputedStyle(e), r = t.position === "absolute", u = /(auto|scroll)/;
  if (t.position === "fixed") return document.documentElement;
  for (var o = e; o = o.parentElement; )
    if (t = getComputedStyle(o), !(r && t.position === "static") && u.test(t.overflow + t.overflowY + t.overflowX))
      return o;
  return document.documentElement;
}
function n2(e, t, r, u) {
  return r * ((e = e / u - 1) * e * e + 1) + t;
}
function Cs(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Ds, o = Ng(e), a = t - o, l = 10, c = 0;
  function f() {
    c += l;
    var h = n2(c, o, a, r);
    Ns(e, h), c < r ? window.requestAnimationFrame(f) : u(e);
  }
  f();
}
function tp(e, t) {
  var r = e.getBoundingClientRect(), u = t.getBoundingClientRect(), o = t.offsetHeight / 3;
  u.bottom + o > r.bottom ? Ns(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + o, e.scrollHeight)) : u.top - o < r.top && Ns(e, Math.max(t.offsetTop - o, 0));
}
function r2(e) {
  var t = e.getBoundingClientRect();
  return {
    bottom: t.bottom,
    height: t.height,
    left: t.left,
    right: t.right,
    top: t.top,
    width: t.width
  };
}
function np() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function i2() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var Vg = !1, u2 = {
  get passive() {
    return Vg = !0;
  }
}, xs = typeof window < "u" ? window : {};
xs.addEventListener && xs.removeEventListener && (xs.addEventListener("p", Ds, u2), xs.removeEventListener("p", Ds, !1));
var o2 = Vg;
function s2(e) {
  return e != null;
}
function a2(e) {
  return Array.isArray(e);
}
function Wu(e, t, r) {
  return e ? t : r;
}
var l2 = function(t) {
  for (var r = arguments.length, u = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    u[o - 1] = arguments[o];
  var a = Object.entries(t).filter(function(l) {
    var c = Ar(l, 1), f = c[0];
    return !u.includes(f);
  });
  return a.reduce(function(l, c) {
    var f = Ar(c, 2), h = f[0], p = f[1];
    return l[h] = p, l;
  }, {});
}, c2 = ["children", "innerProps"], f2 = ["children", "innerProps"];
function d2(e) {
  var t = e.maxHeight, r = e.menuEl, u = e.minHeight, o = e.placement, a = e.shouldScroll, l = e.isFixedPosition, c = e.controlHeight, f = t2(r), h = {
    placement: "bottom",
    maxHeight: t
  };
  if (!r || !r.offsetParent) return h;
  var p = f.getBoundingClientRect(), g = p.height, v = r.getBoundingClientRect(), b = v.bottom, S = v.height, A = v.top, F = r.offsetParent.getBoundingClientRect(), P = F.top, W = l ? window.innerHeight : e2(f), k = Ng(f), N = parseInt(getComputedStyle(r).marginBottom, 10), U = parseInt(getComputedStyle(r).marginTop, 10), G = P - U, j = W - A, M = G + k, Y = g - k - A, K = b - W + k + N, Q = k + A - U, z = 160;
  switch (o) {
    case "auto":
    case "bottom":
      if (j >= S)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (Y >= S && !l)
        return a && Cs(f, K, z), {
          placement: "bottom",
          maxHeight: t
        };
      if (!l && Y >= u || l && j >= u) {
        a && Cs(f, K, z);
        var ee = l ? j - N : Y - N;
        return {
          placement: "bottom",
          maxHeight: ee
        };
      }
      if (o === "auto" || l) {
        var de = t, ie = l ? G : M;
        return ie >= u && (de = Math.min(ie - N - c, t)), {
          placement: "top",
          maxHeight: de
        };
      }
      if (o === "bottom")
        return a && Ns(f, K), {
          placement: "bottom",
          maxHeight: t
        };
      break;
    case "top":
      if (G >= S)
        return {
          placement: "top",
          maxHeight: t
        };
      if (M >= S && !l)
        return a && Cs(f, Q, z), {
          placement: "top",
          maxHeight: t
        };
      if (!l && M >= u || l && G >= u) {
        var xe = t;
        return (!l && M >= u || l && G >= u) && (xe = l ? G - U : M - U), a && Cs(f, Q, z), {
          placement: "top",
          maxHeight: xe
        };
      }
      return {
        placement: "bottom",
        maxHeight: t
      };
    default:
      throw new Error('Invalid placement provided "'.concat(o, '".'));
  }
  return h;
}
function h2(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var Wg = function(t) {
  return t === "auto" ? "bottom" : t;
}, p2 = function(t, r) {
  var u, o = t.placement, a = t.theme, l = a.borderRadius, c = a.spacing, f = a.colors;
  return he((u = {
    label: "menu"
  }, Vu(u, h2(o), "100%"), Vu(u, "position", "absolute"), Vu(u, "width", "100%"), Vu(u, "zIndex", 1), u), r ? {} : {
    backgroundColor: f.neutral0,
    borderRadius: l,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: c.menuGutter,
    marginTop: c.menuGutter
  });
}, Xg = /* @__PURE__ */ eo(null), g2 = function(t) {
  var r = t.children, u = t.minMenuHeight, o = t.maxMenuHeight, a = t.menuPlacement, l = t.menuPosition, c = t.menuShouldScrollIntoView, f = t.theme, h = su(Xg) || {}, p = h.setPortalPlacement, g = xr(null), v = $e(o), b = Ar(v, 2), S = b[0], A = b[1], F = $e(null), P = Ar(F, 2), W = P[0], k = P[1], N = f.spacing.controlHeight;
  return yc(function() {
    var U = g.current;
    if (U) {
      var G = l === "fixed", j = c && !G, M = d2({
        maxHeight: o,
        menuEl: U,
        minHeight: u,
        placement: a,
        shouldScroll: j,
        isFixedPosition: G,
        controlHeight: N
      });
      A(M.maxHeight), k(M.placement), p == null || p(M.placement);
    }
  }, [o, a, l, c, u, p, N]), r({
    ref: g,
    placerProps: he(he({}, t), {}, {
      placement: W || Wg(a),
      maxHeight: S
    })
  });
}, m2 = function(t) {
  var r = t.children, u = t.innerRef, o = t.innerProps;
  return ge("div", be({}, vt(t, "menu", {
    menu: !0
  }), {
    ref: u
  }, o), r);
}, b2 = m2, y2 = function(t, r) {
  var u = t.maxHeight, o = t.theme.spacing.baseUnit;
  return he({
    maxHeight: u,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, r ? {} : {
    paddingBottom: o,
    paddingTop: o
  });
}, v2 = function(t) {
  var r = t.children, u = t.innerProps, o = t.innerRef, a = t.isMulti;
  return ge("div", be({}, vt(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": a
  }), {
    ref: o
  }, u), r);
}, Hg = function(t, r) {
  var u = t.theme, o = u.spacing.baseUnit, a = u.colors;
  return he({
    textAlign: "center"
  }, r ? {} : {
    color: a.neutral40,
    padding: "".concat(o * 2, "px ").concat(o * 3, "px")
  });
}, I2 = Hg, C2 = Hg, x2 = function(t) {
  var r = t.children, u = r === void 0 ? "No options" : r, o = t.innerProps, a = or(t, c2);
  return ge("div", be({}, vt(he(he({}, a), {}, {
    children: u,
    innerProps: o
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), o), u);
}, A2 = function(t) {
  var r = t.children, u = r === void 0 ? "Loading..." : r, o = t.innerProps, a = or(t, f2);
  return ge("div", be({}, vt(he(he({}, a), {}, {
    children: u,
    innerProps: o
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), o), u);
}, w2 = function(t) {
  var r = t.rect, u = t.offset, o = t.position;
  return {
    left: r.left,
    position: o,
    top: u,
    width: r.width,
    zIndex: 1
  };
}, S2 = function(t) {
  var r = t.appendTo, u = t.children, o = t.controlElement, a = t.innerProps, l = t.menuPlacement, c = t.menuPosition, f = xr(null), h = xr(null), p = $e(Wg(l)), g = Ar(p, 2), v = g[0], b = g[1], S = ln(function() {
    return {
      setPortalPlacement: b
    };
  }, []), A = $e(null), F = Ar(A, 2), P = F[0], W = F[1], k = Mt(function() {
    if (o) {
      var j = r2(o), M = c === "fixed" ? 0 : window.pageYOffset, Y = j[v] + M;
      (Y !== (P == null ? void 0 : P.offset) || j.left !== (P == null ? void 0 : P.rect.left) || j.width !== (P == null ? void 0 : P.rect.width)) && W({
        offset: Y,
        rect: j
      });
    }
  }, [o, c, v, P == null ? void 0 : P.offset, P == null ? void 0 : P.rect.left, P == null ? void 0 : P.rect.width]);
  yc(function() {
    k();
  }, [k]);
  var N = Mt(function() {
    typeof h.current == "function" && (h.current(), h.current = null), o && f.current && (h.current = QE(o, f.current, k, {
      elementResize: "ResizeObserver" in window
    }));
  }, [o, k]);
  yc(function() {
    N();
  }, [N]);
  var U = Mt(function(j) {
    f.current = j, N();
  }, [N]);
  if (!r && c !== "fixed" || !P) return null;
  var G = ge("div", be({
    ref: U
  }, vt(he(he({}, t), {}, {
    offset: P.offset,
    position: c,
    rect: P.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), a), u);
  return ge(Xg.Provider, {
    value: S
  }, r ? /* @__PURE__ */ H1(G, r) : G);
}, E2 = function(t) {
  var r = t.isDisabled, u = t.isRtl;
  return {
    label: "container",
    direction: u ? "rtl" : void 0,
    pointerEvents: r ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, F2 = function(t) {
  var r = t.children, u = t.innerProps, o = t.isDisabled, a = t.isRtl;
  return ge("div", be({}, vt(t, "container", {
    "--is-disabled": o,
    "--is-rtl": a
  }), u), r);
}, R2 = function(t, r) {
  var u = t.theme.spacing, o = t.isMulti, a = t.hasValue, l = t.selectProps.controlShouldRenderValue;
  return he({
    alignItems: "center",
    display: o && a && l ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, r ? {} : {
    padding: "".concat(u.baseUnit / 2, "px ").concat(u.baseUnit * 2, "px")
  });
}, P2 = function(t) {
  var r = t.children, u = t.innerProps, o = t.isMulti, a = t.hasValue;
  return ge("div", be({}, vt(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": o,
    "value-container--has-value": a
  }), u), r);
}, O2 = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, _2 = function(t) {
  var r = t.children, u = t.innerProps;
  return ge("div", be({}, vt(t, "indicatorsContainer", {
    indicators: !0
  }), u), r);
}, rp, T2 = ["size"], B2 = ["innerProps", "isRtl", "size"];
function G2() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var k2 = process.env.NODE_ENV === "production" ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */",
  toString: G2
}, zg = function(t) {
  var r = t.size, u = or(t, T2);
  return ge("svg", be({
    height: r,
    width: r,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: k2
  }, u));
}, zc = function(t) {
  return ge(zg, be({
    size: 20
  }, t), ge("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, Zg = function(t) {
  return ge(zg, be({
    size: 20
  }, t), ge("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, Yg = function(t, r) {
  var u = t.isFocused, o = t.theme, a = o.spacing.baseUnit, l = o.colors;
  return he({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, r ? {} : {
    color: u ? l.neutral60 : l.neutral20,
    padding: a * 2,
    ":hover": {
      color: u ? l.neutral80 : l.neutral40
    }
  });
}, L2 = Yg, D2 = function(t) {
  var r = t.children, u = t.innerProps;
  return ge("div", be({}, vt(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), u), r || ge(Zg, null));
}, M2 = Yg, N2 = function(t) {
  var r = t.children, u = t.innerProps;
  return ge("div", be({}, vt(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), u), r || ge(zc, null));
}, V2 = function(t, r) {
  var u = t.isDisabled, o = t.theme, a = o.spacing.baseUnit, l = o.colors;
  return he({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, r ? {} : {
    backgroundColor: u ? l.neutral10 : l.neutral20,
    marginBottom: a * 2,
    marginTop: a * 2
  });
}, W2 = function(t) {
  var r = t.innerProps;
  return ge("span", be({}, r, vt(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, X2 = X1(rp || (rp = DE([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), H2 = function(t, r) {
  var u = t.isFocused, o = t.size, a = t.theme, l = a.colors, c = a.spacing.baseUnit;
  return he({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: o,
    lineHeight: 1,
    marginRight: o,
    textAlign: "center",
    verticalAlign: "middle"
  }, r ? {} : {
    color: u ? l.neutral60 : l.neutral20,
    padding: c * 2
  });
}, Dl = function(t) {
  var r = t.delay, u = t.offset;
  return ge("span", {
    css: /* @__PURE__ */ Pp({
      animation: "".concat(X2, " 1s ease-in-out ").concat(r, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: u ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, process.env.NODE_ENV === "production" ? "" : ";label:LoadingDot;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */")
  });
}, z2 = function(t) {
  var r = t.innerProps, u = t.isRtl, o = t.size, a = o === void 0 ? 4 : o, l = or(t, B2);
  return ge("div", be({}, vt(he(he({}, l), {}, {
    innerProps: r,
    isRtl: u,
    size: a
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), r), ge(Dl, {
    delay: 0,
    offset: u
  }), ge(Dl, {
    delay: 160,
    offset: !0
  }), ge(Dl, {
    delay: 320,
    offset: !u
  }));
}, Z2 = function(t, r) {
  var u = t.isDisabled, o = t.isFocused, a = t.theme, l = a.colors, c = a.borderRadius, f = a.spacing;
  return he({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: f.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, r ? {} : {
    backgroundColor: u ? l.neutral5 : l.neutral0,
    borderColor: u ? l.neutral10 : o ? l.primary : l.neutral20,
    borderRadius: c,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: o ? "0 0 0 1px ".concat(l.primary) : void 0,
    "&:hover": {
      borderColor: o ? l.primary : l.neutral30
    }
  });
}, Y2 = function(t) {
  var r = t.children, u = t.isDisabled, o = t.isFocused, a = t.innerRef, l = t.innerProps, c = t.menuIsOpen;
  return ge("div", be({
    ref: a
  }, vt(t, "control", {
    control: !0,
    "control--is-disabled": u,
    "control--is-focused": o,
    "control--menu-is-open": c
  }), l, {
    "aria-disabled": u || void 0
  }), r);
}, J2 = Y2, U2 = ["data"], j2 = function(t, r) {
  var u = t.theme.spacing;
  return r ? {} : {
    paddingBottom: u.baseUnit * 2,
    paddingTop: u.baseUnit * 2
  };
}, Q2 = function(t) {
  var r = t.children, u = t.cx, o = t.getStyles, a = t.getClassNames, l = t.Heading, c = t.headingProps, f = t.innerProps, h = t.label, p = t.theme, g = t.selectProps;
  return ge("div", be({}, vt(t, "group", {
    group: !0
  }), f), ge(l, be({}, c, {
    selectProps: g,
    theme: p,
    getStyles: o,
    getClassNames: a,
    cx: u
  }), h), ge("div", null, r));
}, q2 = function(t, r) {
  var u = t.theme, o = u.colors, a = u.spacing;
  return he({
    label: "group",
    cursor: "default",
    display: "block"
  }, r ? {} : {
    color: o.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: a.baseUnit * 3,
    paddingRight: a.baseUnit * 3,
    textTransform: "uppercase"
  });
}, $2 = function(t) {
  var r = Mg(t);
  r.data;
  var u = or(r, U2);
  return ge("div", be({}, vt(t, "groupHeading", {
    "group-heading": !0
  }), u));
}, K2 = Q2, eF = ["innerRef", "isDisabled", "isHidden", "inputClassName"], tF = function(t, r) {
  var u = t.isDisabled, o = t.value, a = t.theme, l = a.spacing, c = a.colors;
  return he(he({
    visibility: u ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: o ? "translateZ(0)" : ""
  }, nF), r ? {} : {
    margin: l.baseUnit / 2,
    paddingBottom: l.baseUnit / 2,
    paddingTop: l.baseUnit / 2,
    color: c.neutral80
  });
}, Jg = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, nF = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": he({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, Jg)
}, rF = function(t) {
  return he({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, Jg);
}, iF = function(t) {
  var r = t.cx, u = t.value, o = Mg(t), a = o.innerRef, l = o.isDisabled, c = o.isHidden, f = o.inputClassName, h = or(o, eF);
  return ge("div", be({}, vt(t, "input", {
    "input-container": !0
  }), {
    "data-value": u || ""
  }), ge("input", be({
    className: r({
      input: !0
    }, f),
    ref: a,
    style: rF(c),
    disabled: l
  }, h)));
}, uF = iF, oF = function(t, r) {
  var u = t.theme, o = u.spacing, a = u.borderRadius, l = u.colors;
  return he({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, r ? {} : {
    backgroundColor: l.neutral10,
    borderRadius: a / 2,
    margin: o.baseUnit / 2
  });
}, sF = function(t, r) {
  var u = t.theme, o = u.borderRadius, a = u.colors, l = t.cropWithEllipsis;
  return he({
    overflow: "hidden",
    textOverflow: l || l === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, r ? {} : {
    borderRadius: o / 2,
    color: a.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
}, aF = function(t, r) {
  var u = t.theme, o = u.spacing, a = u.borderRadius, l = u.colors, c = t.isFocused;
  return he({
    alignItems: "center",
    display: "flex"
  }, r ? {} : {
    borderRadius: a / 2,
    backgroundColor: c ? l.dangerLight : void 0,
    paddingLeft: o.baseUnit,
    paddingRight: o.baseUnit,
    ":hover": {
      backgroundColor: l.dangerLight,
      color: l.danger
    }
  });
}, Ug = function(t) {
  var r = t.children, u = t.innerProps;
  return ge("div", u, r);
}, lF = Ug, cF = Ug;
function fF(e) {
  var t = e.children, r = e.innerProps;
  return ge("div", be({
    role: "button"
  }, r), t || ge(zc, {
    size: 14
  }));
}
var dF = function(t) {
  var r = t.children, u = t.components, o = t.data, a = t.innerProps, l = t.isDisabled, c = t.removeProps, f = t.selectProps, h = u.Container, p = u.Label, g = u.Remove;
  return ge(h, {
    data: o,
    innerProps: he(he({}, vt(t, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": l
    })), a),
    selectProps: f
  }, ge(p, {
    data: o,
    innerProps: he({}, vt(t, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: f
  }, r), ge(g, {
    data: o,
    innerProps: he(he({}, vt(t, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(r || "option")
    }, c),
    selectProps: f
  }));
}, hF = dF, pF = function(t, r) {
  var u = t.isDisabled, o = t.isFocused, a = t.isSelected, l = t.theme, c = l.spacing, f = l.colors;
  return he({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, r ? {} : {
    backgroundColor: a ? f.primary : o ? f.primary25 : "transparent",
    color: u ? f.neutral20 : a ? f.neutral0 : "inherit",
    padding: "".concat(c.baseUnit * 2, "px ").concat(c.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: u ? void 0 : a ? f.primary : f.primary50
    }
  });
}, gF = function(t) {
  var r = t.children, u = t.isDisabled, o = t.isFocused, a = t.isSelected, l = t.innerRef, c = t.innerProps;
  return ge("div", be({}, vt(t, "option", {
    option: !0,
    "option--is-disabled": u,
    "option--is-focused": o,
    "option--is-selected": a
  }), {
    ref: l,
    "aria-disabled": u
  }, c), r);
}, mF = gF, bF = function(t, r) {
  var u = t.theme, o = u.spacing, a = u.colors;
  return he({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, r ? {} : {
    color: a.neutral50,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, yF = function(t) {
  var r = t.children, u = t.innerProps;
  return ge("div", be({}, vt(t, "placeholder", {
    placeholder: !0
  }), u), r);
}, vF = yF, IF = function(t, r) {
  var u = t.isDisabled, o = t.theme, a = o.spacing, l = o.colors;
  return he({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, r ? {} : {
    color: u ? l.neutral40 : l.neutral80,
    marginLeft: a.baseUnit / 2,
    marginRight: a.baseUnit / 2
  });
}, CF = function(t) {
  var r = t.children, u = t.isDisabled, o = t.innerProps;
  return ge("div", be({}, vt(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": u
  }), o), r);
}, xF = CF, uo = {
  ClearIndicator: N2,
  Control: J2,
  DropdownIndicator: D2,
  DownChevron: Zg,
  CrossIcon: zc,
  Group: K2,
  GroupHeading: $2,
  IndicatorsContainer: _2,
  IndicatorSeparator: W2,
  Input: uF,
  LoadingIndicator: z2,
  Menu: b2,
  MenuList: v2,
  MenuPortal: S2,
  LoadingMessage: A2,
  NoOptionsMessage: x2,
  MultiValue: hF,
  MultiValueContainer: lF,
  MultiValueLabel: cF,
  MultiValueRemove: fF,
  Option: mF,
  Placeholder: vF,
  SelectContainer: F2,
  SingleValue: xF,
  ValueContainer: P2
}, AF = function(t) {
  return he(he({}, uo), t.components);
}, ip = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function wF(e, t) {
  return !!(e === t || ip(e) && ip(t));
}
function SF(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!wF(e[r], t[r]))
      return !1;
  return !0;
}
function EF(e, t) {
  t === void 0 && (t = SF);
  var r = null;
  function u() {
    for (var o = [], a = 0; a < arguments.length; a++)
      o[a] = arguments[a];
    if (r && r.lastThis === this && t(o, r.lastArgs))
      return r.lastResult;
    var l = e.apply(this, o);
    return r = {
      lastResult: l,
      lastArgs: o,
      lastThis: this
    }, l;
  }
  return u.clear = function() {
    r = null;
  }, u;
}
function FF() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var RF = process.env.NODE_ENV === "production" ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IEpTWCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: FF
}, PF = function(t) {
  return ge("span", be({
    css: RF
  }, t));
}, up = PF, OF = {
  guidance: function(t) {
    var r = t.isSearchable, u = t.isMulti, o = t.tabSelectsValue, a = t.context, l = t.isInitialFocus;
    switch (a) {
      case "menu":
        return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(o ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return l ? "".concat(t["aria-label"] || "Select", " is focused ").concat(r ? ",type to refine list" : "", ", press Down to open the menu, ").concat(u ? " press left to focus selected values" : "") : "";
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function(t) {
    var r = t.action, u = t.label, o = u === void 0 ? "" : u, a = t.labels, l = t.isDisabled;
    switch (r) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(o, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(a.length > 1 ? "s" : "", " ").concat(a.join(","), ", selected.");
      case "select-option":
        return l ? "option ".concat(o, " is disabled. Select another option.") : "option ".concat(o, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(t) {
    var r = t.context, u = t.focused, o = t.options, a = t.label, l = a === void 0 ? "" : a, c = t.selectValue, f = t.isDisabled, h = t.isSelected, p = t.isAppleDevice, g = function(A, F) {
      return A && A.length ? "".concat(A.indexOf(F) + 1, " of ").concat(A.length) : "";
    };
    if (r === "value" && c)
      return "value ".concat(l, " focused, ").concat(g(c, u), ".");
    if (r === "menu" && p) {
      var v = f ? " disabled" : "", b = "".concat(h ? " selected" : "").concat(v);
      return "".concat(l).concat(b, ", ").concat(g(o, u), ".");
    }
    return "";
  },
  onFilter: function(t) {
    var r = t.inputValue, u = t.resultsMessage;
    return "".concat(u).concat(r ? " for search term " + r : "", ".");
  }
}, _F = function(t) {
  var r = t.ariaSelection, u = t.focusedOption, o = t.focusedValue, a = t.focusableOptions, l = t.isFocused, c = t.selectValue, f = t.selectProps, h = t.id, p = t.isAppleDevice, g = f.ariaLiveMessages, v = f.getOptionLabel, b = f.inputValue, S = f.isMulti, A = f.isOptionDisabled, F = f.isSearchable, P = f.menuIsOpen, W = f.options, k = f.screenReaderStatus, N = f.tabSelectsValue, U = f.isLoading, G = f["aria-label"], j = f["aria-live"], M = ln(function() {
    return he(he({}, OF), g || {});
  }, [g]), Y = ln(function() {
    var ie = "";
    if (r && M.onChange) {
      var xe = r.option, we = r.options, Fe = r.removedValue, Je = r.removedValues, w = r.value, Ie = function(De) {
        return Array.isArray(De) ? null : De;
      }, Ge = Fe || xe || Ie(w), E = Ge ? v(Ge) : "", Ye = we || Je || void 0, ce = Ye ? Ye.map(v) : [], Se = he({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: Ge && A(Ge, c),
        label: E,
        labels: ce
      }, r);
      ie = M.onChange(Se);
    }
    return ie;
  }, [r, M, A, c, v]), K = ln(function() {
    var ie = "", xe = u || o, we = !!(u && c && c.includes(u));
    if (xe && M.onFocus) {
      var Fe = {
        focused: xe,
        label: v(xe),
        isDisabled: A(xe, c),
        isSelected: we,
        options: a,
        context: xe === u ? "menu" : "value",
        selectValue: c,
        isAppleDevice: p
      };
      ie = M.onFocus(Fe);
    }
    return ie;
  }, [u, o, v, A, M, a, c, p]), Q = ln(function() {
    var ie = "";
    if (P && W.length && !U && M.onFilter) {
      var xe = k({
        count: a.length
      });
      ie = M.onFilter({
        inputValue: b,
        resultsMessage: xe
      });
    }
    return ie;
  }, [a, b, P, M, W, k, U]), z = (r == null ? void 0 : r.action) === "initial-input-focus", ee = ln(function() {
    var ie = "";
    if (M.guidance) {
      var xe = o ? "value" : P ? "menu" : "input";
      ie = M.guidance({
        "aria-label": G,
        context: xe,
        isDisabled: u && A(u, c),
        isMulti: S,
        isSearchable: F,
        tabSelectsValue: N,
        isInitialFocus: z
      });
    }
    return ie;
  }, [G, u, o, S, A, F, P, M, c, N, z]), de = ge(Hl, null, ge("span", {
    id: "aria-selection"
  }, Y), ge("span", {
    id: "aria-focused"
  }, K), ge("span", {
    id: "aria-results"
  }, Q), ge("span", {
    id: "aria-guidance"
  }, ee));
  return ge(Hl, null, ge(up, {
    id: h
  }, z && de), ge(up, {
    "aria-live": j,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, l && !z && de));
}, TF = _F, vc = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}], BF = new RegExp("[" + vc.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), jg = {};
for (var Ml = 0; Ml < vc.length; Ml++)
  for (var Nl = vc[Ml], Vl = 0; Vl < Nl.letters.length; Vl++)
    jg[Nl.letters[Vl]] = Nl.base;
var Qg = function(t) {
  return t.replace(BF, function(r) {
    return jg[r];
  });
}, GF = EF(Qg), op = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, kF = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, LF = function(t) {
  return function(r, u) {
    if (r.data.__isNew__) return !0;
    var o = he({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: kF,
      trim: !0,
      matchFrom: "any"
    }, t), a = o.ignoreCase, l = o.ignoreAccents, c = o.stringify, f = o.trim, h = o.matchFrom, p = f ? op(u) : u, g = f ? op(c(r)) : c(r);
    return a && (p = p.toLowerCase(), g = g.toLowerCase()), l && (p = GF(p), g = Qg(g)), h === "start" ? g.substr(0, p.length) === p : g.indexOf(p) > -1;
  };
}, DF = ["innerRef"];
function MF(e) {
  var t = e.innerRef, r = or(e, DF), u = l2(r, "onExited", "in", "enter", "exit", "appear");
  return ge("input", be({
    ref: t
  }, u, {
    css: /* @__PURE__ */ Pp({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, process.env.NODE_ENV === "production" ? "" : ";label:DummyInput;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyByZW1vdmVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHVtbXlJbnB1dCh7XG4gIGlubmVyUmVmLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbnB1dCddICYge1xuICByZWFkb25seSBpbm5lclJlZjogUmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xufSkge1xuICAvLyBSZW1vdmUgYW5pbWF0aW9uIHByb3BzIG5vdCBtZWFudCBmb3IgSFRNTCBlbGVtZW50c1xuICBjb25zdCBmaWx0ZXJlZFByb3BzID0gcmVtb3ZlUHJvcHMoXG4gICAgcHJvcHMsXG4gICAgJ29uRXhpdGVkJyxcbiAgICAnaW4nLFxuICAgICdlbnRlcicsXG4gICAgJ2V4aXQnLFxuICAgICdhcHBlYXInXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICB7Li4uZmlsdGVyZWRQcm9wc31cbiAgICAgIGNzcz17e1xuICAgICAgICBsYWJlbDogJ2R1bW15SW5wdXQnLFxuICAgICAgICAvLyBnZXQgcmlkIG9mIGFueSBkZWZhdWx0IHN0eWxlc1xuICAgICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgdGhpcyBoaWRlcyB0aGUgZmxhc2hpbmcgY3Vyc29yXG4gICAgICAgIGNhcmV0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIGdyaWRBcmVhOiAnMSAvIDEgLyAyIC8gMycsXG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgd2l0aG91dCBgd2lkdGhgIGJyb3dzZXJzIHdvbid0IGFsbG93IGZvY3VzXG4gICAgICAgIHdpZHRoOiAxLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gZGVza3RvcFxuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSguMDEpJyxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ== */")
  }));
}
var NF = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function VF(e) {
  var t = e.isEnabled, r = e.onBottomArrive, u = e.onBottomLeave, o = e.onTopArrive, a = e.onTopLeave, l = xr(!1), c = xr(!1), f = xr(0), h = xr(null), p = Mt(function(F, P) {
    if (h.current !== null) {
      var W = h.current, k = W.scrollTop, N = W.scrollHeight, U = W.clientHeight, G = h.current, j = P > 0, M = N - U - k, Y = !1;
      M > P && l.current && (u && u(F), l.current = !1), j && c.current && (a && a(F), c.current = !1), j && P > M ? (r && !l.current && r(F), G.scrollTop = N, Y = !0, l.current = !0) : !j && -P > k && (o && !c.current && o(F), G.scrollTop = 0, Y = !0, c.current = !0), Y && NF(F);
    }
  }, [r, u, o, a]), g = Mt(function(F) {
    p(F, F.deltaY);
  }, [p]), v = Mt(function(F) {
    f.current = F.changedTouches[0].clientY;
  }, []), b = Mt(function(F) {
    var P = f.current - F.changedTouches[0].clientY;
    p(F, P);
  }, [p]), S = Mt(function(F) {
    if (F) {
      var P = o2 ? {
        passive: !1
      } : !1;
      F.addEventListener("wheel", g, P), F.addEventListener("touchstart", v, P), F.addEventListener("touchmove", b, P);
    }
  }, [b, v, g]), A = Mt(function(F) {
    F && (F.removeEventListener("wheel", g, !1), F.removeEventListener("touchstart", v, !1), F.removeEventListener("touchmove", b, !1));
  }, [b, v, g]);
  return an(function() {
    if (t) {
      var F = h.current;
      return S(F), function() {
        A(F);
      };
    }
  }, [t, S, A]), function(F) {
    h.current = F;
  };
}
var sp = ["boxSizing", "height", "overflow", "paddingRight", "position"], ap = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function lp(e) {
  e.cancelable && e.preventDefault();
}
function cp(e) {
  e.stopPropagation();
}
function fp() {
  var e = this.scrollTop, t = this.scrollHeight, r = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : r === t && (this.scrollTop = e - 1);
}
function dp() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var hp = !!(typeof window < "u" && window.document && window.document.createElement), Mu = 0, Hi = {
  capture: !1,
  passive: !1
};
function WF(e) {
  var t = e.isEnabled, r = e.accountForScrollbars, u = r === void 0 ? !0 : r, o = xr({}), a = xr(null), l = Mt(function(f) {
    if (hp) {
      var h = document.body, p = h && h.style;
      if (u && sp.forEach(function(S) {
        var A = p && p[S];
        o.current[S] = A;
      }), u && Mu < 1) {
        var g = parseInt(o.current.paddingRight, 10) || 0, v = document.body ? document.body.clientWidth : 0, b = window.innerWidth - v + g || 0;
        Object.keys(ap).forEach(function(S) {
          var A = ap[S];
          p && (p[S] = A);
        }), p && (p.paddingRight = "".concat(b, "px"));
      }
      h && dp() && (h.addEventListener("touchmove", lp, Hi), f && (f.addEventListener("touchstart", fp, Hi), f.addEventListener("touchmove", cp, Hi))), Mu += 1;
    }
  }, [u]), c = Mt(function(f) {
    if (hp) {
      var h = document.body, p = h && h.style;
      Mu = Math.max(Mu - 1, 0), u && Mu < 1 && sp.forEach(function(g) {
        var v = o.current[g];
        p && (p[g] = v);
      }), h && dp() && (h.removeEventListener("touchmove", lp, Hi), f && (f.removeEventListener("touchstart", fp, Hi), f.removeEventListener("touchmove", cp, Hi)));
    }
  }, [u]);
  return an(function() {
    if (t) {
      var f = a.current;
      return l(f), function() {
        c(f);
      };
    }
  }, [t, l, c]), function(f) {
    a.current = f;
  };
}
function XF() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var HF = function(t) {
  var r = t.target;
  return r.ownerDocument.activeElement && r.ownerDocument.activeElement.blur();
}, zF = process.env.NODE_ENV === "production" ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: XF
};
function ZF(e) {
  var t = e.children, r = e.lockEnabled, u = e.captureEnabled, o = u === void 0 ? !0 : u, a = e.onBottomArrive, l = e.onBottomLeave, c = e.onTopArrive, f = e.onTopLeave, h = VF({
    isEnabled: o,
    onBottomArrive: a,
    onBottomLeave: l,
    onTopArrive: c,
    onTopLeave: f
  }), p = WF({
    isEnabled: r
  }), g = function(b) {
    h(b), p(b);
  };
  return ge(Hl, null, r && ge("div", {
    onClick: HF,
    css: zF
  }), t(g));
}
function YF() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var JF = process.env.NODE_ENV === "production" ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: YF
}, UF = function(t) {
  var r = t.name, u = t.onFocus;
  return ge("input", {
    required: !0,
    name: r,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: u,
    css: JF,
    value: "",
    onChange: function() {
    }
  });
}, jF = UF;
function Zc(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function QF() {
  return Zc(/^iPhone/i);
}
function qg() {
  return Zc(/^Mac/i);
}
function qF() {
  return Zc(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  qg() && navigator.maxTouchPoints > 1;
}
function $F() {
  return QF() || qF();
}
function KF() {
  return qg() || $F();
}
var eR = function(t) {
  return t.label;
}, $g = function(t) {
  return t.label;
}, Kg = function(t) {
  return t.value;
}, tR = function(t) {
  return !!t.isDisabled;
}, nR = {
  clearIndicator: M2,
  container: E2,
  control: Z2,
  dropdownIndicator: L2,
  group: j2,
  groupHeading: q2,
  indicatorsContainer: O2,
  indicatorSeparator: V2,
  input: tF,
  loadingIndicator: H2,
  loadingMessage: C2,
  menu: p2,
  menuList: y2,
  menuPortal: w2,
  multiValue: oF,
  multiValueLabel: sF,
  multiValueRemove: aF,
  noOptionsMessage: I2,
  option: pF,
  placeholder: bF,
  singleValue: IF,
  valueContainer: R2
};
function rR(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = he({}, e);
  return Object.keys(t).forEach(function(u) {
    var o = u;
    e[o] ? r[o] = function(a, l) {
      return t[o](e[o](a, l), l);
    } : r[o] = t[o];
  }), r;
}
var iR = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
}, uR = 4, em = 4, oR = 38, sR = em * 2, aR = {
  baseUnit: em,
  controlHeight: oR,
  menuGutter: sR
}, Zu = {
  borderRadius: uR,
  colors: iR,
  spacing: aR
}, lR = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: np(),
  captureMenuScroll: !np(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: LF(),
  formatGroupLabel: eR,
  getOptionLabel: $g,
  getOptionValue: Kg,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: tR,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !i2(),
  noOptionsMessage: function() {
    return "No options";
  },
  openMenuOnFocus: !1,
  openMenuOnClick: !0,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function(t) {
    var r = t.count;
    return "".concat(r, " result").concat(r !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: !0,
  unstyled: !1
};
function pp(e, t, r, u) {
  var o = rm(e, t, r), a = im(e, t, r), l = nm(e, t), c = Vs(e, t);
  return {
    type: "option",
    data: t,
    isDisabled: o,
    isSelected: a,
    label: l,
    value: c,
    index: u
  };
}
function Es(e, t) {
  return e.options.map(function(r, u) {
    if ("options" in r) {
      var o = r.options.map(function(l, c) {
        return pp(e, l, t, c);
      }).filter(function(l) {
        return mp(e, l);
      });
      return o.length > 0 ? {
        type: "group",
        data: r,
        options: o,
        index: u
      } : void 0;
    }
    var a = pp(e, r, t, u);
    return mp(e, a) ? a : void 0;
  }).filter(s2);
}
function tm(e) {
  return e.reduce(function(t, r) {
    return r.type === "group" ? t.push.apply(t, Ji(r.options.map(function(u) {
      return u.data;
    }))) : t.push(r.data), t;
  }, []);
}
function gp(e, t) {
  return e.reduce(function(r, u) {
    return u.type === "group" ? r.push.apply(r, Ji(u.options.map(function(o) {
      return {
        data: o.data,
        id: "".concat(t, "-").concat(u.index, "-").concat(o.index)
      };
    }))) : r.push({
      data: u.data,
      id: "".concat(t, "-").concat(u.index)
    }), r;
  }, []);
}
function cR(e, t) {
  return tm(Es(e, t));
}
function mp(e, t) {
  var r = e.inputValue, u = r === void 0 ? "" : r, o = t.data, a = t.isSelected, l = t.label, c = t.value;
  return (!om(e) || !a) && um(e, {
    label: l,
    value: c,
    data: o
  }, u);
}
function fR(e, t) {
  var r = e.focusedValue, u = e.selectValue, o = u.indexOf(r);
  if (o > -1) {
    var a = t.indexOf(r);
    if (a > -1)
      return r;
    if (o < t.length)
      return t[o];
  }
  return null;
}
function dR(e, t) {
  var r = e.focusedOption;
  return r && t.indexOf(r) > -1 ? r : t[0];
}
var Wl = function(t, r) {
  var u, o = (u = t.find(function(a) {
    return a.data === r;
  })) === null || u === void 0 ? void 0 : u.id;
  return o || null;
}, nm = function(t, r) {
  return t.getOptionLabel(r);
}, Vs = function(t, r) {
  return t.getOptionValue(r);
};
function rm(e, t, r) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, r) : !1;
}
function im(e, t, r) {
  if (r.indexOf(t) > -1) return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, r);
  var u = Vs(e, t);
  return r.some(function(o) {
    return Vs(e, o) === u;
  });
}
function um(e, t, r) {
  return e.filterOption ? e.filterOption(t, r) : !0;
}
var om = function(t) {
  var r = t.hideSelectedOptions, u = t.isMulti;
  return r === void 0 ? u : r;
}, hR = 1, Yc = /* @__PURE__ */ function(e) {
  OE(r, e);
  var t = BE(r);
  function r(u) {
    var o;
    if (RE(this, r), o = t.call(this, u), o.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedOptionId: null,
      focusableOptionsWithIds: [],
      focusedValue: null,
      inputIsHidden: !1,
      isFocused: !1,
      selectValue: [],
      clearFocusValueOnUpdate: !1,
      prevWasFocused: !1,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0,
      instancePrefix: ""
    }, o.blockOptionHover = !1, o.isComposing = !1, o.commonProps = void 0, o.initialTouchX = 0, o.initialTouchY = 0, o.openAfterFocus = !1, o.scrollToFocusedOptionOnUpdate = !1, o.userIsDragging = void 0, o.isAppleDevice = KF(), o.controlRef = null, o.getControlRef = function(f) {
      o.controlRef = f;
    }, o.focusedOptionRef = null, o.getFocusedOptionRef = function(f) {
      o.focusedOptionRef = f;
    }, o.menuListRef = null, o.getMenuListRef = function(f) {
      o.menuListRef = f;
    }, o.inputRef = null, o.getInputRef = function(f) {
      o.inputRef = f;
    }, o.focus = o.focusInput, o.blur = o.blurInput, o.onChange = function(f, h) {
      var p = o.props, g = p.onChange, v = p.name;
      h.name = v, o.ariaOnChange(f, h), g(f, h);
    }, o.setValue = function(f, h, p) {
      var g = o.props, v = g.closeMenuOnSelect, b = g.isMulti, S = g.inputValue;
      o.onInputChange("", {
        action: "set-value",
        prevInputValue: S
      }), v && (o.setState({
        inputIsHiddenAfterUpdate: !b
      }), o.onMenuClose()), o.setState({
        clearFocusValueOnUpdate: !0
      }), o.onChange(f, {
        action: h,
        option: p
      });
    }, o.selectOption = function(f) {
      var h = o.props, p = h.blurInputOnSelect, g = h.isMulti, v = h.name, b = o.state.selectValue, S = g && o.isOptionSelected(f, b), A = o.isOptionDisabled(f, b);
      if (S) {
        var F = o.getOptionValue(f);
        o.setValue(b.filter(function(P) {
          return o.getOptionValue(P) !== F;
        }), "deselect-option", f);
      } else if (!A)
        g ? o.setValue([].concat(Ji(b), [f]), "select-option", f) : o.setValue(f, "select-option");
      else {
        o.ariaOnChange(f, {
          action: "select-option",
          option: f,
          name: v
        });
        return;
      }
      p && o.blurInput();
    }, o.removeValue = function(f) {
      var h = o.props.isMulti, p = o.state.selectValue, g = o.getOptionValue(f), v = p.filter(function(S) {
        return o.getOptionValue(S) !== g;
      }), b = Wu(h, v, v[0] || null);
      o.onChange(b, {
        action: "remove-value",
        removedValue: f
      }), o.focusInput();
    }, o.clearValue = function() {
      var f = o.state.selectValue;
      o.onChange(Wu(o.props.isMulti, [], null), {
        action: "clear",
        removedValues: f
      });
    }, o.popValue = function() {
      var f = o.props.isMulti, h = o.state.selectValue, p = h[h.length - 1], g = h.slice(0, h.length - 1), v = Wu(f, g, g[0] || null);
      p && o.onChange(v, {
        action: "pop-value",
        removedValue: p
      });
    }, o.getFocusedOptionId = function(f) {
      return Wl(o.state.focusableOptionsWithIds, f);
    }, o.getFocusableOptionsWithIds = function() {
      return gp(Es(o.props, o.state.selectValue), o.getElementId("option"));
    }, o.getValue = function() {
      return o.state.selectValue;
    }, o.cx = function() {
      for (var f = arguments.length, h = new Array(f), p = 0; p < f; p++)
        h[p] = arguments[p];
      return KE.apply(void 0, [o.props.classNamePrefix].concat(h));
    }, o.getOptionLabel = function(f) {
      return nm(o.props, f);
    }, o.getOptionValue = function(f) {
      return Vs(o.props, f);
    }, o.getStyles = function(f, h) {
      var p = o.props.unstyled, g = nR[f](h, p);
      g.boxSizing = "border-box";
      var v = o.props.styles[f];
      return v ? v(g, h) : g;
    }, o.getClassNames = function(f, h) {
      var p, g;
      return (p = (g = o.props.classNames)[f]) === null || p === void 0 ? void 0 : p.call(g, h);
    }, o.getElementId = function(f) {
      return "".concat(o.state.instancePrefix, "-").concat(f);
    }, o.getComponents = function() {
      return AF(o.props);
    }, o.buildCategorizedOptions = function() {
      return Es(o.props, o.state.selectValue);
    }, o.getCategorizedOptions = function() {
      return o.props.menuIsOpen ? o.buildCategorizedOptions() : [];
    }, o.buildFocusableOptions = function() {
      return tm(o.buildCategorizedOptions());
    }, o.getFocusableOptions = function() {
      return o.props.menuIsOpen ? o.buildFocusableOptions() : [];
    }, o.ariaOnChange = function(f, h) {
      o.setState({
        ariaSelection: he({
          value: f
        }, h)
      });
    }, o.onMenuMouseDown = function(f) {
      f.button === 0 && (f.stopPropagation(), f.preventDefault(), o.focusInput());
    }, o.onMenuMouseMove = function(f) {
      o.blockOptionHover = !1;
    }, o.onControlMouseDown = function(f) {
      if (!f.defaultPrevented) {
        var h = o.props.openMenuOnClick;
        o.state.isFocused ? o.props.menuIsOpen ? f.target.tagName !== "INPUT" && f.target.tagName !== "TEXTAREA" && o.onMenuClose() : h && o.openMenu("first") : (h && (o.openAfterFocus = !0), o.focusInput()), f.target.tagName !== "INPUT" && f.target.tagName !== "TEXTAREA" && f.preventDefault();
      }
    }, o.onDropdownIndicatorMouseDown = function(f) {
      if (!(f && f.type === "mousedown" && f.button !== 0) && !o.props.isDisabled) {
        var h = o.props, p = h.isMulti, g = h.menuIsOpen;
        o.focusInput(), g ? (o.setState({
          inputIsHiddenAfterUpdate: !p
        }), o.onMenuClose()) : o.openMenu("first"), f.preventDefault();
      }
    }, o.onClearIndicatorMouseDown = function(f) {
      f && f.type === "mousedown" && f.button !== 0 || (o.clearValue(), f.preventDefault(), o.openAfterFocus = !1, f.type === "touchend" ? o.focusInput() : setTimeout(function() {
        return o.focusInput();
      }));
    }, o.onScroll = function(f) {
      typeof o.props.closeMenuOnScroll == "boolean" ? f.target instanceof HTMLElement && Js(f.target) && o.props.onMenuClose() : typeof o.props.closeMenuOnScroll == "function" && o.props.closeMenuOnScroll(f) && o.props.onMenuClose();
    }, o.onCompositionStart = function() {
      o.isComposing = !0;
    }, o.onCompositionEnd = function() {
      o.isComposing = !1;
    }, o.onTouchStart = function(f) {
      var h = f.touches, p = h && h.item(0);
      p && (o.initialTouchX = p.clientX, o.initialTouchY = p.clientY, o.userIsDragging = !1);
    }, o.onTouchMove = function(f) {
      var h = f.touches, p = h && h.item(0);
      if (p) {
        var g = Math.abs(p.clientX - o.initialTouchX), v = Math.abs(p.clientY - o.initialTouchY), b = 5;
        o.userIsDragging = g > b || v > b;
      }
    }, o.onTouchEnd = function(f) {
      o.userIsDragging || (o.controlRef && !o.controlRef.contains(f.target) && o.menuListRef && !o.menuListRef.contains(f.target) && o.blurInput(), o.initialTouchX = 0, o.initialTouchY = 0);
    }, o.onControlTouchEnd = function(f) {
      o.userIsDragging || o.onControlMouseDown(f);
    }, o.onClearIndicatorTouchEnd = function(f) {
      o.userIsDragging || o.onClearIndicatorMouseDown(f);
    }, o.onDropdownIndicatorTouchEnd = function(f) {
      o.userIsDragging || o.onDropdownIndicatorMouseDown(f);
    }, o.handleInputChange = function(f) {
      var h = o.props.inputValue, p = f.currentTarget.value;
      o.setState({
        inputIsHiddenAfterUpdate: !1
      }), o.onInputChange(p, {
        action: "input-change",
        prevInputValue: h
      }), o.props.menuIsOpen || o.onMenuOpen();
    }, o.onInputFocus = function(f) {
      o.props.onFocus && o.props.onFocus(f), o.setState({
        inputIsHiddenAfterUpdate: !1,
        isFocused: !0
      }), (o.openAfterFocus || o.props.openMenuOnFocus) && o.openMenu("first"), o.openAfterFocus = !1;
    }, o.onInputBlur = function(f) {
      var h = o.props.inputValue;
      if (o.menuListRef && o.menuListRef.contains(document.activeElement)) {
        o.inputRef.focus();
        return;
      }
      o.props.onBlur && o.props.onBlur(f), o.onInputChange("", {
        action: "input-blur",
        prevInputValue: h
      }), o.onMenuClose(), o.setState({
        focusedValue: null,
        isFocused: !1
      });
    }, o.onOptionHover = function(f) {
      if (!(o.blockOptionHover || o.state.focusedOption === f)) {
        var h = o.getFocusableOptions(), p = h.indexOf(f);
        o.setState({
          focusedOption: f,
          focusedOptionId: p > -1 ? o.getFocusedOptionId(f) : null
        });
      }
    }, o.shouldHideSelectedOptions = function() {
      return om(o.props);
    }, o.onValueInputFocus = function(f) {
      f.preventDefault(), f.stopPropagation(), o.focus();
    }, o.onKeyDown = function(f) {
      var h = o.props, p = h.isMulti, g = h.backspaceRemovesValue, v = h.escapeClearsValue, b = h.inputValue, S = h.isClearable, A = h.isDisabled, F = h.menuIsOpen, P = h.onKeyDown, W = h.tabSelectsValue, k = h.openMenuOnFocus, N = o.state, U = N.focusedOption, G = N.focusedValue, j = N.selectValue;
      if (!A && !(typeof P == "function" && (P(f), f.defaultPrevented))) {
        switch (o.blockOptionHover = !0, f.key) {
          case "ArrowLeft":
            if (!p || b) return;
            o.focusValue("previous");
            break;
          case "ArrowRight":
            if (!p || b) return;
            o.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (b) return;
            if (G)
              o.removeValue(G);
            else {
              if (!g) return;
              p ? o.popValue() : S && o.clearValue();
            }
            break;
          case "Tab":
            if (o.isComposing || f.shiftKey || !F || !W || !U || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            k && o.isOptionSelected(U, j))
              return;
            o.selectOption(U);
            break;
          case "Enter":
            if (f.keyCode === 229)
              break;
            if (F) {
              if (!U || o.isComposing) return;
              o.selectOption(U);
              break;
            }
            return;
          case "Escape":
            F ? (o.setState({
              inputIsHiddenAfterUpdate: !1
            }), o.onInputChange("", {
              action: "menu-close",
              prevInputValue: b
            }), o.onMenuClose()) : S && v && o.clearValue();
            break;
          case " ":
            if (b)
              return;
            if (!F) {
              o.openMenu("first");
              break;
            }
            if (!U) return;
            o.selectOption(U);
            break;
          case "ArrowUp":
            F ? o.focusOption("up") : o.openMenu("last");
            break;
          case "ArrowDown":
            F ? o.focusOption("down") : o.openMenu("first");
            break;
          case "PageUp":
            if (!F) return;
            o.focusOption("pageup");
            break;
          case "PageDown":
            if (!F) return;
            o.focusOption("pagedown");
            break;
          case "Home":
            if (!F) return;
            o.focusOption("first");
            break;
          case "End":
            if (!F) return;
            o.focusOption("last");
            break;
          default:
            return;
        }
        f.preventDefault();
      }
    }, o.state.instancePrefix = "react-select-" + (o.props.instanceId || ++hR), o.state.selectValue = Ms(u.value), u.menuIsOpen && o.state.selectValue.length) {
      var a = o.getFocusableOptionsWithIds(), l = o.buildFocusableOptions(), c = l.indexOf(o.state.selectValue[0]);
      o.state.focusableOptionsWithIds = a, o.state.focusedOption = l[c], o.state.focusedOptionId = Wl(a, l[c]);
    }
    return o;
  }
  return PE(r, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && tp(this.menuListRef, this.focusedOptionRef);
    }
  }, {
    key: "componentDidUpdate",
    value: function(o) {
      var a = this.props, l = a.isDisabled, c = a.menuIsOpen, f = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (f && !l && o.isDisabled || // ensure focus is on the Input when the menu opens
      f && c && !o.menuIsOpen) && this.focusInput(), f && l && !o.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !f && !l && o.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (tp(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      }), this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function(o, a) {
      this.props.onInputChange(o, a);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function() {
      this.inputRef && this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function() {
      this.inputRef && this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function(o) {
      var a = this, l = this.state, c = l.selectValue, f = l.isFocused, h = this.buildFocusableOptions(), p = o === "first" ? 0 : h.length - 1;
      if (!this.props.isMulti) {
        var g = h.indexOf(c[0]);
        g > -1 && (p = g);
      }
      this.scrollToFocusedOptionOnUpdate = !(f && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: h[p],
        focusedOptionId: this.getFocusedOptionId(h[p])
      }, function() {
        return a.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(o) {
      var a = this.state, l = a.selectValue, c = a.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var f = l.indexOf(c);
        c || (f = -1);
        var h = l.length - 1, p = -1;
        if (l.length) {
          switch (o) {
            case "previous":
              f === 0 ? p = 0 : f === -1 ? p = h : p = f - 1;
              break;
            case "next":
              f > -1 && f < h && (p = f + 1);
              break;
          }
          this.setState({
            inputIsHidden: p !== -1,
            focusedValue: l[p]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", a = this.props.pageSize, l = this.state.focusedOption, c = this.getFocusableOptions();
      if (c.length) {
        var f = 0, h = c.indexOf(l);
        l || (h = -1), o === "up" ? f = h > 0 ? h - 1 : c.length - 1 : o === "down" ? f = (h + 1) % c.length : o === "pageup" ? (f = h - a, f < 0 && (f = 0)) : o === "pagedown" ? (f = h + a, f > c.length - 1 && (f = c.length - 1)) : o === "last" && (f = c.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
          focusedOption: c[f],
          focusedValue: null,
          focusedOptionId: this.getFocusedOptionId(c[f])
        });
      }
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      function() {
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(Zu) : he(he({}, Zu), this.props.theme) : Zu;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var o = this.clearValue, a = this.cx, l = this.getStyles, c = this.getClassNames, f = this.getValue, h = this.selectOption, p = this.setValue, g = this.props, v = g.isMulti, b = g.isRtl, S = g.options, A = this.hasValue();
      return {
        clearValue: o,
        cx: a,
        getStyles: l,
        getClassNames: c,
        getValue: f,
        hasValue: A,
        isMulti: v,
        isRtl: b,
        options: S,
        selectOption: h,
        selectProps: g,
        setValue: p,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function() {
      var o = this.state.selectValue;
      return o.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function() {
      var o = this.props, a = o.isClearable, l = o.isMulti;
      return a === void 0 ? l : a;
    }
  }, {
    key: "isOptionDisabled",
    value: function(o, a) {
      return rm(this.props, o, a);
    }
  }, {
    key: "isOptionSelected",
    value: function(o, a) {
      return im(this.props, o, a);
    }
  }, {
    key: "filterOption",
    value: function(o, a) {
      return um(this.props, o, a);
    }
  }, {
    key: "formatOptionLabel",
    value: function(o, a) {
      if (typeof this.props.formatOptionLabel == "function") {
        var l = this.props.inputValue, c = this.state.selectValue;
        return this.props.formatOptionLabel(o, {
          context: a,
          inputValue: l,
          selectValue: c
        });
      } else
        return this.getOptionLabel(o);
    }
  }, {
    key: "formatGroupLabel",
    value: function(o) {
      return this.props.formatGroupLabel(o);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1));
      }
    )
  }, {
    key: "stopListeningComposition",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      function() {
        document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1));
      }
    )
  }, {
    key: "stopListeningToTouch",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      function() {
        var o = this.props, a = o.isDisabled, l = o.isSearchable, c = o.inputId, f = o.inputValue, h = o.tabIndex, p = o.form, g = o.menuIsOpen, v = o.required, b = this.getComponents(), S = b.Input, A = this.state, F = A.inputIsHidden, P = A.ariaSelection, W = this.commonProps, k = c || this.getElementId("input"), N = he(he(he({
          "aria-autocomplete": "list",
          "aria-expanded": g,
          "aria-haspopup": !0,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": v,
          role: "combobox",
          "aria-activedescendant": this.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
        }, g && {
          "aria-controls": this.getElementId("listbox")
        }), !l && {
          "aria-readonly": !0
        }), this.hasValue() ? (P == null ? void 0 : P.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return l ? /* @__PURE__ */ Oe.createElement(S, be({}, W, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: k,
          innerRef: this.getInputRef,
          isDisabled: a,
          isHidden: F,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: h,
          form: p,
          type: "text",
          value: f
        }, N)) : /* @__PURE__ */ Oe.createElement(MF, be({
          id: k,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: Ds,
          onFocus: this.onInputFocus,
          disabled: a,
          tabIndex: h,
          inputMode: "none",
          form: p,
          value: ""
        }, N));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var o = this, a = this.getComponents(), l = a.MultiValue, c = a.MultiValueContainer, f = a.MultiValueLabel, h = a.MultiValueRemove, p = a.SingleValue, g = a.Placeholder, v = this.commonProps, b = this.props, S = b.controlShouldRenderValue, A = b.isDisabled, F = b.isMulti, P = b.inputValue, W = b.placeholder, k = this.state, N = k.selectValue, U = k.focusedValue, G = k.isFocused;
      if (!this.hasValue() || !S)
        return P ? null : /* @__PURE__ */ Oe.createElement(g, be({}, v, {
          key: "placeholder",
          isDisabled: A,
          isFocused: G,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), W);
      if (F)
        return N.map(function(M, Y) {
          var K = M === U, Q = "".concat(o.getOptionLabel(M), "-").concat(o.getOptionValue(M));
          return /* @__PURE__ */ Oe.createElement(l, be({}, v, {
            components: {
              Container: c,
              Label: f,
              Remove: h
            },
            isFocused: K,
            isDisabled: A,
            key: Q,
            index: Y,
            removeProps: {
              onClick: function() {
                return o.removeValue(M);
              },
              onTouchEnd: function() {
                return o.removeValue(M);
              },
              onMouseDown: function(ee) {
                ee.preventDefault();
              }
            },
            data: M
          }), o.formatOptionLabel(M, "value"));
        });
      if (P)
        return null;
      var j = N[0];
      return /* @__PURE__ */ Oe.createElement(p, be({}, v, {
        data: j,
        isDisabled: A
      }), this.formatOptionLabel(j, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var o = this.getComponents(), a = o.ClearIndicator, l = this.commonProps, c = this.props, f = c.isDisabled, h = c.isLoading, p = this.state.isFocused;
      if (!this.isClearable() || !a || f || !this.hasValue() || h)
        return null;
      var g = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ Oe.createElement(a, be({}, l, {
        innerProps: g,
        isFocused: p
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var o = this.getComponents(), a = o.LoadingIndicator, l = this.commonProps, c = this.props, f = c.isDisabled, h = c.isLoading, p = this.state.isFocused;
      if (!a || !h) return null;
      var g = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ Oe.createElement(a, be({}, l, {
        innerProps: g,
        isDisabled: f,
        isFocused: p
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var o = this.getComponents(), a = o.DropdownIndicator, l = o.IndicatorSeparator;
      if (!a || !l) return null;
      var c = this.commonProps, f = this.props.isDisabled, h = this.state.isFocused;
      return /* @__PURE__ */ Oe.createElement(l, be({}, c, {
        isDisabled: f,
        isFocused: h
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var o = this.getComponents(), a = o.DropdownIndicator;
      if (!a) return null;
      var l = this.commonProps, c = this.props.isDisabled, f = this.state.isFocused, h = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ Oe.createElement(a, be({}, l, {
        innerProps: h,
        isDisabled: c,
        isFocused: f
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var o = this, a = this.getComponents(), l = a.Group, c = a.GroupHeading, f = a.Menu, h = a.MenuList, p = a.MenuPortal, g = a.LoadingMessage, v = a.NoOptionsMessage, b = a.Option, S = this.commonProps, A = this.state.focusedOption, F = this.props, P = F.captureMenuScroll, W = F.inputValue, k = F.isLoading, N = F.loadingMessage, U = F.minMenuHeight, G = F.maxMenuHeight, j = F.menuIsOpen, M = F.menuPlacement, Y = F.menuPosition, K = F.menuPortalTarget, Q = F.menuShouldBlockScroll, z = F.menuShouldScrollIntoView, ee = F.noOptionsMessage, de = F.onMenuScrollToTop, ie = F.onMenuScrollToBottom;
      if (!j) return null;
      var xe = function(E, Ye) {
        var ce = E.type, Se = E.data, wt = E.isDisabled, De = E.isSelected, gt = E.label, Vt = E.value, Gt = A === Se, kt = wt ? void 0 : function() {
          return o.onOptionHover(Se);
        }, wn = wt ? void 0 : function() {
          return o.selectOption(Se);
        }, It = "".concat(o.getElementId("option"), "-").concat(Ye), te = {
          id: It,
          onClick: wn,
          onMouseMove: kt,
          onMouseOver: kt,
          tabIndex: -1,
          role: "option",
          "aria-selected": o.isAppleDevice ? void 0 : De
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ Oe.createElement(b, be({}, S, {
          innerProps: te,
          data: Se,
          isDisabled: wt,
          isSelected: De,
          key: It,
          label: gt,
          type: ce,
          value: Vt,
          isFocused: Gt,
          innerRef: Gt ? o.getFocusedOptionRef : void 0
        }), o.formatOptionLabel(E.data, "menu"));
      }, we;
      if (this.hasOptions())
        we = this.getCategorizedOptions().map(function(Ge) {
          if (Ge.type === "group") {
            var E = Ge.data, Ye = Ge.options, ce = Ge.index, Se = "".concat(o.getElementId("group"), "-").concat(ce), wt = "".concat(Se, "-heading");
            return /* @__PURE__ */ Oe.createElement(l, be({}, S, {
              key: Se,
              data: E,
              options: Ye,
              Heading: c,
              headingProps: {
                id: wt,
                data: Ge.data
              },
              label: o.formatGroupLabel(Ge.data)
            }), Ge.options.map(function(De) {
              return xe(De, "".concat(ce, "-").concat(De.index));
            }));
          } else if (Ge.type === "option")
            return xe(Ge, "".concat(Ge.index));
        });
      else if (k) {
        var Fe = N({
          inputValue: W
        });
        if (Fe === null) return null;
        we = /* @__PURE__ */ Oe.createElement(g, S, Fe);
      } else {
        var Je = ee({
          inputValue: W
        });
        if (Je === null) return null;
        we = /* @__PURE__ */ Oe.createElement(v, S, Je);
      }
      var w = {
        minMenuHeight: U,
        maxMenuHeight: G,
        menuPlacement: M,
        menuPosition: Y,
        menuShouldScrollIntoView: z
      }, Ie = /* @__PURE__ */ Oe.createElement(g2, be({}, S, w), function(Ge) {
        var E = Ge.ref, Ye = Ge.placerProps, ce = Ye.placement, Se = Ye.maxHeight;
        return /* @__PURE__ */ Oe.createElement(f, be({}, S, w, {
          innerRef: E,
          innerProps: {
            onMouseDown: o.onMenuMouseDown,
            onMouseMove: o.onMenuMouseMove
          },
          isLoading: k,
          placement: ce
        }), /* @__PURE__ */ Oe.createElement(ZF, {
          captureEnabled: P,
          onTopArrive: de,
          onBottomArrive: ie,
          lockEnabled: Q
        }, function(wt) {
          return /* @__PURE__ */ Oe.createElement(h, be({}, S, {
            innerRef: function(gt) {
              o.getMenuListRef(gt), wt(gt);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": S.isMulti,
              id: o.getElementId("listbox")
            },
            isLoading: k,
            maxHeight: Se,
            focusedOption: A
          }), we);
        }));
      });
      return K || Y === "fixed" ? /* @__PURE__ */ Oe.createElement(p, be({}, S, {
        appendTo: K,
        controlElement: this.controlRef,
        menuPlacement: M,
        menuPosition: Y
      }), Ie) : Ie;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var o = this, a = this.props, l = a.delimiter, c = a.isDisabled, f = a.isMulti, h = a.name, p = a.required, g = this.state.selectValue;
      if (p && !this.hasValue() && !c)
        return /* @__PURE__ */ Oe.createElement(jF, {
          name: h,
          onFocus: this.onValueInputFocus
        });
      if (!(!h || c))
        if (f)
          if (l) {
            var v = g.map(function(A) {
              return o.getOptionValue(A);
            }).join(l);
            return /* @__PURE__ */ Oe.createElement("input", {
              name: h,
              type: "hidden",
              value: v
            });
          } else {
            var b = g.length > 0 ? g.map(function(A, F) {
              return /* @__PURE__ */ Oe.createElement("input", {
                key: "i-".concat(F),
                name: h,
                type: "hidden",
                value: o.getOptionValue(A)
              });
            }) : /* @__PURE__ */ Oe.createElement("input", {
              name: h,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ Oe.createElement("div", null, b);
          }
        else {
          var S = g[0] ? this.getOptionValue(g[0]) : "";
          return /* @__PURE__ */ Oe.createElement("input", {
            name: h,
            type: "hidden",
            value: S
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var o = this.commonProps, a = this.state, l = a.ariaSelection, c = a.focusedOption, f = a.focusedValue, h = a.isFocused, p = a.selectValue, g = this.getFocusableOptions();
      return /* @__PURE__ */ Oe.createElement(TF, be({}, o, {
        id: this.getElementId("live-region"),
        ariaSelection: l,
        focusedOption: c,
        focusedValue: f,
        isFocused: h,
        selectValue: p,
        focusableOptions: g,
        isAppleDevice: this.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function() {
      var o = this.getComponents(), a = o.Control, l = o.IndicatorsContainer, c = o.SelectContainer, f = o.ValueContainer, h = this.props, p = h.className, g = h.id, v = h.isDisabled, b = h.menuIsOpen, S = this.state.isFocused, A = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ Oe.createElement(c, be({}, A, {
        className: p,
        innerProps: {
          id: g,
          onKeyDown: this.onKeyDown
        },
        isDisabled: v,
        isFocused: S
      }), this.renderLiveRegion(), /* @__PURE__ */ Oe.createElement(a, be({}, A, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: v,
        isFocused: S,
        menuIsOpen: b
      }), /* @__PURE__ */ Oe.createElement(f, be({}, A, {
        isDisabled: v
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ Oe.createElement(l, be({}, A, {
        isDisabled: v
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(o, a) {
      var l = a.prevProps, c = a.clearFocusValueOnUpdate, f = a.inputIsHiddenAfterUpdate, h = a.ariaSelection, p = a.isFocused, g = a.prevWasFocused, v = a.instancePrefix, b = o.options, S = o.value, A = o.menuIsOpen, F = o.inputValue, P = o.isMulti, W = Ms(S), k = {};
      if (l && (S !== l.value || b !== l.options || A !== l.menuIsOpen || F !== l.inputValue)) {
        var N = A ? cR(o, W) : [], U = A ? gp(Es(o, W), "".concat(v, "-option")) : [], G = c ? fR(a, W) : null, j = dR(a, N), M = Wl(U, j);
        k = {
          selectValue: W,
          focusedOption: j,
          focusedOptionId: M,
          focusableOptionsWithIds: U,
          focusedValue: G,
          clearFocusValueOnUpdate: !1
        };
      }
      var Y = f != null && o !== l ? {
        inputIsHidden: f,
        inputIsHiddenAfterUpdate: void 0
      } : {}, K = h, Q = p && g;
      return p && !Q && (K = {
        value: Wu(P, W, W[0] || null),
        options: W,
        action: "initial-input-focus"
      }, Q = !g), (h == null ? void 0 : h.action) === "initial-input-focus" && (K = null), he(he(he({}, k), Y), {}, {
        prevProps: o,
        ariaSelection: K,
        prevWasFocused: Q
      });
    }
  }]), r;
}(Fp);
Yc.defaultProps = lR;
var pR = /* @__PURE__ */ Rp(function(e, t) {
  var r = Og(e);
  return /* @__PURE__ */ Oe.createElement(Yc, be({
    ref: t
  }, r));
}), Us = pR;
const sm = eo(void 0), cu = () => {
  const e = su(sm);
  if (!e)
    throw new Error("Must be used inside FormFieldContext.Provider");
  return e;
}, gR = (e, t) => {
  var o;
  const r = Yr(), u = Ii({
    ...t == null ? void 0 : t.useQueryOpts,
    queryKey: ["accounts", e],
    queryFn: () => r.getAccounts(e)
  });
  return {
    ...u,
    accounts: ((o = u.data) == null ? void 0 : o.data) || []
  };
}, mR = (e) => /* @__PURE__ */ re(uo.Option, { ...e, children: e.data.name });
function bR({ app: e }) {
  const t = Yr(), r = cu(), { id: u, prop: o, value: a, onChange: l } = r, { getProps: c, select: f, theme: h } = dn(), p = {
    color: h.colors.neutral60,
    gridArea: "control"
  }, g = {
    backgroundColor: h.colors.primary,
    borderRadius: h.borderRadius,
    border: "solid 1px",
    borderColor: h.colors.primary25,
    color: h.colors.primary25,
    padding: "0.25rem 0.5rem",
    gridArea: "control"
  }, v = {
    components: {
      Option: mR
    },
    styles: {
      control: (N) => ({
        ...N,
        gridArea: "control",
        boxShadow: h.boxShadow.input
      })
    }
  }, b = f.getProps("controlAppSelect", v), S = void 0, {
    isLoading: A,
    // TODO error
    accounts: F,
    refetch: P
  } = gR(
    {
      app: e.name_slug,
      oauth_app_id: S
    },
    {
      useQueryOpts: {
        enabled: !!e,
        suspense: !!e
      }
    }
  ), W = async () => {
    t.connectAccount({
      app: o.app,
      oauthAppId: S,
      onSuccess: async (N) => {
        await P(), l({
          authProvisionId: N.id
        });
      },
      onError: () => {
      }
    });
  }, k = ln(() => {
    let N = a;
    if (N != null) {
      for (const U of F)
        if (N.authProvisionId === U.id) {
          N = U;
          break;
        }
    }
    return N;
  }, [F, a]);
  return /* @__PURE__ */ re(
    "div",
    {
      ...c("controlApp", p, {
        app: e,
        ...r
      }),
      children: A ? `Loading ${e.name} accounts...` : F.length ? /* @__PURE__ */ re(
        Us,
        {
          instanceId: u,
          value: k,
          options: [
            ...F,
            {
              id: "_new",
              name: `Connect new ${e.name} account...`
            }
          ],
          ...b,
          required: !0,
          placeholder: `Select ${e.name} account...`,
          isLoading: A,
          isClearable: !0,
          isSearchable: !0,
          getOptionLabel: (N) => N.name,
          getOptionValue: (N) => N.id,
          onChange: (N) => {
            N ? N.id === "_new" ? W() : l({
              authProvisionId: N.id
            }) : l(void 0);
          }
        }
      ) : /* @__PURE__ */ Mn(
        "button",
        {
          type: "button",
          ...c("connectButton", g, {
            app: e,
            ...r
          }),
          onClick: () => W(),
          children: [
            "Connect ",
            e.name
          ]
        }
      )
    }
  );
}
const yR = () => {
  const e = cu(), { id: t, onChange: r, prop: u, value: o } = e, { getProps: a, theme: l } = dn(), c = {
    color: l.colors.neutral60,
    display: "block",
    border: "1px solid",
    borderColor: l.colors.neutral20,
    padding: 6,
    width: "100%",
    borderRadius: l.borderRadius,
    gridArea: "control",
    boxShadow: l.boxShadow.input
  };
  let f = "off", h = "text", p = (g) => g;
  switch (u.type) {
    case "string":
      break;
    case "integer":
      h = "number", p = (g) => g ? parseInt(g) : void 0;
      break;
    default:
      throw new Error("unexpected prop.type for ControlInput: " + u.type);
  }
  return "secret" in u && u.secret && (h = "password", f = "new-password"), /* @__PURE__ */ re(
    "input",
    {
      id: t,
      type: h,
      name: u.name,
      value: o ?? "",
      onChange: (g) => r(p(g.target.value)),
      ...a("controlInput", c, e),
      min: "min" in u ? u.min : void 0,
      max: "max" in u ? u.max : void 0,
      autoComplete: f,
      "data-lpignore": "true",
      "data-1p-ignore": "true",
      required: !u.optional
    }
  );
}, vR = to(yR);
var IR = ["allowCreateWhileLoading", "createOptionPosition", "formatCreateLabel", "isValidNewOption", "getNewOptionData", "onCreateOption", "options", "onChange"], bp = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 ? arguments[1] : void 0, u = arguments.length > 2 ? arguments[2] : void 0, o = String(t).toLowerCase(), a = String(u.getOptionValue(r)).toLowerCase(), l = String(u.getOptionLabel(r)).toLowerCase();
  return a === o || l === o;
}, Xl = {
  formatCreateLabel: function(t) {
    return 'Create "'.concat(t, '"');
  },
  isValidNewOption: function(t, r, u, o) {
    return !(!t || r.some(function(a) {
      return bp(t, a, o);
    }) || u.some(function(a) {
      return bp(t, a, o);
    }));
  },
  getNewOptionData: function(t, r) {
    return {
      label: r,
      value: t,
      __isNew__: !0
    };
  }
};
function CR(e) {
  var t = e.allowCreateWhileLoading, r = t === void 0 ? !1 : t, u = e.createOptionPosition, o = u === void 0 ? "last" : u, a = e.formatCreateLabel, l = a === void 0 ? Xl.formatCreateLabel : a, c = e.isValidNewOption, f = c === void 0 ? Xl.isValidNewOption : c, h = e.getNewOptionData, p = h === void 0 ? Xl.getNewOptionData : h, g = e.onCreateOption, v = e.options, b = v === void 0 ? [] : v, S = e.onChange, A = or(e, IR), F = A.getOptionValue, P = F === void 0 ? Kg : F, W = A.getOptionLabel, k = W === void 0 ? $g : W, N = A.inputValue, U = A.isLoading, G = A.isMulti, j = A.value, M = A.name, Y = ln(function() {
    return f(N, Ms(j), b, {
      getOptionValue: P,
      getOptionLabel: k
    }) ? p(N, l(N)) : void 0;
  }, [l, p, k, P, N, f, b, j]), K = ln(function() {
    return (r || !U) && Y ? o === "first" ? [Y].concat(Ji(b)) : [].concat(Ji(b), [Y]) : b;
  }, [r, o, U, Y, b]), Q = Mt(function(z, ee) {
    if (ee.action !== "select-option")
      return S(z, ee);
    var de = Array.isArray(z) ? z : [z];
    if (de[de.length - 1] === Y) {
      if (g) g(N);
      else {
        var ie = p(N, N), xe = {
          action: "create-option",
          name: M,
          option: ie
        };
        S(Wu(G, [].concat(Ji(Ms(j)), [ie]), ie), xe);
      }
      return;
    }
    S(z, ee);
  }, [p, N, G, M, Y, g, S, j]);
  return he(he({}, A), {}, {
    options: K,
    onChange: Q
  });
}
var xR = /* @__PURE__ */ Rp(function(e, t) {
  var r = Og(e), u = CR(r);
  return /* @__PURE__ */ Oe.createElement(Yc, be({
    ref: t
  }, u));
}), AR = xR;
const am = (e) => {
  const { onChange: t } = e, { getProps: r, theme: u } = dn(), o = {
    backgroundColor: u.colors.primary,
    borderRadius: u.borderRadius,
    border: "solid 1px",
    borderColor: u.colors.primary25,
    color: u.colors.primary25,
    padding: "0.5rem",
    fontSize: "0.8125rem",
    fontWeight: "450",
    gridArea: "control",
    cursor: "pointer",
    width: "100%"
  };
  return /* @__PURE__ */ re(
    "button",
    {
      onClick: t,
      type: "button",
      ...r("loadMoreButton", o, e),
      children: "Load More"
    }
  );
};
function wR({
  isCreatable: e,
  options: t,
  selectProps: r,
  showLoadMoreButton: u,
  onLoadMore: o
}) {
  const a = cu(), { id: l, prop: c, value: f, onChange: h } = a, { select: p, theme: g } = dn(), [v, b] = $e(t), [S, A] = $e(f);
  an(() => {
    b(t);
  }, [t]), an(() => {
    A(f);
  }, [f]);
  const F = {
    styles: {
      container: (M) => ({
        ...M,
        gridArea: "control",
        boxShadow: g.boxShadow.input
      })
    }
  }, P = ln(() => {
    let M = S;
    if (M != null)
      if (Array.isArray(M)) {
        if (typeof M[0] != "object") {
          const Y = [];
          for (const K of M) {
            let Q = {
              label: K,
              value: K
            };
            for (const z of v)
              if (z.value === K) {
                Q = z;
                break;
              }
            Y.push(Q);
          }
          M = Y;
        }
      } else if (typeof M != "object")
        if ((v == null ? void 0 : v[0]) && typeof v[0] == "object") {
          for (const K of v)
            if (K.value === S) {
              M = K;
              break;
            }
        } else
          M = {
            label: S,
            value: S
          };
      else M.__lv && (M = M.__lv);
    return M;
  }, [S, v]), W = ln(() => function(Y) {
    return /* @__PURE__ */ Mn(uo.MenuList, { ...Y, children: [
      Y.children,
      /* @__PURE__ */ re("div", { className: "pt-4", children: o && /* @__PURE__ */ re(am, { onChange: o }) })
    ] });
  }, [o]), k = p.getProps("controlSelect", F);
  u && (k.components = {
    ...k.components,
    MenuList: W
  });
  const N = (M) => {
    const Y = (z) => typeof z == "object" ? z : {
      label: z,
      value: z
    }, K = Y(M);
    let Q = K;
    b((z) => K ? [K, ...z] : [...z]), c.type.endsWith("[]") && (Array.isArray(S) ? Q = [...S.map(Y), K] : Q = [K]), A(Q), U(Q);
  }, U = (M) => {
    if (M)
      if (Array.isArray(M))
        typeof M[0] == "object" && "value" in M[0] ? h({
          __lv: M
        }) : h(M);
      else if (typeof M == "object" && "value" in M)
        h({
          __lv: M
        });
      else
        throw new Error("unhandled option type");
    else
      h(void 0);
  }, G = {
    onCreateOption: c.remoteOptions ? N : void 0
  };
  return /* @__PURE__ */ re(
    e ? AR : Us,
    {
      inputId: l,
      instanceId: l,
      options: v,
      value: P,
      isMulti: c.type.endsWith("[]"),
      isClearable: !0,
      required: !c.optional,
      ...k,
      ...r,
      ...G,
      onChange: U
    }
  );
}
const SR = to(
  wR
);
function ER(e) {
  const { field: t, markdown: r } = e, { prop: u } = t, { getClassNames: o, getStyles: a, theme: l } = dn(), c = {
    color: l.colors.neutral50,
    fontWeight: 400,
    fontSize: "0.75rem",
    gridArea: "description",
    textWrap: "balance",
    lineHeight: "1.5"
  };
  return u.type === "app" ? /* @__PURE__ */ re(
    "p",
    {
      className: o("description", e),
      style: a("description", c, e),
      children: "Credentials are encrypted."
    }
  ) : u.description ? /* @__PURE__ */ Mn(
    "div",
    {
      className: o("description", e),
      style: a("description", c, e),
      children: [
        " ",
        /* @__PURE__ */ re(
          hg,
          {
            components: {
              a: ({ ...f }) => /* @__PURE__ */ re("a", { ...f, target: "_blank", rel: "noopener noreferrer" })
            },
            children: r
          }
        )
      ]
    }
  ) : null;
}
function FR(e) {
  const { field: t } = e, { errors: r = {}, prop: u = {}, enableDebugging: o } = t;
  if (!o || !r[u.name])
    return null;
  const a = r[u.name].map(
    (f) => ({
      type: "alert",
      alertType: "error",
      content: f
    })
  );
  return /* @__PURE__ */ re("div", { className: "pd-errors", style: {
    display: "grid",
    gridTemplateColumns: "max-content"
  }, children: /* @__PURE__ */ re(() => /* @__PURE__ */ re(Yu, { children: a.map((f, h) => /* @__PURE__ */ re(ec, { prop: f }, h)) }), {}) });
}
function RR(e) {
  const { text: t, field: r } = e, { id: u } = r, { getProps: o, theme: a } = dn(), l = {
    color: a.colors.neutral90,
    fontWeight: 450,
    gridArea: "label",
    lineHeight: "1.5"
  };
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    /* @__PURE__ */ re("label", { htmlFor: u, ...o("label", l, e), children: t })
  );
}
const PR = (e) => {
  const { prop: t, enabled: r, onClick: u } = e, { getProps: o, theme: a } = dn(), l = {
    color: a.colors.neutral60,
    display: "inline-flex",
    alignItems: "center",
    padding: `${a.spacing.baseUnit}px ${a.spacing.baseUnit * 1.5}px ${a.spacing.baseUnit}px ${a.spacing.baseUnit * 2.5}px`,
    border: `1px solid ${a.colors.neutral30}`,
    borderRadius: a.borderRadius,
    cursor: "pointer",
    fontSize: "0.8125rem",
    fontWeight: 450,
    gap: a.spacing.baseUnit * 2,
    textWrap: "nowrap"
  };
  return /* @__PURE__ */ Mn(
    "button",
    {
      onClick: u,
      type: "button",
      ...o("optionalFieldButton", l, e),
      children: [
        /* @__PURE__ */ re("span", { children: r ? "-" : "+" }),
        /* @__PURE__ */ re(
          "span",
          {
            style: {
              marginRight: 8
            },
            children: t.label || t.name
          }
        )
      ]
    }
  );
}, OR = Zu, Jc = {
  borderRadius: 4,
  colors: {
    primary: "#2684FF",
    primary75: "#4C9AFF",
    primary50: "#B2D4FF",
    primary25: "#DEEBFF",
    danger: "#DE350B",
    dangerLight: "#FFBDAD",
    neutral0: "hsl(0, 0%, 100%)",
    neutral5: "hsl(0, 0%, 95%)",
    neutral10: "hsl(0, 0%, 90%)",
    neutral20: "hsl(0, 0%, 80%)",
    neutral30: "hsl(0, 0%, 70%)",
    neutral40: "hsl(0, 0%, 60%)",
    neutral50: "hsl(0, 0%, 50%)",
    neutral60: "hsl(0, 0%, 40%)",
    neutral70: "hsl(0, 0%, 30%)",
    neutral80: "hsl(0, 0%, 20%)",
    neutral90: "hsl(0, 0%, 10%)"
  },
  boxShadow: {
    button: "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px",
    card: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    dropdown: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    input: "0 1px 2px 0 rgb(0 0 0 / 0.05)"
  },
  spacing: {
    baseUnit: 4,
    controlHeight: 32,
    menuGutter: 8
  }
}, _R = {
  colors: {},
  spacing: {
    baseUnit: 4,
    controlHeight: 32,
    menuGutter: 8
  },
  boxShadow: {
    button: "none",
    input: "none",
    card: "none",
    dropdown: "none"
  }
};
function TR(e) {
  if (!e) return Zu;
  const t = typeof e == "function" ? e(Jc) : e, { colors: r, spacing: u, borderRadius: o } = Ic(
    OR,
    t
  );
  return {
    borderRadius: o,
    colors: r,
    spacing: u
  };
}
function Ic(e, ...t) {
  const r = {
    borderRadius: e.borderRadius,
    colors: {
      ...e.colors
    },
    spacing: {
      ...e.spacing
    },
    boxShadow: {
      ...e.boxShadow
    }
  };
  for (const u of t)
    u && (r.borderRadius = u.borderRadius ?? r.borderRadius, Object.assign(r.boxShadow, u.boxShadow), Object.assign(r.colors, u.colors), Object.assign(r.spacing, u.spacing));
  return r;
}
const BR = {
  ControlInput: vR,
  ControlSelect: SR,
  ControlApp: bR,
  Description: ER,
  Errors: FR,
  Label: RR,
  OptionalFieldButton: PR,
  Button: am
}, Uc = eo({
  // eslint-disable-line @typescript-eslint/no-explicit-any
  classNames: {},
  classNamePrefix: "",
  components: {},
  styles: {},
  theme: Jc,
  unstyled: !1
});
function GR() {
  const e = su(Uc) ?? {}, t = TR(e.theme ?? {});
  function r() {
    return e.classNamePrefix ?? "";
  }
  function u(c) {
    var p;
    const f = `${(e == null ? void 0 : e.classNamePrefix) ?? "pd-"}${c}`, h = {
      ...((p = e.classNames) == null ? void 0 : p[c]) ?? {}
    };
    return typeof (h == null ? void 0 : h.container) == "function" && (h.container = typeof (h == null ? void 0 : h.container) == "function" ? (...g) => {
      var v;
      return [(v = h == null ? void 0 : h.container) == null ? void 0 : v.call(h, ...g), f].join(" ");
    } : () => f), h;
  }
  function o(c, f) {
    var h;
    return {
      ...uo,
      ...f ?? {},
      ...((h = e == null ? void 0 : e.components) == null ? void 0 : h[c]) ?? {}
    };
  }
  function a(c, f) {
    var h;
    return rR(
      ((h = e.styles) == null ? void 0 : h[c]) ?? {},
      f ?? {}
    );
  }
  function l(c, f) {
    return {
      classNamePrefix: r(),
      classNames: u(c),
      components: o(c, f == null ? void 0 : f.components),
      styles: a(c, f == null ? void 0 : f.styles),
      theme: t
    };
  }
  return {
    getClassNamePrefix: r,
    getClassNames: u,
    getComponents: o,
    getProps: l,
    getStyles: a,
    theme: t
  };
}
function dn() {
  const e = su(Uc) ?? {}, t = e.theme, r = e.unstyled ? _R : Jc, u = typeof t == "function" ? Ic(r, t(r)) : Ic(r, t);
  function o(f, h) {
    var v;
    const p = `${(e == null ? void 0 : e.classNamePrefix) ?? "pd-"}${f.toLowerCase()}`, g = (v = e.classNames) == null ? void 0 : v[f];
    if (typeof g == "function") {
      const b = g, S = {
        ...h ?? {},
        theme: u
      };
      return [p, b(S)].filter(Boolean).join(" ");
    }
    return [p, g].filter(Boolean).join(" ");
  }
  function a() {
    return {
      ...BR,
      ...(e == null ? void 0 : e.components) ?? {}
    };
  }
  function l(f, h, p) {
    var v;
    const g = (v = e.styles) == null ? void 0 : v[f];
    if (typeof g == "function") {
      const b = g, S = {
        ...p ?? {},
        theme: u
      };
      return b(h, S);
    }
    return g ? {
      ...h,
      ...g
    } : h;
  }
  function c(f, h, p) {
    return {
      className: o(f, p),
      style: l(f, h, p)
    };
  }
  return {
    getClassNames: o,
    getComponents: a,
    getProps: c,
    getStyles: l,
    select: GR(),
    theme: u
  };
}
const iP = ({
  children: e,
  ...t
}) => {
  const r = ln(
    () => t,
    [
      // Include only the stable references that should trigger a re-render
      t.classNamePrefix,
      t.unstyled,
      t.theme
      // Components object reference should be kept stable by the parent component
      // to avoid re-renders. We don't include it here as a dependency to avoid
      // re-rendering when function references change.
    ]
  );
  return /* @__PURE__ */ re(Uc.Provider, { value: r, children: e });
};
function kR(e) {
  const { form: t } = e, { propsNeedConfiguring: r, submitting: u } = t, { getProps: o, theme: a } = dn();
  return /* @__PURE__ */ re(
    "input",
    {
      type: "submit",
      value: u ? "Submitting..." : "Submit",
      ...o(
        "controlSubmit",
        ((c) => {
          var f;
          return {
            width: "fit-content",
            textTransform: "capitalize",
            backgroundColor: c ? a.colors.neutral10 : a.colors.primary,
            color: c ? a.colors.neutral40 : a.colors.neutral0,
            padding: `${a.spacing.baseUnit * 1.75}px ${a.spacing.baseUnit * 16}px`,
            borderRadius: a.borderRadius,
            boxShadow: (f = a.boxShadow) == null ? void 0 : f.button,
            cursor: "pointer",
            fontSize: "0.875rem",
            opacity: u ? 0.5 : void 0,
            margin: "0.5rem 0 0 0"
          };
        })(r.length || u),
        e
      ),
      disabled: r.length || u
    }
  );
}
class LR extends Fp {
  constructor() {
    super(...arguments), this.state = {
      err: void 0
    };
  }
  static getDerivedStateFromError(t) {
    return {
      err: t
    };
  }
  render() {
    const { err: t } = this.state;
    return t ? this.props.fallback(t) : this.props.children;
  }
}
const DR = (e, t) => {
  var o;
  const r = Yr(), u = Ii({
    queryKey: ["app", e],
    queryFn: () => r.app(e),
    ...t == null ? void 0 : t.useQueryOpts
  });
  return {
    ...u,
    app: (o = u.data) == null ? void 0 : o.data
  };
};
function MR() {
  const e = cu(), { id: t, value: r, onChange: u } = e, { getProps: o } = dn();
  return /* @__PURE__ */ re(
    "input",
    {
      id: t,
      type: "checkbox",
      ...o("controlBoolean", {
        width: "16px",
        height: "16px",
        gridArea: "control",
        margin: "0 0.5rem 0 0"
      }, e),
      checked: r ?? !1,
      onChange: (l) => u(l.target.checked)
    }
  );
}
function NR({
  queryEnabled: e
}) {
  const t = Yr(), { getComponents: r } = dn(), { ControlSelect: u } = r(), {
    userId: o,
    component: a,
    configurableProps: l,
    configuredProps: c,
    dynamicProps: f,
    props: { disableQueryDisabling: h }
  } = Vc(), { idx: p, prop: g } = cu(), [v, b] = $e(""), [S, A] = $e(0), [F, P] = $e(!0), [W, k] = $e(void 0), [N, U] = $e({
    page: 0,
    prevContext: {},
    data: [],
    values: /* @__PURE__ */ new Set()
  }), G = {};
  for (let we = 0; we < p; we++) {
    const Fe = l[we];
    G[Fe.name] = c[Fe.name];
  }
  const j = {
    userId: o,
    page: S,
    prevContext: W,
    componentId: a.key,
    propName: g.name,
    configuredProps: G,
    dynamicPropsId: f == null ? void 0 : f.id
  };
  g.useQuery && (j.query = v || "");
  const M = {
    ...j
  };
  delete M.dynamicPropsId;
  const [Y, K] = $e(), Q = () => {
    A(N.page), k(N.prevContext), U({
      ...N,
      prevContext: {}
    });
  }, { isFetching: z, refetch: ee } = Ii({
    queryKey: ["componentConfigure", M],
    queryFn: async () => {
      K(void 0);
      const we = await t.componentConfigure(j), { options: Fe, stringOptions: Je, errors: w } = we;
      if (w != null && w.length) {
        try {
          K(JSON.parse(w[0]));
        } catch {
          K({
            name: "Error",
            message: w[0]
          });
        }
        return [];
      }
      let Ie = [];
      if (Fe != null && Fe.length && (Ie = Fe), Je != null && Je.length) {
        const ce = [];
        for (const Se of Je)
          ce.push({
            label: Se,
            value: Se
          });
        Ie = ce;
      }
      const Ge = [], E = new Set(N.values);
      for (const ce of Ie || []) {
        const Se = typeof ce == "string" ? ce : ce.value;
        E.has(Se) || (E.add(Se), Ge.push(ce));
      }
      let Ye = N.data;
      return Ge.length ? (Ye = [...N.data, ...Ge], U({
        page: S + 1,
        prevContext: we.context,
        data: Ye,
        values: E
      })) : P(!1), Ye;
    },
    enabled: !!e
  }), de = () => !z && !Y && F, ie = Y ? Y.message : h ? "Click to configure" : e ? void 0 : "Configure props above first", xe = h ? !1 : !e;
  return /* @__PURE__ */ re(
    u,
    {
      isCreatable: !0,
      showLoadMoreButton: de(),
      onLoadMore: Q,
      options: N.data,
      selectProps: {
        isLoading: z,
        placeholder: ie,
        isDisabled: xe,
        inputValue: g.useQuery ? v : void 0,
        onInputChange(we) {
          g.useQuery && (b(we), ee());
        },
        onMenuOpen() {
          h && !e && ee();
        }
      }
    }
  );
}
function VR(e) {
  const { field: t, form: r } = e, { queryDisabledIdx: u } = r, { prop: o, idx: a } = t, l = "app" in t.extra ? t.extra.app : void 0, { getComponents: c } = dn(), {
    ControlInput: f,
    ControlSelect: h,
    ControlApp: p
  } = c();
  if (o.remoteOptions || o.type === "$.discord.channel")
    return /* @__PURE__ */ re(
      NR,
      {
        queryEnabled: u == null || u >= a
      }
    );
  if ("options" in o && o.options) {
    let g = o.options;
    return typeof g[0] != "object" && (g = g.map((v) => ({
      label: v,
      value: v
    }))), /* @__PURE__ */ re(
      h,
      {
        options: g,
        components: {
          IndicatorSeparator: () => null
        }
      }
    );
  }
  if (o.type.endsWith("[][]"))
    throw new Error("Unsupported property type: " + o.type);
  if (o.type.endsWith("[]"))
    return /* @__PURE__ */ re(h, { isCreatable: !0, options: [] });
  switch (o.type) {
    case "app":
      return /* @__PURE__ */ re(p, { app: l });
    case "boolean":
      return /* @__PURE__ */ re(MR, {});
    case "string":
    case "integer":
      return /* @__PURE__ */ re(f, {});
    default:
      throw new Error("Unsupported property type: " + o.type);
  }
}
function WR(e) {
  const { form: t, field: r } = e, { prop: u } = r, { getProps: o, getComponents: a } = dn(), l = {
    display: "grid",
    gridTemplateAreas: r.prop.type == "boolean" ? '"control label" "description description" "error error"' : '"label label" "control control" "description description" "error error"',
    gridTemplateColumns: "min-content auto",
    gap: "0.25rem 0",
    alignItems: "center",
    fontSize: "0.875rem"
  }, { Label: c, Description: f, Errors: h } = a(), p = "app" in r.extra ? r.extra.app : void 0;
  if (p && !p.auth_type)
    return null;
  let g = u.label || u.name;
  return p && (g = `Connect ${p.name} account`), /* @__PURE__ */ Mn("div", { ...o("field", l, e), children: [
    /* @__PURE__ */ re(c, { text: g, field: r, form: t }),
    /* @__PURE__ */ re(VR, { field: r, form: t }),
    /* @__PURE__ */ re(f, { markdown: u.description, field: r, form: t }),
    /* @__PURE__ */ re(h, { field: r, form: t })
  ] });
}
const XR = to(WR);
function HR({
  prop: e,
  idx: t
}) {
  const r = Vc(), {
    id: u,
    configuredProps: o,
    registerField: a,
    setConfiguredProp: l,
    errors: c,
    enableDebugging: f
  } = r, h = e.type === "app" && "app" in e ? e.app : void 0, {
    // TODO error
    app: p
  } = DR(h || "", {
    useQueryOpts: {
      enabled: !!h
      // Remove the suspense option if causing TypeScript errors
      // suspense: !!appSlug,
    }
  }), g = `pd${u}${e.name}`, v = Mt(
    (S) => {
      l(t, S);
    },
    [t, l]
  ), b = ln(
    () => ({
      id: g,
      prop: e,
      idx: t,
      value: o[e.name],
      onChange: v,
      // Cast the extra object to any to avoid TypeScript errors
      // with complex types that might be difficult to properly type
      extra: {
        app: p
      },
      errors: c,
      enableDebugging: f
    }),
    [
      g,
      e,
      t,
      o[e.name],
      v,
      p,
      c,
      f
    ]
  );
  return an(() => a(b), [b, a]), /* @__PURE__ */ re(sm.Provider, { value: b, children: /* @__PURE__ */ re(XR, { field: b, form: r }) });
}
const zR = to(
  HR
), ZR = ["ConfigurationError"];
function YR({
  renderLoading: e,
  renderError: t
} = {}) {
  const r = Vc(), {
    configurableProps: u,
    dynamicPropsQueryIsFetching: o,
    isValid: a,
    optionalPropIsEnabled: l,
    optionalPropSetEnabled: c,
    props: f,
    setSubmitting: h,
    sdkErrors: p,
    submitting: g,
    enableDebugging: v
  } = r, b = v || p.filter((ee) => ZR.includes(ee.name)).length > 0, { hideOptionalProps: S, onSubmit: A } = f, [F, P] = $e([]);
  an(() => {
    g ? P([]) : p && p.length && P(
      p.map((ee) => ({
        type: "alert",
        alertType: "error",
        content: `# ${ee.name}
${ee.message}`
      }))
    );
  }, [p, g]);
  const { getComponents: W, getProps: k, theme: N } = dn(), { OptionalFieldButton: U } = W(), G = {
    display: "flex",
    flexDirection: "column"
  }, j = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.375rem"
  }, M = {
    fontWeight: 600,
    textTransform: "capitalize",
    color: N.colors.neutral60,
    fontSize: "0.875rem",
    lineHeight: "1.375",
    margin: "0 0 0.5rem 0"
  }, Y = async (ee) => {
    if (A && (ee.preventDefault(), a)) {
      h(!0);
      try {
        await A(r);
      } finally {
        h(!1);
      }
    }
  }, K = [], Q = [];
  for (let ee = 0; ee < u.length; ee++) {
    const de = u[ee];
    if (!de.hidden && !Ss.includes(de.type)) {
      if (de.optional) {
        const ie = l(de);
        if (Q.push([de, ie]), !ie)
          continue;
      }
      K.push([de, ee]);
    }
  }
  const z = (ee) => /* @__PURE__ */ Mn(
    "p",
    {
      style: {
        color: "red"
      },
      children: [
        "Error:",
        " ",
        ee && typeof ee == "object" && "message" in ee && typeof ee.message == "string" ? ee.message : "Unknown"
      ]
    }
  );
  return /* @__PURE__ */ re(
    LR,
    {
      fallback: (ee) => t ? t(ee) : z(ee),
      children: /* @__PURE__ */ re(
        W1,
        {
          fallback: e ? e() : /* @__PURE__ */ re("p", { children: "Loading form..." }),
          children: /* @__PURE__ */ Mn(
            "form",
            {
              ...k("componentForm", G, f),
              onSubmit: Y,
              className: "gap-2",
              children: [
                K.map(([ee, de]) => ee.type === "alert" ? /* @__PURE__ */ re(ec, { prop: ee }, ee.name) : /* @__PURE__ */ re(zR, { prop: ee, idx: de }, ee.name)),
                o && (e ? e() : /* @__PURE__ */ re("p", { children: "Loading dynamic props..." })),
                !S && Q.length ? /* @__PURE__ */ Mn("div", { children: [
                  /* @__PURE__ */ re(
                    "div",
                    {
                      ...k("heading", M, f),
                      children: "Optional Props"
                    }
                  ),
                  /* @__PURE__ */ re(
                    "div",
                    {
                      ...k(
                        "optionalFields",
                        j,
                        f
                      ),
                      children: Q.map(([ee, de]) => /* @__PURE__ */ re(
                        U,
                        {
                          prop: ee,
                          enabled: de,
                          onClick: () => c(ee, !de)
                        },
                        ee.name
                      ))
                    }
                  )
                ] }) : null,
                b && (F == null ? void 0 : F.map((ee, de) => /* @__PURE__ */ re(ec, { prop: ee }, de))),
                A && /* @__PURE__ */ re(kR, { form: r })
              ]
            }
          )
        }
      )
    }
  );
}
const JR = to(YR);
function UR(e) {
  const { renderLoading: t, renderError: r, ...u } = e;
  return /* @__PURE__ */ re(CE, { props: u, children: /* @__PURE__ */ re(
    JR,
    {
      renderLoading: t,
      renderError: r
    }
  ) });
}
const jR = ({ key: e }, t) => {
  var o;
  const r = Yr(), u = Ii({
    queryKey: ["component", e],
    queryFn: () => r.component({
      key: e
    }),
    enabled: !!e,
    ...t == null ? void 0 : t.useQueryOpts
  });
  return {
    ...u,
    component: (o = u.data) == null ? void 0 : o.data
  };
};
function uP(e) {
  const { isLoading: t, error: r, component: u } = jR({
    key: e.componentKey
  });
  if (!e.componentKey)
    throw new Error("componentKey required");
  if (t)
    return e.renderLoading ? e.renderLoading() : /* @__PURE__ */ re("p", { children: "Loading..." });
  if (r)
    return e.renderError ? e.renderError(r) : /* @__PURE__ */ Mn("p", { children: [
      "Error: ",
      r.message
    ] });
  if (!u)
    return e.renderNotFound ? e.renderNotFound() : /* @__PURE__ */ re("p", { children: "Component not found" });
  const { renderLoading: o, renderError: a, renderNotFound: l, ...c } = e;
  return /* @__PURE__ */ re(
    UR,
    {
      component: u,
      renderLoading: o,
      renderError: a,
      ...c
    }
  );
}
function oP() {
  const e = cu(), { id: t, onChange: r, value: u } = e, { getProps: o, theme: a } = dn(), l = {
    display: "block",
    gridArea: "control",
    width: "100%",
    fontSize: "0.875rem",
    boxShadow: a.boxShadow.input
  };
  let c = u;
  return typeof c == "object" && (c = JSON.stringify(c)), /* @__PURE__ */ re(
    "textarea",
    {
      id: t,
      value: c,
      onChange: (f) => r(f.target.value),
      ...o("controlAny", l, e)
    }
  );
}
const QR = (e) => {
  var u;
  const t = Yr(), r = Ii({
    queryKey: ["apps", e],
    queryFn: () => t.apps(e)
  });
  return {
    ...r,
    apps: ((u = r.data) == null ? void 0 : u.data) || []
  };
};
function sP({ value: e, onChange: t }) {
  const [r, u] = $e(""), o = Cc(), {
    isLoading: a,
    // TODO error
    apps: l
  } = QR({
    q: r
  }), { Option: c, SingleValue: f } = uo, h = (l == null ? void 0 : l.find((p) => p.name_slug === (e == null ? void 0 : e.name_slug))) || null;
  return /* @__PURE__ */ re(
    Us,
    {
      instanceId: o,
      className: "react-select-container text-sm",
      classNamePrefix: "react-select",
      components: {
        Option: (p) => /* @__PURE__ */ re(c, { ...p, children: /* @__PURE__ */ Mn(
          "div",
          {
            style: {
              display: "flex",
              gap: 10
            },
            children: [
              /* @__PURE__ */ re(
                "img",
                {
                  src: `https://pipedream.com/s.v0/${p.data.id}/logo/48`,
                  style: {
                    height: 24,
                    width: 24
                  },
                  alt: p.data.name
                }
              ),
              /* @__PURE__ */ re(
                "span",
                {
                  style: {
                    whiteSpace: "nowrap"
                  },
                  children: p.data.name
                }
              )
            ]
          }
        ) }),
        SingleValue: (p) => /* @__PURE__ */ re(f, { ...p, children: /* @__PURE__ */ Mn(
          "div",
          {
            style: {
              display: "flex",
              gap: 10,
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ re(
                "img",
                {
                  src: `https://pipedream.com/s.v0/${p.data.id}/logo/48`,
                  style: {
                    height: 24,
                    width: 24
                  },
                  alt: p.data.name
                }
              ),
              /* @__PURE__ */ re(
                "span",
                {
                  style: {
                    whiteSpace: "nowrap"
                  },
                  children: p.data.name
                }
              )
            ]
          }
        ) }),
        IndicatorSeparator: () => null
      },
      options: l || [],
      getOptionLabel: (p) => p.name || p.name_slug,
      getOptionValue: (p) => p.name_slug,
      value: h,
      onChange: (p) => t == null ? void 0 : t(p || void 0),
      onInputChange: (p) => {
        p && u(p);
      },
      isLoading: a
    }
  );
}
const qR = (e) => {
  var u;
  const t = Yr(), r = Ii({
    queryKey: ["components", e],
    queryFn: () => t.components(e)
  });
  return {
    ...r,
    components: ((u = r.data) == null ? void 0 : u.data) || []
  };
};
function aP({
  app: e,
  componentType: t,
  value: r,
  onChange: u
}) {
  const o = Cc(), { isLoading: a, components: l } = qR({
    app: e == null ? void 0 : e.name_slug,
    componentType: t
  }), c = (l == null ? void 0 : l.find((f) => f.key === (r == null ? void 0 : r.key))) || null;
  return /* @__PURE__ */ re(
    Us,
    {
      instanceId: o,
      className: "react-select-container text-sm",
      classNamePrefix: "react-select",
      options: l,
      getOptionLabel: (f) => f.name || f.key,
      getOptionValue: (f) => f.key,
      value: c,
      onChange: (f) => u == null ? void 0 : u(f || void 0),
      isLoading: a,
      components: {
        IndicatorSeparator: () => null
      }
    }
  );
}
export {
  ec as Alert,
  UR as ComponentForm,
  uP as ComponentFormContainer,
  VR as Control,
  oP as ControlAny,
  bR as ControlApp,
  MR as ControlBoolean,
  vR as ControlInput,
  SR as ControlSelect,
  kR as ControlSubmit,
  Uc as CustomizationContext,
  iP as CustomizeProvider,
  ER as Description,
  LR as ErrorBoundary,
  FR as Errors,
  XR as Field,
  Fg as FormContext,
  CE as FormContextProvider,
  sm as FormFieldContext,
  rP as FrontendClientProvider,
  JR as InternalComponentForm,
  zR as InternalField,
  RR as Label,
  PR as OptionalFieldButton,
  NR as RemoteOptionsContainer,
  IE as SSRSafeWrapper,
  sP as SelectApp,
  aP as SelectComponent,
  BR as defaultComponents,
  Jc as defaultTheme,
  TR as getReactSelectTheme,
  Sg as isSSR,
  Ic as mergeTheme,
  Ss as skippablePropTypes,
  _R as unstyledTheme,
  gR as useAccounts,
  DR as useApp,
  QR as useApps,
  jR as useComponent,
  qR as useComponents,
  dn as useCustomize,
  Vc as useFormContext,
  cu as useFormFieldContext,
  Yr as useFrontendClient
};
