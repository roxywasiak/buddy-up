// ~ DECLARATIONS
const adsBtn = $("#ads-btn");
const adsBudget = $("#ads-budget");
const adSubject = $("#ads-subject");
const adsDescription = $("#ads-description");
const adsTitle = $("#ads-title");
const alertContainer = $("#error-message");

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
        title,
        isTutor: false,
        description,
        subjectId,
        priceId,
      };

      // display spinner on page

      // setInterval(() => {
      //   clearInterval(alertContainer);
      //   alertContainer.append(`<div uk-spinner></div>`);
      // }, 0);

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
      if (!response.ok) {
        alertContainer.empty()
          .append(`<div class="uk-alert-danger" uk-alert id="alert-div"> <a class="uk-alert-close" uk-close></a>
          <p> Duplicate Subject  </p>
          </div>`);
      }

      // render page when data response status is ok
      if (response.ok) {
        // display spinner before page load

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

    alertContainer.empty()
      .append(`<div class="uk-alert-danger" uk-alert id="alert-div"> <a class="uk-alert-close" uk-close></a>
      <p> Please complete all fields </p>
      </div>`);
  }
};

// submit event handler for ads summit button
adsBtn.click(handleFormSubmit);
