import { calcCartPriceAndDelivery } from "./calcCartPrice.js";
import { toggleCartStatus } from "./toggleCartStatus.js";

document.addEventListener('click', (event) => {
    let counter;
    const target = event.target;

    if (target.dataset.action === 'plus' || target.dataset.action === 'minus') {
        const counterWrapper = target.closest('.counter-wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
        console.log(counter);

    }

    if (target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    if (target.dataset.action === 'minus') {

        if (Number(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        } else if (target.closest('.cart-wrapper') && Number(counter.innerText) === 1) {
            console.log('in cart!!!!!!!');
            target.closest('.cart-item').remove();
            toggleCartStatus();
            calcCartPriceAndDelivery();
        }
    }

    if (target.hasAttribute('data-action') && target.closest('.cart-wrapper')) {
        calcCartPriceAndDelivery();
    }

    if (target.hasAttribute('[data-action]')&& target.closest('.cart-wrapper')) {
        calcCartPriceAndDelivery();
    }

})
