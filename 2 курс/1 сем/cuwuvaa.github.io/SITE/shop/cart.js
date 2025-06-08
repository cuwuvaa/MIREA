function Accumulator(startingValue, startingSum) {
    this.value = startingValue; // Количество товаров
    this.sum = startingSum;     // Общая сумма

    this.read = function(price) {
        let number = +prompt('Введите количество товаров для добавления в корзину:', 1);
        if (isNaN(number) || number <= 0) {
            alert('Пожалуйста, введите корректное число.');
        } else {
            this.value += number;
            this.sum += price * number;
            updateCartDisplay();
        }
    };
}

const cart = new Accumulator(0, 0);

function updateCartDisplay() {
    const cartElement = document.getElementById('cart');
    cartElement.textContent = `Корзина (${cart.value} шт, ${cart.sum} ₽)`;
}

const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const price = +button.getAttribute('data-price');
        cart.read(price);
    });
});

updateCartDisplay();