let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Получаем все кнопки избранного
const favoriteButtons = document.querySelectorAll('.favorite-button');

favoriteButtons.forEach(button => {
    const itemTitle = button.closest('.catalog-item').querySelector('.item-title').textContent;

    // Если товар в избранном, отмечаем сердечко
    if (favorites.includes(itemTitle)) {
        button.classList.add('active');
    }

    button.addEventListener('click', function() {
        if (favorites.includes(itemTitle)) {
            // Удаляем из избранного
            favorites = favorites.filter(fav => fav !== itemTitle);
            button.classList.remove('active');
        } else {
            // Добавляем в избранное
            favorites.push(itemTitle);
            button.classList.add('active');
        }

        // Сохраняем избранное в localStorage
        localStorage.setItem('favorites', JSON.stringify(favorites));
    });
});