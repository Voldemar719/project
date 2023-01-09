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


const logger = function() {
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




