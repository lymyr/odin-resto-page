import "./styles.css"
import {titleContainer as homeTitle, contentContainer as homeContent, hoursContainer as homeHrs, locContainer as homeLoc} from './home.js'
import {title as contactTitle, person1 as contactP1, person2 as contactP2, person3 as contactP3} from './contact.js'
import {title as menuTitle, main as menuMain, sides as menuSides, bev as menuBev} from './menu.js'

const content = document.querySelector('div#content');
// content.append(homeTitle, homeContent, homeHrs, homeLoc);

const navBtns = document.querySelectorAll("nav > button");

navBtns.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
        content.innerHTML = "";
        if (i == 0) content.append(homeTitle, homeContent, homeHrs, homeLoc);
        else if (i == 1) content.append(menuTitle, menuMain, menuSides, menuBev);
        else content.append(contactTitle, contactP1, contactP2, contactP3);

        navBtns.forEach((b) => b.classList.remove("active"));
        e.target.setAttribute("class", "active");
    });
    
});

navBtns[0].click();
