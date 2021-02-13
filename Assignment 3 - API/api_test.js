const fetch = require('node-fetch');

let url = "https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today";

let settings = { method: "Get" };

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        console.log(json);
    });