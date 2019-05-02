const byId = id => document.getElementById(id)
 
const changeTotal = value => byId('total').innerHTML = +byId('total').innerHTML + value

byId('add').addEventListener(
    'click', 
    function() {
        changeTotal(1)
    }
)

byId('minus').addEventListener(
    'click', 
    function() {
        changeTotal(-1)
    }
)

