//ФУНКЦИИ. ЗАДАЧА № 1


function multiply() {
    var stan = 1;
    for (var i = 0; i < arguments.length ; i++)
	stan *= arguments[i];
	return stan
}


function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}


//ФУНКЦИИ. ЗАДАЧА № 2


console.log( factorial(10) );


//ФУНКЦИИ. ЗАДАЧА № 3


function anyStr(str) {
    return str.split("")
    	  	  .reverse()
    	  	  .join("");
}

console.log(anyStr("test"));


// ФУНКЦИИ. ЗАДАЧА № 4


function processString(string, handler){
	let newString = '';

	for (let i = 0; i < string.length; i++){
		newString += handler(string[i]);
	}
	return newString;
}

console.log(processString('hello',
 function(symbol){
	 return symbol.charCodeAt() + ' ';
 }));

// ФУНКЦИИ. ЗАДАЧА № 5

let list = 'test',
	i = list.length;
while(i--){
	console.log(list[i]);
}


function conTest(list) {
	i = list.length;
	while(i--){	
		return console.log(list[i]);
	}
}
conTest('test');

// ФУНКЦИИ. ЗАДАЧА № 6.1


function mainFunc(anyArg , nextFunc){
	let newMass = '';
	for (let i = 0; i < anyArg.length; i++) {
		newMass += nextFunc(anyArg [i]);
	}
	return console.log('New value : ' + newMass);
}

mainFunc(['my', 'name', 'is', 'Trinity'], 
	function (symbol){
		return symbol.charAt().toUpperCase() + symbol.slice(1);
	});

// ФУНКЦИИ. ЗАДАЧА № 6.2
mainFunc([10, 20, 30,], 
	function (number){
		return number + [0] + ',';
	});

// ФУНКЦИИ. ЗАДАЧА № 6.3
mainFunc([{age: 45, name: 'Jhon'},{age: 20, name: 'Aaron'}], 
	function (obj){
		return obj.name + ' ' + 'is' + ' ' + obj.age + ',';
	});

// ФУНКЦИИ. ЗАДАЧА № 6.4
mainFunc(['abc', '123'], 
	function (symbol){
		return symbol.split('')
					 .reverse()
					 .join('') + ',';
});


// ФУНКЦИИ. ЗАДАЧА № 6.5

mainFunc([1, 2, 3,], 
	function (number){
		return number + 5 + ',';
});







// МАССИВЫ ЗАДАЧА №  1
function  someStr(anotherStr) {
	let anotherArr = anotherStr.split('')
							   .sort()
							   .reverse()
							   .join('');
	return anotherArr;
}
console.log(someStr('bcdaeflmjgkhi'));


// МАССИВЫ ЗАДАЧА №  2

function  massive(anyMass) {
	let anotherMass = anyMass.sort(numbSort)
							   .reverse();							   
	return anotherMass;
}

function numbSort(prev,next){
	return prev - next;
}
console.log(massive([2,4,7,1,-2,10,-9]));

// МАССИВЫ ЗАДАЧА №  3

function getNewArray(massOne, numbOne, numbTwo) {
	let newMass = massOne.slice(numbOne, numbTwo);
	return console.log(newMass);
}
getNewArray(['a','b','c','d','e','f'],2,4);

// МАССИВЫ ЗАДАЧА №  4

let firstArr = ['one',2,'three',4],
	nextArr = firstArr.concat(firstArr);
console.log(nextArr);

// МАССИВЫ ЗАДАЧА №  5

let firstMass = [1,2,3,4,5];
	firstMass.splice(2,2);
console.log(firstMass);

// МАССИВЫ ЗАДАЧА №  6

let spliceArr = [1,2,3,4,5];
	spliceArr.splice(2,2, 'three','four');
console.log(spliceArr);

// МАССИВЫ ЗАДАЧА №  7

let anyMassive = ['i','am','an','array'];
	anyMassive.splice(3,0, 'awesome');
console.log(anyMassive);

// МАССИВЫ ЗАДАЧА №  8

let someMassive = [[14,45],[1],['a','c','d']],
	newSomeMassive = someMassive.sort(massSort);
function massSort(prev,next) {
	if (prev.length < next.length) return -1;
	if (prev.length > next.length) return 1;
}
	
console.log(newSomeMassive);

// МАССИВЫ ЗАДАЧА №  9

let anyMassNumb = [1,2,3,4,5];
let newMassNumb = anyMassNumb.slice(0,anyMassNumb.length);
let lastMassNumb = anyMassNumb.concat(newMassNumb);
console.log(lastMassNumb);


// МАССИВЫ ЗАДАЧА №  10
let comp = [
			{cpu:'intel', info: {cores:2, cache:3 }},
			{cpu:'intel', info: {cores:4, cache:4 }},
			{cpu:'intel', info: {cores:1, cache:1 }},
			{cpu:'intel', info: {cores:3, cache:2 }},
			{cpu:'intel', info: {cores:4, cache:2 }}
			];

function coresSort(prev,next){
	if (prev.info.cores < next.info.cores) return -1;
	if (prev.info.cores > next.info.cores) return 1;
	if (prev.info.cores == next.info.cores) return prev.info.cache - next.info.cache;	
}

let newComp = comp.sort(coresSort);

console.log(newComp);

// МАССИВЫ ЗАДАЧА №  11
// 	var products = [
// 					{title: 'prod1', price:5.2},{title: 'prod2', price:0.18},
// 					{title: 'prod3', price:15},{title: 'prod4', price:25},
// 					{title: 'prod5', price:18.9},{title: 'prod6', price:8},
// 					{title: 'prod7', price:19},{title: 'prod8', price:63}
// 					];
// function productionSort(products, productSort) {
// 		var products = products.price.sort();
		
		
// 		return productSort;
// };


// function productSort(minPrice,maxPrice) {
// 	for (let i = minPrice; i < maxPrice; i++ ){
// 		let newProdPrice;
// 		newProdPrice += products.price[i];
// 		if(minPrice < newProdPrice < maxPrice) return newProdPrice;
// 	}
// }

// productionSort(products, 15, 30);



// function productsSort(prev,next){
// 	if (prev.info.cores < next.info.cores) return -1;
// 	if (prev.info.cores > next.info.cores) return 1;
// }




// ДАТА ЗАДАЧА №1

function addFullDate(year) {
	var date = new Date(year,0,01);
	return date.toLocaleString('ru');
}
console.log(addFullDate(2016));




