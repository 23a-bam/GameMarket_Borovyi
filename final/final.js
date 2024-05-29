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
    group: "10-А 1",
    studentName: "Боровий Артур",
    gameTitle: "Дід проти москалів",
    authorPhoto: "Боровий.jpg",
    gamePhoto: "Боровий гра.jpg",
    github: "https://github.com/23a-bam/Phaser2ndGame",
    githubPages: "https://23a-bam.github.io/Phaser2ndGame/",
    googleDrive: "https://drive.google.com/drive/folders/1A12wx0lfNj7Aef9KAw2CFMaDwhWM8V4Q?usp=sharing",
    surveyForm: "https://forms.gle/sS7tuJWJuGDjmHB98",
    gameMarketGithub: "https://github.com/23a-bam/GameMarket_Borovyi",
    gameMarketPages: "https://23a-bam.github.io/GameMarket_Borovyi/",
    marketPages: "https://23a-bam.github.io/GameMarket_Borovyi/market.html",
    finalMarketPage: "https://23a-bam.github.io/GameMarket_Borovyi/market.html"
},
{
    email: "23a_gki@liceum.ztu.edu.ua",
    group: "10-А 1",
    studentName: "Геча Кирило",
    gameTitle: "Магазин UkraineRog",
    authorPhoto: "Геча.jpg",
    gamePhoto: "",
    github: "https://github.com/Kyrylooo/GameMarket_Surname",
    githubPages: "https://github.com/Kyrylooo/GameMarket_Surname/settings/pages",
    googleDrive: "https://kyrylooo.github.io/Test1/",
    surveyForm: "https://kyrylooo.github.io/Test1/",
    gameMarketGithub: "https://github.com/Kyrylooo/Test1",
    gameMarketPages: "https://kyrylooo.github.io/Test1/",
    marketPages: "https://kyrylooo.github.io/Test1/",
    finalMarketPage: "https://kyrylooo.github.io/Test1/"
},
{
    email: "23a_gmo@liceum.ztu.edu.ua",
    group: "10-А 1",
    studentName: "Громова Марина",
    gameTitle: "Принцеса",
    authorPhoto: "Громова.jpg",
    gamePhoto: "Громова гра.jpg",
    github: "https://github.com/Marina745/Phaser2ndGame",
    githubPages: "https://marina745.github.io/Phaser2ndGame/",
    googleDrive: "https://drive.google.com/drive/folders/1h8T6v1Yt0wkzkiI72lSMMZndaidptT6o",
    surveyForm: "https://forms.gle/4tsVxrHtBpkLLmdc6",
    gameMarketGithub: "https://github.com/Marina745/GameMarket_Hromova/blob/main/market.js",
    gameMarketPages: "https://marina745.github.io/GameMarket_Hromova/market.html",
    marketPages: "",
    finalMarketPage: ""
},
{
    email: "23a_gayu@liceum.ztu.edu.ua",
    group: "10-А 1",
    studentName: "Гуменюк Аріна",
    gameTitle: "",
    authorPhoto: "Гуменюк.jpg",
    gamePhoto: "Гуменюк гра.jpg",
    github: "https://github.com/NoraBlank/-Phaser2ndGame?authuser=0",
    githubPages: "https://norablank.github.io/-Phaser2ndGame/?authuser=0",
    googleDrive: "https://docs.google.com/document/d/1ESxlcNrGJPWx--NdlFbMdZJNQ3mHWVKQ-HktIVOJBVY/edit?usp=sharing",
    surveyForm: "https://forms.gle/rNroPXhu2mFSxcHx8",
    gameMarketGithub: "",
    gameMarketPages: "",
    marketPages: "",
    finalMarketPage: ""
},
{
    email: "23a_dii@liceum.ztu.edu.ua",
    group: "10-А 1",
    studentName: "Демидчук Ілля",
    gameTitle: "Дід Мороз Альбатрос",
    authorPhoto: "Демидчук.jpg",
    gamePhoto: "Демидчук гра.jpg",
    github: "https://github.com/zxcursed2008/Phaser2ndGame",
    githubPages: "https://zxcursed2008.github.io/Phaser2ndGame/",
    googleDrive: "https://drive.google.com/drive/folders/1BfaZ86pNTA3FO_rOn196XXKOLYNQQ81E",
    surveyForm: "https://forms.gle/xs7rgVauTR9ryuNc7",
    gameMarketGithub: "https://github.com/zxcursed2008/GameMarket_Demydchuk/",
    gameMarketPages: "https://zxcursed2008.github.io/GameMarket_Demydchuk/",
    marketPages: "https://zxcursed2008.github.io/GameMarket_Demydchuk/market.html",
    finalMarketPage: "https://zxcursed2008.github.io/GameMarket_Demydchuk/Final_GameMarket/market.html"
},
{
    email: "23a_dyem@liceum.ztu.edu.ua",
    group: "10-А 1",
    studentName: "Деркач Єлизавета",
    gameTitle: "Царівна жаба",
    authorPhoto: "Деркач.jpg",
    gamePhoto: "Деркач гра.jpg",
    github: "https://github.com/liska228/Phaser2ndGame",
    githubPages: "https://liska228.github.io/Phaser2ndGame/",
    googleDrive: "https://drive.google.com/drive/folders/1uFrc-z8MnRAFvR7sPNM1NnN800TJOUfr",
    surveyForm: "https://forms.gle/XDzvrjzJhjq758XFA",
    gameMarketGithub: "https://github.com/liska228/GameMarket_Derkach-",
    gameMarketPages: "https://liska228.github.io/GameMarket_Derkach-/",
    marketPages: "https://liska228.github.io/GameMarket_Derkach-/market.html",
    finalMarketPage: "https://liska228.github.io/GameMarket_Derkach-/final.market.html/market.html"
},
{
    email: "23a_yedv@liceum.ztu.edu.ua",
    group: "10-А 1",
    studentName: "Євланов Данііл",
    gameTitle: "Пригоди Свинки Шмеппи 2",
    authorPhoto: "Євланов.jpg",
    gamePhoto: "Євланов гра.jpg",
    github: "https://github.com/Scoxxy/Phaser2ndGame",
    githubPages: "https://scoxxy.github.io/Phaser2ndGame/",
    googleDrive: "https://drive.google.com/drive/folders/1IzTICIYe3e_rj81-ihjd3oDOz6xfSYQR?usp=drive_",
    surveyForm: "https://forms.gle/vWZ2hn9MopmMy5fc7",
    gameMarketGithub: "https://github.com/Scoxxy/GameMarket_YevlanovDaniil",
    gameMarketPages: "https://scoxxy.github.io/GameMarket_YevlanovDaniil/",
    marketPages: "https://scoxxy.github.io/GameMarket_YevlanovDaniil/market.html",
    finalMarketPage: "https://scoxxy.github.io/GameMarket_YevlanovDaniil/FInal-gamemarket/market.html"
},
{
    email: "23a_bks@liceum.ztu.edu.ua",
    group: "10-А 1",
    studentName: "Катя Булич",
    gameTitle: "Червона відьма",
    authorPhoto: "Булич.jpg",
    gamePhoto: "Булич гра.jpg",
    github: "https://github.com/katyablchh/Phaser2ndGame",
    githubPages: "https://katyablchh.github.io/Phaser2ndGame/",
    googleDrive: "https://drive.google.com/drive/folders/1bNoYv5ChnzJTrIq0fjekfbqMNjz4SZ40?usp=sharing",
    surveyForm: "https://forms.gle/dxTCp9vfCCgZwyy97",
    gameMarketGithub: "https://katyablchh.github.io/Phaser2ndGame/",
    gameMarketPages: "https://katyablchh.github.io/Phaser2ndGame/",
    marketPages: "https://github.com/katyablchh/GameMarket_Bulych",
    finalMarketPage: "https://katyablchh.github.io/GameMarket_Bulych/finalgamemarket/market.html"
},
{
    email: "23a_kai@liceum.ztu.edu.ua",
    group: "10-А 1",
    studentName: "Ковальов Андрій",
    gameTitle: "They alive",
    authorPhoto: "Ковальов.jpg",
    gamePhoto: "",
    github: "https://github.com/Andre00785/Phaser1stGame",
    githubPages: "https://github.com/Andre00785/Phaser1stGame/settings/pages",
    googleDrive: "https://docs.google.com/document/d/1D1bRBFti1aHsr-ZAqkfDkK9tdEeOpkM26E9qyWCE8O0/edit?usp=sharing",
    surveyForm: "https://forms.gle/i7YyjwzaHp7QvXei8",
    gameMarketGithub: "https://github.com/Andre00785/Game_Market_Kovalev",
    gameMarketPages: "https://andre00785.github.io/Game_Market_Kovalev/",
    marketPages: "https://andre00785.github.io/Game_Market_Kovalev/market.html",
    finalMarketPage: "https://andre00785.github.io/Game_Market_Kovalev/Final_hour/Gamemarket.html"
},
{
  email: "23a_kyuk@liceum.ztu.edu.ua",
  group: "10-А 1",
  studentName: "Кожанов Юрій",
  gameTitle: "Catventure",
  authorPhoto: "Кожанов.jpg",
  gamePhoto: "",
  github: "https://github.com/kyuk278937/Catventure",
  githubPages: "https://drive.google.com/drive/folders/1GM-292zUzJSJlIB4-4_CIoOsHalliizh?usp=sharing",
  googleDrive: "https://drive.google.com/drive/folders/1GM-292zUzJSJlIB4-4_CIoOsHalliizh?usp=sharing",
  surveyForm: "https://forms.gle/NN9okEBmpsLw3AmX8",
  gameMarketGithub: "https://github.com/kyuk278937/GameMarket",
  gameMarketPages: "https://kyuk278937.github.io/GameMarket/",
  marketPages: "https://kyuk278937.github.io/-HomeAppliancesStore/",
  finalMarketPage: "https://kyuk278937.github.io/StudentGame/"
},
{
  email: "23a_kmo@liceum.ztu.edu.ua",
  group: "10-А 1",
  studentName: "Козлюк Марина",
  gameTitle: "Пригоди червоної шапочки",
  authorPhoto: "Козлюк.jpg",
  gamePhoto: "Козлюк гра.jpg",
  github: "https://github.com/Marykozl/Phaser2ndGame",
  githubPages: "https://marykozl.github.io/Phaser2ndGame/",
  googleDrive: "https://drive.google.com/drive/folders/1AZzV2iit4QmQfotZM68HmWo4OjG-5ikO",
  surveyForm: "https://forms.gle/PdXpRXZrbn9ujeMH7",
  gameMarketGithub: "https://github.com/Marykozl/GameMarket_Kozlyuk?hl=ru&authuser=0",
  gameMarketPages: "https://marykozl.github.io/GameMarket_Kozlyuk/",
  marketPages: "https://marykozl.github.io/GameMarket_Kozlyuk/market.html",
  finalMarketPage: "https://marykozl.github.io/GameMarket_Kozlyuk/final/market.html"
},
{
  email: "23a_kia@liceum.ztu.edu.ua",
  group: "10-А 1",
  studentName: "Кравчук Іван",
  gameTitle: "Пригоди Свиноти",
  authorPhoto: "Кравчук.jpg",
  gamePhoto: "Кравчук гра.jpg",
  github: "https://github.com/maskenissen1/Phaser2ndGame-1",
  githubPages: "https://maskenissen1.github.io/Phaser2ndGame-1/",
  googleDrive: "https://drive.google.com/drive/folders/1_qC1jSGlqtfs16m1_nriWvomLg51Ah25",
  surveyForm: "https://forms.gle/S2YEZ1dn7tYTkrbF6",
  gameMarketGithub: "https://github.com/maskenissen1/GameMarket_Kravchuk",
  gameMarketPages: "https://maskenissen1.github.io/GameMarket_Kravchuk/",
  marketPages: "https://maskenissen1.github.io/GameMarket_Kravchuk/market.html",
  finalMarketPage: "https://maskenissen1.github.io/GameMarket_Kravchuk/Final-gamemarket/market.html"
},
{
  email: "23a_lsa@liceum.ztu.edu.ua",
  group: "10-А 1",
  studentName: "Лазаренко Софія",
  gameTitle: "Mavka",
  authorPhoto: "Лазаренко.jpg",
  gamePhoto: "Лазаренко гра.jpg",
  github: "https://github.com/SofiaLazarenko/Phaser2ndGame?authuser=0",
  githubPages: "https://sofialazarenko.github.io/Phaser2ndGame/?authuser=0",
  googleDrive: "https://docs.google.com/document/d/1Dqe-8TcUA1YLj7mG-2IMBxHsPmlhkwfkEfrOTAb9Nvs/edit?usp=classroom_web&authuser=0",
  surveyForm: "https://forms.gle/PgJv2LH1ZJjjS29V8",
  gameMarketGithub: "https://github.com/SofiaLazarenko/GameMarket_Lazarenko?authuser=0",
  gameMarketPages: "https://sofialazarenko.github.io/GameMarket_Lazarenko/index.html",
  marketPages: "https://sofialazarenko.github.io/GameMarket_Lazarenko/n/market.html?authuser=0",
  finalMarketPage: "https://sofialazarenko.github.io/GameMarket_Lazarenko/Final/final.html"
},
{
  email: "23a_kiv@liceum.ztu.edu.ua",
  group: "10-А 1",
  studentName: "Кайданюк Ілля",
  gameTitle: "Пригоди Свинки Шмеппи 3",
  authorPhoto: "Кайданюк.jpg",
  gamePhoto: "Кайданюк гра.jpg",
  github: "https://github.com/Nefenix/Phaser2ndGame",
  githubPages: "https://nefenix.github.io/Phaser2ndGame/",
  googleDrive: "https://drive.google.com/drive/folders/1xlqWdx6uMj_5XWDlfl4EYZtAD6A8LGMq?usp=drive_",
  surveyForm: "https://forms.gle/e4camX4k2MZvK9qf7",
  gameMarketGithub: "https://github.com/Nefenix/GameMarket_Kaidaniuk",
  gameMarketPages: "https://nefenix.github.io/GameMarket_Kaidaniuk/",
  marketPages: "https://nefenix.github.io/GameMarket_Kaidaniuk/market.html",
  finalMarketPage: "https://nefenix.github.io/GameMarket_Kaidaniuk/Final-GameMarket/market.html"
},
{
  email: "23a_mvp@liceum.ztu.edu.ua",
  group: "10-А 1",
  studentName: "Марценюк Вадим",
  gameTitle: "Win to Survive",
  authorPhoto: "Марценюк.jpg",
  gamePhoto: "Марценюк гра.jpg",
  github: "https://github.com/JokerBrando/Phaser1stGame",
  githubPages: "https://jokerbrando.github.io/Phaser1stGame/",
  googleDrive: "https://docs.google.com/document/d/1IsOcb3t2cARhpDgYS-dLoLIk3PGzBkk5SObT-1cRxzc/edit?usp=classroom_web&authuser=0",
  surveyForm: "https://forms.gle/s9RA2QcpfpFsY3Mt9?authuser=0",
  gameMarketGithub: "https://github.com/JokerBrando/GameMarket_Martseniuk_Vadym",
  gameMarketPages: "https://jokerbrando.github.io/GameMarket_Martseniuk_Vadym/",
  marketPages: "https://jokerbrando.github.io/GameMarket_Martseniuk_Vadym/market.html",
  finalMarketPage: "https://jokerbrando.github.io/GameMarket_Martseniuk_Vadym/final%20market/market1.html"
}
];
console.log(itemsArray);
// Перевірка існування знайденого блоку
if (itemsDiv) {
    itemsArray.forEach((item, index) => {
        itemsDiv.innerHTML +=
        `
        <div class = "item">
            <h2>${item.gameTitle}</h2>
            <p>${item.studentName}</p>
            <div class="photos">
            <img class="photo" src="img/${item.authorPhoto}" alt=${item.name + item.game}>
            <img class="photo" src="img/${item.gamePhoto}">
            </div>
            <a href="${item.github}" target="_blank">GitHub</a>
            <a href="${item.githubPages}" target="_blank">Грати</a>
            <a href="${item.surveyForm}" target="_blank">Відгук</a>
            <a href="${item.gameMarketPages}" target="_blank">Market</a>
        </div>
        `
    });
} else {
    // Вивід повідомлення про не знайдений блок
    console.log("items not found!");
}
