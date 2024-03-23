/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Amanda Smith",
    photo: "images/selfpic.jpg",
    favoriteFoods: [
        "Chicken Alfredo" , 
        "Chocolate Chip Cookies" ,
        "Breadsticks"
    ],
    hobbies: [
        "Baking/Cooking",
        "Embroidery",
        "Reading",
        "Playing Video Games"
    ],
    placesLived: [],
};

/*Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Tooele, Ut",
        length: "8 years"
    }
);
myProfile.placesLived.push(
    {
        place: "South Jordan, Ut",
        length: "14 years"
    }
);
myProfile.placesLived.push(
    {
        place: "West Valley City, Ut",
        length: "12 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Murray, Ut",
        length: "3 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Taylorsville, Ut",
        length: "1 year"
    }
);


/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("img").setAttribute('src', myProfile.photo);
document.querySelector("img").setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    document.querySelector("#places-lived").appendChild(dt);

    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dd);
})

