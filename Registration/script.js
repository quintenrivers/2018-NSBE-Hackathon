var autocomplete;
var latitude = "";
<<<<<<< HEAD
var longitude = ""; 

//Restaurant
addBusiness("Aunt Mae's Kitchen", "Restaurant", "Specialized in Homemade Sweet Potato Pie with sugar or agave nectar or honey.", "412-321-6163", "", "40.456899", "-80.022904");
addBusiness("BBQ Stu's Inc", "Restaurant", "We market a National Award Winning barbeque sauces under the Bbq Stu’s label And wholesale our products to restaurants and grocery stores.", "412-673-6457", "www.Bbqstus.com", "40.336678", "-79.847081");
addBusiness("Smokin Memphis Style BBQ Co. LLC", "Restaurant", "DELICIOUS MARINATED AND DRY RUBBED RIBS; SMOKED LOW AND SLOW. BBQ CHICKEN, 5 CHEESE & MAC, FRESH GREENS, JAMAICAN JERK CHICKEN. DAILY SPECIALS FEATURING HOME TOWN FAVORITES.", "412-766-3400", "", "40.476066", "-80.031563");

//beauty supplies
addBusiness("Heavenly Body", "Beauty Supplies", "We offer natural products: Raw shea butter yellow and white, soaps, talc free powder, lotions, body washes, body scrubs, whipped body butters, fragrances, and incense", "412-646-4090", "www.heavenlybodyforyou.com", "40.438761", "-79.989934");
addBusiness("Nebby Beauty Care", "Beauty Supplies", "Full service beauty supply and natural hair business. In additional African owned and operated", "412-682-0581", "nebbybeautycare.com", "40.440871", "-79.958614");
addBusiness("Weave No More", "Beauty Supplies", "Full lace wigs , Custom Wigs and Adhesives available for sale.", "412-450-1129", "", "41.053909", "-79.752398");

//salon/barbershop
addBusiness("Top Ranks Cuts", "Salon/Barbershop", "", "412-727-1831", "", "40.465682", "-79.825989");
addBusiness("Anna's Salon Elite", "Salon/Barbershop", "Enhance your beauty with great hair cut and style at Anna’s Salon Elite in Pittsburgh. We are award winning hair and beauty salon in Aliquippa, PA.", "724-375-8511", " http://annassalonelite.com", "40.602636", "-80.277745");



//adds a business to the database
function addBusiness(business, category, description, phone, website, latitude, longitude)
=======
var longitude = "";
var address = "";
addUser("carol23", "C's Kitchen", "Carol", "Strickland", "123");
addUser("carol23", "C's Kitchen", "Carol", "Strickland", "123");
verifyUser("carol23");
authenticateUser("carol23", "122");
//adds a business to the database
function addBusiness(business, category, description, phone, website, lat, long,addr)
>>>>>>> deb98e76a40bc8b3cbf1a7621ffa0b31ec9f5c45
{


	firebase.database().ref("/Businesses/" + business).set(
	{
		Category: category,
		Description: description,
		Phone: phone,
		Website: website,
<<<<<<< HEAD
		Latitude: latitude, 
		Longitude: longitude
=======
		Lat: lat, 
		Long: long,
		Address: addr
>>>>>>> deb98e76a40bc8b3cbf1a7621ffa0b31ec9f5c45
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
	/*var address = document.getElementById('address').value;
	var address2 = document.getElementById('address2').value;
	var country = document.getElementById('country').value;
	var state = document.getElementById('state').value;
	var zip = document.getElementById('zip').value;		*/
	var website = document.getElementById('website').value;
	var phone = document.getElementById('phone').value;
	//var city = document.getElementById('city').value;
	var description = document.getElementById('description').value;
	var latitude = document.getElementById('latitude').value;
	var longitude = document.getElementById('longitude').value;
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


	addBusiness(bName, category,description, phone,website, latitude, longitude, address);
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
		address = place.formatted_address;
		console.log(address);
		console.log(latitude);
		console.log(longitude);
	});

}
