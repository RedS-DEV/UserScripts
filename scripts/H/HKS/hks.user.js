// ==UserScript==
// @name         HKS
// @namespace    https://enesgenc.gen.tr
// @version      1.0
// @description  HKS
// @author       Enes Genç
// @match        *://hks.hal.gov.tr/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    let page = window.location.pathname;

    if (page === "/Pages/ToptanciHalIslemleri/HalGirisEkle.aspx") {
        document.getElementById("ContentPlaceHolder1_txtAracPlakaNo").focus();
    }

    if (page === "/Pages/ToptanciHalIslemleri/HalCikisEkle.aspx") {
        document.getElementById("ContentPlaceHolder1_txtAracPlakaNo").focus();
    }
    
})();
