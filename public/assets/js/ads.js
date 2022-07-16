// const { Subject } = require("../../../src/models");

// ~ DECLARATIONS
const adsBtn = $("#ads-btn");
const adsBudget = $("#ads-budget");
const adSubject = $("#ads-subject");
const adsDescription = $("#ads-description");
const adsTitle = $("#ads-title");

// function to get fetch data from subject api
const getSubjects = async () => {
  console.log("hi");
  // send a GET request to get subjects from subject API
  try {
    const response = await fetch("api/subject/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    console;
    // send query for all subjects

    const subjects = await Subject.findAll();
  } catch (error) {
    console.log(
      `[ERROR]: Failed to create get subjects from API| ${error.message}`
    );
  }
};
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
