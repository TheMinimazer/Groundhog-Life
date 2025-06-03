webpackJsonp(
  [1,
  0],
  [
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      var i = a(99),
      r = n(i),
      s = a(163),
      o = n(s),
      u = a(309),
      l = n(u),
      c = a(219),
      d = n(c);
      a(141),
      window.jQuery = window.$ = a(301),
      window.Tether = a(137),
      a(220),
      a(276),
      a(298),
      a(297);
      var f = a(303),
      v = function () {
        window.kongregate = kongregateAPI.getAPI()
      },
      h = function () {
        kongregateAPI.loadAPI(v)
      };
      f(
        'https://cdn1.kongregate.com/javascripts/kongregate_api.js',
        h
      ),
      r.default.use(d.default),
      new r.default({
        store: o.default,
        el: '#app',
        template: '<App/>',
        components: {
          App: l.default
        }
      })
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.BasicEntity = void 0;
      var i = a(10),
      r = n(i),
      s = a(1),
      o = n(s),
      u = a(4),
      l = n(u),
      c = a(11),
      d = a(65),
      f = a(34);
      t.BasicEntity = function () {
        function e(t, a, n) {
          (0, o.default) (this, e),
          this.id = t,
          this.name = a,
          this.locks = new c.Locks,
          this.state = n,
          this.dependants = [],
          this.lastChange = - 10,
          this._notification = !1,
          this._entityUpdated = 0,
          this.logUnlock = !1,
          this.wasLocked = !1,
          d.saver.register(this)
        }
        return (0, l.default) (
          e,
          [
            {
              key: 'onLoad',
              value: function () {
              }
            },
            {
              key: 'changed',
              value: function () {
                var e = new Date;
                this.lastChange = e.getTime()
              }
            },
            {
              key: 'hasChanged',
              value: function (e) {
                var t = new Date;
                return t.getTime() - this.lastChange < 1000 * e
              }
            },
            {
              key: 'subscribe',
              value: function (e) {
                this.dependants.push(e)
              }
            },
            {
              key: 'unsubscribe',
              value: function (e) {
                this.dependants = this.dependants.filter(function (t) {
                  return t.id !== e.id
                })
              }
            },
            {
              key: 'austerityMode',
              value: function () {
                this.update()
              }
            },
            {
              key: 'update',
              value: function () {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
                if (
                  this._entityUpdated += 1,
                  this.logUnlock ? (
                    this.locks.update(),
                    this.wasLocked &&
                    this.unlocked() &&
                    f.messageBox.addMessage(this.name + ' unlocked!', 'unlocked')
                  ) : this.locks.update(),
                  this.wasLocked = !this.unlocked(),
                  e
                ) {
                  var t = !0,
                  a = !1,
                  n = void 0;
                  try {
                    for (
                      var i,
                      s = (0, r.default) (this.dependants);
                      !(t = (i = s.next()).done);
                      t = !0
                    ) {
                      var o = i.value;
                      o.update()
                    }
                  } catch (e) {
                    a = !0,
                    n = e
                  } finally {
                    try {
                      !t &&
                      s.return &&
                      s.return()
                    } finally {
                      if (a) throw n
                    }
                  }
                }
              }
            },
            {
              key: 'prestige',
              value: function () {
              }
            },
            {
              key: 'grandPrestige',
              value: function () {
                this.prestige()
              }
            },
            {
              key: 'postPrestigeAssert',
              value: function () {
              }
            },
            {
              key: 'postLoadAssert',
              value: function () {
              }
            },
            {
              key: 'unlocked',
              value: function () {
                return this.locks.allOpen
              }
            },
            {
              key: 'keyholdersUnlocked',
              value: function () {
                return this.locks.keyholdersUnlocked()
              }
            },
            {
              key: 'notify',
              value: function () {
                this._notification = !0
              }
            },
            {
              key: 'acknowledge',
              value: function () {
                this._notification = !1
              }
            }
          ]
        ),
        e
      }()
    },
    ,
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.createCompletedOrReadingListLock = t.createCompletedLock = t.createLevelLockChain = t.createLevelLock = t.createSelectedLock = t.createTrueStateLock = t.createMinimumValueLock = t.createPredicateLock = t.createAnyLock = t.createCustomLock = t.createUnlockedLock = t.Locks = t.Lock = void 0;
      var i = a(10),
      r = n(i),
      s = a(1),
      o = n(s),
      u = a(4),
      l = n(u),
      c = t.Lock = function () {
        function e(t, a, n) {
          (0, o.default) (this, e),
          this.description = t,
          this._check = a,
          this.keyholders = n,
          this.open = !1
        }
        return (0, l.default) (
          e,
          [
            {
              key: 'keyholdersUnlocked',
              value: function e() {
                var e = !0,
                t = !0,
                a = !1,
                n = void 0;
                try {
                  for (
                    var i,
                    s = (0, r.default) (this.keyholders);
                    !(t = (i = s.next()).done);
                    t = !0
                  ) {
                    var o = i.value;
                    e = e &&
                    o.locks.allOpen
                  }
                } catch (e) {
                  a = !0,
                  n = e
                } finally {
                  try {
                    !t &&
                    s.return &&
                    s.return()
                  } finally {
                    if (a) throw n
                  }
                }
                return e
              }
            },
            {
              key: 'update',
              value: function () {
                this.open = this._check()
              }
            }
          ]
        ),
        e
      }(),
      d = (
        t.Locks = function () {
          function e() {
            (0, o.default) (this, e),
            this.locks = [],
            this.allOpen = !0
          }
          return (0, l.default) (
            e,
            [
              {
                key: 'addLock',
                value: function (e) {
                  this.locks.push(e),
                  this.update()
                }
              },
              {
                key: 'update',
                value: function () {
                  this.allOpen = !0;
                  var e = !0,
                  t = !1,
                  a = void 0;
                  try {
                    for (var n, i = (0, r.default) (this.locks); !(e = (n = i.next()).done); e = !0) {
                      var s = n.value;
                      s.update(),
                      this.allOpen = this.allOpen &&
                      s.open
                    }
                  } catch (e) {
                    t = !0,
                    a = e
                  } finally {
                    try {
                      !e &&
                      i.return &&
                      i.return()
                    } finally {
                      if (t) throw a
                    }
                  }
                }
              },
              {
                key: 'keyholdersUnlocked',
                value: function () {
                  var e = !0,
                  t = !1,
                  a = void 0;
                  try {
                    for (var n, i = (0, r.default) (this.locks); !(e = (n = i.next()).done); e = !0) {
                      var s = n.value;
                      if (!s.keyholdersUnlocked()) return !1
                    }
                  } catch (e) {
                    t = !0,
                    a = e
                  } finally {
                    try {
                      !e &&
                      i.return &&
                      i.return()
                    } finally {
                      if (t) throw a
                    }
                  }
                  return !0
                }
              },
              {
                key: 'lockStrings',
                value: function () {
                  var e = [],
                  t = !0,
                  a = !1,
                  n = void 0;
                  try {
                    for (var i, s = (0, r.default) (this.locks); !(t = (i = s.next()).done); t = !0) {
                      var o = i.value;
                      o.open ||
                      e.push(o.description)
                    }
                  } catch (e) {
                    a = !0,
                    n = e
                  } finally {
                    try {
                      !t &&
                      s.return &&
                      s.return()
                    } finally {
                      if (a) throw n
                    }
                  }
                  return e
                }
              },
              {
                key: 'lockString',
                value: function () {
                  var e = this.lockStrings();
                  return ''.concat(e)
                }
              }
            ]
          ),
          e
        }(),
        t.createUnlockedLock = function (e, t) {
          var a = function () {
            return e.unlocked()
          };
          t.locks.addLock(new c(e.name + ' is unlocked', a, [
            e
          ])),
          e.subscribe(t)
        },
        t.createCustomLock = function (e, t, a) {
          var n = 'Custom Lock: ' + t.id,
          i = !0,
          s = !1,
          o = void 0;
          try {
            for (var u, l = (0, r.default) (e); !(i = (u = l.next()).done); i = !0) {
              var d = u.value;
              d.subscribe(t),
              n += ' ' + d.id
            }
          } catch (e) {
            s = !0,
            o = e
          } finally {
            try {
              !i &&
              l.return &&
              l.return()
            } finally {
              if (s) throw o
            }
          }
          t.locks.addLock(new c(n, a, e))
        },
        t.createAnyLock = function (e, t, a) {
          var n = function () {
            var t = !1,
            n = !0,
            i = !1,
            s = void 0;
            try {
              for (var o, u = (0, r.default) (e); !(n = (o = u.next()).done); n = !0) {
                var l = o.value;
                t = t ||
                a(l)
              }
            } catch (e) {
              i = !0,
              s = e
            } finally {
              try {
                !n &&
                u.return &&
                u.return()
              } finally {
                if (i) throw s
              }
            }
            return t
          },
          i = 'Any Completed:',
          s = !0,
          o = !1,
          u = void 0;
          try {
            for (var l, d = (0, r.default) (e); !(s = (l = d.next()).done); s = !0) {
              var f = l.value;
              f.subscribe(t),
              i += ' ' + f.name
            }
          } catch (e) {
            o = !0,
            u = e
          } finally {
            try {
              !s &&
              d.return &&
              d.return()
            } finally {
              if (o) throw u
            }
          }
          t.locks.addLock(new c(i, n, e))
        },
        t.createPredicateLock = function (e, t, a) {
          t.locks.addLock(new c(e.name + ' predicate', a, [
            e
          ])),
          e.subscribe(t)
        },
        t.createMinimumValueLock = function (e, t, a) {
          var n = function () {
            return e.getValue() >= a
          };
          t.locks.addLock(new c(e.name + ' at least ' + a, n, [
            e
          ])),
          e.subscribe(t)
        },
        t.createTrueStateLock = function (e, t) {
          var a = function () {
            return e.getValue()
          };
          t.locks.addLock(new c(e.name + ' is true', a, [
            e
          ])),
          e.subscribe(t)
        },
        t.createSelectedLock = function (e, t) {
          var a = function () {
            return e.state.selected
          };
          t.locks.addLock(new c(e.name + ' selected', a, [
            e
          ])),
          e.subscribe(t)
        },
        t.createLevelLock = function (e, t, a) {
          var n = function () {
            return e.xp.state.level >= a
          };
          t.locks.addLock(new c(e.name + ' Level ' + a, n, [
            e
          ])),
          e.xp.subscribe(t)
        }
      );
      t.createLevelLockChain = function (e, t) {
        for (var a = 1; a < e.length; a++) d(e[a - 1], e[a], t)
      },
      t.createCompletedLock = function (e, t) {
        var a = function () {
          return e.state.completed
        };
        t.locks.addLock(new c(e.name, a, [
          e
        ])),
        e.subscribe(t)
      },
      t.createCompletedOrReadingListLock = function (e, t) {
        var a = function () {
          return e.state.completed ||
          e.state.onReadingList
        };
        t.locks.addLock(new c(e.name, a, [
          e
        ])),
        e.subscribe(t)
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.LevelAddMultModifier = t.GeometricLevelAddModifier = t.HarmonicLevelAddModifier = t.LevelAddModifier = t.LevelModifier = t.NumberStateModifier = t.StatEffectiveMultModifier = t.GenericMultModifier = t.MultModifier = t.NumberStateAddModifier = t.StatEffectiveAddModifier = t.GenericAddModifier = t.AddModifier = t.Modifier = void 0;
      var i = a(8),
      r = n(i),
      s = a(2),
      o = n(s),
      u = a(4),
      l = n(u),
      c = a(6),
      d = n(c),
      f = a(5),
      v = n(f),
      h = a(1),
      p = n(h),
      m = a(9),
      y = a(20),
      _ = function e() {
        (0, p.default) (this, e)
      },
      g = t.Modifier = function (e) {
        function t(e, a, n, i, r) {
          var s = arguments.length > 5 &&
          void 0 !== arguments[5] ? arguments[5] : 2;
          (0, p.default) (this, t);
          var u = (0, d.default) (this, (t.__proto__ || (0, o.default) (t)).call(this, e, a, new _));
          return u.operationString = i,
          (0, y.assert) ((0, y.isNumber) (r), u.id + ' initial factor: ' + r),
          u._factor = r,
          u.priority = n,
          u.digits = s,
          u
        }
        return (0, v.default) (t, e),
        (0, l.default) (
          t,
          [
            {
              key: 'prestige',
              value: function () {
              }
            },
            {
              key: 'apply',
              value: function (e) {
                (0, y.assert) (!1)
              }
            },
            {
              key: 'factor',
              get: function () {
                return (0, y.assert) (
                  (0, y.isNumber) (this._factor),
                  this.id + ' getting invalid factor: ' + this._factor
                ),
                this._factor
              },
              set: function (e) {
                (0, y.assert) ((0, y.isNumber) (e), this.id + ' setting invalid factor: ' + e),
                this._factor = e
              }
            }
          ]
        ),
        t
      }(m.BasicEntity),
      b = t.AddModifier = function (e) {
        function t(e, a, n, i) {
          return (0, p.default) (this, t),
          (0, d.default) (this, (t.__proto__ || (0, o.default) (t)).call(this, e, a, n, '+', i))
        }
        return (0, v.default) (t, e),
        (0, l.default) (
          t,
          [
            {
              key: 'update',
              value: function () {
                this.operationString = this.factor >= 0 ? '+' : '',
                (0, r.default) (
                  t.prototype.__proto__ ||
                  (0, o.default) (t.prototype),
                  'update',
                  this
                ).call(this)
              }
            },
            {
              key: 'apply',
              value: function (e) {
                return e + this.factor
              }
            }
          ]
        ),
        t
      }(g),
      M = (
        t.GenericAddModifier = function (e) {
          function t(e, a, n, i, r) {
            (0, p.default) (this, t);
            var s = (0, d.default) (this, (t.__proto__ || (0, o.default) (t)).call(this, e, a, n, r(i)));
            return s.entity = i,
            s.valueExtractor = r,
            s.entity.subscribe(s),
            s
          }
          return (0, v.default) (t, e),
          (0, l.default) (
            t,
            [
              {
                key: 'factor',
                get: function () {
                  return this.valueExtractor(this.entity)
                }
              }
            ]
          ),
          t
        }(b),
        t.StatEffectiveAddModifier = function (e) {
          function t(e, a, n, i) {
            var r = arguments.length > 4 &&
            void 0 !== arguments[4] ? arguments[4] : function (e) {
              return e
            };
            (0, p.default) (this, t);
            var s = (0, d.default) (
              this,
              (t.__proto__ || (0, o.default) (t)).call(this, e, a, n, r(i.effective))
            );
            return s.stat = i,
            i.subscribe(s),
            s.transform = r,
            s
          }
          return (0, v.default) (t, e),
          (0, l.default) (
            t,
            [
              {
                key: 'factor',
                get: function () {
                  return this.transform(this.stat.effective)
                }
              }
            ]
          ),
          t
        }(b),
        t.NumberStateAddModifier = function (e) {
          function t(e, a, n, i) {
            var r = arguments.length > 4 &&
            void 0 !== arguments[4] ? arguments[4] : function (e) {
              return e
            };
            (0, p.default) (this, t);
            var s = (0, d.default) (
              this,
              (t.__proto__ || (0, o.default) (t)).call(this, e, a, n, r(i.getValue()))
            );
            return s.numberStateEntity = i,
            i.subscribe(s),
            s.transform = r,
            s
          }
          return (0, v.default) (t, e),
          (0, l.default) (
            t,
            [
              {
                key: 'factor',
                get: function () {
                  return this.transform(this.numberStateEntity.getValue())
                }
              }
            ]
          ),
          t
        }(b),
        t.MultModifier = function (e) {
          function t(e, a, n, i) {
            return (0, p.default) (this, t),
            (0, d.default) (this, (t.__proto__ || (0, o.default) (t)).call(this, e, a, n, 'x', i))
          }
          return (0, v.default) (t, e),
          (0, l.default) (
            t,
            [
              {
                key: 'prestige',
                value: function () {
                }
              },
              {
                key: 'apply',
                value: function (e) {
                  return e * this.factor
                }
              }
            ]
          ),
          t
        }(g)
      ),
      k = (
        t.GenericMultModifier = function (e) {
          function t(e, a, n, i, r) {
            (0, p.default) (this, t);
            var s = (0, d.default) (this, (t.__proto__ || (0, o.default) (t)).call(this, e, a, n, r(i)));
            return s.entity = i,
            s.valueExtractor = r,
            s.entity.subscribe(s),
            s
          }
          return (0, v.default) (t, e),
          (0, l.default) (
            t,
            [
              {
                key: 'factor',
                get: function () {
                  return this.valueExtractor(this.entity)
                }
              }
            ]
          ),
          t
        }(M),
        t.StatEffectiveMultModifier = function (e) {
          function t(e, a, n, i) {
            var r = arguments.length > 4 &&
            void 0 !== arguments[4] ? arguments[4] : function (e) {
              return e
            };
            (0, p.default) (this, t);
            var s = (0, d.default) (
              this,
              (t.__proto__ || (0, o.default) (t)).call(this, e, a, n, r(i.effective))
            );
            return s.stat = i,
            i.subscribe(s),
            s.transform = r,
            s
          }
          return (0, v.default) (t, e),
          (0, l.default) (
            t,
            [
              {
                key: 'factor',
                get: function () {
                  return this.transform(this.stat.effective)
                }
              }
            ]
          ),
          t
        }(M),
        t.NumberStateModifier = function (e) {
          function t(e, a, n, i) {
            var r = arguments.length > 4 &&
            void 0 !== arguments[4] ? arguments[4] : function (e) {
              return e
            };
            (0, p.default) (this, t);
            var s = (0, d.default) (
              this,
              (t.__proto__ || (0, o.default) (t)).call(this, e, a, n, r(i.getValue()))
            );
            return s.numberStateEntity = i,
            i.subscribe(s),
            s.transform = r,
            s
          }
          return (0, v.default) (t, e),
          (0, l.default) (
            t,
            [
              {
                key: 'factor',
                get: function () {
                  return this.transform(this.numberStateEntity.getValue())
                }
              }
            ]
          ),
          t
        }(M),
        t.LevelModifier = function (e) {
          function t(e, a, n, i, r) {
            (0, p.default) (this, t);
            var s = (0, d.default) (
              this,
              (t.__proto__ || (0, o.default) (t)).call(this, e, a, n, Math.pow(r, i.state.level))
            );
            return s.levelEntity = i,
            i.subscribe(s),
            s.factorPerLevel = r,
            s.update(),
            s
          }
          return (0, v.default) (t, e),
          (0, l.default) (
            t,
            [
              {
                key: 'factor',
                get: function () {
                  return Math.pow(this.factorPerLevel, this.levelEntity.state.level)
                }
              }
            ]
          ),
          t
        }(M),
        t.LevelAddModifier = function (e) {
          function t(e, a, n, i, r) {
            var s = arguments.length > 5 &&
            void 0 !== arguments[5] ? arguments[5] : function (e) {
              return e
            };
            (0, p.default) (this, t);
            var u = (0, d.default) (
              this,
              (t.__proto__ || (0, o.default) (t)).call(this, e, a, n, s(r * i.state.level))
            );
            return u.levelEntity = i,
            i.subscribe(u),
            u.factorPerLevel = r,
            u.transform = s,
            u.update(),
            u
          }
          return (0, v.default) (t, e),
          (0, l.default) (
            t,
            [
              {
                key: 'factor',
                get: function () {
                  return this.transform(this.factorPerLevel * this.levelEntity.state.level)
                }
              }
            ]
          ),
          t
        }(b)
      ),
      w = 0.5772156649;
      t.HarmonicLevelAddModifier = function (e) {
        function t() {
          return (0, p.default) (this, t),
          (0, d.default) (this, (t.__proto__ || (0, o.default) (t)).apply(this, arguments))
        }
        return (0, v.default) (t, e),
        (0, l.default) (
          t,
          [
            {
              key: 'factor',
              get: function () {
                var e = this.levelEntity.state.level;
                return 0 === e ? 0 : this.factorPerLevel * (Math.log(e) + w + 1 / (2 * e) - 1 / (12 * e * e))
              }
            },
            {
              key: 'step',
              get: function () {
                return this.factorPerLevel / (this.levelEntity.state.level + 1)
              }
            }
          ]
        ),
        t
      }(k),
      t.GeometricLevelAddModifier = function (e) {
        function t(e, a, n, i, r, s) {
          (0, p.default) (this, t);
          var u = (0, d.default) (this, (t.__proto__ || (0, o.default) (t)).call(this, e, a, n, i, r));
          return u.ratio = s,
          u
        }
        return (0, v.default) (t, e),
        (0, l.default) (
          t,
          [
            {
              key: 'factor',
              get: function () {
                var e = this.levelEntity.state.level;
                return this.factorPerLevel * ((1 - Math.pow(this.ratio, e)) / (1 - this.ratio))
              }
            },
            {
              key: 'step',
              get: function () {
                return this.factorPerLevel * Math.pow(this.ratio, this.levelEntity.state.level + 1)
              }
            }
          ]
        ),
        t
      }(k),
      t.LevelAddMultModifier = function (e) {
        function t(e, a, n, i, r) {
          var s = arguments.length > 5 &&
          void 0 !== arguments[5] ? arguments[5] : function (e) {
            return e
          };
          (0, p.default) (this, t);
          var u = (0, d.default) (
            this,
            (t.__proto__ || (0, o.default) (t)).call(this, e, a, n, 1 + s(r * i.state.level))
          );
          return u.levelEntity = i,
          i.subscribe(u),
          u.factorPerLevel = r,
          u.transform = s,
          u.update(),
          u
        }
        return (0, v.default) (t, e),
        (0, l.default) (
          t,
          [
            {
              key: 'factor',
              get: function () {
                return 1 + this.transform(this.factorPerLevel * this.levelEntity.state.level)
              }
            }
          ]
        ),
        t
      }(M)
    },
    ,
    ,
    function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      t.abbreviateNumber = function (e) {
        var t = arguments.length > 1 &&
        void 0 !== arguments[1] ? arguments[1] : 2,
        a = !1;
        if (e < 0 && (a = !0, e *= - 1), null === e) return null;
        if (0 === e) return '0';
        t = !t ||
        t < 0 ? 0 : t;
        var n = e.toPrecision(2).split('e'),
        i = 1 === n.length ? 0 : Math.floor(Math.min(n[1].slice(1), 74) / 3),
        r = i < 1 ? e.toFixed(0 + t) : (e / Math.pow(10, 3 * i)).toFixed(1 + t),
        s = r < 0 ? r : Math.abs(r),
        o = Math.floor(s),
        u = '.' + (s - o).toString().slice(2, 2 + (1 + t - o.toString().length));
        u = u.length <= 1 ? '' : u;
        var l = (a ? '-' : '') + o + u + ['',
        'K',
        'M',
        'B',
        't',
        'Q',
        's',
        'S',
        'o',
        'n',
        'd',
        'U',
        'D',
        'T',
        'Qt',
        'Qd',
        'Sd',
        'St',
        'O',
        'N',
        'v',
        'c',
        'dv',
        'tv',
        'qv',
        'Qv'][i];
        return l
      },
      t.formatMinutes = function (e) {
        var t = Math.floor(e / 60),
        a = Math.floor(e - 60 * t);
        return t + 'h' + (a < 10 ? '0' : '') + a + 'm'
      },
      t.formatDays = function (e) {
        var t = arguments.length > 1 &&
        void 0 !== arguments[1] &&
        arguments[1],
        a = Math.floor(e / 365),
        n = Math.floor(e - 365 * a);
        return a + (t ? 'y' : ' years ') + n + (t ? 'd' : ' days')
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.Stat = void 0;
      var i = a(10),
      r = n(i),
      s = a(121),
      o = n(s),
      u = a(2),
      l = n(u),
      c = a(4),
      d = n(c),
      f = a(6),
      v = n(f),
      h = a(8),
      p = n(h),
      m = a(5),
      y = n(m),
      _ = a(1),
      g = n(_),
      b = a(9),
      M = a(20),
      k = function e() {
        (0, g.default) (this, e),
        this.highestEffectiveEver = - 9999999999,
        this.lowestEffectiveEver = 9999999999
      };
      t.Stat = function (e) {
        function t(e, a, n) {
          var i = arguments.length > 3 &&
          void 0 !== arguments[3] ? arguments[3] : 2,
          r = arguments.length > 4 &&
          void 0 !== arguments[4] ? arguments[4] : '',
          s = arguments.length > 5 &&
          void 0 !== arguments[5] ? arguments[5] : '',
          o = !(arguments.length > 6 && void 0 !== arguments[6]) ||
          arguments[6],
          u = !(arguments.length > 7 && void 0 !== arguments[7]) ||
          arguments[7],
          c = arguments.length > 8 &&
          void 0 !== arguments[8] ? arguments[8] : null,
          d = arguments.length > 9 &&
          void 0 !== arguments[9] ? arguments[9] : null,
          f = arguments.length > 10 &&
          void 0 !== arguments[10] ? arguments[10] : 0.01;
          (0, g.default) (this, t);
          var h = (0, v.default) (this, (t.__proto__ || (0, l.default) (t)).call(this, e, a, new k));
          return h.id = e,
          h.name = a,
          h.base = n,
          (0, M.assert) ((0, M.isNumber) (h.base)),
          h.digits = i,
          h.prefix = r,
          h.suffix = s,
          h.higherIsBetter = o,
          h.modifiers = [],
          h.valueChain = [],
          h.lastChangePositive = !1,
          u ? h.update() : h.effective = h.base,
          h.minValue = c,
          h.maxValue = d,
          h.tolerance = f,
          h
        }
        return (0, y.default) (t, e),
        (0, d.default) (
          t,
          [
            {
              key: 'prestige',
              value: function () {
                this.state.historicValues = []
              }
            },
            {
              key: 'update',
              value: function () {
                this.effectiveChanged = !1,
                this.calculateEffective(),
                (0, p.default) (
                  t.prototype.__proto__ ||
                  (0, l.default) (t.prototype),
                  'update',
                  this
                ).call(this, this.effectiveChanged)
              }
            },
            {
              key: 'setBase',
              value: function (e) {
                this.base = e,
                (0, M.assert) ((0, M.isNumber) (this.base), this.name + ' ' + e),
                this.update()
              }
            },
            {
              key: 'addModifier',
              value: function (e) {
                e.subscribe(this),
                this.modifiers.push(e),
                this.modifiers.sort(function (e, t) {
                  return e.priority - t.priority
                })
              }
            },
            {
              key: 'calculateEffective',
              value: function () {
                var e = this.effective;
                (0, M.assert) (!((0, o.default) (this.base) || void 0 === this.base)),
                this.effective = this.base,
                this.valueChain = [];
                var a = !0,
                n = !1,
                i = void 0;
                try {
                  for (
                    var s,
                    u = (0, r.default) (this.modifiers.filter(function (e) {
                      return e.unlocked()
                    }));
                    !(a = (s = u.next()).done);
                    a = !0
                  ) {
                    var c = s.value;
                    this.effective = c.apply(this.effective),
                    this.valueChain.push([c,
                    this.effective])
                  }
                } catch (e) {
                  n = !0,
                  i = e
                } finally {
                  try {
                    !a &&
                    u.return &&
                    u.return()
                  } finally {
                    if (n) throw i
                  }
                }
                this.rawEffective = this.effective,
                (0, M.isNumber) (this.minValue) &&
                (this.effective = Math.max(this.minValue, this.effective)),
                (0, M.isNumber) (this.maxValue) &&
                (this.effective = Math.min(this.maxValue, this.effective)),
                this.effectiveChanged = Math.abs(this.effective - e) > 0,
                Math.abs(this.effective - e) > this.tolerance &&
                (
                  (0, p.default) (
                    t.prototype.__proto__ ||
                    (0, l.default) (t.prototype),
                    'changed',
                    this
                  ).call(this),
                  this.lastChangePositive = this.effective > e
                ),
                this.state.highestEffectiveEver = Math.max(this.state.highestEffectiveEver, this.effective),
                this.state.lowestEffectiveEver = Math.min(this.state.lowestEffectiveEver, this.effective)
              }
            },
            {
              key: 'recentChange',
              value: function (e) {
                return this.hasChanged(e) ? this.higherIsBetter ? this.lastChangePositive ? 'up' : 'down' : this.lastChangePositive ? 'down' : 'up' : ''
              }
            },
            {
              key: 'modifiersWithValues',
              value: function () {
                return this.valueChain
              }
            }
          ]
        ),
        t
      }(b.BasicEntity)
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.currentYear = t.currentDay = void 0;
      var i = a(8),
      r = n(i),
      s = a(2),
      o = n(s),
      u = a(1),
      l = n(u),
      c = a(4),
      d = n(c),
      f = a(6),
      v = n(f),
      h = a(5),
      p = n(h),
      m = a(21),
      y = function (e) {
        function t() {
          return (0, l.default) (this, t),
          (0, v.default) (
            this,
            (t.__proto__ || (0, o.default) (t)).call(this, 'currentDay', 'Current Day')
          )
        }
        return (0, p.default) (t, e),
        (0, d.default) (
          t,
          [
            {
              key: 'getYear',
              value: function () {
                return Math.floor(this.getValue() / 365)
              }
            },
            {
              key: 'getDayOfYear',
              value: function () {
                return Math.floor(this.getValue() % 365)
              }
            }
          ]
        ),
        t
      }(m.NumberStateEntity),
      _ = t.currentDay = new y,
      g = function (e) {
        function t() {
          (0, l.default) (this, t);
          var e = (0, v.default) (
            this,
            (t.__proto__ || (0, o.default) (t)).call(this, 'currentYear', 'Current Year')
          );
          return e.setValue(_.getYear()),
          _.subscribe(e),
          e
        }
        return (0, p.default) (t, e),
        (0, d.default) (
          t,
          [
            {
              key: 'update',
              value: function () {
                this.getValue() !== _.getYear() &&
                (
                  this.setValue(_.getYear()),
                  (0, r.default) (
                    t.prototype.__proto__ ||
                    (0, o.default) (t.prototype),
                    'update',
                    this
                  ).call(this)
                )
              }
            }
          ]
        ),
        t
      }(m.NumberStateEntity);
      t.currentYear = new g
    },
    ,
    ,
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.isNumber = t.isNear = t.assert = void 0;
      var i = a(121),
      r = n(i);
      t.assert = function (e, t) {
        if (!e) {
          if (
            t = t ||
            'Assertion failed',
            console.info(t),
            'undefined' != typeof Error
          ) throw window.alert(t),
          new Error(t);
          throw t
        }
      },
      t.isNear = function (e, t) {
        var a = arguments.length > 2 &&
        void 0 !== arguments[2] ? arguments[2] : 0.0001;
        return Math.abs(e - t) < a
      },
      t.isNumber = function (e) {
        return !((0, r.default) (e) || void 0 === e || null === e)
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.NumberStateEntity = t.BooleanStateEntity = t.StateEntity = void 0;
      var i = a(8),
      r = n(i),
      s = a(2),
      o = n(s),
      u = a(1),
      l = n(u),
      c = a(4),
      d = n(c),
      f = a(6),
      v = n(f),
      h = a(5),
      p = n(h),
      m = a(9),
      y = a(20),
      _ = t.StateEntity = function (e) {
        function t(e, a, n, i, r) {
          var s = arguments.length > 5 &&
          void 0 !== arguments[5] &&
          arguments[5];
          (0, l.default) (this, t);
          var u = (0, v.default) (this, (t.__proto__ || (0, o.default) (t)).call(this, e, a, new n(i)));
          return u.initialValue = i,
          u.resetOnPrestige = r,
          u.resetOnGrandPrestige = s,
          u
        }
        return (0, p.default) (t, e),
        (0, d.default) (
          t,
          [
            {
              key: 'prestige',
              value: function () {
                this.resetOnPrestige &&
                (this.state.value = this.initialValue)
              }
            },
            {
              key: 'grandPrestige',
              value: function () {
                this.resetOnGrandPrestige &&
                (this.state.value = this.initialValue),
                this.prestige()
              }
            },
            {
              key: 'postPrestigeAssert',
              value: function () {
                (0, y.assert) (
                  !this.resetOnPrestige ||
                  this.state.value === this.initialValue,
                  'state entity does not have original value after prestige: ' + this.id
                )
              }
            },
            {
              key: 'setValue',
              value: function (e) {
                var t = arguments.length > 1 &&
                void 0 !== arguments[1] &&
                arguments[1];
                this.state.value = e,
                t &&
                (this.initialValue = e),
                this.update(),
                this.integrityCheck()
              }
            },
            {
              key: 'integrityCheck',
              value: function () {
              }
            },
            {
              key: 'getValue',
              value: function () {
                return this.state.value
              }
            },
            {
              key: 'value',
              get: function () {
                return this.getValue()
              },
              set: function (e) {
                this.setValue(e)
              }
            }
          ]
        ),
        t
      }(m.BasicEntity),
      g = function e(t) {
        (0, l.default) (this, e),
        this.value = t
      },
      b = (
        t.BooleanStateEntity = function (e) {
          function t(e, a) {
            var n = arguments.length > 2 &&
            void 0 !== arguments[2] &&
            arguments[2],
            i = !(arguments.length > 3 && void 0 !== arguments[3]) ||
            arguments[3],
            r = arguments.length > 4 &&
            void 0 !== arguments[4] ? arguments[4] : function () {
              return !0
            };
            (0, l.default) (this, t);
            var s = (0, v.default) (this, (t.__proto__ || (0, o.default) (t)).call(this, e, a, g, n, i));
            return s.trueToggleAllowed = r,
            s
          }
          return (0, p.default) (t, e),
          (0, d.default) (
            t,
            [
              {
                key: 'toggleValue',
                value: function () {
                  (this.getValue() || this.trueToggleAllowed()) &&
                  this.setValue(!this.getValue())
                }
              },
              {
                key: 'select',
                value: function (e, t) {
                  return this.state.value ? e : t
                }
              }
            ]
          ),
          t
        }(_),
        function e(t) {
          (0, l.default) (this, e),
          this.value = t,
          this.maximum = t,
          this.minimum = t
        }
      );
      t.NumberStateEntity = function (e) {
        function t(e, a) {
          var n = arguments.length > 2 &&
          void 0 !== arguments[2] ? arguments[2] : 0,
          i = !(arguments.length > 3 && void 0 !== arguments[3]) ||
          arguments[3],
          r = arguments.length > 4 &&
          void 0 !== arguments[4] ? arguments[4] : null,
          s = arguments.length > 5 &&
          void 0 !== arguments[5] ? arguments[5] : null;
          (0, l.default) (this, t);
          var u = (0, v.default) (this, (t.__proto__ || (0, o.default) (t)).call(this, e, a, b, n, i));
          return u.minValue = r,
          u.maxValue = s,
          u
        }
        return (0, p.default) (t, e),
        (0, d.default) (
          t,
          [
            {
              key: 'incrementValue',
              value: function () {
                this.setValue(this.getValue() + 1)
              }
            },
            {
              key: 'decrementValue',
              value: function () {
                this.setValue(this.getValue() - 1)
              }
            },
            {
              key: 'add',
              value: function (e) {
                this.setValue(this.getValue() + e)
              }
            },
            {
              key: 'integrityCheck',
              value: function () {
                this.minValue &&
                this.minValue > this.value &&
                (this.value = this.minValue),
                this.maxValue &&
                this.maxValue < this.value &&
                (this.value = this.maxValue),
                this.state.maximum = Math.max(this.state.maximum, this.state.value),
                this.state.minimum = Math.min(this.state.minimum, this.state.value),
                (0, r.default) (
                  t.prototype.__proto__ ||
                  (0, o.default) (t.prototype),
                  'integrityCheck',
                  this
                ).call(this)
              }
            }
          ]
        ),
        t
      }(_)
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.activities = t.freeTime = t.slacking = t.chores = t.exercise = t.eat = t.research = t.work = t.sleep = void 0;
      var i = a(4),
      r = n(i),
      s = a(8),
      o = n(s),
      u = a(2),
      l = n(u),
      c = a(1),
      d = n(c),
      f = a(6),
      v = n(f),
      h = a(5),
      p = n(h),
      m = a(9),
      y = a(16),
      _ = a(21),
      g = a(29),
      b = a(61),
      M = a(20),
      k = function (e) {
        function t() {
          return (0, d.default) (this, t),
          (0, v.default) (this, (t.__proto__ || (0, l.default) (t)).apply(this, arguments))
        }
        return (0, p.default) (t, e),
        t
      }(_.NumberStateEntity),
      w = function (e) {
        function t(e, a, n) {
          (0, d.default) (this, t);
          var i = (0, v.default) (
            this,
            (t.__proto__ || (0, l.default) (t)).call(this, e, a, n, 0, '', '', !0, !0)
          );
          return (0, M.assert) (n >= - 0.001, 'Activity duration is negative on construction'),
          i.updateDurationString(),
          i
        }
        return (0, p.default) (t, e),
        (0, r.default) (
          t,
          [
            {
              key: 'setBase',
              value: function (e) {
                (0, o.default) (
                  t.prototype.__proto__ ||
                  (0, l.default) (t.prototype),
                  'setBase',
                  this
                ).call(this, e)
              }
            },
            {
              key: 'update',
              value: function () {
                (0, o.default) (
                  t.prototype.__proto__ ||
                  (0, l.default) (t.prototype),
                  'update',
                  this
                ).call(this),
                this.updateDurationString()
              }
            },
            {
              key: 'updateDurationString',
              value: function () {
                var e = Math.floor(this.effective / 60),
                t = this.effective - 60 * e;
                (0, M.assert) (this.effective === 60 * e + t, 'hour/minutes calculation is wrong');
                var a = ('00' + Math.floor(t)).substr( - 2);
                this.durationString = e + ':' + a
              }
            }
          ]
        ),
        t
      }(y.Stat),
      x = function e() {
        (0, d.default) (this, e)
      },
      P = function (e) {
        function t(e, a, n, i, r, s) {
          var o = arguments.length > 6 &&
          void 0 !== arguments[6] ? arguments[6] : function (e) {
            return e
          },
          u = arguments.length > 7 &&
          void 0 !== arguments[7] &&
          arguments[7];
          (0, d.default) (this, t);
          var c = (0, v.default) (this, (t.__proto__ || (0, l.default) (t)).call(this, e, a, new x));
          return c.originalDuration = i,
          c.ingName = n,
          c.durationByUser = r,
          c.color = s,
          c.isCurrent = !1,
          c.doFun = o,
          c.minTime = 0,
          c.duration = new w(c.id + 'duration', c.name + ' duration', i),
          u &&
          (
            c.durationProxy = new k(c.id + 'DurationProxy', c.name + ' Duration Proxy', 0, !0, 0),
            c.durationProxy.setValue(c.duration.effective, !0),
            c.durationProxy.dependants.push(c)
          ),
          c.update(),
          c
        }
        return (0, p.default) (t, e),
        (0, r.default) (
          t,
          [
            {
              key: 'prestige',
              value: function () {
                this.duration.base = this.originalDuration,
                this.duration.effective = this.originalDuration
              }
            },
            {
              key: 'postPrestigeAssert',
              value: function () {
                this.durationProxy &&
                this.durationProxy.setValue(this.duration.effective),
                (0, M.assert) (
                  'activityFreeTime' === this.id ||
                  this.duration.base === this.originalDuration,
                  this.name + ' duration should be ' + this.originalDuration + ', but it is ' + this.duration.base
                )
              }
            },
            {
              key: 'sufficientTime',
              value: function () {
                return !0
              }
            },
            {
              key: 'update',
              value: function () {
                this.hasOwnProperty('durationProxy') &&
                (
                  this.duration.base = this.durationProxy.getValue(),
                  this.duration.update(),
                  (0, M.assert) (this.duration.base === this.durationProxy.getValue(), this.name),
                  (0, M.assert) (this.duration.base === this.duration.effective, this.name)
                ),
                (0, o.default) (
                  t.prototype.__proto__ ||
                  (0, l.default) (t.prototype),
                  'update',
                  this
                ).call(this)
              }
            },
            {
              key: 'getDuration',
              value: function () {
                return this.duration.effective
              }
            },
            {
              key: 'do',
              value: function (e) {
                this.doFun(e)
              }
            }
          ]
        ),
        t
      }(m.BasicEntity),
      L = t.sleep = new P(
        'activitySleep',
        'Sleep',
        'sleeping',
        480,
        !0,
        '#007D43',
        function () {
          return null
        },
        !0
      ),
      C = function (e) {
        g.currentJobContainer.job.xp.gainExperience(S.getDuration())
      },
      S = t.work = new P('activityWork', 'Work', 'working', 480, !0, '#F6768E', C, !0),
      A = function (e) {
        b.currentResearchContainer.area &&
        b.currentResearchContainer.area.xp.gainExperience(T.getDuration())
      },
      T = t.research = new P(
        'activityResearch',
        'Research',
        'researching',
        0,
        !0,
        'FF7A5C',
        A,
        !0
      );
      T.sufficientTime = function () {
        return T.duration.effective > 0 ||
        null === b.currentResearchContainer.area
      };
      var E = t.eat = new P('activityEat', 'Food', 'cooking', 0, !1, '#00538A'),
      I = (
        t.exercise = new P(
          'activityExercise',
          'Exercise',
          'exercising',
          0,
          !0,
          '#00538A',
          function () {
            return null
          },
          !0
        ),
        t.chores = new P('activityChores', 'Chores', 'Cleaning', 0, !1, '#000000')
      ),
      D = t.slacking = new P('activitySlacking', 'Slacking', 'slacking', 240, !1, '#000000'),
      j = t.freeTime = new P(
        'activityFreeTime',
        'Free Time',
        'slacking',
        120,
        !1,
        '#53377A',
        function (e) {
          return e
        },
        !0
      );
      t.activities = [
        L,
        S,
        T,
        E,
        I,
        D,
        j
      ]
    },
    ,
    function (e, t, a) {
      a(291);
      var n = a(3) (a(179), a(378), 'data-v-6dcc75b4', null);
      e.exports = n.exports
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.Area = void 0;
      var i = a(2),
      r = n(i),
      s = a(4),
      o = n(s),
      u = a(6),
      l = n(u),
      c = a(8),
      d = n(c),
      f = a(5),
      v = n(f),
      h = a(1),
      p = n(h),
      m = a(9),
      y = a(48),
      _ = a(30),
      g = a(61),
      b = a(20),
      M = a(28),
      k = function e() {
        (0, p.default) (this, e),
        this.active = !1
      };
      t.Area = function (e) {
        function t(e, a, n) {
          (0, p.default) (this, t);
          var i = (0, l.default) (this, (t.__proto__ || (0, r.default) (t)).call(this, e, a, new k));
          i.name = a,
          i.subjects = n;
          var s = (0, _.createResearchXpPerHourStat) (i.id + '_xp_per_hour', i.name + ' XP/h');
          return i.xp = new y.XPModule(i.id + 'experience', i.name + ' experience', s),
          i.xp.nextLevelAtXp = (0, y.linearExponentialXpIncrease) (100),
          i.effect = '',
          i.logUnlock = !0,
          i.importance = 1,
          i
        }
        return (0, v.default) (t, e),
        (0, o.default) (
          t,
          [
            {
              key: 'activate',
              value: function () {
                this.state.active = !0,
                g.currentResearchContainer.setCurrentResearch(this),
                this.update()
              }
            },
            {
              key: 'deactivate',
              value: function () {
                this.state.active = !1,
                this.xp.lastLevelUp -= 1,
                this.update()
              }
            },
            {
              key: 'update',
              value: function () {
                var e = this.unlocked();
                (0, d.default) (
                  t.prototype.__proto__ ||
                  (0, r.default) (t.prototype),
                  'update',
                  this
                ).call(this);
                var a = this.unlocked();
                !e &&
                a &&
                M.researchPane.notify()
              }
            },
            {
              key: 'prestige',
              value: function () {
                this.state.active = !1
              }
            },
            {
              key: 'onLoad',
              value: function () {
                this.state.active &&
                g.currentResearchContainer.setCurrentResearch(this)
              }
            },
            {
              key: 'postPrestigeAssert',
              value: function () {
                (0, b.assert) (!this.state.active)
              }
            }
          ]
        ),
        t
      }(m.BasicEntity)
    },
    ,
    ,
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.selectPane = t.panes = t.journalPane = t.lifeSummaryPane = t.logPane = t.achievementPane = t.groundhogMarketPane = t.otherPane = t.privacyPane = t.aboutPane = t.keyBindingsPane = t.settingsPane = t.eventPane = t.lifestylePane = t.boostsPane = t.housingPane = t.healthPane = t.happinessPane = t.lambdaPane = t.loopTrapPane = t.warPane = t.lambdaPanes = t.labPane = t.queuePane = t.researchPane = t.labPanes = t.readingPane = t.jobPane = t.topLevelPanes = void 0;
      var i = a(10),
      r = n(i),
      s = a(118),
      o = t.topLevelPanes = new s.PaneGroup,
      u = t.jobPane = new s.Pane('job-pane', 'Job', 'job-display', o, !1),
      l = (
        t.readingPane = new s.Pane('reading-pane', 'Reading', 'study-fields', o),
        t.labPanes = new s.PaneGroup
      ),
      c = (
        t.researchPane = new s.Pane('research-pane', 'Research', 'research-display', l),
        t.queuePane = new s.Pane('queue-pane', 'Queue', 'queue-display', l),
        t.labPane = new s.Pane('lab-pane', 'Lab', 'lab-display', o, !1, l.panes)
      ),
      d = t.lambdaPanes = new s.PaneGroup,
      f = (
        t.warPane = new s.Pane('war-pane', 'War', 'war-display', d),
        t.loopTrapPane = new s.Pane('looptrap-pane', 'Loop Trap', 'looptrap-display', d),
        t.lambdaPane = new s.Pane('lambda-pane', 'Lambda', 'lambda-display', o, !1, d.panes)
      ),
      v = new s.PaneGroup,
      h = (
        t.happinessPane = new s.Pane('happiness-pane', 'You', 'happiness-explain', v),
        t.healthPane = new s.Pane('health-pane', 'Health', 'health-display', v),
        t.housingPane = new s.Pane('housing-pane', 'Home', 'housing-display', v),
        t.boostsPane = new s.Pane('boosts-pane', 'Boosts', 'boosts-display', v),
        t.lifestylePane = new s.Pane(
          'lifestyle-pane',
          'Lifestyle',
          'lifestyle-display',
          o,
          !1,
          v.panes
        )
      ),
      p = t.eventPane = new s.Pane('event-pane', 'Events', 'events-display', o),
      m = new s.PaneGroup,
      y = (
        t.settingsPane = new s.Pane('settings-pane', 'Settings', 'settings-display', m, !1),
        t.keyBindingsPane = new s.Pane(
          'keybindings-pane',
          'Keyboard Shortcuts',
          'keybindings-display',
          m,
          !1
        ),
        t.aboutPane = new s.Pane('about-pane', 'About', 'about-display', m, !1),
        t.privacyPane = new s.Pane('privacy-pane', 'Privacy', 'privacy-display', m, !1),
        t.otherPane = new s.Pane('other-pane', 'Other', 'other-display', o, !0, m.panes)
      ),
      _ = t.groundhogMarketPane = new s.Pane('groundhogmarket-pane', 'Market', 'groundhog-market', o, !1),
      g = new s.PaneGroup,
      b = (
        t.achievementPane = new s.Pane('achievement-pane', 'Achievements', 'achievements-display', g),
        t.logPane = new s.Pane('log-pane', 'Log', 'log-display', g),
        t.lifeSummaryPane = new s.Pane('life-summary-pane', 'History', 'life-summary', g),
        t.journalPane = new s.Pane('journal-pane', 'Journal', 'journal-display', o, !1, g.panes)
      );
      t.panes = [
        h,
        u,
        c,
        p,
        b,
        f,
        _,
        y
      ],
      t.selectPane = function (e) {
        if (e.unlocked()) {
          if (e.paneGroup.allowMultiple) e.toggle();
           else {
            var t = !0,
            a = !1,
            n = void 0;
            try {
              for (
                var i,
                s = (0, r.default) (e.paneGroup.panes);
                !(t = (i = s.next()).done);
                t = !0
              ) {
                var o = i.value;
                o.deselect()
              }
            } catch (e) {
              a = !0,
              n = e
            } finally {
              try {
                !t &&
                s.return &&
                s.return()
              } finally {
                if (a) throw n
              }
            }
            e.select()
          }
          if (e.subpanes.length > 0) {
            var u = !1,
            l = !0,
            c = !1,
            d = void 0;
            try {
              for (var f, v = (0, r.default) (e.subpanes); !(l = (f = v.next()).done); l = !0) {
                var h = f.value;
                u = u ||
                h.state.selected
              }
            } catch (e) {
              c = !0,
              d = e
            } finally {
              try {
                !l &&
                v.return &&
                v.return()
              } finally {
                if (c) throw d
              }
            }
            u ||
            e.subpanes[0].select()
          }
        }
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.currentJobContainer = t.currentIncomeContainer = void 0;
      var i = a(2),
      r = n(i),
      s = a(1),
      o = n(s),
      u = a(4),
      l = n(u),
      c = a(6),
      d = n(c),
      f = a(8),
      v = n(f),
      h = a(5),
      p = n(h),
      m = a(9),
      y = a(63),
      _ = function (e) {
        function t() {
          return (0, o.default) (this, t),
          (0, d.default) (
            this,
            (t.__proto__ || (0, r.default) (t)).call(this, 'currentIncomeContainer', 'Current Income Container', {
            })
          )
        }
        return (0, p.default) (t, e),
        (0, l.default) (
          t,
          [
            {
              key: 'prestige',
              value: function () {
              }
            },
            {
              key: 'setCurrentIncome',
              value: function (e) {
                e !== this.income &&
                (
                  this.income &&
                  this.income.unsubscribe(this),
                  this.income = e,
                  e.dependants.push(this),
                  this.update()
                )
              }
            },
            {
              key: 'update',
              value: function () {
                (0, v.default) (
                  t.prototype.__proto__ ||
                  (0, r.default) (t.prototype),
                  'update',
                  this
                ).call(this)
              }
            }
          ]
        ),
        t
      }(m.BasicEntity),
      g = t.currentIncomeContainer = new _,
      b = function (e) {
        function t() {
          return (0, o.default) (this, t),
          (0, d.default) (
            this,
            (t.__proto__ || (0, r.default) (t)).call(this, 'currentJobContainer', 'Current Job Container', {
            })
          )
        }
        return (0, p.default) (t, e),
        (0, l.default) (
          t,
          [
            {
              key: 'prestige',
              value: function () {
                this.setCurrentJob(this.defaultJob)
              }
            },
            {
              key: 'setCurrentJob',
              value: function (e) {
                e !== this.job &&
                (
                  this.job &&
                  this.job.deactivate(),
                  this.job = e,
                  this.job.activate(),
                  g.setCurrentIncome(e.income),
                  y.log.info(
                    'You got a new job: ' + this.job.name,
                    this.id,
                    y.log.JOBSELECTED
                  ),
                  (0, v.default) (
                    t.prototype.__proto__ ||
                    (0, r.default) (t.prototype),
                    'update',
                    this
                  ).call(this)
                )
              }
            }
          ]
        ),
        t
      }(m.BasicEntity);
      t.currentJobContainer = new b
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.createResearchXpPerHourStat = t.baseResearchXpPerHourStat = t.createWorkXpPerHourStat = t.baseWorkXpPerHourStat = t.XpPerHourStat = void 0;
      var i = a(2),
      r = n(i),
      s = a(1),
      o = n(s),
      u = a(6),
      l = n(u),
      c = a(5),
      d = n(c),
      f = a(16),
      v = a(157),
      h = a(12),
      p = t.XpPerHourStat = function (e) {
        function t(e, a) {
          (0, o.default) (this, t);
          var n = (0, l.default) (
            this,
            (t.__proto__ || (0, r.default) (t)).call(this, e, a, 0, 2, '', '')
          );
          return n.update(),
          n
        }
        return (0, d.default) (t, e),
        t
      }(f.Stat),
      m = t.baseWorkXpPerHourStat = new f.Stat('baseWorkXpPerHourStat', 'Base Work XP', 1, 2, '', '/h');
      m.addModifier(v.standardEnergyModifier);
      var y = (
        t.createWorkXpPerHourStat = function (e, t) {
          var a = new p(e, t),
          n = new h.StatEffectiveAddModifier(a.id + '_base', 'Base Work Experience', 1, m);
          return a.addModifier(n),
          a
        },
        t.baseResearchXpPerHourStat = new f.Stat('baseResearchXpPerHourStat', 'Base Research XP', 1, 2, '', '/h')
      );
      y.addModifier(v.standardEnergyModifier);
      t.createResearchXpPerHourStat = function (e, t) {
        var a = new p(e, t),
        n = new h.StatEffectiveAddModifier(a.id + '_base', 'Base Research Experience', 1, y);
        return a.addModifier(n),
        a
      }
    },
    ,
    ,
    ,
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.messageBox = void 0;
      var i = a(1),
      r = n(i),
      s = a(4),
      o = n(s),
      u = a(299),
      l = a(300),
      c = new window.Audio(u),
      d = new window.Audio(l),
      f = function () {
        function e() {
          (0, r.default) (this, e),
          this.messages = [],
          this.playSounds = null
        }
        return (0, o.default) (
          e,
          [
            {
              key: 'addMessage',
              value: function (e) {
                var t = arguments.length > 1 &&
                void 0 !== arguments[1] &&
                arguments[1],
                a = arguments.length > 2 &&
                void 0 !== arguments[2] ? arguments[2] : 'alert-success';
                for (
                  this.messages.push([e,
                  a]),
                  this.playSounds &&
                  this.playSounds.getValue() &&
                  (
                    'bell' === t ? (c.volume = 0.5, c.play()) : 'unlocked' === t &&
                    (d.volume = 0.5, d.play())
                  );
                  this.messages.length > 5;
                ) this.messages.shift()
              }
            },
            {
              key: 'oldestMessage',
              value: function () {
                return this.messages.length > 0 ? this.messages[0] : ''
              }
            },
            {
              key: 'newestMessage',
              value: function () {
                return this.messages.length > 0 ? this.messages[this.messages.length - 1] : ''
              }
            }
          ]
        ),
        e
      }();
      t.messageBox = new f
    },
    ,
    ,
    ,
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.studyPoints = t.money = void 0;
      var i = a(2),
      r = n(i),
      s = a(1),
      o = n(s),
      u = a(4),
      l = n(u),
      c = a(6),
      d = n(c),
      f = a(8),
      v = n(f),
      h = a(5),
      p = n(h),
      m = a(21),
      y = a(119),
      _ = function (e) {
        function t() {
          (0, o.default) (this, t);
          var e = (0, d.default) (
            this,
            (t.__proto__ || (0, r.default) (t)).call(this, 'money', 'Money', 100)
          );
          return e.austerityMode = !1,
          e.austerityAlert = !1,
          e
        }
        return (0, p.default) (t, e),
        (0, l.default) (
          t,
          [
            {
              key: 'acknowledgeAusterity',
              value: function () {
                this.austerityAlert = !1
              }
            },
            {
              key: 'update',
              value: function () {
                this.getValue() < 0 ? (
                  this.austerityMode ||
                  (this.austerityMode = !0, this.austerityAlert = !0),
                  y.schedule.austerityMode()
                ) : this.austerityMode = !1,
                (0, v.default) (
                  t.prototype.__proto__ ||
                  (0, r.default) (t.prototype),
                  'update',
                  this
                ).call(this)
              }
            }
          ]
        ),
        t
      }(m.NumberStateEntity);
      t.money = new _,
      t.studyPoints = new m.NumberStateEntity('studyPoints', 'Study Points', 0)
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.currentLoop = t.currentLifeThisLoop = t.currentLife = void 0;
      var i = a(2),
      r = n(i),
      s = a(1),
      o = n(s),
      u = a(4),
      l = n(u),
      c = a(6),
      d = n(c),
      f = a(8),
      v = n(f),
      h = a(5),
      p = n(h),
      m = a(21),
      y = function (e) {
        function t() {
          return (0, o.default) (this, t),
          (0, d.default) (
            this,
            (t.__proto__ || (0, r.default) (t)).call(this, 'currentLife', 'Current Life', 1, !1, 1, null)
          )
        }
        return (0, p.default) (t, e),
        (0, l.default) (
          t,
          [
            {
              key: 'prestige',
              value: function () {
                this.incrementValue(),
                (0, v.default) (
                  t.prototype.__proto__ ||
                  (0, r.default) (t.prototype),
                  'prestige',
                  this
                ).call(this)
              }
            }
          ]
        ),
        t
      }(m.NumberStateEntity),
      _ = (
        t.currentLife = new y,
        function (e) {
          function t() {
            (0, o.default) (this, t);
            var e = (0, d.default) (
              this,
              (t.__proto__ || (0, r.default) (t)).call(
                this,
                'currentLifeThisLoop',
                'Current Live this Loop',
                1,
                !1,
                1,
                null
              )
            );
            return e.minLivesToLoopTrap = new m.NumberStateEntity('minLivesToLoopTrap', 'Min Lives to Loop Trap', 9999, !1),
            e
          }
          return (0, p.default) (t, e),
          (0, l.default) (
            t,
            [
              {
                key: 'prestige',
                value: function () {
                  this.incrementValue(),
                  (0, v.default) (
                    t.prototype.__proto__ ||
                    (0, r.default) (t.prototype),
                    'prestige',
                    this
                  ).call(this)
                }
              },
              {
                key: 'grandPrestige',
                value: function () {
                  var e = this.minLivesToLoopTrap.getValue();
                  this.minLivesToLoopTrap.setValue(Math.min(e, this.getValue())),
                  this.setValue(1)
                }
              }
            ]
          ),
          t
        }(m.NumberStateEntity)
      ),
      g = (
        t.currentLifeThisLoop = new _,
        function (e) {
          function t() {
            return (0, o.default) (this, t),
            (0, d.default) (
              this,
              (t.__proto__ || (0, r.default) (t)).call(this, 'currentLoop', 'Current Loop', 1, !1, 1, null)
            )
          }
          return (0, p.default) (t, e),
          (0, l.default) (
            t,
            [
              {
                key: 'grandPrestige',
                value: function () {
                  this.incrementValue()
                }
              }
            ]
          ),
          t
        }(m.NumberStateEntity)
      );
      t.currentLoop = new g
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.yugle = t.yugleCeo = t.cto = t.productManager = t.divisionLead = t.seniorArchitect = t.teamLead = t.projectLead = t.softwareEngineer = t.juniorDeveloper = t.unpaidIntern = void 0;
      var n = a(78),
      i = a(77),
      r = a(11),
      s = a(48),
      o = t.unpaidIntern = new n.Job('yugle1', 'Unpaid Intern'),
      u = t.juniorDeveloper = new n.Job('yugle2', 'Junior Developer'),
      l = t.softwareEngineer = new n.Job('yugle3', 'Software Engineer'),
      c = t.projectLead = new n.Job('yugle4', 'Project Lead'),
      d = t.teamLead = new n.Job('yugle5', 'Team Lead'),
      f = t.seniorArchitect = new n.Job('yugle6', 'Senior Architect'),
      v = t.divisionLead = new n.Job('yugle7', 'Division Lead'),
      h = t.productManager = new n.Job('yugle8', 'Product Manager'),
      p = t.cto = new n.Job('yugle9', 'CTO'),
      m = t.yugleCeo = new n.Job('yugle10', 'CEO'),
      y = [
        o,
        u,
        l,
        c,
        d,
        f,
        v,
        h,
        p,
        m
      ];
      (0, s.configureXpProgression) (y, 1100, 2, 8),
      (0, n.configurePayProgression) (y, 10, 250, 2),
      o.setBasePay(0),
      (0, r.createLevelLockChain) (y, 10);
      t.yugle = new i.Career('yugle', 'Yugle', y)
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.Book = void 0;
      var i = a(2),
      r = n(i),
      s = a(6),
      o = n(s),
      u = a(5),
      l = n(u),
      c = a(1),
      d = n(c),
      f = a(9),
      v = function e(t) {
        (0, d.default) (this, e),
        this.completed = !1,
        this.onReadingList = !1,
        this.timeLeft = t,
        this.originalTimeLeft = t,
        this.readingListPosition = 0,
        this.timesCompleted = 0
      };
      t.Book = function (e) {
        function t(e, a, n, i) {
          var s = arguments.length > 4 &&
          void 0 !== arguments[4] ? arguments[4] : '';
          (0, d.default) (this, t);
          var u = (0, o.default) (this, (t.__proto__ || (0, r.default) (t)).call(this, e, a, new v(i)));
          return u.description = n,
          u.hours = i,
          u.asin = s,
          u.effect = '',
          u
        }
        return (0, l.default) (t, e),
        t
      }(f.BasicEntity)
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.physics = t.loopTrapResearch = t.laserGun = t.studyMirroredShip = t.demirrorAnomaly = t.mirrorMatter = t.anomaly = t.dmScanner = void 0;
      var n = a(62),
      i = a(114),
      r = a(25),
      s = a(11),
      o = a(49),
      u = a(12),
      l = t.dmScanner = new r.Area('area_dmScanner', 'Dark Matter Scanning', []),
      c = t.anomaly = new r.Area('area_investigateAnomaly', 'Investigate Anomaly', []),
      d = t.mirrorMatter = new r.Area('area_mirrorMatter', 'Mirror Matter Theory', []),
      f = t.demirrorAnomaly = new r.Area('area_demirror', 'Unmirror Anomaly', []),
      v = t.studyMirroredShip = new r.Area('area_studyMirroredShip', 'Study Mirrored Ship', []),
      h = t.laserGun = new r.Area('area_constructPowerPlant', 'Laser Gun', []);
      h.effect = '+10% Laser Gun Damage';
      var p = t.loopTrapResearch = new r.Area('area_loopTrap', 'Loop Trap Device', []);
      p.effect = 'Increases Loop Trap Device efficiency';
      for (var m = [
        i.qm,
        l,
        c,
        d,
        f,
        v,
        h,
        p
      ], y = 1; y < m.length - 2; y++) {
        var _ = new u.LevelAddMultModifier(m[y].id + '_level_mod', 'Research: ' + m[y].name, 2, m[y].xp, 0.01);
        m[y + 1].xp.xpPerHourStat.addModifier(_),
        m[y].effect = '+1% ' + m[y + 1].name + ' Research',
        (0, s.createLevelLock) (m[y], m[y + 1], 50 * y)
      }(0, s.createLevelLock) (o.lambdaComplexTrainee, l, 1),
      (0, s.createLevelLock) (v, p, 250),
      (0, s.createLevelLock) (o.darkPlateauCeo, h, 10),
      (0, s.createLevelLock) (o.darkPlateauCeo, p, 10);
      t.physics = new n.Field('physics', 'Physics', m)
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.energyStat = void 0;
      var i = a(2),
      r = n(i),
      s = a(1),
      o = n(s),
      u = a(4),
      l = n(u),
      c = a(6),
      d = n(c),
      f = a(8),
      v = n(f),
      h = a(5),
      p = n(h),
      m = a(16),
      y = a(66),
      _ = a(80),
      g = a(12),
      b = a(75),
      M = function (e) {
        function t() {
          return (0, o.default) (this, t),
          (0, d.default) (
            this,
            (t.__proto__ || (0, r.default) (t)).call(this, 'energy', 'Energy', b.DEVMODE ? 10000000 : 1, 2, '', '', !0)
          )
        }
        return (0, p.default) (t, e),
        (0, l.default) (
          t,
          [
            {
              key: 'update',
              value: function () {
                (0, v.default) (
                  t.prototype.__proto__ ||
                  (0, r.default) (t.prototype),
                  'update',
                  this
                ).call(this)
              }
            }
          ]
        ),
        t
      }(m.Stat),
      k = t.energyStat = new M,
      w = new g.StatEffectiveMultModifier('happinessEnergyMod', 'Happiness', 10, y.happinessStat);
      k.addModifier(w);
      var x = new g.StatEffectiveMultModifier('healthEnergyMod', 'Health', 11, _.healthStat);
      k.addModifier(x)
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.investmentReturnStat = t.expenseRatioStat = t.dailyNetIncomeStat = t.dailyIncomeStat = t.dailyExpensesStat = void 0;
      var n = a(16),
      i = a(52),
      r = a(12),
      s = a(160),
      o = t.dailyExpensesStat = new n.Stat('dailyExpensesStat', 'Expenses', 0, 2, '$', '', !1),
      u = new r.StatEffectiveAddModifier(o.id + '_foodCostsPerDayMod', 'Food', 1, i.foodCostsPerDayStat);
      o.addModifier(u),
      o.update();
      var l = t.dailyIncomeStat = new n.Stat('dailyIncomeStat', 'Income/day', 0, 2, '$'),
      c = new r.StatEffectiveAddModifier(l.id + '_workIncomePerDayMod', 'Work', 1, s.dailyWorkIncomeStat);
      l.addModifier(c),
      l.update();
      var d = t.dailyNetIncomeStat = new n.Stat('dailyNetIncome', 'Net Income/day', 0, 2, '$', ''),
      f = new r.StatEffectiveAddModifier(d.id + '_incomePerDayMod', 'Income', 1, l),
      v = new r.StatEffectiveAddModifier(
        d.id + '_expensesPerDayMod',
        'Expenses',
        2,
        o,
        function (e) {
          return - e
        }
      );
      d.addModifier(f),
      d.addModifier(v),
      d.update();
      var h = t.expenseRatioStat = new n.Stat('expenseRatioStat', 'Expense Ratio', 1, 2),
      p = new r.StatEffectiveMultModifier(
        h.id + '_incomePerDayMod',
        'Income',
        1,
        l,
        function (e) {
          return 1 / (e + 1)
        }
      ),
      m = new r.StatEffectiveMultModifier(h.id + '_expensesPerDayMod', 'Expenses', 2, o);
      h.addModifier(p),
      h.addModifier(m),
      h.update();
      t.investmentReturnStat = new n.Stat(
        'investmentReturnStat',
        'Investment Annual Returns',
        0,
        3,
        '',
        '%'
      )
    },
    ,
    ,
    function (e, t, a) {
      a(283);
      var n = a(3) (a(176), a(365), 'data-v-278891ea', null);
      e.exports = n.exports
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.configureXpProgression = t.XPModule = t.linearXpIncrease = t.linearExponentialXpIncrease = void 0;
      var i = a(2),
      r = n(i),
      s = a(4),
      o = n(s),
      u = a(6),
      l = n(u),
      c = a(8),
      d = n(c),
      f = a(5),
      v = n(f),
      h = a(1),
      p = n(h),
      m = a(9),
      y = a(17),
      _ = a(16),
      g = a(12),
      b = a(20),
      M = a(15),
      k = a(74),
      w = function e() {
        (0, p.default) (this, e),
        this.xp = 0,
        this.level = 0,
        this.previousLevel = 0,
        this.highestLevelEver = 0,
        this.highestLevelThisLoop = 0,
        this.minDaysToLevel100 = NaN,
        this.minDaysToLevel10 = NaN,
        this.loopTrapMultiplier = 1
      },
      x = t.linearExponentialXpIncrease = function (e) {
        var t = function (t) {
          return Math.floor((t + 1) * e * Math.pow(1.007, Math.max(t - 50, 0)))
        };
        return t
      },
      P = (
        t.linearXpIncrease = function (e) {
          var t = function (t) {
            return Math.floor((t + 1) * e * (1 + Math.max(0, t - 100) / 500) * (1 + Math.max(0, t - 1000) / 100))
          };
          return t
        },
        function (e) {
          function t(e, a, n) {
            (0, p.default) (this, t);
            var i = (0, l.default) (
              this,
              (t.__proto__ || (0, r.default) (t)).call(this, e, a, n.computePrestigeFactor(), 0, '', '', !0, !1)
            );
            return i.xpmodule = n,
            i.xpmodule.subscribe(i),
            i.update(),
            i
          }
          return (0, v.default) (t, e),
          (0, o.default) (
            t,
            [
              {
                key: 'update',
                value: function () {
                  this.base = this.xpmodule.computePrestigeFactor(),
                  (0, b.assert) ((0, b.isNumber) (this.base)),
                  (0, d.default) (
                    t.prototype.__proto__ ||
                    (0, r.default) (t.prototype),
                    'update',
                    this
                  ).call(this)
                }
              }
            ]
          ),
          t
        }(_.Stat)
      );
      t.XPModule = function (e) {
        function t(e, a, n) {
          var i = arguments.length > 3 &&
          void 0 !== arguments[3] ? arguments[3] : x(10);
          (0, p.default) (this, t);
          var s = (0, l.default) (this, (t.__proto__ || (0, r.default) (t)).call(this, e, a, new w));
          s.xpPerHourStat = n,
          s.nextLevelAtXp = i,
          s.groundhogFactorStat = new P(s.id + '_groundhogFactorStat', 'Groundhog Factor', s);
          var o = new g.StatEffectiveMultModifier(
            s.id + '_groundhogFactorMod',
            'Groundhog Factor',
            100,
            s.groundhogFactorStat
          );
          s.xpPerHourStat.addModifier(o);
          var u = new g.GenericMultModifier(
            s.id + '_ltmod',
            'Loop Trap',
            110,
            s,
            function (e) {
              return e.state.loopTrapMultiplier
            }
          );
          s.xpPerHourStat.addModifier(u),
          s.xpPerDayStat = new _.Stat(s.id + '_xppday', s.name + ' XP/day', 0, 2);
          var c = new g.StatEffectiveAddModifier(s.id + '_xphour2day', 'XP/h', 1, s.xpPerHourStat);
          return s.xpPerDayStat.addModifier(c),
          s.levelUp = !1,
          s.lastLevelUp = - 1,
          s.update(),
          s
        }
        return (0, v.default) (t, e),
        (0, o.default) (
          t,
          [
            {
              key: 'timesReachedLevel',
              value: function () {
                var e = this;
                return this.state.levelsReached.map(function (t) {
                  return t > e.state.level ? 1 : 0
                }).reduce(function (e, t) {
                  return e + t
                }, 0)
              }
            },
            {
              key: 'highestLevelEver',
              value: function () {
                return this.state.highestLevelEver
              }
            },
            {
              key: 'highestLevelEverIncludingThisLife',
              value: function () {
                return Math.max(this.highestLevelEver(), this.state.level)
              }
            },
            {
              key: 'previousLevelReached',
              value: function () {
                return this.state.previousLevel
              }
            },
            {
              key: 'computePrestigeFactor',
              value: function () {
                return 1 + this.state.highestLevelThisLoop / 10
              }
            },
            {
              key: 'futurePrestigeFactor',
              value: function () {
                return 1 + Math.max(this.state.highestLevelThisLoop, this.state.level) / 10
              }
            },
            {
              key: 'perc',
              value: function () {
                return 100 * this.state.xp / this.nextLevelAtXp(this.state.level)
              }
            },
            {
              key: 'updateMinDaysToLevel',
              value: function () {
                100 === this.state.level ? (0, b.isNumber) (this.state.minDaysToLevel100) ? this.state.minDaysToLevel100 = Math.min(y.currentDay.getValue(), this.state.minDaysToLevel100) : this.state.minDaysToLevel100 = y.currentDay.getValue() : 10 === this.state.level &&
                (
                  (0, b.isNumber) (this.state.minDaysToLevel10) ? this.state.minDaysToLevel10 = Math.min(y.currentDay.getValue(), this.state.minDaysToLevel10) : this.state.minDaysToLevel10 = y.currentDay.getValue()
                )
              }
            },
            {
              key: 'getMinDaysToLevel',
              value: function (e) {
                return 100 === e &&
                (0, b.isNumber) (this.state.minDaysToLevel100) ? this.state.minDaysToLevel100 : 10 === e &&
                (0, b.isNumber) (this.state.minDaysToLevel10) ? this.state.minDaysToLevel10 : NaN
              }
            },
            {
              key: 'gainExperience',
              value: function (e) {
                var t = this.xpPerHourStat.effective * e / 60;
                for (this.levelUp = 0; t > 0; ) {
                  var a = this.nextLevelAtXp(this.state.level);
                  t + this.state.xp >= a ? (
                    t -= a - this.state.xp,
                    this.state.level += 1,
                    this.updateMinDaysToLevel(),
                    this.state.xp = 0,
                    this.levelUp += 1
                  ) : (this.state.xp += t, t = 0),
                  this.levelUp >= 10 &&
                  (t = 0)
                }
                this.levelUp > 0 &&
                (this.lastLevelUp = y.currentDay.getValue(), this.update())
              }
            },
            {
              key: 'xpToNextLevel',
              value: function () {
                return this.nextLevelAtXp(this.state.level) - this.state.xp
              }
            },
            {
              key: 'xpToNextLevelString',
              value: function () {
                return (0, M.abbreviateNumber) (this.xpToNextLevel())
              }
            },
            {
              key: 'prestige',
              value: function () {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
                this.state.previousLevel = this.state.level,
                this.state.highestLevelEver = Math.max(this.state.level, this.state.highestLevelEver),
                this.state.highestLevelThisLoop = Math.max(this.state.level, this.state.highestLevelThisLoop),
                this.state.xp = 0,
                e &&
                (this.state.level = 0)
              }
            },
            {
              key: 'grandPrestige',
              value: function () {
                this.state.highestLevelThisLoop = Math.max(this.state.level, this.state.highestLevelThisLoop),
                this.state.highestLevelEver = Math.max(this.state.level, this.state.highestLevelEver),
                this.state.loopTrapMultiplier += this.computePrestigeFactor() * k.loopTrap.efficiency.effective,
                this.state.highestLevelThisLoop = 0,
                this.state.level = 0,
                this.state.xp = 0
              }
            },
            {
              key: 'postPrestigeAssert',
              value: function () {
                (0, b.assert) (0 === this.state.xp)
              }
            },
            {
              key: 'onLoad',
              value: function () {
                this.state.minDaysToLevel = [],
                this.state.levelsReached = []
              }
            },
            {
              key: 'recordClass',
              value: function () {
                return this.state.highestLevelThisLoop === this.previousLevelReached() ? 'new-record' : ''
              }
            }
          ]
        ),
        t
      }(m.BasicEntity),
      t.configureXpProgression = function (e, t, a, n) {
        for (
          var i = Math.round(365 * t * n),
          r = e.map(function (e) {
            return 1
          }),
          s = 1;
          s < r.length;
          s++
        ) r[s] = r[s - 1] * a;
        var o = r.reduce(function (e, t) {
          return e + t
        });
        r = r.map(function (e) {
          return e * i / o
        });
        for (var u = r.map(function (e) {
          return e / 55
        }), l = 0; l < r.length; l++) e[l].xp.nextLevelAtXp = x(Math.ceil(u[l]))
      }
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.darkPlateau = t.darkPlateauCeo = t.lambdaComplexChief = t.lambdaComplexScientist = t.lambdaComplexTrainee = t.labSupervisor = t.seniorScientist = t.scientist = t.juniorScientist = t.labAssistant = t.labCleaner = void 0;
      var n = a(78),
      i = a(77),
      r = a(11),
      s = a(48),
      o = t.labCleaner = new n.Job('dp1', 'Lab Cleaner'),
      u = t.labAssistant = new n.Job('dp2', 'Lab Assistant'),
      l = t.juniorScientist = new n.Job('dp3', 'Junior Scientist'),
      c = t.scientist = new n.Job('dp4', 'Scientist'),
      d = t.seniorScientist = new n.Job('dp5', 'Senior Scientist'),
      f = t.labSupervisor = new n.Job('dp6', 'Lab Supervisor'),
      v = t.lambdaComplexTrainee = new n.Job('dp7', 'Lambda Trainee'),
      h = t.lambdaComplexScientist = new n.Job('dp8', 'Lambda Scientist'),
      p = t.lambdaComplexChief = new n.Job('dp9', 'Lambda Chief'),
      m = t.darkPlateauCeo = new n.Job('dp10', 'CEO'),
      y = [
        o,
        u,
        l,
        c,
        d,
        f,
        v,
        h,
        p,
        m
      ];
      (0, s.configureXpProgression) (y, 2200, 2, 8),
      (0, n.configurePayProgression) (y, 30, 400, 2),
      (0, r.createLevelLockChain) (y, 10);
      t.darkPlateau = new i.Career('dark_plateau', 'Dark Plateau', y)
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.currentHomeContainer = void 0;
      var i = a(2),
      r = n(i),
      s = a(1),
      o = n(s),
      u = a(4),
      l = n(u),
      c = a(6),
      d = n(c),
      f = a(8),
      v = n(f),
      h = a(5),
      p = n(h),
      m = a(9),
      y = a(63),
      _ = a(22),
      g = function (e) {
        function t() {
          return (0, o.default) (this, t),
          (0, d.default) (
            this,
            (t.__proto__ || (0, r.default) (t)).call(this, 'currentHomeContainer', 'Current Home Container', {
            })
          )
        }
        return (0, p.default) (t, e),
        (0, l.default) (
          t,
          [
            {
              key: 'setCurrent',
              value: function (e) {
                var a = !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
                if (e !== this.home) {
                  if (this.home) {
                    if (
                      this.home.choresTime.effective < e.choresTime.effective &&
                      e.choresTime.effective - this.home.choresTime.effective > _.freeTime.duration.effective
                    ) return;
                    if (a && !e.enoughMoney()) return
                  }
                  this.home &&
                  this.home.deactivate(),
                  this.home = e,
                  this.home.activate(a),
                  y.log.info(
                    'You got a new home: ' + this.home.name,
                    this.id,
                    y.log.HOMESELECTED
                  ),
                  (0, v.default) (
                    t.prototype.__proto__ ||
                    (0, r.default) (t.prototype),
                    'update',
                    this
                  ).call(this)
                }
              }
            }
          ]
        ),
        t
      }(m.BasicEntity);
      t.currentHomeContainer = new g
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.homes = t.homeToHappinessFun = t.parentsBasement = void 0;
      var i = a(2),
      r = n(i),
      s = a(4),
      o = n(s),
      u = a(6),
      l = n(u),
      c = a(5),
      d = n(c),
      f = a(1),
      v = n(f),
      h = a(9),
      p = a(16),
      m = a(50),
      y = a(12),
      _ = a(44),
      g = a(11),
      b = a(38),
      M = a(22),
      k = a(105),
      w = a(17),
      x = function e(t, a) {
        (0, v.default) (this, e),
        this.selected = t,
        this.initialCost = a
      },
      P = function (e) {
        function t(e, a, n, i, s, o, u) {
          var c = arguments.length > 7 &&
          void 0 !== arguments[7] &&
          arguments[7];
          (0, v.default) (this, t);
          var d = (0, l.default) (
            this,
            (t.__proto__ || (0, r.default) (t)).call(this, e, a, new x(c, s))
          );
          d.description = n,
          d.rent = new p.Stat(d.id + '_rent', d.name + ' Rent', i, 2, '$');
          var f = new y.StatEffectiveAddModifier(d.id + '_rent_expense_mod', 'Rent for ' + d.name, 1, d.rent);
          (0, g.createSelectedLock) (d, f),
          _.dailyExpensesStat.addModifier(f),
          d.initialCost = new p.Stat(d.id + 'initial_cost', 'Initial Cost', s, 0, '$'),
          d.originalInitialCost = s,
          d.choresTime = new p.Stat(d.id + '_chores', 'Chores', o, 0, '', '', !0, !0, 0);
          var h = new y.StatEffectiveAddModifier(d.id + '_chores_mod', 'Chores at ' + d.name, 1, d.choresTime);
          return (0, g.createSelectedLock) (d, h),
          M.chores.duration.addModifier(h),
          d.quality = new p.Stat(d.id + '_quality', 'Home Quality', u, 0),
          c &&
          (
            m.currentHomeContainer.home = d,
            m.currentHomeContainer.update()
          ),
          d
        }
        return (0, d.default) (t, e),
        (0, o.default) (
          t,
          [
            {
              key: 'enoughFreeTime',
              value: function () {
                return M.freeTime.duration.effective >= this.choresTime.effective - m.currentHomeContainer.home.choresTime.effective
              }
            },
            {
              key: 'enoughMoney',
              value: function () {
                return this.initialCost.effective <= 0.001 ||
                b.money.getValue() >= this.initialCost.effective
              }
            },
            {
              key: 'enoughIncome',
              value: function () {
                return _.dailyNetIncomeStat.effective >= this.rent.effective - m.currentHomeContainer.home.rent.effective
              }
            },
            {
              key: 'activate',
              value: function () {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0];
                this.state.selected = !0,
                e &&
                b.money.add( - this.initialCost.effective),
                this.state.initialCost = 0,
                this.initialCost.setBase(0),
                this.update()
              }
            },
            {
              key: 'deactivate',
              value: function () {
                this.state.selected = !1,
                this.update()
              }
            },
            {
              key: 'prestige',
              value: function () {
                this.initialCost.setBase(this.originalInitialCost),
                this.state.initialCost = this.originialInitialCost,
                this.state.selected = 'home_parentsBasement' === this.id,
                this.state.selected &&
                m.currentHomeContainer.setCurrent(this)
              }
            },
            {
              key: 'postPrestigeAssert',
              value: function () {
                this.state.selected = 'home_parentsBasement' === this.id
              }
            },
            {
              key: 'onLoad',
              value: function () {
                this.state.selected &&
                (m.currentHomeContainer.home = this),
                this.initialCost.setBase(this.state.initialCost)
              }
            }
          ]
        ),
        t
      }(h.BasicEntity),
      L = t.parentsBasement = new P(
        'home_parentsBasement',
        'Parents Basement',
        'Still gotta\' do your part',
        10,
        0,
        30,
        1,
        !0
      ),
      C = new P(
        'home_sharedApartment',
        'Shared Apartment',
        'WHAT\'S THAT THING IN THE SINK?',
        25,
        500,
        60,
        2
      ),
      S = new P(
        'home_studioApartment',
        'Studio Apartment',
        'This is the living room. Also the kitchen. And bedroom.',
        50,
        1000,
        90,
        3
      ),
      A = new P(
        'home_tinyApartment',
        'Tiny Apartment',
        'Two rooms!',
        70,
        2000,
        120,
        4
      ),
      T = new P(
        'home_regularApartment',
        'Normal Apartment',
        'Just a normal apartment in an ordinary neighbourhood.',
        100,
        6000,
        150,
        5
      ),
      E = new P(
        'home_fancyApartment',
        'Fancy Apartment',
        'Look at that shower!',
        200,
        10000,
        180,
        6
      ),
      I = new P(
        'home_penthouse',
        'Penthouse',
        'On top of things.',
        400,
        20000,
        210,
        7
      ),
      D = new P('home_smallHouse', 'Small House', 'Five rooms!', 600, 25000, 240, 8),
      j = new P('home_house', 'House', 'A house.', 800, 40000, 270, 9),
      N = new P(
        'home_mansion',
        'Mansion',
        'Living like a king, except no style.',
        1000,
        50000,
        300,
        1000
      ),
      O = 0.6;
      t.homeToHappinessFun = function (e) {
        var t = k.minimalism.getValue() ? 5 : 0,
        a = Math.floor(w.currentYear.getValue() / (5 + t)),
        n = O * (0.5 + 0.25 * (e - a));
        return n = Math.max(n, 0),
        n = Math.min(n, O)
      },
      t.homes = [
        L,
        C,
        S,
        A,
        T,
        E,
        I,
        D,
        j,
        N
      ]
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.selectFoodOption = t.foodOptions = t.molecularCooking = t.yugleCampus = t.fastFood = t.studentCuisine = t.foodQualityStat = t.foodCostsPerDayStat = void 0;
      var i = a(10),
      r = n(i),
      s = a(2),
      o = n(s),
      u = a(4),
      l = n(u),
      c = a(6),
      d = n(c),
      f = a(8),
      v = n(f),
      h = a(5),
      p = n(h),
      m = a(1),
      y = n(m),
      _ = a(16),
      g = a(9),
      b = a(22),
      M = a(12),
      k = a(11),
      w = a(34),
      x = a(15),
      P = a(29),
      L = a(40),
      C = a(44),
      S = t.foodCostsPerDayStat = new _.Stat('foodCostsPerDayStat', 'Food costs/day', 0),
      A = t.foodQualityStat = new _.Stat('foodquality', 'Food Quality', 0, 2),
      T = function e(t) {
        (0, y.default) (this, e),
        this.selected = t,
        this.daysActive = 0
      },
      E = function (e) {
        function t(e, a, n, i, r) {
          var s = arguments.length > 5 &&
          void 0 !== arguments[5] &&
          arguments[5];
          (0, y.default) (this, t);
          var u = (0, d.default) (this, (t.__proto__ || (0, o.default) (t)).call(this, e, a, new T(s)));
          u.time = n,
          u.cost = i,
          u.quality = r;
          var l = new M.AddModifier(u.id + '_time', u.name, 1, u.time);
          (0, k.createSelectedLock) (u, l),
          b.eat.duration.addModifier(l);
          var c = new M.AddModifier(u.id + '_cost', u.name, 1, u.cost);
          (0, k.createSelectedLock) (u, c),
          S.addModifier(c);
          var f = new M.AddModifier(u.id + '_quality', u.name, 1, u.quality);
          return (0, k.createSelectedLock) (u, f),
          A.addModifier(f),
          u
        }
        return (0, p.default) (t, e),
        (0, l.default) (
          t,
          [
            {
              key: 'prestige',
              value: function () {
                'simplecooking' === this.id &&
                H(this),
                (0, v.default) (
                  t.prototype.__proto__ ||
                  (0, o.default) (t.prototype),
                  'prestige',
                  this
                ).call(this)
              }
            },
            {
              key: 'enoughFreeTime',
              value: function () {
                return b.freeTime.duration.effective >= this.time - V.time
              }
            },
            {
              key: 'enoughMoney',
              value: function () {
                return C.dailyNetIncomeStat.effective >= this.cost - V.cost
              }
            },
            {
              key: 'dayCounter',
              value: function () {
                this.state.selected &&
                (
                  'yuglecampus' === this.id &&
                  P.currentJobContainer.job.career !== L.yugle ? H(D) : this.state.daysActive += 1,
                  this.update()
                )
              }
            },
            {
              key: 'onLoad',
              value: function () {
                this.state.selected &&
                (V = this),
                (0, v.default) (
                  t.prototype.__proto__ ||
                  (0, o.default) (t.prototype),
                  'onLoad',
                  this
                ).call(this)
              }
            }
          ]
        ),
        t
      }(g.BasicEntity),
      I = t.studentCuisine = new E('simplecooking', 'Student Cuisine', 90, 20, 0.25, !0),
      D = t.fastFood = new E('fastfood', 'BunMasters', 60, 30, 0.25),
      j = new E('regularcooking', 'Regular Cooking', 120, 30, 0.9),
      N = t.yugleCampus = new E('yuglecampus', 'Yugle Campus', 60, 50, 1.25),
      O = new E('fancycooking', 'Fancy Cooking', 180, 70, 2),
      B = new E('personalChef', 'Personal Chef', 60, 700, 2),
      R = new E('threestarcook', 'Three Star Personal Chef', 60, 5000, 3),
      G = t.molecularCooking = new E('molecularCooking', 'Molecular Cooking Crew', 60, 50000, 4),
      V = I,
      z = t.foodOptions = [
        I,
        D,
        j,
        N,
        O,
        B,
        R,
        G
      ],
      H = t.selectFoodOption = function (e) {
        if (e === N && P.currentJobContainer.job.career !== L.yugle) return void w.messageBox.addMessage('Need to work at Yugle to eat on Yugle Campus!');
        var t = e.time - V.time,
        a = b.freeTime.duration.effective >= t;
        if (a) {
          var n = !0,
          i = !1,
          s = void 0;
          try {
            for (var o, u = (0, r.default) (z); !(n = (o = u.next()).done); n = !0) {
              var l = o.value;
              l.state.selected = !1
            }
          } catch (e) {
            i = !0,
            s = e
          } finally {
            try {
              !n &&
              u.return &&
              u.return()
            } finally {
              if (i) throw s
            }
          }
          e.state.selected = !0,
          V.update(),
          e.update(),
          b.eat.duration.update(),
          V = e
        } else w.messageBox.addMessage('Not enough free time! Need ' + (0, x.formatMinutes) (t) + '.')
      }
    },
    ,
    ,
    ,
    ,
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.battle = void 0;
      var i = a(10),
      r = n(i),
      s = a(2),
      o = n(s),
      u = a(4),
      l = n(u),
      c = a(6),
      d = n(c),
      f = a(8),
      v = n(f),
      h = a(5),
      p = n(h),
      m = a(1),
      y = n(m),
      _ = a(9),
      g = a(16),
      b = a(42),
      M = a(12),
      k = a(17),
      w = a(308),
      x = n(w),
      P = 200,
      L = (P - 10) / 365 / 42,
      C = function () {
        return {
          health: 5,
          maxHealth: 5,
          x: 0,
          y: P,
          dx: L,
          dy: 0,
          speed: L,
          earthDistance: P,
          flags: [
            !1,
            !1,
            !1,
            !1
          ]
        }
      },
      S = function (e, t, a) {
        var n = Math.sqrt(e * e + t * t);
        return 0 === n ? [
          0,
          0
        ] : [
          e / n * a,
          t / n * a
        ]
      },
      A = function (e, t, a, n) {
        return Math.sqrt(Math.pow(e - a, 2) + Math.pow(t - n, 2))
      },
      T = function e() {
        (0, y.default) (this, e),
        this.enemies = [
          C()
        ],
        this.enemyReachedSolarSystem = !1,
        this.scale = 400,
        this.alienTech = 0,
        this.enemiesDestroyed = 0,
        this.enemiesDestroyedTotal = 0,
        this.laserGunActive = !0,
        this.target = null,
        this.wave = - 1,
        this.waveTicks = 0,
        this.laserGunActive = !1,
        this.alienComm = []
      },
      E = function (e) {
        function t() {
          (0, y.default) (this, t);
          var e = (0, d.default) (
            this,
            (t.__proto__ || (0, o.default) (t)).call(this, 'battle', 'Battle', new T)
          );
          e.laserGunDamage = new g.Stat('laserGunDamage', 'Laser Gun Damage', 0.01, 2, '', '');
          var a = new M.LevelAddMultModifier('lg_dmg_mod', 'Laser Gun Research', 10, b.laserGun.xp, 0.1);
          return e.laserGunDamage.addModifier(a),
          e.earthX = 200,
          e.earthY = 200,
          e.earthImage = new Image,
          e.earthImage.src = x.default,
          e
        }
        return (0, p.default) (t, e),
        (0, l.default) (
          t,
          [
            {
              key: 'advanceShips',
              value: function () {
                if (this.state.enemyReachedSolarSystem) return void (this.state.target = null);
                var e = null,
                t = 999999,
                a = !0,
                n = !1,
                i = void 0;
                try {
                  for (
                    var s,
                    o = (0, r.default) (this.state.enemies);
                    !(a = (s = o.next()).done);
                    a = !0
                  ) {
                    var u = s.value;
                    u.x += u.dx,
                    u.y += u.dy;
                    var l = A(u.x, u.y, this.earthX, this.earthY);
                    u.earthDistance = l;
                    var c = l / u.speed;
                    c < t &&
                    u.earthDistance < P - 10 &&
                    (t = c, e = u),
                    l < 10 &&
                    (this.state.enemyReachedSolarSystem = !0)
                  }
                } catch (e) {
                  n = !0,
                  i = e
                } finally {
                  try {
                    !a &&
                    o.return &&
                    o.return()
                  } finally {
                    if (n) throw i
                  }
                }
                this.state.target = e
              }
            },
            {
              key: 'startWaves',
              value: function () {
                this.state.alienComm.unshift('EXHIBIT IS RESISTING'),
                this.state.wave = 0
              }
            },
            {
              key: 'startWave',
              value: function () {
                this.state.wave++;
                var e = this.state.wave;
                switch (this.state.waveTicks = 0, e) {
                  case 3:
                    this.state.alienComm.unshift('OVERWHELM');
                    break;
                  case 11:
                    this.state.alienComm.unshift('SEND HEAVY ARMOR');
                    break;
                  case 25:
                    this.state.alienComm.unshift('EXHIBIT UNUSUALLY STRONG. RECORD MISMATCH.');
                    break;
                  case 50:
                    this.state.alienComm.unshift('SEND IN HEADKEEPER 1');
                    break;
                  case 75:
                    this.state.alienComm.unshift('PLAYER - I THINK YOU FINISHED THIS GAME'),
                    this.state.alienComm.unshift('STAY TUNED FOR UPDATES'),
                    this.state.alienComm.unshift(
                      'IF YOU REALLY LIKE THE GAME, THERE IS A DEV BLOG ON PATREON'
                    ),
                    this.state.alienComm.unshift('https://www.patreon.com/mgronbach')
                }
                for (
                  var t = e % 7 === 0,
                  a = e % 11 === 0,
                  n = e % 3 === 0,
                  i = e % 50 === 0,
                  r = 5 * Math.pow(e, 1.04) * (a ? 2 : 1) * (i ? 20 : 1),
                  s = k.currentYear.getValue() < 42 ? L : 10 * L * (t ? 3 : 1) * (i ? 5 : 1),
                  o = i ? 1 : 8 * (n ? 2 : 1),
                  u = 0;
                  u < o;
                  u++
                ) {
                  var l = Math.random() - 0.5,
                  c = Math.random() - 0.5;
                  0 === l &&
                  0 === c &&
                  (l = 0.1);
                  var d = - l,
                  f = - c,
                  v = S(l, c, 1.5 * P),
                  h = v[0] + this.earthX,
                  p = v[1] + this.earthY,
                  m = S(d, f, s);
                  this.state.enemies.push({
                    maxHealth: r,
                    health: r,
                    x: h,
                    y: p,
                    dx: m[0],
                    dy: m[1],
                    speed: s,
                    earthDistance: 1.5 * P,
                    flags: [
                      t,
                      a,
                      n,
                      i
                    ]
                  })
                }
              }
            },
            {
              key: 'handleWaves',
              value: function () {
                var e = this.state.enemies.length > 100;
                this.state.waveTicks++,
                k.currentYear.getValue() < 42 ? 0 === this.state.enemies.length &&
                this.state.waveTicks > 180 &&
                this.startWave() : this.state.wave >= 0 &&
                !e &&
                this.state.waveTicks > 180 &&
                this.startWave()
              }
            },
            {
              key: 'attack',
              value: function () {
                var e = this.state.target;
                if (
                  this.state.laserGunActive &&
                  e &&
                  (e.health -= this.laserGunDamage.effective, e.health <= 0)
                ) {
                  var t = this.state.enemies.indexOf(e);
                  t > - 1 &&
                  this.state.enemies.splice(t, 1),
                  this.state.target = null,
                  this.state.enemiesDestroyed++,
                  this.state.enemiesDestroyedTotal++,
                  1 === this.state.enemiesDestroyed &&
                  this.startWaves()
                }
              }
            },
            {
              key: 'update',
              value: function () {
                this.attack(),
                this.advanceShips(),
                this.handleWaves(),
                (0, v.default) (
                  t.prototype.__proto__ ||
                  (0, o.default) (t.prototype),
                  'update',
                  this
                ).call(this)
              }
            },
            {
              key: 'prestige',
              value: function () {
                this.state.enemies = [
                  C()
                ],
                this.state.alienTech = 0,
                this.state.wave = - 1,
                this.state.waveTicks = 0,
                this.state.enemiesDestroyed = 0,
                this.state.enemyReachedSolarSystem = !1,
                this.state.target = null,
                this.state.laserGunActive = !1,
                this.state.alienComm = [],
                (0, v.default) (
                  t.prototype.__proto__ ||
                  (0, o.default) (t.prototype),
                  'prestige',
                  this
                ).call(this)
              }
            }
          ]
        ),
        t
      }(_.BasicEntity);
      t.battle = new E
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.createEvent = t.createUserChoiceNode = t.createAutoChoiceNode = t.createNode = t.createPath = void 0;
      var i = a(10),
      r = n(i),
      s = a(2),
      o = n(s),
      u = a(4),
      l = n(u),
      c = a(6),
      d = n(c),
      f = a(8),
      v = n(f),
      h = a(5),
      p = n(h),
      m = a(1),
      y = n(m),
      _ = a(9),
      g = a(17),
      b = a(28),
      M = a(11),
      k = function e() {
        (0, y.default) (this, e),
        this.executed = !1,
        this.executedOnDay = null,
        this.timesExecuted = 0
      },
      w = function e() {
        (0, y.default) (this, e),
        this.selected = !1,
        this.enabled = !0,
        this.countSelected = 0
      },
      x = function (e) {
        function t() {
          return (0, y.default) (this, t),
          (0, d.default) (this, (t.__proto__ || (0, o.default) (t)).apply(this, arguments))
        }
        return (0, p.default) (t, e),
        (0, l.default) (
          t,
          [
            {
              key: 'prestige',
              value: function () {
                this.state.selected = !1,
                this.state.enabled = !0
              }
            },
            {
              key: 'update',
              value: function () {
                (0, v.default) (
                  t.prototype.__proto__ ||
                  (0, o.default) (t.prototype),
                  'update',
                  this
                ).call(this)
              }
            }
          ]
        ),
        t
      }(_.BasicEntity),
      P = (
        t.createPath = function (e, t, a) {
          var n = new x(e, t, new w);
          return (0, M.createSelectedLock) (n, a),
          n
        },
        function (e) {
          function t() {
            return (0, y.default) (this, t),
            (0, d.default) (this, (t.__proto__ || (0, o.default) (t)).apply(this, arguments))
          }
          return (0, p.default) (t, e),
          (0, l.default) (
            t,
            [
              {
                key: 'prestige',
                value: function () {
                  this.state.executed = !1,
                  this.state.executedOnDay = null
                }
              },
              {
                key: 'executeAction',
                value: function () {
                  !this.state.executed &&
                  g.currentDay.getValue() > 10 &&
                  (
                    this.state.executed = !0,
                    this.state.executedOnDay = g.currentDay.getValue(),
                    this.state.timesExecuted += 1,
                    this.action()
                  )
                }
              },
              {
                key: 'update',
                value: function () {
                  var e = this.unlocked();
                  (0, v.default) (
                    t.prototype.__proto__ ||
                    (0, o.default) (t.prototype),
                    'update',
                    this
                  ).call(this);
                  var a = this.unlocked();
                  a &&
                  !this.executed &&
                  this.executeAction(),
                  !e &&
                  a &&
                  (b.eventPane.notify(), this.event.state.expanded = !0)
                }
              }
            ]
          ),
          t
        }(_.BasicEntity)
      ),
      L = (
        t.createNode = function (e, t, a) {
          var n = arguments.length > 3 &&
          void 0 !== arguments[3] ? arguments[3] : function (e) {
            return e
          },
          i = new P(e, t, new k);
          return a &&
          (0, M.createUnlockedLock) (i, a),
          i.action = n,
          i
        },
        function (e) {
          function t(e, a, n, i) {
            (0, y.default) (this, t);
            var r = (0, d.default) (this, (t.__proto__ || (0, o.default) (t)).call(this, e, a, new k));
            return r.choiceFun = n,
            r.choices = i,
            r.state.choiceMade = - 1,
            r
          }
          return (0, p.default) (t, e),
          (0, l.default) (
            t,
            [
              {
                key: 'executeAction',
                value: function () {
                  this.state.executed ||
                  (
                    this.state.choiceMade = this.choiceFun(),
                    this.state.executed = !0,
                    this.state.executedOnDay = g.currentDay.getValue(),
                    this.state.timesExecuted += 1,
                    this.action(),
                    this.update()
                  )
                }
              },
              {
                key: 'prestige',
                value: function () {
                  this.state.choiceMade = - 1,
                  (0, v.default) (
                    t.prototype.__proto__ ||
                    (0, o.default) (t.prototype),
                    'prestige',
                    this
                  ).call(this)
                }
              }
            ]
          ),
          t
        }(P)
      ),
      C = (
        t.createAutoChoiceNode = function (e, t, a, n) {
          var i = arguments.length > 4 &&
          void 0 !== arguments[4] ? arguments[4] : function (e) {
            return e
          },
          r = new L(e, t, a, n);
          r.action = i;
          for (
            var s = function (e) {
              (0, M.createCustomLock) ([r], n[e], function () {
                return r.state.choiceMade === e
              })
            },
            o = 0;
            o < n.length;
            o++
          ) s(o);
          return r
        },
        function (e) {
          function t(e, a, n) {
            (0, y.default) (this, t);
            var i = (0, d.default) (this, (t.__proto__ || (0, o.default) (t)).call(this, e, a, new k));
            return i.paths = n,
            i
          }
          return (0, p.default) (t, e),
          (0, l.default) (
            t,
            [
              {
                key: 'selectPath',
                value: function (e) {
                  if (e.state.enabled) {
                    var t = !0,
                    a = !1,
                    n = void 0;
                    try {
                      for (var i, s = (0, r.default) (this.paths); !(t = (i = s.next()).done); t = !0) {
                        var o = i.value;
                        o.state.enabled = !1
                      }
                    } catch (e) {
                      a = !0,
                      n = e
                    } finally {
                      try {
                        !t &&
                        s.return &&
                        s.return()
                      } finally {
                        if (a) throw n
                      }
                    }
                    e.state.countSelected++,
                    e.state.selected = !0,
                    e.update()
                  }
                  this.update()
                }
              }
            ]
          ),
          t
        }(P)
      ),
      S = (
        t.createUserChoiceNode = function (e, t, a) {
          var n = arguments.length > 3 &&
          void 0 !== arguments[3] ? arguments[3] : function (e) {
            return e
          },
          i = new C(e, t, a);
          return i.action = n,
          i
        },
        function e() {
          (0, y.default) (this, e),
          this.completed = !1,
          this.expanded = !0
        }
      ),
      A = function (e) {
        function t(e, a, n) {
          (0, y.default) (this, t);
          var i = (0, d.default) (this, (t.__proto__ || (0, o.default) (t)).call(this, e, a, new S));
          return i.nodes = n,
          i
        }
        return (0, p.default) (t, e),
        t
      }(_.BasicEntity);
      t.createEvent = function (e, t, a) {
        var n = new A(e, t, a),
        i = !0,
        s = !1,
        o = void 0;
        try {
          for (var u, l = (0, r.default) (a); !(i = (u = l.next()).done); i = !0) {
            var c = u.value;
            c.event = n
          }
        } catch (e) {
          s = !0,
          o = e
        } finally {
          try {
            !i &&
            l.return &&
            l.return()
          } finally {
            if (s) throw o
          }
        }
        return (0, M.createUnlockedLock) (n, a[0]),
        n
      }
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.darkMatterTicks = t.lastSave = t.bonusTicks = t.turbo = t.paused = void 0;
      var n = a(21);
      t.paused = new n.BooleanStateEntity('state_paused', 'Pause', !1),
      t.turbo = new n.BooleanStateEntity('state_turbo', 'Turbo', !1),
      t.bonusTicks = new n.NumberStateEntity('state_bonus_ticks', 'Bonus Ticks', 0, !1, 0),
      t.lastSave = new n.NumberStateEntity('state_last_save', 'Last Save', - 1, !1),
      t.darkMatterTicks = new n.NumberStateEntity('state_dmticks', 'Dark Matter Rituals', 0, !1, 0)
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.programming = t.programming5 = t.programming4 = t.programming3 = t.programming2 = t.programming1 = void 0;
      var i = a(10),
      r = n(i),
      s = a(11),
      o = a(41),
      u = a(25),
      l = a(12),
      c = a(40),
      d = t.programming1 = new o.Book(
        'programming1',
        'Head First Java',
        'On your way to that Yugle internship.',
        150,
        '0596009208'
      ),
      f = t.programming2 = new o.Book(
        'programming2',
        'Python Crash Course',
        'No more boilerplate. Or types.',
        150,
        '1593276036'
      ),
      v = t.programming3 = new o.Book(
        'programming3',
        'The C Programming Language',
        'The devil lies in the SEGMENTATION FAULT',
        200,
        '0131103628'
      ),
      h = t.programming4 = new o.Book(
        'programming4',
        'C++ Primer',
        'C++ - more twists than Game of Thrones.',
        300,
        '0321714113'
      ),
      p = t.programming5 = new o.Book(
        'programming5',
        'SICP',
        'Let\'s dive in a little deeper.',
        400,
        '0262510871'
      );
      (0, s.createCompletedOrReadingListLock) (d, f),
      (0, s.createCompletedOrReadingListLock) (f, v),
      (0, s.createCompletedOrReadingListLock) (v, h),
      (0, s.createCompletedOrReadingListLock) (h, p);
      var m = t.programming = new u.Area('area_programming', 'Programming', [
        d,
        f,
        v,
        h,
        p
      ]),
      y = new l.LevelAddMultModifier(
        'programming_research_level_mod',
        'Research: Programming',
        2,
        m.xp,
        0.01
      ),
      _ = !0,
      g = !1,
      b = void 0;
      try {
        for (
          var M,
          k = (0, r.default) (c.yugle.jobs);
          !(_ = (M = k.next()).done);
          _ = !0
        ) {
          var w = M.value;
          w.income.addModifier(y)
        }
      } catch (e) {
        g = !0,
        b = e
      } finally {
        try {
          !_ &&
          k.return &&
          k.return()
        } finally {
          if (g) throw b
        }
      }
      m.effect = '+1% Yugle Pay',
      (0, s.createLevelLock) (m, c.unpaidIntern, 10),
      (0, s.createLevelLock) (m, c.juniorDeveloper, 20)
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.currentResearchContainer = void 0;
      var i = a(2),
      r = n(i),
      s = a(1),
      o = n(s),
      u = a(4),
      l = n(u),
      c = a(6),
      d = n(c),
      f = a(8),
      v = n(f),
      h = a(5),
      p = n(h),
      m = a(9),
      y = a(63),
      _ = function (e) {
        function t() {
          (0, o.default) (this, t);
          var e = (0, d.default) (
            this,
            (t.__proto__ || (0, r.default) (t)).call(
              this,
              'currentResearchContainer',
              'Current Research Container',
              {
              }
            )
          );
          return e.area = null,
          e
        }
        return (0, p.default) (t, e),
        (0, l.default) (
          t,
          [
            {
              key: 'prestige',
              value: function () {
                this.area = null
              }
            },
            {
              key: 'setCurrentResearch',
              value: function (e) {
                e !== this.area &&
                (
                  this.area &&
                  this.area.deactivate(),
                  this.area = e,
                  y.log.info(
                    'Researching ' + this.area.name,
                    this.name,
                    y.log.RESEARCH_SELECTED
                  ),
                  this.area.activate(),
                  (0, v.default) (
                    t.prototype.__proto__ ||
                    (0, r.default) (t.prototype),
                    'update',
                    this
                  ).call(this)
                )
              }
            }
          ]
        ),
        t
      }(m.BasicEntity);
      t.currentResearchContainer = new _
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.Field = void 0;
      var i = a(2),
      r = n(i),
      s = a(4),
      o = n(s),
      u = a(6),
      l = n(u),
      c = a(8),
      d = n(c),
      f = a(5),
      v = n(f),
      h = a(1),
      p = n(h),
      m = a(9),
      y = a(28),
      _ = function e() {
        (0, p.default) (this, e)
      };
      t.Field = function (e) {
        function t(e, a, n) {
          (0, p.default) (this, t);
          var i = (0, l.default) (this, (t.__proto__ || (0, r.default) (t)).call(this, e, a, new _));
          return i.areas = n,
          i.logUnlock = !0,
          i
        }
        return (0, v.default) (t, e),
        (0, o.default) (
          t,
          [
            {
              key: 'update',
              value: function () {
                var e = this.wasLocked;
                (0, d.default) (
                  t.prototype.__proto__ ||
                  (0, r.default) (t.prototype),
                  'update',
                  this
                ).call(this),
                e &&
                !this.wasLocked &&
                y.researchPane.notify()
              }
            },
            {
              key: 'prestige',
              value: function () {
              }
            }
          ]
        ),
        t
      }(m.BasicEntity)
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.log = void 0;
      var i = a(2),
      r = n(i),
      s = a(4),
      o = n(s),
      u = a(6),
      l = n(u),
      c = a(5),
      d = n(c),
      f = a(1),
      v = n(f),
      h = a(9),
      p = a(17),
      m = a(39),
      y = function e() {
        (0, v.default) (this, e),
        this.entries = []
      },
      _ = function e(t, a, n, i) {
        (0, v.default) (this, e),
        this.level = t,
        this.message = a,
        this.reporter = n,
        this.eventCode = i,
        this.timestamp = p.currentDay.getValue(),
        this.timestampAge = [
          18 + p.currentDay.getYear(),
          p.currentDay.getDayOfYear()
        ],
        this.life = m.currentLife.getValue()
      },
      g = function (e) {
        function t() {
          (0, v.default) (this, t);
          var e = (0, l.default) (
            this,
            (t.__proto__ || (0, r.default) (t)).call(this, 'logger', 'Logger', new y)
          );
          return e.OTHER = 0,
          e.STORY = 1,
          e.JOBSELECTED = 10,
          e.BOOK_COMPLETED = 11,
          e.RESEARCH_SELECTED = 12,
          e.HOME_SELECTED = 13,
          e.LVL_INFO = 5,
          e.UNLOCK = 14,
          e
        }
        return (0, d.default) (t, e),
        (0, o.default) (
          t,
          [
            {
              key: 'info',
              value: function (e, t) {
                var a = arguments.length > 2 &&
                void 0 !== arguments[2] ? arguments[2] : 0;
                this._log(this.LVL_INFO, e, t, a)
              }
            },
            {
              key: '_log',
              value: function (e, t, a, n) {
                var i = new _(e, t, a, n);
                for (this.state.entries.unshift(i); this.state.entries.length > 100; ) this.state.entries.pop()
              }
            }
          ]
        ),
        t
      }(h.BasicEntity);
      t.log = new g
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.prestiger = void 0;
      var i = a(10),
      r = n(i),
      s = a(1),
      o = n(s),
      u = a(4),
      l = n(u),
      c = function () {
        function e() {
          (0, o.default) (this, e),
          this.registeredObjects = []
        }
        return (0, l.default) (
          e,
          [
            {
              key: 'register',
              value: function (e) {
                this.registeredObjects.push(e)
              }
            },
            {
              key: 'prestige',
              value: function () {
                var e = !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0],
                t = !0,
                a = !1,
                n = void 0;
                try {
                  for (
                    var i,
                    s = (0, r.default) (this.registeredObjects);
                    !(t = (i = s.next()).done);
                    t = !0
                  ) {
                    var o = i.value;
                    o.prestige(e)
                  }
                } catch (e) {
                  a = !0,
                  n = e
                } finally {
                  try {
                    !t &&
                    s.return &&
                    s.return()
                  } finally {
                    if (a) throw n
                  }
                }
                var u = !0,
                l = !1,
                c = void 0;
                try {
                  for (
                    var d,
                    f = (0, r.default) (this.registeredObjects);
                    !(u = (d = f.next()).done);
                    u = !0
                  ) {
                    var v = d.value;
                    v.update()
                  }
                } catch (e) {
                  l = !0,
                  c = e
                } finally {
                  try {
                    !u &&
                    f.return &&
                    f.return()
                  } finally {
                    if (l) throw c
                  }
                }
                if (e) {
                  var h = !0,
                  p = !1,
                  m = void 0;
                  try {
                    for (
                      var y,
                      _ = (0, r.default) (this.registeredObjects);
                      !(h = (y = _.next()).done);
                      h = !0
                    ) {
                      var g = y.value;
                      g.postPrestigeAssert()
                    }
                  } catch (e) {
                    p = !0,
                    m = e
                  } finally {
                    try {
                      !h &&
                      _.return &&
                      _.return()
                    } finally {
                      if (p) throw m
                    }
                  }
                }
              }
            },
            {
              key: 'grandPrestige',
              value: function () {
                var e = !0,
                t = !1,
                a = void 0;
                try {
                  for (
                    var n,
                    i = (0, r.default) (this.registeredObjects);
                    !(e = (n = i.next()).done);
                    e = !0
                  ) {
                    var s = n.value;
                    s.grandPrestige()
                  }
                } catch (e) {
                  t = !0,
                  a = e
                } finally {
                  try {
                    !e &&
                    i.return &&
                    i.return()
                  } finally {
                    if (t) throw a
                  }
                }
                var o = !0,
                u = !1,
                l = void 0;
                try {
                  for (
                    var c,
                    d = (0, r.default) (this.registeredObjects);
                    !(o = (c = d.next()).done);
                    o = !0
                  ) {
                    var f = c.value;
                    f.update()
                  }
                } catch (e) {
                  u = !0,
                  l = e
                } finally {
                  try {
                    !o &&
                    d.return &&
                    d.return()
                  } finally {
                    if (u) throw l
                  }
                }
                var v = !0,
                h = !1,
                p = void 0;
                try {
                  for (
                    var m,
                    y = (0, r.default) (this.registeredObjects);
                    !(v = (m = y.next()).done);
                    v = !0
                  ) {
                    var _ = m.value;
                    _.postPrestigeAssert()
                  }
                } catch (e) {
                  h = !0,
                  p = e
                } finally {
                  try {
                    !v &&
                    y.return &&
                    y.return()
                  } finally {
                    if (h) throw p
                  }
                }
              }
            }
          ]
        ),
        e
      }();
      t.prestiger = new c
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.saver = void 0;
      var i = a(209),
      r = n(i),
      s = a(208),
      o = n(s),
      u = a(1),
      l = n(u),
      c = a(4),
      d = n(c),
      f = a(10),
      v = n(f),
      h = a(2),
      p = n(h),
      m = a(64),
      y = a(20),
      _ = a(302),
      g = n(_),
      b = function (e) {
        return '"' + e.name + '-' + e.constructor.name + '"'
      },
      M = function (e) {
        for (var t = [
          b(e)
        ], a = e.constructor.name; 'BasicEntity' !== a; ) e = (0, p.default) (e),
        a = e.constructor.name,
        t.push(a);
        return t
      },
      k = 'digraph {\n',
      w = function e(t, a) {
        k += 0 === t.size ? a + ';\n' : 'subgraph cluster_' + a + '{\nlabel="' + a + '!";\n';
        var n = !0,
        i = !1,
        r = void 0;
        try {
          for (var s, o = (0, v.default) (t); !(n = (s = o.next()).done); n = !0) {
            var u = s.value;
            e(u[1], u[0])
          }
        } catch (e) {
          i = !0,
          r = e
        } finally {
          try {
            !n &&
            o.return &&
            o.return()
          } finally {
            if (i) throw r
          }
        }
        t.size > 0 &&
        (k += '}\n')
      },
      x = function () {
        function e() {
          (0, l.default) (this, e),
          this.registeredObjects = {},
          this.running = !0,
          this.saveString = '',
          this.itemName = 'groundhog_life_save',
          this.saveRequested = !1
        }
        return (0, d.default) (
          e,
          [
            {
              key: 'requestSave',
              value: function () {
                this.saveRequested = !0
              }
            },
            {
              key: 'stop',
              value: function () {
                this.running = !1
              }
            },
            {
              key: 'register',
              value: function (e) {
                (0, y.assert) (
                  !this.registeredObjects.hasOwnProperty(e.id) ||
                  this.registeredObjects[e.id] === e,
                  e.id
                ),
                this.registeredObjects[e.id] = e,
                m.prestiger.register(e)
              }
            },
            {
              key: 'import',
              value: function (e) {
                this.loadFromString(e)
              }
            },
            {
              key: 'save',
              value: function () {
                if (this.running) {
                  var e = {};
                  for (var t in this.registeredObjects) e[t] = this.registeredObjects[t].state;
                  e.version = '0.6.0',
                  this.saveString = g.default.compressToEncodedURIComponent((0, o.default) (e)),
                  window.localStorage.setItem(this.itemName, this.saveString),
                  this.saveRequested = !1
                }
              }
            },
            {
              key: 'merge',
              value: function (e, t) {
                for (var a in t) e.state[a] = t[a]
              }
            },
            {
              key: 'hardReset',
              value: function () {
                window.localStorage.removeItem(this.itemName)
              }
            },
            {
              key: 'loadFromString',
              value: function (e) {
                try {
                  if (e) {
                    e = e.replace(/(\r\n|\n|\r)/gm, ''),
                    this.saveString = e;
                    var t = '';
                    try {
                      t = JSON.parse(g.default.decompressFromEncodedURIComponent(e))
                    } catch (t) {
                      console.log(t),
                      window.alert(t.message),
                      window.localStorage.setItem('backup_save', e)
                    }
                    for (var a in this.registeredObjects) t.hasOwnProperty(a) &&
                    this.merge(this.registeredObjects[a], t[a]);
                    for (var n in this.registeredObjects) this.registeredObjects[n].onLoad()
                  }
                  for (var i in this.registeredObjects) this.registeredObjects[i].update();
                  for (var r in this.registeredObjects) this.registeredObjects[r].postLoadAssert()
                } catch (t) {
                  window.alert(t.message),
                  window.localStorage.setItem('backup_save', e)
                }
              }
            },
            {
              key: 'load',
              value: function () {
                var e = window.localStorage.getItem(this.itemName);
                this.loadFromString(e)
              }
            },
            {
              key: 'dependencyGraph',
              value: function () {
                var e = [];
                for (var t in this.registeredObjects) e.push(this.registeredObjects[t]);
                var a = new r.default,
                n = !0,
                i = !1,
                s = void 0;
                try {
                  for (var o, u = (0, v.default) (e); !(n = (o = u.next()).done); n = !0) {
                    var l = o.value,
                    c = M(l).reverse(),
                    d = a,
                    f = !0,
                    h = !1,
                    p = void 0;
                    try {
                      for (var m, y = (0, v.default) (c); !(f = (m = y.next()).done); f = !0) {
                        var _ = m.value;
                        d.has(_) ||
                        d.set(_, new r.default),
                        d = d.get(_)
                      }
                    } catch (e) {
                      h = !0,
                      p = e
                    } finally {
                      try {
                        !f &&
                        y.return &&
                        y.return()
                      } finally {
                        if (h) throw p
                      }
                    }
                  }
                } catch (e) {
                  i = !0,
                  s = e
                } finally {
                  try {
                    !n &&
                    u.return &&
                    u.return()
                  } finally {
                    if (i) throw s
                  }
                }
                var g = new r.default,
                x = !0,
                P = !1,
                L = void 0;
                try {
                  for (var C, S = (0, v.default) (e); !(x = (C = S.next()).done); x = !0) {
                    var A = C.value;
                    g.has(A.constructor.name) ||
                    g.set(A.constructor.name, []),
                    g.get(A.constructor.name).push(A)
                  }
                } catch (e) {
                  P = !0,
                  L = e
                } finally {
                  try {
                    !x &&
                    S.return &&
                    S.return()
                  } finally {
                    if (P) throw L
                  }
                }
                w(a, 'All');
                var T = !0,
                E = !1,
                I = void 0;
                try {
                  for (var D, j = (0, v.default) (e); !(T = (D = j.next()).done); T = !0) {
                    var N = D.value,
                    O = !0,
                    B = !1,
                    R = void 0;
                    try {
                      for (
                        var G,
                        V = (0, v.default) (N.dependants);
                        !(O = (G = V.next()).done);
                        O = !0
                      ) {
                        var z = G.value;
                        k += b(N) + ' -> ' + b(z) + '\n'
                      }
                    } catch (e) {
                      B = !0,
                      R = e
                    } finally {
                      try {
                        !O &&
                        V.return &&
                        V.return()
                      } finally {
                        if (B) throw R
                      }
                    }
                  }
                } catch (e) {
                  E = !0,
                  I = e
                } finally {
                  try {
                    !T &&
                    j.return &&
                    j.return()
                  } finally {
                    if (E) throw I
                  }
                }
                k += '}',
                console.log(k)
              }
            }
          ]
        ),
        e
      }();
      t.saver = new x
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.happinessStat = void 0;
      var i = a(10),
      r = n(i),
      s = a(2),
      o = n(s),
      u = a(1),
      l = n(u),
      c = a(4),
      d = n(c),
      f = a(6),
      v = n(f),
      h = a(8),
      p = n(h),
      m = a(5),
      y = n(m),
      _ = a(16),
      g = function (e) {
        function t() {
          (0, l.default) (this, t);
          var e = (0, v.default) (
            this,
            (t.__proto__ || (0, o.default) (t)).call(this, 'happiness', 'Happiness', 0, 2, '', '', !0, !1, 0, 2)
          );
          return e.selectedModifier = null,
          e
        }
        return (0, y.default) (t, e),
        (0, d.default) (
          t,
          [
            {
              key: 'emojiName',
              value: function () {
                return this.effective > 1.2 ? 'happy' : this.effective < 0.8 ? 'sad' : 'neutral'
              }
            },
            {
              key: 'getExplanation',
              value: function () {
                var e = !0,
                t = !1,
                a = void 0;
                try {
                  for (
                    var n,
                    i = (0, r.default) (this.modifiers);
                    !(e = (n = i.next()).done);
                    e = !0
                  ) {
                    var s = n.value,
                    o = s.explain();
                    if ('' !== o) return o
                  }
                } catch (e) {
                  t = !0,
                  a = e
                } finally {
                  try {
                    !e &&
                    i.return &&
                    i.return()
                  } finally {
                    if (t) throw a
                  }
                }
                return 'Everything is so-so.'
              }
            },
            {
              key: 'update',
              value: function () {
                (0, p.default) (
                  t.prototype.__proto__ ||
                  (0, o.default) (t.prototype),
                  'update',
                  this
                ).call(this),
                this.effective > 40 &&
                console.log(this)
              }
            },
            {
              key: 'onLoad',
              value: function () {
                this.state.highestEffectiveEver = Math.min(this.state.highestEffectiveEver, 2)
              }
            }
          ]
        ),
        t
      }(_.Stat);
      t.happinessStat = new g
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.loopTrap = void 0;
      var i = a(2),
      r = n(i),
      s = a(6),
      o = n(s),
      u = a(5),
      l = n(u),
      c = a(1),
      d = n(c),
      f = a(9),
      v = a(16),
      h = function e() {
        (0, d.default) (this, e)
      },
      p = function (e) {
        function t() {
          (0, d.default) (this, t);
          var e = (0, o.default) (
            this,
            (t.__proto__ || (0, r.default) (t)).call(this, 'looptrap', 'Loop Trap', new h)
          );
          return e.efficiency = new v.Stat('lt_efficiency', 'Efficiency', 0, 4),
          e
        }
        return (0, l.default) (t, e),
        t
      }(f.BasicEntity);
      t.loopTrap = new p
    },
    function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      t.DEVMODE = !1
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.selectHome = t.changeActivityTime = t.setActiveResearch = t.setActiveJob = t.findActiveJob = void 0;
      var i = a(10),
      r = n(i),
      s = a(29),
      o = a(61),
      u = a(50);
      t.findActiveJob = function (e) {
        var t = !0,
        a = !1,
        n = void 0;
        try {
          for (var i, s = (0, r.default) (e.careers); !(t = (i = s.next()).done); t = !0) {
            var o = i.value,
            u = !0,
            l = !1,
            c = void 0;
            try {
              for (var d, f = (0, r.default) (o.jobs); !(u = (d = f.next()).done); u = !0) {
                var v = d.value;
                if (v.state.active) return v
              }
            } catch (e) {
              l = !0,
              c = e
            } finally {
              try {
                !u &&
                f.return &&
                f.return()
              } finally {
                if (l) throw c
              }
            }
          }
        } catch (e) {
          a = !0,
          n = e
        } finally {
          try {
            !t &&
            s.return &&
            s.return()
          } finally {
            if (a) throw n
          }
        }
      },
      t.setActiveJob = function (e) {
        s.currentJobContainer.setCurrentJob(e)
      },
      t.setActiveResearch = function (e) {
        o.currentResearchContainer.setCurrentResearch(e)
      },
      t.changeActivityTime = function (e, t, a) {
        e.schedule.changeActivityTime(t, a)
      },
      t.selectHome = function (e) {
        u.currentHomeContainer.setCurrent(e)
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.Career = t.SecretProject = void 0;
      var i = a(10),
      r = n(i),
      s = a(8),
      o = n(s),
      u = a(2),
      l = n(u),
      c = a(4),
      d = n(c),
      f = a(6),
      v = n(f),
      h = a(5),
      p = n(h),
      m = a(1),
      y = n(m),
      _ = a(9),
      g = function e() {
        (0, y.default) (this, e),
        this.level = 0,
        this.xp = 0
      },
      b = (
        t.SecretProject = function (e) {
          function t(e, a, n, i) {
            (0, y.default) (this, t);
            var r = (0, v.default) (this, (t.__proto__ || (0, l.default) (t)).call(this, e, a, new g));
            return r.linearFactor = n,
            r.expFactor = i,
            r
          }
          return (0, p.default) (t, e),
          (0, d.default) (
            t,
            [
              {
                key: 'toNextLevel',
                value: function () {
                  return (this.state.level + 1) * this.linearFactor * Math.pow(this.expFactor, this.state.level)
                }
              },
              {
                key: 'advance',
                value: function (e) {
                  this.state.xp += e,
                  this.state.xp > this.toNextLevel &&
                  (this.state.level += 1, this.state.xp = 0)
                }
              }
            ]
          ),
          t
        }(_.BasicEntity),
        function e() {
          (0, y.default) (this, e)
        }
      );
      t.Career = function (e) {
        function t(e, a, n, i) {
          (0, y.default) (this, t);
          var s = (0, v.default) (this, (t.__proto__ || (0, l.default) (t)).call(this, e, a, new b));
          s.jobs = n;
          var o = !0,
          u = !1,
          c = void 0;
          try {
            for (var d, f = (0, r.default) (n); !(o = (d = f.next()).done); o = !0) {
              var h = d.value;
              h.career = s,
              h.dependants.push(s)
            }
          } catch (e) {
            u = !0,
            c = e
          } finally {
            try {
              !o &&
              f.return &&
              f.return()
            } finally {
              if (u) throw c
            }
          }
          return s.secretProject = i,
          s
        }
        return (0, p.default) (t, e),
        (0, d.default) (
          t,
          [
            {
              key: 'prestige',
              value: function () {
              }
            },
            {
              key: 'update',
              value: function () {
                (0, o.default) (
                  t.prototype.__proto__ ||
                  (0, l.default) (t.prototype),
                  'update',
                  this
                ).call(this)
              }
            },
            {
              key: 'advanceSecretProject',
              value: function () {
                this.secretProject
              }
            }
          ]
        ),
        t
      }(_.BasicEntity)
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      function i(e, t, a, n) {
        var i = (0, k.exponentialProgression) (e.length, n);
        i = i.map(function (e) {
          return e * a / i.slice( - 1) [0]
        }),
        i = i.map(function (e) {
          return e + (t - i[0])
        }),
        i[i.length - 1] = a;
        for (var r = 0; r < e.length; r++) e[r].income.setBase(i[r])
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.JobState = t.Job = void 0;
      var r = a(2),
      s = n(r),
      o = a(1),
      u = n(o),
      l = a(4),
      c = n(l),
      d = a(6),
      f = n(d),
      v = a(8),
      h = n(v),
      p = a(5),
      m = n(p);
      t.configurePayProgression = i;
      var y = a(162),
      _ = a(9),
      g = a(29),
      b = a(48),
      M = a(30),
      k = a(149),
      w = a(28),
      x = (
        t.Job = function (e) {
          function t(e, a) {
            var n = arguments.length > 2 &&
            void 0 !== arguments[2] ? arguments[2] : 10,
            i = arguments.length > 3 &&
            void 0 !== arguments[3] &&
            arguments[3];
            (0, u.default) (this, t);
            var r = new x;
            r.active = i;
            var o = (0, f.default) (this, (t.__proto__ || (0, s.default) (t)).call(this, e, a, r)),
            l = (0, M.createWorkXpPerHourStat) (o.id + '_xp_per_hour');
            return o.xp = new b.XPModule(o.id + 'experience', o.name + ' experience', l),
            o.income = new y.IncomePerWorkHourStat(o, n),
            o.logUnlock = !0,
            o.update(),
            o
          }
          return (0, m.default) (t, e),
          (0, c.default) (
            t,
            [
              {
                key: 'setBasePay',
                value: function (e) {
                  this.income.setBase(e),
                  this.update()
                }
              },
              {
                key: 'update',
                value: function () {
                  var e = this.unlocked();
                  this.state.active &&
                  g.currentJobContainer.update(),
                  (0, h.default) (
                    t.prototype.__proto__ ||
                    (0, s.default) (t.prototype),
                    'update',
                    this
                  ).call(this);
                  var a = this.unlocked();
                  !e &&
                  a &&
                  w.jobPane.notify()
                }
              },
              {
                key: 'activate',
                value: function () {
                  this.state.active = !0,
                  g.currentJobContainer.setCurrentJob(this),
                  this.update()
                }
              },
              {
                key: 'deactivate',
                value: function () {
                  this.state.active = !1,
                  this.update()
                }
              },
              {
                key: 'nextLevelAtExp',
                value: function (e) {
                  return 1
                }
              },
              {
                key: 'prestige',
                value: function () {
                }
              },
              {
                key: 'postPrestigeAssert',
                value: function () {
                }
              }
            ]
          ),
          t
        }(_.BasicEntity),
        t.JobState = function e() {
          (0, u.default) (this, e),
          this.active = !1
        }
      )
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.areas = t.fields = void 0;
      var i,
      r = a(81),
      s = n(r),
      o = a(155),
      u = a(153),
      l = a(112),
      c = a(42),
      d = t.fields = [
        o.selfImprovement,
        u.business,
        l.compsci,
        c.physics
      ];
      t.areas = (i = []).concat.apply(i, (0, s.default) (d.map(function (e) {
        return e.areas
      })))
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.healthStat = void 0;
      var i = a(2),
      r = n(i),
      s = a(1),
      o = n(s),
      u = a(4),
      l = n(u),
      c = a(6),
      d = n(c),
      f = a(8),
      v = n(f),
      h = a(5),
      p = n(h),
      m = a(16),
      y = function (e) {
        function t() {
          (0, o.default) (this, t);
          var e = (0, d.default) (
            this,
            (t.__proto__ || (0, r.default) (t)).call(this, 'health', 'Health', 0, 2, '', '', !0, !1, 0)
          );
          return e.selectedModifier = null,
          e
        }
        return (0, p.default) (t, e),
        (0, l.default) (
          t,
          [
            {
              key: 'emojiName',
              value: function () {
                return this.effective > 1.2 ? 'healthy' : this.effective < 0.8 ? 'sick' : 'moderately_healthy'
              }
            },
            {
              key: 'update',
              value: function () {
                (0, v.default) (
                  t.prototype.__proto__ ||
                  (0, r.default) (t.prototype),
                  'update',
                  this
                ).call(this)
              }
            }
          ]
        ),
        t
      }(m.Stat);
      t.healthStat = new y
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.achievements = void 0;
      var n = a(142),
      i = a(39),
      r = a(107),
      s = a(40),
      o = a(111),
      u = a(60),
      l = a(113),
      c = a(109),
      d = a(66),
      f = a(38),
      v = a(52),
      h = a(22),
      p = a(57),
      m = a(102),
      y = a(49),
      _ = a(42),
      g = t.achievements = [],
      b = new n.Achievement(
        'achievement_edge_of_retirement',
        'Edge of Retirement',
        'Start over once',
        function () {
          return i.currentLife.getValue() - 1
        },
        1
      );
      i.currentLife.subscribe(b);
      var M = new n.Achievement(
        'achievement_samsara',
        'Samsara',
        'Start over ten times',
        function () {
          return i.currentLife.getValue() - 1
        },
        10
      );
      i.currentLife.subscribe(M);
      var k = new n.Achievement(
        'achievement_sideways8',
        'Sideways 8',
        'Start over fifty times',
        function () {
          return i.currentLife.getValue() - 1
        },
        50
      );
      i.currentLife.subscribe(k);
      var w = new n.Achievement(
        'ach_loop1',
        'Loop while you loop',
        'Use Loop Trap device once',
        function () {
          return i.currentLoop.getValue() - 1
        },
        1
      );
      i.currentLoop.subscribe(w);
      var x = new n.Achievement(
        'ach_loop2',
        'Quantum Samsara',
        'Use Loop Trap device ten times',
        function () {
          return i.currentLoop.getValue() - 1
        },
        10
      );
      i.currentLoop.subscribe(w);
      var P = new n.Achievement(
        'ach_loop3',
        'Loops all the way down!',
        'Use Loop Trap device twenty times',
        function () {
          return i.currentLoop.getValue() - 1
        },
        20
      );
      i.currentLoop.subscribe(w);
      var L = new n.AG('ag_circle_of_life', 'Circle of Life', [
        b,
        M,
        k,
        w,
        x,
        P
      ]);
      g.push(L);
      var C = new n.Achievement(
        'ach_envy',
        'Envy',
        'Keep Mrs Pennywise\' wallet',
        function () {
          return m.keep.state.countSelected
        },
        1
      );
      m.keep.subscribe(C);
      var S = new n.Achievement(
        'ach_gluttony',
        'Gluttony',
        'Hire Molecular Cooking Crew for a year',
        function () {
          return v.molecularCooking.state.daysActive
        },
        365
      );
      v.molecularCooking.subscribe(S);
      var A = new n.Achievement(
        'ach_greed',
        'Greed',
        'Investment Research Level 500',
        function () {
          return c.investment.xp.highestLevelEverIncludingThisLife()
        },
        500
      );
      c.investment.xp.subscribe(A);
      var T = new n.Achievement(
        'ach_sloth',
        'Sloth',
        'Sleep for 22 Hours',
        function () {
          return h.sleep.duration.state.highestEffectiveEver / 60
        },
        22
      );
      h.sleep.duration.subscribe(T);
      var E = new n.Achievement(
        'ach_wrath',
        'Wrath',
        'Destroy 1000 Alien Ships',
        function () {
          return p.battle.state.enemiesDestroyedTotal
        },
        1000
      );
      p.battle.subscribe(E);
      var I = new n.AG('ag_seven_deadly_sins', 'Seven Deadly Sins*', [
        C,
        S,
        A,
        T,
        E
      ]);
      g.push(I);
      var D = new n.Achievement(
        'achievement_millionaire',
        'Millionaire',
        'Have a million dollars',
        function () {
          return f.money.state.maximum
        },
        1000000
      );
      f.money.subscribe(D);
      var j = new n.Achievement(
        'achievement_billionaire',
        'Billionaire',
        'Have a billion dollars',
        function () {
          return f.money.state.maximum
        },
        1000000000
      );
      f.money.subscribe(j);
      var N = new n.Achievement(
        'achievement_trillionaire',
        'Rockefeller',
        'Have a trillion dollars',
        function () {
          return f.money.state.maximum
        },
        1000000000000
      );
      f.money.subscribe(N);
      var O = new n.AG('ag_money', 'Money', [
        D,
        j,
        N
      ]);
      g.push(O);
      var B = new n.Achievement(
        'achievement_flippin_faster',
        'Flippin\' Faster',
        'Level 10 Burger Flipper in less than 100 days',
        function () {
          return r.burgerFlipper.xp.getMinDaysToLevel(10)
        },
        100,
        function (e, t) {
          return e <= t
        }
      );
      r.burgerFlipper.xp.subscribe(B);
      var R = new n.Achievement(
        'achievement_flippin_fantastic',
        'Flippin\' Fantastic',
        'Level 100 Burger Flipping',
        function () {
          return r.burgerFlipper.xp.highestLevelEverIncludingThisLife()
        },
        100
      );
      r.burgerFlipper.xp.subscribe(R);
      var G = new n.Achievement(
        'achievement_flipping_livetimes',
        'Zen of Flipping',
        'Level 1000 Burger Flipper',
        function () {
          return r.burgerFlipper.xp.highestLevelEverIncludingThisLife()
        },
        1000
      );
      r.burgerFlipper.xp.subscribe(G);
      var V = new n.Achievement(
        'achievement_burgerKing',
        'Burger King',
        'Become Bun Masters CEO',
        function () {
          return r.bunMastersCeo.xp.highestLevelEverIncludingThisLife()
        },
        1
      );
      r.bunMastersCeo.xp.subscribe(V);
      var z = new n.AG('ag_bunmasters', 'Path of the Burgerflipper', [
        B,
        R,
        G,
        V
      ]);
      g.push(z);
      var H = new n.Achievement(
        'achievement_intern_master',
        'Master Intern',
        'Level 100 Unpaid Intern',
        function () {
          return s.yugle.jobs[0].xp.highestLevelEverIncludingThisLife()
        },
        100
      );
      s.yugle.jobs[0].xp.subscribe(H);
      var F = new n.Achievement(
        'achievement_butwhy',
        'But Why?',
        'Level 1000 Unpaid Intern',
        function () {
          return s.yugle.jobs[0].xp.highestLevelEverIncludingThisLife()
        },
        1000
      );
      s.yugle.jobs[0].xp.subscribe(F);
      var Y = new n.Achievement(
        'achievement_carmack',
        'Carmackesque',
        'Level 500 Programming Research',
        function () {
          return u.programming.xp.highestLevelEverIncludingThisLife()
        },
        500
      );
      u.programming.xp.subscribe(Y);
      var J = new n.Achievement(
        'achievement_donKnuth',
        'Knuthish',
        'Level 500 Algorithms Research',
        function () {
          return o.alg.xp.highestLevelEverIncludingThisLife()
        },
        500
      );
      o.alg.xp.subscribe(J);
      var U = new n.Achievement(
        'achievement_linus',
        'Linusian',
        'Level 500 Software Engineering',
        function () {
          return l.se.xp.highestLevelEverIncludingThisLife()
        },
        500
      );
      l.se.xp.subscribe(U);
      var W = new n.Achievement(
        'achievement_mayering',
        'Marissa?',
        'Level 10 Yugle CEO before Age 40',
        function () {
          return s.yugleCeo.xp.getMinDaysToLevel(10)
        },
        7665,
        function (e, t) {
          return e <= t
        }
      );
      s.yugleCeo.xp.subscribe(W);
      var X = new n.AG('ag_yugle', 'Path of the Code Monkey', [
        H,
        F,
        W,
        Y,
        J,
        U
      ]);
      g.push(X);
      var Q = new n.Achievement(
        'achievement_happy',
        'Happy',
        'Be at least 1.8 Happy',
        function () {
          return d.happinessStat.state.highestEffectiveEver
        },
        1.8
      );
      d.happinessStat.subscribe(Q);
      var Z = new n.Achievement(
        'achievement_miserable',
        'Miserable',
        'Be less than 0.1 Happy',
        function () {
          return d.happinessStat.state.lowestEffectiveEver
        },
        0.1,
        function (e, t) {
          return e <= t
        }
      );
      d.happinessStat.subscribe(Z);
      var $ = new n.AG('ag_mood', 'Mood', [
        Q,
        Z
      ]);
      g.push($);
      var q = new n.Achievement(
        'achievement_dark_plateau',
        'Welcome...',
        '...to the Dark Plateau Transit System',
        function () {
          return y.labCleaner.xp.highestLevelEverIncludingThisLife()
        },
        1
      );
      y.labCleaner.xp.subscribe(q);
      var K = new n.Achievement(
        'achievement_freeman',
        'Gordon',
        'Unlock the Greek Letter Complex',
        function () {
          return y.lambdaComplexTrainee.xp.highestLevelEverIncludingThisLife()
        },
        1
      );
      y.lambdaComplexTrainee.xp.subscribe(K);
      var ee = new n.Achievement(
        'achievement_not_breen',
        'Kleiner',
        'Level 10 Dark Plateau CEO',
        function () {
          return y.darkPlateauCeo.xp.highestLevelEverIncludingThisLife()
        },
        10
      );
      y.darkPlateauCeo.xp.subscribe(ee);
      var te = new n.Achievement(
        'achievement_laser_gun',
        'Planetary Gunslinger',
        'Level 1 Lasergun',
        function () {
          return _.laserGun.xp.highestLevelEverIncludingThisLife()
        },
        1
      );
      _.laserGun.xp.subscribe(te);
      var ae = new n.Achievement(
        'achievement_groundhog_king',
        'Groundhog King',
        'Use the LoopTrapDevice in two lives in a row',
        function () {
          return i.currentLifeThisLoop.minLivesToLoopTrap.getValue()
        },
        1,
        function (e, t) {
          return e <= t
        }
      );
      i.currentLifeThisLoop.subscribe(ae);
      var ne = new n.AG('ag_lambda', 'Path of the Physicist', [
        q,
        K,
        ee,
        te,
        ae
      ]);
      g.push(ne)
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.boosts = void 0;
      var n = a(144),
      i = a(43),
      r = a(30),
      s = a(12),
      o = a(11),
      u = a(116),
      l = a(115),
      c = a(117),
      d = new n.Boost(
        'boost_coffeine',
        'Copious Caffeine',
        '+75% Energy for 2 Months',
        60,
        730
      ),
      f = new s.MultModifier('coffeine_mod', 'Copious Caffeine', 10, 1.75);
      (0, o.createSelectedLock) (d, f),
      i.energyStat.addModifier(f);
      var v = new n.Boost(
        'boost_organize',
        'Organize Stuff',
        '+75% Energy for 3 Months',
        90,
        1095
      ),
      h = new s.MultModifier('boost_organize_mod', 'Organized your Stuff', 10, 1.75);
      (0, o.createSelectedLock) (v, h),
      (0, o.createLevelLock) (l.getStuffDone, v, 10),
      i.energyStat.addModifier(h);
      var p = new n.Boost('boost_spa', 'Visit Spa', '+75% Energy for 4 Months', 120, 1460),
      m = new s.MultModifier('boost_spaMod', 'Visited Spa', 10, 1.75);
      (0, o.createSelectedLock) (p, m),
      (0, o.createLevelLock) (u.nutrition, p, 25),
      i.energyStat.addModifier(m);
      var y = new n.Boost(
        'boost_conference',
        'Go to Conference',
        '+75% Research Output for 6 Months',
        180,
        1825
      ),
      _ = new s.MultModifier('boost_conferenceMod', 'Visited Conference', 10, 1.75);
      (0, o.createSelectedLock) (y, _),
      (0, o.createLevelLock) (c.studySkills, y, 50),
      r.baseResearchXpPerHourStat.addModifier(_);
      t.boosts = [
        d,
        v,
        p,
        y
      ]
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.lostWallet = t.keep = void 0;
      var n = a(58),
      i = a(11),
      r = a(17),
      s = a(38),
      o = (0, n.createNode) (
        'event_lostwallet_inheritance2',
        'You inherited $50,000 from Mrs Pennywise!',
        null,
        function () {
          return s.money.add(50000)
        }
      ),
      u = (0, n.createNode) (
        'event_lostwallet_inheritance1',
        'You find an official looking letter in your mailbox.',
        o
      ),
      l = (0, n.createNode) (
        'event_lostwallet_kept_it',
        'You find pictures of her grandchildren, and $10.',
        null
      ),
      c = (0, n.createNode) (
        'event_lostwallet_gave_back',
        'She thanks you and hands you some candy.',
        u
      ),
      d = t.keep = (0, n.createPath) ('event_path_keeplostWallet', 'Keep it', l),
      f = (0, n.createPath) ('event_path_giveBacklostwallet', 'Give it back, of course', c),
      v = (0, n.createUserChoiceNode) ('event_lostwallet_choice', 'What do you do?', [
        f,
        d
      ]),
      h = (0, n.createNode) (
        'event_lostwallet2',
        'An old lady walking in front of you loses her wallet.',
        v
      ),
      p = (0, n.createNode) ('event_lostwallet1', 'You are on your way home.', h),
      m = [
        p,
        h,
        v,
        c,
        l,
        u,
        o
      ],
      y = t.lostWallet = (0, n.createEvent) ('event_lostWallet', 'Lost Wallet', m);
      (0, i.createPredicateLock) (
        r.currentYear,
        u,
        function () {
          return c.state.executed &&
          r.currentYear.getValue() > c.state.executedOnDay / 365 + 10
        }
      ),
      (0, i.createMinimumValueLock) (r.currentYear, y, 1)
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.assistants = t.secretary = t.researchAssistant = t.servant = t.cleaner = void 0;
      var i = a(10),
      r = n(i),
      s = a(2),
      o = n(s),
      u = a(1),
      l = n(u),
      c = a(4),
      d = n(c),
      f = a(6),
      v = n(f),
      h = a(8),
      p = n(h),
      m = a(5),
      y = n(m),
      _ = a(21),
      g = a(11),
      b = a(12),
      M = a(22),
      k = a(44),
      w = a(51),
      x = a(50),
      P = a(30),
      L = a(112),
      C = a(34),
      S = function (e) {
        function t(e, a, n, i) {
          var r = arguments.length > 4 &&
          void 0 !== arguments[4] ? arguments[4] : function () {
            return !0
          },
          s = arguments.length > 5 &&
          void 0 !== arguments[5] ? arguments[5] : function () {
            return !0
          };
          (0, l.default) (this, t);
          var u = (0, v.default) (this, (t.__proto__ || (0, o.default) (t)).call(this, e, a));
          return u.description = n,
          u.cost = i,
          u.costMod = new b.AddModifier(u.id + '_cost_mod', u.name, 1, u.cost),
          (0, g.createTrueStateLock) (u, u.costMod),
          k.dailyExpensesStat.addModifier(u.costMod),
          u.selectAllowed = r,
          u.deselectAllowed = s,
          u
        }
        return (0, y.default) (t, e),
        (0, d.default) (
          t,
          [
            {
              key: 'setValue',
              value: function (e) {
                if (!e || this.selectAllowed()) return e ||
                this.deselectAllowed() ? void (0, p.default) (
                  t.prototype.__proto__ ||
                  (0, o.default) (t.prototype),
                  'setValue',
                  this
                ).call(this, e) : void C.messageBox.addMessage(
                  'Not enough free time to do Chores yourself!',
                  !1,
                  'alert-danger'
                )
              }
            }
          ]
        ),
        t
      }(_.BooleanStateEntity),
      A = t.cleaner = new S(
        'assistant_cleaner',
        'Cleaner',
        'Reduces Your Chores by One Hour',
        50,
        function () {
          return !0
        },
        function () {
          return M.freeTime.duration.effective >= 60 + Math.min(0, x.currentHomeContainer.home.choresTime.rawEffective)
        }
      ),
      T = new b.AddModifier('cleaner_mod', 'Cleaner', 1, - 60);
      (0, g.createTrueStateLock) (A, T);
      var E = t.servant = new S(
        'assistant_servant',
        'Full-time Servant',
        'Reduces Your Chores by Five Hours',
        1000,
        function () {
          return !0
        },
        function () {
          return M.freeTime.duration.effective >= 300 + Math.min(0, x.currentHomeContainer.home.choresTime.rawEffective)
        }
      ),
      I = new b.AddModifier('servant_mod', 'Servant', 1, - 300);
      (0, g.createTrueStateLock) (E, I);
      var D = !0,
      j = !1,
      N = void 0;
      try {
        for (var O, B = (0, r.default) (w.homes); !(D = (O = B.next()).done); D = !0) {
          var R = O.value;
          R.choresTime.addModifier(T),
          R.choresTime.addModifier(I)
        }
      } catch (e) {
        j = !0,
        N = e
      } finally {
        try {
          !D &&
          B.return &&
          B.return()
        } finally {
          if (j) throw N
        }
      }
      var G = t.researchAssistant = new S(
        'assistant_research',
        'Research Assistant',
        'Research Speed +50%',
        500,
        function () {
          return !0
        },
        function () {
          return !0
        }
      ),
      V = new b.MultModifier('researchAssistant_mod', 'Research Assistant', 10, 1.5);
      (0, g.createTrueStateLock) (G, V),
      P.baseResearchXpPerHourStat.addModifier(V),
      (0, g.createCustomLock) (
        [M.research],
        G.costMod,
        function () {
          return M.research.duration.effective > 0
        }
      );
      var z = t.secretary = new S(
        'assistant_secretary',
        'Personal Secretary',
        'Work Experience +50%',
        500,
        function () {
          return !0
        },
        function () {
          return !0
        }
      ),
      H = new b.MultModifier('secretary_mod', 'Secretary', 10, 1.5);
      (0, g.createTrueStateLock) (z, H),
      P.baseWorkXpPerHourStat.addModifier(H),
      (0, g.createCustomLock) (
        [M.work],
        z.costMod,
        function () {
          return M.work.duration.effective > 0
        }
      );
      for (var F = [], Y = 1; Y < 8; Y++) {
        var J = 10,
        U = new S(
          'assistant_ai_research_' + Y,
          'AI Research Assistant ' + Y,
          'Research Speed +' + J + '%',
          50 * Y,
          function () {
            return !0
          },
          function () {
            return !0
          }
        ),
        W = new b.MultModifier(
          'aiResearchAssistant_mod_' + Y,
          'AI Research Assistant ' + Y,
          10,
          1 + J / 100
        );
        (0, g.createTrueStateLock) (U, W),
        P.baseResearchXpPerHourStat.addModifier(W),
        (0, g.createLevelLock) (L.compsci.areas[(Y - 1) % 3], U, 100 * Y),
        F.push(U),
        (0, g.createCustomLock) (
          [M.research],
          U.costMod,
          function () {
            return M.research.duration.effective > 0
          }
        ),
        Y > 1 &&
        (0, g.createUnlockedLock) (F[Y - 2], U)
      }
      t.assistants = [
        A,
        E,
        G,
        z
      ].concat(F)
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.autoBoostStack = t.autoBoostJustPause = t.autoBoostExclConference = t.autoBoost = t.autoResearchJustPause = t.autoResearch = t.autoPromoteJustPause = t.autoPromoteMinLevel = t.autoPromote = void 0;
      var n = a(21),
      i = a(120);
      t.autoPromote = new n.BooleanStateEntity(
        'autoPromote',
        'Auto Promote',
        !1,
        !1,
        function () {
          return i.userInventory.haveAutoPromote
        }
      ),
      t.autoPromoteMinLevel = new n.NumberStateEntity('autoPromoteML', 'Auto Promote Min Level', 10, !1),
      t.autoPromoteJustPause = new n.BooleanStateEntity('autoPromoteJustPause', 'Just Pause', !1, !1),
      t.autoResearch = new n.BooleanStateEntity(
        'autoResearch',
        'Auto Research',
        !1,
        !1,
        function () {
          return i.userInventory.haveAutoResearch
        }
      ),
      t.autoResearchJustPause = new n.BooleanStateEntity('autoResearchJustPause', 'Just Pause', !1, !1),
      t.autoBoost = new n.BooleanStateEntity(
        'autoBoost',
        'Auto Boost',
        !1,
        !1,
        function () {
          return i.userInventory.haveAutoBoost
        }
      ),
      t.autoBoostExclConference = new n.BooleanStateEntity('autoBoostExlConf', 'Auto Boost - Exclude Conference', !1, !1),
      t.autoBoostJustPause = new n.BooleanStateEntity('autoBoostJustPause', 'Just Pause', !1, !1),
      t.autoBoostStack = new n.BooleanStateEntity('autoBoostStack', 'Stack', !0, !1)
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.minimalism = t.shadyDoctor = void 0;
      var n = a(21);
      t.shadyDoctor = new n.BooleanStateEntity('shady_doctor', 'Shady Doctor', !1, !1),
      t.minimalism = new n.BooleanStateEntity('minimalism', 'Minimalism', !1, !1)
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.playSounds = t.xpPerHour = t.nightMode = t.idleMode = t.pauseOnPrestige = void 0;
      var n = a(21);
      t.pauseOnPrestige = new n.BooleanStateEntity('set_pauseOnPrestige', 'Pause Game after Prestige', !1, !1),
      t.idleMode = new n.BooleanStateEntity('set_idleMode', 'Fast-Forward progress after Idling', !0, !1),
      t.nightMode = new n.BooleanStateEntity('state_nightmode', 'Nightmode', !1),
      t.xpPerHour = new n.BooleanStateEntity('show_xpPerHour', 'XP Per Hour', !0, !1),
      t.playSounds = new n.BooleanStateEntity('play_sounds', 'Play Sounds', !0, !1)
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.bunMasters = t.bunMastersCeo = t.burgerFlipper = void 0;
      var n = a(78),
      i = a(48),
      r = a(77),
      s = a(11),
      o = a(110),
      u = t.burgerFlipper = new n.Job('bm1', 'Burger Flipper', 10, !0),
      l = new n.Job('bm2', 'Chief Flipper'),
      c = new n.Job('bm3', 'Kitchen Manager'),
      d = new n.Job('bm4', 'Shift Manager'),
      f = new n.Job('bm5', 'Assistant Manager'),
      v = new n.Job('bm6', 'Restaurant Manager'),
      h = new n.Job('bm7', 'Regional Manager'),
      p = new n.Job('bm8', 'Chief Strategist'),
      m = t.bunMastersCeo = new n.Job('bm9', 'CEO'),
      y = [
        u,
        l,
        c,
        d,
        f,
        v,
        h,
        p,
        m
      ];
      (0, i.configureXpProgression) (y, 600, 2.2, 8),
      (0, n.configurePayProgression) (y, 5, 250, 2),
      (0, s.createLevelLockChain) (y, 10),
      (0, s.createLevelLock) (o.leadership, d, 10),
      (0, s.createLevelLock) (o.leadership, h, 50),
      (0, s.createLevelLock) (o.leadership, m, 100);
      t.bunMasters = new r.Career('bunMasters', 'BunMasters', y)
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.jobs = t.careers = void 0;
      var i,
      r = a(81),
      s = n(r),
      o = a(107),
      u = a(40),
      l = a(49),
      c = t.careers = [
        o.bunMasters,
        u.yugle,
        l.darkPlateau
      ];
      t.jobs = (i = []).concat.apply(i, (0, s.default) (c.map(function (e) {
        return e.jobs
      })))
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.investment = void 0;
      var i = a(2),
      r = n(i),
      s = a(4),
      o = n(s),
      u = a(6),
      l = n(u),
      c = a(5),
      d = n(c),
      f = a(1),
      v = n(f),
      h = a(25),
      p = a(12),
      m = a(44),
      y = a(9),
      _ = t.investment = new h.Area('area_investment', 'Investing', []),
      g = new p.HarmonicLevelAddModifier(
        'investment_research_level_mod',
        'Research: Investing',
        2,
        _.xp,
        0.02
      );
      m.investmentReturnStat.addModifier(g);
      var b = function e() {
        (0, v.default) (this, e)
      },
      M = function (e) {
        function t() {
          return (0, v.default) (this, t),
          (0, l.default) (this, (t.__proto__ || (0, r.default) (t)).apply(this, arguments))
        }
        return (0, d.default) (t, e),
        (0, o.default) (
          t,
          [
            {
              key: 'update',
              value: function () {
                var e = 100 * g.step,
                t = e > 0.01 ? e.toFixed(2) : '<0.01';
                _.effect = 'Interest +' + t + '% (total: ' + (100 * g.factor).toFixed(2) + '%/yr)'
              }
            }
          ]
        ),
        t
      }(y.BasicEntity),
      k = new M('inv_eff_upd', 'Investment Effect Updater', new b);
      g.subscribe(k),
      _.effect = 'Interest +1%'
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.leadership = t.gungHo = t.leadership101 = void 0;
      var n = a(11),
      i = a(41),
      r = a(25),
      s = a(12),
      o = a(30),
      u = a(40),
      l = t.leadership101 = new i.Book(
        'leadership1',
        'Leadership 101',
        'Fundamentals of Leadering',
        100,
        '0785264191'
      ),
      c = new s.MultModifier(l.id + '_workexp_mod', l.name, 1, 1.05);
      (0, n.createCompletedLock) (l, c),
      o.baseWorkXpPerHourStat.addModifier(c),
      l.effect = '5% more work experience/hour';
      var d = t.gungHo = new i.Book(
        'leadership2',
        'Gung Ho',
        'Inspire Underlings',
        140,
        '068815428X'
      );
      c = new s.MultModifier(d.id + '_workexp_mod', d.name, 1, 1.05),
      (0, n.createCompletedLock) (d, c),
      o.baseWorkXpPerHourStat.addModifier(c),
      d.effect = '5% more work experience/hour';
      var f = new i.Book(
        'leadership3',
        'The One Minute Manager',
        'Sequel to \'The One Minute Lover\'',
        100,
        '0062367544'
      );
      c = new s.MultModifier(f.id + '_workexp_mod', f.name, 1, 1.05),
      (0, n.createCompletedLock) (f, c),
      o.baseWorkXpPerHourStat.addModifier(c),
      f.effect = '5% more work experience/hour';
      var v = new i.Book(
        'leadership4',
        'The Leadership Challenge',
        'Extraordinize your Organization',
        190,
        '0470651725'
      );
      c = new s.MultModifier(v.id + '_workexp_mod', v.name, 1, 1.05),
      (0, n.createCompletedLock) (v, c),
      o.baseWorkXpPerHourStat.addModifier(c),
      v.effect = '5% more work experience/hour';
      var h = new i.Book(
        'leadership5',
        'Leadership: Theory and Practice',
        'Getting Serious',
        300,
        '1483317536'
      );
      c = new s.MultModifier(h.id + '_workexp_mod', h.name, 1, 1.05),
      (0, n.createCompletedLock) (h, c),
      o.baseWorkXpPerHourStat.addModifier(c),
      h.effect = '5% more work experience/hour',
      (0, n.createCompletedOrReadingListLock) (l, d),
      (0, n.createCompletedOrReadingListLock) (d, f),
      (0, n.createCompletedOrReadingListLock) (f, v),
      (0, n.createCompletedOrReadingListLock) (v, h);
      var p = t.leadership = new r.Area('area_leadership', 'Leadership', [
        l,
        d,
        f,
        v,
        h
      ]);
      c = new s.LevelAddMultModifier(
        'leadership_research_level_mod',
        'Research: Leadership',
        2,
        p.xp,
        0.02
      ),
      o.baseWorkXpPerHourStat.addModifier(c),
      p.effect = '+2% Work Experience/Hour',
      p.importance = 1.5,
      (0, n.createLevelLock) (p, u.teamLead, 10),
      (0, n.createLevelLock) (p, u.divisionLead, 10),
      (0, n.createLevelLock) (p, u.cto, 100)
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.alg = t.alg3 = t.alg2 = t.alg1 = void 0;
      var n = a(11),
      i = a(41),
      r = a(25),
      s = a(12),
      o = a(60),
      u = t.alg1 = new i.Book(
        'alg1',
        'Introduction to Algorithms',
        'Balancing those binary trees in no time.',
        500,
        '0262033844'
      ),
      l = t.alg2 = new i.Book(
        'alg2',
        'Algorithm Design Manual',
        'How to implement algorithms well.',
        500,
        '1848000693'
      ),
      c = t.alg3 = new i.Book(
        'alg3',
        'Concrete Mathematics',
        'Finetuning your Skills',
        2000,
        '0201558025'
      );
      (0, n.createCompletedOrReadingListLock) (u, l),
      (0, n.createCompletedOrReadingListLock) (l, c);
      var d = t.alg = new r.Area('area_alg', 'Algorithms', [
        u,
        l,
        c
      ]),
      f = new s.LevelAddMultModifier('alg_research_level_mod', 'Research: Algorithms', 2, d.xp, 0.01);
      o.programming.xp.xpPerHourStat.addModifier(f),
      d.effect = '+1% Programming Research Speed'
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.compsci = void 0;
      var n = a(62),
      i = a(60),
      r = a(113),
      s = a(111),
      o = a(11);
      t.compsci = new n.Field('compsci', 'Computer Science', [
        i.programming,
        s.alg,
        r.se
      ]);
      (0, o.createLevelLock) (i.programming, s.alg, 10),
      (0, o.createLevelLock) (i.programming, r.se, 20)
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.se = t.se5 = t.se4 = t.se3 = t.se2 = t.se1 = void 0;
      var n = a(11),
      i = a(41),
      r = a(25),
      s = a(12),
      o = a(60),
      u = a(40),
      l = t.se1 = new i.Book(
        'se1',
        'The Pragmatic Programmer',
        'Tales from the development frontlines.',
        150,
        '020161622X'
      ),
      c = t.se2 = new i.Book(
        'se2',
        'Clean Code',
        'Write the shiniest lines.',
        200,
        '0132350882'
      ),
      d = t.se3 = new i.Book(
        'se3',
        'Code Complete',
        'If your code is not complete, you',
        200,
        '0735619670'
      ),
      f = t.se4 = new i.Book(
        'se4',
        'Design Patterns',
        'Don\'t reinvent the wheel. You will probably make it square-shaped.',
        250,
        '0201633612'
      ),
      v = t.se5 = new i.Book(
        'se5',
        'Working with Legacy Code',
        'Boooring. Or is it?',
        250,
        '0131177052'
      );
      (0, n.createCompletedOrReadingListLock) (l, c),
      (0, n.createCompletedOrReadingListLock) (c, d),
      (0, n.createCompletedOrReadingListLock) (d, f),
      (0, n.createCompletedOrReadingListLock) (f, v);
      var h = t.se = new r.Area('area_se', 'Software Architecture', [
        l,
        c,
        d,
        f,
        v
      ]),
      p = new s.LevelAddMultModifier(
        'se_research_level_mod',
        'Research: Software Engineering',
        2,
        h.xp,
        0.01
      );
      o.programming.xp.xpPerHourStat.addModifier(p),
      h.effect = '+1% Programming Research Speed',
      (0, n.createLevelLock) (h, u.softwareEngineer, 5)
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.qm = t.qm4 = t.qm3 = t.qm2 = t.qm1 = t.qm0 = void 0;
      var n = a(11),
      i = a(41),
      r = a(25),
      s = a(49),
      o = t.qm0 = new i.Book(
        'qm0',
        'In Search of Schrödinger\'s Cat',
        'Looks interesting.',
        150,
        '0553342533'
      ),
      u = t.qm1 = new i.Book(
        'qm1',
        'Quantum Physics of ...',
        'Maybe this quantum stuff can help you figure things out.',
        300,
        '047187373X'
      ),
      l = t.qm2 = new i.Book(
        'qm2',
        'Principles of Quantum Mechanics',
        'This is pretty difficult.',
        400,
        '0306447908'
      ),
      c = t.qm3 = new i.Book(
        'qm3',
        'Introduction to Quantum Mechanics',
        'Head hurts.',
        500,
        '0131118927'
      ),
      d = t.qm4 = new i.Book(
        'qm4',
        'Modern Quantum Mechanics',
        'Okay I think I get it. Maybe.',
        600,
        '0805382917'
      );
      (0, n.createCompletedOrReadingListLock) (o, u),
      (0, n.createCompletedOrReadingListLock) (u, l),
      (0, n.createCompletedOrReadingListLock) (l, c),
      (0, n.createCompletedOrReadingListLock) (c, d);
      var f = t.qm = new r.Area('area_qm', 'Quantum Mechanics', [
        o,
        u,
        l,
        c,
        d
      ]);
      f.effect = 'Exciting Career Opportunities',
      (0, n.createLevelLock) (f, s.darkPlateau.jobs[0], 50),
      (0, n.createLevelLock) (f, s.darkPlateau.jobs[6], 300)
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.getStuffDone = void 0;
      var n = a(11),
      i = a(41),
      r = a(25),
      s = a(12),
      o = a(22),
      u = a(30),
      l = a(43),
      c = new i.Book(
        'gsd1',
        'Eat That Frog!',
        'Stop Procrastinating',
        40,
        '1576754227'
      ),
      d = new s.MultModifier('gsd1_slacking_mod', 'Eat That Frog!', 1, 0.8);
      (0, n.createCompletedLock) (c, d),
      o.slacking.duration.addModifier(d),
      c.effect = '20% less slacking';
      var f = new i.Book('gsd2', 'The One Thing', 'Prioritize Harder', 60, '1885167776');
      d = new s.MultModifier('gsd2_job_experience_mod', 'The One Thing', 1, 1.1),
      (0, n.createCompletedLock) (f, d),
      u.baseWorkXpPerHourStat.addModifier(d),
      f.effect = '10% more work experience/h';
      var v = new i.Book(
        'gsd3',
        'Getting Things Done',
        'Organize Your Life',
        120,
        '0143126563'
      );
      d = new s.MultModifier('gsd3_job_experience_mod', 'Getting Things Done', 1, 1.1),
      (0, n.createCompletedLock) (v, d),
      l.energyStat.addModifier(d),
      v.effect = '10% more energy',
      (0, n.createCompletedOrReadingListLock) (c, f),
      (0, n.createCompletedOrReadingListLock) (f, v);
      var h = t.getStuffDone = new r.Area('area_getting_stuff_done', 'Getting Stuff Done', [
        c,
        f,
        v
      ]);
      d = new s.LevelModifier(
        'gsd_research_level_mod',
        'Research: Getting Things Done',
        2,
        h.xp,
        0.99
      ),
      o.slacking.duration.addModifier(d),
      h.effect = '-1% Slacking (compounding)'
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.nutrition = void 0;
      var n = a(25),
      i = a(12),
      r = a(43),
      s = t.nutrition = new n.Area('area_nutrition', 'Meditation', []),
      o = new i.LevelAddMultModifier(
        'nutrition_research_level_mod',
        'Research: Meditation',
        2,
        s.xp,
        0.005
      );
      r.energyStat.addModifier(o),
      s.effect = '+0.5% Energy',
      s.importance = 3
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.studySkills = void 0;
      var n = a(25),
      i = a(12),
      r = a(30),
      s = t.studySkills = new n.Area('area_study_skills', 'Study Skills', []),
      o = new i.LevelAddMultModifier(
        'study_skills_research_level_mod',
        'Research: Study Skills',
        2,
        s.xp,
        0.01
      );
      r.baseResearchXpPerHourStat.addModifier(o),
      s.effect = '+1% Research Speed',
      s.importance = 2.5
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.Pane = t.PaneGroup = void 0;
      var i = a(2),
      r = n(i),
      s = a(4),
      o = n(s),
      u = a(6),
      l = n(u),
      c = a(5),
      d = n(c),
      f = a(1),
      v = n(f),
      h = a(9),
      p = function e() {
        (0, v.default) (this, e),
        this.notified = !1,
        this.selected = !1,
        this.explained = !1
      };
      t.PaneGroup = function e() {
        var t = arguments.length > 0 &&
        void 0 !== arguments[0] &&
        arguments[0];
        (0, v.default) (this, e),
        this.panes = [],
        this.allowMultiple = t
      },
      t.Pane = function (e) {
        function t(e, a, n, i) {
          var s = arguments.length > 4 &&
          void 0 !== arguments[4] &&
          arguments[4],
          o = arguments.length > 5 &&
          void 0 !== arguments[5] ? arguments[5] : [];
          (0, v.default) (this, t);
          var u = (0, l.default) (this, (t.__proto__ || (0, r.default) (t)).call(this, e, a, new p));
          return u.state.selected = 'job-pane' === u.id,
          u.component = n,
          u.footer = s,
          u.subpanes = o,
          u.paneGroup = i,
          u.paneGroup.panes.push(u),
          u
        }
        return (0, d.default) (t, e),
        (0, o.default) (
          t,
          [
            {
              key: 'select',
              value: function () {
                this.state.selected = !0,
                this.state.notified = !1
              }
            },
            {
              key: 'toggle',
              value: function () {
                this.state.selected = !this.state.selected,
                this.state.notified = !1
              }
            },
            {
              key: 'deselect',
              value: function () {
                this.state.selected = !1
              }
            },
            {
              key: 'notify',
              value: function () {
                this.state.selected ||
                (this.state.notified = !0)
              }
            },
            {
              key: 'prestige',
              value: function () {
                this.notified = !1,
                this.selected = 'life-summary-pane' === this.id
              }
            }
          ]
        ),
        t
      }(h.BasicEntity)
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.schedule = void 0;
      var i = a(218),
      r = n(i),
      s = a(10),
      o = n(s),
      u = a(2),
      l = n(u),
      c = a(4),
      d = n(c),
      f = a(6),
      v = n(f),
      h = a(8),
      p = n(h),
      m = a(5),
      y = n(m),
      _ = a(1),
      g = n(_),
      b = a(9),
      M = a(22),
      k = a(20),
      w = a(103),
      x = a(50),
      P = a(51),
      L = a(52),
      C = function e() {
        (0, g.default) (this, e)
      },
      S = function (e) {
        function t(e, a, n) {
          (0, g.default) (this, t);
          var i = (0, v.default) (this, (t.__proto__ || (0, l.default) (t)).call(this, e, a, new C)),
          r = !0,
          s = !1,
          u = void 0;
          try {
            for (var c, d = (0, o.default) (n); !(r = (c = d.next()).done); r = !0) {
              var f = c.value;
              f.duration.dependants.push(i)
            }
          } catch (e) {
            s = !0,
            u = e
          } finally {
            try {
              !r &&
              d.return &&
              d.return()
            } finally {
              if (s) throw u
            }
          }
          return i.timetable = [],
          i.update(),
          i
        }
        return (0, y.default) (t, e),
        (0, d.default) (
          t,
          [
            {
              key: 'prestige',
              value: function () {
              }
            },
            {
              key: 'postPrestigeAssert',
              value: function () {
                (0, k.assert) (1440 === this.totalTime())
              }
            },
            {
              key: 'totalTime',
              value: function () {
                return M.activities.map(function (e) {
                  return e.getDuration()
                }).reduce(function (e, t) {
                  return e + t
                })
              }
            },
            {
              key: 'update',
              value: function () {
                var e = this.totalTime();
                if (1440 !== e) return void M.freeTime.durationProxy.add(1440 - e);
                (0, k.assert) (1440 === e);
                var a = 0,
                n = [],
                i = !0,
                r = !1,
                s = void 0;
                try {
                  for (
                    var u,
                    c = (0, o.default) (M.activities);
                    !(i = (u = c.next()).done);
                    i = !0
                  ) {
                    var d = u.value;
                    n.push([[a,
                    a + d.getDuration()],
                    d]),
                    a += d.getDuration()
                  }
                } catch (e) {
                  r = !0,
                  s = e
                } finally {
                  try {
                    !i &&
                    c.return &&
                    c.return()
                  } finally {
                    if (r) throw s
                  }
                }
                this.timetable = n,
                (0, p.default) (
                  t.prototype.__proto__ ||
                  (0, l.default) (t.prototype),
                  'update',
                  this
                ).call(this)
              }
            },
            {
              key: 'changeActivityTime',
              value: function (e, t) {
                var a = Math.abs(t),
                n = e.duration.effective - a * Math.floor(e.duration.effective / a),
                i = a * Math.ceil(e.duration.effective / a) - e.duration.effective;
                n > 0 &&
                (t = Math.max(t, - n)),
                i > 0 &&
                (t = Math.min(t, i)),
                t = Math.min(t, M.freeTime.duration.effective),
                t = Math.max(t, - (e.duration.effective - e.minTime)),
                t = Math.floor(t),
                e.durationProxy.add(t),
                (0, k.assert) (e.duration.effective === e.durationProxy.getValue())
              }
            },
            {
              key: 'austerityMode',
              value: function () {
                this.changeActivityTime(M.research, - M.research.duration.effective),
                this.changeActivityTime(M.sleep, Math.min(0, 480 - M.sleep.duration.effective)),
                this.changeActivityTime(M.work, - M.work.duration.effective),
                (0, L.selectFoodOption) (L.studentCuisine),
                x.currentHomeContainer.setCurrent(P.parentsBasement, !1);
                var e = !0,
                t = !1,
                a = void 0;
                try {
                  for (
                    var n,
                    i = (0, o.default) (w.assistants);
                    !(e = (n = i.next()).done);
                    e = !0
                  ) {
                    var r = n.value;
                    r.setValue(!1)
                  }
                } catch (e) {
                  t = !0,
                  a = e
                } finally {
                  try {
                    !e &&
                    i.return &&
                    i.return()
                  } finally {
                    if (t) throw a
                  }
                }
                this.changeActivityTime(M.work, M.freeTime.duration.effective)
              }
            },
            {
              key: 'lookupCurrentActivity',
              value: function (e, t) {
                var a = !0,
                n = !1,
                i = void 0;
                try {
                  for (
                    var s,
                    u = (0, o.default) (this.timetable);
                    !(a = (s = u.next()).done);
                    a = !0
                  ) {
                    var l = (0, r.default) (s.value, 2),
                    c = l[0],
                    d = l[1];
                    if (c[0] <= e && e < c[1]) return t ? [
                      d,
                      c[1] - e
                    ] : d
                  }
                } catch (e) {
                  n = !0,
                  i = e
                } finally {
                  try {
                    !a &&
                    u.return &&
                    u.return()
                  } finally {
                    if (n) throw i
                  }
                }
                return console.log('didn\' find current activity', e, this.timetable),
                t ? [
                  M.sleep,
                  1440 - e
                ] : M.sleep
              }
            }
          ]
        ),
        t
      }(b.BasicEntity);
      t.schedule = new S('schedule', 'Schedule', M.activities)
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.userInventory = void 0;
      var i = a(10),
      r = n(i),
      s = a(1),
      o = n(s),
      u = a(4),
      l = n(u),
      c = function () {
        function e() {
          (0, o.default) (this, e),
          this.haveAutoPromote = !0,
          this.haveAutoResearch = !0,
          this.haveAutoBoost = !0,
          this.haveMinimalism = !1,
          this.haveShadyDoctor = !1
        }
        return (0, l.default) (
          e,
          [
            {
              key: 'updateAutos',
              value: function () {
              }
            },
            {
              key: 'initialize',
              value: function (e, t) {
              }
            },
            {
              key: 'addItem',
              value: function (e) {
              }
            },
            {
              key: 'have',
              value: function (e) {
                var t = !0,
                a = !1,
                n = void 0;
                try {
                  for (var i, s = (0, r.default) (this.items); !(t = (i = s.next()).done); t = !0) {
                    var o = i.value;
                    if (e.ItemId === o.ItemId) return !0
                  }
                } catch (e) {
                  a = !0,
                  n = e
                } finally {
                  try {
                    !t &&
                    s.return &&
                    s.return()
                  } finally {
                    if (a) throw n
                  }
                }
                return !1
              }
            }
          ]
        ),
        e
      }();
      t.userInventory = new c
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, a) {
      var n = a(3) (a(170), a(371), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      a(282);
      var n = a(3) (a(172), a(364), 'data-v-27702062', null);
      e.exports = n.exports
    },
    function (e, t, a) {
      function n(e) {
        return a(i(e))
      }
      function i(e) {
        return r[e] ||
        function () {
          throw new Error('Cannot find module \'' + e + '\'.')
        }()
      }
      var r = {
        './happy_emoji.svg': 305,
        './neutral_emoji.svg': 306,
        './sad_emoji.svg': 307
      };
      n.keys = function () {
        return Object.keys(r)
      },
      n.resolve = i,
      e.exports = n,
      n.id = 140
    },
    function (e, t) {
      'use strict';
      !function (e) {
        function t() {
          do l = 2147483647 > l ? l + 1 : 0;
          while (n[c](l));
          return l
        }
        var a,
        n = {},
        i = window,
        r = console,
        s = (Math, 'postMessage'),
        o = 'HackTimer.js by turuslan: ',
        u = 'Initialisation failed',
        l = 0,
        c = 'hasOwnProperty',
        d = [].slice,
        f = i.Worker;
        if (!/MSIE 10/i.test(navigator.userAgent)) try {
          e = i.URL.createObjectURL(
            new Blob(
              ['var f={},p=postMessage,r=\'hasOwnProperty\';onmessage=function(e){var d=e.data,i=d.i,t=d[r](\'t\')?d.t:0;switch(d.n){case\'a\':f[i]=setInterval(function(){p(i)},t);break;case\'b\':if(f[r](i)){clearInterval(f[i]);delete f[i]}break;case\'c\':f[i]=setTimeout(function(){p(i);if(f[r](i))delete f[i]},t);break;case\'d\':if(f[r](i)){clearTimeout(f[i]);delete f[i]}break}}']
            )
          )
        } catch (e) {
        }
        if ('undefined' != typeof f) try {
          a = new f(e),
          i.setInterval = function (e, i) {
            var r = t();
            return n[r] = {
              c: e,
              p: d.call(arguments, 2)
            },
            a[s]({
              n: 'a',
              i: r,
              t: i
            }),
            r
          },
          i.clearInterval = function (e) {
            n[c](e) &&
            (delete n[e], a[s]({
              n: 'b',
              i: e
            }))
          },
          i.setTimeout = function (e, i) {
            var r = t();
            return n[r] = {
              c: e,
              p: d.call(arguments, 2),
              t: !0
            },
            a[s]({
              n: 'c',
              i: r,
              t: i
            }),
            r
          },
          i.clearTimeout = function (e) {
            n[c](e) &&
            (delete n[e], a[s]({
              n: 'd',
              i: e
            }))
          },
          a.onmessage = function (e) {
            var t,
            a,
            s = e.data;
            if (
              n[c](s) &&
              (a = n[s], t = a.c, a[c]('t') && delete n[s]),
              'string' == typeof t
            ) try {
              t = new Function(t)
            } catch (e) {
              r.log(o + 'Error parsing callback code string: ', e)
            }
            'function' == typeof t &&
            t.apply(i, a.p)
          },
          a.onerror = function (e) {
            r.log(e)
          },
          r.log(o + 'Initialisation succeeded')
        } catch (e) {
          r.log(o + u),
          r.error(e)
        } else r.log(o + u + ' - HTML5 Web Worker is not supported')
      }('HackTimerWorker.min.js')
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.AG = t.Achievement = void 0;
      var i = a(10),
      r = n(i),
      s = a(2),
      o = n(s),
      u = a(4),
      l = n(u),
      c = a(6),
      d = n(c),
      f = a(8),
      v = n(f),
      h = a(5),
      p = n(h),
      m = a(1),
      y = n(m),
      _ = a(9),
      g = a(20),
      b = a(17),
      M = a(39),
      k = a(28),
      w = a(65),
      x = function e() {
        (0, y.default) (this, e),
        this.completed = !1,
        this.completedAt = - 1
      },
      P = (
        t.Achievement = function (e) {
          function t(e, a, n, i, r) {
            var s = arguments.length > 5 &&
            void 0 !== arguments[5] ? arguments[5] : function (e, t) {
              return e >= t
            },
            u = arguments.length > 6 &&
            void 0 !== arguments[6] ? arguments[6] : 1;
            (0, y.default) (this, t);
            var l = (0, d.default) (this, (t.__proto__ || (0, o.default) (t)).call(this, e, a, new x));
            return l.description = n,
            l.valueFun = i,
            l.goal = r,
            l.currentValue = l.valueFun(),
            l.checkFun = s,
            l.logUnlock = !0,
            l.reward = u,
            l
          }
          return (0, p.default) (t, e),
          (0, l.default) (
            t,
            [
              {
                key: 'check',
                value: function () {
                  return (0, g.isNumber) (this.valueFun()) &&
                  this.checkFun(this.valueFun(), this.goal)
                }
              },
              {
                key: 'update',
                value: function () {
                  this.currentValue = this.valueFun(),
                  !this.state.completed &&
                  this.check() &&
                  (
                    this.state.completed = !0,
                    this.state.completedAt = [
                      M.currentLife.getValue(),
                      b.currentDay.getValue()
                    ],
                    k.journalPane.notify(),
                    k.achievementPane.notify(),
                    this.getReward()
                  ),
                  this.state.completed &&
                  !this.check() &&
                  (this.state.completed = !1),
                  (0, v.default) (
                    t.prototype.__proto__ ||
                    (0, o.default) (t.prototype),
                    'update',
                    this
                  ).call(this)
                }
              },
              {
                key: 'getReward',
                value: function () {
                  w.saver.requestSave()
                }
              },
              {
                key: 'prestige',
                value: function () {
                  this.lifetime &&
                  (this.state.completed = !1, this.state.completedAt = - 1),
                  (0, v.default) (
                    t.prototype.__proto__ ||
                    (0, o.default) (t.prototype),
                    'prestige',
                    this
                  ).call(this)
                }
              }
            ]
          ),
          t
        }(_.BasicEntity),
        function e() {
          (0, y.default) (this, e)
        }
      );
      t.AG = function (e) {
        function t(e, a, n) {
          (0, y.default) (this, t);
          var i = (0, d.default) (this, (t.__proto__ || (0, o.default) (t)).call(this, e, a, new P));
          i.achievements = n;
          var s = !0,
          u = !1,
          l = void 0;
          try {
            for (var c, f = (0, r.default) (n); !(s = (c = f.next()).done); s = !0) {
              var v = c.value;
              v.subscribe(i)
            }
          } catch (e) {
            u = !0,
            l = e
          } finally {
            try {
              !s &&
              f.return &&
              f.return()
            } finally {
              if (u) throw l
            }
          }
          return i.completed = 0,
          i.total = 0,
          i
        }
        return (0, p.default) (t, e),
        (0, l.default) (
          t,
          [
            {
              key: 'update',
              value: function () {
                this.completed = 0,
                this.total = 0;
                var e = !0,
                a = !1,
                n = void 0;
                try {
                  for (
                    var i,
                    s = (0, r.default) (this.achievements);
                    !(e = (i = s.next()).done);
                    e = !0
                  ) {
                    var u = i.value;
                    this.total += 1,
                    u.state.completed &&
                    (this.completed += 1)
                  }
                } catch (e) {
                  a = !0,
                  n = e
                } finally {
                  try {
                    !e &&
                    s.return &&
                    s.return()
                  } finally {
                    if (a) throw n
                  }
                }(0, v.default) (
                  t.prototype.__proto__ ||
                  (0, o.default) (t.prototype),
                  'update',
                  this
                ).call(this)
              }
            }
          ]
        ),
        t
      }(_.BasicEntity)
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.autoplay = t.autoplayLifestyle = t.autoplayActivityDuration = t.autoplayResearch = t.autoPromoteFun = t.autoplayJob = t.autoBoostFun = t.findBestJob = void 0;
      var i = a(10),
      r = n(i),
      s = a(20),
      o = a(76),
      u = a(29),
      l = a(64),
      c = a(38),
      d = a(22),
      f = a(101),
      v = a(34),
      h = t.findBestJob = function (e, t) {
        var a = null,
        n = - 1,
        i = !0,
        s = !1,
        o = void 0;
        try {
          for (var u, l = (0, r.default) (e); !(i = (u = l.next()).done); i = !0) {
            var c = u.value,
            d = !0,
            f = !1,
            v = void 0;
            try {
              for (var h, p = (0, r.default) (c.jobs); !(d = (h = p.next()).done); d = !0) {
                var m = h.value;
                if (m.unlocked() && !(m.xp.state.level > t)) {
                  var y = m.income.base;
                  y > n &&
                  (n = y, a = m)
                }
              }
            } catch (e) {
              f = !0,
              v = e
            } finally {
              try {
                !d &&
                p.return &&
                p.return()
              } finally {
                if (f) throw v
              }
            }
          }
        } catch (e) {
          s = !0,
          o = e
        } finally {
          try {
            !i &&
            l.return &&
            l.return()
          } finally {
            if (s) throw o
          }
        }
        return a
      },
      p = t.autoBoostFun = function (e) {
        var t = !0;
        if (e.autoBoostStack.getValue()) {
          var a = !0,
          n = !1,
          i = void 0;
          try {
            for (var s, o = (0, r.default) (f.boosts); !(a = (s = o.next()).done); a = !0) {
              var u = s.value;
              (
                e.autoBoostExclConference.getValue() ||
                'boost_conference' !== u.id
              ) &&
              (t = t && ('available' === u.currentState() || !u.unlocked()))
            }
          } catch (e) {
            n = !0,
            i = e
          } finally {
            try {
              !a &&
              o.return &&
              o.return()
            } finally {
              if (n) throw i
            }
          }
          if (t) if (e.autoBoostJustPause.getValue()) e.paused.setValue(!0),
          v.messageBox.addMessage('Auto-Pause: Boosts ready!', 'bell');
           else {
            var l = !0,
            c = !1,
            d = void 0;
            try {
              for (var h, p = (0, r.default) (f.boosts); !(l = (h = p.next()).done); l = !0) {
                var m = h.value;
                m.activate()
              }
            } catch (e) {
              c = !0,
              d = e
            } finally {
              try {
                !l &&
                p.return &&
                p.return()
              } finally {
                if (c) throw d
              }
            }
          }
        } else {
          var y = !0,
          _ = !1,
          g = void 0;
          try {
            for (var b, M = (0, r.default) (f.boosts); !(y = (b = M.next()).done); y = !0) {
              var k = b.value;
              if ('available' === k.currentState()) {
                if (e.autoBoostJustPause.getValue()) return e.paused.setValue(!0),
                void v.messageBox.addMessage('Auto-Pause: Boost ready!', 'bell');
                k.activate()
              }
            }
          } catch (e) {
            _ = !0,
            g = e
          } finally {
            try {
              !y &&
              M.return &&
              M.return()
            } finally {
              if (_) throw g
            }
          }
        }
      },
      m = t.autoplayJob = function (e) {
        var t = h(e.careers, 10);
        t ? (0, o.setActiveJob) (t) : (t = h(e.careers, 100000), (0, s.assert) (t), (0, o.setActiveJob) (t))
      },
      y = (
        t.autoPromoteFun = function (e) {
          var t = u.currentJobContainer.job;
          if (!(t.xp.state.level < e.autoPromoteMinLevel.getValue())) {
            var a = t.career,
            n = t,
            i = !1,
            s = !0,
            l = !1,
            c = void 0;
            try {
              for (var d, f = (0, r.default) (a.jobs); !(s = (d = f.next()).done); s = !0) {
                var h = d.value;
                if (i) {
                  if (
                    h.unlocked() &&
                    (n = h, n.xp.state.level <= e.autoPromoteMinLevel.getValue())
                  ) break
                } else i = h === t
              }
            } catch (e) {
              l = !0,
              c = e
            } finally {
              try {
                !s &&
                f.return &&
                f.return()
              } finally {
                if (l) throw c
              }
            }
            n !== u.currentJobContainer.job &&
            (
              e.autoPromoteJustPause.getValue() ? (
                e.paused.setValue(!0),
                v.messageBox.addMessage('Auto-Pause: Promotion available!', 'bell')
              ) : (0, o.setActiveJob) (n)
            )
          }
        },
        t.autoplayResearch = function (e) {
          if (e.research.unlocked()) {
            var t = 9999999,
            a = null,
            n = !0,
            i = !1,
            s = void 0;
            try {
              for (var u, l = (0, r.default) (e.fields); !(n = (u = l.next()).done); n = !0) {
                var c = u.value;
                if (c.unlocked()) {
                  var d = !0,
                  f = !1,
                  v = void 0;
                  try {
                    for (var h, p = (0, r.default) (c.areas); !(d = (h = p.next()).done); d = !0) {
                      var m = h.value;
                      m.unlocked() &&
                      m.xp.state.level / m.importance < t &&
                      (t = m.xp.state.level / m.importance, a = m)
                    }
                  } catch (e) {
                    f = !0,
                    v = e
                  } finally {
                    try {
                      !d &&
                      p.return &&
                      p.return()
                    } finally {
                      if (f) throw v
                    }
                  }
                }
              }
            } catch (e) {
              i = !0,
              s = e
            } finally {
              try {
                !n &&
                l.return &&
                l.return()
              } finally {
                if (i) throw s
              }
            }(0, o.setActiveResearch) (a)
          }
        }
      ),
      _ = t.autoplayActivityDuration = function (e) {
        if (!c.money.austerityMode) {
          var t = !1;
          if (t) for (var a = 0; a < 100; a++) {
            var n = !0,
            i = !1,
            s = void 0;
            try {
              for (
                var u,
                l = (0, r.default) (e.activities);
                !(n = (u = l.next()).done);
                n = !0
              ) {
                var f = u.value;
                f.durationByUser &&
                (0, o.changeActivityTime) (e, f, Math.floor(3000 * Math.random() - 1500))
              }
            } catch (e) {
              i = !0,
              s = e
            } finally {
              try {
                !n &&
                l.return &&
                l.return()
              } finally {
                if (i) throw s
              }
            }
          }
          var v = !0,
          h = !1,
          p = void 0;
          try {
            for (
              var m,
              y = (0, r.default) (e.activities);
              !(v = (m = y.next()).done);
              v = !0
            ) {
              var _ = m.value;
              _.unlocked() &&
              _.durationByUser &&
              (
                _.duration.effective > 300 &&
                (0, o.changeActivityTime) (e, _, - 60),
                0 === _.duration.effective &&
                (0, o.changeActivityTime) (e, _, 60)
              )
            }
          } catch (e) {
            h = !0,
            p = e
          } finally {
            try {
              !v &&
              y.return &&
              y.return()
            } finally {
              if (h) throw p
            }
          }(0, o.changeActivityTime) (e, d.sleep, 540),
          (0, o.changeActivityTime) (e, d.research, 500)
        }
      },
      g = t.autoplayLifestyle = function (e) {
      };
      t.autoplay = function (e) {
        m(e),
        p(e),
        e.time.currentDay.getValue() % 100 === 0 &&
        (y(e), g(e)),
        _(e),
        e.time.currentDay.getValue() > 15330 &&
        l.prestiger.prestige()
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.Boost = void 0;
      var i = a(2),
      r = n(i),
      s = a(4),
      o = n(s),
      u = a(6),
      l = n(u),
      c = a(8),
      d = n(c),
      f = a(5),
      v = n(f),
      h = a(1),
      p = n(h),
      m = a(9),
      y = a(17),
      _ = a(28),
      g = function e() {
        (0, p.default) (this, e),
        this.lastExecuted = - 9999,
        this.selected = !1
      };
      t.Boost = function (e) {
        function t(e, a, n, i, s) {
          (0, p.default) (this, t);
          var o = (0, l.default) (this, (t.__proto__ || (0, r.default) (t)).call(this, e, a, new g));
          return o.description = n,
          o.duration = i,
          o.cooldown = s,
          o.available = !1,
          y.currentDay.subscribe(o),
          o
        }
        return (0, v.default) (t, e),
        (0, o.default) (
          t,
          [
            {
              key: 'activate',
              value: function () {
                this.unlocked() &&
                this.cooldownLeft() <= 0 &&
                (
                  this.state.selected = !0,
                  this.state.lastExecuted = y.currentDay.getValue(),
                  this.update()
                )
              }
            },
            {
              key: 'currentState',
              value: function () {
                return this.state.selected ? 'active' : this.cooldownLeft() > 0 ? 'cooldown' : this.unlocked() ? 'available' : 'locked'
              }
            },
            {
              key: 'buttonState',
              value: function () {
                return this.state.selected ? 'btn-success' : this.cooldownLeft() > 0 ? 'btn-warning' : this.unlocked() ? 'btn-primary' : 'btn-secondary'
              }
            },
            {
              key: 'daysLeft',
              value: function () {
                return Math.max(
                  0,
                  this.duration - (y.currentDay.getValue() - this.state.lastExecuted)
                )
              }
            },
            {
              key: 'cooldownLeft',
              value: function () {
                return Math.max(
                  0,
                  this.cooldown - (y.currentDay.getValue() - this.state.lastExecuted)
                )
              }
            },
            {
              key: 'update',
              value: function () {
                this.available = !this.state.selected &&
                y.currentDay.getValue() - this.state.lastExecuted > this.cooldown,
                this.state.selected &&
                this.daysLeft() <= 0 &&
                (this.state.selected = !1),
                1 === this.cooldownLeft() &&
                (_.boostsPane.notify(), _.lifestylePane.notify()),
                (0, d.default) (
                  t.prototype.__proto__ ||
                  (0, r.default) (t.prototype),
                  'update',
                  this
                ).call(this)
              }
            },
            {
              key: 'prestige',
              value: function () {
                this.state.lastExecuted = - 9999,
                this.state.selected = !1
              }
            },
            {
              key: 'onLoad',
              value: function () {
                this.state.lastExecuted > y.currentDay.getValue() &&
                (this.state.lastExecuted = - 9999, this.state.selected = !1)
              }
            }
          ]
        ),
        t
      }(m.BasicEntity)
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.anomalyEvent = void 0;
      var n = a(58),
      i = a(11),
      r = a(42),
      s = (0, n.createNode) (
        'event_a13b',
        'You start researching mirrored laser guns.',
        null
      ),
      o = (0, n.createNode) (
        'event_a13b0',
        'You need to be CEO of Dark Plateau to build weapons.',
        s
      ),
      u = (0, n.createNode) (
        'event_a13',
        'Consider destroying it. But there might be more than one.',
        o
      ),
      l = (0, n.createNode) (
        'event_a12',
        'Maybe that thing is responsible for the loop you\'re stuck in.',
        u
      ),
      c = (0, n.createNode) (
        'event_a11',
        'Furthermore, it seems to move at high speed towards the solar system.',
        l
      ),
      d = (0, n.createNode) (
        'event_a10',
        'There are power generators, engines, and thousands of moving organic entities.',
        c
      ),
      f = (0, n.createNode) ('event_a9', 'In SciFi-terms, it looks like a spaceship.', d),
      v = (0, n.createNode) (
        'event_a8',
        'By reversing formulas for dark matter concentration, you create a model of the mirror-matter anomaly.',
        f
      ),
      h = (0, n.createNode) (
        'event_a7',
        'Theory: the anomaly is induced by mirror-matter, similar in structure to ordinary matter yet undetectable.',
        v
      ),
      p = (0, n.createNode) ('event_a5', 'This is highly unusual.', h),
      m = (0, n.createNode) (
        'event_a4',
        'Such patterns can be induced by ordinary matter, but the sector appears empty.',
        p
      ),
      y = (0, n.createNode) (
        'event_a3',
        'The dark matter in this sector seems to follow geometric patterns.',
        m
      ),
      _ = (0, n.createNode) (
        'event_a2',
        '\'Running DM Scanner 7.42...WARNING: major formula mismatch in Sector 7G\'',
        y
      ),
      g = (0, n.createNode) (
        'event_a1',
        'You\'re testing a new formula for dark matter concentration in space.',
        _
      ),
      b = [
        g,
        _,
        y,
        m,
        p,
        h,
        v,
        f,
        d,
        c,
        l,
        u,
        o,
        s
      ],
      M = t.anomalyEvent = (0, n.createEvent) ('event_anomaly', 'First Contact', b);
      (0, i.createLevelLock) (r.dmScanner, M, 10),
      (0, i.createLevelLock) (r.dmScanner, g, 10),
      (0, i.createLevelLock) (r.dmScanner, _, 15),
      (0, i.createLevelLock) (r.dmScanner, y, 45),
      (0, i.createLevelLock) (r.anomaly, p, 5),
      (0, i.createLevelLock) (r.anomaly, h, 95),
      (0, i.createLevelLock) (r.mirrorMatter, v, 110),
      (0, i.createLevelLock) (r.demirrorAnomaly, f, 190),
      (0, i.createLevelLock) (r.studyMirroredShip, d, 240),
      (0, i.createLevelLock) (r.laserGun, s, 1)
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.dp = void 0;
      var n = a(58),
      i = a(11),
      r = a(17),
      s = a(39),
      o = a(150),
      u = a(114),
      l = a(49),
      c = (0, n.createNode) (
        'event_dp_success2',
        'Success! They reply with a job offer.',
        null,
        function () {
          return o.unlockedDarkPlateau.setValue(s.currentLife.getValue())
        }
      ),
      d = (0, n.createNode) (
        'event_dp_failure',
        '...but you are just not good enough at quantum physics (Level 50 required at age 28).',
        null
      ),
      f = (0, n.createNode) ('event_dp_success', 'Looks right, send it.', c),
      v = function () {
        return u.qm.xp.state.level >= 50 ? 0 : 1
      },
      h = (0, n.createAutoChoiceNode) ('event_dp4', 'You try...', v, [
        f,
        d
      ]),
      p = (0, n.createNode) ('event_dp3', 'Looks like you are supposed to solve them.', h),
      m = (0, n.createNode) (
        'event_dp2',
        'It contains some complicated quantum physics equations.',
        p
      ),
      y = (0, n.createNode) ('event_dp1', 'An email from a company called Dark Plateau.', m),
      _ = [
        y,
        m,
        p,
        h,
        f,
        d,
        c
      ],
      g = t.dp = (0, n.createEvent) ('event_dp', 'Dark Plateau?', _);
      (0, i.createMinimumValueLock) (r.currentYear, g, 10),
      (0, i.createMinimumValueLock) (r.currentYear, h, 10),
      (0, i.createCustomLock) (
        [o.unlockedDarkPlateau],
        g,
        function () {
          return o.unlockedDarkPlateau.getValue() === - 1 ||
          o.unlockedDarkPlateau.getValue() === s.currentLife.getValue()
        }
      ),
      (0, i.createCustomLock) (
        [o.unlockedDarkPlateau],
        l.darkPlateau,
        function () {
          return o.unlockedDarkPlateau.getValue() > 0
        }
      ),
      (0, i.createCustomLock) (
        [o.unlockedDarkPlateau],
        l.darkPlateau.jobs[0],
        function () {
          return o.unlockedDarkPlateau.getValue() > 0
        }
      )
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.events = void 0;
      var n = a(148),
      i = a(102),
      r = a(146),
      s = a(145);
      t.events = [
        n.groundHogging,
        s.anomalyEvent,
        r.dp,
        i.lostWallet
      ]
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.groundHogging = t.prestigeAction = void 0;
      var n = a(58),
      i = a(64),
      r = a(65),
      s = a(11),
      o = a(17),
      u = a(39),
      l = a(28),
      c = a(59),
      d = a(106),
      f = a(57),
      v = a(75),
      h = a(34),
      p = t.prestigeAction = function () {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) ||
        arguments[0];
        (0, l.selectPane) (l.journalPane),
        (0, l.selectPane) (l.lifeSummaryPane),
        i.prestiger.prestige(e),
        h.messageBox.addMessage(
          'You just turned 18. Again. Expertise from previous lives makes things easier this time.'
        ),
        d.pauseOnPrestige.getValue() &&
        c.paused.setValue(!0),
        window.kongregate.services.isGuest() ||
        window.kongregate.stats.submit('Groundhogs', u.currentLife.getValue()),
        r.saver.requestSave()
      },
      m = function () {
        h.messageBox.addMessage(
          'WARNING: EXPERIENCING MAJOR TIME DILATION. CHECK YOUR EVENTS.',
          'bell',
          'alert-danger'
        )
      },
      y = (0, n.createNode) ('event_groundhog_prestige', 'Here we go!', null, p),
      _ = (0, n.createPath) ('replyGroundhog', 'Reply "groundhog"', y),
      g = (0, n.createNode) ('event_progressgroundhog_prestige', 'Here we go!', null, p),
      b = (0, n.createPath) ('progressreplyGroundhog', 'Reply "groundhog"', g),
      M = (0, n.createUserChoiceNode) (
        'progressgroundhoggingRoot',
        '\'Reply "groundhog" to try again.\'',
        [
          b
        ]
      ),
      k = (0, n.createNode) (
        'event_progressgroundhog2',
        'But the alien fleet is large, and age will catch up with you. Start over when your progress is slowing down.',
        M
      ),
      w = (0, n.createNode) ('event_progressgroundhog1', 'You are making progress!', k),
      x = (0, n.createUserChoiceNode) (
        'groundhoggingRoot',
        'A message on your phone: \'They are here. Reply "groundhog" to try again.\'',
        [
          _
        ]
      ),
      P = (0, n.createNode) (
        'event_groundhog2',
        'Every day appears to last longer than the day before.',
        x
      ),
      L = (0, n.createNode) ('event_groundhog1', 'Something feels wrong...', P, m),
      C = function () {
        return f.battle.state.enemyReachedSolarSystem ? 0 : 1
      },
      S = (0, n.createAutoChoiceNode) ('event_gh_ano', '...', C, [
        L,
        w
      ]),
      A = [
        S,
        L,
        P,
        x,
        w,
        k,
        M,
        g,
        y
      ],
      T = t.groundHogging = (0, n.createEvent) ('groundhogging', 'Groundhog', A),
      E = function () {
        return f.battle.state.enemyReachedSolarSystem ||
        o.currentYear.getValue() > 43 ||
        v.DEVMODE
      };
      (0, s.createCustomLock) ([o.currentYear,
      f.battle], T, E)
    },
    function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      t.exponentialProgression = function (e, t) {
        for (var a = [
          1
        ], n = 1; n < e; n++) a.push(a[n - 1] * t);
        return a
      }
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.unlockedDarkPlateau = void 0;
      var n = a(21),
      i = t.unlockedDarkPlateau = new n.NumberStateEntity('unlocked_dark_plateau', 'Unlocked Dark Plateau', - 1, !1);
      i.resetOnGrandPrestige = !0
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.delta = void 0;
      var n = a(21),
      i = t.delta = new n.NumberStateEntity('schedule_delta', 'Delta', 60, !1, 0, 1440);
      i.onLoad = function () {
        i.setValue(60)
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.keyBindings = void 0;
      var i = a(2),
      r = n(i),
      s = a(6),
      o = n(s),
      u = a(5),
      l = n(u),
      c = a(1),
      d = n(c),
      f = a(9),
      v = function e() {
        (0, d.default) (this, e),
        this.tlp = 'qwertyui',
        this.slp = 'asdfghj',
        this.boost = 'b',
        this.pause = 'p',
        this.speedup = 'n'
      },
      h = function (e) {
        function t() {
          return (0, d.default) (this, t),
          (0, o.default) (
            this,
            (t.__proto__ || (0, r.default) (t)).call(this, 'keybindings', 'Key Bindings', new v)
          )
        }
        return (0, l.default) (t, e),
        t
      }(f.BasicEntity);
      t.keyBindings = new h
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.business = void 0;
      var n = a(62),
      i = a(110),
      r = a(109);
      t.business = new n.Field('business', 'Business', [
        i.leadership,
        r.investment
      ])
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.researchQueue = void 0;
      var i = a(81),
      r = n(i),
      s = a(2),
      o = n(s),
      u = a(4),
      l = n(u),
      c = a(6),
      d = n(c),
      f = a(5),
      v = n(f),
      h = a(10),
      p = n(h),
      m = a(1),
      y = n(m),
      _ = a(99),
      g = n(_),
      b = a(9),
      M = a(79),
      k = a(76),
      w = a(104),
      x = a(59),
      P = a(34),
      L = function e(t, a, n, i) {
        (0, y.default) (this, e),
        this.id = t,
        this.name = a,
        this.internalId = n,
        this.goal = - 1,
        this.active = !1,
        this.unlocked = i,
        this.finished = !1
      },
      C = function e() {
        (0, y.default) (this, e),
        this.items = []
      },
      S = function (e) {
        var t = !0,
        a = !1,
        n = void 0;
        try {
          for (var i, r = (0, p.default) (M.areas); !(t = (i = r.next()).done); t = !0) {
            var s = i.value;
            if (s.id === e) return s
          }
        } catch (e) {
          a = !0,
          n = e
        } finally {
          try {
            !t &&
            r.return &&
            r.return()
          } finally {
            if (a) throw n
          }
        }
        return null
      },
      A = function (e, t, a) {
        var n = e[t];
        g.default.set(e, t, e[a]),
        g.default.set(e, a, n)
      },
      T = function (e) {
        function t() {
          (0, y.default) (this, t);
          var e = (0, d.default) (
            this,
            (t.__proto__ || (0, o.default) (t)).call(this, 'researchqueue', 'Research Queue', new C)
          );
          return e.areas = [],
          e.internalId = 0,
          e
        }
        return (0, v.default) (t, e),
        (0, l.default) (
          t,
          [
            {
              key: 'addItem',
              value: function (e) {
                this.state.items.push(new L(e.id, e.name, this.internalId, e.unlocked())),
                this.areas.push(e),
                this.internalId += 1
              }
            },
            {
              key: 'removeItem',
              value: function (e) {
                for (var t = 0; t < this.state.items.length; t++) if (this.state.items[t].internalId === e) {
                  this.state.items.splice(t, 1),
                  this.areas.splice(t, 1);
                  break
                }
              }
            },
            {
              key: 'swap',
              value: function (e, t) {
                A(this.state.items, e, t),
                A(this.areas, e, t)
              }
            },
            {
              key: 'updateOrder',
              value: function (e) {
                this.state.items = e,
                this.areas = this.state.items.map(function (e) {
                  return S(e.id)
                })
              }
            },
            {
              key: 'moveUp',
              value: function (e) {
                for (var t = 1; t < this.state.items.length; t++) if (this.state.items[t].internalId === e) {
                  this.swap(t, t - 1);
                  break
                }
              }
            },
            {
              key: 'moveDown',
              value: function (e) {
                for (var t = 0; t < this.state.items.length - 1; t++) if (this.state.items[t].internalId === e) {
                  this.swap(t, t + 1);
                  break
                }
              }
            },
            {
              key: 'advance',
              value: function () {
                for (var e = !1, t = 0; t < this.state.items.length; t++) {
                  var a = this.state.items[t],
                  n = this.areas[t];
                  a.unlocked = n.unlocked(),
                  a.finished = n.xp.state.level >= a.goal,
                  e ||
                  a.finished ||
                  !a.unlocked ? a.active = !1 : (
                    !a.active &&
                    w.autoResearchJustPause.getValue() &&
                    (
                      x.paused.toggleValue(),
                      P.messageBox.addMessage('Auto-Pause: Current Research finished!', 'bell')
                    ),
                    (0, k.setActiveResearch) (n),
                    a.active = !0,
                    e = !0
                  )
                }
              }
            },
            {
              key: 'clear',
              value: function () {
                this.state.items = [],
                this.areas = []
              }
            },
            {
              key: 'onLoad',
              value: function () {
                this.state.items = this.state.items.filter(function (e) {
                  return S(e.id)
                }),
                this.areas = this.state.items.map(function (e) {
                  return S(e.id)
                }),
                this.internalId = Math.max.apply(
                  Math,
                  [
                    0
                  ].concat(
                    (0, r.default) (this.state.items.map(function (e) {
                      return e.internalId
                    }))
                  )
                ) + 1,
                this.internalId = this.internalId ? this.internalId : 0
              }
            }
          ]
        ),
        t
      }(b.BasicEntity);
      t.researchQueue = new T
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.selfImprovement = void 0;
      var n = a(115),
      i = a(117),
      r = a(116),
      s = a(62);
      t.selfImprovement = new s.Field(
        'selfimprovement',
        'Self Improvement',
        [
          i.studySkills,
          n.getStuffDone,
          r.nutrition
        ]
      )
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.JobLevelModifier = void 0;
      var i = a(2),
      r = n(i),
      s = a(1),
      o = n(s),
      u = a(4),
      l = n(u),
      c = a(6),
      d = n(c),
      f = a(8),
      v = n(f),
      h = a(5),
      p = n(h),
      m = a(12),
      y = a(161),
      _ = a(20);
      t.JobLevelModifier = function (e) {
        function t(e) {
          (0, o.default) (this, t);
          var a = (0, d.default) (
            this,
            (t.__proto__ || (0, r.default) (t)).call(this, e.id + 'jobLevelMod', 'Job Level', 10, 1)
          );
          return a.xp = e.xp,
          a.xp.dependants.push(a),
          a.update(),
          a
        }
        return (0, p.default) (t, e),
        (0, l.default) (
          t,
          [
            {
              key: 'update',
              value: function () {
                this.factor = 1 + Math.log(1 + this.xp.state.level) / Math.log(1 + y.doubleIncomeAtLevelStat.effective),
                (0, _.assert) ((0, _.isNumber) (this.factor)),
                (0, v.default) (
                  t.prototype.__proto__ ||
                  (0, r.default) (t.prototype),
                  'update',
                  this
                ).call(this)
              }
            }
          ]
        ),
        t
      }(m.MultModifier)
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.standardEnergyModifier = void 0;
      var i = a(2),
      r = n(i),
      s = a(1),
      o = n(s),
      u = a(4),
      l = n(u),
      c = a(6),
      d = n(c),
      f = a(8),
      v = n(f),
      h = a(5),
      p = n(h),
      m = a(12),
      y = a(43),
      _ = function (e) {
        function t() {
          (0, o.default) (this, t);
          var e = (0, d.default) (
            this,
            (t.__proto__ || (0, r.default) (t)).call(this, 'seMod', 'Energy', 0, y.energyStat.effective)
          );
          return y.energyStat.dependants.push(e),
          e.update(),
          e
        }
        return (0, p.default) (t, e),
        (0, l.default) (
          t,
          [
            {
              key: 'update',
              value: function () {
                this.factor = y.energyStat.effective,
                (0, v.default) (
                  t.prototype.__proto__ ||
                  (0, r.default) (t.prototype),
                  'update',
                  this
                ).call(this)
              }
            }
          ]
        ),
        t
      }(m.MultModifier);
      t.standardEnergyModifier = new _
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.setupGame = void 0;
      var i = a(10),
      r = n(i),
      s = a(210),
      o = n(s),
      u = a(44),
      l = a(12),
      c = a(22),
      d = a(159),
      f = a(11),
      v = a(50),
      h = a(51),
      p = a(17),
      m = a(38),
      y = a(66),
      _ = a(80),
      g = a(52),
      b = a(43),
      M = a(16),
      k = a(108),
      w = a(118),
      x = a(28),
      P = a(79),
      L = a(42),
      C = a(74),
      S = a(29),
      A = a(100),
      T = a(59),
      E = a(57),
      I = a(105),
      D = function () {
        var e = new l.MultModifier('dmtMod', 'Dark Matter Rituals', 10, 2);
        (0, f.createCustomLock) (
          [T.darkMatterTicks],
          e,
          function () {
            return T.darkMatterTicks.getValue() > 0
          }
        ),
        b.energyStat.addModifier(e)
      },
      j = function () {
        var e = new l.LevelAddModifier(
          'lt_research',
          'Research',
          10,
          L.loopTrapResearch.xp,
          0.01,
          function (e) {
            return 0.05 - 0.05 / (1 + (0, o.default) (e + 1))
          }
        );
        C.loopTrap.efficiency.addModifier(e);
        var t = new l.GenericAddModifier(
          'lt_alientech',
          'Alien Tech',
          11,
          E.battle,
          function (e) {
            return 0.05 - 0.05 / (1 + (0, o.default) (1 + e.state.enemiesDestroyed))
          }
        );
        C.loopTrap.efficiency.addModifier(t),
        (0, f.createLevelLock) (L.laserGun, x.lambdaPane, 1)
      },
      N = function () {
        var e = new w.PaneGroup(!0),
        t = !0,
        a = !1,
        n = void 0;
        try {
          for (var i, s = (0, r.default) (k.careers); !(t = (i = s.next()).done); t = !0) {
            var o = i.value,
            u = new w.Pane(o.id + '-pane', o.name, 'job-selector', e);
            u.state.selected = !0,
            u.career = o,
            (0, f.createUnlockedLock) (o, u)
          }
        } catch (e) {
          a = !0,
          n = e
        } finally {
          try {
            !t &&
            s.return &&
            s.return()
          } finally {
            if (a) throw n
          }
        }
        x.jobPane.subpanes = e.panes;
        var l = new w.PaneGroup(!0),
        c = !0,
        d = !1,
        v = void 0;
        try {
          for (var h, p = (0, r.default) (P.fields); !(c = (h = p.next()).done); c = !0) {
            var m = h.value,
            y = new w.Pane(m.id + '-pane', m.name, 'area-selector', l);
            y.field = m,
            y.state.selected = !0,
            (0, f.createUnlockedLock) (m, y)
          }
        } catch (e) {
          d = !0,
          v = e
        } finally {
          try {
            !c &&
            p.return &&
            p.return()
          } finally {
            if (d) throw v
          }
        }
        x.researchPane.subpanes = l.panes;
        var _ = new w.PaneGroup(!0),
        g = !0,
        b = !1,
        M = void 0;
        try {
          for (
            var L,
            C = (0, r.default) (A.achievements);
            !(g = (L = C.next()).done);
            g = !0
          ) {
            var S = L.value,
            T = new w.Pane(S.id + '-pane', S.name, 'ag-display', _);
            T.ag = S,
            T.state.selected = !1
          }
        } catch (e) {
          b = !0,
          M = e
        } finally {
          try {
            !g &&
            C.return &&
            C.return()
          } finally {
            if (b) throw M
          }
        }
        x.achievementPane.subpanes = _.panes
      },
      O = function () {
        var e = new l.StatEffectiveMultModifier(
          'research_hours_mod',
          'Hours',
          10,
          c.research.duration,
          function (e) {
            return e / 60
          }
        ),
        t = !0,
        a = !1,
        n = void 0;
        try {
          for (var i, s = (0, r.default) (P.areas); !(t = (i = s.next()).done); t = !0) {
            var o = i.value;
            o.xp.xpPerDayStat.addModifier(e)
          }
        } catch (e) {
          a = !0,
          n = e
        } finally {
          try {
            !t &&
            s.return &&
            s.return()
          } finally {
            if (a) throw n
          }
        }
        var u = new l.StatEffectiveMultModifier(
          'work_hours_mod',
          'Hours',
          10,
          c.work.duration,
          function (e) {
            return e / 60
          }
        ),
        d = !0,
        f = !1,
        v = void 0;
        try {
          for (var h, p = (0, r.default) (k.jobs); !(d = (h = p.next()).done); d = !0) {
            var m = h.value;
            m.xp.xpPerDayStat.addModifier(u)
          }
        } catch (e) {
          f = !0,
          v = e
        } finally {
          try {
            !d &&
            p.return &&
            p.return()
          } finally {
            if (f) throw v
          }
        }
      },
      B = function () {
        var e = new l.GenericAddModifier(
          'investment_income_per_day_mod',
          'Investments',
          2,
          m.money,
          function (e) {
            return e.getValue() * (Math.pow(1 + u.investmentReturnStat.effective, 1 / 365) - 1)
          }
        );
        u.dailyIncomeStat.addModifier(e),
        u.investmentReturnStat.subscribe(e)
      },
      R = function () {
        var e = function e(t) {
          return I.shadyDoctor.getValue() &&
          (t = Math.max(0, t - 10)),
          t < 22 ? 1.2 - 0.005 * t : t < 40 ? e(21) - 0.01 * (t - 21) : Math.max(0.01, e(39) - 0.02 * (t - 39))
        },
        t = new l.GenericMultModifier(
          'health_age',
          'Age',
          12,
          p.currentYear,
          function (t) {
            return e(t.getValue())
          }
        );
        _.healthStat.addModifier(t),
        t.explain = function () {
          var e = p.currentYear.getValue(),
          t = I.shadyDoctor.getValue();
          return t &&
          (e = Math.max(0, e - 10)),
          e < 22 ? t ? 'Age is no concern yet - my doc has some great stuff.' : 'Age is no concern yet.' : e < 40 ? t ? 'A few signs of aging, but the pills keep it at bay' : 'A few signs of aging.' : e < 57 ? t ? 'More signs of aging, despite the pills.' : 'More signs of aging.' : t ? 'Old age. The pills could not stop it.' : 'Old age.'
        },
        I.shadyDoctor.subscribe(_.healthStat);
        var a = new d.ExpMovAvg(
          'avg_sleep',
          'Average Sleep',
          c.sleep.duration,
          d.fiveYearAlpha,
          480,
          6
        ),
        n = function (e) {
          var t = e / 60;
          return t >= 8 ? 0.5 : t >= 5 ? (t - 5) / 6 : 0
        },
        i = new l.GenericAddModifier(
          'sleep_age',
          'Avg Sleep / recent years (Max 0.5)',
          2,
          a,
          function (e) {
            return n(a.state.value)
          }
        );
        _.healthStat.addModifier(i),
        i.explain = function () {
          var e = a.state.value / 60,
          t = e.toFixed(1) + ' hours of sleep/night over the last ~5 years. ';
          return t += e >= 8 ? 'Great!' : e >= 6.5 ? 'Good!' : 'Need more!'
        };
        var r = new l.StatEffectiveAddModifier('foodQualityMod', 'Food Quality', 3, g.foodQualityStat);
        _.healthStat.addModifier(r),
        r.explain = function () {
          return g.foodQualityStat.effective < 0.7 ? 'Not exactly great food.' : g.foodQualityStat.effective < 1.6 ? 'Proper food!' : g.foodQualityStat.effective < 2.5 ? 'Pretty, pretty good food!' : g.foodQualityStat.effective < 3.5 ? 'Great Food!' : 'Not sure what I\'m eating, but it\'s pretty amazing.'
        }
      },
      G = function () {
        var e = new l.GenericAddModifier(
          'happinessFromHomeFactorMod',
          'Home (Max 0.6)',
          1,
          v.currentHomeContainer,
          function (e) {
            return (0, h.homeToHappinessFun) (e.home.quality.effective)
          }
        );
        y.happinessStat.addModifier(e),
        e.explain = function () {
          var e = I.minimalism.getValue() ? 5 : 0,
          t = I.minimalism.getValue() ? ' (Minimalism active)' : '',
          a = Math.floor(p.currentYear.getValue() / (5 + e)),
          n = v.currentHomeContainer.home.quality.effective,
          i = n - a;
          return i >= 1 ? 'Nice home.' + t : i <= - 1 ? 'I want a nicer home.' + t : 'Content about my home.' + t
        },
        I.minimalism.subscribe(y.happinessStat),
        p.currentYear.subscribe(y.happinessStat);
        var t = 0.5,
        a = function (e) {
          var a = e / 60;
          return a >= 9 ? t : a > 4 ? t * (a - 4) / 5 : 0
        },
        n = new l.StatEffectiveAddModifier(
          'happinessFromSleepHoursMod',
          'Sleep (Max 0.5)',
          1,
          c.sleep.duration,
          a
        );
        y.happinessStat.addModifier(n),
        n.explain = function () {
          return c.sleep.duration.effective >= 540 ? 'Definitely getting enough sleep' : c.sleep.duration.effective <= 300 ? 'Must...sleep.' : 'Just enough sleep.'
        };
        var i = new l.MultModifier('sleepDeprivation', 'Sleep Deprivation', 10, 0);
        y.happinessStat.addModifier(i);
        var r = function () {
          return c.sleep.duration.effective < 240
        };
        (0, f.createCustomLock) ([c.sleep.duration], i, r),
        i.explain = function () {
          return r() ? 'Sleep Deprivation.' : ''
        };
        var s = 10000,
        o = new M.Stat(
          'happinessFromExpenseRatioStat',
          'Happiness from Expense Ratio',
          0.3,
          2
        ),
        d = function (e) {
          var t = I.minimalism.getValue() ? 0.5 : 1,
          a = (0.95 - 0.8 * Math.min(s, u.dailyIncomeStat.effective) / s) * t;
          return e <= 1 &&
          u.dailyExpensesStat.effective > s ? 1 : e > 1.05 ? 1 / Math.pow(e, 3) : e > a ? 1 : Math.pow(Math.max(0, e) / a, 2)
        },
        m = new l.StatEffectiveMultModifier(
          'expenseRatioHappinessMod',
          'Expense Ratio',
          10,
          u.expenseRatioStat,
          d
        );
        o.addModifier(m);
        var _ = new l.StatEffectiveAddModifier(
          'happinessFromExpenseRatioMod',
          'Happiness from Expense Ratio (Max: 0.3)',
          1,
          o
        );
        y.happinessStat.addModifier(_),
        _.explain = function () {
          var e = u.expenseRatioStat.effective,
          t = I.minimalism.getValue(),
          a = t ? ' (Minimalism active)' : '',
          n = t ? 0.5 : 1,
          i = (0.95 - 0.8 * Math.min(s, u.dailyIncomeStat.effective) / s) * n;
          return e <= 1 &&
          u.dailyExpensesStat.effective > s ? 'Happy about my spending.' + a : e < 0.9 * i ? t ? 'Even as a minimalist, I would like some nicer things...' : 'Could afford nicer things...' : e > 1.2 ? 'Spending way too much.' + a : e <= 1.05 ? 'Happy about my spending.' + a : 'Spending a little too much maybe.' + a
        },
        I.minimalism.subscribe(o);
        var g = new M.Stat('totalWorkingHours', 'Working, studying, researching', 0, 2),
        b = new l.StatEffectiveAddModifier('workHoursMod', 'Working', 1, c.work.duration),
        k = new l.StatEffectiveAddModifier('researchHoursMod', 'Researching', 1, c.research.duration),
        w = new l.StatEffectiveAddModifier('choresHoursMod', 'Chores', 1, c.chores.duration);
        g.addModifier(b),
        g.addModifier(k),
        g.addModifier(w);
        var x = new l.StatEffectiveAddModifier(
          'happinessFromWorkLifeBalanceMod',
          'Work-Life Balance (Max: 0.6)',
          1,
          g,
          function (e) {
            return 216 / Math.max(e, 360)
          }
        );
        y.happinessStat.addModifier(x),
        x.explain = function () {
          var e = x.factor;
          return e < 0.2 ? 'I\'m overworked.' : e < 0.4 ? 'Feeling slightly stressed out.' : e >= 0.4 ? 'Good work-life balance.' : ''
        },
        p.currentYear.subscribe(y.happinessStat)
      };
      t.setupGame = function () {
        B(),
        G(),
        R(),
        N(),
        O(),
        j(),
        D(),
        S.currentJobContainer.defaultJob = k.careers[0].jobs[0]
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.ExpMovAvg = t.tenYearAlpha = t.fiveYearAlpha = t.oneYearAlpha = void 0;
      var i = a(2),
      r = n(i),
      s = a(4),
      o = n(s),
      u = a(6),
      l = n(u),
      c = a(8),
      d = n(c),
      f = a(5),
      v = n(f),
      h = a(1),
      p = n(h),
      m = a(9),
      y = a(17),
      _ = (
        t.oneYearAlpha = 0.0027359764,
        t.fiveYearAlpha = 0.00135,
        t.tenYearAlpha = 0.00027393507,
        function e(t) {
          (0, p.default) (this, e),
          this.value = t
        }
      );
      t.ExpMovAvg = function (e) {
        function t(e, a, n, i) {
          var s = arguments.length > 4 &&
          void 0 !== arguments[4] ? arguments[4] : 0,
          o = arguments.length > 5 &&
          void 0 !== arguments[5] ? arguments[5] : 0;
          (0, p.default) (this, t);
          var u = (0, l.default) (this, (t.__proto__ || (0, r.default) (t)).call(this, e, a, new _(s)));
          return y.currentDay.subscribe(u),
          u.stat = n,
          u.alpha = i,
          u.baseValue = s,
          u.startValue = s,
          u.tolerance = o,
          u
        }
        return (0, v.default) (t, e),
        (0, o.default) (
          t,
          [
            {
              key: 'update',
              value: function () {
                this.state.value = (1 - this.alpha) * this.state.value + this.alpha * this.stat.effective,
                Math.abs(this.state.value - this.startValue) >= this.tolerance &&
                (
                  this.startValue = this.state.value,
                  (0, d.default) (
                    t.prototype.__proto__ ||
                    (0, r.default) (t.prototype),
                    'update',
                    this
                  ).call(this)
                )
              }
            },
            {
              key: 'prestige',
              value: function () {
                this.state.value = this.baseValue
              }
            }
          ]
        ),
        t
      }(m.BasicEntity)
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.dailyWorkIncomeStat = void 0;
      var i = a(2),
      r = n(i),
      s = a(1),
      o = n(s),
      u = a(4),
      l = n(u),
      c = a(6),
      d = n(c),
      f = a(8),
      v = n(f),
      h = a(5),
      p = n(h),
      m = a(16),
      y = a(29),
      _ = a(22),
      g = function (e) {
        function t() {
          (0, o.default) (this, t);
          var e = (0, d.default) (
            this,
            (t.__proto__ || (0, r.default) (t)).call(this, 'dailyWorkIncomeStat', 'Income/day', 0, 2, '$')
          );
          return y.currentIncomeContainer.dependants.push(e),
          _.work.dependants.push(e),
          e.update(),
          e
        }
        return (0, p.default) (t, e),
        (0, l.default) (
          t,
          [
            {
              key: 'update',
              value: function () {
                y.currentIncomeContainer.hasOwnProperty('income') &&
                (
                  this.base = y.currentIncomeContainer.income.effective * _.work.duration.effective / 60
                ),
                (0, v.default) (
                  t.prototype.__proto__ ||
                  (0, r.default) (t.prototype),
                  'update',
                  this
                ).call(this)
              }
            }
          ]
        ),
        t
      }(m.Stat);
      t.dailyWorkIncomeStat = new g
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.doubleIncomeAtLevelStat = void 0;
      var i = a(2),
      r = n(i),
      s = a(1),
      o = n(s),
      u = a(6),
      l = n(u),
      c = a(5),
      d = n(c),
      f = a(16),
      v = function (e) {
        function t() {
          return (0, o.default) (this, t),
          (0, l.default) (
            this,
            (t.__proto__ || (0, r.default) (t)).call(this, 'doubleIncomeAtLevel', 'Double Income at Level', 10)
          )
        }
        return (0, d.default) (t, e),
        t
      }(f.Stat);
      t.doubleIncomeAtLevelStat = new v
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.IncomePerWorkHourStat = void 0;
      var i = a(2),
      r = n(i),
      s = a(1),
      o = n(s),
      u = a(6),
      l = n(u),
      c = a(5),
      d = n(c),
      f = a(16),
      v = a(156);
      t.IncomePerWorkHourStat = function (e) {
        function t(e, a) {
          (0, o.default) (this, t);
          var n = (0, l.default) (
            this,
            (t.__proto__ || (0, r.default) (t)).call(this, e.id + 'incpH', 'Income/h', a, 2, '$', '')
          );
          return n.job = e,
          n.base = a,
          n.addModifier(new v.JobLevelModifier(e)),
          n.update(),
          n
        }
        return (0, d.default) (t, e),
        t
      }(f.Stat)
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(10),
      r = n(i),
      s = a(99),
      o = n(s),
      u = a(7),
      l = n(u),
      c = a(108),
      d = a(29),
      f = a(79),
      v = a(154),
      h = a(61),
      p = a(43),
      m = a(44),
      y = a(30),
      _ = a(103),
      g = a(52),
      b = a(66),
      M = a(80),
      k = a(51),
      w = a(119),
      x = a(22),
      P = a(17),
      L = a(39),
      C = a(104),
      S = a(38),
      A = a(11),
      T = a(147),
      E = a(65),
      I = a(76),
      D = a(143),
      j = a(63),
      N = a(100),
      O = a(101),
      B = a(28),
      R = a(34),
      G = a(59),
      V = a(106),
      z = a(151),
      H = a(158),
      F = a(64),
      Y = a(120),
      J = a(75),
      U = a(57),
      W = a(74),
      X = a(152),
      Q = a(42);
      o.default.use(l.default);
      var Z = !1;
      (0, H.setupGame) ();
      var $ = [];
      window.onkeyup = function (e) {
        var t = e.keyCode;
        $[t] = !1
      },
      window.onkeydown = function (e) {
        var t = e.keyCode;
        if (!(t >= 97 && t <= 105)) {
          16 !== t &&
          ($[16] = !1),
          $[e.keyCode] = !0;
          var a = String.fromCharCode(t).toLowerCase(),
          n = X.keyBindings.state.tlp.indexOf(a),
          i = X.keyBindings.state.slp.indexOf(a);
          if (a === X.keyBindings.state.boost) {
            var s = !0,
            o = !1,
            u = void 0;
            try {
              for (var l, c = (0, r.default) (O.boosts); !(s = (l = c.next()).done); s = !0) {
                var d = l.value;
                'available' === d.currentState() &&
                d.activate()
              }
            } catch (e) {
              o = !0,
              u = e
            } finally {
              try {
                !s &&
                c.return &&
                c.return()
              } finally {
                if (o) throw u
              }
            }
            B.lifestylePane.state.notified = !1,
            B.boostsPane.state.notified = !1
          } else if (a === X.keyBindings.state.pause || 32 === t) de();
           else if (a === X.keyBindings.state.speedup) G.turbo.toggleValue();
           else if (n > - 1 && n < B.panes.length) (0, B.selectPane) (B.panes[n]);
           else if (i > - 1) {
            var f = !0,
            v = !1,
            h = void 0;
            try {
              for (var p, m = (0, r.default) (B.panes); !(f = (p = m.next()).done); f = !0) {
                var y = p.value;
                if (y.state.selected) {
                  i < y.subpanes.length &&
                  (0, B.selectPane) (y.subpanes[i]);
                  break
                }
              }
            } catch (e) {
              v = !0,
              h = e
            } finally {
              try {
                !f &&
                m.return &&
                m.return()
              } finally {
                if (v) throw h
              }
            }
          }
        }
      },
      (0, A.createAnyLock) (f.areas, B.researchPane, function (e) {
        return e.unlocked()
      });
      var q = J.DEVMODE ? 30 : 300,
      K = 2,
      ee = 10,
      te = 10,
      ae = {
        ticksPerDay: 1,
        tickLength: q,
        sessionStart: 0,
        sessionTicks: 0
      },
      ne = {
        money: S.money
      },
      ie = {
        currentDay: P.currentDay,
        currentLife: L.currentLife,
        currentLifeThisLoop: L.currentLifeThisLoop,
        currentTick: 0,
        currentTime: 0,
        lastTime: 0,
        offlineBonusTicks: 0,
        lastSave: G.lastSave
      },
      re = {
        energy: p.energyStat,
        dailyExpenses: m.dailyExpensesStat,
        dailyIncome: m.dailyIncomeStat,
        dailyNetIncome: m.dailyNetIncomeStat,
        foodCostsPerDay: g.foodCostsPerDayStat,
        foodQuality: g.foodQualityStat,
        expenseRatio: m.expenseRatioStat,
        investmentReturn: m.investmentReturnStat,
        happiness: b.happinessStat,
        health: M.healthStat
      },
      se = {
        pauseOnPrestige: V.pauseOnPrestige,
        idleMode: V.idleMode,
        nightMode: V.nightMode,
        xpPerHour: V.xpPerHour,
        playSounds: V.playSounds
      },
      oe = {
        currency: ne,
        autoPromote: C.autoPromote,
        autoPromoteMinLevel: C.autoPromoteMinLevel,
        autoResearch: C.autoResearch,
        autoBoost: C.autoBoost,
        autoBoostExclConference: C.autoBoostExclConference,
        autoBoostJustPause: C.autoBoostJustPause,
        autoBoostStack: C.autoBoostStack,
        autoPromoteJustPause: C.autoPromoteJustPause,
        autoResearchJustPause: C.autoResearchJustPause,
        homes: k.homes,
        boosts: O.boosts,
        time: ie,
        stats: re,
        careers: c.careers,
        schedule: w.schedule,
        activities: x.activities,
        timeConfig: ae,
        fields: f.fields,
        research: x.research,
        work: x.work,
        eat: x.eat,
        eatXp: x.eatXp,
        events: T.events,
        log: j.log,
        panes: B.panes,
        foodOptions: g.foodOptions,
        journalPane: B.journalPane,
        lifestylePane: B.lifestylePane,
        happinessPane: B.happinessPane,
        researchPane: B.researchPane,
        boostsPane: B.boostsPane,
        jobPane: B.jobPane,
        lambdaPane: B.lambdaPane,
        labPane: B.labPane,
        achievementPane: B.achievementPane,
        groundhogMarketPane: B.groundhogMarketPane,
        settingsPane: B.settingsPane,
        otherPane: B.otherPane,
        daysBehind: 0,
        achievements: N.achievements,
        assistants: _.assistants,
        messageBox: R.messageBox,
        paused: G.paused,
        turbo: G.turbo,
        bonusTicks: G.bonusTicks,
        delta: z.delta,
        settings: se,
        saver: E.saver,
        currentJobContainer: d.currentJobContainer,
        currentResearchContainer: h.currentResearchContainer,
        researchQueue: v.researchQueue,
        baseResearchXpPerHourStat: y.baseResearchXpPerHourStat,
        baseWorkXpPerHourStat: y.baseWorkXpPerHourStat,
        battle: U.battle,
        loopTrap: W.loopTrap,
        prestiger: F.prestiger,
        pausedDays: 0,
        marketItems: Y.marketItems,
        kongItems: Y.kongItems,
        userInventory: Y.userInventory,
        areas: f.areas,
        loggedIn: !1,
        loginStarted: !1,
        pressedKeys: $,
        keyBindings: X.keyBindings,
        darkMatterTicks: G.darkMatterTicks,
        studyMirroredShip: Q.studyMirroredShip,
        homeToHappinessFun: k.homeToHappinessFun
      },
      ue = {
        currency: function (e) {
          return e.currency
        },
        time: function (e) {
          return e.time
        },
        stats: function (e) {
          return e.stats
        },
        happiness: function (e) {
          return e.stats.happiness
        },
        boosts: function (e) {
          return e.boosts
        },
        timeConfig: function (e) {
          return e.timeConfig
        },
        reverseSchedule: function (e) {
          return e.schedule.timetable.slice().reverse()
        },
        schedule: function (e) {
          return e.schedule
        },
        activities: function (e) {
          return e.activities
        },
        careers: function (e) {
          return e.careers
        },
        fields: function (e) {
          return e.fields
        },
        jobs: function (e) {
          return e.jobs
        },
        autoPromote: function (e) {
          return e.autoPromote
        },
        autoPromoteMinLevel: function (e) {
          return e.autoPromoteMinLevel
        },
        autoResearch: function (e) {
          return e.autoResearch
        },
        autoBoost: function (e) {
          return e.autoBoost
        },
        autoBoostStack: function (e) {
          return e.autoBoostStack
        },
        autoBoostExclConference: function (e) {
          return e.autoBoostExclConference
        },
        autoBoostJustPause: function (e) {
          return e.autoBoostJustPause
        },
        autoResearchJustPause: function (e) {
          return e.autoResearchJustPause
        },
        autoPromoteJustPause: function (e) {
          return e.autoPromoteJustPause
        },
        foodCostFactor: function (e) {
          return e.foodCostFactor
        },
        homes: function (e) {
          return e.homes
        },
        research: function (e) {
          return e.research
        },
        work: function (e) {
          return e.work
        },
        eat: function (e) {
          return e.eat
        },
        eatXp: function (e) {
          return e.eatXp
        },
        foodOptions: function (e) {
          return e.foodOptions
        },
        events: function (e) {
          return e.events
        },
        log: function (e) {
          return e.log
        },
        assistants: function (e) {
          return oe.assistants
        },
        panes: function (e) {
          return e.panes
        },
        journalPane: function (e) {
          return e.journalPane
        },
        lifestylePane: function (e) {
          return e.lifestylePane
        },
        happinessPane: function (e) {
          return e.happinessPane
        },
        researchPane: function (e) {
          return e.researchPane
        },
        boostsPane: function (e) {
          return e.boostsPane
        },
        jobPane: function (e) {
          return e.jobPane
        },
        lambdaPane: function (e) {
          return e.lambdaPane
        },
        labPane: function (e) {
          return e.labPane
        },
        settingsPane: function (e) {
          return e.settingsPane
        },
        otherPane: function (e) {
          return e.otherPane
        },
        achievementPane: function (e) {
          return e.achievementPane
        },
        groundhogMarketPane: function (e) {
          return e.groundhogMarketPane
        },
        daysBehind: function (e) {
          return e.daysBehind
        },
        achievements: function (e) {
          return e.achievements
        },
        messageBox: function (e) {
          return e.messageBox
        },
        paused: function (e) {
          return e.paused
        },
        turbo: function (e) {
          return e.turbo
        },
        bonusTicks: function (e) {
          return e.bonusTicks
        },
        delta: function (e) {
          return e.delta
        },
        settings: function (e) {
          return e.settings
        },
        saver: function (e) {
          return e.saver
        },
        currentJobContainer: function (e) {
          return e.currentJobContainer
        },
        currentResearchContainer: function (e) {
          return e.currentResearchContainer
        },
        researchQueue: function (e) {
          return e.researchQueue
        },
        baseResearchXpPerHourStat: function (e) {
          return e.baseResearchXpPerHourStat
        },
        baseWorkXpPerHourStat: function (e) {
          return e.baseWorkXpPerHourStat
        },
        battle: function (e) {
          return e.battle
        },
        loopTrap: function (e) {
          return e.loopTrap
        },
        prestiger: function (e) {
          return e.prestiger
        },
        marketItems: function (e) {
          return e.marketItems
        },
        kongItems: function (e) {
          return e.kongItems
        },
        userInventory: function (e) {
          return e.userInventory
        },
        areas: function (e) {
          return e.areas
        },
        pressedKeys: function (e) {
          return e.pressedKeys
        },
        keyBindings: function (e) {
          return e.keyBindings
        },
        darkMatterTicks: function (e) {
          return e.darkMatterTicks
        },
        studyMirroredShip: function (e) {
          return e.studyMirroredShip
        },
        homeToHappinessFun: function (e) {
          return e.homeToHappinessFun
        }
      },
      le = function (e) {
        e.time.currentTick += 1,
        C.autoBoost.getValue() &&
        (0, D.autoBoostFun) (e),
        C.autoPromote.getValue() &&
        (0, D.autoPromoteFun) (e),
        C.autoResearch.getValue() &&
        v.researchQueue.advance();
        var t = !0,
        a = !1,
        n = void 0;
        try {
          for (
            var i,
            s = (0, r.default) (g.foodOptions);
            !(t = (i = s.next()).done);
            t = !0
          ) {
            var o = i.value;
            o.dayCounter()
          }
        } catch (e) {
          a = !0,
          n = e
        } finally {
          try {
            !t &&
            s.return &&
            s.return()
          } finally {
            if (a) throw n
          }
        }
        var u = G.darkMatterTicks.getValue();
        u > 0 &&
        G.darkMatterTicks.setValue(u - 1),
        e.currency.money.add(e.stats.dailyNetIncome.effective),
        e.time.currentTick = 0,
        e.time.currentDay.incrementValue();
        var l = !0,
        d = !1,
        f = void 0;
        try {
          for (
            var h,
            p = (0, r.default) (e.activities);
            !(l = (h = p.next()).done);
            l = !0
          ) {
            var m = h.value;
            m.do(e)
          }
        } catch (e) {
          d = !0,
          f = e
        } finally {
          try {
            !l &&
            p.return &&
            p.return()
          } finally {
            if (d) throw f
          }
        }
        var y = !0,
        _ = !1,
        b = void 0;
        try {
          for (var M, k = (0, r.default) (c.careers); !(y = (M = k.next()).done); y = !0) {
            var w = M.value;
            w.secretProject &&
            w.advanceSecretProject()
          }
        } catch (e) {
          _ = !0,
          b = e
        } finally {
          try {
            !y &&
            k.return &&
            k.return()
          } finally {
            if (_) throw b
          }
        }
        e.battle.update(),
        e.time.lastTime += e.timeConfig.tickLength
      },
      ce = function (e, t) {
        var a = new Date;
        a.getTime() - e.time.lastSave.getValue() > 15000 &&
        E.saver.requestSave(),
        E.saver.saveRequested &&
        (E.saver.save(), e.time.lastSave.setValue(a.getTime()));
        var n = 1;
        if (
          !e.paused.getValue() &&
          e.turbo.getValue() &&
          (
            e.bonusTicks.getValue() <= 0 ? (e.turbo.setValue(!1), e.bonusTicks.setValue(0)) : (e.bonusTicks.add( - t), n = K)
          ),
          e.battle.state.enemyReachedSolarSystem ? e.timeConfig.tickLength = q * ee / n : e.timeConfig.tickLength = q / n,
          e.daysBehind = Math.ceil((a.getTime() - e.time.lastTime) / e.timeConfig.tickLength),
          e.paused.getValue()
        ) {
          e.pausedDays += t,
          e.pausedDays > te &&
          (
            e.bonusTicks.add(Math.floor(e.pausedDays / te)),
            e.pausedDays = e.pausedDays % te
          );
          var i = new Date;
          return void (e.time.lastTime = i.getTime())
        }
        for (; t > 0; ) Z &&
        (0, D.autoplay) (e),
        t -= 1,
        e.time.sessionTicks += 1,
        le(e)
      },
      de = function () {
        G.paused.toggleValue()
      },
      fe = {
        TICK: function (e, t) {
          ce(e, t)
        },
        INITIALIZE_TIMING: function (e) {
          R.messageBox.playSounds = V.playSounds;
          var t = new Date;
          e.time.lastTime = t.getTime(),
          e.time.sessionStart = e.time.lastTime,
          d.currentJobContainer.setCurrentJob((0, I.findActiveJob) (e)),
          E.saver.load();
          var a = e.time.lastSave.getValue(),
          n = t.getTime() - a;
          if (a > 0 && n > 0) {
            var i = n / q,
            r = Math.floor(i / te);
            e.time.offlineBonusTicks = r,
            e.bonusTicks.add(Math.floor(r))
          }
          e.time.lastSave.setValue(t.getTime()),
          d.currentJobContainer.setCurrentJob((0, I.findActiveJob) (e))
        },
        CHANGE_ACTIVITY_TIME: function (e, t) {
          var a = t[0],
          n = t[1];
          (0, I.changeActivityTime) (e, a, n)
        },
        SET_ACTIVE_JOB: function (e, t) {
          (0, I.setActiveJob) (t)
        },
        SET_ACTIVE_RESEARCH: function (e, t) {
          (0, I.setActiveResearch) (t)
        },
        ADD_TO_READING_LIST: function (e, t) {
          (0, I.addToReadingList) (t)
        },
        SELECT_HOME: function (e, t) {
          (0, I.selectHome) (t)
        },
        SELECT_FOOD_OPTION: function (e, t) {
          (0, g.selectFoodOption) (t)
        },
        SELECT_PANE: function (e, t) {
          (0, B.selectPane) (t)
        },
        ACTIVATE_BOOST: function (e, t) {
          t.activate()
        },
        PAUSE_GAME: function (e) {
          de()
        },
        SPEEDUP_GAME: function (e) {
          e.turbo.toggleValue()
        },
        RESET_TIMER: function (e) {
          var t = new Date;
          e.time.lastTime = t.getTime()
        },
        ACKNOWLEDGE_AUSTERITY: function (e) {
          S.money.acknowledgeAusterity()
        },
        ACKNOWLEDGE_MESSAGE: function (e) {
          R.messageBox.messages.pop()
        },
        HARD_RESET: function (e) {
          E.saver.hardReset(),
          E.saver.stop(),
          window.location.reload()
        },
        IMPORT_SAVE: function (e, t) {
          e.saver.import(t),
          Y.userInventory.updateAutos()
        }
      },
      ve = {
        tick: function (e, t) {
          var a = e.commit;
          a('TICK', t)
        },
        initializeTiming: function (e) {
          var t = e.commit;
          t('INITIALIZE_TIMING')
        },
        changeActivityTime: function (e, t) {
          var a = e.commit;
          a('CHANGE_ACTIVITY_TIME', t)
        },
        setActiveJob: function (e, t) {
          var a = e.commit;
          a('SET_ACTIVE_JOB', t)
        },
        setActiveResearch: function (e, t) {
          var a = e.commit;
          a('SET_ACTIVE_RESEARCH', t)
        },
        addToReadingList: function (e, t) {
          var a = e.commit;
          a('ADD_TO_READING_LIST', t)
        },
        selectPane: function (e, t) {
          var a = e.commit;
          a('SELECT_PANE', t)
        },
        selectHome: function (e, t) {
          var a = e.commit;
          a('SELECT_HOME', t)
        },
        selectFoodOption: function (e, t) {
          var a = e.commit;
          a('SELECT_FOOD_OPTION', t)
        },
        activateBoost: function (e, t) {
          var a = e.commit;
          a('ACTIVATE_BOOST', t)
        },
        pauseGame: function (e) {
          var t = e.commit;
          t('PAUSE_GAME')
        },
        speedupGame: function (e) {
          var t = e.commit;
          t('SPEEDUP_GAME')
        },
        resetTimer: function (e) {
          var t = e.commit;
          t('RESET_TIMER')
        },
        acknowledgeAusterity: function (e) {
          var t = e.commit;
          t('ACKNOWLEDGE_AUSTERITY')
        },
        acknowledgeMessage: function (e) {
          var t = e.commit;
          t('ACKNOWLEDGE_MESSAGE')
        },
        hardReset: function (e) {
          var t = e.commit;
          t('HARD_RESET')
        },
        importSave: function (e, t) {
          var a = e.commit;
          a('IMPORT_SAVE', t)
        }
      };
      t.default = new l.default.Store({
        state: oe,
        getters: ue,
        mutations: fe,
        actions: ve
      })
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(14),
      r = n(i),
      s = a(321),
      o = n(s),
      u = a(319),
      l = n(u),
      c = a(311),
      d = n(c),
      f = a(320),
      v = n(f),
      h = a(346),
      p = n(h),
      m = a(47),
      y = n(m),
      _ = a(317),
      g = n(_),
      b = a(313),
      M = n(b),
      k = a(312),
      w = n(k),
      x = a(318),
      P = n(x),
      L = a(7);
      t.default = {
        name: 'app',
        components: {
          TimeWarning: o.default,
          PrestigeInfo: l.default,
          ProgressModal: v.default,
          SidebarDisplay: p.default,
          NavbarDisplay: y.default,
          MainPane: g.default,
          FooterDisplay: M.default,
          AusterityAlert: d.default,
          MessageBox: P.default,
          BonusticksModal: w.default
        },
        computed: (0, L.mapGetters) (['timeConfig',
        'time',
        'panes',
        'settings']),
        methods: (0, r.default) ({
          mainLoop: function () {
            var e = new Date,
            t = e.getTime(),
            a = this.timeConfig.tickLength;
            (
              !this.settings.idleMode.getValue() ||
              this.time.currentDay.getValue() <= 1
            ) &&
            (this.time.lastTime = Math.max(this.time.lastTime, t - 2 * a));
            var n = t - this.time.lastTime,
            i = n / a,
            r = 1;
            i > 200 &&
            (r = 100),
            a < n &&
            (this.tick(r), n -= a * r),
            a < n ? setTimeout(this.mainLoop, 5) : setTimeout(this.mainLoop, Math.min(1000, a / 3))
          }
        }, (0, L.mapActions) (['tick',
        'initializeTiming'])),
        created: function () {
          this.initializeTiming(),
          this.mainLoop()
        }
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(10),
      r = n(i),
      s = a(14),
      o = n(s),
      u = a(7),
      l = a(15);
      t.default = {
        name: 'achievement-display',
        components: {
        },
        computed: (0, o.default) ({
          completedAchievements: function () {
            var e = 0,
            t = 0,
            a = !0,
            n = !1,
            i = void 0;
            try {
              for (
                var s,
                o = (0, r.default) (this.achievements);
                !(a = (s = o.next()).done);
                a = !0
              ) {
                var u = s.value,
                l = !0,
                c = !1,
                d = void 0;
                try {
                  for (
                    var f,
                    v = (0, r.default) (u.achievements);
                    !(l = (f = v.next()).done);
                    l = !0
                  ) {
                    var h = f.value;
                    t += 1,
                    h.state.completed &&
                    (e += 1)
                  }
                } catch (e) {
                  c = !0,
                  d = e
                } finally {
                  try {
                    !l &&
                    v.return &&
                    v.return()
                  } finally {
                    if (c) throw d
                  }
                }
              }
            } catch (e) {
              n = !0,
              i = e
            } finally {
              try {
                !a &&
                o.return &&
                o.return()
              } finally {
                if (n) throw i
              }
            }
            return e + '/' + t
          }
        }, (0, u.mapGetters) (['achievementPane',
        'achievements'])),
        methods: (0, o.default) ({
          abbreviateNumber: l.abbreviateNumber
        }, (0, u.mapActions) (['selectPane']))
      }
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var n = a(7);
      t.default = {
        name: 'austerity-alert',
        components: {
        },
        computed: (0, n.mapGetters) (['currency']),
        methods: (0, n.mapActions) (['acknowledgeAusterity'])
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(14),
      r = n(i),
      s = a(7),
      o = a(15);
      t.default = {
        name: 'bonusticks-modal',
        computed: (0, s.mapGetters) (['time']),
        methods: (0, r.default) ({
          formatDays: o.formatDays
        }, (0, s.mapActions) (['mapActions'])),
        mounted: function () {
          this.time.offlineBonusTicks > 50 &&
          window.$('#bonusticksmodal').modal('show')
        }
      }
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var n = a(7);
      t.default = {
        name: 'footer-display',
        components: {
        },
        computed: (0, n.mapGetters) (['research',
        'panes']),
        methods: (0, n.mapActions) (['selectPane'])
      }
    },
    function (e, t) {
      'use strict'
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(7),
      r = a(24),
      s = n(r);
      t.default = {
        name: 'happiness-explain',
        components: {
          StatDisplay: s.default
        },
        computed: (0, i.mapGetters) (['happiness',
        'stats']),
        methods: {
          getEmoji: function (e) {
            return a(140) ('./' + this.happiness.emojiName() + '_emoji.svg')
          }
        }
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(316),
      r = n(i),
      s = a(47),
      o = n(s),
      u = a(310),
      l = n(u),
      c = a(139),
      d = n(c),
      f = a(7);
      t.default = {
        name: 'journal-display',
        components: {
          LogDisplay: r.default,
          AchievementsDisplay: l.default,
          LifeSummary: d.default,
          NavbarDisplay: o.default
        },
        computed: (0, f.mapGetters) (['journalPane'])
      }
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var n = a(7);
      t.default = {
        name: 'Life-Summary',
        computed: (0, n.mapGetters) (['careers',
        'fields'])
      }
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var n = a(7);
      t.default = {
        name: 'log-display',
        components: {
        },
        computed: (0, n.mapGetters) (['log']),
        methods: (0, n.mapActions) ([])
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(7),
      r = a(325),
      s = n(r),
      o = a(323),
      u = n(o),
      l = a(339),
      c = n(l),
      d = a(324),
      f = n(d),
      v = a(331),
      h = n(v),
      p = a(315),
      m = n(p),
      y = a(139),
      _ = n(y),
      g = a(138),
      b = n(g),
      M = a(314),
      k = n(M),
      w = a(335),
      x = n(w);
      t.default = {
        name: 'main-pane',
        components: {
          LambdaDisplay: s.default,
          JobDisplay: u.default,
          LabDisplay: c.default,
          EventsDisplay: f.default,
          JournalDisplay: m.default,
          LifestyleDisplay: h.default,
          LifeSummary: _.default,
          HappinessExplain: b.default,
          GroundhogMarket: k.default,
          OtherDisplay: x.default
        },
        computed: (0, i.mapGetters) (['panes']),
        methods: (0, i.mapActions) ([])
      }
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var n = a(7);
      t.default = {
        name: 'message-box',
        components: {
        },
        computed: (0, n.mapGetters) (['currency',
        'messageBox']),
        methods: (0, n.mapActions) (['acknowledgeMessage'])
      }
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var n = a(7);
      t.default = {
        name: 'navbar-display',
        components: {
        },
        props: {
          panes: {
          }
        },
        computed: (0, n.mapGetters) ([]),
        methods: (0, n.mapActions) (['selectPane'])
      }
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var n = a(7);
      t.default = {
        name: 'prestige-info',
        computed: (0, n.mapGetters) (['time']),
        methods: (0, n.mapActions) ([])
      }
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var n = a(7);
      t.default = {
        name: 'progress-modal',
        computed: (0, n.mapGetters) (['daysBehind']),
        methods: (0, n.mapActions) (['resetTimer'])
      }
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var n = a(15);
      t.default = {
        name: 'stat-display',
        props: {
          stat: {
          },
          name: {
          default:
            !0,
            type: Boolean
          },
          color: {
          default:
            'blue'
          },
          exponential: {
          default:
            1000000
          },
          minutes: {
          default:
            !1
          }
        },
        methods: {
          abbreviateNumber: n.abbreviateNumber,
          formatMinutes: n.formatMinutes
        }
      }
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var n = a(7);
      t.default = {
        name: 'time-warning',
        computed: (0, n.mapGetters) (['battle']),
        methods: (0, n.mapActions) ([])
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(14),
      r = n(i),
      s = a(7),
      o = a(15),
      u = a(24),
      l = n(u);
      t.default = {
        name: 'job-button',
        components: {
          StatDisplay: l.default
        },
        props: [
          'entity'
        ],
        computed: (0, s.mapGetters) (['time',
        'settings',
        'baseWorkXpPerHourStat']),
        methods: (0, r.default) ({
          xpPerDay: function (e) {
            return (0, o.abbreviateNumber) (
              e.xp.xpPerHourStat.effective * this.research.duration.effective / 60,
              e.xp.xpPerHourStat.digits
            )
          },
          abbrLevel: function (e) {
            return e < 10000 ? e : (0, o.abbreviateNumber) (e, 2)
          }
        }, (0, s.mapActions) (['setActiveJob']))
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(7),
      r = a(322),
      s = n(r),
      o = a(24),
      u = n(o);
      t.default = {
        name: 'job-display',
        components: {
          JobButton: s.default,
          StatDisplay: u.default
        },
        computed: (0, i.mapGetters) (
          ['jobPane',
          'settings',
          'baseWorkXpPerHourStat',
          'time',
          'autoPromote',
          'autoPromoteMinLevel',
          'autoPromoteJustPause',
          'userInventory',
          'groundhogMarketPane']
        ),
        methods: (0, i.mapActions) (['selectPane'])
      }
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var n = a(7);
      t.default = {
        name: 'events-display',
        components: {
        },
        computed: (0, n.mapGetters) (['events']),
        methods: (0, n.mapActions) ([])
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(7),
      r = a(327),
      s = n(r),
      o = a(326),
      u = n(o),
      l = a(47),
      c = n(l);
      t.default = {
        name: 'lambda-display',
        components: {
          LooptrapDisplay: u.default,
          WarDisplay: s.default,
          NavbarDisplay: c.default
        },
        computed: (0, i.mapGetters) (['lambdaPane']),
        methods: (0, i.mapActions) ([])
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(14),
      r = n(i),
      s = a(7),
      o = a(15),
      u = a(24),
      l = n(u);
      t.default = {
        name: 'looptrap-display',
        components: {
          StatDisplay: l.default
        },
        computed: (0, s.mapGetters) (
          ['loopTrap',
          'careers',
          'prestiger',
          'fields',
          'jobPane',
          'settings',
          'paused']
        ),
        methods: (0, r.default) ({
          abbr: o.abbreviateNumber,
          grandPrestige: function () {
            this.prestiger.grandPrestige(),
            this.selectPane(this.jobPane),
            this.settings.pauseOnPrestige.getValue() &&
            this.paused.setValue(!0)
          }
        }, (0, s.mapActions) (['selectPane']))
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(10),
      r = n(i),
      s = a(14),
      o = n(s),
      u = a(7),
      l = a(15),
      c = a(24),
      d = n(c),
      f = function (e, t) {
        return Math.floor(e + 2 * t * Math.random() - t)
      };
      t.default = {
        name: 'war-display',
        components: {
          StatDisplay: d.default
        },
        computed: (0, o.default) ({
          currentDay: function () {
            return this.time.currentDay.getValue()
          }
        }, (0, u.mapGetters) (['battle',
        'time'])),
        methods: {
          abbr: l.abbreviateNumber,
          formatDays: l.formatDays,
          drawCircle: function (e, t, a, n, i, r, s) {
            e.beginPath(),
            e.arc(t, a, n, 0, 2 * Math.PI, !1),
            e.fillStyle = i,
            e.fill(),
            e.lineWidth = r,
            e.strokeStyle = s,
            e.stroke()
          },
          laserbeam: function (e, t, a, n, i, r, s) {
            e.beginPath(),
            e.strokeStyle = r,
            e.lineWidth = s,
            e.moveTo(t, a),
            e.lineTo(n + (4 * Math.random() - 2), i + (4 * Math.random() - 2)),
            e.stroke()
          },
          updateCanvas: function () {
            var e = document.getElementById('canvas'),
            t = e.getContext('2d'),
            a = e.width,
            n = e.height;
            t.clearRect(1, 1, e.width - 2, e.height - 2),
            t.fillStyle = 'black';
            var i = a / 2,
            s = n / 2,
            o = this.battle.state.target;
            this.drawCircle(t, i, s, this.battle.state.scale / 2 - 10, '#FFFFFF', 1, '#111111'),
            this.drawCircle(t, i, s, 20, '#ADD8E6', 0, '#00BFFF'),
            o &&
            this.battle.state.laserGunActive &&
            this.laserbeam(t, i, s, f(o.x, 2), f(o.y, 2), '#FF0000', 2),
            t.drawImage(this.battle.earthImage, i - 10, s - 10, 20, 20);
            var u = !0,
            c = !1,
            d = void 0;
            try {
              for (
                var v,
                h = (0, r.default) (this.battle.state.enemies);
                !(u = (v = h.next()).done);
                u = !0
              ) {
                var p = v.value;
                this.drawCircle(
                  t,
                  p.x,
                  p.y,
                  p.flags[3] ? 18 : 6,
                  '#CC2222',
                  (p.flags[3] ? 6 : 3) * p.health / p.maxHealth,
                  p.flags[1] ? '#22FF22' : '#2222FF'
                )
              }
            } catch (e) {
              c = !0,
              d = e
            } finally {
              try {
                !u &&
                h.return &&
                h.return()
              } finally {
                if (c) throw d
              }
            }
            var m = 'Wave: ' + this.battle.state.wave,
            y = '',
            _ = '';
            t.font = '15px Arial',
            t.fillStyle = 'white',
            t.fillRect(1, 1, t.measureText(m).width + 6, 22),
            o &&
            (
              _ = (0, l.formatDays) (
                Math.floor(
                  this.battle.state.target.earthDistance / this.battle.state.target.speed
                )
              ),
              y = 'HP: ' + this.abbr(this.battle.state.target.health) + '/' + this.abbr(this.battle.state.target.maxHealth),
              t.fillRect(a - 140, 1, 139, 42),
              t.fillRect(1, n - 25, 100, 24)
            ),
            t.fillStyle = 'black',
            t.fillText(m, 5, 20),
            o &&
            (
              t.fillText(_, a - 140, 20),
              t.fillText('until Arrival', a - 100, 40),
              t.fillText(y, 5, n - 10)
            ),
            t.strokeStyle = 'black',
            t.lineWidth = 1,
            t.strokeRect(0, 0, e.width, e.height)
          }
        },
        watch: {
          currentDay: function (e, t) {
            e > t &&
            this.updateCanvas()
          }
        },
        mounted: function () {
          var e = document.getElementById('canvas'),
          t = e.getContext('2d');
          t.fillStyle = 'black',
          t.fillRect(0, 0, e.width, e.height),
          this.updateCanvas()
        }
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(14),
      r = n(i),
      s = a(7),
      o = a(332),
      u = n(o),
      l = a(15);
      t.default = {
        name: 'boosts-display',
        computed: (0, s.mapGetters) (
          ['boosts',
          'autoBoost',
          'autoBoostExclConference',
          'autoBoostJustPause',
          'autoBoostStack',
          'userInventory']
        ),
        components: {
          AssistantsDisplay: u.default
        },
        methods: (0, r.default) ({
          formatDays: l.formatDays
        }, (0, s.mapActions) (['activateBoost']))
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(14),
      r = n(i),
      s = a(7),
      o = a(15);
      t.default = {
        name: 'spending-display',
        components: {
        },
        computed: (0, s.mapGetters) (['stats',
        'foodOptions']),
        methods: (0, r.default) ({
          formatMinutes: o.formatMinutes
        }, (0, s.mapActions) (['selectFoodOption']))
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(14),
      r = n(i),
      s = a(7),
      o = a(24),
      u = n(o),
      l = a(15),
      c = a(51);
      t.default = {
        name: 'housing-display',
        components: {
          StatDisplay: u.default
        },
        computed: (0, s.mapGetters) (['homes']),
        methods: (0, r.default) ({
          formatMinutes: l.formatMinutes,
          abbreviateNumber: l.abbreviateNumber,
          homeToHappinessFun: c.homeToHappinessFun
        }, (0, s.mapActions) (['selectHome']))
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(7),
      r = a(330),
      s = n(r),
      o = a(328),
      u = n(o),
      l = a(329),
      c = n(l),
      d = a(138),
      f = n(d),
      v = a(47),
      h = n(v);
      t.default = {
        name: 'lifestyle-display',
        components: {
          HousingDisplay: s.default,
          BoostsDisplay: u.default,
          HealthDisplay: c.default,
          HappinessExplain: f.default,
          NavbarDisplay: h.default
        },
        computed: (0, i.mapGetters) (['lifestylePane']),
        methods: (0, i.mapActions) ([])
      }
    },
    function (e, t, a) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var n = a(7);
      t.default = {
        name: 'assistants-display',
        computed: (0, n.mapGetters) (['assistants'])
      }
    },
    function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.default = {
        name: 'about-display'
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(14),
      r = n(i),
      s = a(7);
      t.default = {
        name: 'keybindings-display',
        computed: (0, s.mapGetters) (['keyBindings']),
        methods: (0, r.default) ({
        }, (0, s.mapActions) ([]))
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(7),
      r = a(337),
      s = n(r),
      o = a(333),
      u = n(o),
      l = a(336),
      c = n(l),
      d = a(334),
      f = n(d),
      v = a(47),
      h = n(v);
      t.default = {
        name: 'main-pane',
        components: {
          SettingsDisplay: s.default,
          AboutDisplay: u.default,
          PrivacyDisplay: c.default,
          KeybindingsDisplay: f.default,
          NavbarDisplay: h.default
        },
        computed: (0, i.mapGetters) (['otherPane']),
        methods: (0, i.mapActions) ([])
      }
    },
    function (e, t) {
      'use strict';
      Object.defineProperty(t, '__esModule', {
        value: !0
      }),
      t.default = {
        name: 'privacy-display'
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(14),
      r = n(i),
      s = a(7);
      t.default = {
        name: 'settings-display',
        computed: (0, s.mapGetters) (['settings',
        'saver']),
        methods: (0, r.default) ({
          exportSaveHelper: function () {
            this.$refs.savegamearea.value = this.saver.saveString
          },
          importSaveHelper: function () {
            this.importSave(this.$refs.savegamearea.value)
          },
          toggleNightMode: function () {
            window.document.body.classList.toggle('night-mode')
          }
        }, (0, s.mapActions) (['hardReset',
        'importSave']))
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(14),
      r = n(i),
      s = a(7),
      o = a(15),
      u = a(24),
      l = n(u);
      t.default = {
        name: 'area-button',
        components: {
          StatDisplay: l.default
        },
        props: [
          'entity'
        ],
        computed: (0, s.mapGetters) (['time',
        'research',
        'settings']),
        methods: (0, r.default) ({
          xpPerDay: function (e) {
            return (0, o.abbreviateNumber) (
              e.xp.xpPerHourStat.effective * this.research.duration.effective / 60,
              e.xp.xpPerHourStat.digits
            )
          },
          abbrLevel: function (e) {
            return e < 10000 ? e : (0, o.abbreviateNumber) (e, 2)
          }
        }, (0, s.mapActions) (['setActiveResearch']))
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(7),
      r = a(341),
      s = n(r),
      o = a(340),
      u = n(o),
      l = a(47),
      c = n(l);
      t.default = {
        name: 'lab-display',
        components: {
          ResearchDisplay: s.default,
          QueueDisplay: u.default,
          NavbarDisplay: c.default
        },
        computed: (0, i.mapGetters) (['labPane']),
        methods: (0, i.mapActions) ([])
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(14),
      r = n(i),
      s = a(7),
      o = a(389),
      u = n(o);
      t.default = {
        name: 'queue-display',
        components: {
          draggable: u.default
        },
        computed: (0, r.default) ({
          items: {
            get: function () {
              return this.researchQueue.state.items
            },
            set: function (e) {
              this.researchQueue.updateOrder(e)
            }
          }
        }, (0, s.mapGetters) (
          ['researchQueue',
          'areas',
          'autoResearch',
          'userInventory',
          'groundhogMarketPane',
          'autoResearchJustPause']
        )),
        methods: (0, r.default) ({
          checkMove: function (e) {
            return console.log(e.draggedContext.element),
            'apple' !== e.draggedContext.element.name
          }
        }, (0, s.mapActions) (['selectPane']))
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(7),
      r = a(338),
      s = n(r),
      o = a(24),
      u = n(o);
      t.default = {
        name: 'research-display',
        components: {
          AreaButton: s.default,
          StatDisplay: u.default
        },
        computed: (0, i.mapGetters) (
          ['researchPane',
          'settings',
          'baseResearchXpPerHourStat',
          'time',
          'studyMirroredShip']
        ),
        methods: (0, i.mapActions) (['selectPane'])
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(14),
      r = n(i),
      s = a(7),
      o = a(15);
      t.default = {
        name: 'clock-display',
        computed: (0, r.default) ({
          clockRotation: function () {
            return 'rotate(' + 15 * this.time.currentTime + ', 50, 50)'
          }
        }, (0, s.mapGetters) (
          ['time',
          'reverseSchedule',
          'currentActivity',
          'paused',
          'turbo',
          'bonusTicks',
          'settingsPane',
          'otherPane',
          'settings']
        )),
        methods: (0, r.default) ({
          formatDays: o.formatDays,
          selectSettings: function () {
            this.selectPane(this.otherPane),
            this.selectPane(this.settingsPane)
          }
        }, (0, s.mapActions) (['pauseGame',
        'speedupGame',
        'selectPane']))
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(14),
      r = n(i),
      s = a(7),
      o = a(24),
      u = n(o),
      l = a(15);
      t.default = {
        name: 'currency-display',
        components: {
          StatDisplay: u.default
        },
        computed: (0, s.mapGetters) (['activities',
        'currency',
        'stats']),
        methods: (0, r.default) ({
          abbreviateNumber: l.abbreviateNumber
        }, (0, s.mapActions) (['changeActivityTime']))
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(14),
      r = n(i),
      s = a(7),
      o = a(24),
      u = n(o);
      t.default = {
        name: 'happiness-display',
        components: {
          StatDisplay: u.default
        },
        computed: (0, s.mapGetters) (['stats',
        'happinessPane',
        'lifestylePane']),
        methods: (0, r.default) ({
          getEmoji: function (e) {
            return a(140) ('./' + this.stats.happiness.emojiName() + '_emoji.svg')
          },
          showInfo: function () {
            this.selectPane(this.lifestylePane),
            this.selectPane(this.happinessPane)
          }
        }, (0, s.mapActions) (['selectPane']))
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(14),
      r = n(i),
      s = a(7),
      o = a(24),
      u = n(o);
      t.default = {
        name: 'schedule-controller',
        computed: (0, s.mapGetters) (['activities',
        'research',
        'delta',
        'pressedKeys']),
        components: {
          StatDisplay: u.default
        },
        methods: (0, r.default) ({
          increaseActivityTime: function (e) {
            var t = 1;
            this.changeActivityTime([e,
            this.delta.getValue() * t])
          },
          decreaseActivityTime: function (e) {
            var t = 1;
            this.changeActivityTime([e,
            - this.delta.getValue() * t])
          }
        }, (0, s.mapActions) (['changeActivityTime']))
      }
    },
    function (e, t, a) {
      'use strict';
      function n(e) {
        return e &&
        e.__esModule ? e : {
        default:
          e
        }
      }
      Object.defineProperty(t, '__esModule', {
        value: !0
      });
      var i = a(10),
      r = n(i),
      s = a(14),
      o = n(s),
      u = a(7),
      l = a(342),
      c = n(l),
      d = a(345),
      f = n(d),
      v = a(343),
      h = n(v),
      p = a(344),
      m = n(p),
      y = a(15),
      _ = function (e, t) {
        return e.getValue() ? ' (A' + (t.getValue() ? 'P)' : ')') : ''
      };
      t.default = {
        name: 'sidebar-display',
        components: {
          ClockDisplay: c.default,
          ScheduleController: f.default,
          CurrencyDisplay: h.default,
          HappinessDisplay: m.default
        },
        methods: (0, o.default) ({
          timeSinceLastSave: function () {
            var e = new Date;
            return ((e.getTime() - this.time.lastSave.getValue()) / 1000).toFixed(0)
          },
          selectBoosts: function () {
            this.selectPane(this.lifestylePane),
            this.selectPane(this.boostsPane)
          },
          selectJobPane: function () {
            this.selectPane(this.jobPane)
          },
          selectResearchPane: function () {
            this.selectPane(this.labPane),
            this.selectPane(this.researchPane)
          },
          countBoosts: function () {
            var e = 0,
            t = !0,
            a = !1,
            n = void 0;
            try {
              for (
                var i,
                s = (0, r.default) (this.boosts);
                !(t = (i = s.next()).done);
                t = !0
              ) {
                var o = i.value;
                'available' === o.currentState() &&
                o.unlocked() &&
                (e += 1)
              }
            } catch (e) {
              a = !0,
              n = e
            } finally {
              try {
                !t &&
                s.return &&
                s.return()
              } finally {
                if (a) throw n
              }
            }
            return e
          },
          abbrLevel: function (e) {
            return (0, y.abbreviateNumber) (e, 0)
          }
        }, (0, u.mapActions) (['selectPane'])),
        computed: (0, o.default) ({
          autoPromoteString: function () {
            return _(this.autoPromote, this.autoPromoteJustPause)
          },
          autoResearchString: function () {
            return _(this.autoResearch, this.autoResearchJustPause)
          },
          autoBoostString: function () {
            return _(this.autoBoost, this.autoBoostJustPause)
          }
        }, (0, u.mapGetters) (
          ['boostsPane',
          'lifestylePane',
          'boosts',
          'currentJobContainer',
          'currentResearchContainer',
          'jobPane',
          'researchPane',
          'autoPromote',
          'autoPromoteJustPause',
          'autoResearch',
          'autoResearchJustPause',
          'autoBoost',
          'autoBoostJustPause',
          'time',
          'labPane']
        ))
      }
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t) {
    },
    function (e, t) {
    },
    function (e, t) {
    },
    function (e, t) {
    },
    function (e, t) {
    },
    function (e, t) {
    },
    function (e, t) {
    },
    function (e, t) {
    },
    function (e, t) {
    },
    function (e, t) {
    },
    function (e, t) {
    },
    function (e, t) {
    },
    function (e, t) {
    },
    function (e, t) {
    },
    function (e, t) {
    },
    function (e, t) {
    },
    function (e, t) {
    },
    function (e, t) {
    },
    function (e, t) {
    },
    function (e, t) {
    },
    function (e, t) {
    },
    function (e, t) {
    },
    function (e, t) {
    },
    function (e, t, a) {
      e.exports = a.p + 'ec7925575d8f686a3e0aa503b82e7dd7.mp3'
    },
    function (e, t, a) {
      e.exports = a.p + '8cf513b9f52f048bfe38da439ed9c474.mp3'
    },
    ,
    ,
    ,
    ,
    function (e, t) {
      e.exports = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgdmlld0JveD0iMCAwIDY0IDY0IgogICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA2NCA2NCIKICAgaWQ9InN2ZzM1NzMiCiAgIHZlcnNpb249IjEuMSIKICAgaW5rc2NhcGU6dmVyc2lvbj0iMC45MSByMTM3MjUiCiAgIHNvZGlwb2RpOmRvY25hbWU9InNtaWxpbmdfZW1vamkuc3ZnIj4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGEzNTg5Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZGVmcwogICAgIGlkPSJkZWZzMzU4NyIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEiCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCIKICAgICBncmlkdG9sZXJhbmNlPSIxMCIKICAgICBndWlkZXRvbGVyYW5jZT0iMTAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiCiAgICAgaW5rc2NhcGU6cGFnZXNoYWRvdz0iMiIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjE4NTUiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTA1NiIKICAgICBpZD0ibmFtZWR2aWV3MzU4NSIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6em9vbT0iMTQuMzU5Mzc1IgogICAgIGlua3NjYXBlOmN4PSIzMiIKICAgICBpbmtzY2FwZTpjeT0iMzIiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjY1IgogICAgIGlua3NjYXBlOndpbmRvdy15PSIyNCIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9InN2ZzM1NzMiIC8+CiAgPGNpcmNsZQogICAgIGN4PSIzMiIKICAgICBjeT0iMzIiCiAgICAgcj0iMzAiCiAgICAgZmlsbD0iI2ZmZGQ2NyIKICAgICBpZD0iY2lyY2xlMzU3NSIgLz4KICA8ZwogICAgIGZpbGw9IiM2NjRlMjciCiAgICAgaWQ9ImczNTc3Ij4KICAgIDxjaXJjbGUKICAgICAgIGN4PSIyMC41IgogICAgICAgY3k9IjI2LjYiCiAgICAgICByPSI1IgogICAgICAgaWQ9ImNpcmNsZTM1NzkiIC8+CiAgICA8Y2lyY2xlCiAgICAgICBjeD0iNDMuNSIKICAgICAgIGN5PSIyNi42IgogICAgICAgcj0iNSIKICAgICAgIGlkPSJjaXJjbGUzNTgxIiAvPgogICAgPHBhdGgKICAgICAgIGQ9Im00NC42IDQwLjNjLTguMSA1LjctMTcuMSA1LjYtMjUuMiAwLTEtLjctMS44LjUtMS4yIDEuNiAyLjUgNCA3LjQgNy43IDEzLjggNy43czExLjMtMy42IDEzLjgtNy43Yy42LTEuMS0uMi0yLjMtMS4yLTEuNiIKICAgICAgIGlkPSJwYXRoMzU4MyIgLz4KICA8L2c+CiAgPHBhdGgKICAgICBzdHlsZT0iZmlsbDojMDBmZjAwIgogICAgIGQ9Ik0gMzAuMjc5ODY5LDYxLjkyNTQxIEMgMjUuMDIxMjU3LDYxLjYyNzQwMSAxOS43NTQ5OTEsNTkuODcxOTI1IDE1LjQyMzY4Miw1Ni45NzMxOTQgMTEuNzg5ODIzLDU0LjU0MTIzMyA4LjY4NDkwNjEsNTEuMzI5MDIzIDYuNDcwOTAyMiw0Ny43MTEwNDMgMy45MDg1OTgxLDQzLjUyMzg5NCAyLjQ3OTgxMDgsMzkuMDg0OTgyIDIuMTA0Mjc1MiwzNC4xNDQ5NCAyLjAwMjA2MzQsMzIuODAwMzc4IDIuMDU4MzY0MSwyOS44NTQxMjIgMi4yMTAwNzI2LDI4LjYwODQ4NyAzLjA1MTExNzcsMjEuNzAyOTEzIDUuOTc2OTQ2NiwxNS42NTI1NDMgMTAuODE0NzQ0LDEwLjgxNDc0NCAxNS42NTAyNDMsNS45NzkyNDYgMjEuNzAzMTMzLDMuMDUyNjU1MSAyOC42MDg0ODcsMi4yMTE0MTU0IDI5Ljg1ODExLDIuMDU5MTgxIDMyLjgwMjI2MSwyLjAwMjIwNjUgMzQuMTQ0OTQsMi4xMDQyNzUyIGMgNi40MjI4NzYsMC40ODgyNTg4IDEyLjE3NDg5MiwyLjgxNzM2NzEgMTcuMTMxNjY1LDYuOTM2OTYwOSAwLjk0MDU3OSwwLjc4MTcxODYgMi42MTA0MjMsMi40MzM5MzE5IDMuNDMwNTE5LDMuMzk0Mjk4OSAyLjYwNjQ0MSwzLjA1MjI0OSA0LjQ2MTY3NSw2LjMxMTAzOCA1LjY5ODU1NywxMC4wMDk3MzIgMS40NjA2Miw0LjM2Nzc0MSAxLjg5ODg2NCw4Ljg1NDYwNiAxLjMxMjc4NywxMy40NDA2OTYgLTEuMjUzNjQ1LDkuODA5ODczIC03LjQwMDUzOCwxOC40NTc3OTkgLTE2LjI4MjI0MSwyMi45MDcxMjIgLTMuNzY2MzI5LDEuODg2NzU3IC03LjU4MjAyOCwyLjg5MDU5MSAtMTEuOTE4MDU1LDMuMTM1NCAtMS40MTAyNzcsMC4wNzk2MiAtMS43ODUyOTEsMC4wNzkyNyAtMy4yMzgzMDMsLTAuMDAzMSBsIDAsM2UtNiB6IE0gMzMuNzgyMDcsNDkuNTMxODQ2IGMgNC42OTQ1MjYsLTAuNTA5Mzc5IDguOTk4ODIzLC0zLjEwODM3NyAxMS42NjgxMDUsLTcuMDQ1MzcxIDAuNzEwMDI0LC0xLjA0NzIzMyAwLjc3MzA5MiwtMS43MTg0NjcgMC4yMDgwNzYsLTIuMjE0NTU3IC0wLjM4MjU2NywtMC4zMzU4OTkgLTAuNjUxNywtMC4yNzkyNDQgLTEuNTU5NTM2LDAuMzI4MjkxIC0zLjE1Nzg5OSwyLjExMzMwNiAtNi41NTEzNzIsMy40MTA3OTkgLTkuOTE4OTU0LDMuNzkyNTA5IC0wLjk5NDQxOCwwLjExMjcxNSAtMy4yNzI1NTQsMC4xMTM2NjEgLTQuMjQ4MDk2LDAuMDAxOCAtMy40MTA2NzUsLTAuMzkxMjE1IC02LjcwNDMxNywtMS42Mzc1MDMgLTEwLjAwOTA3MiwtMy43ODczNTMgLTEuMDIxNzk4LC0wLjY2NDcxMyAtMS4zOTcyMDgsLTAuNjkyNDAyIC0xLjc3NTU2MiwtMC4xMzA5NjIgLTAuMTE4Nzk0LDAuMTc2Mjc3IC0wLjE1ODc4MywwLjMzNDgxNCAtMC4xNTg3ODMsMC42Mjk0OSAwLDAuNDc1NzY4IDAuMTYxODI4LDAuODIzODMgMC43ODM3MTQsMS42ODU2MjcgMi41MDQ5MzQsMy40NzEyODYgNi40MDExOTgsNS45MTkzNjIgMTAuNDk4MTE0LDYuNTk2MTA4IDAuNDc4NzgxLDAuMDc5MDkgMC45OTU4NjUsMC4xNTUxODUgMS4xNDkwNzUsMC4xNjkxMDcgMC42NDQ2NiwwLjA1ODU3IDIuNzM3MjUsMC4wNDMyNCAzLjM2MjkxOSwtMC4wMjQ2NSBsIDAsMWUtNiB6IE0gMjEuMjYxMzcxLDMxLjU2MzY5OSBjIDEuMTI0MTkzLC0wLjE4MTU4MiAxLjkzMDU0NywtMC42MDM0MTMgMi43ODY5MjMsLTEuNDU3OTMyIDAuOTU5MTU3LC0wLjk1NzA3NyAxLjM3ODUwOCwtMS45MDk1ODYgMS40NDE3OTcsLTMuMjc0ODgxIDAuMDMxMTQsLTAuNjcxNzczIDAuMDEzMSwtMC44OTg4NDkgLTAuMTEwNjQyLC0xLjM5MjgxOCAtMC41NzUwMTQsLTIuMjk1Mzk1IC0yLjUxMzE3MywtMy44Mjk5MyAtNC44NDkzMDgsLTMuODM5NDMzIC0yLjIzMjM1MSwtMC4wMDkxIC00LjA2NTA5NiwxLjMwNzE3IC00LjgxNTE0MywzLjQ1ODE2NiAtMC4xNzcyNjgsMC41MDgzNzMgLTAuMTk0MTMyLDAuNjQyNDQ2IC0wLjE5MjcwMywxLjUzMjEgMC4wMDE0LDAuODY4MjIyIDAuMDIxOTEsMS4wMzU5NzMgMC4xODczNjQsMS41MzIxIDAuMjYyNDM5LDAuNzg2OTQxIDAuNjMwMDU4LDEuMzc5OTUyIDEuMjMzOTc0LDEuOTkwNTMyIDEuMTczNzkxLDEuMTg2NzQ3IDIuNzI2OTUyLDEuNzA5MTE0IDQuMzE3NzM4LDEuNDUyMTY2IHogbSAyMy4xNDY3MTUsLTAuMDI2NDEgYyAxLjk3OTAzMywtMC4zNzg2NTIgMy40NDc2NTYsLTEuNzY5NzY0IDMuOTc4NzcsLTMuNzY4Nzc2IDAuMTY2NTkyLC0wLjYyNzAyMiAwLjE1MTQyLC0xLjc2OTE5OCAtMC4wMzI0LC0yLjQzOTIzMyAtMC42MTI4NTgsLTIuMjMzODg0IC0yLjU1NDU3LC0zLjczMTMxMiAtNC44MzgzODksLTMuNzMxMzEyIC0wLjgzOTc2MiwwIC0xLjQ2NTE3LDAuMTM0OTMzIC0yLjE2NzU0MSwwLjQ2NzY1MSAtMS4wMDY2NjEsMC40NzY4NjMgLTEuODQyNDA0LDEuMjk5MTI2IC0yLjMzMjM5MywyLjI5NDc3MiAtMC4zOTI4OTUsMC43OTgzNTEgLTAuNTEzOTEsMS4zMjE2MDUgLTAuNTE1Mzk2LDIuMjI4NTA5IC0wLjAwMTYsMC45NDgwNzEgMC4wODk4NywxLjMzNzExNSAwLjUyODc5OCwyLjI1MDI4IDAuMjk0NDE3LDAuNjEyNTE1IDAuNDI5MjQ0LDAuODAyMTgyIDAuOTE2Mzc5LDEuMjg5MTA2IDEuMjA0OTk2LDEuMjA0NDc4IDIuODM3Mjc4LDEuNzE5ODk3IDQuNDYyMTczLDEuNDA5MDAzIHoiCiAgICAgaWQ9InBhdGgzNTkxIgogICAgIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIC8+Cjwvc3ZnPgo='
    },
    function (e, t) {
      e.exports = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiPjxjaXJjbGUgY3g9IjMyIiBjeT0iMzIiIHI9IjMwIiBmaWxsPSIjZmZkZDY3Ii8+PGcgZmlsbD0iIzY2NGUyNyI+PGNpcmNsZSBjeD0iMjAuNSIgY3k9IjI3LjYiIHI9IjUiLz48Y2lyY2xlIGN4PSI0My41IiBjeT0iMjcuNiIgcj0iNSIvPjxwYXRoIGQ9Im0zOC45IDQ4aC0xMy44Yy0xLjUgMC0xLjUtNCAwLTRoMTMuN2MxLjYgMCAxLjYgNCAuMSA0Ii8+PC9nPjwvc3ZnPg=='
    },
    function (e, t, a) {
      e.exports = a.p + 'sad_emoji.45439cb.svg'
    },
    function (e, t, a) {
      e.exports = a.p + 'globe.4bb54c1.png'
    },
    function (e, t, a) {
      a(293);
      var n = a(3) (a(164), a(381), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      a(290);
      var n = a(3) (a(165), a(377), 'data-v-6b0b1256', null);
      e.exports = n.exports
    },
    function (e, t, a) {
      var n = a(3) (a(166), a(356), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      var n = a(3) (a(167), a(350), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      var n = a(3) (a(168), a(357), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      a(281);
      var n = a(3) (a(169), a(361), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      var n = a(3) (a(171), a(358), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      var n = a(3) (a(173), a(360), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      var n = a(3) (a(174), a(385), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      a(292);
      var n = a(3) (a(175), a(380), 'data-v-718331c8', null);
      e.exports = n.exports
    },
    function (e, t, a) {
      var n = a(3) (a(177), a(386), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      var n = a(3) (a(178), a(351), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      var n = a(3) (a(180), a(384), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      a(286);
      var n = a(3) (a(181), a(369), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      a(288);
      var n = a(3) (a(182), a(375), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      a(279);
      var n = a(3) (a(183), a(353), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      var n = a(3) (a(184), a(363), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      var n = a(3) (a(185), a(372), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      a(285);
      var n = a(3) (a(186), a(368), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      a(294);
      var n = a(3) (a(187), a(382), 'data-v-7d0e3d70', null);
      e.exports = n.exports
    },
    function (e, t, a) {
      var n = a(3) (a(188), a(359), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      var n = a(3) (a(189), a(362), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      var n = a(3) (a(190), a(374), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      var n = a(3) (a(191), a(347), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      var n = a(3) (a(192), a(352), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      a(289);
      var n = a(3) (a(193), a(376), 'data-v-629f3368', null);
      e.exports = n.exports
    },
    function (e, t, a) {
      var n = a(3) (a(194), a(387), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      var n = a(3) (a(195), a(373), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      var n = a(3) (a(196), a(379), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      a(296);
      var n = a(3) (a(197), a(388), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      var n = a(3) (a(198), a(355), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      a(295);
      var n = a(3) (a(199), a(383), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      a(278);
      var n = a(3) (a(200), a(349), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      a(280);
      var n = a(3) (a(201), a(354), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      a(284);
      var n = a(3) (a(202), a(367), 'data-v-324fb416', null);
      e.exports = n.exports
    },
    function (e, t, a) {
      var n = a(3) (a(203), a(366), null, null);
      e.exports = n.exports
    },
    function (e, t, a) {
      a(287);
      var n = a(3) (a(204), a(370), 'data-v-4db364fe', null);
      e.exports = n.exports
    },
    function (e, t, a) {
      a(277);
      var n = a(3) (a(205), a(348), 'data-v-0353d931', null);
      e.exports = n.exports
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              e._m(0),
              e._v(' '),
              a(
                'small',
                [
                  e._v(
                    'You only pay for work/research assistants if you\'re actually working/researching'
                  )
                ]
              ),
              e._v(' '),
              a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a(
                    'table',
                    e._l(
                      e.assistants,
                      function (t) {
                        return t.unlocked() ? a(
                          'tr',
                          {
                            staticStyle: {
                              'padding-bottom': '10px'
                            }
                          },
                          [
                            a(
                              'td',
                              {
                                staticStyle: {
                                  'padding-right': '10px'
                                }
                              },
                              [
                                a(
                                  'button',
                                  {
                                    class : [
                                      'btn',
                                      t.getValue() ? 'btn-success' : 'btn-secondary'
                                    ],
                                    staticStyle: {
                                      width: '100%'
                                    },
                                    attrs: {
                                      id: 'checkbox_' + t.id,
                                      role: 'button'
                                    },
                                    on: {
                                      click: function (e) {
                                        t.toggleValue()
                                      }
                                    }
                                  },
                                  [
                                    e._v('\n            ' + e._s(t.name) + '\n          ')
                                  ]
                                )
                              ]
                            ),
                            e._v(' '),
                            a(
                              'td',
                              {
                                staticStyle: {
                                  'padding-right': '10px'
                                }
                              },
                              [
                                e._v('\n          ' + e._s(t.description) + '\n        ')
                              ]
                            ),
                            e._v(' '),
                            a('td', [
                              e._v('\n          $' + e._s(t.cost) + '/day\n        ')
                            ])
                          ]
                        ) : t.locks.keyholdersUnlocked() ? a(
                          'tr',
                          {
                            staticStyle: {
                              'padding-bottom': '10px'
                            }
                          },
                          [
                            a(
                              'td',
                              {
                                attrs: {
                                  colspan: '3'
                                }
                              },
                              [
                                e._v(
                                  '\n          Requires: ' + e._s(t.locks.lockString()) + '\n        '
                                )
                              ]
                            )
                          ]
                        ) : e._e()
                      }
                    )
                  )
                ]
              )
            ]
          )
        },
        staticRenderFns: [
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a(
              'div',
              {
                staticClass: 'row',
                staticStyle: {
                  'padding-top': '20px'
                }
              },
              [
                a('h5', [
                  e._v(' Assistants')
                ])
              ]
            )
          }
        ]
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            {
              staticClass: 'col-auto small-paper',
              staticStyle: {
                'padding-left': '25px',
                'padding-right': '25px',
                'min-width': '10rem'
              }
            },
            [
              a('clock-display', {
                staticClass: 'padded'
              }),
              e._v(' '),
              a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a('schedule-controller', {
                    staticClass: 'padded'
                  })
                ],
                1
              ),
              e._v(' '),
              a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a('happiness-display', {
                    staticClass: 'padded'
                  })
                ],
                1
              ),
              e._v(' '),
              a('div', {
                staticClass: 'row'
              }, [
                a('currency-display')
              ], 1),
              e._v(' '),
              a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a(
                    'a',
                    {
                      attrs: {
                        href: '#'
                      },
                      on: {
                        click: e.selectBoosts
                      }
                    },
                    [
                      e._v(
                        e._s(e.countBoosts()) + ' Boost(s) ready ' + e._s(e.autoBoostString)
                      )
                    ]
                  )
                ]
              ),
              e._v(' '),
              a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a(
                    'a',
                    {
                      attrs: {
                        href: '#'
                      },
                      on: {
                        click: e.selectJobPane
                      }
                    },
                    [
                      e._v(
                        e._s(
                          e.currentJobContainer.job.name + ': ' + e.abbrLevel(e.currentJobContainer.job.xp.state.level) + e.autoPromoteString
                        )
                      )
                    ]
                  )
                ]
              ),
              e._v(' '),
              e.currentResearchContainer.area ? a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a(
                    'a',
                    {
                      attrs: {
                        href: '#'
                      },
                      on: {
                        click: e.selectResearchPane
                      }
                    },
                    [
                      e._v(
                        e._s(
                          e.currentResearchContainer.area.name + ': ' + e.abbrLevel(e.currentResearchContainer.area.xp.state.level) + e.autoResearchString
                        )
                      )
                    ]
                  )
                ]
              ) : e._e(),
              e._v(' '),
              a(
                'div',
                {
                  staticClass: 'row',
                  staticStyle: {
                    'padding-top': '20px'
                  }
                },
                [
                  a('small', [
                    e._v('Saved ' + e._s(e.timeSinceLastSave()) + 's ago')
                  ])
                ]
              )
            ],
            1
          )
        },
        staticRenderFns: []
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a(
                    'table',
                    [
                      a(
                        'tr',
                        [
                          a('th', {
                            staticStyle: {
                              width: '13rem'
                            }
                          }),
                          e._v(' '),
                          a('th', {
                            staticStyle: {
                              width: '4rem'
                            }
                          }),
                          e._v(' '),
                          a('th', {
                            staticStyle: {
                              width: '12rem'
                            }
                          }),
                          e._v(' '),
                          a('th', {
                            staticStyle: {
                              width: '5rem'
                            }
                          }),
                          e._v(' '),
                          a('th', {
                            staticStyle: {
                              width: '3rem'
                            }
                          }),
                          e._v(' '),
                          e.time.currentLifeThisLoop.getValue() > 1 ? a('th', {
                            staticClass: 'text-right',
                            staticStyle: {
                              width: '4rem'
                            }
                          }) : e._e()
                        ]
                      ),
                      e._v(' '),
                      e._l(
                        e.researchPane.subpanes,
                        function (t) {
                          return a(
                            'tbody',
                            {
                              staticClass: 'table-cat',
                              attrs: {
                                id: t.id
                              }
                            },
                            [
                              'selfimprovement' === t.field.id ? a(
                                'tr',
                                {
                                  staticClass: 'tr-name'
                                },
                                [
                                  a(
                                    'td',
                                    {
                                      attrs: {
                                        colspan: '1'
                                      },
                                      on: {
                                        click: function (a) {
                                          e.selectPane(t)
                                        }
                                      }
                                    },
                                    [
                                      a(
                                        'span',
                                        {
                                          staticClass: 'collapse-icon rounded-circle'
                                        },
                                        [
                                          e._v(e._s(t.state.selected ? '-' : '+'))
                                        ]
                                      ),
                                      a('b', [
                                        e._v(e._s(t.field.name))
                                      ])
                                    ]
                                  ),
                                  e._v(' '),
                                  a('td', [
                                    e._v('Level')
                                  ]),
                                  e._v(' '),
                                  a('td', [
                                    e._v('Effect')
                                  ]),
                                  e._v(' '),
                                  a('td', [
                                    e._v('XP left')
                                  ]),
                                  e._v(' '),
                                  a(
                                    'td',
                                    [
                                      e._v(e._s(e.settings.xpPerHour.getValue() ? 'XP/h' : 'XP/day'))
                                    ]
                                  ),
                                  e._v(' '),
                                  e.time.currentLifeThisLoop.getValue() > 1 ? a('td', {
                                    staticClass: 'text-right'
                                  }, [
                                    e._v('Max Lvl')
                                  ]) : e._e()
                                ]
                              ) : a(
                                'tr',
                                {
                                  staticClass: 'tr-name'
                                },
                                [
                                  a(
                                    'td',
                                    {
                                      attrs: {
                                        colspan: '6'
                                      },
                                      on: {
                                        click: function (a) {
                                          e.selectPane(t)
                                        }
                                      }
                                    },
                                    [
                                      a(
                                        'span',
                                        {
                                          staticClass: 'collapse-icon rounded-circle'
                                        },
                                        [
                                          e._v(e._s(t.state.selected ? '-' : '+'))
                                        ]
                                      ),
                                      a('b', [
                                        e._v(e._s(t.field.name))
                                      ])
                                    ]
                                  )
                                ]
                              ),
                              e._v(' '),
                              e._l(
                                t.field.areas,
                                function (n) {
                                  return n.unlocked() &&
                                  t.state.selected ? a('area-button', {
                                    attrs: {
                                      entity: n
                                    }
                                  }) : (
                                    n.locks.keyholdersUnlocked() ||
                                    e.studyMirroredShip.xp.state.level > 0 &&
                                    'area_constructPowerPlant' === n.id
                                  ) &&
                                  t.state.selected ? a(
                                    'tr',
                                    [
                                      a(
                                        'td',
                                        {
                                          attrs: {
                                            colspan: '6'
                                          }
                                        },
                                        [
                                          e._v('\n            Required: '),
                                          a('i', [
                                            e._v(e._s(n.locks.lockString()))
                                          ])
                                        ]
                                      )
                                    ]
                                  ) : e._e()
                                }
                              ),
                              e._v(' '),
                              e._m(0, !0)
                            ],
                            2
                          )
                        }
                      )
                    ],
                    2
                  )
                ]
              ),
              e._v(' '),
              a(
                'div',
                {
                  staticClass: 'row',
                  staticStyle: {
                    'padding-top': '20px'
                  }
                },
                [
                  a(
                    'button',
                    {
                      staticClass: 'btn btn-info',
                      on: {
                        click: function (t) {
                          e.settings.xpPerHour.toggleValue()
                        }
                      }
                    },
                    [
                      e._v(
                        '\n      ' + e._s(e.settings.xpPerHour.getValue() ? 'XP/h' : 'XP/day') + '\n    '
                      )
                    ]
                  ),
                  e._v(' '),
                  a(
                    'span',
                    {
                      staticStyle: {
                        'padding-left': '20px'
                      }
                    },
                    [
                      a('stat-display', {
                        attrs: {
                          stat: e.baseResearchXpPerHourStat
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ]
          )
        },
        staticRenderFns: [
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a('tr', [
              a('td', {
                staticStyle: {
                  'padding-bottom': '15px'
                }
              })
            ])
          }
        ]
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              a(
                'div',
                {
                  staticClass: 'modal bd-example-modal-lg',
                  attrs: {
                    id: 'bonusticksmodal',
                    tabindex: '-1',
                    role: 'dialog'
                  }
                },
                [
                  a(
                    'div',
                    {
                      staticClass: 'modal-dialog modal-lg'
                    },
                    [
                      a(
                        'div',
                        {
                          staticClass: 'modal-content'
                        },
                        [
                          e._m(0),
                          e._v(
                            '\n        You gained ' + e._s(e.formatDays(e.time.offlineBonusTicks)) + ' bonus days (double speed) while you were offline.\n        '
                          ),
                          a(
                            'nobr',
                            [
                              e._v('Click '),
                              a('i', {
                                staticClass: 'icon ion-ios-fastforward-outline'
                              }),
                              e._v(' to use them.')
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  )
                ]
              )
            ]
          )
        },
        staticRenderFns: [
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a(
              'div',
              {
                staticClass: 'modal-header'
              },
              [
                a('h5', {
                  staticClass: 'modal-title'
                }, [
                  e._v('Offline Bonus')
                ]),
                e._v(' '),
                a(
                  'button',
                  {
                    staticClass: 'close',
                    attrs: {
                      type: 'button',
                      'data-dismiss': 'modal'
                    }
                  },
                  [
                    e._v('×')
                  ]
                )
              ]
            )
          }
        ]
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            {
              staticClass: 'modal',
              attrs: {
                id: 'progress-modal',
                'data-backdrop': 'static'
              }
            },
            [
              a(
                'div',
                {
                  staticClass: 'modal-dialog',
                  attrs: {
                    role: 'document'
                  }
                },
                [
                  a(
                    'div',
                    {
                      staticClass: 'modal-content'
                    },
                    [
                      e._m(0),
                      e._v(' '),
                      a(
                        'div',
                        {
                          staticClass: 'modal-body'
                        },
                        [
                          a(
                            'p',
                            [
                              e._v(
                                'Calculating progress since you left. ' + e._s(e.daysBehind) + ' days left.'
                              )
                            ]
                          ),
                          e._v(' '),
                          a(
                            'a',
                            {
                              attrs: {
                                href: '#'
                              },
                              on: {
                                click: e.resetTimer
                              }
                            },
                            [
                              e._v('Just let me play!')
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          )
        },
        staticRenderFns: [
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a(
              'div',
              {
                staticClass: 'modal-header'
              },
              [
                a('h5', {
                  staticClass: 'modal-title'
                }, [
                  e._v('Idle Progress')
                ])
              ]
            )
          }
        ]
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement;
          e._self._c ||
          t;
          return e._m(0)
        },
        staticRenderFns: [
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a(
              'div',
              [
                a('h3', [
                  e._v('About')
                ]),
                e._v('\n        Developed by M. Gronbach meismo@gmail.com.\n')
              ]
            )
          }
        ]
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            e._l(
              e.events,
              function (t) {
                return t.unlocked() ? a(
                  'div',
                  {
                    staticClass: 'small-paper',
                    staticStyle: {
                      padding: '20px'
                    }
                  },
                  [
                    a(
                      'div',
                      {
                        staticClass: 'row',
                        on: {
                          click: function (e) {
                            t.state.expanded = !t.state.expanded
                          }
                        }
                      },
                      [
                        a('h5', [
                          e._v(e._s(t.name))
                        ]),
                        a('br'),
                        a('br')
                      ]
                    ),
                    e._v(' '),
                    t.state.expanded ? a(
                      'div',
                      e._l(
                        t.nodes,
                        function (t) {
                          return t.unlocked() ? a(
                            'div',
                            [
                              e._v('\n          ' + e._s(t.name)),
                              a('br'),
                              e._v(' '),
                              t.paths ? a(
                                'ul',
                                e._l(
                                  t.paths,
                                  function (n) {
                                    return a(
                                      'li',
                                      [
                                        a(
                                          'button',
                                          {
                                            staticClass: 'btn btn-info',
                                            staticStyle: {
                                              margin: '10px'
                                            },
                                            attrs: {
                                              role: 'button',
                                              disabled: !n.state.enabled
                                            },
                                            on: {
                                              click: function (e) {
                                                t.selectPath(n)
                                              }
                                            }
                                          },
                                          [
                                            e._v('\n                ' + e._s(n.name) + '\n              ')
                                          ]
                                        )
                                      ]
                                    )
                                  }
                                )
                              ) : e._e()
                            ]
                          ) : e._e()
                        }
                      )
                    ) : e._e()
                  ]
                ) : e._e()
              }
            )
          )
        },
        staticRenderFns: []
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              a(
                'div',
                {
                  staticClass: 'row',
                  staticStyle: {
                    display: 'flex',
                    'justify-content': 'space-between'
                  }
                },
                [
                  a(
                    'span',
                    [
                      e._v(
                        '\n        Age ' + e._s(18 + e.time.currentDay.getYear()) + '\n        Day ' + e._s(e.time.currentDay.getDayOfYear()) + '\n    '
                      )
                    ]
                  ),
                  e._v(' '),
                  a(
                    'span',
                    [
                      a(
                        'a',
                        {
                          class : [
                            'icon',
                            e.settings.playSounds.getValue() ? 'ion-ios-volume-up' : 'ion-ios-volume-off'
                          ],
                          staticStyle: {
                            'font-size': 'x-large'
                          },
                          attrs: {
                            href: '#'
                          },
                          on: {
                            click: function (t) {
                              e.settings.playSounds.toggleValue()
                            }
                          }
                        }
                      ),
                      e._v(' '),
                      a(
                        'a',
                        {
                          staticClass: 'icon ion-ios-settings',
                          staticStyle: {
                            'font-size': 'x-large'
                          },
                          attrs: {
                            href: '#'
                          },
                          on: {
                            click: e.selectSettings
                          }
                        }
                      )
                    ]
                  )
                ]
              ),
              e._v(' '),
              a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a(
                    'button',
                    {
                      staticClass: 'btn btn-secondary',
                      staticStyle: {
                        width: '3rem'
                      },
                      on: {
                        click: e.pauseGame
                      }
                    },
                    [
                      a(
                        'i',
                        {
                          class : [
                            'icon',
                            e.paused.getValue() ? 'ion-ios-pause' : 'ion-ios-pause-outline'
                          ]
                        }
                      )
                    ]
                  ),
                  e._v(' '),
                  a(
                    'button',
                    {
                      staticClass: 'btn btn-secondary',
                      staticStyle: {
                        width: '3rem'
                      },
                      on: {
                        click: e.speedupGame
                      }
                    },
                    [
                      a(
                        'i',
                        {
                          class : [
                            'icon',
                            e.turbo.getValue() ? 'ion-ios-fastforward' : 'ion-ios-fastforward-outline'
                          ]
                        }
                      )
                    ]
                  ),
                  e._v(' '),
                  a(
                    'small',
                    {
                      staticStyle: {
                        'padding-left': '10px',
                        'padding-top': '10px'
                      }
                    },
                    [
                      e._v('(' + e._s(e.formatDays(e.bonusTicks.getValue())) + ')')
                    ]
                  )
                ]
              )
            ]
          )
        },
        staticRenderFns: []
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              e.labPane.state.explained ? a(
                'div',
                [
                  a(
                    'div',
                    [
                      a('navbar-display', {
                        attrs: {
                          panes: e.labPane.subpanes
                        }
                      }),
                      e._v(' '),
                      a(
                        'div',
                        {
                          staticClass: 'tab-content small-paper',
                          staticStyle: {
                            'padding-left': '20px',
                            'padding-top': '20px',
                            'min-height': '100%'
                          }
                        },
                        e._l(
                          e.labPane.subpanes,
                          function (t) {
                            return t.state.selected ? a(
                              'div',
                              {
                                class : [
                                  t.state.selected ? 'active' : ''
                                ],
                                attrs: {
                                  id: t.id
                                }
                              },
                              [
                                a(t.component, {
                                  tag: 'div'
                                })
                              ]
                            ) : e._e()
                          }
                        )
                      )
                    ],
                    1
                  )
                ]
              ) : a(
                'div',
                [
                  e._v(
                    '\n    You should probably learn stuff if you don\'t want to flip burgers all your life.'
                  ),
                  a('br'),
                  e._v(
                    '\n    Actually, you should learn stuff even if you do want to flip burgers all your life.'
                  ),
                  a('br'),
                  e._v(' '),
                  a(
                    'button',
                    {
                      staticClass: 'btn btn-success',
                      on: {
                        click: function (t) {
                          e.labPane.state.explained = !0
                        }
                      }
                    },
                    [
                      e._v('Learn Stuff')
                    ]
                  )
                ]
              )
            ]
          )
        },
        staticRenderFns: []
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return e.currency.money.austerityAlert ? a(
            'div',
            {
              staticClass: 'alert alert-danger alert-dismissible fade show',
              attrs: {
                role: 'alert'
              }
            },
            [
              a(
                'button',
                {
                  staticClass: 'close',
                  attrs: {
                    type: 'button',
                    'aria-label': 'Close'
                  },
                  on: {
                    click: function (t) {
                      e.acknowledgeAusterity()
                    }
                  }
                },
                [
                  a('span', {
                    attrs: {
                      'aria-hidden': 'true'
                    }
                  }, [
                    e._v('×')
                  ])
                ]
              ),
              e._v(' '),
              a('strong', [
                e._v('You went bankrupt!')
              ]),
              e._v(
                ' Your expenses were automatically reduced, and work hours increased.'
              ),
              a('br'),
              e._v(
                'Your assistants were fired, and you moved back to your parents.'
              ),
              a('br'),
              e._v('\n  Take care of your finances!\n')
            ]
          ) : e._e()
        },
        staticRenderFns: []
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'footer',
            {
              staticClass: 'footer'
            },
            [
              a(
                'div',
                {
                  staticClass: 'container'
                },
                [
                  a(
                    'ul',
                    {
                      staticClass: 'nav nav-tabs'
                    },
                    e._l(
                      e.panes,
                      function (t) {
                        return t.footer ? a(
                          'li',
                          {
                            staticClass: 'nav-item',
                            on: {
                              click: function (a) {
                                e.selectPane(t)
                              }
                            }
                          },
                          [
                            a(
                              'a',
                              {
                                class : [
                                  'nav-link',
                                  t.state.selected ? 'active' : '',
                                  t.state.notified ? 'item-notified' : ''
                                ],
                                attrs: {
                                  href: '#' + t.id
                                }
                              },
                              [
                                e._v('\n          ' + e._s(t.name) + '\n        ')
                              ]
                            )
                          ]
                        ) : e._e()
                      }
                    )
                  )
                ]
              )
            ]
          )
        },
        staticRenderFns: []
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              e.journalPane.state.explained ? a(
                'div',
                [
                  a('navbar-display', {
                    attrs: {
                      panes: e.journalPane.subpanes
                    }
                  }),
                  e._v(' '),
                  a(
                    'div',
                    {
                      staticClass: 'tab-content small-paper',
                      staticStyle: {
                        'padding-left': '20px',
                        'padding-top': '20px',
                        'min-height': '100%'
                      }
                    },
                    e._l(
                      e.journalPane.subpanes,
                      function (t) {
                        return t.state.selected ? a(
                          'div',
                          {
                            class : [
                              t.state.selected ? 'active' : ''
                            ],
                            attrs: {
                              id: t.id
                            }
                          },
                          [
                            a(t.component, {
                              tag: 'div'
                            })
                          ]
                        ) : e._e()
                      }
                    )
                  )
                ],
                1
              ) : a(
                'div',
                [
                  a(
                    'q',
                    [
                      e._v(
                        'History is not a burden on the memory but an illumination of the soul.'
                      )
                    ]
                  ),
                  e._v('\n    --Lord Acton'),
                  a('br'),
                  e._v(' '),
                  a(
                    'button',
                    {
                      staticClass: 'btn btn-success',
                      on: {
                        click: function (t) {
                          e.journalPane.state.explained = !0
                        }
                      }
                    },
                    [
                      e._v('Ok ok, I\'ll get a Journal')
                    ]
                  )
                ]
              )
            ]
          )
        },
        staticRenderFns: []
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              e._m(0),
              e._v(' '),
              a(
                'div',
                {
                  staticClass: 'row',
                  staticStyle: {
                    'padding-bottom': '20px'
                  }
                },
                [
                  e._v('\n      Higher food quality increases your health!\n  ')
                ]
              ),
              e._v(' '),
              a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a(
                    'table',
                    [
                      e._m(1),
                      e._v(' '),
                      e._l(
                        e.foodOptions,
                        function (t) {
                          return a(
                            'tr',
                            [
                              a(
                                'td',
                                [
                                  a(
                                    'button',
                                    {
                                      class : [
                                        'btn',
                                        t.state.selected ? 'btn-primary' : 'btn-secondary'
                                      ],
                                      staticStyle: {
                                        width: '100%'
                                      },
                                      on: {
                                        click: function (a) {
                                          e.selectFoodOption(t)
                                        }
                                      }
                                    },
                                    [
                                      e._v(e._s(t.name))
                                    ]
                                  )
                                ]
                              ),
                              e._v(' '),
                              a(
                                'td',
                                {
                                  staticClass: 'text-right'
                                },
                                [
                                  a(
                                    'span',
                                    {
                                      style: 'color:' + (t.enoughFreeTime() ? 'grey' : 'red')
                                    },
                                    [
                                      e._v(e._s(e.formatMinutes(t.time)))
                                    ]
                                  )
                                ]
                              ),
                              e._v(' '),
                              a(
                                'td',
                                {
                                  staticClass: 'text-right'
                                },
                                [
                                  a(
                                    'span',
                                    {
                                      style: 'color: ' + (t.enoughMoney() ? 'grey' : 'orange')
                                    },
                                    [
                                      e._v('$' + e._s(t.cost))
                                    ]
                                  )
                                ]
                              ),
                              e._v(' '),
                              a(
                                'td',
                                {
                                  staticClass: 'text-right'
                                },
                                [
                                  a('span', [
                                    e._v(e._s(t.quality.toFixed(2)))
                                  ])
                                ]
                              )
                            ]
                          )
                        }
                      )
                    ],
                    2
                  )
                ]
              )
            ]
          )
        },
        staticRenderFns: [
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a('div', {
              staticClass: 'row'
            }, [
              a('h3', [
                e._v('Food Expenses')
              ])
            ])
          },
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a(
              'tr',
              [
                a('th', {
                  staticStyle: {
                    width: '15rem'
                  }
                }),
                e._v(' '),
                a(
                  'th',
                  {
                    staticClass: 'text-right',
                    staticStyle: {
                      width: '4rem'
                    }
                  },
                  [
                    e._v('Time')
                  ]
                ),
                e._v(' '),
                a(
                  'th',
                  {
                    staticClass: 'text-right',
                    staticStyle: {
                      width: '4rem'
                    }
                  },
                  [
                    e._v('Cost/day')
                  ]
                ),
                e._v(' '),
                a(
                  'th',
                  {
                    staticClass: 'text-right',
                    staticStyle: {
                      width: '5rem'
                    }
                  },
                  [
                    e._v('Quality')
                  ]
                )
              ]
            )
          }
        ]
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a(
                    'table',
                    e._l(
                      e.log.state.entries.slice(0, 100),
                      function (t) {
                        return a(
                          'tr',
                          [
                            a(
                              'td',
                              [
                                e._v(
                                  e._s(t.timestampAge[0]) + ' years ' + e._s(t.timestampAge[1]) + ' days:'
                                )
                              ]
                            ),
                            a('td', [
                              e._v(e._s(t.message))
                            ])
                          ]
                        )
                      }
                    )
                  )
                ]
              )
            ]
          )
        },
        staticRenderFns: []
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement;
          e._self._c ||
          t;
          return e._m(0)
        },
        staticRenderFns: [
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a(
              'div',
              [
                e._v(
                  '\n  For several reasons, the Groundhog Market is discontinued.'
                ),
                a('br'),
                e._v(
                  '\n  Auto-Research, auto-promotion, and auto-boosting is available by default now. There is no limit to speed-up time gained when offline anymore.'
                ),
                a('br'),
                e._v(
                  '\n  This also means that Groundhog Life can be open-sourced easier, which is planned for the near future.'
                ),
                a('br')
              ]
            )
          }
        ]
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              e._m(0),
              e._v(' '),
              a(
                'div',
                {
                  staticClass: 'row',
                  staticStyle: {
                    'padding-left': '20px',
                    'padding-right': '20px'
                  }
                },
                [
                  a(
                    'table',
                    [
                      e._m(1),
                      e._v(' '),
                      e._l(
                        e.homes,
                        function (t) {
                          return t.keyholdersUnlocked() ? a(
                            'tr',
                            [
                              a(
                                'td',
                                {
                                  staticClass: 'text-right'
                                },
                                [
                                  a(
                                    'button',
                                    {
                                      class : [
                                        'btn',
                                        t.state.selected ? 'btn-success' : 'btn-secondary'
                                      ],
                                      staticStyle: {
                                        width: '100%'
                                      },
                                      attrs: {
                                        type: 'button',
                                        disabled: !t.unlocked(),
                                        title: t.description
                                      },
                                      on: {
                                        click: function (a) {
                                          e.selectHome(t)
                                        }
                                      }
                                    },
                                    [
                                      e._v(e._s(t.name))
                                    ]
                                  )
                                ]
                              ),
                              e._v(' '),
                              a(
                                'td',
                                {
                                  staticClass: 'text-right'
                                },
                                [
                                  a(
                                    'stat-display',
                                    {
                                      attrs: {
                                        stat: t.choresTime,
                                        name: !1,
                                        color: t.enoughFreeTime() ? 'grey' : 'red',
                                        minutes: !0
                                      }
                                    }
                                  )
                                ],
                                1
                              ),
                              e._v(' '),
                              a(
                                'td',
                                {
                                  staticClass: 'text-right'
                                },
                                [
                                  a(
                                    'stat-display',
                                    {
                                      attrs: {
                                        stat: t.rent,
                                        name: !1,
                                        color: t.enoughIncome() ? 'grey' : 'orange'
                                      }
                                    }
                                  )
                                ],
                                1
                              ),
                              e._v(' '),
                              a(
                                'td',
                                {
                                  staticClass: 'text-right'
                                },
                                [
                                  a(
                                    'stat-display',
                                    {
                                      attrs: {
                                        stat: t.initialCost,
                                        name: !1,
                                        color: t.enoughMoney() ? 'grey' : 'red'
                                      }
                                    }
                                  )
                                ],
                                1
                              ),
                              e._v(' '),
                              a(
                                'td',
                                {
                                  staticClass: 'text-right'
                                },
                                [
                                  e._v(
                                    '\n          ' + e._s(
                                      e.abbreviateNumber(e.homeToHappinessFun(t.quality.effective))
                                    ) + '\n        '
                                  )
                                ]
                              )
                            ]
                          ) : e._e()
                        }
                      )
                    ],
                    2
                  )
                ]
              )
            ]
          )
        },
        staticRenderFns: [
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a(
              'div',
              {
                staticClass: 'row'
              },
              [
                e._v(
                  '\n    As you get older, you need a nicer home to stay happy.'
                ),
                a('br'),
                e._v(
                  '\n    Keep in mind that happiness is also affected by your overall spending ratio.\n  '
                )
              ]
            )
          },
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a(
              'tr',
              [
                a('th', {
                  staticClass: 'text-right',
                  staticStyle: {
                    width: '15rem'
                  }
                }),
                e._v(' '),
                a(
                  'th',
                  {
                    staticClass: 'text-right',
                    staticStyle: {
                      width: '5rem'
                    }
                  },
                  [
                    e._v('Chores')
                  ]
                ),
                e._v(' '),
                a(
                  'th',
                  {
                    staticClass: 'text-right',
                    staticStyle: {
                      width: '5rem'
                    }
                  },
                  [
                    e._v('Rent/day')
                  ]
                ),
                e._v(' '),
                a(
                  'th',
                  {
                    staticClass: 'text-right',
                    staticStyle: {
                      width: '5rem'
                    }
                  },
                  [
                    e._v('Initial Cost')
                  ]
                ),
                e._v(' '),
                a(
                  'th',
                  {
                    staticClass: 'text-right',
                    staticStyle: {
                      width: '6rem'
                    }
                  },
                  [
                    e._v('Happiness')
                  ]
                )
              ]
            )
          }
        ]
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              a(
                'div',
                [
                  a('navbar-display', {
                    attrs: {
                      panes: e.lambdaPane.subpanes
                    }
                  }),
                  e._v(' '),
                  a(
                    'div',
                    {
                      staticClass: 'tab-content small-paper',
                      staticStyle: {
                        'padding-left': '20px',
                        'padding-top': '20px',
                        'min-height': '100%'
                      }
                    },
                    e._l(
                      e.lambdaPane.subpanes,
                      function (t) {
                        return t.state.selected ? a(
                          'div',
                          {
                            class : [
                              t.state.selected ? 'active' : ''
                            ],
                            attrs: {
                              id: t.id
                            }
                          },
                          [
                            a(t.component, {
                              tag: 'div'
                            })
                          ]
                        ) : e._e()
                      }
                    )
                  )
                ],
                1
              )
            ]
          )
        },
        staticRenderFns: []
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              a('h5', [
                e._v('Previous Life')
              ]),
              e._v('\n  The highest levels reached in previous lives.'),
              a('br'),
              e._v(
                '\n  Reaching higher levels increases your progress speed in future lives.'
              ),
              a('br'),
              a('br'),
              e._v(' '),
              a('h3', [
                e._v('Career')
              ]),
              e._v(' '),
              e._l(
                e.careers,
                function (t) {
                  return t.jobs[0].xp.state.highestLevelEver > 0 ? a(
                    'div',
                    {
                    },
                    [
                      a(
                        'div',
                        {
                          staticClass: 'row'
                        },
                        [
                          a('h5', [
                            e._v(e._s(t.name))
                          ]),
                          a('br')
                        ]
                      ),
                      e._v(' '),
                      a(
                        'table',
                        [
                          e._m(0, !0),
                          e._v(' '),
                          e._l(
                            t.jobs,
                            function (t) {
                              return t.xp.state.highestLevelThisLoop > 0 ? a(
                                'tr',
                                {
                                  class : t.xp.recordClass()
                                },
                                [
                                  a('td', [
                                    e._v(e._s(t.name))
                                  ]),
                                  e._v(' '),
                                  a('td', [
                                    e._v(e._s(t.xp.previousLevelReached()))
                                  ]),
                                  e._v(' '),
                                  a('td', [
                                    e._v(e._s(t.xp.state.highestLevelThisLoop))
                                  ]),
                                  e._v(' '),
                                  a('td', [
                                    e._v(e._s(t.xp.computePrestigeFactor()))
                                  ])
                                ]
                              ) : e._e()
                            }
                          )
                        ],
                        2
                      ),
                      e._v(' '),
                      a('br')
                    ]
                  ) : e._e()
                }
              ),
              e._v(' '),
              a('br'),
              e._v(' '),
              a('h3', [
                e._v('Research')
              ]),
              e._v(' '),
              e._l(
                e.fields,
                function (t) {
                  return a(
                    'div',
                    [
                      a('div', {
                        staticClass: 'row'
                      }, [
                        a('h5', [
                          e._v(e._s(t.name))
                        ])
                      ]),
                      e._v(' '),
                      a(
                        'table',
                        [
                          e._m(1, !0),
                          e._v(' '),
                          e._l(
                            t.areas,
                            function (t) {
                              return t.xp.state.highestLevelThisLoop > 0 ? a(
                                'tr',
                                {
                                  class : t.xp.recordClass()
                                },
                                [
                                  a('td', [
                                    e._v(e._s(t.name))
                                  ]),
                                  e._v(' '),
                                  a('td', [
                                    e._v(e._s(t.xp.previousLevelReached()))
                                  ]),
                                  e._v(' '),
                                  a('td', [
                                    e._v(e._s(t.xp.state.highestLevelThisLoop))
                                  ]),
                                  e._v(' '),
                                  a('td', [
                                    e._v(e._s(t.xp.computePrestigeFactor()))
                                  ])
                                ]
                              ) : e._e()
                            }
                          )
                        ],
                        2
                      )
                    ]
                  )
                }
              )
            ],
            2
          )
        },
        staticRenderFns: [
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a(
              'tr',
              [
                a('th', {
                  staticStyle: {
                    width: '15rem'
                  }
                }, [
                  e._v('Title')
                ]),
                e._v(' '),
                a('th', {
                  staticStyle: {
                    width: '10rem'
                  }
                }, [
                  e._v('Level reached')
                ]),
                e._v(' '),
                a(
                  'th',
                  {
                    staticStyle: {
                      width: '10rem'
                    }
                  },
                  [
                    e._v('Highest Level This Loop')
                  ]
                ),
                e._v(' '),
                a('th', {
                  staticStyle: {
                    width: '10rem'
                  }
                }, [
                  e._v('Speedup-Factor')
                ])
              ]
            )
          },
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a(
              'tr',
              [
                a('th', {
                  staticStyle: {
                    width: '15rem'
                  }
                }, [
                  e._v('Area')
                ]),
                e._v(' '),
                a('th', {
                  staticStyle: {
                    width: '10rem'
                  }
                }, [
                  e._v('Level reached')
                ]),
                e._v(' '),
                a(
                  'th',
                  {
                    staticStyle: {
                      width: '10rem'
                    }
                  },
                  [
                    e._v('Highest Level This Loop')
                  ]
                ),
                e._v(' '),
                a('th', {
                  staticStyle: {
                    width: '10rem'
                  }
                }, [
                  e._v('Speedup-Factor')
                ])
              ]
            )
          }
        ]
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'ul',
            {
              staticClass: 'nav navbar navbar-toggleable-md nav-tabs'
            },
            e._l(
              e.panes,
              function (t) {
                return t.footer ? e._e() : a(
                  'li',
                  {
                    staticClass: 'nav-item',
                    on: {
                      click: function (a) {
                        e.selectPane(t)
                      }
                    }
                  },
                  [
                    t.unlocked() ? a(
                      'a',
                      {
                        class : [
                          'nav-link',
                          t.state.selected ? 'active' : '',
                          t.state.notified ? 'item-notified' : ''
                        ],
                        attrs: {
                          href: '#'
                        }
                      },
                      [
                        e._v('\n      ' + e._s(t.name) + '\n    ')
                      ]
                    ) : a('span', [
                      e._v('\n       ??? \n    ')
                    ])
                  ]
                )
              }
            )
          )
        },
        staticRenderFns: []
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            {
              staticStyle: {
              }
            },
            [
              a('img', {
                staticStyle: {
                  width: '40px'
                },
                attrs: {
                  src: e.getEmoji()
                }
              }),
              a('img'),
              a(
                'a',
                {
                  attrs: {
                    href: '#'
                  },
                  on: {
                    click: e.showInfo
                  }
                },
                [
                  e._v('(info)')
                ]
              ),
              e._v(' '),
              a('stat-display', {
                attrs: {
                  stat: e.stats.happiness
                }
              }),
              e._v(' '),
              a('stat-display', {
                attrs: {
                  stat: e.stats.health
                }
              })
            ],
            1
          )
        },
        staticRenderFns: []
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            {
              staticClass: 'text-left'
            },
            [
              a('stat-display', {
                attrs: {
                  stat: e.stats.energy
                }
              }),
              e._v(' '),
              a('small', [
                e._v('Energy helps you advance faster.')
              ]),
              a('br'),
              a('br'),
              e._v(
                '\n      $' + e._s(e.abbreviateNumber(e.currency.money.getValue()))
              ),
              a('br'),
              e._v(' '),
              a('stat-display', {
                attrs: {
                  stat: e.stats.dailyNetIncome
                }
              }),
              e._v(' '),
              a(
                'ul',
                [
                  a(
                    'li',
                    [
                      a('stat-display', {
                        attrs: {
                          stat: e.stats.dailyIncome
                        }
                      })
                    ],
                    1
                  ),
                  e._v(' '),
                  a(
                    'li',
                    [
                      a(
                        'stat-display',
                        {
                          staticStyle: {
                            width: '15rem'
                          },
                          attrs: {
                            stat: e.stats.dailyExpenses
                          }
                        }
                      )
                    ],
                    1
                  )
                ]
              )
            ],
            1
          )
        },
        staticRenderFns: []
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              e._m(0),
              e._v(' '),
              a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a(
                    'button',
                    {
                      staticClass: 'btn btn-primary',
                      on: {
                        click: function (t) {
                          e.battle.state.laserGunActive = !e.battle.state.laserGunActive
                        }
                      }
                    },
                    [
                      e._v(
                        'Laser Gun is ' + e._s(e.battle.state.laserGunActive ? 'On' : 'Off')
                      )
                    ]
                  )
                ]
              ),
              e._v(' '),
              a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a('stat-display', {
                    attrs: {
                      stat: e.battle.laserGunDamage
                    }
                  })
                ],
                1
              ),
              e._v(' '),
              e._m(1),
              e._v(' '),
              e._l(
                e.battle.state.alienComm,
                function (t) {
                  return a('div', {
                    staticClass: 'row'
                  }, [
                    e._v('\n    ' + e._s(t) + '\n  ')
                  ])
                }
              )
            ],
            2
          )
        },
        staticRenderFns: [
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a(
              'div',
              {
                staticClass: 'row'
              },
              [
                a('h3', [
                  e._v('BattleScan 3000')
                ])
              ]
            )
          },
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a(
              'div',
              {
                staticClass: 'row'
              },
              [
                a('canvas', {
                  attrs: {
                    id: 'canvas',
                    width: '400',
                    height: '400'
                  }
                })
              ]
            )
          }
        ]
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'tr',
            [
              a(
                'td',
                {
                  staticStyle: {
                    'padding-right': '5px',
                    'padding-bottom': '5px'
                  }
                },
                [
                  a(
                    'div',
                    {
                      class : [
                        'progress',
                        e.entity.state.active ? 'p-selected' : ''
                      ],
                      staticStyle: {
                        height: '28px'
                      },
                      on: {
                        click: function (t) {
                          e.setActiveJob(e.entity)
                        }
                      }
                    },
                    [
                      a(
                        'div',
                        {
                          class : [
                            e.entity.state.active ? 'pb-selected' : 'pb-not-selected',
                            'progress-bar'
                          ],
                          style: 'height: 100%; width: ' + e.entity.xp.perc() + '%',
                          attrs: {
                            role: 'progressbar'
                          }
                        },
                        [
                          a(
                            'span',
                            {
                              staticClass: 'progress-label'
                            },
                            [
                              e._v(e._s(e.entity.name))
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              ),
              e._v(' '),
              a(
                'td',
                {
                  staticClass: 'text-center'
                },
                [
                  e._v(
                    '\n      ' + e._s(e.abbrLevel(e.entity.xp.state.level)) + '\n    '
                  )
                ]
              ),
              e._v(' '),
              a(
                'td',
                {
                  staticClass: 'text-center',
                  staticStyle: {
                    'padding-right': '30px'
                  }
                },
                [
                  a('stat-display', {
                    attrs: {
                      stat: e.entity.income,
                      name: !1
                    }
                  })
                ],
                1
              ),
              e._v(' '),
              a(
                'td',
                {
                  staticClass: 'text-muted'
                },
                [
                  e._v('\n      ' + e._s(e.entity.xp.xpToNextLevelString()) + '\n    ')
                ]
              ),
              e._v(' '),
              a(
                'td',
                {
                  staticStyle: {
                    'padding-right': '10px'
                  }
                },
                [
                  e.settings.xpPerHour.getValue() ? a(
                    'stat-display',
                    {
                      attrs: {
                        stat: e.entity.xp.xpPerHourStat,
                        name: !1
                      }
                    }
                  ) : a(
                    'stat-display',
                    {
                      attrs: {
                        stat: e.entity.xp.xpPerDayStat,
                        name: !1
                      }
                    }
                  )
                ],
                1
              ),
              e._v(' '),
              e.time.currentLife.getValue() > 1 ? a(
                'td',
                {
                  staticClass: 'text-center'
                },
                [
                  e._v(
                    '\n      ' + e._s(e.entity.xp.state.highestLevelThisLoop) + '\n    '
                  )
                ]
              ) : e._e()
            ]
          )
        },
        staticRenderFns: []
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              e._v('\n  +/-\n  '),
              a(
                'select',
                {
                  on: {
                    change: function (t) {
                      e.delta.setValue(t.target.value)
                    }
                  }
                },
                [
                  a('option', [
                    e._v('1')
                  ]),
                  e._v(' '),
                  a('option', [
                    e._v('5')
                  ]),
                  e._v(' '),
                  a('option', [
                    e._v('15')
                  ]),
                  e._v(' '),
                  a('option', [
                    e._v('30')
                  ]),
                  e._v(' '),
                  a('option', {
                    attrs: {
                      selected: 'selected'
                    }
                  }, [
                    e._v('60')
                  ]),
                  e._v(' '),
                  a('option', [
                    e._v('240')
                  ]),
                  e._v(' '),
                  a('option', [
                    e._v('1440')
                  ])
                ]
              ),
              e._v(' Minutes'),
              a('br'),
              e._v(' '),
              a(
                'table',
                e._l(
                  e.activities,
                  function (t) {
                    return a(
                      'tr',
                      {
                        class : [
                          t.unlocked() ? 'item-unlocked' : 'item-locked',
                          t.sufficientTime() ? '' : 'insufficient-time'
                        ]
                      },
                      [
                        a('td', {
                          staticStyle: {
                            width: '5rem'
                          }
                        }, [
                          e._v(e._s(t.name))
                        ]),
                        e._v(' '),
                        a(
                          'td',
                          {
                            staticStyle: {
                              width: '3rem'
                            }
                          },
                          [
                            e._v(e._s(t.duration.durationString))
                          ]
                        ),
                        e._v(' '),
                        a(
                          'td',
                          {
                            staticStyle: {
                              width: '1rem'
                            }
                          },
                          [
                            t.durationByUser ? a(
                              'button',
                              {
                                on: {
                                  click: function (a) {
                                    e.increaseActivityTime(t)
                                  }
                                }
                              },
                              [
                                e._v('+')
                              ]
                            ) : e._e()
                          ]
                        ),
                        e._v(' '),
                        a(
                          'td',
                          {
                            staticStyle: {
                              width: '1rem'
                            }
                          },
                          [
                            t.durationByUser ? a(
                              'button',
                              {
                                on: {
                                  click: function (a) {
                                    e.decreaseActivityTime(t)
                                  }
                                }
                              },
                              [
                                e._v('-')
                              ]
                            ) : e._e()
                          ]
                        )
                      ]
                    )
                  }
                )
              )
            ]
          )
        },
        staticRenderFns: []
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a('stat-display', {
                    attrs: {
                      stat: e.stats.energy
                    }
                  })
                ],
                1
              ),
              e._v(' '),
              e._m(0),
              e._v(' '),
              a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a(
                    'div',
                    {
                      staticStyle: {
                      }
                    },
                    [
                      a('br'),
                      e._v(' '),
                      a('stat-display', {
                        attrs: {
                          stat: e.happiness
                        }
                      }),
                      e._v(' '),
                      a('img', {
                        staticStyle: {
                          width: '40px'
                        },
                        attrs: {
                          src: e.getEmoji()
                        }
                      }),
                      a('br'),
                      e._v(' '),
                      e._l(
                        e.happiness.modifiers,
                        function (t) {
                          return a('span', [
                            e._v(e._s(t.explain())),
                            a('br')
                          ])
                        }
                      )
                    ],
                    2
                  )
                ]
              ),
              e._v(' '),
              a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a(
                    'div',
                    {
                      staticStyle: {
                      }
                    },
                    [
                      a('stat-display', {
                        attrs: {
                          stat: e.stats.health
                        }
                      }),
                      e._v(' '),
                      e._l(
                        e.stats.health.modifiers,
                        function (t) {
                          return a('span', [
                            e._v(e._s(t.explain())),
                            a('br')
                          ])
                        }
                      )
                    ],
                    2
                  )
                ]
              )
            ]
          )
        },
        staticRenderFns: [
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a(
              'div',
              {
                staticClass: 'row'
              },
              [
                e._v('\n      Energy speeds up all research and career progress.'),
                a('br'),
                e._v('\n      Energy depends on happiness and health.'),
                a('br')
              ]
            )
          }
        ]
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              a('h3', [
                e._v('LoopTrap Device')
              ]),
              e._v(
                '\n  With this device, you can trap an improved version of yourself in the endless loop.'
              ),
              a('br'),
              e._v(
                '\n  The device will convert your current groundhog factor into a permanent multiplier, depending on the efficiency of the device.'
              ),
              a('br'),
              e._v(
                '\n  For example, if your highest level for a skill is 300, then the groundhog factor is approximately 30.\n  If the device operates at 0.1 efficiency, this factor will be converted into a permanent 3x speedup.\n  This allows the improved version of yourself to go further than you ever could.'
              ),
              a('br'),
              e._v(
                '\n  If you use the device multiple times, the permanent multipliers add up.'
              ),
              a('br'),
              e._v(
                '\n  Efficiency depends on research and number of alien ships destroyed.\n  '
              ),
              a('br'),
              a('br'),
              e._v(' '),
              a('stat-display', {
                attrs: {
                  stat: e.loopTrap.efficiency
                }
              }),
              a('br'),
              e._v(' '),
              a(
                'strong',
                [
                  e._v(
                    'You will lose your progress in exchange for the loop trap multiplier, including Groundhog Bonuses! You will not gain Tachyons for using the LoopTrap Device. You will keep all Achievements, Tachyons and Market Purchases.'
                  )
                ]
              ),
              a('br'),
              e._v(' '),
              a(
                'button',
                {
                  staticClass: 'btn btn-success',
                  attrs: {
                    role: 'button',
                    disabled: e.loopTrap.efficiency.effective < 0.03
                  },
                  on: {
                    click: function (t) {
                      e.grandPrestige()
                    }
                  }
                },
                [
                  e._v('Activate LoopTrap Device')
                ]
              ),
              e._v(' '),
              a('br'),
              a('small', [
                e._v('Need at least 0.03 efficiency.')
              ]),
              a('br'),
              a('br'),
              e._v(' '),
              a('h3', [
                e._v('Career')
              ]),
              e._v(' '),
              e._l(
                e.careers,
                function (t) {
                  return t.jobs[0].xp.state.highestLevelEver > 0 ? a(
                    'div',
                    {
                    },
                    [
                      a(
                        'div',
                        {
                          staticClass: 'row'
                        },
                        [
                          a('h5', [
                            e._v(e._s(t.name))
                          ]),
                          a('br')
                        ]
                      ),
                      e._v(' '),
                      a(
                        'table',
                        [
                          e._m(0, !0),
                          e._v(' '),
                          e._l(
                            t.jobs,
                            function (t) {
                              return t.xp.state.highestLevelEver > 0 ? a(
                                'tr',
                                {
                                  class : t.xp.recordClass()
                                },
                                [
                                  a('td', [
                                    e._v(e._s(t.name))
                                  ]),
                                  e._v(' '),
                                  a(
                                    'td',
                                    [
                                      e._v(
                                        e._s(Math.max(t.xp.state.highestLevelThisLoop, t.xp.state.level))
                                      )
                                    ]
                                  ),
                                  e._v(' '),
                                  a('td', [
                                    e._v(e._s(e.abbr(t.xp.futurePrestigeFactor())))
                                  ]),
                                  e._v(' '),
                                  a('td', [
                                    e._v(e._s(e.abbr(t.xp.state.loopTrapMultiplier)))
                                  ]),
                                  e._v(' '),
                                  a(
                                    'td',
                                    [
                                      e._v(
                                        e._s(
                                          e.abbr(
                                            t.xp.state.loopTrapMultiplier + t.xp.futurePrestigeFactor() * e.loopTrap.efficiency.effective
                                          )
                                        )
                                      )
                                    ]
                                  )
                                ]
                              ) : e._e()
                            }
                          )
                        ],
                        2
                      ),
                      e._v(' '),
                      a('br')
                    ]
                  ) : e._e()
                }
              ),
              e._v(' '),
              a('br'),
              e._v(' '),
              a('h3', [
                e._v('Research')
              ]),
              e._v(' '),
              e._l(
                e.fields,
                function (t) {
                  return a(
                    'div',
                    [
                      a('div', {
                        staticClass: 'row'
                      }, [
                        a('h5', [
                          e._v(e._s(t.name))
                        ])
                      ]),
                      e._v(' '),
                      a(
                        'table',
                        [
                          e._m(1, !0),
                          e._v(' '),
                          e._l(
                            t.areas,
                            function (t) {
                              return t.xp.state.highestLevelEver > 0 ? a(
                                'tr',
                                {
                                  class : t.xp.recordClass()
                                },
                                [
                                  a('td', [
                                    e._v(e._s(t.name))
                                  ]),
                                  e._v(' '),
                                  a(
                                    'td',
                                    [
                                      e._v(
                                        e._s(Math.max(t.xp.state.highestLevelThisLoop, t.xp.state.level))
                                      )
                                    ]
                                  ),
                                  e._v(' '),
                                  a('td', [
                                    e._v(e._s(e.abbr(t.xp.futurePrestigeFactor())))
                                  ]),
                                  e._v(' '),
                                  a('td', [
                                    e._v(e._s(e.abbr(t.xp.state.loopTrapMultiplier)))
                                  ]),
                                  e._v(' '),
                                  a(
                                    'td',
                                    [
                                      e._v(
                                        e._s(
                                          e.abbr(
                                            t.xp.state.loopTrapMultiplier + t.xp.futurePrestigeFactor() * e.loopTrap.efficiency.effective
                                          )
                                        )
                                      )
                                    ]
                                  )
                                ]
                              ) : e._e()
                            }
                          )
                        ],
                        2
                      )
                    ]
                  )
                }
              )
            ],
            2
          )
        },
        staticRenderFns: [
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a(
              'tr',
              [
                a('th', {
                  staticStyle: {
                    width: '15rem'
                  }
                }, [
                  e._v('Title')
                ]),
                e._v(' '),
                a(
                  'th',
                  {
                    staticStyle: {
                      width: '10rem'
                    }
                  },
                  [
                    e._v('Highest Level reached')
                  ]
                ),
                e._v(' '),
                a(
                  'th',
                  {
                    staticStyle: {
                      width: '10rem'
                    }
                  },
                  [
                    e._v('Groundhog Factor')
                  ]
                ),
                e._v(' '),
                a(
                  'th',
                  {
                    staticStyle: {
                      width: '10rem'
                    }
                  },
                  [
                    e._v('Current Looptrap Speedup')
                  ]
                ),
                e._v(' '),
                a('th', {
                  staticStyle: {
                    width: '10rem'
                  }
                }, [
                  e._v('After Loop Trap')
                ])
              ]
            )
          },
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a(
              'tr',
              [
                a('th', {
                  staticStyle: {
                    width: '15rem'
                  }
                }, [
                  e._v('Title')
                ]),
                e._v(' '),
                a(
                  'th',
                  {
                    staticStyle: {
                      width: '10rem'
                    }
                  },
                  [
                    e._v('Highest Level reached')
                  ]
                ),
                e._v(' '),
                a(
                  'th',
                  {
                    staticStyle: {
                      width: '10rem'
                    }
                  },
                  [
                    e._v('Groundhog Factor')
                  ]
                ),
                e._v(' '),
                a(
                  'th',
                  {
                    staticStyle: {
                      width: '10rem'
                    }
                  },
                  [
                    e._v('Current Looptrap Speedup')
                  ]
                ),
                e._v(' '),
                a('th', {
                  staticStyle: {
                    width: '10rem'
                  }
                }, [
                  e._v('After Loop Trap')
                ])
              ]
            )
          }
        ]
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement;
          e._self._c ||
          t;
          return e._m(0)
        },
        staticRenderFns: [
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a(
              'div',
              [
                a('h3', [
                  e._v('Privacy Policy')
                ]),
                e._v(
                  '\n        We do not collect or store any of your personal information.'
                ),
                a('br'),
                e._v(
                  '\n        Save data is stored locally in your local browser cache.'
                ),
                a('br')
              ]
            )
          }
        ]
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              e.lifestylePane.state.explained ? a(
                'div',
                [
                  a(
                    'div',
                    [
                      a('navbar-display', {
                        attrs: {
                          panes: e.lifestylePane.subpanes
                        }
                      }),
                      e._v(' '),
                      a(
                        'div',
                        {
                          staticClass: 'tab-content small-paper',
                          staticStyle: {
                            'padding-left': '20px',
                            'padding-top': '20px',
                            'min-height': '100%'
                          }
                        },
                        e._l(
                          e.lifestylePane.subpanes,
                          function (t) {
                            return t.state.selected ? a(
                              'div',
                              {
                                class : [
                                  t.state.selected ? 'active' : ''
                                ],
                                attrs: {
                                  id: t.id
                                }
                              },
                              [
                                a(t.component, {
                                  tag: 'div'
                                })
                              ]
                            ) : e._e()
                          }
                        )
                      )
                    ],
                    1
                  )
                ]
              ) : a(
                'div',
                [
                  e._v(
                    '\n    As an adult, you have the right, and the duty, to make major lifestyle choices.'
                  ),
                  a('br'),
                  e._v(' '),
                  a(
                    'button',
                    {
                      staticClass: 'btn btn-success',
                      on: {
                        click: function (t) {
                          e.lifestylePane.state.explained = !0
                        }
                      }
                    },
                    [
                      e._v('Make Major Lifestyle Choices')
                    ]
                  )
                ]
              )
            ]
          )
        },
        staticRenderFns: []
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a(
                    'nobr',
                    [
                      a(
                        'button',
                        {
                          staticClass: 'btn m-3',
                          staticStyle: {
                            width: '12rem'
                          },
                          attrs: {
                            role: 'button',
                            disabled: !e.userInventory.haveAutoPromote
                          },
                          on: {
                            click: function (t) {
                              e.autoPromote.toggleValue()
                            }
                          }
                        },
                        [
                          a(
                            'small',
                            [
                              e._v('Auto-Promote is ' + e._s(e.autoPromote.select('On', 'Off')))
                            ]
                          )
                        ]
                      ),
                      e._v(' '),
                      e.userInventory.haveAutoPromote ? a(
                        'span',
                        [
                          a('label', {
                            attrs: {
                              for : 'apml'
                            }
                          }, [
                            e._v('Min Lvl:')
                          ]),
                          e._v(' '),
                          a(
                            'input',
                            {
                              directives: [
                                {
                                  name: 'model',
                                  rawName: 'v-model.number',
                                  value: e.autoPromoteMinLevel.value,
                                  expression: 'autoPromoteMinLevel.value',
                                  modifiers: {
                                    number: !0
                                  }
                                }
                              ],
                              staticStyle: {
                                width: '3rem'
                              },
                              attrs: {
                                type: 'text',
                                id: 'apml'
                              },
                              domProps: {
                                value: e.autoPromoteMinLevel.value
                              },
                              on: {
                                input: function (t) {
                                  t.target.composing ||
                                  (e.autoPromoteMinLevel.value = e._n(t.target.value))
                                },
                                blur: function (t) {
                                  e.$forceUpdate()
                                }
                              }
                            }
                          ),
                          e._v(' '),
                          a(
                            'input',
                            {
                              directives: [
                                {
                                  name: 'model',
                                  rawName: 'v-model',
                                  value: e.autoPromoteJustPause.value,
                                  expression: 'autoPromoteJustPause.value'
                                }
                              ],
                              attrs: {
                                type: 'checkbox',
                                id: 'apjp'
                              },
                              domProps: {
                                checked: Array.isArray(e.autoPromoteJustPause.value) ? e._i(e.autoPromoteJustPause.value, null) > - 1 : e.autoPromoteJustPause.value
                              },
                              on: {
                                __c: function (t) {
                                  var a = e.autoPromoteJustPause.value,
                                  n = t.target,
                                  i = !!n.checked;
                                  if (Array.isArray(a)) {
                                    var r = null,
                                    s = e._i(a, r);
                                    i ? s < 0 &&
                                    (e.autoPromoteJustPause.value = a.concat(r)) : s > - 1 &&
                                    (
                                      e.autoPromoteJustPause.value = a.slice(0, s).concat(a.slice(s + 1))
                                    )
                                  } else e.autoPromoteJustPause.value = i
                                }
                              }
                            }
                          ),
                          e._v(' '),
                          a(
                            'label',
                            {
                              attrs: {
                                for : 'apjp'
                              }
                            },
                            [
                              e._v('Pause if Promotion available')
                            ]
                          )
                        ]
                      ) : a(
                        'a',
                        {
                          attrs: {
                            href: '#'
                          },
                          on: {
                            click: function (t) {
                              e.selectPane(e.groundhogMarketPane)
                            }
                          }
                        },
                        [
                          a('small', [
                            e._v('Unlock')
                          ])
                        ]
                      )
                    ]
                  )
                ],
                1
              ),
              e._v(' '),
              a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a(
                    'table',
                    [
                      a(
                        'tr',
                        [
                          a('th', {
                            staticStyle: {
                              width: '13rem'
                            }
                          }),
                          e._v(' '),
                          a('th', {
                            staticStyle: {
                              width: '4rem'
                            }
                          }),
                          e._v(' '),
                          a('th', {
                            staticStyle: {
                              width: '6rem'
                            }
                          }),
                          e._v(' '),
                          a('th', {
                            staticStyle: {
                              width: '5rem'
                            }
                          }),
                          e._v(' '),
                          a('th', {
                            staticStyle: {
                              width: '5rem'
                            }
                          }),
                          e._v(' '),
                          e.time.currentLifeThisLoop.getValue() > 1 ? a('th', {
                            staticClass: 'text-right',
                            staticStyle: {
                              width: '4rem'
                            }
                          }) : e._e()
                        ]
                      ),
                      e._v(' '),
                      e._l(
                        e.jobPane.subpanes,
                        function (t) {
                          return t.career.unlocked() ? a(
                            'tbody',
                            {
                              staticClass: 'table-cat',
                              attrs: {
                                id: t.id
                              }
                            },
                            [
                              'bunMasters' === t.career.id ? a(
                                'tr',
                                {
                                  staticClass: 'tr-name'
                                },
                                [
                                  a(
                                    'td',
                                    {
                                      staticClass: 'tr-name',
                                      attrs: {
                                        colspan: '1'
                                      },
                                      on: {
                                        click: function (a) {
                                          e.selectPane(t)
                                        }
                                      }
                                    },
                                    [
                                      a(
                                        'span',
                                        {
                                          staticClass: 'collapse-icon rounded-circle'
                                        },
                                        [
                                          e._v(e._s(t.state.selected ? '-' : '+'))
                                        ]
                                      ),
                                      a('b', [
                                        e._v(e._s(t.career.name))
                                      ])
                                    ]
                                  ),
                                  e._v(' '),
                                  a('td', [
                                    e._v('Level')
                                  ]),
                                  e._v(' '),
                                  a('td', [
                                    e._v('Income/h')
                                  ]),
                                  e._v(' '),
                                  a('td', [
                                    e._v('XP Left')
                                  ]),
                                  e._v(' '),
                                  a(
                                    'td',
                                    [
                                      e._v(e._s(e.settings.xpPerHour.getValue() ? 'XP/h' : 'XP/day'))
                                    ]
                                  ),
                                  e._v(' '),
                                  e.time.currentLifeThisLoop.getValue() > 1 ? a(
                                    'td',
                                    {
                                      staticClass: 'text-right',
                                      staticStyle: {
                                        width: '3rem'
                                      }
                                    },
                                    [
                                      e._v('Max Lvl')
                                    ]
                                  ) : e._e()
                                ]
                              ) : a(
                                'tr',
                                {
                                  staticClass: 'tr-name'
                                },
                                [
                                  a(
                                    'td',
                                    {
                                      staticClass: 'tr-name',
                                      attrs: {
                                        colspan: '6'
                                      },
                                      on: {
                                        click: function (a) {
                                          e.selectPane(t)
                                        }
                                      }
                                    },
                                    [
                                      a(
                                        'span',
                                        {
                                          staticClass: 'collapse-icon rounded-circle'
                                        },
                                        [
                                          e._v(e._s(t.state.selected ? '-' : '+'))
                                        ]
                                      ),
                                      a('b', [
                                        e._v(e._s(t.career.name))
                                      ])
                                    ]
                                  )
                                ]
                              ),
                              e._v(' '),
                              e._l(
                                t.career.jobs,
                                function (n) {
                                  return n.unlocked() &&
                                  t.state.selected ? a('job-button', {
                                    attrs: {
                                      entity: n
                                    }
                                  }) : n.locks.keyholdersUnlocked() &&
                                  t.state.selected ? a(
                                    'tr',
                                    [
                                      a(
                                        'td',
                                        {
                                          attrs: {
                                            colspan: '6'
                                          }
                                        },
                                        [
                                          e._v('\n            Required: '),
                                          a('i', [
                                            e._v(e._s(n.locks.lockString()))
                                          ])
                                        ]
                                      )
                                    ]
                                  ) : e._e()
                                }
                              ),
                              e._v(' '),
                              e._m(0, !0)
                            ],
                            2
                          ) : e._e()
                        }
                      )
                    ],
                    2
                  )
                ]
              ),
              e._v(' '),
              a(
                'div',
                {
                  staticClass: 'row',
                  staticStyle: {
                    'padding-top': '20px'
                  }
                },
                [
                  a(
                    'button',
                    {
                      staticClass: 'btn btn-info',
                      on: {
                        click: function (t) {
                          e.settings.xpPerHour.toggleValue()
                        }
                      }
                    },
                    [
                      e._v(
                        '\n      ' + e._s(e.settings.xpPerHour.getValue() ? 'XP/h' : 'XP/day') + '\n    '
                      )
                    ]
                  ),
                  e._v(' '),
                  a(
                    'span',
                    {
                      staticStyle: {
                        'padding-left': '20px'
                      }
                    },
                    [
                      a('stat-display', {
                        attrs: {
                          stat: e.baseWorkXpPerHourStat
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ]
          )
        },
        staticRenderFns: [
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a('tr', [
              a('td', {
                staticStyle: {
                  'padding-bottom': '15px'
                }
              })
            ])
          }
        ]
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              a('label', {
                attrs: {
                  for : 'pause'
                }
              }, [
                e._v('Pause/Continue')
              ]),
              e._v(' '),
              a(
                'input',
                {
                  directives: [
                    {
                      name: 'model',
                      rawName: 'v-model',
                      value: e.keyBindings.state.pause,
                      expression: 'keyBindings.state.pause'
                    }
                  ],
                  attrs: {
                    type: 'text',
                    id: 'pause',
                    maxlength: '1',
                    size: '2'
                  },
                  domProps: {
                    value: e.keyBindings.state.pause
                  },
                  on: {
                    input: function (t) {
                      t.target.composing ||
                      (e.keyBindings.state.pause = t.target.value)
                    }
                  }
                }
              ),
              a('br'),
              e._v(' '),
              a('label', {
                attrs: {
                  for : 'boosts'
                }
              }, [
                e._v('Activate all Boosts')
              ]),
              e._v(' '),
              a(
                'input',
                {
                  directives: [
                    {
                      name: 'model',
                      rawName: 'v-model',
                      value: e.keyBindings.state.boost,
                      expression: 'keyBindings.state.boost'
                    }
                  ],
                  attrs: {
                    type: 'text',
                    id: 'boosts',
                    maxlength: '1',
                    size: '2'
                  },
                  domProps: {
                    value: e.keyBindings.state.boost
                  },
                  on: {
                    input: function (t) {
                      t.target.composing ||
                      (e.keyBindings.state.boost = t.target.value)
                    }
                  }
                }
              ),
              a('br'),
              e._v(' '),
              a('label', {
                attrs: {
                  for : 'speedup'
                }
              }, [
                e._v('Fast Forward')
              ]),
              e._v(' '),
              a(
                'input',
                {
                  directives: [
                    {
                      name: 'model',
                      rawName: 'v-model',
                      value: e.keyBindings.state.speedup,
                      expression: 'keyBindings.state.speedup'
                    }
                  ],
                  attrs: {
                    type: 'text',
                    id: 'speedup',
                    maxlength: '1',
                    size: '2'
                  },
                  domProps: {
                    value: e.keyBindings.state.speedup
                  },
                  on: {
                    input: function (t) {
                      t.target.composing ||
                      (e.keyBindings.state.speedup = t.target.value)
                    }
                  }
                }
              ),
              a('br'),
              e._v(' '),
              a('label', {
                attrs: {
                  for : 'tltabs'
                }
              }, [
                e._v('Top Level Tabs')
              ]),
              e._v(' '),
              a(
                'input',
                {
                  directives: [
                    {
                      name: 'model',
                      rawName: 'v-model',
                      value: e.keyBindings.state.tlp,
                      expression: 'keyBindings.state.tlp'
                    }
                  ],
                  attrs: {
                    type: 'text',
                    id: 'tltabs',
                    maxlength: '8',
                    size: '8'
                  },
                  domProps: {
                    value: e.keyBindings.state.tlp
                  },
                  on: {
                    input: function (t) {
                      t.target.composing ||
                      (e.keyBindings.state.tlp = t.target.value)
                    }
                  }
                }
              ),
              a('br'),
              e._v(' '),
              a('label', {
                attrs: {
                  for : 'sltabs>'
                }
              }, [
                e._v('Sub Level Tabs')
              ]),
              e._v(' '),
              a(
                'input',
                {
                  directives: [
                    {
                      name: 'model',
                      rawName: 'v-model',
                      value: e.keyBindings.state.slp,
                      expression: 'keyBindings.state.slp'
                    }
                  ],
                  attrs: {
                    type: 'text',
                    id: 'sltabs',
                    maxlength: '8',
                    size: '8'
                  },
                  domProps: {
                    value: e.keyBindings.state.slp
                  },
                  on: {
                    input: function (t) {
                      t.target.composing ||
                      (e.keyBindings.state.slp = t.target.value)
                    }
                  }
                }
              ),
              a('br')
            ]
          )
        },
        staticRenderFns: []
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a('br'),
                  e._v(' '),
                  a(
                    'span',
                    [
                      e._v(
                        '\n      You got ' + e._s(e.completedAchievements) + ' achievements.\n      '
                      )
                    ]
                  ),
                  a('br')
                ]
              ),
              e._v(' '),
              a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a(
                    'table',
                    [
                      e._m(0),
                      e._v(' '),
                      e._l(
                        e.achievementPane.subpanes,
                        function (t) {
                          return a(
                            'tbody',
                            {
                              staticClass: 'table-cat',
                              attrs: {
                                id: t.id
                              }
                            },
                            [
                              a(
                                'tr',
                                {
                                  staticClass: 'tr-name'
                                },
                                [
                                  a(
                                    'td',
                                    {
                                      attrs: {
                                        colspan: '6'
                                      },
                                      on: {
                                        click: function (a) {
                                          e.selectPane(t)
                                        }
                                      }
                                    },
                                    [
                                      a(
                                        'span',
                                        {
                                          staticClass: 'collapse-icon rounded-circle'
                                        },
                                        [
                                          e._v(e._s(t.state.selected ? '-' : '+'))
                                        ]
                                      ),
                                      a('b', [
                                        e._v(e._s(t.ag.name))
                                      ]),
                                      e._v(
                                        ' (' + e._s(t.ag.completed) + '/' + e._s(t.ag.total) + ')\n          '
                                      )
                                    ]
                                  )
                                ]
                              ),
                              e._v(' '),
                              e._l(
                                t.ag.achievements,
                                function (n) {
                                  return t.state.selected ? a(
                                    'tr',
                                    {
                                      staticStyle: {
                                        'padding-bottom': '5px'
                                      }
                                    },
                                    [
                                      a(
                                        'td',
                                        {
                                          class : [
                                            n.state.completed ? 'complete' : 'incomplete'
                                          ]
                                        },
                                        [
                                          a('b', [
                                            e._v(e._s(n.name))
                                          ])
                                        ]
                                      ),
                                      e._v(' '),
                                      a('td', {
                                        staticStyle: {
                                          width: '1rem'
                                        }
                                      }),
                                      e._v(' '),
                                      a('td', [
                                        e._v(e._s(n.description))
                                      ]),
                                      e._v(' '),
                                      a('td', {
                                        staticStyle: {
                                          with : '1rem'
                                        }
                                      }),
                                      e._v(' '),
                                      a(
                                        'td',
                                        [
                                          e._v(
                                            e._s(e.abbreviateNumber(n.currentValue)) + '/' + e._s(e.abbreviateNumber(n.goal))
                                          )
                                        ]
                                      )
                                    ]
                                  ) : e._e()
                                }
                              ),
                              e._v(' '),
                              e._m(1, !0)
                            ],
                            2
                          )
                        }
                      )
                    ],
                    2
                  ),
                  e._v('\n    * Pride and Lust TBD.\n  ')
                ]
              )
            ]
          )
        },
        staticRenderFns: [
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a(
              'tr',
              [
                a('th', {
                  staticStyle: {
                    width: '13rem'
                  }
                }),
                e._v(' '),
                a('th', {
                  staticStyle: {
                    width: '1rem'
                  }
                }),
                e._v(' '),
                a('th', {
                  staticStyle: {
                    width: '20rem'
                  }
                }),
                e._v(' '),
                a('th', {
                  staticStyle: {
                    width: '1rem'
                  }
                }),
                e._v(' '),
                a('th', {
                  staticStyle: {
                    width: '5rem'
                  }
                })
              ]
            )
          },
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a('tr', [
              a('td', {
                staticStyle: {
                  'padding-bottom': '15px'
                }
              })
            ])
          }
        ]
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              a(
                'nobr',
                [
                  a(
                    'a',
                    {
                      class : e.stat.recentChange(1),
                      style: 'color:' + e.color,
                      attrs: {
                        'data-toggle': 'modal',
                        href: '#details_' + e.stat.id
                      }
                    },
                    [
                      a(
                        'div',
                        [
                          e._v(
                            e._s(e.name ? e.stat.name + ': ' : '') + e._s(
                              e.minutes ? e.formatMinutes(e.stat.effective) : e.stat.prefix + e.abbreviateNumber(e.stat.effective, e.stat.digits) + e.stat.suffix
                            )
                          )
                        ]
                      )
                    ]
                  )
                ]
              ),
              e._v(' '),
              a(
                'div',
                {
                  staticClass: 'outer-modal'
                },
                [
                  a(
                    'div',
                    {
                      staticClass: 'modal fade bd-example-modal-lg',
                      attrs: {
                        id: 'details_' + e.stat.id,
                        tabindex: '-1',
                        role: 'dialog'
                      }
                    },
                    [
                      a(
                        'div',
                        {
                          staticClass: 'modal-dialog modal-lg'
                        },
                        [
                          a(
                            'div',
                            {
                              staticClass: 'modal-content'
                            },
                            [
                              a('h5', {
                                staticClass: 'modal-title'
                              }, [
                                e._v(e._s(e.stat.name))
                              ]),
                              e._v(' '),
                              a(
                                'table',
                                [
                                  e._m(0),
                                  e._v(' '),
                                  a(
                                    'tr',
                                    [
                                      a('td', {
                                        staticClass: 'text-left'
                                      }, [
                                        e._v(' Base Value ')
                                      ]),
                                      e._v(' '),
                                      a('td'),
                                      e._v(' '),
                                      a(
                                        'td',
                                        {
                                          staticClass: 'text-right'
                                        },
                                        [
                                          e._v(
                                            e._s(
                                              e.stat.prefix + e.stat.base.toFixed(e.stat.digits) + e.stat.suffix
                                            )
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  e._v(' '),
                                  e._l(
                                    e.stat.modifiersWithValues(),
                                    function (t) {
                                      return t[0].unlocked() ? a(
                                        'tr',
                                        [
                                          a(
                                            'td',
                                            {
                                              staticClass: 'text-left'
                                            },
                                            [
                                              e._v(' ' + e._s(t[0].name) + ' ')
                                            ]
                                          ),
                                          e._v(' '),
                                          a(
                                            'td',
                                            {
                                              staticClass: 'text-right',
                                              staticStyle: {
                                                'padding-right': '20px',
                                                'padding-left': '20px'
                                              }
                                            },
                                            [
                                              e._v(
                                                ' ' + e._s(t[0].operationString + t[0].factor.toFixed(t[0].digits)) + ' '
                                              )
                                            ]
                                          ),
                                          e._v(' '),
                                          a(
                                            'td',
                                            {
                                              staticClass: 'text-right'
                                            },
                                            [
                                              e._v(
                                                ' ' + e._s(e.stat.prefix + t[1].toFixed(e.stat.digits) + e.stat.suffix)
                                              )
                                            ]
                                          )
                                        ]
                                      ) : e._e()
                                    }
                                  ),
                                  e._v(' '),
                                  a(
                                    'tr',
                                    [
                                      a('td', [
                                        e._v(' Effective Value ')
                                      ]),
                                      e._v(' '),
                                      a('td'),
                                      e._v(' '),
                                      a(
                                        'td',
                                        {
                                          staticClass: 'text-right'
                                        },
                                        [
                                          a(
                                            'b',
                                            [
                                              e._v(
                                                e._s(
                                                  e.stat.prefix + e.stat.effective.toFixed(e.stat.digits) + e.stat.suffix
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ],
                                2
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ],
            1
          )
        },
        staticRenderFns: [
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a(
              'tr',
              [
                a('th', [
                  e._v('Modifier')
                ]),
                a('th', [
                  e._v('Factor')
                ]),
                a('th', [
                  e._v('Value')
                ])
              ]
            )
          }
        ]
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              a('h5', [
                e._v('Gameplay')
              ]),
              e._v(' '),
              a(
                'input',
                {
                  directives: [
                    {
                      name: 'model',
                      rawName: 'v-model',
                      value: e.settings.pauseOnPrestige.state.value,
                      expression: 'settings.pauseOnPrestige.state.value'
                    }
                  ],
                  attrs: {
                    type: 'checkbox',
                    id: 'checkbox-pauseOnPrestige'
                  },
                  domProps: {
                    checked: Array.isArray(e.settings.pauseOnPrestige.state.value) ? e._i(e.settings.pauseOnPrestige.state.value, null) > - 1 : e.settings.pauseOnPrestige.state.value
                  },
                  on: {
                    __c: function (t) {
                      var a = e.settings.pauseOnPrestige.state.value,
                      n = t.target,
                      i = !!n.checked;
                      if (Array.isArray(a)) {
                        var r = null,
                        s = e._i(a, r);
                        i ? s < 0 &&
                        (e.settings.pauseOnPrestige.state.value = a.concat(r)) : s > - 1 &&
                        (
                          e.settings.pauseOnPrestige.state.value = a.slice(0, s).concat(a.slice(s + 1))
                        )
                      } else e.settings.pauseOnPrestige.state.value = i
                    }
                  }
                }
              ),
              e._v(' '),
              a(
                'label',
                {
                  attrs: {
                    for : 'checkbox-pauseOnPrestige'
                  }
                },
                [
                  e._v('Auto-Pause when starting a new life')
                ]
              ),
              e._v(' '),
              a('br'),
              e._v(' '),
              a(
                'button',
                {
                  staticClass: 'btn',
                  attrs: {
                    role: 'button'
                  },
                  on: {
                    click: function (t) {
                      e.toggleNightMode()
                    }
                  }
                },
                [
                  e._v('Toggle Night Mode')
                ]
              ),
              e._v(' '),
              a('br'),
              e._v(' '),
              a('h5', [
                e._v('Import/Export Savegame')
              ]),
              e._v(' '),
              a('br'),
              e._v(' '),
              a(
                'small',
                [
                  e._v(
                    'Note: imports from pre-kongregate versions of this game are not officially supported, but feel free to try'
                  )
                ]
              ),
              a('br'),
              e._v(' '),
              a(
                'button',
                {
                  staticClass: 'btn',
                  attrs: {
                    role: 'button'
                  },
                  on: {
                    click: function (t) {
                      e.exportSaveHelper()
                    }
                  }
                },
                [
                  e._v('Export')
                ]
              ),
              e._v(' '),
              a(
                'button',
                {
                  staticClass: 'btn',
                  attrs: {
                    role: 'button'
                  },
                  on: {
                    click: function (t) {
                      e.importSaveHelper()
                    }
                  }
                },
                [
                  e._v('Import')
                ]
              ),
              e._v(' '),
              a('br'),
              e._v(' '),
              a(
                'textarea',
                {
                  ref: 'savegamearea',
                  attrs: {
                    onclick: 'this.select()',
                    rows: '10',
                    cols: '50'
                  }
                }
              ),
              e._v(' '),
              a('br'),
              e._v(' '),
              a('br'),
              e._v(' '),
              a('br'),
              e._v(' '),
              a('br'),
              e._v(' '),
              a(
                'h1',
                [
                  e._v('WARNING! THE FOLLOWING BUTTON WILL DELETE YOUR PROGRESS!')
                ]
              ),
              e._v(' '),
              a(
                'button',
                {
                  staticClass: 'btn',
                  attrs: {
                    role: 'button'
                  },
                  on: {
                    click: function (t) {
                      e.hardReset()
                    }
                  }
                },
                [
                  e._v('Hard Reset')
                ]
              )
            ]
          )
        },
        staticRenderFns: []
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return e.messageBox.messages.length > 0 ? a(
            'div',
            {
              class : [
                'alert',
                e.messageBox.newestMessage() [1],
                'alert-dismissible',
                'fade',
                'show',
                'floating',
                'text-center'
              ],
              attrs: {
                role: 'alert'
              },
              on: {
                click: function (t) {
                  e.acknowledgeMessage()
                }
              }
            },
            [
              e._m(0),
              e._v('\n  ' + e._s(e.messageBox.newestMessage() [0]) + '\n')
            ]
          ) : e._e()
        },
        staticRenderFns: [
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a(
              'button',
              {
                staticClass: 'close',
                attrs: {
                  type: 'button',
                  'aria-label': 'Close'
                }
              },
              [
                a('span', {
                  attrs: {
                    'aria-hidden': 'true'
                  }
                }, [
                  e._v('×')
                ])
              ]
            )
          }
        ]
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            {
              attrs: {
                id: 'app'
              }
            },
            [
              a(
                'div',
                {
                  staticClass: 'container-fluid'
                },
                [
                  a('bonusticks-modal'),
                  e._v(' '),
                  a('austerity-alert'),
                  e._v(' '),
                  a(
                    'div',
                    {
                      staticClass: 'row'
                    },
                    [
                      a('sidebar-display'),
                      e._v(' '),
                      a(
                        'div',
                        {
                          staticClass: 'col-md-8'
                        },
                        [
                          a('navbar-display', {
                            attrs: {
                              panes: e.panes
                            }
                          }),
                          e._v(' '),
                          a('main-pane')
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              e._v(' '),
              a('message-box')
            ],
            1
          )
        },
        staticRenderFns: []
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a(
                    'nobr',
                    [
                      a(
                        'button',
                        {
                          staticClass: 'btn m-3',
                          staticStyle: {
                            width: '9rem'
                          },
                          attrs: {
                            role: 'button',
                            disabled: !e.userInventory.haveAutoBoost
                          },
                          on: {
                            click: function (t) {
                              e.autoBoost.toggleValue()
                            }
                          }
                        },
                        [
                          a(
                            'small',
                            [
                              e._v('Auto-Boost is ' + e._s(e.autoBoost.select('On', 'Off')))
                            ]
                          )
                        ]
                      ),
                      e._v(' '),
                      e.userInventory.haveAutoBoost ? a(
                        'span',
                        [
                          a(
                            'input',
                            {
                              directives: [
                                {
                                  name: 'model',
                                  rawName: 'v-model',
                                  value: e.autoBoostStack.value,
                                  expression: 'autoBoostStack.value'
                                }
                              ],
                              attrs: {
                                type: 'checkbox',
                                id: 'abs'
                              },
                              domProps: {
                                checked: Array.isArray(e.autoBoostStack.value) ? e._i(e.autoBoostStack.value, null) > - 1 : e.autoBoostStack.value
                              },
                              on: {
                                __c: function (t) {
                                  var a = e.autoBoostStack.value,
                                  n = t.target,
                                  i = !!n.checked;
                                  if (Array.isArray(a)) {
                                    var r = null,
                                    s = e._i(a, r);
                                    i ? s < 0 &&
                                    (e.autoBoostStack.value = a.concat(r)) : s > - 1 &&
                                    (e.autoBoostStack.value = a.slice(0, s).concat(a.slice(s + 1)))
                                  } else e.autoBoostStack.value = i
                                }
                              }
                            }
                          ),
                          e._v(' '),
                          a('label', {
                            attrs: {
                              for : 'abs'
                            }
                          }, [
                            e._v('Stack')
                          ]),
                          e._v(' '),
                          a(
                            'input',
                            {
                              directives: [
                                {
                                  name: 'model',
                                  rawName: 'v-model.number',
                                  value: e.autoBoostExclConference.value,
                                  expression: 'autoBoostExclConference.value',
                                  modifiers: {
                                    number: !0
                                  }
                                }
                              ],
                              attrs: {
                                type: 'checkbox',
                                id: 'excl-conf'
                              },
                              domProps: {
                                checked: Array.isArray(e.autoBoostExclConference.value) ? e._i(e.autoBoostExclConference.value, null) > - 1 : e.autoBoostExclConference.value
                              },
                              on: {
                                __c: function (t) {
                                  var a = e.autoBoostExclConference.value,
                                  n = t.target,
                                  i = !!n.checked;
                                  if (Array.isArray(a)) {
                                    var r = e._n(null),
                                    s = e._i(a, r);
                                    i ? s < 0 &&
                                    (e.autoBoostExclConference.value = a.concat(r)) : s > - 1 &&
                                    (
                                      e.autoBoostExclConference.value = a.slice(0, s).concat(a.slice(s + 1))
                                    )
                                  } else e.autoBoostExclConference.value = i
                                }
                              }
                            }
                          ),
                          e._v(' '),
                          a(
                            'label',
                            {
                              attrs: {
                                for : 'excl-conf'
                              }
                            },
                            [
                              e._v('Wait for Conference')
                            ]
                          ),
                          e._v(' '),
                          a(
                            'input',
                            {
                              directives: [
                                {
                                  name: 'model',
                                  rawName: 'v-model',
                                  value: e.autoBoostJustPause.value,
                                  expression: 'autoBoostJustPause.value'
                                }
                              ],
                              attrs: {
                                type: 'checkbox',
                                id: 'abjp'
                              },
                              domProps: {
                                checked: Array.isArray(e.autoBoostJustPause.value) ? e._i(e.autoBoostJustPause.value, null) > - 1 : e.autoBoostJustPause.value
                              },
                              on: {
                                __c: function (t) {
                                  var a = e.autoBoostJustPause.value,
                                  n = t.target,
                                  i = !!n.checked;
                                  if (Array.isArray(a)) {
                                    var r = null,
                                    s = e._i(a, r);
                                    i ? s < 0 &&
                                    (e.autoBoostJustPause.value = a.concat(r)) : s > - 1 &&
                                    (e.autoBoostJustPause.value = a.slice(0, s).concat(a.slice(s + 1)))
                                  } else e.autoBoostJustPause.value = i
                                }
                              }
                            }
                          ),
                          e._v(' '),
                          a('label', {
                            attrs: {
                              for : 'abjp'
                            }
                          }, [
                            e._v('Pause if ready')
                          ])
                        ]
                      ) : a(
                        'a',
                        {
                          attrs: {
                            href: '#'
                          },
                          on: {
                            click: function (t) {
                              e.selectPane(e.groundhogMarketPane)
                            }
                          }
                        },
                        [
                          a('small', [
                            e._v('Unlock')
                          ])
                        ]
                      )
                    ]
                  )
                ],
                1
              ),
              e._v(' '),
              e._m(0),
              e._v(' '),
              a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a(
                    'table',
                    [
                      e._m(1),
                      e._v(' '),
                      e._l(
                        e.boosts,
                        function (t) {
                          return t.unlocked() ? a(
                            'tr',
                            [
                              a(
                                'td',
                                [
                                  a(
                                    'button',
                                    {
                                      class : [
                                        'btn',
                                        t.buttonState()
                                      ],
                                      staticStyle: {
                                        width: '10rem'
                                      },
                                      attrs: {
                                        role: 'button'
                                      },
                                      on: {
                                        click: function (a) {
                                          e.activateBoost(t)
                                        }
                                      }
                                    },
                                    [
                                      e._v(e._s(t.name))
                                    ]
                                  )
                                ]
                              ),
                              e._v(' '),
                              a(
                                'td',
                                {
                                  staticStyle: {
                                    'padding-left': '20px'
                                  }
                                },
                                [
                                  e._v('\n          ' + e._s(t.description) + '\n        ')
                                ]
                              ),
                              e._v(' '),
                              a('td', [
                                e._v('\n          ' + e._s(t.daysLeft()) + '\n        ')
                              ]),
                              a(
                                'td',
                                [
                                  e._v(
                                    '\n          ' + e._s(e.formatDays(t.cooldownLeft(), !0)) + '\n        '
                                  )
                                ]
                              )
                            ]
                          ) : a(
                            'tr',
                            [
                              a(
                                'td',
                                {
                                  attrs: {
                                    colspan: '4'
                                  }
                                },
                                [
                                  e._v(
                                    '\n        Requires: ' + e._s(t.locks.lockString()) + '\n        '
                                  )
                                ]
                              )
                            ]
                          )
                        }
                      )
                    ],
                    2
                  )
                ]
              ),
              e._v(' '),
              a('assistants-display')
            ],
            1
          )
        },
        staticRenderFns: [
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a('div', {
              staticClass: 'row'
            }, [
              a('h5', [
                e._v('Boosts')
              ])
            ])
          },
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a(
              'tr',
              [
                a('th', {
                  staticStyle: {
                    width: '12rem'
                  }
                }),
                e._v(' '),
                a(
                  'th',
                  {
                    staticStyle: {
                      width: '15rem',
                      'padding-left': '20px'
                    }
                  },
                  [
                    e._v('Effect')
                  ]
                ),
                e._v(' '),
                a('th', {
                  staticStyle: {
                    width: '6rem'
                  }
                }, [
                  e._v('Days Left')
                ]),
                e._v(' '),
                a('th', {
                  staticStyle: {
                    width: '3rem'
                  }
                }, [
                  e._v('Cooldown')
                ])
              ]
            )
          }
        ]
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a(
                    'nobr',
                    [
                      a(
                        'button',
                        {
                          staticClass: 'btn m-3',
                          staticStyle: {
                            width: '12rem'
                          },
                          attrs: {
                            role: 'button',
                            disabled: !e.userInventory.haveAutoResearch
                          },
                          on: {
                            click: function (t) {
                              e.autoResearch.toggleValue()
                            }
                          }
                        },
                        [
                          a(
                            'small',
                            [
                              e._v('Auto-Research is ' + e._s(e.autoResearch.select('On', 'Off')))
                            ]
                          )
                        ]
                      ),
                      e._v(' '),
                      e.userInventory.haveAutoResearch ? a(
                        'span',
                        [
                          a(
                            'input',
                            {
                              directives: [
                                {
                                  name: 'model',
                                  rawName: 'v-model',
                                  value: e.autoResearchJustPause.value,
                                  expression: 'autoResearchJustPause.value'
                                }
                              ],
                              attrs: {
                                type: 'checkbox',
                                id: 'arjp'
                              },
                              domProps: {
                                checked: Array.isArray(e.autoResearchJustPause.value) ? e._i(e.autoResearchJustPause.value, null) > - 1 : e.autoResearchJustPause.value
                              },
                              on: {
                                __c: function (t) {
                                  var a = e.autoResearchJustPause.value,
                                  n = t.target,
                                  i = !!n.checked;
                                  if (Array.isArray(a)) {
                                    var r = null,
                                    s = e._i(a, r);
                                    i ? s < 0 &&
                                    (e.autoResearchJustPause.value = a.concat(r)) : s > - 1 &&
                                    (
                                      e.autoResearchJustPause.value = a.slice(0, s).concat(a.slice(s + 1))
                                    )
                                  } else e.autoResearchJustPause.value = i
                                }
                              }
                            }
                          ),
                          e._v(' '),
                          a(
                            'label',
                            {
                              attrs: {
                                for : 'arjp'
                              }
                            },
                            [
                              e._v('Pause if Current Research finished')
                            ]
                          )
                        ]
                      ) : a(
                        'a',
                        {
                          attrs: {
                            href: '#'
                          },
                          on: {
                            click: function (t) {
                              e.selectPane(e.groundhogMarketPane)
                            }
                          }
                        },
                        [
                          a('small', [
                            e._v('Unlock')
                          ])
                        ]
                      )
                    ]
                  )
                ],
                1
              ),
              e._v(' '),
              a(
                'div',
                {
                  staticClass: 'row'
                },
                [
                  a(
                    'table',
                    [
                      e._m(0),
                      e._v(' '),
                      a(
                        'tr',
                        [
                          a('td'),
                          e._v(' '),
                          a(
                            'td',
                            [
                              a(
                                'div',
                                {
                                  staticClass: 'dropdown'
                                },
                                [
                                  a(
                                    'button',
                                    {
                                      staticClass: 'btn btn-primary dropdown-toggle',
                                      attrs: {
                                        type: 'button',
                                        id: 'dropdownMenuButton',
                                        'data-toggle': 'dropdown',
                                        'aria-haspopup': 'true',
                                        'aria-expanded': 'false'
                                      }
                                    },
                                    [
                                      e._v('\n              Add Area\n            ')
                                    ]
                                  ),
                                  e._v(' '),
                                  a(
                                    'div',
                                    {
                                      staticClass: 'dropdown-menu',
                                      attrs: {
                                        'aria-labelledby': 'dropdownMenuButton'
                                      }
                                    },
                                    e._l(
                                      e.areas,
                                      function (t) {
                                        return t.unlocked() ||
                                        t.xp.highestLevelEverIncludingThisLife() > 0 ? a(
                                          'button',
                                          {
                                            staticClass: 'dropdown-item',
                                            on: {
                                              click: function (a) {
                                                e.researchQueue.addItem(t)
                                              }
                                            }
                                          },
                                          [
                                            e._v(e._s(t.name))
                                          ]
                                        ) : e._e()
                                      }
                                    )
                                  )
                                ]
                              )
                            ]
                          ),
                          e._v(' '),
                          a('td', [
                            e._v('Target Level')
                          ]),
                          e._v(' '),
                          a('td'),
                          e._v(' '),
                          a('td')
                        ]
                      ),
                      e._v(' '),
                      a(
                        'tbody',
                        e._l(
                          e.items,
                          function (t, n) {
                            return a(
                              'tr',
                              {
                                key: t.internalId
                              },
                              [
                                a(
                                  'td',
                                  [
                                    a(
                                      'button',
                                      {
                                        staticClass: 'btn btn-danger btn-sm',
                                        on: {
                                          click: function (a) {
                                            e.researchQueue.removeItem(t.internalId)
                                          }
                                        }
                                      },
                                      [
                                        a('span', {
                                          staticClass: 'icon ion-ios-close'
                                        })
                                      ]
                                    )
                                  ]
                                ),
                                e._v(' '),
                                a(
                                  'td',
                                  {
                                    class : [
                                      t.unlocked ? 'q-unlocked' : 'q-locked',
                                      t.finished ? 'q-finished' : 'q-unfinished',
                                      t.active ? 'q-active' : 'q-passive'
                                    ]
                                  },
                                  [
                                    e._v('\n            ' + e._s(t.name) + '\n          ')
                                  ]
                                ),
                                e._v(' '),
                                a(
                                  'td',
                                  [
                                    a(
                                      'input',
                                      {
                                        directives: [
                                          {
                                            name: 'model',
                                            rawName: 'v-model.number',
                                            value: t.goal,
                                            expression: 'item.goal',
                                            modifiers: {
                                              number: !0
                                            }
                                          }
                                        ],
                                        staticClass: 'goal-input',
                                        attrs: {
                                          type: 'text',
                                          tabindex: n + 2
                                        },
                                        domProps: {
                                          value: t.goal
                                        },
                                        on: {
                                          input: function (a) {
                                            a.target.composing ||
                                            (t.goal = e._n(a.target.value))
                                          },
                                          blur: function (t) {
                                            e.$forceUpdate()
                                          }
                                        }
                                      }
                                    )
                                  ]
                                ),
                                e._v(' '),
                                a(
                                  'td',
                                  [
                                    a(
                                      'button',
                                      {
                                        staticClass: 'btn btn-success btn-sm',
                                        on: {
                                          click: function (a) {
                                            e.researchQueue.moveUp(t.internalId)
                                          }
                                        }
                                      },
                                      [
                                        a('span', {
                                          staticClass: 'icon ion-ios-arrow-up'
                                        })
                                      ]
                                    )
                                  ]
                                ),
                                e._v(' '),
                                a(
                                  'td',
                                  [
                                    a(
                                      'button',
                                      {
                                        staticClass: 'btn btn-warning btn-sm',
                                        on: {
                                          click: function (a) {
                                            e.researchQueue.moveDown(t.internalId)
                                          }
                                        }
                                      },
                                      [
                                        a('span', {
                                          staticClass: 'icon ion-ios-arrow-down'
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          }
                        )
                      )
                    ]
                  )
                ]
              )
            ]
          )
        },
        staticRenderFns: [
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a(
              'tr',
              [
                a('th', {
                  staticStyle: {
                    width: '1rem'
                  }
                }),
                e._v(' '),
                a('th', {
                  staticStyle: {
                    width: '15rem'
                  }
                }),
                e._v(' '),
                a('th', {
                  staticStyle: {
                    width: '7rem'
                  }
                }),
                e._v(' '),
                a('td'),
                e._v(' '),
                a('td')
              ]
            )
          }
        ]
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return e.battle.state.enemyReachedSolarSystem ? a('div', {
            staticClass: 'row'
          }, [
            e._m(0)
          ]) : e._e()
        },
        staticRenderFns: [
          function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c ||
            t;
            return a(
              'div',
              {
                staticClass: 'alert alert-danger',
                attrs: {
                  role: 'alert'
                }
              },
              [
                a('strong', [
                  e._v('Warning!')
                ]),
                e._v(' Experiencing major time dilation. Check your events.\n  ')
              ]
            )
          }
        ]
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            {
              staticClass: 'tab-content small-paper',
              staticStyle: {
                'padding-left': '20px',
                'padding-top': '5px',
                'min-height': '90%'
              }
            },
            e._l(
              e.panes,
              function (t) {
                return t.state.selected ? a(
                  'div',
                  {
                    class : [
                      t.state.selected ? 'active' : ''
                    ],
                    attrs: {
                      id: t.id
                    }
                  },
                  [
                    a(t.component, {
                      tag: 'div'
                    })
                  ]
                ) : e._e()
              }
            )
          )
        },
        staticRenderFns: []
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return e.time.currentDay.getValue() >= 1 &&
          e.time.currentDay.getValue() <= 100 &&
          e.time.currentLife.getValue() > 1 ? a(
            'div',
            {
              staticClass: 'row'
            },
            [
              a(
                'div',
                {
                  staticClass: 'alert alert-success',
                  attrs: {
                    role: 'alert'
                  }
                },
                [
                  e._v(
                    '\n     You just turned 18. Again. Expertise from previous lives makes things easier this time.\n  '
                  )
                ]
              )
            ]
          ) : e._e()
        },
        staticRenderFns: []
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'div',
            [
              a('navbar-display', {
                attrs: {
                  panes: e.otherPane.subpanes
                }
              }),
              e._v(' '),
              a(
                'div',
                {
                  staticClass: 'tab-content small-paper',
                  staticStyle: {
                    'padding-left': '20px',
                    'padding-top': '20px',
                    'min-height': '100%'
                  }
                },
                e._l(
                  e.otherPane.subpanes,
                  function (t) {
                    return t.state.selected ? a(
                      'div',
                      {
                        class : [
                          t.state.selected ? 'active' : ''
                        ],
                        attrs: {
                          id: t.id
                        }
                      },
                      [
                        a(t.component, {
                          tag: 'div'
                        })
                      ]
                    ) : e._e()
                  }
                )
              )
            ],
            1
          )
        },
        staticRenderFns: []
      }
    },
    function (e, t) {
      e.exports = {
        render: function () {
          var e = this,
          t = e.$createElement,
          a = e._self._c ||
          t;
          return a(
            'tr',
            [
              a(
                'td',
                {
                  staticStyle: {
                    'padding-right': '5px',
                    'padding-bottom': '5px'
                  }
                },
                [
                  a(
                    'div',
                    {
                      class : [
                        'progress',
                        e.entity.state.active ? 'p-selected' : ''
                      ],
                      staticStyle: {
                        height: '28px'
                      },
                      on: {
                        click: function (t) {
                          e.setActiveResearch(e.entity)
                        }
                      }
                    },
                    [
                      a(
                        'div',
                        {
                          class : [
                            e.entity.state.active ? 'pb-selected' : 'pb-not-selected',
                            'progress-bar'
                          ],
                          style: 'height: 100%; width: ' + e.entity.xp.perc() + '%',
                          attrs: {
                            role: 'progressbar'
                          }
                        },
                        [
                          a(
                            'span',
                            {
                              staticClass: 'progress-label'
                            },
                            [
                              e._v(e._s(e.entity.name))
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              ),
              e._v(' '),
              a(
                'td',
                {
                  staticClass: 'text-center'
                },
                [
                  e._v(
                    '\n      ' + e._s(e.abbrLevel(e.entity.xp.state.level)) + '\n    '
                  )
                ]
              ),
              e._v(' '),
              a('td', [
                a('small', [
                  e._v(e._s(e.entity.effect))
                ])
              ]),
              e._v(' '),
              a(
                'td',
                {
                  staticClass: 'text-muted'
                },
                [
                  e._v('\n      ' + e._s(e.entity.xp.xpToNextLevelString()) + '\n    ')
                ]
              ),
              e._v(' '),
              a(
                'td',
                {
                  staticStyle: {
                    'padding-right': '10px'
                  }
                },
                [
                  e.settings.xpPerHour.getValue() ? a(
                    'stat-display',
                    {
                      attrs: {
                        stat: e.entity.xp.xpPerHourStat,
                        name: !1
                      }
                    }
                  ) : a(
                    'stat-display',
                    {
                      attrs: {
                        stat: e.entity.xp.xpPerDayStat,
                        name: !1
                      }
                    }
                  )
                ],
                1
              ),
              e._v(' '),
              e.time.currentLife.getValue() > 1 ? a(
                'td',
                {
                  staticClass: 'text-center'
                },
                [
                  e._v(
                    '\n      ' + e._s(e.abbrLevel(e.entity.xp.state.highestLevelThisLoop)) + '\n    '
                  )
                ]
              ) : e._e()
            ]
          )
        },
        staticRenderFns: []
      }
    }
  ]
);
