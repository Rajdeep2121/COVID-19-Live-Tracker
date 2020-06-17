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
            console.log(data['statewise'][0]);
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
window.onload = drawGraph();
function drawGraph(){
    fetch('https://api.covid19india.org/states_daily.json')
        .then(response => response.json())
        .then(data => {
            var confdList = [];
            var dateList = [];
            // console.log(data['states_daily']);
            let j = data['states_daily'].length - 3;
            // let j=0;
            let count = 0
            while(count<5){
                // console.log(data['states_daily'][j]['status']+' '+ data['states_daily'][j]['date']+' '+data['states_daily'][j]['tt']);
                confdList.push(data['states_daily'][j]['tt']);
                dateList.push(data['states_daily'][j]['date']);
                count+=1;
                j-=3;
            }
            confdList.reverse();
            dateList.reverse();

            // console.log(dateList);
            for(let i=0;i<dateList.length;i++){
                dateList[i] = (dateList[i].slice(0,dateList[i].length-3));
            }
            for(let i=0;i<confdList.length;i++){
                confdList[i] = parseInt(confdList[i]);
            }
            // console.log(confdList);
            
            
            
            // Draw Graph
            ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
            var myConfig = {
            "type": "bar",
            "title": {
                "text": "Daily Cases"
                },
            
            scaleX: {
                values: dateList,
                item: {
                    fontAngle: -45,
                    fontWeight: 'bold'
                }   
            },
            plot: {
                backgroundColor: "salmon",
                "bar-width": 1,
                alpha: 0.8,
                animation: {
                    delay: 500,
                    effect: 'ANIMATION_EXPAND_BOTTOM',
                    method: 'ANIMATION_LINEAR',
                    sequence: 'ANIMATION_BY_PLOT',
                    speed: '2000',
                    delay: '500'
                  },
                  valueBox: {
                    placement: "middle",
                    text: '%v',
                    textAlign: 'center',
                    color: "white",
                    // backgroundColor: "white",
                    border: "none",
                    // fontAngle: -90,
                    fontFamily: "Arial"
                    // borderRadius: "10px"
                  }
            },
            "series": [{
                values: confdList
            }]
            };

            zingchart.render({
            id: 'myChart',
            data: myConfig,
            height: "100%",
            width: "100%"
            });
            })
            .catch(error => console.log("error"))
}
// view-source:https://www.worldometers.info/coronavirus/country/india/ 



// view-source:https://www.worldometers.info/coronavirus/country/india/ 








window.onload = fetchNews(); 

function fetchNews(){
    fetch('https://api.smartable.ai/coronavirus/news/IN',{
                method: "GET",
                headers: {
                    "Subscription-Key": "25e4117ba8ec497f942c31aa0acbeaaa",
                    "Cache-Control": "no-cache"
                }
            })
            .then(response=>response.json())
            .then(data=>{
                console.log(data['news'][0])
                console.log(data['news'][5])
                let x = 0;
                for (let j=0;j<10;j++){
                    let ele = document.querySelector(".news"+String(j));
                    if(data['news'][x]['images'] != null){
                        ele.innerHTML = "<center><img src='"+data['news'][x]['images'][0]['url']+"' width='auto' height='100'></center><br><h3>" + data['news'][x]['title']+"</h3><h5>" +"<br>"+ data['news'][x]['excerpt'] +"<br>"+ "</h5><br><a href='"+data['news'][x]['webUrl']+"' style='color: blue'>"+data['news'][x]['webUrl']+"</a>";
                        
                        x+=1;
                    }
                    else{
                        x+=1;
                        j-=1;
                    }
                }
            })
            .catch(error=>console.log("error"))
}