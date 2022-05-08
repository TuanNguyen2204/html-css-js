var search = document.querySelector('.input-search');
var city = document.querySelector('.city');
var time = document.querySelector('.time');
var country = document.querySelector('.country');
var temperature = document.querySelector('.value');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var cloud = document.querySelector('.cloud span');
var content = document.querySelector('.content');


async function changeWeatherUI(capitalSearch) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`;
    let data = await fetch(apiURL).then(res => res.json());
    if (data.cod == 200) {
        content.classList.remove('hide');
        city.innerText = data.name;
        country.innerText = data.sys.country;
        const temp = Math.round(data.main.temp)
        temp >= 18
            ? (document.body.className = 'hot')
            : (document.body.className = 'cold')
        temperature.innerHTML = temp
        time.innerHTML = new Date().toLocaleString("vi");
        shortDesc.innerHTML = data.weather[0].main;
        visibility.innerText = data.visibility + 'm';
        wind.innerHTML = data.wind.speed + ' (m/s)'
        cloud.innerHTML = data.clouds.all + ' (%)'
    } else {
        content.classList.add('hide');
    }
}
search.addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
    let capitalSearch = search.value.trim();
        changeWeatherUI(capitalSearch);
    }
})
changeWeatherUI('ha noi')
