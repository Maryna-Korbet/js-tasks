// *********** localStorage *************** \\

// const LS_KEY = 'Array of names';
// const names = ['Alice', 'Kate', 'Emma'];
// const user = {
//     name: 'Oksana',
//     city: 'Lviv',
// }

// //TODO: Add data to localStorage
// localStorage.setItem(LS_KEY, JSON.stringify(names));

// //TODO: Change data in localStorage
// localStorage.setItem(LS_KEY, JSON.stringify(user));

// //TODO: Read data from localStorage
// const value = localStorage.getItem(LS_KEY);
// console.log(value); //{"name":"Oksana","city":"Lviv"}
// console.log(typeof value); //string

// console.log(JSON.parse(value)); //{name: 'Oksana', city: 'Lviv'} city: "Lviv" name: "Oksana"[[Prototype]]: Object

// //TODO: Use try...catch
// const ERROR_KEY = 'Error';

// try {
//     const data = localStorage.setItem(ERROR_KEY, 'Hello world!');
//     console.log(data); // Hello world!
//     console.log(JSON.parse(data)); //undefind
// }
// catch(e){
//     console.log(e); //SyntaxError: "undefined" is not valid JSON
// }
// finally {
//     console.log('after all'); // whan use spinner
// }

// //TODO: Delate from localStorage
// localStorage.removeItem(LS_KEY);
// localStorage.removeItem(ERROR_KEY);

// //TODO: Delate all from localStorage
// localStorage.clear();


// ***********Difference between localStorage dnd sessionStorage*************** \\

// const btnLS = document.querySelector('.js-ls');
// const btnSS = document.querySelector('.js-ss');
// const btnClean = document.querySelector('.js-clean');

// btnLS.addEventListener('click', handlerLS);
// btnSS.addEventListener('click', handlerSS);
// btnClean.addEventListener('click', handlerClean);

// function handlerLS() {
//     localStorage.setItem('ls-name', 'add to local');
// }

// function handlerSS() {
//     sessionStorage.setItem('ss-name', 'add to session');
// }

// function handlerClean() {
//     localStorage.removeItem('ls-name');
//     sessionStorage.removeItem('ss-name');
// }


// ***********setTimeout*************** \\

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// console.time('for');
// for (let i = 0; i < 3000; i += 1) {
//     console.log("B");
// }
// console.timeEnd('for'); //for:23/202125 ms


// ***********setTimeout example*************** \\

// //TODO: Start setTimeout
// const idSetTimeout = setTimeout(() => { console.log('Time is over') }, 1000);
// console.log(idSetTimeout);

// //TODO: Delete setTimeout
// clearTimeout(idSetTimeout);
// console.log("deleted setTimeout");

// //TODO: callback
// const callback = setTimeout((name, country) => {
//     console.log(`Hello my name is ${name}, i from ${country}`);
// }, 1000, 'Alice', 'Ukrane');


// ***********setInterval example*************** \\

// //TODO: Start setInterval
// const idSetInterval= setInterval(() => { console.log('setInterval') }, 1000);

// //TODO: Delete setInterval
// clearInterval(idSetInterval);


// ***********Advertising*************** \\

//TODO: Створимо блок з рекламою яка зникне через 10 секунд

// const content = document.querySelector('.js-content');
// const text = document.querySelector('.js-text');

// let counter = 10;

// text.textContent = `Залишилося ${counter} секунд`;

// const id = setInterval(() => {
//     counter -= 1;
//     text.textContent = `Залишилося ${counter} секунд`;

//     if (!counter) {
//         content.style.display = 'none';
//         clearInterval(id);
//     }
// }, 1000);


// ***********class Date*************** \\

// //TODO: поточна дата та час
// const currentDate = new Date();
// console.log(currentDate);

// const targetDate = new Date('09/12/2023');
// console.log(targetDate);

// console.log(targetDate - currentDate); //-5904102445

// console.log(currentDate.getDate()); //19
// console.log(currentDate.getDay()); //0
// console.log(currentDate.getFullYear()); //2023
// console.log(currentDate.getMonth()); //10

