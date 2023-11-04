const TOKEN = import.meta.env.VITE_TOKEN;

const newsAPISection = document.querySelector(".news-api");
const articles = document.querySelector(".articles");
const selectCountries = document.querySelector("#select-countries");
const selectionMenuWrapper = document.querySelector(".selection-wrapper");
const articlesGrid = document.querySelector(".articles");
const selectEndpoints = document.querySelector("#select-endpoints");
const submitBtn = document.querySelector("#submit");

async function fetchJson(endpoint: string) {
  const data = await fetch(`./src/json/${endpoint}.json`);
  return await data.json();
}

async function fetchNews(cfg: { cn: string; cc: string; ep: string }) {
  // if (cfg.cn === "Select" || cfg.ep === "Select") {
  //   return;
  // }

  // const data = await fetch(
  //   `https://newsapi.org/v2/${cfg.ep}?country=${cfg.cc}&apiKey=${TOKEN}`
  // );

  // const res = await data.json();

  // renderArticles(res);

  const mockRes = {
    status: "ok",
    totalResults: 2,
    articles: [
      {
        source: {
          id: "TEST ID",
          name: "TEST SOURCE NAME",
        },
        author: "TEST AUTHOR",
        title: "TEST TITLE",
        description: "TEST DESCRIPTION",
        url: "https://youtube.com",
        urlToImage:
          "https://images.immediate.co.uk/production/volatile/sites/3/2023/04/naruto-762b09d.jpg?quality=90&resize=556,370",
        publishedAt: "TEST PUBLISHED AT",
        content: "TEST CONTENT",
      },
      {
        source: {
          id: "TEST ID",
          name: "TEST SOURCE NAME",
        },
        author: "TEST AUTHOR",
        title: "TEST TITLE",
        description: "TEST DESCRIPTION",
        url: "https://google.com",
        urlToImage:
          "https://static.wikia.nocookie.net/naruto/images/d/dc/Naruto%27s_Sage_Mode.png/revision/latest/scale-to-width-down/1920?cb=20150124180545TEST URL TO IMAGE",
        publishedAt: "TEST PUBLISHED AT",
        content: "TEST CONTENT",
      },
      {
        source: {
          id: "TEST ID",
          name: "TEST SOURCE NAME",
        },
        author: "TEST AUTHOR",
        title: "TEST TITLE",
        description: "TEST DESCRIPTION",
        url: "https://google.com",
        urlToImage:
          "https://static.wikia.nocookie.net/naruto/images/d/dc/Naruto%27s_Sage_Mode.png/revision/latest/scale-to-width-down/1920?cb=20150124180545TEST URL TO IMAGE",
        publishedAt: "TEST PUBLISHED AT",
        content: "TEST CONTENT",
      },
      {
        source: {
          id: "TEST ID",
          name: "TEST SOURCE NAME",
        },
        author: "TEST AUTHOR",
        title: "TEST TITLE",
        description: "TEST DESCRIPTION",
        url: "https://google.com",
        urlToImage:
          "https://static.wikia.nocookie.net/naruto/images/d/dc/Naruto%27s_Sage_Mode.png/revision/latest/scale-to-width-down/1920?cb=20150124180545TEST URL TO IMAGE",
        publishedAt: "TEST PUBLISHED AT",
        content: "TEST CONTENT",
      },
      {
        source: {
          id: "TEST ID",
          name: "TEST SOURCE NAME",
        },
        author: "TEST AUTHOR",
        title: "TEST TITLE",
        description: "TEST DESCRIPTION",
        url: "https://google.com",
        urlToImage:
          "https://static.wikia.nocookie.net/naruto/images/d/dc/Naruto%27s_Sage_Mode.png/revision/latest/scale-to-width-down/1920?cb=20150124180545TEST URL TO IMAGE",
        publishedAt: "TEST PUBLISHED AT",
        content: "TEST CONTENT",
      },
      {
        source: {
          id: "TEST ID",
          name: "TEST SOURCE NAME",
        },
        author: "TEST AUTHOR",
        title: "TEST TITLE",
        description: "TEST DESCRIPTION",
        url: "https://google.com",
        urlToImage:
          "https://static.wikia.nocookie.net/naruto/images/d/dc/Naruto%27s_Sage_Mode.png/revision/latest/scale-to-width-down/1920?cb=20150124180545TEST URL TO IMAGE",
        publishedAt: "TEST PUBLISHED AT",
        content: "TEST CONTENT",
      },
      {
        source: {
          id: "TEST ID",
          name: "TEST SOURCE NAME",
        },
        author: "TEST AUTHOR",
        title: "TEST TITLE",
        description: "TEST DESCRIPTION",
        url: "https://google.com",
        urlToImage:
          "https://static.wikia.nocookie.net/naruto/images/d/dc/Naruto%27s_Sage_Mode.png/revision/latest/scale-to-width-down/1920?cb=20150124180545TEST URL TO IMAGE",
        publishedAt: "TEST PUBLISHED AT",
        content: "TEST CONTENT",
      },
      {
        source: {
          id: "TEST ID",
          name: "TEST SOURCE NAME",
        },
        author: "TEST AUTHOR",
        title: "TEST TITLE",
        description: "TEST DESCRIPTION",
        url: "https://google.com",
        urlToImage:
          "https://static.wikia.nocookie.net/naruto/images/d/dc/Naruto%27s_Sage_Mode.png/revision/latest/scale-to-width-down/1920?cb=20150124180545TEST URL TO IMAGE",
        publishedAt: "TEST PUBLISHED AT",
        content: "TEST CONTENT",
      },
    ],
  };

  renderArticles(mockRes);
}

