//                              Функции
"use strict";


//                                         FUNCTION DECLORATION 
//Работает еще до выполнения кода!
//И можно выполнить перед ее созданием!
showFirstMassage();

let num = 20; //Глобальная переменная(видна во всем js файле)

function showFirstMassage(text) {
    console.log(text);
    let num = 10;//Локальная переменная (видна только в функции)
    console.log(num);
}


showFirstMassage("Hello world!");
console.log(num);


// // function calc(a, b) {
//     return (a + b);
// }
// console.log(calc(4, 3) );
// console.log(calc(5, 6) );
// console.log(calc(10, 6) );

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

//                                               FUNCTION EXPRESSION!

//Создается тогда, когда до нее доходит поток кода! (выполнение)!
//И вызывать ее можно только после объявления!


const logger = function () {
    console.log("Hello");
};

logger();


//                                                   СТРЕЛОЧНАЯ ФУНКЦИЯ!

//

const calc = (a, b) => {
    console.log('1');
    return a + b;
};

//                             Еще раз про аргументы!


//                                                  Методы и свойства строк и чисел!


//length  - длинна строки(колличество элементов в массивах);
const str = 'test';
const arr = [1, 2, 4];

console.log(str.length);

//console.dir - выводит какой то элемент в виде объекта. 

//toUpperCase(), toLowerCase() - методы для работы с рЕгИсТрОм.

console.log(str.toUpperCase());
console.log(str.toLowerCase());

//.indexOf() - метод, который ищет кусок строки и сказать с какой позиции(индекса) она начинается.

const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit')); //5 - начальный интекс парамаетра.

//                                        Методы для взаимодействия со строками!

//1. slice() - позволяет вырезать кусок строки по индексу и выводить ее в консоль, включая последнего параметра!

const logg = 'Hello World';

console.log(logg.slice(6, 11)); // - (World).
console.log(logg.slice(6)); // - если поступить таким образом, строка обрежется начиная с 6го индекса и до конца!
console.log(logg.slice(-5, -1)); // - так же работает в минусовых индексах (World).

//Метод substring() - тоже самое как и slice(), но, нельзя задавать минусовой индекс!
console.log(logg.substring(6, 11)); // - (World).

//substr() - здесь вместо второго аргумента substr(1-аргумент), (2-аргумент)). 1й аргумент - начало обрезки, 2-й длинна!

// Числовые методы!! Math. .

//Math.round - округляет до ближайшего целого числа!

const nUm = 12.2;
console.log(Math.round(nUm)); // - 12.

//parseInt() - переводит число в другую систему исчисления (двоичная(1 0 1 0), десятичная(1 2 3 ... 10)).

//В данном примере метод преобразовал строку(string) в числовое значение(number) и округлил до целого числа!

const test = '12.2px';
console.log(parseInt(test)); // - 12(number);

//Метод parseFloat() - этот метод берет на вход число или строку и преобразовывает ее в десятичную систему исч.!
//Он вовзвращает число с плавующей точкой в отличии от parseInt(), и преобразует стоку в число!

console.log(parseFloat(test)); // - 12.2 число с плавующей точкой!

//isNaN() - если внутри не число, возвращает false!

//trim() - убирает пробелы в начале и в конце.

//                                              CallBack ФУНКЦИЯ!

// setTimeoute - задержка вызова функции.

function first() {
    //do something
    setTimeout(function () {
        console.log(1);
    }, 500);
}

function second() {

    console.log(2);

}

first();
second();


// callback() - это функция, которая должна быть выполнена, после того, как другая функция
//завершила свое действие!

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}!`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);


//                             Объекты, деструкторизация объектов!


// const obj = new Object();
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

//console.log(options['colors']['border']); // Что бы вызвать свойство объекта внутри другого объекта
//используются "так называемые" двойные квадратные скобки!

// console.log(options[name]);

// //delete - позволяет удалить свойста из объектов, и не только!

// delete options.name;

// console.log(options); //свойство объекта options - name удалено!

//for ( in ) - свойство которое перебирает объект и показывает, что внутри! Чтобы запустить такую проверку, нужно
//в скобках цикла создать переменную, например "key", и после "in" указать "ГДЕ" искать тот или иной объект!
//А при двойной проверке, в дополнителльной проверке "if" нужно обратиться к объекту внутри объекта с помощью
//функции "typeOf()" - например - if (typeOf(options[key] === 'object'))! И после обратиться в каком свойстве объекта
//перебирать свойста вложенного объекта! После можно красиво записать все с помощью интерполяции! 
 //перебор внутри перебора!! При обращении для вызова той - или иной функции, объекта и прочее, писать со скобками ""!
// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }


// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]){
//             console.log(`Свойство ${i}} имеет значение ${options[key][i]}`);
//         }
//     }else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }




//Функции и методы, которые уже есть внутри объекта!

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]){
//             console.log(`Свойство ${i}} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     }else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);

//.keys() - этот метод берет наш объект, и на его основании создает массив в котором все элементы это - ключи
//находящиеся на первой части объекта!

const options = { //*1
    name: 'test',
    width: 1024,
    height: 1024,
    colors: { //*2
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { //*4
        console.log("Test");
    }
};

options.makeTest();

// console.log(Object.keys(options)); //вывод [ 'name', 'width', 'height', 'colors' ]!
// console.log(Object.keys(options).length); //в вывод получем колличество элементов объекта options! *3

//Подобные методы мы можем создавать в ручную!


//Объекты - это структуры, которые могут сохранять в себе обсолютно любые типы данных (*1)
//в формате (ключ: значение! - name: 'test). Они могут быть так же вложенные: объекты в объекты, (*2)
//массивы в объекты, и т.д.. У объектов бывают встроеные методы и встоеные свойста, которые мы можем
//удобно использовать!(*3) И самое главное: для того, что бы наш объект умел что то делать, можно во внуть его 
//записывать функции, и таким способом мы будем создавать методы нашего объекта(*4)!


//ДИСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ!

//Диструктуризация - это разделение свойств на более удобные куски!

//С помощью диструктуризации объектов мы будем вытаскивать вложенного объекта в качестве отдельных структур!

const {border, bg} = options.colors; //создаем переменную, и в фигурных скобках прописываем ключи свойства, 
// значения которых мы и хотим вытащить из объекта! дальше знак присвоение(=) и указываем объект, в котором 
//находятся наши свойста!
console.log(border);


//Все что существует в языке JS, так или иначе идет от объектов! Когда мы использует метод .toUpperCase()
//строка получает этот метод через цепочку прототипов(прототип - это, ). JS - считается объектно ориентированным языком
//и все сущности которые в нем есть сводятся к объектам!