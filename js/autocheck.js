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



// ====================AUTOCHECK 5.1===================

// Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i); //3, 4, 5, 6, 7
// }

// ====================AUTOCHECK 5.2===================

// Напиши функцію calculateTotal(number), яка приймає ціле число(параметр number) і повертає
// суму всіх цілих чисел від одиниці і до цього числа.Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

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

// Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// ====================AUTOCHECK 5.4===================

// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює
// загальну суму його елементів.Загальна сума елементів повинна зберігатися у змінній total,
// яка повертається як результат роботи функції.

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

// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів,
// розділених пробілом(параметр string), і повертає найдовше слово в цьому рядку.

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

// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив
// усіх цілих чисел від значення min до max.

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

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел(параметр numbers) і
// повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value(число).

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

// Функція checkFruit(fruit) приймає рядок з назвою фрукта(параметр fruit), і перевіряє, чи присутній
// такий фрукт в масиві fruits.
// Доповни код функції таким чином, що якщо:
// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.

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

// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

// Наприклад, у двох масивах[1, 3, 5] і[0, 8, 5, 3] спільними будуть числа 3 і 5,
// оскільки вони присутні в обох вихідних масивах.А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри
// array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

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

// Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

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

// Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

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

// Доповни вираз остачі від ділення таким чином, щоб код проходив тести.
// Оголошена змінна a
// Значення змінної a - це число 0
// Оголошена змінна b
// Значення змінної b - це число 1
// Оголошена змінна c
// Значення змінної c - це число 3
// Оголошена змінна d
// Значення змінної d - це число 5
// Оголошена змінна e
// Значення змінної e - це число 2

// Change code below this line
// const a = 3 % 1; //0
// const b = 4 % 3; //1
// const c = 11 % 8; //3
// const d = 12 % 7; //5
// const e = 8 % 6; //2

// console.log(a, b, c, d, e);

// ====================AUTOCHECK 5.13===================

// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end.
// Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).

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

// Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.

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

// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:

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

// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення)
// - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

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

// Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:

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

// Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника. Додай йому наступні властивості:

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

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

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

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта
// apartment.

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

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей
// об'єкта apartment, використовуючи синтаксис «квадратних дужок».

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

// Доповни код, оновивши значення властивостей об'єкта apartment:

// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім'я власника у вкладеній властивості name на "Henry Sibola";
// масив тегів у властивості tags, додавши в кінець рядок "trusted".

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

// Додай об'єкту apartment кілька нових властивостей:

// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".

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

// Доповни код оголошення об'єкта таким чином, щоб у нього були властивості name, price, image і
// tags зі значеннями зі змінних з аналогічними іменами.Обов'язково використовуй синтаксис коротких
// властивостей.

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

// Доповни код оголошення об'єкта credentials таким чином, щоб в результаті у нього були дві
// властивості: email і password, імена яких зберігаються у змінних emailInputName і
// passwordInputName.

// Значенням властивості email повинен бути рядок "henry.carter@aptmail.com", а значенням
// властивості password - рядок "jqueryismyjam".

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

// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі,
// а в масив values всі значення його властивостей.

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

// Виконай рефакторинг рішення попереднього завдання, додавши в цикл for...in
// перевірку на власну властивість.

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

// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта
// в параметрі object.
// Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

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

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, і додай в
// масив values всі значення його властивостей.

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

// Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і,
//   можливо, але не обов'язково, цикл for...of.

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

// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment,
// а у змінну values - масив всіх значень його властивостей.Використовуй
// методи Object.keys() і Object.values().

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

// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості -
//   це ім'я співробітника, а значення властивості - це зарплата. Функція повинна розрахувати
// загальну суму зарплат співробітників і повернути її.Використовуй змінну totalSalary для
// зберігання загальної суми зарплати.

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

// Перебери масив об'єктів colors, використовуючи цикл for...of.
// Додай у масив hexColors значення властивостей hex, а в масив rgbColors -
// значення властивостей rgb з усіх об'єктів масиву colors.

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

