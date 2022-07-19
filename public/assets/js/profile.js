const handleCompleteProfileClick = () => {
  window.location.assign("/completeProfile");
};

const change = () => {
  $("#priceValueText").text(`£${$("#priceRange").val()}`);
};

const getPriceId = (priceAmount) => {
  if (priceAmount < 15) {
    return 1;
  } else if (priceAmount < 25) {
    return 2;
  } else {
    return 3;
  }
};

const submitProfile = async (event) => {
  event.preventDefault();
  const subjectId = $("#subjectChoice option:selected").val();
  const level = $("#levelChoice option:selected").val();
  const location = $("#locationInput").val();
  const isRemote = $("#isRemote").is(":checked");
  const priceAmount = $("#priceRange").val();
  const priceId = getPriceId(priceAmount);
  const socialMedia = $("#socialMediaLink").val();
  const calendlyLink = $("#calendlyLink").val();
  const isProfileComplete = true;

  const tutorPayload = {
    socialMedia,
    calendlyLink,
    priceAmount,
    priceId,
    location,
    isRemote,
    isProfileComplete,
  };

  const subjectPayload = {
    userType: "tutor",
    subjectId,
    level,
  };

  const tutorResponse = await fetch("/api/tutor/12", {
    method: "PUT",
    body: JSON.stringify(tutorPayload),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (tutorResponse.ok) {
    const subjectResponse = await fetch("/api/tutorSubject", {
      method: "POST",
      body: JSON.stringify(subjectPayload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (subjectResponse.ok) {
      window.location.assign("/dashboard");
    }
  }
};

$("#priceRange").on("input", change);
profileSubmit.submit(submitProfile);
completeProfile.click(handleCompleteProfileClick);
