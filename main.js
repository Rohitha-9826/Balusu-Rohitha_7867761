console.log("Community Portal Loaded");
window.onload = function () {

    alert("Welcome to the Community Event Portal");

};
const portalName =
"Local Community Event Portal";

let availableSeats = 100;

console.log(portalName);

console.log(availableSeats);
console.log(
`Available Seats: ${availableSeats}`
);
availableSeats--;

console.log(
`Remaining Seats: ${availableSeats}`
);
let seats = 50;

if(seats > 0){

    console.log(
        "Registration Open"
    );

}
else{

    console.log(
        "Registration Closed"
    );

}
const events = [

    "Music Festival",

    "Food Fair",

    "Workshop"

];
events.forEach(function(event){

    console.log(event);

});
function registerUser(name){

    console.log(
        `${name} registered successfully`
    );

}
registerUser("Rohitha");
const eventDetails = {

    name:"Music Festival",

    date:"20 July 2026",

    seats:100

};
console.log(
eventDetails.name
);

console.log(
eventDetails.date
);
function registerEvent(){

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let date =
    document.getElementById("eventDate").value;

    let eventType =
    document.getElementById("preferredEvent").value;

    if(
        name === "" ||
        email === "" ||
        date === "" ||
        eventType === ""
    ){

        document.getElementById(
            "registrationMessage"
        ).innerHTML =
        "Please fill all fields.";

        return;
    }
    document.getElementById(
    "registrationMessage"
).innerHTML =

`Registration Successful! Welcome ${name}.`;





    

}
function validatePhone(){

    let phone =
    document.getElementById("phone").value;

    if(phone.length === 10){

        document.getElementById(
            "phoneMessage"
        ).innerHTML =
        "Valid Phone Number";

    }
    else{

        document.getElementById(
            "phoneMessage"
        ).innerHTML =
        "Enter 10 digits";

    }
}
function showFee(){

    let fee =

    document.getElementById(
        "eventSelect"
    ).value;

    document.getElementById(
        "feeDisplay"
    ).innerHTML =

    "Fee: ₹" + fee;
}
function countCharacters(){

    let text =

    document.getElementById(
        "feedbackText"
    ).value;

    let count = text.length;

    document.getElementById(
        "charCount"
    ).textContent = count;

    if(count > 180){

        document.getElementById(
            "charCount"
        ).style.color = "red";

    }
    else{

        document.getElementById(
            "charCount"
        ).style.color = "red";

    }

}

function showConfirmation(){

    alert("Feedback Submitted Successfully");

    document.getElementById("phone").value = "";

    document.getElementById("eventSelect").selectedIndex = 0;

    document.getElementById("feedbackText").value = "";

    document.getElementById("phoneMessage").innerHTML = "";

    document.getElementById("feeDisplay").innerHTML = "";

    document.getElementById("charCount").textContent = 0;

}

function enlargeImage(image){

    image.style.width = "350px";

    image.style.height = "250px";

}

function videoReady(){

    document.getElementById("videoMessage")
            .innerHTML =
            "Video Ready To Play";

}

function clearPreferences(){

    document.getElementById("registrationForm")
            .reset();

}

function findLocation(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(

            showPosition,

            showError

        );

    }

    else{

        document.getElementById(
            "locationResult"
        ).innerHTML =

        "Geolocation is not supported.";

    }

}
function showPosition(position){

    document.getElementById(
        "locationResult"
    ).innerHTML =

    "Latitude: " +
    position.coords.latitude +

    "<br>Longitude: " +

    position.coords.longitude;

}
function showError(error){

    switch(error.code){

        case error.PERMISSION_DENIED:

            document.getElementById(
                "locationResult"
            ).innerHTML =

            "Location permission denied.";

            break;

        case error.POSITION_UNAVAILABLE:

            document.getElementById(
                "locationResult"
            ).innerHTML =

            "Location unavailable.";

            break;

        case error.TIMEOUT:

            document.getElementById(
                "locationResult"
            ).innerHTML =

            "Location request timed out.";

            break;

        default:

            document.getElementById(
                "locationResult"
            ).innerHTML =

            "Unknown error.";

    }

}

function savePreference(){

    let selectedEvent =

    document.getElementById(
        "preferredEvent"
    ).value;

    localStorage.setItem(
        "preferredEvent",
        selectedEvent
    );

}
window.addEventListener(
    "load",
    function(){

        let savedEvent =

        localStorage.getItem(
            "preferredEvent"
        );

        if(savedEvent){

            document.getElementById(
                "preferredEvent"
            ).value = savedEvent;

        }

    }
);

let visitCount = sessionStorage.getItem("visitCount");

if(visitCount === null){

    visitCount = 1;

}
else{

    visitCount = Number(visitCount) + 1;

}

sessionStorage.setItem(
    "visitCount",
    visitCount
);

console.log(
    `Session Visits: ${visitCount}`
);
const eventData = [

    {
        name:"Music Festival",
        date:"20 July 2026"
    },

    {
        name:"Food Fair",
        date:"25 July 2026"
    }

];

function loadEvents(){

    console.log(eventData);

}
loadEvents();
function getEvents(){

    return new Promise(function(resolve){

        setTimeout(function(){

            resolve(eventData);

        },2000);

    });

}
async function displayEvents(){

    let events = await getEvents();

    console.log(events);

}

displayEvents();