
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('form');
        const submitButton = form.querySelector('button[type="submit"]');
        const captchaContainer = document.getElementById('captchaContainer');
        
        const captchaLabel = document.createElement('label');
        const captchaInput = document.createElement('input');
        captchaInput.type = 'text';
        captchaInput.placeholder = 'Введите капчу';
        
        captchaContainer.appendChild(captchaLabel);
        captchaContainer.appendChild(captchaInput);
        
        let captchaValue;
        let attempt = 0;
        
        function generateLetterCaptcha() {
            const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let result = '';
            for (let i = 0; i < 5; i++) {
                result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            captchaValue = result;
            captchaLabel.textContent = 'Введите следующие буквы (с учетом регистра): ' + result;
            captchaInput.value = '';
        }
        
        function generateMathCaptcha() {
            const num1 = Math.floor(Math.random() * 10);
            const num2 = Math.floor(Math.random() * 10);
            captchaValue = num1 + num2;
            captchaLabel.textContent = `Решите пример: ${num1} + ${num2} = ?`;
            captchaInput.value = '';
        }
        
        function isEmpty(obj) {
            for (let key in obj) {
                if (obj.hasOwnProperty(key))
                    return false;
            }
            return true;
        }
        
        function initCaptcha() {
            if (attempt === 0) {
                generateLetterCaptcha();
            } else {
                generateMathCaptcha();
            }
        }
        
        // Инициализируем капчу при загрузке страницы
        initCaptcha();
        
        // Кнопка отправки изначально отключена
        submitButton.disabled = true;
        
        // Обработчик ввода капчи
        captchaInput.addEventListener('input', function() {
            if (attempt === 0) {
                // Проверяем ввод для буквенной капчи
                if (captchaInput.value === captchaValue) {
                    submitButton.disabled = false;
                } else {
                    submitButton.disabled = true;
                }
            } else {
                // Проверяем ввод для математической капчи
                if (parseInt(captchaInput.value) === captchaValue) {
                    submitButton.disabled = false;
                } else {
                    submitButton.disabled = true;
                }
            }
        });
        
        captchaInput.addEventListener('blur', function() {
            // Если кнопка отправки отключена, значит капча введена неправильно
            if (submitButton.disabled && captchaInput.value !== '') {
                attempt++;
                if (attempt === 1) {
                    alert('Неправильно введена капча. Попробуйте решить математическую капчу.');
                } else {
                    alert('Неправильная капча. Попробуйте снова.');
                }
                initCaptcha();
            }
        });
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Проверка на пустые поля
            const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], textarea');
            const emptyInputs = {};
            inputs.forEach(function(input) {
                if (input.value.trim() === '') {
                    emptyInputs[input.name] = input.value;
                }
            });
            
            if (!isEmpty(emptyInputs)) {
                alert('Пожалуйста, заполните все поля.');
                return;
            }
            
            // Если все проверки пройдены
            alert('Форма успешно отправлена!');
            // Здесь вы можете добавить код для отправки формы на сервер
            // Например: form.submit();
        });
    });
    