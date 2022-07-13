const signupForm = $("#signup-form");

const handleSignup = (event) => {
  console.log("Submitted");
  event.preventDefault();
  const firstName = $("#firstName").val();
  console.log(firstName);
};

signupForm.submit(handleSignup);
