export const calcCartPriceAndDelivery = () => {
    const cardItems = document.querySelectorAll('.cart-item');
    const totalPrice = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');

    let priceTotal = 0;

    cardItems.forEach((item) => {
        const amountElement = item.querySelector('[data-counter]');
        const priceElement = item.querySelector('.price__currency');
        const currentPrice = parseInt(amountElement.innerText) * parseInt(priceElement.innerText);
        priceTotal += currentPrice;
    })

    totalPrice.innerText = priceTotal;

    if (priceTotal > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none')
    }
    
    if (priceTotal >= 600) {
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно'
    } else {
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽';
    }
}