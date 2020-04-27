// Build two fieldsets and input fields that will allow you to enter the
// name of a favorite thing of yours, and a location where you might
// purchase it (Target, Amazon, Best Buy, etc...)

// Add a button beneath the fieldsets labeled "Save to Wishlist".

// When the button is clicked, display the data in the following format in the DOM.

const container = document.querySelector("#favsList");

document.querySelector("#submit").addEventListener("click", (event) => {
  const favThing = document.querySelector("#favThing").value;
  const retailers = document.querySelector("#retailers").value;
  container.innerHTML += `
    <p>I can buy ${favThing} at ${retailers}.</p>
  `;
});
