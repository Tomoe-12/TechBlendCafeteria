let openShopping = document.querySelector('.shopping');
let cart = document.querySelector('.shopping img');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

cart.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let product1 = [
    {
        id: 4,
        name: 'Cold Brew',
        image: 'coldbrew.png',
        price: 2500
    },
    {
        id: 8,
        name: 'Iced Coffee',
        image: 'icedcoffee.png',
        price: 2500
    },
    {
        id: 9,
        name: 'Iced Tea',
        image: 'icedtea.png',
        price: 2000
    },
    {
        id: 10,
        name: 'Frappe',
        image: 'frappe.png',
        price: 3500
    },
    {
        id: 6,
        name: 'Green Tea',
        image: 'greentea.png',
        price: 1800
    },
    {
        id: 7,
        name: 'Herbal Tea',
        image: 'herbletea.png',
        price: 1500
    },
    {
        id: 5,
        name: 'Espresso',
        image: 'espresso.png',
        price: 2500
    },
    {
        id: 11,
        name: 'Hot Chocolate',
        image: 'hot choco.png',
        price: 2800
    },
    {
        id: 12,
        name: 'Iced Green Tea',
        image: 'icedgreentea.png',
        price: 1500
    },
    {
        id: 13,
        name: 'Mike Tea',
        image: 'milktea.png',
        price: 2000
    },
    {
        id: 14,
        name: 'Choco Milkshake',
        image: 'chocomilkshake.png',
        price: 4000
    },
    {
        id: 1,
        name: 'Americano',
        image: 'americano.png',
        price: 2500
    },
    {
        id: 2,
        name: 'Cappucino',
        image: 'cappuccino.png',
        price: 5000
    },
    {
        id: 3,
        name: 'Chai Tea',
        image: 'chaitea.png',
        price: 1500
    },
];
let listCards  = [];
function initApp(){
    product1.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(product1[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
                     }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * product1[key].price;
    }
    reloadCard();
}