// Напиши функцію getProductPrice(productName), яка приймає один параметр productName -
// назва продукту.Функція шукає об'єкт продукту з таким ім'ям(властивість name) в
// масиві products і повертає його ціну(властивість price).Якщо продукт з такою назвою не
// знайдений, функція повинна повертати null.

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

// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName -
//   ім'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості
// з таким ім'ям з кожного об'єкта в масиві products.Якщо в об'єктах відсутні властивості
// з таким ім'ям, функція повинна повернути порожній масив.

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

// Напиши функцію calculateTotalPrice(productName), яка приймає один параметр
// productName - назва товару.Функція повинна повернути загальну вартість(ціна * кількість)
// товару з таким ім'ям з масиву products.

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

// Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру за три дні
// (meanTemperature).Заміни оголошення змінних yesterday, today і tomorrow однією операцією
// деструктуризації властивостей об'єкта highTemperatures.

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

// У прогнозі максимальних температур також може бути необов'язкова властивість icon -
// іконка погоди.Заміни оголошення змінних yesterday, today, tomorrow і icon однією операцією
// деструктуризації властивостей об'єкта highTemperatures. Задай значення за замовчуванням
// для icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

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

// Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon однією операцією
// деструктуризації властивостей об'єкта highTemperatures. Задай значення за замовчуванням для
// highIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

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

// Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація
// об'єкта.

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

// Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами,
// а також необов'язковими іконками. Заміни оголошення всіх змінних однією операцією
// деструктуризації властивостей об'єкта forecast.Задай значення за замовчуванням для іконок,
// змінних todayIcon і tomorrowIcon -
//   рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

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

// Функція calculateMeanTemperature(forecast) приймає один параметр forecast - об'єкт температур
// на два дні наступного формату.

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

// У змінній scores зберігається масив результатів тестування.Використовуючи розподіл і методи
// Math.max() і Math.min(), доповни код таким чином, щоб у змінній bestScore був найвищий бал,
// а у worstScore - найнижчий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore); //89
// console.log(worstScore); //17

// ====================AUTOCHECK 7.8===================

// У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати
// тестування окремих груп.Використовуючи розподіл, доповни код таким чином, щоб:

// У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.

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

// В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням,
// які зберігаються у змінній defaultSettings.Під час створення тесту, усі або частину
// налаштувань можна перевизначити, вони зберігаються у змінній overrideSettings.

// Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням
// і поверх них застосувати перевизначені налаштування.Доповни код таким чином, щоб у змінній
// finalSettings утворився об'єкт фінальних налаштувань тесту.

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

// Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.
// Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data.
// У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній
// локальній змінній.

// В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority,
// можуть бути відсутніми.Тоді, в новому об'єкті завдання, у властивостях category і priority
// повинні бути значення за замовчуванням, що зберігаються в однойменних локальних змінних.

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

// Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь - яку
// кількість аргументів, рахувала і повертала їх суму.

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

// Функція addOverNum() рахує суму всіх аргументів.Зміни параметри і тіло функції addOverNum()
// таким чином, щоб вона рахувала суму тільки тих аргументів, які більші за задане число.
// Це число повинно бути першим параметром функції.

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

// Функція findMatches() приймає довільну кількість аргументів.
// Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.

// Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому
// будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив[1, 2],
// тому що тільки вони є в масиві першого аргументу.

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

// Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією
// з getBooks() і addBook(bookName).

// Метод removeBook(bookName) буде видаляти книгу за назвою.Повертає рядок "Deleting book
// < назва книги > ", де <назва книги> - це значення параметра bookName.

// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову.Повертає рядок
// "Updating book <стара назва> to <нова назва>", де < стара назва > і < нова назва > -
// це значення параметрів oldName і newName відповідно.

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

// Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName
// на newName у властивості books.Використовуй indexOf() для того, щоб знайти потрібний елемент
// масиву, і splice() для того, щоб замінити цей елемент.

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

// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення
// інвентарю - додавання, видалення, пошуку та оновлення зілля.

// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками. 
// Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

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
















