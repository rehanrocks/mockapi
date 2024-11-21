
# User Management API

This is a simple mock API for managing users. It allows for performing CRUD operations like creating, reading, updating, and deleting user data.

## Base URL

https://673f63cfa9bc276ec4b8653b.mockapi.io/api/v1


## Endpoints

### 1. Get All Users

**Endpoint:**  
`GET /user`

**Description:**  
Retrieves a list of all users.

**Response:**

```
[
  {
    "createdAt": "2024-11-20T20:14:56.013Z",
    "id": "1",
    "name": "Mr. Laurence Turcotte",
    "country": "Bahamas",
    "city": "East Clintton",
    "phone": "(253) 709-1496 x4237",
    "sex": "female"
  },
  {
    "createdAt": "2024-11-20T20:40:50.022Z",
    "id": "2",
    "name": "Diane Schinner IV",
    "country": "Afghanistan",
    "city": "East Jeannecester",
    "phone": "(883) 751-6065 x51721",
    "sex": "male"
  },
  ...
]
2. Get User by ID
Endpoint:
GET /user/{id}

Description:
Fetches a single user by their ID.

Parameters:

id (string): The ID of the user to fetch.
Response:


{
  "createdAt": "2024-11-20T20:14:56.013Z",
  "id": "1",
  "name": "Mr. Laurence Turcotte",
  "country": "Bahamas",
  "city": "East Clintton",
  "phone": "(253) 709-1496 x4237",
  "sex": "female"
}
3. Create a New User
Endpoint:
POST /user

Description:
Creates a new user.

Request Body:

{
  "name": "New User",
  "country": "Country",
  "city": "City",
  "phone": "123-456-7890",
  "sex": "male"
}
Response:

{
  "createdAt": "2024-11-21T14:30:49.322Z",
  "id": "22",
  "name": "New User",
  "country": "Country",
  "city": "City",
  "phone": "123-456-7890",
  "sex": "male"
}
4. Update an Existing User
Endpoint:
PUT /user/{id}

Description:
Updates the details of an existing user by their ID.

Parameters:

id (string): The ID of the user to update.
Request Body:


{
  "name": "Updated User Name",
  "country": "Updated Country",
  "city": "Updated City",
  "phone": "987-654-3210",
  "sex": "female"
}
Response:


{
  "createdAt": "2024-11-20T20:14:56.013Z",
  "id": "1",
  "name": "Updated User Name",
  "country": "Updated Country",
  "city": "Updated City",
  "phone": "987-654-3210",
  "sex": "female"
}
5. Delete a User
Endpoint:
DELETE /user/{id}

Description:
Deletes a user by their ID.

Parameters:

id (string): The ID of the user to delete.
Response:


{
  "message": "User deleted successfully"
}
Authentication
This API does not require authentication. It is a simple mock API for testing purposes.

Usage
Fetching All Users
To fetch all users, you can send a GET request to the /user endpoint:


curl https://673f63cfa9bc276ec4b8653b.mockapi.io/api/v1/user
Creating a New User
To create a new user, send a POST request with the user data to the /user endpoint:


curl -X POST https://673f63cfa9bc276ec4b8653b.mockapi.io/api/v1/user \
-H "Content-Type: application/json" \
-d '{
  "name": "New User",
  "country": "Country",
  "city": "City",
  "phone": "123-456-7890",
  "sex": "male"
}'
Updating a User
To update a user, send a PUT request with the updated data to /user/{id}:


curl -X PUT https://673f63cfa9bc276ec4b8653b.mockapi.io/api/v1/user/1 \
-H "Content-Type: application/json" \
-d '{
  "name": "Updated User Name",
  "country": "Updated Country",
  "city": "Updated City",
  "phone": "987-654-3210",
  "sex": "female"
}'
Deleting a User
To delete a user, send a DELETE request to /user/{id}:


curl -X DELETE https://673f63cfa9bc276ec4b8653b.mockapi.io/api/v1/user/1
Conclusion
This mock API provides a simple way to manage user data, with endpoints for CRUD operations. You can use it for testing and development purposes, integrating it with any front-end or back-end systems that need user management functionality.

yaml
Copy code

---

This format contains all the necessary information to interact with the API, including endpoints
