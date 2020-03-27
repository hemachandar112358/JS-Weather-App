
const aPI_key= '1f24d6a9c4434428cb081d6709a43e2a';
let submit=document.getElementById('submit')
var place= document.getElementById('weather')

submit.addEventListener("click",(event)=>{
    
    document.getElementById('output').innerHTML="Loading..."
    getWeatherForLocation(place.value) 
    event.preventDefault()
})

function getWeatherForLocation(location){
    
    let url= 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid='+aPI_key
    
    fetch(url,{mode: "cors"})
    .then((response)=>{
        //console.log(response)
        return response.json()
    })
    .then((response)=>{
        console.log(response)
        if (response.cod==='404'){
            document.getElementById('output').innerHTML= response.message;
        }
        let temp_kelvin= response.main.temp;
        let temp_celsius= temp_kelvin-273.15
        document.getElementById('city').innerHTML=location
        document.getElementById('output').innerHTML=temp_celsius.toFixed(2).toString()+ " &#x2103"

    })

    }