function loadCountryDropdown(values: {
  values: { name: string; flag: string; cc: string }[];
  cfg: { elementString: string; element: Element };
}) {
  for (let v of values.values) {
    let opt = document.createElement(values.cfg.elementString);
    opt.classList.add(v.cc);
    opt.textContent = `${v.name} (${v.flag})`;
    values.cfg.element.appendChild(opt);
  }
}

function loadEndpointDropdown(values: {
  values: string[];
  cfg: { elementString: string; element: Element };
}) {
  for (let v of values.values) {
    let opt = document.createElement(values.cfg.elementString);
    opt.textContent = `${v}`;
    values.cfg.element.appendChild(opt);
  }
}

function loadData(f: Function, config: {}) {
  f(config);
}

function renderArticles(res: {
  status: string;
  totalResults: number;
  articles: {
    source: { id: string; name: string };
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    author: string;
    content: string;
  }[];
}) {
  let results = document.createElement("p");
  results.textContent = `${res.totalResults} results`;
  (selectionMenuWrapper as Element).appendChild(results);
  for (let article of res.articles) {
    let art = document.createElement("article");
    let title = document.createElement("h3");
    let description = document.createElement("h4");
    let url = document.createElement("a");
    let publishedAt = document.createElement("p");
    let urlToImage = document.createElement("img");
    let author = document.createElement("p");
    let content = document.createElement("p");

    title.textContent = article.title;
    description.textContent = article.description;
    url.textContent = article.source.name;
    url.href = article.url;
    urlToImage.src = article.urlToImage;
    publishedAt.textContent = article.publishedAt;
    publishedAt.classList.add("published-at");
    author.textContent = article.author;
    author.classList.add("author");
    content.textContent = article.content;

    art.appendChild(title);
    art.appendChild(description);
    art.appendChild(url);
    art.appendChild(publishedAt);
    art.appendChild(urlToImage);
    art.appendChild(author);
    art.appendChild(content);

    articlesGrid?.appendChild(art);
  }
}

async function renderOptions() {
  const countryData = await fetchJson("country_codes");
  const endpointData = await fetchJson("endpoints");

  loadData(loadCountryDropdown, {
    values: Object.values(countryData),
    cfg: { elementString: "option", element: selectCountries as Element },
  });

  loadData(loadEndpointDropdown, {
    values: endpointData,
    cfg: { elementString: "option", element: selectEndpoints as Element },
  });
}

(async function () {
  renderOptions();

  submitBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    const countryData = selectCountries as HTMLSelectElement;

    fetchNews({
      cn: (selectCountries as HTMLSelectElement).value.split("(")[0],
      cc: countryData.options[countryData.selectedIndex].classList[0],
      ep: (selectEndpoints as HTMLSelectElement).value as string,
    });
  });

  articles?.addEventListener("mouseover", (e) => {
    console.log(e);
  });
})();
