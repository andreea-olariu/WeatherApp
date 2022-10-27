const weather = new Weather;
const ui = new UI;
const geo = new Geocode;


getKeys()
    .then(res => {
        weather.apikey = res.openWeather;
        geo.apikey = res.positionSlack;

        showApp();
        document.querySelector("#w-change-btn").addEventListener('click', changeLocation);

    })
    .catch(err => console.log(err));


function showApp() {
    weather.get()
        .then(res => {
             console.log(res);
            ui.showTitle(`${res.name}, ${res.sys.country}`);

            let description = capitalizeString(res.weather[0].description);
            ui.showDesc(description);

            ui.showTemp(toCelsius(res.main.temp).toFixed(1));
            ui.showIcon(res.weather[0].icon);
            ui.showHumidity(res.main.humidity);
            ui.showHowItFeels(toCelsius(res.main.feels_like).toFixed(1));
        })
        .then(err => console.log(err))
}


function capitalizeString(str) {
    let aux = str;
    const firstLetter = aux[0].toUpperCase();
    aux = aux.slice(1);
    aux = firstLetter + aux;
    return aux;
}

function toCelsius(kelvin) {
    return kelvin - 273.15;
}

function changeLocation(e) {
    const city = document.getElementById("city").value;
    const country = document.getElementById("country").value;
    geo.getCoordinates(city, country)
        .then(res => {
            // console.log(res);
            weather.lat = res.latitude;
            weather.lon = res.longitude;

            localStorage.setItem('coordinates', JSON.stringify({ lat: weather.lat, lon: weather.lon }));

            showApp();
        })
        .catch(err => console.log(err));

    document.getElementById("city").value = "";
    document.getElementById("country").value = "";
    e.preventDefault();
}
