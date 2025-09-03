let quote = document.querySelector(".quote");
let category = document.getElementById("category");
let author = document.querySelector(".author");
let getButton = document.querySelector(".get");

async function getQuote() {
    const res = await fetch("https://api.api-ninjas.com/v1/quotes", {
      method: "GET",
      headers: {
      "X-Api-Key": API_KEY // using from config.js

      }
    });
    const data = await res.json();
    console.log(data[0].author);
    quote.innerHTML= data[0].quote;
    category.innerHTML=`"${data[0].category}"`;
    author.innerHTML=data[0].author;
}
getButton.addEventListener("click",()=>{
  getQuote();
})
