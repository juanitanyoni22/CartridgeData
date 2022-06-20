window.addEventListener("DOMContentLoaded", () => {
  console.log("content loaded");
  const submit = document.querySelector("#submit");
  const form = document.querySelector("#myForm");
  const inputs = form.querySelectorAll(".data");
  let formData = {};

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    await inputs.forEach((input) => {
      console.log(input.value);
      formData[input.name] = input.value;
    });
    console.log("submit clicked");
    console.log(formData);
    sendform(formData);
  });
  const sendform = async (data) => {
    console.log(formData);
    const result = document.getElementById("result");
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      redirect: "follow",
      body: JSON.stringify(formData),
    };
    fetch("/upload", options)
      .then((response) => {
        const resObj = JSON.parse(response);
        console.log(response);
        for (const any in resObj) {
          document.createElement("p").innerText = any;
        }
      })
      .catch((err) => {});
  };
});
