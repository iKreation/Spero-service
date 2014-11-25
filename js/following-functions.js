/* Main app */
var app = {
	map: null,
	follow: true
}

app.events = function() {
	var self = this;

	$("#logotipo").click(function() {
		window.location.href = "index.html";
	});

	//-------------------------FOLLWOING/FOLLOWERS REDIRECTIONS
	$("#statsFollowing").click(function() {
		window.location.href = "following.html";
	});
	$("#statsFollowers").click(function() {
		window.location.href = "followers.html";
	});
	//-------------------------MY REPORTS REDIRECTION
	$("#statsRep").click(function() {
		window.location.href = "my_reports.html";
	});

	$(".follow-button").click(function() {
		if(self.follow == true){
			$(".follow-button").text(" FOLLOW ");
			self.follow = false;
		}
		else{
			$(".follow-button").text(" UNFOLLOW ");
			self.follow = true;
		}	
	});
}

app.init = function() {
	var self = this;
	app.events();
	$("#following_container").fadeIn(300);
	$("#map").css({'cursor': 'default'});
	$('#following').jScrollPane();
}

app.initMaps = function() {
	var self = this;
	var loaded = false;

	var mapOptions = {
		// How zoomed in you want the map to start at (always required)
		streetViewControl: false,
		mapTypeControl: false,
		draggable: false,
		zoomControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: true,
		scrolling: false,
		disableDefaultUI: true,

		zoom: 13,
		// The latitude and longitude to center the map (always required)
		center: new google.maps.LatLng(40.9900, -73.9900), // New York

		styles: [{"elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#f5f5f2"},{"visibility":"on"}]},{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.place_of_worship","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#ffffff"},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"visibility":"simplified"},{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","stylers":[{"color":"#000000"}]},{"featureType":"poi.park","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#05E9FF"}]},{"featureType":"landscape","stylers":[{"color":"#e5e8e7"}]},{"featureType":"poi.park","stylers":[{"color":"#8ba129"}]},{"featureType":"road","stylers":[{"color":"#FAFAFA"}]},{"featureType":"poi.sports_complex","elementType":"geometry","stylers":[{"color":"#c7c7c7"},{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#05E9FF"}]},{"featureType":"poi.park","stylers":[{"color":"#1abc9c"}]},{"featureType":"poi.park","stylers":[{"gamma":1.51}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"landscape","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","stylers":[{"visibility":"simplified"}]},{"featureType":"road"},{"featureType":"road"},{},{"featureType":"road.highway"},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"color":"#8C8C8C"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]}]
    
    };

	var mapElement = document.getElementById('map');
	// Create the Google Map using out element and options defined above
	app.map = new google.maps.Map(mapElement, mapOptions);

	google.maps.event.addListener(this.map, 'tilesloaded', function(evt) {
		if(!loaded){
			self.init();
			loaded=true;
		}
	});		
}

$(document).ready(function() {
	app.initMaps();
})