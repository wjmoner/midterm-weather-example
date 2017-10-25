var weatherData;
var q = "q=Elon,NC";
var zip = "zip=15227";
var units = "units=imperial";
var appid = "appid=";
var yourAPIKey = "dc7c99f4d5c604e769199773f3275fc8"; // add your API Key here!

// timer code
var interval = 10000; //timer's interval
var lastRecordedTime = 0;
// end timer code

var where = "";
var currentTemp = "";
var h = 0; 
var m = 0;
var s = 0;
var suffix;

var url = "http://api.openweathermap.org/data/2.5/weather?" + zip + "&" + units + "&" + appid + yourAPIKey;

// you can change this around to include other data from the OpenWeatherMaps API
// the variable structure above makes the code more readable

function preload() {
    
    weatherData = loadJSON(url, weatherUpdate);
    
    setInterval( function() {
        weatherData = loadJSON(url, weatherUpdate);
    }, 5000);
    
}

function setup() {
    createCanvas(960, 480);
    noStroke();
    fill(255);
}

function draw() {

    background(0);
    calculateTime();
    displayText();
    
}

function weatherUpdate() {
    
    print(weatherData);
    
    where = weatherData.name;
    currentTemp = round(weatherData.main.temp); 

}

function displayText() {
    
    textSize(32);
    
    text(where, 300, 480-100)
    text(h + ":" + m + ":" + s + " " + suffix, 300, 480-40);
    text(currentTemp + "\xB0", 520, 480-40);
    // "\xB0" is a special character for the degree symbol
    // ref: http://www.javascripter.net/faq/mathsymbols.htm
}

function calculateTime() {
    h = hour();
    m = minute();
    s = second();
    suffix = "AM";

    if (h > 12) {
        h = h - 12;
        suffix = "PM";
    } else {
        suffix = "AM";
    }

    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }
}
