

window.onload = state_load();
function state_load(){
    var confd3 = document.querySelector(".confirmed3");
    var death3 = document.querySelector(".deaths3");
    var rec3 = document.querySelector(".recovered3");
    var active3 = document.querySelector(".active3");

    $.ajax({
        url: "https://data.covid19india.org/v4/min/data.min.json",
        success: function(user){
            // console.log(user['UP']['total']['confirmed']);
            confd3.innerHTML = formatNumber(String(user['MH']['total']['confirmed']));
            rec3.innerHTML = formatNumber(String(user['MH']['total']['recovered']));
            active3.innerHTML = formatNumber(String(user['MH']['total']['vaccinated2']));
            death3.innerHTML = formatNumber(String(user['MH']['total']['deceased']));
        }
    });
}

statesShorts = {
    "Maharashtra": "MH",
    "Gujarat": "GJ",
    "Tamil Nadu": "TN",
    "Delhi": "DL",
    "Rajasthan": "RJ",
    "Madhya Pradesh": "MP",
    "Uttar Pradesh": "UP",
    "West Bengal": "WB",
    "Andhra Pradesh": "AP",
    "Punjab": "PB",
    "Bihar": "BR",
    "Jammu and Kashmir": "JK",
    "Karnataka": "KA",
    "Haryana": "HR",
    "Odisha": "OR",
    "Kerala": "KL",
    "Jharkhand": "JH",
    "Tripura": "TR",
    "Assam": "AS",
    "Uttarakhand": "UK",
    "Himachal Pradesh": "UP",
    "Chattisgarh": "CG",
    "Andaman and Nicobar Islands": "AN", 
    "Goa": "GA",
    "Meghalaya": "ML",
    "Manipur": "MN",
    "Mizoram": "MZ",
    "Arunachal Pradesh": "AR",
    "Nagaland": "NL",
    "Sikkim": "SK",
}
function submitted2(){
    window.scrollBy(0,10);
    var confd3 = document.querySelector(".confirmed3");
    var death3 = document.querySelector(".deaths3");
    var rec3 = document.querySelector(".recovered3");
    var active3 = document.querySelector(".active3");
    var inputVal2 = document.querySelector('#inputVal2');
    // console.log(inputVal2.value, statesShorts[inputVal2.value]);
    
    $.ajax({
        url: "https://data.covid19india.org/v4/min/data.min.json",
        success: function(user){
            // console.log(user['UP']['total']);
            confd3.innerHTML = formatNumber(String(user[statesShorts[inputVal2.value]]['total']['confirmed']));
            rec3.innerHTML = formatNumber(String(user[statesShorts[inputVal2.value]]['total']['recovered']));
            active3.innerHTML = formatNumber(String(user[statesShorts[inputVal2.value]]['total']['vaccinated2']));
            death3.innerHTML = formatNumber(String(user[statesShorts[inputVal2.value]]['total']['deceased']));
        }
    });
}

function pressed2(e){
    if(e.keyCode==13)
        submitted2();
}

function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
}

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