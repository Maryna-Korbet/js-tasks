// ====================AUTOCHECK 2.1====================

// Оголоси дві змінні, productName для назви товару, і pricePerItem для зберігання ціни за штуку. При оголошенні надай змінним наступні значення:
// назва - рядок "Droid";
// ціна за штуку - число 2000.

// Change code below this line
// const productName = "Droid";
// const pricePerItem = 2000;

// console.log(productName); // 'Droid'
// console.log(pricePerItem); // 2000

// ====================AUTOCHECK 2.2====================

// Ім'я товару змінили на "Repair droid" і збільшили його ціну на 1500 кредитів.
// Перевизнач значення змінних pricePerItem і productName після їх оголошення.

// let productName = "Droid";
// let pricePerItem = 2000;

// // Change code below this line
// productName = "Repair droid";
// pricePerItem = pricePerItem + 1500;

// console.log(productName); //Repair droid
// console.log(pricePerItem); //3500

// ====================AUTOCHECK 2.3====================

// Оголоси наступні змінні, використовуючи ключове слово const або let, і присвой їм відповідні значення.

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

// Доповни код, присвоївши змінній totalPrice вираз для підрахунку загальної суми замовлення.
// Змінна pricePerItem зберігає ціну однієї одиниці товару, а orderedQuantity - кількість одиниць товару в замовленні.

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;

// console.log(totalPrice); //14000

// ====================AUTOCHECK 2.5====================

// Оголоси змінну message і запиши в неї повідомлення про покупку, рядок у форматі:
// "You picked <назва товару>, price per item is <ціна товару> credits".
// Де < назва товару > і < ціна товару > — це значення змінних productName і pricePerItem.
// Використовуй синтаксис шаблонних рядків.

// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// console.log(message); //You picked Droid, price per item is 3500 credits

// ====================AUTOCHECK 2.6====================

// Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення.
// Оголоси змінні та присвой їм відповідні значення:

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

// Оголоси функцію sayHi, всередині якої додай console.log() з рядком "Hello, this is my first function!". Після оголошення виклич функцію sayHi.

// function sayHi() {
//     console.log("Hello, this is my first function!");
// }

// sayHi();

// ====================AUTOCHECK 2.8====================

// Функція add повинна вміти додавати три числа і виводити результат у консоль.
// Додай функції add три параметри: a, b і c, які будуть отримувати значення аргументів під час її виклику.

// Доповни console.log() таким чином, щоб він логував рядок "Addition result equals <result>", де <result> - це сума переданих чисел.

// Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a+b+c}`);
//   // Change code above this line
// }

// add(15, 27, 10); //Addition result equals 52
// add(10, 20, 30); //Addition result equals 60
// add(5, 10, 15); //Addition result equals 30

// ====================AUTOCHECK 2.9====================

// Доповни код функції add таким чином, щоб вона повертала результат додавання значень трьох параметрів: a, b і c.

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

// Функція makeMessage(name, price) складає і повертає повідомлення про покупку.
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

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

// Функція calculateTotalPrice рахує і повертає загальну суму покупки.
// Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

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

// Функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) складає і повертає повідомлення про покупку ремонтних дроїдів.
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику.

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

// Функція isAdult оголошує один параметр age(вік), значення якого буде задаватися під час її виклику.
// Присвой змінній passed вираз перевірки віку користувача на повноліття.
// Людина вважається повнолітньою у віці 18 років і старше.

// function isAdult(age) {
//     // Change code below this line
//         const passed = age >= 18;
//   // Change code above this line
//   return passed;
// }

// console.log(isAdult(20)); //true
// console.log(isAdult(14)); //false

// ====================AUTOCHECK 2.14====================

// Функція isValidPassword(password) перевіряє рівність збереженого і введеного паролів і повертає результат перевірки - буль true або false.
// Змінна SAVED_PASSWORD зберігає значення попередньо збереженого пароля.Введений пароль передається у параметр password.

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

