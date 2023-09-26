// ====================Оголошення змінних====================

// 1) Змінні, оголошені як const, обов'язково повинні бути ініціалізовані значенням під час оголошення, інакше виникне помилка.

// const yearOfBirth = 2006;
// console.log(yearOfBirth); // 2006
// _____________________________________________________________

// 2) Якщо зміна оголошена як const, перезаписати її значення не можна.При спробі присвоїти нове значення, виникне помилка виконання скрипту.

// yearOfBirth = 2020; //error
// _____________________________________________________________

// 3) Змінним, оголошеним через let, не обов'язково одразу присвоювати значення. Якщо змінній, оголошеній як let, не було присвоєно значення, вона ініціалізується спеціальним значенням undefined (не визначено).

// let age;
// console.log(age); // undefined
// _____________________________________________________________

// 4) Імена КОНСТАНТ - змінних, значення яких не змінюється ніколи впродовж роботи всього скрипту, як правило, записуються у форматі UPPER_SNAKE_CASE.

// const LOGIN_SUCCESS_MESSAGE = "Ласкаво просимо!";
// console.log(LOGIN_SUCCESS_MESSAGE); //Ласкаво просимо!
// _____________________________________________________________

// 5) Невизначена (undefined) - це змінна, яка була оголошена ключовим словом let, але не ініціалізована значенням. За замовчуванням їй присвоюється початкове значення undefined.

// let username;
// console.log(username); // undefined
// _____________________________________________________________

// 6) Неоголошена (undeclared або not defined) - це змінна, яка не була оголошена в доступній області видимості. Спроба звернутися до змінної до її оголошення призведе до помилки. Наприклад, щоб прочитати або змінити її значення.

// Неправильно, буде помилка:
// age = 15; // ReferenceError: Cannot access 'age' before initialization
// console.log(age); // ReferenceError: age is not defined

// Правильно, звертаємось після оголошення:
// let age = 20;
// age = 25;
// console.log(age); // 25
// _____________________________________________________________

// 7) Оператор typeof використовується для отримання типу значення змінної.

// let username;
// console.log(typeof username); // "undefined"

// let inputValue = null;
// console.log(typeof inputValue); // "object"

// const quantity = 17;
// console.log(typeof quantity); // "number"

// const message = "JavaScript is awesome!";
// console.log(typeof message); // "string"

// const isSidebarOpen = false;
// console.log(typeof isSidebarOpen); // "boolean"
// _____________________________________________________________



// ====================Взаємодія з користувачем====================

// 1) Виведення даних.
//    Для виведення даних існує два методи: console.log() і alert().

// const message = "JavaScript is awesome!";
// console.log(message); // JavaScript is awesome!

// Спочатку можна вказати будь-який описовий рядок, після чого поставити кому і вказати ім'я змінної.

// const username = "Mango";
// console.log("Username is ", username); // Username is Mango

// Метод alert() виводить модальне вікно, текст якого відповідає значенню змінної(або літерала), яку передаємо в дужках.

// const message = "JavaScript is awesome!";
// alert(message);
// _____________________________________________________________

// 2) Додаткові можливості:

// const foo = { id: 1, verified: true, color: 'green' };
// const bar = { id: 2, verified: false, color: 'red' };

// console.log(variable); //значення змінних без назв

// console.log({ foo, bar }); //значення змінних з назвами змінних

// console.table({ foo, bar }); //таблиця


// console.group('User Details');
// console.log('name: John Doe');
// console.log('job: Software Developer');
// // Nested Group
// console.group('Address');
// console.log('Street: 123 Townsend Street');
// console.log('City: San Francisco');
// console.log('State: CA');
// console.groupEnd();
// console.groupEnd(); // групування

// console.groupCollapsed(); // групи згорнуті за умовчанням


// console.warn(); // попередження

// console.error(); // помилка

// console.info(); // інформація


// Додати власний стиль. Ви також можете змінити font-size, font-styleта інші елементи CSS.

