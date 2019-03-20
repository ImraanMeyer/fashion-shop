'use strict'

// let items = document.getElementsByClassName('item');
// console.log(items);

let cart = [
    // {name: name, price : price,},
    // {name: name, price : price,},
    // {name: name, price : price,},
    // {name: name, price : price,},
    // {name: name, price : price,},
    // {name: name, price : price,},
];

function addCart(name, price) {
    
    // create item
    let item = {
        name: name,
        price: price,
    }
};

//check if array empty
if (cart.length != 0) {
    //search an item in an array
    let check = false;
    for (let cartItem in cart) {
        if (cart [cartItem].name === item.name) {
            check = true;
        }
    }

    // if check returns false, item was not found in the array.
    if (!check) { cart.push(item)}

    //else push to array
} else {
    cart.push(item);
}

// get cart div
let div = document.getElementById('cart');
// clear cart
div.innerHTML = "";

//show cart with updated array
for (let value in cart) {
    // create a <li> node
    let node = document.createElement("LI");
    // create a text node
    let textnode = document.createTextNode(cart[value].name);

    // Append the text to <li>
    node.appendChild(textnode);

    // Append <li> to the <ul> with id="myList"
    div.appendChild(node);
}


// S T I L L  T O   D O
// remove an item from cart
// write a function that calculates the total of the cart
// add a quantity to cart items
// be able to increase and decrease the quantity
// REMEMBER the cart must update as the quantity changes