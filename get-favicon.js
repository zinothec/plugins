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
function extr_domain(a) {
if (-1 < a.indexOf("://")) return -1 < a.indexOf("://www.") ? a.split("://www.")[1].split(".")[0] : a.split("://")[1].split(".")[0];
}
$(".ref-adss li a").each(function () {
var a = $(this).attr("href");
var c = '<img src="'+a+'/favicon.ico" width="20" height="20"  alt="' + extr_domain(a) + '" />';
$(this).append(c);
});
