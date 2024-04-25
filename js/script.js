// реалиловать класс описывающий окружность . задание в папке temporary files

class Circle  {
    constructor (r) {
        this.radius = r            
    }
    radius() {                    // это просто метод
        return  this.radius
    }
    get radius_1 () {              // геттер
        return this.radius
    }
    set radius_1 (newR) {          // сеттер имя может совпадать с геттером (пока не знаю почему так)
        this.radius = newR
    }
    get diameter () {
        return this.radius * 2
    }
    square() {
        console.log( 2 * Math.PI * (this.radius * this.radius) + 'ниже перезапишу этот метод с return')     
    }

}

// для разнообразия создадим еще клас который наследует свойства от класса выше

class CircleModified extends Circle {
    constructor (r) {
        super(r)                //  вот тут могу ошидаться. нужна ли такая запись для уноследования свойств из класса Circle ?
    }
    square() {
        return 2 * Math.PI * (this.radius * this.radius)       // перезаписал метод 
    }
    circumference() {                                          // добавил новый метод
        return 2 * Math.PI * this.radius
    }
}
let test = new CircleModified(5)
console.log(test)
// решил записывать в массив обекты созданные с помощью конструктора на основе случайных чисел

setCircles = new Array()
for(let i = 0; i < 10; i++) {
    setCircles.push(new CircleModified(Math.trunc(Math.random() * 100)))
}
console.log(setCircles)      // в массив все записалось . все работает

function maximumRadius(arr) {
    let maxR = 0
    arr.forEach( function(elem) {                          // перебирать массиб буду методом  forEach
        if(maxR < elem.radius_1) {                         // вызываем get
            maxR = elem.radius_1
            }
        }
    )
    console.log(`наибольший радиус ${maxR}`)
    return maxR
}

maximumRadius(setCircles)                                 // получаем наибольший радиус


function maximumArea (arr) {
    let maxA = 0
    let index 
    arr.forEach( function(el, i) {              //  в  forEach  вводим индекс
        if(maxA < el.square()) {
            maxA = el.square()
            index = i
        }
    }
    )
    console.log(`объект под индексом в массиве ${index} имеет наибольшую площадь ${maxA}`)   // проверяем
    return arr[index]
}

// maximumArea (setCircles)
console.log(maximumArea (setCircles))








