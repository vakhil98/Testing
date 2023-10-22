const script = require('./script.js');

describe('Survey App', () => {
  // Test for the hideAll function
  test('hideAll should hide all sections', () => {
    // Set up the initial HTML structure with sections
    document.body.innerHTML = `
      <div id="diabetes-section"></div>
      <div id="gender-diet-section"></div>
      <div id="allergies-section"></div>
    `;

    // Call the hideAll function
    script.hideAll();

    // Check if all sections are hidden
    expect(document.getElementById('diabetes-section').style.display).toBe('none');
    expect(document.getElementById('gender-diet-section').style.display).toBe('none');
    expect(document.getElementById('allergies-section').style.display).toBe('none');
  });

  // Test for the handleCheckboxSelection function
  test('handleCheckboxSelection should update checkbox states', () => {
    // Set up the initial HTML structure with checkboxes
    document.body.innerHTML = `
      <input type="checkbox" name="allergies" value="None">
      <input type="checkbox" name="allergies" value="Allergy1">
      <input type="checkbox" name="allergies" value="Allergy2">
    `;

    // Call the handleCheckboxSelection function
    script.handleCheckboxSelection("allergies", "None");

    // Check if checkbox states are updated as expected
    expect(document.querySelector('input[value="None"]').checked).toBe(true);
    expect(document.querySelector('input[value="Allergy1"]').disabled).toBe(true);
    expect(document.querySelector('input[value="Allergy2"]').disabled).toBe(true);
  });

  // Test for the showGenderDietSection function
  test('showGenderDietSection should display gender-diet section', () => {
    // Set up the initial HTML structure with sections
    document.body.innerHTML = `
      <div id="diabetes-section" style="display: block"></div>
      <div id="gender-diet-section" style="display: none"></div>
    `;

    // Call the showGenderDietSection function
    script.showGenderDietSection();

    // Check if gender-diet section is displayed
    expect(document.getElementById('diabetes-section').style.display).toBe('none');
    expect(document.getElementById('gender-diet-section').style.display).toBe('block');
  });
});
