function validate()
{
	var name = document.getElementById("fname").value;
	var sname = document.getElementById("sname").value;
	var email=document.getElementById("email").value;
	var password=document.getElementById("pwd").value;
	var dob= document.getElementById("date").value
	if(name=="")
	{
		alert("First name is empty");
		document.getElementById("fname").focus();
		return false;
	}
	else if(sname=="")
	{
		alert("surname name is empty");
		document.getElementById("sname").focus();
		return false;
	}
	else if(email=="")
	{
		alert("email is not correct");
		document.getElementById("email").focus();
		return false;
	}
	else if(password=="")
	{
		console.log("function");
		alert(" please enter your password");
		document.getElementById("pwd").focus();
		return false;
	}
	else if(!document.getElementById("male").checked && !document.getElementById("female").checked)
	{
		alert("gender not selected");
		document.getElementById("male").focus();
		return false;
	}
	else if(dob=="")
	{
		console.log("function");
		alert(" please enter your date of birth");
		document.getElementById("date").focus();
		return false;
	}
	else if(!document.getElementById("pg").checked && !document.getElementById("ug").checked)
	{
		alert("please select the educational qualification");
		document.getElementById("ug").focus();
		return false;
	}
	else
	{
		alert("good");
	}

}