/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Amanda Smith";
let currentYear = 2024;
let profilePicture = "images/selfpic.jpg";



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", "Profile image of ${fullName}");


/* Step 5 - Array */
favFoods = ["Chicken Alfredo" , "Chocolate Chip Cookies" , "Breadsticks"];
foodElement.textContent = favFoods;

foods = "French Toast with Cookie Butter"

favFoods.push(foods)
foodElement.innerHTML += `<br>${favFoods}`;

favFoods.shift()
foodElement.innerHTML += `<br>${favFoods}`;

favFoods.pop()
foodElement.innerHTML += `<br>${favFoods}`;










