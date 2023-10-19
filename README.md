Мессенджер выполняется на курсах "Мидл фронтенд-разработчик"

Ссылки на развернутое приложение:
https://yandex-praktikum-chat.onrender.com/profile
https://yandex-praktikum-chat.onrender.com/password
https://yandex-praktikum-chat.onrender.com/chat
https://yandex-praktikum-chat.onrender.com/login
https://yandex-praktikum-chat.onrender.com/registration
https://yandex-praktikum-chat.onrender.com/not-found
https://yandex-praktikum-chat.onrender.com/error-page

Скрипты:
npm run dev - сборка и запуск приложения в режиме разработки с HMR
npm run start - сборка приложения и запуск с помощью express-сервера с раздачей статики
npm run build - сборка приложения, output в ./dist
npm run preview - запуск локального веб сервера, который берет статику из ./dist (аналог npm run start но средствами vite)
npm run eslint-check - запуск проверок ESLint
npm run eslint-fix - фикс ошибок ESLint
npm run stylelint-check - запуск проверок StyleLint
npm run stylelint-fix - фикс ошибок StyleLint

Используемые технологии:
- Язык программирования JS, TS
- Препрецессор SASS
- Инструмент сборки Vite
- Шаблонизатор Handlebars
- ESLint, StyleLint

В ходе проекта будет реализован чат без использования React, но при этом будут реализована подобная логика с помощью JS для более глубокого понимания библиотеки.
За View отвечает class Block который использует паттерн EventBus.

По результатам проекта будет реализован следующий функционал:
- создание чата;
- изменение аватара чата;
- удаление чата;
- добавление и удаление пользователей из чата;
- поиск по всем чатам;
- отправка сообщений;
- регистрация пользователя;
- авторизация пользователя;
- изменение данных пользователя;
- добавление аватара пользователя;
- выйти из аккаунта;
- валидация форм.
