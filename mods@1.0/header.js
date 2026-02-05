// mods@1.0/umschool-header.js
(function() {
    console.log('✅ UMSchool Header loaded from CDN');
    
    // ВАШ HTML КОД как JavaScript строка
    const headerHTML = `
        <!--Хедер c промо-->
        <style>
        .mobile-header,
        .mobile-menu {
            display: none;
        }

        body {
            margin: 0;
            font-family: 'CoFo Gothic', sans-serif;
        }

        a {
            text-decoration: none !important;
        }

        .static-header {
            position: relative;
            overflow: visible;
            z-index: 1000002;
            width: 1200px;
            margin: 0 auto;
            padding: 20px 0px;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: white;
        }

        .static-header::after {
            content: '';
            position: absolute;
            top: 0; left: 50%;
            transform: translateX(-50%);
            width: 100vw;
            height: 100%;
            background: white;
            z-index: -1;
        }

        .main-menu {
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%) translateY(-150px); 
            width: 1200px;
            height: 82px;
            padding: 0px 48px;
            box-sizing: border-box;
            background: white;
            border-radius: 1000px;
            display: flex; 
            justify-content: space-between;
            align-items: center;
            z-index: 1000004;
            transition: transform 0.6s cubic-bezier(0.66, 0, 0.34, 1) 0.2s,
                        box-shadow 0.6s cubic-bezier(0.66, 0, 0.34, 1) 0.2s; 
            box-shadow: 0 4px 20px rgba(100, 100, 100, 0.08);
            pointer-events: none;
        }

        .main-menu.visible {
            transform: translateX(-50%) translateY(0);
            pointer-events: auto;
        }

        .main-menu:not(.visible) {
            transition: transform 0.6s cubic-bezier(0.66, 0, 0.34, 1),
                        box-shadow 0.6s cubic-bezier(0.66, 0, 0.34, 1);
        }

        .secondary-menu {
            position: fixed;
            top: 102px;
            left: 50%;
            transform: translateX(-50%);
            padding: 32px;
            background: white;
            border-radius: 16px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 60px;
            z-index: 1000001;
            transition: opacity 0.4s ease;
            opacity: 0;
            pointer-events: none;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .secondary-menu.visible {
            opacity: 1;
            pointer-events: auto;
        }

        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(8px);
            z-index: 1000000;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s ease;
        }

        .overlay.visible {
            opacity: 1;
            pointer-events: auto;
        }

        .secondary-menu:not(.visible) {
            display: none !important;
        }

        .menu-item {
            color: black !important;
            font-size: 18px;
            font-weight: 500;
            line-height: 19.80px;
            text-decoration: none;
        }

        .submenu-item {
            color: black !important;
            font-size: 16px;
            font-weight: 400;
            line-height: 16px;
            cursor: pointer;
            text-decoration: none;
            transition: opacity 0.2s ease;
        }

        .submenu-item:hover {
            opacity: 0.7;
        }

        .menuhover {
            cursor: pointer;
            transition: opacity 0.2s ease;
        }

        .menuhover:hover {
            opacity: 0.7;
        }


        .button-header {
            padding: 12px 24px;
            background: #8137FB;
            border-radius: 4px;
            color: white !important;
            font-size: 16px;
            font-weight: 500;
            text-align: center;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            transition: background 0.2s ease;
        }

        .button-header:hover {
            background: #732BE8;
        }

        .svg-icon {
            width: 18px;
            height: 18px;
            fill: none;
            stroke: black;
            stroke-width: 1.2;
        }

        .arrow-header-tutors {
            position: relative;
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
        }

        .arrow-header-icon {
            width: 12px;
            height: 8px;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='9' height='6' viewBox='0 0 9 6' fill='none'%3e%3cpath d='M0.5 0.5L4.5 4.5L8.5 0.5' stroke='black' stroke-linecap='round'/%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            transition: transform 0.3s ease;
        }

        .arrow-header-tutors:hover .arrow-header-icon {
            transform: rotate(180deg);
        }

        .tutors-dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            background: white;
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            display: none;
            flex-direction: column;
            z-index: 1000003;
            margin-top: 12px;
            gap: 12px;
        }

        .tutors-dropdown::before {
            content: '';
            position: absolute;
            top: -12px;
            left: 0;
            width: 100%;
            height: 12px;
            background: transparent;
        }

        .arrow-header-tutors:hover .tutors-dropdown {
            display: flex;
        }

        .tutors-dropdown .submenu-item {
            font-size: 16px;
            color: black !important;
            transition: opacity 0.2s ease;
            white-space: nowrap;
        }

        .menu-icon {
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'%3E%3Cpath d='M7.7666 2.8623H12.5874C12.9319 2.8623 13.1041 2.8623 13.2487 2.88038C14.2471 3.00518 15.0328 3.75113 15.1643 4.6991C15.1833 4.83638 15.1833 4.9999 15.1833 5.32693' stroke='black' stroke-width='1.2'/%3E%3Cpath d='M1.83301 5.64371C1.83301 5.02225 1.83301 4.71152 1.88444 4.45269C2.11087 3.31328 3.04957 2.42202 4.24965 2.20704C4.52226 2.1582 4.84953 2.1582 5.50408 2.1582C5.79087 2.1582 5.93426 2.1582 6.07207 2.17044C6.6662 2.22319 7.22978 2.44483 7.68918 2.80641C7.79574 2.89028 7.89713 2.98655 8.09992 3.17909L8.50803 3.56656C9.11306 4.14102 9.41558 4.42825 9.77785 4.61961C9.97686 4.72473 10.1879 4.80775 10.407 4.86702C10.8056 4.97492 11.2335 4.97492 12.0891 4.97492H12.3663C14.3186 4.97492 15.2948 4.97492 15.9293 5.51676C15.9877 5.5666 16.0432 5.61934 16.0957 5.67476C16.6664 6.2772 16.6664 7.20403 16.6664 9.05769V10.6084C16.6664 13.264 16.6664 14.5918 15.7975 15.4168C14.9285 16.2418 13.53 16.2418 10.733 16.2418H7.76636C4.96935 16.2418 3.57085 16.2418 2.70193 15.4168C1.83301 14.5918 1.83301 13.264 1.83301 10.6084V5.64371Z' stroke='black' stroke-width='1.2'/%3E%3C/svg%3E") no-repeat center;
            background-size: contain;
        }

        .login-icon {
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'%3E%3Cpath d='M6.66667 2.94434H5.88889C4.05565 2.94434 3.13903 2.94434 2.56951 3.51385C2 4.08337 2 4.99999 2 6.83322V10.7221C2 12.5554 2 13.472 2.56951 14.0415C3.13903 14.611 4.05565 14.611 5.88889 14.611H6.66667' stroke='black' stroke-width='1.2'/%3E%3Cpath d='M6.66699 4.48165C6.66699 2.69757 6.66699 1.80553 7.21708 1.31787C7.76716 0.830215 8.60796 0.976865 10.2896 1.27017L12.1009 1.58608C13.9632 1.91091 14.8944 2.07333 15.4474 2.75642C16.0003 3.43951 16.0003 4.42744 16.0003 6.40331V11.1522C16.0003 13.1281 16.0003 14.116 15.4474 14.7991C14.8944 15.4822 13.9632 15.6446 12.1009 15.9695L10.2896 16.2854C8.60796 16.5787 7.76716 16.7253 7.21708 16.2377C6.66699 15.75 6.66699 14.858 6.66699 13.0739V4.48165Z' stroke='black' stroke-width='1.2'/%3E%3Cpath d='M9 8V9.55556' stroke='black' stroke-width='1.2' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat center;
            background-size: contain;
        }

        .logo-container {
            display: flex;
            gap: 5px;
            width: 128px;
            height: 30px;
        }

        .menu-items {
            display: flex;
            align-items: center;
            gap: 24px;
        }

        .menu-toggle {
            padding: 12px 20px;
            background: #F6F6F6;
            border-radius: 100px;
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        .menu-toggle:hover {
            background: #F0EAFF;
            box-shadow: inset 0 0 0 1px #8137FB;
        }

        .menu-toggle.active {
            background: #F0EAFF;
            box-shadow: inset 0 0 0 1px #8137FB;
        }

        .menu-links {
            display: flex;
            gap: 24px;
        }

        .menu-buttons {
            display: flex;
            align-items: center;
            gap: 24px;
        }

        .login-button {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            text-decoration: none;
            color: black !important;
            transition: opacity 0.2s ease;
        }

        .login-button:hover {
            opacity: 0.7;
        }

        .login-text {
            color: black !important;
            font-size: 14px;
            font-weight: 500;
            line-height: 14px;
            cursor: pointer;
            text-decoration: none;
        }

        .subjects-section {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .tutors-section,
        .trials-section,
        .referral-section {
            display: flex;
            flex-direction: column;
            gap: 32px;
        }

        .tutors-subsection,
        .trials-subsection {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .referral-section {
            gap: 24px;
        }

        .submenu {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .catalog-item {
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .new-badge {
            padding: 2px 6px;
            background: #8137FB;
            border-radius: 100px;
            color: white;
            font-size: 12px;
            font-weight: 400;
        }

        .trial-block {
            padding: 20px;
            background: url("https://static.tildacdn.com/tild3036-3831-4863-a364-666433663836/card-header_1.png") no-repeat center;
            background-size: cover;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 334px;
            width: 270px;
            box-sizing: border-box;
        }

        @media (max-width: 1200px) {
        .static-header,
        .main-menu, 
        .secondary-menu {
            display: none;
        }

        @font-face {
            font-family: 'CoFo Gothic';
            src: url('https://static.tildacdn.com/tild3834-3231-4166-b239-646264356531/CoFoGothic-Regular.woff') format('woff');
            font-weight: 400;
            font-style: normal;
        }

        @font-face {
            font-family: 'CoFo Gothic';
            src: url('https://static.tildacdn.com/tild3163-3635-4366-b031-356330666233/CoFoGothic-Medium.woff') format('woff');
            font-weight: 500;
            font-style: normal;
        }

        body {
            margin: 0;
            font-family: 'CoFo Gothic', sans-serif;
            overflow-x: hidden;
        }

        a {
            text-decoration: none !important;
        }

        .subjects-section, .tutors-section, .trials-section {
            border-bottom: 1px solid #e6e6e6;
            padding-bottom: 24px;
        }


        .mobile-header {
            width: 100%;
            height: 62px;
            padding: 20px;
            background: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000000;
            box-sizing: border-box;
        }

        .logo-container {
            max-width: 153px;
        }

        .logo-container img {
            width: 100%;
            height: 36px;
            display: block;
        }

        .burger-icon {
            width: 22px;
            height: 18px;
            cursor: pointer;
            position: relative;
        }

        .burger-icon svg {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: opacity 0.3s ease;
        }

        .burger-icon .burger-svg {
            opacity: 1;
        }

        .burger-icon .close-svg {
            opacity: 0;
            width: 14px;
            height: 14px;
        }

        .burger-icon.active .burger-svg {
            opacity: 0;
        }

        .burger-icon.active .close-svg {
            opacity: 1;
        }

        .mobile-menu {
            position: fixed;
            top: 62px;
            left: 0;
            width: 100%;
            height: calc(100dvh - 62px - env(safe-area-inset-bottom, 0px));
            padding: 24px 20px;
            background: white;
            display: flex;
            flex-direction: column;
            gap: 24px;
            z-index: 10000000000;
            transition: opacity 0.4s ease;
            opacity: 0;
            pointer-events: none;
            box-sizing: border-box;
            overflow-y: auto;
            overflow-x: hidden;
        }

        .mobile-menu.visible {
            opacity: 1;
            pointer-events: auto;
        }

        .mobile-menu .menu-item {
            color: black;
            font-size: 18px;
            font-weight: 500;
            line-height: 19.8px;
            cursor: pointer;
        }

        .mobile-menu .submenu {
            display: flex;
            flex-direction: column;
            gap: 12px;
            margin-top: 20px;
        }

        .mobile-menu .submenu-item {
            color: black;
            font-size: 16px;
            font-weight: 400;
            line-height: 16px;
            cursor: pointer;
        }

        .mobile-menu .submenu-item:hover,
        .mobile-menu .menu-item:hover {
            color: #8137FB;
        }

        .mobile-menu .catalog-item {
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .mobile-menu .new-badge {
            padding: 2px 6px;
            background: #8137FB;
            border-radius: 100px;
            color: white;
            font-size: 12px;
            font-weight: 400;
            line-height: 12px;
            flex-shrink: 0;
        }

        .mobile-menu .button-header {
            width: 100%;
            height: 48px;
            padding: 0 24px;
            background: #8137FB;
            border-radius: 4px;
            color: white;
            font-size: 16px;
            font-weight: 500;
            line-height: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: background 0.3s ease;
            box-sizing: border-box;
        }

        .mobile-menu .button-header:hover {
            background: #6A2ED8;
        }

        .mobile-menu .button-header.outline {
            background: transparent;
            border: 1px solid #8137FB;
            color: #8137FB !important;
        }

        .mobile-menu .button-header.outline:hover {
            background: #F0EAFF;
        }

        .mobile-menu .button-section {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .mobile-menu .subjects-section,
        .mobile-menu .tutors-section,
        .mobile-menu .trials-section,
        .mobile-menu .section {
            display: flex;
            flex-direction: column;
        }

        .tutors-section, .trials-section, .referral-section {
            gap: 0px;
        }
        .subjects-section {
            gap: 0px;
        }

        .divider {
            width: 100%;
            height: 1px;
            background: #e6e6e6;
            margin: 1px 0;
        }
        }
        </style>

        <!--Статичный хедер-->
        <div class="static-header">
            <div class="logo-container">
                <a href="/"><img src="https://static.tildacdn.com/tild3131-6332-4465-b066-313364653364/logo.svg" alt="Логотип Умскул Репетиторы"></a>
            </div>
            <div class="menu-items">
                <div id="menu-toggle" class="menu-toggle">
                    <div class="svg-icon menu-icon"></div>
                    <div class="menu-item">Меню</div>
                </div>
                <div class="menu-links">
                    <div class="arrow-header-tutors">
            <div href="" class="menu-item menuhover">Репетиторам</div>
            <div class="arrow-header-icon"></div>
            <div class="tutors-dropdown">
                <a href="/tutors" class="submenu-item">Стать репетитором</a>
                <a href="stat-repetitorom-onlajn" class="submenu-item">Пройти курс</a>
            </div>
        </div>
                    <a href="/blog" class="menu-item menuhover">Блог</a>
                    <a href="/about" class="menu-item menuhover">О нас</a>
                </div>
            </div>
            <div class="menu-buttons">
                <a href="#lastform" class="button-header">Начать бесплатно</a>
                <a href="https://lk.umschool.one/catalog" class="login-button">
                    <div class="svg-icon login-icon"></div>
                    <div class="login-text">Войти</div>
                </a>
            </div>
        </div>

        <!--Динамичный хедер-->
        <div class="main-menu" id="main-menu-1">
            <div class="logo-container">
                <a href="/"><img src="https://static.tildacdn.com/tild3131-6332-4465-b066-313364653364/logo.svg" alt="Логотип Умскул Репетиторы"></a>
            </div>
            <div class="menu-items">
                <div id="menu-toggle-main" class="menu-toggle">
                    <div class="svg-icon menu-icon"></div>
                    <div class="menu-item">Меню</div>
                </div>
                <div class="menu-links">
                    <div class="arrow-header-tutors">
            <div class="menu-item menuhover">Репетиторам</div>
            <div class="arrow-header-icon"></div>
            <div class="tutors-dropdown">
                <a href="/tutors" class="submenu-item">Стать репетитором</a>
                <a href="/stat-repetitorom-onlajn" class="submenu-item">Пройти курс</a>
            </div>
        </div>
                    <a href="/blog" class="menu-item menuhover">Блог</a>
                    <a href="/about" class="menu-item menuhover">О нас</a>
                </div>
            </div>
            <div class="menu-buttons">
                <a href="#lastform" class="button-header">Начать бесплатно</a>
                <a href="https://lk.umschool.one/catalog" class="login-button">
                    <div class="svg-icon login-icon"></div>
                    <div class="login-text">Войти</div>
                </a>
            </div>
        </div>

        <!--Внутреннее меню-->
        <div class="overlay"></div>
        <div class="secondary-menu">
            <div class="subjects-section">
                <div class="menu-item">Предметы</div>
                <div class="submenu">
                    <a href="/matematika" class="submenu-item">Математика</a>
                    <a href="/russkij-yazyk" class="submenu-item">Русский язык</a>
                    <a href="/obshestvoznanie" class="submenu-item">Обществознание</a>
                    <a href="/himiya" class="submenu-item">Химия</a>
                    <a href="/fizika" class="submenu-item">Физика</a>
                    <a href="/anglijskij-yazyk" class="submenu-item">Английский язык</a>
                    <a href="/geografiya" class="submenu-item">География</a>
                    <a href="/informatika" class="submenu-item">Информатика</a>
                    <a href="/literatura" class="submenu-item">Литература</a>
                    <a href="/istoriya" class="submenu-item">История</a>
                    <a href="/biologiya" class="submenu-item">Биология</a>
                </div>
            </div>
            <div class="tutors-section">
                <div class="tutors-subsection">
                    <div class="menu-item">Репетиторы</div>
                    <div class="submenu">
                        <div class="catalog-item">
                            <a href="/katalog-repetitorov" class="submenu-item">Каталог</a>
                            <div class="new-badge">New</div>
                        </div>
                        <a href="/catalogue" class="submenu-item">Пакеты занятий</a>
                    </div>
                </div>
                <div class="trials-subsection">
                    <div class="menu-item">Пробники</div>
                    <div class="submenu">
                        <a href="/probnik-oge" class="submenu-item">Пробный ОГЭ</a>
                        <a href="/probnik-ege" class="submenu-item">Пробный ЕГЭ</a>
                    </div>
                </div>
                <div class="referral-section">
                    <a href="/referral_program" class="menu-item menuhover">Реферальная<br>программа</a>
                </div>
            </div>
            <a href="/novogodnij-podarok" class="trial-block" style="position: relative; display: block;">
            <div style="
                position: absolute;
                top: 262px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 10;
            ">
                <div style="
                    padding: 4px 8px;
                    background: black;
                    border-radius: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                ">
                    <div style="
                        color: white;
                        font-size: 12px;
                        font-family: CoFo Gothic, sans-serif;
                        font-weight: 500;
                        line-height: 1;
                        text-align: center;
                        white-space: nowrap;
                        font-variant-numeric: tabular-nums;
                    " class="timer-display">
                        0 дней 00:00:00
                    </div>
                </div>
            </div>
        </a>
        </div>

        <style>
        @media (max-width: 1200px) {
            .mobile-header-spacer {
                height: 62px;
                width: 100%;
            }
        }
        </style>

        <!--Мобильный хедер-->
        <div class="mobile-header-spacer"></div>
        <div class="mobile-header">
            <div class="logo-container">
                <a href="/"><img src="https://static.tildacdn.com/tild3131-6332-4465-b066-313364653364/logo.svg" alt="Логотип Умскул Репетиторы"></a>
            </div>
            <div class="burger-icon" id="burger-toggle">
            <svg class="burger-svg" xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
                <path d="M1 1H21" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                <path d="M1 9H21" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
                <path d="M1 17H21" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
            <svg class="close-svg" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M13 1L1 13" stroke="black" stroke-width="1.2" stroke-linecap="round"/>
            </svg>
        </div>
        </div>

        <!--Внутреннее меню-->
        <div class="mobile-menu">
            <div class="subjects-section">
                <div class="menu-item">Предметы</div>
                <div class="submenu">
                    <a href="/matematika" class="submenu-item">Математика</a>
                    <a href="/russkij-yazyk" class="submenu-item">Русский язык</a>
                    <a href="/obshestvoznanie" class="submenu-item">Обществознание</a>
                    <a href="/himiya" class="submenu-item">Химия</a>
                    <a href="/fizika" class="submenu-item">Физика</a>
                    <a href="/anglijskij-yazyk" class="submenu-item">Английский язык</a>
                    <a href="/geografiya" class="submenu-item">География</a>
                    <a href="/informatika" class="submenu-item">Информатика</a>
                    <a href="/literatura" class="submenu-item">Литература</a>
                    <a href="/istoriya" class="submenu-item">История</a>
                    <a href="/biologiya" class="submenu-item">Биология</a>
                </div>
            </div>
            <div class="tutors-section">
                <div class="menu-item">Репетиторы</div>
                <div class="submenu">
                    <div class="catalog-item">
                        <a href="/katalog-repetitorov" class="submenu-item">Каталог</a>
                        <div class="new-badge">New</div>
                    </div>
                    <a href="/catalogue" class="submenu-item">Пакеты занятий</a>
                </div>
            </div>
            <div class="trials-section">
                <div class="menu-item">Пробники</div>
                <div class="submenu">
                    <a href="/probnik-oge" class="submenu-item">Пробный ОГЭ</a>
                    <a href="/probnik-ege" class="submenu-item">Пробный ЕГЭ</a>
                </div>
            </div>
            <div class="trials-section">
                <div class="menu-item">Репетиторам</div>
                <div class="submenu">
                    <a href="/tutors" class="submenu-item">Стать репетитором</a>
                    <a href="/stat-repetitorom-onlajn" class="submenu-item">Пройти курс</a>
                </div>
            </div>
            <div class="section">
                <a href="/blog" class="menu-item">Блог</a>
            </div>
            <div class="section">
                <a href="/about" class="menu-item">О нас</a>
            </div>
            <div class="section">
                <a href="/referral_program" class="menu-item">Реферальная программа</a>
            </div>
            <div class="button-section">
                <a href="#lastform" class="button-header">Начать бесплатно</a>
                <a href="https://lk.umschool.one/catalog" class="button-header outline">Войти</a>
            </div>
        </div>
    `;
    
    // ВАШ JavaScript КОД для функционала
    const headerScript = `
        function updateTimer() {
            const targetDate = new Date('December 31, 2025 23:59:59').getTime();
            const now = new Date().getTime();
            const timeLeft = targetDate - now;

            if (timeLeft < 0) {
                document.querySelectorAll('.timer-display').forEach(el => {
                    el.textContent = 'Акция завершена';
                });
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            const dayWord = days % 10 === 1 && days % 100 !== 11 ? 'день' :
                            [2,3,4].includes(days % 10) && ![12,13,14].includes(days % 100) ? 'дня' : 'дней';

            document.querySelectorAll('.timer-display').forEach(el => {
                el.textContent = \`\${days} \${dayWord} \${hours.toString().padStart(2,'0')}:\${minutes.toString().padStart(2,'0')}:\${seconds.toString().padStart(2,'0')}\`;
            });
        }

        // Меню десктоп
        const menuToggle = document.getElementById('menu-toggle');
        const menuToggleMain = document.getElementById('menu-toggle-main');
        const secondaryMenu = document.querySelectorAll('.secondary-menu');
        const overlay = document.querySelectorAll('.overlay');
        const mainMenu = document.querySelectorAll('.main-menu');
        let lastScrollTop = 0;
        let isMenuOpen = false;

        function handleMenuClick(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        }

        [menuToggle, menuToggleMain].forEach(toggle => {
            if (toggle) {
                toggle.addEventListener('click', handleMenuClick);
                toggle.querySelectorAll('*').forEach(child => {
                    child.addEventListener('click', handleMenuClick);
                });
            }
        });

        document.addEventListener('click', (e) => {
            let isClickInsideSecondaryMenu = false;
            secondaryMenu.forEach(menu => {
                if (menu.contains(e.target)) {
                    isClickInsideSecondaryMenu = true;
                }
            });
            
            let isClickOnMenuToggle = false;
            [menuToggle, menuToggleMain].forEach(toggle => {
                if (toggle && toggle.contains(e.target)) {
                    isClickOnMenuToggle = true;
                }
            });
            
            if (isMenuOpen && !isClickInsideSecondaryMenu && !isClickOnMenuToggle) {
                closeMenu();
            }
        });

        window.addEventListener('scroll', () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollTop > 1200) { 
                mainMenu.forEach(menu => {
                    menu.classList.add('visible');
                });
            } else { 
                mainMenu.forEach(menu => {
                    menu.classList.remove('visible');
                });
            }

            if (isMenuOpen) {
                closeMenu();
            }

            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        });

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                openMenu();
            } else {
                closeMenu();
            }
        }

        function openMenu() {
            secondaryMenu.forEach(menu => {
                menu.classList.add('visible');
                menu.style.top = (document.querySelector('.main-menu.visible') ? '122px' : '102px');
            });
            overlay.forEach(ov => {
                ov.classList.add('visible');
            });
            menuToggle.classList.add('active');
            menuToggleMain.classList.add('active');
            isMenuOpen = true;
        }

        function closeMenu() {
            secondaryMenu.forEach(menu => {
                menu.classList.remove('visible');
            });
            overlay.forEach(ov => {
                ov.classList.remove('visible');
            });
            menuToggle.classList.remove('active');
            menuToggleMain.classList.remove('active');
            isMenuOpen = false;
        }

        // Мобильное меню
        document.addEventListener('DOMContentLoaded', () => {
            const burgerToggle = document.getElementById('burger-toggle');
            const mobileMenu = document.querySelector('.mobile-menu');
            const menuItems = document.querySelectorAll('.menu-item');
            let isMobileMenuOpen = false;

            burgerToggle.addEventListener('click', (e) => {
                e.preventDefault();
                toggleMobileMenu();
            });

            document.querySelectorAll('.mobile-menu a[href^="#"]').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault(); 
                    closeMobileMenu();
                    const targetId = link.getAttribute('href').substring(1); 
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });

            document.addEventListener('click', (e) => {
                if (isMobileMenuOpen && !mobileMenu.contains(e.target) && !burgerToggle.contains(e.target)) {
                    closeMobileMenu();
                }
            });

            menuItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const submenu = item.nextElementSibling;
                    if (submenu && submenu.classList.contains('submenu')) {
                        submenu.classList.toggle('active');
                        document.querySelectorAll('.submenu.active').forEach(otherSubmenu => {
                            if (otherSubmenu !== submenu) {
                                otherSubmenu.classList.remove('active');
                            }
                        });
                    }
                });
            });

            function toggleMobileMenu() {
                isMobileMenuOpen = !isMobileMenuOpen;
                mobileMenu.classList.toggle('visible', isMobileMenuOpen);
                burgerToggle.classList.toggle('active', isMobileMenuOpen);
                if (isMobileMenuOpen) {
                    mobileMenu.scrollTop = 0;
                } else {
                    document.querySelectorAll('.submenu.active').forEach(submenu => {
                        submenu.classList.remove('active');
                    });
                }
            }

            function closeMobileMenu() {
                isMobileMenuOpen = false;
                mobileMenu.classList.remove('visible');
                burgerToggle.classList.remove('active');
                document.querySelectorAll('.submenu.active').forEach(submenu => {
                    submenu.classList.remove('active');
                });
            }

            // Таймер
            updateTimer();
            setInterval(updateTimer, 1000);
        });
    `;
    
    // Вставляем HTML в начало body
    function insertHeader() {
        const container = document.createElement('div');
        container.id = 'umschool-header-container';
        container.innerHTML = headerHTML;
        document.body.insertBefore(container, document.body.firstChild);
        
        // Выполняем скрипт
        const script = document.createElement('script');
        script.textContent = headerScript;
        document.head.appendChild(script);
        
        console.log('✅ UMSchool Header вставлен через CDN');
    }
    
    // Ждем загрузки Tilda или DOM
    if (typeof t_onReady !== 'undefined') {
        t_onReady(insertHeader);
    } else if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertHeader);
    } else {
        insertHeader();
    }
})();
