// ====================AUTOCHECK 2.1====================

//TODO: Оголоси дві змінні, productName для назви товару, і pricePerItem для зберігання ціни за штуку. При оголошенні надай змінним наступні значення:
//TODO: назва - рядок "Droid";
//TODO: ціна за штуку - число 2000.

// Change code below this line
// const productName = "Droid";
// const pricePerItem = 2000;

// console.log(productName); // 'Droid'
// console.log(pricePerItem); // 2000

// ====================AUTOCHECK 2.2====================

//TODO: Ім'я товару змінили на "Repair droid" і збільшили його ціну на 1500 кредитів.
//TODO: Перевизнач значення змінних pricePerItem і productName після їх оголошення.

// let productName = "Droid";
// let pricePerItem = 2000;

// // Change code below this line
// productName = "Repair droid";
// pricePerItem = pricePerItem + 1500;

// console.log(productName); //Repair droid
// console.log(pricePerItem); //3500

// ====================AUTOCHECK 2.3====================

//TODO: Оголоси наступні змінні, використовуючи ключове слово const або let, і присвой їм відповідні значення.

// topSpeed - число 160.
// distance - число 617.54.
// login - рядок "mango935".
// isOnline - буль true.
// isAdmin - буль false.

// Change code below this line
// let topSpeed = 160;
// let distance = 617.54;
// let login = "mango935";
// let isOnline = true;
// let isAdmin = false;

// console.log(topSpeed); //160
// console.log(distance); //617.54
// console.log(login); //mango935
// console.log(isOnline); //true
// console.log(isAdmin); //false

// ====================AUTOCHECK 2.4====================

//TODO: Доповни код, присвоївши змінній totalPrice вираз для підрахунку загальної суми замовлення.
//TODO: Змінна pricePerItem зберігає ціну однієї одиниці товару, а orderedQuantity - кількість одиниць товару в замовленні.

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;

// console.log(totalPrice); //14000

// ====================AUTOCHECK 2.5====================

//TODO: Оголоси змінну message і запиши в неї повідомлення про покупку, рядок у форматі:
//TODO: "You picked <назва товару>, price per item is <ціна товару> credits".
//TODO: Де < назва товару > і < ціна товару > — це значення змінних productName і pricePerItem.
//TODO: Використовуй синтаксис шаблонних рядків.

// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// console.log(message); //You picked Droid, price per item is 3500 credits

// ====================AUTOCHECK 2.6====================

//TODO: Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення.
//TODO: Оголоси змінні та присвой їм відповідні значення:

// pricePerDroid - ціна одного дроїда, значення 800
// orderedQuantity - кількість дроїдів у замовленні, значення 6
// deliveryFee - вартість доставки, значення 50
// totalPrice - загальна сума замовлення до сплати, не забудь про вартість доставки
// message - повідомлення про стан замовлення у форматі
// "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price."

// Change code below this line
// let pricePerDroid = 800;
// let orderedQuantity = 6;
// let deliveryFee = 50;
// let totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

// console.log(totalPrice); //4850
// console.log(message); // You ordered droids worth 530 credits. Delivery (50 credits) is included in total price.

// ====================AUTOCHECK 2.7====================

//TODO: Оголоси функцію sayHi, всередині якої додай console.log() з рядком "Hello, this is my first function!". Після оголошення виклич функцію sayHi.

// function sayHi() {
//     console.log("Hello, this is my first function!");
// }

// sayHi();

// ====================AUTOCHECK 2.8====================

//TODO: Функція add повинна вміти додавати три числа і виводити результат у консоль.
//TODO: Додай функції add три параметри: a, b і c, які будуть отримувати значення аргументів під час її виклику.

//TODO: Доповни console.log() таким чином, щоб він логував рядок "Addition result equals <result>", де <result> - це сума переданих чисел.

// Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a+b+c}`);
//   // Change code above this line
// }

// add(15, 27, 10); //Addition result equals 52
// add(10, 20, 30); //Addition result equals 60
// add(5, 10, 15); //Addition result equals 30

// ====================AUTOCHECK 2.9====================

//TODO: Доповни код функції add таким чином, щоб вона повертала результат додавання значень трьох параметрів: a, b і c.

// function add(a, b, c) {
//   // Change code below this line
//     return a + b + c;
//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10)); //52
// console.log(add(10, 20, 30)); //60
// console.log(add(5, 10, 15)); //30

// ====================AUTOCHECK 2.10====================

//TODO: Функція makeMessage(name, price) складає і повертає повідомлення про покупку.
//TODO: Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// name - назва товару
// price - ціна товару
// Доповни код функції таким чином, щоб у змінну message записувався рядок
// "You picked <product name>, price per item is <product price> credits",
// де < product name > і < product price > - це значення параметрів name і price.
// Використовуй синтаксис шаблонних рядків.

// function makeMessage (name, price) {
//   // Change code below this line
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// };

// console.log(makeMessage('Radar', 6150)); //You picked Radar, price per item is 6150 credits

// ====================AUTOCHECK 2.11====================

//TODO: Функція calculateTotalPrice рахує і повертає загальну суму покупки.
//TODO: Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// orderedQuantity - кількість одиниць товару в замовленні;
// pricePerItem - ціна однієї одиниці товару.
// Доповни код функції таким чином, щоб у змінну totalPrice записувалася загальна сума покупки - результат множення кількості товарів на ціну одного.

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;
//   // Change code above this line
//   return totalPrice;
// };

// console.log(calculateTotalPrice(5, 100)); //500

// ====================AUTOCHECK 2.12====================

//TODO: Функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) складає і повертає повідомлення про покупку ремонтних дроїдів.
//TODO: Вона оголошує три параметри, значення яких будуть задаватися під час її виклику.

// orderedQuantity - кількість дроїдів у замовленні
// pricePerDroid - ціна одного дроїда
// deliveryFee - вартість доставки
// Доповни код функції таким чином, щоб вона повертала повідомлення про замовлення у форматі
// "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.".
// Не забудь про ціну доставки в обчисленнях загальної вартості.

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//     let totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//     const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   // Change code above this line
//   return message;
// }

// console.log(makeOrderMessage(2, 100, 50)); //You ordered droids worth 250 credits. Delivery (50 credits) is included in total price.

// ====================AUTOCHECK 2.13====================

//TODO: Функція isAdult оголошує один параметр age(вік), значення якого буде задаватися під час її виклику.
//TODO: Присвой змінній passed вираз перевірки віку користувача на повноліття.
//TODO: Людина вважається повнолітньою у віці 18 років і старше.

// function isAdult(age) {
//     // Change code below this line
//         const passed = age >= 18;
//   // Change code above this line
//   return passed;
// }

// console.log(isAdult(20)); //true
// console.log(isAdult(14)); //false

// ====================AUTOCHECK 2.14====================

//TODO: Функція isValidPassword(password) перевіряє рівність збереженого і введеного паролів і повертає результат перевірки - буль true або false.
//TODO: Змінна SAVED_PASSWORD зберігає значення попередньо збереженого пароля.Введений пароль передається у параметр password.

// Присвой змінній isMatch вираз перевірки рівності введених і попередньо збережених паролів.
// Результатом виразу перевірки повинно бути true, якщо значення збігаються, і false - якщо ні.

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;
//   // Change code above this line
//   return isMatch;
// }

// console.log(isValidPassword("mangodab3st")); //false
// console.log(isValidPassword("jqueryismyjam")); //true




// ====================AUTOCHECK 3.1====================

//TODO: Додай вираз перевірки повноліття користувача, значення параметра age, в умову для інструкції if.
//TODO: Якщо користувач повнолітній, повинен виконуватися блок if і у змінну message записується рядок "You are an adult".
//TODO: В іншому випадку повинен виконуватися блок else і записується рядок "You are a minor".

// function checkAge(age) {
//   let message;

//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   return message;
// }

// console.log(checkAge(20)); //You are an adult
// console.log(checkAge(8));  //You are a minor

// ====================AUTOCHECK 3.2====================

//TODO: Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
//TODO: Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// available - загальна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, що:

// Якщо в замовленні вказане число, яке перевищує кількість товарів на складі, у змінну message записується рядок "Not enough goods in stock!".
// В іншому випадку записується рядок "Order is processed, our manager will contact you.".

// /**
//  * Checks the possibility of placing an order and returns a message about the result
//  * @param {Number} available - total number of goods in stock
//  * @param {Number} ordered -  the number of droids ordered
//  * @returns {String}
//  */

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//     if (available < ordered) {
//         message = "Not enough goods in stock!";
//     } else {
//         message = "Order is processed, our manager will contact you.";
//   }
//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50)); //Order is processed, our manager will contact you.
// console.log(checkStorage(100, 130)); //Not enough goods in stock!

// ====================AUTOCHECK 3.3====================

// Заміни вирази зі стандартними математичними операторами на комбінований оператор присвоєння з додаванням, відніманням, множенням і діленням.

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(`a:`, a, `b:`, b, `c:`, c, `d:`, d); //a: 7 b: 6 c: 45 d: 2

// ====================AUTOCHECK 3.4====================

//TODO: Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.

//TODO: Функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits) виконує транзакцію з продажу дроїдів і повертає повідомлення про результат операції.
//TODO: Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// pricePerDroid - ціна одного дроїда
// orderedQuantity - кіл-сть замовлених дроїдів
// customerCredits - сума коштів на рахунку клієнта
// Доповни її наступним функціоналом:

// Оголоси змінну totalPrice для зберігання загальної суми замовлення і присвой їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, запиши у змінну message рядок "Insufficient funds!";
// в іншому випадку, відніми суму покупки з рахунку клієнта і запиши у змінну message повідомлення: "You ordered <число> droids, you have <число> credits left".

// /**
//  * Returns a message about the result of the operation
//  * @param {Number} pricePerDroid - price of one droid
//  * @param {Number} orderedQuantity - the number of droids ordered
//  * @param {Number} customerCredits - the amount of funds on the client's account
//  * @returns {Number}
//  */
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//     let totalPrice = pricePerDroid * orderedQuantity;
    
//     if (customerCredits < totalPrice) {
//     message = `Insufficient funds!`;
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//   }
//   // Change code above this line
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000)); //You ordered 5 droids, you have 8000 credits left
// console.log(makeTransaction(5000, 10, 8000)); //Insufficient funds!

// ====================AUTOCHECK 3.5====================

//TODO: Функція checkPassword(password) отримує пароль користувача в параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD
//TODO: і повертає повідомлення про результат порівняння, яке зберігається у змінній message.

// Якщо значення параметра password дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
// Якщо значення параметра password збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
// Якщо жодна з попередніх умов не виконалася, у змінну message записується рядок "Access denied, wrong password!".

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// console.log(checkPassword("mangohackzor")); //Access denied, wrong password!
// console.log(checkPassword(null)); //Canceled by user!
// console.log(checkPassword("jqueryismyjam")); //Welcome!

// ====================AUTOCHECK 3.6====================

//TODO: Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
//TODO: Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, що:

// Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, у змінну message присвоюється рядок "There are no products in the order!".
// Якщо товарів у замовленні більше, ніж доступно товарів на складі, то у змінну message присвоюється рядок
// "Your order is too large, there are not enough items in stock!".
// В іншому випадку у змінну message присвоюється рядок "The order is accepted, our manager will contact you".

// /**
//  * Returns a message about the possibility of placing an order
//  * @param {Number} available - available quantity of goods in stock
//  * @param {Number} ordered - units of the product in the order
//  * @returns {String}
//  */

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//     if (ordered === 0) {
//         message = "There are no products in the order!";
//     } else if (ordered > available){
//         message = "Your order is too large, there are not enough items in stock!";
//     } else {
//         message = "The order is accepted, our manager will contact you";
//     }
//     // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50)); //The order is accepted, our manager will contact you
// console.log(checkStorage(100, 130)); //Your order is too large, there are not enough items in stock!
// console.log(checkStorage(70, 0)); //There are no products in the order!

// ====================AUTOCHECK 3.7====================

//TODO: Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок.
//TODO: Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// number - число, входження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Присвой змінній isInRange вираз перевірки входження number у числовий проміжок від start до end.
// Тобто число повинно бути більшим або дорівнювати start, і меншим або дорівнювати end.Результатом виразу перевірки буде буль true або false.

// function isNumberInRange(start, end, number) {
//   const isInRange = number>start && number<end; // Change this line

//   return isInRange;
// }

// console.log(isNumberInRange(10, 30, 17)); //true
// console.log(isNumberInRange(10, 30, 5)); //false

// ====================AUTOCHECK 3.8====================

//TODO: Функція checkIfCanAccessContent(subType) перевіряє, чи може користувач отримати доступ до контенту.
//TODO: Перевірка відбувається за типом передплати.Отримати доступ можуть тільки користувачі з передплатою pro або vip.

// Присвой змінній canAccessContent вираз перевірки передплати.
// Якщо значення параметра subType дорівнює рядкам "pro" або "vip", користувач отримає доступ.Результатом виразу перевірки буде буль true або false.

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType==="pro" || subType==="vip"; // Change this line

//   return canAccessContent;
// }

// console.log(checkIfCanAccessContent("pro")); //true
// console.log(checkIfCanAccessContent("starter")); //false


// ====================AUTOCHECK 3.9====================

//TODO: Функція isNumberNotInRange(start, end, number) перевіряє, чи не входить число у проміжок.
//TODO: Тобто число повинно бути меншим або дорівнювати start і більшим або дорівнювати end.Результатом виразу перевірки буде буль true або false.

// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// number - число, невходження якого перевіряється
// start - початок числового проміжку
// end - кінець числового проміжку
// Присвой змінній isNotInRange вираз інверсії значення змінної isInRange, використовуючи оператор !.

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }

// console.log(isNumberNotInRange(10, 30, 17)); //false
// console.log(isNumberNotInRange(10, 30, 5)); //true

// ====================AUTOCHECK 3.10====================

//TODO: Функція getDiscount(totalSpent) визначає значення знижки, залежно від загальної суми витрачених грошей(параметр totalSpent)
//TODO: в магазині за весь час(партнерська програма).Знижка записується у змінну discount і повертається з функції як результат її роботи.

// Використовуючи розгалуження і логічні оператори, доповни код функції.

// Якщо витрачено від 50000 (включно) або більше кредитів - знижка 10% (золотий партнер)
// Якщо витрачено від 20000 (включно) до 50000 кредитів - знижка 5% (срібний партнер)
// Якщо витрачено від 5000 (включно) до 20000 кредитів - знижка 2% (бронзовий партнер)
// Якщо витрачено менше 5000 кредитів - знижка 0 (базовий партнер)
// Значення знижок кожного рівня зберігаються в однойменних константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT і GOLD_DISCOUNT.

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//     if (totalSpent >= 50000) {
//         discount = GOLD_DISCOUNT;
//     } else if (totalSpent >= 20000 && totalSpent < 50000) {
//         discount = SILVER_DISCOUNT;
//     } else if (totalSpent >= 5000 && totalSpent < 20000) {
//         discount = BRONZE_DISCOUNT;
//     } else {
//         discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }

// console.log(getDiscount(137000)); //0.1
// console.log(getDiscount(46900)); //0.05
// console.log(getDiscount(8250)); //0.02
// console.log(getDiscount(1300)); //0

// ====================AUTOCHECK 3.11====================

//TODO: Виконай рефакторинг рішення задачі «Склад товарів», замінивши інструкцію if...else тернарним оператором.

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//     message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//     // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50)); //The order is accepted, our manager will contact you
// console.log(checkStorage(100, 130)); //Not enough goods in stock!

// ====================AUTOCHECK 3.12====================

//TODO: Функція checkPassword(password) порівнює переданий їй пароль(параметр password) зі збереженим паролем
//TODO: адміністратора(константа ADMIN_PASSWORD) і повертає рядок з повідомленням про результат.

// Використовуючи тернарний оператор, доповни функцію таким чином, що:

// Якщо значення password і ADMIN_PASSWORD збігаються, присвой змінній message рядок "Access is allowed".
// В іншому випадку, присвой message рядок "Access denied, wrong password!".

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//     message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }

// console.log(checkPassword("jqueryismyjam")); //Access is allowed
// console.log(checkPassword("angul4r1sl1f3")); //Access denied, wrong password!

// ====================AUTOCHECK 3.13====================

//TODO: Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача(параметр type),
//TODO: перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, що зберігається у змінній price.
//TODO: Якщо значення параметра type - це рядок:

// "starter" - ціна передплати 0 кредитів.
// "professional" - ціна передплати 20 кредитів.
// "organization" - ціна передплати 50 кредитів.
// Спочатку в тілі функції була інструкція if...else, яка виглядала ось так.

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }

// console.log(getSubscriptionPrice("professional")); //20
// console.log(getSubscriptionPrice("organization")); //50
// console.log(getSubscriptionPrice("starter")); //0

// ====================AUTOCHECK 3.14====================

//TODO: Функція checkPassword(password) отримує пароль в параметр password, перевіряє його на збіг з паролем адміністратора у
//TODO: змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається у змінній message.

//TODO: Якщо значення параметра password:

//TODO: дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
//TODO: збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
//TODO: не задовольняє жодну з попередніх умов, у змінну message записується рядок "Access denied, wrong password!".
//TODO: Зроби рефакторинг коду, замінивши інструкцію if..else на switch, і не забудь про блок default (аналог else).

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//     switch (password) {
//         case null:
//             message = "Canceled by user!";
//             break;
        
//         case ADMIN_PASSWORD:
//             message = "Welcome!";
//             break;
        
//         default:
//             message = "Access denied, wrong password!"
//     }
 
//   // Change code above this line
//   return message;
// }

// console.log(checkPassword(null)); //Canceled by user!
// console.log(checkPassword("polyhax")); //Access denied, wrong password!
// console.log(checkPassword("jqueryismyjam")); //Welcome!

// ====================AUTOCHECK 3.15====================

//TODO: Функція getShippingCost(country) повинна перевіряти можливість доставки товару в країну користувача(параметр country) і
//TODO: повертати повідомлення про результат, що зберігається у змінній message.Обов'язково використовуй інструкцію switch.

//TODO: Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price>, необхідно підставити відповідні значення.

//TODO: Список країн і вартість доставки:

//TODO: China - 100 кредитів
//TODO: Chile - 250 кредитів
//TODO: Australia - 170 кредитів
//TODO: Jamaica - 120 кредитів
//TODO: Зі списку видно, що доставка можлива не скрізь.Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок
//TODO: "Sorry, there is no delivery to your country"

// function getShippingCost(country) {
//     let message;
    
//   // Change code below this line
//     switch(country) {
//       case 'China':
//         price = 100;
//             message = `Shipping to ${country} will cost ${price} credits`;
//             break;

//       case 'Chile':
//         price = 250;
//             message = `Shipping to ${country} will cost ${price} credits`;
//             break;
        
//       case 'Australia':
//         price = 170;
//             message = `Shipping to ${country} will cost ${price} credits`;
//             break;
        
//       case 'Jamaica':
//         price = 120;
//             message = `Shipping to ${country} will cost ${price} credits`;
//             break;
        
//         default:
//             message = `Sorry, there is no delivery to your country`;
//     }
//   // Change code above this line
//     return message;
// }

// console.log(getShippingCost('China')); //Shipping to China will cost 100 credits
// console.log(getShippingCost("Chile")); //Shipping to Chile will cost 250 credits
// console.log(getShippingCost("Australia")); //Shipping to Australia will cost 170 credits
// console.log(getShippingCost("Jamaica")); //Shipping to Jamaica will cost 120 credits
// console.log(getShippingCost("Germany")); //Sorry, there is no delivery to your country

// ====================AUTOCHECK 3.16====================

//TODO: Функція getNameLength(name) приймає ім'я (параметр name) і повертає рядок, в якому вказана його довжина.
//TODO: Доповни шаблонний рядок у змінній message довжиною рядка з параметра name.

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

// console.log(getNameLength("Poly")); //Name Poly is 4 characters long
// console.log(getNameLength("Billy")); //Name Harambe is 5 characters long

// ====================AUTOCHECK 3.17====================

//TODO: Доповни код, присвоївши оголошеним змінним вирази звертання до відповідних елементів або властивостей рядка у змінній course.

// courseTopicLength - довжина рядка.
// firstElement - перший символ рядка.
// lastElement - останній символ рядка.

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length-1];

// // Change code above this line

// console.log(courseTopicLength); //21
// console.log(firstElement); //J
// console.log(lastElement); // s

// ====================AUTOCHECK 3.18====================

//TODO: Функція getSubstring(string, length) приймає рядок і повертає підрядок від початку і до length символів.
//TODO: Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// string - оригінальний рядок
// length - кількість символів з початку рядка для підрядка
// Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }

// console.log(getSubstring("Hello world", 3)); //Hel
// console.log(getSubstring("Hello world", 6)); //Hello
// console.log(getSubstring("Hello world", 11)); //Hello world
// console.log(getSubstring("Hello world", 0)); //""

// ====================AUTOCHECK 3.19====================

//TODO: Функція formatMessage(message, maxLength) приймає рядок (параметр message) і форматує його, якщо довжина перевищує значення в параметрі maxLength.

//TODO: Доповни код функції таким чином, що якщо довжина рядка:

//TODO: не перевищує maxLength, функція повертає його в початковому вигляді.
//TODO: більша за maxLength, то функція обрізає рядок до maxLength символів і додає в кінець три крапки "...", після чого повертає скорочену версію.

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   // 1 variant
//   // result = message.length <= maxLength ? message.slice(0, message.length - 1) : message.slice(0, message.length - 1) + "...";
//   // 2 variant
//   result = message.length <= maxLength ? message : message.slice(0, maxLength) + "...";
//   /// Change code above this line
//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); //Curabitur ligula...
// console.log(formatMessage("Curabitur ligula sapien", 23)); //Curabitur ligula sapien

