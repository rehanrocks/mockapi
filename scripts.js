document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = 'https://673f63cfa9bc276ec4b8653b.mockapi.io/api/v1/user';
  const userForm = document.getElementById('userForm');
  const userIdInput = document.getElementById('userId');
  const nameInput = document.getElementById('name');
  const countryInput = document.getElementById('country');
  const cityInput = document.getElementById('city');
  const phoneInput = document.getElementById('phone');
  const sexInput = document.getElementById('sex');
  const userTable = document.getElementById('userTable').getElementsByTagName('tbody')[0];
  const toggleDarkModeBtn = document.getElementById('toggleDarkMode');

  // Fetch users and display
  const fetchUsers = () => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        userTable.innerHTML = '';
        data.forEach(user => {
          const row = userTable.insertRow();
          row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.country}</td>
            <td>${user.city}</td>
            <td>${user.phone}</td>
            <td>${user.sex}</td>
            <td>
              <button onclick="editUser('${user.id}')">Edit</button>
              <button onclick="deleteUser('${user.id}')">Delete</button>
            </td>
          `;
        });
      });
  };

  // Add or Update user
  userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userId = userIdInput.value;
    const name = nameInput.value;
    const country = countryInput.value;
    const city = cityInput.value;
    const phone = phoneInput.value;
    const sex = sexInput.value;

    const userData = {
      name,
      country,
      city,
      phone,
      sex
    };

    if (userId) {
      // Update user
      fetch(`${apiUrl}/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then(response => response.json())
      .then(() => {
        fetchUsers();
        userForm.reset();
      });
    } else {
      // Add user
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then(response => response.json())
      .then(() => {
        fetchUsers();
        userForm.reset();
      });
    }
  });

  // Edit user
  window.editUser = (id) => {
    fetch(`${apiUrl}/${id}`)
      .then(response => response.json())
      .then(data => {
        userIdInput.value = data.id;
        nameInput.value = data.name;
        countryInput.value = data.country;
        cityInput.value = data.city;
        phoneInput.value = data.phone;
        sexInput.value = data.sex;
      });
  };

  // Delete user
  window.deleteUser = (id) => {
    fetch(`${apiUrl}/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      fetchUsers();
    });
  };

  // Toggle Dark Mode
  toggleDarkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggleDarkModeBtn.textContent = 'Toggle Light Mode';
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      toggleDarkModeBtn.textContent = 'Toggle Dark Mode';
    }
  });

  // Initial fetch
  fetchUsers();
});
