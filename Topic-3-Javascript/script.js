let btn = document.querySelector("button");
let req = new XMLHttpRequest();
let pp;

btn.onclick = function () {
    fetch("http://api.icndb.com/jokes/random")
        .then(res => res.json())
        .then (data => {
            console.log(data.value.joke);
            pp = data.value.joke;
            document.getElementById("jokeNorris").value = pp;
        })
        .catch(err => {
            console.log("error!");
            console.error(err);
            fnRedSection();
        })
    function fnRedSection () {
        document.body.style.backgroundColor = "red";
        document.getElementById("jokeNorris").value = "ERROR!"
    }
}

/*function fnGetData() {
    req.open ("GET","http://api.icndb.com/jokes/random");

    req.addEventListener("load", (data) => {
        pp = (JSON.parse(data.target.response));
        
    });

    req.send();
}*/
