let apples: number = 4;

let speed: string = "fast";

let hasName: boolean = false;

let nothingMuch: null = null;

let nothing: undefined = undefined;

let now: Date = new Date();

// Array 裡面只能有特定類型
let colors: string[] = ["red", "blue", "green"];

let numbers: number[] = [1, 2, 3];

let truths: boolean[] = [true, false, true];

// Classes
class Car {

}

// let car: Car = new Car();

// Object
let point: { x: number; y: number } = {
  x: 10,
  y: 10,
};

// Function
//告訴typescript這個function參數類型是什麼，執行完畢後應該return什麼
//  (i: number) => void  這個是對function的描述,告訴typescript這個function參數i類型是number, 沒有return東西
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//** 什麼時候要告訴typescript 類型 */ 

// 1) 當function return any的時候 (當typescript無法判斷類型的時候，就會返回any類型)
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};

// 2) 當聲明了一個變量,沒有立即賦值(初始化)
let words = ['red', 'blue', 'green']
let foundWord: boolean;

for(let i = 0; i < length; i++) {
    if(words[i] === 'green') {
        foundWord = true
    }
}

// 3) typescript無法正確判斷類型的時候 (一開始是false, 後面根據條件判斷要賦值number)
let nums = [-10, -1, 12]
let numberAboveZero: boolean | number = false

for(let i = 0; i < nums.length; i++) {
    if(nums[i] > 0) {
        numberAboveZero = nums[i]
    }
}
