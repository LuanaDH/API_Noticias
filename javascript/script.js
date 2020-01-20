// function soma(a+b){
//     return a+b
// }
//arrowFunction: forma de simplificar a escrita da função (=>)
// (a,b=>a+b)

let buttonClick = document.getElementById('btn')
let board = document.getElementById('board')

buttonClick.addEventListener('click', ()=>{
    //fetch, vai na url, e depois que pegar as informações me de a resposta

    //*MESMA FORMA DE ESCREVER, DE FORMA MAIS RESUMIDA*/
    // fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=ab80e0c0aa994bdc92fc31fe37d170d0").then((response)=>response.json()).then(json=>{
    //console.log(json)
   // })

    fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=ab80e0c0aa994bdc92fc31fe37d170d0").then((response)=>{
        return response.json()

    }).then(json=>{
        console.log(json.articles)
        mostrarNaTela(json.articles)
    })
})

let mostrarNaTela = listaNoticias =>{
    //for(let noticia of listaNoticias)
    listaNoticias.forEach(function(noticia, posicao){
        //para usar template string, colocar `` no lugar da "". ONde é dinamico eu uso template string
        //ex: let saudacao = `Olá ${nome}`

        let card= `<div id = "board" class="card d-flex ml-5" style="width: 18rem;">
        <img src="${noticia.urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${noticia.title}</h5>
            <p class="card-text">${noticia.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>    
    </div>`

    board.innerHTML = board.innerHTML + card
    
    })
}

