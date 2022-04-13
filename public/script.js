let weather = {
  apiKey: "49cc8c821cd2aff9af04c9f98c36eb74",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q="
      + city
      + "&units=metric&appid="
      + this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("kampala");


// news js

// variables
const generalBtn = document.getElementById("genral");
const localBtn = document.querySelector("#local");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sport");
const entertainmentBtn = document.getElementById("entertainment");
const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("searchBtn");
const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");
var btns = [generalBtn, localBtn, businessBtn, sportsBtn, entertainmentBtn, technologyBtn];
// Array
var newsDataArr = [];
var classes = ["border", "border-warning", "rounded", "text-warning", "mt-1"];



// apis 
const API_KEY = "b8c3b2b4b0b84acdbc2dc11014c5534e";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";
const LOCAL_NEWS = "https://newsapi.org/v2/everything?q=uganda";
window.onload = function () {
  newsType.innerHTML = "<h4>Headlines</h4>";
  fetchHeadlines();
};
function removeClasses(){
  btns.forEach(btn => {
    btn.classList.remove(...classes);
  
  });
}
 

generalBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>General news</h4>";
  removeClasses();
  generalBtn.classList.add(...classes);
  fetchGeneralNews();
});
localBtn.addEventListener('click', () => {
  newsType.innerHTML = "<h4>Local News</h4>";
  newsQuery.value = "uganda";
  removeClasses();
  localBtn.classList.add(...classes);
  fetchQueryNews();
});
businessBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Business</h4>";
  removeClasses();
  businessBtn.classList.add(...classes);
  fetchBusinessNews();
});

sportsBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Sports</h4>";
  removeClasses();
  sportsBtn.classList.add(...classes);
  fetchSportsNews();
});

entertainmentBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Entertainment</h4>";
  removeClasses();
  entertainmentBtn.classList.add(...classes);
  fetchEntertainmentNews();
});

technologyBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Technology</h4>";
  removeClasses();
  technologyBtn.classList.add(...classes);
  fetchTechnologyNews();
});

searchBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Search : " + newsQuery.value + "</h4>";
  fetchQueryNews();
});

const fetchHeadlines = async () => {
  const response = await fetch(HEADLINES_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>"
    return;
  }

  displayNews();
}


const fetchGeneralNews = async () => {
  const response = await fetch(GENERAL_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>"
    return;
  }

  displayNews();
}

const fetchBusinessNews = async () => {
  const response = await fetch(BUSINESS_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>"
    return;
  }

  displayNews();
}

const fetchEntertainmentNews = async () => {
  const response = await fetch(ENTERTAINMENT_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    console.log(myJson);
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>"
    return;
  }

  displayNews();
}

const fetchSportsNews = async () => {
  const response = await fetch(SPORTS_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>"
    return;
  }

  displayNews();
}

const fetchTechnologyNews = async () => {
  const response = await fetch(TECHNOLOGY_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>"
    return;
  }

  displayNews();
}

const fetchQueryNews = async () => {

  if (newsQuery.value == null)
    return;

  const response = await fetch(SEARCH_NEWS + encodeURIComponent(newsQuery.value) + "&apiKey=" + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    //error handle
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>"
    return;
  }

  displayNews();
}

function displayNews() {

  newsdetails.innerHTML = "";

  newsDataArr.forEach(news => {

    var date = news.publishedAt.split("T");

    var col = document.createElement('div');
    col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";

    var card = document.createElement('div');
    card.className = "p-2";

    var image = document.createElement('img');
    image.setAttribute("height", "matchparent");
    image.setAttribute("width", "100%");
    image.src = news.urlToImage;

    var cardBody = document.createElement('div');

    var newsHeading = document.createElement('h5');
    newsHeading.className = "card-title";
    newsHeading.innerHTML = news.title;

    var dateHeading = document.createElement('h6');
    dateHeading.className = "text-primary";
    dateHeading.innerHTML = date[0];

    var link = document.createElement('a');
    link.className = "btn btn-dark";
    link.setAttribute("target", "_blank");
    link.href = news.url;
    link.innerHTML = "Read more";

    cardBody.appendChild(newsHeading);
    cardBody.appendChild(dateHeading);
    cardBody.appendChild(link);

    card.appendChild(image);
    card.appendChild(cardBody);

    col.appendChild(card);

    newsdetails.appendChild(col);
  });

}   