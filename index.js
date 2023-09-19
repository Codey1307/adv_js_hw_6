
async function getIp(){

   try{
    const ipResponse = await axios.get("https://api.ipify.org/?format=json")
    const ip = ipResponse.data.ip;
    const locationResponse = await axios.get(`http://ip-api.com/json/${ip}`)
    const locationData = locationResponse.data

    button.addEventListener("click", () =>{
        const locationCard = document.createElement("div");
        locationCard.classList.add("location");
        locationCard.innerHTML = `
        Отримано наступні дані: 
       <br> Континент: ${locationData.continent || "Unknown"} 
       <br> Країна: ${locationData.country || "Unknown"} 
       <br> Регіон: ${locationData.regionName || "Unknown"}
       <br> Місто: ${locationData.city || "Unknown"}
       <br> Район: ${locationData.district || "Unknown"}
        `
        document.body.append(locationCard)
        })
}catch(error){
console.error(error)
}



}

getIp();
