var Jo = (e) => {
  throw TypeError(e);
};
var ai = (e, t, n) => t.has(e) || Jo("Cannot " + n);
var C = (e, t, n) => (ai(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Q = (e, t, n) => t.has(e) ? Jo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), W = (e, t, n, r) => (ai(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), le = (e, t, n) => (ai(e, t, "access private method"), n);
var xr = (e, t, n, r) => ({
  set _(i) {
    W(e, t, i, n);
  },
  get _() {
    return C(e, t, r);
  }
});
import { jsxs as lt, jsx as X, Fragment as ws } from "react/jsx-runtime";
import * as ee from "react";
import { createContext as dr, useContext as Ln, useId as io, useState as Ie, useEffect as et, useCallback as ze, useLayoutEffect as rc, useRef as Bt, useMemo as At, Component as Es, Fragment as wi, forwardRef as Fs, Suspense as ic } from "react";
import { jsx as J, css as Ps, keyframes as oc } from "@emotion/react";
import { createPortal as ac } from "react-dom";
function sc(e, t) {
  const n = {};
  return (e[e.length - 1] === "" ? [...e, ""] : e).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const uc = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, lc = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, cc = {};
function Yo(e, t) {
  return (cc.jsx ? lc : uc).test(e);
}
const dc = /[ \t\n\f\r]/g;
function pc(e) {
  return typeof e == "object" ? e.type === "text" ? _o(e.value) : !1 : _o(e);
}
function _o(e) {
  return e.replace(dc, "") === "";
}
class pr {
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
  constructor(t, n, r) {
    this.normal = n, this.property = t, r && (this.space = r);
  }
}
pr.prototype.normal = {};
pr.prototype.property = {};
pr.prototype.space = void 0;
function Gs(e, t) {
  const n = {}, r = {};
  for (const i of e)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new pr(n, r, t);
}
function Ei(e) {
  return e.toLowerCase();
}
class qe {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(t, n) {
    this.attribute = n, this.property = t;
  }
}
qe.prototype.attribute = "";
qe.prototype.booleanish = !1;
qe.prototype.boolean = !1;
qe.prototype.commaOrSpaceSeparated = !1;
qe.prototype.commaSeparated = !1;
qe.prototype.defined = !1;
qe.prototype.mustUseProperty = !1;
qe.prototype.number = !1;
qe.prototype.overloadedBoolean = !1;
qe.prototype.property = "";
qe.prototype.spaceSeparated = !1;
qe.prototype.space = void 0;
let fc = 0;
const ne = mn(), Re = mn(), ks = mn(), V = mn(), Ce = mn(), xn = mn(), Ke = mn();
function mn() {
  return 2 ** ++fc;
}
const Fi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: ne,
  booleanish: Re,
  commaOrSpaceSeparated: Ke,
  commaSeparated: xn,
  number: V,
  overloadedBoolean: ks,
  spaceSeparated: Ce
}, Symbol.toStringTag, { value: "Module" })), si = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Fi)
);
class oo extends qe {
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
  constructor(t, n, r, i) {
    let o = -1;
    if (super(t, n), Uo(this, "space", i), typeof r == "number")
      for (; ++o < si.length; ) {
        const a = si[o];
        Uo(this, si[o], (r & Fi[a]) === Fi[a]);
      }
  }
}
oo.prototype.defined = !0;
function Uo(e, t, n) {
  n && (e[t] = n);
}
function Xn(e) {
  const t = {}, n = {};
  for (const [r, i] of Object.entries(e.properties)) {
    const o = new oo(
      r,
      e.transform(e.attributes || {}, r),
      i,
      e.space
    );
    e.mustUseProperty && e.mustUseProperty.includes(r) && (o.mustUseProperty = !0), t[r] = o, n[Ei(r)] = r, n[Ei(o.attribute)] = r;
  }
  return new pr(t, n, e.space);
}
const Rs = Xn({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Re,
    ariaAutoComplete: null,
    ariaBusy: Re,
    ariaChecked: Re,
    ariaColCount: V,
    ariaColIndex: V,
    ariaColSpan: V,
    ariaControls: Ce,
    ariaCurrent: null,
    ariaDescribedBy: Ce,
    ariaDetails: null,
    ariaDisabled: Re,
    ariaDropEffect: Ce,
    ariaErrorMessage: null,
    ariaExpanded: Re,
    ariaFlowTo: Ce,
    ariaGrabbed: Re,
    ariaHasPopup: null,
    ariaHidden: Re,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Ce,
    ariaLevel: V,
    ariaLive: null,
    ariaModal: Re,
    ariaMultiLine: Re,
    ariaMultiSelectable: Re,
    ariaOrientation: null,
    ariaOwns: Ce,
    ariaPlaceholder: null,
    ariaPosInSet: V,
    ariaPressed: Re,
    ariaReadOnly: Re,
    ariaRelevant: null,
    ariaRequired: Re,
    ariaRoleDescription: Ce,
    ariaRowCount: V,
    ariaRowIndex: V,
    ariaRowSpan: V,
    ariaSelected: Re,
    ariaSetSize: V,
    ariaSort: null,
    ariaValueMax: V,
    ariaValueMin: V,
    ariaValueNow: V,
    ariaValueText: null,
    role: null
  },
  transform(e, t) {
    return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
  }
});
function Bs(e, t) {
  return t in e ? e[t] : t;
}
function Os(e, t) {
  return Bs(e, t.toLowerCase());
}
const hc = Xn({
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
    accept: xn,
    acceptCharset: Ce,
    accessKey: Ce,
    action: null,
    allow: null,
    allowFullScreen: ne,
    allowPaymentRequest: ne,
    allowUserMedia: ne,
    alt: null,
    as: null,
    async: ne,
    autoCapitalize: null,
    autoComplete: Ce,
    autoFocus: ne,
    autoPlay: ne,
    blocking: Ce,
    capture: null,
    charSet: null,
    checked: ne,
    cite: null,
    className: Ce,
    cols: V,
    colSpan: null,
    content: null,
    contentEditable: Re,
    controls: ne,
    controlsList: Ce,
    coords: V | xn,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: ne,
    defer: ne,
    dir: null,
    dirName: null,
    disabled: ne,
    download: ks,
    draggable: Re,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: ne,
    formTarget: null,
    headers: Ce,
    height: V,
    hidden: ne,
    high: V,
    href: null,
    hrefLang: null,
    htmlFor: Ce,
    httpEquiv: Ce,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: ne,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: ne,
    itemId: null,
    itemProp: Ce,
    itemRef: Ce,
    itemScope: ne,
    itemType: Ce,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: ne,
    low: V,
    manifest: null,
    max: null,
    maxLength: V,
    media: null,
    method: null,
    min: null,
    minLength: V,
    multiple: ne,
    muted: ne,
    name: null,
    nonce: null,
    noModule: ne,
    noValidate: ne,
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
    open: ne,
    optimum: V,
    pattern: null,
    ping: Ce,
    placeholder: null,
    playsInline: ne,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: ne,
    referrerPolicy: null,
    rel: Ce,
    required: ne,
    reversed: ne,
    rows: V,
    rowSpan: V,
    sandbox: Ce,
    scope: null,
    scoped: ne,
    seamless: ne,
    selected: ne,
    shadowRootClonable: ne,
    shadowRootDelegatesFocus: ne,
    shadowRootMode: null,
    shape: null,
    size: V,
    sizes: null,
    slot: null,
    span: V,
    spellCheck: Re,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: V,
    step: null,
    style: null,
    tabIndex: V,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: ne,
    useMap: null,
    value: Re,
    width: V,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: Ce,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: V,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: V,
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
    compact: ne,
    // Lists. Use CSS to reduce space between items instead
    declare: ne,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: V,
    // `<img>` and `<object>`
    leftMargin: V,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: V,
    // `<body>`
    marginWidth: V,
    // `<body>`
    noResize: ne,
    // `<frame>`
    noHref: ne,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: ne,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: ne,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: V,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: Re,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: V,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: V,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: ne,
    disableRemotePlayback: ne,
    prefix: null,
    property: null,
    results: V,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Os
}), gc = Xn({
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
    about: Ke,
    accentHeight: V,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: V,
    amplitude: V,
    arabicForm: null,
    ascent: V,
    attributeName: null,
    attributeType: null,
    azimuth: V,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: V,
    by: null,
    calcMode: null,
    capHeight: V,
    className: Ce,
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
    descent: V,
    diffuseConstant: V,
    direction: null,
    display: null,
    dur: null,
    divisor: V,
    dominantBaseline: null,
    download: ne,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: V,
    enableBackground: null,
    end: null,
    event: null,
    exponent: V,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: V,
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
    g1: xn,
    g2: xn,
    glyphName: xn,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: V,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: V,
    horizOriginX: V,
    horizOriginY: V,
    id: null,
    ideographic: V,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: V,
    k: V,
    k1: V,
    k2: V,
    k3: V,
    k4: V,
    kernelMatrix: Ke,
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
    limitingConeAngle: V,
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
    mediaSize: V,
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
    overlinePosition: V,
    overlineThickness: V,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: V,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: Ce,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: V,
    pointsAtY: V,
    pointsAtZ: V,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Ke,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Ke,
    rev: Ke,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Ke,
    requiredFeatures: Ke,
    requiredFonts: Ke,
    requiredFormats: Ke,
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
    specularConstant: V,
    specularExponent: V,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: V,
    strikethroughThickness: V,
    string: null,
    stroke: null,
    strokeDashArray: Ke,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: V,
    strokeOpacity: V,
    strokeWidth: null,
    style: null,
    surfaceScale: V,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Ke,
    tabIndex: V,
    tableValues: null,
    target: null,
    targetX: V,
    targetY: V,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Ke,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: V,
    underlineThickness: V,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: V,
    values: null,
    vAlphabetic: V,
    vMathematical: V,
    vectorEffect: null,
    vHanging: V,
    vIdeographic: V,
    version: null,
    vertAdvY: V,
    vertOriginX: V,
    vertOriginY: V,
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
    xHeight: V,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Bs
}), Ts = Xn({
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
}), Vs = Xn({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Os
}), Ds = Xn({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(e, t) {
    return "xml:" + t.slice(3).toLowerCase();
  }
}), mc = {
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
}, bc = /[A-Z]/g, Qo = /-[a-z]/g, yc = /^data[-\w.:]+$/i;
function Ic(e, t) {
  const n = Ei(t);
  let r = t, i = qe;
  if (n in e.normal)
    return e.property[e.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && yc.test(t)) {
    if (t.charAt(4) === "-") {
      const o = t.slice(5).replace(Qo, Cc);
      r = "data" + o.charAt(0).toUpperCase() + o.slice(1);
    } else {
      const o = t.slice(4);
      if (!Qo.test(o)) {
        let a = o.replace(bc, vc);
        a.charAt(0) !== "-" && (a = "-" + a), t = "data" + a;
      }
    }
    i = oo;
  }
  return new i(r, t);
}
function vc(e) {
  return "-" + e.toLowerCase();
}
function Cc(e) {
  return e.charAt(1).toUpperCase();
}
const xc = Gs([Rs, hc, Ts, Vs, Ds], "html"), ao = Gs([Rs, gc, Ts, Vs, Ds], "svg");
function Ac(e) {
  return e.join(" ").trim();
}
var Qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function so(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var uo = {}, qo = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, Sc = /\n/g, wc = /^\s*/, Ec = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Fc = /^:\s*/, Pc = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, Gc = /^[;\s]*/, kc = /^\s+|\s+$/g, Rc = `
`, $o = "/", Ko = "*", on = "", Bc = "comment", Oc = "declaration", Tc = function(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1, r = 1;
  function i(y) {
    var m = y.match(Sc);
    m && (n += m.length);
    var v = y.lastIndexOf(Rc);
    r = ~v ? y.length - v : r + y.length;
  }
  function o() {
    var y = { line: n, column: r };
    return function(m) {
      return m.position = new a(y), l(), m;
    };
  }
  function a(y) {
    this.start = y, this.end = { line: n, column: r }, this.source = t.source;
  }
  a.prototype.content = e;
  function s(y) {
    var m = new Error(
      t.source + ":" + n + ":" + r + ": " + y
    );
    if (m.reason = y, m.filename = t.source, m.line = n, m.column = r, m.source = e, !t.silent) throw m;
  }
  function u(y) {
    var m = y.exec(e);
    if (m) {
      var v = m[0];
      return i(v), e = e.slice(v.length), m;
    }
  }
  function l() {
    u(wc);
  }
  function c(y) {
    var m;
    for (y = y || []; m = d(); )
      m !== !1 && y.push(m);
    return y;
  }
  function d() {
    var y = o();
    if (!($o != e.charAt(0) || Ko != e.charAt(1))) {
      for (var m = 2; on != e.charAt(m) && (Ko != e.charAt(m) || $o != e.charAt(m + 1)); )
        ++m;
      if (m += 2, on === e.charAt(m - 1))
        return s("End of comment missing");
      var v = e.slice(2, m - 2);
      return r += 2, i(v), e = e.slice(m), r += 2, y({
        type: Bc,
        comment: v
      });
    }
  }
  function f() {
    var y = o(), m = u(Ec);
    if (m) {
      if (d(), !u(Fc)) return s("property missing ':'");
      var v = u(Pc), I = y({
        type: Oc,
        property: ea(m[0].replace(qo, on)),
        value: v ? ea(v[0].replace(qo, on)) : on
      });
      return u(Gc), I;
    }
  }
  function p() {
    var y = [];
    c(y);
    for (var m; m = f(); )
      m !== !1 && (y.push(m), c(y));
    return y;
  }
  return l(), p();
};
function ea(e) {
  return e ? e.replace(kc, on) : on;
}
var Vc = Qt && Qt.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(uo, "__esModule", { value: !0 });
uo.default = Nc;
var Dc = Vc(Tc);
function Nc(e, t) {
  var n = null;
  if (!e || typeof e != "string")
    return n;
  var r = (0, Dc.default)(e), i = typeof t == "function";
  return r.forEach(function(o) {
    if (o.type === "declaration") {
      var a = o.property, s = o.value;
      i ? t(a, s, o) : s && (n = n || {}, n[a] = s);
    }
  }), n;
}
var Yr = {};
Object.defineProperty(Yr, "__esModule", { value: !0 });
Yr.camelCase = void 0;
var Mc = /^--[a-zA-Z0-9_-]+$/, Lc = /-([a-z])/g, Xc = /^[^-]+$/, Hc = /^-(webkit|moz|ms|o|khtml)-/, zc = /^-(ms)-/, Wc = function(e) {
  return !e || Xc.test(e) || Mc.test(e);
}, Zc = function(e, t) {
  return t.toUpperCase();
}, ta = function(e, t) {
  return "".concat(t, "-");
}, jc = function(e, t) {
  return t === void 0 && (t = {}), Wc(e) ? e : (e = e.toLowerCase(), t.reactCompat ? e = e.replace(zc, ta) : e = e.replace(Hc, ta), e.replace(Lc, Zc));
};
Yr.camelCase = jc;
var Jc = Qt && Qt.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
}, Yc = Jc(uo), _c = Yr;
function Pi(e, t) {
  var n = {};
  return !e || typeof e != "string" || (0, Yc.default)(e, function(r, i) {
    r && i && (n[(0, _c.camelCase)(r, t)] = i);
  }), n;
}
Pi.default = Pi;
var Uc = Pi;
const Qc = /* @__PURE__ */ so(Uc), Ns = Ms("end"), lo = Ms("start");
function Ms(e) {
  return t;
  function t(n) {
    const r = n && n.position && n.position[e] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function qc(e) {
  const t = lo(e), n = Ns(e);
  if (t && n)
    return { start: t, end: n };
}
function er(e) {
  return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? na(e.position) : "start" in e || "end" in e ? na(e) : "line" in e || "column" in e ? Gi(e) : "";
}
function Gi(e) {
  return ra(e && e.line) + ":" + ra(e && e.column);
}
function na(e) {
  return Gi(e && e.start) + "-" + Gi(e && e.end);
}
function ra(e) {
  return e && typeof e == "number" ? e : 1;
}
class We extends Error {
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
  constructor(t, n, r) {
    super(), typeof n == "string" && (r = n, n = void 0);
    let i = "", o = {}, a = !1;
    if (n && ("line" in n && "column" in n ? o = { place: n } : "start" in n && "end" in n ? o = { place: n } : "type" in n ? o = {
      ancestors: [n],
      place: n.position
    } : o = { ...n }), typeof t == "string" ? i = t : !o.cause && t && (a = !0, i = t.message, o.cause = t), !o.ruleId && !o.source && typeof r == "string") {
      const u = r.indexOf(":");
      u === -1 ? o.ruleId = r : (o.source = r.slice(0, u), o.ruleId = r.slice(u + 1));
    }
    if (!o.place && o.ancestors && o.ancestors) {
      const u = o.ancestors[o.ancestors.length - 1];
      u && (o.place = u.position);
    }
    const s = o.place && "start" in o.place ? o.place.start : o.place;
    this.ancestors = o.ancestors || void 0, this.cause = o.cause || void 0, this.column = s ? s.column : void 0, this.fatal = void 0, this.file, this.message = i, this.line = s ? s.line : void 0, this.name = er(o.place) || "1:1", this.place = o.place || void 0, this.reason = this.message, this.ruleId = o.ruleId || void 0, this.source = o.source || void 0, this.stack = a && o.cause && typeof o.cause.stack == "string" ? o.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
We.prototype.file = "";
We.prototype.name = "";
We.prototype.reason = "";
We.prototype.message = "";
We.prototype.stack = "";
We.prototype.column = void 0;
We.prototype.line = void 0;
We.prototype.ancestors = void 0;
We.prototype.cause = void 0;
We.prototype.fatal = void 0;
We.prototype.place = void 0;
We.prototype.ruleId = void 0;
We.prototype.source = void 0;
const co = {}.hasOwnProperty, $c = /* @__PURE__ */ new Map(), Kc = /[A-Z]/g, ed = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), td = /* @__PURE__ */ new Set(["td", "th"]), Ls = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function nd(e, t) {
  if (!t || t.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = t.filePath || void 0;
  let r;
  if (t.development) {
    if (typeof t.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = cd(n, t.jsxDEV);
  } else {
    if (typeof t.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof t.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = ld(n, t.jsx, t.jsxs);
  }
  const i = {
    Fragment: t.Fragment,
    ancestors: [],
    components: t.components || {},
    create: r,
    elementAttributeNameCase: t.elementAttributeNameCase || "react",
    evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
    filePath: n,
    ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
    passKeys: t.passKeys !== !1,
    passNode: t.passNode || !1,
    schema: t.space === "svg" ? ao : xc,
    stylePropertyNameCase: t.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
  }, o = Xs(i, e, void 0);
  return o && typeof o != "string" ? o : i.create(
    e,
    i.Fragment,
    { children: o || void 0 },
    void 0
  );
}
function Xs(e, t, n) {
  if (t.type === "element")
    return rd(e, t, n);
  if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression")
    return id(e, t);
  if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement")
    return ad(e, t, n);
  if (t.type === "mdxjsEsm")
    return od(e, t);
  if (t.type === "root")
    return sd(e, t, n);
  if (t.type === "text")
    return ud(e, t);
}
function rd(e, t, n) {
  const r = e.schema;
  let i = r;
  t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = ao, e.schema = i), e.ancestors.push(t);
  const o = zs(e, t.tagName, !1), a = dd(e, t);
  let s = fo(e, t);
  return ed.has(t.tagName) && (s = s.filter(function(u) {
    return typeof u == "string" ? !pc(u) : !0;
  })), Hs(e, a, o, t), po(a, s), e.ancestors.pop(), e.schema = r, e.create(t, o, a, n);
}
function id(e, t) {
  if (t.data && t.data.estree && e.evaluater) {
    const r = t.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    e.evaluater.evaluateExpression(r.expression);
  }
  ir(e, t.position);
}
function od(e, t) {
  if (t.data && t.data.estree && e.evaluater)
    return (
      /** @type {Child | undefined} */
      e.evaluater.evaluateProgram(t.data.estree)
    );
  ir(e, t.position);
}
function ad(e, t, n) {
  const r = e.schema;
  let i = r;
  t.name === "svg" && r.space === "html" && (i = ao, e.schema = i), e.ancestors.push(t);
  const o = t.name === null ? e.Fragment : zs(e, t.name, !0), a = pd(e, t), s = fo(e, t);
  return Hs(e, a, o, t), po(a, s), e.ancestors.pop(), e.schema = r, e.create(t, o, a, n);
}
function sd(e, t, n) {
  const r = {};
  return po(r, fo(e, t)), e.create(t, e.Fragment, r, n);
}
function ud(e, t) {
  return t.value;
}
function Hs(e, t, n, r) {
  typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function po(e, t) {
  if (t.length > 0) {
    const n = t.length > 1 ? t : t[0];
    n && (e.children = n);
  }
}
function ld(e, t, n) {
  return r;
  function r(i, o, a, s) {
    const l = Array.isArray(a.children) ? n : t;
    return s ? l(o, a, s) : l(o, a);
  }
}
function cd(e, t) {
  return n;
  function n(r, i, o, a) {
    const s = Array.isArray(o.children), u = lo(r);
    return t(
      i,
      o,
      a,
      s,
      {
        columnNumber: u ? u.column - 1 : void 0,
        fileName: e,
        lineNumber: u ? u.line : void 0
      },
      void 0
    );
  }
}
function dd(e, t) {
  const n = {};
  let r, i;
  for (i in t.properties)
    if (i !== "children" && co.call(t.properties, i)) {
      const o = fd(e, i, t.properties[i]);
      if (o) {
        const [a, s] = o;
        e.tableCellAlignToStyle && a === "align" && typeof s == "string" && td.has(t.tagName) ? r = s : n[a] = s;
      }
    }
  if (r) {
    const o = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    o[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function pd(e, t) {
  const n = {};
  for (const r of t.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && e.evaluater) {
        const o = r.data.estree.body[0];
        o.type;
        const a = o.expression;
        a.type;
        const s = a.properties[0];
        s.type, Object.assign(
          n,
          e.evaluater.evaluateExpression(s.argument)
        );
      } else
        ir(e, t.position);
    else {
      const i = r.name;
      let o;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && e.evaluater) {
          const s = r.value.data.estree.body[0];
          s.type, o = e.evaluater.evaluateExpression(s.expression);
        } else
          ir(e, t.position);
      else
        o = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      o;
    }
  return n;
}
function fo(e, t) {
  const n = [];
  let r = -1;
  const i = e.passKeys ? /* @__PURE__ */ new Map() : $c;
  for (; ++r < t.children.length; ) {
    const o = t.children[r];
    let a;
    if (e.passKeys) {
      const u = o.type === "element" ? o.tagName : o.type === "mdxJsxFlowElement" || o.type === "mdxJsxTextElement" ? o.name : void 0;
      if (u) {
        const l = i.get(u) || 0;
        a = u + "-" + l, i.set(u, l + 1);
      }
    }
    const s = Xs(e, o, a);
    s !== void 0 && n.push(s);
  }
  return n;
}
function fd(e, t, n) {
  const r = Ic(e.schema, t);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? sc(n) : Ac(n)), r.property === "style") {
      let i = typeof n == "object" ? n : hd(e, String(n));
      return e.stylePropertyNameCase === "css" && (i = gd(i)), ["style", i];
    }
    return [
      e.elementAttributeNameCase === "react" && r.space ? mc[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function hd(e, t) {
  try {
    return Qc(t, { reactCompat: !0 });
  } catch (n) {
    if (e.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), i = new We("Cannot parse `style` attribute", {
      ancestors: e.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = e.filePath || void 0, i.url = Ls + "#cannot-parse-style-attribute", i;
  }
}
function zs(e, t, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: t };
  else if (t.includes(".")) {
    const i = t.split(".");
    let o = -1, a;
    for (; ++o < i.length; ) {
      const s = Yo(i[o]) ? { type: "Identifier", name: i[o] } : { type: "Literal", value: i[o] };
      a = a ? {
        type: "MemberExpression",
        object: a,
        property: s,
        computed: !!(o && s.type === "Literal"),
        optional: !1
      } : s;
    }
    r = a;
  } else
    r = Yo(t) && !/^[a-z]/.test(t) ? { type: "Identifier", name: t } : { type: "Literal", value: t };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return co.call(e.components, i) ? e.components[i] : i;
  }
  if (e.evaluater)
    return e.evaluater.evaluateExpression(r);
  ir(e);
}
function ir(e, t) {
  const n = new We(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: e.ancestors,
      place: t,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = e.filePath || void 0, n.url = Ls + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function gd(e) {
  const t = {};
  let n;
  for (n in e)
    co.call(e, n) && (t[md(n)] = e[n]);
  return t;
}
function md(e) {
  let t = e.replace(Kc, bd);
  return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function bd(e) {
  return "-" + e.toLowerCase();
}
const ui = {
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
}, yd = {};
function Id(e, t) {
  const n = yd, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Ws(e, r, i);
}
function Ws(e, t, n) {
  if (vd(e)) {
    if ("value" in e)
      return e.type === "html" && !n ? "" : e.value;
    if (t && "alt" in e && e.alt)
      return e.alt;
    if ("children" in e)
      return ia(e.children, t, n);
  }
  return Array.isArray(e) ? ia(e, t, n) : "";
}
function ia(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; )
    r[i] = Ws(e[i], t, n);
  return r.join("");
}
function vd(e) {
  return !!(e && typeof e == "object");
}
const oa = document.createElement("i");
function ho(e) {
  const t = "&" + e + ";";
  oa.innerHTML = t;
  const n = oa.textContent;
  return (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n
  );
}
function wt(e, t, n, r) {
  const i = e.length;
  let o = 0, a;
  if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4)
    a = Array.from(r), a.unshift(t, n), e.splice(...a);
  else
    for (n && e.splice(t, n); o < r.length; )
      a = r.slice(o, o + 1e4), a.unshift(t, 0), e.splice(...a), o += 1e4, t += 1e4;
}
function ut(e, t) {
  return e.length > 0 ? (wt(e, e.length, 0, t), e) : t;
}
const aa = {}.hasOwnProperty;
function Cd(e) {
  const t = {};
  let n = -1;
  for (; ++n < e.length; )
    xd(t, e[n]);
  return t;
}
function xd(e, t) {
  let n;
  for (n in t) {
    const i = (aa.call(e, n) ? e[n] : void 0) || (e[n] = {}), o = t[n];
    let a;
    if (o)
      for (a in o) {
        aa.call(i, a) || (i[a] = []);
        const s = o[a];
        Ad(
          // @ts-expect-error Looks like a list.
          i[a],
          Array.isArray(s) ? s : s ? [s] : []
        );
      }
  }
}
function Ad(e, t) {
  let n = -1;
  const r = [];
  for (; ++n < t.length; )
    (t[n].add === "after" ? e : r).push(t[n]);
  wt(e, 0, 0, r);
}
function Zs(e, t) {
  const n = Number.parseInt(e, t);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || /* eslint-disable no-bitwise */
    (n & 65535) === 65535 || (n & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    n > 1114111 ? "�" : String.fromCodePoint(n)
  );
}
function An(e) {
  return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const St = qt(/[A-Za-z]/), tt = qt(/[\dA-Za-z]/), Sd = qt(/[#-'*+\--9=?A-Z^-~]/);
function ki(e) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    e !== null && (e < 32 || e === 127)
  );
}
const Ri = qt(/\d/), wd = qt(/[\dA-Fa-f]/), Ed = qt(/[!-/:-@[-`{-~]/);
function $(e) {
  return e !== null && e < -2;
}
function Qe(e) {
  return e !== null && (e < 0 || e === 32);
}
function me(e) {
  return e === -2 || e === -1 || e === 32;
}
const Fd = qt(new RegExp("\\p{P}|\\p{S}", "u")), Pd = qt(/\s/);
function qt(e) {
  return t;
  function t(n) {
    return n !== null && n > -1 && e.test(String.fromCharCode(n));
  }
}
function Hn(e) {
  const t = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < e.length; ) {
    const o = e.charCodeAt(n);
    let a = "";
    if (o === 37 && tt(e.charCodeAt(n + 1)) && tt(e.charCodeAt(n + 2)))
      i = 2;
    else if (o < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) || (a = String.fromCharCode(o));
    else if (o > 55295 && o < 57344) {
      const s = e.charCodeAt(n + 1);
      o < 56320 && s > 56319 && s < 57344 ? (a = String.fromCharCode(o, s), i = 1) : a = "�";
    } else
      a = String.fromCharCode(o);
    a && (t.push(e.slice(r, n), encodeURIComponent(a)), r = n + i + 1, a = ""), i && (n += i, i = 0);
  }
  return t.join("") + e.slice(r);
}
function xe(e, t, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let o = 0;
  return a;
  function a(u) {
    return me(u) ? (e.enter(n), s(u)) : t(u);
  }
  function s(u) {
    return me(u) && o++ < i ? (e.consume(u), s) : (e.exit(n), t(u));
  }
}
const Gd = {
  tokenize: kd
};
function kd(e) {
  const t = e.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return t;
  function r(s) {
    if (s === null) {
      e.consume(s);
      return;
    }
    return e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), xe(e, t, "linePrefix");
  }
  function i(s) {
    return e.enter("paragraph"), o(s);
  }
  function o(s) {
    const u = e.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = u), n = u, a(s);
  }
  function a(s) {
    if (s === null) {
      e.exit("chunkText"), e.exit("paragraph"), e.consume(s);
      return;
    }
    return $(s) ? (e.consume(s), e.exit("chunkText"), o) : (e.consume(s), a);
  }
}
const Rd = {
  tokenize: Bd
}, sa = {
  tokenize: Od
};
function Bd(e) {
  const t = this, n = [];
  let r = 0, i, o, a;
  return s;
  function s(S) {
    if (r < n.length) {
      const P = n[r];
      return t.containerState = P[1], e.attempt(P[0].continuation, u, l)(S);
    }
    return l(S);
  }
  function u(S) {
    if (r++, t.containerState._closeFlow) {
      t.containerState._closeFlow = void 0, i && E();
      const P = t.events.length;
      let T = P, A;
      for (; T--; )
        if (t.events[T][0] === "exit" && t.events[T][1].type === "chunkFlow") {
          A = t.events[T][1].end;
          break;
        }
      I(r);
      let D = P;
      for (; D < t.events.length; )
        t.events[D][1].end = {
          ...A
        }, D++;
      return wt(t.events, T + 1, 0, t.events.slice(P)), t.events.length = D, l(S);
    }
    return s(S);
  }
  function l(S) {
    if (r === n.length) {
      if (!i)
        return f(S);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return y(S);
      t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return t.containerState = {}, e.check(sa, c, d)(S);
  }
  function c(S) {
    return i && E(), I(r), f(S);
  }
  function d(S) {
    return t.parser.lazy[t.now().line] = r !== n.length, a = t.now().offset, y(S);
  }
  function f(S) {
    return t.containerState = {}, e.attempt(sa, p, y)(S);
  }
  function p(S) {
    return r++, n.push([t.currentConstruct, t.containerState]), f(S);
  }
  function y(S) {
    if (S === null) {
      i && E(), I(0), e.consume(S);
      return;
    }
    return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: o
    }), m(S);
  }
  function m(S) {
    if (S === null) {
      v(e.exit("chunkFlow"), !0), I(0), e.consume(S);
      return;
    }
    return $(S) ? (e.consume(S), v(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(S), m);
  }
  function v(S, P) {
    const T = t.sliceStream(S);
    if (P && T.push(null), S.previous = o, o && (o.next = S), o = S, i.defineSkip(S.start), i.write(T), t.parser.lazy[S.start.line]) {
      let A = i.events.length;
      for (; A--; )
        if (
          // The token starts before the line ending…
          i.events[A][1].start.offset < a && // …and either is not ended yet…
          (!i.events[A][1].end || // …or ends after it.
          i.events[A][1].end.offset > a)
        )
          return;
      const D = t.events.length;
      let w = D, O, G;
      for (; w--; )
        if (t.events[w][0] === "exit" && t.events[w][1].type === "chunkFlow") {
          if (O) {
            G = t.events[w][1].end;
            break;
          }
          O = !0;
        }
      for (I(r), A = D; A < t.events.length; )
        t.events[A][1].end = {
          ...G
        }, A++;
      wt(t.events, w + 1, 0, t.events.slice(D)), t.events.length = A;
    }
  }
  function I(S) {
    let P = n.length;
    for (; P-- > S; ) {
      const T = n[P];
      t.containerState = T[1], T[0].exit.call(t, e);
    }
    n.length = S;
  }
  function E() {
    i.write([null]), o = void 0, i = void 0, t.containerState._closeFlow = void 0;
  }
}
function Od(e, t, n) {
  return xe(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function ua(e) {
  if (e === null || Qe(e) || Pd(e))
    return 1;
  if (Fd(e))
    return 2;
}
function go(e, t, n) {
  const r = [];
  let i = -1;
  for (; ++i < e.length; ) {
    const o = e[i].resolveAll;
    o && !r.includes(o) && (t = o(t, n), r.push(o));
  }
  return t;
}
const Bi = {
  name: "attention",
  resolveAll: Td,
  tokenize: Vd
};
function Td(e, t) {
  let n = -1, r, i, o, a, s, u, l, c;
  for (; ++n < e.length; )
    if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; )
        if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && // If the markers are the same:
        t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
          if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3))
            continue;
          u = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
          const d = {
            ...e[r][1].end
          }, f = {
            ...e[n][1].start
          };
          la(d, -u), la(f, u), a = {
            type: u > 1 ? "strongSequence" : "emphasisSequence",
            start: d,
            end: {
              ...e[r][1].end
            }
          }, s = {
            type: u > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...e[n][1].start
            },
            end: f
          }, o = {
            type: u > 1 ? "strongText" : "emphasisText",
            start: {
              ...e[r][1].end
            },
            end: {
              ...e[n][1].start
            }
          }, i = {
            type: u > 1 ? "strong" : "emphasis",
            start: {
              ...a.start
            },
            end: {
              ...s.end
            }
          }, e[r][1].end = {
            ...a.start
          }, e[n][1].start = {
            ...s.end
          }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = ut(l, [["enter", e[r][1], t], ["exit", e[r][1], t]])), l = ut(l, [["enter", i, t], ["enter", a, t], ["exit", a, t], ["enter", o, t]]), l = ut(l, go(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = ut(l, [["exit", o, t], ["enter", s, t], ["exit", s, t], ["exit", i, t]]), e[n][1].end.offset - e[n][1].start.offset ? (c = 2, l = ut(l, [["enter", e[n][1], t], ["exit", e[n][1], t]])) : c = 0, wt(e, r - 1, n - r + 3, l), n = r + l.length - c - 2;
          break;
        }
    }
  for (n = -1; ++n < e.length; )
    e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
  return e;
}
function Vd(e, t) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = ua(r);
  let o;
  return a;
  function a(u) {
    return o = u, e.enter("attentionSequence"), s(u);
  }
  function s(u) {
    if (u === o)
      return e.consume(u), s;
    const l = e.exit("attentionSequence"), c = ua(u), d = !c || c === 2 && i || n.includes(u), f = !i || i === 2 && c || n.includes(r);
    return l._open = !!(o === 42 ? d : d && (i || !f)), l._close = !!(o === 42 ? f : f && (c || !d)), t(u);
  }
}
function la(e, t) {
  e.column += t, e.offset += t, e._bufferIndex += t;
}
const Dd = {
  name: "autolink",
  tokenize: Nd
};
function Nd(e, t, n) {
  let r = 0;
  return i;
  function i(p) {
    return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), o;
  }
  function o(p) {
    return St(p) ? (e.consume(p), a) : p === 64 ? n(p) : l(p);
  }
  function a(p) {
    return p === 43 || p === 45 || p === 46 || tt(p) ? (r = 1, s(p)) : l(p);
  }
  function s(p) {
    return p === 58 ? (e.consume(p), r = 0, u) : (p === 43 || p === 45 || p === 46 || tt(p)) && r++ < 32 ? (e.consume(p), s) : (r = 0, l(p));
  }
  function u(p) {
    return p === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : p === null || p === 32 || p === 60 || ki(p) ? n(p) : (e.consume(p), u);
  }
  function l(p) {
    return p === 64 ? (e.consume(p), c) : Sd(p) ? (e.consume(p), l) : n(p);
  }
  function c(p) {
    return tt(p) ? d(p) : n(p);
  }
  function d(p) {
    return p === 46 ? (e.consume(p), r = 0, c) : p === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(p);
  }
  function f(p) {
    if ((p === 45 || tt(p)) && r++ < 63) {
      const y = p === 45 ? f : d;
      return e.consume(p), y;
    }
    return n(p);
  }
}
const _r = {
  partial: !0,
  tokenize: Md
};
function Md(e, t, n) {
  return r;
  function r(o) {
    return me(o) ? xe(e, i, "linePrefix")(o) : i(o);
  }
  function i(o) {
    return o === null || $(o) ? t(o) : n(o);
  }
}
const js = {
  continuation: {
    tokenize: Xd
  },
  exit: Hd,
  name: "blockQuote",
  tokenize: Ld
};
function Ld(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    if (a === 62) {
      const s = r.containerState;
      return s.open || (e.enter("blockQuote", {
        _container: !0
      }), s.open = !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(a), e.exit("blockQuoteMarker"), o;
    }
    return n(a);
  }
  function o(a) {
    return me(a) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(a), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(a));
  }
}
function Xd(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return me(a) ? xe(e, o, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a) : o(a);
  }
  function o(a) {
    return e.attempt(js, t, n)(a);
  }
}
function Hd(e) {
  e.exit("blockQuote");
}
const Js = {
  name: "characterEscape",
  tokenize: zd
};
function zd(e, t, n) {
  return r;
  function r(o) {
    return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(o), e.exit("escapeMarker"), i;
  }
  function i(o) {
    return Ed(o) ? (e.enter("characterEscapeValue"), e.consume(o), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(o);
  }
}
const Ys = {
  name: "characterReference",
  tokenize: Wd
};
function Wd(e, t, n) {
  const r = this;
  let i = 0, o, a;
  return s;
  function s(d) {
    return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(d), e.exit("characterReferenceMarker"), u;
  }
  function u(d) {
    return d === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(d), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), o = 31, a = tt, c(d));
  }
  function l(d) {
    return d === 88 || d === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(d), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), o = 6, a = wd, c) : (e.enter("characterReferenceValue"), o = 7, a = Ri, c(d));
  }
  function c(d) {
    if (d === 59 && i) {
      const f = e.exit("characterReferenceValue");
      return a === tt && !ho(r.sliceSerialize(f)) ? n(d) : (e.enter("characterReferenceMarker"), e.consume(d), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
    }
    return a(d) && i++ < o ? (e.consume(d), c) : n(d);
  }
}
const ca = {
  partial: !0,
  tokenize: jd
}, da = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Zd
};
function Zd(e, t, n) {
  const r = this, i = {
    partial: !0,
    tokenize: T
  };
  let o = 0, a = 0, s;
  return u;
  function u(A) {
    return l(A);
  }
  function l(A) {
    const D = r.events[r.events.length - 1];
    return o = D && D[1].type === "linePrefix" ? D[2].sliceSerialize(D[1], !0).length : 0, s = A, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), c(A);
  }
  function c(A) {
    return A === s ? (a++, e.consume(A), c) : a < 3 ? n(A) : (e.exit("codeFencedFenceSequence"), me(A) ? xe(e, d, "whitespace")(A) : d(A));
  }
  function d(A) {
    return A === null || $(A) ? (e.exit("codeFencedFence"), r.interrupt ? t(A) : e.check(ca, m, P)(A)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
      contentType: "string"
    }), f(A));
  }
  function f(A) {
    return A === null || $(A) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(A)) : me(A) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), xe(e, p, "whitespace")(A)) : A === 96 && A === s ? n(A) : (e.consume(A), f);
  }
  function p(A) {
    return A === null || $(A) ? d(A) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
      contentType: "string"
    }), y(A));
  }
  function y(A) {
    return A === null || $(A) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(A)) : A === 96 && A === s ? n(A) : (e.consume(A), y);
  }
  function m(A) {
    return e.attempt(i, P, v)(A);
  }
  function v(A) {
    return e.enter("lineEnding"), e.consume(A), e.exit("lineEnding"), I;
  }
  function I(A) {
    return o > 0 && me(A) ? xe(e, E, "linePrefix", o + 1)(A) : E(A);
  }
  function E(A) {
    return A === null || $(A) ? e.check(ca, m, P)(A) : (e.enter("codeFlowValue"), S(A));
  }
  function S(A) {
    return A === null || $(A) ? (e.exit("codeFlowValue"), E(A)) : (e.consume(A), S);
  }
  function P(A) {
    return e.exit("codeFenced"), t(A);
  }
  function T(A, D, w) {
    let O = 0;
    return G;
    function G(L) {
      return A.enter("lineEnding"), A.consume(L), A.exit("lineEnding"), B;
    }
    function B(L) {
      return A.enter("codeFencedFence"), me(L) ? xe(A, R, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(L) : R(L);
    }
    function R(L) {
      return L === s ? (A.enter("codeFencedFenceSequence"), j(L)) : w(L);
    }
    function j(L) {
      return L === s ? (O++, A.consume(L), j) : O >= a ? (A.exit("codeFencedFenceSequence"), me(L) ? xe(A, te, "whitespace")(L) : te(L)) : w(L);
    }
    function te(L) {
      return L === null || $(L) ? (A.exit("codeFencedFence"), D(L)) : w(L);
    }
  }
}
function jd(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return a === null ? n(a) : (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), o);
  }
  function o(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
const li = {
  name: "codeIndented",
  tokenize: Yd
}, Jd = {
  partial: !0,
  tokenize: _d
};
function Yd(e, t, n) {
  const r = this;
  return i;
  function i(l) {
    return e.enter("codeIndented"), xe(e, o, "linePrefix", 5)(l);
  }
  function o(l) {
    const c = r.events[r.events.length - 1];
    return c && c[1].type === "linePrefix" && c[2].sliceSerialize(c[1], !0).length >= 4 ? a(l) : n(l);
  }
  function a(l) {
    return l === null ? u(l) : $(l) ? e.attempt(Jd, a, u)(l) : (e.enter("codeFlowValue"), s(l));
  }
  function s(l) {
    return l === null || $(l) ? (e.exit("codeFlowValue"), a(l)) : (e.consume(l), s);
  }
  function u(l) {
    return e.exit("codeIndented"), t(l);
  }
}
function _d(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return r.parser.lazy[r.now().line] ? n(a) : $(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), i) : xe(e, o, "linePrefix", 5)(a);
  }
  function o(a) {
    const s = r.events[r.events.length - 1];
    return s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(a) : $(a) ? i(a) : n(a);
  }
}
const Ud = {
  name: "codeText",
  previous: qd,
  resolve: Qd,
  tokenize: $d
};
function Qd(e) {
  let t = e.length - 4, n = 3, r, i;
  if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
    for (r = n; ++r < t; )
      if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
  }
  for (r = n - 1, t++; ++r <= t; )
    i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
  return e;
}
function qd(e) {
  return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function $d(e, t, n) {
  let r = 0, i, o;
  return a;
  function a(d) {
    return e.enter("codeText"), e.enter("codeTextSequence"), s(d);
  }
  function s(d) {
    return d === 96 ? (e.consume(d), r++, s) : (e.exit("codeTextSequence"), u(d));
  }
  function u(d) {
    return d === null ? n(d) : d === 32 ? (e.enter("space"), e.consume(d), e.exit("space"), u) : d === 96 ? (o = e.enter("codeTextSequence"), i = 0, c(d)) : $(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), u) : (e.enter("codeTextData"), l(d));
  }
  function l(d) {
    return d === null || d === 32 || d === 96 || $(d) ? (e.exit("codeTextData"), u(d)) : (e.consume(d), l);
  }
  function c(d) {
    return d === 96 ? (e.consume(d), i++, c) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(d)) : (o.type = "codeTextData", l(d));
  }
}
class Kd {
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
  slice(t, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
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
  splice(t, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(t));
    const o = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && _n(this.left, r), o.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), _n(this.left, t);
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
    this.setCursor(0), _n(this.right, t.reverse());
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
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        _n(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        _n(this.left, n.reverse());
      }
  }
}
function _n(e, t) {
  let n = 0;
  if (t.length < 1e4)
    e.push(...t);
  else
    for (; n < t.length; )
      e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
function _s(e) {
  const t = {};
  let n = -1, r, i, o, a, s, u, l;
  const c = new Kd(e);
  for (; ++n < c.length; ) {
    for (; n in t; )
      n = t[n];
    if (r = c.get(n), n && r[1].type === "chunkFlow" && c.get(n - 1)[1].type === "listItemPrefix" && (u = r[1]._tokenizer.events, o = 0, o < u.length && u[o][1].type === "lineEndingBlank" && (o += 2), o < u.length && u[o][1].type === "content"))
      for (; ++o < u.length && u[o][1].type !== "content"; )
        u[o][1].type === "chunkText" && (u[o][1]._isInFirstContentOfListItem = !0, o++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(t, ep(c, n)), n = t[n], l = !0);
    else if (r[1]._container) {
      for (o = n, i = void 0; o--; )
        if (a = c.get(o), a[1].type === "lineEnding" || a[1].type === "lineEndingBlank")
          a[0] === "enter" && (i && (c.get(i)[1].type = "lineEndingBlank"), a[1].type = "lineEnding", i = o);
        else if (!(a[1].type === "linePrefix" || a[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...c.get(i)[1].start
      }, s = c.slice(i, n), s.unshift(r), c.splice(i, n - i + 1, s));
    }
  }
  return wt(e, 0, Number.POSITIVE_INFINITY, c.slice(0)), !l;
}
function ep(e, t) {
  const n = e.get(t)[1], r = e.get(t)[2];
  let i = t - 1;
  const o = [];
  let a = n._tokenizer;
  a || (a = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (a._contentTypeTextTrailing = !0));
  const s = a.events, u = [], l = {};
  let c, d, f = -1, p = n, y = 0, m = 0;
  const v = [m];
  for (; p; ) {
    for (; e.get(++i)[1] !== p; )
      ;
    o.push(i), p._tokenizer || (c = r.sliceStream(p), p.next || c.push(null), d && a.defineSkip(p.start), p._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = !0), a.write(c), p._isInFirstContentOfListItem && (a._gfmTasklistFirstContentOfListItem = void 0)), d = p, p = p.next;
  }
  for (p = n; ++f < s.length; )
    // Find a void token that includes a break.
    s[f][0] === "exit" && s[f - 1][0] === "enter" && s[f][1].type === s[f - 1][1].type && s[f][1].start.line !== s[f][1].end.line && (m = f + 1, v.push(m), p._tokenizer = void 0, p.previous = void 0, p = p.next);
  for (a.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : v.pop(), f = v.length; f--; ) {
    const I = s.slice(v[f], v[f + 1]), E = o.pop();
    u.push([E, E + I.length - 1]), e.splice(E, 2, I);
  }
  for (u.reverse(), f = -1; ++f < u.length; )
    l[y + u[f][0]] = y + u[f][1], y += u[f][1] - u[f][0] - 1;
  return l;
}
const tp = {
  resolve: rp,
  tokenize: ip
}, np = {
  partial: !0,
  tokenize: op
};
function rp(e) {
  return _s(e), e;
}
function ip(e, t) {
  let n;
  return r;
  function r(s) {
    return e.enter("content"), n = e.enter("chunkContent", {
      contentType: "content"
    }), i(s);
  }
  function i(s) {
    return s === null ? o(s) : $(s) ? e.check(np, a, o)(s) : (e.consume(s), i);
  }
  function o(s) {
    return e.exit("chunkContent"), e.exit("content"), t(s);
  }
  function a(s) {
    return e.consume(s), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function op(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), xe(e, o, "linePrefix");
  }
  function o(a) {
    if (a === null || $(a))
      return n(a);
    const s = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && s && s[1].type === "linePrefix" && s[2].sliceSerialize(s[1], !0).length >= 4 ? t(a) : e.interrupt(r.parser.constructs.flow, n, t)(a);
  }
}
function Us(e, t, n, r, i, o, a, s, u) {
  const l = u || Number.POSITIVE_INFINITY;
  let c = 0;
  return d;
  function d(I) {
    return I === 60 ? (e.enter(r), e.enter(i), e.enter(o), e.consume(I), e.exit(o), f) : I === null || I === 32 || I === 41 || ki(I) ? n(I) : (e.enter(r), e.enter(a), e.enter(s), e.enter("chunkString", {
      contentType: "string"
    }), m(I));
  }
  function f(I) {
    return I === 62 ? (e.enter(o), e.consume(I), e.exit(o), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", {
      contentType: "string"
    }), p(I));
  }
  function p(I) {
    return I === 62 ? (e.exit("chunkString"), e.exit(s), f(I)) : I === null || I === 60 || $(I) ? n(I) : (e.consume(I), I === 92 ? y : p);
  }
  function y(I) {
    return I === 60 || I === 62 || I === 92 ? (e.consume(I), p) : p(I);
  }
  function m(I) {
    return !c && (I === null || I === 41 || Qe(I)) ? (e.exit("chunkString"), e.exit(s), e.exit(a), e.exit(r), t(I)) : c < l && I === 40 ? (e.consume(I), c++, m) : I === 41 ? (e.consume(I), c--, m) : I === null || I === 32 || I === 40 || ki(I) ? n(I) : (e.consume(I), I === 92 ? v : m);
  }
  function v(I) {
    return I === 40 || I === 41 || I === 92 ? (e.consume(I), m) : m(I);
  }
}
function Qs(e, t, n, r, i, o) {
  const a = this;
  let s = 0, u;
  return l;
  function l(p) {
    return e.enter(r), e.enter(i), e.consume(p), e.exit(i), e.enter(o), c;
  }
  function c(p) {
    return s > 999 || p === null || p === 91 || p === 93 && !u || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    p === 94 && !s && "_hiddenFootnoteSupport" in a.parser.constructs ? n(p) : p === 93 ? (e.exit(o), e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : $(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), c) : (e.enter("chunkString", {
      contentType: "string"
    }), d(p));
  }
  function d(p) {
    return p === null || p === 91 || p === 93 || $(p) || s++ > 999 ? (e.exit("chunkString"), c(p)) : (e.consume(p), u || (u = !me(p)), p === 92 ? f : d);
  }
  function f(p) {
    return p === 91 || p === 92 || p === 93 ? (e.consume(p), s++, d) : d(p);
  }
}
function qs(e, t, n, r, i, o) {
  let a;
  return s;
  function s(f) {
    return f === 34 || f === 39 || f === 40 ? (e.enter(r), e.enter(i), e.consume(f), e.exit(i), a = f === 40 ? 41 : f, u) : n(f);
  }
  function u(f) {
    return f === a ? (e.enter(i), e.consume(f), e.exit(i), e.exit(r), t) : (e.enter(o), l(f));
  }
  function l(f) {
    return f === a ? (e.exit(o), u(a)) : f === null ? n(f) : $(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), xe(e, l, "linePrefix")) : (e.enter("chunkString", {
      contentType: "string"
    }), c(f));
  }
  function c(f) {
    return f === a || f === null || $(f) ? (e.exit("chunkString"), l(f)) : (e.consume(f), f === 92 ? d : c);
  }
  function d(f) {
    return f === a || f === 92 ? (e.consume(f), c) : c(f);
  }
}
function tr(e, t) {
  let n;
  return r;
  function r(i) {
    return $(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : me(i) ? xe(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
  }
}
const ap = {
  name: "definition",
  tokenize: up
}, sp = {
  partial: !0,
  tokenize: lp
};
function up(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(p) {
    return e.enter("definition"), a(p);
  }
  function a(p) {
    return Qs.call(
      r,
      e,
      s,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(p);
  }
  function s(p) {
    return i = An(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), u) : n(p);
  }
  function u(p) {
    return Qe(p) ? tr(e, l)(p) : l(p);
  }
  function l(p) {
    return Us(
      e,
      c,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(p);
  }
  function c(p) {
    return e.attempt(sp, d, d)(p);
  }
  function d(p) {
    return me(p) ? xe(e, f, "whitespace")(p) : f(p);
  }
  function f(p) {
    return p === null || $(p) ? (e.exit("definition"), r.parser.defined.push(i), t(p)) : n(p);
  }
}
function lp(e, t, n) {
  return r;
  function r(s) {
    return Qe(s) ? tr(e, i)(s) : n(s);
  }
  function i(s) {
    return qs(e, o, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(s);
  }
  function o(s) {
    return me(s) ? xe(e, a, "whitespace")(s) : a(s);
  }
  function a(s) {
    return s === null || $(s) ? t(s) : n(s);
  }
}
const cp = {
  name: "hardBreakEscape",
  tokenize: dp
};
function dp(e, t, n) {
  return r;
  function r(o) {
    return e.enter("hardBreakEscape"), e.consume(o), i;
  }
  function i(o) {
    return $(o) ? (e.exit("hardBreakEscape"), t(o)) : n(o);
  }
}
const pp = {
  name: "headingAtx",
  resolve: fp,
  tokenize: hp
};
function fp(e, t) {
  let n = e.length - 2, r = 3, i, o;
  return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: e[r][1].start,
    end: e[n][1].end
  }, o = {
    type: "chunkText",
    start: e[r][1].start,
    end: e[n][1].end,
    contentType: "text"
  }, wt(e, r, n - r + 1, [["enter", i, t], ["enter", o, t], ["exit", o, t], ["exit", i, t]])), e;
}
function hp(e, t, n) {
  let r = 0;
  return i;
  function i(c) {
    return e.enter("atxHeading"), o(c);
  }
  function o(c) {
    return e.enter("atxHeadingSequence"), a(c);
  }
  function a(c) {
    return c === 35 && r++ < 6 ? (e.consume(c), a) : c === null || Qe(c) ? (e.exit("atxHeadingSequence"), s(c)) : n(c);
  }
  function s(c) {
    return c === 35 ? (e.enter("atxHeadingSequence"), u(c)) : c === null || $(c) ? (e.exit("atxHeading"), t(c)) : me(c) ? xe(e, s, "whitespace")(c) : (e.enter("atxHeadingText"), l(c));
  }
  function u(c) {
    return c === 35 ? (e.consume(c), u) : (e.exit("atxHeadingSequence"), s(c));
  }
  function l(c) {
    return c === null || c === 35 || Qe(c) ? (e.exit("atxHeadingText"), s(c)) : (e.consume(c), l);
  }
}
const gp = [
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
], pa = ["pre", "script", "style", "textarea"], mp = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: Ip,
  tokenize: vp
}, bp = {
  partial: !0,
  tokenize: xp
}, yp = {
  partial: !0,
  tokenize: Cp
};
function Ip(e) {
  let t = e.length;
  for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); )
    ;
  return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function vp(e, t, n) {
  const r = this;
  let i, o, a, s, u;
  return l;
  function l(g) {
    return c(g);
  }
  function c(g) {
    return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(g), d;
  }
  function d(g) {
    return g === 33 ? (e.consume(g), f) : g === 47 ? (e.consume(g), o = !0, m) : g === 63 ? (e.consume(g), i = 3, r.interrupt ? t : b) : St(g) ? (e.consume(g), a = String.fromCharCode(g), v) : n(g);
  }
  function f(g) {
    return g === 45 ? (e.consume(g), i = 2, p) : g === 91 ? (e.consume(g), i = 5, s = 0, y) : St(g) ? (e.consume(g), i = 4, r.interrupt ? t : b) : n(g);
  }
  function p(g) {
    return g === 45 ? (e.consume(g), r.interrupt ? t : b) : n(g);
  }
  function y(g) {
    const he = "CDATA[";
    return g === he.charCodeAt(s++) ? (e.consume(g), s === he.length ? r.interrupt ? t : R : y) : n(g);
  }
  function m(g) {
    return St(g) ? (e.consume(g), a = String.fromCharCode(g), v) : n(g);
  }
  function v(g) {
    if (g === null || g === 47 || g === 62 || Qe(g)) {
      const he = g === 47, K = a.toLowerCase();
      return !he && !o && pa.includes(K) ? (i = 1, r.interrupt ? t(g) : R(g)) : gp.includes(a.toLowerCase()) ? (i = 6, he ? (e.consume(g), I) : r.interrupt ? t(g) : R(g)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(g) : o ? E(g) : S(g));
    }
    return g === 45 || tt(g) ? (e.consume(g), a += String.fromCharCode(g), v) : n(g);
  }
  function I(g) {
    return g === 62 ? (e.consume(g), r.interrupt ? t : R) : n(g);
  }
  function E(g) {
    return me(g) ? (e.consume(g), E) : G(g);
  }
  function S(g) {
    return g === 47 ? (e.consume(g), G) : g === 58 || g === 95 || St(g) ? (e.consume(g), P) : me(g) ? (e.consume(g), S) : G(g);
  }
  function P(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || tt(g) ? (e.consume(g), P) : T(g);
  }
  function T(g) {
    return g === 61 ? (e.consume(g), A) : me(g) ? (e.consume(g), T) : S(g);
  }
  function A(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? n(g) : g === 34 || g === 39 ? (e.consume(g), u = g, D) : me(g) ? (e.consume(g), A) : w(g);
  }
  function D(g) {
    return g === u ? (e.consume(g), u = null, O) : g === null || $(g) ? n(g) : (e.consume(g), D);
  }
  function w(g) {
    return g === null || g === 34 || g === 39 || g === 47 || g === 60 || g === 61 || g === 62 || g === 96 || Qe(g) ? T(g) : (e.consume(g), w);
  }
  function O(g) {
    return g === 47 || g === 62 || me(g) ? S(g) : n(g);
  }
  function G(g) {
    return g === 62 ? (e.consume(g), B) : n(g);
  }
  function B(g) {
    return g === null || $(g) ? R(g) : me(g) ? (e.consume(g), B) : n(g);
  }
  function R(g) {
    return g === 45 && i === 2 ? (e.consume(g), Y) : g === 60 && i === 1 ? (e.consume(g), se) : g === 62 && i === 4 ? (e.consume(g), ue) : g === 63 && i === 3 ? (e.consume(g), b) : g === 93 && i === 5 ? (e.consume(g), ye) : $(g) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(bp, ie, j)(g)) : g === null || $(g) ? (e.exit("htmlFlowData"), j(g)) : (e.consume(g), R);
  }
  function j(g) {
    return e.check(yp, te, ie)(g);
  }
  function te(g) {
    return e.enter("lineEnding"), e.consume(g), e.exit("lineEnding"), L;
  }
  function L(g) {
    return g === null || $(g) ? j(g) : (e.enter("htmlFlowData"), R(g));
  }
  function Y(g) {
    return g === 45 ? (e.consume(g), b) : R(g);
  }
  function se(g) {
    return g === 47 ? (e.consume(g), a = "", de) : R(g);
  }
  function de(g) {
    if (g === 62) {
      const he = a.toLowerCase();
      return pa.includes(he) ? (e.consume(g), ue) : R(g);
    }
    return St(g) && a.length < 8 ? (e.consume(g), a += String.fromCharCode(g), de) : R(g);
  }
  function ye(g) {
    return g === 93 ? (e.consume(g), b) : R(g);
  }
  function b(g) {
    return g === 62 ? (e.consume(g), ue) : g === 45 && i === 2 ? (e.consume(g), b) : R(g);
  }
  function ue(g) {
    return g === null || $(g) ? (e.exit("htmlFlowData"), ie(g)) : (e.consume(g), ue);
  }
  function ie(g) {
    return e.exit("htmlFlow"), t(g);
  }
}
function Cp(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return $(a) ? (e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), o) : n(a);
  }
  function o(a) {
    return r.parser.lazy[r.now().line] ? n(a) : t(a);
  }
}
function xp(e, t, n) {
  return r;
  function r(i) {
    return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(_r, t, n);
  }
}
const Ap = {
  name: "htmlText",
  tokenize: Sp
};
function Sp(e, t, n) {
  const r = this;
  let i, o, a;
  return s;
  function s(b) {
    return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(b), u;
  }
  function u(b) {
    return b === 33 ? (e.consume(b), l) : b === 47 ? (e.consume(b), T) : b === 63 ? (e.consume(b), S) : St(b) ? (e.consume(b), w) : n(b);
  }
  function l(b) {
    return b === 45 ? (e.consume(b), c) : b === 91 ? (e.consume(b), o = 0, y) : St(b) ? (e.consume(b), E) : n(b);
  }
  function c(b) {
    return b === 45 ? (e.consume(b), p) : n(b);
  }
  function d(b) {
    return b === null ? n(b) : b === 45 ? (e.consume(b), f) : $(b) ? (a = d, se(b)) : (e.consume(b), d);
  }
  function f(b) {
    return b === 45 ? (e.consume(b), p) : d(b);
  }
  function p(b) {
    return b === 62 ? Y(b) : b === 45 ? f(b) : d(b);
  }
  function y(b) {
    const ue = "CDATA[";
    return b === ue.charCodeAt(o++) ? (e.consume(b), o === ue.length ? m : y) : n(b);
  }
  function m(b) {
    return b === null ? n(b) : b === 93 ? (e.consume(b), v) : $(b) ? (a = m, se(b)) : (e.consume(b), m);
  }
  function v(b) {
    return b === 93 ? (e.consume(b), I) : m(b);
  }
  function I(b) {
    return b === 62 ? Y(b) : b === 93 ? (e.consume(b), I) : m(b);
  }
  function E(b) {
    return b === null || b === 62 ? Y(b) : $(b) ? (a = E, se(b)) : (e.consume(b), E);
  }
  function S(b) {
    return b === null ? n(b) : b === 63 ? (e.consume(b), P) : $(b) ? (a = S, se(b)) : (e.consume(b), S);
  }
  function P(b) {
    return b === 62 ? Y(b) : S(b);
  }
  function T(b) {
    return St(b) ? (e.consume(b), A) : n(b);
  }
  function A(b) {
    return b === 45 || tt(b) ? (e.consume(b), A) : D(b);
  }
  function D(b) {
    return $(b) ? (a = D, se(b)) : me(b) ? (e.consume(b), D) : Y(b);
  }
  function w(b) {
    return b === 45 || tt(b) ? (e.consume(b), w) : b === 47 || b === 62 || Qe(b) ? O(b) : n(b);
  }
  function O(b) {
    return b === 47 ? (e.consume(b), Y) : b === 58 || b === 95 || St(b) ? (e.consume(b), G) : $(b) ? (a = O, se(b)) : me(b) ? (e.consume(b), O) : Y(b);
  }
  function G(b) {
    return b === 45 || b === 46 || b === 58 || b === 95 || tt(b) ? (e.consume(b), G) : B(b);
  }
  function B(b) {
    return b === 61 ? (e.consume(b), R) : $(b) ? (a = B, se(b)) : me(b) ? (e.consume(b), B) : O(b);
  }
  function R(b) {
    return b === null || b === 60 || b === 61 || b === 62 || b === 96 ? n(b) : b === 34 || b === 39 ? (e.consume(b), i = b, j) : $(b) ? (a = R, se(b)) : me(b) ? (e.consume(b), R) : (e.consume(b), te);
  }
  function j(b) {
    return b === i ? (e.consume(b), i = void 0, L) : b === null ? n(b) : $(b) ? (a = j, se(b)) : (e.consume(b), j);
  }
  function te(b) {
    return b === null || b === 34 || b === 39 || b === 60 || b === 61 || b === 96 ? n(b) : b === 47 || b === 62 || Qe(b) ? O(b) : (e.consume(b), te);
  }
  function L(b) {
    return b === 47 || b === 62 || Qe(b) ? O(b) : n(b);
  }
  function Y(b) {
    return b === 62 ? (e.consume(b), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(b);
  }
  function se(b) {
    return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(b), e.exit("lineEnding"), de;
  }
  function de(b) {
    return me(b) ? xe(e, ye, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(b) : ye(b);
  }
  function ye(b) {
    return e.enter("htmlTextData"), a(b);
  }
}
const mo = {
  name: "labelEnd",
  resolveAll: Pp,
  resolveTo: Gp,
  tokenize: kp
}, wp = {
  tokenize: Rp
}, Ep = {
  tokenize: Bp
}, Fp = {
  tokenize: Op
};
function Pp(e) {
  let t = -1;
  const n = [];
  for (; ++t < e.length; ) {
    const r = e[t][1];
    if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", t += i;
    }
  }
  return e.length !== n.length && wt(e, 0, e.length, n), e;
}
function Gp(e, t) {
  let n = e.length, r = 0, i, o, a, s;
  for (; n--; )
    if (i = e[n][1], o) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (a) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (o = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (a = n);
  const u = {
    type: e[o][1].type === "labelLink" ? "link" : "image",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  }, l = {
    type: "label",
    start: {
      ...e[o][1].start
    },
    end: {
      ...e[a][1].end
    }
  }, c = {
    type: "labelText",
    start: {
      ...e[o + r + 2][1].end
    },
    end: {
      ...e[a - 2][1].start
    }
  };
  return s = [["enter", u, t], ["enter", l, t]], s = ut(s, e.slice(o + 1, o + r + 3)), s = ut(s, [["enter", c, t]]), s = ut(s, go(t.parser.constructs.insideSpan.null, e.slice(o + r + 4, a - 3), t)), s = ut(s, [["exit", c, t], e[a - 2], e[a - 1], ["exit", l, t]]), s = ut(s, e.slice(a + 1)), s = ut(s, [["exit", u, t]]), wt(e, o, e.length, s), e;
}
function kp(e, t, n) {
  const r = this;
  let i = r.events.length, o, a;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      o = r.events[i][1];
      break;
    }
  return s;
  function s(f) {
    return o ? o._inactive ? d(f) : (a = r.parser.defined.includes(An(r.sliceSerialize({
      start: o.end,
      end: r.now()
    }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(f), e.exit("labelMarker"), e.exit("labelEnd"), u) : n(f);
  }
  function u(f) {
    return f === 40 ? e.attempt(wp, c, a ? c : d)(f) : f === 91 ? e.attempt(Ep, c, a ? l : d)(f) : a ? c(f) : d(f);
  }
  function l(f) {
    return e.attempt(Fp, c, d)(f);
  }
  function c(f) {
    return t(f);
  }
  function d(f) {
    return o._balanced = !0, n(f);
  }
}
function Rp(e, t, n) {
  return r;
  function r(d) {
    return e.enter("resource"), e.enter("resourceMarker"), e.consume(d), e.exit("resourceMarker"), i;
  }
  function i(d) {
    return Qe(d) ? tr(e, o)(d) : o(d);
  }
  function o(d) {
    return d === 41 ? c(d) : Us(e, a, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(d);
  }
  function a(d) {
    return Qe(d) ? tr(e, u)(d) : c(d);
  }
  function s(d) {
    return n(d);
  }
  function u(d) {
    return d === 34 || d === 39 || d === 40 ? qs(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(d) : c(d);
  }
  function l(d) {
    return Qe(d) ? tr(e, c)(d) : c(d);
  }
  function c(d) {
    return d === 41 ? (e.enter("resourceMarker"), e.consume(d), e.exit("resourceMarker"), e.exit("resource"), t) : n(d);
  }
}
function Bp(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return Qs.call(r, e, o, a, "reference", "referenceMarker", "referenceString")(s);
  }
  function o(s) {
    return r.parser.defined.includes(An(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(s) : n(s);
  }
  function a(s) {
    return n(s);
  }
}
function Op(e, t, n) {
  return r;
  function r(o) {
    return e.enter("reference"), e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), i;
  }
  function i(o) {
    return o === 93 ? (e.enter("referenceMarker"), e.consume(o), e.exit("referenceMarker"), e.exit("reference"), t) : n(o);
  }
}
const Tp = {
  name: "labelStartImage",
  resolveAll: mo.resolveAll,
  tokenize: Vp
};
function Vp(e, t, n) {
  const r = this;
  return i;
  function i(s) {
    return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(s), e.exit("labelImageMarker"), o;
  }
  function o(s) {
    return s === 91 ? (e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelImage"), a) : n(s);
  }
  function a(s) {
    return s === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(s) : t(s);
  }
}
const Dp = {
  name: "labelStartLink",
  resolveAll: mo.resolveAll,
  tokenize: Np
};
function Np(e, t, n) {
  const r = this;
  return i;
  function i(a) {
    return e.enter("labelLink"), e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelLink"), o;
  }
  function o(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
  }
}
const ci = {
  name: "lineEnding",
  tokenize: Mp
};
function Mp(e, t) {
  return n;
  function n(r) {
    return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), xe(e, t, "linePrefix");
  }
}
const kr = {
  name: "thematicBreak",
  tokenize: Lp
};
function Lp(e, t, n) {
  let r = 0, i;
  return o;
  function o(l) {
    return e.enter("thematicBreak"), a(l);
  }
  function a(l) {
    return i = l, s(l);
  }
  function s(l) {
    return l === i ? (e.enter("thematicBreakSequence"), u(l)) : r >= 3 && (l === null || $(l)) ? (e.exit("thematicBreak"), t(l)) : n(l);
  }
  function u(l) {
    return l === i ? (e.consume(l), r++, u) : (e.exit("thematicBreakSequence"), me(l) ? xe(e, s, "whitespace")(l) : s(l));
  }
}
const _e = {
  continuation: {
    tokenize: Wp
  },
  exit: jp,
  name: "list",
  tokenize: zp
}, Xp = {
  partial: !0,
  tokenize: Jp
}, Hp = {
  partial: !0,
  tokenize: Zp
};
function zp(e, t, n) {
  const r = this, i = r.events[r.events.length - 1];
  let o = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, a = 0;
  return s;
  function s(p) {
    const y = r.containerState.type || (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
    if (y === "listUnordered" ? !r.containerState.marker || p === r.containerState.marker : Ri(p)) {
      if (r.containerState.type || (r.containerState.type = y, e.enter(y, {
        _container: !0
      })), y === "listUnordered")
        return e.enter("listItemPrefix"), p === 42 || p === 45 ? e.check(kr, n, l)(p) : l(p);
      if (!r.interrupt || p === 49)
        return e.enter("listItemPrefix"), e.enter("listItemValue"), u(p);
    }
    return n(p);
  }
  function u(p) {
    return Ri(p) && ++a < 10 ? (e.consume(p), u) : (!r.interrupt || a < 2) && (r.containerState.marker ? p === r.containerState.marker : p === 41 || p === 46) ? (e.exit("listItemValue"), l(p)) : n(p);
  }
  function l(p) {
    return e.enter("listItemMarker"), e.consume(p), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || p, e.check(
      _r,
      // Can’t be empty when interrupting.
      r.interrupt ? n : c,
      e.attempt(Xp, f, d)
    );
  }
  function c(p) {
    return r.containerState.initialBlankLine = !0, o++, f(p);
  }
  function d(p) {
    return me(p) ? (e.enter("listItemPrefixWhitespace"), e.consume(p), e.exit("listItemPrefixWhitespace"), f) : n(p);
  }
  function f(p) {
    return r.containerState.size = o + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(p);
  }
}
function Wp(e, t, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, e.check(_r, i, o);
  function i(s) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, xe(e, t, "listItemIndent", r.containerState.size + 1)(s);
  }
  function o(s) {
    return r.containerState.furtherBlankLines || !me(s) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, a(s)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Hp, t, a)(s));
  }
  function a(s) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, xe(e, e.attempt(_e, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(s);
  }
}
function Zp(e, t, n) {
  const r = this;
  return xe(e, i, "listItemIndent", r.containerState.size + 1);
  function i(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "listItemIndent" && a[2].sliceSerialize(a[1], !0).length === r.containerState.size ? t(o) : n(o);
  }
}
function jp(e) {
  e.exit(this.containerState.type);
}
function Jp(e, t, n) {
  const r = this;
  return xe(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(o) {
    const a = r.events[r.events.length - 1];
    return !me(o) && a && a[1].type === "listItemPrefixWhitespace" ? t(o) : n(o);
  }
}
const fa = {
  name: "setextUnderline",
  resolveTo: Yp,
  tokenize: _p
};
function Yp(e, t) {
  let n = e.length, r, i, o;
  for (; n--; )
    if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else
      e[n][1].type === "content" && e.splice(n, 1), !o && e[n][1].type === "definition" && (o = n);
  const a = {
    type: "setextHeading",
    start: {
      ...e[r][1].start
    },
    end: {
      ...e[e.length - 1][1].end
    }
  };
  return e[i][1].type = "setextHeadingText", o ? (e.splice(i, 0, ["enter", a, t]), e.splice(o + 1, 0, ["exit", e[r][1], t]), e[r][1].end = {
    ...e[o][1].end
  }) : e[r][1] = a, e.push(["exit", a, t]), e;
}
function _p(e, t, n) {
  const r = this;
  let i;
  return o;
  function o(l) {
    let c = r.events.length, d;
    for (; c--; )
      if (r.events[c][1].type !== "lineEnding" && r.events[c][1].type !== "linePrefix" && r.events[c][1].type !== "content") {
        d = r.events[c][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || d) ? (e.enter("setextHeadingLine"), i = l, a(l)) : n(l);
  }
  function a(l) {
    return e.enter("setextHeadingLineSequence"), s(l);
  }
  function s(l) {
    return l === i ? (e.consume(l), s) : (e.exit("setextHeadingLineSequence"), me(l) ? xe(e, u, "lineSuffix")(l) : u(l));
  }
  function u(l) {
    return l === null || $(l) ? (e.exit("setextHeadingLine"), t(l)) : n(l);
  }
}
const Up = {
  tokenize: Qp
};
function Qp(e) {
  const t = this, n = e.attempt(
    // Try to parse a blank line.
    _r,
    r,
    // Try to parse initial flow (essentially, only code).
    e.attempt(this.parser.constructs.flowInitial, i, xe(e, e.attempt(this.parser.constructs.flow, i, e.attempt(tp, i)), "linePrefix"))
  );
  return n;
  function r(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEndingBlank"), e.consume(o), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
  }
  function i(o) {
    if (o === null) {
      e.consume(o);
      return;
    }
    return e.enter("lineEnding"), e.consume(o), e.exit("lineEnding"), t.currentConstruct = void 0, n;
  }
}
const qp = {
  resolveAll: Ks()
}, $p = $s("string"), Kp = $s("text");
function $s(e) {
  return {
    resolveAll: Ks(e === "text" ? ef : void 0),
    tokenize: t
  };
  function t(n) {
    const r = this, i = this.parser.constructs[e], o = n.attempt(i, a, s);
    return a;
    function a(c) {
      return l(c) ? o(c) : s(c);
    }
    function s(c) {
      if (c === null) {
        n.consume(c);
        return;
      }
      return n.enter("data"), n.consume(c), u;
    }
    function u(c) {
      return l(c) ? (n.exit("data"), o(c)) : (n.consume(c), u);
    }
    function l(c) {
      if (c === null)
        return !0;
      const d = i[c];
      let f = -1;
      if (d)
        for (; ++f < d.length; ) {
          const p = d[f];
          if (!p.previous || p.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function Ks(e) {
  return t;
  function t(n, r) {
    let i = -1, o;
    for (; ++i <= n.length; )
      o === void 0 ? n[i] && n[i][1].type === "data" && (o = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== o + 2 && (n[o][1].end = n[i - 1][1].end, n.splice(o + 2, i - o - 2), i = o + 2), o = void 0);
    return e ? e(n, r) : n;
  }
}
function ef(e, t) {
  let n = 0;
  for (; ++n <= e.length; )
    if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let o = i.length, a = -1, s = 0, u;
      for (; o--; ) {
        const l = i[o];
        if (typeof l == "string") {
          for (a = l.length; l.charCodeAt(a - 1) === 32; )
            s++, a--;
          if (a) break;
          a = -1;
        } else if (l === -2)
          u = !0, s++;
        else if (l !== -1) {
          o++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
        const l = {
          type: n === e.length || u || s < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: o ? a : r.start._bufferIndex + a,
            _index: r.start._index + o,
            line: r.end.line,
            column: r.end.column - s,
            offset: r.end.offset - s
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...l.start
        }, r.start.offset === r.end.offset ? Object.assign(r, l) : (e.splice(n, 0, ["enter", l, t], ["exit", l, t]), n += 2);
      }
      n++;
    }
  return e;
}
const tf = {
  42: _e,
  43: _e,
  45: _e,
  48: _e,
  49: _e,
  50: _e,
  51: _e,
  52: _e,
  53: _e,
  54: _e,
  55: _e,
  56: _e,
  57: _e,
  62: js
}, nf = {
  91: ap
}, rf = {
  [-2]: li,
  [-1]: li,
  32: li
}, of = {
  35: pp,
  42: kr,
  45: [fa, kr],
  60: mp,
  61: fa,
  95: kr,
  96: da,
  126: da
}, af = {
  38: Ys,
  92: Js
}, sf = {
  [-5]: ci,
  [-4]: ci,
  [-3]: ci,
  33: Tp,
  38: Ys,
  42: Bi,
  60: [Dd, Ap],
  91: Dp,
  92: [cp, Js],
  93: mo,
  95: Bi,
  96: Ud
}, uf = {
  null: [Bi, qp]
}, lf = {
  null: [42, 95]
}, cf = {
  null: []
}, df = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: lf,
  contentInitial: nf,
  disable: cf,
  document: tf,
  flow: of,
  flowInitial: rf,
  insideSpan: uf,
  string: af,
  text: sf
}, Symbol.toStringTag, { value: "Module" }));
function pf(e, t, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, o = [];
  let a = [], s = [];
  const u = {
    attempt: D(T),
    check: D(A),
    consume: E,
    enter: S,
    exit: P,
    interrupt: D(A, {
      interrupt: !0
    })
  }, l = {
    code: null,
    containerState: {},
    defineSkip: m,
    events: [],
    now: y,
    parser: e,
    previous: null,
    sliceSerialize: f,
    sliceStream: p,
    write: d
  };
  let c = t.tokenize.call(l, u);
  return t.resolveAll && o.push(t), l;
  function d(B) {
    return a = ut(a, B), v(), a[a.length - 1] !== null ? [] : (w(t, 0), l.events = go(o, l.events, l), l.events);
  }
  function f(B, R) {
    return hf(p(B), R);
  }
  function p(B) {
    return ff(a, B);
  }
  function y() {
    const {
      _bufferIndex: B,
      _index: R,
      line: j,
      column: te,
      offset: L
    } = r;
    return {
      _bufferIndex: B,
      _index: R,
      line: j,
      column: te,
      offset: L
    };
  }
  function m(B) {
    i[B.line] = B.column, G();
  }
  function v() {
    let B;
    for (; r._index < a.length; ) {
      const R = a[r._index];
      if (typeof R == "string")
        for (B = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === B && r._bufferIndex < R.length; )
          I(R.charCodeAt(r._bufferIndex));
      else
        I(R);
    }
  }
  function I(B) {
    c = c(B);
  }
  function E(B) {
    $(B) ? (r.line++, r.column = 1, r.offset += B === -3 ? 2 : 1, G()) : B !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    a[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = B;
  }
  function S(B, R) {
    const j = R || {};
    return j.type = B, j.start = y(), l.events.push(["enter", j, l]), s.push(j), j;
  }
  function P(B) {
    const R = s.pop();
    return R.end = y(), l.events.push(["exit", R, l]), R;
  }
  function T(B, R) {
    w(B, R.from);
  }
  function A(B, R) {
    R.restore();
  }
  function D(B, R) {
    return j;
    function j(te, L, Y) {
      let se, de, ye, b;
      return Array.isArray(te) ? (
        /* c8 ignore next 1 */
        ie(te)
      ) : "tokenize" in te ? (
        // Looks like a construct.
        ie([
          /** @type {Construct} */
          te
        ])
      ) : ue(te);
      function ue(pe) {
        return Oe;
        function Oe(fe) {
          const Ne = fe !== null && pe[fe], Je = fe !== null && pe.null, nt = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Ne) ? Ne : Ne ? [Ne] : [],
            ...Array.isArray(Je) ? Je : Je ? [Je] : []
          ];
          return ie(nt)(fe);
        }
      }
      function ie(pe) {
        return se = pe, de = 0, pe.length === 0 ? Y : g(pe[de]);
      }
      function g(pe) {
        return Oe;
        function Oe(fe) {
          return b = O(), ye = pe, pe.partial || (l.currentConstruct = pe), pe.name && l.parser.constructs.disable.null.includes(pe.name) ? K() : pe.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            R ? Object.assign(Object.create(l), R) : l,
            u,
            he,
            K
          )(fe);
        }
      }
      function he(pe) {
        return B(ye, b), L;
      }
      function K(pe) {
        return b.restore(), ++de < se.length ? g(se[de]) : Y;
      }
    }
  }
  function w(B, R) {
    B.resolveAll && !o.includes(B) && o.push(B), B.resolve && wt(l.events, R, l.events.length - R, B.resolve(l.events.slice(R), l)), B.resolveTo && (l.events = B.resolveTo(l.events, l));
  }
  function O() {
    const B = y(), R = l.previous, j = l.currentConstruct, te = l.events.length, L = Array.from(s);
    return {
      from: te,
      restore: Y
    };
    function Y() {
      r = B, l.previous = R, l.currentConstruct = j, l.events.length = te, s = L, G();
    }
  }
  function G() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function ff(e, t) {
  const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, o = t.end._bufferIndex;
  let a;
  if (n === i)
    a = [e[n].slice(r, o)];
  else {
    if (a = e.slice(n, i), r > -1) {
      const s = a[0];
      typeof s == "string" ? a[0] = s.slice(r) : a.shift();
    }
    o > 0 && a.push(e[i].slice(0, o));
  }
  return a;
}
function hf(e, t) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < e.length; ) {
    const o = e[n];
    let a;
    if (typeof o == "string")
      a = o;
    else switch (o) {
      case -5: {
        a = "\r";
        break;
      }
      case -4: {
        a = `
`;
        break;
      }
      case -3: {
        a = `\r
`;
        break;
      }
      case -2: {
        a = t ? " " : "	";
        break;
      }
      case -1: {
        if (!t && i) continue;
        a = " ";
        break;
      }
      default:
        a = String.fromCharCode(o);
    }
    i = o === -2, r.push(a);
  }
  return r.join("");
}
function gf(e) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      Cd([df, ...(e || {}).extensions || []])
    ),
    content: i(Gd),
    defined: [],
    document: i(Rd),
    flow: i(Up),
    lazy: {},
    string: i($p),
    text: i(Kp)
  };
  return r;
  function i(o) {
    return a;
    function a(s) {
      return pf(r, o, s);
    }
  }
}
function mf(e) {
  for (; !_s(e); )
    ;
  return e;
}
const ha = /[\0\t\n\r]/g;
function bf() {
  let e = 1, t = "", n = !0, r;
  return i;
  function i(o, a, s) {
    const u = [];
    let l, c, d, f, p;
    for (o = t + (typeof o == "string" ? o.toString() : new TextDecoder(a || void 0).decode(o)), d = 0, t = "", n && (o.charCodeAt(0) === 65279 && d++, n = void 0); d < o.length; ) {
      if (ha.lastIndex = d, l = ha.exec(o), f = l && l.index !== void 0 ? l.index : o.length, p = o.charCodeAt(f), !l) {
        t = o.slice(d);
        break;
      }
      if (p === 10 && d === f && r)
        u.push(-3), r = void 0;
      else
        switch (r && (u.push(-5), r = void 0), d < f && (u.push(o.slice(d, f)), e += f - d), p) {
          case 0: {
            u.push(65533), e++;
            break;
          }
          case 9: {
            for (c = Math.ceil(e / 4) * 4, u.push(-2); e++ < c; ) u.push(-1);
            break;
          }
          case 10: {
            u.push(-4), e = 1;
            break;
          }
          default:
            r = !0, e = 1;
        }
      d = f + 1;
    }
    return s && (r && u.push(-5), t && u.push(t), u.push(null)), u;
  }
}
const yf = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function If(e) {
  return e.replace(yf, vf);
}
function vf(e, t, n) {
  if (t)
    return t;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), o = i === 120 || i === 88;
    return Zs(n.slice(o ? 2 : 1), o ? 16 : 10);
  }
  return ho(n) || e;
}
const eu = {}.hasOwnProperty;
function Cf(e, t, n) {
  return typeof t != "string" && (n = t, t = void 0), xf(n)(mf(gf(n).document().write(bf()(e, t, !0))));
}
function xf(e) {
  const t = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: o(Me),
      autolinkProtocol: O,
      autolinkEmail: O,
      atxHeading: o(z),
      blockQuote: o(Je),
      characterEscape: O,
      characterReference: O,
      codeFenced: o(nt),
      codeFencedFenceInfo: a,
      codeFencedFenceMeta: a,
      codeIndented: o(nt, a),
      codeText: o(rt, a),
      codeTextData: O,
      data: O,
      codeFlowValue: O,
      definition: o(Vt),
      definitionDestinationString: a,
      definitionLabelString: a,
      definitionTitleString: a,
      emphasis: o(M),
      hardBreakEscape: o(U),
      hardBreakTrailing: o(U),
      htmlFlow: o(ge, a),
      htmlFlowData: O,
      htmlText: o(ge, a),
      htmlTextData: O,
      image: o(Be),
      label: a,
      link: o(Me),
      listItem: o(Wn),
      listItemValue: f,
      listOrdered: o(yn, d),
      listUnordered: o(yn),
      paragraph: o(Ee),
      reference: g,
      referenceString: a,
      resourceDestinationString: a,
      resourceTitleString: a,
      setextHeading: o(z),
      strong: o(ve),
      thematicBreak: o(we)
    },
    exit: {
      atxHeading: u(),
      atxHeadingSequence: T,
      autolink: u(),
      autolinkEmail: Ne,
      autolinkProtocol: fe,
      blockQuote: u(),
      characterEscapeValue: G,
      characterReferenceMarkerHexadecimal: K,
      characterReferenceMarkerNumeric: K,
      characterReferenceValue: pe,
      characterReference: Oe,
      codeFenced: u(v),
      codeFencedFence: m,
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: y,
      codeFlowValue: G,
      codeIndented: u(I),
      codeText: u(L),
      codeTextData: G,
      data: G,
      definition: u(),
      definitionDestinationString: P,
      definitionLabelString: E,
      definitionTitleString: S,
      emphasis: u(),
      hardBreakEscape: u(R),
      hardBreakTrailing: u(R),
      htmlFlow: u(j),
      htmlFlowData: G,
      htmlText: u(te),
      htmlTextData: G,
      image: u(se),
      label: ye,
      labelText: de,
      lineEnding: B,
      link: u(Y),
      listItem: u(),
      listOrdered: u(),
      listUnordered: u(),
      paragraph: u(),
      referenceString: he,
      resourceDestinationString: b,
      resourceTitleString: ue,
      resource: ie,
      setextHeading: u(w),
      setextHeadingLineSequence: D,
      setextHeadingText: A,
      strong: u(),
      thematicBreak: u()
    }
  };
  tu(t, (e || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(F) {
    let N = {
      type: "root",
      children: []
    };
    const q = {
      stack: [N],
      tokenStack: [],
      config: t,
      enter: s,
      exit: l,
      buffer: a,
      resume: c,
      data: n
    }, oe = [];
    let ae = -1;
    for (; ++ae < F.length; )
      if (F[ae][1].type === "listOrdered" || F[ae][1].type === "listUnordered")
        if (F[ae][0] === "enter")
          oe.push(ae);
        else {
          const Ye = oe.pop();
          ae = i(F, Ye, ae);
        }
    for (ae = -1; ++ae < F.length; ) {
      const Ye = t[F[ae][0]];
      eu.call(Ye, F[ae][1].type) && Ye[F[ae][1].type].call(Object.assign({
        sliceSerialize: F[ae][2].sliceSerialize
      }, q), F[ae][1]);
    }
    if (q.tokenStack.length > 0) {
      const Ye = q.tokenStack[q.tokenStack.length - 1];
      (Ye[1] || ga).call(q, void 0, Ye[0]);
    }
    for (N.position = {
      start: Xt(F.length > 0 ? F[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Xt(F.length > 0 ? F[F.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, ae = -1; ++ae < t.transforms.length; )
      N = t.transforms[ae](N) || N;
    return N;
  }
  function i(F, N, q) {
    let oe = N - 1, ae = -1, Ye = !1, bt, dt, Dt, yt;
    for (; ++oe <= q; ) {
      const Le = F[oe];
      switch (Le[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Le[0] === "enter" ? ae++ : ae--, yt = void 0;
          break;
        }
        case "lineEndingBlank": {
          Le[0] === "enter" && (bt && !yt && !ae && !Dt && (Dt = oe), yt = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          yt = void 0;
      }
      if (!ae && Le[0] === "enter" && Le[1].type === "listItemPrefix" || ae === -1 && Le[0] === "exit" && (Le[1].type === "listUnordered" || Le[1].type === "listOrdered")) {
        if (bt) {
          let Ft = oe;
          for (dt = void 0; Ft--; ) {
            const pt = F[Ft];
            if (pt[1].type === "lineEnding" || pt[1].type === "lineEndingBlank") {
              if (pt[0] === "exit") continue;
              dt && (F[dt][1].type = "lineEndingBlank", Ye = !0), pt[1].type = "lineEnding", dt = Ft;
            } else if (!(pt[1].type === "linePrefix" || pt[1].type === "blockQuotePrefix" || pt[1].type === "blockQuotePrefixWhitespace" || pt[1].type === "blockQuoteMarker" || pt[1].type === "listItemIndent")) break;
          }
          Dt && (!dt || Dt < dt) && (bt._spread = !0), bt.end = Object.assign({}, dt ? F[dt][1].start : Le[1].end), F.splice(dt || oe, 0, ["exit", bt, Le[2]]), oe++, q++;
        }
        if (Le[1].type === "listItemPrefix") {
          const Ft = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Le[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          bt = Ft, F.splice(oe, 0, ["enter", Ft, Le[2]]), oe++, q++, Dt = void 0, yt = !0;
        }
      }
    }
    return F[N][1]._spread = Ye, q;
  }
  function o(F, N) {
    return q;
    function q(oe) {
      s.call(this, F(oe), oe), N && N.call(this, oe);
    }
  }
  function a() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function s(F, N, q) {
    this.stack[this.stack.length - 1].children.push(F), this.stack.push(F), this.tokenStack.push([N, q || void 0]), F.position = {
      start: Xt(N.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function u(F) {
    return N;
    function N(q) {
      F && F.call(this, q), l.call(this, q);
    }
  }
  function l(F, N) {
    const q = this.stack.pop(), oe = this.tokenStack.pop();
    if (oe)
      oe[0].type !== F.type && (N ? N.call(this, F, oe[0]) : (oe[1] || ga).call(this, F, oe[0]));
    else throw new Error("Cannot close `" + F.type + "` (" + er({
      start: F.start,
      end: F.end
    }) + "): it’s not open");
    q.position.end = Xt(F.end);
  }
  function c() {
    return Id(this.stack.pop());
  }
  function d() {
    this.data.expectingFirstListItemValue = !0;
  }
  function f(F) {
    if (this.data.expectingFirstListItemValue) {
      const N = this.stack[this.stack.length - 2];
      N.start = Number.parseInt(this.sliceSerialize(F), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function p() {
    const F = this.resume(), N = this.stack[this.stack.length - 1];
    N.lang = F;
  }
  function y() {
    const F = this.resume(), N = this.stack[this.stack.length - 1];
    N.meta = F;
  }
  function m() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function v() {
    const F = this.resume(), N = this.stack[this.stack.length - 1];
    N.value = F.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function I() {
    const F = this.resume(), N = this.stack[this.stack.length - 1];
    N.value = F.replace(/(\r?\n|\r)$/g, "");
  }
  function E(F) {
    const N = this.resume(), q = this.stack[this.stack.length - 1];
    q.label = N, q.identifier = An(this.sliceSerialize(F)).toLowerCase();
  }
  function S() {
    const F = this.resume(), N = this.stack[this.stack.length - 1];
    N.title = F;
  }
  function P() {
    const F = this.resume(), N = this.stack[this.stack.length - 1];
    N.url = F;
  }
  function T(F) {
    const N = this.stack[this.stack.length - 1];
    if (!N.depth) {
      const q = this.sliceSerialize(F).length;
      N.depth = q;
    }
  }
  function A() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function D(F) {
    const N = this.stack[this.stack.length - 1];
    N.depth = this.sliceSerialize(F).codePointAt(0) === 61 ? 1 : 2;
  }
  function w() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function O(F) {
    const q = this.stack[this.stack.length - 1].children;
    let oe = q[q.length - 1];
    (!oe || oe.type !== "text") && (oe = Se(), oe.position = {
      start: Xt(F.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, q.push(oe)), this.stack.push(oe);
  }
  function G(F) {
    const N = this.stack.pop();
    N.value += this.sliceSerialize(F), N.position.end = Xt(F.end);
  }
  function B(F) {
    const N = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const q = N.children[N.children.length - 1];
      q.position.end = Xt(F.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(N.type) && (O.call(this, F), G.call(this, F));
  }
  function R() {
    this.data.atHardBreak = !0;
  }
  function j() {
    const F = this.resume(), N = this.stack[this.stack.length - 1];
    N.value = F;
  }
  function te() {
    const F = this.resume(), N = this.stack[this.stack.length - 1];
    N.value = F;
  }
  function L() {
    const F = this.resume(), N = this.stack[this.stack.length - 1];
    N.value = F;
  }
  function Y() {
    const F = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const N = this.data.referenceType || "shortcut";
      F.type += "Reference", F.referenceType = N, delete F.url, delete F.title;
    } else
      delete F.identifier, delete F.label;
    this.data.referenceType = void 0;
  }
  function se() {
    const F = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const N = this.data.referenceType || "shortcut";
      F.type += "Reference", F.referenceType = N, delete F.url, delete F.title;
    } else
      delete F.identifier, delete F.label;
    this.data.referenceType = void 0;
  }
  function de(F) {
    const N = this.sliceSerialize(F), q = this.stack[this.stack.length - 2];
    q.label = If(N), q.identifier = An(N).toLowerCase();
  }
  function ye() {
    const F = this.stack[this.stack.length - 1], N = this.resume(), q = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, q.type === "link") {
      const oe = F.children;
      q.children = oe;
    } else
      q.alt = N;
  }
  function b() {
    const F = this.resume(), N = this.stack[this.stack.length - 1];
    N.url = F;
  }
  function ue() {
    const F = this.resume(), N = this.stack[this.stack.length - 1];
    N.title = F;
  }
  function ie() {
    this.data.inReference = void 0;
  }
  function g() {
    this.data.referenceType = "collapsed";
  }
  function he(F) {
    const N = this.resume(), q = this.stack[this.stack.length - 1];
    q.label = N, q.identifier = An(this.sliceSerialize(F)).toLowerCase(), this.data.referenceType = "full";
  }
  function K(F) {
    this.data.characterReferenceType = F.type;
  }
  function pe(F) {
    const N = this.sliceSerialize(F), q = this.data.characterReferenceType;
    let oe;
    q ? (oe = Zs(N, q === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : oe = ho(N);
    const ae = this.stack[this.stack.length - 1];
    ae.value += oe;
  }
  function Oe(F) {
    const N = this.stack.pop();
    N.position.end = Xt(F.end);
  }
  function fe(F) {
    G.call(this, F);
    const N = this.stack[this.stack.length - 1];
    N.url = this.sliceSerialize(F);
  }
  function Ne(F) {
    G.call(this, F);
    const N = this.stack[this.stack.length - 1];
    N.url = "mailto:" + this.sliceSerialize(F);
  }
  function Je() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function nt() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function rt() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function Vt() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function M() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function z() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function U() {
    return {
      type: "break"
    };
  }
  function ge() {
    return {
      type: "html",
      value: ""
    };
  }
  function Be() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function Me() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function yn(F) {
    return {
      type: "list",
      ordered: F.type === "listOrdered",
      start: null,
      spread: F._spread,
      children: []
    };
  }
  function Wn(F) {
    return {
      type: "listItem",
      spread: F._spread,
      checked: null,
      children: []
    };
  }
  function Ee() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function ve() {
    return {
      type: "strong",
      children: []
    };
  }
  function Se() {
    return {
      type: "text",
      value: ""
    };
  }
  function we() {
    return {
      type: "thematicBreak"
    };
  }
}
function Xt(e) {
  return {
    line: e.line,
    column: e.column,
    offset: e.offset
  };
}
function tu(e, t) {
  let n = -1;
  for (; ++n < t.length; ) {
    const r = t[n];
    Array.isArray(r) ? tu(e, r) : Af(e, r);
  }
}
function Af(e, t) {
  let n;
  for (n in t)
    if (eu.call(t, n))
      switch (n) {
        case "canContainEols": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "transforms": {
          const r = t[n];
          r && e[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = t[n];
          r && Object.assign(e[n], r);
          break;
        }
      }
}
function ga(e, t) {
  throw e ? new Error("Cannot close `" + e.type + "` (" + er({
    start: e.start,
    end: e.end
  }) + "): a different token (`" + t.type + "`, " + er({
    start: t.start,
    end: t.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + er({
    start: t.start,
    end: t.end
  }) + ") is still open");
}
function Sf(e) {
  const t = this;
  t.parser = n;
  function n(r) {
    return Cf(r, {
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
function wf(e, t) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: e.wrap(e.all(t), !0)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Ef(e, t) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return e.patch(t, n), [e.applyData(t, n), { type: "text", value: `
` }];
}
function Ff(e, t) {
  const n = t.value ? t.value + `
` : "", r = {};
  t.lang && (r.className = ["language-" + t.lang]);
  let i = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return t.meta && (i.data = { meta: t.meta }), e.patch(t, i), i = e.applyData(t, i), i = { type: "element", tagName: "pre", properties: {}, children: [i] }, e.patch(t, i), i;
}
function Pf(e, t) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Gf(e, t) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function kf(e, t) {
  const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = Hn(r.toLowerCase()), o = e.footnoteOrder.indexOf(r);
  let a, s = e.footnoteCounts.get(r);
  s === void 0 ? (s = 0, e.footnoteOrder.push(r), a = e.footnoteOrder.length) : a = o + 1, s += 1, e.footnoteCounts.set(r, s);
  const u = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (s > 1 ? "-" + s : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(a) }]
  };
  e.patch(t, u);
  const l = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [u]
  };
  return e.patch(t, l), e.applyData(t, l);
}
function Rf(e, t) {
  const n = {
    type: "element",
    tagName: "h" + t.depth,
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Bf(e, t) {
  if (e.options.allowDangerousHtml) {
    const n = { type: "raw", value: t.value };
    return e.patch(t, n), e.applyData(t, n);
  }
}
function nu(e, t) {
  const n = t.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference")
    return [{ type: "text", value: "![" + t.alt + r }];
  const i = e.all(t), o = i[0];
  o && o.type === "text" ? o.value = "[" + o.value : i.unshift({ type: "text", value: "[" });
  const a = i[i.length - 1];
  return a && a.type === "text" ? a.value += r : i.push({ type: "text", value: r }), i;
}
function Of(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return nu(e, t);
  const i = { src: Hn(r.url || ""), alt: t.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = { type: "element", tagName: "img", properties: i, children: [] };
  return e.patch(t, o), e.applyData(t, o);
}
function Tf(e, t) {
  const n = { src: Hn(t.url) };
  t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return e.patch(t, r), e.applyData(t, r);
}
function Vf(e, t) {
  const n = { type: "text", value: t.value.replace(/\r?\n|\r/g, " ") };
  e.patch(t, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Df(e, t) {
  const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
  if (!r)
    return nu(e, t);
  const i = { href: Hn(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: i,
    children: e.all(t)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Nf(e, t) {
  const n = { href: Hn(t.url) };
  t.title !== null && t.title !== void 0 && (n.title = t.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function Mf(e, t, n) {
  const r = e.all(t), i = n ? Lf(n) : ru(t), o = {}, a = [];
  if (typeof t.checked == "boolean") {
    const c = r[0];
    let d;
    c && c.type === "element" && c.tagName === "p" ? d = c : (d = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(d)), d.children.length > 0 && d.children.unshift({ type: "text", value: " " }), d.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: t.checked, disabled: !0 },
      children: []
    }), o.className = ["task-list-item"];
  }
  let s = -1;
  for (; ++s < r.length; ) {
    const c = r[s];
    (i || s !== 0 || c.type !== "element" || c.tagName !== "p") && a.push({ type: "text", value: `
` }), c.type === "element" && c.tagName === "p" && !i ? a.push(...c.children) : a.push(c);
  }
  const u = r[r.length - 1];
  u && (i || u.type !== "element" || u.tagName !== "p") && a.push({ type: "text", value: `
` });
  const l = { type: "element", tagName: "li", properties: o, children: a };
  return e.patch(t, l), e.applyData(t, l);
}
function Lf(e) {
  let t = !1;
  if (e.type === "list") {
    t = e.spread || !1;
    const n = e.children;
    let r = -1;
    for (; !t && ++r < n.length; )
      t = ru(n[r]);
  }
  return t;
}
function ru(e) {
  const t = e.spread;
  return t ?? e.children.length > 1;
}
function Xf(e, t) {
  const n = {}, r = e.all(t);
  let i = -1;
  for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
    const a = r[i];
    if (a.type === "element" && a.tagName === "li" && a.properties && Array.isArray(a.properties.className) && a.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const o = {
    type: "element",
    tagName: t.ordered ? "ol" : "ul",
    properties: n,
    children: e.wrap(r, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function Hf(e, t) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function zf(e, t) {
  const n = { type: "root", children: e.wrap(e.all(t)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Wf(e, t) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
function Zf(e, t) {
  const n = e.all(t), r = n.shift(), i = [];
  if (r) {
    const a = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: e.wrap([r], !0)
    };
    e.patch(t.children[0], a), i.push(a);
  }
  if (n.length > 0) {
    const a = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: e.wrap(n, !0)
    }, s = lo(t.children[1]), u = Ns(t.children[t.children.length - 1]);
    s && u && (a.position = { start: s, end: u }), i.push(a);
  }
  const o = {
    type: "element",
    tagName: "table",
    properties: {},
    children: e.wrap(i, !0)
  };
  return e.patch(t, o), e.applyData(t, o);
}
function jf(e, t, n) {
  const r = n ? n.children : void 0, o = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, s = a ? a.length : t.children.length;
  let u = -1;
  const l = [];
  for (; ++u < s; ) {
    const d = t.children[u], f = {}, p = a ? a[u] : void 0;
    p && (f.align = p);
    let y = { type: "element", tagName: o, properties: f, children: [] };
    d && (y.children = e.all(d), e.patch(d, y), y = e.applyData(d, y)), l.push(y);
  }
  const c = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: e.wrap(l, !0)
  };
  return e.patch(t, c), e.applyData(t, c);
}
function Jf(e, t) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, n), e.applyData(t, n);
}
const ma = 9, ba = 32;
function Yf(e) {
  const t = String(e), n = /\r?\n|\r/g;
  let r = n.exec(t), i = 0;
  const o = [];
  for (; r; )
    o.push(
      ya(t.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(t);
  return o.push(ya(t.slice(i), i > 0, !1)), o.join("");
}
function ya(e, t, n) {
  let r = 0, i = e.length;
  if (t) {
    let o = e.codePointAt(r);
    for (; o === ma || o === ba; )
      r++, o = e.codePointAt(r);
  }
  if (n) {
    let o = e.codePointAt(i - 1);
    for (; o === ma || o === ba; )
      i--, o = e.codePointAt(i - 1);
  }
  return i > r ? e.slice(r, i) : "";
}
function _f(e, t) {
  const n = { type: "text", value: Yf(String(t.value)) };
  return e.patch(t, n), e.applyData(t, n);
}
function Uf(e, t) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return e.patch(t, n), e.applyData(t, n);
}
const Qf = {
  blockquote: wf,
  break: Ef,
  code: Ff,
  delete: Pf,
  emphasis: Gf,
  footnoteReference: kf,
  heading: Rf,
  html: Bf,
  imageReference: Of,
  image: Tf,
  inlineCode: Vf,
  linkReference: Df,
  link: Nf,
  listItem: Mf,
  list: Xf,
  paragraph: Hf,
  // @ts-expect-error: root is different, but hard to type.
  root: zf,
  strong: Wf,
  table: Zf,
  tableCell: Jf,
  tableRow: jf,
  text: _f,
  thematicBreak: Uf,
  toml: Ar,
  yaml: Ar,
  definition: Ar,
  footnoteDefinition: Ar
};
function Ar() {
}
const iu = -1, Ur = 0, nr = 1, Tr = 2, bo = 3, yo = 4, Io = 5, vo = 6, ou = 7, au = 8, Ia = typeof self == "object" ? self : globalThis, qf = (e, t) => {
  const n = (i, o) => (e.set(o, i), i), r = (i) => {
    if (e.has(i))
      return e.get(i);
    const [o, a] = t[i];
    switch (o) {
      case Ur:
      case iu:
        return n(a, i);
      case nr: {
        const s = n([], i);
        for (const u of a)
          s.push(r(u));
        return s;
      }
      case Tr: {
        const s = n({}, i);
        for (const [u, l] of a)
          s[r(u)] = r(l);
        return s;
      }
      case bo:
        return n(new Date(a), i);
      case yo: {
        const { source: s, flags: u } = a;
        return n(new RegExp(s, u), i);
      }
      case Io: {
        const s = n(/* @__PURE__ */ new Map(), i);
        for (const [u, l] of a)
          s.set(r(u), r(l));
        return s;
      }
      case vo: {
        const s = n(/* @__PURE__ */ new Set(), i);
        for (const u of a)
          s.add(r(u));
        return s;
      }
      case ou: {
        const { name: s, message: u } = a;
        return n(new Ia[s](u), i);
      }
      case au:
        return n(BigInt(a), i);
      case "BigInt":
        return n(Object(BigInt(a)), i);
      case "ArrayBuffer":
        return n(new Uint8Array(a).buffer, a);
      case "DataView": {
        const { buffer: s } = new Uint8Array(a);
        return n(new DataView(s), a);
      }
    }
    return n(new Ia[o](a), i);
  };
  return r;
}, va = (e) => qf(/* @__PURE__ */ new Map(), e)(0), vn = "", { toString: $f } = {}, { keys: Kf } = Object, Un = (e) => {
  const t = typeof e;
  if (t !== "object" || !e)
    return [Ur, t];
  const n = $f.call(e).slice(8, -1);
  switch (n) {
    case "Array":
      return [nr, vn];
    case "Object":
      return [Tr, vn];
    case "Date":
      return [bo, vn];
    case "RegExp":
      return [yo, vn];
    case "Map":
      return [Io, vn];
    case "Set":
      return [vo, vn];
    case "DataView":
      return [nr, n];
  }
  return n.includes("Array") ? [nr, n] : n.includes("Error") ? [ou, n] : [Tr, n];
}, Sr = ([e, t]) => e === Ur && (t === "function" || t === "symbol"), eh = (e, t, n, r) => {
  const i = (a, s) => {
    const u = r.push(a) - 1;
    return n.set(s, u), u;
  }, o = (a) => {
    if (n.has(a))
      return n.get(a);
    let [s, u] = Un(a);
    switch (s) {
      case Ur: {
        let c = a;
        switch (u) {
          case "bigint":
            s = au, c = a.toString();
            break;
          case "function":
          case "symbol":
            if (e)
              throw new TypeError("unable to serialize " + u);
            c = null;
            break;
          case "undefined":
            return i([iu], a);
        }
        return i([s, c], a);
      }
      case nr: {
        if (u) {
          let f = a;
          return u === "DataView" ? f = new Uint8Array(a.buffer) : u === "ArrayBuffer" && (f = new Uint8Array(a)), i([u, [...f]], a);
        }
        const c = [], d = i([s, c], a);
        for (const f of a)
          c.push(o(f));
        return d;
      }
      case Tr: {
        if (u)
          switch (u) {
            case "BigInt":
              return i([u, a.toString()], a);
            case "Boolean":
            case "Number":
            case "String":
              return i([u, a.valueOf()], a);
          }
        if (t && "toJSON" in a)
          return o(a.toJSON());
        const c = [], d = i([s, c], a);
        for (const f of Kf(a))
          (e || !Sr(Un(a[f]))) && c.push([o(f), o(a[f])]);
        return d;
      }
      case bo:
        return i([s, a.toISOString()], a);
      case yo: {
        const { source: c, flags: d } = a;
        return i([s, { source: c, flags: d }], a);
      }
      case Io: {
        const c = [], d = i([s, c], a);
        for (const [f, p] of a)
          (e || !(Sr(Un(f)) || Sr(Un(p)))) && c.push([o(f), o(p)]);
        return d;
      }
      case vo: {
        const c = [], d = i([s, c], a);
        for (const f of a)
          (e || !Sr(Un(f))) && c.push(o(f));
        return d;
      }
    }
    const { message: l } = a;
    return i([s, { name: u, message: l }], a);
  };
  return o;
}, Ca = (e, { json: t, lossy: n } = {}) => {
  const r = [];
  return eh(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Vr = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (e, t) => t && ("json" in t || "lossy" in t) ? va(Ca(e, t)) : structuredClone(e)
) : (e, t) => va(Ca(e, t));
function th(e, t) {
  const n = [{ type: "text", value: "↩" }];
  return t > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(t) }]
  }), n;
}
function nh(e, t) {
  return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function rh(e) {
  const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || th, r = e.options.footnoteBackLabel || nh, i = e.options.footnoteLabel || "Footnotes", o = e.options.footnoteLabelTagName || "h2", a = e.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, s = [];
  let u = -1;
  for (; ++u < e.footnoteOrder.length; ) {
    const l = e.footnoteById.get(
      e.footnoteOrder[u]
    );
    if (!l)
      continue;
    const c = e.all(l), d = String(l.identifier).toUpperCase(), f = Hn(d.toLowerCase());
    let p = 0;
    const y = [], m = e.footnoteCounts.get(d);
    for (; m !== void 0 && ++p <= m; ) {
      y.length > 0 && y.push({ type: "text", value: " " });
      let E = typeof n == "string" ? n : n(u, p);
      typeof E == "string" && (E = { type: "text", value: E }), y.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + t + "fnref-" + f + (p > 1 ? "-" + p : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(u, p),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(E) ? E : [E]
      });
    }
    const v = c[c.length - 1];
    if (v && v.type === "element" && v.tagName === "p") {
      const E = v.children[v.children.length - 1];
      E && E.type === "text" ? E.value += " " : v.children.push({ type: "text", value: " " }), v.children.push(...y);
    } else
      c.push(...y);
    const I = {
      type: "element",
      tagName: "li",
      properties: { id: t + "fn-" + f },
      children: e.wrap(c, !0)
    };
    e.patch(l, I), s.push(I);
  }
  if (s.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: o,
          properties: {
            ...Vr(a),
            id: "footnote-label"
          },
          children: [{ type: "text", value: i }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(s, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const su = (
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
      return sh;
    if (typeof e == "function")
      return Qr(e);
    if (typeof e == "object")
      return Array.isArray(e) ? ih(e) : oh(e);
    if (typeof e == "string")
      return ah(e);
    throw new Error("Expected function, string, or object as test");
  }
);
function ih(e) {
  const t = [];
  let n = -1;
  for (; ++n < e.length; )
    t[n] = su(e[n]);
  return Qr(r);
  function r(...i) {
    let o = -1;
    for (; ++o < t.length; )
      if (t[o].apply(this, i)) return !0;
    return !1;
  }
}
function oh(e) {
  const t = (
    /** @type {Record<string, unknown>} */
    e
  );
  return Qr(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let o;
    for (o in e)
      if (i[o] !== t[o]) return !1;
    return !0;
  }
}
function ah(e) {
  return Qr(t);
  function t(n) {
    return n && n.type === e;
  }
}
function Qr(e) {
  return t;
  function t(n, r, i) {
    return !!(uh(n) && e.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function sh() {
  return !0;
}
function uh(e) {
  return e !== null && typeof e == "object" && "type" in e;
}
const uu = [], lh = !0, xa = !1, ch = "skip";
function dh(e, t, n, r) {
  let i;
  typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
  const o = su(i), a = r ? -1 : 1;
  s(e, void 0, [])();
  function s(u, l, c) {
    const d = (
      /** @type {Record<string, unknown>} */
      u && typeof u == "object" ? u : {}
    );
    if (typeof d.type == "string") {
      const p = (
        // `hast`
        typeof d.tagName == "string" ? d.tagName : (
          // `xast`
          typeof d.name == "string" ? d.name : void 0
        )
      );
      Object.defineProperty(f, "name", {
        value: "node (" + (u.type + (p ? "<" + p + ">" : "")) + ")"
      });
    }
    return f;
    function f() {
      let p = uu, y, m, v;
      if ((!t || o(u, l, c[c.length - 1] || void 0)) && (p = ph(n(u, c)), p[0] === xa))
        return p;
      if ("children" in u && u.children) {
        const I = (
          /** @type {UnistParent} */
          u
        );
        if (I.children && p[0] !== ch)
          for (m = (r ? I.children.length : -1) + a, v = c.concat(I); m > -1 && m < I.children.length; ) {
            const E = I.children[m];
            if (y = s(E, m, v)(), y[0] === xa)
              return y;
            m = typeof y[1] == "number" ? y[1] : m + a;
          }
      }
      return p;
    }
  }
}
function ph(e) {
  return Array.isArray(e) ? e : typeof e == "number" ? [lh, e] : e == null ? uu : [e];
}
function lu(e, t, n, r) {
  let i, o, a;
  typeof t == "function" ? (o = void 0, a = t, i = n) : (o = t, a = n, i = r), dh(e, o, s, i);
  function s(u, l) {
    const c = l[l.length - 1], d = c ? c.children.indexOf(u) : void 0;
    return a(u, d, c);
  }
}
const Oi = {}.hasOwnProperty, fh = {};
function hh(e, t) {
  const n = t || fh, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), a = { ...Qf, ...n.handlers }, s = {
    all: l,
    applyData: mh,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: o,
    footnoteOrder: [],
    handlers: a,
    one: u,
    options: n,
    patch: gh,
    wrap: yh
  };
  return lu(e, function(c) {
    if (c.type === "definition" || c.type === "footnoteDefinition") {
      const d = c.type === "definition" ? r : i, f = String(c.identifier).toUpperCase();
      d.has(f) || d.set(f, c);
    }
  }), s;
  function u(c, d) {
    const f = c.type, p = s.handlers[f];
    if (Oi.call(s.handlers, f) && p)
      return p(s, c, d);
    if (s.options.passThrough && s.options.passThrough.includes(f)) {
      if ("children" in c) {
        const { children: m, ...v } = c, I = Vr(v);
        return I.children = s.all(c), I;
      }
      return Vr(c);
    }
    return (s.options.unknownHandler || bh)(s, c, d);
  }
  function l(c) {
    const d = [];
    if ("children" in c) {
      const f = c.children;
      let p = -1;
      for (; ++p < f.length; ) {
        const y = s.one(f[p], c);
        if (y) {
          if (p && f[p - 1].type === "break" && (!Array.isArray(y) && y.type === "text" && (y.value = Aa(y.value)), !Array.isArray(y) && y.type === "element")) {
            const m = y.children[0];
            m && m.type === "text" && (m.value = Aa(m.value));
          }
          Array.isArray(y) ? d.push(...y) : d.push(y);
        }
      }
    }
    return d;
  }
}
function gh(e, t) {
  e.position && (t.position = qc(e));
}
function mh(e, t) {
  let n = t;
  if (e && e.data) {
    const r = e.data.hName, i = e.data.hChildren, o = e.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const a = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: a };
      }
    n.type === "element" && o && Object.assign(n.properties, Vr(o)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function bh(e, t) {
  const n = t.data || {}, r = "value" in t && !(Oi.call(n, "hProperties") || Oi.call(n, "hChildren")) ? { type: "text", value: t.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: e.all(t)
  };
  return e.patch(t, r), e.applyData(t, r);
}
function yh(e, t) {
  const n = [];
  let r = -1;
  for (t && n.push({ type: "text", value: `
` }); ++r < e.length; )
    r && n.push({ type: "text", value: `
` }), n.push(e[r]);
  return t && e.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function Aa(e) {
  let t = 0, n = e.charCodeAt(t);
  for (; n === 9 || n === 32; )
    t++, n = e.charCodeAt(t);
  return e.slice(t);
}
function Sa(e, t) {
  const n = hh(e, t), r = n.one(e, void 0), i = rh(n), o = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && o.children.push({ type: "text", value: `
` }, i), o;
}
function Ih(e, t) {
  return e && "run" in e ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      Sa(n, { file: r, ...t })
    );
    await e.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      Sa(n, { file: r, ...e || t })
    );
  };
}
function wa(e) {
  if (e)
    throw e;
}
var Rr = Object.prototype.hasOwnProperty, cu = Object.prototype.toString, Ea = Object.defineProperty, Fa = Object.getOwnPropertyDescriptor, Pa = function(t) {
  return typeof Array.isArray == "function" ? Array.isArray(t) : cu.call(t) === "[object Array]";
}, Ga = function(t) {
  if (!t || cu.call(t) !== "[object Object]")
    return !1;
  var n = Rr.call(t, "constructor"), r = t.constructor && t.constructor.prototype && Rr.call(t.constructor.prototype, "isPrototypeOf");
  if (t.constructor && !n && !r)
    return !1;
  var i;
  for (i in t)
    ;
  return typeof i > "u" || Rr.call(t, i);
}, ka = function(t, n) {
  Ea && n.name === "__proto__" ? Ea(t, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : t[n.name] = n.newValue;
}, Ra = function(t, n) {
  if (n === "__proto__")
    if (Rr.call(t, n)) {
      if (Fa)
        return Fa(t, n).value;
    } else return;
  return t[n];
}, vh = function e() {
  var t, n, r, i, o, a, s = arguments[0], u = 1, l = arguments.length, c = !1;
  for (typeof s == "boolean" && (c = s, s = arguments[1] || {}, u = 2), (s == null || typeof s != "object" && typeof s != "function") && (s = {}); u < l; ++u)
    if (t = arguments[u], t != null)
      for (n in t)
        r = Ra(s, n), i = Ra(t, n), s !== i && (c && i && (Ga(i) || (o = Pa(i))) ? (o ? (o = !1, a = r && Pa(r) ? r : []) : a = r && Ga(r) ? r : {}, ka(s, { name: n, newValue: e(c, a, i) })) : typeof i < "u" && ka(s, { name: n, newValue: i }));
  return s;
};
const di = /* @__PURE__ */ so(vh);
function Ti(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ch() {
  const e = [], t = { run: n, use: r };
  return t;
  function n(...i) {
    let o = -1;
    const a = i.pop();
    if (typeof a != "function")
      throw new TypeError("Expected function as last argument, not " + a);
    s(null, ...i);
    function s(u, ...l) {
      const c = e[++o];
      let d = -1;
      if (u) {
        a(u);
        return;
      }
      for (; ++d < i.length; )
        (l[d] === null || l[d] === void 0) && (l[d] = i[d]);
      i = l, c ? xh(c, s)(...l) : a(null, ...l);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return e.push(i), t;
  }
}
function xh(e, t) {
  let n;
  return r;
  function r(...a) {
    const s = e.length > a.length;
    let u;
    s && a.push(i);
    try {
      u = e.apply(this, a);
    } catch (l) {
      const c = (
        /** @type {Error} */
        l
      );
      if (s && n)
        throw c;
      return i(c);
    }
    s || (u && u.then && typeof u.then == "function" ? u.then(o, i) : u instanceof Error ? i(u) : o(u));
  }
  function i(a, ...s) {
    n || (n = !0, t(a, ...s));
  }
  function o(a) {
    i(null, a);
  }
}
const It = { basename: Ah, dirname: Sh, extname: wh, join: Eh, sep: "/" };
function Ah(e, t) {
  if (t !== void 0 && typeof t != "string")
    throw new TypeError('"ext" argument must be a string');
  fr(e);
  let n = 0, r = -1, i = e.length, o;
  if (t === void 0 || t.length === 0 || t.length > e.length) {
    for (; i--; )
      if (e.codePointAt(i) === 47) {
        if (o) {
          n = i + 1;
          break;
        }
      } else r < 0 && (o = !0, r = i + 1);
    return r < 0 ? "" : e.slice(n, r);
  }
  if (t === e)
    return "";
  let a = -1, s = t.length - 1;
  for (; i--; )
    if (e.codePointAt(i) === 47) {
      if (o) {
        n = i + 1;
        break;
      }
    } else
      a < 0 && (o = !0, a = i + 1), s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = a));
  return n === r ? r = a : r < 0 && (r = e.length), e.slice(n, r);
}
function Sh(e) {
  if (fr(e), e.length === 0)
    return ".";
  let t = -1, n = e.length, r;
  for (; --n; )
    if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = !0);
  return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function wh(e) {
  fr(e);
  let t = e.length, n = -1, r = 0, i = -1, o = 0, a;
  for (; t--; ) {
    const s = e.codePointAt(t);
    if (s === 47) {
      if (a) {
        r = t + 1;
        break;
      }
      continue;
    }
    n < 0 && (a = !0, n = t + 1), s === 46 ? i < 0 ? i = t : o !== 1 && (o = 1) : i > -1 && (o = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  o === 0 || // The (right-most) trimmed path component is exactly `..`.
  o === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function Eh(...e) {
  let t = -1, n;
  for (; ++t < e.length; )
    fr(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
  return n === void 0 ? "." : Fh(n);
}
function Fh(e) {
  fr(e);
  const t = e.codePointAt(0) === 47;
  let n = Ph(e, !t);
  return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function Ph(e, t) {
  let n = "", r = 0, i = -1, o = 0, a = -1, s, u;
  for (; ++a <= e.length; ) {
    if (a < e.length)
      s = e.codePointAt(a);
    else {
      if (s === 47)
        break;
      s = 47;
    }
    if (s === 47) {
      if (!(i === a - 1 || o === 1)) if (i !== a - 1 && o === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (u = n.lastIndexOf("/"), u !== n.length - 1) {
              u < 0 ? (n = "", r = 0) : (n = n.slice(0, u), r = n.length - 1 - n.lastIndexOf("/")), i = a, o = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = a, o = 0;
            continue;
          }
        }
        t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + e.slice(i + 1, a) : n = e.slice(i + 1, a), r = a - i - 1;
      i = a, o = 0;
    } else s === 46 && o > -1 ? o++ : o = -1;
  }
  return n;
}
function fr(e) {
  if (typeof e != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(e)
    );
}
const Gh = { cwd: kh };
function kh() {
  return "/";
}
function Vi(e) {
  return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && // @ts-expect-error: indexing is fine.
  e.auth === void 0);
}
function Rh(e) {
  if (typeof e == "string")
    e = new URL(e);
  else if (!Vi(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + e + "`"
    );
    throw t.code = "ERR_INVALID_ARG_TYPE", t;
  }
  if (e.protocol !== "file:") {
    const t = new TypeError("The URL must be of scheme file");
    throw t.code = "ERR_INVALID_URL_SCHEME", t;
  }
  return Bh(e);
}
function Bh(e) {
  if (e.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const t = e.pathname;
  let n = -1;
  for (; ++n < t.length; )
    if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(t);
}
const pi = (
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
class du {
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
    let n;
    t ? Vi(t) ? n = { path: t } : typeof t == "string" || Oh(t) ? n = { value: t } : n = t : n = {}, this.cwd = "cwd" in n ? "" : Gh.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < pi.length; ) {
      const o = pi[r];
      o in n && n[o] !== void 0 && n[o] !== null && (this[o] = o === "history" ? [...n[o]] : n[o]);
    }
    let i;
    for (i in n)
      pi.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? It.basename(this.path) : void 0;
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
    hi(t, "basename"), fi(t, "basename"), this.path = It.join(this.dirname || "", t);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? It.dirname(this.path) : void 0;
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
    Ba(this.basename, "dirname"), this.path = It.join(t || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? It.extname(this.path) : void 0;
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
    if (fi(t, "extname"), Ba(this.dirname, "extname"), t) {
      if (t.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (t.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = It.join(this.dirname, this.stem + (t || ""));
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
    Vi(t) && (t = Rh(t)), hi(t, "path"), this.path !== t && this.history.push(t);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? It.basename(this.path, this.extname) : void 0;
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
    hi(t, "stem"), fi(t, "stem"), this.path = It.join(this.dirname || "", t + (this.extname || ""));
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
  fail(t, n, r) {
    const i = this.message(t, n, r);
    throw i.fatal = !0, i;
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
  info(t, n, r) {
    const i = this.message(t, n, r);
    return i.fatal = void 0, i;
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
  message(t, n, r) {
    const i = new We(
      // @ts-expect-error: the overloads are fine.
      t,
      n,
      r
    );
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
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
function fi(e, t) {
  if (e && e.includes(It.sep))
    throw new Error(
      "`" + t + "` cannot be a path: did not expect `" + It.sep + "`"
    );
}
function hi(e, t) {
  if (!e)
    throw new Error("`" + t + "` cannot be empty");
}
function Ba(e, t) {
  if (!e)
    throw new Error("Setting `" + t + "` requires `path` to be set too");
}
function Oh(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Th = (
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
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), i = r[e], o = function() {
      return i.apply(o, arguments);
    };
    return Object.setPrototypeOf(o, r), o;
  }
), Vh = {}.hasOwnProperty;
class Co extends Th {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = Ch();
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
      new Co()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      t.use(...r);
    }
    return t.data(di(!0, {}, this.namespace)), t;
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
  data(t, n) {
    return typeof t == "string" ? arguments.length === 2 ? (bi("data", this.frozen), this.namespace[t] = n, this) : Vh.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (bi("data", this.frozen), this.namespace = t, this) : this.namespace;
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
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(t, ...r);
      typeof i == "function" && this.transformers.use(i);
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
    const n = wr(t), r = this.parser || this.Parser;
    return gi("parse", r), r(String(n), n);
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
  process(t, n) {
    const r = this;
    return this.freeze(), gi("process", this.parser || this.Parser), mi("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(o, a) {
      const s = wr(t), u = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(s)
      );
      r.run(u, s, function(c, d, f) {
        if (c || !d || !f)
          return l(c);
        const p = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          d
        ), y = r.stringify(p, f);
        Mh(y) ? f.value = y : f.result = y, l(
          c,
          /** @type {VFileWithOutput<CompileResult>} */
          f
        );
      });
      function l(c, d) {
        c || !d ? a(c) : o ? o(d) : n(void 0, d);
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
    let n = !1, r;
    return this.freeze(), gi("processSync", this.parser || this.Parser), mi("processSync", this.compiler || this.Compiler), this.process(t, i), Ta("processSync", "process", n), r;
    function i(o, a) {
      n = !0, wa(o), r = a;
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
  run(t, n, r) {
    Oa(t), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? o(void 0, r) : new Promise(o);
    function o(a, s) {
      const u = wr(n);
      i.run(t, u, l);
      function l(c, d, f) {
        const p = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          d || t
        );
        c ? s(c) : a ? a(p) : r(void 0, p, f);
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
  runSync(t, n) {
    let r = !1, i;
    return this.run(t, n, o), Ta("runSync", "run", r), i;
    function o(a, s) {
      wa(a), i = s, r = !0;
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
  stringify(t, n) {
    this.freeze();
    const r = wr(n), i = this.compiler || this.Compiler;
    return mi("stringify", i), Oa(t), i(t, r);
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
  use(t, ...n) {
    const r = this.attachers, i = this.namespace;
    if (bi("use", this.frozen), t != null) if (typeof t == "function")
      u(t, n);
    else if (typeof t == "object")
      Array.isArray(t) ? s(t) : a(t);
    else
      throw new TypeError("Expected usable value, not `" + t + "`");
    return this;
    function o(l) {
      if (typeof l == "function")
        u(l, []);
      else if (typeof l == "object")
        if (Array.isArray(l)) {
          const [c, ...d] = (
            /** @type {PluginTuple<Array<unknown>>} */
            l
          );
          u(c, d);
        } else
          a(l);
      else
        throw new TypeError("Expected usable value, not `" + l + "`");
    }
    function a(l) {
      if (!("plugins" in l) && !("settings" in l))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      s(l.plugins), l.settings && (i.settings = di(!0, i.settings, l.settings));
    }
    function s(l) {
      let c = -1;
      if (l != null) if (Array.isArray(l))
        for (; ++c < l.length; ) {
          const d = l[c];
          o(d);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + l + "`");
    }
    function u(l, c) {
      let d = -1, f = -1;
      for (; ++d < r.length; )
        if (r[d][0] === l) {
          f = d;
          break;
        }
      if (f === -1)
        r.push([l, ...c]);
      else if (c.length > 0) {
        let [p, ...y] = c;
        const m = r[f][1];
        Ti(m) && Ti(p) && (p = di(!0, m, p)), r[f] = [l, p, ...y];
      }
    }
  }
}
const Dh = new Co().freeze();
function gi(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `parser`");
}
function mi(e, t) {
  if (typeof t != "function")
    throw new TypeError("Cannot `" + e + "` without `compiler`");
}
function bi(e, t) {
  if (t)
    throw new Error(
      "Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Oa(e) {
  if (!Ti(e) || typeof e.type != "string")
    throw new TypeError("Expected node, got `" + e + "`");
}
function Ta(e, t, n) {
  if (!n)
    throw new Error(
      "`" + e + "` finished async. Use `" + t + "` instead"
    );
}
function wr(e) {
  return Nh(e) ? e : new du(e);
}
function Nh(e) {
  return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function Mh(e) {
  return typeof e == "string" || Lh(e);
}
function Lh(e) {
  return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
const Xh = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Va = [], Da = { allowDangerousHtml: !0 }, Hh = /^(https?|ircs?|mailto|xmpp)$/i, zh = [
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
function pu(e) {
  const t = Wh(e), n = Zh(e);
  return jh(t.runSync(t.parse(n), n), e);
}
function Wh(e) {
  const t = e.rehypePlugins || Va, n = e.remarkPlugins || Va, r = e.remarkRehypeOptions ? { ...e.remarkRehypeOptions, ...Da } : Da;
  return Dh().use(Sf).use(n).use(Ih, r).use(t);
}
function Zh(e) {
  const t = e.children || "", n = new du();
  return typeof t == "string" && (n.value = t), n;
}
function jh(e, t) {
  const n = t.allowedElements, r = t.allowElement, i = t.components, o = t.disallowedElements, a = t.skipHtml, s = t.unwrapDisallowed, u = t.urlTransform || Jh;
  for (const c of zh)
    Object.hasOwn(t, c.from) && ("" + c.from + (c.to ? "use `" + c.to + "` instead" : "remove it") + Xh + c.id, void 0);
  return t.className && (e = {
    type: "element",
    tagName: "div",
    properties: { className: t.className },
    // Assume no doctypes.
    children: (
      /** @type {Array<ElementContent>} */
      e.type === "root" ? e.children : [e]
    )
  }), lu(e, l), nd(e, {
    Fragment: ws,
    // @ts-expect-error
    // React components are allowed to return numbers,
    // but not according to the types in hast-util-to-jsx-runtime
    components: i,
    ignoreInvalidStyle: !0,
    jsx: X,
    jsxs: lt,
    passKeys: !0,
    passNode: !0
  });
  function l(c, d, f) {
    if (c.type === "raw" && f && typeof d == "number")
      return a ? f.children.splice(d, 1) : f.children[d] = { type: "text", value: c.value }, d;
    if (c.type === "element") {
      let p;
      for (p in ui)
        if (Object.hasOwn(ui, p) && Object.hasOwn(c.properties, p)) {
          const y = c.properties[p], m = ui[p];
          (m === null || m.includes(c.tagName)) && (c.properties[p] = u(String(y || ""), p, c));
        }
    }
    if (c.type === "element") {
      let p = n ? !n.includes(c.tagName) : o ? o.includes(c.tagName) : !1;
      if (!p && r && typeof d == "number" && (p = !r(c, d, f)), p && f && typeof d == "number")
        return s && c.children ? f.children.splice(d, 1, ...c.children) : f.children.splice(d, 1), d;
    }
  }
}
function Jh(e) {
  const t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    t === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || // It is a protocol, it should be allowed.
    Hh.test(e.slice(0, t)) ? e : ""
  );
}
function Di({ prop: e }) {
  const t = {
    width: "100%",
    background: "#e2e3e5",
    borderRadius: "5px",
    paddingTop: "2px",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingBottom: "2px"
  }, n = {
    ...t,
    background: "#fff3cd"
  }, r = {
    ...t,
    background: "#d1ecf1"
  }, i = {
    ...t,
    background: "#f8d7da"
  }, o = {
    ...t,
    background: "#fffff2"
  };
  let a = {};
  switch (e.alertType) {
    case "info":
      a = r;
      break;
    case "neutral":
      a = o;
      break;
    case "warning":
      a = n;
      break;
    case "error":
      a = i;
      break;
    default:
      a = t;
  }
  return /* @__PURE__ */ X("div", { className: `pd-alert-${e.alertType}`, style: a, children: /* @__PURE__ */ X(pu, { components: {
    a: ({ ...s }) => /* @__PURE__ */ X("a", { ...s, target: "_blank", rel: "noopener noreferrer" })
  }, children: e.content }) });
}
var Dr = { exports: {} };
Dr.exports;
(function(e, t) {
  var n = 200, r = "__lodash_hash_undefined__", i = 1, o = 2, a = 9007199254740991, s = "[object Arguments]", u = "[object Array]", l = "[object AsyncFunction]", c = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", y = "[object GeneratorFunction]", m = "[object Map]", v = "[object Number]", I = "[object Null]", E = "[object Object]", S = "[object Promise]", P = "[object Proxy]", T = "[object RegExp]", A = "[object Set]", D = "[object String]", w = "[object Symbol]", O = "[object Undefined]", G = "[object WeakMap]", B = "[object ArrayBuffer]", R = "[object DataView]", j = "[object Float32Array]", te = "[object Float64Array]", L = "[object Int8Array]", Y = "[object Int16Array]", se = "[object Int32Array]", de = "[object Uint8Array]", ye = "[object Uint8ClampedArray]", b = "[object Uint16Array]", ue = "[object Uint32Array]", ie = /[\\^$.*+?()[\]{}|]/g, g = /^\[object .+?Constructor\]$/, he = /^(?:0|[1-9]\d*)$/, K = {};
  K[j] = K[te] = K[L] = K[Y] = K[se] = K[de] = K[ye] = K[b] = K[ue] = !0, K[s] = K[u] = K[B] = K[c] = K[R] = K[d] = K[f] = K[p] = K[m] = K[v] = K[E] = K[T] = K[A] = K[D] = K[G] = !1;
  var pe = typeof Qt == "object" && Qt && Qt.Object === Object && Qt, Oe = typeof self == "object" && self && self.Object === Object && self, fe = pe || Oe || Function("return this")(), Ne = t && !t.nodeType && t, Je = Ne && !0 && e && !e.nodeType && e, nt = Je && Je.exports === Ne, rt = nt && pe.process, Vt = function() {
    try {
      return rt && rt.binding && rt.binding("util");
    } catch {
    }
  }(), M = Vt && Vt.isTypedArray;
  function z(h, x) {
    for (var k = -1, H = h == null ? 0 : h.length, Ae = 0, re = []; ++k < H; ) {
      var Pe = h[k];
      x(Pe, k, h) && (re[Ae++] = Pe);
    }
    return re;
  }
  function U(h, x) {
    for (var k = -1, H = x.length, Ae = h.length; ++k < H; )
      h[Ae + k] = x[k];
    return h;
  }
  function ge(h, x) {
    for (var k = -1, H = h == null ? 0 : h.length; ++k < H; )
      if (x(h[k], k, h))
        return !0;
    return !1;
  }
  function Be(h, x) {
    for (var k = -1, H = Array(h); ++k < h; )
      H[k] = x(k);
    return H;
  }
  function Me(h) {
    return function(x) {
      return h(x);
    };
  }
  function yn(h, x) {
    return h.has(x);
  }
  function Wn(h, x) {
    return h == null ? void 0 : h[x];
  }
  function Ee(h) {
    var x = -1, k = Array(h.size);
    return h.forEach(function(H, Ae) {
      k[++x] = [Ae, H];
    }), k;
  }
  function ve(h, x) {
    return function(k) {
      return h(x(k));
    };
  }
  function Se(h) {
    var x = -1, k = Array(h.size);
    return h.forEach(function(H) {
      k[++x] = H;
    }), k;
  }
  var we = Array.prototype, F = Function.prototype, N = Object.prototype, q = fe["__core-js_shared__"], oe = F.toString, ae = N.hasOwnProperty, Ye = function() {
    var h = /[^.]+$/.exec(q && q.keys && q.keys.IE_PROTO || "");
    return h ? "Symbol(src)_1." + h : "";
  }(), bt = N.toString, dt = RegExp(
    "^" + oe.call(ae).replace(ie, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Dt = nt ? fe.Buffer : void 0, yt = fe.Symbol, Le = fe.Uint8Array, Ft = N.propertyIsEnumerable, pt = we.splice, Kt = yt ? yt.toStringTag : void 0, To = Object.getOwnPropertySymbols, sl = Dt ? Dt.isBuffer : void 0, ul = ve(Object.keys, Object), ei = In(fe, "DataView"), Zn = In(fe, "Map"), ti = In(fe, "Promise"), ni = In(fe, "Set"), ri = In(fe, "WeakMap"), jn = In(Object, "create"), ll = nn(ei), cl = nn(Zn), dl = nn(ti), pl = nn(ni), fl = nn(ri), Vo = yt ? yt.prototype : void 0, ii = Vo ? Vo.valueOf : void 0;
  function en(h) {
    var x = -1, k = h == null ? 0 : h.length;
    for (this.clear(); ++x < k; ) {
      var H = h[x];
      this.set(H[0], H[1]);
    }
  }
  function hl() {
    this.__data__ = jn ? jn(null) : {}, this.size = 0;
  }
  function gl(h) {
    var x = this.has(h) && delete this.__data__[h];
    return this.size -= x ? 1 : 0, x;
  }
  function ml(h) {
    var x = this.__data__;
    if (jn) {
      var k = x[h];
      return k === r ? void 0 : k;
    }
    return ae.call(x, h) ? x[h] : void 0;
  }
  function bl(h) {
    var x = this.__data__;
    return jn ? x[h] !== void 0 : ae.call(x, h);
  }
  function yl(h, x) {
    var k = this.__data__;
    return this.size += this.has(h) ? 0 : 1, k[h] = jn && x === void 0 ? r : x, this;
  }
  en.prototype.clear = hl, en.prototype.delete = gl, en.prototype.get = ml, en.prototype.has = bl, en.prototype.set = yl;
  function Pt(h) {
    var x = -1, k = h == null ? 0 : h.length;
    for (this.clear(); ++x < k; ) {
      var H = h[x];
      this.set(H[0], H[1]);
    }
  }
  function Il() {
    this.__data__ = [], this.size = 0;
  }
  function vl(h) {
    var x = this.__data__, k = br(x, h);
    if (k < 0)
      return !1;
    var H = x.length - 1;
    return k == H ? x.pop() : pt.call(x, k, 1), --this.size, !0;
  }
  function Cl(h) {
    var x = this.__data__, k = br(x, h);
    return k < 0 ? void 0 : x[k][1];
  }
  function xl(h) {
    return br(this.__data__, h) > -1;
  }
  function Al(h, x) {
    var k = this.__data__, H = br(k, h);
    return H < 0 ? (++this.size, k.push([h, x])) : k[H][1] = x, this;
  }
  Pt.prototype.clear = Il, Pt.prototype.delete = vl, Pt.prototype.get = Cl, Pt.prototype.has = xl, Pt.prototype.set = Al;
  function tn(h) {
    var x = -1, k = h == null ? 0 : h.length;
    for (this.clear(); ++x < k; ) {
      var H = h[x];
      this.set(H[0], H[1]);
    }
  }
  function Sl() {
    this.size = 0, this.__data__ = {
      hash: new en(),
      map: new (Zn || Pt)(),
      string: new en()
    };
  }
  function wl(h) {
    var x = yr(this, h).delete(h);
    return this.size -= x ? 1 : 0, x;
  }
  function El(h) {
    return yr(this, h).get(h);
  }
  function Fl(h) {
    return yr(this, h).has(h);
  }
  function Pl(h, x) {
    var k = yr(this, h), H = k.size;
    return k.set(h, x), this.size += k.size == H ? 0 : 1, this;
  }
  tn.prototype.clear = Sl, tn.prototype.delete = wl, tn.prototype.get = El, tn.prototype.has = Fl, tn.prototype.set = Pl;
  function mr(h) {
    var x = -1, k = h == null ? 0 : h.length;
    for (this.__data__ = new tn(); ++x < k; )
      this.add(h[x]);
  }
  function Gl(h) {
    return this.__data__.set(h, r), this;
  }
  function kl(h) {
    return this.__data__.has(h);
  }
  mr.prototype.add = mr.prototype.push = Gl, mr.prototype.has = kl;
  function Nt(h) {
    var x = this.__data__ = new Pt(h);
    this.size = x.size;
  }
  function Rl() {
    this.__data__ = new Pt(), this.size = 0;
  }
  function Bl(h) {
    var x = this.__data__, k = x.delete(h);
    return this.size = x.size, k;
  }
  function Ol(h) {
    return this.__data__.get(h);
  }
  function Tl(h) {
    return this.__data__.has(h);
  }
  function Vl(h, x) {
    var k = this.__data__;
    if (k instanceof Pt) {
      var H = k.__data__;
      if (!Zn || H.length < n - 1)
        return H.push([h, x]), this.size = ++k.size, this;
      k = this.__data__ = new tn(H);
    }
    return k.set(h, x), this.size = k.size, this;
  }
  Nt.prototype.clear = Rl, Nt.prototype.delete = Bl, Nt.prototype.get = Ol, Nt.prototype.has = Tl, Nt.prototype.set = Vl;
  function Dl(h, x) {
    var k = Ir(h), H = !k && ql(h), Ae = !k && !H && oi(h), re = !k && !H && !Ae && Zo(h), Pe = k || H || Ae || re, Te = Pe ? Be(h.length, String) : [], Ve = Te.length;
    for (var Fe in h)
      ae.call(h, Fe) && !(Pe && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Fe == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Ae && (Fe == "offset" || Fe == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      re && (Fe == "buffer" || Fe == "byteLength" || Fe == "byteOffset") || // Skip index properties.
      Jl(Fe, Ve))) && Te.push(Fe);
    return Te;
  }
  function br(h, x) {
    for (var k = h.length; k--; )
      if (Xo(h[k][0], x))
        return k;
    return -1;
  }
  function Nl(h, x, k) {
    var H = x(h);
    return Ir(h) ? H : U(H, k(h));
  }
  function Jn(h) {
    return h == null ? h === void 0 ? O : I : Kt && Kt in Object(h) ? Zl(h) : Ql(h);
  }
  function Do(h) {
    return Yn(h) && Jn(h) == s;
  }
  function No(h, x, k, H, Ae) {
    return h === x ? !0 : h == null || x == null || !Yn(h) && !Yn(x) ? h !== h && x !== x : Ml(h, x, k, H, No, Ae);
  }
  function Ml(h, x, k, H, Ae, re) {
    var Pe = Ir(h), Te = Ir(x), Ve = Pe ? u : Mt(h), Fe = Te ? u : Mt(x);
    Ve = Ve == s ? E : Ve, Fe = Fe == s ? E : Fe;
    var $e = Ve == E, ft = Fe == E, Xe = Ve == Fe;
    if (Xe && oi(h)) {
      if (!oi(x))
        return !1;
      Pe = !0, $e = !1;
    }
    if (Xe && !$e)
      return re || (re = new Nt()), Pe || Zo(h) ? Mo(h, x, k, H, Ae, re) : zl(h, x, Ve, k, H, Ae, re);
    if (!(k & i)) {
      var it = $e && ae.call(h, "__wrapped__"), ot = ft && ae.call(x, "__wrapped__");
      if (it || ot) {
        var Lt = it ? h.value() : h, Gt = ot ? x.value() : x;
        return re || (re = new Nt()), Ae(Lt, Gt, k, H, re);
      }
    }
    return Xe ? (re || (re = new Nt()), Wl(h, x, k, H, Ae, re)) : !1;
  }
  function Ll(h) {
    if (!Wo(h) || _l(h))
      return !1;
    var x = Ho(h) ? dt : g;
    return x.test(nn(h));
  }
  function Xl(h) {
    return Yn(h) && zo(h.length) && !!K[Jn(h)];
  }
  function Hl(h) {
    if (!Ul(h))
      return ul(h);
    var x = [];
    for (var k in Object(h))
      ae.call(h, k) && k != "constructor" && x.push(k);
    return x;
  }
  function Mo(h, x, k, H, Ae, re) {
    var Pe = k & i, Te = h.length, Ve = x.length;
    if (Te != Ve && !(Pe && Ve > Te))
      return !1;
    var Fe = re.get(h);
    if (Fe && re.get(x))
      return Fe == x;
    var $e = -1, ft = !0, Xe = k & o ? new mr() : void 0;
    for (re.set(h, x), re.set(x, h); ++$e < Te; ) {
      var it = h[$e], ot = x[$e];
      if (H)
        var Lt = Pe ? H(ot, it, $e, x, h, re) : H(it, ot, $e, h, x, re);
      if (Lt !== void 0) {
        if (Lt)
          continue;
        ft = !1;
        break;
      }
      if (Xe) {
        if (!ge(x, function(Gt, rn) {
          if (!yn(Xe, rn) && (it === Gt || Ae(it, Gt, k, H, re)))
            return Xe.push(rn);
        })) {
          ft = !1;
          break;
        }
      } else if (!(it === ot || Ae(it, ot, k, H, re))) {
        ft = !1;
        break;
      }
    }
    return re.delete(h), re.delete(x), ft;
  }
  function zl(h, x, k, H, Ae, re, Pe) {
    switch (k) {
      case R:
        if (h.byteLength != x.byteLength || h.byteOffset != x.byteOffset)
          return !1;
        h = h.buffer, x = x.buffer;
      case B:
        return !(h.byteLength != x.byteLength || !re(new Le(h), new Le(x)));
      case c:
      case d:
      case v:
        return Xo(+h, +x);
      case f:
        return h.name == x.name && h.message == x.message;
      case T:
      case D:
        return h == x + "";
      case m:
        var Te = Ee;
      case A:
        var Ve = H & i;
        if (Te || (Te = Se), h.size != x.size && !Ve)
          return !1;
        var Fe = Pe.get(h);
        if (Fe)
          return Fe == x;
        H |= o, Pe.set(h, x);
        var $e = Mo(Te(h), Te(x), H, Ae, re, Pe);
        return Pe.delete(h), $e;
      case w:
        if (ii)
          return ii.call(h) == ii.call(x);
    }
    return !1;
  }
  function Wl(h, x, k, H, Ae, re) {
    var Pe = k & i, Te = Lo(h), Ve = Te.length, Fe = Lo(x), $e = Fe.length;
    if (Ve != $e && !Pe)
      return !1;
    for (var ft = Ve; ft--; ) {
      var Xe = Te[ft];
      if (!(Pe ? Xe in x : ae.call(x, Xe)))
        return !1;
    }
    var it = re.get(h);
    if (it && re.get(x))
      return it == x;
    var ot = !0;
    re.set(h, x), re.set(x, h);
    for (var Lt = Pe; ++ft < Ve; ) {
      Xe = Te[ft];
      var Gt = h[Xe], rn = x[Xe];
      if (H)
        var jo = Pe ? H(rn, Gt, Xe, x, h, re) : H(Gt, rn, Xe, h, x, re);
      if (!(jo === void 0 ? Gt === rn || Ae(Gt, rn, k, H, re) : jo)) {
        ot = !1;
        break;
      }
      Lt || (Lt = Xe == "constructor");
    }
    if (ot && !Lt) {
      var vr = h.constructor, Cr = x.constructor;
      vr != Cr && "constructor" in h && "constructor" in x && !(typeof vr == "function" && vr instanceof vr && typeof Cr == "function" && Cr instanceof Cr) && (ot = !1);
    }
    return re.delete(h), re.delete(x), ot;
  }
  function Lo(h) {
    return Nl(h, ec, jl);
  }
  function yr(h, x) {
    var k = h.__data__;
    return Yl(x) ? k[typeof x == "string" ? "string" : "hash"] : k.map;
  }
  function In(h, x) {
    var k = Wn(h, x);
    return Ll(k) ? k : void 0;
  }
  function Zl(h) {
    var x = ae.call(h, Kt), k = h[Kt];
    try {
      h[Kt] = void 0;
      var H = !0;
    } catch {
    }
    var Ae = bt.call(h);
    return H && (x ? h[Kt] = k : delete h[Kt]), Ae;
  }
  var jl = To ? function(h) {
    return h == null ? [] : (h = Object(h), z(To(h), function(x) {
      return Ft.call(h, x);
    }));
  } : tc, Mt = Jn;
  (ei && Mt(new ei(new ArrayBuffer(1))) != R || Zn && Mt(new Zn()) != m || ti && Mt(ti.resolve()) != S || ni && Mt(new ni()) != A || ri && Mt(new ri()) != G) && (Mt = function(h) {
    var x = Jn(h), k = x == E ? h.constructor : void 0, H = k ? nn(k) : "";
    if (H)
      switch (H) {
        case ll:
          return R;
        case cl:
          return m;
        case dl:
          return S;
        case pl:
          return A;
        case fl:
          return G;
      }
    return x;
  });
  function Jl(h, x) {
    return x = x ?? a, !!x && (typeof h == "number" || he.test(h)) && h > -1 && h % 1 == 0 && h < x;
  }
  function Yl(h) {
    var x = typeof h;
    return x == "string" || x == "number" || x == "symbol" || x == "boolean" ? h !== "__proto__" : h === null;
  }
  function _l(h) {
    return !!Ye && Ye in h;
  }
  function Ul(h) {
    var x = h && h.constructor, k = typeof x == "function" && x.prototype || N;
    return h === k;
  }
  function Ql(h) {
    return bt.call(h);
  }
  function nn(h) {
    if (h != null) {
      try {
        return oe.call(h);
      } catch {
      }
      try {
        return h + "";
      } catch {
      }
    }
    return "";
  }
  function Xo(h, x) {
    return h === x || h !== h && x !== x;
  }
  var ql = Do(/* @__PURE__ */ function() {
    return arguments;
  }()) ? Do : function(h) {
    return Yn(h) && ae.call(h, "callee") && !Ft.call(h, "callee");
  }, Ir = Array.isArray;
  function $l(h) {
    return h != null && zo(h.length) && !Ho(h);
  }
  var oi = sl || nc;
  function Kl(h, x) {
    return No(h, x);
  }
  function Ho(h) {
    if (!Wo(h))
      return !1;
    var x = Jn(h);
    return x == p || x == y || x == l || x == P;
  }
  function zo(h) {
    return typeof h == "number" && h > -1 && h % 1 == 0 && h <= a;
  }
  function Wo(h) {
    var x = typeof h;
    return h != null && (x == "object" || x == "function");
  }
  function Yn(h) {
    return h != null && typeof h == "object";
  }
  var Zo = M ? Me(M) : Xl;
  function ec(h) {
    return $l(h) ? Dl(h) : Hl(h);
  }
  function tc() {
    return [];
  }
  function nc() {
    return !1;
  }
  e.exports = Kl;
})(Dr, Dr.exports);
var Yh = Dr.exports;
const Na = /* @__PURE__ */ so(Yh);
var hr = class {
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
}, hn = typeof window > "u" || "Deno" in globalThis;
function st() {
}
function _h(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ni(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function fu(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Sn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function mt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ma(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: i,
    predicate: o,
    queryKey: a,
    stale: s
  } = e;
  if (a) {
    if (r) {
      if (t.queryHash !== xo(a, t.options))
        return !1;
    } else if (!ar(t.queryKey, a))
      return !1;
  }
  if (n !== "all") {
    const u = t.isActive();
    if (n === "active" && !u || n === "inactive" && u)
      return !1;
  }
  return !(typeof s == "boolean" && t.isStale() !== s || i && i !== t.state.fetchStatus || o && !o(t));
}
function La(e, t) {
  const { exact: n, status: r, predicate: i, mutationKey: o } = e;
  if (o) {
    if (!t.options.mutationKey)
      return !1;
    if (n) {
      if (or(t.options.mutationKey) !== or(o))
        return !1;
    } else if (!ar(t.options.mutationKey, o))
      return !1;
  }
  return !(r && t.state.status !== r || i && !i(t));
}
function xo(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || or)(e);
}
function or(e) {
  return JSON.stringify(
    e,
    (t, n) => Xi(n) ? Object.keys(n).sort().reduce((r, i) => (r[i] = n[i], r), {}) : n
  );
}
function ar(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every((n) => ar(e[n], t[n])) : !1;
}
function Mi(e, t) {
  if (e === t)
    return e;
  const n = Xa(e) && Xa(t);
  if (n || Xi(e) && Xi(t)) {
    const r = n ? e : Object.keys(e), i = r.length, o = n ? t : Object.keys(t), a = o.length, s = n ? [] : {};
    let u = 0;
    for (let l = 0; l < a; l++) {
      const c = n ? l : o[l];
      (!n && r.includes(c) || n) && e[c] === void 0 && t[c] === void 0 ? (s[c] = void 0, u++) : (s[c] = Mi(e[c], t[c]), s[c] === e[c] && e[c] !== void 0 && u++);
    }
    return i === a && u === i ? e : s;
  }
  return t;
}
function Li(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Xa(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Xi(e) {
  if (!Ha(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const n = t.prototype;
  return !(!Ha(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function Ha(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Uh(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Hi(e, t, n) {
  if (typeof n.structuralSharing == "function")
    return n.structuralSharing(e, t);
  if (n.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return Mi(e, t);
      } catch (r) {
        throw console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${n.queryHash}]: ${r}`
        ), r;
      }
    return Mi(e, t);
  }
  return t;
}
function Qh(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function qh(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var Nr = Symbol();
function hu(e, t) {
  return process.env.NODE_ENV !== "production" && e.queryFn === Nr && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`
  ), !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === Nr ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var an, zt, En, ms, $h = (ms = class extends hr {
  constructor() {
    super();
    Q(this, an);
    Q(this, zt);
    Q(this, En);
    W(this, En, (t) => {
      if (!hn && window.addEventListener) {
        const n = () => t();
        return window.addEventListener("visibilitychange", n, !1), () => {
          window.removeEventListener("visibilitychange", n);
        };
      }
    });
  }
  onSubscribe() {
    C(this, zt) || this.setEventListener(C(this, En));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = C(this, zt)) == null || t.call(this), W(this, zt, void 0));
  }
  setEventListener(t) {
    var n;
    W(this, En, t), (n = C(this, zt)) == null || n.call(this), W(this, zt, t((r) => {
      typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
    }));
  }
  setFocused(t) {
    C(this, an) !== t && (W(this, an, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((n) => {
      n(t);
    });
  }
  isFocused() {
    var t;
    return typeof C(this, an) == "boolean" ? C(this, an) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, an = new WeakMap(), zt = new WeakMap(), En = new WeakMap(), ms), Ao = new $h(), Fn, Wt, Pn, bs, Kh = (bs = class extends hr {
  constructor() {
    super();
    Q(this, Fn, !0);
    Q(this, Wt);
    Q(this, Pn);
    W(this, Pn, (t) => {
      if (!hn && window.addEventListener) {
        const n = () => t(!0), r = () => t(!1);
        return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
          window.removeEventListener("online", n), window.removeEventListener("offline", r);
        };
      }
    });
  }
  onSubscribe() {
    C(this, Wt) || this.setEventListener(C(this, Pn));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = C(this, Wt)) == null || t.call(this), W(this, Wt, void 0));
  }
  setEventListener(t) {
    var n;
    W(this, Pn, t), (n = C(this, Wt)) == null || n.call(this), W(this, Wt, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    C(this, Fn) !== t && (W(this, Fn, t), this.listeners.forEach((r) => {
      r(t);
    }));
  }
  isOnline() {
    return C(this, Fn);
  }
}, Fn = new WeakMap(), Wt = new WeakMap(), Pn = new WeakMap(), bs), Mr = new Kh();
function zi() {
  let e, t;
  const n = new Promise((i, o) => {
    e = i, t = o;
  });
  n.status = "pending", n.catch(() => {
  });
  function r(i) {
    Object.assign(n, i), delete n.resolve, delete n.reject;
  }
  return n.resolve = (i) => {
    r({
      status: "fulfilled",
      value: i
    }), e(i);
  }, n.reject = (i) => {
    r({
      status: "rejected",
      reason: i
    }), t(i);
  }, n;
}
function eg(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function gu(e) {
  return (e ?? "online") === "online" ? Mr.isOnline() : !0;
}
var mu = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function yi(e) {
  return e instanceof mu;
}
function bu(e) {
  let t = !1, n = 0, r = !1, i;
  const o = zi(), a = (m) => {
    var v;
    r || (f(new mu(m)), (v = e.abort) == null || v.call(e));
  }, s = () => {
    t = !0;
  }, u = () => {
    t = !1;
  }, l = () => Ao.isFocused() && (e.networkMode === "always" || Mr.isOnline()) && e.canRun(), c = () => gu(e.networkMode) && e.canRun(), d = (m) => {
    var v;
    r || (r = !0, (v = e.onSuccess) == null || v.call(e, m), i == null || i(), o.resolve(m));
  }, f = (m) => {
    var v;
    r || (r = !0, (v = e.onError) == null || v.call(e, m), i == null || i(), o.reject(m));
  }, p = () => new Promise((m) => {
    var v;
    i = (I) => {
      (r || l()) && m(I);
    }, (v = e.onPause) == null || v.call(e);
  }).then(() => {
    var m;
    i = void 0, r || (m = e.onContinue) == null || m.call(e);
  }), y = () => {
    if (r)
      return;
    let m;
    const v = n === 0 ? e.initialPromise : void 0;
    try {
      m = v ?? e.fn();
    } catch (I) {
      m = Promise.reject(I);
    }
    Promise.resolve(m).then(d).catch((I) => {
      var A;
      if (r)
        return;
      const E = e.retry ?? (hn ? 0 : 3), S = e.retryDelay ?? eg, P = typeof S == "function" ? S(n, I) : S, T = E === !0 || typeof E == "number" && n < E || typeof E == "function" && E(n, I);
      if (t || !T) {
        f(I);
        return;
      }
      n++, (A = e.onFail) == null || A.call(e, n, I), Uh(P).then(() => l() ? void 0 : p()).then(() => {
        t ? f(I) : y();
      });
    });
  };
  return {
    promise: o,
    cancel: a,
    continue: () => (i == null || i(), o),
    cancelRetry: s,
    continueRetry: u,
    canStart: c,
    start: () => (c() ? y() : p().then(y), o)
  };
}
var tg = (e) => setTimeout(e, 0);
function ng() {
  let e = [], t = 0, n = (s) => {
    s();
  }, r = (s) => {
    s();
  }, i = tg;
  const o = (s) => {
    t ? e.push(s) : i(() => {
      n(s);
    });
  }, a = () => {
    const s = e;
    e = [], s.length && i(() => {
      r(() => {
        s.forEach((u) => {
          n(u);
        });
      });
    });
  };
  return {
    batch: (s) => {
      let u;
      t++;
      try {
        u = s();
      } finally {
        t--, t || a();
      }
      return u;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (s) => (...u) => {
      o(() => {
        s(...u);
      });
    },
    schedule: o,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (s) => {
      n = s;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (s) => {
      r = s;
    },
    setScheduler: (s) => {
      i = s;
    }
  };
}
var De = ng(), sn, ys, yu = (ys = class {
  constructor() {
    Q(this, sn);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Ni(this.gcTime) && W(this, sn, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (hn ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    C(this, sn) && (clearTimeout(C(this, sn)), W(this, sn, void 0));
  }
}, sn = new WeakMap(), ys), Gn, kn, at, un, He, sr, ln, ht, kt, Is, rg = (Is = class extends yu {
  constructor(t) {
    super();
    Q(this, ht);
    Q(this, Gn);
    Q(this, kn);
    Q(this, at);
    Q(this, un);
    Q(this, He);
    Q(this, sr);
    Q(this, ln);
    W(this, ln, !1), W(this, sr, t.defaultOptions), this.setOptions(t.options), this.observers = [], W(this, un, t.client), W(this, at, C(this, un).getQueryCache()), this.queryKey = t.queryKey, this.queryHash = t.queryHash, W(this, Gn, ig(this.options)), this.state = t.state ?? C(this, Gn), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var t;
    return (t = C(this, He)) == null ? void 0 : t.promise;
  }
  setOptions(t) {
    this.options = { ...C(this, sr), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && C(this, at).remove(this);
  }
  setData(t, n) {
    const r = Hi(this.state.data, t, this.options);
    return le(this, ht, kt).call(this, {
      data: r,
      type: "success",
      dataUpdatedAt: n == null ? void 0 : n.updatedAt,
      manual: n == null ? void 0 : n.manual
    }), r;
  }
  setState(t, n) {
    le(this, ht, kt).call(this, { type: "setState", state: t, setStateOptions: n });
  }
  cancel(t) {
    var r, i;
    const n = (r = C(this, He)) == null ? void 0 : r.promise;
    return (i = C(this, He)) == null || i.cancel(t), n ? n.then(st).catch(st) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(C(this, Gn));
  }
  isActive() {
    return this.observers.some(
      (t) => mt(t.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Nr || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (t) => t.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !fu(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = C(this, He)) == null || n.continue();
  }
  onOnline() {
    var n;
    const t = this.observers.find((r) => r.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (n = C(this, He)) == null || n.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), C(this, at).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((n) => n !== t), this.observers.length || (C(this, He) && (C(this, ln) ? C(this, He).cancel({ revert: !0 }) : C(this, He).cancelRetry()), this.scheduleGc()), C(this, at).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || le(this, ht, kt).call(this, { type: "invalidate" });
  }
  fetch(t, n) {
    var u, l, c;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (n != null && n.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (C(this, He))
        return C(this, He).continueRetry(), C(this, He).promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const d = this.observers.find((f) => f.options.queryFn);
      d && this.setOptions(d.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const r = new AbortController(), i = (d) => {
      Object.defineProperty(d, "signal", {
        enumerable: !0,
        get: () => (W(this, ln, !0), r.signal)
      });
    }, o = () => {
      const d = hu(this.options, n), f = {
        client: C(this, un),
        queryKey: this.queryKey,
        meta: this.meta
      };
      return i(f), W(this, ln, !1), this.options.persister ? this.options.persister(
        d,
        f,
        this
      ) : d(f);
    }, a = {
      fetchOptions: n,
      options: this.options,
      queryKey: this.queryKey,
      client: C(this, un),
      state: this.state,
      fetchFn: o
    };
    i(a), (u = this.options.behavior) == null || u.onFetch(
      a,
      this
    ), W(this, kn, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((l = a.fetchOptions) == null ? void 0 : l.meta)) && le(this, ht, kt).call(this, { type: "fetch", meta: (c = a.fetchOptions) == null ? void 0 : c.meta });
    const s = (d) => {
      var f, p, y, m;
      yi(d) && d.silent || le(this, ht, kt).call(this, {
        type: "error",
        error: d
      }), yi(d) || ((p = (f = C(this, at).config).onError) == null || p.call(
        f,
        d,
        this
      ), (m = (y = C(this, at).config).onSettled) == null || m.call(
        y,
        this.state.data,
        d,
        this
      )), this.scheduleGc();
    };
    return W(this, He, bu({
      initialPromise: n == null ? void 0 : n.initialPromise,
      fn: a.fetchFn,
      abort: r.abort.bind(r),
      onSuccess: (d) => {
        var f, p, y, m;
        if (d === void 0) {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), s(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(d);
        } catch (v) {
          s(v);
          return;
        }
        (p = (f = C(this, at).config).onSuccess) == null || p.call(f, d, this), (m = (y = C(this, at).config).onSettled) == null || m.call(
          y,
          d,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: s,
      onFail: (d, f) => {
        le(this, ht, kt).call(this, { type: "failed", failureCount: d, error: f });
      },
      onPause: () => {
        le(this, ht, kt).call(this, { type: "pause" });
      },
      onContinue: () => {
        le(this, ht, kt).call(this, { type: "continue" });
      },
      retry: a.options.retry,
      retryDelay: a.options.retryDelay,
      networkMode: a.options.networkMode,
      canRun: () => !0
    })), C(this, He).start();
  }
}, Gn = new WeakMap(), kn = new WeakMap(), at = new WeakMap(), un = new WeakMap(), He = new WeakMap(), sr = new WeakMap(), ln = new WeakMap(), ht = new WeakSet(), kt = function(t) {
  const n = (r) => {
    switch (t.type) {
      case "failed":
        return {
          ...r,
          fetchFailureCount: t.failureCount,
          fetchFailureReason: t.error
        };
      case "pause":
        return {
          ...r,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...r,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...r,
          ...Iu(r.data, this.options),
          fetchMeta: t.meta ?? null
        };
      case "success":
        return {
          ...r,
          data: t.data,
          dataUpdateCount: r.dataUpdateCount + 1,
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
        const i = t.error;
        return yi(i) && i.revert && C(this, kn) ? { ...C(this, kn), fetchStatus: "idle" } : {
          ...r,
          error: i,
          errorUpdateCount: r.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: r.fetchFailureCount + 1,
          fetchFailureReason: i,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...r,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...r,
          ...t.state
        };
    }
  };
  this.state = n(this.state), De.batch(() => {
    this.observers.forEach((r) => {
      r.onQueryUpdate();
    }), C(this, at).notify({ query: this, type: "updated", action: t });
  });
}, Is);
function Iu(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: gu(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function ig(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, n = t !== void 0, r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var vt, vs, og = (vs = class extends hr {
  constructor(t = {}) {
    super();
    Q(this, vt);
    this.config = t, W(this, vt, /* @__PURE__ */ new Map());
  }
  build(t, n, r) {
    const i = n.queryKey, o = n.queryHash ?? xo(i, n);
    let a = this.get(o);
    return a || (a = new rg({
      client: t,
      queryKey: i,
      queryHash: o,
      options: t.defaultQueryOptions(n),
      state: r,
      defaultOptions: t.getQueryDefaults(i)
    }), this.add(a)), a;
  }
  add(t) {
    C(this, vt).has(t.queryHash) || (C(this, vt).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const n = C(this, vt).get(t.queryHash);
    n && (t.destroy(), n === t && C(this, vt).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    De.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return C(this, vt).get(t);
  }
  getAll() {
    return [...C(this, vt).values()];
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find(
      (r) => Ma(n, r)
    );
  }
  findAll(t = {}) {
    const n = this.getAll();
    return Object.keys(t).length > 0 ? n.filter((r) => Ma(t, r)) : n;
  }
  notify(t) {
    De.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  onFocus() {
    De.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    De.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, vt = new WeakMap(), vs), Ct, Ze, cn, xt, Ht, Cs, ag = (Cs = class extends yu {
  constructor(t) {
    super();
    Q(this, xt);
    Q(this, Ct);
    Q(this, Ze);
    Q(this, cn);
    this.mutationId = t.mutationId, W(this, Ze, t.mutationCache), W(this, Ct, []), this.state = t.state || sg(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    C(this, Ct).includes(t) || (C(this, Ct).push(t), this.clearGcTimeout(), C(this, Ze).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    W(this, Ct, C(this, Ct).filter((n) => n !== t)), this.scheduleGc(), C(this, Ze).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    C(this, Ct).length || (this.state.status === "pending" ? this.scheduleGc() : C(this, Ze).remove(this));
  }
  continue() {
    var t;
    return ((t = C(this, cn)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var o, a, s, u, l, c, d, f, p, y, m, v, I, E, S, P, T, A, D, w;
    const n = () => {
      le(this, xt, Ht).call(this, { type: "continue" });
    };
    W(this, cn, bu({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (O, G) => {
        le(this, xt, Ht).call(this, { type: "failed", failureCount: O, error: G });
      },
      onPause: () => {
        le(this, xt, Ht).call(this, { type: "pause" });
      },
      onContinue: n,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => C(this, Ze).canRun(this)
    }));
    const r = this.state.status === "pending", i = !C(this, cn).canStart();
    try {
      if (r)
        n();
      else {
        le(this, xt, Ht).call(this, { type: "pending", variables: t, isPaused: i }), await ((a = (o = C(this, Ze).config).onMutate) == null ? void 0 : a.call(
          o,
          t,
          this
        ));
        const G = await ((u = (s = this.options).onMutate) == null ? void 0 : u.call(s, t));
        G !== this.state.context && le(this, xt, Ht).call(this, {
          type: "pending",
          context: G,
          variables: t,
          isPaused: i
        });
      }
      const O = await C(this, cn).start();
      return await ((c = (l = C(this, Ze).config).onSuccess) == null ? void 0 : c.call(
        l,
        O,
        t,
        this.state.context,
        this
      )), await ((f = (d = this.options).onSuccess) == null ? void 0 : f.call(d, O, t, this.state.context)), await ((y = (p = C(this, Ze).config).onSettled) == null ? void 0 : y.call(
        p,
        O,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((v = (m = this.options).onSettled) == null ? void 0 : v.call(m, O, null, t, this.state.context)), le(this, xt, Ht).call(this, { type: "success", data: O }), O;
    } catch (O) {
      try {
        throw await ((E = (I = C(this, Ze).config).onError) == null ? void 0 : E.call(
          I,
          O,
          t,
          this.state.context,
          this
        )), await ((P = (S = this.options).onError) == null ? void 0 : P.call(
          S,
          O,
          t,
          this.state.context
        )), await ((A = (T = C(this, Ze).config).onSettled) == null ? void 0 : A.call(
          T,
          void 0,
          O,
          this.state.variables,
          this.state.context,
          this
        )), await ((w = (D = this.options).onSettled) == null ? void 0 : w.call(
          D,
          void 0,
          O,
          t,
          this.state.context
        )), O;
      } finally {
        le(this, xt, Ht).call(this, { type: "error", error: O });
      }
    } finally {
      C(this, Ze).runNext(this);
    }
  }
}, Ct = new WeakMap(), Ze = new WeakMap(), cn = new WeakMap(), xt = new WeakSet(), Ht = function(t) {
  const n = (r) => {
    switch (t.type) {
      case "failed":
        return {
          ...r,
          failureCount: t.failureCount,
          failureReason: t.error
        };
      case "pause":
        return {
          ...r,
          isPaused: !0
        };
      case "continue":
        return {
          ...r,
          isPaused: !1
        };
      case "pending":
        return {
          ...r,
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
          ...r,
          data: t.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...r,
          data: void 0,
          error: t.error,
          failureCount: r.failureCount + 1,
          failureReason: t.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = n(this.state), De.batch(() => {
    C(this, Ct).forEach((r) => {
      r.onMutationUpdate(t);
    }), C(this, Ze).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, Cs);
function sg() {
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
var Rt, gt, ur, xs, ug = (xs = class extends hr {
  constructor(t = {}) {
    super();
    Q(this, Rt);
    Q(this, gt);
    Q(this, ur);
    this.config = t, W(this, Rt, /* @__PURE__ */ new Set()), W(this, gt, /* @__PURE__ */ new Map()), W(this, ur, 0);
  }
  build(t, n, r) {
    const i = new ag({
      mutationCache: this,
      mutationId: ++xr(this, ur)._,
      options: t.defaultMutationOptions(n),
      state: r
    });
    return this.add(i), i;
  }
  add(t) {
    C(this, Rt).add(t);
    const n = Er(t);
    if (typeof n == "string") {
      const r = C(this, gt).get(n);
      r ? r.push(t) : C(this, gt).set(n, [t]);
    }
    this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    if (C(this, Rt).delete(t)) {
      const n = Er(t);
      if (typeof n == "string") {
        const r = C(this, gt).get(n);
        if (r)
          if (r.length > 1) {
            const i = r.indexOf(t);
            i !== -1 && r.splice(i, 1);
          } else r[0] === t && C(this, gt).delete(n);
      }
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    const n = Er(t);
    if (typeof n == "string") {
      const r = C(this, gt).get(n), i = r == null ? void 0 : r.find(
        (o) => o.state.status === "pending"
      );
      return !i || i === t;
    } else
      return !0;
  }
  runNext(t) {
    var r;
    const n = Er(t);
    if (typeof n == "string") {
      const i = (r = C(this, gt).get(n)) == null ? void 0 : r.find((o) => o !== t && o.state.isPaused);
      return (i == null ? void 0 : i.continue()) ?? Promise.resolve();
    } else
      return Promise.resolve();
  }
  clear() {
    De.batch(() => {
      C(this, Rt).forEach((t) => {
        this.notify({ type: "removed", mutation: t });
      }), C(this, Rt).clear(), C(this, gt).clear();
    });
  }
  getAll() {
    return Array.from(C(this, Rt));
  }
  find(t) {
    const n = { exact: !0, ...t };
    return this.getAll().find(
      (r) => La(n, r)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((n) => La(t, n));
  }
  notify(t) {
    De.batch(() => {
      this.listeners.forEach((n) => {
        n(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((n) => n.state.isPaused);
    return De.batch(
      () => Promise.all(
        t.map((n) => n.continue().catch(st))
      )
    );
  }
}, Rt = new WeakMap(), gt = new WeakMap(), ur = new WeakMap(), xs);
function Er(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function za(e) {
  return {
    onFetch: (t, n) => {
      var c, d, f, p, y;
      const r = t.options, i = (f = (d = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : f.direction, o = ((p = t.state.data) == null ? void 0 : p.pages) || [], a = ((y = t.state.data) == null ? void 0 : y.pageParams) || [];
      let s = { pages: [], pageParams: [] }, u = 0;
      const l = async () => {
        let m = !1;
        const v = (S) => {
          Object.defineProperty(S, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? m = !0 : t.signal.addEventListener("abort", () => {
              m = !0;
            }), t.signal)
          });
        }, I = hu(t.options, t.fetchOptions), E = async (S, P, T) => {
          if (m)
            return Promise.reject();
          if (P == null && S.pages.length)
            return Promise.resolve(S);
          const A = {
            client: t.client,
            queryKey: t.queryKey,
            pageParam: P,
            direction: T ? "backward" : "forward",
            meta: t.options.meta
          };
          v(A);
          const D = await I(
            A
          ), { maxPages: w } = t.options, O = T ? qh : Qh;
          return {
            pages: O(S.pages, D, w),
            pageParams: O(S.pageParams, P, w)
          };
        };
        if (i && o.length) {
          const S = i === "backward", P = S ? lg : Wa, T = {
            pages: o,
            pageParams: a
          }, A = P(r, T);
          s = await E(T, A, S);
        } else {
          const S = e ?? o.length;
          do {
            const P = u === 0 ? a[0] ?? r.initialPageParam : Wa(r, s);
            if (u > 0 && P == null)
              break;
            s = await E(s, P), u++;
          } while (u < S);
        }
        return s;
      };
      t.options.persister ? t.fetchFn = () => {
        var m, v;
        return (v = (m = t.options).persister) == null ? void 0 : v.call(
          m,
          l,
          {
            client: t.client,
            queryKey: t.queryKey,
            meta: t.options.meta,
            signal: t.signal
          },
          n
        );
      } : t.fetchFn = l;
    }
  };
}
function Wa(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[r],
    t,
    n[r],
    n
  ) : void 0;
}
function lg(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n) : void 0;
}
var Ge, Zt, jt, Rn, Bn, Jt, On, Tn, As, cg = (As = class {
  constructor(e = {}) {
    Q(this, Ge);
    Q(this, Zt);
    Q(this, jt);
    Q(this, Rn);
    Q(this, Bn);
    Q(this, Jt);
    Q(this, On);
    Q(this, Tn);
    W(this, Ge, e.queryCache || new og()), W(this, Zt, e.mutationCache || new ug()), W(this, jt, e.defaultOptions || {}), W(this, Rn, /* @__PURE__ */ new Map()), W(this, Bn, /* @__PURE__ */ new Map()), W(this, Jt, 0);
  }
  mount() {
    xr(this, Jt)._++, C(this, Jt) === 1 && (W(this, On, Ao.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), C(this, Ge).onFocus());
    })), W(this, Tn, Mr.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), C(this, Ge).onOnline());
    })));
  }
  unmount() {
    var e, t;
    xr(this, Jt)._--, C(this, Jt) === 0 && ((e = C(this, On)) == null || e.call(this), W(this, On, void 0), (t = C(this, Tn)) == null || t.call(this), W(this, Tn, void 0));
  }
  isFetching(e) {
    return C(this, Ge).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return C(this, Zt).findAll({ ...e, status: "pending" }).length;
  }
  /**
   * Imperative (non-reactive) way to retrieve data for a QueryKey.
   * Should only be used in callbacks or functions where reading the latest data is necessary, e.g. for optimistic updates.
   *
   * Hint: Do not use this function inside a component, because it won't receive updates.
   * Use `useQuery` to create a `QueryObserver` that subscribes to changes.
   */
  getQueryData(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = C(this, Ge).get(t.queryHash)) == null ? void 0 : n.state.data;
  }
  ensureQueryData(e) {
    const t = this.defaultQueryOptions(e), n = C(this, Ge).build(this, t), r = n.state.data;
    return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(Sn(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r));
  }
  getQueriesData(e) {
    return C(this, Ge).findAll(e).map(({ queryKey: t, state: n }) => {
      const r = n.data;
      return [t, r];
    });
  }
  setQueryData(e, t, n) {
    const r = this.defaultQueryOptions({ queryKey: e }), i = C(this, Ge).get(
      r.queryHash
    ), o = i == null ? void 0 : i.state.data, a = _h(t, o);
    if (a !== void 0)
      return C(this, Ge).build(this, r).setData(a, { ...n, manual: !0 });
  }
  setQueriesData(e, t, n) {
    return De.batch(
      () => C(this, Ge).findAll(e).map(({ queryKey: r }) => [
        r,
        this.setQueryData(r, t, n)
      ])
    );
  }
  getQueryState(e) {
    var n;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (n = C(this, Ge).get(
      t.queryHash
    )) == null ? void 0 : n.state;
  }
  removeQueries(e) {
    const t = C(this, Ge);
    De.batch(() => {
      t.findAll(e).forEach((n) => {
        t.remove(n);
      });
    });
  }
  resetQueries(e, t) {
    const n = C(this, Ge);
    return De.batch(() => (n.findAll(e).forEach((r) => {
      r.reset();
    }), this.refetchQueries(
      {
        type: "active",
        ...e
      },
      t
    )));
  }
  cancelQueries(e, t = {}) {
    const n = { revert: !0, ...t }, r = De.batch(
      () => C(this, Ge).findAll(e).map((i) => i.cancel(n))
    );
    return Promise.all(r).then(st).catch(st);
  }
  invalidateQueries(e, t = {}) {
    return De.batch(() => (C(this, Ge).findAll(e).forEach((n) => {
      n.invalidate();
    }), (e == null ? void 0 : e.refetchType) === "none" ? Promise.resolve() : this.refetchQueries(
      {
        ...e,
        type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
      },
      t
    )));
  }
  refetchQueries(e, t = {}) {
    const n = {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }, r = De.batch(
      () => C(this, Ge).findAll(e).filter((i) => !i.isDisabled()).map((i) => {
        let o = i.fetch(void 0, n);
        return n.throwOnError || (o = o.catch(st)), i.state.fetchStatus === "paused" ? Promise.resolve() : o;
      })
    );
    return Promise.all(r).then(st);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const n = C(this, Ge).build(this, t);
    return n.isStaleByTime(
      Sn(t.staleTime, n)
    ) ? n.fetch(t) : Promise.resolve(n.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(st).catch(st);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = za(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(st).catch(st);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = za(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return Mr.isOnline() ? C(this, Zt).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return C(this, Ge);
  }
  getMutationCache() {
    return C(this, Zt);
  }
  getDefaultOptions() {
    return C(this, jt);
  }
  setDefaultOptions(e) {
    W(this, jt, e);
  }
  setQueryDefaults(e, t) {
    C(this, Rn).set(or(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...C(this, Rn).values()], n = {};
    return t.forEach((r) => {
      ar(e, r.queryKey) && Object.assign(n, r.defaultOptions);
    }), n;
  }
  setMutationDefaults(e, t) {
    C(this, Bn).set(or(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...C(this, Bn).values()], n = {};
    return t.forEach((r) => {
      ar(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
    }), n;
  }
  defaultQueryOptions(e) {
    if (e._defaulted)
      return e;
    const t = {
      ...C(this, jt).queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = xo(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === Nr && (t.enabled = !1), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...C(this, jt).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    C(this, Ge).clear(), C(this, Zt).clear();
  }
}, Ge = new WeakMap(), Zt = new WeakMap(), jt = new WeakMap(), Rn = new WeakMap(), Bn = new WeakMap(), Jt = new WeakMap(), On = new WeakMap(), Tn = new WeakMap(), As), Ue, ce, lr, je, dn, Vn, Yt, _t, cr, Dn, Nn, pn, fn, Ut, Mn, be, qn, Wi, Zi, ji, Ji, Yi, _i, Ui, vu, Ss, dg = (Ss = class extends hr {
  constructor(t, n) {
    super();
    Q(this, be);
    Q(this, Ue);
    Q(this, ce);
    Q(this, lr);
    Q(this, je);
    Q(this, dn);
    Q(this, Vn);
    Q(this, Yt);
    Q(this, _t);
    Q(this, cr);
    Q(this, Dn);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    Q(this, Nn);
    Q(this, pn);
    Q(this, fn);
    Q(this, Ut);
    Q(this, Mn, /* @__PURE__ */ new Set());
    this.options = n, W(this, Ue, t), W(this, _t, null), W(this, Yt, zi()), this.options.experimental_prefetchInRender || C(this, Yt).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(n);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (C(this, ce).addObserver(this), Za(C(this, ce), this.options) ? le(this, be, qn).call(this) : this.updateResult(), le(this, be, Ji).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Qi(
      C(this, ce),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Qi(
      C(this, ce),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), le(this, be, Yi).call(this), le(this, be, _i).call(this), C(this, ce).removeObserver(this);
  }
  setOptions(t) {
    const n = this.options, r = C(this, ce);
    if (this.options = C(this, Ue).defaultQueryOptions(t), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof mt(this.options.enabled, C(this, ce)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    le(this, be, Ui).call(this), C(this, ce).setOptions(this.options), n._defaulted && !Li(this.options, n) && C(this, Ue).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: C(this, ce),
      observer: this
    });
    const i = this.hasListeners();
    i && ja(
      C(this, ce),
      r,
      this.options,
      n
    ) && le(this, be, qn).call(this), this.updateResult(), i && (C(this, ce) !== r || mt(this.options.enabled, C(this, ce)) !== mt(n.enabled, C(this, ce)) || Sn(this.options.staleTime, C(this, ce)) !== Sn(n.staleTime, C(this, ce))) && le(this, be, Wi).call(this);
    const o = le(this, be, Zi).call(this);
    i && (C(this, ce) !== r || mt(this.options.enabled, C(this, ce)) !== mt(n.enabled, C(this, ce)) || o !== C(this, Ut)) && le(this, be, ji).call(this, o);
  }
  getOptimisticResult(t) {
    const n = C(this, Ue).getQueryCache().build(C(this, Ue), t), r = this.createResult(n, t);
    return fg(this, r) && (W(this, je, r), W(this, Vn, this.options), W(this, dn, C(this, ce).state)), r;
  }
  getCurrentResult() {
    return C(this, je);
  }
  trackResult(t, n) {
    return new Proxy(t, {
      get: (r, i) => (this.trackProp(i), n == null || n(i), Reflect.get(r, i))
    });
  }
  trackProp(t) {
    C(this, Mn).add(t);
  }
  getCurrentQuery() {
    return C(this, ce);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const n = C(this, Ue).defaultQueryOptions(t), r = C(this, Ue).getQueryCache().build(C(this, Ue), n);
    return r.fetch().then(() => this.createResult(r, n));
  }
  fetch(t) {
    return le(this, be, qn).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), C(this, je)));
  }
  createResult(t, n) {
    var O;
    const r = C(this, ce), i = this.options, o = C(this, je), a = C(this, dn), s = C(this, Vn), l = t !== r ? t.state : C(this, lr), { state: c } = t;
    let d = { ...c }, f = !1, p;
    if (n._optimisticResults) {
      const G = this.hasListeners(), B = !G && Za(t, n), R = G && ja(t, r, n, i);
      (B || R) && (d = {
        ...d,
        ...Iu(c.data, t.options)
      }), n._optimisticResults === "isRestoring" && (d.fetchStatus = "idle");
    }
    let { error: y, errorUpdatedAt: m, status: v } = d;
    p = d.data;
    let I = !1;
    if (n.placeholderData !== void 0 && p === void 0 && v === "pending") {
      let G;
      o != null && o.isPlaceholderData && n.placeholderData === (s == null ? void 0 : s.placeholderData) ? (G = o.data, I = !0) : G = typeof n.placeholderData == "function" ? n.placeholderData(
        (O = C(this, Nn)) == null ? void 0 : O.state.data,
        C(this, Nn)
      ) : n.placeholderData, G !== void 0 && (v = "success", p = Hi(
        o == null ? void 0 : o.data,
        G,
        n
      ), f = !0);
    }
    if (n.select && p !== void 0 && !I)
      if (o && p === (a == null ? void 0 : a.data) && n.select === C(this, cr))
        p = C(this, Dn);
      else
        try {
          W(this, cr, n.select), p = n.select(p), p = Hi(o == null ? void 0 : o.data, p, n), W(this, Dn, p), W(this, _t, null);
        } catch (G) {
          W(this, _t, G);
        }
    C(this, _t) && (y = C(this, _t), p = C(this, Dn), m = Date.now(), v = "error");
    const E = d.fetchStatus === "fetching", S = v === "pending", P = v === "error", T = S && E, A = p !== void 0, w = {
      status: v,
      fetchStatus: d.fetchStatus,
      isPending: S,
      isSuccess: v === "success",
      isError: P,
      isInitialLoading: T,
      isLoading: T,
      data: p,
      dataUpdatedAt: d.dataUpdatedAt,
      error: y,
      errorUpdatedAt: m,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
      isFetchedAfterMount: d.dataUpdateCount > l.dataUpdateCount || d.errorUpdateCount > l.errorUpdateCount,
      isFetching: E,
      isRefetching: E && !S,
      isLoadingError: P && !A,
      isPaused: d.fetchStatus === "paused",
      isPlaceholderData: f,
      isRefetchError: P && A,
      isStale: So(t, n),
      refetch: this.refetch,
      promise: C(this, Yt)
    };
    if (this.options.experimental_prefetchInRender) {
      const G = (j) => {
        w.status === "error" ? j.reject(w.error) : w.data !== void 0 && j.resolve(w.data);
      }, B = () => {
        const j = W(this, Yt, w.promise = zi());
        G(j);
      }, R = C(this, Yt);
      switch (R.status) {
        case "pending":
          t.queryHash === r.queryHash && G(R);
          break;
        case "fulfilled":
          (w.status === "error" || w.data !== R.value) && B();
          break;
        case "rejected":
          (w.status !== "error" || w.error !== R.reason) && B();
          break;
      }
    }
    return w;
  }
  updateResult() {
    const t = C(this, je), n = this.createResult(C(this, ce), this.options);
    if (W(this, dn, C(this, ce).state), W(this, Vn, this.options), C(this, dn).data !== void 0 && W(this, Nn, C(this, ce)), Li(n, t))
      return;
    W(this, je, n);
    const r = () => {
      if (!t)
        return !0;
      const { notifyOnChangeProps: i } = this.options, o = typeof i == "function" ? i() : i;
      if (o === "all" || !o && !C(this, Mn).size)
        return !0;
      const a = new Set(
        o ?? C(this, Mn)
      );
      return this.options.throwOnError && a.add("error"), Object.keys(C(this, je)).some((s) => {
        const u = s;
        return C(this, je)[u] !== t[u] && a.has(u);
      });
    };
    le(this, be, vu).call(this, { listeners: r() });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && le(this, be, Ji).call(this);
  }
}, Ue = new WeakMap(), ce = new WeakMap(), lr = new WeakMap(), je = new WeakMap(), dn = new WeakMap(), Vn = new WeakMap(), Yt = new WeakMap(), _t = new WeakMap(), cr = new WeakMap(), Dn = new WeakMap(), Nn = new WeakMap(), pn = new WeakMap(), fn = new WeakMap(), Ut = new WeakMap(), Mn = new WeakMap(), be = new WeakSet(), qn = function(t) {
  le(this, be, Ui).call(this);
  let n = C(this, ce).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (n = n.catch(st)), n;
}, Wi = function() {
  le(this, be, Yi).call(this);
  const t = Sn(
    this.options.staleTime,
    C(this, ce)
  );
  if (hn || C(this, je).isStale || !Ni(t))
    return;
  const r = fu(C(this, je).dataUpdatedAt, t) + 1;
  W(this, pn, setTimeout(() => {
    C(this, je).isStale || this.updateResult();
  }, r));
}, Zi = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(C(this, ce)) : this.options.refetchInterval) ?? !1;
}, ji = function(t) {
  le(this, be, _i).call(this), W(this, Ut, t), !(hn || mt(this.options.enabled, C(this, ce)) === !1 || !Ni(C(this, Ut)) || C(this, Ut) === 0) && W(this, fn, setInterval(() => {
    (this.options.refetchIntervalInBackground || Ao.isFocused()) && le(this, be, qn).call(this);
  }, C(this, Ut)));
}, Ji = function() {
  le(this, be, Wi).call(this), le(this, be, ji).call(this, le(this, be, Zi).call(this));
}, Yi = function() {
  C(this, pn) && (clearTimeout(C(this, pn)), W(this, pn, void 0));
}, _i = function() {
  C(this, fn) && (clearInterval(C(this, fn)), W(this, fn, void 0));
}, Ui = function() {
  const t = C(this, Ue).getQueryCache().build(C(this, Ue), this.options);
  if (t === C(this, ce))
    return;
  const n = C(this, ce);
  W(this, ce, t), W(this, lr, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this));
}, vu = function(t) {
  De.batch(() => {
    t.listeners && this.listeners.forEach((n) => {
      n(C(this, je));
    }), C(this, Ue).getQueryCache().notify({
      query: C(this, ce),
      type: "observerResultsUpdated"
    });
  });
}, Ss);
function pg(e, t) {
  return mt(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function Za(e, t) {
  return pg(e, t) || e.state.data !== void 0 && Qi(e, t, t.refetchOnMount);
}
function Qi(e, t, n) {
  if (mt(t.enabled, e) !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || r !== !1 && So(e, t);
  }
  return !1;
}
function ja(e, t, n, r) {
  return (e !== t || mt(r.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && So(e, n);
}
function So(e, t) {
  return mt(t.enabled, e) !== !1 && e.isStaleByTime(Sn(t.staleTime, e));
}
function fg(e, t) {
  return !Li(e.getCurrentResult(), t);
}
var Cu = ee.createContext(
  void 0
), hg = (e) => {
  const t = ee.useContext(Cu);
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, gg = ({
  client: e,
  children: t
}) => (ee.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ X(Cu.Provider, { value: e, children: t })), xu = ee.createContext(!1), mg = () => ee.useContext(xu);
xu.Provider;
function bg() {
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
var yg = ee.createContext(bg()), Ig = () => ee.useContext(yg);
function vg(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
function Ja() {
}
var Cg = (e, t) => {
  (e.suspense || e.throwOnError || e.experimental_prefetchInRender) && (t.isReset() || (e.retryOnMount = !1));
}, xg = (e) => {
  ee.useEffect(() => {
    e.clearReset();
  }, [e]);
}, Ag = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: n,
  query: r,
  suspense: i
}) => e.isError && !t.isReset() && !e.isFetching && r && (i && e.data === void 0 || vg(n, [e.error, r])), Sg = (e) => {
  const t = e.staleTime;
  e.suspense && (e.staleTime = typeof t == "function" ? (...n) => Math.max(t(...n), 1e3) : Math.max(t ?? 1e3, 1e3), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, 1e3)));
}, wg = (e, t) => e.isLoading && e.isFetching && !t, Eg = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, Ya = (e, t, n) => t.fetchOptimistic(e).catch(() => {
  n.clearReset();
});
function Fg(e, t, n) {
  var d, f, p, y, m;
  if (process.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const r = hg(), i = mg(), o = Ig(), a = r.defaultQueryOptions(e);
  (f = (d = r.getDefaultOptions().queries) == null ? void 0 : d._experimental_beforeQuery) == null || f.call(
    d,
    a
  ), process.env.NODE_ENV !== "production" && (a.queryFn || console.error(
    `[${a.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`
  )), a._optimisticResults = i ? "isRestoring" : "optimistic", Sg(a), Cg(a, o), xg(o);
  const s = !r.getQueryCache().get(a.queryHash), [u] = ee.useState(
    () => new t(
      r,
      a
    )
  ), l = u.getOptimisticResult(a), c = !i && e.subscribed !== !1;
  if (ee.useSyncExternalStore(
    ee.useCallback(
      (v) => {
        const I = c ? u.subscribe(De.batchCalls(v)) : Ja;
        return u.updateResult(), I;
      },
      [u, c]
    ),
    () => u.getCurrentResult(),
    () => u.getCurrentResult()
  ), ee.useEffect(() => {
    u.setOptions(a);
  }, [a, u]), Eg(a, l))
    throw Ya(a, u, o);
  if (Ag({
    result: l,
    errorResetBoundary: o,
    throwOnError: a.throwOnError,
    query: r.getQueryCache().get(a.queryHash),
    suspense: a.suspense
  }))
    throw l.error;
  if ((y = (p = r.getDefaultOptions().queries) == null ? void 0 : p._experimental_afterQuery) == null || y.call(
    p,
    a,
    l
  ), a.experimental_prefetchInRender && !hn && wg(l, i)) {
    const v = s ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      Ya(a, u, o)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (m = r.getQueryCache().get(a.queryHash)) == null ? void 0 : m.promise
    );
    v == null || v.catch(Ja).finally(() => {
      u.updateResult();
    });
  }
  return a.notifyOnChangeProps ? l : u.trackResult(l);
}
function bn(e, t) {
  return Fg(e, dg);
}
const Au = dr(
  void 0
), $t = () => {
  const e = Ln(Au);
  if (!e)
    throw new Error("Must be used inside FrontendClientProvider");
  return e;
}, dI = ({
  children: e,
  client: t
}) => {
  const n = new cg({
    defaultOptions: {
      queries: {
        staleTime: 36e5,
        refetchOnWindowFocus: !1
      }
    }
  });
  return /* @__PURE__ */ X(gg, { client: n, children: /* @__PURE__ */ X(Au.Provider, { value: t, children: e }) });
};
function Su(e) {
  return typeof e == "object" && e && "__lv" in e ? e.__lv.value : e;
}
function Pg(e) {
  if (typeof e == "object" && e && "selectedOptions" in e && Array.isArray(e.selectedOptions)) {
    const t = e.selectedOptions, n = [];
    for (const r of t)
      if (typeof r == "object" && r && "emitValue" in r) {
        const i = r.emitValue;
        typeof i == "object" && i && "__lv" in i ? n.push(i.__lv.value) : n.push(i);
      } else
        return [];
    return n;
  }
  return e && typeof e == "object" && Array.isArray(e.__lv) ? e.__lv : Array.isArray(e) ? e : [];
}
function Gg(e) {
  const t = Pg(e.value);
  if (!e.prop.default && typeof t > "u")
    return [
      "required"
    ];
  if (!e.prop.default && Array.isArray(t) && !t.length) return [
    "empty array"
  ];
}
function kg(e) {
  const t = Su(e.value);
  if (t == null || typeof t > "u") return [
    "required"
  ];
}
function Rg(e) {
  const {
    prop: t,
    value: n
  } = e, r = Su(n);
  if (!t.default && (r == null || typeof r > "u")) return [
    "required"
  ];
  const i = typeof r == "number" ? r : parseInt(String(r));
  if (Number.isNaN(i)) return [
    "not a number"
  ];
  const o = [];
  return typeof t.min == "number" && i < t.min && o.push("number too small"), typeof t.max == "number" && i > t.max && o.push("number too big"), o;
}
function Bg(e) {
  const {
    prop: t,
    value: n
  } = e;
  if (!t.default && (n == null || typeof n > "u")) return [
    "required"
  ];
}
function Og(e) {
  const t = e.auth_type === "oauth", n = JSON.parse(e.custom_fields_json || "[]");
  if ("extracted_custom_fields_names" in e && e.extracted_custom_fields_names) {
    const r = (e.extracted_custom_fields_names || []).map(
      (i) => ({
        name: i
      })
    );
    n.push(...r);
  }
  return n.map((r) => ({
    ...r,
    // if oauth, treat all as optional (they are usually needed for getting access token)
    optional: r.optional || t
  }));
}
function Tg(e) {
  const {
    app: t,
    value: n
  } = e;
  if (!t)
    return [
      "app field not registered"
    ];
  if (!n)
    return [
      "no app configured"
    ];
  if (typeof n != "object")
    return [
      "not an app"
    ];
  const r = n;
  if ("authProvisionId" in r && !r.authProvisionId && t.auth_type) {
    const i = [];
    if (t.auth_type === "oauth" && !r.oauth_access_token && i.push("missing oauth token"), t.auth_type === "oauth" || t.auth_type === "keys") {
      const o = Og(t), a = r;
      for (const s of o)
        !s.optional && !a[s.name] && i.push(`missing custom field: ${s.name}`);
    }
    return t.auth_type !== "none" && i.push("no auth provision configured"), i;
  }
}
const Br = [
  "$.service.db",
  "$.interface.http",
  "$.interface.apphook",
  "$.interface.timer"
  // TODO add support for this (cron string and timers)
], wu = dr(void 0), wo = () => {
  const e = Ln(wu);
  if (!e)
    throw new Error("Must be used inside provider");
  return e;
}, Vg = ({
  children: e,
  props: t
}) => {
  const n = $t(), r = io(), {
    component: i,
    configuredProps: o,
    propNames: a,
    userId: s,
    sdkResponse: u,
    enableDebugging: l
  } = t, c = i.key, [
    d,
    f
  ] = Ie(0), [
    p,
    y
  ] = Ie({}), [
    m,
    v
  ] = Ie(!1), [
    I,
    E
  ] = Ie({}), [
    S,
    P
  ] = Ie([]), [
    T,
    A
  ] = Ie({});
  et(() => {
    A({});
  }, [
    i.key
  ]);
  const D = (M) => T[M.name];
  let w = o || {};
  const [
    O,
    G
  ] = Ie(w), B = t.onUpdateConfiguredProps || G;
  t.onUpdateConfiguredProps || (w = O);
  const [
    R,
    j
  ] = Ie(), [
    te,
    L
  ] = Ie(), Y = {
    userId: s,
    componentId: c,
    configuredProps: w,
    dynamicPropsId: R == null ? void 0 : R.id
  }, se = {
    ...Y
  }, {
    isFetching: de
    // TODO error
  } = bn({
    queryKey: [
      "dynamicProps",
      se
    ],
    queryFn: async () => {
      var Be;
      const M = await n.reloadComponentProps(Y), {
        dynamicProps: z,
        observations: U,
        errors: ge
      } = M;
      return U && U.filter((Me) => Me.k === "error").length > 0 ? rt(U) : rt(ge), z && ((Be = t.onUpdateDynamicProps) == null || Be.call(t, z), j(z)), L(void 0), [];
    },
    enabled: te != null
    // TODO or props.dynamicPropsId && !dynamicProps
  }), [
    ye,
    b
  ] = Ie([]);
  et(() => {
    Je();
  }, [
    w
  ]);
  let ue = (R == null ? void 0 : R.configurableProps) || t.component.configurable_props || [];
  if (a != null && a.length) {
    const M = [];
    for (const z of ue)
      a.findIndex((U) => z.name === U) >= 0 && M.push(z);
    ue = M;
  }
  te != null && (ue = ue.slice(0, te + 1));
  const ie = (M, z) => {
    const U = [];
    if (M.optional || M.hidden || M.disabled || Br.includes(M.type)) return [];
    if (M.type === "app") {
      const ge = p[M.name];
      if (ge) {
        const Be = ge.extra.app;
        U.push(...Tg({
          value: z,
          app: Be
        }) ?? []);
      } else
        U.push("field not registered");
    } else M.type === "boolean" ? U.push(...kg({
      value: z
    }) ?? []) : M.type === "integer" ? U.push(...Rg({
      prop: M,
      value: z
    }) ?? []) : M.type === "string" ? U.push(...Bg({
      prop: M,
      value: z
    }) ?? []) : M.type === "string[]" && U.push(...Gg({
      prop: M,
      value: z
    }) ?? []);
    return U;
  }, g = (M) => {
    let z;
    for (let U = 0; U < ue.length; U++) {
      const ge = ue[U];
      if (ge.hidden || ge.optional && !D(ge))
        continue;
      if (M[ge.name] === void 0 && z == null && (ge.type === "app" || ge.remoteOptions)) {
        z = U;
        break;
      }
    }
    f(z);
  }, he = (M) => {
    B(M), g(M), K(M);
  }, K = (M) => {
    const z = {};
    for (let U = 0; U < ue.length; U++) {
      const ge = ue[U], Be = M[ge.name], Me = ie(ge, Be);
      Me.length && (z[ge.name] = Me);
    }
    E(z);
  };
  et(() => {
    g(O);
  }, [
    O
  ]), et(() => {
    K(w);
  }, [
    w,
    te,
    d
  ]), et(() => {
    rt(u);
  }, [
    u
  ]), et(() => {
    const M = {};
    for (const z of ue) {
      if (z.hidden || Br.includes(z.type) || z.optional && !D(z))
        continue;
      const U = w[z.name];
      U === void 0 ? "default" in z && z.default != null && (M[z.name] = z.default) : z.type === "integer" && typeof U != "number" ? delete M[z.name] : M[z.name] = U;
    }
    Na(M, w) || he(M);
  }, [
    ue
  ]);
  const [
    pe,
    Oe
  ] = Ie(s);
  et(() => {
    pe !== s && (he({}), Oe(s));
  }, [
    s
  ]);
  const fe = (M, z) => {
    const U = ue[M], ge = {
      ...w
    };
    z === void 0 ? delete ge[U.name] : ge[U.name] = z, B(ge), U.reloadProps && L(M), (U.type === "app" || U.remoteOptions) && g(ge);
    const Be = ie(U, z), Me = {
      ...I
    };
    Be.length ? Me[U.name] = Be : delete Me[U.name], E(Me);
  }, Ne = (M, z) => {
    const U = {
      ...T
    };
    z ? U[M.name] = !0 : delete U[M.name];
    const ge = ue.findIndex((Be) => Be.name === M.name);
    z ? (o == null ? void 0 : o[M.name]) !== void 0 ? fe(
      ge,
      o[M.name]
    ) : "default" in M && M.default != null && fe(ge, M.default) : fe(ge, void 0), A(U);
  }, Je = () => {
    const M = [];
    for (const z of ue) {
      if (!z || z.optional || z.hidden || Br.includes(z.type)) continue;
      const U = w[z.name];
      ie(z, U).length && M.push(z.name);
    }
    M && ye && Na(M, ye) || b(M);
  }, nt = (M) => {
    y((z) => (z[M.prop.name] = M, z)), Je();
  }, rt = (M) => {
    if (!M) return;
    let z = [
      ...S
    ];
    const U = (Ee, ve) => {
      try {
        const Se = JSON.parse(Ee), we = {
          name: Se.name,
          message: Se.message
        };
        we.name && we.message && ve.push(we);
      } catch {
      }
    }, ge = (Ee, ve) => {
      const Se = {
        name: Ee.name,
        message: Ee.message
      };
      Se.name && Se.message && ve.push(Se);
    }, Be = (Ee, ve) => {
      var we, F;
      const Se = {
        name: (we = Ee.err) == null ? void 0 : we.name,
        message: (F = Ee.err) == null ? void 0 : F.message
      };
      Se.name && Se.message && ve.push(Se);
    }, Me = (Ee, ve) => {
      const Se = Ee.os || Ee.observations;
      if (Array.isArray(Se) && Se.length > 0)
        for (let we = 0; we < Se.length; we++)
          Se[we].k === "error" && Be(Se[we], ve);
    }, yn = (Ee, ve) => {
      ve.push({
        name: Ee.error,
        message: JSON.stringify(Ee.details)
        //     message: ` // TODO: It would be nice to render the JSON in markdown
        // \`\`\`json
        // ${JSON.stringify(data.details)}
        // \`\`\`
        // `,
        //   })
      });
    }, Wn = (Ee, ve) => {
      var Se;
      try {
        const we = (Se = JSON.parse(Ee.message)) == null ? void 0 : Se.data;
        we && "observations" in we ? Me(we, ve) : we && "error" in we && "details" in we && yn(we, ve);
      } catch {
      }
    };
    if (Array.isArray(M) && M.length > 0)
      for (let Ee = 0; Ee < M.length; Ee++) {
        const ve = M[Ee];
        typeof ve == "string" ? U(ve, z) : typeof ve == "object" && "name" in ve && "message" in ve ? ge(ve, z) : typeof ve == "object" && ve.k === "error" && Be(ve, z);
      }
    else typeof M == "object" && "os" in M || "observations" in M ? Me(M, z) : typeof M == "object" && "message" in M ? Wn(M, z) : z = [];
    P(z);
  }, Vt = {
    id: r,
    isValid: !Object.keys(I).length,
    // XXX want to expose more from errors
    props: t,
    userId: s,
    component: i,
    configurableProps: ue,
    configuredProps: w,
    dynamicProps: R,
    dynamicPropsQueryIsFetching: de,
    errors: I,
    fields: p,
    optionalPropIsEnabled: D,
    optionalPropSetEnabled: Ne,
    propsNeedConfiguring: ye,
    queryDisabledIdx: d,
    registerField: nt,
    setConfiguredProp: fe,
    setSubmitting: v,
    submitting: m,
    sdkErrors: S,
    enableDebugging: l
  };
  return /* @__PURE__ */ X(wu.Provider, { value: Vt, children: e });
};
function gn(e) {
  "@babel/helpers - typeof";
  return gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, gn(e);
}
function Dg(e, t) {
  if (gn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (gn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Eu(e) {
  var t = Dg(e, "string");
  return gn(t) == "symbol" ? t : t + "";
}
function $n(e, t, n) {
  return (t = Eu(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function _a(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Z(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? _a(Object(n), !0).forEach(function(r) {
      $n(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _a(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ng(e) {
  if (Array.isArray(e)) return e;
}
function Mg(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, i, o, a, s = [], u = !0, l = !1;
    try {
      if (o = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        u = !1;
      } else for (; !(u = (r = o.call(n)).done) && (s.push(r.value), s.length !== t); u = !0) ;
    } catch (c) {
      l = !0, i = c;
    } finally {
      try {
        if (!u && n.return != null && (a = n.return(), Object(a) !== a)) return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function qi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Fu(e, t) {
  if (e) {
    if (typeof e == "string") return qi(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? qi(e, t) : void 0;
  }
}
function Lg() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ot(e, t) {
  return Ng(e) || Mg(e, t) || Fu(e, t) || Lg();
}
function Xg(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Et(e, t) {
  if (e == null) return {};
  var n, r, i = Xg(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  }
  return i;
}
var Hg = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function Pu(e) {
  var t = e.defaultInputValue, n = t === void 0 ? "" : t, r = e.defaultMenuIsOpen, i = r === void 0 ? !1 : r, o = e.defaultValue, a = o === void 0 ? null : o, s = e.inputValue, u = e.menuIsOpen, l = e.onChange, c = e.onInputChange, d = e.onMenuClose, f = e.onMenuOpen, p = e.value, y = Et(e, Hg), m = Ie(s !== void 0 ? s : n), v = Ot(m, 2), I = v[0], E = v[1], S = Ie(u !== void 0 ? u : i), P = Ot(S, 2), T = P[0], A = P[1], D = Ie(p !== void 0 ? p : a), w = Ot(D, 2), O = w[0], G = w[1], B = ze(function(de, ye) {
    typeof l == "function" && l(de, ye), G(de);
  }, [l]), R = ze(function(de, ye) {
    var b;
    typeof c == "function" && (b = c(de, ye)), E(b !== void 0 ? b : de);
  }, [c]), j = ze(function() {
    typeof f == "function" && f(), A(!0);
  }, [f]), te = ze(function() {
    typeof d == "function" && d(), A(!1);
  }, [d]), L = s !== void 0 ? s : I, Y = u !== void 0 ? u : T, se = p !== void 0 ? p : O;
  return Z(Z({}, y), {}, {
    inputValue: L,
    menuIsOpen: Y,
    onChange: B,
    onInputChange: R,
    onMenuClose: te,
    onMenuOpen: j,
    value: se
  });
}
function _() {
  return _ = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, _.apply(null, arguments);
}
function zg(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ua(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Eu(r.key), r);
  }
}
function Wg(e, t, n) {
  return t && Ua(e.prototype, t), n && Ua(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function $i(e, t) {
  return $i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, $i(e, t);
}
function Zg(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && $i(e, t);
}
function Lr(e) {
  return Lr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Lr(e);
}
function Gu() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Gu = function() {
    return !!e;
  })();
}
function jg(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jg(e, t) {
  if (t && (gn(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return jg(e);
}
function Yg(e) {
  var t = Gu();
  return function() {
    var n, r = Lr(e);
    if (t) {
      var i = Lr(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else n = r.apply(this, arguments);
    return Jg(this, n);
  };
}
function _g(e) {
  if (Array.isArray(e)) return qi(e);
}
function Ug(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Qg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function wn(e) {
  return _g(e) || Ug(e) || Fu(e) || Qg();
}
function qg(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
const $g = Math.min, Kg = Math.max, Xr = Math.round, Fr = Math.floor, Hr = (e) => ({
  x: e,
  y: e
});
function em(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: i
  } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n
  };
}
function qr() {
  return typeof window < "u";
}
function ku(e) {
  return Bu(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Tt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ru(e) {
  var t;
  return (t = (Bu(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Bu(e) {
  return qr() ? e instanceof Node || e instanceof Tt(e).Node : !1;
}
function tm(e) {
  return qr() ? e instanceof Element || e instanceof Tt(e).Element : !1;
}
function Eo(e) {
  return qr() ? e instanceof HTMLElement || e instanceof Tt(e).HTMLElement : !1;
}
function Qa(e) {
  return !qr() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Tt(e).ShadowRoot;
}
function Ou(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: i
  } = Fo(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function nm() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function rm(e) {
  return ["html", "body", "#document"].includes(ku(e));
}
function Fo(e) {
  return Tt(e).getComputedStyle(e);
}
function im(e) {
  if (ku(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Qa(e) && e.host || // Fallback.
    Ru(e)
  );
  return Qa(t) ? t.host : t;
}
function Tu(e) {
  const t = im(e);
  return rm(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Eo(t) && Ou(t) ? t : Tu(t);
}
function zr(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = Tu(e), o = i === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Tt(i);
  if (o) {
    const s = Ki(a);
    return t.concat(a, a.visualViewport || [], Ou(i) ? i : [], s && n ? zr(s) : []);
  }
  return t.concat(i, zr(i, [], n));
}
function Ki(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function om(e) {
  const t = Fo(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const i = Eo(e), o = i ? e.offsetWidth : n, a = i ? e.offsetHeight : r, s = Xr(n) !== o || Xr(r) !== a;
  return s && (n = o, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Po(e) {
  return tm(e) ? e : e.contextElement;
}
function qa(e) {
  const t = Po(e);
  if (!Eo(t))
    return Hr(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: i,
    $: o
  } = om(t);
  let a = (o ? Xr(n.width) : n.width) / r, s = (o ? Xr(n.height) : n.height) / i;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const am = /* @__PURE__ */ Hr(0);
function sm(e) {
  const t = Tt(e);
  return !nm() || !t.visualViewport ? am : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function um(e, t, n) {
  return !1;
}
function $a(e, t, n, r) {
  t === void 0 && (t = !1);
  const i = e.getBoundingClientRect(), o = Po(e);
  let a = Hr(1);
  t && (a = qa(e));
  const s = um() ? sm(o) : Hr(0);
  let u = (i.left + s.x) / a.x, l = (i.top + s.y) / a.y, c = i.width / a.x, d = i.height / a.y;
  if (o) {
    const f = Tt(o), p = r;
    let y = f, m = Ki(y);
    for (; m && r && p !== y; ) {
      const v = qa(m), I = m.getBoundingClientRect(), E = Fo(m), S = I.left + (m.clientLeft + parseFloat(E.paddingLeft)) * v.x, P = I.top + (m.clientTop + parseFloat(E.paddingTop)) * v.y;
      u *= v.x, l *= v.y, c *= v.x, d *= v.y, u += S, l += P, y = Tt(m), m = Ki(y);
    }
  }
  return em({
    width: c,
    height: d,
    x: u,
    y: l
  });
}
function Vu(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function lm(e, t) {
  let n = null, r;
  const i = Ru(e);
  function o() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function a(s, u) {
    s === void 0 && (s = !1), u === void 0 && (u = 1), o();
    const l = e.getBoundingClientRect(), {
      left: c,
      top: d,
      width: f,
      height: p
    } = l;
    if (s || t(), !f || !p)
      return;
    const y = Fr(d), m = Fr(i.clientWidth - (c + f)), v = Fr(i.clientHeight - (d + p)), I = Fr(c), S = {
      rootMargin: -y + "px " + -m + "px " + -v + "px " + -I + "px",
      threshold: Kg(0, $g(1, u)) || 1
    };
    let P = !0;
    function T(A) {
      const D = A[0].intersectionRatio;
      if (D !== u) {
        if (!P)
          return a();
        D ? a(!1, D) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      D === 1 && !Vu(l, e.getBoundingClientRect()) && a(), P = !1;
    }
    try {
      n = new IntersectionObserver(T, {
        ...S,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(T, S);
    }
    n.observe(e);
  }
  return a(!0), o;
}
function cm(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, l = Po(e), c = i || o ? [...l ? zr(l) : [], ...zr(t)] : [];
  c.forEach((I) => {
    i && I.addEventListener("scroll", n, {
      passive: !0
    }), o && I.addEventListener("resize", n);
  });
  const d = l && s ? lm(l, n) : null;
  let f = -1, p = null;
  a && (p = new ResizeObserver((I) => {
    let [E] = I;
    E && E.target === l && p && (p.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var S;
      (S = p) == null || S.observe(t);
    })), n();
  }), l && !u && p.observe(l), p.observe(t));
  let y, m = u ? $a(e) : null;
  u && v();
  function v() {
    const I = $a(e);
    m && !Vu(m, I) && n(), m = I, y = requestAnimationFrame(v);
  }
  return n(), () => {
    var I;
    c.forEach((E) => {
      i && E.removeEventListener("scroll", n), o && E.removeEventListener("resize", n);
    }), d == null || d(), (I = p) == null || I.disconnect(), p = null, u && cancelAnimationFrame(y);
  };
}
var eo = rc, dm = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], Wr = function() {
};
function pm(e, t) {
  return t ? t[0] === "-" ? e + t : e + "__" + t : e;
}
function fm(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  var o = [].concat(r);
  if (t && e)
    for (var a in t)
      t.hasOwnProperty(a) && t[a] && o.push("".concat(pm(e, a)));
  return o.filter(function(s) {
    return s;
  }).map(function(s) {
    return String(s).trim();
  }).join(" ");
}
var Zr = function(t) {
  return xm(t) ? t.filter(Boolean) : gn(t) === "object" && t !== null ? [t] : [];
}, Du = function(t) {
  t.className, t.clearValue, t.cx, t.getStyles, t.getClassNames, t.getValue, t.hasValue, t.isMulti, t.isRtl, t.options, t.selectOption, t.selectProps, t.setValue, t.theme;
  var n = Et(t, dm);
  return Z({}, n);
}, ke = function(t, n, r) {
  var i = t.cx, o = t.getStyles, a = t.getClassNames, s = t.className;
  return {
    css: o(n, t),
    className: i(r ?? {}, a(n, t), s)
  };
};
function $r(e) {
  return [document.documentElement, document.body, window].indexOf(e) > -1;
}
function hm(e) {
  return $r(e) ? window.innerHeight : e.clientHeight;
}
function Nu(e) {
  return $r(e) ? window.pageYOffset : e.scrollTop;
}
function jr(e, t) {
  if ($r(e)) {
    window.scrollTo(0, t);
    return;
  }
  e.scrollTop = t;
}
function gm(e) {
  var t = getComputedStyle(e), n = t.position === "absolute", r = /(auto|scroll)/;
  if (t.position === "fixed") return document.documentElement;
  for (var i = e; i = i.parentElement; )
    if (t = getComputedStyle(i), !(n && t.position === "static") && r.test(t.overflow + t.overflowY + t.overflowX))
      return i;
  return document.documentElement;
}
function mm(e, t, n, r) {
  return n * ((e = e / r - 1) * e * e + 1) + t;
}
function Pr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Wr, i = Nu(e), o = t - i, a = 10, s = 0;
  function u() {
    s += a;
    var l = mm(s, i, o, n);
    jr(e, l), s < n ? window.requestAnimationFrame(u) : r(e);
  }
  u();
}
function Ka(e, t) {
  var n = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = t.offsetHeight / 3;
  r.bottom + i > n.bottom ? jr(e, Math.min(t.offsetTop + t.clientHeight - e.offsetHeight + i, e.scrollHeight)) : r.top - i < n.top && jr(e, Math.max(t.offsetTop - i, 0));
}
function bm(e) {
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
function es() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function ym() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var Mu = !1, Im = {
  get passive() {
    return Mu = !0;
  }
}, Gr = typeof window < "u" ? window : {};
Gr.addEventListener && Gr.removeEventListener && (Gr.addEventListener("p", Wr, Im), Gr.removeEventListener("p", Wr, !1));
var vm = Mu;
function Cm(e) {
  return e != null;
}
function xm(e) {
  return Array.isArray(e);
}
function Kn(e, t, n) {
  return e ? t : n;
}
var Am = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  var o = Object.entries(t).filter(function(a) {
    var s = Ot(a, 1), u = s[0];
    return !r.includes(u);
  });
  return o.reduce(function(a, s) {
    var u = Ot(s, 2), l = u[0], c = u[1];
    return a[l] = c, a;
  }, {});
}, Sm = ["children", "innerProps"], wm = ["children", "innerProps"];
function Em(e) {
  var t = e.maxHeight, n = e.menuEl, r = e.minHeight, i = e.placement, o = e.shouldScroll, a = e.isFixedPosition, s = e.controlHeight, u = gm(n), l = {
    placement: "bottom",
    maxHeight: t
  };
  if (!n || !n.offsetParent) return l;
  var c = u.getBoundingClientRect(), d = c.height, f = n.getBoundingClientRect(), p = f.bottom, y = f.height, m = f.top, v = n.offsetParent.getBoundingClientRect(), I = v.top, E = a ? window.innerHeight : hm(u), S = Nu(u), P = parseInt(getComputedStyle(n).marginBottom, 10), T = parseInt(getComputedStyle(n).marginTop, 10), A = I - T, D = E - m, w = A + S, O = d - S - m, G = p - E + S + P, B = S + m - T, R = 160;
  switch (i) {
    case "auto":
    case "bottom":
      if (D >= y)
        return {
          placement: "bottom",
          maxHeight: t
        };
      if (O >= y && !a)
        return o && Pr(u, G, R), {
          placement: "bottom",
          maxHeight: t
        };
      if (!a && O >= r || a && D >= r) {
        o && Pr(u, G, R);
        var j = a ? D - P : O - P;
        return {
          placement: "bottom",
          maxHeight: j
        };
      }
      if (i === "auto" || a) {
        var te = t, L = a ? A : w;
        return L >= r && (te = Math.min(L - P - s, t)), {
          placement: "top",
          maxHeight: te
        };
      }
      if (i === "bottom")
        return o && jr(u, G), {
          placement: "bottom",
          maxHeight: t
        };
      break;
    case "top":
      if (A >= y)
        return {
          placement: "top",
          maxHeight: t
        };
      if (w >= y && !a)
        return o && Pr(u, B, R), {
          placement: "top",
          maxHeight: t
        };
      if (!a && w >= r || a && A >= r) {
        var Y = t;
        return (!a && w >= r || a && A >= r) && (Y = a ? A - T : w - T), o && Pr(u, B, R), {
          placement: "top",
          maxHeight: Y
        };
      }
      return {
        placement: "bottom",
        maxHeight: t
      };
    default:
      throw new Error('Invalid placement provided "'.concat(i, '".'));
  }
  return l;
}
function Fm(e) {
  var t = {
    bottom: "top",
    top: "bottom"
  };
  return e ? t[e] : "bottom";
}
var Lu = function(t) {
  return t === "auto" ? "bottom" : t;
}, Pm = function(t, n) {
  var r, i = t.placement, o = t.theme, a = o.borderRadius, s = o.spacing, u = o.colors;
  return Z((r = {
    label: "menu"
  }, $n(r, Fm(i), "100%"), $n(r, "position", "absolute"), $n(r, "width", "100%"), $n(r, "zIndex", 1), r), n ? {} : {
    backgroundColor: u.neutral0,
    borderRadius: a,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: s.menuGutter,
    marginTop: s.menuGutter
  });
}, Xu = /* @__PURE__ */ dr(null), Gm = function(t) {
  var n = t.children, r = t.minMenuHeight, i = t.maxMenuHeight, o = t.menuPlacement, a = t.menuPosition, s = t.menuShouldScrollIntoView, u = t.theme, l = Ln(Xu) || {}, c = l.setPortalPlacement, d = Bt(null), f = Ie(i), p = Ot(f, 2), y = p[0], m = p[1], v = Ie(null), I = Ot(v, 2), E = I[0], S = I[1], P = u.spacing.controlHeight;
  return eo(function() {
    var T = d.current;
    if (T) {
      var A = a === "fixed", D = s && !A, w = Em({
        maxHeight: i,
        menuEl: T,
        minHeight: r,
        placement: o,
        shouldScroll: D,
        isFixedPosition: A,
        controlHeight: P
      });
      m(w.maxHeight), S(w.placement), c == null || c(w.placement);
    }
  }, [i, o, a, s, r, c, P]), n({
    ref: d,
    placerProps: Z(Z({}, t), {}, {
      placement: E || Lu(o),
      maxHeight: y
    })
  });
}, km = function(t) {
  var n = t.children, r = t.innerRef, i = t.innerProps;
  return J("div", _({}, ke(t, "menu", {
    menu: !0
  }), {
    ref: r
  }, i), n);
}, Rm = km, Bm = function(t, n) {
  var r = t.maxHeight, i = t.theme.spacing.baseUnit;
  return Z({
    maxHeight: r,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, n ? {} : {
    paddingBottom: i,
    paddingTop: i
  });
}, Om = function(t) {
  var n = t.children, r = t.innerProps, i = t.innerRef, o = t.isMulti;
  return J("div", _({}, ke(t, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": o
  }), {
    ref: i
  }, r), n);
}, Hu = function(t, n) {
  var r = t.theme, i = r.spacing.baseUnit, o = r.colors;
  return Z({
    textAlign: "center"
  }, n ? {} : {
    color: o.neutral40,
    padding: "".concat(i * 2, "px ").concat(i * 3, "px")
  });
}, Tm = Hu, Vm = Hu, Dm = function(t) {
  var n = t.children, r = n === void 0 ? "No options" : n, i = t.innerProps, o = Et(t, Sm);
  return J("div", _({}, ke(Z(Z({}, o), {}, {
    children: r,
    innerProps: i
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), i), r);
}, Nm = function(t) {
  var n = t.children, r = n === void 0 ? "Loading..." : n, i = t.innerProps, o = Et(t, wm);
  return J("div", _({}, ke(Z(Z({}, o), {}, {
    children: r,
    innerProps: i
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), i), r);
}, Mm = function(t) {
  var n = t.rect, r = t.offset, i = t.position;
  return {
    left: n.left,
    position: i,
    top: r,
    width: n.width,
    zIndex: 1
  };
}, Lm = function(t) {
  var n = t.appendTo, r = t.children, i = t.controlElement, o = t.innerProps, a = t.menuPlacement, s = t.menuPosition, u = Bt(null), l = Bt(null), c = Ie(Lu(a)), d = Ot(c, 2), f = d[0], p = d[1], y = At(function() {
    return {
      setPortalPlacement: p
    };
  }, []), m = Ie(null), v = Ot(m, 2), I = v[0], E = v[1], S = ze(function() {
    if (i) {
      var D = bm(i), w = s === "fixed" ? 0 : window.pageYOffset, O = D[f] + w;
      (O !== (I == null ? void 0 : I.offset) || D.left !== (I == null ? void 0 : I.rect.left) || D.width !== (I == null ? void 0 : I.rect.width)) && E({
        offset: O,
        rect: D
      });
    }
  }, [i, s, f, I == null ? void 0 : I.offset, I == null ? void 0 : I.rect.left, I == null ? void 0 : I.rect.width]);
  eo(function() {
    S();
  }, [S]);
  var P = ze(function() {
    typeof l.current == "function" && (l.current(), l.current = null), i && u.current && (l.current = cm(i, u.current, S, {
      elementResize: "ResizeObserver" in window
    }));
  }, [i, S]);
  eo(function() {
    P();
  }, [P]);
  var T = ze(function(D) {
    u.current = D, P();
  }, [P]);
  if (!n && s !== "fixed" || !I) return null;
  var A = J("div", _({
    ref: T
  }, ke(Z(Z({}, t), {}, {
    offset: I.offset,
    position: s,
    rect: I.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), o), r);
  return J(Xu.Provider, {
    value: y
  }, n ? /* @__PURE__ */ ac(A, n) : A);
}, Xm = function(t) {
  var n = t.isDisabled, r = t.isRtl;
  return {
    label: "container",
    direction: r ? "rtl" : void 0,
    pointerEvents: n ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, Hm = function(t) {
  var n = t.children, r = t.innerProps, i = t.isDisabled, o = t.isRtl;
  return J("div", _({}, ke(t, "container", {
    "--is-disabled": i,
    "--is-rtl": o
  }), r), n);
}, zm = function(t, n) {
  var r = t.theme.spacing, i = t.isMulti, o = t.hasValue, a = t.selectProps.controlShouldRenderValue;
  return Z({
    alignItems: "center",
    display: i && o && a ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, n ? {} : {
    padding: "".concat(r.baseUnit / 2, "px ").concat(r.baseUnit * 2, "px")
  });
}, Wm = function(t) {
  var n = t.children, r = t.innerProps, i = t.isMulti, o = t.hasValue;
  return J("div", _({}, ke(t, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": i,
    "value-container--has-value": o
  }), r), n);
}, Zm = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, jm = function(t) {
  var n = t.children, r = t.innerProps;
  return J("div", _({}, ke(t, "indicatorsContainer", {
    indicators: !0
  }), r), n);
}, ts, Jm = ["size"], Ym = ["innerProps", "isRtl", "size"];
function _m() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var Um = process.env.NODE_ENV === "production" ? {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
} : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */",
  toString: _m
}, zu = function(t) {
  var n = t.size, r = Et(t, Jm);
  return J("svg", _({
    height: n,
    width: n,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: Um
  }, r));
}, Go = function(t) {
  return J(zu, _({
    size: 20
  }, t), J("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, Wu = function(t) {
  return J(zu, _({
    size: 20
  }, t), J("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, Zu = function(t, n) {
  var r = t.isFocused, i = t.theme, o = i.spacing.baseUnit, a = i.colors;
  return Z({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, n ? {} : {
    color: r ? a.neutral60 : a.neutral20,
    padding: o * 2,
    ":hover": {
      color: r ? a.neutral80 : a.neutral40
    }
  });
}, Qm = Zu, qm = function(t) {
  var n = t.children, r = t.innerProps;
  return J("div", _({}, ke(t, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), r), n || J(Wu, null));
}, $m = Zu, Km = function(t) {
  var n = t.children, r = t.innerProps;
  return J("div", _({}, ke(t, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), r), n || J(Go, null));
}, eb = function(t, n) {
  var r = t.isDisabled, i = t.theme, o = i.spacing.baseUnit, a = i.colors;
  return Z({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, n ? {} : {
    backgroundColor: r ? a.neutral10 : a.neutral20,
    marginBottom: o * 2,
    marginTop: o * 2
  });
}, tb = function(t) {
  var n = t.innerProps;
  return J("span", _({}, n, ke(t, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, nb = oc(ts || (ts = qg([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), rb = function(t, n) {
  var r = t.isFocused, i = t.size, o = t.theme, a = o.colors, s = o.spacing.baseUnit;
  return Z({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: i,
    lineHeight: 1,
    marginRight: i,
    textAlign: "center",
    verticalAlign: "middle"
  }, n ? {} : {
    color: r ? a.neutral60 : a.neutral20,
    padding: s * 2
  });
}, Ii = function(t) {
  var n = t.delay, r = t.offset;
  return J("span", {
    css: /* @__PURE__ */ Ps({
      animation: "".concat(nb, " 1s ease-in-out ").concat(n, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: r ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, process.env.NODE_ENV === "production" ? "" : ";label:LoadingDot;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */")
  });
}, ib = function(t) {
  var n = t.innerProps, r = t.isRtl, i = t.size, o = i === void 0 ? 4 : i, a = Et(t, Ym);
  return J("div", _({}, ke(Z(Z({}, a), {}, {
    innerProps: n,
    isRtl: r,
    size: o
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), n), J(Ii, {
    delay: 0,
    offset: r
  }), J(Ii, {
    delay: 160,
    offset: !0
  }), J(Ii, {
    delay: 320,
    offset: !r
  }));
}, ob = function(t, n) {
  var r = t.isDisabled, i = t.isFocused, o = t.theme, a = o.colors, s = o.borderRadius, u = o.spacing;
  return Z({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: u.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, n ? {} : {
    backgroundColor: r ? a.neutral5 : a.neutral0,
    borderColor: r ? a.neutral10 : i ? a.primary : a.neutral20,
    borderRadius: s,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: i ? "0 0 0 1px ".concat(a.primary) : void 0,
    "&:hover": {
      borderColor: i ? a.primary : a.neutral30
    }
  });
}, ab = function(t) {
  var n = t.children, r = t.isDisabled, i = t.isFocused, o = t.innerRef, a = t.innerProps, s = t.menuIsOpen;
  return J("div", _({
    ref: o
  }, ke(t, "control", {
    control: !0,
    "control--is-disabled": r,
    "control--is-focused": i,
    "control--menu-is-open": s
  }), a, {
    "aria-disabled": r || void 0
  }), n);
}, sb = ab, ub = ["data"], lb = function(t, n) {
  var r = t.theme.spacing;
  return n ? {} : {
    paddingBottom: r.baseUnit * 2,
    paddingTop: r.baseUnit * 2
  };
}, cb = function(t) {
  var n = t.children, r = t.cx, i = t.getStyles, o = t.getClassNames, a = t.Heading, s = t.headingProps, u = t.innerProps, l = t.label, c = t.theme, d = t.selectProps;
  return J("div", _({}, ke(t, "group", {
    group: !0
  }), u), J(a, _({}, s, {
    selectProps: d,
    theme: c,
    getStyles: i,
    getClassNames: o,
    cx: r
  }), l), J("div", null, n));
}, db = function(t, n) {
  var r = t.theme, i = r.colors, o = r.spacing;
  return Z({
    label: "group",
    cursor: "default",
    display: "block"
  }, n ? {} : {
    color: i.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: o.baseUnit * 3,
    paddingRight: o.baseUnit * 3,
    textTransform: "uppercase"
  });
}, pb = function(t) {
  var n = Du(t);
  n.data;
  var r = Et(n, ub);
  return J("div", _({}, ke(t, "groupHeading", {
    "group-heading": !0
  }), r));
}, fb = cb, hb = ["innerRef", "isDisabled", "isHidden", "inputClassName"], gb = function(t, n) {
  var r = t.isDisabled, i = t.value, o = t.theme, a = o.spacing, s = o.colors;
  return Z(Z({
    visibility: r ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: i ? "translateZ(0)" : ""
  }, mb), n ? {} : {
    margin: a.baseUnit / 2,
    paddingBottom: a.baseUnit / 2,
    paddingTop: a.baseUnit / 2,
    color: s.neutral80
  });
}, ju = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, mb = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": Z({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, ju)
}, bb = function(t) {
  return Z({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: t ? 0 : 1,
    width: "100%"
  }, ju);
}, yb = function(t) {
  var n = t.cx, r = t.value, i = Du(t), o = i.innerRef, a = i.isDisabled, s = i.isHidden, u = i.inputClassName, l = Et(i, hb);
  return J("div", _({}, ke(t, "input", {
    "input-container": !0
  }), {
    "data-value": r || ""
  }), J("input", _({
    className: n({
      input: !0
    }, u),
    ref: o,
    style: bb(s),
    disabled: a
  }, l)));
}, Ib = yb, vb = function(t, n) {
  var r = t.theme, i = r.spacing, o = r.borderRadius, a = r.colors;
  return Z({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, n ? {} : {
    backgroundColor: a.neutral10,
    borderRadius: o / 2,
    margin: i.baseUnit / 2
  });
}, Cb = function(t, n) {
  var r = t.theme, i = r.borderRadius, o = r.colors, a = t.cropWithEllipsis;
  return Z({
    overflow: "hidden",
    textOverflow: a || a === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, n ? {} : {
    borderRadius: i / 2,
    color: o.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
}, xb = function(t, n) {
  var r = t.theme, i = r.spacing, o = r.borderRadius, a = r.colors, s = t.isFocused;
  return Z({
    alignItems: "center",
    display: "flex"
  }, n ? {} : {
    borderRadius: o / 2,
    backgroundColor: s ? a.dangerLight : void 0,
    paddingLeft: i.baseUnit,
    paddingRight: i.baseUnit,
    ":hover": {
      backgroundColor: a.dangerLight,
      color: a.danger
    }
  });
}, Ju = function(t) {
  var n = t.children, r = t.innerProps;
  return J("div", r, n);
}, Ab = Ju, Sb = Ju;
function wb(e) {
  var t = e.children, n = e.innerProps;
  return J("div", _({
    role: "button"
  }, n), t || J(Go, {
    size: 14
  }));
}
var Eb = function(t) {
  var n = t.children, r = t.components, i = t.data, o = t.innerProps, a = t.isDisabled, s = t.removeProps, u = t.selectProps, l = r.Container, c = r.Label, d = r.Remove;
  return J(l, {
    data: i,
    innerProps: Z(Z({}, ke(t, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": a
    })), o),
    selectProps: u
  }, J(c, {
    data: i,
    innerProps: Z({}, ke(t, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: u
  }, n), J(d, {
    data: i,
    innerProps: Z(Z({}, ke(t, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(n || "option")
    }, s),
    selectProps: u
  }));
}, Fb = Eb, Pb = function(t, n) {
  var r = t.isDisabled, i = t.isFocused, o = t.isSelected, a = t.theme, s = a.spacing, u = a.colors;
  return Z({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, n ? {} : {
    backgroundColor: o ? u.primary : i ? u.primary25 : "transparent",
    color: r ? u.neutral20 : o ? u.neutral0 : "inherit",
    padding: "".concat(s.baseUnit * 2, "px ").concat(s.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: r ? void 0 : o ? u.primary : u.primary50
    }
  });
}, Gb = function(t) {
  var n = t.children, r = t.isDisabled, i = t.isFocused, o = t.isSelected, a = t.innerRef, s = t.innerProps;
  return J("div", _({}, ke(t, "option", {
    option: !0,
    "option--is-disabled": r,
    "option--is-focused": i,
    "option--is-selected": o
  }), {
    ref: a,
    "aria-disabled": r
  }, s), n);
}, kb = Gb, Rb = function(t, n) {
  var r = t.theme, i = r.spacing, o = r.colors;
  return Z({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, n ? {} : {
    color: o.neutral50,
    marginLeft: i.baseUnit / 2,
    marginRight: i.baseUnit / 2
  });
}, Bb = function(t) {
  var n = t.children, r = t.innerProps;
  return J("div", _({}, ke(t, "placeholder", {
    placeholder: !0
  }), r), n);
}, Ob = Bb, Tb = function(t, n) {
  var r = t.isDisabled, i = t.theme, o = i.spacing, a = i.colors;
  return Z({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, n ? {} : {
    color: r ? a.neutral40 : a.neutral80,
    marginLeft: o.baseUnit / 2,
    marginRight: o.baseUnit / 2
  });
}, Vb = function(t) {
  var n = t.children, r = t.isDisabled, i = t.innerProps;
  return J("div", _({}, ke(t, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": r
  }), i), n);
}, Db = Vb, gr = {
  ClearIndicator: Km,
  Control: sb,
  DropdownIndicator: qm,
  DownChevron: Wu,
  CrossIcon: Go,
  Group: fb,
  GroupHeading: pb,
  IndicatorsContainer: jm,
  IndicatorSeparator: tb,
  Input: Ib,
  LoadingIndicator: ib,
  Menu: Rm,
  MenuList: Om,
  MenuPortal: Lm,
  LoadingMessage: Nm,
  NoOptionsMessage: Dm,
  MultiValue: Fb,
  MultiValueContainer: Ab,
  MultiValueLabel: Sb,
  MultiValueRemove: wb,
  Option: kb,
  Placeholder: Ob,
  SelectContainer: Hm,
  SingleValue: Db,
  ValueContainer: Wm
}, Nb = function(t) {
  return Z(Z({}, gr), t.components);
}, ns = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Mb(e, t) {
  return !!(e === t || ns(e) && ns(t));
}
function Lb(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!Mb(e[n], t[n]))
      return !1;
  return !0;
}
function Xb(e, t) {
  t === void 0 && (t = Lb);
  var n = null;
  function r() {
    for (var i = [], o = 0; o < arguments.length; o++)
      i[o] = arguments[o];
    if (n && n.lastThis === this && t(i, n.lastArgs))
      return n.lastResult;
    var a = e.apply(this, i);
    return n = {
      lastResult: a,
      lastArgs: i,
      lastThis: this
    }, a;
  }
  return r.clear = function() {
    n = null;
  }, r;
}
function Hb() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var zb = process.env.NODE_ENV === "production" ? {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
} : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IEpTWCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: Hb
}, Wb = function(t) {
  return J("span", _({
    css: zb
  }, t));
}, rs = Wb, Zb = {
  guidance: function(t) {
    var n = t.isSearchable, r = t.isMulti, i = t.tabSelectsValue, o = t.context, a = t.isInitialFocus;
    switch (o) {
      case "menu":
        return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return a ? "".concat(t["aria-label"] || "Select", " is focused ").concat(n ? ",type to refine list" : "", ", press Down to open the menu, ").concat(r ? " press left to focus selected values" : "") : "";
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function(t) {
    var n = t.action, r = t.label, i = r === void 0 ? "" : r, o = t.labels, a = t.isDisabled;
    switch (n) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(i, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(o.length > 1 ? "s" : "", " ").concat(o.join(","), ", selected.");
      case "select-option":
        return a ? "option ".concat(i, " is disabled. Select another option.") : "option ".concat(i, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(t) {
    var n = t.context, r = t.focused, i = t.options, o = t.label, a = o === void 0 ? "" : o, s = t.selectValue, u = t.isDisabled, l = t.isSelected, c = t.isAppleDevice, d = function(m, v) {
      return m && m.length ? "".concat(m.indexOf(v) + 1, " of ").concat(m.length) : "";
    };
    if (n === "value" && s)
      return "value ".concat(a, " focused, ").concat(d(s, r), ".");
    if (n === "menu" && c) {
      var f = u ? " disabled" : "", p = "".concat(l ? " selected" : "").concat(f);
      return "".concat(a).concat(p, ", ").concat(d(i, r), ".");
    }
    return "";
  },
  onFilter: function(t) {
    var n = t.inputValue, r = t.resultsMessage;
    return "".concat(r).concat(n ? " for search term " + n : "", ".");
  }
}, jb = function(t) {
  var n = t.ariaSelection, r = t.focusedOption, i = t.focusedValue, o = t.focusableOptions, a = t.isFocused, s = t.selectValue, u = t.selectProps, l = t.id, c = t.isAppleDevice, d = u.ariaLiveMessages, f = u.getOptionLabel, p = u.inputValue, y = u.isMulti, m = u.isOptionDisabled, v = u.isSearchable, I = u.menuIsOpen, E = u.options, S = u.screenReaderStatus, P = u.tabSelectsValue, T = u.isLoading, A = u["aria-label"], D = u["aria-live"], w = At(function() {
    return Z(Z({}, Zb), d || {});
  }, [d]), O = At(function() {
    var L = "";
    if (n && w.onChange) {
      var Y = n.option, se = n.options, de = n.removedValue, ye = n.removedValues, b = n.value, ue = function(fe) {
        return Array.isArray(fe) ? null : fe;
      }, ie = de || Y || ue(b), g = ie ? f(ie) : "", he = se || ye || void 0, K = he ? he.map(f) : [], pe = Z({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: ie && m(ie, s),
        label: g,
        labels: K
      }, n);
      L = w.onChange(pe);
    }
    return L;
  }, [n, w, m, s, f]), G = At(function() {
    var L = "", Y = r || i, se = !!(r && s && s.includes(r));
    if (Y && w.onFocus) {
      var de = {
        focused: Y,
        label: f(Y),
        isDisabled: m(Y, s),
        isSelected: se,
        options: o,
        context: Y === r ? "menu" : "value",
        selectValue: s,
        isAppleDevice: c
      };
      L = w.onFocus(de);
    }
    return L;
  }, [r, i, f, m, w, o, s, c]), B = At(function() {
    var L = "";
    if (I && E.length && !T && w.onFilter) {
      var Y = S({
        count: o.length
      });
      L = w.onFilter({
        inputValue: p,
        resultsMessage: Y
      });
    }
    return L;
  }, [o, p, I, w, E, S, T]), R = (n == null ? void 0 : n.action) === "initial-input-focus", j = At(function() {
    var L = "";
    if (w.guidance) {
      var Y = i ? "value" : I ? "menu" : "input";
      L = w.guidance({
        "aria-label": A,
        context: Y,
        isDisabled: r && m(r, s),
        isMulti: y,
        isSearchable: v,
        tabSelectsValue: P,
        isInitialFocus: R
      });
    }
    return L;
  }, [A, r, i, y, m, v, I, w, s, P, R]), te = J(wi, null, J("span", {
    id: "aria-selection"
  }, O), J("span", {
    id: "aria-focused"
  }, G), J("span", {
    id: "aria-results"
  }, B), J("span", {
    id: "aria-guidance"
  }, j));
  return J(wi, null, J(rs, {
    id: l
  }, R && te), J(rs, {
    "aria-live": D,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, a && !R && te));
}, Jb = jb, to = [{
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
}], Yb = new RegExp("[" + to.map(function(e) {
  return e.letters;
}).join("") + "]", "g"), Yu = {};
for (var vi = 0; vi < to.length; vi++)
  for (var Ci = to[vi], xi = 0; xi < Ci.letters.length; xi++)
    Yu[Ci.letters[xi]] = Ci.base;
var _u = function(t) {
  return t.replace(Yb, function(n) {
    return Yu[n];
  });
}, _b = Xb(_u), is = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, Ub = function(t) {
  return "".concat(t.label, " ").concat(t.value);
}, Qb = function(t) {
  return function(n, r) {
    if (n.data.__isNew__) return !0;
    var i = Z({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: Ub,
      trim: !0,
      matchFrom: "any"
    }, t), o = i.ignoreCase, a = i.ignoreAccents, s = i.stringify, u = i.trim, l = i.matchFrom, c = u ? is(r) : r, d = u ? is(s(n)) : s(n);
    return o && (c = c.toLowerCase(), d = d.toLowerCase()), a && (c = _b(c), d = _u(d)), l === "start" ? d.substr(0, c.length) === c : d.indexOf(c) > -1;
  };
}, qb = ["innerRef"];
function $b(e) {
  var t = e.innerRef, n = Et(e, qb), r = Am(n, "onExited", "in", "enter", "exit", "appear");
  return J("input", _({
    ref: t
  }, r, {
    css: /* @__PURE__ */ Ps({
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
var Kb = function(t) {
  t.cancelable && t.preventDefault(), t.stopPropagation();
};
function ey(e) {
  var t = e.isEnabled, n = e.onBottomArrive, r = e.onBottomLeave, i = e.onTopArrive, o = e.onTopLeave, a = Bt(!1), s = Bt(!1), u = Bt(0), l = Bt(null), c = ze(function(v, I) {
    if (l.current !== null) {
      var E = l.current, S = E.scrollTop, P = E.scrollHeight, T = E.clientHeight, A = l.current, D = I > 0, w = P - T - S, O = !1;
      w > I && a.current && (r && r(v), a.current = !1), D && s.current && (o && o(v), s.current = !1), D && I > w ? (n && !a.current && n(v), A.scrollTop = P, O = !0, a.current = !0) : !D && -I > S && (i && !s.current && i(v), A.scrollTop = 0, O = !0, s.current = !0), O && Kb(v);
    }
  }, [n, r, i, o]), d = ze(function(v) {
    c(v, v.deltaY);
  }, [c]), f = ze(function(v) {
    u.current = v.changedTouches[0].clientY;
  }, []), p = ze(function(v) {
    var I = u.current - v.changedTouches[0].clientY;
    c(v, I);
  }, [c]), y = ze(function(v) {
    if (v) {
      var I = vm ? {
        passive: !1
      } : !1;
      v.addEventListener("wheel", d, I), v.addEventListener("touchstart", f, I), v.addEventListener("touchmove", p, I);
    }
  }, [p, f, d]), m = ze(function(v) {
    v && (v.removeEventListener("wheel", d, !1), v.removeEventListener("touchstart", f, !1), v.removeEventListener("touchmove", p, !1));
  }, [p, f, d]);
  return et(function() {
    if (t) {
      var v = l.current;
      return y(v), function() {
        m(v);
      };
    }
  }, [t, y, m]), function(v) {
    l.current = v;
  };
}
var os = ["boxSizing", "height", "overflow", "paddingRight", "position"], as = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function ss(e) {
  e.cancelable && e.preventDefault();
}
function us(e) {
  e.stopPropagation();
}
function ls() {
  var e = this.scrollTop, t = this.scrollHeight, n = e + this.offsetHeight;
  e === 0 ? this.scrollTop = 1 : n === t && (this.scrollTop = e - 1);
}
function cs() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var ds = !!(typeof window < "u" && window.document && window.document.createElement), Qn = 0, Cn = {
  capture: !1,
  passive: !1
};
function ty(e) {
  var t = e.isEnabled, n = e.accountForScrollbars, r = n === void 0 ? !0 : n, i = Bt({}), o = Bt(null), a = ze(function(u) {
    if (ds) {
      var l = document.body, c = l && l.style;
      if (r && os.forEach(function(y) {
        var m = c && c[y];
        i.current[y] = m;
      }), r && Qn < 1) {
        var d = parseInt(i.current.paddingRight, 10) || 0, f = document.body ? document.body.clientWidth : 0, p = window.innerWidth - f + d || 0;
        Object.keys(as).forEach(function(y) {
          var m = as[y];
          c && (c[y] = m);
        }), c && (c.paddingRight = "".concat(p, "px"));
      }
      l && cs() && (l.addEventListener("touchmove", ss, Cn), u && (u.addEventListener("touchstart", ls, Cn), u.addEventListener("touchmove", us, Cn))), Qn += 1;
    }
  }, [r]), s = ze(function(u) {
    if (ds) {
      var l = document.body, c = l && l.style;
      Qn = Math.max(Qn - 1, 0), r && Qn < 1 && os.forEach(function(d) {
        var f = i.current[d];
        c && (c[d] = f);
      }), l && cs() && (l.removeEventListener("touchmove", ss, Cn), u && (u.removeEventListener("touchstart", ls, Cn), u.removeEventListener("touchmove", us, Cn)));
    }
  }, [r]);
  return et(function() {
    if (t) {
      var u = o.current;
      return a(u), function() {
        s(u);
      };
    }
  }, [t, a, s]), function(u) {
    o.current = u;
  };
}
function ny() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var ry = function(t) {
  var n = t.target;
  return n.ownerDocument.activeElement && n.ownerDocument.activeElement.blur();
}, iy = process.env.NODE_ENV === "production" ? {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
} : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: ny
};
function oy(e) {
  var t = e.children, n = e.lockEnabled, r = e.captureEnabled, i = r === void 0 ? !0 : r, o = e.onBottomArrive, a = e.onBottomLeave, s = e.onTopArrive, u = e.onTopLeave, l = ey({
    isEnabled: i,
    onBottomArrive: o,
    onBottomLeave: a,
    onTopArrive: s,
    onTopLeave: u
  }), c = ty({
    isEnabled: n
  }), d = function(p) {
    l(p), c(p);
  };
  return J(wi, null, n && J("div", {
    onClick: ry,
    css: iy
  }), t(d));
}
function ay() {
  return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
}
var sy = process.env.NODE_ENV === "production" ? {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
} : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: ay
}, uy = function(t) {
  var n = t.name, r = t.onFocus;
  return J("input", {
    required: !0,
    name: n,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: r,
    css: sy,
    value: "",
    onChange: function() {
    }
  });
}, ly = uy;
function ko(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function cy() {
  return ko(/^iPhone/i);
}
function Uu() {
  return ko(/^Mac/i);
}
function dy() {
  return ko(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Uu() && navigator.maxTouchPoints > 1;
}
function py() {
  return cy() || dy();
}
function fy() {
  return Uu() || py();
}
var hy = function(t) {
  return t.label;
}, Qu = function(t) {
  return t.label;
}, qu = function(t) {
  return t.value;
}, gy = function(t) {
  return !!t.isDisabled;
}, my = {
  clearIndicator: $m,
  container: Xm,
  control: ob,
  dropdownIndicator: Qm,
  group: lb,
  groupHeading: db,
  indicatorsContainer: Zm,
  indicatorSeparator: eb,
  input: gb,
  loadingIndicator: rb,
  loadingMessage: Vm,
  menu: Pm,
  menuList: Bm,
  menuPortal: Mm,
  multiValue: vb,
  multiValueLabel: Cb,
  multiValueRemove: xb,
  noOptionsMessage: Tm,
  option: Pb,
  placeholder: Rb,
  singleValue: Tb,
  valueContainer: zm
};
function by(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Z({}, e);
  return Object.keys(t).forEach(function(r) {
    var i = r;
    e[i] ? n[i] = function(o, a) {
      return t[i](e[i](o, a), a);
    } : n[i] = t[i];
  }), n;
}
var yy = {
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
}, Iy = 4, $u = 4, vy = 38, Cy = $u * 2, xy = {
  baseUnit: $u,
  controlHeight: vy,
  menuGutter: Cy
}, rr = {
  borderRadius: Iy,
  colors: yy,
  spacing: xy
}, Ay = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: es(),
  captureMenuScroll: !es(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: Qb(),
  formatGroupLabel: hy,
  getOptionLabel: Qu,
  getOptionValue: qu,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: gy,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !ym(),
  noOptionsMessage: function() {
    return "No options";
  },
  openMenuOnFocus: !1,
  openMenuOnClick: !0,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function(t) {
    var n = t.count;
    return "".concat(n, " result").concat(n !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: !0,
  unstyled: !1
};
function ps(e, t, n, r) {
  var i = tl(e, t, n), o = nl(e, t, n), a = el(e, t), s = Jr(e, t);
  return {
    type: "option",
    data: t,
    isDisabled: i,
    isSelected: o,
    label: a,
    value: s,
    index: r
  };
}
function Or(e, t) {
  return e.options.map(function(n, r) {
    if ("options" in n) {
      var i = n.options.map(function(a, s) {
        return ps(e, a, t, s);
      }).filter(function(a) {
        return hs(e, a);
      });
      return i.length > 0 ? {
        type: "group",
        data: n,
        options: i,
        index: r
      } : void 0;
    }
    var o = ps(e, n, t, r);
    return hs(e, o) ? o : void 0;
  }).filter(Cm);
}
function Ku(e) {
  return e.reduce(function(t, n) {
    return n.type === "group" ? t.push.apply(t, wn(n.options.map(function(r) {
      return r.data;
    }))) : t.push(n.data), t;
  }, []);
}
function fs(e, t) {
  return e.reduce(function(n, r) {
    return r.type === "group" ? n.push.apply(n, wn(r.options.map(function(i) {
      return {
        data: i.data,
        id: "".concat(t, "-").concat(r.index, "-").concat(i.index)
      };
    }))) : n.push({
      data: r.data,
      id: "".concat(t, "-").concat(r.index)
    }), n;
  }, []);
}
function Sy(e, t) {
  return Ku(Or(e, t));
}
function hs(e, t) {
  var n = e.inputValue, r = n === void 0 ? "" : n, i = t.data, o = t.isSelected, a = t.label, s = t.value;
  return (!il(e) || !o) && rl(e, {
    label: a,
    value: s,
    data: i
  }, r);
}
function wy(e, t) {
  var n = e.focusedValue, r = e.selectValue, i = r.indexOf(n);
  if (i > -1) {
    var o = t.indexOf(n);
    if (o > -1)
      return n;
    if (i < t.length)
      return t[i];
  }
  return null;
}
function Ey(e, t) {
  var n = e.focusedOption;
  return n && t.indexOf(n) > -1 ? n : t[0];
}
var Ai = function(t, n) {
  var r, i = (r = t.find(function(o) {
    return o.data === n;
  })) === null || r === void 0 ? void 0 : r.id;
  return i || null;
}, el = function(t, n) {
  return t.getOptionLabel(n);
}, Jr = function(t, n) {
  return t.getOptionValue(n);
};
function tl(e, t, n) {
  return typeof e.isOptionDisabled == "function" ? e.isOptionDisabled(t, n) : !1;
}
function nl(e, t, n) {
  if (n.indexOf(t) > -1) return !0;
  if (typeof e.isOptionSelected == "function")
    return e.isOptionSelected(t, n);
  var r = Jr(e, t);
  return n.some(function(i) {
    return Jr(e, i) === r;
  });
}
function rl(e, t, n) {
  return e.filterOption ? e.filterOption(t, n) : !0;
}
var il = function(t) {
  var n = t.hideSelectedOptions, r = t.isMulti;
  return n === void 0 ? r : n;
}, Fy = 1, Ro = /* @__PURE__ */ function(e) {
  Zg(n, e);
  var t = Yg(n);
  function n(r) {
    var i;
    if (zg(this, n), i = t.call(this, r), i.state = {
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
    }, i.blockOptionHover = !1, i.isComposing = !1, i.commonProps = void 0, i.initialTouchX = 0, i.initialTouchY = 0, i.openAfterFocus = !1, i.scrollToFocusedOptionOnUpdate = !1, i.userIsDragging = void 0, i.isAppleDevice = fy(), i.controlRef = null, i.getControlRef = function(u) {
      i.controlRef = u;
    }, i.focusedOptionRef = null, i.getFocusedOptionRef = function(u) {
      i.focusedOptionRef = u;
    }, i.menuListRef = null, i.getMenuListRef = function(u) {
      i.menuListRef = u;
    }, i.inputRef = null, i.getInputRef = function(u) {
      i.inputRef = u;
    }, i.focus = i.focusInput, i.blur = i.blurInput, i.onChange = function(u, l) {
      var c = i.props, d = c.onChange, f = c.name;
      l.name = f, i.ariaOnChange(u, l), d(u, l);
    }, i.setValue = function(u, l, c) {
      var d = i.props, f = d.closeMenuOnSelect, p = d.isMulti, y = d.inputValue;
      i.onInputChange("", {
        action: "set-value",
        prevInputValue: y
      }), f && (i.setState({
        inputIsHiddenAfterUpdate: !p
      }), i.onMenuClose()), i.setState({
        clearFocusValueOnUpdate: !0
      }), i.onChange(u, {
        action: l,
        option: c
      });
    }, i.selectOption = function(u) {
      var l = i.props, c = l.blurInputOnSelect, d = l.isMulti, f = l.name, p = i.state.selectValue, y = d && i.isOptionSelected(u, p), m = i.isOptionDisabled(u, p);
      if (y) {
        var v = i.getOptionValue(u);
        i.setValue(p.filter(function(I) {
          return i.getOptionValue(I) !== v;
        }), "deselect-option", u);
      } else if (!m)
        d ? i.setValue([].concat(wn(p), [u]), "select-option", u) : i.setValue(u, "select-option");
      else {
        i.ariaOnChange(u, {
          action: "select-option",
          option: u,
          name: f
        });
        return;
      }
      c && i.blurInput();
    }, i.removeValue = function(u) {
      var l = i.props.isMulti, c = i.state.selectValue, d = i.getOptionValue(u), f = c.filter(function(y) {
        return i.getOptionValue(y) !== d;
      }), p = Kn(l, f, f[0] || null);
      i.onChange(p, {
        action: "remove-value",
        removedValue: u
      }), i.focusInput();
    }, i.clearValue = function() {
      var u = i.state.selectValue;
      i.onChange(Kn(i.props.isMulti, [], null), {
        action: "clear",
        removedValues: u
      });
    }, i.popValue = function() {
      var u = i.props.isMulti, l = i.state.selectValue, c = l[l.length - 1], d = l.slice(0, l.length - 1), f = Kn(u, d, d[0] || null);
      c && i.onChange(f, {
        action: "pop-value",
        removedValue: c
      });
    }, i.getFocusedOptionId = function(u) {
      return Ai(i.state.focusableOptionsWithIds, u);
    }, i.getFocusableOptionsWithIds = function() {
      return fs(Or(i.props, i.state.selectValue), i.getElementId("option"));
    }, i.getValue = function() {
      return i.state.selectValue;
    }, i.cx = function() {
      for (var u = arguments.length, l = new Array(u), c = 0; c < u; c++)
        l[c] = arguments[c];
      return fm.apply(void 0, [i.props.classNamePrefix].concat(l));
    }, i.getOptionLabel = function(u) {
      return el(i.props, u);
    }, i.getOptionValue = function(u) {
      return Jr(i.props, u);
    }, i.getStyles = function(u, l) {
      var c = i.props.unstyled, d = my[u](l, c);
      d.boxSizing = "border-box";
      var f = i.props.styles[u];
      return f ? f(d, l) : d;
    }, i.getClassNames = function(u, l) {
      var c, d;
      return (c = (d = i.props.classNames)[u]) === null || c === void 0 ? void 0 : c.call(d, l);
    }, i.getElementId = function(u) {
      return "".concat(i.state.instancePrefix, "-").concat(u);
    }, i.getComponents = function() {
      return Nb(i.props);
    }, i.buildCategorizedOptions = function() {
      return Or(i.props, i.state.selectValue);
    }, i.getCategorizedOptions = function() {
      return i.props.menuIsOpen ? i.buildCategorizedOptions() : [];
    }, i.buildFocusableOptions = function() {
      return Ku(i.buildCategorizedOptions());
    }, i.getFocusableOptions = function() {
      return i.props.menuIsOpen ? i.buildFocusableOptions() : [];
    }, i.ariaOnChange = function(u, l) {
      i.setState({
        ariaSelection: Z({
          value: u
        }, l)
      });
    }, i.onMenuMouseDown = function(u) {
      u.button === 0 && (u.stopPropagation(), u.preventDefault(), i.focusInput());
    }, i.onMenuMouseMove = function(u) {
      i.blockOptionHover = !1;
    }, i.onControlMouseDown = function(u) {
      if (!u.defaultPrevented) {
        var l = i.props.openMenuOnClick;
        i.state.isFocused ? i.props.menuIsOpen ? u.target.tagName !== "INPUT" && u.target.tagName !== "TEXTAREA" && i.onMenuClose() : l && i.openMenu("first") : (l && (i.openAfterFocus = !0), i.focusInput()), u.target.tagName !== "INPUT" && u.target.tagName !== "TEXTAREA" && u.preventDefault();
      }
    }, i.onDropdownIndicatorMouseDown = function(u) {
      if (!(u && u.type === "mousedown" && u.button !== 0) && !i.props.isDisabled) {
        var l = i.props, c = l.isMulti, d = l.menuIsOpen;
        i.focusInput(), d ? (i.setState({
          inputIsHiddenAfterUpdate: !c
        }), i.onMenuClose()) : i.openMenu("first"), u.preventDefault();
      }
    }, i.onClearIndicatorMouseDown = function(u) {
      u && u.type === "mousedown" && u.button !== 0 || (i.clearValue(), u.preventDefault(), i.openAfterFocus = !1, u.type === "touchend" ? i.focusInput() : setTimeout(function() {
        return i.focusInput();
      }));
    }, i.onScroll = function(u) {
      typeof i.props.closeMenuOnScroll == "boolean" ? u.target instanceof HTMLElement && $r(u.target) && i.props.onMenuClose() : typeof i.props.closeMenuOnScroll == "function" && i.props.closeMenuOnScroll(u) && i.props.onMenuClose();
    }, i.onCompositionStart = function() {
      i.isComposing = !0;
    }, i.onCompositionEnd = function() {
      i.isComposing = !1;
    }, i.onTouchStart = function(u) {
      var l = u.touches, c = l && l.item(0);
      c && (i.initialTouchX = c.clientX, i.initialTouchY = c.clientY, i.userIsDragging = !1);
    }, i.onTouchMove = function(u) {
      var l = u.touches, c = l && l.item(0);
      if (c) {
        var d = Math.abs(c.clientX - i.initialTouchX), f = Math.abs(c.clientY - i.initialTouchY), p = 5;
        i.userIsDragging = d > p || f > p;
      }
    }, i.onTouchEnd = function(u) {
      i.userIsDragging || (i.controlRef && !i.controlRef.contains(u.target) && i.menuListRef && !i.menuListRef.contains(u.target) && i.blurInput(), i.initialTouchX = 0, i.initialTouchY = 0);
    }, i.onControlTouchEnd = function(u) {
      i.userIsDragging || i.onControlMouseDown(u);
    }, i.onClearIndicatorTouchEnd = function(u) {
      i.userIsDragging || i.onClearIndicatorMouseDown(u);
    }, i.onDropdownIndicatorTouchEnd = function(u) {
      i.userIsDragging || i.onDropdownIndicatorMouseDown(u);
    }, i.handleInputChange = function(u) {
      var l = i.props.inputValue, c = u.currentTarget.value;
      i.setState({
        inputIsHiddenAfterUpdate: !1
      }), i.onInputChange(c, {
        action: "input-change",
        prevInputValue: l
      }), i.props.menuIsOpen || i.onMenuOpen();
    }, i.onInputFocus = function(u) {
      i.props.onFocus && i.props.onFocus(u), i.setState({
        inputIsHiddenAfterUpdate: !1,
        isFocused: !0
      }), (i.openAfterFocus || i.props.openMenuOnFocus) && i.openMenu("first"), i.openAfterFocus = !1;
    }, i.onInputBlur = function(u) {
      var l = i.props.inputValue;
      if (i.menuListRef && i.menuListRef.contains(document.activeElement)) {
        i.inputRef.focus();
        return;
      }
      i.props.onBlur && i.props.onBlur(u), i.onInputChange("", {
        action: "input-blur",
        prevInputValue: l
      }), i.onMenuClose(), i.setState({
        focusedValue: null,
        isFocused: !1
      });
    }, i.onOptionHover = function(u) {
      if (!(i.blockOptionHover || i.state.focusedOption === u)) {
        var l = i.getFocusableOptions(), c = l.indexOf(u);
        i.setState({
          focusedOption: u,
          focusedOptionId: c > -1 ? i.getFocusedOptionId(u) : null
        });
      }
    }, i.shouldHideSelectedOptions = function() {
      return il(i.props);
    }, i.onValueInputFocus = function(u) {
      u.preventDefault(), u.stopPropagation(), i.focus();
    }, i.onKeyDown = function(u) {
      var l = i.props, c = l.isMulti, d = l.backspaceRemovesValue, f = l.escapeClearsValue, p = l.inputValue, y = l.isClearable, m = l.isDisabled, v = l.menuIsOpen, I = l.onKeyDown, E = l.tabSelectsValue, S = l.openMenuOnFocus, P = i.state, T = P.focusedOption, A = P.focusedValue, D = P.selectValue;
      if (!m && !(typeof I == "function" && (I(u), u.defaultPrevented))) {
        switch (i.blockOptionHover = !0, u.key) {
          case "ArrowLeft":
            if (!c || p) return;
            i.focusValue("previous");
            break;
          case "ArrowRight":
            if (!c || p) return;
            i.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (p) return;
            if (A)
              i.removeValue(A);
            else {
              if (!d) return;
              c ? i.popValue() : y && i.clearValue();
            }
            break;
          case "Tab":
            if (i.isComposing || u.shiftKey || !v || !E || !T || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            S && i.isOptionSelected(T, D))
              return;
            i.selectOption(T);
            break;
          case "Enter":
            if (u.keyCode === 229)
              break;
            if (v) {
              if (!T || i.isComposing) return;
              i.selectOption(T);
              break;
            }
            return;
          case "Escape":
            v ? (i.setState({
              inputIsHiddenAfterUpdate: !1
            }), i.onInputChange("", {
              action: "menu-close",
              prevInputValue: p
            }), i.onMenuClose()) : y && f && i.clearValue();
            break;
          case " ":
            if (p)
              return;
            if (!v) {
              i.openMenu("first");
              break;
            }
            if (!T) return;
            i.selectOption(T);
            break;
          case "ArrowUp":
            v ? i.focusOption("up") : i.openMenu("last");
            break;
          case "ArrowDown":
            v ? i.focusOption("down") : i.openMenu("first");
            break;
          case "PageUp":
            if (!v) return;
            i.focusOption("pageup");
            break;
          case "PageDown":
            if (!v) return;
            i.focusOption("pagedown");
            break;
          case "Home":
            if (!v) return;
            i.focusOption("first");
            break;
          case "End":
            if (!v) return;
            i.focusOption("last");
            break;
          default:
            return;
        }
        u.preventDefault();
      }
    }, i.state.instancePrefix = "react-select-" + (i.props.instanceId || ++Fy), i.state.selectValue = Zr(r.value), r.menuIsOpen && i.state.selectValue.length) {
      var o = i.getFocusableOptionsWithIds(), a = i.buildFocusableOptions(), s = a.indexOf(i.state.selectValue[0]);
      i.state.focusableOptionsWithIds = o, i.state.focusedOption = a[s], i.state.focusedOptionId = Ai(o, a[s]);
    }
    return i;
  }
  return Wg(n, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && Ka(this.menuListRef, this.focusedOptionRef);
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      var o = this.props, a = o.isDisabled, s = o.menuIsOpen, u = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (u && !a && i.isDisabled || // ensure focus is on the Input when the menu opens
      u && s && !i.menuIsOpen) && this.focusInput(), u && a && !i.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !u && !a && i.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (Ka(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
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
    value: function(i, o) {
      this.props.onInputChange(i, o);
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
    value: function(i) {
      var o = this, a = this.state, s = a.selectValue, u = a.isFocused, l = this.buildFocusableOptions(), c = i === "first" ? 0 : l.length - 1;
      if (!this.props.isMulti) {
        var d = l.indexOf(s[0]);
        d > -1 && (c = d);
      }
      this.scrollToFocusedOptionOnUpdate = !(u && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: l[c],
        focusedOptionId: this.getFocusedOptionId(l[c])
      }, function() {
        return o.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(i) {
      var o = this.state, a = o.selectValue, s = o.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var u = a.indexOf(s);
        s || (u = -1);
        var l = a.length - 1, c = -1;
        if (a.length) {
          switch (i) {
            case "previous":
              u === 0 ? c = 0 : u === -1 ? c = l : c = u - 1;
              break;
            case "next":
              u > -1 && u < l && (c = u + 1);
              break;
          }
          this.setState({
            inputIsHidden: c !== -1,
            focusedValue: a[c]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", o = this.props.pageSize, a = this.state.focusedOption, s = this.getFocusableOptions();
      if (s.length) {
        var u = 0, l = s.indexOf(a);
        a || (l = -1), i === "up" ? u = l > 0 ? l - 1 : s.length - 1 : i === "down" ? u = (l + 1) % s.length : i === "pageup" ? (u = l - o, u < 0 && (u = 0)) : i === "pagedown" ? (u = l + o, u > s.length - 1 && (u = s.length - 1)) : i === "last" && (u = s.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
          focusedOption: s[u],
          focusedValue: null,
          focusedOptionId: this.getFocusedOptionId(s[u])
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
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(rr) : Z(Z({}, rr), this.props.theme) : rr;
      }
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var i = this.clearValue, o = this.cx, a = this.getStyles, s = this.getClassNames, u = this.getValue, l = this.selectOption, c = this.setValue, d = this.props, f = d.isMulti, p = d.isRtl, y = d.options, m = this.hasValue();
      return {
        clearValue: i,
        cx: o,
        getStyles: a,
        getClassNames: s,
        getValue: u,
        hasValue: m,
        isMulti: f,
        isRtl: p,
        options: y,
        selectOption: l,
        selectProps: d,
        setValue: c,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function() {
      var i = this.state.selectValue;
      return i.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function() {
      var i = this.props, o = i.isClearable, a = i.isMulti;
      return o === void 0 ? a : o;
    }
  }, {
    key: "isOptionDisabled",
    value: function(i, o) {
      return tl(this.props, i, o);
    }
  }, {
    key: "isOptionSelected",
    value: function(i, o) {
      return nl(this.props, i, o);
    }
  }, {
    key: "filterOption",
    value: function(i, o) {
      return rl(this.props, i, o);
    }
  }, {
    key: "formatOptionLabel",
    value: function(i, o) {
      if (typeof this.props.formatOptionLabel == "function") {
        var a = this.props.inputValue, s = this.state.selectValue;
        return this.props.formatOptionLabel(i, {
          context: o,
          inputValue: a,
          selectValue: s
        });
      } else
        return this.getOptionLabel(i);
    }
  }, {
    key: "formatGroupLabel",
    value: function(i) {
      return this.props.formatGroupLabel(i);
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
        var i = this.props, o = i.isDisabled, a = i.isSearchable, s = i.inputId, u = i.inputValue, l = i.tabIndex, c = i.form, d = i.menuIsOpen, f = i.required, p = this.getComponents(), y = p.Input, m = this.state, v = m.inputIsHidden, I = m.ariaSelection, E = this.commonProps, S = s || this.getElementId("input"), P = Z(Z(Z({
          "aria-autocomplete": "list",
          "aria-expanded": d,
          "aria-haspopup": !0,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": f,
          role: "combobox",
          "aria-activedescendant": this.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
        }, d && {
          "aria-controls": this.getElementId("listbox")
        }), !a && {
          "aria-readonly": !0
        }), this.hasValue() ? (I == null ? void 0 : I.action) === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return a ? /* @__PURE__ */ ee.createElement(y, _({}, E, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: S,
          innerRef: this.getInputRef,
          isDisabled: o,
          isHidden: v,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: l,
          form: c,
          type: "text",
          value: u
        }, P)) : /* @__PURE__ */ ee.createElement($b, _({
          id: S,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: Wr,
          onFocus: this.onInputFocus,
          disabled: o,
          tabIndex: l,
          inputMode: "none",
          form: c,
          value: ""
        }, P));
      }
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var i = this, o = this.getComponents(), a = o.MultiValue, s = o.MultiValueContainer, u = o.MultiValueLabel, l = o.MultiValueRemove, c = o.SingleValue, d = o.Placeholder, f = this.commonProps, p = this.props, y = p.controlShouldRenderValue, m = p.isDisabled, v = p.isMulti, I = p.inputValue, E = p.placeholder, S = this.state, P = S.selectValue, T = S.focusedValue, A = S.isFocused;
      if (!this.hasValue() || !y)
        return I ? null : /* @__PURE__ */ ee.createElement(d, _({}, f, {
          key: "placeholder",
          isDisabled: m,
          isFocused: A,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), E);
      if (v)
        return P.map(function(w, O) {
          var G = w === T, B = "".concat(i.getOptionLabel(w), "-").concat(i.getOptionValue(w));
          return /* @__PURE__ */ ee.createElement(a, _({}, f, {
            components: {
              Container: s,
              Label: u,
              Remove: l
            },
            isFocused: G,
            isDisabled: m,
            key: B,
            index: O,
            removeProps: {
              onClick: function() {
                return i.removeValue(w);
              },
              onTouchEnd: function() {
                return i.removeValue(w);
              },
              onMouseDown: function(j) {
                j.preventDefault();
              }
            },
            data: w
          }), i.formatOptionLabel(w, "value"));
        });
      if (I)
        return null;
      var D = P[0];
      return /* @__PURE__ */ ee.createElement(c, _({}, f, {
        data: D,
        isDisabled: m
      }), this.formatOptionLabel(D, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var i = this.getComponents(), o = i.ClearIndicator, a = this.commonProps, s = this.props, u = s.isDisabled, l = s.isLoading, c = this.state.isFocused;
      if (!this.isClearable() || !o || u || !this.hasValue() || l)
        return null;
      var d = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ ee.createElement(o, _({}, a, {
        innerProps: d,
        isFocused: c
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var i = this.getComponents(), o = i.LoadingIndicator, a = this.commonProps, s = this.props, u = s.isDisabled, l = s.isLoading, c = this.state.isFocused;
      if (!o || !l) return null;
      var d = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ ee.createElement(o, _({}, a, {
        innerProps: d,
        isDisabled: u,
        isFocused: c
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var i = this.getComponents(), o = i.DropdownIndicator, a = i.IndicatorSeparator;
      if (!o || !a) return null;
      var s = this.commonProps, u = this.props.isDisabled, l = this.state.isFocused;
      return /* @__PURE__ */ ee.createElement(a, _({}, s, {
        isDisabled: u,
        isFocused: l
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var i = this.getComponents(), o = i.DropdownIndicator;
      if (!o) return null;
      var a = this.commonProps, s = this.props.isDisabled, u = this.state.isFocused, l = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ ee.createElement(o, _({}, a, {
        innerProps: l,
        isDisabled: s,
        isFocused: u
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var i = this, o = this.getComponents(), a = o.Group, s = o.GroupHeading, u = o.Menu, l = o.MenuList, c = o.MenuPortal, d = o.LoadingMessage, f = o.NoOptionsMessage, p = o.Option, y = this.commonProps, m = this.state.focusedOption, v = this.props, I = v.captureMenuScroll, E = v.inputValue, S = v.isLoading, P = v.loadingMessage, T = v.minMenuHeight, A = v.maxMenuHeight, D = v.menuIsOpen, w = v.menuPlacement, O = v.menuPosition, G = v.menuPortalTarget, B = v.menuShouldBlockScroll, R = v.menuShouldScrollIntoView, j = v.noOptionsMessage, te = v.onMenuScrollToTop, L = v.onMenuScrollToBottom;
      if (!D) return null;
      var Y = function(g, he) {
        var K = g.type, pe = g.data, Oe = g.isDisabled, fe = g.isSelected, Ne = g.label, Je = g.value, nt = m === pe, rt = Oe ? void 0 : function() {
          return i.onOptionHover(pe);
        }, Vt = Oe ? void 0 : function() {
          return i.selectOption(pe);
        }, M = "".concat(i.getElementId("option"), "-").concat(he), z = {
          id: M,
          onClick: Vt,
          onMouseMove: rt,
          onMouseOver: rt,
          tabIndex: -1,
          role: "option",
          "aria-selected": i.isAppleDevice ? void 0 : fe
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ ee.createElement(p, _({}, y, {
          innerProps: z,
          data: pe,
          isDisabled: Oe,
          isSelected: fe,
          key: M,
          label: Ne,
          type: K,
          value: Je,
          isFocused: nt,
          innerRef: nt ? i.getFocusedOptionRef : void 0
        }), i.formatOptionLabel(g.data, "menu"));
      }, se;
      if (this.hasOptions())
        se = this.getCategorizedOptions().map(function(ie) {
          if (ie.type === "group") {
            var g = ie.data, he = ie.options, K = ie.index, pe = "".concat(i.getElementId("group"), "-").concat(K), Oe = "".concat(pe, "-heading");
            return /* @__PURE__ */ ee.createElement(a, _({}, y, {
              key: pe,
              data: g,
              options: he,
              Heading: s,
              headingProps: {
                id: Oe,
                data: ie.data
              },
              label: i.formatGroupLabel(ie.data)
            }), ie.options.map(function(fe) {
              return Y(fe, "".concat(K, "-").concat(fe.index));
            }));
          } else if (ie.type === "option")
            return Y(ie, "".concat(ie.index));
        });
      else if (S) {
        var de = P({
          inputValue: E
        });
        if (de === null) return null;
        se = /* @__PURE__ */ ee.createElement(d, y, de);
      } else {
        var ye = j({
          inputValue: E
        });
        if (ye === null) return null;
        se = /* @__PURE__ */ ee.createElement(f, y, ye);
      }
      var b = {
        minMenuHeight: T,
        maxMenuHeight: A,
        menuPlacement: w,
        menuPosition: O,
        menuShouldScrollIntoView: R
      }, ue = /* @__PURE__ */ ee.createElement(Gm, _({}, y, b), function(ie) {
        var g = ie.ref, he = ie.placerProps, K = he.placement, pe = he.maxHeight;
        return /* @__PURE__ */ ee.createElement(u, _({}, y, b, {
          innerRef: g,
          innerProps: {
            onMouseDown: i.onMenuMouseDown,
            onMouseMove: i.onMenuMouseMove
          },
          isLoading: S,
          placement: K
        }), /* @__PURE__ */ ee.createElement(oy, {
          captureEnabled: I,
          onTopArrive: te,
          onBottomArrive: L,
          lockEnabled: B
        }, function(Oe) {
          return /* @__PURE__ */ ee.createElement(l, _({}, y, {
            innerRef: function(Ne) {
              i.getMenuListRef(Ne), Oe(Ne);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": y.isMulti,
              id: i.getElementId("listbox")
            },
            isLoading: S,
            maxHeight: pe,
            focusedOption: m
          }), se);
        }));
      });
      return G || O === "fixed" ? /* @__PURE__ */ ee.createElement(c, _({}, y, {
        appendTo: G,
        controlElement: this.controlRef,
        menuPlacement: w,
        menuPosition: O
      }), ue) : ue;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var i = this, o = this.props, a = o.delimiter, s = o.isDisabled, u = o.isMulti, l = o.name, c = o.required, d = this.state.selectValue;
      if (c && !this.hasValue() && !s)
        return /* @__PURE__ */ ee.createElement(ly, {
          name: l,
          onFocus: this.onValueInputFocus
        });
      if (!(!l || s))
        if (u)
          if (a) {
            var f = d.map(function(m) {
              return i.getOptionValue(m);
            }).join(a);
            return /* @__PURE__ */ ee.createElement("input", {
              name: l,
              type: "hidden",
              value: f
            });
          } else {
            var p = d.length > 0 ? d.map(function(m, v) {
              return /* @__PURE__ */ ee.createElement("input", {
                key: "i-".concat(v),
                name: l,
                type: "hidden",
                value: i.getOptionValue(m)
              });
            }) : /* @__PURE__ */ ee.createElement("input", {
              name: l,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ ee.createElement("div", null, p);
          }
        else {
          var y = d[0] ? this.getOptionValue(d[0]) : "";
          return /* @__PURE__ */ ee.createElement("input", {
            name: l,
            type: "hidden",
            value: y
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var i = this.commonProps, o = this.state, a = o.ariaSelection, s = o.focusedOption, u = o.focusedValue, l = o.isFocused, c = o.selectValue, d = this.getFocusableOptions();
      return /* @__PURE__ */ ee.createElement(Jb, _({}, i, {
        id: this.getElementId("live-region"),
        ariaSelection: a,
        focusedOption: s,
        focusedValue: u,
        isFocused: l,
        selectValue: c,
        focusableOptions: d,
        isAppleDevice: this.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function() {
      var i = this.getComponents(), o = i.Control, a = i.IndicatorsContainer, s = i.SelectContainer, u = i.ValueContainer, l = this.props, c = l.className, d = l.id, f = l.isDisabled, p = l.menuIsOpen, y = this.state.isFocused, m = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ ee.createElement(s, _({}, m, {
        className: c,
        innerProps: {
          id: d,
          onKeyDown: this.onKeyDown
        },
        isDisabled: f,
        isFocused: y
      }), this.renderLiveRegion(), /* @__PURE__ */ ee.createElement(o, _({}, m, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: f,
        isFocused: y,
        menuIsOpen: p
      }), /* @__PURE__ */ ee.createElement(u, _({}, m, {
        isDisabled: f
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ ee.createElement(a, _({}, m, {
        isDisabled: f
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(i, o) {
      var a = o.prevProps, s = o.clearFocusValueOnUpdate, u = o.inputIsHiddenAfterUpdate, l = o.ariaSelection, c = o.isFocused, d = o.prevWasFocused, f = o.instancePrefix, p = i.options, y = i.value, m = i.menuIsOpen, v = i.inputValue, I = i.isMulti, E = Zr(y), S = {};
      if (a && (y !== a.value || p !== a.options || m !== a.menuIsOpen || v !== a.inputValue)) {
        var P = m ? Sy(i, E) : [], T = m ? fs(Or(i, E), "".concat(f, "-option")) : [], A = s ? wy(o, E) : null, D = Ey(o, P), w = Ai(T, D);
        S = {
          selectValue: E,
          focusedOption: D,
          focusedOptionId: w,
          focusableOptionsWithIds: T,
          focusedValue: A,
          clearFocusValueOnUpdate: !1
        };
      }
      var O = u != null && i !== a ? {
        inputIsHidden: u,
        inputIsHiddenAfterUpdate: void 0
      } : {}, G = l, B = c && d;
      return c && !B && (G = {
        value: Kn(I, E, E[0] || null),
        options: E,
        action: "initial-input-focus"
      }, B = !d), (l == null ? void 0 : l.action) === "initial-input-focus" && (G = null), Z(Z(Z({}, S), O), {}, {
        prevProps: i,
        ariaSelection: G,
        prevWasFocused: B
      });
    }
  }]), n;
}(Es);
Ro.defaultProps = Ay;
var Py = /* @__PURE__ */ Fs(function(e, t) {
  var n = Pu(e);
  return /* @__PURE__ */ ee.createElement(Ro, _({
    ref: t
  }, n));
}), Kr = Py;
const Gy = rr, Bo = {
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
}, ky = {
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
function Ry(e) {
  if (!e) return rr;
  const t = typeof e == "function" ? e(Bo) : e, {
    colors: n,
    spacing: r,
    borderRadius: i
  } = no(
    Gy,
    t
  );
  return {
    borderRadius: i,
    colors: n,
    spacing: r
  };
}
function no(e, ...t) {
  const n = {
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
  for (const r of t)
    r && (n.borderRadius = r.borderRadius ?? n.borderRadius, Object.assign(n.boxShadow, r.boxShadow), Object.assign(n.colors, r.colors), Object.assign(n.spacing, r.spacing));
  return n;
}
function By(e) {
  const {
    field: t,
    markdown: n
  } = e, { prop: r } = t, {
    getClassNames: i,
    getStyles: o,
    theme: a
  } = ct(), s = {
    color: a.colors.neutral50,
    fontWeight: 400,
    fontSize: "0.75rem",
    gridArea: "description",
    textWrap: "balance",
    lineHeight: "1.5"
  };
  return r.type === "app" ? /* @__PURE__ */ X("p", { className: i("description", e), style: o("description", s, e), children: "Credentials are encrypted." }) : r.description ? /* @__PURE__ */ lt("div", { className: i("description", e), style: o("description", s, e), children: [
    " ",
    /* @__PURE__ */ X(pu, { components: {
      a: ({ ...u }) => /* @__PURE__ */ X("a", { ...u, target: "_blank", rel: "noopener noreferrer" })
    }, children: n })
  ] }) : null;
}
function Oy(e) {
  const { field: t } = e, {
    errors: n = {},
    prop: r = {},
    enableDebugging: i
  } = t;
  if (!i || !n[r.name])
    return null;
  const o = n[r.name].map((u) => ({
    type: "alert",
    alertType: "error",
    content: u
  }));
  return /* @__PURE__ */ X("div", { className: "pd-errors", style: {
    display: "grid",
    gridTemplateColumns: "max-content"
  }, children: /* @__PURE__ */ X(() => /* @__PURE__ */ X(ws, { children: o.map((u, l) => /* @__PURE__ */ X(Di, { prop: u }, l)) }), {}) });
}
function Ty(e) {
  const {
    text: t,
    field: n
  } = e, { id: r } = n, {
    getProps: i,
    theme: o
  } = ct(), a = {
    color: o.colors.neutral90,
    fontWeight: 450,
    gridArea: "label",
    lineHeight: "1.5"
  };
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    /* @__PURE__ */ X("label", { htmlFor: r, ...i("label", a, e), children: t })
  );
}
const Vy = (e) => {
  const {
    prop: t,
    enabled: n,
    onClick: r
  } = e, {
    getProps: i,
    theme: o
  } = ct(), a = {
    color: o.colors.neutral60,
    display: "inline-flex",
    alignItems: "center",
    padding: `${o.spacing.baseUnit}px ${o.spacing.baseUnit * 1.5}px ${o.spacing.baseUnit}px ${o.spacing.baseUnit * 2.5}px`,
    border: `1px solid ${o.colors.neutral30}`,
    borderRadius: o.borderRadius,
    cursor: "pointer",
    fontSize: "0.8125rem",
    fontWeight: 450,
    gap: o.spacing.baseUnit * 2,
    textWrap: "nowrap"
  };
  return /* @__PURE__ */ lt("button", { onClick: r, type: "button", ...i("optionalFieldButton", a, e), children: [
    /* @__PURE__ */ X("span", { children: n ? "-" : "+" }),
    /* @__PURE__ */ X("span", { style: {
      marginRight: 8
    }, children: t.label || t.name })
  ] });
}, ol = (e) => {
  const { onChange: t } = e, {
    getProps: n,
    theme: r
  } = ct(), i = {
    backgroundColor: r.colors.primary,
    borderRadius: r.borderRadius,
    border: "solid 1px",
    borderColor: r.colors.primary25,
    color: r.colors.primary25,
    padding: "0.5rem",
    fontSize: "0.8125rem",
    fontWeight: "450",
    gridArea: "control",
    cursor: "pointer",
    width: "100%"
  };
  return /* @__PURE__ */ X("button", { onClick: t, type: "button", ...n("loadMoreButton", i, e), children: "Load More" });
}, Dy = {
  Description: By,
  Errors: Oy,
  Label: Ty,
  OptionalFieldButton: Vy,
  Button: ol
}, Oo = dr({
  // eslint-disable-line @typescript-eslint/no-explicit-any
  classNames: {},
  classNamePrefix: "",
  components: {},
  styles: {},
  theme: Bo,
  unstyled: !1
});
function Ny() {
  const e = Ln(Oo) ?? {}, t = Ry(e.theme ?? {});
  function n() {
    return e.classNamePrefix ?? "";
  }
  function r(s) {
    var c;
    const u = `${(e == null ? void 0 : e.classNamePrefix) ?? "pd-"}${s}`, l = {
      ...((c = e.classNames) == null ? void 0 : c[s]) ?? {}
    };
    return typeof (l == null ? void 0 : l.container) == "function" && (l.container = typeof (l == null ? void 0 : l.container) == "function" ? (...d) => {
      var f;
      return [
        (f = l == null ? void 0 : l.container) == null ? void 0 : f.call(l, ...d),
        u
      ].join(" ");
    } : () => u), l;
  }
  function i(s, u) {
    var l;
    return {
      ...gr,
      ...u ?? {},
      ...((l = e == null ? void 0 : e.components) == null ? void 0 : l[s]) ?? {}
    };
  }
  function o(s, u) {
    var l;
    return by(((l = e.styles) == null ? void 0 : l[s]) ?? {}, u ?? {});
  }
  function a(s, u) {
    return {
      classNamePrefix: n(),
      classNames: r(s),
      components: i(s, u == null ? void 0 : u.components),
      styles: o(s, u == null ? void 0 : u.styles),
      theme: t
    };
  }
  return {
    getClassNamePrefix: n,
    getClassNames: r,
    getComponents: i,
    getProps: a,
    getStyles: o,
    theme: t
  };
}
function ct() {
  const e = Ln(Oo) ?? {}, t = e.theme, n = e.unstyled ? ky : Bo, r = typeof t == "function" ? no(n, t(n)) : no(n, t);
  function i(u, l) {
    var f;
    const c = `${(e == null ? void 0 : e.classNamePrefix) ?? "pd-"}${u.toLowerCase()}`, d = (f = e.classNames) == null ? void 0 : f[u];
    if (typeof d == "function") {
      const p = d, y = {
        ...l ?? {},
        theme: r
      };
      return [
        c,
        p(y)
      ].filter(Boolean).join(" ");
    }
    return [
      c,
      d
    ].filter(Boolean).join(" ");
  }
  function o() {
    return {
      ...Dy,
      ...(e == null ? void 0 : e.components) ?? {}
    };
  }
  function a(u, l, c) {
    var f;
    const d = (f = e.styles) == null ? void 0 : f[u];
    if (typeof d == "function") {
      const p = d, y = {
        ...c ?? {},
        theme: r
      };
      return p(l, y);
    }
    return d ? {
      ...l,
      ...d
    } : l;
  }
  function s(u, l, c) {
    return {
      className: i(u, c),
      style: a(u, l, c)
    };
  }
  return {
    getClassNames: i,
    getComponents: o,
    getProps: s,
    getStyles: a,
    select: Ny(),
    theme: r
  };
}
const pI = ({
  children: e,
  ...t
}) => /* @__PURE__ */ X(Oo.Provider, { value: t, children: e }), al = dr(void 0), zn = () => {
  const e = Ln(al);
  if (!e)
    throw new Error("Must be used inside FormFieldContext.Provider");
  return e;
}, My = (e, t) => {
  var i;
  const n = $t(), r = bn({
    ...t == null ? void 0 : t.useQueryOpts,
    queryKey: [
      "accounts",
      e
    ],
    queryFn: () => n.getAccounts(e)
  });
  return {
    ...r,
    accounts: ((i = r.data) == null ? void 0 : i.data) || []
  };
}, Ly = (e) => /* @__PURE__ */ X(gr.Option, { ...e, children: e.data.name });
function Xy({ app: e }) {
  const t = $t(), n = zn(), {
    id: r,
    prop: i,
    value: o,
    onChange: a
  } = n, {
    getProps: s,
    select: u,
    theme: l
  } = ct(), c = {
    color: l.colors.neutral60,
    gridArea: "control"
  }, d = {
    backgroundColor: l.colors.primary,
    borderRadius: l.borderRadius,
    border: "solid 1px",
    borderColor: l.colors.primary25,
    color: l.colors.primary25,
    padding: "0.25rem 0.5rem",
    gridArea: "control"
  }, f = {
    components: {
      Option: Ly
    },
    styles: {
      control: (P) => ({
        ...P,
        gridArea: "control",
        boxShadow: l.boxShadow.input
      })
    }
  }, p = u.getProps("controlAppSelect", f), y = void 0, {
    isLoading: m,
    // TODO error
    accounts: v,
    refetch: I
  } = My(
    {
      app: e.name_slug,
      oauth_app_id: y
    },
    {
      useQueryOpts: {
        enabled: !!e,
        suspense: !!e
      }
    }
  ), E = async () => {
    t.connectAccount({
      app: i.app,
      oauthAppId: y,
      onSuccess: async (P) => {
        await I(), a({
          authProvisionId: P.id
        });
      },
      onError: () => {
      }
    });
  }, S = At(() => {
    let P = o;
    if (P != null) {
      for (const T of v)
        if (P.authProvisionId === T.id) {
          P = T;
          break;
        }
    }
    return P;
  }, [
    v,
    o
  ]);
  return /* @__PURE__ */ X("div", { ...s("controlApp", c, {
    app: e,
    ...n
  }), children: m ? `Loading ${e.name} accounts...` : v.length ? /* @__PURE__ */ X(
    Kr,
    {
      instanceId: r,
      value: S,
      options: [
        ...v,
        {
          id: "_new",
          name: `Connect new ${e.name} account...`
        }
      ],
      ...p,
      required: !0,
      placeholder: `Select ${e.name} account...`,
      isLoading: m,
      isClearable: !0,
      isSearchable: !0,
      getOptionLabel: (P) => P.name,
      getOptionValue: (P) => P.id,
      onChange: (P) => {
        P ? P.id === "_new" ? E() : a({
          authProvisionId: P.id
        }) : a(void 0);
      }
    }
  ) : /* @__PURE__ */ lt("button", { type: "button", ...s("connectButton", d, {
    app: e,
    ...n
  }), onClick: () => E(), children: [
    "Connect ",
    e.name
  ] }) });
}
function Hy() {
  const e = zn(), {
    id: t,
    value: n,
    onChange: r
  } = e, { getProps: i } = ct();
  return /* @__PURE__ */ X("input", { id: t, type: "checkbox", ...i("controlBoolean", {
    width: "16px",
    height: "16px",
    gridArea: "control",
    margin: "0 0.5rem 0 0"
  }, e), checked: n ?? !1, onChange: (a) => r(a.target.checked) });
}
function zy() {
  const e = zn(), {
    id: t,
    onChange: n,
    prop: r,
    value: i
  } = e, {
    getProps: o,
    theme: a
  } = ct(), s = {
    color: a.colors.neutral60,
    display: "block",
    border: "1px solid",
    borderColor: a.colors.neutral20,
    padding: 6,
    width: "100%",
    borderRadius: a.borderRadius,
    gridArea: "control",
    boxShadow: a.boxShadow.input
  };
  let u = "off", l = "text", c = (d) => d;
  switch (r.type) {
    case "string":
      break;
    case "integer":
      l = "number", c = (d) => d ? parseInt(d) : void 0;
      break;
    default:
      throw new Error("unexpected prop.type for ControlInput: " + r.type);
  }
  return "secret" in r && r.secret && (l = "password", u = "new-password"), /* @__PURE__ */ X(
    "input",
    {
      id: t,
      type: l,
      name: r.name,
      value: i ?? "",
      onChange: (d) => n(c(d.target.value)),
      ...o("controlInput", s, e),
      min: "min" in r ? r.min : void 0,
      max: "max" in r ? r.max : void 0,
      autoComplete: u,
      "data-lpignore": "true",
      "data-1p-ignore": "true",
      required: !r.optional
    }
  );
}
var Wy = ["allowCreateWhileLoading", "createOptionPosition", "formatCreateLabel", "isValidNewOption", "getNewOptionData", "onCreateOption", "options", "onChange"], gs = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0, i = String(t).toLowerCase(), o = String(r.getOptionValue(n)).toLowerCase(), a = String(r.getOptionLabel(n)).toLowerCase();
  return o === i || a === i;
}, Si = {
  formatCreateLabel: function(t) {
    return 'Create "'.concat(t, '"');
  },
  isValidNewOption: function(t, n, r, i) {
    return !(!t || n.some(function(o) {
      return gs(t, o, i);
    }) || r.some(function(o) {
      return gs(t, o, i);
    }));
  },
  getNewOptionData: function(t, n) {
    return {
      label: n,
      value: t,
      __isNew__: !0
    };
  }
};
function Zy(e) {
  var t = e.allowCreateWhileLoading, n = t === void 0 ? !1 : t, r = e.createOptionPosition, i = r === void 0 ? "last" : r, o = e.formatCreateLabel, a = o === void 0 ? Si.formatCreateLabel : o, s = e.isValidNewOption, u = s === void 0 ? Si.isValidNewOption : s, l = e.getNewOptionData, c = l === void 0 ? Si.getNewOptionData : l, d = e.onCreateOption, f = e.options, p = f === void 0 ? [] : f, y = e.onChange, m = Et(e, Wy), v = m.getOptionValue, I = v === void 0 ? qu : v, E = m.getOptionLabel, S = E === void 0 ? Qu : E, P = m.inputValue, T = m.isLoading, A = m.isMulti, D = m.value, w = m.name, O = At(function() {
    return u(P, Zr(D), p, {
      getOptionValue: I,
      getOptionLabel: S
    }) ? c(P, a(P)) : void 0;
  }, [a, c, S, I, P, u, p, D]), G = At(function() {
    return (n || !T) && O ? i === "first" ? [O].concat(wn(p)) : [].concat(wn(p), [O]) : p;
  }, [n, i, T, O, p]), B = ze(function(R, j) {
    if (j.action !== "select-option")
      return y(R, j);
    var te = Array.isArray(R) ? R : [R];
    if (te[te.length - 1] === O) {
      if (d) d(P);
      else {
        var L = c(P, P), Y = {
          action: "create-option",
          name: w,
          option: L
        };
        y(Kn(A, [].concat(wn(Zr(D)), [L]), L), Y);
      }
      return;
    }
    y(R, j);
  }, [c, P, A, w, O, d, y, D]);
  return Z(Z({}, m), {}, {
    options: G,
    onChange: B
  });
}
var jy = /* @__PURE__ */ Fs(function(e, t) {
  var n = Pu(e), r = Zy(n);
  return /* @__PURE__ */ ee.createElement(Ro, _({
    ref: t
  }, r));
}), Jy = jy;
function ro({
  isCreatable: e,
  options: t,
  selectProps: n,
  showLoadMoreButton: r,
  onLoadMore: i
}) {
  const o = zn(), {
    id: a,
    prop: s,
    value: u,
    onChange: l
  } = o, {
    select: c,
    theme: d
  } = ct(), [
    f,
    p
  ] = Ie(t), [
    y,
    m
  ] = Ie(u);
  et(() => {
    p(t);
  }, [
    t
  ]), et(() => {
    m(u);
  }, [
    u
  ]);
  const v = {
    styles: {
      container: (w) => ({
        ...w,
        gridArea: "control",
        boxShadow: d.boxShadow.input
      })
    }
  }, I = At(() => {
    let w = y;
    if (w != null)
      if (Array.isArray(w)) {
        if (typeof w[0] != "object") {
          const O = [];
          for (const G of w) {
            let B = {
              label: G,
              value: G
            };
            for (const R of f)
              if (R.value === G) {
                B = R;
                break;
              }
            O.push(B);
          }
          w = O;
        }
      } else if (typeof w != "object")
        if ((f == null ? void 0 : f[0]) && typeof f[0] == "object") {
          for (const G of f)
            if (G.value === y) {
              w = G;
              break;
            }
        } else
          w = {
            label: y,
            value: y
          };
      else w.__lv && (w = w.__lv);
    return w;
  }, [
    y,
    f
  ]), E = ({
    // eslint-disable-next-line react/prop-types
    children: w,
    ...O
  }) => /* @__PURE__ */ lt(gr.MenuList, { ...O, children: [
    w,
    /* @__PURE__ */ X("div", { className: "pt-4", children: /* @__PURE__ */ X(ol, { onChange: i }) })
  ] }), S = c.getProps("controlSelect", v);
  r && (S.components = {
    // eslint-disable-next-line react/prop-types
    ...S.components,
    MenuList: E
  });
  const P = (w) => {
    const O = (j) => typeof j == "object" ? j : {
      label: j,
      value: j
    }, G = O(w);
    let B = G;
    const R = f ? [
      G,
      ...f
    ] : [
      G
    ];
    p(R), s.type.endsWith("[]") && (Array.isArray(y) ? B = [
      ...y.map(O),
      G
    ] : B = [
      G
    ]), m(B), T(B);
  }, T = (w) => {
    if (w)
      if (Array.isArray(w))
        typeof w[0] == "object" && "value" in w[0] ? l({
          __lv: w
        }) : l(w);
      else if (typeof w == "object" && "value" in w)
        l({
          __lv: w
        });
      else
        throw new Error("unhandled option type");
    else
      l(void 0);
  }, A = {
    onCreateOption: s.remoteOptions ? P : void 0
  };
  return /* @__PURE__ */ X(
    e ? Jy : Kr,
    {
      inputId: a,
      instanceId: a,
      options: f,
      value: I,
      isMulti: s.type.endsWith("[]"),
      isClearable: !0,
      required: !s.optional,
      ...S,
      ...n,
      ...A,
      onChange: T
    }
  );
}
function Yy({ queryEnabled: e }) {
  const t = $t(), {
    userId: n,
    component: r,
    configurableProps: i,
    configuredProps: o,
    dynamicProps: a,
    props: { disableQueryDisabling: s }
  } = wo(), {
    idx: u,
    prop: l
  } = zn(), [
    c,
    d
  ] = Ie(""), [
    f,
    p
  ] = Ie(0), [
    y,
    m
  ] = Ie(!0), [
    v,
    I
  ] = Ie(void 0), [
    E,
    S
  ] = Ie({
    page: 0,
    prevContext: {},
    data: [],
    values: /* @__PURE__ */ new Set()
  }), P = {};
  for (let L = 0; L < u; L++) {
    const Y = i[L];
    P[Y.name] = o[Y.name];
  }
  const T = {
    userId: n,
    page: f,
    prevContext: v,
    componentId: r.key,
    propName: l.name,
    configuredProps: P,
    dynamicPropsId: a == null ? void 0 : a.id
  };
  l.useQuery && (T.query = c || "");
  const A = {
    ...T
  };
  delete A.dynamicPropsId;
  const [
    D,
    w
  ] = Ie(), O = () => {
    p(E.page), I(E.prevContext), S({
      ...E,
      prevContext: {}
    });
  }, {
    isFetching: G,
    refetch: B
  } = bn({
    queryKey: [
      "componentConfigure",
      A
    ],
    queryFn: async () => {
      w(void 0);
      const L = await t.componentConfigure(T), {
        options: Y,
        stringOptions: se,
        errors: de
      } = L;
      if (de != null && de.length) {
        try {
          w(JSON.parse(de[0]));
        } catch {
          w({
            name: "Error",
            message: de[0]
          });
        }
        return [];
      }
      let ye = [];
      if (Y != null && Y.length && (ye = Y), se != null && se.length) {
        const g = [];
        for (const he of se)
          g.push({
            label: he,
            value: he
          });
        ye = g;
      }
      const b = [], ue = new Set(E.values);
      for (const g of ye || []) {
        const he = typeof g == "string" ? g : g.value;
        ue.has(he) || (ue.add(he), b.push(g));
      }
      let ie = E.data;
      return b.length ? (ie = [
        ...E.data,
        ...b
      ], S({
        page: f + 1,
        prevContext: L.context,
        data: ie,
        values: ue
      })) : m(!1), ie;
    },
    enabled: !!e
  }), R = () => !G && !D && y, j = D ? D.message : s ? "Click to configure" : e ? void 0 : "Configure props above first", te = s ? !1 : !e;
  return /* @__PURE__ */ X(
    ro,
    {
      isCreatable: !0,
      showLoadMoreButton: R(),
      onLoadMore: O,
      options: E.data,
      selectProps: {
        isLoading: G,
        placeholder: j,
        isDisabled: te,
        inputValue: l.useQuery ? c : void 0,
        onInputChange(L) {
          l.useQuery && (d(L), B());
        },
        onMenuOpen() {
          s && !e && B();
        }
      }
    }
  );
}
function _y(e) {
  const {
    field: t,
    form: n
  } = e, { queryDisabledIdx: r } = n, {
    prop: i,
    idx: o
  } = t, a = "app" in t.extra ? t.extra.app : void 0;
  if (i.remoteOptions || i.type === "$.discord.channel")
    return /* @__PURE__ */ X(Yy, { queryEnabled: r == null || r >= o });
  if ("options" in i && i.options) {
    let s = i.options;
    return typeof s[0] != "object" && (s = s.map((u) => ({
      label: u,
      value: u
    }))), /* @__PURE__ */ X(ro, { options: s, components: {
      IndicatorSeparator: () => null
    } });
  }
  if (i.type.endsWith("[][]"))
    throw new Error("Unsupported property type: " + i.type);
  if (i.type.endsWith("[]"))
    return /* @__PURE__ */ X(ro, { isCreatable: !0, options: [], components: {
      IndicatorSeparator: () => null
    } });
  switch (i.type) {
    case "app":
      return /* @__PURE__ */ X(Xy, { app: a });
    case "boolean":
      return /* @__PURE__ */ X(Hy, {});
    case "string":
    case "integer":
      return /* @__PURE__ */ X(zy, {});
    default:
      throw new Error("Unsupported property type: " + i.type);
  }
}
function Uy(e) {
  const {
    form: t,
    field: n
  } = e, { prop: r } = n, {
    getProps: i,
    getComponents: o
  } = ct(), a = {
    display: "grid",
    gridTemplateAreas: n.prop.type == "boolean" ? '"control label" "description description" "error error"' : '"label label" "control control" "description description" "error error"',
    gridTemplateColumns: "min-content auto",
    gap: "0.25rem 0",
    alignItems: "center",
    fontSize: "0.875rem"
  }, {
    Label: s,
    Description: u,
    Errors: l
  } = o(), c = "app" in n.extra ? n.extra.app : void 0;
  if (c && !c.auth_type)
    return null;
  let d = r.label || r.name;
  return c && (d = `Connect ${c.name} account`), /* @__PURE__ */ lt("div", { ...i("field", a, e), children: [
    /* @__PURE__ */ X(s, { text: d, field: n, form: t }),
    /* @__PURE__ */ X(_y, { field: n, form: t }),
    /* @__PURE__ */ X(u, { markdown: r.description, field: n, form: t }),
    /* @__PURE__ */ X(l, { field: n, form: t })
  ] });
}
const Qy = (e, t) => {
  var i;
  const n = $t(), r = bn({
    queryKey: [
      "app",
      e
    ],
    queryFn: () => n.app(e),
    ...t == null ? void 0 : t.useQueryOpts
  });
  return {
    ...r,
    app: (i = r.data) == null ? void 0 : i.data
  };
};
function qy({
  prop: e,
  idx: t
}) {
  const n = wo(), {
    id: r,
    configuredProps: i,
    registerField: o,
    setConfiguredProp: a,
    errors: s,
    enableDebugging: u
  } = n, l = e.type === "app" && "app" in e ? e.app : void 0, {
    // TODO error
    app: c
  } = Qy(l || "", {
    useQueryOpts: {
      enabled: !!l,
      suspense: !!l
      // this seems to work (this overrides enabled so don't just set to true)
    }
  }), f = {
    id: `pd${r}${e.name}`,
    prop: e,
    idx: t,
    value: i[e.name],
    onChange(p) {
      a(t, p);
    },
    extra: {
      app: c
      // XXX fix ts
    },
    errors: s,
    enableDebugging: u
  };
  return et(() => o(f), [
    f
  ]), /* @__PURE__ */ X(al.Provider, { value: f, children: /* @__PURE__ */ X(Uy, { field: f, form: n }) });
}
class $y extends Es {
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
function Ky(e) {
  const { form: t } = e, {
    propsNeedConfiguring: n,
    submitting: r
  } = t, {
    getProps: i,
    theme: o
  } = ct();
  return /* @__PURE__ */ X("input", { type: "submit", value: r ? "Submitting..." : "Submit", ...i("controlSubmit", ((s) => {
    var u;
    return {
      width: "fit-content",
      textTransform: "capitalize",
      backgroundColor: s ? o.colors.neutral10 : o.colors.primary,
      color: s ? o.colors.neutral40 : o.colors.neutral0,
      padding: `${o.spacing.baseUnit * 1.75}px ${o.spacing.baseUnit * 16}px`,
      borderRadius: o.borderRadius,
      boxShadow: (u = o.boxShadow) == null ? void 0 : u.button,
      cursor: "pointer",
      fontSize: "0.875rem",
      opacity: r ? 0.5 : void 0,
      margin: "0.5rem 0 0 0"
    };
  })(n.length || r), e), disabled: n.length || r });
}
const eI = [
  "ConfigurationError"
];
function tI() {
  const e = wo(), {
    configurableProps: t,
    dynamicPropsQueryIsFetching: n,
    isValid: r,
    optionalPropIsEnabled: i,
    optionalPropSetEnabled: o,
    props: a,
    setSubmitting: s,
    sdkErrors: u,
    submitting: l,
    enableDebugging: c
  } = e, d = c || u.filter((G) => eI.includes(G.name)).length > 0, {
    hideOptionalProps: f,
    onSubmit: p
  } = a, [
    y,
    m
  ] = Ie([]);
  et(() => {
    l ? m([]) : u && u.length && m(u.map((G) => ({
      type: "alert",
      alertType: "error",
      content: `# ${G.name}
${G.message}`
    })));
  }, [
    u,
    l
  ]);
  const {
    getComponents: v,
    getProps: I,
    theme: E
  } = ct(), { OptionalFieldButton: S } = v(), P = {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
  }, T = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.375rem"
  }, A = {
    fontWeight: 600,
    textTransform: "capitalize",
    color: E.colors.neutral60,
    fontSize: "0.875rem",
    lineHeight: "1.375",
    margin: "0 0 0.5rem 0"
  }, D = async (G) => {
    if (p && (G.preventDefault(), r)) {
      s(!0);
      try {
        await p(e);
      } finally {
        s(!1);
      }
    }
  }, w = [], O = [];
  for (let G = 0; G < t.length; G++) {
    const B = t[G];
    if (!B.hidden && !Br.includes(B.type)) {
      if (B.optional) {
        const R = i(B);
        if (O.push([
          B,
          R
        ]), !R)
          continue;
      }
      w.push([
        B,
        G
      ]);
    }
  }
  return /* @__PURE__ */ X($y, { fallback: (G) => /* @__PURE__ */ lt("p", { style: {
    color: "red"
  }, children: [
    "Error: ",
    G && typeof G == "object" && "message" in G && typeof G.message == "string" ? G.message : "Unknown"
  ] }), children: /* @__PURE__ */ X(ic, { fallback: /* @__PURE__ */ X("p", { children: "Loading form..." }), children: /* @__PURE__ */ lt("form", { ...I("componentForm", P, a), onSubmit: D, children: [
    w.map(([
      G,
      B
    ]) => G.type === "alert" ? /* @__PURE__ */ X(Di, { prop: G }, G.name) : /* @__PURE__ */ X(qy, { prop: G, idx: B }, G.name)),
    n && /* @__PURE__ */ X("p", { children: "Loading dynamic props..." }),
    !f && O.length ? /* @__PURE__ */ lt("div", { children: [
      /* @__PURE__ */ X("div", { ...I("heading", A, a), children: "Optional Props" }),
      /* @__PURE__ */ X("div", { ...I("optionalFields", T, a), children: O.map(([
        G,
        B
      ]) => /* @__PURE__ */ X(
        S,
        {
          prop: G,
          enabled: B,
          onClick: () => o(G, !B)
        },
        G.name
      )) })
    ] }) : null,
    d && (y == null ? void 0 : y.map((G, B) => /* @__PURE__ */ X(Di, { prop: G }, B))),
    p && /* @__PURE__ */ X(Ky, { form: e })
  ] }) }) });
}
function nI(e) {
  return /* @__PURE__ */ X(Vg, { props: e, children: /* @__PURE__ */ X(tI, {}) });
}
const rI = ({ key: e }, t) => {
  var i;
  const n = $t(), r = bn({
    queryKey: [
      "component",
      e
    ],
    queryFn: () => n.component({
      key: e
    }),
    enabled: !!e,
    ...t == null ? void 0 : t.useQueryOpts
  });
  return {
    ...r,
    component: (i = r.data) == null ? void 0 : i.data
  };
};
function fI(e) {
  const {
    isLoading: t,
    error: n,
    component: r
  } = rI({
    key: e.componentKey
  });
  if (!e.componentKey)
    throw new Error("componentKey required");
  return t ? /* @__PURE__ */ X("p", { children: "Loading..." }) : n ? /* @__PURE__ */ lt("p", { children: [
    "Error: ",
    n.message
  ] }) : r ? /* @__PURE__ */ X(nI, { component: r, ...e }) : /* @__PURE__ */ X("p", { children: "Component not found" });
}
function hI() {
  const e = zn(), {
    id: t,
    onChange: n,
    value: r
  } = e, {
    getProps: i,
    theme: o
  } = ct(), a = {
    display: "block",
    gridArea: "control",
    width: "100%",
    fontSize: "0.875rem",
    boxShadow: o.boxShadow.input
  };
  let s = r;
  return typeof s == "object" && (s = JSON.stringify(s)), /* @__PURE__ */ X(
    "textarea",
    {
      id: t,
      value: s,
      onChange: (u) => n(u.target.value),
      ...i("controlAny", a, e)
    }
  );
}
const iI = (e) => {
  var r;
  const t = $t(), n = bn({
    queryKey: [
      "apps",
      e
    ],
    queryFn: () => t.apps(e)
  });
  return {
    ...n,
    apps: ((r = n.data) == null ? void 0 : r.data) || []
  };
};
function gI({
  value: e,
  onChange: t
}) {
  const [
    n,
    r
  ] = Ie(""), i = io(), {
    isLoading: o,
    // TODO error
    apps: a
  } = iI({
    q: n
  }), {
    Option: s,
    SingleValue: u
  } = gr, l = (a == null ? void 0 : a.find((c) => c.name_slug === (e == null ? void 0 : e.name_slug))) || null;
  return /* @__PURE__ */ X(
    Kr,
    {
      instanceId: i,
      className: "react-select-container text-sm",
      classNamePrefix: "react-select",
      components: {
        Option: (c) => /* @__PURE__ */ X(s, { ...c, children: /* @__PURE__ */ lt("div", { style: {
          display: "flex",
          gap: 10
        }, children: [
          /* @__PURE__ */ X(
            "img",
            {
              src: `https://pipedream.com/s.v0/${c.data.id}/logo/48`,
              style: {
                height: 24,
                width: 24
              },
              alt: c.data.name
            }
          ),
          /* @__PURE__ */ X("span", { style: {
            whiteSpace: "nowrap"
          }, children: c.data.name })
        ] }) }),
        SingleValue: (c) => /* @__PURE__ */ X(u, { ...c, children: /* @__PURE__ */ lt("div", { style: {
          display: "flex",
          gap: 10,
          alignItems: "center"
        }, children: [
          /* @__PURE__ */ X(
            "img",
            {
              src: `https://pipedream.com/s.v0/${c.data.id}/logo/48`,
              style: {
                height: 24,
                width: 24
              },
              alt: c.data.name
            }
          ),
          /* @__PURE__ */ X("span", { style: {
            whiteSpace: "nowrap"
          }, children: c.data.name })
        ] }) }),
        IndicatorSeparator: () => null
      },
      options: a || [],
      getOptionLabel: (c) => c.name || c.name_slug,
      getOptionValue: (c) => c.name_slug,
      value: l,
      onChange: (c) => t == null ? void 0 : t(c || void 0),
      onInputChange: (c) => {
        c && r(c);
      },
      isLoading: o
    }
  );
}
const oI = (e) => {
  var r;
  const t = $t(), n = bn({
    queryKey: [
      "components",
      e
    ],
    queryFn: () => t.components(e)
  });
  return {
    ...n,
    components: ((r = n.data) == null ? void 0 : r.data) || []
  };
};
function mI({
  app: e,
  componentType: t,
  value: n,
  onChange: r
}) {
  const i = io(), {
    isLoading: o,
    components: a
  } = oI({
    app: e == null ? void 0 : e.name_slug,
    componentType: t
  }), s = (a == null ? void 0 : a.find((u) => u.key === (n == null ? void 0 : n.key))) || null;
  return /* @__PURE__ */ X(
    Kr,
    {
      instanceId: i,
      className: "react-select-container text-sm",
      classNamePrefix: "react-select",
      options: a,
      getOptionLabel: (u) => u.name || u.key,
      getOptionValue: (u) => u.key,
      value: s,
      onChange: (u) => r == null ? void 0 : r(u || void 0),
      isLoading: o,
      components: {
        IndicatorSeparator: () => null
      }
    }
  );
}
export {
  Di as Alert,
  nI as ComponentForm,
  fI as ComponentFormContainer,
  _y as Control,
  hI as ControlAny,
  Xy as ControlApp,
  Hy as ControlBoolean,
  zy as ControlInput,
  ro as ControlSelect,
  Ky as ControlSubmit,
  Oo as CustomizationContext,
  pI as CustomizeProvider,
  By as Description,
  $y as ErrorBoundary,
  Oy as Errors,
  Uy as Field,
  wu as FormContext,
  Vg as FormContextProvider,
  al as FormFieldContext,
  dI as FrontendClientProvider,
  tI as InternalComponentForm,
  qy as InternalField,
  Ty as Label,
  Vy as OptionalFieldButton,
  Yy as RemoteOptionsContainer,
  gI as SelectApp,
  mI as SelectComponent,
  Dy as defaultComponents,
  Bo as defaultTheme,
  Ry as getReactSelectTheme,
  no as mergeTheme,
  Br as skippablePropTypes,
  ky as unstyledTheme,
  My as useAccounts,
  Qy as useApp,
  iI as useApps,
  rI as useComponent,
  oI as useComponents,
  ct as useCustomize,
  wo as useFormContext,
  zn as useFormFieldContext,
  $t as useFrontendClient
};
