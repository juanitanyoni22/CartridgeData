window.addEventListener("DOMContentLoaded", () => {
  console.log("content loaded");
  const submit = document.querySelector("#submit");
  const form = document.querySelector("#myForm");
  const inputs = form.querySelectorAll(".data");
  let formData = {};

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    inputs.forEach((input) => {
      console.log(input.value);
      formData[input.name] = input.value;
    });
    console.log("submit clicked");
    console.log(formData);
  });
});
