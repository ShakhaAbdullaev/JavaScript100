const container = document.querySelector('.container');
const search = document.querySelector('.search_box button');
const weatherBox = document.querySelector('.weather_box');
const weatherDetails = document.querySelector('.weather_details');
const error = document.querySelector('.not_found')
const input = document.querySelector('#input')

search.addEventListener('click', () => {

    const APIKey = "4f10c8ed7bf29834685abfbeb099bf80";
    const city = document.querySelector('.search_box input').value;

    if(city == '')
        return;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then((res) => res.json()).then(json => {

    if(json.cod == '404'){
        container.style.height = '400px';
        weatherBox.classList.remove('active');
        weatherDetails.classList.remove('active');
        error.classList.add('active');
        return;
    }
        container.style.height = '555px';
        weatherBox.classList.add('active');
        weatherDetails.classList.add('active');
        error.classList.remove('active');


        const image = document.querySelector('.weather_box img');
        const temp = document.querySelector('.weather_box .temperature');
        const description = document.querySelector('.weather_box .description');
        const humidity = document.querySelector('.weather_details .humidity span');
        const wind = document.querySelector('.weather_details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png'                
                break;

            case 'Rain':
                image.src = 'images/rain.png'                
                break;

            case 'Snow':
            image.src = 'images/snow.png'                
            break;
        
            case 'Clouds':
            image.src = 'images/cloud.png'                
            break;

            case 'Mist':
            image.src = 'images/mist.png'                
            break;

            case 'Haze':
            image.src = 'images/mist.png'                
            break;

            default:
                image.src = 'images/cloud.png';
        }

        temp.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`
        description.innerHTML =  `${json.weather[0].description}`
        humidity.innerHTML = `${json.main.humidity}`
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`

    });
    
});

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("search").click();
    }
  });

