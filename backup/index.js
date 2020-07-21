var confd = document.querySelector(".confirmed");
var death = document.querySelector(".deaths");
var rec = document.querySelector(".recovered");
var active = document.querySelector(".actives");
var dated = document.querySelector(".dated");

function formatNumber(n){
    if (n.length <= 3) {
        return n;
    } else {
      var count = 0;
      var newnew = '';
      for (var i = n.length - 1; i >= n.length - 3; i--) {
        newnew = newnew.concat(n[i]);
        // console.log(n[i]);
      }
      newnew = newnew.concat(',');
      for (var j = n.length - 4; j >= 0; j--) {
        newnew = newnew.concat(n[j]);
        count += 1;
        if (count == 2) {
          count = 0;
          newnew = newnew.concat(',');
        }
      }
    var finalString = reverseString(newnew);
      if (finalString[0] == ',') {
        finalString = finalString.substring(1);
      }
      return (finalString);
    }
}
function formatInternationalNumber(n){
    if (n.length <= 3) {
        return n;
    } else {
      var count = 0;
      var newnew = '';
      for (var i = n.length - 1; i >= n.length - 3; i--) {
        newnew = newnew.concat(n[i]);
        // console.log(n[i]);
      }
      newnew = newnew.concat(',');
      for (var j = n.length - 4; j >= 0; j--) {
        newnew = newnew.concat(n[j]);
        count += 1;
        if (count == 3) {
          count = 0;
          newnew = newnew.concat(',');
        }
      }
    var finalString = reverseString(newnew);
      if (finalString[0] == ',') {
        finalString = finalString.substring(1);
      }
      return (finalString);
    }
}

function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
}


window.onload = clicked();


function clicked(){
    fetch('https://api.covid19india.org/data.json')
        .then(response => response.json())
        .then(data => {
            // console.log(data['statewise'][0]);
            // if(data['statewise'][0]['deltaconfirmed'][0]==)
            if(data['statewise'][0]['deltaconfirmed'][0]=='-'){
                data['statewise'][0]['deltaconfirmed'] = data['statewise'][0]['deltaconfirmed'].slice(1,);
            }
            dated.innerHTML = "Last updated: "+data['statewise'][0]['lastupdatedtime']+" IST";
            // console.log(data['statewise'][0]['confirmed'].type);
            confd.innerHTML = formatNumber(data['statewise'][0]['confirmed'])+'<br><h5>(+'+formatNumber(data['statewise'][0]['deltaconfirmed'])+')</h5>';
            rec.innerHTML = formatNumber(data['statewise'][0]['recovered'])+'<br><h5>(+'+formatNumber(data['statewise'][0]['deltarecovered'])+')</h5>';

            active.innerHTML = formatNumber(data['statewise'][0]['active']);
            death.innerHTML = formatNumber(data['statewise'][0]['deaths'])+'<br><h5>(+'+formatNumber(data['statewise'][0]['deltadeaths'])+')</h5>';
        }
        )
    .catch(error => console.log("Connection error"));
}

