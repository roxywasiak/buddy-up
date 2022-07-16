// responses - pull all the responses for user id
const handleSessionCard = async () => {
  const tutorCard = $("#tutor-card").append();
  // append to card then do for each to append to each card

  const payload = JSON.stringify({
    tutorCard,
  });

  const response = await fetch("/api/response", {
    method: "GET",
    body: payload,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    window.location.replace("/response");
  } else {
    alert("Failed to get response");
  }
};

createProjectForm.on("submit", handleSessionCard);

// display ones that are complete as cards

// init

// id code from Amirtha

// turn this rep - look through api/response
// const response = await fetch("/apiAuth/signup", {
//   method: "GET",
//   body: JSON.stringify(payload),
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

handleSessionCard();
