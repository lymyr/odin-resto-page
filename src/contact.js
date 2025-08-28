const title = document.createElement("h1");
title.textContent = "Contact Us";

const name1 = document.createElement("h3");
const role1 = document.createElement("p");
const num1 = document.createElement("p");
const email1 = document.createElement("p");

name1.textContent = "Maria Santos";
role1.textContent = "Manager";
num1.textContent = "(123) 456-7890";
email1.textContent = "maria@nomnomhouse.com";

const person1 = document.createElement("div");
person1.append(name1, role1, num1, email1);

const name2 = document.createElement("h3");
const role2 = document.createElement("p");
const num2 = document.createElement("p");
const email2 = document.createElement("p");

name2.textContent = "James Lee";
role2.textContent = "Head Chef";
num2.textContent = "(123) 456-7891";
email2.textContent = "james@nomnomhouse.com";

const person2 = document.createElement("div");
person2.append(name2, role2, num2, email2);

const name3 = document.createElement("h3");
const role3 = document.createElement("p");
const num3 = document.createElement("p");
const email3 = document.createElement("p");

name3.textContent = "Anna Cruz";
role3.textContent = "Customer Support";
num3.textContent = "(123) 456-7892";
email3.textContent = "support@nomnomhouse.com";

const person3 = document.createElement("div");
person3.append(name3, role3, num3, email3);



const persons = [person1, person2, person3];

persons.forEach((p) => {
    p.setAttribute("class", "contact-card");
});

export {title, person1, person2, person3}