/* Main app */
var app = {
	map: null,
	reverse_controls: false,
	reverse_controls2: true,
	choose: 0,
	fechar:0,
	logoFase:0,
	affected:false,
	follow2:false,
	follow:true,
	f_notifi:false,
	f_state:0,
	r_notifi:false,
	run_init:true
}

app.events = function() {
	var self = this;
	//-------------------------DSS PAGE
	$("#dssBtn").click(function() {
		window.location.href = "dss.html";
	});


	//--------------------------------------------------------------MAP OPTIONS
	function showControls(){
		app.map.setOptions({
			draggable: true,
			zoomControl: true,
			scrollwheel: true,
			disableDoubleClickZoom: false,
			scrolling: true,
			panControl: true,
			styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#a2daf2"}]},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"color":"#f7f1df"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#d0e3b4"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#bde6ab"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","elementType":"geometry","stylers":[{"color":"#fbd3da"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffe15f"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#efd151"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"black"}]},{"featureType":"transit.station.airport","elementType":"geometry.fill","stylers":[{"color":"#cfb2db"}]}]
		});
	};
	function hideControls(){
		app.map.setOptions({
			draggable: false,
			zoomControl: false,
			scrollwheel: false,
			disableDoubleClickZoom: true,
			scrolling: false,
			panControl: false,
			styles: [{"elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#f5f5f2"},{"visibility":"on"}]},{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.place_of_worship","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#ffffff"},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"visibility":"simplified"},{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","stylers":[{"color":"#000000"}]},{"featureType":"poi.park","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#05E9FF"}]},{"featureType":"landscape","stylers":[{"color":"#e5e8e7"}]},{"featureType":"poi.park","stylers":[{"color":"#8ba129"}]},{"featureType":"road","stylers":[{"color":"#FAFAFA"}]},{"featureType":"poi.sports_complex","elementType":"geometry","stylers":[{"color":"#c7c7c7"},{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#05E9FF"}]},{"featureType":"poi.park","stylers":[{"color":"#1abc9c"}]},{"featureType":"poi.park","stylers":[{"gamma":1.51}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"landscape","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","stylers":[{"visibility":"simplified"}]},{"featureType":"road"},{"featureType":"road"},{},{"featureType":"road.highway"},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"color":"#8C8C8C"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]}]
		});
	};

	//--------------------------------------------------------------SOCIAL BUTTON
	//-------------------------FOLLOWING BUTTON CHANGE
	$("#followRep").click(function() {
		if(self.follow == true){
			$("#descFollow").text("Follow");
			self.follow = false;
		}
		else{
			$("#descFollow").text("Unfollow");
			self.follow = true;
		}
	});
	//-------------------------FOLLWOING/FOLLOWERS REDIRECTIONS
	$("#statsFollowing").click(function() {
		window.location.href = "following.html";
	});
	$("#statsFollowers").click(function() {
		window.location.href = "followers.html";
	});
	//-------------------------MY REPORTS REDIRECTION
	$("#myRep").click(function() {
		window.location.href = "my_reports.html";
	});
	$("#statsRep").click(function() {
		window.location.href = "my_reports.html";
	});

	//-------------------------REPORT X REDIRECTION
	$(".titulo_report").click(function() {
		window.location.href = "other_report.html";
	});
	$(".foto_report").click(function() {
		window.location.href = "other_report.html";
	});

	//--------------------------------------------------------------MY REPORTS PAGE
	//-------------------------FECHAR
	$("#fecharMy").click(function() {
		window.location.href = "index.html";
	});
	$(".my-reports-list").click(function() {
		window.location.href = "own_report.html";
	});

	//--------------------------------------------------------------FIND REPORTS PAGE
	//-------------------------HIDE/SHOW FASE1
	$("#vizibi").click(function() {
		$("#container").fadeOut(300);
		$("#vizi_container").fadeIn(500);
		$('.filter-height').jScrollPane();
		$("#vizibi2").fadeIn(300);
		showControls();
		$('#map').removeClass('unvisible');
		$('#map').addClass('clickable');
	});
	$("#vizibi2").click(function() {
		$("#vizi_container").fadeOut(300);
		$("#container").fadeIn(500);
		$("#vizibi").fadeIn(300);
		hideControls();
		$('#map').addClass('unvisible');
		$('#map').removeClass('clickable');
	});
	$("#vizibi3").click(function() {
		$("#container").fadeOut(300);
		$("#vizi_container_other").fadeIn(500);
		$("#vizibi4").fadeIn(300);
		showControls();
		$('#map').removeClass('unvisible');
		$('#map').addClass('clickable');
	});
	$("#vizibi4").click(function() {
		$("#vizi_container_other").fadeOut(300);
		$("#container").fadeIn(500);
		$("#vizibi3").fadeIn(300);
		hideControls();
		$('#map').addClass('unvisible');
		$('#map').removeClass('clickable');
	});
	//--------------------------FIND REPORTS
	$("#findRep").click(function() {
		$("#container").fadeOut(300);
		$("#find_container").fadeIn(500);
		$('.filter-height').jScrollPane();
		showControls();
		$('#map').removeClass('unvisible');
		$('#map').addClass('clickable');
	});
	//--------------------------FECHAR FIND REPORTS
	$("#fecharFind").click(function() {
		$("#container").fadeIn(500);
		$("#find_container").fadeOut(300);
		hideControls();
		$('#map').addClass('unvisible');
		$('#map').removeClass('clickable');
	});
	//--------------------------SOLVED/UNSOLVED REPORTS
	$("#resolvidos").click(function() {
		$("#resolvidos").fadeOut(300);
		$("#n_resolvidos").fadeIn(500);
	});

	//--------------------------------------------------------------PHOTO PAGE
	$("#foto").click(function() {
		$("#container").fadeOut(300);
		$("#photo_container").fadeIn(500);
	});
	$("#fecharChange").click(function() {
		$("#container").fadeIn(500);
		$("#photo_container").fadeOut(300);
	});

	//--------------------------------------------------------------CREATE REPORT PAGE
	//--------------------------ADD REPORT
	$("#adReport").click(function() {
		window.location.href = "create_report.html";
	});
	//--------------------------HIDE/SHOW CHOOSE LOCATION PAGE
	$("#place").click(function() {
		window.location.href = "create_report.html";
	});
	$("#placeFind").click(function() {
		window.location.href = "create_report.html";
	});
	$("#choose_container").click(function() {
		$("#choose_container").fadeOut(300);
		$("#create_report_container").fadeIn(500);
		$('#subject').jScrollPane();
	});
	//--------------------------CLOSE BUTTONS
	$("#fechar").click(function() {
		window.location.href = "index.html";
	});
	$("#fechar2").click(function() {
		window.location.href = "index.html";
	});
	$("#submit").click(function() {
		window.location.href = "index.html";
	});
	$("#place-create").click(function() {
		$("#choose_container").fadeIn(500);
		$("#create_report_container").fadeOut(300);
	});

	//--------------------------------------------------------------OTHER REPORT PAGE
	//--------------------------CLOSE BUTTONS
	$("#fecharOther").click(function() {
		window.location.href = "index.html";
	});
	//--------------------------AFFECTED BUTTON
	$("#aff-btn").click(function() {
		if(!self.affected){
			$("#descAff").text("Not affected");
			self.affected = true;
		}
		else{
			$("#descAff").text("I'm affected");
			self.affected = false;
		}
	});
	//--------------------------FOLLOW BUTTON
	$("#follow-btn").click(function() {
		if(!self.follow2){
			$("#descFlw").text("Unfollow joão");
			self.follow2 = true;
		}
		else{
			$("#descFlw").text("Follow joão");
			self.follow2 = false;
		}
	});
	//-------------------------HIDE/SHOW FASE1
	$("#vizibiOther").click(function() {
		$("#container-other-report").fadeOut(300);
		$("#vizi_container_other").fadeIn(500);
		$('.filter-height').jScrollPane();
		$("#vizibi2Other").fadeIn(300);
		showControls();
		$('#map').removeClass('unvisible');
		$('#map').addClass('clickable');
	});
	//-------------------------HIDE/SHOW FASE2
	$("#vizibi2Other").click(function() {
		$("#container-other-report").fadeIn(500);
		$("#vizi_container_other").fadeOut(300);
		$("#vizibi2Other").fadeOut(300);
		hideControls();
		$('#map').addClass('unvisible');
		$('#map').removeClass('clickable');
	});
	//--------------------------IMAGES
	$(".foto_report2").click(function() {
		$("#container-other-report").fadeOut(300);
		$("#container-other-image").fadeIn(500);
	});
	//--------------------------FECHAR IMAGES
	$("#fecharOtherImg").click(function() {
		$("#container-other-report").fadeIn(500);
		$("#container-other-image").fadeOut(300);
	});

	//--------------------------------------------------------------OWN REPORT PAGE
	//--------------------------CLOSE BUTTONS
	$("#fecharOwn").click(function() {
		window.location.href = "index.html";
	});
	//-------------------------HIDE/SHOW FASE1
	$("#vizibiOwn").click(function() {
		$("#container-own-report").fadeOut(300);
		$("#vizi_container_own").fadeIn(500);
		$('.filter-height').jScrollPane();
		$("#vizibi2Own").fadeIn(300);
		showControls();
		$('#map').removeClass('unvisible');
		$('#map').addClass('clickable');
	});
	//-------------------------HIDE/SHOW FASE2
	$("#vizibi2Own").click(function() {
		$("#container-own-report").fadeIn(500);
		$("#vizi_container_own").fadeOut(300);
		$("#vizibi2Own").fadeOut(300);
		hideControls();
		$('#map').addClass('unvisible');
		$('#map').removeClass('clickable');
	});
	//--------------------------IMAGES
	$(".foto_report2").click(function() {
		$("#container-own-report").fadeOut(300);
		$("#container-own-image").fadeIn(500);
	});
	//--------------------------FECHAR IMAGES
	$("#fecharOwnImg").click(function() {
		$("#container-own-report").fadeIn(500);
		$("#container-own-image").fadeOut(300);
	});

	//--------------------------------------------------------------SETTINGS
	$("#settings-name").click(function() {
		setTimeout(function() {
			$("#inside-viewer-1").fadeIn(300);
		}, 200);
		$("#inside-viewer-2").fadeOut(100);
		$("#inside-viewer-3").fadeOut(100);
		$("#inside-viewer-4").fadeOut(100);
		$("#inside-viewer-5").fadeOut(100);
		$("#inside-viewer-6").fadeOut(100);
		$('#settings-name').css({
			"background": "rgba(0,0,0,0.8)"
		});
		$('#settings-nick').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-mail').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-pass').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-lang').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-filters').css({
			"background": "rgba(120,120,120,0.8)"
		});
	});
	$("#settings-nick").click(function() {
		$("#inside-viewer-1").fadeOut(100);
		setTimeout(function() {
			$("#inside-viewer-2").fadeIn(300);
		}, 200);
		$("#inside-viewer-3").fadeOut(100);
		$("#inside-viewer-4").fadeOut(100);
		$("#inside-viewer-5").fadeOut(100);
		$("#inside-viewer-6").fadeOut(100);
		$('#settings-nick').css({
			"background": "rgba(0,0,0,0.8)"
		});
		$('#settings-name').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-mail').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-pass').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-lang').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-filters').css({
			"background": "rgba(120,120,120,0.8)"
		});
	});
	$("#settings-mail").click(function() {
		$("#inside-viewer-1").fadeOut(100);
		$("#inside-viewer-2").fadeOut(100);
		setTimeout(function() {
			$("#inside-viewer-3").fadeIn(300);
		}, 200);
		$("#inside-viewer-4").fadeOut(100);
		$("#inside-viewer-5").fadeOut(100);
		$("#inside-viewer-6").fadeOut(100);
		$('#settings-mail').css({
			"background": "rgba(0,0,0,0.8)"
		});
		$('#settings-name').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-nick').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-pass').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-lang').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-filters').css({
			"background": "rgba(120,120,120,0.8)"
		});
	});
	$("#settings-pass").click(function() {
		$("#inside-viewer-1").fadeOut(100);
		$("#inside-viewer-2").fadeOut(100);
		$("#inside-viewer-3").fadeOut(100);
		setTimeout(function() {
			$("#inside-viewer-4").fadeIn(300);
		}, 200);
		$("#inside-viewer-5").fadeOut(100);
		$("#inside-viewer-6").fadeOut(100);
		$('#settings-pass').css({
			"background": "rgba(0,0,0,0.8)"
		});
		$('#settings-name').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-mail').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-nick').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-lang').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-filters').css({
			"background": "rgba(120,120,120,0.8)"
		});
	});
	$("#settings-lang").click(function() {
		$("#inside-viewer-1").fadeOut(100);
		$("#inside-viewer-2").fadeOut(100);
		$("#inside-viewer-3").fadeOut(100);
		$("#inside-viewer-4").fadeOut(100);
		setTimeout(function() {
			$("#inside-viewer-5").fadeIn(300);
		}, 200);
		$("#inside-viewer-6").fadeOut(100);
		$('#settings-lang').css({
			"background": "rgba(0,0,0,0.8)"
		});
		$('#settings-name').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-mail').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-pass').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-nick').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-filters').css({
			"background": "rgba(120,120,120,0.8)"
		});
	});
	$("#settings-filters").click(function() {
		$("#inside-viewer-1").fadeOut(100);
		$("#inside-viewer-2").fadeOut(100);
		$("#inside-viewer-3").fadeOut(100);
		$("#inside-viewer-4").fadeOut(100);
		$("#inside-viewer-5").fadeOut(100);
		setTimeout(function() {
			$("#inside-viewer-6").fadeIn(300);
			$('#list-filter2').jScrollPane();
		}, 200);


		$('#settings-filters').css({
			"background": "rgba(0,0,0,0.8)"
		});
		$('#settings-name').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-mail').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-pass').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-nick').css({
			"background": "rgba(120,120,120,0.8)"
		});
		$('#settings-lang').css({
			"background": "rgba(120,120,120,0.8)"
		});
	});
	//-------------------------FECHAR
	$("#fecharsett").click(function() {
		window.location.href = "index.html";
	});

	//--------------------------------------------------------------MENU
	$("#logotipo").click(function() {
		window.location.href = "index.html";
	});
	$("#defini").click(function() {
		window.location.href = "settings.html";
	});
	//---------------------NOTIFICAÇÕES FOLLOWERS
	$("#amizades").click(function() {
		$("#followers-notifications").css({
			"z-index": "10"
		});
		$("#followers-notifications").fadeToggle(150);
		$('#f-notifications-list').jScrollPane();
	});
	//---------------------NOTIFICAÇÕES REPORTS
	$("#notifi").click(function() {
		$("#reports-notifications").css({
			"z-index": "10"
		});
		$("#reports-notifications").fadeToggle(150);
		$('#r-notifications-list').jScrollPane();
	});
	$('body').click(function(e) {
		if( e.target.id != 'f-notifications-list' && e.target.id != 'amizades' && e.target.id != 'imgAmi' && e.target.id != 'count-friends'){
			$("#followers-notifications").fadeOut(150);
		}
		if( e.target.id != 'r-notifications-list' && e.target.id != 'notifi' && e.target.id != 'imgNot' && e.target.id != 'count-reports'){
			$("#reports-notifications").fadeOut(150);
		}
	});
	//---------------------PAGES TITLES LIST
	$("#pagina").click(function() {
		$("#pages-titles").css({
			"z-index": "10"
		});
		$("#pages-titles").fadeToggle(150);
	});
	$('body').click(function(e) {
		if( e.target.id != 'page-title-list' && e.target.id != 'pagina' && e.target.id != 'page-title'){
			$("#pages-titles").fadeOut(150);
		}
	});
	$("#add-report").click(function() {
		window.location.href = "create_report.html";
	});
	$("#my-reports").click(function() {
		window.location.href = "my_reports.html";
	});
	$("#find-reports").click(function() {
		$("#container").fadeOut(300);
		$("#find_container").fadeIn(500);
	});
	$("#dss").click(function() {
		window.location.href = "dss.html";
	});
	$("#following-title").click(function() {
		window.location.href = "following.html";
	});
	$("#followers-title").click(function() {
		window.location.href = "followers.html";
	});
}

