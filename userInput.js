let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let userPrompt = document.getElementById("userPromt");

  if (userPromt.value == "") {
    alert("Ensure you input a valid prompt.");
  } else {
    alert("This form has been successfully submitted!");
    console.log(`The prompt of ${userPrompt.value} was submitted`);

    userPrompt.value = "";
  }
});
