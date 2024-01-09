let searchInput=document.getElementById('searchInput')
let find=document.getElementById('find')
async function gitAPi(b) {
   if(b==''){
    
   }else{
    let api=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${b}&days=3`)
    if (api.ok && 400 != api.status) {
        let a = await api.json();
        backGround(a)
        displayCurrent(a)
        displayAnother(a)
    }
   }
        function backGround(a) {
            switch (a.current.condition.text) {
                case 'Clear':
                    document.body.style.backgroundImage="url('image/1.jpg')"
                    break;
                    case 'Sunny':
                        document.body.style.backgroundImage="url('image/5.jpg')"
                        break;
                        case 'Overcast':
                        document.body.style.backgroundImage="url('image/8.jpg')"
                        break;
                        case 'Partly cloudy':
                        document.body.style.backgroundImage="url('image/8.jpg')"
                        break;
                        case 'Light rain':
                        document.body.style.backgroundImage="url('image/6.jpg')"
                        break;
                        case 'Moderate rain':
                        document.body.style.backgroundImage="url('image/6.jpg')"
                        break;
                        case 'Havey rain':
                        document.body.style.backgroundImage="url('image/6.jpg')"
                        break;
                        case 'Freezing fog':
                        document.body.style.backgroundImage="url('image/7.jpg')"
                        break;
                        case 'Moderate snow':
                        document.body.style.backgroundImage="url('image/7.jpg')"
                        break;
                        case 'Havey snow':
                        document.body.style.backgroundImage="url('image/7.jpg')"
                        break;
                        case 'Light snow':
                        document.body.style.backgroundImage="url('image/7.jpg')"
                        break;
                        case 'Mist':
                            document.body.style.backgroundImage="url('image/2.png')"
                            break;
                            case 'Fog':
                            document.body.style.backgroundImage="url('image/2.png')"
                            break;
                            case '':
                            document.body.style.backgroundImage="url('image/2.png')"
                            break;
                default:
                    break;
            }
        }
}gitAPi('cairo')
searchInput.addEventListener('input',function (eventInfo) {
function serach() {
    let serach=eventInfo.target.value
    gitAPi(serach)
}
setTimeout(serach,2000)
})
async function getLoction(a,b) {
    let urlLoc=await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${a}&lon=${b}`)
    let loc=await urlLoc.json()
    let actualLocation=loc.address.city
    gitAPi(actualLocation)
    
}
find.addEventListener('click',function (eventInfo) {
        searchInput.value=''
        navigator.geolocation.getCurrentPosition(postion)
        function postion(position) {
            getLoction(position.coords.latitude,position.coords.longitude)
        }
       
     });


var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function displayCurrent(a) {
    if (null != a) {
        var e = new Date();
        console.log();
        let n=`<div class="col-lg-4 bg-clear">
        <div class="d-flex justify-content-between align-items-center text-white">
          <p class="fs-3">${e.getDate()+' '+monthNames[e.getMonth()]}</p>
           <p class="fs-3">${days[e.getDay()]}</p>
      </div>
      <p class="fs-3 text-white">cairo</p>
      <div class="text-white d-flex justify-content-around align-items-center">
        <img src="https:${a.current.condition.icon}" alt="" class="w-50">
          <p class="m-degr1 fs-1 ">${a.current.temp_c}°C</p>
      </div>
      <p class="main-color fs-3">${a.current.condition.text}</p>
      <div class="d-flex align-items-center">
        <p class="text-white fs-4 ms-4"><i class="fa-solid fa-umbrella me-2"></i>${a.current.precip_in}%</p>
        <p class="text-white fs-4 ms-4"><i class="fa-solid fa-wind me-2"></i>${a.current.wind_kph}KM/h</p>
        <p class="text-white fs-4 ms-4"><i class="fa-solid fa-compass me-2"></i>west</p>
      </div>
       
      </div>
      <div class="col-lg-4 bg-clear1 " >
          <div class="d-flex justify-content-between align-items-center text-white">
              <p class="fs-3">${days[e.getDay()+1]}</p>
          </div>
          <div class="text-white">
              <div class="text-white text-center">
              <img src="https:${a.forecast.forecastday[1].day.condition.icon}" alt="" class="w-50">
                  <p class="m-degr1 fs-2">${a.forecast.forecastday[1].day.maxtemp_c}°C</p>
                  <p class="m-degr1 fs-2">${a.forecast.forecastday[1].day.mintemp_c}°C</p>
                  <p class="main-color fs-3">${a.forecast.forecastday[1].day.condition.text}</p>
              </div>
          </div>
          
          </div>
          <div class="col-lg-4  bg-clear ">
            <div class="d-flex justify-content-between align-items-center text-white">
                <p class="fs-3">${days[e.getDay()+2]}</p>
            </div>
            <div class="text-white">
                <div class="text-white text-center">
                <div class="text-white text-center">
                <img src="https:${a.forecast.forecastday[2].day.condition.icon}" alt="" class="w-50">
                    <p class="m-degr1 fs-2">${a.forecast.forecastday[2].day.maxtemp_c}°C</p>
                    <p class="m-degr1 fs-2">${a.forecast.forecastday[2].day.mintemp_c}°C</p>
                    <p class="main-color fs-3">${a.forecast.forecastday[2].day.condition.text}</p>
                </div>
            </div>
            
            </div>`
            document.getElementById('current').innerHTML=n}}
