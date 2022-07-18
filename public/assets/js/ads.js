// const { Subject } = require("../../../src/models");

// ~ DECLARATIONS
const adsBtn = $("#ads-btn");
const adsBudget = $("#ads-budget");
const adSubject = $("#ads-subject");
const adsDescription = $("#ads-description");
const adsTitle = $("#ads-title");

// const alertMessage = `<div class="uk-alert-danger" uk-alert id="alert-div"> <a class="uk-alert-close" uk-close></a>
// <p> Please complete all fields </p>
// </div>`;

// fn to handle form submit
const handleFormSubmit = async (event) => {
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

      // validation for duplicates subject entry
      const alert = document.querySelector("#alert-div");
      if (!response.ok) {
        if (!alert) {
          btnContainer.append(`<div class="uk-alert-danger" uk-alert id="alert-div"> <a class="uk-alert-close" uk-close></a>
      <p> Ad already created for subject</p>
      </div>`);
        }
      }

      // render page when data response status is ok
      if (response.ok) {
        // display spinner before page load
        // <div uk-spinner></div>

        //  change window location
        window.location.assign("/viewAds");
      } else {
        renderError("response not ok ", "Failed to render page");
      }
    } catch (error) {
      console.log(`[ERROR]: Failed to create an ad | ${error.message}`);
    }
  } else {
    // append alert div
    const alert = document.querySelector("#alert-div");
    if (!alert) {
      btnContainer.append(`<div class="uk-alert-danger" uk-alert id="alert-div"> <a class="uk-alert-close" uk-close></a>
      <p> Please complete all fields </p>
      </div>`);
    }
  }
};

// submit event handler for ads summit button
adsBtn.click(handleFormSubmit);
