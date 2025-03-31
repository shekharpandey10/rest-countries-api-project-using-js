const countryContainer = document.querySelector('main')
const countryName = new URLSearchParams(location.search).get('name')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then(res => res.json()).then((data) => {
  console.log(data[0])
  const div = document.createElement('div');
  div.classList.add('countries-container')
  div.innerHTML = `
        <div class="back"><i class="fa-sharp-duotone fa-solid fa-arrow-left"></i>&nbsp; &nbsp;Back</div>
        </div>
        <div class="countries-container secondContainer">
            <div class="data-container">
              <img src="https://flagcdn.com/gd.svg" alt="flag">
            <div class="text-data">
               <h2 class="country-name"><b> ${data[0].name.nativeName.eng.official}</b></h2><br>
              <p><b>Native Name:</b> ${data[0].name.common}</p>
              <p><b>Population:</b> ${data[0].population}</p>
              <p><b>Currenies:</b> ${data[0]}</p>
              <p><b>Region:</b> ${data[0].region}</p>
              <p><b>Language:</b> ${data[0].languages.eng}</p>
              <p><b>Sub Region:</b> ${data[0].subregion}</p>
              <p><b>Capital:</b> ${data[0].capital}</p>
            </div>
            </div>
            <span>Border Countries:
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </span>
    `
  countryContainer.appendChild(div)
})
document.addEventListener('DOMContentLoaded', () => {
  const backButton = document.querySelector('.back')
  if (backButton) {
    backButton.addEventListener('click', () => {
      window.history.back()
    })
  }
})