function displayAnother(a) {
    
        var e = new Date();     
        console.log();
        let b=`<div class="col-lg-4 bg-clear">
        <div class="d-flex justify-content-between align-items-center text-white">
          <p class="fs-3">${e.getDate()+' '+monthNames[e.getMonth()]}</p>
           <p class="fs-3">${days[e.getDay()]}</p>
      </div>
      <p class="fs-3 text-white">${a.location.name}</p>
      <div class="text-white d-flex justify-content-around align-items-center">
        <img src="https:${a.current.condition.icon}" alt="" class="w-50">
          <p class="m-degr1 fs-1 ">${a.current.temp_c}°C</p>
      </div>
      <p class="main-color fs-3">${a.current.condition.text}</p>
      <div class="d-flex align-items-center">
        <p class="text-white fs-4 ms-4"><i class="fa-solid fa-umbrella me-2"></i>${a.current.precip_in}%</p>
        <p class="text-white fs-4 ms-4"><i class="fa-solid fa-wind me-2"></i>${a.current.wind_kph}KM/h</p>
        <p class="text-white fs-4 ms-4"><i class="fa-solid fa-compass me-2"></i>west</p>
      </div>
       
      </div>
      <div class="col-lg-4 bg-clear1 " >
          <div class="d-flex justify-content-between align-items-center text-white">
              <p class="fs-3">${days[e.getDay()+1]}</p>
          </div>
          <div class="text-white">
              <div class="text-white text-center">
              <img src="https:${a.forecast.forecastday[1].day.condition.icon}" alt="" class="w-50">
                  <p class="m-degr1 fs-2">${a.forecast.forecastday[1].day.maxtemp_c}°C</p>
                  <p class="m-degr1 fs-2">${a.forecast.forecastday[1].day.mintemp_c}°C</p>
                  <p class="main-color fs-3">${a.forecast.forecastday[1].day.condition.text}</p>
              </div>
          </div>
          
          </div>
          <div class="col-lg-4  bg-clear ">
            <div class="d-flex justify-content-between align-items-center text-white">
                <p class="fs-3">${days[e.getDay()+2]}</p>
            </div>
            <div class="text-white">
                <div class="text-white text-center">
                <div class="text-white text-center">
                <img src="https:${a.forecast.forecastday[2].day.condition.icon}" alt="" class="w-50">
                    <p class="m-degr1 fs-2">${a.forecast.forecastday[2].day.maxtemp_c}°C</p>
                    <p class="m-degr1 fs-2">${a.forecast.forecastday[2].day.mintemp_c}°C</p>
                    <p class="main-color fs-3">${a.forecast.forecastday[2].day.condition.text}</p>
                </div>
            </div>
            
            </div>`
            document.getElementById('current').innerHTML=b}

