const API_URL = "https://jsonplaceholder.typicode.com/users";

let users = [];
let currentPage = 1;
const usersPerPage = 4;

const userGrid = document.getElementById("userGrid");
const searchInput = document.getElementById("searchInput");
const pageInfo = document.getElementById("pageInfo");

/* Fetch Users */
async function fetchUsers() {
  const res = await fetch(API_URL);
  users = await res.json();
  displayUsers();
}

/* Display Users with Pagination */
function displayUsers(filtered = users) {
  userGrid.innerHTML = "";

  const start = (currentPage - 1) * usersPerPage;
  const end = start + usersPerPage;
  const paginatedUsers = filtered.slice(start, end);

  paginatedUsers.forEach(user => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${user.name}</h3>
      <p>${user.email}</p>
      <p style="font-weight: bold;">${user.address.city}</p>
      <p>${user.address.street}</p>
    `;
    userGrid.appendChild(div);
  });

  pageInfo.innerText = `Page ${currentPage}`;
}

/* Search & Filter */
searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = users.filter(user =>
    user.name.toLowerCase().includes(value) ||
    user.email.toLowerCase().includes(value)
  );
  currentPage = 1;
  displayUsers(filtered);
});

/* Pagination Buttons */
document.getElementById("nextBtn").onclick = () => {
  if (currentPage * usersPerPage < users.length) {
    currentPage++;
    displayUsers();
  }
};

document.getElementById("prevBtn").onclick = () => {
  if (currentPage > 1) {
    currentPage--;
    displayUsers();
  }
};

/* Initial Load */
fetchUsers();
