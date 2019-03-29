let products = [
    // product 1 == [0]
    {
        "name"      : "Slim Fit Shirt Cut Away Collar",
        "price"     : "R350",
        "img"       : "<img src='images/slim-fit-shirt-cut-away-collar-compressed.jpg'> <p class='new-item'>new</p>",
        "details"   : "The base for trendy suiting is confirmed with a smart shirt and with this key piece, you’ll always be on track to getting your                 outfit on-point. Go get ‘em!"
    },
    // product 2 == [1]
    {
        "name"      : "Assorted Knitted Jerseys",
        "price"     : "R400",
        "img"       : "<img src='images/grey-white-knitted-jerseys-compressed.jpg'>",
        "details"   : "Looking to give this new knitted pullover a new home? You can without breaking the bank. Own the look and keep warm every time                 the temperature drops."
    },
    // product 3 == [2]
    {
        "name"      : "Slim Fit Suit 100% Wool",
        "price"     : "R900",
        "img"       : "<img src='images/solid-colour-slim-fit-suit-in-wool-compressed.jpg'>",
        "details"   : "Stay stylish and stay looking clean with this 100% wool slim fit suit! Now available in black as well."
    },  
    // product 4 == [3]
    {
        "name"      : "Bird Eye Suit",
        "price"     : "R950 <stroke>R1900</stroke",
        "img"       : "<img src='images/formal-collection-compressed.jpg'> <section class='sale-overlay'>SALE</section>",
        "details"   : "Slim fit, textured chino-style suit. ",
    },
    // product 5 == [4]
    {
        "name"      : "Slim Fit Chino Trousers",
        "price"     : "R400",
        "img"       : "<img src='images/solid-colour-slim-fit-stretch-chino-trousers-compressed.jpg'>",
        "details"   : "Range of simple yet stylish slim fit chinos for an Urban-Inspired look.",
    },
    // product 6 == [5]
    {
        "name"      : "Leather Shoulder Bag",
        "price"     : "R600",
        "img"       : "<img src='images/accesory-bag.jpg'>",
        "details"   : "If you always in a rush easily sling on this convenient leather bag. The simply designed bag carries everything you will need                  in its one compartment keeping it safe with its zip closing. ",
    },
    // product 7 == [6]
    {
        "name"      : "Assorted Happy Socks",
        "price"     : "R200",
        "img"       : "<img src='images/happy-socks.jpg'>",
        "details"   : "Spice up your outfit! Happy socks adds tons of a flavour to your style that a lot of people would appreciate.",
    },
    // product 8 == [7]
    {
        "name"      : "Grey Check Jacket",
        "price"     : "R700",
        "img"       : "<img src='images/checkered-jacket.jpg'>",
        "details"   : "The rich wool material and half lining make it lightweight and breathable, helping you to layer it without feeling too warm.                   Contrast the grey with blue, brown or khaki chinos, and complete the pared-back look with a denim shirt.",
    },
    // product 9 == [8]
    {
        "name"      : "Black and White Texture Waistcoat",
        "price"     : "R460",
        "img"       : "<img src='images/texture-waist-coat.jpg'>",
        "details"   : "When an occasion calls for something a little bit special, turn to this waistcoat. It will dress up your outfit and keep you                   looking on-trend with its stylish texture and sharp tailored fit.",
    },
    // product 10 == [9]
    {
        "name"      : "Slim Fit Navy Technical Raincoat",
        "price"     : "R570",
        "img"       : "<img src='images/navy-raincoat.jpg'>",
        "details"   : "Protect yourself against the worst of the weather this winter with this raincoat. Made from a lightweight fabric that’s                        designed to repel water and with taped seams, it gives you the best chance of staying dry.",
    },
    // product 11 == [10]
    {
        "name"      : "Slim Fit Stone Cotton Raincoat",
        "price"     : "R700",
        "img"       : "<img src='images/stone-raincoat.jpg'>",
        "details"   : "The stone colour will go with suits, trousers and jumpers in any shade – it’s a very versatile coat.",
    },
    // product 12 == [11]
    {
        "name"      : "Denim Blue Wool Crew-Neck Jumper",
        "price"     : "R300",
        "img"       : "<img src='images/denim-crew-neck.jpg'>",
        "details"   : "With this blue denim crew-neck jumper to hand you’ll always have a fail-safe option when the temperature drops. ",
    },
]



