const productContainer = document.querySelector('#product-container');

const getProduct = async () => {
    try {
        const res = await fetch('product.json');
        const data = await res.json();
        console.log(data);
        renderProduct(data)
    } catch (error) {
        alert(error);
    }

}

const renderProduct = (productArray) => {
    productArray.forEach((item) => {
        const productHtml = `
    <div class="col-md-6">
						<div class="card mb-4" data-id="${item.id}">
							<img class="product-img" src="img/roll/${item.imageUrl}" alt="${item.title}">
							<div class="card-body text-center">
								<h4 class="item-title">${item.title}</h4>
								<p><small data-items-in-box class="text-muted"${item.itemsInBox}</small></p>

								<div class="details-wrapper">
									<div class="items counter-wrapper">
										<button class="items__control" type="button" data-action="minus">-</button>
										<span class="items__current" data-counter>1</span>
										<button class="items__control" type="button" data-action="plus">+</button>
									</div>

									<div class="price">
										<div class="price__weight">${item.weight}</div>
										<div class="price__currency">${item.price} ₽</div>
									</div>
								</div>

								<button data-cart type="button" class="btn btn-block btn-outline-warning">+ в
									корзину</button>

							</div>
						</div>
					</div>`
        productContainer.insertAdjacentHTML('beforeend', productHtml)
    });
}
document.addEventListener('DOMContentLoaded', getProduct)