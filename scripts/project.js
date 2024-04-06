//https://api.jikan.moe/v4/anime?q=top%20animes&sfw

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
async function displayAnimeImage(containerId, animeList) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    for (const anime of animeList) {
        const img = document.createElement("img");
        img.src = anime.image_url;
        img.alt = anime.title;
        container.appendChild(img);
    }
}

//Function to help sort hightest rated use sort
function animeRated() {
    const sortAnime = [...animeList].sort((a,b) => b.score - a.score);
    return sortAnime;
}

//Function to help sort most viewed use sort
function animeViewed() {
    const sortAnime = [...animeList].sort((a,b) => b.popularity - b.popularity);
    return sortAnime;
}

//Function to help filter mainstream use filter
function mainstreamAnime() {
    const animeMain = animeList.filter(anime => anime.is_mainstream === true);
    return animeMain;
}

//Function to Display Results
async function displayAnime() {
    const highestRatedAnime = animeRated()[0];
    const mostViewedAnime = animeViewed()[0];
    const animeMainstream = mainstreamAnime();

    document.getElementById("titleRatedAnime").innerText = highestRatedAnime.title;
    await displayAnimeImage("ratedImage", [highestRatedAnime]);

    document.getElementById("titleViewedAnime").innerText = mostViewedAnime.title;
    await displayAnimeImage("viewedImage", [mostViewedAnime]);

    const titleMainstream = animeMainstream.map(anime => anime.title).join(", ");
    document.getElementById("titleMainstream").innerText = titleMainstream;
    await displayAnimeImage("titleMainstream", animeMainstream);
}

// fetch data from displayAnime
getAnime();

//addEventListener for click button for mainstream anime
document.getElementById("mainFilter").addEventListener("click", ()=> {
    const titleMainstream = mainstreamAnime().map(anime => anime.title).join(", ");
    document.getElementById("titleMainstream").innerText = titleMainstream;
});

//});
