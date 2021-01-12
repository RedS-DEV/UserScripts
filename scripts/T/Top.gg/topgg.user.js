// ==UserScript==
// @name         New Userscript123
// @namespace    https://top.gg/*
// @version      0.2
// @description  Tools for Top.gg
// @author       Enes Genç
// @match        https://top.gg/*
// @updateURL    https://github.com/RedS-DEV/UserScripts/raw/main/scripts/T/Top.gg/topgg.user.js
// @downloadURL  https://github.com/RedS-DEV/UserScripts/raw/main/scripts/T/Top.gg/topgg.user.js
// @require      https://openuserjs.org/src/libs/sizzle/GM_config.js
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(function() {

    'use strict';

    // Your code here...
    GM_config.init(
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
    let buttonli = document.createElement("li");
    let button = document.createElement("a");
    buttonli.appendChild(button);
    button.innerHTML = "Top.gg Tools";
    function openMenu (zEvent) {
        GM_config.open();
    }

    const navbar = document.getElementsByClassName("menu container")[0];
    const navul = document.getElementsByClassName("menu container")[0].getElementsByTagName("ul")[0];

    navul.appendChild(buttonli);

    button.addEventListener("click", openMenu, false);

    function worker() {
        if(GM_config.get("preHider")) {
            $("li:contains(Premium)").remove();
        }
    }

    GM_config.onSave(worker());


})();