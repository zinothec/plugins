/*
Copyright 2022 ZINO THEC at :
https://zinothec.blogspot.com/ 
Licensed under the Apache License, Version 3.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-3.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
!(()=>{ var btn_clr = void 0 !== bttn_ok ? bttn_ok : "#fe3231", $link = void 0 !== linkk_more ? linkk_more : "/p/privacy-policy.html"; document.querySelector('#cookie-zn').innerHTML=`<div class="wk-cookie-wrapper "> <div class="wk-cookie-lt"> <div class="wk-cookie"></div> </div> <div class="wk-cookie-rt"> <p>نحن نستخدم ملفات تعريف الارتباط لفهم كيفية استخدامك لموقعنا ولتحسين تجربتك. وهذا يشمل تخصيص المحتوى والإعلانات.</p> <button class="wk-cookie-ok" style=" background-color:${btn_clr}; ">موافق</button> <button class="wk-cookie-more" style=" color: ${btn_clr}; border-color: ${btn_clr} !important; "><a href="${$link}" rel="nofollow" target="_blank" style=" color: ${btn_clr}; ">اعرف اكثر</a></button> </div> <span class="wk-cookie-close" title="إغلاق"></span> </div>`; var vCookieWrapper = document.querySelector(".wk-cookie-wrapper"), vCookieOk = document.querySelector(".wk-cookie-ok"), vCookieClose = document.querySelector(".wk-cookie-close"); if ("undefined" != typeof Storage) { var getCookieStatus = localStorage.getItem("cookieStatus"); "allowed" === getCookieStatus || vCookieWrapper.classList.add("cookie-visible"); } if (void 0 != vCookieWrapper && void 0 != vCookieOk && void 0 != vCookieClose) { function hideWrapper() { vCookieWrapper.parentNode.removeChild(vCookieWrapper); } vCookieClose.addEventListener("click", function () { vCookieWrapper.classList.add("cookie-hidden"), setTimeout(function () { hideWrapper(); }, 500); }), vCookieOk.addEventListener("click", function () { vCookieWrapper.classList.add("cookie-hidden"), setTimeout(function () { hideWrapper(); }, 500), "undefined" != typeof Storage && localStorage.setItem("cookieStatus", "allowed"); }); } /* var vCookieWrapper = document.querySelector(".wk-cookie-wrapper"), vCookieOk = document.querySelector(".wk-cookie-ok"), $btn_show = document.querySelector("#show-btn-cookie"), vCookieClose = document.querySelector(".wk-cookie-close"); $btn_show.addEventListener("click", function () { vCookieWrapper.classList.add("cookie-visible"); }); if (void 0 != vCookieWrapper && void 0 != vCookieOk && void 0 != vCookieClose) { function hideWrapper() { vCookieWrapper.parentNode.removeChild(vCookieWrapper); } vCookieClose.addEventListener("click", function () { vCookieWrapper.classList.add("cookie-hidden"), setTimeout(function () { hideWrapper(); }, 500); }), vCookieOk.addEventListener("click", function () { vCookieWrapper.classList.add("cookie-hidden"), setTimeout(function () { hideWrapper(); }, 500); }); }   */ })();
