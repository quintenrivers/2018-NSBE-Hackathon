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
		Zipcode: zipcode,
	});
}

function addUser(userID, business, first_name, last_name, password)
{
	firebase.database().ref("/Users/" + userID).set
	({
		Business: business;
		FirstName: first_name;
		LastName: last_name;
		Password: password;	
	});

}