// ====================AUTOCHECK 3.20====================

//TODO: Функція normalizeInput(input) приймає рядок(параметр input) і повертає такий самий рядок, але в нижньому регістрі.
//TODO: Присвой змінній normalizedInput вираз створення рядка у нижньому регістрі з параметра input.

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

// console.log(normalizeInput("Hello world")); //hello world
// console.log(normalizeInput("This ISN'T SpaM")); //this isn't spam
// console.log(normalizeInput("Big SALE")); //big sale

// ====================AUTOCHECK 3.21====================

//TODO: Функція checkForName(fullname, name) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка name у рядок fullname.

//TODO: fullname - повне ім'я, що складається з двох слів (імені та прізвища), розділених пробілом.
//TODO: name - ім'я для перевірки входження в повне ім'я.
//TODO: Присвой змінній result вираз перевірки входження імені(параметр name), у повне ім'я (параметр fullname).
//TODO: Нехай функція чітко розрізняє регістр літер, тобто «Петя» і «петя» - для неї різні імена.

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   return result;
// }

// console.log(checkForName("Egor Kolbasov", "Egor")); //true
// console.log(checkForName("Egor Kolbasov", "egor")); //false
// console.log(checkForName("Egor Kolbasov", "egOr")); //false
// console.log(checkForName("Egor Kolbasov", "Zhenya")); //false

// ====================AUTOCHECK 3.22====================

//TODO: Функція checkForSpam(message) приймає рядок(параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки.
//TODO: Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.

//TODO: Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
//TODO: Якщо в рядку відсутні заборонені слова, функція повертає буль false.

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   normalizeMessage = message.toLowerCase();
//   result = normalizeMessage.includes('spam') || normalizeMessage.includes('sale') ? true : false;
//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam("Latest technology news")); //false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Amazing SalE, only tonight!")); //true



// ====================AUTOCHECK 4.1====================

//TODO: Запиши умову в інструкції if таким чином, щоб функція працювала правильно.

// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// console.log(checkAge(20)); //You are an adult
// console.log(checkAge(8)); //You are a minor

// ====================AUTOCHECK 4.2====================

//TODO: Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг з паролем адміністратора
//TODO: у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.

//TODO: Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:

//TODO: видали змінну message
//TODO: видали else
//TODO: код повинен працювати так само, як і до оптимізації

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return  "Access denied, wrong password!";
//   }

// console.log(checkPassword("mangohackzor")); //Access denied, wrong password!
// console.log(checkPassword("jqueryismyjam")); //"Welcome!

// ====================AUTOCHECK 4.3====================

//TODO: Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
//TODO: Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

//TODO: available - доступна кількість товарів на складі
//TODO: ordered - кількість одиниць товару в замовленні
//TODO: Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
  
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }

//   return "The order is accepted, our manager will contact you";
//   }
  
// console.log(checkStorage(100, 50)); //The order is accepted, our manager will contact you
// console.log(checkStorage(100, 130)); //Your order is too large, not enough goods in stock!
// console.log(checkStorage(70, 0)); //Your order is empty!

// ====================AUTOCHECK 4.4====================

//TODO: Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// console.log(fruits); //[apple, plum, pear, orange]

// ====================AUTOCHECK 4.5====================

//TODO: Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.

// Ім'я змінної	Значення змінної
// firstElement	перший елемент масиву
// secondElement	другий елемент масиву
// lastElement	останній елемент масиву

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line

// firstelement = fruits[0];
// secondelement = fruits[1];
// lastelement = fruits[fruits.length-1];

// console.log(firstelement); //"apple"
// console.log(secondelement); //"plum"
// console.log(lastElement); //"orange"

// ====================AUTOCHECK 4.6====================

//TODO: Виконай перевизначення значення елементів з індексами 1 і 3.
//TODO: Заміни "plum" на "peach", а "orange" на "banana".

// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line

// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits); //["apple", "peach", "pear", "banana"]

// ====================AUTOCHECK 4.7====================

// Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength); //4


// ====================AUTOCHECK 4.8====================

//TODO: Оголоси дві зміні:

//TODO: Ім'я змінної	Очікуване значення
//TODO: lastElementIndex	Індекс останнього елемента масиву fruits через довжина_масиву - 1
//TODO: lastElement	Значення останнього елемента масиву

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex); //3
// console.log(lastElement); //banana

// ====================AUTOCHECK 4.9====================

//TODO: Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини.
//TODO: Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

// function getExtremeElements(array) {
//   // Change code below this line

//   if (array.length === 0) {
//     return [];
//   }

//   return array.slice(0, 1).concat(array.slice(-1));

//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5])); //[1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"])) //["Earth", "Venus"]
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"])); //["apple", "banana"]

// ====================AUTOCHECK 4.10====================

//TODO: Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат
//TODO: поділу рядка message за роздільником delimiter - масив рядків.

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " ")); //["Mango", "hurries", "to", "the", "train"]
// console.log(splitMessage("Mango", "")); //["M", "a", "n", "g", "o"]
// console.log(splitMessage("best_for_week", "_")); //["best", "for", "week"]

// ====================AUTOCHECK 4.11====================

//TODO: Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.
//TODO: Оголошена функція calculateEngravingPrice(message, pricePerWord).Ця функція приймає рядок, що складається зі слів, розділених лише пробілами
//TODO: (параметр message) та ціну гравірування одного слова(параметр pricePerWord).
//TODO: Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
  
//   if (message === "") {
//     return pricePerWord = 0;
//   }

//   totalPrice = message.split(' ').length *pricePerWord;
//   return totalPrice;

//    // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); //50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); //100
// console.log(calculateEngravingPrice("Web-development is creative work", 40)); //160
// console.log(calculateEngravingPrice("Web-development is creative work", 20)); //80
// console.log(calculateEngravingPrice("")); //[]

// ====================AUTOCHECK 4.12====================

//TODO: Доповни код функції makeStringFromArray(array, delimiter) таким чином, щоб вона повертала у змінній string результат
//TODO: з`єднання елементів масиву array з роздільником delimiter - рядок.

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

//   if (array.length === 0) {
//     return;
//   }

//   string = array.join(delimiter);

//   // Change code above this line
//   return string;
//   }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")); //Mango hurries to the train
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], "")); //Mango
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_")); //top_picks_for_you
// console.log(makeStringFromArray([]));

// ====================AUTOCHECK 4.13====================

//TODO: Термін slug - це людино - зрозумілий унікальний ідентифікатор, який використовується у веб - розробці для
//TODO: створення читабельних URL - адрес.

//TODO: Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com / posts / 1q8fh74tx, можна
//TODO: зробити slug з назви статті.В результаті адреса буде приємнішою для сприйняття:
//TODO: mysite.com / posts / arrays -for-begginers.

//TODO: Увага
//TODO: Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.

//TODO: Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

//TODO: Значенням параметра title будуть рядки, слова яких розділені лише пробілами
//TODO: Усі символи slug повинні бути у нижньому регістрі
//TODO: Всі слова slug повинні бути розділені тире

// function slugify(title) {
//   // Change code below this line

//   return title.toLowerCase().split(" ").join("-");

//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers")); //arrays-for-begginers
// console.log(slugify("English for developer")); //english-for-developer
// console.log(slugify("Ten secrets of JavaScript")); //ten-secrets-of-javascript
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); //how-to-become-a-junior-developer-in-two-weeks

// ====================AUTOCHECK 4.14===================

//TODO: Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2); //["apple", "plum"]
// const nonExtremeEls = fruits.slice(1, 4); //["plum", "pear", "orange"]
// const lastThreeEls = fruits.slice(-3); //["pear", "orange", "banana"]

// console.log("firstTwoEls:", firstTwoEls);
// console.log("nonExtremeEls", nonExtremeEls);
// console.log("lastThreeEls:", lastThreeEls);

// ====================AUTOCHECK 4.15===================

//TODO: Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(allClients); //["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]

// ====================AUTOCHECK 4.16===================

//TODO: Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами
//TODO: двох вихідних firstArray і secondArray.Параметр maxLength містить максимально допустиму довжину нового масиву.

//TODO: Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву
//TODO: довжиною maxLength елементів.В іншому випадку функція повинна повернути новий масив повністю.

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   return firstArray.concat(secondArray).slice(0, maxLength);

//     // Change code above this line
//   }

//   console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); //повертає ["Mango", "Poly", "Ajax"]
//   console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); //повертає ["Mango", "Poly", "Houston", "Ajax"]
//   console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); //повертає ["Mango", "Ajax", "Chelsea"]
//   console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); //повертає ["Earth", "Jupiter"]
//   console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); //повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
//   console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); //повертає []



// ====================AUTOCHECK 5.1===================

//TODO: Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i); //3, 4, 5, 6, 7
// }

// ====================AUTOCHECK 5.2===================

//TODO: Напиши функцію calculateTotal(number), яка приймає ціле число(параметр number) і повертає
//TODO: суму всіх цілих чисел від одиниці і до цього числа.Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//   // Change code below this line
  
//   if (!Number.isInteger(number) || number <= 0) {
//     return;
//   }

//   let sum = 0;

//   for (let i = 1; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;

//   // Change code above this line
// }

// console.log(calculateTotal(1)); //1
// console.log(calculateTotal(3)); //6
// console.log(calculateTotal(7)); //28
// console.log(calculateTotal(18)); //171
// console.log(calculateTotal(24)); //300
// console.log(calculateTotal(1.2)) //1
// console.log(calculateTotal(2.7)) //2
// console.log(calculateTotal("SoS")); //

// ====================AUTOCHECK 5.3===================

//TODO: Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// ====================AUTOCHECK 5.4===================

//TODO: Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює
//TODO: загальну суму його елементів.Загальна сума елементів повинна зберігатися у змінній total,
//TODO: яка повертається як результат роботи функції.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let value of order) {
//     total += value;
//   }

//   // Change code above this line
//   return total;
// }
    
// console.log(calculateTotalPrice([12, 85, 37, 4])); //138
// console.log(calculateTotalPrice([164, 48, 291])); //503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116

// ====================AUTOCHECK 5.5===================

//TODO: Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів,
//TODO: розділених пробілом(параметр string), і повертає найдовше слово в цьому рядку.

// function findLongestWord(string) {
//   // Change code below this line

// const arrWorlds = string.split(" ");
  
//   if (arrWorlds.length === 0) {
//     return "";
//   }

//   let longestWord = arrWorlds[0];

//   for (let i = 1; i < arrWorlds.length; i++) {
//     if (arrWorlds[i].length > longestWord.length) {
//       longestWord = arrWorlds[i];
//     }
//   }

//   return longestWord;

//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); //jumped
// console.log(findLongestWord("Google do a roll")); //Google
// console.log(findLongestWord("May the force be with you")); //force

// ====================AUTOCHECK 5.6===================

