// ?================================Students=========================================

// TODO: Створити функцію яка буде приймати 2 параметра.
// TODO: 1 Масив студентів.
// TODO: 2 Мову програмування яку потрібно знайти.
// TODO: Функція повертає масив імен користувачів які вивчають цю мову.

// const students = [{
//     name: `Den`,
//     language: `html`

// }, {
//     name: `Petro`,
//     language: `css`

// }, {
//     name: `Egor`,
//     language: `js`

// }, {
//     name: `Max`,
//     language: `html`

// }, {
//     name: `Olga`,
//     language: `css`

// }, {
//     name: `Kate`,
//     language: `js`

// }, {
//     name: `Ivan`,
//     language: `html`

//     },];

// ? 1. Створюємо функцію;
// ? 2. Відфільтрувати масив, щоб знайти студентів, які вивчають відповідний язик програмування;
// ? 3. Перебрати масив методом Map

// ! Віріант 1
// const findUsersByLanguege = (users, language) => {

//     return users
//         .filter((user) => user.language === language)
//         .map(user => user.name);
// }

// console.log(findUsersByLanguege(students, "js"));

// ! Варіант 2
// const findUsersByLanguege = (arrStunents, language) => {
//     return arrStunents.reduce((acc, { language: lan, name }) => {
//         if (language === lan) {
//             acc.push(name);
//         }

//         return acc;
//     }, []);
// };

// console.log(findUsersByLanguege(students, "js"));




// ?================================Narcis=========================================

// TODO: Створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.

// const people1 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
//     {
//         name: 'Eva',
//         know: ['Alex','Jhon']
//     },
//     {
//         name: 'Jhon',
//         know: ['Alex']
//     },
// ] //Not found

// const people2 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: []
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];// Not found

// const people3 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon']
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ]; // Jhon

// // 1. Шукаємо того, хто не знає нікого;
// // 2. Перебираємо тихто, кого знайшли і шукаємо того, кого знають всі;

// function getNarcis(arr) {
//     const findWhoKnowAnyone = arr.filter(({ know }) => !know.length);
//     if (findWhoKnowAnyone.length !== 1) {
//         return 'Not found';
//     }
//     const narcis = findWhoKnowAnyone[0]['name'];

//     // Перевіряємо чи знають всі знайденого нарциса
//     const isNarcis = arr.every((people) => people.know.includes(narcis) || people.name === narcis);

//     return  isNarcis ? narcis : 'Not found';
// }

// console.log(getNarcis(people3));



// ?================================Products=========================================

// TODO: Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// TODO: Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// TODO: а ті обє'кти в яких айді співпав видалити з масиву.
// TODO: (Потрібно мутувати масив, створювати новий не потрібно)

// const products = [{
//     id: 'sku1',
//     qty: 1,
// }, {
//     id: 'sku2',
//     qty: 2,
// }, {
//     id: 'sku3',
//     qty: 3,
// }, {
//     id: 'sku1',
//     qty: 6,
// }, {
//     id: 'sku1',
//     qty: 8,
// }, {
//     id: 'sku2',
//     qty: 19,
// }, {
//     id: 'sku4',
//     qty: 1,
//     }]

// !Віріант 1: Перебираємо цикл з гори до низу
    
// for (let i = 0; i < products.length; i += 1) {
    
//     for (let j = i + 1; j < products.length; j += 1) {
//         if (products[i].id === products[j].id) {
//             products[i].qty += products[j].qty;

//             products.splice(j, 1);

//             j -= 1;
//         }
//     }
// }

// console.log('products', products);

// !Віріант 2: Рухаємося назустріч

// Перевіряємо продуктивність виконання
// let counter = 0;
// console.time('start');

// for (let i = 0; i < products.length; i += 1) {
//     for (let j = (products.length - 1); i < j; j -= 1){
//         if (products[i].id === products[j].id) {
//             products[i].qty += products[j].qty;
//             products.splice(j, 1);
//         }
//     }
//     // Перевіряємо продуктивність виконання
//     // counter += 1;
// }

// console.log('products', products);

// // Перевіряємо продуктивність виконання
// // console.timeEnd('start');
// // console.log('counter', counter);

