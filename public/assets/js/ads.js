// ~ DECLARATIONS
const adsBtn = $("#ads-btn");
const adsBudget = $("#ads-budget");
// const adsPrice = $("#ads-price");
const adSubject = $("#ads-subject");
const adsDescription = $("#ads-description");
const adsTitle = $("#ads-title");

const handleFormSubmit = async (event) => {
  // prevent url form default
  event.preventDefault();

  // get input from form
  const title = $("#ads-title").val();
  const description = $("#ads-description").val();
  const subject = $("#ads-subject").val();
  const budget = $("#ads-budget").val();
  const btnContainer = $("#btn-container");
  //   const price = $("#ads-price").val();

  // verification user input for all fields
  if (title && description && subject && budget) {
    try {
      // create payload
      const payload = {
        description,
        subject,
        budget,
      };
      console.log(payload);

      //   create response
      const response = await fetch("/views/createAds", {
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
    <p> Please complete all the fields </p>
</div>`);
  }
};

// submit event handler for ads summit button
adsBtn.click(handleFormSubmit);