//TODO: Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив
//TODO: усіх цілих чисел від значення min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
  
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3)); //[1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); //[14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); //[29, 30, 31, 32, 33, 34]

// ====================AUTOCHECK 5.7===================

//TODO: Напиши функцію filterArray(numbers, value), яка приймає масив чисел(параметр numbers) і
//TODO: повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value(число).

// function filterArray(numbers, value) {
//    // Change code below this line
 
//   let newArray = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       newArray.push(numbers[i]);
//     }
    
//   }
//   return newArray;

//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); //[5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //[]
// console.log(filterArray([12, 24, 8, 41, 76], 38)); //[41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //[24, 41, 76]

// ====================AUTOCHECK 5.8===================

//TODO: Функція checkFruit(fruit) приймає рядок з назвою фрукта(параметр fruit), і перевіряє, чи присутній
//TODO: такий фрукт в масиві fruits.
//TODO: Доповни код функції таким чином, що якщо:
//TODO: фрукт присутній в масиві, то функція повертає true;
//TODO: фрукт відсутній в масиві, то функція повертає false.

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   for (let i = 0; i <= fruits.length; i += 1) {
//     if (fruits.includes(fruit)) {
//       return true;
//     }
//   }
//   return false;
//    // Change this line
// }
  
// console.log(checkFruit("plum")); //true
// console.log(checkFruit("mandarin")); //false
// console.log(checkFruit("pear")); //true
// console.log(checkFruit("Pear")); //false
// console.log(checkFruit("apple")); //true

// ====================AUTOCHECK 5.9===================

//TODO: Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

//TODO: Наприклад, у двох масивах[1, 3, 5] і[0, 8, 5, 3] спільними будуть числа 3 і 5,
//TODO: оскільки вони присутні в обох вихідних масивах.А числа 0, 1 і 8 присутні тільки в одному з масивів.

//TODO: Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри
//TODO: array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// function getCommonElements(array1, array2) {
//   // Change code below this line

//   let newArray = [];

//   for (let number of array1) {
//       if (array2.includes(number)) {
//         newArray.push(number);
//       }
//   }
//   return newArray;
// }
  
//  // Change code above this line


// console.log(getCommonElements([1, 2, 3], [2, 4])); //[2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //[1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //[12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //[10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //[]

// ====================AUTOCHECK 5.10===================

//TODO: Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let item of order) {
//     total += item;
//   }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); //138
// console.log(calculateTotalPrice([164, 48, 291])); //503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116
// console.log(calculateTotalPrice([])); //0

// ====================AUTOCHECK 5.11===================

//TODO: Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let number of numbers) {

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //[]
// console.log(filterArray([12, 24, 8, 41, 76], 38)); //[41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //[24, 41, 76]

// ====================AUTOCHECK 5.12===================

//TODO: Доповни вираз остачі від ділення таким чином, щоб код проходив тести.
//TODO: Оголошена змінна a
//TODO: Значення змінної a - це число 0
//TODO: Оголошена змінна b
//TODO: Значення змінної b - це число 1
//TODO: Оголошена змінна c
//TODO: Значення змінної c - це число 3
//TODO: Оголошена змінна d
//TODO: Значення змінної d - це число 5
//TODO: Оголошена змінна e
//TODO: Значення змінної e - це число 2

// Change code below this line
// const a = 3 % 1; //0
// const b = 4 % 3; //1
// const c = 11 % 8; //3
// const d = 12 % 7; //5
// const e = 8 % 6; //2

// console.log(a, b, c, d, e);

// ====================AUTOCHECK 5.13===================

//TODO: Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end.
//TODO: Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   let newArray = [];

//   for (let i = start; i <= end; i += 1){
//     if (i % 2 === 0) {
//       newArray.push(i);
//     }
//   }

//   return newArray;
//     // Change code above this line
// }
  
// console.log(getEvenNumbers(2, 5)); //[2, 4]
// console.log(getEvenNumbers(3, 11)); //[4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); //[6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8)); //[8]
// console.log(getEvenNumbers(7, 7)); //[]

// ====================AUTOCHECK 5.14===================

//TODO: Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// console.log(number); //10

// ====================AUTOCHECK 5.15===================

//TODO: Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:

// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number

// function findNumber(start, end, divisor) {
//   // Change code below this line

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

//   // Change code above this line
// }

// console.log(findNumber(2, 6, 5)); //5
// console.log(findNumber(8, 17, 3)); //9
// console.log(findNumber(6, 9, 4)); //8
// console.log(findNumber(16, 35, 7)); //21

// ====================AUTOCHECK 5.16===================

//TODO: Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення)
//TODO: - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

//TODO: При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// function includes(array, value) {
//   // Change code below this line

//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;

//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3)); //true
// console.log(includes([1, 2, 3, 4, 5], 17)); //false
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")); //true
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")); //false
// console.log(includes(["apple", "plum", "pear", "orange"], "plum")); //true
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi")); //false



// ====================AUTOCHECK 6.1===================

//TODO: Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:

// imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
// descr - опис, значення "Spacious apartment in the city center";
// rating - рейтинг, значення 4;
// price - ціна, значення 2153;
// tags - метаінформація, масив ["premium", "promoted", "top"].

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// console.log("apartment:", apartment);

// ====================AUTOCHECK 6.2===================

//TODO: Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника. Додай йому наступні властивості:

// name - ім'я власника, значення "Henry";
// phone - телефон, значення "982-126-1588";
// email - пошта, значення "henry.carter@aptmail.com".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   }
// };

// console.log("owner", apartment.owner);

// ====================AUTOCHECK 6.3===================

//TODO: Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// console.log(aptRating); //4
// console.log(aptDescr); //Spacious apartment in the city center
// console.log(aptPrice); //2153
// console.log(aptTags); //["premium", "promoted", "top"]

// ====================AUTOCHECK 6.4===================

//TODO: Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта
//TODO: apartment.

// ownerName - ім'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів масиву у властивості tags;
// firstTag - перший елемент масиву у властивості tags;
// lastTag - останній елемент масиву у властивості tags.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length-1];
// // Change code above this line

// console.log(ownerName); //Henry
// console.log(ownerPhone); //982-126-1588
// console.log(ownerEmail); //henry.carter@aptmail.com
// console.log(numberOfTags); //3
// console.log(firstTag); //premium
// console.log(lastTag); //top

// ====================AUTOCHECK 6.5===================

//TODO: Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей
//TODO: об'єкта apartment, використовуючи синтаксис «квадратних дужок».

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

// console.log(aptRating); //4
// console.log(aptDescr); //Spacious apartment in the city center
// console.log(aptPrice); //2153
// console.log(aptTags); //["premium", "promoted", "top"]

// ====================AUTOCHECK 6.6===================

//TODO: Доповни код, оновивши значення властивостей об'єкта apartment:

//TODO: ціну у властивості price на 5000;
//TODO: рейтинг квартири у властивості rating на 4.7;
//TODO: ім'я власника у вкладеній властивості name на "Henry Sibola";
//TODO: масив тегів у властивості tags, додавши в кінець рядок "trusted".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log("aapartment", apartment);

// ====================AUTOCHECK 6.7===================

//TODO: Додай об'єкту apartment кілька нових властивостей:

//TODO: area - площа в квадратних метрах, число 60;
//TODO: rooms - кількість кімнат, число 3;
//TODO: location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
//TODO: country - країна, рядок "Jamaica";
//TODO: city - місто, рядок "Kingston".

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// }

// // Change code below this line

// console.log(apartment.area); //60
// console.log(apartment.rooms); //3
// console.log(apartment.location); //[country: "Jamaica", city: "Kingston"]
// console.log(apartment.location.country); //Jamaica
// console.log(apartment.location.city); //Kingston


// ====================AUTOCHECK 6.8===================

//TODO: Доповни код оголошення об'єкта таким чином, щоб у нього були властивості name, price, image і
//TODO: tags зі значеннями зі змінних з аналогічними іменами.Обов'язково використовуй синтаксис коротких
//TODO: властивостей.

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

// console.log(product.name); //Repair Droid
// console.log(product.price); //2500
// console.log(product.image); //https://via.placeholder.com/640x480
// console.log(product.tags); //["on sale", "trending", "best buy"]

// ====================AUTOCHECK 6.9===================

//TODO: Доповни код оголошення об'єкта credentials таким чином, щоб в результаті у нього були дві
//TODO: властивості: email і password, імена яких зберігаються у змінних emailInputName і
//TODO: passwordInputName.

//TODO: Значенням властивості email повинен бути рядок "henry.carter@aptmail.com", а значенням
//TODO: властивості password - рядок "jqueryismyjam".

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line

//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",

//   // Change code above this line
// };

// console.log(credentials.email); //henry.carter@aptmail.com
// console.log(credentials.password); //jqueryismyjam

// ====================AUTOCHECK 6.10===================

//TODO: Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі,
//TODO: а в масив values всі значення його властивостей.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// // Change code below this line

// console.log(keys);
// console.log(values);

// ====================AUTOCHECK 6.11===================

//TODO: Виконай рефакторинг рішення попереднього завдання, додавши в цикл for...in
//TODO: перевірку на власну властивість.

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Change code above this line
// }

// console.log(apartment);

// ====================AUTOCHECK 6.12===================

//TODO: Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта
//TODO: в параметрі object.
//TODO: Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   // Change code above this line
//   return propCount;
// }

// console.log({}); //0
// console.log(countProps({ name: "Mango", age: 2 })); //2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); //3
// // При использовании for..in в переменную key помещается сам ключ, являющийся строкой.
// // Таким образом в текущей реализации собирается большая строка, содержащая имена всех перечислимых
// // ключей.Для того, чтобы найти количество, достаточно было увеличивать счетчик на единицу

// ====================AUTOCHECK 6.13===================

//TODO: Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
//TODO: Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, і додай в
//TODO: масив values всі значення його властивостей.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(values); //['descr', 'rating', 'price']

// ====================AUTOCHECK 6.14===================

//TODO: Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і,
//TODO: можливо, але не обов'язково, цикл for...of.

// function countProps(object) {
//   // Change code below this line
//   const keys = Object.keys(object);
//   const propCount = keys.length;

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({})); //0
// console.log(countProps({ name: "Mango", age: 2 })); //2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); //3

// ====================AUTOCHECK 6.15===================

//TODO: Запиши у змінну keys масив ключів власних властивостей об'єкта apartment,
//TODO: а у змінну values - масив всіх значень його властивостей.Використовуй
//TODO: методи Object.keys() і Object.values().

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys); //['descr', 'rating', 'price']
// console.log(values); // ['Spacious apartment in the city center', 4, 2153]

// ====================AUTOCHECK 6.16===================

//TODO: Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості -
//TODO: це ім'я співробітника, а значення властивості - це зарплата. Функція повинна розрахувати
//TODO: загальну суму зарплат співробітників і повернути її.Використовуй змінну totalSalary для
//TODO: зберігання загальної суми зарплати.

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({})); //0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); //400

// ====================AUTOCHECK 6.17===================

