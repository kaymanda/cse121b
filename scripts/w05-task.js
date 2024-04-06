/* W05: Programming Tasks */

/* Declare and initialize global variables */

let templeList = [];

/* async displayTemples Function */
const displayTemples = async (temples) => 
    temples.forEach((temple) => {
        //Create an HTML <article> element (createElement).
        //Create an HTML <h3> element and add the temple's templeName property to this new element.
        let article = document.createElement("article");

        let h3 = document.createElement("h3");
        h3.textContent = temple.templeName;

        //Create an HTML <img> element and add the temple's imageUrl property 
        //to the src attribute and the temple's location property to the alt attribute.
        let img = document.createElement("img");
        img.src = (temple.imageUrl);
        img.alt = (temple.location);

        //Append the <h3> element and the <img> element to the 
        //<article> element as children. (appendChild)
        //Append the <article> element to the global templesElement variable declared in Step 2.
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);

    });


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    if (response.ok) {
        templeList = await response.json();
    }
    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
}

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    const filter = document.getElementById("filtered").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
            break;

        case "notutah":
            displayTemples(temples.filter((temple) =>! temple.location.includes("Utah")));
            break;

        case "older":
            displayTemples(temples.filter((temple) => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;

        case "all":
            displayTemples(temples); 
            break; 
        default:   
    }
};

getTemples();

/* Event Listener */
document.getElementById("filtered").addEventListener("change", () => {filterTemples(templeList) });

