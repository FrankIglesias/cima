/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
if ('document' in self && !('classList' in document.createElement('_'))) {
  (function(j) {
    if (!('Element' in j)) {
      return;
    }
    const a = 'classList';
    const f = 'prototype';
    const m = j.Element[f];
    const b = Object;
    const k =
      String[f].trim ||
      function() {
        return this.replace(/^\s+|\s+$/g, '');
      };
    const c =
      Array[f].indexOf ||
      function(q) {
        let p = 0;
        const o = this.length;
        for (; p < o; p++) {
          if (p in this && this[p] === q) {
            return p;
          }
        }
        return -1;
      };
    const n = function(o, p) {
      this.name = o;
      this.code = DOMException[o];
      this.message = p;
    };
    const g = function(p, o) {
      if (o === '') {
        throw new n('SYNTAX_ERR', 'An invalid or illegal string was specified');
      }
      if (/\s/.test(o)) {
        throw new n('INVALID_CHARACTER_ERR', 'String contains an invalid character');
      }
      return c.call(p, o);
    };
    const d = function(s) {
      const r = k.call(s.getAttribute('class') || '');
      const q = r ? r.split(/\s+/) : [];
      let p = 0;
      const o = q.length;
      for (; p < o; p++) {
        this.push(q[p]);
      }
      this._updateClassName = function() {
        s.setAttribute('class', this.toString());
      };
    };
    const e = (d[f] = []);
    const i = function() {
      return new d(this);
    };
    n[f] = Error[f];
    e.item = function(o) {
      return this[o] || null;
    };
    e.contains = function(o) {
      o += '';
      return g(this, o) !== -1;
    };
    e.add = function() {
      const s = arguments;
      let r = 0;
      const p = s.length;
      let q;
      let o = false;
      do {
        q = `${s[r]}`;
        if (g(this, q) === -1) {
          this.push(q);
          o = true;
        }
      } while (++r < p);
      if (o) {
        this._updateClassName();
      }
    };
    e.remove = function() {
      const t = arguments;
      let s = 0;
      const p = t.length;
      let r;
      let o = false;
      do {
        r = `${t[s]}`;
        const q = g(this, r);
        if (q !== -1) {
          this.splice(q, 1);
          o = true;
        }
      } while (++s < p);
      if (o) {
        this._updateClassName();
      }
    };
    e.toggle = function(p, q) {
      p += '';
      const o = this.contains(p);
      const r = o ? q !== true && 'remove' : q !== false && 'add';
      if (r) {
        this[r](p);
      }
      return !o;
    };
    e.toString = function() {
      return this.join(' ');
    };
    if (b.defineProperty) {
      const l = { get: i, enumerable: true, configurable: true };
      try {
        b.defineProperty(m, a, l);
      } catch (h) {
        if (h.number === -2146823252) {
          l.enumerable = false;
          b.defineProperty(m, a, l);
        }
      }
    } else if (b[f].__defineGetter__) {
      m.__defineGetter__(a, i);
    }
  })(self);
}
