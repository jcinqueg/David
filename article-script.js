/*
Script used for articles within the David Website
*/

function toColor( category ) {
    switch(category) {
        case "Domestic": return "red";
        case "Foreign": return "blue";
        case "Scandal": return "pink";
        case "Health": return "green"
        default: return "gray";
    }
}

function updateColor() {
    var p = document.getElementById("category");
    p.parentNode.style.background = toColor( p.innerHTML );
    document.getElementById("update").style.color = toColor( p.innerHTML );
    console.log( "Read: '" + p.innerHTML + "' and changed color to '" + toColor(p.innerHTML) + "'");
}

function millisecondsToString( milliseconds ) {
    var seconds = Math.floor( milliseconds / 1000 );
    if (seconds < 60) return "seconds ago";
    var minutes = Math.floor( seconds / 60 );
    if (minutes < 60) return minutes + (minutes>1?" minutes":" minute") + " ago";
    var hours = Math.floor( minutes / 60 );
    if (hours < 24) return hours + (hours>1?" hours":" hour") + " ago";
    var days = Math.floor( hours / 24 );
    if (days < 7) return days + (days>1?" days":" day") + " ago"
    var weeks = Math.floor( days / 7 );
    if (weeks < 52) return weeks + (weeks>1?" weeks":" week") + " ago";
    var years = Math.floor( days / 365.25);
    return years + (years>1?" year":" years") + " ago";
}

function updateDate() {
    var p = document.getElementById("update");
    var dateCreated = new Date( Date.parse(p.innerHTML) );
    console.log( "article created on " + dateCreated );
    var currentDate = new Date();
    var stringDif = millisecondsToString( currentDate - dateCreated );
    p.innerHTML = "Article was created " + stringDif;
}

window.onload = function () {
    updateColor();
    updateDate();
}