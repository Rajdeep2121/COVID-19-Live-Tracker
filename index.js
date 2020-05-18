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
                    console.log(data['cases']);
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