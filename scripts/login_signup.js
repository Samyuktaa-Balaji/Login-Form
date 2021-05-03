function ValidateEmail(inputText)
{

	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(inputText.value.match(mailformat) || inputText.value=="")
    {
        return true;
    }
    else
    {
     	alert("Invalid email address!");
        inputText.value = "";
    }
}

function ValidatePassword(inputText)
{
	var passwordformat = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()]).{8,}$/;
	if(inputText.value.match(passwordformat) || inputText.value=="")
	{
		return true;
	}
	else
	{
		alert("The password must contain \n at least 8 characters \n at least one digit \n at least one upper case alphabet \n at least one lower case alphabet \n at least one special character");
		inputText.value = "";
	}
}

function ValidateConfirmPassword(inputText1, inputText2)
{
	if(inputText1.value != inputText2.value)
	{
		alert("Password mismatch");
		inputText1.value = "";
		inputText2.value = "";
		inputText1.focus();
	}
}

function CheckSignup()
{
	var n = document.signup_form.uname.value;
	var e = document.signup_form.email.value;
	var p = document.signup_form.newpsw.value;
		
}
	
