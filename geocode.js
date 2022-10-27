class Geocode {
    constructor() {
    }

    async getCoordinates(city, country) {
        const address = city + ', ' + country;
        const response = await fetch(`http://api.positionstack.com/v1/forward?access_key=${this.apikey}&query=${address}`);
        const responseData = await response.json();

        return responseData.data[0];
    }
}