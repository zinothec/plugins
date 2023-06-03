var key = (function () { return (new URLSearchParams(document.currentScript.src)).get('api') })();
console.log(key)
