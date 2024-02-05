document.addEventListener('DOMContentLoaded', () => {
    let script1 = document.querySelector('#handlebars1').innerHTML;

    let obj = {
        objProperty1 : true,
    };

    let templateScript = Handlebars.compile(script1); // returns a function
    document.body.innerHTML = templateScript(obj);
});