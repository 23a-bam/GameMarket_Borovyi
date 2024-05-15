console.log("market.js script connected.");

let itemsDiv = document.getElementById("items");

/*
let itemsArray = [
    'Газонокосарка 41',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Акумуляторний оприскувач 12',
    'Акумулятор',
    'Генератор',
    'Телевізор',
    'Ліхтарик',
];
*/

let itemsArray = [{
        firstName: "Ірина",
        lastName: "Глібко",
        age: 43,
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/01/hlibko-iryna-anatoliyevna.jpg",
    },{
        firstName: "Лариса",
        lastName: "Забелло",
        age: 87,
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna.jpg",
    },{
        firstName: "Вікторія",
        lastName: "Нелипович",
        age: 35,
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna.jpg",
    },{
        firstName: "Анжела",
        lastName: "Лознюк",
        age: 29,
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1.jpg",
    }
];

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
    /*
    itemsDiv.innerHTML += '<div class="item">Генератор 1</div>';
    itemsDiv.innerHTML += '<div class="item">Генератор 2</div>';
    itemsDiv.innerHTML += '<div class="item">Генератор 3</div>';
    itemsDiv.innerHTML += '<div class="item">Генератор 4</div>';
    */
    // Додавання ще 96 товарів
    /*
    for (let i = 1; i <= 96; i++) {
        itemsDiv.innerHTML += '<div class="item">Телевізор ' + i + '</div>';
    }
    */
    // console.log(itemsArray);

    itemsArray.forEach((item, index) => {
        itemsDiv.innerHTML +=
        `
        <div class = "item">
            <h2>Учитель № ${index + 1} з ${itemsArray.length}</h2>
            <p>${item.firstName} ${item.lastName}</p>
            <img class="photo" src=${item.photo} alt=${item.firstName + item.lastName}>
            <p>Вік: ${item.age}</p>
        </div>
        `
    });
} else {
    // Вивід повідомлення про не знайдений блок
    console.log("items not found!");
}
