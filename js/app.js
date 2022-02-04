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

const liProduct = document.querySelector('.li-product');
const liOrders = document.querySelector('.li-orders');
const productItemCalc = liProduct.querySelector('.item__calc');
const orderItemCalc = liOrders.querySelector('.item__calc');

//Function Section
function showAndHideElements(element, product){
element.addEventListener('change', function (event) {
    {
        if (event) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    }
    const finalValue = productQuantity.value * prices.products
    productItemCalc.textContent= `${productQuantity.value} * ${prices.products} $ = ${finalValue}`;

    const finalOrders = ordersInMonth.value * prices.products
    orderItemCalc.textContent= `${ordersInMonth.value} * ${prices.orders} $ = ${finalOrders}`;
    
    
})
}
showAndHideElements(productQuantity, liProduct);
showAndHideElements(ordersInMonth, liOrders);



