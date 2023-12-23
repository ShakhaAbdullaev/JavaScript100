let weight = document.getElementById('input');
let result = document.getElementById('result');

weight.addEventListener('input', function(e) {
    let weight = e.target.value;

    document.getElementById('result').innerHTML = (weight / 2.205).toFixed(2);

});