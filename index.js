document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const field1 = document.getElementById('field1').value;
    const field2 = document.getElementById('field2').value;

    // Добавьте пользовательские поля здесь
    const customField1 = 'значение1'; // Замените на реальное значение
    const customField2 = 'значение2'; // Замените на реальное значение

    const data = {
        field1: field1,
        field2: field2,
        customField1: customField1,
        customField2: customField2
    };

    fetch('https://app-ift.sbercrm.com/api/endpoint', { // Замените на реальный API endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Успех:', data);
    })
    .catch((error) => {
        console.error('Ошибка:', error);
    });
});