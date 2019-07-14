let btn = document.querySelector("button");

btn.addEventListener("click", function() {
    async function getList () {
        let url = "https://api.github.com/search/repositories";
        let res = await fetch(url);
        let json = await res.json();

        if (json.status !== 200){
            throw Error("error!");
        }
        console.log(json);
    }
    getList();
})