class Weather {
    constructor() {
        const locStorage = JSON.parse(localStorage.getItem('coordinates'));
        if(locStorage !== null) {
            this.lat = locStorage.lat;
            this.lon = locStorage.lon;
        } else {
            this.lat = 9;
            this.lon = 27.58;
        }
    }

    async get() {
        const apiCall = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&appid=${this.apikey}`;

        const response = await fetch(apiCall);
        const responseData = response.json();
        return responseData;
    }
}