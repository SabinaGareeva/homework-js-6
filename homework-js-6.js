// Задача 1
const but = document.getElementById('but');
const out = document.getElementById('out');
const car = { name: 'Mercedes-Benz', model: 'AMG GT С190', year: '2017', img: 'https://pic.auto.mail.ru/catalogue/generations/d/2/d2f2a7c9a4e9fd34c1e3cc9b68ae5ab8_240x150.png' }
const ludi = []

let stroka = '';
let image = new Image();
image.src = car.img;
but.onclick = f1
function f1() {
    out.innerHTML = car.name + ' ' + car.model + ' ' + car.year + ' ' + '<br>' + '<img src=' + car.img + '>' + '<br>';
}
// Задача 2
const out1 = document.getElementById('out1');
const out2 = document.getElementById('out2');
const out3 = document.getElementById('out3');
const groceries = [{ name: 'Помидоры', price: 300, quantity: 2 },
{ name: 'Молоко', price: 40, quantity: 4 },
{ name: 'Шоколад', price: 200, quantity: 3 },
{ name: 'Круассан', price: 250, quantity: 5 },
{ name: 'Мороженное', price: 60, quantity: 7 },
{ name: 'Чай', price: 70, quantity: 9 }]

function f2() {
    let stroka1 = '';
    let result = 0;
    // вывожу данные с объекта
    for (var i = 0; i < groceries.length; i++) {
        var name = groceries[i].name;
        var price = groceries[i].price;
        var quantity = groceries[i].quantity;
        stroka1 += name + " " + price + "  " + quantity + "<br>"
    }
    out1.innerHTML = stroka1
    //Нахожу сумму всех продуктов
    for (var i = 0; i < groceries.length; i++) { result += groceries[i].price * groceries[i].quantity }
    out2.innerHTML = result;
    //Нахожу самую дорогую покупку в чеке
    let max = groceries.reduce((prev, cur) => {
        if (prev.quantity * prev.price > cur.quantity * cur.price) {
            return prev
        }
        return cur
    })

    out3.innerHTML = max.name + ' ' + max.price + ' ' + max.quantity;

}

f2()






