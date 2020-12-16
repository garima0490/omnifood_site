function displayAfterValidate() {

    // Validating Name 
  if( document.signupForm.name.value == "" ) {
    alert( "Name field cannot be blank!" );
    document.signupForm.name.focus() ;
    return false;
  }   
  
  // Validating Phone 
  if( document.signupForm.phone.value.length !=10 || isNaN(document.signupForm.phone.value) ) {
    alert( "Phone field should contain exactly 10 digits!" );
    document.signupForm.phone.focus() ;
    return false;
  }   

  // Validating Email
  if(!validateEmail())
    return false;

    // Displaying the form data
  var name=document.signupForm.name.value;
  var email=document.signupForm.email.value;
  var phone=document.signupForm.phone.value;
  
  document.write(`<br><h1>Thanks for signing up ${name.fontcolor("blue")}</h1><br><h2>Following is the information associated with your account : </h2> <br>`);
  document.write(`<h3>Phone :  ${phone.fontcolor("blue")}<br> Email : ${email.fontcolor("blue")}</h3>`); 
  
  return true;
} 

// Function for validating Email
function validateEmail() {
  var email= document.signupForm.email.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");

  if (atpos < 1 || ( dotpos - atpos < 2 )) {
    alert("Please enter correct email ID");
    document.signupForm.email.focus() ;
    return false;
  }
  return true;
 }


  
