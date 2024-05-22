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
/*
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
*/
let itemsArray = [
    {
        email: "23a_bam@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Боровий Артур",
        game: "Дід проти москалів",
        githubGame: "https://github.com/23a-bam/Phaser2ndGame",
        pagesGame: "https://23a-bam.github.io/Phaser2ndGame/",
        driveGame: "https://drive.google.com/drive/folders/1A12wx0lfNj7Aef9KAw2CFMaDwhWM8V4Q?usp=sharing",
        feedbackForm: "https://forms.gle/sS7tuJWJuGDjmHB98",
        market: "https://github.com/23a-bam/GameMarket_Borovyi",
        githubMarket: "https://23a-bam.github.io/GameMarket_Borovyi/",
        pagesBase: "https://23a-bam.github.io/GameMarket_Borovyi/market.html"
      },
      {
        email: "23a_gki@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Геча Кирило",
        game: "Магазин UkraineRog",
        githubGame: "https://github.com/Kyrylooo/GameMarket_Surname",
        pagesGame: "https://github.com/Kyrylooo/GameMarket_Surname/settings/pages",
        driveGame: "https://kyrylooo.github.io/Test1/",
        feedbackForm: "https://kyrylooo.github.io/Test1/",
        market: "https://github.com/Kyrylooo/Test1",
        githubMarket: "https://kyrylooo.github.io/Test1/"
      },
      {
        email: "23a_gmo@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Громова Марина",
        game: "",
        githubGame: "https://github.com/Marina745/Phaser2ndGame",
        pagesGame: "https://marina745.github.io/Phaser2ndGame/",
        driveGame: "https://drive.google.com/drive/folders/1h8T6v1Yt0wkzkiI72lSMMZndaidptT6o",
        feedbackForm: "https://forms.gle/4tsVxrHtBpkLLmdc6",
        market: "https://github.com/Marina745/GameMarket_Hromova/blob/main/market.js",
        githubMarket: "https://marina745.github.io/GameMarket_Hromova/market.html"
      },
      {
        email: "23a_gayu@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Гуменюк Аріна",
        game: "",
        githubGame: "https://github.com/NoraBlank/-Phaser2ndGame?authuser=0",
        pagesGame: "https://norablank.github.io/-Phaser2ndGame/?authuser=0",
        driveGame: "https://docs.google.com/document/d/1ESxlcNrGJPWx--NdlFbMdZJNQ3mHWVKQ-HktIVOJBVY/edit?usp=sharing",
        feedbackForm: "https://forms.gle/rNroPXhu2mFSxcHx8",
        market: "",
        githubMarket: ""
      },
      {
        email: "23a_dii@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Демидчук Ілля",
        game: "",
        githubGame: "https://github.com/zxcursed2008/Phaser2ndGame",
        pagesGame: "https://zxcursed2008.github.io/Phaser2ndGame/",
        driveGame: "https://drive.google.com/drive/folders/1BfaZ86pNTA3FO_rOn196XXKOLYNQQ81E",
        feedbackForm: "https://forms.gle/xs7rgVauTR9ryuNc7",
        market: "https://github.com/zxcursed2008/GameMarket_Demydchuk/",
        githubMarket: ""
      },
      {
        email: "23a_dyem@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Деркач Єлизавета",
        game: "Царівна жаба",
        githubGame: "https://github.com/liska228/Phaser2ndGame",
        pagesGame: "https://liska228.github.io/Phaser2ndGame/",
        driveGame: "https://drive.google.com/drive/folders/1uFrc-z8MnRAFvR7sPNM1NnN800TJOUfr",
        feedbackForm: "https://forms.gle/XDzvrjzJhjq758XFA",
        market: "https://github.com/liska228/GameMarket_Derkach-",
        githubMarket: "https://liska228.github.io/GameMarket_Derkach-/",
        pagesMarket: "https://liska228.github.io/GameMarket_Derkach-/market.html"
      },
      {
        email: "23a_yedv@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Євланов Данііл",
        game: "Пригоди Свинки Шмеппи 2",
        githubGame: "https://github.com/Scoxxy/Phaser2ndGame",
        pagesGame: "https://scoxxy.github.io/Phaser2ndGame/",
        driveGame: "https://drive.google.com/drive/folders/1IzTICIYe3e_rj81-ihjd3oDOz6xfSYQR?usp=drive_link",
        feedbackForm: "https://forms.gle/vWZ2hn9MopmMy5fc7",
        market: "https://github.com/Scoxxy/GameMarket_YevlanovDaniil",
        githubMarket: "https://scoxxy.github.io/GameMarket_YevlanovDaniil/",
        pagesMarket: "https://scoxxy.github.io/GameMarket_YevlanovDaniil/market.html"
      },
      {
        email: "23a_bks@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Катя Булич",
        game: "Червона відьма",
        githubGame: "https://github.com/katyablchh/Phaser2ndGame",
        pagesGame: "https://katyablchh.github.io/Phaser2ndGame/",
        driveGame: "https://drive.google.com/drive/folders/1bNoYv5ChnzJTrIq0fjekfbqMNjz4SZ40?usp=sharing",
        feedbackForm: "https://forms.gle/dxTCp9vfCCgZwyy97",
        market: "",
        githubMarket: "https://github.com/katyablchh/GameMarket_Bulych"
      },
      {
        email: "23a_kai@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Ковальов Андрій",
        game: "They alive",
        githubGame: "https://github.com/Andre00785/Phaser1stGame",
        pagesGame: "https://github.com/Andre00785/Phaser1stGame/settings/pages",
        driveGame: "https://docs.google.com/document/d/1D1bRBFti1aHsr-ZAqkfDkK9tdEeOpkM26E9qyWCE8O0/edit?usp=sharing",
        feedbackForm: "https://forms.gle/i7YyjwzaHp7QvXei8",
        market: "https://github.com/Andre00785/Game_Market_Kovalev",
        githubMarket: "https://andre00785.github.io/Game_Market_Kovalev/",
        pagesMarket: "https://andre00785.github.io/Game_Market_Kovalev/market.html"
      },
      {
        email: "23a_kyuk@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Кожанов Юрій",
        game: "Catventure",
        githubGame: "https://github.com/kyuk278937/Catventure",
        driveGame: "https://drive.google.com/drive/folders/1GM-292zUzJSJlIB4-4_CIoOsHalliizh?usp=sharing",
        feedbackForm: "https://forms.gle/NN9okEBmpsLw3AmX8",
        market: "https://github.com/kyuk278937/GameMarket",
        githubMarket: "https://kyuk278937.github.io/GameMarket/"
      },
      {
        email: "23a_kmo@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Козлюк Марина",
        game: "Пригоди червоної шапочки",
        githubGame: "https://github.com/Marykozl/Phaser2ndGame",
        pagesGame: "https://marykozl.github.io/Phaser2ndGame/",
        driveGame: "https://drive.google.com/drive/folders/1AZzV2iit4QmQfotZM68HmWo4OjG-5ikO",
        feedbackForm: "https://forms.gle/PdXpRXZrbn9ujeMH7",
        market: "https://github.com/Marykozl/GameMarket_Kozlyuk?hl=ru&authuser=0",
        githubMarket: "https://marykozl.github.io/GameMarket_Kozlyuk/",
        pagesMarket: "https://marykozl.github.io/GameMarket_Kozlyuk/market.html"
      },
      {
        email: "23a_kia@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Кравчук Іван",
        game: "Пригоди Свиноти",
        githubGame: "https://github.com/maskenissen1/Phaser2ndGame-1",
        pagesGame: "https://maskenissen1.github.io/Phaser2ndGame-1/",
        driveGame: "https://drive.google.com/drive/folders/1_qC1jSGlqtfs16m1_nriWvomLg51Ah25",
        feedbackForm: "https://forms.gle/S2YEZ1dn7tYTkrbF6",
        market: "https://github.com/maskenissen1/GameMarket_Kravchuk",
        githubMarket: "https://maskenissen1.github.io/GameMarket_Kravchuk/",
        pagesMarket: "https://maskenissen1.github.io/GameMarket_Kravchuk/market.html"
      },
      {
        email: "23a_lsa@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Лазаренко Софія",
        game: "Mavka",
        githubGame: "https://github.com/SofiaLazarenko/Phaser2ndGame?authuser=0",
        pagesGame: "https://sofialazarenko.github.io/Phaser2ndGame/?authuser=0",
        driveGame: "https://docs.google.com/document/d/1Dqe-8TcUA1YLj7mG-2IMBxHsPmlhkwfkEfrOTAb9Nvs/edit?usp=classroom_web&authuser=0",
        feedbackForm: "https://forms.gle/PgJv2LH1ZJjjS29V8",
        market: "https://github.com/SofiaLazarenko/GameMarket_Lazarenko?authuser=0",
        githubMarket: "https://sofialazarenko.github.io/GameMarket_Lazarenko/index.html",
        pagesMarket: "https://sofialazarenko.github.io/GameMarket_Lazarenko/n/market.html?authuser=0"
      },
      {
        email: "23a_kiv@liceum.ztu.edu.ua",
        class: "10-А 1",
        name: "Кайданюк Ілля",
        game: "Пригоди Свинки Шмеппи 3",
        githubGame: "https://github.com/Nefenix/Phaser2ndGame",
        pagesGame: "https://nefenix.github.io/Phaser2ndGame/",
        driveGame: "https://drive.google.com/drive/folders/1xlqWdx6uMj_5XWDlfl4EYZtAD6A8LGMq?usp=drive_link",
        feedbackForm: "https://forms.gle/e4camX4k2MZvK9qf7",
        market: "https://github.com/Nefenix/GameMarket_Kaidaniuk",
        githubMarket: "https://nefenix.github.io/GameMarket_Kaidaniuk/",
        pagesMarket: "https://nefenix.github.io/GameMarket_Kaidaniuk/market.html"
      },
];
console.log(itemsArray);
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
            <h2>${item.game}</h2>
            <p>${item.name}</p>
            <a href="${item.githubGame}" target="_blank">GitHub</a>
            <a href="${item.pagesGame}" target="_blank">Грати</a>
            <a href="${item.feedbackForm}" target="_blank">Відгук</a>
            <a href="${item.githubMarket}" target="_blank">Market</a>
            <img class="photo" src="" alt=${item.name + item.game}>
        </div>
        `
    });
} else {
    // Вивід повідомлення про не знайдений блок
    console.log("items not found!");
}