// //TODO:Відобразити дату та час в форматі України
// console.log(currentDate.toLocaleTimeString('uk')); //07:10:40
// console.log(currentDate.toLocaleDateString('uk')); //19.11.2023


// ***********Clock*************** \\

//TODO: Потрібно створити два приклади годинника (Електронний та механічний)

// const arrDays = [
//   "Неділя",
//   "Понеділок",
//   "Вівторок",
//   "Середа",
//   "Четвер",
//   "П`ятниця",
//   "Субота",
// ];
// const namesOfMonth = [
//   "Січень",
//   "Лютий",
//   "Березень",
//   "Квітень",
//   "Травень",
//   "Червень",
//   "Липень",
//   "Серпень",
//   "Вересень",
//   "Жовтень",
//   "Листопад",
//   "Грудень",
// ];

// const elements = {
//   day: document.querySelector(".date-day"),
//   date: document.querySelector(".date"),
//   month: document.querySelector(".date-month"),
//   year: document.querySelector(".date-year"),

//   digital: document.querySelector(".digital-clock"),

//   hours: document.querySelector(".clock-hours__arrow"),
//   minutes: document.querySelector(".clock-minutes__arrow"),
//   seconds: document.querySelector(".clock-seconds__arrow"),
// };

// setInterval(() => {
//   const currentDate = new Date();
//   const day = arrDays[currentDate.getDay()];
//   const date = currentDate.getDate();
//   const month = namesOfMonth[currentDate.getMonth()];
//   const year = currentDate.getFullYear();

//   const time = currentDate.toLocaleTimeString("uk");

//   const hours = currentDate.getHours();
//   const minutes = currentDate.getMinutes();
//   const seconds = currentDate.getSeconds();

//   const secDeg = (360 / 60) * seconds;
//   const minutesDeg = (360 / 60) * minutes + (360 / 60 / 60) * seconds;
//   const hoursDeg = (360 / 12) * hours + (360 / 12 / 60) * minutes;
//   console.log(secDeg);

//   elements.day.textContent = day;
//   elements.date.textContent = date;
//   elements.month.textContent = month;
//   elements.year.textContent = year;
//   elements.digital.textContent = time;

//   elements.seconds.style.transform = `rotate(${secDeg}deg)`;
//   elements.minutes.style.transform = `rotate(${minutesDeg}deg)`;
//   elements.hours.style.transform = `rotate(${hoursDeg}deg)`;
// }, 1000);


// ***********Приклад роботи синхронного та асинхронного JS*************** \\

//TODO: В якій послідовності виконуються операції?

// console.log("A"); //1

// setTimeout(() => console.log("B"), 0); //4

// Promise.resolve("C").then((value) => console.log(value)); //3

// console.log("D"); //2

//*********Поділення асинхронного JS на мікро та макро процеси**************\\

// ?Мікро процеси \\
// Promise
// Observer

// ?Макро процеси\\
// setTimeout
// setInterval
// https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate
// setImmediate
// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
// requestAnimationFrame


//*********Приклад роботи синхронного та асинхронного JS**************\\

//TODO: Пронумеруй виклики методів відповідно до порядку їх виконання

// console.log("A"); //1

// setTimeout(() => console.log("B"), 0); //5

// Promise.reject("C").then((value) => console.log(value)).catch(err => console.log(err)); //4
// Promise.resolve("D").then((value) => console.log(value)); //3

// setTimeout(() => console.log("E"), 0); //6

// console.log("F"); //2


//*************** Promise *******************\\

// ?Створення Promise \\

// const promise = new Promise((resolve, reject) => {
//   const random = Math.random();

//   setTimeout(() => {
//     if (random > 0.5) {
//       resolve({name: '😻'});
//     }
//     else {
//       reject('😿');
//     }
//   }, 100);
// });

// console.log(promise);

// ?Обробка Promise \\

// promise
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => console.log("The End"));


// ?Обробка Promise  з двома then \\

// promise
//   .then((response) => {
//     console.log(response);
//     return response;
//   },
//     (err) => console.log("error in first then", err) //обовязково вказуємо
//   )
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => console.log("The End"));

