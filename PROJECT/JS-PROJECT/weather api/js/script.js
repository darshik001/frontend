

document.querySelector('#search').addEventListener("click",()=>{
   let searchdata = document.querySelector("#search-input").value
   let weather = document.querySelector('#weather')
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchdata}&appid=728553c5759e12c0b5c96e66500b755b&units=metric`)
  .then(res => res.json())
  .then(data => {
    
    let row = `
    <div class="current-weather">
            <div class="location">${data.name}, ${data.sys.country}</div>
            <div class="date">${new Date()}</div>
            
            <div class="weather-main">
                <div>
                    <div class="temperature">${data.main.temp}°C</div>
                    <div class="condition">${data.weather[0].main}</div>
                </div>
                <img src="https://cdn.weatherbit.io/static/img/icons/c02d.png" alt="Weather Icon" class="weather-icon">
            </div>            
            <div class="weather-details">
                <div class="detail-item">
                    <div class="detail-icon">💧</div>
                    <div>
                        <div>Humidity</div>
                        <div>${data.main.humidity} %</div>
                    </div>
                </div>
                <div class="detail-item">
                    <div class="detail-icon">🌬️</div>
                    <div>
                        <div>Wind</div>
                        <div>${data.wind.speed} km/h</div>
                    </div>
                </div>
                <div class="detail-item">
                    <div class="detail-icon">🔆</div>
                    <div>
                        <div>UV Index</div>
                        <div>5 of 10</div>
                    </div>
                </div>
                <div class="detail-item">
                    <div class="detail-icon">👁️</div>
                    <div>
                        <div>Visibility</div>
                        <div>${data.visibility / 1000} km</div>
                    </div>
                </div>
            </div>
        </div>
    `
    weather.innerHTML = row
  })
  .then(err=> console.log(err.message))
})