const byId = id => document.getElementById(id)
 
//const changeTotal = value => byId('total').innerHTML = +byId('total').innerHTML + value

const changeTotal = function (value){
    return function(){
        byId('total').innerHTML = +byId('total').innerHTML + value
    }
}


byId('add').addEventListener(
    'click', 
    changeTotal(1)
)

byId('minus').addEventListener(
    'click', 
    changeTotal(-1)
)

