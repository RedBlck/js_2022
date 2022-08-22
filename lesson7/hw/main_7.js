// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let users = [];
// for (let i = 1; i <= 10; i++) {
//     users.push(new User(i,'roma','solovev','rom@gmail.com',380953505098));
// }
// console.log(users);
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(users.filter(value => value.id % 2 === 0));
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(users.sort((a, b) => a.id - b.id));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surename, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surename = surename;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let clients = [];
// clients.push(new Client(10, 'roman', 'red', 'roman@gmail.com', +380965213541, ['aple', 'banan']));
// clients.push(new Client(2, 'andry', 'panchysh', 'andry@gmai.com', +3809632541, ['aple']));
// clients.push(new Client(3, 'kateryna', 'lodz', 'kater@gmai.com', +38050284687, ['aple', 'banan', 'phone']));
// clients.push(new Client(4, 'vitya', 'lodz', 'vitya@gmai.com', +38050854687, ['aple', 'banan']));
// clients.push(new Client(8, 'bob', 'jemes', 'bob@gmai.com', +38050286587, ['aple', 'banan']));
// clients.push(new Client(6, 'olya', 'rodry', 'olya@gmai.com', +38050254687, ['aple', 'banan', 'phone', 'point']));
// clients.push(new Client(7, 'vika', 'leert', 'vika@gmai.com', +38050281487, ['aple']));
// clients.push(new Client(5, 'yura', 'timaer', 'yura@gmai.com', +38050896687, ['aple', 'banan']));
// clients.push(new Client(9, 'vova', 'tresh', 'vova@gmai.com', +38050283337, ['aple', 'banan', 'phone', 'point', 'window']));
// clients.push(new Client(1, 'bodya', 'durov', 'bodya@gmai.com', +38050245687, ['aple', 'banan', 'window']));
// console.log(clients);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(clients.sort((a, b) => a.order.length - b.order.length));


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, made, year, maxSpeed, engine) {
//     this.model = model;
//     this.made = made;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//     this.drive = () => console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//     this.info = () => document.write(`model - ${model}, made - ${made}, year - ${year}, maxSpeed - ${maxSpeed}, engine - ${engine}`);
//     this.increaseMaxSpeed = (newSpeed) => this.maxSpeed += newSpeed;
//     this.changeYear = (newValue) => this.year = newValue;
//     this.addDriver = (driver) => this.driver = driver;
// }
//
// let mercedes = new Car('c220', 'germany', 1997, 180, 2.0);
// console.log(mercedes);
// mercedes.drive();
// mercedes.info();
// mercedes.increaseMaxSpeed(20);
// mercedes.changeYear(2000);
// mercedes.addDriver('Vova');
// console.log(mercedes);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car {
//     model;
//     made;
//     year;
//     maxSpeed;
//     engine;
//
//     constructor(model, made, year, maxSpeed, engine) {
//         this.model = model;
//         this.made = made;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//         this.drive = () => console.log(`їдемо зі швидкістю ${maxSpeed} на годину`);
//         this.info = () => document.write(`model - ${model}, made - ${made}, year - ${year}, maxSpeed - ${maxSpeed}, engine - ${engine}`);
//         this.increaseMaxSpeed = (newSpeed) => this.maxSpeed += newSpeed;
//         this.changeYear = (newValue) => this.year = newValue;
//         this.addDriver = (driver) => this.driver = driver;
//     }
// }
// let mercedes = new Car('c220', 'germany', 1997, 180, 2.0);
// console.log(mercedes);
// mercedes.drive();
// mercedes.info();
// mercedes.increaseMaxSpeed(20);
// mercedes.changeYear(2000);
// mercedes.addDriver('Vova');
// console.log(mercedes);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class Popelushka {
//     constructor(name, age, foot) {
//         this.name = name;
//         this.age = age;
//         this.foot = foot;
//     }
// }
//
// let arrayPopelushka = [
//     new Popelushka('ira', 16, 32),
//     new Popelushka('katya', 17, 33),
//     new Popelushka('nina', 18, 33),
//     new Popelushka('kristina', 19, 34),
//     new Popelushka('vika', 20, 35),
//     new Popelushka('lilya', 21, 36),
//     new Popelushka('tanya', 22, 37),
//     new Popelushka('olya', 23, 37),
//     new Popelushka('maria', 23, 38),
//     new Popelushka('halya', 25, 40)
// ];
// class Prince {
//     constructor(name, age, foot) {
//         this.name = name;
//         this.age = age;
//         this.foot = foot;
//     }
// }
//
// let prince = new Prince('vova', 27, 34);
// for (let i = 0; i < arrayPopelushka.length; i++) {
//     const arrayPopelushkaElement = arrayPopelushka[i];
//     if (arrayPopelushkaElement.foot === prince.foot) {
//         document.write(`${prince.name} знайшов тапки ${arrayPopelushkaElement.name}`);
//     }
// }
// console.log(arrayPopelushka.find(value => value.foot === prince.foot));