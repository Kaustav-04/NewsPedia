console.log("News API");

let xhr = new XMLHttpRequest();
xhr.open('GET','https://newsapi.org/v2/top-headlines?country=in&apiKey=40fbbf8e7c514feb9d3546ddb9c4f0b4&pageSize=100', true);

xhr.onload = function(){
    json = JSON.parse(this.responseText);
    Articles = json.articles;
    console.log(Articles)
    let main = document.getElementById("main");
    let newshtml = ""
    Array.from(Articles).forEach(element => {
        newshtml += `<div class="card m-3" style="width: 18rem;">
                        <img src="${element.urlToImage}" class="card-img-top" alt="No Image">
                        <div class="card-body">
                            <h5 class="card-title">${element.title}</h5>
                            <p class="card-text">${element.description}</p>
                        </div>
                        <div class="readMore">
                                <a href="${element.url}" target = "_blank" class="btn btn-primary">Read More</a>
                            </div>
                    </div>`
        
    });
    main.innerHTML = newshtml;
}
xhr.send();
setInterval(()=>{
    location.reload();
},(60*1000))
