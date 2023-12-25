let celsiusInput = document.getElementById('celsius-input');
let fahrenheitInput = document.getElementById('fahrenheit-input');
let kelvinInput = document.getElementById('kelvin-input');


celsiusInput.addEventListener('input', function(){
    let cTemp = celsiusInput.value;
    let fTemp = (cTemp * (9/5) + 32);
    let kTemp = (cTemp - 0) + 273.15;

    fahrenheitInput.value = fTemp;
    kelvinInput.value = kTemp;
})

fahrenheitInput.addEventListener('input', function(){
    let fTemp = fahrenheitInput.value;
    let cTemp = (fTemp - 32)*(5/9);
    let kTemp = (fTemp - 32)*5/9 + 273.15;

    celsiusInput.value = cTemp.toFixed(2);
    kelvinInput.value = kTemp.toFixed(2);
})

kelvinInput.addEventListener('input', function(){
    let kTemp = kelvinInput.value;
    let cTemp = kTemp - 273.15;
    let fTemp = (kTemp - 273.15)*9/5+32;

    celsiusInput.value = cTemp;
    fahrenheitInput.value = fTemp;
})