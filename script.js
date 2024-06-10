
// Defining the api key and url:
const apiKey = "4278bbfb2bb1075de818036cfe7f9001";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

// creat a function to get the weather data from api:
let userInput = document.querySelector(".search input")
let button = document.querySelector(".search button")
console.log(userInput);
console.log(button);

async function getData(search){
    let response = await fetch(`${apiUrl}${search}&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    
    let city = document.querySelector(".City");
    city.innerText=data.name;
    
    let temp = document.querySelector(".temp");
    temp.innerText=Math.round(data.main.temp) + "°C";
    
    let Humadity = document.querySelector(".humadity");
    Humadity.innerHTML=data.main.humidity;
    
    let windSpeed = document.querySelector(".wind-speed");
    windSpeed.innerText=data.wind.speed;
    }
    
    
    button.addEventListener("click",()=>{
        getData(userInput.value);
        // console.log("cicked");  
    })