app.init = function() {
	var self = this;
	if(self.run_init){
		app.events();
		setTimeout(function() {
			$("#loading").fadeOut(100);
			$("#container").fadeIn(300);
			$('.filter-height').jScrollPane();
			$('.reports').jScrollPane();
			$("#login-form").fadeIn(300);
			$("#registration-form").fadeIn(300);

			$('.tooltipsed').tooltipster({
				animation: 'fade',
				delay: 10,
				theme: 'tooltipster-default',
				touchDevices: false,
				trigger: 'hover'
			});
		}, 2000);

		$("#choose_container").fadeIn(300);
		$("#choose_container").css({'cursor': 'url(img/cursor.png) 15 15, pointer'});

		$("#container-settings").fadeIn(300);
		$('#settings-name').css({
			"background": "rgba(0,0,0,0.8)"
		});
		$("#inside-viewer-1").fadeIn(300);

		$("#container-dss").fadeIn(300);
		$('#my-reports-list-dss').jScrollPane();
		$('#filtro-dss').jScrollPane();
		$('#filtroFind-dss').jScrollPane();

		$("#my_rep_container").fadeIn(300);
		$('.filter-height').jScrollPane();
		$('#my-reports-list').jScrollPane();

		$("#container-other-report").fadeIn(300);
		$("#container-own-report").fadeIn(300);
		$('.comments').jScrollPane();
		$('.single-report').jScrollPane();


		self.run_init = false;
	};
}