// // Варіант2 буде програватися набагато швидше


// ?===============================Find cars==========================================

// const cars = [{
//         car: "Honda",
//         type: "Civic",
//         price: 12000,
//     },
//     {
//         car: "Audi",
//         type: "Q7",
//         price: 40000,
//     },
//     {
//         car: "BMW",
//         type: "5 siries",
//         price: 9000,
//     },
//     {
//         car: "Honda",
//         type: "Accord",
//         price: 20000,
//     },
//     {
//         car: "Volvo",
//         type: "XC60",
//         price: 7000,
//     },
// ];

// TODO: Потрібно створити функцію яка буде виводи кількість авто та їх список марок в ціновому діапазоні від мін до макс, формат стрінги

// const findCars = (cars, min, max) => {
//     const filtredCars = cars.filter(({ price }) => price >= min && price <= max);

//     return filtredCars.reduce((acc, { car, type }, idx) => {
//         return acc + `${idx + 1}. ${car} ${type} \n`;
//     }, filtredCars.length
//         ? `Кількість знайдених фвтомобілів ${filtredCars.length}: \n`
//         : `Вибачте але за вашим пошуком жодного авто не було знайдено`);
// }

// console.log(findCars(cars, 7000, 9000));



// ?===================================convertTo======================================

// TODO:  Створіть клас "Валюта"
// TODO:  Властивості класу:

// TODO:  code: Рядок, який представляє код валюти (наприклад, "USD" для долара США).
// TODO:  name: Рядок, який представляє назву валюти (наприклад, "Долар США").
// TODO:  symbol: Рядок, який містить символ валюти (наприклад, "$").

// TODO:  Створи метод класу convertTo(amount, targetCurrency)
// TODO:  Метод, який конвертує вказану суму з поточної валюти в цільову валюту

// TODO:  Створи форму "Додати валюти", форма має містити поля які необхідно додати до класу.
// TODO: Після сабміту форми створи картку з даною

// class Сurrency {
//     constructor ({code, name, sumbol, exchangeRate}){
//         this.code = code;
//         this.name = name;
//         this.sumbol = sumbol;
//         this.exchangeRate = Number(exchangeRate);
//     }

//     convertTo(amount, targetCurrency) {
//         if (targetCurrency instanceof Сurrency) {
//             return (Number(amount) * (this.exchangeRate / targetCurrency.exchangeRate)).toFixed(2);
//         }
//     }
// }

// const usd = new Сurrency("USA", "Долар США", "$", 1);
// const eur = new Сurrency("EUR", "Євро", "€", 1.1);

// // console.log(usd.convertTo(100, eur));

// const refs = {
//     form: document.querySelector(".js-form"),
//     list: document.querySelector(".js-list"),

//     formConvert: document.querySelector(".js-convert"),
//     text: document.querySelector(".js-text"),
//     from: document.querySelector(".js-from"),
//     to: document.querySelector(".js-to"),
// }

// refs.form.addEventListener("submit", handlerSubmit);
// const resultArray = [];

// refs.formConvert.addEventListener("submit", handlerConvert);

// function handlerSubmit(e) {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);

//     const currency = {}

//     formData.forEach((value, key) => {
//         currency[key] = value;
//     })
//     /* console.log("currency --->", currency) */
//     resultArray.push(new Сurrency(currency));
//     /* console.log("resultArray --->", resultArray); */
//     refs.list.innerHTML = createMarkup(resultArray);

//     const option = addOption(currency.code);
//     refs.from.insertAdjacentHTML("beforeend", option);
//     refs.to.insertAdjacentHTML("beforeend", option);

//     e.currentTarget.reset();
// }

// TODO: Створи блок конвертування валюти блок містить два тега селект з якої валюти в яку конвертувати і
// TODO:інпут для введення суми конвертації

// function createMarkup(arr) {
//     return arr.map(({ code, name, sumbol }) => {
//         return `<li>
//         <p>Code: ${code}</p>
//         <p>Name: ${name}</p>
//         <p>Sumbol: ${sumbol}</p>
//         </li>`
//     }).join("");
// }

