// JavaScript Document duplicate to send to GitHub
//window.onload = "getMyLocation()" 
//global variables
var startLat=0
var startLong=0
var startAcc=0
var startTime=0
var curLat=0
var curLong=0
var curAcc=0
var curtime=0

function getMyLocation() {
	if (navigator.geolocation) 
	{
		navigator.geolocation.getCurrentPosition(startLocation, displayError);	
	} else 
	{
		alert ("Geolocation Not Supported");
	}

function startLocation(startPosition) {
	var startLat = startPosition.coords.latitude;
	var startLong = startPosition.coords.longitude;
	var startAcc = startPosition.coords.accuracy;
	var startTime = startPosition.timestamp;

	var div = document.getElementById("location");
	div.innerHTML = "Starting Latitude: " + startLat + ", Longitude: " + startLong;
	div.innerHTML += " (with " + startAcc + " meters accuracy)";
}

function currentLocation()
//	watchId = navigator.geolocation.watchPosition(currentPosition) {
	navigator.geolocation.getCurrentPosition(currentPosition, displayError);
	var curLat = currentPosition.coords.lattitude;
	var curLong = currentPosition.coords.longitude;
	var curAcc = currentPosition.coords.accuracy;
	var curTime = currentPosition.timestamp;
	
	var cur = document.getElementById("current");
	cur.innerHTML = "Current Latitude: " + curLat + ", Longitude: " + curLong:
	cur.innerHTML += " (with " + curAcc + " meters accuracy)";
	calculateDistance(startLat, startLong, curLat, curLong);
}

      // Reused code - copyright Moveable Type Scripts - retrieved December 1, 2013.
      // http://www.movable-type.co.uk/scripts/latlong.html
	  // Haversine equation
      // Under Creative Commons License http://creativecommons.org/licenses/by/3.0/
function calculateDistance(lat1, lon1, lat2, lon2) {
        var R = 6371; // km
        var dLat = (lat2-lat1).toRad();
        var dLon = (lon2-lon1).toRad();
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
                Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c;


function displayError(error) {
	var errorTypes = {
		0: "Unknown error",
		1: "Permission denied",
		2: "Position is not available",
		3: "Request timeout"
	};
	var errorMessage = errorTypes[error.code];
	if (error.code == 0 || error.code == 2) {
		errorMessage = errorMessage + " " + error.message;
	}
	var div = document.getElementById("location");
	div.innerHTML = errorMessage;


