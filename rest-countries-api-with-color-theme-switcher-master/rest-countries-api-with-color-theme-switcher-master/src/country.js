const countryContainer = document.querySelector('main')
const countryName = new URLSearchParams(location.search).get('name')
const flagImg = document.querySelector('.data-container img')
const borderCountry=document.querySelector('.border-country')
const div2=document.createElement('div')
div2.classList.add("border-country")
div2.innerText=`Border Countries: `
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then(res => res.json()).then((data) => {
  // console.log(Object.values(data[0].languages))
  let currency;
  if (data[0].currencies) {
    currency = Object.values(data[0].currencies).map((currency) => currency.name).join(', ')
  } else {
    currency = undefined;
  }
  if (data[0].borders) {
    data[0].borders.forEach((border) => {
      // console.log(border)
      fetch(`https://restcountries.com/v3.1/alpha/${border}`).then(res => res.json()).then((borderCountries) => {
        console.log(borderCountries)
        const borderCountryTag=document.createElement('a')
        borderCountryTag.classList.add("borderOn")
        borderCountryTag.href=`country.html?name=${borderCountries[0].name.common}`
        borderCountryTag.innerText=borderCountries[0].name.common
        console.log(borderCountries)

        div2.append(borderCountryTag)
      })
    })
  }
  const div = document.createElement('div');
  div.classList.add('countries-container')
  div.innerHTML = `
        <div class="back" onclick="history.back()"><i class="fa-sharp-duotone fa-solid fa-arrow-left"></i>&nbsp; &nbsp;Back</div>
        </div>
        <div class="countries-container secondContainer">
            <div class="data-container">
              <img src="${data[0].flags.svg}" alt="flag">
            <div class="text-data">
               <h2 class="country-name"><b> ${data[0].name.common}</b></h2><br>
              <p><b>Native Name:</b> ${Object.values(data[0].name.nativeName)[0].common}</p>
              <p><b>Population:</b> ${data[0].population.toLocaleString('en-IN')}</p>
              <p><b>Currenies:</b> ${currency}</p>
              <p><b>Language:</b> ${Object.values(data[0].languages).join(", ")}</p>
              <p><b>Region:</b> ${data[0].region}</p>
              <p><b>Sub Region:</b> ${data[0].subregion}</p>
              <p><b>Top Level Domain:</b> ${data[0].tld.join(", ")}</p>
              <p><b>Capital:</b> ${data[0].capital?.[0]}</p>
            </div>
            </div>
           
    `
  countryContainer.appendChild(div)
  countryContainer.appendChild(div2)
})