// //? USD", "Долар США", "$", 1
// //? "EUR", "Євро", "€", 0.9

// function addOption(code) {
//     return `<option value ="${code}">${code}</option>`
// }

// function handlerConvert(e) {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);

//     const data = {};

//     formData.forEach((value, key) => {
//         data[key] = value;
//     })

//     console.log("data--->", data);
//     console.log("resultArray--->", resultArray);

//     const from = resultArray.find(({ code }) => code === data.from);

//     const to = resultArray.find(({ code }) => code === data.to);

//     const result = from.convertTo(data.amount, to);
//     refs.text.textContent = result;

//     e.currentTarget.reset();
// }

// ?======================================CARS===================================

// TODO: Потрібно створити розмітку з картками автомобілів.
// TODO: Для створення розмітки використовуй масив cars.

// const cars = [
//   {
//     id: 1,
//     model: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     id: 2,
//     model: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     id: 3,
//     model: "BMW",
//     type: "5 series",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     id: 4,
//     model: "Honda",
//     type: "Accord",
//     price: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     id: 5,
//     model: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];

// ! Варіант-1
// TODO: Створи розмітку використовуючи метод createElement

// const carsList = document.querySelector(".js-cars-list");

// function createMarkup(arr) {
//     const markup = arr.map(({ id, model, type, price, img }) => {
//         const li = document.createElement("li");
//         const imgEl = document.createElement("img");
//         const h2 = document.createElement("h2");
//         const h3 = document.createElement("h3");
//         const span = document.createElement("span");
        
//         li.style.listStyle = 'none';
//         li.style.marginBottom = '100px';

//         imgEl.src = img;
//         imgEl.alt = model;
//         imgEl.style.width = '300px';

//         h2.textContent = model;
//         h3.textContent = type;
//         span.textContent = price;

//         li.append(imgEl, h2, h3, span);

//         return li;
//     });

//     carsList.append(...markup);
// }

// createMarkup(cars);

// ! Варіант-2
// TODO: Створи розмітку використовуючи приклад шаблонної розмітки

// const carsList = document.querySelector(".js-cars-list");

// function createMarkup(arr) {
//     const markup = arr.map(({ id, model, type, price, img }) =>
//         `<li data-car-id="${id}" class="css-cars">
//         <img src="${img}" alt="${model}" width="300"/>
//         <h2>${model}</h2>
//         <h3>${type}</h3>
//         <span>${price}</span>
//     </li>`).join("");

//     carsList.insertAdjacentHTML('afterbegin', markup)
// }

// createMarkup(cars);

// ?====================================Click=====================================

// TODO: Натискаючи на кнопку "Click me" змусь червоний квадратик зміщуватись на 50px по діагоналі.

// const clickMe = document.querySelector('.js-click');
// const box = document.querySelector('.js-box');

// clickMe.addEventListener('click', handlerClick);

// let step = 0;

// function handlerClick(e) {
//     step += 50;
//     box.style.marginTop = `${step}px`;
//     box.style.marginLeft = `${step}px`;
// }

// ?=====================================Input/blur====================================

// TODO: Виводь в консоль все що користувач вводить в input

// const input = document.querySelector('.js-user-name');

// input.addEventListener('input', handlerInput);

// function handlerInput(e) {
//     console.log(e.currentTarget.value);
// };

// TODO: Користувач вводить в input своє ім'я після втрати фокусу отримує alert з вітальним повідомленням

// const input = document.querySelector('.js-user-name');

// input.addEventListener('blur', handlerGreeting);

// function handlerGreeting(e) {
//     const name = e.currentTarget.value;
//     alert(`${name}, I\`m vary glad to see you`);
// }

// ?=====================================Submit====================================

// Опрацюй форму та збери фідбек користувача в об'єкт

// ! Варіант-1 (недолік - важко маштабувати)
// const form = document.querySelector('.js-form');

// form.addEventListener("submit", handlerSubmit);

// function handlerSubmit(e) {
//     e.preventDefault();
//     /* console.dir(e.currentTarget); */

//     const { name, email, password, comment } = e.currentTarget.elements;

//     const data = {
//         name: name.value,
//         email: email.value,
//         password: password.value,
//         comment: comment.value,
//     };