// FOR STATES 
window.onload = state_load();
function state_load(){
    var confd3 = document.querySelector(".confirmed3");
    var death3 = document.querySelector(".deaths3");
    var rec3 = document.querySelector(".recovered3");
    var active3 = document.querySelector(".active3");
    fetch("https://api.covid19india.org/data.json")
        .then(response => response.json())
        .then(data => { 
            // console.log('statewise',data['statewise'][1])
            confd3.innerHTML = formatNumber(data['statewise'][1]['confirmed'])+'<br><h5>(+'+formatNumber(data['statewise'][1]['deltaconfirmed'])+')</h5>';
            rec3.innerHTML =formatNumber(data['statewise'][1]['recovered'])+'<br><h5>(+'+formatNumber(data['statewise'][1]['deltarecovered'])+')</h5>';
            active3.innerHTML = formatNumber(data['statewise'][1]['active']);
            death3.innerHTML = formatNumber(data['statewise'][1]['deaths'])+'<br><h5>(+'+formatNumber(data['statewise'][1]['deltadeaths'])+')</h5>';
        })
    .catch(error => console.log("error"))
}
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
                    confd3.innerHTML = formatNumber(data['statewise'][i]['confirmed'])+'<br><h5>(+'+formatNumber(data['statewise'][i]['deltaconfirmed'])+')</h5>';
                    rec3.innerHTML = formatNumber(data['statewise'][i]['recovered'])+'<br><h5>(+'+formatNumber(data['statewise'][i]['deltarecovered'])+')</h5>';
                    active3.innerHTML = formatNumber(data['statewise'][i]['active']);
                    death3.innerHTML = formatNumber(data['statewise'][i]['deaths'])+'<br><h5>(+'+formatNumber(data['statewise'][i]['deltadeaths'])+')</h5>';
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
window.onload = worldLoad();
function worldLoad(){
    var confd2 = document.querySelector(".confirmed2");
    var death2 = document.querySelector(".deaths2");
    var rec2 = document.querySelector(".recovered2");
    var active2 = document.querySelector(".active2");
    fetch('https://coronavirus-19-api.herokuapp.com/countries/')
        .then(response => response.json())
        .then(data => {
            // console.log("World Total:",data)
            confd2.innerHTML = formatInternationalNumber(data[0]['cases'].toString())+'<br><h5>(+'+formatInternationalNumber(data[0]['todayCases'].toString())+')</h5>';
            death2.innerHTML = formatInternationalNumber(data[0]['deaths'].toString())+'<br><h5>(+'+formatInternationalNumber(data[0]['todayDeaths'].toString())+')</h5>';
            rec2.innerHTML = formatInternationalNumber(data[0]['recovered'].toString());
            active2.innerHTML = formatInternationalNumber(data[0]['active'].toString());
        })
        .catch(error => console.log("error")) 
}
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
                    confd2.innerHTML = formatInternationalNumber(data['cases'].toString())+'<br><h5>(+'+formatInternationalNumber(data['todayCases'].toString())+')</h5>';
                    death2.innerHTML = formatInternationalNumber(data['deaths'].toString())+'<br><h5>(+'+formatInternationalNumber(data['todayDeaths'].toString())+')</h5>';
                    rec2.innerHTML = formatInternationalNumber(data['recovered'].toString());
                    active2.innerHTML = formatInternationalNumber(data['active'].toString());
                }
            })
            .catch(error => console.log("error"))
        }

function pressed(e){
    if(e.keyCode==13)
        submitted();
}

