// ~ DECLARATIONS
const searchAds = $("#searchAds");
const adsSearchDiv = $("#adsSearchDiv");
const subjectAds = $("#subjectAds");
const acceptButton = $("#acceptButton");

const handleSearchClick = async () => {
  //   Target the ID of subject selected
  const subjectId = $("#adsSearchDiv option:selected").val();

  if (subjectId) {
    subjectAds.empty();
    const response = await fetch(`api/ad/subject/${subjectId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { data } = await response.json();

    data.forEach(generateCards);
  }
};

const generateCards = ({ title, description, price, subject }) => {
  subjectAds.append(`
  <div class="uk-card uk-card-default uk-width-1-2@m ads-card">
  <div class="uk-card-header">
    <div class="uk-grid-small" uk-grid>
      <div class="uk-width-auto"></div>
      <div class="uk-width-expand">
        <br />
        <p class="uk-text-meta uk-margin-remove-top uk-text-small">
         ${title}
        </p>
      </div>
    </div>
  </div>
  <div class="uk-card-body">
    <p class="uk-text-small">${description}</p>
  </div>
  <div class="uk-card-body">
    <p class="uk-text-small">Subject: ${subject.subjectName}</p>
  </div>
  <div class="uk-card-footer">
    <a href="#" class="uk-button uk-button-text">
      <p class="uk-text-small">Budget: ${price.budget}</p></a>
  </div>
  <br />
  <br />
  <div
    class="uk-card uk-card-default uk-width-1-2@m uk-position-bottom-center uk-margin-bottom"
  >
    <button class="uk-button uk-button-primary" id="acceptButton">Accept</button>
  </div>
</div>
  `);
};

const createResponse = () => {
  console.log("Create Response");
};

// add click event listener

adsSearchDiv.on("change", handleSearchClick);
subjectAds.on("click", "#acceptButton", createResponse);
