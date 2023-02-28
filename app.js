// API complete Url
/* https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} */


//API key and basrUrl
const weatherApi = {
    key: "c34649d02e050526278ccb1b1da635a5",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?"
}


// Event listener function on Search Box (keypress) 
const searchInput = document.querySelector("#input-box");
searchInput.addEventListener(
    "keypress",
    (event) => {
        if (event.keyCode == 13)
            getWeatherReport(searchInput.value);
    }
)

//Get Weather report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showWeatherReport);
}

//Show weather report
function showWeatherReport(weather) {
    console.log(weather);

    let city = document.querySelector("#city");
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let temp = document.querySelector("#temp");
    temp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`

    let min_max = document.querySelector("#min_max");
    min_max.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_min)}&deg;C (max)`

    let weather_type = document.querySelector("#weather_type");
    weather_type.innerHTML = `${weather.weather[0].main}`

    let date = document.querySelector("#date");
    let todayDate = new Date();
    date.innerText = displayDate(todayDate);    //Date Functon called

}

//Manage Date Function
function displayDate(dateArg) {
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let year = dateArg.getFullYear();
    let date = dateArg.getDate();
    let month = months[dateArg.getMonth()];
    let day = days[dateArg.getDay()];

    return `${date} ${month} ${year}, (${day})`;
}