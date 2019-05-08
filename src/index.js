console.log('Ahoj, jsem startovací projekt!');

if ("geolocation" in navigator) {
    //geolokace je dostupná a získáme souřadnice:
    navigator.geolocation.getCurrentPosition(mamLokaci);
        
   
};

function mamLokaci(pozice){
    console.log(pozice);
    console.log("AHOJ");
}

