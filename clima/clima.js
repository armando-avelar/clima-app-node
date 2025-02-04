const axios = require('axios');

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8b53867f26a50eac08eb4532c0e4cde6&units=metric`);

    return resp.data.main.temp;

}

module.exports = {
    getClima
}