incrementCounter = void setTimeout(function () {
  document
    .querySelector(
      ".tui-image-editor-main-container .tui-image-editor-download-btn"
    )
    .addEventListener("click", (t) => {
      t.preventDefault(),
        chrome.storage.local.get(["openTimes", "rateClicked"], function (t) {
          let { openTimes: n, rateClicked: o } = t;
          n ? (n += 1) : (n = 1),
            chrome.storage.local.set({ openTimes: n }),
            o ||
              n % 4 != 0 ||
              document.getElementById("xxdialog-rate") ||
              (document
                .querySelector("body")
                .insertAdjacentHTML("beforeend", e),
              (function () {
                for (
                  var e = document.querySelectorAll("[i18n]"), t = 0;
                  t < e.length;
                  ++t
                )
                  e[t].textContent = chrome.i18n.getMessage(
                    e[t].getAttribute("i18n")
                  );
                for (
                  e = document.querySelectorAll("[i18n-alt]"), t = 0;
                  t < e.length;
                  ++t
                ) {
                  var n = chrome.i18n.getMessage(e[t].getAttribute("i18n-alt"));
                  (e[t].alt = n), (e[t].title = n);
                }
              })(),
              document
                .querySelector("#xxdialog-yes")
                .addEventListener("click", function () {
                  chrome.storage.local.set({ rateClicked: !0 }),
                    document.getElementById("xxdialog-rate").remove(),
                    window
                      .open(
                        "https://chrome.google.com/webstore/detail/" +
                          chrome.runtime.id +
                          "/reviews",
                        "_blank"
                      )
                      .focus();
                }),
              document
                .querySelector("#xxdialog-no")
                .addEventListener("click", function () {
                  document.getElementById("xxdialog-rate").remove();
                }));
        });
    });
  const e =
    '\n<div id="xxdialog-rate" class="xxflex-container">\n    <div class="xxdialog">\n      <h2 class="xxdialog-header" i18n="rateDialogTitle"></h2>\n      <div class="xxdialog-content">\n        <p i18n="rateDialogDesc"></p>\n      </div>\n      <div class="xxdialog-button">\n        <a href="#" id="xxdialog-yes" class="xxcancel" i18n="rateDialogYes"></a>\n        <a href="#" id="xxdialog-no" i18n="rateDialogNo"></a>\n      </div>\n    </div>\n  </div>\n';
}, 300);


// function waitForElement(selector, callback) {
//   const el = document.querySelector(selector);
//   if (el) {
//     callback(el);
//     return;
//   }
//   const observer = new MutationObserver((mutations, obs) => {
//     const el = document.querySelector(selector);
//     if (el) {
//       callback(el);
//       obs.disconnect();
//     }
//   });
//   observer.observe(document.body, { childList: true, subtree: true });
// }

// waitForElement(".tui-image-editor-main-container .tui-image-editor-download-btn", (btn) => {
//   btn.addEventListener("click", (t) => {
//     t.preventDefault();
//     chrome.storage.local.get(["openTimes", "rateClicked"], (data) => {
//       let { openTimes: n, rateClicked: o } = data;
//       n = n ? n + 1 : 1;
//       chrome.storage.local.set({ openTimes: n });

//       if (!o && n % 4 === 0 && !document.getElementById("xxdialog-rate")) {
//         const e = `
// <div id="xxdialog-rate" class="xxflex-container">
//   <div class="xxdialog">
//     <h2 class="xxdialog-header" i18n="rateDialogTitle"></h2>
//     <div class="xxdialog-content">
//       <p i18n="rateDialogDesc"></p>
//     </div>
//     <div class="xxdialog-button">
//       <a href="#" id="xxdialog-yes" class="xxcancel" i18n="rateDialogYes"></a>
//       <a href="#" id="xxdialog-no" i18n="rateDialogNo"></a>
//     </div>
//   </div>
// </div>
//         `;
//         document.querySelector("body").insertAdjacentHTML("beforeend", e);

//         // Apply i18n messages
//         document.querySelectorAll("[i18n]").forEach(el => {
//           el.textContent = chrome.i18n.getMessage(el.getAttribute("i18n"));
//         });
//         document.querySelectorAll("[i18n-alt]").forEach(el => {
//           const msg = chrome.i18n.getMessage(el.getAttribute("i18n-alt"));
//           el.alt = msg;
//           el.title = msg;
//         });

//         document.querySelector("#xxdialog-yes").addEventListener("click", () => {
//           chrome.storage.local.set({ rateClicked: true });
//           document.getElementById("xxdialog-rate").remove();
//           window.open(`https://chrome.google.com/webstore/detail/${chrome.runtime.id}/reviews`, "_blank").focus();
//         });

//         document.querySelector("#xxdialog-no").addEventListener("click", () => {
//           document.getElementById("xxdialog-rate").remove();
//         });
//       }
//     });
//   });
// });
