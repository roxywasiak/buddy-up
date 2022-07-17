// const { Subject } = require("../../../src/models");

// ~ DECLARATIONS
const adsBtn = $("#ads-btn");
const adsBudget = $("#ads-budget");
const adSubject = $("#ads-subject");
const adsDescription = $("#ads-description");
const adsTitle = $("#ads-title");

const alertMessage = `<div class="uk-alert-danger" uk-alert id="alert-div">
<a class="uk-alert-close" uk-close></a>
<p> Please complete all fields </p>
</div>`;

// fn to handle form submit
const handleFormSubmit = async (event) => {
  // remove alert message
  // prevent url form default
  event.preventDefault();

  // get input from form
  const title = $("#ads-title").val();
  const description = $("#ads-description").val();
  const subjectId = $("#ads-subject").val();
  const priceId = $("#ads-budget").val();
  const btnContainer = $("#btn-container");

  // verification user input for all fields
  if (title && description && subjectId && priceId) {
    try {
      // create payload
      const payload = {
        isTutor: false,
        description,
        subjectId,
        priceId,
      };

      //   create response
      const response = await fetch("/api/ad/", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // return the response
      const data = await response.json();

      // validation for duplicate error
      if (data) {
      }
    } catch (error) {
      console.log(`[ERROR]: Failed to create an ad | ${error.message}`);
    }
  } else {
    // append alert div
    const alert = document.querySelector("#alert-div");
    if (!alert) {
      btnContainer.append(alertMessage);
    }
  }
};

// submit event handler for ads summit button
adsBtn.click(handleFormSubmit);
