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

function addUser(userID, business, first_name, last_name, password)
{
	firebase.database().ref("/Users/" + userID).set
	({
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
	var Password = document.getElementById('Password').value;
	var bName = document.getElementById('bName').value;
	var category = document.getElementById('category').value;
	var address = document.getElementById('address').value;
	var address2 = document.getElementById('address2').value;
	var country = document.getElementById('country').value;
	var state = document.getElementById('state').value;
	var zip = document.getElementById('zip').value;
	var website = document.getElementById('website').value;
	var phone = document.getElementById('phone').value;

	// alert(fname)
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
}