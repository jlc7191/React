function byId(id){
   return document.getElementById(id)
}

byId('add').addEventListener(
    'click', 
    function() {
        byId('total').innerHTML = +byId('total').innerHTML + 1
    }
)

byId('minus').addEventListener(
    'click', 
    function() {
        byId('total').innerHTML = +byId('total').innerHTML - 1
    }
)