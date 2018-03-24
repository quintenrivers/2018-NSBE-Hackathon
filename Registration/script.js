var autocomplete;
var latitude = "";
var longitude = ""; 
addUser("carol23", "C's Kitchen", "Carol", "Strickland", "123");
addUser("carol23", "C's Kitchen", "Carol", "Strickland", "123");
verifyUser("carol23");
authenticateUser("carol23", "122");
//adds a business to the database
function addBusiness(business, category, city, description, phone, street_address, website, zipcode)
{


	firebase.database().ref("/Businesses/" + business).set(
	{
		Category: category,
		City: city,
		Description: description,
		Phone: phone,
		StreetAdress: street_address,
		Website: website,
		Zipcode: zipcode
	});
}

//adds a user to the database
function addUser(userID, business, first_name, last_name, password)
{
	firebase.database().ref("/Users/" + userID).set(
	{
		Business: business,
		FirstName: first_name,
		LastName: last_name,
		Password: password
	});

}

function register() {
	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var userID = document.getElementById('userID').value;
	var password = document.getElementById('password').value;
	var bName = document.getElementById('bName').value;
	var category = document.getElementById('category').value;
	var address = document.getElementById('address').value;
	var address2 = document.getElementById('address2').value;
	var country = document.getElementById('country').value;
	var state = document.getElementById('state').value;
	var zip = document.getElementById('zip').value;
	var website = document.getElementById('website').value;
	var phone = document.getElementById('phone').value;
	var city = document.getElementById('city').value;
	var description = document.getElementById('description').value;
	// alert( lname)
	// alert(userID)
	// alert( Password)
	// alert( bName)
	// alert( category)
	// alert( address)
	// alert(address2)
	// alert( country)
	// alert( state)
	// alert( zip)
	// alert( website)
	// alert(phone);


	addBusiness(bName, category, city, description, phone, address+' '+ address2, website, zip);
	addUser(userID, bName, fname, lname, password)
}
//Function verfies if usernmae is taken or not. 
function verifyUser(userID) {
	var dbref = firebase.database().ref('/Users/' + userID);
	dbref.once('value').then(snap => {
		if(snap.val() == null) {
			//Username is available do something 
			console.log(userID + " is available");
		}
		else {
			//Username is taken do something 
			console.log(userID + " is taken");
		}
	});	
}

function authenticateUser(userID, password) {
	var dbref = firebase.database().ref('/Users/' + userID + "/password");
	dbref.once('value').then(snap => {
		if(snap.val() == password) {
			//Username and password are valid. do something
			console.log("Username or password is valid");
		}
		else {
			//Username and password is not valid , do something 
			console.log("Username or password not valid");
		}
	});	

}

function initGoogle() {
	var input = document.getElementById('adressTextField');
	var options = {
	  types: ['address'],
	  componentRestrictions: {country: 'us'}
	};

	autocomplete = new google.maps.places.Autocomplete(input, options);
	autocomplete.addListener('place_changed',function(){
		var place = autocomplete.getPlace();
		latitude = place.geometry.location.lat();
		longitude = place.geometry.location.lng();
	});
}