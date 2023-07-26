// we select the output elements
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");
const submit_btn = document.querySelector(".submit-btn");
// INPUT ELEMENTS
let isValid = false;
const input_year = document.querySelector("#year");
const input_day = document.querySelector("#day");
const input_month = document.querySelector("#month");
// const submit_btn = document.querySelector(".submit-btn");
// ERROR ELEMENTS
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");
submit_btn.addEventListener("click", CalculateDate);
input_day.addEventListener("input", (e) => {
  if (+input_day.value > 31) {
    error_day.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_day.textContent = "";
  }
  if (+input_day.value === 0) {
    isValid = false;
    error_day.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    error_day.textContent = "";
  }
});

input_month.addEventListener("input", (e) => {
  if (+input_month.value > 12) {
    error_month.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_month.textContent = "";
  }
  if (+input_month.value === 0) {
    isValid = false;
    error_month.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    error_month.textContent = "";
  }
});

input_year.addEventListener("input", (e) => {
  if (+input_year.value > 2023) {
    error_year.textContent = "Must be a valid date";
    isValid = false;
    return;
  } else {
    isValid = true;
    error_year.textContent = "";
  }
  if (+input_year.value === 0) {
    isValid = false;
    error_year.textContent = "This field is required";
    isValid = false;
    return;
  } else {
    error_year.textContent = "";
  }
});

function CalculateDate() {

  if (isValid) {
    //----------------todaysyear(currentyear)---------
    let today_year = new Date().getFullYear();
    let today_month = new Date().getMonth() + 1;
    let today_Date = new Date().getDate();


    // ------------birthday_year----------------
    let birthday_year = `${input_year.value}`
    let birthday_month = `${input_month.value}`
    let birthday_day = `${input_day.value}`

    //---ageyear

    // calculate exact year gap
    var years;
    if (today_month > birthday_month ||
      (today_month == birthday_month &&
        today_Date >= birthday_day
      )
    ) {
      years = today_year - birthday_year;
    }
    else {
      years = today_year - birthday_year - 1;
    }

    // let ageYears = today_year - birthday_year;

    //---agemonth
    let ageMonth;
    if (today_month > birthday_month) {

      ageMonth = today_month - birthday_month
    }
    else {
      ageMonth = 12 + today_month - birthday_month;

    }
    //if month is equal improve age and month to zero
   

    // ----ageday

    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let ageday;

    // if(birthday_day == today_Date){

    //   ageday = 0;
    // }

    if (today_Date >= birthday_day) {

      ageday = today_Date - birthday_day;


    } else {
      ageday = today_Date - birthday_day + months[birthday_month - 1]
    }


    ///----
    //display

    output_year.textContent = years;
    output_month.textContent = ageMonth;
    output_day.textContent = ageday;




  }
  //   console.log(birthday);
  //   let birthdayObj = new Date(birthday).getTime();
  //   console.log(birthdayObj)
  //   let ageDiffMill = Date.now() - birthdayObj;

  //   let ageDate = new Date(ageDiffMill);
  //   let ageYears = ageDate.getUTCFullYear() - 1970;
  //   let ageMonth = ageDate.getUTCMonth();
  //   let ageDay = ageDate.getUTCDay();
  //   // DISPLAYING EVERYTHING
  //   output_day.textContent = ageDay;
  //   output_month.textContent = ageMonth;
  else {
    alert("error");
  }
}

