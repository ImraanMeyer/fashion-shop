// List of all products listed for sale : 

let shop = {
    products: [
        // product 1 == [0]
        {
            "name"      : "Slim Fit Shirt Cut Away Collar",
            "price"     : "R350",
            "img"       : "<img src='images/compressed/slim-fit-shirt-cut-away-collar-compressed.jpg'> <p class='new-item'>new</p>",
            "details"   : "The base for trendy suiting is confirmed with a smart shirt and with this key piece, you’ll always be on track to getting your                 outfit on-point. Go get ‘em!"
        },
        // product 2 == [1]
        {
            "name"      : "Assorted Knitted Jerseys",
            "price"     : "R400",
            "img"       : "<img src='images/grey-white-knitted-jerseys.jpg'>",
            "details"   : "Looking to give this new knitted pullover a new home? You can without breaking the bank. Own the look and keep warm every time                 the temperature drops."
        },
        // product 3 == [2]
        {
            "name"      : "Slim Fit Suit 100% Wool",
            "price"     : "R900",
            "img"       : "<img src='images/compressed/solid-colour-slim-fit-suit-in-wool-compressed.jpg'>",
            "details"   : "Stay stylish and stay looking clean with this 100% wool slim fit suit! Now available in black as well."
        },  
        // product 4 == [3]
        {
            "name"      : "Bird Eye Suit",
            "price"     : "R950 <stroke>R1900</stroke",
            "img"       : "<img src='images/formal-collection.jpg'> <section class='sale-overlay'>SALE</section>",
            "details"   : "Slim fit, textured chino-style suit. ",
        },
        // product 5 == [4]
        {
            "name"      : "Slim Fit Chino Trousers",
            "price"     : "R400",
            "img"       : "<img src='images/compressed/solid-colour-slim-fit-stretch-chino-trousers-compressed.jpg'>",
            "details"   : "Range of simple yet stylish slim fit chinos for an Urban-Inspired look.",
        },
        // product 6 == [5]
        {
            "name"      : "Leather Shoulder Bag",
            "price"     : "R600",
            "img"       : "<img src='images/compressed/accesory-bag-compressed.jpg'>",
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
        }
]};

let title   = document.querySelectorAll("#title");
    img     = document.querySelectorAll("#container-img");
    price   = document.querySelectorAll("#price");
    details = document.querySelectorAll("#details");


    
    title[0].innerHTML     = shop.products[0].name;
        img[0].innerHTML      = shop.products[0].img;
            price[0].innerHTML     = shop.products[0].price;
                details[0].innerHTML   = shop.products[0].details;
    
    title[1].innerHTML  = shop.products[1].name;
        img[1].innerHTML       = shop.products[1].img;
            price[1].innerHTML     = shop.products[1].price;
                details[1].innerHTML   = shop.products[1].details;

    title[2].innerHTML  = shop.products[2].name;
        img[2].innerHTML       = shop.products[2].img;
            price[2].innerHTML     = shop.products[2].price;
                details[2].innerHTML   = shop.products[2].details;

    title[3].innerHTML  = shop.products[3].name;
        img[3].innerHTML       = shop.products[3].img;
            price[3].innerHTML     = shop.products[3].price;
                details[3].innerHTML   = shop.products[3].details;

    title[4].innerHTML  = shop.products[4].name;
        img[4].innerHTML       = shop.products[4].img;
            price[4].innerHTML     = shop.products[4].price;
                details[4].innerHTML   = shop.products[4].details;
    

    title[5].innerHTML  = shop.products[5].name;
        img[5].innerHTML       = shop.products[5].img;
            price[5].innerHTML     = shop.products[5].price;
                details[5].innerHTML   = shop.products[5].details;


    title[6].innerHTML  = shop.products[6].name;
        img[6].innerHTML       = shop.products[6].img;
            price[6].innerHTML     = shop.products[6].price;
                details[6].innerHTML   = shop.products[6].details;


    title[7].innerHTML  = shop.products[7].name;
            img[7].innerHTML       = shop.products[7].img;
                price[7].innerHTML     = shop.products[7].price;
                    details[7].innerHTML   = shop.products[7].details;

                
    title[8].innerHTML  = shop.products[8].name;
            img[8].innerHTML       = shop.products[8].img;
                price[8].innerHTML     = shop.products[8].price;
                    details[8].innerHTML   = shop.products[8].details;
    
                    
    title[9].innerHTML  = shop.products[9].name;
        img[9].innerHTML       = shop.products[9].img;
            price[9].innerHTML     = shop.products[9].price;
                details[9].innerHTML   = shop.products[9].details;


    title[10].innerHTML  = shop.products[10].name;
        img[10].innerHTML       = shop.products[10].img;
            price[10].innerHTML     = shop.products[10].price;
                details[10].innerHTML   = shop.products[10].details;


    title[11].innerHTML  = shop.products[11].name;
            img[11].innerHTML       = shop.products[11].img;
                price[11].innerHTML     = shop.products[11].price;
                    details[11].innerHTML   = shop.products[11].details;