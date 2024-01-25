// Get DOM elements
let rate1 = document.querySelector(".rate1");
let rate2 = document.querySelector(".rate2");
let resultBtn = document.querySelector(".result");
let selects = document.querySelectorAll(".options select");
let sel1 = selects[0];
let sel2 = selects[1];
let inputs = document.querySelectorAll(".input input");
let inpt1 = inputs[0];
let inpt2 = inputs[1];

// Create empty object to hold exchange rates
let rates = {};

// URL for API request
let requestURL = "https://api.exchangerate.host/latest?base=USD";

// Call function to fetch exchange rates from API
fetchRates();

async function fetchRates(){
  // Fetch exchange rates from API
  let res = await fetch(requestURL);
  // Parse response as JSON
  res = await res.json();
  // Store exchange rates in rates object
  rates = res.rates;
  // Populate options for currency selectors
  populateOptions();
}

function populateOptions(){
  let val = "";
  // Loop through each exchange rate in rates object
  Object.keys(rates).forEach(code =>{
    // Create HTML option element for each exchange rate
    let str = `<option value="${code}">${code}</option>`
    val += str;
  })
  // Add options to currency selectors
  selects.forEach((s) => (s.innerHTML = val));
}

function convert(val, fromCurr, toCurr){
  // Calculate exchange rate from fromCurr to toCurr
  let v = (val/rates[fromCurr])*rates[toCurr];
  // Format result as string with 3 decimal places (or 5 if result is 0)
  let v1 = v.toFixed(3);
  return v1 = 0.0 ? v.toFixed(5) : v1;
}

function displayRate(){
  // Get selected currencies
  let v1 = sel1.value;
  let v2 = sel2.value;
  // Calculate exchange rate from v1 to v2
  let val = convert(1, v1, v2);
  // Display exchange rate
  rate1.innerHTML = `1 ${v1} equals`;
  rate2.innerHTML = `${val} ${v2}`;
}

// Add event listener to Result button
resultBtn.addEventListener("click", ()=>{
  // Get input values
  let fromCurr = sel1.value;
  let fromVal = parseFloat(inpt1.value);
  let toCurr = sel2.value;
  // Convert input value from fromCurr to toCurr
  if(isNaN(fromVal)){
    alert("Please enter a number");
  }else{
    let cVal = convert(fromVal, fromCurr, toCurr);
    inpt2.value = cVal;
  }
});

// Add event listener to currency selectors
selects.forEach(s=>s.addEventListener("change", displayRate));

// Add event listener to Swap button
document.querySelector(".swap").addEventListener("click", ()=>{
  // Swap input values and currency selectors
  let in1 = inpt1.value;
  let in2 = inpt2.value;
  let op1 = sel1.value;
  let op2 = sel2.value;

  inpt2.value = in1;
  inpt1.value = in2;

  sel2.value = op1;
  sel1.value = op2;

  // Update exchange rate
  displayRate();
});
