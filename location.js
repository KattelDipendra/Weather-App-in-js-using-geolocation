const getLocation = document.getElementById("getlocation");
getLocation.addEventListener('click',evt=>{
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(position=>{
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            let googleMapURL=`https://maps.googleapis.com/maps/api/js?&center=${latitude},${longitude}&zoom=11&size=400*400`;
            const mapImage = document.getElementById("mapImage");
            mapImage.src = googleMapURL;
       
            console.log(latitude,longitude);
        },error=>{
            console.log(error.code)
        });
    }else{
        console.log("Not supported");
    }
});  

