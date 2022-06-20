let form = document.querySelector("form");
let input = document.querySelector("input");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2")
let p = document.querySelector("p")
let img = document.querySelector("img")
let weatherData = document.querySelector(".weather-data")
let h3 = document.querySelector("h3")

form.addEventListener("submit", searchData)

 async function searchData(e){
    e.preventDefault()

    let res = await fetch(`http://api.weatherstack.com/current?access_key=38a4077b0d057c027127ce6d3598a87f&query=${input.value}`)
    let data = await res.json()
    // console.log(data);

   if(data.success === false){
    window.alert("Enter correct city")
   }else{
   let temperature = data.current.temperature;
   let cityName = data.location.name;
   let weatherDescription = data.current.weather_descriptions;
   let icon = data.current.weather_icons;
   let time = data.current.observation_time;
   
//    observation_time

//    38a4077b0d057c027127ce6d3598a87f
   
    console.log(data)
    // console.log(temperature)
    // console.log(cityName)
    // console.log( weatherDescription)


    h1.innerText = `${temperature}°C`;
    h2.innerText = cityName;
    p.innerText = weatherDescription;
    img.setAttribute("src" , icon )
    h3.innerText = time;


    // if(temperature > 30){
    //     weatherData.style.backgroundImage = "url('https://wallpapertag.com/wallpaper/full/b/a/0/509377-summer-beach-background-1080x1920-for-tablet.jpg')"
    // }else if(temperature > 20){
    //     weatherData.style.backgroundImage = "URL('https://wallpapertag.com/wallpaper/full/b/a/0/509377-summer-beach-background-1080x1920-for-tablet.jpg')"

    // }else{
    //     weatherData.style.background = ("green")

    // }

}

form.reset();
}
