const products = [
    {
        id: 1,
        name: 'AMD Ryzen 5 7500F OEM',
        specs: '6 ядер, 12 потоков, частота до 5.2 ГГц',
        price: 15000,
        image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/468445509cd3eea209514f68179db807/e6293f21cc6d64c505e37405fa55d329827db7f8cd863e254841198e037f2386.jpg.webp'
    },
    {
        id: 2,
        name: 'AMD Ryzen 9 5950X',
        specs: '16 ядер, 32 потока, частота до 4.9 ГГц',
        price: 40000,
        image: 'https://c.dns-shop.ru/thumb/st1/fit/320/250/01842e1f765ea3ffc6259dec1117e90f/488d5a9b45ddbeb5eafce0564bef42074b75f87be95b9299120bd881bf6dba64.jpg'
    },
    {
        id: 3,
        name: 'Intel Core i9-11900K',
        specs: '8 ядер, 16 потоков, частота до 5.3 ГГц',
        price: 30000,
        image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/d1317394c58b0355416a7086e1d9813d/58d92d84c46caaa7631e037da06f9f812ddb964a6322b8b7de59b4c61e13d755.jpg.webp'
    },
    {
        id: 4,
        name: 'Intel Core i7-11700K',
        specs: '8 ядер, 16 потоков, частота до 5.0 ГГц',
        price: 25000,
        image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/d1155f50461b48185b9dbd0f8586532a/65b1c192af1b765e327d8b0a115d7f00bfb225a4ef1f85a9e08d969d281094fa.jpg.webp'
    },
    {
        id: 5,
        name: 'AMD Ryzen 7 5800X',
        specs: '8 ядер, 16 потоков, частота до 4.7 ГГц',
        price: 27000,
        image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/ab410bbe857b59eb1a65f6d93e499e22/b14b3e25d62773d234b3cbc4a6d8511774d2594be5ea96871b8821ef46148b8b.jpg.webp'
    },
    {
        id: 6,
        name: 'AMD Ryzen 9 5900X',
        specs: '12 ядер, 24 потока, частота до 4.8 ГГц',
        price: 35000,
        image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/174fe21629002c0d9a39ba4753ee1c8b/d6aadf422b1cb3e2042e0462983b9cbca53853dc8b3388b01d130473c1163f76.jpg.webp'
    },
    {
        id: 7,
        name: 'Intel Core i5-11600K',
        specs: '6 ядер, 12 потоков, частота до 4.9 ГГц',
        price: 18000,
        image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/50a9b8986b47621d695fe9beda782729/e8b47ad29343f808b5d381a74805eade1252596666618bc262e49aab43d24861.jpg.webp'
    },
    {
        id: 8,
        name: 'Intel Core i3-10100',
        specs: '4 ядра, 8 потоков, частота до 4.3 ГГц',
        price: 10000,
        image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/d64e39e88b40c6b4318282f6d2d9c99c/3c4df9fde9351af07709810e671714c29efdef66675cad405d47ecfcddfcfe6f.jpg.webp'
    },
    {
        id: 9,
        name: 'AMD Ryzen 5 3600',
        specs: '6 ядер, 12 потоков, частота до 4.2 ГГц',
        price: 12000,
        image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/ddc09e46856b2fa856cb32bc8f52099c/8100e0fe8ed7ff452a5b3d809e7c7d9ed155925a487471809cc45e713744bed9.jpg.webp'
    },
    {
        id: 10,
        name: 'AMD Ryzen 7 3700X',
        specs: '8 ядер, 16 потоков, частота до 4.4 ГГц',
        price: 20000,
        image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/a82971c60b48db822892b0afabf3738a/d18a3d7014f0c3290bcee6491c444640e8d6456022a06d246e7c9b52864c2ca6.jpg.webp'
    },
    {
        id: 11,
        name: 'Intel Core i5-10400F',
        specs: '6 ядер, 12 потоков, частота до 4.3 ГГц',
        price: 15000,
        image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/052d73944ab292aa839a7dd62f48d7ca/98bc683e3b25bfe064c5e4a03866dd5b914146452388985a19ce869fd95f845d.jpg.webp'
    },
    {
        id: 12,
        name: 'AMD Ryzen Threadripper 3990X',
        specs: '64 ядра, 128 потоков, частота до 4.3 ГГц',
        price: 300000,
        image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/6529d2454d78e49c8d8a2be99f86fcc2/901938bc83d45886e9ae2b8c1ec2a0e22af06c4bbdc8cd5a3e4d1939ecaa57b5.jpg.webp'
    },
    {
        id: 13,
        name: 'Intel Core i9-10900K',
        specs: '10 ядер, 20 потоков, частота до 5.3 ГГц',
        price: 45000,
        image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/100d3dff1f9f32a42f3858eaab053415/c98fe7d01c8e0456b3546de0bb68536f796ad47c9142c787ac3eec559f6e8467.jpg.webp'
    },
    {
        id: 14,
        name: 'AMD Ryzen 7 5700G',
        specs: '8 ядер, 16 потоков, частота до 4.6 ГГц',
        price: 22000,
        image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/38d61e13484c65d0b4f9595bccc71d8b/c6d4c38dfedf8d26079a5fdb86ac142b90fc48f2a666d2de8d85a0add85f246c.jpg.webp'
    },
    {
        id: 15,
        name: 'Intel Core i7-10700K',
        specs: '8 ядер, 16 потоков, частота до 5.1 ГГц',
        price: 23000,
        image: 'https://c.dns-shop.ru/thumb/st1/fit/500/500/a8415976695dc360eae46c34f67cdfc9/50894bf2d7f09fffe5986451bb914db9f045c2dd5d5889936490d7d48a541fdd.jpg.webp'
    },
    {
        id: 16,
        name: 'AMD Ryzen 5 5600X',
        specs: '6 ядер, 12 потоков, частота до 4.6 ГГц',
        price: 17000,
        image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/32635144b0b201b030bc36ddf19d8616/a60d568636c393c611792fb99f68dd97fb6fe3de90e8bd6f085c7c321e9e32b0.jpg.webp'
    },
    {
        id: 17,
        name: 'Intel Core i9-12900K',
        specs: '16 ядер, 24 потока, частота до 5.2 ГГц',
        price: 43000,
        image: 'https://c.dns-shop.ru/thumb/st4/fit/500/500/3ccd840128f007d28ca56d4e06f51fdf/00bbf93450aecb615327f02be1c617b85a13ef41aecaa6c99c7a524583b2df8b.jpg.webp'
    },
];

