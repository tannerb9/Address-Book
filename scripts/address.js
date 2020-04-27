const container = document.querySelector("#favsList");

document.querySelector("#submit").addEventListener("click", (event) => {
  const favThing = document.querySelector("#favThing").value;
  const retailers = document.querySelector("#retailers").value;
  container.innerHTML += `
    <p>I can buy ${favThing} at ${retailers}.</p>
  `;
});
