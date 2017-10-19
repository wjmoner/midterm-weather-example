# Midterm Assignment (in-class)
You are in charge of making a p5js program that uses dynamically loaded data from Open Weather Map’s API to display graphics on a screen that react to the changing data. 

API: https://openweathermap.org/

You must include the following:
1. at least one *var* holding a string datatype
2. at least one *var* holding a numeric datatype
3. Three data points from OpenWeatherMap in addition to those provided to you (HINT: use the OpenWeatherMap API documentation to find out what you can use.
4. Your own OpenWeatherMap API Key (by signing up on the site)

Working with you and a partner, coding side-by-side, complete the following:
1. Download the midterm-weather-example code from Github
2. Select three additional data points from the Open Weather Map API and display them as text on the screen. See https://openweathermap.org/current for the parameters returned from the API. 
3. Create a graphics element that will change as a result of the values returned from the API. Consider items like wind, humidity, cloud cover, and other items that may be interesting to view as information on screen. Start simple, then add to the code based on your success in getting your simple item to display. NOTE: this will not work in "real time" so you should attempt to control your environment by hard-coding values to test. (e.g. if the weather API returns the same value for temperature each time, you won't have dynamic graphics. So, for instance, in a *var* for temperature, instead of using the API values, use hard-coded values like 0, 32, and 60 to test.)
4. When finished, upload the work to Moodle in a ZIP archive under your name.

EXTRA: For live polling, you might be able to use code such as this to set up a timer to access the API at regular intervals:

```
// from https://www.openprocessing.org/sketch/99785

int interval = 2000; //timer's interval
int lastRecordedTime = 0;

void setup(){
  createCanvas(300,300);
}

void draw(){
  background(0);
  //did the interval' time pass?
  if(millis()-lastRecordedTime>interval){
    //change FILL color
   fill(random(255),random(255),random(255));
   //and record time for next tick
   lastRecordedTime = millis(); 
  }
  //draw a rect
  rect(75,75,150,150);
   
}
```