// Додай вираз перевірки повноліття користувача, значення параметра age, в умову для інструкції if.
// Якщо користувач повнолітній, повинен виконуватися блок if і у змінну message записується рядок "You are an adult".
// В іншому випадку повинен виконуватися блок else і записується рядок "You are a minor".

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

// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

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

// Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів.

// Функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits) виконує транзакцію з продажу дроїдів і повертає повідомлення про результат операції.
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

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

// Функція checkPassword(password) отримує пароль користувача в параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD
// і повертає повідомлення про результат порівняння, яке зберігається у змінній message.

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

// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

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

// Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок.
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

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

// Функція checkIfCanAccessContent(subType) перевіряє, чи може користувач отримати доступ до контенту.
// Перевірка відбувається за типом передплати.Отримати доступ можуть тільки користувачі з передплатою pro або vip.

// Присвой змінній canAccessContent вираз перевірки передплати.
// Якщо значення параметра subType дорівнює рядкам "pro" або "vip", користувач отримає доступ.Результатом виразу перевірки буде буль true або false.

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType==="pro" || subType==="vip"; // Change this line

//   return canAccessContent;
// }

// console.log(checkIfCanAccessContent("pro")); //true
// console.log(checkIfCanAccessContent("starter")); //false


// ====================AUTOCHECK 3.9====================

// Функція isNumberNotInRange(start, end, number) перевіряє, чи не входить число у проміжок.
// Тобто число повинно бути меншим або дорівнювати start і більшим або дорівнювати end.Результатом виразу перевірки буде буль true або false.

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

// Функція getDiscount(totalSpent) визначає значення знижки, залежно від загальної суми витрачених грошей(параметр totalSpent)
// в магазині за весь час(партнерська програма).Знижка записується у змінну discount і повертається з функції як результат її роботи.

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

// Виконай рефакторинг рішення задачі «Склад товарів», замінивши інструкцію if...else тернарним оператором.

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

// Функція checkPassword(password) порівнює переданий їй пароль(параметр password) зі збереженим паролем
// адміністратора(константа ADMIN_PASSWORD) і повертає рядок з повідомленням про результат.

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

// Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача(параметр type),
// перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, що зберігається у змінній price.
// Якщо значення параметра type - це рядок:

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

// Функція checkPassword(password) отримує пароль в параметр password, перевіряє його на збіг з паролем адміністратора у
// змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається у змінній message.

// Якщо значення параметра password:

// дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
// збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
// не задовольняє жодну з попередніх умов, у змінну message записується рядок "Access denied, wrong password!".
// Зроби рефакторинг коду, замінивши інструкцію if..else на switch, і не забудь про блок default (аналог else).

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

// Функція getShippingCost(country) повинна перевіряти можливість доставки товару в країну користувача(параметр country) і
// повертати повідомлення про результат, що зберігається у змінній message.Обов'язково використовуй інструкцію switch.

// Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price>, необхідно підставити відповідні значення.

// Список країн і вартість доставки:

// China - 100 кредитів
// Chile - 250 кредитів
// Australia - 170 кредитів
// Jamaica - 120 кредитів
// Зі списку видно, що доставка можлива не скрізь.Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок
// "Sorry, there is no delivery to your country"

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

// Функція getNameLength(name) приймає ім'я (параметр name) і повертає рядок, в якому вказана його довжина.
// Доповни шаблонний рядок у змінній message довжиною рядка з параметра name.

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

// console.log(getNameLength("Poly")); //Name Poly is 4 characters long
// console.log(getNameLength("Billy")); //Name Harambe is 5 characters long

// ====================AUTOCHECK 3.17====================

// Доповни код, присвоївши оголошеним змінним вирази звертання до відповідних елементів або властивостей рядка у змінній course.

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

// Функція getSubstring(string, length) приймає рядок і повертає підрядок від початку і до length символів.
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

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

