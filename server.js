const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware для парсинга JSON
app.use(bodyParser.json());

// Обработка POST-запроса
app.post('/api/endpoint', (req, res) => {
    const { field1, field2, customField1, customField2 } = req.body;

    console.log('Получены данные:', {
        field1,
        field2,
        customField1,
        customField2
    });

    // Здесь можно добавить логику обработки данных

    res.json({ message: 'Данные успешно получены' });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});