app.initMaps = function() {
	var self = this;

	var mapOptions = {
		// How zoomed in you want the map to start at (always required)
		zoom: 13,
		streetViewControl: false,
		mapTypeControl: false,
		draggable: false,
		zoomControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: true,
		scrolling: false,
		disableDefaultUI: false,
		panControl: false,

		// The latitude and longitude to center the map (always required)
		center: new google.maps.LatLng(40.9900, -73.9900), // New York

		styles: [{"elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#f5f5f2"},{"visibility":"on"}]},{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","stylers":[{"visibility":"on"}]},{"featureType":"poi.place_of_worship","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#ffffff"},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"visibility":"simplified"},{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","stylers":[{"color":"#000000"}]},{"featureType":"poi.park","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#05E9FF"}]},{"featureType":"landscape","stylers":[{"color":"#e5e8e7"}]},{"featureType":"poi.park","stylers":[{"color":"#8ba129"}]},{"featureType":"road","stylers":[{"color":"#FAFAFA"}]},{"featureType":"poi.sports_complex","elementType":"geometry","stylers":[{"color":"#c7c7c7"},{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#05E9FF"}]},{"featureType":"poi.park","stylers":[{"color":"#1abc9c"}]},{"featureType":"poi.park","stylers":[{"gamma":1.51}]},{"featureType":"road.local","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"landscape","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","stylers":[{"visibility":"simplified"}]},{"featureType":"road"},{"featureType":"road"},{},{"featureType":"road.highway"},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"color":"#8C8C8C"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]}]

  };

	var mapElement = document.getElementById('map');
	// Create the Google Map using out element and options defined above
	app.map = new google.maps.Map(mapElement, mapOptions);

	google.maps.event.addListener(this.map, 'tilesloaded', function(evt) {
		self.init();
	});
}

$(document).ready(function() {
	app.initMaps();

	var ar=new Array(32,33,34,35,36,37,38,39,40);
	$(document).keydown(function(e) {
		var key = e.which;
		if($.inArray(key,ar) > -1) {
			e.preventDefault();
			return false;
		}
		return true;
	});
})
