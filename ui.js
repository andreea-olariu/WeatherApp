class UI {
    constructor() {
        this.location = document.querySelector("#w-location");
        this.desc = document.querySelector("#w-desc");
        this.temp = document.querySelector("#w-string");
        this.icon = document.querySelector("#w-icon");
        this.humidity = document.querySelector("#w-humidity");
        this.feelsLike = document.querySelector("#w-feels-like");
    }

    showTitle(text) {
        this.location.textContent = text;
    }
    showDesc(text) {
        this.desc.textContent = text;
    }

    showTemp(text) {
        this.temp.textContent = `${text} C`;
    }
    showIcon(id) {
        this.icon.src = `https://openweathermap.org/img/wn/${id}@2x.png`
    }

    showHumidity(text) {
        this.humidity.textContent = `Humidity level: ${text}%`;
    }

    showHowItFeels(text) {
        this.feelsLike.textContent = `The temperature felt is: ${text} C`;
    }
}