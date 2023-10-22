document.addEventListener("DOMContentLoaded", function() {
    // Hide all sections initially
    hideAll();

    // Show the diabetes section initially
    document.getElementById('diabetes-section').style.display = 'block';

    document.querySelectorAll('input[name="allergies"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        handleCheckboxSelection("allergies", "None");
    });
    });

    document.querySelectorAll('input[name="conditions"]').forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            handleCheckboxSelection("conditions", "None");
        });
    });

    function handleCheckboxSelection(groupName, noneValue) {
        let noneCheckbox = document.querySelector(`input[name="${groupName}"][value="${noneValue}"]`);
        let otherCheckboxes = document.querySelectorAll(`input[name="${groupName}"]:not([value="${noneValue}"])`);
        
        if (noneCheckbox.checked) {
            otherCheckboxes.forEach(function(checkbox) {
                checkbox.checked = false;  
                checkbox.disabled = true;  
            });
        } else if (Array.from(otherCheckboxes).some(checkbox => checkbox.checked)) {
            noneCheckbox.checked = false;
            noneCheckbox.disabled = true;  
        } else {
            noneCheckbox.disabled = false;
            otherCheckboxes.forEach(function(checkbox) {
                checkbox.disabled = false;
            });
        }
    }

    // Add event listeners to diabetes section buttons
    let diabetesButtons = document.querySelectorAll('#diabetes-section .btn');
    diabetesButtons.forEach(button => {
        button.addEventListener('click', showGenderDietSection);
    });

    // Add event listeners to gender diet section buttons
    let dietButtons = document.querySelectorAll('#gender-diet-section .btn:not(.back-btn)');
    dietButtons.forEach(button => {
        button.addEventListener('click', showAllergiesSection);
    });
    
    // Add event listener to the single Continue button
    let continueBtn = document.getElementById('continue-button');
    continueBtn.addEventListener('click', showMealsSection); // Add this line
});



function hideAll() {
    document.getElementById('diabetes-section').style.display = 'none';
    document.getElementById('gender-diet-section').style.display = 'none';
    document.getElementById('allergies-section').style.display = 'none';
}

function showGenderDietSection() {
    hideAll();
    document.getElementById('gender-diet-section').style.display = 'block';
}

function showAllergiesSection() {
    hideAll();
    document.getElementById('allergies-section').style.display = 'block';
}

function addCustomAllergy() {
    let customFood = document.getElementById('food-input').value;
    if (customFood) {
        let foodButton = document.createElement('div');
        foodButton.innerHTML = customFood + " ✓";
        foodButton.className = 'button';
        document.getElementById('allergies-section').appendChild(foodButton);
        document.getElementById('food-input').value = ''; // reset input field
    }
}


function showPopup() {
    document.getElementById('allergy-popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('allergy-popup').style.display = 'none';
}

function addCustomAllergy() {
    let customAllergy = document.getElementById('new-allergy').value;
    if (customAllergy) {
        let label = document.createElement('label');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = 'allergies';
        checkbox.value = customAllergy;
        checkbox.checked = true; // mark it as selected
        label.appendChild(checkbox);
        label.innerHTML += " " + customAllergy;
        document.querySelector('.checkbox-group').appendChild(label);
        document.getElementById('new-allergy').value = ''; // reset input field
    }
    closePopup(); // close the modal
}

function goToRelativesSection() {
    // Check if "None" is selected
    const noneCheckbox = document.querySelector('input[value="None"]');
    const otherCheckboxes = document.querySelectorAll('input[name="allergies"]:not([value="None"])');
    
    let noneSelected = noneCheckbox.checked;
    let otherSelected = false;

    otherCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            otherSelected = true;
        }
    });

    if (!noneSelected && !otherSelected) {
        // Show a message to select something
        alert("Please select an allergy or choose 'None' before proceeding.");
    } else if (noneSelected) {
        // Disable other options if "None" is selected
        otherCheckboxes.forEach(checkbox => {
            checkbox.disabled = true;
        });
        // Proceed to the relatives section
        document.getElementById('allergies-section').style.display = 'none';
        document.getElementById('relatives-section').style.display = 'block';
    } else {
        // Proceed to the relatives section
        document.getElementById('allergies-section').style.display = 'none';
        document.getElementById('relatives-section').style.display = 'block';
    }
}

document.querySelectorAll('input[name="medical-details"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', handleMedicalDetailsSelection);
});

function goToBloodPressureSection() {
    // Hide relatives section
    document.getElementById('relatives-section').style.display = 'none';
    
    // Display other medical conditions section
    document.getElementById('blood-pressure-section').style.display = 'block';
}


function showOtherMedicalConditionsSection() {
    // Hide blood pressure section section
    document.getElementById('blood-pressure-section').style.display = 'none';
    
    // Display other medical conditions section
    document.getElementById('other-medical-condition-section').style.display = 'block';
}

