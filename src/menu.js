const title = document.createElement("h1");
title.textContent = "NomNom Menu";

const beverages = document.createElement("h2");
const bev1 = document.createElement("h3");
const bev2 = document.createElement("h3");
const bev3 = document.createElement("h3");
const bev1Desc = document.createElement("p");
const bev2Desc = document.createElement("p");
const bev3Desc = document.createElement("p");
beverages.textContent = "Beverages";
bev1.textContent = "Iced Caramel Latte - $4.50";
bev2.textContent = "House Lemonade - $3.00";
bev3.textContent = "Tropical Iced Tea - $3.25";
bev1Desc.textContent = "A smooth blend of espresso, milk, and rich caramel syrup poured over ice.";
bev2Desc.textContent = "Freshly squeezed lemons with just the right balance of sweet and tangy.";
bev3Desc.textContent = "Black tea infused with mango and passionfruit flavors, served chilled.";

const bev1C = document.createElement("div");
bev1C.append(bev1, bev1Desc);
const bev2C = document.createElement("div");
bev2C.append(bev2, bev2Desc);
const bev3C = document.createElement("div");
bev3C.append(bev3, bev3Desc);

const bevContainer = document.createElement("div");
const bevContent = document.createElement("div");
bevContent.append(bev1C, bev2C, bev3C)
bevContainer.append(beverages, bevContent);

const sides = document.createElement("h2");
const s1 = document.createElement("h3");
const s2 = document.createElement("h3");
const s3 = document.createElement("h3");
const s1Desc = document.createElement("p");
const s2Desc = document.createElement("p");
const s3Desc = document.createElement("p");
sides.textContent = "Sides";
s1.textContent = "Crispy Fries - $3.75";
s2.textContent = "Cheesy Garlic Bread - $4.25";
s3.textContent = "Side Salad - $4.00";
s1Desc.textContent = "Golden, hand-cut fries served with our house-made dipping sauce.";
s2Desc.textContent = "Oven-toasted bread topped with garlic butter and melted mozzarella.";
s3Desc.textContent = "Fresh greens, cherry tomatoes, cucumber, and a light vinaigrette.";

const s1C = document.createElement("div");
s1C.append(s1, s1Desc);
const s2C = document.createElement("div");
s2C.append(s2, s2Desc);
const s3C = document.createElement("div");
s3C.append(s3, s3Desc);

const sidesContainer = document.createElement("div");
const sidesContent = document.createElement("div");
sidesContent.append(s1C, s2C, s3C)
sidesContainer.append(sides, sidesContent);


const main = document.createElement("h2");
const m1 = document.createElement("h3");
const m2 = document.createElement("h3");
const m3 = document.createElement("h3");
const m1Desc = document.createElement("p");
const m2Desc = document.createElement("p");
const m3Desc = document.createElement("p");
main.textContent = "Main Dishes";
m1.textContent = "NomNom Burger - $11.50";
m2.textContent = "Grilled Chicken Rice Bowl - $10.25";
m3.textContent = "Veggie Delight Pasta - $9.75";
m1Desc.textContent = "A juicy beef patty stacked with cheddar, lettuce, tomato, caramelized onions, and our special house sauce.";
m2Desc.textContent = "Tender grilled chicken served over garlic rice, paired with seasonal veggies.";
m3Desc.textContent = "Penne pasta tossed with roasted vegetables in a light olive oil and herb sauce.";

const m1C = document.createElement("div");
m1C.append(m1, m1Desc);
const m2C = document.createElement("div");
m2C.append(m2, m2Desc);
const m3C = document.createElement("div");
m3C.append(m3, m3Desc);

const mainContainer = document.createElement("div");
const mainContent = document.createElement("div");
mainContent.append(m1C, m2C, m3C);
mainContainer.append(main, mainContent);

// const menuList = [m1C, m2C, m3C, s1C, s2C, s3C, bev1C, bev2C, bev3C];
const menuList = [mainContent, sidesContent, bevContent];
menuList.forEach((item) => item.setAttribute("class", "menu-items"));

export {title, mainContainer as main, sidesContainer as sides, bevContainer as bev};