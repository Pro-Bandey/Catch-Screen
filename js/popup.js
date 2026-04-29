parcelRequire = (function (e, n, t, r) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    c = "function" == typeof require && require;
  function s(t, r) {
    if (!n[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!r && i) return i(t, !0);
        if (o) return o(t, !0);
        if (c && "string" == typeof t) return c(t);
        var a = new Error("Cannot find module '" + t + "'");
        throw ((a.code = "MODULE_NOT_FOUND"), a);
      }
      ((d.resolve = function (n) {
        return e[t][1][n] || n;
      }),
        (d.cache = {}));
      var u = (n[t] = new s.Module(t));
      e[t][0].call(u.exports, d, u, u.exports, this);
    }
    return n[t].exports;
    function d(e) {
      return s(d.resolve(e));
    }
  }
  ((s.isParcelRequire = !0),
    (s.Module = function (e) {
      ((this.id = e), (this.bundle = s), (this.exports = {}));
    }),
    (s.modules = e),
    (s.cache = n),
    (s.parent = o),
    (s.register = function (n, t) {
      e[n] = [
        function (e, n) {
          n.exports = t;
        },
        {},
      ];
    }));
  for (var a = 0; a < t.length; a++)
    try {
      s(t[a]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var u = s(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = u)
      : "function" == typeof define &&
      define.amd &&
      define(function () {
        return u;
      });
  }
  if (((parcelRequire = s), i)) throw i;
  return s;
})(
  {
    NcgF: [
      function (e, n, t) {
        var r = null,
          i = null,
          o = function () {
            clearInterval(i);
            var e = document.querySelector(".CatchFinishSection");
            e && e.remove();
          },
          c = function () {
            (!(function () {
              try {
                (document
                  .querySelector(".CatchLoaderWaitng")
                  .classList.remove("unactive"),
                  document.querySelector(".CatchBtnsWrapper"));
              } catch (e) { }
            })(),
              chrome.tabs.query(
                { active: !0, currentWindow: !0 },
                function (e) {
                  chrome.tabs.sendMessage(
                    e[0].id,
                    { action: "startScreenshotToDo" },
                    () => { },
                  );
                },
              ));
          };
        window.addEventListener("load", function () {
          let e = {
            devicePixelRatio: window.devicePixelRatio,
            screenWidth: window.screen.availWidth,
            screenHeight: window.screen.availHeight,
          };
          chrome.storage.local.set(e, () => {
            chrome.runtime.sendMessage({ action: "rb_request_access" });
          });
        });
        chrome.runtime.onMessage.addListener(function (e) {
          var n = e.action;
          ("rb_inaccessible_host" === n &&
            (function () {
              try {
                (document
                  .querySelector(".CatchContainerMassage")
                  .classList.remove("unactive"),
                  document.querySelector(".CatchBtnsWrapper"));
              } catch (e) { }
            })(),
            "rb_hide_loader" === n &&
            ((function () {
              try {
                (document.querySelector(".CatchContainerMassage").classList.add("hidden"),
                  document
                    .querySelector(".CatchBtnsWrapper")
                    .classList.remove("hidden"));
              } catch (e) { }
            })(),
              o()));
        });
        var s = {
          ".CatchSelectAreaBtn": function () {
            chrome.runtime.sendMessage({ action: "rb_select_area" }, () => {
              window.close();
            });
          },
          ".CatchVisibleAreaBtn": function () {
            chrome.runtime.sendMessage(
              { action: "rb_capture_visible_area" },
              () => {
                window.close();
              },
            );
          },
          ".CatchFullPageBtn": async function () {
            ((r = Date.now()),
              (i = setInterval(function () {
                if (
                  Date.now() - r >= 1e4 &&
                  !document.querySelector(".CatchFinishSection")
                ) {
                  var e = document.createElement("div");
                  (e.classList.add("CatchFinishSection"),
                    (e.innerHTML =
                      '<p>This page seems very long. Do you want to finish capturing now?</p><div class="CatchFinishSectionFinishBtn">Finish now</div>'),
                    document.body.appendChild(e));
                }
              }, 300)),
              await c());
          },
        };
        for (var a in s)
          document.querySelector(a).addEventListener("click", s[a]);
        document.body.addEventListener("click", function (e) {
          e.srcElement.classList.contains("CatchFinishSectionFinishBtn") &&
            (e.stopPropagation(),
              e.preventDefault(),
              chrome.runtime.sendMessage({
                action: "forcefully_finish_full_page_capture",
              }),
              o());
        });
      },
      {},
    ],
  },
  {},
  ["NcgF"],
);
