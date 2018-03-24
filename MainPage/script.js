
var map;
var autocomplete; 
var markersCreated = false;
 var index = 0; 
 var markers = new Array(); 

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

      }

function drawMarkers() {
	if(!markersCreated) {
          		markersCreated = true; 
				var dbref = firebase.database().ref('/Businesses/');
				dbref.once('value').then(snap => {
					snap.forEach(function(childSnap) {
						var lat = childSnap.child("Lat").val();
						var long = childSnap.child("Long").val();
						var myLatLng = {lat: lat, lng: long};
						var marker = new google.maps.Marker({
				          position: myLatLng,
				          map: map,
				        });
				        markers[index] = marker;
				        index++;
					});
				});	
			}
			else console.log(markers);
}

$(document).ready(function(){

   // jQuery methods go here...

});



      