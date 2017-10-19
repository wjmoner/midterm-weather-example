var weatherData;
var q = "q=Elon,NC";
var zip = "zip=15227";
var units = "units=imperial";
var appid = "appid=";
var yourAPIKey; // add your API Key here!

var url = "http://api.openweathermap.org/data/2.5/weather?" + q + "&" + units + "&" + appid + yourAPIKey;

// you can change this around to include other data from the OpenWeatherMaps API
// the variable structure above makes the code more readable

function preload() {
    weatherData = loadJSON(url);
    print(weatherData); // can view weather API object in console to identify keys
}

function setup() {
    createCanvas(960, 480);
    noStroke();
    fill(255);
}

function draw() {

    background(0);

    var h = hour();
    var m = minute();
    var s = second();
    var suffix = "AM";
    var where = weatherData.name;
    var currentTemp = round(weatherData.main.temp); 

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

    textSize(32);
    text(where, 300, 480-100)
    text(h + ":" + m + ":" + s + " " + suffix, 300, 480-40);
    text(currentTemp + "º", 520, 480-40);
}
