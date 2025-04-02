const countriesContainer = document.querySelector('.countries-container')


fetch('https://restcountries.com/v3.1/all').then((res) => res.json()).then((data) => {
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
