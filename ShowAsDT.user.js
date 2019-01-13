// ==UserScript==
// @name     DT Redirect
// @description Redirect Bitcointalk URLs to Show as DT
// @version  0.1
// @author DarkStar_
// @match       https://*.bitcointalk.org/*
// @run-at      document-start
// @grant       none
// ==/UserScript==


if (! /;dt/.test (window.location.href) 
    && window.location.href != "https://bitcointalk.org/index.php" 
    && window.location.href != "https://bitcointalk.org/" 
    && ! /action=search/.test (window.location.href)
    && ! /more\.php/.test (window.location.href)
    && ! /donate.html/.test (window.location.href)
    && ! /#new/.test (window.location.href)
    && ! /#msg/.test (window.location.href)
   ) {
	var newURL = window.location.href + ";dt";
	window.location.replace (newURL);
}
