window.onload = function () {
  let weather = {
    apiKey: "2623baf960bf05f4b2068b9df007f84f",
    // Function to fetch weather data from the API
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=" +
          this.apiKey
      )
        .then((response) => response.json())
        .then((data) => this.displayweather(data)); // Call displayweather with the weather data
    },
    // Function to display weather data on the page
    displayweather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      // Convert temperature from Kelvin to Celsius
      const celsiusTemp = temp - 273.15;

      console.log(name, icon, description, celsiusTemp, humidity, speed);
      // Update the DOM elements with weather data
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = celsiusTemp.toFixed(1) + "°C";
      document.querySelector(".humidity").innerText = "Humidity:     " + humidity + "%";
      document.querySelector(".wind").innerText = "Wind speed:     " + speed + "km/h";
      document.querySelector(".weather").classList.remove("loading");
    },
    // Function to handle the search functionality
    search: function () {
      console.log("search function called");
      // Get the value from the search bar input
      const searchInput = document.querySelector(".search-bar").value;
      // Fetch weather data for the entered city
      this.fetchWeather(searchInput);
    },
  };

  // Event listener for the search bar input (keypress event)
  document.querySelector(".search-bar").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      // Trigger the search function when Enter key is pressed
      weather.search();
    }
  });

  // Event listener for the search button (click event)
  document.querySelector("button").addEventListener("click", function () {
    // Trigger the search function when the button is clicked
    weather.search();
  });

  // Call the initial weather search when the page loads
  weather.search();
};
