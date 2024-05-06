console.log("market.js script connected.");

let itemsDiv = document.getElementById("items");

// Перевірка існування знайденого блоку
if (itemsDiv) {
    // Вивід знайденого елементу
    console.log(itemsDiv);

    // Вивід значення поля знайденого елементу
    /*
    console.log('Поле classList: ', itemsDiv.classList);
    console.log('Поле id', itemsDiv.id);
    console.log('Поле clientWidth: ', itemsDiv.clientWidth);
    console.log('Поле innerHTML: ', itemsDiv.innerHTML);
    */

    // Додавання тексту в блок
    /*
    itemsDiv.innerText = 'Перший програмно доданий текст';
    itemsDiv.innerText += 'Другий програмно доданий текст';
    */

    // Додавання HTML-коду в блок
    /*
    itemsDiv.innerHTML = '<h5>Відформатований HTML-код</h5>'
    */

    // Додавання нових item в блок
    itemsDiv.innerHTML += '<div class="item">Генератор 1</div>';
    itemsDiv.innerHTML += '<div class="item">Генератор 2</div>';
    itemsDiv.innerHTML += '<div class="item">Генератор 3</div>';
    itemsDiv.innerHTML += '<div class="item">Генератор 4</div>';

    // Додавання ще 96 товарів
    for (let i = 1; i <= 96; i++) {
        itemsDiv.innerHTML += '<div class="item">Телевізор ' + i + '</div>';
    }
} else {
    // Вивід повідомлення про не знайдений блок
    console.log("items not found!");
}
