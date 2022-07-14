const signupForm = $("#signup-form");
const loginForm = $("#login-form");
const logout = $("#logout-btn");

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

  if (email && password) {
    try {
      const payload = {
        email,
        password,
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
        const { userType } = data;
        if (userType === "student") {
          window.location.assign("/student-dashboard");
        } else if (userType === "tutor") {
          window.location.assign("/tutor-dashboard");
        }
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

signupForm.submit(handleSignup);
loginForm.submit(handleLogin);
