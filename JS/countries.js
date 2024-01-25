function redirect(a) {
    const countryCard = a.closest('.country');
    
    // Get the selected country description and name
    const countryDesc = countryCard.querySelector('.desc').innerHTML;
    const countryName = countryCard.querySelector('.countryname').textContent;

    // Store the country information in localStorage
    localStorage.setItem('selectedCountryName', countryName);
    localStorage.setItem('selectedCountryDesc', countryDesc);
}