export const toggleCartStatus = () => {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmpty = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form')
    const children = cartWrapper.children.length;
    console.log(children);
    if (children > 0) {
        console.log('full');
        cartEmpty.classList.add('none');
        orderForm.classList.remove('none');
    } else {
        cartEmpty.classList.remove('none');
        orderForm.classList.add('none');
    }
}