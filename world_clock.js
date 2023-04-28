var countries=[
    {   country:"NEW YORK", timeZone:"America/New_York" },
    {   country:"LONDON", timeZone:"Europe/London"  },
    {   country:"BANGKOK", timeZone:"Asia/Bangkok"   },
    {   country:"SYDNEY",  timeZone:"Australia/Sydney"},
    {   country: "AUCKLAND", timeZone:"Pacific/Auckland"}
]

// formatting options for .toLocaleString()
option={day:"2-digit",month:"short",year:"numeric",hour12:false,hour:"numeric",minute:"2-digit"}
//DOM
var timeTable=document.getElementById("timeTable");

function showTime(){
    let now = new Date();
    for(let i=0; i<countries.length; i++){
        // add timeZone key:value pairs to countries dictionary;
        option['timeZone']=countries[i]['timeZone'];
        let countryName = countries[i]['country'];
        let string = now.toLocaleString('en', option);
        // split the datetime string into 3 parts by ','
        dayMonth = string.split(',', 3)[0]
        year = string.split(',', 3)[1]
        time = string.split(',', 3)[2]
        var tr=document.createElement('tr')
        timeTable.rows[0].cells[i].innerHTML=countryName;
        timeTable.rows[1].cells[i].innerHTML=time;
        timeTable.rows[2].cells[i].innerHTML=dayMonth + ', ' + year;
        // differentiate day from night
        // use parseInt() to convert string to number
        let hour = parseInt(time.split(':')[0]);
        timeTable.rows[1].cells[i].style.backgroundSize = "100%";
        if(hour>=20 || hour <= 6){
            // timeTable.rows[1].cells[i].style.backgroundColor = 'grey';
            timeTable.rows[1].cells[i].style.backgroundImage = "url(./assets/night_sky.jpg)"; 
            timeTable.rows[1].cells[i].style.color = "lightgrey";
        }
        else if(4<hour && hour<8){ // 5am - 7am
            timeTable.rows[1].cells[i].style.backgroundImage = "url(./assets/morning_sky.jpg)";}
        else if(8<=hour && hour<18){ // 8am - 18pm
            timeTable.rows[1].cells[i].style.backgroundImage = "url(./assets/blue_sky.jpg)";}
        else if(18<=hour && hour<20){ //18pm - 20pm
            timeTable.rows[1].cells[i].style.backgroundImage = "url(./assets/evening_sky.jpg)";}
    }
}
showTime()
// The setInterval() method calls a function at specified intervals (in milliseconds).
setInterval(showTime, 30000) // refresh every 30 seconds