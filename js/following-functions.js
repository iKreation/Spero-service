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

	$("#fecharFollow").click(function() {
		window.location.href = "index.html";
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
	setTimeout(function() {
		$("#loading").fadeOut(100);
		$("#following_container").fadeIn(300);
		$("#map").css({'cursor': 'default'});
		$('#following').jScrollPane();
	}, 2000);
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

		styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#EEEEEE"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#DADFE1"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#DADFE1"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#DADFE1"}]},{"featureType":"poi.business","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#FFFFFF"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#FFFFFF"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#FFFFFF"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#DADFE1"}]},{"elementType":"labels.text","stylers":[{"visibility":"off"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]}]
		
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
