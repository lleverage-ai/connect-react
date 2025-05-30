var Ud = (e) => {
  throw TypeError(e);
};
var Al = (e, t, r) => t.has(e) || Ud("Cannot " + r);
var O = (e, t, r) => (Al(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Ae = (e, t, r) => t.has(e) ? Ud("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), se = (e, t, r, u) => (Al(e, t, "write to private field"), u ? u.call(e, r) : t.set(e, r), r), Ze = (e, t, r) => (Al(e, t, "access private method"), r);
var ga = (e, t, r, u) => ({
  set _(o) {
    se(e, t, o, r);
  },
  get _() {
    return O(e, t, u);
  }
});
import { jsxs as An, jsx as re, Fragment as Eh } from "react/jsx-runtime";
import * as Te from "react";
import { createContext as eo, useContext as au, useState as $e, useId as Ic, useEffect as sn, useMemo as ln, useCallback as Mt, useLayoutEffect as NI, useRef as xr, Component as Fh, Fragment as Xl, forwardRef as Ph, memo as to, Suspense as VI } from "react";
import { jsx as me, css as Rh, keyframes as WI } from "@emotion/react";
import { createPortal as XI } from "react-dom";
function HI(e, t) {
  const r = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (r.padRight ? " " : "") + "," + (r.padLeft === !1 ? "" : " ")
  ).trim();
}
const zI = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, ZI = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, YI = {};
function jd(e, t) {
  return (YI.jsx ? ZI : zI).test(e);
}
const JI = /[ \t\n\f\r]/g;
function UI(e) {
  return typeof e == "object" ? e.type === "text" ? Qd(e.value) : !1 : Qd(e);
}
function Qd(e) {
  return e.replace(JI, "") === "";
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
function Oh(e, t) {
  const r = {}, u = {};
  for (const o of e)
    Object.assign(r, o.property), Object.assign(u, o.normal);
  return new no(r, u, t);
}
function Hl(e) {
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
let jI = 0;
const ke = vi(), Pt = vi(), _h = vi(), $ = vi(), ft = vi(), zi = vi(), Cn = vi();
function vi() {
  return 2 ** ++jI;
}
const zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: ke,
  booleanish: Pt,
  commaOrSpaceSeparated: Cn,
  commaSeparated: zi,
  number: $,
  overloadedBoolean: _h,
  spaceSeparated: ft
}, Symbol.toStringTag, { value: "Module" })), wl = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(zl)
);
class Cc extends fn {
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
    let s = -1;
    if (super(t, r), qd(this, "space", o), typeof u == "number")
      for (; ++s < wl.length; ) {
        const l = wl[s];
        qd(this, wl[s], (u & zl[l]) === zl[l]);
      }
  }
}
Cc.prototype.defined = !0;
function qd(e, t, r) {
  r && (e[t] = r);
}
function su(e) {
  const t = {}, r = {};
  for (const [u, o] of Object.entries(e.properties)) {
    const s = new Cc(
      u,
      e.transform(e.attributes || {}, u),
      o,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(u) && (s.mustUseProperty = !0), t[u] = s, r[Hl(u)] = u, r[Hl(s.attribute)] = u;
  }
  return new no(t, r, e.space);
}
const Th = su({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Pt,
    ariaAutoComplete: null,
    ariaBusy: Pt,
    ariaChecked: Pt,
    ariaColCount: $,
    ariaColIndex: $,
    ariaColSpan: $,
    ariaControls: ft,
    ariaCurrent: null,
    ariaDescribedBy: ft,
    ariaDetails: null,
    ariaDisabled: Pt,
    ariaDropEffect: ft,
    ariaErrorMessage: null,
    ariaExpanded: Pt,
    ariaFlowTo: ft,
    ariaGrabbed: Pt,
    ariaHasPopup: null,
    ariaHidden: Pt,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: ft,
    ariaLevel: $,
    ariaLive: null,
    ariaModal: Pt,
    ariaMultiLine: Pt,
    ariaMultiSelectable: Pt,
    ariaOrientation: null,
    ariaOwns: ft,
    ariaPlaceholder: null,
    ariaPosInSet: $,
    ariaPressed: Pt,
    ariaReadOnly: Pt,
    ariaRelevant: null,
    ariaRequired: Pt,
    ariaRoleDescription: ft,
    ariaRowCount: $,
    ariaRowIndex: $,
    ariaRowSpan: $,
    ariaSelected: Pt,
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
function Bh(e, t) {
  return t in e ? e[t] : t;
}
function Gh(e, t) {
  return Bh(e, t.toLowerCase());
}
const QI = su({
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
    acceptCharset: ft,
    accessKey: ft,
    action: null,
    allow: null,
    allowFullScreen: ke,
    allowPaymentRequest: ke,
    allowUserMedia: ke,
    alt: null,
    as: null,
    async: ke,
    autoCapitalize: null,
    autoComplete: ft,
    autoFocus: ke,
    autoPlay: ke,
    blocking: ft,
    capture: null,
    charSet: null,
    checked: ke,
    cite: null,
    className: ft,
    cols: $,
    colSpan: null,
    content: null,
    contentEditable: Pt,
    controls: ke,
    controlsList: ft,
    coords: $ | zi,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: ke,
    defer: ke,
    dir: null,
    dirName: null,
    disabled: ke,
    download: _h,
    draggable: Pt,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: ke,
    formTarget: null,
    headers: ft,
    height: $,
    hidden: ke,
    high: $,
    href: null,
    hrefLang: null,
    htmlFor: ft,
    httpEquiv: ft,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: ke,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: ke,
    itemId: null,
    itemProp: ft,
    itemRef: ft,
    itemScope: ke,
    itemType: ft,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: ke,
    low: $,
    manifest: null,
    max: null,
    maxLength: $,
    media: null,
    method: null,
    min: null,
    minLength: $,
    multiple: ke,
    muted: ke,
    name: null,
    nonce: null,
    noModule: ke,
    noValidate: ke,
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
    open: ke,
    optimum: $,
    pattern: null,
    ping: ft,
    placeholder: null,
    playsInline: ke,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: ke,
    referrerPolicy: null,
    rel: ft,
    required: ke,
    reversed: ke,
    rows: $,
    rowSpan: $,
    sandbox: ft,
    scope: null,
    scoped: ke,
    seamless: ke,
    selected: ke,
    shadowRootClonable: ke,
    shadowRootDelegatesFocus: ke,
    shadowRootMode: null,
    shape: null,
    size: $,
    sizes: null,
    slot: null,
    span: $,
    spellCheck: Pt,
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
    typeMustMatch: ke,
    useMap: null,
    value: Pt,
    width: $,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: ft,
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
    compact: ke,
    // Lists. Use CSS to reduce space between items instead
    declare: ke,
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
    noResize: ke,
    // `<frame>`
    noHref: ke,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: ke,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: ke,
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
    scrolling: Pt,
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
    disablePictureInPicture: ke,
    disableRemotePlayback: ke,
    prefix: null,
    property: null,
    results: $,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Gh
}), qI = su({
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
    className: ft,
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
    download: ke,
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
    ping: ft,
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
  transform: Bh
}), kh = su({
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
}), Lh = su({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Gh
}), Dh = su({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), $I = {
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
}, KI = /[A-Z]/g, $d = /-[a-z]/g, eC = /^data[-\w.:]+$/i;
function tC(e, t) {
  const r = Hl(t);
  let u = t, o = fn;
  if (r in e.normal)
    return e.property[e.normal[r]];
  if (r.length > 4 && r.slice(0, 4) === "data" && eC.test(t)) {
    if (t.charAt(4) === "-") {
      const s = t.slice(5).replace($d, rC);
      u = "data" + s.charAt(0).toUpperCase() + s.slice(1);
    } else {
      const s = t.slice(4);
      if (!$d.test(s)) {
        let l = s.replace(KI, nC);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    o = Cc;
  }
  return new o(u, t);
}
function nC(e) {
  return "-" + e.toLowerCase();
}
function rC(e) {
  return e.charAt(1).toUpperCase();
}
const iC = Oh([Th, QI, kh, Lh, Dh], "html"), xc = Oh([Th, qI, kh, Lh, Dh], "svg");
function uC(e) {
  return e.join(" ").trim();
}
var xn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Va(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ac = {}, Kd = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, oC = /\n/g, aC = /^\s*/, sC = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, lC = /^:\s*/, cC = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, fC = /^[;\s]*/, dC = /^\s+|\s+$/g, pC = `
`, ep = "/", tp = "*", si = "", hC = "comment", gC = "declaration", mC = function(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var r = 1, u = 1;
  function o(E) {
    var w = E.match(oC);
    w && (r += w.length);
    var F = E.lastIndexOf(pC);
    u = ~F ? E.length - F : u + E.length;
  }
  function s() {
    var E = { line: r, column: u };
    return function(w) {
      return w.position = new l(E), p(), w;
    };
  }
  function l(E) {
    this.start = E, this.end = { line: r, column: u }, this.source = t.source;
  }
  l.prototype.content = e;
  function c(E) {
    var w = new Error(
      t.source + ":" + r + ":" + u + ": " + E
    );
    if (w.reason = E, w.filename = t.source, w.line = r, w.column = u, w.source = e, !t.silent) throw w;
  }
  function f(E) {
    var w = E.exec(e);
    if (w) {
      var F = w[0];
      return o(F), e = e.slice(F.length), w;
    }
  }
  function p() {
    f(aC);
  }
  function h(E) {
    var w;
    for (E = E || []; w = g(); )
      w !== !1 && E.push(w);
    return E;
  }
  function g() {
    var E = s();
    if (!(ep != e.charAt(0) || tp != e.charAt(1))) {
      for (var w = 2; si != e.charAt(w) && (tp != e.charAt(w) || ep != e.charAt(w + 1)); )
        ++w;
      if (w += 2, si === e.charAt(w - 1))
        return c("End of comment missing");
      var F = e.slice(2, w - 2);
      return u += 2, o(F), e = e.slice(w), u += 2, E({
        type: hC,
        comment: F
      });
    }
  }
  function v() {
    var E = s(), w = f(sC);
    if (w) {
      if (g(), !f(lC)) return c("property missing ':'");
      var F = f(cC), R = E({
        type: gC,
        property: np(w[0].replace(Kd, si)),
        value: F ? np(F[0].replace(Kd, si)) : si
      });
      return f(fC), R;
    }
  }
  function b() {
    var E = [];
    h(E);
    for (var w; w = v(); )
      w !== !1 && (E.push(w), h(E));
    return E;
  }
  return p(), b();
};
function np(e) {
  return e ? e.replace(dC, si) : si;
}
var bC = xn && xn.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ac, "__esModule", { value: !0 });
Ac.default = vC;
var yC = bC(mC);
function vC(e, t) {
  var r = null;
  if (!e || typeof e != "string")
    return r;
  var u = (0, yC.default)(e), o = typeof t == "function";
  return u.forEach(function(s) {
    if (s.type === "declaration") {
      var l = s.property, c = s.value;
      o ? t(l, c, s) : c && (r = r || {}, r[l] = c);
    }
  }), r;
}
var Wa = {};
Object.defineProperty(Wa, "__esModule", { value: !0 });
Wa.camelCase = void 0;
var IC = /^--[a-zA-Z0-9_-]+$/, CC = /-([a-z])/g, xC = /^[^-]+$/, AC = /^-(webkit|moz|ms|o|khtml)-/, wC = /^-(ms)-/, SC = function(e) {
  return !e || xC.test(e) || IC.test(e);
}, EC = function(e, t) {
  return t.toUpperCase();
}, rp = function(e, t) {
  return "".concat(t, "-");
}, FC = function(e, t) {
  return t === void 0 && (t = {}), SC(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace(wC, rp) : e = e.replace(AC, rp), e.replace(CC, EC));
};
Wa.camelCase = FC;
var PC = xn && xn.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, RC = PC(Ac), OC = Wa;
function Zl(e, t) {
  var r = {};
  return !e || typeof e != "string" || (0, RC.default)(e, function(u, o) {
    u && o && (r[(0, OC.camelCase)(u, t)] = o);
  }), r;
}
Zl.default = Zl;
var _C = Zl;
const TC = /* @__PURE__ */ Va(_C), Mh = Nh("end"), wc = Nh("start");
function Nh(e) {
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
function BC(e) {
  const t = wc(e), r = Mh(e);
  if (t && r)
    return { start: t, end: r };
}
function Xu(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? ip(e.position) : "start" in e || "end" in e ? ip(e) : "line" in e || "column" in e ? Yl(e) : "";
}
function Yl(e) {
  return up(e && e.line) + ":" + up(e && e.column);
}
function ip(e) {
  return Yl(e && e.start) + "-" + Yl(e && e.end);
}
function up(e) {
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
    let o = "", s = {}, l = !1;
    if (r && ("line" in r && "column" in r ? s = { place: r } : "start" in r && "end" in r ? s = { place: r } : "type" in r ? s = {
      ancestors: [r],
      place: r.position
    } : s = { ...r }), typeof t == "string" ? o = t : !s.cause && t && (l = !0, o = t.message, s.cause = t), !s.ruleId && !s.source && typeof u == "string") {
      const f = u.indexOf(":");
      f === -1 ? s.ruleId = u : (s.source = u.slice(0, f), s.ruleId = u.slice(f + 1));
    }
    if (!s.place && s.ancestors && s.ancestors) {
      const f = s.ancestors[s.ancestors.length - 1];
      f && (s.place = f.position);
    }
    const c = s.place && "start" in s.place ? s.place.start : s.place;
    this.ancestors = s.ancestors || void 0, this.cause = s.cause || void 0, this.column = c ? c.column : void 0, this.fatal = void 0, this.file, this.message = o, this.line = c ? c.line : void 0, this.name = Xu(s.place) || "1:1", this.place = s.place || void 0, this.reason = this.message, this.ruleId = s.ruleId || void 0, this.source = s.source || void 0, this.stack = l && s.cause && typeof s.cause.stack == "string" ? s.cause.stack : "", this.actual, this.expected, this.note, this.url;
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
const Sc = {}.hasOwnProperty, GC = /* @__PURE__ */ new Map(), kC = /[A-Z]/g, LC = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), DC = /* @__PURE__ */ new Set(["td", "th"]), Vh = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function MC(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const r = t.filePath || void 0;
  let u;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    u = YC(r, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    u = ZC(r, t.jsx, t.jsxs);
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
    schema: t.space === "svg" ? xc : iC,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, s = Wh(o, e, void 0);
  return s && typeof s != "string" ? s : o.create(
    e,
    o.Fragment,
    { children: s || void 0 },
    void 0
  );
}
function Wh(e, t, r) {
  if (t.type === "element")
    return NC(e, t, r);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return VC(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return XC(e, t, r);
  if (t.type === "mdxjsEsm")
    return WC(e, t);
  if (t.type === "root")
    return HC(e, t, r);
  if (t.type === "text")
    return zC(e, t);
}
function NC(e, t, r) {
  const u = e.schema;
  let o = u;
  t.tagName.toLowerCase() === "svg" && u.space === "html" && (o = xc, e.schema = o), e.ancestors.push(t);
  const s = Hh(e, t.tagName, !1), l = JC(e, t);
  let c = Fc(e, t);
  return LC.has(t.tagName) && (c = c.filter(function(f) {
    return typeof f == "string" ? !UI(f) : !0;
  })), Xh(e, l, s, t), Ec(l, c), e.ancestors.pop(), e.schema = u, e.create(t, s, l, r);
}
function VC(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const u = t.data.estree.body[0];
    return u.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(u.expression);
  }
  Ju(e, t.position);
}
function WC(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  Ju(e, t.position);
}
function XC(e, t, r) {
  const u = e.schema;
  let o = u;
  t.name === "svg" && u.space === "html" && (o = xc, e.schema = o), e.ancestors.push(t);
  const s = t.name === null ? e.Fragment : Hh(e, t.name, !0), l = UC(e, t), c = Fc(e, t);
  return Xh(e, l, s, t), Ec(l, c), e.ancestors.pop(), e.schema = u, e.create(t, s, l, r);
}
function HC(e, t, r) {
  const u = {};
  return Ec(u, Fc(e, t)), e.create(t, e.Fragment, u, r);
}
function zC(e, t) {
  return t.value;
}
function Xh(e, t, r, u) {
  typeof r != "string" && r !== e.Fragment && e.passNode && (t.node = u);
}
function Ec(e, t) {
  if (t.length > 0) {
    const r = t.length > 1 ? t : t[0];
    r && (e.children = r);
  }
}
function ZC(e, t, r) {
  return u;
  function u(o, s, l, c) {
    const p = Array.isArray(l.children) ? r : t;
    return c ? p(s, l, c) : p(s, l);
  }
}
function YC(e, t) {
  return r;
  function r(u, o, s, l) {
    const c = Array.isArray(s.children), f = wc(u);
    return t(
      o,
      s,
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
function JC(e, t) {
  const r = {};
  let u, o;
  for (o in t.properties)
    if (o !== "children" && Sc.call(t.properties, o)) {
      const s = jC(e, o, t.properties[o]);
      if (s) {
        const [l, c] = s;
        e.tableCellAlignToStyle && l === "align" && typeof c == "string" && DC.has(t.tagName) ? u = c : r[l] = c;
      }
    }
  if (u) {
    const s = (
      /** @type {Style} */
      r.style || (r.style = {})
    );
    s[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = u;
  }
  return r;
}
function UC(e, t) {
  const r = {};
  for (const u of t.attributes)
    if (u.type === "mdxJsxExpressionAttribute")
      if (u.data && u.data.estree && e.evaluater) {
        const s = u.data.estree.body[0];
        s.type;
        const l = s.expression;
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
      let s;
      if (u.value && typeof u.value == "object")
        if (u.value.data && u.value.data.estree && e.evaluater) {
          const c = u.value.data.estree.body[0];
          c.type, s = e.evaluater.evaluateExpression(c.expression);
        } else
          Ju(e, t.position);
      else
        s = u.value === null ? !0 : u.value;
      r[o] = /** @type {Props[keyof Props]} */
      s;
    }
  return r;
}
function Fc(e, t) {
  const r = [];
  let u = -1;
  const o = e.passKeys ? /* @__PURE__ */ new Map() : GC;
  for (; ++u < t.children.length; ) {
    const s = t.children[u];
    let l;
    if (e.passKeys) {
      const f = s.type === "element" ? s.tagName : s.type === "mdxJsxFlowElement" || s.type === "mdxJsxTextElement" ? s.name : void 0;
      if (f) {
        const p = o.get(f) || 0;
        l = f + "-" + p, o.set(f, p + 1);
      }
    }
    const c = Wh(e, s, l);
    c !== void 0 && r.push(c);
  }
  return r;
}
function jC(e, t, r) {
  const u = tC(e.schema, t);
  if (!(r == null || typeof r == "number" && Number.isNaN(r))) {
    if (Array.isArray(r) && (r = u.commaSeparated ? HI(r) : uC(r)), u.property === "style") {
      let o = typeof r == "object" ? r : QC(e, String(r));
      return e.stylePropertyNameCase === "css" && (o = qC(o)), ["style", o];
    }
    return [
      e.elementAttributeNameCase === "react" && u.space ? $I[u.property] || u.property : u.attribute,
      r
    ];
  }
}
function QC(e, t) {
  try {
    return TC(t, { reactCompat: !0 });
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
    throw o.file = e.filePath || void 0, o.url = Vh + "#cannot-parse-style-attribute", o;
  }
}
function Hh(e, t, r) {
  let u;
  if (!r)
    u = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const o = t.split(".");
    let s = -1, l;
    for (; ++s < o.length; ) {
      const c = jd(o[s]) ? { type: "Identifier", name: o[s] } : { type: "Literal", value: o[s] };
      l = l ? {
        type: "MemberExpression",
        object: l,
        property: c,
        computed: !!(s && c.type === "Literal"),
        optional: !1
      } : c;
    }
    u = l;
  } else
    u = jd(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (u.type === "Literal") {
    const o = (
      /** @type {string | number} */
      u.value
    );
    return Sc.call(e.components, o) ? e.components[o] : o;
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
  throw r.file = e.filePath || void 0, r.url = Vh + "#cannot-handle-mdx-estrees-without-createevaluater", r;
}
function qC(e) {
  const t = {};
  let r;
  for (r in e)
    Sc.call(e, r) && (t[$C(r)] = e[r]);
  return t;
}
function $C(e) {
  let t = e.replace(kC, KC);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function KC(e) {
  return "-" + e.toLowerCase();
}
const Sl = {
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
}, ex = {};
function tx(e, t) {
  const r = ex, u = typeof r.includeImageAlt == "boolean" ? r.includeImageAlt : !0, o = typeof r.includeHtml == "boolean" ? r.includeHtml : !0;
  return zh(e, u, o);
}
function zh(e, t, r) {
  if (nx(e)) {
    if ("value" in e)
      return e.type === "html" && !r ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return op(e.children, t, r);
  }
  return Array.isArray(e) ? op(e, t, r) : "";
}
function op(e, t, r) {
  const u = [];
  let o = -1;
  for (; ++o < e.length; )
    u[o] = zh(e[o], t, r);
  return u.join("");
}
function nx(e) {
  return !!(e && typeof e == "object");
}
const ap = document.createElement("i");
function Pc(e) {
  const t = "&" + e + ";";
  ap.innerHTML = t;
  const r = ap.textContent;
  return (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    r.charCodeAt(r.length - 1) === 59 && e !== "semi" || r === t ? !1 : r
  );
}
function ur(e, t, r, u) {
  const o = e.length;
  let s = 0, l;
  if (t < 0 ? t = -t > o ? 0 : o + t : t = t > o ? o : t, r = r > 0 ? r : 0, u.length < 1e4)
    l = Array.from(u), l.unshift(t, r), e.splice(...l);
  else
    for (r && e.splice(t, r); s < u.length; )
      l = u.slice(s, s + 1e4), l.unshift(t, 0), e.splice(...l), s += 1e4, t += 1e4;
}
function Mn(e, t) {
  return e.length > 0 ? (ur(e, e.length, 0, t), e) : t;
}
const sp = {}.hasOwnProperty;
function rx(e) {
  const t = {};
  let r = -1;
  for (; ++r < e.length; )
    ix(t, e[r]);
  return t;
}
function ix(e, t) {
  let r;
  for (r in t) {
    const o = (sp.call(e, r) ? e[r] : void 0) || (e[r] = {}), s = t[r];
    let l;
    if (s)
      for (l in s) {
        sp.call(o, l) || (o[l] = []);
        const c = s[l];
        ux(
          // @ts-expect-error Looks like a list.
          o[l],
          Array.isArray(c) ? c : c ? [c] : []
        );
      }
  }
}
function ux(e, t) {
  let r = -1;
  const u = [];
  for (; ++r < t.length; )
    (t[r].add === "after" ? e : u).push(t[r]);
  ur(e, 0, 0, u);
}
function Zh(e, t) {
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
const ir = Zr(/[A-Za-z]/), wn = Zr(/[\dA-Za-z]/), ox = Zr(/[#-'*+\--9=?A-Z^-~]/);
function Jl(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Ul = Zr(/\d/), ax = Zr(/[\dA-Fa-f]/), sx = Zr(/[!-/:-@[-`{-~]/);
function Fe(e) {
  return e !== null && e < -2;
}
function cn(e) {
  return e !== null && (e < 0 || e === 32);
}
function je(e) {
  return e === -2 || e === -1 || e === 32;
}
const lx = Zr(new RegExp("\\p{P}|\\p{S}", "u")), cx = Zr(/\s/);
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
    const s = e.charCodeAt(r);
    let l = "";
    if (s === 37 && wn(e.charCodeAt(r + 1)) && wn(e.charCodeAt(r + 2)))
      o = 2;
    else if (s < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s)) || (l = String.fromCharCode(s));
    else if (s > 55295 && s < 57344) {
      const c = e.charCodeAt(r + 1);
      s < 56320 && c > 56319 && c < 57344 ? (l = String.fromCharCode(s, c), o = 1) : l = "�";
    } else
      l = String.fromCharCode(s);
    l && (t.push(e.slice(u, r), encodeURIComponent(l)), u = r + o + 1, l = ""), o && (r += o, o = 0);
  }
  return t.join("") + e.slice(u);
}
function dt(e, t, r, u) {
  const o = u ? u - 1 : Number.POSITIVE_INFINITY;
  let s = 0;
  return l;
  function l(f) {
    return je(f) ? (e.enter(r), c(f)) : t(f);
  }
  function c(f) {
    return je(f) && s++ < o ? (e.consume(f), c) : (e.exit(r), t(f));
  }
}
const fx = {
  tokenize: dx
};
function dx(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, u, o);
  let r;
  return t;
  function u(c) {
    if (c === null) {
      e.consume(c);
      return;
    }
    return e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), dt(e, t, "linePrefix");
  }
  function o(c) {
    return e.enter("paragraph"), s(c);
  }
  function s(c) {
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
    return Fe(c) ? (e.consume(c), e.exit("chunkText"), s) : (e.consume(c), l);
  }
}
const px = {
  tokenize: hx
}, lp = {
  tokenize: gx
};
function hx(e) {
  const t = this, r = [];
  let u = 0, o, s, l;
  return c;
  function c(k) {
    if (u < r.length) {
      const N = r[u];
      return t.containerState = N[1], e.attempt(N[0].continuation, f, p)(k);
    }
    return p(k);
  }
  function f(k) {
    if (u++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, o && W();
      const N = t.events.length;
      let J = N, G;
      for (; J--; )
        if (t.events[J][0] === "exit" && t.events[J][1].type === "chunkFlow") {
          G = t.events[J][1].end;
          break;
        }
      R(u);
      let j = N;
      for (; j < t.events.length; )
        t.events[j][1].end = {
          ...G
        }, j++;
      return ur(t.events, J + 1, 0, t.events.slice(N)), t.events.length = j, p(k);
    }
    return c(k);
  }
  function p(k) {
    if (u === r.length) {
      if (!o)
        return v(k);
      if (o.currentConstruct && o.currentConstruct.concrete)
        return E(k);
      t.interrupt = !!(o.currentConstruct && !o._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(lp, h, g)(k);
  }
  function h(k) {
    return o && W(), R(u), v(k);
  }
  function g(k) {
    return t.parser.lazy[t.now().line] = u !== r.length, l = t.now().offset, E(k);
  }
  function v(k) {
    return t.containerState = {}, e.attempt(lp, b, E)(k);
  }
  function b(k) {
    return u++, r.push([t.currentConstruct, t.containerState]), v(k);
  }
  function E(k) {
    if (k === null) {
      o && W(), R(0), e.consume(k);
      return;
    }
    return o = o || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: o,
      contentType: "flow",
      previous: s
    }), w(k);
  }
  function w(k) {
    if (k === null) {
      F(e.exit("chunkFlow"), !0), R(0), e.consume(k);
      return;
    }
    return Fe(k) ? (e.consume(k), F(e.exit("chunkFlow")), u = 0, t.interrupt = void 0, c) : (e.consume(k), w);
  }
  function F(k, N) {
    const J = t.sliceStream(k);
    if (N && J.push(null), k.previous = s, s && (s.next = k), s = k, o.defineSkip(k.start), o.write(J), t.parser.lazy[k.start.line]) {
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
      for (R(u), G = j; G < t.events.length; )
        t.events[G][1].end = {
          ...K
        }, G++;
      ur(t.events, M + 1, 0, t.events.slice(j)), t.events.length = G;
    }
  }
  function R(k) {
    let N = r.length;
    for (; N-- > k; ) {
      const J = r[N];
      t.containerState = J[1], J[0].exit.call(t, e);
    }
    r.length = k;
  }
  function W() {
    o.write([null]), s = void 0, o = void 0, t.containerState._closeFlow = void 0;
  }
}
function gx(e, t, r) {
  return dt(e, e.attempt(this.parser.constructs.document, t, r), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function cp(e) {
  if (e === null || cn(e) || cx(e))
    return 1;
  if (lx(e))
    return 2;
}
function Rc(e, t, r) {
  const u = [];
  let o = -1;
  for (; ++o < e.length; ) {
    const s = e[o].resolveAll;
    s && !u.includes(s) && (t = s(t, r), u.push(s));
  }
  return t;
}
const jl = {
  name: "attention",
  resolveAll: mx,
  tokenize: bx
};
function mx(e, t) {
  let r = -1, u, o, s, l, c, f, p, h;
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
          fp(g, -f), fp(v, f), l = {
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
          }, s = {
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
          }, p = [], e[u][1].end.offset - e[u][1].start.offset && (p = Mn(p, [["enter", e[u][1], t], ["exit", e[u][1], t]])), p = Mn(p, [["enter", o, t], ["enter", l, t], ["exit", l, t], ["enter", s, t]]), p = Mn(p, Rc(t.parser.constructs.insideSpan.null, e.slice(u + 1, r), t)), p = Mn(p, [["exit", s, t], ["enter", c, t], ["exit", c, t], ["exit", o, t]]), e[r][1].end.offset - e[r][1].start.offset ? (h = 2, p = Mn(p, [["enter", e[r][1], t], ["exit", e[r][1], t]])) : h = 0, ur(e, u - 1, r - u + 3, p), r = u + p.length - h - 2;
          break;
        }
    }
  for (r = -1; ++r < e.length; )
    e[r][1].type === "attentionSequence" && (e[r][1].type = "data");
  return e;
}
function bx(e, t) {
  const r = this.parser.constructs.attentionMarkers.null, u = this.previous, o = cp(u);
  let s;
  return l;
  function l(f) {
    return s = f, e.enter("attentionSequence"), c(f);
  }
  function c(f) {
    if (f === s)
      return e.consume(f), c;
    const p = e.exit("attentionSequence"), h = cp(f), g = !h || h === 2 && o || r.includes(f), v = !o || o === 2 && h || r.includes(u);
    return p._open = !!(s === 42 ? g : g && (o || !v)), p._close = !!(s === 42 ? v : v && (h || !g)), t(f);
  }
}
function fp(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const yx = {
  name: "autolink",
  tokenize: vx
};
function vx(e, t, r) {
  let u = 0;
  return o;
  function o(b) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(b), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), s;
  }
  function s(b) {
    return ir(b) ? (e.consume(b), l) : b === 64 ? r(b) : p(b);
  }
  function l(b) {
    return b === 43 || b === 45 || b === 46 || wn(b) ? (u = 1, c(b)) : p(b);
  }
  function c(b) {
    return b === 58 ? (e.consume(b), u = 0, f) : (b === 43 || b === 45 || b === 46 || wn(b)) && u++ < 32 ? (e.consume(b), c) : (u = 0, p(b));
  }
  function f(b) {
    return b === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(b), e.exit("autolinkMarker"), e.exit("autolink"), t) : b === null || b === 32 || b === 60 || Jl(b) ? r(b) : (e.consume(b), f);
  }
  function p(b) {
    return b === 64 ? (e.consume(b), h) : ox(b) ? (e.consume(b), p) : r(b);
  }
  function h(b) {
    return wn(b) ? g(b) : r(b);
  }
  function g(b) {
    return b === 46 ? (e.consume(b), u = 0, h) : b === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(b), e.exit("autolinkMarker"), e.exit("autolink"), t) : v(b);
  }
  function v(b) {
    if ((b === 45 || wn(b)) && u++ < 63) {
      const E = b === 45 ? v : g;
      return e.consume(b), E;
    }
    return r(b);
  }
}
const Xa = {
  partial: !0,
  tokenize: Ix
};
function Ix(e, t, r) {
  return u;
  function u(s) {
    return je(s) ? dt(e, o, "linePrefix")(s) : o(s);
  }
  function o(s) {
    return s === null || Fe(s) ? t(s) : r(s);
  }
}
const Yh = {
  continuation: {
    tokenize: xx
  },
  exit: Ax,
  name: "blockQuote",
  tokenize: Cx
};
function Cx(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    if (l === 62) {
      const c = u.containerState;
      return c.open || (e.enter("blockQuote", {
        _container: !0
      }), c.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(l), e.exit("blockQuoteMarker"), s;
    }
    return r(l);
  }
  function s(l) {
    return je(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l));
  }
}
function xx(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return je(l) ? dt(e, s, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : s(l);
  }
  function s(l) {
    return e.attempt(Yh, t, r)(l);
  }
}
function Ax(e) {
  e.exit("blockQuote");
}
const Jh = {
  name: "characterEscape",
  tokenize: wx
};
function wx(e, t, r) {
  return u;
  function u(s) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(s), e.exit("escapeMarker"), o;
  }
  function o(s) {
    return sx(s) ? (e.enter("characterEscapeValue"), e.consume(s), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : r(s);
  }
}
const Uh = {
  name: "characterReference",
  tokenize: Sx
};
function Sx(e, t, r) {
  const u = this;
  let o = 0, s, l;
  return c;
  function c(g) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(g), e.exit("characterReferenceMarker"), f;
  }
  function f(g) {
    return g === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(g), e.exit("characterReferenceMarkerNumeric"), p) : (e.enter("characterReferenceValue"), s = 31, l = wn, h(g));
  }
  function p(g) {
    return g === 88 || g === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(g), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), s = 6, l = ax, h) : (e.enter("characterReferenceValue"), s = 7, l = Ul, h(g));
  }
  function h(g) {
    if (g === 59 && o) {
      const v = e.exit("characterReferenceValue");
      return l === wn && !Pc(u.sliceSerialize(v)) ? r(g) : (e.enter("characterReferenceMarker"), e.consume(g), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return l(g) && o++ < s ? (e.consume(g), h) : r(g);
  }
}
const dp = {
  partial: !0,
  tokenize: Fx
}, pp = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Ex
};
function Ex(e, t, r) {
  const u = this, o = {
    partial: !0,
    tokenize: J
  };
  let s = 0, l = 0, c;
  return f;
  function f(G) {
    return p(G);
  }
  function p(G) {
    const j = u.events[u.events.length - 1];
    return s = j && j[1].type === "linePrefix" ? j[2].sliceSerialize(j[1], !0).length : 0, c = G, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), h(G);
  }
  function h(G) {
    return G === c ? (l++, e.consume(G), h) : l < 3 ? r(G) : (e.exit("codeFencedFenceSequence"), je(G) ? dt(e, g, "whitespace")(G) : g(G));
  }
  function g(G) {
    return G === null || Fe(G) ? (e.exit("codeFencedFence"), u.interrupt ? t(G) : e.check(dp, w, N)(G)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), v(G));
  }
  function v(G) {
    return G === null || Fe(G) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), g(G)) : je(G) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), dt(e, b, "whitespace")(G)) : G === 96 && G === c ? r(G) : (e.consume(G), v);
  }
  function b(G) {
    return G === null || Fe(G) ? g(G) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), E(G));
  }
  function E(G) {
    return G === null || Fe(G) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), g(G)) : G === 96 && G === c ? r(G) : (e.consume(G), E);
  }
  function w(G) {
    return e.attempt(o, N, F)(G);
  }
  function F(G) {
    return e.enter("lineEnding"), e.consume(G), e.exit("lineEnding"), R;
  }
  function R(G) {
    return s > 0 && je(G) ? dt(e, W, "linePrefix", s + 1)(G) : W(G);
  }
  function W(G) {
    return G === null || Fe(G) ? e.check(dp, w, N)(G) : (e.enter("codeFlowValue"), k(G));
  }
  function k(G) {
    return G === null || Fe(G) ? (e.exit("codeFlowValue"), W(G)) : (e.consume(G), k);
  }
  function N(G) {
    return e.exit("codeFenced"), t(G);
  }
  function J(G, j, M) {
    let Y = 0;
    return K;
    function K(ie) {
      return G.enter("lineEnding"), G.consume(ie), G.exit("lineEnding"), q;
    }
    function q(ie) {
      return G.enter("codeFencedFence"), je(ie) ? dt(G, z, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(ie) : z(ie);
    }
    function z(ie) {
      return ie === c ? (G.enter("codeFencedFenceSequence"), pe(ie)) : M(ie);
    }
    function pe(ie) {
      return ie === c ? (Y++, G.consume(ie), pe) : Y >= l ? (G.exit("codeFencedFenceSequence"), je(ie) ? dt(G, we, "whitespace")(ie) : we(ie)) : M(ie);
    }
    function we(ie) {
      return ie === null || Fe(ie) ? (G.exit("codeFencedFence"), j(ie)) : M(ie);
    }
  }
}
function Fx(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return l === null ? r(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), s);
  }
  function s(l) {
    return u.parser.lazy[u.now().line] ? r(l) : t(l);
  }
}
const El = {
  name: "codeIndented",
  tokenize: Rx
}, Px = {
  partial: !0,
  tokenize: Ox
};
function Rx(e, t, r) {
  const u = this;
  return o;
  function o(p) {
    return e.enter("codeIndented"), dt(e, s, "linePrefix", 5)(p);
  }
  function s(p) {
    const h = u.events[u.events.length - 1];
    return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], !0).length >= 4 ? l(p) : r(p);
  }
  function l(p) {
    return p === null ? f(p) : Fe(p) ? e.attempt(Px, l, f)(p) : (e.enter("codeFlowValue"), c(p));
  }
  function c(p) {
    return p === null || Fe(p) ? (e.exit("codeFlowValue"), l(p)) : (e.consume(p), c);
  }
  function f(p) {
    return e.exit("codeIndented"), t(p);
  }
}
function Ox(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return u.parser.lazy[u.now().line] ? r(l) : Fe(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : dt(e, s, "linePrefix", 5)(l);
  }
  function s(l) {
    const c = u.events[u.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? t(l) : Fe(l) ? o(l) : r(l);
  }
}
const _x = {
  name: "codeText",
  previous: Bx,
  resolve: Tx,
  tokenize: Gx
};
function Tx(e) {
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
function Bx(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Gx(e, t, r) {
  let u = 0, o, s;
  return l;
  function l(g) {
    return e.enter("codeText"), e.enter("codeTextSequence"), c(g);
  }
  function c(g) {
    return g === 96 ? (e.consume(g), u++, c) : (e.exit("codeTextSequence"), f(g));
  }
  function f(g) {
    return g === null ? r(g) : g === 32 ? (e.enter("space"), e.consume(g), e.exit("space"), f) : g === 96 ? (s = e.enter("codeTextSequence"), o = 0, h(g)) : Fe(g) ? (e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), f) : (e.enter("codeTextData"), p(g));
  }
  function p(g) {
    return g === null || g === 32 || g === 96 || Fe(g) ? (e.exit("codeTextData"), f(g)) : (e.consume(g), p);
  }
  function h(g) {
    return g === 96 ? (e.consume(g), o++, h) : o === u ? (e.exit("codeTextSequence"), e.exit("codeText"), t(g)) : (s.type = "codeTextData", p(g));
  }
}
class kx {
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
    const s = this.right.splice(this.right.length - o, Number.POSITIVE_INFINITY);
    return u && Lu(this.left, u), s.reverse();
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
function jh(e) {
  const t = {};
  let r = -1, u, o, s, l, c, f, p;
  const h = new kx(e);
  for (; ++r < h.length; ) {
    for (; r in t; )
      r = t[r];
    if (u = h.get(r), r && u[1].type === "chunkFlow" && h.get(r - 1)[1].type === "listItemPrefix" && (f = u[1]._tokenizer.events, s = 0, s < f.length && f[s][1].type === "lineEndingBlank" && (s += 2), s < f.length && f[s][1].type === "content"))
      for (; ++s < f.length && f[s][1].type !== "content"; )
        f[s][1].type === "chunkText" && (f[s][1]._isInFirstContentOfListItem = !0, s++);
    if (u[0] === "enter")
      u[1].contentType && (Object.assign(t, Lx(h, r)), r = t[r], p = !0);
    else if (u[1]._container) {
      for (s = r, o = void 0; s--; )
        if (l = h.get(s), l[1].type === "lineEnding" || l[1].type === "lineEndingBlank")
          l[0] === "enter" && (o && (h.get(o)[1].type = "lineEndingBlank"), l[1].type = "lineEnding", o = s);
        else if (!(l[1].type === "linePrefix" || l[1].type === "listItemIndent")) break;
      o && (u[1].end = {
        ...h.get(o)[1].start
      }, c = h.slice(o, r), c.unshift(u), h.splice(o, r - o + 1, c));
    }
  }
  return ur(e, 0, Number.POSITIVE_INFINITY, h.slice(0)), !p;
}
function Lx(e, t) {
  const r = e.get(t)[1], u = e.get(t)[2];
  let o = t - 1;
  const s = [];
  let l = r._tokenizer;
  l || (l = u.parser[r.contentType](r.start), r._contentTypeTextTrailing && (l._contentTypeTextTrailing = !0));
  const c = l.events, f = [], p = {};
  let h, g, v = -1, b = r, E = 0, w = 0;
  const F = [w];
  for (; b; ) {
    for (; e.get(++o)[1] !== b; )
      ;
    s.push(o), b._tokenizer || (h = u.sliceStream(b), b.next || h.push(null), g && l.defineSkip(b.start), b._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = !0), l.write(h), b._isInFirstContentOfListItem && (l._gfmTasklistFirstContentOfListItem = void 0)), g = b, b = b.next;
  }
  for (b = r; ++v < c.length; )
    // Find a void token that includes a break.
    c[v][0] === "exit" && c[v - 1][0] === "enter" && c[v][1].type === c[v - 1][1].type && c[v][1].start.line !== c[v][1].end.line && (w = v + 1, F.push(w), b._tokenizer = void 0, b.previous = void 0, b = b.next);
  for (l.events = [], b ? (b._tokenizer = void 0, b.previous = void 0) : F.pop(), v = F.length; v--; ) {
    const R = c.slice(F[v], F[v + 1]), W = s.pop();
    f.push([W, W + R.length - 1]), e.splice(W, 2, R);
  }
  for (f.reverse(), v = -1; ++v < f.length; )
    p[E + f[v][0]] = E + f[v][1], E += f[v][1] - f[v][0] - 1;
  return p;
}
const Dx = {
  resolve: Nx,
  tokenize: Vx
}, Mx = {
  partial: !0,
  tokenize: Wx
};
function Nx(e) {
  return jh(e), e;
}
function Vx(e, t) {
  let r;
  return u;
  function u(c) {
    return e.enter("content"), r = e.enter("chunkContent", {
      contentType: "content"
    }), o(c);
  }
  function o(c) {
    return c === null ? s(c) : Fe(c) ? e.check(Mx, l, s)(c) : (e.consume(c), o);
  }
  function s(c) {
    return e.exit("chunkContent"), e.exit("content"), t(c);
  }
  function l(c) {
    return e.consume(c), e.exit("chunkContent"), r.next = e.enter("chunkContent", {
      contentType: "content",
      previous: r
    }), r = r.next, o;
  }
}
function Wx(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), dt(e, s, "linePrefix");
  }
  function s(l) {
    if (l === null || Fe(l))
      return r(l);
    const c = u.events[u.events.length - 1];
    return !u.parser.constructs.disable.null.includes("codeIndented") && c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? t(l) : e.interrupt(u.parser.constructs.flow, r, t)(l);
  }
}
function Qh(e, t, r, u, o, s, l, c, f) {
  const p = f || Number.POSITIVE_INFINITY;
  let h = 0;
  return g;
  function g(R) {
    return R === 60 ? (e.enter(u), e.enter(o), e.enter(s), e.consume(R), e.exit(s), v) : R === null || R === 32 || R === 41 || Jl(R) ? r(R) : (e.enter(u), e.enter(l), e.enter(c), e.enter("chunkString", {
      contentType: "string"
    }), w(R));
  }
  function v(R) {
    return R === 62 ? (e.enter(s), e.consume(R), e.exit(s), e.exit(o), e.exit(u), t) : (e.enter(c), e.enter("chunkString", {
      contentType: "string"
    }), b(R));
  }
  function b(R) {
    return R === 62 ? (e.exit("chunkString"), e.exit(c), v(R)) : R === null || R === 60 || Fe(R) ? r(R) : (e.consume(R), R === 92 ? E : b);
  }
  function E(R) {
    return R === 60 || R === 62 || R === 92 ? (e.consume(R), b) : b(R);
  }
  function w(R) {
    return !h && (R === null || R === 41 || cn(R)) ? (e.exit("chunkString"), e.exit(c), e.exit(l), e.exit(u), t(R)) : h < p && R === 40 ? (e.consume(R), h++, w) : R === 41 ? (e.consume(R), h--, w) : R === null || R === 32 || R === 40 || Jl(R) ? r(R) : (e.consume(R), R === 92 ? F : w);
  }
  function F(R) {
    return R === 40 || R === 41 || R === 92 ? (e.consume(R), w) : w(R);
  }
}
function qh(e, t, r, u, o, s) {
  const l = this;
  let c = 0, f;
  return p;
  function p(b) {
    return e.enter(u), e.enter(o), e.consume(b), e.exit(o), e.enter(s), h;
  }
  function h(b) {
    return c > 999 || b === null || b === 91 || b === 93 && !f || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    b === 94 && !c && "_hiddenFootnoteSupport" in l.parser.constructs ? r(b) : b === 93 ? (e.exit(s), e.enter(o), e.consume(b), e.exit(o), e.exit(u), t) : Fe(b) ? (e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), h) : (e.enter("chunkString", {
      contentType: "string"
    }), g(b));
  }
  function g(b) {
    return b === null || b === 91 || b === 93 || Fe(b) || c++ > 999 ? (e.exit("chunkString"), h(b)) : (e.consume(b), f || (f = !je(b)), b === 92 ? v : g);
  }
  function v(b) {
    return b === 91 || b === 92 || b === 93 ? (e.consume(b), c++, g) : g(b);
  }
}
function $h(e, t, r, u, o, s) {
  let l;
  return c;
  function c(v) {
    return v === 34 || v === 39 || v === 40 ? (e.enter(u), e.enter(o), e.consume(v), e.exit(o), l = v === 40 ? 41 : v, f) : r(v);
  }
  function f(v) {
    return v === l ? (e.enter(o), e.consume(v), e.exit(o), e.exit(u), t) : (e.enter(s), p(v));
  }
  function p(v) {
    return v === l ? (e.exit(s), f(l)) : v === null ? r(v) : Fe(v) ? (e.enter("lineEnding"), e.consume(v), e.exit("lineEnding"), dt(e, p, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), h(v));
  }
  function h(v) {
    return v === l || v === null || Fe(v) ? (e.exit("chunkString"), p(v)) : (e.consume(v), v === 92 ? g : h);
  }
  function g(v) {
    return v === l || v === 92 ? (e.consume(v), h) : h(v);
  }
}
function Hu(e, t) {
  let r;
  return u;
  function u(o) {
    return Fe(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), r = !0, u) : je(o) ? dt(e, u, r ? "linePrefix" : "lineSuffix")(o) : t(o);
  }
}
const Xx = {
  name: "definition",
  tokenize: zx
}, Hx = {
  partial: !0,
  tokenize: Zx
};
function zx(e, t, r) {
  const u = this;
  let o;
  return s;
  function s(b) {
    return e.enter("definition"), l(b);
  }
  function l(b) {
    return qh.call(
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
    return cn(b) ? Hu(e, p)(b) : p(b);
  }
  function p(b) {
    return Qh(
      e,
      h,
      // Note: we don’t need to reset the way `markdown-rs` does.
      r,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(b);
  }
  function h(b) {
    return e.attempt(Hx, g, g)(b);
  }
  function g(b) {
    return je(b) ? dt(e, v, "whitespace")(b) : v(b);
  }
  function v(b) {
    return b === null || Fe(b) ? (e.exit("definition"), u.parser.defined.push(o), t(b)) : r(b);
  }
}
function Zx(e, t, r) {
  return u;
  function u(c) {
    return cn(c) ? Hu(e, o)(c) : r(c);
  }
  function o(c) {
    return $h(e, s, r, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(c);
  }
  function s(c) {
    return je(c) ? dt(e, l, "whitespace")(c) : l(c);
  }
  function l(c) {
    return c === null || Fe(c) ? t(c) : r(c);
  }
}
const Yx = {
  name: "hardBreakEscape",
  tokenize: Jx
};
function Jx(e, t, r) {
  return u;
  function u(s) {
    return e.enter("hardBreakEscape"), e.consume(s), o;
  }
  function o(s) {
    return Fe(s) ? (e.exit("hardBreakEscape"), t(s)) : r(s);
  }
}
const Ux = {
  name: "headingAtx",
  resolve: jx,
  tokenize: Qx
};
function jx(e, t) {
  let r = e.length - 2, u = 3, o, s;
  return e[u][1].type === "whitespace" && (u += 2), r - 2 > u && e[r][1].type === "whitespace" && (r -= 2), e[r][1].type === "atxHeadingSequence" && (u === r - 1 || r - 4 > u && e[r - 2][1].type === "whitespace") && (r -= u + 1 === r ? 2 : 4), r > u && (o = {
    type: "atxHeadingText",
    start: e[u][1].start,
    end: e[r][1].end
  }, s = {
    type: "chunkText",
    start: e[u][1].start,
    end: e[r][1].end,
    contentType: "text"
  }, ur(e, u, r - u + 1, [["enter", o, t], ["enter", s, t], ["exit", s, t], ["exit", o, t]])), e;
}
function Qx(e, t, r) {
  let u = 0;
  return o;
  function o(h) {
    return e.enter("atxHeading"), s(h);
  }
  function s(h) {
    return e.enter("atxHeadingSequence"), l(h);
  }
  function l(h) {
    return h === 35 && u++ < 6 ? (e.consume(h), l) : h === null || cn(h) ? (e.exit("atxHeadingSequence"), c(h)) : r(h);
  }
  function c(h) {
    return h === 35 ? (e.enter("atxHeadingSequence"), f(h)) : h === null || Fe(h) ? (e.exit("atxHeading"), t(h)) : je(h) ? dt(e, c, "whitespace")(h) : (e.enter("atxHeadingText"), p(h));
  }
  function f(h) {
    return h === 35 ? (e.consume(h), f) : (e.exit("atxHeadingSequence"), c(h));
  }
  function p(h) {
    return h === null || h === 35 || cn(h) ? (e.exit("atxHeadingText"), c(h)) : (e.consume(h), p);
  }
}
const qx = [
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
], hp = ["pre", "script", "style", "textarea"], $x = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: tA,
  tokenize: nA
}, Kx = {
  partial: !0,
  tokenize: iA
}, eA = {
  partial: !0,
  tokenize: rA
};
function tA(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function nA(e, t, r) {
  const u = this;
  let o, s, l, c, f;
  return p;
  function p(S) {
    return h(S);
  }
  function h(S) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(S), g;
  }
  function g(S) {
    return S === 33 ? (e.consume(S), v) : S === 47 ? (e.consume(S), s = !0, w) : S === 63 ? (e.consume(S), o = 3, u.interrupt ? t : x) : ir(S) ? (e.consume(S), l = String.fromCharCode(S), F) : r(S);
  }
  function v(S) {
    return S === 45 ? (e.consume(S), o = 2, b) : S === 91 ? (e.consume(S), o = 5, c = 0, E) : ir(S) ? (e.consume(S), o = 4, u.interrupt ? t : x) : r(S);
  }
  function b(S) {
    return S === 45 ? (e.consume(S), u.interrupt ? t : x) : r(S);
  }
  function E(S) {
    const Je = "CDATA[";
    return S === Je.charCodeAt(c++) ? (e.consume(S), c === Je.length ? u.interrupt ? t : z : E) : r(S);
  }
  function w(S) {
    return ir(S) ? (e.consume(S), l = String.fromCharCode(S), F) : r(S);
  }
  function F(S) {
    if (S === null || S === 47 || S === 62 || cn(S)) {
      const Je = S === 47, fe = l.toLowerCase();
      return !Je && !s && hp.includes(fe) ? (o = 1, u.interrupt ? t(S) : z(S)) : qx.includes(l.toLowerCase()) ? (o = 6, Je ? (e.consume(S), R) : u.interrupt ? t(S) : z(S)) : (o = 7, u.interrupt && !u.parser.lazy[u.now().line] ? r(S) : s ? W(S) : k(S));
    }
    return S === 45 || wn(S) ? (e.consume(S), l += String.fromCharCode(S), F) : r(S);
  }
  function R(S) {
    return S === 62 ? (e.consume(S), u.interrupt ? t : z) : r(S);
  }
  function W(S) {
    return je(S) ? (e.consume(S), W) : K(S);
  }
  function k(S) {
    return S === 47 ? (e.consume(S), K) : S === 58 || S === 95 || ir(S) ? (e.consume(S), N) : je(S) ? (e.consume(S), k) : K(S);
  }
  function N(S) {
    return S === 45 || S === 46 || S === 58 || S === 95 || wn(S) ? (e.consume(S), N) : J(S);
  }
  function J(S) {
    return S === 61 ? (e.consume(S), G) : je(S) ? (e.consume(S), J) : k(S);
  }
  function G(S) {
    return S === null || S === 60 || S === 61 || S === 62 || S === 96 ? r(S) : S === 34 || S === 39 ? (e.consume(S), f = S, j) : je(S) ? (e.consume(S), G) : M(S);
  }
  function j(S) {
    return S === f ? (e.consume(S), f = null, Y) : S === null || Fe(S) ? r(S) : (e.consume(S), j);
  }
  function M(S) {
    return S === null || S === 34 || S === 39 || S === 47 || S === 60 || S === 61 || S === 62 || S === 96 || cn(S) ? J(S) : (e.consume(S), M);
  }
  function Y(S) {
    return S === 47 || S === 62 || je(S) ? k(S) : r(S);
  }
  function K(S) {
    return S === 62 ? (e.consume(S), q) : r(S);
  }
  function q(S) {
    return S === null || Fe(S) ? z(S) : je(S) ? (e.consume(S), q) : r(S);
  }
  function z(S) {
    return S === 45 && o === 2 ? (e.consume(S), be) : S === 60 && o === 1 ? (e.consume(S), xe) : S === 62 && o === 4 ? (e.consume(S), he) : S === 63 && o === 3 ? (e.consume(S), x) : S === 93 && o === 5 ? (e.consume(S), te) : Fe(S) && (o === 6 || o === 7) ? (e.exit("htmlFlowData"), e.check(Kx, Se, pe)(S)) : S === null || Fe(S) ? (e.exit("htmlFlowData"), pe(S)) : (e.consume(S), z);
  }
  function pe(S) {
    return e.check(eA, we, Se)(S);
  }
  function we(S) {
    return e.enter("lineEnding"), e.consume(S), e.exit("lineEnding"), ie;
  }
  function ie(S) {
    return S === null || Fe(S) ? pe(S) : (e.enter("htmlFlowData"), z(S));
  }
  function be(S) {
    return S === 45 ? (e.consume(S), x) : z(S);
  }
  function xe(S) {
    return S === 47 ? (e.consume(S), l = "", Pe) : z(S);
  }
  function Pe(S) {
    if (S === 62) {
      const Je = l.toLowerCase();
      return hp.includes(Je) ? (e.consume(S), he) : z(S);
    }
    return ir(S) && l.length < 8 ? (e.consume(S), l += String.fromCharCode(S), Pe) : z(S);
  }
  function te(S) {
    return S === 93 ? (e.consume(S), x) : z(S);
  }
  function x(S) {
    return S === 62 ? (e.consume(S), he) : S === 45 && o === 2 ? (e.consume(S), x) : z(S);
  }
  function he(S) {
    return S === null || Fe(S) ? (e.exit("htmlFlowData"), Se(S)) : (e.consume(S), he);
  }
  function Se(S) {
    return e.exit("htmlFlow"), t(S);
  }
}
function rA(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return Fe(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), s) : r(l);
  }
  function s(l) {
    return u.parser.lazy[u.now().line] ? r(l) : t(l);
  }
}
function iA(e, t, r) {
  return u;
  function u(o) {
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), e.attempt(Xa, t, r);
  }
}
const uA = {
  name: "htmlText",
  tokenize: oA
};
function oA(e, t, r) {
  const u = this;
  let o, s, l;
  return c;
  function c(x) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(x), f;
  }
  function f(x) {
    return x === 33 ? (e.consume(x), p) : x === 47 ? (e.consume(x), J) : x === 63 ? (e.consume(x), k) : ir(x) ? (e.consume(x), M) : r(x);
  }
  function p(x) {
    return x === 45 ? (e.consume(x), h) : x === 91 ? (e.consume(x), s = 0, E) : ir(x) ? (e.consume(x), W) : r(x);
  }
  function h(x) {
    return x === 45 ? (e.consume(x), b) : r(x);
  }
  function g(x) {
    return x === null ? r(x) : x === 45 ? (e.consume(x), v) : Fe(x) ? (l = g, xe(x)) : (e.consume(x), g);
  }
  function v(x) {
    return x === 45 ? (e.consume(x), b) : g(x);
  }
  function b(x) {
    return x === 62 ? be(x) : x === 45 ? v(x) : g(x);
  }
  function E(x) {
    const he = "CDATA[";
    return x === he.charCodeAt(s++) ? (e.consume(x), s === he.length ? w : E) : r(x);
  }
  function w(x) {
    return x === null ? r(x) : x === 93 ? (e.consume(x), F) : Fe(x) ? (l = w, xe(x)) : (e.consume(x), w);
  }
  function F(x) {
    return x === 93 ? (e.consume(x), R) : w(x);
  }
  function R(x) {
    return x === 62 ? be(x) : x === 93 ? (e.consume(x), R) : w(x);
  }
  function W(x) {
    return x === null || x === 62 ? be(x) : Fe(x) ? (l = W, xe(x)) : (e.consume(x), W);
  }
  function k(x) {
    return x === null ? r(x) : x === 63 ? (e.consume(x), N) : Fe(x) ? (l = k, xe(x)) : (e.consume(x), k);
  }
  function N(x) {
    return x === 62 ? be(x) : k(x);
  }
  function J(x) {
    return ir(x) ? (e.consume(x), G) : r(x);
  }
  function G(x) {
    return x === 45 || wn(x) ? (e.consume(x), G) : j(x);
  }
  function j(x) {
    return Fe(x) ? (l = j, xe(x)) : je(x) ? (e.consume(x), j) : be(x);
  }
  function M(x) {
    return x === 45 || wn(x) ? (e.consume(x), M) : x === 47 || x === 62 || cn(x) ? Y(x) : r(x);
  }
  function Y(x) {
    return x === 47 ? (e.consume(x), be) : x === 58 || x === 95 || ir(x) ? (e.consume(x), K) : Fe(x) ? (l = Y, xe(x)) : je(x) ? (e.consume(x), Y) : be(x);
  }
  function K(x) {
    return x === 45 || x === 46 || x === 58 || x === 95 || wn(x) ? (e.consume(x), K) : q(x);
  }
  function q(x) {
    return x === 61 ? (e.consume(x), z) : Fe(x) ? (l = q, xe(x)) : je(x) ? (e.consume(x), q) : Y(x);
  }
  function z(x) {
    return x === null || x === 60 || x === 61 || x === 62 || x === 96 ? r(x) : x === 34 || x === 39 ? (e.consume(x), o = x, pe) : Fe(x) ? (l = z, xe(x)) : je(x) ? (e.consume(x), z) : (e.consume(x), we);
  }
  function pe(x) {
    return x === o ? (e.consume(x), o = void 0, ie) : x === null ? r(x) : Fe(x) ? (l = pe, xe(x)) : (e.consume(x), pe);
  }
  function we(x) {
    return x === null || x === 34 || x === 39 || x === 60 || x === 61 || x === 96 ? r(x) : x === 47 || x === 62 || cn(x) ? Y(x) : (e.consume(x), we);
  }
  function ie(x) {
    return x === 47 || x === 62 || cn(x) ? Y(x) : r(x);
  }
  function be(x) {
    return x === 62 ? (e.consume(x), e.exit("htmlTextData"), e.exit("htmlText"), t) : r(x);
  }
  function xe(x) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(x), e.exit("lineEnding"), Pe;
  }
  function Pe(x) {
    return je(x) ? dt(e, te, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(x) : te(x);
  }
  function te(x) {
    return e.enter("htmlTextData"), l(x);
  }
}
const Oc = {
  name: "labelEnd",
  resolveAll: cA,
  resolveTo: fA,
  tokenize: dA
}, aA = {
  tokenize: pA
}, sA = {
  tokenize: hA
}, lA = {
  tokenize: gA
};
function cA(e) {
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
function fA(e, t) {
  let r = e.length, u = 0, o, s, l, c;
  for (; r--; )
    if (o = e[r][1], s) {
      if (o.type === "link" || o.type === "labelLink" && o._inactive)
        break;
      e[r][0] === "enter" && o.type === "labelLink" && (o._inactive = !0);
    } else if (l) {
      if (e[r][0] === "enter" && (o.type === "labelImage" || o.type === "labelLink") && !o._balanced && (s = r, o.type !== "labelLink")) {
        u = 2;
        break;
      }
    } else o.type === "labelEnd" && (l = r);
  const f = {
    type: e[s][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[s][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, p = {
    type: "label",
    start: {
      ...e[s][1].start
    },
    end: {
      ...e[l][1].end
    }
  }, h = {
    type: "labelText",
    start: {
      ...e[s + u + 2][1].end
    },
    end: {
      ...e[l - 2][1].start
    }
  };
  return c = [["enter", f, t], ["enter", p, t]], c = Mn(c, e.slice(s + 1, s + u + 3)), c = Mn(c, [["enter", h, t]]), c = Mn(c, Rc(t.parser.constructs.insideSpan.null, e.slice(s + u + 4, l - 3), t)), c = Mn(c, [["exit", h, t], e[l - 2], e[l - 1], ["exit", p, t]]), c = Mn(c, e.slice(l + 1)), c = Mn(c, [["exit", f, t]]), ur(e, s, e.length, c), e;
}
function dA(e, t, r) {
  const u = this;
  let o = u.events.length, s, l;
  for (; o--; )
    if ((u.events[o][1].type === "labelImage" || u.events[o][1].type === "labelLink") && !u.events[o][1]._balanced) {
      s = u.events[o][1];
      break;
    }
  return c;
  function c(v) {
    return s ? s._inactive ? g(v) : (l = u.parser.defined.includes(Zi(u.sliceSerialize({
      start: s.end,
      end: u.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(v), e.exit("labelMarker"), e.exit("labelEnd"), f) : r(v);
  }
  function f(v) {
    return v === 40 ? e.attempt(aA, h, l ? h : g)(v) : v === 91 ? e.attempt(sA, h, l ? p : g)(v) : l ? h(v) : g(v);
  }
  function p(v) {
    return e.attempt(lA, h, g)(v);
  }
  function h(v) {
    return t(v);
  }
  function g(v) {
    return s._balanced = !0, r(v);
  }
}
function pA(e, t, r) {
  return u;
  function u(g) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(g), e.exit("resourceMarker"), o;
  }
  function o(g) {
    return cn(g) ? Hu(e, s)(g) : s(g);
  }
  function s(g) {
    return g === 41 ? h(g) : Qh(e, l, c, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(g);
  }
  function l(g) {
    return cn(g) ? Hu(e, f)(g) : h(g);
  }
  function c(g) {
    return r(g);
  }
  function f(g) {
    return g === 34 || g === 39 || g === 40 ? $h(e, p, r, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(g) : h(g);
  }
  function p(g) {
    return cn(g) ? Hu(e, h)(g) : h(g);
  }
  function h(g) {
    return g === 41 ? (e.enter("resourceMarker"), e.consume(g), e.exit("resourceMarker"), e.exit("resource"), t) : r(g);
  }
}
function hA(e, t, r) {
  const u = this;
  return o;
  function o(c) {
    return qh.call(u, e, s, l, "reference", "referenceMarker", "referenceString")(c);
  }
  function s(c) {
    return u.parser.defined.includes(Zi(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1))) ? t(c) : r(c);
  }
  function l(c) {
    return r(c);
  }
}
function gA(e, t, r) {
  return u;
  function u(s) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(s), e.exit("referenceMarker"), o;
  }
  function o(s) {
    return s === 93 ? (e.enter("referenceMarker"), e.consume(s), e.exit("referenceMarker"), e.exit("reference"), t) : r(s);
  }
}
const mA = {
  name: "labelStartImage",
  resolveAll: Oc.resolveAll,
  tokenize: bA
};
function bA(e, t, r) {
  const u = this;
  return o;
  function o(c) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(c), e.exit("labelImageMarker"), s;
  }
  function s(c) {
    return c === 91 ? (e.enter("labelMarker"), e.consume(c), e.exit("labelMarker"), e.exit("labelImage"), l) : r(c);
  }
  function l(c) {
    return c === 94 && "_hiddenFootnoteSupport" in u.parser.constructs ? r(c) : t(c);
  }
}
const yA = {
  name: "labelStartLink",
  resolveAll: Oc.resolveAll,
  tokenize: vA
};
function vA(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), s;
  }
  function s(l) {
    return l === 94 && "_hiddenFootnoteSupport" in u.parser.constructs ? r(l) : t(l);
  }
}
const Fl = {
  name: "lineEnding",
  tokenize: IA
};
function IA(e, t) {
  return r;
  function r(u) {
    return e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), dt(e, t, "linePrefix");
  }
}
const Aa = {
  name: "thematicBreak",
  tokenize: CA
};
function CA(e, t, r) {
  let u = 0, o;
  return s;
  function s(p) {
    return e.enter("thematicBreak"), l(p);
  }
  function l(p) {
    return o = p, c(p);
  }
  function c(p) {
    return p === o ? (e.enter("thematicBreakSequence"), f(p)) : u >= 3 && (p === null || Fe(p)) ? (e.exit("thematicBreak"), t(p)) : r(p);
  }
  function f(p) {
    return p === o ? (e.consume(p), u++, f) : (e.exit("thematicBreakSequence"), je(p) ? dt(e, c, "whitespace")(p) : c(p));
  }
}
const on = {
  continuation: {
    tokenize: SA
  },
  exit: FA,
  name: "list",
  tokenize: wA
}, xA = {
  partial: !0,
  tokenize: PA
}, AA = {
  partial: !0,
  tokenize: EA
};
function wA(e, t, r) {
  const u = this, o = u.events[u.events.length - 1];
  let s = o && o[1].type === "linePrefix" ? o[2].sliceSerialize(o[1], !0).length : 0, l = 0;
  return c;
  function c(b) {
    const E = u.containerState.type || (b === 42 || b === 43 || b === 45 ? "listUnordered" : "listOrdered");
    if (E === "listUnordered" ? !u.containerState.marker || b === u.containerState.marker : Ul(b)) {
      if (u.containerState.type || (u.containerState.type = E, e.enter(E, {
        _container: !0
      })), E === "listUnordered")
        return e.enter("listItemPrefix"), b === 42 || b === 45 ? e.check(Aa, r, p)(b) : p(b);
      if (!u.interrupt || b === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), f(b);
    }
    return r(b);
  }
  function f(b) {
    return Ul(b) && ++l < 10 ? (e.consume(b), f) : (!u.interrupt || l < 2) && (u.containerState.marker ? b === u.containerState.marker : b === 41 || b === 46) ? (e.exit("listItemValue"), p(b)) : r(b);
  }
  function p(b) {
    return e.enter("listItemMarker"), e.consume(b), e.exit("listItemMarker"), u.containerState.marker = u.containerState.marker || b, e.check(
      Xa,
      // Can’t be empty when interrupting.
      u.interrupt ? r : h,
      e.attempt(xA, v, g)
    );
  }
  function h(b) {
    return u.containerState.initialBlankLine = !0, s++, v(b);
  }
  function g(b) {
    return je(b) ? (e.enter("listItemPrefixWhitespace"), e.consume(b), e.exit("listItemPrefixWhitespace"), v) : r(b);
  }
  function v(b) {
    return u.containerState.size = s + u.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(b);
  }
}
function SA(e, t, r) {
  const u = this;
  return u.containerState._closeFlow = void 0, e.check(Xa, o, s);
  function o(c) {
    return u.containerState.furtherBlankLines = u.containerState.furtherBlankLines || u.containerState.initialBlankLine, dt(e, t, "listItemIndent", u.containerState.size + 1)(c);
  }
  function s(c) {
    return u.containerState.furtherBlankLines || !je(c) ? (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, l(c)) : (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, e.attempt(AA, t, l)(c));
  }
  function l(c) {
    return u.containerState._closeFlow = !0, u.interrupt = void 0, dt(e, e.attempt(on, t, r), "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(c);
  }
}
function EA(e, t, r) {
  const u = this;
  return dt(e, o, "listItemIndent", u.containerState.size + 1);
  function o(s) {
    const l = u.events[u.events.length - 1];
    return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === u.containerState.size ? t(s) : r(s);
  }
}
function FA(e) {
  e.exit(this.containerState.type);
}
function PA(e, t, r) {
  const u = this;
  return dt(e, o, "listItemPrefixWhitespace", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function o(s) {
    const l = u.events[u.events.length - 1];
    return !je(s) && l && l[1].type === "listItemPrefixWhitespace" ? t(s) : r(s);
  }
}
const gp = {
  name: "setextUnderline",
  resolveTo: RA,
  tokenize: OA
};
function RA(e, t) {
  let r = e.length, u, o, s;
  for (; r--; )
    if (e[r][0] === "enter") {
      if (e[r][1].type === "content") {
        u = r;
        break;
      }
      e[r][1].type === "paragraph" && (o = r);
    } else
      e[r][1].type === "content" && e.splice(r, 1), !s && e[r][1].type === "definition" && (s = r);
  const l = {
    type: "setextHeading",
    start: {
      ...e[u][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[o][1].type = "setextHeadingText", s ? (e.splice(o, 0, ["enter", l, t]), e.splice(s + 1, 0, ["exit", e[u][1], t]), e[u][1].end = {
    ...e[s][1].end
  }) : e[u][1] = l, e.push(["exit", l, t]), e;
}
function OA(e, t, r) {
  const u = this;
  let o;
  return s;
  function s(p) {
    let h = u.events.length, g;
    for (; h--; )
      if (u.events[h][1].type !== "lineEnding" && u.events[h][1].type !== "linePrefix" && u.events[h][1].type !== "content") {
        g = u.events[h][1].type === "paragraph";
        break;
      }
    return !u.parser.lazy[u.now().line] && (u.interrupt || g) ? (e.enter("setextHeadingLine"), o = p, l(p)) : r(p);
  }
  function l(p) {
    return e.enter("setextHeadingLineSequence"), c(p);
  }
  function c(p) {
    return p === o ? (e.consume(p), c) : (e.exit("setextHeadingLineSequence"), je(p) ? dt(e, f, "lineSuffix")(p) : f(p));
  }
  function f(p) {
    return p === null || Fe(p) ? (e.exit("setextHeadingLine"), t(p)) : r(p);
  }
}
const _A = {
  tokenize: TA
};
function TA(e) {
  const t = this, r = e.attempt(
    // Try to parse a blank line.
    Xa,
    u,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, o, dt(e, e.attempt(this.parser.constructs.flow, o, e.attempt(Dx, o)), "linePrefix"))
  );
  return r;
  function u(s) {
    if (s === null) {
      e.consume(s);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(s), e.exit("lineEndingBlank"), t.currentConstruct = void 0, r;
  }
  function o(s) {
    if (s === null) {
      e.consume(s);
      return;
    }
    return e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), t.currentConstruct = void 0, r;
  }
}
const BA = {
  resolveAll: eg()
}, GA = Kh("string"), kA = Kh("text");
function Kh(e) {
  return {
    resolveAll: eg(e === "text" ? LA : void 0),
    tokenize: t
  };
  function t(r) {
    const u = this, o = this.parser.constructs[e], s = r.attempt(o, l, c);
    return l;
    function l(h) {
      return p(h) ? s(h) : c(h);
    }
    function c(h) {
      if (h === null) {
        r.consume(h);
        return;
      }
      return r.enter("data"), r.consume(h), f;
    }
    function f(h) {
      return p(h) ? (r.exit("data"), s(h)) : (r.consume(h), f);
    }
    function p(h) {
      if (h === null)
        return !0;
      const g = o[h];
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
    let o = -1, s;
    for (; ++o <= r.length; )
      s === void 0 ? r[o] && r[o][1].type === "data" && (s = o, o++) : (!r[o] || r[o][1].type !== "data") && (o !== s + 2 && (r[s][1].end = r[o - 1][1].end, r.splice(s + 2, o - s - 2), o = s + 2), s = void 0);
    return e ? e(r, u) : r;
  }
}
function LA(e, t) {
  let r = 0;
  for (; ++r <= e.length; )
    if ((r === e.length || e[r][1].type === "lineEnding") && e[r - 1][1].type === "data") {
      const u = e[r - 1][1], o = t.sliceStream(u);
      let s = o.length, l = -1, c = 0, f;
      for (; s--; ) {
        const p = o[s];
        if (typeof p == "string") {
          for (l = p.length; p.charCodeAt(l - 1) === 32; )
            c++, l--;
          if (l) break;
          l = -1;
        } else if (p === -2)
          f = !0, c++;
        else if (p !== -1) {
          s++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && r === e.length && (c = 0), c) {
        const p = {
          type: r === e.length || f || c < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: s ? l : u.start._bufferIndex + l,
            _index: u.start._index + s,
            line: u.end.line,
            column: u.end.column - c,
            offset: u.end.offset - c
          },
          end: {
            ...u.end
          }
        };
        u.end = {
          ...p.start
        }, u.start.offset === u.end.offset ? Object.assign(u, p) : (e.splice(r, 0, ["enter", p, t], ["exit", p, t]), r += 2);
      }
      r++;
    }
  return e;
}
const DA = {
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
  62: Yh
}, MA = {
  91: Xx
}, NA = {
  [-2]: El,
  [-1]: El,
  32: El
}, VA = {
  35: Ux,
  42: Aa,
  45: [gp, Aa],
  60: $x,
  61: gp,
  95: Aa,
  96: pp,
  126: pp
}, WA = {
  38: Uh,
  92: Jh
}, XA = {
  [-5]: Fl,
  [-4]: Fl,
  [-3]: Fl,
  33: mA,
  38: Uh,
  42: jl,
  60: [yx, uA],
  91: yA,
  92: [Yx, Jh],
  93: Oc,
  95: jl,
  96: _x
}, HA = {
  null: [jl, BA]
}, zA = {
  null: [42, 95]
}, ZA = {
  null: []
}, YA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: zA,
  contentInitial: MA,
  disable: ZA,
  document: DA,
  flow: VA,
  flowInitial: NA,
  insideSpan: HA,
  string: WA,
  text: XA
}, Symbol.toStringTag, { value: "Module" }));
function JA(e, t, r) {
  let u = {
    _bufferIndex: -1,
    _index: 0,
    line: r && r.line || 1,
    column: r && r.column || 1,
    offset: r && r.offset || 0
  };
  const o = {}, s = [];
  let l = [], c = [];
  const f = {
    attempt: j(J),
    check: j(G),
    consume: W,
    enter: k,
    exit: N,
    interrupt: j(G, {
      interrupt: !0
    })
  }, p = {
    code: null,
    containerState: {},
    defineSkip: w,
    events: [],
    now: E,
    parser: e,
    previous: null,
    sliceSerialize: v,
    sliceStream: b,
    write: g
  };
  let h = t.tokenize.call(p, f);
  return t.resolveAll && s.push(t), p;
  function g(q) {
    return l = Mn(l, q), F(), l[l.length - 1] !== null ? [] : (M(t, 0), p.events = Rc(s, p.events, p), p.events);
  }
  function v(q, z) {
    return jA(b(q), z);
  }
  function b(q) {
    return UA(l, q);
  }
  function E() {
    const {
      _bufferIndex: q,
      _index: z,
      line: pe,
      column: we,
      offset: ie
    } = u;
    return {
      _bufferIndex: q,
      _index: z,
      line: pe,
      column: we,
      offset: ie
    };
  }
  function w(q) {
    o[q.line] = q.column, K();
  }
  function F() {
    let q;
    for (; u._index < l.length; ) {
      const z = l[u._index];
      if (typeof z == "string")
        for (q = u._index, u._bufferIndex < 0 && (u._bufferIndex = 0); u._index === q && u._bufferIndex < z.length; )
          R(z.charCodeAt(u._bufferIndex));
      else
        R(z);
    }
  }
  function R(q) {
    h = h(q);
  }
  function W(q) {
    Fe(q) ? (u.line++, u.column = 1, u.offset += q === -3 ? 2 : 1, K()) : q !== -1 && (u.column++, u.offset++), u._bufferIndex < 0 ? u._index++ : (u._bufferIndex++, u._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    l[u._index].length && (u._bufferIndex = -1, u._index++)), p.previous = q;
  }
  function k(q, z) {
    const pe = z || {};
    return pe.type = q, pe.start = E(), p.events.push(["enter", pe, p]), c.push(pe), pe;
  }
  function N(q) {
    const z = c.pop();
    return z.end = E(), p.events.push(["exit", z, p]), z;
  }
  function J(q, z) {
    M(q, z.from);
  }
  function G(q, z) {
    z.restore();
  }
  function j(q, z) {
    return pe;
    function pe(we, ie, be) {
      let xe, Pe, te, x;
      return Array.isArray(we) ? (
        /* c8 ignore next 1 */
        Se(we)
      ) : "tokenize" in we ? (
        // Looks like a construct.
        Se([
          /** @type {Construct} */
          we
        ])
      ) : he(we);
      function he(Ee) {
        return lt;
        function lt(Ne) {
          const bt = Ne !== null && Ee[Ne], Vt = Ne !== null && Ee.null, kt = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(bt) ? bt : bt ? [bt] : [],
            ...Array.isArray(Vt) ? Vt : Vt ? [Vt] : []
          ];
          return Se(kt)(Ne);
        }
      }
      function Se(Ee) {
        return xe = Ee, Pe = 0, Ee.length === 0 ? be : S(Ee[Pe]);
      }
      function S(Ee) {
        return lt;
        function lt(Ne) {
          return x = Y(), te = Ee, Ee.partial || (p.currentConstruct = Ee), Ee.name && p.parser.constructs.disable.null.includes(Ee.name) ? fe() : Ee.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            z ? Object.assign(Object.create(p), z) : p,
            f,
            Je,
            fe
          )(Ne);
        }
      }
      function Je(Ee) {
        return q(te, x), ie;
      }
      function fe(Ee) {
        return x.restore(), ++Pe < xe.length ? S(xe[Pe]) : be;
      }
    }
  }
  function M(q, z) {
    q.resolveAll && !s.includes(q) && s.push(q), q.resolve && ur(p.events, z, p.events.length - z, q.resolve(p.events.slice(z), p)), q.resolveTo && (p.events = q.resolveTo(p.events, p));
  }
  function Y() {
    const q = E(), z = p.previous, pe = p.currentConstruct, we = p.events.length, ie = Array.from(c);
    return {
      from: we,
      restore: be
    };
    function be() {
      u = q, p.previous = z, p.currentConstruct = pe, p.events.length = we, c = ie, K();
    }
  }
  function K() {
    u.line in o && u.column < 2 && (u.column = o[u.line], u.offset += o[u.line] - 1);
  }
}
function UA(e, t) {
  const r = t.start._index, u = t.start._bufferIndex, o = t.end._index, s = t.end._bufferIndex;
  let l;
  if (r === o)
    l = [e[r].slice(u, s)];
  else {
    if (l = e.slice(r, o), u > -1) {
      const c = l[0];
      typeof c == "string" ? l[0] = c.slice(u) : l.shift();
    }
    s > 0 && l.push(e[o].slice(0, s));
  }
  return l;
}
function jA(e, t) {
  let r = -1;
  const u = [];
  let o;
  for (; ++r < e.length; ) {
    const s = e[r];
    let l;
    if (typeof s == "string")
      l = s;
    else switch (s) {
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
        l = String.fromCharCode(s);
    }
    o = s === -2, u.push(l);
  }
  return u.join("");
}
function QA(e) {
  const u = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      rx([YA, ...(e || {}).extensions || []])
    ),
    content: o(fx),
    defined: [],
    document: o(px),
    flow: o(_A),
    lazy: {},
    string: o(GA),
    text: o(kA)
  };
  return u;
  function o(s) {
    return l;
    function l(c) {
      return JA(u, s, c);
    }
  }
}
function qA(e) {
  for (; !jh(e); )
    ;
  return e;
}
const mp = /[\0\t\n\r]/g;
function $A() {
  let e = 1, t = "", r = !0, u;
  return o;
  function o(s, l, c) {
    const f = [];
    let p, h, g, v, b;
    for (s = t + (typeof s == "string" ? s.toString() : new TextDecoder(l || void 0).decode(s)), g = 0, t = "", r && (s.charCodeAt(0) === 65279 && g++, r = void 0); g < s.length; ) {
      if (mp.lastIndex = g, p = mp.exec(s), v = p && p.index !== void 0 ? p.index : s.length, b = s.charCodeAt(v), !p) {
        t = s.slice(g);
        break;
      }
      if (b === 10 && g === v && u)
        f.push(-3), u = void 0;
      else
        switch (u && (f.push(-5), u = void 0), g < v && (f.push(s.slice(g, v)), e += v - g), b) {
          case 0: {
            f.push(65533), e++;
            break;
          }
          case 9: {
            for (h = Math.ceil(e / 4) * 4, f.push(-2); e++ < h; ) f.push(-1);
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
const KA = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function ew(e) {
  return e.replace(KA, tw);
}
function tw(e, t, r) {
  if (t)
    return t;
  if (r.charCodeAt(0) === 35) {
    const o = r.charCodeAt(1), s = o === 120 || o === 88;
    return Zh(r.slice(s ? 2 : 1), s ? 16 : 10);
  }
  return Pc(r) || e;
}
const tg = {}.hasOwnProperty;
function nw(e, t, r) {
  return typeof t != "string" && (r = t, t = void 0), rw(r)(qA(QA(r).document().write($A()(e, t, !0))));
}
function rw(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: s(ct),
      autolinkProtocol: Y,
      autolinkEmail: Y,
      atxHeading: s(ee),
      blockQuote: s(Vt),
      characterEscape: Y,
      characterReference: Y,
      codeFenced: s(kt),
      codeFencedFenceInfo: l,
      codeFencedFenceMeta: l,
      codeIndented: s(kt, l),
      codeText: s(Lt, l),
      codeTextData: Y,
      data: Y,
      codeFlowValue: Y,
      definition: s(Sn),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: s(Ct),
      hardBreakEscape: s(ue),
      hardBreakTrailing: s(ue),
      htmlFlow: s(ce, l),
      htmlFlowData: Y,
      htmlText: s(ce, l),
      htmlTextData: Y,
      image: s(De),
      label: l,
      link: s(ct),
      listItem: s(Rt),
      listItemValue: v,
      listOrdered: s(et, g),
      listUnordered: s(et),
      paragraph: s(Nn),
      reference: S,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: s(ee),
      strong: s(nt),
      thematicBreak: s(Qe)
    },
    exit: {
      atxHeading: f(),
      atxHeadingSequence: J,
      autolink: f(),
      autolinkEmail: bt,
      autolinkProtocol: Ne,
      blockQuote: f(),
      characterEscapeValue: K,
      characterReferenceMarkerHexadecimal: fe,
      characterReferenceMarkerNumeric: fe,
      characterReferenceValue: Ee,
      characterReference: lt,
      codeFenced: f(F),
      codeFencedFence: w,
      codeFencedFenceInfo: b,
      codeFencedFenceMeta: E,
      codeFlowValue: K,
      codeIndented: f(R),
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
      htmlFlow: f(pe),
      htmlFlowData: K,
      htmlText: f(we),
      htmlTextData: K,
      image: f(xe),
      label: te,
      labelText: Pe,
      lineEnding: q,
      link: f(be),
      listItem: f(),
      listOrdered: f(),
      listUnordered: f(),
      paragraph: f(),
      referenceString: Je,
      resourceDestinationString: x,
      resourceTitleString: he,
      resource: Se,
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
    let Q = {
      type: "root",
      children: []
    };
    const ge = {
      stack: [Q],
      tokenStack: [],
      config: t,
      enter: c,
      exit: p,
      buffer: l,
      resume: h,
      data: r
    }, Be = [];
    let Ge = -1;
    for (; ++Ge < L.length; )
      if (L[Ge][1].type === "listOrdered" || L[Ge][1].type === "listUnordered")
        if (L[Ge][0] === "enter")
          Be.push(Ge);
        else {
          const Tt = Be.pop();
          Ge = o(L, Tt, Ge);
        }
    for (Ge = -1; ++Ge < L.length; ) {
      const Tt = t[L[Ge][0]];
      tg.call(Tt, L[Ge][1].type) && Tt[L[Ge][1].type].call(Object.assign({
        sliceSerialize: L[Ge][2].sliceSerialize
      }, ge), L[Ge][1]);
    }
    if (ge.tokenStack.length > 0) {
      const Tt = ge.tokenStack[ge.tokenStack.length - 1];
      (Tt[1] || bp).call(ge, void 0, Tt[0]);
    }
    for (Q.position = {
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
    }, Ge = -1; ++Ge < t.transforms.length; )
      Q = t.transforms[Ge](Q) || Q;
    return Q;
  }
  function o(L, Q, ge) {
    let Be = Q - 1, Ge = -1, Tt = !1, $t, Zt, En, Kt;
    for (; ++Be <= ge; ) {
      const St = L[Be];
      switch (St[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          St[0] === "enter" ? Ge++ : Ge--, Kt = void 0;
          break;
        }
        case "lineEndingBlank": {
          St[0] === "enter" && ($t && !Kt && !Ge && !En && (En = Be), Kt = void 0);
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
      if (!Ge && St[0] === "enter" && St[1].type === "listItemPrefix" || Ge === -1 && St[0] === "exit" && (St[1].type === "listUnordered" || St[1].type === "listOrdered")) {
        if ($t) {
          let pn = Be;
          for (Zt = void 0; pn--; ) {
            const hn = L[pn];
            if (hn[1].type === "lineEnding" || hn[1].type === "lineEndingBlank") {
              if (hn[0] === "exit") continue;
              Zt && (L[Zt][1].type = "lineEndingBlank", Tt = !0), hn[1].type = "lineEnding", Zt = pn;
            } else if (!(hn[1].type === "linePrefix" || hn[1].type === "blockQuotePrefix" || hn[1].type === "blockQuotePrefixWhitespace" || hn[1].type === "blockQuoteMarker" || hn[1].type === "listItemIndent")) break;
          }
          En && (!Zt || En < Zt) && ($t._spread = !0), $t.end = Object.assign({}, Zt ? L[Zt][1].start : St[1].end), L.splice(Zt || Be, 0, ["exit", $t, St[2]]), Be++, ge++;
        }
        if (St[1].type === "listItemPrefix") {
          const pn = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, St[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          $t = pn, L.splice(Be, 0, ["enter", pn, St[2]]), Be++, ge++, En = void 0, Kt = !0;
        }
      }
    }
    return L[Q][1]._spread = Tt, ge;
  }
  function s(L, Q) {
    return ge;
    function ge(Be) {
      c.call(this, L(Be), Be), Q && Q.call(this, Be);
    }
  }
  function l() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function c(L, Q, ge) {
    this.stack[this.stack.length - 1].children.push(L), this.stack.push(L), this.tokenStack.push([Q, ge || void 0]), L.position = {
      start: kr(Q.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function f(L) {
    return Q;
    function Q(ge) {
      L && L.call(this, ge), p.call(this, ge);
    }
  }
  function p(L, Q) {
    const ge = this.stack.pop(), Be = this.tokenStack.pop();
    if (Be)
      Be[0].type !== L.type && (Q ? Q.call(this, L, Be[0]) : (Be[1] || bp).call(this, L, Be[0]));
    else throw new Error("Cannot close `" + L.type + "` (" + Xu({
      start: L.start,
      end: L.end
    }) + "): it’s not open");
    ge.position.end = kr(L.end);
  }
  function h() {
    return tx(this.stack.pop());
  }
  function g() {
    this.data.expectingFirstListItemValue = !0;
  }
  function v(L) {
    if (this.data.expectingFirstListItemValue) {
      const Q = this.stack[this.stack.length - 2];
      Q.start = Number.parseInt(this.sliceSerialize(L), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function b() {
    const L = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.lang = L;
  }
  function E() {
    const L = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.meta = L;
  }
  function w() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function F() {
    const L = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.value = L.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function R() {
    const L = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.value = L.replace(/(\r?\n|\r)$/g, "");
  }
  function W(L) {
    const Q = this.resume(), ge = this.stack[this.stack.length - 1];
    ge.label = Q, ge.identifier = Zi(this.sliceSerialize(L)).toLowerCase();
  }
  function k() {
    const L = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.title = L;
  }
  function N() {
    const L = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.url = L;
  }
  function J(L) {
    const Q = this.stack[this.stack.length - 1];
    if (!Q.depth) {
      const ge = this.sliceSerialize(L).length;
      Q.depth = ge;
    }
  }
  function G() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function j(L) {
    const Q = this.stack[this.stack.length - 1];
    Q.depth = this.sliceSerialize(L).codePointAt(0) === 61 ? 1 : 2;
  }
  function M() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function Y(L) {
    const ge = this.stack[this.stack.length - 1].children;
    let Be = ge[ge.length - 1];
    (!Be || Be.type !== "text") && (Be = rt(), Be.position = {
      start: kr(L.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, ge.push(Be)), this.stack.push(Be);
  }
  function K(L) {
    const Q = this.stack.pop();
    Q.value += this.sliceSerialize(L), Q.position.end = kr(L.end);
  }
  function q(L) {
    const Q = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const ge = Q.children[Q.children.length - 1];
      ge.position.end = kr(L.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(Q.type) && (Y.call(this, L), K.call(this, L));
  }
  function z() {
    this.data.atHardBreak = !0;
  }
  function pe() {
    const L = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.value = L;
  }
  function we() {
    const L = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.value = L;
  }
  function ie() {
    const L = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.value = L;
  }
  function be() {
    const L = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const Q = this.data.referenceType || "shortcut";
      L.type += "Reference", L.referenceType = Q, delete L.url, delete L.title;
    } else
      delete L.identifier, delete L.label;
    this.data.referenceType = void 0;
  }
  function xe() {
    const L = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const Q = this.data.referenceType || "shortcut";
      L.type += "Reference", L.referenceType = Q, delete L.url, delete L.title;
    } else
      delete L.identifier, delete L.label;
    this.data.referenceType = void 0;
  }
  function Pe(L) {
    const Q = this.sliceSerialize(L), ge = this.stack[this.stack.length - 2];
    ge.label = ew(Q), ge.identifier = Zi(Q).toLowerCase();
  }
  function te() {
    const L = this.stack[this.stack.length - 1], Q = this.resume(), ge = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, ge.type === "link") {
      const Be = L.children;
      ge.children = Be;
    } else
      ge.alt = Q;
  }
  function x() {
    const L = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.url = L;
  }
  function he() {
    const L = this.resume(), Q = this.stack[this.stack.length - 1];
    Q.title = L;
  }
  function Se() {
    this.data.inReference = void 0;
  }
  function S() {
    this.data.referenceType = "collapsed";
  }
  function Je(L) {
    const Q = this.resume(), ge = this.stack[this.stack.length - 1];
    ge.label = Q, ge.identifier = Zi(this.sliceSerialize(L)).toLowerCase(), this.data.referenceType = "full";
  }
  function fe(L) {
    this.data.characterReferenceType = L.type;
  }
  function Ee(L) {
    const Q = this.sliceSerialize(L), ge = this.data.characterReferenceType;
    let Be;
    ge ? (Be = Zh(Q, ge === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : Be = Pc(Q);
    const Ge = this.stack[this.stack.length - 1];
    Ge.value += Be;
  }
  function lt(L) {
    const Q = this.stack.pop();
    Q.position.end = kr(L.end);
  }
  function Ne(L) {
    K.call(this, L);
    const Q = this.stack[this.stack.length - 1];
    Q.url = this.sliceSerialize(L);
  }
  function bt(L) {
    K.call(this, L);
    const Q = this.stack[this.stack.length - 1];
    Q.url = "mailto:" + this.sliceSerialize(L);
  }
  function Vt() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function kt() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function Lt() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Sn() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Ct() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function ee() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function ue() {
    return {
      type: "break"
    };
  }
  function ce() {
    return {
      type: "html",
      value: ""
    };
  }
  function De() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function ct() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function et(L) {
    return {
      type: "list",
      ordered: L.type === "listOrdered",
      start: null,
      spread: L._spread,
      children: []
    };
  }
  function Rt(L) {
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
  function nt() {
    return {
      type: "strong",
      children: []
    };
  }
  function rt() {
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
    Array.isArray(u) ? ng(e, u) : iw(e, u);
  }
}
function iw(e, t) {
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
function bp(e, t) {
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
function uw(e) {
  const t = this;
  t.parser = r;
  function r(u) {
    return nw(u, {
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
function ow(e, t) {
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
function sw(e, t) {
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
function lw(e, t) {
  const r = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function cw(e, t) {
  const r = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function fw(e, t) {
  const r = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", u = String(t.identifier).toUpperCase(), o = lu(u.toLowerCase()), s = e.footnoteOrder.indexOf(u);
  let l, c = e.footnoteCounts.get(u);
  c === void 0 ? (c = 0, e.footnoteOrder.push(u), l = e.footnoteOrder.length) : l = s + 1, c += 1, e.footnoteCounts.set(u, c);
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
  const p = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [f]
  };
  return e.patch(t, p), e.applyData(t, p);
}
function dw(e, t) {
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
  const o = e.all(t), s = o[0];
  s && s.type === "text" ? s.value = "[" + s.value : o.unshift({ type: "text", value: "[" });
  const l = o[o.length - 1];
  return l && l.type === "text" ? l.value += u : o.push({ type: "text", value: u }), o;
}
function hw(e, t) {
  const r = String(t.identifier).toUpperCase(), u = e.definitionById.get(r);
  if (!u)
    return rg(e, t);
  const o = { src: lu(u.url || ""), alt: t.alt };
  u.title !== null && u.title !== void 0 && (o.title = u.title);
  const s = { type: "element", tagName: "img", properties: o, children: [] };
  return e.patch(t, s), e.applyData(t, s);
}
function gw(e, t) {
  const r = { src: lu(t.url) };
  t.alt !== null && t.alt !== void 0 && (r.alt = t.alt), t.title !== null && t.title !== void 0 && (r.title = t.title);
  const u = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(t, u), e.applyData(t, u);
}
function mw(e, t) {
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
function bw(e, t) {
  const r = String(t.identifier).toUpperCase(), u = e.definitionById.get(r);
  if (!u)
    return rg(e, t);
  const o = { href: lu(u.url || "") };
  u.title !== null && u.title !== void 0 && (o.title = u.title);
  const s = {
    type: "element",
    tagName: "a",
    properties: o,
    children: e.all(t)
  };
  return e.patch(t, s), e.applyData(t, s);
}
function yw(e, t) {
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
function vw(e, t, r) {
  const u = e.all(t), o = r ? Iw(r) : ig(t), s = {}, l = [];
  if (typeof t.checked == "boolean") {
    const h = u[0];
    let g;
    h && h.type === "element" && h.tagName === "p" ? g = h : (g = { type: "element", tagName: "p", properties: {}, children: [] }, u.unshift(g)), g.children.length > 0 && g.children.unshift({ type: "text", value: " " }), g.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), s.className = ["task-list-item"];
  }
  let c = -1;
  for (; ++c < u.length; ) {
    const h = u[c];
    (o || c !== 0 || h.type !== "element" || h.tagName !== "p") && l.push({ type: "text", value: `
` }), h.type === "element" && h.tagName === "p" && !o ? l.push(...h.children) : l.push(h);
  }
  const f = u[u.length - 1];
  f && (o || f.type !== "element" || f.tagName !== "p") && l.push({ type: "text", value: `
` });
  const p = { type: "element", tagName: "li", properties: s, children: l };
  return e.patch(t, p), e.applyData(t, p);
}
function Iw(e) {
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
function Cw(e, t) {
  const r = {}, u = e.all(t);
  let o = -1;
  for (typeof t.start == "number" && t.start !== 1 && (r.start = t.start); ++o < u.length; ) {
    const l = u[o];
    if (l.type === "element" && l.tagName === "li" && l.properties && Array.isArray(l.properties.className) && l.properties.className.includes("task-list-item")) {
      r.className = ["contains-task-list"];
      break;
    }
  }
  const s = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: r,
    children: e.wrap(u, !0)
  };
  return e.patch(t, s), e.applyData(t, s);
}
function xw(e, t) {
  const r = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Aw(e, t) {
  const r = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, r), e.applyData(t, r);
}
function ww(e, t) {
  const r = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Sw(e, t) {
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
    }, c = wc(t.children[1]), f = Mh(t.children[t.children.length - 1]);
    c && f && (l.position = { start: c, end: f }), o.push(l);
  }
  const s = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(o, !0)
  };
  return e.patch(t, s), e.applyData(t, s);
}
function Ew(e, t, r) {
  const u = r ? r.children : void 0, s = (u ? u.indexOf(t) : 1) === 0 ? "th" : "td", l = r && r.type === "table" ? r.align : void 0, c = l ? l.length : t.children.length;
  let f = -1;
  const p = [];
  for (; ++f < c; ) {
    const g = t.children[f], v = {}, b = l ? l[f] : void 0;
    b && (v.align = b);
    let E = { type: "element", tagName: s, properties: v, children: [] };
    g && (E.children = e.all(g), e.patch(g, E), E = e.applyData(g, E)), p.push(E);
  }
  const h = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(p, !0)
  };
  return e.patch(t, h), e.applyData(t, h);
}
function Fw(e, t) {
  const r = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
const yp = 9, vp = 32;
function Pw(e) {
  const t = String(e), r = /\r?\n|\r/g;
  let u = r.exec(t), o = 0;
  const s = [];
  for (; u; )
    s.push(
      Ip(t.slice(o, u.index), o > 0, !0),
      u[0]
    ), o = u.index + u[0].length, u = r.exec(t);
  return s.push(Ip(t.slice(o), o > 0, !1)), s.join("");
}
function Ip(e, t, r) {
  let u = 0, o = e.length;
  if (t) {
    let s = e.codePointAt(u);
    for (; s === yp || s === vp; )
      u++, s = e.codePointAt(u);
  }
  if (r) {
    let s = e.codePointAt(o - 1);
    for (; s === yp || s === vp; )
      o--, s = e.codePointAt(o - 1);
  }
  return o > u ? e.slice(u, o) : "";
}
function Rw(e, t) {
  const r = { type: "text", value: Pw(String(t.value)) };
  return e.patch(t, r), e.applyData(t, r);
}
function Ow(e, t) {
  const r = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, r), e.applyData(t, r);
}
const _w = {
  blockquote: ow,
  break: aw,
  code: sw,
  delete: lw,
  emphasis: cw,
  footnoteReference: fw,
  heading: dw,
  html: pw,
  imageReference: hw,
  image: gw,
  inlineCode: mw,
  linkReference: bw,
  link: yw,
  listItem: vw,
  list: Cw,
  paragraph: xw,
  // @ts-expect-error: root is different, but hard to type.
  root: Aw,
  strong: ww,
  table: Sw,
  tableCell: Fw,
  tableRow: Ew,
  text: Rw,
  thematicBreak: Ow,
  toml: ma,
  yaml: ma,
  definition: ma,
  footnoteDefinition: ma
};
function ma() {
}
const ug = -1, Ha = 0, zu = 1, Ea = 2, _c = 3, Tc = 4, Bc = 5, Gc = 6, og = 7, ag = 8, Cp = typeof self == "object" ? self : globalThis, Tw = (e, t) => {
  const r = (o, s) => (e.set(s, o), o), u = (o) => {
    if (e.has(o))
      return e.get(o);
    const [s, l] = t[o];
    switch (s) {
      case Ha:
      case ug:
        return r(l, o);
      case zu: {
        const c = r([], o);
        for (const f of l)
          c.push(u(f));
        return c;
      }
      case Ea: {
        const c = r({}, o);
        for (const [f, p] of l)
          c[u(f)] = u(p);
        return c;
      }
      case _c:
        return r(new Date(l), o);
      case Tc: {
        const { source: c, flags: f } = l;
        return r(new RegExp(c, f), o);
      }
      case Bc: {
        const c = r(/* @__PURE__ */ new Map(), o);
        for (const [f, p] of l)
          c.set(u(f), u(p));
        return c;
      }
      case Gc: {
        const c = r(/* @__PURE__ */ new Set(), o);
        for (const f of l)
          c.add(u(f));
        return c;
      }
      case og: {
        const { name: c, message: f } = l;
        return r(new Cp[c](f), o);
      }
      case ag:
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
    return r(new Cp[s](l), o);
  };
  return u;
}, xp = (e) => Tw(/* @__PURE__ */ new Map(), e)(0), Xi = "", { toString: Bw } = {}, { keys: Gw } = Object, Du = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Ha, t];
  const r = Bw.call(e).slice(8, -1);
  switch (r) {
    case "Array":
      return [zu, Xi];
    case "Object":
      return [Ea, Xi];
    case "Date":
      return [_c, Xi];
    case "RegExp":
      return [Tc, Xi];
    case "Map":
      return [Bc, Xi];
    case "Set":
      return [Gc, Xi];
    case "DataView":
      return [zu, r];
  }
  return r.includes("Array") ? [zu, r] : r.includes("Error") ? [og, r] : [Ea, r];
}, ba = ([e, t]) => e === Ha && (t === "function" || t === "symbol"), kw = (e, t, r, u) => {
  const o = (l, c) => {
    const f = u.push(l) - 1;
    return r.set(c, f), f;
  }, s = (l) => {
    if (r.has(l))
      return r.get(l);
    let [c, f] = Du(l);
    switch (c) {
      case Ha: {
        let h = l;
        switch (f) {
          case "bigint":
            c = ag, h = l.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + f);
            h = null;
            break;
          case "undefined":
            return o([ug], l);
        }
        return o([c, h], l);
      }
      case zu: {
        if (f) {
          let v = l;
          return f === "DataView" ? v = new Uint8Array(l.buffer) : f === "ArrayBuffer" && (v = new Uint8Array(l)), o([f, [...v]], l);
        }
        const h = [], g = o([c, h], l);
        for (const v of l)
          h.push(s(v));
        return g;
      }
      case Ea: {
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
          return s(l.toJSON());
        const h = [], g = o([c, h], l);
        for (const v of Gw(l))
          (e || !ba(Du(l[v]))) && h.push([s(v), s(l[v])]);
        return g;
      }
      case _c:
        return o([c, l.toISOString()], l);
      case Tc: {
        const { source: h, flags: g } = l;
        return o([c, { source: h, flags: g }], l);
      }
      case Bc: {
        const h = [], g = o([c, h], l);
        for (const [v, b] of l)
          (e || !(ba(Du(v)) || ba(Du(b)))) && h.push([s(v), s(b)]);
        return g;
      }
      case Gc: {
        const h = [], g = o([c, h], l);
        for (const v of l)
          (e || !ba(Du(v))) && h.push(s(v));
        return g;
      }
    }
    const { message: p } = l;
    return o([c, { name: f, message: p }], l);
  };
  return s;
}, Ap = (e, { json: t, lossy: r } = {}) => {
  const u = [];
  return kw(!(t || r), !!t, /* @__PURE__ */ new Map(), u)(e), u;
}, Fa = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? xp(Ap(e, t)) : structuredClone(e)
) : (e, t) => xp(Ap(e, t));
function Lw(e, t) {
  const r = [{ type: "text", value: "↩" }];
  return t > 1 && r.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), r;
}
function Dw(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Mw(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = e.options.footnoteBackContent || Lw, u = e.options.footnoteBackLabel || Dw, o = e.options.footnoteLabel || "Footnotes", s = e.options.footnoteLabelTagName || "h2", l = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, c = [];
  let f = -1;
  for (; ++f < e.footnoteOrder.length; ) {
    const p = e.footnoteById.get(
      e.footnoteOrder[f]
    );
    if (!p)
      continue;
    const h = e.all(p), g = String(p.identifier).toUpperCase(), v = lu(g.toLowerCase());
    let b = 0;
    const E = [], w = e.footnoteCounts.get(g);
    for (; w !== void 0 && ++b <= w; ) {
      E.length > 0 && E.push({ type: "text", value: " " });
      let W = typeof r == "string" ? r : r(f, b);
      typeof W == "string" && (W = { type: "text", value: W }), E.push({
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
    const F = h[h.length - 1];
    if (F && F.type === "element" && F.tagName === "p") {
      const W = F.children[F.children.length - 1];
      W && W.type === "text" ? W.value += " " : F.children.push({ type: "text", value: " " }), F.children.push(...E);
    } else
      h.push(...E);
    const R = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + v },
      children: e.wrap(h, !0)
    };
    e.patch(p, R), c.push(R);
  }
  if (c.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: s,
          properties: {
            ...Fa(l),
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
const sg = (
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
      return Xw;
    if (typeof e == "function")
      return za(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Nw(e) : Vw(e);
    if (typeof e == "string")
      return Ww(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Nw(e) {
  const t = [];
  let r = -1;
  for (; ++r < e.length; )
    t[r] = sg(e[r]);
  return za(u);
  function u(...o) {
    let s = -1;
    for (; ++s < t.length; )
      if (t[s].apply(this, o)) return !0;
    return !1;
  }
}
function Vw(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return za(r);
  function r(u) {
    const o = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      u
    );
    let s;
    for (s in e)
      if (o[s] !== t[s]) return !1;
    return !0;
  }
}
function Ww(e) {
  return za(t);
  function t(r) {
    return r && r.type === e;
  }
}
function za(e) {
  return t;
  function t(r, u, o) {
    return !!(Hw(r) && e.call(
      this,
      r,
      typeof u == "number" ? u : void 0,
      o || void 0
    ));
  }
}
function Xw() {
  return !0;
}
function Hw(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const lg = [], zw = !0, wp = !1, Zw = "skip";
function Yw(e, t, r, u) {
  let o;
  typeof t == "function" && typeof r != "function" ? (u = r, r = t) : o = t;
  const s = sg(o), l = u ? -1 : 1;
  c(e, void 0, [])();
  function c(f, p, h) {
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
      let b = lg, E, w, F;
      if ((!t || s(f, p, h[h.length - 1] || void 0)) && (b = Jw(r(f, h)), b[0] === wp))
        return b;
      if ("children" in f && f.children) {
        const R = (
          /** @type {UnistParent} */
          f
        );
        if (R.children && b[0] !== Zw)
          for (w = (u ? R.children.length : -1) + l, F = h.concat(R); w > -1 && w < R.children.length; ) {
            const W = R.children[w];
            if (E = c(W, w, F)(), E[0] === wp)
              return E;
            w = typeof E[1] == "number" ? E[1] : w + l;
          }
      }
      return b;
    }
  }
}
function Jw(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [zw, e] : e == null ? lg : [e];
}
function cg(e, t, r, u) {
  let o, s, l;
  typeof t == "function" ? (s = void 0, l = t, o = r) : (s = t, l = r, o = u), Yw(e, s, c, o);
  function c(f, p) {
    const h = p[p.length - 1], g = h ? h.children.indexOf(f) : void 0;
    return l(f, g, h);
  }
}
const Ql = {}.hasOwnProperty, Uw = {};
function jw(e, t) {
  const r = t || Uw, u = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), l = { ..._w, ...r.handlers }, c = {
    all: p,
    applyData: qw,
    definitionById: u,
    footnoteById: o,
    footnoteCounts: s,
    footnoteOrder: [],
    handlers: l,
    one: f,
    options: r,
    patch: Qw,
    wrap: Kw
  };
  return cg(e, function(h) {
    if (h.type === "definition" || h.type === "footnoteDefinition") {
      const g = h.type === "definition" ? u : o, v = String(h.identifier).toUpperCase();
      g.has(v) || g.set(v, h);
    }
  }), c;
  function f(h, g) {
    const v = h.type, b = c.handlers[v];
    if (Ql.call(c.handlers, v) && b)
      return b(c, h, g);
    if (c.options.passThrough && c.options.passThrough.includes(v)) {
      if ("children" in h) {
        const { children: w, ...F } = h, R = Fa(F);
        return R.children = c.all(h), R;
      }
      return Fa(h);
    }
    return (c.options.unknownHandler || $w)(c, h, g);
  }
  function p(h) {
    const g = [];
    if ("children" in h) {
      const v = h.children;
      let b = -1;
      for (; ++b < v.length; ) {
        const E = c.one(v[b], h);
        if (E) {
          if (b && v[b - 1].type === "break" && (!Array.isArray(E) && E.type === "text" && (E.value = Sp(E.value)), !Array.isArray(E) && E.type === "element")) {
            const w = E.children[0];
            w && w.type === "text" && (w.value = Sp(w.value));
          }
          Array.isArray(E) ? g.push(...E) : g.push(E);
        }
      }
    }
    return g;
  }
}
function Qw(e, t) {
  e.position && (t.position = BC(e));
}
function qw(e, t) {
  let r = t;
  if (e && e.data) {
    const u = e.data.hName, o = e.data.hChildren, s = e.data.hProperties;
    if (typeof u == "string")
      if (r.type === "element")
        r.tagName = u;
      else {
        const l = "children" in r ? r.children : [r];
        r = { type: "element", tagName: u, properties: {}, children: l };
      }
    r.type === "element" && s && Object.assign(r.properties, Fa(s)), "children" in r && r.children && o !== null && o !== void 0 && (r.children = o);
  }
  return r;
}
function $w(e, t) {
  const r = t.data || {}, u = "value" in t && !(Ql.call(r, "hProperties") || Ql.call(r, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, u), e.applyData(t, u);
}
function Kw(e, t) {
  const r = [];
  let u = -1;
  for (t && r.push({ type: "text", value: `
` }); ++u < e.length; )
    u && r.push({ type: "text", value: `
` }), r.push(e[u]);
  return t && e.length > 0 && r.push({ type: "text", value: `
` }), r;
}
function Sp(e) {
  let t = 0, r = e.charCodeAt(t);
  for (; r === 9 || r === 32; )
    t++, r = e.charCodeAt(t);
  return e.slice(t);
}
function Ep(e, t) {
  const r = jw(e, t), u = r.one(e, void 0), o = Mw(r), s = Array.isArray(u) ? { type: "root", children: u } : u || { type: "root", children: [] };
  return o && s.children.push({ type: "text", value: `
` }, o), s;
}
function eS(e, t) {
  return e && "run" in e ? async function(r, u) {
    const o = (
      /** @type {HastRoot} */
      Ep(r, { file: u, ...t })
    );
    await e.run(o, u);
  } : function(r, u) {
    return (
      /** @type {HastRoot} */
      Ep(r, { file: u, ...e || t })
    );
  };
}
function Fp(e) {
  if (e)
    throw e;
}
var wa = Object.prototype.hasOwnProperty, fg = Object.prototype.toString, Pp = Object.defineProperty, Rp = Object.getOwnPropertyDescriptor, Op = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : fg.call(t) === "[object Array]";
}, _p = function(t) {
  if (!t || fg.call(t) !== "[object Object]")
    return !1;
  var r = wa.call(t, "constructor"), u = t.constructor && t.constructor.prototype && wa.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !r && !u)
    return !1;
  var o;
  for (o in t)
    ;
  return typeof o > "u" || wa.call(t, o);
}, Tp = function(t, r) {
  Pp && r.name === "__proto__" ? Pp(t, r.name, {
    enumerable: !0,
    configurable: !0,
    value: r.newValue,
    writable: !0
  }) : t[r.name] = r.newValue;
}, Bp = function(t, r) {
  if (r === "__proto__")
    if (wa.call(t, r)) {
      if (Rp)
        return Rp(t, r).value;
    } else return;
  return t[r];
}, tS = function e() {
  var t, r, u, o, s, l, c = arguments[0], f = 1, p = arguments.length, h = !1;
  for (typeof c == "boolean" && (h = c, c = arguments[1] || {}, f = 2), (c == null || typeof c != "object" && typeof c != "function") && (c = {}); f < p; ++f)
    if (t = arguments[f], t != null)
      for (r in t)
        u = Bp(c, r), o = Bp(t, r), c !== o && (h && o && (_p(o) || (s = Op(o))) ? (s ? (s = !1, l = u && Op(u) ? u : []) : l = u && _p(u) ? u : {}, Tp(c, { name: r, newValue: e(h, l, o) })) : typeof o < "u" && Tp(c, { name: r, newValue: o }));
  return c;
};
const Pl = /* @__PURE__ */ Va(tS);
function ql(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function nS() {
  const e = [], t = { run: r, use: u };
  return t;
  function r(...o) {
    let s = -1;
    const l = o.pop();
    if (typeof l != "function")
      throw new TypeError("Expected function as last argument, not " + l);
    c(null, ...o);
    function c(f, ...p) {
      const h = e[++s];
      let g = -1;
      if (f) {
        l(f);
        return;
      }
      for (; ++g < o.length; )
        (p[g] === null || p[g] === void 0) && (p[g] = o[g]);
      o = p, h ? rS(h, c)(...p) : l(null, ...p);
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
function rS(e, t) {
  let r;
  return u;
  function u(...l) {
    const c = e.length > l.length;
    let f;
    c && l.push(o);
    try {
      f = e.apply(this, l);
    } catch (p) {
      const h = (
        /** @type {Error} */
        p
      );
      if (c && r)
        throw h;
      return o(h);
    }
    c || (f && f.then && typeof f.then == "function" ? f.then(s, o) : f instanceof Error ? o(f) : s(f));
  }
  function o(l, ...c) {
    r || (r = !0, t(l, ...c));
  }
  function s(l) {
    o(null, l);
  }
}
const er = { basename: iS, dirname: uS, extname: oS, join: aS, sep: "/" };
function iS(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  ro(e);
  let r = 0, u = -1, o = e.length, s;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; o--; )
      if (e.codePointAt(o) === 47) {
        if (s) {
          r = o + 1;
          break;
        }
      } else u < 0 && (s = !0, u = o + 1);
    return u < 0 ? "" : e.slice(r, u);
  }
  if (t === e)
    return "";
  let l = -1, c = t.length - 1;
  for (; o--; )
    if (e.codePointAt(o) === 47) {
      if (s) {
        r = o + 1;
        break;
      }
    } else
      l < 0 && (s = !0, l = o + 1), c > -1 && (e.codePointAt(o) === t.codePointAt(c--) ? c < 0 && (u = o) : (c = -1, u = l));
  return r === u ? u = l : u < 0 && (u = e.length), e.slice(r, u);
}
function uS(e) {
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
function oS(e) {
  ro(e);
  let t = e.length, r = -1, u = 0, o = -1, s = 0, l;
  for (; t--; ) {
    const c = e.codePointAt(t);
    if (c === 47) {
      if (l) {
        u = t + 1;
        break;
      }
      continue;
    }
    r < 0 && (l = !0, r = t + 1), c === 46 ? o < 0 ? o = t : s !== 1 && (s = 1) : o > -1 && (s = -1);
  }
  return o < 0 || r < 0 || // We saw a non-dot character immediately before the dot.
  s === 0 || // The (right-most) trimmed path component is exactly `..`.
  s === 1 && o === r - 1 && o === u + 1 ? "" : e.slice(o, r);
}
function aS(...e) {
  let t = -1, r;
  for (; ++t < e.length; )
    ro(e[t]), e[t] && (r = r === void 0 ? e[t] : r + "/" + e[t]);
  return r === void 0 ? "." : sS(r);
}
function sS(e) {
  ro(e);
  const t = e.codePointAt(0) === 47;
  let r = lS(e, !t);
  return r.length === 0 && !t && (r = "."), r.length > 0 && e.codePointAt(e.length - 1) === 47 && (r += "/"), t ? "/" + r : r;
}
function lS(e, t) {
  let r = "", u = 0, o = -1, s = 0, l = -1, c, f;
  for (; ++l <= e.length; ) {
    if (l < e.length)
      c = e.codePointAt(l);
    else {
      if (c === 47)
        break;
      c = 47;
    }
    if (c === 47) {
      if (!(o === l - 1 || s === 1)) if (o !== l - 1 && s === 2) {
        if (r.length < 2 || u !== 2 || r.codePointAt(r.length - 1) !== 46 || r.codePointAt(r.length - 2) !== 46) {
          if (r.length > 2) {
            if (f = r.lastIndexOf("/"), f !== r.length - 1) {
              f < 0 ? (r = "", u = 0) : (r = r.slice(0, f), u = r.length - 1 - r.lastIndexOf("/")), o = l, s = 0;
              continue;
            }
          } else if (r.length > 0) {
            r = "", u = 0, o = l, s = 0;
            continue;
          }
        }
        t && (r = r.length > 0 ? r + "/.." : "..", u = 2);
      } else
        r.length > 0 ? r += "/" + e.slice(o + 1, l) : r = e.slice(o + 1, l), u = l - o - 1;
      o = l, s = 0;
    } else c === 46 && s > -1 ? s++ : s = -1;
  }
  return r;
}
function ro(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const cS = { cwd: fS };
function fS() {
  return "/";
}
function $l(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function dS(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!$l(e)) {
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
const Rl = (
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
    t ? $l(t) ? r = { path: t } : typeof t == "string" || hS(t) ? r = { value: t } : r = t : r = {}, this.cwd = "cwd" in r ? "" : cS.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let u = -1;
    for (; ++u < Rl.length; ) {
      const s = Rl[u];
      s in r && r[s] !== void 0 && r[s] !== null && (this[s] = s === "history" ? [...r[s]] : r[s]);
    }
    let o;
    for (o in r)
      Rl.includes(o) || (this[o] = r[o]);
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
    _l(t, "basename"), Ol(t, "basename"), this.path = er.join(this.dirname || "", t);
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
    Gp(this.basename, "dirname"), this.path = er.join(t || "", this.basename);
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
    if (Ol(t, "extname"), Gp(this.dirname, "extname"), t) {
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
    $l(t) && (t = dS(t)), _l(t, "path"), this.path !== t && this.history.push(t);
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
    _l(t, "stem"), Ol(t, "stem"), this.path = er.join(this.dirname || "", t + (this.extname || ""));
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
function Ol(e, t) {
  if (e && e.includes(er.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + er.sep + "`"
    );
}
function _l(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Gp(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function hS(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const gS = (
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
    ), o = u[e], s = function() {
      return o.apply(s, arguments);
    };
    return Object.setPrototypeOf(s, u), s;
  }
), mS = {}.hasOwnProperty;
class kc extends gS {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = nS();
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
      new kc()
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
    return typeof t == "string" ? arguments.length === 2 ? (Gl("data", this.frozen), this.namespace[t] = r, this) : mS.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Gl("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    const r = ya(t), u = this.parser || this.Parser;
    return Tl("parse", u), u(String(r), r);
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
    return this.freeze(), Tl("process", this.parser || this.Parser), Bl("process", this.compiler || this.Compiler), r ? o(void 0, r) : new Promise(o);
    function o(s, l) {
      const c = ya(t), f = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        u.parse(c)
      );
      u.run(f, c, function(h, g, v) {
        if (h || !g || !v)
          return p(h);
        const b = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          g
        ), E = u.stringify(b, v);
        vS(E) ? v.value = E : v.result = E, p(
          h,
          /** @type {VFileWithOutput<CompileResult>} */
          v
        );
      });
      function p(h, g) {
        h || !g ? l(h) : s ? s(g) : r(void 0, g);
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
    return this.freeze(), Tl("processSync", this.parser || this.Parser), Bl("processSync", this.compiler || this.Compiler), this.process(t, o), Lp("processSync", "process", r), u;
    function o(s, l) {
      r = !0, Fp(s), u = l;
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
    kp(t), this.freeze();
    const o = this.transformers;
    return !u && typeof r == "function" && (u = r, r = void 0), u ? s(void 0, u) : new Promise(s);
    function s(l, c) {
      const f = ya(r);
      o.run(t, f, p);
      function p(h, g, v) {
        const b = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          g || t
        );
        h ? c(h) : l ? l(b) : u(void 0, b, v);
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
    return this.run(t, r, s), Lp("runSync", "run", u), o;
    function s(l, c) {
      Fp(l), o = c, u = !0;
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
    const u = ya(r), o = this.compiler || this.Compiler;
    return Bl("stringify", o), kp(t), o(t, u);
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
    if (Gl("use", this.frozen), t != null) if (typeof t == "function")
      f(t, r);
    else if (typeof t == "object")
      Array.isArray(t) ? c(t) : l(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function s(p) {
      if (typeof p == "function")
        f(p, []);
      else if (typeof p == "object")
        if (Array.isArray(p)) {
          const [h, ...g] = (
            /** @type {PluginTuple<Array<unknown>>} */
            p
          );
          f(h, g);
        } else
          l(p);
      else
        throw new TypeError("Expected usable value, not `" + p + "`");
    }
    function l(p) {
      if (!("plugins" in p) && !("settings" in p))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      c(p.plugins), p.settings && (o.settings = Pl(!0, o.settings, p.settings));
    }
    function c(p) {
      let h = -1;
      if (p != null) if (Array.isArray(p))
        for (; ++h < p.length; ) {
          const g = p[h];
          s(g);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + p + "`");
    }
    function f(p, h) {
      let g = -1, v = -1;
      for (; ++g < u.length; )
        if (u[g][0] === p) {
          v = g;
          break;
        }
      if (v === -1)
        u.push([p, ...h]);
      else if (h.length > 0) {
        let [b, ...E] = h;
        const w = u[v][1];
        ql(w) && ql(b) && (b = Pl(!0, w, b)), u[v] = [p, b, ...E];
      }
    }
  }
}
const bS = new kc().freeze();
function Tl(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Bl(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Gl(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function kp(e) {
  if (!ql(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Lp(e, t, r) {
  if (!r)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function ya(e) {
  return yS(e) ? e : new dg(e);
}
function yS(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function vS(e) {
  return typeof e == "string" || IS(e);
}
function IS(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const CS = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Dp = [], Mp = { allowDangerousHtml: !0 }, xS = /^(https?|ircs?|mailto|xmpp)$/i, AS = [
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
function pg(e) {
  const t = wS(e), r = SS(e);
  return ES(t.runSync(t.parse(r), r), e);
}
function wS(e) {
  const t = e.rehypePlugins || Dp, r = e.remarkPlugins || Dp, u = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Mp } : Mp;
  return bS().use(uw).use(r).use(eS, u).use(t);
}
function SS(e) {
  const t = e.children || "", r = new dg();
  return typeof t == "string" && (r.value = t), r;
}
function ES(e, t) {
  const r = t.allowedElements, u = t.allowElement, o = t.components, s = t.disallowedElements, l = t.skipHtml, c = t.unwrapDisallowed, f = t.urlTransform || FS;
  for (const h of AS)
    Object.hasOwn(t, h.from) && ("" + h.from + (h.to ? "use `" + h.to + "` instead" : "remove it") + CS + h.id, void 0);
  return t.className && (e = {
    type: "element",
    tagName: "div",
    properties: { className: t.className },
    // Assume no doctypes.
    children: (
      /** @type {Array<ElementContent>} */
      e.type === "root" ? e.children : [e]
    )
  }), cg(e, p), MC(e, {
    Fragment: Eh,
    // @ts-expect-error
    // React components are allowed to return numbers,
    // but not according to the types in hast-util-to-jsx-runtime
    components: o,
    ignoreInvalidStyle: !0,
    jsx: re,
    jsxs: An,
    passKeys: !0,
    passNode: !0
  });
  function p(h, g, v) {
    if (h.type === "raw" && v && typeof g == "number")
      return l ? v.children.splice(g, 1) : v.children[g] = { type: "text", value: h.value }, g;
    if (h.type === "element") {
      let b;
      for (b in Sl)
        if (Object.hasOwn(Sl, b) && Object.hasOwn(h.properties, b)) {
          const E = h.properties[b], w = Sl[b];
          (w === null || w.includes(h.tagName)) && (h.properties[b] = f(String(E || ""), b, h));
        }
    }
    if (h.type === "element") {
      let b = r ? !r.includes(h.tagName) : s ? s.includes(h.tagName) : !1;
      if (!b && u && typeof g == "number" && (b = !u(h, g, v)), b && v && typeof g == "number")
        return c && h.children ? v.children.splice(g, 1, ...h.children) : v.children.splice(g, 1), g;
    }
  }
}
function FS(e) {
  const t = e.indexOf(":"), r = e.indexOf("?"), u = e.indexOf("#"), o = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    o !== -1 && t > o || r !== -1 && t > r || u !== -1 && t > u || // It is a protocol, it should be allowed.
    xS.test(e.slice(0, t)) ? e : ""
  );
}
function Kl({ prop: e }) {
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
  }, s = {
    ...t,
    background: "#fffff2"
  };
  let l = {};
  switch (e.alertType) {
    case "info":
      l = u;
      break;
    case "neutral":
      l = s;
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
    pg,
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
function Dn() {
}
function PS(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ec(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function hg(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Yi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Un(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Np(e, t) {
  const {
    type: r = "all",
    exact: u,
    fetchStatus: o,
    predicate: s,
    queryKey: l,
    stale: c
  } = e;
  if (l) {
    if (u) {
      if (t.queryHash !== Lc(l, t.options))
        return !1;
    } else if (!ju(t.queryKey, l))
      return !1;
  }
  if (r !== "all") {
    const f = t.isActive();
    if (r === "active" && !f || r === "inactive" && f)
      return !1;
  }
  return !(typeof c == "boolean" && t.isStale() !== c || o && o !== t.state.fetchStatus || s && !s(t));
}
function Vp(e, t) {
  const { exact: r, status: u, predicate: o, mutationKey: s } = e;
  if (s) {
    if (!t.options.mutationKey)
      return !1;
    if (r) {
      if (Uu(t.options.mutationKey) !== Uu(s))
        return !1;
    } else if (!ju(t.options.mutationKey, s))
      return !1;
  }
  return !(u && t.state.status !== u || o && !o(t));
}
function Lc(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Uu)(e);
}
function Uu(e) {
  return JSON.stringify(
    e,
    (t, r) => rc(r) ? Object.keys(r).sort().reduce((u, o) => (u[o] = r[o], u), {}) : r
  );
}
function ju(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every((r) => ju(e[r], t[r])) : !1;
}
function tc(e, t) {
  if (e === t)
    return e;
  const r = Wp(e) && Wp(t);
  if (r || rc(e) && rc(t)) {
    const u = r ? e : Object.keys(e), o = u.length, s = r ? t : Object.keys(t), l = s.length, c = r ? [] : {};
    let f = 0;
    for (let p = 0; p < l; p++) {
      const h = r ? p : s[p];
      (!r && u.includes(h) || r) && e[h] === void 0 && t[h] === void 0 ? (c[h] = void 0, f++) : (c[h] = tc(e[h], t[h]), c[h] === e[h] && e[h] !== void 0 && f++);
    }
    return o === l && f === o ? e : c;
  }
  return t;
}
function nc(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Wp(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function rc(e) {
  if (!Xp(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(!Xp(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function Xp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function RS(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function ic(e, t, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(e, t);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return tc(e, t);
      } catch (u) {
        throw console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${u}`
        ), u;
      }
    return tc(e, t);
  }
  return t;
}
function OS(e, t, r = 0) {
  const u = [...e, t];
  return r && u.length > r ? u.slice(1) : u;
}
function _S(e, t, r = 0) {
  const u = [t, ...e];
  return r && u.length > r ? u.slice(0, -1) : u;
}
var Pa = Symbol();
function gg(e, t) {
  return process.env.NODE_ENV !== "production" && e.queryFn === Pa && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`
  ), !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Pa ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var li, Dr, Ui, bh, TS = (bh = class extends io {
  constructor() {
    super();
    Ae(this, li);
    Ae(this, Dr);
    Ae(this, Ui);
    se(this, Ui, (t) => {
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
    this.hasListeners() || ((t = O(this, Dr)) == null || t.call(this), se(this, Dr, void 0));
  }
  setEventListener(t) {
    var r;
    se(this, Ui, t), (r = O(this, Dr)) == null || r.call(this), se(this, Dr, t((u) => {
      typeof u == "boolean" ? this.setFocused(u) : this.onFocus();
    }));
  }
  setFocused(t) {
    O(this, li) !== t && (se(this, li, t), this.onFocus());
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
}, li = new WeakMap(), Dr = new WeakMap(), Ui = new WeakMap(), bh), Dc = new TS(), ji, Mr, Qi, yh, BS = (yh = class extends io {
  constructor() {
    super();
    Ae(this, ji, !0);
    Ae(this, Mr);
    Ae(this, Qi);
    se(this, Qi, (t) => {
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
    this.hasListeners() || ((t = O(this, Mr)) == null || t.call(this), se(this, Mr, void 0));
  }
  setEventListener(t) {
    var r;
    se(this, Qi, t), (r = O(this, Mr)) == null || r.call(this), se(this, Mr, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    O(this, ji) !== t && (se(this, ji, t), this.listeners.forEach((u) => {
      u(t);
    }));
  }
  isOnline() {
    return O(this, ji);
  }
}, ji = new WeakMap(), Mr = new WeakMap(), Qi = new WeakMap(), yh), Ra = new BS();
function uc() {
  let e, t;
  const r = new Promise((o, s) => {
    e = o, t = s;
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
function GS(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function mg(e) {
  return (e ?? "online") === "online" ? Ra.isOnline() : !0;
}
var bg = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function kl(e) {
  return e instanceof bg;
}
function yg(e) {
  let t = !1, r = 0, u = !1, o;
  const s = uc(), l = (w) => {
    var F;
    u || (v(new bg(w)), (F = e.abort) == null || F.call(e));
  }, c = () => {
    t = !0;
  }, f = () => {
    t = !1;
  }, p = () => Dc.isFocused() && (e.networkMode === "always" || Ra.isOnline()) && e.canRun(), h = () => mg(e.networkMode) && e.canRun(), g = (w) => {
    var F;
    u || (u = !0, (F = e.onSuccess) == null || F.call(e, w), o == null || o(), s.resolve(w));
  }, v = (w) => {
    var F;
    u || (u = !0, (F = e.onError) == null || F.call(e, w), o == null || o(), s.reject(w));
  }, b = () => new Promise((w) => {
    var F;
    o = (R) => {
      (u || p()) && w(R);
    }, (F = e.onPause) == null || F.call(e);
  }).then(() => {
    var w;
    o = void 0, u || (w = e.onContinue) == null || w.call(e);
  }), E = () => {
    if (u)
      return;
    let w;
    const F = r === 0 ? e.initialPromise : void 0;
    try {
      w = F ?? e.fn();
    } catch (R) {
      w = Promise.reject(R);
    }
    Promise.resolve(w).then(g).catch((R) => {
      var G;
      if (u)
        return;
      const W = e.retry ?? (bi ? 0 : 3), k = e.retryDelay ?? GS, N = typeof k == "function" ? k(r, R) : k, J = W === !0 || typeof W == "number" && r < W || typeof W == "function" && W(r, R);
      if (t || !J) {
        v(R);
        return;
      }
      r++, (G = e.onFail) == null || G.call(e, r, R), RS(N).then(() => p() ? void 0 : b()).then(() => {
        t ? v(R) : E();
      });
    });
  };
  return {
    promise: s,
    cancel: l,
    continue: () => (o == null || o(), s),
    cancelRetry: c,
    continueRetry: f,
    canStart: h,
    start: () => (h() ? E() : b().then(E), s)
  };
}
var kS = (e) => setTimeout(e, 0);
function LS() {
  let e = [], t = 0, r = (c) => {
    c();
  }, u = (c) => {
    c();
  }, o = kS;
  const s = (c) => {
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
      s(() => {
        c(...f);
      });
    },
    schedule: s,
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
var Nt = LS(), ci, vh, vg = (vh = class {
  constructor() {
    Ae(this, ci);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), ec(this.gcTime) && se(this, ci, setTimeout(() => {
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
    O(this, ci) && (clearTimeout(O(this, ci)), se(this, ci, void 0));
  }
}, ci = new WeakMap(), vh), qi, $i, Ln, fi, Ht, Qu, di, Yn, Ir, Ih, DS = (Ih = class extends vg {
  constructor(t) {
    super();
    Ae(this, Yn);
    Ae(this, qi);
    Ae(this, $i);
    Ae(this, Ln);
    Ae(this, fi);
    Ae(this, Ht);
    Ae(this, Qu);
    Ae(this, di);
    se(this, di, !1), se(this, Qu, t.defaultOptions), this.setOptions(t.options), this.observers = [], se(this, fi, t.client), se(this, Ln, O(this, fi).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, se(this, qi, MS(this.options)), this.state = t.state ?? O(this, qi), this.scheduleGc();
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
    !this.observers.length && this.state.fetchStatus === "idle" && O(this, Ln).remove(this);
  }
  setData(t, r) {
    const u = ic(this.state.data, t, this.options);
    return Ze(this, Yn, Ir).call(this, {
      data: u,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), u;
  }
  setState(t, r) {
    Ze(this, Yn, Ir).call(this, { type: "setState", state: t, setStateOptions: r });
  }
  cancel(t) {
    var u, o;
    const r = (u = O(this, Ht)) == null ? void 0 : u.promise;
    return (o = O(this, Ht)) == null || o.cancel(t), r ? r.then(Dn).catch(Dn) : Promise.resolve();
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
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Pa || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (t) => t.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !hg(this.state.dataUpdatedAt, t);
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
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), O(this, Ln).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((r) => r !== t), this.observers.length || (O(this, Ht) && (O(this, di) ? O(this, Ht).cancel({ revert: !0 }) : O(this, Ht).cancelRetry()), this.scheduleGc()), O(this, Ln).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || Ze(this, Yn, Ir).call(this, { type: "invalidate" });
  }
  fetch(t, r) {
    var f, p, h;
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
        get: () => (se(this, di, !0), u.signal)
      });
    }, s = () => {
      const g = gg(this.options, r), v = {
        client: O(this, fi),
        queryKey: this.queryKey,
        meta: this.meta
      };
      return o(v), se(this, di, !1), this.options.persister ? this.options.persister(
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
      fetchFn: s
    };
    o(l), (f = this.options.behavior) == null || f.onFetch(
      l,
      this
    ), se(this, $i, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((p = l.fetchOptions) == null ? void 0 : p.meta)) && Ze(this, Yn, Ir).call(this, { type: "fetch", meta: (h = l.fetchOptions) == null ? void 0 : h.meta });
    const c = (g) => {
      var v, b, E, w;
      kl(g) && g.silent || Ze(this, Yn, Ir).call(this, {
        type: "error",
        error: g
      }), kl(g) || ((b = (v = O(this, Ln).config).onError) == null || b.call(
        v,
        g,
        this
      ), (w = (E = O(this, Ln).config).onSettled) == null || w.call(
        E,
        this.state.data,
        g,
        this
      )), this.scheduleGc();
    };
    return se(this, Ht, yg({
      initialPromise: r == null ? void 0 : r.initialPromise,
      fn: l.fetchFn,
      abort: u.abort.bind(u),
      onSuccess: (g) => {
        var v, b, E, w;
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
        (b = (v = O(this, Ln).config).onSuccess) == null || b.call(v, g, this), (w = (E = O(this, Ln).config).onSettled) == null || w.call(
          E,
          g,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: c,
      onFail: (g, v) => {
        Ze(this, Yn, Ir).call(this, { type: "failed", failureCount: g, error: v });
      },
      onPause: () => {
        Ze(this, Yn, Ir).call(this, { type: "pause" });
      },
      onContinue: () => {
        Ze(this, Yn, Ir).call(this, { type: "continue" });
      },
      retry: l.options.retry,
      retryDelay: l.options.retryDelay,
      networkMode: l.options.networkMode,
      canRun: () => !0
    })), O(this, Ht).start();
  }
}, qi = new WeakMap(), $i = new WeakMap(), Ln = new WeakMap(), fi = new WeakMap(), Ht = new WeakMap(), Qu = new WeakMap(), di = new WeakMap(), Yn = new WeakSet(), Ir = function(t) {
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
        return kl(o) && o.revert && O(this, $i) ? { ...O(this, $i), fetchStatus: "idle" } : {
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
    }), O(this, Ln).notify({ query: this, type: "updated", action: t });
  });
}, Ih);
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
function MS(e) {
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
var tr, Ch, NS = (Ch = class extends io {
  constructor(t = {}) {
    super();
    Ae(this, tr);
    this.config = t, se(this, tr, /* @__PURE__ */ new Map());
  }
  build(t, r, u) {
    const o = r.queryKey, s = r.queryHash ?? Lc(o, r);
    let l = this.get(s);
    return l || (l = new DS({
      client: t,
      queryKey: o,
      queryHash: s,
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
      (u) => Np(r, u)
    );
  }
  findAll(t = {}) {
    const r = this.getAll();
    return Object.keys(t).length > 0 ? r.filter((u) => Np(t, u)) : r;
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
}, tr = new WeakMap(), Ch), nr, Qt, pi, rr, Lr, xh, VS = (xh = class extends vg {
  constructor(t) {
    super();
    Ae(this, rr);
    Ae(this, nr);
    Ae(this, Qt);
    Ae(this, pi);
    this.mutationId = t.mutationId, se(this, Qt, t.mutationCache), se(this, nr, []), this.state = t.state || WS(), this.setOptions(t.options), this.scheduleGc();
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
    se(this, nr, O(this, nr).filter((r) => r !== t)), this.scheduleGc(), O(this, Qt).notify({
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
    return ((t = O(this, pi)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var s, l, c, f, p, h, g, v, b, E, w, F, R, W, k, N, J, G, j, M;
    const r = () => {
      Ze(this, rr, Lr).call(this, { type: "continue" });
    };
    se(this, pi, yg({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (Y, K) => {
        Ze(this, rr, Lr).call(this, { type: "failed", failureCount: Y, error: K });
      },
      onPause: () => {
        Ze(this, rr, Lr).call(this, { type: "pause" });
      },
      onContinue: r,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => O(this, Qt).canRun(this)
    }));
    const u = this.state.status === "pending", o = !O(this, pi).canStart();
    try {
      if (u)
        r();
      else {
        Ze(this, rr, Lr).call(this, { type: "pending", variables: t, isPaused: o }), await ((l = (s = O(this, Qt).config).onMutate) == null ? void 0 : l.call(
          s,
          t,
          this
        ));
        const K = await ((f = (c = this.options).onMutate) == null ? void 0 : f.call(c, t));
        K !== this.state.context && Ze(this, rr, Lr).call(this, {
          type: "pending",
          context: K,
          variables: t,
          isPaused: o
        });
      }
      const Y = await O(this, pi).start();
      return await ((h = (p = O(this, Qt).config).onSuccess) == null ? void 0 : h.call(
        p,
        Y,
        t,
        this.state.context,
        this
      )), await ((v = (g = this.options).onSuccess) == null ? void 0 : v.call(g, Y, t, this.state.context)), await ((E = (b = O(this, Qt).config).onSettled) == null ? void 0 : E.call(
        b,
        Y,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((F = (w = this.options).onSettled) == null ? void 0 : F.call(w, Y, null, t, this.state.context)), Ze(this, rr, Lr).call(this, { type: "success", data: Y }), Y;
    } catch (Y) {
      try {
        throw await ((W = (R = O(this, Qt).config).onError) == null ? void 0 : W.call(
          R,
          Y,
          t,
          this.state.context,
          this
        )), await ((N = (k = this.options).onError) == null ? void 0 : N.call(
          k,
          Y,
          t,
          this.state.context
        )), await ((G = (J = O(this, Qt).config).onSettled) == null ? void 0 : G.call(
          J,
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
        Ze(this, rr, Lr).call(this, { type: "error", error: Y });
      }
    } finally {
      O(this, Qt).runNext(this);
    }
  }
}, nr = new WeakMap(), Qt = new WeakMap(), pi = new WeakMap(), rr = new WeakSet(), Lr = function(t) {
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
}, xh);
function WS() {
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
var Cr, Jn, qu, Ah, XS = (Ah = class extends io {
  constructor(t = {}) {
    super();
    Ae(this, Cr);
    Ae(this, Jn);
    Ae(this, qu);
    this.config = t, se(this, Cr, /* @__PURE__ */ new Set()), se(this, Jn, /* @__PURE__ */ new Map()), se(this, qu, 0);
  }
  build(t, r, u) {
    const o = new VS({
      mutationCache: this,
      mutationId: ++ga(this, qu)._,
      options: t.defaultMutationOptions(r),
      state: u
    });
    return this.add(o), o;
  }
  add(t) {
    O(this, Cr).add(t);
    const r = va(t);
    if (typeof r == "string") {
      const u = O(this, Jn).get(r);
      u ? u.push(t) : O(this, Jn).set(r, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (O(this, Cr).delete(t)) {
      const r = va(t);
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
    const r = va(t);
    if (typeof r == "string") {
      const u = O(this, Jn).get(r), o = u == null ? void 0 : u.find(
        (s) => s.state.status === "pending"
      );
      return !o || o === t;
    } else
      return !0;
  }
  runNext(t) {
    var u;
    const r = va(t);
    if (typeof r == "string") {
      const o = (u = O(this, Jn).get(r)) == null ? void 0 : u.find((s) => s !== t && s.state.isPaused);
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
      (u) => Vp(r, u)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((r) => Vp(t, r));
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
        t.map((r) => r.continue().catch(Dn))
      )
    );
  }
}, Cr = new WeakMap(), Jn = new WeakMap(), qu = new WeakMap(), Ah);
function va(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function Hp(e) {
  return {
    onFetch: (t, r) => {
      var h, g, v, b, E;
      const u = t.options, o = (v = (g = (h = t.fetchOptions) == null ? void 0 : h.meta) == null ? void 0 : g.fetchMore) == null ? void 0 : v.direction, s = ((b = t.state.data) == null ? void 0 : b.pages) || [], l = ((E = t.state.data) == null ? void 0 : E.pageParams) || [];
      let c = { pages: [], pageParams: [] }, f = 0;
      const p = async () => {
        let w = !1;
        const F = (k) => {
          Object.defineProperty(k, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? w = !0 : t.signal.addEventListener("abort", () => {
              w = !0;
            }), t.signal)
          });
        }, R = gg(t.options, t.fetchOptions), W = async (k, N, J) => {
          if (w)
            return Promise.reject();
          if (N == null && k.pages.length)
            return Promise.resolve(k);
          const G = {
            client: t.client,
            queryKey: t.queryKey,
            pageParam: N,
            direction: J ? "backward" : "forward",
            meta: t.options.meta
          };
          F(G);
          const j = await R(
            G
          ), { maxPages: M } = t.options, Y = J ? _S : OS;
          return {
            pages: Y(k.pages, j, M),
            pageParams: Y(k.pageParams, N, M)
          };
        };
        if (o && s.length) {
          const k = o === "backward", N = k ? HS : zp, J = {
            pages: s,
            pageParams: l
          }, G = N(u, J);
          c = await W(J, G, k);
        } else {
          const k = e ?? s.length;
          do {
            const N = f === 0 ? l[0] ?? u.initialPageParam : zp(u, c);
            if (f > 0 && N == null)
              break;
            c = await W(c, N), f++;
          } while (f < k);
        }
        return c;
      };
      t.options.persister ? t.fetchFn = () => {
        var w, F;
        return (F = (w = t.options).persister) == null ? void 0 : F.call(
          w,
          p,
          {
            client: t.client,
            queryKey: t.queryKey,
            meta: t.options.meta,
            signal: t.signal
          },
          r
        );
      } : t.fetchFn = p;
    }
  };
}
function zp(e, { pages: t, pageParams: r }) {
  const u = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[u],
    t,
    r[u],
    r
  ) : void 0;
}
function HS(e, { pages: t, pageParams: r }) {
  var u;
  return t.length > 0 ? (u = e.getPreviousPageParam) == null ? void 0 : u.call(e, t[0], t, r[0], r) : void 0;
}
var vt, Nr, Vr, Ki, eu, Wr, tu, nu, wh, zS = (wh = class {
  constructor(e = {}) {
    Ae(this, vt);
    Ae(this, Nr);
    Ae(this, Vr);
    Ae(this, Ki);
    Ae(this, eu);
    Ae(this, Wr);
    Ae(this, tu);
    Ae(this, nu);
    se(this, vt, e.queryCache || new NS()), se(this, Nr, e.mutationCache || new XS()), se(this, Vr, e.defaultOptions || {}), se(this, Ki, /* @__PURE__ */ new Map()), se(this, eu, /* @__PURE__ */ new Map()), se(this, Wr, 0);
  }
  mount() {
    ga(this, Wr)._++, O(this, Wr) === 1 && (se(this, tu, Dc.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), O(this, vt).onFocus());
    })), se(this, nu, Ra.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), O(this, vt).onOnline());
    })));
  }
  unmount() {
    var e, t;
    ga(this, Wr)._--, O(this, Wr) === 0 && ((e = O(this, tu)) == null || e.call(this), se(this, tu, void 0), (t = O(this, nu)) == null || t.call(this), se(this, nu, void 0));
  }
  isFetching(e) {
    return O(this, vt).findAll({ ...e, fetchStatus: "fetching" }).length;
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
    return (r = O(this, vt).get(t.queryHash)) == null ? void 0 : r.state.data;
  }
  ensureQueryData(e) {
    const t = this.defaultQueryOptions(e), r = O(this, vt).build(this, t), u = r.state.data;
    return u === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && r.isStaleByTime(Yi(t.staleTime, r)) && this.prefetchQuery(t), Promise.resolve(u));
  }
  getQueriesData(e) {
    return O(this, vt).findAll(e).map(({ queryKey: t, state: r }) => {
      const u = r.data;
      return [t, u];
    });
  }
  setQueryData(e, t, r) {
    const u = this.defaultQueryOptions({ queryKey: e }), o = O(this, vt).get(
      u.queryHash
    ), s = o == null ? void 0 : o.state.data, l = PS(t, s);
    if (l !== void 0)
      return O(this, vt).build(this, u).setData(l, { ...r, manual: !0 });
  }
  setQueriesData(e, t, r) {
    return Nt.batch(
      () => O(this, vt).findAll(e).map(({ queryKey: u }) => [
        u,
        this.setQueryData(u, t, r)
      ])
    );
  }
  getQueryState(e) {
    var r;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (r = O(this, vt).get(
      t.queryHash
    )) == null ? void 0 : r.state;
  }
  removeQueries(e) {
    const t = O(this, vt);
    Nt.batch(() => {
      t.findAll(e).forEach((r) => {
        t.remove(r);
      });
    });
  }
  resetQueries(e, t) {
    const r = O(this, vt);
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
      () => O(this, vt).findAll(e).map((o) => o.cancel(r))
    );
    return Promise.all(u).then(Dn).catch(Dn);
  }
  invalidateQueries(e, t = {}) {
    return Nt.batch(() => (O(this, vt).findAll(e).forEach((r) => {
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
      () => O(this, vt).findAll(e).filter((o) => !o.isDisabled()).map((o) => {
        let s = o.fetch(void 0, r);
        return r.throwOnError || (s = s.catch(Dn)), o.state.fetchStatus === "paused" ? Promise.resolve() : s;
      })
    );
    return Promise.all(u).then(Dn);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const r = O(this, vt).build(this, t);
    return r.isStaleByTime(
      Yi(t.staleTime, r)
    ) ? r.fetch(t) : Promise.resolve(r.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(Dn).catch(Dn);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = Hp(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(Dn).catch(Dn);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = Hp(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return Ra.isOnline() ? O(this, Nr).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return O(this, vt);
  }
  getMutationCache() {
    return O(this, Nr);
  }
  getDefaultOptions() {
    return O(this, Vr);
  }
  setDefaultOptions(e) {
    se(this, Vr, e);
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
    return t.queryHash || (t.queryHash = Lc(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === Pa && (t.enabled = !1), t;
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
    O(this, vt).clear(), O(this, Nr).clear();
  }
}, vt = new WeakMap(), Nr = new WeakMap(), Vr = new WeakMap(), Ki = new WeakMap(), eu = new WeakMap(), Wr = new WeakMap(), tu = new WeakMap(), nu = new WeakMap(), wh), an, Ye, $u, qt, hi, ru, Xr, Hr, Ku, iu, uu, gi, mi, zr, ou, Ke, Nu, oc, ac, sc, lc, cc, fc, dc, Cg, Sh, ZS = (Sh = class extends io {
  constructor(t, r) {
    super();
    Ae(this, Ke);
    Ae(this, an);
    Ae(this, Ye);
    Ae(this, $u);
    Ae(this, qt);
    Ae(this, hi);
    Ae(this, ru);
    Ae(this, Xr);
    Ae(this, Hr);
    Ae(this, Ku);
    Ae(this, iu);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    Ae(this, uu);
    Ae(this, gi);
    Ae(this, mi);
    Ae(this, zr);
    Ae(this, ou, /* @__PURE__ */ new Set());
    this.options = r, se(this, an, t), se(this, Hr, null), se(this, Xr, uc()), this.options.experimental_prefetchInRender || O(this, Xr).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (O(this, Ye).addObserver(this), Zp(O(this, Ye), this.options) ? Ze(this, Ke, Nu).call(this) : this.updateResult(), Ze(this, Ke, lc).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return pc(
      O(this, Ye),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return pc(
      O(this, Ye),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), Ze(this, Ke, cc).call(this), Ze(this, Ke, fc).call(this), O(this, Ye).removeObserver(this);
  }
  setOptions(t) {
    const r = this.options, u = O(this, Ye);
    if (this.options = O(this, an).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Un(this.options.enabled, O(this, Ye)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    Ze(this, Ke, dc).call(this), O(this, Ye).setOptions(this.options), r._defaulted && !nc(this.options, r) && O(this, an).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: O(this, Ye),
      observer: this
    });
    const o = this.hasListeners();
    o && Yp(
      O(this, Ye),
      u,
      this.options,
      r
    ) && Ze(this, Ke, Nu).call(this), this.updateResult(), o && (O(this, Ye) !== u || Un(this.options.enabled, O(this, Ye)) !== Un(r.enabled, O(this, Ye)) || Yi(this.options.staleTime, O(this, Ye)) !== Yi(r.staleTime, O(this, Ye))) && Ze(this, Ke, oc).call(this);
    const s = Ze(this, Ke, ac).call(this);
    o && (O(this, Ye) !== u || Un(this.options.enabled, O(this, Ye)) !== Un(r.enabled, O(this, Ye)) || s !== O(this, zr)) && Ze(this, Ke, sc).call(this, s);
  }
  getOptimisticResult(t) {
    const r = O(this, an).getQueryCache().build(O(this, an), t), u = this.createResult(r, t);
    return JS(this, u) && (se(this, qt, u), se(this, ru, this.options), se(this, hi, O(this, Ye).state)), u;
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
    return O(this, Ye);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const r = O(this, an).defaultQueryOptions(t), u = O(this, an).getQueryCache().build(O(this, an), r);
    return u.fetch().then(() => this.createResult(u, r));
  }
  fetch(t) {
    return Ze(this, Ke, Nu).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), O(this, qt)));
  }
  createResult(t, r) {
    var Y;
    const u = O(this, Ye), o = this.options, s = O(this, qt), l = O(this, hi), c = O(this, ru), p = t !== u ? t.state : O(this, $u), { state: h } = t;
    let g = { ...h }, v = !1, b;
    if (r._optimisticResults) {
      const K = this.hasListeners(), q = !K && Zp(t, r), z = K && Yp(t, u, r, o);
      (q || z) && (g = {
        ...g,
        ...Ig(h.data, t.options)
      }), r._optimisticResults === "isRestoring" && (g.fetchStatus = "idle");
    }
    let { error: E, errorUpdatedAt: w, status: F } = g;
    b = g.data;
    let R = !1;
    if (r.placeholderData !== void 0 && b === void 0 && F === "pending") {
      let K;
      s != null && s.isPlaceholderData && r.placeholderData === (c == null ? void 0 : c.placeholderData) ? (K = s.data, R = !0) : K = typeof r.placeholderData == "function" ? r.placeholderData(
        (Y = O(this, uu)) == null ? void 0 : Y.state.data,
        O(this, uu)
      ) : r.placeholderData, K !== void 0 && (F = "success", b = ic(
        s == null ? void 0 : s.data,
        K,
        r
      ), v = !0);
    }
    if (r.select && b !== void 0 && !R)
      if (s && b === (l == null ? void 0 : l.data) && r.select === O(this, Ku))
        b = O(this, iu);
      else
        try {
          se(this, Ku, r.select), b = r.select(b), b = ic(s == null ? void 0 : s.data, b, r), se(this, iu, b), se(this, Hr, null);
        } catch (K) {
          se(this, Hr, K);
        }
    O(this, Hr) && (E = O(this, Hr), b = O(this, iu), w = Date.now(), F = "error");
    const W = g.fetchStatus === "fetching", k = F === "pending", N = F === "error", J = k && W, G = b !== void 0, M = {
      status: F,
      fetchStatus: g.fetchStatus,
      isPending: k,
      isSuccess: F === "success",
      isError: N,
      isInitialLoading: J,
      isLoading: J,
      data: b,
      dataUpdatedAt: g.dataUpdatedAt,
      error: E,
      errorUpdatedAt: w,
      failureCount: g.fetchFailureCount,
      failureReason: g.fetchFailureReason,
      errorUpdateCount: g.errorUpdateCount,
      isFetched: g.dataUpdateCount > 0 || g.errorUpdateCount > 0,
      isFetchedAfterMount: g.dataUpdateCount > p.dataUpdateCount || g.errorUpdateCount > p.errorUpdateCount,
      isFetching: W,
      isRefetching: W && !k,
      isLoadingError: N && !G,
      isPaused: g.fetchStatus === "paused",
      isPlaceholderData: v,
      isRefetchError: N && G,
      isStale: Mc(t, r),
      refetch: this.refetch,
      promise: O(this, Xr)
    };
    if (this.options.experimental_prefetchInRender) {
      const K = (pe) => {
        M.status === "error" ? pe.reject(M.error) : M.data !== void 0 && pe.resolve(M.data);
      }, q = () => {
        const pe = se(this, Xr, M.promise = uc());
        K(pe);
      }, z = O(this, Xr);
      switch (z.status) {
        case "pending":
          t.queryHash === u.queryHash && K(z);
          break;
        case "fulfilled":
          (M.status === "error" || M.data !== z.value) && q();
          break;
        case "rejected":
          (M.status !== "error" || M.error !== z.reason) && q();
          break;
      }
    }
    return M;
  }
  updateResult() {
    const t = O(this, qt), r = this.createResult(O(this, Ye), this.options);
    if (se(this, hi, O(this, Ye).state), se(this, ru, this.options), O(this, hi).data !== void 0 && se(this, uu, O(this, Ye)), nc(r, t))
      return;
    se(this, qt, r);
    const u = () => {
      if (!t)
        return !0;
      const { notifyOnChangeProps: o } = this.options, s = typeof o == "function" ? o() : o;
      if (s === "all" || !s && !O(this, ou).size)
        return !0;
      const l = new Set(
        s ?? O(this, ou)
      );
      return this.options.throwOnError && l.add("error"), Object.keys(O(this, qt)).some((c) => {
        const f = c;
        return O(this, qt)[f] !== t[f] && l.has(f);
      });
    };
    Ze(this, Ke, Cg).call(this, { listeners: u() });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && Ze(this, Ke, lc).call(this);
  }
}, an = new WeakMap(), Ye = new WeakMap(), $u = new WeakMap(), qt = new WeakMap(), hi = new WeakMap(), ru = new WeakMap(), Xr = new WeakMap(), Hr = new WeakMap(), Ku = new WeakMap(), iu = new WeakMap(), uu = new WeakMap(), gi = new WeakMap(), mi = new WeakMap(), zr = new WeakMap(), ou = new WeakMap(), Ke = new WeakSet(), Nu = function(t) {
  Ze(this, Ke, dc).call(this);
  let r = O(this, Ye).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (r = r.catch(Dn)), r;
}, oc = function() {
  Ze(this, Ke, cc).call(this);
  const t = Yi(
    this.options.staleTime,
    O(this, Ye)
  );
  if (bi || O(this, qt).isStale || !ec(t))
    return;
  const u = hg(O(this, qt).dataUpdatedAt, t) + 1;
  se(this, gi, setTimeout(() => {
    O(this, qt).isStale || this.updateResult();
  }, u));
}, ac = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(O(this, Ye)) : this.options.refetchInterval) ?? !1;
}, sc = function(t) {
  Ze(this, Ke, fc).call(this), se(this, zr, t), !(bi || Un(this.options.enabled, O(this, Ye)) === !1 || !ec(O(this, zr)) || O(this, zr) === 0) && se(this, mi, setInterval(() => {
    (this.options.refetchIntervalInBackground || Dc.isFocused()) && Ze(this, Ke, Nu).call(this);
  }, O(this, zr)));
}, lc = function() {
  Ze(this, Ke, oc).call(this), Ze(this, Ke, sc).call(this, Ze(this, Ke, ac).call(this));
}, cc = function() {
  O(this, gi) && (clearTimeout(O(this, gi)), se(this, gi, void 0));
}, fc = function() {
  O(this, mi) && (clearInterval(O(this, mi)), se(this, mi, void 0));
}, dc = function() {
  const t = O(this, an).getQueryCache().build(O(this, an), this.options);
  if (t === O(this, Ye))
    return;
  const r = O(this, Ye);
  se(this, Ye, t), se(this, $u, t.state), this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
}, Cg = function(t) {
  Nt.batch(() => {
    t.listeners && this.listeners.forEach((r) => {
      r(O(this, qt));
    }), O(this, an).getQueryCache().notify({
      query: O(this, Ye),
      type: "observerResultsUpdated"
    });
  });
}, Sh);
function YS(e, t) {
  return Un(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function Zp(e, t) {
  return YS(e, t) || e.state.data !== void 0 && pc(e, t, t.refetchOnMount);
}
function pc(e, t, r) {
  if (Un(t.enabled, e) !== !1) {
    const u = typeof r == "function" ? r(e) : r;
    return u === "always" || u !== !1 && Mc(e, t);
  }
  return !1;
}
function Yp(e, t, r, u) {
  return (e !== t || Un(u.enabled, e) === !1) && (!r.suspense || e.state.status !== "error") && Mc(e, r);
}
function Mc(e, t) {
  return Un(t.enabled, e) !== !1 && e.isStaleByTime(Yi(t.staleTime, e));
}
function JS(e, t) {
  return !nc(e.getCurrentResult(), t);
}
var xg = Te.createContext(
  void 0
), US = (e) => {
  const t = Te.useContext(xg);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, jS = ({
  client: e,
  children: t
}) => (Te.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ re(xg.Provider, { value: e, children: t })), Ag = Te.createContext(!1), QS = () => Te.useContext(Ag);
Ag.Provider;
function qS() {
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
var $S = Te.createContext(qS()), KS = () => Te.useContext($S);
function eE(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function Jp() {
}
var tE = (e, t) => {
  (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1));
}, nE = (e) => {
  Te.useEffect(() => {
    e.clearReset();
  }, [e]);
}, rE = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: r,
  query: u,
  suspense: o
}) => e.isError && !t.isReset() && !e.isFetching && u && (o && e.data === void 0 || eE(r, [e.error, u])), iE = (e) => {
  const t = e.staleTime;
  e.suspense && (e.staleTime = typeof t == "function" ? (...r) => Math.max(t(...r), 1e3) : Math.max(t ?? 1e3, 1e3), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
}, uE = (e, t) => e.isLoading && e.isFetching && !t, oE = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, Up = (e, t, r) => t.fetchOptimistic(e).catch(() => {
  r.clearReset();
});
function aE(e, t, r) {
  var g, v, b, E, w;
  if (process.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const u = US(), o = QS(), s = KS(), l = u.defaultQueryOptions(e);
  (v = (g = u.getDefaultOptions().queries) == null ? void 0 : g._experimental_beforeQuery) == null || v.call(
    g,
    l
  ), process.env.NODE_ENV !== "production" && (l.queryFn || console.error(
    `[${l.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`
  )), l._optimisticResults = o ? "isRestoring" : "optimistic", iE(l), tE(l, s), nE(s);
  const c = !u.getQueryCache().get(l.queryHash), [f] = Te.useState(
    () => new t(
      u,
      l
    )
  ), p = f.getOptimisticResult(l), h = !o && e.subscribed !== !1;
  if (Te.useSyncExternalStore(
    Te.useCallback(
      (F) => {
        const R = h ? f.subscribe(Nt.batchCalls(F)) : Jp;
        return f.updateResult(), R;
      },
      [f, h]
    ),
    () => f.getCurrentResult(),
    () => f.getCurrentResult()
  ), Te.useEffect(() => {
    f.setOptions(l);
  }, [l, f]), oE(l, p))
    throw Up(l, f, s);
  if (rE({
    result: p,
    errorResetBoundary: s,
    throwOnError: l.throwOnError,
    query: u.getQueryCache().get(l.queryHash),
    suspense: l.suspense
  }))
    throw p.error;
  if ((E = (b = u.getDefaultOptions().queries) == null ? void 0 : b._experimental_afterQuery) == null || E.call(
    b,
    l,
    p
  ), l.experimental_prefetchInRender && !bi && uE(p, o)) {
    const F = c ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      Up(l, f, s)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (w = u.getQueryCache().get(l.queryHash)) == null ? void 0 : w.promise
    );
    F == null || F.catch(Jp).finally(() => {
      f.updateResult();
    });
  }
  return l.notifyOnChangeProps ? p : f.trackResult(p);
}
function Ii(e, t) {
  return aE(e, ZS);
}
var Oa = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Oa.exports;
(function(e, t) {
  (function() {
    var r, u = "4.17.21", o = 200, s = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", c = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", p = 500, h = "__lodash_placeholder__", g = 1, v = 2, b = 4, E = 1, w = 2, F = 1, R = 2, W = 4, k = 8, N = 16, J = 32, G = 64, j = 128, M = 256, Y = 512, K = 30, q = "...", z = 800, pe = 16, we = 1, ie = 2, be = 3, xe = 1 / 0, Pe = 9007199254740991, te = 17976931348623157e292, x = NaN, he = 4294967295, Se = he - 1, S = he >>> 1, Je = [
      ["ary", j],
      ["bind", F],
      ["bindKey", R],
      ["curry", k],
      ["curryRight", N],
      ["flip", Y],
      ["partial", J],
      ["partialRight", G],
      ["rearg", M]
    ], fe = "[object Arguments]", Ee = "[object Array]", lt = "[object AsyncFunction]", Ne = "[object Boolean]", bt = "[object Date]", Vt = "[object DOMException]", kt = "[object Error]", Lt = "[object Function]", Sn = "[object GeneratorFunction]", Ct = "[object Map]", ee = "[object Number]", ue = "[object Null]", ce = "[object Object]", De = "[object Promise]", ct = "[object Proxy]", et = "[object RegExp]", Rt = "[object Set]", Nn = "[object String]", nt = "[object Symbol]", rt = "[object Undefined]", Qe = "[object WeakMap]", L = "[object WeakSet]", Q = "[object ArrayBuffer]", ge = "[object DataView]", Be = "[object Float32Array]", Ge = "[object Float64Array]", Tt = "[object Int8Array]", $t = "[object Int16Array]", Zt = "[object Int32Array]", En = "[object Uint8Array]", Kt = "[object Uint8ClampedArray]", St = "[object Uint16Array]", pn = "[object Uint32Array]", hn = /\b__p \+= '';/g, ar = /\b(__p \+=) '' \+/g, oo = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ao = /&(?:amp|lt|gt|quot|#39);/g, so = /[&<>"']/g, fu = RegExp(ao.source), Jr = RegExp(so.source), du = /<%-([\s\S]+?)%>/g, pu = /<%([\s\S]+?)%>/g, Ci = /<%=([\s\S]+?)%>/g, Ur = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ua = /^\w*$/, ja = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, hu = /[\\^$.*+?()[\]{}|]/g, Qa = RegExp(hu.source), gu = /^\s+/, lo = /\s/, mu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, sr = /\{\n\/\* \[wrapped with (.+)\] \*/, qa = /,? & /, $a = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Ka = /[()=,{}\[\]\/\s]/, es = /\\(\\)?/g, ts = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Fn = /\w*$/, ns = /^[-+]0x[0-9a-f]+$/i, rs = /^0b[01]+$/i, is = /^\[object .+?Constructor\]$/, us = /^0o[0-7]+$/i, os = /^(?:0|[1-9]\d*)$/, lr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, xi = /($^)/, as = /['\n\r\u2028\u2029\\]/g, Ai = "\\ud800-\\udfff", ss = "\\u0300-\\u036f", ls = "\\ufe20-\\ufe2f", wi = "\\u20d0-\\u20ff", co = ss + ls + wi, fo = "\\u2700-\\u27bf", Vn = "a-z\\xdf-\\xf6\\xf8-\\xff", cs = "\\xac\\xb1\\xd7\\xf7", fs = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", ds = "\\u2000-\\u206f", ps = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", po = "A-Z\\xc0-\\xd6\\xd8-\\xde", ho = "\\ufe0e\\ufe0f", jr = cs + fs + ds + ps, bu = "['’]", Qr = "[" + Ai + "]", yu = "[" + jr + "]", qr = "[" + co + "]", go = "\\d+", hs = "[" + fo + "]", mo = "[" + Vn + "]", bo = "[^" + Ai + jr + go + fo + Vn + po + "]", Si = "\\ud83c[\\udffb-\\udfff]", gs = "(?:" + qr + "|" + Si + ")", yo = "[^" + Ai + "]", Ei = "(?:\\ud83c[\\udde6-\\uddff]){2}", Sr = "[\\ud800-\\udbff][\\udc00-\\udfff]", gn = "[" + po + "]", vo = "\\u200d", Io = "(?:" + mo + "|" + bo + ")", jn = "(?:" + gn + "|" + bo + ")", Co = "(?:" + bu + "(?:d|ll|m|re|s|t|ve))?", xo = "(?:" + bu + "(?:D|LL|M|RE|S|T|VE))?", Ao = gs + "?", wo = "[" + ho + "]?", ms = "(?:" + vo + "(?:" + [yo, Ei, Sr].join("|") + ")" + wo + Ao + ")*", cr = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", So = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Eo = wo + Ao + ms, Fi = "(?:" + [hs, Ei, Sr].join("|") + ")" + Eo, bs = "(?:" + [yo + qr + "?", qr, Ei, Sr, Qr].join("|") + ")", vu = RegExp(bu, "g"), ys = RegExp(qr, "g"), Pi = RegExp(Si + "(?=" + Si + ")|" + bs + Eo, "g"), Fo = RegExp([
      gn + "?" + mo + "+" + Co + "(?=" + [yu, gn, "$"].join("|") + ")",
      jn + "+" + xo + "(?=" + [yu, gn + Io, "$"].join("|") + ")",
      gn + "?" + Io + "+" + Co,
      gn + "+" + xo,
      So,
      cr,
      go,
      Fi
    ].join("|"), "g"), Po = RegExp("[" + vo + Ai + co + ho + "]"), $r = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Ro = [
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
    ], vs = -1, ut = {};
    ut[Be] = ut[Ge] = ut[Tt] = ut[$t] = ut[Zt] = ut[En] = ut[Kt] = ut[St] = ut[pn] = !0, ut[fe] = ut[Ee] = ut[Q] = ut[Ne] = ut[ge] = ut[bt] = ut[kt] = ut[Lt] = ut[Ct] = ut[ee] = ut[ce] = ut[et] = ut[Rt] = ut[Nn] = ut[Qe] = !1;
    var it = {};
    it[fe] = it[Ee] = it[Q] = it[ge] = it[Ne] = it[bt] = it[Be] = it[Ge] = it[Tt] = it[$t] = it[Zt] = it[Ct] = it[ee] = it[ce] = it[et] = it[Rt] = it[Nn] = it[nt] = it[En] = it[Kt] = it[St] = it[pn] = !0, it[kt] = it[Lt] = it[Qe] = !1;
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
    }, oe = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, ot = parseFloat, Oe = parseInt, pt = typeof xn == "object" && xn && xn.Object === Object && xn, Et = typeof self == "object" && self && self.Object === Object && self, He = pt || Et || Function("return this")(), at = t && !t.nodeType && t, xt = at && !0 && e && !e.nodeType && e, en = xt && xt.exports === at, Ft = en && pt.process, ht = function() {
      try {
        var _ = xt && xt.require && xt.require("util").types;
        return _ || Ft && Ft.binding && Ft.binding("util");
      } catch {
      }
    }(), Yt = ht && ht.isArrayBuffer, Wn = ht && ht.isDate, Pn = ht && ht.isMap, Qn = ht && ht.isRegExp, Iu = ht && ht.isSet, Kr = ht && ht.isTypedArray;
    function Bt(_, V, D) {
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
    function sm(_, V, D, ae) {
      for (var Re = -1, Ue = _ == null ? 0 : _.length; ++Re < Ue; ) {
        var Ot = _[Re];
        V(ae, Ot, D(Ot), _);
      }
      return ae;
    }
    function Rn(_, V) {
      for (var D = -1, ae = _ == null ? 0 : _.length; ++D < ae && V(_[D], D, _) !== !1; )
        ;
      return _;
    }
    function lm(_, V) {
      for (var D = _ == null ? 0 : _.length; D-- && V(_[D], D, _) !== !1; )
        ;
      return _;
    }
    function Uc(_, V) {
      for (var D = -1, ae = _ == null ? 0 : _.length; ++D < ae; )
        if (!V(_[D], D, _))
          return !1;
      return !0;
    }
    function Er(_, V) {
      for (var D = -1, ae = _ == null ? 0 : _.length, Re = 0, Ue = []; ++D < ae; ) {
        var Ot = _[D];
        V(Ot, D, _) && (Ue[Re++] = Ot);
      }
      return Ue;
    }
    function Oo(_, V) {
      var D = _ == null ? 0 : _.length;
      return !!D && Ri(_, V, 0) > -1;
    }
    function Is(_, V, D) {
      for (var ae = -1, Re = _ == null ? 0 : _.length; ++ae < Re; )
        if (D(V, _[ae]))
          return !0;
      return !1;
    }
    function gt(_, V) {
      for (var D = -1, ae = _ == null ? 0 : _.length, Re = Array(ae); ++D < ae; )
        Re[D] = V(_[D], D, _);
      return Re;
    }
    function Fr(_, V) {
      for (var D = -1, ae = V.length, Re = _.length; ++D < ae; )
        _[Re + D] = V[D];
      return _;
    }
    function Cs(_, V, D, ae) {
      var Re = -1, Ue = _ == null ? 0 : _.length;
      for (ae && Ue && (D = _[++Re]); ++Re < Ue; )
        D = V(D, _[Re], Re, _);
      return D;
    }
    function cm(_, V, D, ae) {
      var Re = _ == null ? 0 : _.length;
      for (ae && Re && (D = _[--Re]); Re--; )
        D = V(D, _[Re], Re, _);
      return D;
    }
    function xs(_, V) {
      for (var D = -1, ae = _ == null ? 0 : _.length; ++D < ae; )
        if (V(_[D], D, _))
          return !0;
      return !1;
    }
    var fm = As("length");
    function dm(_) {
      return _.split("");
    }
    function pm(_) {
      return _.match($a) || [];
    }
    function jc(_, V, D) {
      var ae;
      return D(_, function(Re, Ue, Ot) {
        if (V(Re, Ue, Ot))
          return ae = Ue, !1;
      }), ae;
    }
    function _o(_, V, D, ae) {
      for (var Re = _.length, Ue = D + (ae ? 1 : -1); ae ? Ue-- : ++Ue < Re; )
        if (V(_[Ue], Ue, _))
          return Ue;
      return -1;
    }
    function Ri(_, V, D) {
      return V === V ? Sm(_, V, D) : _o(_, Qc, D);
    }
    function hm(_, V, D, ae) {
      for (var Re = D - 1, Ue = _.length; ++Re < Ue; )
        if (ae(_[Re], V))
          return Re;
      return -1;
    }
    function Qc(_) {
      return _ !== _;
    }
    function qc(_, V) {
      var D = _ == null ? 0 : _.length;
      return D ? Ss(_, V) / D : x;
    }
    function As(_) {
      return function(V) {
        return V == null ? r : V[_];
      };
    }
    function ws(_) {
      return function(V) {
        return _ == null ? r : _[V];
      };
    }
    function $c(_, V, D, ae, Re) {
      return Re(_, function(Ue, Ot, st) {
        D = ae ? (ae = !1, Ue) : V(D, Ue, Ot, st);
      }), D;
    }
    function gm(_, V) {
      var D = _.length;
      for (_.sort(V); D--; )
        _[D] = _[D].value;
      return _;
    }
    function Ss(_, V) {
      for (var D, ae = -1, Re = _.length; ++ae < Re; ) {
        var Ue = V(_[ae]);
        Ue !== r && (D = D === r ? Ue : D + Ue);
      }
      return D;
    }
    function Es(_, V) {
      for (var D = -1, ae = Array(_); ++D < _; )
        ae[D] = V(D);
      return ae;
    }
    function mm(_, V) {
      return gt(V, function(D) {
        return [D, _[D]];
      });
    }
    function Kc(_) {
      return _ && _.slice(0, rf(_) + 1).replace(gu, "");
    }
    function mn(_) {
      return function(V) {
        return _(V);
      };
    }
    function Fs(_, V) {
      return gt(V, function(D) {
        return _[D];
      });
    }
    function Cu(_, V) {
      return _.has(V);
    }
    function ef(_, V) {
      for (var D = -1, ae = _.length; ++D < ae && Ri(V, _[D], 0) > -1; )
        ;
      return D;
    }
    function tf(_, V) {
      for (var D = _.length; D-- && Ri(V, _[D], 0) > -1; )
        ;
      return D;
    }
    function bm(_, V) {
      for (var D = _.length, ae = 0; D--; )
        _[D] === V && ++ae;
      return ae;
    }
    var ym = ws(C), vm = ws(T);
    function Im(_) {
      return "\\" + oe[_];
    }
    function Cm(_, V) {
      return _ == null ? r : _[V];
    }
    function Oi(_) {
      return Po.test(_);
    }
    function xm(_) {
      return $r.test(_);
    }
    function Am(_) {
      for (var V, D = []; !(V = _.next()).done; )
        D.push(V.value);
      return D;
    }
    function Ps(_) {
      var V = -1, D = Array(_.size);
      return _.forEach(function(ae, Re) {
        D[++V] = [Re, ae];
      }), D;
    }
    function nf(_, V) {
      return function(D) {
        return _(V(D));
      };
    }
    function Pr(_, V) {
      for (var D = -1, ae = _.length, Re = 0, Ue = []; ++D < ae; ) {
        var Ot = _[D];
        (Ot === V || Ot === h) && (_[D] = h, Ue[Re++] = D);
      }
      return Ue;
    }
    function To(_) {
      var V = -1, D = Array(_.size);
      return _.forEach(function(ae) {
        D[++V] = ae;
      }), D;
    }
    function wm(_) {
      var V = -1, D = Array(_.size);
      return _.forEach(function(ae) {
        D[++V] = [ae, ae];
      }), D;
    }
    function Sm(_, V, D) {
      for (var ae = D - 1, Re = _.length; ++ae < Re; )
        if (_[ae] === V)
          return ae;
      return -1;
    }
    function Em(_, V, D) {
      for (var ae = D + 1; ae--; )
        if (_[ae] === V)
          return ae;
      return ae;
    }
    function _i(_) {
      return Oi(_) ? Pm(_) : fm(_);
    }
    function Xn(_) {
      return Oi(_) ? Rm(_) : dm(_);
    }
    function rf(_) {
      for (var V = _.length; V-- && lo.test(_.charAt(V)); )
        ;
      return V;
    }
    var Fm = ws(Z);
    function Pm(_) {
      for (var V = Pi.lastIndex = 0; Pi.test(_); )
        ++V;
      return V;
    }
    function Rm(_) {
      return _.match(Pi) || [];
    }
    function Om(_) {
      return _.match(Fo) || [];
    }
    var _m = function _(V) {
      V = V == null ? He : Ti.defaults(He.Object(), V, Ti.pick(He, Ro));
      var D = V.Array, ae = V.Date, Re = V.Error, Ue = V.Function, Ot = V.Math, st = V.Object, Rs = V.RegExp, Tm = V.String, On = V.TypeError, Bo = D.prototype, Bm = Ue.prototype, Bi = st.prototype, Go = V["__core-js_shared__"], ko = Bm.toString, tt = Bi.hasOwnProperty, Gm = 0, uf = function() {
        var n = /[^.]+$/.exec(Go && Go.keys && Go.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), Lo = Bi.toString, km = ko.call(st), Lm = He._, Dm = Rs(
        "^" + ko.call(tt).replace(hu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Do = en ? V.Buffer : r, Rr = V.Symbol, Mo = V.Uint8Array, of = Do ? Do.allocUnsafe : r, No = nf(st.getPrototypeOf, st), af = st.create, sf = Bi.propertyIsEnumerable, Vo = Bo.splice, lf = Rr ? Rr.isConcatSpreadable : r, xu = Rr ? Rr.iterator : r, ei = Rr ? Rr.toStringTag : r, Wo = function() {
        try {
          var n = ui(st, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), Mm = V.clearTimeout !== He.clearTimeout && V.clearTimeout, Nm = ae && ae.now !== He.Date.now && ae.now, Vm = V.setTimeout !== He.setTimeout && V.setTimeout, Xo = Ot.ceil, Ho = Ot.floor, Os = st.getOwnPropertySymbols, Wm = Do ? Do.isBuffer : r, cf = V.isFinite, Xm = Bo.join, Hm = nf(st.keys, st), _t = Ot.max, Wt = Ot.min, zm = ae.now, Zm = V.parseInt, ff = Ot.random, Ym = Bo.reverse, _s = ui(V, "DataView"), Au = ui(V, "Map"), Ts = ui(V, "Promise"), Gi = ui(V, "Set"), wu = ui(V, "WeakMap"), Su = ui(st, "create"), zo = wu && new wu(), ki = {}, Jm = oi(_s), Um = oi(Au), jm = oi(Ts), Qm = oi(Gi), qm = oi(wu), Zo = Rr ? Rr.prototype : r, Eu = Zo ? Zo.valueOf : r, df = Zo ? Zo.toString : r;
      function y(n) {
        if (yt(n) && !_e(n) && !(n instanceof Xe)) {
          if (n instanceof _n)
            return n;
          if (tt.call(n, "__wrapped__"))
            return pd(n);
        }
        return new _n(n);
      }
      var Li = /* @__PURE__ */ function() {
        function n() {
        }
        return function(i) {
          if (!mt(i))
            return {};
          if (af)
            return af(i);
          n.prototype = i;
          var a = new n();
          return n.prototype = r, a;
        };
      }();
      function Yo() {
      }
      function _n(n, i) {
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
        evaluate: pu,
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
      }, y.prototype = Yo.prototype, y.prototype.constructor = y, _n.prototype = Li(Yo.prototype), _n.prototype.constructor = _n;
      function Xe(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = he, this.__views__ = [];
      }
      function $m() {
        var n = new Xe(this.__wrapped__);
        return n.__actions__ = tn(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = tn(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = tn(this.__views__), n;
      }
      function Km() {
        if (this.__filtered__) {
          var n = new Xe(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function eb() {
        var n = this.__wrapped__.value(), i = this.__dir__, a = _e(n), d = i < 0, m = a ? n.length : 0, I = d0(0, m, this.__views__), A = I.start, P = I.end, B = P - A, X = d ? P : A - 1, H = this.__iteratees__, U = H.length, ne = 0, le = Wt(B, this.__takeCount__);
        if (!a || !d && m == B && le == B)
          return Lf(n, this.__actions__);
        var Ie = [];
        e:
          for (; B-- && ne < le; ) {
            X += i;
            for (var Me = -1, Ce = n[X]; ++Me < U; ) {
              var We = H[Me], ze = We.iteratee, vn = We.type, jt = ze(Ce);
              if (vn == ie)
                Ce = jt;
              else if (!jt) {
                if (vn == we)
                  continue e;
                break e;
              }
            }
            Ie[ne++] = Ce;
          }
        return Ie;
      }
      Xe.prototype = Li(Yo.prototype), Xe.prototype.constructor = Xe;
      function ti(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.clear(); ++i < a; ) {
          var d = n[i];
          this.set(d[0], d[1]);
        }
      }
      function tb() {
        this.__data__ = Su ? Su(null) : {}, this.size = 0;
      }
      function nb(n) {
        var i = this.has(n) && delete this.__data__[n];
        return this.size -= i ? 1 : 0, i;
      }
      function rb(n) {
        var i = this.__data__;
        if (Su) {
          var a = i[n];
          return a === f ? r : a;
        }
        return tt.call(i, n) ? i[n] : r;
      }
      function ib(n) {
        var i = this.__data__;
        return Su ? i[n] !== r : tt.call(i, n);
      }
      function ub(n, i) {
        var a = this.__data__;
        return this.size += this.has(n) ? 0 : 1, a[n] = Su && i === r ? f : i, this;
      }
      ti.prototype.clear = tb, ti.prototype.delete = nb, ti.prototype.get = rb, ti.prototype.has = ib, ti.prototype.set = ub;
      function fr(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.clear(); ++i < a; ) {
          var d = n[i];
          this.set(d[0], d[1]);
        }
      }
      function ob() {
        this.__data__ = [], this.size = 0;
      }
      function ab(n) {
        var i = this.__data__, a = Jo(i, n);
        if (a < 0)
          return !1;
        var d = i.length - 1;
        return a == d ? i.pop() : Vo.call(i, a, 1), --this.size, !0;
      }
      function sb(n) {
        var i = this.__data__, a = Jo(i, n);
        return a < 0 ? r : i[a][1];
      }
      function lb(n) {
        return Jo(this.__data__, n) > -1;
      }
      function cb(n, i) {
        var a = this.__data__, d = Jo(a, n);
        return d < 0 ? (++this.size, a.push([n, i])) : a[d][1] = i, this;
      }
      fr.prototype.clear = ob, fr.prototype.delete = ab, fr.prototype.get = sb, fr.prototype.has = lb, fr.prototype.set = cb;
      function dr(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.clear(); ++i < a; ) {
          var d = n[i];
          this.set(d[0], d[1]);
        }
      }
      function fb() {
        this.size = 0, this.__data__ = {
          hash: new ti(),
          map: new (Au || fr)(),
          string: new ti()
        };
      }
      function db(n) {
        var i = ua(this, n).delete(n);
        return this.size -= i ? 1 : 0, i;
      }
      function pb(n) {
        return ua(this, n).get(n);
      }
      function hb(n) {
        return ua(this, n).has(n);
      }
      function gb(n, i) {
        var a = ua(this, n), d = a.size;
        return a.set(n, i), this.size += a.size == d ? 0 : 1, this;
      }
      dr.prototype.clear = fb, dr.prototype.delete = db, dr.prototype.get = pb, dr.prototype.has = hb, dr.prototype.set = gb;
      function ni(n) {
        var i = -1, a = n == null ? 0 : n.length;
        for (this.__data__ = new dr(); ++i < a; )
          this.add(n[i]);
      }
      function mb(n) {
        return this.__data__.set(n, f), this;
      }
      function bb(n) {
        return this.__data__.has(n);
      }
      ni.prototype.add = ni.prototype.push = mb, ni.prototype.has = bb;
      function Hn(n) {
        var i = this.__data__ = new fr(n);
        this.size = i.size;
      }
      function yb() {
        this.__data__ = new fr(), this.size = 0;
      }
      function vb(n) {
        var i = this.__data__, a = i.delete(n);
        return this.size = i.size, a;
      }
      function Ib(n) {
        return this.__data__.get(n);
      }
      function Cb(n) {
        return this.__data__.has(n);
      }
      function xb(n, i) {
        var a = this.__data__;
        if (a instanceof fr) {
          var d = a.__data__;
          if (!Au || d.length < o - 1)
            return d.push([n, i]), this.size = ++a.size, this;
          a = this.__data__ = new dr(d);
        }
        return a.set(n, i), this.size = a.size, this;
      }
      Hn.prototype.clear = yb, Hn.prototype.delete = vb, Hn.prototype.get = Ib, Hn.prototype.has = Cb, Hn.prototype.set = xb;
      function pf(n, i) {
        var a = _e(n), d = !a && ai(n), m = !a && !d && Gr(n), I = !a && !d && !m && Vi(n), A = a || d || m || I, P = A ? Es(n.length, Tm) : [], B = P.length;
        for (var X in n)
          (i || tt.call(n, X)) && !(A && // Safari 9 has enumerable `arguments.length` in strict mode.
          (X == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          m && (X == "offset" || X == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          I && (X == "buffer" || X == "byteLength" || X == "byteOffset") || // Skip index properties.
          mr(X, B))) && P.push(X);
        return P;
      }
      function hf(n) {
        var i = n.length;
        return i ? n[Hs(0, i - 1)] : r;
      }
      function Ab(n, i) {
        return oa(tn(n), ri(i, 0, n.length));
      }
      function wb(n) {
        return oa(tn(n));
      }
      function Bs(n, i, a) {
        (a !== r && !zn(n[i], a) || a === r && !(i in n)) && pr(n, i, a);
      }
      function Fu(n, i, a) {
        var d = n[i];
        (!(tt.call(n, i) && zn(d, a)) || a === r && !(i in n)) && pr(n, i, a);
      }
      function Jo(n, i) {
        for (var a = n.length; a--; )
          if (zn(n[a][0], i))
            return a;
        return -1;
      }
      function Sb(n, i, a, d) {
        return Or(n, function(m, I, A) {
          i(d, m, a(m), A);
        }), d;
      }
      function gf(n, i) {
        return n && $n(i, Gt(i), n);
      }
      function Eb(n, i) {
        return n && $n(i, rn(i), n);
      }
      function pr(n, i, a) {
        i == "__proto__" && Wo ? Wo(n, i, {
          configurable: !0,
          enumerable: !0,
          value: a,
          writable: !0
        }) : n[i] = a;
      }
      function Gs(n, i) {
        for (var a = -1, d = i.length, m = D(d), I = n == null; ++a < d; )
          m[a] = I ? r : hl(n, i[a]);
        return m;
      }
      function ri(n, i, a) {
        return n === n && (a !== r && (n = n <= a ? n : a), i !== r && (n = n >= i ? n : i)), n;
      }
      function Tn(n, i, a, d, m, I) {
        var A, P = i & g, B = i & v, X = i & b;
        if (a && (A = m ? a(n, d, m, I) : a(n)), A !== r)
          return A;
        if (!mt(n))
          return n;
        var H = _e(n);
        if (H) {
          if (A = h0(n), !P)
            return tn(n, A);
        } else {
          var U = Xt(n), ne = U == Lt || U == Sn;
          if (Gr(n))
            return Nf(n, P);
          if (U == ce || U == fe || ne && !m) {
            if (A = B || ne ? {} : id(n), !P)
              return B ? r0(n, Eb(A, n)) : n0(n, gf(A, n));
          } else {
            if (!it[U])
              return m ? n : {};
            A = g0(n, U, P);
          }
        }
        I || (I = new Hn());
        var le = I.get(n);
        if (le)
          return le;
        I.set(n, A), Bd(n) ? n.forEach(function(Ce) {
          A.add(Tn(Ce, i, a, Ce, n, I));
        }) : _d(n) && n.forEach(function(Ce, We) {
          A.set(We, Tn(Ce, i, a, We, n, I));
        });
        var Ie = X ? B ? el : Ks : B ? rn : Gt, Me = H ? r : Ie(n);
        return Rn(Me || n, function(Ce, We) {
          Me && (We = Ce, Ce = n[We]), Fu(A, We, Tn(Ce, i, a, We, n, I));
        }), A;
      }
      function Fb(n) {
        var i = Gt(n);
        return function(a) {
          return mf(a, n, i);
        };
      }
      function mf(n, i, a) {
        var d = a.length;
        if (n == null)
          return !d;
        for (n = st(n); d--; ) {
          var m = a[d], I = i[m], A = n[m];
          if (A === r && !(m in n) || !I(A))
            return !1;
        }
        return !0;
      }
      function bf(n, i, a) {
        if (typeof n != "function")
          throw new On(l);
        return Gu(function() {
          n.apply(r, a);
        }, i);
      }
      function Pu(n, i, a, d) {
        var m = -1, I = Oo, A = !0, P = n.length, B = [], X = i.length;
        if (!P)
          return B;
        a && (i = gt(i, mn(a))), d ? (I = Is, A = !1) : i.length >= o && (I = Cu, A = !1, i = new ni(i));
        e:
          for (; ++m < P; ) {
            var H = n[m], U = a == null ? H : a(H);
            if (H = d || H !== 0 ? H : 0, A && U === U) {
              for (var ne = X; ne--; )
                if (i[ne] === U)
                  continue e;
              B.push(H);
            } else I(i, U, d) || B.push(H);
          }
        return B;
      }
      var Or = zf(qn), yf = zf(Ls, !0);
      function Pb(n, i) {
        var a = !0;
        return Or(n, function(d, m, I) {
          return a = !!i(d, m, I), a;
        }), a;
      }
      function Uo(n, i, a) {
        for (var d = -1, m = n.length; ++d < m; ) {
          var I = n[d], A = i(I);
          if (A != null && (P === r ? A === A && !yn(A) : a(A, P)))
            var P = A, B = I;
        }
        return B;
      }
      function Rb(n, i, a, d) {
        var m = n.length;
        for (a = Le(a), a < 0 && (a = -a > m ? 0 : m + a), d = d === r || d > m ? m : Le(d), d < 0 && (d += m), d = a > d ? 0 : kd(d); a < d; )
          n[a++] = i;
        return n;
      }
      function vf(n, i) {
        var a = [];
        return Or(n, function(d, m, I) {
          i(d, m, I) && a.push(d);
        }), a;
      }
      function Dt(n, i, a, d, m) {
        var I = -1, A = n.length;
        for (a || (a = b0), m || (m = []); ++I < A; ) {
          var P = n[I];
          i > 0 && a(P) ? i > 1 ? Dt(P, i - 1, a, d, m) : Fr(m, P) : d || (m[m.length] = P);
        }
        return m;
      }
      var ks = Zf(), If = Zf(!0);
      function qn(n, i) {
        return n && ks(n, i, Gt);
      }
      function Ls(n, i) {
        return n && If(n, i, Gt);
      }
      function jo(n, i) {
        return Er(i, function(a) {
          return br(n[a]);
        });
      }
      function ii(n, i) {
        i = Tr(i, n);
        for (var a = 0, d = i.length; n != null && a < d; )
          n = n[Kn(i[a++])];
        return a && a == d ? n : r;
      }
      function Cf(n, i, a) {
        var d = i(n);
        return _e(n) ? d : Fr(d, a(n));
      }
      function Jt(n) {
        return n == null ? n === r ? rt : ue : ei && ei in st(n) ? f0(n) : w0(n);
      }
      function Ds(n, i) {
        return n > i;
      }
      function Ob(n, i) {
        return n != null && tt.call(n, i);
      }
      function _b(n, i) {
        return n != null && i in st(n);
      }
      function Tb(n, i, a) {
        return n >= Wt(i, a) && n < _t(i, a);
      }
      function Ms(n, i, a) {
        for (var d = a ? Is : Oo, m = n[0].length, I = n.length, A = I, P = D(I), B = 1 / 0, X = []; A--; ) {
          var H = n[A];
          A && i && (H = gt(H, mn(i))), B = Wt(H.length, B), P[A] = !a && (i || m >= 120 && H.length >= 120) ? new ni(A && H) : r;
        }
        H = n[0];
        var U = -1, ne = P[0];
        e:
          for (; ++U < m && X.length < B; ) {
            var le = H[U], Ie = i ? i(le) : le;
            if (le = a || le !== 0 ? le : 0, !(ne ? Cu(ne, Ie) : d(X, Ie, a))) {
              for (A = I; --A; ) {
                var Me = P[A];
                if (!(Me ? Cu(Me, Ie) : d(n[A], Ie, a)))
                  continue e;
              }
              ne && ne.push(Ie), X.push(le);
            }
          }
        return X;
      }
      function Bb(n, i, a, d) {
        return qn(n, function(m, I, A) {
          i(d, a(m), I, A);
        }), d;
      }
      function Ru(n, i, a) {
        i = Tr(i, n), n = sd(n, i);
        var d = n == null ? n : n[Kn(Gn(i))];
        return d == null ? r : Bt(d, n, a);
      }
      function xf(n) {
        return yt(n) && Jt(n) == fe;
      }
      function Gb(n) {
        return yt(n) && Jt(n) == Q;
      }
      function kb(n) {
        return yt(n) && Jt(n) == bt;
      }
      function Ou(n, i, a, d, m) {
        return n === i ? !0 : n == null || i == null || !yt(n) && !yt(i) ? n !== n && i !== i : Lb(n, i, a, d, Ou, m);
      }
      function Lb(n, i, a, d, m, I) {
        var A = _e(n), P = _e(i), B = A ? Ee : Xt(n), X = P ? Ee : Xt(i);
        B = B == fe ? ce : B, X = X == fe ? ce : X;
        var H = B == ce, U = X == ce, ne = B == X;
        if (ne && Gr(n)) {
          if (!Gr(i))
            return !1;
          A = !0, H = !1;
        }
        if (ne && !H)
          return I || (I = new Hn()), A || Vi(n) ? td(n, i, a, d, m, I) : l0(n, i, B, a, d, m, I);
        if (!(a & E)) {
          var le = H && tt.call(n, "__wrapped__"), Ie = U && tt.call(i, "__wrapped__");
          if (le || Ie) {
            var Me = le ? n.value() : n, Ce = Ie ? i.value() : i;
            return I || (I = new Hn()), m(Me, Ce, a, d, I);
          }
        }
        return ne ? (I || (I = new Hn()), c0(n, i, a, d, m, I)) : !1;
      }
      function Db(n) {
        return yt(n) && Xt(n) == Ct;
      }
      function Ns(n, i, a, d) {
        var m = a.length, I = m, A = !d;
        if (n == null)
          return !I;
        for (n = st(n); m--; ) {
          var P = a[m];
          if (A && P[2] ? P[1] !== n[P[0]] : !(P[0] in n))
            return !1;
        }
        for (; ++m < I; ) {
          P = a[m];
          var B = P[0], X = n[B], H = P[1];
          if (A && P[2]) {
            if (X === r && !(B in n))
              return !1;
          } else {
            var U = new Hn();
            if (d)
              var ne = d(X, H, B, n, i, U);
            if (!(ne === r ? Ou(H, X, E | w, d, U) : ne))
              return !1;
          }
        }
        return !0;
      }
      function Af(n) {
        if (!mt(n) || v0(n))
          return !1;
        var i = br(n) ? Dm : is;
        return i.test(oi(n));
      }
      function Mb(n) {
        return yt(n) && Jt(n) == et;
      }
      function Nb(n) {
        return yt(n) && Xt(n) == Rt;
      }
      function Vb(n) {
        return yt(n) && da(n.length) && !!ut[Jt(n)];
      }
      function wf(n) {
        return typeof n == "function" ? n : n == null ? un : typeof n == "object" ? _e(n) ? Ff(n[0], n[1]) : Ef(n) : Yd(n);
      }
      function Vs(n) {
        if (!Bu(n))
          return Hm(n);
        var i = [];
        for (var a in st(n))
          tt.call(n, a) && a != "constructor" && i.push(a);
        return i;
      }
      function Wb(n) {
        if (!mt(n))
          return A0(n);
        var i = Bu(n), a = [];
        for (var d in n)
          d == "constructor" && (i || !tt.call(n, d)) || a.push(d);
        return a;
      }
      function Ws(n, i) {
        return n < i;
      }
      function Sf(n, i) {
        var a = -1, d = nn(n) ? D(n.length) : [];
        return Or(n, function(m, I, A) {
          d[++a] = i(m, I, A);
        }), d;
      }
      function Ef(n) {
        var i = nl(n);
        return i.length == 1 && i[0][2] ? od(i[0][0], i[0][1]) : function(a) {
          return a === n || Ns(a, n, i);
        };
      }
      function Ff(n, i) {
        return il(n) && ud(i) ? od(Kn(n), i) : function(a) {
          var d = hl(a, n);
          return d === r && d === i ? gl(a, n) : Ou(i, d, E | w);
        };
      }
      function Qo(n, i, a, d, m) {
        n !== i && ks(i, function(I, A) {
          if (m || (m = new Hn()), mt(I))
            Xb(n, i, A, a, Qo, d, m);
          else {
            var P = d ? d(ol(n, A), I, A + "", n, i, m) : r;
            P === r && (P = I), Bs(n, A, P);
          }
        }, rn);
      }
      function Xb(n, i, a, d, m, I, A) {
        var P = ol(n, a), B = ol(i, a), X = A.get(B);
        if (X) {
          Bs(n, a, X);
          return;
        }
        var H = I ? I(P, B, a + "", n, i, A) : r, U = H === r;
        if (U) {
          var ne = _e(B), le = !ne && Gr(B), Ie = !ne && !le && Vi(B);
          H = B, ne || le || Ie ? _e(P) ? H = P : At(P) ? H = tn(P) : le ? (U = !1, H = Nf(B, !0)) : Ie ? (U = !1, H = Vf(B, !0)) : H = [] : ku(B) || ai(B) ? (H = P, ai(P) ? H = Ld(P) : (!mt(P) || br(P)) && (H = id(B))) : U = !1;
        }
        U && (A.set(B, H), m(H, B, d, I, A), A.delete(B)), Bs(n, a, H);
      }
      function Pf(n, i) {
        var a = n.length;
        if (a)
          return i += i < 0 ? a : 0, mr(i, a) ? n[i] : r;
      }
      function Rf(n, i, a) {
        i.length ? i = gt(i, function(I) {
          return _e(I) ? function(A) {
            return ii(A, I.length === 1 ? I[0] : I);
          } : I;
        }) : i = [un];
        var d = -1;
        i = gt(i, mn(ye()));
        var m = Sf(n, function(I, A, P) {
          var B = gt(i, function(X) {
            return X(I);
          });
          return { criteria: B, index: ++d, value: I };
        });
        return gm(m, function(I, A) {
          return t0(I, A, a);
        });
      }
      function Hb(n, i) {
        return Of(n, i, function(a, d) {
          return gl(n, d);
        });
      }
      function Of(n, i, a) {
        for (var d = -1, m = i.length, I = {}; ++d < m; ) {
          var A = i[d], P = ii(n, A);
          a(P, A) && _u(I, Tr(A, n), P);
        }
        return I;
      }
      function zb(n) {
        return function(i) {
          return ii(i, n);
        };
      }
      function Xs(n, i, a, d) {
        var m = d ? hm : Ri, I = -1, A = i.length, P = n;
        for (n === i && (i = tn(i)), a && (P = gt(n, mn(a))); ++I < A; )
          for (var B = 0, X = i[I], H = a ? a(X) : X; (B = m(P, H, B, d)) > -1; )
            P !== n && Vo.call(P, B, 1), Vo.call(n, B, 1);
        return n;
      }
      function _f(n, i) {
        for (var a = n ? i.length : 0, d = a - 1; a--; ) {
          var m = i[a];
          if (a == d || m !== I) {
            var I = m;
            mr(m) ? Vo.call(n, m, 1) : Ys(n, m);
          }
        }
        return n;
      }
      function Hs(n, i) {
        return n + Ho(ff() * (i - n + 1));
      }
      function Zb(n, i, a, d) {
        for (var m = -1, I = _t(Xo((i - n) / (a || 1)), 0), A = D(I); I--; )
          A[d ? I : ++m] = n, n += a;
        return A;
      }
      function zs(n, i) {
        var a = "";
        if (!n || i < 1 || i > Pe)
          return a;
        do
          i % 2 && (a += n), i = Ho(i / 2), i && (n += n);
        while (i);
        return a;
      }
      function Ve(n, i) {
        return al(ad(n, i, un), n + "");
      }
      function Yb(n) {
        return hf(Wi(n));
      }
      function Jb(n, i) {
        var a = Wi(n);
        return oa(a, ri(i, 0, a.length));
      }
      function _u(n, i, a, d) {
        if (!mt(n))
          return n;
        i = Tr(i, n);
        for (var m = -1, I = i.length, A = I - 1, P = n; P != null && ++m < I; ) {
          var B = Kn(i[m]), X = a;
          if (B === "__proto__" || B === "constructor" || B === "prototype")
            return n;
          if (m != A) {
            var H = P[B];
            X = d ? d(H, B, P) : r, X === r && (X = mt(H) ? H : mr(i[m + 1]) ? [] : {});
          }
          Fu(P, B, X), P = P[B];
        }
        return n;
      }
      var Tf = zo ? function(n, i) {
        return zo.set(n, i), n;
      } : un, Ub = Wo ? function(n, i) {
        return Wo(n, "toString", {
          configurable: !0,
          enumerable: !1,
          value: bl(i),
          writable: !0
        });
      } : un;
      function jb(n) {
        return oa(Wi(n));
      }
      function Bn(n, i, a) {
        var d = -1, m = n.length;
        i < 0 && (i = -i > m ? 0 : m + i), a = a > m ? m : a, a < 0 && (a += m), m = i > a ? 0 : a - i >>> 0, i >>>= 0;
        for (var I = D(m); ++d < m; )
          I[d] = n[d + i];
        return I;
      }
      function Qb(n, i) {
        var a;
        return Or(n, function(d, m, I) {
          return a = i(d, m, I), !a;
        }), !!a;
      }
      function qo(n, i, a) {
        var d = 0, m = n == null ? d : n.length;
        if (typeof i == "number" && i === i && m <= S) {
          for (; d < m; ) {
            var I = d + m >>> 1, A = n[I];
            A !== null && !yn(A) && (a ? A <= i : A < i) ? d = I + 1 : m = I;
          }
          return m;
        }
        return Zs(n, i, un, a);
      }
      function Zs(n, i, a, d) {
        var m = 0, I = n == null ? 0 : n.length;
        if (I === 0)
          return 0;
        i = a(i);
        for (var A = i !== i, P = i === null, B = yn(i), X = i === r; m < I; ) {
          var H = Ho((m + I) / 2), U = a(n[H]), ne = U !== r, le = U === null, Ie = U === U, Me = yn(U);
          if (A)
            var Ce = d || Ie;
          else X ? Ce = Ie && (d || ne) : P ? Ce = Ie && ne && (d || !le) : B ? Ce = Ie && ne && !le && (d || !Me) : le || Me ? Ce = !1 : Ce = d ? U <= i : U < i;
          Ce ? m = H + 1 : I = H;
        }
        return Wt(I, Se);
      }
      function Bf(n, i) {
        for (var a = -1, d = n.length, m = 0, I = []; ++a < d; ) {
          var A = n[a], P = i ? i(A) : A;
          if (!a || !zn(P, B)) {
            var B = P;
            I[m++] = A === 0 ? 0 : A;
          }
        }
        return I;
      }
      function Gf(n) {
        return typeof n == "number" ? n : yn(n) ? x : +n;
      }
      function bn(n) {
        if (typeof n == "string")
          return n;
        if (_e(n))
          return gt(n, bn) + "";
        if (yn(n))
          return df ? df.call(n) : "";
        var i = n + "";
        return i == "0" && 1 / n == -1 / 0 ? "-0" : i;
      }
      function _r(n, i, a) {
        var d = -1, m = Oo, I = n.length, A = !0, P = [], B = P;
        if (a)
          A = !1, m = Is;
        else if (I >= o) {
          var X = i ? null : a0(n);
          if (X)
            return To(X);
          A = !1, m = Cu, B = new ni();
        } else
          B = i ? [] : P;
        e:
          for (; ++d < I; ) {
            var H = n[d], U = i ? i(H) : H;
            if (H = a || H !== 0 ? H : 0, A && U === U) {
              for (var ne = B.length; ne--; )
                if (B[ne] === U)
                  continue e;
              i && B.push(U), P.push(H);
            } else m(B, U, a) || (B !== P && B.push(U), P.push(H));
          }
        return P;
      }
      function Ys(n, i) {
        return i = Tr(i, n), n = sd(n, i), n == null || delete n[Kn(Gn(i))];
      }
      function kf(n, i, a, d) {
        return _u(n, i, a(ii(n, i)), d);
      }
      function $o(n, i, a, d) {
        for (var m = n.length, I = d ? m : -1; (d ? I-- : ++I < m) && i(n[I], I, n); )
          ;
        return a ? Bn(n, d ? 0 : I, d ? I + 1 : m) : Bn(n, d ? I + 1 : 0, d ? m : I);
      }
      function Lf(n, i) {
        var a = n;
        return a instanceof Xe && (a = a.value()), Cs(i, function(d, m) {
          return m.func.apply(m.thisArg, Fr([d], m.args));
        }, a);
      }
      function Js(n, i, a) {
        var d = n.length;
        if (d < 2)
          return d ? _r(n[0]) : [];
        for (var m = -1, I = D(d); ++m < d; )
          for (var A = n[m], P = -1; ++P < d; )
            P != m && (I[m] = Pu(I[m] || A, n[P], i, a));
        return _r(Dt(I, 1), i, a);
      }
      function Df(n, i, a) {
        for (var d = -1, m = n.length, I = i.length, A = {}; ++d < m; ) {
          var P = d < I ? i[d] : r;
          a(A, n[d], P);
        }
        return A;
      }
      function Us(n) {
        return At(n) ? n : [];
      }
      function js(n) {
        return typeof n == "function" ? n : un;
      }
      function Tr(n, i) {
        return _e(n) ? n : il(n, i) ? [n] : dd(qe(n));
      }
      var qb = Ve;
      function Br(n, i, a) {
        var d = n.length;
        return a = a === r ? d : a, !i && a >= d ? n : Bn(n, i, a);
      }
      var Mf = Mm || function(n) {
        return He.clearTimeout(n);
      };
      function Nf(n, i) {
        if (i)
          return n.slice();
        var a = n.length, d = of ? of(a) : new n.constructor(a);
        return n.copy(d), d;
      }
      function Qs(n) {
        var i = new n.constructor(n.byteLength);
        return new Mo(i).set(new Mo(n)), i;
      }
      function $b(n, i) {
        var a = i ? Qs(n.buffer) : n.buffer;
        return new n.constructor(a, n.byteOffset, n.byteLength);
      }
      function Kb(n) {
        var i = new n.constructor(n.source, Fn.exec(n));
        return i.lastIndex = n.lastIndex, i;
      }
      function e0(n) {
        return Eu ? st(Eu.call(n)) : {};
      }
      function Vf(n, i) {
        var a = i ? Qs(n.buffer) : n.buffer;
        return new n.constructor(a, n.byteOffset, n.length);
      }
      function Wf(n, i) {
        if (n !== i) {
          var a = n !== r, d = n === null, m = n === n, I = yn(n), A = i !== r, P = i === null, B = i === i, X = yn(i);
          if (!P && !X && !I && n > i || I && A && B && !P && !X || d && A && B || !a && B || !m)
            return 1;
          if (!d && !I && !X && n < i || X && a && m && !d && !I || P && a && m || !A && m || !B)
            return -1;
        }
        return 0;
      }
      function t0(n, i, a) {
        for (var d = -1, m = n.criteria, I = i.criteria, A = m.length, P = a.length; ++d < A; ) {
          var B = Wf(m[d], I[d]);
          if (B) {
            if (d >= P)
              return B;
            var X = a[d];
            return B * (X == "desc" ? -1 : 1);
          }
        }
        return n.index - i.index;
      }
      function Xf(n, i, a, d) {
        for (var m = -1, I = n.length, A = a.length, P = -1, B = i.length, X = _t(I - A, 0), H = D(B + X), U = !d; ++P < B; )
          H[P] = i[P];
        for (; ++m < A; )
          (U || m < I) && (H[a[m]] = n[m]);
        for (; X--; )
          H[P++] = n[m++];
        return H;
      }
      function Hf(n, i, a, d) {
        for (var m = -1, I = n.length, A = -1, P = a.length, B = -1, X = i.length, H = _t(I - P, 0), U = D(H + X), ne = !d; ++m < H; )
          U[m] = n[m];
        for (var le = m; ++B < X; )
          U[le + B] = i[B];
        for (; ++A < P; )
          (ne || m < I) && (U[le + a[A]] = n[m++]);
        return U;
      }
      function tn(n, i) {
        var a = -1, d = n.length;
        for (i || (i = D(d)); ++a < d; )
          i[a] = n[a];
        return i;
      }
      function $n(n, i, a, d) {
        var m = !a;
        a || (a = {});
        for (var I = -1, A = i.length; ++I < A; ) {
          var P = i[I], B = d ? d(a[P], n[P], P, a, n) : r;
          B === r && (B = n[P]), m ? pr(a, P, B) : Fu(a, P, B);
        }
        return a;
      }
      function n0(n, i) {
        return $n(n, rl(n), i);
      }
      function r0(n, i) {
        return $n(n, nd(n), i);
      }
      function Ko(n, i) {
        return function(a, d) {
          var m = _e(a) ? sm : Sb, I = i ? i() : {};
          return m(a, n, ye(d, 2), I);
        };
      }
      function Di(n) {
        return Ve(function(i, a) {
          var d = -1, m = a.length, I = m > 1 ? a[m - 1] : r, A = m > 2 ? a[2] : r;
          for (I = n.length > 3 && typeof I == "function" ? (m--, I) : r, A && Ut(a[0], a[1], A) && (I = m < 3 ? r : I, m = 1), i = st(i); ++d < m; ) {
            var P = a[d];
            P && n(i, P, d, I);
          }
          return i;
        });
      }
      function zf(n, i) {
        return function(a, d) {
          if (a == null)
            return a;
          if (!nn(a))
            return n(a, d);
          for (var m = a.length, I = i ? m : -1, A = st(a); (i ? I-- : ++I < m) && d(A[I], I, A) !== !1; )
            ;
          return a;
        };
      }
      function Zf(n) {
        return function(i, a, d) {
          for (var m = -1, I = st(i), A = d(i), P = A.length; P--; ) {
            var B = A[n ? P : ++m];
            if (a(I[B], B, I) === !1)
              break;
          }
          return i;
        };
      }
      function i0(n, i, a) {
        var d = i & F, m = Tu(n);
        function I() {
          var A = this && this !== He && this instanceof I ? m : n;
          return A.apply(d ? a : this, arguments);
        }
        return I;
      }
      function Yf(n) {
        return function(i) {
          i = qe(i);
          var a = Oi(i) ? Xn(i) : r, d = a ? a[0] : i.charAt(0), m = a ? Br(a, 1).join("") : i.slice(1);
          return d[n]() + m;
        };
      }
      function Mi(n) {
        return function(i) {
          return Cs(zd(Hd(i).replace(vu, "")), n, "");
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
          var a = Li(n.prototype), d = n.apply(a, i);
          return mt(d) ? d : a;
        };
      }
      function u0(n, i, a) {
        var d = Tu(n);
        function m() {
          for (var I = arguments.length, A = D(I), P = I, B = Ni(m); P--; )
            A[P] = arguments[P];
          var X = I < 3 && A[0] !== B && A[I - 1] !== B ? [] : Pr(A, B);
          if (I -= X.length, I < a)
            return qf(
              n,
              i,
              ea,
              m.placeholder,
              r,
              A,
              X,
              r,
              r,
              a - I
            );
          var H = this && this !== He && this instanceof m ? d : n;
          return Bt(H, this, A);
        }
        return m;
      }
      function Jf(n) {
        return function(i, a, d) {
          var m = st(i);
          if (!nn(i)) {
            var I = ye(a, 3);
            i = Gt(i), a = function(P) {
              return I(m[P], P, m);
            };
          }
          var A = n(i, a, d);
          return A > -1 ? m[I ? i[A] : A] : r;
        };
      }
      function Uf(n) {
        return gr(function(i) {
          var a = i.length, d = a, m = _n.prototype.thru;
          for (n && i.reverse(); d--; ) {
            var I = i[d];
            if (typeof I != "function")
              throw new On(l);
            if (m && !A && ia(I) == "wrapper")
              var A = new _n([], !0);
          }
          for (d = A ? d : a; ++d < a; ) {
            I = i[d];
            var P = ia(I), B = P == "wrapper" ? tl(I) : r;
            B && ul(B[0]) && B[1] == (j | k | J | M) && !B[4].length && B[9] == 1 ? A = A[ia(B[0])].apply(A, B[3]) : A = I.length == 1 && ul(I) ? A[P]() : A.thru(I);
          }
          return function() {
            var X = arguments, H = X[0];
            if (A && X.length == 1 && _e(H))
              return A.plant(H).value();
            for (var U = 0, ne = a ? i[U].apply(this, X) : H; ++U < a; )
              ne = i[U].call(this, ne);
            return ne;
          };
        });
      }
      function ea(n, i, a, d, m, I, A, P, B, X) {
        var H = i & j, U = i & F, ne = i & R, le = i & (k | N), Ie = i & Y, Me = ne ? r : Tu(n);
        function Ce() {
          for (var We = arguments.length, ze = D(We), vn = We; vn--; )
            ze[vn] = arguments[vn];
          if (le)
            var jt = Ni(Ce), In = bm(ze, jt);
          if (d && (ze = Xf(ze, d, m, le)), I && (ze = Hf(ze, I, A, le)), We -= In, le && We < X) {
            var wt = Pr(ze, jt);
            return qf(
              n,
              i,
              ea,
              Ce.placeholder,
              a,
              ze,
              wt,
              P,
              B,
              X - We
            );
          }
          var Zn = U ? a : this, vr = ne ? Zn[n] : n;
          return We = ze.length, P ? ze = S0(ze, P) : Ie && We > 1 && ze.reverse(), H && B < We && (ze.length = B), this && this !== He && this instanceof Ce && (vr = Me || Tu(vr)), vr.apply(Zn, ze);
        }
        return Ce;
      }
      function jf(n, i) {
        return function(a, d) {
          return Bb(a, n, i(d), {});
        };
      }
      function ta(n, i) {
        return function(a, d) {
          var m;
          if (a === r && d === r)
            return i;
          if (a !== r && (m = a), d !== r) {
            if (m === r)
              return d;
            typeof a == "string" || typeof d == "string" ? (a = bn(a), d = bn(d)) : (a = Gf(a), d = Gf(d)), m = n(a, d);
          }
          return m;
        };
      }
      function qs(n) {
        return gr(function(i) {
          return i = gt(i, mn(ye())), Ve(function(a) {
            var d = this;
            return n(i, function(m) {
              return Bt(m, d, a);
            });
          });
        });
      }
      function na(n, i) {
        i = i === r ? " " : bn(i);
        var a = i.length;
        if (a < 2)
          return a ? zs(i, n) : i;
        var d = zs(i, Xo(n / _i(i)));
        return Oi(i) ? Br(Xn(d), 0, n).join("") : d.slice(0, n);
      }
      function o0(n, i, a, d) {
        var m = i & F, I = Tu(n);
        function A() {
          for (var P = -1, B = arguments.length, X = -1, H = d.length, U = D(H + B), ne = this && this !== He && this instanceof A ? I : n; ++X < H; )
            U[X] = d[X];
          for (; B--; )
            U[X++] = arguments[++P];
          return Bt(ne, m ? a : this, U);
        }
        return A;
      }
      function Qf(n) {
        return function(i, a, d) {
          return d && typeof d != "number" && Ut(i, a, d) && (a = d = r), i = yr(i), a === r ? (a = i, i = 0) : a = yr(a), d = d === r ? i < a ? 1 : -1 : yr(d), Zb(i, a, d, n);
        };
      }
      function ra(n) {
        return function(i, a) {
          return typeof i == "string" && typeof a == "string" || (i = kn(i), a = kn(a)), n(i, a);
        };
      }
      function qf(n, i, a, d, m, I, A, P, B, X) {
        var H = i & k, U = H ? A : r, ne = H ? r : A, le = H ? I : r, Ie = H ? r : I;
        i |= H ? J : G, i &= ~(H ? G : J), i & W || (i &= -4);
        var Me = [
          n,
          i,
          m,
          le,
          U,
          Ie,
          ne,
          P,
          B,
          X
        ], Ce = a.apply(r, Me);
        return ul(n) && ld(Ce, Me), Ce.placeholder = d, cd(Ce, n, i);
      }
      function $s(n) {
        var i = Ot[n];
        return function(a, d) {
          if (a = kn(a), d = d == null ? 0 : Wt(Le(d), 292), d && cf(a)) {
            var m = (qe(a) + "e").split("e"), I = i(m[0] + "e" + (+m[1] + d));
            return m = (qe(I) + "e").split("e"), +(m[0] + "e" + (+m[1] - d));
          }
          return i(a);
        };
      }
      var a0 = Gi && 1 / To(new Gi([, -0]))[1] == xe ? function(n) {
        return new Gi(n);
      } : Il;
      function $f(n) {
        return function(i) {
          var a = Xt(i);
          return a == Ct ? Ps(i) : a == Rt ? wm(i) : mm(i, n(i));
        };
      }
      function hr(n, i, a, d, m, I, A, P) {
        var B = i & R;
        if (!B && typeof n != "function")
          throw new On(l);
        var X = d ? d.length : 0;
        if (X || (i &= -97, d = m = r), A = A === r ? A : _t(Le(A), 0), P = P === r ? P : Le(P), X -= m ? m.length : 0, i & G) {
          var H = d, U = m;
          d = m = r;
        }
        var ne = B ? r : tl(n), le = [
          n,
          i,
          a,
          d,
          m,
          H,
          U,
          I,
          A,
          P
        ];
        if (ne && x0(le, ne), n = le[0], i = le[1], a = le[2], d = le[3], m = le[4], P = le[9] = le[9] === r ? B ? 0 : n.length : _t(le[9] - X, 0), !P && i & (k | N) && (i &= -25), !i || i == F)
          var Ie = i0(n, i, a);
        else i == k || i == N ? Ie = u0(n, i, P) : (i == J || i == (F | J)) && !m.length ? Ie = o0(n, i, a, d) : Ie = ea.apply(r, le);
        var Me = ne ? Tf : ld;
        return cd(Me(Ie, le), n, i);
      }
      function Kf(n, i, a, d) {
        return n === r || zn(n, Bi[a]) && !tt.call(d, a) ? i : n;
      }
      function ed(n, i, a, d, m, I) {
        return mt(n) && mt(i) && (I.set(i, n), Qo(n, i, r, ed, I), I.delete(i)), n;
      }
      function s0(n) {
        return ku(n) ? r : n;
      }
      function td(n, i, a, d, m, I) {
        var A = a & E, P = n.length, B = i.length;
        if (P != B && !(A && B > P))
          return !1;
        var X = I.get(n), H = I.get(i);
        if (X && H)
          return X == i && H == n;
        var U = -1, ne = !0, le = a & w ? new ni() : r;
        for (I.set(n, i), I.set(i, n); ++U < P; ) {
          var Ie = n[U], Me = i[U];
          if (d)
            var Ce = A ? d(Me, Ie, U, i, n, I) : d(Ie, Me, U, n, i, I);
          if (Ce !== r) {
            if (Ce)
              continue;
            ne = !1;
            break;
          }
          if (le) {
            if (!xs(i, function(We, ze) {
              if (!Cu(le, ze) && (Ie === We || m(Ie, We, a, d, I)))
                return le.push(ze);
            })) {
              ne = !1;
              break;
            }
          } else if (!(Ie === Me || m(Ie, Me, a, d, I))) {
            ne = !1;
            break;
          }
        }
        return I.delete(n), I.delete(i), ne;
      }
      function l0(n, i, a, d, m, I, A) {
        switch (a) {
          case ge:
            if (n.byteLength != i.byteLength || n.byteOffset != i.byteOffset)
              return !1;
            n = n.buffer, i = i.buffer;
          case Q:
            return !(n.byteLength != i.byteLength || !I(new Mo(n), new Mo(i)));
          case Ne:
          case bt:
          case ee:
            return zn(+n, +i);
          case kt:
            return n.name == i.name && n.message == i.message;
          case et:
          case Nn:
            return n == i + "";
          case Ct:
            var P = Ps;
          case Rt:
            var B = d & E;
            if (P || (P = To), n.size != i.size && !B)
              return !1;
            var X = A.get(n);
            if (X)
              return X == i;
            d |= w, A.set(n, i);
            var H = td(P(n), P(i), d, m, I, A);
            return A.delete(n), H;
          case nt:
            if (Eu)
              return Eu.call(n) == Eu.call(i);
        }
        return !1;
      }
      function c0(n, i, a, d, m, I) {
        var A = a & E, P = Ks(n), B = P.length, X = Ks(i), H = X.length;
        if (B != H && !A)
          return !1;
        for (var U = B; U--; ) {
          var ne = P[U];
          if (!(A ? ne in i : tt.call(i, ne)))
            return !1;
        }
        var le = I.get(n), Ie = I.get(i);
        if (le && Ie)
          return le == i && Ie == n;
        var Me = !0;
        I.set(n, i), I.set(i, n);
        for (var Ce = A; ++U < B; ) {
          ne = P[U];
          var We = n[ne], ze = i[ne];
          if (d)
            var vn = A ? d(ze, We, ne, i, n, I) : d(We, ze, ne, n, i, I);
          if (!(vn === r ? We === ze || m(We, ze, a, d, I) : vn)) {
            Me = !1;
            break;
          }
          Ce || (Ce = ne == "constructor");
        }
        if (Me && !Ce) {
          var jt = n.constructor, In = i.constructor;
          jt != In && "constructor" in n && "constructor" in i && !(typeof jt == "function" && jt instanceof jt && typeof In == "function" && In instanceof In) && (Me = !1);
        }
        return I.delete(n), I.delete(i), Me;
      }
      function gr(n) {
        return al(ad(n, r, md), n + "");
      }
      function Ks(n) {
        return Cf(n, Gt, rl);
      }
      function el(n) {
        return Cf(n, rn, nd);
      }
      var tl = zo ? function(n) {
        return zo.get(n);
      } : Il;
      function ia(n) {
        for (var i = n.name + "", a = ki[i], d = tt.call(ki, i) ? a.length : 0; d--; ) {
          var m = a[d], I = m.func;
          if (I == null || I == n)
            return m.name;
        }
        return i;
      }
      function Ni(n) {
        var i = tt.call(y, "placeholder") ? y : n;
        return i.placeholder;
      }
      function ye() {
        var n = y.iteratee || yl;
        return n = n === yl ? wf : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function ua(n, i) {
        var a = n.__data__;
        return y0(i) ? a[typeof i == "string" ? "string" : "hash"] : a.map;
      }
      function nl(n) {
        for (var i = Gt(n), a = i.length; a--; ) {
          var d = i[a], m = n[d];
          i[a] = [d, m, ud(m)];
        }
        return i;
      }
      function ui(n, i) {
        var a = Cm(n, i);
        return Af(a) ? a : r;
      }
      function f0(n) {
        var i = tt.call(n, ei), a = n[ei];
        try {
          n[ei] = r;
          var d = !0;
        } catch {
        }
        var m = Lo.call(n);
        return d && (i ? n[ei] = a : delete n[ei]), m;
      }
      var rl = Os ? function(n) {
        return n == null ? [] : (n = st(n), Er(Os(n), function(i) {
          return sf.call(n, i);
        }));
      } : Cl, nd = Os ? function(n) {
        for (var i = []; n; )
          Fr(i, rl(n)), n = No(n);
        return i;
      } : Cl, Xt = Jt;
      (_s && Xt(new _s(new ArrayBuffer(1))) != ge || Au && Xt(new Au()) != Ct || Ts && Xt(Ts.resolve()) != De || Gi && Xt(new Gi()) != Rt || wu && Xt(new wu()) != Qe) && (Xt = function(n) {
        var i = Jt(n), a = i == ce ? n.constructor : r, d = a ? oi(a) : "";
        if (d)
          switch (d) {
            case Jm:
              return ge;
            case Um:
              return Ct;
            case jm:
              return De;
            case Qm:
              return Rt;
            case qm:
              return Qe;
          }
        return i;
      });
      function d0(n, i, a) {
        for (var d = -1, m = a.length; ++d < m; ) {
          var I = a[d], A = I.size;
          switch (I.type) {
            case "drop":
              n += A;
              break;
            case "dropRight":
              i -= A;
              break;
            case "take":
              i = Wt(i, n + A);
              break;
            case "takeRight":
              n = _t(n, i - A);
              break;
          }
        }
        return { start: n, end: i };
      }
      function p0(n) {
        var i = n.match(sr);
        return i ? i[1].split(qa) : [];
      }
      function rd(n, i, a) {
        i = Tr(i, n);
        for (var d = -1, m = i.length, I = !1; ++d < m; ) {
          var A = Kn(i[d]);
          if (!(I = n != null && a(n, A)))
            break;
          n = n[A];
        }
        return I || ++d != m ? I : (m = n == null ? 0 : n.length, !!m && da(m) && mr(A, m) && (_e(n) || ai(n)));
      }
      function h0(n) {
        var i = n.length, a = new n.constructor(i);
        return i && typeof n[0] == "string" && tt.call(n, "index") && (a.index = n.index, a.input = n.input), a;
      }
      function id(n) {
        return typeof n.constructor == "function" && !Bu(n) ? Li(No(n)) : {};
      }
      function g0(n, i, a) {
        var d = n.constructor;
        switch (i) {
          case Q:
            return Qs(n);
          case Ne:
          case bt:
            return new d(+n);
          case ge:
            return $b(n, a);
          case Be:
          case Ge:
          case Tt:
          case $t:
          case Zt:
          case En:
          case Kt:
          case St:
          case pn:
            return Vf(n, a);
          case Ct:
            return new d();
          case ee:
          case Nn:
            return new d(n);
          case et:
            return Kb(n);
          case Rt:
            return new d();
          case nt:
            return e0(n);
        }
      }
      function m0(n, i) {
        var a = i.length;
        if (!a)
          return n;
        var d = a - 1;
        return i[d] = (a > 1 ? "& " : "") + i[d], i = i.join(a > 2 ? ", " : " "), n.replace(mu, `{
/* [wrapped with ` + i + `] */
`);
      }
      function b0(n) {
        return _e(n) || ai(n) || !!(lf && n && n[lf]);
      }
      function mr(n, i) {
        var a = typeof n;
        return i = i ?? Pe, !!i && (a == "number" || a != "symbol" && os.test(n)) && n > -1 && n % 1 == 0 && n < i;
      }
      function Ut(n, i, a) {
        if (!mt(a))
          return !1;
        var d = typeof i;
        return (d == "number" ? nn(a) && mr(i, a.length) : d == "string" && i in a) ? zn(a[i], n) : !1;
      }
      function il(n, i) {
        if (_e(n))
          return !1;
        var a = typeof n;
        return a == "number" || a == "symbol" || a == "boolean" || n == null || yn(n) ? !0 : Ua.test(n) || !Ur.test(n) || i != null && n in st(i);
      }
      function y0(n) {
        var i = typeof n;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? n !== "__proto__" : n === null;
      }
      function ul(n) {
        var i = ia(n), a = y[i];
        if (typeof a != "function" || !(i in Xe.prototype))
          return !1;
        if (n === a)
          return !0;
        var d = tl(a);
        return !!d && n === d[0];
      }
      function v0(n) {
        return !!uf && uf in n;
      }
      var I0 = Go ? br : xl;
      function Bu(n) {
        var i = n && n.constructor, a = typeof i == "function" && i.prototype || Bi;
        return n === a;
      }
      function ud(n) {
        return n === n && !mt(n);
      }
      function od(n, i) {
        return function(a) {
          return a == null ? !1 : a[n] === i && (i !== r || n in st(a));
        };
      }
      function C0(n) {
        var i = ca(n, function(d) {
          return a.size === p && a.clear(), d;
        }), a = i.cache;
        return i;
      }
      function x0(n, i) {
        var a = n[1], d = i[1], m = a | d, I = m < (F | R | j), A = d == j && a == k || d == j && a == M && n[7].length <= i[8] || d == (j | M) && i[7].length <= i[8] && a == k;
        if (!(I || A))
          return n;
        d & F && (n[2] = i[2], m |= a & F ? 0 : W);
        var P = i[3];
        if (P) {
          var B = n[3];
          n[3] = B ? Xf(B, P, i[4]) : P, n[4] = B ? Pr(n[3], h) : i[4];
        }
        return P = i[5], P && (B = n[5], n[5] = B ? Hf(B, P, i[6]) : P, n[6] = B ? Pr(n[5], h) : i[6]), P = i[7], P && (n[7] = P), d & j && (n[8] = n[8] == null ? i[8] : Wt(n[8], i[8])), n[9] == null && (n[9] = i[9]), n[0] = i[0], n[1] = m, n;
      }
      function A0(n) {
        var i = [];
        if (n != null)
          for (var a in st(n))
            i.push(a);
        return i;
      }
      function w0(n) {
        return Lo.call(n);
      }
      function ad(n, i, a) {
        return i = _t(i === r ? n.length - 1 : i, 0), function() {
          for (var d = arguments, m = -1, I = _t(d.length - i, 0), A = D(I); ++m < I; )
            A[m] = d[i + m];
          m = -1;
          for (var P = D(i + 1); ++m < i; )
            P[m] = d[m];
          return P[i] = a(A), Bt(n, this, P);
        };
      }
      function sd(n, i) {
        return i.length < 2 ? n : ii(n, Bn(i, 0, -1));
      }
      function S0(n, i) {
        for (var a = n.length, d = Wt(i.length, a), m = tn(n); d--; ) {
          var I = i[d];
          n[d] = mr(I, a) ? m[I] : r;
        }
        return n;
      }
      function ol(n, i) {
        if (!(i === "constructor" && typeof n[i] == "function") && i != "__proto__")
          return n[i];
      }
      var ld = fd(Tf), Gu = Vm || function(n, i) {
        return He.setTimeout(n, i);
      }, al = fd(Ub);
      function cd(n, i, a) {
        var d = i + "";
        return al(n, m0(d, E0(p0(d), a)));
      }
      function fd(n) {
        var i = 0, a = 0;
        return function() {
          var d = zm(), m = pe - (d - a);
          if (a = d, m > 0) {
            if (++i >= z)
              return arguments[0];
          } else
            i = 0;
          return n.apply(r, arguments);
        };
      }
      function oa(n, i) {
        var a = -1, d = n.length, m = d - 1;
        for (i = i === r ? d : i; ++a < i; ) {
          var I = Hs(a, m), A = n[I];
          n[I] = n[a], n[a] = A;
        }
        return n.length = i, n;
      }
      var dd = C0(function(n) {
        var i = [];
        return n.charCodeAt(0) === 46 && i.push(""), n.replace(ja, function(a, d, m, I) {
          i.push(m ? I.replace(es, "$1") : d || a);
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
      function E0(n, i) {
        return Rn(Je, function(a) {
          var d = "_." + a[0];
          i & a[1] && !Oo(n, d) && n.push(d);
        }), n.sort();
      }
      function pd(n) {
        if (n instanceof Xe)
          return n.clone();
        var i = new _n(n.__wrapped__, n.__chain__);
        return i.__actions__ = tn(n.__actions__), i.__index__ = n.__index__, i.__values__ = n.__values__, i;
      }
      function F0(n, i, a) {
        (a ? Ut(n, i, a) : i === r) ? i = 1 : i = _t(Le(i), 0);
        var d = n == null ? 0 : n.length;
        if (!d || i < 1)
          return [];
        for (var m = 0, I = 0, A = D(Xo(d / i)); m < d; )
          A[I++] = Bn(n, m, m += i);
        return A;
      }
      function P0(n) {
        for (var i = -1, a = n == null ? 0 : n.length, d = 0, m = []; ++i < a; ) {
          var I = n[i];
          I && (m[d++] = I);
        }
        return m;
      }
      function R0() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var i = D(n - 1), a = arguments[0], d = n; d--; )
          i[d - 1] = arguments[d];
        return Fr(_e(a) ? tn(a) : [a], Dt(i, 1));
      }
      var O0 = Ve(function(n, i) {
        return At(n) ? Pu(n, Dt(i, 1, At, !0)) : [];
      }), _0 = Ve(function(n, i) {
        var a = Gn(i);
        return At(a) && (a = r), At(n) ? Pu(n, Dt(i, 1, At, !0), ye(a, 2)) : [];
      }), T0 = Ve(function(n, i) {
        var a = Gn(i);
        return At(a) && (a = r), At(n) ? Pu(n, Dt(i, 1, At, !0), r, a) : [];
      });
      function B0(n, i, a) {
        var d = n == null ? 0 : n.length;
        return d ? (i = a || i === r ? 1 : Le(i), Bn(n, i < 0 ? 0 : i, d)) : [];
      }
      function G0(n, i, a) {
        var d = n == null ? 0 : n.length;
        return d ? (i = a || i === r ? 1 : Le(i), i = d - i, Bn(n, 0, i < 0 ? 0 : i)) : [];
      }
      function k0(n, i) {
        return n && n.length ? $o(n, ye(i, 3), !0, !0) : [];
      }
      function L0(n, i) {
        return n && n.length ? $o(n, ye(i, 3), !0) : [];
      }
      function D0(n, i, a, d) {
        var m = n == null ? 0 : n.length;
        return m ? (a && typeof a != "number" && Ut(n, i, a) && (a = 0, d = m), Rb(n, i, a, d)) : [];
      }
      function hd(n, i, a) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = a == null ? 0 : Le(a);
        return m < 0 && (m = _t(d + m, 0)), _o(n, ye(i, 3), m);
      }
      function gd(n, i, a) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = d - 1;
        return a !== r && (m = Le(a), m = a < 0 ? _t(d + m, 0) : Wt(m, d - 1)), _o(n, ye(i, 3), m, !0);
      }
      function md(n) {
        var i = n == null ? 0 : n.length;
        return i ? Dt(n, 1) : [];
      }
      function M0(n) {
        var i = n == null ? 0 : n.length;
        return i ? Dt(n, xe) : [];
      }
      function N0(n, i) {
        var a = n == null ? 0 : n.length;
        return a ? (i = i === r ? 1 : Le(i), Dt(n, i)) : [];
      }
      function V0(n) {
        for (var i = -1, a = n == null ? 0 : n.length, d = {}; ++i < a; ) {
          var m = n[i];
          d[m[0]] = m[1];
        }
        return d;
      }
      function bd(n) {
        return n && n.length ? n[0] : r;
      }
      function W0(n, i, a) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = a == null ? 0 : Le(a);
        return m < 0 && (m = _t(d + m, 0)), Ri(n, i, m);
      }
      function X0(n) {
        var i = n == null ? 0 : n.length;
        return i ? Bn(n, 0, -1) : [];
      }
      var H0 = Ve(function(n) {
        var i = gt(n, Us);
        return i.length && i[0] === n[0] ? Ms(i) : [];
      }), z0 = Ve(function(n) {
        var i = Gn(n), a = gt(n, Us);
        return i === Gn(a) ? i = r : a.pop(), a.length && a[0] === n[0] ? Ms(a, ye(i, 2)) : [];
      }), Z0 = Ve(function(n) {
        var i = Gn(n), a = gt(n, Us);
        return i = typeof i == "function" ? i : r, i && a.pop(), a.length && a[0] === n[0] ? Ms(a, r, i) : [];
      });
      function Y0(n, i) {
        return n == null ? "" : Xm.call(n, i);
      }
      function Gn(n) {
        var i = n == null ? 0 : n.length;
        return i ? n[i - 1] : r;
      }
      function J0(n, i, a) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = d;
        return a !== r && (m = Le(a), m = m < 0 ? _t(d + m, 0) : Wt(m, d - 1)), i === i ? Em(n, i, m) : _o(n, Qc, m, !0);
      }
      function U0(n, i) {
        return n && n.length ? Pf(n, Le(i)) : r;
      }
      var j0 = Ve(yd);
      function yd(n, i) {
        return n && n.length && i && i.length ? Xs(n, i) : n;
      }
      function Q0(n, i, a) {
        return n && n.length && i && i.length ? Xs(n, i, ye(a, 2)) : n;
      }
      function q0(n, i, a) {
        return n && n.length && i && i.length ? Xs(n, i, r, a) : n;
      }
      var $0 = gr(function(n, i) {
        var a = n == null ? 0 : n.length, d = Gs(n, i);
        return _f(n, gt(i, function(m) {
          return mr(m, a) ? +m : m;
        }).sort(Wf)), d;
      });
      function K0(n, i) {
        var a = [];
        if (!(n && n.length))
          return a;
        var d = -1, m = [], I = n.length;
        for (i = ye(i, 3); ++d < I; ) {
          var A = n[d];
          i(A, d, n) && (a.push(A), m.push(d));
        }
        return _f(n, m), a;
      }
      function sl(n) {
        return n == null ? n : Ym.call(n);
      }
      function ey(n, i, a) {
        var d = n == null ? 0 : n.length;
        return d ? (a && typeof a != "number" && Ut(n, i, a) ? (i = 0, a = d) : (i = i == null ? 0 : Le(i), a = a === r ? d : Le(a)), Bn(n, i, a)) : [];
      }
      function ty(n, i) {
        return qo(n, i);
      }
      function ny(n, i, a) {
        return Zs(n, i, ye(a, 2));
      }
      function ry(n, i) {
        var a = n == null ? 0 : n.length;
        if (a) {
          var d = qo(n, i);
          if (d < a && zn(n[d], i))
            return d;
        }
        return -1;
      }
      function iy(n, i) {
        return qo(n, i, !0);
      }
      function uy(n, i, a) {
        return Zs(n, i, ye(a, 2), !0);
      }
      function oy(n, i) {
        var a = n == null ? 0 : n.length;
        if (a) {
          var d = qo(n, i, !0) - 1;
          if (zn(n[d], i))
            return d;
        }
        return -1;
      }
      function ay(n) {
        return n && n.length ? Bf(n) : [];
      }
      function sy(n, i) {
        return n && n.length ? Bf(n, ye(i, 2)) : [];
      }
      function ly(n) {
        var i = n == null ? 0 : n.length;
        return i ? Bn(n, 1, i) : [];
      }
      function cy(n, i, a) {
        return n && n.length ? (i = a || i === r ? 1 : Le(i), Bn(n, 0, i < 0 ? 0 : i)) : [];
      }
      function fy(n, i, a) {
        var d = n == null ? 0 : n.length;
        return d ? (i = a || i === r ? 1 : Le(i), i = d - i, Bn(n, i < 0 ? 0 : i, d)) : [];
      }
      function dy(n, i) {
        return n && n.length ? $o(n, ye(i, 3), !1, !0) : [];
      }
      function py(n, i) {
        return n && n.length ? $o(n, ye(i, 3)) : [];
      }
      var hy = Ve(function(n) {
        return _r(Dt(n, 1, At, !0));
      }), gy = Ve(function(n) {
        var i = Gn(n);
        return At(i) && (i = r), _r(Dt(n, 1, At, !0), ye(i, 2));
      }), my = Ve(function(n) {
        var i = Gn(n);
        return i = typeof i == "function" ? i : r, _r(Dt(n, 1, At, !0), r, i);
      });
      function by(n) {
        return n && n.length ? _r(n) : [];
      }
      function yy(n, i) {
        return n && n.length ? _r(n, ye(i, 2)) : [];
      }
      function vy(n, i) {
        return i = typeof i == "function" ? i : r, n && n.length ? _r(n, r, i) : [];
      }
      function ll(n) {
        if (!(n && n.length))
          return [];
        var i = 0;
        return n = Er(n, function(a) {
          if (At(a))
            return i = _t(a.length, i), !0;
        }), Es(i, function(a) {
          return gt(n, As(a));
        });
      }
      function vd(n, i) {
        if (!(n && n.length))
          return [];
        var a = ll(n);
        return i == null ? a : gt(a, function(d) {
          return Bt(i, r, d);
        });
      }
      var Iy = Ve(function(n, i) {
        return At(n) ? Pu(n, i) : [];
      }), Cy = Ve(function(n) {
        return Js(Er(n, At));
      }), xy = Ve(function(n) {
        var i = Gn(n);
        return At(i) && (i = r), Js(Er(n, At), ye(i, 2));
      }), Ay = Ve(function(n) {
        var i = Gn(n);
        return i = typeof i == "function" ? i : r, Js(Er(n, At), r, i);
      }), wy = Ve(ll);
      function Sy(n, i) {
        return Df(n || [], i || [], Fu);
      }
      function Ey(n, i) {
        return Df(n || [], i || [], _u);
      }
      var Fy = Ve(function(n) {
        var i = n.length, a = i > 1 ? n[i - 1] : r;
        return a = typeof a == "function" ? (n.pop(), a) : r, vd(n, a);
      });
      function Id(n) {
        var i = y(n);
        return i.__chain__ = !0, i;
      }
      function Py(n, i) {
        return i(n), n;
      }
      function aa(n, i) {
        return i(n);
      }
      var Ry = gr(function(n) {
        var i = n.length, a = i ? n[0] : 0, d = this.__wrapped__, m = function(I) {
          return Gs(I, n);
        };
        return i > 1 || this.__actions__.length || !(d instanceof Xe) || !mr(a) ? this.thru(m) : (d = d.slice(a, +a + (i ? 1 : 0)), d.__actions__.push({
          func: aa,
          args: [m],
          thisArg: r
        }), new _n(d, this.__chain__).thru(function(I) {
          return i && !I.length && I.push(r), I;
        }));
      });
      function Oy() {
        return Id(this);
      }
      function _y() {
        return new _n(this.value(), this.__chain__);
      }
      function Ty() {
        this.__values__ === r && (this.__values__ = Gd(this.value()));
        var n = this.__index__ >= this.__values__.length, i = n ? r : this.__values__[this.__index__++];
        return { done: n, value: i };
      }
      function By() {
        return this;
      }
      function Gy(n) {
        for (var i, a = this; a instanceof Yo; ) {
          var d = pd(a);
          d.__index__ = 0, d.__values__ = r, i ? m.__wrapped__ = d : i = d;
          var m = d;
          a = a.__wrapped__;
        }
        return m.__wrapped__ = n, i;
      }
      function ky() {
        var n = this.__wrapped__;
        if (n instanceof Xe) {
          var i = n;
          return this.__actions__.length && (i = new Xe(this)), i = i.reverse(), i.__actions__.push({
            func: aa,
            args: [sl],
            thisArg: r
          }), new _n(i, this.__chain__);
        }
        return this.thru(sl);
      }
      function Ly() {
        return Lf(this.__wrapped__, this.__actions__);
      }
      var Dy = Ko(function(n, i, a) {
        tt.call(n, a) ? ++n[a] : pr(n, a, 1);
      });
      function My(n, i, a) {
        var d = _e(n) ? Uc : Pb;
        return a && Ut(n, i, a) && (i = r), d(n, ye(i, 3));
      }
      function Ny(n, i) {
        var a = _e(n) ? Er : vf;
        return a(n, ye(i, 3));
      }
      var Vy = Jf(hd), Wy = Jf(gd);
      function Xy(n, i) {
        return Dt(sa(n, i), 1);
      }
      function Hy(n, i) {
        return Dt(sa(n, i), xe);
      }
      function zy(n, i, a) {
        return a = a === r ? 1 : Le(a), Dt(sa(n, i), a);
      }
      function Cd(n, i) {
        var a = _e(n) ? Rn : Or;
        return a(n, ye(i, 3));
      }
      function xd(n, i) {
        var a = _e(n) ? lm : yf;
        return a(n, ye(i, 3));
      }
      var Zy = Ko(function(n, i, a) {
        tt.call(n, a) ? n[a].push(i) : pr(n, a, [i]);
      });
      function Yy(n, i, a, d) {
        n = nn(n) ? n : Wi(n), a = a && !d ? Le(a) : 0;
        var m = n.length;
        return a < 0 && (a = _t(m + a, 0)), pa(n) ? a <= m && n.indexOf(i, a) > -1 : !!m && Ri(n, i, a) > -1;
      }
      var Jy = Ve(function(n, i, a) {
        var d = -1, m = typeof i == "function", I = nn(n) ? D(n.length) : [];
        return Or(n, function(A) {
          I[++d] = m ? Bt(i, A, a) : Ru(A, i, a);
        }), I;
      }), Uy = Ko(function(n, i, a) {
        pr(n, a, i);
      });
      function sa(n, i) {
        var a = _e(n) ? gt : Sf;
        return a(n, ye(i, 3));
      }
      function jy(n, i, a, d) {
        return n == null ? [] : (_e(i) || (i = i == null ? [] : [i]), a = d ? r : a, _e(a) || (a = a == null ? [] : [a]), Rf(n, i, a));
      }
      var Qy = Ko(function(n, i, a) {
        n[a ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function qy(n, i, a) {
        var d = _e(n) ? Cs : $c, m = arguments.length < 3;
        return d(n, ye(i, 4), a, m, Or);
      }
      function $y(n, i, a) {
        var d = _e(n) ? cm : $c, m = arguments.length < 3;
        return d(n, ye(i, 4), a, m, yf);
      }
      function Ky(n, i) {
        var a = _e(n) ? Er : vf;
        return a(n, fa(ye(i, 3)));
      }
      function ev(n) {
        var i = _e(n) ? hf : Yb;
        return i(n);
      }
      function tv(n, i, a) {
        (a ? Ut(n, i, a) : i === r) ? i = 1 : i = Le(i);
        var d = _e(n) ? Ab : Jb;
        return d(n, i);
      }
      function nv(n) {
        var i = _e(n) ? wb : jb;
        return i(n);
      }
      function rv(n) {
        if (n == null)
          return 0;
        if (nn(n))
          return pa(n) ? _i(n) : n.length;
        var i = Xt(n);
        return i == Ct || i == Rt ? n.size : Vs(n).length;
      }
      function iv(n, i, a) {
        var d = _e(n) ? xs : Qb;
        return a && Ut(n, i, a) && (i = r), d(n, ye(i, 3));
      }
      var uv = Ve(function(n, i) {
        if (n == null)
          return [];
        var a = i.length;
        return a > 1 && Ut(n, i[0], i[1]) ? i = [] : a > 2 && Ut(i[0], i[1], i[2]) && (i = [i[0]]), Rf(n, Dt(i, 1), []);
      }), la = Nm || function() {
        return He.Date.now();
      };
      function ov(n, i) {
        if (typeof i != "function")
          throw new On(l);
        return n = Le(n), function() {
          if (--n < 1)
            return i.apply(this, arguments);
        };
      }
      function Ad(n, i, a) {
        return i = a ? r : i, i = n && i == null ? n.length : i, hr(n, j, r, r, r, r, i);
      }
      function wd(n, i) {
        var a;
        if (typeof i != "function")
          throw new On(l);
        return n = Le(n), function() {
          return --n > 0 && (a = i.apply(this, arguments)), n <= 1 && (i = r), a;
        };
      }
      var cl = Ve(function(n, i, a) {
        var d = F;
        if (a.length) {
          var m = Pr(a, Ni(cl));
          d |= J;
        }
        return hr(n, d, i, a, m);
      }), Sd = Ve(function(n, i, a) {
        var d = F | R;
        if (a.length) {
          var m = Pr(a, Ni(Sd));
          d |= J;
        }
        return hr(i, d, n, a, m);
      });
      function Ed(n, i, a) {
        i = a ? r : i;
        var d = hr(n, k, r, r, r, r, r, i);
        return d.placeholder = Ed.placeholder, d;
      }
      function Fd(n, i, a) {
        i = a ? r : i;
        var d = hr(n, N, r, r, r, r, r, i);
        return d.placeholder = Fd.placeholder, d;
      }
      function Pd(n, i, a) {
        var d, m, I, A, P, B, X = 0, H = !1, U = !1, ne = !0;
        if (typeof n != "function")
          throw new On(l);
        i = kn(i) || 0, mt(a) && (H = !!a.leading, U = "maxWait" in a, I = U ? _t(kn(a.maxWait) || 0, i) : I, ne = "trailing" in a ? !!a.trailing : ne);
        function le(wt) {
          var Zn = d, vr = m;
          return d = m = r, X = wt, A = n.apply(vr, Zn), A;
        }
        function Ie(wt) {
          return X = wt, P = Gu(We, i), H ? le(wt) : A;
        }
        function Me(wt) {
          var Zn = wt - B, vr = wt - X, Jd = i - Zn;
          return U ? Wt(Jd, I - vr) : Jd;
        }
        function Ce(wt) {
          var Zn = wt - B, vr = wt - X;
          return B === r || Zn >= i || Zn < 0 || U && vr >= I;
        }
        function We() {
          var wt = la();
          if (Ce(wt))
            return ze(wt);
          P = Gu(We, Me(wt));
        }
        function ze(wt) {
          return P = r, ne && d ? le(wt) : (d = m = r, A);
        }
        function vn() {
          P !== r && Mf(P), X = 0, d = B = m = P = r;
        }
        function jt() {
          return P === r ? A : ze(la());
        }
        function In() {
          var wt = la(), Zn = Ce(wt);
          if (d = arguments, m = this, B = wt, Zn) {
            if (P === r)
              return Ie(B);
            if (U)
              return Mf(P), P = Gu(We, i), le(B);
          }
          return P === r && (P = Gu(We, i)), A;
        }
        return In.cancel = vn, In.flush = jt, In;
      }
      var av = Ve(function(n, i) {
        return bf(n, 1, i);
      }), sv = Ve(function(n, i, a) {
        return bf(n, kn(i) || 0, a);
      });
      function lv(n) {
        return hr(n, Y);
      }
      function ca(n, i) {
        if (typeof n != "function" || i != null && typeof i != "function")
          throw new On(l);
        var a = function() {
          var d = arguments, m = i ? i.apply(this, d) : d[0], I = a.cache;
          if (I.has(m))
            return I.get(m);
          var A = n.apply(this, d);
          return a.cache = I.set(m, A) || I, A;
        };
        return a.cache = new (ca.Cache || dr)(), a;
      }
      ca.Cache = dr;
      function fa(n) {
        if (typeof n != "function")
          throw new On(l);
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
      function cv(n) {
        return wd(2, n);
      }
      var fv = qb(function(n, i) {
        i = i.length == 1 && _e(i[0]) ? gt(i[0], mn(ye())) : gt(Dt(i, 1), mn(ye()));
        var a = i.length;
        return Ve(function(d) {
          for (var m = -1, I = Wt(d.length, a); ++m < I; )
            d[m] = i[m].call(this, d[m]);
          return Bt(n, this, d);
        });
      }), fl = Ve(function(n, i) {
        var a = Pr(i, Ni(fl));
        return hr(n, J, r, i, a);
      }), Rd = Ve(function(n, i) {
        var a = Pr(i, Ni(Rd));
        return hr(n, G, r, i, a);
      }), dv = gr(function(n, i) {
        return hr(n, M, r, r, r, i);
      });
      function pv(n, i) {
        if (typeof n != "function")
          throw new On(l);
        return i = i === r ? i : Le(i), Ve(n, i);
      }
      function hv(n, i) {
        if (typeof n != "function")
          throw new On(l);
        return i = i == null ? 0 : _t(Le(i), 0), Ve(function(a) {
          var d = a[i], m = Br(a, 0, i);
          return d && Fr(m, d), Bt(n, this, m);
        });
      }
      function gv(n, i, a) {
        var d = !0, m = !0;
        if (typeof n != "function")
          throw new On(l);
        return mt(a) && (d = "leading" in a ? !!a.leading : d, m = "trailing" in a ? !!a.trailing : m), Pd(n, i, {
          leading: d,
          maxWait: i,
          trailing: m
        });
      }
      function mv(n) {
        return Ad(n, 1);
      }
      function bv(n, i) {
        return fl(js(i), n);
      }
      function yv() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return _e(n) ? n : [n];
      }
      function vv(n) {
        return Tn(n, b);
      }
      function Iv(n, i) {
        return i = typeof i == "function" ? i : r, Tn(n, b, i);
      }
      function Cv(n) {
        return Tn(n, g | b);
      }
      function xv(n, i) {
        return i = typeof i == "function" ? i : r, Tn(n, g | b, i);
      }
      function Av(n, i) {
        return i == null || mf(n, i, Gt(i));
      }
      function zn(n, i) {
        return n === i || n !== n && i !== i;
      }
      var wv = ra(Ds), Sv = ra(function(n, i) {
        return n >= i;
      }), ai = xf(/* @__PURE__ */ function() {
        return arguments;
      }()) ? xf : function(n) {
        return yt(n) && tt.call(n, "callee") && !sf.call(n, "callee");
      }, _e = D.isArray, Ev = Yt ? mn(Yt) : Gb;
      function nn(n) {
        return n != null && da(n.length) && !br(n);
      }
      function At(n) {
        return yt(n) && nn(n);
      }
      function Fv(n) {
        return n === !0 || n === !1 || yt(n) && Jt(n) == Ne;
      }
      var Gr = Wm || xl, Pv = Wn ? mn(Wn) : kb;
      function Rv(n) {
        return yt(n) && n.nodeType === 1 && !ku(n);
      }
      function Ov(n) {
        if (n == null)
          return !0;
        if (nn(n) && (_e(n) || typeof n == "string" || typeof n.splice == "function" || Gr(n) || Vi(n) || ai(n)))
          return !n.length;
        var i = Xt(n);
        if (i == Ct || i == Rt)
          return !n.size;
        if (Bu(n))
          return !Vs(n).length;
        for (var a in n)
          if (tt.call(n, a))
            return !1;
        return !0;
      }
      function _v(n, i) {
        return Ou(n, i);
      }
      function Tv(n, i, a) {
        a = typeof a == "function" ? a : r;
        var d = a ? a(n, i) : r;
        return d === r ? Ou(n, i, r, a) : !!d;
      }
      function dl(n) {
        if (!yt(n))
          return !1;
        var i = Jt(n);
        return i == kt || i == Vt || typeof n.message == "string" && typeof n.name == "string" && !ku(n);
      }
      function Bv(n) {
        return typeof n == "number" && cf(n);
      }
      function br(n) {
        if (!mt(n))
          return !1;
        var i = Jt(n);
        return i == Lt || i == Sn || i == lt || i == ct;
      }
      function Od(n) {
        return typeof n == "number" && n == Le(n);
      }
      function da(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= Pe;
      }
      function mt(n) {
        var i = typeof n;
        return n != null && (i == "object" || i == "function");
      }
      function yt(n) {
        return n != null && typeof n == "object";
      }
      var _d = Pn ? mn(Pn) : Db;
      function Gv(n, i) {
        return n === i || Ns(n, i, nl(i));
      }
      function kv(n, i, a) {
        return a = typeof a == "function" ? a : r, Ns(n, i, nl(i), a);
      }
      function Lv(n) {
        return Td(n) && n != +n;
      }
      function Dv(n) {
        if (I0(n))
          throw new Re(s);
        return Af(n);
      }
      function Mv(n) {
        return n === null;
      }
      function Nv(n) {
        return n == null;
      }
      function Td(n) {
        return typeof n == "number" || yt(n) && Jt(n) == ee;
      }
      function ku(n) {
        if (!yt(n) || Jt(n) != ce)
          return !1;
        var i = No(n);
        if (i === null)
          return !0;
        var a = tt.call(i, "constructor") && i.constructor;
        return typeof a == "function" && a instanceof a && ko.call(a) == km;
      }
      var pl = Qn ? mn(Qn) : Mb;
      function Vv(n) {
        return Od(n) && n >= -9007199254740991 && n <= Pe;
      }
      var Bd = Iu ? mn(Iu) : Nb;
      function pa(n) {
        return typeof n == "string" || !_e(n) && yt(n) && Jt(n) == Nn;
      }
      function yn(n) {
        return typeof n == "symbol" || yt(n) && Jt(n) == nt;
      }
      var Vi = Kr ? mn(Kr) : Vb;
      function Wv(n) {
        return n === r;
      }
      function Xv(n) {
        return yt(n) && Xt(n) == Qe;
      }
      function Hv(n) {
        return yt(n) && Jt(n) == L;
      }
      var zv = ra(Ws), Zv = ra(function(n, i) {
        return n <= i;
      });
      function Gd(n) {
        if (!n)
          return [];
        if (nn(n))
          return pa(n) ? Xn(n) : tn(n);
        if (xu && n[xu])
          return Am(n[xu]());
        var i = Xt(n), a = i == Ct ? Ps : i == Rt ? To : Wi;
        return a(n);
      }
      function yr(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = kn(n), n === xe || n === -1 / 0) {
          var i = n < 0 ? -1 : 1;
          return i * te;
        }
        return n === n ? n : 0;
      }
      function Le(n) {
        var i = yr(n), a = i % 1;
        return i === i ? a ? i - a : i : 0;
      }
      function kd(n) {
        return n ? ri(Le(n), 0, he) : 0;
      }
      function kn(n) {
        if (typeof n == "number")
          return n;
        if (yn(n))
          return x;
        if (mt(n)) {
          var i = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = mt(i) ? i + "" : i;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = Kc(n);
        var a = rs.test(n);
        return a || us.test(n) ? Oe(n.slice(2), a ? 2 : 8) : ns.test(n) ? x : +n;
      }
      function Ld(n) {
        return $n(n, rn(n));
      }
      function Yv(n) {
        return n ? ri(Le(n), -9007199254740991, Pe) : n === 0 ? n : 0;
      }
      function qe(n) {
        return n == null ? "" : bn(n);
      }
      var Jv = Di(function(n, i) {
        if (Bu(i) || nn(i)) {
          $n(i, Gt(i), n);
          return;
        }
        for (var a in i)
          tt.call(i, a) && Fu(n, a, i[a]);
      }), Dd = Di(function(n, i) {
        $n(i, rn(i), n);
      }), ha = Di(function(n, i, a, d) {
        $n(i, rn(i), n, d);
      }), Uv = Di(function(n, i, a, d) {
        $n(i, Gt(i), n, d);
      }), jv = gr(Gs);
      function Qv(n, i) {
        var a = Li(n);
        return i == null ? a : gf(a, i);
      }
      var qv = Ve(function(n, i) {
        n = st(n);
        var a = -1, d = i.length, m = d > 2 ? i[2] : r;
        for (m && Ut(i[0], i[1], m) && (d = 1); ++a < d; )
          for (var I = i[a], A = rn(I), P = -1, B = A.length; ++P < B; ) {
            var X = A[P], H = n[X];
            (H === r || zn(H, Bi[X]) && !tt.call(n, X)) && (n[X] = I[X]);
          }
        return n;
      }), $v = Ve(function(n) {
        return n.push(r, ed), Bt(Md, r, n);
      });
      function Kv(n, i) {
        return jc(n, ye(i, 3), qn);
      }
      function e1(n, i) {
        return jc(n, ye(i, 3), Ls);
      }
      function t1(n, i) {
        return n == null ? n : ks(n, ye(i, 3), rn);
      }
      function n1(n, i) {
        return n == null ? n : If(n, ye(i, 3), rn);
      }
      function r1(n, i) {
        return n && qn(n, ye(i, 3));
      }
      function i1(n, i) {
        return n && Ls(n, ye(i, 3));
      }
      function u1(n) {
        return n == null ? [] : jo(n, Gt(n));
      }
      function o1(n) {
        return n == null ? [] : jo(n, rn(n));
      }
      function hl(n, i, a) {
        var d = n == null ? r : ii(n, i);
        return d === r ? a : d;
      }
      function a1(n, i) {
        return n != null && rd(n, i, Ob);
      }
      function gl(n, i) {
        return n != null && rd(n, i, _b);
      }
      var s1 = jf(function(n, i, a) {
        i != null && typeof i.toString != "function" && (i = Lo.call(i)), n[i] = a;
      }, bl(un)), l1 = jf(function(n, i, a) {
        i != null && typeof i.toString != "function" && (i = Lo.call(i)), tt.call(n, i) ? n[i].push(a) : n[i] = [a];
      }, ye), c1 = Ve(Ru);
      function Gt(n) {
        return nn(n) ? pf(n) : Vs(n);
      }
      function rn(n) {
        return nn(n) ? pf(n, !0) : Wb(n);
      }
      function f1(n, i) {
        var a = {};
        return i = ye(i, 3), qn(n, function(d, m, I) {
          pr(a, i(d, m, I), d);
        }), a;
      }
      function d1(n, i) {
        var a = {};
        return i = ye(i, 3), qn(n, function(d, m, I) {
          pr(a, m, i(d, m, I));
        }), a;
      }
      var p1 = Di(function(n, i, a) {
        Qo(n, i, a);
      }), Md = Di(function(n, i, a, d) {
        Qo(n, i, a, d);
      }), h1 = gr(function(n, i) {
        var a = {};
        if (n == null)
          return a;
        var d = !1;
        i = gt(i, function(I) {
          return I = Tr(I, n), d || (d = I.length > 1), I;
        }), $n(n, el(n), a), d && (a = Tn(a, g | v | b, s0));
        for (var m = i.length; m--; )
          Ys(a, i[m]);
        return a;
      });
      function g1(n, i) {
        return Nd(n, fa(ye(i)));
      }
      var m1 = gr(function(n, i) {
        return n == null ? {} : Hb(n, i);
      });
      function Nd(n, i) {
        if (n == null)
          return {};
        var a = gt(el(n), function(d) {
          return [d];
        });
        return i = ye(i), Of(n, a, function(d, m) {
          return i(d, m[0]);
        });
      }
      function b1(n, i, a) {
        i = Tr(i, n);
        var d = -1, m = i.length;
        for (m || (m = 1, n = r); ++d < m; ) {
          var I = n == null ? r : n[Kn(i[d])];
          I === r && (d = m, I = a), n = br(I) ? I.call(n) : I;
        }
        return n;
      }
      function y1(n, i, a) {
        return n == null ? n : _u(n, i, a);
      }
      function v1(n, i, a, d) {
        return d = typeof d == "function" ? d : r, n == null ? n : _u(n, i, a, d);
      }
      var Vd = $f(Gt), Wd = $f(rn);
      function I1(n, i, a) {
        var d = _e(n), m = d || Gr(n) || Vi(n);
        if (i = ye(i, 4), a == null) {
          var I = n && n.constructor;
          m ? a = d ? new I() : [] : mt(n) ? a = br(I) ? Li(No(n)) : {} : a = {};
        }
        return (m ? Rn : qn)(n, function(A, P, B) {
          return i(a, A, P, B);
        }), a;
      }
      function C1(n, i) {
        return n == null ? !0 : Ys(n, i);
      }
      function x1(n, i, a) {
        return n == null ? n : kf(n, i, js(a));
      }
      function A1(n, i, a, d) {
        return d = typeof d == "function" ? d : r, n == null ? n : kf(n, i, js(a), d);
      }
      function Wi(n) {
        return n == null ? [] : Fs(n, Gt(n));
      }
      function w1(n) {
        return n == null ? [] : Fs(n, rn(n));
      }
      function S1(n, i, a) {
        return a === r && (a = i, i = r), a !== r && (a = kn(a), a = a === a ? a : 0), i !== r && (i = kn(i), i = i === i ? i : 0), ri(kn(n), i, a);
      }
      function E1(n, i, a) {
        return i = yr(i), a === r ? (a = i, i = 0) : a = yr(a), n = kn(n), Tb(n, i, a);
      }
      function F1(n, i, a) {
        if (a && typeof a != "boolean" && Ut(n, i, a) && (i = a = r), a === r && (typeof i == "boolean" ? (a = i, i = r) : typeof n == "boolean" && (a = n, n = r)), n === r && i === r ? (n = 0, i = 1) : (n = yr(n), i === r ? (i = n, n = 0) : i = yr(i)), n > i) {
          var d = n;
          n = i, i = d;
        }
        if (a || n % 1 || i % 1) {
          var m = ff();
          return Wt(n + m * (i - n + ot("1e-" + ((m + "").length - 1))), i);
        }
        return Hs(n, i);
      }
      var P1 = Mi(function(n, i, a) {
        return i = i.toLowerCase(), n + (a ? Xd(i) : i);
      });
      function Xd(n) {
        return ml(qe(n).toLowerCase());
      }
      function Hd(n) {
        return n = qe(n), n && n.replace(lr, ym).replace(ys, "");
      }
      function R1(n, i, a) {
        n = qe(n), i = bn(i);
        var d = n.length;
        a = a === r ? d : ri(Le(a), 0, d);
        var m = a;
        return a -= i.length, a >= 0 && n.slice(a, m) == i;
      }
      function O1(n) {
        return n = qe(n), n && Jr.test(n) ? n.replace(so, vm) : n;
      }
      function _1(n) {
        return n = qe(n), n && Qa.test(n) ? n.replace(hu, "\\$&") : n;
      }
      var T1 = Mi(function(n, i, a) {
        return n + (a ? "-" : "") + i.toLowerCase();
      }), B1 = Mi(function(n, i, a) {
        return n + (a ? " " : "") + i.toLowerCase();
      }), G1 = Yf("toLowerCase");
      function k1(n, i, a) {
        n = qe(n), i = Le(i);
        var d = i ? _i(n) : 0;
        if (!i || d >= i)
          return n;
        var m = (i - d) / 2;
        return na(Ho(m), a) + n + na(Xo(m), a);
      }
      function L1(n, i, a) {
        n = qe(n), i = Le(i);
        var d = i ? _i(n) : 0;
        return i && d < i ? n + na(i - d, a) : n;
      }
      function D1(n, i, a) {
        n = qe(n), i = Le(i);
        var d = i ? _i(n) : 0;
        return i && d < i ? na(i - d, a) + n : n;
      }
      function M1(n, i, a) {
        return a || i == null ? i = 0 : i && (i = +i), Zm(qe(n).replace(gu, ""), i || 0);
      }
      function N1(n, i, a) {
        return (a ? Ut(n, i, a) : i === r) ? i = 1 : i = Le(i), zs(qe(n), i);
      }
      function V1() {
        var n = arguments, i = qe(n[0]);
        return n.length < 3 ? i : i.replace(n[1], n[2]);
      }
      var W1 = Mi(function(n, i, a) {
        return n + (a ? "_" : "") + i.toLowerCase();
      });
      function X1(n, i, a) {
        return a && typeof a != "number" && Ut(n, i, a) && (i = a = r), a = a === r ? he : a >>> 0, a ? (n = qe(n), n && (typeof i == "string" || i != null && !pl(i)) && (i = bn(i), !i && Oi(n)) ? Br(Xn(n), 0, a) : n.split(i, a)) : [];
      }
      var H1 = Mi(function(n, i, a) {
        return n + (a ? " " : "") + ml(i);
      });
      function z1(n, i, a) {
        return n = qe(n), a = a == null ? 0 : ri(Le(a), 0, n.length), i = bn(i), n.slice(a, a + i.length) == i;
      }
      function Z1(n, i, a) {
        var d = y.templateSettings;
        a && Ut(n, i, a) && (i = r), n = qe(n), i = ha({}, i, d, Kf);
        var m = ha({}, i.imports, d.imports, Kf), I = Gt(m), A = Fs(m, I), P, B, X = 0, H = i.interpolate || xi, U = "__p += '", ne = Rs(
          (i.escape || xi).source + "|" + H.source + "|" + (H === Ci ? ts : xi).source + "|" + (i.evaluate || xi).source + "|$",
          "g"
        ), le = "//# sourceURL=" + (tt.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++vs + "]") + `
`;
        n.replace(ne, function(Ce, We, ze, vn, jt, In) {
          return ze || (ze = vn), U += n.slice(X, In).replace(as, Im), We && (P = !0, U += `' +
__e(` + We + `) +
'`), jt && (B = !0, U += `';
` + jt + `;
__p += '`), ze && (U += `' +
((__t = (` + ze + `)) == null ? '' : __t) +
'`), X = In + Ce.length, Ce;
        }), U += `';
`;
        var Ie = tt.call(i, "variable") && i.variable;
        if (!Ie)
          U = `with (obj) {
` + U + `
}
`;
        else if (Ka.test(Ie))
          throw new Re(c);
        U = (B ? U.replace(hn, "") : U).replace(ar, "$1").replace(oo, "$1;"), U = "function(" + (Ie || "obj") + `) {
` + (Ie ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (P ? ", __e = _.escape" : "") + (B ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + U + `return __p
}`;
        var Me = Zd(function() {
          return Ue(I, le + "return " + U).apply(r, A);
        });
        if (Me.source = U, dl(Me))
          throw Me;
        return Me;
      }
      function Y1(n) {
        return qe(n).toLowerCase();
      }
      function J1(n) {
        return qe(n).toUpperCase();
      }
      function U1(n, i, a) {
        if (n = qe(n), n && (a || i === r))
          return Kc(n);
        if (!n || !(i = bn(i)))
          return n;
        var d = Xn(n), m = Xn(i), I = ef(d, m), A = tf(d, m) + 1;
        return Br(d, I, A).join("");
      }
      function j1(n, i, a) {
        if (n = qe(n), n && (a || i === r))
          return n.slice(0, rf(n) + 1);
        if (!n || !(i = bn(i)))
          return n;
        var d = Xn(n), m = tf(d, Xn(i)) + 1;
        return Br(d, 0, m).join("");
      }
      function Q1(n, i, a) {
        if (n = qe(n), n && (a || i === r))
          return n.replace(gu, "");
        if (!n || !(i = bn(i)))
          return n;
        var d = Xn(n), m = ef(d, Xn(i));
        return Br(d, m).join("");
      }
      function q1(n, i) {
        var a = K, d = q;
        if (mt(i)) {
          var m = "separator" in i ? i.separator : m;
          a = "length" in i ? Le(i.length) : a, d = "omission" in i ? bn(i.omission) : d;
        }
        n = qe(n);
        var I = n.length;
        if (Oi(n)) {
          var A = Xn(n);
          I = A.length;
        }
        if (a >= I)
          return n;
        var P = a - _i(d);
        if (P < 1)
          return d;
        var B = A ? Br(A, 0, P).join("") : n.slice(0, P);
        if (m === r)
          return B + d;
        if (A && (P += B.length - P), pl(m)) {
          if (n.slice(P).search(m)) {
            var X, H = B;
            for (m.global || (m = Rs(m.source, qe(Fn.exec(m)) + "g")), m.lastIndex = 0; X = m.exec(H); )
              var U = X.index;
            B = B.slice(0, U === r ? P : U);
          }
        } else if (n.indexOf(bn(m), P) != P) {
          var ne = B.lastIndexOf(m);
          ne > -1 && (B = B.slice(0, ne));
        }
        return B + d;
      }
      function $1(n) {
        return n = qe(n), n && fu.test(n) ? n.replace(ao, Fm) : n;
      }
      var K1 = Mi(function(n, i, a) {
        return n + (a ? " " : "") + i.toUpperCase();
      }), ml = Yf("toUpperCase");
      function zd(n, i, a) {
        return n = qe(n), i = a ? r : i, i === r ? xm(n) ? Om(n) : pm(n) : n.match(i) || [];
      }
      var Zd = Ve(function(n, i) {
        try {
          return Bt(n, r, i);
        } catch (a) {
          return dl(a) ? a : new Re(a);
        }
      }), eI = gr(function(n, i) {
        return Rn(i, function(a) {
          a = Kn(a), pr(n, a, cl(n[a], n));
        }), n;
      });
      function tI(n) {
        var i = n == null ? 0 : n.length, a = ye();
        return n = i ? gt(n, function(d) {
          if (typeof d[1] != "function")
            throw new On(l);
          return [a(d[0]), d[1]];
        }) : [], Ve(function(d) {
          for (var m = -1; ++m < i; ) {
            var I = n[m];
            if (Bt(I[0], this, d))
              return Bt(I[1], this, d);
          }
        });
      }
      function nI(n) {
        return Fb(Tn(n, g));
      }
      function bl(n) {
        return function() {
          return n;
        };
      }
      function rI(n, i) {
        return n == null || n !== n ? i : n;
      }
      var iI = Uf(), uI = Uf(!0);
      function un(n) {
        return n;
      }
      function yl(n) {
        return wf(typeof n == "function" ? n : Tn(n, g));
      }
      function oI(n) {
        return Ef(Tn(n, g));
      }
      function aI(n, i) {
        return Ff(n, Tn(i, g));
      }
      var sI = Ve(function(n, i) {
        return function(a) {
          return Ru(a, n, i);
        };
      }), lI = Ve(function(n, i) {
        return function(a) {
          return Ru(n, a, i);
        };
      });
      function vl(n, i, a) {
        var d = Gt(i), m = jo(i, d);
        a == null && !(mt(i) && (m.length || !d.length)) && (a = i, i = n, n = this, m = jo(i, Gt(i)));
        var I = !(mt(a) && "chain" in a) || !!a.chain, A = br(n);
        return Rn(m, function(P) {
          var B = i[P];
          n[P] = B, A && (n.prototype[P] = function() {
            var X = this.__chain__;
            if (I || X) {
              var H = n(this.__wrapped__), U = H.__actions__ = tn(this.__actions__);
              return U.push({ func: B, args: arguments, thisArg: n }), H.__chain__ = X, H;
            }
            return B.apply(n, Fr([this.value()], arguments));
          });
        }), n;
      }
      function cI() {
        return He._ === this && (He._ = Lm), this;
      }
      function Il() {
      }
      function fI(n) {
        return n = Le(n), Ve(function(i) {
          return Pf(i, n);
        });
      }
      var dI = qs(gt), pI = qs(Uc), hI = qs(xs);
      function Yd(n) {
        return il(n) ? As(Kn(n)) : zb(n);
      }
      function gI(n) {
        return function(i) {
          return n == null ? r : ii(n, i);
        };
      }
      var mI = Qf(), bI = Qf(!0);
      function Cl() {
        return [];
      }
      function xl() {
        return !1;
      }
      function yI() {
        return {};
      }
      function vI() {
        return "";
      }
      function II() {
        return !0;
      }
      function CI(n, i) {
        if (n = Le(n), n < 1 || n > Pe)
          return [];
        var a = he, d = Wt(n, he);
        i = ye(i), n -= he;
        for (var m = Es(d, i); ++a < n; )
          i(a);
        return m;
      }
      function xI(n) {
        return _e(n) ? gt(n, Kn) : yn(n) ? [n] : tn(dd(qe(n)));
      }
      function AI(n) {
        var i = ++Gm;
        return qe(n) + i;
      }
      var wI = ta(function(n, i) {
        return n + i;
      }, 0), SI = $s("ceil"), EI = ta(function(n, i) {
        return n / i;
      }, 1), FI = $s("floor");
      function PI(n) {
        return n && n.length ? Uo(n, un, Ds) : r;
      }
      function RI(n, i) {
        return n && n.length ? Uo(n, ye(i, 2), Ds) : r;
      }
      function OI(n) {
        return qc(n, un);
      }
      function _I(n, i) {
        return qc(n, ye(i, 2));
      }
      function TI(n) {
        return n && n.length ? Uo(n, un, Ws) : r;
      }
      function BI(n, i) {
        return n && n.length ? Uo(n, ye(i, 2), Ws) : r;
      }
      var GI = ta(function(n, i) {
        return n * i;
      }, 1), kI = $s("round"), LI = ta(function(n, i) {
        return n - i;
      }, 0);
      function DI(n) {
        return n && n.length ? Ss(n, un) : 0;
      }
      function MI(n, i) {
        return n && n.length ? Ss(n, ye(i, 2)) : 0;
      }
      return y.after = ov, y.ary = Ad, y.assign = Jv, y.assignIn = Dd, y.assignInWith = ha, y.assignWith = Uv, y.at = jv, y.before = wd, y.bind = cl, y.bindAll = eI, y.bindKey = Sd, y.castArray = yv, y.chain = Id, y.chunk = F0, y.compact = P0, y.concat = R0, y.cond = tI, y.conforms = nI, y.constant = bl, y.countBy = Dy, y.create = Qv, y.curry = Ed, y.curryRight = Fd, y.debounce = Pd, y.defaults = qv, y.defaultsDeep = $v, y.defer = av, y.delay = sv, y.difference = O0, y.differenceBy = _0, y.differenceWith = T0, y.drop = B0, y.dropRight = G0, y.dropRightWhile = k0, y.dropWhile = L0, y.fill = D0, y.filter = Ny, y.flatMap = Xy, y.flatMapDeep = Hy, y.flatMapDepth = zy, y.flatten = md, y.flattenDeep = M0, y.flattenDepth = N0, y.flip = lv, y.flow = iI, y.flowRight = uI, y.fromPairs = V0, y.functions = u1, y.functionsIn = o1, y.groupBy = Zy, y.initial = X0, y.intersection = H0, y.intersectionBy = z0, y.intersectionWith = Z0, y.invert = s1, y.invertBy = l1, y.invokeMap = Jy, y.iteratee = yl, y.keyBy = Uy, y.keys = Gt, y.keysIn = rn, y.map = sa, y.mapKeys = f1, y.mapValues = d1, y.matches = oI, y.matchesProperty = aI, y.memoize = ca, y.merge = p1, y.mergeWith = Md, y.method = sI, y.methodOf = lI, y.mixin = vl, y.negate = fa, y.nthArg = fI, y.omit = h1, y.omitBy = g1, y.once = cv, y.orderBy = jy, y.over = dI, y.overArgs = fv, y.overEvery = pI, y.overSome = hI, y.partial = fl, y.partialRight = Rd, y.partition = Qy, y.pick = m1, y.pickBy = Nd, y.property = Yd, y.propertyOf = gI, y.pull = j0, y.pullAll = yd, y.pullAllBy = Q0, y.pullAllWith = q0, y.pullAt = $0, y.range = mI, y.rangeRight = bI, y.rearg = dv, y.reject = Ky, y.remove = K0, y.rest = pv, y.reverse = sl, y.sampleSize = tv, y.set = y1, y.setWith = v1, y.shuffle = nv, y.slice = ey, y.sortBy = uv, y.sortedUniq = ay, y.sortedUniqBy = sy, y.split = X1, y.spread = hv, y.tail = ly, y.take = cy, y.takeRight = fy, y.takeRightWhile = dy, y.takeWhile = py, y.tap = Py, y.throttle = gv, y.thru = aa, y.toArray = Gd, y.toPairs = Vd, y.toPairsIn = Wd, y.toPath = xI, y.toPlainObject = Ld, y.transform = I1, y.unary = mv, y.union = hy, y.unionBy = gy, y.unionWith = my, y.uniq = by, y.uniqBy = yy, y.uniqWith = vy, y.unset = C1, y.unzip = ll, y.unzipWith = vd, y.update = x1, y.updateWith = A1, y.values = Wi, y.valuesIn = w1, y.without = Iy, y.words = zd, y.wrap = bv, y.xor = Cy, y.xorBy = xy, y.xorWith = Ay, y.zip = wy, y.zipObject = Sy, y.zipObjectDeep = Ey, y.zipWith = Fy, y.entries = Vd, y.entriesIn = Wd, y.extend = Dd, y.extendWith = ha, vl(y, y), y.add = wI, y.attempt = Zd, y.camelCase = P1, y.capitalize = Xd, y.ceil = SI, y.clamp = S1, y.clone = vv, y.cloneDeep = Cv, y.cloneDeepWith = xv, y.cloneWith = Iv, y.conformsTo = Av, y.deburr = Hd, y.defaultTo = rI, y.divide = EI, y.endsWith = R1, y.eq = zn, y.escape = O1, y.escapeRegExp = _1, y.every = My, y.find = Vy, y.findIndex = hd, y.findKey = Kv, y.findLast = Wy, y.findLastIndex = gd, y.findLastKey = e1, y.floor = FI, y.forEach = Cd, y.forEachRight = xd, y.forIn = t1, y.forInRight = n1, y.forOwn = r1, y.forOwnRight = i1, y.get = hl, y.gt = wv, y.gte = Sv, y.has = a1, y.hasIn = gl, y.head = bd, y.identity = un, y.includes = Yy, y.indexOf = W0, y.inRange = E1, y.invoke = c1, y.isArguments = ai, y.isArray = _e, y.isArrayBuffer = Ev, y.isArrayLike = nn, y.isArrayLikeObject = At, y.isBoolean = Fv, y.isBuffer = Gr, y.isDate = Pv, y.isElement = Rv, y.isEmpty = Ov, y.isEqual = _v, y.isEqualWith = Tv, y.isError = dl, y.isFinite = Bv, y.isFunction = br, y.isInteger = Od, y.isLength = da, y.isMap = _d, y.isMatch = Gv, y.isMatchWith = kv, y.isNaN = Lv, y.isNative = Dv, y.isNil = Nv, y.isNull = Mv, y.isNumber = Td, y.isObject = mt, y.isObjectLike = yt, y.isPlainObject = ku, y.isRegExp = pl, y.isSafeInteger = Vv, y.isSet = Bd, y.isString = pa, y.isSymbol = yn, y.isTypedArray = Vi, y.isUndefined = Wv, y.isWeakMap = Xv, y.isWeakSet = Hv, y.join = Y0, y.kebabCase = T1, y.last = Gn, y.lastIndexOf = J0, y.lowerCase = B1, y.lowerFirst = G1, y.lt = zv, y.lte = Zv, y.max = PI, y.maxBy = RI, y.mean = OI, y.meanBy = _I, y.min = TI, y.minBy = BI, y.stubArray = Cl, y.stubFalse = xl, y.stubObject = yI, y.stubString = vI, y.stubTrue = II, y.multiply = GI, y.nth = U0, y.noConflict = cI, y.noop = Il, y.now = la, y.pad = k1, y.padEnd = L1, y.padStart = D1, y.parseInt = M1, y.random = F1, y.reduce = qy, y.reduceRight = $y, y.repeat = N1, y.replace = V1, y.result = b1, y.round = kI, y.runInContext = _, y.sample = ev, y.size = rv, y.snakeCase = W1, y.some = iv, y.sortedIndex = ty, y.sortedIndexBy = ny, y.sortedIndexOf = ry, y.sortedLastIndex = iy, y.sortedLastIndexBy = uy, y.sortedLastIndexOf = oy, y.startCase = H1, y.startsWith = z1, y.subtract = LI, y.sum = DI, y.sumBy = MI, y.template = Z1, y.times = CI, y.toFinite = yr, y.toInteger = Le, y.toLength = kd, y.toLower = Y1, y.toNumber = kn, y.toSafeInteger = Yv, y.toString = qe, y.toUpper = J1, y.trim = U1, y.trimEnd = j1, y.trimStart = Q1, y.truncate = q1, y.unescape = $1, y.uniqueId = AI, y.upperCase = K1, y.upperFirst = ml, y.each = Cd, y.eachRight = xd, y.first = bd, vl(y, function() {
        var n = {};
        return qn(y, function(i, a) {
          tt.call(y.prototype, a) || (n[a] = i);
        }), n;
      }(), { chain: !1 }), y.VERSION = u, Rn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        y[n].placeholder = y;
      }), Rn(["drop", "take"], function(n, i) {
        Xe.prototype[n] = function(a) {
          a = a === r ? 1 : _t(Le(a), 0);
          var d = this.__filtered__ && !i ? new Xe(this) : this.clone();
          return d.__filtered__ ? d.__takeCount__ = Wt(a, d.__takeCount__) : d.__views__.push({
            size: Wt(a, he),
            type: n + (d.__dir__ < 0 ? "Right" : "")
          }), d;
        }, Xe.prototype[n + "Right"] = function(a) {
          return this.reverse()[n](a).reverse();
        };
      }), Rn(["filter", "map", "takeWhile"], function(n, i) {
        var a = i + 1, d = a == we || a == be;
        Xe.prototype[n] = function(m) {
          var I = this.clone();
          return I.__iteratees__.push({
            iteratee: ye(m, 3),
            type: a
          }), I.__filtered__ = I.__filtered__ || d, I;
        };
      }), Rn(["head", "last"], function(n, i) {
        var a = "take" + (i ? "Right" : "");
        Xe.prototype[n] = function() {
          return this[a](1).value()[0];
        };
      }), Rn(["initial", "tail"], function(n, i) {
        var a = "drop" + (i ? "" : "Right");
        Xe.prototype[n] = function() {
          return this.__filtered__ ? new Xe(this) : this[a](1);
        };
      }), Xe.prototype.compact = function() {
        return this.filter(un);
      }, Xe.prototype.find = function(n) {
        return this.filter(n).head();
      }, Xe.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, Xe.prototype.invokeMap = Ve(function(n, i) {
        return typeof n == "function" ? new Xe(this) : this.map(function(a) {
          return Ru(a, n, i);
        });
      }), Xe.prototype.reject = function(n) {
        return this.filter(fa(ye(n)));
      }, Xe.prototype.slice = function(n, i) {
        n = Le(n);
        var a = this;
        return a.__filtered__ && (n > 0 || i < 0) ? new Xe(a) : (n < 0 ? a = a.takeRight(-n) : n && (a = a.drop(n)), i !== r && (i = Le(i), a = i < 0 ? a.dropRight(-i) : a.take(i - n)), a);
      }, Xe.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, Xe.prototype.toArray = function() {
        return this.take(he);
      }, qn(Xe.prototype, function(n, i) {
        var a = /^(?:filter|find|map|reject)|While$/.test(i), d = /^(?:head|last)$/.test(i), m = y[d ? "take" + (i == "last" ? "Right" : "") : i], I = d || /^find/.test(i);
        m && (y.prototype[i] = function() {
          var A = this.__wrapped__, P = d ? [1] : arguments, B = A instanceof Xe, X = P[0], H = B || _e(A), U = function(We) {
            var ze = m.apply(y, Fr([We], P));
            return d && ne ? ze[0] : ze;
          };
          H && a && typeof X == "function" && X.length != 1 && (B = H = !1);
          var ne = this.__chain__, le = !!this.__actions__.length, Ie = I && !ne, Me = B && !le;
          if (!I && H) {
            A = Me ? A : new Xe(this);
            var Ce = n.apply(A, P);
            return Ce.__actions__.push({ func: aa, args: [U], thisArg: r }), new _n(Ce, ne);
          }
          return Ie && Me ? n.apply(this, P) : (Ce = this.thru(U), Ie ? d ? Ce.value()[0] : Ce.value() : Ce);
        });
      }), Rn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var i = Bo[n], a = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", d = /^(?:pop|shift)$/.test(n);
        y.prototype[n] = function() {
          var m = arguments;
          if (d && !this.__chain__) {
            var I = this.value();
            return i.apply(_e(I) ? I : [], m);
          }
          return this[a](function(A) {
            return i.apply(_e(A) ? A : [], m);
          });
        };
      }), qn(Xe.prototype, function(n, i) {
        var a = y[i];
        if (a) {
          var d = a.name + "";
          tt.call(ki, d) || (ki[d] = []), ki[d].push({ name: i, func: a });
        }
      }), ki[ea(r, R).name] = [{
        name: "wrapper",
        func: r
      }], Xe.prototype.clone = $m, Xe.prototype.reverse = Km, Xe.prototype.value = eb, y.prototype.at = Ry, y.prototype.chain = Oy, y.prototype.commit = _y, y.prototype.next = Ty, y.prototype.plant = Gy, y.prototype.reverse = ky, y.prototype.toJSON = y.prototype.valueOf = y.prototype.value = Ly, y.prototype.first = y.prototype.head, xu && (y.prototype[xu] = By), y;
    }, Ti = _m();
    xt ? ((xt.exports = Ti)._ = Ti, at._ = Ti) : He._ = Ti;
  }).call(xn);
})(Oa, Oa.exports);
var sE = Oa.exports;
const lE = /* @__PURE__ */ Va(sE);
var _a = { exports: {} };
_a.exports;
(function(e, t) {
  var r = 200, u = "__lodash_hash_undefined__", o = 1, s = 2, l = 9007199254740991, c = "[object Arguments]", f = "[object Array]", p = "[object AsyncFunction]", h = "[object Boolean]", g = "[object Date]", v = "[object Error]", b = "[object Function]", E = "[object GeneratorFunction]", w = "[object Map]", F = "[object Number]", R = "[object Null]", W = "[object Object]", k = "[object Promise]", N = "[object Proxy]", J = "[object RegExp]", G = "[object Set]", j = "[object String]", M = "[object Symbol]", Y = "[object Undefined]", K = "[object WeakMap]", q = "[object ArrayBuffer]", z = "[object DataView]", pe = "[object Float32Array]", we = "[object Float64Array]", ie = "[object Int8Array]", be = "[object Int16Array]", xe = "[object Int32Array]", Pe = "[object Uint8Array]", te = "[object Uint8ClampedArray]", x = "[object Uint16Array]", he = "[object Uint32Array]", Se = /[\\^$.*+?()[\]{}|]/g, S = /^\[object .+?Constructor\]$/, Je = /^(?:0|[1-9]\d*)$/, fe = {};
  fe[pe] = fe[we] = fe[ie] = fe[be] = fe[xe] = fe[Pe] = fe[te] = fe[x] = fe[he] = !0, fe[c] = fe[f] = fe[q] = fe[h] = fe[z] = fe[g] = fe[v] = fe[b] = fe[w] = fe[F] = fe[W] = fe[J] = fe[G] = fe[j] = fe[K] = !1;
  var Ee = typeof xn == "object" && xn && xn.Object === Object && xn, lt = typeof self == "object" && self && self.Object === Object && self, Ne = Ee || lt || Function("return this")(), bt = t && !t.nodeType && t, Vt = bt && !0 && e && !e.nodeType && e, kt = Vt && Vt.exports === bt, Lt = kt && Ee.process, Sn = function() {
    try {
      return Lt && Lt.binding && Lt.binding("util");
    } catch {
    }
  }(), Ct = Sn && Sn.isTypedArray;
  function ee(C, T) {
    for (var Z = -1, oe = C == null ? 0 : C.length, ot = 0, Oe = []; ++Z < oe; ) {
      var pt = C[Z];
      T(pt, Z, C) && (Oe[ot++] = pt);
    }
    return Oe;
  }
  function ue(C, T) {
    for (var Z = -1, oe = T.length, ot = C.length; ++Z < oe; )
      C[ot + Z] = T[Z];
    return C;
  }
  function ce(C, T) {
    for (var Z = -1, oe = C == null ? 0 : C.length; ++Z < oe; )
      if (T(C[Z], Z, C))
        return !0;
    return !1;
  }
  function De(C, T) {
    for (var Z = -1, oe = Array(C); ++Z < C; )
      oe[Z] = T(Z);
    return oe;
  }
  function ct(C) {
    return function(T) {
      return C(T);
    };
  }
  function et(C, T) {
    return C.has(T);
  }
  function Rt(C, T) {
    return C == null ? void 0 : C[T];
  }
  function Nn(C) {
    var T = -1, Z = Array(C.size);
    return C.forEach(function(oe, ot) {
      Z[++T] = [ot, oe];
    }), Z;
  }
  function nt(C, T) {
    return function(Z) {
      return C(T(Z));
    };
  }
  function rt(C) {
    var T = -1, Z = Array(C.size);
    return C.forEach(function(oe) {
      Z[++T] = oe;
    }), Z;
  }
  var Qe = Array.prototype, L = Function.prototype, Q = Object.prototype, ge = Ne["__core-js_shared__"], Be = L.toString, Ge = Q.hasOwnProperty, Tt = function() {
    var C = /[^.]+$/.exec(ge && ge.keys && ge.keys.IE_PROTO || "");
    return C ? "Symbol(src)_1." + C : "";
  }(), $t = Q.toString, Zt = RegExp(
    "^" + Be.call(Ge).replace(Se, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), En = kt ? Ne.Buffer : void 0, Kt = Ne.Symbol, St = Ne.Uint8Array, pn = Q.propertyIsEnumerable, hn = Qe.splice, ar = Kt ? Kt.toStringTag : void 0, oo = Object.getOwnPropertySymbols, ao = En ? En.isBuffer : void 0, so = nt(Object.keys, Object), fu = gn(Ne, "DataView"), Jr = gn(Ne, "Map"), du = gn(Ne, "Promise"), pu = gn(Ne, "Set"), Ci = gn(Ne, "WeakMap"), Ur = gn(Object, "create"), Ua = cr(fu), ja = cr(Jr), hu = cr(du), Qa = cr(pu), gu = cr(Ci), lo = Kt ? Kt.prototype : void 0, mu = lo ? lo.valueOf : void 0;
  function sr(C) {
    var T = -1, Z = C == null ? 0 : C.length;
    for (this.clear(); ++T < Z; ) {
      var oe = C[T];
      this.set(oe[0], oe[1]);
    }
  }
  function qa() {
    this.__data__ = Ur ? Ur(null) : {}, this.size = 0;
  }
  function $a(C) {
    var T = this.has(C) && delete this.__data__[C];
    return this.size -= T ? 1 : 0, T;
  }
  function Ka(C) {
    var T = this.__data__;
    if (Ur) {
      var Z = T[C];
      return Z === u ? void 0 : Z;
    }
    return Ge.call(T, C) ? T[C] : void 0;
  }
  function es(C) {
    var T = this.__data__;
    return Ur ? T[C] !== void 0 : Ge.call(T, C);
  }
  function ts(C, T) {
    var Z = this.__data__;
    return this.size += this.has(C) ? 0 : 1, Z[C] = Ur && T === void 0 ? u : T, this;
  }
  sr.prototype.clear = qa, sr.prototype.delete = $a, sr.prototype.get = Ka, sr.prototype.has = es, sr.prototype.set = ts;
  function Fn(C) {
    var T = -1, Z = C == null ? 0 : C.length;
    for (this.clear(); ++T < Z; ) {
      var oe = C[T];
      this.set(oe[0], oe[1]);
    }
  }
  function ns() {
    this.__data__ = [], this.size = 0;
  }
  function rs(C) {
    var T = this.__data__, Z = jr(T, C);
    if (Z < 0)
      return !1;
    var oe = T.length - 1;
    return Z == oe ? T.pop() : hn.call(T, Z, 1), --this.size, !0;
  }
  function is(C) {
    var T = this.__data__, Z = jr(T, C);
    return Z < 0 ? void 0 : T[Z][1];
  }
  function us(C) {
    return jr(this.__data__, C) > -1;
  }
  function os(C, T) {
    var Z = this.__data__, oe = jr(Z, C);
    return oe < 0 ? (++this.size, Z.push([C, T])) : Z[oe][1] = T, this;
  }
  Fn.prototype.clear = ns, Fn.prototype.delete = rs, Fn.prototype.get = is, Fn.prototype.has = us, Fn.prototype.set = os;
  function lr(C) {
    var T = -1, Z = C == null ? 0 : C.length;
    for (this.clear(); ++T < Z; ) {
      var oe = C[T];
      this.set(oe[0], oe[1]);
    }
  }
  function xi() {
    this.size = 0, this.__data__ = {
      hash: new sr(),
      map: new (Jr || Fn)(),
      string: new sr()
    };
  }
  function as(C) {
    var T = Sr(this, C).delete(C);
    return this.size -= T ? 1 : 0, T;
  }
  function Ai(C) {
    return Sr(this, C).get(C);
  }
  function ss(C) {
    return Sr(this, C).has(C);
  }
  function ls(C, T) {
    var Z = Sr(this, C), oe = Z.size;
    return Z.set(C, T), this.size += Z.size == oe ? 0 : 1, this;
  }
  lr.prototype.clear = xi, lr.prototype.delete = as, lr.prototype.get = Ai, lr.prototype.has = ss, lr.prototype.set = ls;
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
    var T = this.__data__ = new Fn(C);
    this.size = T.size;
  }
  function cs() {
    this.__data__ = new Fn(), this.size = 0;
  }
  function fs(C) {
    var T = this.__data__, Z = T.delete(C);
    return this.size = T.size, Z;
  }
  function ds(C) {
    return this.__data__.get(C);
  }
  function ps(C) {
    return this.__data__.has(C);
  }
  function po(C, T) {
    var Z = this.__data__;
    if (Z instanceof Fn) {
      var oe = Z.__data__;
      if (!Jr || oe.length < r - 1)
        return oe.push([C, T]), this.size = ++Z.size, this;
      Z = this.__data__ = new lr(oe);
    }
    return Z.set(C, T), this.size = Z.size, this;
  }
  Vn.prototype.clear = cs, Vn.prototype.delete = fs, Vn.prototype.get = ds, Vn.prototype.has = ps, Vn.prototype.set = po;
  function ho(C, T) {
    var Z = Fi(C), oe = !Z && Eo(C), ot = !Z && !oe && vu(C), Oe = !Z && !oe && !ot && Ro(C), pt = Z || oe || ot || Oe, Et = pt ? De(C.length, String) : [], He = Et.length;
    for (var at in C)
      Ge.call(C, at) && !(pt && // Safari 9 has enumerable `arguments.length` in strict mode.
      (at == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      ot && (at == "offset" || at == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Oe && (at == "buffer" || at == "byteLength" || at == "byteOffset") || // Skip index properties.
      Co(at, He))) && Et.push(at);
    return Et;
  }
  function jr(C, T) {
    for (var Z = C.length; Z--; )
      if (So(C[Z][0], T))
        return Z;
    return -1;
  }
  function bu(C, T, Z) {
    var oe = T(C);
    return Fi(C) ? oe : ue(oe, Z(C));
  }
  function Qr(C) {
    return C == null ? C === void 0 ? Y : R : ar && ar in Object(C) ? vo(C) : ms(C);
  }
  function yu(C) {
    return $r(C) && Qr(C) == c;
  }
  function qr(C, T, Z, oe, ot) {
    return C === T ? !0 : C == null || T == null || !$r(C) && !$r(T) ? C !== C && T !== T : go(C, T, Z, oe, qr, ot);
  }
  function go(C, T, Z, oe, ot, Oe) {
    var pt = Fi(C), Et = Fi(T), He = pt ? f : jn(C), at = Et ? f : jn(T);
    He = He == c ? W : He, at = at == c ? W : at;
    var xt = He == W, en = at == W, Ft = He == at;
    if (Ft && vu(C)) {
      if (!vu(T))
        return !1;
      pt = !0, xt = !1;
    }
    if (Ft && !xt)
      return Oe || (Oe = new Vn()), pt || Ro(C) ? Si(C, T, Z, oe, ot, Oe) : gs(C, T, He, Z, oe, ot, Oe);
    if (!(Z & o)) {
      var ht = xt && Ge.call(C, "__wrapped__"), Yt = en && Ge.call(T, "__wrapped__");
      if (ht || Yt) {
        var Wn = ht ? C.value() : C, Pn = Yt ? T.value() : T;
        return Oe || (Oe = new Vn()), ot(Wn, Pn, Z, oe, Oe);
      }
    }
    return Ft ? (Oe || (Oe = new Vn()), yo(C, T, Z, oe, ot, Oe)) : !1;
  }
  function hs(C) {
    if (!Po(C) || Ao(C))
      return !1;
    var T = Pi(C) ? Zt : S;
    return T.test(cr(C));
  }
  function mo(C) {
    return $r(C) && Fo(C.length) && !!fe[Qr(C)];
  }
  function bo(C) {
    if (!wo(C))
      return so(C);
    var T = [];
    for (var Z in Object(C))
      Ge.call(C, Z) && Z != "constructor" && T.push(Z);
    return T;
  }
  function Si(C, T, Z, oe, ot, Oe) {
    var pt = Z & o, Et = C.length, He = T.length;
    if (Et != He && !(pt && He > Et))
      return !1;
    var at = Oe.get(C);
    if (at && Oe.get(T))
      return at == T;
    var xt = -1, en = !0, Ft = Z & s ? new wi() : void 0;
    for (Oe.set(C, T), Oe.set(T, C); ++xt < Et; ) {
      var ht = C[xt], Yt = T[xt];
      if (oe)
        var Wn = pt ? oe(Yt, ht, xt, T, C, Oe) : oe(ht, Yt, xt, C, T, Oe);
      if (Wn !== void 0) {
        if (Wn)
          continue;
        en = !1;
        break;
      }
      if (Ft) {
        if (!ce(T, function(Pn, Qn) {
          if (!et(Ft, Qn) && (ht === Pn || ot(ht, Pn, Z, oe, Oe)))
            return Ft.push(Qn);
        })) {
          en = !1;
          break;
        }
      } else if (!(ht === Yt || ot(ht, Yt, Z, oe, Oe))) {
        en = !1;
        break;
      }
    }
    return Oe.delete(C), Oe.delete(T), en;
  }
  function gs(C, T, Z, oe, ot, Oe, pt) {
    switch (Z) {
      case z:
        if (C.byteLength != T.byteLength || C.byteOffset != T.byteOffset)
          return !1;
        C = C.buffer, T = T.buffer;
      case q:
        return !(C.byteLength != T.byteLength || !Oe(new St(C), new St(T)));
      case h:
      case g:
      case F:
        return So(+C, +T);
      case v:
        return C.name == T.name && C.message == T.message;
      case J:
      case j:
        return C == T + "";
      case w:
        var Et = Nn;
      case G:
        var He = oe & o;
        if (Et || (Et = rt), C.size != T.size && !He)
          return !1;
        var at = pt.get(C);
        if (at)
          return at == T;
        oe |= s, pt.set(C, T);
        var xt = Si(Et(C), Et(T), oe, ot, Oe, pt);
        return pt.delete(C), xt;
      case M:
        if (mu)
          return mu.call(C) == mu.call(T);
    }
    return !1;
  }
  function yo(C, T, Z, oe, ot, Oe) {
    var pt = Z & o, Et = Ei(C), He = Et.length, at = Ei(T), xt = at.length;
    if (He != xt && !pt)
      return !1;
    for (var en = He; en--; ) {
      var Ft = Et[en];
      if (!(pt ? Ft in T : Ge.call(T, Ft)))
        return !1;
    }
    var ht = Oe.get(C);
    if (ht && Oe.get(T))
      return ht == T;
    var Yt = !0;
    Oe.set(C, T), Oe.set(T, C);
    for (var Wn = pt; ++en < He; ) {
      Ft = Et[en];
      var Pn = C[Ft], Qn = T[Ft];
      if (oe)
        var Iu = pt ? oe(Qn, Pn, Ft, T, C, Oe) : oe(Pn, Qn, Ft, C, T, Oe);
      if (!(Iu === void 0 ? Pn === Qn || ot(Pn, Qn, Z, oe, Oe) : Iu)) {
        Yt = !1;
        break;
      }
      Wn || (Wn = Ft == "constructor");
    }
    if (Yt && !Wn) {
      var Kr = C.constructor, Bt = T.constructor;
      Kr != Bt && "constructor" in C && "constructor" in T && !(typeof Kr == "function" && Kr instanceof Kr && typeof Bt == "function" && Bt instanceof Bt) && (Yt = !1);
    }
    return Oe.delete(C), Oe.delete(T), Yt;
  }
  function Ei(C) {
    return bu(C, vs, Io);
  }
  function Sr(C, T) {
    var Z = C.__data__;
    return xo(T) ? Z[typeof T == "string" ? "string" : "hash"] : Z.map;
  }
  function gn(C, T) {
    var Z = Rt(C, T);
    return hs(Z) ? Z : void 0;
  }
  function vo(C) {
    var T = Ge.call(C, ar), Z = C[ar];
    try {
      C[ar] = void 0;
      var oe = !0;
    } catch {
    }
    var ot = $t.call(C);
    return oe && (T ? C[ar] = Z : delete C[ar]), ot;
  }
  var Io = oo ? function(C) {
    return C == null ? [] : (C = Object(C), ee(oo(C), function(T) {
      return pn.call(C, T);
    }));
  } : ut, jn = Qr;
  (fu && jn(new fu(new ArrayBuffer(1))) != z || Jr && jn(new Jr()) != w || du && jn(du.resolve()) != k || pu && jn(new pu()) != G || Ci && jn(new Ci()) != K) && (jn = function(C) {
    var T = Qr(C), Z = T == W ? C.constructor : void 0, oe = Z ? cr(Z) : "";
    if (oe)
      switch (oe) {
        case Ua:
          return z;
        case ja:
          return w;
        case hu:
          return k;
        case Qa:
          return G;
        case gu:
          return K;
      }
    return T;
  });
  function Co(C, T) {
    return T = T ?? l, !!T && (typeof C == "number" || Je.test(C)) && C > -1 && C % 1 == 0 && C < T;
  }
  function xo(C) {
    var T = typeof C;
    return T == "string" || T == "number" || T == "symbol" || T == "boolean" ? C !== "__proto__" : C === null;
  }
  function Ao(C) {
    return !!Tt && Tt in C;
  }
  function wo(C) {
    var T = C && C.constructor, Z = typeof T == "function" && T.prototype || Q;
    return C === Z;
  }
  function ms(C) {
    return $t.call(C);
  }
  function cr(C) {
    if (C != null) {
      try {
        return Be.call(C);
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
    return $r(C) && Ge.call(C, "callee") && !pn.call(C, "callee");
  }, Fi = Array.isArray;
  function bs(C) {
    return C != null && Fo(C.length) && !Pi(C);
  }
  var vu = ao || it;
  function ys(C, T) {
    return qr(C, T);
  }
  function Pi(C) {
    if (!Po(C))
      return !1;
    var T = Qr(C);
    return T == b || T == E || T == p || T == N;
  }
  function Fo(C) {
    return typeof C == "number" && C > -1 && C % 1 == 0 && C <= l;
  }
  function Po(C) {
    var T = typeof C;
    return C != null && (T == "object" || T == "function");
  }
  function $r(C) {
    return C != null && typeof C == "object";
  }
  var Ro = Ct ? ct(Ct) : mo;
  function vs(C) {
    return bs(C) ? ho(C) : bo(C);
  }
  function ut() {
    return [];
  }
  function it() {
    return !1;
  }
  e.exports = ys;
})(_a, _a.exports);
var cE = _a.exports;
const fE = /* @__PURE__ */ Va(cE);
function wg(e) {
  return typeof e == "object" && e && "__lv" in e ? e.__lv.value : e;
}
function dE(e) {
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
  const t = dE(e.value);
  if (!e.prop.default && typeof t > "u")
    return ["required"];
  if (!e.prop.default && Array.isArray(t) && !t.length)
    return ["empty array"];
}
function hE(e) {
  const t = wg(e.value);
  if (t == null || typeof t > "u") return ["required"];
}
function gE(e) {
  const { prop: t, value: r } = e, u = wg(r);
  if (!t.default && (u == null || typeof u > "u"))
    return ["required"];
  const o = typeof u == "number" ? u : parseInt(String(u));
  if (Number.isNaN(o)) return ["not a number"];
  const s = [];
  return typeof t.min == "number" && o < t.min && s.push("number too small"), typeof t.max == "number" && o > t.max && s.push("number too big"), s;
}
function mE(e) {
  const { prop: t, value: r } = e;
  if (!t.default && (r == null || typeof r > "u"))
    return ["required"];
}
function bE(e) {
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
function yE(e) {
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
      const s = bE(t), l = u;
      for (const c of s)
        !c.optional && !l[c.name] && o.push(`missing custom field: ${c.name}`);
    }
    return t.auth_type !== "none" && o.push("no auth provision configured"), o;
  }
}
const Sg = eo(
  void 0
), Yr = () => {
  const e = au(Sg);
  if (!e)
    throw new Error("Must be used inside FrontendClientProvider");
  return e;
}, tR = ({
  children: e,
  client: t
}) => {
  const [r] = $e(
    () => new zS({
      defaultOptions: {
        queries: {
          staleTime: 36e5,
          refetchOnWindowFocus: !1
        }
      }
    })
  );
  return /* @__PURE__ */ re(jS, { client: r, children: /* @__PURE__ */ re(Sg.Provider, { value: t, children: e }) });
}, Zu = [
  "$.service.db",
  "$.interface.http",
  "$.interface.apphook",
  "$.interface.timer"
  // TODO add support for this (cron string and timers)
], Eg = eo(void 0), Nc = () => {
  const e = au(Eg);
  if (!e)
    throw new Error("Must be used inside provider");
  return e;
}, vE = ({
  children: e,
  props: t
}) => {
  const r = Yr(), u = Ic(), {
    component: o,
    configuredProps: s,
    propNames: l,
    userId: c,
    sdkResponse: f,
    enableDebugging: p
  } = t, h = o.key, [g, v] = $e(
    0
  ), [b, E] = $e({}), [w, F] = $e(!1), [R, W] = $e({}), [k, N] = $e([]), [J, G] = $e({});
  sn(() => {
    const ee = {
      ...J
    }, ue = t.hiddenOptionalProperties || [], ce = o.configurable_props || [];
    for (const De of ce)
      if (De.optional) {
        if (ue.some((Rt) => Rt === De.name))
          continue;
        const ct = De.name, et = M[ct];
        et != null && !ee[De.name] && (ee[De.name] = !0);
      }
    G(ee);
  }, [o.key, s]);
  const j = (ee) => J[ee.name];
  let M = s || {};
  const [Y, K] = $e(M), q = t.onUpdateConfiguredProps || K;
  t.onUpdateConfiguredProps || (M = Y);
  const [z, pe] = $e(), [we, ie] = $e(), be = {
    userId: c,
    componentId: h,
    configuredProps: M,
    dynamicPropsId: z == null ? void 0 : z.id
  }, xe = {
    ...be
  }, {
    isFetching: Pe
    // TODO error
  } = Ii({
    queryKey: ["dynamicProps", xe],
    queryFn: async () => {
      var ct;
      const ee = await r.componentReloadProps(
        be
      ), { dynamicProps: ue, observations: ce, errors: De } = ee;
      return ce && ce.filter((et) => et.k === "error").length > 0 ? Lt(ce) : Lt(De), ue && ((ct = t.onUpdateDynamicProps) == null || ct.call(t, ue), pe(ue)), ie(void 0), [];
    },
    enabled: we != null
    // TODO or props.dynamicPropsId && !dynamicProps
  }), [te, x] = $e(
    []
  );
  sn(() => {
    Vt();
  }, [M]);
  let he = (z == null ? void 0 : z.configurableProps) || t.component.configurable_props || [];
  if (l != null && l.length) {
    const ee = [];
    for (const ue of he)
      l.findIndex((ce) => ue.name === ce) >= 0 && ee.push(ue);
    he = ee;
  }
  we != null && (he = he.slice(
    0,
    we + 1
  ));
  const Se = (ee, ue) => {
    const ce = [];
    if (ee.optional || ee.hidden || ee.disabled || Zu.indexOf(ee.type) >= 0)
      return [];
    if (ee.type === "app") {
      const De = b[ee.name];
      if (De) {
        const ct = De.extra.app;
        ce.push(
          ...yE({
            value: ue,
            app: ct
          }) ?? []
        );
      } else
        ce.push("field not registered");
    } else ee.type === "boolean" ? ce.push(
      ...hE({
        value: ue
      }) ?? []
    ) : ee.type === "integer" ? ce.push(
      ...gE({
        prop: ee,
        value: ue
      }) ?? []
    ) : ee.type === "string" ? ce.push(
      ...mE({
        prop: ee,
        value: ue
      }) ?? []
    ) : ee.type === "string[]" && ce.push(
      ...pE({
        prop: ee,
        value: ue
      }) ?? []
    );
    return ce;
  }, S = (ee) => {
    let ue;
    for (let ce = 0; ce < he.length; ce++) {
      const De = he[ce];
      if (De.hidden || De.optional && !j(De))
        continue;
      if (ee[De.name] === void 0 && ue == null && (De.type === "app" || De.remoteOptions)) {
        ue = ce;
        break;
      }
    }
    v(ue);
  }, Je = (ee) => {
    q(ee), S(ee), fe(ee);
  }, fe = (ee) => {
    const ue = {};
    for (let ce = 0; ce < he.length; ce++) {
      const De = he[ce], ct = ee[De.name], et = Se(De, ct);
      et.length && (ue[De.name] = et);
    }
    W(ue);
  };
  sn(() => {
    S(Y);
  }, [Y]), sn(() => {
    fe(M);
  }, [M, we, g]), sn(() => {
    Lt(f);
  }, [f]), sn(() => {
    const ee = {};
    for (const ue of he) {
      if (ue.hidden || Zu.indexOf(ue.type) >= 0 || ue.optional && !j(ue))
        continue;
      const ce = M[ue.name];
      ce === void 0 ? "default" in ue && ue.default != null && (ee[ue.name] = ue.default) : ue.type === "integer" && typeof ce != "number" ? delete ee[ue.name] : ee[ue.name] = ce;
    }
    fE(ee, M) || Je(ee);
  }, [he]);
  const [Ee, lt] = $e(c);
  sn(() => {
    Ee !== c && (Je({}), lt(c));
  }, [c]);
  const Ne = (ee, ue) => {
    const ce = he[ee], De = {
      ...M
    };
    ue === void 0 ? delete De[ce.name] : De[ce.name] = ue, q(De), ce.reloadProps && ie(ee), (ce.type === "app" || ce.remoteOptions) && S(De);
    const ct = Se(ce, ue), et = {
      ...R
    };
    ct.length ? et[ce.name] = ct : delete et[ce.name], W(et);
  }, bt = (ee, ue) => {
    const ce = t.hiddenOptionalProperties || [];
    if (ue && ce.some((et) => et === ee.name))
      return;
    const De = {
      ...J
    };
    ue ? De[ee.name] = !0 : delete De[ee.name];
    const ct = he.findIndex((et) => et.name === ee.name);
    ue ? (s == null ? void 0 : s[ee.name]) !== void 0 ? Ne(
      ct,
      s[ee.name]
    ) : "default" in ee && ee.default != null && Ne(ct, ee.default) : Ne(ct, void 0), G(De);
  }, Vt = () => {
    const ee = [];
    for (const ue of he) {
      if (!ue || ue.optional || ue.hidden || Zu.indexOf(ue.type) >= 0)
        continue;
      const ce = M[ue.name];
      Se(ue, ce).length && ee.push(ue.name);
    }
    ee && te && lE.isEqual(ee, te) || x(ee);
  }, kt = (ee) => {
    E((ue) => (ue[ee.prop.name] = ee, ue)), Vt();
  }, Lt = (ee) => {
    if (!ee) return;
    let ue = [...k];
    const ce = (nt, rt) => {
      try {
        const Qe = JSON.parse(nt), L = {
          name: Qe.name,
          message: Qe.message
        };
        L.name && L.message && rt.push(L);
      } catch {
      }
    }, De = (nt, rt) => {
      const Qe = {
        name: nt.name,
        message: nt.message
      };
      Qe.name && Qe.message && rt.push(Qe);
    }, ct = (nt, rt) => {
      var L, Q;
      const Qe = {
        name: (L = nt.err) == null ? void 0 : L.name,
        message: (Q = nt.err) == null ? void 0 : Q.message
      };
      Qe.name && Qe.message && rt.push(Qe);
    }, et = (nt, rt) => {
      const Qe = nt.os || nt.observations;
      if (Array.isArray(Qe) && Qe.length > 0)
        for (let L = 0; L < Qe.length; L++)
          Qe[L].k === "error" && ct(Qe[L], rt);
    }, Rt = (nt, rt) => {
      rt.push({
        name: nt.error,
        message: JSON.stringify(nt.details)
        //     message: ` // TODO: It would be nice to render the JSON in markdown
        // \`\`\`json
        // ${JSON.stringify(data.details)}
        // \`\`\`
        // `,
        //   })
      });
    }, Nn = (nt, rt) => {
      var Qe;
      try {
        const L = (Qe = JSON.parse(nt.message)) == null ? void 0 : Qe.data;
        L && "observations" in L ? et(L, rt) : L && "error" in L && "details" in L && Rt(L, rt);
      } catch {
      }
    };
    if (Array.isArray(ee) && ee.length > 0)
      for (let nt = 0; nt < ee.length; nt++) {
        const rt = ee[nt];
        typeof rt == "string" ? ce(rt, ue) : typeof rt == "object" && "name" in rt && "message" in rt ? De(rt, ue) : typeof rt == "object" && rt.k === "error" && ct(rt, ue);
      }
    else typeof ee == "object" && "os" in ee || "observations" in ee ? et(ee, ue) : typeof ee == "object" && "message" in ee ? Nn(ee, ue) : ue = [];
    N(ue);
  }, Sn = {
    id: u,
    isValid: !Object.keys(R).length,
    // XXX want to expose more from errors
    props: t,
    userId: c,
    component: o,
    configurableProps: he,
    configuredProps: M,
    dynamicProps: z,
    dynamicPropsQueryIsFetching: Pe,
    errors: R,
    fields: b,
    optionalPropIsEnabled: j,
    optionalPropSetEnabled: bt,
    propsNeedConfiguring: te,
    queryDisabledIdx: g,
    registerField: kt,
    setConfiguredProp: Ne,
    setSubmitting: F,
    submitting: w,
    sdkErrors: k,
    enableDebugging: p
  }, Ct = ln(
    () => Sn,
    [
      // Since we're not modifying existing code structure, include all value properties
      // to maintain behavior but provide stability for component references
      Sn
    ]
  );
  return /* @__PURE__ */ re(Eg.Provider, { value: Ct, children: e });
};
function yi(e) {
  "@babel/helpers - typeof";
  return yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yi(e);
}
function IE(e, t) {
  if (yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var u = r.call(e, t);
    if (yi(u) != "object") return u;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Fg(e) {
  var t = IE(e, "string");
  return yi(t) == "symbol" ? t : t + "";
}
function Vu(e, t, r) {
  return (t = Fg(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function jp(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    t && (u = u.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, u);
  }
  return r;
}
function de(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jp(Object(r), !0).forEach(function(u) {
      Vu(e, u, r[u]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jp(Object(r)).forEach(function(u) {
      Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(r, u));
    });
  }
  return e;
}
function CE(e) {
  if (Array.isArray(e)) return e;
}
function xE(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var u, o, s, l, c = [], f = !0, p = !1;
    try {
      if (s = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        f = !1;
      } else for (; !(f = (u = s.call(r)).done) && (c.push(u.value), c.length !== t); f = !0) ;
    } catch (h) {
      p = !0, o = h;
    } finally {
      try {
        if (!f && r.return != null && (l = r.return(), Object(l) !== l)) return;
      } finally {
        if (p) throw o;
      }
    }
    return c;
  }
}
function hc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, u = Array(t); r < t; r++) u[r] = e[r];
  return u;
}
function Pg(e, t) {
  if (e) {
    if (typeof e == "string") return hc(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? hc(e, t) : void 0;
  }
}
function AE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ar(e, t) {
  return CE(e) || xE(e, t) || Pg(e, t) || AE();
}
function wE(e, t) {
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
  var r, u, o = wE(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (u = 0; u < s.length; u++) r = s[u], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
var SE = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function Rg(e) {
  var t = e.defaultInputValue, r = t === void 0 ? "" : t, u = e.defaultMenuIsOpen, o = u === void 0 ? !1 : u, s = e.defaultValue, l = s === void 0 ? null : s, c = e.inputValue, f = e.menuIsOpen, p = e.onChange, h = e.onInputChange, g = e.onMenuClose, v = e.onMenuOpen, b = e.value, E = or(e, SE), w = $e(c !== void 0 ? c : r), F = Ar(w, 2), R = F[0], W = F[1], k = $e(f !== void 0 ? f : o), N = Ar(k, 2), J = N[0], G = N[1], j = $e(b !== void 0 ? b : l), M = Ar(j, 2), Y = M[0], K = M[1], q = Mt(function(Pe, te) {
    typeof p == "function" && p(Pe, te), K(Pe);
  }, [p]), z = Mt(function(Pe, te) {
    var x;
    typeof h == "function" && (x = h(Pe, te)), W(x !== void 0 ? x : Pe);
  }, [h]), pe = Mt(function() {
    typeof v == "function" && v(), G(!0);
  }, [v]), we = Mt(function() {
    typeof g == "function" && g(), G(!1);
  }, [g]), ie = c !== void 0 ? c : R, be = f !== void 0 ? f : J, xe = b !== void 0 ? b : Y;
  return de(de({}, E), {}, {
    inputValue: ie,
    menuIsOpen: be,
    onChange: q,
    onInputChange: z,
    onMenuClose: we,
    onMenuOpen: pe,
    value: xe
  });
}
function ve() {
  return ve = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var u in r) ({}).hasOwnProperty.call(r, u) && (e[u] = r[u]);
    }
    return e;
  }, ve.apply(null, arguments);
}
function EE(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Qp(e, t) {
  for (var r = 0; r < t.length; r++) {
    var u = t[r];
    u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(e, Fg(u.key), u);
  }
}
function FE(e, t, r) {
  return t && Qp(e.prototype, t), r && Qp(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function gc(e, t) {
  return gc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, gc(e, t);
}
function PE(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && gc(e, t);
}
function Ta(e) {
  return Ta = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Ta(e);
}
function Og() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Og = function() {
    return !!e;
  })();
}
function RE(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function OE(e, t) {
  if (t && (yi(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return RE(e);
}
function _E(e) {
  var t = Og();
  return function() {
    var r, u = Ta(e);
    if (t) {
      var o = Ta(this).constructor;
      r = Reflect.construct(u, arguments, o);
    } else r = u.apply(this, arguments);
    return OE(this, r);
  };
}
function TE(e) {
  if (Array.isArray(e)) return hc(e);
}
function BE(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function GE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ji(e) {
  return TE(e) || BE(e) || Pg(e) || GE();
}
function kE(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const LE = Math.min, DE = Math.max, Ba = Math.round, Ia = Math.floor, Ga = (e) => ({
  x: e,
  y: e
});
function ME(e) {
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
function Za() {
  return typeof window < "u";
}
function _g(e) {
  return Bg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function wr(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Tg(e) {
  var t;
  return (t = (Bg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Bg(e) {
  return Za() ? e instanceof Node || e instanceof wr(e).Node : !1;
}
function NE(e) {
  return Za() ? e instanceof Element || e instanceof wr(e).Element : !1;
}
function Vc(e) {
  return Za() ? e instanceof HTMLElement || e instanceof wr(e).HTMLElement : !1;
}
function qp(e) {
  return !Za() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof wr(e).ShadowRoot;
}
function Gg(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: u,
    display: o
  } = Wc(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + u + r) && !["inline", "contents"].includes(o);
}
function VE() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function WE(e) {
  return ["html", "body", "#document"].includes(_g(e));
}
function Wc(e) {
  return wr(e).getComputedStyle(e);
}
function XE(e) {
  if (_g(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    qp(e) && e.host || // Fallback.
    Tg(e)
  );
  return qp(t) ? t.host : t;
}
function kg(e) {
  const t = XE(e);
  return WE(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Vc(t) && Gg(t) ? t : kg(t);
}
function ka(e, t, r) {
  var u;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = kg(e), s = o === ((u = e.ownerDocument) == null ? void 0 : u.body), l = wr(o);
  if (s) {
    const c = mc(l);
    return t.concat(l, l.visualViewport || [], Gg(o) ? o : [], c && r ? ka(c) : []);
  }
  return t.concat(o, ka(o, [], r));
}
function mc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function HE(e) {
  const t = Wc(e);
  let r = parseFloat(t.width) || 0, u = parseFloat(t.height) || 0;
  const o = Vc(e), s = o ? e.offsetWidth : r, l = o ? e.offsetHeight : u, c = Ba(r) !== s || Ba(u) !== l;
  return c && (r = s, u = l), {
    width: r,
    height: u,
    $: c
  };
}
function Xc(e) {
  return NE(e) ? e : e.contextElement;
}
function $p(e) {
  const t = Xc(e);
  if (!Vc(t))
    return Ga(1);
  const r = t.getBoundingClientRect(), {
    width: u,
    height: o,
    $: s
  } = HE(t);
  let l = (s ? Ba(r.width) : r.width) / u, c = (s ? Ba(r.height) : r.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
const zE = /* @__PURE__ */ Ga(0);
function ZE(e) {
  const t = wr(e);
  return !VE() || !t.visualViewport ? zE : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function YE(e, t, r) {
  return !1;
}
function Kp(e, t, r, u) {
  t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), s = Xc(e);
  let l = Ga(1);
  t && (l = $p(e));
  const c = YE() ? ZE(s) : Ga(0);
  let f = (o.left + c.x) / l.x, p = (o.top + c.y) / l.y, h = o.width / l.x, g = o.height / l.y;
  if (s) {
    const v = wr(s), b = u;
    let E = v, w = mc(E);
    for (; w && u && b !== E; ) {
      const F = $p(w), R = w.getBoundingClientRect(), W = Wc(w), k = R.left + (w.clientLeft + parseFloat(W.paddingLeft)) * F.x, N = R.top + (w.clientTop + parseFloat(W.paddingTop)) * F.y;
      f *= F.x, p *= F.y, h *= F.x, g *= F.y, f += k, p += N, E = wr(w), w = mc(E);
    }
  }
  return ME({
    width: h,
    height: g,
    x: f,
    y: p
  });
}
function Lg(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function JE(e, t) {
  let r = null, u;
  const o = Tg(e);
  function s() {
    var c;
    clearTimeout(u), (c = r) == null || c.disconnect(), r = null;
  }
  function l(c, f) {
    c === void 0 && (c = !1), f === void 0 && (f = 1), s();
    const p = e.getBoundingClientRect(), {
      left: h,
      top: g,
      width: v,
      height: b
    } = p;
    if (c || t(), !v || !b)
      return;
    const E = Ia(g), w = Ia(o.clientWidth - (h + v)), F = Ia(o.clientHeight - (g + b)), R = Ia(h), k = {
      rootMargin: -E + "px " + -w + "px " + -F + "px " + -R + "px",
      threshold: DE(0, LE(1, f)) || 1
    };
    let N = !0;
    function J(G) {
      const j = G[0].intersectionRatio;
      if (j !== f) {
        if (!N)
          return l();
        j ? l(!1, j) : u = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      j === 1 && !Lg(p, e.getBoundingClientRect()) && l(), N = !1;
    }
    try {
      r = new IntersectionObserver(J, {
        ...k,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(J, k);
    }
    r.observe(e);
  }
  return l(!0), s;
}
function UE(e, t, r, u) {
  u === void 0 && (u = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = u, p = Xc(e), h = o || s ? [...p ? ka(p) : [], ...ka(t)] : [];
  h.forEach((R) => {
    o && R.addEventListener("scroll", r, {
      passive: !0
    }), s && R.addEventListener("resize", r);
  });
  const g = p && c ? JE(p, r) : null;
  let v = -1, b = null;
  l && (b = new ResizeObserver((R) => {
    let [W] = R;
    W && W.target === p && b && (b.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var k;
      (k = b) == null || k.observe(t);
    })), r();
  }), p && !f && b.observe(p), b.observe(t));
  let E, w = f ? Kp(e) : null;
  f && F();
  function F() {
    const R = Kp(e);
    w && !Lg(w, R) && r(), w = R, E = requestAnimationFrame(F);
  }
  return r(), () => {
    var R;
    h.forEach((W) => {
      o && W.removeEventListener("scroll", r), s && W.removeEventListener("resize", r);
    }), g == null || g(), (R = b) == null || R.disconnect(), b = null, f && cancelAnimationFrame(E);
  };
}
var bc = NI, jE = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], La = function() {
};
function QE(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function qE(e, t) {
  for (var r = arguments.length, u = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    u[o - 2] = arguments[o];
  var s = [].concat(u);
  if (t && e)
    for (var l in t)
      t.hasOwnProperty(l) && t[l] && s.push("".concat(QE(e, l)));
  return s.filter(function(c) {
    return c;
  }).map(function(c) {
    return String(c).trim();
  }).join(" ");
}
var Da = function(t) {
  return o2(t) ? t.filter(Boolean) : yi(t) === "object" && t !== null ? [t] : [];
}, Dg = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var r = or(t, jE);
  return de({}, r);
}, It = function(t, r, u) {
  var o = t.cx, s = t.getStyles, l = t.getClassNames, c = t.className;
  return {
    css: s(r, t),
    className: o(u ?? {}, l(r, t), c)
  };
};
function Ya(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function $E(e) {
  return Ya(e) ? window.innerHeight : e.clientHeight;
}
function Mg(e) {
  return Ya(e) ? window.pageYOffset : e.scrollTop;
}
function Ma(e, t) {
  if (Ya(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function KE(e) {
  var t = getComputedStyle(e), r = t.position === "absolute", u = /(auto|scroll)/;
  if (t.position === "fixed") return document.documentElement;
  for (var o = e; o = o.parentElement; )
    if (t = getComputedStyle(o), !(r && t.position === "static") && u.test(t.overflow + t.overflowY + t.overflowX))
      return o;
  return document.documentElement;
}
function e2(e, t, r, u) {
  return r * ((e = e / u - 1) * e * e + 1) + t;
}
function Ca(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : La, o = Mg(e), s = t - o, l = 10, c = 0;
  function f() {
    c += l;
    var p = e2(c, o, s, r);
    Ma(e, p), c < r ? window.requestAnimationFrame(f) : u(e);
  }
  f();
}
function eh(e, t) {
  var r = e.getBoundingClientRect(), u = t.getBoundingClientRect(), o = t.offsetHeight / 3;
  u.bottom + o > r.bottom ? Ma(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + o, e.scrollHeight)) : u.top - o < r.top && Ma(e, Math.max(t.offsetTop - o, 0));
}
function t2(e) {
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
function th() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function n2() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var Ng = !1, r2 = {
  get passive() {
    return Ng = !0;
  }
}, xa = typeof window < "u" ? window : {};
xa.addEventListener && xa.removeEventListener && (xa.addEventListener("p", La, r2), xa.removeEventListener("p", La, !1));
var i2 = Ng;
function u2(e) {
  return e != null;
}
function o2(e) {
  return Array.isArray(e);
}
function Wu(e, t, r) {
  return e ? t : r;
}
var a2 = function(t) {
  for (var r = arguments.length, u = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
    u[o - 1] = arguments[o];
  var s = Object.entries(t).filter(function(l) {
    var c = Ar(l, 1), f = c[0];
    return !u.includes(f);
  });
  return s.reduce(function(l, c) {
    var f = Ar(c, 2), p = f[0], h = f[1];
    return l[p] = h, l;
  }, {});
}, s2 = ["children", "innerProps"], l2 = ["children", "innerProps"];
function c2(e) {
  var t = e.maxHeight, r = e.menuEl, u = e.minHeight, o = e.placement, s = e.shouldScroll, l = e.isFixedPosition, c = e.controlHeight, f = KE(r), p = {
    placement: "bottom",
    maxHeight: t
  };
  if (!r || !r.offsetParent) return p;
  var h = f.getBoundingClientRect(), g = h.height, v = r.getBoundingClientRect(), b = v.bottom, E = v.height, w = v.top, F = r.offsetParent.getBoundingClientRect(), R = F.top, W = l ? window.innerHeight : $E(f), k = Mg(f), N = parseInt(getComputedStyle(r).marginBottom, 10), J = parseInt(getComputedStyle(r).marginTop, 10), G = R - J, j = W - w, M = G + k, Y = g - k - w, K = b - W + k + N, q = k + w - J, z = 160;
  switch (o) {
    case "auto":
    case "bottom":
      if (j >= E)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (Y >= E && !l)
        return s && Ca(f, K, z), {
          placement: "bottom",
          maxHeight: t
        };
      if (!l && Y >= u || l && j >= u) {
        s && Ca(f, K, z);
        var pe = l ? j - N : Y - N;
        return {
          placement: "bottom",
          maxHeight: pe
        };
      }
      if (o === "auto" || l) {
        var we = t, ie = l ? G : M;
        return ie >= u && (we = Math.min(ie - N - c, t)), {
          placement: "top",
          maxHeight: we
        };
      }
      if (o === "bottom")
        return s && Ma(f, K), {
          placement: "bottom",
          maxHeight: t
        };
      break;
    case "top":
      if (G >= E)
        return {
          placement: "top",
          maxHeight: t
        };
      if (M >= E && !l)
        return s && Ca(f, q, z), {
          placement: "top",
          maxHeight: t
        };
      if (!l && M >= u || l && G >= u) {
        var be = t;
        return (!l && M >= u || l && G >= u) && (be = l ? G - J : M - J), s && Ca(f, q, z), {
          placement: "top",
          maxHeight: be
        };
      }
      return {
        placement: "bottom",
        maxHeight: t
      };
    default:
      throw new Error('Invalid placement provided "'.concat(o, '".'));
  }
  return p;
}
function f2(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var Vg = function(t) {
  return t === "auto" ? "bottom" : t;
}, d2 = function(t, r) {
  var u, o = t.placement, s = t.theme, l = s.borderRadius, c = s.spacing, f = s.colors;
  return de((u = {
    label: "menu"
  }, Vu(u, f2(o), "100%"), Vu(u, "position", "absolute"), Vu(u, "width", "100%"), Vu(u, "zIndex", 1), u), r ? {} : {
    backgroundColor: f.neutral0,
    borderRadius: l,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: c.menuGutter,
    marginTop: c.menuGutter
  });
}, Wg = /* @__PURE__ */ eo(null), p2 = function(t) {
  var r = t.children, u = t.minMenuHeight, o = t.maxMenuHeight, s = t.menuPlacement, l = t.menuPosition, c = t.menuShouldScrollIntoView, f = t.theme, p = au(Wg) || {}, h = p.setPortalPlacement, g = xr(null), v = $e(o), b = Ar(v, 2), E = b[0], w = b[1], F = $e(null), R = Ar(F, 2), W = R[0], k = R[1], N = f.spacing.controlHeight;
  return bc(function() {
    var J = g.current;
    if (J) {
      var G = l === "fixed", j = c && !G, M = c2({
        maxHeight: o,
        menuEl: J,
        minHeight: u,
        placement: s,
        shouldScroll: j,
        isFixedPosition: G,
        controlHeight: N
      });
      w(M.maxHeight), k(M.placement), h == null || h(M.placement);
    }
  }, [o, s, l, c, u, h, N]), r({
    ref: g,
    placerProps: de(de({}, t), {}, {
      placement: W || Vg(s),
      maxHeight: E
    })
  });
}, h2 = function(t) {
  var r = t.children, u = t.innerRef, o = t.innerProps;
  return me("div", ve({}, It(t, "menu", {
    menu: !0
  }), {
    ref: u
  }, o), r);
}, g2 = h2, m2 = function(t, r) {
  var u = t.maxHeight, o = t.theme.spacing.baseUnit;
  return de({
    maxHeight: u,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, r ? {} : {
    paddingBottom: o,
    paddingTop: o
  });
}, b2 = function(t) {
  var r = t.children, u = t.innerProps, o = t.innerRef, s = t.isMulti;
  return me("div", ve({}, It(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": s
  }), {
    ref: o
  }, u), r);
}, Xg = function(t, r) {
  var u = t.theme, o = u.spacing.baseUnit, s = u.colors;
  return de({
    textAlign: "center"
  }, r ? {} : {
    color: s.neutral40,
    padding: "".concat(o * 2, "px ").concat(o * 3, "px")
  });
}, y2 = Xg, v2 = Xg, I2 = function(t) {
  var r = t.children, u = r === void 0 ? "No options" : r, o = t.innerProps, s = or(t, s2);
  return me("div", ve({}, It(de(de({}, s), {}, {
    children: u,
    innerProps: o
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), o), u);
}, C2 = function(t) {
  var r = t.children, u = r === void 0 ? "Loading..." : r, o = t.innerProps, s = or(t, l2);
  return me("div", ve({}, It(de(de({}, s), {}, {
    children: u,
    innerProps: o
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), o), u);
}, x2 = function(t) {
  var r = t.rect, u = t.offset, o = t.position;
  return {
    left: r.left,
    position: o,
    top: u,
    width: r.width,
    zIndex: 1
  };
}, A2 = function(t) {
  var r = t.appendTo, u = t.children, o = t.controlElement, s = t.innerProps, l = t.menuPlacement, c = t.menuPosition, f = xr(null), p = xr(null), h = $e(Vg(l)), g = Ar(h, 2), v = g[0], b = g[1], E = ln(function() {
    return {
      setPortalPlacement: b
    };
  }, []), w = $e(null), F = Ar(w, 2), R = F[0], W = F[1], k = Mt(function() {
    if (o) {
      var j = t2(o), M = c === "fixed" ? 0 : window.pageYOffset, Y = j[v] + M;
      (Y !== (R == null ? void 0 : R.offset) || j.left !== (R == null ? void 0 : R.rect.left) || j.width !== (R == null ? void 0 : R.rect.width)) && W({
        offset: Y,
        rect: j
      });
    }
  }, [o, c, v, R == null ? void 0 : R.offset, R == null ? void 0 : R.rect.left, R == null ? void 0 : R.rect.width]);
  bc(function() {
    k();
  }, [k]);
  var N = Mt(function() {
    typeof p.current == "function" && (p.current(), p.current = null), o && f.current && (p.current = UE(o, f.current, k, {
      elementResize: "ResizeObserver" in window
    }));
  }, [o, k]);
  bc(function() {
    N();
  }, [N]);
  var J = Mt(function(j) {
    f.current = j, N();
  }, [N]);
  if (!r && c !== "fixed" || !R) return null;
  var G = me("div", ve({
    ref: J
  }, It(de(de({}, t), {}, {
    offset: R.offset,
    position: c,
    rect: R.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), s), u);
  return me(Wg.Provider, {
    value: E
  }, r ? /* @__PURE__ */ XI(G, r) : G);
}, w2 = function(t) {
  var r = t.isDisabled, u = t.isRtl;
  return {
    label: "container",
    direction: u ? "rtl" : void 0,
    pointerEvents: r ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, S2 = function(t) {
  var r = t.children, u = t.innerProps, o = t.isDisabled, s = t.isRtl;
  return me("div", ve({}, It(t, "container", {
    "--is-disabled": o,
    "--is-rtl": s
  }), u), r);
}, E2 = function(t, r) {
  var u = t.theme.spacing, o = t.isMulti, s = t.hasValue, l = t.selectProps.controlShouldRenderValue;
  return de({
    alignItems: "center",
    display: o && s && l ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, r ? {} : {
    padding: "".concat(u.baseUnit / 2, "px ").concat(u.baseUnit * 2, "px")
  });
}, F2 = function(t) {
  var r = t.children, u = t.innerProps, o = t.isMulti, s = t.hasValue;
  return me("div", ve({}, It(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": o,
    "value-container--has-value": s
  }), u), r);
}, P2 = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, R2 = function(t) {
  var r = t.children, u = t.innerProps;
  return me("div", ve({}, It(t, "indicatorsContainer", {
    indicators: !0
  }), u), r);
}, nh, O2 = ["size"], _2 = ["innerProps", "isRtl", "size"];
function T2() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var B2 = process.env.NODE_ENV === "production" ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */",
  toString: T2
}, Hg = function(t) {
  var r = t.size, u = or(t, O2);
  return me("svg", ve({
    height: r,
    width: r,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: B2
  }, u));
}, Hc = function(t) {
  return me(Hg, ve({
    size: 20
  }, t), me("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, zg = function(t) {
  return me(Hg, ve({
    size: 20
  }, t), me("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, Zg = function(t, r) {
  var u = t.isFocused, o = t.theme, s = o.spacing.baseUnit, l = o.colors;
  return de({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, r ? {} : {
    color: u ? l.neutral60 : l.neutral20,
    padding: s * 2,
    ":hover": {
      color: u ? l.neutral80 : l.neutral40
    }
  });
}, G2 = Zg, k2 = function(t) {
  var r = t.children, u = t.innerProps;
  return me("div", ve({}, It(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), u), r || me(zg, null));
}, L2 = Zg, D2 = function(t) {
  var r = t.children, u = t.innerProps;
  return me("div", ve({}, It(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), u), r || me(Hc, null));
}, M2 = function(t, r) {
  var u = t.isDisabled, o = t.theme, s = o.spacing.baseUnit, l = o.colors;
  return de({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, r ? {} : {
    backgroundColor: u ? l.neutral10 : l.neutral20,
    marginBottom: s * 2,
    marginTop: s * 2
  });
}, N2 = function(t) {
  var r = t.innerProps;
  return me("span", ve({}, r, It(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, V2 = WI(nh || (nh = kE([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), W2 = function(t, r) {
  var u = t.isFocused, o = t.size, s = t.theme, l = s.colors, c = s.spacing.baseUnit;
  return de({
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
}, Ll = function(t) {
  var r = t.delay, u = t.offset;
  return me("span", {
    css: /* @__PURE__ */ Rh({
      animation: "".concat(V2, " 1s ease-in-out ").concat(r, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: u ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, process.env.NODE_ENV === "production" ? "" : ";label:LoadingDot;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */")
  });
}, X2 = function(t) {
  var r = t.innerProps, u = t.isRtl, o = t.size, s = o === void 0 ? 4 : o, l = or(t, _2);
  return me("div", ve({}, It(de(de({}, l), {}, {
    innerProps: r,
    isRtl: u,
    size: s
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), r), me(Ll, {
    delay: 0,
    offset: u
  }), me(Ll, {
    delay: 160,
    offset: !0
  }), me(Ll, {
    delay: 320,
    offset: !u
  }));
}, H2 = function(t, r) {
  var u = t.isDisabled, o = t.isFocused, s = t.theme, l = s.colors, c = s.borderRadius, f = s.spacing;
  return de({
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
}, z2 = function(t) {
  var r = t.children, u = t.isDisabled, o = t.isFocused, s = t.innerRef, l = t.innerProps, c = t.menuIsOpen;
  return me("div", ve({
    ref: s
  }, It(t, "control", {
    control: !0,
    "control--is-disabled": u,
    "control--is-focused": o,
    "control--menu-is-open": c
  }), l, {
    "aria-disabled": u || void 0
  }), r);
}, Z2 = z2, Y2 = ["data"], J2 = function(t, r) {
  var u = t.theme.spacing;
  return r ? {} : {
    paddingBottom: u.baseUnit * 2,
    paddingTop: u.baseUnit * 2
  };
}, U2 = function(t) {
  var r = t.children, u = t.cx, o = t.getStyles, s = t.getClassNames, l = t.Heading, c = t.headingProps, f = t.innerProps, p = t.label, h = t.theme, g = t.selectProps;
  return me("div", ve({}, It(t, "group", {
    group: !0
  }), f), me(l, ve({}, c, {
    selectProps: g,
    theme: h,
    getStyles: o,
    getClassNames: s,
    cx: u
  }), p), me("div", null, r));
}, j2 = function(t, r) {
  var u = t.theme, o = u.colors, s = u.spacing;
  return de({
    label: "group",
    cursor: "default",
    display: "block"
  }, r ? {} : {
    color: o.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: s.baseUnit * 3,
    paddingRight: s.baseUnit * 3,
    textTransform: "uppercase"
  });
}, Q2 = function(t) {
  var r = Dg(t);
  r.data;
  var u = or(r, Y2);
  return me("div", ve({}, It(t, "groupHeading", {
    "group-heading": !0
  }), u));
}, q2 = U2, $2 = ["innerRef", "isDisabled", "isHidden", "inputClassName"], K2 = function(t, r) {
  var u = t.isDisabled, o = t.value, s = t.theme, l = s.spacing, c = s.colors;
  return de(de({
    visibility: u ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: o ? "translateZ(0)" : ""
  }, eF), r ? {} : {
    margin: l.baseUnit / 2,
    paddingBottom: l.baseUnit / 2,
    paddingTop: l.baseUnit / 2,
    color: c.neutral80
  });
}, Yg = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, eF = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": de({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, Yg)
}, tF = function(t) {
  return de({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, Yg);
}, nF = function(t) {
  var r = t.cx, u = t.value, o = Dg(t), s = o.innerRef, l = o.isDisabled, c = o.isHidden, f = o.inputClassName, p = or(o, $2);
  return me("div", ve({}, It(t, "input", {
    "input-container": !0
  }), {
    "data-value": u || ""
  }), me("input", ve({
    className: r({
      input: !0
    }, f),
    ref: s,
    style: tF(c),
    disabled: l
  }, p)));
}, rF = nF, iF = function(t, r) {
  var u = t.theme, o = u.spacing, s = u.borderRadius, l = u.colors;
  return de({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, r ? {} : {
    backgroundColor: l.neutral10,
    borderRadius: s / 2,
    margin: o.baseUnit / 2
  });
}, uF = function(t, r) {
  var u = t.theme, o = u.borderRadius, s = u.colors, l = t.cropWithEllipsis;
  return de({
    overflow: "hidden",
    textOverflow: l || l === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, r ? {} : {
    borderRadius: o / 2,
    color: s.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
}, oF = function(t, r) {
  var u = t.theme, o = u.spacing, s = u.borderRadius, l = u.colors, c = t.isFocused;
  return de({
    alignItems: "center",
    display: "flex"
  }, r ? {} : {
    borderRadius: s / 2,
    backgroundColor: c ? l.dangerLight : void 0,
    paddingLeft: o.baseUnit,
    paddingRight: o.baseUnit,
    ":hover": {
      backgroundColor: l.dangerLight,
      color: l.danger
    }
  });
}, Jg = function(t) {
  var r = t.children, u = t.innerProps;
  return me("div", u, r);
}, aF = Jg, sF = Jg;
function lF(e) {
  var t = e.children, r = e.innerProps;
  return me("div", ve({
    role: "button"
  }, r), t || me(Hc, {
    size: 14
  }));
}
var cF = function(t) {
  var r = t.children, u = t.components, o = t.data, s = t.innerProps, l = t.isDisabled, c = t.removeProps, f = t.selectProps, p = u.Container, h = u.Label, g = u.Remove;
  return me(p, {
    data: o,
    innerProps: de(de({}, It(t, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": l
    })), s),
    selectProps: f
  }, me(h, {
    data: o,
    innerProps: de({}, It(t, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: f
  }, r), me(g, {
    data: o,
    innerProps: de(de({}, It(t, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(r || "option")
    }, c),
    selectProps: f
  }));
}, fF = cF, dF = function(t, r) {
  var u = t.isDisabled, o = t.isFocused, s = t.isSelected, l = t.theme, c = l.spacing, f = l.colors;
  return de({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, r ? {} : {
    backgroundColor: s ? f.primary : o ? f.primary25 : "transparent",
    color: u ? f.neutral20 : s ? f.neutral0 : "inherit",
    padding: "".concat(c.baseUnit * 2, "px ").concat(c.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: u ? void 0 : s ? f.primary : f.primary50
    }
  });
}, pF = function(t) {
  var r = t.children, u = t.isDisabled, o = t.isFocused, s = t.isSelected, l = t.innerRef, c = t.innerProps;
  return me("div", ve({}, It(t, "option", {
    option: !0,
    "option--is-disabled": u,
    "option--is-focused": o,
    "option--is-selected": s
  }), {
    ref: l,
    "aria-disabled": u
  }, c), r);
}, hF = pF, gF = function(t, r) {
  var u = t.theme, o = u.spacing, s = u.colors;
  return de({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, r ? {} : {
    color: s.neutral50,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, mF = function(t) {
  var r = t.children, u = t.innerProps;
  return me("div", ve({}, It(t, "placeholder", {
    placeholder: !0
  }), u), r);
}, bF = mF, yF = function(t, r) {
  var u = t.isDisabled, o = t.theme, s = o.spacing, l = o.colors;
  return de({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, r ? {} : {
    color: u ? l.neutral40 : l.neutral80,
    marginLeft: s.baseUnit / 2,
    marginRight: s.baseUnit / 2
  });
}, vF = function(t) {
  var r = t.children, u = t.isDisabled, o = t.innerProps;
  return me("div", ve({}, It(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": u
  }), o), r);
}, IF = vF, uo = {
  ClearIndicator: D2,
  Control: Z2,
  DropdownIndicator: k2,
  DownChevron: zg,
  CrossIcon: Hc,
  Group: q2,
  GroupHeading: Q2,
  IndicatorsContainer: R2,
  IndicatorSeparator: N2,
  Input: rF,
  LoadingIndicator: X2,
  Menu: g2,
  MenuList: b2,
  MenuPortal: A2,
  LoadingMessage: C2,
  NoOptionsMessage: I2,
  MultiValue: fF,
  MultiValueContainer: aF,
  MultiValueLabel: sF,
  MultiValueRemove: lF,
  Option: hF,
  Placeholder: bF,
  SelectContainer: S2,
  SingleValue: IF,
  ValueContainer: F2
}, CF = function(t) {
  return de(de({}, uo), t.components);
}, rh = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function xF(e, t) {
  return !!(e === t || rh(e) && rh(t));
}
function AF(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!xF(e[r], t[r]))
      return !1;
  return !0;
}
function wF(e, t) {
  t === void 0 && (t = AF);
  var r = null;
  function u() {
    for (var o = [], s = 0; s < arguments.length; s++)
      o[s] = arguments[s];
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
function SF() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var EF = process.env.NODE_ENV === "production" ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IEpTWCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: SF
}, FF = function(t) {
  return me("span", ve({
    css: EF
  }, t));
}, ih = FF, PF = {
  guidance: function(t) {
    var r = t.isSearchable, u = t.isMulti, o = t.tabSelectsValue, s = t.context, l = t.isInitialFocus;
    switch (s) {
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
    var r = t.action, u = t.label, o = u === void 0 ? "" : u, s = t.labels, l = t.isDisabled;
    switch (r) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(o, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(s.length > 1 ? "s" : "", " ").concat(s.join(","), ", selected.");
      case "select-option":
        return l ? "option ".concat(o, " is disabled. Select another option.") : "option ".concat(o, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(t) {
    var r = t.context, u = t.focused, o = t.options, s = t.label, l = s === void 0 ? "" : s, c = t.selectValue, f = t.isDisabled, p = t.isSelected, h = t.isAppleDevice, g = function(w, F) {
      return w && w.length ? "".concat(w.indexOf(F) + 1, " of ").concat(w.length) : "";
    };
    if (r === "value" && c)
      return "value ".concat(l, " focused, ").concat(g(c, u), ".");
    if (r === "menu" && h) {
      var v = f ? " disabled" : "", b = "".concat(p ? " selected" : "").concat(v);
      return "".concat(l).concat(b, ", ").concat(g(o, u), ".");
    }
    return "";
  },
  onFilter: function(t) {
    var r = t.inputValue, u = t.resultsMessage;
    return "".concat(u).concat(r ? " for search term " + r : "", ".");
  }
}, RF = function(t) {
  var r = t.ariaSelection, u = t.focusedOption, o = t.focusedValue, s = t.focusableOptions, l = t.isFocused, c = t.selectValue, f = t.selectProps, p = t.id, h = t.isAppleDevice, g = f.ariaLiveMessages, v = f.getOptionLabel, b = f.inputValue, E = f.isMulti, w = f.isOptionDisabled, F = f.isSearchable, R = f.menuIsOpen, W = f.options, k = f.screenReaderStatus, N = f.tabSelectsValue, J = f.isLoading, G = f["aria-label"], j = f["aria-live"], M = ln(function() {
    return de(de({}, PF), g || {});
  }, [g]), Y = ln(function() {
    var ie = "";
    if (r && M.onChange) {
      var be = r.option, xe = r.options, Pe = r.removedValue, te = r.removedValues, x = r.value, he = function(Ne) {
        return Array.isArray(Ne) ? null : Ne;
      }, Se = Pe || be || he(x), S = Se ? v(Se) : "", Je = xe || te || void 0, fe = Je ? Je.map(v) : [], Ee = de({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: Se && w(Se, c),
        label: S,
        labels: fe
      }, r);
      ie = M.onChange(Ee);
    }
    return ie;
  }, [r, M, w, c, v]), K = ln(function() {
    var ie = "", be = u || o, xe = !!(u && c && c.includes(u));
    if (be && M.onFocus) {
      var Pe = {
        focused: be,
        label: v(be),
        isDisabled: w(be, c),
        isSelected: xe,
        options: s,
        context: be === u ? "menu" : "value",
        selectValue: c,
        isAppleDevice: h
      };
      ie = M.onFocus(Pe);
    }
    return ie;
  }, [u, o, v, w, M, s, c, h]), q = ln(function() {
    var ie = "";
    if (R && W.length && !J && M.onFilter) {
      var be = k({
        count: s.length
      });
      ie = M.onFilter({
        inputValue: b,
        resultsMessage: be
      });
    }
    return ie;
  }, [s, b, R, M, W, k, J]), z = (r == null ? void 0 : r.action) === "initial-input-focus", pe = ln(function() {
    var ie = "";
    if (M.guidance) {
      var be = o ? "value" : R ? "menu" : "input";
      ie = M.guidance({
        "aria-label": G,
        context: be,
        isDisabled: u && w(u, c),
        isMulti: E,
        isSearchable: F,
        tabSelectsValue: N,
        isInitialFocus: z
      });
    }
    return ie;
  }, [G, u, o, E, w, F, R, M, c, N, z]), we = me(Xl, null, me("span", {
    id: "aria-selection"
  }, Y), me("span", {
    id: "aria-focused"
  }, K), me("span", {
    id: "aria-results"
  }, q), me("span", {
    id: "aria-guidance"
  }, pe));
  return me(Xl, null, me(ih, {
    id: p
  }, z && we), me(ih, {
    "aria-live": j,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, l && !z && we));
}, OF = RF, yc = [{
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
}], _F = new RegExp("[" + yc.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), Ug = {};
for (var Dl = 0; Dl < yc.length; Dl++)
  for (var Ml = yc[Dl], Nl = 0; Nl < Ml.letters.length; Nl++)
    Ug[Ml.letters[Nl]] = Ml.base;
var jg = function(t) {
  return t.replace(_F, function(r) {
    return Ug[r];
  });
}, TF = wF(jg), uh = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, BF = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, GF = function(t) {
  return function(r, u) {
    if (r.data.__isNew__) return !0;
    var o = de({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: BF,
      trim: !0,
      matchFrom: "any"
    }, t), s = o.ignoreCase, l = o.ignoreAccents, c = o.stringify, f = o.trim, p = o.matchFrom, h = f ? uh(u) : u, g = f ? uh(c(r)) : c(r);
    return s && (h = h.toLowerCase(), g = g.toLowerCase()), l && (h = TF(h), g = jg(g)), p === "start" ? g.substr(0, h.length) === h : g.indexOf(h) > -1;
  };
}, kF = ["innerRef"];
function LF(e) {
  var t = e.innerRef, r = or(e, kF), u = a2(r, "onExited", "in", "enter", "exit", "appear");
  return me("input", ve({
    ref: t
  }, u, {
    css: /* @__PURE__ */ Rh({
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
var DF = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function MF(e) {
  var t = e.isEnabled, r = e.onBottomArrive, u = e.onBottomLeave, o = e.onTopArrive, s = e.onTopLeave, l = xr(!1), c = xr(!1), f = xr(0), p = xr(null), h = Mt(function(F, R) {
    if (p.current !== null) {
      var W = p.current, k = W.scrollTop, N = W.scrollHeight, J = W.clientHeight, G = p.current, j = R > 0, M = N - J - k, Y = !1;
      M > R && l.current && (u && u(F), l.current = !1), j && c.current && (s && s(F), c.current = !1), j && R > M ? (r && !l.current && r(F), G.scrollTop = N, Y = !0, l.current = !0) : !j && -R > k && (o && !c.current && o(F), G.scrollTop = 0, Y = !0, c.current = !0), Y && DF(F);
    }
  }, [r, u, o, s]), g = Mt(function(F) {
    h(F, F.deltaY);
  }, [h]), v = Mt(function(F) {
    f.current = F.changedTouches[0].clientY;
  }, []), b = Mt(function(F) {
    var R = f.current - F.changedTouches[0].clientY;
    h(F, R);
  }, [h]), E = Mt(function(F) {
    if (F) {
      var R = i2 ? {
        passive: !1
      } : !1;
      F.addEventListener("wheel", g, R), F.addEventListener("touchstart", v, R), F.addEventListener("touchmove", b, R);
    }
  }, [b, v, g]), w = Mt(function(F) {
    F && (F.removeEventListener("wheel", g, !1), F.removeEventListener("touchstart", v, !1), F.removeEventListener("touchmove", b, !1));
  }, [b, v, g]);
  return sn(function() {
    if (t) {
      var F = p.current;
      return E(F), function() {
        w(F);
      };
    }
  }, [t, E, w]), function(F) {
    p.current = F;
  };
}
var oh = ["boxSizing", "height", "overflow", "paddingRight", "position"], ah = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function sh(e) {
  e.cancelable && e.preventDefault();
}
function lh(e) {
  e.stopPropagation();
}
function ch() {
  var e = this.scrollTop, t = this.scrollHeight, r = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : r === t && (this.scrollTop = e - 1);
}
function fh() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var dh = !!(typeof window < "u" && window.document && window.document.createElement), Mu = 0, Hi = {
  capture: !1,
  passive: !1
};
function NF(e) {
  var t = e.isEnabled, r = e.accountForScrollbars, u = r === void 0 ? !0 : r, o = xr({}), s = xr(null), l = Mt(function(f) {
    if (dh) {
      var p = document.body, h = p && p.style;
      if (u && oh.forEach(function(E) {
        var w = h && h[E];
        o.current[E] = w;
      }), u && Mu < 1) {
        var g = parseInt(o.current.paddingRight, 10) || 0, v = document.body ? document.body.clientWidth : 0, b = window.innerWidth - v + g || 0;
        Object.keys(ah).forEach(function(E) {
          var w = ah[E];
          h && (h[E] = w);
        }), h && (h.paddingRight = "".concat(b, "px"));
      }
      p && fh() && (p.addEventListener("touchmove", sh, Hi), f && (f.addEventListener("touchstart", ch, Hi), f.addEventListener("touchmove", lh, Hi))), Mu += 1;
    }
  }, [u]), c = Mt(function(f) {
    if (dh) {
      var p = document.body, h = p && p.style;
      Mu = Math.max(Mu - 1, 0), u && Mu < 1 && oh.forEach(function(g) {
        var v = o.current[g];
        h && (h[g] = v);
      }), p && fh() && (p.removeEventListener("touchmove", sh, Hi), f && (f.removeEventListener("touchstart", ch, Hi), f.removeEventListener("touchmove", lh, Hi)));
    }
  }, [u]);
  return sn(function() {
    if (t) {
      var f = s.current;
      return l(f), function() {
        c(f);
      };
    }
  }, [t, l, c]), function(f) {
    s.current = f;
  };
}
function VF() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var WF = function(t) {
  var r = t.target;
  return r.ownerDocument.activeElement && r.ownerDocument.activeElement.blur();
}, XF = process.env.NODE_ENV === "production" ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: VF
};
function HF(e) {
  var t = e.children, r = e.lockEnabled, u = e.captureEnabled, o = u === void 0 ? !0 : u, s = e.onBottomArrive, l = e.onBottomLeave, c = e.onTopArrive, f = e.onTopLeave, p = MF({
    isEnabled: o,
    onBottomArrive: s,
    onBottomLeave: l,
    onTopArrive: c,
    onTopLeave: f
  }), h = NF({
    isEnabled: r
  }), g = function(b) {
    p(b), h(b);
  };
  return me(Xl, null, r && me("div", {
    onClick: WF,
    css: XF
  }), t(g));
}
function zF() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var ZF = process.env.NODE_ENV === "production" ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: zF
}, YF = function(t) {
  var r = t.name, u = t.onFocus;
  return me("input", {
    required: !0,
    name: r,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: u,
    css: ZF,
    value: "",
    onChange: function() {
    }
  });
}, JF = YF;
function zc(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function UF() {
  return zc(/^iPhone/i);
}
function Qg() {
  return zc(/^Mac/i);
}
function jF() {
  return zc(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Qg() && navigator.maxTouchPoints > 1;
}
function QF() {
  return UF() || jF();
}
function qF() {
  return Qg() || QF();
}
var $F = function(t) {
  return t.label;
}, qg = function(t) {
  return t.label;
}, $g = function(t) {
  return t.value;
}, KF = function(t) {
  return !!t.isDisabled;
}, eP = {
  clearIndicator: L2,
  container: w2,
  control: H2,
  dropdownIndicator: G2,
  group: J2,
  groupHeading: j2,
  indicatorsContainer: P2,
  indicatorSeparator: M2,
  input: K2,
  loadingIndicator: W2,
  loadingMessage: v2,
  menu: d2,
  menuList: m2,
  menuPortal: x2,
  multiValue: iF,
  multiValueLabel: uF,
  multiValueRemove: oF,
  noOptionsMessage: y2,
  option: dF,
  placeholder: gF,
  singleValue: yF,
  valueContainer: E2
};
function tP(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = de({}, e);
  return Object.keys(t).forEach(function(u) {
    var o = u;
    e[o] ? r[o] = function(s, l) {
      return t[o](e[o](s, l), l);
    } : r[o] = t[o];
  }), r;
}
var nP = {
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
}, rP = 4, Kg = 4, iP = 38, uP = Kg * 2, oP = {
  baseUnit: Kg,
  controlHeight: iP,
  menuGutter: uP
}, Yu = {
  borderRadius: rP,
  colors: nP,
  spacing: oP
}, aP = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: th(),
  captureMenuScroll: !th(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: GF(),
  formatGroupLabel: $F,
  getOptionLabel: qg,
  getOptionValue: $g,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: KF,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !n2(),
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
function ph(e, t, r, u) {
  var o = nm(e, t, r), s = rm(e, t, r), l = tm(e, t), c = Na(e, t);
  return {
    type: "option",
    data: t,
    isDisabled: o,
    isSelected: s,
    label: l,
    value: c,
    index: u
  };
}
function Sa(e, t) {
  return e.options.map(function(r, u) {
    if ("options" in r) {
      var o = r.options.map(function(l, c) {
        return ph(e, l, t, c);
      }).filter(function(l) {
        return gh(e, l);
      });
      return o.length > 0 ? {
        type: "group",
        data: r,
        options: o,
        index: u
      } : void 0;
    }
    var s = ph(e, r, t, u);
    return gh(e, s) ? s : void 0;
  }).filter(u2);
}
function em(e) {
  return e.reduce(function(t, r) {
    return r.type === "group" ? t.push.apply(t, Ji(r.options.map(function(u) {
      return u.data;
    }))) : t.push(r.data), t;
  }, []);
}
function hh(e, t) {
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
function sP(e, t) {
  return em(Sa(e, t));
}
function gh(e, t) {
  var r = e.inputValue, u = r === void 0 ? "" : r, o = t.data, s = t.isSelected, l = t.label, c = t.value;
  return (!um(e) || !s) && im(e, {
    label: l,
    value: c,
    data: o
  }, u);
}
function lP(e, t) {
  var r = e.focusedValue, u = e.selectValue, o = u.indexOf(r);
  if (o > -1) {
    var s = t.indexOf(r);
    if (s > -1)
      return r;
    if (o < t.length)
      return t[o];
  }
  return null;
}
function cP(e, t) {
  var r = e.focusedOption;
  return r && t.indexOf(r) > -1 ? r : t[0];
}
var Vl = function(t, r) {
  var u, o = (u = t.find(function(s) {
    return s.data === r;
  })) === null || u === void 0 ? void 0 : u.id;
  return o || null;
}, tm = function(t, r) {
  return t.getOptionLabel(r);
}, Na = function(t, r) {
  return t.getOptionValue(r);
};
function nm(e, t, r) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, r) : !1;
}
function rm(e, t, r) {
  if (r.indexOf(t) > -1) return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, r);
  var u = Na(e, t);
  return r.some(function(o) {
    return Na(e, o) === u;
  });
}
function im(e, t, r) {
  return e.filterOption ? e.filterOption(t, r) : !0;
}
var um = function(t) {
  var r = t.hideSelectedOptions, u = t.isMulti;
  return r === void 0 ? u : r;
}, fP = 1, Zc = /* @__PURE__ */ function(e) {
  PE(r, e);
  var t = _E(r);
  function r(u) {
    var o;
    if (EE(this, r), o = t.call(this, u), o.state = {
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
    }, o.blockOptionHover = !1, o.isComposing = !1, o.commonProps = void 0, o.initialTouchX = 0, o.initialTouchY = 0, o.openAfterFocus = !1, o.scrollToFocusedOptionOnUpdate = !1, o.userIsDragging = void 0, o.isAppleDevice = qF(), o.controlRef = null, o.getControlRef = function(f) {
      o.controlRef = f;
    }, o.focusedOptionRef = null, o.getFocusedOptionRef = function(f) {
      o.focusedOptionRef = f;
    }, o.menuListRef = null, o.getMenuListRef = function(f) {
      o.menuListRef = f;
    }, o.inputRef = null, o.getInputRef = function(f) {
      o.inputRef = f;
    }, o.focus = o.focusInput, o.blur = o.blurInput, o.onChange = function(f, p) {
      var h = o.props, g = h.onChange, v = h.name;
      p.name = v, o.ariaOnChange(f, p), g(f, p);
    }, o.setValue = function(f, p, h) {
      var g = o.props, v = g.closeMenuOnSelect, b = g.isMulti, E = g.inputValue;
      o.onInputChange("", {
        action: "set-value",
        prevInputValue: E
      }), v && (o.setState({
        inputIsHiddenAfterUpdate: !b
      }), o.onMenuClose()), o.setState({
        clearFocusValueOnUpdate: !0
      }), o.onChange(f, {
        action: p,
        option: h
      });
    }, o.selectOption = function(f) {
      var p = o.props, h = p.blurInputOnSelect, g = p.isMulti, v = p.name, b = o.state.selectValue, E = g && o.isOptionSelected(f, b), w = o.isOptionDisabled(f, b);
      if (E) {
        var F = o.getOptionValue(f);
        o.setValue(b.filter(function(R) {
          return o.getOptionValue(R) !== F;
        }), "deselect-option", f);
      } else if (!w)
        g ? o.setValue([].concat(Ji(b), [f]), "select-option", f) : o.setValue(f, "select-option");
      else {
        o.ariaOnChange(f, {
          action: "select-option",
          option: f,
          name: v
        });
        return;
      }
      h && o.blurInput();
    }, o.removeValue = function(f) {
      var p = o.props.isMulti, h = o.state.selectValue, g = o.getOptionValue(f), v = h.filter(function(E) {
        return o.getOptionValue(E) !== g;
      }), b = Wu(p, v, v[0] || null);
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
      var f = o.props.isMulti, p = o.state.selectValue, h = p[p.length - 1], g = p.slice(0, p.length - 1), v = Wu(f, g, g[0] || null);
      h && o.onChange(v, {
        action: "pop-value",
        removedValue: h
      });
    }, o.getFocusedOptionId = function(f) {
      return Vl(o.state.focusableOptionsWithIds, f);
    }, o.getFocusableOptionsWithIds = function() {
      return hh(Sa(o.props, o.state.selectValue), o.getElementId("option"));
    }, o.getValue = function() {
      return o.state.selectValue;
    }, o.cx = function() {
      for (var f = arguments.length, p = new Array(f), h = 0; h < f; h++)
        p[h] = arguments[h];
      return qE.apply(void 0, [o.props.classNamePrefix].concat(p));
    }, o.getOptionLabel = function(f) {
      return tm(o.props, f);
    }, o.getOptionValue = function(f) {
      return Na(o.props, f);
    }, o.getStyles = function(f, p) {
      var h = o.props.unstyled, g = eP[f](p, h);
      g.boxSizing = "border-box";
      var v = o.props.styles[f];
      return v ? v(g, p) : g;
    }, o.getClassNames = function(f, p) {
      var h, g;
      return (h = (g = o.props.classNames)[f]) === null || h === void 0 ? void 0 : h.call(g, p);
    }, o.getElementId = function(f) {
      return "".concat(o.state.instancePrefix, "-").concat(f);
    }, o.getComponents = function() {
      return CF(o.props);
    }, o.buildCategorizedOptions = function() {
      return Sa(o.props, o.state.selectValue);
    }, o.getCategorizedOptions = function() {
      return o.props.menuIsOpen ? o.buildCategorizedOptions() : [];
    }, o.buildFocusableOptions = function() {
      return em(o.buildCategorizedOptions());
    }, o.getFocusableOptions = function() {
      return o.props.menuIsOpen ? o.buildFocusableOptions() : [];
    }, o.ariaOnChange = function(f, p) {
      o.setState({
        ariaSelection: de({
          value: f
        }, p)
      });
    }, o.onMenuMouseDown = function(f) {
      f.button === 0 && (f.stopPropagation(), f.preventDefault(), o.focusInput());
    }, o.onMenuMouseMove = function(f) {
      o.blockOptionHover = !1;
    }, o.onControlMouseDown = function(f) {
      if (!f.defaultPrevented) {
        var p = o.props.openMenuOnClick;
        o.state.isFocused ? o.props.menuIsOpen ? f.target.tagName !== "INPUT" && f.target.tagName !== "TEXTAREA" && o.onMenuClose() : p && o.openMenu("first") : (p && (o.openAfterFocus = !0), o.focusInput()), f.target.tagName !== "INPUT" && f.target.tagName !== "TEXTAREA" && f.preventDefault();
      }
    }, o.onDropdownIndicatorMouseDown = function(f) {
      if (!(f && f.type === "mousedown" && f.button !== 0) && !o.props.isDisabled) {
        var p = o.props, h = p.isMulti, g = p.menuIsOpen;
        o.focusInput(), g ? (o.setState({
          inputIsHiddenAfterUpdate: !h
        }), o.onMenuClose()) : o.openMenu("first"), f.preventDefault();
      }
    }, o.onClearIndicatorMouseDown = function(f) {
      f && f.type === "mousedown" && f.button !== 0 || (o.clearValue(), f.preventDefault(), o.openAfterFocus = !1, f.type === "touchend" ? o.focusInput() : setTimeout(function() {
        return o.focusInput();
      }));
    }, o.onScroll = function(f) {
      typeof o.props.closeMenuOnScroll == "boolean" ? f.target instanceof HTMLElement && Ya(f.target) && o.props.onMenuClose() : typeof o.props.closeMenuOnScroll == "function" && o.props.closeMenuOnScroll(f) && o.props.onMenuClose();
    }, o.onCompositionStart = function() {
      o.isComposing = !0;
    }, o.onCompositionEnd = function() {
      o.isComposing = !1;
    }, o.onTouchStart = function(f) {
      var p = f.touches, h = p && p.item(0);
      h && (o.initialTouchX = h.clientX, o.initialTouchY = h.clientY, o.userIsDragging = !1);
    }, o.onTouchMove = function(f) {
      var p = f.touches, h = p && p.item(0);
      if (h) {
        var g = Math.abs(h.clientX - o.initialTouchX), v = Math.abs(h.clientY - o.initialTouchY), b = 5;
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
      var p = o.props.inputValue, h = f.currentTarget.value;
      o.setState({
        inputIsHiddenAfterUpdate: !1
      }), o.onInputChange(h, {
        action: "input-change",
        prevInputValue: p
      }), o.props.menuIsOpen || o.onMenuOpen();
    }, o.onInputFocus = function(f) {
      o.props.onFocus && o.props.onFocus(f), o.setState({
        inputIsHiddenAfterUpdate: !1,
        isFocused: !0
      }), (o.openAfterFocus || o.props.openMenuOnFocus) && o.openMenu("first"), o.openAfterFocus = !1;
    }, o.onInputBlur = function(f) {
      var p = o.props.inputValue;
      if (o.menuListRef && o.menuListRef.contains(document.activeElement)) {
        o.inputRef.focus();
        return;
      }
      o.props.onBlur && o.props.onBlur(f), o.onInputChange("", {
        action: "input-blur",
        prevInputValue: p
      }), o.onMenuClose(), o.setState({
        focusedValue: null,
        isFocused: !1
      });
    }, o.onOptionHover = function(f) {
      if (!(o.blockOptionHover || o.state.focusedOption === f)) {
        var p = o.getFocusableOptions(), h = p.indexOf(f);
        o.setState({
          focusedOption: f,
          focusedOptionId: h > -1 ? o.getFocusedOptionId(f) : null
        });
      }
    }, o.shouldHideSelectedOptions = function() {
      return um(o.props);
    }, o.onValueInputFocus = function(f) {
      f.preventDefault(), f.stopPropagation(), o.focus();
    }, o.onKeyDown = function(f) {
      var p = o.props, h = p.isMulti, g = p.backspaceRemovesValue, v = p.escapeClearsValue, b = p.inputValue, E = p.isClearable, w = p.isDisabled, F = p.menuIsOpen, R = p.onKeyDown, W = p.tabSelectsValue, k = p.openMenuOnFocus, N = o.state, J = N.focusedOption, G = N.focusedValue, j = N.selectValue;
      if (!w && !(typeof R == "function" && (R(f), f.defaultPrevented))) {
        switch (o.blockOptionHover = !0, f.key) {
          case "ArrowLeft":
            if (!h || b) return;
            o.focusValue("previous");
            break;
          case "ArrowRight":
            if (!h || b) return;
            o.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (b) return;
            if (G)
              o.removeValue(G);
            else {
              if (!g) return;
              h ? o.popValue() : E && o.clearValue();
            }
            break;
          case "Tab":
            if (o.isComposing || f.shiftKey || !F || !W || !J || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            k && o.isOptionSelected(J, j))
              return;
            o.selectOption(J);
            break;
          case "Enter":
            if (f.keyCode === 229)
              break;
            if (F) {
              if (!J || o.isComposing) return;
              o.selectOption(J);
              break;
            }
            return;
          case "Escape":
            F ? (o.setState({
              inputIsHiddenAfterUpdate: !1
            }), o.onInputChange("", {
              action: "menu-close",
              prevInputValue: b
            }), o.onMenuClose()) : E && v && o.clearValue();
            break;
          case " ":
            if (b)
              return;
            if (!F) {
              o.openMenu("first");
              break;
            }
            if (!J) return;
            o.selectOption(J);
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
    }, o.state.instancePrefix = "react-select-" + (o.props.instanceId || ++fP), o.state.selectValue = Da(u.value), u.menuIsOpen && o.state.selectValue.length) {
      var s = o.getFocusableOptionsWithIds(), l = o.buildFocusableOptions(), c = l.indexOf(o.state.selectValue[0]);
      o.state.focusableOptionsWithIds = s, o.state.focusedOption = l[c], o.state.focusedOptionId = Vl(s, l[c]);
    }
    return o;
  }
  return FE(r, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && eh(this.menuListRef, this.focusedOptionRef);
    }
  }, {
    key: "componentDidUpdate",
    value: function(o) {
      var s = this.props, l = s.isDisabled, c = s.menuIsOpen, f = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (f && !l && o.isDisabled || // ensure focus is on the Input when the menu opens
      f && c && !o.menuIsOpen) && this.focusInput(), f && l && !o.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !f && !l && o.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (eh(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
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
    value: function(o, s) {
      this.props.onInputChange(o, s);
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
      var s = this, l = this.state, c = l.selectValue, f = l.isFocused, p = this.buildFocusableOptions(), h = o === "first" ? 0 : p.length - 1;
      if (!this.props.isMulti) {
        var g = p.indexOf(c[0]);
        g > -1 && (h = g);
      }
      this.scrollToFocusedOptionOnUpdate = !(f && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: p[h],
        focusedOptionId: this.getFocusedOptionId(p[h])
      }, function() {
        return s.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(o) {
      var s = this.state, l = s.selectValue, c = s.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var f = l.indexOf(c);
        c || (f = -1);
        var p = l.length - 1, h = -1;
        if (l.length) {
          switch (o) {
            case "previous":
              f === 0 ? h = 0 : f === -1 ? h = p : h = f - 1;
              break;
            case "next":
              f > -1 && f < p && (h = f + 1);
              break;
          }
          this.setState({
            inputIsHidden: h !== -1,
            focusedValue: l[h]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", s = this.props.pageSize, l = this.state.focusedOption, c = this.getFocusableOptions();
      if (c.length) {
        var f = 0, p = c.indexOf(l);
        l || (p = -1), o === "up" ? f = p > 0 ? p - 1 : c.length - 1 : o === "down" ? f = (p + 1) % c.length : o === "pageup" ? (f = p - s, f < 0 && (f = 0)) : o === "pagedown" ? (f = p + s, f > c.length - 1 && (f = c.length - 1)) : o === "last" && (f = c.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
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
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(Yu) : de(de({}, Yu), this.props.theme) : Yu;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var o = this.clearValue, s = this.cx, l = this.getStyles, c = this.getClassNames, f = this.getValue, p = this.selectOption, h = this.setValue, g = this.props, v = g.isMulti, b = g.isRtl, E = g.options, w = this.hasValue();
      return {
        clearValue: o,
        cx: s,
        getStyles: l,
        getClassNames: c,
        getValue: f,
        hasValue: w,
        isMulti: v,
        isRtl: b,
        options: E,
        selectOption: p,
        selectProps: g,
        setValue: h,
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
      var o = this.props, s = o.isClearable, l = o.isMulti;
      return s === void 0 ? l : s;
    }
  }, {
    key: "isOptionDisabled",
    value: function(o, s) {
      return nm(this.props, o, s);
    }
  }, {
    key: "isOptionSelected",
    value: function(o, s) {
      return rm(this.props, o, s);
    }
  }, {
    key: "filterOption",
    value: function(o, s) {
      return im(this.props, o, s);
    }
  }, {
    key: "formatOptionLabel",
    value: function(o, s) {
      if (typeof this.props.formatOptionLabel == "function") {
        var l = this.props.inputValue, c = this.state.selectValue;
        return this.props.formatOptionLabel(o, {
          context: s,
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
        var o = this.props, s = o.isDisabled, l = o.isSearchable, c = o.inputId, f = o.inputValue, p = o.tabIndex, h = o.form, g = o.menuIsOpen, v = o.required, b = this.getComponents(), E = b.Input, w = this.state, F = w.inputIsHidden, R = w.ariaSelection, W = this.commonProps, k = c || this.getElementId("input"), N = de(de(de({
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
        }), this.hasValue() ? (R == null ? void 0 : R.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return l ? /* @__PURE__ */ Te.createElement(E, ve({}, W, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: k,
          innerRef: this.getInputRef,
          isDisabled: s,
          isHidden: F,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: p,
          form: h,
          type: "text",
          value: f
        }, N)) : /* @__PURE__ */ Te.createElement(LF, ve({
          id: k,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: La,
          onFocus: this.onInputFocus,
          disabled: s,
          tabIndex: p,
          inputMode: "none",
          form: h,
          value: ""
        }, N));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var o = this, s = this.getComponents(), l = s.MultiValue, c = s.MultiValueContainer, f = s.MultiValueLabel, p = s.MultiValueRemove, h = s.SingleValue, g = s.Placeholder, v = this.commonProps, b = this.props, E = b.controlShouldRenderValue, w = b.isDisabled, F = b.isMulti, R = b.inputValue, W = b.placeholder, k = this.state, N = k.selectValue, J = k.focusedValue, G = k.isFocused;
      if (!this.hasValue() || !E)
        return R ? null : /* @__PURE__ */ Te.createElement(g, ve({}, v, {
          key: "placeholder",
          isDisabled: w,
          isFocused: G,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), W);
      if (F)
        return N.map(function(M, Y) {
          var K = M === J, q = "".concat(o.getOptionLabel(M), "-").concat(o.getOptionValue(M));
          return /* @__PURE__ */ Te.createElement(l, ve({}, v, {
            components: {
              Container: c,
              Label: f,
              Remove: p
            },
            isFocused: K,
            isDisabled: w,
            key: q,
            index: Y,
            removeProps: {
              onClick: function() {
                return o.removeValue(M);
              },
              onTouchEnd: function() {
                return o.removeValue(M);
              },
              onMouseDown: function(pe) {
                pe.preventDefault();
              }
            },
            data: M
          }), o.formatOptionLabel(M, "value"));
        });
      if (R)
        return null;
      var j = N[0];
      return /* @__PURE__ */ Te.createElement(h, ve({}, v, {
        data: j,
        isDisabled: w
      }), this.formatOptionLabel(j, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var o = this.getComponents(), s = o.ClearIndicator, l = this.commonProps, c = this.props, f = c.isDisabled, p = c.isLoading, h = this.state.isFocused;
      if (!this.isClearable() || !s || f || !this.hasValue() || p)
        return null;
      var g = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ Te.createElement(s, ve({}, l, {
        innerProps: g,
        isFocused: h
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var o = this.getComponents(), s = o.LoadingIndicator, l = this.commonProps, c = this.props, f = c.isDisabled, p = c.isLoading, h = this.state.isFocused;
      if (!s || !p) return null;
      var g = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ Te.createElement(s, ve({}, l, {
        innerProps: g,
        isDisabled: f,
        isFocused: h
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var o = this.getComponents(), s = o.DropdownIndicator, l = o.IndicatorSeparator;
      if (!s || !l) return null;
      var c = this.commonProps, f = this.props.isDisabled, p = this.state.isFocused;
      return /* @__PURE__ */ Te.createElement(l, ve({}, c, {
        isDisabled: f,
        isFocused: p
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var o = this.getComponents(), s = o.DropdownIndicator;
      if (!s) return null;
      var l = this.commonProps, c = this.props.isDisabled, f = this.state.isFocused, p = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ Te.createElement(s, ve({}, l, {
        innerProps: p,
        isDisabled: c,
        isFocused: f
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var o = this, s = this.getComponents(), l = s.Group, c = s.GroupHeading, f = s.Menu, p = s.MenuList, h = s.MenuPortal, g = s.LoadingMessage, v = s.NoOptionsMessage, b = s.Option, E = this.commonProps, w = this.state.focusedOption, F = this.props, R = F.captureMenuScroll, W = F.inputValue, k = F.isLoading, N = F.loadingMessage, J = F.minMenuHeight, G = F.maxMenuHeight, j = F.menuIsOpen, M = F.menuPlacement, Y = F.menuPosition, K = F.menuPortalTarget, q = F.menuShouldBlockScroll, z = F.menuShouldScrollIntoView, pe = F.noOptionsMessage, we = F.onMenuScrollToTop, ie = F.onMenuScrollToBottom;
      if (!j) return null;
      var be = function(S, Je) {
        var fe = S.type, Ee = S.data, lt = S.isDisabled, Ne = S.isSelected, bt = S.label, Vt = S.value, kt = w === Ee, Lt = lt ? void 0 : function() {
          return o.onOptionHover(Ee);
        }, Sn = lt ? void 0 : function() {
          return o.selectOption(Ee);
        }, Ct = "".concat(o.getElementId("option"), "-").concat(Je), ee = {
          id: Ct,
          onClick: Sn,
          onMouseMove: Lt,
          onMouseOver: Lt,
          tabIndex: -1,
          role: "option",
          "aria-selected": o.isAppleDevice ? void 0 : Ne
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ Te.createElement(b, ve({}, E, {
          innerProps: ee,
          data: Ee,
          isDisabled: lt,
          isSelected: Ne,
          key: Ct,
          label: bt,
          type: fe,
          value: Vt,
          isFocused: kt,
          innerRef: kt ? o.getFocusedOptionRef : void 0
        }), o.formatOptionLabel(S.data, "menu"));
      }, xe;
      if (this.hasOptions())
        xe = this.getCategorizedOptions().map(function(Se) {
          if (Se.type === "group") {
            var S = Se.data, Je = Se.options, fe = Se.index, Ee = "".concat(o.getElementId("group"), "-").concat(fe), lt = "".concat(Ee, "-heading");
            return /* @__PURE__ */ Te.createElement(l, ve({}, E, {
              key: Ee,
              data: S,
              options: Je,
              Heading: c,
              headingProps: {
                id: lt,
                data: Se.data
              },
              label: o.formatGroupLabel(Se.data)
            }), Se.options.map(function(Ne) {
              return be(Ne, "".concat(fe, "-").concat(Ne.index));
            }));
          } else if (Se.type === "option")
            return be(Se, "".concat(Se.index));
        });
      else if (k) {
        var Pe = N({
          inputValue: W
        });
        if (Pe === null) return null;
        xe = /* @__PURE__ */ Te.createElement(g, E, Pe);
      } else {
        var te = pe({
          inputValue: W
        });
        if (te === null) return null;
        xe = /* @__PURE__ */ Te.createElement(v, E, te);
      }
      var x = {
        minMenuHeight: J,
        maxMenuHeight: G,
        menuPlacement: M,
        menuPosition: Y,
        menuShouldScrollIntoView: z
      }, he = /* @__PURE__ */ Te.createElement(p2, ve({}, E, x), function(Se) {
        var S = Se.ref, Je = Se.placerProps, fe = Je.placement, Ee = Je.maxHeight;
        return /* @__PURE__ */ Te.createElement(f, ve({}, E, x, {
          innerRef: S,
          innerProps: {
            onMouseDown: o.onMenuMouseDown,
            onMouseMove: o.onMenuMouseMove
          },
          isLoading: k,
          placement: fe
        }), /* @__PURE__ */ Te.createElement(HF, {
          captureEnabled: R,
          onTopArrive: we,
          onBottomArrive: ie,
          lockEnabled: q
        }, function(lt) {
          return /* @__PURE__ */ Te.createElement(p, ve({}, E, {
            innerRef: function(bt) {
              o.getMenuListRef(bt), lt(bt);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": E.isMulti,
              id: o.getElementId("listbox")
            },
            isLoading: k,
            maxHeight: Ee,
            focusedOption: w
          }), xe);
        }));
      });
      return K || Y === "fixed" ? /* @__PURE__ */ Te.createElement(h, ve({}, E, {
        appendTo: K,
        controlElement: this.controlRef,
        menuPlacement: M,
        menuPosition: Y
      }), he) : he;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var o = this, s = this.props, l = s.delimiter, c = s.isDisabled, f = s.isMulti, p = s.name, h = s.required, g = this.state.selectValue;
      if (h && !this.hasValue() && !c)
        return /* @__PURE__ */ Te.createElement(JF, {
          name: p,
          onFocus: this.onValueInputFocus
        });
      if (!(!p || c))
        if (f)
          if (l) {
            var v = g.map(function(w) {
              return o.getOptionValue(w);
            }).join(l);
            return /* @__PURE__ */ Te.createElement("input", {
              name: p,
              type: "hidden",
              value: v
            });
          } else {
            var b = g.length > 0 ? g.map(function(w, F) {
              return /* @__PURE__ */ Te.createElement("input", {
                key: "i-".concat(F),
                name: p,
                type: "hidden",
                value: o.getOptionValue(w)
              });
            }) : /* @__PURE__ */ Te.createElement("input", {
              name: p,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ Te.createElement("div", null, b);
          }
        else {
          var E = g[0] ? this.getOptionValue(g[0]) : "";
          return /* @__PURE__ */ Te.createElement("input", {
            name: p,
            type: "hidden",
            value: E
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var o = this.commonProps, s = this.state, l = s.ariaSelection, c = s.focusedOption, f = s.focusedValue, p = s.isFocused, h = s.selectValue, g = this.getFocusableOptions();
      return /* @__PURE__ */ Te.createElement(OF, ve({}, o, {
        id: this.getElementId("live-region"),
        ariaSelection: l,
        focusedOption: c,
        focusedValue: f,
        isFocused: p,
        selectValue: h,
        focusableOptions: g,
        isAppleDevice: this.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function() {
      var o = this.getComponents(), s = o.Control, l = o.IndicatorsContainer, c = o.SelectContainer, f = o.ValueContainer, p = this.props, h = p.className, g = p.id, v = p.isDisabled, b = p.menuIsOpen, E = this.state.isFocused, w = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ Te.createElement(c, ve({}, w, {
        className: h,
        innerProps: {
          id: g,
          onKeyDown: this.onKeyDown
        },
        isDisabled: v,
        isFocused: E
      }), this.renderLiveRegion(), /* @__PURE__ */ Te.createElement(s, ve({}, w, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: v,
        isFocused: E,
        menuIsOpen: b
      }), /* @__PURE__ */ Te.createElement(f, ve({}, w, {
        isDisabled: v
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ Te.createElement(l, ve({}, w, {
        isDisabled: v
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(o, s) {
      var l = s.prevProps, c = s.clearFocusValueOnUpdate, f = s.inputIsHiddenAfterUpdate, p = s.ariaSelection, h = s.isFocused, g = s.prevWasFocused, v = s.instancePrefix, b = o.options, E = o.value, w = o.menuIsOpen, F = o.inputValue, R = o.isMulti, W = Da(E), k = {};
      if (l && (E !== l.value || b !== l.options || w !== l.menuIsOpen || F !== l.inputValue)) {
        var N = w ? sP(o, W) : [], J = w ? hh(Sa(o, W), "".concat(v, "-option")) : [], G = c ? lP(s, W) : null, j = cP(s, N), M = Vl(J, j);
        k = {
          selectValue: W,
          focusedOption: j,
          focusedOptionId: M,
          focusableOptionsWithIds: J,
          focusedValue: G,
          clearFocusValueOnUpdate: !1
        };
      }
      var Y = f != null && o !== l ? {
        inputIsHidden: f,
        inputIsHiddenAfterUpdate: void 0
      } : {}, K = p, q = h && g;
      return h && !q && (K = {
        value: Wu(R, W, W[0] || null),
        options: W,
        action: "initial-input-focus"
      }, q = !g), (p == null ? void 0 : p.action) === "initial-input-focus" && (K = null), de(de(de({}, k), Y), {}, {
        prevProps: o,
        ariaSelection: K,
        prevWasFocused: q
      });
    }
  }]), r;
}(Fh);
Zc.defaultProps = aP;
var dP = /* @__PURE__ */ Ph(function(e, t) {
  var r = Rg(e);
  return /* @__PURE__ */ Te.createElement(Zc, ve({
    ref: t
  }, r));
}), Ja = dP;
const om = eo(void 0), cu = () => {
  const e = au(om);
  if (!e)
    throw new Error("Must be used inside FormFieldContext.Provider");
  return e;
}, pP = (e, t) => {
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
}, hP = (e) => /* @__PURE__ */ re(uo.Option, { ...e, children: e.data.name });
function gP({ app: e }) {
  const t = Yr(), r = cu(), { id: u, prop: o, value: s, onChange: l } = r, { getProps: c, select: f, theme: p } = dn(), h = {
    color: p.colors.neutral60,
    gridArea: "control"
  }, g = {
    backgroundColor: p.colors.primary,
    borderRadius: p.borderRadius,
    border: "solid 1px",
    borderColor: p.colors.primary25,
    color: p.colors.primary25,
    padding: "0.25rem 0.5rem",
    gridArea: "control"
  }, v = {
    components: {
      Option: hP
    },
    styles: {
      control: (N) => ({
        ...N,
        gridArea: "control",
        boxShadow: p.boxShadow.input
      })
    }
  }, b = f.getProps("controlAppSelect", v), E = void 0, {
    isLoading: w,
    // TODO error
    accounts: F,
    refetch: R
  } = pP(
    {
      app: e.name_slug,
      oauth_app_id: E
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
      oauthAppId: E,
      onSuccess: async (N) => {
        await R(), l({
          authProvisionId: N.id
        });
      },
      onError: () => {
      }
    });
  }, k = ln(() => {
    let N = s;
    if (N != null) {
      for (const J of F)
        if (N.authProvisionId === J.id) {
          N = J;
          break;
        }
    }
    return N;
  }, [F, s]);
  return /* @__PURE__ */ re(
    "div",
    {
      ...c("controlApp", h, {
        app: e,
        ...r
      }),
      children: w ? `Loading ${e.name} accounts...` : F.length ? /* @__PURE__ */ re(
        Ja,
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
          isLoading: w,
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
      ) : /* @__PURE__ */ An(
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
const mP = () => {
  const e = cu(), { id: t, onChange: r, prop: u, value: o } = e, { getProps: s, theme: l } = dn(), c = {
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
  let f = "off", p = "text", h = (g) => g;
  switch (u.type) {
    case "string":
      break;
    case "integer":
      p = "number", h = (g) => g ? parseInt(g) : void 0;
      break;
    default:
      throw new Error("unexpected prop.type for ControlInput: " + u.type);
  }
  return "secret" in u && u.secret && (p = "password", f = "new-password"), /* @__PURE__ */ re(
    "input",
    {
      id: t,
      type: p,
      name: u.name,
      value: o ?? "",
      onChange: (g) => r(h(g.target.value)),
      ...s("controlInput", c, e),
      min: "min" in u ? u.min : void 0,
      max: "max" in u ? u.max : void 0,
      autoComplete: f,
      "data-lpignore": "true",
      "data-1p-ignore": "true",
      required: !u.optional
    }
  );
}, bP = to(mP);
var yP = ["allowCreateWhileLoading", "createOptionPosition", "formatCreateLabel", "isValidNewOption", "getNewOptionData", "onCreateOption", "options", "onChange"], mh = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 ? arguments[1] : void 0, u = arguments.length > 2 ? arguments[2] : void 0, o = String(t).toLowerCase(), s = String(u.getOptionValue(r)).toLowerCase(), l = String(u.getOptionLabel(r)).toLowerCase();
  return s === o || l === o;
}, Wl = {
  formatCreateLabel: function(t) {
    return 'Create "'.concat(t, '"');
  },
  isValidNewOption: function(t, r, u, o) {
    return !(!t || r.some(function(s) {
      return mh(t, s, o);
    }) || u.some(function(s) {
      return mh(t, s, o);
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
function vP(e) {
  var t = e.allowCreateWhileLoading, r = t === void 0 ? !1 : t, u = e.createOptionPosition, o = u === void 0 ? "last" : u, s = e.formatCreateLabel, l = s === void 0 ? Wl.formatCreateLabel : s, c = e.isValidNewOption, f = c === void 0 ? Wl.isValidNewOption : c, p = e.getNewOptionData, h = p === void 0 ? Wl.getNewOptionData : p, g = e.onCreateOption, v = e.options, b = v === void 0 ? [] : v, E = e.onChange, w = or(e, yP), F = w.getOptionValue, R = F === void 0 ? $g : F, W = w.getOptionLabel, k = W === void 0 ? qg : W, N = w.inputValue, J = w.isLoading, G = w.isMulti, j = w.value, M = w.name, Y = ln(function() {
    return f(N, Da(j), b, {
      getOptionValue: R,
      getOptionLabel: k
    }) ? h(N, l(N)) : void 0;
  }, [l, h, k, R, N, f, b, j]), K = ln(function() {
    return (r || !J) && Y ? o === "first" ? [Y].concat(Ji(b)) : [].concat(Ji(b), [Y]) : b;
  }, [r, o, J, Y, b]), q = Mt(function(z, pe) {
    if (pe.action !== "select-option")
      return E(z, pe);
    var we = Array.isArray(z) ? z : [z];
    if (we[we.length - 1] === Y) {
      if (g) g(N);
      else {
        var ie = h(N, N), be = {
          action: "create-option",
          name: M,
          option: ie
        };
        E(Wu(G, [].concat(Ji(Da(j)), [ie]), ie), be);
      }
      return;
    }
    E(z, pe);
  }, [h, N, G, M, Y, g, E, j]);
  return de(de({}, w), {}, {
    options: K,
    onChange: q
  });
}
var IP = /* @__PURE__ */ Ph(function(e, t) {
  var r = Rg(e), u = vP(r);
  return /* @__PURE__ */ Te.createElement(Zc, ve({
    ref: t
  }, u));
}), CP = IP;
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
function xP({
  isCreatable: e,
  options: t,
  selectProps: r,
  showLoadMoreButton: u,
  onLoadMore: o
}) {
  const s = cu(), { id: l, prop: c, value: f, onChange: p } = s, { select: h, theme: g } = dn(), [v, b] = $e(t), [E, w] = $e(f);
  sn(() => {
    b(t);
  }, [t]), sn(() => {
    w(f);
  }, [f]);
  const F = {
    styles: {
      container: (M) => ({
        ...M,
        gridArea: "control",
        boxShadow: g.boxShadow.input
      })
    }
  }, R = ln(() => {
    let M = E;
    if (M != null)
      if (Array.isArray(M)) {
        if (typeof M[0] != "object") {
          const Y = [];
          for (const K of M) {
            let q = {
              label: K,
              value: K
            };
            for (const z of v)
              if (z.value === K) {
                q = z;
                break;
              }
            Y.push(q);
          }
          M = Y;
        }
      } else if (typeof M != "object")
        if ((v == null ? void 0 : v[0]) && typeof v[0] == "object") {
          for (const K of v)
            if (K.value === E) {
              M = K;
              break;
            }
        } else
          M = {
            label: E,
            value: E
          };
      else M.__lv && (M = M.__lv);
    return M;
  }, [E, v]), W = ln(() => function(Y) {
    return /* @__PURE__ */ An(uo.MenuList, { ...Y, children: [
      Y.children,
      /* @__PURE__ */ re("div", { className: "pt-4", children: o && /* @__PURE__ */ re(am, { onChange: o }) })
    ] });
  }, [o]), k = h.getProps("controlSelect", F);
  u && (k.components = {
    ...k.components,
    MenuList: W
  });
  const N = (M) => {
    const Y = (z) => typeof z == "object" ? z : {
      label: z,
      value: z
    }, K = Y(M);
    let q = K;
    b((z) => K ? [K, ...z] : [...z]), c.type.endsWith("[]") && (Array.isArray(E) ? q = [...E.map(Y), K] : q = [K]), w(q), J(q);
  }, J = (M) => {
    if (M)
      if (Array.isArray(M))
        typeof M[0] == "object" && "value" in M[0] ? p({
          __lv: M
        }) : p(M);
      else if (typeof M == "object" && "value" in M)
        p({
          __lv: M
        });
      else
        throw new Error("unhandled option type");
    else
      p(void 0);
  }, G = {
    onCreateOption: c.remoteOptions ? N : void 0
  };
  return /* @__PURE__ */ re(
    e ? CP : Ja,
    {
      inputId: l,
      instanceId: l,
      options: v,
      value: R,
      isMulti: c.type.endsWith("[]"),
      isClearable: !0,
      required: !c.optional,
      ...k,
      ...r,
      ...G,
      onChange: J
    }
  );
}
const AP = to(
  xP
);
function wP(e) {
  const { field: t, markdown: r } = e, { prop: u } = t, { getClassNames: o, getStyles: s, theme: l } = dn(), c = {
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
      style: s("description", c, e),
      children: "Credentials are encrypted."
    }
  ) : u.description ? /* @__PURE__ */ An(
    "div",
    {
      className: o("description", e),
      style: s("description", c, e),
      children: [
        " ",
        /* @__PURE__ */ re(
          pg,
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
function SP(e) {
  const { field: t } = e, { errors: r = {}, prop: u = {}, enableDebugging: o } = t;
  if (!o || !r[u.name])
    return null;
  const s = r[u.name].map(
    (f) => ({
      type: "alert",
      alertType: "error",
      content: f
    })
  );
  return /* @__PURE__ */ re("div", { className: "pd-errors", style: {
    display: "grid",
    gridTemplateColumns: "max-content"
  }, children: /* @__PURE__ */ re(() => /* @__PURE__ */ re(Eh, { children: s.map((f, p) => /* @__PURE__ */ re(Kl, { prop: f }, p)) }), {}) });
}
function EP(e) {
  const { text: t, field: r } = e, { id: u } = r, { getProps: o, theme: s } = dn(), l = {
    color: s.colors.neutral90,
    fontWeight: 450,
    gridArea: "label",
    lineHeight: "1.5"
  };
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    /* @__PURE__ */ re("label", { htmlFor: u, ...o("label", l, e), children: t })
  );
}
const FP = (e) => {
  const { prop: t, enabled: r, onClick: u } = e, { getProps: o, theme: s } = dn(), l = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: `${s.spacing.baseUnit}px ${s.spacing.baseUnit * 1.5}px ${s.spacing.baseUnit}px ${s.spacing.baseUnit * 2.5}px`,
    borderRadius: s.borderRadius,
    cursor: "pointer",
    fontSize: "0.8125rem",
    fontWeight: 450,
    gap: s.spacing.baseUnit * 2,
    textWrap: "nowrap",
    transition: "background-color 0.2s, color 0.2s, border-color 0.2s"
  };
  return /* @__PURE__ */ An(
    "button",
    {
      onClick: u,
      type: "button",
      ...o("optionalFieldButton", l, e),
      className: `rounded-md border border-gray-100 ${r ? "bg-gray-100" : "bg-white"}`,
      children: [
        /* @__PURE__ */ re("span", { children: r ? "-" : "+" }),
        /* @__PURE__ */ re(
          "span",
          {
            style: {
              marginRight: 8,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "180px"
            },
            children: t.label || t.name
          }
        )
      ]
    }
  );
}, PP = Yu, Yc = {
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
}, RP = {
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
function OP(e) {
  if (!e) return Yu;
  const t = typeof e == "function" ? e(Yc) : e, { colors: r, spacing: u, borderRadius: o } = vc(
    PP,
    t
  );
  return {
    borderRadius: o,
    colors: r,
    spacing: u
  };
}
function vc(e, ...t) {
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
const _P = {
  ControlInput: bP,
  ControlSelect: AP,
  ControlApp: gP,
  Description: wP,
  Errors: SP,
  Label: EP,
  OptionalFieldButton: FP,
  Button: am
}, Jc = eo({
  // eslint-disable-line @typescript-eslint/no-explicit-any
  classNames: {},
  classNamePrefix: "",
  components: {},
  styles: {},
  theme: Yc,
  unstyled: !1
});
function TP() {
  const e = au(Jc) ?? {}, t = OP(e.theme ?? {});
  function r() {
    return e.classNamePrefix ?? "";
  }
  function u(c) {
    var h;
    const f = `${(e == null ? void 0 : e.classNamePrefix) ?? "pd-"}${c}`, p = {
      ...((h = e.classNames) == null ? void 0 : h[c]) ?? {}
    };
    return typeof (p == null ? void 0 : p.container) == "function" && (p.container = typeof (p == null ? void 0 : p.container) == "function" ? (...g) => {
      var v;
      return [(v = p == null ? void 0 : p.container) == null ? void 0 : v.call(p, ...g), f].join(" ");
    } : () => f), p;
  }
  function o(c, f) {
    var p;
    return {
      ...uo,
      ...f ?? {},
      ...((p = e == null ? void 0 : e.components) == null ? void 0 : p[c]) ?? {}
    };
  }
  function s(c, f) {
    var p;
    return tP(
      ((p = e.styles) == null ? void 0 : p[c]) ?? {},
      f ?? {}
    );
  }
  function l(c, f) {
    return {
      classNamePrefix: r(),
      classNames: u(c),
      components: o(c, f == null ? void 0 : f.components),
      styles: s(c, f == null ? void 0 : f.styles),
      theme: t
    };
  }
  return {
    getClassNamePrefix: r,
    getClassNames: u,
    getComponents: o,
    getProps: l,
    getStyles: s,
    theme: t
  };
}
function dn() {
  const e = au(Jc) ?? {}, t = e.theme, r = e.unstyled ? RP : Yc, u = typeof t == "function" ? vc(r, t(r)) : vc(r, t);
  function o(f, p) {
    var v;
    const h = `${(e == null ? void 0 : e.classNamePrefix) ?? "pd-"}${f.toLowerCase()}`, g = (v = e.classNames) == null ? void 0 : v[f];
    if (typeof g == "function") {
      const b = g, E = {
        ...p ?? {},
        theme: u
      };
      return [h, b(E)].filter(Boolean).join(" ");
    }
    return [h, g].filter(Boolean).join(" ");
  }
  function s() {
    return {
      ..._P,
      ...(e == null ? void 0 : e.components) ?? {}
    };
  }
  function l(f, p, h) {
    var v;
    const g = (v = e.styles) == null ? void 0 : v[f];
    if (typeof g == "function") {
      const b = g, E = {
        ...h ?? {},
        theme: u
      };
      return b(p, E);
    }
    return g ? {
      ...p,
      ...g
    } : p;
  }
  function c(f, p, h) {
    return {
      className: o(f, h),
      style: l(f, p, h)
    };
  }
  return {
    getClassNames: o,
    getComponents: s,
    getProps: c,
    getStyles: l,
    select: TP(),
    theme: u
  };
}
const nR = ({
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
  return /* @__PURE__ */ re(Jc.Provider, { value: r, children: e });
};
function BP(e) {
  const { form: t } = e, { propsNeedConfiguring: r, submitting: u } = t, { getProps: o, theme: s } = dn();
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
            backgroundColor: c ? s.colors.neutral10 : s.colors.primary,
            color: c ? s.colors.neutral40 : s.colors.neutral0,
            padding: `${s.spacing.baseUnit * 1.75}px ${s.spacing.baseUnit * 16}px`,
            borderRadius: s.borderRadius,
            boxShadow: (f = s.boxShadow) == null ? void 0 : f.button,
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
class GP extends Fh {
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
const kP = (e, t) => {
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
function LP() {
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
function DP({
  queryEnabled: e
}) {
  const t = Yr(), { getComponents: r } = dn(), { ControlSelect: u } = r(), {
    userId: o,
    component: s,
    configurableProps: l,
    configuredProps: c,
    dynamicProps: f,
    props: { disableQueryDisabling: p }
  } = Nc(), { idx: h, prop: g } = cu(), [v, b] = $e(""), [E, w] = $e(0), [F, R] = $e(!0), [W, k] = $e(void 0), [N, J] = $e({
    page: 0,
    prevContext: {},
    data: [],
    values: /* @__PURE__ */ new Set()
  }), G = {};
  for (let xe = 0; xe < h; xe++) {
    const Pe = l[xe];
    G[Pe.name] = c[Pe.name];
  }
  const j = {
    userId: o,
    page: E,
    prevContext: W,
    componentId: s.key,
    propName: g.name,
    configuredProps: G,
    dynamicPropsId: f == null ? void 0 : f.id
  };
  g.useQuery && (j.query = v || "");
  const M = {
    ...j
  };
  delete M.dynamicPropsId;
  const [Y, K] = $e(), q = () => {
    w(N.page), k(N.prevContext), J({
      ...N,
      prevContext: {}
    });
  }, { isFetching: z, refetch: pe } = Ii({
    queryKey: ["componentConfigure", M],
    queryFn: async () => {
      K(void 0);
      const xe = await t.componentConfigure(j), { options: Pe, stringOptions: te, errors: x } = xe;
      if (x != null && x.length) {
        try {
          K(JSON.parse(x[0]));
        } catch {
          K({
            name: "Error",
            message: x[0]
          });
        }
        return [];
      }
      let he = [];
      if (Pe != null && Pe.length && (he = Pe), te != null && te.length) {
        const Ee = [];
        for (const lt of te)
          Ee.push({
            label: lt,
            value: lt
          });
        he = Ee;
      }
      const Se = [], S = new Set(N.values);
      let Je = !1;
      for (const Ee of he || []) {
        const lt = typeof Ee == "string" ? Ee : Ee.value;
        if (S.has(lt)) {
          Je = !0;
          continue;
        }
        S.add(lt), Se.push(Ee);
      }
      let fe = N.data;
      return Se.length && (fe = [...N.data, ...Se], J({
        page: E + 1,
        prevContext: xe.context,
        data: fe,
        values: S
      })), (Je || Se.length === 0) && R(!1), fe;
    },
    enabled: !!e
  }), we = () => !z && !Y && F, ie = Y ? Y.message : p ? "Click to configure" : e ? void 0 : "Configure props above first", be = p ? !1 : !e;
  return /* @__PURE__ */ re(
    u,
    {
      isCreatable: !0,
      showLoadMoreButton: we(),
      onLoadMore: q,
      options: N.data,
      selectProps: {
        isLoading: z,
        placeholder: ie,
        isDisabled: be,
        inputValue: g.useQuery ? v : void 0,
        onInputChange(xe) {
          g.useQuery && (b(xe), pe());
        },
        onMenuOpen() {
          p && !e && pe();
        }
      }
    }
  );
}
function MP(e) {
  const { field: t, form: r } = e, { queryDisabledIdx: u } = r, { prop: o, idx: s } = t, l = "app" in t.extra ? t.extra.app : void 0, { getComponents: c } = dn(), {
    ControlInput: f,
    ControlSelect: p,
    ControlApp: h
  } = c();
  if (o.remoteOptions || o.type === "$.discord.channel")
    return /* @__PURE__ */ re(
      DP,
      {
        queryEnabled: u == null || u >= s
      }
    );
  if ("options" in o && o.options) {
    let g = o.options;
    return typeof g[0] != "object" && (g = g.map((v) => ({
      label: v,
      value: v
    }))), /* @__PURE__ */ re(
      p,
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
    return /* @__PURE__ */ re(p, { isCreatable: !0, options: [] });
  switch (o.type) {
    case "app":
      return /* @__PURE__ */ re(h, { app: l });
    case "boolean":
      return /* @__PURE__ */ re(LP, {});
    case "string":
    case "integer":
      return /* @__PURE__ */ re(f, {});
    default:
      throw new Error("Unsupported property type: " + o.type);
  }
}
function NP(e) {
  const { form: t, field: r } = e, { prop: u } = r, { getProps: o, getComponents: s } = dn(), l = {
    display: "grid",
    gridTemplateAreas: r.prop.type == "boolean" ? '"control label" "description description" "error error"' : '"label label" "control control" "description description" "error error"',
    gridTemplateColumns: "min-content auto",
    gap: "0.25rem 0",
    alignItems: "center",
    fontSize: "0.875rem"
  }, { Label: c, Description: f, Errors: p } = s(), h = "app" in r.extra ? r.extra.app : void 0;
  if (h && !h.auth_type)
    return null;
  let g = u.label;
  return h && (g = `Connect ${h.name} account`), /* @__PURE__ */ An("div", { ...o("field", l, e), children: [
    /* @__PURE__ */ re(c, { text: g, field: r, form: t }),
    /* @__PURE__ */ re(MP, { field: r, form: t }),
    /* @__PURE__ */ re(f, { markdown: u.description, field: r, form: t }),
    /* @__PURE__ */ re(p, { field: r, form: t })
  ] });
}
const VP = to(NP);
function WP({
  prop: e,
  idx: t
}) {
  const r = Nc(), {
    id: u,
    configuredProps: o,
    registerField: s,
    setConfiguredProp: l,
    errors: c,
    enableDebugging: f
  } = r, p = e.type === "app" && "app" in e ? e.app : void 0, {
    // TODO error
    app: h
  } = kP(p || "", {
    useQueryOpts: {
      enabled: !!p
      // Remove the suspense option if causing TypeScript errors
      // suspense: !!appSlug,
    }
  }), g = `pd${u}${e.name}`, v = Mt(
    (E) => {
      l(t, E);
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
        app: h
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
      h,
      c,
      f
    ]
  );
  return sn(() => s(b), [b, s]), /* @__PURE__ */ re(om.Provider, { value: b, children: /* @__PURE__ */ re(VP, { field: b, form: r }) });
}
const XP = to(
  WP
), HP = ["ConfigurationError"];
function zP({
  renderLoading: e,
  renderError: t
} = {}) {
  const r = Nc(), {
    configurableProps: u,
    dynamicPropsQueryIsFetching: o,
    isValid: s,
    optionalPropIsEnabled: l,
    optionalPropSetEnabled: c,
    props: f,
    setSubmitting: p,
    sdkErrors: h,
    submitting: g,
    enableDebugging: v,
    configuredProps: b,
    setConfiguredProp: E
  } = r, w = v || h.filter((te) => HP.indexOf(te.name) >= 0).length > 0, {
    hideOptionalProps: F,
    onSubmit: R,
    hiddenOptionalProperties: W = [],
    defaultOptionalProperties: k = []
  } = f, [N, J] = $e([]), [G, j] = $e(!1);
  sn(() => {
    g ? J([]) : h && h.length && J(
      h.map((te) => ({
        type: "alert",
        alertType: "error",
        content: `# ${te.name}
${te.message}`
      }))
    );
  }, [h, g]), sn(() => {
    k && k.length > 0 && u.forEach((te) => {
      if (te.optional && k.indexOf(te.name) >= 0) {
        l(te) || c(te, !0);
        const x = te.name;
        if (b[x] === "_default") {
          const Se = u.findIndex(
            (S) => S.name === te.name
          );
          Se !== -1 && E(Se, null);
        }
      }
    });
  }, [
    u,
    k,
    l,
    c,
    b,
    E
  ]);
  const { getComponents: M, getProps: Y, theme: K } = dn(), { OptionalFieldButton: q } = M(), z = {
    display: "flex",
    flexDirection: "column"
  }, pe = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.375rem"
  };
  K.colors.neutral60;
  const we = async (te) => {
    if (R && (te.preventDefault(), s)) {
      p(!0);
      try {
        await R(r);
      } finally {
        p(!1);
      }
    }
  }, ie = [], be = [];
  for (let te = 0; te < u.length; te++) {
    const x = u[te];
    x.hidden || Zu.indexOf(x.type) >= 0 || x.optional || ie.push([x, te]);
  }
  for (let te = 0; te < u.length; te++) {
    const x = u[te];
    if (!x.hidden && !(Zu.indexOf(x.type) >= 0) && x.optional) {
      const he = l(x);
      W.some((Se) => Se === x.name) || be.push([x, he]), !F && he && ie.push([x, te]);
    }
  }
  const xe = (te) => /* @__PURE__ */ An(
    "p",
    {
      style: {
        color: "red"
      },
      children: [
        "Error:",
        " ",
        te && typeof te == "object" && "message" in te && typeof te.message == "string" ? te.message : "Unknown"
      ]
    }
  ), Pe = () => {
    j(!G);
  };
  return /* @__PURE__ */ re(
    GP,
    {
      fallback: (te) => t ? t(te) : xe(te),
      children: /* @__PURE__ */ re(
        VI,
        {
          fallback: e ? e() : /* @__PURE__ */ re("p", { children: "Loading form..." }),
          children: /* @__PURE__ */ An(
            "form",
            {
              ...Y("componentForm", z, f),
              onSubmit: we,
              className: "gap-2",
              children: [
                ie.map(([te, x]) => te.type === "alert" ? /* @__PURE__ */ re(Kl, { prop: te }, te.name) : /* @__PURE__ */ re(XP, { prop: te, idx: x }, te.name)),
                o && (e ? e() : /* @__PURE__ */ re("p", { children: "Loading dynamic props..." })),
                !F && be.length ? /* @__PURE__ */ An("div", { children: [
                  /* @__PURE__ */ An(
                    "div",
                    {
                      onClick: Pe,
                      className: "flex cursor-pointer flex-row items-center gap-1 mb-2",
                      "aria-controls": "optional-props-content",
                      "aria-expanded": G ? "true" : "false",
                      "data-state": G ? "open" : "closed",
                      children: [
                        G ? /* @__PURE__ */ re(
                          "svg",
                          {
                            "aria-hidden": "true",
                            focusable: "false",
                            "data-prefix": "fas",
                            "data-icon": "caret-down",
                            className: "svg-inline--fa fa-caret-down fa-xs",
                            role: "img",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 320 512",
                            children: /* @__PURE__ */ re(
                              "path",
                              {
                                fill: "currentColor",
                                d: "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                              }
                            )
                          }
                        ) : /* @__PURE__ */ re(
                          "svg",
                          {
                            "aria-hidden": "true",
                            focusable: "false",
                            "data-prefix": "fas",
                            "data-icon": "caret-right",
                            className: "svg-inline--fa fa-caret-right fa-xs",
                            role: "img",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 256 512",
                            children: /* @__PURE__ */ re(
                              "path",
                              {
                                fill: "currentColor",
                                d: "M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ re("span", { className: "text-xs font-medium", children: "Optional Properties" })
                      ]
                    }
                  ),
                  G && /* @__PURE__ */ re(
                    "div",
                    {
                      id: "optional-props-content",
                      ...Y(
                        "optionalFields",
                        pe,
                        f
                      ),
                      children: be.filter(([te]) => !W.some(
                        (he) => he === te.name
                      )).map(([te, x]) => /* @__PURE__ */ re(
                        q,
                        {
                          prop: te,
                          enabled: x,
                          onClick: () => c(te, !x)
                        },
                        te.name
                      ))
                    }
                  )
                ] }) : null,
                w && (N == null ? void 0 : N.map((te, x) => /* @__PURE__ */ re(Kl, { prop: te }, x))),
                R && /* @__PURE__ */ re(BP, { form: r })
              ]
            }
          )
        }
      )
    }
  );
}
const ZP = to(zP);
function YP(e) {
  const { renderLoading: t, renderError: r, ...u } = e;
  return /* @__PURE__ */ re(vE, { props: u, children: /* @__PURE__ */ re(
    ZP,
    {
      renderLoading: t,
      renderError: r
    }
  ) });
}
const JP = ({ key: e }, t) => {
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
function rR(e) {
  const { isLoading: t, error: r, component: u } = JP({
    key: e.componentKey
  });
  if (!e.componentKey)
    throw new Error("componentKey required");
  if (t)
    return e.renderLoading ? e.renderLoading() : /* @__PURE__ */ re("p", { children: "Loading..." });
  if (r)
    return e.renderError ? e.renderError(r) : /* @__PURE__ */ An("p", { children: [
      "Error: ",
      r.message
    ] });
  if (!u)
    return e.renderNotFound ? e.renderNotFound() : /* @__PURE__ */ re("p", { children: "Component not found" });
  const { renderLoading: o, renderError: s, renderNotFound: l, ...c } = e;
  return /* @__PURE__ */ re(
    YP,
    {
      component: u,
      renderLoading: o,
      renderError: s,
      ...c
    }
  );
}
function iR() {
  const e = cu(), { id: t, onChange: r, value: u } = e, { getProps: o, theme: s } = dn(), l = {
    display: "block",
    gridArea: "control",
    width: "100%",
    fontSize: "0.875rem",
    boxShadow: s.boxShadow.input
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
const UP = (e) => {
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
function uR({ value: e, onChange: t }) {
  const [r, u] = $e(""), o = Ic(), {
    isLoading: s,
    // TODO error
    apps: l
  } = UP({
    q: r
  }), { Option: c, SingleValue: f } = uo, p = (l == null ? void 0 : l.find((h) => h.name_slug === (e == null ? void 0 : e.name_slug))) || null;
  return /* @__PURE__ */ re(
    Ja,
    {
      instanceId: o,
      className: "react-select-container text-sm",
      classNamePrefix: "react-select",
      components: {
        Option: (h) => /* @__PURE__ */ re(c, { ...h, children: /* @__PURE__ */ An(
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
                  src: `https://pipedream.com/s.v0/${h.data.id}/logo/48`,
                  style: {
                    height: 24,
                    width: 24
                  },
                  alt: h.data.name
                }
              ),
              /* @__PURE__ */ re(
                "span",
                {
                  style: {
                    whiteSpace: "nowrap"
                  },
                  children: h.data.name
                }
              )
            ]
          }
        ) }),
        SingleValue: (h) => /* @__PURE__ */ re(f, { ...h, children: /* @__PURE__ */ An(
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
                  src: `https://pipedream.com/s.v0/${h.data.id}/logo/48`,
                  style: {
                    height: 24,
                    width: 24
                  },
                  alt: h.data.name
                }
              ),
              /* @__PURE__ */ re(
                "span",
                {
                  style: {
                    whiteSpace: "nowrap"
                  },
                  children: h.data.name
                }
              )
            ]
          }
        ) }),
        IndicatorSeparator: () => null
      },
      options: l || [],
      getOptionLabel: (h) => h.name || h.name_slug,
      getOptionValue: (h) => h.name_slug,
      value: p,
      onChange: (h) => t == null ? void 0 : t(h || void 0),
      onInputChange: (h) => {
        h && u(h);
      },
      isLoading: s
    }
  );
}
const jP = (e) => {
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
function oR({
  app: e,
  componentType: t,
  value: r,
  onChange: u
}) {
  const o = Ic(), { isLoading: s, components: l } = jP({
    app: e == null ? void 0 : e.name_slug,
    componentType: t
  }), c = (l == null ? void 0 : l.find((f) => f.key === (r == null ? void 0 : r.key))) || null;
  return /* @__PURE__ */ re(
    Ja,
    {
      instanceId: o,
      className: "react-select-container text-sm",
      classNamePrefix: "react-select",
      options: l,
      getOptionLabel: (f) => f.name || f.key,
      getOptionValue: (f) => f.key,
      value: c,
      onChange: (f) => u == null ? void 0 : u(f || void 0),
      isLoading: s,
      components: {
        IndicatorSeparator: () => null
      }
    }
  );
}
export {
  Kl as Alert,
  YP as ComponentForm,
  rR as ComponentFormContainer,
  MP as Control,
  iR as ControlAny,
  gP as ControlApp,
  LP as ControlBoolean,
  bP as ControlInput,
  AP as ControlSelect,
  BP as ControlSubmit,
  Jc as CustomizationContext,
  nR as CustomizeProvider,
  wP as Description,
  GP as ErrorBoundary,
  SP as Errors,
  VP as Field,
  Eg as FormContext,
  vE as FormContextProvider,
  om as FormFieldContext,
  tR as FrontendClientProvider,
  ZP as InternalComponentForm,
  XP as InternalField,
  EP as Label,
  FP as OptionalFieldButton,
  DP as RemoteOptionsContainer,
  uR as SelectApp,
  oR as SelectComponent,
  _P as defaultComponents,
  Yc as defaultTheme,
  OP as getReactSelectTheme,
  vc as mergeTheme,
  Zu as skippablePropTypes,
  RP as unstyledTheme,
  pP as useAccounts,
  kP as useApp,
  UP as useApps,
  JP as useComponent,
  jP as useComponents,
  dn as useCustomize,
  Nc as useFormContext,
  cu as useFormFieldContext,
  Yr as useFrontendClient
};
