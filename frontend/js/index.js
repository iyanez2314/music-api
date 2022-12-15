const formEl = document.getElementById("form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(formEl);
  console.log(formData.get("aName"));
});
