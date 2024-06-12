
async function getWeather(city) {
    try {
        const apiURL = "https://api.weatherapi.com/v1/current.json?key=f45da337f5894b59877165507241206&q=" + city
        const response = await fetch(apiURL)
        const data = await response.json()
        if (!response.ok) {
            console.log(data.description);
            return;
        }
        console.log(data)
    }
    catch (error) {
        console.log(error)
    }
    
  }

getWeather("ottawa");

setInterval(() => {
    getWeather("ottawa");
}, 3000);