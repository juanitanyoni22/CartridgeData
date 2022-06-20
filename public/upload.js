window.addEventListener("DOMContentLoaded", () => {
  console.log("content loaded");
  const submit = document.querySelector("#submit");
  const form = document.querySelector("#myForm");
  const inputs = form.querySelectorAll("input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
      console.log(input.value);
    });
    console.log("submit clicked");
  });
});
