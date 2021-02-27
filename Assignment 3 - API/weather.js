const request = require("request")


const url = "http://api.openweathermap.org/data/2.5/weather?q=Seattle&units=metric&appid=3c781ddd37e540d47eb3f005252a6455"

request(url, (error, response, body) => {
    const data = JSON.parse(body)
    console.log(`It's currently ${data.main.temp} Degrees Celcius in Seattle.`)
   })