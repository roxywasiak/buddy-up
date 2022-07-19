const completeProfile = $("#complete-profile-btn");
const profileSubmit = $("#profile4");
const page1Submit = $("#page1Submit");
const page2Submit = $("#page2Submit");
const page3Submit = $("#page3Submit");
const updateProfileForm = $("#updateProfileForm");

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

  if (socialMedia && calendlyLink) {
    try {
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

      const tutorResponse = await fetch("/api/tutor", {
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
        } else {
          renderError("profile-error", "Failed to update. Please try again.");
        }
      } else {
        renderError(
          "profile-error",
          "Failed to update. Please enter valid links."
        );
      }
    } catch (error) {
      renderError("profile-error", "Failed to update. Please try again.");
    }
  } else {
    renderError("profile-error", "Failed to update. Please enter valid links.");
  }
};

const validateInputs = (pageNumber) => {
  const page = pageNumber.data.pageNumber;
  if (page === "1") {
    page1Submit.attr("uk-switcher-item", "1");
  } else if (page === "2") {
    const location = $("#locationInput").val();
    if (!location) {
      renderError("location-error", "Please enter a valid location");
      page2Submit.attr("uk-switcher-item", "1");
    } else {
      page2Submit.attr("uk-switcher-item", "2");
    }
  } else if (page === "3") {
    page3Submit.attr("uk-switcher-item", "3");
  }
};

const updateProfile = () => {
  const firstName = $("#updateFirstName").val();
  const lastName = $("#updateLastName").val();
  const email = $("#updateEmail").val();
  const location = $("#updateLocation").val();
  const socialMedia = $("#updateSocialMedia").val();
  const calendlyLink = $("#updateCalendlyLink").val();
  const priceAmount = $("#updatePriceAmount").val();
};

$("#priceRange").on("input", change);
completeProfile.click(handleCompleteProfileClick);
page1Submit.click({ pageNumber: "1" }, validateInputs);
page2Submit.click({ pageNumber: "2" }, validateInputs);
page3Submit.click({ pageNumber: "3" }, validateInputs);
profileSubmit.submit(submitProfile);
updateProfileForm.submit(updateProfile);
