let btn = document.querySelector("button");
let url = "https://api.github.com/search/repositories?q=javascript";

btn.addEventListener("click", function() {
    async function API () {
        const baseUrl = url;
        const res = await fetch(baseUrl);
        const data = await res.json();
        return data; 
    }
    API().then(console.log);
})