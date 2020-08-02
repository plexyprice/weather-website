const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e10a2a01691c2f888feeb0f94288c143&query=' + longitude +',' + latitude + '&units=f'

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' out. There is a ' + body.current.precip + '% chance of rain. Current humidity is ' + body.current.humidity + '%.')
        }
    })
}

module.exports = forecast