// Функція formatMessage(message, maxLength) приймає рядок (параметр message) і форматує його, якщо довжина перевищує значення в параметрі maxLength.

// Доповни код функції таким чином, що якщо довжина рядка:

// не перевищує maxLength, функція повертає його в початковому вигляді.
// більша за maxLength, то функція обрізає рядок до maxLength символів і додає в кінець три крапки "...", після чого повертає скорочену версію.

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

// Функція normalizeInput(input) приймає рядок(параметр input) і повертає такий самий рядок, але в нижньому регістрі.
// Присвой змінній normalizedInput вираз створення рядка у нижньому регістрі з параметра input.

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

// console.log(normalizeInput("Hello world")); //hello world
// console.log(normalizeInput("This ISN'T SpaM")); //this isn't spam
// console.log(normalizeInput("Big SALE")); //big sale

// ====================AUTOCHECK 3.21====================

// Функція checkForName(fullname, name) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка name у рядок fullname.

// fullname - повне ім'я, що складається з двох слів (імені та прізвища), розділених пробілом.
// name - ім'я для перевірки входження в повне ім'я.
// Присвой змінній result вираз перевірки входження імені(параметр name), у повне ім'я (параметр fullname).
// Нехай функція чітко розрізняє регістр літер, тобто «Петя» і «петя» - для неї різні імена.

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   return result;
// }

// console.log(checkForName("Egor Kolbasov", "Egor")); //true
// console.log(checkForName("Egor Kolbasov", "egor")); //false
// console.log(checkForName("Egor Kolbasov", "egOr")); //false
// console.log(checkForName("Egor Kolbasov", "Zhenya")); //false

// ====================AUTOCHECK 3.22====================

// Функція checkForSpam(message) приймає рядок(параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки.
// Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.

// Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// Якщо в рядку відсутні заборонені слова, функція повертає буль false.

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

// Запиши умову в інструкції if таким чином, щоб функція працювала правильно.

// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// console.log(checkAge(20)); //You are an adult
// console.log(checkAge(8)); //You are a minor

// ====================AUTOCHECK 4.2====================

// Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг з паролем адміністратора
// у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.

// Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:

// видали змінну message
// видали else
// код повинен працювати так само, як і до оптимізації

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

// Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
// Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».

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

// Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// console.log(fruits); //[apple, plum, pear, orange]

// ====================AUTOCHECK 4.5====================

// Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.

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

// Виконай перевизначення значення елементів з індексами 1 і 3.
// Заміни "plum" на "peach", а "orange" на "banana".

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

// Оголоси дві зміні:

// Ім'я змінної	Очікуване значення
// lastElementIndex	Індекс останнього елемента масиву fruits через довжина_масиву - 1
// lastElement	Значення останнього елемента масиву

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex); //3
// console.log(lastElement); //banana

// ====================AUTOCHECK 4.9====================

// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини.
// Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

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

// Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат
// поділу рядка message за роздільником delimiter - масив рядків.

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

// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.
// Оголошена функція calculateEngravingPrice(message, pricePerWord).Ця функція приймає рядок, що складається зі слів, розділених лише пробілами
// (параметр message) та ціну гравірування одного слова(параметр pricePerWord).
// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

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

// Доповни код функції makeStringFromArray(array, delimiter) таким чином, щоб вона повертала у змінній string результат
// з`єднання елементів масиву array з роздільником delimiter - рядок.

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

// Термін slug - це людино - зрозумілий унікальний ідентифікатор, який використовується у веб - розробці для
// створення читабельних URL - адрес.

// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com / posts / 1q8fh74tx, можна
// зробити slug з назви статті.В результаті адреса буде приємнішою для сприйняття:
// mysite.com / posts / arrays -for-begginers.

// Увага
// Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире

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

// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

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

// Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(allClients); //["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]

// ====================AUTOCHECK 4.16===================

// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами
// двох вихідних firstArray і secondArray.Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву
// довжиною maxLength елементів.В іншому випадку функція повинна повернути новий масив повністю.

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




