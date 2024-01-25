const addPlanbtn = document.querySelector('#addplanbtn');
const donebtn = document.querySelector('#donebtn');
const cancelbtn = document.querySelector('#cancelbtn');
const tab = document.querySelector('#addtab');
const plansContainer = document.querySelector('#plans');
const inplanName = document.getElementById('planNameInput');
const stDate = document.getElementById('stDateIn');
const endDate = document.getElementById('endDateIn');
const mainDelPlanbtn = document.getElementById('delplanbtn');
const editbtn = document.getElementById('editbtn');
const addToPlanbtns = document.querySelectorAll('.addToPlanbtn');


// Retrieve the country information from localStorage
const selectedCountryName = localStorage.getItem('selectedCountryName');
const selectedCountryDesc = localStorage.getItem('selectedCountryDesc');
const selectedListName = localStorage.getItem('selectedListName');
const selectedListItems = localStorage.getItem('selectedListItems');
// Clear the stored country information from localStorage
localStorage.clear();

// function to handle add here plan button click
function handelAddhereDesc(event) {
    const planCard = event.target.closest('.plancard');
    if (planCard && (selectedCountryName != null || selectedCountryDesc != null)) {

        // Update the plan card with the selected country description and name
        const countryNameSpan = planCard.querySelector('.countryName');
        const countryDescDiv = planCard.querySelector('.desc');

        countryNameSpan.textContent += ' - ' + selectedCountryName;
        countryDescDiv.innerHTML += selectedCountryDesc;
    }

}

// Add event listener to handle add here plan button click
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('addHereDescbtn')) {
        handelAddhereDesc(event);
    }
});

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('addHereListbtn')) {
        handelAddHereList(event);
    }
})

function handelAddHereList(event) {
    const planCard = event.target.closest('.plancard');
    if (planCard && (selectedListName != null || selectedListItems != null)) {
        const listNamePlace = planCard.querySelector('.listName');
        const list = planCard.querySelector('.list');

        listNamePlace.textContent = selectedListName;
        list.innerHTML = selectedListItems;
    }

}







// Add event listener to handle add plan button click
addPlanbtn.addEventListener('click', function () {
    tab.classList.remove('hide');
});

// Add event listener to handle cancel button click
cancelbtn.addEventListener('click', function () {
    tab.classList.add('hide');
    inplanName.value = "";
    stDate.value = "";
    endDate.value = "";
});

// Add event listener to handle done button click
donebtn.addEventListener('click', function () {
    if (tabValid()) {
        const plansContainer = document.querySelector('#plans');
        tab.classList.add('hide');
        const planCard = createPlanCard();
        plansContainer.appendChild(planCard);
    }
    tab.classList.add('hide');
    inplanName.value = "";
    stDate.value = "";
    endDate.value = "";
})

// Add event listener to handle main delete plan button click
mainDelPlanbtn.addEventListener('click', function () {
    alert("'Please be careful, it's one click operation.")
    const allDelbtns = document.querySelectorAll('.deletePlanBtn');
    allDelbtns.forEach(btn => btn.classList.remove('hide'));

});

// Function to create a plan card element
function createPlanCard() {
    const planCard = document.createElement('div');
    planCard.className = 'plancard';
    planCard.innerHTML = `
      <h1>
        <span class="planName">${inplanName.value}</span><span class="countryName"></span>
      </h1>
      <div class="plandesc">
        <div class="countrydesc">
          <h4 class="dateRange">(${stDate.value}) - (${endDate.value})</h4>
          <button class="addHereDescbtn">Add here (country)</button>
          <a href="../HTMLs/Cities.html" class="exploreCountriesbtn">Explore Countries</a>
          <button class="deletePlanBtn hide">Delete</button>
        </div>
        <div class="packingchecklist">
            <h2 class="listName"></h2>
            <button class="addHereListbtn">Add here (list)</button>
            <ul class="list"></ul>
        </div>
        
      </div>
    `;
    return planCard;
}

// Function to handle delete plan button click
function handleDeletePlan(event) {
    const planCard = event.target.closest('.plancard');
    if (planCard) {
        planCard.remove();
    }
    const allDelbtns = document.querySelectorAll('.deletePlanBtn');
    allDelbtns.forEach(btn => btn.classList.add('hide'));
}

// Add event listener to handle delete plan button click
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('deletePlanBtn')) {
        handleDeletePlan(event);
    }
});


// Function to validate the inputs of the addtab
function tabValid() {
    var pnOK, stdtOK, eddtOK;

    if (inplanName.value == "") {
        pnOK = false;
        alert("Plan name shouldn't be empty!")
    } else {
        pnOK = true;
    }

    if (stDate.value == "") {
        stdtOK = false;
        alert("Start date shouldn't be empty!")
    } else {
        stdtOK = true;
    }

    if (endDate.value == "") {
        eddtOK = false;
        alert("End date shouldn't be empty!")
    } else {
        eddtOK = true;
    }

    return (pnOK && stdtOK && eddtOK);

}

//-------------------------------------------------------------------------------