// Корзина
let cartItems = [];

// Избранные товары
let favoriteItems = [];

// Функция для рендеринга каталога
function renderCatalog(productsToRender) {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = '';

    productsToRender.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('catalog-item');
        
        // Проверяем, является ли товар избранным
        const isFavorite = favoriteItems.includes(product.id);

        productElement.innerHTML = `
            <div class="item-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="item-details">
                <h3 class="item-title">${product.name}</h3>
                <p class="item-specs">${product.specs}</p>
                <p class="item-price">Цена: ${product.price.toLocaleString()} ₽</p>
            </div>
            <div class="item-actions" data-product-id="${product.id}">
                <button class="favorite-button ${isFavorite ? 'active' : ''}">❤</button>
                ${isInCart(product.id) ? renderQuantityControls(product.id) : '<button class="add-to-cart-button">Добавить в корзину</button>'}
            </div>
        `;

        catalog.appendChild(productElement);
    });

    // Добавляем обработчики событий для кнопок "Добавить в корзину"
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.item-actions');
            const productId = parseInt(productElement.getAttribute('data-product-id'));
            addToCart(productId);
            renderCatalog(productsToRender); // Обновляем каталог
        });
    });

    // Добавляем обработчики для контролов количества
    const quantityControlsElements = document.querySelectorAll('.quantity-controls');

    quantityControlsElements.forEach(control => {
        const productId = parseInt(control.parentElement.getAttribute('data-product-id'));
        setupQuantityControls(control, productId);
    });

    // Добавляем обработчики событий для кнопок "Избранное"
    const favoriteButtons = document.querySelectorAll('.favorite-button');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.item-actions');
            const productId = parseInt(productElement.getAttribute('data-product-id'));
            toggleFavorite(productId);
            renderCatalog(productsToRender); // Обновляем каталог
            renderFavorites(); // Обновляем избранное
        });
    });
}

// Функция для проверки, есть ли товар в корзине
function isInCart(productId) {
    return cartItems.some(item => item.id === productId);
}

// Функция для отрисовки контролов количества
function renderQuantityControls(productId) {
    const cartItem = cartItems.find(item => item.id === productId);
    return `
        <div class="quantity-controls">
            <button class="decrease-quantity">-</button>
            <span class="quantity">${cartItem.quantity}</span>
            <button class="increase-quantity">+</button>
        </div>
    `;
}

// Функция для установки обработчиков на контролы количества
function setupQuantityControls(quantityControlsElement, productId) {
    const decreaseButton = quantityControlsElement.querySelector('.decrease-quantity');
    const increaseButton = quantityControlsElement.querySelector('.increase-quantity');
    const quantityDisplay = quantityControlsElement.querySelector('.quantity');

    decreaseButton.addEventListener('click', () => {
        decreaseQuantity(productId);
        quantityDisplay.textContent = getCartItemQuantity(productId);
        if (getCartItemQuantity(productId) === 0) {
            renderCatalog(products); // Обновляем каталог
        }
        renderCart();
    });

    increaseButton.addEventListener('click', () => {
        increaseQuantity(productId);
        quantityDisplay.textContent = getCartItemQuantity(productId);
        renderCart();
    });
}

