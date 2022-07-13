const signupForm = $("#signup-form");

const handleSignup = (event) => {
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
};

$("#signup-submit").click(handleSignup);
