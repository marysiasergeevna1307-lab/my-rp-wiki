(function() {
    var password = "красныетуфелькибелогоогня"; 
    
    // Проверяем, заходил ли человек раньше
    if (localStorage.getItem('wiki_permanent_auth') !== 'true') {
        var userPass = prompt("Введите пароль для доступа к вики персонажей:");
        if (userPass === password) {
            // Запоминаем устройство навсегда
            localStorage.setItem('wiki_permanent_auth', 'true');
        } else {
            alert("Неверный пароль!");
            document.body.innerHTML = "<h1>Доступ ограничен</h1><p>Обратитесь к создателю для получения пароля.</p>";
            window.stop();
        }
    }
})();
