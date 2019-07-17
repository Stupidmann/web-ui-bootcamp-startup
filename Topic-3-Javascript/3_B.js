let btn = document.querySelector("button");
let url = "https://api.github.com/search/repositories?q=javascript";
const divHtml = document.getElementById("divHtml");
//const ulHtml = document.getElementById("ulHtml");

btn.addEventListener("click", function() {
    async function API () {
        const baseUrl = url;
        const res = await fetch(baseUrl);
        const data = await res.json();

        return data.items.forEach(i => {
            //const title = document.createElement("li");
            const anchor = document.createElement("a");
            
            anchor.href = i.html_url;
            anchor.textContent = i.full_name;
            divHtml.appendChild(anchor);

            //ulHtml.appendChild(title);
            //anchor = document.getElementById(divHtml);
            //document.body.insertBefore(title, anchor);

            divHtml.appendChild(document.createElement("br"));
        })
    }
    API();
})