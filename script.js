
// Defining the api key and url:
const apiKey = "4278bbfb2bb1075de818036cfe7f9001";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=cairo';

// creat a function to get the weather data from api:
async function getData(){
    let response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
}
onload=getData;