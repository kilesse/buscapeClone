//Nessa variavel é guardada as informações dos produtos
var list = [
{ name: "Smart TV",
  description: "Smart TV Sansung Série 4 32 polegadas LED Plana",
  descriptionPrice10x:"10x de R$ 134,11",
  descriptionPrice1:"ou R$ 1139,90 à vista",
  price: 1139.90,
  divided10xPrice: 134.11,
  img: "https://images.samsung.com/is/image/samsung/latin-en_UN32J4000AHXPA_001_Front_indigo-blue?$L1-Thumbnail$"
}, 
{ name: "Smartphone",
  description: "Smartphone Apple iPhone 7 128 GB",
  descPrice10x:"10x de R$ 366,56",
  descPrice:"ou R$ 3199,00 à vista",
  price: 3199.00,
  divided10xPrice: 366.56,
  img: "https://i0.wp.com/nanobits.tv.br/wp-content/uploads/2020/08/iphone-7-preto-600x600.jpg"
}
];

var total = 0;

let priceTv = document.getElementById("priceTv");
let priceCl = document.getElementById("priceCl");
let kart = document.getElementById("kart");
let productsInKart = document.getElementById("productsInKart");
let subtotal10x = document.getElementById("subtotal10x");
let subtotal = document.getElementById("totalAVista");
let btn = document.getElementById("btn");
let state = kart.dataset.aberto;

priceCl.innerHTML = list[0].price;
priceTv.innerHTML = list[1].price;


 btn.addEventListener("click", () => {
//esse botão é para abrir e fechar o carrinho de compras deixando quando aberto visivel(visible) e com posição relativa, 
// quando fechado escondido(hidden) e com posição absoluta.
if(state == "false"){
 kart.style.visibility = "visible"; 
 kart.style.position = "relative";
 state = "true";
}
else {
 kart.style.visibility = "hidden";
 kart.style.position = "absolute";
 state = "false";
}
})

function buyCl(){
//nessa parte atualiza o preço a vista e dividido.
 total += list[1].price;
 var total10x = total / 10
 subtotal10x.innerHTML = total10x.toFixed(2);
 subtotal.innerHTML = total.toFixed(2);

 //nessa parte adiciona a imagem em miniatura do celular com a classe "miniature" para poder ajustar o tamanho pelo css.
 let img = document.createElement('img');
 img.src = list[1].img;
 img.classList.add("miniatureCl");
 
 //aqui eu crio uma div para a descrição do produto.
 let divDesc = document.createElement('div');
 divDesc.classList.add('desc');
 let desc = document.createTextNode(list[1].description);
 divDesc.append(desc);


 //aqui crio outra div para o preço em 10 vezes do produto em string.
 let divPrice10x = document.createElement('div');
 divPrice10x.classList.add('descPrice10xCl');
 let price10x = document.createTextNode(list[1].descPrice10x);
 divPrice10x.append(price10x);

 //aqui crio outra div para o preço a vista do produto em string.
 let divPrice = document.createElement('div');
 divPrice.classList.add('descPrice');
 let price = document.createTextNode(list[1].descPrice);
 divPrice.append(price);

 //aqui crio uma div pra armazenar os preços e descrição.
 let pricDesc = document.createElement('div');
 pricDesc.classList.add('prices');
 pricDesc.appendChild(divDesc)
 pricDesc.appendChild(divPrice10x);
 pricDesc.appendChild(divPrice)

 //aqui crio uma div com a classe "miniContainer" e coloco nele a imagem, a descrição e o preço tanto em 10 vezes quanto a vista.
 let tag = document.createElement("div");
 tag.classList.add('miniContainer')
 tag.appendChild(img);
 tag.appendChild(pricDesc);

 //aqui coloco a div 'tag' dentro de outra div já criada no html.
 productsInKart.appendChild(tag);

};

function buyTv(){
 //nessa parte atualiza o preço a vista e dividido.
 total += list[0].price;
 var total10x = total / 10
 subtotal10x.innerHTML = total10x.toFixed(2);
 subtotal.innerHTML = total.toFixed(2);
 
 //nessa parte adiciona a imagem em miniatura da televisão com a classe "miniature" para poder ajustar o tamanho pelo css.
 let img = document.createElement('img');
 img.src = list[0].img;
 img.classList.add("miniatureTv");
   
 //aqui eu crio um nó para a descrição do produto
 let divDesc = document.createElement('div');
 divDesc.classList.add('desc');
 let desc = document.createTextNode(list[1].description);
 divDesc.append(desc);

 //aqui crio outra div para o preço em 10 vezes do produto em string.
 let divPrice10x = document.createElement('div');
 divPrice10x.classList.add('descPrice10xTv');
 let price10x = document.createTextNode(list[1].descPrice10x);
 divPrice10x.append(price10x);

 //aqui crio outra div para o preço a vista do produto em string.
 let divPrice = document.createElement('div');
 divPrice.classList.add('descPrice');
 let price = document.createTextNode(list[1].descPrice);
 divPrice.append(price);

 //aqui crio uma div pra armazenar os preços e descrição.
 let pricDesc = document.createElement('div');
 pricDesc.classList.add('prices');
 pricDesc.appendChild(divDesc)
 pricDesc.appendChild(divPrice10x);
 pricDesc.appendChild(divPrice)

 //aqui crio uma div com a classe "miniContainer" e coloco nele a imagem, a descrição e o preço tanto em 10 vezes quanto a vista.
 let tag = document.createElement("div");
 tag.classList.add("miniContainer");
 tag.appendChild(img);
 tag.appendChild(pricDesc);
 
 //aqui coloco a div 'tag' dentro de outra div já criada no html.
 productsInKart.appendChild(tag);
}
