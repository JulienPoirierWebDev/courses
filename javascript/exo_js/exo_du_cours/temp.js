function convertTemperature(){

    let [temperature, choix] = askToUser()

    if (choix === "C"){
    
        let fahrenheit = celciusToFahrenheit(temperature)
        console.log(temperature + "degré celsius est" + fahrenheit);
    } else if (choix == "F"){    
        
        let celcius = fahrenheitToCelsius(temperature)
        console.log(temperature + "degrés fahrenheit est" + celcius);
    }
    
    else {
    
        console.log("choix invalid");
    
    }
    
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit-32)*5/9;
}

function celciusToFahrenheit(celcius) {
    return (celcius*9/5) + 32;
}

function askToUser() {
    let temperature = prompt("Entrez la temperature à convertir:");
    let choix = prompt("voulez-vouus convertir en celcius (c) ou en Fahrenheit");

    return [parseFloat(temperature), choix.toUpperCase()]
}
    
convertTemperature()