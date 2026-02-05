// mods@1.0/header.js - ТЕСТОВЫЙ СКРИПТ
(function() {
    console.log('✅ CDN ShadowCode: header.js загружен успешно!');
    console.log('Время:', new Date().toISOString());
    console.log('CDN домен:', window.location.origin);
    
    // Создаем видимый элемент на странице
    const testDiv = document.createElement('div');
    testDiv.id = 'cdn-test-message';
    testDiv.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        background: #27ae60;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
        z-index: 9999;
        font-family: Arial, sans-serif;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        font-size: 14px;
    `;
    testDiv.innerHTML = `
        ✅ CDN работает!<br>
        <small>cdn.shadowcode.ru</small>
    `;
    
    // Добавляем на страницу
    document.body.appendChild(testDiv);
    
    // Через 5 секунд убираем сообщение
    setTimeout(() => {
        testDiv.style.opacity = '0';
        testDiv.style.transition = 'opacity 1s';
        setTimeout(() => testDiv.remove(), 1000);
    }, 5000);
    
    // Для отладки в Tilda
    if (typeof t_onReady !== 'undefined') {
        t_onReady(function() {
            console.log('✅ Tilda готова, CDN скрипт активирован');
        });
    }
})();
