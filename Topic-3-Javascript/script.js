let btn = document.querySelector("button");
let req = new XMLHttpRequest();
let pp;
let arr = [];
let id;

btn.onclick = function () {
    fetch("http://api.icndb.com/jokes/random")
        .then(res => res.json())
        .then (data => {
            console.log(data.value.joke);
            id = data.value.id;
            pp = data.value.joke;
            console.log(id);
            arr.push(id);
            if (arr.includes(id) === true){                   
                document.getElementById("jokeNorris").value = pp;
            }else {
                alert("click again!");
            }

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
