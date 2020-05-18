var confd = document.querySelector(".confirmed");
var death = document.querySelector(".deaths");
var rec = document.querySelector(".recovered");
var active = document.querySelector(".active");
var dated = document.querySelector(".dated");

window.onload(clicked());

// confd.innerHTML = "hello";
function clicked(){
    // alert("hell");
    fetch('https://coronavirus-19-api.herokuapp.com/countries/india')
        .then(response => response.json())
        .then(data => {
                confd.innerHTML = data['cases']+'<br><h5>(+'+data['todayCases']+')</h5>';
                death.innerHTML = data['deaths']+'<br><h5>(+'+data['todayDeaths']+')</h5>';
                rec.innerHTML = data['recovered'];
                active.innerHTML = data['active'];
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
                    confd3.innerHTML = data['statewise'][i]['confirmed'];
                    rec3.innerHTML = data['statewise'][i]['recovered'];
                    active3.innerHTML = data['statewise'][i]['active'];
                    death3.innerHTML = data['statewise'][i]['deaths'];
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
        
        
        