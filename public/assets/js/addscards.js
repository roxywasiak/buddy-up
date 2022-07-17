const renderAdCards = async (data) => {
  const myAds = ` <div class="uk-card uk-card-default uk-width-1-2@m uk-position-center">
  <div class="uk-card-header">
    <div class="uk-grid-small uk-flex-middle" uk-grid>
      <div class="uk-width-auto"></div>
      <div class="uk-width-expand">
        <h3 class="uk-card-title uk-margin-remove-bottom">${data.title}</h3>
        <p class="uk-text-meta uk-margin-remove-top">
          <time datetime="2016-04-01T19:00">April 01, 2016</time>
          <br />
          Advanced Music
        </p>
      </div>
    </div>
  </div>
  <div class="uk-card-body">
    <h3>Description</h3>
    <p>
    ${data.description}
      "I want to practice music with someone who has advanced musical
      instruments skills. Is there a buddy who wants to join?"
    </p>
  </div>
  <div class="uk-card-footer">
    <a href="#" class="uk-button uk-button-text">
      <h3>Budget</h3>
      <p>${data.budget}</p></a
    >
  </div>
  <br />
  <br />
  <div
    class="uk-card uk-card-default uk-width-1-2@m uk-position-bottom-center uk-margin-bottom"
  >
    <button class="uk-button uk-button-primary">Accept</button>
    <button class="uk-button uk-button-secondary">Reject</button>
  </div>
</div>
    `;
};

const response = await fetch("/api/response", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
});
const data = await response.json();
console.log(response);
console.log(data);
if (data.success) {
  const adTitle = data.dataValues.title;
  const adDescription = data.dataValues.description;
  const adPriceId = data.dataValues.priceId;
  if (adTitle !== null) {
    console.log(data.dataValues);
    const response = await fetch(`/api/ad/${{}} `, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    await renderAdCards(data.data);
  }
}
