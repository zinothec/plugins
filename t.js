var id = (function () { return new URL(document.currentScript.src).searchParams.get('id') })();
console.log(id)