// GRAPH
window.onload = drawGraph();
function drawGraph(){
    fetch('https://api.covid19india.org/states_daily.json')
        .then(response => response.json())
        .then(data => {
            var confdList = [];
            var recdList = [];
            var deathList = [];
            var dateList = [];
            // console.log(data['states_daily']);
            let j_confd = data['states_daily'].length - 3;
            let j_death = data['states_daily'].length - 1;
            let j_recovered = data['states_daily'].length - 2;
            // let j=0;
            let count = 0
            while(count<20){
                // console.log(data['states_daily'][j]['status']+' '+ data['states_daily'][j]['date']+' '+data['states_daily'][j]['tt']);
                confdList.push(data['states_daily'][j_confd]['tt']);
                recdList.push(data['states_daily'][j_recovered]['tt']);
                deathList.push(data['states_daily'][j_death]['tt']);
                dateList.push(data['states_daily'][j_confd]['date']);
                count+=1;
                j_confd-=3;
                j_recovered-=3;
                j_death-=3;
            }
            confdList.reverse();
            recdList.reverse();
            deathList.reverse();
            dateList.reverse();
            console.log(dateList)

            // console.log(dateList);
            for(let i=0;i<dateList.length;i++){
                dateList[i] = (dateList[i].slice(0,dateList[i].length-3));
            }
            for(let i=0;i<confdList.length;i++){
                confdList[i] = parseInt(confdList[i]);
                recdList[i] = parseInt(recdList[i]);
                deathList[i] = parseInt(deathList[i]);
            }
            // console.log(confdList);
            
            
            
            // Draw Graph
            ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
            var myConfig = {
            "type": "bar",
            "backgroundColor": "#ffe0e6",
            "title": {
                "text": "Daily Confirmed Cases",
                "fontFamily": "Proxima"
                },
            
            scaleX: {
                values: dateList,
                item: {
                    fontAngle: -45,
                    fontWeight: 'bold'
                }   
            },
            plot: {
                backgroundColor: "#db4437",
                "bar-width": 1,
                alpha: 0.8,
                tooltip: {
                    "text": "%kv: %v",
                    "fontFamily": "Proxima"
                },
                animation: {
                    delay: 500,
                    effect: 'ANIMATION_EXPAND_BOTTOM',
                    method: 'ANIMATION_LINEAR',
                    sequence: 'ANIMATION_BY_NODE',
                    speed: '200'
                    // delay: '500'
                  },
                  valueBox: {
                    placement: "top",
                    text: '%v',
                    fontAngle: "-90",
                    textAlign: 'center',
                    color: "black",
                    // backgroundColor: "white",
                    border: "none",
                    // fontAngle: -90,
                    fontFamily: "Proxima"
                    // borderRadius: "10px"
                  }
            },
            "series": [{
                values: confdList
            }]
            };

            var myConfig2 = {
                "type": "bar",
                "backgroundColor": "lightgrey",
                "title": {
                    "text": "Daily Deaths",
                    "fontFamily": "Proxima"
                    },
                
                scaleX: {
                    values: dateList,
                    item: {
                        fontAngle: -45,
                        fontWeight: 'bold'
                    }   
                },
                plot: {
                    backgroundColor: "black",
                    "bar-width": 1,
                    alpha: 0.8,
                    tooltip: {
                        "text": "%kv: %v",
                        "fontFamily": "Proxima"
                    },
                    animation: {
                        delay: 500,
                        effect: 'ANIMATION_EXPAND_BOTTOM',
                        method: 'ANIMATION_LINEAR',
                        sequence: 'ANIMATION_BY_NODE',
                        speed: '200'
                        // delay: '500'
                      },
                      valueBox: {
                        placement: "top",
                        text: '%v',
                        fontAngle: "-90",
                        textAlign: 'center',
                        color: "black",
                        // backgroundColor: "white",
                        border: "none",
                        // fontAngle: -90,
                        fontFamily: "Proxima"
                        // borderRadius: "10px"
                      }
                },
                "series": [{
                    values: deathList
                }]
                };

                var myConfig3 = {
                    "type": "bar",
                    "backgroundColor": "#e4f4e8",
                    "title": {
                        "text": "Daily Recoveries",
                        "fontFamily": "Proxima"
                        },
                    
                    scaleX: {
                        values: dateList,
                        item: {
                            fontAngle: -45,
                            fontWeight: 'bold'
                        }   
                    },
                    plot: {
                        backgroundColor: "#0f9d58",
                        "bar-width": 1,
                        alpha: 0.8,
                        tooltip: {
                            "text": "%kv: %v",
                            "fontFamily": "Proxima"
                        },
                        animation: {
                            delay: 500,
                            effect: 'ANIMATION_EXPAND_BOTTOM',
                            method: 'ANIMATION_LINEAR',
                            sequence: 'ANIMATION_BY_NODE',
                            speed: '200'
                            // delay: '500'
                          },
                          valueBox: {
                            placement: "top",
                            text: '%v',
                            fontAngle: "-90",
                            textAlign: 'center',
                            color: "black",
                            // backgroundColor: "white",
                            border: "none",
                            // fontAngle: -90,
                            fontFamily: "Proxima"
                            // borderRadius: "10px"
                          }
                    },
                    "series": [{
                        values: recdList
                    }]
                    };
            zingchart.render({
            id: 'myChart',
            data: myConfig,
            height: "100%",
            width: "100%"
            });
            zingchart.render({
            id: 'myChart2',
            data: myConfig2,
            height: "100%",
            width: "100%"
            });
            zingchart.render({
            id: 'myChart3',
            data: myConfig3,
            height: "100%",
            width: "100%"
            });

            })
            .catch(error => console.log("error"))
}

// MOVE TO TOP BTN
var mybutton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// DARK MODE
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    // SESSION VARIABLES
    if(sessionStorage.getItem('dark')==null){
        var svg = document.getElementById("svgicon");
        svg.style.transform = "rotate(180deg)";
        svg.style.transition = "0.5s ease-out";

        sessionStorage.setItem('dark','1')
        // console.log("dark set to 1")
    }
    else if(sessionStorage.getItem('dark')=='0'){
        var svg = document.getElementById("svgicon");
        svg.style.transform = "rotate(180deg)";
        svg.style.transition = "0.5s ease-out";

        sessionStorage.setItem('dark','1')
        // console.log("dark set to 1")
    }
    else if(sessionStorage.getItem('dark')=='1'){
        var svg = document.getElementById("svgicon");
        svg.style.transform = "rotate(0deg)";
        svg.style.transition = "0.5s ease-out";

        sessionStorage.setItem('dark','0')
        // console.log("dark set to 0")
    }
}
// CHECKING DARK MODE 
window.onload = checkDarkMode();
function checkDarkMode(){
    // console.log("dark value",sessionStorage.getItem('dark'))
    if(sessionStorage.getItem('dark')=='1'){
        darkMode()
        sessionStorage.setItem('dark','1')
    }
}

// PLAY VIDEO ON FOOTER BUTTON CLICK
function playVideo(){
    window.scrollBy(0,10000);
    var video = document.getElementById("demoVideo");
    video.play();   
}