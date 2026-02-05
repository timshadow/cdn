// mods@1.0/header-component.js
const headerHTML = `
    <header class="custom-header">
        <div class="logo">Мой логотип</div>
        <nav>...</nav>
    </header>
`;

// Добавляем на страницу
document.addEventListener('DOMContentLoaded', function() {
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});
