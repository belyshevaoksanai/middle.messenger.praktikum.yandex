Мессенджер выполняется на курсах "Мидл фронтенд-разработчик"

Ссылки на развернутое приложение:
https://yandex-praktikum-chat.onrender.com/
https://yandex-praktikum-chat.onrender.com/settings
https://yandex-praktikum-chat.onrender.com/password
https://yandex-praktikum-chat.onrender.com/messenger
https://yandex-praktikum-chat.onrender.com/sign-up
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

Ссылки на документацию по используемому API:
https://ya-praktikum.tech/api/v2/swagger/#/Chats/delete_chats_users
https://ya-praktikum.tech/api/v2/openapi/ws

Реализован класс Router, отвечающий за роутинг в приложение (используется API History)
Класс httpTransport является "оберткой" для использования XMLHttpRequest, аналогично создан класс для работы с WS wsTransport.
За хранение данных и передачу между компонентами отвечает Store, для подключения к нему используется функция withStore.

Тестовые пользователи:
okurnosova2/11111111A
okurnosova6/12345678Qq!