//TODO: Перебери масив об'єктів colors, використовуючи цикл for...of.
//TODO: Додай у масив hexColors значення властивостей hex, а в масив rgbColors -
//TODO: значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors); //['#f44336', '#2196f3', '#4caf50', '#ffeb3b']
// console.log(rgbColors); //['244,67,54', '33,150,243', '76,175,80', '255,235,59']

// ====================AUTOCHECK 6.18===================

//TODO: Напиши функцію getProductPrice(productName), яка приймає один параметр productName -
//TODO: назва продукту.Функція шукає об'єкт продукту з таким ім'ям(властивість name) в
//TODO: масиві products і повертає його ціну(властивість price).Якщо продукт з такою назвою не
//TODO: знайдений, функція повинна повертати null.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) {
//      return product.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }

// console.log(getProductPrice("Radar")); //1300
// console.log(getProductPrice("Grip")); //1200
// console.log(getProductPrice("Scanner")); //2700
// console.log(getProductPrice("Droid")); //400
// console.log(getProductPrice("Engine")); //null

// ====================AUTOCHECK 6.19===================

//TODO: Напиши функцію getAllPropValues(propName), яка приймає один параметр propName -
//TODO: ім'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості
//TODO: з таким ім'ям з кожного об'єкта в масиві products.Якщо в об'єктах відсутні властивості
//TODO: з таким ім'ям, функція повинна повернути порожній масив.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const propNameValues = [];

//   for (const product of products) {

//     if (product.hasOwnProperty(propName)) {
//       propNameValues.push(product[propName]);
//     }
//   }

//   return propNameValues;
//   // Change code above this line
// }

// console.log(getAllPropValues("name")); //["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")); //[4, 3, 7, 9]
// console.log(getAllPropValues("price")); //[1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); //[]

// ====================AUTOCHECK 6.20===================

//TODO: Напиши функцію calculateTotalPrice(productName), яка приймає один параметр
//TODO: productName - назва товару.Функція повинна повернути загальну вартість(ціна * кількість)
//TODO: товару з таким ім'ям з масиву products.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return 0;

//   // Change code above this line
// }

// console.log(calculateTotalPrice("Blaster")); //0
// console.log(calculateTotalPrice("Radar")); //5200
// console.log(calculateTotalPrice("Droid")); //2800
// console.log(calculateTotalPrice("Grip")); //10800
// console.log(calculateTotalPrice("Scanner")); //8100



// ====================AUTOCHECK 7.1===================

//TODO: Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру за три дні
//TODO: (meanTemperature).Заміни оголошення змінних yesterday, today і tomorrow однією операцією
//TODO: деструктуризації властивостей об'єкта highTemperatures.

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature); //29

// ====================AUTOCHECK 7.2===================

//TODO: У прогнозі максимальних температур також може бути необов'язкова властивість icon -
//TODO: іконка погоди.Заміни оголошення змінних yesterday, today, tomorrow і icon однією операцією
//TODO: деструктуризації властивостей об'єкта highTemperatures. Задай значення за замовчуванням
//TODO: для icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday, today, tomorrow,  icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature); //29

// ====================AUTOCHECK 7.3===================

//TODO: Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon однією операцією
//TODO: деструктуризації властивостей об'єкта highTemperatures. Задай значення за замовчуванням для
//TODO: highIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(meanTemperature); //29

// ====================AUTOCHECK 7.4===================

//TODO: Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація
//TODO: об'єкта.

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors); //['#f44336', '#2196f3', '#4caf50', '#ffeb3b']
// console.log(rgbColors); //['244,67,54', '33,150,243', '76,175,80', '255,235,59']

// ====================AUTOCHECK 7.5===================

//TODO: Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами,
//TODO: а також необов'язковими іконками. Заміни оголошення всіх змінних однією операцією
//TODO: деструктуризації властивостей об'єкта forecast.Задай значення за замовчуванням для іконок,
//TODO: змінних todayIcon і tomorrowIcon -
//TODO: рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
//   }
// } = forecast;

// console.log(lowToday); //28
// console.log(highToday); //32
// console.log(todayIcon); //https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg

// console.log(lowTomorrow); //27
// console.log(highTomorrow); // 31
// console.log(tomorrowIcon); //https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg

// ====================AUTOCHECK 7.6===================

//TODO: Функція calculateMeanTemperature(forecast) приймає один параметр forecast - об'єкт температур
//TODO: на два дні наступного формату.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh однією операцією
// деструктуризації властивостей об'єкта forecast.

// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh }
//   } = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } })); //28.5
// console.log(calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } })); //37

// ====================AUTOCHECK 7.7===================

//TODO: У змінній scores зберігається масив результатів тестування.Використовуючи розподіл і методи
//TODO: Math.max() і Math.min(), доповни код таким чином, щоб у змінній bestScore був найвищий бал,
//TODO: а у worstScore - найнижчий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore); //89
// console.log(worstScore); //17

// ====================AUTOCHECK 7.8===================

//TODO: У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати
//TODO: тестування окремих груп.Використовуючи розподіл, доповни код таким чином, щоб:

//TODO: У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
//TODO: У змінній bestScore був найвищий загальний бал.
//TODO: У змінній worstScore був найнижчий загальний бал.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores,...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores); //[64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// console.log(bestScore); //97
// console.log(worstScore); //14

// ====================AUTOCHECK 7.9===================

//TODO: В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням,
//TODO: які зберігаються у змінній defaultSettings.Під час створення тесту, усі або частину
//TODO: налаштувань можна перевизначити, вони зберігаються у змінній overrideSettings.

//TODO: Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням
//TODO: і поверх них застосувати перевизначені налаштування.Доповни код таким чином, щоб у змінній
//TODO: finalSettings утворився об'єкт фінальних налаштувань тесту.

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings); //{theme: 'light', public: false, withPassword: true, minNumberOfQuestions: 10, timePerQuestion: 30}

// ====================AUTOCHECK 7.10===================

//TODO: Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

//TODO: text - текст завдання.
//TODO: category - категорія завдання.
//TODO: priority - пріоритет завдання.
//TODO: Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data.
//TODO: У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній
//TODO: локальній змінній.

//TODO: В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority,
//TODO: можуть бути відсутніми.Тоді, в новому об'єкті завдання, у властивостях category і priority
//TODO: повинні бути значення за замовчуванням, що зберігаються в однойменних локальних змінних.

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
  
//   // Change code below this line
//   return {category, priority, ...data, completed};
//   // Change code above this line
// }

// console.log(makeTask({})); //{ category: "General", priority: "Normal", completed: false }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })); //{ category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// console.log(makeTask({ category: "Finance", text: "Take interest" })); //{ category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" })); //{ category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// console.log(makeTask({ text: "Buy bread" })); //{ category: "General", priority: "Normal", text: "Buy bread", completed: false }

// ====================AUTOCHECK 7.11===================

//TODO: Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь - яку
//TODO: кількість аргументів, рахувала і повертала їх суму.

// Change code below this line
// function add(...args) {
//   let sum = 0;
//   let values = Object.values(args);
//   for (const value of values) {
//     sum += value;
//   }

//   return sum;
// }

// console.log(add(15, 27)); //42
// console.log(add(12, 4, 11, 48)); //75
// console.log(add(32, 6, 13, 19, 8)); //78
// console.log(add(74, 11, 62, 46, 12, 36)); //241

// ====================AUTOCHECK 7.12===================

//TODO: Функція addOverNum() рахує суму всіх аргументів.Зміни параметри і тіло функції addOverNum()
//TODO: таким чином, щоб вона рахувала суму тільки тих аргументів, які більші за задане число.
//TODO: Це число повинно бути першим параметром функції.

// // Change code below this line
// function addOverNum(number, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > number) {
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27)); //0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); //51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //218

// ====================AUTOCHECK 7.13===================

//TODO: Функція findMatches() приймає довільну кількість аргументів.
//TODO: Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.

//TODO: Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому
//TODO: будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

//TODO: Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив[1, 2],
//TODO: тому що тільки вони є в масиві першого аргументу.

// // Change code below this line
// function findMatches(arg, ...numbers) {
//   const matches = []; // Don't change this line
//   for (let number of numbers) {
//     if (arg.includes(number)) {
//       matches.push(number);
//     }
//   }

//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); //[1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); //[17, 89, 2]
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); //[24, 9, 41]
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); //[]

// ====================AUTOCHECK 7.14===================

//TODO: Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією
//TODO: з getBooks() і addBook(bookName).

//TODO: Метод removeBook(bookName) буде видаляти книгу за назвою.Повертає рядок "Deleting book
//TODO: < назва книги > ", де <назва книги> - це значення параметра bookName.

//TODO: Метод updateBook(oldName, newName) буде оновлювати назву книги на нову.Повертає рядок
//TODO: "Updating book <стара назва> to <нова назва>", де < стара назва > і < нова назва > -
//TODO: це значення параметрів oldName і newName відповідно.

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   }
//   // Change code above this line
// };

// console.log(bookShelf.getBooks()); //"Returning all books"
// console.log(bookShelf.addBook("Haze")); //"Adding book Haze"
// console.log(bookShelf.removeBook("Red sunset")); //"Deleting book Red sunset"
// console.log(bookShelf.updateBook("Sands of dune", "Dune")); //"Updating book Sands of dune to Dune"

// ====================AUTOCHECK 7.15===================

//TODO: Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName
//TODO: на newName у властивості books.Використовуй indexOf() для того, щоб знайти потрібний елемент
//TODO: масиву, і splice() для того, щоб замінити цей елемент.

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const bookIndex = this.books.indexOf(oldName);

//     if (bookIndex !== -1) {
//       this.books.splice(bookIndex, 1, newName);
//     }

//     return this.books;
//   },
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles")); // ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// console.log(bookShelf.updateBook("The last kingdom", "Dune")); // ["Dune", "Dungeon chronicles", "The guardian of dreams"]

// ====================AUTOCHECK 7.16-17.21===================

//TODO: До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення
//TODO: інвентарю - додавання, видалення, пошуку та оновлення зілля.

//TODO: Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками.
//TODO: Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з масивом об'єктів.

// getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.
// addPotion(newPotion) - додає зілля newPotion(вже об'єкт) в масив у властивості potions,
// але тільки, якщо такого зілля ще немає в інвентарі.В іншому випадку повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
// updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на
// newName в масиві potions.

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (let potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     let potionIndex = 0;
//     for (let potion of this.potions){
//     if (potion.name === potionName) {
//       potionIndex = this.potions.splice(this.potions.indexOf(potion), 1);
//     }
//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }
//     }
//   },

//   updatePotionName(oldName, newName) {
//     for (let potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },

//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions()); //[ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]



// ====================AUTOCHECK 8.1===================

//TODO: Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza,
//TODO: а у змінній pointer було посилання на функцію makePizza.

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.log(pointer);

// ====================AUTOCHECK 8.2===================

//TODO: Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром(параметр callback)
//TODO: колбек - функцію і повертала її виклик.Функція deliverPizza або makePizza буде передаватися як
//TODO: колбек і очікувати аргументом ім'я готової піци, що доставляється.

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza)) //"Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage("Ultracheese", deliverPizza)) //"Delivering Ultracheese pizza."

