const apikey="69b436f559abc0ae68166b81404df91e"

const searchbox=document.querySelector(".search input");
const searchbutton=document.querySelector(".search button");
const icon= document.querySelector(".weather_icon");

        const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

        async function checkWeather(city){

            const response=await fetch(apiurl+city+`&appid=${apikey}`);
            var data=await response.json();

            if(response.status==404){
                document.querySelector(".err").style.display="block";
                document.querySelector(".weather").style.display="none";
            }
            else{
                document.querySelector(".city").innerHTML= data.name;
                document.querySelector(".temp").innerHTML= data.main.temp + "°C";
                document.querySelector(".humidity").innerHTML= data.main.humidity +"%";
                document.querySelector(".wind").innerHTML= data.wind.speed +" kmph";

                if(data.weather[0].main=='Clouds')icon.src="clouds.png";
                else if(data.weather[0].main=='Haze')icon.src="haze_.png";
                else if(data.weather[0].main=='Clear')icon.src="clear.png";
                else if(data.weather[0].main=='Drizzle')icon.src="drizzle.png";
                else if(data.weather[0].main=='Mist')icon.src="mist.png";
                else icon.src="rain.png";

                document.querySelector(".weather").style.display="flex";
                document.querySelector(".err").style.display="none";

                console.log(data);
            }
            
        }
        

        searchbutton.addEventListener('click',()=>{
            checkWeather(searchbox.value);
        })