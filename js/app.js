const key = 'a7oGHH47rsFtu6QOOTZM1pqPghY6yY2U';
const url = `https://dataservice.accuweather.com/forecasts/v1/daily/1day/249758?apikey=${key}&language=en-us&details=false&metric=true`;

getWeather()
async function getWeather(){
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    calcAan(data);
}

function calcAan(data){
    tempMin = (data.DailyForecasts[0].Temperature.Minimum.Value)
    document.getElementById('tempMinTxt').innerHTML = "Minimum = " + tempMin + " C"
    tempMax = (data.DailyForecasts[0].Temperature.Maximum.Value)
    document.getElementById('tempMaxTxt').innerHTML = "Maximum = " + tempMax + " C"
    plotKorteBroek(tempMax)
}

function plotKorteBroek(tempMax) {
    if (tempMax >= 20) {
        document.getElementById('korteBroekTxt').innerHTML = " je kan een korte broek aan"
        document.getElementById('antwoordTxt').innerHTML = "Ja"
    } else {
        document.getElementById('korteBroekTxt').innerHTML = " je kan geen korte broek aan"
        document.getElementById('antwoordTxt').innerHTML = "Nee"
    }
}