// console.log('%c Auth ',
//             'color: white; background-color: #2274A5',
//             'Login page rendered');
// console.log('%c GraphQL ',
//             'color: white; background-color: #95B46A',
//             'Get user details');
// console.log('%c Error ',
//             'color: white; background-color: #D33F49',
//             'Error getting user details');

// console.trace(); // виводить трасування стека на консоль і показує, як код опинився в певній точці. Є певні методи, які потрібно викликати лише один раз, як-от видалення з бази даних. console.trace()можна використовувати, щоб переконатися, що код поводиться так, як ми хочемо.


// let i = 0;
// console.time("While loop"); //визначати час певних операцій у коді для тестування
// while (i < 1000000) {
//   i++;
// }
// console.timeEnd("While loop");
// console.time("For loop");
// for (i = 0; i < 1000000; i++) {
//   // For Loop
// }
// console.timeEnd("For loop");
// _____________________________________________________________

// 3) Отримання даних:

// confirm() - виводить модальне вікно з повідомленням, і дві кнопки, Ok і Cancel. Натискаючи на Ok, результатом будет true, натискаючи на Cancel - повертається false.

// Просимо клієнта підтвердити бронювання готелю і зберігаємо результат роботи confirm у змінну
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// prompt() - виводить модальне вікно з полем введення і кнопками Ok і Cancel. Натискаючи на Ok, результатом буде те, що ввів користувач, у випадку Cancel - повертається null.

// Запитуємо назву готеля, в якому хотів би зупинитися клієнт і зберігаємо результат виклику prompt у змінну.
// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// Важлива особливість prompt полягає в тому, що незалежно від того, що ввів користувач, завжди повернеться рядок.
// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"
// _____________________________________________________________



// ====================Основні оператори====================

// 1) Математичні оператори

// const x = 10;
// const y = 5;

// // Додавання
// console.log(x + y); // 15

// // Віднімання
// console.log(x - y); // 5

// // Множення
// console.log(x * y); // 50

// // Ділення
// console.log(x / y); // 2

// // Остача від ділення
// console.log(x % y); // 0

// // Додавання із заміною (також є для всіх інших операторів)
// let value = 5;

// // Аналогічно запису value = value + 10;
// value += 10;
// console.log(value); // 15
// _____________________________________________________________

// 2) Оператори порівняння

// Використовуються для порівняння двох значень. Результатом свого виконання повертають буль - true або false, тобто «так» або «ні».

// a > b і a < b - більше/менше
// a >= b і a <= b - більше/менше або дорівнює
// a == b - рівність
// a != b - нерівність
// a === b - строга рівність
// a !== b - строга нерівність

// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x > y:", x > y); // false
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // false
// _____________________________________________________________

// 3) Оператори рівності

// «Нестрогі» оператори рівності == і != виконують перетворення типів порівнюваних значень у число, що може призвести до помилок, особливо у початківців.

// console.log(5 === "5"); // false
// console.log(5 === 5); // true
// console.log(5 !== "5"); // true
// console.log(5 !== 5); // false
// console.log(1 === true); // false
// console.log(1 !== true); // true
// _____________________________________________________________



// ====================Числа====================

// 1) Приведення до числа

// Більшість арифметичних операцій і математичних функцій перетворюють значення у число автоматично.
// Для того, щоб зробити це явно, використовуйте функцію Number(val), передаючи їй у val те, що потрібно привести до числа.
// Якщо значення привести до числа неможливо, результатом буде спеціальне числове значення NaN(Not a Number).
// Аналогічним чином відбувається перетворення і в інших математичних операторах і функціях.

// const valueA = "5";
// console.log(Number(valueA)); // 5
// console.log(typeof Number(valueA)); // "number"

// const valueB = "random string";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"
// _____________________________________________________________

// Методи Number.parseInt() і Number.parseFloat()

// Перетворюють рядок символ за символом, доки це можливо.
// У разі виникнення помилки повертається підсумкове число.
// Метод Number.parseInt() парсить з рядка ціле число.

// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN
// _____________________________________________________________

// Метод Number.parseFloat() парсить з рядка дробове число.

// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN
// _____________________________________________________________

// 2) Перевірка на число

// Для перевірки на число можна використовувати метод Number.isNaN(val).
// Він перевіряє, чи вказане значення є NaN.Метод відповідає на запитання "Це Not A Number?" і повертає:
// true - якщо значення val - NaN
// false - якщо значення val - не NaN
// Для всіх значень val, крім NaN, при передачі в Number.isNaN(val) поверне false.
// Цей метод не намагається перетворити val в число, а просто виконує перевірку на NaN.

// const validNumber = Number("51"); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number("qweqwe"); // NaN
// console.log(Number.isNaN(invalidNumber)); // true
// _____________________________________________________________

// 3) Додавання чисел з рухомою крапкою (комою)

// Додаючи нецілі числа, в JavaScript і в інших мовах програмування є особливість.
// Якщо коротко, то 0.1 + 0.2 не дорівнює 0.3, результат додавання буде більший, ніж 0.3.
// Це тому що машина рахує у двійковій системі.

// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004

// Спосіб №1:
// зробити їх цілими, помноживши на N, додати, а потім результат поділити також на N.

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

// Спосіб №2:
// додати, а результат скоротити до певного знаку після коми за допомогою методу toFixed().

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // 0.41
// _____________________________________________________________

// 4) Клас Math:

// Math.floor(num) - повертає найменше ціле число, менше, або яке дорівнює зазначеному числу
// console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - повертає найбільше ціле число, більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(1.2)); // 2

// Math.round(num) - повертає значення числа, округленого до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
// console.log(Math.max(20, 10, 50, 40)); // 50

// Math.min(num1, num2, ...) - повертає найменше ціле число з набору
// console.log(Math.min(20, 10, 50, 40)); // 10

// Math.pow(base, exponent) - піднесення до степеня
// console.log(Math.pow(2, 4)); // 16

// Math.random() - повертає псевдовипадкове число в діапазоні[0, 1]
// console.log(Math.random()); // випадкове число між 0 і 1
// console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10
// _____________________________________________________________



// ====================Рядки====================

// 1) Конткатенація

// const message = "Mango " + "is" + " happy";
// console.log(message); // Mango is happy

// Подивимось на різний порядок операндів.

// console.log(1 + "2"); // "12"
// console.log(1 + "2" + 4); // "124"
// console.log(1 + 2 + "4"); // "34"

// Конкатенація:
// const guestName = "Манго";
// const roomNumber = 207;
// const greeting =
//   "Welcome " + guestName + ", your room number is " + roomNumber + "!";
// console.log(greeting); // "Welcome Mango, your room number is 207!"
// _____________________________________________________________

// 2) Шаблонні рядкі:

// Шаблонні рядки:
// const guestName = "Манго";
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
// console.log(greeting); // "Welcome Mango, your room number is 207!"
// _____________________________________________________________

// 3) Властивості і методи рядків

// 3.1) Для того, щоб дізнатися довжину рядка, тобто кількість його символів, у всіх рядків є вбудована властивість length,
// значення якої можна отримати, звернувшись до нього через крапку після імені змінної або рядкового літерала.

// const message = "Welcome to Bahamas!";
// console.log(message.length); // 19
// console.log("There is nothing impossible to him who will try".length); // 47
// _____________________________________________________________

// 3.2) Методи toLowerCase() і toUpperCase()

// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

// console.log("saMsUng" === "samsung"); // false
// console.log("saMsUng" === "SAMSUNG"); // false

// Щоб не вимагати абсолютно точне введення, можна зробити «нормалізацію» введеного користувачем рядка,
// тобто перетворити всі його символи у верхній або нижній регістр.Методи рядка toLowerCase() і toUpperCase()
// повернуть новий рядок у відповідному регістрі, не змінюючи оригінальний.

// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true
// _____________________________________________________________

// 3.3) Метод indexOf()

// Повертає позицію (індекс), на якій знаходиться перший збіг підрядка або -1, якщо нічого не знайдено.

// const message = "Welcome to Bahamas!";
// console.log(message.indexOf("to")); // 8
// console.log(message.indexOf("hello")); // -1
// _____________________________________________________________

// 3.4) Метод includes()

// Перевіряє, чи міститься підрядок в рядку, повертає буль - true, якщо міститься, і false - в іншому випадку.
// Регістр символів в рядку і підрядку має значення, оскільки, наприклад, літера "a" не дорівнює літері "А".

// const productName = "Ремонтний дроїд";

// console.log(productName.includes("н")); // true
// console.log(productName.includes("Н")); // false
// console.log(productName.includes("дроїд")); // true
// console.log(productName.includes("Дроїд")); // false
// console.log(productName.includes("Ремонтний")); // true
// console.log(productName.includes("ремонтний")); // false
// _____________________________________________________________

// 3.5) Метод endsWith()

// const jsFileName = "script.js";
// console.log(jsFileName.endsWith(".js")); // true

// const cssFileName = "styles.css";
// console.log(cssFileName.endsWith(".js")); // false
// _____________________________________________________________

// 3.6) Методи replace() і replaceAll()

// Повертає новий рядок, в якому перше (replace) або усі збіги (replaceAll) підрядка замінені на вказане значення.

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"
// _____________________________________________________________

// 3.7) Метод slice()

// Метод рядків slice(startIndex, endIndex) використовується для створення копії частини або всього рядка.
// Він робить копію елементів рядка від startIndex і до, але не включно endIndex і повертає новий рядок, не змінюючи оригінал.

// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"
// _____________________________________________________________


// ====================Логічні оператори====================

// У логічних операціях здійснюється приведення типів операндів до true або false.
// Приведення відбувається, якщо в коді виявлений логічний оператор.

// Truthy і Falsy - терміни, які використовуються для тих значень, які в логічній операції приводяться до true або false, хоча спочатку не були булями.

// Запам'ятайте 6 хибних (falsy) значень, що приводяться до false у логічному перетворенні:
// 0, NaN, null, undefined, порожній рядок і false.Абсолютно все інше приводиться до true.

// 1) Логічне «І»

// вираз && вираз

// const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true

// Якщо хоча б один із операндів буде приведений до false, результатом виразу буде його значення.
// const age = 50;
// console.log(age > 10 && age < 30); // true && false -> false
// console.log(age > 80 && age < 120); // false && true -> false

// Тобто, логічне «І» зупиняється на хибному і повертає те, на чому зупинилось, або останній операнд.

// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ""
// console.log("Mango" && ""); // true && false -> ""
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"

// Виконуючи логічне «І», правий операнд може не обчислюватися у випадку, якщо лівий був приведений до false.
// _____________________________________________________________

// 2) Логічне «АБО»

// Оператор || приводить всі операнди до буля і повертає значення одного з них.
// Лівий операнд - якщо його можна привести до true, і правий - в інших випадках.

// const age = 5;
// console.log(age < 10 || age > 30); // true || false -> true

// const age = 40;
// console.log(age < 10 || age > 30); // false || true -> true

// const age = 20;
// console.log(age < 10 || age > 30); // false || false -> false

// Тобто, логічне «АБО» зупиняється на правді і повертає те, на чому зупинилося або останній операнд.

// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true

// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true
// _____________________________________________________________

// 3) Логічне «НЕ»

// Всі оператори, які ми розглядали до цього, були бінарними - містять два операнди: лівий і правий.
// Логічне «НЕ» - це унарний оператор, який виконує операцію над одним операндом з правої сторони.

// Оператор ! приводить операнд до буля, якщо необхідно, а потім робить інверсію - змінює його на протилежний true -> false або false -> true.

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false
// _____________________________________________________________