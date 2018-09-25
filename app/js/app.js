// var elementos = document.querySelectorAll('[data-valor]');
// let pantalla= document.querySelector(".calculadora__header");

// elementos.forEach(function(el, i){
//     el.addEventListener('click', function(e){
//       obterDataNumero = el.dataset.valor;
//       console.log(obterDataNumero);
//       pantalla.innerHTML += obterDataNumero;
//     });
// });





const boton = document.querySelectorAll(".btn");
console.log(boton);
let cache = [];
let valor;

for (item of boton){
  item.addEventListener("click", function(){
    if(this.dataset.operacion === "igual"){
      // cache.reverse()
      valor = cache.join("");
      cache = [];
      console.log(valor);
      console.log(cache);
    }else{
      cache.push(this.dataset.valor);
      console.log(cache)
    }
  });
}