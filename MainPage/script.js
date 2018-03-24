
var map;
var autocomplete; 

function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 38.4773778, lng: -100.5635102},
          zoom: 4
        });

        var input = document.getElementById('searchTextField');
		var options = {
		  types: ['(cities)'],
		  componentRestrictions: {country: 'us'}
		};

		autocomplete = new google.maps.places.Autocomplete(input, options);
		autocomplete.addListener('place_changed',function(){
			var place = autocomplete.getPlace();

			if (place.geometry.viewport) {
            		map.fitBounds(place.geometry.viewport);
           }  
          else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
          }		
		});

		var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        
      }

$(document).ready(function(){

   // jQuery methods go here...

});



      