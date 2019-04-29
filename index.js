// #1
const byId = id => document.querySelector(id)

// #2
// function裡面加function就是閉包
// const changeTotal = function (value) {
//     return function () {
//         byId('#total').innerHTML = +byId('#total').innerHTML + value
//     }
// }
// 箭頭函式的極致原型在上面
const changeTotal = value => () => byId('#total').innerHTML = +byId('#total').innerHTML + value

// #3
// byId('#add').addEventListener('click',
//     function () {
//         byId('#total').innerHTML = +byId('#total').innerHTML.value
//     }
// );
// 之前學的寫法在上面
// byId('#add').addEventListener(
// 'click', changeTotal(+1)
//這裡回傳一定要是function 所以如果這樣寫, changeTotal這個function裡面的return 就要再包一個function (這就叫做closure閉包)
// )
//把上面的一切用一個function包起來
const clickChangeTotal = (id, value) => byId(id).addEventListener('click', changeTotal(value))

// #4
//最後執行就是乾淨俐落
clickChangeTotal('#add',1)
clickChangeTotal('#minus',-1)
clickChangeTotal('#add10',10)
clickChangeTotal('#minus10',-10)

