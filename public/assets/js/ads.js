// const { Subject } = require("../../../src/models");

// ~ DECLARATIONS
const adsBtn = $("#ads-btn");
const adsBudget = $("#ads-budget");
const adSubject = $("#ads-subject");
const adsDescription = $("#ads-description");
const adsTitle = $("#ads-title");

// fn to handle form submit
const handleFormSubmit = async (event) => {
  console.log("form fn");
  // prevent url form default
  event.preventDefault();

  // get input from form
  const title = $("#ads-title").val();
  const description = $("#ads-description").val();
  const subject = $("#ads-subject").val();
  const budget = $("#ads-budget").val();
  const btnContainer = $("#btn-container");

  // verification user input for all fields
  if (title && description && subject && budget) {
    try {
      // get subjects from subjects db

      getSubjects();

      // create payload
      const payload = {
        description,
        subject,
        budget,
      };

      //   create response
      const response = await fetch("/api/ad/", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(`[ERROR]: Failed to create an ad | ${error.message}`);
    }
  } else {
    btnContainer.append(`<div class="uk-alert-danger" uk-alert>
    <a class="uk-alert-close" uk-close></a>
    <p> Please complete all fields </p>
</div>`);
  }
};

// submit event handler for ads summit button
adsBtn.click(handleFormSubmit);
