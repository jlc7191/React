const byId = id => document.getElementById(id)
 
const changeTotal = (value) => () => (
    byId('total').innerHTML = +byId('total').innerHTML + value
)
 
const clickAndChange = (id, value) => byId(id).addEventListener('click', changeTotal(value))

clickAndChange('add', 1)
clickAndChange('minus', -1)
clickAndChange('add10', 10)
clickAndChange('minus10', -10)