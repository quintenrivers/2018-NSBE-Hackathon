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
