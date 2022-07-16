// responses - pull all the responses for user id
const handleCreateProject = async (event) => {
  event.preventDefault();

  const tutorCard = $("#tutor-card").val();

  const payload = JSON.stringify({
    tutorCard,
  });

  const response = await fetch("/api/projects", {
    method: "GET",
    body: payload,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    window.location.replace("/profile");
  } else {
    alert("Failed to create project");
  }
};

createProjectForm.on("submit", handleCreateProject);

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
