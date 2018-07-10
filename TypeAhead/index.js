const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const listOfCites = document.getElementById("list");
const input = document.getElementById("inputText");
const cities = [];

fetch(endpoint)
    .then(blob => blob.json()
    .then(data => cities.push(...data)));

function findMatchingCities(currentString)
{
    return cities.filter(place => {
        regex = new RegExp(currentString, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    });
}

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

function displayMatches()
{
    const matches = findMatchingCities(this.value);
    const html = matches.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `;
    }).join('');
    listOfCites.innerHTML = html;
}

input.addEventListener("change",displayMatches);
input.addEventListener("keyup",displayMatches);