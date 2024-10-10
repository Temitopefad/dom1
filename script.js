const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// const hearts = document.querySelectorAll('.heart');

const hearts = document.querySelectorAll('.heart');

hearts.forEach(heart => {
    heart.addEventListener('click', function () {
        // Toggle between liked/unliked classes
        const icon = this.querySelector('i');
        icon.classList.toggle('ri-heart-add-line'); // emptyheart
       icon.classList.toggle('ri-heart-3-fill'); // filled heart
    });
});


var cart = [];
var categories = [
    { image: "/shopping1.webp", title: "Product 1", price: 99 },
    { image: "/shopping2.avif", title: "Product 2", price: 45 },
    { image: "/shopping3.webp", title: "Product 3", price: 43 },
    { image: "/shopping4.jpg",  title: "product 4", price: 83 },
    { image: "/shopping5.jpg",  title: "product 5", price: 52 },
    { image: "/shopping6.jpg",  title: "product 6", price: 40 },
    { image: "/shopping7.jpg",  title: "product 7", price: 43 },
    { image: "/shopping8.jpg",  title: "product 8", price: 43 },
    { image: "/shoppimg9.jpg",  title: "product 9", price: 43 },
];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
    updateTotal();  // Update total when item is added to cart
}
function delElement(a) {
    cart.splice(a, 1);
    displaycart();

    
}

function displaycart() {
    let j = 0;
    document.getElementById("count").innerHTML=cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
    } else {
        document.getElementById('cartItem').innerHTML = cart.map((items) => {

            var { image, title, price } = items;
            return `
            <div class="cart-item">
                <div class="row-img">
                    <img class="rowimg" src="${image}">
                </div>
                <p style="font-size:12px;">${title}</p>
                <h2 style="font-size:15px;">$${price}.00</h2>
                <i class="ri-delete-bin-5-line" onclick="delElement(${j++})"></i>
            </div>`;
        }).join('');
    }
} 


function delElement(index) {
    cart.splice(index, 1);  // Remove the item from cart
    displaycart();  // Re-display the cart
    updateTotal();  // Update the cart total
}

function updateTotal() {
    let total = cart.reduce((acc, item) => acc + item.price, 0);
    document.getElementById('total').innerHTML = `$${total}.00`;
}
