document.getElementById('add').addEventListener(
    'click', 
    function() {
        const v = +document.getElementById('total').innerHTML
        document.getElementById('total').innerHTML = v + 1
    }
)