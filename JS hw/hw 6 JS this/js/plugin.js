
// THIS ЗАДАЧА № 1
const rectangle = {
	width: 8,
	height: 2,
	getSquare: function getSquare() {
		return this.width * this.height;
	}
}

// THIS ЗАДАЧА № 2

const price = {
	price: 10,
	discount: 15,
	getPrice: function getPrice() {
		return this.price;
	},
	getPriceWithDiscount: function getPriceWithDiscount() {
		return this.price - (this.price * this.discount / 100)
	}
}

// THIS ЗАДАЧА № 3


const user = {
	name: 'Abraham',
	getUserName: function getUserName() {
	   return this.name;
	}
}

user.getName = user.getUserName;

// THIS ЗАДАЧА № 4

const object = {
	height: 10,
	heightPlus: function heightPlus() {
		this.height++;
	}
}
// THIS ЗАДАЧА № 5

const numerator = {
	value: 1,
	double: function double() {		
		return this.value + this.value;	
	},
	
	plusOne: function plusOne() {
		return this.value + 1;		
	},
	
	minusOne: function minusOne() {
		return this.value - 1;
	}
};

//numerator.double().plusOne().plusOne().minusOne(); 
//console.log(numerator.value);

//метод chanche не работает, не нашел в чем ошибка




// THIS ЗАДАЧА № 6

const user2 = {name: 'Abraham'},
	  otherUser = {
		  name: 'John',
		  getName: function () {
			  return this.name;
		  }
	  }
	  
user2.getName;// undefined метод не определен,т.к. в объекте user нет метода getName
user2.getName = otherUser.getName;// присваиваем методу getName в объекте user - функцию метода getName объекта otherUser
// т.к. 
user2.getName();//'Abraham' происходит вызов функции из соседнего объекта . т.к. в функции использовано ключевое слово this ,
// то она становится универсальной для любого количества объектов
otherUser.getName();//'John' объект в котором непосредственно прописана функция
	
//##########################################


// THIS ЧАСТЬ (2). ЗАДАЧА № 1

function getList(){return this.list;};
let users = {
	lenght: 4,
	list: ['Abraham','James','John','Steven']
}
getList();// undefined т.к. функция не привязана к контексту
users.getList = getList;
users.getList();// возвращает массив, т.к. функцию привязали к контексту объекта
getList.call(users);// возвращает массив, т.к. функцию привязали к контексту объекта методом call()




// THIS ЧАСТЬ (2). ЗАДАЧА № 2
const production = {
	sum: 5,
	price: 2,
	getSum: function () {
		return this.sum * this.price;
	}
};

// THIS ЧАСТЬ (2). ЗАДАЧА № 3

const details = {
	sum: 6,
	price: 3
};
production.getSum.call(details);

// THIS ЧАСТЬ (2). ЗАДАЧА № 4

let sizes = { width: 5, height: 10},
	getSquare1 = function() {return this.width * this.height}; 
	
getSquare1.apply(sizes);

// THIS ЧАСТЬ (2). ЗАДАЧА № 5

let numbers = [4,12,0,10,-2,4],
    minNumb = Math.min.apply(null,numbers);
console.log(minNumb);

// THIS ЧАСТЬ (2). ЗАДАЧА № 6.1
const element = {
	height: '15px',
	marginTop: '5px',
	marginBottom: '5px',
	getFullHeight: function () {
		var fullHeight = parseInt(this.height) + parseInt(this.marginTop) + parseInt(this.marginBottom);
		return fullHeight;
	}
};
// THIS ЧАСТЬ (2). ЗАДАЧА № 6.2
const block = {
	height: '5px',
	marginTop: '3px',
	marginBottom: '3px',
};
element.getFullHeight.call(block);


// THIS ЧАСТЬ (2). ЗАДАЧА № 7

let element2 = {
	height: 25,
	getHeight: function () {
		return this.height;
	}
};

let getElementHeight = element2.getHeight.bind(element2);




















