const home = document.createElement("div");
home.setAttribute('id', 'home');

const title = document.createElement("h1");
const secTitle = document.createElement("p");
title.textContent = "Welcome to NomNom House!";
secTitle.textContent = "Where every bite feels like home.";
const titleContainer = document.createElement("div");
titleContainer.append(title, secTitle);

const content = document.createElement("p");
const content2 = document.createElement("p");
content.textContent = "At NomNom House, we believe food should be more than just filling—it should bring joy, comfort, and connection. That’s why we serve hearty, flavorful meals made with fresh ingredients and a whole lot of love.";
content2.textContent = "Whether you’re here for a quick lunch, a relaxed dinner with friends, or a family gathering, our doors are always open for you.";
const contentContainer = document.createElement("div");
contentContainer.append(content, content2);

const hours = document.createElement("h2");
hours.textContent = "Hours";
const sun = document.createElement("li");
sun.textContent = "Sunday: 8am - 8pm";
const mon = document.createElement("li");
mon.textContent = "Monday: 6am - 6pm";
const tue = document.createElement("li");
tue.textContent = "Tuesday: 6am - 6pm";
const wed = document.createElement("li");
wed.textContent = "Wednesday: 6am - 6pm"
const thu = document.createElement("li");
thu.textContent = "Thursday: 6am - 10pm";
const fri = document.createElement("li");
fri.textContent = "Friday: 6am - 10pm";
const sat = document.createElement("li");
sat.textContent = "Saturday: 8am - 10pm";
const weeks = [sun, mon, tue, wed, thu, fri, sat];
const weekList = document.createElement("ul");
weeks.forEach((day) => weekList.appendChild(day));
const hoursContainer = document.createElement("div");
hoursContainer.append(hours, weekList);


const location = document.createElement("h2");
location.textContent = "Location";
const locInfo = document.createElement("p");
locInfo.textContent = "123 Disendat Drive, Thathis, Thosdeez";
const locContainer = document.createElement("div");
locContainer.append(location, locInfo);

export {titleContainer, contentContainer, hoursContainer, locContainer};