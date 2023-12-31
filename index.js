const apiKey = "5f0950fb2191ddeeee2ca399240ecea9";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";


const searchBox = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

async function getWeatherInfo(city) {
    const result = await fetch(`${apiURL}${city}&appid=${apiKey}`);
    if(result.status == 404){
        document.getElementById("error").style.display = "block";
        document.getElementById("mainInfo").style.display = "none";
    }
    else{
        var data =await result.json()
        var imageWeatherInfo = data.weather[0].main;
        document.getElementById("temperature").innerHTML = Math.round(data.main.temp/10) + "°c";
        document.getElementById("cityName").innerHTML = data.name;
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("windSpeed").innerHTML = data.wind.speed + " km/hr";
        document.getElementById("WeatherImage").src = "./images/" + imageWeatherInfo.toLowerCase() + ".png";
        document.getElementById("mainInfo").style.display = "block";
    }
}
searchBtn.addEventListener("click", () => {
    getWeatherInfo(searchBox.value);
});
