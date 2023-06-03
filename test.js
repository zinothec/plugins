var api = (function () { return (new URLSearchParams(location.search)).get('api') })()
var sc = document.currentScript;
console.log(api,sc)
