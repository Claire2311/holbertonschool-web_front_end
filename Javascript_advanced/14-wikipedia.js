function createElement(data) {
  const p = document.createElement("p");
  p.innerHTML = data;
  document.body.appendChild(p);
}

function queryWikipedia(callback) {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      const response = JSON.parse(xhr.responseText);

      const pages = response.query.pages;
      const page = pages[Object.keys(pages)[0]];
      const extract = page.extract;

      callback(extract);
    } else {
      console.error("Request failed with status", xhr.status);
    }
  };
  xhr.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*"
  );
  xhr.send();
}

queryWikipedia(createElement);
