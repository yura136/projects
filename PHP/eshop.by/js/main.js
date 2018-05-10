var cart = {}; //корзина

function init() {
    // считываем файл goods.json
    $.getJSON("goods.json", goodsOut);
}

function goodsOut(data) {
    // вывод на страницу
    console.log(data);
    var out ='';
    for (var key in data) {
//        out += '<div class="cart">';
//        out += '<p class="name">' + data[key].name +'</p>';
//        out += '<img src="images/' + data[key].img +'" alt="">';
//        out += '<div class="cost">'  + data[key].cost + '</div>';
//        out += '<button class="add-to-cart">Купить</button>';
//        out += '</div>';
        //--------------es6
        out += '<div class="cart">';
        out += `<p class="name">${data[key].name}</p>`;
        out += `<img src="images/${data[key].img}" alt="">`;
        out += `<div class="cost">${data[key].cost}</div>`;
        out += `<button class="add-to-cart" data-id="${key}">Купить</button>`;
        out += '</div>';
    }
    $('.goods-out').html(out);
    $('.add-to-cart').on('click', addToCart);
}

function addToCart() {
    //добавляем товар в корзину
    var id = $(this).attr('data-id');
    //console.log(id);
    if (cart[id] == undefined) {
        cart[id] = 1;  // если в корзине нет товара - делаем равным 1
    } else {
        cart[id]++; // если такой товар есть увеличивае на 1
    }
    showMiniCart();
    saveCart();
}

function saveCart() {
    // сохранить корзину
    localStorage.setItem('cart', JSON.stringify(cart)); // корзину в строку
}

function showMiniCart() {
    // показывает мини корзину
    var out ='';
    for (var key in cart) {
        out += key + '---' + cart[key] + '<br>';
    }
    $('.mini-cart').html(out);
}

function loadCart() {
    
    // проверяю есть ли localStroge запись cart
    if (localStorage.getItem('cart')) {
        // если есть расшифровываем и записываем в переменную cart
        cart = JSON.parse(localStorage.getItem('cart'));
    }
    showMiniCart();
}

$(document).ready(function() {
     init();
     loadCart();
});