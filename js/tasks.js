// Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.

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

// 1. Створюємо функцію;
// 2. Відфільтрувати масив, щоб знайти студентів, які вивчають відповідний язик програмування;
// 3. Перебрати масив методом Map

// Віріант 1
// const findUsersByLanguege = (users, language) => {

//     return users
//         .filter((user) => user.language === language)
//         .map(user => user.name);
// }

// console.log(findUsersByLanguege(students, "js"));

// Варіант 2
// const findUsersByLanguege = (arrStunents, language) => {
//     return arrStunents.reduce((acc, { language: lan, name }) => {
//         if (language === lan) {
//             acc.push(name);
//         }

//         return acc;
//     }, []);
// };

// console.log(findUsersByLanguege(students, "js"));




// =========================================================================

// Створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.

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



// =========================================================================

// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив
// Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати
// а ті обє'кти в яких айді співпав видалити з масиву.
// (Потрібно мутувати масив, створювати новий не потрібно)

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

// Віріант 1: Перебираємо цикл з гори до низу
    
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

// Віріант 2: Рухаємося назустріч

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


// =========================================================================

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

// // Потрібно створити функцію яка буде виводи кількість авто та їх список марок в ціновому діапазоні від мін до макс, формат стрінги

// const findCars = (cars, min, max) => {
//     const filtredCars = cars.filter(({ price }) => price >= min && price <= max);

//     return filtredCars.reduce((acc, { car, type }, idx) => { 
//         return acc + `${idx + 1}. ${car} ${type} \n`;
//     }, filtredCars.length
//         ? `Кількість знайдених фвтомобілів ${filtredCars.length}: \n`
//         : `Вибачте але за вашим пошуком жодного авто не було знайдено`);
// }

// console.log(findCars(cars, 7000, 9000));


