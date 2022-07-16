const tutorCard = $("#tutor-card");

// responses - pull all the responses for user id

// display ones that are complete as cards

// init

// id code from Amirtha

// turn this rep - look through api/response
const response = await fetch("/apiAuth/signup", {
  method: "GET",
  body: JSON.stringify(payload),
  headers: {
    "Content-Type": "application/json",
  },
});

tutorCard();
