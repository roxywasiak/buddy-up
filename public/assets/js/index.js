const signupForm = $("#signup-form");

const renderError = (id, message) => {
  const errorDiv = $(`#${id}`);
  errorDiv.empty();
  errorDiv.append(`<div class="uk-text-danger">
      ${message}
    </div>`);
};

const handleSignup = async (event) => {
  console.log("Submitted");
  event.preventDefault();
  const firstName = $("#firstName").val();
  const lastName = $("#lastName").val();
  const email = $("#email").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirmPassword").val();
  const accountType = $("input[name='radio-choice']:checked").val();
  const termsAndConditions = $("#termsAndConditions").is(":checked");
  console.log(firstName);
  console.log(lastName);
  console.log(email), console.log(password);
  console.log(confirmPassword);
  console.log(accountType);
  console.log(termsAndConditions);

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
          firstName,
          lastName,
          email,
          password,
          termsAndConditions,
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
          window.location.assign("/login");
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

$("#signup-submit").click(handleSignup);
