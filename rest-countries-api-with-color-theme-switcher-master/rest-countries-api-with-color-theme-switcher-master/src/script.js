const countriesContainer = document.querySelector('.countries-container')
const regionFilter=document.querySelector('#region')
const searchBar=document.querySelector('.search-bar')
let allCountriesData
fetch('https://restcountries.com/v3.1/all').then((res) => res.json()).then((data) => {
    renderCountries(data)
    allCountriesData=data
})


const countryCard = document.createElement('a')
countryCard.classList.add('country')
countryCard.innerHTML = `
      <img src="https://flagcdn.com/gd.svg" alt="flag">
                <div class="card-text">
                <h3 class="card-title">Grenada</h3>
                <p><b>Population:</b>112519</p>
                <p><b>Region:</b></p>
                <p><b>Capital:</b></p>
                </div>
`

regionFilter.addEventListener('change',(e)=>{
    fetch(`https://restcountries.com/v3.1/region/${regionFilter.value}`).then((res) => res.json()).then((data) => renderCountries(data))
})

function renderCountries(data){   //pass the array
    countriesContainer.innerHTML=``
    data.forEach((country) => {
        const countryCard = document.createElement('a')
        countryCard.classList.add('country')
          countryCard.href=`./country.html?name=${country.name.common}`
        countryCard.innerHTML = `
                  <img src="${country.flags.svg}" alt=${country.name.common}>
                            <div class="card-text">
                            <h2 class="card-title">${country.name.common}</h2>
                            <p><b>Population:</b>${country.population.toLocaleString('en-IN')}</p>
                            <p><b>Region:</b>${country.region}</p>
                            <p><b>Capital:</b>${country.capital?.[0]}</p>
                            </div>
            `
        countriesContainer.append(countryCard)
    })
}

searchBar.addEventListener('input',(e)=>{
    console.log(e.target.value)
    console.log(allCountriesData)
  const serchedCountry=allCountriesData.filter((country)=>country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
  console.log(serchedCountry)
  renderCountries(serchedCountry)
})