const signupForm = $("#signup-form");

const handleSignup = (event) => {
  event.preventDefault();
  console.log("Here");
};

signupForm.submit(handleSignup);