// ====================AUTOCHECK 8.3===================

//TODO: Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн
//TODO: колбек - функцію eatPizza(pizzaName), яка логує рядок "Eating pizza <назва піци>".

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });

// ====================AUTOCHECK 8.4===================

//TODO: Необхідно написати логіку обробки замовлення піци.
//TODO: Виконай рефакторинг методу order таким чином, щоб він приймав другим і третім параметром два
//TODO: колбеки onSuccess і onError.

//TODO: Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, метод order повинен
//TODO: повертати результат виклику колбека onError, передаючи йому аргументом рядок
//TODO: "There is no pizza with a name <имя пиццы> in the assortment."
//TODO: Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, метод order повинен
//TODO: повертати результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.
//TODO: Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого
//TODO: там не міняй.

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return onError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//   },
// }
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError)); //Your order is accepted. Cooking pizza Smoked.
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError)); //Your order is accepted. Cooking pizza Four meats.
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError)); //Error! There is no pizza with a name Big Mike in the assortment.
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError)); //Error! There is no pizza with a name Vienna in the assortment.

// ====================AUTOCHECK 8.5===================

//TODO: Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел,
//TODO: і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається
//TODO: як результат роботи функції.

//TODO: Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод
//TODO: forEach.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(function (orderedItem, index) {
//     totalPrice += orderedItems[index];
//   })

//  // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); //138
// console.log(calculateTotalPrice([164, 48, 291])); //503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116

// ====================AUTOCHECK 8.6===================

//TODO: Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив,
//TODO: в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.

//TODO: Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//     return;
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); //[5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //[]
// console.log(filterArray([12, 24, 8, 41, 76], 38)); //[41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //[24, 41, 76]

// ====================AUTOCHECK 8.7===================

//TODO: Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної довжини в параметри
//TODO: firstArray і secondArray, і повертає новий масив їхніх спільних елементів, тобто тих, які присутні в обох масивах.

//TODO: Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(number => {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); //[2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //[1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //[12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //[10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //[]

// ====================AUTOCHECK 8.8===================

//TODO: Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.

// // Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// // Change code above this line

// console.log(calculateTotalPrice(5, 100)); //500
// console.log(calculateTotalPrice(8, 60)); //480
// console.log(calculateTotalPrice(3, 400)); //1200

// ====================AUTOCHECK 8.9===================

//TODO: Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона використовувала неявне повернення.

// // Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// // Change code above this line

// console.log(calculateTotalPrice(5, 100)); //500
// console.log(calculateTotalPrice(8, 60)); //480
// console.log(calculateTotalPrice(3, 400)); //1200

// ====================AUTOCHECK 8.10===================

//TODO: Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію.
//TODO: Заміни колбек - функцію, передану в метод forEach(), на стрілочну функцію.

// // Change code below this line
// const calculateTotalPrice = (orderedItems => {
//   let totalPrice = 0;
//   orderedItems.forEach(item => totalPrice += item);
//   return totalPrice;
// });
// // Change code above this line

// console.log(calculateTotalPrice([12, 85, 37, 4])); //138
// console.log(calculateTotalPrice([164, 48, 291])); //503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); //1116

// ====================AUTOCHECK 8.11===================

//TODO: Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.

// // Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
  
// console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); //[5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //[]
// console.log(filterArray([12, 24, 8, 41, 76], 38)); //[41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //[24, 41, 76]

// ====================AUTOCHECK 8.12===================

//TODO: Заміни оголошення функції getCommonElements() і колбек для методу forEach() на стрілочні функції.

// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); //[2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //[1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //[12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //[10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //[]

// ====================AUTOCHECK 9.1===================

//TODO: Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне
//TODO: число, додаючи до нього значення параметра value.

//TODO: Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала,
//TODO: наповнювала і повертала новий масив з оновленими значеннями.

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];

//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//       return;
//     }
//     newArray.push(number);
//   });

//   return newArray;
//   // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10)); //[1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); //[12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); //[17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); //[144, 13, 81, 192, 136, 154]

// ====================AUTOCHECK 9.2===================

//TODO: Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет.
//TODO: Обов'язково використовуй метод map().

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths); //[5, 4, 5, 7]

// ====================AUTOCHECK 9.3===================

//TODO: Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв книг
//TODO: (властивість title) з усіх об'єктів масиву books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log(titles); //["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]

// ====================AUTOCHECK 9.4===================

//TODO: Використовуючи метод flatMap(), зроби так, щоб у змінній genres
//TODO: вийшов масив усіх жанрів книг(властивість genres) з масиву книг books.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);
// console.log(genres); //[ "adventure", "history", "fiction", "horror", "mysticism" ]

// ====================AUTOCHECK 9.5===================

//TODO: Доповни функцію getUserNames(users) таким чином, щоб вона повертала масив імен користувачів(властивість name)
//TODO: з масиву об'єктів в параметрі users.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// // Change code below this line

// const getUserNames = users.map(user => user.name);
// // Change code above this line
// console.log(getUserNames); //["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// ====================AUTOCHECK 9.6===================

//TODO: Доповни функцію getUserEmails(users) таким чином, щоб вона повертала масив поштових адрес
//TODO: користувачів(властивість email) з масиву об'єктів в параметрі users.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// // Change code below this line
// const getUserEmails = users.map(user => user.email);
// // Change code above this line

// console.log(getUserEmails)//["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]

// ====================AUTOCHECK 9.7===================

//TODO: Доповни код таким чином, щоб у змінній evenNumbers утворився масив парних чисел з масиву numbers,
//TODO: а в змінній oddNumbers - масив непарних.Обов'язково використовуй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers); //[24, 82, 36, 18, 52]
// console.log(oddNumbers); //[17, 61, 47, 73]

// ====================AUTOCHECK 9.8===================

//TODO: Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг(властивість genres) з масиву books,
//TODO: а у змінній uniqueGenres - масив унікальних жанрів, без повторень.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);

// console.log(allGenres); //["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// console.log(uniqueGenres); //["adventure", "history", "fiction", "mysticism", "horror"]

// ====================AUTOCHECK 9.9===================

//TODO: Використовуючи метод filter(), доповни код таким чином, щоб:

//TODO: У змінній topRatedBooks утворився масив книг, рейтинг яких(властивість rating) більший за або дорівнює
//TODO: значенню змінної MIN_RATING.
//TODO: У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author),
//TODO: яке збігається зі значенням у змінній AUTHOR.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);

// ====================AUTOCHECK 9.10===================

//TODO: Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів,
//TODO: у яких колір очей(властивість eyeColor) збігається зі значенням параметра color.

// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor.includes(color));
// };
// // Change code above this line

// console.log(getUsersWithEyeColor(users, "blue"));
// console.log(getUsersWithEyeColor(users, "green"));
// console.log(getUsersWithEyeColor(users, "brown"));

// ====================AUTOCHECK 9.11===================

//TODO: Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином, щоб вона повертала масив користувачів,
//TODO: вік яких(властивість age) потрапляє у проміжок від minAge до maxAge.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age <= maxAge && user.age >= minAge);
// };
// // Change code above this line

// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));
// console.log(getUsersWithAge(users, 80, 100));//[]

// ====================AUTOCHECK 9.12===================

//TODO: Доповни функцію getUsersWithFriend(users, friendName) таким чином, щоб вона повертала масив користувачів,
//TODO: у яких є один з ім'ям в параметрі friendName. Масив друзів користувача зберігається у властивості friends.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(({ friends }) =>
//     friends.includes(friendName));
// };
// // Change code above this line

// console.log(getUsersWithFriend(users, "Briana Decker"));
// console.log(getUsersWithFriend(users, "Goldie Gentry"));
// console.log(getUsersWithFriend(users, "Adrian Cross")); //[]

// ====================AUTOCHECK 9.13===================

//TODO: Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх користувачів
//TODO: (властивість friends).У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив,
//TODO: що повертається, не містив повторень.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// // Change code below this line
// const getFriends = (users) => {
//   return users
//     .flatMap(({friends}) => friends)
//     .filter((friends, index, arr) => arr.indexOf(friends) === index);
// }

// // Change code above this line
// console.log(getFriends(users));

// ====================AUTOCHECK 9.14===================

//TODO: Доповни функцію getActiveUsers(users) таким чином, щоб вона повертала масив активних користувачів,
//TODO: значення властивості isActive яких - true.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// // Change code below this line
// const getActiveUsers = (users) => {
//   return users.filter(({ isActive }) => isActive === true);
// };
// // Change code above this line
// console.log(getActiveUsers(users));

// ====================AUTOCHECK 9.15===================

//TODO: Доповни функцію getInactiveUsers(users) таким чином, щоб вона повертала масив неактивних користувачів,
//TODO: значення властивості isActive яких - false.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// // Change code below this line
// const getInactiveUsers = (users) => {
//   return users.filter(({ isActive }) => isActive === false);
// };
// // Change code above this line

// console.log(getInactiveUsers(users));

// ====================AUTOCHECK 9.16===================

//TODO: Використовуючи метод find(), доповни код таким чином, щоб:

//TODO: У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням
//TODO: змінної BOOK_TITLE.
//TODO: У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням
//TODO: змінної AUTHOR.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(({title}) => title === BOOK_TITLE);
// const bookByAuthor = books.find(({author}) => author === AUTHOR );

// console.log(bookWithTitle); //{title: 'The Dream of a Ridiculous Man', author: 'Fyodor Dostoevsky', rating: 7.75}
// console.log(bookByAuthor); //{title: 'Beside Still Waters', author: 'Robert Sheckley', rating: 8.51}

// ====================AUTOCHECK 9.17===================

//TODO: Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача,
//TODO: пошта якого(властивість email) збігається зі значенням параметра email.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // Change code below this line
// const getUserWithEmail = (users, email) => {
//   return users.find( user => user.email === email);
// };
// // Change code above this line

// console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// console.log(getUserWithEmail(users, "elmahead@omatom.com"));
// console.log(getUserWithEmail(users, "blackburndotson@furnigeer.com"));

// ====================AUTOCHECK 9.18===================

//TODO: Використовуючи метод every(), доповни код таким чином, щоб:

//TODO: У змінній eachElementInFirstIsEven був результат перевірки всіх елементів масиву firstArray на парність.
//TODO: У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів масиву firstArray на непарність.
//TODO: У змінній eachElementInSecondIsEven був результат перевірки всіх елементів масиву secondArray на парність.
//TODO: У змінній eachElementInSecondIsOdd був результат перевірки всіх елементів масиву secondArray на непарність.
//TODO: У змінній eachElementInThirdIsEven був результат перевірки всіх елементів масиву thirdArray на парність.
//TODO: У змінній eachElementInThirdIsOdd був результат перевірки всіх елементів масиву thirdArray на непарність.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(numbers => numbers % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(numbers => numbers % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(numbers => numbers % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(numbers => numbers % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(numbers => numbers % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(numbers => numbers % 2 !== 0);

