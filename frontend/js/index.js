const formEl = document.getElementById("form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(formEl);
  const data = new URLSearchParams(formData);

  fetch("http://localhost:3001/api/artist", {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
