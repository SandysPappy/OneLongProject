// Tyler VanderMate
// CIS 4004

const form = document.getElementById('createAccountForm');
form.addEventListener('submit', isSubmitting);

function uhm()
{
  console.log("We can do more things here too i guess, this is done first");
}

function isSubmitting(event) {

  if (validateCreateAccountForm())
  {
    err.textContent = 'Form Submitted!';
    return ;
  }

  event.preventDefault();
}

// returns true if the form is valid
// else returns false
function validateCreateAccountForm()
{
  const err = document.getElementById('formErrorMessage')
  var nameRegex = /^[a-zA-Z\s]+$/;
  var addrRegex = /^[a-zA-Z\s\d,.#]+$/;
  var zipRegex = /^[\d]{5}$/;
  var checked_phone_type = document.querySelector("form.createAccount input[name='phoneRadio']:checked");
  var phoneNumberRegex = /^1?-?\(?([0-9]{3}\)?[0-9]{3}-?[0-9]{4})$/;
  var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/;

  fname = form.fName.value;
  lname = form.lName.value;
  addr = form.address.value;
  city = form.city.value;
  state = form.stateList.options[stateList.selectedIndex].value;
  zipcode = form.zip.value;
  phonenum = form.phone.value;
  email = form.email.value;

  if (!nameRegex.test(fname))
  {
    err.textContent = 'Please enter a valid first name';
    return false;
  }
  if (!nameRegex.test(lname))
  {
    err.textContent = 'Please enter a valid last name';
    return false;
  }
  if (!addrRegex.test(addr))
  {
    err.textContent = 'Please enter a valid address name';
    return false;
  }
  if (!nameRegex.test(city))
  {
    err.textContent = 'Please enter a valid city';
    return false;
  }
  if (state == 'blank')
  {
    err.textContent = 'Please select a State';
    return false;
  }
  if (!zipRegex.test(zipcode))
  {
    err.textContent = 'Please enter a valid 5 digit zipcode';
    return false;
  }
  if (checked_phone_type == null)
  {
    err.textContent = 'Please select type of phone number';
    return false;
  }
  if (!phoneNumberRegex.test(phonenum))
  {
    err.textContent = 'Please input a valid US phone number with area code';
    return false;
  }
  if (!emailRegex.test(email))
  {
    err.textContent = 'Please input a valid email';
    return false;
  }

  err.textContent = 'yay this is a valid form';
  return false;
}
