/*
*Created By: Jonathan Dohrer
*Date Created: 1/9/2020
*Date Last Modified: 1/13/2020
*/

/*ClearErrors and Validate Function to validate contact form*/
function clearErrors() {
	for (var loopCounter = 0; loopCounter < document.forms["contactForm"].elements.length; loopCounter++) {
		if (document.forms["contactForm"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) {
			document.forms["contactForm"].elements[loopCounter].parentElement.className = "form-group";
		}
	}
}

function validateForm() {
	clearErrors();

	var name = document.forms["contactForm"]["name"].value;
	var phone = document.forms["contactForm"]["phone"].value;
	var email = document.forms["contactForm"]["email"].value;
	var info = document.forms["contactForm"]["info"].value;
	var bestContact = document.forms["contactForm"]["bestContact"].value;
	
	var choice1 = document.forms["contactForm"]["m"].checked;
	var choice2 = document.forms["contactForm"]["t"].checked;
	var choice3 = document.forms["contactForm"]["w"].checked;
	var choice4 = document.forms["contactForm"]["th"].checked;
	var choice5 = document.forms["contactForm"]["f"].checked;
	
	if (name == "") {
		alert("Please enter your name.");
		document.forms["contactForm"]["name"].parentElement.className = "form-group has-error";
	} else if (email == "") {
		alert("Please enter your email.");
		document.forms["contactForm"]["email"].parentElement.className = "form-group has-error";
	} else if (phone == "") {
		alert("Please enter your phone number.");
		document.forms["contactForm"]["phone"].parentElement.className = "form-group has-error";
	} else if (info == "") {
		alert("Please leave a short description of additional information.");
		document.forms["contactForm"]["info"].parentElement.className = "form-group has-error";
	} else	if ((choice1 == "")&&(choice2 == "")&&(choice3 == "")&&(choice4 == "")&&(choice5 == "")) {
		alert("Please check what days are best to contact.");
		document.forms["contactForm"]["bestContact"].parentElement.className = "form-group has-error";
	} else {
		alert("Form Is Submitted!");
		return false;
	}
}