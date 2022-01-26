const btnRepairs = document.querySelectorAll(".submit");// Выделяем все кнопки submit
btnRepairs.forEach(btnRepair => {// Для каждой кнопки
btnRepair.addEventListener("click", function(event) {// По клику вызываем функцию "событие"
event.preventDefault();// Чтоб не открылось в новом окне (отм. действия браузера по умолчанию)
btnRepair.innerHTML = ('Круто, спасибо за доверие!'); // Заменяем содержимое кнопки
});
})

