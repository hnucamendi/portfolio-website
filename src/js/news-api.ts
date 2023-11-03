const TOKEN = import.meta.env.VITE_TOKEN;

const newsAPISection = document.querySelector(".news-api");
const articles = document.querySelector("#articles");
const selectCountries = document.querySelector("#select-countries");
const endpoints = document.querySelector("#endpoints");

async function fetchCountryCodes(): Promise<{
  res: {};
  keys: string[];
  values: string[];
}> {
  const data = await fetch("./src/json/country_codes.json");

  const res = await data.json();

  return {
    res,
    keys: Object.keys(res),
    values: Object.values(res),
  };
}

async function fetchNews(countryName: string, endpoint: string) {
  const { keys, values } = fetchCountryCodes();
  const cc = keys[values.indexOf(countryName)];

  const data = await fetch(
    `https://newsapi.org/v2/${endpoint}?country=${cc}&apiKey=${TOKEN}`
  );

  const res = await data.json();

  console.log(res);
}

async function renderOptions() {
  const { keys, values } = await fetchCountryCodes();
  for (let cn of values) {
    let opt = document.createElement("option");
    opt.textContent = cn;
    (selectCountries as Element).appendChild(opt);
    // opt.addEventListener("click", (e) => {
    //   (articles as Element).innerHTML = "";
    //   console.log(e.target);
    //   // loadData(countryCodes[countryNames.indexOf(cn)]);
    // });
  }
}

// fetchNews();

(async function () {
  renderOptions();
})();
