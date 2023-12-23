let dateInput = document.getElementById('date');
let calcBtn = document.getElementById('calc_btn');
let text = document.getElementById('calc_age');

function calculateAge() {
    let dateValue = new Date(dateInput.value)
    let year1 = dateValue.getFullYear();

    

    let currentDate = new Date()
    let year2 = currentDate.getFullYear();

    let year3 = year2 - year1;

    if(year1 > year2){
        alert('Please enter correct year')
    } else {
        return text.innerHTML = `${year3} years old.`;
    }

        

}