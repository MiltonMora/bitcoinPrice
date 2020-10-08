const API = 'https://api.coindesk.com/v1/bpi/currentprice.json';

function bitcoinPrice() {
    return new Promise((resolve, reject) => {
        fetch(API).then(res => res.json())
        .then(respose => resolve(respose))
        .catch(error => reject(error));
    })
}

bitcoinPrice().then(function(data) {
    document.getElementById('time').innerHTML = `Ultima actualizacion: ${data.time.updated}`;
    document.getElementById('disclaimer').innerHTML = `Descargo de responsabilidad: ${data.disclaimer}`;
    document.getElementById('bpi').innerHTML = `<b>Codigo: ${data.bpi.USD.code}</b>
                                                <p>Descripcion: ${data.bpi.USD.description}</p>
                                                <h4>Valor en flotante: ${data.bpi.USD.symbol} ${data.bpi.USD.rate_float}</h4>`;
    document.getElementById('gbp').innerHTML = `<b>Codigo: ${data.bpi.GBP.code}</b>
                                                <p>Descripcion: ${data.bpi.GBP.description}</p>
                                                <h4>Valor en flotante: ${data.bpi.GBP.symbol} ${data.bpi.GBP.rate_float}</h4>`;
    document.getElementById('eur').innerHTML = `<b>Codigo: ${data.bpi.EUR.code}</b>
                                                <p>Descripcion: ${data.bpi.EUR.description}</p>
                                                <h4>Valor en flotante: ${data.bpi.EUR.symbol} ${data.bpi.EUR.rate_float}</h4>`;
}).catch(function(error){ console.log(error.message)})