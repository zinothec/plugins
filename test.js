var api = (function () { return (new URLSearchParams(location.search)).get('api') })()
var sc = document.currentScript.src;
console.log(api,sc)
