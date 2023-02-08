function V() {
}
function Ee(e) {
  return e();
}
function Ke() {
  return /* @__PURE__ */ Object.create(null);
}
function B(e) {
  e.forEach(Ee);
}
function we(e) {
  return typeof e == "function";
}
function lt(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function it(e) {
  return Object.keys(e).length === 0;
}
function n(e, t) {
  e.appendChild(t);
}
function C(e, t, s) {
  e.insertBefore(t, s || null);
}
function L(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function i(e) {
  return document.createElement(e);
}
function k(e) {
  return document.createTextNode(e);
}
function f() {
  return k(" ");
}
function J(e, t, s, r) {
  return e.addEventListener(t, s, r), () => e.removeEventListener(t, s, r);
}
function l(e, t, s) {
  s == null ? e.removeAttribute(t) : e.getAttribute(t) !== s && e.setAttribute(t, s);
}
function at(e) {
  return Array.from(e.childNodes);
}
function D(e, t) {
  t = "" + t, e.wholeText !== t && (e.data = t);
}
function H(e, t) {
  e.value = t == null ? "" : t;
}
function ot(e) {
  const t = {};
  for (const s of e)
    t[s.name] = s.value;
  return t;
}
let Te;
function G(e) {
  Te = e;
}
const Y = [], Qe = [], ce = [], Xe = [], ct = Promise.resolve();
let ye = !1;
function ut() {
  ye || (ye = !0, ct.then(ue));
}
function Ne(e) {
  ce.push(e);
}
const ve = /* @__PURE__ */ new Set();
let oe = 0;
function ue() {
  const e = Te;
  do {
    for (; oe < Y.length; ) {
      const t = Y[oe];
      oe++, G(t), dt(t.$$);
    }
    for (G(null), Y.length = 0, oe = 0; Qe.length; )
      Qe.pop()();
    for (let t = 0; t < ce.length; t += 1) {
      const s = ce[t];
      ve.has(s) || (ve.add(s), s());
    }
    ce.length = 0;
  } while (Y.length);
  for (; Xe.length; )
    Xe.pop()();
  ye = !1, ve.clear(), G(e);
}
function dt(e) {
  if (e.fragment !== null) {
    e.update(), B(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Ne);
  }
}
const ft = /* @__PURE__ */ new Set();
function mt(e, t) {
  e && e.i && (ft.delete(e), e.i(t));
}
function pt(e, t, s, r) {
  const { fragment: a, after_update: o } = e.$$;
  a && a.m(t, s), r || Ne(() => {
    const u = e.$$.on_mount.map(Ee).filter(we);
    e.$$.on_destroy ? e.$$.on_destroy.push(...u) : B(u), e.$$.on_mount = [];
  }), o.forEach(Ne);
}
function ht(e, t) {
  const s = e.$$;
  s.fragment !== null && (B(s.on_destroy), s.fragment && s.fragment.d(t), s.on_destroy = s.fragment = null, s.ctx = []);
}
function bt(e, t) {
  e.$$.dirty[0] === -1 && (Y.push(e), ut(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function gt(e, t, s, r, a, o, u, g = [-1]) {
  const d = Te;
  G(e);
  const c = e.$$ = {
    fragment: null,
    ctx: [],
    props: o,
    update: V,
    not_equal: a,
    bound: Ke(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (d ? d.$$.context : [])),
    callbacks: Ke(),
    dirty: g,
    skip_bound: !1,
    root: t.target || d.$$.root
  };
  u && u(c.root);
  let $ = !1;
  if (c.ctx = s ? s(e, t.props || {}, (m, w, ...E) => {
    const b = E.length ? E[0] : w;
    return c.ctx && a(c.ctx[m], c.ctx[m] = b) && (!c.skip_bound && c.bound[m] && c.bound[m](b), $ && bt(e, m)), w;
  }) : [], c.update(), $ = !0, B(c.before_update), c.fragment = r ? r(c.ctx) : !1, t.target) {
    if (t.hydrate) {
      const m = at(t.target);
      c.fragment && c.fragment.l(m), m.forEach(L);
    } else
      c.fragment && c.fragment.c();
    t.intro && mt(e.$$.fragment), pt(e, t.target, t.anchor, t.customElement), ue();
  }
  G(d);
}
let st;
typeof HTMLElement == "function" && (st = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: e } = this.$$;
    this.$$.on_disconnect = e.map(Ee).filter(we);
    for (const t in this.$$.slotted)
      this.appendChild(this.$$.slotted[t]);
  }
  attributeChangedCallback(e, t, s) {
    this[e] = s;
  }
  disconnectedCallback() {
    B(this.$$.on_disconnect);
  }
  $destroy() {
    ht(this, 1), this.$destroy = V;
  }
  $on(e, t) {
    if (!we(t))
      return V;
    const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return s.push(t), () => {
      const r = s.indexOf(t);
      r !== -1 && s.splice(r, 1);
    };
  }
  $set(e) {
    this.$$set && !it(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
});
const Ze = "https://app.dev.explorersurgical.com", rt = 1e3, ke = rt * 60, xe = ke * 60, et = (e) => e ? new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric"
}).format(new Date(e)) : "", tt = (e) => e ? new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "numeric"
}).format(new Date(e)) : "", nt = (e) => {
  if (e) {
    const t = Math.floor(e / xe), s = Math.floor((e - t * xe) / ke), r = Math.floor(
      (e - t * xe - s * ke) / rt
    ), a = [];
    return t && a.push(t + "h"), s && a.push(s + "m"), r && a.push(r + "s"), a.join(" ");
  }
  return "0s";
};
function _t(e) {
  let t, s, r, a, o, u, g, d = e[3].topic + "", c, $, m, w, E, b, _ = e[3].agenda + "", y, v, h, K, Se, R, Q = et(e[3].scheduledDate) + "", de, $e, X = tt(e[3].scheduledDate) + "", fe, Me, A, Z, De, ee, te = nt(e[3].scheduledDuration) + "", me, Ce, Le, je, x, O, ne, He, I, T, Re, pe, Ae, q, se, Oe, z, S, Ie, he, qe, P, re, ze, F, M, Pe, be, Fe, U, le, Ue, W, j, We, ge, Ve, ie, Be, Je, Ye, ae, _e, Ge;
  return {
    c() {
      t = i("h1"), t.textContent = "ExStreamer Registration", s = f(), r = i("section"), a = i("div"), o = i("div"), o.innerHTML = "<b>Subject</b>", u = f(), g = i("div"), c = k(d), $ = f(), m = i("div"), w = i("div"), w.innerHTML = "<b>Details</b>", E = f(), b = i("div"), y = k(_), v = f(), h = i("div"), K = i("div"), K.innerHTML = "<b>Start Time</b>", Se = f(), R = i("div"), de = k(Q), $e = k(`
                    \xA0
                    `), fe = k(X), Me = f(), A = i("div"), Z = i("div"), Z.innerHTML = "<b>Duration</b>", De = f(), ee = i("div"), me = k(te), Ce = f(), Le = i("hr"), je = f(), x = i("form"), O = i("div"), ne = i("div"), ne.innerHTML = `<label for="firstName">First Name
                            <span class="star">*</span></label>`, He = f(), I = i("div"), T = i("input"), Re = f(), pe = i("span"), Ae = f(), q = i("div"), se = i("div"), se.innerHTML = `<label for="lastName">Last Name
                            <span class="star">*</span></label>`, Oe = f(), z = i("div"), S = i("input"), Ie = f(), he = i("span"), qe = f(), P = i("div"), re = i("div"), re.innerHTML = `<label for="email">Email
                            <span class="star">*</span></label>`, ze = f(), F = i("div"), M = i("input"), Pe = f(), be = i("span"), Fe = f(), U = i("div"), le = i("div"), le.innerHTML = '<label for="phone">Phone</label>', Ue = f(), W = i("div"), j = i("input"), We = f(), ge = i("span"), Ve = f(), ie = i("div"), ie.innerHTML = '<span class="star">*</span> Required information', Be = f(), Je = i("hr"), Ye = f(), ae = i("button"), ae.textContent = "Register to ExStreamer", l(t, "class", "px-1 px-md-0"), l(o, "class", "col-2 label-text"), l(g, "class", "col-8"), l(a, "class", "row"), l(w, "class", "col-2 label-text"), l(b, "class", "col-8"), l(m, "class", "row"), l(K, "class", "col-2 label-text"), l(R, "class", "col-8"), l(h, "class", "row"), l(Z, "class", "col-2 label-text"), l(ee, "class", "col-8"), l(A, "class", "row"), l(ne, "class", "col-12 col-sm-2 label-text mb-1 mt-1 mt-14-px"), l(T, "type", "text"), l(T, "id", "firstName"), l(T, "maxlength", "64"), T.required = !0, l(T, "name", "firstName"), l(pe, "class", "error-message"), l(I, "class", "col-12 col-sm-5"), l(O, "class", "row mb-2"), l(se, "class", "col-12 col-sm-2 label-text mb-1 mt-14-px"), l(S, "type", "text"), l(S, "id", "lastName"), l(S, "maxlength", "64"), S.required = !0, l(S, "name", "lastName"), l(he, "class", "error-message"), l(z, "class", "col-12 col-sm-5"), l(q, "class", "row mb-2"), l(re, "class", "col-12 col-sm-2 label-text mb-1 mt-14-px"), l(M, "type", "email"), M.required = !0, l(M, "id", "email"), l(M, "name", "email"), l(be, "class", "error-message"), l(F, "class", "col-12 col-sm-5"), l(P, "class", "row mb-2"), l(le, "class", "col-12 col-sm-2 label-text mb-1 mt-14-px"), l(j, "type", "tel"), l(j, "id", "phone"), l(j, "name", "phone"), l(ge, "class", "error-message"), l(W, "class", "col-12 col-sm-5"), l(U, "class", "row mb-2"), l(ie, "class", "text-end"), l(ae, "type", "submit"), x.noValidate = !0;
    },
    m(p, N) {
      C(p, t, N), C(p, s, N), C(p, r, N), n(r, a), n(a, o), n(a, u), n(a, g), n(g, c), n(r, $), n(r, m), n(m, w), n(m, E), n(m, b), n(b, y), n(r, v), n(r, h), n(h, K), n(h, Se), n(h, R), n(R, de), n(R, $e), n(R, fe), n(r, Me), n(r, A), n(A, Z), n(A, De), n(A, ee), n(ee, me), n(r, Ce), n(r, Le), n(r, je), n(r, x), n(x, O), n(O, ne), n(O, He), n(O, I), n(I, T), H(T, e[1].firstName), n(I, Re), n(I, pe), n(x, Ae), n(x, q), n(q, se), n(q, Oe), n(q, z), n(z, S), H(S, e[1].lastName), n(z, Ie), n(z, he), n(x, qe), n(x, P), n(P, re), n(P, ze), n(P, F), n(F, M), H(M, e[1].email), n(F, Pe), n(F, be), n(x, Fe), n(x, U), n(U, le), n(U, Ue), n(U, W), n(W, j), H(j, e[1].phone), n(W, We), n(W, ge), n(x, Ve), n(x, ie), n(x, Be), n(x, Je), n(x, Ye), n(x, ae), _e || (Ge = [
        J(T, "input", e[6]),
        J(S, "input", e[7]),
        J(M, "input", e[8]),
        J(j, "input", e[9]),
        J(x, "submit", e[4])
      ], _e = !0);
    },
    p(p, N) {
      N & 8 && d !== (d = p[3].topic + "") && D(c, d), N & 8 && _ !== (_ = p[3].agenda + "") && D(y, _), N & 8 && Q !== (Q = et(p[3].scheduledDate) + "") && D(de, Q), N & 8 && X !== (X = tt(p[3].scheduledDate) + "") && D(fe, X), N & 8 && te !== (te = nt(p[3].scheduledDuration) + "") && D(me, te), N & 2 && T.value !== p[1].firstName && H(T, p[1].firstName), N & 2 && S.value !== p[1].lastName && H(S, p[1].lastName), N & 2 && M.value !== p[1].email && H(M, p[1].email), N & 2 && H(j, p[1].phone);
    },
    d(p) {
      p && L(t), p && L(s), p && L(r), _e = !1, B(Ge);
    }
  };
}
function vt(e) {
  let t, s = e[2].status + "", r, a, o, u = e[2].message + "", g;
  return {
    c() {
      t = i("h1"), r = k(s), a = f(), o = i("section"), g = k(u), l(t, "class", "px-1 px-md-0");
    },
    m(d, c) {
      C(d, t, c), n(t, r), C(d, a, c), C(d, o, c), n(o, g);
    },
    p(d, c) {
      c & 4 && s !== (s = d[2].status + "") && D(r, s), c & 4 && u !== (u = d[2].message + "") && D(g, u);
    },
    d(d) {
      d && L(t), d && L(a), d && L(o);
    }
  };
}
function xt(e) {
  let t, s, r, a = e[1].firstName + "", o, u, g = e[1].lastName + "", d, c, $, m;
  return {
    c() {
      t = i("div"), s = i("h1"), r = k("Thank you "), o = k(a), u = f(), d = k(g), c = k(" for Registring!"), $ = f(), m = i("section"), m.textContent = "You will be emailed Webinar information shortly.", l(s, "class", "px-1 px-md-0");
    },
    m(w, E) {
      C(w, t, E), n(t, s), n(s, r), n(s, o), n(s, u), n(s, d), n(s, c), n(t, $), n(t, m);
    },
    p(w, E) {
      E & 2 && a !== (a = w[1].firstName + "") && D(o, a), E & 2 && g !== (g = w[1].lastName + "") && D(d, g);
    },
    d(w) {
      w && L(t);
    }
  };
}
function wt(e) {
  let t;
  function s(o, u) {
    if (o[0])
      return xt;
    if (o[2])
      return vt;
    if (o[3])
      return _t;
  }
  let r = s(e), a = r && r(e);
  return {
    c() {
      t = i("main"), a && a.c(), this.c = V;
    },
    m(o, u) {
      C(o, t, u), a && a.m(t, null);
    },
    p(o, [u]) {
      r === (r = s(o)) && a ? a.p(o, u) : (a && a.d(1), a = r && r(o), a && (a.c(), a.m(t, null)));
    },
    i: V,
    o: V,
    d(o) {
      o && L(t), a && a.d();
    }
  };
}
function yt(e, t, s) {
  let { case_id: r = new URLSearchParams(location.search).get("caseId") } = t, a = !1, o = {
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  }, u = null;
  async function g(b) {
    try {
      const _ = await fetch(`${Ze}/api/case-stat/${b}/webinar`);
      if (_.status === 200)
        return await _.json();
      if (_.status === 500) {
        const y = await _.json();
        s(2, u = {
          status: _.status,
          message: y && (y.error || y.message) || "Server Error"
        });
      } else {
        const y = await _.json();
        s(2, u = {
          status: _.status,
          message: y && (y.error || y.message) || "Server Error"
        });
      }
    } catch (_) {
      console.error(_), s(2, u = { status: 500, message: "Server Error" });
    }
  }
  let d = null;
  r !== null ? g(r).then((b) => {
    b.ended && s(2, u = {
      status: 410,
      message: "Webinar is outdated"
    }), s(3, d = b);
  }) : u = {
    status: 404,
    message: "Webinar not found"
  };
  const c = async (b) => {
    b.preventDefault();
    const _ = b.target, y = _.querySelectorAll(":invalid");
    if (y && y.length)
      Array.from(y).forEach((v) => {
        const h = v.parentElement.querySelector(".error-message");
        h && (v.validity.valueMissing ? h.textContent = "Can't be blank" : v.validity.typeMismatch && v.type === "email" ? h.textContent = "Invalid email address" : h.textContent = v.validationMessage);
      }), _.classList.add("touched"), y[0].focus();
    else
      try {
        const v = await fetch(`${Ze}/api/case-execution/webinar/${r}/registrants`, {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            Timezone: new Date().getTimezoneOffset()
          },
          body: JSON.stringify(o)
        });
        if (v.status === 200 && s(0, a = !0), v.status === 500) {
          const h = await v.json();
          s(2, u = {
            status: v.status,
            message: h && (h.error || h.message) || "Server Error"
          });
        } else {
          const h = await v.json();
          s(2, u = {
            status: v.status,
            message: h && (h.error || h.message) || "Server Error"
          });
        }
      } catch (v) {
        console.error(v), s(2, u = { status: 500, message: "Server Error" });
      }
    return !1;
  };
  function $() {
    o.firstName = this.value, s(1, o);
  }
  function m() {
    o.lastName = this.value, s(1, o);
  }
  function w() {
    o.email = this.value, s(1, o);
  }
  function E() {
    o.phone = this.value, s(1, o);
  }
  return e.$$set = (b) => {
    "case_id" in b && s(5, r = b.case_id);
  }, [
    a,
    o,
    u,
    d,
    c,
    r,
    $,
    m,
    w,
    E
  ];
}
class Nt extends st {
  constructor(t) {
    super(), this.shadowRoot.innerHTML = '<style>main{font-family:"Roboto-Regular", "Arial", sans-serif;color:#707C87;line-height:1.5}section{background-color:#ffff;border-radius:4px;border:1px solid transparent;box-shadow:0 1px 1px rgb(0 0 0 / 5%);padding:30px;margin-bottom:30px}button{color:#fff;background-color:#00bbea;padding:0.8rem 1.25rem;font-size:1rem;border-radius:0.25rem;cursor:pointer;outline:none !important;border:none;box-shadow:none !important}hr{border:none;border-top:1px solid #dee2e6;margin:30px 0}.mb-1{margin-bottom:10px !important}.mt-14-px{margin-top:14px !important}.mb-2{margin-bottom:20px !important}.row{display:flex;flex-wrap:wrap;margin-top:10px;margin-bottom:10px}.col-2{width:20%}.col-8{width:80%}.col-12{width:100%}h1{font-weight:500;font-size:32px;color:#586a7d}.text-end{text-align:end}input{color:#707c87;border:1px solid #dae3e8;border-radius:4px;height:46px;padding:0 20px;line-height:1.57em;width:100%;box-sizing:border-box;font-size:16px}input:focus{border-color:#0054aa !important;outline:none}.error-message{color:red;display:none}:is(.touched input:invalid){border-color:red !important}:is(.touched input:invalid+.error-message){display:block}.star{color:#ff3e00}.label-text{color:#004C99}.px-1{padding-right:10px;padding-left:10px}@media(min-width: 576px){.col-sm-2{width:20%}.col-sm-5{width:50%}}@media(min-width: 768px){.px-md-0{padding-right:0;padding-left:0}}</style>', gt(
      this,
      {
        target: this.shadowRoot,
        props: ot(this.attributes),
        customElement: !0
      },
      yt,
      wt,
      lt,
      { case_id: 5 },
      null
    ), t && (t.target && C(t.target, this, t.anchor), t.props && (this.$set(t.props), ue()));
  }
  static get observedAttributes() {
    return ["case_id"];
  }
  get case_id() {
    return this.$$.ctx[5];
  }
  set case_id(t) {
    this.$$set({ case_id: t }), ue();
  }
}
customElements.define("explorer-webinar-registration", Nt);
