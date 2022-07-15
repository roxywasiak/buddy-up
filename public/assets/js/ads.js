// ~ DECLARATIONS
const adsBtn = $("#ads-btn");
const adsBudget = $("#ads-budget");
const adsPrice = $("#ads-price");
const adSubject = $("#ads-subject");
const adsDescription = $("#ads-description");
const adsTitle = $("#ads-title");

const handleFormSubmit = (event) => {
  console.log("click");
  // prevent url form default
  event.preventDefault();
  // get input from form
  const title = $("#ads-title").val();
  const description = $("#ads-description").val();
  const subject = $("#ads-subject").val();
  const budget = $("#ads-budget").val();
  const price = $("#ads-price").val();
};

// submit event handler for ads summit button
adsBtn.click(handleFormSubmit);