// console.log(eachElementInFirstIsEven); //true
// console.log(eachElementInFirstIsOdd); //false
// console.log(eachElementInSecondIsEven); //false
// console.log(eachElementInSecondIsOdd); //true
// console.log(eachElementInThirdIsEven); //false
// console.log(eachElementInThirdIsOdd); //false

// ====================AUTOCHECK 9.19===================

//TODO: Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла, чи всі користувачі зараз
//TODO: активні(властивість isActive) і повертала true або false.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // Change code below this line
// const isEveryUserActive = (users) => {
//   return users.every(({ isActive }) => isActive === true);
// };
// // Change code above this line

// console.log(isEveryUserActive(users)); //false

// ====================AUTOCHECK 9.20===================

//TODO: Використовуючи метод some(), доповни код таким чином, щоб:

//TODO: У змінній anyElementInFirstIsEven був результат перевірки наявності парних елементів в масиві firstArray.
//TODO: У змінній anyElementInFirstIsOdd був результат перевірки наявності непарних елементів в масиві firstArray.
//TODO: У змінній anyElementInSecondIsEven був результат перевірки наявності парних елементів в масиві secondArray.
//TODO: У змінній anyElementInSecondIsOdd був результат перевірки наявності непарних елементів в масиві secondArray.
//TODO: У змінній anyElementInThirdIsEven був результат перевірки наявності парних елементів в масиві thirdArray.
//TODO: У змінній anyElementInThirdIsOdd був результат перевірки наявності непарних елементів в масиві thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some((element) => element % 2 === 0);
// console.log(anyElementInFirstIsEven); //true

// const anyElementInFirstIsOdd = firstArray.some((element) => element % 2 !== 0);
// console.log(anyElementInFirstIsOdd); //false

// const anyElementInSecondIsEven = secondArray.some((element) => element % 2 === 0);
// console.log(anyElementInSecondIsEven); //false

// const anyElementInSecondIsOdd = secondArray.some((element) => element % 2 !== 0);
// console.log(anyElementInSecondIsOdd); //true

// const anyElementInThirdIsEven = thirdArray.some((element) => element % 2 === 0);
// console.log(anyElementInThirdIsEven); //true

// const anyElementInThirdIsOdd = thirdArray.some((element) => element % 2 !== 0);
// console.log(anyElementInThirdIsOdd); //true

// ====================AUTOCHECK 9.21===================

//TODO: Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність активних
//TODO: користувачів(властивість isActive) і повертала true або false.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // Change code below this line
// const isAnyUserActive = users => {
//   return users.some(({ isActive }) => isActive === true);
// };
// // Change code above this line

// console.log(isAnyUserActive(users)); //true

// ====================AUTOCHECK 9.22===================

//TODO: Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх.
//TODO: Доповни код таким чином, щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes.

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };

// const playtimes = Object.values(players);
// console.log(playtimes)// [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previosPlaytime, time) => {
//   return previosPlaytime + time;
// });
// console.log(totalPlayTime); //2692
// // Change code above this line

// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime); //673

// ====================AUTOCHECK 9.23===================

//TODO: Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати
//TODO: загальну суму цих значень часу.Розрахувати час для кожного з гравців можна, розділивши його
//TODO: час(властивість playtime) на кількість ігор(властивість gamesPlayed).

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//     return total + player.playtime / player.gamesPlayed;
// }, 0);

// console.log(totalAveragePlaytimePerGame); //1023

// ====================AUTOCHECK 9.24===================

//TODO: Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і повертала суму всіх коштів
//TODO: (властивість balance), які зберігають користувачі з масиву users.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // Change code below this line

// const calculateTotalBalance = users => {
//   const totalBalance = users.reduce((acc, user) => {
//     return acc + user.balance;
//   }, 0);

//   return totalBalance;
// };

// // Change code above this line

// console.log(calculateTotalBalance(users)); //20916

// ====================AUTOCHECK 9.25===================

//TODO: Доповни функцію getTotalFriendCount(users) таким чином, щоб вона рахувала і повертала загальну кількість
//TODO: друзів(властивість friends) усіх користувачів з масиву users.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // Change code below this line

// const getTotalFriendCount = users => users.reduce((totalFriend, user) => {
//     return totalFriend + user.friends.length;
// }, 0);
  
// // Change code above this line

//console.log(getTotalFriendCount(users)); //14

// ====================AUTOCHECK 9.26===================

//TODO: Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates,
//TODO: відсортована за зростанням, а у змінній alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates); //[1967, 1973, 1984, 1997, 2008, 2012, 2016]
// console.log(alphabeticalAuthors); //["Bernard Cornwell", "Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky"]

// ====================AUTOCHECK 9.27===================

//TODO: Онлайн бібіліотеці необхідно відображати книги, відсортовані за датою видання,
//TODO: за її зростанням або спаданням.Доповни код таким чином, щоб у змінній ascendingReleaseDates
//TODO: вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній
//TODO: descendingReleaseDates - копія, відсортована за спаданням.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates); //[1967, 1973, 1984, 1997, 2008, 2012, 2016]
// console.log(descendingReleaseDates); //[2016, 2012, 2008, 1997, 1984, 1973, 1967]

// ====================AUTOCHECK 9.28===================

//TODO: Онлайн бібіліотеці необхідно відображати книги, відсортовані за автором,
//TODO: в алфавітному і зворотному алфавітному порядку.Доповни код таким чином, щоб у змінній
//TODO: authorsInAlphabetOrder вийшла копія масиву authors, відсортована за алфавітом,
//TODO: а у змінній authorsInReversedOrder - копія, відсортована у зворотному алфавітному порядку.

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder); //["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
// console.log(authorsInReversedOrder); //["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]

// ====================AUTOCHECK 9.29===================

//TODO: Доповни код таким чином, щоб:

//TODO: У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
//TODO: У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
//TODO: У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
//TODO: У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName =[...books].sort((firstName, secondName) => firstName.author.localeCompare(secondName.author));
// console.log(sortedByAuthorName);

// const sortedByReversedAuthorName = [...books].sort((firstName, secondName) => secondName.author.localeCompare(firstName.author));
// console.log(sortedByReversedAuthorName);

// const sortedByAscendingRating = [...books].sort((firstRating, secondRating) => firstRating.rating - secondRating.rating);
// console.log(sortedByAscendingRating);

// const sortedByDescentingRating = [...books].sort((firstRating, secondRating) => secondRating.rating - firstRating.rating);
// console.log(sortedByDescentingRating);

// ====================AUTOCHECK 9.30===================

//TODO: Доповни функцію sortByAscendingBalance(users) таким чином,
//TODO: щоб вона повертала масив користувачів, відсортований за зростанням їх балансу(властивість balance).

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // Change code below this line
// const sortByAscendingBalance = users => {
//   return [...users].sort((a, b) => a.balance - b.balance);
// };
// // Change code above this line

// console.log(sortByAscendingBalance(users));

// ====================AUTOCHECK 9.31===================

//TODO: Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона повертала масив користувачів,
//TODO: відсортований за спаданням кількості їхніх друзів(властивість friends).

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // Change code below this line

// const sortByDescendingFriendCount = users => {
//    return [...users].sort((a,b) => b.friends.length - a.friends.length)
// };

// // Change code above this line

// console.log(sortByDescendingFriendCount(users));

// ====================AUTOCHECK 9.32===================

//TODO: Доповни функцію sortByName(users) таким чином, щоб вона повертала масив
//TODO: користувачів, відсортований за їх ім'ям (властивість name) в алфавітному порядку.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // Change code below this line

// const sortByName = users => {
//     return [...users].sort((firstName, secondName) => firstName.name.localeCompare(secondName.name))
// };

// // Change code above this line

// console.log(sortByName(users));

// ====================AUTOCHECK 9.33===================

//TODO: Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку,
//TODO: рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// // Change code below this line

// const names = [...books]
// .sort((firstName, secondName) => firstName.author.localeCompare(secondName.author))
// .filter(book => book.rating > MIN_BOOK_RATING)
// .map(book => book.author);

// console.log(names); //['Bernard Cornwell', 'Howard Lovecraft', 'Robert Sheckley']

// ====================AUTOCHECK 9.34===================

//TODO: Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона повертала масив імен користувачів,
//TODO: відсортований за зростанням кількості їхніх друзів(властивість friends).

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // Change code below this line

// const getNamesSortedByFriendCount = users => {
//     return [...users]
//     .sort((firstName, secondName) => firstName.friends.length - secondName.friends.length)
//     .map(user => user.name)
// };

// // Change code above this line

// console.log(getNamesSortedByFriendCount(users)); //['Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Sheree Anthony', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson']

// ====================AUTOCHECK 9.35===================

//TODO: Доповни функцію getSortedFriends(users) таким чином, щоб вона повертала масив унікальних імен друзів
//TODO: (властивість friends), відсортований за алфавітом.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // Change code below this line
// const getSortedFriends = users => {
//    return [...users]
//    .flatMap(user => user.friends)
//    .filter((user, index, array) => array.indexOf(user) === index)
//    .sort((firstName, secondName) => firstName.localeCompare(secondName))
// };
// // Change code above this line

// console.log(getSortedFriends(users)); //['Adrian Cross', 'Aisha Tran', 'Briana Decker', 'Eddie Strong', 'Goldie Gentry', 'Jacklyn Lucas', 'Jordan Sampson', 'Linda Chapman', 'Marilyn Mcintosh', 'Naomi Buckner', 'Padilla Garrison', 'Sharron Pace', 'Solomon Fokes']

// ====================AUTOCHECK 9.36===================

//TODO: Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний баланс
//TODO: користувачів(властивість balance), стать яких(властивість gender) збігається зі значенням параметра gender.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//   return users
//     .filter(user => user.gender === gender)
//     .reduce((total, user) => total + user.balance, 0)
// };
// // Change code above this line

// console.log(getTotalBalanceByGender(users, "male")); //12053
// console.log(getTotalBalanceByGender(users, "female")); //8863



// ====================AUTOCHECK 10.1===================

//TODO: Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//     checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//     },

//     order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//         return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
//   // Change code above this line
// };

// console.log(pizzaPalace.order("Smoked")) //"Order accepted, preparing «Smoked» pizza"
// console.log(pizzaPalace.order("Four meats")) //"Order accepted, preparing «Four meats» pizza"
// console.log(pizzaPalace.order("Big Mike")) //"Sorry, there is no pizza named «Big Mike»"
// console.log(pizzaPalace.order("Viennese")) //"Sorry, there is no pizza named «Viennese»"

// ====================AUTOCHECK 10.2===================

//TODO: Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі.
//TODO: Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

//TODO: Після оголошення об'єкта ми додали виклики методів у тій послідовності, в якій твій код перевірятимуть тести.
//TODO: Будь ласка, нічого там не змінюй.

// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],

//     // Change code below this line
//     getBalance() {
//         return this.balance;
//     },
//     getDiscount() {
//         return this.discount;
//     },
//     setDiscount(value) {
//         this.discount = value;
//     },
//     getOrders() {
//         return this.orders;
//     },
//     addOrder(cost, order) {
//         this.balance -= cost - cost * this.discount;
//         this.orders.push(order);
//     },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15

// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// ====================AUTOCHECK 10.3===================

//TODO: Тестувальники знайшли баги в коді сервісу зберігання історії замовлень їжі.
//TODO: Тобі необхідно виправити їх, правильно розставивши this в методах об'єкта historyService, щоб методи почали працювати правильно.

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails =this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail("solomon@topmail.net")); //[{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net")); //[{ email: "artemis@coldmail.net", dish: "Pizza" }]

// ====================AUTOCHECK 10.4===================

//TODO: Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// console.log(parent.hasOwnProperty("surname")); //true
// console.log(parent.hasOwnProperty("heritage")); //true
// console.log(child.hasOwnProperty("name")); //true
// console.log(child.hasOwnProperty("age")); //true
// console.log(child.age); //27
// console.log(child.hasOwnProperty("surname")); //false
// console.log(child.surname); //"Moore"
// console.log(child.hasOwnProperty("heritage")); //false
// console.log(child.heritage); //"Irish"
// console.log(parent.isPrototypeOf(child)); //true

// ====================AUTOCHECK 10.5===================

//TODO: Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent,
//TODO: а той, своєю чергою, був прототипом для child.

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // Change code above this line

// console.log(ancestor.isPrototypeOf("parent")); //true
// console.log(parent.isPrototypeOf("child")); //true
// console.log(ancestor.hasOwnProperty("surname")); //true
// console.log(ancestor.surname); //"Dawson"
// console.log(parent.hasOwnProperty("surname")); //true
// console.log(parent.surname); //"Moore"
// console.log(child.hasOwnProperty("surname")); //false
// console.log(child.surname); //"Moore"
// console.log(ancestor.hasOwnProperty("heritage")); //true
// console.log(ancestor.heritage); //"Irish"
// console.log(parent.hasOwnProperty("heritage")); //false
// console.log(parent.heritage); //"Irish"
// console.log(child.hasOwnProperty("heritage")); //false
// console.log(child.heritage); //"Irish"



// ====================AUTOCHECK 11.1===================

//TODO: Використовуючи ключове слово class, оголоси клас Car з порожнім тілом.

// class Car {
//     constructor(){
    
//   }
// }

// console.log(new Car());//{}

// ====================AUTOCHECK 11.2===================

//TODO: Додай класу Car метод constructor, який приймає три параметри:

//TODO: brand - марка автомобіля.
//TODO: model - модель автомобіля.
//TODO: price - ціна автомобіля.
//TODO: Клас Car повинен створювати об'єкт з однойменними властивостями brand, model і price, значеннями яких повинні бути передані аргументи під час його виклику з оператором new.

// class Car {
//   // Change code below this line
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// const audi = new Car("Audi", "Q3", 36000);
// console.log(audi); //{ brand: "Audi", model: "Q3", price: 36000 }

// const bmw = new Car("BMW", "X5", 58900);
// console.log(bmw); //{ brand: "BMW", model: "X5", price: 58900 }

// const nissan = new Car("BMW", "X5", 58900);
// console.log(nissan); //{ brand: "Nissan", model: "Murano", price: 31700 }

// ====================AUTOCHECK 11.3===================

//TODO: Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price.
//TODO: Деструктуризуй об'єкт в сигнатурі (підписі) конструктора.

// class Car {
//   // Change code below this line
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// const audi = new Car({
//   brand: "Audi",
//   model: "Q3",
//   price: 36000
// });
// console.log(audi); //{ brand: "Audi", model: "Q3", price: 36000 }

// const bmw = new Car({
//   brand: "BMW",
//   model: "X5",
//   price: 58900
// });
// console.log(bmw); //{ brand: "BMW", model: "X5", price: 58900 }

// const nissan = new Car({
//   brand: "Nissan",
//   model: "Murano",
//   price: 31700
// });
// console.log(nissan); //{ brand: "Nissan", model: "Murano", price: 31700 }

// ====================AUTOCHECK 11.4===================

//TODO: Додай класу Car два методи.

//TODO: getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
//TODO: changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на newPrice.

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   getPrice() {
//     return this.price;
//   }
  
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
//   // Change code above this line
// }

// ====================AUTOCHECK 11.5===================

//TODO: Напиши клас Storage, який буде створювати об'єкти для управління складом товарів.
//TODO: Клас очікує тільки один аргумент - початковий масив товарів, який записується у властивість items об'єкта, що створюється.

//TODO: Оголоси наступні методи класу:

//TODO: getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає цей метод.
//TODO: addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості items об'єкта, який викликає цей метод.
//TODO: removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у властивості items об'єкта, який викликає цей метод.
//TODO: Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести.
//TODO: Будь ласка, нічого там не змінюй.

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     return this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     const itemToRemoveIndex = this.items.indexOf(itemToRemove);
    
//     if (itemToRemoveIndex !== -1) {
//       this.items.splice(itemToRemoveIndex, 1);
//     }
//     return this.items;
//     }
//   }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);

// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");

// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");

// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ====================AUTOCHECK 11.6===================

//TODO: Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок, який записується у властивість value об'єкта, що створюється.

//TODO: Оголоси наступні методи класу:

//TODO: getValue() - повертає поточне значення властивості value.
//TODO: padEnd(str) - отримує параметр str (рядок) і додає його в кінець значення властивості value об'єкта, який викликає цей метод.
//TODO: padStart(str) - отримує параметр str (рядок) і додає його на початок значення властивості value об'єкта, який викликає цей метод.
//TODO: padBoth(str) - отримує параметр str (рядок) і додає його на початок і в кінець значення властивості value об'єкта, який викликає цей метод.
//TODO: Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// class StringBuilder {
//     constructor(initialValue){
//       this.value = initialValue;
//     }

// getValue(){
//       return this.value;
// }
// padEnd(str){
//       this.value = this.value + str;
//     }
// padStart(str){
//        this.value = str + this.value;
//     }
// padBoth(str){
//       this.value = str + this.value + str;
//     }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// ====================AUTOCHECK 11.7===================

//TODO: Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною, і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.

//TODO: getBrand() - повертає значення приватної властивості brand.
//TODO: changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.

// class Car {
//   // Change code below this line
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     return this.#brand = newBrand;
//   }
//   // Change code above this line
// }

// const audi = new Car({
//   brand: "Audi",
//   model: "Q3",
//   price: 36000
// });
// console.log(audi); //{ model: "Q3", price: 36000 }

// const bmw = new Car({
//   brand: "bmw",
//   model: "X5",
//   price: 58900
// });
// console.log(bmw); //{ model: "X5", price: 58900 }

// const nissan = new Car({
//   brand: "Nissan",
//   model: "Murano",
//   price: 31700
// })
// console.log(nissan)//{ model: "Murano", price: 31700 }

// console.log(nissan.getBrand()); //Nissan
// console.log(nissan.changeBrand("Honda")); //Honda

// ====================AUTOCHECK 11.8===================

//TODO: Виконай рефакторинг класу Storage, зробивши властивість items приватною.

//TODO: Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести.
//TODO: Будь ласка, нічого там не змінюй.

// class Storage {
//   // Change code below this line

//   #items

//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// ====================AUTOCHECK 11.9===================

//TODO: Виконай рефакторинг класу StringBuilder, зробивши властивість value приватною.

//TODO: Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести.
//TODO: Будь ласка, нічого там не змінюй.

// class StringBuilder {
//   // Change code below this line
//   #value;

//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// ====================AUTOCHECK 11.10===================

//TODO: Виконай рефакторинг класу Car.Зроби властивості model і price приватними, а також #brand.
//TODO: Стандартизуй публічний інтерфейс класу, замінивши вже оголошені методи на гетери та сетери brand, model і price, для взаємодії з приватними властивостями.

// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// ====================AUTOCHECK 11.11===================

//TODO: Виконай рефакторинг класу Car.
//TODO: Додай публічну статичну властивість MAX_PRICE зі значенням 50000 - максимально допустима ціна автомобіля.

//TODO: Додай сетеру price перевірку значення параметра newPrice, що передається.
//TODO: Якщо воно більше за MAX_PRICE, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice < Car.MAX_PRICE) {
//       return this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// ====================AUTOCHECK 11.12===================

//TODO: Додай класу Car публічний статичний метод checkPrice(price), що приймає ціну автомобіля.
//TODO: Метод повинен порівняти значення параметра price і приватної статичного властивості MAX_PRICE.

//TODO: Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
//TODO: В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
//TODO: Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати, як буде використовуватися метод checkPrice(price).

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     if (price > Car.#MAX_PRICE) {
//       return `Error! Price exceeds the maximum`;
//     }
//     return `Success! Price is within acceptable limits`;
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// ====================AUTOCHECK 11.13===================

//TODO: У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

//TODO: Оголоси клас Admin, який наслідує від класу User
//TODO: Додай класу Admin публічну статичну властивість AccessLevel(рівень доступу),
//TODO: значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line

// class Admin extends User {
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser"
//   };
// }

// console.log(Admin.AccessLevel.BASIC); //"basic"
// console.log(Admin.AccessLevel.SUPERUSER); //"superuser"

// ====================AUTOCHECK 11.14===================

//TODO: Додай класу Admin метод constructor, який приймає один параметр - об'єкт налаштувань з двома властивостями email і accessLevel.
//TODO: Додай класу Admin публічну властивість accessLevel, значення якої буде передаватися під час виклику конструктора.

//TODO: Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію екземпляра під оголошенням класу.

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Change code below this line

  static AccessLevel = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  // Change code above this line
}

const mango = new Admin({
  email: "mango@mail.com",
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.accessLevel); // "superuser"

// ====================AUTOCHECK 11.15===================

//TODO: Додай класу Admin наступні властивості і методи.

//TODO: Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів.
//TODO: Значення за замовчуванням — це порожній масив.

//TODO: Публічний метод blacklist(email) для додавання пошти у чорний список.
//TODO: Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.

//TODO: Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку.
//TODO: Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається
//TODO: у властивості blacklistedEmails, і повертати true або false.
//TODO: Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності,
//TODO: в якій твій код перевірятимуть тести.Будь ласка, нічого там не змінюй.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

// // Change code below this line

// // додаємо публічну властивість, яка є порожнім масивом (для зберігання чорного списку поштових адрес)
//   blacklistedEmails = [];

//   //додаємо значення пошти в масив (для додавання пошти у чорний список)
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   // перевіряємо наявність пошти в масиві (для перевірки пошти у чорному списку)
//   isBlacklisted(email) {
//     if (this.blacklistedEmails.includes(email)) {
//       return true;
//     }
//     return false;
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
