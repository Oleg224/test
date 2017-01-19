// const price = (function () {
	// let discount = 0, price = 0;
	
	// function setDiscount(value){
		// discount = parseInt(value);
		// }
	// function getPriceWithDiscount(){
		// const discountFromPrice = price * discount/100;
		// return price - discountFromPrice;
	// }
	// function setPrice(value){
		// price = value;
	// }
	// function getPrice(){return price;}
	
	// return{
		// getPriceWithDiscount: getPriceWithDiscount,
		// setDiscount: setDiscount,
		// setPrice: setPrice,
		// getPrice: getPrice
	// };
// }());


// ЛЕКСИЧЕСКОЕ ОКРУЖЕНИЕ. ЗАДАЧА № 1

// getBigName(userName);
// function getBigName(name){
	// name = name + '';
	// return name.toUpperCase();
// }

//var userName = 'ivan';// функция вернет 'IVAN', т.к. это прописано в локальном лекс. окр.

// ЛЕКСИЧЕСКОЕ ОКРУЖЕНИЕ. ЗАДАЧА № 2

function test() {
	var name = 'Vasiliy';
	return getBigName(userName);
}
function getBigName(name){
	name = name + '';
	return name.toUpperCase();
}
var userName = 'ivan';
test();// функция вернет 'IVAN', т.к. на возвращает результат работы функции getBigName().


// ЛЕКСИЧЕСКОЕ ОКРУЖЕНИЕ. ЗАДАЧА № 3

var food = 'cucumber';

(function () {
	var food = 'bread';
	getFood();
}());

function getFood() {
	console.log(food);
}//функция выведет cucumber , т.к. она ориентируется на глобальную переменную



//##########################################


// ЗАМЫКАНИЯ. ЗАДАЧА № 1

var dollar,
	getDollar;
	
	(function () {
		var dollar = 0;
		getDollar = function () {
			return dollar;
		}
	}());

	dollar = 30;
	getDollar();//функция вернет 0 , т.к. по иерархии лекс. окр. у родительской функции dollar = 0


// ЗАМЫКАНИЯ. ЗАДАЧА № 2

var greet = 'Hello';
(function () {
	var text = 'World';
	console.log(greet + text);// функц-я вернет HelloWorld , переменную greet возьмет из глобального окружения
}());
//console.log(greet + text);// функц-я вернет undefined , т.к. переменная greet глобально не определена и является локальной переменной


// ЗАМЫКАНИЯ. ЗАДАЧА № 3 !!!!!!!!!!!!!!!!!!!!!!!!!!!!

const minus = (function() {
	
}());


// ЗАМЫКАНИЯ. ЗАДАЧА № 4

function MultiplyMaker(number){
	let stan = number;
	return function(num){
		stan *= num;
		return stan;
	}
};
const multiply = MultiplyMaker(2);


// ЗАМЫКАНИЯ. ЗАДАЧА № 5


const newString = (function () {
	let str = '';
	function setStr(anyStr){
		str += anyStr;
	}
	function getStr(){
		return str;
	}
	function lengthStr(){		
		return str.length;
	}
	function backStr(){
		return str.split('')
				  .reverse()
				  .join('');
	}
	return{
		setStr: setStr,
		getStr: getStr,
		lengthStr: lengthStr,
		backStr: backStr		
	};	
}());

// ЗАМЫКАНИЯ. ЗАДАЧА № 6

const calculate = (function () {
	let index = 0;
	function setValue(value){
		index += value;
	}
	function getValue(){
		return index;
	}
	function plusValue(newValue) {
		return index += 0 + newValue;
	}
	function minusValue(otherValue) {
		return index -= otherValue;
	}
	function multiplyValue(otherValue) {
		return index *= otherValue;
	}
	function dividedValue(otherValue) {
		return index /= otherValue;
	}	
	function raisedValue(otherValue) {
		return Math.pow(index, otherValue);
	}
	return{
		setValue: setValue,
		getValue: getValue,
		plusValue: plusValue,
		minusValue: minusValue,
		multiplyValue: multiplyValue,
		dividedValue: dividedValue,
		raisedValue: raisedValue
	};
}());















