const API_KEY =
"10fe329dbe4866c984a08d0f4b5b4b5f";

let newsData = [];

let currentIndex = 0;

let currentCategory =
"general";

const categoryIcons = {

  general:"🇮🇳 National",

  world:"🌍 International",

  sports:"🏏 Sports",

  technology:"💻 Technology",

  business:"💰 Business",

  science:"🚀 Science",

  health:"❤️ Health"

};

// =========================
// LOAD NEWS
// =========================

async function loadNews(
  category = "general"
){

  currentCategory =
  category;

const url =
`/api/news?category=${category}`;

  try{

    const response =
    await fetch(url);

    const data =
    await response.json();

    newsData =
    data.articles || [];

    currentIndex = 0;

    displayNews();

  }

  catch(error){

    console.log(error);

  }

}

// =========================
// DISPLAY CARD
// =========================

function displayNews() {

  if(newsData.length === 0) {

    document.getElementById("title").innerHTML =
    "No News Available";

    document.getElementById("description").innerHTML = "";

    return;
  }

  const news = newsData[currentIndex];

  document.getElementById("title").innerHTML =
  news.title;

  const newsDate =
  new Date(news.publishedAt)
  .toLocaleDateString(
    "en-IN",
    {
      day:"numeric",
      month:"long",
      year:"numeric"
    }
  );

  document.getElementById("newsDate").innerHTML =
  "📅 " + newsDate;

  document.getElementById("description").innerHTML =
  news.description || "No Description";

  document.getElementById("newsLink").href =
  news.url;
}
const card =
document.getElementById(
"flipCard"
);

if(card){

  card.classList.remove(
  "flipped"
  );

}
// =========================
// NEXT
// =========================

function nextCard(){

  if(
    newsData.length === 0
  ) return;

  currentIndex++;

  if(
    currentIndex >=
    newsData.length
  ){

    currentIndex = 0;

  }

  displayNews();

}

// =========================
// PREVIOUS
// =========================

function previousCard(){

  if(
    newsData.length === 0
  ) return;

  currentIndex--;

  if(
    currentIndex < 0
  ){

    currentIndex =
    newsData.length - 1;

  }

  displayNews();

}

// =========================
// RANDOM
// =========================

function randomNews(){

  if(
    newsData.length === 0
  ) return;

  currentIndex =
  Math.floor(

    Math.random()
    *
    newsData.length

  );

  displayNews();

}

// =========================
// START
// =========================

loadNews();
function bookmarkNews(){

  const news =
  newsData[currentIndex];

  let bookmarks =

  JSON.parse(

  localStorage.getItem(
  "bookmarks"
  )

  || "[]"

  );

  bookmarks.push({

    title:
    news.title,

    description:
    news.description,

    url:
    news.url,

    publishedAt:
    news.publishedAt,

    savedAt:
    new Date()
    .toLocaleString()

  });

  localStorage.setItem(

    "bookmarks",

    JSON.stringify(
    bookmarks
    )

  );

  alert(
  "News Saved Successfully ⭐"
  );

}
function showBookmarks(){

  const section =
  document.getElementById(
    "savedNewsSection"
  );

  let bookmarks =
  JSON.parse(
    localStorage.getItem(
      "bookmarks"
    ) || "[]"
  );

  if(bookmarks.length === 0){

    section.innerHTML =
    "<h3>No Saved News</h3>";

    return;
  }

  let html =
  "<h3>⭐ Saved News</h3>";

  bookmarks.forEach((news)=>{

    html += `
      <div class="saved-card">
        <h4>${news.title}</h4>
      </div>
    `;

  });

  section.innerHTML =
  html;
}
async function searchNews(){

  const query =
  document.getElementById(
    "searchInput"
  ).value;

  if(!query) return;

const url =
`/api/news?search=${query}`;
  
  try{

    const response =
    await fetch(url);

    const data =
    await response.json();

    newsData =
    data.articles || [];

    currentIndex = 0;

    displayNews();

  }

  catch(error){

    console.log(error);

  }

}
function openBookmarks(){

  window.location.href =
  "bookmarks.html";

}
function toggleTheme(){

    document.body
    .classList
    .toggle("dark-mode");

    localStorage.setItem(

        "theme",

        document.body
        .classList
        .contains("dark-mode")

    );

}

if(

localStorage.getItem(
"theme"
) === "true"

){

document.body.classList
.add("dark-mode");

}
function toggleSidebar(){

    document
    .getElementById("sidebar")
    .classList
    .toggle("active");

    document
    .getElementById("overlay")
    .classList
    .toggle("active");
}
function flipCard(){

  document
  .getElementById("flipCard")
  .classList
  .toggle("flipped");

}
async function loadDrugCrimeNews(){

  const response =
  await fetch(
    "/api/news?search=narcotics India"
  );

  const data =
  await response.json();

  newsData =
  data.articles || [];

  currentIndex = 0;

  displayNews();
}
