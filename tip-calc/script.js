let billInput = document.getElementById('bill');
let tipInput = document.getElementById('tip');
let calcBtn = document.getElementById('calculate');
let result = document.getElementById('total');



function calculateTotal() {
    
    let billValue = billInput.value;
    let tipValue = tipInput.value;
    let totalValue = billValue*(1+tipValue/100);
    
    result.innerHTML = `$ ${totalValue.toLocaleString()}`;
};