var userSelectedOtherMedicalConditionsYes = false;

function showMedicalDetailsSection() {
    document.getElementById('other-medical-condition-section').style.display = 'none';
    document.getElementById('medical-details-section').style.display = 'block';
}

function gotoMealssection() {
    // Hide current section, based on which one is visible
    if (document.getElementById('other-medical-condition-section').style.display !== 'none') {
        document.getElementById('other-medical-condition-section').style.display = 'none';
    }
    if (document.getElementById('medical-details-section').style.display !== 'none') {
        document.getElementById('medical-details-section').style.display = 'none';
    }

    document.getElementById('meals-section').style.display = 'block';
}

function displaySection(sectionId) {
    document.getElementById(sectionId).style.display = 'block';
}

function hideCurrentSection(sectionId) {
    document.getElementById(sectionId).style.display = 'none';
}


function showActivitySection() {
    hideCurrentSection('meals-section');
    displaySection('activity-section');
}

function showAgeSection() {
    hideCurrentSection('activity-section');
    displaySection('age-section');
}

function showHeightSection() {
    hideCurrentSection('age-section');
    displaySection('height-section');
}

function showCurrentWeightSection() {
    var heightFt = document.getElementById('height-ft').value;
    var heightIn = document.getElementById('height-in').value;

    if (heightFt === '' && heightIn === '') {
        alert('Please enter your height.');
        return;
    }

    hideCurrentSection('height-section');
    displaySection('current-weight-section');
}

function showTargetWeightSection() {
    var currentWeight = document.getElementById('current-weight-input').value;

      if (currentWeight == ""){
        alert('Please enter your current weight');
        return;
    }
    hideCurrentSection('current-weight-section');
    displaySection('target-weight-section');  // Assuming you have this section
}


function checkWeightDifference() {
    var targetWeight = parseFloat(document.getElementById('target-weight-input').value);
    var currentWeight = parseFloat(document.getElementById('current-weight-input').value);

    if (isNaN(targetWeight)) {
        alert('Please enter your target weight or select "No change in weight".');
        return;
    }

    if (targetWeight > currentWeight) {
        alert('Target weight should be less than current weight.');
        return;
    }

    hideCurrentSection('target-weight-section');
    displaySection('thank-you-message'); 
}


function endSurveyNoChange() {
    hideCurrentSection('target-weight-section');
    displaySection('thank-you-message'); 
}

function goBackToDiabetesSection() {
    // Hide the current section
    document.getElementById('gender-diet-section').style.display = 'none';
    
    // Show the previous section
    document.getElementById('diabetes-section').style.display = 'block';
}


function goBackToGenderDietSection() {
    // Hide the current section
    document.getElementById('allergies-section').style.display = 'none';
    
    // Show the previous section
    document.getElementById('gender-diet-section').style.display = 'block';
}


function goBackToAllergiesSection() {
    // Hide the current section
    document.getElementById('relatives-section').style.display = 'none';
    
    // Show the previous section
    document.getElementById('allergies-section').style.display = 'block';
}

function goBackToRelativesSection() {
    // Hide the current section
    document.getElementById('blood-pressure-section').style.display = 'none';
    
    // Show the previous section
    document.getElementById('relatives-section').style.display = 'block';
}

function goBackToBloodPressureSection() {
    // Hide the current section
    document.getElementById('other-medical-condition-section').style.display = 'none';

    // Show the previous section
    document.getElementById('blood-pressure-section').style.display = 'block';
}

function goBackToOtherMedicalConditionsSection() {
    document.getElementById('medical-details-section').style.display = 'none';
    document.getElementById('other-medical-condition-section').style.display = 'block';
}

function goBackToMedicalDetailsSection() {
    document.getElementById('meals-section').style.display = 'none';
    document.getElementById('other-medical-condition-section').style.display = 'block';
}

function goBackToMealsSection() {
    document.getElementById('activity-section').style.display = 'none';
    document.getElementById('meals-section').style.display = 'block';
}

function goBackToActivitySection() {
    // Hide the current section
    document.getElementById('age-section').style.display = 'none';

    // Show the previous section
    document.getElementById('activity-section').style.display = 'block';
}

function goBackToAgeSection() {
    // Hide the current section
    document.getElementById('height-section').style.display = 'none';

    // Show the previous section
    document.getElementById('age-section').style.display = 'block';
}

function goBackToHeightSection() {
    // Hide the current section
    document.getElementById('current-weight-section').style.display = 'none';

    // Show the previous section
    document.getElementById('height-section').style.display = 'block';
}

function goBackToWeightSection() {
    // Hide the current section
    document.getElementById('target-weight-section').style.display = 'none';

    // Show the previous section
    document.getElementById('current-weight-section').style.display = 'block';
}

module.exports = {hideAll, handleCheckboxSelection, showGenderDietSection};


