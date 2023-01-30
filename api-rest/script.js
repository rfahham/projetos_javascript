let req = new XMLHttpRequest();

req.open("GET", "https://api.adviceslip.com/advice");

req.onload = function() {
    if(req === 200) {
        console.log(req.responseText);
    } else {
        console.log(req.status);
    }
}

req.send();

//https://bobbyhadz.com/blog/javascript-xmlhttprequest-is-not-defined