# HARU Beauty — вакансия «Работник склада»

Статический лендинг без сборщика: HTML + CSS + небольшой JavaScript.

## Переключение статуса вакансии

В `index.html` найдите тег `<body>`:

```html
<body class="vacancy-open">
```

Замените класс на:

```html
<body class="vacancy-closed">
```

Появится уведомление «Открытых вакансий пока нет…», а Яндекс.Форма останется активной.

## Локальный запуск

```bash
python3 -m http.server 8000
```

Откройте `http://localhost:8000`.

## Деплой на Vercel

Через веб-интерфейс: создайте новый проект и загрузите эту папку.

Через CLI:

```bash
npm i -g vercel
vercel
vercel --prod
```
