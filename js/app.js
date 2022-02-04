'use strict';
const prices = {
    products: 0.5,
    orders: 0.25,
    package: {
        basic: 0,
        professional: 25,
        premium: 60
    },
    accounting: 35,
    terminal: 5
};
// Variables section
const productQuantity = document.querySelector('.products');
const ordersInMonth = document.querySelector('.orders');
const choosingPackage = document.querySelector('.package');
const calcSummary = document.querySelector('.calc__summary');
const totalPrice = document.querySelector('#total-price');
const totalPriceSpan = totalPrice.querySelector('.total__price');

const liProduct = document.querySelector('.li-product');
const liOrders = document.querySelector('.li-orders');
const productItemCalc = liProduct.querySelector('.item__calc');
const productItemPrice = liProduct.querySelector('.item__price');
const orderItemCalc = liOrders.querySelector('.item__calc');
const orderItemPrice = liOrders.querySelector('.item__price');

//Function Section
function showAndHideElements(element, product, total){
element.addEventListener('change', function (event) {
    {
        if (event) {
            product.style.display = 'flex';
            total.style.display = 'flex';
        } else {
            product.style.display = 'none';
        }
    }
    const finalValue = productQuantity.value * prices.products
    productItemCalc.textContent = `${productQuantity.value} * ${prices.products} $ `;
    productItemPrice.textContent = `${finalValue} $`;
    
    const finalOrders = ordersInMonth.value * prices.orders
    orderItemCalc.textContent= `${ordersInMonth.value} * ${prices.orders} $ `;
    orderItemPrice.textContent = ` ${finalOrders} $`;

    const totalPrice = finalValue + finalOrders;
    totalPriceSpan.textContent = `${totalPrice} $`;
    
})
}
showAndHideElements(productQuantity, liProduct, totalPrice);
showAndHideElements(ordersInMonth, liOrders, totalPrice);



