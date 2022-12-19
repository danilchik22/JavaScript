// @ts-nocheck
const addToCartEl = document.querySelectorAll('.addToCart');
for (const el of addToCartEl) {
    el.addEventListener('click', () => {
        const parentAddToClick = el.parentNode.parentNode.parentNode;
        getNewUnit(parentAddToClick);
        changeFootCart();
        const basket = document.querySelector('.myCart');
        basket.style.display = "inline-block";
    })
}

const closeEl = document.querySelector('#close');
closeEl.addEventListener('click', () => {
    const basket = document.querySelector('.myCart');
    basket.style.display = "none";
})

function doMarkUpEl(elementName, elementPrice, elementTotal) {
    return `
    <tr>
    <td> ${elementName} </td>
    <td> 1 </td>
    <td> $${elementPrice} </td>
    <td> ${elementTotal} </td>
    </tr>
    `;
}

function getName(element) {
    const featuredNameEl = element.querySelector('.featuredName');
    return featuredNameEl.textContent.trim();
}

function getPrice(element) {
    const featuredPriceEl = element.querySelector('.featuredPrice');
    const textPrice = featuredPriceEl.textContent.trim().substring(1);
    textPrice.replace(/^./, "");
    const price = parseFloat(textPrice);
    return price;
}

function getNewUnit(element) {
    const cartEl = document.querySelector('.cart');
    const trEls = cartEl.querySelectorAll('tr');
    let footCart = "";
    let newTotal;
    for (const el of trEls) {
        if (el.classList.contains('footCart')) {
            footCart = el;
        }
        const tdEls = el.querySelectorAll('td');
        if (tdEls[0].textContent.trim() === getName(element)) {
            const newAmount = +tdEls[1].textContent + 1;
            tdEls[1].textContent = newAmount;
            newTotal = parseFloat(tdEls[3].textContent.substring(1)) 
            + getPrice(element);
            newTotal = +newTotal.toFixed(2);
            tdEls[3].textContent = '$' + newTotal;
            return;
        }
    }
    const insertHtml = doMarkUpEl(getName(element), getPrice(element), 
    getPrice(element));
    cartEl.insertAdjacentHTML('beforeend', insertHtml);
}

function changeFootCart() {
    const cartEl = document.querySelector(".cart");
    const tdEls = cartEl.querySelectorAll("tr");
    let isFooter = false;
    let footer;
    let total = 0;
    for (const el of tdEls) {
        if (el.classList.contains("footerCart")) {
            isFooter = true;
            footer = el;
        } else if (!el.classList.contains("headCart")) {
            total = total + 
                parseFloat(el.lastElementChild.textContent.substring(1)); 
        }
    }
    total = +total.toFixed(2);
    if (isFooter) {
        footer.lastElementChild.innerHTML = 
            `
            <b>Товаров в корзине на сумму:</b> $${total}
            `;
        cartEl.lastElementChild.after(footer);
    } else {
        const htmlFoot = 
        `
        <tr class="footerCart"> 
        <td> <a href=# id="goCart"> Перейти в корзину </a> </td>
        <td colspan="3"> <b>Товаров в корзине на сумму:</b> $${total}</td> 
        </tr>`;
        cartEl.insertAdjacentHTML('beforeend', htmlFoot);

    }

}


