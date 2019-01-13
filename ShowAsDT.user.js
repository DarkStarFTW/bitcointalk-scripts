// ==UserScript==
// @name     DT Redirect
// @description Redirect Bitcointalk URLs to Show as DT
// @version  0.2
// @author DarkStar_
// @include       https://bitcointalk.org/*
// @grant       none
// ==/UserScript==

(() => {
  document.querySelectorAll("a[href^='https://bitcointalk.org/']").forEach(a => {
      if (! /;dt/.test (a)
          && a != "https://bitcointalk.org/index.php"
          && a != "https://bitcointalk.org/"
          && ! /action=search/.test (a)
          && ! /more\.php/.test (a)
          && ! /donate.html/.test (a)
          && ! /#new/.test (a)
          && ! /#msg/.test (a)){
          a.href += ";dt";
      }
  });
  document.querySelectorAll("a[href^='/index.php']").forEach(a => {
      if (! /;dt/.test (a)
          && a != "index.php"
          && ! /action=search/.test (a)
          && ! /more\.php/.test (a)
          && ! /donate.html/.test (a)
          && ! /#new/.test (a)
          && ! /#msg/.test (a)){
          a.href += ";dt";
      }
  });
})();
