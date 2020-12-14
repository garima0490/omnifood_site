function validateForm() {
  if( document.signupForm.name.value == "" ) {
    alert( "Name field cannot be blank!" );
    document.signupForm.name.focus() ;
    return false;
  }   
  
  if( document.signupForm.phone.value.length !=10 || isNaN(document.signupForm.phone.value) ) {
    alert( "Phone field should contain exactly 10 digits!" );
    document.signupForm.phone.focus() ;
    return false;
  }   

  if(!validateEmail())
    return false;

  if( document.signupForm.source.value == "-1" ) {
    alert( "Please select one option!" );
    document.signupForm.source.focus() ;
    return false;
 }

} 

function validateEmail() {
  var email= document.signupForm.email.value;
  atpos = email.indexOf("@");
  dotpos = email.lastIndexOf(".");

  if (atpos < 1 || ( dotpos - atpos < 2 )) {
    alert("Please enter correct email ID");
    document.signupForm.email.focus() ;
    return false;
  }
  return( true );
 }