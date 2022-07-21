// ~ DECLARATIONS
const searchAds = $("#searchAds");
const adsSearchDiv = $("#adsSearchDiv");
const subjectAds = $("#subjectAds");
const acceptButton = $("#acceptButton");
const viewResponsesBtn = $("#viewResponsesBtn");

const handleSearchClick = async () => {
  //   Target the ID of subject selected
  const subjectId = $("#adsSearchDiv option:selected").val();

  if (subjectId) {
    subjectAds.empty();
    const adResponse = await fetch(`api/ad/subject/${subjectId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await fetch(`api/response/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { data } = await adResponse.json();
    const { responseData } = await response.json();

    const respondedAds = [];
    responseData.forEach((item) => respondedAds.push(item.adId));

    // data.forEach(generateCards, respondedAds);

    for (let i = 0; i < data.length; i++) {
      if (respondedAds.includes(data[i].id)) {
        const responded = true;
        generateCards(data[i], responded);
      } else {
        const responded = false;
        generateCards(data[i], responded);
      }
    }
  }
};

const generateCards = (data, responded) => {
  const { title, description, price, subject, id } = data;
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
      <p class="uk-text-small">Budget: ${price.budget}</p>
  </div>
  <br />
  <br />
  <div
    class="uk-card uk-card-default uk-width-1-2@m uk-position-bottom-center uk-margin-bottom"
  >
  ${
    responded
      ? `<button class="uk-button uk-button-default" id="acceptButton" disabled>Accepted</button>`
      : `<button class="uk-button uk-button-primary" data-id=${id} id="acceptButton">Accept</button>`
  }

  </div>
</div>
  `);
};

const createResponse = async (event) => {
  const adId = $(event.target).data("id");

  const adPayload = { adId };

  const createResponse = await fetch("/api/response", {
    method: "POST",
    body: JSON.stringify(adPayload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (createResponse.ok) {
    handleSearchClick();
  }
};

const loadSessionsPage = () => {
  window.location.assign("/sessions");
};

// add click event listener

adsSearchDiv.on("change", handleSearchClick);
subjectAds.on("click", "#acceptButton", createResponse);
viewResponsesBtn.click(loadSessionsPage);
