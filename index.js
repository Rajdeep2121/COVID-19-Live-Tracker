var confd = document.querySelector(".confirmed");
var death = document.querySelector(".deaths");
var rec = document.querySelector(".recovered");
var active = document.querySelector(".active");
var dated = document.querySelector(".dated");

window.onload(clicked());

// confd.innerHTML = "hello";
function clicked(){
    // alert("hell");
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
        
        
function bigConfirmed(){
    var confirmed = document.querySelector(".confirmed");
    confirmed.style.fontSize = "50px";
    var contain1 = document.querySelector(".contain1");
    contain1.style.height = "150px";
}
function bigActive(){
    var active = document.querySelector(".active");
    active.style.fontSize = "50px";
    var contain2 = document.querySelector(".contain2");
    contain2.style.height = "150px";
}
function bigRecovered(){
    var recovered = document.querySelector(".recovered");
    recovered.style.fontSize = "50px";
    var contain3 = document.querySelector(".contain3");
    contain3.style.height = "150px";
}
function bigDeath(){
    var death = document.querySelector(".deaths");
    death.style.fontSize = "50px";
    var contain4 = document.querySelector(".contain4");
    contain4.style.height = "150px";
}