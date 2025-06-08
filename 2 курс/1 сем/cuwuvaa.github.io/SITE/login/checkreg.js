    // Получаем элементы
    var modal = document.getElementById('modalWindow');
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');
    var mainContent = document.getElementById('mainContent');

    // Обработчик для кнопки "Да"
    yesButton.onclick = function() {
        modal.style.display = 'none'; // Скрываем модальное окно
    }

    // Обработчик для кнопки "Нет"
    noButton.onclick = function() {

        window.location.href = "../entering/entering.html"; 
    }


    