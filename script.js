const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8b227a301amshad8761fd9b8ff30p121c03jsn2d13951f2af6',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {

    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        
        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        feels_like1.innerHTML = response.feels_like
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        
        temp.innerHTML = response.temp
        temp1.innerHTML = response.temp
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        
        wind_speed.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        humidity.innerHTML = response.humidity
        humidity1.innerHTML = response.humidity

        cityName1.innerHTML = city
        cityName2.innerHTML = city
        cityName3.innerHTML = city
        cityName4.innerHTML = city
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})

getWeather("Aurangabad");