/*******************
 THEME SWITCHER
********************/
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


/*******************
 USER DIRECTORY
********************/
// let page = 1;
// let users = [];

// async function fetchUsers() {
//   const res = await fetch(`https://reqres.in/api/users?page=${page}`);
//   const data = await res.json();
//   users = data.data;
//   displayUsers(users);
// }

// function displayUsers(data) {
//   document.getElementById("userGrid").innerHTML = data.map(user => `
//     <div class="card">
//       <img src="${user.avatar}">
//       <h4>${user.first_name} ${user.last_name}</h4>
//       <p>${user.email}</p>
//     </div>
//   `).join("");
// }

// document.getElementById("search").addEventListener("input", e => {
//   const value = e.target.value.toLowerCase();
//   const filtered = users.filter(u =>
//     u.first_name.toLowerCase().includes(value)
//   );
//   displayUsers(filtered);
// });

// document.getElementById("next").onclick = () => {
//   page++;
//   fetchUsers();
// };

// document.getElementById("prev").onclick = () => {
//   if (page > 1) {
//     page--;
//     fetchUsers();
//   }
// };

// fetchUsers();

/*******************
 FORM VALIDATION
********************/
document.getElementById("myForm").addEventListener("submit", e => {
  e.preventDefault();
});

document.getElementById("name").addEventListener("input", e => {
  document.getElementById("nameError").innerText =
    e.target.value.length < 3 ? "Name must be 3+ chars" : "";
});

document.getElementById("email").addEventListener("input", e => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  document.getElementById("emailError").innerText =
    regex.test(e.target.value) ? "" : "Invalid email";
});

document.getElementById("password").addEventListener("input", e => {
  document.getElementById("passwordError").innerText =
    e.target.value.length < 6 ? "Password must be 6+ chars" : "";
});

/*******************
 ACCORDION
********************/
document.querySelectorAll(".accordion h3").forEach(header => {
  header.addEventListener("click", () => {
    header.nextElementSibling.classList.toggle("show");
  });
});
