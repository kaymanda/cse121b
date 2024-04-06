//https://api.jikan.moe/v4/anime?q=top%20animes&sfw: 
//need to use jikan instead of animenewsnetwork they moved to xml and I am confused on moving xml to json

//globel variable
let animeList = [];

//Function async getAnime to fetch api from jikan
const getAnime = async () => {
    try {
        const response = await fetch("https://api.jikan.moe/v4/anime?q=top%20animes&sfw");
        const data = await response.json();
        animeList = data.data;
        displayAnime();
    }catch (error) {
        console.error("There was an error fetching:", error);
        }
};


//Images display from api
async function displayAnimeImage(pictureId, animeList) {
    const picture = document.getElementById(pictureId);
    picture.innerHTML = "";

    for (const anime of animeList) {
        const img = document.createElement("img");
        img.src = anime.image_url;
        img.alt = anime.title;
        picture.appendChild(img);
    }
}

//Function to help sort hightest rated use sort
function animeRated() {
    const sortAnime = [...animeList].sort((a,b) => b.score - a.score);
    return sortAnime;
}

//Function to help sort most viewed use sort
function animeViewed() {
    const sortAnime = [...animeList].sort((a,b) => b.popularity - a.popularity);
    return sortAnime;
}

//Function to help filter mainstream use filter
function mainstreamAnime() {
    const animeMain = animeList.sort(anime => anime.is_mainstream === true);
    return animeMain;
}

//Function to Display Results
async function displayAnime() {
    const highestRatedAnime = animeRated()[0];
    const mostViewedAnime = animeViewed()[0];
    const animeMainstream = mainstreamAnime()[0];

    document.getElementById("titleRatedAnime").innerText = highestRatedAnime.title;
    await displayAnimeImage("ratedImage", [highestRatedAnime]);

    document.getElementById("titleViewedAnime").innerText = mostViewedAnime.title;
    await displayAnimeImage("viewedImage", [mostViewedAnime]);

    //const titleMainstream = animeMainstream.map(anime => anime.title).join(", "); //not working how I thought it would
    document.getElementById("titleMainstream").innerText = titleMainstream.title;
    await displayAnimeImage("titleMainstream", [animeMainstream]);
}

// fetch data from displayAnime
getAnime();

