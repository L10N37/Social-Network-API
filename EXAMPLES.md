# API Endpoint Examples

Here are some examples of API endpoints and their respective request methods and bodies:

1. **GET Route to Return All Users**
   - Request Method: `GET`
   - URL: `http://localhost:3000/api/users`
   - Example Body: No body required for a GET request.

2. **GET Route to Return a Single User**
   - Request Method: `GET`
   - URL: `http://localhost:3000/api/users/:userId`
   - Example Body: No body required for a GET request.

3. **POST Route to Create a User**
   - Request Method: `POST`
   - URL: `http://localhost:3000/api/users`
   - Example Body:
     ```json
     {
       "name": "John Doe",
       "email": "johndoe@example.com",
       "password": "password123",
       "username": "johndoe123"
     }
     ```

4. **PUT Route to Update a User**
   - Request Method: `PUT`
   - URL: `http://localhost:3000/api/users/:userId`
   - Example Body:
     ```json
     {
       "username": "Updated username",
       "email": "updatedemail@example.com"
     }
     ```

5. **DELETE Route to Delete a User**
   - Request Method: `DELETE`
   - URL: `http://localhost:3000/api/users/:userId`
   - Example Body: No body required for a DELETE request.

6. **GET Route to Return All Thoughts**
   - Request Method: `GET`
   - URL: `http://localhost:3000/api/thoughts`
   - Example Body: No body required for a GET request.

7. **GET Route to Return a Single Thought**
   - Request Method: `GET`
   - URL: `http://localhost:3000/api/thoughts/:thoughtId`
   - Example Body: No body required for a GET request.

8. **POST Route to Create a Thought**
   - Request Method: `POST`
   - URL: `http://localhost:3000/api/thoughts`
   - Example Body:
     ```json
     {
       "thoughtText": "This is my thought.",
       "username": "user123"
     }
     ```

9. **PUT Route to Update a Thought**
   - Request Method: `PUT`
   - URL: `http://localhost:3000/api/thoughts/:thoughtId`
   - Example Body:
     ```json
     {
       "thoughtText": "Updated thought content"
     }
     ```

10. **DELETE Route to Delete a Thought**
    - Request Method: `DELETE`
    - URL: `http://localhost:3000/api/thoughts/:thoughtId`
    - Example Body: No body required for a DELETE request.

11. **POST Route to Create a Reaction to a Thought**
    - Request Method: `POST`
    - URL: `http://localhost:3000/api/thoughts/:thoughtId/reactions`
    - Example Body:
      ```json
      {
        "reactionBody": "like",
        "username": "user123"
      }
      ```

12. **DELETE Route to Delete a Reaction to a Thought**
    - Request Method: `DELETE`
    - URL: `http://localhost:3000/api/thoughts/:thoughtId/reactions/:reactionId`
    - Example Body: No body required for a DELETE request.
    - Replace `:thoughtId` in the URL with the actual ID of the thought and `:reactionId` with the ID of the reaction you want to delete.

13. **URL for adding a new friend**
    - URL: `/api/users/:userId/friends/:friendId`
    - Method: `POST`
    - Example: `/api/users/123456/friends/789012`

14. **URL for removing a friend**
    - URL: `/api/users/:userId/friends/:friendId`
    - Method: `DELETE`
    - Example: `/api/users/123456/friends/789012`

For both the `POST` and `DELETE` requests, you don't need to include a request body since the `userId` and `friendId` parameters are passed in the URL itself.

Please note that you need to replace `:userId` with the actual ID of the user and `:friendId` with the actual ID of the friend you want to add or remove.

Feel free to use these examples to interact with the API endpoints.
