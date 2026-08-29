/* =====================================================
   EXPERIMENT 9
   PRODUCT SHOPPING CART AND BILLING SYSTEM
===================================================== */


/* ================= CART ARRAY ================= */

/*
   ARRAY OF OBJECTS
*/

let cart = [

    {
        id: 1,
        name: "Wireless Mouse",
        price: 599,
        quantity: 1
    },

    {
        id: 2,
        name: "USB Keyboard",
        price: 899,
        quantity: 1
    }

];


/* ================= VARIABLES ================= */

const productName =
    document.getElementById("productName");

const productPrice =
    document.getElementById("productPrice");

const productQuantity =
    document.getElementById("productQuantity");

const addProductButton =
    document.getElementById("addProductButton");

const cartBody =
    document.getElementById("cartBody");

const cartCount =
    document.getElementById("cartCount");

const emptyCart =
    document.getElementById("emptyCart");

const subtotalElement =
    document.getElementById("subtotal");

const discountElement =
    document.getElementById("discount");

const taxElement =
    document.getElementById("tax");

const grandTotalElement =
    document.getElementById("grandTotal");

const checkoutButton =
    document.getElementById("checkoutButton");

const billMessage =
    document.getElementById("billMessage");


/* ================= DISPLAY CART ================= */

function displayCart() {

    cartBody.innerHTML = "";


    /* CHECK EMPTY CART */

    if (cart.length === 0) {

        emptyCart.style.display = "block";

    }

    else {

        emptyCart.style.display = "none";

    }


    /* LOOP THROUGH ARRAY */

    cart.forEach(
        function(product) {


            /* CREATE TABLE ROW */

            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td class="product-name">
                    ${product.name}
                </td>

                <td class="price">
                    ₹${product.price.toFixed(2)}
                </td>

                <td>

                    <div class="quantity-control">

                        <button
                            onclick="decreaseQuantity(${product.id})">

                            −

                        </button>

                        <span>
                            ${product.quantity}
                        </span>

                        <button
                            onclick="increaseQuantity(${product.id})">

                            +

                        </button>

                    </div>

                </td>

                <td class="price">

                    ₹${(
                        product.price *
                        product.quantity
                    ).toFixed(2)}

                </td>

                <td>

                    <button
                        class="remove-btn"
                        onclick="removeProduct(${product.id})">

                        Remove

                    </button>

                </td>

            `;


            cartBody.appendChild(row);

        }
    );


    updateCartCount();

    calculateBill();

}


/* ================= ADD PRODUCT ================= */

function addProduct() {


    const name =
        productName.value.trim();


    const price =
        parseFloat(productPrice.value);


    const quantity =
        parseInt(productQuantity.value);


    /* VALIDATION */

    if (
        name === "" ||
        isNaN(price) ||
        price <= 0 ||
        isNaN(quantity) ||
        quantity <= 0
    ) {

        alert(
            "Please enter valid product details."
        );

        return;

    }


    /* CHECK EXISTING PRODUCT */

    const existingProduct =
        cart.find(
            product =>
                product.name.toLowerCase() ===
                name.toLowerCase()
        );


    if (existingProduct) {


        /* ADD QUANTITY */

        existingProduct.quantity += quantity;

    }

    else {


        /* CREATE OBJECT */

        const newProduct = {

            id: Date.now(),

            name: name,

            price: price,

            quantity: quantity

        };


        /* ADD TO ARRAY */

        cart.push(newProduct);

    }


    /* CLEAR INPUT */

    productName.value = "";

    productPrice.value = "";

    productQuantity.value = 1;


    displayCart();

}


/* ================= INCREASE QUANTITY ================= */

function increaseQuantity(id) {


    const product =
        cart.find(
            product =>
                product.id === id
        );


    if (product) {

        product.quantity++;

    }


    displayCart();

}


/* ================= DECREASE QUANTITY ================= */

function decreaseQuantity(id) {


    const product =
        cart.find(
            product =>
                product.id === id
        );


    if (
        product &&
        product.quantity > 1
    ) {

        product.quantity--;

    }


    displayCart();

}


/* ================= REMOVE PRODUCT ================= */

function removeProduct(id) {


    cart =
        cart.filter(
            product =>
                product.id !== id
        );


    displayCart();

}


/* ================= CART COUNT ================= */

function updateCartCount() {


    let totalItems = 0;


    cart.forEach(
        function(product) {

            totalItems +=
                product.quantity;

        }
    );


    cartCount.textContent =
        totalItems;

}


/* ================= BILL CALCULATION ================= */

function calculateBill() {


    let subtotal = 0;


    /* CALCULATE SUBTOTAL */

    cart.forEach(
        function(product) {

            subtotal +=
                product.price *
                product.quantity;

        }
    );


    /* DISCOUNT = 10% */

    const discount =
        subtotal * 0.10;


    /* TAX = 5% AFTER DISCOUNT */

    const taxableAmount =
        subtotal - discount;


    const tax =
        taxableAmount * 0.05;


    /* GRAND TOTAL */

    const grandTotal =
        taxableAmount + tax;


    /* UPDATE DOM */

    subtotalElement.textContent =
        "₹" + subtotal.toFixed(2);


    discountElement.textContent =
        "- ₹" + discount.toFixed(2);


    taxElement.textContent =
        "₹" + tax.toFixed(2);


    grandTotalElement.textContent =
        "₹" + grandTotal.toFixed(2);

}


/* ================= GENERATE BILL ================= */

function generateBill() {


    if (cart.length === 0) {

        alert(
            "Your cart is empty. Please add products."
        );

        return;

    }


    /* CALCULATE TOTAL */

    let subtotal = 0;


    cart.forEach(
        function(product) {

            subtotal +=
                product.price *
                product.quantity;

        }
    );


    const discount =
        subtotal * 0.10;


    const tax =
        (subtotal - discount) * 0.05;


    const total =
        subtotal -
        discount +
        tax;


    /* SHOW MESSAGE */

    billMessage.textContent =
        "✓ Bill generated successfully! Total: ₹" +
        total.toFixed(2);

}


/* ================= BUTTON EVENTS ================= */

addProductButton.addEventListener(
    "click",
    addProduct
);


checkoutButton.addEventListener(
    "click",
    generateBill
);


/* ================= ENTER KEY ================= */

productName.addEventListener(
    "keypress",
    function(event) {

        if (event.key === "Enter") {

            addProduct();

        }

    }
);


/* ================= INITIAL DISPLAY ================= */

displayCart();