//     console.log(data);
// }

// ! Варіант-2 (легко маштабувати, але потрібно слідкувати, щоб поля форми мали name)
// const form = document.querySelector('.js-form');

// form.addEventListener("submit", handlerSubmit);

// function handlerSubmit(e) {
//     e.preventDefault();

//     const formData = new FormData(e.currentTarget);

//     const data = {};

//     formData.forEach((value, name) => {
//         data[name] = value;
//     });

//     console.log(data);
// }

// ?=====================================keydown / keyup / keypress====================================

// "keydown" спрацьовує, коли наша клавіша опускається донизу, опрацьовує як і звичайні, так і системні клавіши, так як ESC, CTRL, ALT;
// "keydown" спрацьовує, коли наша клавіша підіймається догори, опрацьовує як і звичайні, так і системні клавіши, так як ESC, CTRL, ALT;
// "keypress" спрацьовує, коли наша клавіша опускається донизу, але не опрацьовує звичайні і системні клавіши, так як ESC, CTRL, ALT;

// document.addEventListener("keydown", handlerKey);

// function handlerKey(e) {
//     console.log(e.code);

//     //! Варіант-1
//     if (e.code === 'Escape') {
//         console.log('🙂');
//     }

//     //! Варіант-2
//     switch (e.code) {
//         case 'Escape':
//             console.log('😇');
//             break;
//         case 'KeyA':
//             console.log('🤟');
//             break;
//         default:
//             console.log('😿')
//     }
// }

// ?=====================================Обробка комбінацій клавіш====================================

// Напиши код заборони копіювати Hello world

// document.addEventListener("keydown", hendlerKey);

// function hendlerKey(e) {
//     console.log(e.code);

//     if (e.ctrlKey && e.code === "KeyC") {
//         e.preventDefault();
//     }
// }


// ?=====================================Cars search====================================

// TODO: Реалізуй пошук автомобілів по сайту
// TODO:  Користувач потрапляє на сайт і одразу бачить форму для пошуку і картки всіх автомобілів (масив cars)
// TODO:  Користувач може ввести в форму назву Марки або Моделі авто і в тегу селект обрати що він ввів Марку або Модель (https://prnt.sc/PkkZZRy_ggtT)
// TODO:  Після натискання кнопки пошуку (сабміт форми) відмалюй авто які збігаються з критеріями пошуку

// const cars = [
//   {
//     id: 1,
//     car: "Audi",
//     type: "A6",
//     price: 30000,
//     img: "https://static.wixstatic.com/media/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg/v1/fill/w_520,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/90aeac_387e937e295a4f8586d9ff9d09b60cff~mv2.jpg",
//   },
//   {
//     id: 2,
//     car: "Honda",
//     type: "Civic",
//     price: 12000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
//   },
//   {
//     id: 3,
//     car: "Audi",
//     type: "Q7",
//     price: 40000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
//   },
//   {
//     id: 4,
//     car: "BMW",
//     type: "5 siries",
//     price: 9000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
//   },
//   {
//     id: 5,
//     car: "Honda",
//     type: "Accord",
//     price: 20000,
//     number: "+380000000000",
//     img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
//   },
//   {
//     id: 6,
//     car: "Volvo",
//     type: "XC60",
//     price: 7000,
//     img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
//   },
// ];

// const refs = {
//   form: document.querySelector(".js-form"),
//   list: document.querySelector(".js-list"),
// };

// function createMarkup(arr) {
//     return arr.map(({ id, car, type, price, img }) =>
//         `<li class="car-card" id="${id}">
//         <img class="car-image" src="${img}" alt="${car}" />
//         <h2 class="car-title">${car}</h2>
//         <h2 class="car-type">${type}</h2>
//         <p class="car-price">${price}</p>
//         </li>`
//     ).join("");
// }
// refs.list.insertAdjacentHTML("afterbegin", createMarkup(cars));

// refs.form.addEventListener('submit', hendlerSearch);

// function hendlerSearch(e) {
//     e.preventDefault();

//     const { query, options } = e.currentTarget.elements;
    
//     const result = cars.filter(() => {

//     })
// }

