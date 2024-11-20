function getFormvalue(event) {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Get the first name and last name values from the form
  const firstName = document.forms["form1"]["fname"].value;
  const lastName = document.forms["form1"]["lname"].value;

  // Combine first name and last name and display it in an alert
  alert(firstName + " " + lastName);
}
