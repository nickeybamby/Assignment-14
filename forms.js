document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        // Validate patient's name
        const patientNameInput = document.getElementById('patient_name');

        patientNameInput.addEventListener('input', function () {
          const inputValue = patientNameInput.value;
          const lettersOnly = /^[A-Za-z]+$/;
  
          if (!lettersOnly.test(inputValue)) {
            patientNameInput.value = inputValue.replace(/[^A-Za-z]/g, '');
          }
        });

        // validate patients age
        const ageInput = document.getElementById('patient_age');
        if (isNaN(ageInput.value) || ageInput.value <= 0) {
            alert('Please enter a valid age.');
            event.preventDefault();
            return false;
        }

        //validating  home address
        const addressInput = document.getElementById('home_address');
        if (!addressInput.value.trim()) {
            alert('Please enter the home address.');
            event.preventDefault();
            return false;
        }

        //phone number validation
        const phoneNumberInput = document.getElementById('phone_number');
        const phoneNumberRegex = /^\d{10}$/; 
        if (!phoneNumberRegex.test(phoneNumberInput.value)) {
            alert('Please enter a valid 10-digit phone number.');
            event.preventDefault();
            return false;
        }

        const pregnancyTestResult = document.getElementById('pregnancy_test_results').value;
        const pregnancyWeeksInput = document.getElementById('pregnancy_weeks');
        if (pregnancyTestResult === 'positive' && (isNaN(pregnancyWeeksInput.value) || pregnancyWeeksInput.value < 1)) {
            alert('Please enter a valid number of weeks for pregnancy.');
            event.preventDefault();
            return false;
        }

        //valdiate if at least one reason for the exam is checked
        const reasonsForExamCheckboxes = document.querySelectorAll('input[name="reason_for_exam"]:checked');
        if (reasonsForExamCheckboxes.length === 0) {
            alert('Please select at least one reason for the exam.');
            event.preventDefault();
            return false;
        }

        // date of test validation
        const testDateInput = document.getElementById('test_date');
        if (!testDateInput.value) {
            alert('Please select the date of the test.');
            event.preventDefault();
            return false;
        }

    
        return true;
    });
});
