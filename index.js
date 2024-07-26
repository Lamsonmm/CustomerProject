console.log("Hello World");
// add a name value pair to the map /value
//  document.getElementById(`name`).value = ''; clears out the box
const customerDatabase = new Map();

const handleCustomerAdd = () => {
  const nameValue = document.getElementById(`name`).value;
  const emailValue = document.getElementById(`email`).value;
  const passwordValue = document.getElementById(`password`).value;
  console.log(nameValue + emailValue + passwordValue);
  const customerObject = { nameValue, emailValue, passwordValue };
  customerDatabase.set(nameValue, customerObject);
  console.log(customerDatabase);
  document.getElementById("customer-form").reset();
};
document
  .getElementById("addButton")
  .addEventListener("click", handleCustomerAdd);
