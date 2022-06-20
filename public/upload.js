window.addEventListener("DOMContentLoaded", () => {
  console.log("content loaded");
  const submit = document.querySelector("#submit");
  submit.addEventListener("click", () => {
    console.log("submit clicked");
  });
});
