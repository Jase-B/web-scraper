(() => {
  window.Security = function () {
    Object.defineProperties(this, {

      divYield: {
        _divYield: null,
        get() {
          return this._divYield;
        },
        set(value) {
          this._divYield = parseFloat(value)
        }
      },
      
      expenseRatio: {
        _expenseRatio: null,
        get() {
          return this._expenseRatio;
        },
        set(value) {
          this._expenseRatio = parseFloat(value)
        }
      },

      name: {
        enumerable: true,
        writable: true
      },

      perf5yr: {
        _perf5yr: null,
        get() {
          return this._perf5yr;
        },
        set(value) {
          this._perf5yr = parseFloat(value)
        }
      },

      symbol: {
        enumerable: true,
        writable: true
      }
      
    });
  };
})();