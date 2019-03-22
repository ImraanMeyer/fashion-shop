function Product(img, title, price, details) {
    this.img = img;
    this.title = title;
    this.price = price;
    this.details = details;
}

// first product
let bag = new Product("accesory-bag.jpg" , "Leather Shoulder Bag", "R600", "If you always in a rush easily sling on this convenient leather bag. The simply designed bag carries everything you will need in its one compartment keeping it safe with its zip closing. ");

// second product
let jersey = new Product("grey-white-knitted-jerseys.jpg", "Assorted Knitted Jerseys", "R400", "Looking to give this New Wave knitted pullover a new home? You can without breaking the bank. Own the look and keep warm every time the temperature drops.")


let title   = document.getElementById("title");
    img     = document.getElementById("img-container");
    price   = document.getElementById("price");
    details = document.getElementById("details"); 

// first product
title.innerHTML = bag.title;
img.innerHTML = '<img src="images/' + bag.img + '">'; 
price.innerHTML = bag.price;
details.innerHTML = bag.details;

// second product
title[1].innerHTML = jersey.title;
img[1].innerHTML = '<img src="images/' + jersey.img + '">'; 
price[1].innerHTML = jersey.price;
details[1].innerHTML = jersey.details;

    