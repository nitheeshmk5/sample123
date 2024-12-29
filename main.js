window.onloadTurnstileCallback = function () {
  turnstile.render("#myWidget", {
    sitekey: "0x4AAAAAAA4LJCgdpk0lbHGr",
    callback: function (token) {
      console.log(`Challenge Success ${token}`);
    },
  });
};