let cart = [];


for(var i=0; i< products.length; i++) {

    let title   = document.querySelectorAll("#title");
        img     = document.querySelectorAll("#container-img");
        price   = document.querySelectorAll("#price");
        details = document.querySelectorAll("#details");
    
        title[i].innerHTML     = products[i].name;
        img[i].innerHTML      = products[i].img;
        price[i].innerHTML     = products[i].price;
        details[i].innerHTML   = products[i].details;
}




// ______ jquery 

// adds item to cart on click (addto btn)
$(".addto").click(function(event){
    event.preventDefault();
    let name = $(this).attr("data-name");
    let price = Number($(this).attr("data-price"));
    addItem(name, price, 1);
    countCart();
    displayCart();
})

// clears all function called
$("#clear").click(function(event){
    clearCart();
    displayCart();
})


// cart ui
function displayCart() {
    let cartArray = listCart();
    let output = "";
    for (let i in cartArray) {
        output += 
        // dispays and creates divs/sections for the cart
        "<section class='titles'>"+
             "<div class='name'>" + cartArray[i].name + "</div>" 
             +"<div class='count'>" + cartArray[i].count + "</div>"
             +"<div class='price'>" + cartArray[i].price + "</div>"+
        "</section>"
        +"<section class='qtyBtns'>"
              +" <button class='addQty' data-name='"+cartArray[i].name+"'> + </button>"
              +" <button class='subtractQty' data-name='"+cartArray[i].name+"'> - </button>"
        +"</section>"
        +" <button class='deleteBtn' data-name='"+cartArray[i].name+"'> REMOVE ITEM </button>";
    }
    
    $(".items-listed").html(output);
    $(".total").html(totalCart());
    
}

// Calling delete item function
$(".items-listed").on("click", ".deleteBtn", function(event){
    let name = $(this).attr("data-name");
    removeItemAll(name);
    displayCart();
});

// Calling subtract qty function
$(".items-listed").on("click", ".subtractQty", function(event){
    let name = $(this).attr("data-name");
    removeItemQty(name);
    displayCart();
});

// Calling add qty function
$(".items-listed").on("click", ".addQty", function(event){
    let name = $(this).attr("data-name");
    addItem(name, 0, 1)
    displayCart();
}); 






//*********________ shop functionality __________ **********//
 

// product prototype
Item = function(name, price, count ) {
    this.name       = name
    this.price      = price
    this.count      = count
}

// _____ add items to cart _______ //
function addItem(name, price, count ) {
    for (let i in cart) {
        // if item name is same, add the quantity 
        if (cart[i].name === name) {
           cart[i].count += count;
           return;
        }
    }
    var item = new Item(name, price , count)
    cart.push(item);
}
 

// ___ removes qty of item by 1 ___ //
function removeItemQty(name) {
    for (let i in cart) {
        if (cart[i].name === name) {
            cart[i].count --;
            //if statement added for 0 not to negative value
            if (cart[i].count === 0 ) {
                cart.splice(i, 1);
            }
            break;
        }
    }
}

// _____ remove an item from cart _____ //
function removeItemAll(name) {
    for (let i in cart) {
        if (cart[i].name === name) {
            cart.splice(i, 1);
            break;
        }
    }
}
// clears filled cart (replaces with empty array)
function clearCart() {
    cart = []
}


// quantity count
function countCart() {
    let totalCount = 0;
    for (let i in cart) {
        totalCount += cart[i].count;
    }
    return totalCount;
}

// total price 
function totalCart() {
    let totalCost = 0;
    for (let i in cart) {
        totalCost += cart[i].price * cart[i].count;
    }
    return totalCost;
}

// creating a copy for cart so no harm done to original concept
function listCart() {
    let cartCopy = [];
    for (let i in cart) {
        let item = cart[i];
        let itemCopy = {};

        for (let p in item) {
            itemCopy[p] = item[p];
        }
        cartCopy.push(itemCopy);
    }   
    return cartCopy;
};

let circleCount = document.querySelector('.circle-counter');
let counter     = 0;

$(document).ready(function() {
    $(".addto").click(function(){
        counter++;
    
        $('.circle-counter').html(counter);
    });
})
