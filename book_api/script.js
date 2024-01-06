let input = document.querySelector('#input');
let btn = document.querySelector('#search');
let results = document.querySelector('.results');

    btn.onclick = (event) => {
        event.preventDefault();
        fetch("https://www.googleapis.com/books/v1/volumes/?" +
        new URLSearchParams({
            q: input.value,
            maxResults: 20,
        }),
        {
            method: "GET",
        }
        )
        .then((res) => {
            return res.json();
        })
        .then((res) =>{
            res.items.forEach(element => {
                results.innerHTML += `<li>${element.volumeInfo.title}</li>`
                results.style.display = "block"
            });
        });

        newResults();
};

function newResults (){
    results.innerHTML = ""
    btn();
};

// window.addEventListener("load", () => {
//     let loader = document.querySelector('.lds-roller')

//     loader.classList.add('lds-hidden');

//     loader.add('transitionend', () => {
//         document.body.removeChild('lds-roller')
//     })
// })