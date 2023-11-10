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


// ***********difference between localStorage dnd sessionStorage*************** \\

const btnLS = document.querySelector('.js-ls');
const btnSS = document.querySelector('.js-ss');
const btnClean = document.querySelector('.js-clean'); 

btnLS.addEventListener('click', handlerLS);
btnSS.addEventListener('click', handlerSS);
btnClean.addEventListener('click', handlerClean);

function handlerLS() {
    localStorage.setItem('ls-name', 'add to local');
}

function handlerSS() {
    sessionStorage.setItem('ss-name', 'add to session');
}

function handlerClean() {
    localStorage.removeItem('ls-name');
    sessionStorage.removeItem('ss-name');
}

