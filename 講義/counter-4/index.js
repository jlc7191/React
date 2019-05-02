function byId(id){
   return document.getElementById(id)
}

function changeTotal(value){
    byId('total').innerHTML = +byId('total').innerHTML + value
}

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