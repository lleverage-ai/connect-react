var Jd = (e) => {
  throw TypeError(e);
};
var xl = (e, t, r) => t.has(e) || Jd("Cannot " + r);
var O = (e, t, r) => (xl(e, t, "read from private field"), r ? r.call(e) : t.get(e)), Ce = (e, t, r) => t.has(e) ? Jd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), ae = (e, t, r, u) => (xl(e, t, "write to private field"), u ? u.call(e, r) : t.set(e, r), r), ze = (e, t, r) => (xl(e, t, "access private method"), r);
var hs = (e, t, r, u) => ({
  set _(o) {
    ae(e, t, o, r);
  },
  get _() {
    return O(e, t, u);
  }
});
import { jsxs as Dn, jsx as se, Fragment as Sp } from "react/jsx-runtime";
import * as _e from "react";
import { createContext as Ku, useContext as su, useState as nt, useId as vc, useEffect as In, useCallback as Ht, useLayoutEffect as M1, useRef as xr, useMemo as rr, Component as Ep, Fragment as Wl, forwardRef as Fp, Suspense as N1 } from "react";
import { jsx as ge, css as Rp, keyframes as V1 } from "@emotion/react";
import { createPortal as W1 } from "react-dom";
function X1(e, t) {
  const r = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (r.padRight ? " " : "") + "," + (r.padLeft === !1 ? "" : " ")
  ).trim();
}
const H1 = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, z1 = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Z1 = {};
function Ud(e, t) {
  return (Z1.jsx ? z1 : H1).test(e);
}
const Y1 = /[ \t\n\f\r]/g;
function J1(e) {
  return typeof e == "object" ? e.type === "text" ? jd(e.value) : !1 : jd(e);
}
function jd(e) {
  return e.replace(Y1, "") === "";
}
class eo {
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
eo.prototype.normal = {};
eo.prototype.property = {};
eo.prototype.space = void 0;
function Pp(e, t) {
  const r = {}, u = {};
  for (const o of e)
    Object.assign(r, o.property), Object.assign(u, o.normal);
  return new eo(r, u, t);
}
function Xl(e) {
  return e.toLowerCase();
}
class ln {
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
ln.prototype.attribute = "";
ln.prototype.booleanish = !1;
ln.prototype.boolean = !1;
ln.prototype.commaOrSpaceSeparated = !1;
ln.prototype.commaSeparated = !1;
ln.prototype.defined = !1;
ln.prototype.mustUseProperty = !1;
ln.prototype.number = !1;
ln.prototype.overloadedBoolean = !1;
ln.prototype.property = "";
ln.prototype.spaceSeparated = !1;
ln.prototype.space = void 0;
let U1 = 0;
const Ge = vi(), Ft = vi(), Op = vi(), q = vi(), ct = vi(), zi = vi(), vn = vi();
function vi() {
  return 2 ** ++U1;
}
const Hl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: Ge,
  booleanish: Ft,
  commaOrSpaceSeparated: vn,
  commaSeparated: zi,
  number: q,
  overloadedBoolean: Op,
  spaceSeparated: ct
}, Symbol.toStringTag, { value: "Module" })), Al = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Hl)
);
class Ic extends ln {
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
    if (super(t, r), Qd(this, "space", o), typeof u == "number")
      for (; ++a < Al.length; ) {
        const l = Al[a];
        Qd(this, Al[a], (u & Hl[l]) === Hl[l]);
      }
  }
}
Ic.prototype.defined = !0;
function Qd(e, t, r) {
  r && (e[t] = r);
}
function au(e) {
  const t = {}, r = {};
  for (const [u, o] of Object.entries(e.properties)) {
    const a = new Ic(
      u,
      e.transform(e.attributes || {}, u),
      o,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(u) && (a.mustUseProperty = !0), t[u] = a, r[Xl(u)] = u, r[Xl(a.attribute)] = u;
  }
  return new eo(t, r, e.space);
}
const _p = au({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Ft,
    ariaAutoComplete: null,
    ariaBusy: Ft,
    ariaChecked: Ft,
    ariaColCount: q,
    ariaColIndex: q,
    ariaColSpan: q,
    ariaControls: ct,
    ariaCurrent: null,
    ariaDescribedBy: ct,
    ariaDetails: null,
    ariaDisabled: Ft,
    ariaDropEffect: ct,
    ariaErrorMessage: null,
    ariaExpanded: Ft,
    ariaFlowTo: ct,
    ariaGrabbed: Ft,
    ariaHasPopup: null,
    ariaHidden: Ft,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: ct,
    ariaLevel: q,
    ariaLive: null,
    ariaModal: Ft,
    ariaMultiLine: Ft,
    ariaMultiSelectable: Ft,
    ariaOrientation: null,
    ariaOwns: ct,
    ariaPlaceholder: null,
    ariaPosInSet: q,
    ariaPressed: Ft,
    ariaReadOnly: Ft,
    ariaRelevant: null,
    ariaRequired: Ft,
    ariaRoleDescription: ct,
    ariaRowCount: q,
    ariaRowIndex: q,
    ariaRowSpan: q,
    ariaSelected: Ft,
    ariaSetSize: q,
    ariaSort: null,
    ariaValueMax: q,
    ariaValueMin: q,
    ariaValueNow: q,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function Tp(e, t) {
  return t in e ? e[t] : t;
}
function Bp(e, t) {
  return Tp(e, t.toLowerCase());
}
const j1 = au({
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
    acceptCharset: ct,
    accessKey: ct,
    action: null,
    allow: null,
    allowFullScreen: Ge,
    allowPaymentRequest: Ge,
    allowUserMedia: Ge,
    alt: null,
    as: null,
    async: Ge,
    autoCapitalize: null,
    autoComplete: ct,
    autoFocus: Ge,
    autoPlay: Ge,
    blocking: ct,
    capture: null,
    charSet: null,
    checked: Ge,
    cite: null,
    className: ct,
    cols: q,
    colSpan: null,
    content: null,
    contentEditable: Ft,
    controls: Ge,
    controlsList: ct,
    coords: q | zi,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: Ge,
    defer: Ge,
    dir: null,
    dirName: null,
    disabled: Ge,
    download: Op,
    draggable: Ft,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: Ge,
    formTarget: null,
    headers: ct,
    height: q,
    hidden: Ge,
    high: q,
    href: null,
    hrefLang: null,
    htmlFor: ct,
    httpEquiv: ct,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: Ge,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: Ge,
    itemId: null,
    itemProp: ct,
    itemRef: ct,
    itemScope: Ge,
    itemType: ct,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: Ge,
    low: q,
    manifest: null,
    max: null,
    maxLength: q,
    media: null,
    method: null,
    min: null,
    minLength: q,
    multiple: Ge,
    muted: Ge,
    name: null,
    nonce: null,
    noModule: Ge,
    noValidate: Ge,
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
    open: Ge,
    optimum: q,
    pattern: null,
    ping: ct,
    placeholder: null,
    playsInline: Ge,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: Ge,
    referrerPolicy: null,
    rel: ct,
    required: Ge,
    reversed: Ge,
    rows: q,
    rowSpan: q,
    sandbox: ct,
    scope: null,
    scoped: Ge,
    seamless: Ge,
    selected: Ge,
    shadowRootClonable: Ge,
    shadowRootDelegatesFocus: Ge,
    shadowRootMode: null,
    shape: null,
    size: q,
    sizes: null,
    slot: null,
    span: q,
    spellCheck: Ft,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: q,
    step: null,
    style: null,
    tabIndex: q,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: Ge,
    useMap: null,
    value: Ft,
    width: q,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: ct,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: q,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: q,
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
    compact: Ge,
    // Lists. Use CSS to reduce space between items instead
    declare: Ge,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: q,
    // `<img>` and `<object>`
    leftMargin: q,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: q,
    // `<body>`
    marginWidth: q,
    // `<body>`
    noResize: Ge,
    // `<frame>`
    noHref: Ge,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: Ge,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: Ge,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: q,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: Ft,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: q,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: q,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: Ge,
    disableRemotePlayback: Ge,
    prefix: null,
    property: null,
    results: q,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Bp
}), Q1 = au({
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
    about: vn,
    accentHeight: q,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: q,
    amplitude: q,
    arabicForm: null,
    ascent: q,
    attributeName: null,
    attributeType: null,
    azimuth: q,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: q,
    by: null,
    calcMode: null,
    capHeight: q,
    className: ct,
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
    descent: q,
    diffuseConstant: q,
    direction: null,
    display: null,
    dur: null,
    divisor: q,
    dominantBaseline: null,
    download: Ge,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: q,
    enableBackground: null,
    end: null,
    event: null,
    exponent: q,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: q,
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
    hanging: q,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: q,
    horizOriginX: q,
    horizOriginY: q,
    id: null,
    ideographic: q,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: q,
    k: q,
    k1: q,
    k2: q,
    k3: q,
    k4: q,
    kernelMatrix: vn,
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
    limitingConeAngle: q,
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
    mediaSize: q,
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
    overlinePosition: q,
    overlineThickness: q,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: q,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: ct,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: q,
    pointsAtY: q,
    pointsAtZ: q,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: vn,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: vn,
    rev: vn,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: vn,
    requiredFeatures: vn,
    requiredFonts: vn,
    requiredFormats: vn,
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
    specularConstant: q,
    specularExponent: q,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: q,
    strikethroughThickness: q,
    string: null,
    stroke: null,
    strokeDashArray: vn,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: q,
    strokeOpacity: q,
    strokeWidth: null,
    style: null,
    surfaceScale: q,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: vn,
    tabIndex: q,
    tableValues: null,
    target: null,
    targetX: q,
    targetY: q,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: vn,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: q,
    underlineThickness: q,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: q,
    values: null,
    vAlphabetic: q,
    vMathematical: q,
    vectorEffect: null,
    vHanging: q,
    vIdeographic: q,
    version: null,
    vertAdvY: q,
    vertOriginX: q,
    vertOriginY: q,
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
    xHeight: q,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Tp
}), Gp = au({
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
}), kp = au({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Bp
}), Lp = au({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), q1 = {
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
}, $1 = /[A-Z]/g, qd = /-[a-z]/g, K1 = /^data[-\w.:]+$/i;
function eC(e, t) {
  const r = Xl(t);
  let u = t, o = ln;
  if (r in e.normal)
    return e.property[e.normal[r]];
  if (r.length > 4 && r.slice(0, 4) === "data" && K1.test(t)) {
    if (t.charAt(4) === "-") {
      const a = t.slice(5).replace(qd, nC);
      u = "data" + a.charAt(0).toUpperCase() + a.slice(1);
    } else {
      const a = t.slice(4);
      if (!qd.test(a)) {
        let l = a.replace($1, tC);
        l.charAt(0) !== "-" && (l = "-" + l), t = "data" + l;
      }
    }
    o = Ic;
  }
  return new o(u, t);
}
function tC(e) {
  return "-" + e.toLowerCase();
}
function nC(e) {
  return e.charAt(1).toUpperCase();
}
const rC = Pp([_p, j1, Gp, kp, Lp], "html"), Cc = Pp([_p, Q1, Gp, kp, Lp], "svg");
function iC(e) {
  return e.join(" ").trim();
}
var Cn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ns(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var xc = {}, $d = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, uC = /\n/g, oC = /^\s*/, sC = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, aC = /^:\s*/, lC = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, cC = /^[;\s]*/, fC = /^\s+|\s+$/g, dC = `
`, Kd = "/", eh = "*", ai = "", hC = "comment", pC = "declaration", gC = function(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var r = 1, u = 1;
  function o(E) {
    var A = E.match(uC);
    A && (r += A.length);
    var F = E.lastIndexOf(dC);
    u = ~F ? E.length - F : u + E.length;
  }
  function a() {
    var E = { line: r, column: u };
    return function(A) {
      return A.position = new l(E), h(), A;
    };
  }
  function l(E) {
    this.start = E, this.end = { line: r, column: u }, this.source = t.source;
  }
  l.prototype.content = e;
  function c(E) {
    var A = new Error(
      t.source + ":" + r + ":" + u + ": " + E
    );
    if (A.reason = E, A.filename = t.source, A.line = r, A.column = u, A.source = e, !t.silent) throw A;
  }
  function f(E) {
    var A = E.exec(e);
    if (A) {
      var F = A[0];
      return o(F), e = e.slice(F.length), A;
    }
  }
  function h() {
    f(oC);
  }
  function p(E) {
    var A;
    for (E = E || []; A = g(); )
      A !== !1 && E.push(A);
    return E;
  }
  function g() {
    var E = a();
    if (!(Kd != e.charAt(0) || eh != e.charAt(1))) {
      for (var A = 2; ai != e.charAt(A) && (eh != e.charAt(A) || Kd != e.charAt(A + 1)); )
        ++A;
      if (A += 2, ai === e.charAt(A - 1))
        return c("End of comment missing");
      var F = e.slice(2, A - 2);
      return u += 2, o(F), e = e.slice(A), u += 2, E({
        type: hC,
        comment: F
      });
    }
  }
  function v() {
    var E = a(), A = f(sC);
    if (A) {
      if (g(), !f(aC)) return c("property missing ':'");
      var F = f(lC), P = E({
        type: pC,
        property: th(A[0].replace($d, ai)),
        value: F ? th(F[0].replace($d, ai)) : ai
      });
      return f(cC), P;
    }
  }
  function b() {
    var E = [];
    p(E);
    for (var A; A = v(); )
      A !== !1 && (E.push(A), p(E));
    return E;
  }
  return h(), b();
};
function th(e) {
  return e ? e.replace(fC, ai) : ai;
}
var mC = Cn && Cn.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(xc, "__esModule", { value: !0 });
xc.default = yC;
var bC = mC(gC);
function yC(e, t) {
  var r = null;
  if (!e || typeof e != "string")
    return r;
  var u = (0, bC.default)(e), o = typeof t == "function";
  return u.forEach(function(a) {
    if (a.type === "declaration") {
      var l = a.property, c = a.value;
      o ? t(l, c, a) : c && (r = r || {}, r[l] = c);
    }
  }), r;
}
var Vs = {};
Object.defineProperty(Vs, "__esModule", { value: !0 });
Vs.camelCase = void 0;
var vC = /^--[a-zA-Z0-9_-]+$/, IC = /-([a-z])/g, CC = /^[^-]+$/, xC = /^-(webkit|moz|ms|o|khtml)-/, AC = /^-(ms)-/, wC = function(e) {
  return !e || CC.test(e) || vC.test(e);
}, SC = function(e, t) {
  return t.toUpperCase();
}, nh = function(e, t) {
  return "".concat(t, "-");
}, EC = function(e, t) {
  return t === void 0 && (t = {}), wC(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace(AC, nh) : e = e.replace(xC, nh), e.replace(IC, SC));
};
Vs.camelCase = EC;
var FC = Cn && Cn.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, RC = FC(xc), PC = Vs;
function zl(e, t) {
  var r = {};
  return !e || typeof e != "string" || (0, RC.default)(e, function(u, o) {
    u && o && (r[(0, PC.camelCase)(u, t)] = o);
  }), r;
}
zl.default = zl;
var OC = zl;
const _C = /* @__PURE__ */ Ns(OC), Dp = Mp("end"), Ac = Mp("start");
function Mp(e) {
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
function TC(e) {
  const t = Ac(e), r = Dp(e);
  if (t && r)
    return { start: t, end: r };
}
function Xu(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? rh(e.position) : "start" in e || "end" in e ? rh(e) : "line" in e || "column" in e ? Zl(e) : "";
}
function Zl(e) {
  return ih(e && e.line) + ":" + ih(e && e.column);
}
function rh(e) {
  return Zl(e && e.start) + "-" + Zl(e && e.end);
}
function ih(e) {
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
const wc = {}.hasOwnProperty, BC = /* @__PURE__ */ new Map(), GC = /[A-Z]/g, kC = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), LC = /* @__PURE__ */ new Set(["td", "th"]), Np = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function DC(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const r = t.filePath || void 0;
  let u;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    u = ZC(r, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    u = zC(r, t.jsx, t.jsxs);
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
    schema: t.space === "svg" ? Cc : rC,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, a = Vp(o, e, void 0);
  return a && typeof a != "string" ? a : o.create(
    e,
    o.Fragment,
    { children: a || void 0 },
    void 0
  );
}
function Vp(e, t, r) {
  if (t.type === "element")
    return MC(e, t, r);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return NC(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return WC(e, t, r);
  if (t.type === "mdxjsEsm")
    return VC(e, t);
  if (t.type === "root")
    return XC(e, t, r);
  if (t.type === "text")
    return HC(e, t);
}
function MC(e, t, r) {
  const u = e.schema;
  let o = u;
  t.tagName.toLowerCase() === "svg" && u.space === "html" && (o = Cc, e.schema = o), e.ancestors.push(t);
  const a = Xp(e, t.tagName, !1), l = YC(e, t);
  let c = Ec(e, t);
  return kC.has(t.tagName) && (c = c.filter(function(f) {
    return typeof f == "string" ? !J1(f) : !0;
  })), Wp(e, l, a, t), Sc(l, c), e.ancestors.pop(), e.schema = u, e.create(t, a, l, r);
}
function NC(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const u = t.data.estree.body[0];
    return u.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(u.expression);
  }
  Yu(e, t.position);
}
function VC(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  Yu(e, t.position);
}
function WC(e, t, r) {
  const u = e.schema;
  let o = u;
  t.name === "svg" && u.space === "html" && (o = Cc, e.schema = o), e.ancestors.push(t);
  const a = t.name === null ? e.Fragment : Xp(e, t.name, !0), l = JC(e, t), c = Ec(e, t);
  return Wp(e, l, a, t), Sc(l, c), e.ancestors.pop(), e.schema = u, e.create(t, a, l, r);
}
function XC(e, t, r) {
  const u = {};
  return Sc(u, Ec(e, t)), e.create(t, e.Fragment, u, r);
}
function HC(e, t) {
  return t.value;
}
function Wp(e, t, r, u) {
  typeof r != "string" && r !== e.Fragment && e.passNode && (t.node = u);
}
function Sc(e, t) {
  if (t.length > 0) {
    const r = t.length > 1 ? t : t[0];
    r && (e.children = r);
  }
}
function zC(e, t, r) {
  return u;
  function u(o, a, l, c) {
    const h = Array.isArray(l.children) ? r : t;
    return c ? h(a, l, c) : h(a, l);
  }
}
function ZC(e, t) {
  return r;
  function r(u, o, a, l) {
    const c = Array.isArray(a.children), f = Ac(u);
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
function YC(e, t) {
  const r = {};
  let u, o;
  for (o in t.properties)
    if (o !== "children" && wc.call(t.properties, o)) {
      const a = UC(e, o, t.properties[o]);
      if (a) {
        const [l, c] = a;
        e.tableCellAlignToStyle && l === "align" && typeof c == "string" && LC.has(t.tagName) ? u = c : r[l] = c;
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
function JC(e, t) {
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
        Yu(e, t.position);
    else {
      const o = u.name;
      let a;
      if (u.value && typeof u.value == "object")
        if (u.value.data && u.value.data.estree && e.evaluater) {
          const c = u.value.data.estree.body[0];
          c.type, a = e.evaluater.evaluateExpression(c.expression);
        } else
          Yu(e, t.position);
      else
        a = u.value === null ? !0 : u.value;
      r[o] = /** @type {Props[keyof Props]} */
      a;
    }
  return r;
}
function Ec(e, t) {
  const r = [];
  let u = -1;
  const o = e.passKeys ? /* @__PURE__ */ new Map() : BC;
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
    const c = Vp(e, a, l);
    c !== void 0 && r.push(c);
  }
  return r;
}
function UC(e, t, r) {
  const u = eC(e.schema, t);
  if (!(r == null || typeof r == "number" && Number.isNaN(r))) {
    if (Array.isArray(r) && (r = u.commaSeparated ? X1(r) : iC(r)), u.property === "style") {
      let o = typeof r == "object" ? r : jC(e, String(r));
      return e.stylePropertyNameCase === "css" && (o = QC(o)), ["style", o];
    }
    return [
      e.elementAttributeNameCase === "react" && u.space ? q1[u.property] || u.property : u.attribute,
      r
    ];
  }
}
function jC(e, t) {
  try {
    return _C(t, { reactCompat: !0 });
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
    throw o.file = e.filePath || void 0, o.url = Np + "#cannot-parse-style-attribute", o;
  }
}
function Xp(e, t, r) {
  let u;
  if (!r)
    u = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const o = t.split(".");
    let a = -1, l;
    for (; ++a < o.length; ) {
      const c = Ud(o[a]) ? { type: "Identifier", name: o[a] } : { type: "Literal", value: o[a] };
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
    u = Ud(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (u.type === "Literal") {
    const o = (
      /** @type {string | number} */
      u.value
    );
    return wc.call(e.components, o) ? e.components[o] : o;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(u);
  Yu(e);
}
function Yu(e, t) {
  const r = new zt(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw r.file = e.filePath || void 0, r.url = Np + "#cannot-handle-mdx-estrees-without-createevaluater", r;
}
function QC(e) {
  const t = {};
  let r;
  for (r in e)
    wc.call(e, r) && (t[qC(r)] = e[r]);
  return t;
}
function qC(e) {
  let t = e.replace(GC, $C);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function $C(e) {
  return "-" + e.toLowerCase();
}
const wl = {
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
}, KC = {};
function ex(e, t) {
  const r = KC, u = typeof r.includeImageAlt == "boolean" ? r.includeImageAlt : !0, o = typeof r.includeHtml == "boolean" ? r.includeHtml : !0;
  return Hp(e, u, o);
}
function Hp(e, t, r) {
  if (tx(e)) {
    if ("value" in e)
      return e.type === "html" && !r ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return uh(e.children, t, r);
  }
  return Array.isArray(e) ? uh(e, t, r) : "";
}
function uh(e, t, r) {
  const u = [];
  let o = -1;
  for (; ++o < e.length; )
    u[o] = Hp(e[o], t, r);
  return u.join("");
}
function tx(e) {
  return !!(e && typeof e == "object");
}
const oh = document.createElement("i");
function Fc(e) {
  const t = "&" + e + ";";
  oh.innerHTML = t;
  const r = oh.textContent;
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
function Ln(e, t) {
  return e.length > 0 ? (ur(e, e.length, 0, t), e) : t;
}
const sh = {}.hasOwnProperty;
function nx(e) {
  const t = {};
  let r = -1;
  for (; ++r < e.length; )
    rx(t, e[r]);
  return t;
}
function rx(e, t) {
  let r;
  for (r in t) {
    const o = (sh.call(e, r) ? e[r] : void 0) || (e[r] = {}), a = t[r];
    let l;
    if (a)
      for (l in a) {
        sh.call(o, l) || (o[l] = []);
        const c = a[l];
        ix(
          // @ts-expect-error Looks like a list.
          o[l],
          Array.isArray(c) ? c : c ? [c] : []
        );
      }
  }
}
function ix(e, t) {
  let r = -1;
  const u = [];
  for (; ++r < t.length; )
    (t[r].add === "after" ? e : u).push(t[r]);
  ur(e, 0, 0, u);
}
function zp(e, t) {
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
const ir = Zr(/[A-Za-z]/), xn = Zr(/[\dA-Za-z]/), ux = Zr(/[#-'*+\--9=?A-Z^-~]/);
function Yl(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Jl = Zr(/\d/), ox = Zr(/[\dA-Fa-f]/), sx = Zr(/[!-/:-@[-`{-~]/);
function Ae(e) {
  return e !== null && e < -2;
}
function an(e) {
  return e !== null && (e < 0 || e === 32);
}
function Qe(e) {
  return e === -2 || e === -1 || e === 32;
}
const ax = Zr(new RegExp("\\p{P}|\\p{S}", "u")), lx = Zr(/\s/);
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
    if (a === 37 && xn(e.charCodeAt(r + 1)) && xn(e.charCodeAt(r + 2)))
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
function ft(e, t, r, u) {
  const o = u ? u - 1 : Number.POSITIVE_INFINITY;
  let a = 0;
  return l;
  function l(f) {
    return Qe(f) ? (e.enter(r), c(f)) : t(f);
  }
  function c(f) {
    return Qe(f) && a++ < o ? (e.consume(f), c) : (e.exit(r), t(f));
  }
}
const cx = {
  tokenize: fx
};
function fx(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, u, o);
  let r;
  return t;
  function u(c) {
    if (c === null) {
      e.consume(c);
      return;
    }
    return e.enter("lineEnding"), e.consume(c), e.exit("lineEnding"), ft(e, t, "linePrefix");
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
const dx = {
  tokenize: hx
}, ah = {
  tokenize: px
};
function hx(e) {
  const t = this, r = [];
  let u = 0, o, a, l;
  return c;
  function c(k) {
    if (u < r.length) {
      const M = r[u];
      return t.containerState = M[1], e.attempt(M[0].continuation, f, h)(k);
    }
    return h(k);
  }
  function f(k) {
    if (u++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, o && W();
      const M = t.events.length;
      let U = M, G;
      for (; U--; )
        if (t.events[U][0] === "exit" && t.events[U][1].type === "chunkFlow") {
          G = t.events[U][1].end;
          break;
        }
      P(u);
      let j = M;
      for (; j < t.events.length; )
        t.events[j][1].end = {
          ...G
        }, j++;
      return ur(t.events, U + 1, 0, t.events.slice(M)), t.events.length = j, h(k);
    }
    return c(k);
  }
  function h(k) {
    if (u === r.length) {
      if (!o)
        return v(k);
      if (o.currentConstruct && o.currentConstruct.concrete)
        return E(k);
      t.interrupt = !!(o.currentConstruct && !o._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(ah, p, g)(k);
  }
  function p(k) {
    return o && W(), P(u), v(k);
  }
  function g(k) {
    return t.parser.lazy[t.now().line] = u !== r.length, l = t.now().offset, E(k);
  }
  function v(k) {
    return t.containerState = {}, e.attempt(ah, b, E)(k);
  }
  function b(k) {
    return u++, r.push([t.currentConstruct, t.containerState]), v(k);
  }
  function E(k) {
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
  function F(k, M) {
    const U = t.sliceStream(k);
    if (M && U.push(null), k.previous = a, a && (a.next = k), a = k, o.defineSkip(k.start), o.write(U), t.parser.lazy[k.start.line]) {
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
      let D = j, Y, $;
      for (; D--; )
        if (t.events[D][0] === "exit" && t.events[D][1].type === "chunkFlow") {
          if (Y) {
            $ = t.events[D][1].end;
            break;
          }
          Y = !0;
        }
      for (P(u), G = j; G < t.events.length; )
        t.events[G][1].end = {
          ...$
        }, G++;
      ur(t.events, D + 1, 0, t.events.slice(j)), t.events.length = G;
    }
  }
  function P(k) {
    let M = r.length;
    for (; M-- > k; ) {
      const U = r[M];
      t.containerState = U[1], U[0].exit.call(t, e);
    }
    r.length = k;
  }
  function W() {
    o.write([null]), a = void 0, o = void 0, t.containerState._closeFlow = void 0;
  }
}
function px(e, t, r) {
  return ft(e, e.attempt(this.parser.constructs.document, t, r), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function lh(e) {
  if (e === null || an(e) || lx(e))
    return 1;
  if (ax(e))
    return 2;
}
function Rc(e, t, r) {
  const u = [];
  let o = -1;
  for (; ++o < e.length; ) {
    const a = e[o].resolveAll;
    a && !u.includes(a) && (t = a(t, r), u.push(a));
  }
  return t;
}
const Ul = {
  name: "attention",
  resolveAll: gx,
  tokenize: mx
};
function gx(e, t) {
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
          ch(g, -f), ch(v, f), l = {
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
          }, h = [], e[u][1].end.offset - e[u][1].start.offset && (h = Ln(h, [["enter", e[u][1], t], ["exit", e[u][1], t]])), h = Ln(h, [["enter", o, t], ["enter", l, t], ["exit", l, t], ["enter", a, t]]), h = Ln(h, Rc(t.parser.constructs.insideSpan.null, e.slice(u + 1, r), t)), h = Ln(h, [["exit", a, t], ["enter", c, t], ["exit", c, t], ["exit", o, t]]), e[r][1].end.offset - e[r][1].start.offset ? (p = 2, h = Ln(h, [["enter", e[r][1], t], ["exit", e[r][1], t]])) : p = 0, ur(e, u - 1, r - u + 3, h), r = u + h.length - p - 2;
          break;
        }
    }
  for (r = -1; ++r < e.length; )
    e[r][1].type === "attentionSequence" && (e[r][1].type = "data");
  return e;
}
function mx(e, t) {
  const r = this.parser.constructs.attentionMarkers.null, u = this.previous, o = lh(u);
  let a;
  return l;
  function l(f) {
    return a = f, e.enter("attentionSequence"), c(f);
  }
  function c(f) {
    if (f === a)
      return e.consume(f), c;
    const h = e.exit("attentionSequence"), p = lh(f), g = !p || p === 2 && o || r.includes(f), v = !o || o === 2 && p || r.includes(u);
    return h._open = !!(a === 42 ? g : g && (o || !v)), h._close = !!(a === 42 ? v : v && (p || !g)), t(f);
  }
}
function ch(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const bx = {
  name: "autolink",
  tokenize: yx
};
function yx(e, t, r) {
  let u = 0;
  return o;
  function o(b) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(b), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
  }
  function a(b) {
    return ir(b) ? (e.consume(b), l) : b === 64 ? r(b) : h(b);
  }
  function l(b) {
    return b === 43 || b === 45 || b === 46 || xn(b) ? (u = 1, c(b)) : h(b);
  }
  function c(b) {
    return b === 58 ? (e.consume(b), u = 0, f) : (b === 43 || b === 45 || b === 46 || xn(b)) && u++ < 32 ? (e.consume(b), c) : (u = 0, h(b));
  }
  function f(b) {
    return b === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(b), e.exit("autolinkMarker"), e.exit("autolink"), t) : b === null || b === 32 || b === 60 || Yl(b) ? r(b) : (e.consume(b), f);
  }
  function h(b) {
    return b === 64 ? (e.consume(b), p) : ux(b) ? (e.consume(b), h) : r(b);
  }
  function p(b) {
    return xn(b) ? g(b) : r(b);
  }
  function g(b) {
    return b === 46 ? (e.consume(b), u = 0, p) : b === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(b), e.exit("autolinkMarker"), e.exit("autolink"), t) : v(b);
  }
  function v(b) {
    if ((b === 45 || xn(b)) && u++ < 63) {
      const E = b === 45 ? v : g;
      return e.consume(b), E;
    }
    return r(b);
  }
}
const Ws = {
  partial: !0,
  tokenize: vx
};
function vx(e, t, r) {
  return u;
  function u(a) {
    return Qe(a) ? ft(e, o, "linePrefix")(a) : o(a);
  }
  function o(a) {
    return a === null || Ae(a) ? t(a) : r(a);
  }
}
const Zp = {
  continuation: {
    tokenize: Cx
  },
  exit: xx,
  name: "blockQuote",
  tokenize: Ix
};
function Ix(e, t, r) {
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
    return Qe(l) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(l), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(l));
  }
}
function Cx(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return Qe(l) ? ft(e, a, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(l) : a(l);
  }
  function a(l) {
    return e.attempt(Zp, t, r)(l);
  }
}
function xx(e) {
  e.exit("blockQuote");
}
const Yp = {
  name: "characterEscape",
  tokenize: Ax
};
function Ax(e, t, r) {
  return u;
  function u(a) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(a), e.exit("escapeMarker"), o;
  }
  function o(a) {
    return sx(a) ? (e.enter("characterEscapeValue"), e.consume(a), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : r(a);
  }
}
const Jp = {
  name: "characterReference",
  tokenize: wx
};
function wx(e, t, r) {
  const u = this;
  let o = 0, a, l;
  return c;
  function c(g) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(g), e.exit("characterReferenceMarker"), f;
  }
  function f(g) {
    return g === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(g), e.exit("characterReferenceMarkerNumeric"), h) : (e.enter("characterReferenceValue"), a = 31, l = xn, p(g));
  }
  function h(g) {
    return g === 88 || g === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(g), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, l = ox, p) : (e.enter("characterReferenceValue"), a = 7, l = Jl, p(g));
  }
  function p(g) {
    if (g === 59 && o) {
      const v = e.exit("characterReferenceValue");
      return l === xn && !Fc(u.sliceSerialize(v)) ? r(g) : (e.enter("characterReferenceMarker"), e.consume(g), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return l(g) && o++ < a ? (e.consume(g), p) : r(g);
  }
}
const fh = {
  partial: !0,
  tokenize: Ex
}, dh = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Sx
};
function Sx(e, t, r) {
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
    return G === c ? (l++, e.consume(G), p) : l < 3 ? r(G) : (e.exit("codeFencedFenceSequence"), Qe(G) ? ft(e, g, "whitespace")(G) : g(G));
  }
  function g(G) {
    return G === null || Ae(G) ? (e.exit("codeFencedFence"), u.interrupt ? t(G) : e.check(fh, A, M)(G)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), v(G));
  }
  function v(G) {
    return G === null || Ae(G) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), g(G)) : Qe(G) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), ft(e, b, "whitespace")(G)) : G === 96 && G === c ? r(G) : (e.consume(G), v);
  }
  function b(G) {
    return G === null || Ae(G) ? g(G) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), E(G));
  }
  function E(G) {
    return G === null || Ae(G) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), g(G)) : G === 96 && G === c ? r(G) : (e.consume(G), E);
  }
  function A(G) {
    return e.attempt(o, M, F)(G);
  }
  function F(G) {
    return e.enter("lineEnding"), e.consume(G), e.exit("lineEnding"), P;
  }
  function P(G) {
    return a > 0 && Qe(G) ? ft(e, W, "linePrefix", a + 1)(G) : W(G);
  }
  function W(G) {
    return G === null || Ae(G) ? e.check(fh, A, M)(G) : (e.enter("codeFlowValue"), k(G));
  }
  function k(G) {
    return G === null || Ae(G) ? (e.exit("codeFlowValue"), W(G)) : (e.consume(G), k);
  }
  function M(G) {
    return e.exit("codeFenced"), t(G);
  }
  function U(G, j, D) {
    let Y = 0;
    return $;
    function $(ie) {
      return G.enter("lineEnding"), G.consume(ie), G.exit("lineEnding"), Q;
    }
    function Q(ie) {
      return G.enter("codeFencedFence"), Qe(ie) ? ft(G, Z, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(ie) : Z(ie);
    }
    function Z(ie) {
      return ie === c ? (G.enter("codeFencedFenceSequence"), K(ie)) : D(ie);
    }
    function K(ie) {
      return ie === c ? (Y++, G.consume(ie), K) : Y >= l ? (G.exit("codeFencedFenceSequence"), Qe(ie) ? ft(G, fe, "whitespace")(ie) : fe(ie)) : D(ie);
    }
    function fe(ie) {
      return ie === null || Ae(ie) ? (G.exit("codeFencedFence"), j(ie)) : D(ie);
    }
  }
}
function Ex(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return l === null ? r(l) : (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), a);
  }
  function a(l) {
    return u.parser.lazy[u.now().line] ? r(l) : t(l);
  }
}
const Sl = {
  name: "codeIndented",
  tokenize: Rx
}, Fx = {
  partial: !0,
  tokenize: Px
};
function Rx(e, t, r) {
  const u = this;
  return o;
  function o(h) {
    return e.enter("codeIndented"), ft(e, a, "linePrefix", 5)(h);
  }
  function a(h) {
    const p = u.events[u.events.length - 1];
    return p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? l(h) : r(h);
  }
  function l(h) {
    return h === null ? f(h) : Ae(h) ? e.attempt(Fx, l, f)(h) : (e.enter("codeFlowValue"), c(h));
  }
  function c(h) {
    return h === null || Ae(h) ? (e.exit("codeFlowValue"), l(h)) : (e.consume(h), c);
  }
  function f(h) {
    return e.exit("codeIndented"), t(h);
  }
}
function Px(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return u.parser.lazy[u.now().line] ? r(l) : Ae(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), o) : ft(e, a, "linePrefix", 5)(l);
  }
  function a(l) {
    const c = u.events[u.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? t(l) : Ae(l) ? o(l) : r(l);
  }
}
const Ox = {
  name: "codeText",
  previous: Tx,
  resolve: _x,
  tokenize: Bx
};
function _x(e) {
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
function Tx(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Bx(e, t, r) {
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
class Gx {
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
function Up(e) {
  const t = {};
  let r = -1, u, o, a, l, c, f, h;
  const p = new Gx(e);
  for (; ++r < p.length; ) {
    for (; r in t; )
      r = t[r];
    if (u = p.get(r), r && u[1].type === "chunkFlow" && p.get(r - 1)[1].type === "listItemPrefix" && (f = u[1]._tokenizer.events, a = 0, a < f.length && f[a][1].type === "lineEndingBlank" && (a += 2), a < f.length && f[a][1].type === "content"))
      for (; ++a < f.length && f[a][1].type !== "content"; )
        f[a][1].type === "chunkText" && (f[a][1]._isInFirstContentOfListItem = !0, a++);
    if (u[0] === "enter")
      u[1].contentType && (Object.assign(t, kx(p, r)), r = t[r], h = !0);
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
function kx(e, t) {
  const r = e.get(t)[1], u = e.get(t)[2];
  let o = t - 1;
  const a = [];
  let l = r._tokenizer;
  l || (l = u.parser[r.contentType](r.start), r._contentTypeTextTrailing && (l._contentTypeTextTrailing = !0));
  const c = l.events, f = [], h = {};
  let p, g, v = -1, b = r, E = 0, A = 0;
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
    h[E + f[v][0]] = E + f[v][1], E += f[v][1] - f[v][0] - 1;
  return h;
}
const Lx = {
  resolve: Mx,
  tokenize: Nx
}, Dx = {
  partial: !0,
  tokenize: Vx
};
function Mx(e) {
  return Up(e), e;
}
function Nx(e, t) {
  let r;
  return u;
  function u(c) {
    return e.enter("content"), r = e.enter("chunkContent", {
      contentType: "content"
    }), o(c);
  }
  function o(c) {
    return c === null ? a(c) : Ae(c) ? e.check(Dx, l, a)(c) : (e.consume(c), o);
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
function Vx(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), ft(e, a, "linePrefix");
  }
  function a(l) {
    if (l === null || Ae(l))
      return r(l);
    const c = u.events[u.events.length - 1];
    return !u.parser.constructs.disable.null.includes("codeIndented") && c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? t(l) : e.interrupt(u.parser.constructs.flow, r, t)(l);
  }
}
function jp(e, t, r, u, o, a, l, c, f) {
  const h = f || Number.POSITIVE_INFINITY;
  let p = 0;
  return g;
  function g(P) {
    return P === 60 ? (e.enter(u), e.enter(o), e.enter(a), e.consume(P), e.exit(a), v) : P === null || P === 32 || P === 41 || Yl(P) ? r(P) : (e.enter(u), e.enter(l), e.enter(c), e.enter("chunkString", {
      contentType: "string"
    }), A(P));
  }
  function v(P) {
    return P === 62 ? (e.enter(a), e.consume(P), e.exit(a), e.exit(o), e.exit(u), t) : (e.enter(c), e.enter("chunkString", {
      contentType: "string"
    }), b(P));
  }
  function b(P) {
    return P === 62 ? (e.exit("chunkString"), e.exit(c), v(P)) : P === null || P === 60 || Ae(P) ? r(P) : (e.consume(P), P === 92 ? E : b);
  }
  function E(P) {
    return P === 60 || P === 62 || P === 92 ? (e.consume(P), b) : b(P);
  }
  function A(P) {
    return !p && (P === null || P === 41 || an(P)) ? (e.exit("chunkString"), e.exit(c), e.exit(l), e.exit(u), t(P)) : p < h && P === 40 ? (e.consume(P), p++, A) : P === 41 ? (e.consume(P), p--, A) : P === null || P === 32 || P === 40 || Yl(P) ? r(P) : (e.consume(P), P === 92 ? F : A);
  }
  function F(P) {
    return P === 40 || P === 41 || P === 92 ? (e.consume(P), A) : A(P);
  }
}
function Qp(e, t, r, u, o, a) {
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
    return b === null || b === 91 || b === 93 || Ae(b) || c++ > 999 ? (e.exit("chunkString"), p(b)) : (e.consume(b), f || (f = !Qe(b)), b === 92 ? v : g);
  }
  function v(b) {
    return b === 91 || b === 92 || b === 93 ? (e.consume(b), c++, g) : g(b);
  }
}
function qp(e, t, r, u, o, a) {
  let l;
  return c;
  function c(v) {
    return v === 34 || v === 39 || v === 40 ? (e.enter(u), e.enter(o), e.consume(v), e.exit(o), l = v === 40 ? 41 : v, f) : r(v);
  }
  function f(v) {
    return v === l ? (e.enter(o), e.consume(v), e.exit(o), e.exit(u), t) : (e.enter(a), h(v));
  }
  function h(v) {
    return v === l ? (e.exit(a), f(l)) : v === null ? r(v) : Ae(v) ? (e.enter("lineEnding"), e.consume(v), e.exit("lineEnding"), ft(e, h, "linePrefix")) : (e.enter("chunkString", {
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
    return Ae(o) ? (e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), r = !0, u) : Qe(o) ? ft(e, u, r ? "linePrefix" : "lineSuffix")(o) : t(o);
  }
}
const Wx = {
  name: "definition",
  tokenize: Hx
}, Xx = {
  partial: !0,
  tokenize: zx
};
function Hx(e, t, r) {
  const u = this;
  let o;
  return a;
  function a(b) {
    return e.enter("definition"), l(b);
  }
  function l(b) {
    return Qp.call(
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
    return an(b) ? Hu(e, h)(b) : h(b);
  }
  function h(b) {
    return jp(
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
    return e.attempt(Xx, g, g)(b);
  }
  function g(b) {
    return Qe(b) ? ft(e, v, "whitespace")(b) : v(b);
  }
  function v(b) {
    return b === null || Ae(b) ? (e.exit("definition"), u.parser.defined.push(o), t(b)) : r(b);
  }
}
function zx(e, t, r) {
  return u;
  function u(c) {
    return an(c) ? Hu(e, o)(c) : r(c);
  }
  function o(c) {
    return qp(e, a, r, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(c);
  }
  function a(c) {
    return Qe(c) ? ft(e, l, "whitespace")(c) : l(c);
  }
  function l(c) {
    return c === null || Ae(c) ? t(c) : r(c);
  }
}
const Zx = {
  name: "hardBreakEscape",
  tokenize: Yx
};
function Yx(e, t, r) {
  return u;
  function u(a) {
    return e.enter("hardBreakEscape"), e.consume(a), o;
  }
  function o(a) {
    return Ae(a) ? (e.exit("hardBreakEscape"), t(a)) : r(a);
  }
}
const Jx = {
  name: "headingAtx",
  resolve: Ux,
  tokenize: jx
};
function Ux(e, t) {
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
function jx(e, t, r) {
  let u = 0;
  return o;
  function o(p) {
    return e.enter("atxHeading"), a(p);
  }
  function a(p) {
    return e.enter("atxHeadingSequence"), l(p);
  }
  function l(p) {
    return p === 35 && u++ < 6 ? (e.consume(p), l) : p === null || an(p) ? (e.exit("atxHeadingSequence"), c(p)) : r(p);
  }
  function c(p) {
    return p === 35 ? (e.enter("atxHeadingSequence"), f(p)) : p === null || Ae(p) ? (e.exit("atxHeading"), t(p)) : Qe(p) ? ft(e, c, "whitespace")(p) : (e.enter("atxHeadingText"), h(p));
  }
  function f(p) {
    return p === 35 ? (e.consume(p), f) : (e.exit("atxHeadingSequence"), c(p));
  }
  function h(p) {
    return p === null || p === 35 || an(p) ? (e.exit("atxHeadingText"), c(p)) : (e.consume(p), h);
  }
}
const Qx = [
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
], hh = ["pre", "script", "style", "textarea"], qx = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: eA,
  tokenize: tA
}, $x = {
  partial: !0,
  tokenize: rA
}, Kx = {
  partial: !0,
  tokenize: nA
};
function eA(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function tA(e, t, r) {
  const u = this;
  let o, a, l, c, f;
  return h;
  function h(S) {
    return p(S);
  }
  function p(S) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(S), g;
  }
  function g(S) {
    return S === 33 ? (e.consume(S), v) : S === 47 ? (e.consume(S), a = !0, A) : S === 63 ? (e.consume(S), o = 3, u.interrupt ? t : w) : ir(S) ? (e.consume(S), l = String.fromCharCode(S), F) : r(S);
  }
  function v(S) {
    return S === 45 ? (e.consume(S), o = 2, b) : S === 91 ? (e.consume(S), o = 5, c = 0, E) : ir(S) ? (e.consume(S), o = 4, u.interrupt ? t : w) : r(S);
  }
  function b(S) {
    return S === 45 ? (e.consume(S), u.interrupt ? t : w) : r(S);
  }
  function E(S) {
    const Ye = "CDATA[";
    return S === Ye.charCodeAt(c++) ? (e.consume(S), c === Ye.length ? u.interrupt ? t : Z : E) : r(S);
  }
  function A(S) {
    return ir(S) ? (e.consume(S), l = String.fromCharCode(S), F) : r(S);
  }
  function F(S) {
    if (S === null || S === 47 || S === 62 || an(S)) {
      const Ye = S === 47, le = l.toLowerCase();
      return !Ye && !a && hh.includes(le) ? (o = 1, u.interrupt ? t(S) : Z(S)) : Qx.includes(l.toLowerCase()) ? (o = 6, Ye ? (e.consume(S), P) : u.interrupt ? t(S) : Z(S)) : (o = 7, u.interrupt && !u.parser.lazy[u.now().line] ? r(S) : a ? W(S) : k(S));
    }
    return S === 45 || xn(S) ? (e.consume(S), l += String.fromCharCode(S), F) : r(S);
  }
  function P(S) {
    return S === 62 ? (e.consume(S), u.interrupt ? t : Z) : r(S);
  }
  function W(S) {
    return Qe(S) ? (e.consume(S), W) : $(S);
  }
  function k(S) {
    return S === 47 ? (e.consume(S), $) : S === 58 || S === 95 || ir(S) ? (e.consume(S), M) : Qe(S) ? (e.consume(S), k) : $(S);
  }
  function M(S) {
    return S === 45 || S === 46 || S === 58 || S === 95 || xn(S) ? (e.consume(S), M) : U(S);
  }
  function U(S) {
    return S === 61 ? (e.consume(S), G) : Qe(S) ? (e.consume(S), U) : k(S);
  }
  function G(S) {
    return S === null || S === 60 || S === 61 || S === 62 || S === 96 ? r(S) : S === 34 || S === 39 ? (e.consume(S), f = S, j) : Qe(S) ? (e.consume(S), G) : D(S);
  }
  function j(S) {
    return S === f ? (e.consume(S), f = null, Y) : S === null || Ae(S) ? r(S) : (e.consume(S), j);
  }
  function D(S) {
    return S === null || S === 34 || S === 39 || S === 47 || S === 60 || S === 61 || S === 62 || S === 96 || an(S) ? U(S) : (e.consume(S), D);
  }
  function Y(S) {
    return S === 47 || S === 62 || Qe(S) ? k(S) : r(S);
  }
  function $(S) {
    return S === 62 ? (e.consume(S), Q) : r(S);
  }
  function Q(S) {
    return S === null || Ae(S) ? Z(S) : Qe(S) ? (e.consume(S), Q) : r(S);
  }
  function Z(S) {
    return S === 45 && o === 2 ? (e.consume(S), xe) : S === 60 && o === 1 ? (e.consume(S), we) : S === 62 && o === 4 ? (e.consume(S), Ie) : S === 63 && o === 3 ? (e.consume(S), w) : S === 93 && o === 5 ? (e.consume(S), Je) : Ae(S) && (o === 6 || o === 7) ? (e.exit("htmlFlowData"), e.check($x, ke, K)(S)) : S === null || Ae(S) ? (e.exit("htmlFlowData"), K(S)) : (e.consume(S), Z);
  }
  function K(S) {
    return e.check(Kx, fe, ke)(S);
  }
  function fe(S) {
    return e.enter("lineEnding"), e.consume(S), e.exit("lineEnding"), ie;
  }
  function ie(S) {
    return S === null || Ae(S) ? K(S) : (e.enter("htmlFlowData"), Z(S));
  }
  function xe(S) {
    return S === 45 ? (e.consume(S), w) : Z(S);
  }
  function we(S) {
    return S === 47 ? (e.consume(S), l = "", Re) : Z(S);
  }
  function Re(S) {
    if (S === 62) {
      const Ye = l.toLowerCase();
      return hh.includes(Ye) ? (e.consume(S), Ie) : Z(S);
    }
    return ir(S) && l.length < 8 ? (e.consume(S), l += String.fromCharCode(S), Re) : Z(S);
  }
  function Je(S) {
    return S === 93 ? (e.consume(S), w) : Z(S);
  }
  function w(S) {
    return S === 62 ? (e.consume(S), Ie) : S === 45 && o === 2 ? (e.consume(S), w) : Z(S);
  }
  function Ie(S) {
    return S === null || Ae(S) ? (e.exit("htmlFlowData"), ke(S)) : (e.consume(S), Ie);
  }
  function ke(S) {
    return e.exit("htmlFlow"), t(S);
  }
}
function nA(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return Ae(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), a) : r(l);
  }
  function a(l) {
    return u.parser.lazy[u.now().line] ? r(l) : t(l);
  }
}
function rA(e, t, r) {
  return u;
  function u(o) {
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), e.attempt(Ws, t, r);
  }
}
const iA = {
  name: "htmlText",
  tokenize: uA
};
function uA(e, t, r) {
  const u = this;
  let o, a, l;
  return c;
  function c(w) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(w), f;
  }
  function f(w) {
    return w === 33 ? (e.consume(w), h) : w === 47 ? (e.consume(w), U) : w === 63 ? (e.consume(w), k) : ir(w) ? (e.consume(w), D) : r(w);
  }
  function h(w) {
    return w === 45 ? (e.consume(w), p) : w === 91 ? (e.consume(w), a = 0, E) : ir(w) ? (e.consume(w), W) : r(w);
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
  function E(w) {
    const Ie = "CDATA[";
    return w === Ie.charCodeAt(a++) ? (e.consume(w), a === Ie.length ? A : E) : r(w);
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
    return w === null ? r(w) : w === 63 ? (e.consume(w), M) : Ae(w) ? (l = k, we(w)) : (e.consume(w), k);
  }
  function M(w) {
    return w === 62 ? xe(w) : k(w);
  }
  function U(w) {
    return ir(w) ? (e.consume(w), G) : r(w);
  }
  function G(w) {
    return w === 45 || xn(w) ? (e.consume(w), G) : j(w);
  }
  function j(w) {
    return Ae(w) ? (l = j, we(w)) : Qe(w) ? (e.consume(w), j) : xe(w);
  }
  function D(w) {
    return w === 45 || xn(w) ? (e.consume(w), D) : w === 47 || w === 62 || an(w) ? Y(w) : r(w);
  }
  function Y(w) {
    return w === 47 ? (e.consume(w), xe) : w === 58 || w === 95 || ir(w) ? (e.consume(w), $) : Ae(w) ? (l = Y, we(w)) : Qe(w) ? (e.consume(w), Y) : xe(w);
  }
  function $(w) {
    return w === 45 || w === 46 || w === 58 || w === 95 || xn(w) ? (e.consume(w), $) : Q(w);
  }
  function Q(w) {
    return w === 61 ? (e.consume(w), Z) : Ae(w) ? (l = Q, we(w)) : Qe(w) ? (e.consume(w), Q) : Y(w);
  }
  function Z(w) {
    return w === null || w === 60 || w === 61 || w === 62 || w === 96 ? r(w) : w === 34 || w === 39 ? (e.consume(w), o = w, K) : Ae(w) ? (l = Z, we(w)) : Qe(w) ? (e.consume(w), Z) : (e.consume(w), fe);
  }
  function K(w) {
    return w === o ? (e.consume(w), o = void 0, ie) : w === null ? r(w) : Ae(w) ? (l = K, we(w)) : (e.consume(w), K);
  }
  function fe(w) {
    return w === null || w === 34 || w === 39 || w === 60 || w === 61 || w === 96 ? r(w) : w === 47 || w === 62 || an(w) ? Y(w) : (e.consume(w), fe);
  }
  function ie(w) {
    return w === 47 || w === 62 || an(w) ? Y(w) : r(w);
  }
  function xe(w) {
    return w === 62 ? (e.consume(w), e.exit("htmlTextData"), e.exit("htmlText"), t) : r(w);
  }
  function we(w) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(w), e.exit("lineEnding"), Re;
  }
  function Re(w) {
    return Qe(w) ? ft(e, Je, "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(w) : Je(w);
  }
  function Je(w) {
    return e.enter("htmlTextData"), l(w);
  }
}
const Pc = {
  name: "labelEnd",
  resolveAll: lA,
  resolveTo: cA,
  tokenize: fA
}, oA = {
  tokenize: dA
}, sA = {
  tokenize: hA
}, aA = {
  tokenize: pA
};
function lA(e) {
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
function cA(e, t) {
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
  return c = [["enter", f, t], ["enter", h, t]], c = Ln(c, e.slice(a + 1, a + u + 3)), c = Ln(c, [["enter", p, t]]), c = Ln(c, Rc(t.parser.constructs.insideSpan.null, e.slice(a + u + 4, l - 3), t)), c = Ln(c, [["exit", p, t], e[l - 2], e[l - 1], ["exit", h, t]]), c = Ln(c, e.slice(l + 1)), c = Ln(c, [["exit", f, t]]), ur(e, a, e.length, c), e;
}
function fA(e, t, r) {
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
    return v === 40 ? e.attempt(oA, p, l ? p : g)(v) : v === 91 ? e.attempt(sA, p, l ? h : g)(v) : l ? p(v) : g(v);
  }
  function h(v) {
    return e.attempt(aA, p, g)(v);
  }
  function p(v) {
    return t(v);
  }
  function g(v) {
    return a._balanced = !0, r(v);
  }
}
function dA(e, t, r) {
  return u;
  function u(g) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(g), e.exit("resourceMarker"), o;
  }
  function o(g) {
    return an(g) ? Hu(e, a)(g) : a(g);
  }
  function a(g) {
    return g === 41 ? p(g) : jp(e, l, c, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(g);
  }
  function l(g) {
    return an(g) ? Hu(e, f)(g) : p(g);
  }
  function c(g) {
    return r(g);
  }
  function f(g) {
    return g === 34 || g === 39 || g === 40 ? qp(e, h, r, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(g) : p(g);
  }
  function h(g) {
    return an(g) ? Hu(e, p)(g) : p(g);
  }
  function p(g) {
    return g === 41 ? (e.enter("resourceMarker"), e.consume(g), e.exit("resourceMarker"), e.exit("resource"), t) : r(g);
  }
}
function hA(e, t, r) {
  const u = this;
  return o;
  function o(c) {
    return Qp.call(u, e, a, l, "reference", "referenceMarker", "referenceString")(c);
  }
  function a(c) {
    return u.parser.defined.includes(Zi(u.sliceSerialize(u.events[u.events.length - 1][1]).slice(1, -1))) ? t(c) : r(c);
  }
  function l(c) {
    return r(c);
  }
}
function pA(e, t, r) {
  return u;
  function u(a) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), o;
  }
  function o(a) {
    return a === 93 ? (e.enter("referenceMarker"), e.consume(a), e.exit("referenceMarker"), e.exit("reference"), t) : r(a);
  }
}
const gA = {
  name: "labelStartImage",
  resolveAll: Pc.resolveAll,
  tokenize: mA
};
function mA(e, t, r) {
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
const bA = {
  name: "labelStartLink",
  resolveAll: Pc.resolveAll,
  tokenize: yA
};
function yA(e, t, r) {
  const u = this;
  return o;
  function o(l) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(l), e.exit("labelMarker"), e.exit("labelLink"), a;
  }
  function a(l) {
    return l === 94 && "_hiddenFootnoteSupport" in u.parser.constructs ? r(l) : t(l);
  }
}
const El = {
  name: "lineEnding",
  tokenize: vA
};
function vA(e, t) {
  return r;
  function r(u) {
    return e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), ft(e, t, "linePrefix");
  }
}
const Cs = {
  name: "thematicBreak",
  tokenize: IA
};
function IA(e, t, r) {
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
    return h === o ? (e.consume(h), u++, f) : (e.exit("thematicBreakSequence"), Qe(h) ? ft(e, c, "whitespace")(h) : c(h));
  }
}
const on = {
  continuation: {
    tokenize: wA
  },
  exit: EA,
  name: "list",
  tokenize: AA
}, CA = {
  partial: !0,
  tokenize: FA
}, xA = {
  partial: !0,
  tokenize: SA
};
function AA(e, t, r) {
  const u = this, o = u.events[u.events.length - 1];
  let a = o && o[1].type === "linePrefix" ? o[2].sliceSerialize(o[1], !0).length : 0, l = 0;
  return c;
  function c(b) {
    const E = u.containerState.type || (b === 42 || b === 43 || b === 45 ? "listUnordered" : "listOrdered");
    if (E === "listUnordered" ? !u.containerState.marker || b === u.containerState.marker : Jl(b)) {
      if (u.containerState.type || (u.containerState.type = E, e.enter(E, {
        _container: !0
      })), E === "listUnordered")
        return e.enter("listItemPrefix"), b === 42 || b === 45 ? e.check(Cs, r, h)(b) : h(b);
      if (!u.interrupt || b === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), f(b);
    }
    return r(b);
  }
  function f(b) {
    return Jl(b) && ++l < 10 ? (e.consume(b), f) : (!u.interrupt || l < 2) && (u.containerState.marker ? b === u.containerState.marker : b === 41 || b === 46) ? (e.exit("listItemValue"), h(b)) : r(b);
  }
  function h(b) {
    return e.enter("listItemMarker"), e.consume(b), e.exit("listItemMarker"), u.containerState.marker = u.containerState.marker || b, e.check(
      Ws,
      // Can’t be empty when interrupting.
      u.interrupt ? r : p,
      e.attempt(CA, v, g)
    );
  }
  function p(b) {
    return u.containerState.initialBlankLine = !0, a++, v(b);
  }
  function g(b) {
    return Qe(b) ? (e.enter("listItemPrefixWhitespace"), e.consume(b), e.exit("listItemPrefixWhitespace"), v) : r(b);
  }
  function v(b) {
    return u.containerState.size = a + u.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(b);
  }
}
function wA(e, t, r) {
  const u = this;
  return u.containerState._closeFlow = void 0, e.check(Ws, o, a);
  function o(c) {
    return u.containerState.furtherBlankLines = u.containerState.furtherBlankLines || u.containerState.initialBlankLine, ft(e, t, "listItemIndent", u.containerState.size + 1)(c);
  }
  function a(c) {
    return u.containerState.furtherBlankLines || !Qe(c) ? (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, l(c)) : (u.containerState.furtherBlankLines = void 0, u.containerState.initialBlankLine = void 0, e.attempt(xA, t, l)(c));
  }
  function l(c) {
    return u.containerState._closeFlow = !0, u.interrupt = void 0, ft(e, e.attempt(on, t, r), "linePrefix", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(c);
  }
}
function SA(e, t, r) {
  const u = this;
  return ft(e, o, "listItemIndent", u.containerState.size + 1);
  function o(a) {
    const l = u.events[u.events.length - 1];
    return l && l[1].type === "listItemIndent" && l[2].sliceSerialize(l[1], !0).length === u.containerState.size ? t(a) : r(a);
  }
}
function EA(e) {
  e.exit(this.containerState.type);
}
function FA(e, t, r) {
  const u = this;
  return ft(e, o, "listItemPrefixWhitespace", u.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function o(a) {
    const l = u.events[u.events.length - 1];
    return !Qe(a) && l && l[1].type === "listItemPrefixWhitespace" ? t(a) : r(a);
  }
}
const ph = {
  name: "setextUnderline",
  resolveTo: RA,
  tokenize: PA
};
function RA(e, t) {
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
function PA(e, t, r) {
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
    return h === o ? (e.consume(h), c) : (e.exit("setextHeadingLineSequence"), Qe(h) ? ft(e, f, "lineSuffix")(h) : f(h));
  }
  function f(h) {
    return h === null || Ae(h) ? (e.exit("setextHeadingLine"), t(h)) : r(h);
  }
}
const OA = {
  tokenize: _A
};
function _A(e) {
  const t = this, r = e.attempt(
    // Try to parse a blank line.
    Ws,
    u,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, o, ft(e, e.attempt(this.parser.constructs.flow, o, e.attempt(Lx, o)), "linePrefix"))
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
const TA = {
  resolveAll: Kp()
}, BA = $p("string"), GA = $p("text");
function $p(e) {
  return {
    resolveAll: Kp(e === "text" ? kA : void 0),
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
function Kp(e) {
  return t;
  function t(r, u) {
    let o = -1, a;
    for (; ++o <= r.length; )
      a === void 0 ? r[o] && r[o][1].type === "data" && (a = o, o++) : (!r[o] || r[o][1].type !== "data") && (o !== a + 2 && (r[a][1].end = r[o - 1][1].end, r.splice(a + 2, o - a - 2), o = a + 2), a = void 0);
    return e ? e(r, u) : r;
  }
}
function kA(e, t) {
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
const LA = {
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
  62: Zp
}, DA = {
  91: Wx
}, MA = {
  [-2]: Sl,
  [-1]: Sl,
  32: Sl
}, NA = {
  35: Jx,
  42: Cs,
  45: [ph, Cs],
  60: qx,
  61: ph,
  95: Cs,
  96: dh,
  126: dh
}, VA = {
  38: Jp,
  92: Yp
}, WA = {
  [-5]: El,
  [-4]: El,
  [-3]: El,
  33: gA,
  38: Jp,
  42: Ul,
  60: [bx, iA],
  91: bA,
  92: [Zx, Yp],
  93: Pc,
  95: Ul,
  96: Ox
}, XA = {
  null: [Ul, TA]
}, HA = {
  null: [42, 95]
}, zA = {
  null: []
}, ZA = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: HA,
  contentInitial: DA,
  disable: zA,
  document: LA,
  flow: NA,
  flowInitial: MA,
  insideSpan: XA,
  string: VA,
  text: WA
}, Symbol.toStringTag, { value: "Module" }));
function YA(e, t, r) {
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
    exit: M,
    interrupt: j(G, {
      interrupt: !0
    })
  }, h = {
    code: null,
    containerState: {},
    defineSkip: A,
    events: [],
    now: E,
    parser: e,
    previous: null,
    sliceSerialize: v,
    sliceStream: b,
    write: g
  };
  let p = t.tokenize.call(h, f);
  return t.resolveAll && a.push(t), h;
  function g(Q) {
    return l = Ln(l, Q), F(), l[l.length - 1] !== null ? [] : (D(t, 0), h.events = Rc(a, h.events, h), h.events);
  }
  function v(Q, Z) {
    return UA(b(Q), Z);
  }
  function b(Q) {
    return JA(l, Q);
  }
  function E() {
    const {
      _bufferIndex: Q,
      _index: Z,
      line: K,
      column: fe,
      offset: ie
    } = u;
    return {
      _bufferIndex: Q,
      _index: Z,
      line: K,
      column: fe,
      offset: ie
    };
  }
  function A(Q) {
    o[Q.line] = Q.column, $();
  }
  function F() {
    let Q;
    for (; u._index < l.length; ) {
      const Z = l[u._index];
      if (typeof Z == "string")
        for (Q = u._index, u._bufferIndex < 0 && (u._bufferIndex = 0); u._index === Q && u._bufferIndex < Z.length; )
          P(Z.charCodeAt(u._bufferIndex));
      else
        P(Z);
    }
  }
  function P(Q) {
    p = p(Q);
  }
  function W(Q) {
    Ae(Q) ? (u.line++, u.column = 1, u.offset += Q === -3 ? 2 : 1, $()) : Q !== -1 && (u.column++, u.offset++), u._bufferIndex < 0 ? u._index++ : (u._bufferIndex++, u._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    l[u._index].length && (u._bufferIndex = -1, u._index++)), h.previous = Q;
  }
  function k(Q, Z) {
    const K = Z || {};
    return K.type = Q, K.start = E(), h.events.push(["enter", K, h]), c.push(K), K;
  }
  function M(Q) {
    const Z = c.pop();
    return Z.end = E(), h.events.push(["exit", Z, h]), Z;
  }
  function U(Q, Z) {
    D(Q, Z.from);
  }
  function G(Q, Z) {
    Z.restore();
  }
  function j(Q, Z) {
    return K;
    function K(fe, ie, xe) {
      let we, Re, Je, w;
      return Array.isArray(fe) ? (
        /* c8 ignore next 1 */
        ke(fe)
      ) : "tokenize" in fe ? (
        // Looks like a construct.
        ke([
          /** @type {Construct} */
          fe
        ])
      ) : Ie(fe);
      function Ie(Se) {
        return At;
        function At(Me) {
          const mt = Me !== null && Se[Me], Nt = Me !== null && Se.null, Gt = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(mt) ? mt : mt ? [mt] : [],
            ...Array.isArray(Nt) ? Nt : Nt ? [Nt] : []
          ];
          return ke(Gt)(Me);
        }
      }
      function ke(Se) {
        return we = Se, Re = 0, Se.length === 0 ? xe : S(Se[Re]);
      }
      function S(Se) {
        return At;
        function At(Me) {
          return w = Y(), Je = Se, Se.partial || (h.currentConstruct = Se), Se.name && h.parser.constructs.disable.null.includes(Se.name) ? le() : Se.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            Z ? Object.assign(Object.create(h), Z) : h,
            f,
            Ye,
            le
          )(Me);
        }
      }
      function Ye(Se) {
        return Q(Je, w), ie;
      }
      function le(Se) {
        return w.restore(), ++Re < we.length ? S(we[Re]) : xe;
      }
    }
  }
  function D(Q, Z) {
    Q.resolveAll && !a.includes(Q) && a.push(Q), Q.resolve && ur(h.events, Z, h.events.length - Z, Q.resolve(h.events.slice(Z), h)), Q.resolveTo && (h.events = Q.resolveTo(h.events, h));
  }
  function Y() {
    const Q = E(), Z = h.previous, K = h.currentConstruct, fe = h.events.length, ie = Array.from(c);
    return {
      from: fe,
      restore: xe
    };
    function xe() {
      u = Q, h.previous = Z, h.currentConstruct = K, h.events.length = fe, c = ie, $();
    }
  }
  function $() {
    u.line in o && u.column < 2 && (u.column = o[u.line], u.offset += o[u.line] - 1);
  }
}
function JA(e, t) {
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
function UA(e, t) {
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
function jA(e) {
  const u = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      nx([ZA, ...(e || {}).extensions || []])
    ),
    content: o(cx),
    defined: [],
    document: o(dx),
    flow: o(OA),
    lazy: {},
    string: o(BA),
    text: o(GA)
  };
  return u;
  function o(a) {
    return l;
    function l(c) {
      return YA(u, a, c);
    }
  }
}
function QA(e) {
  for (; !Up(e); )
    ;
  return e;
}
const gh = /[\0\t\n\r]/g;
function qA() {
  let e = 1, t = "", r = !0, u;
  return o;
  function o(a, l, c) {
    const f = [];
    let h, p, g, v, b;
    for (a = t + (typeof a == "string" ? a.toString() : new TextDecoder(l || void 0).decode(a)), g = 0, t = "", r && (a.charCodeAt(0) === 65279 && g++, r = void 0); g < a.length; ) {
      if (gh.lastIndex = g, h = gh.exec(a), v = h && h.index !== void 0 ? h.index : a.length, b = a.charCodeAt(v), !h) {
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
const $A = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function KA(e) {
  return e.replace($A, ew);
}
function ew(e, t, r) {
  if (t)
    return t;
  if (r.charCodeAt(0) === 35) {
    const o = r.charCodeAt(1), a = o === 120 || o === 88;
    return zp(r.slice(a ? 2 : 1), a ? 16 : 10);
  }
  return Fc(r) || e;
}
const eg = {}.hasOwnProperty;
function tw(e, t, r) {
  return typeof t != "string" && (r = t, t = void 0), nw(r)(QA(jA(r).document().write(qA()(e, t, !0))));
}
function nw(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: a(Ot),
      autolinkProtocol: Y,
      autolinkEmail: Y,
      atxHeading: a(re),
      blockQuote: a(Nt),
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
      definition: a(Mn),
      definitionDestinationString: l,
      definitionLabelString: l,
      definitionTitleString: l,
      emphasis: a(ee),
      hardBreakEscape: a(he),
      hardBreakTrailing: a(he),
      htmlFlow: a(Ee, l),
      htmlFlowData: Y,
      htmlText: a(Ee, l),
      htmlTextData: Y,
      image: a(at),
      label: l,
      link: a(Ot),
      listItem: a(Lt),
      listItemValue: v,
      listOrdered: a(An, g),
      listUnordered: a(An),
      paragraph: a(et),
      reference: S,
      referenceString: l,
      resourceDestinationString: l,
      resourceTitleString: l,
      setextHeading: a(re),
      strong: a(Ue),
      thematicBreak: a(qe)
    },
    exit: {
      atxHeading: f(),
      atxHeadingSequence: U,
      autolink: f(),
      autolinkEmail: mt,
      autolinkProtocol: Me,
      blockQuote: f(),
      characterEscapeValue: $,
      characterReferenceMarkerHexadecimal: le,
      characterReferenceMarkerNumeric: le,
      characterReferenceValue: Se,
      characterReference: At,
      codeFenced: f(F),
      codeFencedFence: A,
      codeFencedFenceInfo: b,
      codeFencedFenceMeta: E,
      codeFlowValue: $,
      codeIndented: f(P),
      codeText: f(ie),
      codeTextData: $,
      data: $,
      definition: f(),
      definitionDestinationString: M,
      definitionLabelString: W,
      definitionTitleString: k,
      emphasis: f(),
      hardBreakEscape: f(Z),
      hardBreakTrailing: f(Z),
      htmlFlow: f(K),
      htmlFlowData: $,
      htmlText: f(fe),
      htmlTextData: $,
      image: f(we),
      label: Je,
      labelText: Re,
      lineEnding: Q,
      link: f(xe),
      listItem: f(),
      listOrdered: f(),
      listUnordered: f(),
      paragraph: f(),
      referenceString: Ye,
      resourceDestinationString: w,
      resourceTitleString: Ie,
      resource: ke,
      setextHeading: f(D),
      setextHeadingLineSequence: j,
      setextHeadingText: G,
      strong: f(),
      thematicBreak: f()
    }
  };
  tg(t, (e || {}).mdastExtensions || []);
  const r = {};
  return u;
  function u(N) {
    let te = {
      type: "root",
      children: []
    };
    const pe = {
      stack: [te],
      tokenStack: [],
      config: t,
      enter: c,
      exit: h,
      buffer: l,
      resume: p,
      data: r
    }, Te = [];
    let Be = -1;
    for (; ++Be < N.length; )
      if (N[Be][1].type === "listOrdered" || N[Be][1].type === "listUnordered")
        if (N[Be][0] === "enter")
          Te.push(Be);
        else {
          const _t = Te.pop();
          Be = o(N, _t, Be);
        }
    for (Be = -1; ++Be < N.length; ) {
      const _t = t[N[Be][0]];
      eg.call(_t, N[Be][1].type) && _t[N[Be][1].type].call(Object.assign({
        sliceSerialize: N[Be][2].sliceSerialize
      }, pe), N[Be][1]);
    }
    if (pe.tokenStack.length > 0) {
      const _t = pe.tokenStack[pe.tokenStack.length - 1];
      (_t[1] || mh).call(pe, void 0, _t[0]);
    }
    for (te.position = {
      start: kr(N.length > 0 ? N[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: kr(N.length > 0 ? N[N.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, Be = -1; ++Be < t.transforms.length; )
      te = t.transforms[Be](te) || te;
    return te;
  }
  function o(N, te, pe) {
    let Te = te - 1, Be = -1, _t = !1, $t, Zt, wn, Kt;
    for (; ++Te <= pe; ) {
      const wt = N[Te];
      switch (wt[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          wt[0] === "enter" ? Be++ : Be--, Kt = void 0;
          break;
        }
        case "lineEndingBlank": {
          wt[0] === "enter" && ($t && !Kt && !Be && !wn && (wn = Te), Kt = void 0);
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
      if (!Be && wt[0] === "enter" && wt[1].type === "listItemPrefix" || Be === -1 && wt[0] === "exit" && (wt[1].type === "listUnordered" || wt[1].type === "listOrdered")) {
        if ($t) {
          let fn = Te;
          for (Zt = void 0; fn--; ) {
            const dn = N[fn];
            if (dn[1].type === "lineEnding" || dn[1].type === "lineEndingBlank") {
              if (dn[0] === "exit") continue;
              Zt && (N[Zt][1].type = "lineEndingBlank", _t = !0), dn[1].type = "lineEnding", Zt = fn;
            } else if (!(dn[1].type === "linePrefix" || dn[1].type === "blockQuotePrefix" || dn[1].type === "blockQuotePrefixWhitespace" || dn[1].type === "blockQuoteMarker" || dn[1].type === "listItemIndent")) break;
          }
          wn && (!Zt || wn < Zt) && ($t._spread = !0), $t.end = Object.assign({}, Zt ? N[Zt][1].start : wt[1].end), N.splice(Zt || Te, 0, ["exit", $t, wt[2]]), Te++, pe++;
        }
        if (wt[1].type === "listItemPrefix") {
          const fn = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, wt[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          $t = fn, N.splice(Te, 0, ["enter", fn, wt[2]]), Te++, pe++, wn = void 0, Kt = !0;
        }
      }
    }
    return N[te][1]._spread = _t, pe;
  }
  function a(N, te) {
    return pe;
    function pe(Te) {
      c.call(this, N(Te), Te), te && te.call(this, Te);
    }
  }
  function l() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function c(N, te, pe) {
    this.stack[this.stack.length - 1].children.push(N), this.stack.push(N), this.tokenStack.push([te, pe || void 0]), N.position = {
      start: kr(te.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function f(N) {
    return te;
    function te(pe) {
      N && N.call(this, pe), h.call(this, pe);
    }
  }
  function h(N, te) {
    const pe = this.stack.pop(), Te = this.tokenStack.pop();
    if (Te)
      Te[0].type !== N.type && (te ? te.call(this, N, Te[0]) : (Te[1] || mh).call(this, N, Te[0]));
    else throw new Error("Cannot close `" + N.type + "` (" + Xu({
      start: N.start,
      end: N.end
    }) + "): it’s not open");
    pe.position.end = kr(N.end);
  }
  function p() {
    return ex(this.stack.pop());
  }
  function g() {
    this.data.expectingFirstListItemValue = !0;
  }
  function v(N) {
    if (this.data.expectingFirstListItemValue) {
      const te = this.stack[this.stack.length - 2];
      te.start = Number.parseInt(this.sliceSerialize(N), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function b() {
    const N = this.resume(), te = this.stack[this.stack.length - 1];
    te.lang = N;
  }
  function E() {
    const N = this.resume(), te = this.stack[this.stack.length - 1];
    te.meta = N;
  }
  function A() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function F() {
    const N = this.resume(), te = this.stack[this.stack.length - 1];
    te.value = N.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function P() {
    const N = this.resume(), te = this.stack[this.stack.length - 1];
    te.value = N.replace(/(\r?\n|\r)$/g, "");
  }
  function W(N) {
    const te = this.resume(), pe = this.stack[this.stack.length - 1];
    pe.label = te, pe.identifier = Zi(this.sliceSerialize(N)).toLowerCase();
  }
  function k() {
    const N = this.resume(), te = this.stack[this.stack.length - 1];
    te.title = N;
  }
  function M() {
    const N = this.resume(), te = this.stack[this.stack.length - 1];
    te.url = N;
  }
  function U(N) {
    const te = this.stack[this.stack.length - 1];
    if (!te.depth) {
      const pe = this.sliceSerialize(N).length;
      te.depth = pe;
    }
  }
  function G() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function j(N) {
    const te = this.stack[this.stack.length - 1];
    te.depth = this.sliceSerialize(N).codePointAt(0) === 61 ? 1 : 2;
  }
  function D() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function Y(N) {
    const pe = this.stack[this.stack.length - 1].children;
    let Te = pe[pe.length - 1];
    (!Te || Te.type !== "text") && (Te = lt(), Te.position = {
      start: kr(N.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, pe.push(Te)), this.stack.push(Te);
  }
  function $(N) {
    const te = this.stack.pop();
    te.value += this.sliceSerialize(N), te.position.end = kr(N.end);
  }
  function Q(N) {
    const te = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const pe = te.children[te.children.length - 1];
      pe.position.end = kr(N.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(te.type) && (Y.call(this, N), $.call(this, N));
  }
  function Z() {
    this.data.atHardBreak = !0;
  }
  function K() {
    const N = this.resume(), te = this.stack[this.stack.length - 1];
    te.value = N;
  }
  function fe() {
    const N = this.resume(), te = this.stack[this.stack.length - 1];
    te.value = N;
  }
  function ie() {
    const N = this.resume(), te = this.stack[this.stack.length - 1];
    te.value = N;
  }
  function xe() {
    const N = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const te = this.data.referenceType || "shortcut";
      N.type += "Reference", N.referenceType = te, delete N.url, delete N.title;
    } else
      delete N.identifier, delete N.label;
    this.data.referenceType = void 0;
  }
  function we() {
    const N = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const te = this.data.referenceType || "shortcut";
      N.type += "Reference", N.referenceType = te, delete N.url, delete N.title;
    } else
      delete N.identifier, delete N.label;
    this.data.referenceType = void 0;
  }
  function Re(N) {
    const te = this.sliceSerialize(N), pe = this.stack[this.stack.length - 2];
    pe.label = KA(te), pe.identifier = Zi(te).toLowerCase();
  }
  function Je() {
    const N = this.stack[this.stack.length - 1], te = this.resume(), pe = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, pe.type === "link") {
      const Te = N.children;
      pe.children = Te;
    } else
      pe.alt = te;
  }
  function w() {
    const N = this.resume(), te = this.stack[this.stack.length - 1];
    te.url = N;
  }
  function Ie() {
    const N = this.resume(), te = this.stack[this.stack.length - 1];
    te.title = N;
  }
  function ke() {
    this.data.inReference = void 0;
  }
  function S() {
    this.data.referenceType = "collapsed";
  }
  function Ye(N) {
    const te = this.resume(), pe = this.stack[this.stack.length - 1];
    pe.label = te, pe.identifier = Zi(this.sliceSerialize(N)).toLowerCase(), this.data.referenceType = "full";
  }
  function le(N) {
    this.data.characterReferenceType = N.type;
  }
  function Se(N) {
    const te = this.sliceSerialize(N), pe = this.data.characterReferenceType;
    let Te;
    pe ? (Te = zp(te, pe === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : Te = Fc(te);
    const Be = this.stack[this.stack.length - 1];
    Be.value += Te;
  }
  function At(N) {
    const te = this.stack.pop();
    te.position.end = kr(N.end);
  }
  function Me(N) {
    $.call(this, N);
    const te = this.stack[this.stack.length - 1];
    te.url = this.sliceSerialize(N);
  }
  function mt(N) {
    $.call(this, N);
    const te = this.stack[this.stack.length - 1];
    te.url = "mailto:" + this.sliceSerialize(N);
  }
  function Nt() {
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
  function Mn() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function ee() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function re() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function he() {
    return {
      type: "break"
    };
  }
  function Ee() {
    return {
      type: "html",
      value: ""
    };
  }
  function at() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Ot() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function An(N) {
    return {
      type: "list",
      ordered: N.type === "listOrdered",
      start: null,
      spread: N._spread,
      children: []
    };
  }
  function Lt(N) {
    return {
      type: "listItem",
      spread: N._spread,
      checked: null,
      children: []
    };
  }
  function et() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Ue() {
    return {
      type: "strong",
      children: []
    };
  }
  function lt() {
    return {
      type: "text",
      value: ""
    };
  }
  function qe() {
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
function tg(e, t) {
  let r = -1;
  for (; ++r < t.length; ) {
    const u = t[r];
    Array.isArray(u) ? tg(e, u) : rw(e, u);
  }
}
function rw(e, t) {
  let r;
  for (r in t)
    if (eg.call(t, r))
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
function mh(e, t) {
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
function iw(e) {
  const t = this;
  t.parser = r;
  function r(u) {
    return tw(u, {
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
function uw(e, t) {
  const r = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function ow(e, t) {
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
function aw(e, t) {
  const r = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function lw(e, t) {
  const r = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function cw(e, t) {
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
function fw(e, t) {
  const r = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function dw(e, t) {
  if (e.options.allowDangerousHtml) {
    const r = { type: "raw", value: t.value };
    return e.patch(t, r), e.applyData(t, r);
  }
}
function ng(e, t) {
  const r = t.referenceType;
  let u = "]";
  if (r === "collapsed" ? u += "[]" : r === "full" && (u += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + u }];
  const o = e.all(t), a = o[0];
  a && a.type === "text" ? a.value = "[" + a.value : o.unshift({ type: "text", value: "[" });
  const l = o[o.length - 1];
  return l && l.type === "text" ? l.value += u : o.push({ type: "text", value: u }), o;
}
function hw(e, t) {
  const r = String(t.identifier).toUpperCase(), u = e.definitionById.get(r);
  if (!u)
    return ng(e, t);
  const o = { src: lu(u.url || ""), alt: t.alt };
  u.title !== null && u.title !== void 0 && (o.title = u.title);
  const a = { type: "element", tagName: "img", properties: o, children: [] };
  return e.patch(t, a), e.applyData(t, a);
}
function pw(e, t) {
  const r = { src: lu(t.url) };
  t.alt !== null && t.alt !== void 0 && (r.alt = t.alt), t.title !== null && t.title !== void 0 && (r.title = t.title);
  const u = { type: "element", tagName: "img", properties: r, children: [] };
  return e.patch(t, u), e.applyData(t, u);
}
function gw(e, t) {
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
function mw(e, t) {
  const r = String(t.identifier).toUpperCase(), u = e.definitionById.get(r);
  if (!u)
    return ng(e, t);
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
function bw(e, t) {
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
function yw(e, t, r) {
  const u = e.all(t), o = r ? vw(r) : rg(t), a = {}, l = [];
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
function vw(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const r = e.children;
    let u = -1;
    for (; !t && ++u < r.length; )
      t = rg(r[u]);
  }
  return t;
}
function rg(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Iw(e, t) {
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
function Cw(e, t) {
  const r = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function xw(e, t) {
  const r = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, r), e.applyData(t, r);
}
function Aw(e, t) {
  const r = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function ww(e, t) {
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
    }, c = Ac(t.children[1]), f = Dp(t.children[t.children.length - 1]);
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
function Sw(e, t, r) {
  const u = r ? r.children : void 0, a = (u ? u.indexOf(t) : 1) === 0 ? "th" : "td", l = r && r.type === "table" ? r.align : void 0, c = l ? l.length : t.children.length;
  let f = -1;
  const h = [];
  for (; ++f < c; ) {
    const g = t.children[f], v = {}, b = l ? l[f] : void 0;
    b && (v.align = b);
    let E = { type: "element", tagName: a, properties: v, children: [] };
    g && (E.children = e.all(g), e.patch(g, E), E = e.applyData(g, E)), h.push(E);
  }
  const p = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(h, !0)
  };
  return e.patch(t, p), e.applyData(t, p);
}
function Ew(e, t) {
  const r = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
const bh = 9, yh = 32;
function Fw(e) {
  const t = String(e), r = /\r?\n|\r/g;
  let u = r.exec(t), o = 0;
  const a = [];
  for (; u; )
    a.push(
      vh(t.slice(o, u.index), o > 0, !0),
      u[0]
    ), o = u.index + u[0].length, u = r.exec(t);
  return a.push(vh(t.slice(o), o > 0, !1)), a.join("");
}
function vh(e, t, r) {
  let u = 0, o = e.length;
  if (t) {
    let a = e.codePointAt(u);
    for (; a === bh || a === yh; )
      u++, a = e.codePointAt(u);
  }
  if (r) {
    let a = e.codePointAt(o - 1);
    for (; a === bh || a === yh; )
      o--, a = e.codePointAt(o - 1);
  }
  return o > u ? e.slice(u, o) : "";
}
function Rw(e, t) {
  const r = { type: "text", value: Fw(String(t.value)) };
  return e.patch(t, r), e.applyData(t, r);
}
function Pw(e, t) {
  const r = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, r), e.applyData(t, r);
}
const Ow = {
  blockquote: uw,
  break: ow,
  code: sw,
  delete: aw,
  emphasis: lw,
  footnoteReference: cw,
  heading: fw,
  html: dw,
  imageReference: hw,
  image: pw,
  inlineCode: gw,
  linkReference: mw,
  link: bw,
  listItem: yw,
  list: Iw,
  paragraph: Cw,
  // @ts-expect-error: root is different, but hard to type.
  root: xw,
  strong: Aw,
  table: ww,
  tableCell: Ew,
  tableRow: Sw,
  text: Rw,
  thematicBreak: Pw,
  toml: ps,
  yaml: ps,
  definition: ps,
  footnoteDefinition: ps
};
function ps() {
}
const ig = -1, Xs = 0, zu = 1, Ss = 2, Oc = 3, _c = 4, Tc = 5, Bc = 6, ug = 7, og = 8, Ih = typeof self == "object" ? self : globalThis, _w = (e, t) => {
  const r = (o, a) => (e.set(a, o), o), u = (o) => {
    if (e.has(o))
      return e.get(o);
    const [a, l] = t[o];
    switch (a) {
      case Xs:
      case ig:
        return r(l, o);
      case zu: {
        const c = r([], o);
        for (const f of l)
          c.push(u(f));
        return c;
      }
      case Ss: {
        const c = r({}, o);
        for (const [f, h] of l)
          c[u(f)] = u(h);
        return c;
      }
      case Oc:
        return r(new Date(l), o);
      case _c: {
        const { source: c, flags: f } = l;
        return r(new RegExp(c, f), o);
      }
      case Tc: {
        const c = r(/* @__PURE__ */ new Map(), o);
        for (const [f, h] of l)
          c.set(u(f), u(h));
        return c;
      }
      case Bc: {
        const c = r(/* @__PURE__ */ new Set(), o);
        for (const f of l)
          c.add(u(f));
        return c;
      }
      case ug: {
        const { name: c, message: f } = l;
        return r(new Ih[c](f), o);
      }
      case og:
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
    return r(new Ih[a](l), o);
  };
  return u;
}, Ch = (e) => _w(/* @__PURE__ */ new Map(), e)(0), Xi = "", { toString: Tw } = {}, { keys: Bw } = Object, Du = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Xs, t];
  const r = Tw.call(e).slice(8, -1);
  switch (r) {
    case "Array":
      return [zu, Xi];
    case "Object":
      return [Ss, Xi];
    case "Date":
      return [Oc, Xi];
    case "RegExp":
      return [_c, Xi];
    case "Map":
      return [Tc, Xi];
    case "Set":
      return [Bc, Xi];
    case "DataView":
      return [zu, r];
  }
  return r.includes("Array") ? [zu, r] : r.includes("Error") ? [ug, r] : [Ss, r];
}, gs = ([e, t]) => e === Xs && (t === "function" || t === "symbol"), Gw = (e, t, r, u) => {
  const o = (l, c) => {
    const f = u.push(l) - 1;
    return r.set(c, f), f;
  }, a = (l) => {
    if (r.has(l))
      return r.get(l);
    let [c, f] = Du(l);
    switch (c) {
      case Xs: {
        let p = l;
        switch (f) {
          case "bigint":
            c = og, p = l.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + f);
            p = null;
            break;
          case "undefined":
            return o([ig], l);
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
      case Ss: {
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
        for (const v of Bw(l))
          (e || !gs(Du(l[v]))) && p.push([a(v), a(l[v])]);
        return g;
      }
      case Oc:
        return o([c, l.toISOString()], l);
      case _c: {
        const { source: p, flags: g } = l;
        return o([c, { source: p, flags: g }], l);
      }
      case Tc: {
        const p = [], g = o([c, p], l);
        for (const [v, b] of l)
          (e || !(gs(Du(v)) || gs(Du(b)))) && p.push([a(v), a(b)]);
        return g;
      }
      case Bc: {
        const p = [], g = o([c, p], l);
        for (const v of l)
          (e || !gs(Du(v))) && p.push(a(v));
        return g;
      }
    }
    const { message: h } = l;
    return o([c, { name: f, message: h }], l);
  };
  return a;
}, xh = (e, { json: t, lossy: r } = {}) => {
  const u = [];
  return Gw(!(t || r), !!t, /* @__PURE__ */ new Map(), u)(e), u;
}, Es = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? Ch(xh(e, t)) : structuredClone(e)
) : (e, t) => Ch(xh(e, t));
function kw(e, t) {
  const r = [{ type: "text", value: "↩" }];
  return t > 1 && r.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), r;
}
function Lw(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Dw(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = e.options.footnoteBackContent || kw, u = e.options.footnoteBackLabel || Lw, o = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", l = e.options.footnoteLabelProperties || {
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
    const E = [], A = e.footnoteCounts.get(g);
    for (; A !== void 0 && ++b <= A; ) {
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
    const F = p[p.length - 1];
    if (F && F.type === "element" && F.tagName === "p") {
      const W = F.children[F.children.length - 1];
      W && W.type === "text" ? W.value += " " : F.children.push({ type: "text", value: " " }), F.children.push(...E);
    } else
      p.push(...E);
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
            ...Es(l),
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
      return Ww;
    if (typeof e == "function")
      return Hs(e);
    if (typeof e == "object")
      return Array.isArray(e) ? Mw(e) : Nw(e);
    if (typeof e == "string")
      return Vw(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function Mw(e) {
  const t = [];
  let r = -1;
  for (; ++r < e.length; )
    t[r] = sg(e[r]);
  return Hs(u);
  function u(...o) {
    let a = -1;
    for (; ++a < t.length; )
      if (t[a].apply(this, o)) return !0;
    return !1;
  }
}
function Nw(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Hs(r);
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
function Vw(e) {
  return Hs(t);
  function t(r) {
    return r && r.type === e;
  }
}
function Hs(e) {
  return t;
  function t(r, u, o) {
    return !!(Xw(r) && e.call(
      this,
      r,
      typeof u == "number" ? u : void 0,
      o || void 0
    ));
  }
}
function Ww() {
  return !0;
}
function Xw(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const ag = [], Hw = !0, Ah = !1, zw = "skip";
function Zw(e, t, r, u) {
  let o;
  typeof t == "function" && typeof r != "function" ? (u = r, r = t) : o = t;
  const a = sg(o), l = u ? -1 : 1;
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
      let b = ag, E, A, F;
      if ((!t || a(f, h, p[p.length - 1] || void 0)) && (b = Yw(r(f, p)), b[0] === Ah))
        return b;
      if ("children" in f && f.children) {
        const P = (
          /** @type {UnistParent} */
          f
        );
        if (P.children && b[0] !== zw)
          for (A = (u ? P.children.length : -1) + l, F = p.concat(P); A > -1 && A < P.children.length; ) {
            const W = P.children[A];
            if (E = c(W, A, F)(), E[0] === Ah)
              return E;
            A = typeof E[1] == "number" ? E[1] : A + l;
          }
      }
      return b;
    }
  }
}
function Yw(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [Hw, e] : e == null ? ag : [e];
}
function lg(e, t, r, u) {
  let o, a, l;
  typeof t == "function" ? (a = void 0, l = t, o = r) : (a = t, l = r, o = u), Zw(e, a, c, o);
  function c(f, h) {
    const p = h[h.length - 1], g = p ? p.children.indexOf(f) : void 0;
    return l(f, g, p);
  }
}
const jl = {}.hasOwnProperty, Jw = {};
function Uw(e, t) {
  const r = t || Jw, u = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), l = { ...Ow, ...r.handlers }, c = {
    all: h,
    applyData: Qw,
    definitionById: u,
    footnoteById: o,
    footnoteCounts: a,
    footnoteOrder: [],
    handlers: l,
    one: f,
    options: r,
    patch: jw,
    wrap: $w
  };
  return lg(e, function(p) {
    if (p.type === "definition" || p.type === "footnoteDefinition") {
      const g = p.type === "definition" ? u : o, v = String(p.identifier).toUpperCase();
      g.has(v) || g.set(v, p);
    }
  }), c;
  function f(p, g) {
    const v = p.type, b = c.handlers[v];
    if (jl.call(c.handlers, v) && b)
      return b(c, p, g);
    if (c.options.passThrough && c.options.passThrough.includes(v)) {
      if ("children" in p) {
        const { children: A, ...F } = p, P = Es(F);
        return P.children = c.all(p), P;
      }
      return Es(p);
    }
    return (c.options.unknownHandler || qw)(c, p, g);
  }
  function h(p) {
    const g = [];
    if ("children" in p) {
      const v = p.children;
      let b = -1;
      for (; ++b < v.length; ) {
        const E = c.one(v[b], p);
        if (E) {
          if (b && v[b - 1].type === "break" && (!Array.isArray(E) && E.type === "text" && (E.value = wh(E.value)), !Array.isArray(E) && E.type === "element")) {
            const A = E.children[0];
            A && A.type === "text" && (A.value = wh(A.value));
          }
          Array.isArray(E) ? g.push(...E) : g.push(E);
        }
      }
    }
    return g;
  }
}
function jw(e, t) {
  e.position && (t.position = TC(e));
}
function Qw(e, t) {
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
    r.type === "element" && a && Object.assign(r.properties, Es(a)), "children" in r && r.children && o !== null && o !== void 0 && (r.children = o);
  }
  return r;
}
function qw(e, t) {
  const r = t.data || {}, u = "value" in t && !(jl.call(r, "hProperties") || jl.call(r, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, u), e.applyData(t, u);
}
function $w(e, t) {
  const r = [];
  let u = -1;
  for (t && r.push({ type: "text", value: `
` }); ++u < e.length; )
    u && r.push({ type: "text", value: `
` }), r.push(e[u]);
  return t && e.length > 0 && r.push({ type: "text", value: `
` }), r;
}
function wh(e) {
  let t = 0, r = e.charCodeAt(t);
  for (; r === 9 || r === 32; )
    t++, r = e.charCodeAt(t);
  return e.slice(t);
}
function Sh(e, t) {
  const r = Uw(e, t), u = r.one(e, void 0), o = Dw(r), a = Array.isArray(u) ? { type: "root", children: u } : u || { type: "root", children: [] };
  return o && a.children.push({ type: "text", value: `
` }, o), a;
}
function Kw(e, t) {
  return e && "run" in e ? async function(r, u) {
    const o = (
      /** @type {HastRoot} */
      Sh(r, { file: u, ...t })
    );
    await e.run(o, u);
  } : function(r, u) {
    return (
      /** @type {HastRoot} */
      Sh(r, { file: u, ...e || t })
    );
  };
}
function Eh(e) {
  if (e)
    throw e;
}
var xs = Object.prototype.hasOwnProperty, cg = Object.prototype.toString, Fh = Object.defineProperty, Rh = Object.getOwnPropertyDescriptor, Ph = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : cg.call(t) === "[object Array]";
}, Oh = function(t) {
  if (!t || cg.call(t) !== "[object Object]")
    return !1;
  var r = xs.call(t, "constructor"), u = t.constructor && t.constructor.prototype && xs.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !r && !u)
    return !1;
  var o;
  for (o in t)
    ;
  return typeof o > "u" || xs.call(t, o);
}, _h = function(t, r) {
  Fh && r.name === "__proto__" ? Fh(t, r.name, {
    enumerable: !0,
    configurable: !0,
    value: r.newValue,
    writable: !0
  }) : t[r.name] = r.newValue;
}, Th = function(t, r) {
  if (r === "__proto__")
    if (xs.call(t, r)) {
      if (Rh)
        return Rh(t, r).value;
    } else return;
  return t[r];
}, eS = function e() {
  var t, r, u, o, a, l, c = arguments[0], f = 1, h = arguments.length, p = !1;
  for (typeof c == "boolean" && (p = c, c = arguments[1] || {}, f = 2), (c == null || typeof c != "object" && typeof c != "function") && (c = {}); f < h; ++f)
    if (t = arguments[f], t != null)
      for (r in t)
        u = Th(c, r), o = Th(t, r), c !== o && (p && o && (Oh(o) || (a = Ph(o))) ? (a ? (a = !1, l = u && Ph(u) ? u : []) : l = u && Oh(u) ? u : {}, _h(c, { name: r, newValue: e(p, l, o) })) : typeof o < "u" && _h(c, { name: r, newValue: o }));
  return c;
};
const Fl = /* @__PURE__ */ Ns(eS);
function Ql(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function tS() {
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
      o = h, p ? nS(p, c)(...h) : l(null, ...h);
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
function nS(e, t) {
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
const Kn = { basename: rS, dirname: iS, extname: uS, join: oS, sep: "/" };
function rS(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  to(e);
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
function iS(e) {
  if (to(e), e.length === 0)
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
function uS(e) {
  to(e);
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
function oS(...e) {
  let t = -1, r;
  for (; ++t < e.length; )
    to(e[t]), e[t] && (r = r === void 0 ? e[t] : r + "/" + e[t]);
  return r === void 0 ? "." : sS(r);
}
function sS(e) {
  to(e);
  const t = e.codePointAt(0) === 47;
  let r = aS(e, !t);
  return r.length === 0 && !t && (r = "."), r.length > 0 && e.codePointAt(e.length - 1) === 47 && (r += "/"), t ? "/" + r : r;
}
function aS(e, t) {
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
function to(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const lS = { cwd: cS };
function cS() {
  return "/";
}
function ql(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function fS(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!ql(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return dS(e);
}
function dS(e) {
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
class fg {
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
    t ? ql(t) ? r = { path: t } : typeof t == "string" || hS(t) ? r = { value: t } : r = t : r = {}, this.cwd = "cwd" in r ? "" : lS.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let u = -1;
    for (; ++u < Rl.length; ) {
      const a = Rl[u];
      a in r && r[a] !== void 0 && r[a] !== null && (this[a] = a === "history" ? [...r[a]] : r[a]);
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
    return typeof this.path == "string" ? Kn.basename(this.path) : void 0;
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
    Ol(t, "basename"), Pl(t, "basename"), this.path = Kn.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Kn.dirname(this.path) : void 0;
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
    Bh(this.basename, "dirname"), this.path = Kn.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Kn.extname(this.path) : void 0;
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
    if (Pl(t, "extname"), Bh(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Kn.join(this.dirname, this.stem + (t || ""));
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
    ql(t) && (t = fS(t)), Ol(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Kn.basename(this.path, this.extname) : void 0;
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
    Ol(t, "stem"), Pl(t, "stem"), this.path = Kn.join(this.dirname || "", t + (this.extname || ""));
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
function Pl(e, t) {
  if (e && e.includes(Kn.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + Kn.sep + "`"
    );
}
function Ol(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Bh(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function hS(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const pS = (
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
), gS = {}.hasOwnProperty;
class Gc extends pS {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = tS();
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
      new Gc()
    );
    let r = -1;
    for (; ++r < this.attachers.length; ) {
      const u = this.attachers[r];
      t.use(...u);
    }
    return t.data(Fl(!0, {}, this.namespace)), t;
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
    return typeof t == "string" ? arguments.length === 2 ? (Bl("data", this.frozen), this.namespace[t] = r, this) : gS.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (Bl("data", this.frozen), this.namespace = t, this) : this.namespace;
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
    const r = ms(t), u = this.parser || this.Parser;
    return _l("parse", u), u(String(r), r);
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
    return this.freeze(), _l("process", this.parser || this.Parser), Tl("process", this.compiler || this.Compiler), r ? o(void 0, r) : new Promise(o);
    function o(a, l) {
      const c = ms(t), f = (
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
        ), E = u.stringify(b, v);
        yS(E) ? v.value = E : v.result = E, h(
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
    return this.freeze(), _l("processSync", this.parser || this.Parser), Tl("processSync", this.compiler || this.Compiler), this.process(t, o), kh("processSync", "process", r), u;
    function o(a, l) {
      r = !0, Eh(a), u = l;
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
    Gh(t), this.freeze();
    const o = this.transformers;
    return !u && typeof r == "function" && (u = r, r = void 0), u ? a(void 0, u) : new Promise(a);
    function a(l, c) {
      const f = ms(r);
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
    return this.run(t, r, a), kh("runSync", "run", u), o;
    function a(l, c) {
      Eh(l), o = c, u = !0;
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
    const u = ms(r), o = this.compiler || this.Compiler;
    return Tl("stringify", o), Gh(t), o(t, u);
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
    if (Bl("use", this.frozen), t != null) if (typeof t == "function")
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
      c(h.plugins), h.settings && (o.settings = Fl(!0, o.settings, h.settings));
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
        let [b, ...E] = p;
        const A = u[v][1];
        Ql(A) && Ql(b) && (b = Fl(!0, A, b)), u[v] = [h, b, ...E];
      }
    }
  }
}
const mS = new Gc().freeze();
function _l(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function Tl(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function Bl(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Gh(e) {
  if (!Ql(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function kh(e, t, r) {
  if (!r)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function ms(e) {
  return bS(e) ? e : new fg(e);
}
function bS(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function yS(e) {
  return typeof e == "string" || vS(e);
}
function vS(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const IS = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Lh = [], Dh = { allowDangerousHtml: !0 }, CS = /^(https?|ircs?|mailto|xmpp)$/i, xS = [
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
function dg(e) {
  const t = AS(e), r = wS(e);
  return SS(t.runSync(t.parse(r), r), e);
}
function AS(e) {
  const t = e.rehypePlugins || Lh, r = e.remarkPlugins || Lh, u = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Dh } : Dh;
  return mS().use(iw).use(r).use(Kw, u).use(t);
}
function wS(e) {
  const t = e.children || "", r = new fg();
  return typeof t == "string" && (r.value = t), r;
}
function SS(e, t) {
  const r = t.allowedElements, u = t.allowElement, o = t.components, a = t.disallowedElements, l = t.skipHtml, c = t.unwrapDisallowed, f = t.urlTransform || ES;
  for (const p of xS)
    Object.hasOwn(t, p.from) && ("" + p.from + (p.to ? "use `" + p.to + "` instead" : "remove it") + IS + p.id, void 0);
  return t.className && (e = {
    type: "element",
    tagName: "div",
    properties: { className: t.className },
    // Assume no doctypes.
    children: (
      /** @type {Array<ElementContent>} */
      e.type === "root" ? e.children : [e]
    )
  }), lg(e, h), DC(e, {
    Fragment: Sp,
    // @ts-expect-error
    // React components are allowed to return numbers,
    // but not according to the types in hast-util-to-jsx-runtime
    components: o,
    ignoreInvalidStyle: !0,
    jsx: se,
    jsxs: Dn,
    passKeys: !0,
    passNode: !0
  });
  function h(p, g, v) {
    if (p.type === "raw" && v && typeof g == "number")
      return l ? v.children.splice(g, 1) : v.children[g] = { type: "text", value: p.value }, g;
    if (p.type === "element") {
      let b;
      for (b in wl)
        if (Object.hasOwn(wl, b) && Object.hasOwn(p.properties, b)) {
          const E = p.properties[b], A = wl[b];
          (A === null || A.includes(p.tagName)) && (p.properties[b] = f(String(E || ""), b, p));
        }
    }
    if (p.type === "element") {
      let b = r ? !r.includes(p.tagName) : a ? a.includes(p.tagName) : !1;
      if (!b && u && typeof g == "number" && (b = !u(p, g, v)), b && v && typeof g == "number")
        return c && p.children ? v.children.splice(g, 1, ...p.children) : v.children.splice(g, 1), g;
    }
  }
}
function ES(e) {
  const t = e.indexOf(":"), r = e.indexOf("?"), u = e.indexOf("#"), o = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    o !== -1 && t > o || r !== -1 && t > r || u !== -1 && t > u || // It is a protocol, it should be allowed.
    CS.test(e.slice(0, t)) ? e : ""
  );
}
function $l({ prop: e }) {
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
  return /* @__PURE__ */ se("div", { className: `pd-alert-${e.alertType}`, style: l, children: /* @__PURE__ */ se(
    dg,
    {
      components: {
        a: ({ ...c }) => /* @__PURE__ */ se("a", { ...c, target: "_blank", rel: "noopener noreferrer" })
      },
      children: e.content
    }
  ) });
}
var no = class {
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
function kn() {
}
function FS(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Kl(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function hg(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Yi(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Jn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Mh(e, t) {
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
      if (t.queryHash !== kc(l, t.options))
        return !1;
    } else if (!Uu(t.queryKey, l))
      return !1;
  }
  if (r !== "all") {
    const f = t.isActive();
    if (r === "active" && !f || r === "inactive" && f)
      return !1;
  }
  return !(typeof c == "boolean" && t.isStale() !== c || o && o !== t.state.fetchStatus || a && !a(t));
}
function Nh(e, t) {
  const { exact: r, status: u, predicate: o, mutationKey: a } = e;
  if (a) {
    if (!t.options.mutationKey)
      return !1;
    if (r) {
      if (Ju(t.options.mutationKey) !== Ju(a))
        return !1;
    } else if (!Uu(t.options.mutationKey, a))
      return !1;
  }
  return !(u && t.state.status !== u || o && !o(t));
}
function kc(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Ju)(e);
}
function Ju(e) {
  return JSON.stringify(
    e,
    (t, r) => nc(r) ? Object.keys(r).sort().reduce((u, o) => (u[o] = r[o], u), {}) : r
  );
}
function Uu(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every((r) => Uu(e[r], t[r])) : !1;
}
function ec(e, t) {
  if (e === t)
    return e;
  const r = Vh(e) && Vh(t);
  if (r || nc(e) && nc(t)) {
    const u = r ? e : Object.keys(e), o = u.length, a = r ? t : Object.keys(t), l = a.length, c = r ? [] : {};
    let f = 0;
    for (let h = 0; h < l; h++) {
      const p = r ? h : a[h];
      (!r && u.includes(p) || r) && e[p] === void 0 && t[p] === void 0 ? (c[p] = void 0, f++) : (c[p] = ec(e[p], t[p]), c[p] === e[p] && e[p] !== void 0 && f++);
    }
    return o === l && f === o ? e : c;
  }
  return t;
}
function tc(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Vh(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function nc(e) {
  if (!Wh(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const r = t.prototype;
  return !(!Wh(r) || !r.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function Wh(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function RS(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function rc(e, t, r) {
  if (typeof r.structuralSharing == "function")
    return r.structuralSharing(e, t);
  if (r.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return ec(e, t);
      } catch (u) {
        throw console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${r.queryHash}]: ${u}`
        ), u;
      }
    return ec(e, t);
  }
  return t;
}
function PS(e, t, r = 0) {
  const u = [...e, t];
  return r && u.length > r ? u.slice(1) : u;
}
function OS(e, t, r = 0) {
  const u = [t, ...e];
  return r && u.length > r ? u.slice(0, -1) : u;
}
var Fs = Symbol();
function pg(e, t) {
  return process.env.NODE_ENV !== "production" && e.queryFn === Fs && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`
  ), !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Fs ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var li, Dr, Ui, mp, _S = (mp = class extends no {
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
}, li = new WeakMap(), Dr = new WeakMap(), Ui = new WeakMap(), mp), Lc = new _S(), ji, Mr, Qi, bp, TS = (bp = class extends no {
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
}, ji = new WeakMap(), Mr = new WeakMap(), Qi = new WeakMap(), bp), Rs = new TS();
function ic() {
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
function BS(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function gg(e) {
  return (e ?? "online") === "online" ? Rs.isOnline() : !0;
}
var mg = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function Gl(e) {
  return e instanceof mg;
}
function bg(e) {
  let t = !1, r = 0, u = !1, o;
  const a = ic(), l = (A) => {
    var F;
    u || (v(new mg(A)), (F = e.abort) == null || F.call(e));
  }, c = () => {
    t = !0;
  }, f = () => {
    t = !1;
  }, h = () => Lc.isFocused() && (e.networkMode === "always" || Rs.isOnline()) && e.canRun(), p = () => gg(e.networkMode) && e.canRun(), g = (A) => {
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
  }), E = () => {
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
      const W = e.retry ?? (bi ? 0 : 3), k = e.retryDelay ?? BS, M = typeof k == "function" ? k(r, P) : k, U = W === !0 || typeof W == "number" && r < W || typeof W == "function" && W(r, P);
      if (t || !U) {
        v(P);
        return;
      }
      r++, (G = e.onFail) == null || G.call(e, r, P), RS(M).then(() => h() ? void 0 : b()).then(() => {
        t ? v(P) : E();
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
    start: () => (p() ? E() : b().then(E), a)
  };
}
var GS = (e) => setTimeout(e, 0);
function kS() {
  let e = [], t = 0, r = (c) => {
    c();
  }, u = (c) => {
    c();
  }, o = GS;
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
var Mt = kS(), ci, yp, yg = (yp = class {
  constructor() {
    Ce(this, ci);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Kl(this.gcTime) && ae(this, ci, setTimeout(() => {
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
}, ci = new WeakMap(), yp), qi, $i, Gn, fi, Xt, ju, di, Zn, Ir, vp, LS = (vp = class extends yg {
  constructor(t) {
    super();
    Ce(this, Zn);
    Ce(this, qi);
    Ce(this, $i);
    Ce(this, Gn);
    Ce(this, fi);
    Ce(this, Xt);
    Ce(this, ju);
    Ce(this, di);
    ae(this, di, !1), ae(this, ju, t.defaultOptions), this.setOptions(t.options), this.observers = [], ae(this, fi, t.client), ae(this, Gn, O(this, fi).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, ae(this, qi, DS(this.options)), this.state = t.state ?? O(this, qi), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var t;
    return (t = O(this, Xt)) == null ? void 0 : t.promise;
  }
  setOptions(t) {
    this.options = { ...O(this, ju), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && O(this, Gn).remove(this);
  }
  setData(t, r) {
    const u = rc(this.state.data, t, this.options);
    return ze(this, Zn, Ir).call(this, {
      data: u,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), u;
  }
  setState(t, r) {
    ze(this, Zn, Ir).call(this, { type: "setState", state: t, setStateOptions: r });
  }
  cancel(t) {
    var u, o;
    const r = (u = O(this, Xt)) == null ? void 0 : u.promise;
    return (o = O(this, Xt)) == null || o.cancel(t), r ? r.then(kn).catch(kn) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(O(this, qi));
  }
  isActive() {
    return this.observers.some(
      (t) => Jn(t.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Fs || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
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
    t == null || t.refetch({ cancelRefetch: !1 }), (r = O(this, Xt)) == null || r.continue();
  }
  onOnline() {
    var r;
    const t = this.observers.find((u) => u.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = O(this, Xt)) == null || r.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), O(this, Gn).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((r) => r !== t), this.observers.length || (O(this, Xt) && (O(this, di) ? O(this, Xt).cancel({ revert: !0 }) : O(this, Xt).cancelRetry()), this.scheduleGc()), O(this, Gn).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || ze(this, Zn, Ir).call(this, { type: "invalidate" });
  }
  fetch(t, r) {
    var f, h, p;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (r != null && r.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (O(this, Xt))
        return O(this, Xt).continueRetry(), O(this, Xt).promise;
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
      const g = pg(this.options, r), v = {
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
    ), ae(this, $i, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((h = l.fetchOptions) == null ? void 0 : h.meta)) && ze(this, Zn, Ir).call(this, { type: "fetch", meta: (p = l.fetchOptions) == null ? void 0 : p.meta });
    const c = (g) => {
      var v, b, E, A;
      Gl(g) && g.silent || ze(this, Zn, Ir).call(this, {
        type: "error",
        error: g
      }), Gl(g) || ((b = (v = O(this, Gn).config).onError) == null || b.call(
        v,
        g,
        this
      ), (A = (E = O(this, Gn).config).onSettled) == null || A.call(
        E,
        this.state.data,
        g,
        this
      )), this.scheduleGc();
    };
    return ae(this, Xt, bg({
      initialPromise: r == null ? void 0 : r.initialPromise,
      fn: l.fetchFn,
      abort: u.abort.bind(u),
      onSuccess: (g) => {
        var v, b, E, A;
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
        (b = (v = O(this, Gn).config).onSuccess) == null || b.call(v, g, this), (A = (E = O(this, Gn).config).onSettled) == null || A.call(
          E,
          g,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: c,
      onFail: (g, v) => {
        ze(this, Zn, Ir).call(this, { type: "failed", failureCount: g, error: v });
      },
      onPause: () => {
        ze(this, Zn, Ir).call(this, { type: "pause" });
      },
      onContinue: () => {
        ze(this, Zn, Ir).call(this, { type: "continue" });
      },
      retry: l.options.retry,
      retryDelay: l.options.retryDelay,
      networkMode: l.options.networkMode,
      canRun: () => !0
    })), O(this, Xt).start();
  }
}, qi = new WeakMap(), $i = new WeakMap(), Gn = new WeakMap(), fi = new WeakMap(), Xt = new WeakMap(), ju = new WeakMap(), di = new WeakMap(), Zn = new WeakSet(), Ir = function(t) {
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
          ...vg(u.data, this.options),
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
        return Gl(o) && o.revert && O(this, $i) ? { ...O(this, $i), fetchStatus: "idle" } : {
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
  this.state = r(this.state), Mt.batch(() => {
    this.observers.forEach((u) => {
      u.onQueryUpdate();
    }), O(this, Gn).notify({ query: this, type: "updated", action: t });
  });
}, vp);
function vg(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: gg(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function DS(e) {
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
var er, Ip, MS = (Ip = class extends no {
  constructor(t = {}) {
    super();
    Ce(this, er);
    this.config = t, ae(this, er, /* @__PURE__ */ new Map());
  }
  build(t, r, u) {
    const o = r.queryKey, a = r.queryHash ?? kc(o, r);
    let l = this.get(a);
    return l || (l = new LS({
      client: t,
      queryKey: o,
      queryHash: a,
      options: t.defaultQueryOptions(r),
      state: u,
      defaultOptions: t.getQueryDefaults(o)
    }), this.add(l)), l;
  }
  add(t) {
    O(this, er).has(t.queryHash) || (O(this, er).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const r = O(this, er).get(t.queryHash);
    r && (t.destroy(), r === t && O(this, er).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    Mt.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return O(this, er).get(t);
  }
  getAll() {
    return [...O(this, er).values()];
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (u) => Mh(r, u)
    );
  }
  findAll(t = {}) {
    const r = this.getAll();
    return Object.keys(t).length > 0 ? r.filter((u) => Mh(t, u)) : r;
  }
  notify(t) {
    Mt.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  onFocus() {
    Mt.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    Mt.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, er = new WeakMap(), Ip), tr, Qt, hi, nr, Lr, Cp, NS = (Cp = class extends yg {
  constructor(t) {
    super();
    Ce(this, nr);
    Ce(this, tr);
    Ce(this, Qt);
    Ce(this, hi);
    this.mutationId = t.mutationId, ae(this, Qt, t.mutationCache), ae(this, tr, []), this.state = t.state || VS(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    O(this, tr).includes(t) || (O(this, tr).push(t), this.clearGcTimeout(), O(this, Qt).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    ae(this, tr, O(this, tr).filter((r) => r !== t)), this.scheduleGc(), O(this, Qt).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    O(this, tr).length || (this.state.status === "pending" ? this.scheduleGc() : O(this, Qt).remove(this));
  }
  continue() {
    var t;
    return ((t = O(this, hi)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var a, l, c, f, h, p, g, v, b, E, A, F, P, W, k, M, U, G, j, D;
    const r = () => {
      ze(this, nr, Lr).call(this, { type: "continue" });
    };
    ae(this, hi, bg({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (Y, $) => {
        ze(this, nr, Lr).call(this, { type: "failed", failureCount: Y, error: $ });
      },
      onPause: () => {
        ze(this, nr, Lr).call(this, { type: "pause" });
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
        ze(this, nr, Lr).call(this, { type: "pending", variables: t, isPaused: o }), await ((l = (a = O(this, Qt).config).onMutate) == null ? void 0 : l.call(
          a,
          t,
          this
        ));
        const $ = await ((f = (c = this.options).onMutate) == null ? void 0 : f.call(c, t));
        $ !== this.state.context && ze(this, nr, Lr).call(this, {
          type: "pending",
          context: $,
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
      )), await ((v = (g = this.options).onSuccess) == null ? void 0 : v.call(g, Y, t, this.state.context)), await ((E = (b = O(this, Qt).config).onSettled) == null ? void 0 : E.call(
        b,
        Y,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((F = (A = this.options).onSettled) == null ? void 0 : F.call(A, Y, null, t, this.state.context)), ze(this, nr, Lr).call(this, { type: "success", data: Y }), Y;
    } catch (Y) {
      try {
        throw await ((W = (P = O(this, Qt).config).onError) == null ? void 0 : W.call(
          P,
          Y,
          t,
          this.state.context,
          this
        )), await ((M = (k = this.options).onError) == null ? void 0 : M.call(
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
        )), await ((D = (j = this.options).onSettled) == null ? void 0 : D.call(
          j,
          void 0,
          Y,
          t,
          this.state.context
        )), Y;
      } finally {
        ze(this, nr, Lr).call(this, { type: "error", error: Y });
      }
    } finally {
      O(this, Qt).runNext(this);
    }
  }
}, tr = new WeakMap(), Qt = new WeakMap(), hi = new WeakMap(), nr = new WeakSet(), Lr = function(t) {
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
  this.state = r(this.state), Mt.batch(() => {
    O(this, tr).forEach((u) => {
      u.onMutationUpdate(t);
    }), O(this, Qt).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, Cp);
function VS() {
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
var Cr, Yn, Qu, xp, WS = (xp = class extends no {
  constructor(t = {}) {
    super();
    Ce(this, Cr);
    Ce(this, Yn);
    Ce(this, Qu);
    this.config = t, ae(this, Cr, /* @__PURE__ */ new Set()), ae(this, Yn, /* @__PURE__ */ new Map()), ae(this, Qu, 0);
  }
  build(t, r, u) {
    const o = new NS({
      mutationCache: this,
      mutationId: ++hs(this, Qu)._,
      options: t.defaultMutationOptions(r),
      state: u
    });
    return this.add(o), o;
  }
  add(t) {
    O(this, Cr).add(t);
    const r = bs(t);
    if (typeof r == "string") {
      const u = O(this, Yn).get(r);
      u ? u.push(t) : O(this, Yn).set(r, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (O(this, Cr).delete(t)) {
      const r = bs(t);
      if (typeof r == "string") {
        const u = O(this, Yn).get(r);
        if (u)
          if (u.length > 1) {
            const o = u.indexOf(t);
            o !== -1 && u.splice(o, 1);
          } else u[0] === t && O(this, Yn).delete(r);
      }
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    const r = bs(t);
    if (typeof r == "string") {
      const u = O(this, Yn).get(r), o = u == null ? void 0 : u.find(
        (a) => a.state.status === "pending"
      );
      return !o || o === t;
    } else
      return !0;
  }
  runNext(t) {
    var u;
    const r = bs(t);
    if (typeof r == "string") {
      const o = (u = O(this, Yn).get(r)) == null ? void 0 : u.find((a) => a !== t && a.state.isPaused);
      return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
    } else
      return Promise.resolve();
  }
  clear() {
    Mt.batch(() => {
      O(this, Cr).forEach((t) => {
        this.notify({ type: "removed", mutation: t });
      }), O(this, Cr).clear(), O(this, Yn).clear();
    });
  }
  getAll() {
    return Array.from(O(this, Cr));
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (u) => Nh(r, u)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((r) => Nh(t, r));
  }
  notify(t) {
    Mt.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((r) => r.state.isPaused);
    return Mt.batch(
      () => Promise.all(
        t.map((r) => r.continue().catch(kn))
      )
    );
  }
}, Cr = new WeakMap(), Yn = new WeakMap(), Qu = new WeakMap(), xp);
function bs(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function Xh(e) {
  return {
    onFetch: (t, r) => {
      var p, g, v, b, E;
      const u = t.options, o = (v = (g = (p = t.fetchOptions) == null ? void 0 : p.meta) == null ? void 0 : g.fetchMore) == null ? void 0 : v.direction, a = ((b = t.state.data) == null ? void 0 : b.pages) || [], l = ((E = t.state.data) == null ? void 0 : E.pageParams) || [];
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
        }, P = pg(t.options, t.fetchOptions), W = async (k, M, U) => {
          if (A)
            return Promise.reject();
          if (M == null && k.pages.length)
            return Promise.resolve(k);
          const G = {
            client: t.client,
            queryKey: t.queryKey,
            pageParam: M,
            direction: U ? "backward" : "forward",
            meta: t.options.meta
          };
          F(G);
          const j = await P(
            G
          ), { maxPages: D } = t.options, Y = U ? OS : PS;
          return {
            pages: Y(k.pages, j, D),
            pageParams: Y(k.pageParams, M, D)
          };
        };
        if (o && a.length) {
          const k = o === "backward", M = k ? XS : Hh, U = {
            pages: a,
            pageParams: l
          }, G = M(u, U);
          c = await W(U, G, k);
        } else {
          const k = e ?? a.length;
          do {
            const M = f === 0 ? l[0] ?? u.initialPageParam : Hh(u, c);
            if (f > 0 && M == null)
              break;
            c = await W(c, M), f++;
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
function Hh(e, { pages: t, pageParams: r }) {
  const u = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[u],
    t,
    r[u],
    r
  ) : void 0;
}
function XS(e, { pages: t, pageParams: r }) {
  var u;
  return t.length > 0 ? (u = e.getPreviousPageParam) == null ? void 0 : u.call(e, t[0], t, r[0], r) : void 0;
}
var yt, Nr, Vr, Ki, eu, Wr, tu, nu, Ap, HS = (Ap = class {
  constructor(e = {}) {
    Ce(this, yt);
    Ce(this, Nr);
    Ce(this, Vr);
    Ce(this, Ki);
    Ce(this, eu);
    Ce(this, Wr);
    Ce(this, tu);
    Ce(this, nu);
    ae(this, yt, e.queryCache || new MS()), ae(this, Nr, e.mutationCache || new WS()), ae(this, Vr, e.defaultOptions || {}), ae(this, Ki, /* @__PURE__ */ new Map()), ae(this, eu, /* @__PURE__ */ new Map()), ae(this, Wr, 0);
  }
  mount() {
    hs(this, Wr)._++, O(this, Wr) === 1 && (ae(this, tu, Lc.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), O(this, yt).onFocus());
    })), ae(this, nu, Rs.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), O(this, yt).onOnline());
    })));
  }
  unmount() {
    var e, t;
    hs(this, Wr)._--, O(this, Wr) === 0 && ((e = O(this, tu)) == null || e.call(this), ae(this, tu, void 0), (t = O(this, nu)) == null || t.call(this), ae(this, nu, void 0));
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
    ), a = o == null ? void 0 : o.state.data, l = FS(t, a);
    if (l !== void 0)
      return O(this, yt).build(this, u).setData(l, { ...r, manual: !0 });
  }
  setQueriesData(e, t, r) {
    return Mt.batch(
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
    Mt.batch(() => {
      t.findAll(e).forEach((r) => {
        t.remove(r);
      });
    });
  }
  resetQueries(e, t) {
    const r = O(this, yt);
    return Mt.batch(() => (r.findAll(e).forEach((u) => {
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
    const r = { revert: !0, ...t }, u = Mt.batch(
      () => O(this, yt).findAll(e).map((o) => o.cancel(r))
    );
    return Promise.all(u).then(kn).catch(kn);
  }
  invalidateQueries(e, t = {}) {
    return Mt.batch(() => (O(this, yt).findAll(e).forEach((r) => {
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
    }, u = Mt.batch(
      () => O(this, yt).findAll(e).filter((o) => !o.isDisabled()).map((o) => {
        let a = o.fetch(void 0, r);
        return r.throwOnError || (a = a.catch(kn)), o.state.fetchStatus === "paused" ? Promise.resolve() : a;
      })
    );
    return Promise.all(u).then(kn);
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
    return this.fetchQuery(e).then(kn).catch(kn);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = Xh(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(kn).catch(kn);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = Xh(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return Rs.isOnline() ? O(this, Nr).resumePausedMutations() : Promise.resolve();
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
    O(this, Ki).set(Ju(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...O(this, Ki).values()], r = {};
    return t.forEach((u) => {
      Uu(e, u.queryKey) && Object.assign(r, u.defaultOptions);
    }), r;
  }
  setMutationDefaults(e, t) {
    O(this, eu).set(Ju(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...O(this, eu).values()], r = {};
    return t.forEach((u) => {
      Uu(e, u.mutationKey) && Object.assign(r, u.defaultOptions);
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
    return t.queryHash || (t.queryHash = kc(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === Fs && (t.enabled = !1), t;
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
}, yt = new WeakMap(), Nr = new WeakMap(), Vr = new WeakMap(), Ki = new WeakMap(), eu = new WeakMap(), Wr = new WeakMap(), tu = new WeakMap(), nu = new WeakMap(), Ap), sn, Ze, qu, qt, pi, ru, Xr, Hr, $u, iu, uu, gi, mi, zr, ou, Ke, Nu, uc, oc, sc, ac, lc, cc, fc, Ig, wp, zS = (wp = class extends no {
  constructor(t, r) {
    super();
    Ce(this, Ke);
    Ce(this, sn);
    Ce(this, Ze);
    Ce(this, qu);
    Ce(this, qt);
    Ce(this, pi);
    Ce(this, ru);
    Ce(this, Xr);
    Ce(this, Hr);
    Ce(this, $u);
    Ce(this, iu);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    Ce(this, uu);
    Ce(this, gi);
    Ce(this, mi);
    Ce(this, zr);
    Ce(this, ou, /* @__PURE__ */ new Set());
    this.options = r, ae(this, sn, t), ae(this, Hr, null), ae(this, Xr, ic()), this.options.experimental_prefetchInRender || O(this, Xr).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (O(this, Ze).addObserver(this), zh(O(this, Ze), this.options) ? ze(this, Ke, Nu).call(this) : this.updateResult(), ze(this, Ke, ac).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return dc(
      O(this, Ze),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return dc(
      O(this, Ze),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), ze(this, Ke, lc).call(this), ze(this, Ke, cc).call(this), O(this, Ze).removeObserver(this);
  }
  setOptions(t) {
    const r = this.options, u = O(this, Ze);
    if (this.options = O(this, sn).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Jn(this.options.enabled, O(this, Ze)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    ze(this, Ke, fc).call(this), O(this, Ze).setOptions(this.options), r._defaulted && !tc(this.options, r) && O(this, sn).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: O(this, Ze),
      observer: this
    });
    const o = this.hasListeners();
    o && Zh(
      O(this, Ze),
      u,
      this.options,
      r
    ) && ze(this, Ke, Nu).call(this), this.updateResult(), o && (O(this, Ze) !== u || Jn(this.options.enabled, O(this, Ze)) !== Jn(r.enabled, O(this, Ze)) || Yi(this.options.staleTime, O(this, Ze)) !== Yi(r.staleTime, O(this, Ze))) && ze(this, Ke, uc).call(this);
    const a = ze(this, Ke, oc).call(this);
    o && (O(this, Ze) !== u || Jn(this.options.enabled, O(this, Ze)) !== Jn(r.enabled, O(this, Ze)) || a !== O(this, zr)) && ze(this, Ke, sc).call(this, a);
  }
  getOptimisticResult(t) {
    const r = O(this, sn).getQueryCache().build(O(this, sn), t), u = this.createResult(r, t);
    return YS(this, u) && (ae(this, qt, u), ae(this, ru, this.options), ae(this, pi, O(this, Ze).state)), u;
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
    const u = O(this, Ze), o = this.options, a = O(this, qt), l = O(this, pi), c = O(this, ru), h = t !== u ? t.state : O(this, qu), { state: p } = t;
    let g = { ...p }, v = !1, b;
    if (r._optimisticResults) {
      const $ = this.hasListeners(), Q = !$ && zh(t, r), Z = $ && Zh(t, u, r, o);
      (Q || Z) && (g = {
        ...g,
        ...vg(p.data, t.options)
      }), r._optimisticResults === "isRestoring" && (g.fetchStatus = "idle");
    }
    let { error: E, errorUpdatedAt: A, status: F } = g;
    b = g.data;
    let P = !1;
    if (r.placeholderData !== void 0 && b === void 0 && F === "pending") {
      let $;
      a != null && a.isPlaceholderData && r.placeholderData === (c == null ? void 0 : c.placeholderData) ? ($ = a.data, P = !0) : $ = typeof r.placeholderData == "function" ? r.placeholderData(
        (Y = O(this, uu)) == null ? void 0 : Y.state.data,
        O(this, uu)
      ) : r.placeholderData, $ !== void 0 && (F = "success", b = rc(
        a == null ? void 0 : a.data,
        $,
        r
      ), v = !0);
    }
    if (r.select && b !== void 0 && !P)
      if (a && b === (l == null ? void 0 : l.data) && r.select === O(this, $u))
        b = O(this, iu);
      else
        try {
          ae(this, $u, r.select), b = r.select(b), b = rc(a == null ? void 0 : a.data, b, r), ae(this, iu, b), ae(this, Hr, null);
        } catch ($) {
          ae(this, Hr, $);
        }
    O(this, Hr) && (E = O(this, Hr), b = O(this, iu), A = Date.now(), F = "error");
    const W = g.fetchStatus === "fetching", k = F === "pending", M = F === "error", U = k && W, G = b !== void 0, D = {
      status: F,
      fetchStatus: g.fetchStatus,
      isPending: k,
      isSuccess: F === "success",
      isError: M,
      isInitialLoading: U,
      isLoading: U,
      data: b,
      dataUpdatedAt: g.dataUpdatedAt,
      error: E,
      errorUpdatedAt: A,
      failureCount: g.fetchFailureCount,
      failureReason: g.fetchFailureReason,
      errorUpdateCount: g.errorUpdateCount,
      isFetched: g.dataUpdateCount > 0 || g.errorUpdateCount > 0,
      isFetchedAfterMount: g.dataUpdateCount > h.dataUpdateCount || g.errorUpdateCount > h.errorUpdateCount,
      isFetching: W,
      isRefetching: W && !k,
      isLoadingError: M && !G,
      isPaused: g.fetchStatus === "paused",
      isPlaceholderData: v,
      isRefetchError: M && G,
      isStale: Dc(t, r),
      refetch: this.refetch,
      promise: O(this, Xr)
    };
    if (this.options.experimental_prefetchInRender) {
      const $ = (K) => {
        D.status === "error" ? K.reject(D.error) : D.data !== void 0 && K.resolve(D.data);
      }, Q = () => {
        const K = ae(this, Xr, D.promise = ic());
        $(K);
      }, Z = O(this, Xr);
      switch (Z.status) {
        case "pending":
          t.queryHash === u.queryHash && $(Z);
          break;
        case "fulfilled":
          (D.status === "error" || D.data !== Z.value) && Q();
          break;
        case "rejected":
          (D.status !== "error" || D.error !== Z.reason) && Q();
          break;
      }
    }
    return D;
  }
  updateResult() {
    const t = O(this, qt), r = this.createResult(O(this, Ze), this.options);
    if (ae(this, pi, O(this, Ze).state), ae(this, ru, this.options), O(this, pi).data !== void 0 && ae(this, uu, O(this, Ze)), tc(r, t))
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
    ze(this, Ke, Ig).call(this, { listeners: u() });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && ze(this, Ke, ac).call(this);
  }
}, sn = new WeakMap(), Ze = new WeakMap(), qu = new WeakMap(), qt = new WeakMap(), pi = new WeakMap(), ru = new WeakMap(), Xr = new WeakMap(), Hr = new WeakMap(), $u = new WeakMap(), iu = new WeakMap(), uu = new WeakMap(), gi = new WeakMap(), mi = new WeakMap(), zr = new WeakMap(), ou = new WeakMap(), Ke = new WeakSet(), Nu = function(t) {
  ze(this, Ke, fc).call(this);
  let r = O(this, Ze).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (r = r.catch(kn)), r;
}, uc = function() {
  ze(this, Ke, lc).call(this);
  const t = Yi(
    this.options.staleTime,
    O(this, Ze)
  );
  if (bi || O(this, qt).isStale || !Kl(t))
    return;
  const u = hg(O(this, qt).dataUpdatedAt, t) + 1;
  ae(this, gi, setTimeout(() => {
    O(this, qt).isStale || this.updateResult();
  }, u));
}, oc = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(O(this, Ze)) : this.options.refetchInterval) ?? !1;
}, sc = function(t) {
  ze(this, Ke, cc).call(this), ae(this, zr, t), !(bi || Jn(this.options.enabled, O(this, Ze)) === !1 || !Kl(O(this, zr)) || O(this, zr) === 0) && ae(this, mi, setInterval(() => {
    (this.options.refetchIntervalInBackground || Lc.isFocused()) && ze(this, Ke, Nu).call(this);
  }, O(this, zr)));
}, ac = function() {
  ze(this, Ke, uc).call(this), ze(this, Ke, sc).call(this, ze(this, Ke, oc).call(this));
}, lc = function() {
  O(this, gi) && (clearTimeout(O(this, gi)), ae(this, gi, void 0));
}, cc = function() {
  O(this, mi) && (clearInterval(O(this, mi)), ae(this, mi, void 0));
}, fc = function() {
  const t = O(this, sn).getQueryCache().build(O(this, sn), this.options);
  if (t === O(this, Ze))
    return;
  const r = O(this, Ze);
  ae(this, Ze, t), ae(this, qu, t.state), this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
}, Ig = function(t) {
  Mt.batch(() => {
    t.listeners && this.listeners.forEach((r) => {
      r(O(this, qt));
    }), O(this, sn).getQueryCache().notify({
      query: O(this, Ze),
      type: "observerResultsUpdated"
    });
  });
}, wp);
function ZS(e, t) {
  return Jn(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function zh(e, t) {
  return ZS(e, t) || e.state.data !== void 0 && dc(e, t, t.refetchOnMount);
}
function dc(e, t, r) {
  if (Jn(t.enabled, e) !== !1) {
    const u = typeof r == "function" ? r(e) : r;
    return u === "always" || u !== !1 && Dc(e, t);
  }
  return !1;
}
function Zh(e, t, r, u) {
  return (e !== t || Jn(u.enabled, e) === !1) && (!r.suspense || e.state.status !== "error") && Dc(e, r);
}
function Dc(e, t) {
  return Jn(t.enabled, e) !== !1 && e.isStaleByTime(Yi(t.staleTime, e));
}
function YS(e, t) {
  return !tc(e.getCurrentResult(), t);
}
var Cg = _e.createContext(
  void 0
), JS = (e) => {
  const t = _e.useContext(Cg);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, US = ({
  client: e,
  children: t
}) => (_e.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ se(Cg.Provider, { value: e, children: t })), xg = _e.createContext(!1), jS = () => _e.useContext(xg);
xg.Provider;
function QS() {
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
var qS = _e.createContext(QS()), $S = () => _e.useContext(qS);
function KS(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function Yh() {
}
var eE = (e, t) => {
  (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1));
}, tE = (e) => {
  _e.useEffect(() => {
    e.clearReset();
  }, [e]);
}, nE = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: r,
  query: u,
  suspense: o
}) => e.isError && !t.isReset() && !e.isFetching && u && (o && e.data === void 0 || KS(r, [e.error, u])), rE = (e) => {
  const t = e.staleTime;
  e.suspense && (e.staleTime = typeof t == "function" ? (...r) => Math.max(t(...r), 1e3) : Math.max(t ?? 1e3, 1e3), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
}, iE = (e, t) => e.isLoading && e.isFetching && !t, uE = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, Jh = (e, t, r) => t.fetchOptimistic(e).catch(() => {
  r.clearReset();
});
function oE(e, t, r) {
  var g, v, b, E, A;
  if (process.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const u = JS(), o = jS(), a = $S(), l = u.defaultQueryOptions(e);
  (v = (g = u.getDefaultOptions().queries) == null ? void 0 : g._experimental_beforeQuery) == null || v.call(
    g,
    l
  ), process.env.NODE_ENV !== "production" && (l.queryFn || console.error(
    `[${l.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`
  )), l._optimisticResults = o ? "isRestoring" : "optimistic", rE(l), eE(l, a), tE(a);
  const c = !u.getQueryCache().get(l.queryHash), [f] = _e.useState(
    () => new t(
      u,
      l
    )
  ), h = f.getOptimisticResult(l), p = !o && e.subscribed !== !1;
  if (_e.useSyncExternalStore(
    _e.useCallback(
      (F) => {
        const P = p ? f.subscribe(Mt.batchCalls(F)) : Yh;
        return f.updateResult(), P;
      },
      [f, p]
    ),
    () => f.getCurrentResult(),
    () => f.getCurrentResult()
  ), _e.useEffect(() => {
    f.setOptions(l);
  }, [l, f]), uE(l, h))
    throw Jh(l, f, a);
  if (nE({
    result: h,
    errorResetBoundary: a,
    throwOnError: l.throwOnError,
    query: u.getQueryCache().get(l.queryHash),
    suspense: l.suspense
  }))
    throw h.error;
  if ((E = (b = u.getDefaultOptions().queries) == null ? void 0 : b._experimental_afterQuery) == null || E.call(
    b,
    l,
    h
  ), l.experimental_prefetchInRender && !bi && iE(h, o)) {
    const F = c ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      Jh(l, f, a)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (A = u.getQueryCache().get(l.queryHash)) == null ? void 0 : A.promise
    );
    F == null || F.catch(Yh).finally(() => {
      f.updateResult();
    });
  }
  return l.notifyOnChangeProps ? h : f.trackResult(h);
}
function Ii(e, t) {
  return oE(e, zS);
}
var Ps = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Ps.exports;
(function(e, t) {
  (function() {
    var r, u = "4.17.21", o = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", l = "Expected a function", c = "Invalid `variable` option passed into `_.template`", f = "__lodash_hash_undefined__", h = 500, p = "__lodash_placeholder__", g = 1, v = 2, b = 4, E = 1, A = 2, F = 1, P = 2, W = 4, k = 8, M = 16, U = 32, G = 64, j = 128, D = 256, Y = 512, $ = 30, Q = "...", Z = 800, K = 16, fe = 1, ie = 2, xe = 3, we = 1 / 0, Re = 9007199254740991, Je = 17976931348623157e292, w = NaN, Ie = 4294967295, ke = Ie - 1, S = Ie >>> 1, Ye = [
      ["ary", j],
      ["bind", F],
      ["bindKey", P],
      ["curry", k],
      ["curryRight", M],
      ["flip", Y],
      ["partial", U],
      ["partialRight", G],
      ["rearg", D]
    ], le = "[object Arguments]", Se = "[object Array]", At = "[object AsyncFunction]", Me = "[object Boolean]", mt = "[object Date]", Nt = "[object DOMException]", Gt = "[object Error]", kt = "[object Function]", Mn = "[object GeneratorFunction]", ee = "[object Map]", re = "[object Number]", he = "[object Null]", Ee = "[object Object]", at = "[object Promise]", Ot = "[object Proxy]", An = "[object RegExp]", Lt = "[object Set]", et = "[object String]", Ue = "[object Symbol]", lt = "[object Undefined]", qe = "[object WeakMap]", N = "[object WeakSet]", te = "[object ArrayBuffer]", pe = "[object DataView]", Te = "[object Float32Array]", Be = "[object Float64Array]", _t = "[object Int8Array]", $t = "[object Int16Array]", Zt = "[object Int32Array]", wn = "[object Uint8Array]", Kt = "[object Uint8ClampedArray]", wt = "[object Uint16Array]", fn = "[object Uint32Array]", dn = /\b__p \+= '';/g, sr = /\b(__p \+=) '' \+/g, io = /(__e\(.*?\)|\b__t\)) \+\n'';/g, uo = /&(?:amp|lt|gt|quot|#39);/g, oo = /[&<>"']/g, fu = RegExp(uo.source), Jr = RegExp(oo.source), du = /<%-([\s\S]+?)%>/g, hu = /<%([\s\S]+?)%>/g, Ci = /<%=([\s\S]+?)%>/g, Ur = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Js = /^\w*$/, Us = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, pu = /[\\^$.*+?()[\]{}|]/g, js = RegExp(pu.source), gu = /^\s+/, so = /\s/, mu = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ar = /\{\n\/\* \[wrapped with (.+)\] \*/, Qs = /,? & /, qs = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, $s = /[()=,{}\[\]\/\s]/, Ks = /\\(\\)?/g, ea = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Sn = /\w*$/, ta = /^[-+]0x[0-9a-f]+$/i, na = /^0b[01]+$/i, ra = /^\[object .+?Constructor\]$/, ia = /^0o[0-7]+$/i, ua = /^(?:0|[1-9]\d*)$/, lr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, xi = /($^)/, oa = /['\n\r\u2028\u2029\\]/g, Ai = "\\ud800-\\udfff", sa = "\\u0300-\\u036f", aa = "\\ufe20-\\ufe2f", wi = "\\u20d0-\\u20ff", ao = sa + aa + wi, lo = "\\u2700-\\u27bf", Nn = "a-z\\xdf-\\xf6\\xf8-\\xff", la = "\\xac\\xb1\\xd7\\xf7", ca = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", fa = "\\u2000-\\u206f", da = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", co = "A-Z\\xc0-\\xd6\\xd8-\\xde", fo = "\\ufe0e\\ufe0f", jr = la + ca + fa + da, bu = "['’]", Qr = "[" + Ai + "]", yu = "[" + jr + "]", qr = "[" + ao + "]", ho = "\\d+", ha = "[" + lo + "]", po = "[" + Nn + "]", go = "[^" + Ai + jr + ho + lo + Nn + co + "]", Si = "\\ud83c[\\udffb-\\udfff]", pa = "(?:" + qr + "|" + Si + ")", mo = "[^" + Ai + "]", Ei = "(?:\\ud83c[\\udde6-\\uddff]){2}", Sr = "[\\ud800-\\udbff][\\udc00-\\udfff]", hn = "[" + co + "]", bo = "\\u200d", yo = "(?:" + po + "|" + go + ")", Un = "(?:" + hn + "|" + go + ")", vo = "(?:" + bu + "(?:d|ll|m|re|s|t|ve))?", Io = "(?:" + bu + "(?:D|LL|M|RE|S|T|VE))?", Co = pa + "?", xo = "[" + fo + "]?", ga = "(?:" + bo + "(?:" + [mo, Ei, Sr].join("|") + ")" + xo + Co + ")*", cr = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ao = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", wo = xo + Co + ga, Fi = "(?:" + [ha, Ei, Sr].join("|") + ")" + wo, ma = "(?:" + [mo + qr + "?", qr, Ei, Sr, Qr].join("|") + ")", vu = RegExp(bu, "g"), ba = RegExp(qr, "g"), Ri = RegExp(Si + "(?=" + Si + ")|" + ma + wo, "g"), So = RegExp([
      hn + "?" + po + "+" + vo + "(?=" + [yu, hn, "$"].join("|") + ")",
      Un + "+" + Io + "(?=" + [yu, hn + yo, "$"].join("|") + ")",
      hn + "?" + yo + "+" + vo,
      hn + "+" + Io,
      Ao,
      cr,
      ho,
      Fi
    ].join("|"), "g"), Eo = RegExp("[" + bo + Ai + ao + fo + "]"), $r = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Fo = [
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
    ], ya = -1, it = {};
    it[Te] = it[Be] = it[_t] = it[$t] = it[Zt] = it[wn] = it[Kt] = it[wt] = it[fn] = !0, it[le] = it[Se] = it[te] = it[Me] = it[pe] = it[mt] = it[Gt] = it[kt] = it[ee] = it[re] = it[Ee] = it[An] = it[Lt] = it[et] = it[qe] = !1;
    var rt = {};
    rt[le] = rt[Se] = rt[te] = rt[pe] = rt[Me] = rt[mt] = rt[Te] = rt[Be] = rt[_t] = rt[$t] = rt[Zt] = rt[ee] = rt[re] = rt[Ee] = rt[An] = rt[Lt] = rt[et] = rt[Ue] = rt[wn] = rt[Kt] = rt[wt] = rt[fn] = !0, rt[Gt] = rt[kt] = rt[qe] = !1;
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
    }, z = {
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
    }, ut = parseFloat, Pe = parseInt, dt = typeof Cn == "object" && Cn && Cn.Object === Object && Cn, St = typeof self == "object" && self && self.Object === Object && self, Xe = dt || St || Function("return this")(), ot = t && !t.nodeType && t, It = ot && !0 && e && !e.nodeType && e, en = It && It.exports === ot, Et = en && dt.process, ht = function() {
      try {
        var _ = It && It.require && It.require("util").types;
        return _ || Et && Et.binding && Et.binding("util");
      } catch {
      }
    }(), Yt = ht && ht.isArrayBuffer, Vn = ht && ht.isDate, En = ht && ht.isMap, jn = ht && ht.isRegExp, Iu = ht && ht.isSet, Kr = ht && ht.isTypedArray;
    function Tt(_, V, L) {
      switch (L.length) {
        case 0:
          return _.call(V);
        case 1:
          return _.call(V, L[0]);
        case 2:
          return _.call(V, L[0], L[1]);
        case 3:
          return _.call(V, L[0], L[1], L[2]);
      }
      return _.apply(V, L);
    }
    function sm(_, V, L, oe) {
      for (var Fe = -1, je = _ == null ? 0 : _.length; ++Fe < je; ) {
        var Rt = _[Fe];
        V(oe, Rt, L(Rt), _);
      }
      return oe;
    }
    function Fn(_, V) {
      for (var L = -1, oe = _ == null ? 0 : _.length; ++L < oe && V(_[L], L, _) !== !1; )
        ;
      return _;
    }
    function am(_, V) {
      for (var L = _ == null ? 0 : _.length; L-- && V(_[L], L, _) !== !1; )
        ;
      return _;
    }
    function Jc(_, V) {
      for (var L = -1, oe = _ == null ? 0 : _.length; ++L < oe; )
        if (!V(_[L], L, _))
          return !1;
      return !0;
    }
    function Er(_, V) {
      for (var L = -1, oe = _ == null ? 0 : _.length, Fe = 0, je = []; ++L < oe; ) {
        var Rt = _[L];
        V(Rt, L, _) && (je[Fe++] = Rt);
      }
      return je;
    }
    function Ro(_, V) {
      var L = _ == null ? 0 : _.length;
      return !!L && Pi(_, V, 0) > -1;
    }
    function va(_, V, L) {
      for (var oe = -1, Fe = _ == null ? 0 : _.length; ++oe < Fe; )
        if (L(V, _[oe]))
          return !0;
      return !1;
    }
    function pt(_, V) {
      for (var L = -1, oe = _ == null ? 0 : _.length, Fe = Array(oe); ++L < oe; )
        Fe[L] = V(_[L], L, _);
      return Fe;
    }
    function Fr(_, V) {
      for (var L = -1, oe = V.length, Fe = _.length; ++L < oe; )
        _[Fe + L] = V[L];
      return _;
    }
    function Ia(_, V, L, oe) {
      var Fe = -1, je = _ == null ? 0 : _.length;
      for (oe && je && (L = _[++Fe]); ++Fe < je; )
        L = V(L, _[Fe], Fe, _);
      return L;
    }
    function lm(_, V, L, oe) {
      var Fe = _ == null ? 0 : _.length;
      for (oe && Fe && (L = _[--Fe]); Fe--; )
        L = V(L, _[Fe], Fe, _);
      return L;
    }
    function Ca(_, V) {
      for (var L = -1, oe = _ == null ? 0 : _.length; ++L < oe; )
        if (V(_[L], L, _))
          return !0;
      return !1;
    }
    var cm = xa("length");
    function fm(_) {
      return _.split("");
    }
    function dm(_) {
      return _.match(qs) || [];
    }
    function Uc(_, V, L) {
      var oe;
      return L(_, function(Fe, je, Rt) {
        if (V(Fe, je, Rt))
          return oe = je, !1;
      }), oe;
    }
    function Po(_, V, L, oe) {
      for (var Fe = _.length, je = L + (oe ? 1 : -1); oe ? je-- : ++je < Fe; )
        if (V(_[je], je, _))
          return je;
      return -1;
    }
    function Pi(_, V, L) {
      return V === V ? wm(_, V, L) : Po(_, jc, L);
    }
    function hm(_, V, L, oe) {
      for (var Fe = L - 1, je = _.length; ++Fe < je; )
        if (oe(_[Fe], V))
          return Fe;
      return -1;
    }
    function jc(_) {
      return _ !== _;
    }
    function Qc(_, V) {
      var L = _ == null ? 0 : _.length;
      return L ? wa(_, V) / L : w;
    }
    function xa(_) {
      return function(V) {
        return V == null ? r : V[_];
      };
    }
    function Aa(_) {
      return function(V) {
        return _ == null ? r : _[V];
      };
    }
    function qc(_, V, L, oe, Fe) {
      return Fe(_, function(je, Rt, st) {
        L = oe ? (oe = !1, je) : V(L, je, Rt, st);
      }), L;
    }
    function pm(_, V) {
      var L = _.length;
      for (_.sort(V); L--; )
        _[L] = _[L].value;
      return _;
    }
    function wa(_, V) {
      for (var L, oe = -1, Fe = _.length; ++oe < Fe; ) {
        var je = V(_[oe]);
        je !== r && (L = L === r ? je : L + je);
      }
      return L;
    }
    function Sa(_, V) {
      for (var L = -1, oe = Array(_); ++L < _; )
        oe[L] = V(L);
      return oe;
    }
    function gm(_, V) {
      return pt(V, function(L) {
        return [L, _[L]];
      });
    }
    function $c(_) {
      return _ && _.slice(0, nf(_) + 1).replace(gu, "");
    }
    function pn(_) {
      return function(V) {
        return _(V);
      };
    }
    function Ea(_, V) {
      return pt(V, function(L) {
        return _[L];
      });
    }
    function Cu(_, V) {
      return _.has(V);
    }
    function Kc(_, V) {
      for (var L = -1, oe = _.length; ++L < oe && Pi(V, _[L], 0) > -1; )
        ;
      return L;
    }
    function ef(_, V) {
      for (var L = _.length; L-- && Pi(V, _[L], 0) > -1; )
        ;
      return L;
    }
    function mm(_, V) {
      for (var L = _.length, oe = 0; L--; )
        _[L] === V && ++oe;
      return oe;
    }
    var bm = Aa(C), ym = Aa(T);
    function vm(_) {
      return "\\" + ue[_];
    }
    function Im(_, V) {
      return _ == null ? r : _[V];
    }
    function Oi(_) {
      return Eo.test(_);
    }
    function Cm(_) {
      return $r.test(_);
    }
    function xm(_) {
      for (var V, L = []; !(V = _.next()).done; )
        L.push(V.value);
      return L;
    }
    function Fa(_) {
      var V = -1, L = Array(_.size);
      return _.forEach(function(oe, Fe) {
        L[++V] = [Fe, oe];
      }), L;
    }
    function tf(_, V) {
      return function(L) {
        return _(V(L));
      };
    }
    function Rr(_, V) {
      for (var L = -1, oe = _.length, Fe = 0, je = []; ++L < oe; ) {
        var Rt = _[L];
        (Rt === V || Rt === p) && (_[L] = p, je[Fe++] = L);
      }
      return je;
    }
    function Oo(_) {
      var V = -1, L = Array(_.size);
      return _.forEach(function(oe) {
        L[++V] = oe;
      }), L;
    }
    function Am(_) {
      var V = -1, L = Array(_.size);
      return _.forEach(function(oe) {
        L[++V] = [oe, oe];
      }), L;
    }
    function wm(_, V, L) {
      for (var oe = L - 1, Fe = _.length; ++oe < Fe; )
        if (_[oe] === V)
          return oe;
      return -1;
    }
    function Sm(_, V, L) {
      for (var oe = L + 1; oe--; )
        if (_[oe] === V)
          return oe;
      return oe;
    }
    function _i(_) {
      return Oi(_) ? Fm(_) : cm(_);
    }
    function Wn(_) {
      return Oi(_) ? Rm(_) : fm(_);
    }
    function nf(_) {
      for (var V = _.length; V-- && so.test(_.charAt(V)); )
        ;
      return V;
    }
    var Em = Aa(z);
    function Fm(_) {
      for (var V = Ri.lastIndex = 0; Ri.test(_); )
        ++V;
      return V;
    }
    function Rm(_) {
      return _.match(Ri) || [];
    }
    function Pm(_) {
      return _.match(So) || [];
    }
    var Om = function _(V) {
      V = V == null ? Xe : Ti.defaults(Xe.Object(), V, Ti.pick(Xe, Fo));
      var L = V.Array, oe = V.Date, Fe = V.Error, je = V.Function, Rt = V.Math, st = V.Object, Ra = V.RegExp, _m = V.String, Rn = V.TypeError, _o = L.prototype, Tm = je.prototype, Bi = st.prototype, To = V["__core-js_shared__"], Bo = Tm.toString, tt = Bi.hasOwnProperty, Bm = 0, rf = function() {
        var n = /[^.]+$/.exec(To && To.keys && To.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), Go = Bi.toString, Gm = Bo.call(st), km = Xe._, Lm = Ra(
        "^" + Bo.call(tt).replace(pu, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), ko = en ? V.Buffer : r, Pr = V.Symbol, Lo = V.Uint8Array, uf = ko ? ko.allocUnsafe : r, Do = tf(st.getPrototypeOf, st), of = st.create, sf = Bi.propertyIsEnumerable, Mo = _o.splice, af = Pr ? Pr.isConcatSpreadable : r, xu = Pr ? Pr.iterator : r, ei = Pr ? Pr.toStringTag : r, No = function() {
        try {
          var n = ui(st, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), Dm = V.clearTimeout !== Xe.clearTimeout && V.clearTimeout, Mm = oe && oe.now !== Xe.Date.now && oe.now, Nm = V.setTimeout !== Xe.setTimeout && V.setTimeout, Vo = Rt.ceil, Wo = Rt.floor, Pa = st.getOwnPropertySymbols, Vm = ko ? ko.isBuffer : r, lf = V.isFinite, Wm = _o.join, Xm = tf(st.keys, st), Pt = Rt.max, Vt = Rt.min, Hm = oe.now, zm = V.parseInt, cf = Rt.random, Zm = _o.reverse, Oa = ui(V, "DataView"), Au = ui(V, "Map"), _a = ui(V, "Promise"), Gi = ui(V, "Set"), wu = ui(V, "WeakMap"), Su = ui(st, "create"), Xo = wu && new wu(), ki = {}, Ym = oi(Oa), Jm = oi(Au), Um = oi(_a), jm = oi(Gi), Qm = oi(wu), Ho = Pr ? Pr.prototype : r, Eu = Ho ? Ho.valueOf : r, ff = Ho ? Ho.toString : r;
      function y(n) {
        if (bt(n) && !Oe(n) && !(n instanceof We)) {
          if (n instanceof Pn)
            return n;
          if (tt.call(n, "__wrapped__"))
            return dd(n);
        }
        return new Pn(n);
      }
      var Li = /* @__PURE__ */ function() {
        function n() {
        }
        return function(i) {
          if (!gt(i))
            return {};
          if (of)
            return of(i);
          n.prototype = i;
          var s = new n();
          return n.prototype = r, s;
        };
      }();
      function zo() {
      }
      function Pn(n, i) {
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
      }, y.prototype = zo.prototype, y.prototype.constructor = y, Pn.prototype = Li(zo.prototype), Pn.prototype.constructor = Pn;
      function We(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ie, this.__views__ = [];
      }
      function qm() {
        var n = new We(this.__wrapped__);
        return n.__actions__ = tn(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = tn(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = tn(this.__views__), n;
      }
      function $m() {
        if (this.__filtered__) {
          var n = new We(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function Km() {
        var n = this.__wrapped__.value(), i = this.__dir__, s = Oe(n), d = i < 0, m = s ? n.length : 0, I = f0(0, m, this.__views__), x = I.start, R = I.end, B = R - x, X = d ? R : x - 1, H = this.__iteratees__, J = H.length, ne = 0, ce = Vt(B, this.__takeCount__);
        if (!s || !d && m == B && ce == B)
          return kf(n, this.__actions__);
        var ye = [];
        e:
          for (; B-- && ne < ce; ) {
            X += i;
            for (var De = -1, ve = n[X]; ++De < J; ) {
              var Ve = H[De], He = Ve.iteratee, bn = Ve.type, jt = He(ve);
              if (bn == ie)
                ve = jt;
              else if (!jt) {
                if (bn == fe)
                  continue e;
                break e;
              }
            }
            ye[ne++] = ve;
          }
        return ye;
      }
      We.prototype = Li(zo.prototype), We.prototype.constructor = We;
      function ti(n) {
        var i = -1, s = n == null ? 0 : n.length;
        for (this.clear(); ++i < s; ) {
          var d = n[i];
          this.set(d[0], d[1]);
        }
      }
      function eb() {
        this.__data__ = Su ? Su(null) : {}, this.size = 0;
      }
      function tb(n) {
        var i = this.has(n) && delete this.__data__[n];
        return this.size -= i ? 1 : 0, i;
      }
      function nb(n) {
        var i = this.__data__;
        if (Su) {
          var s = i[n];
          return s === f ? r : s;
        }
        return tt.call(i, n) ? i[n] : r;
      }
      function rb(n) {
        var i = this.__data__;
        return Su ? i[n] !== r : tt.call(i, n);
      }
      function ib(n, i) {
        var s = this.__data__;
        return this.size += this.has(n) ? 0 : 1, s[n] = Su && i === r ? f : i, this;
      }
      ti.prototype.clear = eb, ti.prototype.delete = tb, ti.prototype.get = nb, ti.prototype.has = rb, ti.prototype.set = ib;
      function fr(n) {
        var i = -1, s = n == null ? 0 : n.length;
        for (this.clear(); ++i < s; ) {
          var d = n[i];
          this.set(d[0], d[1]);
        }
      }
      function ub() {
        this.__data__ = [], this.size = 0;
      }
      function ob(n) {
        var i = this.__data__, s = Zo(i, n);
        if (s < 0)
          return !1;
        var d = i.length - 1;
        return s == d ? i.pop() : Mo.call(i, s, 1), --this.size, !0;
      }
      function sb(n) {
        var i = this.__data__, s = Zo(i, n);
        return s < 0 ? r : i[s][1];
      }
      function ab(n) {
        return Zo(this.__data__, n) > -1;
      }
      function lb(n, i) {
        var s = this.__data__, d = Zo(s, n);
        return d < 0 ? (++this.size, s.push([n, i])) : s[d][1] = i, this;
      }
      fr.prototype.clear = ub, fr.prototype.delete = ob, fr.prototype.get = sb, fr.prototype.has = ab, fr.prototype.set = lb;
      function dr(n) {
        var i = -1, s = n == null ? 0 : n.length;
        for (this.clear(); ++i < s; ) {
          var d = n[i];
          this.set(d[0], d[1]);
        }
      }
      function cb() {
        this.size = 0, this.__data__ = {
          hash: new ti(),
          map: new (Au || fr)(),
          string: new ti()
        };
      }
      function fb(n) {
        var i = rs(this, n).delete(n);
        return this.size -= i ? 1 : 0, i;
      }
      function db(n) {
        return rs(this, n).get(n);
      }
      function hb(n) {
        return rs(this, n).has(n);
      }
      function pb(n, i) {
        var s = rs(this, n), d = s.size;
        return s.set(n, i), this.size += s.size == d ? 0 : 1, this;
      }
      dr.prototype.clear = cb, dr.prototype.delete = fb, dr.prototype.get = db, dr.prototype.has = hb, dr.prototype.set = pb;
      function ni(n) {
        var i = -1, s = n == null ? 0 : n.length;
        for (this.__data__ = new dr(); ++i < s; )
          this.add(n[i]);
      }
      function gb(n) {
        return this.__data__.set(n, f), this;
      }
      function mb(n) {
        return this.__data__.has(n);
      }
      ni.prototype.add = ni.prototype.push = gb, ni.prototype.has = mb;
      function Xn(n) {
        var i = this.__data__ = new fr(n);
        this.size = i.size;
      }
      function bb() {
        this.__data__ = new fr(), this.size = 0;
      }
      function yb(n) {
        var i = this.__data__, s = i.delete(n);
        return this.size = i.size, s;
      }
      function vb(n) {
        return this.__data__.get(n);
      }
      function Ib(n) {
        return this.__data__.has(n);
      }
      function Cb(n, i) {
        var s = this.__data__;
        if (s instanceof fr) {
          var d = s.__data__;
          if (!Au || d.length < o - 1)
            return d.push([n, i]), this.size = ++s.size, this;
          s = this.__data__ = new dr(d);
        }
        return s.set(n, i), this.size = s.size, this;
      }
      Xn.prototype.clear = bb, Xn.prototype.delete = yb, Xn.prototype.get = vb, Xn.prototype.has = Ib, Xn.prototype.set = Cb;
      function df(n, i) {
        var s = Oe(n), d = !s && si(n), m = !s && !d && Gr(n), I = !s && !d && !m && Vi(n), x = s || d || m || I, R = x ? Sa(n.length, _m) : [], B = R.length;
        for (var X in n)
          (i || tt.call(n, X)) && !(x && // Safari 9 has enumerable `arguments.length` in strict mode.
          (X == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          m && (X == "offset" || X == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          I && (X == "buffer" || X == "byteLength" || X == "byteOffset") || // Skip index properties.
          mr(X, B))) && R.push(X);
        return R;
      }
      function hf(n) {
        var i = n.length;
        return i ? n[Xa(0, i - 1)] : r;
      }
      function xb(n, i) {
        return is(tn(n), ri(i, 0, n.length));
      }
      function Ab(n) {
        return is(tn(n));
      }
      function Ta(n, i, s) {
        (s !== r && !Hn(n[i], s) || s === r && !(i in n)) && hr(n, i, s);
      }
      function Fu(n, i, s) {
        var d = n[i];
        (!(tt.call(n, i) && Hn(d, s)) || s === r && !(i in n)) && hr(n, i, s);
      }
      function Zo(n, i) {
        for (var s = n.length; s--; )
          if (Hn(n[s][0], i))
            return s;
        return -1;
      }
      function wb(n, i, s, d) {
        return Or(n, function(m, I, x) {
          i(d, m, s(m), x);
        }), d;
      }
      function pf(n, i) {
        return n && qn(i, Bt(i), n);
      }
      function Sb(n, i) {
        return n && qn(i, rn(i), n);
      }
      function hr(n, i, s) {
        i == "__proto__" && No ? No(n, i, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        }) : n[i] = s;
      }
      function Ba(n, i) {
        for (var s = -1, d = i.length, m = L(d), I = n == null; ++s < d; )
          m[s] = I ? r : hl(n, i[s]);
        return m;
      }
      function ri(n, i, s) {
        return n === n && (s !== r && (n = n <= s ? n : s), i !== r && (n = n >= i ? n : i)), n;
      }
      function On(n, i, s, d, m, I) {
        var x, R = i & g, B = i & v, X = i & b;
        if (s && (x = m ? s(n, d, m, I) : s(n)), x !== r)
          return x;
        if (!gt(n))
          return n;
        var H = Oe(n);
        if (H) {
          if (x = h0(n), !R)
            return tn(n, x);
        } else {
          var J = Wt(n), ne = J == kt || J == Mn;
          if (Gr(n))
            return Mf(n, R);
          if (J == Ee || J == le || ne && !m) {
            if (x = B || ne ? {} : rd(n), !R)
              return B ? n0(n, Sb(x, n)) : t0(n, pf(x, n));
          } else {
            if (!rt[J])
              return m ? n : {};
            x = p0(n, J, R);
          }
        }
        I || (I = new Xn());
        var ce = I.get(n);
        if (ce)
          return ce;
        I.set(n, x), Td(n) ? n.forEach(function(ve) {
          x.add(On(ve, i, s, ve, n, I));
        }) : Od(n) && n.forEach(function(ve, Ve) {
          x.set(Ve, On(ve, i, s, Ve, n, I));
        });
        var ye = X ? B ? Ka : $a : B ? rn : Bt, De = H ? r : ye(n);
        return Fn(De || n, function(ve, Ve) {
          De && (Ve = ve, ve = n[Ve]), Fu(x, Ve, On(ve, i, s, Ve, n, I));
        }), x;
      }
      function Eb(n) {
        var i = Bt(n);
        return function(s) {
          return gf(s, n, i);
        };
      }
      function gf(n, i, s) {
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
      function mf(n, i, s) {
        if (typeof n != "function")
          throw new Rn(l);
        return Gu(function() {
          n.apply(r, s);
        }, i);
      }
      function Ru(n, i, s, d) {
        var m = -1, I = Ro, x = !0, R = n.length, B = [], X = i.length;
        if (!R)
          return B;
        s && (i = pt(i, pn(s))), d ? (I = va, x = !1) : i.length >= o && (I = Cu, x = !1, i = new ni(i));
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
      var Or = Hf(Qn), bf = Hf(ka, !0);
      function Fb(n, i) {
        var s = !0;
        return Or(n, function(d, m, I) {
          return s = !!i(d, m, I), s;
        }), s;
      }
      function Yo(n, i, s) {
        for (var d = -1, m = n.length; ++d < m; ) {
          var I = n[d], x = i(I);
          if (x != null && (R === r ? x === x && !mn(x) : s(x, R)))
            var R = x, B = I;
        }
        return B;
      }
      function Rb(n, i, s, d) {
        var m = n.length;
        for (s = Le(s), s < 0 && (s = -s > m ? 0 : m + s), d = d === r || d > m ? m : Le(d), d < 0 && (d += m), d = s > d ? 0 : Gd(d); s < d; )
          n[s++] = i;
        return n;
      }
      function yf(n, i) {
        var s = [];
        return Or(n, function(d, m, I) {
          i(d, m, I) && s.push(d);
        }), s;
      }
      function Dt(n, i, s, d, m) {
        var I = -1, x = n.length;
        for (s || (s = m0), m || (m = []); ++I < x; ) {
          var R = n[I];
          i > 0 && s(R) ? i > 1 ? Dt(R, i - 1, s, d, m) : Fr(m, R) : d || (m[m.length] = R);
        }
        return m;
      }
      var Ga = zf(), vf = zf(!0);
      function Qn(n, i) {
        return n && Ga(n, i, Bt);
      }
      function ka(n, i) {
        return n && vf(n, i, Bt);
      }
      function Jo(n, i) {
        return Er(i, function(s) {
          return br(n[s]);
        });
      }
      function ii(n, i) {
        i = Tr(i, n);
        for (var s = 0, d = i.length; n != null && s < d; )
          n = n[$n(i[s++])];
        return s && s == d ? n : r;
      }
      function If(n, i, s) {
        var d = i(n);
        return Oe(n) ? d : Fr(d, s(n));
      }
      function Jt(n) {
        return n == null ? n === r ? lt : he : ei && ei in st(n) ? c0(n) : A0(n);
      }
      function La(n, i) {
        return n > i;
      }
      function Pb(n, i) {
        return n != null && tt.call(n, i);
      }
      function Ob(n, i) {
        return n != null && i in st(n);
      }
      function _b(n, i, s) {
        return n >= Vt(i, s) && n < Pt(i, s);
      }
      function Da(n, i, s) {
        for (var d = s ? va : Ro, m = n[0].length, I = n.length, x = I, R = L(I), B = 1 / 0, X = []; x--; ) {
          var H = n[x];
          x && i && (H = pt(H, pn(i))), B = Vt(H.length, B), R[x] = !s && (i || m >= 120 && H.length >= 120) ? new ni(x && H) : r;
        }
        H = n[0];
        var J = -1, ne = R[0];
        e:
          for (; ++J < m && X.length < B; ) {
            var ce = H[J], ye = i ? i(ce) : ce;
            if (ce = s || ce !== 0 ? ce : 0, !(ne ? Cu(ne, ye) : d(X, ye, s))) {
              for (x = I; --x; ) {
                var De = R[x];
                if (!(De ? Cu(De, ye) : d(n[x], ye, s)))
                  continue e;
              }
              ne && ne.push(ye), X.push(ce);
            }
          }
        return X;
      }
      function Tb(n, i, s, d) {
        return Qn(n, function(m, I, x) {
          i(d, s(m), I, x);
        }), d;
      }
      function Pu(n, i, s) {
        i = Tr(i, n), n = sd(n, i);
        var d = n == null ? n : n[$n(Tn(i))];
        return d == null ? r : Tt(d, n, s);
      }
      function Cf(n) {
        return bt(n) && Jt(n) == le;
      }
      function Bb(n) {
        return bt(n) && Jt(n) == te;
      }
      function Gb(n) {
        return bt(n) && Jt(n) == mt;
      }
      function Ou(n, i, s, d, m) {
        return n === i ? !0 : n == null || i == null || !bt(n) && !bt(i) ? n !== n && i !== i : kb(n, i, s, d, Ou, m);
      }
      function kb(n, i, s, d, m, I) {
        var x = Oe(n), R = Oe(i), B = x ? Se : Wt(n), X = R ? Se : Wt(i);
        B = B == le ? Ee : B, X = X == le ? Ee : X;
        var H = B == Ee, J = X == Ee, ne = B == X;
        if (ne && Gr(n)) {
          if (!Gr(i))
            return !1;
          x = !0, H = !1;
        }
        if (ne && !H)
          return I || (I = new Xn()), x || Vi(n) ? ed(n, i, s, d, m, I) : a0(n, i, B, s, d, m, I);
        if (!(s & E)) {
          var ce = H && tt.call(n, "__wrapped__"), ye = J && tt.call(i, "__wrapped__");
          if (ce || ye) {
            var De = ce ? n.value() : n, ve = ye ? i.value() : i;
            return I || (I = new Xn()), m(De, ve, s, d, I);
          }
        }
        return ne ? (I || (I = new Xn()), l0(n, i, s, d, m, I)) : !1;
      }
      function Lb(n) {
        return bt(n) && Wt(n) == ee;
      }
      function Ma(n, i, s, d) {
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
            var J = new Xn();
            if (d)
              var ne = d(X, H, B, n, i, J);
            if (!(ne === r ? Ou(H, X, E | A, d, J) : ne))
              return !1;
          }
        }
        return !0;
      }
      function xf(n) {
        if (!gt(n) || y0(n))
          return !1;
        var i = br(n) ? Lm : ra;
        return i.test(oi(n));
      }
      function Db(n) {
        return bt(n) && Jt(n) == An;
      }
      function Mb(n) {
        return bt(n) && Wt(n) == Lt;
      }
      function Nb(n) {
        return bt(n) && cs(n.length) && !!it[Jt(n)];
      }
      function Af(n) {
        return typeof n == "function" ? n : n == null ? un : typeof n == "object" ? Oe(n) ? Ef(n[0], n[1]) : Sf(n) : Zd(n);
      }
      function Na(n) {
        if (!Bu(n))
          return Xm(n);
        var i = [];
        for (var s in st(n))
          tt.call(n, s) && s != "constructor" && i.push(s);
        return i;
      }
      function Vb(n) {
        if (!gt(n))
          return x0(n);
        var i = Bu(n), s = [];
        for (var d in n)
          d == "constructor" && (i || !tt.call(n, d)) || s.push(d);
        return s;
      }
      function Va(n, i) {
        return n < i;
      }
      function wf(n, i) {
        var s = -1, d = nn(n) ? L(n.length) : [];
        return Or(n, function(m, I, x) {
          d[++s] = i(m, I, x);
        }), d;
      }
      function Sf(n) {
        var i = tl(n);
        return i.length == 1 && i[0][2] ? ud(i[0][0], i[0][1]) : function(s) {
          return s === n || Ma(s, n, i);
        };
      }
      function Ef(n, i) {
        return rl(n) && id(i) ? ud($n(n), i) : function(s) {
          var d = hl(s, n);
          return d === r && d === i ? pl(s, n) : Ou(i, d, E | A);
        };
      }
      function Uo(n, i, s, d, m) {
        n !== i && Ga(i, function(I, x) {
          if (m || (m = new Xn()), gt(I))
            Wb(n, i, x, s, Uo, d, m);
          else {
            var R = d ? d(ul(n, x), I, x + "", n, i, m) : r;
            R === r && (R = I), Ta(n, x, R);
          }
        }, rn);
      }
      function Wb(n, i, s, d, m, I, x) {
        var R = ul(n, s), B = ul(i, s), X = x.get(B);
        if (X) {
          Ta(n, s, X);
          return;
        }
        var H = I ? I(R, B, s + "", n, i, x) : r, J = H === r;
        if (J) {
          var ne = Oe(B), ce = !ne && Gr(B), ye = !ne && !ce && Vi(B);
          H = B, ne || ce || ye ? Oe(R) ? H = R : Ct(R) ? H = tn(R) : ce ? (J = !1, H = Mf(B, !0)) : ye ? (J = !1, H = Nf(B, !0)) : H = [] : ku(B) || si(B) ? (H = R, si(R) ? H = kd(R) : (!gt(R) || br(R)) && (H = rd(B))) : J = !1;
        }
        J && (x.set(B, H), m(H, B, d, I, x), x.delete(B)), Ta(n, s, H);
      }
      function Ff(n, i) {
        var s = n.length;
        if (s)
          return i += i < 0 ? s : 0, mr(i, s) ? n[i] : r;
      }
      function Rf(n, i, s) {
        i.length ? i = pt(i, function(I) {
          return Oe(I) ? function(x) {
            return ii(x, I.length === 1 ? I[0] : I);
          } : I;
        }) : i = [un];
        var d = -1;
        i = pt(i, pn(me()));
        var m = wf(n, function(I, x, R) {
          var B = pt(i, function(X) {
            return X(I);
          });
          return { criteria: B, index: ++d, value: I };
        });
        return pm(m, function(I, x) {
          return e0(I, x, s);
        });
      }
      function Xb(n, i) {
        return Pf(n, i, function(s, d) {
          return pl(n, d);
        });
      }
      function Pf(n, i, s) {
        for (var d = -1, m = i.length, I = {}; ++d < m; ) {
          var x = i[d], R = ii(n, x);
          s(R, x) && _u(I, Tr(x, n), R);
        }
        return I;
      }
      function Hb(n) {
        return function(i) {
          return ii(i, n);
        };
      }
      function Wa(n, i, s, d) {
        var m = d ? hm : Pi, I = -1, x = i.length, R = n;
        for (n === i && (i = tn(i)), s && (R = pt(n, pn(s))); ++I < x; )
          for (var B = 0, X = i[I], H = s ? s(X) : X; (B = m(R, H, B, d)) > -1; )
            R !== n && Mo.call(R, B, 1), Mo.call(n, B, 1);
        return n;
      }
      function Of(n, i) {
        for (var s = n ? i.length : 0, d = s - 1; s--; ) {
          var m = i[s];
          if (s == d || m !== I) {
            var I = m;
            mr(m) ? Mo.call(n, m, 1) : Za(n, m);
          }
        }
        return n;
      }
      function Xa(n, i) {
        return n + Wo(cf() * (i - n + 1));
      }
      function zb(n, i, s, d) {
        for (var m = -1, I = Pt(Vo((i - n) / (s || 1)), 0), x = L(I); I--; )
          x[d ? I : ++m] = n, n += s;
        return x;
      }
      function Ha(n, i) {
        var s = "";
        if (!n || i < 1 || i > Re)
          return s;
        do
          i % 2 && (s += n), i = Wo(i / 2), i && (n += n);
        while (i);
        return s;
      }
      function Ne(n, i) {
        return ol(od(n, i, un), n + "");
      }
      function Zb(n) {
        return hf(Wi(n));
      }
      function Yb(n, i) {
        var s = Wi(n);
        return is(s, ri(i, 0, s.length));
      }
      function _u(n, i, s, d) {
        if (!gt(n))
          return n;
        i = Tr(i, n);
        for (var m = -1, I = i.length, x = I - 1, R = n; R != null && ++m < I; ) {
          var B = $n(i[m]), X = s;
          if (B === "__proto__" || B === "constructor" || B === "prototype")
            return n;
          if (m != x) {
            var H = R[B];
            X = d ? d(H, B, R) : r, X === r && (X = gt(H) ? H : mr(i[m + 1]) ? [] : {});
          }
          Fu(R, B, X), R = R[B];
        }
        return n;
      }
      var _f = Xo ? function(n, i) {
        return Xo.set(n, i), n;
      } : un, Jb = No ? function(n, i) {
        return No(n, "toString", {
          configurable: !0,
          enumerable: !1,
          value: ml(i),
          writable: !0
        });
      } : un;
      function Ub(n) {
        return is(Wi(n));
      }
      function _n(n, i, s) {
        var d = -1, m = n.length;
        i < 0 && (i = -i > m ? 0 : m + i), s = s > m ? m : s, s < 0 && (s += m), m = i > s ? 0 : s - i >>> 0, i >>>= 0;
        for (var I = L(m); ++d < m; )
          I[d] = n[d + i];
        return I;
      }
      function jb(n, i) {
        var s;
        return Or(n, function(d, m, I) {
          return s = i(d, m, I), !s;
        }), !!s;
      }
      function jo(n, i, s) {
        var d = 0, m = n == null ? d : n.length;
        if (typeof i == "number" && i === i && m <= S) {
          for (; d < m; ) {
            var I = d + m >>> 1, x = n[I];
            x !== null && !mn(x) && (s ? x <= i : x < i) ? d = I + 1 : m = I;
          }
          return m;
        }
        return za(n, i, un, s);
      }
      function za(n, i, s, d) {
        var m = 0, I = n == null ? 0 : n.length;
        if (I === 0)
          return 0;
        i = s(i);
        for (var x = i !== i, R = i === null, B = mn(i), X = i === r; m < I; ) {
          var H = Wo((m + I) / 2), J = s(n[H]), ne = J !== r, ce = J === null, ye = J === J, De = mn(J);
          if (x)
            var ve = d || ye;
          else X ? ve = ye && (d || ne) : R ? ve = ye && ne && (d || !ce) : B ? ve = ye && ne && !ce && (d || !De) : ce || De ? ve = !1 : ve = d ? J <= i : J < i;
          ve ? m = H + 1 : I = H;
        }
        return Vt(I, ke);
      }
      function Tf(n, i) {
        for (var s = -1, d = n.length, m = 0, I = []; ++s < d; ) {
          var x = n[s], R = i ? i(x) : x;
          if (!s || !Hn(R, B)) {
            var B = R;
            I[m++] = x === 0 ? 0 : x;
          }
        }
        return I;
      }
      function Bf(n) {
        return typeof n == "number" ? n : mn(n) ? w : +n;
      }
      function gn(n) {
        if (typeof n == "string")
          return n;
        if (Oe(n))
          return pt(n, gn) + "";
        if (mn(n))
          return ff ? ff.call(n) : "";
        var i = n + "";
        return i == "0" && 1 / n == -1 / 0 ? "-0" : i;
      }
      function _r(n, i, s) {
        var d = -1, m = Ro, I = n.length, x = !0, R = [], B = R;
        if (s)
          x = !1, m = va;
        else if (I >= o) {
          var X = i ? null : o0(n);
          if (X)
            return Oo(X);
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
      function Za(n, i) {
        return i = Tr(i, n), n = sd(n, i), n == null || delete n[$n(Tn(i))];
      }
      function Gf(n, i, s, d) {
        return _u(n, i, s(ii(n, i)), d);
      }
      function Qo(n, i, s, d) {
        for (var m = n.length, I = d ? m : -1; (d ? I-- : ++I < m) && i(n[I], I, n); )
          ;
        return s ? _n(n, d ? 0 : I, d ? I + 1 : m) : _n(n, d ? I + 1 : 0, d ? m : I);
      }
      function kf(n, i) {
        var s = n;
        return s instanceof We && (s = s.value()), Ia(i, function(d, m) {
          return m.func.apply(m.thisArg, Fr([d], m.args));
        }, s);
      }
      function Ya(n, i, s) {
        var d = n.length;
        if (d < 2)
          return d ? _r(n[0]) : [];
        for (var m = -1, I = L(d); ++m < d; )
          for (var x = n[m], R = -1; ++R < d; )
            R != m && (I[m] = Ru(I[m] || x, n[R], i, s));
        return _r(Dt(I, 1), i, s);
      }
      function Lf(n, i, s) {
        for (var d = -1, m = n.length, I = i.length, x = {}; ++d < m; ) {
          var R = d < I ? i[d] : r;
          s(x, n[d], R);
        }
        return x;
      }
      function Ja(n) {
        return Ct(n) ? n : [];
      }
      function Ua(n) {
        return typeof n == "function" ? n : un;
      }
      function Tr(n, i) {
        return Oe(n) ? n : rl(n, i) ? [n] : fd($e(n));
      }
      var Qb = Ne;
      function Br(n, i, s) {
        var d = n.length;
        return s = s === r ? d : s, !i && s >= d ? n : _n(n, i, s);
      }
      var Df = Dm || function(n) {
        return Xe.clearTimeout(n);
      };
      function Mf(n, i) {
        if (i)
          return n.slice();
        var s = n.length, d = uf ? uf(s) : new n.constructor(s);
        return n.copy(d), d;
      }
      function ja(n) {
        var i = new n.constructor(n.byteLength);
        return new Lo(i).set(new Lo(n)), i;
      }
      function qb(n, i) {
        var s = i ? ja(n.buffer) : n.buffer;
        return new n.constructor(s, n.byteOffset, n.byteLength);
      }
      function $b(n) {
        var i = new n.constructor(n.source, Sn.exec(n));
        return i.lastIndex = n.lastIndex, i;
      }
      function Kb(n) {
        return Eu ? st(Eu.call(n)) : {};
      }
      function Nf(n, i) {
        var s = i ? ja(n.buffer) : n.buffer;
        return new n.constructor(s, n.byteOffset, n.length);
      }
      function Vf(n, i) {
        if (n !== i) {
          var s = n !== r, d = n === null, m = n === n, I = mn(n), x = i !== r, R = i === null, B = i === i, X = mn(i);
          if (!R && !X && !I && n > i || I && x && B && !R && !X || d && x && B || !s && B || !m)
            return 1;
          if (!d && !I && !X && n < i || X && s && m && !d && !I || R && s && m || !x && m || !B)
            return -1;
        }
        return 0;
      }
      function e0(n, i, s) {
        for (var d = -1, m = n.criteria, I = i.criteria, x = m.length, R = s.length; ++d < x; ) {
          var B = Vf(m[d], I[d]);
          if (B) {
            if (d >= R)
              return B;
            var X = s[d];
            return B * (X == "desc" ? -1 : 1);
          }
        }
        return n.index - i.index;
      }
      function Wf(n, i, s, d) {
        for (var m = -1, I = n.length, x = s.length, R = -1, B = i.length, X = Pt(I - x, 0), H = L(B + X), J = !d; ++R < B; )
          H[R] = i[R];
        for (; ++m < x; )
          (J || m < I) && (H[s[m]] = n[m]);
        for (; X--; )
          H[R++] = n[m++];
        return H;
      }
      function Xf(n, i, s, d) {
        for (var m = -1, I = n.length, x = -1, R = s.length, B = -1, X = i.length, H = Pt(I - R, 0), J = L(H + X), ne = !d; ++m < H; )
          J[m] = n[m];
        for (var ce = m; ++B < X; )
          J[ce + B] = i[B];
        for (; ++x < R; )
          (ne || m < I) && (J[ce + s[x]] = n[m++]);
        return J;
      }
      function tn(n, i) {
        var s = -1, d = n.length;
        for (i || (i = L(d)); ++s < d; )
          i[s] = n[s];
        return i;
      }
      function qn(n, i, s, d) {
        var m = !s;
        s || (s = {});
        for (var I = -1, x = i.length; ++I < x; ) {
          var R = i[I], B = d ? d(s[R], n[R], R, s, n) : r;
          B === r && (B = n[R]), m ? hr(s, R, B) : Fu(s, R, B);
        }
        return s;
      }
      function t0(n, i) {
        return qn(n, nl(n), i);
      }
      function n0(n, i) {
        return qn(n, td(n), i);
      }
      function qo(n, i) {
        return function(s, d) {
          var m = Oe(s) ? sm : wb, I = i ? i() : {};
          return m(s, n, me(d, 2), I);
        };
      }
      function Di(n) {
        return Ne(function(i, s) {
          var d = -1, m = s.length, I = m > 1 ? s[m - 1] : r, x = m > 2 ? s[2] : r;
          for (I = n.length > 3 && typeof I == "function" ? (m--, I) : r, x && Ut(s[0], s[1], x) && (I = m < 3 ? r : I, m = 1), i = st(i); ++d < m; ) {
            var R = s[d];
            R && n(i, R, d, I);
          }
          return i;
        });
      }
      function Hf(n, i) {
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
      function zf(n) {
        return function(i, s, d) {
          for (var m = -1, I = st(i), x = d(i), R = x.length; R--; ) {
            var B = x[n ? R : ++m];
            if (s(I[B], B, I) === !1)
              break;
          }
          return i;
        };
      }
      function r0(n, i, s) {
        var d = i & F, m = Tu(n);
        function I() {
          var x = this && this !== Xe && this instanceof I ? m : n;
          return x.apply(d ? s : this, arguments);
        }
        return I;
      }
      function Zf(n) {
        return function(i) {
          i = $e(i);
          var s = Oi(i) ? Wn(i) : r, d = s ? s[0] : i.charAt(0), m = s ? Br(s, 1).join("") : i.slice(1);
          return d[n]() + m;
        };
      }
      function Mi(n) {
        return function(i) {
          return Ia(Hd(Xd(i).replace(vu, "")), n, "");
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
          return gt(d) ? d : s;
        };
      }
      function i0(n, i, s) {
        var d = Tu(n);
        function m() {
          for (var I = arguments.length, x = L(I), R = I, B = Ni(m); R--; )
            x[R] = arguments[R];
          var X = I < 3 && x[0] !== B && x[I - 1] !== B ? [] : Rr(x, B);
          if (I -= X.length, I < s)
            return Qf(
              n,
              i,
              $o,
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
      function Yf(n) {
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
      function Jf(n) {
        return gr(function(i) {
          var s = i.length, d = s, m = Pn.prototype.thru;
          for (n && i.reverse(); d--; ) {
            var I = i[d];
            if (typeof I != "function")
              throw new Rn(l);
            if (m && !x && ns(I) == "wrapper")
              var x = new Pn([], !0);
          }
          for (d = x ? d : s; ++d < s; ) {
            I = i[d];
            var R = ns(I), B = R == "wrapper" ? el(I) : r;
            B && il(B[0]) && B[1] == (j | k | U | D) && !B[4].length && B[9] == 1 ? x = x[ns(B[0])].apply(x, B[3]) : x = I.length == 1 && il(I) ? x[R]() : x.thru(I);
          }
          return function() {
            var X = arguments, H = X[0];
            if (x && X.length == 1 && Oe(H))
              return x.plant(H).value();
            for (var J = 0, ne = s ? i[J].apply(this, X) : H; ++J < s; )
              ne = i[J].call(this, ne);
            return ne;
          };
        });
      }
      function $o(n, i, s, d, m, I, x, R, B, X) {
        var H = i & j, J = i & F, ne = i & P, ce = i & (k | M), ye = i & Y, De = ne ? r : Tu(n);
        function ve() {
          for (var Ve = arguments.length, He = L(Ve), bn = Ve; bn--; )
            He[bn] = arguments[bn];
          if (ce)
            var jt = Ni(ve), yn = mm(He, jt);
          if (d && (He = Wf(He, d, m, ce)), I && (He = Xf(He, I, x, ce)), Ve -= yn, ce && Ve < X) {
            var xt = Rr(He, jt);
            return Qf(
              n,
              i,
              $o,
              ve.placeholder,
              s,
              He,
              xt,
              R,
              B,
              X - Ve
            );
          }
          var zn = J ? s : this, vr = ne ? zn[n] : n;
          return Ve = He.length, R ? He = w0(He, R) : ye && Ve > 1 && He.reverse(), H && B < Ve && (He.length = B), this && this !== Xe && this instanceof ve && (vr = De || Tu(vr)), vr.apply(zn, He);
        }
        return ve;
      }
      function Uf(n, i) {
        return function(s, d) {
          return Tb(s, n, i(d), {});
        };
      }
      function Ko(n, i) {
        return function(s, d) {
          var m;
          if (s === r && d === r)
            return i;
          if (s !== r && (m = s), d !== r) {
            if (m === r)
              return d;
            typeof s == "string" || typeof d == "string" ? (s = gn(s), d = gn(d)) : (s = Bf(s), d = Bf(d)), m = n(s, d);
          }
          return m;
        };
      }
      function Qa(n) {
        return gr(function(i) {
          return i = pt(i, pn(me())), Ne(function(s) {
            var d = this;
            return n(i, function(m) {
              return Tt(m, d, s);
            });
          });
        });
      }
      function es(n, i) {
        i = i === r ? " " : gn(i);
        var s = i.length;
        if (s < 2)
          return s ? Ha(i, n) : i;
        var d = Ha(i, Vo(n / _i(i)));
        return Oi(i) ? Br(Wn(d), 0, n).join("") : d.slice(0, n);
      }
      function u0(n, i, s, d) {
        var m = i & F, I = Tu(n);
        function x() {
          for (var R = -1, B = arguments.length, X = -1, H = d.length, J = L(H + B), ne = this && this !== Xe && this instanceof x ? I : n; ++X < H; )
            J[X] = d[X];
          for (; B--; )
            J[X++] = arguments[++R];
          return Tt(ne, m ? s : this, J);
        }
        return x;
      }
      function jf(n) {
        return function(i, s, d) {
          return d && typeof d != "number" && Ut(i, s, d) && (s = d = r), i = yr(i), s === r ? (s = i, i = 0) : s = yr(s), d = d === r ? i < s ? 1 : -1 : yr(d), zb(i, s, d, n);
        };
      }
      function ts(n) {
        return function(i, s) {
          return typeof i == "string" && typeof s == "string" || (i = Bn(i), s = Bn(s)), n(i, s);
        };
      }
      function Qf(n, i, s, d, m, I, x, R, B, X) {
        var H = i & k, J = H ? x : r, ne = H ? r : x, ce = H ? I : r, ye = H ? r : I;
        i |= H ? U : G, i &= ~(H ? G : U), i & W || (i &= -4);
        var De = [
          n,
          i,
          m,
          ce,
          J,
          ye,
          ne,
          R,
          B,
          X
        ], ve = s.apply(r, De);
        return il(n) && ad(ve, De), ve.placeholder = d, ld(ve, n, i);
      }
      function qa(n) {
        var i = Rt[n];
        return function(s, d) {
          if (s = Bn(s), d = d == null ? 0 : Vt(Le(d), 292), d && lf(s)) {
            var m = ($e(s) + "e").split("e"), I = i(m[0] + "e" + (+m[1] + d));
            return m = ($e(I) + "e").split("e"), +(m[0] + "e" + (+m[1] - d));
          }
          return i(s);
        };
      }
      var o0 = Gi && 1 / Oo(new Gi([, -0]))[1] == we ? function(n) {
        return new Gi(n);
      } : vl;
      function qf(n) {
        return function(i) {
          var s = Wt(i);
          return s == ee ? Fa(i) : s == Lt ? Am(i) : gm(i, n(i));
        };
      }
      function pr(n, i, s, d, m, I, x, R) {
        var B = i & P;
        if (!B && typeof n != "function")
          throw new Rn(l);
        var X = d ? d.length : 0;
        if (X || (i &= -97, d = m = r), x = x === r ? x : Pt(Le(x), 0), R = R === r ? R : Le(R), X -= m ? m.length : 0, i & G) {
          var H = d, J = m;
          d = m = r;
        }
        var ne = B ? r : el(n), ce = [
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
        if (ne && C0(ce, ne), n = ce[0], i = ce[1], s = ce[2], d = ce[3], m = ce[4], R = ce[9] = ce[9] === r ? B ? 0 : n.length : Pt(ce[9] - X, 0), !R && i & (k | M) && (i &= -25), !i || i == F)
          var ye = r0(n, i, s);
        else i == k || i == M ? ye = i0(n, i, R) : (i == U || i == (F | U)) && !m.length ? ye = u0(n, i, s, d) : ye = $o.apply(r, ce);
        var De = ne ? _f : ad;
        return ld(De(ye, ce), n, i);
      }
      function $f(n, i, s, d) {
        return n === r || Hn(n, Bi[s]) && !tt.call(d, s) ? i : n;
      }
      function Kf(n, i, s, d, m, I) {
        return gt(n) && gt(i) && (I.set(i, n), Uo(n, i, r, Kf, I), I.delete(i)), n;
      }
      function s0(n) {
        return ku(n) ? r : n;
      }
      function ed(n, i, s, d, m, I) {
        var x = s & E, R = n.length, B = i.length;
        if (R != B && !(x && B > R))
          return !1;
        var X = I.get(n), H = I.get(i);
        if (X && H)
          return X == i && H == n;
        var J = -1, ne = !0, ce = s & A ? new ni() : r;
        for (I.set(n, i), I.set(i, n); ++J < R; ) {
          var ye = n[J], De = i[J];
          if (d)
            var ve = x ? d(De, ye, J, i, n, I) : d(ye, De, J, n, i, I);
          if (ve !== r) {
            if (ve)
              continue;
            ne = !1;
            break;
          }
          if (ce) {
            if (!Ca(i, function(Ve, He) {
              if (!Cu(ce, He) && (ye === Ve || m(ye, Ve, s, d, I)))
                return ce.push(He);
            })) {
              ne = !1;
              break;
            }
          } else if (!(ye === De || m(ye, De, s, d, I))) {
            ne = !1;
            break;
          }
        }
        return I.delete(n), I.delete(i), ne;
      }
      function a0(n, i, s, d, m, I, x) {
        switch (s) {
          case pe:
            if (n.byteLength != i.byteLength || n.byteOffset != i.byteOffset)
              return !1;
            n = n.buffer, i = i.buffer;
          case te:
            return !(n.byteLength != i.byteLength || !I(new Lo(n), new Lo(i)));
          case Me:
          case mt:
          case re:
            return Hn(+n, +i);
          case Gt:
            return n.name == i.name && n.message == i.message;
          case An:
          case et:
            return n == i + "";
          case ee:
            var R = Fa;
          case Lt:
            var B = d & E;
            if (R || (R = Oo), n.size != i.size && !B)
              return !1;
            var X = x.get(n);
            if (X)
              return X == i;
            d |= A, x.set(n, i);
            var H = ed(R(n), R(i), d, m, I, x);
            return x.delete(n), H;
          case Ue:
            if (Eu)
              return Eu.call(n) == Eu.call(i);
        }
        return !1;
      }
      function l0(n, i, s, d, m, I) {
        var x = s & E, R = $a(n), B = R.length, X = $a(i), H = X.length;
        if (B != H && !x)
          return !1;
        for (var J = B; J--; ) {
          var ne = R[J];
          if (!(x ? ne in i : tt.call(i, ne)))
            return !1;
        }
        var ce = I.get(n), ye = I.get(i);
        if (ce && ye)
          return ce == i && ye == n;
        var De = !0;
        I.set(n, i), I.set(i, n);
        for (var ve = x; ++J < B; ) {
          ne = R[J];
          var Ve = n[ne], He = i[ne];
          if (d)
            var bn = x ? d(He, Ve, ne, i, n, I) : d(Ve, He, ne, n, i, I);
          if (!(bn === r ? Ve === He || m(Ve, He, s, d, I) : bn)) {
            De = !1;
            break;
          }
          ve || (ve = ne == "constructor");
        }
        if (De && !ve) {
          var jt = n.constructor, yn = i.constructor;
          jt != yn && "constructor" in n && "constructor" in i && !(typeof jt == "function" && jt instanceof jt && typeof yn == "function" && yn instanceof yn) && (De = !1);
        }
        return I.delete(n), I.delete(i), De;
      }
      function gr(n) {
        return ol(od(n, r, gd), n + "");
      }
      function $a(n) {
        return If(n, Bt, nl);
      }
      function Ka(n) {
        return If(n, rn, td);
      }
      var el = Xo ? function(n) {
        return Xo.get(n);
      } : vl;
      function ns(n) {
        for (var i = n.name + "", s = ki[i], d = tt.call(ki, i) ? s.length : 0; d--; ) {
          var m = s[d], I = m.func;
          if (I == null || I == n)
            return m.name;
        }
        return i;
      }
      function Ni(n) {
        var i = tt.call(y, "placeholder") ? y : n;
        return i.placeholder;
      }
      function me() {
        var n = y.iteratee || bl;
        return n = n === bl ? Af : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function rs(n, i) {
        var s = n.__data__;
        return b0(i) ? s[typeof i == "string" ? "string" : "hash"] : s.map;
      }
      function tl(n) {
        for (var i = Bt(n), s = i.length; s--; ) {
          var d = i[s], m = n[d];
          i[s] = [d, m, id(m)];
        }
        return i;
      }
      function ui(n, i) {
        var s = Im(n, i);
        return xf(s) ? s : r;
      }
      function c0(n) {
        var i = tt.call(n, ei), s = n[ei];
        try {
          n[ei] = r;
          var d = !0;
        } catch {
        }
        var m = Go.call(n);
        return d && (i ? n[ei] = s : delete n[ei]), m;
      }
      var nl = Pa ? function(n) {
        return n == null ? [] : (n = st(n), Er(Pa(n), function(i) {
          return sf.call(n, i);
        }));
      } : Il, td = Pa ? function(n) {
        for (var i = []; n; )
          Fr(i, nl(n)), n = Do(n);
        return i;
      } : Il, Wt = Jt;
      (Oa && Wt(new Oa(new ArrayBuffer(1))) != pe || Au && Wt(new Au()) != ee || _a && Wt(_a.resolve()) != at || Gi && Wt(new Gi()) != Lt || wu && Wt(new wu()) != qe) && (Wt = function(n) {
        var i = Jt(n), s = i == Ee ? n.constructor : r, d = s ? oi(s) : "";
        if (d)
          switch (d) {
            case Ym:
              return pe;
            case Jm:
              return ee;
            case Um:
              return at;
            case jm:
              return Lt;
            case Qm:
              return qe;
          }
        return i;
      });
      function f0(n, i, s) {
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
              i = Vt(i, n + x);
              break;
            case "takeRight":
              n = Pt(n, i - x);
              break;
          }
        }
        return { start: n, end: i };
      }
      function d0(n) {
        var i = n.match(ar);
        return i ? i[1].split(Qs) : [];
      }
      function nd(n, i, s) {
        i = Tr(i, n);
        for (var d = -1, m = i.length, I = !1; ++d < m; ) {
          var x = $n(i[d]);
          if (!(I = n != null && s(n, x)))
            break;
          n = n[x];
        }
        return I || ++d != m ? I : (m = n == null ? 0 : n.length, !!m && cs(m) && mr(x, m) && (Oe(n) || si(n)));
      }
      function h0(n) {
        var i = n.length, s = new n.constructor(i);
        return i && typeof n[0] == "string" && tt.call(n, "index") && (s.index = n.index, s.input = n.input), s;
      }
      function rd(n) {
        return typeof n.constructor == "function" && !Bu(n) ? Li(Do(n)) : {};
      }
      function p0(n, i, s) {
        var d = n.constructor;
        switch (i) {
          case te:
            return ja(n);
          case Me:
          case mt:
            return new d(+n);
          case pe:
            return qb(n, s);
          case Te:
          case Be:
          case _t:
          case $t:
          case Zt:
          case wn:
          case Kt:
          case wt:
          case fn:
            return Nf(n, s);
          case ee:
            return new d();
          case re:
          case et:
            return new d(n);
          case An:
            return $b(n);
          case Lt:
            return new d();
          case Ue:
            return Kb(n);
        }
      }
      function g0(n, i) {
        var s = i.length;
        if (!s)
          return n;
        var d = s - 1;
        return i[d] = (s > 1 ? "& " : "") + i[d], i = i.join(s > 2 ? ", " : " "), n.replace(mu, `{
/* [wrapped with ` + i + `] */
`);
      }
      function m0(n) {
        return Oe(n) || si(n) || !!(af && n && n[af]);
      }
      function mr(n, i) {
        var s = typeof n;
        return i = i ?? Re, !!i && (s == "number" || s != "symbol" && ua.test(n)) && n > -1 && n % 1 == 0 && n < i;
      }
      function Ut(n, i, s) {
        if (!gt(s))
          return !1;
        var d = typeof i;
        return (d == "number" ? nn(s) && mr(i, s.length) : d == "string" && i in s) ? Hn(s[i], n) : !1;
      }
      function rl(n, i) {
        if (Oe(n))
          return !1;
        var s = typeof n;
        return s == "number" || s == "symbol" || s == "boolean" || n == null || mn(n) ? !0 : Js.test(n) || !Ur.test(n) || i != null && n in st(i);
      }
      function b0(n) {
        var i = typeof n;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? n !== "__proto__" : n === null;
      }
      function il(n) {
        var i = ns(n), s = y[i];
        if (typeof s != "function" || !(i in We.prototype))
          return !1;
        if (n === s)
          return !0;
        var d = el(s);
        return !!d && n === d[0];
      }
      function y0(n) {
        return !!rf && rf in n;
      }
      var v0 = To ? br : Cl;
      function Bu(n) {
        var i = n && n.constructor, s = typeof i == "function" && i.prototype || Bi;
        return n === s;
      }
      function id(n) {
        return n === n && !gt(n);
      }
      function ud(n, i) {
        return function(s) {
          return s == null ? !1 : s[n] === i && (i !== r || n in st(s));
        };
      }
      function I0(n) {
        var i = as(n, function(d) {
          return s.size === h && s.clear(), d;
        }), s = i.cache;
        return i;
      }
      function C0(n, i) {
        var s = n[1], d = i[1], m = s | d, I = m < (F | P | j), x = d == j && s == k || d == j && s == D && n[7].length <= i[8] || d == (j | D) && i[7].length <= i[8] && s == k;
        if (!(I || x))
          return n;
        d & F && (n[2] = i[2], m |= s & F ? 0 : W);
        var R = i[3];
        if (R) {
          var B = n[3];
          n[3] = B ? Wf(B, R, i[4]) : R, n[4] = B ? Rr(n[3], p) : i[4];
        }
        return R = i[5], R && (B = n[5], n[5] = B ? Xf(B, R, i[6]) : R, n[6] = B ? Rr(n[5], p) : i[6]), R = i[7], R && (n[7] = R), d & j && (n[8] = n[8] == null ? i[8] : Vt(n[8], i[8])), n[9] == null && (n[9] = i[9]), n[0] = i[0], n[1] = m, n;
      }
      function x0(n) {
        var i = [];
        if (n != null)
          for (var s in st(n))
            i.push(s);
        return i;
      }
      function A0(n) {
        return Go.call(n);
      }
      function od(n, i, s) {
        return i = Pt(i === r ? n.length - 1 : i, 0), function() {
          for (var d = arguments, m = -1, I = Pt(d.length - i, 0), x = L(I); ++m < I; )
            x[m] = d[i + m];
          m = -1;
          for (var R = L(i + 1); ++m < i; )
            R[m] = d[m];
          return R[i] = s(x), Tt(n, this, R);
        };
      }
      function sd(n, i) {
        return i.length < 2 ? n : ii(n, _n(i, 0, -1));
      }
      function w0(n, i) {
        for (var s = n.length, d = Vt(i.length, s), m = tn(n); d--; ) {
          var I = i[d];
          n[d] = mr(I, s) ? m[I] : r;
        }
        return n;
      }
      function ul(n, i) {
        if (!(i === "constructor" && typeof n[i] == "function") && i != "__proto__")
          return n[i];
      }
      var ad = cd(_f), Gu = Nm || function(n, i) {
        return Xe.setTimeout(n, i);
      }, ol = cd(Jb);
      function ld(n, i, s) {
        var d = i + "";
        return ol(n, g0(d, S0(d0(d), s)));
      }
      function cd(n) {
        var i = 0, s = 0;
        return function() {
          var d = Hm(), m = K - (d - s);
          if (s = d, m > 0) {
            if (++i >= Z)
              return arguments[0];
          } else
            i = 0;
          return n.apply(r, arguments);
        };
      }
      function is(n, i) {
        var s = -1, d = n.length, m = d - 1;
        for (i = i === r ? d : i; ++s < i; ) {
          var I = Xa(s, m), x = n[I];
          n[I] = n[s], n[s] = x;
        }
        return n.length = i, n;
      }
      var fd = I0(function(n) {
        var i = [];
        return n.charCodeAt(0) === 46 && i.push(""), n.replace(Us, function(s, d, m, I) {
          i.push(m ? I.replace(Ks, "$1") : d || s);
        }), i;
      });
      function $n(n) {
        if (typeof n == "string" || mn(n))
          return n;
        var i = n + "";
        return i == "0" && 1 / n == -1 / 0 ? "-0" : i;
      }
      function oi(n) {
        if (n != null) {
          try {
            return Bo.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function S0(n, i) {
        return Fn(Ye, function(s) {
          var d = "_." + s[0];
          i & s[1] && !Ro(n, d) && n.push(d);
        }), n.sort();
      }
      function dd(n) {
        if (n instanceof We)
          return n.clone();
        var i = new Pn(n.__wrapped__, n.__chain__);
        return i.__actions__ = tn(n.__actions__), i.__index__ = n.__index__, i.__values__ = n.__values__, i;
      }
      function E0(n, i, s) {
        (s ? Ut(n, i, s) : i === r) ? i = 1 : i = Pt(Le(i), 0);
        var d = n == null ? 0 : n.length;
        if (!d || i < 1)
          return [];
        for (var m = 0, I = 0, x = L(Vo(d / i)); m < d; )
          x[I++] = _n(n, m, m += i);
        return x;
      }
      function F0(n) {
        for (var i = -1, s = n == null ? 0 : n.length, d = 0, m = []; ++i < s; ) {
          var I = n[i];
          I && (m[d++] = I);
        }
        return m;
      }
      function R0() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var i = L(n - 1), s = arguments[0], d = n; d--; )
          i[d - 1] = arguments[d];
        return Fr(Oe(s) ? tn(s) : [s], Dt(i, 1));
      }
      var P0 = Ne(function(n, i) {
        return Ct(n) ? Ru(n, Dt(i, 1, Ct, !0)) : [];
      }), O0 = Ne(function(n, i) {
        var s = Tn(i);
        return Ct(s) && (s = r), Ct(n) ? Ru(n, Dt(i, 1, Ct, !0), me(s, 2)) : [];
      }), _0 = Ne(function(n, i) {
        var s = Tn(i);
        return Ct(s) && (s = r), Ct(n) ? Ru(n, Dt(i, 1, Ct, !0), r, s) : [];
      });
      function T0(n, i, s) {
        var d = n == null ? 0 : n.length;
        return d ? (i = s || i === r ? 1 : Le(i), _n(n, i < 0 ? 0 : i, d)) : [];
      }
      function B0(n, i, s) {
        var d = n == null ? 0 : n.length;
        return d ? (i = s || i === r ? 1 : Le(i), i = d - i, _n(n, 0, i < 0 ? 0 : i)) : [];
      }
      function G0(n, i) {
        return n && n.length ? Qo(n, me(i, 3), !0, !0) : [];
      }
      function k0(n, i) {
        return n && n.length ? Qo(n, me(i, 3), !0) : [];
      }
      function L0(n, i, s, d) {
        var m = n == null ? 0 : n.length;
        return m ? (s && typeof s != "number" && Ut(n, i, s) && (s = 0, d = m), Rb(n, i, s, d)) : [];
      }
      function hd(n, i, s) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = s == null ? 0 : Le(s);
        return m < 0 && (m = Pt(d + m, 0)), Po(n, me(i, 3), m);
      }
      function pd(n, i, s) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = d - 1;
        return s !== r && (m = Le(s), m = s < 0 ? Pt(d + m, 0) : Vt(m, d - 1)), Po(n, me(i, 3), m, !0);
      }
      function gd(n) {
        var i = n == null ? 0 : n.length;
        return i ? Dt(n, 1) : [];
      }
      function D0(n) {
        var i = n == null ? 0 : n.length;
        return i ? Dt(n, we) : [];
      }
      function M0(n, i) {
        var s = n == null ? 0 : n.length;
        return s ? (i = i === r ? 1 : Le(i), Dt(n, i)) : [];
      }
      function N0(n) {
        for (var i = -1, s = n == null ? 0 : n.length, d = {}; ++i < s; ) {
          var m = n[i];
          d[m[0]] = m[1];
        }
        return d;
      }
      function md(n) {
        return n && n.length ? n[0] : r;
      }
      function V0(n, i, s) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = s == null ? 0 : Le(s);
        return m < 0 && (m = Pt(d + m, 0)), Pi(n, i, m);
      }
      function W0(n) {
        var i = n == null ? 0 : n.length;
        return i ? _n(n, 0, -1) : [];
      }
      var X0 = Ne(function(n) {
        var i = pt(n, Ja);
        return i.length && i[0] === n[0] ? Da(i) : [];
      }), H0 = Ne(function(n) {
        var i = Tn(n), s = pt(n, Ja);
        return i === Tn(s) ? i = r : s.pop(), s.length && s[0] === n[0] ? Da(s, me(i, 2)) : [];
      }), z0 = Ne(function(n) {
        var i = Tn(n), s = pt(n, Ja);
        return i = typeof i == "function" ? i : r, i && s.pop(), s.length && s[0] === n[0] ? Da(s, r, i) : [];
      });
      function Z0(n, i) {
        return n == null ? "" : Wm.call(n, i);
      }
      function Tn(n) {
        var i = n == null ? 0 : n.length;
        return i ? n[i - 1] : r;
      }
      function Y0(n, i, s) {
        var d = n == null ? 0 : n.length;
        if (!d)
          return -1;
        var m = d;
        return s !== r && (m = Le(s), m = m < 0 ? Pt(d + m, 0) : Vt(m, d - 1)), i === i ? Sm(n, i, m) : Po(n, jc, m, !0);
      }
      function J0(n, i) {
        return n && n.length ? Ff(n, Le(i)) : r;
      }
      var U0 = Ne(bd);
      function bd(n, i) {
        return n && n.length && i && i.length ? Wa(n, i) : n;
      }
      function j0(n, i, s) {
        return n && n.length && i && i.length ? Wa(n, i, me(s, 2)) : n;
      }
      function Q0(n, i, s) {
        return n && n.length && i && i.length ? Wa(n, i, r, s) : n;
      }
      var q0 = gr(function(n, i) {
        var s = n == null ? 0 : n.length, d = Ba(n, i);
        return Of(n, pt(i, function(m) {
          return mr(m, s) ? +m : m;
        }).sort(Vf)), d;
      });
      function $0(n, i) {
        var s = [];
        if (!(n && n.length))
          return s;
        var d = -1, m = [], I = n.length;
        for (i = me(i, 3); ++d < I; ) {
          var x = n[d];
          i(x, d, n) && (s.push(x), m.push(d));
        }
        return Of(n, m), s;
      }
      function sl(n) {
        return n == null ? n : Zm.call(n);
      }
      function K0(n, i, s) {
        var d = n == null ? 0 : n.length;
        return d ? (s && typeof s != "number" && Ut(n, i, s) ? (i = 0, s = d) : (i = i == null ? 0 : Le(i), s = s === r ? d : Le(s)), _n(n, i, s)) : [];
      }
      function ey(n, i) {
        return jo(n, i);
      }
      function ty(n, i, s) {
        return za(n, i, me(s, 2));
      }
      function ny(n, i) {
        var s = n == null ? 0 : n.length;
        if (s) {
          var d = jo(n, i);
          if (d < s && Hn(n[d], i))
            return d;
        }
        return -1;
      }
      function ry(n, i) {
        return jo(n, i, !0);
      }
      function iy(n, i, s) {
        return za(n, i, me(s, 2), !0);
      }
      function uy(n, i) {
        var s = n == null ? 0 : n.length;
        if (s) {
          var d = jo(n, i, !0) - 1;
          if (Hn(n[d], i))
            return d;
        }
        return -1;
      }
      function oy(n) {
        return n && n.length ? Tf(n) : [];
      }
      function sy(n, i) {
        return n && n.length ? Tf(n, me(i, 2)) : [];
      }
      function ay(n) {
        var i = n == null ? 0 : n.length;
        return i ? _n(n, 1, i) : [];
      }
      function ly(n, i, s) {
        return n && n.length ? (i = s || i === r ? 1 : Le(i), _n(n, 0, i < 0 ? 0 : i)) : [];
      }
      function cy(n, i, s) {
        var d = n == null ? 0 : n.length;
        return d ? (i = s || i === r ? 1 : Le(i), i = d - i, _n(n, i < 0 ? 0 : i, d)) : [];
      }
      function fy(n, i) {
        return n && n.length ? Qo(n, me(i, 3), !1, !0) : [];
      }
      function dy(n, i) {
        return n && n.length ? Qo(n, me(i, 3)) : [];
      }
      var hy = Ne(function(n) {
        return _r(Dt(n, 1, Ct, !0));
      }), py = Ne(function(n) {
        var i = Tn(n);
        return Ct(i) && (i = r), _r(Dt(n, 1, Ct, !0), me(i, 2));
      }), gy = Ne(function(n) {
        var i = Tn(n);
        return i = typeof i == "function" ? i : r, _r(Dt(n, 1, Ct, !0), r, i);
      });
      function my(n) {
        return n && n.length ? _r(n) : [];
      }
      function by(n, i) {
        return n && n.length ? _r(n, me(i, 2)) : [];
      }
      function yy(n, i) {
        return i = typeof i == "function" ? i : r, n && n.length ? _r(n, r, i) : [];
      }
      function al(n) {
        if (!(n && n.length))
          return [];
        var i = 0;
        return n = Er(n, function(s) {
          if (Ct(s))
            return i = Pt(s.length, i), !0;
        }), Sa(i, function(s) {
          return pt(n, xa(s));
        });
      }
      function yd(n, i) {
        if (!(n && n.length))
          return [];
        var s = al(n);
        return i == null ? s : pt(s, function(d) {
          return Tt(i, r, d);
        });
      }
      var vy = Ne(function(n, i) {
        return Ct(n) ? Ru(n, i) : [];
      }), Iy = Ne(function(n) {
        return Ya(Er(n, Ct));
      }), Cy = Ne(function(n) {
        var i = Tn(n);
        return Ct(i) && (i = r), Ya(Er(n, Ct), me(i, 2));
      }), xy = Ne(function(n) {
        var i = Tn(n);
        return i = typeof i == "function" ? i : r, Ya(Er(n, Ct), r, i);
      }), Ay = Ne(al);
      function wy(n, i) {
        return Lf(n || [], i || [], Fu);
      }
      function Sy(n, i) {
        return Lf(n || [], i || [], _u);
      }
      var Ey = Ne(function(n) {
        var i = n.length, s = i > 1 ? n[i - 1] : r;
        return s = typeof s == "function" ? (n.pop(), s) : r, yd(n, s);
      });
      function vd(n) {
        var i = y(n);
        return i.__chain__ = !0, i;
      }
      function Fy(n, i) {
        return i(n), n;
      }
      function us(n, i) {
        return i(n);
      }
      var Ry = gr(function(n) {
        var i = n.length, s = i ? n[0] : 0, d = this.__wrapped__, m = function(I) {
          return Ba(I, n);
        };
        return i > 1 || this.__actions__.length || !(d instanceof We) || !mr(s) ? this.thru(m) : (d = d.slice(s, +s + (i ? 1 : 0)), d.__actions__.push({
          func: us,
          args: [m],
          thisArg: r
        }), new Pn(d, this.__chain__).thru(function(I) {
          return i && !I.length && I.push(r), I;
        }));
      });
      function Py() {
        return vd(this);
      }
      function Oy() {
        return new Pn(this.value(), this.__chain__);
      }
      function _y() {
        this.__values__ === r && (this.__values__ = Bd(this.value()));
        var n = this.__index__ >= this.__values__.length, i = n ? r : this.__values__[this.__index__++];
        return { done: n, value: i };
      }
      function Ty() {
        return this;
      }
      function By(n) {
        for (var i, s = this; s instanceof zo; ) {
          var d = dd(s);
          d.__index__ = 0, d.__values__ = r, i ? m.__wrapped__ = d : i = d;
          var m = d;
          s = s.__wrapped__;
        }
        return m.__wrapped__ = n, i;
      }
      function Gy() {
        var n = this.__wrapped__;
        if (n instanceof We) {
          var i = n;
          return this.__actions__.length && (i = new We(this)), i = i.reverse(), i.__actions__.push({
            func: us,
            args: [sl],
            thisArg: r
          }), new Pn(i, this.__chain__);
        }
        return this.thru(sl);
      }
      function ky() {
        return kf(this.__wrapped__, this.__actions__);
      }
      var Ly = qo(function(n, i, s) {
        tt.call(n, s) ? ++n[s] : hr(n, s, 1);
      });
      function Dy(n, i, s) {
        var d = Oe(n) ? Jc : Fb;
        return s && Ut(n, i, s) && (i = r), d(n, me(i, 3));
      }
      function My(n, i) {
        var s = Oe(n) ? Er : yf;
        return s(n, me(i, 3));
      }
      var Ny = Yf(hd), Vy = Yf(pd);
      function Wy(n, i) {
        return Dt(os(n, i), 1);
      }
      function Xy(n, i) {
        return Dt(os(n, i), we);
      }
      function Hy(n, i, s) {
        return s = s === r ? 1 : Le(s), Dt(os(n, i), s);
      }
      function Id(n, i) {
        var s = Oe(n) ? Fn : Or;
        return s(n, me(i, 3));
      }
      function Cd(n, i) {
        var s = Oe(n) ? am : bf;
        return s(n, me(i, 3));
      }
      var zy = qo(function(n, i, s) {
        tt.call(n, s) ? n[s].push(i) : hr(n, s, [i]);
      });
      function Zy(n, i, s, d) {
        n = nn(n) ? n : Wi(n), s = s && !d ? Le(s) : 0;
        var m = n.length;
        return s < 0 && (s = Pt(m + s, 0)), fs(n) ? s <= m && n.indexOf(i, s) > -1 : !!m && Pi(n, i, s) > -1;
      }
      var Yy = Ne(function(n, i, s) {
        var d = -1, m = typeof i == "function", I = nn(n) ? L(n.length) : [];
        return Or(n, function(x) {
          I[++d] = m ? Tt(i, x, s) : Pu(x, i, s);
        }), I;
      }), Jy = qo(function(n, i, s) {
        hr(n, s, i);
      });
      function os(n, i) {
        var s = Oe(n) ? pt : wf;
        return s(n, me(i, 3));
      }
      function Uy(n, i, s, d) {
        return n == null ? [] : (Oe(i) || (i = i == null ? [] : [i]), s = d ? r : s, Oe(s) || (s = s == null ? [] : [s]), Rf(n, i, s));
      }
      var jy = qo(function(n, i, s) {
        n[s ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function Qy(n, i, s) {
        var d = Oe(n) ? Ia : qc, m = arguments.length < 3;
        return d(n, me(i, 4), s, m, Or);
      }
      function qy(n, i, s) {
        var d = Oe(n) ? lm : qc, m = arguments.length < 3;
        return d(n, me(i, 4), s, m, bf);
      }
      function $y(n, i) {
        var s = Oe(n) ? Er : yf;
        return s(n, ls(me(i, 3)));
      }
      function Ky(n) {
        var i = Oe(n) ? hf : Zb;
        return i(n);
      }
      function ev(n, i, s) {
        (s ? Ut(n, i, s) : i === r) ? i = 1 : i = Le(i);
        var d = Oe(n) ? xb : Yb;
        return d(n, i);
      }
      function tv(n) {
        var i = Oe(n) ? Ab : Ub;
        return i(n);
      }
      function nv(n) {
        if (n == null)
          return 0;
        if (nn(n))
          return fs(n) ? _i(n) : n.length;
        var i = Wt(n);
        return i == ee || i == Lt ? n.size : Na(n).length;
      }
      function rv(n, i, s) {
        var d = Oe(n) ? Ca : jb;
        return s && Ut(n, i, s) && (i = r), d(n, me(i, 3));
      }
      var iv = Ne(function(n, i) {
        if (n == null)
          return [];
        var s = i.length;
        return s > 1 && Ut(n, i[0], i[1]) ? i = [] : s > 2 && Ut(i[0], i[1], i[2]) && (i = [i[0]]), Rf(n, Dt(i, 1), []);
      }), ss = Mm || function() {
        return Xe.Date.now();
      };
      function uv(n, i) {
        if (typeof i != "function")
          throw new Rn(l);
        return n = Le(n), function() {
          if (--n < 1)
            return i.apply(this, arguments);
        };
      }
      function xd(n, i, s) {
        return i = s ? r : i, i = n && i == null ? n.length : i, pr(n, j, r, r, r, r, i);
      }
      function Ad(n, i) {
        var s;
        if (typeof i != "function")
          throw new Rn(l);
        return n = Le(n), function() {
          return --n > 0 && (s = i.apply(this, arguments)), n <= 1 && (i = r), s;
        };
      }
      var ll = Ne(function(n, i, s) {
        var d = F;
        if (s.length) {
          var m = Rr(s, Ni(ll));
          d |= U;
        }
        return pr(n, d, i, s, m);
      }), wd = Ne(function(n, i, s) {
        var d = F | P;
        if (s.length) {
          var m = Rr(s, Ni(wd));
          d |= U;
        }
        return pr(i, d, n, s, m);
      });
      function Sd(n, i, s) {
        i = s ? r : i;
        var d = pr(n, k, r, r, r, r, r, i);
        return d.placeholder = Sd.placeholder, d;
      }
      function Ed(n, i, s) {
        i = s ? r : i;
        var d = pr(n, M, r, r, r, r, r, i);
        return d.placeholder = Ed.placeholder, d;
      }
      function Fd(n, i, s) {
        var d, m, I, x, R, B, X = 0, H = !1, J = !1, ne = !0;
        if (typeof n != "function")
          throw new Rn(l);
        i = Bn(i) || 0, gt(s) && (H = !!s.leading, J = "maxWait" in s, I = J ? Pt(Bn(s.maxWait) || 0, i) : I, ne = "trailing" in s ? !!s.trailing : ne);
        function ce(xt) {
          var zn = d, vr = m;
          return d = m = r, X = xt, x = n.apply(vr, zn), x;
        }
        function ye(xt) {
          return X = xt, R = Gu(Ve, i), H ? ce(xt) : x;
        }
        function De(xt) {
          var zn = xt - B, vr = xt - X, Yd = i - zn;
          return J ? Vt(Yd, I - vr) : Yd;
        }
        function ve(xt) {
          var zn = xt - B, vr = xt - X;
          return B === r || zn >= i || zn < 0 || J && vr >= I;
        }
        function Ve() {
          var xt = ss();
          if (ve(xt))
            return He(xt);
          R = Gu(Ve, De(xt));
        }
        function He(xt) {
          return R = r, ne && d ? ce(xt) : (d = m = r, x);
        }
        function bn() {
          R !== r && Df(R), X = 0, d = B = m = R = r;
        }
        function jt() {
          return R === r ? x : He(ss());
        }
        function yn() {
          var xt = ss(), zn = ve(xt);
          if (d = arguments, m = this, B = xt, zn) {
            if (R === r)
              return ye(B);
            if (J)
              return Df(R), R = Gu(Ve, i), ce(B);
          }
          return R === r && (R = Gu(Ve, i)), x;
        }
        return yn.cancel = bn, yn.flush = jt, yn;
      }
      var ov = Ne(function(n, i) {
        return mf(n, 1, i);
      }), sv = Ne(function(n, i, s) {
        return mf(n, Bn(i) || 0, s);
      });
      function av(n) {
        return pr(n, Y);
      }
      function as(n, i) {
        if (typeof n != "function" || i != null && typeof i != "function")
          throw new Rn(l);
        var s = function() {
          var d = arguments, m = i ? i.apply(this, d) : d[0], I = s.cache;
          if (I.has(m))
            return I.get(m);
          var x = n.apply(this, d);
          return s.cache = I.set(m, x) || I, x;
        };
        return s.cache = new (as.Cache || dr)(), s;
      }
      as.Cache = dr;
      function ls(n) {
        if (typeof n != "function")
          throw new Rn(l);
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
      function lv(n) {
        return Ad(2, n);
      }
      var cv = Qb(function(n, i) {
        i = i.length == 1 && Oe(i[0]) ? pt(i[0], pn(me())) : pt(Dt(i, 1), pn(me()));
        var s = i.length;
        return Ne(function(d) {
          for (var m = -1, I = Vt(d.length, s); ++m < I; )
            d[m] = i[m].call(this, d[m]);
          return Tt(n, this, d);
        });
      }), cl = Ne(function(n, i) {
        var s = Rr(i, Ni(cl));
        return pr(n, U, r, i, s);
      }), Rd = Ne(function(n, i) {
        var s = Rr(i, Ni(Rd));
        return pr(n, G, r, i, s);
      }), fv = gr(function(n, i) {
        return pr(n, D, r, r, r, i);
      });
      function dv(n, i) {
        if (typeof n != "function")
          throw new Rn(l);
        return i = i === r ? i : Le(i), Ne(n, i);
      }
      function hv(n, i) {
        if (typeof n != "function")
          throw new Rn(l);
        return i = i == null ? 0 : Pt(Le(i), 0), Ne(function(s) {
          var d = s[i], m = Br(s, 0, i);
          return d && Fr(m, d), Tt(n, this, m);
        });
      }
      function pv(n, i, s) {
        var d = !0, m = !0;
        if (typeof n != "function")
          throw new Rn(l);
        return gt(s) && (d = "leading" in s ? !!s.leading : d, m = "trailing" in s ? !!s.trailing : m), Fd(n, i, {
          leading: d,
          maxWait: i,
          trailing: m
        });
      }
      function gv(n) {
        return xd(n, 1);
      }
      function mv(n, i) {
        return cl(Ua(i), n);
      }
      function bv() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return Oe(n) ? n : [n];
      }
      function yv(n) {
        return On(n, b);
      }
      function vv(n, i) {
        return i = typeof i == "function" ? i : r, On(n, b, i);
      }
      function Iv(n) {
        return On(n, g | b);
      }
      function Cv(n, i) {
        return i = typeof i == "function" ? i : r, On(n, g | b, i);
      }
      function xv(n, i) {
        return i == null || gf(n, i, Bt(i));
      }
      function Hn(n, i) {
        return n === i || n !== n && i !== i;
      }
      var Av = ts(La), wv = ts(function(n, i) {
        return n >= i;
      }), si = Cf(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Cf : function(n) {
        return bt(n) && tt.call(n, "callee") && !sf.call(n, "callee");
      }, Oe = L.isArray, Sv = Yt ? pn(Yt) : Bb;
      function nn(n) {
        return n != null && cs(n.length) && !br(n);
      }
      function Ct(n) {
        return bt(n) && nn(n);
      }
      function Ev(n) {
        return n === !0 || n === !1 || bt(n) && Jt(n) == Me;
      }
      var Gr = Vm || Cl, Fv = Vn ? pn(Vn) : Gb;
      function Rv(n) {
        return bt(n) && n.nodeType === 1 && !ku(n);
      }
      function Pv(n) {
        if (n == null)
          return !0;
        if (nn(n) && (Oe(n) || typeof n == "string" || typeof n.splice == "function" || Gr(n) || Vi(n) || si(n)))
          return !n.length;
        var i = Wt(n);
        if (i == ee || i == Lt)
          return !n.size;
        if (Bu(n))
          return !Na(n).length;
        for (var s in n)
          if (tt.call(n, s))
            return !1;
        return !0;
      }
      function Ov(n, i) {
        return Ou(n, i);
      }
      function _v(n, i, s) {
        s = typeof s == "function" ? s : r;
        var d = s ? s(n, i) : r;
        return d === r ? Ou(n, i, r, s) : !!d;
      }
      function fl(n) {
        if (!bt(n))
          return !1;
        var i = Jt(n);
        return i == Gt || i == Nt || typeof n.message == "string" && typeof n.name == "string" && !ku(n);
      }
      function Tv(n) {
        return typeof n == "number" && lf(n);
      }
      function br(n) {
        if (!gt(n))
          return !1;
        var i = Jt(n);
        return i == kt || i == Mn || i == At || i == Ot;
      }
      function Pd(n) {
        return typeof n == "number" && n == Le(n);
      }
      function cs(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= Re;
      }
      function gt(n) {
        var i = typeof n;
        return n != null && (i == "object" || i == "function");
      }
      function bt(n) {
        return n != null && typeof n == "object";
      }
      var Od = En ? pn(En) : Lb;
      function Bv(n, i) {
        return n === i || Ma(n, i, tl(i));
      }
      function Gv(n, i, s) {
        return s = typeof s == "function" ? s : r, Ma(n, i, tl(i), s);
      }
      function kv(n) {
        return _d(n) && n != +n;
      }
      function Lv(n) {
        if (v0(n))
          throw new Fe(a);
        return xf(n);
      }
      function Dv(n) {
        return n === null;
      }
      function Mv(n) {
        return n == null;
      }
      function _d(n) {
        return typeof n == "number" || bt(n) && Jt(n) == re;
      }
      function ku(n) {
        if (!bt(n) || Jt(n) != Ee)
          return !1;
        var i = Do(n);
        if (i === null)
          return !0;
        var s = tt.call(i, "constructor") && i.constructor;
        return typeof s == "function" && s instanceof s && Bo.call(s) == Gm;
      }
      var dl = jn ? pn(jn) : Db;
      function Nv(n) {
        return Pd(n) && n >= -9007199254740991 && n <= Re;
      }
      var Td = Iu ? pn(Iu) : Mb;
      function fs(n) {
        return typeof n == "string" || !Oe(n) && bt(n) && Jt(n) == et;
      }
      function mn(n) {
        return typeof n == "symbol" || bt(n) && Jt(n) == Ue;
      }
      var Vi = Kr ? pn(Kr) : Nb;
      function Vv(n) {
        return n === r;
      }
      function Wv(n) {
        return bt(n) && Wt(n) == qe;
      }
      function Xv(n) {
        return bt(n) && Jt(n) == N;
      }
      var Hv = ts(Va), zv = ts(function(n, i) {
        return n <= i;
      });
      function Bd(n) {
        if (!n)
          return [];
        if (nn(n))
          return fs(n) ? Wn(n) : tn(n);
        if (xu && n[xu])
          return xm(n[xu]());
        var i = Wt(n), s = i == ee ? Fa : i == Lt ? Oo : Wi;
        return s(n);
      }
      function yr(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = Bn(n), n === we || n === -1 / 0) {
          var i = n < 0 ? -1 : 1;
          return i * Je;
        }
        return n === n ? n : 0;
      }
      function Le(n) {
        var i = yr(n), s = i % 1;
        return i === i ? s ? i - s : i : 0;
      }
      function Gd(n) {
        return n ? ri(Le(n), 0, Ie) : 0;
      }
      function Bn(n) {
        if (typeof n == "number")
          return n;
        if (mn(n))
          return w;
        if (gt(n)) {
          var i = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = gt(i) ? i + "" : i;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = $c(n);
        var s = na.test(n);
        return s || ia.test(n) ? Pe(n.slice(2), s ? 2 : 8) : ta.test(n) ? w : +n;
      }
      function kd(n) {
        return qn(n, rn(n));
      }
      function Zv(n) {
        return n ? ri(Le(n), -9007199254740991, Re) : n === 0 ? n : 0;
      }
      function $e(n) {
        return n == null ? "" : gn(n);
      }
      var Yv = Di(function(n, i) {
        if (Bu(i) || nn(i)) {
          qn(i, Bt(i), n);
          return;
        }
        for (var s in i)
          tt.call(i, s) && Fu(n, s, i[s]);
      }), Ld = Di(function(n, i) {
        qn(i, rn(i), n);
      }), ds = Di(function(n, i, s, d) {
        qn(i, rn(i), n, d);
      }), Jv = Di(function(n, i, s, d) {
        qn(i, Bt(i), n, d);
      }), Uv = gr(Ba);
      function jv(n, i) {
        var s = Li(n);
        return i == null ? s : pf(s, i);
      }
      var Qv = Ne(function(n, i) {
        n = st(n);
        var s = -1, d = i.length, m = d > 2 ? i[2] : r;
        for (m && Ut(i[0], i[1], m) && (d = 1); ++s < d; )
          for (var I = i[s], x = rn(I), R = -1, B = x.length; ++R < B; ) {
            var X = x[R], H = n[X];
            (H === r || Hn(H, Bi[X]) && !tt.call(n, X)) && (n[X] = I[X]);
          }
        return n;
      }), qv = Ne(function(n) {
        return n.push(r, Kf), Tt(Dd, r, n);
      });
      function $v(n, i) {
        return Uc(n, me(i, 3), Qn);
      }
      function Kv(n, i) {
        return Uc(n, me(i, 3), ka);
      }
      function eI(n, i) {
        return n == null ? n : Ga(n, me(i, 3), rn);
      }
      function tI(n, i) {
        return n == null ? n : vf(n, me(i, 3), rn);
      }
      function nI(n, i) {
        return n && Qn(n, me(i, 3));
      }
      function rI(n, i) {
        return n && ka(n, me(i, 3));
      }
      function iI(n) {
        return n == null ? [] : Jo(n, Bt(n));
      }
      function uI(n) {
        return n == null ? [] : Jo(n, rn(n));
      }
      function hl(n, i, s) {
        var d = n == null ? r : ii(n, i);
        return d === r ? s : d;
      }
      function oI(n, i) {
        return n != null && nd(n, i, Pb);
      }
      function pl(n, i) {
        return n != null && nd(n, i, Ob);
      }
      var sI = Uf(function(n, i, s) {
        i != null && typeof i.toString != "function" && (i = Go.call(i)), n[i] = s;
      }, ml(un)), aI = Uf(function(n, i, s) {
        i != null && typeof i.toString != "function" && (i = Go.call(i)), tt.call(n, i) ? n[i].push(s) : n[i] = [s];
      }, me), lI = Ne(Pu);
      function Bt(n) {
        return nn(n) ? df(n) : Na(n);
      }
      function rn(n) {
        return nn(n) ? df(n, !0) : Vb(n);
      }
      function cI(n, i) {
        var s = {};
        return i = me(i, 3), Qn(n, function(d, m, I) {
          hr(s, i(d, m, I), d);
        }), s;
      }
      function fI(n, i) {
        var s = {};
        return i = me(i, 3), Qn(n, function(d, m, I) {
          hr(s, m, i(d, m, I));
        }), s;
      }
      var dI = Di(function(n, i, s) {
        Uo(n, i, s);
      }), Dd = Di(function(n, i, s, d) {
        Uo(n, i, s, d);
      }), hI = gr(function(n, i) {
        var s = {};
        if (n == null)
          return s;
        var d = !1;
        i = pt(i, function(I) {
          return I = Tr(I, n), d || (d = I.length > 1), I;
        }), qn(n, Ka(n), s), d && (s = On(s, g | v | b, s0));
        for (var m = i.length; m--; )
          Za(s, i[m]);
        return s;
      });
      function pI(n, i) {
        return Md(n, ls(me(i)));
      }
      var gI = gr(function(n, i) {
        return n == null ? {} : Xb(n, i);
      });
      function Md(n, i) {
        if (n == null)
          return {};
        var s = pt(Ka(n), function(d) {
          return [d];
        });
        return i = me(i), Pf(n, s, function(d, m) {
          return i(d, m[0]);
        });
      }
      function mI(n, i, s) {
        i = Tr(i, n);
        var d = -1, m = i.length;
        for (m || (m = 1, n = r); ++d < m; ) {
          var I = n == null ? r : n[$n(i[d])];
          I === r && (d = m, I = s), n = br(I) ? I.call(n) : I;
        }
        return n;
      }
      function bI(n, i, s) {
        return n == null ? n : _u(n, i, s);
      }
      function yI(n, i, s, d) {
        return d = typeof d == "function" ? d : r, n == null ? n : _u(n, i, s, d);
      }
      var Nd = qf(Bt), Vd = qf(rn);
      function vI(n, i, s) {
        var d = Oe(n), m = d || Gr(n) || Vi(n);
        if (i = me(i, 4), s == null) {
          var I = n && n.constructor;
          m ? s = d ? new I() : [] : gt(n) ? s = br(I) ? Li(Do(n)) : {} : s = {};
        }
        return (m ? Fn : Qn)(n, function(x, R, B) {
          return i(s, x, R, B);
        }), s;
      }
      function II(n, i) {
        return n == null ? !0 : Za(n, i);
      }
      function CI(n, i, s) {
        return n == null ? n : Gf(n, i, Ua(s));
      }
      function xI(n, i, s, d) {
        return d = typeof d == "function" ? d : r, n == null ? n : Gf(n, i, Ua(s), d);
      }
      function Wi(n) {
        return n == null ? [] : Ea(n, Bt(n));
      }
      function AI(n) {
        return n == null ? [] : Ea(n, rn(n));
      }
      function wI(n, i, s) {
        return s === r && (s = i, i = r), s !== r && (s = Bn(s), s = s === s ? s : 0), i !== r && (i = Bn(i), i = i === i ? i : 0), ri(Bn(n), i, s);
      }
      function SI(n, i, s) {
        return i = yr(i), s === r ? (s = i, i = 0) : s = yr(s), n = Bn(n), _b(n, i, s);
      }
      function EI(n, i, s) {
        if (s && typeof s != "boolean" && Ut(n, i, s) && (i = s = r), s === r && (typeof i == "boolean" ? (s = i, i = r) : typeof n == "boolean" && (s = n, n = r)), n === r && i === r ? (n = 0, i = 1) : (n = yr(n), i === r ? (i = n, n = 0) : i = yr(i)), n > i) {
          var d = n;
          n = i, i = d;
        }
        if (s || n % 1 || i % 1) {
          var m = cf();
          return Vt(n + m * (i - n + ut("1e-" + ((m + "").length - 1))), i);
        }
        return Xa(n, i);
      }
      var FI = Mi(function(n, i, s) {
        return i = i.toLowerCase(), n + (s ? Wd(i) : i);
      });
      function Wd(n) {
        return gl($e(n).toLowerCase());
      }
      function Xd(n) {
        return n = $e(n), n && n.replace(lr, bm).replace(ba, "");
      }
      function RI(n, i, s) {
        n = $e(n), i = gn(i);
        var d = n.length;
        s = s === r ? d : ri(Le(s), 0, d);
        var m = s;
        return s -= i.length, s >= 0 && n.slice(s, m) == i;
      }
      function PI(n) {
        return n = $e(n), n && Jr.test(n) ? n.replace(oo, ym) : n;
      }
      function OI(n) {
        return n = $e(n), n && js.test(n) ? n.replace(pu, "\\$&") : n;
      }
      var _I = Mi(function(n, i, s) {
        return n + (s ? "-" : "") + i.toLowerCase();
      }), TI = Mi(function(n, i, s) {
        return n + (s ? " " : "") + i.toLowerCase();
      }), BI = Zf("toLowerCase");
      function GI(n, i, s) {
        n = $e(n), i = Le(i);
        var d = i ? _i(n) : 0;
        if (!i || d >= i)
          return n;
        var m = (i - d) / 2;
        return es(Wo(m), s) + n + es(Vo(m), s);
      }
      function kI(n, i, s) {
        n = $e(n), i = Le(i);
        var d = i ? _i(n) : 0;
        return i && d < i ? n + es(i - d, s) : n;
      }
      function LI(n, i, s) {
        n = $e(n), i = Le(i);
        var d = i ? _i(n) : 0;
        return i && d < i ? es(i - d, s) + n : n;
      }
      function DI(n, i, s) {
        return s || i == null ? i = 0 : i && (i = +i), zm($e(n).replace(gu, ""), i || 0);
      }
      function MI(n, i, s) {
        return (s ? Ut(n, i, s) : i === r) ? i = 1 : i = Le(i), Ha($e(n), i);
      }
      function NI() {
        var n = arguments, i = $e(n[0]);
        return n.length < 3 ? i : i.replace(n[1], n[2]);
      }
      var VI = Mi(function(n, i, s) {
        return n + (s ? "_" : "") + i.toLowerCase();
      });
      function WI(n, i, s) {
        return s && typeof s != "number" && Ut(n, i, s) && (i = s = r), s = s === r ? Ie : s >>> 0, s ? (n = $e(n), n && (typeof i == "string" || i != null && !dl(i)) && (i = gn(i), !i && Oi(n)) ? Br(Wn(n), 0, s) : n.split(i, s)) : [];
      }
      var XI = Mi(function(n, i, s) {
        return n + (s ? " " : "") + gl(i);
      });
      function HI(n, i, s) {
        return n = $e(n), s = s == null ? 0 : ri(Le(s), 0, n.length), i = gn(i), n.slice(s, s + i.length) == i;
      }
      function zI(n, i, s) {
        var d = y.templateSettings;
        s && Ut(n, i, s) && (i = r), n = $e(n), i = ds({}, i, d, $f);
        var m = ds({}, i.imports, d.imports, $f), I = Bt(m), x = Ea(m, I), R, B, X = 0, H = i.interpolate || xi, J = "__p += '", ne = Ra(
          (i.escape || xi).source + "|" + H.source + "|" + (H === Ci ? ea : xi).source + "|" + (i.evaluate || xi).source + "|$",
          "g"
        ), ce = "//# sourceURL=" + (tt.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ya + "]") + `
`;
        n.replace(ne, function(ve, Ve, He, bn, jt, yn) {
          return He || (He = bn), J += n.slice(X, yn).replace(oa, vm), Ve && (R = !0, J += `' +
__e(` + Ve + `) +
'`), jt && (B = !0, J += `';
` + jt + `;
__p += '`), He && (J += `' +
((__t = (` + He + `)) == null ? '' : __t) +
'`), X = yn + ve.length, ve;
        }), J += `';
`;
        var ye = tt.call(i, "variable") && i.variable;
        if (!ye)
          J = `with (obj) {
` + J + `
}
`;
        else if ($s.test(ye))
          throw new Fe(c);
        J = (B ? J.replace(dn, "") : J).replace(sr, "$1").replace(io, "$1;"), J = "function(" + (ye || "obj") + `) {
` + (ye ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (R ? ", __e = _.escape" : "") + (B ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + J + `return __p
}`;
        var De = zd(function() {
          return je(I, ce + "return " + J).apply(r, x);
        });
        if (De.source = J, fl(De))
          throw De;
        return De;
      }
      function ZI(n) {
        return $e(n).toLowerCase();
      }
      function YI(n) {
        return $e(n).toUpperCase();
      }
      function JI(n, i, s) {
        if (n = $e(n), n && (s || i === r))
          return $c(n);
        if (!n || !(i = gn(i)))
          return n;
        var d = Wn(n), m = Wn(i), I = Kc(d, m), x = ef(d, m) + 1;
        return Br(d, I, x).join("");
      }
      function UI(n, i, s) {
        if (n = $e(n), n && (s || i === r))
          return n.slice(0, nf(n) + 1);
        if (!n || !(i = gn(i)))
          return n;
        var d = Wn(n), m = ef(d, Wn(i)) + 1;
        return Br(d, 0, m).join("");
      }
      function jI(n, i, s) {
        if (n = $e(n), n && (s || i === r))
          return n.replace(gu, "");
        if (!n || !(i = gn(i)))
          return n;
        var d = Wn(n), m = Kc(d, Wn(i));
        return Br(d, m).join("");
      }
      function QI(n, i) {
        var s = $, d = Q;
        if (gt(i)) {
          var m = "separator" in i ? i.separator : m;
          s = "length" in i ? Le(i.length) : s, d = "omission" in i ? gn(i.omission) : d;
        }
        n = $e(n);
        var I = n.length;
        if (Oi(n)) {
          var x = Wn(n);
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
        if (x && (R += B.length - R), dl(m)) {
          if (n.slice(R).search(m)) {
            var X, H = B;
            for (m.global || (m = Ra(m.source, $e(Sn.exec(m)) + "g")), m.lastIndex = 0; X = m.exec(H); )
              var J = X.index;
            B = B.slice(0, J === r ? R : J);
          }
        } else if (n.indexOf(gn(m), R) != R) {
          var ne = B.lastIndexOf(m);
          ne > -1 && (B = B.slice(0, ne));
        }
        return B + d;
      }
      function qI(n) {
        return n = $e(n), n && fu.test(n) ? n.replace(uo, Em) : n;
      }
      var $I = Mi(function(n, i, s) {
        return n + (s ? " " : "") + i.toUpperCase();
      }), gl = Zf("toUpperCase");
      function Hd(n, i, s) {
        return n = $e(n), i = s ? r : i, i === r ? Cm(n) ? Pm(n) : dm(n) : n.match(i) || [];
      }
      var zd = Ne(function(n, i) {
        try {
          return Tt(n, r, i);
        } catch (s) {
          return fl(s) ? s : new Fe(s);
        }
      }), KI = gr(function(n, i) {
        return Fn(i, function(s) {
          s = $n(s), hr(n, s, ll(n[s], n));
        }), n;
      });
      function e1(n) {
        var i = n == null ? 0 : n.length, s = me();
        return n = i ? pt(n, function(d) {
          if (typeof d[1] != "function")
            throw new Rn(l);
          return [s(d[0]), d[1]];
        }) : [], Ne(function(d) {
          for (var m = -1; ++m < i; ) {
            var I = n[m];
            if (Tt(I[0], this, d))
              return Tt(I[1], this, d);
          }
        });
      }
      function t1(n) {
        return Eb(On(n, g));
      }
      function ml(n) {
        return function() {
          return n;
        };
      }
      function n1(n, i) {
        return n == null || n !== n ? i : n;
      }
      var r1 = Jf(), i1 = Jf(!0);
      function un(n) {
        return n;
      }
      function bl(n) {
        return Af(typeof n == "function" ? n : On(n, g));
      }
      function u1(n) {
        return Sf(On(n, g));
      }
      function o1(n, i) {
        return Ef(n, On(i, g));
      }
      var s1 = Ne(function(n, i) {
        return function(s) {
          return Pu(s, n, i);
        };
      }), a1 = Ne(function(n, i) {
        return function(s) {
          return Pu(n, s, i);
        };
      });
      function yl(n, i, s) {
        var d = Bt(i), m = Jo(i, d);
        s == null && !(gt(i) && (m.length || !d.length)) && (s = i, i = n, n = this, m = Jo(i, Bt(i)));
        var I = !(gt(s) && "chain" in s) || !!s.chain, x = br(n);
        return Fn(m, function(R) {
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
      function l1() {
        return Xe._ === this && (Xe._ = km), this;
      }
      function vl() {
      }
      function c1(n) {
        return n = Le(n), Ne(function(i) {
          return Ff(i, n);
        });
      }
      var f1 = Qa(pt), d1 = Qa(Jc), h1 = Qa(Ca);
      function Zd(n) {
        return rl(n) ? xa($n(n)) : Hb(n);
      }
      function p1(n) {
        return function(i) {
          return n == null ? r : ii(n, i);
        };
      }
      var g1 = jf(), m1 = jf(!0);
      function Il() {
        return [];
      }
      function Cl() {
        return !1;
      }
      function b1() {
        return {};
      }
      function y1() {
        return "";
      }
      function v1() {
        return !0;
      }
      function I1(n, i) {
        if (n = Le(n), n < 1 || n > Re)
          return [];
        var s = Ie, d = Vt(n, Ie);
        i = me(i), n -= Ie;
        for (var m = Sa(d, i); ++s < n; )
          i(s);
        return m;
      }
      function C1(n) {
        return Oe(n) ? pt(n, $n) : mn(n) ? [n] : tn(fd($e(n)));
      }
      function x1(n) {
        var i = ++Bm;
        return $e(n) + i;
      }
      var A1 = Ko(function(n, i) {
        return n + i;
      }, 0), w1 = qa("ceil"), S1 = Ko(function(n, i) {
        return n / i;
      }, 1), E1 = qa("floor");
      function F1(n) {
        return n && n.length ? Yo(n, un, La) : r;
      }
      function R1(n, i) {
        return n && n.length ? Yo(n, me(i, 2), La) : r;
      }
      function P1(n) {
        return Qc(n, un);
      }
      function O1(n, i) {
        return Qc(n, me(i, 2));
      }
      function _1(n) {
        return n && n.length ? Yo(n, un, Va) : r;
      }
      function T1(n, i) {
        return n && n.length ? Yo(n, me(i, 2), Va) : r;
      }
      var B1 = Ko(function(n, i) {
        return n * i;
      }, 1), G1 = qa("round"), k1 = Ko(function(n, i) {
        return n - i;
      }, 0);
      function L1(n) {
        return n && n.length ? wa(n, un) : 0;
      }
      function D1(n, i) {
        return n && n.length ? wa(n, me(i, 2)) : 0;
      }
      return y.after = uv, y.ary = xd, y.assign = Yv, y.assignIn = Ld, y.assignInWith = ds, y.assignWith = Jv, y.at = Uv, y.before = Ad, y.bind = ll, y.bindAll = KI, y.bindKey = wd, y.castArray = bv, y.chain = vd, y.chunk = E0, y.compact = F0, y.concat = R0, y.cond = e1, y.conforms = t1, y.constant = ml, y.countBy = Ly, y.create = jv, y.curry = Sd, y.curryRight = Ed, y.debounce = Fd, y.defaults = Qv, y.defaultsDeep = qv, y.defer = ov, y.delay = sv, y.difference = P0, y.differenceBy = O0, y.differenceWith = _0, y.drop = T0, y.dropRight = B0, y.dropRightWhile = G0, y.dropWhile = k0, y.fill = L0, y.filter = My, y.flatMap = Wy, y.flatMapDeep = Xy, y.flatMapDepth = Hy, y.flatten = gd, y.flattenDeep = D0, y.flattenDepth = M0, y.flip = av, y.flow = r1, y.flowRight = i1, y.fromPairs = N0, y.functions = iI, y.functionsIn = uI, y.groupBy = zy, y.initial = W0, y.intersection = X0, y.intersectionBy = H0, y.intersectionWith = z0, y.invert = sI, y.invertBy = aI, y.invokeMap = Yy, y.iteratee = bl, y.keyBy = Jy, y.keys = Bt, y.keysIn = rn, y.map = os, y.mapKeys = cI, y.mapValues = fI, y.matches = u1, y.matchesProperty = o1, y.memoize = as, y.merge = dI, y.mergeWith = Dd, y.method = s1, y.methodOf = a1, y.mixin = yl, y.negate = ls, y.nthArg = c1, y.omit = hI, y.omitBy = pI, y.once = lv, y.orderBy = Uy, y.over = f1, y.overArgs = cv, y.overEvery = d1, y.overSome = h1, y.partial = cl, y.partialRight = Rd, y.partition = jy, y.pick = gI, y.pickBy = Md, y.property = Zd, y.propertyOf = p1, y.pull = U0, y.pullAll = bd, y.pullAllBy = j0, y.pullAllWith = Q0, y.pullAt = q0, y.range = g1, y.rangeRight = m1, y.rearg = fv, y.reject = $y, y.remove = $0, y.rest = dv, y.reverse = sl, y.sampleSize = ev, y.set = bI, y.setWith = yI, y.shuffle = tv, y.slice = K0, y.sortBy = iv, y.sortedUniq = oy, y.sortedUniqBy = sy, y.split = WI, y.spread = hv, y.tail = ay, y.take = ly, y.takeRight = cy, y.takeRightWhile = fy, y.takeWhile = dy, y.tap = Fy, y.throttle = pv, y.thru = us, y.toArray = Bd, y.toPairs = Nd, y.toPairsIn = Vd, y.toPath = C1, y.toPlainObject = kd, y.transform = vI, y.unary = gv, y.union = hy, y.unionBy = py, y.unionWith = gy, y.uniq = my, y.uniqBy = by, y.uniqWith = yy, y.unset = II, y.unzip = al, y.unzipWith = yd, y.update = CI, y.updateWith = xI, y.values = Wi, y.valuesIn = AI, y.without = vy, y.words = Hd, y.wrap = mv, y.xor = Iy, y.xorBy = Cy, y.xorWith = xy, y.zip = Ay, y.zipObject = wy, y.zipObjectDeep = Sy, y.zipWith = Ey, y.entries = Nd, y.entriesIn = Vd, y.extend = Ld, y.extendWith = ds, yl(y, y), y.add = A1, y.attempt = zd, y.camelCase = FI, y.capitalize = Wd, y.ceil = w1, y.clamp = wI, y.clone = yv, y.cloneDeep = Iv, y.cloneDeepWith = Cv, y.cloneWith = vv, y.conformsTo = xv, y.deburr = Xd, y.defaultTo = n1, y.divide = S1, y.endsWith = RI, y.eq = Hn, y.escape = PI, y.escapeRegExp = OI, y.every = Dy, y.find = Ny, y.findIndex = hd, y.findKey = $v, y.findLast = Vy, y.findLastIndex = pd, y.findLastKey = Kv, y.floor = E1, y.forEach = Id, y.forEachRight = Cd, y.forIn = eI, y.forInRight = tI, y.forOwn = nI, y.forOwnRight = rI, y.get = hl, y.gt = Av, y.gte = wv, y.has = oI, y.hasIn = pl, y.head = md, y.identity = un, y.includes = Zy, y.indexOf = V0, y.inRange = SI, y.invoke = lI, y.isArguments = si, y.isArray = Oe, y.isArrayBuffer = Sv, y.isArrayLike = nn, y.isArrayLikeObject = Ct, y.isBoolean = Ev, y.isBuffer = Gr, y.isDate = Fv, y.isElement = Rv, y.isEmpty = Pv, y.isEqual = Ov, y.isEqualWith = _v, y.isError = fl, y.isFinite = Tv, y.isFunction = br, y.isInteger = Pd, y.isLength = cs, y.isMap = Od, y.isMatch = Bv, y.isMatchWith = Gv, y.isNaN = kv, y.isNative = Lv, y.isNil = Mv, y.isNull = Dv, y.isNumber = _d, y.isObject = gt, y.isObjectLike = bt, y.isPlainObject = ku, y.isRegExp = dl, y.isSafeInteger = Nv, y.isSet = Td, y.isString = fs, y.isSymbol = mn, y.isTypedArray = Vi, y.isUndefined = Vv, y.isWeakMap = Wv, y.isWeakSet = Xv, y.join = Z0, y.kebabCase = _I, y.last = Tn, y.lastIndexOf = Y0, y.lowerCase = TI, y.lowerFirst = BI, y.lt = Hv, y.lte = zv, y.max = F1, y.maxBy = R1, y.mean = P1, y.meanBy = O1, y.min = _1, y.minBy = T1, y.stubArray = Il, y.stubFalse = Cl, y.stubObject = b1, y.stubString = y1, y.stubTrue = v1, y.multiply = B1, y.nth = J0, y.noConflict = l1, y.noop = vl, y.now = ss, y.pad = GI, y.padEnd = kI, y.padStart = LI, y.parseInt = DI, y.random = EI, y.reduce = Qy, y.reduceRight = qy, y.repeat = MI, y.replace = NI, y.result = mI, y.round = G1, y.runInContext = _, y.sample = Ky, y.size = nv, y.snakeCase = VI, y.some = rv, y.sortedIndex = ey, y.sortedIndexBy = ty, y.sortedIndexOf = ny, y.sortedLastIndex = ry, y.sortedLastIndexBy = iy, y.sortedLastIndexOf = uy, y.startCase = XI, y.startsWith = HI, y.subtract = k1, y.sum = L1, y.sumBy = D1, y.template = zI, y.times = I1, y.toFinite = yr, y.toInteger = Le, y.toLength = Gd, y.toLower = ZI, y.toNumber = Bn, y.toSafeInteger = Zv, y.toString = $e, y.toUpper = YI, y.trim = JI, y.trimEnd = UI, y.trimStart = jI, y.truncate = QI, y.unescape = qI, y.uniqueId = x1, y.upperCase = $I, y.upperFirst = gl, y.each = Id, y.eachRight = Cd, y.first = md, yl(y, function() {
        var n = {};
        return Qn(y, function(i, s) {
          tt.call(y.prototype, s) || (n[s] = i);
        }), n;
      }(), { chain: !1 }), y.VERSION = u, Fn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        y[n].placeholder = y;
      }), Fn(["drop", "take"], function(n, i) {
        We.prototype[n] = function(s) {
          s = s === r ? 1 : Pt(Le(s), 0);
          var d = this.__filtered__ && !i ? new We(this) : this.clone();
          return d.__filtered__ ? d.__takeCount__ = Vt(s, d.__takeCount__) : d.__views__.push({
            size: Vt(s, Ie),
            type: n + (d.__dir__ < 0 ? "Right" : "")
          }), d;
        }, We.prototype[n + "Right"] = function(s) {
          return this.reverse()[n](s).reverse();
        };
      }), Fn(["filter", "map", "takeWhile"], function(n, i) {
        var s = i + 1, d = s == fe || s == xe;
        We.prototype[n] = function(m) {
          var I = this.clone();
          return I.__iteratees__.push({
            iteratee: me(m, 3),
            type: s
          }), I.__filtered__ = I.__filtered__ || d, I;
        };
      }), Fn(["head", "last"], function(n, i) {
        var s = "take" + (i ? "Right" : "");
        We.prototype[n] = function() {
          return this[s](1).value()[0];
        };
      }), Fn(["initial", "tail"], function(n, i) {
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
      }, We.prototype.invokeMap = Ne(function(n, i) {
        return typeof n == "function" ? new We(this) : this.map(function(s) {
          return Pu(s, n, i);
        });
      }), We.prototype.reject = function(n) {
        return this.filter(ls(me(n)));
      }, We.prototype.slice = function(n, i) {
        n = Le(n);
        var s = this;
        return s.__filtered__ && (n > 0 || i < 0) ? new We(s) : (n < 0 ? s = s.takeRight(-n) : n && (s = s.drop(n)), i !== r && (i = Le(i), s = i < 0 ? s.dropRight(-i) : s.take(i - n)), s);
      }, We.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, We.prototype.toArray = function() {
        return this.take(Ie);
      }, Qn(We.prototype, function(n, i) {
        var s = /^(?:filter|find|map|reject)|While$/.test(i), d = /^(?:head|last)$/.test(i), m = y[d ? "take" + (i == "last" ? "Right" : "") : i], I = d || /^find/.test(i);
        m && (y.prototype[i] = function() {
          var x = this.__wrapped__, R = d ? [1] : arguments, B = x instanceof We, X = R[0], H = B || Oe(x), J = function(Ve) {
            var He = m.apply(y, Fr([Ve], R));
            return d && ne ? He[0] : He;
          };
          H && s && typeof X == "function" && X.length != 1 && (B = H = !1);
          var ne = this.__chain__, ce = !!this.__actions__.length, ye = I && !ne, De = B && !ce;
          if (!I && H) {
            x = De ? x : new We(this);
            var ve = n.apply(x, R);
            return ve.__actions__.push({ func: us, args: [J], thisArg: r }), new Pn(ve, ne);
          }
          return ye && De ? n.apply(this, R) : (ve = this.thru(J), ye ? d ? ve.value()[0] : ve.value() : ve);
        });
      }), Fn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var i = _o[n], s = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", d = /^(?:pop|shift)$/.test(n);
        y.prototype[n] = function() {
          var m = arguments;
          if (d && !this.__chain__) {
            var I = this.value();
            return i.apply(Oe(I) ? I : [], m);
          }
          return this[s](function(x) {
            return i.apply(Oe(x) ? x : [], m);
          });
        };
      }), Qn(We.prototype, function(n, i) {
        var s = y[i];
        if (s) {
          var d = s.name + "";
          tt.call(ki, d) || (ki[d] = []), ki[d].push({ name: i, func: s });
        }
      }), ki[$o(r, P).name] = [{
        name: "wrapper",
        func: r
      }], We.prototype.clone = qm, We.prototype.reverse = $m, We.prototype.value = Km, y.prototype.at = Ry, y.prototype.chain = Py, y.prototype.commit = Oy, y.prototype.next = _y, y.prototype.plant = By, y.prototype.reverse = Gy, y.prototype.toJSON = y.prototype.valueOf = y.prototype.value = ky, y.prototype.first = y.prototype.head, xu && (y.prototype[xu] = Ty), y;
    }, Ti = Om();
    It ? ((It.exports = Ti)._ = Ti, ot._ = Ti) : Xe._ = Ti;
  }).call(Cn);
})(Ps, Ps.exports);
var sE = Ps.exports;
const aE = /* @__PURE__ */ Ns(sE);
var Os = { exports: {} };
Os.exports;
(function(e, t) {
  var r = 200, u = "__lodash_hash_undefined__", o = 1, a = 2, l = 9007199254740991, c = "[object Arguments]", f = "[object Array]", h = "[object AsyncFunction]", p = "[object Boolean]", g = "[object Date]", v = "[object Error]", b = "[object Function]", E = "[object GeneratorFunction]", A = "[object Map]", F = "[object Number]", P = "[object Null]", W = "[object Object]", k = "[object Promise]", M = "[object Proxy]", U = "[object RegExp]", G = "[object Set]", j = "[object String]", D = "[object Symbol]", Y = "[object Undefined]", $ = "[object WeakMap]", Q = "[object ArrayBuffer]", Z = "[object DataView]", K = "[object Float32Array]", fe = "[object Float64Array]", ie = "[object Int8Array]", xe = "[object Int16Array]", we = "[object Int32Array]", Re = "[object Uint8Array]", Je = "[object Uint8ClampedArray]", w = "[object Uint16Array]", Ie = "[object Uint32Array]", ke = /[\\^$.*+?()[\]{}|]/g, S = /^\[object .+?Constructor\]$/, Ye = /^(?:0|[1-9]\d*)$/, le = {};
  le[K] = le[fe] = le[ie] = le[xe] = le[we] = le[Re] = le[Je] = le[w] = le[Ie] = !0, le[c] = le[f] = le[Q] = le[p] = le[Z] = le[g] = le[v] = le[b] = le[A] = le[F] = le[W] = le[U] = le[G] = le[j] = le[$] = !1;
  var Se = typeof Cn == "object" && Cn && Cn.Object === Object && Cn, At = typeof self == "object" && self && self.Object === Object && self, Me = Se || At || Function("return this")(), mt = t && !t.nodeType && t, Nt = mt && !0 && e && !e.nodeType && e, Gt = Nt && Nt.exports === mt, kt = Gt && Se.process, Mn = function() {
    try {
      return kt && kt.binding && kt.binding("util");
    } catch {
    }
  }(), ee = Mn && Mn.isTypedArray;
  function re(C, T) {
    for (var z = -1, ue = C == null ? 0 : C.length, ut = 0, Pe = []; ++z < ue; ) {
      var dt = C[z];
      T(dt, z, C) && (Pe[ut++] = dt);
    }
    return Pe;
  }
  function he(C, T) {
    for (var z = -1, ue = T.length, ut = C.length; ++z < ue; )
      C[ut + z] = T[z];
    return C;
  }
  function Ee(C, T) {
    for (var z = -1, ue = C == null ? 0 : C.length; ++z < ue; )
      if (T(C[z], z, C))
        return !0;
    return !1;
  }
  function at(C, T) {
    for (var z = -1, ue = Array(C); ++z < C; )
      ue[z] = T(z);
    return ue;
  }
  function Ot(C) {
    return function(T) {
      return C(T);
    };
  }
  function An(C, T) {
    return C.has(T);
  }
  function Lt(C, T) {
    return C == null ? void 0 : C[T];
  }
  function et(C) {
    var T = -1, z = Array(C.size);
    return C.forEach(function(ue, ut) {
      z[++T] = [ut, ue];
    }), z;
  }
  function Ue(C, T) {
    return function(z) {
      return C(T(z));
    };
  }
  function lt(C) {
    var T = -1, z = Array(C.size);
    return C.forEach(function(ue) {
      z[++T] = ue;
    }), z;
  }
  var qe = Array.prototype, N = Function.prototype, te = Object.prototype, pe = Me["__core-js_shared__"], Te = N.toString, Be = te.hasOwnProperty, _t = function() {
    var C = /[^.]+$/.exec(pe && pe.keys && pe.keys.IE_PROTO || "");
    return C ? "Symbol(src)_1." + C : "";
  }(), $t = te.toString, Zt = RegExp(
    "^" + Te.call(Be).replace(ke, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), wn = Gt ? Me.Buffer : void 0, Kt = Me.Symbol, wt = Me.Uint8Array, fn = te.propertyIsEnumerable, dn = qe.splice, sr = Kt ? Kt.toStringTag : void 0, io = Object.getOwnPropertySymbols, uo = wn ? wn.isBuffer : void 0, oo = Ue(Object.keys, Object), fu = hn(Me, "DataView"), Jr = hn(Me, "Map"), du = hn(Me, "Promise"), hu = hn(Me, "Set"), Ci = hn(Me, "WeakMap"), Ur = hn(Object, "create"), Js = cr(fu), Us = cr(Jr), pu = cr(du), js = cr(hu), gu = cr(Ci), so = Kt ? Kt.prototype : void 0, mu = so ? so.valueOf : void 0;
  function ar(C) {
    var T = -1, z = C == null ? 0 : C.length;
    for (this.clear(); ++T < z; ) {
      var ue = C[T];
      this.set(ue[0], ue[1]);
    }
  }
  function Qs() {
    this.__data__ = Ur ? Ur(null) : {}, this.size = 0;
  }
  function qs(C) {
    var T = this.has(C) && delete this.__data__[C];
    return this.size -= T ? 1 : 0, T;
  }
  function $s(C) {
    var T = this.__data__;
    if (Ur) {
      var z = T[C];
      return z === u ? void 0 : z;
    }
    return Be.call(T, C) ? T[C] : void 0;
  }
  function Ks(C) {
    var T = this.__data__;
    return Ur ? T[C] !== void 0 : Be.call(T, C);
  }
  function ea(C, T) {
    var z = this.__data__;
    return this.size += this.has(C) ? 0 : 1, z[C] = Ur && T === void 0 ? u : T, this;
  }
  ar.prototype.clear = Qs, ar.prototype.delete = qs, ar.prototype.get = $s, ar.prototype.has = Ks, ar.prototype.set = ea;
  function Sn(C) {
    var T = -1, z = C == null ? 0 : C.length;
    for (this.clear(); ++T < z; ) {
      var ue = C[T];
      this.set(ue[0], ue[1]);
    }
  }
  function ta() {
    this.__data__ = [], this.size = 0;
  }
  function na(C) {
    var T = this.__data__, z = jr(T, C);
    if (z < 0)
      return !1;
    var ue = T.length - 1;
    return z == ue ? T.pop() : dn.call(T, z, 1), --this.size, !0;
  }
  function ra(C) {
    var T = this.__data__, z = jr(T, C);
    return z < 0 ? void 0 : T[z][1];
  }
  function ia(C) {
    return jr(this.__data__, C) > -1;
  }
  function ua(C, T) {
    var z = this.__data__, ue = jr(z, C);
    return ue < 0 ? (++this.size, z.push([C, T])) : z[ue][1] = T, this;
  }
  Sn.prototype.clear = ta, Sn.prototype.delete = na, Sn.prototype.get = ra, Sn.prototype.has = ia, Sn.prototype.set = ua;
  function lr(C) {
    var T = -1, z = C == null ? 0 : C.length;
    for (this.clear(); ++T < z; ) {
      var ue = C[T];
      this.set(ue[0], ue[1]);
    }
  }
  function xi() {
    this.size = 0, this.__data__ = {
      hash: new ar(),
      map: new (Jr || Sn)(),
      string: new ar()
    };
  }
  function oa(C) {
    var T = Sr(this, C).delete(C);
    return this.size -= T ? 1 : 0, T;
  }
  function Ai(C) {
    return Sr(this, C).get(C);
  }
  function sa(C) {
    return Sr(this, C).has(C);
  }
  function aa(C, T) {
    var z = Sr(this, C), ue = z.size;
    return z.set(C, T), this.size += z.size == ue ? 0 : 1, this;
  }
  lr.prototype.clear = xi, lr.prototype.delete = oa, lr.prototype.get = Ai, lr.prototype.has = sa, lr.prototype.set = aa;
  function wi(C) {
    var T = -1, z = C == null ? 0 : C.length;
    for (this.__data__ = new lr(); ++T < z; )
      this.add(C[T]);
  }
  function ao(C) {
    return this.__data__.set(C, u), this;
  }
  function lo(C) {
    return this.__data__.has(C);
  }
  wi.prototype.add = wi.prototype.push = ao, wi.prototype.has = lo;
  function Nn(C) {
    var T = this.__data__ = new Sn(C);
    this.size = T.size;
  }
  function la() {
    this.__data__ = new Sn(), this.size = 0;
  }
  function ca(C) {
    var T = this.__data__, z = T.delete(C);
    return this.size = T.size, z;
  }
  function fa(C) {
    return this.__data__.get(C);
  }
  function da(C) {
    return this.__data__.has(C);
  }
  function co(C, T) {
    var z = this.__data__;
    if (z instanceof Sn) {
      var ue = z.__data__;
      if (!Jr || ue.length < r - 1)
        return ue.push([C, T]), this.size = ++z.size, this;
      z = this.__data__ = new lr(ue);
    }
    return z.set(C, T), this.size = z.size, this;
  }
  Nn.prototype.clear = la, Nn.prototype.delete = ca, Nn.prototype.get = fa, Nn.prototype.has = da, Nn.prototype.set = co;
  function fo(C, T) {
    var z = Fi(C), ue = !z && wo(C), ut = !z && !ue && vu(C), Pe = !z && !ue && !ut && Fo(C), dt = z || ue || ut || Pe, St = dt ? at(C.length, String) : [], Xe = St.length;
    for (var ot in C)
      Be.call(C, ot) && !(dt && // Safari 9 has enumerable `arguments.length` in strict mode.
      (ot == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      ut && (ot == "offset" || ot == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      Pe && (ot == "buffer" || ot == "byteLength" || ot == "byteOffset") || // Skip index properties.
      vo(ot, Xe))) && St.push(ot);
    return St;
  }
  function jr(C, T) {
    for (var z = C.length; z--; )
      if (Ao(C[z][0], T))
        return z;
    return -1;
  }
  function bu(C, T, z) {
    var ue = T(C);
    return Fi(C) ? ue : he(ue, z(C));
  }
  function Qr(C) {
    return C == null ? C === void 0 ? Y : P : sr && sr in Object(C) ? bo(C) : ga(C);
  }
  function yu(C) {
    return $r(C) && Qr(C) == c;
  }
  function qr(C, T, z, ue, ut) {
    return C === T ? !0 : C == null || T == null || !$r(C) && !$r(T) ? C !== C && T !== T : ho(C, T, z, ue, qr, ut);
  }
  function ho(C, T, z, ue, ut, Pe) {
    var dt = Fi(C), St = Fi(T), Xe = dt ? f : Un(C), ot = St ? f : Un(T);
    Xe = Xe == c ? W : Xe, ot = ot == c ? W : ot;
    var It = Xe == W, en = ot == W, Et = Xe == ot;
    if (Et && vu(C)) {
      if (!vu(T))
        return !1;
      dt = !0, It = !1;
    }
    if (Et && !It)
      return Pe || (Pe = new Nn()), dt || Fo(C) ? Si(C, T, z, ue, ut, Pe) : pa(C, T, Xe, z, ue, ut, Pe);
    if (!(z & o)) {
      var ht = It && Be.call(C, "__wrapped__"), Yt = en && Be.call(T, "__wrapped__");
      if (ht || Yt) {
        var Vn = ht ? C.value() : C, En = Yt ? T.value() : T;
        return Pe || (Pe = new Nn()), ut(Vn, En, z, ue, Pe);
      }
    }
    return Et ? (Pe || (Pe = new Nn()), mo(C, T, z, ue, ut, Pe)) : !1;
  }
  function ha(C) {
    if (!Eo(C) || Co(C))
      return !1;
    var T = Ri(C) ? Zt : S;
    return T.test(cr(C));
  }
  function po(C) {
    return $r(C) && So(C.length) && !!le[Qr(C)];
  }
  function go(C) {
    if (!xo(C))
      return oo(C);
    var T = [];
    for (var z in Object(C))
      Be.call(C, z) && z != "constructor" && T.push(z);
    return T;
  }
  function Si(C, T, z, ue, ut, Pe) {
    var dt = z & o, St = C.length, Xe = T.length;
    if (St != Xe && !(dt && Xe > St))
      return !1;
    var ot = Pe.get(C);
    if (ot && Pe.get(T))
      return ot == T;
    var It = -1, en = !0, Et = z & a ? new wi() : void 0;
    for (Pe.set(C, T), Pe.set(T, C); ++It < St; ) {
      var ht = C[It], Yt = T[It];
      if (ue)
        var Vn = dt ? ue(Yt, ht, It, T, C, Pe) : ue(ht, Yt, It, C, T, Pe);
      if (Vn !== void 0) {
        if (Vn)
          continue;
        en = !1;
        break;
      }
      if (Et) {
        if (!Ee(T, function(En, jn) {
          if (!An(Et, jn) && (ht === En || ut(ht, En, z, ue, Pe)))
            return Et.push(jn);
        })) {
          en = !1;
          break;
        }
      } else if (!(ht === Yt || ut(ht, Yt, z, ue, Pe))) {
        en = !1;
        break;
      }
    }
    return Pe.delete(C), Pe.delete(T), en;
  }
  function pa(C, T, z, ue, ut, Pe, dt) {
    switch (z) {
      case Z:
        if (C.byteLength != T.byteLength || C.byteOffset != T.byteOffset)
          return !1;
        C = C.buffer, T = T.buffer;
      case Q:
        return !(C.byteLength != T.byteLength || !Pe(new wt(C), new wt(T)));
      case p:
      case g:
      case F:
        return Ao(+C, +T);
      case v:
        return C.name == T.name && C.message == T.message;
      case U:
      case j:
        return C == T + "";
      case A:
        var St = et;
      case G:
        var Xe = ue & o;
        if (St || (St = lt), C.size != T.size && !Xe)
          return !1;
        var ot = dt.get(C);
        if (ot)
          return ot == T;
        ue |= a, dt.set(C, T);
        var It = Si(St(C), St(T), ue, ut, Pe, dt);
        return dt.delete(C), It;
      case D:
        if (mu)
          return mu.call(C) == mu.call(T);
    }
    return !1;
  }
  function mo(C, T, z, ue, ut, Pe) {
    var dt = z & o, St = Ei(C), Xe = St.length, ot = Ei(T), It = ot.length;
    if (Xe != It && !dt)
      return !1;
    for (var en = Xe; en--; ) {
      var Et = St[en];
      if (!(dt ? Et in T : Be.call(T, Et)))
        return !1;
    }
    var ht = Pe.get(C);
    if (ht && Pe.get(T))
      return ht == T;
    var Yt = !0;
    Pe.set(C, T), Pe.set(T, C);
    for (var Vn = dt; ++en < Xe; ) {
      Et = St[en];
      var En = C[Et], jn = T[Et];
      if (ue)
        var Iu = dt ? ue(jn, En, Et, T, C, Pe) : ue(En, jn, Et, C, T, Pe);
      if (!(Iu === void 0 ? En === jn || ut(En, jn, z, ue, Pe) : Iu)) {
        Yt = !1;
        break;
      }
      Vn || (Vn = Et == "constructor");
    }
    if (Yt && !Vn) {
      var Kr = C.constructor, Tt = T.constructor;
      Kr != Tt && "constructor" in C && "constructor" in T && !(typeof Kr == "function" && Kr instanceof Kr && typeof Tt == "function" && Tt instanceof Tt) && (Yt = !1);
    }
    return Pe.delete(C), Pe.delete(T), Yt;
  }
  function Ei(C) {
    return bu(C, ya, yo);
  }
  function Sr(C, T) {
    var z = C.__data__;
    return Io(T) ? z[typeof T == "string" ? "string" : "hash"] : z.map;
  }
  function hn(C, T) {
    var z = Lt(C, T);
    return ha(z) ? z : void 0;
  }
  function bo(C) {
    var T = Be.call(C, sr), z = C[sr];
    try {
      C[sr] = void 0;
      var ue = !0;
    } catch {
    }
    var ut = $t.call(C);
    return ue && (T ? C[sr] = z : delete C[sr]), ut;
  }
  var yo = io ? function(C) {
    return C == null ? [] : (C = Object(C), re(io(C), function(T) {
      return fn.call(C, T);
    }));
  } : it, Un = Qr;
  (fu && Un(new fu(new ArrayBuffer(1))) != Z || Jr && Un(new Jr()) != A || du && Un(du.resolve()) != k || hu && Un(new hu()) != G || Ci && Un(new Ci()) != $) && (Un = function(C) {
    var T = Qr(C), z = T == W ? C.constructor : void 0, ue = z ? cr(z) : "";
    if (ue)
      switch (ue) {
        case Js:
          return Z;
        case Us:
          return A;
        case pu:
          return k;
        case js:
          return G;
        case gu:
          return $;
      }
    return T;
  });
  function vo(C, T) {
    return T = T ?? l, !!T && (typeof C == "number" || Ye.test(C)) && C > -1 && C % 1 == 0 && C < T;
  }
  function Io(C) {
    var T = typeof C;
    return T == "string" || T == "number" || T == "symbol" || T == "boolean" ? C !== "__proto__" : C === null;
  }
  function Co(C) {
    return !!_t && _t in C;
  }
  function xo(C) {
    var T = C && C.constructor, z = typeof T == "function" && T.prototype || te;
    return C === z;
  }
  function ga(C) {
    return $t.call(C);
  }
  function cr(C) {
    if (C != null) {
      try {
        return Te.call(C);
      } catch {
      }
      try {
        return C + "";
      } catch {
      }
    }
    return "";
  }
  function Ao(C, T) {
    return C === T || C !== C && T !== T;
  }
  var wo = yu(/* @__PURE__ */ function() {
    return arguments;
  }()) ? yu : function(C) {
    return $r(C) && Be.call(C, "callee") && !fn.call(C, "callee");
  }, Fi = Array.isArray;
  function ma(C) {
    return C != null && So(C.length) && !Ri(C);
  }
  var vu = uo || rt;
  function ba(C, T) {
    return qr(C, T);
  }
  function Ri(C) {
    if (!Eo(C))
      return !1;
    var T = Qr(C);
    return T == b || T == E || T == h || T == M;
  }
  function So(C) {
    return typeof C == "number" && C > -1 && C % 1 == 0 && C <= l;
  }
  function Eo(C) {
    var T = typeof C;
    return C != null && (T == "object" || T == "function");
  }
  function $r(C) {
    return C != null && typeof C == "object";
  }
  var Fo = ee ? Ot(ee) : po;
  function ya(C) {
    return ma(C) ? fo(C) : go(C);
  }
  function it() {
    return [];
  }
  function rt() {
    return !1;
  }
  e.exports = ba;
})(Os, Os.exports);
var lE = Os.exports;
const cE = /* @__PURE__ */ Ns(lE);
function Ag(e) {
  return typeof e == "object" && e && "__lv" in e ? e.__lv.value : e;
}
function fE(e) {
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
function dE(e) {
  const t = fE(e.value);
  if (!e.prop.default && typeof t > "u")
    return ["required"];
  if (!e.prop.default && Array.isArray(t) && !t.length)
    return ["empty array"];
}
function hE(e) {
  const t = Ag(e.value);
  if (t == null || typeof t > "u") return ["required"];
}
function pE(e) {
  const { prop: t, value: r } = e, u = Ag(r);
  if (!t.default && (u == null || typeof u > "u"))
    return ["required"];
  const o = typeof u == "number" ? u : parseInt(String(u));
  if (Number.isNaN(o)) return ["not a number"];
  const a = [];
  return typeof t.min == "number" && o < t.min && a.push("number too small"), typeof t.max == "number" && o > t.max && a.push("number too big"), a;
}
function gE(e) {
  const { prop: t, value: r } = e;
  if (!t.default && (r == null || typeof r > "u"))
    return ["required"];
}
function mE(e) {
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
function bE(e) {
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
      const a = mE(t), l = u;
      for (const c of a)
        !c.optional && !l[c.name] && o.push(`missing custom field: ${c.name}`);
    }
    return t.auth_type !== "none" && o.push("no auth provision configured"), o;
  }
}
const wg = Ku(
  void 0
), Yr = () => {
  const e = su(wg);
  if (!e)
    throw new Error("Must be used inside FrontendClientProvider");
  return e;
}, jR = ({
  children: e,
  client: t
}) => {
  const [r] = nt(
    () => new HS({
      defaultOptions: {
        queries: {
          staleTime: 36e5,
          refetchOnWindowFocus: !1
        }
      }
    })
  );
  return /* @__PURE__ */ se(US, { client: r, children: /* @__PURE__ */ se(wg.Provider, { value: t, children: e }) });
}, As = [
  "$.service.db",
  "$.interface.http",
  "$.interface.apphook",
  "$.interface.timer"
  // TODO add support for this (cron string and timers)
], Sg = Ku(void 0), Mc = () => {
  const e = su(Sg);
  if (!e)
    throw new Error("Must be used inside provider");
  return e;
}, yE = ({
  children: e,
  props: t
}) => {
  const r = Yr(), u = vc(), {
    component: o,
    configuredProps: a,
    propNames: l,
    userId: c,
    sdkResponse: f,
    enableDebugging: h
  } = t, p = o.key, [g, v] = nt(
    0
  ), [b, E] = nt({}), [A, F] = nt(!1), [P, W] = nt({}), [k, M] = nt([]), [U, G] = nt({});
  In(() => {
    const ee = {}, re = o.configurable_props || [];
    for (const he of re)
      if (he.optional) {
        const Ee = he.name, at = D[Ee];
        at != null && at !== "" && (ee[he.name] = !0);
      }
    G(ee);
  }, [o.key, a]);
  const j = (ee) => U[ee.name];
  let D = a || {};
  const [Y, $] = nt(D), Q = t.onUpdateConfiguredProps || $;
  t.onUpdateConfiguredProps || (D = Y);
  const [Z, K] = nt(), [fe, ie] = nt(), xe = {
    userId: c,
    componentId: p,
    configuredProps: D,
    dynamicPropsId: Z == null ? void 0 : Z.id
  }, we = {
    ...xe
  }, {
    isFetching: Re
    // TODO error
  } = Ii({
    queryKey: ["dynamicProps", we],
    queryFn: async () => {
      var at;
      const ee = await r.componentReloadProps(
        xe
      ), { dynamicProps: re, observations: he, errors: Ee } = ee;
      return he && he.filter((Ot) => Ot.k === "error").length > 0 ? kt(he) : kt(Ee), re && ((at = t.onUpdateDynamicProps) == null || at.call(t, re), K(re)), ie(void 0), [];
    },
    enabled: fe != null
    // TODO or props.dynamicPropsId && !dynamicProps
  }), [Je, w] = nt(
    []
  );
  In(() => {
    Nt();
  }, [D]);
  let Ie = (Z == null ? void 0 : Z.configurableProps) || t.component.configurable_props || [];
  if (l != null && l.length) {
    const ee = [];
    for (const re of Ie)
      l.findIndex((he) => re.name === he) >= 0 && ee.push(re);
    Ie = ee;
  }
  fe != null && (Ie = Ie.slice(
    0,
    fe + 1
  ));
  const ke = (ee, re) => {
    const he = [];
    if (ee.optional || ee.hidden || ee.disabled || As.includes(ee.type))
      return [];
    if (ee.type === "app") {
      const Ee = b[ee.name];
      if (Ee) {
        const at = Ee.extra.app;
        he.push(
          ...bE({
            value: re,
            app: at
          }) ?? []
        );
      } else
        he.push("field not registered");
    } else ee.type === "boolean" ? he.push(
      ...hE({
        value: re
      }) ?? []
    ) : ee.type === "integer" ? he.push(
      ...pE({
        prop: ee,
        value: re
      }) ?? []
    ) : ee.type === "string" ? he.push(
      ...gE({
        prop: ee,
        value: re
      }) ?? []
    ) : ee.type === "string[]" && he.push(
      ...dE({
        prop: ee,
        value: re
      }) ?? []
    );
    return he;
  }, S = (ee) => {
    let re;
    for (let he = 0; he < Ie.length; he++) {
      const Ee = Ie[he];
      if (Ee.hidden || Ee.optional && !j(Ee))
        continue;
      if (ee[Ee.name] === void 0 && re == null && (Ee.type === "app" || Ee.remoteOptions)) {
        re = he;
        break;
      }
    }
    v(re);
  }, Ye = (ee) => {
    Q(ee), S(ee), le(ee);
  }, le = (ee) => {
    const re = {};
    for (let he = 0; he < Ie.length; he++) {
      const Ee = Ie[he], at = ee[Ee.name], Ot = ke(Ee, at);
      Ot.length && (re[Ee.name] = Ot);
    }
    W(re);
  };
  In(() => {
    S(Y);
  }, [Y]), In(() => {
    le(D);
  }, [D, fe, g]), In(() => {
    kt(f);
  }, [f]), In(() => {
    const ee = {};
    for (const re of Ie) {
      if (re.hidden || As.includes(re.type) || re.optional && !j(re))
        continue;
      const he = D[re.name];
      he === void 0 ? "default" in re && re.default != null && (ee[re.name] = re.default) : re.type === "integer" && typeof he != "number" ? delete ee[re.name] : ee[re.name] = he;
    }
    cE(ee, D) || Ye(ee);
  }, [Ie]);
  const [Se, At] = nt(c);
  In(() => {
    Se !== c && (Ye({}), At(c));
  }, [c]);
  const Me = (ee, re) => {
    const he = Ie[ee], Ee = {
      ...D
    };
    re === void 0 ? delete Ee[he.name] : Ee[he.name] = re, Q(Ee), he.reloadProps && ie(ee), (he.type === "app" || he.remoteOptions) && S(Ee);
    const at = ke(he, re), Ot = {
      ...P
    };
    at.length ? Ot[he.name] = at : delete Ot[he.name], W(Ot);
  }, mt = (ee, re) => {
    const he = {
      ...U
    };
    re ? he[ee.name] = !0 : delete he[ee.name];
    const Ee = Ie.findIndex((at) => at.name === ee.name);
    re ? (a == null ? void 0 : a[ee.name]) !== void 0 ? Me(
      Ee,
      a[ee.name]
    ) : "default" in ee && ee.default != null && Me(Ee, ee.default) : Me(Ee, void 0), G(he);
  }, Nt = () => {
    const ee = [];
    for (const re of Ie) {
      if (!re || re.optional || re.hidden || As.includes(re.type))
        continue;
      const he = D[re.name];
      ke(re, he).length && ee.push(re.name);
    }
    ee && Je && aE.isEqual(ee, Je) || w(ee);
  }, Gt = (ee) => {
    E((re) => (re[ee.prop.name] = ee, re)), Nt();
  }, kt = (ee) => {
    if (!ee) return;
    let re = [...k];
    const he = (et, Ue) => {
      try {
        const lt = JSON.parse(et), qe = {
          name: lt.name,
          message: lt.message
        };
        qe.name && qe.message && Ue.push(qe);
      } catch {
      }
    }, Ee = (et, Ue) => {
      const lt = {
        name: et.name,
        message: et.message
      };
      lt.name && lt.message && Ue.push(lt);
    }, at = (et, Ue) => {
      var qe, N;
      const lt = {
        name: (qe = et.err) == null ? void 0 : qe.name,
        message: (N = et.err) == null ? void 0 : N.message
      };
      lt.name && lt.message && Ue.push(lt);
    }, Ot = (et, Ue) => {
      const lt = et.os || et.observations;
      if (Array.isArray(lt) && lt.length > 0)
        for (let qe = 0; qe < lt.length; qe++)
          lt[qe].k === "error" && at(lt[qe], Ue);
    }, An = (et, Ue) => {
      Ue.push({
        name: et.error,
        message: JSON.stringify(et.details)
        //     message: ` // TODO: It would be nice to render the JSON in markdown
        // \`\`\`json
        // ${JSON.stringify(data.details)}
        // \`\`\`
        // `,
        //   })
      });
    }, Lt = (et, Ue) => {
      var lt;
      try {
        const qe = (lt = JSON.parse(et.message)) == null ? void 0 : lt.data;
        qe && "observations" in qe ? Ot(qe, Ue) : qe && "error" in qe && "details" in qe && An(qe, Ue);
      } catch {
      }
    };
    if (Array.isArray(ee) && ee.length > 0)
      for (let et = 0; et < ee.length; et++) {
        const Ue = ee[et];
        typeof Ue == "string" ? he(Ue, re) : typeof Ue == "object" && "name" in Ue && "message" in Ue ? Ee(Ue, re) : typeof Ue == "object" && Ue.k === "error" && at(Ue, re);
      }
    else typeof ee == "object" && "os" in ee || "observations" in ee ? Ot(ee, re) : typeof ee == "object" && "message" in ee ? Lt(ee, re) : re = [];
    M(re);
  }, Mn = {
    id: u,
    isValid: !Object.keys(P).length,
    // XXX want to expose more from errors
    props: t,
    userId: c,
    component: o,
    configurableProps: Ie,
    configuredProps: D,
    dynamicProps: Z,
    dynamicPropsQueryIsFetching: Re,
    errors: P,
    fields: b,
    optionalPropIsEnabled: j,
    optionalPropSetEnabled: mt,
    propsNeedConfiguring: Je,
    queryDisabledIdx: g,
    registerField: Gt,
    setConfiguredProp: Me,
    setSubmitting: F,
    submitting: A,
    sdkErrors: k,
    enableDebugging: h
  };
  return /* @__PURE__ */ se(Sg.Provider, { value: Mn, children: e });
};
function yi(e) {
  "@babel/helpers - typeof";
  return yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yi(e);
}
function vE(e, t) {
  if (yi(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var u = r.call(e, t);
    if (yi(u) != "object") return u;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Eg(e) {
  var t = vE(e, "string");
  return yi(t) == "symbol" ? t : t + "";
}
function Vu(e, t, r) {
  return (t = Eg(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Uh(e, t) {
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
    t % 2 ? Uh(Object(r), !0).forEach(function(u) {
      Vu(e, u, r[u]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uh(Object(r)).forEach(function(u) {
      Object.defineProperty(e, u, Object.getOwnPropertyDescriptor(r, u));
    });
  }
  return e;
}
function IE(e) {
  if (Array.isArray(e)) return e;
}
function CE(e, t) {
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
function hc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, u = Array(t); r < t; r++) u[r] = e[r];
  return u;
}
function Fg(e, t) {
  if (e) {
    if (typeof e == "string") return hc(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? hc(e, t) : void 0;
  }
}
function xE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ar(e, t) {
  return IE(e) || CE(e, t) || Fg(e, t) || xE();
}
function AE(e, t) {
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
  var r, u, o = AE(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (u = 0; u < a.length; u++) r = a[u], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
var wE = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function Rg(e) {
  var t = e.defaultInputValue, r = t === void 0 ? "" : t, u = e.defaultMenuIsOpen, o = u === void 0 ? !1 : u, a = e.defaultValue, l = a === void 0 ? null : a, c = e.inputValue, f = e.menuIsOpen, h = e.onChange, p = e.onInputChange, g = e.onMenuClose, v = e.onMenuOpen, b = e.value, E = or(e, wE), A = nt(c !== void 0 ? c : r), F = Ar(A, 2), P = F[0], W = F[1], k = nt(f !== void 0 ? f : o), M = Ar(k, 2), U = M[0], G = M[1], j = nt(b !== void 0 ? b : l), D = Ar(j, 2), Y = D[0], $ = D[1], Q = Ht(function(Re, Je) {
    typeof h == "function" && h(Re, Je), $(Re);
  }, [h]), Z = Ht(function(Re, Je) {
    var w;
    typeof p == "function" && (w = p(Re, Je)), W(w !== void 0 ? w : Re);
  }, [p]), K = Ht(function() {
    typeof v == "function" && v(), G(!0);
  }, [v]), fe = Ht(function() {
    typeof g == "function" && g(), G(!1);
  }, [g]), ie = c !== void 0 ? c : P, xe = f !== void 0 ? f : U, we = b !== void 0 ? b : Y;
  return de(de({}, E), {}, {
    inputValue: ie,
    menuIsOpen: xe,
    onChange: Q,
    onInputChange: Z,
    onMenuClose: fe,
    onMenuOpen: K,
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
function SE(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function jh(e, t) {
  for (var r = 0; r < t.length; r++) {
    var u = t[r];
    u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(e, Eg(u.key), u);
  }
}
function EE(e, t, r) {
  return t && jh(e.prototype, t), r && jh(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function pc(e, t) {
  return pc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, u) {
    return r.__proto__ = u, r;
  }, pc(e, t);
}
function FE(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && pc(e, t);
}
function _s(e) {
  return _s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _s(e);
}
function Pg() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Pg = function() {
    return !!e;
  })();
}
function RE(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function PE(e, t) {
  if (t && (yi(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return RE(e);
}
function OE(e) {
  var t = Pg();
  return function() {
    var r, u = _s(e);
    if (t) {
      var o = _s(this).constructor;
      r = Reflect.construct(u, arguments, o);
    } else r = u.apply(this, arguments);
    return PE(this, r);
  };
}
function _E(e) {
  if (Array.isArray(e)) return hc(e);
}
function TE(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function BE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ji(e) {
  return _E(e) || TE(e) || Fg(e) || BE();
}
function GE(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const kE = Math.min, LE = Math.max, Ts = Math.round, ys = Math.floor, Bs = (e) => ({
  x: e,
  y: e
});
function DE(e) {
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
function zs() {
  return typeof window < "u";
}
function Og(e) {
  return Tg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function wr(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function _g(e) {
  var t;
  return (t = (Tg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Tg(e) {
  return zs() ? e instanceof Node || e instanceof wr(e).Node : !1;
}
function ME(e) {
  return zs() ? e instanceof Element || e instanceof wr(e).Element : !1;
}
function Nc(e) {
  return zs() ? e instanceof HTMLElement || e instanceof wr(e).HTMLElement : !1;
}
function Qh(e) {
  return !zs() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof wr(e).ShadowRoot;
}
function Bg(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: u,
    display: o
  } = Vc(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + u + r) && !["inline", "contents"].includes(o);
}
function NE() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function VE(e) {
  return ["html", "body", "#document"].includes(Og(e));
}
function Vc(e) {
  return wr(e).getComputedStyle(e);
}
function WE(e) {
  if (Og(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Qh(e) && e.host || // Fallback.
    _g(e)
  );
  return Qh(t) ? t.host : t;
}
function Gg(e) {
  const t = WE(e);
  return VE(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Nc(t) && Bg(t) ? t : Gg(t);
}
function Gs(e, t, r) {
  var u;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const o = Gg(e), a = o === ((u = e.ownerDocument) == null ? void 0 : u.body), l = wr(o);
  if (a) {
    const c = gc(l);
    return t.concat(l, l.visualViewport || [], Bg(o) ? o : [], c && r ? Gs(c) : []);
  }
  return t.concat(o, Gs(o, [], r));
}
function gc(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function XE(e) {
  const t = Vc(e);
  let r = parseFloat(t.width) || 0, u = parseFloat(t.height) || 0;
  const o = Nc(e), a = o ? e.offsetWidth : r, l = o ? e.offsetHeight : u, c = Ts(r) !== a || Ts(u) !== l;
  return c && (r = a, u = l), {
    width: r,
    height: u,
    $: c
  };
}
function Wc(e) {
  return ME(e) ? e : e.contextElement;
}
function qh(e) {
  const t = Wc(e);
  if (!Nc(t))
    return Bs(1);
  const r = t.getBoundingClientRect(), {
    width: u,
    height: o,
    $: a
  } = XE(t);
  let l = (a ? Ts(r.width) : r.width) / u, c = (a ? Ts(r.height) : r.height) / o;
  return (!l || !Number.isFinite(l)) && (l = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: l,
    y: c
  };
}
const HE = /* @__PURE__ */ Bs(0);
function zE(e) {
  const t = wr(e);
  return !NE() || !t.visualViewport ? HE : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function ZE(e, t, r) {
  return !1;
}
function $h(e, t, r, u) {
  t === void 0 && (t = !1);
  const o = e.getBoundingClientRect(), a = Wc(e);
  let l = Bs(1);
  t && (l = qh(e));
  const c = ZE() ? zE(a) : Bs(0);
  let f = (o.left + c.x) / l.x, h = (o.top + c.y) / l.y, p = o.width / l.x, g = o.height / l.y;
  if (a) {
    const v = wr(a), b = u;
    let E = v, A = gc(E);
    for (; A && u && b !== E; ) {
      const F = qh(A), P = A.getBoundingClientRect(), W = Vc(A), k = P.left + (A.clientLeft + parseFloat(W.paddingLeft)) * F.x, M = P.top + (A.clientTop + parseFloat(W.paddingTop)) * F.y;
      f *= F.x, h *= F.y, p *= F.x, g *= F.y, f += k, h += M, E = wr(A), A = gc(E);
    }
  }
  return DE({
    width: p,
    height: g,
    x: f,
    y: h
  });
}
function kg(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function YE(e, t) {
  let r = null, u;
  const o = _g(e);
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
    const E = ys(g), A = ys(o.clientWidth - (p + v)), F = ys(o.clientHeight - (g + b)), P = ys(p), k = {
      rootMargin: -E + "px " + -A + "px " + -F + "px " + -P + "px",
      threshold: LE(0, kE(1, f)) || 1
    };
    let M = !0;
    function U(G) {
      const j = G[0].intersectionRatio;
      if (j !== f) {
        if (!M)
          return l();
        j ? l(!1, j) : u = setTimeout(() => {
          l(!1, 1e-7);
        }, 1e3);
      }
      j === 1 && !kg(h, e.getBoundingClientRect()) && l(), M = !1;
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
function JE(e, t, r, u) {
  u === void 0 && (u = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: l = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = u, h = Wc(e), p = o || a ? [...h ? Gs(h) : [], ...Gs(t)] : [];
  p.forEach((P) => {
    o && P.addEventListener("scroll", r, {
      passive: !0
    }), a && P.addEventListener("resize", r);
  });
  const g = h && c ? YE(h, r) : null;
  let v = -1, b = null;
  l && (b = new ResizeObserver((P) => {
    let [W] = P;
    W && W.target === h && b && (b.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var k;
      (k = b) == null || k.observe(t);
    })), r();
  }), h && !f && b.observe(h), b.observe(t));
  let E, A = f ? $h(e) : null;
  f && F();
  function F() {
    const P = $h(e);
    A && !kg(A, P) && r(), A = P, E = requestAnimationFrame(F);
  }
  return r(), () => {
    var P;
    p.forEach((W) => {
      o && W.removeEventListener("scroll", r), a && W.removeEventListener("resize", r);
    }), g == null || g(), (P = b) == null || P.disconnect(), b = null, f && cancelAnimationFrame(E);
  };
}
var mc = M1, UE = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], ks = function() {
};
function jE(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function QE(e, t) {
  for (var r = arguments.length, u = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++)
    u[o - 2] = arguments[o];
  var a = [].concat(u);
  if (t && e)
    for (var l in t)
      t.hasOwnProperty(l) && t[l] && a.push("".concat(jE(e, l)));
  return a.filter(function(c) {
    return c;
  }).map(function(c) {
    return String(c).trim();
  }).join(" ");
}
var Ls = function(t) {
  return u2(t) ? t.filter(Boolean) : yi(t) === "object" && t !== null ? [t] : [];
}, Lg = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var r = or(t, UE);
  return de({}, r);
}, vt = function(t, r, u) {
  var o = t.cx, a = t.getStyles, l = t.getClassNames, c = t.className;
  return {
    css: a(r, t),
    className: o(u ?? {}, l(r, t), c)
  };
};
function Zs(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function qE(e) {
  return Zs(e) ? window.innerHeight : e.clientHeight;
}
function Dg(e) {
  return Zs(e) ? window.pageYOffset : e.scrollTop;
}
function Ds(e, t) {
  if (Zs(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function $E(e) {
  var t = getComputedStyle(e), r = t.position === "absolute", u = /(auto|scroll)/;
  if (t.position === "fixed") return document.documentElement;
  for (var o = e; o = o.parentElement; )
    if (t = getComputedStyle(o), !(r && t.position === "static") && u.test(t.overflow + t.overflowY + t.overflowX))
      return o;
  return document.documentElement;
}
function KE(e, t, r, u) {
  return r * ((e = e / u - 1) * e * e + 1) + t;
}
function vs(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ks, o = Dg(e), a = t - o, l = 10, c = 0;
  function f() {
    c += l;
    var h = KE(c, o, a, r);
    Ds(e, h), c < r ? window.requestAnimationFrame(f) : u(e);
  }
  f();
}
function Kh(e, t) {
  var r = e.getBoundingClientRect(), u = t.getBoundingClientRect(), o = t.offsetHeight / 3;
  u.bottom + o > r.bottom ? Ds(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + o, e.scrollHeight)) : u.top - o < r.top && Ds(e, Math.max(t.offsetTop - o, 0));
}
function e2(e) {
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
function ep() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function t2() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var Mg = !1, n2 = {
  get passive() {
    return Mg = !0;
  }
}, Is = typeof window < "u" ? window : {};
Is.addEventListener && Is.removeEventListener && (Is.addEventListener("p", ks, n2), Is.removeEventListener("p", ks, !1));
var r2 = Mg;
function i2(e) {
  return e != null;
}
function u2(e) {
  return Array.isArray(e);
}
function Wu(e, t, r) {
  return e ? t : r;
}
var o2 = function(t) {
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
}, s2 = ["children", "innerProps"], a2 = ["children", "innerProps"];
function l2(e) {
  var t = e.maxHeight, r = e.menuEl, u = e.minHeight, o = e.placement, a = e.shouldScroll, l = e.isFixedPosition, c = e.controlHeight, f = $E(r), h = {
    placement: "bottom",
    maxHeight: t
  };
  if (!r || !r.offsetParent) return h;
  var p = f.getBoundingClientRect(), g = p.height, v = r.getBoundingClientRect(), b = v.bottom, E = v.height, A = v.top, F = r.offsetParent.getBoundingClientRect(), P = F.top, W = l ? window.innerHeight : qE(f), k = Dg(f), M = parseInt(getComputedStyle(r).marginBottom, 10), U = parseInt(getComputedStyle(r).marginTop, 10), G = P - U, j = W - A, D = G + k, Y = g - k - A, $ = b - W + k + M, Q = k + A - U, Z = 160;
  switch (o) {
    case "auto":
    case "bottom":
      if (j >= E)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (Y >= E && !l)
        return a && vs(f, $, Z), {
          placement: "bottom",
          maxHeight: t
        };
      if (!l && Y >= u || l && j >= u) {
        a && vs(f, $, Z);
        var K = l ? j - M : Y - M;
        return {
          placement: "bottom",
          maxHeight: K
        };
      }
      if (o === "auto" || l) {
        var fe = t, ie = l ? G : D;
        return ie >= u && (fe = Math.min(ie - M - c, t)), {
          placement: "top",
          maxHeight: fe
        };
      }
      if (o === "bottom")
        return a && Ds(f, $), {
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
      if (D >= E && !l)
        return a && vs(f, Q, Z), {
          placement: "top",
          maxHeight: t
        };
      if (!l && D >= u || l && G >= u) {
        var xe = t;
        return (!l && D >= u || l && G >= u) && (xe = l ? G - U : D - U), a && vs(f, Q, Z), {
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
function c2(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var Ng = function(t) {
  return t === "auto" ? "bottom" : t;
}, f2 = function(t, r) {
  var u, o = t.placement, a = t.theme, l = a.borderRadius, c = a.spacing, f = a.colors;
  return de((u = {
    label: "menu"
  }, Vu(u, c2(o), "100%"), Vu(u, "position", "absolute"), Vu(u, "width", "100%"), Vu(u, "zIndex", 1), u), r ? {} : {
    backgroundColor: f.neutral0,
    borderRadius: l,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: c.menuGutter,
    marginTop: c.menuGutter
  });
}, Vg = /* @__PURE__ */ Ku(null), d2 = function(t) {
  var r = t.children, u = t.minMenuHeight, o = t.maxMenuHeight, a = t.menuPlacement, l = t.menuPosition, c = t.menuShouldScrollIntoView, f = t.theme, h = su(Vg) || {}, p = h.setPortalPlacement, g = xr(null), v = nt(o), b = Ar(v, 2), E = b[0], A = b[1], F = nt(null), P = Ar(F, 2), W = P[0], k = P[1], M = f.spacing.controlHeight;
  return mc(function() {
    var U = g.current;
    if (U) {
      var G = l === "fixed", j = c && !G, D = l2({
        maxHeight: o,
        menuEl: U,
        minHeight: u,
        placement: a,
        shouldScroll: j,
        isFixedPosition: G,
        controlHeight: M
      });
      A(D.maxHeight), k(D.placement), p == null || p(D.placement);
    }
  }, [o, a, l, c, u, p, M]), r({
    ref: g,
    placerProps: de(de({}, t), {}, {
      placement: W || Ng(a),
      maxHeight: E
    })
  });
}, h2 = function(t) {
  var r = t.children, u = t.innerRef, o = t.innerProps;
  return ge("div", be({}, vt(t, "menu", {
    menu: !0
  }), {
    ref: u
  }, o), r);
}, p2 = h2, g2 = function(t, r) {
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
}, m2 = function(t) {
  var r = t.children, u = t.innerProps, o = t.innerRef, a = t.isMulti;
  return ge("div", be({}, vt(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": a
  }), {
    ref: o
  }, u), r);
}, Wg = function(t, r) {
  var u = t.theme, o = u.spacing.baseUnit, a = u.colors;
  return de({
    textAlign: "center"
  }, r ? {} : {
    color: a.neutral40,
    padding: "".concat(o * 2, "px ").concat(o * 3, "px")
  });
}, b2 = Wg, y2 = Wg, v2 = function(t) {
  var r = t.children, u = r === void 0 ? "No options" : r, o = t.innerProps, a = or(t, s2);
  return ge("div", be({}, vt(de(de({}, a), {}, {
    children: u,
    innerProps: o
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), o), u);
}, I2 = function(t) {
  var r = t.children, u = r === void 0 ? "Loading..." : r, o = t.innerProps, a = or(t, a2);
  return ge("div", be({}, vt(de(de({}, a), {}, {
    children: u,
    innerProps: o
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), o), u);
}, C2 = function(t) {
  var r = t.rect, u = t.offset, o = t.position;
  return {
    left: r.left,
    position: o,
    top: u,
    width: r.width,
    zIndex: 1
  };
}, x2 = function(t) {
  var r = t.appendTo, u = t.children, o = t.controlElement, a = t.innerProps, l = t.menuPlacement, c = t.menuPosition, f = xr(null), h = xr(null), p = nt(Ng(l)), g = Ar(p, 2), v = g[0], b = g[1], E = rr(function() {
    return {
      setPortalPlacement: b
    };
  }, []), A = nt(null), F = Ar(A, 2), P = F[0], W = F[1], k = Ht(function() {
    if (o) {
      var j = e2(o), D = c === "fixed" ? 0 : window.pageYOffset, Y = j[v] + D;
      (Y !== (P == null ? void 0 : P.offset) || j.left !== (P == null ? void 0 : P.rect.left) || j.width !== (P == null ? void 0 : P.rect.width)) && W({
        offset: Y,
        rect: j
      });
    }
  }, [o, c, v, P == null ? void 0 : P.offset, P == null ? void 0 : P.rect.left, P == null ? void 0 : P.rect.width]);
  mc(function() {
    k();
  }, [k]);
  var M = Ht(function() {
    typeof h.current == "function" && (h.current(), h.current = null), o && f.current && (h.current = JE(o, f.current, k, {
      elementResize: "ResizeObserver" in window
    }));
  }, [o, k]);
  mc(function() {
    M();
  }, [M]);
  var U = Ht(function(j) {
    f.current = j, M();
  }, [M]);
  if (!r && c !== "fixed" || !P) return null;
  var G = ge("div", be({
    ref: U
  }, vt(de(de({}, t), {}, {
    offset: P.offset,
    position: c,
    rect: P.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), a), u);
  return ge(Vg.Provider, {
    value: E
  }, r ? /* @__PURE__ */ W1(G, r) : G);
}, A2 = function(t) {
  var r = t.isDisabled, u = t.isRtl;
  return {
    label: "container",
    direction: u ? "rtl" : void 0,
    pointerEvents: r ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, w2 = function(t) {
  var r = t.children, u = t.innerProps, o = t.isDisabled, a = t.isRtl;
  return ge("div", be({}, vt(t, "container", {
    "--is-disabled": o,
    "--is-rtl": a
  }), u), r);
}, S2 = function(t, r) {
  var u = t.theme.spacing, o = t.isMulti, a = t.hasValue, l = t.selectProps.controlShouldRenderValue;
  return de({
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
}, E2 = function(t) {
  var r = t.children, u = t.innerProps, o = t.isMulti, a = t.hasValue;
  return ge("div", be({}, vt(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": o,
    "value-container--has-value": a
  }), u), r);
}, F2 = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, R2 = function(t) {
  var r = t.children, u = t.innerProps;
  return ge("div", be({}, vt(t, "indicatorsContainer", {
    indicators: !0
  }), u), r);
}, tp, P2 = ["size"], O2 = ["innerProps", "isRtl", "size"];
function _2() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var T2 = process.env.NODE_ENV === "production" ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */",
  toString: _2
}, Xg = function(t) {
  var r = t.size, u = or(t, P2);
  return ge("svg", be({
    height: r,
    width: r,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: T2
  }, u));
}, Xc = function(t) {
  return ge(Xg, be({
    size: 20
  }, t), ge("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, Hg = function(t) {
  return ge(Xg, be({
    size: 20
  }, t), ge("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, zg = function(t, r) {
  var u = t.isFocused, o = t.theme, a = o.spacing.baseUnit, l = o.colors;
  return de({
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
}, B2 = zg, G2 = function(t) {
  var r = t.children, u = t.innerProps;
  return ge("div", be({}, vt(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), u), r || ge(Hg, null));
}, k2 = zg, L2 = function(t) {
  var r = t.children, u = t.innerProps;
  return ge("div", be({}, vt(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), u), r || ge(Xc, null));
}, D2 = function(t, r) {
  var u = t.isDisabled, o = t.theme, a = o.spacing.baseUnit, l = o.colors;
  return de({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, r ? {} : {
    backgroundColor: u ? l.neutral10 : l.neutral20,
    marginBottom: a * 2,
    marginTop: a * 2
  });
}, M2 = function(t) {
  var r = t.innerProps;
  return ge("span", be({}, r, vt(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, N2 = V1(tp || (tp = GE([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), V2 = function(t, r) {
  var u = t.isFocused, o = t.size, a = t.theme, l = a.colors, c = a.spacing.baseUnit;
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
}, kl = function(t) {
  var r = t.delay, u = t.offset;
  return ge("span", {
    css: /* @__PURE__ */ Rp({
      animation: "".concat(N2, " 1s ease-in-out ").concat(r, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: u ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, process.env.NODE_ENV === "production" ? "" : ";label:LoadingDot;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */")
  });
}, W2 = function(t) {
  var r = t.innerProps, u = t.isRtl, o = t.size, a = o === void 0 ? 4 : o, l = or(t, O2);
  return ge("div", be({}, vt(de(de({}, l), {}, {
    innerProps: r,
    isRtl: u,
    size: a
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), r), ge(kl, {
    delay: 0,
    offset: u
  }), ge(kl, {
    delay: 160,
    offset: !0
  }), ge(kl, {
    delay: 320,
    offset: !u
  }));
}, X2 = function(t, r) {
  var u = t.isDisabled, o = t.isFocused, a = t.theme, l = a.colors, c = a.borderRadius, f = a.spacing;
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
}, H2 = function(t) {
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
}, z2 = H2, Z2 = ["data"], Y2 = function(t, r) {
  var u = t.theme.spacing;
  return r ? {} : {
    paddingBottom: u.baseUnit * 2,
    paddingTop: u.baseUnit * 2
  };
}, J2 = function(t) {
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
}, U2 = function(t, r) {
  var u = t.theme, o = u.colors, a = u.spacing;
  return de({
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
}, j2 = function(t) {
  var r = Lg(t);
  r.data;
  var u = or(r, Z2);
  return ge("div", be({}, vt(t, "groupHeading", {
    "group-heading": !0
  }), u));
}, Q2 = J2, q2 = ["innerRef", "isDisabled", "isHidden", "inputClassName"], $2 = function(t, r) {
  var u = t.isDisabled, o = t.value, a = t.theme, l = a.spacing, c = a.colors;
  return de(de({
    visibility: u ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: o ? "translateZ(0)" : ""
  }, K2), r ? {} : {
    margin: l.baseUnit / 2,
    paddingBottom: l.baseUnit / 2,
    paddingTop: l.baseUnit / 2,
    color: c.neutral80
  });
}, Zg = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, K2 = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": de({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, Zg)
}, eF = function(t) {
  return de({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, Zg);
}, tF = function(t) {
  var r = t.cx, u = t.value, o = Lg(t), a = o.innerRef, l = o.isDisabled, c = o.isHidden, f = o.inputClassName, h = or(o, q2);
  return ge("div", be({}, vt(t, "input", {
    "input-container": !0
  }), {
    "data-value": u || ""
  }), ge("input", be({
    className: r({
      input: !0
    }, f),
    ref: a,
    style: eF(c),
    disabled: l
  }, h)));
}, nF = tF, rF = function(t, r) {
  var u = t.theme, o = u.spacing, a = u.borderRadius, l = u.colors;
  return de({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, r ? {} : {
    backgroundColor: l.neutral10,
    borderRadius: a / 2,
    margin: o.baseUnit / 2
  });
}, iF = function(t, r) {
  var u = t.theme, o = u.borderRadius, a = u.colors, l = t.cropWithEllipsis;
  return de({
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
}, uF = function(t, r) {
  var u = t.theme, o = u.spacing, a = u.borderRadius, l = u.colors, c = t.isFocused;
  return de({
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
}, Yg = function(t) {
  var r = t.children, u = t.innerProps;
  return ge("div", u, r);
}, oF = Yg, sF = Yg;
function aF(e) {
  var t = e.children, r = e.innerProps;
  return ge("div", be({
    role: "button"
  }, r), t || ge(Xc, {
    size: 14
  }));
}
var lF = function(t) {
  var r = t.children, u = t.components, o = t.data, a = t.innerProps, l = t.isDisabled, c = t.removeProps, f = t.selectProps, h = u.Container, p = u.Label, g = u.Remove;
  return ge(h, {
    data: o,
    innerProps: de(de({}, vt(t, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": l
    })), a),
    selectProps: f
  }, ge(p, {
    data: o,
    innerProps: de({}, vt(t, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: f
  }, r), ge(g, {
    data: o,
    innerProps: de(de({}, vt(t, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(r || "option")
    }, c),
    selectProps: f
  }));
}, cF = lF, fF = function(t, r) {
  var u = t.isDisabled, o = t.isFocused, a = t.isSelected, l = t.theme, c = l.spacing, f = l.colors;
  return de({
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
}, dF = function(t) {
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
}, hF = dF, pF = function(t, r) {
  var u = t.theme, o = u.spacing, a = u.colors;
  return de({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, r ? {} : {
    color: a.neutral50,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, gF = function(t) {
  var r = t.children, u = t.innerProps;
  return ge("div", be({}, vt(t, "placeholder", {
    placeholder: !0
  }), u), r);
}, mF = gF, bF = function(t, r) {
  var u = t.isDisabled, o = t.theme, a = o.spacing, l = o.colors;
  return de({
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
}, yF = function(t) {
  var r = t.children, u = t.isDisabled, o = t.innerProps;
  return ge("div", be({}, vt(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": u
  }), o), r);
}, vF = yF, ro = {
  ClearIndicator: L2,
  Control: z2,
  DropdownIndicator: G2,
  DownChevron: Hg,
  CrossIcon: Xc,
  Group: Q2,
  GroupHeading: j2,
  IndicatorsContainer: R2,
  IndicatorSeparator: M2,
  Input: nF,
  LoadingIndicator: W2,
  Menu: p2,
  MenuList: m2,
  MenuPortal: x2,
  LoadingMessage: I2,
  NoOptionsMessage: v2,
  MultiValue: cF,
  MultiValueContainer: oF,
  MultiValueLabel: sF,
  MultiValueRemove: aF,
  Option: hF,
  Placeholder: mF,
  SelectContainer: w2,
  SingleValue: vF,
  ValueContainer: E2
}, IF = function(t) {
  return de(de({}, ro), t.components);
}, np = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function CF(e, t) {
  return !!(e === t || np(e) && np(t));
}
function xF(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (!CF(e[r], t[r]))
      return !1;
  return !0;
}
function AF(e, t) {
  t === void 0 && (t = xF);
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
function wF() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var SF = process.env.NODE_ENV === "production" ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IEpTWCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: wF
}, EF = function(t) {
  return ge("span", be({
    css: SF
  }, t));
}, rp = EF, FF = {
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
}, RF = function(t) {
  var r = t.ariaSelection, u = t.focusedOption, o = t.focusedValue, a = t.focusableOptions, l = t.isFocused, c = t.selectValue, f = t.selectProps, h = t.id, p = t.isAppleDevice, g = f.ariaLiveMessages, v = f.getOptionLabel, b = f.inputValue, E = f.isMulti, A = f.isOptionDisabled, F = f.isSearchable, P = f.menuIsOpen, W = f.options, k = f.screenReaderStatus, M = f.tabSelectsValue, U = f.isLoading, G = f["aria-label"], j = f["aria-live"], D = rr(function() {
    return de(de({}, FF), g || {});
  }, [g]), Y = rr(function() {
    var ie = "";
    if (r && D.onChange) {
      var xe = r.option, we = r.options, Re = r.removedValue, Je = r.removedValues, w = r.value, Ie = function(Me) {
        return Array.isArray(Me) ? null : Me;
      }, ke = Re || xe || Ie(w), S = ke ? v(ke) : "", Ye = we || Je || void 0, le = Ye ? Ye.map(v) : [], Se = de({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: ke && A(ke, c),
        label: S,
        labels: le
      }, r);
      ie = D.onChange(Se);
    }
    return ie;
  }, [r, D, A, c, v]), $ = rr(function() {
    var ie = "", xe = u || o, we = !!(u && c && c.includes(u));
    if (xe && D.onFocus) {
      var Re = {
        focused: xe,
        label: v(xe),
        isDisabled: A(xe, c),
        isSelected: we,
        options: a,
        context: xe === u ? "menu" : "value",
        selectValue: c,
        isAppleDevice: p
      };
      ie = D.onFocus(Re);
    }
    return ie;
  }, [u, o, v, A, D, a, c, p]), Q = rr(function() {
    var ie = "";
    if (P && W.length && !U && D.onFilter) {
      var xe = k({
        count: a.length
      });
      ie = D.onFilter({
        inputValue: b,
        resultsMessage: xe
      });
    }
    return ie;
  }, [a, b, P, D, W, k, U]), Z = (r == null ? void 0 : r.action) === "initial-input-focus", K = rr(function() {
    var ie = "";
    if (D.guidance) {
      var xe = o ? "value" : P ? "menu" : "input";
      ie = D.guidance({
        "aria-label": G,
        context: xe,
        isDisabled: u && A(u, c),
        isMulti: E,
        isSearchable: F,
        tabSelectsValue: M,
        isInitialFocus: Z
      });
    }
    return ie;
  }, [G, u, o, E, A, F, P, D, c, M, Z]), fe = ge(Wl, null, ge("span", {
    id: "aria-selection"
  }, Y), ge("span", {
    id: "aria-focused"
  }, $), ge("span", {
    id: "aria-results"
  }, Q), ge("span", {
    id: "aria-guidance"
  }, K));
  return ge(Wl, null, ge(rp, {
    id: h
  }, Z && fe), ge(rp, {
    "aria-live": j,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, l && !Z && fe));
}, PF = RF, bc = [{
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
}], OF = new RegExp("[" + bc.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), Jg = {};
for (var Ll = 0; Ll < bc.length; Ll++)
  for (var Dl = bc[Ll], Ml = 0; Ml < Dl.letters.length; Ml++)
    Jg[Dl.letters[Ml]] = Dl.base;
var Ug = function(t) {
  return t.replace(OF, function(r) {
    return Jg[r];
  });
}, _F = AF(Ug), ip = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, TF = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, BF = function(t) {
  return function(r, u) {
    if (r.data.__isNew__) return !0;
    var o = de({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: TF,
      trim: !0,
      matchFrom: "any"
    }, t), a = o.ignoreCase, l = o.ignoreAccents, c = o.stringify, f = o.trim, h = o.matchFrom, p = f ? ip(u) : u, g = f ? ip(c(r)) : c(r);
    return a && (p = p.toLowerCase(), g = g.toLowerCase()), l && (p = _F(p), g = Ug(g)), h === "start" ? g.substr(0, p.length) === p : g.indexOf(p) > -1;
  };
}, GF = ["innerRef"];
function kF(e) {
  var t = e.innerRef, r = or(e, GF), u = o2(r, "onExited", "in", "enter", "exit", "appear");
  return ge("input", be({
    ref: t
  }, u, {
    css: /* @__PURE__ */ Rp({
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
var LF = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function DF(e) {
  var t = e.isEnabled, r = e.onBottomArrive, u = e.onBottomLeave, o = e.onTopArrive, a = e.onTopLeave, l = xr(!1), c = xr(!1), f = xr(0), h = xr(null), p = Ht(function(F, P) {
    if (h.current !== null) {
      var W = h.current, k = W.scrollTop, M = W.scrollHeight, U = W.clientHeight, G = h.current, j = P > 0, D = M - U - k, Y = !1;
      D > P && l.current && (u && u(F), l.current = !1), j && c.current && (a && a(F), c.current = !1), j && P > D ? (r && !l.current && r(F), G.scrollTop = M, Y = !0, l.current = !0) : !j && -P > k && (o && !c.current && o(F), G.scrollTop = 0, Y = !0, c.current = !0), Y && LF(F);
    }
  }, [r, u, o, a]), g = Ht(function(F) {
    p(F, F.deltaY);
  }, [p]), v = Ht(function(F) {
    f.current = F.changedTouches[0].clientY;
  }, []), b = Ht(function(F) {
    var P = f.current - F.changedTouches[0].clientY;
    p(F, P);
  }, [p]), E = Ht(function(F) {
    if (F) {
      var P = r2 ? {
        passive: !1
      } : !1;
      F.addEventListener("wheel", g, P), F.addEventListener("touchstart", v, P), F.addEventListener("touchmove", b, P);
    }
  }, [b, v, g]), A = Ht(function(F) {
    F && (F.removeEventListener("wheel", g, !1), F.removeEventListener("touchstart", v, !1), F.removeEventListener("touchmove", b, !1));
  }, [b, v, g]);
  return In(function() {
    if (t) {
      var F = h.current;
      return E(F), function() {
        A(F);
      };
    }
  }, [t, E, A]), function(F) {
    h.current = F;
  };
}
var up = ["boxSizing", "height", "overflow", "paddingRight", "position"], op = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function sp(e) {
  e.cancelable && e.preventDefault();
}
function ap(e) {
  e.stopPropagation();
}
function lp() {
  var e = this.scrollTop, t = this.scrollHeight, r = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : r === t && (this.scrollTop = e - 1);
}
function cp() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var fp = !!(typeof window < "u" && window.document && window.document.createElement), Mu = 0, Hi = {
  capture: !1,
  passive: !1
};
function MF(e) {
  var t = e.isEnabled, r = e.accountForScrollbars, u = r === void 0 ? !0 : r, o = xr({}), a = xr(null), l = Ht(function(f) {
    if (fp) {
      var h = document.body, p = h && h.style;
      if (u && up.forEach(function(E) {
        var A = p && p[E];
        o.current[E] = A;
      }), u && Mu < 1) {
        var g = parseInt(o.current.paddingRight, 10) || 0, v = document.body ? document.body.clientWidth : 0, b = window.innerWidth - v + g || 0;
        Object.keys(op).forEach(function(E) {
          var A = op[E];
          p && (p[E] = A);
        }), p && (p.paddingRight = "".concat(b, "px"));
      }
      h && cp() && (h.addEventListener("touchmove", sp, Hi), f && (f.addEventListener("touchstart", lp, Hi), f.addEventListener("touchmove", ap, Hi))), Mu += 1;
    }
  }, [u]), c = Ht(function(f) {
    if (fp) {
      var h = document.body, p = h && h.style;
      Mu = Math.max(Mu - 1, 0), u && Mu < 1 && up.forEach(function(g) {
        var v = o.current[g];
        p && (p[g] = v);
      }), h && cp() && (h.removeEventListener("touchmove", sp, Hi), f && (f.removeEventListener("touchstart", lp, Hi), f.removeEventListener("touchmove", ap, Hi)));
    }
  }, [u]);
  return In(function() {
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
function NF() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var VF = function(t) {
  var r = t.target;
  return r.ownerDocument.activeElement && r.ownerDocument.activeElement.blur();
}, WF = process.env.NODE_ENV === "production" ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: NF
};
function XF(e) {
  var t = e.children, r = e.lockEnabled, u = e.captureEnabled, o = u === void 0 ? !0 : u, a = e.onBottomArrive, l = e.onBottomLeave, c = e.onTopArrive, f = e.onTopLeave, h = DF({
    isEnabled: o,
    onBottomArrive: a,
    onBottomLeave: l,
    onTopArrive: c,
    onTopLeave: f
  }), p = MF({
    isEnabled: r
  }), g = function(b) {
    h(b), p(b);
  };
  return ge(Wl, null, r && ge("div", {
    onClick: VF,
    css: WF
  }), t(g));
}
function HF() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var zF = process.env.NODE_ENV === "production" ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: HF
}, ZF = function(t) {
  var r = t.name, u = t.onFocus;
  return ge("input", {
    required: !0,
    name: r,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: u,
    css: zF,
    value: "",
    onChange: function() {
    }
  });
}, YF = ZF;
function Hc(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function JF() {
  return Hc(/^iPhone/i);
}
function jg() {
  return Hc(/^Mac/i);
}
function UF() {
  return Hc(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  jg() && navigator.maxTouchPoints > 1;
}
function jF() {
  return JF() || UF();
}
function QF() {
  return jg() || jF();
}
var qF = function(t) {
  return t.label;
}, Qg = function(t) {
  return t.label;
}, qg = function(t) {
  return t.value;
}, $F = function(t) {
  return !!t.isDisabled;
}, KF = {
  clearIndicator: k2,
  container: A2,
  control: X2,
  dropdownIndicator: B2,
  group: Y2,
  groupHeading: U2,
  indicatorsContainer: F2,
  indicatorSeparator: D2,
  input: $2,
  loadingIndicator: V2,
  loadingMessage: y2,
  menu: f2,
  menuList: g2,
  menuPortal: C2,
  multiValue: rF,
  multiValueLabel: iF,
  multiValueRemove: uF,
  noOptionsMessage: b2,
  option: fF,
  placeholder: pF,
  singleValue: bF,
  valueContainer: S2
};
function eR(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = de({}, e);
  return Object.keys(t).forEach(function(u) {
    var o = u;
    e[o] ? r[o] = function(a, l) {
      return t[o](e[o](a, l), l);
    } : r[o] = t[o];
  }), r;
}
var tR = {
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
}, nR = 4, $g = 4, rR = 38, iR = $g * 2, uR = {
  baseUnit: $g,
  controlHeight: rR,
  menuGutter: iR
}, Zu = {
  borderRadius: nR,
  colors: tR,
  spacing: uR
}, oR = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: ep(),
  captureMenuScroll: !ep(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: BF(),
  formatGroupLabel: qF,
  getOptionLabel: Qg,
  getOptionValue: qg,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: $F,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !t2(),
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
function dp(e, t, r, u) {
  var o = tm(e, t, r), a = nm(e, t, r), l = em(e, t), c = Ms(e, t);
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
function ws(e, t) {
  return e.options.map(function(r, u) {
    if ("options" in r) {
      var o = r.options.map(function(l, c) {
        return dp(e, l, t, c);
      }).filter(function(l) {
        return pp(e, l);
      });
      return o.length > 0 ? {
        type: "group",
        data: r,
        options: o,
        index: u
      } : void 0;
    }
    var a = dp(e, r, t, u);
    return pp(e, a) ? a : void 0;
  }).filter(i2);
}
function Kg(e) {
  return e.reduce(function(t, r) {
    return r.type === "group" ? t.push.apply(t, Ji(r.options.map(function(u) {
      return u.data;
    }))) : t.push(r.data), t;
  }, []);
}
function hp(e, t) {
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
function sR(e, t) {
  return Kg(ws(e, t));
}
function pp(e, t) {
  var r = e.inputValue, u = r === void 0 ? "" : r, o = t.data, a = t.isSelected, l = t.label, c = t.value;
  return (!im(e) || !a) && rm(e, {
    label: l,
    value: c,
    data: o
  }, u);
}
function aR(e, t) {
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
function lR(e, t) {
  var r = e.focusedOption;
  return r && t.indexOf(r) > -1 ? r : t[0];
}
var Nl = function(t, r) {
  var u, o = (u = t.find(function(a) {
    return a.data === r;
  })) === null || u === void 0 ? void 0 : u.id;
  return o || null;
}, em = function(t, r) {
  return t.getOptionLabel(r);
}, Ms = function(t, r) {
  return t.getOptionValue(r);
};
function tm(e, t, r) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, r) : !1;
}
function nm(e, t, r) {
  if (r.indexOf(t) > -1) return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, r);
  var u = Ms(e, t);
  return r.some(function(o) {
    return Ms(e, o) === u;
  });
}
function rm(e, t, r) {
  return e.filterOption ? e.filterOption(t, r) : !0;
}
var im = function(t) {
  var r = t.hideSelectedOptions, u = t.isMulti;
  return r === void 0 ? u : r;
}, cR = 1, zc = /* @__PURE__ */ function(e) {
  FE(r, e);
  var t = OE(r);
  function r(u) {
    var o;
    if (SE(this, r), o = t.call(this, u), o.state = {
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
    }, o.blockOptionHover = !1, o.isComposing = !1, o.commonProps = void 0, o.initialTouchX = 0, o.initialTouchY = 0, o.openAfterFocus = !1, o.scrollToFocusedOptionOnUpdate = !1, o.userIsDragging = void 0, o.isAppleDevice = QF(), o.controlRef = null, o.getControlRef = function(f) {
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
      var g = o.props, v = g.closeMenuOnSelect, b = g.isMulti, E = g.inputValue;
      o.onInputChange("", {
        action: "set-value",
        prevInputValue: E
      }), v && (o.setState({
        inputIsHiddenAfterUpdate: !b
      }), o.onMenuClose()), o.setState({
        clearFocusValueOnUpdate: !0
      }), o.onChange(f, {
        action: h,
        option: p
      });
    }, o.selectOption = function(f) {
      var h = o.props, p = h.blurInputOnSelect, g = h.isMulti, v = h.name, b = o.state.selectValue, E = g && o.isOptionSelected(f, b), A = o.isOptionDisabled(f, b);
      if (E) {
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
      var h = o.props.isMulti, p = o.state.selectValue, g = o.getOptionValue(f), v = p.filter(function(E) {
        return o.getOptionValue(E) !== g;
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
      return Nl(o.state.focusableOptionsWithIds, f);
    }, o.getFocusableOptionsWithIds = function() {
      return hp(ws(o.props, o.state.selectValue), o.getElementId("option"));
    }, o.getValue = function() {
      return o.state.selectValue;
    }, o.cx = function() {
      for (var f = arguments.length, h = new Array(f), p = 0; p < f; p++)
        h[p] = arguments[p];
      return QE.apply(void 0, [o.props.classNamePrefix].concat(h));
    }, o.getOptionLabel = function(f) {
      return em(o.props, f);
    }, o.getOptionValue = function(f) {
      return Ms(o.props, f);
    }, o.getStyles = function(f, h) {
      var p = o.props.unstyled, g = KF[f](h, p);
      g.boxSizing = "border-box";
      var v = o.props.styles[f];
      return v ? v(g, h) : g;
    }, o.getClassNames = function(f, h) {
      var p, g;
      return (p = (g = o.props.classNames)[f]) === null || p === void 0 ? void 0 : p.call(g, h);
    }, o.getElementId = function(f) {
      return "".concat(o.state.instancePrefix, "-").concat(f);
    }, o.getComponents = function() {
      return IF(o.props);
    }, o.buildCategorizedOptions = function() {
      return ws(o.props, o.state.selectValue);
    }, o.getCategorizedOptions = function() {
      return o.props.menuIsOpen ? o.buildCategorizedOptions() : [];
    }, o.buildFocusableOptions = function() {
      return Kg(o.buildCategorizedOptions());
    }, o.getFocusableOptions = function() {
      return o.props.menuIsOpen ? o.buildFocusableOptions() : [];
    }, o.ariaOnChange = function(f, h) {
      o.setState({
        ariaSelection: de({
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
      typeof o.props.closeMenuOnScroll == "boolean" ? f.target instanceof HTMLElement && Zs(f.target) && o.props.onMenuClose() : typeof o.props.closeMenuOnScroll == "function" && o.props.closeMenuOnScroll(f) && o.props.onMenuClose();
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
      return im(o.props);
    }, o.onValueInputFocus = function(f) {
      f.preventDefault(), f.stopPropagation(), o.focus();
    }, o.onKeyDown = function(f) {
      var h = o.props, p = h.isMulti, g = h.backspaceRemovesValue, v = h.escapeClearsValue, b = h.inputValue, E = h.isClearable, A = h.isDisabled, F = h.menuIsOpen, P = h.onKeyDown, W = h.tabSelectsValue, k = h.openMenuOnFocus, M = o.state, U = M.focusedOption, G = M.focusedValue, j = M.selectValue;
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
              p ? o.popValue() : E && o.clearValue();
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
            }), o.onMenuClose()) : E && v && o.clearValue();
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
    }, o.state.instancePrefix = "react-select-" + (o.props.instanceId || ++cR), o.state.selectValue = Ls(u.value), u.menuIsOpen && o.state.selectValue.length) {
      var a = o.getFocusableOptionsWithIds(), l = o.buildFocusableOptions(), c = l.indexOf(o.state.selectValue[0]);
      o.state.focusableOptionsWithIds = a, o.state.focusedOption = l[c], o.state.focusedOptionId = Nl(a, l[c]);
    }
    return o;
  }
  return EE(r, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && Kh(this.menuListRef, this.focusedOptionRef);
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
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (Kh(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
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
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(Zu) : de(de({}, Zu), this.props.theme) : Zu;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var o = this.clearValue, a = this.cx, l = this.getStyles, c = this.getClassNames, f = this.getValue, h = this.selectOption, p = this.setValue, g = this.props, v = g.isMulti, b = g.isRtl, E = g.options, A = this.hasValue();
      return {
        clearValue: o,
        cx: a,
        getStyles: l,
        getClassNames: c,
        getValue: f,
        hasValue: A,
        isMulti: v,
        isRtl: b,
        options: E,
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
      return tm(this.props, o, a);
    }
  }, {
    key: "isOptionSelected",
    value: function(o, a) {
      return nm(this.props, o, a);
    }
  }, {
    key: "filterOption",
    value: function(o, a) {
      return rm(this.props, o, a);
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
        var o = this.props, a = o.isDisabled, l = o.isSearchable, c = o.inputId, f = o.inputValue, h = o.tabIndex, p = o.form, g = o.menuIsOpen, v = o.required, b = this.getComponents(), E = b.Input, A = this.state, F = A.inputIsHidden, P = A.ariaSelection, W = this.commonProps, k = c || this.getElementId("input"), M = de(de(de({
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
        return l ? /* @__PURE__ */ _e.createElement(E, be({}, W, {
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
        }, M)) : /* @__PURE__ */ _e.createElement(kF, be({
          id: k,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: ks,
          onFocus: this.onInputFocus,
          disabled: a,
          tabIndex: h,
          inputMode: "none",
          form: p,
          value: ""
        }, M));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var o = this, a = this.getComponents(), l = a.MultiValue, c = a.MultiValueContainer, f = a.MultiValueLabel, h = a.MultiValueRemove, p = a.SingleValue, g = a.Placeholder, v = this.commonProps, b = this.props, E = b.controlShouldRenderValue, A = b.isDisabled, F = b.isMulti, P = b.inputValue, W = b.placeholder, k = this.state, M = k.selectValue, U = k.focusedValue, G = k.isFocused;
      if (!this.hasValue() || !E)
        return P ? null : /* @__PURE__ */ _e.createElement(g, be({}, v, {
          key: "placeholder",
          isDisabled: A,
          isFocused: G,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), W);
      if (F)
        return M.map(function(D, Y) {
          var $ = D === U, Q = "".concat(o.getOptionLabel(D), "-").concat(o.getOptionValue(D));
          return /* @__PURE__ */ _e.createElement(l, be({}, v, {
            components: {
              Container: c,
              Label: f,
              Remove: h
            },
            isFocused: $,
            isDisabled: A,
            key: Q,
            index: Y,
            removeProps: {
              onClick: function() {
                return o.removeValue(D);
              },
              onTouchEnd: function() {
                return o.removeValue(D);
              },
              onMouseDown: function(K) {
                K.preventDefault();
              }
            },
            data: D
          }), o.formatOptionLabel(D, "value"));
        });
      if (P)
        return null;
      var j = M[0];
      return /* @__PURE__ */ _e.createElement(p, be({}, v, {
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
      return /* @__PURE__ */ _e.createElement(a, be({}, l, {
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
      return /* @__PURE__ */ _e.createElement(a, be({}, l, {
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
      return /* @__PURE__ */ _e.createElement(l, be({}, c, {
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
      return /* @__PURE__ */ _e.createElement(a, be({}, l, {
        innerProps: h,
        isDisabled: c,
        isFocused: f
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var o = this, a = this.getComponents(), l = a.Group, c = a.GroupHeading, f = a.Menu, h = a.MenuList, p = a.MenuPortal, g = a.LoadingMessage, v = a.NoOptionsMessage, b = a.Option, E = this.commonProps, A = this.state.focusedOption, F = this.props, P = F.captureMenuScroll, W = F.inputValue, k = F.isLoading, M = F.loadingMessage, U = F.minMenuHeight, G = F.maxMenuHeight, j = F.menuIsOpen, D = F.menuPlacement, Y = F.menuPosition, $ = F.menuPortalTarget, Q = F.menuShouldBlockScroll, Z = F.menuShouldScrollIntoView, K = F.noOptionsMessage, fe = F.onMenuScrollToTop, ie = F.onMenuScrollToBottom;
      if (!j) return null;
      var xe = function(S, Ye) {
        var le = S.type, Se = S.data, At = S.isDisabled, Me = S.isSelected, mt = S.label, Nt = S.value, Gt = A === Se, kt = At ? void 0 : function() {
          return o.onOptionHover(Se);
        }, Mn = At ? void 0 : function() {
          return o.selectOption(Se);
        }, ee = "".concat(o.getElementId("option"), "-").concat(Ye), re = {
          id: ee,
          onClick: Mn,
          onMouseMove: kt,
          onMouseOver: kt,
          tabIndex: -1,
          role: "option",
          "aria-selected": o.isAppleDevice ? void 0 : Me
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ _e.createElement(b, be({}, E, {
          innerProps: re,
          data: Se,
          isDisabled: At,
          isSelected: Me,
          key: ee,
          label: mt,
          type: le,
          value: Nt,
          isFocused: Gt,
          innerRef: Gt ? o.getFocusedOptionRef : void 0
        }), o.formatOptionLabel(S.data, "menu"));
      }, we;
      if (this.hasOptions())
        we = this.getCategorizedOptions().map(function(ke) {
          if (ke.type === "group") {
            var S = ke.data, Ye = ke.options, le = ke.index, Se = "".concat(o.getElementId("group"), "-").concat(le), At = "".concat(Se, "-heading");
            return /* @__PURE__ */ _e.createElement(l, be({}, E, {
              key: Se,
              data: S,
              options: Ye,
              Heading: c,
              headingProps: {
                id: At,
                data: ke.data
              },
              label: o.formatGroupLabel(ke.data)
            }), ke.options.map(function(Me) {
              return xe(Me, "".concat(le, "-").concat(Me.index));
            }));
          } else if (ke.type === "option")
            return xe(ke, "".concat(ke.index));
        });
      else if (k) {
        var Re = M({
          inputValue: W
        });
        if (Re === null) return null;
        we = /* @__PURE__ */ _e.createElement(g, E, Re);
      } else {
        var Je = K({
          inputValue: W
        });
        if (Je === null) return null;
        we = /* @__PURE__ */ _e.createElement(v, E, Je);
      }
      var w = {
        minMenuHeight: U,
        maxMenuHeight: G,
        menuPlacement: D,
        menuPosition: Y,
        menuShouldScrollIntoView: Z
      }, Ie = /* @__PURE__ */ _e.createElement(d2, be({}, E, w), function(ke) {
        var S = ke.ref, Ye = ke.placerProps, le = Ye.placement, Se = Ye.maxHeight;
        return /* @__PURE__ */ _e.createElement(f, be({}, E, w, {
          innerRef: S,
          innerProps: {
            onMouseDown: o.onMenuMouseDown,
            onMouseMove: o.onMenuMouseMove
          },
          isLoading: k,
          placement: le
        }), /* @__PURE__ */ _e.createElement(XF, {
          captureEnabled: P,
          onTopArrive: fe,
          onBottomArrive: ie,
          lockEnabled: Q
        }, function(At) {
          return /* @__PURE__ */ _e.createElement(h, be({}, E, {
            innerRef: function(mt) {
              o.getMenuListRef(mt), At(mt);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": E.isMulti,
              id: o.getElementId("listbox")
            },
            isLoading: k,
            maxHeight: Se,
            focusedOption: A
          }), we);
        }));
      });
      return $ || Y === "fixed" ? /* @__PURE__ */ _e.createElement(p, be({}, E, {
        appendTo: $,
        controlElement: this.controlRef,
        menuPlacement: D,
        menuPosition: Y
      }), Ie) : Ie;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var o = this, a = this.props, l = a.delimiter, c = a.isDisabled, f = a.isMulti, h = a.name, p = a.required, g = this.state.selectValue;
      if (p && !this.hasValue() && !c)
        return /* @__PURE__ */ _e.createElement(YF, {
          name: h,
          onFocus: this.onValueInputFocus
        });
      if (!(!h || c))
        if (f)
          if (l) {
            var v = g.map(function(A) {
              return o.getOptionValue(A);
            }).join(l);
            return /* @__PURE__ */ _e.createElement("input", {
              name: h,
              type: "hidden",
              value: v
            });
          } else {
            var b = g.length > 0 ? g.map(function(A, F) {
              return /* @__PURE__ */ _e.createElement("input", {
                key: "i-".concat(F),
                name: h,
                type: "hidden",
                value: o.getOptionValue(A)
              });
            }) : /* @__PURE__ */ _e.createElement("input", {
              name: h,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ _e.createElement("div", null, b);
          }
        else {
          var E = g[0] ? this.getOptionValue(g[0]) : "";
          return /* @__PURE__ */ _e.createElement("input", {
            name: h,
            type: "hidden",
            value: E
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var o = this.commonProps, a = this.state, l = a.ariaSelection, c = a.focusedOption, f = a.focusedValue, h = a.isFocused, p = a.selectValue, g = this.getFocusableOptions();
      return /* @__PURE__ */ _e.createElement(PF, be({}, o, {
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
      var o = this.getComponents(), a = o.Control, l = o.IndicatorsContainer, c = o.SelectContainer, f = o.ValueContainer, h = this.props, p = h.className, g = h.id, v = h.isDisabled, b = h.menuIsOpen, E = this.state.isFocused, A = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ _e.createElement(c, be({}, A, {
        className: p,
        innerProps: {
          id: g,
          onKeyDown: this.onKeyDown
        },
        isDisabled: v,
        isFocused: E
      }), this.renderLiveRegion(), /* @__PURE__ */ _e.createElement(a, be({}, A, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: v,
        isFocused: E,
        menuIsOpen: b
      }), /* @__PURE__ */ _e.createElement(f, be({}, A, {
        isDisabled: v
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ _e.createElement(l, be({}, A, {
        isDisabled: v
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(o, a) {
      var l = a.prevProps, c = a.clearFocusValueOnUpdate, f = a.inputIsHiddenAfterUpdate, h = a.ariaSelection, p = a.isFocused, g = a.prevWasFocused, v = a.instancePrefix, b = o.options, E = o.value, A = o.menuIsOpen, F = o.inputValue, P = o.isMulti, W = Ls(E), k = {};
      if (l && (E !== l.value || b !== l.options || A !== l.menuIsOpen || F !== l.inputValue)) {
        var M = A ? sR(o, W) : [], U = A ? hp(ws(o, W), "".concat(v, "-option")) : [], G = c ? aR(a, W) : null, j = lR(a, M), D = Nl(U, j);
        k = {
          selectValue: W,
          focusedOption: j,
          focusedOptionId: D,
          focusableOptionsWithIds: U,
          focusedValue: G,
          clearFocusValueOnUpdate: !1
        };
      }
      var Y = f != null && o !== l ? {
        inputIsHidden: f,
        inputIsHiddenAfterUpdate: void 0
      } : {}, $ = h, Q = p && g;
      return p && !Q && ($ = {
        value: Wu(P, W, W[0] || null),
        options: W,
        action: "initial-input-focus"
      }, Q = !g), (h == null ? void 0 : h.action) === "initial-input-focus" && ($ = null), de(de(de({}, k), Y), {}, {
        prevProps: o,
        ariaSelection: $,
        prevWasFocused: Q
      });
    }
  }]), r;
}(Ep);
zc.defaultProps = oR;
var fR = /* @__PURE__ */ Fp(function(e, t) {
  var r = Rg(e);
  return /* @__PURE__ */ _e.createElement(zc, be({
    ref: t
  }, r));
}), Ys = fR;
const um = Ku(void 0), cu = () => {
  const e = su(um);
  if (!e)
    throw new Error("Must be used inside FormFieldContext.Provider");
  return e;
}, dR = (e, t) => {
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
}, hR = (e) => /* @__PURE__ */ se(ro.Option, { ...e, children: e.data.name });
function pR({ app: e }) {
  const t = Yr(), r = cu(), { id: u, prop: o, value: a, onChange: l } = r, { getProps: c, select: f, theme: h } = cn(), p = {
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
      Option: hR
    },
    styles: {
      control: (M) => ({
        ...M,
        gridArea: "control",
        boxShadow: h.boxShadow.input
      })
    }
  }, b = f.getProps("controlAppSelect", v), E = void 0, {
    isLoading: A,
    // TODO error
    accounts: F,
    refetch: P
  } = dR(
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
      onSuccess: async (M) => {
        await P(), l({
          authProvisionId: M.id
        });
      },
      onError: () => {
      }
    });
  }, k = rr(() => {
    let M = a;
    if (M != null) {
      for (const U of F)
        if (M.authProvisionId === U.id) {
          M = U;
          break;
        }
    }
    return M;
  }, [F, a]);
  return /* @__PURE__ */ se(
    "div",
    {
      ...c("controlApp", p, {
        app: e,
        ...r
      }),
      children: A ? `Loading ${e.name} accounts...` : F.length ? /* @__PURE__ */ se(
        Ys,
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
          getOptionLabel: (M) => M.name,
          getOptionValue: (M) => M.id,
          onChange: (M) => {
            M ? M.id === "_new" ? W() : l({
              authProvisionId: M.id
            }) : l(void 0);
          }
        }
      ) : /* @__PURE__ */ Dn(
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
function gR() {
  const e = cu(), { id: t, onChange: r, prop: u, value: o } = e, { getProps: a, theme: l } = cn(), c = {
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
  return "secret" in u && u.secret && (h = "password", f = "new-password"), /* @__PURE__ */ se(
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
}
var mR = ["allowCreateWhileLoading", "createOptionPosition", "formatCreateLabel", "isValidNewOption", "getNewOptionData", "onCreateOption", "options", "onChange"], gp = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", r = arguments.length > 1 ? arguments[1] : void 0, u = arguments.length > 2 ? arguments[2] : void 0, o = String(t).toLowerCase(), a = String(u.getOptionValue(r)).toLowerCase(), l = String(u.getOptionLabel(r)).toLowerCase();
  return a === o || l === o;
}, Vl = {
  formatCreateLabel: function(t) {
    return 'Create "'.concat(t, '"');
  },
  isValidNewOption: function(t, r, u, o) {
    return !(!t || r.some(function(a) {
      return gp(t, a, o);
    }) || u.some(function(a) {
      return gp(t, a, o);
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
function bR(e) {
  var t = e.allowCreateWhileLoading, r = t === void 0 ? !1 : t, u = e.createOptionPosition, o = u === void 0 ? "last" : u, a = e.formatCreateLabel, l = a === void 0 ? Vl.formatCreateLabel : a, c = e.isValidNewOption, f = c === void 0 ? Vl.isValidNewOption : c, h = e.getNewOptionData, p = h === void 0 ? Vl.getNewOptionData : h, g = e.onCreateOption, v = e.options, b = v === void 0 ? [] : v, E = e.onChange, A = or(e, mR), F = A.getOptionValue, P = F === void 0 ? qg : F, W = A.getOptionLabel, k = W === void 0 ? Qg : W, M = A.inputValue, U = A.isLoading, G = A.isMulti, j = A.value, D = A.name, Y = rr(function() {
    return f(M, Ls(j), b, {
      getOptionValue: P,
      getOptionLabel: k
    }) ? p(M, l(M)) : void 0;
  }, [l, p, k, P, M, f, b, j]), $ = rr(function() {
    return (r || !U) && Y ? o === "first" ? [Y].concat(Ji(b)) : [].concat(Ji(b), [Y]) : b;
  }, [r, o, U, Y, b]), Q = Ht(function(Z, K) {
    if (K.action !== "select-option")
      return E(Z, K);
    var fe = Array.isArray(Z) ? Z : [Z];
    if (fe[fe.length - 1] === Y) {
      if (g) g(M);
      else {
        var ie = p(M, M), xe = {
          action: "create-option",
          name: D,
          option: ie
        };
        E(Wu(G, [].concat(Ji(Ls(j)), [ie]), ie), xe);
      }
      return;
    }
    E(Z, K);
  }, [p, M, G, D, Y, g, E, j]);
  return de(de({}, A), {}, {
    options: $,
    onChange: Q
  });
}
var yR = /* @__PURE__ */ Fp(function(e, t) {
  var r = Rg(e), u = bR(r);
  return /* @__PURE__ */ _e.createElement(zc, be({
    ref: t
  }, u));
}), vR = yR;
const om = (e) => {
  const { onChange: t } = e, { getProps: r, theme: u } = cn(), o = {
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
  return /* @__PURE__ */ se(
    "button",
    {
      onClick: t,
      type: "button",
      ...r("loadMoreButton", o, e),
      children: "Load More"
    }
  );
};
function IR({
  isCreatable: e,
  options: t,
  selectProps: r,
  showLoadMoreButton: u,
  onLoadMore: o
}) {
  const a = cu(), { id: l, prop: c, value: f, onChange: h } = a, { select: p, theme: g } = cn(), [v, b] = nt(t), [E, A] = nt(f);
  In(() => {
    b(t);
  }, [t]), In(() => {
    A(f);
  }, [f]);
  const F = {
    styles: {
      container: (D) => ({
        ...D,
        gridArea: "control",
        boxShadow: g.boxShadow.input
      })
    }
  }, P = rr(() => {
    let D = E;
    if (D != null)
      if (Array.isArray(D)) {
        if (typeof D[0] != "object") {
          const Y = [];
          for (const $ of D) {
            let Q = {
              label: $,
              value: $
            };
            for (const Z of v)
              if (Z.value === $) {
                Q = Z;
                break;
              }
            Y.push(Q);
          }
          D = Y;
        }
      } else if (typeof D != "object")
        if ((v == null ? void 0 : v[0]) && typeof v[0] == "object") {
          for (const $ of v)
            if ($.value === E) {
              D = $;
              break;
            }
        } else
          D = {
            label: E,
            value: E
          };
      else D.__lv && (D = D.__lv);
    return D;
  }, [E, v]), W = ({
    // eslint-disable-next-line react/prop-types
    children: D,
    ...Y
  }) => /* @__PURE__ */ Dn(ro.MenuList, { ...Y, children: [
    D,
    /* @__PURE__ */ se("div", { className: "pt-4", children: /* @__PURE__ */ se(om, { onChange: o }) })
  ] }), k = p.getProps("controlSelect", F);
  u && (k.components = {
    // eslint-disable-next-line react/prop-types
    ...k.components,
    MenuList: W
  });
  const M = (D) => {
    const Y = (K) => typeof K == "object" ? K : {
      label: K,
      value: K
    }, $ = Y(D);
    let Q = $;
    const Z = v ? [$, ...v] : [$];
    b(Z), c.type.endsWith("[]") && (Array.isArray(E) ? Q = [...E.map(Y), $] : Q = [$]), A(Q), U(Q);
  }, U = (D) => {
    if (D)
      if (Array.isArray(D))
        typeof D[0] == "object" && "value" in D[0] ? h({
          __lv: D
        }) : h(D);
      else if (typeof D == "object" && "value" in D)
        h({
          __lv: D
        });
      else
        throw new Error("unhandled option type");
    else
      h(void 0);
  }, G = {
    onCreateOption: c.remoteOptions ? M : void 0
  };
  return /* @__PURE__ */ se(
    e ? vR : Ys,
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
function CR(e) {
  const { field: t, markdown: r } = e, { prop: u } = t, { getClassNames: o, getStyles: a, theme: l } = cn(), c = {
    color: l.colors.neutral50,
    fontWeight: 400,
    fontSize: "0.75rem",
    gridArea: "description",
    textWrap: "balance",
    lineHeight: "1.5"
  };
  return u.type === "app" ? /* @__PURE__ */ se(
    "p",
    {
      className: o("description", e),
      style: a("description", c, e),
      children: "Credentials are encrypted."
    }
  ) : u.description ? /* @__PURE__ */ Dn(
    "div",
    {
      className: o("description", e),
      style: a("description", c, e),
      children: [
        " ",
        /* @__PURE__ */ se(
          dg,
          {
            components: {
              a: ({ ...f }) => /* @__PURE__ */ se("a", { ...f, target: "_blank", rel: "noopener noreferrer" })
            },
            children: r
          }
        )
      ]
    }
  ) : null;
}
function xR(e) {
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
  return /* @__PURE__ */ se("div", { className: "pd-errors", style: {
    display: "grid",
    gridTemplateColumns: "max-content"
  }, children: /* @__PURE__ */ se(() => /* @__PURE__ */ se(Sp, { children: a.map((f, h) => /* @__PURE__ */ se($l, { prop: f }, h)) }), {}) });
}
function AR(e) {
  const { text: t, field: r } = e, { id: u } = r, { getProps: o, theme: a } = cn(), l = {
    color: a.colors.neutral90,
    fontWeight: 450,
    gridArea: "label",
    lineHeight: "1.5"
  };
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    /* @__PURE__ */ se("label", { htmlFor: u, ...o("label", l, e), children: t })
  );
}
const wR = (e) => {
  const { prop: t, enabled: r, onClick: u } = e, { getProps: o, theme: a } = cn(), l = {
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
  return /* @__PURE__ */ Dn(
    "button",
    {
      onClick: u,
      type: "button",
      ...o("optionalFieldButton", l, e),
      children: [
        /* @__PURE__ */ se("span", { children: r ? "-" : "+" }),
        /* @__PURE__ */ se(
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
}, SR = Zu, Zc = {
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
}, ER = {
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
function FR(e) {
  if (!e) return Zu;
  const t = typeof e == "function" ? e(Zc) : e, { colors: r, spacing: u, borderRadius: o } = yc(
    SR,
    t
  );
  return {
    borderRadius: o,
    colors: r,
    spacing: u
  };
}
function yc(e, ...t) {
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
const RR = {
  ControlInput: gR,
  ControlSelect: IR,
  ControlApp: pR,
  Description: CR,
  Errors: xR,
  Label: AR,
  OptionalFieldButton: wR,
  Button: om
}, Yc = Ku({
  // eslint-disable-line @typescript-eslint/no-explicit-any
  classNames: {},
  classNamePrefix: "",
  components: {},
  styles: {},
  theme: Zc,
  unstyled: !1
});
function PR() {
  const e = su(Yc) ?? {}, t = FR(e.theme ?? {});
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
      ...ro,
      ...f ?? {},
      ...((h = e == null ? void 0 : e.components) == null ? void 0 : h[c]) ?? {}
    };
  }
  function a(c, f) {
    var h;
    return eR(
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
function cn() {
  const e = su(Yc) ?? {}, t = e.theme, r = e.unstyled ? ER : Zc, u = typeof t == "function" ? yc(r, t(r)) : yc(r, t);
  function o(f, h) {
    var v;
    const p = `${(e == null ? void 0 : e.classNamePrefix) ?? "pd-"}${f.toLowerCase()}`, g = (v = e.classNames) == null ? void 0 : v[f];
    if (typeof g == "function") {
      const b = g, E = {
        ...h ?? {},
        theme: u
      };
      return [p, b(E)].filter(Boolean).join(" ");
    }
    return [p, g].filter(Boolean).join(" ");
  }
  function a() {
    return {
      ...RR,
      ...(e == null ? void 0 : e.components) ?? {}
    };
  }
  function l(f, h, p) {
    var v;
    const g = (v = e.styles) == null ? void 0 : v[f];
    if (typeof g == "function") {
      const b = g, E = {
        ...p ?? {},
        theme: u
      };
      return b(h, E);
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
    select: PR(),
    theme: u
  };
}
const QR = ({
  children: e,
  ...t
}) => /* @__PURE__ */ se(Yc.Provider, { value: t, children: e });
function OR(e) {
  const { form: t } = e, { propsNeedConfiguring: r, submitting: u } = t, { getProps: o, theme: a } = cn();
  return /* @__PURE__ */ se(
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
class _R extends Ep {
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
const TR = (e, t) => {
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
function BR() {
  const e = cu(), { id: t, value: r, onChange: u } = e, { getProps: o } = cn();
  return /* @__PURE__ */ se(
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
function GR({
  queryEnabled: e
}) {
  const t = Yr(), { getComponents: r } = cn(), { ControlSelect: u } = r(), {
    userId: o,
    component: a,
    configurableProps: l,
    configuredProps: c,
    dynamicProps: f,
    props: { disableQueryDisabling: h }
  } = Mc(), { idx: p, prop: g } = cu(), [v, b] = nt(""), [E, A] = nt(0), [F, P] = nt(!0), [W, k] = nt(void 0), [M, U] = nt({
    page: 0,
    prevContext: {},
    data: [],
    values: /* @__PURE__ */ new Set()
  }), G = {};
  for (let we = 0; we < p; we++) {
    const Re = l[we];
    G[Re.name] = c[Re.name];
  }
  const j = {
    userId: o,
    page: E,
    prevContext: W,
    componentId: a.key,
    propName: g.name,
    configuredProps: G,
    dynamicPropsId: f == null ? void 0 : f.id
  };
  g.useQuery && (j.query = v || "");
  const D = {
    ...j
  };
  delete D.dynamicPropsId;
  const [Y, $] = nt(), Q = () => {
    A(M.page), k(M.prevContext), U({
      ...M,
      prevContext: {}
    });
  }, { isFetching: Z, refetch: K } = Ii({
    queryKey: ["componentConfigure", D],
    queryFn: async () => {
      $(void 0);
      const we = await t.componentConfigure(j), { options: Re, stringOptions: Je, errors: w } = we;
      if (w != null && w.length) {
        try {
          $(JSON.parse(w[0]));
        } catch {
          $({
            name: "Error",
            message: w[0]
          });
        }
        return [];
      }
      let Ie = [];
      if (Re != null && Re.length && (Ie = Re), Je != null && Je.length) {
        const le = [];
        for (const Se of Je)
          le.push({
            label: Se,
            value: Se
          });
        Ie = le;
      }
      const ke = [], S = new Set(M.values);
      for (const le of Ie || []) {
        const Se = typeof le == "string" ? le : le.value;
        S.has(Se) || (S.add(Se), ke.push(le));
      }
      let Ye = M.data;
      return ke.length ? (Ye = [...M.data, ...ke], U({
        page: E + 1,
        prevContext: we.context,
        data: Ye,
        values: S
      })) : P(!1), Ye;
    },
    enabled: !!e
  }), fe = () => !Z && !Y && F, ie = Y ? Y.message : h ? "Click to configure" : e ? void 0 : "Configure props above first", xe = h ? !1 : !e;
  return /* @__PURE__ */ se(
    u,
    {
      isCreatable: !0,
      showLoadMoreButton: fe(),
      onLoadMore: Q,
      options: M.data,
      selectProps: {
        isLoading: Z,
        placeholder: ie,
        isDisabled: xe,
        inputValue: g.useQuery ? v : void 0,
        onInputChange(we) {
          g.useQuery && (b(we), K());
        },
        onMenuOpen() {
          h && !e && K();
        }
      }
    }
  );
}
function kR(e) {
  const { field: t, form: r } = e, { queryDisabledIdx: u } = r, { prop: o, idx: a } = t, l = "app" in t.extra ? t.extra.app : void 0, { getComponents: c } = cn(), {
    ControlInput: f,
    ControlSelect: h,
    ControlApp: p
  } = c();
  if (o.remoteOptions || o.type === "$.discord.channel")
    return /* @__PURE__ */ se(
      GR,
      {
        queryEnabled: u == null || u >= a
      }
    );
  if ("options" in o && o.options) {
    let g = o.options;
    return typeof g[0] != "object" && (g = g.map((v) => ({
      label: v,
      value: v
    }))), /* @__PURE__ */ se(
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
    return /* @__PURE__ */ se(h, { isCreatable: !0, options: [] });
  switch (o.type) {
    case "app":
      return /* @__PURE__ */ se(p, { app: l });
    case "boolean":
      return /* @__PURE__ */ se(BR, {});
    case "string":
    case "integer":
      return /* @__PURE__ */ se(f, {});
    default:
      throw new Error("Unsupported property type: " + o.type);
  }
}
function LR(e) {
  const { form: t, field: r } = e, { prop: u } = r, { getProps: o, getComponents: a } = cn(), l = {
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
  return p && (g = `Connect ${p.name} account`), /* @__PURE__ */ Dn("div", { ...o("field", l, e), children: [
    /* @__PURE__ */ se(c, { text: g, field: r, form: t }),
    /* @__PURE__ */ se(kR, { field: r, form: t }),
    /* @__PURE__ */ se(f, { markdown: u.description, field: r, form: t }),
    /* @__PURE__ */ se(h, { field: r, form: t })
  ] });
}
function DR({
  prop: e,
  idx: t
}) {
  const r = Mc(), {
    id: u,
    configuredProps: o,
    registerField: a,
    setConfiguredProp: l,
    errors: c,
    enableDebugging: f
  } = r, h = e.type === "app" && "app" in e ? e.app : void 0, {
    // TODO error
    app: p
  } = TR(h || "", {
    useQueryOpts: {
      enabled: !!h,
      suspense: !!h
      // this seems to work (this overrides enabled so don't just set to true)
    }
  }), v = {
    id: `pd${u}${e.name}`,
    prop: e,
    idx: t,
    value: o[e.name],
    onChange(b) {
      l(t, b);
    },
    extra: {
      app: p
      // XXX fix ts
    },
    errors: c,
    enableDebugging: f
  };
  return In(() => a(v), [v]), /* @__PURE__ */ se(um.Provider, { value: v, children: /* @__PURE__ */ se(LR, { field: v, form: r }) });
}
const MR = ["ConfigurationError"];
function NR({
  renderLoading: e,
  renderError: t
} = {}) {
  const r = Mc(), {
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
  } = r, b = v || p.filter((K) => MR.includes(K.name)).length > 0, { hideOptionalProps: E, onSubmit: A } = f, [F, P] = nt([]);
  In(() => {
    g ? P([]) : p && p.length && P(
      p.map((K) => ({
        type: "alert",
        alertType: "error",
        content: `# ${K.name}
${K.message}`
      }))
    );
  }, [p, g]);
  const { getComponents: W, getProps: k, theme: M } = cn(), { OptionalFieldButton: U } = W(), G = {
    display: "flex",
    flexDirection: "column"
  }, j = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.375rem"
  }, D = {
    fontWeight: 600,
    textTransform: "capitalize",
    color: M.colors.neutral60,
    fontSize: "0.875rem",
    lineHeight: "1.375",
    margin: "0 0 0.5rem 0"
  }, Y = async (K) => {
    if (A && (K.preventDefault(), a)) {
      h(!0);
      try {
        await A(r);
      } finally {
        h(!1);
      }
    }
  }, $ = [], Q = [];
  for (let K = 0; K < u.length; K++) {
    const fe = u[K];
    if (!fe.hidden && !As.includes(fe.type)) {
      if (fe.optional) {
        const ie = l(fe);
        if (Q.push([fe, ie]), !ie)
          continue;
      }
      $.push([fe, K]);
    }
  }
  const Z = (K) => /* @__PURE__ */ Dn(
    "p",
    {
      style: {
        color: "red"
      },
      children: [
        "Error:",
        " ",
        K && typeof K == "object" && "message" in K && typeof K.message == "string" ? K.message : "Unknown"
      ]
    }
  );
  return /* @__PURE__ */ se(
    _R,
    {
      fallback: (K) => t ? t(K) : Z(K),
      children: /* @__PURE__ */ se(
        N1,
        {
          fallback: e ? e() : /* @__PURE__ */ se("p", { children: "Loading form..." }),
          children: /* @__PURE__ */ Dn(
            "form",
            {
              ...k("componentForm", G, f),
              onSubmit: Y,
              className: "gap-2",
              children: [
                $.map(([K, fe]) => K.type === "alert" ? /* @__PURE__ */ se($l, { prop: K }, K.name) : /* @__PURE__ */ se(DR, { prop: K, idx: fe }, K.name)),
                o && (e ? e() : /* @__PURE__ */ se("p", { children: "Loading dynamic props..." })),
                !E && Q.length ? /* @__PURE__ */ Dn("div", { children: [
                  /* @__PURE__ */ se(
                    "div",
                    {
                      ...k("heading", D, f),
                      children: "Optional Props"
                    }
                  ),
                  /* @__PURE__ */ se(
                    "div",
                    {
                      ...k(
                        "optionalFields",
                        j,
                        f
                      ),
                      children: Q.map(([K, fe]) => /* @__PURE__ */ se(
                        U,
                        {
                          prop: K,
                          enabled: fe,
                          onClick: () => c(K, !fe)
                        },
                        K.name
                      ))
                    }
                  )
                ] }) : null,
                b && (F == null ? void 0 : F.map((K, fe) => /* @__PURE__ */ se($l, { prop: K }, fe))),
                A && /* @__PURE__ */ se(OR, { form: r })
              ]
            }
          )
        }
      )
    }
  );
}
function VR(e) {
  const { renderLoading: t, renderError: r, ...u } = e;
  return /* @__PURE__ */ se(yE, { props: u, children: /* @__PURE__ */ se(
    NR,
    {
      renderLoading: t,
      renderError: r
    }
  ) });
}
const WR = ({ key: e }, t) => {
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
function qR(e) {
  const { isLoading: t, error: r, component: u } = WR({
    key: e.componentKey
  });
  if (!e.componentKey)
    throw new Error("componentKey required");
  if (t)
    return e.renderLoading ? e.renderLoading() : /* @__PURE__ */ se("p", { children: "Loading..." });
  if (r)
    return e.renderError ? e.renderError(r) : /* @__PURE__ */ Dn("p", { children: [
      "Error: ",
      r.message
    ] });
  if (!u)
    return e.renderNotFound ? e.renderNotFound() : /* @__PURE__ */ se("p", { children: "Component not found" });
  const { renderLoading: o, renderError: a, renderNotFound: l, ...c } = e;
  return /* @__PURE__ */ se(
    VR,
    {
      component: u,
      renderLoading: o,
      renderError: a,
      ...c
    }
  );
}
function $R() {
  const e = cu(), { id: t, onChange: r, value: u } = e, { getProps: o, theme: a } = cn(), l = {
    display: "block",
    gridArea: "control",
    width: "100%",
    fontSize: "0.875rem",
    boxShadow: a.boxShadow.input
  };
  let c = u;
  return typeof c == "object" && (c = JSON.stringify(c)), /* @__PURE__ */ se(
    "textarea",
    {
      id: t,
      value: c,
      onChange: (f) => r(f.target.value),
      ...o("controlAny", l, e)
    }
  );
}
const XR = (e) => {
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
function KR({ value: e, onChange: t }) {
  const [r, u] = nt(""), o = vc(), {
    isLoading: a,
    // TODO error
    apps: l
  } = XR({
    q: r
  }), { Option: c, SingleValue: f } = ro, h = (l == null ? void 0 : l.find((p) => p.name_slug === (e == null ? void 0 : e.name_slug))) || null;
  return /* @__PURE__ */ se(
    Ys,
    {
      instanceId: o,
      className: "react-select-container text-sm",
      classNamePrefix: "react-select",
      components: {
        Option: (p) => /* @__PURE__ */ se(c, { ...p, children: /* @__PURE__ */ Dn(
          "div",
          {
            style: {
              display: "flex",
              gap: 10
            },
            children: [
              /* @__PURE__ */ se(
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
              /* @__PURE__ */ se(
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
        SingleValue: (p) => /* @__PURE__ */ se(f, { ...p, children: /* @__PURE__ */ Dn(
          "div",
          {
            style: {
              display: "flex",
              gap: 10,
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ se(
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
              /* @__PURE__ */ se(
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
const HR = (e) => {
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
function eP({
  app: e,
  componentType: t,
  value: r,
  onChange: u
}) {
  const o = vc(), { isLoading: a, components: l } = HR({
    app: e == null ? void 0 : e.name_slug,
    componentType: t
  }), c = (l == null ? void 0 : l.find((f) => f.key === (r == null ? void 0 : r.key))) || null;
  return /* @__PURE__ */ se(
    Ys,
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
  $l as Alert,
  VR as ComponentForm,
  qR as ComponentFormContainer,
  kR as Control,
  $R as ControlAny,
  pR as ControlApp,
  BR as ControlBoolean,
  gR as ControlInput,
  IR as ControlSelect,
  OR as ControlSubmit,
  Yc as CustomizationContext,
  QR as CustomizeProvider,
  CR as Description,
  _R as ErrorBoundary,
  xR as Errors,
  LR as Field,
  Sg as FormContext,
  yE as FormContextProvider,
  um as FormFieldContext,
  jR as FrontendClientProvider,
  NR as InternalComponentForm,
  DR as InternalField,
  AR as Label,
  wR as OptionalFieldButton,
  GR as RemoteOptionsContainer,
  KR as SelectApp,
  eP as SelectComponent,
  RR as defaultComponents,
  Zc as defaultTheme,
  FR as getReactSelectTheme,
  yc as mergeTheme,
  As as skippablePropTypes,
  ER as unstyledTheme,
  dR as useAccounts,
  TR as useApp,
  XR as useApps,
  WR as useComponent,
  HR as useComponents,
  cn as useCustomize,
  Mc as useFormContext,
  cu as useFormFieldContext,
  Yr as useFrontendClient
};
