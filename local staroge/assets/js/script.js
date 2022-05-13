showData();

const submit = document.querySelector("form");
submit.addEventListener("submit", function(e) {
    e.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;

  let form = new Array();

  form = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

    form.push({
      firstName: firstName,
      lastName: lastName,
      age: age,
    });

    localStorage.setItem("users", JSON.stringify(form));


  showData();
})

function showData() {
//   document.getElementById("tbody").innerHTML = "";

  let form = new Array();

  form = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  if (form) {
    for (let i = 0; i < form.length; i++) {
      let addTr = document.createElement("tr");

      addTr.innerHTML =
        "  <td>" +
        form[i].firstName +
        "</td><td>" +
        form[i].lastName +
        "</td><td>" +
        form[i].age +
        "</td>";

      document.getElementById("tbody").appendChild(addTr);
    }
  }
}