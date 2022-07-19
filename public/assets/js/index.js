const signupForm = $("#signup-form");
const loginForm = $("#login-form");
const logoutBtn = $("#logout-btn");
const completeProfile = $("#complete-profile-btn");
const profileSubmit = $("#profile4");

const renderError = (id, message) => {
  const errorDiv = $(`#${id}`);
  errorDiv.empty();
  errorDiv.append(`<div class="uk-text-danger">
      ${message}
    </div>`);
};

const handleSignup = async (event) => {
  event.preventDefault();
  console.log("Signup Submitted");

  const firstName = $("#firstName").val();
  const lastName = $("#lastName").val();
  const email = $("#email").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirmPassword").val();
  const userType = $("input[name='radio-choice']:checked").val();
  const termsAndConditions = $("#termsAndConditions").is(":checked");
  const isProfileComplete = false;

  if (
    firstName &&
    lastName &&
    email &&
    password &&
    confirmPassword &&
    termsAndConditions
  ) {
    if (password === confirmPassword) {
      try {
        const payload = {
          userType,
          firstName,
          lastName,
          email,
          password,
          isProfileComplete,
        };

        const response = await fetch("/apiAuth/signup", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (data.success) {
          window.location.assign("/dashboard");
          console.log("User Created");
        } else {
          renderError("signup-error", "Failed to create account. Try again.");
        }
      } catch (error) {
        renderError("signup-error", "Failed to create account. Try again.");
      }
    } else {
      renderError("signup-error", "Passwords do not match. Try again.");
    }
  } else {
    renderError("signup-error", "Please complete all required fields.");
  }
};

const handleLogin = async (event) => {
  event.preventDefault();

  const email = $("#login-email").val();
  const password = $("#login-password").val();
  const userType = $("input[name='login-choice']:checked").val();

  if (email && password) {
    try {
      const payload = {
        email,
        password,
        userType,
      };

      const response = await fetch("/apiAuth/login", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        window.location.assign("/dashboard");
      } else {
        renderError("login-error", "Failed to login. Try again.");
      }
    } catch (error) {
      renderError("login-error", "Failed to login. Try again.");
    }
  } else {
    renderError("login-error", "Please complete all required fields.");
  }
};

const handleLogout = async () => {
  try {
    const response = await fetch("/apiAuth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      window.location.assign("/");
    }
  } catch (error) {
    console.log("Failed to logout");
  }
};

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
signupForm.submit(handleSignup);
loginForm.submit(handleLogin);
logoutBtn.click(handleLogout);
profileSubmit.submit(submitProfile);
completeProfile.click(handleCompleteProfileClick);