// Функции для увеличения и уменьшения количества
function increaseQuantity(productId) {
    const cartItem = cartItems.find(item => item.id === productId);
    cartItem.quantity += 1;
}

function decreaseQuantity(productId) {
    const cartItem = cartItems.find(item => item.id === productId);
    cartItem.quantity -= 1;
    if (cartItem.quantity <= 0) {
        removeFromCart(productId);
    }
}

// Получение количества товара в корзине
function getCartItemQuantity(productId) {
    const cartItem = cartItems.find(item => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
}

// Функция для добавления товара в корзину
function addToCart(productId) {
    const product = products.find(prod => prod.id === productId);
    const cartItem = cartItems.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cartItems.push({...product, quantity: 1});
    }
    renderCart();
}

// Функция для удаления товара из корзины
function removeFromCart(productId) {
    cartItems = cartItems.filter(item => item.id !== productId);
    renderCart();
}

// Функция для очистки корзины
function clearCart() {
    cartItems = [];
    renderCart();
    renderCatalog(products); // Обновляем каталог
}

// Функция для рендеринга корзины
function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    cartItems.forEach(item => {
        totalPrice += item.price * item.quantity;

        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        cartItemElement.innerHTML = `
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-quantity">Количество: ${item.quantity}</div>
            <div class="cart-item-price">Цена: ${(item.price * item.quantity).toLocaleString()} ₽</div>
            <button class="cart-item-remove" data-product-id="${item.id}">Удалить</button>
        `;

        cartItemsContainer.appendChild(cartItemElement);
    });

    cartTotal.textContent = `Общая сумма: ${totalPrice.toLocaleString()} ₽`;

    // Обработчики для кнопок удаления
    const removeButtons = document.querySelectorAll('.cart-item-remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = parseInt(event.target.getAttribute('data-product-id'));
            removeFromCart(productId);
            renderCatalog(products); // Обновляем каталог
        });
    });
}

// Функция для применения фильтра
function applyFilter() {
    const minPrice = parseInt(document.getElementById('minPrice').value);
    const maxPrice = parseInt(document.getElementById('maxPrice').value);

    const filteredProducts = filterProducts(products, minPrice, maxPrice);
    const sortedProducts = sortProducts(filteredProducts);
    renderCatalog(sortedProducts);
}

// Функция для фильтрации продуктов
function filterProducts(arr, a, b) {
    return arr.filter(product => product.price >= a && product.price <= b);
}

// Функция для сортировки продуктов
function sortProducts(arr) {
    const sortOrder = document.getElementById('sortOrder').value;
    const sortedArr = arr.slice(); // Копируем массив

    sortedArr.sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });

    return sortedArr;
}

// Функция для переключения избранного статуса товара
function toggleFavorite(productId) {
    if (favoriteItems.includes(productId)) {
        // Если товар уже в избранном, удаляем его
        favoriteItems = favoriteItems.filter(id => id !== productId);
    } else {
        // Если товара нет в избранном, добавляем его
        favoriteItems.push(productId);
    }
}

// Функция для рендеринга избранных товаров
function renderFavorites() {
    const favoritesContainer = document.getElementById('favorites');
    favoritesContainer.innerHTML = '<h2>Избранное</h2>'; // Очищаем и добавляем заголовок

    if (favoriteItems.length === 0) {
        favoritesContainer.innerHTML += '<p>Нет избранных товаров</p>';
        return;
    }

    favoriteItems.forEach(productId => {
        const product = products.find(prod => prod.id === productId);

        const favoriteItemElement = document.createElement('div');
        favoriteItemElement.classList.add('favorite-item');

        favoriteItemElement.innerHTML = `
            <div class="favorite-item-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="favorite-item-details">
                <h3 class="favorite-item-title">${product.name}</h3>
                <p class="favorite-item-specs">${product.specs}</p>
                <p class="favorite-item-price">Цена: ${product.price.toLocaleString()} ₽</p>
                <button class="remove-favorite-button" data-product-id="${product.id}">Удалить из избранного</button>
            </div>
        `;

        favoritesContainer.appendChild(favoriteItemElement);
    });

    // Добавляем обработчики событий для кнопок удаления из избранного
    const removeFavoriteButtons = document.querySelectorAll('.remove-favorite-button');
    removeFavoriteButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productId = parseInt(event.target.getAttribute('data-product-id'));
            toggleFavorite(productId);
            renderCatalog(products); // Обновляем каталог
            renderFavorites(); // Обновляем избранное
        });
    });
}

// Установка обработчиков событий на элементы управления
document.getElementById('applyFilter').addEventListener('click', applyFilter);
document.getElementById('sortOrder').addEventListener('change', applyFilter);
document.getElementById('clearCart').addEventListener('click', clearCart);

// Инициализация страницы
const initialSortedProducts = sortProducts(products);
renderCatalog(initialSortedProducts);
renderCart();
renderFavorites();