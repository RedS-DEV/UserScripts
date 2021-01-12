// ==UserScript==
// @name         New Userscript123
// @namespace    https://top.gg/*
// @version      0.1
// @description  Tools for Top.gg
// @author       Enes Genç
// @match        https://top.gg/*
// @require      https://openuserjs.org/src/libs/sizzle/GM_config.js
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...


    GM_Config.init(
        {
            "id": "config",
            "fields": {
                "preHider": {
                    "label": "Premium Tab Hider",
                    "type": "checkbox",
                    "default": false
                }
            }
        }
    );

    let button = document.createElement("li");
    button.innerHTML = "Top.gg Tools";
    button.onclick = () => {
        GM_Config.open();
    };
    document.querySelector("menu").appendChild(button);


})();