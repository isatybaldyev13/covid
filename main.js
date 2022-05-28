const inputEl = document.getElementById("search_input")
const searchResultEl = document.getElementById("search-result")


let countryList = [];

const getCountryList = async function () {
  let response = await fetch("https://covid-api.mmediagroup.fr/v1/cases");
  let data = await response.json()
  countryList = Object.keys(data)
};

const onCountryClicked = e=>{
    let countryName = e.target.innerText
    inputEl.value=countryName
    searchResultEl.innerHTML=""
}


const renderResults = list =>{
    searchResultEl.innerHTML=""
    list.map(country=>{
        const liEl = document.createElement("li")
        liEl.innerText=country
        searchResultEl.appendChild(liEl)
    })
}


const searchCountry = e =>{
    let filteredList = countryList.filter(country=>{
        let value = e.target.value.toLowerCase()
        return country.slice(0, value.length).toLowerCase()===value
    })
    renderResults(filteredList)
    console.log("filteredList ", filteredList);
    //Tur
    //Tur kmenistan
}


inputEl.addEventListener("input",searchCountry)
searchResultEl.addEventListener("click",onCountryClicked)






getCountryList();
