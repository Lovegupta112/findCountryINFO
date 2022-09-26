

      let search = document.getElementById("search");
      function searching() {
        let country = document.querySelector("#country").value;
        let names =country;
        console.log(country);
        let container = document.querySelector("#container");
        const resquest = new XMLHttpRequest();
        resquest.open("get", `https://restcountries.com/v2/name/${names}`);
        resquest.send();

        resquest.addEventListener("load", function () {
          // console.log(this.responseText);
          const [data] = JSON.parse(this.responseText);
          console.log(data);
          const htmlData = ` <div class="card">
        <header class="first">
          <img src="${data.flag}" alt="country logo" />
          <h1>${data.name}</h1>
          <p>${data.capital}</p>
        </header>
        <footer class="second">
          <div id="native">
            <h3>${data.languages[0].name}</h3>
            <p>native language</p>
          </div>
          <div id="population">
            <h3>${data.population}</h3>
            <p>population</p>
          </div>
          <div id="currency">
            <h3>${data.currencies[0].name}</h3>
            <p>C
                urrency</p>
          </div>
        </footer>
      </div> `;

          container.insertAdjacentHTML("beforeend", htmlData);
        });
      }

      search.addEventListener("click", searching);