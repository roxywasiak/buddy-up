//ads that have been matched to a buddy or tutor which can accept or reject
const acceptAd = $("#acceptButton");
const rejectAd = $("rejectButton");

//adds that have been matched and accepted/ or sent out
const completedAd = $("#completedAd");
const pendingAd = $("pendingAd");

const payload = {
  adId,
  status: "pending",
};

//this function is when a buddy/tutor responds to an add
const handleAcceptedAd = async (event) => {
  event.preventDefault();
  const clickAcceptButton = $("acceptButton").val();
  if (clickAcceptButton) {
    data = await Response.findAll({ where: {} });
  }
  //fire a request to update the status
  //post request to controller api/response with ad id req.session.user.id
  // const response = await fetch("/api/response", {
  //   method: "POST",
  //   body: JSON.stringify(payload),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  const data = await response.json();
  //get response from data
  //put request to update the response from user
  const requestBody = {
    status: "completed",
    id: 1, // get this from a data attr on the card
  };
  if (payload) console.log("Advert accepted");
};

const handleRejectAdClick = async (event) => {
  event.preventDefault();
  //tell the database to delete the car
  //delete request
  console.log("Advert rejected");
};

// const handleCompletedAd = async (event) => {
//   event.preventDefault();
//   //click event
//   //user ad shows completed button
//   //post request
// };

acceptAd.click("handleAcceptedAd");
rejectAd.click("handleRejectAdClick");
