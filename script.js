let age = Number(prompt("Enter your age"));
let movieType = prompt("Regular or 3D").toLowerCase();
let time = prompt("Morning or Evening").toLowerCase();


function first() {
  let havesaleticket = prompt("Do you have sale ticket").toLowerCase();
  let price = 0;

  switch (true) {
    case age < 10:
      price = 5;
      break;

    case age >= 10 && age < 65:
      price = 15;
      break;

    case age >= 65:
      price = 10;
      break;

    default:
      alert("Invalid age");
      return;
  }

  switch (movieType) {
    case "3d":
      price = price + 5;
      break;
    case "regular":
      break;
    default:
      alert("Invalid movie type");
      return;
  }

  switch (time) {
    case "evening":
      price = price + 5;
      break;
    case "morning":
      break;
    default:
      alert("Invalid time");
      return;
  }

  {
    if (havesaleticket === "yes") {
      price = price * 0.75;
    } else {
    }
  }
  alert("ბილეთის ფასი თქვენთვის არის: " + price + " ლარი.");
}

document.getElementById("btn").addEventListener("click", first);
