//-----------task1-----------------------
/*
 1. Напишите функцию которая принимает 2 числа 
 и возвращает массив содержащий числа между первым числом и вторым числом;
*/

function numbersBetween(a, b) {
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

        let arr = [];
        for (let i = a + 1; i < b; i++){
            arr.push(i);
        }
        return arr;
}

console.log(numbersBetween(1, 5)) // 2,3,4
console.log(numbersBetween(3, 6)) // 4,5
console.log(numbersBetween(12, 15)) // 13,14

//----------task2--------------------------
/*
 2. Перепешите задачу FizzBuzz, но с использованием цикла. 
     Расчет чисел должен идти до 100*/

for (let i = 0; i < 100; i++){
    console.log(fizzBuzz(i));
}

function fizzBuzz(myNumber) {
    let num = '';
    if (myNumber%3 == 0){
        num += 'Fizz';
    }
    if (myNumber%5 == 0){
        num += 'Buzz';
    }
    if (!num.length){
        num = myNumber;
    }
   return num;
}


//---------task3---------------------------

/*
 3. Напишите функцию которая принимает 1 аргумент - массив 
   И возвращает новый массив содержащий типы значений переменных
*/
let myArr = [5, 8, 'foo', null, false, '', 'string', undefined, NaN];

function makeArrayFromTypesOfElements(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
            newArr[i] = typeof arr[i];
        }
        return newArr;
}
console.log(makeArrayFromTypesOfElements(myArr));

/*
 @@SUPER@@. Вам дан массив array, содержащий внутри объекты. 
 Напишите функцию которая внутри цикла проходится по каждому элементу массива 
    И проверяет какой тип данных содержит свойство age, если тип данных NaN, тогда добавляет данному объекту свойство unknownAge: true
    Далее создайте новый массив содержащий все объекты есть свойство unknownAge:true
*/
let array = Array.from({ length: 35 }).map((value, index) => index % 2 ? { age: index + 2 } : { age: NaN });
console.log(array); //[ {age:NaN}, {age:3}, {age:NaN}, {age:5}, {age:NaN}, {age:7} ....]
console.log(array.length); // 35

function addPropertyToObgect(arr){
    let newArr1 = [];
    for (let i = 0; i < arr.length; i++) {
            if (isNaN (arr[i].age)){
                arr[i].unknownAge = true;
                newArr1.push(arr[i]);
            }
    }
    return newArr1;
}

console.log(addPropertyToObgect (array));