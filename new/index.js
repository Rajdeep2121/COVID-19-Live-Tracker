var confd = document.querySelector(".confirmed");
var death = document.querySelector(".deaths");
var rec = document.querySelector(".recovered");
var active = document.querySelector(".actives");
var dated = document.querySelector(".dated");

window.onload = clicked();


function clicked(){
    fetch('https://api.covid19india.org/data.json')
        .then(response => response.json())
        .then(data => {
            // console.log(data['statewise'][0]);
            dated.innerHTML = "Last updated: "+data['statewise'][0]['lastupdatedtime']+" IST";

            confd.innerHTML = data['statewise'][0]['confirmed']+'<br><h5>(+'+data['statewise'][0]['deltaconfirmed']+')</h5>';
            rec.innerHTML = data['statewise'][0]['recovered']+'<br><h5>(+'+data['statewise'][0]['deltarecovered']+')</h5>';

            active.innerHTML = data['statewise'][0]['active'];
            death.innerHTML = data['statewise'][0]['deaths']+'<br><h5>(+'+data['statewise'][0]['deltadeaths']+')</h5>';
        }
        )
    .catch(error => console.log("Connection error"));
}

// FOR STATES 
function submitted2(){
    window.scrollBy(0,10);
    var confd3 = document.querySelector(".confirmed3");
    var death3 = document.querySelector(".deaths3");
    var rec3 = document.querySelector(".recovered3");
    var active3 = document.querySelector(".active3");
    var inputVal2 = document.querySelector('#inputVal2');
    // console.log(inputVal.value);
    fetch("https://api.covid19india.org/data.json")
        .then(response => response.json())
        .then(data => {
            for(let i=0;i<data['statewise'].length;i++){
                if(data['statewise'][i]['state'].toLowerCase()==inputVal2.value.toLowerCase()){
                    confd3.innerHTML = data['statewise'][i]['confirmed']+'<br><h5>(+'+data['statewise'][i]['deltaconfirmed']+')</h5>';
                    rec3.innerHTML = data['statewise'][i]['recovered']+'<br><h5>(+'+data['statewise'][i]['deltarecovered']+')</h5>';
                    active3.innerHTML = data['statewise'][i]['active'];
                    death3.innerHTML = data['statewise'][i]['deaths']+'<br><h5>(+'+data['statewise'][i]['deltadeaths']+')</h5>';
                }
            }
        })
    .catch(error => console.log("error"))
}

function pressed2(e){
    if(e.keyCode==13)
        submitted2();
}




// FOR WORLD
function submitted(){
    window.scrollBy(0,1000);
    var confd2 = document.querySelector(".confirmed2");
    var death2 = document.querySelector(".deaths2");
    var rec2 = document.querySelector(".recovered2");
    var active2 = document.querySelector(".active2");
    var inputVal = document.querySelector('#inputVal');
    // console.log(inputVal.value);
    fetch('https://coronavirus-19-api.herokuapp.com/countries/'+inputVal.value)
        .then(response => response.json())
        .then(data => {
            if(data['cases']==undefined)
            alert("Enter a valid Country name!!");
            // console.log(data['deaths']);
            else{
                // console.log(data['cases']);
                    confd2.innerHTML = data['cases']+'<br><h5>(+'+data['todayCases']+')</h5>';
                    death2.innerHTML = data['deaths']+'<br><h5>(+'+data['todayDeaths']+')</h5>';
                    rec2.innerHTML = data['recovered'];
                    active2.innerHTML = data['active'];
                }
            })
            .catch(error => console.log("error"))
        }

function pressed(e){
    if(e.keyCode==13)
        submitted();
}

// GRAPH
ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
var myConfig = {
  "type": "line",
  "title": {
      "text": "Daily Cases"
    },
  "plot":{
      "aspect": "spline"
  },
  scaleX: {
      labels: ["Feb 15","Feb 16","Feb 17","Feb 18","Feb 19","Feb 20","Feb 21","Feb 22","Feb 23","Feb 24","Feb 25","Feb 26","Feb 27","Feb 28","Feb 29","Mar 01","Mar 02","Mar 03","Mar 04","Mar 05","Mar 06","Mar 07","Mar 08","Mar 09","Mar 10","Mar 11","Mar 12","Mar 13","Mar 14","Mar 15","Mar 16","Mar 17","Mar 18","Mar 19","Mar 20","Mar 21","Mar 22","Mar 23","Mar 24","Mar 25","Mar 26","Mar 27","Mar 28","Mar 29","Mar 30","Mar 31","Apr 01","Apr 02","Apr 03","Apr 04","Apr 05","Apr 06","Apr 07","Apr 08","Apr 09","Apr 10","Apr 11","Apr 12","Apr 13","Apr 14","Apr 15","Apr 16","Apr 17","Apr 18","Apr 19","Apr 20","Apr 21","Apr 22","Apr 23","Apr 24","Apr 25","Apr 26","Apr 27","Apr 28","Apr 29","Apr 30","May 01","May 02","May 03","May 04","May 05","May 06","May 07","May 08","May 09","May 10","May 11","May 12","May 13","May 14","May 15","May 16","May 17","May 18","May 19","May 20","May 21","May 22","May 23","May 24","May 25","May 26","May 27","May 28","May 29","May 30","May 31","Jun 01","Jun 02","Jun 03","Jun 04","Jun 05","Jun 06","Jun 07","Jun 08","Jun 09","Jun 10","Jun 11","Jun 12","Jun 13","Jun 14"]   
  },
  "series": [{
    "values": [null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1,22,1,1,3,6,7,15,0,12,8,18,14,15,14,26,25,55,83,64,103,37,121,70,160,100,37,227,146,601,545,516,529,701,489,573,565,809,875,846,759,1248,1034,883,1060,922,2013,1250,924,1541,1290,1669,1408,1836,1607,1561,1873,1738,1801,2394,2442,2806,3932,2963,3587,3364,3344,3113,4353,3607,3524,3763,3942,3787,4864,5050,4630,6147,5553,6198,6568,6629,7113,6414,5843,7293,7300,8105,8336,8782,7761,8821,9633,9889,9471,10438,10864,8442,8852,12375,11128,11320,12023,11157]
  }]
};

zingchart.render({
  id: 'myChart',
  data: myConfig,
  height: "100%",
  width: "100%"
});
// view-source:https://www.worldometers.info/coronavirus/country/india/ 








// window.onload = fetchNews(); 

// function fetchNews(){
//     listNews = [];
//     fetch("https://api.covid19india.org/data.json")
//         .then(response => response.json())
//         .then(data => {
//             // console.log(data['statewise'][0]);
//             for(let i=0; i<data['statewise'].length;i++){
//                 if(data['statewise'][i]['statenotes'] != ''){
//                     if(data['statewise'][i]['state'] == "Total"){
//                         data['statewise'][i]['state'] = "India";
//                     }
//                     listNews.push(data['statewise'][i]['statenotes']+'('+data['statewise'][i]['state']+')');
//                     // console.log(data['statewise'][i]['statenotes']);
//                 }
//             }
//             listNews = listNews.slice(0,10);

//             for (let j=0;j<10;j++){
//                 let ele = document.querySelector(".news"+String(j));
//                 ele.innerHTML = listNews[j];
//             }
//         })
    
// }


