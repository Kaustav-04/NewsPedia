console.log("News API");

let apikey = "40fbbf8e7c514feb9d3546ddb9c4f0b4";
let xhr = new XMLHttpRequest();


function country(countryValue,typeValue = "All"){
    xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=${countryValue}&apiKey=${apikey}&pageSize=100`, true);
    xhr.send();
}
function run(){
    let countryValue = document.getElementById("Country").value;
    let typeValue = document.getElementById("Type").value;
    if(typeValue == "All"){
        country(countryValue);
    }
    else{
        xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=${countryValue}&apiKey=${apikey}&category=${typeValue}&pageSize=100`, true);
    }
    xhr.send();
}
country("in");


xhr.onload = function(){
    json = JSON.parse(this.responseText);
    Articles = json.articles;
    console.log(json)
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

let countryOptions = ["ae|UAE","ar|Argentina","at|Austria","au|Australia","be|Belgium","bg|Bulgaria","br|Brazil","ca|Canada","ch|Switzerland","cn|China","co|Colombia","cu|Cuba","cz|Czechia","de|Germany","eg|Egypt","fr|France","gb|UK","gr|Greece","hk|HongKong","hu|Hungary","id|Indonesia","ie|Ireland","il|Isreal","in|India","it|Italy","jp|Japan","kr|South Korea","lt|Lithuania","lv|Latvia","ma|Morocco","mx|Mexico","my|Malaysia","ng|Nigeria","nl|Netherlands","no|Norway","nz|New Zealand","ph|Philippines","pl|Poland","pt|Portugal","ro|Romania","rs|Serbia","ru|Russia","sa|Saudi Arabia","se|Sweden","sg|Singapore","si|Slovenis","sk|Slovakia","th|Thailand","tr|Turkey","tw|Taiwan","ua|Ukraine","us|USA","ve|Venexuela","za|South Africa"];

let s1 = document.getElementById("Country");

for(let i=0; i<countryOptions.length;i++){
    let option = document.createElement("option")
    option.setAttribute("value",`${countryOptions[i].split("|")[0]}`)
    option.innerText = `${countryOptions[i].split("|")[1]}`
    s1.append(option);
}

let s2 = document.getElementById("Type");

let types = ["All","business","entertainment","general","health","science","sports","technology"];

for(let i=0; i<types.length;i++){
    let option = document.createElement("option")
    option.setAttribute("value",`${types[i]}`)
    option.innerText = `${types[i]}`
    s2.append(option);
}

// setInterval(()=>{
//     location.reload();
// },(60*1000))
