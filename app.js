
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async (direccion) => {

    const sitio = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(sitio.lat, sitio.lng);
    
    return {
        direccion,
        temp
    }

}

getInfo(argv.direccion)
    .then(resp => console.log(`El clima de ${resp.direccion} es de ${resp.temp}`))
    .catch(error => console.log(`No se pudo determinar el clima de ${argv.direccion}`));

// clima.getClima('40.750000','-74.000000')
//     .then(console.log)
//     .catch(console.log);

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)

