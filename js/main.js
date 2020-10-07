var pageTotal = 0;
const displayTotal = () => {
    var pageDisplay = document.getElementById('totalValue');
    pageDisplay.textContent = pageTotal;
    if (pageTotal < 0 && pageDisplay.classList.contains('negative-values') === false) {
        pageDisplay.classList.add('negative-values');
        console.log(pageDisplay.classList);
    } else if (pageTotal >= 0 && pageDisplay.classList.contains('negative-values') === true) {
        pageDisplay.classList.remove('negative-values');
        console.log(pageDisplay.classList);
    } else if (pageTotal >= 0 && pageDisplay.classList.contains('negative-values') === false) {
        console.log(pageDisplay.classList);
    }
};


var valueBox = document.getElementById('amount');
var increment;

document.getElementById('add').addEventListener('click',function(e) {
    e.preventDefault();
    console.log('adding...');
    increment=valueBox.value;
    pageTotal= pageTotal+parseInt(valueBox.value);
    
    displayTotal()
});

document.getElementById('subtract').addEventListener('click', function(e) {
    e.preventDefault();
    console.log('subtracting...')
    increment=valueBox.value;
    pageTotal= pageTotal-parseInt(valueBox.value);

    displayTotal()
})

document.addEventListener('DOMContentLoaded', function() {
    displayTotal();
    valueBox.defaultValue = '1';
})