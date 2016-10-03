!function(e){var o=new ScrollMagic.Controller,t=["#slide01","#slide02","#slide03"],r=["#slide01 header","#slide02 header","#slide03 header"],n=["#cb01","#cb02","#cb03"];if(!Modernizr.touch){r.forEach(function(e,t){{var r=t+1;new ScrollMagic.Scene({triggerElement:e,offset:-95}).setClassToggle("#slide0"+r,"is-active").addTo(o)}}),n.forEach(function(t,r){{var n=e(t).attr("id");new ScrollMagic.Scene({triggerElement:t,triggerHook:.75}).setClassToggle("#"+n,"is-active").on("enter",function(o){e("nav").attr("class","is-light")}).addTo(o)}}),t.forEach(function(t,r){new ScrollMagic.Scene({triggerElement:t}).on("enter",function(o){e("nav").removeAttr("class")}).addTo(o)}),t.forEach(function(t,r){{var n=e(t).find(".bcg");new ScrollMagic.Scene({triggerElement:t,triggerHook:1,duration:"100%"}).setTween(TweenMax.from(n,1,{y:"-40%",autoAlpha:.3,ease:Power0.easeNone})).addTo(o)}});var a=new TimelineMax;a.to(e("#intro header, .scroll-hint"),.2,{autoAlpha:0,ease:Power1.easeNone}).to(e("#intro .bcg"),1.4,{y:"20%",ease:Power1.easeOut},"-=0.2").to(e("#intro"),.7,{autoAlpha:.5,ease:Power1.easeNone},"-=1.4");{new ScrollMagic.Scene({triggerElement:"#intro",triggerHook:0,duration:"100%"}).setTween(a).addTo(o)}o.scrollTo(function(e){TweenMax.to(window,1,{scrollTo:{y:e},ease:Power1.easeInOut})}),e(document).on("click","a[href^='#']",function(t){var r=e(this).attr("href");e(r).length>0&&(t.preventDefault(),o.scrollTo(r),window.history&&window.history.pushState&&history.pushState("",document.title,r))})}}(jQuery);

$(window).scroll(function() {
if ($(this).scrollTop() > 1){
    $('.navigation').addClass("sticky");
  }
  else{
    $('.navigation').removeClass("sticky");
  }
});

$( document ).ready( function() {


	//Google Maps JS
	//Set Map
	function initialize() {
			var myLatlng = new google.maps.LatLng(32.947919, -97.116972);
			var imagePath = 'http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png'
			var mapOptions = {
				zoom: 11,
				center: myLatlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}

		var map = new google.maps.Map(document.getElementById('map'), mapOptions);
		//Callout Content
		var contentString = '500 N Kimball Ave #109, Southlake, TX 76092';
		//Set window width + content
		var infowindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 300
		});

		//Add Marker
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: imagePath,
			title: ''
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});

		//Resize Function
		google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center);
		});
	}

	google.maps.event.addDomListener(window, 'load', initialize);

});
