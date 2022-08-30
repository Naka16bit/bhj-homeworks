const cart = document.querySelector(".cart__products");
const products = document.querySelectorAll(".product");

products.forEach(product => {

    const minus = product.querySelector(".product__quantity-control_dec");
    const plus = product.querySelector(".product__quantity-control_inc");
    let quantity = parseInt(product.querySelector(".product__quantity-value").innerText);
    
    minus.addEventListener("click", () => {
        if (quantity > 1) quantity--;
        product.querySelector(".product__quantity-value").innerText = quantity;
    });

    plus.addEventListener("click", () => {
        quantity++;
        product.querySelector(".product__quantity-value").innerText = quantity;
    });

    const productAdd = product.querySelector(".product__add");
    
    productAdd.addEventListener("click", () => {
        const img = product.querySelector(".product__image");
        const cartProducts = Array.from(document.querySelectorAll(".cart__product"));
        const quantityToAdd = product.querySelector(".product__quantity-value");
        const cartProduct = cartProducts.find(cartProduct => cartProduct.dataset.id === product.dataset.id);
        
        if (cartProduct) {
            cartProduct.lastElementChild.innerText = parseInt(cartProduct.lastElementChild.innerText) + parseInt(quantityToAdd.innerText);
            quantity = 1;
            product.querySelector(".product__quantity-value").innerText = 1;
        } else {
            cart.innerHTML +=
            `<div class="cart__product" data-id="${product.getAttribute("data-id")}">
                <a href="#" class="cart__product-remove" onclick=
                    "this.closest('.cart__product').outerHTML = '';
                    if (cart.querySelector('.cart__product') === null) {
                        cart.closest('.cart').classList.add('cart_hidden');
                    }"
                >&times;</a>
                <img class="cart__product-image" src="${img.getAttribute("src")}"> 
                <div class="cart__product-count">${quantityToAdd.innerText}</div>
            </div>`;
            quantity = 1;
            product.querySelector(".product__quantity-value").innerText = 1;
            cart.closest(".cart").classList.remove("cart_hidden");
        }  
    });
});

