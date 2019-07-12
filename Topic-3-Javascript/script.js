let btn = document.querySelector("button");
let req = new XMLHttpRequest();
let pp;

/*btn.onclick = function () {
    fnAlert();
}

function fnAlert () {
    alert("You clicked me!");
}*/
btn.onclick = function () {
    fnGetData();
}

function fnGetData() {
    req.open ("GET","http://api.icndb.com/jokes/random");

    req.addEventListener("load", (data) => {
        pp =(JSON.parse(data.target.response));
        /*document.getElementById("jokeNorris").value = pp;*/
        console.log(pp);
    });

    req.send();
}