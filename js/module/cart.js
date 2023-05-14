import { calcCartPriceAndDelivery } from "./calcCartPrice.js";
import { toggleCartStatus } from "./toggleCartStatus.js";

const cartWrapper = document.querySelector('.cart-wrapper');

document.addEventListener('click', (event) => {

    const target = event.target;

    if (target.hasAttribute('data-cart')) {
        const card = target.closest('.card');

        const productInfo = {
            id: card.dataset.id,
            imageSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemIbBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter').innerText,
        }
        console.log(productInfo);

        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"] `)
        if (itemInCart) {
            const counerElement = itemInCart.querySelector('[data-counter]');
            counerElement.innerText = Number(counerElement.innerText) + Number(productInfo.counter)
        } else {
            const cartItemHtml = `<div class="cart-item" data-id="${productInfo.id}">
            <div class="cart-item__top">
                <div class="cart-item__img">
                    <img src="${productInfo.imageSrc}" alt="${productInfo.title}">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${productInfo.title}</div>
                    <div class="cart-item__weight">${productInfo.itemIbBox} /${productInfo.weight}</div>
    
                    <!-- cart-item__details -->
                    <div class="cart-item__details">
    
                        <div class="items items--small counter-wrapper">
                            <button class="items__control" type="button"
                                data-action="minus">-</button>
                            <span class="items__current" data-counter>${productInfo.counter}</span>
                            <button class="items__control" type="button"
                                data-action="plus">+</button>
                        </div>
    
                        <div class="price">
                            <div class="price__currency">${productInfo.price}</div>
                        </div>
    
                    </div>
                    <!-- // cart-item__details -->
    
                </div>
            </div>
        </div>`;
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHtml)
        }

        card.querySelector('[data-counter]').innerText = '1';
        toggleCartStatus();
        calcCartPriceAndDelivery();
    }
})