// ==UserScript==
// @name         New Userscript123
// @namespace    https://top.gg/*
// @version      0.3
// @description  Tools for Top.gg
// @author       Enes Genç
// @match        https://top.gg/*
// @updateURL    https://github.com/RedS-DEV/UserScripts/raw/main/scripts/T/Top.gg/topgg.user.js
// @downloadURL  https://github.com/RedS-DEV/UserScripts/raw/main/scripts/T/Top.gg/topgg.user.js
// @require      https://openuserjs.org/src/libs/sizzle/GM_config.js
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @require      https://raw.githubusercontent.com/RedS-DEV/UserScripts/main/lib/colorbox.js
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
                "preHide": {
                    "label": "Premium Tab Hider",
                    "type": "checkbox",
                    "default": false
                },
                "advHide": {
                    "label": "Advertise Tab Hider",
                    "type": "checkbox",
                    "default": false
                },
                "homeHide": {
                    "label": "Hide Home Button (You can click to Top.gg logo)",
                    "type": "checkbox",
                    "default": false
                },
                "dcHide": {
                    "label": "Hide Join Discord Button",
                    "type": "checkbox",
                    "default": false
                },
                "adbHide": {
                    "label": "Hide Add Bot Tab",
                    "type": "checkbox",
                    "default": false
                },
                "srvHide": {
                    "label": "Hide Discord Servers Tab",
                    "type": "checkbox",
                    "default": false
                },
                "dblStats": {
                    "label": "Show Bot Statistics (Data from dblstatistics.com",
                    "type": "checkbox",
                    "default": true
                }

            },
            'events': // Callback functions object
                {
                    'init': function() { worker(); },
                    'save': function() { worker(); }
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
        let page = window.location.pathname;

        if(GM_config.get("preHide")) {
            $("li:contains(Premium)").remove();
        }
        if(GM_config.get("advHide")) {
            $("li:contains(Advertise)").remove();
        }
        if(GM_config.get("homeHide")) {
            $("li:contains(Home)").remove();
        }
        if(GM_config.get("dcHide")) {
            $("li a[href*='https://discord.gg/']").remove();
        }
        if(GM_config.get("adbHide")) {
            $("li:contains(Add Bot)").remove();
        }
        if(GM_config.get("srvHide")) {
            $("li:contains(Discord Servers)").remove();
        }
        if(page.startsWith("/bot/") && GM_config.get("dblStats")) {
            let desc = $(".entity-content__description");
            let div = document.createElement("div");
            let moUpv = document.createElement("a");
            let toUpv = document.createElement("a");
            let srvrs = document.createElement("a");
            let shard = document.createElement("a");

            moUpv.innerHTML = "Monthly Upvotes";
            moUpv.className = "moUpv";
            $(".moUpv").colorbox({href: `https://dblstatistics.com${page} .monthlyvotes`});
            div.appendChild(moUpv);


            desc.prepend(div);
        }
    }

})();